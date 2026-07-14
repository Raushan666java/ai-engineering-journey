import { extractConcepts } from './concept-extractor';
import * as fs from 'fs';

for (const ch of ['ch-09-framework-language-learning', 'ch-11-ai-assisted-learning', 'ch-13-learning-analytics']) {
  const md = fs.readFileSync(`C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/${ch}.md`, 'utf-8');
  const d = extractConcepts(md);
  console.log(`\n=== ${ch} ===`);
  console.log('Formulas:', JSON.stringify(d.formulas, null, 2));
  console.log('Keywords count:', d.keywords.length);
  if (d.keywords.length < 5) console.log('Keywords:', JSON.stringify(d.keywords));
}
