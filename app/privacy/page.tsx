import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité - CGUgen',
  description: 'Politique de confidentialité de CGUgen',
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold text-foreground">CGUgen</span>
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
          <h1 className="text-4xl font-bold text-primary border-b-3 border-primary pb-4 mb-8">
            Politique de Confidentialité
          </h1>

          <div className="bg-secondary/50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600">
              <strong>Date de dernière mise à jour :</strong> {currentDate}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CGUgen accorde une grande importance à la protection de votre vie privée et de vos données personnelles.
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et
                protégeons vos données lorsque vous utilisez notre site www.cgu-generator.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Données collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons différents types de données :
              </p>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                2.1 Données que vous nous fournissez
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Nom de votre entreprise</li>
                  <li>Informations saisies dans les formulaires de génération de documents</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                2.2 Données collectées automatiquement
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Adresse IP</li>
                  <li>Type et version du navigateur</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Données de cookies (voir notre <Link href="/cookies" className="text-primary hover:underline">politique de cookies</Link>)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Utilisation de vos données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons vos données pour :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Vous permettre d&apos;utiliser nos services</li>
                  <li>Générer vos documents juridiques personnalisés</li>
                  <li>Gérer votre compte utilisateur</li>
                  <li>Améliorer nos services et votre expérience</li>
                  <li>Vous envoyer des communications importantes (avec votre consentement)</li>
                  <li>Assurer la sécurité du site</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Partage de vos données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous ne vendons ni ne louons vos données personnelles. Vos données peuvent être partagées uniquement avec :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Prestataires de services :</strong> Pour l&apos;hébergement, les paiements et l&apos;analyse
                    (tous liés par des accords de confidentialité)
                  </li>
                  <li>
                    <strong>Autorités compétentes :</strong> Si la loi l&apos;exige
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Sécurité de vos données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Stockage sécurisé des mots de passe (hashage)</li>
                  <li>Hébergement sur des serveurs sécurisés</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Sauvegardes régulières</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                6. Conservation des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous conservons vos données uniquement le temps nécessaire :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700 font-semibold">Type de données</th>
                      <th className="text-left py-2 text-gray-700 font-semibold">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Compte actif</td>
                      <td className="py-3">Durée d&apos;utilisation</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Compte inactif</td>
                      <td className="py-3">3 ans après dernière connexion</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Documents générés</td>
                      <td className="py-3">Selon vos préférences</td>
                    </tr>
                    <tr>
                      <td className="py-3">Logs de connexion</td>
                      <td className="py-3">12 mois maximum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                7. Vos droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants sur vos données :
              </p>

              <div className="space-y-3">
                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">Droit d&apos;accès</p>
                  <p className="text-sm text-gray-700">Obtenir une copie de vos données</p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">Droit de rectification</p>
                  <p className="text-sm text-gray-700">Corriger vos données inexactes</p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">Droit à l&apos;effacement</p>
                  <p className="text-sm text-gray-700">Demander la suppression de vos données</p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">Droit à la portabilité</p>
                  <p className="text-sm text-gray-700">Recevoir vos données dans un format structuré</p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800">Droit d&apos;opposition</p>
                  <p className="text-sm text-gray-700">S&apos;opposer au traitement de vos données</p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Exercer vos droits</h4>
                <p className="text-gray-700 mb-3">
                  Contactez-nous à : <a href="mailto:privacy@cgu-generator.com" className="text-primary hover:underline font-medium">privacy@cgu-generator.com</a>
                </p>
                <p className="text-sm text-gray-600">
                  Nous vous répondrons dans un délai d&apos;un mois maximum.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience. Pour en savoir plus, consultez notre{' '}
                <Link href="/cookies" className="text-primary hover:underline font-medium">
                  politique de cookies
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                9. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité à tout moment. En cas de modification
                substantielle, nous vous en informerons par email ou via une notification sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique :
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Email DPO :</strong>{' '}
                    <a href="mailto:privacy@cgu-generator.com" className="text-primary hover:underline">
                      privacy@cgu-generator.com
                    </a>
                  </li>
                  <li>
                    <strong>Email général :</strong>{' '}
                    <a href="mailto:contact@cgu-generator.com" className="text-primary hover:underline">
                      contact@cgu-generator.com
                    </a>
                  </li>
                  <li>
                    <strong>Documentation complète :</strong>{' '}
                    <Link href="/rgpd" className="text-primary hover:underline">
                      Politique RGPD
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Back button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
