/**
 * Native-language URL routing.
 *
 * English is the canonical locale. Every internal link in the codebase, and
 * every input passed to the helpers in this module, is written as an English
 * path. This module translates those canonical paths into the native-language
 * slugs used by the FR and ES locales, and reverses the mapping for hreflang
 * and the language switcher.
 *
 * Brand and product names (WordPress, Astro, WeChat, Baidu, GEO, the China
 * Site Scanner) keep their English slug in every locale.
 *
 * This file has no Astro-runtime dependencies, so it can also be imported from
 * astro.config.mjs for the sitemap.
 */

import type { Locale } from './ui';

type Trans = { fr: string; es: string };

/**
 * Static page paths. Key = canonical English path (leading + trailing slash).
 * Value = the localized path for fr / es (no locale prefix).
 * Paths absent here are identical across locales (home and brand pages).
 */
export const staticRoutes: Record<string, Trans> = {
  '/services/': { fr: '/services/', es: '/servicios/' },
  '/work/': { fr: '/realisations/', es: '/proyectos/' },
  '/who-we-are/': { fr: '/qui-sommes-nous/', es: '/quienes-somos/' },
  '/contact/': { fr: '/contact/', es: '/contacto/' },
  '/resources/': { fr: '/ressources/', es: '/recursos/' },
  '/resources/china-web-guide/': { fr: '/ressources/guide-web-chine/', es: '/recursos/guia-web-china/' },
  '/resources/faq/': { fr: '/ressources/faq/', es: '/recursos/faq/' },
  '/privacy-policy/': { fr: '/politique-de-confidentialite/', es: '/politica-de-privacidad/' },
  '/terms-of-service/': { fr: '/conditions-generales/', es: '/condiciones-del-servicio/' },
  '/cookie-policy/': { fr: '/politique-cookies/', es: '/politica-de-cookies/' },
  '/web-agency-china/': { fr: '/agence-web-chine/', es: '/agencia-web-china/' },
};

/** Service detail slugs, keyed by English content id. baidu-seo + geo unchanged. */
export const serviceSlugs: Record<string, Trans> = {
  'china-hosting': { fr: 'hebergement-chine', es: 'alojamiento-china' },
  'china-migration': { fr: 'migration-chine', es: 'migracion-china' },
  'chinese-content': { fr: 'contenu-chinois', es: 'contenido-chino' },
  'maintenance-support': { fr: 'maintenance-support', es: 'mantenimiento-soporte' },
  'plugins-extensions': { fr: 'plugins-extensions', es: 'plugins-extensiones' },
  'strategy-audit': { fr: 'strategie-audit', es: 'estrategia-auditoria' },
  'technical-integration': { fr: 'integration-technique', es: 'integracion-tecnica' },
  'ux-ui-design': { fr: 'design-ux-ui', es: 'diseno-ux-ui' },
};

/** Guide article slugs, keyed by English content id. */
export const guideSlugs: Record<string, Trans> = {
  'baidu-keyword-research-tools': { fr: 'outils-mots-cles-baidu', es: 'herramientas-palabras-clave-baidu' },
  'baidu-seo-ranking-in-china': { fr: 'seo-baidu-chine', es: 'seo-baidu-china' },
  'china-content-marketing-strategy': { fr: 'marketing-contenu-chine', es: 'marketing-contenidos-china' },
  'china-data-privacy-pipl-dsl': { fr: 'donnees-personnelles-chine-pipl-dsl', es: 'datos-personales-china-pipl-dsl' },
  'china-search-landscape-beyond-baidu': { fr: 'recherche-chine-au-dela-baidu', es: 'busqueda-china-mas-alla-baidu' },
  'china-website-hosting-guide': { fr: 'hebergement-web-chine', es: 'alojamiento-web-china' },
  'china-website-localisation': { fr: 'localiser-site-chine', es: 'localizar-sitio-china' },
  'great-firewall-what-it-blocks': { fr: 'grand-pare-feu-chine', es: 'gran-cortafuegos-china' },
  'icp-licence-filing-foreign-companies': { fr: 'licence-icp-entreprises-etrangeres', es: 'licencia-icp-empresas-extranjeras' },
  'mobile-first-design-china': { fr: 'design-mobile-first-chine', es: 'diseno-mobile-first-china' },
};

/** Case study slugs, keyed by English content id. Client brand names kept. */
export const caseStudySlugs: Record<string, Trans> = {
  'bassetti-wordpress-china': { fr: 'bassetti-wordpress-chine', es: 'bassetti-wordpress-china' },
  'imhof-woocommerce-china': { fr: 'imhof-woocommerce-chine', es: 'imhof-woocommerce-china' },
  'netk5-wordpress-china': { fr: 'netk5-wordpress-chine', es: 'netk5-wordpress-china' },
  'snf-china-wordpress': { fr: 'snf-wordpress-chine', es: 'snf-wordpress-china' },
  'techne-wordpress-china': { fr: 'techne-wordpress-chine', es: 'techne-wordpress-china' },
  'vcls-china-website': { fr: 'vcls-site-chine', es: 'vcls-sitio-web-china' },
  'zeinley-bilingual-wordpress': { fr: 'zeinley-wordpress-bilingue', es: 'zeinley-wordpress-bilingue' },
};

/** Content sections: canonical index path paired with its detail-slug map. */
const contentSections = [
  { dir: '/services/', slugs: serviceSlugs },
  { dir: '/work/', slugs: caseStudySlugs },
  { dir: '/resources/china-web-guide/', slugs: guideSlugs },
] as const;

/** Reverse lookups, built once at module load. */
const reverseStatic: Record<Locale, Record<string, string>> = { en: {}, fr: {}, es: {} };
for (const [canonical, t] of Object.entries(staticRoutes)) {
  reverseStatic.fr[t.fr] = canonical;
  reverseStatic.es[t.es] = canonical;
}

function buildReverse(map: Record<string, Trans>): Record<Locale, Record<string, string>> {
  const r: Record<Locale, Record<string, string>> = { en: {}, fr: {}, es: {} };
  for (const [id, t] of Object.entries(map)) {
    r.fr[t.fr] = id;
    r.es[t.es] = id;
  }
  return r;
}
const reverseSlugs: Record<string, Record<Locale, Record<string, string>>> = {
  '/services/': buildReverse(serviceSlugs),
  '/work/': buildReverse(caseStudySlugs),
  '/resources/china-web-guide/': buildReverse(guideSlugs),
};

/** Split a leading /fr or /es locale prefix off a pathname. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const m = pathname.match(/^\/(fr|es)(?=\/|$)/);
  if (m) {
    return { locale: m[1] as Locale, path: pathname.slice(3) || '/' };
  }
  return { locale: 'en', path: pathname || '/' };
}

/**
 * Translate a canonical English path into the localized path for `locale`,
 * including the locale prefix. `path` must be a canonical English path.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  const prefix = `/${locale}`;
  // Already localized: leave untouched.
  if (path === prefix || path.startsWith(`${prefix}/`)) return path;

  // Exact static route.
  const stat = staticRoutes[path];
  if (stat) return prefix + stat[locale];

  // Content detail page: <section dir><english id>/
  for (const section of contentSections) {
    if (path.startsWith(section.dir) && path.length > section.dir.length) {
      const id = path.slice(section.dir.length).replace(/\/$/, '');
      const localizedDir = staticRoutes[section.dir]?.[locale] ?? section.dir;
      const localizedSlug = section.slugs[id]?.[locale] ?? id;
      return prefix + localizedDir + localizedSlug + '/';
    }
  }

  // Home, brand pages, anything else: prefix only.
  return prefix + path;
}

/**
 * Convert a localized path (no locale prefix) in `locale` back to its
 * canonical English path.
 */
export function canonicalizePath(localized: string, locale: Locale): string {
  if (locale === 'en') return localized;

  // Exact static route.
  const stat = reverseStatic[locale][localized];
  if (stat) return stat;

  // Content detail page.
  for (const section of contentSections) {
    const localizedDir = staticRoutes[section.dir]?.[locale] ?? section.dir;
    if (localized.startsWith(localizedDir) && localized.length > localizedDir.length) {
      const slug = localized.slice(localizedDir.length).replace(/\/$/, '');
      const id = reverseSlugs[section.dir][locale][slug] ?? slug;
      return section.dir + id + '/';
    }
  }

  // Home, brand pages, anything else.
  return localized;
}

/** Parse any pathname into its locale and canonical English path. */
export function parsePath(pathname: string): { locale: Locale; canonical: string } {
  const { locale, path } = splitLocale(pathname);
  return { locale, canonical: canonicalizePath(path, locale) };
}

/** All three absolute hreflang URLs for any pathname. */
export function hreflangFor(pathname: string, siteOrigin: string) {
  const { canonical } = parsePath(pathname);
  return {
    en: siteOrigin + localizePath(canonical, 'en'),
    fr: siteOrigin + localizePath(canonical, 'fr'),
    es: siteOrigin + localizePath(canonical, 'es'),
  };
}

/** The equivalent of `pathname` in another locale. */
export function switchLocale(pathname: string, target: Locale): string {
  const { canonical } = parsePath(pathname);
  return localizePath(canonical, target);
}
