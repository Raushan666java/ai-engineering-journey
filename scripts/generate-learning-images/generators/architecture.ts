import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

export function generateArchitecture(data: ConceptData): string {
  const w = 800, h = 600;
  const parts: string[] = [];
  const layers: { label: string; desc: string; items: string[] }[] = [];

  // Build layers from architecture data or fall back to concepts
  if (data.architecture.length >= 2) {
    for (const a of data.architecture) {
      layers.push({ label: a.component, desc: truncate(a.description, 50), items: [] });
    }
  } else if (data.workflow.length >= 2) {
    for (const wf of data.workflow) {
      layers.push({ label: wf.description.slice(0, 20), desc: '', items: [] });
    }
  } else {
    const names = data.concepts.slice(0, 5);
    for (let i = 0; i < names.length; i++) {
      layers.push({ label: names[i].term, desc: truncate(names[i].definition, 40), items: [] });
    }
  }

  if (layers.length === 0) {
    layers.push({ label: 'Input', desc: 'Data enters the system', items: [] });
    layers.push({ label: 'Processing', desc: 'Core logic executes', items: [] });
    layers.push({ label: 'Output', desc: 'Results are produced', items: [] });
  }

  const lw = 300, lh = 55;
  const totalH = layers.length * (lh + 16);
  const startY = (h - totalH) / 2;
  const cx = w / 2;
  const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

  for (let i = 0; i < layers.length; i++) {
    const l = layers[i];
    const y = startY + i * (lh + 16);
    const color = colors[Math.min(i, colors.length - 1)];
    parts.push(`  <rect x="${cx - lw / 2}" y="${y}" width="${lw}" height="${lh}" rx="${i === 0 || i === layers.length - 1 ? 12 : 8}" fill="${color}" opacity="0.15" stroke="${color}" stroke-width="2"/>
    <text x="${cx}" y="${y + 24}" font-size="15" font-weight="bold" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(l.label)}</text>
    <text x="${cx}" y="${y + 42}" font-size="11" fill="#475569" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(l.desc)}</text>`);
    if (i < layers.length - 1) {
      const arrowY = y + lh + 8;
      parts.push(`  <line x1="${cx}" y1="${y + lh}" x2="${cx}" y2="${arrowY}" stroke="#94a3b8" stroke-width="2" marker-end="url(#aarch)"/>`);
    }
  }

  // Side labels
  parts.push(`  <text x="${cx - lw / 2 - 10}" y="${startY + 12}" font-size="10" fill="#94a3b8" text-anchor="end" font-family="Arial, sans-serif" transform="rotate(-90 ${cx - lw / 2 - 10} ${startY + 12})">DATA FLOW</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <marker id="aarch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="abg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#abg)" rx="4"/>
  <!-- Title -->
  <text x="${cx}" y="36" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 50))}</text>
  <rect x="${cx - 25}" y="46" width="50" height="3" rx="2" fill="#2563eb"/>
  ${parts.join('\n')}
</svg>`;
}
