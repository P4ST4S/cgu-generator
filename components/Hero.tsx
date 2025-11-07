import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Générez vos CGU
                <span className="block text-primary">en quelques clics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Créez vos documents juridiques professionnels en moins de 2 minutes, sans avocat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#create"
                className="px-8 py-4 bg-primary text-white rounded-full hover:scale-105 transition-transform font-medium text-lg text-center"
              >
                Essayer gratuitement
              </Link>
              <Link
                href="#demo"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-foreground rounded-full hover:border-primary transition-colors font-medium text-lg text-center"
              >
                Voir la démo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Gratuit sans limite</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Conforme RGPD</span>
              </div>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              {/* Mock document preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-24"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  <div className="h-3 bg-primary/20 rounded w-3/6"></div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>

                <div className="pt-4 flex gap-3">
                  <div className="flex-1 h-10 bg-secondary rounded-lg"></div>
                  <div className="flex-1 h-10 bg-primary/10 rounded-lg"></div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  2 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
