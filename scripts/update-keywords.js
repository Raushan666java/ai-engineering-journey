const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
let updated = 0;

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Update Fine-Tuning Notes to include LoRA and Adapter keywords
  if (content.includes('## Fine-Tuning Notes') && !content.includes('LoRA') && !content.includes('Adapter')) {
    content = content.replace(
      /## Fine-Tuning Notes\n\n(.+)\n\n- (.+)\n\n- (.+)\n\n- (.+)/,
      `## Fine-Tuning Notes\n\n$1\n\n- Fine-tuning techniques like LoRA and Adapters for domain adaptation\n\n- $2\n\n- $3\n\n- $4`
    );
  }

  // Update Prompt Engineering Notes to include Instruction and Few-shot keywords
  if (content.includes('## Prompt Engineering Notes') && !content.includes('Instruction') && !content.includes('Few-shot')) {
    content = content.replace(
      /## Prompt Engineering Notes\n\n- \*\*Be Specific\*\*: (.+)\n\n- \*\*Provide Examples\*\*: (.+)\n\n- \*\*Use Structured Output\*\*: (.+)\n\n- \*\*Chain of Thought\*\*: (.+)\n\n- \*\*Temperature Control\*\*: (.+)/,
      `## Prompt Engineering Notes\n\n- **Be Specific**: Clear, detailed prompts with instructions get better results\n\n- **Provide Examples**: Few-shot learning improves consistency and accuracy\n\n- **Use Structured Output**: $3\n\n- **Chain of Thought**: $4\n\n- **Temperature Control**: $5`
    );
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
    console.log(`✅ ${path.relative(DIR, filePath)}`);
  }
}

// Process all files
const modules = fs.readdirSync(DIR).filter(d => fs.statSync(path.join(DIR, d)).isDirectory());
modules.forEach(mod => {
  const modDir = path.join(DIR, mod);
  const files = fs.readdirSync(modDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => updateFile(path.join(modDir, file)));
});

console.log(`\n📊 Updated ${updated} files`);
