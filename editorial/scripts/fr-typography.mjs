/**
 * French typography normaliser for localized guide files.
 *
 * Inserts the non-breaking spaces French typesetting requires:
 *   - before : ; ? !
 *   - before %
 *   - inside guillemets
 *
 * URLs keep their plain colon, because the rule only fires when the
 * punctuation is followed by whitespace or the end of the line. Frontmatter
 * is skipped entirely: a YAML `key: value` colon must stay a plain colon or
 * the parser breaks.
 *
 * Usage: node editorial/scripts/fr-typography.mjs <file> [<file> ...]
 */
import { readFileSync, writeFileSync } from 'node:fs';

const NB = ' ';
const OPEN = '«';
const CLOSE = '»';
const SPACES = '[  ]?';

function normalise(text) {
  const lines = text.split('\n');
  let delimiters = 0;

  const out = lines.map((line) => {
    if (line.trim() === '---' && delimiters < 2) {
      delimiters += 1;
      return line;
    }
    // Inside the YAML frontmatter, change nothing.
    if (delimiters === 1) return line;
    // A one-line HTML comment is a marker for tooling, never read by anyone.
    if (/^\s*<!--.*-->\s*$/.test(line)) return line;

    let l = line;
    l = l.replace(new RegExp(SPACES + '([:;?!])(?=\\s|$)', 'g'), (m, p) => NB + p);
    l = l.replace(new RegExp('(\\d)' + SPACES + '%', 'g'), (m, d) => d + NB + '%');
    l = l.replace(new RegExp(OPEN + SPACES, 'g'), OPEN + NB);
    l = l.replace(new RegExp(SPACES + CLOSE, 'g'), NB + CLOSE);
    return l;
  });

  return out.join('\n').replace(/(https?) :/g, (m, s) => s + ':');
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('usage: node editorial/scripts/fr-typography.mjs <file> [...]');
  process.exit(1);
}

for (const file of files) {
  const after = normalise(readFileSync(file, 'utf8'));
  writeFileSync(file, after, 'utf8');
  const count = (re) => (after.match(re) || []).length;
  console.log(
    [
      file,
      `nbsp=${count(/ /g)}`,
      `emdash=${count(/—/g)}`,
      `broken_urls=${count(/https? /g)}`,
      `control_chars=${count(new RegExp("[\u0000-\b\u000b\f\u000e-\u001f]", "g"))}`,
    ].join(' ')
  );
}
