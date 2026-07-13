import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function mwrap(text: string, max: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) { lines.push(cur.trim()); cur = w; }
    else { cur = cur ? cur + ' ' + w : w; }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

interface Branch {
  label: string;
  color: string;
  children: string[];
  angle: number;
}

export function generateMindmap(data: ConceptData): string {
  const w = 800, h = 700;
  const cx = w / 2, cy = h / 2;
  const parts: string[] = [];

  const palette = ['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2', '#be123c', '#4f46e5'];

  // Center node
  const title = escapeXml(truncate(data.title, 35));
  const tlines = mwrap(title, 18);
  const th = tlines.length * 18 + 20;
  const tw = 160;
  parts.push(`  <!-- Center node -->
  <rect x="${cx - tw / 2}" y="${cy - th / 2}" width="${tw}" height="${th}" rx="16" fill="#2563eb"/>
  ${tlines.map((l, i) => `  <text x="${cx}" y="${cy - th / 2 + 22 + i * 18}" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">${l}</text>`).join('\n')}`);

  // Build branches
  const branches: Branch[] = [
    { label: 'Concepts', color: palette[0], children: data.concepts.slice(0, 4).map(c => c.term), angle: -120 },
    { label: 'Workflow', color: palette[1], children: data.workflow.slice(0, 3).map(wf => wf.description.slice(0, 20)), angle: -40 },
    { label: 'Formulas', color: palette[2], children: data.formulas.slice(0, 3).map(f => f.name), angle: 30 },
    { label: 'Interview Qs', color: palette[3], children: data.interviewQuestions.slice(0, 3).map(iq => 'Q: ' + iq.question.slice(0, 18)), angle: 100 },
    { label: 'Mistakes', color: palette[4], children: data.commonMistakes.slice(0, 2).map(m => m.mistake.slice(0, 18)), angle: 170 },
  ];

  const branchLen = 180;

  for (const branch of branches) {
    if (branch.children.length === 0) continue;
    const rad = (branch.angle * Math.PI) / 180;
    const bx = cx + Math.cos(rad) * branchLen;
    const by = cy + Math.sin(rad) * branchLen;

    // Branch connector curve
    const controlX = (cx + bx) / 2;
    const controlY = (cy + by) / 2 - 40;
    parts.push(`  <path d="M${cx + tw / 2 * (branch.angle > 0 ? 1 : -1)},${cy} Q${controlX},${controlY} ${bx},${by}" fill="none" stroke="${branch.color}" stroke-width="2" opacity="0.6"/>`);

    // Branch label
    const blines = mwrap(escapeXml(branch.label), 10);
    const bw = 110, bh = 30;
    parts.push(`  <rect x="${bx - bw / 2}" y="${by - bh / 2}" width="${bw}" height="${bh}" rx="15" fill="${branch.color}" opacity="0.12" stroke="${branch.color}" stroke-width="1.5"/>
    <text x="${bx}" y="${by + 5}" font-size="12" font-weight="bold" fill="${branch.color}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(branch.label)}</text>`);

    // Child nodes
    const childStartX = bx + (branch.angle > 0 ? 60 : -60);
    const childStartY = by - ((branch.children.length - 1) * 20) / 2;
    for (let i = 0; i < branch.children.length; i++) {
      const childY = childStartY + i * 20;
      const childX = childStartX;
      parts.push(`  <circle cx="${childX}" cy="${childY}" r="3" fill="${branch.color}"/>
      <text x="${childX + 10}" y="${childY + 4}" font-size="10" fill="#475569" font-family="Arial, sans-serif">${escapeXml(truncate(branch.children[i], 25))}</text>`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="mbg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#mbg)" rx="4"/>
  <!-- Grid dots -->
  <pattern id="mdots" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="15" cy="15" r="1" fill="#e2e8f0"/>
  </pattern>
  <rect width="${w}" height="${h}" fill="url(#mdots)"/>
  ${parts.join('\n')}
</svg>`;
}
