/**
 * JSON-LD schema helpers. Call from a page's frontmatter and pass the result
 * into <PageLayout jsonLd={...} /> so the schema is emitted in <head>.
 */

interface ServiceSchemaInput {
  title: string;
  description: string;
}

/**
 * Build Service + BreadcrumbList JSON-LD for a /services/<slug>/ page.
 * Uses Astro.url to detect locale and slug automatically.
 */
export function serviceSchema(astroUrl: URL, astroSite: URL | undefined, service: ServiceSchemaInput) {
  const path = astroUrl.pathname;
  const localeMatch = path.match(/^\/(fr|es)\//);
  const locale = (localeMatch ? localeMatch[1] : 'en') as 'en' | 'fr' | 'es';
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const slug = path.replace(/^\/(?:fr\/|es\/)?services\/?/, '').replace(/\/$/, '');
  const siteOrigin = (astroSite?.toString().replace(/\/$/, '')) || 'https://www.chinawebfoundry.com';

  const pageUrl = `${siteOrigin}${prefix}/services/${slug}/`;
  const homeUrl = `${siteOrigin}${prefix}/`;
  const servicesUrl = `${siteOrigin}${prefix}/services/`;
  const homeLabelMap = { en: 'Home', fr: 'Accueil', es: 'Inicio' } as const;
  const inLanguageMap = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES' } as const;
  const homeLabel = homeLabelMap[locale];
  const servicesLabel = locale === 'es' ? 'Servicios' : 'Services';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: pageUrl,
    inLanguage: inLanguageMap[locale],
    provider: { '@id': `${siteOrigin}/#organization` },
    areaServed: { '@type': 'Country', name: 'China' },
    serviceType: service.title,
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
 * Build a FAQPage JSON-LD block from {question, answer} pairs.
 * Accepts answers as string OR string[] (the Baidu SEO page splits answers
 * into paragraphs as arrays).
 */
export function faqSchema(faqs: Array<{ question: string; answer: string | string[] }>, lang: 'en' | 'fr' | 'es' = 'en') {
  const inLanguageMap = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES' } as const;
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
