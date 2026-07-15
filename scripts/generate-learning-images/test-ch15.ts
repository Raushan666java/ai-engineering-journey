import * as fs from 'fs';
import { extractConcepts } from './concept-extractor';

const md = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-15-exam-cracking-mastery.md', 'utf-8');

// Check getSections for this file
function getSections(text: string): Map<string, string> {
  const sections = new Map<string, string>();
  const lines = text.split('\n');
  let currentSection = '';
  let currentContent = '';
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) sections.set(currentSection, currentContent.trim());
      currentSection = line.slice(3).trim();
      currentContent = '';
    } else {
      currentContent += line + '\n';
    }
  }
  if (currentSection) sections.set(currentSection, currentContent.trim());
  return sections;
}

const sections = getSections(md);
console.log('Has Chapter Quiz:', sections.has('Chapter Quiz'));
if (sections.has('Chapter Quiz')) {
  const quizSec = sections.get('Chapter Quiz');
  console.log('Section length:', quizSec.length);
  console.log('First 200 chars:', quizSec.slice(0, 200));
  
  // Check if it starts with quiz content pattern
  console.log('Starts with **Q1:', /^\s*\*\*Q\d+:\*\*/.test(quizSec));
  console.log('Starts with 1.:', /^\s*\*\*\d+[.)]/.test(quizSec));
  console.log('First char codes:', [...quizSec.slice(0, 20)].map(c => c.charCodeAt(0)));
}
