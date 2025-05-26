"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/PaymentContext";
import useAnalytics from "@/hooks/useAnalytics";
import {
  CreditCardIcon,
  LockOpenIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function AccountPage() {
  const [paymentDate, setPaymentDate] = useState<string | null>(null);
  const { hasPaid, setHasPaid } = usePayment();
  const { trackEvent } = useAnalytics();
  const router = useRouter();

  useEffect(() => {
    // Récupérer la date de paiement si elle existe
    const storedDate = localStorage.getItem("paymentDate");
    if (storedDate) {
      setPaymentDate(storedDate);
    }
  }, []);

  const handleReset = () => {
    // Réinitialiser l'état de paiement (pour les tests)
    localStorage.removeItem("hasPaid");
    localStorage.removeItem("paymentDate");
    setHasPaid(false);
    trackEvent("payment_status_reset");

    router.push("/");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center">
          <button
            onClick={() => router.push("/")}
            className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mon compte
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              État de votre abonnement
            </h2>
          </div>

          {hasPaid ? (
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <LockOpenIcon className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Vous avez débloqué l'accès complet aux CGU
                  </p>
                  {paymentDate && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Date d'achat : {formatDate(paymentDate)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <LockOpenIcon className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Vous n'avez pas encore débloqué l'accès complet aux CGU
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-4">
            {hasPaid ? (
              <p className="text-gray-600 dark:text-gray-300">
                Vous pouvez générer, télécharger et utiliser autant de CGU que
                vous le souhaitez.
              </p>
            ) : (
              <Button onClick={() => router.push("/result")} variant="primary">
                Débloquer l'accès aux CGU
              </Button>
            )}

            {/* Option de réinitialisation pour les tests */}
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Options de développement
              </p>
              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                className="text-red-600 dark:text-red-400 border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Réinitialiser l'état de paiement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
