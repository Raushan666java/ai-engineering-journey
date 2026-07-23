const fs = require('fs');
const path = require('path');

const BASE = 'C:\\xampp\\htdocs\\ai-engineering-journey\\docs\\courses\\ai-engineering-placement';

function getAllMdFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) results = results.concat(getAllMdFiles(full));
    else if (item.name.endsWith('.md')) results.push(full);
  }
  return results;
}

function splitLongSentences(content) {
  const lines = content.split('\n');
  const result = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }
    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    // Skip headers, lists, tables, blockquotes, HTML
    if (line.match(/^#{1,6}\s/) || line.match(/^\s*[-*]\s/) || line.match(/^\|/) || line.match(/^>/) || line.match(/^</) || line.match(/^\$\$/) || line.match(/^\s*```/)) {
      result.push(line);
      continue;
    }

    // Split sentences longer than 50 words
    const words = line.trim().split(/\s+/);
    if (words.length > 50) {
      // Find natural break points at commas or semicolons
      let sentences = [];
      let current = [];
      for (let i = 0; i < words.length; i++) {
        current.push(words[i]);
        if ((words[i].endsWith(',') || words[i].endsWith(';') || words[i].endsWith('and') || words[i].endsWith('or') || words[i].endsWith('but')) && current.length > 20) {
          sentences.push(current.join(' '));
          current = [];
        }
      }
      if (current.length > 0) sentences.push(current.join(' '));
      
      // If still too long, split at 40-word marks
      const finalSentences = [];
      for (const s of sentences) {
        const sWords = s.split(/\s+/);
        if (sWords.length > 50) {
          for (let i = 0; i < sWords.length; i += 40) {
            finalSentences.push(sWords.slice(i, i + 40).join(' '));
          }
        } else {
          finalSentences.push(s);
        }
      }
      result.push(finalSentences.join('.\n'));
    } else {
      result.push(line);
    }
  }
  return result.join('\n');
}

let fixed = 0;
const files = getAllMdFiles(BASE);
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const newContent = splitLongSentences(content);
  if (newContent !== content) {
    fs.writeFileSync(f, newContent, 'utf8');
    fixed++;
  }
}
console.log(`Fixed long sentences in ${fixed} files`);
