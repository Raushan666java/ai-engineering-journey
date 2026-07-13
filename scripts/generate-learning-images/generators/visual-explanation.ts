import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import {
  C, defs, card, badge, sectionTitle,
  iconBrain, iconDatabase, iconGear, iconCloud, iconCPU, iconLightning,
} from '../svg-utils';

function vwrap(text: string, max: number): string[] {
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

interface Section {
  label: string;
  color: string;
  bg: string;
  icon: (x: number, y: number, s: number, c: string) => string;
  contentLines: string[];
}

export function generateVisualExplanation(data: ConceptData): string {
  const w = 1000, h = 700;
  const boxes: string[] = [];
  let y = 40;

  // --- Title bar ---
  boxes.push(`  <rect x="40" y="${y}" width="${w - 80}" height="56" rx="10" fill="url(#gBlue)" filter="url(#shadowMd)"/>
  <text x="${w / 2}" y="${y + 36}" font-size="22" font-weight="bold" fill="${C.white}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 60))}</text>`);
  y += 76;

  // --- Build sections ---
  const sections: Section[] = [];

  if (data.concepts.length > 0) {
    const first = data.concepts[0];
    const clines = vwrap(escapeXml(`${first.term}: ${truncate(first.definition, 90)}`), 72);
    sections.push({
      label: 'Core Concept',
      color: C.primary,
      bg: C.primaryFaint,
      icon: iconBrain,
      contentLines: clines,
    });
  }

  if (data.architecture.length > 0) {
    const archStr = data.architecture.map(a => a.component).join(' → ');
    const alines = vwrap(escapeXml(truncate(archStr, 100)), 72);
    sections.push({
      label: 'Architecture',
      color: C.secondary,
      bg: C.secondaryLight,
      icon: iconDatabase,
      contentLines: alines,
    });
  }

  if (data.workflow.length > 0) {
    const wfStr = data.workflow.map(wf => `Step ${wf.step}: ${wf.description}`).join(' | ');
    const wlines = vwrap(escapeXml(truncate(wfStr, 110)), 72);
    sections.push({
      label: 'Workflow',
      color: C.warning,
      bg: C.warningLight,
      icon: iconGear,
      contentLines: wlines,
    });
  }

  if (data.formulas.length > 0) {
    const fmStr = data.formulas.map(f => `${f.name}: ${f.expression}`).join('  |  ');
    const flines = vwrap(escapeXml(truncate(fmStr, 110)), 72);
    sections.push({
      label: 'Formulas',
      color: C.purple,
      bg: C.purpleLight,
      icon: iconCPU,
      contentLines: flines,
    });
  }

  if (data.examples.length > 0) {
    const firstEx = data.examples[0];
    const exStr = `${firstEx.title}: ${truncate(firstEx.description, 90)}`;
    const elines = vwrap(escapeXml(truncate(exStr, 100)), 72);
    sections.push({
      label: 'Real-world Example',
      color: C.pink,
      bg: C.pinkLight,
      icon: iconCloud,
      contentLines: elines,
    });
  }

  if (data.mainTakeaway) {
    const tlines = vwrap(escapeXml(truncate(data.mainTakeaway, 110)), 72);
    sections.push({
      label: 'Key Takeaway',
      color: C.primaryDark,
      bg: C.primaryFaint,
      icon: iconLightning,
      contentLines: tlines,
    });
  }

  // --- Draw each section card ---
  for (const sec of sections) {
    const cardH = Math.max(60, 32 + sec.contentLines.length * 18);
    const iconSize = 24;
    const iconX = 70;
    const iconY = y + 8;

    // Card background with left accent bar
    boxes.push(`  <g filter="url(#shadowSm)">
    <rect x="60" y="${y}" width="${w - 120}" height="${cardH}" rx="8" fill="${sec.bg}"/>
    <rect x="60" y="${y}" width="6" height="${cardH}" rx="3" fill="${sec.color}"/>
    <rect x="60" y="${y}" width="${w - 120}" height="${cardH}" rx="8" fill="none" stroke="${sec.color}" stroke-width="0.5" opacity="0.2"/>
  </g>`);

    // Section icon
    boxes.push(`  ${sec.icon(iconX, iconY, iconSize, sec.color)}`);

    // Section header
    const labelX = iconX + iconSize + 10;
    boxes.push(`  <text x="${labelX}" y="${y + 20}" font-size="14" font-weight="bold" fill="${sec.color}" font-family="Arial, sans-serif">${sec.label}</text>`);

    // Content lines
    for (let i = 0; i < sec.contentLines.length; i++) {
      boxes.push(`  <text x="${labelX}" y="${y + 38 + i * 18}" font-size="12" fill="${C.textMuted}" font-family="Arial, sans-serif">${sec.contentLines[i]}</text>`);
    }

    // Category badge in top-right of card
    if (sec.label === 'Key Takeaway') {
      boxes.push(`  ${badge('⭐ Important', w - 160, y + 14, sec.color)}`);
    }

    y += cardH + 6;

    // Downward arrow between cards (except last)
    if (sec !== sections[sections.length - 1]) {
      boxes.push(`  <line x1="${w / 2}" y1="${y}" x2="${w / 2}" y2="${y + 10}" stroke="${C.textLight}" stroke-width="2" stroke-linecap="round" marker-end="url(#arrowGray)"/>`);
      y += 20;
    }
  }

  // --- Fill remaining space if too short ---
  const minContentBottom = h - 30;
  if (y < minContentBottom) {
    boxes.push(`  <!-- Spacer -->`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)"/>
  <!-- Side decoration -->
  <rect x="0" y="0" width="6" height="${h}" fill="url(#gBlue)" opacity="0.15"/>
  <!-- Header shade -->
  <rect x="0" y="0" width="${w}" height="6" fill="url(#gBlue)" opacity="0.08"/>
  <!-- Cards and arrows -->
  ${boxes.join('\n')}
  <!-- Footer -->
  <text x="${w / 2}" y="${h - 12}" font-size="10" fill="${C.textLight}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 80))} · Visual Explanation</text>
</svg>`;
}
