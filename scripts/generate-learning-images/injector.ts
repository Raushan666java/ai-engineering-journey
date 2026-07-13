import { ConceptData, IMAGE_TYPES, ImageType } from './types';

const IMAGE_LABELS: Record<ImageType, string> = {
  'hero': 'Chapter Banner',
  'handwritten-notes': 'Handwritten Notes',
  'sticky-notes': 'Sticky Notes',
  'visual-explanation': 'Visual Explanation',
  'architecture': 'Architecture',
  'workflow': 'Workflow',
  'mindmap': 'Mind Map',
  'comparison': 'Comparison',
  'cheatsheet': 'Cheat Sheet',
  'interview-quiz': 'Quiz Card',
  'social-card': 'Social Card',
};

function generateImageBlock(data: ConceptData, course: string, chapterSlug: string): string {
  const base = `../../../assets/images/lessons/${course}/${chapterSlug}`;

  const images = IMAGE_TYPES.map(type => {
    const label = IMAGE_LABELS[type];
    return `<a href="${base}/${type}.svg" target="_blank" rel="noopener">
  <img src="${base}/${type}.svg" alt="${label}: ${data.title}" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>`;
  }).join('\n');

  return `
<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
${images}
</div>
<!-- End Image Gallery -->
`;
}

function alreadyHasGallery(markdown: string): boolean {
  return markdown.includes('<!-- Image Gallery -->');
}

export function injectLessonImages(
  markdown: string,
  data: ConceptData,
  course: string,
  chapterSlug: string,
): { updatedMarkdown: string; inserted: boolean } {
  if (alreadyHasGallery(markdown)) {
    return { updatedMarkdown: markdown, inserted: false };
  }

  const lines = markdown.split('\n');
  let insertIdx = -1;

  // Find the Learning Objectives section end
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('## Learning Objectives')) {
      // Look for the first empty line or next heading after the objectives list
      for (let j = i + 1; j < Math.min(i + 30, lines.length); j++) {
        const tj = lines[j].trim();
        if (tj.startsWith('## ') || (tj === '' && j > i + 2 && lines[j - 1].trim() !== '')) {
          insertIdx = j;
          break;
        }
      }
      break;
    }
  }

  // Fallback: insert after first heading
  if (insertIdx === -1) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('## ') && i > 0) {
        insertIdx = i;
        break;
      }
    }
  }

  if (insertIdx === -1) {
    insertIdx = 2; // fallback
  }

  const block = generateImageBlock(data, course, chapterSlug);
  lines.splice(insertIdx, 0, block);

  return { updatedMarkdown: lines.join('\n'), inserted: true };
}
