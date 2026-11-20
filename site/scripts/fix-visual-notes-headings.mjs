/**
 * The generated `visual-notes.md` pages use `#` for every section:
 *
 *     # Visual Notes — One Request, the Full Ride
 *     # What the diagram shows
 *     # Why this matters for placement
 *     # Quick revision
 *     # Related chapters
 *
 * Five H1s on one page. The first is the page title (Docusaurus renders it
 * from frontmatter), so the rest are sections and belong at `##`. It also means
 * the right-hand table of contents was flat: five entries at the same level
 * with no indication that one of them is the page itself.
 *
 *   node scripts/fix-visual-notes-headings.mjs           # report
 *   node scripts/fix-visual-notes-headings.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const TREES = [
  {root: path.resolve('..'), label: 'source'},
  {root: path.resolve('.'), label: 'site'},
];

function findVisualNotes(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      findVisualNotes(full, out);
    } else if (entry.name === 'visual-notes.md') {
      out.push(full);
    }
  }
  return out;
}

let changed = 0;

for (const tree of TREES) {
  const dir = path.join(tree.root, 'docs', 'courses');
  if (!fs.existsSync(dir)) continue;

  for (const file of findVisualNotes(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!fm) continue;

    const body = text.slice(fm[0].length);
    let seen = 0;
    let fence = null;
    let demoted = 0;

    const lines = body.split('\n').map((line) => {
      const fenceMatch = /^\s*(```|~~~)/.exec(line);
      if (fenceMatch) {
        if (!fence) fence = fenceMatch[1];
        else if (fenceMatch[1] === fence) fence = null;
        return line;
      }
      if (fence) return line;

      const heading = /^#(\s+.*)$/.exec(line);
      if (!heading) return line;
      seen++;
      if (seen === 1) return line; // the title
      demoted++;
      return `#${line}`;
    });

    if (demoted === 0) continue;

    changed++;
    const rel = path.relative(dir, file).split(path.sep).join('/');
    console.log(`${tree.label.padEnd(6)} ${String(demoted).padStart(2)} h1 -> h2   ${rel}`);
    if (WRITE) fs.writeFileSync(file, `${fm[0]}${lines.join('\n')}`, 'utf8');
  }
}

console.log(`\nfiles changed: ${changed}   mode: ${WRITE ? 'WRITE' : 'report'}`);
