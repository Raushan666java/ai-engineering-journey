import { Topic } from './parser';

export interface InjectionResult {
  updatedMarkdown: string;
  insertedCount: number;
}

function generateImageBlock(topic: Topic, course: string, chapterSlug: string): string {
  const assetBase = `../../assets/images/diagrams/${course}/${chapterSlug}/${topic.slug}`;

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

  for (const line of lines) {
    out.push(line);

    const trimmed = line.trim();

    if (!awaitingAnswer && trimmed.startsWith('### ')) {
      const rawHeading = trimmed.replace(/^###\s+/, '');
      const cleanHeading = rawHeading.replace(/^Q\d+[:\u2013\)\s]+/, '').trim();
      const key = cleanHeading.toLowerCase();

      if (topicMap.has(key)) {
        currentTopic = topicMap.get(key)!;
        if (!qa) {
          out.push('');
          out.push(generateImageBlock(currentTopic, course, chapterSlug));
          out.push('');
          insertedCount++;
          currentTopic = null;
        } else {
          awaitingAnswer = true;
        }
      }
    }

    if (awaitingAnswer && trimmed.startsWith('#### Answer')) {
      out.push('');
      out.push(generateImageBlock(currentTopic!, course, chapterSlug));
      out.push('');
      insertedCount++;
      awaitingAnswer = false;
      currentTopic = null;
    }
  }

  return { updatedMarkdown: out.join('\n'), insertedCount };
}
