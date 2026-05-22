/**
 * Build wrapper with a concurrency guard.
 *
 * Two `astro build` runs against the same dist/ corrupt each other: one build
 * empties and rewrites dist/ while the other's prerender worker is mid-import,
 * which surfaces as an intermittent ERR_MODULE_NOT_FOUND on a prerender chunk.
 *
 * This wrapper holds a PID lockfile for the whole build. A second build that
 * starts while the first is still running fails fast with a clear message
 * instead of silently corrupting the output. A lock left behind by a crashed
 * build is detected as stale (its PID is no longer alive) and cleared.
 *
 * Also clears stale .vercel/output before the adapter writes a fresh copy
 * (previously the package.json `prebuild` script).
 */
import { existsSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const LOCK = fileURLToPath(new URL('node_modules/.astro-build.lock', root));
const VERCEL_OUTPUT = fileURLToPath(new URL('.vercel/output', root));

/** True if a process with this pid is currently running. */
function isAlive(pid) {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return err.code === 'EPERM'; // exists, owned by another user
  }
}

// Refuse to start a second concurrent build.
if (existsSync(LOCK)) {
  const pid = Number(readFileSync(LOCK, 'utf8').trim());
  if (isAlive(pid)) {
    console.error(`\n[build] Aborted: another build is already running (pid ${pid}).`);
    console.error('[build] Concurrent builds corrupt dist/ and cause ERR_MODULE_NOT_FOUND.');
    console.error('[build] Wait for it to finish, then build again.\n');
    process.exit(1);
  }
  rmSync(LOCK, { force: true }); // stale lock from a crashed build
}
writeFileSync(LOCK, String(process.pid));

let exitCode = 0;
try {
  // Clear stale Vercel output before the adapter writes a fresh copy.
  rmSync(VERCEL_OUTPUT, { recursive: true, force: true });

  const res = spawnSync('astro', ['build'], { stdio: 'inherit', shell: true });
  if (res.error) throw res.error;
  exitCode = res.status ?? 1;
} finally {
  rmSync(LOCK, { force: true });
}

process.exit(exitCode);
