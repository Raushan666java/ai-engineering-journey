import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

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
  const steps = data.workflow.length >= 2 ? data.workflow : [
    { step: 1, description: data.concepts[0]?.term || 'Start', details: [] },
    { step: 2, description: data.concepts[1]?.term || 'Process', details: [] },
    { step: 3, description: data.concepts[2]?.term || 'Output', details: [] },
  ];

  const parts: string[] = [];
  const bw = 180, bh = 50;
  const gap = 40;
  const startX = (w - (steps.length * (bw + gap) - gap)) / 2;
  const y = h / 2 - bh / 2;

  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    const x = startX + i * (bw + gap);
    const isFirst = i === 0;
    const isLast = i === steps.length - 1;

    parts.push(`  <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="${isFirst || isLast ? 25 : 8}" fill="${isFirst ? '#2563eb' : isLast ? '#059669' : '#f1f5f9'}" stroke="${isFirst || isLast ? 'none' : '#94a3b8'}" stroke-width="2"/>
    <text x="${x + bw / 2}" y="${y + 20}" font-size="22" font-weight="bold" fill="${isFirst || isLast ? '#fff' : '#2563eb'}" text-anchor="middle" font-family="Arial, sans-serif">${s.step}</text>
    <text x="${x + bw / 2}" y="${y + bh - 10}" font-size="10" fill="${isFirst || isLast ? '#e2e8f0' : '#64748b'}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(s.description, 22))}</text>`);

    if (i < steps.length - 1) {
      const arrowX = x + bw + gap / 2;
      parts.push(`  <line x1="${x + bw + 5}" y1="${y + bh / 2}" x2="${x + bw + gap - 5}" y2="${y + bh / 2}" stroke="#94a3b8" stroke-width="2" marker-end="url(#warrow)"/>
      <text x="${arrowX}" y="${y + bh / 2 - 8}" font-size="10" fill="#94a3b8" text-anchor="middle" font-family="Arial, sans-serif">next</text>`);
    }
  }

  // Description boxes below each step
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    const x = startX + i * (bw + gap);
    const dy = y + bh + 20;
    const clines = wwrap(escapeXml(truncate(s.description, 50)), 22);
    if (clines.length > 0) {
      parts.push(`  <rect x="${x + 5}" y="${dy}" width="${bw - 10}" height="${clines.length * 16 + 10}" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>`);
      for (let j = 0; j < clines.length; j++) {
        parts.push(`  <text x="${x + bw / 2}" y="${dy + 16 + j * 16}" font-size="10" fill="#475569" text-anchor="middle" font-family="Arial, sans-serif">${clines[j]}</text>`);
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <marker id="warrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <rect width="${w}" height="${h}" fill="#ffffff" rx="4"/>
  <text x="${w / 2}" y="40" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 50))}</text>
  <rect x="${w / 2 - 20}" y="50" width="40" height="3" rx="2" fill="#2563eb"/>
  ${parts.join('\n')}
</svg>`;
}
