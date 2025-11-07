'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Demo() {
  const [formData, setFormData] = useState({
    companyName: 'Test',
    activityType: 'SaaS',
    email: 'contact@example.com',
    website: 'https://example.com',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

        {/* Demo Interactive */}
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

                {/* Form fields - Interactive */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l&apos;entreprise
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ex: Ma Société"
                    />
                  </div>

                  <div>
                    <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type d&apos;activité
                    </label>
                    <input
                      type="text"
                      id="activityType"
                      name="activityType"
                      value={formData.activityType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ex: SaaS, E-commerce..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="contact@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Site web
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                {/* Info text */}
                <div className="pt-4 text-sm text-gray-600 bg-secondary/50 p-4 rounded-lg">
                  <p>
                    ✨ Essayez de modifier les champs ci-dessus pour voir l&apos;aperçu se mettre à jour en temps réel !
                  </p>
                </div>

                <Link
                  href="/create"
                  className="w-full mt-8 py-4 bg-primary text-white rounded-full font-medium hover:scale-105 transition-transform text-center block"
                >
                  Créer mes CGU complètes
                </Link>
              </div>
            </div>

            {/* Right side - Live Preview */}
            <div className="p-8 lg:p-12 bg-secondary/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Aperçu en direct
                  </h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    Live
                  </div>
                </div>

                {/* Document preview - Live content */}
                <div className="bg-white rounded-xl p-6 shadow-lg space-y-4 min-h-[400px]">
                  <h1 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2">
                    Conditions Générales d&apos;Utilisation
                  </h1>

                  <div className="bg-secondary/50 p-4 rounded-lg space-y-2 text-sm">
                    <p><strong>Société :</strong> {formData.companyName || '[Nom de votre entreprise]'}</p>
                    <p><strong>Email :</strong> {formData.email || '[Votre email]'}</p>
                    <p><strong>Site web :</strong> {formData.website || '[Votre site web]'}</p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-primary">1. Objet</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Les présentes Conditions Générales d&apos;Utilisation ont pour objet de définir les modalités
                      et conditions d&apos;utilisation des services proposés sur le site {formData.website || '[votre-site.com]'}.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Le Site est édité par {formData.companyName || '[Votre entreprise]'}.
                      L&apos;activité principale de la société est : {formData.activityType || '[Votre activité]'}.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-primary">2. Acceptation des CGU</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      L&apos;utilisation du Site implique l&apos;acceptation pleine et entière des présentes CGU...
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-sm text-gray-500 border-t border-gray-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Mise à jour automatique
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
