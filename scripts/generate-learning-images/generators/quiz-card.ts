import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, badge } from '../svg-utils';

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

function difficultyLabel(idx: number, total: number): string {
  if (total <= 2) return 'Mixed';
  const ratio = idx / total;
  if (ratio < 0.33) return 'Easy';
  if (ratio < 0.66) return 'Medium';
  return 'Hard';
}

function difficultyColor(label: string): string {
  switch (label) {
    case 'Easy': return C.secondary;
    case 'Medium': return C.warning;
    case 'Hard': return C.danger;
    default: return C.textMuted;
  }
}

export function generateQuizCard(data: ConceptData): string {
  const w = 600;
  const h = 800;
  const parts: string[] = [];

  // ── Title section ──
  const titleY = 64;
  parts.push(`  <text x="${w / 2}" y="${titleY}" font-size="20" font-weight="bold" fill="${C.text}" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="0.3">${escapeXml(truncate(data.title, 44))}</text>`);

  const questions = data.quizQuestions.slice(0, 4);
  const qCount = questions.length > 0 ? questions.length : Math.min(data.interviewQuestions.length, 3);
  const subtitle = qCount > 0
    ? `Self-Test Quiz — ${qCount} Question${qCount > 1 ? 's' : ''}`
    : 'Knowledge Check';

  parts.push(`  <text x="${w / 2}" y="${titleY + 24}" font-size="12" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif">${subtitle}</text>`);

  // Badge: difficulty overview or topic
  if (data.keywords.length > 0) {
    const cat = data.keywords[0].category || data.keywords[0].term;
    const bw = cat.length * 7 + 20;
    parts.push(`  <rect x="${(w - bw) / 2}" y="${titleY + 32}" width="${bw}" height="18" rx="9" fill="${C.primaryLight}"/>
      <text x="${w / 2}" y="${titleY + 44}" font-size="9" font-weight="bold" fill="${C.primaryDark}" text-anchor="middle" font-family="Arial, sans-serif">${escapeXml(cat)}</text>`);
  }

  const cardStartY = titleY + 60;

  if (questions.length === 0) {
    // Fallback: use interview questions as quiz items
    const sampleQs = data.interviewQuestions.slice(0, 3);
    for (let i = 0; i < sampleQs.length; i++) {
      const iq = sampleQs[i];
      const qy = cardStartY + i * 220;

      if (qy > h - 100) break;

      const qLines = wrap(escapeXml(iq.question), 52);
      const cardH = Math.max(180, qLines.length * 16 + 80);

      // Card background with shadow
      parts.push(`  <g filter="url(#shadowMd)">
        <rect x="30" y="${qy}" width="${w - 60}" height="${cardH}" rx="10" fill="${C.white}"/>
        <rect x="30" y="${qy}" width="${w - 60}" height="${cardH}" rx="10" fill="none" stroke="${C.border}" stroke-width="0.5"/>
      </g>`);

      // Number badge
      const numBadgeX = 48;
      const numBadgeY = qy + 22;
      parts.push(`  <rect x="${numBadgeX}" y="${numBadgeY - 10}" width="28" height="20" rx="10" fill="${C.primaryLight}"/>
        <text x="${numBadgeX + 14}" y="${numBadgeY + 4}" font-size="10" font-weight="bold" fill="${C.primaryDark}" text-anchor="middle" font-family="Arial, sans-serif">Q${i + 1}</text>`);

      // Difficulty badge
      const diff = difficultyLabel(i, sampleQs.length);
      const dc = difficultyColor(diff);
      const dbw = diff.length * 7 + 16;
      const dbX = w - 50 - dbw;
      parts.push(`  <rect x="${dbX}" y="${qy + 10}" width="${dbw}" height="18" rx="9" fill="${dc}" opacity="0.10"/>
        <text x="${dbX + dbw / 2}" y="${qy + 23}" font-size="8" font-weight="bold" fill="${dc}" text-anchor="middle" font-family="Arial, sans-serif">${diff}</text>`);

      // Question text
      for (let li = 0; li < qLines.length; li++) {
        parts.push(`  <text x="78" y="${qy + 36 + li * 16}" font-size="11" fill="${C.text}" font-family="Arial, sans-serif">${qLines[li]}</text>`);
      }

      // Answer
      const answerY = qy + cardH - 14;
      parts.push(`  <line x1="48" y1="${answerY - 8}" x2="${w - 48}" y2="${answerY - 8}" stroke="${C.border}" stroke-width="0.5" stroke-dasharray="3,2"/>
        <text x="48" y="${answerY}" font-size="10" font-weight="bold" fill="${C.secondary}" font-family="Arial, sans-serif">✓ ${escapeXml(truncate(iq.answer, 55))}</text>`);
    }

    // Progress bar
    const progY = cardStartY + Math.min(sampleQs.length, 3) * 220 + 20;
    if (progY < h - 40) {
      const barW = 200;
      const barX = (w - barW) / 2;
      parts.push(`  <rect x="${barX}" y="${progY}" width="${barW}" height="4" rx="2" fill="${C.border}"/>
        <rect x="${barX}" y="${progY}" width="${barW * (sampleQs.length / 3)}" height="4" rx="2" fill="url(#gBlue)"/>
        <text x="${w / 2}" y="${progY + 20}" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif">Progress: ${sampleQs.length}/${Math.max(sampleQs.length, 3)}</text>`);
    }
  } else {
    for (let qi = 0; qi < questions.length; qi++) {
      const q = questions[qi];
      const qy = cardStartY + qi * 195;

      if (qy > h - 120) break;

      const qLines = wrap(escapeXml(q.question), 50);
      const options = q.options.slice(0, 4);
      const optCount = options.length;
      const cardH = Math.max(170, qLines.length * 16 + optCount * 14 + 74);

      // Card background with shadow
      parts.push(`  <g filter="url(#shadowMd)">
        <rect x="30" y="${qy}" width="${w - 60}" height="${cardH}" rx="10" fill="${C.white}"/>
        <rect x="30" y="${qy}" width="${w - 60}" height="${cardH}" rx="10" fill="none" stroke="${C.border}" stroke-width="0.5"/>
      </g>`);

      // Number badge
      const numBadgeX = 48;
      const numBadgeY = qy + 22;
      parts.push(`  <rect x="${numBadgeX}" y="${numBadgeY - 10}" width="30" height="20" rx="10" fill="${C.primaryLight}"/>
        <text x="${numBadgeX + 15}" y="${numBadgeY + 4}" font-size="10" font-weight="bold" fill="${C.primaryDark}" text-anchor="middle" font-family="Arial, sans-serif">Q${qi + 1}</text>`);

      // Difficulty badge
      const diff = difficultyLabel(qi, questions.length);
      const dc = difficultyColor(diff);
      const dbw = diff.length * 7 + 16;
      const dbX = w - 50 - dbw;
      parts.push(`  <rect x="${dbX}" y="${qy + 10}" width="${dbw}" height="18" rx="9" fill="${dc}" opacity="0.10"/>
        <text x="${dbX + dbw / 2}" y="${qy + 23}" font-size="8" font-weight="bold" fill="${dc}" text-anchor="middle" font-family="Arial, sans-serif">${diff}</text>`);

      // Question text
      for (let li = 0; li < qLines.length; li++) {
        parts.push(`  <text x="80" y="${qy + 36 + li * 16}" font-size="11" fill="${C.text}" font-family="Arial, sans-serif" font-weight="600">${qLines[li]}</text>`);
      }

      const optStartY = qy + 38 + qLines.length * 16;

      // Options A/B/C/D
      for (let oi = 0; oi < options.length; oi++) {
        const oy = optStartY + oi * 14;
        const letter = String.fromCharCode(65 + oi);
        const isCorrect = oi === q.answerIndex;
        const optColor = isCorrect ? C.secondary : C.textMuted;
        const optWeight = isCorrect ? 'bold' : 'normal';
        parts.push(`  <text x="80" y="${oy}" font-size="10" fill="${optColor}" font-weight="${optWeight}" font-family="Arial, sans-serif">
          <tspan font-weight="bold" fill="${C.text}">${letter}.</tspan> ${escapeXml(truncate(options[oi], 44))}
        </text>`);
      }

      // Divider before answer
      const answerY = qy + cardH - 20;
      parts.push(`  <line x1="48" y1="${answerY - 8}" x2="${w - 48}" y2="${answerY - 8}" stroke="${C.border}" stroke-width="0.5" stroke-dasharray="3,2"/>`);

      // Correct answer and explanation with green accent
      const correctLetter = String.fromCharCode(65 + q.answerIndex);
      const expl = escapeXml(truncate(q.explanation, 52));
      parts.push(`  <text x="48" y="${answerY}" font-size="10" font-weight="bold" fill="${C.secondary}" font-family="Arial, sans-serif">✓ ${correctLetter}. ${expl}</text>`);
    }

    // Progress indicator
    const lastQEnd = cardStartY + questions.length * 195;
    const progY2 = lastQEnd + 16;
    if (progY2 < h - 36) {
      const barW = 200;
      const barX = (w - barW) / 2;
      parts.push(`  <rect x="${barX}" y="${progY2}" width="${barW}" height="4" rx="2" fill="${C.border}"/>
        <rect x="${barX}" y="${progY2}" width="${barW}" height="4" rx="2" fill="url(#gBlue)"/>
        <text x="${w / 2}" y="${progY2 + 20}" font-size="9" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif">Progress: ${questions.length}/4 · Source: ${escapeXml(truncate(data.title, 28))}</text>`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="${C.white}"/>
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <rect width="${w}" height="${h}" fill="url(#dotGrid)"/>
  <!-- Top gradient bar -->
  <rect x="0" y="0" width="${w}" height="4" fill="url(#gBlue)"/>
  <!-- Extra subtle decorative accent -->
  <rect x="0" y="4" width="${w}" height="1" fill="${C.primaryDark}" opacity="0.06"/>
  ${parts.join('\n')}
</svg>`;
}
