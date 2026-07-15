const { readFileSync } = require('fs');
const { join, resolve } = require('path');
const { readdirSync, statSync } = require('fs');

function findMdFiles(dir, files = []) {
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findMdFiles(fullPath, files);
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function checkPaths() {
  const files = findMdFiles('docs/courses');
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
        require('fs').accessSync(fullPath);
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