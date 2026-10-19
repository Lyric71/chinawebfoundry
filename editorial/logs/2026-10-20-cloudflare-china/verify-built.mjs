import fs from 'node:fs';
import assert from 'node:assert/strict';
const routes=[
 '/resources/china-web-guide/cloudflare-china/',
 '/fr/ressources/guide-web-chine/cloudflare-chine/',
 '/es/recursos/guia-web-china/cloudflare-china/',
 '/de/ressourcen/china-web-leitfaden/cloudflare-china/'
];
const sitemap=fs.readFileSync('dist/client/sitemap-0.xml','utf8');
const result=[];
for (let i=0;i<routes.length;i++) {
 const route=routes[i];
 const html=fs.readFileSync(`dist/client${route}index.html`,'utf8');
 assert(html.includes('/images/guides/cloudflare-china.webp'));
 assert(html.includes('2026-10-20'));
 for(const alternate of routes) assert(html.includes(`https://www.chinawebfoundry.com${alternate}`),`${route}: missing ${alternate}`);
 assert(sitemap.includes(`https://www.chinawebfoundry.com${route}`));
 const source=fs.readFileSync(`src/content/guides${['','-fr','-es','-de'][i]}/cloudflare-china.md`,'utf8');
 for (const [,url] of source.matchAll(/\]\((\/[^)]+)\)/g)) assert(fs.existsSync(`dist/client${url}index.html`),`Missing internal destination: ${url}`);
 const index=route.slice(0,route.slice(0,-1).lastIndexOf('/')+1);
 assert(fs.readFileSync(`dist/client${index}index.html`,'utf8').includes(route),`Missing index listing ${route}`);
 const home=['/','/fr/','/es/','/de/'][i];
 assert(fs.readFileSync(`dist/client${home}index.html`,'utf8').includes(route),`Missing homepage listing ${route}`);
 result.push({route,canonicalAndHreflang:true,sitemap:true,image:true,internalLinks:true,indexAndHomepage:true});
}
fs.writeFileSync('editorial/logs/2026-10-20-cloudflare-china/built-routes.json',JSON.stringify(result,null,2)+'\n');
console.log('All four rendered pages, canonical/hreflang, sitemap, hero, internal links, index and homepage listings pass.');
