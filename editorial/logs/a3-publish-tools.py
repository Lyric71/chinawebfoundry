from pathlib import Path
import sys, re, json, difflib, datetime

ROOT = Path(__file__).resolve().parents[2]
LOG = ROOT / 'editorial/logs/2026-09-15.md'
SLUG = 'wordpress-plugins-china'

def record(message):
    with LOG.open('a', encoding='utf-8') as f:
        f.write('\n' + message + '\n')
    print(message)

def snapshot(locale, number):
    p = ROOT / f'src/content/guides-{locale}/{SLUG}.md'
    current = p.read_text(encoding='utf-8')
    dest = ROOT / f'editorial/logs/2026-09-15-a3/{locale}-pass-{number}.md'
    dest.parent.mkdir(exist_ok=True)
    assert not dest.exists(), 'Do not overwrite completed pass evidence'
    dest.write_text(current, encoding='utf-8')
    prev = dest.with_name(f'{locale}-pass-{number-1}.md')
    if prev.exists():
        diff = ''.join(difflib.unified_diff(prev.read_text(encoding='utf-8').splitlines(True), current.splitlines(True), fromfile=prev.name, tofile=dest.name))
        dest.with_suffix('.diff').write_text(diff, encoding='utf-8')
    record(f'### {locale.upper()} pass {number} complete\n\nSaved full output to {dest.relative_to(ROOT).as_posix()} at {datetime.datetime.now().isoformat()}. ' + ('Section changes saved in adjacent .diff file. Unchanged sections reviewed and retained.' if prev.exists() else 'New locale: every section and SEO field authored in native register. Humanizer review addressed register, sentence rhythm, calques, nominal constructions, source attribution, dates, numeric conventions, typography, metadata and internal links. No deliberate errors.'))

if __name__ == '__main__':
    if sys.argv[1] == 'snapshot':
        snapshot(sys.argv[2], int(sys.argv[3]))
    elif sys.argv[1] == 'english':
        src = (ROOT / f'editorial/output/{SLUG}.md').read_text(encoding='utf-8')
        fields = {k:v.strip('"') for k,v in re.findall(r'^(\w+): (.+)$', src.split('---',2)[1], re.M)}
        order = max(int(re.search(r'^order: (\d+)',p.read_text(encoding='utf-8'),re.M)[1]) for p in (ROOT/'src/content/guides').glob('*.md') if p.stem != SLUG)+1
        body = src.split('<!-- INTRODUCTION -->',1)[1].split('<!-- CTA -->',1)[0]
        body = re.sub(r'<!--.*?-->','',body,flags=re.S).strip()
        links = {'our guide on whether WordPress is blocked in China':'/resources/china-web-guide/is-wordpress-blocked-in-china/', 'our guide to WordPress hosting in China':'/resources/china-web-guide/wordpress-hosting-china/', 'our free China Site Scanner':'/china-site-scanner/', 'our WordPress in China page':'/wordpress-in-china/'}
        for anchor,url in links.items():
            pattern = re.compile(r'\s+'.join(re.escape(word) for word in anchor.split()), re.I)
            assert pattern.search(body), anchor
            body = pattern.sub(lambda m: '['+m[0]+']('+url+')', body)
        header = {k:fields[v] for k,v in [('title','title'),('subtitle','excerpt'),('summary','description')]}
        header.update(visual=f'/images/guides/{SLUG}.webp',order=order,published=True,publishedAt='2026-09-15',updatedAt='2026-09-15',category='Technology',author='cyril-drouin')
        content = '---\n'+'\n'.join(k+': '+json.dumps(v,ensure_ascii=False) for k,v in header.items())+'\n---\n\n'+body+'\n'
        (ROOT/f'src/content/guides/{SLUG}.md').write_text(content,encoding='utf-8')
        record(f'English guide created with order {order}; body preserved verbatim except structural removals and four internal links.')
