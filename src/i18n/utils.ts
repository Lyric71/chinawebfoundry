import { ui, type Locale, type TranslationKey } from './ui';
import {
  localizePath,
  canonicalizePath,
  splitLocale,
  hreflangFor,
  switchLocale,
} from './routes';

/**
 * Detect locale from URL pathname.
 */
export function getLangFromUrl(url: URL): Locale {
  return splitLocale(url.pathname).locale;
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
 * Turn a canonical English path into the localized, locale-prefixed path.
 * English keeps the path unchanged; FR and ES use native-language slugs.
 */
export function localePath(path: string, lang: Locale): string {
  return localizePath(path, lang);
}

/**
 * Strip any locale prefix from a path and map it back to its canonical
 * English path (reverses native-language slugs).
 */
export function stripLocale(path: string): string {
  const { locale, path: rest } = splitLocale(path);
  return canonicalizePath(rest, locale);
}

/**
 * Build the URL for the current page in another locale.
 */
export function switchLocalePath(currentPath: string, targetLang: Locale): string {
  return switchLocale(currentPath, targetLang);
}

/**
 * Get all three hreflang URLs for a given page path (locale prefix or not).
 */
export function getHreflangUrls(basePath: string, site: string) {
  return hreflangFor(basePath, site);
}
