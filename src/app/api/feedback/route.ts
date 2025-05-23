import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Interface pour le corps de la requête
interface FeedbackRequestBody {
  name: string;
  email: string;
  message: string;
}

// Configuration des maximums pour éviter les abus
const MAX_MESSAGE_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 320;
const MAX_NAME_LENGTH = 100;

export async function POST(request: Request) {
  try {
    console.log("Traitement de la requête feedback...");

    // Extraire les données du corps de la requête
    const body: FeedbackRequestBody = await request.json();
    console.log("Données reçues:", body);

    // Vérifier que les champs requis sont présents
    if (!body.email || !body.message) {
      console.log("Erreur: Email ou message manquant", {
        email: body.email,
        message: !!body.message,
      });
      return NextResponse.json(
        { success: false, message: "Email et message sont requis" },
        { status: 400 }
      );
    }

    // Validation des longueurs
    if (body.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Le message est trop long" },
        { status: 400 }
      );
    }

    if (body.email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { success: false, message: "L'email est trop long" },
        { status: 400 }
      );
    }

    if (body.name && body.name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Le nom est trop long" },
        { status: 400 }
      );
    }

    // Validation email simple
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Enregistrer le feedback (ici, simple console.log)
    console.log("Nouveau feedback reçu:");
    console.log(`Email: ${body.email}`);
    console.log(`Nom: ${body.name || "Non fourni"}`);
    console.log(`Message: ${body.message}`);

    // Envoi d'email si la configuration est présente
    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_RECIPIENT &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASSWORD
    ) {
      try {
        // Configuration du transporteur email
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT) || 587,
          secure: Number(process.env.EMAIL_PORT) === 465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        // Envoi de l'email
        await transporter.sendMail({
          from: `"Générateur de CGU" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_RECIPIENT,
          subject: `Nouveau feedback de ${body.name || "Anonyme"}`,
          text: `
            Nom: ${body.name || "Non fourni"}
            Email: ${body.email}
            Message:
            ${body.message}
          `,
          html: `
            <h2>Nouveau feedback du Générateur de CGU</h2>
            <p><strong>Nom:</strong> ${body.name || "Non fourni"}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${body.message}</p>
          `,
        });

        console.log("Email de feedback envoyé avec succès");
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        // On continue même si l'email échoue - le feedback est déjà enregistré dans les logs
      }
    }

    // Enregistrement d'un événement d'analytics (optionnel)
    // Si vous voulez suivre les soumissions de feedback dans vos analytics

    // Renvoyer une réponse réussie
    return NextResponse.json(
      {
        success: true,
        message: "Feedback reçu avec succès",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du feedback:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors du traitement du feedback",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
