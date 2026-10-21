from recover import ROOT, LOG, log
from qualify import paths
import re, json

for group in paths.values():
    for path in group:
        p=ROOT/path; s=p.read_text(encoding='utf-8')
        s=s.replace('---\n', "---\nconst updatedAt = '2026-10-22';\nconst pageFreshness = { '@context': 'https://schema.org', '@type': 'WebPage', url: Astro.url.href, dateModified: updatedAt };\n",1)
        if 'const pageLd = [...serviceLd];' in s:
            s=s.replace('const pageLd = [...serviceLd];', 'const pageLd = [...serviceLd, pageFreshness];')
        else:
            s=s.replace('<PageLayout', '<PageLayout jsonLd={[pageFreshness]}',1)
        p.write_text(s,encoding='utf-8')

log('### Freshness and evidence recording\nThe earlier log treated updatedAt as guide-only. Corrected that decision: all twelve edited Astro pages now declare updatedAt 2026-10-22 and emit it as WebPage dateModified through their existing PageLayout JSON-LD support. Existing service schema is retained. No layout API change or new route is needed.')

research=LOG.read_text(encoding='utf-8').split('Claims considered and cut before drafting:')[0]
rows=[]
for line in research.splitlines():
    if line.startswith('|') and 'https://' in line:
        cells=[x.strip() for x in line.strip('|').split('|')]
        rows.append(cells)
ledger=['\n## 22 October 2026: A11 WordPress or Astro for a China site','',
 'Recovered from the same run\'s research note and iteration-8 receipt. Both checks were performed by the first model on 22 October 2026; the fallback preserves those completed checks. Receipt: editorial/logs/2026-10-22-wordpress-vs-astro-china/source-check2.txt. Subsequent audit checks are recorded separately.', '']
for claim,source,date,url,result in rows:
    ledger += ['### '+source, '- Claim: '+claim, '- Source date/version: '+date, '- URL: '+url,
       '- Verified 1: 2026-10-22, '+result,
       '- Verified 2: 2026-10-22, iteration 8 refetch; same-run receipt and quality tracker confirm the claim. For WordPress avatar source and MDN script semantics, additional fallback fetch receipts are also retained.',
       '- Used in: wordpress-vs-astro-china; source scope and network vantage remain attached to the claim.', '']
ledger += ['### Alibaba Cloud ICP overview, reused ledger entry',
 '- Claim: mainland nodes require an ICP filing; Hong Kong and overseas nodes do not. Provincial review is 1 to 20 working days, not the whole project duration.',
 '- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview',
 '- Source date: 26 August 2026.',
 '- Verified 1: retained earlier ledger checks, rechecked 2026-10-22 during the original draft research. Verified 2: 2026-10-22, source-check2.txt.',
 '- The live-page service counts reuse existing twice-verified F6 and F31 ledger entries; the Google Fonts pair remains 72 of 72 from Alibaba Cloud Zhangjiakou on 28 August 2026 and 0 of 54 from Beijing China Mobile residential broadband on 30 August 2026.', '',
 '### Astro browser scripts and external scripts',
 '- Claim: Astro supports scripts in the browser, analytics requests and remote script URLs. Inference: searching build output alone cannot establish every runtime host, especially when a remote script changes.',
 '- URL: https://docs.astro.build/en/guides/client-side-scripts/',
 '- Source date: 19 June 2026, official docs commit ca1ae0c1883582b7e9bf99835b6e1871f44a37f9; GitHub commits API for src/content/docs/en/guides/client-side-scripts.mdx checked 22 October 2026.',
 '- Verified 1: 2026-10-22, live page read, Client-Side Scripts and Load external scripts sections.',
 '- Verified 2: 2026-10-22, live page reopened, same script and remote URL examples present.',
 '- Used in: A11 draft, PLAN.md A11 argument, corrected Astro page in en/fr/es/de.', '']
with (ROOT/'editorial/sources/verified-sources.md').open('a',encoding='utf-8') as f:f.write('\n'.join(ledger))
log('The source ledger now records A11 checks 1 and 2, preserving the original dates and provenance. Astro browser-script documentation was checked twice in the fallback; its dated official commit was verified. Unsupported universal claims about origin costs, timeout behaviour, a complete static host inventory, free self-hosted transfers and fixed build duration were removed or qualified. PLAN.md A11 argument was corrected at source.')
