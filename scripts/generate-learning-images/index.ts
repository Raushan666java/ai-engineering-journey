import path from 'path';
import { ALL_COURSE_SLUGS, COURSES_DIR, ASSETS_DIR } from './config';
import { listMarkdownFiles, readFile, writeFile, ensureDir, chapterSlug } from './utils';
import { parseTopics } from './parser';
import { generateHandwrittenSVG } from './generators/handwritten';
import { generateDiagramSVG } from './generators/diagram';
import { generateStickyNoteSVG } from './generators/sticky';
import { injectImages } from './injector';

interface Stats {
  course: string;
  chapterCount: number;
  topicCount: number;
  svgCount: number;
  errors: string[];
}

function getChapterFiles(courseDir: string): string[] {
  if (!require('fs').existsSync(courseDir)) return [];
  return require('fs').readdirSync(courseDir)
    .filter((f: string) => f.endsWith('.md') && f !== 'index.md')
    .sort();
}

function processCourse(slug: string): Stats {
  const stats: Stats = { course: slug, chapterCount: 0, topicCount: 0, svgCount: 0, errors: [] };
  const courseDir = path.join(COURSES_DIR, slug);
  const files = getChapterFiles(courseDir);

  console.log(`\n=== ${slug} (${files.length} files) ===`);

  for (const file of files) {
    const filePath = path.join(courseDir, file);
    const slug_ = chapterSlug(file);

    try {
      const markdown = readFile(filePath);
      const topics = parseTopics(markdown);

      if (topics.length === 0) {
        console.log(`  ${file}: no topics`);
        continue;
      }

      stats.chapterCount++;
      stats.topicCount += topics.length;

      const chapterAssetDir = path.join(ASSETS_DIR, slug, slug_);
      ensureDir(chapterAssetDir);

      for (const topic of topics) {
        const h = generateHandwrittenSVG(topic);
        const d = generateDiagramSVG(topic);
        const s = generateStickyNoteSVG(topic);
        writeFile(path.join(chapterAssetDir, `${topic.slug}-handwritten.svg`), h);
        writeFile(path.join(chapterAssetDir, `${topic.slug}-diagram.svg`), d);
        writeFile(path.join(chapterAssetDir, `${topic.slug}-sticky.svg`), s);
        stats.svgCount += 3;
      }

      const { updatedMarkdown, insertedCount } = injectImages(markdown, topics, slug, slug_);
      if (insertedCount > 0) {
        writeFile(filePath, updatedMarkdown);
      }

      console.log(`  ${file}: ${topics.length} topics, ${insertedCount} injected`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      stats.errors.push(`${file}: ${msg}`);
      console.error(`  ${file}: ERROR — ${msg}`);
    }
  }

  return stats;
}

function main(): void {
  const args = process.argv.slice(2);
  const filter = args.find(a => a.startsWith('--course='))?.split('=')[1];

  const slugs = filter ? [filter] : ALL_COURSE_SLUGS;

  console.log('=== Generate Learning Images ===');
  console.log(`Courses: ${slugs.length} (${filter || 'all'})`);
  console.log(`Assets: ${ASSETS_DIR}\n`);

  const allStats: Stats[] = [];
  let totalErrors = 0;

  for (const slug of slugs) {
    const stats = processCourse(slug);
    allStats.push(stats);
    totalErrors += stats.errors.length;
  }

  const totalCh = allStats.reduce((s, c) => s + c.chapterCount, 0);
  const totalT = allStats.reduce((s, c) => s + c.topicCount, 0);
  const totalS = allStats.reduce((s, c) => s + c.svgCount, 0);

  console.log('\n=== Summary ===');
  console.log(`Courses:         ${slugs.length}`);
  console.log(`Chapters:        ${totalCh}`);
  console.log(`Topics:          ${totalT}`);
  console.log(`SVGs generated:  ${totalS}`);
  console.log(`Errors:          ${totalErrors}`);

  if (totalErrors > 0) {
    console.log('\nErrors:');
    for (const s of allStats) {
      for (const e of s.errors) {
        console.log(`  [${s.course}] ${e}`);
      }
    }
  }

  console.log('\nDone!');
}

main();
