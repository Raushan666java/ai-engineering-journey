# Week 3 — LangGraph & Agents

**Goal:** Simple chains se aage badho — dynamic, stateful, multi-step AI workflows banane sikho
**Project:** Research agent with web search + summarization

---

## 1. Why LangGraph? Simple Chain Kyun Kaafi Nahi?

Week 1-2 mein chains linear the: prompt → model → parser.

Lekin real applications mein:
- LLM ko **decide** karna hota hai — search karna hai ya calculate?
- Multiple steps **depend** karte hain previous output par
- **Loops** chahiye — jab tak answer na mile tab tak process karo
- **State** maintain karni hoti hai across steps

```
Simple Chain (Week 1):
  Input → Prompt → LLM → Parser → Output
  Linear. Single direction. Fixed.

LangGraph (Week 3):
  Input → [Node A] → Decide → [Node B] → Decide → [Node C]
                                  ↓                    ↓
                              [Retry]             [Node D]
  Graph. Loops. Decision. Stateful.
```

!!! tip "LangGraph ko aise samjho"
    Laravel mein tum event-driven workflows banate ho (queues, jobs, events). LangGraph wahi hai — LLM workflows ke liye.

---

## 2. LangGraph Basics

### Install

```bash
pip install langgraph
```

### Core Concepts

| Concept | Matlab | Example |
|---------|--------|---------|
| **StateGraph** | Complete workflow graph | `StateGraph(AgentState)` |
| **Node** | Ek step / function | `search_node`, `summarize_node` |
| **Edge** | Nodes ke beech connection | `graph.add_edge("node1", "node2")` |
| **Conditional Edge** | LLM decide kare next node | `route_after_search` |
| **State** | Global state jo sab nodes share karein | `{"messages": [], "input": ""}` |
| **AgentState** | TypedDict for state schema | `TypedDict('messages': list)` |

### Hello World: StateGraph

```python
from typing import TypedDict, Literal
from langgraph.graph import StateGraph, END


# 1. State define karo
class MyState(TypedDict):
    messages: list[str]
    step_count: int


# 2. Node functions
def node_a(state: MyState) -> MyState:
    state["messages"].append("Node A ran")
    state["step_count"] += 1
    return state


def node_b(state: MyState) -> MyState:
    state["messages"].append("Node B ran")
    return state


def should_continue(state: MyState) -> Literal["node_b", END]:
    """Conditional routing — decide next node based on state"""
    if state["step_count"] < 3:
        return "node_a"  # Loop karo
    return "node_b"


# 3. Graph build karo
graph = StateGraph(MyState)

graph.add_node("node_a", node_a)
graph.add_node("node_b", node_b)

graph.set_entry_point("node_a")
graph.add_conditional_edges(
    "node_a",
    should_continue,
)
graph.add_edge("node_b", END)

# 4. Compile + run
app = graph.compile()
result = app.invoke({"messages": [], "step_count": 0})

print(result["messages"])
# Output: ['Node A ran', 'Node A ran', 'Node A ran', 'Node B ran']
```

---

## 3. ReAct Agent Pattern

**ReAct = Reason + Act**

LLM sochta hai → action leta hai → observation dekhta hai → phir sochta hai → ...

```
Loop:
  1. Thought: "User ne question pucha, mujhe search karna hoga"
  2. Action: search("LangChain kya hai")
  3. Observation: "LangChain ek framework hai LLM apps ke liye"
  4. Thought: "Mil gaya answer, ab respond karta hoon"
  5. Final Answer: "LangChain ek framework hai..."
```

### AgentExecutor

```python
from langgraph.prebuilt import create_react_agent
from langchain_core.tools import tool

# Simple tool define karo
@tool
def get_weather(city: str) -> str:
    """Get weather for a city"""
    # Simulate API call
    weather_data = {
        "delhi": "35°C, sunny",
        "mumbai": "30°C, humid",
        "bangalore": "25°C, pleasant",
    }
    return weather_data.get(city.lower(), "Data nahi mila")


# Create agent
tools = [get_weather]
agent = create_react_agent(model=model, tools=tools)

# Run
result = agent.invoke({
    "messages": [("human", "Delhi ka temperature kya hai?")]
})

for msg in result["messages"]:
    print(f"{msg.type}: {msg.content[:100]}")
```

---

## 4. Custom Tools

### @tool decorator

```python
from langchain_core.tools import tool


@tool
def calculate(expression: str) -> str:
    """Evaluate a mathematical expression.
    
    Args:
        expression: Valid Python math expression (e.g., "2+2", "5*10+3")
    """
    try:
        result = eval(expression)
        return f"Result: {result}"
    except Exception as e:
        return f"Error: {e}"


@tool
def get_current_time() -> str:
    """Get the current date and time"""
    from datetime import datetime
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


@tool
def search_web(query: str) -> str:
    """Search the web for information.
    
    Args:
        query: Search query string
    """
    # DuckDuckGo search (free, no API key)
    from duckduckgo_search import DDGS
    
    with DDGS() as ddgs:
        results = list(ddgs.text(query, max_results=3))
    
    if not results:
        return "Koi result nahi mila"
    
    return "\n\n".join(
        f"{r['title']}\n{r['body']}" for r in results
    )
```

### Tool Schema

```python
# Tool ka schema check karo
print(calculate.name)        # "calculate"
print(calculate.description)  # "Evaluate a mathematical expression..."
print(calculate.args)        # {"expression": {"type": "string"}}
```

### Agent with multiple tools

```python
tools = [search_web, calculate, get_current_time]

agent = create_react_agent(
    model=model,
    tools=tools,
    prompt=(
        "You are a helpful AI assistant. Use tools to answer questions.\n"
        "Hinglish mein answer do.\n"
        "Always check the tool output before answering."
    ),
)

# Multiple queries try karo
queries = [
    "Aaj ka date kya hai?",
    "25*4+10 ka answer batao",
    "Latest AI news kya hai?",
]

for q in queries:
    print(f"\n🧑 Q: {q}")
    result = agent.invoke({"messages": [("human", q)]})
    print(f"🤖 A: {result['messages'][-1].content[:200]}")
```

---

## 5. Stateful Agents with Memory

Agents ko past conversation yaad rakhna chahiye.

### SQLiteMemory

```python
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3

# Create SQLite-backed memory
conn = sqlite3.connect("agent_memory.db", check_same_thread=False)
memory = SqliteSaver(conn)

agent_with_memory = create_react_agent(
    model=model,
    tools=tools,
    checkpointer=memory,
)

# Thread ID se conversations group karo
config = {"configurable": {"thread_id": "user_raushan"}}

# Multiple turns
agent_with_memory.invoke(
    {"messages": [("human", "Hi, mera naam Raushan hai")]},
    config,
)
agent_with_memory.invoke(
    {"messages": [("human", "Mera naam kya hai?")]},
    config,  # Same thread → yaad hai!
)
# A: Aapka naam Raushan hai ✅
```

---

## 6. Building Custom LangGraph Agent

Ab ek custom agent banate hain — without prebuilt helper, full control.

```python title="custom_research_agent.py"
import os
from typing import TypedDict, Annotated, Literal
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor, ToolInvocation
from duckduckgo_search import DDGS

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)


# ── Tools ──────────────────────────────────────

@tool
def web_search(query: str) -> str:
    """Search the web for current information"""
    with DDGS() as ddgs:
        results = list(ddgs.text(query, max_results=5))
    if not results:
        return "No results found"
    formatted = []
    for r in results:
        formatted.append(f"Title: {r['title']}\nURL: {r['href']}\nContent: {r['body']}")
    return "\n\n---\n\n".join(formatted)


@tool
def summarize(text: str) -> str:
    """Summarize a long text"""
    response = model.invoke(f"Summarize this in 3 bullet points:\n\n{text}")
    return response.content


tools = [web_search, summarize]
tool_executor = ToolExecutor(tools)


# ── State ──────────────────────────────────────

class AgentState(TypedDict):
    messages: Annotated[list, "Chat messages history"]
    next_step: str


# ── Nodes ──────────────────────────────────────

def call_model(state: AgentState) -> AgentState:
    """LLM se response lo aur decide karo action lena hai ya nahi"""
    messages = state["messages"]
    response = model.invoke(messages)
    state["messages"].append(AIMessage(content=response.content))
    return state


def should_continue(state: AgentState) -> Literal["action", "end"]:
    """Check karo LLM ne tool call kiya ya nahi"""
    last_message = state["messages"][-1]
    if hasattr(last_message, "tool_calls") and last_message.tool_calls:
        return "action"
    return "end"


def execute_tools(state: AgentState) -> AgentState:
    """Tool calls execute karo aur results wapas daalo"""
    last_message = state["messages"][-1]
    
    for tool_call in last_message.tool_calls:
        result = tool_executor.invoke(
            ToolInvocation(
                tool=tool_call["name"],
                tool_input=tool_call["args"],
            )
        )
        state["messages"].append(
            AIMessage(content=str(result))
        )
    
    return state


# ── Build Graph ───────────────────────────────

graph = StateGraph(AgentState)

graph.add_node("agent", call_model)
graph.add_node("action", execute_tools)

graph.set_entry_point("agent")
graph.add_conditional_edges("agent", should_continue)
graph.add_edge("action", "agent")  # Action ke baad wapas agent
graph.add_edge("agent", END)       # Lekin END bhi ho sakta hai


def run_agent(query: str):
    app = graph.compile()
    
    result = app.invoke({
        "messages": [
            SystemMessage(
                content="You are a research assistant. Use tools to answer."
            ),
            HumanMessage(content=query),
        ]
    })
    
    return result["messages"][-1].content


# ── Main ──────────────────────────────────────

if __name__ == "__main__":
    while True:
        q = input("\n🧑 Query: ").strip()
        if q.lower() in ("exit", "quit", "q"):
            break
        
        print("⏳ Researching...")
        answer = run_agent(q)
        print(f"🤖 {answer}")
```

---

## 7. Streaming from Agents

Real-time output dikhana important hai user experience ke liye.

```python
# Stream events from agent
for event in agent.stream(
    {"messages": [("human", "Delhi ke baare mein batao")]},
    stream_mode="values",
):
    message = event["messages"][-1]
    if isinstance(message, AIMessage):
        print(message.content, end="", flush=True)
```

### Streaming specific tokens

```python
# Token-level streaming
for event in app.stream(
    {"messages": [("human", "Tell me about AI")]},
    stream_mode="updates",
):
    for node_name, update in event.items():
        print(f"\n[{node_name}]")
        if "messages" in update:
            msg = update["messages"][-1]
            if hasattr(msg, "content"):
                print(msg.content[:200])
```

---

## Week 3 Project: Research Agent

Ek proper research agent jo kisi bhi topic par research kare aur structured summary de.

```python title="research_agent.py"
import os
from typing import TypedDict, Literal
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor, ToolInvocation
from duckduckgo_search import DDGS

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)


# ── Tools ──────────────────────────────────────

@tool
def web_search(query: str) -> str:
    """Search web for current information. Use for research queries."""
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=5))
        if not results:
            return "No results"
        formatted = []
        for r in results:
            formatted.append(f"Title: {r.get('title', '')}\nBody: {r.get('body', '')}")
        return "\n\n".join(formatted)
    except Exception as e:
        return f"Search error: {e}"


tools = [web_search]
tool_executor = ToolExecutor(tools)


# ── State ──────────────────────────────────────

class AgentState(TypedDict):
    messages: list
    research_topic: str
    findings: list[str]
    search_count: int


# ── Nodes ──────────────────────────────────────

def initialize(state: AgentState) -> AgentState:
    """Extract research topic from user query"""
    for msg in state["messages"]:
        if msg.type == "human":
            state["research_topic"] = msg.content
            break
    state["findings"] = []
    state["search_count"] = 0
    return state


def search_node(state: AgentState) -> AgentState:
    """Search web for the topic"""
    if state["search_count"] >= 3:
        return state
    
    topic = state["research_topic"]
    queries = [
        topic,
        f"{topic} latest developments",
        f"{topic} overview",
    ]
    
    query = queries[state["search_count"]]
    result = web_search.invoke(query)
    state["findings"].append(f"Search {state['search_count']+1}: {result[:500]}")
    state["search_count"] += 1
    
    return state


def analyze_node(state: AgentState) -> AgentState:
    """Analyze findings and generate summary"""
    all_findings = "\n\n".join(state["findings"])
    
    prompt = (
        f"Research Topic: {state['research_topic']}\n\n"
        f"Findings:\n{all_findings}\n\n"
        "Based on the above, provide:\n"
        "1. Key takeaways (3-5 points)\n"
        "2. Main trends or insights\n"
        "3. Any conflicting information\n\n"
        "Answer in Hinglish:"
    )
    
    response = model.invoke([HumanMessage(content=prompt)])
    state["messages"].append(AIMessage(content=response.content))
    return state


def should_continue_search(state: AgentState) -> Literal["search", "analyze"]:
    """Decide: aur search karein ya analyze karein"""
    if state["search_count"] < 3:
        return "search"
    return "analyze"


# ── Build Graph ───────────────────────────────

graph = StateGraph(AgentState)

graph.add_node("initialize", initialize)
graph.add_node("search", search_node)
graph.add_node("analyze", analyze_node)

graph.set_entry_point("initialize")
graph.add_edge("initialize", "search")
graph.add_conditional_edges("search", should_continue_search)
graph.add_edge("analyze", END)

app = graph.compile()


def research(topic: str) -> str:
    result = app.invoke({
        "messages": [HumanMessage(content=topic)],
        "research_topic": "",
        "findings": [],
        "search_count": 0,
    })
    return result["messages"][-1].content


if __name__ == "__main__":
    print("=" * 50)
    print("🔬 Research Agent")
    print("=" * 50)
    
    topic = input("\nResearch topic: ").strip()
    if not topic:
        topic = "Artificial Intelligence"
    
    print(f"\n⏳ Researching '{topic}'...\n")
    summary = research(topic)
    
    print("\n" + "=" * 50)
    print("📝 Research Summary")
    print("=" * 50)
    print(summary)
```

### Usage:

```bash
python research_agent.py
```

```
==================================================
🔬 Research Agent
==================================================

Research topic: Latest developments in RAG

⏳ Researching 'Latest developments in RAG'...

==================================================
📝 Research Summary
==================================================
Key Takeaways:

1. **RAG Evolution** - RAG ab sirf text search nahi raha.
   Multi-modal RAG (images + text + tables) aa raha hai.
   
2. **Agentic RAG** - Simple retrieval se aage badhke agents
   decide kar rahe hain kab retrieve karna hai.

3. **GraphRAG** - Microsoft ka GraphRAG entities ke beech
   relationships capture karta hai.

...
```

---

## 8. Advanced: Agent with RAG Tool

Agents ke saath RAG combine karna — jab zaroorat ho tabhi PDF se fetch kare.

```python
@tool
def query_documents(question: str) -> str:
    """Query the document database for information.
    Use this when the question is about the uploaded documents."""
    
    # Week 2 ka RAG chain use karo
    return rag_chain.invoke(question)


@tool
def web_search(query: str) -> str:
    """Search the web for current information."""
    # DuckDuckGo search
    pass


tools = [query_documents, web_search]
agent = create_react_agent(model=model, tools=tools)
# Agent decide karega: document DB mein dekhe ya web search kare
```

---

## Summary

| Concept | Use | Code |
|---------|-----|------|
| StateGraph | Graph-based workflows | `StateGraph(AgentState)` |
| Node | Processing step | `graph.add_node("name", func)` |
| Edge | Connection | `graph.add_edge("a", "b")` |
| Conditional Edge | LLM routing | `graph.add_conditional_edges()` |
| ReAct Agent | Reason + Act loop | `create_react_agent()` |
| `@tool` | Custom tool | `def my_tool(x: str) -> str:` |
| SQLiteMemory | Persistent memory | `SqliteSaver(conn)` |
| Streaming | Real-time output | `.stream(stream_mode="values")` |

---

## Practice Tasks

- [ ] Simple StateGraph banao with 3 nodes
- [ ] Conditional routing implement karo
- [ ] 3 custom tools banake agent deploy karo
- [ ] Research agent ko extend karo — aur sources add karo
- [ ] Agent with memory implement karo
- [ ] Streaming output try karo
- [ ] RAG tool ko agent mein integrate karo

---
**Agle week:** Week 4 Project — sab kuch combine karenge Document AI app mein.
