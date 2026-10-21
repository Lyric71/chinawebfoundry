from pathlib import Path
import sys, difflib

locale, number, reason = sys.argv[1:]
root = Path(__file__).resolve().parents[3]
source = root / f'src/content/guides-{locale}/wordpress-vs-astro-china.md'
text = source.read_text(encoding='utf-8')
folder = Path(__file__).parent
snapshot = folder / f'publish-{locale}-pass{number}.md'
if snapshot.exists():
    raise SystemExit('Pass already recorded; preserve prior output')
snapshot.write_text(text, encoding='utf-8')
if number == '1':
    output = text
else:
    before = (folder / f'publish-{locale}-pass{int(number)-1}.md').read_text(encoding='utf-8')
    output = ''.join(difflib.unified_diff(before.splitlines(True), text.splitlines(True), fromfile='before', tofile='after'))
entry = f'\n\n## {locale.upper()} pass {number} complete\n\n{reason}\n\n```{ "markdown" if number == "1" else "diff"}\n{output}\n```\n'
with (root / 'editorial/logs/2026-10-22-publish.md').open('a', encoding='utf-8') as f:
    f.write(entry)
with (root / 'editorial/logs/runs/2026-10-22-publish.txt').open('a', encoding='utf-8') as f:
    f.write(f'\nDecision: {locale.upper()} translation pass {number} finished synchronously in main conversation. Full output: {snapshot.relative_to(root)}. {reason}\n')
print(f'{locale.upper()} pass {number} recorded: {len(text)} characters; output and section changes saved before next pass.')
