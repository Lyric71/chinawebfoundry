import fs from 'node:fs';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import tableWrapper from '../../../src/lib/rehypeTableWrapper.mjs';

const slug = 'china-dependency-index-2026-10';
const source = fs.readFileSync(`editorial/output/${slug}.md`, 'utf8');
const body = source.replace(/^---[\s\S]*?---\s*/, '').replace(/<!--[\s\S]*?-->/g, '');
const processor = await createMarkdownProcessor({ rehypePlugins: [tableWrapper] });
const rendered = await processor.render(body, {
  fileURL: pathToFileURL(`${process.cwd()}/src/content/guides/${slug}.md`),
});
const ids = [...rendered.code.matchAll(/<tr id="(host-[^"]+)"/g)].map((m) => m[1]);
assert.equal(ids.length, 55, 'all index rows need static citation anchors');
assert.equal(new Set(ids).size, 55, 'anchors must be unique');
assert.equal((rendered.code.match(/class="table-wrapper"/g) ?? []).length, 3);
assert.equal((rendered.code.match(/<table>/g) ?? []).length, 3);
assert.ok(rendered.code.includes('<th>Host ID</th>'));
assert.ok(!rendered.code.includes('<script'));
const ordinary = await processor.render('| Name | Value |\n|---|---|\n| Example | One |', {
  fileURL: pathToFileURL(`${process.cwd()}/src/content/guides/ordinary.md`),
});
assert.ok(ordinary.code.includes('table-wrapper'));
assert.ok(!ordinary.code.includes('<tr id='), 'ordinary tables keep their existing markup');
fs.writeFileSync('editorial/logs/runs/2026-10-16-render.html', rendered.code);
console.log('PASS: 55 unique static row IDs, three wrapped HTML tables, semantic headers, ordinary tables unchanged. No site build.');
