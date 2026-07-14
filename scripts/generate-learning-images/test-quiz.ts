import * as fs from 'fs';

const md = fs.readFileSync('C:/xampp/htdocs/ai-engineering-journey/docs/courses/learning-how-to-learn/ch-13-learning-analytics.md', 'utf-8');

// Test the quiz section extraction
const quizSection = md.match(/##\s+(?:Chapter Quiz|Self-Assessment Quiz|Quiz)[\s\S]*?(?=\n##\s|$)/);
if (quizSection) {
  console.log('Quiz section found, length:', quizSection[0].length);
  console.log('First 200 chars:', quizSection[0].slice(0, 200));
  console.log('---');
  
  const lines = quizSection[0].split('\n');
  console.log('Lines:', lines.length);
  
  let currentQ = '';
  let currentOptions: string[] = [];
  let currentExplanation = '';
  let inDetails = false;
  let questionCount = 0;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('<details>')) { inDetails = true; continue; }
    if (trimmed.startsWith('</details>')) { inDetails = false; continue; }
    if (trimmed.startsWith('<summary>')) continue;

    const qMatch = trimmed.match(/^\*\*Q(\d+):\*\*\s*(.+)/);
    if (qMatch) {
      if (currentQ && currentOptions.length > 0) {
        console.log(`Q${questionCount}: ${currentQ.slice(0, 60)}`);
        console.log(`  Options: ${currentOptions.length}`);
        console.log(`  Explanation: ${currentExplanation.slice(0, 60)}`);
        questionCount++;
      }
      currentQ = qMatch[2];
      currentOptions = [];
      currentExplanation = '';
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentOptions.push(trimmed.replace(/^[-*]\s+/, ''));
      continue;
    }

    if (/^\*\*Answer\*\*:?\s*/i.test(trimmed) || trimmed.startsWith('**Answer**')) {
      currentExplanation = trimmed.replace(/^\*\*Answer\*\*:?\s*/i, '').replace(/\*\*/g, '');
      continue;
    }

    if (inDetails && trimmed && !trimmed.startsWith('```')) {
      currentExplanation += ' ' + trimmed.replace(/\*\*/g, '');
    }
  }

  // Push last question
  if (currentQ && currentOptions.length > 0) {
    console.log(`Q${questionCount}: ${currentQ.slice(0, 60)}`);
    console.log(`  Options: ${currentOptions.length}`);
    console.log(`  Explanation: ${currentExplanation.slice(0, 60)}`);
    questionCount++;
  }

  console.log(`\nTotal questions found: ${questionCount}`);
} else {
  console.log('No quiz section found');
  // Try different patterns
  const patterns = [
    /##\s+Chapter Quiz/i,
    /##\s+Self-Assessment Quiz/i,
    /##\s+Quiz/i,
  ];
  for (const p of patterns) {
    const m = md.match(p);
    if (m) {
      console.log('Found with pattern:', p, 'at index', m.index);
    } else {
      console.log('No match for:', p);
    }
  }
}
