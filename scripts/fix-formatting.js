const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
let fixed = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix Tips & Tricks formatting
  content = content.replace(
    /## Tips & Tricks\n\n1\. \*\*Start with the basics\*\*:.*?\n2\. \*\*Practice actively\*\*:.*?\n3\. \*\*Connect to prior knowledge\*\*:.*?\n4\. \*\*Focus on understanding, not memorizing\*\*:.*?\n5\. \*\*Review regularly\*\*:.*?\n/s,
    `## Tips & Tricks\n\n**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.\n\n**Tip**: Practice actively — don't just read, implement the code examples yourself.\n\n**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.\n\n**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.\n\n**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.\n`
  );

  // Fix Important Notes formatting
  content = content.replace(
    /## Important Notes\n\n- \*\*Key Insight\*\*:.*?\n- \*\*Common Pitfall\*\*:.*?\n- \*\*Interview Focus\*\*:.*?\n- \*\*Production Reality\*\*:.*?\n/s,
    `## Important Notes\n\n> **Note**: Understanding the fundamentals is more important than memorizing syntax.\n\n> **Note**: Don't skip the exercises — they reinforce critical concepts.\n\n> **Note**: This topic frequently appears in technical interviews at top companies.\n\n> **Note**: In real systems, these concepts are used daily by AI engineers.\n`
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    console.log(`✅ ${path.relative(DIR, filePath)}`);
  }
}

// Process all modules
const modules = fs.readdirSync(DIR).filter(d => fs.statSync(path.join(DIR, d)).isDirectory());
modules.forEach(mod => {
  const modDir = path.join(DIR, mod);
  const files = fs.readdirSync(modDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => fixFile(path.join(modDir, file)));
});

console.log(`\n📊 Fixed ${fixed} files`);
