/**
 * China Site Scanner, browser side. Runs the captcha + lead + scan flow and
 * writes the report from the JSON returned by /api/scan, using the locale's
 * copy that ScannerPage.astro embeds as #scanner-copy.
 */
import type { ScannerClientCopy } from '../data/scannerCopy';
import type { Finding, FindingOccurrence, Hosting, InventoryHost, ReadinessItem, ScanReport, Severity } from '../lib/scanner/types';

const SEVERITIES: Severity[] = ['critical', 'high', 'medium', 'low', 'info'];

const SEVERITY_STYLE: Record<Severity, { tag: string; card: string; dot: string }> = {
  critical: { tag: 'bg-red-100 text-red-700', card: 'border-red-200 bg-red-50/40', dot: 'bg-red-600' },
  high: { tag: 'bg-orange-100 text-orange-700', card: 'border-orange-200 bg-orange-50/40', dot: 'bg-orange-500' },
  medium: { tag: 'bg-yellow-100 text-yellow-800', card: 'border-yellow-200 bg-yellow-50/40', dot: 'bg-yellow-500' },
  low: { tag: 'bg-slate-100 text-slate-700', card: 'border-slate-200 bg-slate-50/60', dot: 'bg-slate-400' },
  info: { tag: 'bg-blue-100 text-blue-700', card: 'border-blue-100 bg-blue-50/30', dot: 'bg-blue-500' },
};

const VERDICT_STYLE: Record<string, string> = {
  blocked: 'bg-red-100 text-red-700',
  hangs: 'bg-red-100 text-red-700',
  network: 'bg-orange-100 text-orange-700',
  split: 'bg-orange-100 text-orange-700',
  intermittent: 'bg-orange-100 text-orange-700',
  partial: 'bg-orange-100 text-orange-700',
  malicious: 'bg-red-600 text-white',
  redirected: 'bg-red-100 text-red-700',
  slow: 'bg-yellow-100 text-yellow-800',
  licensing: 'bg-yellow-100 text-yellow-800',
  unverified: 'bg-slate-100 text-slate-600',
  unknown: 'bg-slate-100 text-slate-600',
  domestic: 'bg-green-100 text-green-700',
  reachable: 'bg-green-100 text-green-700',
};

const READINESS_ICON: Record<ReadinessItem['status'], string> = {
  pass: '<svg class="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
  fail: '<svg class="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
  warn: '<svg class="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>',
  info: '<svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
};

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape the template and every value, then fill {placeholders}. */
function fmt(template: string | undefined, vars: Record<string, unknown> = {}): string {
  return escapeHtml(template ?? '').replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? escapeHtml(vars[k]) : `{${k}}`));
}

/** Same, as plain text for the clipboard report. */
function fmtText(template: string | undefined, vars: Record<string, unknown> = {}): string {
  return (template ?? '').replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`));
}

function $(id: string): HTMLElement {
  return document.getElementById(id) as HTMLElement;
}

export function initScanner(): void {
  const root = $('scanner-root');
  if (!root) return;
  const locale = root.dataset.locale ?? 'en';
  const copy = JSON.parse($('scanner-copy').textContent ?? '{}') as ScannerClientCopy;
  const intlLocale = locale === 'en' ? 'en-GB' : locale;

  const regionNames = (() => {
    try {
      return new Intl.DisplayNames([intlLocale], { type: 'region' });
    } catch {
      return null;
    }
  })();
  const countryName = (cc: string | null) => {
    if (!cc) return copy.ui.unknown;
    try {
      return regionNames?.of(cc) ?? cc;
    } catch {
      return cc;
    }
  };
  const formatDate = (iso: string) => {
    const [y, m, d] = iso.split('-').map(Number);
    if (!y || !m) return iso;
    const date = new Date(Date.UTC(y, m - 1, d || 1));
    return new Intl.DateTimeFormat(intlLocale, d ? { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' } : { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
  };
  const numberFmt = new Intl.NumberFormat(intlLocale);

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  /* ── Elements ── */
  const gateWrapper = $('gate-form-wrapper');
  const gateForm = $('gate-form') as HTMLFormElement;
  const gateError = $('gate-error');
  const gateBtn = $('gate-btn') as HTMLButtonElement;
  const captchaQuestion = $('gate-captcha-question');
  const captchaAnswer = $('gate-captcha-answer') as HTMLInputElement;
  const loadingEl = $('loading-state');
  const resultsEl = $('results');
  const staticSections = ['how-it-works', 'what-we-check', 'method'].map($);
  const progressBar = $('progress-bar');
  const progressStep = $('progress-step');
  const progressPct = $('progress-pct');

  /* ── Captcha ── */
  let captchaToken = '';
  async function loadCaptcha() {
    captchaQuestion.textContent = '...';
    captchaAnswer.value = '';
    try {
      const res = await fetch('/api/captcha', { cache: 'no-store' });
      const data = (await res.json()) as { question: string; token: string };
      captchaQuestion.textContent = data.question;
      captchaToken = data.token;
    } catch {
      captchaQuestion.textContent = '?';
      captchaToken = '';
    }
  }
  $('gate-captcha-refresh').addEventListener('click', () => loadCaptcha());
  loadCaptcha();

  /* ── Progress ── */
  let progressTimer: ReturnType<typeof setInterval> | null = null;
  function startProgress() {
    let pct = 0;
    const steps = copy.progress;
    progressBar.style.width = '0%';
    progressPct.textContent = '0%';
    progressStep.textContent = steps[0];
    progressTimer = setInterval(() => {
      // Fast at first, then slower as it approaches the cap; a typical scan takes 5 to 20 seconds
      pct = Math.min(94, pct + Math.max(0.4, (94 - pct) * 0.06));
      progressBar.style.width = `${pct}%`;
      progressPct.textContent = `${Math.round(pct)}%`;
      progressStep.textContent = steps[Math.min(steps.length - 1, Math.floor((pct / 94) * steps.length))];
    }, 350);
  }
  function stopProgress(done: boolean) {
    if (progressTimer) clearInterval(progressTimer);
    progressTimer = null;
    if (done) {
      progressBar.style.width = '100%';
      progressPct.textContent = '100%';
    }
  }

  function showError(message: string) {
    gateError.textContent = message;
    gateError.classList.remove('hidden');
  }

  function showForm() {
    loadingEl.classList.add('hidden');
    resultsEl.classList.add('hidden');
    gateWrapper.classList.remove('hidden');
    staticSections.forEach((s) => s?.classList.remove('hidden'));
    gateBtn.disabled = false;
  }

  /* ── Submit ── */
  gateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    gateError.classList.add('hidden');

    const value = (id: string) => ($(id) as HTMLInputElement).value.trim();
    const name = value('gate-name');
    const company = value('gate-company');
    const website = value('gate-website');
    const email = value('gate-email');
    const answer = captchaAnswer.value.trim();

    if (!name || !company || !website || !email) return showError(copy.errors.fields);
    if (!answer || !captchaToken) return showError(copy.errors.captcha);

    const url = /^https?:\/\//i.test(website) ? website : `https://${website}`;
    try {
      new URL(url);
    } catch {
      return showError(copy.errors.invalid);
    }

    gateBtn.disabled = true;
    gateWrapper.classList.add('hidden');
    staticSections.forEach((s) => s?.classList.add('hidden'));
    loadingEl.classList.remove('hidden');
    startProgress();

    try {
      const verify = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ captchaAnswer: answer, captchaToken, locale, url }),
      });
      const verified = (await verify.json().catch(() => ({}))) as { error?: string; scanToken?: string };
      if (!verify.ok || !verified.scanToken) throw new Error(verified.error || copy.errors.captcha);

      // Lead capture runs alongside the scan and never blocks it
      fetch('/api/scanner-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, website, email, captchaAnswer: answer, captchaToken, locale }),
      }).catch(() => {});

      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, scanToken: verified.scanToken }),
      });
      const data = (await res.json().catch(() => ({ error: 'server' }))) as ScanReport & { error?: string; status?: number };
      if (!res.ok || data.error) {
        const key = res.status === 429 ? 'rate' : (data.error ?? 'server');
        throw new Error(fmtText(copy.errors[key] ?? copy.errors.server, { status: data.status ?? res.status }));
      }

      stopProgress(true);
      await new Promise((r) => setTimeout(r, 400));
      loadingEl.classList.add('hidden');
      render(data);
    } catch (err) {
      stopProgress(false);
      showForm();
      showError(err instanceof Error && err.message ? err.message : copy.errors.server);
      loadCaptcha();
    }
  });

  $('scan-again').addEventListener('click', () => {
    showForm();
    loadCaptcha();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Report ── */
  let lastReport: ScanReport | null = null;

  function verdictChip(verdict: string): string {
    return `<span class="text-[11px] font-semibold px-2 py-0.5 rounded ${VERDICT_STYLE[verdict] ?? VERDICT_STYLE.unknown}">${escapeHtml(copy.verdicts[verdict] ?? verdict)}</span>`;
  }

  function evidenceLine(source: string, date: string): string {
    return `<p class="mt-3 text-xs text-[var(--color-text-muted)]">${escapeHtml(copy.ui.sourceLabel)}: ${escapeHtml(source)}, ${escapeHtml(formatDate(date))}</p>`;
  }

  function occurrenceHtml(o: FindingOccurrence, homePath: string): string {
    const label = escapeHtml(copy.modes[o.mode] ?? o.mode);
    if (o.mode === 'plugin') {
      return `<li class="flex flex-wrap items-baseline gap-2"><span class="text-[11px] text-[var(--color-text-muted)]">${label}</span><code class="text-xs font-mono text-[var(--color-text-dark)]">${escapeHtml(o.page)}</code></li>`;
    }
    if (o.mode === 'marker') {
      return `<li class="flex flex-wrap items-baseline gap-2"><span class="text-[11px] text-[var(--color-text-muted)]">${label}</span><code class="text-xs font-mono text-[var(--color-text-dark)]">${escapeHtml(o.page)}</code></li>`;
    }
    const where =
      o.mode === 'js-file' || o.mode === 'css-file'
        ? ` <code class="font-mono">${escapeHtml(o.page)}</code>`
        : o.page !== homePath
          ? ` <span class="text-[var(--color-text-muted)]">(${escapeHtml(o.page)})</span>`
          : '';
    return `<li><span class="text-[11px] text-[var(--color-text-muted)]">${label}${where}</span><code class="block mt-0.5 text-xs bg-white/70 border border-[var(--color-surface-border)] text-[var(--color-text-dark)] px-2.5 py-1.5 rounded-md break-all font-mono">${escapeHtml(o.url)}</code></li>`;
  }

  function findingHtml(f: Finding, homePath: string): string {
    const style = SEVERITY_STYLE[f.severity];
    const why = fmt(copy.why[f.copy], { service: f.service });
    const fix = fmt(copy.fixes[f.fix]);
    const occ = f.occurrences;
    return `
      <article class="result-card rounded-xl border ${style.card} p-5">
        <div class="flex flex-wrap items-center gap-2">
          <h4 class="text-base font-semibold text-[var(--color-text-dark)] break-all">${escapeHtml(f.service)}</h4>
          ${verdictChip(f.verdict)}
        </div>
        ${why ? `<p class="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">${why}</p>` : ''}
        ${f.referencedOnly ? `<p class="mt-2 text-xs italic text-[var(--color-text-muted)]">${escapeHtml(copy.ui.referencedNote)}</p>` : ''}
        ${fix ? `<div class="mt-3 flex items-start gap-2 text-sm text-green-800 bg-green-50 border border-green-100 px-3 py-2.5 rounded-lg"><svg class="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg><span><strong>${escapeHtml(copy.ui.fixLabel)}:</strong> ${fix}</span></div>` : ''}
        ${
          occ.length
            ? `<details class="mt-3"${f.severity === 'critical' ? ' open' : ''}><summary class="cursor-pointer text-xs font-medium text-[var(--color-text-dark)]">${escapeHtml(copy.ui.foundLabel)} (${occ.length})</summary><ul class="mt-2 space-y-2">${occ.map((o) => occurrenceHtml(o, homePath)).join('')}</ul></details>`
            : ''
        }
        ${evidenceLine(f.evidence.source, f.evidence.date)}
      </article>`;
  }

  /** The platform or China CDN the copy should name: Cloudflare often sits in front of both. */
  function mainProvider(h: Hosting): string {
    return h.providers.find((p) => p !== 'Cloudflare') ?? h.providers[0] ?? copy.ui.unknown;
  }

  function hostingHtml(h: Hosting): string {
    const text = fmt(copy.hosting[h.copy], {
      country: countryName(h.country),
      network: h.network ?? copy.ui.unknown,
      provider: mainProvider(h),
    });
    const style = SEVERITY_STYLE[h.severity];
    const good = h.zone === 'mainland';
    const rows: [string, string][] = [
      [copy.ui.servedFrom, countryName(h.country)],
      [copy.ui.network, h.network ? `${h.network}${h.asn ? ` (AS${h.asn})` : ''}` : copy.ui.unknown],
      [copy.ui.provider, h.providers.length ? h.providers.join(', ') : copy.ui.unknown],
      [copy.ui.ip, h.ip ?? copy.ui.unknown],
    ];
    return `
      <div class="rounded-xl border ${good ? 'border-green-200 bg-green-50/40' : style.card} p-5 md:p-6">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <h3 class="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-dark)]">${escapeHtml(copy.ui.hostingTitle)}</h3>
          ${h.severity !== 'info' ? `<span class="text-xs font-semibold px-2 py-0.5 rounded ${style.tag}">${escapeHtml(copy.severity[h.severity].tag)}</span>` : ''}
        </div>
        <p class="text-sm text-[var(--color-text-body)] leading-relaxed">${text}</p>
        <dl class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          ${rows.map(([k, v]) => `<div class="flex gap-2 min-w-0"><dt class="text-[var(--color-text-muted)] shrink-0">${escapeHtml(k)}:</dt><dd class="text-[var(--color-text-dark)] break-all">${escapeHtml(v)}</dd></div>`).join('')}
        </dl>
        ${h.zone === 'mainland' ? `<p class="mt-3 text-xs text-[var(--color-text-muted)]">${escapeHtml(copy.ui.chinaView)}</p>` : ''}
        ${h.evidence ? evidenceLine(h.evidence.source, h.evidence.date) : ''}
      </div>`;
  }

  function readinessHtml(item: ReadinessItem): string {
    const entry = copy.readiness[item.key];
    if (!entry) return '';
    const text = fmt(entry[item.status], { value: item.value ?? '' });
    return `<li class="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-surface-border)]">${READINESS_ICON[item.status]}<div class="min-w-0"><p class="text-sm font-semibold text-[var(--color-text-dark)]">${escapeHtml(entry.title)}</p>${text ? `<p class="text-sm text-[var(--color-text-body)] mt-0.5 break-words">${text}</p>` : ''}</div></li>`;
  }

  function hostRowHtml(h: InventoryHost): string {
    return `<tr class="border-t border-[var(--color-surface-border)]">
      <td class="py-2 pr-4 align-top"><code class="font-mono text-xs break-all">${escapeHtml(h.host)}</code></td>
      <td class="py-2 pr-4 align-top text-[var(--color-text-body)]">${escapeHtml(h.service ?? '')}</td>
      <td class="py-2 align-top whitespace-nowrap">${verdictChip(h.verdict)}</td>
    </tr>`;
  }

  function animateNumber(el: HTMLElement, to: number, duration: number) {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function render(report: ScanReport) {
    lastReport = report;
    const homePath = new URL(report.finalUrl).pathname;
    const grade = copy.grades[report.grade];

    // Score
    const color = report.grade === 'good' ? '#16a34a' : report.grade === 'work' ? '#d97706' : '#dc2626';
    const ring = document.getElementById('score-ring') as unknown as SVGCircleElement;
    ring.style.stroke = color;
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = String(326.73 - (report.score / 100) * 326.73);
    });
    const scoreEl = $('score-number');
    scoreEl.style.color = color;
    animateNumber(scoreEl, report.score, 800);
    $('score-figure').setAttribute('aria-label', `${copy.ui.scoreLabel}: ${report.score} / 100`);

    $('grade-title').textContent = grade.title;
    $('grade-summary').textContent = grade.summary;
    $('results-url').textContent = `${copy.ui.reportFor} ${report.finalUrl}`;
    $('severity-counts').innerHTML = SEVERITIES.filter((s) => report.counts[s] > 0)
      .map((s) => `<span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${SEVERITY_STYLE[s].tag}"><span class="w-1.5 h-1.5 rounded-full ${SEVERITY_STYLE[s].dot}"></span>${report.counts[s]} ${escapeHtml(copy.severity[s].tag)}</span>`)
      .join('');

    // Hosting
    $('hosting-card').innerHTML = hostingHtml(report.hosting);

    // Findings, grouped by severity
    const findingsEl = $('findings');
    if (report.findings.length === 0) {
      findingsEl.innerHTML = `<p class="p-5 rounded-xl border border-green-200 bg-green-50/50 text-green-800 text-sm">${escapeHtml(copy.ui.noFindings)}</p>`;
    } else {
      findingsEl.innerHTML = SEVERITIES.map((s) => {
        const group = report.findings.filter((f) => f.severity === s);
        if (!group.length) return '';
        const meta = copy.severity[s];
        return `<div>
          <div class="flex items-center gap-3 mb-1"><span class="text-xs font-semibold px-2.5 py-1 rounded-md ${SEVERITY_STYLE[s].tag}">${escapeHtml(meta.tag)}</span><h4 class="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-dark)]">${escapeHtml(meta.title)}</h4></div>
          <p class="text-sm text-[var(--color-text-muted)] mb-4">${escapeHtml(meta.description)}</p>
          <div class="space-y-3">${group.map((f) => findingHtml(f, homePath)).join('')}</div>
        </div>`;
      }).join('');
    }

    // Checklist
    $('checklist').innerHTML = report.readiness.map(readinessHtml).join('');

    // Hosts
    const hostsPanel = $('hosts-panel');
    hostsPanel.classList.toggle('hidden', report.inventory.length === 0);
    $('hosts-title').textContent = fmtText(copy.ui.hostsTitle, { count: report.stats.thirdPartyHosts });
    $('hosts-table').innerHTML = report.inventory.map(hostRowHtml).join('');

    // Details
    const lines = [
      `${escapeHtml(copy.ui.pagesScanned)}: ${report.pages.map((p) => `${escapeHtml(p.url)}${p.status === 'failed' ? ` (${escapeHtml(copy.ui.failed)})` : ''}`).join(', ')}`,
      fmt(copy.ui.filesScanned, { scripts: report.stats.scriptsScanned, styles: report.stats.stylesScanned }),
      fmt(copy.ui.responseTime, { ms: numberFmt.format(report.stats.responseMs) }),
      fmt(copy.ui.htmlSize, { kb: numberFmt.format(Math.round(report.stats.htmlBytes / 1024)) }),
      report.platform ? fmt(copy.ui.builtWith, { platform: report.platform }) : '',
      escapeHtml(new Intl.DateTimeFormat(intlLocale, { dateStyle: 'long', timeStyle: 'short' }).format(new Date(report.timestamp))),
    ].filter(Boolean);
    $('scan-details').innerHTML = `<p class="font-semibold text-[var(--color-text-dark)]">${escapeHtml(copy.ui.detailsTitle)}</p>${lines.map((l) => `<p class="break-all">${l}</p>`).join('')}`;

    resultsEl.classList.remove('hidden');
    requestAnimationFrame(() => {
      resultsEl.querySelectorAll('.result-card').forEach((card, i) => setTimeout(() => card.classList.add('is-visible'), i * 50));
    });
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── Copy report as plain text ── */
  function reportText(r: ScanReport): string {
    const out: string[] = [];
    out.push(`China Site Scanner: ${r.finalUrl}`);
    out.push(`${copy.ui.score}: ${r.score}/100 (${copy.grades[r.grade].title})`);
    out.push(new Intl.DateTimeFormat(intlLocale, { dateStyle: 'long' }).format(new Date(r.timestamp)));
    out.push('');
    out.push(`${copy.ui.hostingTitle}:`);
    out.push(
      fmtText(copy.hosting[r.hosting.copy], {
        country: countryName(r.hosting.country),
        network: r.hosting.network ?? copy.ui.unknown,
        provider: mainProvider(r.hosting),
      }),
    );
    out.push('');
    for (const f of r.findings) {
      out.push(`[${copy.severity[f.severity].tag}] ${f.service}: ${copy.verdicts[f.verdict] ?? f.verdict}`);
      const why = fmtText(copy.why[f.copy], { service: f.service });
      if (why) out.push(`  ${why}`);
      const fix = copy.fixes[f.fix];
      if (fix) out.push(`  ${copy.ui.fixLabel}: ${fix}`);
      for (const o of f.occurrences.slice(0, 3)) out.push(`  - ${o.url || o.page}`);
      out.push(`  ${copy.ui.sourceLabel}: ${f.evidence.source}, ${formatDate(f.evidence.date)}`);
      out.push('');
    }
    out.push(`${copy.ui.checklistTitle}:`);
    for (const item of r.readiness) {
      const entry = copy.readiness[item.key];
      if (entry) out.push(`  - ${entry.title}: ${fmtText(entry[item.status], { value: item.value ?? '' })}`);
    }
    out.push('');
    out.push('https://www.chinawebfoundry.com');
    return out.join('\n');
  }

  $('copy-report').addEventListener('click', async () => {
    if (!lastReport) return;
    const label = $('copy-report-label');
    try {
      await navigator.clipboard.writeText(reportText(lastReport));
      label.textContent = copy.ui.copied;
      setTimeout(() => (label.textContent = copy.ui.copy), 2000);
    } catch {
      /* clipboard blocked: nothing useful to do */
    }
  });
}
