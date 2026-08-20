export interface Course {
  name: string;
  slug: string;
  category: string;
}

export const courses: Course[] = [
  { name: 'AI Engineering Placement', slug: 'ai-engineering-placement', category: 'Core' },
  { name: 'Machine Learning', slug: 'machine-learning', category: 'AI/ML' },
  { name: 'Modern AI Engineering', slug: 'modern-ai-engineering', category: 'AI/ML' },
  { name: 'Applied AI', slug: 'applied-ai', category: 'AI/ML' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence', category: 'AI/ML' },
  { name: 'AI Agent Engineer', slug: 'ai-agent-engineer', category: 'AI/ML' },
  { name: 'Big Data', slug: 'big-data', category: 'AI/ML' },
  { name: 'Data Analysis & Interpretation', slug: 'data-analysis-interpretation', category: 'AI/ML' },
  { name: 'Learning Course', slug: 'learning-course', category: 'AI/ML' },
  { name: 'Data Structures', slug: 'data-structures', category: 'CS Core' },
  { name: 'Algorithms', slug: 'algorithms', category: 'CS Core' },
  { name: 'System Design', slug: 'system-design', category: 'CS Core' },
  { name: 'Database Management Systems', slug: 'database-management-systems', category: 'CS Core' },
  { name: 'Computer Networks', slug: 'computer-networks', category: 'CS Core' },
  { name: 'Operating Systems', slug: 'operating-systems', category: 'CS Core' },
  { name: 'Computer Architecture', slug: 'computer-architecture', category: 'CS Core' },
  { name: 'Compiler Design', slug: 'compiler-design', category: 'CS Core' },
  { name: 'Theory of Computation', slug: 'theory-of-computation', category: 'CS Core' },
  { name: 'Discrete Mathematics', slug: 'discrete-mathematics', category: 'CS Core' },
  { name: 'Digital Logic', slug: 'digital-logic', category: 'CS Core' },
  { name: 'Python Programming', slug: 'python-programming', category: 'Programming' },
  { name: 'Java', slug: 'java', category: 'Programming' },
  { name: 'C Programming', slug: 'c-programming', category: 'Programming' },
  { name: 'C++ (OOP)', slug: 'oop-cpp', category: 'Programming' },
  { name: 'Laravel', slug: 'laravel', category: 'Programming' },
  { name: 'Software Engineering', slug: 'software-engineering', category: 'Programming' },
  { name: 'Web Development', slug: 'web-development', category: 'Programming' },
  { name: 'Cloud Computing', slug: 'cloud-computing', category: 'DevOps' },
  { name: 'DevOps', slug: 'devops', category: 'DevOps' },
  { name: 'Cyber Security', slug: 'cyber-security', category: 'Security' },
  { name: 'Information Security', slug: 'information-security', category: 'Security' },
  { name: 'Blockchain', slug: 'blockchain', category: 'Security' },
  { name: 'Engineering Mathematics', slug: 'engineering-mathematics', category: 'Aptitude' },
  { name: 'Quantitative Aptitude', slug: 'quantitative-aptitude', category: 'Aptitude' },
  { name: 'Reasoning Ability', slug: 'reasoning-ability', category: 'Aptitude' },
  { name: 'General Aptitude', slug: 'general-aptitude', category: 'Aptitude' },
  { name: 'English Language', slug: 'english-language', category: 'Aptitude' },
  { name: 'Hindi Language', slug: 'hindi-language', category: 'Aptitude' },
  { name: 'Marketing Aptitude', slug: 'marketing-aptitude', category: 'Aptitude' },
  { name: 'Banking Financial Awareness', slug: 'banking-financial-awareness', category: 'Aptitude' },
  { name: 'Banking Technology', slug: 'banking-technology', category: 'Aptitude' },
  { name: 'General Awareness', slug: 'general-awareness', category: 'Aptitude' },
  { name: 'Professional Knowledge', slug: 'professional-knowledge', category: 'Placement' },
  { name: 'Interview Preparation', slug: 'interview-preparation', category: 'Placement' },
  { name: 'Job Preparation', slug: 'job-preparation', category: 'Placement' },
  { name: 'Placement Preparation', slug: 'placement-preparation', category: 'Placement' },
  { name: 'Mock Tests', slug: 'mock-tests', category: 'Placement' },
  { name: 'Coding Problems', slug: 'coding-problems', category: 'Placement' },
  { name: 'Speed Drills', slug: 'speed-drills', category: 'Placement' },
  { name: 'Government Exams', slug: 'government-exams', category: 'Placement' },
  { name: 'Government PYQs', slug: 'government-pyqs', category: 'Placement' },
  { name: 'GATE CS Preparation', slug: 'gate-cs-preparation', category: 'Placement' },
  { name: 'Loop Engineering', slug: 'loop-engineering', category: 'Meta' },
  { name: 'Learning How to Learn', slug: 'learning-how-to-learn', category: 'Meta' },
  { name: 'Learning How to Learn (Practical)', slug: 'learning-how-to-learn-practical', category: 'Meta' },
  { name: 'AI-Powered Learning', slug: 'ai-powered-learning', category: 'Meta' },
  { name: 'Vigyan Bhairav Tantra', slug: 'vigyan-bhairav-tantra', category: 'Meta' },
  { name: 'Geeta Darshan', slug: 'geeta-darshan', category: 'Meta' },
  { name: 'The Complete Bhagavad Gita', slug: 'bhagavad-gita', category: 'Meta' },
];

export const categories = [...new Set(courses.map((c) => c.category))];

export const categoryColors: Record<string, string> = {
  Core: '#059669',
  'AI/ML': '#7c3aed',
  'CS Core': '#2563eb',
  Programming: '#d97706',
  DevOps: '#0891b2',
  Security: '#dc2626',
  Aptitude: '#4f46e5',
  Placement: '#ea580c',
  Meta: '#64748b',
};

export function coursesByCategory(): { category: string; items: Course[] }[] {
  return categories.map((category) => ({
    category,
    items: courses.filter((c) => c.category === category),
  }));
}
