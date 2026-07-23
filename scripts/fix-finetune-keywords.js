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
      /## Fine-Tuning Notes\n\nWhen applying .+ to production, consider:\n- Adapting general principles to your specific use cases\n- Performance optimization for target hardware\n- Cost considerations for deployment/,
      `## Fine-Tuning Notes\n\nWhen applying this topic to production, consider:\n- Fine-tuning with LoRA or Adapters for domain adaptation\n- Adapting general principles to your specific use cases\n- Performance optimization for target hardware\n- Cost considerations for deployment`
    );
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
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
    if (updateFile(path.join(modDir, file))) {
      console.log(`✅ ${mod}/${file}`);
    }
  });
});

console.log(`\n📊 Updated ${updated} files`);
