#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));
let fixedCount = 0;

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  for (const chapter of chapters) {
    const filePath = path.join(modulePath, chapter);
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix missing blank lines before ## headings
    content = content.replace(/([^\n])\n(## )/g, '$1\n\n$2');
    // Fix missing blank lines before ### headings
    content = content.replace(/([^\n])\n(### )/g, '$1\n\n$2');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log('Fixed: ' + module + '/' + chapter);
    }
  }
}

console.log('\nTotal files fixed: ' + fixedCount);
