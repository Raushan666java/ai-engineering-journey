import { Topic } from '../parser';
import { SVG_WIDTH, SVG_HEIGHT } from '../config';
import { escapeXml, truncate } from '../utils';

interface Node {
  label: string;
  x: number;
  y: number;
  color: string;
}

function generateNodes(topic: Topic): { nodes: Node[]; edges: [number, number][] } {
  const nodes: Node[] = [];
  const edges: [number, number][] = [];

  const cx = SVG_WIDTH / 2;
  const cy = SVG_HEIGHT / 2;

  // Central node
  nodes.push({ label: truncate(escapeXml(topic.heading), 30), x: cx, y: 60, color: '#2563eb' });

  const points = topic.keyPoints.length >= 2 ? topic.keyPoints.slice(0, 4) : ['Core concept', 'Key principle', 'Important aspect'];
  const colors = ['#059669', '#d97706', '#dc2626', '#7c3aed'];
  const positions = [
    { x: cx - 200, y: 180 },
    { x: cx, y: 220 },
    { x: cx + 200, y: 180 },
    { x: cx - 100, y: 320 },
    { x: cx + 100, y: 320 },
  ];

  const count = Math.min(points.length, 5);
  for (let i = 0; i < count; i++) {
    const pos = positions[i];
    const color = colors[i % colors.length];
    nodes.push({
      label: truncate(escapeXml(points[i]), 25),
      x: pos.x,
      y: pos.y,
      color,
    });
    edges.push([0, i + 1]);
  }

  return { nodes, edges };
}

export function generateDiagramSVG(topic: Topic): string {
  const { nodes, edges } = generateNodes(topic);

  const nodeW = 180;
  const nodeH = 44;

  const edgeLines = edges.map(([from, to]) => {
    const f = nodes[from];
    const t = nodes[to];
    if (!f || !t) return '';
    const midX = f.x;
    const midY = (f.y + t.y) / 2;
    return `    <path d="M${f.x},${f.y + nodeH / 2} C${f.x},${midY} ${t.x},${midY} ${t.x},${t.y - nodeH / 2}" fill="none" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)"/>`;
  }).join('\n');

  const nodeRects = nodes.map((n, i) => {
    const textAnchor = 'middle';
    const textLines = n.label.length > 20
      ? [n.label.slice(0, Math.ceil(n.label.length / 2)), n.label.slice(Math.ceil(n.label.length / 2))]
      : [n.label];

    const rectX = n.x - nodeW / 2;
    const rectY = n.y - nodeH / 2;

    return `    <rect x="${rectX}" y="${rectY}" width="${nodeW}" height="${nodeH}" rx="8" fill="${n.color}" opacity="0.9"/>
    <text x="${n.x}" y="${n.y + 5}" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">${textLines[0]}${textLines[1] ? ` ${textLines[1]}` : ''}</text>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="#ffffff" rx="4"/>
  <!-- Grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
  </pattern>
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#grid)"/>
  <!-- Edges -->
${edgeLines}
  <!-- Nodes -->
${nodeRects}
  <!-- Insight footer -->
  <text x="${SVG_WIDTH / 2}" y="${SVG_HEIGHT - 20}" fill="#64748b" font-size="11" text-anchor="middle" font-family="Arial, sans-serif" font-style="italic">
    ${escapeXml(truncate(topic.keyInsight || 'Concept diagram', 60))}
  </text>
</svg>`;
}
