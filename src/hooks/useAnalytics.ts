"use client";

import { useEffect, useState } from "react";
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

  // Safely handle searchParams which requires Suspense boundary
  const searchParamsObj = useSearchParams();
  const [searchParamsString, setSearchParamsString] = useState("");

  // Update searchParamsString when searchParamsObj changes
  useEffect(() => {
    if (searchParamsObj) {
      setSearchParamsString(searchParamsObj.toString());
    }
  }, [searchParamsObj]);

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
