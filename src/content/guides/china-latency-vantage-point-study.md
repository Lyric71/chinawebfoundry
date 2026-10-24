---
title: "Why China Latency Tests Disagree"
subtitle: "The same resource can answer from a cloud probe and fail on a home connection. Read the network, method and date together."
summary: "Why cloud and home-line results differ in China, using dated 21YunBox observations, exact hosts and separate request counts."
visual: "/images/guides/china-latency-vantage-point-study.webp"
visualAlt: "A developer compares browser request records on a laptop at a dining table in a Beijing apartment."
order: 50
published: true
publishedAt: "2026-10-24"
updatedAt: "2026-10-24"
reviewBy: "2026-11-26"
category: Technology
author: cyril-drouin
---

Method: this study compares 21YunBox’s five-resource observations from Alibaba
Cloud (阿里云) Zhangjiakou on 28 August 2026 and Beijing China Mobile
(中国移动) residential broadband on 30 August. Four resources went unanswered
at home; one did in the cloud. China latency tests can disagree across networks,
dates and methods. These observations cannot isolate which change caused
the difference.

Evidence checked: 24 October 2026. TTFB means time to first byte. Answer counts
refer to resource responses, not completed visitor actions.
The dates above belong to the measurements.
Reading the source again does not turn them into October tests.

| Host ID | Resource | Cloud answers; median TTFB | Home answers; median TTFB | Reading of the pair | Test dates, cloud / home |
|---|---|---|---|---|---|
| host-google-fonts-css | fonts.googleapis.com | 72 of 72; 111ms | 0 of 54; unavailable | Splits by vantage point | 28 / 30 August 2026 |
| host-google-fonts-files | fonts.gstatic.com | 72 of 72; 102ms | 0 of 6; unavailable | Splits by vantage point | 28 / 30 August 2026 |
| host-google-tag-manager | www.googletagmanager.com | 72 of 72; 118ms | 0 of 112; unavailable | Splits by vantage point | 28 / 30 August 2026 |
| host-recaptcha | www.google.com/recaptcha in cloud; www.google.com at home | 0 of 72; unavailable | 0 of 18; unavailable | Blocked: no answers in these samples | 28 / 30 August 2026 |
| host-jsdelivr | cdn.jsdelivr.net | 72 of 72; 660ms | 36 of 36; unavailable | Slow in cloud; reachable at home | 28 / 30 August 2026 |

> These counts and cloud median times come from 21YunBox’s direct requests
> on Alibaba Cloud cn-zhangjiakou, 28 August 2026, and its Beijing China Mobile
> home-line observations, 30 August 2026. Counting rows with no answers gives
> four at home and one in the cloud. Home timings are unpublished.
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same
> Hosts, Opposite Answers, 28 August 2026, updated 30 August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Method and limits

Cloud means Alibaba Cloud (阿里云) cn-zhangjiakou; home means Beijing China
Mobile (中国移动) residential broadband. Blocked describes the observed lack
of answers here, without diagnosing the cause. Slow describes the cloud
delay reported for jsDelivr; we apply no universal timing threshold across
these methods. Unavailable never means zero milliseconds.

ChinaWebFoundry compiled this comparison from published third-party evidence.
We did not run either probe. The common resources let us compare reported
outcomes, provided the differences in collection remain beside the results.

The cloud study repeatedly requested selected resources. The home run loaded
websites in a browser and recorded the external requests those pages made.
That gives a different sample: a host appears only when one of the selected
pages calls it, and some hosts appear much more often than others.

> The cloud resource test used a 30-second timeout and 72 samples per
> resource. The Beijing home run covered 88 sites and 264 page loads with a
> 60-second page-load ceiling; dependency request counts varied by host.
> Source: 21YunBox, 28 and 30 August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The longer page ceiling cannot simply be substituted for the resource
timeout. A request made late in a page load has a different observation
window from a request started on its own. Keep the type of deadline beside
the count, including when you put the figures in a presentation.

China Mobile (中国移动) names the carrier in this study. The connection was
residential broadband. It supplies no result for a phone using the mobile
radio network, even though the carrier’s name makes that an easy mistake.

The study also does not separate location from time. The observations were
made on different dates, using different collection methods. A controlled
explanation of the discrepancy would require evidence that holds those
variables constant. We can report the discrepancy without supplying a cause
the experiment did not establish.

Treat the table as a record of those observations. It cannot set an upper or
lower bound for a future visitor’s load time. A cloud result can help identify
a request worth investigating, but there is no conversion factor that turns
it into a home-line result.

## Why China latency tests disagree

Start with the address being tested. A product name can refer to its public
website, a script server or an API used after someone presses Submit. Reports
about different addresses can be consistent even when their verdicts look
opposite in a comparison sheet.

The request path matters too. The reCAPTCHA row preserves a limitation in the
published comparison: the cloud resource has a path, while the home table
groups requests under the host. That row does not establish a separate
home-line result for every reCAPTCHA endpoint. A developer deciding whether
server-side verification works needs evidence about that particular call.

Check what the observer counted as success. A received response, a completed
document download and a finished browser page load
measure different things. None automatically records the outcome of filling
in a form. Define the task before choosing the figure that will decide
whether the site passes.

For a marketing page, the acceptance record might include readable content
and a working contact route. A customer account page needs a different check,
such as signing in and saving a change. Those are examples of checks a site
owner can specify; the paired study did not measure them.

Retain failed requests when reporting a timing.

A median calculated from successful responses describes that group.
Removing unanswered requests
from a table can make the remaining timing look reassuring while hiding the
visitor who received nothing. A blank timing cell beside a zero answer count
is useful information.

If you have only a screenshot of a speed score, ask for the underlying
address and request record before changing the hosting plan. The screenshot
may be accurate and still answer a different question from the one your
China team is asking.

## A first byte leaves much of the visit unmeasured

TTFB stops when the response starts. The rest of the
response still has to arrive. Reading a timing without its endpoint can
therefore hide the part of the journey you wanted to assess.

> TTFB measures the interval until the first response byte arrives. It can
> include DNS lookup and connection setup before the response begins.
> Source: MDN Web Docs, Time to First Byte, modified 18 July 2025.
> https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte

Keep a page’s first byte separate from the first byte of a font or script.
They belong to different requests. A server can answer the document while
the browser is still waiting for an external resource. The resource table
above contains resource observations, so it cannot supply a complete page
speed for your site.

| Evidence in a report | What it establishes | What you still need for a site decision |
|---|---|---|
| First response byte | The request received an initial response | Whether the transfer and relevant user task finished |
| Resource response count | How often that resource answered in the sample | Which page functions depend on it |
| Browser page-load completion | The stated page-load condition was met | Whether the visitor’s intended action worked |
| Vendor website test | The result for that website | Evidence for the actual embedded asset or customer endpoint |
| URL reachability verdict | The source’s result for that URL and date | A matching network, timing and task if those matter |

The hosting team may have recorded a server response while marketing saw
a failed contact journey. Match each observation to its request before
deciding whether the reports conflict.

Ask what each tool observed and when it stopped watching. A report should
state its completion condition plainly enough that someone else can understand
why a run passed.

The same care applies to a vendor’s marketing site. Its successful load
cannot certify an embedded widget on your domain. An embed may use other
hosts, and your page can request a different version or path. Keep the
vendor-page evidence attached to the vendor-page address until a source
actually tests the dependency you use.

## Keep a URL verdict beside the home-line observation

GreatFire provides another kind of evidence. Its result for the Google Fonts
stylesheet host can sit beside the home-line failure without either source
being silently discarded.

> GreatFire reports all four recent conclusive tests of
> https://fonts.googleapis.com connected normally, last tested 15 October
> 2026. Its cited page supplies no named consumer carrier or latency figure.
> Source: GreatFire, last tested 15 October 2026, checked 24 October 2026.
> https://en.greatfire.org/https/fonts.googleapis.com

The dates are different, and the GreatFire record does not reproduce the
named home-line experiment. It cannot show that the home connection later
recovered. Nor should the older home observation be presented as proof of
what every connection does today.

Our [Google Fonts guide](/resources/china-web-guide/google-fonts-china/) explains the practical consequence for sites that
depend on the hosted stylesheet and
font files. This study keeps the evidence attached to each tested resource.

When reporting a disagreement internally, include both source URLs. Write
which address each source tested and retain the dates in the sentence, even
if the receiving team asks for a shorter answer. A label copied out of
context is much harder to correct once it reaches a procurement document.

An older observation can still explain a failure mode. Its age limits what
you can say about present conditions. That is why this report carries a
review date and keeps the measurement dates visible after a source recheck.

## Read the sample before calculating a rate

Each home-line denominator records how often that host appeared in the
selected page loads. It does not count independent households or people in
other cities. Repeated requests from a connection provide evidence about that
connection during the run; they do not create additional geographic coverage.

The font stylesheet and font-file hosts have different denominators. They
should remain separate even though both belong to Google Fonts. Combining
them would obscure which request was observed and which stage of font
delivery the result concerns.

Likewise, pooling the cloud and home counts would give more weight to
whichever side happened to make more requests. The resulting rate would
depend on the study’s sampling choices. It would have no defined relationship
to the proportion of your customers who can load the page.

A national claim would require evidence about the intended population and
how it was sampled. This report has no such dataset. We do not infer results
for other carriers, other cities or other access networks from the Beijing
line. Corporate networks and mobile-radio access are also outside its scope.

Use unavailable for an unpublished timing and untested when a dependency has
no usable dated test. If a request received no answer, record the observed
failure with its sample. These labels describe different gaps and should
not share one empty spreadsheet
cell.

The [October China Dependency Index](/resources/china-web-guide/china-dependency-index-2026-10/) keeps the wider evidence register and
raw host list. Entries including js.stripe.com and embed.typeform.com remain
untested in that register. Their presence on a page is a reason to inspect
the dependency, without assigning an unsupported reachability verdict.

## When a source changes its verdict

A comparison sheet needs enough information to survive a later correction.
Keep the exact source URL with the claim you took from it. Also record the
date you read the source, separately from the date on which the source says
it tested the address. That distinction matters when an old observation
appears in a newly written article.

The October register’s [raw panel](/data/china-dependency-index-2026-10.json) gives readers a downloadable record of
the wider dependency list. Use the host IDs in this table to find the
corresponding entries (the JSON id omits the host- prefix). The panel includes
evidence beyond this paired
subset, so its full entry count must not become the sample size for the
cloud-versus-home comparison.

Suppose a later source reports a successful response for a previously
unanswered address. Before calling it a recovery, compare the target and
method. An HTTPS root request and an embedded script request can share a
hostname without testing the same thing. A newer publication date may also
describe an older test. Either difference belongs in the record.

A withdrawn number needs similar care. Removing it from a report reduces
what the report can support. It does not show that the network improved or
deteriorated. Keep the reason for the correction with the source record so
the next reader can understand why a cell changed.

For a procurement comparison, agree on the question before copying results
into adjacent columns. A test of a vendor homepage should not occupy the
same column as a customer checkout test unless the difference is explicit.
Where the comparison cannot be made, write the missing evidence in the cell.
That is more useful than a score built from unlike tasks.

After a deployment, retain the page version and
the request list associated with the complaint. If an update removes a
dependency, the old observation still belongs to the earlier page. It can
explain why the change was made without claiming that the removed host has
become reachable.

Untested describes a gap in the register’s dated evidence. Other tests may
exist elsewhere, and a later source can fill that gap. Until then,
there is no supported result to put in the cloud or home column.

## Turn a disputed result into a reviewable decision

Begin with the page and the action that prompted the complaint. Save the
exact URL and describe what the visitor could not do. A complaint that the
website was slow is difficult to match to a resource record; a contact form
that never reached its confirmation screen gives the review a defined end.

Ask the person supplying a report to retain its conditions. That means the
network and location, the observation date, the request target and the rule
for stopping the run. If a report omits one of those fields, say which
comparison it prevents. Do not fill it with an assumption about a typical
Chinese visitor.

For existing request logs, distinguish the document from the external calls
it triggers. Mark which calls are needed for the action under review. A
failed optional pixel and a failed form dependency can produce similar
network errors while calling for different decisions about the page.

Choose a change that matches the evidence. If the page depends on an
external resource for a required action, the review should consider how that
dependency can fail and what the visitor sees then. Do not promise that a
server move will repair every outside request. The document’s location alone
does not describe the browser’s full request list.

Keep the proposed change small enough to assess. Record the dependency it
removes or changes, the function that must survive and the evidence used to
approve it. That creates a useful handover even when the available research
cannot settle every network question.

Our [Strategy Audit](/services/strategy-audit/) can organise that review around the site’s actual
external requests. Bring the disputed report together with the affected
page and the required visitor action. The resulting decision should include
evidence another team can inspect.
