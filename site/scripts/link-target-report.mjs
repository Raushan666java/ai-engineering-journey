/**
 * The build warns "Docusaurus found broken links", listing targets such as
 * /machine-learning/ and /python-programming. With `onBrokenLinks: 'throw'`
 * that same list becomes a failed build, so it has to be fixed, not muted.
 *
 * This answers the only question that matters first: does the route exist at
 * all? If build/machine-learning/index.html is missing, the link is wrong. If
 * it exists, the link text is wrong (missing baseUrl, wrong trailing slash, a
 * slug the page overrides).
 *
 *   node scripts/link-target-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD = 'build';

const targets = [
  'machine-learning',
  'artificial-intelligence',
  'data-structures',
  'algorithms',
  'system-design',
  'database-management-systems',
  'computer-networks',
  'python-programming',
  'modern-ai-engineering',
  'applied-ai',
  'big-data',
  'data-analysis-interpretation',
  'operating-systems',
  'computer-architecture',
  'compiler-design',
  'theory-of-computation',
  'discrete-mathematics',
  'digital-logic',
  'java',
  'c-programming',
  'oop-cpp',
  'software-engineering',
  'cyber-security',
  'cloud-computing',
  'devops',
  'web-development',
  'blockchain',
  'laravel',
  'job-preparation',
  'interview-preparation',
];

const has = (rel) => fs.existsSync(path.join(BUILD, rel));

console.log('target                                  page?   examples');
for (const t of targets) {
  const page = has(path.join(t, 'index.html'));
  let detail = '';
  const dir = path.join(BUILD, t);
  if (page && fs.existsSync(dir)) {
    const kids = fs.readdirSync(dir, {withFileTypes: true}).filter((d) => d.isDirectory());
    detail = kids.slice(0, 3).map((d) => d.name).join(', ') + (kids.length > 3 ? `, +${kids.length - 3}` : '');
  }
  console.log(`  ${t.padEnd(34)} ${page ? 'yes ' : 'NO  '}   ${detail}`);
}

// Which directories do exist at the top level with an index.html?
const top = fs
  .readdirSync(BUILD, {withFileTypes: true})
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(BUILD, d.name, 'index.html')))
  .map((d) => d.name)
  .sort();
console.log(`\n${top.length} top-level directories have an index.html:`);
console.log(top.join(', '));
