# Week 2 — RAG Basics

**Goal:** External data ko LLM mein feed karna — documents padhna, chunks karna, embeddings banana, vector store mein save karna, aur retrieval-based Q&A karna
**Project:** PDF Q&A Bot

---

## 1. RAG Kya Hai?

**RAG = Retrieval-Augmented Generation**

Simple prompt engineering ki limitation: LLM sirf wahi jaanta hai jo uske training data mein hai. Agar tum apni company ke internal PDFs se answer chahiye — LLM nahi batayega.

```
Prompt Engineering:
  User: "Mera ERP system ka invoice number kaise generate karein?"
  LLM: "Mujhe nahi pata, maine woh data nahi dekha" ❌

RAG:
  User: "Mera ERP system ka invoice number kaise generate karein?"
  Step 1: Query ko vector store mein search karo
  Step 2: Mil gaya relevant document chunk
  Step 3: Document + Query → LLM ko bhejo
  LLM: "Invoice number generate karne ke liye /invoices/generate endpoint use karo" ✅
```

### RAG Flow

```
User Question
     ↓
  [Embedding Model] → Question ka vector banao
     ↓
  [Vector Store] → Similar chunks search karo
     ↓
  [Retrieved Documents] + [Original Question]
     ↓
  [LLM] → Context ke saath answer generate karo
     ↓
  Final Answer
```

---

## 2. Install Dependencies

```bash
pip install langchain langchain-openai langchain-community
pip install chromadb pypdf faiss-cpu tiktoken
pip install python-dotenv pydantic
```

---

## 3. Document Loaders

Different file types ke liye different loaders.

### TextLoader

```python
from langchain_community.document_loaders import TextLoader

loader = TextLoader("sample.txt")
docs = loader.load()

print(docs[0].page_content[:200])  # First 200 chars
print(docs[0].metadata)            # Source info
```

### PyPDFLoader

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("report.pdf")
docs = loader.load()

print(f"Total pages: {len(docs)}")
for i, doc in enumerate(docs[:3]):
    print(f"\n--- Page {i+1} ---")
    print(doc.page_content[:200])
    print(doc.metadata)  # {"source": "report.pdf", "page": 0}
```

### CSVLoader

```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader("data.csv")
docs = loader.load()

for doc in docs[:3]:
    print(doc.page_content)  # Har row ek document
```

### Multiple files ek saath

```python
from langchain_community.document_loaders import DirectoryLoader

loader = DirectoryLoader(
    "docs/",
    glob="**/*.txt",
    loader_cls=TextLoader,
)
docs = loader.load()
print(f"Loaded {len(docs)} documents")
```

---

## 4. Text Splitters

LLMs ki context window limited hoti hai. Bada document ≠ ek saath LLM ko bhejna.

### Why Split?

```
Bina split:
  "500 page PDF" → LLM context window overflow ❌
  Ya ek chunk mein saara context nahi aata

Split ke saath:
  "500 page PDF" → 1000 chunks of 500 chars each
  Sirf relevant chunks LLM ko bhejein
```

### RecursiveCharacterTextSplitter — Recommended

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,      # Har chunk kitne characters ka
    chunk_overlap=50,    # Overlap — context continuity ke liye
    separators=["\n\n", "\n", " ", ""],  # Split priority
)

chunks = splitter.split_documents(docs)
print(f"{len(docs)} docs → {len(chunks)} chunks")
print(f"Chunk 0: {chunks[0].page_content[:100]}...")
```

!!! tip "Chunk Size Kaise Decide Karein?"
    - **Small (200-300 chars):** Precise retrieval, lekin context lost ho sakta hai
    - **Medium (500-1000 chars):** Balanced — recommended
    - **Large (2000+ chars):** Better context, lekin slow + expensive
    - **Rule of thumb:** Answer 1-2 paragraphs mein aana chahiye → chunk size 500-1000

### CharacterTextSplitter

```python
from langchain_text_splitters import CharacterTextSplitter

splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=1000,
    chunk_overlap=200,
)
```

### Token-based splitting

```python
from langchain_text_splitters import TokenTextSplitter

# Tokens count karta hai, characters nahi
splitter = TokenTextSplitter(
    chunk_size=200,     # 200 tokens per chunk
    chunk_overlap=20,
)
```

---

## 5. Embeddings

Text ko numerical representation mein convert karna — taaki machine "samajh" sake.

```
"AI Engineer kaise bane?" → [0.023, -0.456, 0.789, ...] (1536 numbers)
```

### OpenAIEmbeddings

```python
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Single text ka embedding
vector = embeddings.embed_query("What is RAG?")
print(len(vector))       # 1536 dimensions
print(vector[:5])        # [0.023, -0.456, 0.789, ...]
```

### HuggingFaceEmbeddings (free)

```python
from langchain_community.embeddings import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"  # 384 dimensions, fast
)

vector = embeddings.embed_query("Kya bolti tu?")
print(len(vector))  # 384
```

!!! tip "OpenAI vs HuggingFace"
    | Feature | OpenAI | HuggingFace |
    |---------|--------|-------------|
    | Cost | Paid per token | Free |
    | Quality | Excellent | Good |
    | Speed | Fast | Fast (small model) |
    | Dimensions | 1536/3072 | 384/768 |
    | Setup | API key | pip install |

---

## 6. Vector Stores

Embeddings store karta hai + similarity search karta hai.

### Chroma (Local, persistent)

```python
from langchain_chroma import Chroma

# Create vector store from documents
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db",  # Disk mein save
)

# Ya load existing
# vectorstore = Chroma(persist_directory="./chroma_db", embedding=embeddings)
```

### FAISS (Facebook AI Similarity Search)

```python
from langchain_community.vectorstores import FAISS

vectorstore = FAISS.from_documents(
    documents=chunks,
    embedding=embeddings,
)

# Save and load
vectorstore.save_local("faiss_index")
# vectorstore = FAISS.load_local("faiss_index", embeddings)
```

### Search

```python
# Similarity search — top-k chunks
results = vectorstore.similarity_search("What is RAG?", k=3)
for r in results:
    print(f"→ {r.page_content[:100]}")
    print(f"  Score: {r.metadata}")

# Similarity search with scores
results_with_scores = vectorstore.similarity_search_with_score(
    "invoice generation", k=3
)
for doc, score in results_with_scores:
    print(f"Score: {score:.3f} | {doc.page_content[:50]}")
    # Lower score = more similar
```

---

## 7. Retrievers

Vector store ko retriever mein wrap karo → LLM chain mein plug karo.

### VectorStoreRetriever

```python
retriever = vectorstore.as_retriever(
    search_type="similarity",   # ya "mmr" for diversity
    search_kwargs={"k": 3},     # Top 3 results
)

# Test
results = retriever.invoke("How to generate invoice?")
for r in results:
    print(r.page_content[:150])
```

### ContextualCompressionRetriever

Sirf relevant part extract karo, pura chunk nahi.

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor

compressor = LLMChainExtractor.from_llm(model)
compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=retriever,
)

# Ab compressed results milega
compressed_docs = compression_retriever.invoke(
    "What are the invoice payment terms?"
)
for doc in compressed_docs:
    print(doc.page_content)
```

---

## 8. RetrievalQA Chain

Ab sabko ek saath jodte hain — RAG pipeline complete!

### Simple version

```python
from langchain.chains import RetrievalQA

qa_chain = RetrievalQA.from_chain_type(
    llm=model,
    chain_type="stuff",  # "stuff" = saara context ek saath bhejna
    retriever=retriever,
    return_source_documents=True,  # Source bhi bataye
)

result = qa_chain.invoke({"query": "What is RAG in AI?"})
print(result["result"])
```

### Custom prompt ke saath

```python
from langchain_core.prompts import PromptTemplate

prompt_template = """Use the following context to answer in Hinglish.
If you don't know, say 'Mujhe nahi pata' — don't make up answers.

Context: {context}

Question: {question}

Hinglish Answer: """

prompt = PromptTemplate(
    template=prompt_template,
    input_variables=["context", "question"],
)

qa_chain = RetrievalQA.from_chain_type(
    llm=model,
    chain_type="stuff",
    retriever=retriever,
    chain_type_kwargs={"prompt": prompt},
    return_source_documents=True,
)

result = qa_chain.invoke({"query": "Invoice kaise generate karein?"})
print("\n📝 Answer:", result["result"])
print("\n📄 Source:", result["source_documents"][0].metadata)
```

### LCEL version (modern)

```python
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

def format_docs(docs):
    return "\n\n".join(d.page_content for d in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)

answer = rag_chain.invoke("Payment terms kya hain?")
print(answer)
```

---

## 9. Complete RAG Pipeline

```python title="rag_pipeline.py"
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini")
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


def load_and_split(pdf_path: str):
    loader = PyPDFLoader(pdf_path)
    docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50,
    )
    return splitter.split_documents(docs)


def create_vectorstore(chunks, persist_dir="./chroma_db"):
    return Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=persist_dir,
    )


def create_rag_chain(vectorstore):
    retriever = vectorstore.as_retriever(
        search_kwargs={"k": 3}
    )

    prompt = PromptTemplate(
        template=(
            "You are a helpful assistant. Use the context to answer in Hinglish.\n\n"
            "Context:\n{context}\n\n"
            "Question: {question}\n\n"
            "Hinglish Answer:"
        ),
        input_variables=["context", "question"],
    )

    def format_docs(docs):
        return "\n\n".join(d.page_content for d in docs)

    return (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | model
        | StrOutputParser()
    )


def main():
    pdf_path = input("PDF file path: ").strip()
    print("📄 Loading PDF...")
    chunks = load_and_split(pdf_path)
    print(f"✅ {len(chunks)} chunks created")

    print("💾 Creating vector store...")
    vectorstore = create_vectorstore(chunks)
    print("✅ Vector store ready")

    chain = create_rag_chain(vectorstore)

    print("\n🤖 Ask questions about your PDF (type 'quit' to exit)\n")

    while True:
        question = input("\nQ: ").strip()
        if question.lower() in ("quit", "exit", "q"):
            break

        print("⏳ Thinking...")
        answer = chain.invoke(question)
        print(f"A: {answer}")


if __name__ == "__main__":
    main()
```

---

## Week 2 Project: PDF Q&A Bot

Ek CLI-based PDF question answering bot banayenge.

```python title="pdf_qa_bot.py"
import os
import tempfile
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


class PDFQABot:
    def __init__(self):
        self.chain = None

    def load_pdf(self, pdf_path: str):
        """PDF load karo aur vector store banao"""
        print(f"📄 Loading: {pdf_path}")
        loader = PyPDFLoader(pdf_path)
        docs = loader.load()

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=500,
            chunk_overlap=50,
        )
        chunks = splitter.split_documents(docs)
        print(f"✅ {len(chunks)} chunks ready")

        # Temp directory for vector store
        persist_dir = tempfile.mkdtemp()
        vectorstore = Chroma.from_documents(
            documents=chunks,
            embedding=embeddings,
            persist_directory=persist_dir,
        )

        retriever = vectorstore.as_retriever(
            search_kwargs={"k": 4}
        )

        prompt = PromptTemplate(
            template=(
                "You are an AI assistant. Answer questions based ONLY on the context.\n"
                "If the answer is not in the context, say 'Mujhe nahi pata'.\n\n"
                "Context:\n{context}\n\n"
                "Question: {question}\n\n"
                "Hinglish Answer:"
            ),
            input_variables=["context", "question"],
        )

        def format_docs(docs):
            return "\n\n".join(d.page_content for d in docs)

        self.chain = (
            {
                "context": retriever | format_docs,
                "question": RunnablePassthrough(),
            }
            | prompt
            | model
            | StrOutputParser()
        )

    def ask(self, question: str) -> str:
        if not self.chain:
            return "Pehle PDF load karo!"
        return self.chain.invoke(question)


def main():
    bot = PDFQABot()

    print("=" * 50)
    print("📚 PDF Q&A Bot")
    print("=" * 50)

    pdf_path = input("\nPDF path: ").strip()
    if not os.path.exists(pdf_path):
        print("❌ File nahi mili")
        return

    bot.load_pdf(pdf_path)

    print("\n✅ Ready! Questions pucho (exit ke liye 'q')")
    while True:
        q = input("\nYou: ").strip()
        if q.lower() == "q":
            break

        answer = bot.ask(q)
        print(f"Bot: {answer}")


if __name__ == "__main__":
    main()
```

### Usage:

```bash
python pdf_qa_bot.py
```

```
==================================================
📚 PDF Q&A Bot
==================================================

PDF path: research_paper.pdf
📄 Loading: research_paper.pdf
✅ 47 chunks ready
✅ Ready! Questions pucho (exit ke liye 'q')

You: What is the main finding of this paper?
Bot: Is paper mein main finding yeh hai ki transformer-based models...
You: Methodology kya hai?
Bot: Methodology mein 3 steps hain: data collection, model training, evaluation...
You: q
```

---

## Summary

| Component | Use | Code |
|-----------|-----|------|
| DocumentLoader | File se text padhna | `PyPDFLoader("file.pdf")` |
| TextSplitter | Chunks mein todna | `RecursiveCharacterTextSplitter(chunk_size=500)` |
| Embeddings | Text → Vector | `OpenAIEmbeddings()` |
| VectorStore | Vectors store + search | `Chroma.from_documents()` |
| Retriever | Relevant docs fetch | `vectorstore.as_retriever(k=3)` |
| RetrievalQA | Q&A chain | `prompt \| model \| StrOutputParser()` |

---

## Practice Tasks

- [ ] 3 different loaders try karo: PyPDF, CSV, Text
- [ ] Different chunk sizes (200, 500, 1000) ke saath experiment karo
- [ ] OpenAI vs HuggingFace embeddings compare karo
- [ ] Chroma aur FAISS dono try karo
- [ ] PDF Q&A bot mein source documents bhi dikhao
- [ ] ContextualCompressionRetriever try karo
- [ ] Apne kisi real PDF ke saath test karo

---
**Agle week:** LangGraph aur Agents — dynamic decision making.
