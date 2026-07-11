export interface Topic {
  heading: string;
  slug: string;
  keyInsight: string;
  keyPoints: string[];
  body: string;
}

interface ParsedFormat {
  isQa: boolean;
  sectionHeading: string;
  contentStartIndex: number;
}

function safeSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function detectFormat(markdown: string): ParsedFormat {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const t = line.trim();
    if (t === '## Q&A Content') return { isQa: true, sectionHeading: '## Q&A Content', contentStartIndex: 0 };
  }
  for (const line of lines) {
    const t = line.trim();
    if (t === '## Theory') return { isQa: false, sectionHeading: '## Theory', contentStartIndex: 0 };
  }
  return { isQa: false, sectionHeading: '', contentStartIndex: 0 };
}

function extractSection(markdown: string, heading: string): string {
  if (!heading) return markdown;
  const lines = markdown.split('\n');
  let inSection = false;
  const sectionLines: string[] = [];
  for (const line of lines) {
    if (line.trim() === heading) { inSection = true; continue; }
    if (inSection) {
      if (line.startsWith('## ') && line.trim() !== heading) break;
      sectionLines.push(line);
    }
  }
  return sectionLines.join('\n');
}

function extractGlanceTable(markdown: string): Map<string, { insight: string; takeaway: string }> {
  const result = new Map<string, { insight: string; takeaway: string }>();
  const glanceMatch = markdown.match(/##+?\s+Chapter at a Glance\s*\n([\s\S]*?)(?=\n##|\n---)/);
  if (!glanceMatch) return result;
  const tableSection = glanceMatch[1];
  const rowRegex = /\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/g;
  let rowMatch: RegExpExecArray | null;
  let headerPassed = false;
  while ((rowMatch = rowRegex.exec(tableSection)) !== null) {
    const first = rowMatch[1].trim().toLowerCase();
    if (first === 'topic') { headerPassed = true; continue; }
    if (!headerPassed) continue;
    const topic = rowMatch[1].trim();
    const insight = rowMatch[2].trim();
    const takeaway = rowMatch[3].trim();
    if (topic && topic !== '-------') {
      result.set(topic.toLowerCase(), { insight, takeaway });
    }
  }
  return result;
}

function parseRawTopics(sectionContent: string, isQa: boolean): { heading: string; body: string }[] {
  const results: { heading: string; body: string }[] = [];
  const lines = sectionContent.split('\n');
  let currentHeading: string | null = null;
  let currentBody: string[] = [];
  let afterAnswer = !isQa;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('### ') || trimmed.startsWith('### Q')) {
      if (currentHeading && afterAnswer) {
        results.push({
          heading: currentHeading.replace(/^###\s+/, '').replace(/^Q\d+[:\u2013)\s]+/, '').trim(),
          body: currentBody.join(' ').replace(/\s+/g, ' ').trim(),
        });
      }
      currentHeading = trimmed;
      currentBody = [];
      afterAnswer = !isQa;
      continue;
    }

    if (isQa && trimmed.startsWith('#### Answer')) {
      afterAnswer = true;
      continue;
    }

    if (currentHeading && afterAnswer) {
      if (trimmed && !trimmed.startsWith('```') && !trimmed.startsWith('---') && !trimmed.startsWith('|')) {
        currentBody.push(trimmed);
      }
    }
  }

  if (currentHeading && afterAnswer) {
    results.push({
      heading: currentHeading.replace(/^###\s+/, '').replace(/^Q\d+[:\u2013)\s]+/, '').trim(),
      body: currentBody.join(' ').replace(/\s+/g, ' ').trim(),
    });
  }

  return results;
}

function extractKeyPoints(text: string): string[] {
  const points: string[] = [];
  const boldItems = text.match(/\*\*([^*]+)\*\*/g);
  if (boldItems) {
    for (const b of boldItems) {
      const clean = b.replace(/\*\*/g, '').trim();
      if (clean.length > 3 && clean.length < 80 && !clean.startsWith('Chapter')) {
        points.push(clean);
      }
    }
  }
  if (points.length < 2) {
    const sentences = text.split(/\.\s+/);
    for (const s of sentences) {
      const clean = s.replace(/^[A-Z][a-z]+:/, '').trim();
      if (clean.length > 10 && clean.length < 120) { points.push(clean); }
      if (points.length >= 3) break;
    }
  }
  const numbered = text.match(/\d+\.\s+([^.]{5,80})/g);
  if (numbered && points.length < 3) {
    for (const n of numbered) {
      const clean = n.replace(/^\d+\.\s+/, '').trim();
      points.push(clean);
      if (points.length >= 3) break;
    }
  }
  return points.slice(0, 4);
}

const SKIP_TOPICS = new Set([
  'concept comparison table', 'quick reference', 'cross-application matrix',
  'chapter quiz', 'standard comparison', 'consensus comparison table',
  'fork resolution strategies', 'security assumptions', 'energy comparison table',
  'review questions', 'application problems', 'challenge problem', 'challenge problems',
  'conceptual overview',
]);

export function parseTopics(markdown: string): Topic[] {
  const fmt = detectFormat(markdown);
  const glanceMap = extractGlanceTable(markdown);
  const sectionContent = extractSection(markdown, fmt.sectionHeading);
  const rawTopics = parseRawTopics(sectionContent, fmt.isQa);

  const topics: Topic[] = [];
  for (const raw of rawTopics) {
    const headingLower = raw.heading.toLowerCase().replace(/^Q\d+[:\u2013]\s*/, '').trim();
    if (SKIP_TOPICS.has(headingLower)) continue;
    if (!raw.heading || raw.heading.length > 100) continue;
    if (/^(example|exercise|typescript)/i.test(raw.heading)) continue;

    const keyPoints = extractKeyPoints(raw.body);
    const glanceInfo = glanceMap.get(headingLower) || glanceMap.get(headingLower.replace(/^q\d+\s*/, '').trim());

    topics.push({
      heading: raw.heading,
      slug: safeSlug(raw.heading.replace(/^Q\d+[:\u2013)\s]+/, '')),
      keyInsight: glanceInfo?.insight || keyPoints[0] || '',
      keyPoints,
      body: raw.body,
    });
  }

  return topics;
}
