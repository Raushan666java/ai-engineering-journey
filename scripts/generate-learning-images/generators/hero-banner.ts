import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

export function generateHeroBanner(data: ConceptData): string {
  const w = 1200, h = 400;
  const title = escapeXml(truncate(data.title, 80));
  const subtitle = escapeXml(truncate(data.subtitle || data.mainTakeaway, 120));

  const iconSegments: string[] = [];
  const iconColors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];
  for (let i = 0; i < 6; i++) {
    const cx = 1000 + Math.random() * 160;
    const cy = 50 + Math.random() * 300;
    const r = 20 + Math.random() * 50;
    iconSegments.push(`  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${iconColors[i % iconColors.length]}" opacity="0.${3 + Math.floor(Math.random() * 4)}"/>`);
  }

  const keywordTags = data.keywords.slice(0, 6).map(k =>
    `    <rect x="${60 + data.keywords.indexOf(k) * 130}" y="${h - 80}" width="${120}" height="${28}" rx="14" fill="#dbeafe" stroke="#93c5fd" stroke-width="1"/>
     <text x="${120 + data.keywords.indexOf(k) * 130}" y="${h - 62}" font-size="11" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(k.term.slice(0, 16))}</text>`
  ).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <!-- Accent bar -->
  <rect x="0" y="0" width="8" height="${h}" fill="url(#accent)"/>
  <!-- Decorative shapes -->
  <rect x="${w - 300}" y="-50" width="400" height="500" rx="30" fill="#2563eb" opacity="0.03" transform="rotate(10 ${w - 100} 200)"/>
  <rect x="${w - 200}" y="-30" width="300" height="${h + 60}" rx="40" fill="#3b82f6" opacity="0.04" transform="rotate(-5 ${w - 50} 200)"/>
  ${iconSegments.join('\n')}
  <!-- Title -->
  <text x="60" y="120" font-size="42" font-weight="bold" fill="#1e293b" font-family="Arial, sans-serif">${title}</text>
  <!-- Subtitle -->
  <text x="60" y="170" font-size="18" fill="#64748b" font-family="Arial, sans-serif">${subtitle}</text>
  <!-- Divider -->
  <line x1="60" y1="200" x2="260" y2="200" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <!-- Stats row -->
  <g transform="translate(60, ${h - 130})">
    <rect x="0" y="0" width="140" height="36" rx="6" fill="#2563eb" opacity="0.1"/>
    <text x="70" y="23" font-size="12" fill="#2563eb" text-anchor="middle" font-weight="bold" font-family="Arial, sans-serif">${data.concepts.length} Concepts</text>
    <rect x="155" y="0" width="140" height="36" rx="6" fill="#059669" opacity="0.1"/>
    <text x="225" y="23" font-size="12" fill="#059669" text-anchor="middle" font-weight="bold" font-family="Arial, sans-serif">${data.algorithms.length} Algorithms</text>
    <rect x="310" y="0" width="140" height="36" rx="6" fill="#d97706" opacity="0.1"/>
    <text x="380" y="23" font-size="12" fill="#d97706" text-anchor="middle" font-weight="bold" font-family="Arial, sans-serif">${data.formulas.length} Formulas</text>
  </g>
  <!-- Keyword tags -->
  ${keywordTags}
</svg>`;
}
