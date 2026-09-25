/**
 * Wraps every markdown table in the China Web Guide collections in
 * <div class="table-wrapper">, at build time.
 *
 * GuideLayout.astro styles .table-wrapper as the horizontal scroll container
 * and gives tables a 400px minimum width on small screens. The wrapper used to
 * be inserted by a client-side script, so with JavaScript off (and for any
 * crawler that does not run it) a wide table overflowed the page body at
 * 390px. Emitting it here puts it in the HTML source.
 *
 * Scoped to src/content/guides*: the case study pages still wrap their tables
 * in the browser, and wrapping them here too would nest two wrappers.
 */

const GUIDE_PATH = /\/src\/content\/guides(?:-(?:fr|es|de))?\//;

/** @param {any} node */
function wrapTables(node) {
  if (!Array.isArray(node.children)) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'table') {
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
    if (!GUIDE_PATH.test(path)) return;
    wrapTables(tree);
  };
}
