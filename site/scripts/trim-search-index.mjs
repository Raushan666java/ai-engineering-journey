#!/usr/bin/env node
/**
 * `search-index.json` was 284 MB. That is not a typo, and it is not free: the
 * file is fetched by the browser the first time someone presses Ctrl+K, so on
 * the live site search downloaded a quarter of a gigabyte or timed out. It was
 * also why every `git push` of the deploy branch died with HTTP 408.
 *
 * The plugin (`@easyops-cn/docusaurus-search-local`) writes a positional array
 * of lunr indexes, one per document type:
 *
 *     0 Title      1419 docs      0.5 MB
 *     1 Heading   60872 docs     18.6 MB
 *     2 Description 1419 docs     1.4 MB
 *     3 Keywords      0 docs      0.0 MB
 *     4 Content   55345 docs    261.9 MB   <-- the problem
 *
 * Type "Content" is every word of every chapter, and this corpus is 9.5 million
 * words. Dropping it leaves title + heading + description search: 20.5 MB, and
 * for a course site that is the right trade. Every chapter here has dozens of
 * descriptive section headings, so heading search lands on the right section
 * directly, with a link to the anchor.
 *
 * The client reads the array by position (`json.map(({documents,index}, type)
 * => ...)`) and only depends on index 0 being the Title set for page lookups,
 * so truncating to the first three entries keeps types aligned.
 *
 *   node scripts/trim-search-index.mjs             # rewrite build/search-index.json
 *   node scripts/trim-search-index.mjs --dry-run   # measure only
 */

import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry-run');
const FILE = path.resolve('build', 'search-index.json');
const KEEP_TYPES = 3; // Title, Heading, Description

const TYPES = ['Title', 'Heading', 'Description', 'Keywords', 'Content'];

if (!fs.existsSync(FILE)) {
  console.error(`no index at ${FILE} - run the docusaurus build first`);
  process.exit(1);
}

const before = fs.statSync(FILE).size;
const groups = JSON.parse(fs.readFileSync(FILE, 'utf8'));
if (!Array.isArray(groups)) {
  console.error('unexpected index shape: expected a positional array of groups');
  process.exit(1);
}

const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;

console.log('index group sizes before:');
let keepBytes = 0;
let dropBytes = 0;
for (const [type, group] of groups.entries()) {
  const bytes = JSON.stringify(group).length;
  const kept = type < KEEP_TYPES;
  if (kept) keepBytes += bytes;
  else dropBytes += bytes;
  console.log(
    `  ${String(type)} ${(TYPES[type] ?? '?').padEnd(12)} ${String(group.documents.length).padStart(6)} docs  ${mb(bytes).padStart(8)}  ${kept ? 'keep' : 'drop'}`,
  );
}

// A cheap invariant: group 0 must be the page-title set, because the search
// worker resolves every result's parent page through wrappedIndexes[0].
const titles = groups[0]?.documents ?? [];
const looksLikeTitles = titles.length > 0 && titles.every((d) => 't' in d && 'u' in d);
if (!looksLikeTitles) {
  console.error('group 0 does not look like page titles - refusing to trim');
  process.exit(1);
}

const kept = groups.slice(0, KEEP_TYPES);
const out = JSON.stringify(kept);

console.log(`\nfile before : ${mb(before)}`);
console.log(`file after  : ${mb(out.length)}  (${Math.round((1 - out.length / before) * 100)}% smaller)`);
console.log(`dropped     : ${mb(dropBytes)}  across ${groups.length - KEEP_TYPES} group(s)`);

if (DRY) {
  console.log('\ndry run - nothing written');
} else {
  fs.writeFileSync(FILE, out, 'utf8');
  console.log(`\nwrote ${FILE}`);
}
