# ApexERP RAG System

**Project Type:** Production RAG System
**Stack:** LangChain, FastAPI, Qdrant, PostgreSQL, Redis
**Duration:** 2 Weeks (after Phase 4)

---

## Problem

```
ApexERP users (Raushan ke clients):
• "Q4 sales kya the?" → report nikalni padti hai
• "Customer churn kyun badha?" → multiple dashboards check karne padte hain
• "Inventory forecast do" → manual calculation

Solution: Natural language query karo, AI jawab de
```

## Approach

```
User Query (Hindi/English mix)
        │
        ▼
  ┌─────────────────┐
  │ Query Router    │ ← LangChain
  │ 1. Data Q&A    │
  │ 2. Doc Q&A     │
  │ 3. Report Gen   │
  └────────┬────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
┌─────────┐ ┌──────────┐
│NL to SQL│ │Doc RAG   │
│→ Query  │ │→ ERP docs│
│  DB     │ │→ Manuals │
└────┬────┘ └────┬─────┘
     │           │
     ▼           ▼
┌─────────────────────┐
│ Response Generator  │
│ → Natural language  │
│ → With citations    │
│ → In Hindi/English  │
└─────────────────────┘
```

---

## Features

| Feature | Description |
|---------|-------------|
| NL to SQL | "Pichle mahine ka sales dikhao" → SQL query → Result |
| Doc Q&A | ERP documentation, user manuals ka jawab |
| Report Generation | "Q4 mein sabse zyada profit kahan hua?" → Report |
| Multi-language | Hindi, English, Hinglish support |
| Citations | Har answer ke saath source document link |
| Dashboard | Query history, usage stats, feedback |

---

## Tech Stack

```
Backend:
├── LangChain       → RAG pipeline, agents, chains
├── FastAPI         → REST API
├── Qdrant          → Vector database
├── PostgreSQL      → Metadata + logging
├── Redis           → Caching
└── OpenAI API      → LLM + embeddings

Frontend (optional):
├── React/Streamlit → Chat interface
└── Tailwind CSS    → Styling
```

---

## Implementation Steps

### Step 1: Project Structure

```
apexerp-rag/
├── api/
│   ├── __init__.py
│   ├── main.py              # FastAPI app
│   ├── models.py            # Pydantic models
│   └── routes.py            # API endpoints
├── core/
│   ├── __init__.py
│   ├── config.py            # Settings
│   └── database.py          # DB connections
├── rag/
│   ├── __init__.py
│   ├── pipeline.py          # Main RAG pipeline
│   ├── retriever.py         # Hybrid retriever
│   ├── generator.py         # LLM response gen
│   └── cache.py             # Caching layer
├── nltosql/
│   ├── __init__.py
│   ├── schema.py            # DB schema tools
│   ├── query_gen.py         # NL → SQL converter
│   └── query_exec.py        # Safe SQL execution
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
└── .env
```

### Step 2: Core RAG Pipeline

```python
# rag/pipeline.py
from typing import List, Dict, Optional
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Qdrant
from langchain.schema import Document
from sentence_transformers import CrossEncoder
import numpy as np

class ApexERPRAGPipeline:
    """
    ApexERP ka main RAG pipeline.
    All advanced techniques integrated.
    """
    def __init__(self, config: Dict):
        self.llm = ChatOpenAI(
            model=config.get("model", "gpt-4o"),
            temperature=0.1
        )
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = Qdrant(
            client=...,
            collection_name="apexerp_docs",
            embeddings=self.embeddings
        )
        self.reranker = CrossEncoder(
            "cross-encoder/ms-marco-MiniLM-L-6-v2"
        )

    def hybrid_search(
        self, query: str, k: int = 20, filters: Optional[Dict] = None
    ) -> List[Document]:
        return self.vectorstore.similarity_search(
            query, k=k, filter=filters
        )

    def rerank(
        self, query: str, docs: List[Document], top_k: int = 5
    ) -> List[Document]:
        pairs = [[query, d.page_content[:512]] for d in docs]
        scores = self.reranker.predict(pairs)
        ranked = sorted(zip(docs, scores), key=lambda x: x[1], reverse=True)
        return [d for d, _ in ranked[:top_k]]

    def query(self, question: str, filters: Optional[Dict] = None) -> Dict:
        # 1. Retrieve
        docs = self.hybrid_search(question, filters=filters)

        if not docs:
            return {"answer": "Koi relevant document nahi mila.", "sources": []}

        # 2. Rerank
        top_docs = self.rerank(question, docs)

        # 3. Generate
        context = "\n\n".join(d.page_content for d in top_docs)
        prompt = f"""
        You are ApexERP AI Assistant.
        Answer in Hinglish (Hindi + English mix).
        Always cite the source document name.

        Context:
        {context}

        Question: {question}
        """
        answer = self.llm.invoke(prompt)

        return {
            "answer": answer,
            "sources": [
                {
                    "title": d.metadata.get("title", ""),
                    "score": float(s) if i < len(top_docs) else 0.0
                }
                for i, (d, s) in enumerate(zip(top_docs, [1.0]*len(top_docs)))
            ]
        }
```

### Step 3: NL to SQL

```python
# nltosql/query_gen.py
import sqlalchemy
from typing import List, Dict

class NLToSQL:
    """
    Natural language → SQL query converter.
    """
    def __init__(self, llm, db_engine):
        self.llm = llm
        self.engine = db_engine
        self.schema_info = self._get_schema()

    def _get_schema(self) -> str:
        """Get database schema as string for LLM context."""
        inspector = sqlalchemy.inspect(self.engine)
        schema_parts = []
        for table_name in inspector.get_table_names():
            columns = inspector.get_columns(table_name)
            col_str = "\n  ".join(
                f"{c['name']} ({c['type']})"
                for c in columns
            )
            schema_parts.append(f"Table: {table_name}\n  {col_str}")
        return "\n\n".join(schema_parts)

    def generate_query(self, question: str) -> str:
        prompt = f"""
        Database schema:
        {self.schema_info}

        Convert this question to a SQL query:
        {question}

        Rules:
        - Use only SELECT statements
        - Use ONLY existing tables and columns
        - Add LIMIT 100
        - Return ONLY the SQL query, no explanation

        SQL:
        """
        sql = self.llm.invoke(prompt).strip()
        return sql

    def execute_safe(self, sql: str) -> List[Dict]:
        """Execute SQL safely — read-only."""
        sql_upper = sql.upper().strip()
        if not sql_upper.startswith("SELECT"):
            raise ValueError("Only SELECT queries allowed!")

        with self.engine.connect() as conn:
            result = conn.execute(sqlalchemy.text(sql))
            columns = result.keys()
            rows = [dict(zip(columns, row)) for row in result]
            return rows[:100]

    def ask(self, question: str) -> Dict:
        sql = self.generate_query(question)
        try:
            results = self.execute_safe(sql)
            return {"sql": sql, "results": results, "error": None}
        except Exception as e:
            return {"sql": sql, "results": [], "error": str(e)}
```

### Step 4: API Layer

```python
# api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import time
import logging

app = FastAPI(
    title="ApexERP RAG API",
    description="Natural language interface for ApexERP",
    version="1.0.0"
)

class QueryRequest(BaseModel):
    question: str
    mode: str = "auto"  # auto, doc, sql, report
    top_k: int = 5
    department: Optional[str] = None

class QueryResponse(BaseModel):
    answer: str
    sources: List[dict] = []
    sql: Optional[str] = None
    latency_ms: float = 0.0

class Source(BaseModel):
    title: str
    score: float

@app.on_event("startup")
async def startup():
    app.state.rag = ApexERPRAGPipeline(config)
    app.state.nltosql = NLToSQL(llm, db_engine)
    logging.info("ApexERP RAG initialized")

@app.post("/ask", response_model=QueryResponse)
async def ask(request: QueryRequest):
    start = time.perf_counter()

    filters = {}
    if request.department:
        filters["department"] = request.department

    try:
        if request.mode == "sql":
            result = app.state.nltosql.ask(request.question)
            answer = f"SQL Query: {result['sql']}\n\nResults: {result['results']}"
            sql = result['sql']
            sources = []
        else:
            result = app.state.rag.query(request.question, filters)
            answer = result["answer"]
            sql = None
            sources = result["sources"]
    except Exception as e:
        logging.error(f"Query error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

    elapsed = (time.perf_counter() - start) * 1000

    return QueryResponse(
        answer=answer,
        sources=sources,
        sql=sql,
        latency_ms=elapsed
    )

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "ApexERP RAG"}
```

### Step 5: Docker Deployment

```yaml
# docker-compose.yml
version: "3.8"

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - QDRANT_HOST=qdrant
      - REDIS_HOST=redis
      - DATABASE_URL=postgresql://user:pass@postgres:5432/apexerp
    depends_on:
      - qdrant
      - redis
      - postgres

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: apexerp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  qdrant_data:
  postgres_data:
```

---

## Testing

```python
# tests/test_rag.py
import pytest
from httpx import AsyncClient
from api.main import app

@pytest.fixture
def client():
    return AsyncClient(app=app, base_url="http://test")

@pytest.mark.asyncio
async def test_doc_qa():
    async with client() as c:
        resp = await c.post("/ask", json={
            "question": "ApexERP mein invoice kaise generate karein?"
        })
    assert resp.status_code == 200
    assert "answer" in resp.json()
    assert len(resp.json()["answer"]) > 0

@pytest.mark.asyncio
async def test_sql_query():
    async with client() as c:
        resp = await c.post("/ask", json={
            "question": "Pichle mahine ke total sales kya the?",
            "mode": "sql"
        })
    assert resp.status_code == 200
    assert resp.json()["sql"] is not None

@pytest.mark.asyncio
async def test_health():
    async with client() as c:
        resp = await c.get("/health")
    assert resp.status_code == 200
    assert resp.json()["status"] == "healthy"

@pytest.mark.asyncio
async def test_rag_filters():
    async with client() as c:
        resp = await c.post("/ask", json={
            "question": "Finance department ke documents",
            "department": "Finance"
        })
    assert resp.status_code == 200
```

---

## Deployment Commands

```bash
# 1. Clone and setup
git clone <repo>
cd apexerp-rag
python -m venv venv
source venv/bin/activate  # venv\Scripts\activate on Windows
pip install -r requirements.txt

# 2. Environment
cp .env.example .env
# Edit .env: OPENAI_API_KEY, DB credentials, etc.

# 3. Run with Docker
docker-compose up -d

# 4. Seed documents
python scripts/seed_docs.py  # Index ERP docs in Qdrant
python scripts/seed_schema.py # Load DB schema

# 5. Test
curl -X POST http://localhost:8000/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "Invoice kaise generate karein?"}'

# 6. Check health
curl http://localhost:8000/health
```

---

## Directory Structure (Full)

```
apexerp-rag/
├── api/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   └── routes.py
├── core/
│   ├── __init__.py
│   ├── config.py
│   └── database.py
├── rag/
│   ├── __init__.py
│   ├── pipeline.py
│   ├── retriever.py
│   ├── generator.py
│   └── cache.py
├── nltosql/
│   ├── __init__.py
│   ├── schema.py
│   ├── query_gen.py
│   └── query_exec.py
├── scripts/
│   ├── seed_docs.py
│   ├── seed_schema.py
│   └── evaluate.py
├── tests/
│   ├── __init__.py
│   ├── test_rag.py
│   └── test_nltosql.py
├── data/
│   ├── docs/
│   │   ├── user_manual.pdf
│   │   ├── api_docs.md
│   │   └── faq.csv
│   └── schema/
│       └── erp_schema.sql
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
├── .env.example
└── README.md
```

---

## Evaluation Results Template

```
=== ApexERP RAG Evaluation ===

Date: 2024-12-15
Test Set: 50 questions (20 doc, 20 SQL, 10 report)

Metrics:
  Faithfulness:      0.92 ✅
  Answer Relevancy:  0.88 ✅
  Context Precision: 0.85 ✅
  Context Recall:    0.78 ✅

NL → SQL Accuracy:
  Exact Match:       72%
  Functional Match:  88%
  Error Rate:        4%

Latency:
  Average:     450ms
  P95:        1200ms
  P99:        2500ms

Caching:
  Hit Rate:    34%
  Avg Saved:  380ms per hit
```

---

## Success Criteria Checklist

- [ ] User can ask questions in Hindi/English/Hinglish
- [ ] NL → SQL working with 85%+ accuracy
- [ ] Doc RAG returning relevant answers
- [ ] Report generation with citations
- [ ] API response < 2 seconds (P95)
- [ ] Docker Compose deployment works
- [ ] RAGAS evaluation > 0.80 on all metrics
- [ ] User testing with 5 real ApexERP users
- [ ] Deployment on production server
- [ ] Documentation complete
