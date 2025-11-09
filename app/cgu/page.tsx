import Link from 'next/link';

export const metadata = {
  title: 'CGU - CGUgen',
  description: 'Conditions Générales d\'Utilisation de CGUgen',
};

export default function CGUPage() {
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
            Conditions Générales d&apos;Utilisation
          </h1>

          <div className="bg-secondary/50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Société :</strong> CGUgen
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Site web :</strong> <a href="https://www.cgu-generator.com" className="text-primary hover:underline">www.cgu-generator.com</a>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Date de dernière mise à jour :</strong> {currentDate}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Objet
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») ont pour objet de définir
                les modalités et conditions d&apos;utilisation des services proposés sur le site www.cgu-generator.com
                (ci-après le « Site »), ainsi que de définir les droits et obligations des parties dans ce cadre.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le Site est édité par CGUgen, dont l&apos;activité principale est la génération automatique de
                documents juridiques (CGU, politique de confidentialité, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Acceptation des CGU
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L&apos;utilisation du Site implique l&apos;acceptation pleine et entière des présentes CGU.
                L&apos;utilisateur reconnaît avoir pris connaissance des présentes CGU et s&apos;engage à les respecter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                CGUgen se réserve le droit de modifier à tout moment les présentes CGU. Les modifications entreront
                en vigueur dès leur mise en ligne. Il est donc conseillé à l&apos;utilisateur de consulter régulièrement
                la dernière version des CGU disponible sur le Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Accès au Site
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site est accessible gratuitement depuis n&apos;importe où par tout utilisateur disposant d&apos;un
                accès à Internet. Tous les frais supportés par l&apos;utilisateur pour accéder au service (matériel
                informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p className="text-gray-700 leading-relaxed">
                CGUgen met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site.
                Cependant, CGUgen ne peut garantir un accès au Site sans interruption ni dysfonctionnement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Services proposés
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Site propose les services suivants :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Génération automatique de Conditions Générales d&apos;Utilisation</li>
                  <li>Génération automatique de Politique de Confidentialité</li>
                  <li>Personnalisation des documents juridiques</li>
                  <li>Export des documents aux formats PDF et HTML</li>
                  <li>Stockage sécurisé des documents (compte utilisateur)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                4.1 Nature des documents
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Les documents générés par CGUgen sont fournis à titre informatif et
                  constituent une base de travail. Ils ne remplacent pas les conseils d&apos;un professionnel du droit.
                  CGUgen recommande de faire vérifier les documents par un avocat spécialisé avant leur utilisation.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                4.2 Garanties et responsabilités
              </h3>
              <p className="text-gray-700 leading-relaxed">
                CGUgen ne garantit pas que les documents générés soient adaptés à tous les cas particuliers ni
                qu&apos;ils soient conformes à toutes les législations applicables. L&apos;utilisateur assume
                l&apos;entière responsabilité de l&apos;utilisation des documents générés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Compte utilisateur
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La création d&apos;un compte utilisateur permet d&apos;accéder à des fonctionnalités supplémentaires.
                Lors de l&apos;inscription, l&apos;utilisateur s&apos;engage à fournir des informations exactes et à jour.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L&apos;utilisateur est responsable de la confidentialité de ses identifiants de connexion et s&apos;engage
                à ne pas les divulguer à des tiers. Toute utilisation du compte sera présumée avoir été effectuée par
                l&apos;utilisateur lui-même.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                6. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble des éléments du Site (textes, images, graphismes, logo, icônes, logiciels, etc.)
                sont la propriété exclusive de CGUgen ou de ses partenaires.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les documents générés par l&apos;utilisateur lui appartiennent. L&apos;utilisateur peut les utiliser,
                les modifier et les distribuer librement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                7. Protection des données personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CGUgen s&apos;engage à respecter la réglementation en vigueur relative à la protection des données
                personnelles, notamment le RGPD. Pour plus d&apos;informations, consultez notre{' '}
                <Link href="/rgpd" className="text-primary hover:underline font-medium">
                  Politique RGPD
                </Link>
                {' '}et notre{' '}
                <Link href="/privacy" className="text-primary hover:underline font-medium">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                8. Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CGUgen ne saurait être tenue responsable :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Des dommages directs ou indirects résultant de l&apos;utilisation du Site ou des documents générés</li>
                  <li>De l&apos;interruption temporaire ou permanente du Site</li>
                  <li>Des erreurs, omissions ou inexactitudes concernant les informations fournies</li>
                  <li>Des dommages résultant de l&apos;intrusion frauduleuse d&apos;un tiers</li>
                  <li>De l&apos;inadéquation des documents générés avec les besoins spécifiques de l&apos;utilisateur</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                9. Droit applicable et juridiction compétente
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGU sont soumises au droit français. En cas de litige et à défaut de résolution amiable,
                le litige sera porté devant les tribunaux français compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg">
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
                  <li>
                    <strong>Page contact :</strong>{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                      Formulaire de contact
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
