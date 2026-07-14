import { ConceptData } from './types';

function cleanMd(s: string): string {
  return s.replace(/\*\*/g, '').replace(/\|/g, '').replace(/#{1,6}\s*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();
}

function isTableRow(line: string): boolean {
  return /^\s*\|/.test(line) || /\|\s*$/.test(line) || /^\|[\s:-]+\|/.test(line);
}

function getSections(markdown: string): Map<string, string> {
  const sections = new Map<string, string>();
  const lines = markdown.split('\n');
  let currentHeading = '';
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentHeading) sections.set(currentHeading, currentLines.join('\n'));
      currentHeading = line.slice(3).trim();
      currentLines = [];
    } else if (line.startsWith('# ') && !currentHeading) {
      sections.set('__title__', line.slice(2).trim());
    } else {
      currentLines.push(line);
    }
  }
  if (currentHeading) sections.set(currentHeading, currentLines.join('\n'));
  return sections;
}

function extractTitle(markdown: string): string {
  const m = markdown.match(/^#\s+(.+)/m);
  return m ? m[1].trim() : '';
}

function extractSubtitle(markdown: string): string {
  const lines = markdown.split('\n');
  let afterTitle = false;
  let foundPrereqs = false;
  for (const line of lines) {
    if (line.startsWith('# ')) { afterTitle = true; continue; }
    if (afterTitle && line.startsWith('##')) break;
    if (afterTitle && line.trim()) {
      // Skip blockquoted prerequisite/next lines
      if (line.trim().startsWith('>')) { foundPrereqs = true; continue; }
      // Skip empty lines after prereqs
      if (foundPrereqs && !line.trim()) continue;
      // First non-empty, non-blockquote, non-heading line — this is the overview paragraph
      if (foundPrereqs && line.trim().length > 10) {
        return line.replace(/\*\*/g, '').trim().slice(0, 200);
      }
    }
  }
  return '';
}

function extractBoldTerms(text: string): string[] {
  const terms: string[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    const t = m[1].trim();
    const before = text.slice(Math.max(0, m.index - 20), m.index);
    if (isTableRow(before)) continue;
    if (t.length > 2 && t.length < 80 && !t.startsWith('Chapter') && !/^\d+/.test(t)) {
      terms.push(t);
    }
  }
  return [...new Set(terms)];
}

function extractListItems(text: string): string[] {
  const items: string[] = [];
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    const m = trimmed.match(/^[-*]\s+(.+)/);
    if (m) items.push(m[1].trim());
    const m2 = trimmed.match(/^\d+[.)]\s+(.+)/);
    if (m2) items.push(m2[1].trim());
  }
  return items;
}

function extractCodeBlocks(text: string): { lang: string; code: string }[] {
  const blocks: { lang: string; code: string }[] = [];
  const regex = /```(\w*)\n([\s\S]*?)```/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    blocks.push({ lang: m[1], code: m[2].trim() });
  }
  return blocks;
}

function extractDefinitions(text: string): { term: string; definition: string }[] {
  const result: { term: string; definition: string }[] = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (isTableRow(lines[i])) continue;
    const trimmed = lines[i].trim();
    const m = trimmed.match(/^\*\*([^*]+)\*\*\s*[:\u2013\u2014]\s*(.{10,200})/);
    if (m) {
      const term = m[1].trim();
      const def = m[2].replace(/\*\*/g, '').replace(/\|/g, '').trim();
      if (term.length < 60 && def.length < 300 && !isTableRow(def)) {
        result.push({ term, definition: cleanMd(def) });
      }
    }
  }
  if (result.length < 3) {
    const patterns = [
      /\*\*([^*]+)\*\*\s+is\s+(a|an|the)\s+(.{10,200})/gi,
      /\*\*([^*]+)\*\*\s+refers?\s+to\s+(.{10,200})/gi,
    ];
    for (const pattern of patterns) {
      let m: RegExpExecArray | null;
      while ((m = pattern.exec(text)) !== null) {
        const term = m[1].trim();
        const before = text.slice(Math.max(0, m.index - 20), m.index);
        if (isTableRow(before)) continue;
        const def = (m[2] + ' ' + (m[3] || '')).trim();
        if (term.length < 60 && def.length < 300) {
          result.push({ term, definition: cleanMd(def) });
        }
      }
    }
  }
  return result;
}

function extractFormulas(text: string): { name: string; expression: string; description: string }[] {
  const result: { name: string; expression: string; description: string }[] = [];
  const seen = new Set<string>();

  // Remove code blocks before formula detection to avoid JS template literals ${...} false positives
  const cleanText = text.replace(/```[\s\S]*?```/g, '');

  function addExpr(expr: string, beforeText: string, nameDefault: string) {
    // Skip template literal patterns (${...}) and anything with curly braces
    if (expr.includes('{') || expr.includes('}')) return;
    const clean = expr.replace(/[\[\]()]/g, '').replace(/\s+/g, ' ').trim();
    if (clean.length < 3 || seen.has(clean)) return;
    const nameMatch = beforeText.match(/\*\*([^*]+)\*\*/);
    const name = nameMatch ? nameMatch[1].replace(/\*\*/g, '').trim() : nameDefault;
    if (name.length > 50) return;
    seen.add(clean);
    result.push({ name, expression: clean.slice(0, 120), description: '' });
  }

  const displayMath = /\$\$([\s\S]*?)\$\$/g;
  let m: RegExpExecArray | null;
  while ((m = displayMath.exec(cleanText)) !== null) {
    addExpr(m[1], text.slice(Math.max(0, m.index - 120), m.index), `Formula ${result.length + 1}`);
  }

  const inlineMath = /\$([^$]+)\$/g;
  while ((m = inlineMath.exec(cleanText)) !== null) {
    const expr = m[1].trim();
    if (expr.length > 4 && /[=\\^_/\sum\int\bar\sim]/.test(expr)) {
      addExpr(expr, text.slice(Math.max(0, m.index - 80), m.index), `Formula ${result.length + 1}`);
    }
  }

  return result.slice(0, 8);
}

function extractTables(text: string): { title: string; headers: string[]; rows: string[][] }[] {
  const tables: { title: string; headers: string[]; rows: string[][] }[] = [];
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length) {
    if (lines[i].includes('|') && lines[i + 1] && /^\|[\s:-]+\|/.test(lines[i + 1])) {
      const headers = lines[i].split('|').filter(h => h.trim()).map(h => h.trim());
      const rows: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].includes('|') && !lines[j].includes('---')) {
        const cells = lines[j].split('|').filter(c => c.trim()).map(c => c.trim().replace(/\*\*/g, ''));
        if (cells.length > 0) rows.push(cells);
        j++;
      }
      if (headers.length > 1) tables.push({ title: '', headers, rows });
      i = j;
    } else {
      i++;
    }
  }
  return tables;
}

function extractWorkflow(text: string): { step: number; description: string; details?: string[] }[] {
  const result: { step: number; description: string; details?: string[] }[] = [];
  const lines = text.split('\n');
  let stepCount = 0;

  const stepPatterns = [
    /^\d+[.)]\s+(.+)/,
    /^Step\s+(\d+)[:\u2014\-]\s*(.+)/i,
    /^-\s*(?:Step\s+(\d+)[:\u2014\-]\s*)?(.+)/i,
  ];

  for (const line of lines) {
    const trimmed = line.trim();
    for (const pattern of stepPatterns) {
      const m = trimmed.match(pattern);
      if (m) {
        stepCount++;
        const desc = (m[2] || m[1]).replace(/\*\*/g, '').trim();
        if (desc.length > 5) result.push({ step: stepCount, description: desc.slice(0, 150) });
        break;
      }
    }
  }

  if (result.length === 0) {
    const flowWords = ['first', 'then', 'next', 'after', 'finally', 'initialize', 'process', 'output'];
    for (const line of lines) {
      const trimmed = line.trim();
      const lower = trimmed.toLowerCase();
      if (flowWords.some(w => lower.startsWith(w)) && trimmed.length > 15) {
        stepCount++;
        result.push({ step: stepCount, description: trimmed.replace(/\*\*/g, '').slice(0, 150) });
      }
    }
  }

  return result;
}

function extractArchitecture(text: string): { component: string; description: string; connections: string[] }[] {
  const result: { component: string; description: string; connections: string[] }[] = [];
  const lines = text.split('\n');
  let currentComponent = '';
  let currentDesc = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (isTableRow(trimmed) || !trimmed || trimmed.startsWith('```')) continue;
    const bold = trimmed.match(/^\*\*([^*]+)\*\*/);
    if (bold) {
      const term = bold[1];
      if (['Source', 'Topic', 'Key Insight', 'Practical', 'Feature', 'Concept'].includes(term)) continue;
      if (currentComponent) {
        result.push({ component: currentComponent, description: cleanMd(currentDesc).slice(0, 200), connections: [] });
      }
      currentComponent = term;
      currentDesc = trimmed.replace(/^\*\*[^*]+\*\*\s*/, '');
    } else if (currentComponent && trimmed.length > 5) {
      currentDesc += ' ' + trimmed;
    }
  }
  if (currentComponent) {
    result.push({ component: currentComponent, description: cleanMd(currentDesc).slice(0, 200), connections: [] });
  }

  if (result.length === 0) {
    const archPatterns = ['layer', 'component', 'module', 'service', 'pipeline', 'agent', 'stack', 'tier', 'system'];
    for (const line of lines) {
      const trimmed = line.trim();
      if (isTableRow(trimmed) || trimmed.startsWith('```') || !trimmed) continue;
      const lower = trimmed.toLowerCase();
      if (archPatterns.some(p => lower.includes(p)) && trimmed.length > 10 && trimmed.length < 200) {
        result.push({
          component: trimmed.split(/[:\u2013-]/)[0].replace(/\*\*/g, '').replace(/\|/g, '').trim().slice(0, 40),
          description: cleanMd(trimmed).slice(0, 200),
          connections: [],
        });
      }
    }
  }

  return result.slice(0, 6);
}

function extractAlgorithms(text: string): { name: string; description: string; steps: string[] }[] {
  const result: { name: string; description: string; steps: string[] }[] = [];
  const codeBlocks = extractCodeBlocks(text);

  const codeAlgos = codeBlocks.filter(b => {
    const c = b.code.toLowerCase();
    return c.includes('function') || c.includes('class') || c.includes('algorithm') ||
           c.includes('implement') || (b.code.length > 50 && b.code.split('\n').length > 5);
  });

  const lines = text.split('\n');
  let currentName = '';
  let currentDesc = '';
  let currentSteps: string[] = [];
  let inAlgo = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^###\s+\d+\.\d+\s/.test(trimmed) || /^###\s+(?:Algorithm|Implement)/i.test(trimmed)) {
      if (inAlgo && currentName) {
        result.push({ name: currentName, description: currentDesc.slice(0, 200), steps: currentSteps.slice(0, 8) });
      }
      currentName = trimmed.replace(/^###\s+/, '').replace(/\*\*/g, '');
      currentDesc = '';
      currentSteps = [];
      inAlgo = true;
      continue;
    }
    if (inAlgo) {
      const stepMatch = trimmed.match(/^\d+[.)]\s+(.+)/);
      if (stepMatch) {
        currentSteps.push(stepMatch[1].replace(/\*\*/g, '').trim().slice(0, 150));
      } else if (trimmed.length > 5 && !trimmed.startsWith('```') && !trimmed.startsWith('|')) {
        currentDesc += ' ' + trimmed.replace(/\*\*/g, '');
      }
    }
  }
  if (inAlgo && currentName) {
    result.push({ name: currentName, description: currentDesc.slice(0, 200), steps: currentSteps.slice(0, 8) });
  }

  if (result.length === 0 && codeAlgos.length > 0) {
    for (const block of codeAlgos) {
      const firstLine = block.code.split('\n')[0];
      const name = firstLine.replace(/^(export\s+)?(function|class|const|async\s+function)\s+/, '').replace(/[(\s{].*/, '');
      result.push({
        name: name || `Algorithm ${result.length + 1}`,
        description: `Implementation in ${block.lang || 'code'}`,
        steps: block.code.split('\n').filter(l => l.trim().startsWith('//') || /^  \w/.test(l)).slice(0, 8).map(l => l.replace(/\/\//, '').trim()),
      });
    }
  }

  return result.slice(0, 5);
}

function extractInterviewQA(text: string): { question: string; answer: string }[] {
  const result: { question: string; answer: string }[] = [];

  const lines = text.split('\n');
  let currentQ = '';
  let currentA = '';
  let inQA = false;
  let awaitingA = false;

  for (const line of lines) {
    const trimmed = line.trim();
    const qMatch = trimmed.match(/^###\s+Q\d+[:\u2013)\s]*(.+)/i);
    if (qMatch) {
      if (inQA && currentQ) result.push({ question: currentQ, answer: currentA.slice(0, 300) });
      currentQ = qMatch[1].replace(/\*\*/g, '').trim();
      currentA = '';
      inQA = true;
      awaitingA = false;
      continue;
    }
    if (inQA && trimmed.startsWith('#### Answer')) {
      awaitingA = true;
      continue;
    }
    if (inQA && awaitingA && trimmed && !trimmed.startsWith('```') && !trimmed.startsWith('|')) {
      currentA += ' ' + trimmed.replace(/\*\*/g, '');
    }
  }
  if (inQA && currentQ) result.push({ question: currentQ, answer: currentA.slice(0, 300) });

  const qaSection = text.match(/##\s+(?:Interview|Common Interview|Q&A)[^#]*/i);
  if (qaSection) {
    const sectionLines = qaSection[0].split('\n');
    let q = '';
    let a = '';
    for (const line of sectionLines) {
      const trimmed = line.trim();
      const qm = trimmed.match(/^(?:\*\*)?(?:Q|Question)[:\u2014]\s*(.+)/i);
      const am = trimmed.match(/^(?:\*\*)?(?:A|Answer)[:\u2014]\s*(.+)/i);
      if (qm) { if (q && a) result.push({ question: q, answer: a.slice(0, 300) }); q = qm[1].replace(/\*\*/g, ''); a = ''; }
      else if (am) { a = am[1].replace(/\*\*/g, ''); if (q) result.push({ question: q, answer: a.slice(0, 300) }); q = ''; a = ''; }
    }
  }

  return result;
}

function extractMistakes(text: string): { mistake: string; correction: string }[] {
  const result: { mistake: string; correction: string }[] = [];

  const blockquoteMistakes = text.matchAll(/>\s*\*\*(?:Warning|Mistake|Caution|Common Mistake)\*\*:?\s*(.+?)(?=\n>|\n\n|\n##)/gis);
  for (const m of blockquoteMistakes) {
    const full = m[1].trim();
    const parts = full.split(/[.;]/);
    if (parts[0] && parts[0].length > 5) {
      result.push({
        mistake: cleanMd(parts[0]).slice(0, 150),
        correction: (parts[1] ? cleanMd(parts[1]) : 'Review the correct approach').trim().slice(0, 200),
      });
    }
  }

  if (result.length < 2) {
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (isTableRow(trimmed)) continue;
      const lower = trimmed.toLowerCase();
      if (lower.includes('common mistake') || lower.includes('pitfall') || lower.includes('caution')) {
        const correction = lines[i + 1] ? cleanMd(lines[i + 1]) : '';
        result.push({
          mistake: cleanMd(trimmed).slice(0, 150),
          correction: correction.slice(0, 200) || 'Avoid this error',
        });
      }
    }
  }

  return result.slice(0, 6);
}

function extractExamples(text: string): { title: string; description: string; code?: string }[] {
  const result: { title: string; description: string; code?: string }[] = [];
  const codeBlocks = extractCodeBlocks(text);
  const lines = text.split('\n');

  let currentTitle = '';
  let currentDesc = '';
  let currentCode = '';

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('### ') && (trimmed.toLowerCase().includes('example') || trimmed.toLowerCase().includes('case study'))) {
      if (currentTitle) result.push({ title: currentTitle, description: currentDesc.slice(0, 300), code: currentCode || undefined });
      currentTitle = trimmed.replace(/^###\s+/, '').replace(/\*\*/g, '');
      currentDesc = '';
      currentCode = '';
      continue;
    }
    if (currentTitle) {
      if (trimmed.startsWith('```')) {
        let j = i + 1;
        const codeLines: string[] = [];
        while (j < lines.length && !lines[j].trim().startsWith('```')) {
          codeLines.push(lines[j]);
          j++;
        }
        currentCode = codeLines.join('\n').slice(0, 500);
        i = j;
      } else if (trimmed && !trimmed.startsWith('|') && !trimmed.startsWith('#')) {
        currentDesc += ' ' + trimmed.replace(/\*\*/g, '');
      }
    }
  }
  if (currentTitle) {
    result.push({ title: currentTitle, description: currentDesc.slice(0, 300), code: currentCode || undefined });
  }

  if (result.length === 0) {
    for (const block of codeBlocks) {
      const before = text.slice(Math.max(0, text.indexOf(block.code) - 100), text.indexOf(block.code));
      const titleMatch = before.match(/\*\*([^*]+)\*\*/);
      const title = titleMatch ? titleMatch[1] : `Code Example ${result.length + 1}`;
      result.push({ title, description: block.lang || 'Implementation', code: block.code.slice(0, 500) });
      if (result.length >= 3) break;
    }
  }

  return result.slice(0, 4);
}

function extractKeywords(text: string): { term: string; category: string }[] {
  const terms = extractBoldTerms(text);
  const keywords: { term: string; category: string }[] = [];

  const genericLabels = new Set([
    'prerequisites', 'next', 'answer', 'pro tip', 'try this', 'one-sentence takeaway',
    'remember', 'warning', 'mistake', 'caution', 'common mistake', 'note', 'tip',
    'key insight', 'practical', 'source', 'topic', 'feature', 'concept', 'definition',
  ]);

  for (const term of terms) {
    const lower = term.toLowerCase().trim().replace(/:$/, '');
    if (genericLabels.has(lower) || lower.length < 3) continue;
    // Skip Q-number labels like "q1", "q2", etc.
    if (/^q\d+$/.test(lower)) continue;
    let category = 'concept';
    if (lower.includes('algorithm') || lower.includes('sort') || lower.includes('search')) category = 'algorithm';
    else if (lower.includes('function') || lower.includes('method') || lower.includes('api')) category = 'technique';
    else if (lower.includes('tool') || lower.includes('framework') || lower.includes('library')) category = 'tool';
    else if (lower.includes('definition') || lower.includes('principle') || lower.includes('law')) category = 'definition';
    keywords.push({ term: term.replace(/:$/, '').slice(0, 50), category });
  }

  return [...new Map(keywords.map(k => [k.term, k])).values()].slice(0, 20);
}

function extractQuiz(text: string): { question: string; options: string[]; answerIndex: number; explanation: string }[] {
  const result: { question: string; options: string[]; answerIndex: number; explanation: string }[] = [];

  function parseQALines(lines: string[]): void {
    let currentQ = '';
    let currentOptions: string[] = [];
    let currentExplanation = '';
    let inDetails = false;

    for (const line of lines) {
      const trimmed = line.trim();

      // Handle <details> / <summary> HTML tags (MkDocs pattern)
      if (trimmed.startsWith('<details>')) { inDetails = true; continue; }
      if (trimmed.startsWith('</details>')) { inDetails = false; continue; }
      if (trimmed.startsWith('<summary>')) continue;

      // Detect **Q1:**, **Q2:**, etc. pattern (colon is inside the bold markers)
      const qMatch = trimmed.match(/^\*\*Q(\d+):\*\*\s*(.+)/);
      if (qMatch) {
        if (currentQ && currentOptions.length > 0) {
          const answerIdx = currentOptions.findIndex(o => /^[✓*✔]/.test(o));
          result.push({
            question: currentQ,
            options: currentOptions.map(o => o.replace(/^[✓*✔]\s*/, '')),
            answerIndex: answerIdx >= 0 ? answerIdx : 0,
            explanation: currentExplanation.slice(0, 200),
          });
        }
        currentQ = qMatch[2];
        currentOptions = [];
        currentExplanation = '';
        continue;
      }

      // Detect 1. or 1) pattern
      const numMatch = trimmed.match(/^(\d+)[.)]\s+(.+)/);
      if (numMatch && !trimmed.startsWith('-') && trimmed.length > 10) {
        if (currentQ && currentOptions.length > 0) {
          const answerIdx = currentOptions.findIndex(o => /^[✓*✔]/.test(o));
          result.push({
            question: currentQ,
            options: currentOptions.map(o => o.replace(/^[✓*✔]\s*/, '')),
            answerIndex: answerIdx >= 0 ? answerIdx : 0,
            explanation: currentExplanation.slice(0, 200),
          });
        }
        currentQ = numMatch[2];
        currentOptions = [];
        currentExplanation = '';
        continue;
      }

      // Detect options: - A) ... or - ... or * ...
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        currentOptions.push(trimmed.replace(/^[-*]\s+/, ''));
        continue;
      }

      // Detect answer inside or outside details
      if (/^\*\*Answer\*\*:?\s*/i.test(trimmed) || trimmed.startsWith('**Answer**')) {
        currentExplanation = trimmed.replace(/^\*\*Answer\*\*:?\s*/i, '').replace(/\*\*/g, '');
        continue;
      }

      // If inside <details> and not an option, accumulate explanation
      if (inDetails && trimmed && !trimmed.startsWith('```')) {
        currentExplanation += ' ' + trimmed.replace(/\*\*/g, '');
      }
    }

    // Push last question
    if (currentQ && currentOptions.length > 0) {
      const answerIdx = currentOptions.findIndex(o => /^[✓*✔]/.test(o));
      result.push({
        question: currentQ,
        options: currentOptions.map(o => o.replace(/^[✓*✔]\s*/, '')),
        answerIndex: answerIdx >= 0 ? answerIdx : 0,
        explanation: currentExplanation.slice(0, 200),
      });
    }
  }

  // If text already starts with quiz content (no header), process directly
  // Matches: **Q1:**, **1.**, or plain 1. at the start
  if (/^\s*(?:\*\*)?(?:Q\d+:\s*|\d+[.)]\s+)/.test(text)) {
    parseQALines(text.split('\n'));
    return result.slice(0, 5);
  }

  // Otherwise, try to match the section header in the full text
  const quizSection = text.match(/(?<!#)##\s+(?:Chapter Quiz|Self-Assessment Quiz|Quiz)[\s\S]*?(?=\n##\s|$)/);
  if (!quizSection) return result;

  parseQALines(quizSection[0].split('\n'));

  // Fallback: extract from comparison table
  if (result.length === 0) {
    const qTable = extractTables(quizSection[0]);
    for (const table of qTable) {
      for (const row of table.rows) {
        if (row.length >= 2) {
          result.push({
            question: row[0],
            options: row.slice(1).length >= 4 ? row.slice(1, 5) : ['Option A', 'Option B', 'Option C', 'Option D'],
            answerIndex: 0,
            explanation: row[row.length - 1] || '',
          });
        }
        if (result.length >= 5) break;
      }
    }
  }

  return result.slice(0, 5);
}

function extractLearningObjectives(section: string): string[] {
  const items = extractListItems(section);
  const objectives: string[] = [];
  for (const item of items) {
    const clean = item.replace(/\*\*/g, '').trim();
    if (clean.length > 5 && clean.length < 200) {
      objectives.push(clean);
    }
  }
  return objectives.slice(0, 10);
}

export function extractConcepts(markdown: string): ConceptData {
  const sections = getSections(markdown);
  const fullText = markdown;

  const allDefinitionLike = extractDefinitions(fullText);
  const safeTerms: { term: string; definition: string }[] = [];
  const seen = new Set<string>();
  for (const d of allDefinitionLike) {
    const key = d.term.toLowerCase();
    if (!seen.has(key) && d.term.length > 1) {
      seen.add(key);
      safeTerms.push(d);
    }
  }

  // Fallback: extract concepts from "Chapter at a Glance" table (first col = term, second col = definition)
  if (safeTerms.length < 3) {
    const glanceMatch = markdown.match(/### Chapter at a Glance\s*\n([\s\S]*?)(?=\n#{1,3}\s|\n---|$)/i);
    if (glanceMatch) {
      const tableLines = glanceMatch[1].split('\n').filter(l => l.trim().startsWith('|') && !l.includes('---'));
      // Skip header row (first line after filter), process data rows
      for (let i = 1; i < tableLines.length; i++) {
        const cells = tableLines[i].split('|').filter((_, idx) => idx > 0 && idx < 4).map(c => c.trim());
        if (cells.length >= 2) {
          const term = cells[0];
          const def = cells[1];
          if (term.length > 2 && term.length < 60 && def.length > 5 && def.length < 300) {
            const key = term.toLowerCase();
            if (!seen.has(key)) {
              seen.add(key);
              safeTerms.push({ term, definition: cleanMd(def) });
            }
          }
        }
      }
    }
  }

  const learningObjectivesSec = sections.get('Learning Objectives') || sections.get('learning objectives') || '';
  const summarySec = sections.get('Summary') || sections.get('Chapter Summary') || sections.get('summary') || '';
  const theorySec = sections.get('Theory') || '';
  const examplesSec = sections.get('Examples') || sections.get('examples') || '';
  const quizSec = sections.get('Chapter Quiz') || '';

  return {
    title: extractTitle(markdown),
    subtitle: extractSubtitle(markdown),
    learningObjectives: extractLearningObjectives(learningObjectivesSec),
    concepts: safeTerms.filter(t => t.definition.length > 5 && t.definition.length < 300).slice(0, 15),
    workflow: extractWorkflow(theorySec || fullText).slice(0, 8),
    architecture: extractArchitecture(theorySec || fullText).slice(0, 6),
    algorithms: extractAlgorithms(fullText).slice(0, 4),
    formulas: extractFormulas(fullText).slice(0, 6),
    interviewQuestions: extractInterviewQA(fullText).slice(0, 6),
    commonMistakes: extractMistakes(fullText).slice(0, 5),
    keywords: extractKeywords(fullText).slice(0, 20),
    examples: extractExamples(fullText).slice(0, 4),
    comparisonTables: extractTables(fullText).slice(0, 3),
    quizQuestions: extractQuiz(quizSec || fullText).slice(0, 5),
    mainTakeaway: extractBoldTerms(summarySec).slice(0, 3).join('; ') || summarySec.replace(/\*\*/g, '').trim().replace(/^- /, '').slice(0, 200) || 'Master the core concepts covered in this chapter',
  };
}
