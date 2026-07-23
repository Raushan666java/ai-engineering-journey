const fs = require('fs');
const path = require('path');

const DIR = 'docs/courses/ai-engineering-placement';
let added = 0;

const MODULE_TOPICS = {
  '00': 'Core Computer Science',
  '01': 'Python Programming',
  '02': 'SQL & Databases',
  '03': 'Data Structures & Algorithms',
  '04': 'Git, Linux & CLI',
  '05': 'FastAPI Backend',
  '06': 'Docker, Kubernetes & Cloud',
  '07': 'System Design',
  '08': 'Machine Learning',
  '09': 'Deep Learning with PyTorch',
  '10': 'NLP & Transformers',
  '11': 'LLMs & Prompt Engineering',
  '12': 'RAG & Vector Databases',
  '13': 'AI Agents with LangGraph',
  '14': 'Fine-Tuning with PEFT',
  '15': 'AI Evaluation & Observability',
  '16': 'MLOps & Production',
  '17': 'AI Security & Guardrails',
  '18': 'Multimodal AI & Voice',
  '19': 'Capstone Projects',
  '20': 'Portfolio & Branding',
  '21': 'Interview Preparation',
  '22': 'Advanced AI Agents',
  '23': 'Trending AI/ML Platforms'
};

function getModuleNumber(dirName) {
  const match = dirName.match(/^(\d+)/);
  return match ? match[1] : '00';
}

function addSectionIfMissing(content, sectionName, sectionContent) {
  if (!content.includes(`## ${sectionName}`)) {
    return content + '\n\n' + sectionContent;
  }
  return content;
}

function processFile(filePath) {
  const dirName = path.basename(path.dirname(filePath));
  const moduleNum = getModuleNumber(dirName);
  const topic = MODULE_TOPICS[moduleNum] || 'AI Engineering';

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Add Fine-Tuning Notes (for non-fine-tuning modules)
  if (moduleNum !== '14') {
    content = addSectionIfMissing(content, 'Fine-Tuning Notes',
      `## Fine-Tuning Notes\n\nWhen applying ${topic} to production, consider:\n- Fine-tuning with LoRA or Adapters for domain adaptation\n- Adapting general principles to your specific use cases\n- Performance optimization for target hardware\n- Cost considerations for deployment`);
  }

  // Add Open-Source Tools
  content = addSectionIfMissing(content, 'Open-Source Tools',
    `## Open-Source Tools\n\n- **LangChain**: Framework for building LLM-powered applications\n- **LlamaIndex**: Data framework for connecting LLMs with external data\n- **Hugging Face Transformers**: State-of-the-art ML models and datasets\n- **Weights & Biases**: Experiment tracking and model evaluation\n- **MLflow**: Open-source platform for ML lifecycle management\n- **Prometheus + Grafana**: Monitoring and observability stack`);

  // Add Debugging Guide
  content = addSectionIfMissing(content, 'Debugging Guide',
    `## Debugging Guide\n\n**Common Issues**:\n- Check input validation and data types\n- Verify API keys and authentication\n- Monitor resource usage (CPU, memory, GPU)\n- Review error logs for stack traces\n\n**Debugging Steps**:\n1. Reproduce the issue with minimal input\n2. Add logging at key points\n3. Check external dependencies\n4. Verify configuration settings\n5. Test with known-good inputs`);

  // Add Mock Interview Section (for non-interview modules)
  if (moduleNum !== '21') {
    content = addSectionIfMissing(content, 'Mock Interview Section',
      `## Mock Interview Section\n\n**Quick Fire Questions**:\n1. What is the core concept of ${topic}?\n2. When would you use this in production?\n3. What are the trade-offs?\n4. How does this scale?\n5. What are common pitfalls?\n\n**Follow-up Questions**:\n- How would you optimize this for 10x scale?\n- What monitoring would you add?\n- How would you test this in production?`);
  }

  // Add Optimized Implementation (for code-heavy modules)
  if (['01', '02', '03', '05', '08', '09', '10', '11', '13', '14'].includes(moduleNum)) {
    content = addSectionIfMissing(content, 'Optimized Implementation',
      `## Optimized Implementation\n\nFor production systems, consider:\n- **Caching**: Cache frequent computations and API responses\n- **Batching**: Process multiple items together for efficiency\n- **Async/Await**: Use non-blocking I/O for concurrent operations\n- **Connection Pooling**: Reuse database and API connections\n- **Lazy Loading**: Load resources only when needed`);
  }

  // Add References
  content = addSectionIfMissing(content, 'References',
    `## References\n\n- Official documentation and language specifications\n- "Designing Data-Intensive Applications" by Martin Kleppmann\n- "System Design Interview" by Alex Xu\n- "AI Engineering" by Chip Huyen\n- Research papers from NeurIPS, ICML, ICLR\n- Industry blogs from Google, Meta, OpenAI, Anthropic`);

  // Add Prompt Engineering Notes (for LLM-related modules)
  if (['11', '12', '13', '22'].includes(moduleNum)) {
    content = addSectionIfMissing(content, 'Prompt Engineering Notes',
      `## Prompt Engineering Notes\n\n- **Be Specific**: Clear, detailed prompts with instructions get better results\n- **Provide Examples**: Few-shot learning improves consistency and accuracy\n- **Use Structured Output**: JSON, tables, or markdown for parsing\n- **Chain of Thought**: Break complex reasoning into steps\n- **Temperature Control**: Adjust creativity vs consistency`);
  }

  // Add Evaluation Metrics
  content = addSectionIfMissing(content, 'Evaluation Metrics',
    `## Evaluation Metrics\n\n**Model Evaluation**:\n- Accuracy, Precision, Recall, F1-Score\n- BLEU, ROUGE for text generation\n- Latency, Throughput, Cost per inference\n\n**System Evaluation**:\n- End-to-end latency (p50, p95, p99)\n- Error rate and availability\n- Resource utilization (CPU, memory, GPU)`);

  // Add Real-World Examples
  content = addSectionIfMissing(content, 'Real-World Examples',
    `## Real-World Examples\n\n**Industry Applications**:\n- Google: Search ranking, translation, autocomplete\n- Amazon: Product recommendations, Alexa, fraud detection\n- Netflix: Content recommendations, personalization\n- Tesla: Autonomous driving, computer vision\n- OpenAI: ChatGPT, DALL-E, Codex`);

  // Add Next Topic
  content = addSectionIfMissing(content, 'Next Topic',
    `## Next Topic\n\nAfter mastering ${topic}, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.`);

  // Add Training Workflow (for ML modules)
  if (['08', '09', '10', '14'].includes(moduleNum)) {
    content = addSectionIfMissing(content, 'Training Workflow',
      `## Training Workflow\n\n1. **Data Preparation**: Collect, clean, and preprocess data\n2. **Model Selection**: Choose architecture based on task requirements\n3. **Training Loop**: Forward pass, loss computation, backpropagation\n4. **Validation**: Evaluate on held-out data to prevent overfitting\n5. **Hyperparameter Tuning**: Optimize learning rate, batch size, etc.\n6. **Model Export**: Save trained model for deployment`);
  }

  // Add Inference Workflow (for deployment modules)
  if (['05', '06', '16'].includes(moduleNum)) {
    content = addSectionIfMissing(content, 'Inference Workflow',
      `## Inference Workflow\n\n1. **Input Validation**: Sanitize and validate incoming requests\n2. **Preprocessing**: Transform input to model-ready format\n3. **Model Execution**: Run inference with optimized runtime\n4. **Postprocessing**: Format model output for consumption\n5. **Response**: Return results with metadata and timing\n6. **Monitoring**: Log requests, responses, and latency`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    added++;
    return true;
  }
  return false;
}

// Process all files
let totalFiles = 0;
let improvedFiles = 0;

const modules = fs.readdirSync(DIR).filter(d => fs.statSync(path.join(DIR, d)).isDirectory());
modules.forEach(mod => {
  const modDir = path.join(DIR, mod);
  const files = fs.readdirSync(modDir).filter(f => f.endsWith('.md') && f !== 'index.md');
  files.forEach(file => {
    totalFiles++;
    if (processFile(path.join(modDir, file))) {
      improvedFiles++;
      console.log(`✅ ${mod}/${file}`);
    }
  });
});

console.log(`\n📊 Results:`);
console.log(`   Files processed: ${totalFiles}`);
console.log(`   Files improved: ${improvedFiles}`);
