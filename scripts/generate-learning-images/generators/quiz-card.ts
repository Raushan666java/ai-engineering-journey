import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';

function qwrap(text: string, max: number): string[] {
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

export function generateQuizCard(data: ConceptData): string {
  const w = 600, h = 800;
  const parts: string[] = [];
  let y = 60;

  const questions = data.quizQuestions.slice(0, 4);

  parts.push(`  <text x="${w / 2}" y="${y}" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(truncate(data.title, 40))}</text>
  <text x="${w / 2}" y="${y + 22}" font-size="12" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">Self-Test Quiz — ${questions.length} Questions</text>`);
  y += 50;

  if (questions.length === 0) {
    const sampleQs = data.interviewQuestions.slice(0, 3);
    for (let i = 0; i < sampleQs.length; i++) {
      const iq = sampleQs[i];
      if (y > h - 80) break;
      const qlines = qwrap(escapeXml(iq.question), 50);
      const qh = qlines.length * 16 + 40;
      parts.push(`  <rect x="30" y="${y}" width="${w - 60}" height="${qh}" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="45" y="${y + 20}" font-size="10" font-weight="bold" fill="#2563eb" font-family="Arial, sans-serif">Q${i + 1}</text>
      ${qlines.map((l, li) => `  <text x="45" y="${y + 36 + li * 16}" font-size="11" fill="#1e293b" font-family="Arial, sans-serif">${l}</text>`).join('\n')}
      <text x="45" y="${y + qh - 12}" font-size="10" fill="#059669" font-family="Arial, sans-serif">Answer: ${escapeXml(truncate(iq.answer, 50))}</text>`);
      y += qh + 12;
    }
    parts.push(`  <text x="${w / 2}" y="${y + 12}" font-size="11" fill="#94a3b8" text-anchor="middle" font-family="Arial, sans-serif">Difficulty: Mixed | Source: ${escapeXml(truncate(data.title, 30))}</text>`);
  } else {
    for (let qi = 0; qi < questions.length; qi++) {
      const q = questions[qi];
      if (y > h - 100) break;
      const qlines = qwrap(escapeXml(q.question), 50);
      const options = q.options.slice(0, 4);
      const oh = 14 * (options.length + 1);
      const qh = qlines.length * 16 + oh + 40;

      parts.push(`  <rect x="30" y="${y}" width="${w - 60}" height="${qh}" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <!-- Difficulty badge -->
      <rect x="${w - 90}" y="${y + 8}" width="50" height="18" rx="9" fill="#dbeafe"/>
      <text x="${w - 65}" y="${y + 21}" font-size="9" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">Q${qi + 1}</text>
      ${qlines.map((l, li) => `  <text x="45" y="${y + 22 + li * 16}" font-size="11" fill="#1e293b" font-family="Arial, sans-serif">${l}</text>`).join('\n')}
      ${options.map((o, oi) => `  <text x="55" y="${y + 30 + qlines.length * 16 + oi * 14}" font-size="10" fill="#475569" font-family="Arial, sans-serif">${String.fromCharCode(65 + oi)}. ${escapeXml(truncate(o, 45))}</text>`).join('\n')}
      <text x="45" y="${y + qh - 12}" font-size="10" fill="#059669" font-family="Arial, sans-serif">✓ ${escapeXml(truncate(q.explanation, 55))}</text>`);
      y += qh + 12;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#ffffff" rx="6"/>
  <!-- Top decoration -->
  <rect x="0" y="0" width="${w}" height="4" fill="url(#qgrad)"/>
  <defs>
    <linearGradient id="qgrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  ${parts.join('\n')}
</svg>`;
}
