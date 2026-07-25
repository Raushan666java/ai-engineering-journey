---
slug: /modern-ai-engineering/index
title: "Modern AI Engineering - Based on Chip Huyen Building Applications with Foundation Models"
sidebar_label: "Modern AI Engineering"
sidebar_position: 13
---
# Modern AI Engineering — Based on Chip Huyen's "Building Applications with Foundation Models"

> **A comprehensive course based on Chip Huyen's definitive guide to building AI applications with foundation models. Covers data engineering, model selection, evaluation, prompt engineering, RAG, fine-tuning, agents, safety, production, and MLOps — all with TypeScript implementations.**

[![Course Status](https://img.shields.io/badge/status-live-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-20%2B-339933.svg)](https://nodejs.org)

## What You'll Learn

AI Engineering is the discipline of **building production applications powered by foundation models** — not just calling APIs, but understanding data pipelines, model capabilities, evaluation strategies, safety guardrails, and deployment architectures. By the end of this course, you will be able to:

- **Engineer data pipelines** for AI applications — collection, quality assessment, preprocessing, and curation
- **Select and evaluate** foundation models for your use case using systematic metrics and benchmarks
- **Design prompts** using zero-shot, few-shot, chain-of-thought, and structured output techniques
- **Build RAG systems** with optimal chunking, embedding, retrieval, and synthesis strategies
- **Know when and how to fine-tune** using PEFT, LoRA, and preference optimization
- **Architect AI agents** with tool calling, planning, memory, and multi-step reasoning
- **Implement safety guardrails** to mitigate hallucinations, toxicity, bias, and jailbreaks
- **Deploy and monitor** AI systems with caching, rate limiting, cost management, and observability
- **Apply MLOps practices** — experiment tracking, prompt versioning, CI/CD, and drift monitoring
- **Build a complete capstone** — an AI-powered customer support platform with RAG, agents, and evaluation

### What Makes This Course Different

| Aspect | This Course | Typical AI Courses |
|--------|-------------|-------------------|
| Focus | **Foundational AI engineering concepts** (data, eval, safety, production) | Framework-specific tutorials |
| Source | Based on **Chip Huyen's "AI Engineering"** (O'Reilly 2025) | Scattered blog posts |
| Language | **TypeScript throughout** — production-grade tooling | Python notebooks |
| Coverage | Data → Model → Eval → Prompt → RAG → Fine-tune → Agents → Safety → Production | API calls only |
| Depth | **400+ lines per chapter** with theory, code, diagrams, quizzes, exercises | Shallow overviews |
| Framework-agnostic | Concepts apply to **any model provider** | Vendor lock-in |

## Course Structure

The course is organized into **12 chapters** across **4 modules**:

### Module 1: Foundations (Chapters 1–3)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 1 | Introduction to AI Engineering | AI engineering vs ML engineering, FM landscape, when to use FMs, the AI stack | 3 |
| 2 | Data Engineering for AI | Data collection, quality, preprocessing, curation, synthetic data, privacy | 5 |
| 3 | Understanding Foundation Models | Transformers, capabilities, limitations, model selection, open vs closed | 5 |

### Module 2: Core Techniques (Chapters 4–6)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 4 | Evaluation of AI Systems | Metrics, LLM-as-judge, human eval, task-specific eval, continuous monitoring | 5 |
| 5 | Prompt Engineering | Zero-shot, few-shot, CoT, structured output, context management, versioning | 4 |
| 6 | Retrieval-Augmented Generation | RAG architecture, chunking, embeddings, retrieval, hybrid search, advanced RAG | 6 |

### Module 3: Advanced Patterns (Chapters 7–9)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 7 | Fine-Tuning | Full FT vs PEFT, LoRA, QLoRA, instruction tuning, RLHF, DPO | 6 |
| 8 | AI Agents and Tool Use | ReAct, tool calling, planning, memory, multi-step reasoning, agent evaluation | 6 |
| 9 | Safety, Alignment, Guardrails | Red teaming, content filtering, bias, jailbreaks, alignment techniques | 4 |

### Module 4: Production (Chapters 10–12)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 10 | Production AI Systems | Deployment, caching, rate limiting, cost mgmt, A/B testing, monitoring | 6 |
| 11 | MLOps for AI Engineering | Experiment tracking, prompt versioning, CI/CD, drift monitoring, incident response | 5 |
| 12 | Capstone — AI Customer Support Platform | End-to-end: RAG, agents, evaluation, safety, deployment | 10 |

**Total estimated time**: 65 hours (full-time: ~4 weeks, part-time: ~8 weeks)

## Prerequisites

- **Node.js 20+** and comfortable with TypeScript (async/await, types, generics)
- **Basic understanding of LLMs** — what they are, how prompting works, what tokens are
- **Familiarity with REST APIs** and JSON
- **No prior ML/AI experience required** — this course starts from fundamentals

## How This Course Relates to Chip Huyen's Book

This course follows the structure and philosophy of Chip Huyen's "AI Engineering: Building Applications with Foundation Models" (O'Reilly, 2025):

- **All core concepts covered**: data engineering, model selection, evaluation, prompt engineering, RAG, fine-tuning, agents, safety, production, MLOps
- **Framework-agnostic approach**: concepts apply to any model provider (OpenAI, Anthropic, Google, open-source)
- **Production focus**: every chapter emphasizes real-world deployment considerations
- **TypeScript implementations**: all code examples in TypeScript (not Python) for type safety and full-stack integration

## Learning Path

### 4-Week Full-Time Track (4-5 hours/day)
- Week 1: Chapters 1-3 (Foundations)
- Week 2: Chapters 4-6 (Core Techniques)
- Week 3: Chapters 7-9 (Advanced Patterns)
- Week 4: Chapters 10-12 (Production + Capstone)

### 8-Week Part-Time Track (2-3 hours/day)
- Weeks 1-2: Chapters 1-3
- Weeks 3-4: Chapters 4-6
- Weeks 5-6: Chapters 7-9
- Weeks 7-8: Chapters 10-12

## Detailed Chapter Descriptions

### Chapter 1: Introduction to AI Engineering
What is AI engineering and how does it differ from ML engineering? The evolution of building AI applications, the foundation model landscape (GPT, Claude, Gemini, Llama, Mistral), when to use foundation models vs traditional ML, the AI engineering stack (data → model → application → deployment), key challenges in production AI, and an introduction to the course architecture with TypeScript.

### Chapter 2: Data Engineering for AI
Data is the foundation of every AI application. Data collection strategies (APIs, web scraping, user-generated, synthetic), data quality dimensions (accuracy, completeness, consistency, timeliness), preprocessing techniques (cleaning, normalization, deduplication, formatting), data curation and labeling strategies, privacy and consent considerations (PII removal, data retention), and synthetic data generation with foundation models.

### Chapter 3: Understanding Foundation Models
How transformer architectures work (attention mechanism, pretraining objectives, scaling laws), types of foundation models (LLMs, multimodal, embedding, code models), capabilities (reasoning, in-context learning, instruction following, code generation), limitations (hallucinations, recency bias, knowledge cutoff, cost, latency), model selection framework (task suitability, size vs speed, cost, accuracy requirements), and comparing open vs closed models.

### Chapter 4: Evaluation of AI Systems
Why evaluation is uniquely challenging for generative AI, automatic metrics (accuracy, F1, BLEU, ROUGE, METEOR, BERTScore), LLM-as-judge evaluation (G-Eval, Prometheus, MT-Bench), human evaluation (annotation guidelines, inter-annotator agreement, crowdsourcing), task-specific evaluation (QA, summarization, code generation, translation), building evaluation datasets, and continuous evaluation in production with monitoring.

### Chapter 5: Prompt Engineering
Prompt design principles (clarity, specificity, context), zero-shot vs few-shot prompting, chain-of-thought and reasoning techniques, structured output prompting (JSON mode, grammar constraints, schema enforcement), context management (prompt compression, window optimization, dynamic context insertion), system prompts vs user prompts, prompt versioning and testing, and debugging prompts systematically.

### Chapter 6: Retrieval-Augmented Generation
RAG architecture and when to use it over prompting alone, chunking strategies (fixed-size with overlap, semantic chunking, recursive splitting), embedding models and vector databases, retrieval techniques (dense retrieval, sparse retrieval like BM25, hybrid retrieval), response synthesis strategies, evaluating RAG systems (faithfulness, answer relevance, context relevance, hit rate, MRR), and advanced RAG patterns (self-RAG, Hyde, agentic RAG, multi-hop RAG).

### Chapter 7: Fine-Tuning
When to fine-tune vs prompt engineer vs use RAG, types of fine-tuning (full fine-tuning, parameter-efficient fine-tuning), PEFT techniques (LoRA, QLoRA, adapters, prefix tuning), instruction tuning methodology and datasets, RLHF and preference optimization (DPO, PPO, KTO), data preparation for fine-tuning (quality filtering, format standardization, task balancing), and evaluation strategies for fine-tuned models.

### Chapter 8: AI Agents and Tool Use
What makes an AI agent (planning, memory, tool use, self-reflection), the ReAct pattern (Reasoning + Acting), tool calling and function calling APIs, planning strategies (single-step, multi-step, ReAct, Plan-and-Solve), agent memory (short-term context, long-term retrieval, episodic memory), multi-step reasoning with reflection, common failure modes (loops, hallucination propagation, tool misuse), and agent evaluation frameworks.

### Chapter 9: Safety, Alignment, and Guardrails
Types of harm in AI systems (toxicity, bias, hallucinations, misinformation, privacy violations, security), red teaming methodologies (manual, automated, adversarial), content filtering and classification approaches, AI guardrails (NeMo Guardrails, Guardrails AI, Llama Guard), jailbreak attacks and defenses, alignment techniques (RLHF, constitutional AI, debate), and responsible AI practices (transparency, fairness, accountability, privacy).

### Chapter 10: Production AI Systems
Deployment strategies (real-time inference, batch processing, streaming), caching (semantic caching, KV caching, response caching), rate limiting (per-user, per-token, global), cost management (model selection, prompt optimization, batching, caching), load balancing and autoscaling, A/B testing for AI systems (prompt variants, model versions, retrieval strategies), monitoring and alerting (latency, error rates, token usage, costs), and incident response for AI systems.

### Chapter 11: MLOps for AI Engineering
Experiment tracking (prompt versions, model versions, hyperparameters, evaluation results), prompt management (versioning, testing, staging, production), CI/CD for AI applications (automated testing, evaluation gates, canary deployments), data and model versioning (DVC-like patterns, hash-based versioning), monitoring drift (data drift, concept drift, prompt drift, model drift), and incident response playbooks for AI systems.

### Chapter 12: Capstone — AI Customer Support Platform
Build a complete AI-powered customer support system that combines all concepts from chapters 1-11: data ingestion pipeline for knowledge base documents, RAG system for answer retrieval, agent orchestration with tool calling for order lookup and returns, safety guardrails for content filtering, evaluation pipeline for answer quality, production deployment with Docker, monitoring dashboard, and A/B testing framework. Full TypeScript implementation.

## Chapter Features

Every chapter follows a consistent structure:

```
Learning Objectives (what you'll know)
Theory & Concepts (why it works)
Code Examples (how to build it) — TypeScript
Mermaid Diagrams (how it connects)
Summary & Practical Takeaways
Chapter Quiz (5 MCQs)
Exercises (5 hands-on)
```

## Chapter Quiz Overview

Each chapter includes **5 multiple-choice questions** to test comprehension. Questions range from recall (theory) to application (code analysis). Answer keys are provided.

## Exercise Overview

Each chapter includes **5 hands-on exercises**:
- **Easy**: Implement a single function (15-30 minutes)
- **Medium**: Build a complete feature (45-90 minutes)
- **Hard**: Design and implement a system (2-4 hours)

## Technology Stack

This course is **framework-agnostic** — concepts apply to any model provider. Code examples use:
- **TypeScript** throughout (Node.js 20+, ES modules)
- **Standard fetch API** for LLM calls (works with OpenAI, Anthropic, Google, local models)
- **Conceptual implementations** rather than framework-specific wrappers

## Course Glossary

| Term | Definition |
|------|-----------|
| **Foundation Model** | Large AI model trained on broad data that can be adapted to many tasks |
| **LLM** | Large Language Model — foundation model for text generation |
| **RAG** | Retrieval-Augmented Generation — augmenting prompts with retrieved context |
| **Agent** | AI system that can use tools, plan, and reason to accomplish tasks |
| **Fine-tuning** | Further training a foundation model on specific data |
| **PEFT** | Parameter-Efficient Fine-Tuning — techniques like LoRA that update few parameters |
| **LoRA** | Low-Rank Adaptation — PEFT technique that trains low-rank matrices |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **DPO** | Direct Preference Optimization — simpler alternative to RLHF |
| **CoT** | Chain-of-Thought — prompting technique for step-by-step reasoning |
| **ReAct** | Reasoning + Acting — pattern for building AI agents |
| **Embedding** | Vector representation of text for semantic search |
| **Chunking** | Splitting documents into smaller pieces for retrieval |
| **Hallucination** | Model generating plausible but incorrect information |
| **Guardrails** | Safety systems that filter model inputs and outputs |
| **Red Teaming** | Systematically testing AI systems for vulnerabilities |
| **Semantic Caching** | Caching based on meaning similarity rather than exact match |
| **Prompt Versioning** | Managing prompt templates with version control |
| **Evaluation | Measuring AI system performance using metrics and benchmarks |
| **MLOps** | ML Operations — practices for deploying and maintaining AI systems |

## Assessment & Progress Tracking

- [ ] Module 1: Foundations (Chapters 1-3) — 13 hours
- [ ] Chapter 1: Introduction — 3 hours
- [ ] Chapter 2: Data Engineering — 5 hours
- [ ] Chapter 3: Foundation Models — 5 hours
- [ ] Module 2: Core Techniques (Chapters 4-6) — 15 hours
- [ ] Chapter 4: Evaluation — 5 hours
- [ ] Chapter 5: Prompt Engineering — 4 hours
- [ ] Chapter 6: RAG — 6 hours
- [ ] Module 3: Advanced Patterns (Chapters 7-9) — 16 hours
- [ ] Chapter 7: Fine-Tuning — 6 hours
- [ ] Chapter 8: AI Agents — 6 hours
- [ ] Chapter 9: Safety — 4 hours
- [ ] Module 4: Production (Chapters 10-12) — 21 hours
- [ ] Chapter 10: Production AI — 6 hours
- [ ] Chapter 11: MLOps — 5 hours
- [ ] Chapter 12: Capstone — 10 hours

## Getting Started

```bash
# Create a project directory
mkdir ai-engineering-course
cd ai-engineering-course
npm init -y
npm install typescript @types/node tsx --save-dev
npx tsc --init
```

## Code Examples

All TypeScript code in this course:
- Is **testable** — you can copy-paste and run it with `npx tsx`
- Follows **production patterns** — error handling, logging, types
- Uses **modern ES syntax** — top-level await, ES modules
- Has **zero framework dependencies** — pure TypeScript with standard APIs

## Troubleshooting Common Issues

### API Key Errors
```bash
# Verify your API key is set
echo $OPENAI_API_KEY  # macOS/Linux
echo %OPENAI_API_KEY%  # Windows
```

### Rate Limiting
- Implement exponential backoff with jitter
- Cache common responses
- Queue requests with priority

### Hallucinations
- Add grounding with RAG
- Use lower temperature (0.0-0.3)
- Implement output validation
- Add factual check step

## License

MIT © AI Engineering Journey

---

> **Next**: [Chapter 1: Introduction to AI Engineering →](01-introduction-to-ai-engineering.md)
