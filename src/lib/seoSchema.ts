import type { Locale } from '../i18n/ui';

export const inLanguageMap = {
  en: 'en-GB',
  fr: 'fr-FR',
  es: 'es-ES',
  de: 'de-DE',
} as const satisfies Record<Locale, string>;

interface FaqLike {
  items: { question: string; answer: string }[];
}

/**
 * Build a FAQPage JSON-LD block from a locale's FAQ topic list.
 * Flattens every topic's question/answer pairs into one mainEntity array.
 * Note: Google restricts FAQ rich results to gov/health domains, so this
 * is retained for AI/LLM citation (AI Overviews, ChatGPT, Perplexity, Baidu AI).
 */
export function buildFaqPageLd(topics: FaqLike[], pageUrl: string, lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: inLanguageMap[lang],
    mainEntity: topics.flatMap((topic) =>
      topic.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };
}

/**
 * Build a BreadcrumbList JSON-LD block from an ordered list of crumbs.
 * Each crumb is { name, item } where item is an absolute URL.
 */
export function buildBreadcrumbLd(crumbs: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}
