import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs } from '../svg-utils';

export function generateComparison(data: ConceptData): string {
  const w = 900, h = 600;

  // ── Build comparison table data ──
  let headers: string[] = ['Feature', 'Concept A', 'Concept B'];
  let rows: string[][] = [];

  if (data.comparisonTables.length > 0) {
    const t = data.comparisonTables[0];
    headers = t.headers.slice(0, 4);
    rows = t.rows.slice(0, 8).map(r => r.slice(0, headers.length).map(c => truncate(c, 35)));
  } else if (data.concepts.length >= 2) {
    headers = ['Aspect', data.concepts[0].term, data.concepts[1].term];
    const c1Def = truncate(data.concepts[0].definition, 35);
    const c2Def = data.concepts[1] ? truncate(data.concepts[1].definition, 35) : '';
    const topics = data.keywords.slice(2, 6);
    rows = [
      ['Definition', c1Def, c2Def],
      ['Category', data.concepts[0].term.length < 20 ? (data.keywords[0]?.category || 'Core') : (data.keywords[1]?.category || 'Advanced'),
        data.concepts[1]?.term.length < 20 ? (data.keywords[2]?.category || 'Core') : (data.keywords[3]?.category || 'Advanced')],
    ];
    const aspects = ['Key Feature', 'Use Case', 'Advantage'];
    for (let i = 0; i < Math.min(topics.length, 3); i++) {
      rows.push([
        aspects[i] || `Aspect ${i + 1}`,
        truncate(topics[i]?.term || '', 35),
        truncate(data.keywords[i + 3]?.term || '', 35),
      ]);
    }
  } else {
    rows = [['Coming Soon', 'Content being generated', '—']];
  }

  // Ensure row cells match header count
  rows = rows.map(r => {
    const filled = [...r];
    while (filled.length < headers.length) filled.push('—');
    return filled.slice(0, headers.length);
  });

  // ── Layout calculations ──
  const colWidths = headers.map((_, i) =>
    i === 0 ? 170 : Math.floor((w - 200) / (headers.length - 1))
  );
  const rowH = 36;
  const headerH = 44;
  const totalW = colWidths.reduce((a, b) => a + b, 0);
  const startX = (w - totalW) / 2;
  const titleArea = 74;
  const startY = titleArea;
  const tableH = headerH + rows.length * rowH;

  const parts: string[] = [];

  // ── Table wrapper with shadow ──
  parts.push(`  <!-- Table wrapper shadow -->
  <rect x="${startX}" y="${startY}" width="${totalW}" height="${tableH}" rx="10" fill="none" filter="url(#shadowSm)"/>
  <rect x="${startX}" y="${startY}" width="${totalW}" height="${tableH}" rx="10" fill="${C.white}"/>`);

  // ── Clip path for table cells ──
  parts.push(`  <clipPath id="tClip">
    <rect x="${startX}" y="${startY}" width="${totalW}" height="${tableH}" rx="10"/>
  </clipPath>
  <g clip-path="url(#tClip)">`);

  // ── Header row ──
  let hx = startX;
  for (let i = 0; i < headers.length; i++) {
    const cw = colWidths[i];
    const headerFill = i === 0
      ? 'url(#gBlue)'
      : 'url(#gBlue)';
    parts.push(`  <!-- Header: ${escapeXml(headers[i])} -->
    <rect x="${hx}" y="${startY}" width="${cw}" height="${headerH}" fill="${headerFill}"/>
    <text x="${hx + cw / 2}" y="${startY + headerH / 2 + 5}" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(headers[i])}</text>`);
    hx += cw;
  }

  // ── Separator line under header ──
  parts.push(`  <line x1="${startX}" y1="${startY + headerH}" x2="${startX + totalW}" y2="${startY + headerH}" stroke="${C.border}" stroke-width="1"/>`);

  // ── Data rows ──
  for (let ri = 0; ri < rows.length; ri++) {
    const row = rows[ri];
    const ry = startY + headerH + ri * rowH;
    const isEven = ri % 2 === 0;
    const bgColor = isEven ? C.bgLight : C.white;

    let rx = startX;
    for (let ci = 0; ci < headers.length; ci++) {
      const cw = colWidths[ci];
      const isFirstCol = ci === 0;
      const displayText = escapeXml(row[ci] || '—');

      parts.push(`  <!-- Row ${ri + 1}, Col ${ci + 1} -->
    <rect x="${rx}" y="${ry}" width="${cw}" height="${rowH}" fill="${bgColor}"/>
    <text x="${rx + (isFirstCol ? 14 : cw / 2)}" y="${ry + rowH / 2 + 4}" font-size="${isFirstCol ? 11 : 10}" font-weight="${isFirstCol ? 'bold' : 'normal'}" fill="${isFirstCol ? C.text : C.textMuted}" text-anchor="${isFirstCol ? 'start' : 'middle'}" font-family="Arial, sans-serif">${displayText}</text>`);
      rx += cw;
    }

    // Row separator
    if (ri < rows.length - 1) {
      parts.push(`  <line x1="${startX}" y1="${ry + rowH}" x2="${startX + totalW}" y2="${ry + rowH}" stroke="${C.border}" stroke-width="0.5" opacity="0.6"/>`);
    }
  }

  // ── Bottom border ──
  parts.push(`  <line x1="${startX}" y1="${startY + tableH}" x2="${startX + totalW}" y2="${startY + tableH}" stroke="${C.border}" stroke-width="1"/>`);

  // Close clip group
  parts.push(`  </g>`);

  // ── Decorative corner accents ──
  const accentSize = 12;
  parts.push(`  <!-- Corner accents -->
  <path d="M${startX + accentSize},${startY} L${startX},${startY} L${startX},${startY + accentSize}" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  <path d="M${startX + totalW - accentSize},${startY} L${startX + totalW},${startY} L${startX + totalW},${startY + accentSize}" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  <path d="M${startX + accentSize},${startY + tableH} L${startX},${startY + tableH} L${startX},${startY + tableH - accentSize}" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  <path d="M${startX + totalW - accentSize},${startY + tableH} L${startX + totalW},${startY + tableH} L${startX + totalW},${startY + tableH - accentSize}" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>`);

  // ── Row count badge ──
  parts.push(`  <rect x="${startX + totalW + 8}" y="${startY + 8}" width="40" height="20" rx="10" fill="${C.primaryLight}"/>
  <text x="${startX + totalW + 28}" y="${startY + 22}" font-size="9" font-weight="bold" fill="${C.primary}" text-anchor="middle" font-family="Arial, sans-serif">${rows.length} rows</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${defs()}
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)" opacity="0.4"/>
  <!-- Title -->
  <text x="${w / 2}" y="34" font-size="20" font-weight="bold" fill="${C.text}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 55))}</text>
  <!-- Decorative underline -->
  <line x1="${w / 2 - 80}" y1="44" x2="${w / 2 + 80}" y2="44" stroke="${C.border}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="${w / 2 - 30}" y1="44" x2="${w / 2 + 30}" y2="44" stroke="${C.primary}" stroke-width="3" stroke-linecap="round"/>
  <!-- Subtitle if comparison table named -->
  ${data.comparisonTables.length > 0 ? `  <text x="${w / 2}" y="62" font-size="12" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.comparisonTables[0].title, 50))}</text>` : ''}
${parts.join('\n')}
</svg>`;
}
