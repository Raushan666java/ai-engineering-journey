import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, sectionTitle, badge, iconBrain, iconLightning } from '../svg-utils';

function wrap(text: string, max: number): string[] {
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

export function generateHandwrittenNotes(data: ConceptData): string {
  const w = 600, h = 800;
  const ff = "'Segoe Print', 'Comic Sans MS', cursive";
  const lines: string[] = [];
  let y = 100;

  // --- Title ---
  const titleLines = wrap(escapeXml(truncate(data.title, 55)), 32);
  for (const tl of titleLines) {
    lines.push(`    <text x="65" y="${y}" font-size="22" font-weight="bold" fill="${C.text}" font-family="${ff}">${tl}</text>`);
    y += 34;
  }
  y += 4;
  // Decorative title underline
  lines.push(`    <line x1="60" y1="${y}" x2="${w - 50}" y2="${y}" stroke="${C.primary}" stroke-width="2.5" stroke-linecap="round"/>`);
  lines.push(`    <line x1="60" y1="${y + 4}" x2="${w - 200}" y2="${y + 4}" stroke="${C.primary}" stroke-width="1" stroke-linecap="round" opacity="0.3"/>`);
  y += 28;

  // Helper to draw a section
  function drawSection(
    title: string,
    color: string,
    icon: string,
    items: { label: string; body: string }[],
    maxChars: number,
    maxItems: number
  ): void {
    if (items.length === 0) return;
    // Section header with icon badge
    lines.push(`    ${sectionTitle(title, 60, y, color)}`);
    y += 24;

    for (const item of items.slice(0, maxItems)) {
      const tw = wrap(escapeXml(`${item.label}${item.body ? ': ' + item.body : ''}`), maxChars);
      for (const t of tw) {
        if (t.startsWith(escapeXml(item.label))) {
          const rest = t.slice(escapeXml(item.label).length);
          lines.push(`    <text x="65" y="${y}" font-size="13" fill="${C.text}" font-family="${ff}"><tspan font-weight="bold" fill="${color}">${escapeXml(item.label)}</tspan>${rest}</text>`);
        } else {
          lines.push(`    <text x="80" y="${y}" font-size="12" fill="${C.textMuted}" font-family="${ff}">${t}</text>`);
        }
        y += 22;
      }
    }
    y += 6;
  }

  // --- Key Definitions (blue) ---
  drawSection(
    'Key Definitions',
    C.primary,
    iconBrain(0, 0, 0, C.primary),
    data.concepts.map(c => ({ label: c.term, body: truncate(c.definition, 80) })),
    38,
    4
  );

  // --- Formulas (red) ---
  if (data.formulas.length > 0) {
    lines.push(`    ${sectionTitle('Formulas', 60, y, C.danger)}`);
    y += 24;
    for (const f of data.formulas.slice(0, 3)) {
      lines.push(`    <text x="65" y="${y}" font-size="13" fill="${C.text}" font-family="${ff}"><tspan font-weight="bold" fill="${C.danger}">${escapeXml(f.name)}</tspan>: ${escapeXml(f.expression)}</text>`);
      y += 22;
      // Description below formula
      if (f.description) {
        const descLines = wrap(escapeXml(truncate(f.description, 60)), 42);
        for (const dl of descLines) {
          lines.push(`    <text x="80" y="${y}" font-size="11" fill="${C.textMuted}" font-family="${ff}" font-style="italic">${dl}</text>`);
          y += 18;
        }
      }
    }
    y += 6;
  }

  // --- Workflow (green) ---
  if (data.workflow.length > 0) {
    lines.push(`    ${sectionTitle('Workflow', 60, y, C.secondary)}`);
    y += 24;
    for (const wf of data.workflow.slice(0, 4)) {
      lines.push(`    <text x="65" y="${y}" font-size="13" fill="${C.text}" font-family="${ff}"><tspan fill="${C.secondary}" font-weight="bold">${wf.step}.</tspan> ${escapeXml(truncate(wf.description, 68))}</text>`);
      y += 22;
      if (wf.details) for (const d of wf.details.slice(0, 2)) {
        const dl = wrap(escapeXml(truncate(d, 64)), 42);
        for (const dli of dl) {
          lines.push(`    <text x="85" y="${y}" font-size="11" fill="${C.textMuted}" font-family="${ff}">→ ${dli}</text>`);
          y += 18;
        }
      }
    }
    y += 6;
  }

  // --- Interview Tip (pink box) ---
  if (data.interviewQuestions.length > 0) {
    const iq = data.interviewQuestions[0];
    const tipH = 50;
    lines.push(`    <rect x="55" y="${y - 4}" width="${w - 110}" height="${tipH}" rx="8" fill="${C.pinkLight}" stroke="${C.pink}" stroke-width="0.5" filter="url(#shadowSm)"/>`);
    lines.push(`    <rect x="55" y="${y - 4}" width="4" height="${tipH}" rx="2" fill="${C.pink}"/>`);
    lines.push(`    <text x="68" y="${y + 14}" font-size="12" font-weight="bold" fill="${C.pink}" font-family="${ff}">Interview Tip</text>`);
    const iqLines = wrap(escapeXml(truncate(iq.question, 85)), 42);
    for (let i = 0; i < iqLines.length; i++) {
      lines.push(`    <text x="68" y="${y + 34 + i * 16}" font-size="11" fill="${C.text}" font-family="${ff}">${iqLines[i]}</text>`);
    }
    y += tipH + 16;
  }

  // --- Key takeaway at bottom ---
  y = Math.max(y, h - 80);
  lines.push(`    <line x1="60" y1="${y - 4}" x2="${w - 50}" y2="${y - 4}" stroke="${C.border}" stroke-width="1"/>`);
  lines.push(`    <text x="65" y="${y + 16}" font-size="12" font-style="italic" fill="${C.textMuted}" font-family="${ff}">💡 ${escapeXml(truncate(data.mainTakeaway, 85))}</text>`);

  // --- Guide lines (faint) across page ---
  const guideLines = Array.from({ length: 28 }, (_, i) => {
    const gy = 85 + i * 28;
    return gy < h - 25 ? `  <line x1="55" y1="${gy}" x2="${w - 45}" y2="${gy}" stroke="${C.border}" stroke-width="0.5" opacity="0.6"/>` : '';
  }).filter(Boolean).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Paper background -- warm cream -->
  <rect width="${w}" height="${h}" fill="#FEFCF8" rx="6"/>
  <rect width="${w}" height="${h}" fill="url(#lineGrid)" opacity="0.3"/>
  <!-- Red margin line -->
  <line x1="50" y1="10" x2="50" y2="${h - 10}" stroke="#fecaca" stroke-width="2"/>
  <!-- Guide lines -->
${guideLines}
  <!-- Notebook hole punch dots -->
  <circle cx="30" cy="40" r="5" fill="#f1f5f9" stroke="${C.border}" stroke-width="0.5"/>
  <circle cx="30" cy="${h / 2}" r="5" fill="#f1f5f9" stroke="${C.border}" stroke-width="0.5"/>
  <circle cx="30" cy="${h - 40}" r="5" fill="#f1f5f9" stroke="${C.border}" stroke-width="0.5"/>
  <!-- Page number -->
  <text x="${w / 2}" y="${h - 14}" font-size="10" fill="${C.textLight}" text-anchor="middle" font-family="Arial, sans-serif">— 1 —</text>
  <!-- Content -->
${lines.join('\n')}
</svg>`;
}
