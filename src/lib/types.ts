export enum ServiceType {
  BLOG = "blog",
  ECOMMERCE = "e-commerce",
  SAAS = "saas",
  MOBILE_APP = "app_mobile",
}

export enum Jurisdiction {
  FRANCE = "france",
  EUROPE = "europe",
  USA = "usa",
  INTERNATIONAL = "international",
}

export type CollectedData = {
  email: boolean;
  ip: boolean;
  creditCard: boolean;
  phone: boolean;
  location: boolean;
  browsing: boolean;
};

export type Services = {
  stripe: boolean;
  googleAnalytics: boolean;
  facebook: boolean;
  aws: boolean;
  advertising: boolean;
};

export type CGUFormData = {
  siteName: string;
  serviceType: ServiceType;
  collectedData: CollectedData;
  services: Services;
  jurisdiction: Jurisdiction;
};

export type FormData = {
  siteName: string;
  serviceType: ServiceType;
  collectedData: CollectedData;
  services: Services;
  jurisdiction: Jurisdiction;
};
