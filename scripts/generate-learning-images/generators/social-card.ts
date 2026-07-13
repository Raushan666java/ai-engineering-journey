import { ConceptData } from '../types';
import { escapeXml, truncate } from '../utils';
import { C, defs, badge } from '../svg-utils';

export function generateSocialCard(data: ConceptData): string {
  const w = 1200;
  const h = 630;
  const parts: string[] = [];

  const title = escapeXml(truncate(data.title, 72));
  const subtitle = escapeXml(truncate(data.subtitle || data.mainTakeaway, 110));

  // ── Stats for right-side circle badges ──
  const stats = [
    { label: 'Concepts', n: data.concepts.length, color: C.primary },
    { label: 'Formulas', n: data.formulas.length, color: C.secondary },
    { label: 'Algorithms', n: data.algorithms.length, color: C.purple },
  ];

  // ── Decorative background elements ──
  // Large circles
  parts.push(`  <circle cx="980" cy="120" r="260" fill="${C.primary}" opacity="0.03"/>`);
  parts.push(`  <circle cx="1080" cy="480" r="200" fill="${C.purple}" opacity="0.03"/>`);
  parts.push(`  <circle cx="150" cy="580" r="180" fill="${C.primary}" opacity="0.02"/>`);

  // Organic decorative blobs (rotated rects)
  parts.push(`  <rect x="860" y="-40" width="400" height="260" rx="40" fill="${C.primaryDark}" opacity="0.04" transform="rotate(6 1060 90)"/>`);
  parts.push(`  <rect x="920" y="440" width="320" height="200" rx="50" fill="${C.purple}" opacity="0.03" transform="rotate(-4 1080 540)"/>`);

  // Subtle line accents
  parts.push(`  <line x1="60" y1="520" x2="500" y2="520" stroke="${C.border}" stroke-width="0.5"/>`);

  // ── Left accent block ──
  parts.push(`  <rect x="0" y="0" width="14" height="${h}" fill="url(#gBlue)"/>`);
  // Bottom accent line
  parts.push(`  <rect x="14" y="${h - 4}" width="${w - 14}" height="4" fill="url(#gBlue)" opacity="0.30"/>`);

  // ── Top-left repository name ──
  parts.push(`  <text x="80" y="60" font-size="14" fill="${C.textLight}" font-family="Arial, sans-serif" font-weight="500">AI Engineering Journey</text>`);

  // Small decorative dot next to repo name
  parts.push(`  <circle cx="70" cy="55" r="3" fill="${C.primary}" opacity="0.5"/>`);

  // ── Main title ──
  parts.push(`  <text x="80" y="180" font-size="46" font-weight="bold" fill="${C.text}" font-family="Arial, sans-serif" letter-spacing="-0.5">${title}</text>`);

  // ── Subtitle ──
  parts.push(`  <text x="80" y="240" font-size="22" fill="${C.textMuted}" font-family="Arial, sans-serif" font-weight="400">${subtitle}</text>`);

  // ── Gradient accent line below title/subtitle ──
  parts.push(`  <line x1="80" y1="280" x2="280" y2="280" stroke="url(#gBlue)" stroke-width="5" stroke-linecap="round"/>`);

  // ── Right-side stat circles ──
  const statStartX = 850;
  const statSpacing = 130;

  for (let i = 0; i < stats.length; i++) {
    const s = stats[i];
    const cx = statStartX + i * statSpacing;
    const cy = 280;

    // Outer ring with gradient
    parts.push(`  <circle cx="${cx}" cy="${cy}" r="44" fill="${s.color}" opacity="0.08"/>`);
    parts.push(`  <circle cx="${cx}" cy="${cy}" r="44" fill="none" stroke="${s.color}" stroke-width="1.5" opacity="0.25"/>`);

    // Inner fill
    parts.push(`  <circle cx="${cx}" cy="${cy}" r="36" fill="${s.color}" opacity="0.10"/>`);

    // Number
    parts.push(`  <text x="${cx}" y="${cy + 6}" font-size="28" font-weight="bold" fill="${s.color}" text-anchor="middle" font-family="Arial, sans-serif">${s.n}</text>`);

    // Label below circle
    parts.push(`  <text x="${cx}" y="${cy + 64}" font-size="11" fill="${C.textMuted}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="500">${s.label}</text>`);
  }

  // ── Bottom section: Keywords as tag badges ──
  const keywords = data.keywords.slice(0, 6);
  const tagColors = [C.primary, C.secondary, C.warning, C.purple, C.pink, C.purple];

  if (keywords.length > 0) {
    parts.push(`  <text x="80" y="400" font-size="11" fill="${C.textLight}" font-family="Arial, sans-serif" font-weight="600">KEYWORDS</text>`);

    let tagX = 80;
    const tagY = 418;
    for (let ki = 0; ki < keywords.length; ki++) {
      const kw = escapeXml(keywords[ki].term);
      const color = tagColors[ki % tagColors.length];
      const tw = kw.length * 8 + 24;

      // Only place tags if they fit before the stats area
      if (tagX + tw > statStartX - 20) break;

      parts.push(`  ${badge(kw, tagX, tagY, color)}`);
      tagX += tw + 8;
    }
  }

  // ── Bottom-right: Repository URL ──
  parts.push(`  <text x="${w - 80}" y="${h - 40}" font-size="13" fill="${C.textLight}" text-anchor="end" font-family="Arial, sans-serif">github.com/ai-engineering-journey</text>`);

  // Bottom-left: course/lesson context
  const courseContext = data.keywords.length > 0 ? data.keywords[0].category : '';
  if (courseContext) {
    parts.push(`  <text x="80" y="${h - 40}" font-size="12" fill="${C.textLight}" font-family="Arial, sans-serif">${escapeXml(courseContext)}</text>`);
  }

  // ── Extra subtle dot grid accent overlay on right side ──
  parts.push(`  <rect x="700" y="0" width="500" height="${h}" fill="url(#dotGrid)" opacity="0.3"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${defs()}
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="${C.bgLight}"/>
  <rect width="${w}" height="${h}" fill="url(#gBg)"/>
  <!-- Decorative shapes -->
  ${parts.join('\n')}
</svg>`;
}
