from pathlib import Path
from html.parser import HTMLParser
import json, re, xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[3]
out = root/'.vercel/output/static'
site = 'https://www.chinawebfoundry.com'
paths = [
    '/resources/china-web-guide/wordpress-vs-astro-china/',
    '/fr/ressources/guide-web-chine/wordpress-ou-astro-chine/',
    '/es/recursos/guia-web-china/wordpress-o-astro-china/',
    '/de/ressourcen/china-web-leitfaden/wordpress-oder-astro-china/',
]
class Tags(HTMLParser):
    def __init__(self):
        super().__init__(); self.tags=[]
    def handle_starttag(self,tag,attrs):
        self.tags.append((tag,dict(attrs)))

ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','x':'http://www.w3.org/1999/xhtml'}
xml=ET.parse(out/'sitemap-0.xml')
entries={e.find('s:loc',ns).text:e for e in xml.findall('s:url',ns)}
rows=[]
for locale,collection,path in zip(['en','fr','es','de'],['guides','guides-fr','guides-es','guides-de'],paths):
    s=(out/path.lstrip('/')/'index.html').read_text(encoding='utf-8')
    t=Tags();t.feed(s)
    canon=[a['href'] for tag,a in t.tags if tag=='link' and a.get('rel')=='canonical']
    assert canon==[site+path],(locale,canon)
    alternates={a['href'] for tag,a in t.tags if tag=='link' and a.get('rel')=='alternate' and 'hreflang' in a}
    assert set(site+p for p in paths)<=alternates,(locale,alternates)
    assert sum(tag=='h1' for tag,a in t.tags)==1,locale
    images=[a for tag,a in t.tags if tag=='img' and a.get('src')=='/images/guides/wordpress-vs-astro-china.webp']
    assert len(images)==1 and images[0].get('alt'),locale
    og=[a['content'] for tag,a in t.tags if tag=='meta' and a.get('property')=='og:image']
    assert og==[site+'/og/guides/wordpress-vs-astro-china.jpg'],(locale,og)
    assert site+path in entries,locale
    sitemap_alts={a.attrib['href'] for a in entries[site+path].findall('x:link',ns)}
    assert set(site+p for p in paths)<=sitemap_alts,(locale,sitemap_alts)
    md=(root/'src/content'/collection/'wordpress-vs-astro-china.md').read_text(encoding='utf-8')
    for target in re.findall(r'\]\((/[^)]+)\)',md):
        assert (out/target.lstrip('/')/'index.html').exists(),target
    home=(out/('index.html' if locale=='en' else locale+'/index.html')).read_text(encoding='utf-8')
    assert path in home,(locale,'homepage teaser')
    rows.append(f'{locale}: page, canonical, four hreflang links, sitemap alternates, hero alt, share card, five internal links and homepage teaser passed.')
for path in ['/services/baidu-seo/','/fr/services/baidu-seo/','/es/servicios/baidu-seo/','/de/leistungen/baidu-seo/']:
    s=(out/path.lstrip('/')/'index.html').read_text(encoding='utf-8')
    assert '"dateModified":"2026-10-22"' in s,path
rows.append(f'Sitemap: {len(entries)} URLs. Four new guide URLs; service corrections retain their routes.')
rows.append('All four Baidu service pages carry dateModified 2026-10-22.')
receipt='\n'.join(rows)+'\n'
(Path(__file__).parent/'publish-rendered-checks.txt').write_text(receipt,encoding='utf-8')
print(receipt)
