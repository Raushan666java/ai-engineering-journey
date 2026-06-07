# Phase 3 — LangChain

**Duration:** 4 weeks (July 2026)
**Goal:** LangChain ka solid command — chains, RAG, agents, production deployment
**Mindset:** Laravel developer se AI Engineer banne ka bridge phase

---

## What is LangChain? Kyun Important Hai?

LangChain ek framework hai jo LLMs ke saath application banane ko easy banata hai.

Socho tumhe ek Laravel app banani hai jo:
- User se prompt le
- OpenAI ko bheje
- Response parse kare
- Database mein save kare
- Aur agle request ke liye context yaad rakhe

Bina LangChain ke — tum raw API calls karoge, manually prompt string concatenate karoge, khud history manage karoge. Messy.

**LangChain = Express.js / Laravel for LLMs**

Routing, middleware, template engine — sab built-in hai.

```
Bina LangChain:
  prompt = f"Translate {text} to {lang}"
  response = openai.ChatCompletion.create(messages=[...])
  print(response["choices"][0]["message"]["content"])

LangChain ke saath:
  chain = prompt | model | output_parser
  result = chain.invoke({"text": "hello", "lang": "hindi"})
```

---

## Core Concepts

| Concept | Matlab | Real World Example |
|---------|--------|-------------------|
| **LLM** | Model jo text generate kare | GPT-4, Llama, Gemini |
| **Prompt Template** | Dynamic prompt builder | `"Translate {text} to {language}"` |
| **Chain** | Sequence of operations | Prompt → LLM → Parser |
| **Memory** | Past conversations yaad rakhna | Chatbot with history |
| **RAG** | External data se context fetch karna | PDF se answer dhundhna |
| **Agent** | LLM decide kare kaunsa tool use kare | Search + Calculator + Code |
| **Tool** | Agent ke liye pluggable functionality | Web search, API call, DB query |
| **LCEL** | LangChain Expression Language | `chain = a \| b \| c` |

---

## Kaise Connect Hota Hai Sab?

```
Phase 1 (Python)
     ↓
  FastAPI, async, Pydantic — LangChain chains mein directly use hote hain
     ↓
Phase 3 (LangChain)
     ↓
  prompt + model + memory + tools = AI Application
     ↓
Phase 4 (Advanced RAG)
     ↓
Phase 5 (Agents) → Phase 6 (Multi-Agent)
```

!!! tip "Mental Model"
    LangChain ka har concept tumhare Laravel experience se map hota hai:

    | Laravel | LangChain |
    |---------|-----------|
    | Blade Template | PromptTemplate |
    | Middleware | Chain (sequential processing) |
    | Eloquent | Memory / Vector Store |
    | Service Container | Tool / Toolkits |
    | Queue | AgentExecutor (looping) |
    | Routes | LCEL pipelines |

---

## Phase Structure

### Week 1 — LangChain Core
- Chat Models, Prompts, Output Parsers
- Chains (LLMChain, SequentialChain, RouterChain)
- LCEL — the pipe operator magic
- **Project:** Blog outline generator

### Week 2 — RAG Basics
- Document Loaders & Text Splitters
- Embeddings & Vector Stores
- RetrievalQA chains
- **Project:** PDF Q&A bot

### Week 3 — LangGraph & Agents
- StateGraph, nodes, edges
- ReAct agent pattern
- Custom tools with `@tool`
- **Project:** Research agent with web search

### Week 4 — Project Build
- Complete Document AI application
- FastAPI + LangChain + Chroma
- OCR + RAG + Summarization
- Docker + deployment prep

---

## Prerequisites

```
✅ Python 3.11+ installed        → Phase 1 se aaya
✅ pip, virtualenv ka pata hai     → Phase 1 se aaya
✅ Basic API concepts              → REST APIs samajh aati hain
✅ LLM kya hai pata hai            → GPT / Claude use kiya hai
❌ LangChain experience nahi chahiye → Yahan se seekhenge
```

---

## Setup Checklist

```bash
# Virtual environment
python -m venv .venv
.venv\Scripts\activate      # Windows
source .venv/bin/activate    # Mac/Linux

# Install core packages
pip install langchain langchain-openai langchain-community
pip install python-dotenv pydantic

# Week 2 additions
pip install chromadb pypdf faiss-cpu tiktoken

# Week 3 additions
pip install langgraph duckduckgo-search

# Week 4 additions
pip install fastapi uvicorn python-multipart pytesseract

# Save dependencies
pip freeze > requirements.txt
```

```env title=".env"
OPENAI_API_KEY=sk-your-key-here
# Ya agar local model chahte ho (Ollama):
# OPENAI_API_BASE=http://localhost:11434/v1
# OPENAI_MODEL_NAME=llama3
```

---

## Resources

- **Official Docs:** [python.langchain.com](https://python.langchain.com)
- **LangGraph Docs:** [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph)
- **Sam Witteveen YouTube:** Best LangChain tutorials
- **LangChain Academy:** Free official course

!!! warning "Important"
    LangChain fast change hota rehta hai. Agar koi deprecated syntax dikhe toh docs check karo. Yeh guide latest version (0.3.x) ke saath compatible hai.

---

## Success Metrics

Week ke end tak tum yeh kar paoge:

- [ ] Prompt templates bana ke chains run kar pao
- [ ] LCEL se pipelines compose kar pao
- [ ] PDF upload karke RAG Q&A kar pao
- [ ] LangGraph se agent bana pao
- [ ] Document AI app deploy kar pao

Chalo shuru karte hain. Week 1 se start karo.
