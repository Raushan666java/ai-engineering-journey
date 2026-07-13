import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, badge, iconBrain, iconLightning, iconGear } from '../svg-utils';

export function generateHeroBanner(data: ConceptData): string {
  const w = 1200, h = 400;
  const title = escapeXml(truncate(data.title, 80));
  const subtitle = escapeXml(truncate(data.subtitle || data.mainTakeaway, 120));

  // Decorative circles in top-right quadrant
  const decorativeCircles: string[] = [];
  const circleColors = [C.primary, C.primaryDark, '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];
  const positions = [
    { cx: 950, cy: 60, r: 45 },
    { cx: 1050, cy: 100, r: 60 },
    { cx: 1130, cy: 50, r: 35 },
    { cx: 990, cy: 180, r: 50 },
    { cx: 1100, cy: 220, r: 40 },
    { cx: 920, cy: 130, r: 25 },
    { cx: 1150, cy: 140, r: 30 },
    { cx: 1020, cy: 280, r: 20 },
  ];
  for (const p of positions) {
    const ci = positions.indexOf(p) % circleColors.length;
    decorativeCircles.push(
      `  <circle cx="${p.cx}" cy="${p.cy}" r="${p.r}" fill="${circleColors[ci]}" opacity="0.08"/>`
    );
  }

  // Slightly larger accent circle
  decorativeCircles.push(
    `  <circle cx="1080" cy="320" r="80" fill="${C.primary}" opacity="0.04"/>`
  );

  // Stats as pills using badge()
  const statsPills = [
    { label: `${data.concepts.length} Concepts`, color: C.primary },
    { label: `${data.algorithms.length} Algorithms`, color: C.secondary },
    { label: `${data.formulas.length} Formulas`, color: C.warning },
    { label: `${data.workflow.length} Steps`, color: C.purple },
  ];

  const statsHtml = statsPills.map((s, i) => {
    const sx = 60 + i * 155;
    return badge(s.label, sx, h - 135, s.color);
  }).join('\n    ');

  // Keyword tags at bottom
  const keywordTags = data.keywords.slice(0, 6).map(k =>
    `    <rect x="${60 + data.keywords.indexOf(k) * 130}" y="${h - 78}" width="${120}" height="${28}" rx="14" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="0.5" filter="url(#shadowSm)"/>
     <text x="${120 + data.keywords.indexOf(k) * 130}" y="${h - 60}" font-size="11" fill="${C.primaryDark}" text-anchor="middle" font-weight="600" font-family="Arial, sans-serif">${escapeXml(k.term.slice(0, 16))}</text>`
  ).join('\n');

  // Icons as decoration
  const iconDecor = [
    iconBrain(1080, 50, 40, C.primary),
    iconLightning(940, 80, 28, C.warning),
    iconGear(1120, 200, 32, C.secondary),
    iconBrain(980, 250, 36, C.purple),
  ].join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)"/>
  <!-- Decorative shapes -->
  <rect x="${w - 300}" y="-50" width="400" height="500" rx="30" fill="${C.primary}" opacity="0.03" transform="rotate(10 ${w - 100} 200)"/>
  <rect x="${w - 200}" y="-30" width="300" height="${h + 60}" rx="40" fill="${C.primaryDark}" opacity="0.03" transform="rotate(-5 ${w - 50} 200)"/>
  ${decorativeCircles.join('\n')}
  ${iconDecor}
  <!-- Accent bar left -->
  <rect x="0" y="0" width="8" height="${h}" fill="url(#gBlue)"/>
  <!-- Title -->
  <text x="60" y="120" font-size="32" font-weight="bold" fill="${C.text}" font-family="Arial, sans-serif">${title}</text>
  <!-- Subtitle -->
  <text x="60" y="168" font-size="16" fill="${C.textMuted}" font-family="Arial, sans-serif">${subtitle}</text>
  <!-- Divider -->
  <line x1="60" y1="200" x2="260" y2="200" stroke="url(#gBlue)" stroke-width="3" stroke-linecap="round"/>
  <!-- Stats row -->
  <g transform="translate(0, 0)">
    ${statsHtml}
  </g>
  <!-- Keyword tags -->
  ${keywordTags}
  <!-- Brand watermark -->
  <text x="${w - 20}" y="${h - 12}" font-size="10" fill="${C.textLight}" text-anchor="end" font-family="Arial, sans-serif" opacity="0.5">ai-engineering-journey</text>
</svg>`;
}
