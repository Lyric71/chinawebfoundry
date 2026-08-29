# Move 1, findings

Discovery run against the repo before any change was made, per spec section 1.
Written 2026-08-29.

## 1. Routing

Locales are **separate page files**, not a dynamic `[lang]` segment: `src/pages/*.astro`
for English, `src/pages/de/`, `src/pages/es/`, `src/pages/fr/` for the others.

There **is** a central slug-translation table: [src/i18n/routes.ts](../../src/i18n/routes.ts).
This is the outcome the spec hoped for. It exports:

- `staticRoutes` - canonical English path to the fr/es/de localized path
- `serviceSlugs`, `guideSlugs`, `caseStudySlugs` - content-collection id to localized slug
- `localizePath`, `canonicalizePath`, `parsePath`, `hreflangFor`, `switchLocale`

The file has no Astro-runtime imports, so `astro.config.mjs` imports it directly for the
sitemap. Every locale's content collection keeps the **English id** as its filename
(`src/content/guides-fr/baiduspider-firewall.md`), and the translated slug comes from
`guideSlugs` at render time.

Consequence for this spec: Task A and Task B are edits to `routes.ts` plus a file rename,
not four independent renames. The C2 locale slug map in the spec was verified line by line
against `guideSlugs` and matches exactly, including the three ids that keep their English
slug in every locale (`baidu-aicaigou-b2b`, `baidu-merchant-center`,
`woocommerce-china-store-guide`).

## 2. Content source

Astro content collections, `glob` loader, schema in [src/content.config.ts](../../src/content.config.ts).
Four parallel collections per type: `guides`, `guides-de`, `guides-es`, `guides-fr`,
30 markdown files each, 120 total. Guide frontmatter is
`title, subtitle, summary, visual, order, published, category, author, publishedAt, updatedAt`.

Internal links inside the markdown bodies are written as **fully-resolved localized
absolute paths** (`/fr/ressources/guide-web-chine/...`), not canonical English paths run
through `localizePath`. Task C follows that existing convention.

## 3. Redirects

`vercel.json` already carries a `redirects` array, 239 entries, all `"permanent": true`.
That is the mechanism in use and the one this spec extends. No `redirects` key in
`astro.config.mjs` and no `Astro.redirect` anywhere in `src/pages/`.

## 4. Canonical and hreflang

[src/layouts/BaseLayout.astro](../../src/layouts/BaseLayout.astro) emits both. The alternate
set is **generated from the shared map** via `getHreflangUrls` -> `hreflangFor` in
`routes.ts`, with an `alternateUrls` prop as a per-page override. `x-default` is already
emitted and already points at the English URL. Self-reference and reciprocity are
structural, since all four URLs are derived from one canonical path.

`BaseLayout` hardcoded `<meta name="robots" content="index, follow, ...">` with no way to
override it. Task E needed one, so a `noindex` prop was added to `BaseLayout` and threaded
through `PageLayout`.

## 5. Sitemap

`@astrojs/sitemap`, configured in `astro.config.mjs`. Exclusions are declared in the
`filter` callback, which before this pass only skipped `/404`. The `serialize` callback
rebuilds the hreflang cluster from the canonical path and sets per-route `priority`, and
its priority regex named `wordpress` explicitly, so it needed updating alongside Task A.

## Contradictions and deviations from the spec

### 5.1 The 52-character title ceiling cannot apply to guide articles as written

`GuideLayout.astro` composes the rendered `<title>` as:

```
`${title} | ${t('guide.backLink')} | ChinaWebFoundry`
```

The frontmatter `title` is the H1; the `<title>` tag is that plus a section label plus the
brand, roughly 30 extra characters. So the spec's B2 titles were applied to the
frontmatter `title` field (which is the H1, and which the spec separately requires to
match), and the B2 descriptions to `summary` (the field `GuideLayout` passes as
`description`). All eight strings are within the stated ceilings as frontmatter values.

The rendered `<title>` on all 120 guide articles exceeds 52 characters by construction.
`verify-move-1.mjs` check 7 reports this and does not fail the run for it, consistent with
the spec's instruction to report and fix nothing outside scope.

### 5.2 `/wordpress/` was not in `staticRoutes`

It was a "brand page", meaning a path absent from `staticRoutes` and therefore identical in
every locale. Task A required adding a `staticRoutes` entry so the head-term page can carry
different slugs per locale. `/astro/` and `/wechat/` were left as brand pages, per spec.

### 5.3 Pre-existing, out of scope, not touched

- `GuideLayout.astro` has `inLanguageMap` and `updatedLabelMap` covering only `en`, `fr`,
  `es`. German guide articles therefore emit `inLanguage: undefined` in Article JSON-LD and
  fall back to the system locale for date formatting. Real bug, unrelated to this spec.
- Metadata ceiling violations exist on many pages this spec does not touch. Listed by the
  verify script, not fixed.

### 5.4 Task C insertion points

All 116 links were placed inside existing sentences. No article needed to be skipped:
every one had a natural insertion point in its opening third. Counting the four Task B3
links, 120 links were placed in total.

Anchor distribution, per locale: **30 links, 30 distinct anchors, every anchor used
exactly once.** No exact-match anchors were used at all, so the "no more than four
exact-match anchors per locale per target" rule is satisfied with room to spare. Full
table in [move-1-anchor-distribution.md](./move-1-anchor-distribution.md), regenerated by
`node scripts/move-1/anchor-report.mjs`.

### 5.5 Nine pre-existing redirects would have become chains

`vercel.json` already carried redirects pointing at `/fr/ressources/guide-web-chine/agence-wordpress-chine/`
and its de/es equivalents, left over from the earlier native-slug migration. Task B moves
that target, so those nine rows were repointed at the new destination rather than left to
chain. There are now zero rows in `vercel.json` whose destination is also a source.

### 5.6 Task C4 needed no work

The reciprocity cap was already met. `/wordpress-agency-china/` and its three locale
siblings each carry 4 outbound links into the guide (3 distinct articles, one linked
twice); `/wordpress-in-china/` and `/web-agency-china/` carry none. All under the cap of
five, so nothing was added or removed.

### 5.7 Three guide articles were being written concurrently, and are out of scope

Partway through this pass, three new guide articles appeared in the working tree,
untracked, first in English, then across all four locales:

- `choosing-web-agency-china`
- `is-wordpress-blocked-in-china`
- `wordpress-hosting-china`

They carry `order: 32`, `33`, `34` and today's date, and `guideSlugs` gained entries for
them while this work was in progress. They are not in the spec's assignment table, which
covers exactly 30 articles per locale, so **they were left untouched**. Two of the three
already carry their own money-page links, placed by whoever authored them. The third,
`is-wordpress-blocked-in-china`, carries none.

Whoever owns that cluster should decide whether it wants a Task C link. The tooling here
scopes itself to the spec's article list, so re-running it will not disturb them.

## Result

| Item | State |
|---|---|
| Eight 301s, single hop, `permanent: true` | in `vercel.json`, chain-free |
| Internal links to any pre-migration path | zero |
| Slug collisions, any locale | zero, across 308 URLs |
| Task C links placed | 116, plus 4 from Task B3 |
| Anchor repeats per locale | max 1, cap is 3 |
| `move-1-hreflang-report.json` | 308 URLs, every `issues[]` empty |
| Reserved routes | 4 created, noindexed, sitemap-excluded, unlinked |

`node scripts/verify-move-1.mjs <preview-url>` runs the seven checks from spec section 7
against a deployment. It has not been run yet, because that needs a preview deploy.
The three static checks it shares with the offline tooling (redirects table, slug
collisions, anchor distribution) pass here.

## Carried over, not done here

Spec section 10 flags one item for a separate commit: the brand guidelines and published
copy still say Google Fonts is blocked in China. It is not, as of a 29 August 2026 test
from a mainland instance. Self-hosting stays correct for resolver determinism, but the
stated reason needs rewording. Not touched in this pass, recorded here so it is not lost.
