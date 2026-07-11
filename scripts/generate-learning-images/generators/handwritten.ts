import { Topic } from '../parser';
import { SVG_WIDTH, SVG_HEIGHT } from '../config';
import { escapeXml, truncate } from '../utils';

function wrapLines(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function generateHandwrittenSVG(topic: Topic): string {
  const title = truncate(topic.heading, 45);
  const points = topic.keyPoints.length >= 2
    ? topic.keyPoints.slice(0, 3)
    : ['Learn the core concepts', 'Understand the principles', 'Apply in practice'];

  const titleWords = wrapLines(escapeXml(title), 28);
  const pointLines = points.map(p => wrapLines(escapeXml(truncate(p, 60)), 35)).flat();

  const baseY = 90;
  const titleLines = titleWords;
  const bulletStartY = baseY + titleLines.length * 36 + 20;
  const pointStartY = bulletStartY;

  const lineSpacing = 28;
  let currentY = pointStartY;

  const pointTexts: string[] = [];
  for (const line of pointLines) {
    pointTexts.push(`    <text x="60" y="${currentY}" font-size="16" fill="#1a1a2e" font-family="Caveat, 'Segoe Print', cursive">${line}</text>`);
    currentY += lineSpacing;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
    </style>
  </defs>
  <!-- Paper background -->
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="#F8F6F0" rx="4"/>
  <!-- Red margin line -->
  <line x1="50" y1="0" x2="50" y2="${SVG_HEIGHT}" stroke="#E8B4B4" stroke-width="1.5"/>
  <!-- Blue guide lines -->
  ${Array.from({ length: 13 }, (_, i) => {
    const y = 70 + i * 28;
    return `  <line x1="55" y1="${y}" x2="${SVG_WIDTH - 30}" y2="${y}" stroke="#D4D4E8" stroke-width="0.8"/>`;
  }).join('\n')}
  <!-- Title -->
  ${titleLines.map((line, i) =>
    `  <text x="60" y="${baseY + i * 36}" font-size="22" font-weight="bold" fill="#1a1a2e" font-family="Caveat, 'Segoe Print', cursive" transform="rotate(-0.5 60 ${baseY + i * 36})">${line}</text>`
  ).join('\n')}
  <line x1="55" y1="${baseY + titleLines.length * 36 + 5}" x2="${SVG_WIDTH - 30}" y2="${baseY + titleLines.length * 36 + 5}" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Bullet points -->
  ${pointTexts.join('\n')}
  <!-- Footer note -->
  <text x="60" y="${Math.min(currentY + 30, SVG_HEIGHT - 30)}" font-size="13" fill="#666" font-family="Caveat, 'Segoe Print', cursive" font-style="italic">
    — ${escapeXml(truncate(topic.keyInsight || 'Key concept in this chapter', 55))}
  </text>
</svg>`;
}
