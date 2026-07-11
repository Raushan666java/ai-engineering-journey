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

export function generateStickyNoteSVG(topic: Topic): string {
  const title = truncate(escapeXml(topic.heading), 35);

  const points = topic.keyPoints.length >= 2 ? topic.keyPoints.slice(0, 4) : [];
  if (points.length === 0 && topic.keyInsight) {
    points.push(topic.keyInsight);
  }
  if (points.length === 0) {
    points.push('Important concept');
    points.push('Key learning objective');
    points.push('Practical application');
  }

  const innerX = 40;
  const innerY = 60;
  const innerW = SVG_WIDTH - 80;
  const innerH = SVG_HEIGHT - 90;

  const content: string[] = [];

  // Title
  const titleLines = wrapLines(title, 22);
  let currentY = innerY + 28;
  for (const line of titleLines) {
    content.push(`    <text x="${innerX + 16}" y="${currentY}" font-size="16" font-weight="bold" fill="#1a1a2e" font-family="Arial, sans-serif">${line}</text>`);
    currentY += 22;
  }

  currentY += 10;

  // Dividers
  content.push(`    <line x1="${innerX + 16}" y1="${currentY - 4}" x2="${innerX + innerW - 16}" y2="${currentY - 4}" stroke="#E8C840" stroke-width="1"/>`);

  // Points with checkmarks
  for (let i = 0; i < points.length; i++) {
    const lines = wrapLines(escapeXml(truncate(points[i], 70)), 28);
    for (let j = 0; j < lines.length; j++) {
      const prefix = j === 0 ? `\u2713  ` : '    ';
      content.push(`    <text x="${innerX + 16}" y="${currentY + 16}" font-size="13" fill="#333" font-family="Arial, sans-serif">${prefix}${lines[j]}</text>`);
      currentY += 20;
    }
  }

  // Insight at bottom
  if (topic.keyInsight) {
    currentY = Math.max(currentY + 6, innerY + innerH - 36);
    content.push(`    <line x1="${innerX + 16}" y1="${currentY - 4}" x2="${innerX + innerW - 16}" y2="${currentY - 4}" stroke="#E8C840" stroke-width="1"/>`);
    const insightLines = wrapLines(escapeXml(truncate(topic.keyInsight, 65)), 26);
    for (const line of insightLines) {
      content.push(`    <text x="${innerX + 16}" y="${currentY + 16}" font-size="11" fill="#666" font-family="Arial, sans-serif" font-style="italic">${line}</text>`);
      currentY += 16;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="115%" height="115%">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Shadow envelope -->
  <rect x="24" y="26" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" rx="3" fill="#00000020"/>
  <!-- Main sticky note -->
  <g filter="url(#shadow)" transform="rotate(1.5 ${SVG_WIDTH / 2} ${SVG_HEIGHT / 2})">
    <rect x="22" y="22" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" rx="3" fill="#FFF8DC" stroke="#E8D44D" stroke-width="1"/>
    <!-- Folded corner effect -->
    <path d="M${SVG_WIDTH - 22},${22 + 40} L${SVG_WIDTH - 22 - 40},${22} L${SVG_WIDTH - 22},${22}" fill="#F0E68C" opacity="0.6"/>
    <!-- Inner content area -->
    <rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" rx="2" fill="none" stroke="#FFF3B0" stroke-width="1"/>
${content.join('\n')}
  </g>
  <!-- Push pin -->
  <g transform="translate(${SVG_WIDTH / 2}, 18)">
    <circle cx="0" cy="0" r="8" fill="#DC2626" stroke="#991B1B" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="3" fill="#FCA5A5"/>
  </g>
</svg>`;
}
