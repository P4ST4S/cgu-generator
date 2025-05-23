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
  email: boolean | undefined;
  ip: boolean | undefined;
  creditCard: boolean | undefined;
  phone: boolean | undefined;
  location: boolean | undefined;
  browsing: boolean | undefined;
};

export type Services = {
  stripe: boolean | undefined;
  googleAnalytics: boolean | undefined;
  facebook: boolean | undefined;
  aws: boolean | undefined;
  advertising: boolean | undefined;
};

export type CGUFormData = {
  siteName: string;
  serviceType: ServiceType;
  collectedData: CollectedData;
  services: Services;
  jurisdiction: Jurisdiction;
};
