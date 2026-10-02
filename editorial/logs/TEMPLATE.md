# Run log: YYYY-MM-DD

| Field | Value |
|---|---|
| Brief | A3 / T2-01 / ... |
| Content type | guide / guide-en / guide-en-first / report / casestudy / money-page / upgrade / translation |
| Output | output/slug.md |
| Body word count | |
| Status reached | drafted / quality_passed / image_ready / published / blocked |
| Model used for each step | (must be the most capable available) |

## Fact IDs used

| ID | Used where | As written in the fact bank? |
|---|---|---|
| | | yes / adapted (say how) |

## Research note (written before iteration 1)

| Claim | Source (publisher, 中文 if Chinese) | Date on page | URL | Vantage point (if a measurement) | Check 1 | Check 2 |
|---|---|---|---|---|---|---|
| | | | | | pass / fail, date | pass / fail, date |

- Figures reused from the ledger:
- Harness rows cited (host, run_id, vantage):
- Claims cut because they could not be sourced:

## Iterations (createarticle)
Tracker as printed, with one line per iteration saying what changed.
Note explicitly that iteration 7 ran as the cadence variant, not the
planted-error variant. Note the check 2 results in iteration 8.

## Quality pass (content-quality-us)
Tracker as printed, 18 passes plus final. Note that the spelling pass ran as
British. Note any SEO field trimmed back to the house ceiling afterward.

## Image
- Prompt used (verbatim from the feature-image block):
- Attempts and what was wrong with rejected ones:
- Saved to (path, width, bytes):

## Sources
- New figures added to the ledger:

## Closed in this run
Nothing is left open (editorial/CLAUDE.md, "No run leaves a TODO behind").
Record what each finding became, never a question for a person.
- Claims cut, and the section they left:
- Live pages corrected (file, every locale, updatedAt moved):
- PLAN.md corrections made and build-briefs.mjs rerun (fact IDs, briefs):
- Link substitutions (wanted, used, brief now carrying the "On publish" line):
- Watch items placed (reviewBy date, dataset constant, "On publish" line):
- Gates that stopped a row before publishing (row, reason in notes):
- check-content.mjs on the output file: pass
- Do Not Assert grep result:

## SEO counts (after the quality pass)
| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | | 52 | |
| Meta description | | 152 | |
| Excerpt | | 25 words | |

## Publish (fill in when step 4 runs)
- Files written (every locale):
- Localized slugs registered in src/i18n/routes.ts:
- Sitemap entry count before / after (T6 must be equal):
- Build: passed / failed
- astro check: passed / failed
- Commit:
- Resend email sent to cyril.drouin@outlook.com: yes / no (reason)
- Runbook substitutions (what the repo could not do, what was used instead):
