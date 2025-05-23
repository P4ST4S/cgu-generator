import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Générateur de CGU",
  description:
    "Créez facilement des Conditions Générales d'Utilisation personnalisées pour votre site web ou application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-lg font-semibold text-blue-600">
                Générateur de CGU
              </h1>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
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
