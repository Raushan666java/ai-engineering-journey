# Week 4: Project 1 — Document AI Assistant

**Duration:** July 27 - August 2, 2026 | **Hours:** 35

---

## Project: Business Document AI

A complete AI assistant that answers questions from your business documents.

### Features

- Upload PDF/DOCX documents
- Automatic chunking and vector storage
- Multi-turn conversation with memory
- Source citations in answers
- FastAPI backend
- Docker deployment

### Architecture

```text
User → FastAPI → LangChain RAG → ChromaDB
                  ↓
              GPT-4o-mini
                  ↓
           Answer + Sources
```

### Tech Stack

- **Backend:** FastAPI + LangChain
- **Vector DB:** ChromaDB
- **LLM:** GPT-4o-mini (OpenRouter)
- **Deployment:** Docker + Hetzner VPS

### Deliverables

- [x] Complete RAG pipeline
- [x] Multi-turn conversation
- [x] Source citations
- [x] FastAPI endpoints
- [x] Dockerfile + compose
- [x] GitHub README
- [x] Deployed live

## Week Schedule

| Day | Task |
|-----|------|
| Mon-Tue | Build core RAG pipeline |
| Wed | Add conversation memory |
| Thu | FastAPI integration |
| Fri | Docker + deploy |
| Sat | README + GitHub push |
| Sun | REST |

### Deployment

```bash
docker build -t doc-ai .
docker run -p 8000:8000 doc-ai
```

**Milestone:** First AI project live on your server! 🎉
