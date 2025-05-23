import { NextResponse } from "next/server";
import { formSchema, FormSchema } from "@/lib/schema";
import { generateCGU } from "@/lib/generate-cgu";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Valider les données du formulaire
    const validatedData = formSchema.parse(body) as FormSchema;

    // Générer les CGU
    const cguHtml = generateCGU(validatedData);

    return NextResponse.json({ success: true, html: cguHtml });
  } catch (error) {
    console.error("Error generating CGU:", error);
    return NextResponse.json(
      { success: false, message: "Failed to generate CGU" },
      { status: 400 }
    );
  }
}
