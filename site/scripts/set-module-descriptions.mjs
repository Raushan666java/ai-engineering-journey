#!/usr/bin/env node
/**
 * Hand-written meta descriptions for the 34 placement module index pages.
 *
 * These are the pages a recruiter or hiring manager actually lands on — the
 * ones linked from /ai-engineering-placement and from Google. Auto-derived
 * descriptions there were the worst of the lot ("Learning Objectives",
 * "Previous File Handling"), so this table is written by hand, not derived.
 *
 * Applies to whatever root is passed, so the repo source tree and the built
 * site tree stay in step.
 *
 *   node scripts/set-module-descriptions.mjs --root ../docs
 *   node scripts/set-module-descriptions.mjs --root ../docs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const rootIdx = args.indexOf('--root');
const ROOT = path.resolve(
  process.cwd(),
  rootIdx !== -1 && args[rootIdx + 1] ? args[rootIdx + 1] : '../docs',
);
const BASE = path.join(ROOT, 'courses', 'ai-engineering-placement');

/** module dir -> description. Kept under 160 chars so Google does not clip. */
const DESCRIPTIONS = {
  '00-core-computer-science':
    'Operating systems, networks, database internals and architecture questions asked in every backend interview, with worked answers and diagrams.',
  '01-python-programming':
    'Python for interviews: data structures, generators, decorators, concurrency and typing, plus the numpy and pandas you actually use.',
  '02-sql-and-databases':
    'SQL that survives the interview: joins, CTEs, window functions, indexing and transactions, with PostgreSQL and MySQL internals.',
  '03-data-structures-algorithms':
    'The DSA patterns that recur in interviews — arrays, graphs, dynamic programming, heaps — with complexity analysis and practice problems.',
  '04-git-linux-cli':
    'Git internals, branching and recovery, plus the Linux and shell commands you need when a server breaks at 2am.',
  '05-fastapi-backend':
    'Build production Python APIs: FastAPI routing, Pydantic validation, dependency injection, async I/O, auth and testing.',
  '06-docker-kubernetes-cloud':
    'Containers to clusters: Dockerfile discipline, Kubernetes objects, and deploying to AWS, GCP or Azure without surprises.',
  '07-system-design':
    'Design interviews end to end: caching, queues, CAP, sharding, and five worked designs from URL shortener to ChatGPT.',
  '08-machine-learning':
    'Classical ML you can defend: regression, trees, ensembles and honest evaluation. The maths interviewers actually probe.',
  '09-deep-learning-pytorch':
    'Neural networks from tensors up: backpropagation, CNNs, RNNs, training loops and debugging in PyTorch.',
  '10-nlp-transformers':
    'Attention, tokenisation, embeddings and transformer fine-tuning — the internals behind every LLM you will use.',
  '11-llms-prompt-engineering':
    'How LLMs actually behave: context windows, sampling, structured output, prompt patterns and their failure modes.',
  '12-rag-vector-databases':
    'Retrieval that works: chunking, embeddings, hybrid search, reranking, and measuring Recall@k instead of guessing.',
  '13-ai-agents-langgraph':
    'Agent engineering: tool loops, state machines, LangGraph graphs, MCP servers and human-in-the-loop checkpoints.',
  '14-fine-tuning-peft':
    'When prompting is not enough: LoRA, QLoRA, dataset curation and evaluation for domain-specific models.',
  '15-ai-evaluation-observability':
    'Prove the system works: golden sets, LLM-as-judge calibration, tracing, and catching regressions in CI.',
  '16-mlops-production':
    'Ship models, not notebooks: experiment tracking, model registries, serving, drift monitoring and rollback.',
  '17-ai-security-guardrails':
    'Prompt injection, data exfiltration and unsafe tool calls — plus guardrails enforced in code rather than in prompts.',
  '18-multimodal-ai-voice':
    'Speech, vision and documents: Whisper pipelines, OCR extraction, image models and multimodal retrieval.',
  '19-capstone-projects':
    'Four end-to-end builds with real evaluation: price prediction API, RAG service, agent workflow and a live deployment.',
  '20-portfolio-branding':
    'Turn work into offers: a GitHub that reads well, a resume that survives screening, and a demo that answers questions.',
  '21-interview-preparation':
    'Mock interviews, company-specific bars, salary negotiation and the behavioural answers that decide senior-level loops.',
  '22-advanced-ai-agents':
    'Multi-agent systems, memory architectures, context engineering and cost control for agents at production scale.',
  '23-trending-aiml-platforms':
    'Frontier LLM providers, agent platforms and dev toolkits compared on cost, limits and fit — updated as they ship.',
  '24-statistics-mathematics':
    'Probability, distributions, hypothesis testing and linear algebra — the statistics interviewers expect you to reason with.',
  '25-data-engineering':
    'Pipelines that hold up: ETL versus ELT, Spark, dbt, streaming and lakehouse patterns for AI workloads.',
  '26-ai-product-thinking':
    'Scope an AI feature like a product owner: cost per request, latency budgets, failure modes and what to cut.',
  '27-ai-infrastructure':
    'GPUs, vLLM, quantization and serving economics — how inference actually gets fast and cheap.',
  '28-certifications':
    'Which cloud and ML certifications are worth the fee in the Indian job market, and which are a PDF with no return.',
  '29-research-reading':
    'Read papers without drowning: how to skim, what to extract, and how to turn a paper into a working prototype.',
  '30-business-skills':
    'Communicate like an engineer who gets promoted: written updates, estimates, trade-off documents and stakeholder trust.',
  '31-mobile-ai':
    'On-device and mobile AI: prompting from React Native, small models, latency and privacy constraints.',
  '32-competitive-programming':
    'Contest practice for product-company tests: number theory, dynamic programming, graphs and speed under a 90-minute clock.',
  '33-campus-placement':
    'The campus-specific route: aptitude rounds, group discussions, and the coding bar at mass recruiters.',
};

const DESC = /^description:\s*(".*"|'.*')\s*$/m;

let written = 0;
const missing = [];

for (const [dir, text] of Object.entries(DESCRIPTIONS)) {
  const file = path.join(BASE, dir, 'index.md');
  if (!fs.existsSync(file)) {
    missing.push(dir);
    continue;
  }
  const src = fs.readFileSync(file, 'utf8');
  const fmEnd = src.indexOf('\n---', 4);
  if (fmEnd === -1) {
    missing.push(`${dir} (no frontmatter)`);
    continue;
  }
  let next;
  if (DESC.test(src)) {
    next = src.replace(DESC, `description: "${text}"`);
  } else {
    // insert before the closing --- of the frontmatter
    next = `${src.slice(0, fmEnd)}\ndescription: "${text}"${src.slice(fmEnd)}`;
  }
  if (next === src) continue;
  written++;
  if (WRITE) fs.writeFileSync(file, next, 'utf8');
}

console.log(`root     : ${ROOT}`);
console.log(`table    : ${Object.keys(DESCRIPTIONS).length} modules`);
console.log(`written  : ${written}`);
console.log(`mode     : ${WRITE ? 'WRITE' : 'dry-run'}`);
if (missing.length) console.log(`missing  : ${missing.join(', ')}`);
