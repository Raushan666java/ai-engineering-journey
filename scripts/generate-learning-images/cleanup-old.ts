import fs from 'fs';
import path from 'path';

const COURSES = path.resolve(__dirname, '..', '..', 'docs', 'courses');

function getAllMdFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) results.push(...getAllMdFiles(full));
    else if (e.name.endsWith('.md') && e.name !== 'index.md') results.push(full);
  }
  return results;
}

function cleanupFile(filePath: string): { removed: number; bytes: number } {
  let content = fs.readFileSync(filePath, 'utf-8');
  const before = content.length;

  // Remove old per-topic image injection blocks
  // Pattern: <a href="../../../assets/images/diagrams/..."><img ...></a> (possibly with newlines)
  const oldBlockRegex = /<a\s+href="[^"]*\/diagrams\/[^"]*"[^>]*>\s*\n?\s*<img[^>]*>\s*\n?\s*<\/a>/g;
  let match: RegExpExecArray | null;
  let removed = 0;
  while ((match = oldBlockRegex.exec(content)) !== null) {
    removed++;
  }
  content = content.replace(oldBlockRegex, '');

  // Also remove sequences of 3 such blocks in a row (which was the pattern)
  // The blocks were separated by newlines, so after removing individual blocks,
  // clean up extra blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  // Remove old <!-- Image Gallery --> from PREVIOUS version (v1 per-topic style)
  // Keep the new gallery
  const newGalleryMarker = '<!-- Image Gallery -->';
  const hasNewGallery = content.includes(newGalleryMarker);
  if (hasNewGallery) {
    // Remove any OLD gallery sections that might be duplicated
    const lines = content.split('\n');
    const cleaned: string[] = [];
    let inOldGallery = false;
    let galleryCount = 0;
    for (const line of lines) {
      if (line.includes('<!-- Image Gallery -->')) {
        galleryCount++;
        if (galleryCount > 1) { inOldGallery = true; continue; } // Skip duplicates
      }
      if (inOldGallery) {
        if (line.includes('<!-- End Image Gallery -->')) { inOldGallery = false; }
        continue;
      }
      cleaned.push(line);
    }
    content = cleaned.join('\n');
  }

  const bytes = before - content.length;
  if (bytes > 0 || removed > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { removed, bytes };
}

function main(): void {
  console.log('=== Cleanup Old Image Injections ===\n');

  const files = getAllMdFiles(COURSES);
  console.log(`Scanning ${files.length} markdown files...\n`);

  let totalRemoved = 0;
  let totalBytes = 0;
  let cleanedCount = 0;

  for (const file of files) {
    const { removed, bytes } = cleanupFile(file);
    if (removed > 0 || bytes > 0) {
      const rel = path.relative(COURSES, file);
      console.log(`  ${rel}: removed ${removed} old blocks, freed ${bytes} bytes`);
      totalRemoved += removed;
      totalBytes += bytes;
      cleanedCount++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Files cleaned:   ${cleanedCount}`);
  console.log(`Blocks removed: ${totalRemoved}`);
  console.log(`Bytes freed:    ${totalBytes}`);
  console.log('\nDone!');
}

main();
