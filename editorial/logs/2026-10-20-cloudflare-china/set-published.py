import csv
import io
from pathlib import Path

path = Path('editorial/schedule.csv')
lines = path.read_text(encoding='utf-8').splitlines()
header = next(csv.reader([lines[0]]))
for i, line in enumerate(lines[1:], 1):
    cells = next(csv.reader([line]))
    row = dict(zip(header, cells))
    if row['slug'] != 'cloudflare-china':
        continue
    assert row['status'] == 'image_ready' and row['quality_passed_on'] == '2026-10-20'
    row['status'] = 'published'
    row['published_on'] = '2026-10-20'
    row['notes'] = row['notes'].replace('Publish these corrections in the same commit.', 'Corrections included in the publication commit.').replace('Stopped at image_ready; not published.', 'Published in en fr es de on 20 October 2026; all three deep-translate passes per locale completed sequentially. Build passed; Astro check 0 errors, HEAD baseline 0 errors. Publish audit: editorial/logs/2026-10-20-cloudflare-china/publish-decisions.md.')
    out = io.StringIO(newline='')
    csv.writer(out, lineterminator='').writerow([row[key] for key in header])
    lines[i] = out.getvalue()
    break
else:
    raise RuntimeError('Queue row missing')
path.write_text('\n'.join(lines) + '\n', encoding='utf-8')
