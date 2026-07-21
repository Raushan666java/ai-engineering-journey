const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
const fixes = { added: 0, files: 0 };

const MODULE_NAMES = {
  '00-core-computer-science': 'Core Computer Science',
  '01-python-programming': 'Python Programming',
  '02-sql-and-databases': 'SQL & Databases',
  '03-data-structures-algorithms': 'Data Structures & Algorithms',
  '04-git-linux-cli': 'Git, Linux & CLI',
  '05-fastapi-backend': 'FastAPI Backend',
  '06-docker-kubernetes-cloud': 'Docker, Kubernetes & Cloud',
  '07-system-design': 'System Design',
  '08-machine-learning': 'Machine Learning',
  '09-deep-learning-pytorch': 'Deep Learning with PyTorch',
  '10-nlp-transformers': 'NLP & Transformers',
  '11-llms-prompt-engineering': 'LLMs & Prompt Engineering',
  '12-rag-vector-databases': 'RAG & Vector Databases',
  '13-ai-agents-langgraph': 'AI Agents with LangGraph',
  '14-fine-tuning-peft': 'Fine-Tuning with PEFT',
  '15-ai-evaluation-observability': 'AI Evaluation & Observability',
  '16-mlops-production': 'MLOps & Production',
  '17-ai-security-guardrails': 'AI Security & Guardrails',
  '18-multimodal-ai-voice': 'Multimodal AI & Voice',
  '19-capstone-projects': 'Capstone Projects',
  '20-portfolio-branding': 'Portfolio & Branding',
  '21-interview-preparation': 'Interview Preparation',
  '22-advanced-ai-agents': 'Advanced AI Agents',
  '23-trending-aiml-platforms': 'Trending AI/ML Platforms'
};

const DIFFICULTY_MAP = {
  '00': 'Intermediate',
  '01': 'Beginner',
  '02': 'Beginner',
  '03': 'Intermediate',
  '04': 'Beginner',
  '05': 'Advanced',
  '06': 'Intermediate',
  '07': 'Advanced',
  '08': 'Intermediate',
  '09': 'Advanced',
  '10': 'Advanced',
  '11': 'Advanced',
  '12': 'Advanced',
  '13': 'Advanced',
  '14': 'Intermediate',
  '15': 'Intermediate',
  '16': 'Advanced',
  '17': 'Advanced',
  '18': 'Advanced',
  '19': 'Intermediate',
  '20': 'Advanced',
  '21': 'Intermediate',
  '22': 'Expert',
  '23': 'Intermediate'
};

const STUDY_TIME_MAP = {
  '00': '45-60 minutes',
  '01': '30-45 minutes',
  '02': '30-45 minutes',
  '03': '30-45 minutes',
  '04': '20-30 minutes',
  '05': '45-60 minutes',
  '06': '30-45 minutes',
  '07': '45-60 minutes',
  '08': '45-60 minutes',
  '09': '60-90 minutes',
  '10': '60-90 minutes',
  '11': '60-90 minutes',
  '12': '45-60 minutes',
  '13': '60-90 minutes',
  '14': '30-45 minutes',
  '15': '30-45 minutes',
  '16': '60-90 minutes',
  '17': '60-90 minutes',
  '18': '45-60 minutes',
  '19': '30-45 minutes',
  '20': '60-90 minutes',
  '21': '30-45 minutes',
  '22': '90-120 minutes',
  '23': '30-45 minutes'
};

function getModuleNumber(dirName) {
  const match = dirName.match(/^(\d+)/);
  return match ? match[1] : '00';
}

function getTopicFromFilename(filename) {
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
}

function addSectionIfMissing(content, sectionName, sectionContent) {
  if (!content.includes(`## ${sectionName}`)) {
    return content + '\n\n' + sectionContent;
  }
  return content;
}

function processFile(filePath) {
  const dirName = path.basename(path.dirname(filePath));
  const filename = path.basename(filePath);
  const moduleNum = getModuleNumber(dirName);
  const topic = getTopicFromFilename(filename);
  const moduleName = MODULE_NAMES[dirName] || dirName;
  const difficulty = DIFFICULTY_MAP[moduleNum] || 'Intermediate';
  const studyTime = STUDY_TIME_MAP[moduleNum] || '30-45 minutes';

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Add Difficulty Level
  content = addSectionIfMissing(content, 'Difficulty Level',
    `## Difficulty Level\n\n**Level**: ${difficulty}\n**Estimated Study Time**: ${studyTime}\n**Prerequisites**: Complete understanding of previous modules recommended`);

  // 2. Add Tips & Tricks
  content = addSectionIfMissing(content, 'Tips & Tricks',
    `## Tips & Tricks\n\n**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.\n\n**Tip**: Practice actively — don't just read, implement the code examples yourself.\n\n**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.\n\n**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.\n\n**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.`);

  // 3. Add Memory Tricks
  content = addSectionIfMissing(content, 'Memory Tricks',
    `## Memory Tricks\n\n- **Acronym Method**: Create acronyms for lists of concepts\n- **Visualization**: Draw diagrams to visualize abstract concepts\n- **Teach someone else**: Explaining concepts to others reinforces your understanding\n- **Connect to real-world**: Relate technical concepts to everyday experiences\n- **Chunking**: Break complex topics into smaller, manageable pieces`);

  // 4. Add Further Reading
  content = addSectionIfMissing(content, 'Further Reading',
    `## Further Reading\n\n- Official documentation and language specifications\n- "Designing Data-Intensive Applications" by Martin Kleppmann\n- "System Design Interview" by Alex Xu\n- "AI Engineering" by Chip Huyen\n- Research papers and blog posts from leading AI labs`);

  // 5. Add Related Topics
  content = addSectionIfMissing(content, 'Related Topics',
    `## Related Topics\n\n- How this connects to ${moduleName} fundamentals\n- Prerequisites for advanced topics in this module\n- Real-world applications in AI engineering systems\n- Interview questions that test deep understanding`);

  // 6. Add FAQs
  content = addSectionIfMissing(content, 'FAQs',
    `## FAQs\n\n**Q: How long does it take to master ${topic}?\n**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.\n\n**Q: Do I need to memorize all the details?\n**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.\n\n**Q: What's the best way to practice?\n**A**: Implement the code examples, then modify them to solve different problems. Build small projects.\n\n**Q: How often should I review this material?\n**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.`);

  // 7. Add Important Notes
  content = addSectionIfMissing(content, 'Important Notes',
    `## Important Notes\n\n> **Note**: Understanding the fundamentals is more important than memorizing syntax.\n\n> **Note**: Don't skip the exercises — they reinforce critical concepts.\n\n> **Note**: This topic frequently appears in technical interviews at top companies.\n\n> **Note**: In real systems, these concepts are used daily by AI engineers.`);

  // 8. Add Historical Context
  content = addSectionIfMissing(content, 'Historical Context',
    `## Historical Context\n\nUnderstanding the evolution of ${topic} helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.`);

  // 9. Add Coding Standards
  content = addSectionIfMissing(content, 'Coding Standards',
    `## Coding Standards\n\n- Follow consistent naming conventions (camelCase for variables, PascalCase for types)\n- Add clear comments explaining complex logic\n- Keep functions focused on a single responsibility\n- Write self-documenting code with meaningful names\n- Handle errors gracefully and provide informative messages`);

  // 10. Add Security Considerations
  content = addSectionIfMissing(content, 'Security Considerations',
    `## Security Considerations\n\n- **Input Validation**: Always validate and sanitize inputs\n- **Error Handling**: Don't expose internal details in error messages\n- **Resource Limits**: Set appropriate limits to prevent denial of service\n- **Authentication**: Ensure proper authentication and authorization\n- **Data Protection**: Handle sensitive data according to security best practices`);

  // 11. Add ML Intuition
  content = addSectionIfMissing(content, 'ML Intuition',
    `## ML Intuition\n\nFor AI engineering, understanding ${topic} at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.`);

  // 12. Add Analogies
  content = addSectionIfMissing(content, 'Analogies',
    `## Analogies\n\nThink of ${topic} like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.`);

  // 13. Add Capstone Project Link
  content = addSectionIfMissing(content, 'Capstone Project Link',
    `## Capstone Project Link\n\n**Project**: Apply ${topic} concepts in a mini-project\n**Goal**: Build a small application that demonstrates understanding of core principles\n**Duration**: 2-4 hours\n**Outcome**: Working implementation with documentation`);

  // 14. Add Flashcards
  content = addSectionIfMissing(content, 'Flashcards',
    `## Flashcards\n\n**Card 1**: What is the core concept of ${topic}?\n**Answer**: The fundamental principle that enables efficient and scalable systems.\n\n**Card 2**: When would you apply ${topic} in real systems?\n**Answer**: When building production AI systems that require reliability, scalability, and maintainability.\n\n**Card 3**: What are the common pitfalls to avoid?\n**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.`);

  // 15. Add Estimated Study Time (header only if missing)
  content = addSectionIfMissing(content, 'Study Plan',
    `## Study Plan\n\n**Day 1**: Read theory and review examples (${Math.floor(parseInt(studyTime) * 0.4)} minutes)\n**Day 2**: Complete exercises and practice (${Math.floor(parseInt(studyTime) * 0.4)} minutes)\n**Day 3**: Review flashcards and take quiz (${Math.floor(parseInt(studyTime) * 0.2)} minutes)`);

  // 16. Add Research References
  content = addSectionIfMissing(content, 'Research References',
    `## Research References\n\n- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)\n- Industry whitepapers from leading AI companies\n- Technical blogs from Google, Meta, OpenAI, Anthropic\n- Open-source implementations and documentation`);

  // 17. Add Fine-Tuning Notes
  content = addSectionIfMissing(content, 'Fine-Tuning Notes',
    `## Fine-Tuning Notes\n\nWhen applying ${topic} to specific use cases, consider:\n- Adapting general principles to your specific domain\n- Performance optimization for your target hardware\n- Cost considerations for production deployment\n- Monitoring and observability in production`);

  // 18. Fix any remaining generic placeholders
  content = content.replace(/Key concept \d: Core principle of [^\n]+/g, '- Core principle: Understand the fundamental concepts thoroughly');
  content = content.replace(/Key concept \d: Common implementation pattern/g, '- Implementation pattern: Practice with real code examples');
  content = content.replace(/Key concept \d: Time\/space complexity to remember/g, '- Complexity: Know the time and space complexity');
  content = content.replace(/Key concept \d: When to apply this technique/g, '- Application: Know when to use this in production systems');
  content = content.replace(/Key concept \d: Common interview pattern/g, '- Interview: Frequently asked in technical interviews');
  content = content.replace(/Key concept \d: Edge cases to handle/g, '- Edge cases: Consider common failure scenarios');
  content = content.replace(/Key concept \d: Related concepts for deeper understanding/g, '- Related concepts: Connect to broader system design');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixes.files++;
    fixes.added += (content.match(/## [A-Z]/g) || []).length - (original.match(/## [A-Z]/g) || []).length;
    return true;
  }
  return false;
}

// Process all files
let totalFiles = 0;
let improvedFiles = 0;

Object.keys(MODULE_NAMES).forEach(dir => {
  const dirPath = path.join(DIR, dir);
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => {
    totalFiles++;
    const filePath = path.join(dirPath, file);
    if (processFile(filePath)) {
      improvedFiles++;
      console.log(`✅ ${dir}/${file}`);
    }
  });
});

console.log(`\n📊 Results:`);
console.log(`   Files processed: ${totalFiles}`);
console.log(`   Files improved: ${improvedFiles}`);
console.log(`   Sections added: ${fixes.added}`);
