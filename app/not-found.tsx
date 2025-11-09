import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <div className="text-8xl font-bold text-primary mb-6">404</div>

          <h1 className="text-3xl font-bold text-foreground mb-4">
            Page non trouvée
          </h1>

          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
