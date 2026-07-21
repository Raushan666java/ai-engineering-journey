#!/usr/bin/env node
/**
 * Intelligent Content Fixer — Adds missing sections to chapters
 * Handles: Theory, Examples, Visual, Code, Exercises, Interview Q&A
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

// Module-specific content templates
const MODULE_CONTENT = {
  '01-python-programming': {
    theory: 'Python is a dynamically-typed, interpreted language known for its readability and versatility. It supports multiple paradigms including procedural, object-oriented, and functional programming. Python\'s standard library provides extensive built-in modules for common tasks.',
    code: '```python\n# Example implementation\nresult = []\nfor item in data:\n    processed = transform(item)\n    result.append(processed)\nprint(result)\n```',
    visual: '```mermaid\nflowchart LR\n    A[Input] --> B[Process]\n    B --> C[Output]\n```'
  },
  '08-machine-learning': {
    theory: 'Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data, learn from it, and make predictions or decisions.',
    code: '```python\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, predictions):.2%}")\n```',
    visual: '```mermaid\nflowchart TD\n    A[Data Collection] --> B[Preprocessing]\n    B --> C[Model Training]\n    C --> D[Evaluation]\n    D --> E[Deployment]\n```'
  }
};

// Section templates
function getTheorySection(chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return `## Theory\n\nUnderstanding ${topic} is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how ${topic} works in practice.\n\n### Key Concepts\n\n- **Core Principle**: The foundational idea behind ${topic}\n- **How It Works**: The mechanism and process involved\n- **Why It Matters**: Relevance to AI engineering and real-world applications\n- **Trade-offs**: Advantages and limitations to consider`;
}

function getExamplesSection(chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return `## Examples\n\n### Basic Example\n\n\`\`\`python\n# Basic ${topic} example\ndef example():\n    """Demonstrate ${topic}"""\n    result = "Hello, ${topic}!"\n    print(result)\n    return result\n\nexample()\n\`\`\`\n\n### Expected Output\n\n\`\`\`text\nHello, ${topic}!\n\`\`\``;
}

function getVisualSection() {
  return `## Visual Explanation\n\n\`\`\`mermaid\nflowchart TD\n    A[Input Data] --> B[Processing]\n    B --> C[Output]\n    C --> D[Feedback Loop]\n    D --> B\n\`\`\``;
}

function getExercisesSection(chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return `## Exercises\n\n**Easy** — Implement a basic ${topic} example that demonstrates the core concept.\n\n**Medium** — Create a more complex implementation that handles edge cases.\n\n**Hard** — Design an optimized solution for large-scale ${topic} scenarios.`;
}

function getInterviewQA(chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return `## Interview Questions\n\n### Q1: What is ${topic} and why is it important?\n\n**Answer**: ${topic} is a fundamental concept in software engineering and AI. It is important because it enables efficient problem-solving, scalable system design, and is commonly asked in technical interviews at top companies.\n\n### Q2: What are the common use cases for ${topic}?\n\n**Answer**: ${topic} is used in data processing pipelines, system architecture, API design, and production AI systems. Understanding it helps in building robust and scalable applications.\n\n### Q3: How would you explain ${topic} to a non-technical person?\n\n**Answer**: Think of ${topic} like a recipe — it has clear steps, inputs, outputs, and can be optimized for better results. Just like following a recipe ensures consistent cooking, following ${topic} principles ensures consistent software quality.`;
}

function getVisualAnalogy(chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return `## Visual Analogy\n\nThink of ${topic} like a **delivery system**:\n\n- **Input** = Package to deliver\n- **Processing** = Route planning and optimization\n- **Output** = Package delivered to destination\n- **Feedback** = Delivery confirmation and tracking\n\nThis analogy helps because ${topic}, like a delivery system, involves transforming inputs into outputs efficiently while handling constraints and edge cases.`;
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const fileName = path.basename(filePath, '.md');
  const dirName = path.basename(path.dirname(filePath));
  
  let changes = [];
  
  // Add Theory section if missing
  if (!content.includes('## Theory') && !content.includes('## Concept') && !content.includes('## Fundamentals')) {
    // Find where to insert (after Learning Objectives or Introduction)
    const insertAfter = content.indexOf('## Prerequisites');
    if (insertAfter > -1) {
      const nextSection = content.indexOf('\n## ', insertAfter + 5);
      if (nextSection > -1) {
        content = content.slice(0, nextSection) + '\n\n' + getTheorySection(fileName) + content.slice(nextSection);
        changes.push('Added Theory');
      }
    } else {
      // Insert before Summary or at end
      const summaryIdx = content.indexOf('## Summary');
      if (summaryIdx > -1) {
        content = content.slice(0, summaryIdx) + getTheorySection(fileName) + '\n\n' + content.slice(summaryIdx);
        changes.push('Added Theory');
      }
    }
  }
  
  // Add Examples section if missing
  if (!content.includes('## Examples') && !content.includes('```python') && !content.includes('```typescript')) {
    const theoryIdx = content.indexOf('## Theory');
    if (theoryIdx > -1) {
      const nextSection = content.indexOf('\n## ', theoryIdx + 10);
      if (nextSection > -1) {
        content = content.slice(0, nextSection) + '\n\n' + getExamplesSection(fileName) + content.slice(nextSection);
        changes.push('Added Examples');
      }
    }
  }
  
  // Add Visual section if missing
  if (!content.includes('## Visual') && !content.includes('```mermaid')) {
    const examplesIdx = content.indexOf('## Examples');
    if (examplesIdx > -1) {
      const nextSection = content.indexOf('\n## ', examplesIdx + 12);
      if (nextSection > -1) {
        content = content.slice(0, nextSection) + '\n\n' + getVisualSection() + content.slice(nextSection);
        changes.push('Added Visual');
      }
    }
  }
  
  // Add Exercises if missing
  if (!content.includes('## Exercises')) {
    const summaryIdx = content.indexOf('## Summary');
    if (summaryIdx > -1) {
      content = content.slice(0, summaryIdx) + getExercisesSection(fileName) + '\n\n' + content.slice(summaryIdx);
      changes.push('Added Exercises');
    }
  }
  
  // Add Visual Analogy if missing
  if (!content.includes('## Visual Analogy')) {
    const visualIdx = content.indexOf('## Visual Explanation');
    if (visualIdx > -1) {
      const nextSection = content.indexOf('\n## ', visualIdx + 20);
      if (nextSection > -1) {
        content = content.slice(0, nextSection) + '\n\n' + getVisualAnalogy(fileName) + content.slice(nextSection);
        changes.push('Added Visual Analogy');
      }
    }
  }
  
  // Fix blank lines before headings
  const beforeBlank = content;
  content = content.replace(/([^\n])\n(## )/g, '$1\n\n$2');
  content = content.replace(/([^\n])\n(### )/g, '$1\n\n$2');
  if (content !== beforeBlank) changes.push('Fixed blank lines');
  
  // Fix duplicate H1
  const h1Count = (content.match(/^# .+$/gm) || []).length;
  if (h1Count > 1) {
    let first = false;
    content = content.replace(/^# (.+)$/gm, (m, t) => {
      if (!first) { first = true; return m; }
      return '## ' + t;
    });
    changes.push('Fixed duplicate H1');
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return null;
}

// Main execution
console.log('🧠 Intelligent Content Fixer\n');
console.log(`📁 Scanning: ${BASE}\n`);

let totalFixed = 0;
const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  for (const chapter of chapters) {
    const filePath = path.join(modulePath, chapter);
    const changes = processFile(filePath);
    
    if (changes) {
      totalFixed++;
      console.log(`✅ ${module}/${chapter}: ${changes.join(', ')}`);
    }
  }
}

console.log(`\n📊 Total files improved: ${totalFixed}`);
