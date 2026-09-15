from pathlib import Path
import re, json, hashlib
root=Path(__file__).resolve().parents[3]
slug='wordpress-plugins-china'
source=(root/f'editorial/output/{slug}.md').read_text(encoding='utf-8')
source_body=re.sub(r'<!--.*?-->','',source.split('<!-- INTRODUCTION -->')[1].split('<!-- CTA -->')[0],flags=re.S).strip()
expected_urls=set(re.findall(r'https://\S+',source_body))
result={}
for locale in ['en','fr','es','de']:
    directory='guides' if locale=='en' else 'guides-'+locale
    s=(root/f'src/content/{directory}/{slug}.md').read_text(encoding='utf-8')
    fields={k:json.loads(v) if v.startswith('"') else v for k,v in re.findall(r'^(\w+): (.+)$',s.split('---')[1],re.M)}
    body=s.split('\n---\n',1)[1].strip()
    assert len(fields['title'])<=52
    assert len(fields['summary'])<=152
    assert len(fields['subtitle'].split())<=25
    assert not re.search('[\u2013\u2014!]',body)
    assert not re.search(r'^# ',body,re.M)
    assert '<!--' not in body
    assert len(re.findall(r'^## ',body,re.M))==8
    urls=set(re.findall(r'https://\S+',body))
    assert urls==expected_urls,(locale,urls^expected_urls)
    links=re.findall(r'\]\((/[^)]+)\)',body)
    assert len(links)==4
    if locale!='en': assert all(p.startswith('/'+locale+'/') for p in links)
    else:
        unlinked=re.sub(r'\[([^]]+)\]\(/[^)]+\)',r'\1',body)
        assert unlinked==source_body,'English body differs from final reviewed source'
    result[locale]={'titleChars':len(fields['title']),'summaryChars':len(fields['summary']),'subtitleWords':len(fields['subtitle'].split()),'sections':8,'sourceUrls':len(urls),'internalLinks':links,'sha256':hashlib.sha256(s.encode()).hexdigest()}
result['reviewedSourceSha256']=hashlib.sha256(source.encode()).hexdigest()
quality=json.loads((root/'editorial/logs/runs/2026-09-15-a3-quality/validation.json').read_text(encoding='utf-8'))
assert quality['pass'] and result['reviewedSourceSha256']==quality['draftSha256']
result['pass']=True
(Path(__file__).parent/'content-validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=True,indent=2))
