# Week 4 — Project Build: Document AI

**Goal:** Weeks 1-3 ka sab kuch combine karo — ek production-ready Document AI application
**Tech:** FastAPI + LangChain + Chroma + LangGraph + OpenAI/Ollama

---

## Project Overview

Ek complete application jo:
- Documents upload kare (PDF, Word, Images)
- OCR kare images ka
- RAG-based Q&A kare
- Summarization kare
- Agents se multi-step queries handle kare

---

## Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
│   Frontend   │────▶│   FastAPI App    │────▶│  Vector Store │
│  (HTML/JS)   │     │  (main.py)       │     │  (Chroma)     │
└──────────────┘     └──────────────────┘     └──────────────┘
                           │    │
                           ▼    ▼
                     ┌──────────────┐
                     │   LLM +      │
                     │   Embeddings │
                     └──────────────┘
```

### Data Flow

```
1. User uploads PDF/Image
         ↓
2. File saved + processed
         ↓
3. Text extracted (PyPDF / Tesseract)
         ↓
4. Text split into chunks
         ↓
5. Embeddings → ChromaDB
         ↓
6. User asks question
         ↓
7. Vector search → relevant chunks
         ↓
8. LLM generates answer from chunks
         ↓
9. Response sent to frontend
```

---

## Project Structure

```
document-ai/
├── main.py                 # FastAPI app + routes
├── config.py               # Settings + env vars
├── requirements.txt        # Dependencies
├── Dockerfile              # Container setup
│
├── chains/
│   ├── __init__.py
│   ├── qa_chain.py         # RAG Q&A chain
│   ├── summary_chain.py    # Summarization chain
│   └── agent.py            # Research agent
│
├── services/
│   ├── __init__.py
│   ├── document.py         # Document loading + splitting
│   ├── vector_store.py     # Chroma operations
│   ├── ocr.py              # OCR processing
│   └── embedding.py        # Embeddings setup
│
├── models/
│   ├── __init__.py
│   └── schemas.py          # Pydantic models
│
├── static/
│   └── index.html          # Frontend
│
└── uploads/                # Uploaded files
```

---

## Step-by-Step Implementation

### 1. Config

```python title="config.py"
import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    OPENAI_MODEL: str = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
    EMBEDDING_MODEL: str = "text-embedding-3-small"
    CHROMA_PERSIST_DIR: str = "./chroma_db"
    UPLOAD_DIR: str = "./uploads"
    CHUNK_SIZE: int = 500
    CHUNK_OVERLAP: int = 50
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "")
    USE_OLLAMA: bool = os.getenv("USE_OLLAMA", "false").lower() == "true"


settings = Settings()
```

### 2. Models

```python title="models/schemas.py"
from pydantic import BaseModel, Field
from typing import Optional, List


class UploadResponse(BaseModel):
    filename: str
    document_id: str
    chunks: int
    message: str


class QueryRequest(BaseModel):
    question: str
    document_id: Optional[str] = None


class QueryResponse(BaseModel):
    answer: str
    sources: List[dict] = []
    confidence: Optional[float] = None


class SummaryRequest(BaseModel):
    document_id: str
    max_length: Optional[int] = 500


class SummaryResponse(BaseModel):
    summary: str
    original_length: int
    summary_length: int


class AgentQueryRequest(BaseModel):
    query: str
    use_web_search: bool = True
    use_documents: bool = True
```

### 3. Document Service

```python title="services/document.py"
import os
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    Docx2txtLoader,
)
from langchain_text_splitters import RecursiveCharacterTextSplitter
from config import settings


class DocumentService:
    SUPPORTED_EXTENSIONS = {".pdf", ".txt", ".docx", ".md"}

    def __init__(self):
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=settings.CHUNK_SIZE,
            chunk_overlap=settings.CHUNK_OVERLAP,
        )

    def load_document(self, file_path: str) -> list:
        ext = os.path.splitext(file_path)[1].lower()

        if ext == ".pdf":
            loader = PyPDFLoader(file_path)
        elif ext == ".docx":
            loader = Docx2txtLoader(file_path)
        elif ext in (".txt", ".md"):
            loader = TextLoader(file_path)
        else:
            raise ValueError(f"Unsupported file type: {ext}")

        docs = loader.load()

        # Add metadata
        for doc in docs:
            doc.metadata["source"] = os.path.basename(file_path)

        return docs

    def split_documents(self, docs: list) -> list:
        return self.splitter.split_documents(docs)

    def process_upload(self, file_path: str) -> list:
        docs = self.load_document(file_path)
        chunks = self.split_documents(docs)
        return chunks
```

### 4. Embedding Service

```python title="services/embedding.py"
from config import settings

if settings.USE_OLLAMA:
    from langchain_community.embeddings import OllamaEmbeddings
    embeddings = OllamaEmbeddings(
        model="llama3",
        base_url=settings.OLLAMA_BASE_URL,
    )
else:
    from langchain_openai import OpenAIEmbeddings
    embeddings = OpenAIEmbeddings(
        model=settings.EMBEDDING_MODEL,
    )
```

### 5. Vector Store Service

```python title="services/vector_store.py"
import uuid
import os
from langchain_chroma import Chroma
from services.embedding import embeddings
from config import settings


class VectorStoreService:
    def __init__(self):
        os.makedirs(settings.CHROMA_PERSIST_DIR, exist_ok=True)
        self.store = Chroma(
            persist_directory=settings.CHROMA_PERSIST_DIR,
            embedding_function=embeddings,
        )

    def add_documents(self, chunks: list) -> str:
        doc_id = str(uuid.uuid4())
        for chunk in chunks:
            chunk.metadata["document_id"] = doc_id

        self.store.add_documents(chunks)
        self.store.persist()
        return doc_id

    def get_retriever(self, document_id: str = None, k: int = 4):
        search_kwargs = {"k": k}
        if document_id:
            search_kwargs["filter"] = {"document_id": document_id}

        return self.store.as_retriever(
            search_type="similarity",
            search_kwargs=search_kwargs,
        )

    def delete_document(self, document_id: str):
        # Chroma collection se delete
        self.store.delete(filter={"document_id": document_id})
```

### 6. QA Chain

```python title="chains/qa_chain.py"
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from config import settings

model = ChatOpenAI(
    model=settings.OPENAI_MODEL,
    temperature=0,
)

prompt = PromptTemplate(
    template=(
        "You are a Document AI assistant. Answer based ONLY on the provided context.\n"
        "If the answer is not in the context, say 'Document mein yeh information nahi hai'.\n\n"
        "Context:\n{context}\n\n"
        "Question: {question}\n\n"
        "Hinglish Answer:"
    ),
    input_variables=["context", "question"],
)


def format_docs(docs):
    return "\n\n".join(d.page_content for d in docs)


def create_qa_chain(retriever):
    return (
        {
            "context": retriever | format_docs,
            "question": RunnablePassthrough(),
        }
        | prompt
        | model
        | StrOutputParser()
    )
```

### 7. Summary Chain

```python title="chains/summary_chain.py"
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from config import settings

model = ChatOpenAI(model=settings.OPENAI_MODEL, temperature=0.3)

prompt = PromptTemplate(
    template=(
        "Summarize the following document content in {max_length} words.\n"
        "Focus on key points. Use Hinglish.\n\n"
        "Content:\n{content}\n\n"
        "Summary:"
    ),
    input_variables=["content", "max_length"],
)

summary_chain = prompt | model | StrOutputParser()
```

### 8. Research Agent

```python title="chains/agent.py"
from typing import TypedDict, Literal
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor, ToolInvocation
from duckduckgo_search import DDGS
from config import settings

model = ChatOpenAI(model=settings.OPENAI_MODEL, temperature=0)


@tool
def web_search(query: str) -> str:
    """Search the web for current information"""
    with DDGS() as ddgs:
        results = list(ddgs.text(query, max_results=5))
    if not results:
        return "No results found"
    return "\n".join(f"{r['title']}: {r['body'][:200]}" for r in results)


tools = [web_search]
tool_executor = ToolExecutor(tools)


class AgentState(TypedDict):
    messages: list
    query: str


def call_model(state: AgentState) -> AgentState:
    response = model.invoke(state["messages"])
    state["messages"].append(AIMessage(content=response.content))
    return state


def should_continue(state: AgentState) -> Literal["action", "end"]:
    last = state["messages"][-1]
    if hasattr(last, "tool_calls") and last.tool_calls:
        return "action"
    return "end"


def execute_tools(state: AgentState) -> AgentState:
    last = state["messages"][-1]
    for tc in last.tool_calls:
        result = tool_executor.invoke(
            ToolInvocation(tool=tc["name"], tool_input=tc["args"])
        )
        state["messages"].append(AIMessage(content=str(result)))
    return state


graph = StateGraph(AgentState)
graph.add_node("agent", call_model)
graph.add_node("action", execute_tools)
graph.set_entry_point("agent")
graph.add_conditional_edges("agent", should_continue)
graph.add_edge("action", "agent")

app = graph.compile()


def run_agent(query: str) -> str:
    result = app.invoke({
        "messages": [
            SystemMessage(content="You are a research assistant. Use Hinglish."),
            HumanMessage(content=query),
        ],
        "query": query,
    })
    return result["messages"][-1].content
```

### 9. OCR Service

```python title="services/ocr.py"
import os
from PIL import Image
import pytesseract


class OCRService:
    def extract_text(self, image_path: str) -> str:
        """Extract text from image using Tesseract OCR"""
        try:
            image = Image.open(image_path)
            text = pytesseract.image_to_string(image, lang="eng+hin")
            return text.strip()
        except Exception as e:
            return f"OCR error: {e}"

    def is_image(self, file_path: str) -> bool:
        ext = os.path.splitext(file_path)[1].lower()
        return ext in (".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tiff")
```

### 10. Main FastAPI App

```python title="main.py"
import os
import uuid
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

from config import settings
from services.document import DocumentService
from services.vector_store import VectorStoreService
from services.ocr import OCRService
from chains.qa_chain import create_qa_chain
from chains.summary_chain import summary_chain
from chains.agent import run_agent
from models.schemas import (
    UploadResponse, QueryRequest, QueryResponse,
    SummaryRequest, SummaryResponse, AgentQueryRequest,
)

app = FastAPI(title="Document AI", version="1.0.0")

doc_service = DocumentService()
vector_service = VectorStoreService()
ocr_service = OCRService()

os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def index():
    with open("static/index.html") as f:
        return f.read()


@app.post("/upload", response_model=UploadResponse)
async def upload_document(file: UploadFile = File(...)):
    # Validate
    ext = os.path.splitext(file.filename)[1].lower()
    supported = {".pdf", ".txt", ".docx", ".png", ".jpg", ".jpeg", ".webp"}

    if ext not in supported:
        raise HTTPException(
            400, f"Unsupported file type: {ext}. Supported: {supported}"
        )

    # Save
    file_id = str(uuid.uuid4())
    safe_name = f"{file_id}{ext}"
    file_path = os.path.join(settings.UPLOAD_DIR, safe_name)

    with open(file_path, "wb") as f:
        content = await file.read()
        f.write(content)

    # Process — OCR for images, document loaders for others
    if ocr_service.is_image(file_path):
        text = ocr_service.extract_text(file_path)
        from langchain_core.documents import Document
        chunks = [Document(page_content=text, metadata={"source": file.filename})]
    else:
        chunks = doc_service.process_upload(file_path)

    # Store in vector DB
    doc_id = vector_service.add_documents(chunks)

    return UploadResponse(
        filename=file.filename,
        document_id=doc_id,
        chunks=len(chunks),
        message="Document processed successfully!",
    )


@app.post("/query", response_model=QueryResponse)
async def query_document(req: QueryRequest):
    if not req.question.strip():
        raise HTTPException(400, "Question empty hai")

    retriever = vector_service.get_retriever(
        document_id=req.document_id
    )
    qa_chain = create_qa_chain(retriever)

    answer = qa_chain.invoke(req.question)

    # Get source documents
    sources = retriever.invoke(req.question)
    source_info = [
        {
            "content": s.page_content[:200],
            "source": s.metadata.get("source", "unknown"),
        }
        for s in sources[:3]
    ]

    return QueryResponse(answer=answer, sources=source_info)


@app.post("/summarize", response_model=SummaryResponse)
async def summarize_document(req: SummaryRequest):
    retriever = vector_service.get_retriever(
        document_id=req.document_id, k=20
    )

    # Get all chunks for the document
    all_docs = retriever.invoke("")
    content = "\n\n".join(d.page_content for d in all_docs)

    if not content.strip():
        raise HTTPException(404, "Document content nahi mila")

    summary = summary_chain.invoke({
        "content": content,
        "max_length": str(req.max_length),
    })

    return SummaryResponse(
        summary=summary,
        original_length=len(content),
        summary_length=len(summary),
    )


@app.post("/agent")
async def agent_query(req: AgentQueryRequest):
    answer = run_agent(req.query)
    return {"answer": answer}


@app.get("/documents")
async def list_documents():
    # Chroma collection se unique document_ids nikaalo
    # Simplified: store mapping in a real app
    return {"documents": []}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### 11. Frontend

```html title="static/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document AI</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: #0f172a; color: #e2e8f0;
            max-width: 900px; margin: 0 auto; padding: 2rem;
        }
        h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        .subtitle { color: #94a3b8; margin-bottom: 2rem; }
        .card {
            background: #1e293b; border-radius: 12px;
            padding: 1.5rem; margin-bottom: 1.5rem;
            border: 1px solid #334155;
        }
        label { display: block; font-size: 0.875rem; font-weight: 600;
                margin-bottom: 0.5rem; color: #94a3b8; }
        input, textarea {
            width: 100%; padding: 0.75rem;
            background: #0f172a; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0;
            font-size: 0.9rem;
        }
        button {
            background: #3b82f6; color: white; border: none;
            padding: 0.75rem 1.5rem; border-radius: 8px;
            font-weight: 600; cursor: pointer; margin-top: 0.75rem;
        }
        button:hover { background: #2563eb; }
        .response { background: #0f172a; border-radius: 8px;
                    padding: 1rem; margin-top: 0.75rem;
                    white-space: pre-wrap; }
        .source { font-size: 0.8rem; color: #64748b;
                  margin-top: 0.5rem; }
        .tabs { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
        .tab { padding: 0.5rem 1rem; border-radius: 8px;
               background: #334155; cursor: pointer; }
        .tab.active { background: #3b82f6; }
        .hidden { display: none; }
        .badge { background: #22c55e; color: #0f172a;
                 padding: 0.25rem 0.75rem; border-radius: 999px;
                 font-size: 0.75rem; font-weight: 600; }
    </style>
</head>
<body>
    <h1>📄 Document AI</h1>
    <p class="subtitle">Upload documents, ask questions, get answers</p>

    <div class="tabs">
        <div class="tab active" onclick="showTab('upload')">Upload</div>
        <div class="tab" onclick="showTab('query')">Q&A</div>
        <div class="tab" onclick="showTab('agent')">Research Agent</div>
    </div>

    <!-- Upload Tab -->
    <div id="tab-upload" class="card">
        <label>Upload Document (PDF, Word, Image, TXT)</label>
        <input type="file" id="fileInput" accept=".pdf,.docx,.txt,.png,.jpg,.jpeg" />
        <button onclick="uploadFile()">Upload</button>
        <div id="uploadResult" class="response hidden"></div>
    </div>

    <!-- Query Tab -->
    <div id="tab-query" class="card hidden">
        <p id="docStatus" style="color:#94a3b8;margin-bottom:1rem;">No document loaded</p>
        <label>Ask a question about your document</label>
        <input type="text" id="questionInput" placeholder="e.g., What is this document about?" />
        <button onclick="askQuestion()">Ask</button>
        <div id="queryResult" class="response hidden"></div>
    </div>

    <!-- Agent Tab -->
    <div id="tab-agent" class="card hidden">
        <label>Research query (web search + analysis)</label>
        <input type="text" id="agentInput" placeholder="e.g., Latest AI trends 2026" />
        <button onclick="runAgent()">Research</button>
        <div id="agentResult" class="response hidden"></div>
    </div>

    <script>
        let currentDocId = null;

        function showTab(name) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-${name}`).classList.remove('hidden');
            event.target.classList.add('active');
        }

        async function uploadFile() {
            const file = document.getElementById('fileInput').files[0];
            if (!file) { alert('Pehle file select karo!'); return; }

            const form = new FormData();
            form.append('file', file);

            const res = await fetch('/upload', { method: 'POST', body: form });
            const data = await res.json();

            currentDocId = data.document_id;
            document.getElementById('uploadResult').classList.remove('hidden');
            document.getElementById('uploadResult').innerHTML =
                `✅ ${data.filename} uploaded — ${data.chunks} chunks created`;
            document.getElementById('docStatus').innerHTML =
                `📄 Active: <strong>${data.filename}</strong> <span class="badge">${data.chunks} chunks</span>`;
        }

        async function askQuestion() {
            const q = document.getElementById('questionInput').value;
            if (!q) { alert('Question likho!'); return; }

            document.getElementById('queryResult').classList.remove('hidden');
            document.getElementById('queryResult').innerHTML = '⏳ Thinking...';

            const res = await fetch('/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: q, document_id: currentDocId }),
            });
            const data = await res.json();

            let html = `🤖 <strong>${data.answer}</strong>`;
            if (data.sources && data.sources.length) {
                html += '<br/><br/><small>📚 Sources:</small><br/>';
                data.sources.forEach(s => {
                    html += `<div class="source">📄 ${s.source}: ${s.content.substring(0, 100)}...</div>`;
                });
            }
            document.getElementById('queryResult').innerHTML = html;
        }

        async function runAgent() {
            const q = document.getElementById('agentInput').value;
            if (!q) { alert('Query likho!'); return; }

            document.getElementById('agentResult').classList.remove('hidden');
            document.getElementById('agentResult').innerHTML = '⏳ Researching...';

            const res = await fetch('/agent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: q, use_web_search: true, use_documents: true }),
            });
            const data = await res.json();
            document.getElementById('agentResult').innerHTML = `🤖 ${data.answer}`;
        }
    </script>
</body>
</html>
```

### 12. Dependencies

```txt title="requirements.txt"
fastapi==0.111.0
uvicorn[standard]==0.29.0
python-multipart==0.0.9
python-dotenv==1.0.1
pydantic==2.7.0

langchain==0.2.0
langchain-openai==0.2.0
langchain-community==0.3.0
langgraph==0.2.0
langchain-chroma==0.1.0

chromadb==0.5.0
faiss-cpu==1.8.0
tiktoken==0.7.0
pypdf==4.2.0
docx2txt==0.8

Pillow==10.3.0
pytesseract==0.3.10

duckduckgo-search==6.2.0
```

### 13. Dockerfile

```dockerfile title="Dockerfile"
FROM python:3.11-slim

WORKDIR /app

# System deps for OCR
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    tesseract-ocr-hin \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Create necessary directories
RUN mkdir -p uploads chroma_db

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Testing

```python title="test_chains.py"
import pytest
from langchain_core.documents import Document
from chains.qa_chain import create_qa_chain


class MockRetriever:
    """Mock retriever for testing without vector DB"""

    def invoke(self, query: str) -> list:
        return [
            Document(
                page_content="LangChain ek framework hai LLM apps banane ke liye.",
                metadata={"source": "test.pdf", "page": 1},
            ),
            Document(
                page_content="Yeh chains, agents, aur RAG support karta hai.",
                metadata={"source": "test.pdf", "page": 2},
            ),
        ]


@pytest.fixture
def qa_chain():
    return create_qa_chain(MockRetriever())


def test_qa_chain_returns_answer(qa_chain):
    answer = qa_chain.invoke("LangChain kya hai?")
    assert isinstance(answer, str)
    assert len(answer) > 10
    assert "LangChain" in answer


def test_qa_chain_handles_empty():
    from chains.qa_chain import create_qa_chain
    chain = create_qa_chain(MockRetriever())
    answer = chain.invoke("")
    assert isinstance(answer, str)
```

```bash
pytest test_chains.py -v
```

---

## Deployment

### Railway / Render

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Document AI app"

# 2. Railway mein connect karo
#    GitHub repo link karo → Deploy

# 3. Environment variables set karo
OPENAI_API_KEY=sk-...
```

### Docker Deploy

```bash
# Build
docker build -t document-ai .

# Run
docker run -p 8000:8000 \
  -e OPENAI_API_KEY=sk-... \
  -v ./uploads:/app/uploads \
  -v ./chroma_db:/app/chroma_db \
  document-ai
```

---

## Learning Outcomes

Week 4 ke end tak tum yeh sab kar paoge:

- [ ] FastAPI + LangChain integration
- [ ] File upload + processing pipeline
- [ ] RAG-based Q&A with source citations
- [ ] Document summarization
- [ ] Research agent with web search
- [ ] OCR for image-based documents
- [ ] Docker deployment
- [ ] API testing with pytest

---

## Next Steps

Phase 3 complete! 🎯 Ab kya?

| Phase | Topic | Why |
|-------|-------|-----|
| Phase 4 | Advanced RAG | Better retrieval, evaluation, production |
| Phase 5 | Agents | Memory, complex tools, production agents |
| Phase 6 | Multi-Agent | CrewAI, LangGraph multi-agent |

**You've built your first production AI app. Yeh portfolio mein dalne layak project hai.** 🚀
