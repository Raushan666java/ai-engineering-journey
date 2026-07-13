import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { ALL_COURSE_SLUGS, COURSES_DIR, LESSON_IMAGES_DIR } from './config';
import { listMarkdownFiles, readFile, writeFile, ensureDir, chapterSlug } from './utils';
import { extractConcepts } from './concept-extractor';
import { generateHeroBanner } from './generators/hero-banner';
import { generateHandwrittenNotes } from './generators/handwritten-notes';
import { generateStickyNotes } from './generators/sticky-notes';
import { generateVisualExplanation } from './generators/visual-explanation';
import { generateArchitecture } from './generators/architecture';
import { generateWorkflow } from './generators/workflow';
import { generateMindmap } from './generators/mindmap';
import { generateComparison } from './generators/comparison';
import { generateCheatsheet } from './generators/cheatsheet';
import { generateQuizCard } from './generators/quiz-card';
import { generateSocialCard } from './generators/social-card';
import { injectLessonImages } from './injector';
import { ConceptData, IMAGE_TYPES } from './types';

interface Stats {
  course: string;
  chapterCount: number;
  svgCount: number;
  webpCount: number;
  errors: string[];
}

const GENERATORS: Record<string, (d: ConceptData) => string> = {
  'hero': generateHeroBanner,
  'handwritten-notes': generateHandwrittenNotes,
  'sticky-notes': generateStickyNotes,
  'visual-explanation': generateVisualExplanation,
  'architecture': generateArchitecture,
  'workflow': generateWorkflow,
  'mindmap': generateMindmap,
  'comparison': generateComparison,
  'cheatsheet': generateCheatsheet,
  'interview-quiz': generateQuizCard,
  'social-card': generateSocialCard,
};

async function svgToWebp(svgContent: string, outputPath: string): Promise<void> {
  try {
    await sharp(Buffer.from(svgContent)).webp({ quality: 85 }).toFile(outputPath);
  } catch {
    // Fallback: skip webp if sharp conversion fails
  }
}

function getChapterFiles(courseDir: string): string[] {
  if (!fs.existsSync(courseDir)) return [];
  return fs.readdirSync(courseDir)
    .filter((f: string) => f.endsWith('.md') && f !== 'index.md')
    .sort();
}

async function processCourse(slug: string): Promise<Stats> {
  const stats: Stats = { course: slug, chapterCount: 0, svgCount: 0, webpCount: 0, errors: [] };
  const courseDir = path.join(COURSES_DIR, slug);
  const files = getChapterFiles(courseDir);

  console.log(`\n=== ${slug} (${files.length} files) ===`);

  for (const file of files) {
    const filePath = path.join(courseDir, file);
    const slug_ = chapterSlug(file);

    try {
      const markdown = readFile(filePath);
      const data = extractConcepts(markdown);

      if (!data.title) {
        console.log(`  ${file}: no title found, skipping`);
        continue;
      }

      stats.chapterCount++;

      const chapterDir = path.join(LESSON_IMAGES_DIR, slug, slug_);
      ensureDir(chapterDir);

      let chapterSVGs = 0;
      let chapterWebPs = 0;
      for (const type of IMAGE_TYPES) {
        const gen = GENERATORS[type];
        if (gen) {
          const svg = gen(data);
          const svgPath = path.join(chapterDir, `${type}.svg`);
          writeFile(svgPath, svg);
          chapterSVGs++;

          const webpPath = path.join(chapterDir, `${type}.webp`);
          await svgToWebp(svg, webpPath);
          if (fs.existsSync(webpPath)) chapterWebPs++;
        }
      }
      stats.svgCount += chapterSVGs;
      stats.webpCount += chapterWebPs;

      const { updatedMarkdown, inserted } = injectLessonImages(markdown, data, slug, slug_);
      if (inserted) {
        writeFile(filePath, updatedMarkdown);
      }

      console.log(`  ${file}: ${chapterSVGs} SVGs / ${chapterWebPs} WebP${inserted ? ' + gallery' : ''}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      stats.errors.push(`${file}: ${msg}`);
      console.error(`  ${file}: ERROR — ${msg}`);
    }
  }

  return stats;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const filter = args.find(a => a.startsWith('--course='))?.split('=')[1];
  const slugs = filter ? [filter] : ALL_COURSE_SLUGS;

  console.log('=== Generate Lesson Images v2 ===');
  console.log(`Courses: ${slugs.length} (${filter || 'all'})`);
  console.log(`Images per chapter: ${IMAGE_TYPES.length}`);
  console.log(`Output: ${LESSON_IMAGES_DIR}\n`);

  const allStats: Stats[] = [];
  let totalErrors = 0;

  for (const slug of slugs) {
    const stats = await processCourse(slug);
    allStats.push(stats);
    totalErrors += stats.errors.length;
  }

  const totalCh = allStats.reduce((s, c) => s + c.chapterCount, 0);
  const totalS = allStats.reduce((s, c) => s + c.svgCount, 0);
  const totalW = allStats.reduce((s, c) => s + c.webpCount, 0);

  console.log('\n=== Summary ===');
  console.log(`Courses:         ${slugs.length}`);
  console.log(`Chapters:        ${totalCh}`);
  console.log(`SVGs:            ${totalS}`);
  console.log(`WebP:            ${totalW}`);

  if (totalErrors > 0) {
    console.log(`\nErrors (${totalErrors}):`);
    for (const s of allStats) {
      for (const e of s.errors) {
        console.log(`  [${s.course}] ${e}`);
      }
    }
  }

  console.log('\nDone!');
}

main();
