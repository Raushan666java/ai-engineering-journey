import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = fileURLToPath(new URL('.', import.meta.url));
const docsRoot = join(scriptDirectory, '..', '..', 'docs', 'courses');
const keep = ['handwritten-notes', 'sticky-notes', 'visual-explanation'] as const;

async function markdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.isFile() && entry.name.endsWith('.md') ? [path] : [];
  }));
  return nested.flat();
}

function compactGallery(block: string): string | undefined {
  const base = block.match(/src="([^"]+)\/(?:handwritten-notes|sticky-notes|visual-explanation)\.svg"/)?.[1];
  if (!base) return undefined;

  const cards = keep.map(type => {
    const label = type === 'handwritten-notes'
      ? 'Handwritten notes'
      : type === 'sticky-notes'
        ? 'Sticky-note revision'
        : 'Visual concept guide';
    const description = type === 'handwritten-notes'
      ? 'Condensed notes for deliberate review.'
      : type === 'sticky-notes'
        ? 'Fast recall prompts for revision.'
        : 'A connected explanation of the key ideas.';
    const source = `${base}/${type}.svg`;
    return `  <a class="lesson-visual-card" href="${source}" target="_blank" rel="noopener">
    <img src="${source}" alt="${label}" loading="lazy">
    <span><strong>${label}</strong>${description}</span>
  </a>`;
  }).join('\n');

  return `<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
${cards}
</section>
<!-- End Image Gallery -->`;
}

async function main(): Promise<void> {
  const files = await markdownFiles(docsRoot);
  let updated = 0;
  let skipped = 0;
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const output = source.replace(/<!-- Image Gallery -->[\s\S]*?<!-- End Image Gallery -->/g, block => {
      const gallery = compactGallery(block);
      if (!gallery) {
        skipped += 1;
        return block;
      }
      updated += 1;
      return gallery;
    });
    if (output !== source) await writeFile(file, output, 'utf8');
  }
  console.log(`Updated ${updated} galleries; skipped ${skipped} galleries without all requested image types.`);
}

void main();
