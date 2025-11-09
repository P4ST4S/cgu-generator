import Link from 'next/link';

export const metadata = {
  title: 'Politique de Cookies - CGUgen',
  description: 'Politique de gestion des cookies de CGUgen',
};

export default function CookiesPage() {
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
            Politique de Gestion des Cookies
          </h1>

          <div className="bg-secondary/50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600">
              <strong>Date de dernière mise à jour :</strong> {currentDate}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Qu&apos;est-ce qu&apos;un cookie ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
                lors de la visite d&apos;un site web. Il permet de collecter des informations relatives à votre
                navigation et de vous adresser des services adaptés à votre terminal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les cookies sont gérés par votre navigateur internet et seul l&apos;émetteur d&apos;un cookie peut
                décider de la lecture ou de la modification des informations qui y sont contenues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Types de cookies utilisés sur CGUgen
              </h2>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                2.1 Cookies strictement nécessaires
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ces cookies sont indispensables au bon fonctionnement du site. Ils vous permettent d&apos;utiliser
                les principales fonctionnalités du site (par exemple, l&apos;accès à votre compte). Sans ces cookies,
                vous ne pourrez pas utiliser notre site normalement.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Cookies de session</li>
                  <li>Cookies de préférences utilisateur</li>
                  <li>Cookies de sécurité et d&apos;authentification</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                2.2 Cookies de performance et d&apos;analyse
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ces cookies nous permettent de mesurer et d&apos;analyser l&apos;audience de notre site
                (volume de fréquentation, pages vues, temps passé sur le site, etc.). Ces données nous aident
                à améliorer l&apos;ergonomie et les performances du site.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Google Analytics (anonymisé)</li>
                  <li>Outils de mesure d&apos;audience</li>
                  <li>Cookies de performance technique</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                2.3 Cookies fonctionnels
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ces cookies permettent d&apos;améliorer votre expérience de navigation en mémorisant vos choix
                et préférences (langue, région, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Durée de conservation des cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les cookies déposés sur votre terminal ont une durée de validité limitée :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700 font-semibold">Type de cookie</th>
                      <th className="text-left py-2 text-gray-700 font-semibold">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Cookies de session</td>
                      <td className="py-3">Jusqu&apos;à la fermeture du navigateur</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Cookies de préférences</td>
                      <td className="py-3">12 mois</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Cookies d&apos;analyse</td>
                      <td className="py-3">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="py-3">Cookies fonctionnels</td>
                      <td className="py-3">12 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Vos choix concernant les cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vous disposez de différents moyens pour gérer les cookies :
              </p>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                4.1 Bandeau de gestion des cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lors de votre première visite sur notre site, un bandeau vous invite à accepter ou refuser
                les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment en cliquant
                sur le lien présent en bas de page.
              </p>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                4.2 Paramètres de votre navigateur
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies
                  </li>
                  <li>
                    <strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies
                  </li>
                  <li>
                    <strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies
                  </li>
                  <li>
                    <strong>Edge :</strong> Paramètres &gt; Confidentialité et services &gt; Cookies
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-sm text-yellow-800">
                  <strong>Attention :</strong> La désactivation de certains cookies peut affecter votre
                  expérience de navigation et limiter l&apos;accès à certaines fonctionnalités du site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Cookies tiers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous utilisons les services de tiers qui peuvent déposer des cookies sur votre terminal :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-700">
                      Outil d&apos;analyse d&apos;audience. Les données sont anonymisées conformément au RGPD.
                      <br />
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Politique de confidentialité Google →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                6. Mise à jour de la politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment.
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                7. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg my-4">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Email :</strong>{' '}
                    <a href="mailto:contact@cgu-generator.com" className="text-primary hover:underline">
                      contact@cgu-generator.com
                    </a>
                  </li>
                  <li>
                    <strong>Site web :</strong>{' '}
                    <a href="https://www.cgu-generator.com" className="text-primary hover:underline">
                      www.cgu-generator.com
                    </a>
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
