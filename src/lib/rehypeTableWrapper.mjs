/**
 * Wraps every markdown table in the China Web Guide and case study
 * collections in <div class="table-wrapper">, at build time.
 *
 * GuideLayout.astro styles .table-wrapper as the horizontal scroll container
 * and gives tables a 400px minimum width on small screens. The wrapper used to
 * be inserted by a client-side script, so with JavaScript off (and for any
 * crawler that does not run it) a wide table overflowed the page body at
 * 390px. Emitting it here puts it in the HTML source.
 *
 * The case study pages (work/[slug] and its three locale copies) used to wrap
 * their tables in the browser too, with the same no-JavaScript overflow. That
 * script is gone (2 October 2026) and their tables are wrapped here instead;
 * .case-content styles .table-wrapper as the scroll container.
 */

const CONTENT_PATH = /\/src\/content\/(?:guides|casestudies)(?:-(?:fr|es|de))?\//;

/** Stable citation targets for the monthly index's explicit Host ID column. */
function indexRowIds(table) {
  const text = (node) => node.type === 'text'
    ? node.value
    : (node.children ?? []).map(text).join('');
  const head = table.children?.find((node) => node.tagName === 'thead');
  const headerRow = head?.children?.find((node) => node.tagName === 'tr');
  const headerCell = headerRow?.children?.find((node) => node.tagName === 'th');
  if (text(headerCell ?? {}).trim() !== 'Host ID') return;
  const body = table.children?.find((node) => node.tagName === 'tbody');
  for (const row of body?.children ?? []) {
    if (row.tagName !== 'tr') continue;
    const cell = row.children?.find((node) => node.tagName === 'td');
    const id = text(cell ?? {}).trim();
    if (/^host-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      row.properties = { ...row.properties, id };
    }
  }
}

/** @param {any} node */
function wrapTables(node) {
  if (!Array.isArray(node.children)) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'table') {
      indexRowIds(child);
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrapper'] },
        children: [child],
      };
    }
    wrapTables(child);
    return child;
  });
}

export default function rehypeTableWrapper() {
  /**
   * @param {any} tree
   * @param {{ path?: string, history?: string[] }} file
   */
  return (tree, file) => {
    const path = String(file?.path ?? file?.history?.[0] ?? '').replace(/\\/g, '/');
    if (!CONTENT_PATH.test(path)) return;
    wrapTables(tree);
  };
}
