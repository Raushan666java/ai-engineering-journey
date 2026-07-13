import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function chew(text: string, max: number): string[] {
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

export function generateCheatsheet(data: ConceptData): string {
  const w = 600, h = 900;
  const parts: string[] = [];
  let y = 70;
  const colW = (w - 80) / 2;

  // Title
  parts.push(`  <text x="${w / 2}" y="${y}" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 40))}</text>`);
  y += 30;

  // Left column: Concepts
  parts.push(`  <text x="30" y="${y}" font-size="12" font-weight="bold" fill="#2563eb" font-family="Arial, sans-serif">KEY CONCEPTS</text>
  <line x1="30" y1="${y + 4}" x2="${30 + colW}" y2="${y + 4}" stroke="#2563eb" stroke-width="1"/>`);
  y += 24;
  for (const c of data.concepts.slice(0, 6)) {
    const clines = chew(escapeXml(`${c.term}: ${truncate(c.definition, 50)}`), 24);
    for (const cl of clines) {
      if (y > 400) break;
      parts.push(`  <text x="35" y="${y}" font-size="9" fill="#475569" font-family="Arial, sans-serif">${cl}</text>`);
      y += 13;
    }
    y += 2;
  }

  // Right column: Formulas & Tips
  let ry = 70;
  parts.push(`  <text x="${30 + colW + 20}" y="${ry}" font-size="12" font-weight="bold" fill="#059669" font-family="Arial, sans-serif">FORMULAS & TIPS</text>
  <line x1="${30 + colW + 20}" y1="${ry + 4}" x2="${w - 30}" y2="${ry + 4}" stroke="#059669" stroke-width="1"/>`);
  ry += 24;
  for (const f of data.formulas.slice(0, 4)) {
    if (ry > 300) break;
    parts.push(`  <text x="${30 + colW + 25}" y="${ry}" font-size="9" fill="#059669" font-weight="bold" font-family="Arial, sans-serif">${escapeXml(f.name)}:</text>
    <text x="${30 + colW + 25}" y="${ry + 13}" font-size="9" fill="#475569" font-family="Arial, sans-serif">${escapeXml(truncate(f.expression, 35))}</text>`);
    ry += 28;
  }

  // Bottom section: Interview & Mistakes
  const bottomY = Math.max(y + 40, 480);
  let by = bottomY;

  parts.push(`  <line x1="30" y1="${by - 10}" x2="${w - 30}" y2="${by - 10}" stroke="#e2e8f0" stroke-width="1"/>
  <text x="30" y="${by + 4}" font-size="12" font-weight="bold" fill="#dc2626" font-family="Arial, sans-serif">INTERVIEW PREP</text>
  <line x1="30" y1="${by + 8}" x2="${30 + colW}" y2="${by + 8}" stroke="#dc2626" stroke-width="1"/>`);
  by += 24;
  for (const iq of data.interviewQuestions.slice(0, 3)) {
    if (by > h - 100) break;
    parts.push(`  <text x="35" y="${by}" font-size="9" fill="#7f1d1d" font-family="Arial, sans-serif">Q: ${escapeXml(truncate(iq.question, 55))}</text>`);
    by += 14;
    parts.push(`  <text x="35" y="${by}" font-size="8" fill="#64748b" font-family="Arial, sans-serif">${escapeXml(truncate(iq.answer, 55))}</text>`);
    by += 20;
  }

  // Mistakes column right
  let my = bottomY;
  parts.push(`  <text x="${30 + colW + 20}" y="${my + 4}" font-size="12" font-weight="bold" fill="#d97706" font-family="Arial, sans-serif">COMMON MISTAKES</text>
  <line x1="${30 + colW + 20}" y1="${my + 8}" x2="${w - 30}" y2="${my + 8}" stroke="#d97706" stroke-width="1"/>`);
  my += 24;
  for (const m of data.commonMistakes.slice(0, 4)) {
    if (my > h - 100) break;
    parts.push(`  <text x="${30 + colW + 25}" y="${my}" font-size="9" fill="#92400e" font-family="Arial, sans-serif">⚠ ${escapeXml(truncate(m.mistake, 35))}</text>`);
    my += 16;
  }

  // Footer
  parts.push(`  <text x="${w / 2}" y="${h - 20}" font-size="9" fill="#94a3b8" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 50))} — Quick Reference</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#ffffff" rx="6"/>
  <!-- Top accent bar -->
  <rect x="0" y="0" width="${w}" height="4" fill="#2563eb"/>
  <!-- Column dividers -->
  <line x1="${30 + colW + 10}" y1="60" x2="${30 + colW + 10}" y2="${h - 40}" stroke="#e2e8f0" stroke-width="0.5" stroke-dasharray="4,3"/>
  ${parts.join('\n')}
</svg>`;
}
