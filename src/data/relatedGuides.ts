import type { Locale } from '../i18n/ui';

export type GuideCategory = 'Technology' | 'Hosting' | 'Content' | 'Design' | 'Legal' | 'Search';

/**
 * Guide category shown on each service page. The component lists the newest
 * published guides in that category, so new articles appear on their own.
 * Keyed by English service slug.
 */
export const relatedGuideTopics: Record<string, GuideCategory> = {
  'baidu-seo': 'Search',
  'china-hosting': 'Hosting',
  'china-migration': 'Hosting',
  'chinese-content': 'Content',
  geo: 'Search',
  'maintenance-support': 'Technology',
  'plugins-extensions': 'Technology',
  'strategy-audit': 'Technology',
  'technical-integration': 'Technology',
  'ux-ui-design': 'Design',
};

interface RelatedGuidesCopy {
  eyebrow: string;
  title: string;
  intro: string;
  read: string;
  /** `{topic}` is replaced with the matching `topics` entry. */
  allLink: string;
  topics: Record<GuideCategory, string>;
}

/** Section copy per locale. */
export const relatedGuidesCopy: Record<Locale, RelatedGuidesCopy> = {
  en: {
    eyebrow: 'China Web Guide',
    title: 'Read up before you brief us',
    intro: 'The latest articles from our guide on the ground this service covers. Written in Shanghai, from projects we have shipped.',
    read: 'Read article',
    allLink: 'See all articles on {topic}',
    topics: {
      Search: 'search in China',
      Hosting: 'hosting in China',
      Technology: 'technology',
      Content: 'content',
      Design: 'design',
      Legal: 'compliance',
    },
  },
  fr: {
    eyebrow: 'Guide du web chinois',
    title: 'Pour aller plus loin',
    intro: 'Les derniers articles de notre guide sur le terrain que couvre ce service. Rédigés à Shanghai, à partir de projets livrés.',
    read: "Lire l'article",
    allLink: 'Voir tous les articles sur {topic}',
    topics: {
      Search: 'la recherche en Chine',
      Hosting: "l'hébergement en Chine",
      Technology: 'la technique',
      Content: 'le contenu',
      Design: 'le design',
      Legal: 'la conformité',
    },
  },
  es: {
    eyebrow: 'Guía de la web china',
    title: 'Para leer antes de escribirnos',
    intro: 'Los últimos artículos de nuestra guía sobre el terreno que cubre este servicio. Escritos en Shanghái, a partir de proyectos entregados.',
    read: 'Leer el artículo',
    allLink: 'Ver todos los artículos sobre {topic}',
    topics: {
      Search: 'búsqueda en China',
      Hosting: 'alojamiento en China',
      Technology: 'tecnología',
      Content: 'contenido',
      Design: 'diseño',
      Legal: 'cumplimiento normativo',
    },
  },
  de: {
    eyebrow: 'China-Web-Leitfaden',
    title: 'Zum Weiterlesen',
    intro: 'Die neuesten Artikel aus unserem Leitfaden zu dem Feld, in dem diese Leistung arbeitet. Geschrieben in Shanghai, aus abgeschlossenen Projekten.',
    read: 'Artikel lesen',
    allLink: 'Alle Artikel zum Thema {topic}',
    topics: {
      Search: 'Suche in China',
      Hosting: 'Hosting in China',
      Technology: 'Technik',
      Content: 'Inhalte',
      Design: 'Design',
      Legal: 'Compliance',
    },
  },
};
