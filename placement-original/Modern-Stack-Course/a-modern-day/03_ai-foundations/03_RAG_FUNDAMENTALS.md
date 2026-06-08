# 📚 STAGE 3C — RAG Fundamentals

> **Level:** Intermediate | **Duration:** 1 Week

---

## 1. What Is RAG?

**Retrieval Augmented Generation** — Give AI access to YOUR data.

### The Problem
```
LLMs only know their training data (cutoff date)
They DON'T know about:
- Your company documents
- Your database
- Recent events
- Private knowledge
```

### The Solution: RAG
```
User Question: "What is our refund policy?"
       ↓
Step 1: RETRIEVE relevant documents from your knowledge base
       ↓
Step 2: AUGMENT the prompt with retrieved context
       ↓
Step 3: GENERATE answer using LLM + context

"Based on our policy document, refunds are available within 30 days..."
```

---

## 2. RAG Architecture

```
                    ┌──────────────┐
                    │  Your Docs   │
                    │  PDFs, DBs,  │
                    │  HTML, etc.  │
                    └──────┬───────┘
                           │ (one-time indexing)
                    ┌──────▼───────┐
                    │  Chunk +     │
                    │  Embed       │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ Vector DB    │
                    │ (FAISS/      │
                    │  Pinecone)   │
                    └──────┬───────┘
                           │ (query time)
   User Question ──────────┤
                    ┌──────▼───────┐
                    │ Similarity   │
                    │ Search       │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ LLM +        │
                    │ Retrieved    │
                    │ Context      │
                    └──────┬───────┘
                           │
                       Answer ✅
```

---

## 3. Building a Simple RAG Pipeline

### Step 1: Load Documents
```python
from langchain_community.document_loaders import (
    TextLoader, PyPDFLoader, WebBaseLoader
)

# Load text file
loader = TextLoader("company_policy.txt")
docs = loader.load()

# Load PDF
loader = PyPDFLoader("handbook.pdf")
docs = loader.load()

# Load webpage
loader = WebBaseLoader("https://example.com/docs")
docs = loader.load()
```

### Step 2: Split into Chunks
```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,      # characters per chunk
    chunk_overlap=200,    # overlap between chunks
    separators=["\n\n", "\n", ". ", " ", ""]
)

chunks = splitter.split_documents(docs)
print(f"Split into {len(chunks)} chunks")
```

### Why Chunk?
```
Full document: 50,000 tokens → Too big for context window
Chunks: 500 tokens each → Can fit relevant ones in prompt
```

### Step 3: Create Embeddings & Store
```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Create vector store
vectorstore = FAISS.from_documents(chunks, embeddings)

# Save to disk
vectorstore.save_local("./vector_db")

# Load from disk
vectorstore = FAISS.load_local("./vector_db", embeddings)
```

### Step 4: Retrieve & Generate
```python
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
    return_source_documents=True,
)

result = qa_chain.invoke({"query": "What is our refund policy?"})
print(result["result"])
print(f"Sources: {len(result['source_documents'])}")
```

---

## 4. Chunking Strategies

| Strategy | Best For | Chunk Size |
|----------|----------|------------|
| Fixed size | General text | 500-1000 chars |
| Recursive | Code, structured docs | 500-1500 chars |
| Semantic | Research papers | Variable |
| Sentence | Short answers | 1-5 sentences |
| Paragraph | Articles | Natural paragraphs |

### Overlap Matters
```
Without overlap: Context at chunk boundaries is LOST
With overlap:    Important context is preserved

Recommended: 10-20% overlap
```

---

## 5. Retrieval Strategies

### Basic Similarity Search
```python
results = vectorstore.similarity_search(query, k=4)
```

### Similarity with Score
```python
results = vectorstore.similarity_search_with_score(query, k=4)
for doc, score in results:
    print(f"Score: {score:.4f} | {doc.page_content[:100]}")
```

### Maximum Marginal Relevance (MMR)
```python
# Returns diverse results (not all similar to each other)
results = vectorstore.max_marginal_relevance_search(query, k=4, fetch_k=10)
```

---

## 🎯 Practice Tasks
- [ ] Build a RAG system with a PDF document
- [ ] Experiment with different chunk sizes
- [ ] Compare similarity search vs MMR
- [ ] Build a "Chat with your docs" application
- [ ] Measure retrieval quality

---

*Next: [AI Models & Providers →](./04_AI_MODELS_PROVIDERS.md)*
