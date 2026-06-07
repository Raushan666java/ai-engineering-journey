# Projects

Three production AI projects built during this journey.

---

## Project 1: Document AI Assistant

**Status:** In Progress ⏳
**Timeline:** Week 7-8

A RAG-powered AI that answers questions from your business documents.

### Features
- PDF/DOCX upload and processing
- Vector search across documents
- Multi-turn conversation with memory
- Source citations for every answer
- FastAPI backend, Docker deployment

### Tech Stack
- **Backend:** FastAPI + LangChain
- **Vector DB:** ChromaDB (→ Qdrant in Phase 4)
- **LLM:** GPT-4o-mini (OpenRouter)
- **Deployment:** Docker → Hetzner VPS

[View Repo →](https://github.com/Raushan666java) *(coming soon)*

---

## Project 2: ApexERP AI Module

**Status:** Planned 📋
**Timeline:** Week 11-12

A WhatsApp AI agent for your ERP that handles orders, payments, and customer support.

### Features
- WhatsApp message processing via n8n
- Intent classification (order/payment/support)
- Inventory checking and order creation
- Payment verification and invoice generation
- Customer memory and personalization
- Human escalation for sensitive decisions

### Tech Stack
- **Backend:** Laravel + Python (LangGraph)
- **Orchestration:** n8n
- **Memory:** PostgreSQL + pgvector
- **LLM:** GPT-4o-mini

[View Repo →](https://github.com/Raushan666java) *(coming soon)*

---

## Project 3: Purvanchal Flow Studio

**Status:** Planned 📋
**Timeline:** Week 13

Fully automated Bhojpuri music content generation pipeline.

### Pipeline
```
Topic → Lyrics Agent → Review Agent → ACE-Step → FFmpeg → Thumbnail → Upload → Analytics
```

### Tech Stack
- **Orchestration:** n8n + CrewAI
- **Music Gen:** ACE-Step (self-hosted)
- **Audio:** FFmpeg
- **Thumbnails:** FLUX/SDXL
- **Publishing:** YouTube Data API

[View Repo →](https://github.com/Raushan666java) *(coming soon)*

---

## Project Checklist

- [ ] **Project 1:** Document AI Assistant — Deployed
- [ ] **Project 2:** ApexERP AI — WhatsApp bot live
- [ ] **Project 3:** Purvanchal Flow — Pipeline producing content
