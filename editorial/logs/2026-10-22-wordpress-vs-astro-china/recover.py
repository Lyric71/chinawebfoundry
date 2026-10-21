from pathlib import Path
import datetime

ROOT = Path(__file__).resolve().parents[3]
LOG = ROOT / 'editorial/logs/2026-10-22.md'
RUN = ROOT / 'editorial/logs/runs/2026-10-22-draft.txt'

def log(text):
    with LOG.open('a', encoding='utf-8') as f: f.write('\n' + text + '\n')
    with RUN.open('a', encoding='utf-8') as f: f.write('\nRecovery decision: ' + text + '\n')

def edit(path, replacements, label):
    p = ROOT / path
    s = p.read_text(encoding='utf-8')
    report = [label, '']
    for old, new in replacements:
        if old not in s: raise ValueError(f'Missing text in {path}: {old[:100]}')
        s = s.replace(old, new)
        report.extend(['- before: ' + old, '+ after: ' + new, ''])
    p.write_text(s, encoding='utf-8')
    log('\n'.join(report))

if __name__ == '__main__':
    log('## Fallback recovery, GPT-6 Astra\n\nCanonical prompt SHA-256 matches the manifest. Opus and Fable exhausted their available allowance. Retained A11, its 13 drafting iterations, 18 quality passes, source-check receipt, accepted hero, English corrections and completed FR/ES passes. The German pass-1 files differ slightly from the log paraphrases; the actual files are the baseline. Continue DE passes 2 and 3 in the main conversation. No other queue row is selected. No publish, commit or build is authorised. rg is unavailable; native PowerShell and Python searches substitute. All decisions are recorded here and in the shared console log.')
    edit('src/pages/de/astro.astro', [
        ('Statisches HTML von einem registrierten Festlandserver bietet einer Seite weniger Stellen, an denen sie hängen bleiben kann.', 'Eine statische Seite auf einem registrierten Festlandserver braucht beim Aufruf keine Datenbankabfrage.'),
        ('Statisches HTML auf einem Festland-CDN ist kaum zu schlagen.', 'Ein Festland-CDN liefert die statischen Dateien innerhalb Chinas aus.'),
        ('Eine von blockierten Hosts bereinigte WordPress-Website kann auf demselben Festlandserver ebenso schnell sein.', 'Auch WordPress kann auf demselben Festlandserver schnell laden, wenn die Seite keine blockierten Hosts aufruft.')
    ], '### DE pass 2: Astro\nStronger verbs and precise mechanism; removed an unsupported comparative superlative.')
    edit('src/pages/de/leistungen/china-hosting.astro', [
        ('Die belastbare Lösung: ausgeliefert vom Festland, unter Ihrer eigenen Registrierung.', 'Hosting auf dem Festland mit Ihrer eigenen ICP-Registrierung.'),
        ('Anfragen aus China bleiben diesseits der Grenze, womit die längste Etappe jedes Seitenaufrufs entfällt.', 'Der Browser ruft die hier gehosteten Dateien innerhalb Festlandchinas ab.'),
        ('dort überquert allerdings jeder Besuch vom Festland wieder die Grenze.', 'beim Abruf dieser Server überqueren Anfragen vom Festland jedoch die Grenze.'),
        ('Mit Festland-Hosting und ICP-Registrierung muss keine Anfrage mehr über die Grenze.', 'Bei Festland-Hosting bleiben die Abrufe der dort gespeicherten Dateien innerhalb Chinas. Externe Dienste müssen gesondert geprüft werden.'),
        ('>Erteilt</span>', '>Registriert</span>')
    ], '### DE pass 2: Hosting\nRemoved English-shaped wording; requests refer to locally hosted files, not every external service.')
    edit('src/pages/de/leistungen/index.astro', [
        ('Google-Fonts-Anfragen beantwortet, Alibaba Cloud Zhangjiakou', 'Google-Fonts-Anfragen beantwortet, Alibaba Cloud in Zhangjiakou'),
        ('Arbeitstage Prüfung der ICP-Registrierung in der Provinz (Alibaba Cloud)', 'Arbeitstage für die ICP-Prüfung durch die Provinzbehörde (Alibaba Cloud)')
    ], '### DE pass 2: Services\nNative administrative wording; remaining changed figures, labels and plugin paragraph kept as-is.')
    log('DE pass 2 complete. Existing SEO fields outside the corrected passages stay unchanged; FAQ schema derives from the edited answers. Slugs, IDs and component structure preserved. A 15-second pause precedes pass 3.')
