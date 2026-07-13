export interface ConceptData {
  title: string;
  subtitle: string;
  learningObjectives: string[];
  concepts: { term: string; definition: string }[];
  workflow: { step: number; description: string; details?: string[] }[];
  architecture: { component: string; description: string; connections: string[] }[];
  algorithms: { name: string; description: string; steps: string[] }[];
  formulas: { name: string; expression: string; description: string }[];
  interviewQuestions: { question: string; answer: string }[];
  commonMistakes: { mistake: string; correction: string }[];
  keywords: { term: string; category: string }[];
  examples: { title: string; description: string; code?: string }[];
  comparisonTables: { title: string; headers: string[]; rows: string[][] }[];
  quizQuestions: { question: string; options: string[]; answerIndex: number; explanation: string }[];
  mainTakeaway: string;
}

export interface LessonImages {
  chapterSlug: string;
  courseSlug: string;
  data: ConceptData;
}

export interface ImageFile {
  type: string;
  filename: string;
  svg: string;
}

export const IMAGE_TYPES = [
  'hero',
  'handwritten-notes',
  'sticky-notes',
  'visual-explanation',
  'architecture',
  'workflow',
  'mindmap',
  'comparison',
  'cheatsheet',
  'interview-quiz',
  'social-card',
] as const;

export type ImageType = typeof IMAGE_TYPES[number];

export const IMAGE_SIZES: Record<ImageType, { w: number; h: number }> = {
  'hero': { w: 1200, h: 400 },
  'handwritten-notes': { w: 600, h: 800 },
  'sticky-notes': { w: 800, h: 600 },
  'visual-explanation': { w: 1000, h: 700 },
  'architecture': { w: 800, h: 600 },
  'workflow': { w: 800, h: 600 },
  'mindmap': { w: 800, h: 700 },
  'comparison': { w: 900, h: 600 },
  'cheatsheet': { w: 600, h: 900 },
  'interview-quiz': { w: 600, h: 800 },
  'social-card': { w: 1200, h: 630 },
};
