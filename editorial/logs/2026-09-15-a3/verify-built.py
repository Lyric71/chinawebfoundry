from pathlib import Path
from html.parser import HTMLParser
import json, xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[3]
base=root/'dist/client'
routes={
 'en':'/resources/china-web-guide/wordpress-plugins-china/',
 'fr':'/fr/ressources/guide-web-chine/plugins-wordpress-chine/',
 'es':'/es/recursos/guia-web-china/plugins-wordpress-china/',
 'de':'/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/'
}
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.links=[]; self.meta=[]; self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='link': self.links.append(a)
  if tag=='meta': self.meta.append(a)
  if tag=='h1': self.h1+=1
urls={x.text for x in ET.parse(base/'sitemap-0.xml').iter() if x.tag.endswith('}loc')}
validation=json.loads((Path(__file__).parent/'content-validation.json').read_text(encoding='utf-8'))
result={}
for locale,route in routes.items():
 text=(base/route.strip('/')/'index.html').read_text(encoding='utf-8')
 p=Page();p.feed(text)
 assert p.h1==1,(locale,p.h1)
 canonical=next(x['href'] for x in p.links if x.get('rel')=='canonical')
 assert canonical.endswith(route)
 assert canonical in urls
 alternates={x.get('hreflang'):x['href'] for x in p.links if x.get('rel')=='alternate'}
 for lang,r in routes.items(): assert alternates[lang].endswith(r),(locale,lang,alternates)
 assert 'noindex' not in [x.get('content','') for x in p.meta if x.get('name')=='robots']
 for link in validation[locale]['internalLinks']:
  assert (base/link.strip('/')/'index.html').exists(),link
 prefix='' if locale=='en' else locale+'/'
 home=(base/prefix/'index.html').read_text(encoding='utf-8')
 index=(base/route.strip('/').rsplit('/',1)[0]/'index.html').read_text(encoding='utf-8')
 assert route in home and route in index
 result[locale]={'route':route,'canonical':canonical,'hreflang':alternates,'h1':p.h1,'inSitemap':True,'inHomepageAndIndex':True}
result['sitemapEntries']=len(urls)
result['pass']=True
(Path(__file__).parent/'built-validation.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps(result,indent=2))
