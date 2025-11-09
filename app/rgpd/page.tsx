import Link from 'next/link';

export const metadata = {
  title: 'Politique RGPD - CGUgen',
  description: 'Politique de protection des données personnelles conforme au RGPD',
};

export default function RGPDPage() {
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
            Politique de Protection des Données (RGPD)
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
                CGUgen s&apos;engage à protéger la vie privée et les données personnelles de ses utilisateurs
                conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                et Libertés du 6 janvier 1978 modifiée.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cette politique vous informe sur la manière dont nous collectons, utilisons, partageons et
                protégeons vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Responsable du traitement
              </h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Société :</strong> CGUgen</li>
                  <li><strong>Email :</strong> <a href="mailto:contact@cgu-generator.com" className="text-primary hover:underline">contact@cgu-generator.com</a></li>
                  <li><strong>Site web :</strong> <a href="https://www.cgu-generator.com" className="text-primary hover:underline">www.cgu-generator.com</a></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Données collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes :
              </p>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                3.1 Données d&apos;identification
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Nom de l&apos;entreprise</li>
                  <li>Numéro de téléphone (optionnel)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                3.2 Données de navigation
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                  <li>Données de cookies (voir notre <Link href="/cookies" className="text-primary hover:underline">politique de cookies</Link>)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-accent mt-6 mb-3">
                3.3 Données générées
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documents CGU créés</li>
                  <li>Paramètres de personnalisation</li>
                  <li>Historique des modifications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Finalités du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-gray-700 font-semibold">Finalité</th>
                      <th className="text-left py-3 text-gray-700 font-semibold">Base légale</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Création et gestion de compte</td>
                      <td className="py-3">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Génération de documents</td>
                      <td className="py-3">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Amélioration des services</td>
                      <td className="py-3">Intérêt légitime</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Support client</td>
                      <td className="py-3">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Newsletters (avec opt-in)</td>
                      <td className="py-3">Consentement</td>
                    </tr>
                    <tr>
                      <td className="py-3">Obligations légales</td>
                      <td className="py-3">Obligation légale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Durée de conservation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités
                pour lesquelles elles ont été collectées :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-4">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Données de compte actif :</strong> Pendant toute la durée d&apos;utilisation du service</li>
                  <li><strong>Données de compte inactif :</strong> 3 ans après la dernière connexion</li>
                  <li><strong>Documents générés :</strong> Selon vos préférences (suppression possible à tout moment)</li>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Logs de connexion :</strong> 12 mois maximum</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                6. Vos droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>

              <div className="space-y-4">
                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit de rectification</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit à l&apos;effacement (droit à l&apos;oubli)</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander la suppression de vos données personnelles dans certaines conditions.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit à la limitation du traitement</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander la limitation du traitement de vos données dans certaines situations.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit à la portabilité</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit d&apos;opposition</h4>
                  <p className="text-sm text-gray-700">
                    Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Droit de retirer votre consentement</h4>
                  <p className="text-sm text-gray-700">
                    Lorsque le traitement est basé sur votre consentement, vous pouvez le retirer à tout moment.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Comment exercer vos droits ?</h4>
                <p className="text-gray-700 mb-3">
                  Pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Par email : <a href="mailto:privacy@cgu-generator.com" className="text-primary hover:underline font-medium">privacy@cgu-generator.com</a></li>
                  <li>• Via votre espace personnel sur le site</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois maximum.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                7. Sécurité des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour
                protéger vos données personnelles contre :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>La destruction accidentelle ou illicite</li>
                  <li>La perte accidentelle</li>
                  <li>L&apos;altération, la diffusion ou l&apos;accès non autorisé</li>
                  <li>Toute autre forme de traitement illicite</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Les mesures de sécurité incluent notamment :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Authentification sécurisée (mots de passe hashés)</li>
                  <li>Hébergement sécurisé avec sauvegardes régulières</li>
                  <li>Contrôle d&apos;accès strict aux données</li>
                  <li>Surveillance et journalisation des accès</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                8. Partage des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent
                être partagées uniquement dans les cas suivants :
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 my-4">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Prestataires de services :</strong> Hébergement, paiement, analytics (sous contrat de confidentialité)
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> En cas de demande d&apos;une autorité judiciaire ou administrative
                  </li>
                  <li>
                    <strong>Protection de nos droits :</strong> Pour faire valoir nos droits en justice
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                9. Transferts internationaux
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données sont hébergées dans l&apos;Union Européenne. En cas de transfert hors UE,
                nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types,
                Privacy Shield, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                10. Réclamation auprès de la CNIL
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
                auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg my-4">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></li>
                  <li><strong>Adresse :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</li>
                  <li><strong>Téléphone :</strong> +33 1 53 73 22 22</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                11. Modifications de la politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité pour refléter les changements
                dans nos pratiques ou dans la réglementation. En cas de modification substantielle,
                nous vous en informerons par email ou via une notification sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                12. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
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
