import { readdir, rm } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = fileURLToPath(new URL('.', import.meta.url));
const assetsRoot = resolve(scriptDirectory, '..', '..', 'docs', 'assets', 'images', 'lessons');
const unusedTypes = new Set([
  'hero',
  'architecture',
  'workflow',
  'mindmap',
  'comparison',
  'cheatsheet',
  'interview-quiz',
  'social-card',
]);

async function files(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return files(path);
    return entry.isFile() ? [path] : [];
  }));
  return nested.flat();
}

async function main(): Promise<void> {
  const candidates = (await files(assetsRoot)).filter(file => unusedTypes.has(basename(file, '.svg')) || unusedTypes.has(basename(file, '.webp')));
  for (const file of candidates) {
    if (!resolve(file).startsWith(assetsRoot)) throw new Error(`Refusing to remove file outside asset root: ${file}`);
    await rm(file);
  }
  console.log(`Removed ${candidates.length} unused gallery assets.`);
}

void main();
