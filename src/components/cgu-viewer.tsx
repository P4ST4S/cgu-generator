'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface CGUViewerProps {
  htmlContent: string;
}

const CGUViewer: React.FC<CGUViewerProps> = ({ htmlContent }) => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopy = () => {
    // Créer un élément temporaire
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;
    
    // Obtenir le texte brut sans les balises HTML
    const textContent = tempElement.textContent || tempElement.innerText || '';
    
    // Copier dans le presse-papier
    navigator.clipboard.writeText(textContent)
      .then(() => {
        alert('Le contenu a été copié dans le presse-papier !');
      })
      .catch(err => {
        console.error('Erreur lors de la copie : ', err);
        alert('Une erreur est survenue lors de la copie.');
      });
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      const response = await fetch('/api/download-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: htmlContent }),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la génération du PDF');
      }
      
      // Obtenir le blob du PDF
      const blob = await response.blob();
      
      // Créer une URL pour le blob
      const url = window.URL.createObjectURL(blob);
      
      // Créer un lien de téléchargement
      const a = document.createElement('a');
      a.href = url;
      a.download = 'conditions-generales-utilisation.pdf';
      
      // Simuler un clic pour déclencher le téléchargement
      document.body.appendChild(a);
      a.click();
      
      // Nettoyer
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Une erreur est survenue lors du téléchargement du PDF.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCreateNew = () => {
    // Effacer les CGU stockées
    localStorage.removeItem('cguHtml');
    
    // Rediriger vers la page d'accueil
    router.push('/');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-medium">Conditions Générales d'Utilisation</h2>
          <div className="flex space-x-2">
            <Button onClick={handleCopy} variant="outline" size="sm">
              Copier
            </Button>
            <Button 
              onClick={handleDownloadPDF} 
              variant="primary" 
              size="sm"
              isLoading={isDownloading}
            >
              Télécharger en PDF
            </Button>
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-gray-50 min-h-[500px] max-h-[700px] overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={handleCreateNew} variant="secondary">
          Créer de nouvelles CGU
        </Button>
      </div>
    </div>
  );
};

export default CGUViewer;
