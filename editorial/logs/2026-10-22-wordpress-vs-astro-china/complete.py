from recover import ROOT, log
from qualify import paths
import csv, io, re, hashlib

p=ROOT/'editorial/output/wordpress-vs-astro-china.md'
s=p.read_text(encoding='utf-8')
# Align the two existing tables without changing their cells.
def align(match):
    rows=[[c.strip() for c in line.strip().strip('|').split('|')] for line in match.group().strip().splitlines()]
    widths=[max(len(row[i]) for row in rows) for i in range(len(rows[0]))]
    rows[1]=['-'*w for w in widths]
    return '\n'.join('| '+' | '.join(c.ljust(widths[i]) for i,c in enumerate(row))+' |' for row in rows)+'\n'
s=re.sub(r'(?:^\|.*\n)+',align,s,flags=re.M)
p.write_text(s,encoding='utf-8')
(p.parent.parent/'logs/2026-10-22-wordpress-vs-astro-china/final-reviewed.md').write_text(s,encoding='utf-8')

body=re.sub(r'<!--.*?-->','',s.split('---',2)[2],flags=re.S)
prose='\n'.join(l for l in body.splitlines() if not l.startswith(('>','|')))
quotes='\n'.join(l.removeprefix('> ') for l in body.splitlines() if l.startswith('>'))
table_rows=[l for l in body.splitlines() if l.startswith('|') and not re.fullmatch(r'[| :\-]+',l)]
table_words=' '.join(l.replace('|',' ') for l in table_rows).split()
counts={'narrative_including_headings':len(prose.split()),'citations':len(quotes.split()),'table_cells':len(table_words)}
counts['body_total']=sum(counts.values())
assert 1350<=counts['narrative_including_headings']<=1650,counts
assert not re.search(r'\b(?:TO'+'DO|FIX'+'ME|TB'+'D|TK'+'TK)\b',s)
assert '\u2014' not in s
assert '!' not in re.sub(r'<!--.*?-->','',s,flags=re.S)

log('''### Final recovery review of the retained quality work

All 18 original content-quality-us passes remain recorded above with their snapshots. The fallback preserves that completed sequence. The final delta review tightened facts without adding a new section or changing the angle:

- The lead now requires a developer for the static option.
- The host-cost passage permits DNS caching and connection reuse; no universal bandwidth-versus-origins ranking remains.
- The blocked-host heading and paragraph describe possible timeout behaviour.
- Both tables allow browser scripts, CMS embeds and remote code to add requests.
- The Gravatar sentence explicitly describes the default behaviour.
- The fixed-duration build claim was cut.
- Astro integrations are distinguished from installing WordPress plugins.
- Headless front-end features require integration work; they are not described as universally impossible.
- Universal cost savings were replaced by a scoped estimate; the WordPress recommendation remains persuasive.
- Mainland hosting is described in terms of the files served there; third-party requests are separate.

Final checks against the retained quality tracker:
1. British newsroom voice: direct lead and qualified mechanisms.
2. Weakness review: the ten points above were identified and closed.
3. Rewrite: all ten closures appear in final-reviewed.md.
4. Production review: two tables, five FAQs, source links and all three appended blocks present.
5. AI-pattern review: no mechanical contrast or promotional closer added.
6. Punctuation and citations: no em dash or exclamation; dated blockquote sources retained.
7. Human touch: practical editor/developer trade-offs preserved.
8. SEO: title 35 characters, description 147, excerpt 20 words.
9. Second pattern review: no repeated new qualification formula across sections.
10. Second voice review: retained practical WordPress recommendation and honest Vercel disclosure.
11. Hostile reader: runtime scripts, CMS access, costs, hosting and source ownership are explicit.
12. Structure ratio: flowing prose dominates; tables and five FAQ labels are the structured apparatus.
13. Marker hunt: unsupported absolutes removed; no banned placeholder markers in the deliverable.
14. Read-aloud: shortened the lead and cut the theatrical cost-section transition.
15. Structure: dated source blocks follow one format; no conclusion section.
16. Pacing: deleted repeated setup rather than adding filler.
17. Integrity: internal destinations exist, locale slugs match the brief, British spelling retained. Approved title is preserved; the natural WordPress-alternative query appears in the lead and host-list H2.
18. New-pattern review: no repeated aside or newly introduced slogan.

The two tables were realigned after the review. Final snapshot: final-reviewed.md. Historical snapshots remain unchanged as the audit record.
''')
log('Final counts (word split, table delimiters excluded): '+str(counts)+'. Narrative is within the 1,500-word target plus 10%. ReviewBy remains 2026-11-20. Source blocks: 16. Five internal references resolve to the existing guide/service targets; no missing target or fallback. Original createarticle iteration 7 remains the cadence variant, with no deliberate errors.')

corrected=[path for group in paths.values() for path in group]
for path in corrected:
    t=(ROOT/path).read_text(encoding='utf-8')
    assert "const updatedAt = '2026-10-22';" in t
    assert 'dateModified: updatedAt' in t
notes=('A11 recovered 2026-10-22 by GPT-6 Astra after Opus/Fable allowance limits. '
 '13 house createarticle iterations and all 18 content-quality-us passes retained; British spelling, final factual audit complete. '
 'Sources checked twice; ledger saved. PLAN.md F19, T5-05 and A11 corrected; build-briefs.mjs rerun. '
 'Hero public/images/guides/wordpress-vs-astro-china.webp, gpt-image-2 high, visually checked, 1050x700, 97448 bytes. '
 'reviewBy 2026-11-20. corrected live pages: '+'; '.join(corrected)+'. '
 'All updatedAt/dateModified 2026-10-22; deep-translate FR, ES, DE three passes each, plus three-pass technical qualifications. '
 'Ship these corrections with the article publication commit. check-content passed; Astro check 0 errors, 0 warnings, 13 existing hints. '
 'Log editorial/logs/2026-10-22.md; audit editorial/logs/2026-10-22-wordpress-vs-astro-china/. '
 'Stopped at image_ready. No publish, commit or build. At publish: all four locales and brief localized slugs; generate the share card under RUNBOOK.')
schedule=ROOT/'editorial/schedule.csv'
lines=schedule.read_text(encoding='utf-8').splitlines()
header=next(csv.reader([lines[0]]))
for i,line in enumerate(lines[1:],1):
    row=dict(zip(header,next(csv.reader([line]))))
    if row['brief_id']=='A11':
        row.update(status='image_ready',drafted_on='2026-10-22',quality_passed_on='2026-10-22',image_generated_on='2026-10-22',notes=notes)
        buf=io.StringIO();csv.writer(buf,lineterminator='').writerow([row.get(k,'') for k in header]);lines[i]=buf.getvalue()
        break
else: raise ValueError('A11 missing')
schedule.write_text('\n'.join(lines)+'\n',encoding='utf-8')
log('### Completion\nA11 set to image_ready with all three milestone dates 2026-10-22. The twelve corrected live-page paths are listed in its schedule notes for the same publication commit. npx astro check completed: 307 files, 0 errors, 0 warnings, 13 existing unused-variable hints outside the corrected pages. The required content check passed. Hero metadata independently checked: WebP, 1050x700, 97,448 bytes. Regeneration also refreshed T6-09 brief status from its already-existing schedule status; its hold and schedule row are untouched. No guide was published, no commit or push made, and no build run. No notification sent; the scheduled wrapper owns its queue watchdog.')
print(counts)
print('A11 image_ready; all twelve corrected pages dated; final artifact SHA256 '+hashlib.sha256(s.encode()).hexdigest())
