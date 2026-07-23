const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
let fixed = 0;

const MODULE_NAMES = {
  '00': { name: 'Core Computer Science', intro: 'Computer science fundamentals are the bedrock of every AI system. Understanding networks, operating systems, databases, and architecture helps you build reliable, scalable AI services. This module covers what interviewers expect you to know cold.' },
  '01': { name: 'Python Programming', intro: 'Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency.' },
  '02': { name: 'SQL & Databases', intro: 'Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization.' },
  '03': { name: 'Data Structures & Algorithms', intro: 'DSA is the language of technical interviews. Arrays, trees, graphs, and dynamic programming appear in every FAANG coding round. This module teaches the patterns that solve 90% of interview problems.' },
  '04': { name: 'Git, Linux & CLI', intro: 'Every AI engineer works in a terminal. Git for version control, Linux for server management, and shell scripting for automation are daily tools. This module gets you fluent in the command line.' },
  '05': { name: 'FastAPI Backend', intro: 'FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development.' },
  '06': { name: 'Docker, Kubernetes & Cloud', intro: 'Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack.' },
  '07': { name: 'System Design', intro: 'System design interviews test your ability to architect large-scale systems. Caching, load balancing, message queues, and database sharding are patterns you will apply daily. This module prepares you for both interviews and production.' },
  '08': { name: 'Machine Learning', intro: 'Machine learning is the core of AI engineering. From linear regression to ensemble methods, understanding these algorithms lets you build, debug, and improve models. This module covers the math and code behind ML.' },
  '09': { name: 'Deep Learning with PyTorch', intro: 'Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices.' },
  '10': { name: 'NLP & Transformers', intro: 'Natural language processing is how machines understand human text. Transformers revolutionized NLP and enabled modern LLMs. This module covers tokenization, attention, BERT, and the Hugging Face ecosystem.' },
  '11': { name: 'LLMs & Prompt Engineering', intro: 'Large language models are transforming every industry. Understanding how to prompt, evaluate, and optimize LLMs is a critical skill for AI engineers. This module covers the full LLM lifecycle from API calls to cost optimization.' },
  '12': { name: 'RAG & Vector Databases', intro: 'Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking.' },
  '13': { name: 'AI Agents with LangGraph', intro: 'AI agents autonomously use tools to complete tasks. LangGraph builds stateful, multi-step agent workflows. This module covers agent architectures, tool use, memory, and production deployment.' },
  '14': { name: 'Fine-Tuning with PEFT', intro: 'Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results.' },
  '15': { name: 'AI Evaluation & Observability', intro: 'You cannot improve what you cannot measure. Evaluation metrics, LLM-as-judge, and observability tools help you monitor and improve AI systems in production. This module covers the full evaluation stack.' },
  '16': { name: 'MLOps & Production', intro: 'MLOps bridges the gap between experiment and production. Experiment tracking, CI/CD, model serving, and drift monitoring keep AI systems reliable. This module covers the operational side of AI engineering.' },
  '17': { name: 'AI Security & Guardrails', intro: 'AI systems face unique security threats. Prompt injection, data leakage, and content abuse require specialized defenses. This module covers threat modeling, guardrails, and compliance for production AI.' },
  '18': { name: 'Multimodal AI & Voice', intro: 'AI is moving beyond text. Computer vision, speech recognition, and multimodal models process images, audio, and video. This module covers the tools and techniques for building multimodal AI applications.' },
  '19': { name: 'Capstone Projects', intro: 'Capstone projects prove you can build complete AI systems. From prediction APIs to enterprise RAG platforms, these projects demonstrate end-to-end skills. This module guides you through 5 portfolio-worthy projects.' },
  '20': { name: 'Portfolio & Branding', intro: 'Your portfolio is your proof of skills. GitHub profiles, technical blogs, and LinkedIn optimization help you stand out. This module covers personal branding for AI engineers.' },
  '21': { name: 'Interview Preparation', intro: 'Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers.' },
  '22': { name: 'Advanced AI Agents', intro: 'Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs.' },
  '23': { name: 'Trending AI/ML Platforms', intro: 'The AI landscape evolves fast. New LLM providers, agent platforms, and developer toolkits emerge monthly. This module covers the platforms and tools shaping the future of AI engineering.' }
};

function getModuleNumber(dirName) {
  const match = dirName.match(/^(\d+)/);
  return match ? match[1] : '00';
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const dirName = path.basename(path.dirname(filePath));
  const moduleNum = getModuleNumber(dirName);
  const moduleInfo = MODULE_NAMES[moduleNum] || { intro: '' };

  // Fix generic Introduction
  const introRegex = /## Introduction\n\nUnderstanding \w[\w\s]* is essential for AI engineers building production systems\. This chapter covers the core principles, practical implementations, and interview preparation for mastering \w[\w\s]*\./;
  if (introRegex.test(content) && moduleInfo.intro) {
    content = content.replace(introRegex, `## Introduction\n\n${moduleInfo.intro}`);
  }

  // Fix generic Theory section
  const theoryRegex = /## Theory\n\nUnderstanding \w[\w\s]* is fundamental for AI engineers\. This section covers the core concepts, underlying principles, and theoretical framework that governs how \w[\w\s]* works in practice\./;
  if (theoryRegex.test(content)) {
    content = content.replace(theoryRegex, '## Theory');
  }

  // Fix generic Key Concepts
  const keyConceptsRegex = /### Key Concepts\n\n- \*\*Core Principle\*\*: The foundational idea behind \w[\w\s]*\n- \*\*How It Works\*\*: The mechanism and process involved\n- \*\*Why It Matters\*\*: Relevance to AI engineering and real-world applications\n- \*\*Trade-offs\*\*: Advantages and limitations to consider/;
  if (keyConceptsRegex.test(content)) {
    content = content.replace(keyConceptsRegex, '');
  }

  // Fix generic Prerequisites
  const prereqRegex = /## Prerequisites\n\n- Basic programming knowledge\n- Understanding of data structures/;
  if (prereqRegex.test(content)) {
    content = content.replace(prereqRegex, '');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    return true;
  }
  return false;
}

// Process all files
const modules = fs.readdirSync(DIR).filter(d => fs.statSync(path.join(DIR, d)).isDirectory());
modules.forEach(mod => {
  const modDir = path.join(DIR, mod);
  const files = fs.readdirSync(modDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => {
    if (fixFile(path.join(modDir, file))) {
      console.log(`✅ ${mod}/${file}`);
    }
  });
});

console.log(`\n📊 Fixed ${fixed} files`);
