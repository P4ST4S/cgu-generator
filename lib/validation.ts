import { z } from 'zod';

export const formDataSchema = z.object({
  companyName: z.string().min(1, 'Le nom de l\'entreprise est requis').max(100, 'Maximum 100 caractères'),
  companyType: z.string().min(1, 'La forme juridique est requise'),
  email: z.string().email('Adresse email invalide'),
  website: z.string().url('URL invalide').startsWith('http', 'L\'URL doit commencer par http:// ou https://'),
  address: z.string().min(10, 'L\'adresse doit contenir au moins 10 caractères').max(300, 'Maximum 300 caractères'),
  siret: z.string()
    .min(14, 'Le numéro SIRET doit contenir 14 chiffres')
    .max(17, 'Format invalide')
    .regex(/^[0-9\s]+$/, 'Le SIRET ne doit contenir que des chiffres et espaces'),
  activityType: z.string().min(3, 'Le type d\'activité doit contenir au moins 3 caractères').max(100, 'Maximum 100 caractères'),
  hasDataCollection: z.boolean(),
  hasEcommerce: z.boolean(),
  hasNewsletter: z.boolean(),
  hasCookies: z.boolean(),
  hasUserAccounts: z.boolean(),
});

export const demoFormDataSchema = z.object({
  companyName: z.string().max(100, 'Maximum 100 caractères'),
  activityType: z.string().max(100, 'Maximum 100 caractères'),
  email: z.string().email('Adresse email invalide').or(z.literal('')),
  website: z.string().url('URL invalide').or(z.literal('')),
});

export type FormDataSchema = z.infer<typeof formDataSchema>;
export type DemoFormDataSchema = z.infer<typeof demoFormDataSchema>;
