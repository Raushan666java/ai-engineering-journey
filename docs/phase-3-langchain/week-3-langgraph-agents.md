# Week 3: LangGraph & Agents

**Duration:** July 20-26, 2026 | **Hours:** 35

---

## Day 1: StateGraph

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, Literal

class AgentState(TypedDict):
    messages: list
    next_step: str

def node_a(state: AgentState):
    return {"messages": [{"role": "assistant", "content": "Processing..."}]}

graph = StateGraph(AgentState)
graph.add_node("process", node_a)
graph.set_entry_point("process")
graph.add_edge("process", END)
app = graph.compile()
```

## Day 2: Conditional Edges

```python
def router(state: AgentState) -> Literal["tools", "end"]:
    if state["next_step"] == "continue":
        return "tools"
    return "end"

graph.add_conditional_edges("decide", router)
```

## Day 3: Tool Calling Agent

```python
@tool
def get_weather(city: str) -> str:
    """Get weather for a city."""
    return f"{city}: 38°C, Sunny"

tools = [get_weather]
agent = create_react_agent(llm, tools)
```

## Day 4: Memory & Checkpointing

```python
from langgraph.checkpoint.memory import MemorySaver

memory = MemorySaver()
app = graph.compile(checkpointer=memory)
```

## Day 5: LangSmith

```bash
export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY=your_key
```

## Day 6-7: Build Tool-Using Agent

Agent that can:
- Search web
- Calculate math
- Remember context
- Respond in Hindi/English
