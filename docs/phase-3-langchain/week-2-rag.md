# Week 2: RAG (Retrieval Augmented Generation)

**Duration:** August 10-16, 2026 | **Hours:** 35

---

## Day 1: Text Splitters

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", " ", ""]
)

chunks = splitter.split_documents(docs)
print(f"Created {len(chunks)} chunks")
```

## Day 2: Embeddings

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings

# OpenAI (paid)
embeddings = OpenAIEmbeddings()

# Free
embeddings = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)
```

## Day 3: Vector Store

```python
from langchain_chroma import Chroma

vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

# Search
results = vectorstore.similarity_search(
    "Return policy kya hai?",
    k=3
)
```

## Day 4: RAG Chain

```python
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain

retriever = vectorstore.as_retriever()

combine_docs_chain = create_stuff_documents_chain(
    llm, 
    prompt_template
)
rag_chain = create_retrieval_chain(
    retriever, 
    combine_docs_chain
)

result = rag_chain.invoke({"input": "Your question"})
print(result["answer"])
```

## Day 5: MMR & Filtering

```python
# MMR — diverse results
retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 5, "fetch_k": 20}
)

# Score threshold
retriever = vectorstore.as_retriever(
    search_type="similarity_score_threshold",
    search_kwargs={"score_threshold": 0.5}
)
```

## Day 6-7: Project — PDF Q&A

Build a RAG system:
- Upload PDF
- Split → Embed → Store
- Ask questions → Get answers with sources
- FastAPI endpoint
