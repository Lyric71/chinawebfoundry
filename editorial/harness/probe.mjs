#!/usr/bin/env node
/**
 * Tier-one collector for the measurement harness. Node 18+, no dependencies.
 * Runs the host list in hosts.yml from wherever it is executed and writes one
 * JSON file per run with one row per host, in the PLAN.md 3.5 schema.
 *
 *   node editorial/harness/probe.mjs --vantage datacenter --provider alibaba-cloud --region cn-zhangjiakou
 *   node editorial/harness/probe.mjs --vantage consumer --provider china-unicom --region beijing --carrier "China Unicom"
 *   node editorial/harness/probe.mjs --latest          # rebuild latest.json from the newest run per vantage
 *
 * Options: --hosts <file> --attempts 3 --abandon 60000 --only <substring> --out <dir>
 *
 * What it records, per attempt: DNS resolution and the resolved IP, time to
 * connect, TLS handshake, time to first byte, completion time and bytes, HTTP
 * status. A first byte with no completion inside the abandon window is
 * "answered_no_completion", never "ok". A DNS success followed by no socket
 * event inside the window is "no_event". These two are the failure modes a
 * naive collector misreports as healthy or absent (PLAN.md 3.4).
 *
 * What it does not do yet: the headless Chromium waterfall pass that diffs a
 * page's expected requests against observed ones. That is how no_event is
 * meant to be detected for real page loads; here it is inferred per host.
 */

import { promises as dns } from 'node:dns';
import https from 'node:https';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) out[key] = true;
    else { out[key] = val; i++; }
  }
  return out;
}

/* Minimal YAML reader for the shape hosts.yml uses (flow mappings in a list). */
function loadHosts(file) {
  const text = readFileSync(file, 'utf8');
  const hosts = [];
  const thresholds = { default: 1000 };
  let inThresholds = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\s+#.*$/, '').trimEnd();
    if (!line.trim() || line.trim().startsWith('#')) continue;
    if (/^slow_threshold_ms:/.test(line)) { inThresholds = true; continue; }
    if (/^hosts:/.test(line)) { inThresholds = false; continue; }
    if (inThresholds) {
      const m = line.match(/^\s+([\w-]+):\s*(\d+)/);
      if (m) thresholds[m[1]] = Number(m[2]);
      continue;
    }
    const m = line.match(/^\s*-\s*\{(.*)\}\s*$/);
    if (!m) continue;
    const obj = {};
    for (const part of m[1].match(/(\w+):\s*("(?:[^"\\]|\\.)*"|[^,]+)/g) || []) {
      const [, k, v] = part.match(/(\w+):\s*(.*)/);
      let val = v.trim();
      if (val.startsWith('"')) val = JSON.parse(val);
      if (val === 'true') val = true;
      obj[k] = val;
    }
    if (obj.host) hosts.push(obj);
  }
  return { hosts, thresholds };
}

function now() { return performance.now(); }

/** One attempt against one host. Resolves to a partial row. */
function attempt(entry, abandonMs) {
  return new Promise(async (resolve) => {
    const r = { dns_ms: null, connect_ms: null, tls_ms: null, ttfb_ms: null, complete_ms: null, bytes: 0, http_status: null, resolved_ip: null, outcome: null, notes: '' };
    const t0 = now();

    // DNS first, recorded separately from the connection outcome.
    try {
      const { address } = await dns.lookup(entry.host);
      r.resolved_ip = address;
      r.dns_ms = Math.round(now() - t0);
    } catch (e) {
      r.dns_ms = Math.round(now() - t0);
      r.outcome = 'dns_fail';
      r.notes = e.code || String(e);
      return resolve(r);
    }

    let settled = false;
    const done = (outcome, notes = '') => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      r.outcome = outcome;
      if (notes && !r.notes) r.notes = notes;
      try { req.destroy(); } catch {}
      resolve(r);
    };

    const timer = setTimeout(() => {
      if (r.ttfb_ms !== null) done('answered_no_completion', 'first byte received, no completion inside abandon window');
      else if (r.connect_ms !== null) done('no_response', 'connected, no first byte inside abandon window');
      else done('no_event', 'DNS resolved, no socket event inside abandon window');
    }, abandonMs);

    const req = https.request({
      host: entry.host,
      path: entry.path || '/',
      method: 'GET',
      servername: entry.host,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; CWF-harness/1.0; +https://www.chinawebfoundry.com)', accept: '*/*' },
      timeout: abandonMs,
    });

    req.on('socket', (socket) => {
      socket.once('connect', () => { r.connect_ms = Math.round(now() - t0); });
      socket.once('secureConnect', () => { r.tls_ms = Math.round(now() - t0); });
    });

    req.on('response', (res) => {
      r.ttfb_ms = Math.round(now() - t0);
      r.http_status = res.statusCode;
      res.on('data', (chunk) => { r.bytes += chunk.length; });
      res.on('end', () => {
        r.complete_ms = Math.round(now() - t0);
        done('ok');
      });
      res.on('error', (e) => done(r.ttfb_ms !== null ? 'answered_no_completion' : 'no_response', e.code || String(e)));
    });

    req.on('error', (e) => {
      if (r.connect_ms === null) done('no_response', e.code || String(e));
      else done(r.ttfb_ms !== null ? 'answered_no_completion' : 'no_response', e.code || String(e));
    });

    req.end();
  });
}

function median(nums) {
  const a = nums.filter((n) => n !== null && n !== undefined).sort((x, y) => x - y);
  if (!a.length) return null;
  const mid = Math.floor(a.length / 2);
  return a.length % 2 ? a[mid] : Math.round((a[mid - 1] + a[mid]) / 2);
}

/** Round TTFB to the nearest 10ms above 100ms (PLAN.md 3.8). */
function roundTtfb(ms) {
  if (ms === null) return null;
  return ms > 100 ? Math.round(ms / 10) * 10 : ms;
}

async function run(args) {
  const hostsFile = args.hosts || path.join(here, 'hosts.yml');
  const outDir = args.out || path.join(here, 'runs');
  const attempts = Number(args.attempts || 3);
  const abandon = Number(args.abandon || 60000);
  const vantage = {
    type: args.vantage || 'datacenter',
    provider: args.provider || 'unknown',
    region: args.region || 'unknown',
    carrier: args.carrier || null,
  };
  if (!args.vantage || !args.provider || !args.region) {
    console.error('Name the vantage point: --vantage datacenter|consumer --provider <cloud or isp> --region <region or city> [--carrier "<name>"]');
    console.error('A run without a named vantage point produces numbers that cannot be published.');
    process.exit(2);
  }

  const { hosts, thresholds } = loadHosts(hostsFile);
  const list = hosts.filter((h) => !args.only || h.host.includes(args.only));
  const runId = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  const rows = [];

  console.log(`run ${runId} from ${vantage.type} ${vantage.provider} ${vantage.region}${vantage.carrier ? ' ' + vantage.carrier : ''}: ${list.length} hosts, ${attempts} attempts, ${abandon}ms abandon`);

  for (const entry of list) {
    const row = {
      run_id: runId,
      host: entry.host,
      dependency: entry.dependency,
      category: entry.category,
      vantage,
      dns_ms: null, connect_ms: null, tls_ms: null, ttfb_ms: null, complete_ms: null,
      outcome: 'not_tested',
      bytes: 0,
      abandon_after_ms: abandon,
      http_status: null,
      resolved_ip: null,
      attempts,
      successes: 0,
      notes: entry.notes || '',
    };

    if (entry.host.startsWith('TODO')) {
      row.notes = `not provisioned. ${row.notes}`.trim();
      rows.push(row);
      console.log(`  ${entry.host.padEnd(34)} not_tested (not provisioned)`);
      continue;
    }

    const results = [];
    for (let i = 0; i < attempts; i++) results.push(await attempt(entry, abandon));

    row.dns_ms = median(results.map((x) => x.dns_ms));
    row.connect_ms = median(results.map((x) => x.connect_ms));
    row.tls_ms = median(results.map((x) => x.tls_ms));
    row.ttfb_ms = roundTtfb(median(results.map((x) => x.ttfb_ms)));
    row.complete_ms = median(results.map((x) => x.complete_ms));
    row.bytes = Math.max(...results.map((x) => x.bytes));
    row.http_status = results.find((x) => x.http_status)?.http_status ?? null;
    row.resolved_ip = results.find((x) => x.resolved_ip)?.resolved_ip ?? null;
    row.successes = results.filter((x) => x.outcome === 'ok').length;

    // Verdict: the worst outcome wins when attempts disagree, because a host
    // that fails one time in three is not a host you can build on.
    const order = ['ok', 'slow', 'answered_no_completion', 'no_response', 'no_event', 'dns_fail'];
    let worst = 'ok';
    for (const x of results) if (order.indexOf(x.outcome) > order.indexOf(worst)) worst = x.outcome;
    if (worst === 'ok') {
      const limit = thresholds[entry.category] ?? thresholds.default;
      if (row.ttfb_ms !== null && row.ttfb_ms > limit) worst = 'slow';
    }
    row.outcome = worst;
    const attemptNotes = [...new Set(results.map((x) => x.notes).filter(Boolean))].join('; ');
    if (attemptNotes) row.notes = `${row.notes ? row.notes + ' ' : ''}[${attemptNotes}]`;

    rows.push(row);
    console.log(`  ${entry.host.padEnd(34)} ${row.outcome.padEnd(24)} ttfb ${String(row.ttfb_ms ?? '-').padStart(5)}ms  ${row.successes} of ${attempts}`);
  }

  mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${runId.replace(/:/g, '')}-${vantage.type}-${vantage.region}.json`);
  writeFileSync(file, JSON.stringify({ run_id: runId, vantage, hosts_file: path.basename(hostsFile), rows }, null, 2));
  console.log(`wrote ${file}`);
}

/** Rebuild latest.json from the newest run file per vantage point. */
function latest(args) {
  const runsDir = args.out || path.join(here, 'runs');
  if (!existsSync(runsDir)) { console.error('no runs/ directory'); process.exit(1); }
  const files = readdirSync(runsDir).filter((f) => f.endsWith('.json')).sort();
  const newestByVantage = new Map();
  for (const f of files) {
    const data = JSON.parse(readFileSync(path.join(runsDir, f), 'utf8'));
    const key = `${data.vantage.type}|${data.vantage.provider}|${data.vantage.region}|${data.vantage.carrier || ''}`;
    newestByVantage.set(key, data); // sorted ascending, so the last one wins
  }
  const rows = [...newestByVantage.values()].flatMap((d) => d.rows);
  const out = {
    generated: new Date().toISOString(),
    vantages: [...newestByVantage.values()].map((d) => ({ ...d.vantage, run_id: d.run_id })),
    rows,
  };
  writeFileSync(path.join(here, 'latest.json'), JSON.stringify(out, null, 2));
  console.log(`latest.json: ${out.vantages.length} vantage point(s), ${rows.length} rows`);
}

const args = parseArgs(process.argv.slice(2));
if (args.latest) latest(args); else run(args).catch((e) => { console.error(e); process.exit(1); });
