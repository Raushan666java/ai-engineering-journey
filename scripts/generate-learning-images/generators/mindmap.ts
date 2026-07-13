import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs } from '../svg-utils';

interface Branch {
  label: string;
  color: string;
  children: string[];
  angle: number; // degrees, 0 = right, 90 = down, -90 = up
}

function wrapLabel(text: string, max: number): string[] {
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

export function generateMindmap(data: ConceptData): string {
  const w = 800, h = 700;
  const cx = w / 2, cy = h / 2;
  const parts: string[] = [];

  const palette = [
    C.primary, C.secondary, C.warning, C.purple,
    C.pink, '#0891b2', C.danger, '#4f46e5',
  ];

  // ── Center node ──
  const title = escapeXml(truncate(data.title, 35));
  const centerW = 170;
  const centerH = 56;

  parts.push(`  <!-- Center node -->
  <rect x="${cx - centerW / 2}" y="${cy - centerH / 2}" width="${centerW}" height="${centerH}" rx="${centerH / 2}" fill="url(#gBlue)" filter="url(#shadowMd)"/>
  <text x="${cx}" y="${cy + 5}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">${title}</text>`);

  // ── Build branches from available data ──
  const branches: Branch[] = [
    { label: 'Concepts', color: palette[0], angle: -125,
      children: data.concepts.slice(0, 4).map(c => c.term) },
    { label: 'Workflow', color: palette[1], angle: -50,
      children: data.workflow.slice(0, 3).map(wf => wf.description.slice(0, 24)) },
    { label: 'Formulas', color: palette[2], angle: 20,
      children: data.formulas.slice(0, 3).map(f => f.name) },
    { label: 'Interview', color: palette[3], angle: 95,
      children: data.interviewQuestions.slice(0, 3).map(iq => iq.question.slice(0, 22)) },
    { label: 'Mistakes', color: palette[4], angle: 165,
      children: data.commonMistakes.slice(0, 2).map(m => m.mistake.slice(0, 22)) },
  ];

  const branchLen = 180;
  const childSpacing = 22;

  for (const branch of branches) {
    if (branch.children.length === 0) continue;

    const rad = (branch.angle * Math.PI) / 180;
    const bx = cx + Math.cos(rad) * branchLen;
    const by = cy + Math.sin(rad) * branchLen;

    // Start point on center box edge (in the direction of the angle)
    const edgeX = cx + Math.cos(rad) * (centerW / 2 + 4);
    const edgeY = cy + Math.sin(rad) * (centerH / 2 + 4);

    // Bezier control point (offset perpendicular for a smooth curve)
    const perpRad = rad + Math.PI / 2;
    const perpOffset = 45;
    const midX = (edgeX + bx) / 2;
    const midY = (edgeY + by) / 2;
    const cpX = midX + Math.cos(perpRad) * perpOffset;
    const cpY = midY + Math.sin(perpRad) * perpOffset;

    // ── Bezier connector ──
    parts.push(`  <!-- Branch: ${escapeXml(branch.label)} -->
    <path d="M${edgeX},${edgeY} Q${cpX},${cpY} ${bx},${by}" fill="none" stroke="${branch.color}" stroke-width="2.5" opacity="0.5" stroke-linecap="round"/>`);

    // ── Capsule label ──
    const capsuleW = 120;
    const capsuleH = 30;
    parts.push(`  <rect x="${bx - capsuleW / 2}" y="${by - capsuleH / 2}" width="${capsuleW}" height="${capsuleH}" rx="${capsuleH / 2}" fill="${branch.color}" opacity="0.1" stroke="${branch.color}" stroke-width="2" filter="url(#shadowSm)"/>
    <text x="${bx}" y="${by + 5}" font-size="12" font-weight="bold" fill="${branch.color}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(branch.label)}</text>`);

    // ── Child nodes ──
    // Determine branch direction for text placement
    const isLeftSide = branch.angle > 90 || branch.angle < -90;
    const textAnchor = isLeftSide ? 'end' : 'start';
    const textSign = isLeftSide ? -1 : 1;

    for (let i = 0; i < branch.children.length; i++) {
      // Position child along the branch direction (away from center)
      const dist = capsuleH / 2 + 8 + i * childSpacing;
      const childX = bx + Math.cos(rad) * dist;
      const childY = by + Math.sin(rad) * dist;

      // Thin connector line
      parts.push(`  <line x1="${bx + Math.cos(rad) * (capsuleH / 2 + 2)}" y1="${by + Math.sin(rad) * (capsuleH / 2 + 2)}" x2="${childX}" y2="${childY}" stroke="${branch.color}" stroke-width="1" opacity="0.3" stroke-dasharray="3,3"/>`);

      // Dot marker
      parts.push(`  <circle cx="${childX}" cy="${childY}" r="3" fill="${branch.color}" filter="url(#shadowSm)"/>`);

      // Text label offset perpendicular to branch
      const perpX = Math.cos(perpRad) * 10 * textSign;
      const perpY = Math.sin(perpRad) * 10 * textSign;
      const textX = childX + perpX;
      const textY = childY + 4;
      const label = escapeXml(truncate(branch.children[i], 24));

      parts.push(`  <text x="${textX}" y="${textY}" font-size="10" fill="${C.textMuted}" font-family="Arial, sans-serif" text-anchor="${textAnchor}">${label}</text>`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${defs()}
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)" opacity="0.55"/>
${parts.join('\n')}
</svg>`;
}
