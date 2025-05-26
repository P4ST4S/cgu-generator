"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useAnalytics from "@/hooks/useAnalytics";
import { LockClosedIcon, SparklesIcon } from "@heroicons/react/24/outline";

interface PaywallProps {
  onUnlock: () => void;
}

const Paywall: React.FC<PaywallProps> = ({ onUnlock }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { trackEvent } = useAnalytics();

  const handlePurchase = async () => {
    setIsProcessing(true);

    // Simuler un traitement de paiement
    trackEvent("paywall_purchase_started");

    try {
      // Ici, vous pourriez implémenter une vraie intégration de paiement
      // comme Stripe, PayPal, etc.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Marquer l'utilisateur comme ayant payé
      localStorage.setItem("hasPaid", "true");
      localStorage.setItem("paymentDate", new Date().toISOString());
      trackEvent("paywall_purchase_completed");

      // Débloquer le contenu
      onUnlock();
    } catch (error) {
      console.error("Erreur lors du paiement:", error);
      trackEvent("paywall_purchase_failed");
      alert("Une erreur est survenue lors du paiement. Veuillez réessayer.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 my-6 border border-blue-100 dark:border-blue-900">
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <LockClosedIcon
            className="h-8 w-8 text-blue-600 dark:text-blue-400"
            aria-hidden="true"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Déverrouillez vos CGU
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Pour télécharger ou utiliser vos CGU générées, veuillez passer à la
        version premium.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <SparklesIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">
            Téléchargement illimité en PDF
          </span>
        </div>
        <div className="flex items-start">
          <SparklesIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">
            Formats personnalisables
          </span>
        </div>
        <div className="flex items-start">
          <SparklesIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">
            Mises à jour gratuites
          </span>
        </div>
      </div>

      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          9,99 €
        </span>
        <span className="text-gray-500 dark:text-gray-400 ml-1">
          usage unique
        </span>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handlePurchase}
          variant="primary"
          size="lg"
          isLoading={isProcessing}
          className="w-full"
        >
          {isProcessing ? "Traitement en cours..." : "Débloquer maintenant"}
        </Button>
      </div>

      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
        Paiement sécurisé. Satisfaction garantie ou remboursé sous 30 jours.
      </p>
    </div>
  );
};

export default Paywall;
