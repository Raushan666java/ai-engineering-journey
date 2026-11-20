/**
 * Some pages render raw YAML in the middle of the article.
 *
 * `docs/courses/learning-course/START_HERE.md` begins:
 *
 *     ---
 *     description: "Traditional Learning: Human-only methods, ..."
 *     ---
 *
 *     <mojibake BOM>---
 *     slug: /learning-course/START_HERE
 *     title: "AI-Enhanced Learning Course - START HERE"
 *     sidebar_position: 9
 *     ---
 *     # AI-Enhanced Learning Course - START HERE
 *
 * A bad import built a new frontmatter block from the original, then dumped the
 * original into the body. A reader sees the first block consumed as metadata,
 * then a literal "---", the key/value lines as a paragraph, another "---", and
 * the real title underneath. The page also loses its real title and its slug
 * lives in the body where nothing reads it - which is why the same files were
 * counted as "no slug", "no title" and "no `##` sections".
 *
 * Detection is shape-based, not by course name: within the first twelve lines of
 * the body, a line that is `---` (possibly preceded by junk characters), followed
 * by at least two known YAML keys, followed by another `---`.
 *
 *   node scripts/embedded-frontmatter-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const KNOWN_KEY = /^(id|slug|title|sidebar_label|sidebar_position|description|tags|draft|sidebar_class_name|pagination_next|pagination_prev):/;
const FENCE = /^[^\w#>*\-\s]{0,8}---\s*$/;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** Returns the embedded block's keys, or null. */
function findEmbedded(body) {
  const lines = body.split('\n');
  const limit = Math.min(lines.length, 12);

  for (let i = 0; i < limit; i++) {
    if (!FENCE.test(lines[i].trim())) continue;
    // Collect until the closing fence.
    const keys = [];
    for (let j = i + 1; j < Math.min(lines.length, i + 30); j++) {
      const line = lines[j].trim();
      if (/^---\s*$/.test(line)) {
        if (keys.length >= 2) return {start: i, keys};
        break;
      }
      const m = KNOWN_KEY.exec(line);
      if (m) keys.push(m[1]);
    }
  }
  return null;
}

const hits = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  const front = fm ? fm[1] : '';
  const body = fm ? text.slice(fm[0].length) : text;

  const found = findEmbedded(body);
  if (!found) continue;

  hits.push({
    rel: file.split(path.sep).join('/'),
    outerKeys: [...front.matchAll(/^([a-z_]+):/gm)].map((m) => m[1]),
    innerKeys: found.keys,
    description: (/^description:\s*(.+)$/m.exec(front) || [])[1] || '',
  });
}

const byCourse = new Map();
for (const h of hits) {
  const course = h.rel.replace(`${ROOT}/`, '').split('/')[0];
  byCourse.set(course, (byCourse.get(course) || 0) + 1);
}

console.log(`pages with a frontmatter block embedded in the article: ${hits.length}`);
console.log(`courses affected: ${byCourse.size}`);
for (const [course, n] of [...byCourse.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${course.padEnd(34)} ${n}`);
}

console.log('');
for (const h of hits.slice(0, 40)) {
  console.log(`${h.rel}`);
  console.log(`   outer: [${h.outerKeys.join(', ')}]  inner: [${h.innerKeys.join(', ')}]`);
  console.log(`   description: ${JSON.stringify(h.description.slice(0, 80))}`);
}
if (hits.length > 40) console.log(`... ${hits.length - 40} more`);
