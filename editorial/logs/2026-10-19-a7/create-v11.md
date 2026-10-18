---
title: "Elementor, Divi and Gutenberg in China"
slug: page-builders-china
description: "Elementor font settings, Divi controls and core Gutenberg dependencies for China sites. What the source confirms, including the editor caveat."
excerpt: "Compare font controls, editor requests and local assets before choosing a page builder for a mainland China website."
template: guide
author: cyril-drouin
category: Technology
reviewBy: 2026-11-19
---

<!-- HERO SECTION -->

Elementor, Divi and Gutenberg in China

<!-- INTRODUCTION -->

For an Elementor China site, check the public page and the editor separately.
Elementor has controls for serving Google Fonts locally, but its editor still
registers a Google-hosted font outside those controls. Divi documents font
switches; core Gutenberg adds no Google Fonts request to the public page by
default. Your theme and add-ons still need checking.

| Builder | What is confirmed | What to check on your site |
|---|---|---|
| Elementor 4.3.4 | Separate font controls; bundled icon libraries | Public font URLs, editor Roboto, add-on widgets |
| Divi | Documented Google Fonts controls | Installed version, saved settings, actual font requests |
| Core Gutenberg in WordPress 7.1.3 | No default public Google Fonts load | Theme fonts, added blocks, font installation |

This is a source and documentation review, checked on 19 October 2026.
It contains no measured speed ranking of the builders. The network evidence
below comes from published third-party tests of individual hosts.

<!-- SECTION: Where the requests come from -->

## Where the requests come from

A builder gives your team a place to choose fonts and add widgets. Each
choice can create a request outside your own website. A font selected in a
design panel, an embedded video and a template imported from the cloud have
different request paths. Check the page that uses them.

Separate what a visitor downloads from what an editor needs to work. A
marketing team can see a clean public page while its editing screen still
contacts a font service abroad. The reverse also matters: a working editor
doesn’t prove that the published page has local assets.

Our WordPress in China overview covers the wider hosting decision. Here,
start with the builder’s font settings and follow the requests they create.
Keep a record of your installed version before changing anything, so another
developer can repeat the check after an update.

<!-- SECTION: Elementor settings -->

## Elementor China settings: two controls to inspect

In Elementor 4.3.4, go to **Elementor > Settings > Advanced > Google Fonts**.
Its default in the inspected version is Enable. This control decides whether
Elementor’s normal font
handling uses Google Fonts. Disable it when you supply fonts through another
route, such as your theme’s local files.

The separate **Elementor > Settings > Performance > Load Google Fonts
Locally** setting defaults to Disable. Enabling it is the option to inspect
when you want to keep Elementor’s Google font choices and serve their files
from your site. Don’t assume a previous installation’s setting describes a
new installation.

> Elementor announced the disabled default for Load Google Fonts Locally on
> 18 September 2025; the 4.3.4 source retains that default.
> Source: Elementor, September 2025; versioned source checked October 2026.
> https://github.com/elementor/elementor/issues/32838
> https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

| Control in Elementor 4.3.4 | Menu tab | Stored option | Default |
|---|---|---|---|
| Google Fonts | Advanced | `elementor_google_font` | Enable |
| Load Google Fonts Locally | Performance | `elementor_local_google_fonts` | Disable |

For a theme that already supplies the required fonts locally, disable
Elementor’s Google Fonts choice. For a design that relies on its Google font
selection, inspect the local-loading option and confirm the resulting URLs.
These routes need different checks.

Choose one font delivery plan and check it on a staging copy. After changing
the settings, clear generated styles and caches, then reload a page with the
browser cache disabled. Inspect both the stylesheet URL and the font file
URLs it contains. A stylesheet served by your domain can still point at a
font file elsewhere.

Headings need their own check. A page-level choice or an added widget
can differ from the site’s global typography. Test the Chinese version too:
the font that draws Latin headings may leave Chinese characters to a fallback.
That can change line breaks even when every request completes.

<!-- SECTION: Editor request -->

## The editor still asks Google for Roboto

The public-page settings don’t cover the whole editing environment. In the
version inspected, `register_base_styles()` registers `google-font-roboto`
against `fonts.googleapis.com` without checking the Google Fonts option.
The `elementor-editor` stylesheet lists that handle as a dependency.

Elementor’s own admin top bar also enqueues Roboto from Google. A developer
who checks only the homepage will miss this second context.

> Elementor 4.3.4 registers the editor’s Roboto stylesheet without the font
> setting condition; its admin top bar has a separate Google stylesheet call.
> Source: Elementor, version 4.3.4, source checked October 2026,
> core/editor/loader/editor-loader.php and modules/admin-top-bar/module.php.
> https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Next, open an existing page in the editor.
Search the browser’s Network panel for `fonts.googleapis.com` and
`fonts.gstatic.com`, then identify the stylesheet that initiated each
request. If you replace an editor stylesheet, preserve the registered
dependency and test the editing controls before deploying the change.

Check the editing workflow too. Save a change, reopen the
page and use the font selector. A screenshot of the finished page says
little about whether a colleague can maintain it from China.

<!-- SECTION: Icons -->

## Elementor’s bundled icons are local

Font Awesome and eicons ship inside the Elementor package. The inspected
source builds their paths from Elementor’s asset location. Check those local paths before replacing an icon CDN mentioned in a generic
troubleshooting guide.

> Elementor 4.3.4 includes Font Awesome and eicons in its local assets and
> registers them using the plugin’s asset paths.
> Source: Elementor, version 4.3.4, source checked October 2026.
> https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Leave the bundled icons in place if their requests complete. An
add-on can bring its own icon service, and site-wide asset rewriting can
change delivery URLs. Use the browser’s request initiator to find which
component owns an external call before removing it.

Our guide to WordPress plugins in China covers that wider dependency review.
Take the same care with scripts: a theme’s library URL can be unrelated to
the builder you are trying to repair.

<!-- SECTION: Dated network evidence -->

## Why the font host matters

21YunBox’s published tests show why a cloud result cannot stand in for a
consumer connection. Read the paired results together; they describe a
particular host on particular networks and dates.

| Host | Alibaba Cloud cn-zhangjiakou, 28 August 2026 | Beijing China Mobile home line, 30 August 2026 | Verdict |
|---|---|---|---|
| fonts.googleapis.com | 72 of 72; 111ms median TTFB | 0 of 54 | Splits by vantage point |

> 21YunBox measured fonts.googleapis.com from Alibaba Cloud (阿里云)
> cn-zhangjiakou every ten minutes for twelve hours on 28 August 2026, with
> a 30-second timeout: 72 of 72 requests completed, median time to first byte
> 111ms. Its Beijing China Mobile (中国移动) home-line run on 30 August,
> covering 264 page loads across 88 sites with a 60-second page ceiling,
> recorded 54 requests to that host and no responses.
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same
> Hosts, Opposite Answers, August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Self-hosting removes that outside font request. It doesn’t certify the rest
of the page. Record any template-cloud or editor-service host you find as
untested unless dated third-party evidence covers it; we give no mainland
reachability verdict here for `my.elementor.com` or `assets.elementor.com`.

Google Hosted Libraries is a separate check if a theme or add-on uses it.

> GreatFire records https://ajax.googleapis.com as blocked, with one failed
> conclusive test, last tested 22 August 2026. It names no city or carrier.
> Source: GreatFire, August 2026, rechecked October 2026.
> https://en.greatfire.org/api/url/https/ajax.googleapis.com

That verdict concerns the library host. It doesn’t establish that a builder
uses it. Find the request before deciding what to replace.

<!-- SECTION: Divi -->

## Divi: use the controls your version documents

Divi is closed source and we did not inspect its code. Elegant Themes’ older
Theme Options documentation names **Use Google Fonts** under General and
**Improve Google Fonts Loading** under the Performance sub-tab. The latter
is described as caching Google Fonts and loading them inline.

Its separate Divi 5 documentation confirms **Use Google Fonts** under
General. Check your version before following an older settings screenshot.
We haven’t verified a complete Divi runtime host list or whether the older
caching control removes every remote font-file request.

> Elegant Themes documents Use Google Fonts and Improve Google Fonts Loading
> in its older Theme Options guide; its Divi 5 guide documents Use Google Fonts.
> Source: Elegant Themes, December 2023 and September 2026 respectively.
> https://help.elegantthemes.com/en/articles/8626158-using-the-divi-theme-options
> https://help.elegantthemes.com/en/articles/12958885-divi-5-theme-options

Before changing Divi, save its typography settings. If you disable Google Fonts,
check the resulting type on representative pages before rollout. Inspect a
logged-out page and the visual editor separately, with caches cleared.
Write down the requests you see so the next developer can check them.

<!-- SECTION: Gutenberg -->

## Core Gutenberg keeps public fonts simple

WordPress core’s block editor adds no Google Fonts load to a public page by
default. In WordPress 7.1.3, the Open Sans and Noto Serif registrations in
`script-loader.php` remain for compatibility with themes and plugins.
Registration and loading are separate steps; a theme or plugin can request
those registered styles.

> WordPress 7.1.3 labels both Google font registrations as retained for themes
> and plugins rather than current core use.
> Source: WordPress core, version 7.1.3, source checked October 2026.
> https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/script-loader.php

The Font Library has a separate installation path. Its Google collection
comes from `s.w.org`. With permission, the editor’s browser fetches the font
files from Google and uploads them to your site. Installed fonts are then
served locally. A failed installation can therefore happen before a visitor
ever opens the page.

> WordPress 7.1.3 defines the Google collection in fonts.php and uses
> downloadFontFaceAssets in the browser before uploading font files.
> Source: WordPress core, version 7.1.3, source checked October 2026.
> https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/fonts.php
> https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Gutenberg also lives inside a wider WordPress installation. A block theme still has its own font choices. Core can request
Gravatar avatars and emoji images from `s.w.org` when those features are
used. Themes and added blocks can introduce more calls.

> WordPress 7.1.3 builds avatar URLs on secure.gravatar.com and defines emoji
> image URLs on s.w.org.
> Source: WordPress core, version 7.1.3, source checked October 2026.
> https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/link-template.php
> https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/formatting.php

<!-- SECTION: Choosing -->

## Choose around the work your editors do

For a new site with ordinary content layouts, start by assessing core blocks
and a theme that supplies local fonts. For an existing Elementor or Divi site,
inspect its current requests before budgeting for a rebuild. The choice also
depends on who maintains the layouts and how much content must move.

| Situation | Practical starting point | Acceptance evidence |
|---|---|---|
| Existing Elementor site | Keep layouts; correct font delivery | Public page and editor request records |
| Existing Divi site | Confirm version and controls | Saved settings plus observed font URLs |
| New editorial site | Assess core blocks and local theme assets | Representative layouts and font installation checked |

Our guide to WordPress speed in China covers the wider performance work.
Keep the builder review focused enough that the person inheriting the site
can repeat it after a plugin or theme update. Assign that check to the person
who approves updates, and keep the request records beside the settings.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Does Elementor work in China?**

Elementor has settings that let you change public-page font delivery. The
4.3.4 source also shows separate editor font requests, so a clean homepage
doesn’t settle the editing question. Check the installed version, the assets
your widgets request and the editing workflow. We haven’t measured a
builder-wide mainland success rate.

**Does disabling Google Fonts in Elementor cover the editor?**

The inspected 4.3.4 editor registers Roboto from Google without checking that
setting, and the admin top bar makes another call. Treat the public page and
editor as separate checks. If you change the editor stylesheet registration,
keep its dependency intact and verify that editing and saving still work.

**Is Gutenberg faster than Divi or Elementor in China?**

This review establishes no speed ranking. Core Gutenberg avoids a default
public Google Fonts request, but the theme and added blocks still decide
much of what a page downloads. Compare the actual layouts and request lists
you intend to ship. Their loading time depends on the files and services each page requests.

<!-- CTA -->

CTA: Run a free China readiness scan on your site
