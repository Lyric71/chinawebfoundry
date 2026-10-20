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

const HOST_ID = /^host-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Stable citation targets for the monthly index's Host ID column. The index
 * ships in four locales and its header is translated, so the table is
 * recognised by its IDs, never by the header label: every body row must open
 * with a host-* cell. The IDs are the same in every locale, so
 * `#host-recaptcha` cites the same row in all four.
 */
function indexRowIds(table) {
  const text = (node) => node.type === 'text'
    ? node.value
    : (node.children ?? []).map(text).join('');
  const body = table.children?.find((node) => node.tagName === 'tbody');
  const rows = (body?.children ?? []).filter((node) => node.tagName === 'tr');
  const ids = rows.map((row) => text(row.children?.find((node) => node.tagName === 'td') ?? {}).trim());
  if (!ids.length || !ids.every((id) => HOST_ID.test(id))) return;
  rows.forEach((row, i) => {
    row.properties = { ...row.properties, id: ids[i] };
  });
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
