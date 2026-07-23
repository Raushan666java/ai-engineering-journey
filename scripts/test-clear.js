const fs = require('fs');
const c = fs.readFileSync('C:\\xampp\\htdocs\\ai-engineering-journey\\docs\\courses\\ai-engineering-placement\\00-core-computer-science\\01-computer-networks.md', 'utf8');

// Test 1: current rubric logic (no code block removal)
const sentences1 = c.split(/[.!?]+/).filter(s => s.trim().length > 0);
const long1 = sentences1.filter(s => s.split(' ').length > 50);
console.log('=== WITHOUT code block removal ===');
console.log('Long sentences:', long1.length);

// Test 2: with code block removal
const withoutCode = c.replace(/```[\s\S]*?```/g, '').replace(/\{[^}]*\}/g, '');
const sentences2 = withoutCode.split(/[.!?]+/).filter(s => s.trim().length > 0);
const long2 = sentences2.filter(s => s.split(' ').length > 50);
console.log('=== WITH code block removal ===');
console.log('Long sentences:', long2.length);
console.log('Check passes:', long2.length < 3);

// Show remaining long sentences
if (long2.length > 0) {
  console.log('\n--- Remaining long sentences ---');
  long2.slice(0, 5).forEach((s, i) => {
    console.log(`Sentence ${i+1} (${s.split(' ').length} words):`);
    console.log(s.trim().substring(0, 200));
    console.log('---');
  });
}
