import fs from 'node:fs';
const base='https://www.chinawebfoundry.com';
const prefixes=['/resources/china-web-guide/','/fr/ressources/guide-web-chine/','/es/recursos/guia-web-china/','/de/ressourcen/china-web-leitfaden/'];
const groups=[
 ['cloudflare-china','cloudflare-chine','cloudflare-china','cloudflare-china'],
 ['is-wordpress-blocked-in-china','wordpress-bloque-en-chine','wordpress-bloqueado-en-china','ist-wordpress-in-china-gesperrt'],
 ['wordpress-speed-china','vitesse-wordpress-chine','velocidad-wordpress-china','wordpress-geschwindigkeit-china']
];
const urls=groups.flatMap(group=>group.map((slug,i)=>`${base}${prefixes[i]}${slug}/`));
const checks=await Promise.all(urls.map(async url=>{
 try {
  const response=await fetch(url,{headers:{'cache-control':'no-cache'},signal:AbortSignal.timeout(25000)});
  const body=await response.text();
  return {url,status:response.status,updated:body.includes('2026-10-20'),canonical:body.includes(`rel="canonical" href="${url}"`),ok:response.ok&&body.includes('2026-10-20')&&body.includes('geographic-traffic-routing/')};
 }catch(e){return {url,ok:false,error:e.message};}
}));
const hero=await fetch(`${base}/images/guides/cloudflare-china.webp`,{signal:AbortSignal.timeout(25000)});
checks.push({url:hero.url,status:hero.status,ok:hero.ok});
console.log(JSON.stringify(checks,null,2));
fs.appendFileSync('editorial/logs/runs/2026-10-20-publish.txt',`\nLive verification ${new Date().toISOString()}\n${JSON.stringify(checks,null,2)}\n`);
if(checks.some(x=>!x.ok)) process.exit(1);
console.log('All four new pages, eight corrections and hero are live.');
