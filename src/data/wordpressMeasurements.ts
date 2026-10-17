import type { Locale } from '../i18n/ui';

/**
 * The measurement block on /wordpress-in-china/ and its three locale pages,
 * rendered by src/components/pages/WordPressMeasurements.astro. One record
 * per figure. Hosts, dates and source URLs live here once, so the four
 * locales cannot drift apart; only the words around them are localized.
 *
 * Every figure belongs to a third party (editorial/CLAUDE.md, the GFW rule):
 * 21YunBox probes, GreatFire verdicts and WordPress.org's own statement. None
 * is a ChinaWebFoundry measurement. Sources and both checks:
 * editorial/sources/verified-sources.md, T6-08 entries of 18 October 2026.
 *
 * `reviewBy` is the oldest third-party test date in the block (GreatFire,
 * 22 August 2026) plus 90 days; the WordPress.org row is a dated vendor
 * statement, not a test. editorial/scripts/review-due.mjs lists it, and the
 * publish run that finds it due re-fetches
 * every source below, updates or cuts the row, and moves both dates.
 */

export const lastReviewedOn = '2026-10-18';
export const reviewBy = '2026-11-20';

export type MeasurementId =
  | 'fontsDatacentre'
  | 'fontsHomeLine'
  | 'hostedLibraries'
  | 'gravatar'
  | 'wordpressOrg';

export interface Measurement {
  id: MeasurementId;
  host: string;
  /** ISO date the source states, never the date we read it. */
  testedOn: string;
  source: string;
  url: string;
}

const study = 'https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html';

export const measurements: Measurement[] = [
  { id: 'fontsDatacentre', host: 'fonts.googleapis.com', testedOn: '2026-08-28', source: '21YunBox', url: study },
  { id: 'fontsHomeLine', host: 'fonts.googleapis.com', testedOn: '2026-08-30', source: '21YunBox', url: study },
  { id: 'hostedLibraries', host: 'ajax.googleapis.com', testedOn: '2026-08-22', source: 'GreatFire', url: 'https://en.greatfire.org/https/ajax.googleapis.com' },
  { id: 'gravatar', host: 'secure.gravatar.com', testedOn: '2026-08-31', source: 'GreatFire', url: 'https://en.greatfire.org/https/secure.gravatar.com' },
  { id: 'wordpressOrg', host: 'wordpress.org', testedOn: '2020-03-21', source: 'WordPress.org Meta Trac #5106', url: 'https://meta.trac.wordpress.org/ticket/5106' },
];

export interface MeasurementCopy {
  /** BCP 47 tag for Intl date formatting. */
  dateLocale: string;
  eyebrow: string;
  heading: string;
  intro: string;
  columns: { what: string; result: string; vantage: string; date: string; source: string; note: string };
  rows: Record<MeasurementId, { what: string; result: string; vantage: string; note?: string }>;
  footnote: string;
  /** Link text to the guide that lists every host, below the footnote. */
  more: string;
  /** Words before the date in the hero line. */
  lastReviewed: string;
}

export const copy: Record<Locale, MeasurementCopy> = {
  en: {
    dateLocale: 'en-GB',
    eyebrow: 'Tested from inside China',
    heading: 'Four calls a typical WordPress site makes, and what came back.',
    intro: 'Read the network and the date before the number. A datacentre in China and a flat in Beijing can give opposite answers about the same host, and both answers are real.',
    columns: {
      what: 'What WordPress loads',
      result: 'Result',
      vantage: 'Seen from',
      date: 'Date',
      source: 'Source',
      note: 'Note',
    },
    rows: {
      fontsDatacentre: {
        what: 'Google Fonts stylesheet',
        result: '72 of 72 answered, 111ms median first byte',
        vantage: 'Alibaba Cloud (阿里云) datacentre, Zhangjiakou region',
      },
      fontsHomeLine: {
        what: 'Google Fonts stylesheet',
        result: '0 of 54 answered',
        vantage: 'China Mobile (中国移动) home broadband, Beijing',
        note: 'The row above, repeated two days later on a home line.',
      },
      hostedLibraries: {
        what: 'jQuery from Google Hosted Libraries',
        result: 'Blocked (1 of 1 conclusive tests)',
        vantage: 'GreatFire test from mainland China',
        note: '21YunBox timed Google’s library website from the Zhangjiakou datacentre on 28 August 2026: no first byte in 3 of 3 runs, each stopped at 60 seconds.',
      },
      gravatar: {
        what: 'Gravatar avatars',
        result: 'Blocked (1 of 1 conclusive tests)',
        vantage: 'GreatFire test from mainland China',
        note: 'WordPress calls it on every wp-admin screen, through the avatar in the admin bar.',
      },
      wordpressOrg: {
        what: 'Core, plugin and theme updates',
        result: 'HTTP 429 (“too many requests”)',
        vantage: 'Chinese networks, in WordPress.org staff’s own words',
        note: 'Documented since at least that date. The dashboard gives no warning; it stops offering updates.',
      },
    },
    footnote: 'None of these figures is ours; each belongs to the source beside it. GreatFire reports whether a URL was reachable on its test date, and it names no network and records no timing.',
    more: 'Every host a WordPress site calls, checked one by one',
    lastReviewed: 'Last reviewed',
  },
  fr: {
    dateLocale: 'fr-FR',
    eyebrow: 'Testé depuis la Chine',
    heading: 'Quatre requêtes qu’émet un site WordPress ordinaire, et ce qui en est revenu.',
    intro: 'Regardez le réseau et la date avant le chiffre. Un centre de données chinois et un appartement pékinois peuvent rendre des verdicts opposés sur le même hôte ; les deux disent vrai.',
    columns: {
      what: 'Ce que charge WordPress',
      result: 'Résultat',
      vantage: 'Point de mesure',
      date: 'Date',
      source: 'Source',
      note: 'Précision',
    },
    rows: {
      fontsDatacentre: {
        what: 'Feuille de style Google Fonts',
        result: '72 réponses sur 72, médiane de 111 ms au premier octet',
        vantage: 'Centre de données Alibaba Cloud (阿里云), région de Zhangjiakou',
      },
      fontsHomeLine: {
        what: 'Feuille de style Google Fonts',
        result: '0 réponse sur 54',
        vantage: 'Ligne domestique China Mobile (中国移动), Pékin',
        note: 'La même mesure, reprise deux jours plus tard sur une ligne domestique.',
      },
      hostedLibraries: {
        what: 'jQuery servi par Google Hosted Libraries',
        result: 'Bloqué (1 test concluant sur 1)',
        vantage: 'Test GreatFire depuis la Chine continentale',
        note: '21YunBox a chronométré le site des bibliothèques de Google depuis le centre de données de Zhangjiakou, le 28 août 2026 : aucun premier octet sur 3 essais, tous interrompus à 60 secondes.',
      },
      gravatar: {
        what: 'Avatars Gravatar',
        result: 'Bloqué (1 test concluant sur 1)',
        vantage: 'Test GreatFire depuis la Chine continentale',
        note: 'WordPress l’appelle sur chaque écran du wp-admin, via l’avatar de la barre d’administration.',
      },
      wordpressOrg: {
        what: 'Mises à jour du cœur, des extensions et des thèmes',
        result: 'HTTP 429 (« trop de requêtes »)',
        vantage: 'Réseaux chinois, d’après l’équipe de WordPress.org elle-même',
        note: 'Constaté au moins depuis cette date. Le tableau de bord ne signale rien : il cesse simplement de proposer des mises à jour.',
      },
    },
    footnote: 'Aucun de ces chiffres ne vient de nous : chacun appartient à la source citée en regard. GreatFire indique si une URL répondait à la date du test ; il ne nomme aucun réseau et ne relève aucun temps de réponse.',
    more: 'Tous les hôtes qu’appelle un site WordPress, passés en revue un par un',
    lastReviewed: 'Dernière vérification le',
  },
  es: {
    dateLocale: 'es-ES',
    eyebrow: 'Comprobado desde China',
    heading: 'Cuatro peticiones habituales de un sitio WordPress y la respuesta que obtuvo cada una.',
    intro: 'Antes que la cifra, mire la red y la fecha. Un centro de datos en China y un piso en Pekín pueden dar respuestas opuestas sobre el mismo servidor, y ambas son ciertas.',
    columns: {
      what: 'Lo que carga WordPress',
      result: 'Resultado',
      vantage: 'Medido desde',
      date: 'Fecha',
      source: 'Fuente',
      note: 'Nota',
    },
    rows: {
      fontsDatacentre: {
        what: 'Hoja de estilos de Google Fonts',
        result: '72 de 72 respondidas, con una mediana de 111 ms hasta el primer byte',
        vantage: 'Centro de datos de Alibaba Cloud (阿里云), región de Zhangjiakou',
      },
      fontsHomeLine: {
        what: 'Hoja de estilos de Google Fonts',
        result: '0 de 54 respondidas',
        vantage: 'Línea doméstica de China Mobile (中国移动) en Pekín',
        note: 'La misma prueba, repetida dos días más tarde desde una línea doméstica.',
      },
      hostedLibraries: {
        what: 'jQuery desde Google Hosted Libraries',
        result: 'Bloqueado (1 prueba concluyente de 1)',
        vantage: 'Prueba de GreatFire desde China continental',
        note: '21YunBox cronometró el 28 de agosto de 2026 la web de bibliotecas de Google desde el centro de datos de Zhangjiakou: sin primer byte en los 3 intentos, cortados todos a los 60 segundos.',
      },
      gravatar: {
        what: 'Avatares de Gravatar',
        result: 'Bloqueado (1 prueba concluyente de 1)',
        vantage: 'Prueba de GreatFire desde China continental',
        note: 'WordPress lo solicita en cada pantalla de wp-admin a través del avatar de la barra de administración.',
      },
      wordpressOrg: {
        what: 'Actualizaciones del núcleo, las extensiones y los temas',
        result: 'HTTP 429 («demasiadas peticiones»)',
        vantage: 'Redes chinas, en palabras del propio equipo de WordPress.org',
        note: 'Documentado como mínimo desde esa fecha. El escritorio no da ningún aviso: sencillamente deja de ofrecer actualizaciones.',
      },
    },
    footnote: 'Ninguna de estas cifras es nuestra: cada una pertenece a la fuente que figura a su lado. GreatFire indica si una URL respondía en la fecha de la prueba; no identifica la red ni mide tiempos de respuesta.',
    more: 'Todos los servidores a los que llama un sitio WordPress, revisados uno a uno',
    lastReviewed: 'Revisado por última vez el',
  },
  de: {
    dateLocale: 'de-DE',
    eyebrow: 'Aus China heraus getestet',
    heading: 'Vier Aufrufe einer typischen WordPress-Website und was jeweils zurückkam.',
    intro: 'Lesen Sie zuerst Netz und Datum, dann die Zahl. Ein Rechenzentrum in China und eine Pekinger Wohnung können über denselben Host Gegensätzliches melden, und beide Befunde stimmen.',
    columns: {
      what: 'Was WordPress lädt',
      result: 'Ergebnis',
      vantage: 'Messpunkt',
      date: 'Datum',
      source: 'Quelle',
      note: 'Hinweis',
    },
    rows: {
      fontsDatacentre: {
        what: 'Google-Fonts-Stylesheet',
        result: '72 von 72 beantwortet, Median 111 ms bis zum ersten Byte',
        vantage: 'Rechenzentrum von Alibaba Cloud (阿里云), Region Zhangjiakou',
      },
      fontsHomeLine: {
        what: 'Google-Fonts-Stylesheet',
        result: '0 von 54 beantwortet',
        vantage: 'Privatanschluss von China Mobile (中国移动), Peking',
        note: 'Dieselbe Messung, zwei Tage später über einen Privatanschluss wiederholt.',
      },
      hostedLibraries: {
        what: 'jQuery von Google Hosted Libraries',
        result: 'Gesperrt (1 von 1 aussagekräftigen Tests)',
        vantage: 'GreatFire-Test aus Festlandchina',
        note: '21YunBox hat am 28. August 2026 die Ladezeit der Bibliotheksseite von Google aus dem Rechenzentrum in Zhangjiakou gemessen: In keinem der 3 Durchläufe kam ein erstes Byte, jeder wurde nach 60 Sekunden abgebrochen.',
      },
      gravatar: {
        what: 'Gravatar-Avatare',
        result: 'Gesperrt (1 von 1 aussagekräftigen Tests)',
        vantage: 'GreatFire-Test aus Festlandchina',
        note: 'WordPress ruft den Dienst auf jeder Seite von wp-admin auf, über den Avatar in der Admin-Leiste.',
      },
      wordpressOrg: {
        what: 'Updates für Core, Plugins und Themes',
        result: 'HTTP 429 („zu viele Anfragen“)',
        vantage: 'Chinesische Netze, so die Mitarbeiter von WordPress.org selbst',
        note: 'Mindestens seit diesem Datum dokumentiert. Das Dashboard warnt nicht; es bietet schlicht keine Updates mehr an.',
      },
    },
    footnote: 'Keine dieser Zahlen stammt von uns, jede gehört der danebenstehenden Quelle. GreatFire meldet, ob eine URL am Testtag erreichbar war; ein Netz nennt der Dienst nicht, Zeiten misst er keine.',
    more: 'Alle Hosts, die eine WordPress-Website aufruft, einzeln geprüft',
    lastReviewed: 'Zuletzt geprüft am',
  },
};

export function formatDate(iso: string, lang: Locale, month: 'short' | 'long' = 'short'): string {
  return new Intl.DateTimeFormat(copy[lang].dateLocale, {
    day: 'numeric',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}
