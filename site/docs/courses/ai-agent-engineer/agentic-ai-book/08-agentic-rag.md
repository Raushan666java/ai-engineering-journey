---
id: 08-agentic-rag
slug: /ai-agent-engineer/agentic-ai-book/08-agentic-rag
title: "08-agentic-rag"
sidebar_label: "08-agentic-rag"
sidebar_position: 9
---
## Chapter 8: Agentic RAG

### 8.1 Naive RAG vs. Agentic RAG

**Naive RAG** (what most tutorials teach, and likely what your current ChromaDB setup does): always retrieve top-K chunks for every query, stuff them into the prompt, generate an answer. Fixed pipeline, no decision-making.

**Agentic RAG**: the model decides *whether* to retrieve at all, *what* to search for (possibly rewriting the query), *evaluates* whether what came back is actually useful, and *iterates* if not — all as tool-calling decisions inside the ReAct loop from Chapter 5.

### 8.2 Retrieval as a Tool, Not a Pipeline Step

```python
tools = [
    {
        "name": "search_knowledge_base",
        "description": "Semantic search over product documentation and past support tickets. Use only when the user's question requires specific factual/product knowledge you don't already have — not for small talk or general reasoning.",
        "input_schema": {
            "type": "object",
            "properties": {"query": {"type": "string"}},
            "required": ["query"]
        }
    }
]

def search_knowledge_base(query):
    results = chroma_collection.query(query_texts=[query], n_results=5)
    return results["documents"][0]
```

Because it's a tool, the model can skip it entirely for questions that don't need it ("hi, how are you") — something a fixed always-retrieve pipeline can't do without extra hardcoded logic.

### 8.3 Query Rewriting

Users' raw questions are often bad search queries. An agentic pattern: have the model rewrite the query *before* searching, as an explicit reasoning step:

```
User asks: "why did my thing break after the update"
Rewritten query for search: "product malfunction after software update troubleshooting"
```

You can do this with a lightweight, cheap LLM call, or just prompt the main agent to always reformulate before calling `search_knowledge_base`.

### 8.4 Self-Correction Loop (Grade the Retrieval)

The real power of agentic RAG: the agent evaluates whether the retrieved chunks actually answer the question, and re-searches if not.

```python
grading_prompt = """
Question: {question}
Retrieved passages: {passages}

Do these passages contain enough information to answer the question?
Respond with only "YES" or "NO".
"""
```

Wire this as an explicit step in your LangGraph graph: a `grade_documents` node after retrieval, with a conditional edge — if "NO," route back to a `rewrite_query` node and search again (capped at 2-3 attempts before falling back to "I don't have enough information").

```python
def grade_documents(state):
    grade = client.messages.create(
        model="claude-sonnet-4-6", max_tokens=10,
        messages=[{"role": "user", "content": grading_prompt.format(
            question=state["question"], passages=state["retrieved_docs"])}]
    )
    return {"retrieval_ok": "YES" in grade.content[0].text}

def route_after_grading(state):
    if state["retrieval_ok"] or state["retry_count"] >= 3:
        return "generate_answer"
    return "rewrite_query"
```

### 8.5 Multi-Source Retrieval

Real systems rarely have just one knowledge source. Give the agent multiple retrieval tools and let it choose:

```python
tools = [
    {"name": "search_product_docs", "description": "Search product documentation. Use for how-to and feature questions."},
    {"name": "search_past_tickets", "description": "Search resolved support tickets. Use for troubleshooting/error questions."},
    {"name": "query_order_database", "description": "Query the Laravel order database directly. Use for order status/billing questions — NOT a document search."},
]
```

This is exactly the shape of an ApexERP support agent: it must pick the right *kind* of lookup, not just search one blob of text.

### 8.6 Milestone Project for This Chapter

Upgrade your existing ChromaDB/FastAPI memory server: add a grading step and a rewrite-and-retry loop (max 3 attempts) as a small LangGraph graph. Test it with a deliberately vague/bad query and confirm the agent rewrites and retries rather than returning a weak answer immediately.

---

