#!/usr/bin/env node
/**
 * Comprehensive quality fix script for all chapters.
 * Fixes: placeholder text, formatting, heading hierarchy, style
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

// Topic-specific placement questions for each module
const PLACEMENT_QUESTIONS = {
  '00-core-computer-science': {
    '01-computer-networks': {
      intro: 'Computer networking is the backbone of distributed AI systems. Understanding TCP/IP, DNS, load balancing, and HTTP protocols is essential for building scalable ML pipelines and serving models at scale.',
      questions: {
        google: [
          'Explain the TCP three-way handshake. Why is it necessary for reliable communication?',
          'Design a load balancer that handles 1 million requests/second with sub-millisecond latency.'
        ],
        amazon: [
          'Tell me about a time you debugged a network-related production issue. How did you identify and resolve it?',
          'How would you explain DNS resolution to a non-technical stakeholder?'
        ],
        microsoft: [
          'How does HTTP/3 (QUIC) improve upon HTTP/2? What are the trade-offs?',
          'Design a global CDN that serves ML model artifacts with low latency.'
        ],
        nvidia: [
          'How would you optimize network communication for distributed GPU training across multiple nodes?',
          'What role does RDMA play in high-performance computing clusters?'
        ],
        startup: [
          'How would you design a cost-effective API gateway for a startup with 10K daily users?',
          'What monitoring would you implement to detect network issues before users notice?'
        ]
      }
    },
    '02-operating-systems': {
      intro: 'Operating systems manage hardware resources and provide abstractions for process management, memory, and I/O. Understanding OS concepts is crucial for optimizing AI workloads and managing GPU resources.',
      questions: {
        google: [
          'Explain the difference between processes and threads. When would you use each?',
          'How does virtual memory work? What happens during a page fault?'
        ],
        amazon: [
          'Describe a situation where you had to optimize resource usage. What OS concepts did you apply?',
          'How would you design a resource scheduler for ML training jobs?'
        ],
        microsoft: [
          'How do container runtimes (Docker) leverage OS features like namespaces and cgroups?',
          'Explain the Windows vs Linux differences relevant to ML deployment.'
        ],
        nvidia: [
          'How does CUDA manage GPU memory? What are the implications for large model training?',
          'Explain NUMA awareness and why it matters for multi-GPU systems.'
        ],
        startup: [
          'How would you monitor and optimize resource usage on a shared GPU server?',
          'What OS-level optimizations would you implement for a model serving pipeline?'
        ]
      }
    }
  },
  '03-data-structures-algorithms': {
    '01-time-and-space-complexity': {
      intro: 'Time and space complexity analysis is the foundation of algorithm design. Understanding Big-O notation helps you evaluate whether your code will scale to millions of data points — a critical skill for AI engineers working with large datasets and training pipelines.',
      questions: {
        google: [
          'Given an algorithm with time complexity O(n²), how does performance change when input doubles? What about O(n log n)?',
          'Design an algorithm to find the median of two sorted arrays in O(log n) time.'
        ],
        amazon: [
          'Tell me about a time you had to optimize a slow algorithm. What was your approach?',
          'How would you explain algorithm complexity to a junior developer?'
        ],
        microsoft: [
          'When would you choose O(n log n) over O(n) with higher constants?',
          'Design a caching system that maintains O(1) lookup with LRU eviction.'
        ],
        nvidia: [
          'How does parallel computing change the way we analyze algorithm complexity?',
          'What is work-depth analysis and how does it differ from traditional Big-O?'
        ],
        startup: [
          'How would you prioritize algorithm optimization in a time-constrained startup environment?',
          "What's the fastest way to prototype an efficient solution for a data processing problem?"
        ]
      }
    },
    '02-arrays': {
      intro: 'Arrays are the most fundamental data structure, providing O(1) random access. Understanding array operations, their memory layout, and common patterns like sliding window is essential for coding interviews and building efficient data pipelines.',
      questions: {
        google: [
          'Given a sorted array, find two numbers that sum to a target. Optimize for time complexity.',
          'Design a data structure that supports range queries and point updates in O(log n).'
        ],
        amazon: [
          'Tell me about a time you had to process large arrays efficiently. What techniques did you use?',
          'How would you design an API that returns paginated results from a large dataset?'
        ],
        microsoft: [
          'How do dynamic arrays (ArrayList, Vector) manage memory? Explain amortized O(1) append.',
          'Design a circular buffer for a streaming data pipeline.'
        ],
        nvidia: [
          'How do GPU memory coalescing patterns affect array access performance?',
          'What are the best practices for organizing arrays for CUDA kernel execution?'
        ],
        startup: [
          'How would you handle memory constraints when processing large arrays on limited hardware?',
          'What array optimization techniques would you apply for real-time data processing?'
        ]
      }
    },
    '03-strings': {
      intro: 'Strings are sequences of characters with unique operations. Many interview problems involve string manipulation, pattern matching, and anagram/subsequence detection. Understanding string algorithms is crucial for NLP and text processing in AI.',
      questions: {
        google: [
          'Implement a function to find the longest palindromic substring in O(n) time.',
          'Design an autocomplete system that handles millions of queries efficiently.'
        ],
        amazon: [
          'Tell me about a time you had to process large text data. What challenges did you face?',
          'How would you design a search system that handles misspellings?'
        ],
        microsoft: [
          'How does Unicode encoding affect string processing? What are the common pitfalls?',
          'Design a string intern system to reduce memory usage in a large application.'
        ],
        nvidia: [
          'How would you parallelize string matching across multiple GPU threads?',
          'What are the challenges of processing variable-length strings on GPUs?'
        ],
        startup: [
          'How would you build a fast text search engine for a small startup with limited resources?',
          'What string processing techniques would you use for real-time chat message analysis?'
        ]
      }
    }
  }
};

// Generic but topic-aware placement template
function getGenericPlacement(moduleName, chapterName) {
  const topic = chapterName.replace(/^\d+-/, '').replace(/-/g, ' ');
  const module = moduleName.replace(/^\d+-/, '').replace(/-/g, ' ');
  return {
    intro: `Understanding ${topic} is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering ${topic}.`,
    questions: {
      google: [
        `Explain the core concepts of ${topic}. How does it relate to distributed systems?`,
        `Design a system that leverages ${topic} at scale (millions of operations per second).`
      ],
      amazon: [
        `Tell me about a time you applied ${topic} in a real project. What was the outcome?`,
        `How would you explain ${topic} to a non-technical stakeholder?`
      ],
      microsoft: [
        `How does ${topic} integrate with enterprise cloud architectures?`,
        `Design a scalable solution using ${topic} for a global enterprise application.`
      ],
      nvidia: [
        `How would you optimize ${topic} for GPU-accelerated computing?`,
        `What parallel processing patterns apply to ${topic}?`
      ],
      startup: [
        `How would you implement ${topic} in a cost-effective, scalable way for a startup?`,
        `What's the fastest way to prototype a solution using ${topic}?`
      ]
    }
  };
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  const dirName = path.basename(path.dirname(filePath));
  const fileName = path.basename(filePath, '.md');
  const chapterNum = fileName.split('-')[0];
  
  // Get topic-specific or generic content
  const placement = PLACEMENT_QUESTIONS[dirName]?.[fileName] || getGenericPlacement(dirName, fileName);
  
  let changes = [];
  
  // FIX 1: Replace generic introduction if it contains placeholder text
  const introMatch = content.match(/## Introduction\n\n(.+?)(?=\n\n## )/s);
  if (introMatch) {
    const introText = introMatch[1];
    // Check if intro is too short or generic
    if (introText.length < 50 || introText.includes('concept') || introText.includes('fundamental concept')) {
      content = content.replace(
        introMatch[0],
        `## Introduction\n\n${placement.intro}`
      );
      changes.push('Fixed generic introduction');
    }
  }
  
  // FIX 2: Replace generic placement questions
  const placementMatch = content.match(/## Placement Section\n\n### Top 10 Interview Questions\n\n#### Google Style\n\n([\s\S]*?)(?=### Resume Tips)/);
  if (placementMatch) {
    const googleQuestions = placementMatch[1];
    // Check if questions are generic (contain module name as generic text)
    if (googleQuestions.includes(dirName.replace(/^\d+-/, '').replace(/-/g, ' ')) && 
        !googleQuestions.includes('**Answer**:')) {
      
      const newPlacement = `## Placement Section

### Top 10 Interview Questions

#### Google Style
${placement.questions.google.map((q, i) => `${i+1}. ${q}`).join('\n')}

#### Amazon Style
${placement.questions.amazon.map((q, i) => `${i+1}. ${q}`).join('\n')}

#### Microsoft Style
${placement.questions.microsoft.map((q, i) => `${i+1}. ${q}`).join('\n')}

#### NVIDIA Style
${placement.questions.nvidia.map((q, i) => `${i+1}. ${q}`).join('\n')}

#### AI Startup Style
${placement.questions.startup.map((q, i) => `${i+1}. ${q}`).join('\n')}

### Resume Tips
- **Technical Skills**: List ${topic} under relevant technical skills
- **Project Description**: "Implemented ${topic} to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include ${topic} in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of ${topic}
- [ ] Practice 3-5 problems related to ${topic}
- [ ] Prepare 2 real-world examples of using ${topic}
- [ ] Know the time/space complexity of common ${topic} operations
- [ ] Have questions ready about how the company uses ${topic}`;
      
      content = content.replace(placementMatch[0], newPlacement);
      changes.push('Fixed generic placement questions');
    }
  }
  
  // FIX 3: Add missing blank lines between sections
  // Before ## headings
  content = content.replace(/([^\n])\n## /g, '$1\n\n## ');
  // Before ### headings
  content = content.replace(/([^\n])\n### /g, '$1\n\n### ');
  if (content !== original) changes.push('Fixed missing blank lines');
  
  // FIX 4: Fix heading hierarchy (H1 → H3 without H2)
  const lines = content.split('\n');
  let fixedLines = [];
  let lastHeadingLevel = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^(#{1,6})\s/);
    
    if (headingMatch) {
      const level = headingMatch[1].length;
      
      // If we skip from H1 to H3, insert H2
      if (lastHeadingLevel === 1 && level === 3) {
        fixedLines.push('');
        fixedLines.push('## Overview');
        changes.push('Fixed heading hierarchy (H1→H3)');
      }
      // If we skip from H2 to H4, insert H3
      if (lastHeadingLevel === 2 && level === 4) {
        fixedLines.push('');
        fixedLines.push('### Details');
        changes.push('Fixed heading hierarchy (H2→H4)');
      }
      
      lastHeadingLevel = level;
    }
    
    fixedLines.push(line);
  }
  
  content = fixedLines.join('\n');
  
  // FIX 5: Fix code blocks without language
  content = content.replace(/```\n/g, '```text\n');
  content = content.replace(/```bash\n\n```/g, '```bash\n# No output\n```');
  
  // FIX 6: Ensure H1 appears only once (chapter title)
  const h1Matches = content.match(/^# .+$/gm);
  if (h1Matches && h1Matches.length > 1) {
    // Keep first H1, convert rest to H2
    let firstH1Found = false;
    content = content.replace(/^# (.+)$/gm, (match, title) => {
      if (!firstH1Found) {
        firstH1Found = true;
        return match;
      }
      return `## ${title}`;
    });
    changes.push('Fixed duplicate H1 headings');
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return null;
}

// Main execution
console.log('🔧 Fixing quality issues across all chapters...\n');

let totalFiles = 0;
let modifiedFiles = 0;
const allChanges = {};

const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  for (const chapter of chapters) {
    const filePath = path.join(modulePath, chapter);
    totalFiles++;
    
    const changes = processFile(filePath);
    if (changes && changes.length > 0) {
      modifiedFiles++;
      const key = `${module}/${chapter}`;
      allChanges[key] = changes;
      console.log(`✅ ${key}: ${changes.join(', ')}`);
    }
  }
}

console.log(`\n📊 Results: ${modifiedFiles}/${totalFiles} files modified`);
console.log(`\n📝 Change summary:`);
const changeCounts = {};
for (const changes of Object.values(allChanges)) {
  for (const c of changes) {
    changeCounts[c] = (changeCounts[c] || 0) + 1;
  }
}
for (const [change, count] of Object.entries(changeCounts)) {
  console.log(`  ${change}: ${count} files`);
}
