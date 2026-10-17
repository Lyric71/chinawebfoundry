// Renders the index in all four locales through the guide markdown pipeline's
// table plugin (no site build) and checks the static row anchors.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import tableWrapper from '../../../../src/lib/rehypeTableWrapper.mjs';

const slug = 'china-dependency-index-2026-10';
const processor = await createMarkdownProcessor({ rehypePlugins: [tableWrapper] });
const render = (dir, file) => {
  const path = `src/content/${dir}/${file}.md`;
  const body = fs.readFileSync(path, 'utf8').replace(/^---[\s\S]*?---\s*/, '');
  return processor.render(body, { fileURL: pathToFileURL(`${process.cwd()}/${path}`) });
};
let reference;
for (const dir of ['guides', 'guides-fr', 'guides-es', 'guides-de']) {
  const { code } = await render(dir, slug);
  const ids = [...code.matchAll(/<tr id="(host-[^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, 55, `${dir}: all index rows need static citation anchors`);
  assert.equal(new Set(ids).size, 55, `${dir}: anchors must be unique`);
  reference ??= ids;
  assert.deepEqual(ids, reference, `${dir}: same anchors, same order as English`);
  assert.equal((code.match(/class="table-wrapper"/g) ?? []).length, 3, `${dir}: three wrapped tables`);
  assert.ok(!code.includes('<script'), `${dir}: no script`);
  const gfw = await render(dir, 'great-firewall-what-it-blocks');
  assert.ok(!gfw.code.includes('<tr id='), `${dir}: other guide tables keep their markup`);
  console.log(`${dir}: 55 unique anchors, 3 wrapped tables`);
}
const ordinary = await processor.render('| Name | Value |\n|---|---|\n| Example | One |', {
  fileURL: pathToFileURL(`${process.cwd()}/src/content/guides-fr/ordinary.md`),
});
assert.ok(ordinary.code.includes('table-wrapper') && !ordinary.code.includes('<tr id='));
console.log('PASS: identical host-* anchors in en, fr, es and de; ordinary tables unchanged. No site build.');
