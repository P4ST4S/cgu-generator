import { ServiceType, Jurisdiction } from "./types";
import { FormSchema } from "./schema";

export function generateCGU(data: FormSchema): string {
  const { siteName, serviceType, collectedData, services, jurisdiction } = data;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} ${getMonthName(
    currentDate.getMonth()
  )} ${currentDate.getFullYear()}`;

  // Section des données collectées
  const dataCollectionText = generateDataCollectionSection(collectedData);

  // Section des services utilisés
  const servicesText = generateServicesSection(services);

  // Section juridiction
  const jurisdictionText = generateJurisdictionSection(jurisdiction);

  // Section type de service
  const serviceTypeText = generateServiceTypeSection(serviceType);

  // Template des CGU
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2 {
      color: #2c3e50;
    }
    h1 {
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    h2 {
      margin-top: 30px;
    }
    p {
      margin-bottom: 15px;
    }
    .footer {
      margin-top: 50px;
      border-top: 1px solid #eee;
      padding-top: 20px;
      font-size: 0.9em;
      color: #7f8c8d;
    }
  </style>
  <title>Conditions Générales d&apos;Utilisation - ${siteName}</title>
</head>
<body>
  <h1>Conditions Générales d&apos;Utilisation - ${siteName}</h1>
  
  <p><em>Dernière mise à jour : ${formattedDate}</em></p>
  
  <p>Bienvenue sur ${siteName}. Veuillez lire attentivement les présentes conditions générales d'utilisation qui régissent l'utilisation de notre ${serviceTypeText}.</p>
  
  <h2>1. Acceptation des Conditions</h2>
  <p>En accédant ou en utilisant ${siteName}, vous acceptez d&apos;être lié par ces Conditions Générales d&apos;Utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre service.</p>
  
  <h2>2. Description du Service</h2>
  <p>${siteName} est un ${serviceTypeText} qui permet aux utilisateurs de ${getServiceDescription(
    serviceType
  )}.</p>
  
  <h2>3. Inscription et Compte</h2>
  <p>Pour utiliser certaines fonctionnalités de notre service, vous pourriez devoir créer un compte. Vous êtes responsable de maintenir la confidentialité de vos informations de connexion et de toutes les activités qui se produisent sous votre compte.</p>
  
  <h2>4. Propriété Intellectuelle</h2>
  <p>Le contenu, les fonctionnalités et la disponibilité de ${siteName} sont notre propriété exclusive et sont protégés par les lois sur la propriété intellectuelle.</p>
  
  <h2>5. Collecte et Utilisation des Données</h2>
  ${dataCollectionText}
  
  <h2>6. Services Tiers</h2>
  ${servicesText}
  
  <h2>7. Limitation de Responsabilité</h2>
  <p>${siteName} est fourni "tel quel" sans garantie d'aucune sorte. Nous ne garantissons pas que notre service sera ininterrompu, opportun, sécurisé ou sans erreur.</p>
  
  <h2>8. Modifications des CGU</h2>
  <p>Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur ${siteName}.</p>
  
  <h2>9. Résiliation</h2>
  <p>Nous nous réservons le droit de résilier ou de restreindre votre accès à notre service, sans préavis, pour toute raison ou sans raison.</p>
  
  <h2>10. Loi Applicable</h2>
  ${jurisdictionText}
  
  <div class="footer">
    <p>© ${currentDate.getFullYear()} ${siteName}. Tous droits réservés.</p>
  </div>
</body>
</html>
  `;
}

// Helpers
function getMonthName(month: number): string {
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  return months[month];
}

function getServiceDescription(serviceType: ServiceType): string {
  switch (serviceType) {
    case ServiceType.BLOG:
      return "consulter et interagir avec du contenu éditorial";
    case ServiceType.ECOMMERCE:
      return "acheter des produits en ligne";
    case ServiceType.SAAS:
      return "utiliser notre solution logicielle en ligne";
    case ServiceType.MOBILE_APP:
      return "utiliser notre application mobile et ses fonctionnalités";
    default:
      return "utiliser nos services";
  }
}

function generateDataCollectionSection(
  collectedData: FormSchema["collectedData"]
): string {
  const collectedItems = [];

  if (collectedData.email) collectedItems.push("adresses email");
  if (collectedData.ip) collectedItems.push("adresses IP");
  if (collectedData.creditCard)
    collectedItems.push("informations de carte bancaire");
  if (collectedData.phone) collectedItems.push("numéros de téléphone");
  if (collectedData.location) collectedItems.push("données de localisation");
  if (collectedData.browsing) collectedItems.push("données de navigation");

  if (collectedItems.length === 0) {
    return "<p>Nous ne collectons aucune donnée personnelle à travers notre service.</p>";
  }

  return `
    <p>Nous collectons les données personnelles suivantes : ${collectedItems.join(
      ", "
    )}.</p>
    <p>Ces données sont utilisées uniquement pour fournir et améliorer notre service. Nous ne vendrons ni ne louerons vos informations personnelles à des tiers sans votre consentement explicite, sauf si la loi l'exige.</p>
    ${
      collectedData.creditCard
        ? "<p>Les informations de paiement sont traitées par des prestataires de services de paiement sécurisés et ne sont pas stockées sur nos serveurs.</p>"
        : ""
    }
  `;
}

function generateServicesSection(services: FormSchema["services"]): string {
  const serviceItems = [];

  if (services.stripe)
    serviceItems.push("Stripe pour le traitement des paiements");
  if (services.googleAnalytics)
    serviceItems.push("Google Analytics pour l'analyse du trafic");
  if (services.facebook)
    serviceItems.push(
      "Facebook pour les fonctionnalités de partage social et la publicité"
    );
  if (services.aws)
    serviceItems.push("Amazon Web Services pour l'hébergement et le stockage");
  if (services.advertising)
    serviceItems.push(
      "des réseaux publicitaires pour afficher des annonces pertinentes"
    );

  if (serviceItems.length === 0) {
    return "<p>Notre service n'utilise aucun service tiers pour son fonctionnement.</p>";
  }

  return `
    <p>Notre service utilise les services tiers suivants : ${serviceItems.join(
      ", "
    )}.</p>
    <p>Ces services tiers peuvent collecter et traiter vos données selon leurs propres politiques de confidentialité. Nous vous encourageons à consulter les politiques de confidentialité de ces services tiers.</p>
  `;
}

function generateJurisdictionSection(jurisdiction: Jurisdiction): string {
  switch (jurisdiction) {
    case Jurisdiction.FRANCE:
      return `
        <p>Ces conditions sont régies par la loi française. Tout litige relatif à l'interprétation ou à l'exécution de ces CGU sera soumis aux tribunaux compétents de Paris, France.</p>
        <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
      `;
    case Jurisdiction.EUROPE:
      return `
        <p>Ces conditions sont régies par le droit de l'Union Européenne. Tout litige relatif à l'interprétation ou à l'exécution de ces CGU sera soumis à la juridiction compétente selon votre pays de résidence au sein de l'Union Européenne.</p>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'opposition, de limitation du traitement, d'effacement et de portabilité de vos données personnelles.</p>
      `;
    case Jurisdiction.USA:
      return `
        <p>Ces conditions sont régies par les lois de l'État de Californie, États-Unis, sans égard aux principes de conflits de lois. Tout litige relatif à l'interprétation ou à l'exécution de ces CGU sera soumis aux tribunaux fédéraux ou d'État situés dans le comté de San Francisco, Californie.</p>
        <p>Si vous êtes résident californien, vous pouvez avoir des droits supplémentaires en vertu du California Consumer Privacy Act (CCPA).</p>
      `;
    case Jurisdiction.INTERNATIONAL:
      return `
        <p>Ces conditions sont régies par les lois internationales applicables. Tout litige relatif à l'interprétation ou à l'exécution de ces CGU sera réglé par arbitrage conformément aux règles de la Chambre de Commerce Internationale.</p>
        <p>Nous nous engageons à respecter les lois sur la protection des données applicables dans votre juridiction.</p>
      `;
    default:
      return `
        <p>Ces conditions sont régies par les lois applicables. Tout litige relatif à l'interprétation ou à l'exécution de ces CGU sera soumis aux tribunaux compétents.</p>
      `;
  }
}

function generateServiceTypeSection(serviceType: ServiceType): string {
  switch (serviceType) {
    case ServiceType.BLOG:
      return "blog";
    case ServiceType.ECOMMERCE:
      return "site e-commerce";
    case ServiceType.SAAS:
      return "service SaaS (Software as a Service)";
    case ServiceType.MOBILE_APP:
      return "application mobile";
    default:
      return "service";
  }
}
