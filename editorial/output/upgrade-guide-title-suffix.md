---
title: "Strip the guide title suffix at the template level"
slug: upgrade-guide-title-suffix
description: "One line in the guide layout adds 36 to 41 characters to every guide title. Here is the change, the build gate and the 47 titles to cut."
excerpt: "Every guide article renders a title over the house ceiling. One layout line causes most of it. Here is the fix, in four locales."
template: upgrade
author: cyril-drouin
category: Search
---

<!-- HERO SECTION -->

Strip the guide title suffix at the template level

<!-- INTRODUCTION -->

All 132 guide article pages render a `<title>` over the 52-character house
ceiling. Not most of them. All of them, in English, French, Spanish and
German. One line in `src/layouts/GuideLayout.astro` appends 36 to 41
characters of site name to every title before it reaches the page, and 47 of
the 132 titles would still be over the ceiling with that line gone. This work
order removes the line, adds a build gate so the ceiling holds by itself, and
supplies the 47 replacement titles.

Zero new URLs. Nothing here adds, removes or renames a page.

<!-- SECTION: What we measured -->

## What we measured

We counted every guide title in the repository twice on 10 September 2026.

Pass one read the YAML `title` of all 132 markdown files across
`src/content/guides`, `guides-fr`, `guides-es` and `guides-de`, then appended
the suffix each locale renders. The suffix is built from `guide.backLink` in
`src/i18n/ui.ts` and a literal in the guide layout, so it differs by locale.
Pass two parsed `<title>` out of the built HTML in `.vercel/output/static/`,
which is where the Vercel adapter writes a static build. Both passes found 132
article pages and both found 132 over the ceiling.

> ChinaWebFoundry title audit, 10 September 2026, working tree at commit
> `28bf5de`. 132 guide article pages across four locales. 132 render a
> `<title>` longer than 52 characters. The longest is 120 characters, on the
> French ICP article. Method: character count of the frontmatter `title` plus
> the locale suffix, confirmed against the `<title>` element in the built
> output.
> Source: ChinaWebFoundry measurement, 10 September 2026.

| Locale | Article pages | Suffix length | Rendered title, shortest | Median | Longest | Over 52 after the suffix goes |
|---|---|---|---|---|---|---|
| en | 33 | 36 | 62 | 81 | 104 | 6 |
| fr | 33 | 41 | 71 | 93 | 120 | 14 |
| es | 33 | 41 | 71 | 93 | 111 | 15 |
| de | 33 | 40 | 66 | 91 | 116 | 12 |

The brief says 30 articles per locale and 120 pages. The repository has 33 and
132, with the same 33 content ids in all four collections. The brief also
puts the English suffix at 35 characters. It is 36. Both numbers in `PLAN.md`
need correcting; the counted values are used throughout this document.

<!-- SECTION: What a title is actually for -->

## What a title is actually for

Google builds the title link on the results page itself, and the HTML `<title>`
is one input among several.

> "Google's generation of title links on the Google Search results page is
> completely automated and takes into account both the content of a page and
> references to it that appear on the web." The same page adds that where a
> problem is detected, "we may try to generate an improved title link from
> anchors, on-page text, or other sources", and that while there is no limit
> on how long a `<title>` element can be, "the title link is truncated in
> Google Search results as needed, typically to fit the device width".
> Source: Google Search Central, Control your title links in Google Search
> results, last updated 10 December 2025.
> https://developers.google.com/search/docs/appearance/title-link

So there is no documented character limit to hit. What there is instead is a
finite amount of room on a phone, and an automated system that reads the title
you wrote and decides whether to use it. The 52-character house ceiling is our
number, chosen so the whole title survives on a narrow screen. Google's own
advice is about what the words do, and the suffix fails that test on every
page:

> "It's important to have distinct text that describes the content of the page
> in the `<title>` element for each page on your site."
> Source: Google Search Central, Control your title links in Google Search
> results, last updated 10 December 2025.
> https://developers.google.com/search/docs/appearance/title-link

`| China Web Guide | ChinaWebFoundry` is identical on 33 pages. It describes
none of them. And the brand half of it is redundant in the result anyway,
because Google already prints the site name next to the listing.

> "When Google lists a page in search results, it shows the name of the site
> the page comes from. This is called the site name."
> Source: Google Search Central, Site names in Google Search results, last
> updated 10 December 2025.
> https://developers.google.com/search/docs/appearance/site-names

There is a second reader worth naming. Answer engines pull passages out of a
page rather than ranking the page whole, and the `<title>` in the served HTML
is what a crawler that does not execute JavaScript sees first. Astro ships
static HTML, so ours is there. Right now the first 36 to 41 characters of it
are boilerplate.

<!-- SECTION: The one line -->

## The one line

`src/layouts/GuideLayout.astro`, in the `PageLayout` call near the bottom of
the frontmatter block:

```
title={`${title} | ${t('guide.backLink')} | ChinaWebFoundry`}
```

becomes:

```
title={pageTitle}
```

with `pageTitle` computed in the same file's frontmatter, and checked there.
Full replacement, to be inserted just above the `articleLd` constant:

```
// House ceiling: a guide article renders exactly the frontmatter title, with
// no site suffix. Google prints the site name next to the result already, so
// spending 36 to 41 characters repeating it truncates the half of the title
// that tells two guides apart. See editorial/briefs/2026-09-10-upgrade-guide-title-suffix.md.
const TITLE_CEILING = 52;
const pageTitle = title;
if (pageTitle.length > TITLE_CEILING) {
  throw new Error(
    `Guide title over the ${TITLE_CEILING}-character ceiling: ` +
      `${pageTitle.length} characters at ${Astro.url.pathname}. ` +
      `Shorten "title" in the guide's frontmatter.`,
  );
}
```

Four things move with that one line, and all four move correctly.
`BaseLayout.astro` reads a single `title` prop for the `<title>` element,
`og:title` and `twitter:title`, so the three stay identical to each other
without anything else being touched. Breadcrumb position 3 and
`Article.headline` in the guide layout already read the unsuffixed `title`,
so neither changes when the suffix goes.

The suffix stays where it is on the home page and the top-level service pages.
Those titles are short and the site name earns its room there. Only
`GuideLayout.astro` changes.

<!-- SECTION: The build gate -->

## The build gate

The check in the layout fails the build the moment a long title renders. That
is the gate the brief asks for, and it costs one `if`.

A second check runs over the built output, because the layout check cannot see
two things: a guide page rendered by something other than this layout, and the
gap between the characters in the frontmatter and the characters in the HTML.
That gap is real. Astro escapes an apostrophe to `&#39;`, so the French ICP
title measures 124 characters in the raw HTML and 120 as a reader sees it. A
naive script would fail a page that passes. (We found this by running both
passes and watching them disagree by exactly 4.)

New file, `scripts/check-titles.mjs`:

```
#!/usr/bin/env node
/**
 * Guide title guard.
 *
 * House ceiling: a guide article <title> is at most 52 characters. The guide
 * layout enforces it at render time; this walks the built output as well,
 * because the layout cannot see a page rendered by a different layout.
 *
 * HTML entities are decoded before counting. Astro escapes an apostrophe to
 * &#39;, which is 4 characters longer than the character a reader sees.
 *
 *   node scripts/check-titles.mjs
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CEILING = 52;

// The adapter writes a static build here; dist/ is the fallback for a plain
// `astro build` without the Vercel adapter.
const OUT = ['.vercel/output/static', 'dist'].find(existsSync);

const GUIDE_DIRS = {
  en: 'resources/china-web-guide',
  fr: 'fr/ressources/guide-web-chine',
  es: 'es/recursos/guia-web-china',
  de: 'de/ressourcen/china-web-leitfaden',
};

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

if (!OUT) {
  console.error('[check-titles] No build output found. Run the build first.');
  process.exit(1);
}

const failures = [];
let checked = 0;

for (const [locale, dir] of Object.entries(GUIDE_DIRS)) {
  const root = join(OUT, dir);
  if (!existsSync(root)) {
    console.error(`[check-titles] Missing guide directory for ${locale}: ${root}`);
    process.exit(1);
  }
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue; // the index page is not an article
    const file = join(root, entry.name, 'index.html');
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    const raw = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    if (raw === undefined) {
      failures.push({ locale, slug: entry.name, length: 0, title: '(no <title> element)' });
      continue;
    }
    const title = decode(raw);
    checked++;
    if (title.length > CEILING) {
      failures.push({ locale, slug: entry.name, length: title.length, title });
    }
    if (/China Web Guide|Guide du web chinois|Guía de la web china|China-Web-Leitfaden/.test(title)) {
      failures.push({ locale, slug: entry.name, length: title.length, title: `suffix still present: ${title}` });
    }
  }
}

if (failures.length) {
  console.error(`\n[check-titles] ${failures.length} guide title(s) failed, ${checked} checked.\n`);
  for (const f of failures) {
    console.error(`  ${f.locale}  ${String(f.length).padStart(3)}  ${f.slug}`);
    console.error(`        ${f.title}`);
  }
  console.error(`\nCeiling is ${CEILING} characters. Shorten "title" in the guide's frontmatter.\n`);
  process.exit(1);
}

console.log(`[check-titles] ${checked} guide titles, all within ${CEILING} characters.`);
```

Wire it into `scripts/build.mjs` so it runs on every build, and into
`package.json` so it can be run on its own:

```
"check:titles": "node scripts/check-titles.mjs",
```

In `build.mjs`, after `spawnSync('astro', ['build'], ...)` returns 0 and
before the `finally` releases the lock, run the script and adopt its exit
code. Both the pre-push hook and the Vercel build call `npm run build`, so a
long title fails locally before it can fail a deployment.

<!-- SECTION: The 47 titles that still miss -->

## The 47 titles that still miss

Removing the suffix fixes 85 of the 132 pages. The other 47 were written to
read well with the suffix attached, and they are long on their own. Every
replacement below is counted, not estimated. English keeps title case, because
all 33 live English titles use it. The other three keep sentence case, because
they already do.

**English, 6 titles**

| Content id | New title | Chars |
|---|---|---|
| china-content-marketing-strategy | Content Marketing in China: Planting Grass | 42 |
| china-data-privacy-pipl-dsl | China Data Privacy: PIPL, DSL and Cybersecurity | 47 |
| china-website-hosting-guide | Website Hosting in China: Where the Server Sits | 47 |
| great-firewall-what-it-blocks | The Great Firewall: What It Blocks and How to Cope | 50 |
| icp-licence-filing-foreign-companies | ICP Licence and ICP Filing for Foreign Firms | 44 |
| mobile-first-design-china | Mobile-First Design in China Means Mobile-Only | 46 |

**French, 14 titles**

| Content id | New title | Chars |
|---|---|---|
| baidu-account-foreign-company | Ouvrir un compte Baidu depuis l'étranger | 40 |
| baidu-fast-inclusion-gone | L'indexation rapide de Baidu a disparu. Et après ? | 50 |
| baidu-index-traffic-data | Lire l'index et le trafic dans Baidu | 36 |
| baidu-keyword-research-tools | Mots-clés Baidu : les outils et la méthode | 42 |
| baidu-product-data-destinations | Baidu DPA : où vont vos données produit | 39 |
| baidu-seo-ranking-in-china | SEO Baidu : exister sur le premier moteur chinois | 49 |
| baidu-verification-failed | Échec de la vérification Baidu : les causes | 43 |
| china-content-marketing-strategy | Marketing de contenu en Chine : semer d'abord | 45 |
| china-data-privacy-pipl-dsl | Données personnelles en Chine : PIPL et DSL | 43 |
| china-website-hosting-guide | Hébergement web en Chine : le serveur décide tout | 49 |
| china-website-localisation | Localiser un site pour la Chine : tout refaire | 46 |
| great-firewall-what-it-blocks | Grand Pare-feu : ce qu'il bloque, et la parade | 46 |
| icp-licence-filing-foreign-companies | Licence ICP et Bei'an pour entreprises étrangères | 49 |
| mobile-first-design-china | En Chine, le mobile-first devient du mobile-only | 48 |

**Spanish, 15 titles**

| Content id | New title | Chars |
|---|---|---|
| baidu-account-foreign-company | Abrir una cuenta de Baidu desde el extranjero | 45 |
| baidu-fast-inclusion-gone | Baidu retiró la inclusión rápida: qué la sustituyó | 50 |
| baidu-index-traffic-data | Leer el índice y el tráfico en Baidu | 36 |
| baidu-keyword-research-tools | Palabras clave en Baidu: herramientas y método | 46 |
| baidu-product-data-destinations | Baidu DPA: adónde van los datos de su feed | 42 |
| baidu-verification-failed | Verificación de Baidu fallida: causas habituales | 48 |
| baiduspider-firewall | Baiduspider bloqueado por Cloudflare y el WAF | 45 |
| china-content-marketing-strategy | Marketing de contenidos en China: sembrar antes | 47 |
| china-data-privacy-pipl-dsl | Datos personales en China: PIPL y DSL | 37 |
| china-website-hosting-guide | Alojamiento web en China: manda el servidor | 43 |
| china-website-localisation | Localizar un sitio para China: reconstruirlo entero | 51 |
| great-firewall-what-it-blocks | El Gran Cortafuegos: qué bloquea y cómo sortearlo | 49 |
| icp-licence-filing-foreign-companies | Licencia ICP y Bei'an para empresas extranjeras | 47 |
| mobile-first-design-china | Diseño móvil en China: mobile-first se queda corto | 50 |
| submitting-urls-to-baidu | Enviar un sitio a Baidu: push, sitemap o manual | 47 |

**German, 12 titles**

| Content id | New title | Chars |
|---|---|---|
| baidu-fast-inclusion-gone | Baidus Schnellindexierung ist weg. Was nun folgt | 48 |
| baidu-seo-ranking-in-china | Baidu-SEO: ganz oben in Chinas Suchmaschine | 43 |
| baidu-verification-failed | Baidu-Verifizierung schlägt fehl: die Ursachen | 46 |
| china-content-marketing-strategy | Content-Marketing in China: erst Gras säen | 42 |
| china-data-privacy-pipl-dsl | Datenschutzrecht in China: PIPL und DSL | 39 |
| china-website-hosting-guide | Website-Hosting in China: der Standort entscheidet | 50 |
| china-website-localisation | Website-Lokalisierung für China: ein Neubau | 43 |
| google-analytics-china | Google Analytics in China, ohne Tempoverlust | 44 |
| great-firewall-what-it-blocks | Die Große Firewall: was sie sperrt, was hilft | 45 |
| host-website-in-china | Eine Website in China hosten: der Leitfaden | 43 |
| icp-licence-filing-foreign-companies | ICP-Lizenz und Bei'an für ausländische Firmen | 45 |
| mobile-first-design-china | Mobile-First für China heißt Mobile-only | 40 |

The French, Spanish and German titles above are replacement copy in a
localised file. They go through `/deep-translate`, three passes each, French
then Spanish then German, in the main conversation, before the publish commit.
The counts have to be rechecked after that: a pass that improves a line can
push it past 52, and the build gate will say so.

<!-- SECTION: The change list -->

## The change list

Every file and passage this work order touches.

| File | Passage | Change |
|---|---|---|
| `src/layouts/GuideLayout.astro` | the `PageLayout` opening tag, `title` prop | Replace the template literal with `pageTitle` |
| `src/layouts/GuideLayout.astro` | frontmatter, above `const articleLd` | Add `TITLE_CEILING`, `pageTitle` and the length check |
| `scripts/check-titles.mjs` | whole file | New file, listed above |
| `scripts/build.mjs` | after the `astro build` call returns 0 | Run `check-titles.mjs`, adopt its exit code |
| `package.json` | `scripts` block | Add `"check:titles": "node scripts/check-titles.mjs"` |
| `src/content/guides/*.md` | `title` in frontmatter, 6 files | Replace per the English table |
| `src/content/guides-fr/*.md` | `title` in frontmatter, 14 files | Replace per the French table, after `/deep-translate` |
| `src/content/guides-es/*.md` | `title` in frontmatter, 15 files | Replace per the Spanish table, after `/deep-translate` |
| `src/content/guides-de/*.md` | `title` in frontmatter, 12 files | Replace per the German table, after `/deep-translate` |

Fifty-two files. Nothing else.

`src/i18n/ui.ts` is not on the list. `guide.backLink` still labels the
back-link and the breadcrumb on every guide page, so all four strings stay
exactly as they are.

<!-- SECTION: What must not move -->

## What must not move

Six things to verify before the commit, in the order they are quickest to
check.

**URLs.** Zero added, zero removed, zero renamed. A title is not a slug in
this collection; the route reads the content id and `guideSlugs`, never the
title.

**The sitemap.** Count `<url>` entries in the generated sitemap before the
change and after. The two numbers are equal or the work order was built
wrong. 132 guide article URLs on each side.

**Canonicals and hreflang.** Untouched. Both are computed from the path in
`BaseLayout.astro` and no path changes.

**`og:title` and `twitter:title`.** Both read the same `title` prop as the
`<title>` element, one variable, in `BaseLayout.astro`. They match by
construction. Spot check five articles per locale anyway, because a
structural guarantee that nobody has looked at is a guarantee nobody has
looked at.

**Breadcrumb JSON-LD.** Here the brief's acceptance list needs correcting.
It asks for breadcrumb `name` values unchanged, and in the same list asks for
every title under 52 characters. Those two cannot both hold: the guide layout
builds breadcrumb position 3 from the same `title` the frontmatter carries, so
a shortened title shortens the breadcrumb. The criterion that can be met, and
should replace it:

- Positions 1 and 2 unchanged on all 132 pages.
- Position 3 unchanged on the 85 pages whose title is not rewritten.
- Position 3 and `Article.headline` change in step with the new title on the
  47 that are.

**The visible H1.** The layout renders the H1 from the same `title` value, so
47 pages get a new headline on screen. The brief describes this work as a
metadata change. It is also a copy change on 47 pages, and the French, Spanish
and German ones are the reason the deep-translate passes are not optional.

<!-- SECTION: Out of scope -->

## Out of scope

Three defects surfaced while counting titles. None is fixed here. Two of them
would change a URL, which a T6 forbids outright.

`GuideLayout.astro` carries its own `inLanguageMap` and `updatedLabelMap`, and
neither has a German entry. On the 33 German guide pages, `Article.inLanguage`
drops out of the JSON-LD and the published date is formatted with whatever
locale the build machine defaults to. `BaseLayout.astro` has the full
four-locale map, so the gap is local to the guide layout. It deserves its own
work order, and it is a two-line fix.

`woocommerce-china-store-guide` has no entry in `guideSlugs`, so it publishes
under its English slug on all three localised paths. `SPEC.md` calls that a
failed publish. Correcting it changes three live URLs and needs redirects.

`guide.needHelpText` names WordPress on every guide page in every locale,
which sits against the stack-neutrality rule. It is one shared string in four
languages, so it is a copy work order.

<!-- SECTION: Acceptance -->

## Acceptance

Run these in order after the change, before the commit.

| # | Check | Passes when |
|---|---|---|
| 1 | View source on any guide article, any locale | `<title>` contains no ` \| China Web Guide` substring, and no localised equivalent |
| 2 | `npm run check:titles` over the built output | 132 checked, 0 failures, all four locales |
| 3 | Five articles per locale, spot checked | `<title>`, `og:title` and `twitter:title` are the same string |
| 4 | Commit a test article with a 60-character title | Build fails, with the path and the count in the message. Shorten it, build passes. Do not keep the test article |
| 5 | Breadcrumb JSON-LD | Positions 1 and 2 unchanged everywhere; position 3 unchanged on the 85 untouched pages, and matching the new title on the 47 rewritten ones |
| 6 | Sitemap `<url>` count, before and after | Identical |
| 7 | Search Console | Annotation added on the deploy date, so the impression movement across 132 titles is not misread later |

Check 7 is the one that gets forgotten. A hundred and thirty-two titles
changing at once will move impressions for two to four weeks, and without a
note on the date somebody will spend a morning in November looking for a
different cause.

<!-- CTA -->

CTA: Book a call

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

NO IMAGE IS GENERATED FOR THIS PIECE.

T6 upgrades skip the image step unless the work order asks for one, and
T6-01 is a template change applied to pages that already have their own hero
images. Nothing was written to public/images/ and gpt-image-2 was not called.
The schedule row moves from quality_passed straight to image_ready with
"no image" noted, per the status table in editorial/SPEC.md.

The iteration 13 concepts are kept below so a later run does not repeat the
work if an image is ever wanted for this page.

FIVE VISUAL CONCEPTS CONSIDERED
1. A laptop in a Shanghai co-working space with a browser inspector open on a
   guide page, the <title> element highlighted and running off the edge of the
   panel.
2. A phone held in one hand on a Shenzhen metro platform, a search results
   page on screen, three listings in a row ending in the same truncated
   boilerplate.
3. A Hangzhou desk with two monitors, one showing a terminal mid-build with a
   failed title check in red, the other showing the markdown frontmatter it
   points at.
4. A printed contact sheet of 132 page titles on a Guangzhou office wall, half
   of them ringed in marker.
5. A Chengdu apartment desk at night, a text editor open on four markdown
   files side by side in four languages, character counts visible in the
   status bar.

IMAGE PROMPT (use verbatim, if an image is ever needed)

Candid handheld photograph taken over the shoulder of a Chinese web developer
in her early thirties sitting at a cluttered desk on the sixth floor of a
co-working building in Shanghai on an overcast weekday afternoon, her laptop
screen filling most of the frame and showing a browser developer tools panel
open beside a web page, the HTML title element selected and highlighted in
blue with the text visibly running past the right edge of the narrow panel so
the end of it is cut off, a second smaller window behind it showing a plain
text editor with markdown files and Chinese characters in the sidebar, the
screen slightly smudged with fingerprints and reflecting the grey window light
from the left, a half finished cup of tea with leaves settled at the bottom
beside a tangle of a charging cable and a phone face down on the desk, a
paper notebook with handwritten Chinese notes pushed to one side, printed A4
pages stacked unevenly under her elbow, her right hand mid gesture reaching
for the trackpad so it is slightly motion blurred, uneven mixed lighting from
a ceiling fluorescent and the window, the top of a colleague's monitor and a
plastic plant visible out of focus in the background, the edge of the frame
cropping her shoulder awkwardly, natural imperfect documentary photography
with visible sensor noise, no studio lighting, no colour grading, no text
overlay, no watermark, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: none. This piece is a work order, not a published page. Its step 4 is an
edit to files that already exist, so no new schema is emitted and no existing
schema type changes.
Existing schema affected: Article.headline and BreadcrumbList position 3 on the
47 guide pages whose title is rewritten. Both already read the unsuffixed
frontmatter title, so they follow the new value with no code change.
FAQPage: no
Breadcrumb: unchanged, see the acceptance table row 5
Author: Cyril Drouin
datePublished: n/a, not a published page
Measurement: none from editorial/harness/. The figures come from the
ChinaWebFoundry title audit of 10 September 2026, method stated in the body.
-->

<!-- ASSET BRIEF
TABLES:
  1. Per-locale audit table. Data: article count, suffix length, shortest,
     median and longest rendered title, count still over 52 after removal.
     Source: ChinaWebFoundry title audit, 10 September 2026, both passes.
  2. Four replacement-title tables, one per locale, 47 rows total, each with
     the content id, the new title and its character count.
  3. Change list, 9 rows, file and passage.
  4. Acceptance table, 7 rows.
CHARTS: none. Four numbers per locale do not need a chart.
SCREENSHOTS: none required for the work order. If the Search Console
  annotation in acceptance row 7 is made, screenshot it for the record.
DOWNLOADS: none.
INTERNAL LINKS: none. This is a work order, not an article, so the one-up
  two-sideways link rule for T1, T2 and T5 does not apply.
LOCALIZED SLUGS: none. Zero new URLs, and no slug is created or changed.
CLIENT SIGN-OFF NEEDED: none. No client figure or name appears.
HARNESS ROWS CITED: none.
DEEP-TRANSLATE OWED AT PUBLISH: 14 fr titles, 15 es titles, 12 de titles.
  Three passes each, main conversation, FR then ES then DE. Recount every
  title against the 52-character ceiling after the third pass.
BRIEF CORRECTIONS FOR PLAN.md: 33 articles per locale not 30; 132 pages not
  120; English suffix 36 characters not 35; the breadcrumb acceptance
  criterion as written cannot hold alongside the title rewrites, replacement
  wording in the "What must not move" section.
-->
