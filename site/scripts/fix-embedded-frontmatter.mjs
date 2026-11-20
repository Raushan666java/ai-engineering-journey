/**
 * Thirty-two `learning-course` pages render raw YAML in the middle of the
 * article. A bad import created a new frontmatter block whose only key was
 * `description:`, took its value from the first line of the original file -
 * which was the YAML itself - and then dumped the original block into the body:
 *
 *     ---
 *     description: "slug: /learning-course/02_AI_Learning_Basics/Learning_Science
 *                   title: 'Learning Science - Day 1' sidebar_label: '...'"
 *     ---
 *
 *     <mojibake BOM>---
 *     slug: /learning-course/02_AI_Learning_Basics/Learning_Science
 *     title: "Learning Science - Day 1"
 *     sidebar_label: "Learning Science - Day 1"
 *     sidebar_position: 5
 *     ---
 *     # Learning Science - Day 1
 *
 * Consequences, all visible to a reader:
 *   - the page has no real title, so the tab and sidebar fall back to a guess;
 *   - its slug, sidebar position and label sit in the body where nothing reads
 *     them, so the URL comes from the file path instead;
 *   - search results and social cards show `slug: /learning-course/...` as the
 *     description;
 *   - the article itself starts with two horizontal rules and a paragraph of
 *     YAML.
 *
 * Per page this rebuilds one frontmatter block from the embedded one, derives a
 * real description from the page's own first paragraph, and drops the junk from
 * the body. The duplicate H1 goes too, because the title already renders as the
 * page heading.
 *
 *   node scripts/fix-embedded-frontmatter.mjs           # report
 *   node scripts/fix-embedded-frontmatter.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SUB = path.join('docs', 'courses');
const TREES = [
  {root: path.resolve('.'), label: 'site'},
  {root: path.resolve('..'), label: 'source'},
];

const KEY_ORDER = ['id', 'slug', 'title', 'sidebar_label', 'sidebar_position', 'description', 'draft'];
const KNOWN_KEY = /^(id|slug|title|sidebar_label|sidebar_position|description|tags|draft|sidebar_class_name|pagination_next|pagination_prev):/;
const FENCE = /^[^\w#>*\-\s]{0,8}---\s*$/;

/** Pull `key: value` pairs out of a YAML-ish block, keeping quoted values. */
function parseBlock(lines) {
  const out = {};
  for (const line of lines) {
    const m = /^([a-z_]+):\s*(.*)$/.exec(line.trim());
    if (!m) continue;
    out[m[1]] = m[2].trim();
  }
  return out;
}

/** Locate an embedded frontmatter block near the top of the body. */
function findEmbedded(body) {
  const lines = body.split('\n');
  const limit = Math.min(lines.length, 12);

  for (let i = 0; i < limit; i++) {
    if (!FENCE.test(lines[i].trim())) continue;
    const keys = [];
    for (let j = i + 1; j < Math.min(lines.length, i + 30); j++) {
      const line = lines[j].trim();
      if (/^---\s*$/.test(line)) {
        if (keys.length >= 2) {
          return {start: i, end: j, keys, inner: parseBlock(lines.slice(i + 1, j))};
        }
        break;
      }
      const m = KNOWN_KEY.exec(line);
      if (m) keys.push(m[1]);
    }
  }
  return null;
}

const stripMarkdown = (s) =>
  s
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

/** First real sentence of prose after the title, truncated at a word boundary. */
function deriveDescription(lines) {
  const looksLikeProse = (t) => {
    if (!t || t.length < 50) return false;
    if (/^[#>*|`□[\]()"]/.test(t)) return false;
    if (/^[-+*]\s/.test(t)) return false;
    if (/^\d+[.)]\s/.test(t)) return false;
    if (/^[A-Za-z_]+:\s/.test(t)) return false;
    if (/[\[\]|]/.test(t)) return false;
    if (/:\s*$/.test(t)) return false;
    if (/^(Remember|Note|Example|Purpose|Prompt)\b/i.test(t)) return false;
    return true;
  };

  // Prefer the paragraph under a goal-shaped heading: it is the page's own
  // statement of what it is for.
  const goalAt = lines.findIndex((l) => /^#{2,3}\s+.*(goal|objective|purpose|what you)/i.test(l));
  const order = goalAt >= 0
    ? [...lines.slice(goalAt + 1), ...lines.slice(0, goalAt)]
    : lines;

  // Join consecutive prose lines: a wrapped paragraph is one sentence, and half
  // a sentence makes a poor description.
  const paragraphs = [];
  let buffer = [];
  for (const line of order) {
    const t = line.trim();
    if (looksLikeProse(t)) {
      buffer.push(t);
    } else if (buffer.length) {
      paragraphs.push(buffer.join(' '));
      buffer = [];
    }
  }
  if (buffer.length) paragraphs.push(buffer.join(' '));

  const first = paragraphs.map(stripMarkdown).find((p) => p.length >= 50);
  if (!first) {
    // Nothing that reads like a description. Return null rather than a stub:
    // the writer then omits the key, and Docusaurus derives one from the page
    // content at build time, which is better than a sentence we invented.
    return null;
  }
  if (first.length <= 158) return first;
  const cut = first.slice(0, 158);
  return cut.slice(0, cut.lastIndexOf(' ')) + '.';
}

let fixed = 0;

for (const tree of TREES) {
  const dir = path.join(tree.root, SUB, 'learning-course');
  if (!fs.existsSync(dir)) continue;

  const walk = (d, out = []) => {
    for (const entry of fs.readdirSync(d, {withFileTypes: true})) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full, out);
      else if (/\.mdx?$/.test(entry.name)) out.push(full);
    }
    return out;
  };

  for (const file of walk(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!fm) continue;
    const outer = parseBlock(fm[1].split('\n'));
    const body = text.slice(fm[0].length);

    const found = findEmbedded(body);
    if (!found) continue;

    const lines = body.split('\n');
    const inner = found.inner;

    // Body without the junk fence-through-fence block.
    const cleaned = [...lines.slice(0, found.start), ...lines.slice(found.end + 1)];
    // Drop the now-duplicate H1: the title renders as the page heading.
    const bodyText = cleaned.join('\n').replace(/^\n+/, '');
    const titleText = (inner.title || '').replace(/^[\"'](.*)[\"']$/, '$1');
    // Drop the leading H1 if there is one: the frontmatter title already renders
    // as the page heading, so keeping both shows the title twice. Match on shape
    // rather than on exact text, because the title and the heading often differ
    // by an emoji or a dash.
    const withoutH1 = bodyText.replace(/^#\s+[^\n]*\r?\n+/, '');

    // The outer description was scraped from the top of the original file, so
    // when the file began with YAML it contains the YAML. Compare unquoted.
    const outerDescription = (outer.description || '').replace(/^["'](.*)["']$/, '$1');
    const description = /^(slug|title|sidebar)\s*:/.test(outerDescription)
      ? deriveDescription(withoutH1.split('\n'))
      : outerDescription || deriveDescription(withoutH1.split('\n'));

    const merged = {
      id: outer.id || path.basename(file).replace(/\.mdx?$/, ''),
      slug: inner.slug || outer.slug,
      title: inner.title || outer.title,
      sidebar_label: inner.sidebar_label || outer.sidebar_label,
      sidebar_position: inner.sidebar_position || outer.sidebar_position,
      description,
    };

    // Quote every string value. An unquoted `description: - Multi-format ...`
    // is a YAML list, not a string, and gray-matter rejects it with "bad
    // indentation of a mapping entry" - which fails the whole build.
    const front = KEY_ORDER.filter(
      (k) => merged[k] !== undefined && merged[k] !== null && merged[k] !== '',
    )
      .map((k) =>
        k === 'sidebar_position' || k === 'draft'
          ? `${k}: ${merged[k]}`
          : `${k}: ${JSON.stringify(String(merged[k]).replace(/^["'](.*)["']$/, '$1'))}`,
      )
      .join('\n');

    fixed++;
    console.log(`${tree.label.padEnd(6)} ${path.relative(path.join(tree.root, SUB), file).split(path.sep).join('/')}`);
    console.log(`    title: ${merged.title}`);
    console.log(`    slug : ${merged.slug}`);
    console.log(`    desc : ${JSON.stringify((merged.description || '').slice(0, 80))}`);

    if (WRITE) fs.writeFileSync(file, `---\n${front}\n---\n\n${withoutH1.trimEnd()}\n`, 'utf8');
  }
}

console.log(`\npages fixed: ${fixed}   mode: ${WRITE ? 'WRITE' : 'report'}`);
