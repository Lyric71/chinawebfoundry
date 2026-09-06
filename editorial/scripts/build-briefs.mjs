#!/usr/bin/env node
/**
 * Generates editorial/briefs/*.md and editorial/schedule.csv from
 * editorial/PLAN.md (the China content program, v3.0).
 *
 * The plan already contains every brief. This script slices each one out
 * verbatim, prepends a machine-readable header, and lays the 78 pieces onto
 * the 26-week calendar in section 12 of the plan. Rerun it whenever PLAN.md
 * changes. It never overwrites schedule.csv status columns: existing rows keep
 * their status and dates, matched on brief_id.
 *
 *   node editorial/scripts/build-briefs.mjs            # write briefs + schedule
 *   node editorial/scripts/build-briefs.mjs --check    # report only, write nothing
 *
 * Calendar: week 1 starts Tuesday 8 September 2026 (the plan's start date).
 * Slot 1 (substantial) Tuesday, slot 2 (fast) Thursday, slot 3 (upgrade or
 * report) Friday. Monday is review and publish day for the previous week's
 * leftovers. Week 26 ends Friday 5 March 2027.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const PLAN = path.join(root, 'PLAN.md');
const BRIEFS = path.join(root, 'briefs');
const SCHEDULE = path.join(root, 'schedule.csv');
const check = process.argv.includes('--check');

const plan = readFileSync(PLAN, 'utf8').split(/\r?\n/);

/* ------------------------------------------------------------------ */
/* The 78 pieces, keyed by the plan's own IDs                          */
/* ------------------------------------------------------------------ */

// type drives where the publish step writes:
//   guide          guides collection, all four locales in one commit (T1)
//   money-page     src/pages/website-in-china.astro and the three locale pages (M1)
//   guide-en       guides collection, English only, never translated (T2)
//   casestudy      casestudies collection, English first (T3)
//   report         guides collection, English only, dated slug (T4)
//   guide-en-first guides collection, English first, translated on evidence (T5)
//   upgrade        edit to an existing page, zero new URLs (T6)
//   translation    deep-translate of an earned page into fr, es, de (T7)
//   reserve        empty slot, absorbs a slip
const PIECES = {
  M1:  { title: 'Websites in China for Global Brands', slug: 'website-in-china', type: 'money-page', category: 'Technology', heading: /^#### M1\./ },
  A3:  { title: 'WordPress Plugins That Break in China', slug: 'wordpress-plugins-china', type: 'guide', category: 'Technology', heading: /^#### A3\./ },
  A4:  { title: 'Why wp-admin Is Slow in China', slug: 'wp-admin-slow-china', type: 'guide', category: 'Technology', heading: /^#### A4\./ },
  A5:  { title: 'Migrating a WordPress Site Into China', slug: 'migrate-wordpress-to-china', type: 'guide', category: 'Hosting', heading: /^#### A5\./ },
  A6:  { title: 'ICP Filing for a WordPress Site', slug: 'wordpress-icp-filing', type: 'guide', category: 'Legal', heading: /^#### A6\./ },
  A7:  { title: 'Elementor, Divi and Gutenberg in China', slug: 'page-builders-china', type: 'guide', category: 'Technology', heading: /^#### A7\./ },
  A8:  { title: 'Chinese-Language WordPress, Done Right', slug: 'wordpress-multilingual-china', type: 'guide', category: 'Content', heading: /^#### A8\./ },
  A9:  { title: 'Why Your WordPress Site Is Slow in China', slug: 'wordpress-speed-china', type: 'guide', category: 'Technology', heading: /^#### A9\./ },
  A10: { title: 'Baidu SEO for a WordPress Site', slug: 'wordpress-baidu-seo', type: 'guide', category: 'Search', heading: /^#### A10\./ },
  A11: { title: 'WordPress or Astro for a China Site', slug: 'wordpress-vs-astro-china', type: 'guide', category: 'Technology', heading: /^#### A11\./ },
  A12: { title: 'WordPress Security on a Mainland Server', slug: 'wordpress-security-china', type: 'guide', category: 'Technology', heading: /^#### A12\./ },
  B2:  { title: 'What a China Website Actually Costs', slug: 'china-website-cost', type: 'guide', category: 'Technology', heading: /^#### B2\./ },
  B3:  { title: 'How Long a China Website Takes', slug: 'china-website-timeline', type: 'guide', category: 'Technology', heading: /^#### B3\./ },
  B4:  { title: 'Can Your Global Agency Build Your China Site?', slug: 'global-agency-china-website', type: 'guide', category: 'Technology', heading: /^#### B4\./ },
  B5:  { title: 'The China Website Brief: A Checklist', slug: 'china-website-brief-checklist', type: 'guide', category: 'Technology', heading: /^#### B5\./ },
  B6:  { title: 'The China Web Agency Landscape, 2026', slug: 'china-web-agency-landscape-2026', type: 'guide', category: 'Technology', heading: /^#### B6\./ },
  'T2-01': { title: 'Google Fonts in China: It Depends Where You Are', slug: 'google-fonts-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-01 / },
  'T2-02': { title: 'HubSpot in China: What Works and What Does Not', slug: 'hubspot-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-02 / },
  'T2-03': { title: 'reCAPTCHA in China: Your Forms Are Dead', slug: 'recaptcha-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-03 / },
  'T2-04': { title: 'Cloudflare in China: The Part Nobody Mentions', slug: 'cloudflare-china', type: 'guide-en', category: 'Hosting', heading: /^#### T2-04 / },
  'T2-05': { title: 'Which JavaScript CDNs Work in China', slug: 'javascript-cdn-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-05 / },
  'T2-06': { title: 'Does Shopify Work in China?', slug: 'shopify-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-06 / },
  'T2-07': { title: 'Video Embeds That Work in China', slug: 'video-embeds-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-07 / },
  'T2-08': { title: 'Embedded Forms That Fail Silently in China', slug: 'form-embeds-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-08 / },
  'T2-09': { title: 'Maps in China: Licensing Before Firewall', slug: 'maps-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-09 / },
  'T2-10': { title: 'Vercel and Netlify From Mainland China', slug: 'vercel-netlify-china', type: 'guide-en', category: 'Hosting', heading: /^#### T2-10 / },
  'T2-11': { title: 'Does Webflow Work in China? We Measured', slug: 'webflow-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-11\./ },
  'T2-12': { title: 'Squarespace and Wix in China, Measured', slug: 'squarespace-wix-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-12\./ },
  'T2-13': { title: 'Chat Widgets in China: Intercom to Crisp', slug: 'chat-widgets-china', type: 'guide-en', category: 'Technology', heading: /^#### T2-13\./ },
  'T2-14': { title: 'Cookie Consent Banners in China', slug: 'cookie-consent-china', type: 'guide-en', category: 'Legal', heading: /^#### T2-14\./ },
  'T3-01': { title: 'Moving a French Software Site Into China', slug: 'bassetti-wordpress-china', type: 'casestudy', category: '', heading: /^#### T3-01\./ },
  'T3-02': { title: 'Hosting a Chemicals Group in Mainland China', slug: 'snf-china-wordpress', type: 'casestudy', category: '', heading: /^#### T3-02\./ },
  'T3-03': { title: 'WooCommerce Checkout in China, Rebuilt', slug: 'imhof-woocommerce-china', type: 'casestudy', category: '', heading: /^#### T3-03\./ },
  'T3-04': { title: 'A Bilingual Site That Baidu Could Read', slug: 'zeinley-bilingual-wordpress', type: 'casestudy', category: '', heading: /^#### T3-04\./ },
  'T3-05': { title: 'Rebuilding a Search Index Inside China', slug: 'compass-china-database-platform', type: 'casestudy', category: '', heading: /^#### T3-05\./ },
  'T3-06': { title: 'Baidu Indexing for an Industrial Supplier', slug: 'industrial-machinery-baidu-seo-china', type: 'casestudy', category: '', heading: /^#### T3-06\./ },
  'T3-07': { title: 'ICP Filing for a Medical Device Firm', slug: 'medical-device-icp-filing-china', type: 'casestudy', category: '', heading: /^#### T3-07\./ },
  'T3-08': { title: 'Redesigning a Luxury Site for China', slug: 'luxury-brand-china-ux-redesign', type: 'casestudy', category: '', heading: /^#### T3-08\./ },
  'T3-09': { title: 'Getting Cited by Chinese AI Assistants', slug: 'b2b-services-geo-china-ai-search', type: 'casestudy', category: '', heading: /^#### T3-09\./ },
  'T3-10': { title: 'Two Years of Maintenance in China', slug: 'school-group-china-maintenance-retainer', type: 'casestudy', category: '', heading: /^#### T3-10\./ },
  'T4-01': { title: 'China Dependency Index, October 2026', slug: 'china-dependency-index-2026-10', type: 'report', category: 'Technology', heading: /^#### T4-01\./ },
  'T4-02': { title: 'Why China Latency Tests Disagree', slug: 'china-latency-vantage-point-study', type: 'report', category: 'Technology', heading: /^#### T4-02\./ },
  'T4-03': { title: 'China Dependency Index, November 2026', slug: 'china-dependency-index-2026-11', type: 'report', category: 'Technology', heading: /^#### T4-03\./ },
  'T4-04': { title: 'China Dependency Index, December 2026', slug: 'china-dependency-index-2026-12', type: 'report', category: 'Technology', heading: /^#### T4-04\./ },
  'T4-05': { title: 'How Foreign Sites Load in China', slug: 'foreign-site-load-study-china-2026', type: 'report', category: 'Technology', heading: /^#### T4-05\./ },
  'T4-06': { title: 'China Dependency Index, January 2027', slug: 'china-dependency-index-2027-01', type: 'report', category: 'Technology', heading: /^#### T4-06\./ },
  'T5-01': { title: 'Accepting Payments on a China Website', slug: 'china-payments-website', type: 'guide-en-first', category: 'Technology', heading: /^#### T5-01\./ },
  'T5-02': { title: 'The China Analytics Stack After GA4', slug: 'china-analytics-stack', type: 'guide-en-first', category: 'Technology', heading: /^#### T5-02\./ },
  'T5-03': { title: 'WeChat and Your China Website', slug: 'wechat-website-integration', type: 'guide-en-first', category: 'Technology', heading: /^#### T5-03\./ },
  'T5-04': { title: 'What China Website Maintenance Covers', slug: 'china-website-maintenance', type: 'guide-en-first', category: 'Hosting', heading: /^#### T5-04\./ },
  'T5-05': { title: 'Baidu vs Google: Technical Differences', slug: 'baidu-vs-google-technical-seo', type: 'guide-en-first', category: 'Search', heading: /^#### T5-05\./ },
  'T5-06': { title: 'Running an English and Chinese Site', slug: 'china-bilingual-content-ops', type: 'guide-en-first', category: 'Content', heading: /^#### T5-06\./ },
  'T5-07': { title: 'Mobile and Browsers in China', slug: 'china-website-accessibility-mobile', type: 'guide-en-first', category: 'Design', heading: /^#### T5-07\./ },
  'T5-08': { title: 'The China Website Pre-Launch Checklist', slug: 'foreign-brand-china-web-checklist', type: 'guide-en-first', category: 'Technology', heading: /^#### T5-08\./ },
  'T6-01': { title: 'Strip the guide title suffix at the template level', slug: 'upgrade-guide-title-suffix', type: 'upgrade', category: '', heading: /^#### T6-01\./ },
  'T6-02': { title: 'Correct the Google Fonts claim in is-wordpress-blocked-in-china', slug: 'upgrade-is-wordpress-blocked-in-china', type: 'upgrade', category: '', heading: /^#### T6-02\./ },
  'T6-03': { title: 'Add harness numbers to wordpress-hosting-china', slug: 'upgrade-wordpress-hosting-china', type: 'upgrade', category: '', heading: /^#### T6-03\./ },
  'T6-04': { title: 'FAQ schema and comparison table for choosing-web-agency-china', slug: 'upgrade-choosing-web-agency-china', type: 'upgrade', category: '', heading: /^#### T6-04\./ },
  'T6-05': { title: 'Upgrade google-analytics-china with F34', slug: 'upgrade-google-analytics-china', type: 'upgrade', category: '', heading: /^#### T6-05\./ },
  'T6-06': { title: 'Attach the dependency table to great-firewall-what-it-blocks', slug: 'upgrade-great-firewall-what-it-blocks', type: 'upgrade', category: '', heading: /^#### T6-06\./ },
  'T6-07': { title: 'Audit the two hosting guides, differentiate or consolidate', slug: 'upgrade-hosting-guides-consolidation', type: 'upgrade', category: '', heading: /^#### T6-07\./ },
  'T6-08': { title: 'Measurement block and FAQ schema for /wordpress-in-china/', slug: 'upgrade-wordpress-in-china-page', type: 'upgrade', category: '', heading: /^#### T6-08\./ },
  'T6-09': { title: 'FAQ schema and hard numbers on the two agency money pages', slug: 'upgrade-agency-money-pages', type: 'upgrade', category: '', heading: /^#### T6-09\./ },
  'T6-10': { title: 'Add F15 and F16 to baiduspider-firewall', slug: 'upgrade-baiduspider-firewall', type: 'upgrade', category: '', heading: /^#### T6-10\./ },
};

for (let i = 1; i <= 14; i++) {
  const id = `T7-${String(i).padStart(2, '0')}`;
  PIECES[id] = { title: `Translation batch ${i}`, slug: `translation-batch-${String(i).padStart(2, '0')}`, type: 'translation', category: '', heading: null };
}
for (let i = 1; i <= 3; i++) {
  PIECES[`R${i}`] = { title: `Reserve slot ${i}`, slug: `reserve-${i}`, type: 'reserve', category: '', heading: null };
}

/* Section 12 of the plan, one row per week: [slot1, slot2, slot3]. */
const CALENDAR = [
  ['M1', 'T6-01', 'T6-02'],
  ['A3', 'T2-01', 'T6-05'],
  ['A9', 'T2-05', 'T6-06'],
  ['A5', 'T3-01', 'T6-03'],
  ['B5', 'T2-03', 'T6-10'],
  ['A4', 'T3-02', 'T4-01'],
  ['A6', 'T2-02', 'T6-04'],
  ['B3', 'T3-03', 'T6-08'],
  ['A7', 'T2-04', 'T6-09'],
  ['A11', 'T3-04', 'T4-02'],
  ['T5-01', 'T2-08', 'T6-07'],
  ['B4', 'T3-05', 'T7-01'],
  ['A10', 'T2-07', 'T4-03'],
  ['T5-02', 'T3-06', 'T7-02'],
  ['A8', 'T2-06', 'T7-03'],
  ['T5-05', 'T3-07', 'T4-04'],
  ['A12', 'T2-09', 'T7-04'],
  ['T5-03', 'T3-08', 'T7-05'],
  ['B2', 'T2-10', 'T7-06'],
  ['T5-04', 'T3-09', 'T4-05'],
  ['T5-06', 'T2-11', 'T7-07'],
  ['T5-07', 'T3-10', 'T7-08'],
  ['B6', 'T2-12', 'T4-06'],
  ['T5-08', 'T2-13', 'T7-09'],
  ['R1', 'T2-14', 'T7-10'],
  ['R2', 'R3', 'T7-11'], // week 26 slot 3 carries batches 11 to 14 in one entry
];

const SLOT_JOB = ['substantial', 'fast', 'upgrade or report'];
const SLOT_OFFSET = [0, 2, 3]; // Tue, Thu, Fri from the Tuesday that opens the week
const WEEK1 = new Date(Date.UTC(2026, 8, 8)); // Tuesday 8 September 2026

function isoDate(d) { return d.toISOString().slice(0, 10); }
function weekday(d) { return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getUTCDay()]; }

/* ------------------------------------------------------------------ */
/* Slice each brief out of the plan                                   */
/* ------------------------------------------------------------------ */

function sliceBrief(re) {
  const start = plan.findIndex((l) => re.test(l));
  if (start === -1) return null;
  let end = plan.length;
  for (let i = start + 1; i < plan.length; i++) {
    if (/^#### |^### |^## /.test(plan[i])) { end = i; break; }
  }
  // Trim trailing separator lines.
  const lines = plan.slice(start, end);
  while (lines.length && /^(---)?\s*$/.test(lines[lines.length - 1])) lines.pop();
  return lines.join('\n');
}

function sliceSection(startRe, endRe) {
  const s = plan.findIndex((l) => startRe.test(l));
  if (s === -1) return '';
  let e = plan.length;
  for (let i = s + 1; i < plan.length; i++) if (endRe.test(plan[i])) { e = i; break; }
  const lines = plan.slice(s, e);
  while (lines.length && /^(---)?\s*$/.test(lines[lines.length - 1])) lines.pop();
  return lines.join('\n').trim();
}

const T7_RULES = sliceSection(/^## 11\. T7/, /^## 12\./);
const T3_TEMPLATE = sliceSection(/^### Shared case study template/, /^#### T3-01/);
const T2_RULES = sliceSection(/^### The selection rule/, /^### Batch 1/);
const T2_STRUCTURE = sliceSection(/^### Structure rule/, /^### Batch 1/);
const T4_RULES = sliceSection(/^## 8\. T4/, /^#### T4-01/);
const T6_RULES = sliceSection(/^## 10\. T6/, /^#### T6-01/);

const TIER_NOTES = {
  'guide': 'T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.',
  'money-page': 'The money page. Not a guide article. Copy ships into `src/pages/website-in-china.astro` and the three locale pages already reserved by Move 1 (`/fr/site-web-en-chine/`, `/es/sitio-web-en-china/`, `/de/website-in-china/`). Remove `noindex` and the sitemap exclusion in the same commit. FAQ schema required. No pricing. The three locale pages go through `/deep-translate`, main conversation, no subagent, three passes each, FR then ES then DE.',
  'guide-en': 'T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.',
  'casestudy': 'T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.',
  'report': 'T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.',
  'guide-en-first': 'T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.',
  'upgrade': 'T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.',
  'translation': 'T7 translation slot. A budget, not a schedule. On this date, review the queue: pages published 90 or more days ago that have earned it (organic entries, an attributed inquiry, an observed AI citation). Pick one or leave the slot unspent and say so in the log. Translate fr, es and de together or not at all. Nothing in T2 is ever translated. Run `/deep-translate`, all three passes, per locale, FR then ES then DE, interactively in the main conversation, never a subagent, one pass at a time, none skipped or merged.',
  'reserve': 'Reserve slot. Absorbs a slip, a rerun of a measurement, or a refresh pass. Not a licence to add a 79th piece. Leave unspent unless something has slipped.',
};

/* ------------------------------------------------------------------ */
/* Build rows and brief files                                         */
/* ------------------------------------------------------------------ */

const existing = new Map();
if (existsSync(SCHEDULE)) {
  const [head, ...rows] = readFileSync(SCHEDULE, 'utf8').split(/\r?\n/).filter(Boolean);
  const cols = parseCsvLine(head);
  for (const r of rows) {
    const vals = parseCsvLine(r);
    const obj = Object.fromEntries(cols.map((c, i) => [c, vals[i] ?? '']));
    existing.set(obj.brief_id, obj);
  }
}

const HEADER = ['publish_date', 'weekday', 'week', 'slot', 'slot_job', 'brief_id', 'tier', 'content_type', 'slug', 'title', 'brief_file', 'output_file', 'locales_at_publish', 'gate', 'status', 'drafted_on', 'quality_passed_on', 'image_generated_on', 'published_on', 'reviewed_by', 'notes'];

const rows = [];
const briefFiles = [];

for (let w = 0; w < CALENDAR.length; w++) {
  for (let s = 0; s < 3; s++) {
    const id = CALENDAR[w][s];
    const p = PIECES[id];
    if (!p) throw new Error(`Unknown piece ${id}`);
    const date = new Date(WEEK1.getTime() + (w * 7 + SLOT_OFFSET[s]) * 86400000);
    const publish = isoDate(date);
    const week = String(w + 1).padStart(2, '0');
    const tier = id.startsWith('T') ? id.slice(0, 2) : id === 'M1' ? 'T1' : id.startsWith('R') ? 'reserve' : 'T1';
    const briefFile = `briefs/${publish}-${p.slug}.md`;
    const outputFile = p.type === 'reserve' ? '' : `output/${p.slug}.md`;
    const gate = (p.type === 'guide-en' || p.type === 'report') ? 'harness'
      : p.type === 'translation' ? 'evidence, day 90'
      : id === 'B2' ? 'pricing decision (open item 3)'
      : id === 'T3-01' || id === 'T3-02' || id === 'T3-03' ? 'client sign-off'
      : '';
    const locales = p.type === 'guide' || p.type === 'money-page' ? 'en fr es de'
      : p.type === 'upgrade' ? 'as the page exists'
      : p.type === 'translation' ? 'fr es de'
      : p.type === 'reserve' ? '' : 'en';

    const prev = existing.get(id) || {};
    const status = prev.status || (p.type === 'reserve' ? 'reserve' : 'not_started');

    rows.push({
      publish_date: publish, weekday: weekday(date), week, slot: String(s + 1), slot_job: SLOT_JOB[s],
      brief_id: id, tier, content_type: p.type, slug: p.slug, title: p.title,
      brief_file: briefFile, output_file: outputFile, locales_at_publish: locales, gate,
      status, drafted_on: prev.drafted_on || '', quality_passed_on: prev.quality_passed_on || '',
      image_generated_on: prev.image_generated_on || '', published_on: prev.published_on || '',
      reviewed_by: prev.reviewed_by || '', notes: prev.notes || '',
    });

    // Brief body
    let body;
    if (p.heading) {
      body = sliceBrief(p.heading);
      if (!body) throw new Error(`Brief text for ${id} not found in PLAN.md`);
    } else if (p.type === 'translation') {
      const n = Number(id.slice(3));
      body = `#### ${id}. Translation batch ${n}${n === 11 ? ' (this slot carries batches 11 to 14)' : ''}\n\nNo page is named in advance. On this date, review the translation queue and spend the slot on evidence, or leave it unspent and log why.\n\n${T7_RULES}`;
    } else {
      body = `#### ${id}. Reserve slot\n\nDeliberately empty. From PLAN.md section 12: "Something will slip, a measurement will need rerunning, and a plan with no slack is a plan that ships something thin to hit a date." If a reserve slot goes unused, it absorbs a slip rather than adding a piece.`;
    }

    const facts = [...new Set((body.match(/\bF\d{1,2}\b/g) || []))].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

    let extra = '';
    if (p.type === 'casestudy') extra = `\n\n## Shared case study template (from PLAN.md section 7)\n\n${T3_TEMPLATE}`;
    if (p.type === 'guide-en') extra = `\n\n## T2 rules (from PLAN.md section 6)\n\n${T2_RULES}\n\n${T2_STRUCTURE}`;
    if (p.type === 'report') extra = `\n\n## T4 rules (from PLAN.md section 8)\n\n${T4_RULES}`;
    if (p.type === 'upgrade') extra = `\n\n## T6 rules (from PLAN.md section 10)\n\n${T6_RULES}`;

    const fm = [
      '---',
      `brief_id: ${id}`,
      `tier: ${tier}`,
      `content_type: ${p.type}`,
      `publish_date: ${publish}`,
      `week: ${week}`,
      `slot: ${s + 1}`,
      `slot_job: ${SLOT_JOB[s]}`,
      `slug: ${p.slug}`,
      `title: "${p.title.replace(/"/g, '\\"')}"`,
      p.category ? `suggested_category: ${p.category}` : null,
      `locales_at_publish: ${locales || 'none'}`,
      gate ? `gate: "${gate}"` : null,
      facts.length ? `facts: [${facts.join(', ')}]` : null,
      `status: ${status}`,
      '---',
    ].filter(Boolean).join('\n');

    const inputs = p.type === 'reserve' ? '' : `
## How to run this brief

Read \`../CLAUDE.md\` and \`../SPEC.md\` first. They override any conflicting
rule inside the skills. Then read every fact ID listed above in
\`../sources/fact-bank.md\`, and the Do Not Assert list at the end of it.

| Input | Value |
|---|---|
| website | https://www.chinawebfoundry.com |
| audience | people out of China |
| brief | this file |
| output | \`../${outputFile || 'n/a'}\` |

**Tier rule.** ${TIER_NOTES[p.type]}

**Quality gate, every piece.** After \`/createarticle\`, run \`/content-quality-us\`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
\`quality_passed_on\` date, no \`image_ready\`, no publish.

Definition of done: the per-piece acceptance list in \`../SPEC.md\`, plus the
tier-specific boxes for ${tier}.

---

## Brief, verbatim from PLAN.md
`;

    const content = `${fm}\n${inputs}\n${body}${extra}\n`;
    briefFiles.push({ file: path.join(root, briefFile), content });
  }
}

/* ------------------------------------------------------------------ */
/* Write                                                              */
/* ------------------------------------------------------------------ */

function csvCell(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function parseCsvLine(line) {
  const out = []; let cur = ''; let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const csv = [HEADER.join(','), ...rows.map((r) => HEADER.map((h) => csvCell(r[h])).join(','))].join('\n') + '\n';

if (check) {
  console.log(`${rows.length} rows, ${briefFiles.length} briefs. Nothing written.`);
  for (const r of rows) console.log(`${r.publish_date} ${r.weekday} w${r.week} s${r.slot} ${r.brief_id.padEnd(6)} ${r.content_type.padEnd(15)} ${r.slug}`);
  process.exit(0);
}

mkdirSync(BRIEFS, { recursive: true });
// Remove generated briefs that no longer map to a calendar slot (renamed slug or date).
const keep = new Set(briefFiles.map((b) => path.basename(b.file)));
for (const f of readdirSync(BRIEFS)) if (f.endsWith('.md') && !keep.has(f)) unlinkSync(path.join(BRIEFS, f));
for (const b of briefFiles) writeFileSync(b.file, b.content, 'utf8');
writeFileSync(SCHEDULE, csv, 'utf8');
console.log(`Wrote ${briefFiles.length} briefs to editorial/briefs/ and ${rows.length} rows to editorial/schedule.csv`);
