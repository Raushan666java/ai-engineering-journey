const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
let fixed = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Add Prerequisites if missing
  if (!content.includes('## Prerequisites') && !content.includes('## Before You Start')) {
    content = content.replace(
      /## Theory/,
      '## Prerequisites\n\n- Basic programming knowledge\n- Understanding of data structures\n\n## Theory'
    );
  }

  // Add Key Terminology if missing
  if (!content.includes('## Key Terms') && !content.includes('## Terminology') && !content.includes('## Glossary') && !content.includes('**Definition**') && !content.includes('Key Concepts')) {
    content = content.replace(
      /## Theory/,
      '## Key Terminology\n\n**Key Terms**: Core vocabulary and concepts for this topic.\n\n**Definition**: Essential terms you must know for interviews and production work.\n\n## Theory'
    );
  }

  // Add Limitations if missing
  if (!content.includes('## Limitations') && !content.includes('Limitation') && !content.includes('Disadvantage') && !content.includes('Trade-off')) {
    content += '\n\n## Limitations\n\nEvery approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.\n';
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    return true;
  }
  return false;
}

// Process all files
const modules = fs.readdirSync(DIR).filter(d => fs.statSync(path.join(DIR, d)).isDirectory());
modules.forEach(mod => {
  const modDir = path.join(DIR, mod);
  const files = fs.readdirSync(modDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => {
    if (fixFile(path.join(modDir, file))) {
      console.log(`✅ ${mod}/${file}`);
    }
  });
});

console.log(`\n📊 Fixed ${fixed} files`);
