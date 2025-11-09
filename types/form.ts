export interface CGUFormData {
  companyName: string;
  companyType: string;
  email: string;
  website: string;
  address: string;
  siret: string;
  activityType: string;
  hasDataCollection: boolean;
  hasEcommerce: boolean;
  hasNewsletter: boolean;
  hasCookies: boolean;
  hasUserAccounts: boolean;
}

export interface DemoFormData {
  companyName: string;
  activityType: string;
  email: string;
  website: string;
}

export const COMPANY_TYPES = [
  'SAS',
  'SARL',
  'EURL',
  'SA',
  'SCI',
  'Auto-entrepreneur',
  'Association',
] as const;

export type CompanyType = (typeof COMPANY_TYPES)[number];
