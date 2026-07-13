import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs } from '../svg-utils';

function wwrap(text: string, max: number): string[] {
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

export function generateWorkflow(data: ConceptData): string {
  const w = 800, h = 600;

  // Build steps from workflow data or fall back
  const rawSteps = data.workflow.length >= 2 ? data.workflow : [
    { step: 1, description: data.concepts[0]?.term || 'Start', details: [] },
    { step: 2, description: data.concepts[1]?.term || 'Process', details: [] },
    { step: 3, description: data.concepts[2]?.term || 'Output', details: [] },
  ];
  const steps = rawSteps.slice(0, 5); // cap at 5

  const parts: string[] = [];
  const numSteps = steps.length;
  const bw = 130;
  const bh = 80;
  const gap = 35;
  const totalW = numSteps * bw + (numSteps - 1) * gap;
  const startX = (w - totalW) / 2;
  const boxY = 100;

  for (let i = 0; i < numSteps; i++) {
    const s = steps[i];
    const x = startX + i * (bw + gap);
    const cx = x + bw / 2;
    const isFirst = i === 0;
    const isLast = i === numSteps - 1;
    const rx = bh / 2;

    // ── Step box ──
    if (isFirst) {
      parts.push(`  <!-- Step ${s.step}: ${escapeXml(s.description)} -->
    <rect x="${x}" y="${boxY}" width="${bw}" height="${bh}" rx="${rx}" fill="url(#gBlue)" filter="url(#shadowMd)"/>`);
    } else if (isLast) {
      parts.push(`  <rect x="${x}" y="${boxY}" width="${bw}" height="${bh}" rx="${rx}" fill="url(#gGreen)" filter="url(#shadowMd)"/>`);
    } else {
      parts.push(`  <rect x="${x}" y="${boxY}" width="${bw}" height="${bh}" rx="${rx}" fill="${C.white}" stroke="${C.textLight}" stroke-width="2" stroke-dasharray="6,4" filter="url(#shadowSm)"/>`);
    }

    // ── Number circle ──
    const circleY = boxY + 26;
    const cr = 15;
    if (isFirst || isLast) {
      parts.push(`  <circle cx="${cx}" cy="${circleY}" r="${cr}" fill="#ffffff" opacity="0.25"/>
      <text x="${cx}" y="${circleY + 5}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">${s.step}</text>`);
    } else {
      parts.push(`  <circle cx="${cx}" cy="${circleY}" r="${cr}" fill="${C.primary}" opacity="0.1"/>
      <circle cx="${cx}" cy="${circleY}" r="${cr}" fill="none" stroke="${C.primary}" stroke-width="1.5" opacity="0.5"/>
      <text x="${cx}" y="${circleY + 5}" font-size="14" font-weight="bold" fill="${C.primary}" text-anchor="middle" font-family="Arial, sans-serif">${s.step}</text>`);
    }

    // ── Step label ──
    const labelY = boxY + 60;
    const textColor = isFirst || isLast ? '#ffffff' : C.text;
    const labelText = escapeXml(truncate(s.description, 22));
    parts.push(`  <text x="${cx}" y="${labelY}" font-size="11" font-weight="bold" fill="${textColor}" text-anchor="middle" font-family="Arial, sans-serif">${labelText}</text>`);

    // ── Arrow between steps ──
    if (i < numSteps - 1) {
      const ax1 = x + bw + 4;
      const ax2 = x + bw + gap - 4;
      const ay = boxY + bh / 2;
      parts.push(`  <!-- Arrow ${s.step} → ${steps[i + 1].step} -->
    <line x1="${ax1}" y1="${ay}" x2="${ax2}" y2="${ay}" stroke="${C.primary}" stroke-width="2" marker-end="url(#arrowBlue)"/>`);
    }

    // ── Description card below step ──
    const descY = boxY + bh + 22;
    const descText = escapeXml(s.description);
    const descLines = wwrap(descText, 24);
    const cardH = Math.max(descLines.length * 16 + 16, 40);
    const cardColor = isFirst ? C.primary : isLast ? C.secondary : C.textLight;

    parts.push(`  <!-- Description for step ${s.step} -->
    <rect x="${x + 4}" y="${descY}" width="${bw - 8}" height="${cardH}" rx="6" fill="${C.white}" filter="url(#shadowSm)"/>
    <rect x="${x + 4}" y="${descY}" width="${bw - 8}" height="${cardH}" rx="6" fill="none" stroke="${C.border}" stroke-width="1"/>
    <line x1="${x + 14}" y1="${descY + 10}" x2="${x + bw - 14}" y2="${descY + 10}" stroke="${cardColor}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`);

    for (let j = 0; j < descLines.length; j++) {
      parts.push(`  <text x="${cx}" y="${descY + 24 + j * 16}" font-size="10" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif">${descLines[j]}</text>`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${defs()}
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#lineGrid)" opacity="0.35"/>
  <!-- Title -->
  <text x="${w / 2}" y="40" font-size="18" font-weight="bold" fill="${C.text}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 55))}</text>
  <rect x="${w / 2 - 25}" y="50" width="50" height="3" rx="1.5" fill="${C.primary}"/>
${parts.join('\n')}
</svg>`;
}
