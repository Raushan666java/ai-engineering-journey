import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

export function generateSocialCard(data: ConceptData): string {
  const w = 1200, h = 630;
  const title = escapeXml(truncate(data.title, 70));
  const subtitle = escapeXml(truncate(data.subtitle || data.mainTakeaway, 100));

  const iconMap = [
    { label: 'C', n: data.concepts.length, color: '#2563eb' },
    { label: 'F', n: data.formulas.length, color: '#059669' },
    { label: 'A', n: data.algorithms.length, color: '#d97706' },
  ];

  const icons = iconMap.map((ic, i) => {
    const ix = 880 + i * 100;
    return `  <circle cx="${ix}" cy="340" r="30" fill="${ic.color}" opacity="0.15"/>
    <text x="${ix}" y="346" font-size="22" font-weight="bold" fill="${ic.color}" text-anchor="middle" font-family="Arial, sans-serif">${ic.n}</text>
    <text x="${ix}" y="366" font-size="11" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">${ic.label}</text>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
    <linearGradient id="sbar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#sbg)"/>
  <!-- Left accent block -->
  <rect x="0" y="0" width="12" height="${h}" fill="url(#sbar)"/>
  <!-- Bottom decorative bar -->
  <rect x="0" y="${h - 6}" width="${w}" height="6" fill="url(#sbar)" opacity="0.3"/>
  <!-- Decorative circles -->
  <circle cx="1050" cy="150" r="200" fill="#2563eb" opacity="0.03"/>
  <circle cx="1100" cy="500" r="150" fill="#3b82f6" opacity="0.04"/>
  <rect x="950" y="-30" width="320" height="250" rx="20" fill="#60a5fa" opacity="0.05" transform="rotate(8 1100 100)"/>
  <!-- Repository name -->
  <text x="60" y="70" font-size="14" fill="#94a3b8" font-family="Arial, sans-serif">AI Engineering Journey</text>
  <!-- Title -->
  <text x="60" y="180" font-size="48" font-weight="bold" fill="#1e293b" font-family="Arial, sans-serif">${title}</text>
  <!-- Subtitle -->
  <text x="60" y="240" font-size="22" fill="#64748b" font-family="Arial, sans-serif">${subtitle}</text>
  <!-- Divider -->
  <line x1="60" y1="280" x2="300" y2="280" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
  <!-- Stats -->
  ${icons}
  <!-- Bottom text -->
  <text x="60" y="${h - 40}" font-size="13" fill="#94a3b8" font-family="Arial, sans-serif">${data.keywords.slice(0, 4).map(k => k.term).join(' · ')}</text>
  <text x="${w - 40}" y="${h - 40}" font-size="12" fill="#cbd5e1" text-anchor="end" font-family="Arial, sans-serif">github.com/ai-engineering-journey</text>
</svg>`;
}
