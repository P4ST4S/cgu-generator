"use client";

import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input, Select, CheckboxGroup } from "@/components/ui/form";
import { formSchema, FormSchema } from "@/lib/schema";
import { ServiceType, Jurisdiction, CGUFormData } from "@/lib/types";

const CGUForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      siteName: "",
      serviceType: ServiceType.BLOG,
      collectedData: {
        email: false,
        ip: false,
        creditCard: false,
        phone: false,
        location: false,
        browsing: false,
      },
      services: {
        stripe: false,
        googleAnalytics: false,
        facebook: false,
        aws: false,
        advertising: false,
      },
      jurisdiction: Jurisdiction.FRANCE,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/generate-cgu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Stocker le HTML des CGU dans le localStorage
        localStorage.setItem("cguHtml", result.html);

        // Rediriger vers la page de résultat
        router.push("/result");
      } else {
        throw new Error(result.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Une erreur est survenue lors de la génération des CGU. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Informations générales</h2>

          <Input name="siteName" placeholder="Nom du site" required />

          <Select
            name="serviceType"
            label="Type de service"
            options={[
              { value: ServiceType.BLOG, label: "Blog" },
              { value: ServiceType.ECOMMERCE, label: "E-commerce" },
              {
                value: ServiceType.SAAS,
                label: "SaaS (Software as a Service)",
              },
              { value: ServiceType.MOBILE_APP, label: "Application Mobile" },
            ]}
            required
          />

          <Select
            name="jurisdiction"
            label="Juridiction"
            options={[
              { value: Jurisdiction.FRANCE, label: "France" },
              { value: Jurisdiction.EUROPE, label: "Europe" },
              { value: Jurisdiction.USA, label: "États-Unis" },
              { value: Jurisdiction.INTERNATIONAL, label: "International" },
            ]}
            required
          />
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Données collectées</h2>

          <CheckboxGroup
            name="collectedData"
            label="Sélectionnez les données que vous collectez"
            options={[
              { id: "email", label: "Adresses email" },
              { id: "ip", label: "Adresses IP" },
              { id: "creditCard", label: "Informations de carte bancaire" },
              { id: "phone", label: "Numéros de téléphone" },
              { id: "location", label: "Données de localisation" },
              { id: "browsing", label: "Données de navigation" },
            ]}
          />
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Services tiers</h2>

          <CheckboxGroup
            name="services"
            label="Sélectionnez les services que vous utilisez"
            options={[
              { id: "stripe", label: "Stripe (paiement)" },
              { id: "googleAnalytics", label: "Google Analytics" },
              { id: "facebook", label: "Facebook (plugins sociaux)" },
              { id: "aws", label: "Amazon Web Services (AWS)" },
              { id: "advertising", label: "Réseaux publicitaires" },
            ]}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
          >
            Générer les CGU
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CGUForm;
