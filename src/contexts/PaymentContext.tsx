"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useAnalytics from "@/hooks/useAnalytics";

interface PaymentContextType {
  hasPaid: boolean;
  setHasPaid: (value: boolean) => void;
  checkPaymentStatus: () => boolean;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [hasPaid, setHasPaid] = useState<boolean>(false);
  const { trackEvent } = useAnalytics();

  // Vérifier l'état du paiement au chargement
  useEffect(() => {
    const paidStatus = localStorage.getItem("hasPaid") === "true";
    setHasPaid(paidStatus);

    if (paidStatus) {
      trackEvent("payment_status_verified", { status: "paid" });
    }
  }, [trackEvent]);

  // Fonction pour vérifier l'état de paiement actuel
  const checkPaymentStatus = (): boolean => {
    const status = localStorage.getItem("hasPaid") === "true";
    return status;
  };

  return (
    <PaymentContext.Provider
      value={{ hasPaid, setHasPaid, checkPaymentStatus }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
