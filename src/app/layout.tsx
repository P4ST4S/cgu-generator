import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
    <html lang="fr" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme() {
                  const theme = localStorage.getItem('theme') || 'light';
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
                
                setTheme();
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased h-full`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Générateur de CGU
              </h1>
              <ThemeToggle />
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
        </div>
      </body>
    </html>
  );
}
