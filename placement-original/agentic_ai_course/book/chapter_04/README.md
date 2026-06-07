# Phase 4: Enterprise RAG (Retrieval Mastery)

⏱️ **Time:** 2 Weeks
🎯 **Goal:** Solve the problem of AI "Hallucination" by providing accurate, filtered data from millions of sources.

---

## 🔬 1. The Vector Stack (Deep Dive)
### A. Embeddings Selection
*   **Small Models:** Fast, cheap, perfect for simple chatbots (OpenAI `text-embedding-3-small`).
*   **Large Models:** Better at capturing nuance in technical or legal language (HuggingFace `BGE-m3`).

### B. Vector Databases (Architectural Choice)
*   **Pinecone:** High-speed, managed, "as-a-service."
*   **pgvector (PostgreSQL):** Best for developers who already use SQL. Keeps data and vectors in one place.
*   **LanceDB:** Serverless, blazing fast, runs directly inside your app (No management needed).

---

## 🛠️ 2. Advanced Retrieval Strategies

### A. Semantic Chunking
Instead of splitting text by # of characters, we split it based on when the *topic* changes. This preserves context.

### B. Multi-Query & Parent Document Retrieval
*   **Multi-Query:** The AI takes one user question and re-writes it 5 ways to get more relevant data.
*   **Parent Document:** Retrieve a small chunk for searching, but provide the *entire paragraph* or page to the LLM for the final answer.

### C. Re-Ranking (The Quality Filter)
Retrieve 10 documents via vector search, then use a specialized "Rerank" model (like Cohere) to pick the #1 most factually correct match.

---

## 🧪 Real-world Project: "The Internal Policy Master"
**Goal:** Build an agent that can answer complicated HR questions (e.g., "What is the maternity leave policy in Germany vs India?") by searching a knowledge base.
*   **Skill:** Implementing **Hybrid Search** (Keyword search + Vector search) for 100% accuracy.

---

## 📚 Essential Resources
*   [**Pinecone: The Vector Database Learning Path**](https://www.pinecone.io/learn/)
*   [**LangChain Tutorial: Advanced RAG Strategies**](https://python.langchain.com/docs/tutorials/rag/)
*   [**Weaviate: Ranking and Retrieval Excellence**](https://weaviate.io/blog/ranking-and-retrieval)
