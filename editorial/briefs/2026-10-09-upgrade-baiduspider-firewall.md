---
brief_id: T6-10
tier: T6
content_type: upgrade
publish_date: 2026-10-09
week: 05
slot: 3
slot_job: upgrade or report
slug: upgrade-baiduspider-firewall
title: "Add F15 and F16 to baiduspider-firewall"
locales_at_publish: as the page exists
facts: [F15, F16, F18, F20]
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
| output | `../output/upgrade-baiduspider-firewall.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-10. Add F15 and F16 to `baiduspider-firewall`

| | |
|---|---|
| **Scope** | `baiduspider-firewall`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | Half a day English, plus translation. |

**Why.** F15 and F16 are both read from plugin source and neither appears anywhere else on the web, which makes this the highest-differentiation edit in the T6 set. The article currently discusses the problem in general terms while the two named, version-pinned findings that would make it citable sit unused in the fact bank.

**What to change.** Add a section on Wordfence 9.0.0 covering F15: every rate limit ships disabled, the only crawler policy whitelists Google alone by reverse DNS to `.googlebot.com`, there is no Baidu equivalent, and the allowlist is IP-only with no user-agent allowlist at all, while Baidu publishes no stable IP range. Spell out the consequence, which is that Baiduspider loses all protection the moment an administrator turns crawler rate limits on. Add a second section on Solid Security 10.0.3, packaged as better-wp-security and now branded Kadence Security, covering F16: the HackRepair ban list returns 403 for `360Spider` and `YisouSpider` at the server config level, it is opt-in with `"default": false`, and a client who enabled "Default Ban List" is 403ing Chinese crawlers without knowing it. Name the version numbers and the read date in both sections. Add the correct verification method from F20, reverse DNS to a hostname ending `.baidu.com` or `.baidu.jp`, never user agent, and state explicitly that published IP allowlists on Chinese SEO blogs go stale. Add the LiteSpeed Cache 7.9.1 and W3 Total Cache 2.10.6 clearance from F18, since ruling those out is as useful as ruling the others in.

**Acceptance criteria.**
- [ ] Both plugin sections name the exact version number inspected and the source read date.
- [ ] The Wordfence section states that the allowlist is IP-only and that Baidu publishes no stable IP range.
- [ ] The Solid Security section states that the ban list is opt-in and defaults to false.
- [ ] The article states that Baiduspider is verified by reverse DNS and never by user agent.
- [ ] The article does not assert that Baidu cannot read JavaScript, verified by grep against the Do Not Assert list.
- [ ] No claim is made about the reachability of any untested host listed in the Do Not Assert section.
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** Version-pinned plugin findings go stale on the plugin's release cycle, not on ours, so both sections need the version number visible in the body and a review date in frontmatter. Naming security plugins by version and describing what their defaults do to Chinese crawlers is accurate and defensible as written, but it must stay descriptive of shipped configuration and must not characterize vendor intent.

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
