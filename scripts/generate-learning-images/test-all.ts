import * as fs from 'fs';
import { extractConcepts } from './concept-extractor';

const files = fs.readdirSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn')
  .filter(f => f.startsWith('ch-') && f.endsWith('.md') && f !== 'index.md')
  .sort();

for (const file of files) {
  const md = fs.readFileSync(`C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/${file}`, 'utf-8');
  const data = extractConcepts(md);
  console.log(`${file}: concepts=${data.concepts.length} keywords=${data.keywords.length} quiz=${data.quizQuestions.length} formulas=${data.formulas.length} takeaway=${data.mainTakeaway.slice(0, 60)}`);
}
