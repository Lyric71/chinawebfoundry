---
title: "FAQ schema and comparison table for choosing-web-agency-china"
slug: upgrade-choosing-web-agency-china
description: "Work order output: replacement copy and change list for choosing-web-agency-china in four locales, adding a capability table, FAQ schema and sourced figures."
excerpt: "Adds a capability table for the four vendor types, FAQPage schema, and a dated, sourced figure in every H2 section. Zero new URLs."
template: upgrade
author: cyril-drouin
category: Technology
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy and the change list. The publish step
     applies the changes to the existing files named below. ZERO NEW URLS. -->

# Change list

Scope: `choosing-web-agency-china`, four locales, four content files. No
route, no component, no schema file is touched: the FAQ schema comes from the
`faqSchema` flag that B5 added on 6 October 2026, and tables already render
inside a horizontal scroll container.

| # | File | Line | Action |
|---|---|---|---|
| 1 | `src/content/guides/choosing-web-agency-china.md` | 3 | Replace `subtitle` |
| 2 | `src/content/guides/choosing-web-agency-china.md` | 4 | Replace `summary` |
| 3 | `src/content/guides/choosing-web-agency-china.md` | 9 | Set `updatedAt` to the publish date |
| 4 | `src/content/guides/choosing-web-agency-china.md` | after 9 | Insert `reviewBy: 2027-01-13` and `faqSchema: true` |
| 5 | `src/content/guides/choosing-web-agency-china.md` | 21 to 30 | Replace the vendor table and the delivery-layer paragraph; insert the capability table and its blockquote |
| 6 | `src/content/guides/choosing-web-agency-china.md` | after 58 | Insert the footer number blockquote after question 8 |
| 7 | `src/content/guides/choosing-web-agency-china.md` | 64 | Replace the timing paragraph with the filing and licence passage |
| 8 | `src/content/guides/choosing-web-agency-china.md` | 72 | Replace the "No mainland entity" paragraph, add its blockquote |
| 9 | `src/content/guides/choosing-web-agency-china.md` | 105 to after 89 | Move the closing paragraph out of the FAQ section, to the end of the pricing section |
| 10 | `src/content/guides/choosing-web-agency-china.md` | 100 | Replace the answer to "How long before we see search results in China?" |
| 11 | `src/content/guides-fr/choosing-web-agency-china.md` | same lines | Changes 1 to 10, translated |
| 12 | `src/content/guides-es/choosing-web-agency-china.md` | same lines | Changes 1 to 10, translated |
| 13 | `src/content/guides-de/choosing-web-agency-china.md` | same lines | Changes 1 to 10, translated |

All four locale files are 105 lines at HEAD (85dfa52) and line-aligned,
checked on 15 October 2026: `subtitle` line 3, `summary` line 4, `updatedAt`
line 9, the vendor table lines 21 to 26, the H2s at 19, 32, 60, 68, 78 and
91, question 8 at lines 57 and 58, the FAQ questions at 93, 96, 99 and 102,
the closing paragraph at 105. Check again before applying, in case another
piece has touched the files since. Apply the changes from the bottom of the
file upwards so the line numbers stay true while you work.

New URLs created: 0. `src/i18n/routes.ts` is untouched;
`choosing-web-agency-china` is already registered in `guideSlugs` (fr
`choisir-agence-web-chine`, es `elegir-agencia-web-china`, de
`webagentur-china-auswaehlen`). No canonical or hreflang change. Verify the
sitemap entry count before and after the build: it must be identical.

Translation at publish: changes 1, 2, 5, 6, 7, 8 and 10 are prose and go
through `/deep-translate`, three passes each, FR then ES then DE, in the main
conversation. Changes 3 and 4 are frontmatter values. Change 9 moves an
existing paragraph, already translated, and needs no pass. Inside
blockquotes, publisher names, Chinese names in parentheses and URLs stay as
they are. The FR, ES and DE question lines in the FAQ section must keep the
form `**Question?**` on a line of their own (the French narrow space before
the question mark is fine), because `faqsFromMarkdown` in
`src/lib/schema.ts` reads one pair per bold question line ending in a
question mark.

---

# CHANGE 1. Frontmatter `subtitle`, line 3

Reason: the live subtitle is 29 words; the house ceiling is 25.

REMOVE:

```
subtitle: "Four kinds of vendor sell China websites, and only one of them can build, file, host and rank one. Here is how to tell them apart before you sign."
```

INSERT:

```
subtitle: "Four kinds of vendor sell China websites, and only one builds, files, hosts and ranks them. How to tell them apart before you sign."
```

---

# CHANGE 2. Frontmatter `summary`, line 4

Reason: the live summary is 181 characters; the house ceiling is 152. The
page now compares the four types on the four jobs.

REMOVE:

```
summary: "The four vendor types on every China shortlist, eight questions that expose the difference on the first call, the red flags worth acting on, and how the market prices this work."
```

INSERT:

```
summary: "The four vendor types on every China shortlist, compared on filing, hosting, Chinese copy and Baidu, plus eight questions for the first call."
```

The live `title` (line 2, 35 characters) stays.

---

# CHANGE 3. Frontmatter `updatedAt`, line 9

REMOVE `updatedAt: 2026-10-02`. INSERT `updatedAt: 2026-10-23`, the row's
publish date. If the publish step runs on another day, it writes that day.

---

# CHANGE 4. Frontmatter, after line 9

INSERT:

```
reviewBy: 2027-01-13
faqSchema: true
```

`faqSchema: true` makes the route build FAQPage JSON-LD from the last `##`
section (`faqsFromMarkdown`), so every schema answer is the visible answer,
word for word, and `inLanguage` follows the page locale (en-GB, fr-FR, es-ES,
de-DE, `faqSchema` in `src/lib/schema.ts`). `reviewBy` is 90 days from the
checks of 15 October 2026: the Statcounter figure in change 5 is monthly and
`editorial/scripts/review-due.mjs` lists the page for its refresh.

---

# CHANGE 5. The vendor comparison, lines 21 to 30

Reason: the work order. The live table holds what each type does and where
it breaks; the comparison by capability ran as prose. The live cell "Cannot
build, design, file or write anything" is wrong on filing: some delivery-layer
services run the ICP application for a customer and others pass it to a
partner (21YunBox and Chinafy product pages, read 15 October 2026).

REMOVE lines 21 to 30 (the table, the paragraph beginning "The expensive
mistake", and the paragraph beginning "The third type is legitimate").

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 5 -->

| Type | What they sell | Where they break |
| --- | --- | --- |
| China web specialist | A build, the filing, mainland hosting and Baidu work, then a maintenance retainer | Smaller teams, fewer household-name logos |
| Marketing agency with a web page | A monthly retainer for social, search and media buying | The website is the way into the retainer |
| Delivery-layer SaaS | A subscription that serves your existing site faster to visitors in China | Builds, designs and writes nothing |
| Offshore development shop | Cheap production capacity | No mainland company, so no filing of its own and no mainland server |

The expensive mistake is hiring the second type for the first type's job. A China marketing agency can be genuinely good at what it does. It also, quite often, cannot name the content management system it builds on, because the website is a lead-in to a monthly retainer rather than something it engineers.

The third type is legitimate inside its lane. A delivery-layer service
rewrites the blocked resources in your existing site and serves it faster
inside China without a rebuild. If your problem really is just performance,
that's a reasonable purchase. If you have no Chinese site, no mainland entity
and no Baidu presence, the service passes most of that work to partners.
Some will run the ICP filing for you, as a separate job.

Line the four types up against the jobs a China site needs and the gaps
show quickly.

| Type | ICP filing | Mainland hosting | Chinese-language content | Baidu work |
| --- | --- | --- | --- | --- |
| China web specialist | Prepares and submits it with you | Buys and runs the mainland server | Written in Chinese, in-house | Crawl checks, Search Resource Platform, content |
| Marketing agency with a web page | Ask question 1 | Question 3 will tell you | Strong for campaigns and social | Often paid search; for the technical side, question 5 |
| Delivery-layer SaaS | Through a partner, or as a separate service | Serves a copy of your site from its own network | Through partners, where offered | Paid ads through partners, where offered |
| Offshore development shop | None of its own: it has no mainland company | None on the mainland | Depends on the team | Depends on the team |

The last column decides whether people searching in Chinese find the site.

> Baidu held 46.65% of the search engine market in China across all
> platforms in September 2026, by Statcounter's measure, and 60.15% on
> mobile.
> Source: Statcounter Global Stats, September 2026. https://gs.statcounter.com/search-engine-market-share/all/china and https://gs.statcounter.com/search-engine-market-share/mobile/china

<!-- END REPLACEMENT COPY, CHANGE 5 -->

The paragraph beginning "The expensive mistake" is unchanged; it is
reprinted above only to show its position between the two tables.

---

# CHANGE 6. Question 8, insert after line 58

Reason: one sourced figure in the "Eight questions" section. The footer
check in question 8 is a legal requirement with a fine attached.

INSERT after the paragraph ending "Start with their own site.":

<!-- BEGIN REPLACEMENT COPY, CHANGE 6 -->

> Once a filing is approved, the ICP number has to sit at the bottom of the
> site, linked to the MIIT register at beian.miit.gov.cn. A site that leaves
> it off can be ordered to fix it and fined 5,000 to 10,000 yuan by the
> provincial Communications Administration (省级通信管理局).
> Source: Alibaba Cloud (阿里云) help centre, adding the filing number after ICP filing, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

<!-- END REPLACEMENT COPY, CHANGE 6 -->

---

# CHANGE 7. The timing paragraph, line 64

Reason: F26, with the sources the figures come from. The live paragraph
says the licence applies "if the site takes payment" (the test is charging
users for information or online services, State Council Order 292 art 3,
as the A6 run settled on 13 October 2026), gives "six to twelve weeks" for a
build with no source, and quotes our filing range as if it were the
regulator's.

REMOVE:

```
They'll tell you the ICP filing takes three to six weeks once your mainland entity exists, and twelve to eighteen weeks if the site takes payment and needs a commercial licence. They'll tell you a build runs six to twelve weeks, and that migrating a large existing site runs longer than that. They'll quote load times measured from inside China rather than from a global testing tool, and the numbers will come from projects they shipped rather than from targets.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 7 -->

They'll explain that the filing goes through two reviews. The host the site
is filed through checks the application first, then the provincial
Communications Administration (省级通信管理局) reviews it. Alibaba Cloud
(阿里云) publishes both windows.

> Alibaba Cloud completes its initial review in 1 to 2 working days. The
> provincial Communications Administration's review generally takes 1 to 20
> working days. The public security filing (公安备案) is due within 30 days
> of the site going live.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

With the paperwork on either side (the entity documents, the domain in the
filer's name), we plan three to six weeks for the filing, once your
mainland entity exists.

The licence is a separate track. A site that charges users for information
or online services needs an ICP licence (ICP许可证) on top of the filing.
It's a value-added telecoms licence, with its own review.
Where an online shop falls is a question for a licensed adviser, and a
vendor who knows the work says so before you ask.

> A value-added telecoms licence application is reviewed and decided within
> 60 days of acceptance.
> Source: Shanghai Communications Administration (上海市通信管理局), value-added telecoms service guide, June 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

The clock starts at acceptance, once the file is complete, so we plan
twelve to eighteen weeks for a licence.

They'll put the build on a dated plan, with the filing as its own line and
the mainland server bought before it. Their load times will come from inside
China, with the network and the date attached, and from projects they
shipped.

<!-- END REPLACEMENT COPY, CHANGE 7 -->

Line 66 ("They'll also tell you when the answer is no...") stays.

---

# CHANGE 8. "No mainland entity", line 72

Reason: nobody "sponsors" a filing. The filing entity is the site owner, a
mainland company or a mainland resident, and the filing is made against a
mainland server (Alibaba Cloud). The rewrite says what the missing entity
actually costs the buyer.

REMOVE:

```
**No mainland entity.** A Hong Kong or Singapore agency cannot sponsor an ICP filing, because the filing requires a mainland-registered company. They can advise on it. They can't do it.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 8 -->

**No mainland entity.** A filing is made by a company registered in the
mainland or by a mainland resident, against a server inside the mainland. A
Hong Kong or Singapore agency with no mainland company can advise on yours.
It can't file a site of its own, so there's no number at the bottom of its
homepage to show you.

> Alibaba Cloud's international site does not accept ICP filing
> applications. The filing entity must be an enterprise registered in the
> Chinese mainland or a Chinese mainland resident, and the filing is made
> against a mainland Alibaba Cloud server on a subscription of three months
> or more (more than three for an ECS instance).
> Source: Alibaba Cloud help centre, ICP filing for enterprises outside the Chinese mainland, August 2026, and server and access information check, September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland and https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

<!-- END REPLACEMENT COPY, CHANGE 8 -->

---

# CHANGE 9. The closing paragraph, line 105 to after line 89

Reason: `faqsFromMarkdown` reads the last `##` section, and every line after
the last bold question joins that question's answer. Left where it is, the
closing paragraph would become part of the FAQPage answer to "What's the
smallest sensible first step?". The guide layout renders its own CTA after
the body, so the page still ends on a call to action.

Cut line 105 (the paragraph beginning "Send us the proposals") and its
preceding blank line, and paste it unchanged, in every locale, after line 89
(the paragraph ending "saves the most money on this entire process."), with
one blank line on each side. Its two links stay as they are. No translation
pass: the text does not change.

---

# CHANGE 10. FAQ answer, line 100

Reason: "Baidu indexing usually takes two to four weeks after a correctly
configured launch. Meaningful ranking movement takes three to six months"
has no source. Baidu publishes no indexing timetable that this run could
find; only forum and blog estimates exist. The answer is rebuilt from what is
documented, and it becomes FAQPage text, so it has to be right word for word.

REMOVE:

```
Baidu indexing usually takes two to four weeks after a correctly configured launch. Meaningful ranking movement takes three to six months. Anyone promising faster is selling paid placement and calling it SEO.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10 -->

For a site hosted on the mainland, nothing can rank before the filing
clears, because the site stays closed while a first filing is reviewed. The
provincial review alone generally takes 1 to 20 working days, by Alibaba
Cloud's own figure (August 2026). After launch, the pace is Baidu's. Anyone
who promises rankings by a date is selling paid placement and calling it SEO.

<!-- END REPLACEMENT COPY, CHANGE 10 -->

Keep the answer as one paragraph directly under the question line, with no
blockquote inside the FAQ section: a blockquote line there would be read
into the FAQPage answer text.

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| The comparison renders as a `<table>` element, not as a styled list or prose | PASS. Both comparisons are Markdown tables, which render as `<table>`. |
| The table scrolls horizontally inside its own container at 390px width without the page scrolling sideways | PASS by the existing build. `src/lib/rehypeTableWrapper.mjs` wraps every guide table in `div.table-wrapper`, which `GuideLayout.astro` styles `overflow-x: auto` at full width; the table has `min-width: 400px` under 640px, so it scrolls inside the wrapper. Check at 390px after the build. |
| FAQ JSON-LD validates in the Rich Results Test with zero errors and zero warnings, in all four locales | Prepared. Change 4 sets `faqSchema: true`; the generated block carries `@type` FAQPage, `mainEntity` of Question with `name` and `acceptedAnswer.text`, the same shape B5 shipped on 6 October 2026. The publish step runs the test on the four live URLs. |
| Every FAQ schema answer string appears verbatim in the visible page copy | PASS by construction. The schema is read from the body (`faqsFromMarkdown`), with link markup and emphasis stripped to the visible text. Change 9 keeps the closing paragraph out of the last answer. |
| At least one numeric figure with a source appears in each H2 section | PASS. Four kinds: Statcounter 46.65% and 60.15%. Eight questions: 5,000 to 10,000 yuan (Alibaba Cloud). Credible answers: 1 to 2 and 1 to 20 working days, 30 days (Alibaba Cloud), 60 days (Shanghai CA). Signals: three months (Alibaba Cloud). Pricing: the live vendor pricing review blockquote, unchanged. Frequently asked: 1 to 20 working days, Alibaba Cloud, August 2026, in the answer to question 3. |
| Schema `inLanguage` matches the page locale on all four versions | PASS by construction. `faqSchema(faqs, currentLang)` maps en, fr, es, de to en-GB, fr-FR, es-ES, de-DE. |
| Risk: English strings surviving in translated FAQ schema | Covered. The schema is generated from each locale's own body, so a translated body cannot carry English JSON-LD. |

---

# Word count

Replacement copy only. Excludes the change list, the reasons, the
acceptance table and this table. Counted after the quality loop.

<!-- FEATURE IMAGE
None. T6 skips step 3 unless the work order asks for an image, and T6-04
does not. The page keeps its live hero, /images/guides/choosing-web-agency-china.webp.
-->

<!-- SCHEMA
Type: Article + FAQPage (FAQPage new, through faqSchema: true; the guide layout emits Article and BreadcrumbList)
FAQPage: yes, 4 questions
Breadcrumb: Home > China Web Guide > How to Choose a Web Agency in China
Author: Cyril Drouin (unchanged: the live page carries no author field, so the collection default applies)
datePublished: 2026-08-29 (unchanged). dateModified: the publish date
Measurement: none. The page makes no reachability claim
-->

<!-- ASSET BRIEF
TABLES: (1) the four vendor types, what they sell and where they break,
edited from the live table. (2) the four types against ICP filing, mainland
hosting, Chinese-language content and Baidu work. Both from the page's own
typology; the delivery-layer cells from the Chinafy and 21YunBox product
pages logged in editorial/sources/verified-sources.md ("T6-04 entries,
15 October 2026").
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS: no new link. The live page links to
/resources/china-web-guide/vetting-a-wordpress-agency-china/ (line 17),
/resources/china-web-guide/wordpress-hosting-china/ (line 55),
/china-site-scanner/ and /web-agency-china/ (closing paragraph, moved by
change 9), and keeps all four.
LOCALIZED SLUGS: already registered. fr choisir-agence-web-chine · es
elegir-agencia-web-china · de webagentur-china-auswaehlen
CLIENT SIGN-OFF ON RECORD: none needed. No client is named and no client
figure is used
LINK SUBSTITUTIONS: none
THIRD-PARTY MEASUREMENTS CITED (GFW rule): none
REVIEW: reviewBy 2027-01-13. Refresh the Statcounter month in change 5 and
re-fetch the Alibaba Cloud pages behind changes 6, 7, 8 and 10
-->
