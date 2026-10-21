from pathlib import Path
import sys, subprocess, difflib
locale, number, reason = sys.argv[1:]
root = Path(__file__).resolve().parents[3]
paths = {'fr':'src/pages/fr/services/baidu-seo.astro','es':'src/pages/es/servicios/baidu-seo.astro','de':'src/pages/de/leistungen/baidu-seo.astro'}
path = paths[locale]
text = (root/path).read_text(encoding='utf-8')
folder = Path(__file__).parent
snap = folder/f'baidu-{locale}-pass{number}.txt'
assert not snap.exists()
before = subprocess.check_output(['git','show',f'HEAD:{path}'],cwd=root).decode('utf-8') if number=='1' else (folder/f'baidu-{locale}-pass{int(number)-1}.txt').read_text(encoding='utf-8')
snap.write_text(text,encoding='utf-8')
diff = ''.join(difflib.unified_diff(before.splitlines(True),text.splitlines(True),fromfile='before',tofile='after'))
with (root/'editorial/logs/2026-10-22-publish.md').open('a',encoding='utf-8') as f:
    f.write(f'\n\n## Baidu hosting correction: {locale.upper()} pass {number}\n\n{reason}\n\n```diff\n{diff}\n```\n')
with (root/'editorial/logs/runs/2026-10-22-publish.txt').open('a',encoding='utf-8') as f:
    f.write(f'\nDecision: Baidu hosting correction {locale.upper()} pass {number} complete, output saved to {snap.relative_to(root)}. {reason}\n')
print(f'{locale.upper()} correction pass {number} complete; section output saved.')
