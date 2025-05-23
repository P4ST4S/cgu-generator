"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  // Suivre les changements de page
  useEffect(() => {
    if (window.plausible) {
      // Lorsque le chemin de la page ou les paramètres de recherche changent,
      // on déclenche un événement de page vue
      window.plausible("pageview");
    }
  }, [pathname, searchParams]);

  // Fonction pour suivre des événements personnalisés
  const trackEvent = (eventName: string, props?: Record<string, any>) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  };

  return { trackEvent };
};

export default useAnalytics;
