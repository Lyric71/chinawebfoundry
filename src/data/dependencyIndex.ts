import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Verdict } from './chinaDependencies';
import { localizePath } from '../i18n/routes';
import type { Locale } from '../i18n/ui';

export interface IndexCitation {
  source: 'GreatFire' | '21YunBox';
  url: string;
  testedOn: string[];
}

export interface IndexEntry {
  id: string;
  name: string;
  host: string | null;
  category: string;
  verdict: Verdict;
  dc_ms: number | null;
  dc_n: string | null;
  consumer_ms: number | null;
  consumer_n: string | null;
  consumer_vantage: string | null;
  change: string;
  gf_verdict: string | null;
  gf_count: string | null;
  gf_date: string | null;
  dc_date?: string | null;
  consumer_date?: string | null;
  anchor: string;
  citations: IndexCitation[];
}

export interface IndexPanelFile {
  edition: string;
  compiledOn: string;
  method: string;
  entries: IndexEntry[];
}

export interface KpiTrend {
  prevCount: number;
  deltaCount: number;
  pctChange: number;
  direction: 'up' | 'down' | 'flat';
  trendArrow: string;
  trendText: string;
  trendClass: string;
}

export interface GlobalTendencySummary {
  testedCount: number;
  prevTestedCount: number;
  reachableCount: number;
  prevReachableCount: number;
  reachabilityPct: string;
  prevReachabilityPct: string;
  deltaPct: string;
  direction: 'up' | 'down' | 'flat';
  trendArrow: string;
  trendBadgeClass: string;
  trendTextClass: string;
  comparisonLabel: string;
}

export interface VerdictSummary extends KpiTrend {
  verdict: Verdict;
  label: string;
  count: number;
  dotClass: string;
  badgeClass: string;
  barClass: string;
}

export interface CategorySummary {
  category: string;
  label: string;
  total: number;
  testedCount: number;
  reachabilityPct: string;
  deltaPct: string;
  trendArrow: string;
  trendClass: string;
  counts: Record<Verdict, number>;
  segments: ({
    verdict: Verdict;
    label: string;
    count: number;
    barClass: string;
    dotClass: string;
  } & KpiTrend)[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  analytics: 'Analytics & tags',
  fontsAndScripts: 'Fonts & script CDNs',
  formsAndChat: 'Forms, captcha & chat',
  embeds: 'Media & social embeds',
  maps: 'Maps & location',
  platforms: 'Platforms & CMS',
  infrastructure: 'Cloud & infrastructure',
  payments: 'Checkout & payments',
};

export const CATEGORY_LABELS_BY_LOCALE: Record<Locale, Record<string, string>> = {
  en: CATEGORY_LABELS,
  fr: {
    analytics: 'Analytique et balises',
    fontsAndScripts: 'Polices et CDN de scripts',
    formsAndChat: 'Formulaires, captcha et messagerie',
    embeds: 'Médias et contenus intégrés',
    maps: 'Cartographie et géolocalisation',
    platforms: 'Plateformes et CMS',
    infrastructure: 'Cloud et infrastructure',
    payments: 'Paiement et encaissement',
  },
  es: {
    analytics: 'Analítica y etiquetas',
    fontsAndScripts: 'Fuentes y CDN de scripts',
    formsAndChat: 'Formularios, captcha y chat',
    embeds: 'Multimedia e incrustaciones',
    maps: 'Mapas y geolocalización',
    platforms: 'Plataformas y CMS',
    infrastructure: 'Nube e infraestructura',
    payments: 'Pagos y pasarelas',
  },
  de: {
    analytics: 'Webanalyse & Tag-Management',
    fontsAndScripts: 'Schriften & Skript-CDNs',
    formsAndChat: 'Formulare, Captcha & Chat',
    embeds: 'Medien & Social-Einbettungen',
    maps: 'Karten & Standortdienste',
    platforms: 'Plattformen & CMS',
    infrastructure: 'Cloud & Infrastruktur',
    payments: 'Checkout & Zahlungsdienste',
  },
};

export const REPORT_ANCHOR_IDS = new Set<string>([
  'google-analytics',
  'meta-pixel',
  'google-tag-manager',
  'hotjar',
  'mixpanel-script',
  'plausible',
  'amplitude-events',
  'amplitude-script',
  'linkedin-insight',
  'microsoft-clarity',
  'mixpanel-events',
  'segment',
  'matomo',
  'google-libraries',
  'google-fonts-css',
  'google-fonts-files',
  'adobe-fonts',
  'jsdelivr',
  'cdnjs',
  'unpkg',
  'mailchimp',
  'recaptcha',
  'cloudflare-turnstile',
  'calendly',
  'hcaptcha',
  'intercom',
  'typeform',
  'zendesk',
  'crisp',
  'drift',
  'hubspot-script',
  'tawk-to',
  'disqus',
  'instagram',
  'soundcloud',
  'spotify',
  'x-timeline',
  'wistia',
  'loom',
  'mapbox-telemetry',
  'openstreetmap',
  'mapbox-api',
  'wix',
  'webflow',
  'shopify',
  'squarespace',
  'netlify',
  'sanity',
  'algolia',
  'firebase',
  'sentry',
  'aws-cloudfront',
  'bootstrap-cdn',
  'paypal',
  'stripe',
]);

export interface EditionSummary {
  edition: string;
  label: string;
  slug: string | null;
  jsonPath: string;
  compiledOn: string;
  compiledLabel: string;
  sourceWindow: string;
  totalEntries: number;
  verdictCounts: Record<Verdict, number>;
  changedCount: number;
  isBaseline: boolean;
  highlights: string[];
}

const VERDICT_ORDER: Verdict[] = [
  'reachable',
  'blocked',
  'intermittent',
  'splitsByVantage',
  'slow',
  'answersThenStalls',
  'untested',
];

export const VERDICT_META: Record<
  Verdict,
  { label: string; dotClass: string; badgeClass: string; barClass: string }
> = {
  reachable: {
    label: 'Reachable',
    dotClass: 'bg-emerald-400',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    barClass: 'bg-emerald-400',
  },
  blocked: {
    label: 'Blocked',
    dotClass: 'bg-red-400',
    badgeClass: 'bg-red-500/15 text-red-300 border-red-400/30',
    barClass: 'bg-red-400',
  },
  intermittent: {
    label: 'Intermittent',
    dotClass: 'bg-amber-400',
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
    barClass: 'bg-amber-400',
  },
  splitsByVantage: {
    label: 'Splits by vantage point',
    dotClass: 'bg-[var(--color-brand-orange)]',
    badgeClass: 'bg-[var(--color-brand-orange)]/20 text-[#FF9466] border-[var(--color-brand-orange)]/40',
    barClass: 'bg-[var(--color-brand-orange)]',
  },
  slow: {
    label: 'Slow',
    dotClass: 'bg-yellow-300',
    badgeClass: 'bg-yellow-500/15 text-yellow-200 border-yellow-400/30',
    barClass: 'bg-yellow-300',
  },
  answersThenStalls: {
    label: 'Answers then stalls',
    dotClass: 'bg-rose-400',
    badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
    barClass: 'bg-rose-400',
  },
  untested: {
    label: 'Untested',
    dotClass: 'bg-white/35',
    badgeClass: 'bg-white/[0.07] text-white/65 border-white/15',
    barClass: 'bg-white/30',
  },
};

export const VERDICT_LABELS_BY_LOCALE: Record<Locale, Record<Verdict, string>> = {
  en: {
    reachable: 'Reachable',
    blocked: 'Blocked',
    intermittent: 'Intermittent',
    splitsByVantage: 'Splits by vantage point',
    slow: 'Slow',
    answersThenStalls: 'Answers then stalls',
    untested: 'Untested',
  },
  fr: {
    reachable: 'Joignable',
    blocked: 'Bloqué',
    intermittent: 'Intermittent',
    splitsByVantage: 'Diverge selon le point de mesure',
    slow: 'Lent',
    answersThenStalls: 'Répond puis fige',
    untested: 'Non testé',
  },
  es: {
    reachable: 'Accesible',
    blocked: 'Bloqueado',
    intermittent: 'Intermitente',
    splitsByVantage: 'Diverge según el punto de medición',
    slow: 'Lento',
    answersThenStalls: 'Responde y se bloquea',
    untested: 'Sin probar',
  },
  de: {
    reachable: 'Erreichbar',
    blocked: 'Blockiert',
    intermittent: 'Unbeständig',
    splitsByVantage: 'Je nach Messpunkt abweichend',
    slow: 'Verzögert',
    answersThenStalls: 'Antwortet, bricht dann ab',
    untested: 'Nicht getestet',
  },
};

const MONTHS_LONG_BY_LOCALE: Record<Locale, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
};

const MONTHS_SHORT_BY_LOCALE: Record<Locale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
};

function formatEditionLabel(edition: string, locale: Locale = 'en'): string {
  const [y, m] = edition.split('-').map(Number);
  const month = MONTHS_LONG_BY_LOCALE[locale][m - 1];
  if (locale === 'fr') return `${month} ${y}`;
  if (locale === 'es') return `${month} de ${y}`;
  return `${month} ${y}`;
}

function formatIsoDate(iso: string, shortMonth = false, locale: Locale = 'en'): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = shortMonth ? MONTHS_SHORT_BY_LOCALE[locale] : MONTHS_LONG_BY_LOCALE[locale];
  if (locale === 'de') return `${d}. ${months[m - 1]} ${y}`;
  if (locale === 'es' && !shortMonth) return `${d} de ${months[m - 1]} de ${y}`;
  return `${d} ${months[m - 1]} ${y}`;
}

function computeSourceWindow(entries: IndexEntry[], locale: Locale = 'en'): string {
  const dates: string[] = [];
  for (const e of entries) {
    for (const c of e.citations ?? []) {
      for (const d of c.testedOn ?? []) {
        dates.push(d);
      }
    }
  }
  if (!dates.length) return 'n/a';
  dates.sort();
  const sep = locale === 'fr' ? 'au' : locale === 'es' ? 'al' : locale === 'de' ? 'bis' : 'to';
  return `${formatIsoDate(dates[0], true, locale)} ${sep} ${formatIsoDate(dates[dates.length - 1], true, locale)}`;
}

const EDITION_NOTES_BY_LOCALE: Record<Locale, Record<string, string[]>> = {
  en: {
    '2026-09': [
      'Initial 115-entry baseline snapshot compiled on 6 September 2026 from GreatFire HTTPS checks and 21YunBox per-tool and paired-study observations (20 of 82 tested hosts reachable, or 24.4%).',
      'Includes the 11 vendor-page timing rows before 21YunBox rewrote those support pages on 7 October 2026.',
      'Reflects GreatFire HTTPS verdicts prior to the late-September and October 2026 refused-connection rule revisions.',
    ],
    '2026-10': [
      'Updates 35 of the 115 tracked dependencies against the September 2026 baseline across all 8 categories (46 of 94 tested hosts reachable, or 48.9%).',
      'Records 21YunBox\'s 7 October 2026 withdrawal of 11 vendor-page support timings, moving those rows to dated GreatFire HTTPS verdicts.',
      'Captures GreatFire\'s late-August 2026 rule change on refused mainland connections across revised HTTPS verdicts and adds 12 newly tested hosts.',
    ],
  },
  fr: {
    '2026-09': [
      'Premier relevé de référence des 115 dépendances établi le 6 septembre 2026 à partir des vérifications HTTPS de GreatFire et des sondes publiées par 21YunBox (20 hôtes joignables sur 82 testés, soit 24,4\u00A0%).',
      'Conserve les 11 mesures de pages éditeurs avant la refonte documentaire opérée par 21YunBox le 7 octobre 2026.',
      'Restitue les verdicts HTTPS de GreatFire antérieurs à la révision des règles de septembre et octobre 2026 sur les connexions refusées.',
    ],
    '2026-10': [
      'Actualise 35 des 115 dépendances suivies par rapport au relevé de septembre 2026 dans les 8 catégories (46 hôtes joignables sur 94 testés, soit 48,9\u00A0%).',
      'Acte le retrait par 21YunBox, le 7 octobre 2026, de 11 temps de chargement de pages éditeurs et bascule ces entrées sur les verdicts HTTPS datés de GreatFire.',
      'Intègre le changement de règle de GreatFire de fin août 2026 sur les refus de connexion en Chine continentale et ajoute 12 hôtes nouvellement testés.',
    ],
  },
  es: {
    '2026-09': [
      'Primer corte de referencia de las 115 dependencias compilado el 6 de septiembre de 2026 a partir de las comprobaciones HTTPS de GreatFire y las mediciones de 21YunBox (20 hosts accesibles de 82 probados, el 24,4 %).',
      'Recoge los 11 tiempos de carga de páginas de proveedor antes de que 21YunBox reescribiera esas fichas el 7 de octubre de 2026.',
      'Refleja los veredictos HTTPS de GreatFire previos a la revisión metodológica de finales de septiembre y octubre de 2026 sobre conexiones rechazadas.',
    ],
    '2026-10': [
      'Actualiza 35 de las 115 dependencias seguidas frente al corte de septiembre de 2026 en las 8 categorías (46 hosts accesibles de 94 probados, el 48,9 %).',
      'Registra la retirada por parte de 21YunBox, el 7 de octubre de 2026, de 11 mediciones de páginas de proveedor, pasando esas filas a veredictos HTTPS fechados de GreatFire.',
      'Incorpora el cambio de criterio de GreatFire de finales de agosto de 2026 sobre conexiones rechazadas en China continental y suma 12 hosts con primera prueba fechada.',
    ],
  },
  de: {
    '2026-09': [
      'Erste Referenzfassung mit 115 Einträgen vom 6. September 2026 auf Basis datierter HTTPS-Prüfungen von GreatFire und veröffentlichter Messreihen von 21YunBox (20 von 82 getesteten Hosts erreichbar, 24,4 %).',
      'Enthält die 11 Messwerte zu Anbieterseiten vor der Überarbeitung der Support-Dokumentation durch 21YunBox am 7. Oktober 2026.',
      'Spiegelt die HTTPS-Befunde von GreatFire vor der Regeländerung von Ende September und Oktober 2026 zu abgewiesenen Verbindungen wider.',
    ],
    '2026-10': [
      'Aktualisiert 35 der 115 erfassten Abhängigkeiten gegenüber der Referenz vom September 2026 über alle 8 Kategorien hinweg (46 von 94 getesteten Hosts erreichbar, 48,9 %).',
      'Dokumentiert die Streichung von 11 Anbieterseiten-Messwerten durch 21YunBox am 7. Oktober 2026 und stellt diese Zeilen auf datierte HTTPS-Befunde von GreatFire um.',
      'Berücksichtigt die Ende August 2026 geänderte GreatFire-Wertung abgewiesener Verbindungen auf dem chinesischen Festland und ergänzt 12 erstmals getestete Hosts.',
    ],
  },
};

function formatPctValue(num: number, decimals: number, locale: Locale): string {
  const fixed = num.toFixed(decimals);
  const formatted = locale === 'en' ? fixed : fixed.replace('.', ',');
  const unit = locale === 'fr' ? '\u00A0%' : '%';
  return `${formatted}${unit}`;
}

function computeKpiTrend(count: number, prevCount: number, locale: Locale = 'en'): KpiTrend {
  const deltaCount = count - prevCount;
  const pctChange =
    prevCount > 0
      ? Math.round(((count - prevCount) / prevCount) * 100)
      : count > 0
        ? 100
        : 0;
  const direction: 'up' | 'down' | 'flat' =
    deltaCount > 0 ? 'up' : deltaCount < 0 ? 'down' : 'flat';
  const trendArrow = direction === 'up' ? '↑' : direction === 'down' ? '↓' : '→';
  const unit = locale === 'fr' ? '\u00A0%' : '%';
  const trendText =
    direction === 'up'
      ? `+${Math.abs(pctChange)}${unit}`
      : direction === 'down'
        ? `-${Math.abs(pctChange)}${unit}`
        : `0${unit}`;
  const trendClass =
    direction === 'up'
      ? 'text-emerald-400'
      : direction === 'down'
        ? 'text-rose-400'
        : 'text-white/45';

  return {
    prevCount,
    deltaCount,
    pctChange,
    direction,
    trendArrow,
    trendText,
    trendClass,
  };
}

export function loadDependencyIndexData(locale: Locale = 'en') {
  const dataDir = join(process.cwd(), 'public', 'data');
  const guidesDir = join(process.cwd(), 'src', 'content', 'guides');
  const verdictLabels = VERDICT_LABELS_BY_LOCALE[locale];
  const categoryLabels = CATEGORY_LABELS_BY_LOCALE[locale];
  const editionNotes = EDITION_NOTES_BY_LOCALE[locale];
  const files = readdirSync(dataDir)
    .filter((f) => /^china-dependency-index-\d{4}-\d{2}\.json$/.test(f))
    .sort();

  const panels: IndexPanelFile[] = files.map((file) => {
    const raw = readFileSync(join(dataDir, file), 'utf8');
    return JSON.parse(raw) as IndexPanelFile;
  });

  const editions: EditionSummary[] = panels.map((panel) => {
    const counts: Record<Verdict, number> = {
      reachable: 0,
      blocked: 0,
      intermittent: 0,
      splitsByVantage: 0,
      slow: 0,
      answersThenStalls: 0,
      untested: 0,
    };

    let changedCount = 0;
    for (const entry of panel.entries) {
      counts[entry.verdict] = (counts[entry.verdict] ?? 0) + 1;
      if (entry.change && entry.change !== 'baseline' && entry.change !== 'unchanged') {
        changedCount += 1;
      }
    }

    const isBaseline = panel.entries.every((e) => e.change === 'baseline');
    const sourceWin = computeSourceWindow(panel.entries, locale);
    const defaultHighlights = isBaseline
      ? [
          `Baseline register covering ${panel.entries.length} third-party web dependencies.`,
          `Source tests span ${sourceWin}.`,
        ]
      : [
          `${changedCount} of ${panel.entries.length} entries recorded a change against the previous edition.`,
          `Source tests span ${sourceWin}.`,
        ];

    const hasReport = existsSync(join(guidesDir, `china-dependency-index-${panel.edition}.md`));
    const canonicalReportPath = `/resources/china-web-guide/china-dependency-index-${panel.edition}/`;

    return {
      edition: panel.edition,
      label: formatEditionLabel(panel.edition, locale),
      slug: hasReport ? localizePath(canonicalReportPath, locale) : null,
      jsonPath: `/data/china-dependency-index-${panel.edition}.json`,
      compiledOn: panel.compiledOn,
      compiledLabel: formatIsoDate(panel.compiledOn, false, locale),
      sourceWindow: sourceWin,
      totalEntries: panel.entries.length,
      verdictCounts: counts,
      changedCount,
      isBaseline,
      highlights: editionNotes[panel.edition] ?? defaultHighlights,
    };
  });

  // Latest edition is the last one in chronological order
  const latestPanel = panels[panels.length - 1];
  const latestEdition = editions[editions.length - 1];
  const previousPanel = panels.length > 1 ? panels[panels.length - 2] : latestPanel;
  const previousEdition = editions.length > 1 ? editions[editions.length - 2] : latestEdition;

  const verdictSummaries: VerdictSummary[] = VERDICT_ORDER.map((v) => {
    const count = latestEdition.verdictCounts[v];
    const prevCount = previousEdition.verdictCounts[v] ?? count;
    return {
      verdict: v,
      label: verdictLabels[v],
      count,
      dotClass: VERDICT_META[v].dotClass,
      badgeClass: VERDICT_META[v].badgeClass,
      barClass: VERDICT_META[v].barClass,
      ...computeKpiTrend(count, prevCount, locale),
    };
  });

  // Curated spotlight rows from the latest panel that illustrate each distinct failure or split mode
  const spotlightIds = [
    'google-fonts-css',
    'google-tag-manager',
    'recaptcha',
    'jsdelivr',
    'cloudflare-turnstile',
    'wix',
  ];

  const spotlightRows = spotlightIds
    .map((id) => latestPanel.entries.find((e) => e.id === id))
    .filter((e): e is IndexEntry => Boolean(e));

  const categoryOrder: string[] = [];
  const categoryMap = new Map<string, Record<Verdict, number>>();
  const prevCategoryMap = new Map<string, Record<Verdict, number>>();

  for (const entry of latestPanel.entries) {
    if (!categoryMap.has(entry.category)) {
      categoryOrder.push(entry.category);
      categoryMap.set(entry.category, {
        reachable: 0,
        blocked: 0,
        intermittent: 0,
        splitsByVantage: 0,
        slow: 0,
        answersThenStalls: 0,
        untested: 0,
      });
      prevCategoryMap.set(entry.category, {
        reachable: 0,
        blocked: 0,
        intermittent: 0,
        splitsByVantage: 0,
        slow: 0,
        answersThenStalls: 0,
        untested: 0,
      });
    }
    const bucket = categoryMap.get(entry.category)!;
    bucket[entry.verdict] = (bucket[entry.verdict] ?? 0) + 1;
  }

  for (const entry of previousPanel.entries) {
    const prevBucket = prevCategoryMap.get(entry.category);
    if (prevBucket) {
      prevBucket[entry.verdict] = (prevBucket[entry.verdict] ?? 0) + 1;
    }
  }

  const categorySummaries: CategorySummary[] = categoryOrder.map((category) => {
    const counts = categoryMap.get(category)!;
    const prevCounts = prevCategoryMap.get(category)!;
    const total = Object.values(counts).reduce((sum, n) => sum + n, 0);
    const testedCount = total - (counts.untested ?? 0);
    const prevTestedCount = total - (prevCounts.untested ?? 0);
    const curRate = testedCount > 0 ? (counts.reachable / testedCount) * 100 : 0;
    const prevRate = prevTestedCount > 0 ? (prevCounts.reachable / prevTestedCount) * 100 : 0;
    const diffRate = curRate - prevRate;
    const catDir: 'up' | 'down' | 'flat' = diffRate > 0.05 ? 'up' : diffRate < -0.05 ? 'down' : 'flat';
    const segments = VERDICT_ORDER.filter((v) => counts[v] > 0).map((v) => ({
      verdict: v,
      label: verdictLabels[v],
      count: counts[v],
      barClass: VERDICT_META[v].barClass,
      dotClass: VERDICT_META[v].dotClass,
      ...computeKpiTrend(counts[v], prevCounts[v] ?? counts[v], locale),
    }));
    return {
      category,
      label: categoryLabels[category] ?? category,
      total,
      testedCount,
      reachabilityPct: formatPctValue(curRate, 0, locale),
      deltaPct: `${catDir === 'up' ? '+' : catDir === 'down' ? '-' : ''}${formatPctValue(Math.abs(diffRate), 1, locale)}`,
      trendArrow: catDir === 'up' ? '↑' : catDir === 'down' ? '↓' : '→',
      trendClass: catDir === 'up' ? 'text-emerald-400' : catDir === 'down' ? 'text-rose-400' : 'text-white/45',
      counts,
      segments,
    };
  });

  const testedCount = latestEdition.totalEntries - latestEdition.verdictCounts.untested;
  const prevTestedCount = previousEdition.totalEntries - previousEdition.verdictCounts.untested;
  const reachableCount = latestEdition.verdictCounts.reachable;
  const prevReachableCount = previousEdition.verdictCounts.reachable;
  const curGlobalPct = testedCount > 0 ? (reachableCount / testedCount) * 100 : 0;
  const prevGlobalPct = prevTestedCount > 0 ? (prevReachableCount / prevTestedCount) * 100 : 0;
  const globalDelta = curGlobalPct - prevGlobalPct;
  const globalDir: 'up' | 'down' | 'flat' =
    globalDelta > 0.05 ? 'up' : globalDelta < -0.05 ? 'down' : 'flat';

  const vsPrefix =
    locale === 'de'
      ? 'ggü.'
      : locale === 'fr'
        ? 'face à'
        : locale === 'es'
          ? 'frente a'
          : 'vs';

  const globalTendency: GlobalTendencySummary = {
    testedCount,
    prevTestedCount,
    reachableCount,
    prevReachableCount,
    reachabilityPct: formatPctValue(curGlobalPct, 1, locale),
    prevReachabilityPct: formatPctValue(prevGlobalPct, 1, locale),
    deltaPct: `${globalDir === 'up' ? '+' : globalDir === 'down' ? '-' : ''}${formatPctValue(Math.abs(globalDelta), 1, locale)}`,
    direction: globalDir,
    trendArrow: globalDir === 'up' ? '↑' : globalDir === 'down' ? '↓' : '→',
    trendBadgeClass:
      globalDir === 'up'
        ? 'bg-emerald-500/15 border-emerald-400/35 text-emerald-300'
        : globalDir === 'down'
          ? 'bg-rose-500/15 border-rose-400/35 text-rose-300'
          : 'bg-white/10 border-white/20 text-white/70',
    trendTextClass:
      globalDir === 'up'
        ? 'text-emerald-400'
        : globalDir === 'down'
          ? 'text-rose-400'
          : 'text-white/60',
    comparisonLabel: `${vsPrefix} ${previousEdition.label}`,
  };

  return {
    latestPanel,
    latestEdition,
    previousEdition,
    editions: [...editions].reverse(),
    verdictSummaries,
    categorySummaries,
    globalTendency,
    spotlightRows,
  };
}
