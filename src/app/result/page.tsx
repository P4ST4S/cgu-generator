'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CGUViewer from '@/components/cgu-viewer';

export default function ResultPage() {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Récupérer le HTML des CGU depuis le localStorage
    const storedHtml = localStorage.getItem('cguHtml');
    
    if (!storedHtml) {
      // Si aucun contenu n'est trouvé, rediriger vers la page d'accueil
      router.push('/');
      return;
    }
    
    setHtmlContent(storedHtml);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Vos CGU sont prêtes !
          </h1>
          <p className="mt-2 text-gray-600">
            Voici les Conditions Générales d'Utilisation générées selon vos critères.
            Vous pouvez les copier ou les télécharger en PDF.
          </p>
        </div>
        
        <CGUViewer htmlContent={htmlContent} />
      </div>
    </div>
  );
}
