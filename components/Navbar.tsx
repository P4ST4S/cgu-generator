import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold text-foreground">CGUgen</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="#login" className="text-gray-600 hover:text-primary transition-colors">
              Connexion
            </Link>
            <Link
              href="/create"
              className="px-6 py-2.5 bg-primary text-white rounded-full hover:scale-105 transition-transform font-medium"
            >
              Créer mon document
            </Link>
          </div>

          {/* Mobile menu button - Note: fonctionnalité à implémenter avec Client Component si nécessaire */}
          <div className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
