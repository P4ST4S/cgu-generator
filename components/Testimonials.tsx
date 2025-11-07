export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Fondatrice, TechStart',
      avatar: 'MD',
      content: 'CGUgen m\'a fait gagner un temps précieux. En quelques minutes, j\'ai pu générer des CGU professionnelles et conformes au RGPD pour mon SaaS.',
      rating: 5
    },
    {
      name: 'Thomas Bernard',
      role: 'Gérant, E-Shop Plus',
      avatar: 'TB',
      content: 'Interface simple et intuitive. Les documents générés sont de qualité professionnelle. Je recommande vivement pour tous les e-commerces !',
      rating: 5
    },
    {
      name: 'Sophie Martin',
      role: 'Avocate spécialisée RGPD',
      avatar: 'SM',
      content: 'Excellent outil pour une première base juridique. Les clauses sont bien rédigées et conformes. Un vrai gain de temps pour mes clients.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;entrepreneurs qui ont simplifié leur conformité juridique
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              10k+
            </div>
            <div className="text-gray-600">
              Documents générés
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              5k+
            </div>
            <div className="text-gray-600">
              Entreprises satisfaites
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">
              Note moyenne
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
