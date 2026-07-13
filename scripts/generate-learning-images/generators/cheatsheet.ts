import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, badge, sectionTitle, card } from '../svg-utils';

function wrap(text: string, max: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = cur ? cur + ' ' + w : w;
    }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

export function generateCheatsheet(data: ConceptData): string {
  const w = 600;
  const h = 900;
  const parts: string[] = [];

  const margin = 28;
  const colGap = 16;
  const colW = (w - margin * 2 - colGap) / 2; // ~264
  const pad = 10;

  const leftX = margin;
  const rightX = leftX + colW + colGap;
  const dividerX = leftX + colW + colGap / 2;

  // ── Title section ──
  const titleY = 68;
  parts.push(`  <text x="${w / 2}" y="${titleY}" font-size="18" font-weight="bold" fill="${C.text}" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="0.5">${escapeXml(truncate(data.title, 44))}</text>`);

  const badgeY = titleY + 24;
  if (data.keywords.length > 0) {
    const cat = data.keywords[0].category || data.keywords[0].term;
    const bw = cat.length * 7 + 20;
    parts.push(`  <rect x="${(w - bw) / 2}" y="${badgeY - 10}" width="${bw}" height="20" rx="10" fill="${C.primary}" opacity="0.10"/>
      <text x="${w / 2}" y="${badgeY + 4}" font-size="10" font-weight="bold" fill="${C.primary}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(cat)}</text>`);
  }

  // ── Top section divider ──
  const topSectionTop = badgeY + 22;

  // ──── LEFT COLUMN: Key Concepts ────
  const topSectionHeight = 340;
  const topSectionBottom = topSectionTop + topSectionHeight;

  parts.push(`  <g filter="url(#shadowSm)">${card(leftX, topSectionTop, colW, topSectionHeight, C.primary)}</g>`);
  parts.push(`  ${sectionTitle('Key Concepts', leftX + pad, topSectionTop + 20, C.primary)}`);

  let ly = topSectionTop + 34;
  for (const c of data.concepts.slice(0, 8)) {
    if (ly > topSectionBottom - 18) break;
    const term = escapeXml(c.term);
    const def = escapeXml(truncate(c.definition, 58));
    const lines = wrap(`${term}: ${def}`, 26);
    for (const l of lines) {
      if (ly > topSectionBottom - 18) break;
      parts.push(`  <text x="${leftX + pad + 4}" y="${ly}" font-size="9" fill="${C.text}" font-family="Arial, sans-serif">${l}</text>`);
      ly += 13;
    }
    ly += 3;
  }

  // ──── RIGHT COLUMN: Formulas & Tips ────
  parts.push(`  <g filter="url(#shadowSm)">${card(rightX, topSectionTop, colW, topSectionHeight, C.secondary)}</g>`);
  parts.push(`  ${sectionTitle('Formulas & Tips', rightX + pad, topSectionTop + 20, C.secondary)}`);

  let ry = topSectionTop + 34;
  for (const f of data.formulas.slice(0, 5)) {
    if (ry > topSectionBottom - 18) break;
    parts.push(`  <text x="${rightX + pad + 4}" y="${ry}" font-size="9" font-weight="bold" fill="${C.secondary}" font-family="Arial, sans-serif">${escapeXml(f.name)}</text>`);
    ry += 13;
    const expr = escapeXml(truncate(f.expression, 40));
    const eLines = wrap(expr, 26);
    for (const el of eLines) {
      if (ry > topSectionBottom - 18) break;
      parts.push(`  <text x="${rightX + pad + 4}" y="${ry}" font-size="8" fill="${C.textMuted}" font-family="Arial, sans-serif" font-style="italic">${el}</text>`);
      ry += 12;
    }
    ry += 4;
  }

  // ── Horizontal divider between top and bottom sections ──
  const midDividerY = topSectionBottom + 8;
  parts.push(`  <line x1="${margin + 10}" y1="${midDividerY}" x2="${w - margin - 10}" y2="${midDividerY}" stroke="${C.border}" stroke-width="0.5" stroke-dasharray="4,3"/>`);

  // ── Bottom section ──
  const bottomSectionTop = midDividerY + 8;
  const bottomSectionHeight = h - bottomSectionTop - 44;

  // ──── LEFT COLUMN: Interview Prep ────
  parts.push(`  <g filter="url(#shadowSm)">${card(leftX, bottomSectionTop, colW, bottomSectionHeight, C.danger)}</g>`);
  parts.push(`  ${sectionTitle('Interview Prep', leftX + pad, bottomSectionTop + 20, C.danger)}`);

  let by = bottomSectionTop + 34;
  for (const iq of data.interviewQuestions.slice(0, 3)) {
    if (by > h - 56) break;
    const q = escapeXml(iq.question);
    const a = escapeXml(truncate(iq.answer, 58));
    parts.push(`  <text x="${leftX + pad + 4}" y="${by}" font-size="9" font-weight="bold" fill="${C.danger}" font-family="Arial, sans-serif">Q:</text>`);
    const qLines = wrap(q, 24);
    let qy = by;
    for (const l of qLines) {
      parts.push(`  <text x="${leftX + pad + 14}" y="${qy}" font-size="8" fill="${C.text}" font-family="Arial, sans-serif">${l}</text>`);
      qy += 12;
    }
    by = qy + 1;
    const aLines = wrap(a, 24);
    for (const l of aLines) {
      if (by > h - 56) break;
      parts.push(`  <text x="${leftX + pad + 14}" y="${by}" font-size="7" fill="${C.textMuted}" font-family="Arial, sans-serif">${l}</text>`);
      by += 11;
    }
    by += 3;
  }

  // ──── RIGHT COLUMN: Common Mistakes ────
  parts.push(`  <g filter="url(#shadowSm)">${card(rightX, bottomSectionTop, colW, bottomSectionHeight, C.warning)}</g>`);
  parts.push(`  ${sectionTitle('Common Mistakes', rightX + pad, bottomSectionTop + 20, C.warning)}`);

  let my = bottomSectionTop + 34;
  for (const m of data.commonMistakes.slice(0, 5)) {
    if (my > h - 56) break;
    const mistake = escapeXml(m.mistake);
    parts.push(`  <text x="${rightX + pad + 4}" y="${my}" font-size="10" fill="${C.warning}" font-family="Arial, sans-serif">⚠</text>`);
    const mLines = wrap(mistake, 24);
    let my2 = my;
    for (const l of mLines) {
      parts.push(`  <text x="${rightX + pad + 16}" y="${my2}" font-size="8" fill="${C.text}" font-family="Arial, sans-serif">${l}</text>`);
      my2 += 12;
    }
    my = my2 + 3;
    if (m.correction) {
      const corr = escapeXml(truncate(m.correction, 55));
      const cLines = wrap(corr, 24);
      for (const l of cLines) {
        if (my > h - 56) break;
        parts.push(`  <text x="${rightX + pad + 16}" y="${my}" font-size="7" fill="${C.textMuted}" font-family="Arial, sans-serif" font-style="italic">→ ${l}</text>`);
        my += 11;
      }
    }
    my += 2;
  }

  // ── Footer ──
  parts.push(`  <text x="${w / 2}" y="${h - 20}" font-size="9" fill="${C.textLight}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 50))} — Quick Reference · AI Engineering Journey</text>`);

  // ── Algorithms column ──
  // If there's spare room in the bottom-left for a small algo tip
  const algoEndY = bottomSectionTop + bottomSectionHeight;
  if (data.algorithms.length > 0 && by < algoEndY - 30) {
    parts.push(`  <text x="${leftX + pad + 4}" y="${by}" font-size="8" font-weight="bold" fill="${C.primary}" font-family="Arial, sans-serif">Algo: ${escapeXml(truncate(data.algorithms[0].name, 22))}</text>`);
    by += 11;
    const descLines = wrap(escapeXml(truncate(data.algorithms[0].description, 55)), 24);
    for (const l of descLines) {
      if (by > algoEndY - 4) break;
      parts.push(`  <text x="${leftX + pad + 4}" y="${by}" font-size="7" fill="${C.textMuted}" font-family="Arial, sans-serif">${l}</text>`);
      by += 10;
    }
  }

  // ── Assemble SVG ──
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="${C.white}"/>
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#lineGrid)"/>
  <!-- Top accent bar -->
  <rect x="0" y="0" width="${w}" height="4" fill="url(#gBlue)"/>
  <!-- Column divider (dashed vertical) -->
  <line x1="${dividerX}" y1="${topSectionTop - 4}" x2="${dividerX}" y2="${h - 40}" stroke="${C.border}" stroke-width="1" stroke-dasharray="5,4"/>
  ${parts.join('\n')}
</svg>`;
}
