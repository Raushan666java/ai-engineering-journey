# 📊 STAGE 5B — LangGraph — Stateful Agents

> **Level:** Advanced | **Duration:** 1–2 Weeks

---

## 1. What Is LangGraph?

LangGraph = LangChain for **production-grade agents**.

```
LangChain Agents: Simple, linear tool calling
LangGraph:        Complex, stateful, cyclic workflows with full control
```

### Install
```bash
pip install langgraph
```

---

## 2. Core Concepts

```
Graph = Your agent workflow
Nodes = Functions (steps in the workflow)
Edges = Connections between nodes
State = Data shared across nodes
Conditional Edges = Branching logic
```

---

## 3. Building Your First Graph

```python
from langgraph.graph import StateGraph, START, END
from typing import TypedDict, Annotated
from operator import add

# 1. Define State
class AgentState(TypedDict):
    messages: Annotated[list, add]
    task: str
    result: str

# 2. Define Nodes (functions)
def analyze_task(state: AgentState) -> dict:
    task = state["task"]
    return {"messages": [f"Analyzing: {task}"], "result": ""}

def execute_task(state: AgentState) -> dict:
    # Call LLM or tool here
    result = f"Executed: {state['task']}"
    return {"result": result, "messages": [result]}

def review_result(state: AgentState) -> dict:
    return {"messages": [f"Reviewed: {state['result']}"]}

# 3. Build Graph
graph = StateGraph(AgentState)
graph.add_node("analyze", analyze_task)
graph.add_node("execute", execute_task)
graph.add_node("review", review_result)

# 4. Add Edges
graph.add_edge(START, "analyze")
graph.add_edge("analyze", "execute")
graph.add_edge("execute", "review")
graph.add_edge("review", END)

# 5. Compile & Run
app = graph.compile()
result = app.invoke({"task": "Scrape example.com", "messages": [], "result": ""})
```

---

## 4. Conditional Routing

```python
def should_continue(state: AgentState) -> str:
    """Decide next step based on state."""
    if "error" in state["result"].lower():
        return "retry"
    elif "needs_review" in state["result"]:
        return "human_review"
    else:
        return "complete"

# Add conditional edge
graph.add_conditional_edges(
    "execute",
    should_continue,
    {
        "retry": "execute",       # Loop back
        "human_review": "review", # Go to review
        "complete": END,          # Finish
    }
)
```

### Visual Flow
```
START → analyze → execute ──→ complete → END
                    │    │
                    │    └──→ retry (loop back to execute)
                    │
                    └──→ human_review → review → END
```

---

## 5. AI Scraper Agent with LangGraph

```python
from langgraph.graph import StateGraph, START, END
from langchain_openai import ChatOpenAI
from typing import TypedDict

class ScraperState(TypedDict):
    url: str
    html: str
    clean_text: str
    summary: str
    entities: list
    status: str

def scrape_page(state):
    """Node 1: Scrape the webpage"""
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(state["url"], timeout=30000)
        page.wait_for_load_state("networkidle")
        html = page.content()
        browser.close()
    return {"html": html, "status": "scraped"}

def clean_content(state):
    """Node 2: Clean HTML"""
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(state["html"], "html.parser")
    for tag in soup(["script", "style", "nav", "footer"]):
        tag.decompose()
    text = " ".join(soup.get_text().split())[:4000]
    return {"clean_text": text, "status": "cleaned"}

def analyze_with_ai(state):
    """Node 3: AI Analysis"""
    llm = ChatOpenAI(model="gpt-4o-mini")
    response = llm.invoke(
        f"Summarize and extract key entities from:\n{state['clean_text']}"
    )
    return {"summary": response.content, "status": "analyzed"}

def check_quality(state) -> str:
    """Router: Check if analysis is good enough"""
    if len(state["summary"]) < 50:
        return "retry"
    return "done"

# Build graph
graph = StateGraph(ScraperState)
graph.add_node("scrape", scrape_page)
graph.add_node("clean", clean_content)
graph.add_node("analyze", analyze_with_ai)

graph.add_edge(START, "scrape")
graph.add_edge("scrape", "clean")
graph.add_edge("clean", "analyze")
graph.add_conditional_edges("analyze", check_quality, {
    "retry": "analyze",
    "done": END,
})

scraper = graph.compile()
result = scraper.invoke({
    "url": "https://example.com",
    "html": "", "clean_text": "", "summary": "",
    "entities": [], "status": ""
})
```

---

## 6. Human-in-the-Loop

```python
from langgraph.checkpoint.memory import MemorySaver

# Add checkpointing for pause/resume
memory = MemorySaver()
app = graph.compile(checkpointer=memory, interrupt_before=["review"])

# Run until interrupt
config = {"configurable": {"thread_id": "thread-1"}}
result = app.invoke(input_data, config)

# Human reviews, then resume
app.invoke(None, config)  # Continue from checkpoint
```

---

## 🎯 Practice Tasks
- [ ] Build a simple 3-node graph
- [ ] Add conditional routing with retry logic
- [ ] Build AI scraper agent with LangGraph
- [ ] Implement human-in-the-loop approval
- [ ] Create multi-step research agent

---

*Next: [Multi-Agent Systems →](./03_MULTI_AGENT_MEMORY.md)*
