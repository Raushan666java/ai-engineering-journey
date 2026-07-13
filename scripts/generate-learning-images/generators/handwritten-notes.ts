import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function wrap(text: string, max: number): string[] {
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

export function generateHandwrittenNotes(data: ConceptData): string {
  const w = 600, h = 800;
  const ff = "'Segoe Print', 'Comic Sans MS', cursive";
  const lines: string[] = [];

  let y = 90;

  // Title
  const titleLines = wrap(escapeXml(truncate(data.title, 55)), 35);
  for (const tl of titleLines) {
    lines.push(`    <text x="60" y="${y}" font-size="22" font-weight="bold" fill="#1e293b" font-family="${ff}">${tl}</text>`);
    y += 32;
  }
  y += 6;
  lines.push(`    <line x1="55" y1="${y}" x2="${w - 40}" y2="${y}" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2"/>`);
  y += 24;

  // Definitions
  if (data.concepts.length > 0) {
    lines.push(`    <text x="60" y="${y}" font-size="15" font-weight="bold" fill="#2563eb" font-family="${ff}">Key Definitions</text>`);
    y += 28;
    for (const c of data.concepts.slice(0, 4)) {
      const tw = wrap(escapeXml(`${c.term}: ${truncate(c.definition, 80)}`), 40);
      for (const t of tw) {
        lines.push(`    <text x="60" y="${y}" font-size="13" fill="#1e293b" font-family="${ff}">${t.startsWith(c.term) ? `<tspan font-weight="bold">${escapeXml(c.term)}</tspan>: ${escapeXml(truncate(c.definition.replace(c.term, ''), 80))}` : t}</text>`);
        y += 22;
      }
    }
    y += 8;
  }

  // Formulas
  if (data.formulas.length > 0) {
    lines.push(`    <text x="60" y="${y}" font-size="15" font-weight="bold" fill="#dc2626" font-family="${ff}">Formulas</text>`);
    y += 28;
    for (const f of data.formulas.slice(0, 3)) {
      lines.push(`    <text x="60" y="${y}" font-size="13" fill="#1e293b" font-family="${ff}">${escapeXml(f.name)}: ${escapeXml(f.expression)}</text>`);
      y += 22;
    }
    y += 8;
  }

  // Workflow
  if (data.workflow.length > 0) {
    lines.push(`    <text x="60" y="${y}" font-size="15" font-weight="bold" fill="#059669" font-family="${ff}">Workflow</text>`);
    y += 28;
    for (const wf of data.workflow.slice(0, 4)) {
      lines.push(`    <text x="60" y="${y}" font-size="13" fill="#1e293b" font-family="${ff}">${wf.step}. ${escapeXml(truncate(wf.description, 70))}</text>`);
      y += 22;
      if (wf.details) for (const d of wf.details.slice(0, 2)) {
        lines.push(`    <text x="80" y="${y}" font-size="11" fill="#64748b" font-family="${ff}">- ${escapeXml(truncate(d, 65))}</text>`);
        y += 20;
      }
    }
    y += 8;
  }

  // Interview tip
  if (data.interviewQuestions.length > 0) {
    const iq = data.interviewQuestions[0];
    lines.push(`    <rect x="55" y="${y - 6}" width="${w - 110}" height="${36}" rx="4" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>`);
    lines.push(`    <text x="65" y="${y + 8}" font-size="12" font-weight="bold" fill="#dc2626" font-family="${ff}">Interview Tip</text>`);
    lines.push(`    <text x="65" y="${y + 24}" font-size="11" fill="#7f1d1d" font-family="${ff}">${escapeXml(truncate(iq.question, 85))}</text>`);
    y += 50;
  }

  // Key takeaway at bottom
  y = Math.max(y, h - 60);
  lines.push(`    <line x1="55" y1="${y - 6}" x2="${w - 40}" y2="${y - 6}" stroke="#94a3b8" stroke-width="1"/>`);
  lines.push(`    <text x="60" y="${y + 14}" font-size="12" font-style="italic" fill="#64748b" font-family="${ff}">${escapeXml(truncate(data.mainTakeaway, 80))}</text>`);

  // Blue guide lines (light)
  const guideLines = Array.from({ length: 22 }, (_, i) => {
    const gy = 90 + i * 32;
    return gy < h - 30 ? `  <line x1="55" y1="${gy}" x2="${w - 40}" y2="${gy}" stroke="#e2e8f0" stroke-width="0.5"/>` : '';
  }).filter(Boolean).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" stroke-width="0.3"/>
    </pattern>
  </defs>
  <!-- Paper background -->
  <rect width="${w}" height="${h}" fill="#FEFCF8" rx="6"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <!-- Red margin line -->
  <line x1="50" y1="0" x2="50" y2="${h}" stroke="#fecaca" stroke-width="2"/>
  <!-- Guide lines -->
${guideLines}
  <!-- Page number -->
  <text x="${w / 2}" y="${h - 12}" font-size="10" fill="#cbd5e1" text-anchor="middle" font-family="Arial, sans-serif">— 1 —</text>
  <!-- Content -->
${lines.join('\n')}
</svg>`;
}
