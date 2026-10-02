---
title: "The China Website Brief: A Checklist"
slug: china-website-brief-checklist
description: "A brief written for a Western build misses the six things that decide a China project. The checklist to send any vendor, including ours."
excerpt: "What to specify before you brief a China web agency, and the answers that separate a specialist from a generalist."
template: guide
author: cyril-drouin
category: Technology
---

<!-- HERO SECTION -->

The China website brief: a checklist

<!-- INTRODUCTION -->

A China website RFP needs six sections a Western brief seldom asks for:
entity and filing status, the hosting decision, technology and ownership,
Chinese content, search and AI visibility, and who holds the keys after
launch. Leave them out and every vendor fills the gaps with its own
assumptions, so the quotes that come back describe different projects.

The checklist at the bottom is plain text. Send it to every vendor on your
shortlist, us included. Provider rules below were checked against Alibaba
Cloud documentation on 1 October 2026.

| Section                  | What the brief must state                 | What goes wrong without it               |
| ------------------------ | ----------------------------------------- | ---------------------------------------- |
| Entity and filing        | Which mainland company files, and when    | The site is finished and can't go live   |
| Hosting                  | Mainland origin, or a reason why not      | Two vendors quote two different projects |
| Technology and ownership | Platform, accounts and exit terms         | The vendor owns the server you pay for   |
| Chinese content          | Who approves the copy; where form data goes | Form data leaves China without consent |
| Search and AI visibility | Baidu work beyond verification            | A sitemap submitted and nothing else     |
| Maintenance and keys     | How updates reach a mainland server       | Updates quietly stop after launch        |

<!-- SECTION: What a standard brief leaves out -->

## What a standard brief leaves out

On the mainland a finished site can sit dark for weeks, because the server
won't serve your domain until a government filing clears.

> A domain that resolves to a server in the Chinese mainland must complete its
> website filing before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

That one rule reorders the project. Nobody can quote a timeline until the
brief names the filing entity. And a brief written for a Western build takes
today's third-party scripts and the agency's favourite host on trust, when
both need checking from inside the country. It also treats Chinese copy as a
translation job and Baidu as a plugin setting.

<!-- SECTION: Section by section -->

## Section by section: what a China website RFP must cover

### Entity and filing status

The ICP filing (ICP备案) is made by a company registered on the mainland. Say
which one, and whether it exists yet.

> Alibaba Cloud international (alibabacloud.com) accounts do not support ICP
> filing. The filing entity must be a mainland-registered enterprise or a
> mainland resident, on an aliyun.com account.
> Source: Alibaba Cloud help centre, 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Each vendor's plan should show the filing as a dependency with its own weeks.

> Alibaba Cloud's initial review takes 1 to 2 working days. The provincial
> Communications Administration (省级通信管理局) generally takes 1 to 20
> working days. The public security filing (公安备案) is due within 30 days of
> the site opening.
> Source: Alibaba Cloud (阿里云) help centre, 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

If the site will sell paid online services, say so. That can bring in an
ICP licence (ICP许可证), a separate application on a longer clock. Our guide to ICP filing for foreign companies sets out the documents.

### Hosting decision

Ask for a mainland origin, or a written reason for serving from outside.
A Hong Kong or overseas origin needs no filing, so ask the vendor what that
costs in speed, measured from a mainland network. A mainland origin means
a filing, made against that same server.

> Filing with Alibaba Cloud requires a server in the Chinese mainland on a
> subscription of 3 months or longer.
> Source: Alibaba Cloud help centre, 24 September 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

So the server is bought first, in the filing entity's name.

Put that in writing.

### Technology and ownership

Name the platform you expect, or make each vendor name one and defend it.
WordPress and Astro both work on the mainland; the fit depends on who edits
and what the site connects to.

On WordPress, ask who runs the server, because we have not found a
mainland cloud that sells managed WordPress: Alibaba Cloud's Simple
Application Server (轻量应用服务器) installs it from a preset image on a server
you administer yourself, Tencent Cloud (腾讯云) Lighthouse and Huawei Cloud
(华为云) FlexusL work the same way, and none of them will patch a plugin or
restore a backup for you. Updates and backups land on somebody. The brief
says on whom.

List every account the project opens (aliyun.com, registrar, CMS admin,
analytics) and require each in the client's name.

### Chinese content

Translation and Chinese copywriting are different jobs. State which you
want, and who in your company approves the Chinese text (and how long that
really takes).

Then say where form submissions go. A contact form feeding a CRM outside
China carries a legal duty.

> A handler that provides personal information outside the PRC must tell the
> individual who receives it and obtain the individual's separate consent.
> Source: Cyberspace Administration of China (中央网络安全和信息化委员会办公室),
> Personal Information Protection Law, Article 39, 20 August 2021.
> https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

### Search and AI visibility

Yoast and Rank Math both store a Baidu (百度) verification code.

> Yoast SEO's Site connections settings hold the verification code for Baidu
> Webmaster Tools.
> Source: Yoast help centre, updated 29 April 2026.
> https://yoast.com/help/add-website-baidu-webmaster-tools/

When we read both plugins' code in August 2026, that tag was the only
Baidu-specific thing either one output. URL submission, Baidu Tongji
(百度统计), Baidu-format structured data and robots.txt rules for Baiduspider
are all manual. Ask who does them.

Rendering comes next. Baidu announced its rendering crawler,
Baiduspider-render/2.0, in March 2017 and publishes nothing on how much it
renders, so server-rendered HTML is the lower-risk choice. Then ask which
Chinese AI assistants the vendor checks for your brand's name in answers.
DeepSeek, Doubao (豆包), Kimi, Qwen (通义千问) and Yuanbao (元宝) are the names
to hear.

### Maintenance and who holds the keys

How do core and plugin updates reach a mainland server?

> WordPress.org staff wrote that several Chinese network sources are
> rate-limited on certain services because of abuse, and that there would be
> no whitelisting.
> Source: WordPress.org Meta Trac, ticket #5106, 21 March 2020.
> https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Which external scripts stay on the page? A theme that loads jQuery from
ajax.googleapis.com halts the page while it waits.

> Probed from an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August
> 2026, Google Hosted Libraries returned a first byte in 0 of 3 runs, each
> abandoned at 60 seconds.
> Source: 21YunBox, Google Hosted Libraries in China, 30 August 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

Last comes the exit. A vendor holding the server login, the domain and the
CMS admin can stall any change of vendor. List what comes back on the last
day of the contract.

<!-- SECTION: Questions in writing -->

## The questions vendors should answer in writing

Our guide to choosing a web agency in China has eight questions for the
first call. These seven go in the written response, because the answers
become contract terms.

1. Whose name is on the ICP filing, and whose aliyun.com account holds the
   server?
2. How many weeks does your plan give the filing, and what runs alongside it?
3. Which third-party hosts will the finished site still call, by name?
4. What load time do you commit to, measured from which mainland network, on
   what date?
5. How do updates reach the server, and who applies them?
6. Where do form submissions go, and under what consent?
7. At contract end, do we get the files and the database with full admin
   credentials?

<!-- SECTION: Red flags -->

## Red flags in the responses

| Response                                       | What it tells you                                 |
| ---------------------------------------------- | ------------------------------------------------- |
| "We'll host it on our account"                 | You won't own the server the filing depends on    |
| A launch date with no filing weeks in the plan | The plan was written for a Western launch         |
| A load time with no network or date            | You can't tell where, or whether, it was measured |
| "Our SEO plugin covers Baidu"                  | The plugin covers verification and stops there    |
| No ICP number in the footer of their own site  | Ask why: their own filed site is the easy proof   |
| Silence on where form data goes                | Personal data may leave China without consent     |

The footer check takes ten seconds, and a filed site has to pass it.

> Once filed, a site must display its ICP filing number at the bottom of the
> page, linked to beian.miit.gov.cn. Leaving it off can bring a fine of 5,000
> to 10,000 yuan from the provincial Communications Administration.
> Source: Alibaba Cloud (阿里云) help centre, 12 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

<!-- SECTION: The checklist -->

## The checklist

Lift it as it stands.

- Filing entity: the mainland-registered company that will hold the ICP
  filing, and whether it exists today.
- Filing type: ICP filing, or ICP licence if the site sells paid online
  services.
- Filing timeline: weeks on the plan, plus the public security filing within
  30 days of launch.
- Server: provider and mainland region, a subscription of at least 3 months,
  bought in the filing entity's name.
- Accounts: aliyun.com, domain registrar, CMS admin and analytics, all in our
  name.
- Platform: named, with the reason it fits how we edit.
- Third-party hosts: everything the site calls today, and what the finished
  site will still call.
- Load time: a target, the mainland network it is measured from, the date.
- Chinese copy: written or translated, by whom, and who approves it.
- Forms: where submissions are stored, and the consent wording.
- Baidu: verification, URL submission, Baidu Tongji, rendering.
- AI assistants: which Chinese assistants are tracked, and how.
- Updates: how core and plugin updates reach a mainland server, and who
  applies them.
- Exit: files and database handed back with admin credentials.
- Proof: a live site the vendor runs, with an ICP number in the footer.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Can one RFP go to vendors inside and outside China?**
Yes. The same list shows who can file and host on the mainland and who
will subcontract it. Ask each vendor to mark the items it hands to a
partner, and to name the partner. A blank next to the filing entity or the
server says more than the rest of the response.

**Do we need a mainland company before we brief anyone?**
You need it before the filing, which sits on the critical path. Brief
vendors while the company is being registered, but expect no firm launch
date until the business licence exists. Say in the brief where registration
stands and when you expect the licence, so vendors plan from the same date.

**Should the RFP specify WordPress?**
Only if your team already runs WordPress and wants to keep it. Otherwise
let each vendor propose a platform and justify it against your editing
habits and your integrations. A web agency that files and hosts in China
should be able to argue either way.

**How long should vendors get to respond?**
Two to three weeks for a scoped response with a project plan. Ask for a
dated sequence with the filing as its own line, and the server purchase
shown before it. A launch date that falls before the filing clears means the
brief went unread.

<!-- CTA -->

CTA: Talk to our team about a strategy and audit engagement

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/china-website-brief-checklist.webp
- Reference:  /images/guides/china-website-brief-checklist.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

Five concepts considered (iteration 13):
1. A small meeting room in a Wuhan office: two colleagues comparing vendor
   proposals, a laptop open on a Chinese-language requirements document,
   the aliyun.com ICP filing console on a second monitor. CHOSEN.
2. A Nanjing co-working desk: printed RFP pages with highlighter marks next
   to a laptop spreadsheet of vendor answers.
3. A hand holding a phone over a cluttered desk, the phone showing the
   bottom of a Chinese company website with the ICP filing number.
4. A Xi'an tea house: laptop on a WordPress dashboard, a paper notebook
   with ticked boxes, a glass of green tea.
5. A procurement office in a second-tier city: a printer spitting out a
   proposal while someone reads the same document on a laptop.

IMAGE PROMPT (use verbatim):

Candid handheld photograph inside a small, slightly cramped meeting room of a mid-sized company office in Wuhan, China, on an overcast afternoon, flat grey daylight from a window on the left mixing with cool overhead fluorescent tubes. Two Chinese colleagues in their thirties sit side by side at a laminated wooden table: a woman in a navy cardigan leans in and points at a laptop screen with a capped pen, mid-gesture and a little motion-blurred, while a man in a plain grey shirt with rolled sleeves frowns at it with one hand on the trackpad. The laptop shows a long Chinese-language requirements document with a numbered checklist and table rows, partly scrolled, readable only as dense Chinese text. Behind it a second monitor, slightly out of focus, shows the Alibaba Cloud aliyun.com ICP filing console in Chinese with a form half filled in. On the table: a stack of printed proposals held with a black binder clip, a yellow highlighter with its cap off, two paper cups of tea, a phone face down, a tangle of a laptop charger and an HDMI cable, a whiteboard marker. Smudges and fingerprints on the laptop screen, a faint reflection of the window on the monitor, the table edge cropped at the bottom of the frame, a chair back intruding on the right. Ordinary office colours, mild noise from the indoor light, slightly tilted framing as if taken quickly on a phone by a third colleague. Photorealistic documentary style, no studio lighting, no cinematic colour grade, no text overlays, no captions, no watermark, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article + FAQPage
FAQPage: yes, 4 questions
Breadcrumb: Home > China Web Guide > The China Website Brief: A Checklist
Author: Cyril Drouin
datePublished: 2026-10-06
Measurement: none (T1; no harness run cited; the one latency figure is
21YunBox's, attributed as third party)
-->

<!-- ASSET BRIEF
TABLES:
  1. Answer table in the introduction: six brief sections, what each must
     state, what goes wrong without it. Editorial, derived from the sources
     cited in the body. No harness run.
  2. Red flags table: six vendor responses and what each tells you.
     Editorial. No harness run.
CHARTS: none.
SCREENSHOTS: none required. Optional: an aliyun.com ICP filing console with
  every entity name, ID and phone number blurred.
DOWNLOADS: none, by brief rule. The checklist stays a plain, ungated list
  on the page so answer engines can quote it. Do not turn it into a PDF.
INTERNAL LINKS:
  our guide to ICP filing for foreign companies -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
  our guide to choosing a web agency in China -> /resources/china-web-guide/choosing-web-agency-china/
  a web agency that files and hosts in China -> /web-agency-china/
  (CTA, rendered by the layout) strategy and audit engagement -> /services/strategy-audit/
LOCALIZED SLUGS: fr checklist-brief-site-chine · es checklist-brief-sitio-china · de china-website-briefing-checkliste
CLIENT SIGN-OFF NEEDED: none. No client named, no client figure.
HARNESS ROWS CITED: none. harness/latest.json read 2026-10-01: generated
  null, vantages [], rows []. B5 is T1 and not gated on the harness.
BRIEF DEVIATIONS:
  1. Sideways link to china-website-cost: that guide is B2, week 19, and
     does not exist. Replaced by icp-licence-filing-foreign-companies. When
     B2 publishes, add a sentence pointing to it from the hosting or
     checklist section.
  2. Title kept as approved ("The China Website Brief: A Checklist"). The
     H1 renders from the title, so the primary query "china website rfp"
     sits in the first 100 words and in one H2 but not in the H1. A title
     with RFP would need re-approval. Flag for PLAN.md.
  3. The brief lists no FAQ questions. Four written from the buyer's
     questions the brief's angle implies.
FACT BANK NOTES (for PLAN.md section 4):
  F21: Yoast's own help page (29 April 2026) and Rank Math's KB (16 March
  2023) confirm the verification-code half. The "nothing else" half rests
  on the fact bank's source reading of 29 August 2026 and is printed as our
  reading.
  F26: the licence review figure is printed without a number; the ledger
  holds 60 days from acceptance (Shanghai Communications Administration),
  not the fact bank's 60 to 90 working days.
SITE CONFLICT FLAG: choosing-web-agency-china (the sideways target) still
  says Google Fonts "isn't" blocked in China, a flat claim on the Do Not
  Assert list. T6-04 (23 October) touches that page and should fix it.
-->
