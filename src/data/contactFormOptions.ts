/**
 * Option lists for the contact form, shared across the English, French and
 * Spanish form components. The `value` is a stable English token submitted to
 * the API regardless of the form language, so enquiry emails always read the
 * same way in one inbox.
 */
export interface LocalisedOption {
  value: string;
  en: string;
  fr: string;
  es: string;
}

export const youAreOptions: LocalisedOption[] = [
  { value: 'Brand', en: 'Brand', fr: 'Marque', es: 'Marca' },
  { value: 'Agency', en: 'Agency', fr: 'Agence', es: 'Agencia' },
  { value: 'Retailer', en: 'Retailer', fr: 'Distributeur', es: 'Minorista' },
  {
    value: 'Service provider',
    en: 'Service provider',
    fr: 'Prestataire de services',
    es: 'Proveedor de servicios',
  },
  { value: 'Manufacturer', en: 'Manufacturer', fr: 'Fabricant', es: 'Fabricante' },
  { value: 'Other', en: 'Other', fr: 'Autre', es: 'Otro' },
];

export const budgetOptions: LocalisedOption[] = [
  {
    value: 'Under US$5,000',
    en: 'Under US$5,000',
    fr: 'Moins de 5 000 $US',
    es: 'Menos de 5 000 US$',
  },
  {
    value: 'US$5,000 - 20,000',
    en: 'US$5,000 - 20,000',
    fr: '5 000 - 20 000 $US',
    es: '5 000 - 20 000 US$',
  },
  {
    value: 'US$20,000 - 50,000',
    en: 'US$20,000 - 50,000',
    fr: '20 000 - 50 000 $US',
    es: '20 000 - 50 000 US$',
  },
  {
    value: 'Over US$50,000',
    en: 'Over US$50,000',
    fr: 'Plus de 50 000 $US',
    es: 'Más de 50 000 US$',
  },
];
