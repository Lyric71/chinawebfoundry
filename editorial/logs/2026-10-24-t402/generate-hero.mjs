import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const s=fs.readFileSync('editorial/output/china-latency-vantage-point-study.md','utf8');
const prompt=s.split('IMAGE PROMPT (use verbatim):\n\n')[1].split('\n====')[0].trim();
const out='editorial/logs/runs/2026-10-24-t402-hero.png';
const result=spawnSync(process.execPath,['scripts/generate-image.mjs',prompt,'--model','gpt-image-2','--quality','high','--aspect-ratio','3:2','--out',out],{stdio:'inherit',windowsHide:true});
process.exitCode=result.status??1;
