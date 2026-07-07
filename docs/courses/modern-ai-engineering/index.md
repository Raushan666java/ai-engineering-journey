# Modern AI Engineering — Course Overview

> **Build production-ready AI applications with Genkit, LangGraph, LlamaIndex, and the MCP protocol. This course bridges the gap between AI experimentation and production deployment.**

[![Course Status](https://img.shields.io/badge/status-live-brightgreen.svg)](https://)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-20%2B-339933.svg)](https://nodejs.org)

## What You'll Learn

Modern AI Engineering is about **building systems that use large language models in production** — not just calling APIs, but architecting reliable, observable, and scalable AI-powered applications. By the end of this course, you will be able to:

- **Design and implement agentic systems** using LangGraph, including multi-agent orchestration with supervisor agents
- **Build Genkit AI flows** with structured output, streaming, evaluation, and observability
- **Implement RAG (Retrieval-Augmented Generation)** using LlamaIndex with vector databases like pgvector
- **Deploy AI services** with Docker, Docker Compose, and Kubernetes
- **Monitor and evaluate AI systems** using OpenTelemetry, Grafana, and Genkit's evaluation framework
- **Use the Model Context Protocol (MCP)** to connect AI agents to external tools and data sources
- **Build a complete capstone project** — an AI education platform with RAG, quiz generation, answer evaluation, and conversational tutoring

### What Makes This Course Different

| Aspect | This Course | Typical AI Courses |
|--------|-------------|-------------------|
| Focus | Production deployment & architecture | Notebooks & API calls |
| Stack | Genkit, LangGraph, LlamaIndex, MCP | LangChain, HuggingFace |
| Language | TypeScript throughout | Python |
| Evaluation | Built-in eval pipelines, tracing | Manual testing |
| Deployment | Docker, K8s, CI/CD | Localhost only |
| Full-Stack | Laravel + Flutter integration | Standalone AI scripts |

## Course Structure

The course is organized into **12 chapters** across **3 modules**:

### Module 1: Foundation (Chapters 1–4)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 1 | Introduction to Modern AI Engineering | LLM landscape, Genkit vs LangChain, TypeScript AI, course stack | 3 |
| 2 | Genkit — Google's AI Framework | Genkit setup, flows, prompts, structured output, streaming, tool calling | 6 |
| 3 | LangGraph for Agentic Workflows | State graphs, nodes, edges, conditional routing, tool calling, persistence | 6 |
| 4 | LlamaIndex & RAG | Document ingestion, chunking, embeddings, vector databases, query engines | 6 |

### Module 2: Core Patterns (Chapters 5–8)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 5 | Vector Databases & Embeddings | pgvector, Pinecone, embedding models, hybrid search, indexing strategies | 5 |
| 6 | Model Context Protocol (MCP) | MCP architecture, servers, tools, resources, prompts, client implementation | 5 |
| 7 | Advanced Prompt Engineering | Prompt templates, chain-of-thought, few-shot, structured generation, safety | 4 |
| 8 | Streams, Events & Real-Time AI | SSE, WebSockets, streaming Genkit flows, event-driven AI architectures | 4 |

### Module 3: Production (Chapters 9–12)

| Chapter | Title | Topics | Hours |
|---------|-------|--------|-------|
| 9 | Multi-Agent Systems & Orchestration | Agent patterns, supervisor agents, LangGraph multi-agent, Genkit orchestration | 6 |
| 10 | Production AI: Deployment, Monitoring & Scaling | Docker, Kubernetes, CI/CD, OpenTelemetry, rate limiting, cost management | 6 |
| 11 | AI Evaluation & Observability | Genkit eval, automated pipelines, tracing, custom evaluators, dashboards | 5 |
| 12 | Capstone — AI Education Platform | Full-stack AI platform: Flutter → Laravel → Genkit → Gemini/Ollama | 10 |

**Total estimated time**: 66 hours (full-time: ~4 weeks, part-time: ~8 weeks)

## Prerequisites

Before starting this course, you should have:

- **Node.js 20+** installed and comfortable with TypeScript (async/await, types, generics)
- **Basic understanding of LLMs** — what they are, how prompting works, what tokens are
- **Docker** installed and able to run basic containers
- **Familiarity with REST APIs** and JSON
- **Optional but helpful**: Experience with Laravel (PHP) or Flutter (Dart) for the capstone

### Tooling Checklist

- [ ] Node.js 20+ (`node --version`)
- [ ] npm 10+ (`npm --version`)
- [ ] Docker Desktop (`docker --version`)
- [ ] Git (`git --version`)
- [ ] A Genkit-compatible API key (Gemini, OpenAI, or Ollama locally)
- [ ] VS Code or your preferred editor

## How This Course Fits with the Laravel/Flutter Stack

This course is designed as part of a broader **full-stack engineering curriculum** that includes Laravel (backend) and Flutter (frontend). Here's how Modern AI Engineering connects:

```
┌─────────────────────────────────────────────────────────┐
│                    Flutter (Mobile/Web UI)               │
├─────────────────────────────────────────────────────────┤
│                    Laravel (API Gateway)                 │
├─────────────────────────────────────────────────────────┤
│              Modern AI Engineering (This Course)         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │  Genkit  │ │ LangGraph│ │LlamaIndex│ │   MCP    │  │
│  │  Flows   │ │  Agents  │ │   RAG    │ │ Protocol │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
├─────────────────────────────────────────────────────────┤
│                 LLM Providers (Gemini, OpenAI, Ollama)   │
└─────────────────────────────────────────────────────────┘
```

The AI services you build in this course are consumed by Laravel as internal microservices, which in turn expose REST/GraphQL APIs to Flutter frontends. The capstone project demonstrates this complete integration.

## Learning Path

### Recommended Study Approaches

**4-Week Full-Time Track** (4-5 hours/day):
- Weeks 1-2: Chapters 1-4 (Foundation)
- Week 3: Chapters 5-8 (Core Patterns)
- Week 4: Chapters 9-12 (Production + Capstone)

**8-Week Part-Time Track** (2-3 hours/day):
- Weeks 1-2: Chapters 1-2
- Weeks 3-4: Chapters 3-4
- Week 5: Chapters 5-6
- Week 6: Chapters 7-8
- Week 7: Chapters 9-10
- Week 8: Chapters 11-12

**Self-Paced Track**:
- Complete chapters in order — each chapter builds on previous ones
- Spend extra time on chapters 4 (RAG), 6 (MCP), and 9 (Multi-agent) — they are the most concept-dense
- The capstone (chapter 12) should be the final integration of everything learned

## Detailed Chapter Descriptions

### Chapter 1: Introduction to Modern AI Engineering
Sets the foundation by surveying the LLM landscape (GPT, Gemini, Claude, Llama, Mistral), comparing Genkit vs LangChain, explaining why TypeScript is the language of choice for production AI, and introducing the course architecture. You'll set up your development environment with Node.js 20+, install Genkit, and run your first AI flow.

### Chapter 2: Genkit — Google's AI Framework
Deep dive into Genkit: installing the CLI, creating flows, working with prompts, generating structured output with Zod schemas, streaming responses, and integrating tool calling. By the end, you'll have built a Genkit flow that generates structured JSON responses from natural language prompts.

### Chapter 3: LangGraph for Agentic Workflows
Learn stateful agent architectures with LangGraph: StateGraph construction, node/edge wiring, conditional routing, tool binding, and checkpoint-based persistence. You'll build an agent that can search the web, read documents, and generate code — all while maintaining conversational context.

### Chapter 4: LlamaIndex & RAG
Master Retrieval-Augmented Generation with LlamaIndex.TS: document parsing and ingestion, chunking strategies (fixed-size, semantic, recursive), embedding generation, vector database integration, query engines, and response synthesis. You'll build a RAG system that answers questions from your own documents.

### Chapter 5: Vector Databases & Embeddings
Explore vector database fundamentals: pgvector setup, Pinecone integration, embedding models (text-embedding-004, ada-002), hybrid search combining vector similarity with keyword matching, indexing strategies (IVFFlat, HNSW), and performance optimization.

### Chapter 6: Model Context Protocol (MCP)
Understand the MCP standard: host-client-server architecture, defining tools with JSON Schema, implementing MCP servers in TypeScript, creating resource providers, building prompt templates, and connecting MCP to LangGraph agents for external tool access.

### Chapter 7: Advanced Prompt Engineering
Go beyond basic prompting: chain-of-thought reasoning, few-shot learning with dynamic examples, prompt templates with variables, persona-based prompting, structured output constraints, safety guardrails, and systematic prompt testing and versioning.

### Chapter 8: Streams, Events & Real-Time AI
Build real-time AI applications: Server-Sent Events (SSE) for streaming Genkit responses, WebSocket integration for bidirectional communication, event-driven flow architectures, handling backpressure, and building a real-time chat interface that streams token-by-token.

### Chapter 9: Multi-Agent Systems & Orchestration
Design coordinated multi-agent systems: sequential, parallel, hierarchical, and debate communication patterns. Build LangGraph supervisor agents, Genkit multi-flow orchestrators, implement shared state and message passing, and handle error recovery with circuit breakers and graceful degradation.

### Chapter 10: Production AI: Deployment, Monitoring & Scaling
Take AI to production: Docker multi-stage builds for Genkit and LangGraph services, Docker Compose for full-stack orchestration, Kubernetes deployments with HPA autoscaling, OpenTelemetry instrumentation, Prometheus metrics, Grafana dashboards, CI/CD pipelines, load testing with k6, rate limiting, caching, and cost management.

### Chapter 11: AI Evaluation & Observability
Systematic AI quality assurance: correctness, relevance, safety, latency, and faithfulness evaluation. Genkit's built-in evaluators, LLM-as-judge patterns, evaluation dataset management, automated evaluation pipelines with CI/CD integration, OpenTelemetry distributed tracing, and Genkit Dev UI for debugging.

### Chapter 12: Capstone — AI Education Platform
Integrate everything in a complete platform: RAG over course PDFs with LlamaIndex and pgvector, automatic quiz generation with structured output, AI answer evaluation with rubric-based scoring, conversational AI tutor with Redis-backed memory, teacher analytics dashboard, and full Docker/Kubernetes deployment.

## Comparison: What's Covered vs Other AI Frameworks

### Genkit vs LangChain

| Feature | Genkit (This Course) | LangChain |
|---------|---------------------|-----------|
| Language | TypeScript-first | Python-first, JS second-class |
| Framework | Google ecosystem | Open-source ecosystem |
| Evaluation | Built-in eval framework | Third-party tools |
| Streaming | Native flow streaming | Callback-based |
| Deployment | Cloud Run, Firebase, Docker | LangServe, self-hosted |
| Observability | OpenTelemetry + Dev UI | LangSmith (commercial) |
| Structured output | Zod schemas, JSON mode | Pydantic, parsers |
| Agent framework | LangGraph.js native | LangChain agents |

### Genkit vs Vercel AI SDK

| Feature | Genkit | Vercel AI SDK |
|---------|--------|--------------|
| Flow abstraction | Native flow system | Stream-based only |
| Evaluation | Built-in evaluators | External tools |
| Plugin ecosystem | Growing (Google, Ollama) | Mature (all providers) |
| Deployment targets | Cloud Run, Firebase, custom | Vercel, custom |
| OpenTelemetry | Native integration | Manual setup |

### Why TypeScript?

All code in this course is written in **TypeScript** because:

1. **Type safety** catches AI prompt output shape mismatches at compile time
2. **Full-stack consistency** — share types between AI services and Laravel/Flutter
3. **Performance** — Node.js excels at I/O-bound AI orchestration
4. **Ecosystem** — Genkit, LangGraph.js, and LlamaIndex.TS are first-class TypeScript citizens
5. **Job market** — TypeScript AI engineers are in high demand

## Chapter Features

Every chapter follows a consistent structure:

```
┌─────────────────────────────────────┐
│ Learning Objectives (what you'll know)│
├─────────────────────────────────────┤
│ Theory & Concepts (why it works)     │
├─────────────────────────────────────┤
│ Code Examples (how to build it)      │
├─────────────────────────────────────┤
│ Mermaid Diagrams (how it connects)   │
├─────────────────────────────────────┤
│ Summary & Practical Takeaways        │
├─────────────────────────────────────┤
│ Chapter Quiz (10 MCQs)               │
├─────────────────────────────────────┤
│ Exercises (5 hands-on)               │
└─────────────────────────────────────┘
```

### Code Example Standards

All TypeScript code in this course:
- Is **testable** — you can copy-paste and run it
- Follows **production patterns** — error handling, logging, types
- Uses **modern ES syntax** — top-level await, ES modules, arrow functions
- Is **documented** with JSDoc comments explaining the _why_

```typescript
// Good: Clear, typed, documented
async function generateEmbedding(text: string): Promise<number[]> {
  const response = await model.embed({ content: text });
  return response.embedding;
}

// Bad: No types, no error handling, unclear
async function emb(text) {
  const r = await model.embed({ content: text });
  return r.embedding;
}
```

## Technology Stack Deep Dive

### Genkit Architecture
Genkit is built around the concept of **flows** — observable, composable AI pipelines. Each flow is a TypeScript async function that can call LLMs, tools, and other flows. Genkit automatically instruments every flow with OpenTelemetry traces, making debugging and optimization straightforward.

```
User Request → Flow (traced) → LLM Call → Tool Call → Structured Output → Response
                   ↓
          OpenTelemetry Export
                   ↓
          Jaeger / Cloud Trace
```

### LangGraph Architecture
LangGraph models agent workflows as **state graphs**. The graph has nodes (LLM calls, tool executions, human inputs) and edges (conditional or fixed transitions). All nodes share a typed state object that accumulates data as the graph executes.

```
State (typed) → Node A (LLM) → Conditional Edge → Node B (Tool) → ...
                                                     ↓
                                              State Update
```

### LlamaIndex Architecture
LlamaIndex provides a **data framework** for RAG. Documents are parsed into nodes, embedded, and indexed. Query time involves retrieving relevant nodes and synthesizing a response using an LLM with the retrieved context.

```
Documents → Parser → Nodes → Embedder → Vector Index
                                              ↓
User Query → Embedder → Retriever → LLM (with context) → Response
```

## Getting Started

To start the course immediately:

```bash
# Clone the repository
git clone https://github.com/your-org/ai-engineering-journey.git
cd ai-engineering-journey

# Install dependencies for chapter 1 examples
cd code/modern-ai-engineering
npm install
```

Then open `docs/courses/modern-ai-engineering/01-introduction.md` and begin reading.

### Quick Start: Run Your First Genkit Flow

After setting up the environment:

```bash
# Navigate to the code directory
cd code/modern-ai-engineering

# Run the introduction flow
npx tsx src/01-introduction/hello-flow.ts
```

Expected output:
```
Hello, AI Engineering!
Response: Welcome to Modern AI Engineering with Genkit!
```

If you see this output, your environment is correctly configured and you're ready to begin the course.

### Setting Up Your Environment

Create a `.env` file in the course code directory:

```bash
# Required: At least one LLM provider
GOOGLE_GENAI_API_KEY=your-gemini-key
# or
OPENAI_API_KEY=your-openai-key

# Optional: Vector database
DATABASE_URL=postgresql://localhost:5432/ai_engineering

# Optional: Observability
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318
```

## How to Use This Course Effectively

### For Beginners (New to AI Engineering)

1. **Follow chapters in order** — each chapter builds on the previous one
2. **Type every code example yourself** — don't copy-paste. Muscle memory matters
3. **Run every flow as you read** — stop at each code block and execute it
4. **Do the exercises** — the 5 exercises per chapter are where real learning happens
5. **Take notes** — write down concepts in your own words (active recall)

### For Experienced Developers

1. **Skim chapters 1-4** if you're already familiar with Genkit basics
2. **Focus on chapters 5-8** for patterns you may not know (MCP, streaming)
3. **Spend time on chapters 9-11** — multi-agent and production patterns are the most valuable
4. **Complete the capstone in chapter 12** — it integrates everything
5. **Use the exercises as a benchmark** — if you can complete the "Hard" exercises, you've mastered the material

### Study Tips

- **Spaced repetition**: Review chapter quizzes 1, 3, and 7 days after first reading
- **Project-based**: Build a small project alongside each module (e.g., a chatbot for module 1, a RAG system for module 2, a deployed API for module 3)
- **Pair programming**: Work through the capstone with a partner
- **Teach someone**: Explain each pattern to a colleague after finishing a chapter

## Course Glossary

| Term | Definition |
|------|-----------|
| **Genkit** | Google's open-source framework for building AI applications with TypeScript |
| **LangGraph** | Framework for building stateful, multi-agent applications with LLMs |
| **LlamaIndex** | Data framework for building RAG applications |
| **MCP** | Model Context Protocol — standard for connecting AI models to tools and data |
| **RAG** | Retrieval-Augmented Generation — augmenting LLM prompts with retrieved context |
| **Agent** | An LLM-powered system that can use tools and make decisions |
| **Flow** | A Genkit concept for a structured, observable AI pipeline |
| **Structured Output** | LLM response constrained to a JSON schema (e.g., Zod schema) |
| **OpenTelemetry** | Observability framework for traces, metrics, and logs |
| **pgvector** | PostgreSQL extension for vector similarity search |
| **Embedding** | A vector representation of text used for semantic search |
| **Token** | The basic unit of text an LLM processes (roughly 0.75 words for English) |
| **Temperature** | LLM parameter controlling randomness (0 = deterministic, 1 = creative) |
| **Top-K / Top-P** | Sampling parameters that control token selection diversity |
| **System Prompt** | Initial instruction that sets the LLM's behavior and constraints |
| **Few-Shot Learning** | Providing examples in the prompt to guide LLM output |
| **Chain-of-Thought** | Prompting technique that elicits step-by-step reasoning from LLMs |
| **Hallucination** | LLM generating plausible but factually incorrect information |
| **Vector Search** | Finding similar items by comparing embedding vectors using distance metrics |
| **Cosine Similarity** | A measure of similarity between two vectors (range: -1 to 1) |
| **Node** | A step in a LangGraph workflow (can be an LLM call, tool, or function) |
| **Edge** | A connection between nodes in a LangGraph workflow |
| **State Graph** | A graph-based workflow where nodes read/write to shared state |
| **Supervisor Agent** | An agent that delegates tasks to specialized worker agents |
| **Tool Calling** | LLM requesting the execution of an external function |
| **Streaming** | Receiving LLM output token-by-token rather than all at once |
| **SSE** | Server-Sent Events — HTTP-based protocol for streaming data to clients |
| **OTLP** | OpenTelemetry Protocol — standard for exporting telemetry data |
| **Span** | A named, timed operation in a trace (represents a unit of work) |
| **Trace** | A record of the full path a request takes through a distributed system |
| **Canary Deployment** | Rolling out a new version to a small subset of users first |
| **Circuit Breaker** | Pattern that stops calling a failing service to prevent cascading failures |
| **Graceful Degradation** | Falling back to a simpler but functional mode when full service is unavailable |

## Module Map

```
Module 1: Foundation
┌─────────────────────────────────────────────────────────────────────┐
│ Ch1: Intro     → Ch2: Genkit    → Ch3: LangGraph → Ch4: LlamaIndex │
│ Understand the  │ Build AI flows  │ Create agentic  │ Implement RAG │
│ AI landscape    │ with Genkit     │ workflows       │ with LlamaIndex│
└─────────────────────────────────────────────────────────────────────┘

Module 2: Core Patterns
┌─────────────────────────────────────────────────────────────────────┐
│ Ch5: Vector DBs → Ch6: MCP       → Ch7: Prompts   → Ch8: Streams  │
│ pgvector,       │ Model Context   │ Advanced        │ Real-time AI  │
│ hybrid search   │ Protocol tools  │ prompt patterns │ with SSE/WSS  │
└─────────────────────────────────────────────────────────────────────┘

Module 3: Production
┌─────────────────────────────────────────────────────────────────────┐
│ Ch9: Multi-     → Ch10: Deploy    → Ch11: Eval &   → Ch12: Capstone│
│ Agent Systems   │ Docker, K8s,    │ Observability  │ AI Education  │
│ Orchestration   │ CI/CD, monitoring│ Genkit eval    │ Full platform │
└─────────────────────────────────────────────────────────────────────┘
```

## Assessment & Certification

### Self-Assessment

Each chapter includes:
- **10 multiple-choice questions** (immediate self-check)
- **5 hands-on exercises** (practice and portfolio building)
- **A capstone project** in chapter 12 (integrates all skills)

### Progress Tracking

Use this checklist to track your progress:

- [ ] Module 1: Foundation (Chapters 1-4) — 21 hours
- [ ] Chapter 1: Introduction — 3 hours
- [ ] Chapter 2: Genkit Deep Dive — 6 hours
- [ ] Chapter 3: LangGraph — 6 hours
- [ ] Chapter 4: LlamaIndex & RAG — 6 hours
- [ ] Module 2: Core Patterns (Chapters 5-8) — 18 hours
- [ ] Chapter 5: Vector Databases — 5 hours
- [ ] Chapter 6: MCP Protocol — 5 hours
- [ ] Chapter 7: Prompt Engineering — 4 hours
- [ ] Chapter 8: Streams & Events — 4 hours
- [ ] Module 3: Production (Chapters 9-12) — 27 hours
- [ ] Chapter 9: Multi-Agent Systems — 6 hours
- [ ] Chapter 10: Production Deployment — 6 hours
- [ ] Chapter 11: Evaluation & Observability — 5 hours
- [ ] Chapter 12: Capstone Project — 10 hours

### Portfolio Projects

By the end of this course, you will have built:
1. **Genkit flow** with structured output (Chapter 2)
2. **LangGraph agent** with tool calling (Chapter 3)
3. **RAG system** with LlamaIndex (Chapter 4)
4. **Vector search** application with pgvector (Chapter 5)
5. **MCP server** for external tool integration (Chapter 6)
6. **Multi-agent orchestration** system (Chapter 9)
7. **Dockerized AI service** with monitoring (Chapter 10)
8. **Evaluation pipeline** with automated scoring (Chapter 11)
9. **Complete AI Education Platform** capstone (Chapter 12)

## Chapter Quiz Overview

Each chapter includes **10 multiple-choice questions** to test comprehension. Questions range from recall (theory) to application (code analysis). Answer keys are provided in the instructor materials.

## Exercise Overview

Each chapter includes **5 hands-on exercises** that require writing TypeScript code, configuring infrastructure, or designing system architectures. Exercises are graded on a rough scale:

- **Easy**: Implement a single function or flow (15-30 minutes)
- **Medium**: Build a complete feature (45-90 minutes)
- **Hard**: Design and implement a system (2-4 hours)

## Troubleshooting Common Issues

### Genkit CLI Not Found
```bash
# Ensure Genkit CLI is installed globally or via npx
npx genkit --version
# If missing: npm install -g genkit
```

### API Key Errors
```bash
# Verify your API key is set
echo $GOOGLE_GENAI_API_KEY  # macOS/Linux
echo %GOOGLE_GENAI_API_KEY%  # Windows
# Should show a non-empty string starting with "AIza"
```

### Docker Containers Crash on Start
```bash
# Check container logs
docker logs genkit-service
# Common causes: missing .env file, database not ready, port conflicts
# Solution: Ensure all dependencies are healthy before the AI service starts
```

### pgvector Index Build Fails
```sql
-- Ensure the vector extension is installed
CREATE EXTENSION IF NOT EXISTS vector;
-- Check index parameters (lists should be sqrt of row count)
CREATE INDEX ON document_chunks USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
```

### LLM Returns Empty or Garbled Responses
- Check your API key has quota remaining
- Verify the model name is correct (e.g., `gemini-pro` not `gemini-pro-v1`)
- Reduce `maxOutputTokens` if responses are being truncated
- Lower temperature if responses are incoherent

### LangGraph Agent Gets Stuck in a Loop
- Add a `maxIterations` limit to your agent configuration
- Implement a timeout on agent execution
- Check that the agent's tools return meaningful error messages
- Add a "FINISH" keyword or signal that the agent must output to exit

## How to Get Help

- **GitHub Issues**: Open an issue in the course repository with the "question" label
- **Discussions**: Join the course discussion board for conceptual questions
- **Stack Overflow**: Tag questions with `modern-ai-engineering` and `genkit`
- **Discord**: Join the course community Discord for real-time help (link in repo)

## Contributing

Found a bug in a code example? Want to improve an explanation? This course is open source and contributions are welcome.

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

MIT © AI Engineering Journey

---

> **Next**: [Chapter 1: Introduction to Modern AI Engineering →](01-introduction.md)
