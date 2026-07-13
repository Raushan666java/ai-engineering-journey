import { ConceptData } from './types';

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
  for (const line of lines) {
    if (line.startsWith('# ')) { afterTitle = true; continue; }
    if (afterTitle && line.trim() && !line.startsWith('#')) {
      const clean = line.replace(/^>\s*/, '').replace(/\*\*/g, '').trim();
      if (clean.length > 10) return clean.slice(0, 200);
    }
    if (afterTitle && line.startsWith('##')) break;
  }
  return '';
}

function extractBoldTerms(text: string): string[] {
  const terms: string[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    const t = m[1].trim();
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
  const patterns = [
    /\*\*([^*]+)\*\*\s*[:\u2013]\s*(.{10,200})/g,
    /\*\*([^*]+)\*\*\s+is\s+(a|an|the)\s+(.{10,200})/gi,
    /\*\*([^*]+)\*\*\s+refers?\s+to\s+(.{10,200})/gi,
    /([A-Z][a-z]+(?:[\s-][A-Z][a-z]+)*)\s*(?:is|are)\s+(.{10,200})/g,
  ];
  for (const pattern of patterns) {
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(text)) !== null) {
      const term = m[1].trim();
      const def = (m[2] + ' ' + (m[3] || '')).trim();
      if (term.length < 60 && def.length < 300) {
        result.push({ term, definition: def.replace(/\*\*/g, '').replace(/\s+/g, ' ') });
      }
    }
  }
  return result;
}

function extractFormulas(text: string): { name: string; expression: string; description: string }[] {
  const result: { name: string; expression: string; description: string }[] = [];
  const displayMath = /\$\$([\s\S]*?)\$\$/g;
  let m: RegExpExecArray | null;
  while ((m = displayMath.exec(text)) !== null) {
    const expr = m[1].trim();
    const before = text.slice(Math.max(0, m.index - 120), m.index);
    const nameMatch = before.match(/\*\*([^*]+)\*\*/g);
    const name = nameMatch ? nameMatch[nameMatch.length - 1].replace(/\*\*/g, '') : (result.length + 1).toString();
    result.push({ name, expression: expr.replace(/\s+/g, ' ').slice(0, 150), description: '' });
  }
  const inlineMath = /\$([^$]+)\$/g;
  while ((m = inlineMath.exec(text)) !== null) {
    const expr = m[1].trim();
    if (expr.length > 5 && /[=\\^_]/.test(expr)) {
      const before = text.slice(Math.max(0, m.index - 80), m.index);
      const nameMatch = before.match(/\*\*([^*]+)\*\*/);
      const name = nameMatch ? nameMatch[1] : (result.length + 1).toString();
      result.push({ name, expression: expr.slice(0, 100), description: '' });
    }
  }
  return result;
}

function extractTables(text: string): { headers: string[]; rows: string[][] }[] {
  const tables: { headers: string[]; rows: string[][] }[] = [];
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
      if (headers.length > 1) tables.push({ headers, rows });
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
    if (trimmed.startsWith('|') || !trimmed) continue;
    const bold = trimmed.match(/^\*\*([^*]+)\*\*/);
    if (bold) {
      if (currentComponent) {
        result.push({ component: currentComponent, description: currentDesc.slice(0, 200).replace(/\|/g, ''), connections: [] });
      }
      currentComponent = bold[1];
      currentDesc = trimmed.replace(/^\*\*[^*]+\*\*\s*/, '');
    } else if (currentComponent && trimmed.length > 5) {
      currentDesc += ' ' + trimmed;
    }
  }
  if (currentComponent) {
    result.push({ component: currentComponent, description: currentDesc.slice(0, 200), connections: [] });
  }

  if (result.length === 0) {
    const archPatterns = ['layer', 'component', 'module', 'service', 'pipeline', 'agent', 'stack', 'tier'];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') || trimmed.startsWith('```') || !trimmed) continue;
      const lower = trimmed.toLowerCase();
      if (archPatterns.some(p => lower.includes(p)) && trimmed.length > 10 && trimmed.length < 200) {
        result.push({
          component: trimmed.split(/[:\u2013-]/)[0].replace(/\*\*/g, '').trim().slice(0, 40),
          description: trimmed.replace(/\*\*/g, '').trim().slice(0, 200),
          connections: [],
        });
      }
    }
  }

  return result.slice(0, 8);
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
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const lower = trimmed.toLowerCase();
    if (lower.includes('common mistake') || lower.includes('pitfall') || lower.includes('warning') ||
        lower.includes('wrong') || lower.includes('incorrect')) {
      const correction = lines[i + 1] ? lines[i + 1].replace(/\*\*/g, '').trim() : '';
      result.push({
        mistake: trimmed.replace(/\*\*/g, '').slice(0, 150),
        correction: correction.slice(0, 200) || 'Avoid this error',
      });
    }
  }

  const blockquoteMistakes = text.matchAll(/>\s*\*\*(?:Warning|Mistake|Caution)\*\*:?\s*(.+?)(?=\n>|\n\n|\n##)/gis);
  for (const m of blockquoteMistakes) {
    const full = m[1].trim();
    const parts = full.split(/[.;]/);
    result.push({
      mistake: (parts[0] || full).replace(/\*\*/g, '').slice(0, 150),
      correction: (parts[1] || 'Review the correct approach').trim().slice(0, 200),
    });
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
  const categories = ['concept', 'definition', 'algorithm', 'tool', 'technique'];
  const keywords: { term: string; category: string }[] = [];

  for (const term of terms) {
    const lower = term.toLowerCase();
    let category = 'concept';
    if (lower.includes('algorithm') || lower.includes('sort') || lower.includes('search')) category = 'algorithm';
    else if (lower.includes('function') || lower.includes('method') || lower.includes('api')) category = 'technique';
    else if (lower.includes('tool') || lower.includes('framework') || lower.includes('library')) category = 'tool';
    else if (lower.includes('definition') || lower.includes('principle') || lower.includes('law')) category = 'definition';
    keywords.push({ term: term.slice(0, 50), category });
  }

  return [...new Map(keywords.map(k => [k.term, k])).values()].slice(0, 20);
}

function extractQuiz(text: string): { question: string; options: string[]; answerIndex: number; explanation: string }[] {
  const result: { question: string; options: string[]; answerIndex: number; explanation: string }[] = [];
  const quizSection = text.match(/##\s+Chapter Quiz[\s\S]*?(?=\n##\s|$)/);
  if (!quizSection) return result;

  const lines = quizSection[0].split('\n');
  let currentQ = '';
  let currentOptions: string[] = [];
  let currentAnswer = '';
  let currentExplanation = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^\d+[.)]\s+/.test(trimmed) && !trimmed.startsWith('-') && trimmed.length > 10) {
      if (currentQ && currentOptions.length > 0) {
        const answerIdx = currentOptions.findIndex(o => o.startsWith('✓') || o.startsWith('*'));
        result.push({
          question: currentQ,
          options: currentOptions.map(o => o.replace(/^[✓*]\s*/, '')),
          answerIndex: answerIdx >= 0 ? answerIdx : 0,
          explanation: currentExplanation.slice(0, 200),
        });
      }
      currentQ = trimmed.replace(/^\d+[.)]\s+/, '');
      currentOptions = [];
      currentAnswer = '';
      currentExplanation = '';
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const optText = trimmed.replace(/^[-*]\s+/, '');
      currentOptions.push(optText);
    } else if (trimmed.startsWith('**Answer:') || trimmed.startsWith('**Answer**')) {
      currentAnswer = trimmed.replace(/^\*\*Answer\*\*:?\s*/i, '').replace(/\*\*/g, '');
      currentExplanation = currentAnswer;
    }
  }

  if (currentQ && currentOptions.length > 0) {
    const answerIdx = currentOptions.findIndex(o => o.startsWith('✓') || o.startsWith('*'));
    result.push({
      question: currentQ,
      options: currentOptions.map(o => o.replace(/^[✓*]\s*/, '')),
      answerIndex: answerIdx >= 0 ? answerIdx : 0,
      explanation: currentExplanation.slice(0, 200),
    });
  }

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
    mainTakeaway: extractBoldTerms(summarySec).slice(0, 3).join('; ') || summarySec.replace(/\*\*/g, '').trim().slice(0, 200) || 'Master the core concepts covered in this chapter',
  };
}
