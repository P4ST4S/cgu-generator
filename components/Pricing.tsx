export default function Pricing() {
  const plans = [
    {
      name: 'Gratuit',
      price: '0€',
      period: 'toujours',
      description: 'Pour découvrir et tester',
      features: [
        'Génération illimitée de CGU',
        'Export PDF basique',
        'Modèles standards',
        'Support communautaire',
      ],
      highlighted: false,
      cta: 'Commencer gratuitement'
    },
    {
      name: 'Pro',
      price: '29€',
      period: '/mois',
      description: 'Pour les professionnels',
      features: [
        'Tout du plan Gratuit',
        'Export PDF & HTML premium',
        'Personnalisation avancée',
        'Modèles sur-mesure',
        'Support prioritaire',
        'Mises à jour automatiques',
      ],
      highlighted: true,
      cta: 'Essayer 14 jours gratuits'
    },
    {
      name: 'Entreprise',
      price: 'Sur mesure',
      period: '',
      description: 'Pour les grandes équipes',
      features: [
        'Tout du plan Pro',
        'API complète',
        'Multi-utilisateurs illimités',
        'Stockage cloud sécurisé',
        'Conseils juridiques inclus',
        'Gestionnaire dédié',
      ],
      highlighted: false,
      cta: 'Nous contacter'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Des tarifs transparents et adaptés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins, sans engagement
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-2xl scale-105 border-2 border-primary'
                  : 'bg-white border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${
                      plan.highlighted ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-primary'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-medium transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-primary'
                    : 'bg-primary text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tous les plans incluent une garantie satisfait ou remboursé de 30 jours
          </p>
        </div>
      </div>
    </section>
  );
}
