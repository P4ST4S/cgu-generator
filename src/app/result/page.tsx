"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CGUViewer from "@/components/cgu-viewer";
import useAnalytics from "@/hooks/useAnalytics";

export default function ResultPage() {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Récupérer le HTML des CGU depuis le localStorage
    const storedHtml = localStorage.getItem("cguHtml");

    if (!storedHtml) {
      // Si aucun contenu n'est trouvé, rediriger vers la page d'accueil
      trackEvent("result_page_no_content");
      router.push("/");
      return;
    }

    setHtmlContent(storedHtml);
    setLoading(false);

    // Suivre l'affichage réussi de la page de résultats
    trackEvent("result_page_viewed", {
      content_length: storedHtml.length,
    });
  }, [router, trackEvent]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Vos CGU sont prêtes !
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Voici les Conditions Générales d&apos;Utilisation générées selon vos
            critères. Vous pouvez les copier ou les télécharger en PDF.
          </p>
          <a
            href="/"
            className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour à l&apos;accueil
          </a>
        </div>

        <CGUViewer htmlContent={htmlContent} />
      </div>
    </div>
  );
}
