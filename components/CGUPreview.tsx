'use client';

import { generateCGU } from '@/lib/generateCGU';

interface FormData {
  companyName: string;
  companyType: string;
  email: string;
  website: string;
  address: string;
  siret: string;
  activityType: string;
  hasDataCollection: boolean;
  hasEcommerce: boolean;
  hasNewsletter: boolean;
  hasCookies: boolean;
  hasUserAccounts: boolean;
}

interface CGUPreviewProps {
  formData: FormData;
  showPreview: boolean;
}

export default function CGUPreview({ formData, showPreview }: CGUPreviewProps) {
  const cguContent = generateCGU(formData);

  // Extract body content for preview
  const getPreviewContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(cguContent, 'text/html');
    const bodyContent = doc.body.innerHTML;
    return bodyContent;
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([cguContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `CGU-${formData.companyName.replace(/\s+/g, '-')}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cguContent);
    alert('CGU copiées dans le presse-papier !');
  };

  if (!showPreview) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Aperçu du document
          </h3>
          <p className="text-gray-600">
            Remplissez le formulaire et cliquez sur &quot;Générer mes CGU&quot; pour voir l&apos;aperçu de votre document.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Aperçu de vos CGU
          </h3>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Mise à jour en temps réel
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 bg-secondary border-b border-gray-200 flex gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Télécharger HTML
        </button>
        <button
          onClick={handleCopy}
          className="flex-1 py-2 px-4 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-primary transition-colors font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copier
        </button>
      </div>

      {/* Document Preview */}
      <div className="p-6 max-h-[600px] overflow-y-auto bg-white">
        <div
          className="prose prose-base max-w-none prose-headings:text-foreground prose-p:text-gray-700 prose-strong:text-foreground prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
          dangerouslySetInnerHTML={{ __html: getPreviewContent() }}
        />
      </div>

      {/* Footer info */}
      <div className="px-6 py-4 bg-secondary border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Document conforme au RGPD
        </div>
      </div>
    </div>
  );
}
