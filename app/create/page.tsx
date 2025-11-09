'use client';

import { useState } from 'react';
import Link from 'next/link';
import CGUPreview from '@/components/CGUPreview';
import { FormInput } from '@/components/ui/FormInput';
import { FormTextarea } from '@/components/ui/FormTextarea';
import { FormSelect } from '@/components/ui/FormSelect';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { useFormHandler } from '@/hooks/use-form-handler';
import { CGUFormData, COMPANY_TYPES } from '@/types/form';
import { formDataSchema } from '@/lib/validation';
import { z } from 'zod';

export default function CreatePage() {
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { values, handleInputChange, handleCheckboxChange, handleSubmit } = useFormHandler<CGUFormData>({
    initialValues: {
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
    },
    onSubmit: (data) => {
      try {
        formDataSchema.parse(data);
        setErrors({});
        setShowPreview(true);
      } catch (error) {
        if (error instanceof z.ZodError) {
          const formattedErrors: Record<string, string> = {};
          error.issues.forEach((issue) => {
            if (issue.path[0]) {
              formattedErrors[issue.path[0].toString()] = issue.message;
            }
          });
          setErrors(formattedErrors);
        }
      }
    },
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

              <FormInput
                id="companyName"
                name="companyName"
                type="text"
                label="Nom de l'entreprise"
                required
                value={values.companyName}
                onChange={handleInputChange}
                placeholder="Ex: Ma Société SAS"
                error={errors.companyName}
              />

              <FormSelect
                id="companyType"
                name="companyType"
                label="Forme juridique"
                required
                value={values.companyType}
                onChange={handleInputChange}
                error={errors.companyType}
              >
                {COMPANY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </FormSelect>

              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email de contact"
                required
                value={values.email}
                onChange={handleInputChange}
                placeholder="contact@example.com"
                error={errors.email}
              />

              <FormInput
                id="website"
                name="website"
                type="url"
                label="Site web"
                required
                value={values.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                error={errors.website}
              />

              <FormTextarea
                id="address"
                name="address"
                label="Adresse du siège social"
                required
                value={values.address}
                onChange={handleInputChange}
                rows={3}
                placeholder="123 Rue de la République&#10;75001 Paris"
                error={errors.address}
              />

              <FormInput
                id="siret"
                name="siret"
                type="text"
                label="Numéro SIRET"
                required
                value={values.siret}
                onChange={handleInputChange}
                placeholder="123 456 789 00012"
                error={errors.siret}
              />

              <FormInput
                id="activityType"
                name="activityType"
                type="text"
                label="Type d'activité"
                required
                value={values.activityType}
                onChange={handleInputChange}
                placeholder="Ex: E-commerce, SaaS, Services..."
                error={errors.activityType}
              />

              {/* Options */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Fonctionnalités du site
                </h3>
                <div className="space-y-3">
                  <FormCheckbox
                    name="hasDataCollection"
                    label="Collecte de données personnelles"
                    checked={values.hasDataCollection}
                    onChange={handleCheckboxChange}
                  />

                  <FormCheckbox
                    name="hasEcommerce"
                    label="E-commerce (vente en ligne)"
                    checked={values.hasEcommerce}
                    onChange={handleCheckboxChange}
                  />

                  <FormCheckbox
                    name="hasNewsletter"
                    label="Newsletter"
                    checked={values.hasNewsletter}
                    onChange={handleCheckboxChange}
                  />

                  <FormCheckbox
                    name="hasCookies"
                    label="Utilisation de cookies"
                    checked={values.hasCookies}
                    onChange={handleCheckboxChange}
                  />

                  <FormCheckbox
                    name="hasUserAccounts"
                    label="Comptes utilisateurs"
                    checked={values.hasUserAccounts}
                    onChange={handleCheckboxChange}
                  />
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
            <CGUPreview formData={values} showPreview={showPreview} />
          </div>
        </div>
      </main>
    </div>
  );
}
