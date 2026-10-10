#!/usr/bin/env node
/**
 * Queue watchdog for the ChinaWebFoundry editorial pipeline. run-daily.ps1
 * calls it after every draft run. It reads editorial/schedule.csv and mails
 * Cyril, through Resend, at most once a day, when the pipeline stops
 * producing:
 *
 *   - stalled: rows are ready to draft but nothing has been drafted for
 *              --stall-days days. Until 10 October 2026 the draft run took
 *              "today's row" on Tuesday, Thursday and Friday only, so T2-05
 *              sat undrafted from 2 October and no brief was drafted ahead of
 *              its date. This catches a date gate, a dead task or an expired
 *              login alike.
 *   - stuck:   a finished draft has sat at image_ready for --stall-days days
 *              (a China Dependency Index edition or a "Hold until" row is
 *              not counted before its date).
 *   - low:     a week or less of briefs is left to draft, or none at all.
 *
 * Rows behind a content gate (blocked, reserve, a non-empty gate column) are
 * settled and skipped silently by every run (editorial/CLAUDE.md), so they
 * are counted, never named. The mail reports facts, never an open items
 * list (editorial/CLAUDE.md, "No run leaves a TODO behind").
 *
 *   node editorial/scripts/check-queue.mjs [--per-day 1] [--low-days 7]
 *        [--stall-days 2] [--dry-run]
 *
 * One mail a day: the marker editorial/logs/runs/<date>-queue.txt records it.
 * Always exits 0, so it never fails the run that calls it.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Same sender and recipient as notify-publish.mjs (Resend testing mode).
const DEFAULT_TO = 'cyril.drouin@outlook.com';
const FROM = 'ChinaWebFoundry <onboarding@resend.dev>';
const DAY = 86_400_000;

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? Number(process.argv[i + 1]) : fallback;
}

/** RFC 4180 CSV: quoted fields, doubled quotes, commas and newlines inside quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((f) => f !== ''));
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.replace(/^﻿/, ''), r[i] ?? ''])));
}

const shanghaiToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);
const addDays = (iso, n) => new Date(Date.parse(iso) + n * DAY).toISOString().slice(0, 10);
const longDate = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/**
 * The one dated exception (editorial/CLAUDE.md): a China Dependency Index
 * edition reports the month it names, and a row whose notes say
 * "Hold until YYYY-MM-DD" waits for that date. Returns the date or ''.
 */
function holdUntil(row) {
  const note = (row.notes || '').match(/Hold until (\d{4}-\d{2}-\d{2})/);
  if (note) return note[1];
  if (/^china-dependency-index-\d{4}-\d{2}$/.test(row.slug)) return row.publish_date;
  return '';
}

async function main() {
  loadEnv();
  const perDay = arg('per-day', 1);
  const lowDays = arg('low-days', 7);
  const stallDays = arg('stall-days', 2);
  const dryRun = process.argv.includes('--dry-run');

  const rows = parseCsv(readFileSync(path.join('editorial', 'schedule.csv'), 'utf8'))
    .sort((a, b) => a.publish_date.localeCompare(b.publish_date));
  const today = shanghaiToday();
  const held = (r) => holdUntil(r) > today;

  const inProgress = rows.filter((r) => r.status === 'drafted' || r.status === 'quality_passed');
  const notStarted = rows.filter((r) => r.status === 'not_started' && !r.gate.trim());
  const ready = [...inProgress, ...notStarted.filter((r) => !held(r))];
  const heldRows = notStarted.filter(held);
  const gated = rows.filter((r) => r.status === 'blocked' || r.status === 'reserve'
    || (r.status === 'not_started' && r.gate.trim()));
  const finished = rows.filter((r) => r.status === 'image_ready');
  const published = rows.filter((r) => r.status === 'published');

  const lastDrafted = rows.map((r) => r.drafted_on).filter(Boolean).sort().pop() || '';
  const idle = lastDrafted ? daysBetween(lastDrafted, today) : Infinity;
  const stuck = finished.filter((r) => !held(r)
    && daysBetween(r.image_generated_on || r.quality_passed_on || r.drafted_on || today, today) >= stallDays);
  const runway = Math.ceil(ready.length / perDay);
  const nextHold = heldRows.map(holdUntil).sort()[0] || '';

  const status = `${ready.length} ready to draft, ${heldRows.length} held to a date, `
    + `${gated.length} behind a content gate, ${finished.length} at image_ready, `
    + `${published.length} published, last draft ${lastDrafted || 'never'}`;
  const alerts = [];
  if (ready.length && idle >= stallDays) {
    alerts.push(`Drafting has stalled: ${ready.length} rows are ready to draft and the last draft was made on ${longDate(lastDrafted)}, ${idle} day${idle === 1 ? '' : 's'} ago. No draft run since then has drafted one; their logs are in editorial/logs/runs/.`);
  }
  if (stuck.length) {
    alerts.push(`Publishing has stalled: ${stuck.map((r) => `${r.brief_id} ${r.slug}`).join(', ')} ${stuck.length === 1 ? 'has' : 'have'} been at image_ready for ${stallDays} days or more. The publish run logs are in editorial/logs/runs/.`);
  }
  if (ready.length === 0 && heldRows.length === 0) {
    alerts.push(`The drafting queue is empty: no row in editorial/schedule.csv is left to draft. ${gated.length} rows remain behind a content gate, which every run skips as settled. No new piece will publish until new rows and briefs are added (editorial/PLAN.md, then build-briefs.mjs).`);
  } else if (ready.length === 0) {
    alerts.push(`Nothing is ready to draft until ${longDate(nextHold)}, when the next held row reaches its date. ${heldRows.length} rows are held to their dates and ${gated.length} remain behind a content gate. After those no new piece will publish until new rows and briefs are added (editorial/PLAN.md, then build-briefs.mjs).`);
  } else if (runway <= lowDays) {
    alerts.push(`The drafting queue is running low: ${ready.length} rows left to draft. At ${perDay} draft${perDay === 1 ? '' : 's'} a day the last one is drafted around ${longDate(addDays(today, runway))}; after that no new piece publishes until new rows and briefs are added (editorial/PLAN.md, then build-briefs.mjs).`);
  }

  if (!alerts.length) {
    console.log(`ok: ${status}`);
    return;
  }

  const marker = path.join('editorial', 'logs', 'runs', `${today}-queue.txt`);
  if (existsSync(marker) && !dryRun) {
    console.log(`alert already sent today: ${status}`);
    return;
  }

  const subject = alerts[0].startsWith('Drafting has stalled') ? `ChinaWebFoundry drafting stalled (${ready.length} rows ready)`
    : alerts[0].startsWith('Publishing has stalled') ? 'ChinaWebFoundry publishing stalled'
    : alerts[0].startsWith('The drafting queue is empty') ? 'ChinaWebFoundry editorial queue empty'
    : alerts[0].startsWith('Nothing is ready') ? 'ChinaWebFoundry editorial queue paused to a dated row'
    : `ChinaWebFoundry editorial queue low: ${ready.length} rows left`;
  const text = [subject, '', ...alerts, '', `Schedule: ${status}.`].join('\n');

  if (dryRun) {
    console.log(text);
    return;
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`alert not sent, RESEND_API_KEY missing: ${subject}`);
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [DEFAULT_TO], subject, text }),
  });
  if (!res.ok) {
    console.log(`alert not sent, Resend ${res.status}: ${subject}`);
    return;
  }
  writeFileSync(marker, `${new Date().toISOString()} ${text}\n`);
  console.log(`alert sent to ${DEFAULT_TO}: ${subject}`);
}

main().catch((err) => {
  console.log(`queue check failed: ${err.message}`);
});
