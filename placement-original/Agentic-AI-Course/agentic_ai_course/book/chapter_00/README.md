# Phase 0: The Prerequisites (Detailed Technical Foundation)

⏱️ **Time:** 1–2 Weeks
🎯 **Goal:** Establish a robust technical root system to support complex agent logic.

---

## 🐍 1. Python for AI Systems (The Engine)
As a developer, you don't need to know every Python library, but these core concepts are non-negotiable for Agentic AI:

### A. Asynchronous Programming (`asyncio`)
Agents often wait for multiple API calls (LLM, Search, Database). Synchronous code will throttle your performance.
*   **Key Skills:**
    *   `async/await` syntax: How to define and call non-blocking functions.
    *   `asyncio.gather()`: Running multiple tool calls or prompts in parallel.
    *   Handling `TimeoutError` and `Wait` policies for external APIs.
*   **Real-world use:** Scaling a chatbot to handle 100 concurrent users without locking the thread.

### B. Type Hinting & Pydantic
Modern AI frameworks (LangChain/LangGraph) rely heavily on types for validation and tool schema generation.
*   **Key Skills:**
    *   `typing`: Using `List`, `Dict`, `Optional`, and `Union`.
    *   `Pydantic BaseModel`: Defining strict schemas for data extraction.
    *   `Field` descriptions: LLMs use these descriptions to understand what data to provide.
*   **Real-world use:** Defining a structured JSON tool schema that an LLM can reliably fill to create a database entry.

### C. Environment Management
*   **Tools:** `venv`, `poetry`, or `conda`.
*   **Skill:** Managing `.env` files for secure API key storage and understanding the difference between `pip install` and `poetry add`.

---

## 🧠 2. LLM Mechanics (The Brain)
You must understand how the "Black Box" works to control it.

### A. Tokenization & Context Management
*   **Concept:** Models see tokens, not words. 1000 tokens ≈ 750 words.
*   **Context Window:** The total memory limit (e.g., GPT-4o has 128k).
*   **Technique:** Learning to "prune" or "summarize" history when the context window is 80% full to prevent the model from "forgetting."

### B. Temperature & Determinism
*   **Temp 0:** Strict, predictable (Best for code generation, data extraction, and logic).
*   **Temp 0.7 - 1.0:** Creative, diverse, hallucination-prone (Best for creative writing and brainstorming).

### C. Prompt Engineering (The Interface)
*   **System Prompt:** High-level rules (e.g., "You are a senior lawyer. Never give medical advice.").
*   **Few-Shot Prompting:** Providing examples of Input/Output to guide the model.
*   **Chain-of-Thought (CoT):** Asking the model to "Think step-by-step" to improve reasoning accuracy.

---

## 📚 Essential Resources
*   [**Official Python Async Guide**](https://docs.python.org/3/library/asyncio.html)
*   [**Pydantic Introduction**](https://docs.pydantic.dev/latest/)
*   [**OpenAI Token Counter (Tiktoken)**](https://github.com/openai/tiktoken)
*   [**DeepLearning.AI: Prompt Engineering for Developers**](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
*   [**freeCodeCamp: Python for Begginers (6 hour course)**](https://www.youtube.com/watch?v=rfscVS0vtbw)
