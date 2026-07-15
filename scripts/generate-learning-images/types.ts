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
  'handwritten-notes',
  'sticky-notes',
  'visual-explanation',
] as const;

export type ImageType = typeof IMAGE_TYPES[number];

export const IMAGE_SIZES: Record<ImageType, { w: number; h: number }> = {
  'handwritten-notes': { w: 600, h: 800 },
  'sticky-notes': { w: 800, h: 600 },
  'visual-explanation': { w: 1000, h: 700 },
};
