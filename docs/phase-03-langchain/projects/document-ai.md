# Document AI — Complete Project

**Type:** Capstone Project — Phase 3
**Duration:** Week 4
**Difficulty:** Intermediate
**Stack:** FastAPI + LangChain + Chroma + LangGraph + OpenAI

---

## Problem Statement

Organizations ke paas hundreds of documents hote hain — PDFs, Word files, images, text files. Inme valuable information hoti hai, lekin:

- Search karna mushkil hai (Ctrl+F doesn't work on scanned docs)
- Relevant info dhundhne mein ghante lag jaate hain
- Multiple documents se answer synthesize karna impossible hai
- Subject matter experts ki knowledge silos mein phansi hoti hai

**Solution:** Ek AI-powered Document Q&A system jo:
- Har tarah ke documents ko process kare
- Unka index banaye
- Natural language questions ka answer de
- Sources bhi bataye ki kahan se answer mila

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTP
┌───────────────────────▼─────────────────────────────────────┐
│                    FastAPI App (main.py)                      │
│                                                              │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐  │
│  │ Upload   │   │ Q&A      │   │ Summary  │   │ Agent    │  │
│  │ Endpoint │   │ Endpoint │   │ Endpoint │   │ Endpoint │  │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘  │
│       │              │              │              │         │
│  ┌────▼──────────────▼──────────────▼──────────────▼─────┐   │
│  │                    Services Layer                       │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │   │
│  │  │Document  │ │Vector    │ │Embedding │ │OCR       │  │   │
│  │  │Service   │ │Store     │ │Service   │ │Service   │  │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │   │
│  └────────────────────────┬──────────────────────────────┘   │
└───────────────────────────┼──────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Chroma   │ │ OpenAI  │ │Tesseract │
        │ VectorDB │ │ LLM +   │ │ OCR      │
        │          │ │Embeddings│ │          │
        └──────────┘ └──────────┘ └──────────┘
```

---

## Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Backend Framework** | FastAPI | High-performance API |
| **LLM** | OpenAI GPT-4o-mini | Answer generation |
| **Orchestration** | LangChain + LangGraph | Chain building + agents |
| **Vector Store** | Chroma | Embedding storage + search |
| **Embeddings** | OpenAI text-embedding-3-small | Text → Vectors |
| **OCR** | Tesseract | Image text extraction |
| **Document Parsing** | PyPDF, Docx2txt, TextLoader | File → Text |
| **Frontend** | Vanilla HTML/JS | Minimal UI |
| **Container** | Docker | Deploy anywhere |

---

## Implementation Guide

### Step 1: Project Setup

```bash
mkdir document-ai && cd document-ai
python -m venv .venv
.venv\Scripts\activate     # Windows

# Install
pip install -r requirements.txt
```

### Step 2: Environment Configuration

```env title=".env"
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-4o-mini
CHROMA_PERSIST_DIR=./chroma_db
UPLOAD_DIR=./uploads
```

### Step 3: Document Processing Pipeline

Har uploaded file 3 stages se guzarti hai:

```
File Upload
    ↓
1. Document Loading
   - PDF → PyPDFLoader (page-wise text)
   - Word → Docx2txtLoader (paragraphs)
   - Image → Tesseract OCR (raw text)
   - TXT → TextLoader (as-is)
    ↓
2. Text Splitting
   - RecursiveCharacterTextSplitter
   - chunk_size=500, chunk_overlap=50
   - Paragraph → sentence → word priority
    ↓
3. Vector Storage
   - Each chunk → OpenAI Embedding (1536 dims)
   - Stored in Chroma with metadata
   - metadata: {source, page, document_id}
```

### Step 4: Q&A Pipeline

```
User Question: "Invoice ka NTA code kya hai?"
    ↓
1. Embed question → 1536-dim vector
    ↓
2. Chroma similarity search → Top 4 chunks
    ↓
3. Format chunks into context string
    ↓
4. Build prompt:
   """
   Context: [chunk 1]...[chunk 4]
   Question: Invoice ka NTA code kya hai?
   Answer (Hinglish):
   """
    ↓
5. LLM generates answer with source citations
    ↓
6. Return {answer, sources[{content, source}]}
```

### Step 5: Research Agent Pipeline

```
User: "Compare RAG vs Fine-tuning"
    ↓
1. Agent decides: "Mujhe web search karna hoga"
    ↓
2. web_search("RAG vs fine-tuning comparison")
    ↓
3. Search results → context
    ↓
4. Agent decides: "Abhi aur details chahiye"
    ↓
5. web_search("RAG advantages over fine-tuning 2026")
    ↓
6. Agent decides: "Enough information, ab answer banao"
    ↓
7. LLM generates comprehensive comparison
```

---

## Code Structure Explained

```
document-ai/
│
├── main.py              ← FastAPI app: routes, middleware, CORS
├── config.py            ← Settings: env vars, constants
├── requirements.txt     ← pip freeze output
├── Dockerfile           ← Container config
├── .env                 ← Secrets (gitignore)
│
├── chains/
│   │
│   ├── qa_chain.py      ← RAG Q&A: retriever + prompt + LLM
│   │                      Uses LCEL: retriever | format | prompt | model | parser
│   │
│   ├── summary_chain.py ← Document summarization
│   │                      Big context → concise bullet points
│   │
│   └── agent.py         ← LangGraph research agent
│                           StateGraph with search + analyze nodes
│
├── services/
│   │
│   ├── document.py      ← Document loading + splitting
│   │                      Chooses right loader based on extension
│   │
│   ├── vector_store.py  ← Chroma CRUD operations
│   │                      add_documents, get_retriever, delete
│   │
│   ├── embedding.py     ← Embeddings initialization
│   │                      OpenAI or Ollama based on config
│   │
│   └── ocr.py           ← Tesseract integration
│                           image_to_string with language support
│
├── models/
│   │
│   └── schemas.py       ← Pydantic request/response models
│                           Auto-validation, OpenAPI docs
│
├── static/
│   │
│   └── index.html       ← Frontend: 3 tabs, file upload, chat
│                           Vanilla JS, no framework needed
│
└── uploads/             ← Uploaded files (gitignore)
```

---

## Feature Deep Dives

### 1. Multi-format Document Support

```python
# How main.py routes file types:
if ext == ".pdf":
    loader = PyPDFLoader(file_path)
elif ext == ".docx":
    loader = Docx2txtLoader(file_path)
elif ext in (".txt", ".md"):
    loader = TextLoader(file_path)
elif ext in (".png", ".jpg", ".jpeg", ".webp"):
    # OCR path — different flow
    text = ocr_service.extract_text(file_path)
    docs = [Document(page_content=text, ...)]
```

### 2. Source Citation

```python
# How sources are returned:
sources = retriever.invoke(question)
source_info = [
    {
        "content": s.page_content[:200],
        "source": s.metadata.get("source", "unknown"),
        "page": s.metadata.get("page"),
    }
    for s in sources[:3]
]
```

### 3. Agent with Web Search

```python
# LangGraph agent flow:
# 1. User query → agent node
# 2. LLM decides: tool needed?
# 3. If yes → execute_tools node → back to agent
# 4. If no → END → return final answer
```

### 4. Persistent Storage

```python
# Chroma data persists on disk
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings,
)
# Restart ke baad bhi data safe!
```

---

## API Documentation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Frontend HTML |
| `/upload` | POST | Upload document |
| `/query` | POST | Ask question about doc |
| `/summarize` | POST | Summarize document |
| `/agent` | POST | Research agent query |
| `/documents` | GET | List processed docs |

### API Examples

```bash
# Upload
curl -X POST http://localhost:8000/upload \
  -F "file=@report.pdf"

# Response
{
  "filename": "report.pdf",
  "document_id": "abc-123",
  "chunks": 47,
  "message": "Document processed successfully!"
}

# Query
curl -X POST http://localhost:8000/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What is this about?", "document_id": "abc-123"}'

# Response
{
  "answer": "Yeh document AI ke baare mein hai...",
  "sources": [
    {"content": "AI technology is evolving...", "source": "report.pdf"}
  ]
}
```

---

## Deployment

### Railway

```yaml title="railway.json"
{
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  }
}
```

1. GitHub repo push karo
2. Railway mein New Project → Deploy from GitHub repo
3. Environment variables add karo:
   - `OPENAI_API_KEY`
4. Deploy! 2 minute mein live ho jayega

### Render

1. GitHub repo link karo
2. Runtime: Docker
3. Environment variables set karo
4. Deploy

### Manual Docker

```bash
# Production build
docker build -t document-ai .

# Run with volume mounts
docker run -d \
  --name document-ai \
  -p 8000:8000 \
  -e OPENAI_API_KEY=sk-... \
  -v $(pwd)/uploads:/app/uploads \
  -v $(pwd)/chroma_db:/app/chroma_db \
  document-ai
```

---

## Performance Optimizations

### 1. Caching

```python
from functools import lru_cache

@lru_cache(maxsize=100)
def get_embedding(text: str) -> list:
    return embeddings.embed_query(text)
```

### 2. Async Processing

```python
# Large files ko background mein process karo
from fastapi.concurrency import run_in_threadpool

@app.post("/upload")
async def upload(file: UploadFile):
    # ... save file ...
    
    # Background task
    background_tasks.add_task(
        process_document, file_path
    )
    
    return {"message": "Processing started"}
```

### 3. Batch Queries

```python
# Multiple questions ek saath
questions = ["Q1?", "Q2?", "Q3?"]
answers = chain.batch([{"question": q} for q in questions])
```

### 4. Connection Pooling

```python
# Chroma client re-use
vectorstore = Chroma(...)  # Singleton
```

---

## Testing Strategy

### Unit Tests

```python
def test_document_loading():
    with tempfile.NamedTemporaryFile(suffix=".txt") as f:
        f.write(b"Hello World")
        f.seek(0)
        docs = doc_service.load_document(f.name)
        assert len(docs) == 1
        assert "Hello" in docs[0].page_content


def test_qa_chain():
    chain = create_qa_chain(MockRetriever())
    result = chain.invoke("Test question")
    assert len(result) > 0
```

### Integration Tests

```python
def test_full_pipeline(client):
    # Upload
    res = client.post("/upload", files={"file": ("test.pdf", ...)})
    doc_id = res.json()["document_id"]

    # Query
    res = client.post("/query", json={
        "question": "What is this?",
        "document_id": doc_id,
    })
    assert res.status_code == 200
    assert len(res.json()["answer"]) > 0
```

### Run Tests

```bash
pytest tests/ -v --cov=.
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **OpenAI API key error** | `.env` file check karo, key valid hai? |
| **Chroma disk full** | `chroma_db/` folder delete karo, restart |
| **Tesseract not found** | `apt install tesseract-ocr` (Linux) ya Windows mein installer |
| **Large file timeout** | `nginx` proxy with increased timeout |
| **Memory error** | chunk_size reduce karo (e.g., 300) |
| **CORS error** | FastAPI `CORSMiddleware` add karo |
| **Slow queries** | `k` value reduce karo (3 instead of 4) |

---

## Learning Outcomes

### What You Built

- ✅ File upload system with multi-format support
- ✅ OCR pipeline for image documents
- ✅ RAG-based Q&A with source citations
- ✅ Document summarization
- ✅ LangGraph research agent with web search
- ✅ FastAPI REST API with Pydantic validation
- ✅ Docker containerization
- ✅ Frontend UI (minimal but functional)

### What You Learned

- **LangChain:** Chains, LCEL, prompt templates, output parsers
- **RAG:** Document loading, splitting, embeddings, retrieval
- **LangGraph:** StateGraph, nodes, edges, conditional routing
- **Agents:** ReAct pattern, tools, tool executor
- **FastAPI:** File uploads, async, background tasks
- **Production:** Docker, env vars, persistent storage, CORS

### In Your Portfolio

Yeh project dikhayega ki tum:

1. End-to-end AI application bana sakte ho
2. RAG architecture samajhte ho
3. LangChain/LangGraph production mein use kar sakte ho
4. Deployment ready code likh sakte ho

---

## Next Steps

Is project ko extend karne ke ideas:

- [ ] **Add authentication** — JWT-based user auth
- [ ] **Multi-user support** — Har user ka alag vector store
- [ ] **Better frontend** — React/Next.js dashboard
- [ ] **Analytics** — Query logging, usage stats
- [ ] **Batch upload** — Multiple files ek saath
- [ ] **Audio transcription** — Whisper integration
- [ ] **PDF export** — Summaries as PDF
- [ ] **Email integration** — Email bhejo, auto-summarize
- [ ] **Slack bot** — Slack se query karo

---

## References

- [LangChain Docs](https://python.langchain.com)
- [LangGraph Docs](https://langchain-ai.github.io/langgraph)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [Chroma Docs](https://docs.trychroma.com)
- [Docker for Beginners](https://docker-curriculum.com)

---

> **"Phase 3 done! RAG, agents, production deployment — sab seekh liya. Phase 4 mein advanced RAG techniques par focus karenge."** 🚀
