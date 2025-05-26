"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, any> }
    ) => void;
  }
}

/**
 * Hook pour suivre les événements avec Plausible Analytics
 * de manière respectueuse de la vie privée
 */
export const useAnalytics = () => {
  const pathname = usePathname();
  const [searchParamsString, setSearchParamsString] = useState("");

  // Update searchParamsString safely from window.location.search (client-side only)
  useEffect(() => {
    // Éviter d'utiliser useSearchParams pour ne pas avoir besoin de Suspense
    // et pour permettre la génération statique sans erreur
    if (typeof window !== 'undefined') {
      setSearchParamsString(window.location.search);
    }
  }, []);

  // Suivre les changements de page
  useEffect(() => {
    if (window.plausible) {
      // Lorsque le chemin de la page ou les paramètres de recherche changent,
      // on déclenche un événement de page vue
      window.plausible("pageview");
    }
  }, [pathname, searchParamsString]);

  // Fonction pour suivre des événements personnalisés
  const trackEvent = (eventName: string, props?: Record<string, any>) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  };

  return { trackEvent };
};

export default useAnalytics;
