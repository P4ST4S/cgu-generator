"use client";

import Link from "next/link";
import { usePayment } from "@/contexts/PaymentContext";

export default function NotFound() {
  const { hasPaid } = usePayment();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Page non trouvée</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      {hasPaid && (
        <div className="text-sm text-green-600 dark:text-green-400 mb-6 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
          Vous avez un accès premium débloqué !
        </div>
      )}

      <div className="flex space-x-4">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Retour à l'accueil
        </Link>

        <Link
          href="/account"
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded transition-colors"
        >
          Mon compte
        </Link>
      </div>
    </div>
  );
}
