import * as fs from 'fs';

function cleanMd(s: string): string {
  return s.replace(/\*\*/g, '').replace(/\|/g, '').replace(/#{1,6}\s*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();
}

function isTableRow(line: string): boolean {
  return /^\s*\|/.test(line) || /\|\s*$/.test(line) || /^\|[\s:-]+\|/.test(line);
}

// Test the Chapter at a Glance extraction
const md = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-13-learning-analytics.md', 'utf-8');

const glanceMatch = md.match(/### Chapter at a Glance\s*\n([\s\S]*?)(?=\n#{1,3}\s|\n---|$)/i);
if (glanceMatch) {
  console.log('=== Glance section ===');
  console.log(glanceMatch[1].slice(0, 500));
  
  const tableRegex = /\|([^|]+)\|([^|]+)\|/g;
  let t: RegExpExecArray | null;
  let count = 0;
  while ((t = tableRegex.exec(glanceMatch[1])) !== null) {
    const term = t[1].trim();
    const def = t[2].trim();
    count++;
    const reason = [];
    if (term.length <= 2) reason.push('term too short');
    if (term.length >= 60) reason.push('term too long');
    if (def.length <= 5) reason.push('def too short');
    if (def.length >= 300) reason.push('def too long');
    if (term.includes('-')) reason.push('has dash');
    if (/^(topic|key insight|practical takeaway)/i.test(term)) reason.push('header');
    if (isTableRow(def)) reason.push('def is table row');
    console.log(`Match ${count}: term="${term}" def="${def.slice(0, 80)}" ${reason.length ? 'SKIPPED: ' + reason.join(', ') : 'PASS'}`);
  }
  console.log(`Total matches: ${count}`);
} else {
  console.log('No match found');
}

// Also test extractDefinitions
console.log('\n=== extractDefinitions (simplified) ===');
const lines = md.split('\n');
for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  const m = trimmed.match(/^\*\*([^*]+)\*\*\s*[:\u2013\u2014]\s*(.{10,200})/);
  if (m) {
    const term = m[1].trim();
    const def = m[2].replace(/\*\*/g, '').replace(/\|/g, '').trim();
    console.log(`Line ${i+1}: term="${term}" def="${def.slice(0, 80)}"`);
  }
}
