export const C = {
  primary: '#2563eb',
  primaryDark: '#1e40af',
  primaryLight: '#dbeafe',
  primaryFaint: '#eff6ff',
  secondary: '#059669',
  secondaryLight: '#d1fae5',
  warning: '#d97706',
  warningLight: '#fef3c7',
  danger: '#dc2626',
  dangerLight: '#fef2f2',
  purple: '#7c3aed',
  purpleLight: '#f3e8ff',
  pink: '#db2777',
  pinkLight: '#fce7f3',
  text: '#1e293b',
  textMuted: '#64748b',
  textLight: '#94a3b8',
  border: '#e2e8f0',
  bgLight: '#f8fafc',
  white: '#ffffff',
};

export function defs(): string {
  return `<defs>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <linearGradient id="gGreen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="gOrange" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="gPurple" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <linearGradient id="gBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowSm" x="-5%" y="-5%" width="115%" height="115%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.08"/>
    </filter>
    <filter id="shadowMd" x="-8%" y="-8%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.12"/>
    </filter>
    <filter id="shadowLg" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.15"/>
    </filter>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
    <marker id="arrowGray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
    <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="0.8" fill="#e2e8f0"/>
    </pattern>
    <pattern id="lineGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
    </pattern>
  </defs>`;
}

export function badge(label: string, x: number, y: number, color: string): string {
  const w = label.length * 7 + 16;
  return `<rect x="${x}" y="${y - 10}" width="${w}" height="20" rx="10" fill="${color}" opacity="0.12"/>
    <text x="${x + w / 2}" y="${y + 4}" font-size="10" font-weight="bold" fill="${color}" text-anchor="middle" font-family="Arial, sans-serif">${label}</text>`;
}

export function sectionTitle(text: string, x: number, y: number, color: string): string {
  return `<text x="${x}" y="${y}" font-size="14" font-weight="bold" fill="${color}" font-family="Arial, sans-serif">${text}</text>
    <line x1="${x}" y1="${y + 3}" x2="${x + 100}" y2="${y + 3}" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`;
}

export function card(x: number, y: number, w: number, h: number, color: string): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${color}" opacity="0.06"/>
    <rect x="${x}" y="${y}" width="4" height="${h}" rx="2" fill="${color}"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.15"/>`;
}

export function iconDatabase(x: number, y: number, size: number, color: string): string {
  const s = size;
  return `<g transform="translate(${x},${y})">
    <ellipse cx="${s / 2}" cy="${s * 0.25}" rx="${s * 0.4}" ry="${s * 0.12}" fill="${color}" opacity="0.3"/>
    <path d="M${s * 0.1},${s * 0.25} L${s * 0.1},${s * 0.75} C${s * 0.1},${s * 0.85} ${s * 0.9},${s * 0.85} ${s * 0.9},${s * 0.75} L${s * 0.9},${s * 0.25}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M${s * 0.1},${s * 0.5} C${s * 0.1},${s * 0.6} ${s * 0.9},${s * 0.6} ${s * 0.9},${s * 0.5}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  </g>`;
}

export function iconGear(x: number, y: number, size: number, color: string): string {
  const s = size / 2;
  return `<g transform="translate(${x + size / 2},${y + size / 2})">
    <circle cx="0" cy="0" r="${s * 0.35}" fill="none" stroke="${color}" stroke-width="2"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
      const rad = a * Math.PI / 180;
      const ox = Math.cos(rad) * s * 0.5;
      const oy = Math.sin(rad) * s * 0.5;
      return `<rect x="${ox - 2}" y="${oy - 3}" width="4" height="6" rx="1" fill="${color}" transform="rotate(${a} ${ox} ${oy})"/>`;
    }).join('\n    ')}
  </g>`;
}

export function iconCPU(x: number, y: number, size: number, color: string): string {
  return `<rect x="${x + 2}" y="${y + 2}" width="${size - 4}" height="${size - 4}" rx="3" fill="none" stroke="${color}" stroke-width="1.5"/>
    <rect x="${x + size * 0.25}" y="${y + size * 0.25}" width="${size * 0.5}" height="${size * 0.5}" rx="2" fill="${color}" opacity="0.15"/>
    ${[0, 90, 180, 270].map((a, i) => {
      const cx = x + size / 2 + (i < 2 ? (i === 0 ? -1 : 1) * size * 0.5 : 0);
      const cy = y + size / 2 + (i >= 2 ? (i === 2 ? -1 : 1) * size * 0.5 : 0);
      return `<line x1="${cx}" y1="${cy - 4}" x2="${cx}" y2="${cy + 4}" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`;
    }).join('\n    ')}`;
}

export function iconCloud(x: number, y: number, size: number, color: string): string {
  return `<g transform="translate(${x},${y})">
    <path d="M${size * 0.3},${size * 0.7} A${size * 0.2},${size * 0.2} 0 0,1 ${size * 0.45},${size * 0.35} A${size * 0.25},${size * 0.25} 0 0,1 ${size * 0.75},${size * 0.4} A${size * 0.15},${size * 0.15} 0 0,1 ${size * 0.85},${size * 0.7} Z" fill="${color}" opacity="0.15" stroke="${color}" stroke-width="1.2"/>
  </g>`;
}

export function iconBrain(x: number, y: number, size: number, color: string): string {
  return `<g transform="translate(${x},${y})">
    <ellipse cx="${size * 0.35}" cy="${size * 0.5}" rx="${size * 0.2}" ry="${size * 0.3}" fill="none" stroke="${color}" stroke-width="1.2"/>
    <ellipse cx="${size * 0.65}" cy="${size * 0.5}" rx="${size * 0.2}" ry="${size * 0.3}" fill="none" stroke="${color}" stroke-width="1.2"/>
    <path d="M${size * 0.35},${size * 0.25} Q${size * 0.5},${size * 0.15} ${size * 0.65},${size * 0.25}" fill="none" stroke="${color}" stroke-width="1.2"/>
    <path d="M${size * 0.35},${size * 0.75} Q${size * 0.5},${size * 0.85} ${size * 0.65},${size * 0.75}" fill="none" stroke="${color}" stroke-width="1.2"/>
  </g>`;
}

export function iconLightning(x: number, y: number, size: number, color: string): string {
  return `<polygon points="${x + size * 0.5},${y} ${x + size * 0.25},${y + size * 0.5} ${x + size * 0.42},${y + size * 0.5} ${x + size * 0.38},${y + size} ${x + size * 0.65},${y + size * 0.45} ${x + size * 0.48},${y + size * 0.45}" fill="${color}" opacity="0.7"/>`;
}
