import { ui, type Locale, type TranslationKey } from './ui';

/**
 * Detect locale from URL pathname.
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr') return 'fr';
  return 'en';
}

/**
 * Return a translation function for the given locale.
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui.en[key];
  };
}

/**
 * Prefix a path with the locale (no prefix for English).
 */
export function localePath(path: string, lang: Locale): string {
  if (lang === 'en') return path;
  // Avoid double /fr/ prefix
  if (path.startsWith('/fr/') || path === '/fr') return path;
  return `/fr${path}`;
}

/**
 * Get the equivalent URL in the other language.
 */
export function getAlternateUrl(currentPath: string, currentLang: Locale): string {
  if (currentLang === 'en') {
    return `/fr${currentPath === '/' ? '/' : currentPath}`;
  }
  const stripped = currentPath.replace(/^\/fr/, '') || '/';
  return stripped;
}

/**
 * Get both hreflang URLs for a given page path (without locale prefix).
 */
export function getHreflangUrls(basePath: string, site: string) {
  const clean = basePath.replace(/^\/fr/, '') || '/';
  return {
    en: `${site}${clean === '/' ? '' : clean}`,
    fr: `${site}/fr${clean === '/' ? '/' : clean}`,
  };
}
