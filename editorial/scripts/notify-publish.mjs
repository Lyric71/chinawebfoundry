#!/usr/bin/env node
/**
 * Publish notification for the editorial pipeline. Sends one email through
 * Resend (the same provider the contact form uses) when a piece has been
 * published. No npm dependencies: native fetch, Node 18+.
 *
 * Run from the repo root:
 *
 *   node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>"
 *        [--type guide|guide-en|guide-en-first|report|casestudy|money-page|upgrade|translation]
 *        [--to <email>] [--image /images/guides/<slug>.webp]
 *        [--status published|held] [--build passed|failed] [--check "<result>"]
 *        [--log editorial/logs/YYYY-MM-DD.md]
 *        [--note "<text>"] [--dry-run]
 *
 * There is no --todo option, by rule (editorial/CLAUDE.md, "No run leaves a
 * TODO behind"). A publish email never carries open items: everything a run
 * finds is closed before the publish, or the piece does not publish. Passing
 * --todo (or --open, --followup), or a --note that reads as a TODO or open
 * items list, makes the script refuse to send and exit 2.
 *
 * --status held is for a piece the build or the check stopped: the subject and
 * heading read "Held:" instead of "Published:", and the URLs are labelled as
 * not live. --build and --check are reported on separate lines, so a green
 * build with a failed check does not read as a failed build.
 *
 * Locale URLs are derived from which content files exist for the slug and
 * from the localized slug maps in src/i18n/routes.ts:
 *   guides:      src/content/guides/<slug>.md      -> /resources/china-web-guide/<slug>/
 *                guides-fr                           -> /fr/ressources/guide-web-chine/<fr slug>/
 *                guides-es                           -> /es/recursos/guia-web-china/<es slug>/
 *                guides-de                           -> /de/ressourcen/china-web-leitfaden/<de slug>/
 *   casestudies: src/content/casestudies/<slug>.md  -> /work/<slug>/ (+ /fr/realisations/, /es/proyectos/, /de/referenzen/)
 *   money-page:  /website-in-china/ and its three locale paths from staticRoutes
 *   upgrade / translation: pass --url to name the page(s) touched, one flag per URL
 *
 * RESEND_API_KEY is read from .env.local / .env in the current directory or
 * from the environment. Pass --dry-run to print the email without sending.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.chinawebfoundry.com';
// Resend is in testing mode: it only delivers to the account owner's address.
// Switch to cyril.drouin@gmail.com once a sending domain is verified at
// resend.com/domains and FROM uses that domain.
const DEFAULT_TO = 'cyril.drouin@outlook.com';
const FROM = 'ChinaWebFoundry <onboarding@resend.dev>';

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

// Flags that would carry an open item into the email. Refused outright.
const REFUSED_FLAGS = new Set(['todo', 'todos', 'open', 'open-item', 'open-items', 'followup', 'follow-up']);
// A note that smuggles the same list in. Matched on the note text only.
const OPEN_ITEM_MARKER = /(?<![A-Za-z0-9])(TODO|FIXME|TBD|TKTK)(?![A-Za-z0-9])/;
const OPEN_ITEM_PHRASE = /\bopen items?\b|\bfollow[- ]?ups?\b|\bfor a person\b|\bstill open\b|\bcarried (forward|over)\b|\bphase 2\b/i;
const readsAsOpenItem = (s) => OPEN_ITEM_MARKER.test(s) || OPEN_ITEM_PHRASE.test(s);

function parseArgs(argv) {
  const out = { url: [], refused: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (key === 'dry-run') { out.dryRun = true; continue; }
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) {
      if (REFUSED_FLAGS.has(key)) out.refused.push(`--${key}`); else out[key] = true;
      continue;
    }
    if (REFUSED_FLAGS.has(key)) out.refused.push(`--${key} "${val}"`);
    else if (key === 'url') out.url.push(val);
    else out[key] = val;
    i++;
  }
  return out;
}

/** Pull a localized slug map out of src/i18n/routes.ts without importing TS. */
function slugMap(exportName) {
  const file = path.join('src', 'i18n', 'routes.ts');
  if (!existsSync(file)) return {};
  const src = readFileSync(file, 'utf8');
  const start = src.indexOf(`export const ${exportName}`);
  if (start === -1) return {};
  const end = src.indexOf('};', start);
  const block = src.slice(start, end);
  const map = {};
  for (const m of block.matchAll(/'([^']+)':\s*\{\s*fr:\s*'([^']+)',\s*es:\s*'([^']+)',\s*de:\s*'([^']+)'\s*\}/g)) {
    map[m[1]] = { fr: m[2], es: m[3], de: m[4] };
  }
  return map;
}

/**
 * Git Bash (MSYS) rewrites any argument that starts with "/" into a Windows
 * path under its install root, so "/resources/x/" arrives here as
 * "C:/Program Files/Git/resources/x/". Undo that by finding the MSYS root (the
 * prefix that holds usr/bin) and keeping what follows it. A path given
 * without its leading slash gets one. Anything else stops the send, so a
 * mangled URL never reaches the inbox.
 */
function sitePath(value) {
  const v = String(value).replace(/\\/g, '/');
  if (v.startsWith('http') || v.startsWith('/')) return v;
  if (!/^[A-Za-z]:\//.test(v)) return `/${v}`;
  const parts = v.split('/');
  for (let i = 1; i < parts.length; i++) {
    if (existsSync(`${parts.slice(0, i).join('/')}/usr/bin`)) return `/${parts.slice(i).join('/')}`;
  }
  console.error(`Cannot turn "${value}" into a site path. Pass it without the leading slash, or set MSYS_NO_PATHCONV=1.`);
  process.exit(2);
}

function localeUrls(slug, type, explicit) {
  if (explicit.length) {
    return explicit.map((u) => {
      const p = sitePath(u);
      const lang = p.match(/^(?:https?:\/\/[^/]+)?\/(fr|es|de)\//)?.[1] || 'en';
      return { lang, url: p.startsWith('http') ? p : `${SITE}${p}` };
    });
  }

  if (type === 'money-page') {
    const routes = slugMap('staticRoutes')[`/${slug}/`] || {};
    return [
      { lang: 'en', url: `${SITE}/${slug}/` },
      routes.fr && { lang: 'fr', url: `${SITE}/fr${routes.fr}` },
      routes.es && { lang: 'es', url: `${SITE}/es${routes.es}` },
      routes.de && { lang: 'de', url: `${SITE}/de${routes.de}` },
    ].filter(Boolean);
  }

  if (type === 'casestudy') {
    const loc = slugMap('caseStudySlugs')[slug] || {};
    const map = [
      { lang: 'en', dir: 'casestudies', route: `/work/${slug}/` },
      { lang: 'fr', dir: 'casestudies-fr', route: `/fr/realisations/${loc.fr || slug}/` },
      { lang: 'es', dir: 'casestudies-es', route: `/es/proyectos/${loc.es || slug}/` },
      { lang: 'de', dir: 'casestudies-de', route: `/de/referenzen/${loc.de || slug}/` },
    ];
    return map
      .filter((m) => existsSync(path.join('src', 'content', m.dir, `${slug}.md`)))
      .map((m) => ({ lang: m.lang, url: `${SITE}${m.route}` }));
  }

  // guide, guide-en, guide-en-first, report, translation
  const loc = slugMap('guideSlugs')[slug] || {};
  const map = [
    { lang: 'en', dir: 'guides', route: `/resources/china-web-guide/${slug}/` },
    { lang: 'fr', dir: 'guides-fr', route: `/fr/ressources/guide-web-chine/${loc.fr || slug}/` },
    { lang: 'es', dir: 'guides-es', route: `/es/recursos/guia-web-china/${loc.es || slug}/` },
    { lang: 'de', dir: 'guides-de', route: `/de/ressourcen/china-web-leitfaden/${loc.de || slug}/` },
  ];
  return map
    .filter((m) => existsSync(path.join('src', 'content', m.dir, `${slug}.md`)))
    .map((m) => ({ lang: m.lang, url: `${SITE}${m.route}`, unlocalized: m.lang !== 'en' && !loc[m.lang] }));
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title) {
    console.error('Usage: node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" [options]');
    process.exit(2);
  }
  if (args.refused.length || (args.note && readsAsOpenItem(String(args.note)))) {
    console.error('Refused: a publish email carries no TODO or open items (editorial/CLAUDE.md, "No run leaves a TODO behind").');
    for (const r of args.refused) console.error(`  ${r}`);
    if (args.note && readsAsOpenItem(String(args.note))) console.error(`  --note "${args.note}"`);
    console.error('Close each item in the repo (source it or cut it, fix the live page, correct PLAN.md, set a reviewBy date), or hold the piece, then send without it.');
    process.exit(2);
  }
  const type = args.type || 'guide';
  const held = args.status === 'held';
  const verb = held ? 'Held' : 'Published';
  const urlLabel = held ? 'Pages (not live)' : 'Live URLs';
  const to = args.to || DEFAULT_TO;
  const urls = localeUrls(args.slug, type, args.url);
  const when = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Shanghai', hour12: false });
  const imageDir = type === 'casestudy' ? 'casestudies' : 'guides';
  const image = args.image ? sitePath(args.image) : (type === 'upgrade' || type === 'translation' ? 'none' : `/images/${imageDir}/${args.slug}.webp`);
  const warnings = urls.filter((u) => u.unlocalized).map((u) => `${u.lang} page is live under an English slug: guideSlugs entry missing in src/i18n/routes.ts`);

  const lines = [
    `${verb}: ${args.title}`,
    '',
    `Slug: ${args.slug}`,
    `Type: ${type}`,
    `Time (Shanghai): ${when}`,
    '',
    `${urlLabel}:`,
    ...(urls.length ? urls.map((u) => `  ${u.lang}  ${u.url}`) : ['  none found in src/content for this slug']),
    '',
    `Image: ${image}`,
    `Build: ${args.build || 'not reported'}`,
    `Check: ${args.check || 'not reported'}`,
    `Run log: ${args.log || 'not reported'}`,
  ];
  if (warnings.length) lines.push('', 'Warnings:', ...warnings.map((w) => `  - ${w}`));
  if (args.note) lines.push('', `Note: ${args.note}`);
  const text = lines.join('\n');

  const row = (k, v) => `<tr><td style="padding:8px 0;color:#5C5C5C;width:130px;border-bottom:1px solid #EEE;vertical-align:top;">${k}</td><td style="padding:8px 0;border-bottom:1px solid #EEE;line-height:1.7;">${v}</td></tr>`;
  const html = `
<div style="font-family:Inter,-apple-system,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFFFF;color:#212121;">
  <p style="font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#F25F29;margin:0 0 8px;">Editorial system</p>
  <h1 style="font-size:22px;font-weight:500;line-height:1.25;margin:0 0 24px;font-family:Poppins,Inter,sans-serif;">${verb}: ${esc(args.title)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${row('Slug', esc(args.slug))}
    ${row('Type', esc(type))}
    ${row('Time (Shanghai)', esc(when))}
    ${row(urlLabel, urls.length ? urls.map((u) => `<span style="color:#5C5C5C;">${u.lang}</span> <a href="${u.url}" style="color:#F25F29;text-decoration:none;">${u.url}</a>`).join('<br/>') : 'none found in src/content for this slug')}
    ${row('Image', esc(image))}
    ${row('Build', esc(args.build || 'not reported'))}
    ${row('Check', esc(args.check || 'not reported'))}
    ${row('Run log', esc(args.log || 'not reported'))}
  </table>
  ${warnings.length ? `<p style="font-size:14px;margin:24px 0 8px;color:#B91C1C;">Warnings</p><ul style="font-size:14px;line-height:1.6;margin:0;padding-left:20px;">${warnings.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}
  ${args.note ? `<p style="font-size:14px;line-height:1.6;margin:24px 0 0;">${esc(args.note)}</p>` : ''}
</div>`;

  const payload = { from: FROM, to: [to], subject: `${verb}: ${args.title}`, text, html };

  if (args.dryRun) {
    console.log(text);
    console.log(`\n[dry run] would send to ${to}`);
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY missing. Add it to .env at the repo root.');
    process.exit(1);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`Resend error ${res.status}: ${JSON.stringify(data)}`);
    process.exit(1);
  }
  console.log(`Sent to ${to} (id ${data.id || 'n/a'})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
