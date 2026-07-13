import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function swrap(text: string, max: number): string[] {
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

interface NoteDef {
  title: string;
  body: string;
  color: string;
  bg: string;
  x: number;
  y: number;
}

export function generateStickyNotes(data: ConceptData): string {
  const w = 800, h = 600;
  const notes: NoteDef[] = [];

  // Yellow: definitions
  data.concepts.slice(0, 3).forEach((c, i) => {
    notes.push({ title: c.term, body: truncate(c.definition, 60), color: '#92400e', bg: '#FEF3C7', x: 30 + i * 195, y: 30 });
  });

  // Blue: formulas
  data.formulas.slice(0, 2).forEach((f, i) => {
    notes.push({ title: f.name, body: f.expression, color: '#1e40af', bg: '#DBEAFE', x: 30 + i * 195, y: 210 });
  });

  // Pink: interview
  data.interviewQuestions.slice(0, 2).forEach((iq, i) => {
    notes.push({ title: 'Interview Q', body: truncate(iq.question, 55), color: '#9d174d', bg: '#FCE7F3', x: 420 + i * 195, y: 30 });
  });

  // Orange: mistakes
  data.commonMistakes.slice(0, 2).forEach((m, i) => {
    notes.push({ title: 'Warning', body: truncate(m.mistake, 55), color: '#9a3412', bg: '#FFEDD5', x: 30 + i * 195, y: 390 });
  });

  // Purple: keywords
  data.keywords.slice(0, 2).forEach((k, i) => {
    notes.push({ title: k.term, body: k.category, color: '#581c87', bg: '#F3E8FF', x: 420 + i * 195, y: 390 });
  });

  const stickies = notes.slice(0, 10).map((n, i) => {
    const tilt = (-3 + (i * 7) % 7 - 3).toString();
    const titleLines = swrap(escapeXml(n.title), 16);
    const bodyLines = swrap(escapeXml(n.body), 22);
    const nw = 175, nh = 160;
    let cy = n.y + 30;
    const txt: string[] = [];
    for (const tl of titleLines) {
      txt.push(`    <text x="${n.x + 12}" y="${cy}" font-size="12" font-weight="bold" fill="${n.color}" font-family="Arial, sans-serif">${tl}</text>`);
      cy += 18;
    }
    cy += 4;
    for (const bl of bodyLines) {
      txt.push(`    <text x="${n.x + 12}" y="${cy}" font-size="10" fill="#475569" font-family="Arial, sans-serif">${bl}</text>`);
      cy += 14;
    }
    return `<g transform="rotate(${tilt} ${n.x + nw / 2} ${n.y + nh / 2})" filter="url(#shadow)">
      <rect x="${n.x}" y="${n.y}" width="${nw}" height="${nh}" rx="4" fill="${n.bg}" stroke="${n.color}" stroke-width="1" opacity="0.95"/>
      ${txt.join('\n')}
    </g>`;
  }).join('\n\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.12"/>
    </filter>
  </defs>
  <!-- Desk background -->
  <rect width="${w}" height="${h}" fill="#f8fafc"/>
  <rect width="${w}" height="${h}" fill="#f1f5f9" opacity="0.3"/>
  <!-- Subtle wood grain lines -->
  <line x1="0" y1="${h / 2}" x2="${w}" y2="${h / 2}" stroke="#e2e8f0" stroke-width="0.5"/>
  <line x1="0" y1="${h / 2 + 20}" x2="${w}" y2="${h / 2 + 20}" stroke="#e2e8f0" stroke-width="0.3"/>
  <line x1="0" y1="${h / 2 - 20}" x2="${w}" y2="${h / 2 - 20}" stroke="#e2e8f0" stroke-width="0.3"/>
  <!-- Sticky notes -->
  ${stickies}
  <!-- Coffee mug -->
  <g transform="translate(710, 460)">
    <rect x="0" y="10" width="40" height="45" rx="5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
    <path d="M40,18 Q55,22 40,32" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <ellipse cx="20" cy="10" rx="20" ry="6" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
    <ellipse cx="20" cy="10" rx="16" ry="4" fill="#1e293b" opacity="0.2"/>
  </g>
  <!-- Pen -->
  <g transform="translate(680, 530) rotate(-30)">
    <rect x="0" y="0" width="80" height="5" rx="2" fill="#2563eb"/>
    <polygon points="80,0 90,2.5 80,5" fill="#1e293b"/>
  </g>
  <!-- Header -->
  <text x="${w / 2}" y="${h - 8}" font-size="11" fill="#94a3b8" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 60))}</text>
</svg>`;
}
