# Phase 1: Core LangChain (The Skeleton)

⏱️ **Time:** 2–3 Weeks
🎯 **Goal:** Master the abstractions that connect Models to external data and tools.

---

## 🏗️ 1. LCEL: LangChain Expression Language
LCEL is the foundational language for building complex chains in a declarative way.
*   **The Pipe Operator (`|`):** Similar to Unix, it passes output from one component to the next.
    *   *Example:* `Prompt | Model | StringParser`
*   **Runnables:** Every component in LangChain implements the Runnable protocol.
    *   `invoke()`: Single input/output.
    *   `stream()`: Get tokens as they are generated.
    *   `batch()`: Process multiple inputs in parallel.

---

## 🛠️ 2. Key Components for Real Work

### A. Prompt Templates & Modular Styling
Instead of hardcoding strings, use templates to inject variables.
*   **Partial Prompts:** Pre-fill templates with common data (like the current date).
*   **Composition:** Combining multiple small prompts into one large, complex instruction set.

### B. Output Parsers (Structural Integrity)
Crucial for backend developers. Convert LLM text into actionable code/data.
*   **PydanticOutputParser:** Guaranteed JSON structure matching your Python classes.
*   **JsonOutputParser:** Reliable JSON extraction even if the LLM adds extra conversational text.

### C. Retrieval Augmented Generation (RAG)
Giving the model access to your private database/files.
*   **Document Loaders:** Ingesting PDF, CSV, SQL, or HTML.
*   **Text Splitters:** Breaking large data into chunks (RecursiveCharacterTextSplitter).
*   **Vector Stores:** Storing and searching chunks (ChromaDB, Pinecone).

---

## 🧪 Real-world Project: "The Intellectual PDF Assistant"
**Goal:** Build a system where a user uploads a manual, and the AI answers questions based *only* on that manual.
1.  Load the PDF.
2.  Split it into 500-character chunks with 50-character overlap.
3.  Embed and store in ChromaDB.
4.  Create a chain that retrieves relevant chunks and answers the user query.

---

## 📚 Essential Resources
*   [**LangChain: Introduction to LCEL**](https://python.langchain.com/docs/concepts/lcel/)
*   [**LangChain: Document Loading Guide**](https://python.langchain.com/docs/how_to/#document-loaders)
*   [**Udemy: LangChain - Master AI Agent Development**](https://www.udemy.com/course/develop-ai-agents-with-langchain-langgraph/)
*   [**LangChain Official YouTube - LCEL Deep Dive**](https://www.youtube.com/watch?v=O6vM96e_KqE)
