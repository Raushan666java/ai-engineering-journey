import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function vwrap(text: string, max: number): string[] {
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

export function generateVisualExplanation(data: ConceptData): string {
  const w = 1000, h = 700;
  const boxes: string[] = [];
  let y = 50;

  // Title bar
  boxes.push(`  <rect x="40" y="${y}" width="${w - 80}" height="50" rx="8" fill="#2563eb"/>
  <text x="${w / 2}" y="${y + 32}" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 60))}</text>`);
  y += 70;

  // Sections
  const sections: { label: string; content: string; color: string; bg: string }[] = [];

  if (data.concepts.length > 0) {
    const first = data.concepts[0];
    sections.push({ label: 'Core Concept', content: `${first.term}: ${truncate(first.definition, 80)}`, color: '#1e40af', bg: '#dbeafe' });
  }

  if (data.architecture.length > 0) {
    sections.push({ label: 'Architecture', content: data.architecture.map(a => a.component).join(' → '), color: '#065f46', bg: '#d1fae5' });
  }

  if (data.workflow.length > 0) {
    sections.push({ label: 'Workflow', content: data.workflow.map(wf => wf.description).join(' → '), color: '#92400e', bg: '#fef3c7' });
  }

  if (data.formulas.length > 0) {
    sections.push({ label: 'Formulas', content: data.formulas.map(f => `${f.name}: ${f.expression}`).join(' | '), color: '#701a75', bg: '#fae8ff' });
  }

  if (data.examples.length > 0) {
    const firstEx = data.examples[0];
    sections.push({ label: 'Real-world Example', content: `${firstEx.title}: ${truncate(firstEx.description, 80)}`, color: '#1e40af', bg: '#dbeafe' });
  }

  sections.push({ label: 'Key Takeaway', content: truncate(data.mainTakeaway, 100), color: '#831843', bg: '#fce7f3' });

  // Draw sections as cards
  for (const sec of sections) {
    const bh = 55 + (sec.content.length > 60 ? 20 : 0);
    boxes.push(`  <rect x="60" y="${y}" width="${w - 120}" height="${bh}" rx="6" fill="${sec.bg}" stroke="${sec.color}" stroke-width="1.5"/>
    <rect x="60" y="${y}" width="8" height="${bh}" rx="3" fill="${sec.color}"/>
    <text x="85" y="${y + 22}" font-size="13" font-weight="bold" fill="${sec.color}" font-family="Arial, sans-serif">${sec.label}</text>`);
    const clines = vwrap(escapeXml(sec.content), 70);
    for (let i = 0; i < clines.length; i++) {
      boxes.push(`  <text x="85" y="${y + 42 + i * 18}" font-size="11" fill="#475569" font-family="Arial, sans-serif">${clines[i]}</text>`);
    }
    y += bh + 10;

    // Arrow between boxes (except last)
    if (sec !== sections[sections.length - 1]) {
      boxes.push(`  <line x1="${w / 2}" y1="${y - 5}" x2="${w / 2}" y2="${y + 5}" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>`);
      y += 20;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <rect width="${w}" height="${h}" fill="#ffffff" rx="6"/>
  <!-- Light grid -->
  <pattern id="vgrid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f8fafc" stroke-width="0.5"/>
  </pattern>
  <rect width="${w}" height="${h}" fill="url(#vgrid)"/>
  ${boxes.join('\n')}
  <!-- Footer note -->
  <text x="${w / 2}" y="${h - 12}" font-size="10" fill="#cbd5e1" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 80))}</text>
</svg>`;
}
