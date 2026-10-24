import fs from 'node:fs';
const [status, note] = process.argv.slice(2);
const file='editorial/schedule.csv';
const s=fs.readFileSync(file,'utf8');
const lines=s.split(/\r?\n/);
function parse(line){const cells=[];let cell='',q=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(q&&line[i+1]==='"'){cell+='"';i++;}else q=!q;}else if(c===','&&!q){cells.push(cell);cell='';}else cell+=c;}cells.push(cell);return cells;}
const headers=parse(lines[0]);
const index=lines.findIndex(l=>parse(l)[headers.indexOf('slug')]==='china-latency-vantage-point-study');
if(index<0)throw new Error('Missing row');
const cells=parse(lines[index]);
cells[headers.indexOf('status')]=status;
const field={drafted:'drafted_on',quality_passed:'quality_passed_on',image_ready:'image_generated_on'}[status];
if(!field)throw new Error('Unsupported stage');
cells[headers.indexOf(field)]='2026-10-24';
if(note)cells[headers.indexOf('notes')]=note;
lines[index]=cells.map(v=>/[",\r\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v).join(',');
fs.writeFileSync(file,lines.join(s.includes('\r\n')?'\r\n':'\n'));
console.log(`${status}: T4-02`);
