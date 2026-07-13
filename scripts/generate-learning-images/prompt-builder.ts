import { ConceptData, ImageType } from './types';

export interface ImageBrief {
  type: ImageType;
  prompt: string;
}

export function buildBrief(data: ConceptData, type: ImageType): string {
  const sharedHeader = `You are a Senior AI Education Illustrator creating professional educational assets for the "AI Engineering Journey" repository.

Goal: Teach concepts visually, not decorate pages.

Target Audience: Software Engineers, AI Engineers, Backend Developers, Students, Interview Preparation

Quality: Technically accurate, easy to understand, modern educational design, professional, no AI-art look, no watermark, no logos, no fake code, high readability.

Visual Style: White background, blue accent colors, minimalistic, clean typography, consistent spacing, flat vector illustrations, professional icons, educational diagrams, technical precision.

Never invent concepts. Only illustrate information provided in the lesson summary.`;

  const lessonContext = `
LESSON TITLE: ${data.title}
SUBTITLE: ${data.subtitle}
KEY TAKEAWAY: ${data.mainTakeaway}

KEYWORDS: ${data.keywords.map(k => k.term).join(', ')}
CONCEPTS: ${data.concepts.map(c => `${c.term}: ${c.definition}`).join(' | ')}
WORKFLOW: ${data.workflow.map(w => `Step ${w.step}: ${w.description}`).join(' -> ')}
ARCHITECTURE: ${data.architecture.map(a => `${a.component}: ${a.description}`).join(' | ')}
ALGORITHMS: ${data.algorithms.map(a => `${a.name}: ${a.description}`).join(' | ')}
FORMULAS: ${data.formulas.map(f => `${f.name}: ${f.expression}`).join(' | ')}
INTERVIEW Q&A: ${data.interviewQuestions.map(iq => `Q: ${iq.question} A: ${iq.answer}`).join(' | ')}
COMMON MISTAKES: ${data.commonMistakes.map(m => `${m.mistake} -> ${m.correction}`).join(' | ')}
EXAMPLES: ${data.examples.map(e => e.title).join(', ')}
QUIZ: ${data.quizQuestions.map(q => q.question).join(' | ')}
`;

  const typePrompts: Record<ImageType, string> = {
    'hero': `IMAGE TYPE: Chapter Hero Banner

Purpose: Represent the lesson visually as a documentation-style banner.

Large lesson title: "${data.title}"
Subtitle: "${data.subtitle || data.mainTakeaway}"

Minimal illustration representing the core concept. Blue gradient accents. Modern AI engineering aesthetic. Clean GitHub documentation style. Wide banner. No unnecessary text. Suitable as documentation cover.

${lessonContext}`,

    'handwritten-notes': `IMAGE TYPE: Handwritten Study Notes

Simulate a page from an engineering student's notebook. A4 graph paper style, blue handwriting, black headings, red highlights, pencil sketches, margin annotations, underlines, highlight boxes, flow arrows, sticky tabs, page number.

Rewrite the lesson into concise engineering notes including: Definition, Core idea, Important keywords, Mini diagrams, Small workflow, Tiny architecture sketch, Formula boxes, Algorithm outline, Memory trick, Interview question, Common mistake, Real-world example.

Content to illustrate:
${data.concepts.slice(0, 4).map(c => `• ${c.term}: ${c.definition}`).join('\n')}
${data.formulas.length > 0 ? `\nFormulas:\n${data.formulas.map(f => `• ${f.name}: ${f.expression}`).join('\n')}` : ''}
${data.workflow.length > 0 ? `\nWorkflow:\n${data.workflow.map(w => `${w.step}. ${w.description}`).join('\n')}` : ''}

Avoid: Long paragraphs, decorative drawings, cartoon style, unrealistic handwriting.`,

    'sticky-notes': `IMAGE TYPE: Sticky Notes Revision Sheet

Create a one-minute revision board with sticky notes on a white study desk. Each sticky contains exactly ONE concept.

Color Scheme: Yellow=Definition, Blue=Formula, Green=Shortcut, Pink=Interview, Orange=Warning, Purple=Mistake.

Each sticky includes: Title, One sentence, Keyword, Small icon, Difficulty, Memory trick.

Content:
${data.concepts.slice(0, 4).map(c => `[YELLOW] ${c.term}: ${c.definition.slice(0, 80)}`).join('\n')}
${data.formulas.slice(0, 2).map(f => `[BLUE] ${f.name}: ${f.expression.slice(0, 50)}`).join('\n')}
${data.interviewQuestions.slice(0, 2).map(iq => `[PINK] Q: ${iq.question.slice(0, 60)}`).join('\n')}
${data.commonMistakes.slice(0, 2).map(m => `[ORANGE] ${m.mistake.slice(0, 60)}`).join('\n')}

Layout: Arrange naturally. Add pen, coffee mug, notebook corner. Minimal realistic style. Readable typography.`,

    'visual-explanation': `IMAGE TYPE: Educational Infographic

Explain the concept visually so students understand it without reading the lesson.

Layout:
Large Title -> Problem -> Core Concept -> Architecture -> Workflow -> Data Flow -> Inputs -> Processing -> Outputs -> Real-world Example -> Interview Tips -> Summary

Use vector graphics, professional icons, blue color palette, white background, flat illustrations.

Show components, relationships, dependencies, data movement, process flow, inputs, outputs.

Content:
Title: ${data.title}
${data.concepts.slice(0, 3).map(c => `Core Concept: ${c.term} - ${c.definition}`).join('\n')}
${data.architecture.length > 0 ? `Architecture components: ${data.architecture.map(a => a.component).join(', ')}` : ''}
${data.workflow.length > 0 ? `Workflow steps: ${data.workflow.map(w => w.description).join(', ')}` : ''}
${data.examples.slice(0, 2).map(e => `Real-world example: ${e.title} - ${e.description.slice(0, 100)}`).join('\n')}

Every box must represent a real concept. Every arrow must explain information flow. Avoid decorative illustrations.`,

    'architecture': `IMAGE TYPE: System Architecture Diagram

Explain how the system is structured.

Include: User -> Input -> Processing Layer -> Models -> Memory -> External Tools -> Output

Show communication arrows, component boundaries, data flow, labels.

${data.architecture.length > 0 ? `Components:\n${data.architecture.map(a => `• ${a.component}: ${a.description.slice(0, 100)}`).join('\n')}` : `Components from this chapter:\n${data.concepts.slice(0, 5).map(c => `• ${c.term}`).join('\n')}`}

Modern architecture style. Technical accuracy. White background. Blue accent colors.`,

    'workflow': `IMAGE TYPE: Workflow Diagram

Explain the complete process step-by-step.

Use rounded process boxes, decision diamonds, input/output indicators, flow arrows. Number each step.

${data.workflow.length > 0 ? `Steps:\n${data.workflow.map(w => `Step ${w.step}: ${w.description}`).join('\n')}` : `Steps derived from:\n${data.concepts.slice(0, 5).map(c => c.term).join(' -> ')}`}

Educational process diagram. Professional documentation style. White background.`,

    'mindmap': `IMAGE TYPE: Mind Map

Connect every important concept.

Center: ${data.title}

Branches:
• Definition: ${data.concepts.slice(0, 3).map(c => c.term).join(', ')}
${data.architecture.length > 0 ? `• Components: ${data.architecture.map(a => a.component).join(', ')}` : ''}
${data.workflow.length > 0 ? `• Workflow: ${data.workflow.map(w => w.description.slice(0, 40)).join(', ')}` : ''}
${data.algorithms.length > 0 ? `• Algorithms: ${data.algorithms.map(a => a.name).join(', ')}` : ''}
${data.examples.length > 0 ? `• Applications: ${data.examples.map(e => e.title).join(', ')}` : ''}
• Interview Questions: ${data.interviewQuestions.length} questions
• Common Mistakes: ${data.commonMistakes.map(m => m.mistake.slice(0, 40)).join(', ')}
• Related Keywords: ${data.keywords.slice(0, 6).map(k => k.term).join(', ')}

Use curved connectors, icons, colors by category. Professional educational style. Minimal white background.`,

    'comparison': `IMAGE TYPE: Comparison Chart

Compare two or more concepts.

${data.comparisonTables.length > 0 ? `From chapter comparison table:\n${data.comparisonTables[0].headers.join(' | ')}\n${data.comparisonTables[0].rows.slice(0, 6).map(r => r.join(' | ')).join('\n')}` : `Compare these concepts:\n${data.concepts.slice(0, 4).map(c => `${c.term}: ${c.definition.slice(0, 60)}`).join('\n')}`}

Columns: Feature, Concept A, Concept B, Concept C. Rows: Purpose, Advantages, Disadvantages, Performance, Use Cases, Best Choice.

Professional comparison infographic. White background. Blue accents. Clean table layout.`,

    'cheatsheet': `IMAGE TYPE: Interview Cheat Sheet

Single-page quick revision. Multi-column layout.

Include:
Definitions: ${data.concepts.slice(0, 5).map(c => `${c.term}: ${c.definition.slice(0, 40)}`).join(' | ')}
${data.formulas.length > 0 ? `Formulas: ${data.formulas.map(f => `${f.name} = ${f.expression.slice(0, 30)}`).join(' | ')}` : ''}
${data.algorithms.length > 0 ? `Algorithms: ${data.algorithms.map(a => a.name).join(', ')}` : ''}
Best Practices: Focus on core concepts, practice implementation, review common mistakes.
Pitfalls: ${data.commonMistakes.map(m => m.mistake.slice(0, 40)).join(', ')}
Interview Questions: ${data.interviewQuestions.slice(0, 3).map(iq => iq.question.slice(0, 50)).join(' | ')}
Memory Tricks: ${data.keywords.slice(0, 5).map(k => k.term).join(', ')}

Designed for last-minute interview revision. Clean multi-column layout. Professional. Readable.`,

    'interview-quiz': `IMAGE TYPE: Self-Test Card

Create 5 Multiple Choice Questions, 2 True/False, 2 Scenario Questions, one answer key.

${data.quizQuestions.length >= 2 ? `From chapter quiz:\n${data.quizQuestions.slice(0, 5).map((q, i) => `${i + 1}. ${q.question}\n   Options: ${q.options.join(', ')}`).join('\n')}` : `Sample questions from chapter content:\n${data.interviewQuestions.slice(0, 3).map((iq, i) => `${i + 1}. ${iq.question.slice(0, 80)}`).join('\n')}`}

Difficulty badges. Professional flashcard design. Minimal. Readable. White background.`,

    'social-card': `IMAGE TYPE: Social Preview Card (GitHub Open Graph image)

Repository: AI Engineering Journey

Include lesson title "${data.title}", small subtitle "${data.subtitle || data.mainTakeaway}", minimal concept illustration, repository branding.

Blue-white modern theme. 16:9 aspect ratio. Readable at thumbnail size.

${lessonContext}`,
  };

  return `${sharedHeader}\n\n${typePrompts[type]}`;
}

export function buildAllBriefs(data: ConceptData): ImageBrief[] {
  return (['hero', 'handwritten-notes', 'sticky-notes', 'visual-explanation', 'architecture', 'workflow', 'mindmap', 'comparison', 'cheatsheet', 'interview-quiz', 'social-card'] as ImageType[]).map(type => ({
    type,
    prompt: buildBrief(data, type),
  }));
}
