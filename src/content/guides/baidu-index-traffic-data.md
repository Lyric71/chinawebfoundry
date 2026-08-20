---
title: "Reading Baidu's Index Volume and Traffic Data"
subtitle: "Two weeks after launch, somebody in marketing finally logs into the Baidu Search Resource Platform. Index volume: zero. Traffic and keywords: empty. Crawl frequency: a flat line. The obvious reading is that the site is broken. Usually it is not."
summary: "What Baidu's index volume, traffic and keyword reports actually measure, how far to trust each one, and when a new site should expect data."
visual: "/images/guides/baidu-index-traffic-data.webp"
order: 21
published: true
publishedAt: 2026-08-15
updatedAt: 2026-08-15
category: Search
---

The reporting side of the Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) is not a dashboard in the sense you are used to. It is a set of separate instruments sharing a login, each on its own clock, several of them empty for weeks by design.

## Index volume is a trend line, not a page count

Index volume (索引量, suǒyǐn liàng) gets quoted in meetings more than any other figure here, and misread more often too. It reports how many of your pages Baidu is holding. Not which pages, and not an exact count. Baidu has never presented it as one.

Granularity is better than people assume. Daily points for the trailing year, monthly once you go further back. That is enough to find the week a migration went wrong, which is most of what anyone needs from it.

What you cannot do is treat two adjacent days as a measurement. Overnight movement is noise. A drop that holds for two weeks is worth a meeting.

One detail catches out companies running a country subdomain. Subdomain-level index data only appears when the root domain is verified too, according to agency documentation on the platform.

## Traffic and keywords stays empty until you earn clicks

Traffic and keywords (流量与关键词, liúliàng yǔ guānjiàncí) reports impressions and clicks against the queries that produced them. It is the closest thing Baidu offers to a performance report, and it surprises people arriving from Search Console.

Measurement runs hourly, finer than most people expect, and lags by roughly five hours. The 9am spike turns up mid afternoon.

Retention is the bigger constraint. The keyword window is 30 days and it does not extend. Mobile keyword data is kept about three months. A year-over-year view of which queries sent traffic is something you build yourself, exporting on a schedule from launch week. Most teams learn that too late.

The report also caps at 50,000 keyword rows. Brochure sites will never see it. A large catalog will, and the long tail falls off the end of the export.

Then the part that causes the alarm. This report fills only once the site earns clicks, a higher bar than being crawled or indexed. A new site with no rankings shows nothing, and nothing is the correct reading here.

> Roughly 70% of Baidu's mobile search result pages contained AI-generated content in October 2025.
>
> *Source: Baidu Inc., third quarter 2025 results, November 18, 2025*

Worth holding in mind when the clicks arrive slower than the rankings suggest they should. Your link is no longer the only thing on the page.

## Crawl frequency and crawl exceptions need a spider first

Further down the menu, crawl frequency and crawl exceptions are observational. Frequency shows how often Baiduspider is coming back, exceptions shows what it hit when it did. If the spider has not visited, there is nothing to record, and a flat line means it never came. Different problem entirely from a crawler that came and failed.

The distinction changes what you do next. A flat crawl chart on a two-week-old site is not a reason to rewrite content. It is a reason to check whether Baiduspider can reach the server at all, which is a hosting and firewall question.

Crawl exceptions lists the URLs that failed, and practitioner sources put that list at the first 1,000 links. Baidu has not confirmed the figure, so treat it as a working assumption. Either way, a site that has just broken a large catalog gets a sample, not a full accounting.

## Crawl diagnosis answers one URL at a time, and it is rationed

Crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) is the only tool here that gives a live answer. It fetches a URL as Baiduspider, desktop or mobile, and shows what came back. On a JavaScript-rendered site it usually ends the argument in one screen.

Two limits shape how you use it. It captures the first 200KB of content, which leaves a heavy page truncated. And the weekly fetch quota is rationed, with sources disagreeing on the figure: 优化猩 reports 70 fetches a week, Dragon Metrics reports 200. We budget for the lower one.

Dead link submission (死链提交, sǐliàn tíjiāo) is the cleanup counterpart. Feed it txt or xml, up to 50,000 URLs and 10MB, and removal usually lands between three days and a week. Run it after any migration, or let Baidu find the 404s at its own pace.

## What to do when the reports contradict each other

They will contradict each other. Index volume usually sits below your sitemap count. Baidu Tongji (百度统计, Bǎidù Tǒngjì) shows sessions that traffic and keywords never accounts for. None of this is a bug you can file.

The reports measure different things. Index volume is an estimate on a daily clock. Traffic and keywords runs hourly, five hours behind, and counts only clicks Baidu attributes to organic search. Tongji is a JavaScript tag counting humans who reached your server by any route. No shared layer sits underneath them.

So work in a rough order of confidence. A crawl diagnosis fetch is the most trustworthy thing on the platform, because you triggered it and the response is in front of you. Click data comes next, then index volume, which is directional at best. Quota displays deserve the least trust of anything: Baidu's submission tool copy states a ceiling of 100,000 URLs a day, while practitioners document real allowances collapsing to 100.

When two reports disagree about whether a page is indexed, go look at the search results. A site: query plus a diagnosis fetch settles it faster than a support ticket.

We tell clients this in week one, and it saves frustration later. Baidu's reporting is less precise than Google Search Console. Fewer dimensions and shorter retention, and no estimate arrives with any sense of how rough it might be. Plan around what the tooling does.

## When a new site should expect to see something

Start with the part that moves quickly. Verification runs instant to 24 hours, often the same session. Crawl diagnosis works straight after. Open that one first.

Initial indexing for a new site runs two to four weeks. Index volume commonly reads zero for days or weeks inside that window, and an unfiled site moves slower still. If the ICP filing number (备案号, bèi'àn hào) exists, enter it in site attributes on day one. Sites under six months old are specifically advised to submit it.

Baidu publishes no service level agreement for any of it. Nothing commits the crawler to an interval, and no indexing window is promised anywhere. Every timeline above is observed behavior, not a commitment, so the honest answer to "when will we be indexed" comes as a range with conditions attached.

Report limits change without announcement, so verify quotas against the platform before planning around them.
