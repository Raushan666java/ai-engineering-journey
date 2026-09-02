# Syllabus Expansion Plan — AI Engineer Placement Course

## Status: COMPLETE — 34 modules, 322 chapters

All planned modules (00–33) have been created and are live on the site.

## Module Inventory

| Module | Name | Chapters | Status |
|--------|------|----------|--------|
| 00 | Core Computer Science | 6 | Complete |
| 01 | Python Programming | 14 | Complete |
| 02 | SQL & Databases | 10 | Complete |
| 03 | Data Structures & Algorithms | 18 | Complete |
| 04 | Git, Linux & CLI | 9 | Complete |
| 05 | FastAPI & Backend | 10 | Complete |
| 06 | Docker, Kubernetes & Cloud | 13 | Complete |
| 07 | System Design | 14 | Complete |
| 08 | Machine Learning | 12 | Complete |
| 09 | Deep Learning / PyTorch | 10 | Complete |
| 10 | NLP & Transformers | 8 | Complete |
| 11 | LLMs & Prompt Engineering | 8 | Complete |
| 12 | RAG & Vector Databases | 16 | Complete |
| 13 | AI Agents & LangGraph | 10 | Complete |
| 14 | Fine-Tuning & PEFT | 8 | Complete |
| 15 | AI Eval & Observability | 6 | Complete |
| 16 | MLOps & Production | 8 | Complete |
| 17 | AI Security & Guardrails | 10 | Complete |
| 18 | Multimodal AI & Voice | 6 | Complete |
| 19 | Capstone Projects | 5 | Complete |
| 20 | Portfolio & Branding | 6 | Complete |
| 21 | Interview Preparation | 19 | Complete |
| 22 | Advanced AI Agents | 15 | Complete |
| 23 | Trending AI/ML Platforms | 8 | Complete |
| 24 | Statistics & Mathematics | 8 | Complete |
| 25 | Data Engineering | 5 | Complete |
| 26 | AI Product Thinking | 5 | Complete |
| 27 | AI Infrastructure | 9 | Complete |
| 28 | Certifications | 3 | Complete |
| 29 | Research Reading | 4 | Complete |
| 30 | Business Skills | 4 | Complete |
| 31 | Mobile AI | 4 | Complete |
| 32 | Competitive Programming | 3 | Complete |
| 33 | Campus Placement & Aptitude | 28 | Complete |

## Future Enhancements (Optional)

- Expand Module 15 (AI Eval) from 6 to 10 chapters
- Add more mock tests to Module 33
- Create visual diagrams for standalone courses

## Phase 1 — Fix & Expand Existing (Priority: High)

### 🐛 Fix index.md numbering bug
- Rows 14 and 22 labels are swapped in the Subject Overview table
- Fix: Fine-Tuning is folder 14, Advanced AI Agents is folder 22

### 📘 Module 12 — RAG & Vector Databases (add 6 new chapters)

| # | New Chapter | Topics |
|---|-------------|--------|
| 11 | Query Rewriting & Decomposition | Hypothetical document embeddings (HyDE), query expansion, multi-query, step-back prompting |
| 12 | Parent-Child & Multi-Vector Retrieval | Small-to-big, sentence window retrieval, multi-representation indexing |
| 13 | Knowledge Graph RAG | Entity extraction, relation traversal, KG-enhanced retrieval, SPARQL basics |
| 14 | GraphRAG (Microsoft) | Community detection, Leiden algorithm, global/local search, covariate refinement |
| 15 | Context Compression | LLMLingua, selective context, token compression, summary-based retrieval |
| 16 | Hybrid Search Architecture | Dense + sparse + KG fusion, routing strategies, re-ranking cascade |

### 📘 Module 17 — AI Safety & Guardrails (add 4 new chapters)

| # | New Chapter | Topics |
|---|-------------|--------|
| 07 | Jailbreaks & Red Teaming | Taxonomy (GCG, PAIR, DeepInception), automated red-teaming, refusal training |
| 08 | Data Leakage Prevention | PII detection (NER, regex, ML), data sanitization, training data extraction attacks |
| 09 | Toxicity & Content Moderation | Toxicity classifiers, perspective API, safety filters, RLHF for safety |
| 10 | AI Alignment & Constitutional AI | RLHF, DPO, Constitutional AI, superalignment, value alignment |

### 📘 Module 23 — Trending AI/ML Platforms & Tools (add 4 new chapters)

| # | New Chapter | Topics |
|---|-------------|--------|
| 05 | Open Source LLM Landscape | Llama 3/4, Qwen 2.5, Gemma 2, Phi-4, GLM-4 — model selection guide, context windows |
| 06 | Model Selection & Evaluation | Benchmark leaderboards, task-specific evaluation, trade-offs (speed, cost, quality) |
| 07 | Fine-Tuning Platforms | Unsloth deep dive, Axolotl, OpenPipe, Together Fine-Tuning, modal |
| 08 | Deployment Stack Comparison | vLLM vs TGI vs Ollama vs SGLang — throughput, latency, batching, quantization |

## Phase 2 — New Modules (Priority: High)

### 📘 Module 26 — AI Infrastructure (5 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | GPU Architecture for AI | NVIDIA GPU generations, CUDA cores vs Tensor Cores, memory hierarchy, HBM, NVLink |
| 02 | CUDA Programming Basics | Kernel launch, memory management, grid/block/thread hierarchy, CUDA streams |
| 03 | Model Compilation & Optimization | TensorRT, ONNX, torch.compile, graph optimization, FP8/FP16/INT4 precision |
| 04 | AI Inference Serving | vLLM (PagedAttention, continuous batching), SGLang, TGI, Triton Inference Server |
| 05 | Multi-GPU & Distributed Inference | Tensor parallelism, pipeline parallelism, FSDP, DeepSpeed, NCCL, GPU cluster design |

### 📘 Module 27 — AI Optimization (5 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | Model Pruning | Unstructured vs structured pruning, magnitude pruning, SparseGPT, Wanda, pruning at init |
| 02 | Knowledge Distillation | Logit distillation, feature distillation, on-policy vs off-policy, sequence-level distillation |
| 03 | Attention Optimization | Flash Attention 1/2/3, sparse attention, sliding window attention, GQA, MQA |
| 04 | KV Cache Optimization | PagedAttention, prefix caching, shared KV, KV cache quantization, speculative decoding |
| 05 | Speculative Decoding | Draft models, Medusa, self-speculation, Eagle, parallel decoding, acceptance rate optimization |

### 📘 Module 28 — AI Product Thinking (5 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | AI Product Strategy | Problem identification, feasibility assessment, AI vs rule-based decision, opportunity sizing |
| 02 | User Experience for AI | Interaction design, trust calibration, feedback loops, handling uncertainty, explainability |
| 03 | Experiment Design & Metrics | A/B testing for AI features, offline vs online eval, user-centric KPIs, proxy metrics |
| 04 | AI Product Metrics | Model KPIs vs product KPIs, business impact, ROI calculation, retention & engagement |
| 05 | Building AI Roadmaps | Prioritization frameworks, stakeholder management, iteration cycles, build vs buy decisions |

## Phase 3 — New Modules (Priority: Medium)

### 📘 Module 29 — Certifications Guide (3 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | Microsoft Azure AI | AI-102 (AI Engineer Associate), AI-900 (Fundamentals), DP-100 (Data Scientist) |
| 02 | AWS AI Certifications | AWS Certified AI Practitioner, MLS-C01 (ML Engineer), Bedrock specialization |
| 03 | Google Cloud AI | Professional ML Engineer, Vertex AI specialization, Gemini certifications |

### 📘 Module 30 — Research Reading (4 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | Reading Research Papers | Three-pass method, paper anatomy, abstract-to-detail scanning, literature review |
| 02 | Keeping Up with AI Research | arXiv, Hugging Face Papers, Twitter/X, newsletters (TLDR, The Batch, Import AI) |
| 03 | Major AI Conferences | NeurIPS, ICML, ICLR, ACL, EMNLP, CVPR — proceedings, workshops, paper selection |
| 04 | Reproducing & Implementing Papers | Repo setup, benchmark reproduction, ablation studies, writing blog posts |

### 📘 Module 31 — Business Skills for AI Engineers (4 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | Technical Communication | Technical writing, API documentation, architecture diagrams, writing design docs |
| 02 | Presentation Skills | Creating AI demos, presenting to non-technical stakeholders, data storytelling |
| 03 | Estimation & Planning | Effort estimation, sprint planning, breaking AI tasks, handling uncertainty in ML |
| 04 | Agile & Scrum for AI Teams | ML workflow vs Scrum, adapting sprints for research, MLOps ceremonies, retrospectives |

## Phase 4 — New Modules (Priority: Low)

### 📘 Module 32 — Mobile AI & Edge Deployment (4 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | ONNX Runtime for Mobile | ONNX export, mobile optimizations, NPU acceleration, model conversion pipeline |
| 02 | TensorFlow Lite & CoreML | TFLite converter, quantization, delegate, CoreML conversion, Metal GPU acceleration |
| 03 | Edge AI Frameworks | ExecuTorch, MediaPipe, ML Kit, OpenCV for mobile, camera pipelines |
| 04 | Edge Deployment Patterns | Model compression for edge, federated learning, on-device training, offline-first architecture |

### 📘 Module 33 — Competitive Programming (3 chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | CP Strategy for AI Engineers | Codeforces/AtCoder setup, rating progression, time management, template building |
| 02 | Advanced Algorithm Patterns | Segment trees, Fenwick trees, union-find, KMP/Z-algorithm, advanced DP |
| 03 | Contest Simulation & Optimization | Speed vs accuracy, problem selection, debugging under pressure, upsolving |

## Status: ✅ COMPLETE (July 28 2026)

All items below have been implemented.

### Implementation Order (Actual)

```
Day 1:  Fix index.md → Create PLAN.md → Create Module 26 (AI Product Thinking)
       Create Module 27 (AI Infrastructure & Optimization)
Day 2:  Expand Module 12 RAG (6 chapters) → Expand Agentic AI (5 chapters)
       Create Module 28 (Certifications) → Module 29 (Research Reading)
       Create Module 30 (Business Skills)
Day 3:  Expand Module 23 (Open Source LLMs) → Expand Module 17 (AI Safety)
       Create Module 31 (Mobile AI) → Module 32 (Competitive Programming)
       Update all index.md files + main index.md
```

## Total Expansion Stats

| Metric | Before | After |
|--------|--------|-------|
| Modules | 26 | 33 |
| Chapters | ~247 | ~293 |
| New chapters | — | ~46 |
| Module index bug | Bugged (rows 14-22 shifted) | Fixed |

## New Modules Created

| # | Module | Chapters |
|---|--------|----------|
| 26 | AI Product Thinking | 5 |
| 27 | AI Infrastructure & Optimization | 9 |
| 28 | AI Certifications Guide | 3 |
| 29 | Research Reading & AI Literature | 4 |
| 30 | Business Skills for AI Engineers | 4 |
| 31 | Mobile AI & Edge Deployment | 4 |
| 32 | Competitive Programming | 3 |

## Expanded Modules

| # | Module | Added Chapters |
|---|--------|---------------|
| 12 | RAG & Vector Databases | +6 (Query Rewriting, Parent-Child, KG RAG, GraphRAG, Context Compression, Hybrid Search) |
| 17 | AI Security & Guardrails | +4 (Jailbreaks, Data Leakage, Toxicity, Constitutional AI) |
| 22 | Advanced AI Agents | +5 (CrewAI, AutoGen, OpenAI SDK, Google ADK, A2A) |
| 23 | Trending AI/ML Platforms | +4 (Open Source LLMs, Model Selection, Fine-Tuning Platforms, Deployment Stack) |

## All 30 User Checklist Items — Coverage

| # | Topic | Status |
|---|-------|--------|
| 1 | Mathematics for AI | Module 24 (was already done) |
| 2 | Data Engineering | Module 25 (was already done) |
| 3 | Software Engineering Best Practices | Modules 00 + 05 (was already done) |
| 4 | API Development | Module 05 (was already done) |
| 5 | Distributed Systems | Module 07 (was already done) |
| 6 | Caching | Module 07 (was already done) |
| 7 | Messaging Systems | Module 07 (was already done) |
| 8 | Search Systems | Module 12 expansion (Hybrid Search chapter) |
| 9 | Advanced Database Design | Module 02 (was already done) |
| 10 | Cloud AI Services | Module 06 (was already done) |
| 11 | AI Infrastructure | **NEW** Module 27 (GPU, CUDA, Compilation, Serving, Distributed) |
| 12 | AI Optimization | **NEW** Module 27 (Pruning, Distillation, Flash Attention, KV Cache, Spec Decoding) |
| 13 | Advanced RAG | **NEW** Module 12 expansion (6 chapters) |
| 14 | AI Memory | Module 13 (was already done) |
| 15 | Agentic AI | **NEW** Module 22 expansion (CrewAI, AutoGen, OpenAI SDK, ADK, A2A) |
| 16 | AI Safety | **NEW** Module 17 expansion (Jailbreaks, PII, Toxicity, Alignment) |
| 17 | AI Evaluation | Module 15 (was already done) |
| 18 | AI Monitoring | Module 15 + 16 (was already done) |
| 19 | Cost Optimization | Module 11 + 16 (was already done) |
| 20 | Open Source LLMs | **NEW** Module 23 expansion (Llama, Qwen, Gemma, Phi, GLM) |
| 21 | AI Product Thinking | **NEW** Module 26 |
| 22 | Mobile AI | **NEW** Module 31 |
| 23 | Robotics & Vision | Module 18 (was already done) |
| 24 | Competitive Programming | **NEW** Module 32 |
| 25 | Interview Preparation | Module 21 (was already done) |
| 26 | Career Module | Module 20 (was already done) |
| 27 | Certifications | **NEW** Module 28 |
| 28 | Research Reading | **NEW** Module 29 |
| 29 | Open Source Contribution | Module 20 (was already done) |
| 30 | Business Skills | **NEW** Module 30 |
