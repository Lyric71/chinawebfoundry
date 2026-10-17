---
title: "A measured hub for the WordPress in China page"
slug: upgrade-wordpress-in-china-page
description: "Work order output: a dated measurement block, corrected FAQ answers and schema, and the F6 fonts wording for /wordpress-in-china/ in four locales."
excerpt: "Five dated third-party figures go under the hero of the WordPress hub, and the passages that contradicted them are corrected. Zero new URLs."
template: upgrade
author: cyril-drouin
category: Technology
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy, two new source files and the change
     list. The publish step applies the changes to the existing files named
     below. ZERO NEW URLS. -->

# Change list

Scope: `/wordpress-in-china/` in four locales (four page files), two new
source files (the data behind the block and the component that renders it)
and one line of tooling. No route is added, no heading is renamed, no
canonical or hreflang changes.

| # | File | Line (EN / FR, ES / DE) | Action |
|---|---|---|---|
| 1 | `src/data/wordpressMeasurements.ts` | new file | The five figures, their sources and dates, `lastReviewedOn` and `reviewBy`, and the block's words in four locales |
| 2 | `src/components/pages/WordPressMeasurements.astro` | new file | Renders file 1. Server-rendered, no client JavaScript |
| 3 | all four page files | 11 to 15, 331 to 355 / 11 to 15, 332 to 356 / same | Delete the `stats` array and the stat strip; render the measurement block in the strip's place |
| 4 | all four page files | after 321 / after 322 / after 322 | Add the last-reviewed line to the hero |
| 5 | all four page files | 369 and 372 / 370 and 373 / same | Rewrite the first two paragraphs of "Why It Works" |
| 6 | all four page files | 82 | Rewrite the Fonts card |
| 7 | all four page files | 129 | Rewrite the Auto-updates card |
| 8 | all four page files | 186 and 194 | Rewrite the Elementor fonts item and the icon libraries item |
| 9 | all four page files | 928 / 929 / 929 | Rewrite the ICP box in the timeline |
| 10 | all four page files | 204 to 207, 214 to 217, 224 to 227, 229 to 232 | Rewrite four FAQ answers (and the question of the first) |
| 11 | `src/pages/wordpress-in-china.astro` | 255 to 263 | Add `inLanguage: 'en-GB'` to the FAQPage JSON-LD |
| 12 | `editorial/scripts/review-due.mjs` | the `DATASET` block | Also read `reviewBy` from file 1 |

Line numbers were read on 18 October 2026 at HEAD `c3749d2`, with the working
tree clean for all four page files. The FR, ES and DE files are line-aligned
with the English one down to line 253. Each carries one extra line, the
`inLanguage` entry of its `faqLd` (FR and ES place `faqLd` after
`accentClasses`, DE before it), so every line after 271 sits one lower in the
three locales. Change 11 adds the same line to the English file. Apply the
changes from the bottom of each file upwards so the numbers above hold, and
check them again before applying, in case another piece has touched the
files since.

New URLs created: 0. Files 1 and 2 are source files, not routes. File 12 is
a script. `src/i18n/routes.ts` is untouched: `/wordpress-in-china/` is
already registered as `/wordpress-en-chine/`, `/wordpress-en-china/` and
`/de/wordpress-in-china/`. The sitemap entry count must be identical before
and after the build.

Translation at publish: every prose change (3 to 10, and the `fr`, `es` and
`de` copy objects in file 1) goes through `/deep-translate`, three passes
each, FR then ES then DE, in the main conversation. The FR, ES and DE FAQ
JSON-LD already carry `inLanguage` (`fr-FR`, `es-ES`, `de-DE`); only the
English file lacks it. Hosts, figures, dates and source URLs live once, in
file 1, and are identical in every locale by construction.

---

# CHANGE 1. New file `src/data/wordpressMeasurements.ts`

Reason: the work order asks for four or five figures with vantage points and
dates within the first screen, in four locales. Keeping the figures in one
data file (as `src/data/chinaDependencies.ts` does for the dependency table)
means the four pages cannot drift apart, and gives the block a `reviewBy`
date that `review-due.mjs` can see. `reviewBy` is the oldest test date in the
block (GreatFire, 22 August 2026) plus 90 days.

F32 is not in the block. The work order names it, but its carrier, city and
window are still unpublished, so an F32 figure cannot name a vantage point
and a date, which is the block's own acceptance criterion. The brief is
corrected at source, and T3-01's and T3-02's "On publish" lines now add the
F32 figures to this block when their conditions are published (see the run
log of 18 October 2026).

The `fr`, `es` and `de` objects carry the same keys as `en`, written at
publish through `/deep-translate` from the English below. `dateLocale` is
`fr-FR`, `es-ES` and `de-DE`, matching `inLanguageMap` in
`src/layouts/BaseLayout.astro`.

<!-- BEGIN REPLACEMENT COPY, CHANGE 1 -->

```ts
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
 * `reviewBy` is the oldest test date plus 90 days. editorial/scripts/
 * review-due.mjs lists it, and the publish run that finds it due re-fetches
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
  // fr, es, de: same keys, translated at publish through /deep-translate.
};

export function formatDate(iso: string, lang: Locale, month: 'short' | 'long' = 'short'): string {
  return new Intl.DateTimeFormat(copy[lang].dateLocale, {
    day: 'numeric',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}
```

<!-- END REPLACEMENT COPY, CHANGE 1 -->

The comment line `// fr, es, de: ...` is an instruction for the publish step
and is replaced by the three translated objects; it never ships.

---

# CHANGE 2. New file `src/components/pages/WordPressMeasurements.astro`

Reason: one component for four pages. A `dl` per row keeps the column labels
readable to a screen reader at every width; on a narrow screen the labels
show and the rows stack, on a wide one the labels hide behind a single
header row. No horizontal scroll at 390px.

```astro
---
/**
 * The measurement block under the hero of /wordpress-in-china/ and its
 * locale pages, rendered from src/data/wordpressMeasurements.ts.
 * Server-rendered, no client JavaScript. Rows stack below 1024px.
 */
import { copy, formatDate, measurements } from '../../data/wordpressMeasurements';
import type { Locale } from '../../i18n/ui';
import { localePath } from '../../i18n/utils';

interface Props {
  lang?: Locale;
}

const { lang = 'en' } = Astro.props;
const c = copy[lang];
const label = 'text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] lg:sr-only';
---

<section class="border-y border-[var(--color-surface-border)] bg-white" aria-labelledby="wp-measured-heading">
  <div class="mx-auto max-w-[1400px] section-padding py-14 lg:py-16">
    <div class="max-w-3xl mb-10">
      <p class="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-orange-text)] mb-4">{c.eyebrow}</p>
      <h2 id="wp-measured-heading" class="text-2xl lg:text-3xl font-medium font-[var(--font-heading)] text-[var(--color-text-dark)] leading-tight">
        {c.heading}
      </h2>
      <p class="mt-4 text-base lg:text-lg text-[var(--color-text-body)] leading-relaxed">{c.intro}</p>
    </div>

    <div class="hidden lg:grid grid-cols-12 gap-6 pb-3 border-b border-[var(--color-surface-border)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]" aria-hidden="true">
      <span class="col-span-3">{c.columns.what}</span>
      <span class="col-span-3">{c.columns.result}</span>
      <span class="col-span-3">{c.columns.vantage}</span>
      <span class="col-span-1">{c.columns.date}</span>
      <span class="col-span-2">{c.columns.source}</span>
    </div>

    <div class="divide-y divide-[var(--color-surface-border)]">
      {measurements.map((m) => {
        const row = c.rows[m.id];
        return (
          <dl class="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-2 py-5">
            <div class="lg:col-span-3">
              <dt class={label}>{c.columns.what}</dt>
              <dd class="text-base font-semibold text-[var(--color-text-dark)] leading-snug">
                {row.what}
                <code class="block mt-0.5 text-sm font-normal text-[var(--color-text-muted)] break-all">{m.host}</code>
              </dd>
            </div>
            <div class="lg:col-span-3">
              <dt class={label}>{c.columns.result}</dt>
              <dd class="text-base text-[var(--color-text-dark)] leading-snug">{row.result}</dd>
            </div>
            <div class="lg:col-span-3">
              <dt class={label}>{c.columns.vantage}</dt>
              <dd class="text-[15px] text-[var(--color-text-body)] leading-snug">{row.vantage}</dd>
            </div>
            <div class="lg:col-span-1">
              <dt class={label}>{c.columns.date}</dt>
              <dd class="text-[15px] text-[var(--color-text-body)] tabular-nums"><time datetime={m.testedOn}>{formatDate(m.testedOn, lang)}</time></dd>
            </div>
            <div class="lg:col-span-2">
              <dt class={label}>{c.columns.source}</dt>
              <dd class="text-[15px]">
                <a href={m.url} rel="noopener" class="text-[var(--color-brand-orange-text)] underline-offset-4 hover:underline">{m.source}</a>
              </dd>
            </div>
            {row.note && (
              <div class="lg:col-span-12">
                <dt class="sr-only">{c.columns.note}</dt>
                <dd class="text-sm text-[var(--color-text-muted)] leading-relaxed">{row.note}</dd>
              </div>
            )}
          </dl>
        );
      })}
    </div>

    <p class="mt-6 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-3xl">{c.footnote}</p>
    <p class="mt-3 text-sm">
      <a href={localePath('/resources/china-web-guide/is-wordpress-blocked-in-china/', lang)} class="text-[var(--color-brand-orange-text)] underline-offset-4 hover:underline">{c.more}</a>
    </p>
  </div>
</section>
```

---

# CHANGE 3. The stat strip becomes the measurement block

Reason: the work order wants the block in the first screen, and the strip is
the first thing under the hero. The strip carried three figures. "43% of all
websites run on WordPress, W3Techs, 2024" is a two-year-old market share with
no date finer than the year; the other two ("20+ years", "50+ sites") are
ours and stay in the hero line, which already says them. Placing the block
here puts it inside the first 30% of the page by word count (see
"Acceptance criteria").

In each of the four page files:

1. Delete the `stats` array, lines 11 to 15.
2. Add to the imports (line 6 of each file, after `DependencyTable`):

```ts
import WordPressMeasurements from '../components/pages/WordPressMeasurements.astro';
import { copy as measuredCopy, formatDate, lastReviewedOn } from '../data/wordpressMeasurements';
```

   (with `../../` in the FR, ES and DE files).
3. Replace the `<!-- Stat strip -->` section (EN lines 331 to 355, one lower in
   FR, ES and DE) with:

```astro
  <!-- Measurement block: five dated third-party figures (T6-08) -->
  <WordPressMeasurements lang="en" />
```

   with `lang="fr"`, `lang="es"` and `lang="de"` in the three locale files.

`ScrollEffects` stays: it also drives the reveal animations elsewhere on the
page, and the counter it ran on the strip simply has nothing to count.

---

# CHANGE 4. Last-reviewed line in the hero

Reason: the work order asks for a visible last-reviewed date near the byline.
The page has no byline. The nearest equivalent is the hero line that says who
wrote it ("Twenty years on the ground..."), so the date goes directly under
it. It is a plain text line, so it renders at 390px like the line above it.

Insert after the hero's `mt-4 text-base text-white/45` paragraph (EN line 321,
FR, ES and DE line 322):

```astro
          <p class="mt-3 text-sm text-white/45">
            {measuredCopy.en.lastReviewed} <time datetime={lastReviewedOn}>{formatDate(lastReviewedOn, 'en', 'long')}</time>
          </p>
```

with `fr`, `es` and `de` in the three locale files. In English it renders
"Last reviewed 18 October 2026".

---

# CHANGE 5. "Why It Works", first two paragraphs

Reason: the first paragraph says wordpress.org "all works the same on a
Shanghai server as on a London one". F8: WordPress.org rate-limits Chinese
network sources and answers them with HTTP 429 (Meta Trac #5106, 21 March
2020), which the new block now prints a screen above. The second paragraph
says libraries "pull from blocked CDNs", which F7 shows is wrong for the
category: jsDelivr, cdnjs and unpkg read reachable, and the fatal one is
Google Hosted Libraries.

REMOVE (line 369):

```
WordPress runs in China. Core, wordpress.org, the standard publishing workflow: it all works the same on a Shanghai server as on a London one, and wp-admin is reachable without a VPN.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 5A -->

WordPress runs in China. Core installs on a Shanghai server exactly as it
does on a London one. Your editors reach wp-admin without a VPN, and the
publishing workflow doesn’t change.

<!-- END REPLACEMENT COPY, CHANGE 5A -->

REMOVE (line 372):

```
The problem is what it depends on by default. Themes load Google Fonts. Plugins call APIs outside the Firewall. Libraries pull from blocked CDNs. Embeds point at YouTube. Analytics call Google.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 5B -->

The problem is what it depends on by default. Themes load Google Fonts, and
plenty still pull jQuery from Google Hosted Libraries. Plugins call APIs
outside the Firewall. Embeds point at YouTube, analytics at Google. Even
updates stall, because wordpress.org rate-limits some Chinese networks.

<!-- END REPLACEMENT COPY, CHANGE 5B -->

The third paragraph ("Strip those out...") stays as it is.

---

# CHANGE 6. The Fonts card, line 82

Reason: "Google Fonts don’t load" is the flat claim the Do Not Assert list
bars (F6). The child article `is-wordpress-blocked-in-china` says, since
T6-02: "Google Fonts resolves from mainland datacentres and often doesn't
resolve on consumer connections." This card now says the same thing, and
the block above it prints both measurements.

REMOVE:

```
body: 'Google Fonts don’t load. We self-host, or swap in Chinese-compatible alternatives that ship Latin and CJK glyphs in one file.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 6 -->

From a mainland datacentre, Google Fonts answers. On home broadband it often
goes silent. We self-host the files, or swap in Chinese-compatible
alternatives that ship Latin and CJK glyphs in one file.

<!-- END REPLACEMENT COPY, CHANGE 6 -->

---

# CHANGE 7. The Auto-updates card, line 129

Reason: "phone home to wordpress.org and frequently time out" describes the
symptom as a timeout. F8: the server answers, with HTTP 429.

REMOVE:

```
body: 'Core and plugins phone home to wordpress.org and frequently time out from inside China. We route updates through a proxy or schedule manual update windows.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 7 -->

WordPress.org rate-limits some Chinese networks and answers them with HTTP
429 errors, so updates stall and nothing on screen says why. We route updates
through a proxy or schedule manual update windows.

<!-- END REPLACEMENT COPY, CHANGE 7 -->

---

# CHANGE 8. Two Elementor items, lines 186 and 194

Reason, line 186: "Google Fonts by default, which don’t resolve in China" is
the same flat claim as change 6 (F6). F10 adds what most teams miss: the
Elementor editor registers Roboto from `fonts.googleapis.com` with no
condition, so switching the Google Fonts setting off does not stop the editor
calling Google.

Reason, line 194: "External assets get rerouted to load locally" implies
Elementor loads its icon fonts from a CDN. F10: Font Awesome and eicons ship
bundled with Elementor. The external assets come from add-on packs and
themes.

REMOVE (line 186):

```
body: 'Elementor pulls Google Fonts by default, which don’t resolve in China. We self-host them or swap in Chinese-compatible alternatives.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 8A -->

Elementor loads Google Fonts by default, and its editor still asks Google for
Roboto after that setting is switched off. From a mainland datacentre that
host answers; over home connections it frequently doesn’t. So we self-host the
fonts or swap in Chinese-compatible alternatives.

<!-- END REPLACEMENT COPY, CHANGE 8A -->

REMOVE (line 194):

```
body: 'External assets get rerouted to load locally from the Chinese server.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 8B -->

Elementor bundles Font Awesome and its own eicons. Add-on packs and themes
often don’t, so we move every outside asset onto the Chinese server.

<!-- END REPLACEMENT COPY, CHANGE 8B -->

The label "Icon libraries and CDNs" stays.

---

# CHANGE 9. The ICP box in the timeline, line 928

Reason: "Twenty business days minimum at the provincial level" turns the top
of Alibaba Cloud's published range into a floor. F26: Alibaba Cloud (阿里云)
quotes 1 to 2 working days for its own check, then generally 1 to 20 working
days at the provincial Communications Administration (help centre page, last
modified 26 August 2026, re-read on 18 October 2026).

REMOVE:

```
Twenty business days minimum at the provincial level, sometimes longer. We start the filing on day one so it never blocks launch.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 9 -->

Alibaba Cloud (阿里云) quotes 1 to 2 working days for its own check, then
generally 1 to 20 working days at the provincial Communications
Administration (help centre, updated 26 August 2026). We start the filing on
day one so it never blocks launch.

<!-- END REPLACEMENT COPY, CHANGE 9 -->

The heading "ICP filing runs in parallel" stays.

---

# CHANGE 10. Four FAQ answers

Reason: every answer here is also a schema answer, so a wrong answer is
published twice. The `faqs` array feeds both the visible accordion
(`<p>{faq.answer}</p>`) and `faqLd`, so visible copy and schema stay verbatim
by construction. The ten `id` values are unchanged; no anchor moves.

## 10A. `wp-icp`, lines 204 to 207

Reason: the question and the answer call the filing a "licence", which the
brand vocabulary bars ("ICP" for both). "Baidu will treat it as foreign" is a
ranking claim on the Do Not Assert list. "Measurably slower" names no
measurement. Alibaba Cloud's filing page (26 August 2026) says a site on its
Hong Kong or overseas servers needs no filing ("用阿里云香港、海外服务器？--
无需备案"), and F9 that the filing is made through the provider whose server
hosts the site.

REMOVE:

```
question: 'Does our WordPress site need an ICP licence to work in China?',
answer: 'If it’s hosted in mainland China, yes. If you host in Hong Kong, no, but the site will be measurably slower and Baidu will treat it as foreign. For most foreign brands serious about the Chinese market, the ICP filing is worth doing.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10A -->

**Does our WordPress site need an ICP filing to work in China?**

If it’s hosted on a server in mainland China, yes. The ICP filing (ICP备案) is
made through the provider whose server hosts the site, and it has to clear
before the site goes live. A site on a Hong Kong or overseas server has
nothing to file, but every mainland visit then crosses the border. An ICP licence
(ICP许可证) is a separate permit, needed by sites that charge users for
information or online services, and we check in the audit whether yours
does.

<!-- END REPLACEMENT COPY, CHANGE 10A -->

## 10B. `wp-vs-astro-speed`, lines 214 to 217

Reason: "In raw load time, yes, all things equal" states as fact that static
beats WordPress in China. The Do Not Assert list bars it while no published
benchmark exists; the brief for A11 says argue from request topology instead.

REMOVE:

```
answer: 'In raw load time, yes, all things equal. WordPress is dynamic, Astro is static. In practice though, a well-tuned WordPress site on Aliyun with the right caching layer hits page speed targets that satisfy both Chinese users and Baidu. The difference matters more for some projects than others.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10B -->

No published benchmark compares the two in China, so we won’t quote a
number. The difference is in how a page gets built. Astro ships finished
HTML files. WordPress builds each page in PHP from a database unless a page
cache answers first, and on a tuned mainland server it usually does. Most of
the delay in China comes from the outside hosts the theme and plugins call,
and clearing those is the same job on either stack.

<!-- END REPLACEMENT COPY, CHANGE 10B -->

## 10C. `wp-auto-updates`, lines 224 to 227

Reason: "slow or unreachable" contradicts F8 and the block above it: the
server answers, with HTTP 429.

REMOVE:

```
answer: 'They often fail or time out from inside China because the wordpress.org repository is slow or unreachable on Chinese networks. We configure update routing through a proxy or run scheduled manual update windows. Either way, your team shouldn’t have to think about it day to day.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10C -->

They often fail. WordPress.org rate-limits some Chinese networks, which get
HTTP 429 errors back; its staff said so on the project’s Meta Trac on
21 March 2020. The dashboard doesn’t warn you. It simply stops offering
updates. We route updates through a proxy or run scheduled manual update
windows, so your team shouldn’t have to think about it day to day.

<!-- END REPLACEMENT COPY, CHANGE 10C -->

## 10D. `wp-multilingual`, lines 229 to 232

Reason: "both work well in China" reads as covering WPML's automatic
translation, a cloud service the Do Not Assert list bars any claim about,
either way. The answer now says what is checked: Polylang 3.8.7 makes no
outside call when it serves a page (F12; its remote calls, read in the 3.8.7
source on 18 October 2026, are all admin-side). It says nothing about WPML's
cloud hosts, whose names appear only in WPML support-forum threads, with no
dated documentation page behind them. "We have used both extensively" goes:
it is the agency talking about itself.

REMOVE:

```
answer: 'Yes, both work well in China once the rest of the site is cleaned up. WPML is the more common choice for sites with three or more languages and complex translation workflows. Polylang is lighter and works fine for two or three languages. We have used both extensively. The choice depends more on your editorial process than on China-specific concerns.',
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10D -->

Yes. Polylang 3.8.7 makes no outside calls when it serves a page, so it
behaves the same on a mainland server as anywhere else. WPML suits three or
more languages and heavy translation work. For two or three, Polylang is
the lighter install. The choice comes down to your editorial process.

<!-- END REPLACEMENT COPY, CHANGE 10D -->

In the page file each answer is one single-quoted string on one line, with
curly apostrophes (’) as the file already uses, and the bold question line in
10A becomes the `question` value without the asterisks.

---

# CHANGE 11. `inLanguage` on the English FAQ JSON-LD, lines 255 to 263

Reason: acceptance criterion 3. The French, Spanish and German files already
set `inLanguage` to `fr-FR`, `es-ES` and `de-DE`, the values
`BaseLayout.astro` uses for the page itself. The English file sets none.

INSERT after `'@type': 'FAQPage',`:

```ts
  inLanguage: 'en-GB',
```

---

# CHANGE 12. `editorial/scripts/review-due.mjs`

Reason: file 1 carries a `reviewBy` date, and without this change no script
reads it. Replace the `DATASET` block with:

```js
const DATASETS = [
  ['src/data/chinaDependencies.ts', 'dependency table, all four great-firewall-what-it-blocks files'],
  ['src/data/wordpressMeasurements.ts', 'measurement block, /wordpress-in-china/ in all four locales'],
];
for (const [file, label] of DATASETS) {
  if (!existsSync(file)) continue;
  const m = readFileSync(file, 'utf8').match(/export const reviewBy\s*=\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  if (m) items.push({ what: `${file} (${label})`, reviewBy: m[1] });
}
```

and change the header comment's second bullet to name both data files. When
the date comes due, the publish run re-fetches every source in file 1,
updates or cuts the row in all four locales (the figures sit in one place),
and moves `lastReviewedOn` and `reviewBy`.

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| The measurement block appears within the first 30% of the page by word count | PASS. Counted on the English page as it will render, outside the dependency table's cells: hero 54 words (with the last-reviewed line), then the block, about 267 rendered words. The block starts at word 55 of about 2,430 (2%) and ends near word 321 (13%). Counting the dependency table's cells as well only lowers both shares |
| Every figure in the block names a vantage point and a date | PASS. Five rows, each with a "Seen from" cell and a dated `time` element. GreatFire names no network, and the row says "GreatFire test from mainland China" and the footnote says so plainly. The WordPress.org row is a vendor statement and names the networks in WordPress.org's own words |
| FAQ JSON-LD validates with zero errors in all four locales, `inLanguage` matching each locale | PASS ON PUBLISH. Shape unchanged (FAQPage, ten Question and Answer pairs); change 11 adds `en-GB`; FR, ES and DE already carry their locale. Validate the built HTML of all four pages in the publish run |
| Every schema answer appears verbatim in visible copy | PASS BY CONSTRUCTION. One `faqs` array feeds both the accordion and `faqLd` |
| Google Fonts treatment matches `is-wordpress-blocked-in-china`, side by side | PASS. Same pair: 72 of 72 at 111ms from Alibaba Cloud cn-zhangjiakou, 28 August 2026; 0 of 54 from a Beijing China Mobile home line, 30 August 2026; same conditional wording ("answers a datacentre... often goes silent on home broadband" against "resolves from mainland datacentres and often doesn't resolve on consumer connections"). No flat version remains (changes 6 and 8A) |
| A visible last-reviewed date renders on mobile at 390px | PASS ON PUBLISH. Plain text line under the hero copy (change 4). Check at 390px in the publish run |
| Canonical and hreflang for the four locale versions unchanged | PASS. No change to `PageLayout` props, routes or `alternateUrls` |
| Grep for fragment links before touching an H2 (risk note) | PASS. `grep` for `wordpress-in-china/#`, `wordpress-en-chine/#` and `wordpress-en-china/#` across `src/` and `editorial/PLAN.md`: zero hits. No H2 is renamed; the block adds one H2 |
| Zero new URLs | PASS |

---

# Word count

Replacement copy only, English, counted by script after the 18-pass quality
loop (18 October 2026).

| Passage | Words |
|---|---|
| Change 1, block copy (eyebrow, heading, intro, five rows, notes, footnote, guide link, column labels, hero label) | 242 |
| Change 5, two paragraphs | 75 |
| Change 6, Fonts card | 32 |
| Change 7, Auto-updates card | 32 |
| Change 8, two Elementor items | 67 |
| Change 9, ICP box | 43 |
| Change 10, four FAQ answers and one question | 285 |
| Total | 776 |

The removed copy (the stat strip, five card and item bodies, two paragraphs,
the ICP box, one question and four answers) comes to 396 words, so the
English page grows by about 380 words, to about 2,430 outside the dependency
table's cells. No word target applies to a T6 upgrade.

<!-- FEATURE IMAGE
None. T6 skips step 3 unless the work order asks for an image, and T6-08
does not. The page keeps its live hero, /images/hero-wordpress-china-skyline.webp.
-->

<!-- SCHEMA
Type: FAQPage (existing, ten questions, now with inLanguage on every locale) plus the sitewide Organization, WebSite and BreadcrumbList from BaseLayout (unchanged)
FAQPage: yes, 10 questions (unchanged count; four answers and one question rewritten in change 10)
Breadcrumb: Home > WordPress (unchanged)
Author: none on the page (an .astro page with no author field); the output is drafted under cyril-drouin
datePublished: unchanged. Last reviewed 2026-10-18, rendered visibly in the hero
Measurement: 21YunBox, Alibaba Cloud cn-zhangjiakou 28 August 2026 and Beijing China Mobile home line 30 August 2026; GreatFire 22 and 31 August 2026; WordPress.org Meta Trac #5106, 21 March 2020
-->

<!-- ASSET BRIEF
TABLES: one, the measurement block (change 1), five rows, built from
src/data/wordpressMeasurements.ts; sources in
editorial/sources/verified-sources.md, T6-08 entries of 18 October 2026
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS: one new, inside the block, under the footnote:
Every host a WordPress site calls, checked one by one ->
/resources/china-web-guide/is-wordpress-blocked-in-china/ (built with
localePath, so FR, ES and DE get wordpress-bloque-en-chine,
wordpress-bloqueado-en-china and ist-wordpress-in-china-gesperrt). The hub
had no link down to its own child article. The block also links out to its
five sources (21YunBox study twice, GreatFire twice, Meta Trac #5106).
Existing links on the page (/services/strategy-audit/, /contact/, /astro/)
stay
LOCALIZED SLUGS: already registered. fr wordpress-en-chine · es
wordpress-en-china · de wordpress-in-china
CLIENT SIGN-OFF ON RECORD: none needed. No client is named and no client
figure is used (F32 left out, see change 1)
LINK SUBSTITUTIONS: none
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
fonts.googleapis.com, 21YunBox, Alibaba Cloud cn-zhangjiakou, 2026-08-28
fonts.googleapis.com, 21YunBox, Beijing China Mobile home line, 2026-08-30
ajax.googleapis.com, GreatFire, mainland test (network not named), 2026-08-22
developers.google.com/speed/libraries, 21YunBox, Alibaba Cloud cn-zhangjiakou, 2026-08-28 (row note)
secure.gravatar.com, GreatFire, mainland test (network not named), 2026-08-31
REVIEW: reviewBy 2026-11-20 in src/data/wordpressMeasurements.ts, read by
editorial/scripts/review-due.mjs after change 12
-->
