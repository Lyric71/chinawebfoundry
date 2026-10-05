---
title: "The China Website Brief: A Checklist"
subtitle: "What to specify before you brief a China web agency, and the answers that separate a specialist from a generalist."
summary: "A brief written for a Western build misses the six things that decide a China project. The checklist to send any vendor, including ours."
visual: "/images/guides/china-website-brief-checklist.webp"
order: 39
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
category: "Technology"
author: "cyril-drouin"
faqSchema: true
---

A China website RFP needs six sections a Western brief seldom asks for:
entity and filing status, the hosting decision, technology and ownership,
Chinese content, search and AI visibility, and who holds the keys after
launch. Leave them out and every vendor fills the gaps with its own
assumptions, so the quotes that come back describe different projects.

The checklist at the bottom is plain text. Send it to every vendor on your
shortlist, us included. Every provider rule on this page was rechecked at
source on 1 October 2026.

| Section                  | What the brief must state                 | What goes wrong without it               |
| ------------------------ | ----------------------------------------- | ---------------------------------------- |
| Entity and filing        | Which mainland company files, and when    | The site is finished and can’t go live   |
| Hosting                  | Mainland origin, or a reason why not      | Two vendors quote two different projects |
| Technology and ownership | Platform, accounts and exit terms         | The vendor owns the server you pay for   |
| Chinese content          | Who approves the copy; where form data goes | Form data leaves China without consent |
| Search and AI visibility | Baidu work beyond verification            | A sitemap submitted and nothing else     |
| Maintenance and keys     | How updates reach a mainland server       | Updates quietly stop after launch        |

## What a standard brief leaves out

On the mainland a finished site can sit dark for weeks, because the server
won’t serve your domain until a government filing clears.

> A domain that resolves to a server in the Chinese mainland must complete its
> website filing before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

That one rule reorders the project, and nobody can quote a timeline until
the brief names the filing entity. A Western brief also takes the site’s
third-party scripts and the agency’s favourite host on trust, files Chinese
copy under translation and leaves Baidu to a plugin.

## Section by section: what a China website RFP must cover

Six headings, in the order a vendor needs to read them.

### Entity and filing status

The ICP filing (ICP备案) is made by a company registered on the mainland. Say
which one, and whether it exists yet.

> Alibaba Cloud international (alibabacloud.com) accounts do not support ICP
> filing. The filing entity must be a mainland-registered enterprise or a
> mainland resident, on an aliyun.com account.
> Source: Alibaba Cloud help centre (English), 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Each vendor’s plan should show the filing as a dependency with its own weeks.

> Alibaba Cloud’s initial review takes 1 to 2 working days. The provincial
> Communications Administration (省级通信管理局) generally takes 1 to 20
> working days. The public security filing (公安备案) is due within 30 days of
> the site opening.
> Source: Alibaba Cloud (阿里云) help centre, 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

If the site will sell paid online services, say so. That can bring in an
ICP licence (ICP许可证), a separate application on a longer clock. Our guide to [ICP filing for foreign companies](/resources/china-web-guide/icp-licence-filing-foreign-companies/) sets out the documents.

### Hosting decision

Ask for a mainland origin, or a written reason for serving from Hong Kong
or further away, with load times measured from a mainland network to back
it. A mainland origin means a filing, made against that same server.

> Filing with Alibaba Cloud requires a server in the Chinese mainland on a
> subscription of 3 months or longer.
> Source: Alibaba Cloud help centre (English), 24 September 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

So the server is bought first, in the filing entity’s name.

Put that in writing.

### Technology and ownership

Name the platform you expect, or make each vendor name one and defend it.
WordPress and Astro both run fine on the mainland. Which one fits comes down
to who edits and what the site has to talk to.

On WordPress, ask who runs the server, because we have not found a
mainland cloud that sells managed WordPress: Alibaba Cloud’s Simple
Application Server (轻量应用服务器) installs it from a preset image on a server
you administer yourself, Tencent Cloud (腾讯云) Lighthouse and Huawei Cloud
(华为云) FlexusL work the same way, and none of them will patch a plugin or
restore a backup for you. Updates and backups land on somebody, and the
brief should name them.

List every account the project opens (aliyun.com, registrar, CMS admin,
analytics) and require each in the client’s name.

### Chinese content

Translation and Chinese copywriting are different jobs. State which you
want, and who in your company approves the Chinese text (and how long that
really takes).

Then say where form submissions go. A contact form feeding a CRM outside
China carries a legal duty.

> A handler that provides personal information outside the PRC must tell the
> individual who receives it and obtain the individual’s separate consent.
> Source: Cyberspace Administration of China (中央网络安全和信息化委员会办公室),
> Personal Information Protection Law, Article 39, 20 August 2021.
> https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

### Search and AI visibility

Yoast and Rank Math both store a Baidu (百度) verification code.

> Yoast SEO’s Site connections settings hold the verification code for Baidu
> Webmaster Tools.
> Source: Yoast help centre, updated 29 April 2026.
> https://yoast.com/help/add-website-baidu-webmaster-tools/

When we read both plugins’ code in August 2026, that tag was the only
Baidu-specific thing either one output. URL submission, Baidu Tongji
(百度统计), Baidu-format structured data and robots.txt rules for Baiduspider
are all manual. Someone has to own them, and the response should say who.

Rendering comes next. Baidu announced its rendering crawler,
Baiduspider-render/2.0, in March 2017 and publishes nothing on how much it
renders, so server-rendered HTML is the lower-risk choice. Then ask which
Chinese AI assistants the vendor checks for your brand’s name in answers.
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

Last comes the exit. A vendor holding the server login and the domain can
stall any change of vendor. List what comes back on the last
day of the contract.

## The questions vendors should answer in writing

Our guide to [choosing a web agency in China](/resources/china-web-guide/choosing-web-agency-china/) has eight questions for the
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

## Red flags in the responses

| Response                                       | What it tells you                                 |
| ---------------------------------------------- | ------------------------------------------------- |
| “We’ll host it on our account”                 | You won’t own the server the filing depends on    |
| A launch date with no filing weeks in the plan | The plan was written for a Western launch         |
| A load time with no network or date            | You can’t tell where, or whether, it was measured |
| “Our SEO plugin covers Baidu”                  | The plugin covers verification and stops there    |
| No ICP number in the footer of their own site  | Ask why: their own filed site is the easy proof   |
| Silence on where form data goes                | Personal data may leave China without consent     |

The footer check takes ten seconds, and a filed site has to pass it.

> Once filed, a site must display its ICP filing number at the bottom of the
> page, linked to beian.miit.gov.cn. Leaving it off can bring a fine of 5,000
> to 10,000 yuan from the provincial Communications Administration.
> Source: Alibaba Cloud (阿里云) help centre, 12 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

## The checklist

Copy it as it stands, then change the wording to sound like your company.

- Filing entity: the mainland-registered company that will hold the ICP
  filing, and whether it exists today.
- Filing type: ICP filing, or ICP licence if the site sells paid online
  services.
- Filing timeline: weeks on the plan, plus the public security filing within
  30 days of launch.
- Server: provider and mainland region, a subscription of at least 3 months,
  bought in the filing entity’s name.
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
- Budget: priced line by line, with the filing, hosting, Chinese copy and
  Baidu work shown as separate lines.
- Proof: a live site the vendor runs, with an ICP number in the footer.

## Frequently asked

**Can one RFP go to vendors inside and outside China?**
Yes. The same list sorts the vendors who file and host on the mainland
themselves from the ones who subcontract. Ask each vendor to mark the items it hands to a
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
habits and your integrations. [A web agency that files and hosts in China](/web-agency-china/)
should be able to argue either way.

**What should the RFP say about budget?**
Give a range if you have one. Either way, ask for a price per line of the
checklist. Quotes for China work differ most on what they leave out: the
filing support, the mainland server, the Chinese copy and the Baidu work are
the lines that go missing or turn up as client responsibilities in small
print.

**How long should vendors get to respond?**
Two to three weeks for a scoped response with a project plan. Ask for a
dated sequence with the filing as its own line, and the server purchase
shown before it. If the plan has the site live before the filing clears,
send it back.
