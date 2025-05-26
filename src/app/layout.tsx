import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import FeedbackButton from "@/components/FeedbackButton";
import { PaymentProvider } from "@/contexts/PaymentContext";

// Variable d'environnement pour le domaine de tracking (peut être remplacée par un .env)
const ANALYTICS_DOMAIN = process.env.ANALYTICS_DOMAIN || "plausible.io";
const ANALYTICS_SITE_ID = process.env.ANALYTICS_SITE_ID || "cgu-generator.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Générateur de CGU - Créer des Conditions Générales d'Utilisation",
  description:
    "Créez facilement des Conditions Générales d'Utilisation personnalisées pour votre site web ou application. Générez des CGU en PDF adaptées à votre activité.",
  keywords: [
    "CGU",
    "conditions générales",
    "générateur",
    "site web",
    "application",
    "légal",
    "PDF",
  ],
  authors: [{ name: "CGU Generator" }],
  robots: "index, follow",
  openGraph: {
    title: "Générateur de CGU - Créer des Conditions Générales d'Utilisation",
    description:
      "Créez facilement des CGU personnalisées pour votre site web ou application.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de CGU - Créer des Conditions Générales d'Utilisation",
    description:
      "Créez facilement des CGU personnalisées pour votre site web ou application.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning={true}>
      <head>
        {/* Script de détection du thème - exécuté avant le chargement complet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  let persistedColorPreference = window.localStorage.getItem('theme');
                  let hasPersistedPreference = typeof persistedColorPreference === 'string';
                  
                  if (hasPersistedPreference) {
                    // If theme preference is stored, use that
                    if (persistedColorPreference === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } else {
                    // If no theme preference is stored, check system preference
                    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                    let hasMediaQueryPreference = typeof mediaQuery.matches === 'boolean';
                    
                    if (hasMediaQueryPreference) {
                      if (mediaQuery.matches) {
                        document.documentElement.classList.add('dark');
                      } else {
                        document.documentElement.classList.remove('dark');
                      }
                    }
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />

        {/* Plausible Analytics - Script respectueux du RGPD */}
        <script
          defer
          data-domain={ANALYTICS_SITE_ID}
          src={`https://${ANALYTICS_DOMAIN}/js/script.js`}
          data-api={`https://${ANALYTICS_DOMAIN}/api/event`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased h-full`}>
        <PaymentProvider>
          <div className="min-h-screen flex flex-col">
            <header className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  <a href="/">Générateur de CGU</a>
                </h1>
                <div className="flex items-center space-x-4">
                  <a
                    href="/account"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Mon compte
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Générateur de CGU — Application
                  créée avec Next.js
                </p>
              </div>
            </footer>

            {/* Bouton de feedback */}
            <FeedbackButton />
          </div>
        </PaymentProvider>
      </body>
    </html>
  );
}
