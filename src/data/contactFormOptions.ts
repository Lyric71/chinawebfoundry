/**
 * Option lists for the contact form, shared across the English, French,
 * Spanish and German form components. The `value` is a stable English token
 * submitted to the API regardless of the form language, so enquiry emails
 * always read the same way in one inbox.
 */
export interface LocalisedOption {
  value: string;
  en: string;
  fr: string;
  es: string;
  de: string;
}

export const youAreOptions: LocalisedOption[] = [
  { value: 'Brand', en: 'Brand', fr: 'Marque', es: 'Marca', de: 'Marke' },
  { value: 'Agency', en: 'Agency', fr: 'Agence', es: 'Agencia', de: 'Agentur' },
  {
    value: 'Retailer',
    en: 'Retailer',
    fr: 'Distributeur',
    es: 'Minorista',
    de: 'Handelsunternehmen',
  },
  {
    value: 'Service provider',
    en: 'Service provider',
    fr: 'Prestataire de services',
    es: 'Proveedor de servicios',
    de: 'Dienstleister',
  },
  {
    value: 'Manufacturer',
    en: 'Manufacturer',
    fr: 'Fabricant',
    es: 'Fabricante',
    de: 'Hersteller',
  },
  { value: 'Other', en: 'Other', fr: 'Autre', es: 'Otro', de: 'Sonstiges' },
];

export const budgetOptions: LocalisedOption[] = [
  {
    value: 'Under US$5,000',
    en: 'Under US$5,000',
    fr: 'Moins de 5 000 €',
    es: 'Menos de 5 000 €',
    de: 'Unter 5.000 €',
  },
  {
    value: 'US$5,000 - 20,000',
    en: 'US$5,000 - 20,000',
    fr: '5 000 - 20 000 €',
    es: '5 000 - 20 000 €',
    de: '5.000 - 20.000 €',
  },
  {
    value: 'US$20,000 - 50,000',
    en: 'US$20,000 - 50,000',
    fr: '20 000 - 50 000 €',
    es: '20 000 - 50 000 €',
    de: '20.000 - 50.000 €',
  },
  {
    value: 'Over US$50,000',
    en: 'Over US$50,000',
    fr: 'Plus de 50 000 €',
    es: 'Más de 50 000 €',
    de: 'Über 50.000 €',
  },
];

/**
 * "How did you hear about us?" answers. The value is a stable slug that the
 * API whitelists; the enquiry email shows the English label.
 */
export const sourceOptions: LocalisedOption[] = [
  {
    value: 'google',
    en: 'Google or another search engine',
    fr: 'Par Google ou un autre moteur de recherche',
    es: 'Por Google u otro buscador',
    de: 'Über Google oder eine andere Suchmaschine',
  },
  {
    value: 'ai',
    en: 'An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)',
    fr: 'Par un assistant IA (ChatGPT, Gemini, Claude, Perplexity…)',
    es: 'Por un asistente de IA (ChatGPT, Gemini, Claude, Perplexity…)',
    de: 'Über einen KI-Assistenten (ChatGPT, Gemini, Claude, Perplexity …)',
  },
  {
    value: 'exhibition',
    en: 'An exhibition or a trade show',
    fr: 'Sur un salon professionnel ou une exposition',
    es: 'En una feria o exposición profesional',
    de: 'Auf einer Messe oder Ausstellung',
  },
  {
    value: 'referral',
    en: 'A referral, someone recommended us',
    fr: 'Par le bouche-à-oreille, on vous a parlé de nous',
    es: 'Por recomendación de alguien',
    de: 'Durch eine persönliche Empfehlung',
  },
  {
    value: 'other',
    en: 'Somewhere else',
    fr: 'Par un autre biais',
    es: 'Por otra vía',
    de: 'Auf anderem Weg',
  },
];

/** Answers that reveal the optional "Which one?" text field. */
export const sourceDetailValues = ['referral', 'exhibition', 'other'];

/** Longest "Which one?" answer the form and the API accept. */
export const SOURCE_DETAIL_MAX = 120;
