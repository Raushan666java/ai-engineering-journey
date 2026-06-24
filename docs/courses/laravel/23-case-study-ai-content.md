# Chapter 23: Case Study Ã¢â‚¬â€ AI-Powered Content Platform

> **Previous:** [Case Study E-Commerce](./22-case-study-ecommerce.md) | **Next:** [Capstone](./24-capstone.md)

---

## Learning Objectives

- Architect a RAG (Retrieval-Augmented Generation) pipeline within Laravel using PostgreSQL's pgvector extension
- Design and implement AI agents with structured output using the AI SDK for content generation, editing, and research
- Build a multi-tenant vector search strategy with hybrid (full-text + semantic) retrieval and weighted scoring
- Expose MCP (Model Context Protocol) servers that external AI clients can use to search, generate, and analyze content
- Implement an AI-powered content moderation pipeline for both text and image analysis
- Design caching strategies for embeddings, search results, and AI responses that balance freshness with cost

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Requirements | AI content platform with RAG, agents, and vector search | Define content creation, moderation, and search flows |
| Architecture | Event-driven with queued AI processing | Use events for async content processing pipeline |
| RAG Pipeline | Retrieve, augment, generate content | Use vector store for semantic search over content |
| AI Agent Design | Specialized agents for content tasks | Moderation, generation, and search agents collaborate |
| Vector Store Strategy | Store embeddings for semantic search | Use PostgreSQL pgvector or dedicated vector DB |
| Real-Time | WebSockets for live updates | Use Laravel Reverb for real-time collaboration |

## Chapter Roadmap

``mermaid
flowchart LR
    A[User] --> B[Laravel App]
    B --> C[Content Moderation Agent]
    B --> D[RAG Pipeline]
    D --> E[Vector Store]
    D --> F[LLM Service]
    B --> G[Search Agent]
    B --> H[Real-Time Reverb]
    H --> I[WebSocket Clients]
    B --> J[Queue Workers]
    J --> K[AI Processing Jobs]
``



## Theory Ã¢â‚¬â€ End-to-End Design

![AI Content Case Study](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/23-case-study-ai-content.png)


### 7.1 Requirements Gathering


> **One-Sentence Takeaway:** The AI content platform requires content creation, moderation, search, and real-time collaboration features.

The platform enables content teams to author, edit, search, and publish articles at scale with AI assistance. Writers produce drafts, editors refine them, and AI agents provide research augmentation, quality checks, and semantic search across the entire knowledge base.

**Functional Requirements**

| Requirement | Detail |
|---|---|
| Document management | 1 million documents with version history, metadata, tags, and SEO fields |
| Semantic search | Natural language querying across all documents using vector similarity |
| AI content generation | Generate articles from briefs with structured output (title, body, summary, SEO tags) |
| AI editing | Automated quality review: grammar, style, factual consistency, tone |
| AI research | Web search integration for fact-checking and citation enrichment |
| Multi-language | Documents in 15+ languages with language-aware search and generation |
| Real-time collaboration | Multiple editors on the same document with conflict resolution (operational transforms) |
| Content moderation | Automated flagging of toxic or NSFW content in text and images |

**Non-Functional Requirements**

| Requirement | Target |
|---|---|
| Users | 100,000 registered users (writers, editors, admins) |
| Documents | 1 million documents, each averaging 10 KB of text + metadata |
| Embedding dimensions | 1536 (OpenAI text-embedding-3-small) |
| Search latency (p95) | <500ms for semantic search across all documents |
| Generation latency | <15 seconds for a 1000-word article |
| Moderation throughput | Process 1000 submissions per minute via async queue |

### 7.2 Architecture Overview


> **One-Sentence Takeaway:** The architecture uses event-driven design with queued AI processing and WebSocket real-time updates.

The system consists of five layers: API gateway, Laravel backend, vector database, AI SDK agent layer, and external service integrations.

```
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š                          Content Platform UI                             Ã¢â€â€š
Ã¢â€â€š            (Livewire / Inertia + Vue 3, Reverb WebSockets)               Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
                                    Ã¢â€â€š
                            Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
                            Ã¢â€â€š   Load BalancerÃ¢â€â€š
                            Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
                                    Ã¢â€â€š
                    Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
                    Ã¢â€â€š       Laravel Octane           Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â   Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€â€š  API Controllers       Ã¢â€â€š   Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€â€š  AI Agent Orchestrator Ã¢â€â€š   Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€â€š  MCP Server Handlers   Ã¢â€â€š   Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€â€š  Document Service      Ã¢â€â€š   Ã¢â€â€š
                    Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ   Ã¢â€â€š
                    Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
                                    Ã¢â€â€š
        Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¼Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
        Ã¢â€â€š                           Ã¢â€â€š                           Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â           Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â           Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š  PostgreSQL    Ã¢â€â€š           Ã¢â€â€š    Redis       Ã¢â€â€š           Ã¢â€â€š  Queue Workers Ã¢â€â€š
Ã¢â€â€š  + pgvector    Ã¢â€â€š           Ã¢â€â€š                Ã¢â€â€š           Ã¢â€â€š  (Horizon)     Ã¢â€â€š
Ã¢â€â€š  (documents,   Ã¢â€â€š           Ã¢â€â€š Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â Ã¢â€â€š           Ã¢â€â€š  Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â Ã¢â€â€š
Ã¢â€â€š   embeddings,  Ã¢â€â€š           Ã¢â€â€š Ã¢â€â€š Embeddings Ã¢â€â€š Ã¢â€â€š           Ã¢â€â€š  Ã¢â€â€šModeration Ã¢â€â€š Ã¢â€â€š
Ã¢â€â€š   vectors)     Ã¢â€â€š           Ã¢â€â€š Ã¢â€â€š Cache      Ã¢â€â€š Ã¢â€â€š           Ã¢â€â€š  Ã¢â€â€šPipeline   Ã¢â€â€š Ã¢â€â€š
Ã¢â€â€š               Ã¢â€â€š           Ã¢â€â€š Ã¢â€â€š Search TTL  Ã¢â€â€š Ã¢â€â€š           Ã¢â€â€š  Ã¢â€â€šEmbed Gen  Ã¢â€â€š Ã¢â€â€š
Ã¢â€â€š               Ã¢â€â€š           Ã¢â€â€š Ã¢â€â€š AI ResponsesÃ¢â€â€š Ã¢â€â€š           Ã¢â€â€š  Ã¢â€â€šContent GenÃ¢â€â€š Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ           Ã¢â€â€š Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ Ã¢â€â€š           Ã¢â€â€š  Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ Ã¢â€â€š
        Ã¢â€â€š                   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ           Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
        Ã¢â€â€š                           Ã¢â€â€š                           Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â           Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â                   Ã¢â€â€š
Ã¢â€â€š  AI SDK Layer  Ã¢â€â€š           Ã¢â€â€š   Reverb WS    Ã¢â€â€š                   Ã¢â€â€š
Ã¢â€â€š Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â  Ã¢â€â€š           Ã¢â€â€š (collaboration  Ã¢â€â€š                   Ã¢â€â€š
Ã¢â€â€š Ã¢â€â€š ResearcherÃ¢â€â€š  Ã¢â€â€š           Ã¢â€â€š  edit status,   Ã¢â€â€š                   Ã¢â€â€š
Ã¢â€â€š Ã¢â€â€š Writer    Ã¢â€â€š  Ã¢â€â€š           Ã¢â€â€š  agent progress Ã¢â€â€š                   Ã¢â€â€š
Ã¢â€â€š Ã¢â€â€š Editor    Ã¢â€â€š  Ã¢â€â€š           Ã¢â€â€š  broadcasts)   Ã¢â€â€š                   Ã¢â€â€š
Ã¢â€â€š Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ  Ã¢â€â€š           Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ                   Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ                                               Ã¢â€â€š
        Ã¢â€â€š                                                       Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â                                               Ã¢â€â€š
Ã¢â€â€š External APIs  Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€š (OpenAI,      Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€š  Perplexity,  Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€š  Claude)      Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ                                               Ã¢â€â€š
        Ã¢â€â€š                                                       Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â´Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â                                               Ã¢â€â€š
Ã¢â€â€š   MCP Servers  Ã¢â€â€š                                              Ã¢â€â€š
Ã¢â€â€š (search_docs, Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€š  generate,    Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€š  analyze)     Ã¢â€â€š                                               Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ                                               Ã¢â€â€š
        Ã¢â€â€š                                                       Ã¢â€â€š
        Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
```

### 7.3 Data Model


> **One-Sentence Takeaway:** Content, users, embeddings, and moderation results are stored in PostgreSQL with pgvector for vector search.

The schema is designed around documents, their versions, embeddings, and the artifacts produced by AI agents.

```sql
-- Documents (core entity)
CREATE TABLE documents (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    workspace_id    BIGINT UNSIGNED NOT NULL,
    author_id       BIGINT UNSIGNED NOT NULL,
    title           VARCHAR(500) NOT NULL,
    slug            VARCHAR(500) NOT NULL,
    body            LONGTEXT,
    summary         VARCHAR(1000),
    language        CHAR(2) NOT NULL DEFAULT 'en',
    status          ENUM('draft', 'review', 'published', 'archived') NOT NULL DEFAULT 'draft',
    visibility      ENUM('private', 'team', 'public') NOT NULL DEFAULT 'team',
    seo_title       VARCHAR(500),
    seo_description VARCHAR(1000),
    seo_keywords    JSON,
    metadata        JSON,
    published_at    TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_workspace_status (workspace_id, status),
    INDEX idx_author (author_id),
    INDEX idx_language (language),
    INDEX idx_published_at (published_at),
    FULLTEXT INDEX ft_title_body (title, body),
    UNIQUE INDEX idx_workspace_slug (workspace_id, slug),

    CONSTRAINT fk_doc_workspace FOREIGN KEY (workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE,
    CONSTRAINT fk_doc_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Document versions (immutable audit trail)
CREATE TABLE document_versions (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id     BIGINT UNSIGNED NOT NULL,
    version_number  INT UNSIGNED NOT NULL,
    title           VARCHAR(500) NOT NULL,
    body            LONGTEXT,
    summary         VARCHAR(1000),
    editor_id       BIGINT UNSIGNED NULL,
    change_summary  VARCHAR(500),
    word_count      INT UNSIGNED NOT NULL DEFAULT 0,
    checksum        CHAR(64) NOT NULL,  -- SHA-256 for integrity
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_document (document_id),
    UNIQUE INDEX idx_doc_version (document_id, version_number),

    CONSTRAINT fk_version_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    CONSTRAINT fk_version_editor FOREIGN KEY (editor_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- pgvector extension must be enabled:
-- CREATE EXTENSION vector;

-- Document embeddings (separate table for vector storage)
CREATE TABLE document_embeddings (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id     BIGINT UNSIGNED NOT NULL,
    chunk_index     INT UNSIGNED NOT NULL,  -- which chunk of the document
    chunk_text      TEXT NOT NULL,
    embedding       VECTOR(1536) NOT NULL,   -- OpenAI text-embedding-3-small
    content_type    ENUM('article', 'comment', 'metadata') NOT NULL DEFAULT 'article',
    language        CHAR(2) NOT NULL DEFAULT 'en',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_document_chunk (document_id, chunk_index),
    INDEX idx_content_type (content_type),
    INDEX idx_language (language),

    CONSTRAINT fk_embedding_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- HNSW index for fast approximate nearest neighbor search
-- CREATE INDEX idx_embedding_hnsw ON document_embeddings
--     USING hnsw (embedding vector_cosine_ops)
--     WITH (m = 16, ef_construction = 200);

-- Tags
CREATE TABLE tags (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    workspace_id    BIGINT UNSIGNED NOT NULL,
    name            VARCHAR(100) NOT NULL,
    slug            VARCHAR(100) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE INDEX idx_workspace_tag (workspace_id, slug),
    CONSTRAINT fk_tag_workspace FOREIGN KEY (workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Pivot: document_tags
CREATE TABLE document_tags (
    document_id     BIGINT UNSIGNED NOT NULL,
    tag_id          BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (document_id, tag_id),
    INDEX idx_tag (tag_id),
    CONSTRAINT fk_dt_document FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    CONSTRAINT fk_dt_tag FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Comments (for collaboration and moderation)
CREATE TABLE comments (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id     BIGINT UNSIGNED NOT NULL,
    user_id         BIGINT UNSIGNED NOT NULL,
    parent_id       BIGINT UNSIGNED NULL,
    body            TEXT NOT NULL,
    resolved_at     TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_document (document_id),
    INDEX idx_user (user_id),
    INDEX idx_parent (parent_id),
    INDEX idx_resolved (resolved_at),

    CONSTRAINT fk_comment_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_comment_parent FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Agent logs (audit trail for all AI actions)
CREATE TABLE agent_logs (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    agent_type      VARCHAR(100) NOT NULL,  -- 'writer', 'editor', 'researcher', 'moderator'
    session_id      CHAR(36) NOT NULL,
    user_id         BIGINT UNSIGNED NULL,
    document_id     BIGINT UNSIGNED NULL,
    action          VARCHAR(100) NOT NULL,  -- 'generate', 'review', 'research', 'moderate'
    input_tokens    INT UNSIGNED NOT NULL DEFAULT 0,
    output_tokens   INT UNSIGNED NOT NULL DEFAULT 0,
    model           VARCHAR(100) NOT NULL,
    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,
    status          ENUM('started', 'completed', 'failed') NOT NULL DEFAULT 'started',
    error_message   TEXT NULL,
    metadata        JSON,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_agent_type (agent_type),
    INDEX idx_user (user_id),
    INDEX idx_document (document_id),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB;

-- Moderation results
CREATE TABLE moderation_results (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    moderatable_type   VARCHAR(255) NOT NULL,  -- App\Models\Document, App\Models\Comment
    moderatable_id     BIGINT UNSIGNED NOT NULL,
    status          ENUM('approved', 'flagged', 'rejected') NOT NULL DEFAULT 'approved',
    categories      JSON,  -- e.g., ["hate_speech", "nsfw", "harassment"]
    scores          JSON,  -- e.g., {"toxicity": 0.95, "nsfw": 0.02}
    reviewed_by     ENUM('ai', 'human') NOT NULL DEFAULT 'ai',
    reviewer_id     BIGINT UNSIGNED NULL,
    reviewed_at     TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_moderatable (moderatable_type, moderatable_id),
    INDEX idx_status (status),
    INDEX idx_reviewed_by (reviewed_by),

    CONSTRAINT fk_mod_reviewer FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;
```

### 7.4 RAG Pipeline


> **One-Sentence Takeaway:** Retrieve-Augment-Generate: fetch relevant content from vector store, augment the prompt, generate the response.

RAG (Retrieval-Augmented Generation) is the core architectural pattern. When a user queries the knowledge base, we retrieve relevant document chunks via vector similarity, then pass those chunks as context to an LLM for the final answer.

#### 7.4.1 Document Ingestion Pipeline

When a document is created or updated, it goes through an asynchronous pipeline that chunks the text, generates embeddings, and stores them in pgvector.

```php
// App\Jobs\ProcessDocumentEmbeddings.php
<?php

namespace App\Jobs;

use App\Models\Document;
use App\Services\EmbeddingService;
use App\Services\DocumentChunker;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ProcessDocumentEmbeddings implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Document $document
    ) {}

    public function handle(
        EmbeddingService $embedder,
        DocumentChunker $chunker,
    ): void {
        // 1. Chunk the document
        $chunks = $chunker->chunk(
            text:  "{$this->document->title}\n\n{$this->document->body}",
            size:  512,   // tokens per chunk
            overlap: 50,  // overlap between chunks
        );

        // 2. Remove old embeddings for this document
        $this->document->embeddings()->delete();

        // 3. Generate and store embeddings in batches
        $batches = array_chunk($chunks, 20);

        foreach ($batches as $batch) {
            $responses = $embedder->embedTexts($batch);

            $records = [];

            foreach ($responses as $index => $response) {
                $records[] = [
                    'document_id'  => $this->document->id,
                    'chunk_index'  => $index,
                    'chunk_text'   => $batch[$index],
                    'embedding'    => DB::raw("'[" . implode(',', $response->embedding) . "]'::vector"),
                    'content_type' => 'article',
                    'language'     => $this->document->language,
                ];
            }

            DB::table('document_embeddings')->insert($records);
        }
    }
}
```

#### 7.4.2 Embedding Service

The embedding service abstracts the AI SDK provider (OpenAI in this case) behind an interface.

```php
// App\Services\EmbeddingService.php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use OpenAI\Laravel\Facades\OpenAI;

class EmbeddingService
{
    private string $model = 'text-embedding-3-small';

    private int $dimensions = 1536;

    public function embedText(string $text): array
    {
        $response = $this->embedTexts([$text]);

        return $response[0]->embedding;
    }

    public function embedTexts(array $texts): array
    {
        $cacheKey = $this->buildCacheKey($texts);

        return Cache::remember($cacheKey, 86400, function () use ($texts) {
            $response = OpenAI::embeddings()->create([
                'model' => $this->model,
                'input' => $texts,
            ]);

            $embeddings = [];

            foreach ($response->embeddings as $embedding) {
                $embeddings[] = (object) [
                    'embedding' => $embedding->embedding,
                    'index'     => $embedding->index,
                ];
            }

            usort($embeddings, fn ($a, $b) => $a->index <=> $b->index);

            return $embeddings;
        });
    }

    private function buildCacheKey(array $texts): string
    {
        $hash = md5(implode('|', array_map('md5', $texts)));

        return "embedding:{$this->model}:{$hash}";
    }
}
```

#### 7.4.3 Semantic Search with pgvector

Laravel does not have native pgvector support, so we write raw queries using the query builder.

```php
// App\Services\VectorSearchService.php
<?php

namespace App\Services;

use App\Models\Document;
use Illuminate\Support\Facades\DB;

class VectorSearchService
{
    public function __construct(
        private EmbeddingService $embedder,
    ) {}

    /**
     * Perform semantic search across documents.
     *
     * @param string $query        Natural language query
     * @param array  $options      Filters: workspace_id, language, status, content_type, limit
     * @return array
     */
    public function search(string $query, array $options = []): array
    {
        $queryEmbedding = $this->embedder->embedText($query);

        $vectorLiteral = '[' . implode(',', $queryEmbedding) . ']';

        $limit = $options['limit'] ?? 10;
        $offset = $options['offset'] ?? 0;

        $wheres = [];
        $bindings = [];

        if (!empty($options['workspace_id'])) {
            $wheres[] = 'd.workspace_id = ?';
            $bindings[] = $options['workspace_id'];
        }

        if (!empty($options['language'])) {
            $wheres[] = 'de.language = ?';
            $bindings[] = $options['language'];
        }

        if (!empty($options['content_type'])) {
            $wheres[] = 'de.content_type = ?';
            $bindings[] = $options['content_type'];
        }

        if (!empty($options['status'])) {
            $wheres[] = 'd.status = ?';
            $bindings[] = $options['status'];
        }

        $whereClause = !empty($wheres)
            ? 'WHERE ' . implode(' AND ', $wheres)
            : '';

        $sql = "
            SELECT
                d.id,
                d.title,
                d.summary,
                d.slug,
                d.status,
                d.language,
                de.chunk_text,
                de.chunk_index,
                de.content_type,
                1 - (de.embedding <=> ?::vector) AS similarity
            FROM document_embeddings de
            JOIN documents d ON d.id = de.document_id
            {$whereClause}
            ORDER BY de.embedding <=> ?::vector
            LIMIT ? OFFSET ?
        ";

        $bindings = array_merge(
            [$vectorLiteral],
            $bindings,
            [$vectorLiteral, $limit, $offset]
        );

        return DB::select($sql, $bindings);
    }

    /**
     * Hybrid search: combine full-text and vector scores.
     */
    public function hybridSearch(string $query, array $options = []): array
    {
        $queryEmbedding = $this->embedder->embedText($query);

        $vectorLiteral = '[' . implode(',', $queryEmbedding) . ']';

        $limit = $options['limit'] ?? 10;
        $workspaceId = $options['workspace_id'] ?? null;

        $sql = "
            WITH vector_results AS (
                SELECT
                    d.id,
                    d.title,
                    d.summary,
                    de.chunk_text,
                    1 - (de.embedding <=> ?::vector) AS vector_score,
                    ROW_NUMBER() OVER (ORDER BY de.embedding <=> ?::vector) AS vector_rank
                FROM document_embeddings de
                JOIN documents d ON d.id = de.document_id
                WHERE d.workspace_id = ?
                ORDER BY de.embedding <=> ?::vector
                LIMIT 50
            ),
            fts_results AS (
                SELECT
                    d.id,
                    d.title,
                    d.summary,
                    d.body AS chunk_text,
                    ts_rank_cd(
                        to_tsvector('english', d.title || ' ' || d.body),
                        plainto_tsquery('english', ?)
                    ) AS fts_score,
                    ROW_NUMBER() OVER (ORDER BY ts_rank_cd(
                        to_tsvector('english', d.title || ' ' || d.body),
                        plainto_tsquery('english', ?)
                    ) DESC) AS fts_rank
                FROM documents d
                WHERE d.workspace_id = ?
                  AND d.status = 'published'
                LIMIT 50
            )
            SELECT
                COALESCE(v.id, f.id) AS id,
                COALESCE(v.title, f.title) AS title,
                COALESCE(v.summary, f.summary) AS summary,
                COALESCE(v.chunk_text, f.chunk_text) AS excerpt,
                COALESCE(v.vector_score, 0) AS vector_score,
                COALESCE(f.fts_score, 0) AS fts_score,
                -- Weighted hybrid score: 0.7 vector + 0.3 full-text
                (COALESCE(v.vector_score, 0) * 0.7 + COALESCE(f.fts_score, 0) * 0.3) AS hybrid_score
            FROM vector_results v
            FULL OUTER JOIN fts_results f ON v.id = f.id
            ORDER BY hybrid_score DESC
            LIMIT ?
        ";

        return DB::select($sql, [
            $vectorLiteral,
            $vectorLiteral,
            $workspaceId,
            $vectorLiteral,
            $query,
            $query,
            $workspaceId,
            $limit,
        ]);
    }
}
```

#### 7.4.4 LLM-Augmented Generation

Given retrieved context, we generate an answer using the AI SDK.

```php
// App\Services\RagService.php
<?php

namespace App\Services;

use App\Models\Document;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class RagService
{
    public function __construct(
        private VectorSearchService $vectorSearch,
        private AiAgentService $agentService,
    ) {}

    public function answer(string $query, array $options = []): array
    {
        // 1. Check cache for similar query
        $cacheKey = $this->semanticCacheKey($query, $options);
        $cached = Cache::get($cacheKey);

        if ($cached) {
            return $cached;
        }

        // 2. Retrieve relevant chunks
        $results = $this->vectorSearch->search(
            query:   $query,
            options: array_merge($options, ['limit' => 5]),
        );

        if (empty($results)) {
            return [
                'answer'       => 'No relevant documents found.',
                'sources'      => [],
                'from_cache'   => false,
            ];
        }

        // 3. Build context from retrieved chunks
        $context = collect($results)
            ->map(fn ($r) => "Ã¢â‚¬â€ {$r->chunk_text} (source: {$r->title}, similarity: " . round($r->similarity, 3) . ")")
            ->implode("\n\n");

        $sources = collect($results)
            ->unique('id')
            ->map(fn ($r) => [
                'id'    => $r->id,
                'title' => $r->title,
                'slug'  => $r->slug,
                'similarity' => round($r->similarity, 3),
            ])
            ->values()
            ->toArray();

        // 4. Generate answer using AI agent
        $answer = $this->agentService->execute('researcher', [
            'system' => "You are a research assistant. Answer the user's question based SOLELY on the provided context. If the context does not contain enough information, say so. Cite sources by title.",
            'prompt' => "Context:\n{$context}\n\nQuestion: {$query}",
        ]);

        $result = [
            'answer'     => $answer,
            'sources'    => $sources,
            'from_cache' => false,
        ];

        // 5. Cache result (TTL based on query specificity Ã¢â‚¬â€ shorter for vague queries)
        $ttl = strlen($query) > 50 ? 3600 : 300;
        Cache::put($cacheKey, $result, $ttl);

        return $result;
    }

    private function semanticCacheKey(string $query, array $options): string
    {
        $normalized = mb_strtolower(trim(preg_replace('/\s+/', ' ', $query)));

        return 'rag:' . md5($normalized . json_encode($options));
    }
}
```


> **Pro Tip:** Chunk your content strategically. Overlapping chunks with metadata improve retrieval accuracy significantly.


> **Pro Tip:** Chunk your content strategically. Overlapping chunks with metadata improve retrieval accuracy significantly.

### 7.5 AI Agent Design


> **One-Sentence Takeaway:** Specialized agents handle moderation, generation, and search, communicating through events and queues.

The agent layer uses Ollama or the AI SDK with structured output. Each agent has a specific role, prompt, and output schema.

#### 7.5.1 AI Agent Service (Orchestrator)

```php
// App\Services\AiAgentService.php
<?php

namespace App\Services;

use App\Models\AgentLog;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AiAgentService
{
    private array $agents = [
        'writer'     => WriterAgent::class,
        'editor'     => EditorAgent::class,
        'researcher' => ResearcherAgent::class,
    ];

    public function execute(string $agentType, array $params): mixed
    {
        $agentClass = $this->agents[$agentType] ?? throw new \InvalidArgumentException("Unknown agent: {$agentType}");

        $agent = app($agentClass);

        return $agent->handle($params);
    }

    public function chain(array $pipeline, array $initialInput): array
    {
        $output = $initialInput;

        foreach ($pipeline as $step) {
            $agentType = $step['agent'];
            $inputMap  = $step['input_map'] ?? fn ($ctx) => $ctx;

            $output = $this->execute($agentType, $inputMap($output));
        }

        return $output;
    }
}
```

#### 7.5.2 Writer Agent

```php
// App\Services\Agents\WriterAgent.php
<?php

namespace App\Services\Agents;

use App\Models\AgentLog;
use App\Models\Document;
use Illuminate\Support\Str;
use OpenAI\Laravel\Facades\OpenAI;

class WriterAgent
{
    public function handle(array $params): array
    {
        $brief   = $params['brief'];
        $tone    = $params['tone'] ?? 'professional';
        $language = $params['language'] ?? 'en';
        $wordCount = $params['word_count'] ?? 800;
        $workspaceId = $params['workspace_id'];

        $startTime = microtime(true);

        // Build the prompt with structured output requirements
        $prompt = <<<PROMPT
You are a professional content writer. Write an article based on the following brief.

BRIEF: {$brief}
TONE: {$tone}
LANGUAGE: {$language}
TARGET WORD COUNT: {$wordCount}

You MUST return your response as valid JSON with exactly these fields:
- title (string): An SEO-optimized title
- body (string): The full article body in markdown
- summary (string): A 2-3 sentence summary
- seo_title (string): An SEO title under 60 characters
- seo_description (string): A meta description under 160 characters
- seo_keywords (array of strings): 5-10 SEO keywords
- reading_time_minutes (integer): Estimated reading time
PROMPT;

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' => 'You are a professional content writer. Return ONLY valid JSON.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
            'temperature' => 0.7,
            'max_tokens'  => 4096,
        ]);

        $duration = (int) ((microtime(true) - $startTime) * 1000);

        $content = json_decode($response->choices[0]->message->content, true);

        // Log the agent execution
        AgentLog::create([
            'agent_type'    => 'writer',
            'session_id'    => (string) Str::uuid(),
            'user_id'       => $params['user_id'] ?? null,
            'action'        => 'generate',
            'input_tokens'  => $response->usage->promptTokens,
            'output_tokens' => $response->usage->completionTokens,
            'model'         => 'gpt-4o',
            'duration_ms'   => $duration,
            'status'        => 'completed',
            'metadata'      => [
                'brief' => $brief,
                'tone'  => $tone,
                'word_count_target' => $wordCount,
                'actual_word_count' => str_word_count($content['body'] ?? ''),
            ],
        ]);

        return $content;
    }
}
```

#### 7.5.3 Editor Agent

```php
// App\Services\Agents\EditorAgent.php
<?php

namespace App\Services\Agents;

use App\Models\AgentLog;
use Illuminate\Support\Str;
use OpenAI\Laravel\Facades\OpenAI;

class EditorAgent
{
    public function handle(array $params): array
    {
        $document = $params['document'];

        $startTime = microtime(true);

        $prompt = <<<PROMPT
Review the following article for quality, grammar, style, and factual consistency.

TITLE: {$document['title']}
BODY:
{$document['body']}

Return your review as JSON with these fields:
- overall_score (integer 1-10)
- grammar_issues (array of { "text": string, "issue": string, "suggestion": string })
- style_issues (array of { "text": string, "issue": string, "suggestion": string })
- factual_issues (array of { "text": string, "issue": string, "suggestion": string })
- strengths (array of strings)
- recommended_changes (array of strings)
- summary (string)
PROMPT;

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' => 'You are an expert editor. Return ONLY valid JSON.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
            'temperature' => 0.3,
        ]);

        $duration = (int) ((microtime(true) - $startTime) * 1000);

        $review = json_decode($response->choices[0]->message->content, true);

        AgentLog::create([
            'agent_type'    => 'editor',
            'session_id'    => (string) Str::uuid(),
            'user_id'       => $params['user_id'] ?? null,
            'document_id'   => $params['document_id'] ?? null,
            'action'        => 'review',
            'input_tokens'  => $response->usage->promptTokens,
            'output_tokens' => $response->usage->completionTokens,
            'model'         => 'gpt-4o',
            'duration_ms'   => $duration,
            'status'        => 'completed',
            'metadata'      => [
                'overall_score' => $review['overall_score'] ?? null,
                'issue_counts'  => [
                    'grammar' => count($review['grammar_issues'] ?? []),
                    'style'   => count($review['style_issues'] ?? []),
                    'factual' => count($review['factual_issues'] ?? []),
                ],
            ],
        ]);

        return $review;
    }
}
```

#### 7.5.4 Researcher Agent (with web search)

```php
// App\Services\Agents\ResearcherAgent.php
<?php

namespace App\Services\Agents;

use App\Models\AgentLog;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use OpenAI\Laravel\Facades\OpenAI;

class ResearcherAgent
{
    public function handle(array $params): array
    {
        $topic = $params['topic'];
        $existingContent = $params['existing_content'] ?? null;

        $startTime = microtime(true);

        // 1. Search the web for relevant information
        $searchResults = $this->searchWeb($topic);

        // 2. Synthesize findings using LLM
        $searchContext = collect($searchResults)
            ->map(fn ($r) => "- {$r['title']}: {$r['snippet']} (source: {$r['url']})")
            ->implode("\n");

        $prompt = <<<PROMPT
You are a research assistant. Based on the following web search results, provide researched facts,
citations, and additional context for the topic.

TOPIC: {$topic}

SEARCH RESULTS:
{$searchContext}

EXISTING CONTENT:
{$existingContent}

Return your research as JSON with these fields:
- key_facts (array of { "fact": string, "source_url": string, "confidence": "high"|"medium"|"low" })
- suggested_citations (array of { "text": string, "source": string, "url": string })
- corrections (array of { "original": string, "correction": string, "reasoning": string })
- additional_context (string)
- gaps (array of strings)
PROMPT;

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' => 'You are a thorough researcher. Return ONLY valid JSON. Cite real sources.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
            'temperature' => 0.3,
        ]);

        $duration = (int) ((microtime(true) - $startTime) * 1000);

        $research = json_decode($response->choices[0]->message->content, true);

        AgentLog::create([
            'agent_type'    => 'researcher',
            'session_id'    => (string) Str::uuid(),
            'user_id'       => $params['user_id'] ?? null,
            'document_id'   => $params['document_id'] ?? null,
            'action'        => 'research',
            'input_tokens'  => $response->usage->promptTokens,
            'output_tokens' => $response->usage->completionTokens,
            'model'         => 'gpt-4o',
            'duration_ms'   => $duration,
            'status'        => 'completed',
            'metadata'      => [
                'topic' => $topic,
                'source_count' => count($searchResults),
                'fact_count'   => count($research['key_facts'] ?? []),
            ],
        ]);

        return $research;
    }

    private function searchWeb(string $query): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.perplexity.api_key'),
        ])->post('https://api.perplexity.ai/chat/completions', [
            'model' => 'sonar-pro',
            'messages' => [
                ['role' => 'system', 'content' => 'Search the web and return results in JSON format with title, url, snippet fields.'],
                ['role' => 'user', 'content' => "Search for: {$query}"],
            ],
        ]);

        $results = $response->json();

        // Parse and return structured search results
        return $results['citations'] ?? [];
    }
}
```

#### 7.5.5 Agent Chaining Workflow

The full content generation pipeline chains the Researcher Ã¢â€ â€™ Writer Ã¢â€ â€™ Editor in sequence.

```php
// App\Services\ContentGenerationService.php
<?php

namespace App\Services;

use App\Models\Document;
use App\Events\AgentProgressUpdated;

class ContentGenerationService
{
    public function __construct(
        private AiAgentService $agentService,
    ) {}

    public function generateFromBrief(array $brief): Document
    {
        $user = auth()->user();
        $workspaceId = $brief['workspace_id'];

        // Step 1: Research
        broadcast(new AgentProgressUpdated('research', 'started', $workspaceId));

        $research = $this->agentService->execute('researcher', [
            'topic'           => $brief['topic'],
            'user_id'         => $user->id,
        ]);

        broadcast(new AgentProgressUpdated('research', 'completed', $workspaceId, [
            'fact_count' => count($research['key_facts'] ?? []),
        ]));

        // Step 2: Write
        broadcast(new AgentProgressUpdated('writing', 'started', $workspaceId));

        $article = $this->agentService->execute('writer', [
            'brief'        => $brief['topic'] . "\n\nResearch context:\n" . json_encode($research['key_facts'] ?? []),
            'tone'         => $brief['tone'] ?? 'professional',
            'language'     => $brief['language'] ?? 'en',
            'word_count'   => $brief['word_count'] ?? 800,
            'workspace_id' => $workspaceId,
            'user_id'      => $user->id,
        ]);

        broadcast(new AgentProgressUpdated('writing', 'completed', $workspaceId, [
            'title' => $article['title'],
        ]));

        // Step 3: Create document
        $document = Document::create([
            'workspace_id'   => $workspaceId,
            'author_id'      => $user->id,
            'title'          => $article['title'],
            'slug'           => Str::slug($article['title']),
            'body'           => $article['body'],
            'summary'        => $article['summary'],
            'language'       => $brief['language'] ?? 'en',
            'status'         => 'draft',
            'seo_title'      => $article['seo_title'] ?? $article['title'],
            'seo_description'=> $article['seo_description'] ?? $article['summary'],
            'seo_keywords'   => $article['seo_keywords'] ?? [],
        ]);

        // Step 4: Edit
        broadcast(new AgentProgressUpdated('editing', 'started', $workspaceId));

        $review = $this->agentService->execute('editor', [
            'document'    => $article,
            'document_id' => $document->id,
            'user_id'     => $user->id,
        ]);

        broadcast(new AgentProgressUpdated('editing', 'completed', $workspaceId, [
            'overall_score' => $review['overall_score'],
        ]));

        // Step 5: Queue embedding generation
        \App\Jobs\ProcessDocumentEmbeddings::dispatch($document);

        return $document;
    }
}
```

### 7.6 Vector Store Strategy


> **One-Sentence Takeaway:** PostgreSQL pgvector stores embeddings alongside relational data, avoiding a separate vector database.

The system uses multiple vector collections (separated by `content_type`) with hybrid search.

**Collection Strategy**

| Content Type | Purpose | Index Priority | Re-index Frequency |
|---|---|---|---|
| `article` | Main document body chunks | Primary | On document update |
| `comment` | User comments and discussions | Secondary | On comment create |
| `metadata` | Titles, summaries, SEO fields | Tertiary | On document update |

**Re-indexing Command**

```php
// App\Console\Commands\ReindexEmbeddings.php
<?php

namespace App\Console\Commands;

use App\Models\Document;
use App\Jobs\ProcessDocumentEmbeddings;
use Illuminate\Console\Command;

class ReindexEmbeddings extends Command
{
    protected $signature = 'embeddings:reindex
                           {--chunk=100 : Number of documents per chunk}
                           {--force : Re-index all documents, not just updated}';

    protected $description = 'Re-generate embeddings for stale or all documents';

    public function handle(): int
    {
        $query = Document::query();

        if (!$this->option('force')) {
            $query->where(function ($q) {
                $q->whereNull('last_embedded_at')
                  ->orWhereColumn('updated_at', '>', 'last_embedded_at');
            });
        }

        $count = $query->count();

        $this->info("Found {$count} documents to re-index.");

        $bar = $this->output->createProgressBar($count);

        $query->chunkById($this->option('chunk'), function ($documents) use ($bar) {
            foreach ($documents as $document) {
                ProcessDocumentEmbeddings::dispatch($document);
                $bar->advance();
            }
        });

        $bar->finish();

        $this->newLine();
        $this->info('Embedding jobs dispatched.');

        return Command::SUCCESS;
    }
}
```


> **Warning:** Embedding generation is expensive. Cache embeddings and generate them asynchronously via queue jobs.


> **Warning:** Embedding generation is expensive. Cache embeddings and generate them asynchronously via queue jobs.

### 7.7 MCP Tool Exposure


> **One-Sentence Takeaway:** Expose content search and generation as MCP tools for external AI agents to discover and use.

The platform exposes its AI capabilities through MCP (Model Context Protocol) servers. This allows external AI clientsÃ¢â‚¬â€like Claude Desktop, Cursor, or custom agentsÃ¢â‚¬â€to search the knowledge base, generate content, and analyze sentiment directly.

```php
// App/Mcp/Servers/ContentMcpServer.php
<?php

namespace App\Mcp\Servers;

use App\Services\RagService;
use App\Services\AiAgentService;
use App\Services\SentimentAnalysisService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContentMcpServer
{
    public function __construct(
        private RagService $ragService,
        private AiAgentService $agentService,
        private SentimentAnalysisService $sentimentService,
    ) {}

    /**
     * MCP Tool: search_documents
     *
     * Search the knowledge base using semantic + hybrid search.
     */
    public function searchDocuments(Request $request): JsonResponse
    {
        $request->validate([
            'query'        => 'required|string|max:500',
            'workspace_id' => 'required|integer',
            'limit'        => 'integer|min:1|max:50',
            'mode'         => 'in:semantic,hybrid,fulltext',
        ]);

        $mode = $request->input('mode', 'hybrid');

        $results = match ($mode) {
            'semantic' => $this->ragService->vectorSearchService->search(
                $request->input('query'),
                ['workspace_id' => $request->input('workspace_id'), 'limit' => $request->input('limit', 10)]
            ),
            'hybrid' => $this->ragService->vectorSearchService->hybridSearch(
                $request->input('query'),
                ['workspace_id' => $request->input('workspace_id'), 'limit' => $request->input('limit', 10)]
            ),
            'fulltext' => $this->fullTextSearch(
                $request->input('query'),
                $request->input('workspace_id'),
                $request->input('limit', 10)
            ),
        };

        return response()->json([
            'jsonrpc' => '2.0',
            'result'  => [
                'success'  => true,
                'results'  => $results,
                'total'    => count($results),
                'mode'     => $mode,
            ],
            'id' => $request->input('id'),
        ]);
    }

    /**
     * MCP Tool: generate_content
     *
     * Generate an article from a brief using the Writer agent.
     */
    public function generateContent(Request $request): JsonResponse
    {
        $request->validate([
            'brief'        => 'required|string|max:2000',
            'tone'         => 'string|in:professional,casual,academic,marketing',
            'language'     => 'string|size:2',
            'word_count'   => 'integer|min:100|max:5000',
            'workspace_id' => 'required|integer',
        ]);

        $result = $this->agentService->execute('writer', [
            'brief'        => $request->input('brief'),
            'tone'         => $request->input('tone', 'professional'),
            'language'     => $request->input('language', 'en'),
            'word_count'   => $request->input('word_count', 800),
            'workspace_id' => $request->input('workspace_id'),
        ]);

        return response()->json([
            'jsonrpc' => '2.0',
            'result'  => array_merge(['success' => true], $result),
            'id'      => $request->input('id'),
        ]);
    }

    /**
     * MCP Tool: analyze_sentiment
     *
     * Analyze sentiment of a text passage.
     */
    public function analyzeSentiment(Request $request): JsonResponse
    {
        $request->validate([
            'text' => 'required|string|max:10000',
        ]);

        $result = $this->sentimentService->analyze($request->input('text'));

        return response()->json([
            'jsonrpc' => '2.0',
            'result'  => array_merge(['success' => true], $result),
            'id'      => $request->input('id'),
        ]);
    }

    private function fullTextSearch(string $query, int $workspaceId, int $limit): array
    {
        return \App\Models\Document::where('workspace_id', $workspaceId)
            ->where('status', 'published')
            ->where(function ($q) use ($query) {
                $q->whereFullText(['title', 'body'], $query)
                  ->orWhere('title', 'like', "%{$query}%")
                  ->orWhere('body', 'like', "%{$query}%");
            })
            ->limit($limit)
            ->get(['id', 'title', 'summary', 'slug', 'published_at'])
            ->toArray();
    }
}
```

**MCP Server Registration**

```php
// routes/mcp.php
<?php

use App\Mcp\Servers\ContentMcpServer;

Route::post('mcp/content', [ContentMcpServer::class, '__invoke']);

// Or with explicit routing:
Route::match(['POST'], 'mcp/content/search', [ContentMcpServer::class, 'searchDocuments']);
Route::match(['POST'], 'mcp/content/generate', [ContentMcpServer::class, 'generateContent']);
Route::match(['POST'], 'mcp/content/sentiment', [ContentMcpServer::class, 'analyzeSentiment']);
```

### 7.8 Content Moderation


> **One-Sentence Takeaway:** Moderation agents scan content for policy violations using AI classification before publication.

Moderation is a two-stage pipeline: text analysis for toxicity and hate speech, image analysis for NSFW content. Both run asynchronously via Horizon queues.

```php
// App\Jobs\ModerateDocumentJob.php
<?php

namespace App\Jobs;

use App\Models\Document;
use App\Models\ModerationResult;
use App\Services\ModerationService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ModerateDocumentJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Document $document
    ) {}

    public function handle(ModerationService $moderator): void
    {
        // Combine title and body for analysis
        $text = "{$this->document->title}\n\n{$this->document->body}";

        $result = $moderator->analyzeText($text);

        ModerationResult::updateOrCreate(
            [
                'moderatable_type' => Document::class,
                'moderatable_id'   => $this->document->id,
            ],
            [
                'status'     => $this->determineStatus($result),
                'categories' => $result['categories'],
                'scores'     => $result['scores'],
                'reviewed_by' => 'ai',
            ]
        );

        // Auto-reject if scores exceed thresholds
        if ($result['scores']['toxicity'] > 0.9 || $result['scores']['nsfw'] > 0.8) {
            $this->document->update(['status' => 'archived']);
        }
    }

    private function determineStatus(array $result): string
    {
        $maxScore = max($result['scores']);

        return match (true) {
            $maxScore > 0.9 => 'rejected',
            $maxScore > 0.6 => 'flagged',
            default         => 'approved',
        };
    }
}

// App\Services\ModerationService.php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ModerationService
{
    public function analyzeText(string $text): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        ])->post('https://api.openai.com/v1/moderations', [
            'input' => $text,
        ]);

        $result = $response->json();

        $categories = [];
        $scores = [];

        foreach (($result['results'][0]['categories'] ?? []) as $category => $flagged) {
            if ($flagged) {
                $categories[] = $category;
            }
        }

        foreach (($result['results'][0]['category_scores'] ?? []) as $category => $score) {
            $scores[$category] = round($score, 4);
        }

        return [
            'categories' => $categories,
            'scores'     => $scores,
            'flagged'    => $result['results'][0]['flagged'] ?? false,
        ];
    }

    public function analyzeImage(string $imageUrl): array
    {
        // Use AI SDK or cloud vision API for NSFW detection
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-4o',
            'messages' => [
                [
                    'role' => 'user',
                    'content' => [
                        ['type' => 'text', 'text' => 'Analyze this image for NSFW content, violence, or hate symbols. Return JSON with categories and confidence scores.'],
                        ['type' => 'image_url', 'image_url' => ['url' => $imageUrl]],
                    ],
                ],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return $response->json('choices.0.message.content');
    }
}
```

### 7.9 Caching Strategy


> **One-Sentence Takeaway:** Cache generated content and search results with Redis, invalidating on content updates.

Caching in an AI-powered platform must balance cost (LLM API calls are expensive) with freshness (embeddings and search results become stale).

| Cache Layer | Key Pattern | TTL | Storage | Invalidation Trigger |
|---|---|---|---|---|
| Embeddings | `embedding:{model}:{md5(text)}` | 24h | Redis | None (content-addressed, immutable) |
| Search results | `rag:{md5(query + options)}` | 5-60 min | Redis | Query-dependent TTL |
| AI responses | `ai:{md5(prompt + model)}` | 1h | Redis | Model version change or explicit flush |
| Document fragments | `doc:{id}:fragment:{hash}` | 1h | Redis | Document update |
| Similar queries | `similar:{md5(query)}` | 30 min | Redis | Periodic refresh |

```php
// App\Services\AiCacheService.php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class AiCacheService
{
    const CACHE_PREFIX = 'ai_cache';

    const TTL = [
        'embedding'     => 86400,
        'search'        => 3600,
        'generation'    => 3600,
        'sentiment'     => 86400,
        'moderation'    => 86400,
    ];

    public function remember(string $type, string $key, callable $callback): mixed
    {
        $cacheKey = $this->key($type, $key);

        return Cache::remember($cacheKey, self::TTL[$type] ?? 3600, $callback);
    }

    public function get(string $type, string $key): mixed
    {
        return Cache::get($this->key($type, $key));
    }

    public function put(string $type, string $key, mixed $value, ?int $ttl = null): void
    {
        Cache::put(
            $this->key($type, $key),
            $value,
            $ttl ?? self::TTL[$type] ?? 3600
        );
    }

    public function forget(string $type, string $key): void
    {
        Cache::forget($this->key($type, $key));
    }

    public function flushType(string $type): void
    {
        // Redis: scan and delete by pattern
        $prefix = config('cache.prefix');
        $pattern = "{$prefix}:{$this->key($type, '*')}";

        $redis = \Illuminate\Support\Facades\Redis::connection();
        $cursor = null;

        do {
            [$cursor, $keys] = $redis->scan($cursor, ['match' => $pattern, 'count' => 100]);

            if (!empty($keys)) {
                $redis->del($keys);
            }
        } while ($cursor !== 0);
    }

    private function key(string $type, string $key): string
    {
        return self::CACHE_PREFIX . ":{$type}:{$key}";
    }
}
```

### 7.10 Real-Time Collaboration


> **One-Sentence Takeaway:** Laravel Reverb provides WebSocket-based real-time updates for collaborative content editing.

Reverb broadcasts collaboration events and agent progress updates to connected clients.

```php
// App\Events\DocumentUpdated.php
<?php

namespace App\Events;

use App\Models\Document;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DocumentUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public Document $document,
        public array $changes,
    ) {}

    public function broadcastOn(): array
    {
        return [
            new Channel("workspace.{$this->document->workspace_id}.document.{$this->document->id}"),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            'document_id' => $this->document->id,
            'changes'     => $this->changes,
            'user'        => [
                'id'   => auth()->id(),
                'name' => auth()->user()?->name,
            ],
            'timestamp'   => now()->toIso8601String(),
        ];
    }
}

// App\Events\AgentProgressUpdated.php
<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AgentProgressUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public string $agentType,
        public string $status,
        public int $workspaceId,
        public array $metadata = [],
    ) {}

    public function broadcastOn(): array
    {
        return [
            new Channel("workspace.{$this->workspaceId}.agents"),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            'agent_type' => $this->agentType,
            'status'     => $this->status,
            'metadata'   => $this->metadata,
            'timestamp'  => now()->toIso8601String(),
        ];
    }
}
```

---

## Concept Comparison Table

| Concept | Purpose | Key Benefit | Limitation |
|---------|---------|-------------|------------|
| RAG | Retrieve + augment + generate | Context-aware AI output | Embedding cost and latency |
| Vector Store | pgvector or dedicated DB | Semantic search | Index maintenance |
| MCP | Tool exposure for AI agents | Interoperability | Security considerations |
| Real-Time | Reverb WebSockets | Live collaboration | Connection state management |

## Quick Reference

| Item | Description |
|------|-------------|
| AI::embed()|Generate text embeddings | AI::chat()|Generate AI response |
| Reverb channel|Real-time WebSocket channel | pgvector index|Efficient vector similarity search |

## Cross-Application Matrix

| Scenario | Approach | Benefit | Challenge |
|----------|----------|---------|-----------|
| Content Generation | RAG pipeline | Contextual, relevant output | Latency from LLM calls |
| Content Moderation | AI classification agent | Scalable moderation | False positive tuning |
| Real-Time Editing | Reverb WebSockets | Live collaboration | Connection overhead |
| Search | Vector similarity | Semantic understanding | Index maintenance cost |

## Chapter Quiz

1. What vector search strategy does this case study use?
   - A) Pinecone
   - B) Weaviate
   - C) PostgreSQL pgvector
   - D) Milvus
   <details><summary>Answer</summary>**C)** pgvector stores embeddings alongside relational data in PostgreSQL.</details>

2. What is the purpose of the RAG pipeline?
   - A) Generate images
   - B) Retrieve relevant context and augment LLM prompts
   - C) Cache API responses
   - D) Route user requests
   <details><summary>Answer</summary>**B)** RAG retrieves relevant content from a vector store and augments the prompt before LLM generation.</details>

3. Which Laravel package provides real-time WebSocket capabilities?
   - A) Horizon
   - B) Reverberate
   - C) Reverb
   - D) Echo
   <details><summary>Answer</summary>**C)** Laravel Reverb provides WebSocket-based real-time updates.</details>

4. How are AI agents designed in this architecture?
   - A) Monolithic single agent
   - B) Specialized agents communicating through events and queues
   - C) External API calls only
   - D) Serverless functions
   <details><summary>Answer</summary>**B)** Specialized agents for moderation, generation, and search communicate through events and queues.</details>

## Concept Comparison Table

| Concept | Purpose | Key Benefit | Limitation |
|---------|---------|-------------|------------|
| RAG | Retrieve + augment + generate | Context-aware AI output | Embedding cost and latency |
| Vector Store | pgvector or dedicated DB | Semantic search | Index maintenance |
| MCP | Tool exposure for AI agents | Interoperability | Security considerations |
| Real-Time | Reverb WebSockets | Live collaboration | Connection state management |

## Quick Reference

| Item | Description |
|------|-------------|
| AI::embed()|Generate text embeddings | AI::chat()|Generate AI response |
| Reverb channel|Real-time WebSocket channel | pgvector index|Efficient vector similarity search |

## Cross-Application Matrix

| Scenario | Approach | Benefit | Challenge |
|----------|----------|---------|-----------|
| Content Generation | RAG pipeline | Contextual, relevant output | Latency from LLM calls |
| Content Moderation | AI classification agent | Scalable moderation | False positive tuning |
| Real-Time Editing | Reverb WebSockets | Live collaboration | Connection overhead |
| Search | Vector similarity | Semantic understanding | Index maintenance cost |

## Chapter Quiz

1. What vector search strategy does this case study use?
   - A) Pinecone
   - B) Weaviate
   - C) PostgreSQL pgvector
   - D) Milvus
   <details><summary>Answer</summary>**C)** pgvector stores embeddings alongside relational data in PostgreSQL.</details>

2. What is the purpose of the RAG pipeline?
   - A) Generate images
   - B) Retrieve relevant context and augment LLM prompts
   - C) Cache API responses
   - D) Route user requests
   <details><summary>Answer</summary>**B)** RAG retrieves relevant content from a vector store and augments the prompt before LLM generation.</details>

3. Which Laravel package provides real-time WebSocket capabilities?
   - A) Horizon
   - B) Reverberate
   - C) Reverb
   - D) Echo
   <details><summary>Answer</summary>**C)** Laravel Reverb provides WebSocket-based real-time updates.</details>

4. How are AI agents designed in this architecture?
   - A) Monolithic single agent
   - B) Specialized agents communicating through events and queues
   - C) External API calls only
   - D) Serverless functions
   <details><summary>Answer</summary>**B)** Specialized agents for moderation, generation, and search communicate through events and queues.</details>

## Summary

- The RAG pipeline follows a five-step sequence: text ingestion Ã¢â€ â€™ chunking Ã¢â€ â€™ embedding generation (OpenAI text-embedding-3-small, 1536 dimensions) Ã¢â€ â€™ pgvector storage with HNSW index Ã¢â€ â€™ similarity search + LLM augmentation.
- Three specialized AI agents handle content production: Writer (generates articles from briefs with structured JSON output), Editor (reviews for grammar, style, and factual consistency), and Researcher (performs web search and returns fact-checked citations).
- Agent chaining creates a production pipeline: Researcher Ã¢â€ â€™ Writer Ã¢â€ â€™ Editor. Each step broadcasts progress via Reverb so the UI provides real-time feedback.
- The vector store is partitioned by `content_type` (article, comment, metadata) with separate HNSW indexes. A periodic `embeddings:reindex` artisan command handles stale embeddings.
- Hybrid search combines pgvector cosine similarity (vector_score) with PostgreSQL full-text search (fts_score) using a weighted formula: `hybrid_score = vector_score Ãƒâ€” 0.7 + fts_score Ãƒâ€” 0.3`.
- MCP tools (search_documents, generate_content, analyze_sentiment) expose platform capabilities to external AI clients through a JSON-RPC interface.
- Content moderation runs asynchronously: submitted documents and images pass through AI analysis queues. Text is scored for toxicity and NSFW content; images are analyzed via vision model.
- A multi-layer caching strategy reduces API costs: embedding cache (24h, content-addressed), search result cache (5-60 min), AI response cache (1h), and moderation cache (24h).

---

## Exercises


> **Remember:** Use presence channels in Reverb to show which users are actively editing content.


> **Remember:** Use presence channels in Reverb to show which users are actively editing content.

### Review Questions

1. Explain the RAG pipeline step by step. Why is chunking with overlap important? What happens to search quality if the chunk size is too large or too small?
2. Compare the three search modes (semantic, full-text, hybrid). Under what conditions would hybrid search produce worse results than pure vector search?
3. How does the agent chaining pipeline handle failure? If the Writer agent fails after the Researcher has completed, what happens to the research results and API tokens already spent?
4. Why do we cache embeddings by content hash rather than by document ID? What are the implications if two documents contain identical text?
5. The MCP server exposes `search_documents`, `generate_content`, and `analyze_sentiment`. Design a fourth tool called `summarize_document` that accepts a document ID and returns a multi-language summary. What additional infrastructure would you need?

### Application Problems

1. **Implement a document diff agent**: Create a `DiffAgent` that compares two versions of a document and returns a structured diff with added, removed, and modified sections. The agent should also provide a natural language summary of what changed. Wire it into the agent chaining pipeline so that when an Editor makes changes, the system automatically generates a change summary for the document's version history.

2. **Add MCP tool: `suggest_related_content`**: Implement a new MCP tool that, given a document ID, finds the top 5 related documents using vector similarity on the metadata embeddings. The tool should exclude the source document and filter by workspace ID. Return document title, similarity score, and a one-sentence explanation of why they are related.

3. **Build a multi-language search index**: Extend the `document_embeddings` table to support language-specific embedding columns or a language-partitioned search strategy. When a user searches in Spanish, only Spanish embeddings should be queried unless the `auto_translate` flag is set. Implement the `MultiLanguageSearchService` with language detection, routing, and optional machine translation.

### Challenge Problem

**Design and implement an AI-powered content recommendation engine**

Build a `RecommendationEngine` that generates personalized content recommendations for platform users using a hybrid approach:

- **Collaborative filtering signal**: Track user-document interactions (views, likes, saves, time-spent). Store in a `user_document_interactions` table with weighted score per action type.
- **Content-based signal**: Use document embeddings to find documents similar to ones the user has engaged with.
- **LLM-reranking**: Retrieve the top 50 candidates via hybrid collaborative + content-based scoring, then use the Editor agent to re-rank them based on the user's stated preferences (stored in `user_preferences` JSON column with topics, authors, reading level).
- **Caching**: Cache recommendations per user with a 30-minute TTL. Invalidate when the user interacts with a new document.
- **Personalization broadcast**: When a user has new recommendations available, broadcast a `RecommendationsUpdated` event via Reverb so the UI can update the "Recommended for You" section in real time.

Write the migration for `user_document_interactions` and `user_preferences` (add column to users table), the `RecommendationEngine` service with all three signals, the jobs to asynchronously compute recommendations after user interaction, the API endpoint `GET /api/recommendations`, and the Reverb event class. Provide explanations for how you handle the cold-start problem for new users with no interaction history.