import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, badge } from '../svg-utils';

function getLayerGrad(i: number, total: number): string {
  if (i === 0) return 'url(#gBlue)';
  if (i === total - 1) return 'url(#gGreen)';
  const mid = ['url(#gPurple)', 'url(#gOrange)', 'url(#gBlue)'];
  return mid[(i - 1) % mid.length];
}

function getLayerColor(i: number, total: number): string {
  if (i === 0) return C.primary;
  if (i === total - 1) return C.secondary;
  const mid = [C.purple, C.warning, C.primary];
  return mid[(i - 1) % mid.length];
}

export function generateArchitecture(data: ConceptData): string {
  const w = 800, h = 600;
  const parts: string[] = [];
  const layers: { label: string; desc: string }[] = [];

  // Build layers from architecture data or fall back
  if (data.architecture.length >= 2) {
    for (const a of data.architecture) {
      layers.push({ label: a.component, desc: truncate(a.description, 50) });
    }
  } else if (data.workflow.length >= 2) {
    for (const wf of data.workflow) {
      layers.push({ label: wf.description.slice(0, 22), desc: '' });
    }
  } else {
    const names = data.concepts.slice(0, 6);
    for (const n of names) {
      layers.push({ label: n.term, desc: truncate(n.definition, 40) });
    }
  }

  if (layers.length === 0) {
    layers.push({ label: 'Input Layer', desc: 'Data enters the system' });
    layers.push({ label: 'Processing Layer', desc: 'Core logic executes' });
    layers.push({ label: 'Output Layer', desc: 'Results are produced' });
  }

  // Cap and size dynamically
  const maxLayers = Math.min(layers.length, 8);
  const safeLayers = layers.slice(0, maxLayers);
  const lh = maxLayers > 6 ? 46 : 56;
  const gap = maxLayers > 6 ? 12 : 16;
  const totalH = maxLayers * (lh + gap);
  const startY = Math.max(70, (h - totalH) / 2 + 10);
  const cx = w / 2;
  const lw = 320;

  // Draw layers
  for (let i = 0; i < maxLayers; i++) {
    const layer = safeLayers[i];
    const y = startY + i * (lh + gap);
    const isPill = i === 0 || i === maxLayers - 1;
    const grad = getLayerGrad(i, maxLayers);
    const color = getLayerColor(i, maxLayers);
    const rx = isPill ? lh / 2 : 8;

    parts.push(`  <!-- Layer ${i + 1}: ${escapeXml(layer.label)} -->
    <rect x="${cx - lw / 2}" y="${y}" width="${lw}" height="${lh}" rx="${rx}" fill="${grad}" filter="url(#shadowMd)"/>
    <rect x="${cx - lw / 2}" y="${y}" width="${lw}" height="${lh}" rx="${rx}" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.25"/>
    <text x="${cx}" y="${y + 23}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(layer.label)}</text>
    <text x="${cx}" y="${y + 42}" font-size="11" fill="#ffffff" opacity="0.85" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(layer.desc)}</text>`);

    // Downward arrow between layers
    if (i < maxLayers - 1) {
      const ax = cx;
      const ay1 = y + lh + 4;
      const ay2 = y + lh + gap - 4;
      parts.push(`  <!-- Arrow ${i + 1} → ${i + 2} -->
    <line x1="${ax}" y1="${ay1}" x2="${ax}" y2="${ay2}" stroke="${C.textLight}" stroke-width="2" marker-end="url(#arrowGray)"/>`);
    }
  }

  // Side label "DATA FLOW" rotated
  const sideX = cx - lw / 2 - 28;
  const sideY = startY + totalH / 2;
  parts.push(`  <!-- Data flow side label -->
  <g transform="translate(${sideX}, ${sideY}) rotate(-90)">
    <rect x="-44" y="-14" width="88" height="28" rx="14" fill="${C.primaryLight}"/>
    <text x="0" y="5" font-size="10" font-weight="bold" fill="${C.primary}" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="2">DATA FLOW</text>
  </g>`);

  // Add badge for number of layers
  parts.push(`  ${badge(`${maxLayers} Layers`, cx + lw / 2 + 12, 44, C.textMuted)}`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${defs()}
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#lineGrid)" opacity="0.35"/>
  <!-- Title -->
  <text x="${cx}" y="36" font-size="18" font-weight="bold" fill="${C.text}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 55))}</text>
  <rect x="${cx - 30}" y="46" width="60" height="3" rx="1.5" fill="${C.primary}"/>
${parts.join('\n')}
</svg>`;
}
