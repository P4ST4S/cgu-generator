export default function Demo() {
  return (
    <section id="demo" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prévisualisez vos CGU avant de les télécharger
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une interface simple et intuitive pour créer des documents professionnels
          </p>
        </div>

        {/* Demo Mockup */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left side - Form */}
            <div className="p-8 lg:p-12 bg-white border-r border-gray-100">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Informations de votre entreprise
                  </h3>
                </div>

                {/* Form fields mockup */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l&apos;entreprise
                    </label>
                    <div className="h-12 bg-secondary rounded-lg border border-gray-200"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type d&apos;activité
                    </label>
                    <div className="h-12 bg-secondary rounded-lg border border-gray-200"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <div className="h-12 bg-secondary rounded-lg border border-gray-200"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site web
                    </label>
                    <div className="h-12 bg-secondary rounded-lg border border-gray-200"></div>
                  </div>
                </div>

                {/* Checkboxes mockup */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded border-2 border-primary flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Collecte de données personnelles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white rounded border-2 border-gray-300"></div>
                    <span className="text-sm text-gray-700">E-commerce</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded border-2 border-primary flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Newsletter</span>
                  </div>
                </div>

                <button className="w-full mt-8 py-4 bg-primary text-white rounded-full font-medium hover:scale-105 transition-transform">
                  Générer mes CGU
                </button>
              </div>
            </div>

            {/* Right side - Preview */}
            <div className="p-8 lg:p-12 bg-secondary/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Aperçu en direct
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Document preview */}
                <div className="bg-white rounded-xl p-6 shadow-lg space-y-4 min-h-[400px]">
                  <div className="space-y-3">
                    <div className="h-6 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="h-4 bg-primary/10 rounded w-2/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/6"></div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="h-4 bg-primary/10 rounded w-2/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  </div>

                  <div className="pt-6 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Mise à jour en temps réel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
