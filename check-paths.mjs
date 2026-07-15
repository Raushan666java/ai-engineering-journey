const { glob } = await import('glob');
const { readFileSync } = await import('fs');
const { join, resolve } = await import('path');
const { access } = await import('fs/promises');

async function checkPaths() {
  const files = await glob('docs/courses/**/*.md');
  const missing = [];
  const baseDir = resolve('docs/assets/images/lessons');
  
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const regex = /assets\/images\/lessons\/([^\/]+\/[^\/]+)\/[^"'>\])]+/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const relPath = match[1];
      const fullPath = join(baseDir, relPath);
      try {
        await access(fullPath);
      } catch {
        missing.push(`${file} -> ${relPath}`);
      }
    }
  }
  
  if (missing.length > 0) {
    console.log(`Missing: ${missing.length}`);
    missing.slice(0, 50).forEach(m => console.log(m));
  } else {
    console.log('All image paths exist');
  }
}

checkPaths().catch(console.error);