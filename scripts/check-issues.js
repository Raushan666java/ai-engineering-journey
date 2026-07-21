#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

const issueTypes = {};
let totalIssues = 0;

const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  for (const chapter of chapters) {
    const content = fs.readFileSync(path.join(modulePath, chapter), 'utf8');
    const lines = content.split('\n');
    
    // Check headings
    let lastLevel = 0;
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^(#{1,6})\s/);
      if (match) {
        const level = match[1].length;
        if (lastLevel > 0 && level > lastLevel + 1) {
          const key = 'heading_skip_H' + lastLevel + '_to_H' + level;
          issueTypes[key] = (issueTypes[key] || 0) + 1;
          totalIssues++;
        }
        lastLevel = level;
      }
    }
    
    // Check duplicate H1
    const h1Count = (content.match(/^# .+$/gm) || []).length;
    if (h1Count > 1) {
      issueTypes['duplicate_H1'] = (issueTypes['duplicate_H1'] || 0) + 1;
      totalIssues++;
    }
    
    // Check trailing whitespace
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] !== lines[i].trimEnd() && lines[i].trim() !== '') {
        issueTypes['trailing_whitespace'] = (issueTypes['trailing_whitespace'] || 0) + 1;
        totalIssues++;
      }
    }
    
    // Check missing blank lines before headings
    for (let i = 1; i < lines.length; i++) {
      const isHeading = lines[i].match(/^#{1,3}\s/);
      const prevNotEmpty = lines[i-1].trim() !== '';
      const prevNotCodeBlock = !lines[i-1].match(/^```/);
      if (isHeading && prevNotEmpty && prevNotCodeBlock) {
        issueTypes['missing_blank_line'] = (issueTypes['missing_blank_line'] || 0) + 1;
        totalIssues++;
      }
    }
  }
}

console.log('Remaining issues by type:');
console.log('-'.repeat(40));
for (const [type, count] of Object.entries(issueTypes).sort((a,b) => b[1] - a[1])) {
  console.log(type + ': ' + count);
}
console.log('-'.repeat(40));
console.log('Total: ' + totalIssues);
