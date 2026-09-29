/**
 * Pulls every resource a page actually loads out of its HTML, and records how
 * it loads. Only loading contexts count: a footer link to a YouTube channel is
 * an <a href> and is ignored, a YouTube <iframe> is not. JSON-LD and template
 * scripts are skipped for the same reason.
 */

export type LoadMode =
  | 'blocking-script' // <script src> with no async/defer/module: halts parsing
  | 'async-script'
  | 'stylesheet' // <link rel=stylesheet> or @import: blocks first paint
  | 'deferred-style' // stylesheet with media=print swap, or loaded late
  | 'preload'
  | 'hint' // preconnect / dns-prefetch only
  | 'iframe'
  | 'image'
  | 'media'
  | 'inline-script' // URL referenced inside an inline <script>
  | 'js-file' // URL referenced inside a first-party JS file
  | 'css-file' // url() inside a first-party stylesheet
  | 'marker' // widget markup found, loader not seen directly
  | 'plugin'; // implied by a WordPress plugin path

export interface Occurrence {
  url: string;
  mode: LoadMode;
  /** Path of the scanned page this came from */
  page: string;
  inHead?: boolean;
}

export interface ExtractResult {
  occurrences: Occurrence[];
  /** Same-site script and stylesheet URLs worth fetching for a second pass */
  firstPartyScripts: string[];
  firstPartyStyles: string[];
  /** Same-site links whose path suggests a contact or enquiry form */
  contactLinks: string[];
  plugins: string[];
  theme: string | null;
  htmlLang: string | null;
  hreflangs: string[];
  metas: Record<string, string>;
  /** Visible-ish text, tags stripped, for ICP and language checks */
  text: string;
}

const ATTR_RE = /([^\s=/>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>"']+)))?/g;

export function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  ATTR_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = ATTR_RE.exec(raw)) !== null) {
    const name = m[1].toLowerCase();
    if (!(name in attrs)) attrs[name] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&#0*38;/g, '&')
    .replace(/&#x0*2f;/gi, '/')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;/g, "'");
}

/** Two-level public suffixes common enough to matter for "same site" checks. */
const SECOND_LEVEL = /\.(com|net|org|gov|edu|co|ac|or|ne|go)\.(cn|uk|jp|au|nz|hk|tw|sg|kr|in|br|za|il|th|my|id)$/;

export function siteOf(hostname: string): string {
  const h = hostname.toLowerCase().replace(/\.$/, '');
  const labels = h.split('.');
  const take = SECOND_LEVEL.test(h) ? 3 : 2;
  return labels.slice(-take).join('.');
}

export function isSameSite(a: string, b: string): boolean {
  return siteOf(a) === siteOf(b);
}

function resolveUrl(raw: string, base: URL): URL | null {
  const value = raw.trim();
  if (!value || /^(data|blob|javascript|mailto|tel|about):/i.test(value) || value.startsWith('#')) return null;
  try {
    const u = new URL(value, base);
    return u.protocol === 'http:' || u.protocol === 'https:' ? u : null;
  } catch {
    return null;
  }
}

function firstSrcsetUrl(srcset: string): string[] {
  return srcset
    .split(',')
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean);
}

/** Absolute or protocol-relative URLs inside script or style text. */
const URL_IN_TEXT = /(?:https?:)?\/\/([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d+)?(\/[^\s"'`()<>\\]*)?/gi;

export function urlsInText(text: string): string[] {
  const unescaped = text
    .replace(/\\\//g, '/')
    // Licence banners and doc comments, then "// comment" lines. Code stays.
    .replace(/\/\*[!*\s][\s\S]*?\*\//g, ' ')
    .replace(/(^|[\s;{}])\/\/\s[^\n]*/g, '$1');
  const found = new Set<string>();
  URL_IN_TEXT.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = URL_IN_TEXT.exec(unescaped)) !== null) {
    const host = m[1].toLowerCase();
    // Skip obvious non-hosts: file names like jquery.min.js caught after "//"
    if (!/\.[a-z]{2,}$/.test(host) || /\.(js|css|png|jpe?g|gif|svg|webp|woff2?|json|php|html?)$/.test(host)) continue;
    found.add(`https://${host}${m[2] ?? '/'}`);
  }
  return [...found];
}

const CSS_URL = /@import\s+(?:url\()?\s*["']?([^"')\s;]+)|url\(\s*["']?([^"')]+?)["']?\s*\)/gi;

export function urlsInCss(css: string): { url: string; isImport: boolean }[] {
  const out: { url: string; isImport: boolean }[] = [];
  CSS_URL.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = CSS_URL.exec(css)) !== null) {
    if (m[1]) out.push({ url: m[1], isImport: true });
    else if (m[2]) out.push({ url: m[2], isImport: false });
  }
  return out;
}

const CONTACT_PATH = /\/(contact[a-z-]*|kontakt[a-z-]*|contacto|contato|contactez[a-z-]*|nous-contacter|get-in-touch|enquir[a-z-]*|inquir[a-z-]*|request-a-quote|get-a-quote|quote|book-a-demo|request-a-demo|demo|book-a-call|lianxi[a-z-]*|%e8%81%94%e7%b3%bb[^/]*)(\/|\.html?|$)/i;

export function extract(html: string, pageUrl: string): ExtractResult {
  const base = new URL(pageUrl);
  const page = base.pathname || '/';
  // Comments and <noscript> fallbacks never load for a visitor with JavaScript on
  const cleaned = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<noscript\b[\s\S]*?<\/noscript\s*>/gi, '');
  const headEnd = (() => {
    const i = cleaned.search(/<\/head\s*>/i);
    return i === -1 ? cleaned.length : i;
  })();

  const occurrences: Occurrence[] = [];
  const firstPartyScripts: string[] = [];
  const firstPartyStyles: string[] = [];
  const contactLinks = new Set<string>();
  const hreflangs: string[] = [];
  const metas: Record<string, string> = {};

  const add = (raw: string, mode: LoadMode, index: number) => {
    const u = resolveUrl(raw, base);
    if (!u) return null;
    occurrences.push({ url: u.toString(), mode, page, inHead: index < headEnd });
    return u;
  };

  // Scripts, with their inline bodies
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let m: RegExpExecArray | null;
  while ((m = scriptRe.exec(cleaned)) !== null) {
    const attrs = parseAttrs(m[1]);
    const type = (attrs.type ?? '').toLowerCase();
    if (type && !/javascript|ecmascript|module|^text\/babel$/.test(type)) continue; // JSON-LD, templates
    if (attrs.src) {
      const deferred = 'async' in attrs || 'defer' in attrs || type === 'module';
      const u = add(attrs.src, deferred ? 'async-script' : 'blocking-script', m.index);
      if (u && isSameSite(u.hostname, base.hostname)) firstPartyScripts.push(u.toString());
    } else if (m[2].trim()) {
      for (const url of urlsInText(m[2])) add(url, 'inline-script', m.index);
    }
  }

  // Inline <style> blocks
  const styleRe = /<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi;
  while ((m = styleRe.exec(cleaned)) !== null) {
    for (const { url, isImport } of urlsInCss(m[1])) add(url, isImport ? 'stylesheet' : 'css-file', m.index);
  }

  // Everything else that loads a resource
  const tagRe = /<(link|img|iframe|source|video|audio|embed|object|meta|html|a|div|section|figure|span)\b([^>]*)>/gi;
  while ((m = tagRe.exec(cleaned)) !== null) {
    const tag = m[1].toLowerCase();
    const attrs = parseAttrs(m[2]);
    const at = m.index;

    if (attrs.style && /url\(/i.test(attrs.style)) {
      for (const { url } of urlsInCss(attrs.style)) add(url, 'image', at);
    }

    switch (tag) {
      case 'link': {
        const rel = (attrs.rel ?? '').toLowerCase();
        if (!attrs.href) break;
        if (rel.includes('alternate') && attrs.hreflang) {
          hreflangs.push(attrs.hreflang.toLowerCase());
          break;
        }
        if (rel.includes('stylesheet')) {
          const media = (attrs.media ?? '').toLowerCase();
          const deferred = media === 'print' || 'onload' in attrs || rel.includes('alternate');
          const u = add(attrs.href, deferred ? 'deferred-style' : 'stylesheet', at);
          if (u && isSameSite(u.hostname, base.hostname)) firstPartyStyles.push(u.toString());
        } else if (/preconnect|dns-prefetch/.test(rel)) {
          add(attrs.href, 'hint', at);
        } else if (/preload|modulepreload|prefetch/.test(rel)) {
          add(attrs.href, 'preload', at);
        } else if (/icon|manifest/.test(rel)) {
          add(attrs.href, 'image', at);
        }
        break;
      }
      case 'img':
        for (const key of ['src', 'data-src', 'data-lazy-src', 'data-original']) {
          if (attrs[key]) add(attrs[key], 'image', at);
        }
        for (const key of ['srcset', 'data-srcset', 'data-lazy-srcset']) {
          if (attrs[key]) for (const url of firstSrcsetUrl(attrs[key])) add(url, 'image', at);
        }
        break;
      case 'iframe':
        for (const key of ['src', 'data-src', 'data-lazy-src']) {
          if (attrs[key]) add(attrs[key], 'iframe', at);
        }
        break;
      case 'source':
        if (attrs.src) add(attrs.src, 'media', at);
        if (attrs.srcset) for (const url of firstSrcsetUrl(attrs.srcset)) add(url, 'image', at);
        break;
      case 'video':
      case 'audio':
        if (attrs.src) add(attrs.src, 'media', at);
        if (attrs.poster) add(attrs.poster, 'image', at);
        break;
      case 'embed':
        if (attrs.src) add(attrs.src, 'media', at);
        break;
      case 'object':
        if (attrs.data) add(attrs.data, 'media', at);
        break;
      case 'meta': {
        const key = (attrs.name ?? attrs.property ?? attrs['http-equiv'] ?? '').toLowerCase();
        if (key && attrs.content !== undefined && !(key in metas)) metas[key] = attrs.content;
        break;
      }
      case 'html':
        if (attrs.lang) metas['html:lang'] = attrs.lang.toLowerCase();
        break;
      case 'a': {
        const u = attrs.href ? resolveUrl(attrs.href, base) : null;
        if (u && u.hostname === base.hostname && u.pathname !== page && CONTACT_PATH.test(u.pathname)) {
          u.hash = '';
          contactLinks.add(u.toString());
        }
        break;
      }
      default:
        // Lazy-loaded background images and video facades on generic containers
        for (const key of ['data-bg', 'data-background', 'data-src']) {
          if (attrs[key] && /^(https?:)?\/\//.test(attrs[key])) add(attrs[key], 'image', at);
        }
    }
  }

  const plugins = new Set<string>();
  const pluginRe = /\/wp-content\/plugins\/([a-z0-9_-]+)\//gi;
  while ((m = pluginRe.exec(cleaned)) !== null) plugins.add(m[1].toLowerCase());
  const theme = cleaned.match(/\/wp-content\/themes\/([a-z0-9_-]+)\//i)?.[1]?.toLowerCase() ?? null;

  const text = cleaned
    .replace(/<script\b[\s\S]*?<\/script\s*>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style\s*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');

  return {
    occurrences,
    firstPartyScripts: [...new Set(firstPartyScripts)],
    firstPartyStyles: [...new Set(firstPartyStyles)],
    // Shortest paths first: /contact/ beats /blog/best-contact-form-plugins/
    contactLinks: [...contactLinks].sort((a, b) => new URL(a).pathname.length - new URL(b).pathname.length),
    plugins: [...plugins],
    theme,
    htmlLang: metas['html:lang'] ?? null,
    hreflangs,
    metas,
    text,
  };
}
