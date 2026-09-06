---
brief_id: T6-07
tier: T6
content_type: upgrade
publish_date: 2026-11-20
week: 11
slot: 3
slot_job: upgrade or report
slug: upgrade-hosting-guides-consolidation
title: "Audit the two hosting guides, differentiate or consolidate"
locales_at_publish: as the page exists
status: not_started
---

## How to run this brief

Read `../CLAUDE.md` and `../SPEC.md` first. They override any conflicting
rule inside the skills. Then read every fact ID listed above in
`../sources/fact-bank.md`, and the Do Not Assert list at the end of it.

| Input | Value |
|---|---|
| website | https://www.chinawebfoundry.com |
| audience | people out of China |
| brief | this file |
| output | `../output/upgrade-hosting-guides-consolidation.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-07. Audit `china-website-hosting-guide` against `host-website-in-china`, then differentiate or consolidate

| | |
|---|---|
| **Scope** | Two URLs, `china-website-hosting-guide` and `host-website-in-china`, all four locales, so eight pages. |
| **Type** | Information architecture |
| **New URLs** | 0. The consolidation branch removes a URL and adds none. |
| **Effort** | Half a day to audit and decide. Two to three days to execute whichever branch wins. |

**Why.** Two URLs sit on adjacent intents, one framed as a guide and one framed as a task. Either they serve genuinely different queries and the copy should make that obvious, or they are splitting the same intent and one of them should redirect into the other. Right now nobody has checked which, and Search Console will answer it in twenty minutes.

**What to change.** Run the audit first: pull 90 days of Search Console query data for both URLs and compute the overlap in the queries each ranks for. If overlap on the top 20 queries exceeds roughly 40%, or if the two pages trade positions on the same query, take the consolidation branch. Otherwise take the differentiation branch.

Differentiation branch: rewrite `china-website-hosting-guide` as the decision and comparison page covering providers and constraints, and rewrite `host-website-in-china` as the procedural page covering the sequence from entity to filing to deployment. Remove every provider comparison from the procedural page and every step-by-step from the guide. Cross-link them once each, in the body.

Consolidation branch: keep `china-website-hosting-guide` as the surviving URL, merge the unique material from the other page into it, and 301 `host-website-in-china` to it in all four locales. Update every internal link to point at the destination directly rather than through the redirect, and remove the retired URL from the sitemap and from the hreflang cluster in all four locales at the same time.

**Acceptance criteria.**
- [ ] A written audit note records the query overlap percentage and which branch it selected.
- [ ] Differentiation branch: no H2 heading text is shared between the two pages, and neither page contains a provider comparison table if it is the procedural page.
- [ ] Consolidation branch: `host-website-in-china` returns 301 to `china-website-hosting-guide` in all four locales, verified with curl per locale.
- [ ] Consolidation branch: zero internal links anywhere in the repo point at the retired URL, verified by grep.
- [ ] Consolidation branch: the retired URL is absent from `sitemap.xml` and from every `hreflang` cluster on the surviving page.
- [ ] Consolidation branch: no redirect chain exists, verified by curl following redirects and confirming exactly one hop to a 200.
- [ ] Either branch: total URL count in the sitemap goes down by four or stays the same, never up.

**Risk.** This is the highest-risk item in the set because the consolidation branch touches URLs, and the Move 1 redirect work has already shipped. A new 301 added on top of an existing Move 1 rule produces a chain, which leaks equity and can loop. Before writing any rule, read the shipped Move 1 redirect map and check whether either of these two slugs already appears as a source or a destination in it. If `host-website-in-china` is already a Move 1 destination, the correct fix is to edit the existing Move 1 rule to point at the final target rather than to add a second hop. The hreflang cluster must be updated in the same deploy as the redirect: a retired URL still referenced by three other locales' hreflang tags is a self-inflicted crawl error across all four.

## T6 rules (from PLAN.md section 10)

## 10. T6: upgrades to existing pages

Ten pieces, **zero new URLs.** These are the cheapest wins in the plan and they carry no risk at all.

1. **Fix the title suffix across all guide articles.** Section 0 of v1 flagged this and it is still open. It is one template change and it lifts every page.
2. **`is-wordpress-blocked-in-china`:** add a measurement table with vantage points, and correct the Google Fonts paragraph per F6. This article currently carries the version of that claim that v2 retracts.
3. **`wordpress-hosting-china`:** add the harness numbers.
4. **`choosing-web-agency-china`:** add FAQ schema, and add the vendor comparison as a table rather than prose.
5. **`google-analytics-china`:** upgrade with F34. **Do not write a new GA article**, this URL already exists and a second one would recreate the cannibalization Move 1 just fixed.
6. **`great-firewall-what-it-blocks`:** attach the dependency table. This is the natural hub for it.
7. **`china-website-hosting-guide` and `host-website-in-china`:** two URLs, adjacent intents. Audit for overlap and either differentiate sharply or consolidate with a redirect.
8. **`/wordpress-in-china/`:** add a measurement block and FAQ schema.
9. **`/web-agency-china/` and `/wordpress-agency-china/`:** FAQ schema, one hard number per section.
10. **`baiduspider-firewall`:** add F15 and F16, the Wordfence Google-only whitelist and the Solid Security HackRepair list. Both are source-verified and neither is anywhere else on the web.

---

Ten engineering and editing tasks on pages that already exist. Every one of these creates zero new URLs. Any work order whose execution would add a URL has been written wrong and should come back for revision before it is built.
