#!/usr/bin/env node
/**
 * Group the HTML-minifier diagnostics in a build log by the route that produced
 * them. The minifier prints one error per page it refuses to minify, so this
 * tells us whether one bad chapter is losing its minification or the whole
 * build is.
 *
 *   node scripts/minifier-report.mjs build5.log
 */

import fs from 'node:fs';

const file = process.argv[2] || 'build5.log';
const text = fs.readFileSync(file, 'utf8');
const lines = text.split(/\r?\n/);

const routes = new Map();
let current = '(no route)';

for (const line of lines) {
  const route = /^- "(\/ai-engineering-journey[^"]*)"/.exec(line.trim());
  if (route) {
    current = route[1];
    continue;
  }
  if (/HTML minifier diagnostic - error/.test(line)) {
    routes.set(current, (routes.get(current) || 0) + 1);
  }
}

const total = [...routes.values()].reduce((a, b) => a + b, 0);
console.log(`diagnostic lines : ${total}`);
console.log(`routes affected  : ${routes.size}`);
for (const [route, n] of [...routes.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  ${String(n).padStart(3)}  ${route}`);
}

const done = /Generated static files|\[SUCCESS\]/.test(text);
const err = /Error:|\[ERROR\]/.test(text);
console.log(`\nlog says success : ${done}`);
console.log(`log says error   : ${err}`);
console.log(`last line        : ${lines.filter(Boolean).pop()?.slice(0, 120)}`);
