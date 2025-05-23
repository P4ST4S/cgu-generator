import { z } from 'zod';
import { ServiceType, Jurisdiction } from './types';

export const formSchema = z.object({
  siteName: z.string().min(2, {
    message: 'Le nom du site doit contenir au moins 2 caractères.',
  }),
  serviceType: z.nativeEnum(ServiceType, {
    errorMap: () => ({ message: 'Veuillez sélectionner un type de service.' }),
  }),
  collectedData: z.object({
    email: z.boolean().default(false),
    ip: z.boolean().default(false),
    creditCard: z.boolean().default(false),
    phone: z.boolean().default(false),
    location: z.boolean().default(false),
    browsing: z.boolean().default(false),
  }),
  services: z.object({
    stripe: z.boolean().default(false),
    googleAnalytics: z.boolean().default(false),
    facebook: z.boolean().default(false),
    aws: z.boolean().default(false),
    advertising: z.boolean().default(false),
  }),
  jurisdiction: z.nativeEnum(Jurisdiction, {
    errorMap: () => ({ message: 'Veuillez sélectionner une juridiction.' }),
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
