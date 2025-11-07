interface FormData {
  companyName: string;
  companyType: string;
  email: string;
  website: string;
  address: string;
  siret: string;
  activityType: string;
  hasDataCollection: boolean;
  hasEcommerce: boolean;
  hasNewsletter: boolean;
  hasCookies: boolean;
  hasUserAccounts: boolean;
}

export function generateCGU(formData: FormData): string {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conditions Générales d'Utilisation - ${formData.companyName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #1BAAA0;
      border-bottom: 3px solid #1BAAA0;
      padding-bottom: 10px;
    }
    h2 {
      color: #1BAAA0;
      margin-top: 30px;
    }
    h3 {
      color: #14968D;
      margin-top: 20px;
    }
    .header-info {
      background: #F5F7FA;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .section {
      margin-bottom: 30px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Conditions Générales d'Utilisation</h1>

  <div class="header-info">
    <p><strong>Société :</strong> ${formData.companyName} (${formData.companyType})</p>
    <p><strong>Siège social :</strong> ${formData.address.replace(/\n/g, '<br>')}</p>
    <p><strong>SIRET :</strong> ${formData.siret}</p>
    <p><strong>Email :</strong> ${formData.email}</p>
    <p><strong>Site web :</strong> ${formData.website}</p>
    <p><strong>Date de dernière mise à jour :</strong> ${currentDate}</p>
  </div>

  <div class="section">
    <h2>1. Objet</h2>
    <p>
      Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités
      et conditions d'utilisation des services proposés sur le site ${formData.website} (ci-après le « Site »),
      ainsi que de définir les droits et obligations des parties dans ce cadre.
    </p>
    <p>
      Le Site est édité par ${formData.companyName}, ${formData.companyType}, dont le siège social est situé
      ${formData.address}, immatriculée sous le numéro SIRET ${formData.siret}.
    </p>
    <p>
      L'activité principale de la société est : ${formData.activityType}.
    </p>
  </div>

  <div class="section">
    <h2>2. Acceptation des CGU</h2>
    <p>
      L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU.
      L'utilisateur reconnaît avoir pris connaissance des présentes CGU et s'engage à les respecter.
    </p>
    <p>
      ${formData.companyName} se réserve le droit de modifier à tout moment les présentes CGU.
      Les modifications entreront en vigueur dès leur mise en ligne. Il est donc conseillé à l'utilisateur
      de consulter régulièrement la dernière version des CGU disponible sur le Site.
    </p>
  </div>

  <div class="section">
    <h2>3. Accès au Site</h2>
    <p>
      Le Site est accessible gratuitement depuis n'importe où par tout utilisateur disposant d'un accès à Internet.
      Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels,
      connexion Internet, etc.) sont à sa charge.
    </p>
    <p>
      ${formData.companyName} met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès
      de qualité au Site. Cependant, ${formData.companyName} ne peut garantir un accès au Site sans interruption
      ni dysfonctionnement.
    </p>
  </div>

  ${formData.hasUserAccounts ? `
  <div class="section">
    <h2>4. Inscription et compte utilisateur</h2>
    <p>
      L'utilisation de certaines fonctionnalités du Site nécessite la création d'un compte utilisateur.
      Lors de l'inscription, l'utilisateur s'engage à fournir des informations exactes et à jour.
    </p>
    <p>
      L'utilisateur est responsable de la confidentialité de ses identifiants de connexion et s'engage à ne pas
      les divulguer à des tiers. Toute utilisation du compte sera présumée avoir été effectuée par l'utilisateur
      lui-même.
    </p>
    <p>
      En cas d'utilisation frauduleuse ou de suspicion d'utilisation frauduleuse du compte, l'utilisateur s'engage
      à en informer immédiatement ${formData.companyName}.
    </p>
  </div>
  ` : ''}

  ${formData.hasEcommerce ? `
  <div class="section">
    <h2>${formData.hasUserAccounts ? '5' : '4'}. Commandes et paiements</h2>
    <h3>Commande</h3>
    <p>
      L'utilisateur peut passer commande directement sur le Site. Toute commande vaut acceptation des présentes CGU.
    </p>
    <p>
      ${formData.companyName} se réserve le droit de refuser toute commande pour un motif légitime, notamment
      en cas de litige avec un client ou de quantités anormalement élevées.
    </p>

    <h3>Prix</h3>
    <p>
      Les prix affichés sur le Site sont en euros (€) et incluent la TVA applicable.
      ${formData.companyName} se réserve le droit de modifier ses prix à tout moment.
    </p>

    <h3>Paiement</h3>
    <p>
      Le paiement s'effectue en ligne de manière sécurisée. Les moyens de paiement acceptés sont indiqués
      lors du processus de commande.
    </p>

    <h3>Droit de rétractation</h3>
    <p>
      Conformément aux articles L221-18 et suivants du Code de la consommation, l'utilisateur dispose d'un
      délai de 14 jours à compter de la réception des produits pour exercer son droit de rétractation sans
      avoir à justifier de motifs ni à payer de pénalités.
    </p>
  </div>
  ` : ''}

  <div class="section">
    <h2>${formData.hasEcommerce ? '6' : formData.hasUserAccounts ? '5' : '4'}. Propriété intellectuelle</h2>
    <p>
      L'ensemble des éléments du Site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
      sont la propriété exclusive de ${formData.companyName} ou de ses partenaires.
    </p>
    <p>
      Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou
      partielle du Site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit
      est interdite sans l'autorisation écrite préalable de ${formData.companyName}.
    </p>
  </div>

  ${formData.hasDataCollection ? `
  <div class="section">
    <h2>${formData.hasEcommerce ? '7' : formData.hasUserAccounts ? '6' : '5'}. Protection des données personnelles</h2>
    <p>
      ${formData.companyName} s'engage à respecter la réglementation en vigueur relative à la protection
      des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD).
    </p>

    <h3>Données collectées</h3>
    <p>
      Les données personnelles collectées sur le Site sont les suivantes :
    </p>
    <ul>
      <li>Données d'identification (nom, prénom, adresse email)</li>
      ${formData.hasUserAccounts ? '<li>Données de connexion (identifiants, mots de passe hashés)</li>' : ''}
      ${formData.hasEcommerce ? '<li>Données de facturation (adresse, informations de paiement)</li>' : ''}
      ${formData.hasCookies ? '<li>Données de navigation (cookies, adresse IP)</li>' : ''}
    </ul>

    <h3>Finalités</h3>
    <p>
      Les données personnelles sont collectées pour les finalités suivantes :
    </p>
    <ul>
      <li>Gestion des comptes utilisateurs</li>
      ${formData.hasEcommerce ? '<li>Traitement et suivi des commandes</li>' : ''}
      ${formData.hasNewsletter ? '<li>Envoi de newsletters et communications marketing (avec consentement)</li>' : ''}
      <li>Amélioration de la qualité du service</li>
      <li>Respect des obligations légales</li>
    </ul>

    <h3>Droits des utilisateurs</h3>
    <p>
      Conformément au RGPD, l'utilisateur dispose des droits suivants sur ses données personnelles :
    </p>
    <ul>
      <li>Droit d'accès et de rectification</li>
      <li>Droit à l'effacement (droit à l'oubli)</li>
      <li>Droit à la limitation du traitement</li>
      <li>Droit à la portabilité des données</li>
      <li>Droit d'opposition</li>
    </ul>
    <p>
      Pour exercer ces droits, l'utilisateur peut contacter ${formData.companyName} à l'adresse email suivante :
      ${formData.email}
    </p>
  </div>
  ` : ''}

  ${formData.hasCookies ? `
  <div class="section">
    <h2>${formData.hasEcommerce && formData.hasDataCollection ? '8' : formData.hasDataCollection || formData.hasEcommerce || formData.hasUserAccounts ? '7' : '6'}. Cookies</h2>
    <p>
      Le Site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.
    </p>
    <p>
      Un cookie est un petit fichier texte déposé sur le terminal de l'utilisateur lors de la visite du Site.
      Les cookies permettent notamment de :
    </p>
    <ul>
      <li>Mémoriser les préférences de l'utilisateur</li>
      <li>Faciliter la navigation sur le Site</li>
      <li>Réaliser des statistiques de fréquentation</li>
      <li>Adapter le contenu publicitaire</li>
    </ul>
    <p>
      L'utilisateur peut à tout moment désactiver les cookies depuis les paramètres de son navigateur.
      Toutefois, la désactivation des cookies peut limiter l'accès à certaines fonctionnalités du Site.
    </p>
  </div>
  ` : ''}

  <div class="section">
    <h2>${getNextSectionNumber(formData)}. Responsabilité</h2>
    <p>
      ${formData.companyName} s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations
      diffusées sur le Site. Toutefois, ${formData.companyName} ne peut garantir l'exactitude, la précision
      ou l'exhaustivité des informations mises à disposition sur le Site.
    </p>
    <p>
      ${formData.companyName} ne saurait être tenue responsable :
    </p>
    <ul>
      <li>Des dommages directs ou indirects résultant de l'utilisation du Site</li>
      <li>De l'interruption temporaire ou permanente du Site</li>
      <li>Des erreurs, omissions ou inexactitudes concernant les informations disponibles sur le Site</li>
      <li>Des dommages résultant de l'intrusion frauduleuse d'un tiers</li>
    </ul>
  </div>

  <div class="section">
    <h2>${getNextSectionNumber(formData, 1)}. Liens hypertextes</h2>
    <p>
      Le Site peut contenir des liens hypertextes vers d'autres sites internet.
      ${formData.companyName} ne dispose d'aucun contrôle sur ces sites et décline toute responsabilité
      quant à leur contenu.
    </p>
    <p>
      L'établissement d'un lien hypertexte vers le Site nécessite l'autorisation préalable écrite de
      ${formData.companyName}.
    </p>
  </div>

  <div class="section">
    <h2>${getNextSectionNumber(formData, 2)}. Droit applicable et juridiction compétente</h2>
    <p>
      Les présentes CGU sont soumises au droit français. En cas de litige et à défaut de résolution amiable,
      le litige sera porté devant les tribunaux français compétents.
    </p>
  </div>

  <div class="section">
    <h2>${getNextSectionNumber(formData, 3)}. Contact</h2>
    <p>
      Pour toute question relative aux présentes CGU ou au fonctionnement du Site, l'utilisateur peut contacter
      ${formData.companyName} :
    </p>
    <ul>
      <li>Par email : ${formData.email}</li>
      <li>Par courrier : ${formData.address.replace(/\n/g, '<br>')}</li>
    </ul>
  </div>

  <div style="margin-top: 50px; padding-top: 20px; border-top: 2px solid #1BAAA0; text-align: center; color: #666;">
    <p><small>Document généré par <a href="https://www.cgu-generator.com/" style="color: #1BAAA0;">CGUgen</a> - ${currentDate}</small></p>
  </div>
</body>
</html>
  `.trim();
}

function getNextSectionNumber(formData: FormData, offset: number = 0): number {
  let section = 4; // Base number after "Accès au Site"

  if (formData.hasUserAccounts) section++;
  if (formData.hasEcommerce) section++;
  section++; // Propriété intellectuelle
  if (formData.hasDataCollection) section++;
  if (formData.hasCookies) section++;

  return section + offset;
}
