'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
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

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Envoyez-nous un message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-green-800 font-semibold">Message envoyé !</h3>
                    <p className="text-sm text-green-700 mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Question générale</option>
                    <option value="support">Support technique</option>
                    <option value="bug">Signaler un bug</option>
                    <option value="feature">Suggestion de fonctionnalité</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:scale-105 transition-transform text-lg"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:contact@cgu-generator.com" className="text-primary hover:underline">
                      contact@cgu-generator.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Site web</h3>
                    <a href="https://www.cgu-generator.com" className="text-primary hover:underline">
                      www.cgu-generator.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horaires de support</h3>
                    <p className="text-gray-700">Lundi - Vendredi</p>
                    <p className="text-sm text-gray-600">9h00 - 18h00 (CET)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ rapide */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Questions fréquentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Les CGU générées sont-elles valides légalement ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nos modèles sont conformes au RGPD mais nous recommandons une validation par un avocat
                    pour votre cas spécifique.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Puis-je modifier les documents générés ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oui, vous pouvez les modifier librement. Les documents vous appartiennent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Mes données sont-elles sécurisées ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oui, nous utilisons un chiffrement SSL et respectons le RGPD. Consultez notre{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>.
                  </p>
                </div>
              </div>

              <Link
                href="/#features"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium mt-6"
              >
                Voir toutes les fonctionnalités
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
