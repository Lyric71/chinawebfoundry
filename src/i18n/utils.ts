import { ui, type Locale, type TranslationKey } from './ui';

/** Locales that carry a URL prefix (everything except the default English). */
const PREFIXED_LOCALES = ['fr', 'es'] as const;

/**
 * Detect locale from URL pathname.
 */
export function getLangFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  if (seg === 'fr') return 'fr';
  if (seg === 'es') return 'es';
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
  if (path.startsWith(`/${lang}/`) || path === `/${lang}`) return path;
  return `/${lang}${path}`;
}

/**
 * Strip any locale prefix from a path, returning the English-style base path.
 */
export function stripLocale(path: string): string {
  for (const loc of PREFIXED_LOCALES) {
    if (path === `/${loc}` || path.startsWith(`/${loc}/`)) {
      return path.replace(new RegExp(`^/${loc}`), '') || '/';
    }
  }
  return path || '/';
}

/**
 * Build the URL for the current page in another locale.
 */
export function switchLocalePath(currentPath: string, targetLang: Locale): string {
  const base = stripLocale(currentPath);
  return localePath(base, targetLang);
}

/**
 * Get all three hreflang URLs for a given page path (locale prefix or not).
 */
export function getHreflangUrls(basePath: string, site: string) {
  const clean = stripLocale(basePath);
  // Always emit a trailing slash on the home so canonical and hreflang agree.
  const path = clean === '/' ? '/' : clean;
  return {
    en: `${site}${path}`,
    fr: `${site}/fr${path}`,
    es: `${site}/es${path}`,
  };
}
