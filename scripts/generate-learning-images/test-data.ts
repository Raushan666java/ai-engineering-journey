import { extractConcepts } from './concept-extractor';
import * as fs from 'fs';

const files = [
  'ch-01-how-your-brain-learns',
  'ch-02-practice-mindset',
  'ch-03-active-recall-spaced-repetition',
  'ch-04-pomodoro-interleaving-feynman',
  'ch-05-memory-systems',
  'ch-06-procrastination-habits-deep-work',
  'ch-07-dsa-coding-interview',
  'ch-08-gate-theory-prep',
  'ch-09-framework-language-learning',
  'ch-10-meta-learning-system',
  'ch-11-ai-assisted-learning',
  'ch-12-teaching-knowledge-transfer',
  'ch-13-learning-analytics',
  'ch-14-social-learning-communities',
  'ch-15-exam-cracking-mastery',
  'ch-16-self-assessment-strategy',
];

for (const f of files) {
  const md = fs.readFileSync(`C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/${f}.md`, 'utf-8');
  const d = extractConcepts(md);
  console.log(`\n=== ${f} ===`);
  console.log(`Title: ${d.title}`);
  console.log(`Subtitle: ${d.subtitle}`);
  console.log(`Concepts: ${d.concepts.length}`);
  console.log(`Workflow: ${d.workflow.length}`);
  console.log(`Architecture: ${d.architecture.length}`);
  console.log(`Formulas: ${d.formulas.length}`);
  console.log(`Keywords: ${d.keywords.length}`);
  console.log(`Mistakes: ${d.commonMistakes.length}`);
  console.log(`Interview Qs: ${d.interviewQuestions.length}`);
  console.log(`Quiz Qs: ${d.quizQuestions.length}`);
  console.log(`Examples: ${d.examples.length}`);
  console.log(`Takeaway: ${d.mainTakeaway.slice(0, 80)}`);
}
