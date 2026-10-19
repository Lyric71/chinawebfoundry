import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const git=(...args)=>execFileSync('git',args,{encoding:'utf8'});
assert.equal(git('diff','--cached','--name-only').trim(),'','Index must be empty before scoped staging');
const whole=[
 'editorial/output/cloudflare-china.md','public/images/guides/cloudflare-china.webp',
 'editorial/briefs/2026-11-05-cloudflare-china.md','editorial/sources/fact-bank.md',
 'editorial/sources/verified-sources.md','editorial/logs/2026-10-20.md',
 'editorial/logs/2026-10-20-cloudflare-china'
];
for(const suffix of ['','-fr','-es','-de']) for(const slug of ['cloudflare-china','is-wordpress-blocked-in-china','wordpress-speed-china']) whole.push(`src/content/guides${suffix}/${slug}.md`);
git('add','--',...whole);
function stageText(path,text) {
 const hash=execFileSync('git',['hash-object','-w','--stdin'],{input:text,encoding:'utf8'}).trim();
 git('update-index','--cacheinfo',`100644,${hash},${path}`);
}
function selectLines(path,predicates) {
 const base=git('show',`HEAD:${path}`).split('\n');
 const current=fs.readFileSync(path,'utf8').split(/\r?\n/);
 for(const match of predicates) {
  const old=base.map((line,i)=>match(line)?i:-1).filter(i=>i>=0);
  const fresh=current.filter(match);
  assert.equal(old.length,1,path+' old match'); assert.equal(fresh.length,1,path+' new match');
  base[old[0]]=fresh[0];
 }
 stageText(path,base.join('\n'));
}
selectLines('editorial/PLAN.md',[
 s=>s.startsWith('- **F30.**'),
 s=>s.startsWith('title: "Cloudflare in China:'),
 s=>s.startsWith('description: "The China Network is Enterprise only,')||s.startsWith('description: "Cloudflare China Network needs Enterprise,')
]);
selectLines('editorial/scripts/build-briefs.mjs',[s=>s.startsWith("  'T2-04':")]);
selectLines('editorial/schedule.csv',[s=>s.includes(',T2-04,')]);
const route='src/i18n/routes.ts';
const entry=fs.readFileSync(route,'utf8').split('\n').find(s=>s.startsWith("  'cloudflare-china':"));
assert(entry);
stageText(route,git('show',`HEAD:${route}`).replace('export const guideSlugs: Record<string, Trans> = {',`export const guideSlugs: Record<string, Trans> = {\n${entry}`));
console.log('Staged only Cloudflare publication, completed corrections, source evidence and current-day audit. Shared-file hunks isolated from unrelated work.');
