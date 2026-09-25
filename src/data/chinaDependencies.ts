import type { Locale } from '../i18n/ui';

/**
 * Third-party dependencies measured or verdicted from inside mainland China.
 * One record per host. Single source of truth for every figure, date and
 * verdict shown in the dependency table, wherever it appears:
 *
 * - `src/components/pages/DependencyTable.astro` renders it on .astro pages.
 * - `editorial/scripts/build-dependency-table.mjs` writes it as markdown into
 *   the four `great-firewall-what-it-blocks` guide files, between the
 *   `BEGIN DEPENDENCY TABLE` and `END DEPENDENCY TABLE` markers.
 *
 * Edit a row here, then rerun the script. Never hand-edit the generated rows
 * in a guide file, or the locales drift apart.
 *
 * Sources: editorial/sources/verified-sources.md, entries of 17 and 22
 * September 2026 (T6-05 and T6-06), both checks logged there. Every row was
 * last checked against its source on `lastCheckedOn`. Recheck any row whose
 * test date is more than ninety days old at `reviewBy`.
 */

export type Verdict =
  | 'reachable'
  | 'slow'
  | 'answersThenStalls'
  | 'intermittent'
  | 'blocked'
  | 'splitsByVantage'
  | 'untested';

export type Category =
  | 'analytics'
  | 'formsAndChat'
  | 'embeds'
  | 'maps'
  | 'platforms'
  | 'infrastructure'
  | 'payments';

export type SourceKey = 'GreatFire' | '21YunBox';

/** Named probes. A GreatFire reachability verdict has none. */
export type Vantage = 'zhangjiakou' | 'beijingMobile';

export interface Citation {
  source: SourceKey;
  url: string;
  /** ISO dates the source states, never the date we read it. */
  testedOn: string[];
}

export interface DependencyRow {
  /** Stable key. Also the lookup key for localized service and measured text. */
  id: string;
  category: Category;
  /** Null where the source names the vendor site, or nobody has probed it. */
  host: string | null;
  /** Why `host` is null. */
  hostNote?: 'vendorSite' | 'notProbed';
  verdict: Verdict;
  /**
   * `reachabilityOnly` and `noTest` render a shared localized phrase. `text`
   * renders `copy[locale].measured[id]`. Completions are "n of m", never a
   * percentage of three attempts.
   */
  measured: 'reachabilityOnly' | 'noTest' | 'text';
  /** True when the only verdict on record is about six months old. */
  stale?: boolean;
  /** Empty for a reachability verdict. */
  vantage: Vantage[];
  /** Empty for an untested row, which carries `sourceNote` instead. */
  citations: Citation[];
  sourceNote?: 'neverTestedByGreatFire' | 'owedByHarness';
}

export const lastCheckedOn = '2026-09-22';
export const reviewBy = '2026-12-21';

export const categoryOrder: Category[] = [
  'analytics',
  'formsAndChat',
  'embeds',
  'maps',
  'platforms',
  'infrastructure',
  'payments',
];

const gf = (host: string, ...testedOn: string[]): Citation => ({
  source: 'GreatFire',
  url: `https://en.greatfire.org/https/${host}`,
  testedOn,
});

const yb = (page: string, ...testedOn: string[]): Citation => ({
  source: '21YunBox',
  url: `https://www.21cloudbox.com/support/${page}-china.html`,
  testedOn,
});

const ybStudy = (...testedOn: string[]): Citation => ({
  source: '21YunBox',
  url: 'https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html',
  testedOn,
});

const untested = (
  id: string,
  category: Category,
  host: string | null,
  sourceNote: DependencyRow['sourceNote'] = 'owedByHarness',
): DependencyRow => ({
  id,
  category,
  host,
  ...(host ? {} : { hostNote: 'notProbed' as const }),
  verdict: 'untested',
  measured: 'noTest',
  vantage: [],
  citations: [],
  sourceNote,
});

export const dependencies: DependencyRow[] = [
  // Analytics
  { id: 'google-analytics', category: 'analytics', host: 'www.google-analytics.com', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('www.google-analytics.com', '2026-07-24')] },
  { id: 'google-tag-manager', category: 'analytics', host: 'www.googletagmanager.com', verdict: 'splitsByVantage', measured: 'text', vantage: ['zhangjiakou', 'beijingMobile'], citations: [ybStudy('2026-08-28', '2026-08-30')] },
  { id: 'meta-pixel', category: 'analytics', host: 'connect.facebook.net', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('connect.facebook.net', '2026-05-27')] },
  { id: 'hotjar', category: 'analytics', host: 'static.hotjar.com', verdict: 'intermittent', measured: 'text', vantage: ['zhangjiakou'], citations: [gf('static.hotjar.com', '2026-08-18'), yb('hotjar', '2026-08-30')] },
  { id: 'amplitude-script', category: 'analytics', host: 'cdn.amplitude.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('cdn.amplitude.com', '2026-09-14')] },
  { id: 'amplitude-events', category: 'analytics', host: 'api.amplitude.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('api.amplitude.com', '2026-09-10')] },
  { id: 'microsoft-clarity', category: 'analytics', host: 'www.clarity.ms', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('microsoft-clarity', '2026-08-28'), gf('www.clarity.ms', '2026-09-15')] },
  { id: 'mixpanel', category: 'analytics', host: 'api.mixpanel.com', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('mixpanel', '2026-08-28')] },
  { id: 'segment', category: 'analytics', host: null, hostNote: 'vendorSite', verdict: 'slow', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('segment', '2026-08-28', '2026-08-30')] },
  { id: 'plausible', category: 'analytics', host: null, hostNote: 'vendorSite', verdict: 'slow', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('plausible', '2026-08-28')] },
  { id: 'matomo', category: 'analytics', host: null, hostNote: 'vendorSite', verdict: 'slow', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('matomo', '2026-08-29')] },

  // Forms and chat
  { id: 'typeform', category: 'formsAndChat', host: null, hostNote: 'vendorSite', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('typeform', '2026-08-28')] },
  { id: 'mailchimp', category: 'formsAndChat', host: 'cdn-images.mailchimp.com', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('mailchimp', '2026-08-28'), gf('cdn-images.mailchimp.com', '2026-09-10')] },
  { id: 'hcaptcha', category: 'formsAndChat', host: 'api2.hcaptcha.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('api2.hcaptcha.com', '2026-09-14')] },
  { id: 'calendly', category: 'formsAndChat', host: 'calendly.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('calendly.com', '2026-06-10')] },
  { id: 'intercom', category: 'formsAndChat', host: 'widget.intercom.io', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('widget.intercom.io', '2026-06-16')] },
  { id: 'zendesk', category: 'formsAndChat', host: 'static.zdassets.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('static.zdassets.com', '2026-04-29')] },
  untested('drift', 'formsAndChat', 'js.driftt.com', 'neverTestedByGreatFire'),
  untested('crisp', 'formsAndChat', null),
  untested('tawk-to', 'formsAndChat', null),

  // Embeds
  { id: 'disqus', category: 'embeds', host: 'disqus.com', verdict: 'blocked', measured: 'text', vantage: [], citations: [gf('disqus.com', '2026-09-13')] },
  { id: 'soundcloud', category: 'embeds', host: 'w.soundcloud.com', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('w.soundcloud.com', '2026-06-24')] },
  { id: 'spotify', category: 'embeds', host: 'open.spotify.com', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('open.spotify.com', '2026-09-12')] },
  { id: 'instagram', category: 'embeds', host: 'www.instagram.com', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('www.instagram.com', '2026-08-30')] },
  { id: 'x-timeline', category: 'embeds', host: 'platform.twitter.com', verdict: 'blocked', measured: 'reachabilityOnly', vantage: [], citations: [gf('platform.twitter.com', '2026-07-07')] },
  { id: 'wistia', category: 'embeds', host: 'fast.wistia.com', verdict: 'reachable', measured: 'reachabilityOnly', stale: true, vantage: [], citations: [gf('fast.wistia.com', '2026-03-17')] },
  untested('loom', 'embeds', null),

  // Maps
  { id: 'mapbox-telemetry', category: 'maps', host: 'events.mapbox.com', verdict: 'blocked', measured: 'reachabilityOnly', stale: true, vantage: [], citations: [gf('events.mapbox.com', '2026-03-12')] },
  { id: 'mapbox-api', category: 'maps', host: 'api.mapbox.com', verdict: 'reachable', measured: 'reachabilityOnly', vantage: [], citations: [gf('api.mapbox.com', '2026-08-31')] },
  { id: 'openstreetmap', category: 'maps', host: 'tile.openstreetmap.org', verdict: 'blocked', measured: 'text', vantage: [], citations: [gf('tile.openstreetmap.org', '2026-09-07')] },

  // Platforms
  { id: 'wix', category: 'platforms', host: 'wix.com', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('wix', '2026-08-30')] },
  { id: 'shopify', category: 'platforms', host: 'shopify.com', verdict: 'slow', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('shopify', '2026-08-28')] },
  { id: 'webflow', category: 'platforms', host: 'webflow.com', verdict: 'intermittent', measured: 'text', vantage: [], citations: [gf('webflow.com', '2026-08-23')] },
  { id: 'squarespace', category: 'platforms', host: 'www.squarespace.com', verdict: 'reachable', measured: 'text', vantage: [], citations: [gf('www.squarespace.com', '2026-09-12')] },
  untested('netlify', 'platforms', null),
  untested('sanity', 'platforms', null),

  // Infrastructure
  { id: 'algolia', category: 'infrastructure', host: null, hostNote: 'vendorSite', verdict: 'answersThenStalls', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('algolia', '2026-08-28')] },
  { id: 'firebase', category: 'infrastructure', host: 'firebase.google.com', verdict: 'intermittent', measured: 'text', vantage: [], citations: [gf('firebase.google.com', '2026-09-14')] },
  { id: 'aws-cloudfront', category: 'infrastructure', host: null, hostNote: 'vendorSite', verdict: 'splitsByVantage', measured: 'text', vantage: ['zhangjiakou', 'beijingMobile'], citations: [yb('aws-cloudfront', '2026-08-28', '2026-08-30')] },
  { id: 'sentry', category: 'infrastructure', host: null, hostNote: 'vendorSite', verdict: 'reachable', measured: 'text', vantage: ['zhangjiakou'], citations: [yb('sentry', '2026-08-28')] },
  untested('bootstrap-cdn', 'infrastructure', null),

  // Payments
  { id: 'paypal', category: 'payments', host: 'www.paypal.com', verdict: 'reachable', measured: 'text', vantage: [], citations: [gf('www.paypal.com', '2026-05-18')] },
  { ...untested('stripe', 'payments', 'js.stripe.com'), measured: 'text' },
];

export interface DependencyCopy {
  columns: {
    service: string;
    host: string;
    verdict: string;
    measured: string;
    vantage: string;
    source: string;
  };
  categories: Record<Category, string>;
  verdicts: Record<Verdict, string>;
  hostNotes: Record<NonNullable<DependencyRow['hostNote']>, string>;
  sourceNotes: Record<NonNullable<DependencyRow['sourceNote']>, string>;
  reachabilityOnly: string;
  noTest: string;
  /** Appended to a stale row's measured cell. */
  staleSuffix: string;
  /** Empty vantage cell. */
  noVantage: string;
  /** Vantage label. First use in a table block carries the Chinese name. */
  vantages: Record<Vantage, { first: string; later: string }>;
  /** Joins two vantage labels in one cell. */
  vantageJoin: string;
  /** Localized service names. Rows not listed use the brand name below. */
  services: Record<string, string>;
  /** Measured cell text, for rows with `measured: 'text'`. */
  measured: Record<string, string>;
  /** Formats one citation's dates, e.g. "28 and 30 Aug 2026". */
  formatDates: (isoDates: string[]) => string;
}

/** Brand names, identical in every locale. */
export const brandNames: Record<string, string> = {
  'google-analytics': 'Google Analytics',
  'google-tag-manager': 'Google Tag Manager',
  'meta-pixel': 'Meta Pixel',
  hotjar: 'Hotjar',
  'microsoft-clarity': 'Microsoft Clarity',
  mixpanel: 'Mixpanel',
  segment: 'Segment',
  plausible: 'Plausible',
  typeform: 'Typeform',
  mailchimp: 'Mailchimp',
  hcaptcha: 'hCaptcha',
  calendly: 'Calendly',
  intercom: 'Intercom',
  zendesk: 'Zendesk',
  drift: 'Drift',
  crisp: 'Crisp',
  'tawk-to': 'Tawk.to',
  disqus: 'Disqus',
  soundcloud: 'SoundCloud',
  spotify: 'Spotify',
  instagram: 'Instagram',
  wistia: 'Wistia',
  loom: 'Loom',
  wix: 'Wix',
  shopify: 'Shopify',
  webflow: 'Webflow',
  squarespace: 'Squarespace',
  netlify: 'Netlify',
  sanity: 'Sanity',
  algolia: 'Algolia',
  firebase: 'Firebase',
  'aws-cloudfront': 'AWS CloudFront',
  sentry: 'Sentry',
  'bootstrap-cdn': 'Bootstrap CDN',
  paypal: 'PayPal',
  stripe: 'Stripe',
};

/** Groups ISO dates by month and year, in order, for the date formatters. */
function groupDates(isoDates: string[]): { days: number[]; month: number; year: number }[] {
  const groups: { days: number[]; month: number; year: number }[] = [];
  for (const iso of isoDates) {
    const [y, m, d] = iso.split('-').map(Number);
    const last = groups[groups.length - 1];
    if (last && last.month === m && last.year === y) last.days.push(d);
    else groups.push({ days: [d], month: m, year: y });
  }
  return groups;
}

function joinList(items: string[], and: string): string {
  if (items.length < 2) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${and} ${items[items.length - 1]}`;
}

const enMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const deMonths = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const esMonths = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const frMonths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

/** No-break space before a percent sign, and before a colon in French. */
const NBSP = ' ';

export const copy: Record<Locale, DependencyCopy> = {
  en: {
    columns: {
      service: 'Service',
      host: 'Host or target tested',
      verdict: 'Verdict',
      measured: 'Measured',
      vantage: 'Vantage point',
      source: 'Source and date',
    },
    categories: {
      analytics: 'Analytics',
      formsAndChat: 'Forms and chat',
      embeds: 'Embeds',
      maps: 'Maps',
      platforms: 'Platforms',
      infrastructure: 'Infrastructure',
      payments: 'Payments',
    },
    verdicts: {
      reachable: 'Reachable',
      slow: 'Slow',
      answersThenStalls: 'Answers then stalls',
      intermittent: 'Intermittent',
      blocked: 'Blocked',
      splitsByVantage: 'Splits by vantage point',
      untested: 'Untested',
    },
    hostNotes: {
      vendorSite: 'Vendor site, host not named by the source',
      notProbed: 'Not probed',
    },
    sourceNotes: {
      neverTestedByGreatFire: 'GreatFire has never tested this host',
      owedByHarness: 'Owed by our own harness',
    },
    reachabilityOnly: 'Reachability verdict only',
    noTest: 'No test on record',
    staleSuffix: ', six months old',
    noVantage: 'n/a',
    vantages: {
      zhangjiakou: { first: 'Alibaba Cloud (阿里云) cn-zhangjiakou', later: 'Alibaba Cloud cn-zhangjiakou' },
      beijingMobile: { first: 'Beijing China Mobile (中国移动)', later: 'Beijing China Mobile' },
    },
    vantageJoin: ', and ',
    services: {
      'amplitude-script': 'Amplitude, script host',
      'amplitude-events': 'Amplitude, event host',
      matomo: 'Matomo cloud',
      'x-timeline': 'X, the timeline widget',
      'mapbox-telemetry': 'Mapbox, telemetry',
      'mapbox-api': 'Mapbox, tiles and API',
      openstreetmap: 'OpenStreetMap tiles',
    },
    measured: {
      'google-tag-manager': '72 of 72 at 118ms first byte, and 0 of 112',
      hotjar: '3 of 3 at 487ms first byte, LCP 1,660ms',
      'microsoft-clarity': '0 of 3 inside 60s, first byte 541ms',
      mixpanel: '0 of 3 inside 60s, first byte 391ms',
      segment: '3 of 3, first byte 900ms on one run and 1,084ms on another',
      plausible: '3 of 3, first byte 550ms, LCP 1,208ms',
      matomo: '3 of 3, first byte 516ms, LCP 1,532ms',
      typeform: '0 of 3 inside 60s, first byte 907ms',
      mailchimp: '0 of 3 inside 60s, first byte 812ms, paint 2.0s',
      disqus: '41 of 43 tested URLs blocked, 2 disrupted',
      openstreetmap: 'All 71 tested openstreetmap.org URLs blocked',
      wix: '0 of 3 inside 60s, first byte 532ms',
      shopify: '3 of 3, first byte 575ms, median load 3.6s',
      webflow: 'Interference on 100% of the last 1 conclusive test',
      squarespace: '2 recent conclusive tests connected normally',
      algolia: '0 of 3 inside 60s, first byte 1,027ms, paint 3.4s',
      firebase: 'Interference on 100% of the last 2 conclusive tests',
      'aws-cloudfront': '3 of 3 at 665ms first byte, and 0 of 3 at 743ms',
      sentry: '3 of 3, first byte 252ms',
      paypal: '9 of 27 tested URLs disrupted, and the disrupted ones are checkout redirect paths',
      stripe: 'No test on record. See the note below: reachability is not the binding question here',
    },
    formatDates: (iso) =>
      groupDates(iso)
        .map((g) => `${joinList(g.days.map(String), 'and')} ${enMonths[g.month - 1]} ${g.year}`)
        .join(', '),
  },

  fr: {
    columns: {
      service: 'Service',
      host: 'Hôte ou cible du test',
      verdict: 'Verdict',
      measured: 'Mesure',
      vantage: 'Point de mesure',
      source: 'Source et date',
    },
    categories: {
      analytics: "Mesure d'audience",
      formsAndChat: 'Formulaires et messagerie',
      embeds: 'Contenus intégrés',
      maps: 'Cartes',
      platforms: 'Plateformes',
      infrastructure: 'Infrastructure',
      payments: 'Paiements',
    },
    verdicts: {
      reachable: 'Accessible',
      slow: 'Lent',
      answersThenStalls: 'Répond puis cale',
      intermittent: 'Intermittent',
      blocked: 'Bloqué',
      splitsByVantage: 'Diverge selon le point de mesure',
      untested: 'Non testé',
    },
    hostNotes: {
      vendorSite: 'Site du fournisseur, hôte non précisé par la source',
      notProbed: 'Non sondé',
    },
    sourceNotes: {
      neverTestedByGreatFire: "GreatFire n'a jamais testé cet hôte",
      owedByHarness: 'À mesurer par notre propre sonde',
    },
    reachabilityOnly: "Verdict d'accessibilité seul",
    noTest: 'Aucun test enregistré',
    staleSuffix: ', relevé vieux de six mois',
    noVantage: 'sans objet',
    vantages: {
      zhangjiakou: { first: 'Alibaba Cloud (阿里云) cn-zhangjiakou', later: 'Alibaba Cloud cn-zhangjiakou' },
      beijingMobile: { first: 'China Mobile (中国移动) à Pékin', later: 'China Mobile à Pékin' },
    },
    vantageJoin: ' et ',
    services: {
      'amplitude-script': 'Amplitude, hôte du script',
      'amplitude-events': 'Amplitude, hôte des événements',
      matomo: 'Matomo cloud',
      'x-timeline': "X, widget de fil d'actualité",
      'mapbox-telemetry': 'Mapbox, télémétrie',
      'mapbox-api': 'Mapbox, tuiles et API',
      openstreetmap: 'Tuiles OpenStreetMap',
    },
    measured: {
      'google-tag-manager': '72 sur 72 (premier octet à 118 ms) et 0 sur 112',
      hotjar: '3 sur 3, premier octet à 487 ms, LCP à 1 660 ms',
      'microsoft-clarity': '0 sur 3 dans les 60 s, premier octet à 541 ms',
      mixpanel: '0 sur 3 dans les 60 s, premier octet à 391 ms',
      segment: '3 sur 3, premier octet à 900 ms sur un relevé et 1 084 ms sur un autre',
      plausible: '3 sur 3, premier octet à 550 ms, LCP à 1 208 ms',
      matomo: '3 sur 3, premier octet à 516 ms, LCP à 1 532 ms',
      typeform: '0 sur 3 dans les 60 s, premier octet à 907 ms',
      mailchimp: '0 sur 3 dans les 60 s, premier octet à 812 ms, premier rendu à 2,0 s',
      disqus: '41 URL testées sur 43 bloquées, 2 perturbées',
      openstreetmap: '71 URL openstreetmap.org testées, toutes bloquées',
      wix: '0 sur 3 dans les 60 s, premier octet à 532 ms',
      shopify: '3 sur 3, premier octet à 575 ms, chargement médian 3,6 s',
      webflow: `Interférences sur 100${NBSP}% des tests concluants récents (1 test)`,
      squarespace: 'Connexion normale sur les 2 tests concluants récents',
      algolia: '0 sur 3 dans les 60 s, premier octet à 1 027 ms, premier rendu à 3,4 s',
      firebase: `Interférences sur 100${NBSP}% des 2 derniers tests concluants`,
      'aws-cloudfront': '3 sur 3 (premier octet à 665 ms) et 0 sur 3 (743 ms)',
      sentry: '3 sur 3, premier octet à 252 ms',
      paypal: '9 URL testées sur 27 perturbées, toutes des redirections de paiement',
      stripe: `Aucun test enregistré. Voir plus bas${NBSP}: l'accessibilité n'est pas ici la question déterminante`,
    },
    formatDates: (iso) =>
      groupDates(iso)
        .map((g) => `${joinList(g.days.map((d) => (d === 1 ? '1er' : String(d))), 'et')} ${frMonths[g.month - 1]} ${g.year}`)
        .join(', '),
  },

  es: {
    columns: {
      service: 'Servicio',
      host: 'Servidor o destino probado',
      verdict: 'Veredicto',
      measured: 'Medición',
      vantage: 'Punto de medición',
      source: 'Fuente y fecha',
    },
    categories: {
      analytics: 'Analítica',
      formsAndChat: 'Formularios y chat',
      embeds: 'Contenidos incrustados',
      maps: 'Mapas',
      platforms: 'Plataformas',
      infrastructure: 'Infraestructura',
      payments: 'Pagos',
    },
    verdicts: {
      reachable: 'Accesible',
      slow: 'Lento',
      answersThenStalls: 'Responde y se cuelga',
      intermittent: 'Intermitente',
      blocked: 'Bloqueado',
      splitsByVantage: 'Diverge según el punto de medición',
      untested: 'Sin probar',
    },
    hostNotes: {
      vendorSite: 'Sitio del proveedor, servidor no indicado por la fuente',
      notProbed: 'Sin medir',
    },
    sourceNotes: {
      neverTestedByGreatFire: 'GreatFire nunca ha probado este servidor',
      owedByHarness: 'Pendiente de nuestra propia sonda',
    },
    reachabilityOnly: 'Solo veredicto de accesibilidad',
    noTest: 'Ninguna prueba registrada',
    staleSuffix: ', medición de hace seis meses',
    noVantage: 'no aplica',
    vantages: {
      zhangjiakou: { first: 'Alibaba Cloud (阿里云) cn-zhangjiakou', later: 'Alibaba Cloud cn-zhangjiakou' },
      beijingMobile: { first: 'China Mobile (中国移动) en Pekín', later: 'China Mobile en Pekín' },
    },
    vantageJoin: ' y ',
    services: {
      'amplitude-script': 'Amplitude, servidor del script',
      'amplitude-events': 'Amplitude, servidor de eventos',
      matomo: 'Matomo cloud',
      'x-timeline': 'X, widget de la cronología',
      'mapbox-telemetry': 'Mapbox, telemetría',
      'mapbox-api': 'Mapbox, teselas y API',
      openstreetmap: 'Teselas de OpenStreetMap',
    },
    measured: {
      'google-tag-manager': '72 de 72 (primer byte en 118 ms) y 0 de 112',
      hotjar: '3 de 3, primer byte en 487 ms, LCP en 1.660 ms',
      'microsoft-clarity': '0 de 3 en 60 s, primer byte en 541 ms',
      mixpanel: '0 de 3 en 60 s, primer byte en 391 ms',
      segment: '3 de 3, primer byte en 900 ms en una medición y en 1.084 ms en otra',
      plausible: '3 de 3, primer byte en 550 ms, LCP en 1.208 ms',
      matomo: '3 de 3, primer byte en 516 ms, LCP en 1.532 ms',
      typeform: '0 de 3 en 60 s, primer byte en 907 ms',
      mailchimp: '0 de 3 en 60 s, primer byte en 812 ms, renderizado en 2,0 s',
      disqus: '41 de 43 URL probadas bloqueadas, 2 alteradas',
      openstreetmap: '71 URL de openstreetmap.org probadas, todas bloqueadas',
      wix: '0 de 3 en 60 s, primer byte en 532 ms',
      shopify: '3 de 3, primer byte en 575 ms, carga mediana de 3,6 s',
      webflow: `Interferencias en el 100${NBSP}% de las pruebas concluyentes recientes (1 prueba)`,
      squarespace: 'Conexión normal en las 2 pruebas concluyentes recientes',
      algolia: '0 de 3 en 60 s, primer byte en 1.027 ms, renderizado en 3,4 s',
      firebase: `Interferencias en el 100${NBSP}% de las 2 últimas pruebas concluyentes`,
      'aws-cloudfront': '3 de 3 (primer byte en 665 ms) y 0 de 3 (743 ms)',
      sentry: '3 de 3, primer byte en 252 ms',
      paypal: '9 de 27 URL probadas alteradas, todas ellas redirecciones de pago',
      stripe: 'Ninguna prueba registrada. Véase la nota más abajo: la accesibilidad no es aquí la cuestión decisiva',
    },
    formatDates: (iso) =>
      groupDates(iso)
        .map((g) => `${joinList(g.days.map(String), 'y')} de ${esMonths[g.month - 1]} de ${g.year}`)
        .join(', '),
  },

  de: {
    columns: {
      service: 'Dienst',
      host: 'Host oder Testziel',
      verdict: 'Befund',
      measured: 'Messwert',
      vantage: 'Messpunkt',
      source: 'Quelle und Datum',
    },
    categories: {
      analytics: 'Webanalyse',
      formsAndChat: 'Formulare und Chat',
      embeds: 'Eingebettete Inhalte',
      maps: 'Karten',
      platforms: 'Plattformen',
      infrastructure: 'Infrastruktur',
      payments: 'Zahlungen',
    },
    verdicts: {
      reachable: 'Erreichbar',
      slow: 'Langsam',
      answersThenStalls: 'Antwortet, bleibt dann hängen',
      intermittent: 'Sporadisch gestört',
      blocked: 'Gesperrt',
      splitsByVantage: 'Je nach Messpunkt verschieden',
      untested: 'Nicht getestet',
    },
    hostNotes: {
      vendorSite: 'Website des Anbieters, Host von der Quelle nicht genannt',
      notProbed: 'Nicht geprüft',
    },
    sourceNotes: {
      neverTestedByGreatFire: 'Von GreatFire nie getestet',
      owedByHarness: 'Messung durch unsere Sonde steht aus',
    },
    reachabilityOnly: 'Nur Erreichbarkeitsbefund',
    noTest: 'Kein Test verzeichnet',
    staleSuffix: ', Stand vor sechs Monaten',
    noVantage: 'entfällt',
    vantages: {
      zhangjiakou: { first: 'Alibaba Cloud (阿里云) cn-zhangjiakou', later: 'Alibaba Cloud cn-zhangjiakou' },
      beijingMobile: { first: 'China Mobile (中国移动) in Peking', later: 'China Mobile in Peking' },
    },
    vantageJoin: ' und ',
    services: {
      'amplitude-script': 'Amplitude, Skript-Host',
      'amplitude-events': 'Amplitude, Event-Host',
      matomo: 'Matomo Cloud',
      'x-timeline': 'X, Timeline-Widget',
      'mapbox-telemetry': 'Mapbox, Telemetrie',
      'mapbox-api': 'Mapbox, Kacheln und API',
      openstreetmap: 'OpenStreetMap-Kacheln',
    },
    measured: {
      'google-tag-manager': '72 von 72 (erstes Byte nach 118 ms) und 0 von 112',
      hotjar: '3 von 3, erstes Byte nach 487 ms, LCP 1.660 ms',
      'microsoft-clarity': '0 von 3 binnen 60 s, erstes Byte nach 541 ms',
      mixpanel: '0 von 3 binnen 60 s, erstes Byte nach 391 ms',
      segment: '3 von 3, erstes Byte nach 900 ms in einem Durchlauf und 1.084 ms in einem anderen',
      plausible: '3 von 3, erstes Byte nach 550 ms, LCP 1.208 ms',
      matomo: '3 von 3, erstes Byte nach 516 ms, LCP 1.532 ms',
      typeform: '0 von 3 binnen 60 s, erstes Byte nach 907 ms',
      mailchimp: '0 von 3 binnen 60 s, erstes Byte nach 812 ms, erstes Rendering nach 2,0 s',
      disqus: '41 von 43 getesteten URLs gesperrt, 2 gestört',
      openstreetmap: 'Alle 71 getesteten URLs von openstreetmap.org gesperrt',
      wix: '0 von 3 binnen 60 s, erstes Byte nach 532 ms',
      shopify: '3 von 3, erstes Byte nach 575 ms, Median-Ladezeit 3,6 s',
      webflow: `Störungen bei 100${NBSP}% der jüngsten aussagekräftigen Tests (1 Test)`,
      squarespace: 'Normale Verbindung bei den 2 jüngsten aussagekräftigen Tests',
      algolia: '0 von 3 binnen 60 s, erstes Byte nach 1.027 ms, erstes Rendering nach 3,4 s',
      firebase: `Störungen bei 100${NBSP}% der letzten 2 aussagekräftigen Tests`,
      'aws-cloudfront': '3 von 3 (erstes Byte nach 665 ms) und 0 von 3 (743 ms)',
      sentry: '3 von 3, erstes Byte nach 252 ms',
      paypal: '9 von 27 getesteten URLs gestört, allesamt Checkout-Weiterleitungen',
      stripe: 'Kein Test verzeichnet. Siehe Hinweis unten: Die Erreichbarkeit ist hier nicht die entscheidende Frage',
    },
    formatDates: (iso) =>
      groupDates(iso)
        .map((g) => `${joinList(g.days.map((d) => `${d}.`), 'und')} ${deMonths[g.month - 1]} ${g.year}`)
        .join(', '),
  },
};

/** Localized service name for a row. */
export function serviceName(row: DependencyRow, locale: Locale): string {
  return copy[locale].services[row.id] ?? brandNames[row.id] ?? row.id;
}

/**
 * The six display cells of a row, as plain text. `seen` tracks which vantage
 * labels have already appeared in the current table block, so the Chinese
 * name is given on first use only. Hostnames are returned bare; renderers
 * add their own code formatting.
 */
export function rowCells(row: DependencyRow, locale: Locale, seen: Set<Vantage>) {
  const c = copy[locale];

  let measured: string;
  if (row.measured === 'reachabilityOnly') measured = c.reachabilityOnly;
  else if (row.measured === 'noTest') measured = c.noTest;
  else measured = c.measured[row.id];
  if (measured === undefined) {
    throw new Error(`chinaDependencies: no ${locale} measured text for "${row.id}"`);
  }
  if (row.stale) measured += c.staleSuffix;

  const vantage = row.vantage.length
    ? row.vantage
        .map((v) => {
          const label = seen.has(v) ? c.vantages[v].later : c.vantages[v].first;
          seen.add(v);
          return label;
        })
        .join(c.vantageJoin)
    : c.noVantage;

  let source: string;
  if (row.citations.length === 0) source = c.sourceNotes[row.sourceNote ?? 'owedByHarness'];
  else if (row.citations.length === 1) {
    const [cit] = row.citations;
    source = `${cit.source}, ${c.formatDates(cit.testedOn)}`;
  } else source = row.citations.map((cit) => `${cit.source} ${c.formatDates(cit.testedOn)}`).join(', ');

  return {
    service: serviceName(row, locale),
    host: row.host,
    hostNote: row.hostNote ? c.hostNotes[row.hostNote] : null,
    verdict: c.verdicts[row.verdict],
    measured,
    vantage,
    source,
  };
}
