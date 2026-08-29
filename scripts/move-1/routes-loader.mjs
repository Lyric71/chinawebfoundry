/**
 * Loads src/i18n/routes.ts into plain Node by stripping its TypeScript types
 * with esbuild. Lets the Move 1 tooling use the real route map rather than a
 * second copy of it that could drift.
 */
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { transformSync } from 'esbuild';

const src = readFileSync('src/i18n/routes.ts', 'utf8');
const js = transformSync(src, { loader: 'ts', format: 'esm' }).code;
const dir = mkdtempSync(join(tmpdir(), 'move1-'));
const file = join(dir, 'routes.mjs');
writeFileSync(file, js);

export const routes = await import(pathToFileURL(file).href);
export const LOCALES = ['en', 'fr', 'es', 'de'];
export const ORIGIN = 'https://www.chinawebfoundry.com';
