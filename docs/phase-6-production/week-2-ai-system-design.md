# Week 2: AI System Design

**Duration:** November 3-9, 2026 | **Hours:** 35

---

## AI Design Problems

### 1. RAG at Scale

Design a RAG system for 1M documents:

```text
Questions/second: 1000
Documents: 1,000,000
Latency target: <2s

Components:
- Document processing pipeline
- Vector DB cluster (Qdrant sharded)
- Embedding cache (Redis)
- Load balancer for API
- Result re-ranking layer
```

### 2. Multi-Agent Platform

Design a system where agents collaborate:

```text
- Agent orchestrator (LangGraph)
- Tool registry
- Memory service (PostgreSQL + pgvector)
- Queue for async tasks (RabbitMQ/Redis)
- Monitoring (traces, logs, metrics)
```

### 3. LLM Cost Optimization

```text
Strategy:
- Cache identical requests (Redis)
- Model routing (simple → cheap, complex → expensive)
- Batch processing where possible
- Token optimization (prompt compression)
- Fallback model when primary is down
```

## Practice

Design and explain:
1. RAG system for legal documents
2. WhatsApp AI bot for 1M users
3. Content automation pipeline
