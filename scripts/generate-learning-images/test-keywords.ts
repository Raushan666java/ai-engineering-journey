import * as fs from 'fs';

function extractBoldTerms(text: string): string[] {
  const terms: string[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    const t = m[1].trim();
    if (t.length > 2 && t.length < 80 && !t.startsWith('Chapter') && !/^\d+/.test(t)) {
      terms.push(t);
    }
  }
  return [...new Set(terms)];
}

const md13 = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-13-learning-analytics.md', 'utf-8');
const boldTerms = extractBoldTerms(md13);
console.log('Bold terms found:', boldTerms.length);
console.log('Terms:', JSON.stringify(boldTerms));

const genericLabels = new Set([
  'prerequisites', 'next', 'answer', 'pro tip', 'try this', 'one-sentence takeaway',
  'remember', 'warning', 'mistake', 'caution', 'common mistake', 'note', 'tip',
  'key insight', 'practical', 'source', 'topic', 'feature', 'concept', 'definition',
]);

const filtered = boldTerms.filter(t => {
  const lower = t.toLowerCase().trim();
  return !genericLabels.has(lower) && !lower.endsWith(':') && lower.length >= 3;
});
console.log('After filter:', filtered.length);
console.log('Filtered terms:', JSON.stringify(filtered));
