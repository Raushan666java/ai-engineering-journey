import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

export function generateComparison(data: ConceptData): string {
  const w = 900, h = 600;

  // Build comparison table data
  let headers: string[] = ['Feature', 'Concept A', 'Concept B'];
  let rows: string[][] = [];

  if (data.comparisonTables.length > 0) {
    const t = data.comparisonTables[0];
    headers = t.headers.slice(0, 4);
    rows = t.rows.slice(0, 8).map(r => r.slice(0, headers.length).map(c => truncate(c, 35)));
  } else if (data.concepts.length >= 2) {
    headers = ['Aspect', data.concepts[0].term, data.concepts[1].term];
    const aspects = ['Definition', 'Key Feature', 'Use Case', 'Advantage'];
    const c1Def = truncate(data.concepts[0].definition, 35);
    const c2Def = data.concepts[1] ? truncate(data.concepts[1].definition, 35) : '';
    const topics = data.keywords.slice(2, 6);
    rows = [
      ['Definition', c1Def, c2Def],
      ['Category', data.concepts[0].term.length < 20 ? data.keywords[0]?.category || 'Core' : data.keywords[1]?.category || 'Advanced', data.concepts[1]?.term.length < 20 ? data.keywords[2]?.category || 'Core' : data.keywords[3]?.category || 'Advanced'],
    ];
    for (let i = 0; i < Math.min(topics.length, 3); i++) {
      rows.push([aspects[i] || `Aspect ${i + 1}`, truncate(topics[i]?.term || '', 35), truncate(data.keywords[i + 3]?.term || '', 35)]);
    }
  } else {
    rows = [['Coming soon', 'Content being generated', '']];
  }

  const parts: string[] = [];

  // Draw table
  const colWidths = headers.map((_, i) => i === 0 ? 160 : (w - 200) / (headers.length - 1));
  const rowH = 36;
  const headerH = 44;
  const totalW = colWidths.reduce((a, b) => a + b, 0);
  const startX = (w - totalW) / 2;
  let startY = 90;

  // Header row
  let hx = startX;
  for (let i = 0; i < headers.length; i++) {
    const cw = colWidths[i];
    parts.push(`  <rect x="${hx}" y="${startY}" width="${cw}" height="${headerH}" rx="${i === 0 ? '8' : '0'}${i === headers.length - 1 ? ' 8 0' : ''}" fill="#2563eb"/>
    <text x="${hx + cw / 2}" y="${startY + headerH / 2 + 5}" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(headers[i])}</text>`);
    hx += cw;
  }
  startY += headerH;

  // Data rows
  for (let ri = 0; ri < rows.length; ri++) {
    const row = rows[ri];
    let rx = startX;
    const bg = ri % 2 === 0 ? '#f8fafc' : '#ffffff';

    for (let ci = 0; ci < Math.min(row.length, headers.length); ci++) {
      const cw = colWidths[ci];
      const isFirstCol = ci === 0;
      parts.push(`  <rect x="${rx}" y="${startY}" width="${cw}" height="${rowH}" fill="${bg}" stroke="#e2e8f0" stroke-width="0.5"/>
      <text x="${rx + 8}" y="${startY + rowH / 2 + 4}" font-size="${isFirstCol ? 11 : 10}" font-weight="${isFirstCol ? 'bold' : 'normal'}" fill="${isFirstCol ? '#1e293b' : '#475569'}" font-family="Arial, sans-serif">${escapeXml(row[ci] || '—')}</text>`);
      rx += cw;
    }
    startY += rowH;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#ffffff" rx="4"/>
  <!-- Title -->
  <text x="${w / 2}" y="50" font-size="20" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 50))}</text>
  <rect x="${w / 2 - 20}" y="60" width="40" height="3" rx="2" fill="#2563eb"/>
  <!-- Comparison table -->
  ${parts.join('\n')}
</svg>`;
}
