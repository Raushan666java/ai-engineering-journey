import { ConceptData, IMAGE_TYPES, ImageType } from './types';

const IMAGE_LABELS: Record<ImageType, { label: string; category: string; desc: string }> = {
  'hero': { label: 'Chapter Banner', category: 'Overview', desc: 'Chapter title, subtitle, and key stats at a glance' },
  'handwritten-notes': { label: 'Handwritten Notes', category: 'Study', desc: 'Notebook-style condensed notes with definitions and formulas' },
  'sticky-notes': { label: 'Sticky Notes', category: 'Study', desc: 'Quick-revision sticky board with color-coded concepts' },
  'visual-explanation': { label: 'Visual Explanation', category: 'Learn', desc: 'Step-by-step infographic connecting all key ideas' },
  'architecture': { label: 'Architecture', category: 'Technical', desc: 'System layers and component relationships' },
  'workflow': { label: 'Workflow', category: 'Technical', desc: 'Process flow with numbered steps and decision points' },
  'mindmap': { label: 'Mind Map', category: 'Study', desc: 'Concept map showing relationships between topics' },
  'comparison': { label: 'Comparison', category: 'Technical', desc: 'Side-by-side comparison of related concepts' },
  'cheatsheet': { label: 'Cheat Sheet', category: 'Practice', desc: 'Single-page quick reference for interviews' },
  'interview-quiz': { label: 'Quiz Card', category: 'Practice', desc: 'Self-test questions with answer key' },
  'social-card': { label: 'Social Card', category: 'Overview', desc: 'Open Graph preview for sharing' },
};

const CATEGORY_LABELS: Record<string, string> = {
  Overview: 'Overview',
  Study: 'Study Materials',
  Technical: 'Technical Diagrams',
  Learn: 'Learn & Understand',
  Practice: 'Practice & Review',
};

const CATEGORY_COLORS: Record<string, string> = {
  Overview: '#2563eb',
  Study: '#059669',
  Technical: '#7c3aed',
  Learn: '#d97706',
  Practice: '#dc2626',
};

function generateGalleryBlock(data: ConceptData, course: string, chapterSlug: string): string {
  const base = `../../../assets/images/lessons/${course}/${chapterSlug}`;

  const categoryOrder = ['Overview', 'Study', 'Learn', 'Technical', 'Practice'];
  const sections = categoryOrder.map(cat => {
    const types = IMAGE_TYPES.filter(t => IMAGE_LABELS[t].category === cat);
    if (types.length === 0) return '';
    const color = CATEGORY_COLORS[cat];
    const images = types.map(type => {
      const info = IMAGE_LABELS[type];
      return `    <div style="width:16%;min-width:100px;margin:4px;text-align:center;vertical-align:top;display:inline-block;">
      <a href="${base}/${type}.svg" target="_blank" rel="noopener">
        <img src="${base}/${type}.svg" alt="${info.label}: ${data.title}" style="width:100%;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.08);transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'">
      </a>
      <div style="font-size:11px;color:#64748b;margin-top:4px;font-family:Arial,sans-serif;line-height:1.3;">
        <strong style="color:${color}">${info.label}</strong><br>
        ${info.desc}
      </div>
    </div>`;
    }).join('\n');

    return `<div style="margin-bottom:16px;">
  <div style="font-size:14px;font-weight:bold;color:${color};margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid ${color};font-family:Arial,sans-serif;">${CATEGORY_LABELS[cat]}</div>
  <div style="display:flex;flex-wrap:wrap;gap:4px;">
${images}
  </div>
</div>`;
  }).join('\n');

  return `
<!-- Image Gallery -->
<div style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
  <div style="font-size:16px;font-weight:bold;color:#1e293b;margin-bottom:12px;font-family:Arial,sans-serif;">
    Visual Learning Resources
    <span style="font-size:12px;font-weight:normal;color:#94a3b8;margin-left:8px;">Click any image to enlarge</span>
  </div>
${sections}
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

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('## Learning Objectives')) {
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

  if (insertIdx === -1) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('## ') && i > 0) {
        insertIdx = i;
        break;
      }
    }
  }

  if (insertIdx === -1) insertIdx = 2;

  const block = generateGalleryBlock(data, course, chapterSlug);
  lines.splice(insertIdx, 0, block);

  return { updatedMarkdown: lines.join('\n'), inserted: true };
}
