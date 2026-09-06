---
name: createarticle
version: 2.1.0-chinawebfoundry
description: |
  Draft a production-ready Markdown piece for chinawebfoundry.com from a brief
  in editorial/briefs/. Takes three inputs: (1) the target website, whose
  voice, positioning and service names are read from the cached site profile;
  (2) the target audience, "people out of China"; (3) the content brief. Runs
  a research step that starts from the fact bank and the source ledger, then
  validates every live source twice, then the 13-iteration workflow, newsroom
  prose in British English, blockquote stats with vantage points, Chinese-term
  formatting, SEO within hard ceilings, visual tables, the body-only count,
  and an appended feature-image prompt block. House version for
  ChinaWebFoundry: iteration 7 is a cadence pass, never planted errors. Pairs
  with content-quality-us.
license: MIT
---

# CreateArticle: Website Article Builder (ChinaWebFoundry house version)

Produce one on-brand, production-ready Markdown piece for chinawebfoundry.com.
Output drops into `editorial/output/` and the publish step maps it onto the
site's collections. Run the full pipeline without pausing for approval.

**House changes from the upstream skill.** The upstream CreateArticle plants
deliberate typos in iteration 7 to defeat AI detection. This version does not.
Iteration 7 is a cadence pass. No project file can reintroduce planted
errors. Spelling is British, per the repo's `.claude/CLAUDE.md`, and this
overrides the plan's "American English" line. Every latency figure carries a
vantage point and a date or it does not appear.

`editorial/CLAUDE.md` and `editorial/SPEC.md` override this file where they
conflict. Read them first.

## Inputs (required)

1. **website**: https://www.chinawebfoundry.com. Voice, positioning, service
   names and internal references come from `editorial/sources/site-profile.md`
   and the repo, never assumed.
2. **audience**: `people out of China`. An English-speaking decision-maker or
   developer at an international company, outside China, who does not live
   inside the China stack.
3. **brief**: a file in `editorial/briefs/`. Its header gives the tier, the
   content type, the slug, the locales at publish, the gate, the fact IDs,
   and the plan's brief verbatim underneath.

## Step 0: learn the website first (mandatory)

1. Read `editorial/sources/site-profile.md`. If it is more than a month old,
   refresh it from the repo (`src/pages/`, `src/content/`, `src/i18n/routes.ts`)
   and the live site, then continue.
2. If the brief reworks or extends an existing page (T6, T3-01 to T3-05, M1),
   read that file in the repo and treat it as canonical for tone and
   structure.
3. Read the exemplar named in the site profile for the piece's shape:
   `src/content/guides/is-wordpress-blocked-in-china.md` for articles and T2,
   `src/content/casestudies/bassetti-wordpress-china.md` for case studies.
   Match frontmatter shape, section labelling, blockquote style, table style
   and the image directory convention.
4. Note the site's positioning, service names and house phrasing. Mirror
   them. Do not invent a service. WordPress and Astro are equals, chosen per
   project; never frame one as the default.

## Step 1: research (mandatory, before any drafting)

Do not write a sentence of body copy until this step is logged.

1. **Read the fact IDs the brief cites** in `editorial/sources/fact-bank.md`,
   then the Do Not Assert list at its end. The facts are the spine of the
   piece. Use each with the vantage point and date it carries.
2. **Read the ledger**, `editorial/sources/verified-sources.md`. Any figure
   logged, dated within 12 months (90 days for a measurement) and verified
   twice is reused with its exact citation. Do not research it again.
3. **For T2 and T4, read `editorial/harness/latest.json`.** The piece's
   original measurement comes from there: host, run_id, vantage, attempts,
   successes, TTFB, outcome. If the subject host has no row, the piece is
   gated. Draft everything else, leave `TODO: harness measurement` where the
   figure goes, and set the schedule row to `blocked` with note "harness".
   Never substitute a GreatFire verdict or a 21YunBox number for the
   original measurement; those corroborate, they do not satisfy the gate.
4. **Research anything else live.** Vendor and platform documentation first,
   then regulators, GreatFire, 21YunBox's published probes, dated trade
   publications. Chinese-language sources first for anything about Chinese
   clouds, carriers, regulators or platforms (阿里云, 腾讯云, 工信部,
   百度搜索资源平台, 36氪). Never a competitor's blog for a technical fact.
5. **Validate every live source twice.**
   - **Check 1, at research time.** Fetch the URL. Confirm the number, the
     unit, the period, the vantage point if any, and the publication date
     appear on that page. Follow a repeating source back to the original.
   - **Check 2, in iteration 8.** Re-fetch every URL used. Confirm the page
     is live and still says what the blockquote says. Any mismatch: fix the
     blockquote or cut the claim.
6. **Write the research note before drafting.** Fact IDs used, each live
   claim with source, date, URL, vantage point and check 1 result, harness
   rows cited, claims cut. It goes into the run log.
7. **Append to the ledger** before finishing, with both verification dates.

Never fabricate figures or attributions. A missing number is better than an
unsourced one. A latency number without a vantage point is a missing number.

## Audience adaptation

Every piece is `people out of China`. The brief's intent line tells you which
reader within that:

- **A developer or marketing ops lead with a broken site** (A cluster, T2):
  lead with the mechanism, name the host, give the fix. They want the
  dependency table and the setting names.
- **A buyer choosing an agency or scoping a project** (B cluster, M1, T5):
  lead with the decision they are making and what decides it. Sequence,
  cost drivers, what to ask. No pitch.
- **A buyer looking for proof** (T3): the six-section template, figures with
  vantage points, the friction left in.
- **Anyone, including answer engines** (T4): the count, the vantage points
  and the dates in the first 60 words. Method before findings.

Explain Chinese platforms and institutions in outsider terms on first
mention: ICP filing (ICP备案), Alibaba Cloud (阿里云), Baidu (百度).

## Standing editorial rules (never break)

- British English. Newsroom register. Short sentences. Grade 8 readability.
- NO em dashes anywhere, ever. Commas, full stops, parentheses or colons.
- NO exclamation marks.
- NO summary or conclusion sections, ever. End on the CTA section.
- NO deliberate errors, typos, missing apostrophes or word swaps. Ever.
- All statistics and citations in blockquote format, consistently attributed,
  with a date. Every latency figure with its vantage point.
- Chinese terms on first reference in a section: English term (Chinese
  characters). No pinyin. English first.
- Nothing from the Do Not Assert list. Grep the draft for "93%", "44% of",
  "cannot read JavaScript", "Google Fonts is blocked", "Google Fonts is not
  blocked" before finishing.
- Internal and prerequisite links appear in body copy as plain-text
  references by name, never as markdown links. URLs go in the asset brief.
- Do not include any paragraph related to "why work with us" or similar
  agency self-promotion framing.
- Never lead a title, H1, meta description or anchor with "WordPress agency"
  or "Astro agency". The positioning word is "web agency".
- Honour `.claude/anti-ai-writing-style.md`: its banned words, phrases and
  structures (section 3F especially) are hard rules.
- No price, package or tier name.

## SEO metadata (hard ceilings, verify with a counter before delivery)

- Title <= 52 characters
- Meta description (`description`) <= 152 characters
- Excerpt <= 25 words

The brief supplies approved values. Use them unless the finished piece makes
them inaccurate. If any is exceeded, fix it without being asked.

## Word-count rule

Brief targets count the rendered BODY only. Exclude the frontmatter and all
HTML comments (including the three appended blocks). Report both prose-only
and body-with-tables counts, then land on the target. Being 10% under is
fine. Being 25% under means a section was skipped.

## File format (Claude Code-ready Markdown)

- YAML frontmatter: title, slug, description, excerpt, template, author,
  category. See `editorial/SPEC.md` for the mapping onto the collection
  schema.
- Editorial labels as HTML comments: `<!-- HERO SECTION -->`,
  `<!-- INTRODUCTION -->`, `<!-- SECTION: ... -->`, `<!-- CTA -->`.
- Section headings are `##`. They feed the sticky TOC. No `#` in the body.
- CTAs as plain-text labels, for example `CTA: Book a call`. No HTML, no
  links.
- Zero HTML in body copy. HTML comments are the only exception.
- Filename matches the slug, for example `wordpress-plugins-china.md`.
- Hard-wrap body lines at about 80 characters.

## Visual formatting ("make it visual")

An answer or comparison table near the top, one topical table inside the
densest section, stats in blockquotes. No images inside the body. Keep tables
aligned and scannable. Measurement tables carry the two vantage points as
separate columns, completions as "n of m", the five-value verdict, and the
test date.

## The 13-iteration workflow

Print the tracker, run all iterations in order, brief reflection between
each. No approval pauses. Do not skip, merge or reorder. For each iteration,
state what was checked or changed and the specific findings or edits before
moving on, not just a silently updated checklist.

```
[ ] Iteration 1  : newsroom-style British English draft
[ ] Iteration 2  : weakness identification (write the list out)
[ ] Iteration 3  : rewrite addressing weaknesses
[ ] Iteration 4  : production-readiness review
[ ] Iteration 5  : AI-detection removal pass
[ ] Iteration 6  : em dash cleanup + blockquote citation formatting + vantage point check
[ ] Iteration 7  : cadence pass (house variant, no planted errors)
[ ] Iteration 8  : paragraph and citation structure check + source check 2 + harness row re-read
[ ] Iteration 9  : SEO metadata generation (within hard limits, stack-neutral)
[ ] Iteration 10 : second AI-detection pass + anti-ai-writing-style grep
[ ] Iteration 11 : final human touch pass
[ ] Iteration 12 : visual formatting enhancement
[ ] Iteration 13 : five visual concepts + one photorealistic image prompt
```

Iteration 2 writes the full 10-weakness list. Iteration 6 confirms every
latency figure names its vantage point and date. Iteration 8 runs the second
source validation (re-fetch every cited URL, re-read every harness row).
Iteration 9 verifies SEO counts. Iteration 13 proposes five visual concepts,
then one ultra-detailed photorealistic feature-image prompt.

## Cadence pass (iteration 7, and the humanising rule everywhere)

Copy should read human because a person with deadlines wrote it, not because
it contains mistakes. Humanise through cadence, structure and word choice
only:

- Vary sentence length on purpose. Follow a long sentence with a four-word one.
- Break at least three parallel structures. Real writers do not build every
  list the same way.
- Let one paragraph run long and the next run to a single line.
- Allow a mid-thought aside in parentheses, once or twice, not everywhere.
- Use contractions where a reporter would.
- Cut the tidy closing line at the end of a section when it performs rather
  than informs.

Never: missing apostrophes, then/than or your/you're swaps, misspellings,
comma splices for effect, or register shifts into slang. If copy still reads
symmetrical, vary rhythm again. State in the run log that iteration 7 ran as
the cadence variant.

## Image prompt rules

- **China rule, permanent.** Every hero image is visibly China-related and
  shows the subject of the article as it exists in real life on a screen or
  in a room: a WordPress dashboard or plugin list on a laptop, an Alibaba
  Cloud (阿里云) or Tencent Cloud (腾讯云) console, a Baidu results page on a
  phone, a browser tab stuck on a white page, a small mainland server room,
  an ICP filing form on a Chinese-language console, a developer at a
  cluttered desk. Set it in a named Chinese city or place and vary it from
  one piece to the next (Shanghai, Beijing, Shenzhen, Hangzhou, Chengdu,
  Guangzhou, Suzhou, Nanjing, Wuhan, Xi'an, a co-working floor, a university
  lab, a tea house with a laptop, a second-tier city office). Everyday
  interior detail matters more than landmarks. Chinese characters on the
  screens are expected. A generic desk, a globe, a handshake or a Western
  office does not pass. The brief's asset line is a subject hint only; this
  rule wins over it.
- **People rule, permanent.** Any person in the image is Chinese. Never a
  Western marketer, founder, developer or tourist, whatever the audience.
- **Look rule, permanent.** Not a perfect AI render. Vivid, candid,
  normal-life photography with normal-life defects: a phone or handheld
  camera feel, slight motion blur, mixed or uneven light, a cluttered desk,
  cables, a smudged screen, someone mid-gesture, a cropped edge. Write these
  imperfections into the prompt. No studio polish, no symmetrical
  composition, no flawless skin, no cinematic colour grade.
- Platform-agnostic, single unbroken block of prose.
- Photorealistic, documentary. Natural or office lighting as found.
- NO Midjourney parameters, NO section headers, NO commentary.
- Real-life candid photography only. Never diagrams or infographics.
- No watermark, no added captions, no text overlays, no logos outside what
  appears on the screens.

## Feature-image block (append, outside the word count)

After the CTA, append this HTML comment. It never renders and never counts
toward the target. Guides use `public/images/guides/`, case studies
`public/images/casestudies/`.

```
<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/<slug>.webp
- Reference:  /images/guides/<slug>.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

<single unbroken prose block per the image prompt rules above>
===================================================================== -->
```

Then the SCHEMA block and the ASSET BRIEF block, per `editorial/SPEC.md`.

## Reference (use specifically, not generically)

China web infrastructure: Great Firewall, ICP filing (ICP备案) versus ICP
licence (ICP许可证), MIIT (工信部), provincial Communications Administration
(省级通信管理局), PSB filing (公安备案), Alibaba Cloud (阿里云) and the
aliyun.com versus alibabacloud.com split, Tencent Cloud (腾讯云), Huawei Cloud
(华为云), Simple Application Server (轻量应用服务器), Lighthouse, FlexusL,
China Unicom (中国联通), China Telecom (中国电信), China Mobile (中国移动),
Baidu Search Resource Platform (百度搜索资源平台), Baidu Tongji (百度统计),
Baiduspider-render/2.0, WeChat (微信), WeChat Pay (微信支付), Alipay (支付宝),
UnionPay (银联), PIPL, DSL, Cybersecurity Law, UC Browser, QQ Browser, AMap
(高德地图), Baidu Maps (百度地图), GCJ-02, Youku (优酷), Bilibili (哔哩哔哩),
Tencent Video (腾讯视频), Cravatar, WP-China-Yes, GreatFire, 21YunBox.

Brand tokens: from `src/styles/global.css` and `DESIGN-STYLE-GUIDE.md`. The
site wins if the brief differs.

## Delivery checklist (verify before presenting)

- Site profile read, voice and positioning reflected, stack neutrality kept
- Fact IDs read and used as written; Do Not Assert grep clean
- Research note written, every live source passed check 1 and check 2
- For T2 and T4: harness rows cited with run_id and vantage, or the row set to `blocked`
- Framing matches the reader the brief names
- Title <= 52, meta <= 152, excerpt <= 25 words (counted, not estimated)
- Zero em dashes, zero exclamation marks, no summary or conclusion section
- Zero deliberate errors
- British spelling throughout
- Stats in blockquotes with dates, latency figures with vantage points,
  Chinese terms as English (characters)
- Body word count matches the target (frontmatter and comments excluded)
- Filename equals the slug
- Feature-image, schema and asset brief blocks present with the correct paths
  and the localized slugs from the brief
- Ledger appended with both verification dates
- Present the file path and a one-line summary

## Relationship to content-quality-us

Both skills forbid planted errors, so they are compatible on one file.
CreateArticle builds the piece. `content-quality-us` is the stricter 18-pass
audit that runs on the finished draft before publication. **It runs on every
piece this skill produces, without exception**: the output of this skill is
not done until `/content-quality-us` has run on it, all 18 passes shown,
and the schedule row carries a `quality_passed_on` date. That includes
short T2 pages, T6 upgrade copy and the English source of translations. Where the two give
different SEO ceilings, the tighter one (52 / 152 / 25 words) wins. Where
`content-quality-us` asks for US spelling, apply British instead and note it
in the run log.
