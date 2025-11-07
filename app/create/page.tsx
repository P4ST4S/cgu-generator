'use client';

import { useState } from 'react';
import Link from 'next/link';
import CGUPreview from '@/components/CGUPreview';

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

export default function CreatePage() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companyType: 'SAS',
    email: '',
    website: '',
    address: '',
    siret: '',
    activityType: '',
    hasDataCollection: true,
    hasEcommerce: false,
    hasNewsletter: false,
    hasCookies: true,
    hasUserAccounts: false,
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

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

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Créez vos CGU personnalisées
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour générer vos documents juridiques
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de l&apos;entreprise
                </h2>
              </div>

              {/* Nom de l'entreprise */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l&apos;entreprise *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ex: Ma Société SAS"
                />
              </div>

              {/* Type d'entreprise */}
              <div>
                <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-2">
                  Forme juridique *
                </label>
                <select
                  id="companyType"
                  name="companyType"
                  required
                  value={formData.companyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="SAS">SAS</option>
                  <option value="SARL">SARL</option>
                  <option value="EURL">EURL</option>
                  <option value="SA">SA</option>
                  <option value="SCI">SCI</option>
                  <option value="Auto-entrepreneur">Auto-entrepreneur</option>
                  <option value="Association">Association</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email de contact *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="contact@example.com"
                />
              </div>

              {/* Site web */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Site web *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="https://example.com"
                />
              </div>

              {/* Adresse */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse du siège social *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="123 Rue de la République&#10;75001 Paris"
                />
              </div>

              {/* SIRET */}
              <div>
                <label htmlFor="siret" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro SIRET *
                </label>
                <input
                  type="text"
                  id="siret"
                  name="siret"
                  required
                  value={formData.siret}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="123 456 789 00012"
                />
              </div>

              {/* Type d'activité */}
              <div>
                <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type d&apos;activité *
                </label>
                <input
                  type="text"
                  id="activityType"
                  name="activityType"
                  required
                  value={formData.activityType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ex: E-commerce, SaaS, Services..."
                />
              </div>

              {/* Options */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Fonctionnalités du site
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasDataCollection"
                      checked={formData.hasDataCollection}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-gray-700">Collecte de données personnelles</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasEcommerce"
                      checked={formData.hasEcommerce}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-gray-700">E-commerce (vente en ligne)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasNewsletter"
                      checked={formData.hasNewsletter}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-gray-700">Newsletter</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasCookies"
                      checked={formData.hasCookies}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-gray-700">Utilisation de cookies</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasUserAccounts"
                      checked={formData.hasUserAccounts}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-gray-700">Comptes utilisateurs</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:scale-105 transition-transform text-lg"
              >
                Générer mes CGU
              </button>
            </form>
          </div>

          {/* Prévisualisation */}
          <div className="lg:sticky lg:top-24 h-fit">
            <CGUPreview formData={formData} showPreview={showPreview} />
          </div>
        </div>
      </main>
    </div>
  );
}
