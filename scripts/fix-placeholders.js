#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

// Fix placeholder text patterns
const PLACEHOLDER_PATTERNS = [
  { pattern: /- Concept 1: Definition and purpose\n/g, replacement: '' },
  { pattern: /- Concept 2: Core principles and theory\n/g, replacement: '' },
  { pattern: /- Concept 3: Relationship to other topics\n/g, replacement: '' },
  { pattern: /- Concept 4: Common applications\n/g, replacement: '' },
  { pattern: /Section \d+ covers essential concepts for AI engineering placement preparation\.\n/g, replacement: '' },
  { pattern: /### Key Concepts\n\n/g, replacement: '' }
];

// Files to fix
const filesToFix = [
  '03-data-structures-algorithms/11-heaps-and-tries.md',
  '03-data-structures-algorithms/12-graphs-bfs-dfs.md',
  '03-data-structures-algorithms/13-graphs-shortest-path.md',
  '03-data-structures-algorithms/14-graphs-topological-sort.md',
  '03-data-structures-algorithms/15-dynamic-programming-1d.md',
  '03-data-structures-algorithms/16-dynamic-programming-2d.md',
  '03-data-structures-algorithms/17-backtracking.md',
  '03-data-structures-algorithms/18-bit-manipulation-and-math.md'
];

let fixed = 0;

for (const file of filesToFix) {
  const filePath = path.join(BASE, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  for (const { pattern, replacement } of PLACEHOLDER_PATTERNS) {
    content = content.replace(pattern, replacement);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed placeholder: ' + file);
    fixed++;
  }
}

console.log('\nFixed ' + fixed + ' files with placeholder text');
