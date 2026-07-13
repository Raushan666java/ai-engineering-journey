import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, iconDatabase, iconBrain, iconLightning, iconGear, iconCloud } from '../svg-utils';

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
  category: string;
  color: string;
  border: string;
  bg: string;
  x: number;
  y: number;
}

// Seeded pseudo-random rotation for determinism
function seedRot(index: number): number {
  return ((index * 7 + 13) % 11) - 5;
}

export function generateStickyNotes(data: ConceptData): string {
  const w = 800, h = 600;
  const notes: NoteDef[] = [];

  // --- Yellow: Definitions ---
  data.concepts.slice(0, 3).forEach((c, i) => {
    notes.push({
      title: c.term,
      body: truncate(c.definition, 60),
      category: 'definition',
      color: '#92400e',
      border: '#f59e0b',
      bg: '#FEF3C7',
      x: 30 + i * 195,
      y: 30,
    });
  });

  // --- Blue: Formulas ---
  data.formulas.slice(0, 2).forEach((f, i) => {
    notes.push({
      title: f.name,
      body: f.expression,
      category: 'formula',
      color: '#1e40af',
      border: '#3b82f6',
      bg: '#DBEAFE',
      x: 30 + i * 195,
      y: 210,
    });
  });

  // --- Pink: Interview ---
  data.interviewQuestions.slice(0, 2).forEach((iq, i) => {
    notes.push({
      title: 'Interview Q',
      body: truncate(iq.question, 55),
      category: 'interview',
      color: '#9d174d',
      border: '#ec4899',
      bg: '#FCE7F3',
      x: 420 + i * 195,
      y: 30,
    });
  });

  // --- Orange: Warnings ---
  data.commonMistakes.slice(0, 2).forEach((m, i) => {
    notes.push({
      title: '⚠ Warning',
      body: truncate(m.mistake, 55),
      category: 'warning',
      color: '#9a3412',
      border: '#f97316',
      bg: '#FFEDD5',
      x: 30 + i * 195,
      y: 390,
    });
  });

  // --- Purple: Keywords ---
  data.keywords.slice(0, 2).forEach((k, i) => {
    notes.push({
      title: k.term,
      body: k.category,
      category: 'keyword',
      color: '#581c87',
      border: '#a855f7',
      bg: '#F3E8FF',
      x: 420 + i * 195,
      y: 390,
    });
  });

  // Build sticky note SVGs
  const stickies = notes.slice(0, 11).map((n, i) => {
    const tilt = seedRot(i);
    const titleLines = swrap(escapeXml(n.title), 16);
    const bodyLines = swrap(escapeXml(n.body), 22);
    const nw = 175, nh = 155;
    let cy = n.y + 32;
    const txt: string[] = [];

    // Category icon dot
    txt.push(`    <circle cx="${n.x + nw - 14}" cy="${n.y + 14}" r="6" fill="${n.border}" opacity="0.3"/>`);

    for (const tl of titleLines) {
      txt.push(`    <text x="${n.x + 14}" y="${cy}" font-size="12" font-weight="bold" fill="${n.color}" font-family="Arial, sans-serif">${tl}</text>`);
      cy += 18;
    }
    cy += 2;
    for (const bl of bodyLines) {
      txt.push(`    <text x="${n.x + 14}" y="${cy}" font-size="10" fill="${C.textMuted}" font-family="Arial, sans-serif">${bl}</text>`);
      cy += 14;
    }

    // Fold corner effect (small triangle)
    const fold = `<path d="M${n.x + nw - 12},${n.y} L${n.x + nw},${n.y + 12} L${n.x + nw},${n.y} Z" fill="${n.bg}" stroke="${n.border}" stroke-width="0.3" opacity="0.6"/>`;

    // Pin/pushpin in top-left corner
    const pin = `<circle cx="${n.x + 12}" cy="${n.y + 12}" r="4" fill="${n.border}" opacity="0.4"/>`;

    return `<g transform="rotate(${tilt} ${n.x + nw / 2} ${n.y + nh / 2})" filter="url(#shadowMd)">
      <rect x="${n.x}" y="${n.y}" width="${nw}" height="${nh}" rx="3" fill="${n.bg}" stroke="${n.border}" stroke-width="0.8" opacity="0.96"/>
      <!-- Subtle gradient overlay for paper texture -->
      <rect x="${n.x}" y="${n.y}" width="${nw}" height="${nh}" rx="3" fill="url(#gBg)" opacity="0.08"/>
      ${fold}
      ${pin}
      ${txt.join('\n')}
    </g>`;
  }).join('\n\n');

  // Decorative icons scattered on desk
  const deskIcons = [
    iconDatabase(680, 40, 28, C.primary),
    iconCloud(720, 100, 24, C.secondary),
    iconBrain(580, 240, 30, C.purple),
    iconLightning(550, 180, 22, C.warning),
    iconGear(700, 310, 24, C.primaryDark),
  ].join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Desk background -->
  <rect width="${w}" height="${h}" fill="#f8fafc"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)"/>
  <!-- Wood grain horizontal bands -->
  <rect x="0" y="0" width="${w}" height="${h}" fill="#f1f5f9" opacity="0.15"/>
  <g opacity="0.12" stroke="#94a3b8" stroke-width="0.5" stroke-linecap="round">
    <line x1="0" y1="80" x2="${w}" y2="82"/>
    <line x1="0" y1="160" x2="${w}" y2="158"/>
    <line x1="0" y1="240" x2="${w}" y2="243"/>
    <line x1="0" y1="320" x2="${w}" y2="318"/>
    <line x1="0" y1="400" x2="${w}" y2="402"/>
    <line x1="0" y1="480" x2="${w}" y2="478"/>
    <line x1="0" y1="560" x2="${w}" y2="562"/>
  </g>
  <g opacity="0.08" stroke="#64748b" stroke-width="0.3" stroke-linecap="round">
    <line x1="50" y1="40" x2="${w - 30}" y2="42"/>
    <line x1="20" y1="120" x2="${w - 10}" y2="118"/>
    <line x1="90" y1="200" x2="${w - 40}" y2="202"/>
    <line x1="30" y1="280" x2="${w - 20}" y2="278"/>
    <line x1="60" y1="360" x2="${w - 50}" y2="362"/>
    <line x1="10" y1="440" x2="${w - 30}" y2="438"/>
    <line x1="40" y1="520" x2="${w - 10}" y2="522"/>
  </g>
  ${deskIcons}
  <!-- Sticky notes -->
  ${stickies}

  <!-- Coffee mug (bottom-right) -->
  <g transform="translate(710, 465)" filter="url(#shadowSm)">
    <!-- Mug body -->
    <rect x="0" y="12" width="44" height="50" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
    <!-- Handle -->
    <path d="M44,20 Q62,25 44,36" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Mug rim -->
    <ellipse cx="22" cy="12" rx="22" ry="7" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
    <!-- Coffee surface -->
    <ellipse cx="22" cy="12" rx="18" ry="4.5" fill="#1e293b" opacity="0.25"/>
    <!-- Steam -->
    <path d="M14,4 Q12,-6 16,-12" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
    <path d="M22,3 Q24,-5 20,-14" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.25" stroke-linecap="round"/>
    <path d="M30,5 Q28,-3 32,-10" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.2" stroke-linecap="round"/>
  </g>

  <!-- Pen (bottom-right) -->
  <g transform="translate(670, 525) rotate(-25)" filter="url(#shadowSm)">
    <rect x="0" y="0" width="85" height="6" rx="3" fill="${C.primary}"/>
    <rect x="0" y="0" width="12" height="6" rx="3" fill="${C.primaryDark}" opacity="0.6"/>
    <polygon points="85,0 96,3 85,6" fill="#1e293b"/>
    <rect x="80" y="1" width="5" height="4" rx="1" fill="#cbd5e1"/>
  </g>

  <!-- Title watermark -->
  <text x="${w / 2}" y="${h - 10}" font-size="11" fill="${C.textLight}" text-anchor="middle" font-family="Arial, sans-serif" opacity="0.7">${escapeXml(truncate(data.title, 60))}</text>
</svg>`;
}
