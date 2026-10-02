---
title: "Moving a French Software Site Into China"
slug: bassetti-wordpress-china
description: "A European origin at 23.4 seconds and an Alibaba Cloud Shanghai origin at 1.2, with the ICP filing weeks that sat between them."
excerpt: "What changed when the origin moved to Shanghai, measured from a Beijing consumer line, and what the filing actually cost in weeks."
template: casestudy
author: cyril-drouin
category: Hosting
---

<!-- PARTIAL DRAFT. STATUS: blocked, note "client sign-off". DO NOT PUBLISH.
     Written 1 October 2026 by the unattended draft run.

     Two gates are shut, and they are separate.

     1. Client sign-off. The brief requires written sign-off from Bassetti's
        marketing lead on the figures as well as the name. Nothing in
        editorial/ records it (logs of 6, 29 September and today searched).
        The name and the testimonial are already live on
        src/content/casestudies/bassetti-wordpress-china.md and on the money
        page, so the name itself is not new disclosure. Every new figure is.

     2. Vantage points. The brief makes this the study that carries F32
        (23.4 seconds before, 1.2 after). The ledger entry for F32 says the
        carrier, city and test dates are NOT published, and the repo holds
        no project record that ties the 23.4 / 1.2 pair to Bassetti, to a
        network or to a date. The live page at is-wordpress-blocked-in-china
        calls it "one recent migration" and does not name the client. The
        brief's own rule applies: re-run both legs before publishing and say
        the figures were re-measured. harness/latest.json was read on
        1 October 2026: generated null, vantages [], rows []. No mainland
        vantage point exists to re-run from.

     Brief against site (SPEC "when to stop", item 4: the site wins).
     The brief's friction paragraph says the ICP filing ran past the 10 to
     30 working day window. The live case study says the whole project took
     six weeks start to finish, and so does the money page. Six weeks for
     the whole project leaves no room for a filing that overran 30 working
     days. The draft keeps the site's six weeks and leaves the filing length
     as a TODO for the project record. Same for the brief's "Alibaba Cloud
     Shanghai region": the live page says "servers located in China" and
     names no provider or region. The draft does not name one.

     The brief's description and excerpt state the F32 pair and a Beijing
     consumer line as fact. Both are kept in frontmatter as approved
     values, flagged here: they cannot ship until gate 2 clears.

     This file has NOT been through /content-quality-us. No image. -->

<!-- HERO SECTION -->

Moving a French engineering software site into mainland China

<!-- INTRODUCTION -->

Bassetti, a French engineering software vendor, moved its WordPress and
Elementor site from a European origin onto hosting inside mainland China in
six weeks, filing and .cn domain included. TODO: client sign-off. TODO:
harness measurement. The opening needs the before and after median document
complete from the same Beijing consumer line, with both dates, and the
server response from the mainland region the site now runs in.

<!-- SECTION: The situation -->

## The situation

Bassetti sells engineering and product lifecycle software to industrial
companies, and runs teams in Europe, the Americas and Asia. Its global site
ran on WordPress with Elementor, served from a European origin, and it
worked for every audience except the one in mainland China.

TODO: client sign-off. The brief asks for the China entity structure at the
start of the project and the month the work began. Neither is in the
project file this run can read.

<!-- SECTION: What we measured before -->

## What we measured before

<!-- TABLE 1 of 2. Before and after on the same metric, same vantage
     points, same method. Rows reserved until the figures are re-measured
     and signed off. -->

| Measure | Vantage point | Before | After | Dates |
|---|---|---|---|---|
| Median document complete | Beijing consumer broadband | TODO: harness measurement | TODO: harness measurement | TODO |
| Median document complete | Mainland cloud instance | TODO: harness measurement | TODO: harness measurement | TODO |
| Server response | Mainland cloud region | n/a | TODO: harness measurement | TODO |
| Requests per page load | Same test run | TODO | TODO | TODO |

TODO: harness measurement. The published pair, 23.4 seconds on a European
origin and 1.2 seconds after migration, travels on this site without a
carrier, a city or a test date. It does not go back into print until both
legs have been re-run from a named Beijing consumer line and a named
mainland cloud instance, and the page says the figures were re-measured.

The audit list is already public. Google Fonts calls, reCAPTCHA, CDN
routing through overseas servers, several plugins and some theme-level code
all reached outside the mainland on every page load.

<!-- SECTION: What we changed -->

## What we changed

The work ran in this order, under the China Migration service line.

1. A dependency audit with Bassetti's own technical team, call by call.
2. Font files moved onto the site's own server, reCAPTCHA replaced, CDN
   calls rerouted, plugins replaced or removed, and custom patches written
   for theme code that had no clean swap.
3. A .cn domain and the ICP filing (ICP备案).
4. Hosting on a mainland server, then cutover.
5. A maintenance plan once the site was live.

TODO: client sign-off. Name the mainland cloud provider and region only if
the project record confirms them.

<!-- SECTION: What we measured after -->

## What we measured after

TODO: harness measurement. Same metric, same Beijing consumer line, same
method, with the date. If the method differs from the before leg, say how
and why. Give the request count before and after, because the figure moved
with the topology: fewer calls leaving the country, and an origin that no
longer sits on the far side of the border.

<!-- SECTION: What did not work -->

## What did not work

The filing window was a dead zone. On a mainland server, a domain cannot
open website access until its filing is complete, so there was no staging
URL on the new host that anyone at Bassetti could open in a browser.

> Alibaba Cloud states that a domain resolving to a server in the Chinese
> mainland must complete its website filing before website access can be
> opened.
> Source: Alibaba Cloud (阿里云) help centre, 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

TODO: client sign-off. The number of weeks the filing took, from the
project record. The brief says it overran the published window; the live
page says the whole project took six weeks. Reconcile before printing.

Then the update servers. TODO: client sign-off. Confirm from the project
record that the dashboard on the mainland IP stopped offering plugin
updates after cutover, and that a mirror fixed it outside the original
scope.

> WordPress.org staff wrote that several Chinese network sources are
> rate-limited on certain services because of abuse, and that there would
> be no whitelisting.
> Source: WordPress.org Meta Trac, ticket #5106, 21 March 2020.
> https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

<!-- SECTION: What is still open -->

## What is still open

The mirror. It is a dependency the site did not have in Europe, and it has
to be watched like one. TODO: client sign-off on what else is open: the
filing's annual checks, the public security filing (公安备案) within 30
days of launch, and how the .com and the .cn stay in step.

<!-- CTA -->

CTA: Ask us what your migration would actually take

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Not generated. The row is blocked. Write the prompt when the piece is
redrafted with signed-off figures.

- Save to:    public/images/casestudies/bassetti-wordpress-china.webp
- Reference:  /images/casestudies/bassetti-wordpress-china.webp
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > Work > Moving a French Software Site Into China
Author: Cyril Drouin
datePublished: TODO
Measurement: TODO: harness run_id for both legs
-->

<!-- ASSET BRIEF
TABLES: before and after, four rows, from the re-measured run (TODO)
CHARTS: none
SCREENSHOTS: existing bassetti-homepage-china, bassetti-contact-china,
bassetti-sectors-china in public/images/casestudies/
DOWNLOADS: none
INTERNAL LINKS:
our China migration service -> /services/china-migration/
our guide to WordPress hosting in China -> /resources/china-web-guide/wordpress-hosting-china/
ICP filing for foreign companies -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
(brief names icp-filing-explained, which does not exist in src/content/guides/;
the existing ICP guide substituted)
LOCALIZED SLUGS: none (English at publish)
CLIENT SIGN-OFF NEEDED: the name on new copy, every figure, the provider
and region, the filing length in weeks, the update-server incident
HARNESS ROWS CITED: none (no rows exist)
-->
