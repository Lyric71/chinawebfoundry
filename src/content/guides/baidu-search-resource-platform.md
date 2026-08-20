---
title: "What Is the Baidu Search Resource Platform?"
subtitle: "Most foreign companies arrive in China with a Baidu SEO budget and no Baidu login. The budget goes on content. Nobody creates the login. Six months in, there is a meeting about why none of it ranks."
summary: "Baidu's webmaster platform is where China SEO is actually run. What every tool does, and which three tools the guides still recommend are dead."
visual: "/images/guides/baidu-search-resource-platform.webp"
order: 30
published: true
publishedAt: 2026-08-19
updatedAt: 2026-08-19
category: Search
---

The Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) is where Baidu SEO is actually operated. It reports whether Baidu has crawled your site, how many of those pages it kept, and which queries sent clicks. It also tells you what broke. Skip it and a China search strategy is guesswork with a translation invoice attached.

It used to be called Baidu Webmaster Platform (百度站长平台, Bǎidù Zhànzhǎng Píngtái). Plenty of documentation still uses the old name, including some of Baidu's own help pages. Same platform.

> The Baidu App reached 655 million monthly active users in March 2026.
>
> *Source: Baidu Inc., first quarter 2026 results, May 18, 2026*

That is the audience sitting behind the platform, which is why the setup work deserves an hour of somebody senior.

## The three Baidu tools everyone confuses

The Search Resource Platform is the crawl and index side of the house: submission, crawl diagnostics, index volume, keyword data.

Baidu Tongji (百度统计, Bǎidù Tǒngjì) is analytics. It watches people once they have already landed on the page, and it will tell you nothing about how Baidu sees the site.

Baidu Index (百度指数, Bǎidù Zhǐshù) is demand data, the closest thing China has to a keyword planner you can browse. Useful before you write anything. No help at all on the night when nothing is indexed.

You will end up running all three eventually. Only one of them answers the question of whether Baidu can read your pages at all.

## Getting in takes two steps, and the first one is the hard one

You need a Baidu account with real-name verification (实名认证, shímíng rènzhèng) completed. This is where foreign companies stall, and it is worth understanding why before you spend a week on it. Baidu publishes a list of accepted identity documents. An ordinary foreign passport is not on it. In practice that means the account ends up registered against a Chinese entity, or against somebody holding mainland identity. Overseas mobile numbers stopped working reliably for registration around May 2022.

Who registers that account matters more than it sounds. Real-name verification is effectively the ownership record for the search property, so an agency that registers a client site under its own license is holding an asset the client cannot simply take back.

Verifying the domain is the easy half. Ten minutes, if the hosting is behaving. Baidu hands you an HTML file to drop in your document root, or a meta tag for the homepage head. Either is fine. CNAME verification was suspended back in the first quarter of 2023, which has not stopped most English guides from listing it as option three.

One detail costs people a week, over and over. Baidu treats the protocol as part of the site identity. The http and https versions of your domain are two separate properties, and so are www and non-www.

## The tools, and which ones you will actually open

The platform is a toolbox rather than a dashboard. Four groups of tools, roughly.

Start with submission. Standard submission (普通收录, pǔtōng shōulù) covers three channels. There is an API push endpoint that returns your remaining daily quota with every call. There is manual submission, capped at 20 links. And there is sitemap submission, which is a privilege rather than a feature. In September 2023 Baidu published a notice recalling submission quotas from sites whose accounts had never completed real-name verification. Sitemap access went with them, and sites that had been submitting happily for years found the tool gone.

The crawl tools are where you will spend your time. Crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) fetches any URL as Baiduspider and shows you what the crawler received. On a site built with a JavaScript framework, that one screen usually ends the argument about whether rendering is the problem. We have used it to settle that question with client developers more than once. Crawl frequency and crawl exceptions handle volume and errors, and there is a robots.txt tester.

Then there is the reporting. Index volume (索引量, suǒyǐn liàng) tracks how many of your pages Baidu is holding. Read it as a trend line. It is not a page count and Baidu has never claimed it was. Traffic and keywords reports impressions and clicks, with about five hours of lag, and it only populates once the site earns clicks in the first place.

**Site configuration.** Dead link submission, site revision for migrations, mobile adaptation, HTTPS certification, and site attributes, which is where you enter your ICP filing number (备案号, bèi'àn hào). Fill that field the day the filing comes through. It costs nothing and new sites appear to benefit.

## Three tools the guides still recommend that no longer exist

Before you follow any tutorial written before 2024, check it against this list.

Xiongzhang ID (熊掌号, Xióngzhǎng Hào) was Baidu's content ownership program, and it carried a day-level indexing privilege. Baidu took it offline in March 2020.

The structured data tool was invite-only from its launch in 2013 and never covered product data. The URL now returns a server error, which is the clearest statement Baidu has made about it.

Fast inclusion (快速收录, kuàisù shōulù) is the one people miss, because it worked.

> 资源平台于 4 月 26 日下线「快速收录」工具，上新「快速抓取」工具。
>
> *Source: Baidu Search Resource Platform, official announcement, April 2024*

The replacement is fast crawl (快速抓取, kuàisù zhuāqǔ), and it is gated behind Baidu's VIP club. Reported criteria include real-name verification and an ICP filing, plus more than a year of operating history and over 10,000 average daily clicks across mobile and desktop. A newly launched site belonging to a foreign brand qualifies for none of it. So the realistic toolkit for a new site is the API push endpoint, manual submission, and patience.

## What the platform will not tell you

Baidu's results pages have changed far faster than its webmaster tooling.

> Roughly 70% of Baidu's mobile search result pages contained AI-generated content in October 2025.
>
> *Source: Baidu Inc., third quarter 2025 results, November 18, 2025*

None of that shows up inside the Search Resource Platform. There is no AI search module. Nothing tells you whether your content is showing up inside a generated answer. The tooling still describes a search engine made of ten blue links. Baidu's own earnings calls stopped describing it that way a while ago.

Use the platform for what it does cover, which is crawl and index fundamentals, and handle AI visibility as a separate workstream. Nobody at Baidu is going to hand you a report on it.

## If you are starting from zero

A reasonable order of operations, based on what tends to go wrong.

Sort out the account before anything else, because everything downstream depends on the identity behind it. Verify the domain you want ranked, not a redirect of it. Enter the ICP number in site attributes. Then run crawl diagnosis against your homepage and three deep pages before you write a single new article. There is no point publishing into a site Baiduspider cannot reach.

On timing: the account and identity step runs anywhere from a day to several weeks depending on the route you take. Verification itself is same day. First index data usually shows up two to four weeks after a new site starts getting crawled, and empty dashboards before that are normal rather than a sign something is broken.

Baidu changes this platform without much warning, so check the announcement feed before acting on anything dated.
