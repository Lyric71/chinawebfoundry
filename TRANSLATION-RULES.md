# Translation Rules — portable extract

Self-contained translation ruleset extracted from the BeyondBorderGroup project (`.claude/CLAUDE.md`). Drop this file into another project and it works on its own: it bundles the translation rule plus every rule it depends on (the 9-iteration humanizer process, the em-dash ban, the no-numbered-cards rule, and the anti-AI writing reference).

## How to use this file in another project

Pick one:

1. **Reference it.** Keep this file at the project root (or in `.claude/`) and add one line to that project's `CLAUDE.md`: `Before any non-English content work, read TRANSLATION-RULES.md and apply it in full.`
2. **Inline it.** Paste sections 1–5 directly into the project's `CLAUDE.md` as numbered sections.

Cross-references inside this file are internal and consistent:

- **Section 1** — the translation rule (subsections 1.1–1.11)
- **Section 2** — the humanizer process (the 9 iterations)
- **Section 3** — no em dashes
- **Section 4** — no numbered cards
- **Section 5** — anti-AI writing reference (the checklist the humanizer's AI-detection passes use)

Paths assume the same Astro setup as the source project: `src/pages/<locale>/` for locale pages and `src/i18n/` for shared strings. If the target project routes locales differently, swap those paths for the equivalent ones; the rules themselves do not change.

---

## 1. Translation rule (MANDATORY, full detail)

This is the single source of truth for any non-English work on the site. Apply every part of it. Output must read like a native journalist in the target language wrote it originally, not like an English page that got translated. Never expose any of the steps below to the user. Ship only the final native-quality output.

### 1.1 When this rule fires

Trigger: any time I edit, draft, translate, or fix content in
- `src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`
- any non-English string in `src/i18n/` (including `ui.ts` and any locale JSON)
- any non-English alt text, meta description, OpenGraph copy, slug label, button label, form label, error message, microcopy, blog post, email, caption

It does NOT fire for: code, identifiers, file paths, console logs, code comments, commit messages, PR descriptions, internal docs.

### 1.2 Core principles (read every time)

**1. Native translation, not literal translation**
- Write as a native speaker would naturally express the idea in the target language.
- Adapt idioms, expressions, and cultural references to feel local.
- Prioritize natural flow, tone, and readability over word-for-word fidelity to the source.
- Match the register (formal, casual, professional) appropriate to the target audience.
- Use locale-specific conventions (date formats, currency, units, punctuation, quotation marks, number formatting, address forms).

**2. Improve the existing language page, do NOT retranslate from English**
- Always start from the current version of the target-language page, not from the English source.
- Treat the existing translation as the baseline. Preserve what already works.
- Only modify sections that are awkward, outdated, inaccurate, or missing.
- Do NOT regenerate the full page from English. That destroys prior editorial work (humanizer + native-rewrite passes already applied) and reintroduces translated-sounding copy.
- If the English source has new content that is missing in the target page, add ONLY the missing parts and translate them natively, keeping the rest of the page untouched.
- The existing locale page is editorial state, not draft state.

**3. Native journalistic register per language**

Step 1 below targets the journalistic register of a serious daily/business paper. Step 2 polishes it further.

- FR: Le Monde / Les Echos register, not literal Anglo-French.
- ES: El País register.
- ZH: 财经 / 36氪 register, not English-syntax 中式中文.
- DE: FAZ / Handelsblatt register.

### 1.3 Workflow per edit (mandatory order)

1. Open the existing target-language page first. Read it in full before doing anything else.
2. Compare against the English source ONLY to identify gaps or outdated sections.
3. For each section:
   - If it reads naturally and is accurate → leave it as is.
   - If it reads awkwardly or like a machine translation → rewrite it in native style (apply the two-step process in 1.4 to that section only).
   - If it is missing → translate the corresponding English section natively (apply the two-step process in 1.4).
4. Preserve existing terminology choices unless they are clearly wrong. Consistency matters more than personal preference.
5. Keep page structure (headings, anchors, IDs, frontmatter, metadata, slugs, ARIA labels, schema.org markup) intact unless explicitly asked to change it.
6. Do not change SEO-sensitive elements (title, meta description, H1, slugs) without flagging it first.

### 1.4 Two-step rewrite (for any new or rewritten section)

When porting a new English section, or when an existing section needs a rewrite, apply BOTH steps in order. Step 2 is non-optional and applies even when Step 1 looks fine.

**Step 1 — Humanized translation**

- Translate from the English source using the 9-iteration humanizer process from section 2.
- Hit the native journalistic register listed in 1.2, principle 3.
- Match register (formal / casual / professional) to the audience.
- Use locale-specific conventions for dates, currency, units, numbers, punctuation, quotation marks.

**Step 2 — Native rewrite (mandatory)**

- Treat Step 1's output as a draft that is *not native enough* and *too familiar / too low level*. This step is non-optional and applies even when Step 1 looks fine.
- Do NOT look back at the English source while doing this. Work only from the target-language draft and improve it in-language.
- Goal is a full rewrite, not a correction. Specifically:
  - Restructure sentences (break long ones, merge choppy ones).
  - Switch idioms to native equivalents.
  - Swap weak verbs for strong native ones.
  - Drop English-shaped clauses, relative pronouns, possessives, and noun chains that betray translation.
  - Replace nominal constructions with verbal ones where the target language prefers verbs (esp. FR / ES).
  - Use the target language's natural rhythm and connectors.
  - Vary sentence length the way a native journalist would in that register.

### 1.5 Diacritics (mandatory, never optional)

Never ship unaccented copy. Accents and diacritics are mandatory wherever the language requires them.

- FR: `é è ê à â ç ù û ü ô î ï ÿ`. Capital letters keep their accents (`À`, `É`, `Ç`, `Ê`, `Î`).
- ES: `á é í ó ú ñ ü`. Opening punctuation `¿` and `¡` are mandatory.
- DE: `ä ö ü ß`. Use `ß` and `ss` correctly per current orthography; never substitute `ss` to avoid the character.
- PT (if added later): `á à â ã é ê í ó ô õ ú ç`.

### 1.6 Punctuation conventions per locale

- ZH: full-width punctuation `。 ， 、 ： ； ！ ？ " " ' ' （ ）` and full-width brackets where appropriate. No half-width Latin punctuation inside Chinese sentences. Numbers and Latin product names stay half-width.
- FR: guillemets `« »` with non-breaking spaces inside for quotation marks where natural; non-breaking space before `: ; ! ?` per French typography. Use insécable spaces conventions where typesetting allows.
- ES: opening `¿` and `¡` are mandatory at the start of questions and exclamations.
- DE: standard double quotes `„…"` (low-9 + high-99) where typesetting allows; otherwise straight quotes are acceptable. Use the correct dash conventions and no Oxford-comma style enumerations.

### 1.7 Locale variant

- Chinese: prefer simplified Chinese (zh-CN) unless the file path, frontmatter, or directory indicates traditional (zh-TW / zh-HK).
- French: metropolitan French unless otherwise specified.
- Spanish: neutral peninsular Spanish unless otherwise specified.
- German: standard German (de-DE) unless otherwise specified.

### 1.8 Brand and product names

Brand names, product names, and technical terms that are conventionally kept in English in the target market stay in their canonical English form. Do NOT translate them. Do NOT invent localized versions. Do NOT change capitalization to match the target language's title-case rules.

### 1.9 Single-locale default — no auto-translate

When the user requests a content or copy change, default to editing **only the file(s) they referenced or are looking at**. Do not propagate the same change to the other locale variants (`src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`, or non-English strings in `src/i18n/`) until the user explicitly tells me to.

- Default scope = single locale, usually English (`src/pages/*.astro` without a locale prefix), even when the same section exists in `de/`, `es/`, `fr/`, `zh/`.
- This overrides any previous default of "if a section exists in 5 locales, edit all 5". The new default is one locale at a time.
- Only propagate to other locales when the user says so explicitly, e.g.: "now apply to all locales", "translate this", "do all 5 versions", "propagate", "update all languages", "translate to FR/DE/ES/ZH".
- When editing the English version, end with a one-line offer: "Want me to propagate this to FR/DE/ES/ZH?". Never propagate without the user accepting.
- Once the user authorizes translation, still apply the full two-step humanize + native-rewrite process from 1.4 for each locale; never copy English structure into the translation.
- For each locale the user authorizes, apply the workflow in 1.3: open the existing locale page first, port only the diff, then run the two-step process on the new section.
- Applies to: copy changes, hero rewrites, section reworks, button labels, taglines, alt text, meta descriptions, error messages, and any user-visible text.
- Does NOT apply to shared infrastructure changes (CSS in `global.css`, shared Astro components, route helpers, layout files, `astro.config.mjs`); those changes are technically global by nature.

### 1.10 What to avoid

- Full retranslation of an existing locale page from English.
- "Improving" sections that are already fine just to show changes.
- Em dashes in any language (see section 3).
- Numeric card badges in any language (see section 4).
- Translating brand or product names.
- Anglicized syntax: literal "of the", overuse of "which", noun chains, gerund-heavy sentences, possessive `'s` ported into FR/ES/DE/ZH.
- Mixed register inside one page.
- Unaccented diacritics, missing `¿ ¡`, missing `ß`, half-width punctuation inside Chinese sentences.
- Changing SEO-sensitive elements (title, meta description, H1, slugs) without flagging.
- Exposing the two-step process or iteration steps to the user. Ship only the final native-quality output.
- Copying English clause structure ("not X, but Y", balanced triads, "the way we…").
- Typos in proper nouns, factual mistakes, broken links, wrong dates or numbers.

**Why:** The site bridges China and the West. Translated-sounding copy in any language signals an outsider and undermines the brand premise. Past locale copy has read as English with the words swapped, which is the exact failure mode this rule blocks. Regenerating a locale page from English destroys prior editorial work (humanizer + native-rewrite passes), reintroduces the failure mode, wastes the translation budget, and forces the user to babysit changes in languages they were not yet ready to touch.

### 1.11 Slug localisation (MANDATORY, permanent)

Every page slug must be written in the target language of the locale it lives under. No English slugs under non-English locales. This rule is permanent and applies to every new page from now on.

**Scope**

- Every file and directory name under `src/pages/<locale>/` (e.g. `fr/`, `de/`, `es/`, `zh/`) uses words in that locale's language, not English.
- Applies to landing pages, sub-pages, section indexes, dynamic-route folder names, and any URL-visible path segment.
- The English site keeps English slugs at the root (`src/pages/<page>.astro`); this rule fires only for non-English locales.

**Examples (illustrative, French)**

- `src/pages/fr/nous-contacter.astro` instead of `src/pages/fr/contact.astro`
- `src/pages/fr/qui-nous-sommes.astro` instead of `src/pages/fr/about.astro`
- `src/pages/fr/entrer-en-chine/conseil-en-entree-de-marche.astro` instead of `src/pages/fr/enter-china/market-entry-consulting.astro`
- `src/pages/fr/nos-realisations/` instead of `src/pages/fr/work/`
- `src/pages/fr/decryptages/` instead of `src/pages/fr/insights/`

**Form**

- Lowercase, hyphen-separated. No spaces, no underscores, no trailing slashes in the filename.
- Strip diacritics for URL safety: `entrée` becomes `entree`, `réalisations` becomes `realisations`, `développement` becomes `developpement`. The page CONTENT keeps the accents; only the slug strips them.
- Use the word a native marketer or journalist would expect in the URL bar of a serious news / business site in that market.
- Brand and product names stay in their canonical form (see 1.8). `tmall-global`, `wechat`, `beyondcompass` are fine inside any locale slug.

**Locale defaults**

- FR: native French nouns / verbs. `nous-contacter`, `qui-nous-sommes`, `realisations`, `decryptages`.
- DE: native German. Compound nouns are normal; do not force English-style word breaks. `ueber-uns`, `kontakt`, `referenzen`. Replace umlauts: `ä→ae`, `ö→oe`, `ü→ue`, `ß→ss`.
- ES: native Spanish. `contacto`, `quienes-somos`, `proyectos`. Replace `ñ→n` and accents with the unaccented vowel.
- IT (if added later): same principle, `contatti`, `chi-siamo`.
- PT (if added later): same principle, `contato`, `quem-somos`.

**Routing / helpers**

- `localizePath` and any other locale-link helper must map between locale slugs (per-locale slug table), not blindly prefix `/<locale>/` onto the English path.
- Hreflang `<link rel="alternate">` tags must point to the native-language URL for each locale, not to the English-slug URL with a locale prefix.
- Internal `<a>`, `<Link>`, and CTA references in any locale page must use that locale's slug.

**Workflow when creating a new non-English locale page**

1. Open the English source page to confirm scope.
2. Draft the slug in the target language using a native journalist's framing. Apply the two-step humanize + native-rewrite pass from 1.4 to the slug itself, the same way you would for body copy.
3. Strip diacritics and lowercase, hyphenate.
4. Update the per-locale slug table / `localizePath` map so internal links resolve correctly.
5. Run a build to confirm no broken links.

**Workflow when EDITING a non-English locale page that is already shipped with an English slug**

- Do NOT silently rename the file. URL changes break links, search ranking, and any external references.
- Flag the mismatch to the user. Propose a renaming plan that includes a redirect from the old slug to the new one.
- Let the user authorise before renaming. Default scope is single-locale (see 1.9); slug renames in one locale do not propagate to others without explicit instruction.

**Why:** Native-language slugs match how users search in that market, build the credibility of the localized site, and signal to search engines that the page targets that audience. An English slug under `/fr/` undercuts both the editorial premise of the translation and the search ranking the page can achieve. This is a permanent project-wide rule.

**How to apply:** Whenever creating a new locale page, draft the slug in the target language BEFORE creating the file. When auditing existing locale pages, scan for English slugs under non-English locales and flag them as renames that need user sign-off plus a redirect plan. This rule overrides the default in 1.3 step 5 ("keep page structure intact") for NEW pages, but the "do not change without flagging" guidance in 1.10 still applies to renaming SHIPPED slugs.

---

## 2. Humanizer process — 9 iterations for English copy

Step 1 of the two-step rewrite (1.4) runs the English source through this process before it is translated. Run it for every English content drafted (page copy, hero text, card bodies, blog, emails, captions, anything user-visible in English) before delivering. Tag the work mentally as `@humanizer`.

**The 9 iterations:**

1. **Iteration 1** — Draft in journalist style from a daily US newspaper. American English. Easy to read. Open in artifact (or inline in the file edit).
2. **Iteration 2** — Review the iteration 1 output. Identify 10 specific weaknesses or gaps.
3. **Iteration 3** — Rewrite addressing all 10 weaknesses.
4. **Iteration 4** — Final review: is this production-ready? If not, list what is missing and apply the updates.
5. **Iteration 5** — Pass for AI-detection: rewrite anything that reads machine-generated. Use the checklist in section 5.
6. **Iteration 6** — Clean all em dashes `—` (see section 3). Convert any quoted external source into proper blockquote citation format.
7. **Iteration 7** — Deeper humanizing pass. Re-read multiple times. Add small, *subtle* human imperfections (a sentence fragment, a comma splice a journalist might leave, an idiomatic redundancy, an occasional one-word sentence). Imperfections must stay believable for a working professional writer; never break factual accuracy or brand voice.
8. **Iteration 8** — Pause 15 seconds (settle, re-read with fresh eyes), then do another AI-detection scrub against section 5.
9. **Iteration 9** — One more pass. Go deeper. Read it three times. Confirm nothing reads as AI.

**Why:** The site copy must sound like a senior operator wrote it, not a model. AI-tells (em dashes, balanced triads everywhere, "It's not X, it's Y" patterns, abstract nouns, hedging, listicle rhythm) erode the brand's editorial voice and make the work look templated.

**How to apply:**
- Trigger: any English content I write or rewrite for the user, no matter how small. Card body, headline, paragraph, alt text, meta description.
- Skip the artifact step for tiny edits (one phrase, a single word swap), but still mentally run iterations 5–9 (AI-detection + human polish + em-dash + citation check).
- Always combine with the other rules in this file: no em dashes (section 3), no 01/02/03 numeric badges (section 4).
- Never tell the user the iteration steps in the response. Show only the final, polished output. The process is internal.
- Acceptable subtle "errors": occasional sentence fragment, a comma where a writer might have used a period, mild redundancy, a colloquial contraction, slight tonal unevenness between paragraphs. Forbidden: typos in proper nouns, factual mistakes, broken links, wrong dates, wrong numbers, broken syntax that hurts reading.

---

## 3. No em dashes

Never use the em dash character `—` (U+2014) in any user-visible content, in any language (English, French, Chinese, etc.). This applies to: page copy, headings, hero text, descriptions, card content, button labels, marketing material, and any other displayed text.

Replace em dashes with one of:
- a comma, period, or colon (depending on the sentence)
- parentheses
- a simple hyphen `-` only when it's a true hyphenation (not a separator)
- a line break / restructured sentence

This rule does NOT apply to: code, identifiers, URLs, file paths, or technical content where dashes carry meaning (this file included).

**Why:** Em dashes give a generic AI-written feel; prose should feel hand-written and clean. Permanent project-wide rule.

**How to apply:** Whenever writing or editing any text content, proactively avoid the `—` character. When reviewing existing files, search for `—` and replace it. Apply across all locale files (en, fr, zh, etc.).

---

## 4. No numbered cards

NO NUMBER IN CARDS. Never add numeric badges (`01`, `02`, `03`, …), watermark numbers, or numbered prefixes inside cards, pillars, matrix rows, feature blocks, or any card-like UI.

**Why:** Numbered cards read as visually noisy and old-fashioned. Permanent rule, set after 01/02/03/04/05 labels kept reappearing in matrix-grid layer headers and pillar card watermarks.

**How to apply:** When designing or reviewing any card/grid/pillar/list-item UI, never reach for numbered badges as a visual device. Use icons, color, typography, or order alone. This applies even when prior similar designs use numbers, strip them. Also check existing markup before adding new cards: do not reintroduce numbered badges anywhere on the site.

---

## 5. Anti-AI writing reference (voice DNA)

This is the checklist the humanizer's AI-detection passes (iterations 5, 8, 9 in section 2) run against. Source of truth for the writing voice. Apply with judgment. Spirit over letter. Always.

### 5.1 Writing rules

Write like a sharp human who happens to be typing.

**Pacing & rhythm:**
- Short paragraphs. 1-2 sentences default. 3 max.
- Get to the point. No warm-up laps.
- Vary sentence length. Short punchy lines mixed with longer ones. AI writes like a metronome (every sentence medium length, every paragraph 3-4 sentences). Break that rhythm.
- Start sentences with And, But, Like, So. Write as you speak. A new paragraph often means a "but" or "therefore" in spirit, even when the word itself is not written. That is how you write captivating stories.
- If you've made your point, stop. Don't summarize what someone just read 2 paragraphs ago.

**Voice & tone:**
- Use contractions naturally (don't, can't, won't, it's).
- Use "I" and "you." Direct address. Active voice. AI defaults to passive and third person. Talk to people.
- Be specific. Numbers, names, concrete details. Specific writing is sharp writing.
- When uncertain, say so plainly ("I think," "probably," "maybe," "kinda"). AI never hedges. Humans do. That uncertainty is what makes writing feel real.
- Never pad output to seem thorough. Shorter and accurate beats longer and fluffy.
- Take a stance. AI writes like someone afraid to commit (everything is "may," "could," "often considered"). Commit.
- Give real examples. Point to something that actually happened. Skip "imagine a hypothetical scenario where..."
- Use physical verbs for abstract processes. Say "sanded down," "bolted on," "stripped back." You'll feel the difference.
- Humor comes from specificity. Be unexpectedly precise.
- Parenthetical asides are good (for editorial commentary, honest reactions, deflating your own seriousness).
- Natural transitions only. No mechanical connectors.

### 5.2 Formatting rules

- Short paragraphs (1-2 sentences default, 3 max).
- Numbers as digits (3 years, 10 tools, 500 users).
- Contractions always.
- **NO em dashes.** AI overuses them. Use commas, periods, colons, semicolons, or parentheses.
- Bold sparingly: 1-2 key moments per section.
- Code blocks for specific prompts, commands, or tool outputs.
- Use formatting like salt. Headers, bullets, numbered lists: only when they earn it.
- If you've made your point, stop. Don't add a summary paragraph restating everything.

### 5.3 Banned list

If even ONE of these appears, the output fails.

**Dead AI vocabulary.** These words are statistically overrepresented in LLM output. They are the fingerprint of AI text. Never use them:

delve, realm, harness, unlock, tapestry, paradigm, cutting-edge, revolutionize, landscape (abstract), intricate/intricacies, showcasing, crucial, pivotal, surpass, meticulously, vibrant, unparalleled, underscore (verb), leverage, synergy, innovative, game-changer, testament, commendable, meticulous, highlight (verb), emphasize, boast, groundbreaking, align, foster, showcase, enhance, holistic, garner, accentuate, pioneering, trailblazing, unleash, versatile, transformative, redefine, seamless, optimize, scalable, robust, breakthrough, empower, streamline, frictionless, elevate, adaptive, effortless, data-driven, insightful, proactive, mission-critical, visionary, disruptive, reimagine, unprecedented, intuitive, leading-edge, synergize, democratize, accelerate, state-of-the-art, dynamic, immersive, predictive, transparent, proprietary, integrated, plug-and-play, turnkey, future-proof, paradigm-shifting, supercharge, enduring, interplay, valuable, captivate

Also banned: "serves as," "stands as," "marks a," "represents a," "boasts a," "features a," "offers a" when used to avoid "is" or "has." Just say "is."

**Dead phrases:**
- "In today's [anything]..."
- "It's important to note that..." / "It's worth noting..."
- "In order to" (just say "to")
- "I'd be happy to help"
- "Straightforward"
- "Let's dive in" / "Let's explore" / "Let's unpack" / "Delve into"
- "At the end of the day"
- "Moving forward"
- "To put this in perspective..."
- "What makes this particularly interesting is..."
- "The implications here are..."
- "In other words..."
- "It goes without saying..."
- "Here's the part nobody's talking about" / "What nobody tells you"
- Anything with "nobody" or "most people don't realize"
- "In this article, I will..." (all meta commentary about what you're about to do)
- "Despite its [positive words], [subject] faces challenges..."
- "Challenges and Future Prospects" as a section header

**Dead transitions:**
- "Furthermore" / "Additionally" / "Moreover"
- "That said" / "That being said"
- "With that in mind"
- "It is also worth mentioning"
- "On top of that"
- Any mechanical connector that reads like a college essay

**Engagement bait:**
- "Let that sink in" / "Read that again" / "Full stop"
- "This changes everything"
- "Are you paying attention?" / "You're not ready for this"

**Hype language:**
- "Supercharge" / "Unlock" / "Future-proof"
- "10x your [anything]"
- "Game-changer" / "Cutting-edge"
- Any promise of superpowers, easy riches, or overnight transformation

**THE BIG ONE (FATAL): negative parallelisms and reframe constructions.** This is the single most reliable tell of AI-generated text. Peer-reviewed research backs this up. AI is addicted to these because they make shallow ideas sound profound. They're a crutch. A tic. Every single LLM does it, in every single output, multiple times per response.

If you see even ONE in your output, rewrite the entire sentence.

The banned patterns:
- "This isn't X. This is Y."
- "Not X. Y."
- "Forget X. This is Y."
- "Less X, more Y."
- "Not only X, but also Y."
- "It's not just about X, it's about Y."
- "No X, no Y, just Z."
- "X? No. Y."
- "Stop thinking X. Start thinking Y."
- "It's not about X. It's about Y."
- "X is dead. Y is the future."
- "The question isn't X. The question is Y."
- "You don't need X. You need Y."
- "X is overrated. Y is what matters."
- ANY sentence that negates one framing then asserts a corrected one.
- ANY sentence that rejects an assumption, then replaces it.

Also watch for the sneaky versions:
- "While X might seem right, Y is actually..." (same pattern wearing a trench coat)
- "Sure, X works. But Y is where the real..." (concession + pivot = same skeleton)
- "X gets all the attention, but Y is what actually..." (same thing, third disguise)

The fix is simple: delete everything before the positive claim. If you wrote "It's not about the prompt. It's about the context," just write "It's about the context." The negated framing adds zero information.

### 5.4 AI writing patterns to avoid

Peer-reviewed research and Wikipedia's AI detection field guide document these patterns. They make text identifiable as machine-written.

**Puffery & significance inflation.** AI inflates the importance of everything. "A pivotal moment in the evolution of..." "Marking a significant shift toward..." "Setting the stage for..." "A key turning point..." State the fact. Let the reader judge significance.

**Rule of three.** AI loves listing 3 things: "speed, efficiency, and innovation." It uses this to make shallow analysis look comprehensive. Use 2 things. Or 4. Or just say the one thing that matters.

**False ranges.** "From ancient traditions to modern innovations." Sounds impressive, means nothing. If you can't identify meaningful middle ground between X and Y, the range is fake. Delete it.

**Elegant variation.** AI's repetition penalty forces it to swap terms: a person becomes "the protagonist," then "the key player," then "the eponymous figure." Just use the name again. Forced synonyms are worse than repetition.

**Meta commentary.** "In this section, we will discuss..." "Let me walk you through..." "Here's a comprehensive overview of..." Say the thing. Don't announce that you're about to say the thing.

**Superficial analysis via participle phrases.** AI attaches "-ing" phrases to create fake depth: "highlighting its importance," "underscoring its significance," "reflecting broader trends," "contributing to the rich tapestry of..." Delete the participle phrase. If the analysis matters, it deserves its own sentence with a specific claim.

**Knowledge-cutoff disclaimers.** "As of my last update..." "While specific details are limited..." "Based on available information..." Never include these.

**Collaborative communication leakage.** "I hope this helps!" "Would you like me to..." "Certainly!" "Of course!" "Great question!" These belong in chat. Strip them from any published writing.

**Metronome rhythm.** Every sentence same length. Every paragraph same number of sentences. AI text has no texture. Real writing breathes unevenly. Short. Then longer. Then a fragment. Then a 30-word sentence that earns its length.

**Copulative avoidance.** AI replaces "is" and "has" with bloated alternatives: "serves as," "stands as," "represents," "marks a," "holds the distinction of being." Just say "is." Simple verbs work.

**Title case in headers.** AI capitalizes all main words: "Global Context: Critical Mineral Demand." Humans typically use sentence case. Do that.

### 5.5 Anti-overfitting guide

This document captures taste. It is a guide. Apply it with judgment.

**Frequency guidance:**
- **HARD RULE:** Never violate. Banned words, structures, phrases. Absolute.
- **STRONG TENDENCY (70-80%):** Short sentences, direct address, active voice, specific details, varied rhythm.
- **LIGHT PREFERENCE (context decides):** Specific word choices, particular structures, humor placement. When no label exists, assume light preference.

**Natural variation matters:**
- Don't use the same opening formula every time just because it works.
- Don't avoid a word forever just because it's on a banned list (sometimes it's genuinely the right word).
- Let the content dictate structure.

**The litmus test:**

> "Does this sound like something I would actually write, or does it sound like an AI trying very hard to imitate me?"

If it feels forced, pull back. Inhabit the voice.
