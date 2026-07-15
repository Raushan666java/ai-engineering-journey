import * as fs from 'fs';
import { extractConcepts } from './concept-extractor';

const md = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-13-learning-analytics.md', 'utf-8');
const data = extractConcepts(md);

console.log('Title:', data.title);
console.log('Subtitle:', data.subtitle);
console.log('Learning Objectives:', data.learningObjectives.length);
console.log('Concepts:', data.concepts.length, '→', JSON.stringify(data.concepts.map(c => c.term)));
console.log('Keywords:', data.keywords.length, '→', JSON.stringify(data.keywords.map(k => k.term)));
console.log('Formulas:', data.formulas.length, '→', JSON.stringify(data.formulas.map(f => f.expression)));
console.log('Quiz Questions:', data.quizQuestions.length);
console.log('Main Takeaway:', data.mainTakeaway.slice(0, 100));
