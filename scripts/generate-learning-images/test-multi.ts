import * as fs from 'fs';
import { extractConcepts } from './concept-extractor';

const chapters = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (const ch of chapters) {
  const path = `C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-${String(ch).padStart(2, '0')}-*.md`;
  const files = fs.readdirSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn')
    .filter(f => f.startsWith(`ch-${String(ch).padStart(2, '0')}-`) && f.endsWith('.md'));
  if (files.length === 0) { console.log(`ch-${ch}: no file`); continue; }
  const filePath = `C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/${files[0]}`;
  const md = fs.readFileSync(filePath, 'utf-8');
  const data = extractConcepts(md);
  console.log(`ch-${ch} (${files[0].slice(0, 30)}): concepts=${data.concepts.length} keywords=${data.keywords.length} quiz=${data.quizQuestions.length} formulas=${data.formulas.length} subtitle=${data.subtitle ? '✓' : '✗'}`);
}
