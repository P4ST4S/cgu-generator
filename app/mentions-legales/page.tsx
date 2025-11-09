import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales - CGUgen',
  description: 'Mentions légales de CGUgen',
};

export default function MentionsLegalesPage() {
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
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Éditeur du site
              </h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Nom du site :</strong> CGUgen</li>
                  <li><strong>URL :</strong> <a href="https://www.cgu-generator.com" className="text-primary hover:underline">www.cgu-generator.com</a></li>
                  <li><strong>Propriétaire :</strong> CGUgen</li>
                  <li><strong>Responsable de la publication :</strong> L&apos;équipe CGUgen</li>
                  <li><strong>Contact :</strong> <a href="mailto:contact@cgu-generator.com" className="text-primary hover:underline">contact@cgu-generator.com</a></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Hébergement
              </h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p className="text-gray-700">
                  <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble du contenu du site CGUgen (structure, textes, logos, graphismes, images, vidéos,
                sons, bases de données, logiciels, etc.) est la propriété exclusive de CGUgen, sauf mentions
                particulières.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Toute représentation, reproduction, adaptation ou exploitation partielle ou totale du contenu,
                par quelque procédé que ce soit, sans l&apos;autorisation préalable et écrite de CGUgen, est
                strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2
                et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CGUgen s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
                sur ce site. Toutefois, CGUgen ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité
                des informations mises à disposition.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Les documents juridiques générés par CGUgen sont fournis à titre
                  informatif. Ils ne remplacent pas les conseils d&apos;un avocat. CGUgen décline toute responsabilité
                  quant à l&apos;utilisation qui pourrait être faite de ces documents.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                CGUgen ne pourra être tenue responsable des dommages directs ou indirects résultant de l&apos;accès
                au site ou de l&apos;utilisation du site, y compris l&apos;inaccessibilité, les pertes de données,
                détériorations, destructions ou virus qui pourraient affecter l&apos;équipement informatique de
                l&apos;utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Liens hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site CGUgen peut contenir des liens vers d&apos;autres sites internet. CGUgen ne dispose d&apos;aucun
                contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                L&apos;existence d&apos;un lien hypertexte entre le site CGUgen et un autre site ne constitue pas
                une validation de ce site ou de son contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                6. Protection des données personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                et Libertés, vous disposez de droits sur vos données personnelles.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour plus d&apos;informations, consultez :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <Link href="/privacy" className="text-primary hover:underline font-medium">Politique de confidentialité</Link>
                  </li>
                  <li>
                    • <Link href="/rgpd" className="text-primary hover:underline font-medium">Politique RGPD</Link>
                  </li>
                  <li>
                    • <Link href="/cookies" className="text-primary hover:underline font-medium">Politique de cookies</Link>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site CGUgen utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des
                statistiques de visite. Pour plus d&apos;informations, consultez notre{' '}
                <Link href="/cookies" className="text-primary hover:underline font-medium">
                  politique de cookies
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                8. Droit applicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                de résolution amiable, le litige sera porté devant les tribunaux français compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                9. Crédits
              </h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Design et développement :</strong> Équipe CGUgen</li>
                  <li><strong>Framework :</strong> Next.js</li>
                  <li><strong>Styling :</strong> Tailwind CSS</li>
                  <li><strong>Hébergement :</strong> Vercel</li>
                  <li><strong>Police :</strong> Inter (Google Fonts)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant les mentions légales :
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
                    <strong>Formulaire de contact :</strong>{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                      Nous contacter
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
