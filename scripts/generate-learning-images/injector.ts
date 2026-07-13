import { Topic } from './parser';

export interface InjectionResult {
  updatedMarkdown: string;
  insertedCount: number;
}

function generateImageBlock(topic: Topic, course: string, chapterSlug: string): string {
  const assetBase = `../../../assets/images/diagrams/${course}/${chapterSlug}/${topic.slug}`;

  const images = [
    { type: 'handwritten', alt: `Handwritten: ${topic.heading}` },
    { type: 'diagram', alt: `Diagram: ${topic.heading}` },
    { type: 'sticky', alt: `Sticky Note: ${topic.heading}` },
  ];

  return images.map(img =>
    `<a href="${assetBase}-${img.type}.svg" target="_blank" rel="noopener">
  <img src="${assetBase}-${img.type}.svg" alt="${img.alt}" width="30%">
</a>`
  ).join('\n');
}

function isQaFormat(markdown: string): boolean {
  return markdown.includes('## Q&A Content');
}

export function injectImages(
  markdown: string,
  topics: Topic[],
  course: string,
  chapterSlug: string,
): InjectionResult {
  const topicMap = new Map<string, Topic>();
  for (const t of topics) {
    topicMap.set(t.heading.toLowerCase(), t);
  }

  const lines = markdown.split('\n');
  const out: string[] = [];
  let insertedCount = 0;
  let currentTopic: Topic | null = null;
  let awaitingAnswer = false;
  const qa = isQaFormat(markdown);

  function alreadyHasImages(idx: number): boolean {
    for (let i = idx + 1; i < Math.min(idx + 6, lines.length); i++) {
      const t = lines[i].trim();
      if (t.startsWith('</a>')) return true;
      if (t.startsWith('### ') || t.startsWith('## ') || t.startsWith('```')) return false;
    }
    return false;
  }

  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i]);

    const trimmed = lines[i].trim();

    if (!awaitingAnswer && trimmed.startsWith('### ')) {
      const rawHeading = trimmed.replace(/^###\s+/, '');
      const cleanHeading = rawHeading.replace(/^Q\d+[:\u2013\)\s]+/, '').trim();
      const key = cleanHeading.toLowerCase();

      if (topicMap.has(key)) {
        currentTopic = topicMap.get(key)!;
        if (!qa) {
          if (!alreadyHasImages(i)) {
            out.push('');
            out.push(generateImageBlock(currentTopic, course, chapterSlug));
            out.push('');
            insertedCount++;
          }
          currentTopic = null;
        } else {
          awaitingAnswer = true;
        }
      }
    }

    if (awaitingAnswer && trimmed.startsWith('#### Answer')) {
      if (!alreadyHasImages(i)) {
        out.push('');
        out.push(generateImageBlock(currentTopic!, course, chapterSlug));
        out.push('');
        insertedCount++;
      }
      awaitingAnswer = false;
      currentTopic = null;
    }
  }

  return { updatedMarkdown: out.join('\n'), insertedCount };
}
