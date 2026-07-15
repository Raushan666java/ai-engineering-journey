import * as fs from 'fs';
import { extractConcepts } from './concept-extractor';

// Let's check what getSections returns
const md = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-13-learning-analytics.md', 'utf-8');

// Replicate getSections
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
console.log('Section keys:', [...sections.keys()].join(', '));
console.log('Has Chapter Quiz:', sections.has('Chapter Quiz'));
if (sections.has('Chapter Quiz')) {
  const quizSec = sections.get('Chapter Quiz');
  console.log('Chapter Quiz section length:', quizSec.length);
  console.log('First 100 chars:', quizSec.slice(0, 100));
}
