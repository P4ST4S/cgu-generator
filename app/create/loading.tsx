export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold text-foreground">CGUgen</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire skeleton */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview skeleton */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-64 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
