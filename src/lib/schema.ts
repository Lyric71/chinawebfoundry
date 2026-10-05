/**
 * JSON-LD schema helpers. Call from a page's frontmatter and pass the result
 * into <PageLayout jsonLd={...} /> so the schema is emitted in <head>.
 */
import { splitLocale, localizePath } from '../i18n/routes';

interface ServiceSchemaInput {
  title: string;
  description: string;
}

/**
 * Build Service + BreadcrumbList JSON-LD for a service detail page.
 * Uses Astro.url to detect locale automatically; native-language slugs are
 * already part of the URL so the page URL is taken verbatim.
 */
export function serviceSchema(astroUrl: URL, astroSite: URL | undefined, service: ServiceSchemaInput) {
  const path = astroUrl.pathname;
  const { locale } = splitLocale(path);
  const siteOrigin = (astroSite?.toString().replace(/\/$/, '')) || 'https://www.chinawebfoundry.com';

  const pageUrl = `${siteOrigin}${path}`;
  const homeUrl = `${siteOrigin}${localizePath('/', locale)}`;
  const servicesUrl = `${siteOrigin}${localizePath('/services/', locale)}`;
  const contactUrl = `${siteOrigin}${localizePath('/contact/', locale)}`;
  const homeLabelMap = { en: 'Home', fr: 'Accueil', es: 'Inicio', de: 'Startseite' } as const;
  const inLanguageMap = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES', de: 'de-DE' } as const;
  const servicesLabelMap = { en: 'Services', fr: 'Services', es: 'Servicios', de: 'Leistungen' } as const;
  const homeLabel = homeLabelMap[locale];
  const servicesLabel = servicesLabelMap[locale];

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    description: service.description,
    url: pageUrl,
    inLanguage: inLanguageMap[locale],
    provider: { '@id': `${siteOrigin}/#organization` },
    areaServed: { '@type': 'Country', name: 'China' },
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: contactUrl,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: homeUrl },
      { '@type': 'ListItem', position: 2, name: servicesLabel, item: servicesUrl },
      { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
    ],
  };

  return [serviceLd, breadcrumbLd];
}

/**
 * Read the question and answer pairs out of a guide's markdown body, for
 * guides with `faqSchema: true`. Only the last `##` section is read, and in it
 * every line that is a bold question opens a pair; the lines that follow, up
 * to the next bold question, are its answer.
 */
export function faqsFromMarkdown(body: string): Array<{ question: string; answer: string }> {
  const text = body.replace(/\r\n/g, '\n');
  const lastH2 = text.lastIndexOf('\n## ');
  const lines = (lastH2 >= 0 ? text.slice(lastH2 + 1) : text).split('\n').slice(1);
  const plain = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  const faqs: Array<{ question: string; answer: string }> = [];
  for (const line of lines) {
    const q = line.match(/^\*\*(.+\?)\*\*\s*$/);
    if (q) faqs.push({ question: plain(q[1]), answer: '' });
    else if (faqs.length) faqs[faqs.length - 1].answer += ` ${line}`;
  }
  return faqs.map((f) => ({ ...f, answer: plain(f.answer) })).filter((f) => f.answer);
}

/**
 * Build a FAQPage JSON-LD block from {question, answer} pairs.
 * Accepts answers as string OR string[] (the Baidu SEO page splits answers
 * into paragraphs as arrays).
 */
export function faqSchema(faqs: Array<{ question: string; answer: string | string[] }>, lang: 'en' | 'fr' | 'es' | 'de' = 'en') {
  const inLanguageMap = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES', de: 'de-DE' } as const;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: inLanguageMap[lang],
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: Array.isArray(f.answer) ? f.answer.join('\n\n') : f.answer,
      },
    })),
  };
}
