---
id: 07-langgraph-deep-dive
slug: /ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive
title: "Part III — Frameworks"
sidebar_label: "Part III — Frameworks"
sidebar_position: 8
---
# Part III — Frameworks

## Chapter 7: LangGraph Deep Dive

### 7.1 Why LangGraph Instead of Raw Loops

Your Chapter 5 loop works great for linear ReAct. But real agents need:
- Branching logic (different paths depending on what happened)
- Pausing and resuming (human approval steps, long-running tasks)
- Composing multiple sub-agents together
- Persisting state to a database so a crash doesn't lose progress

LangGraph formalizes your loop as a **state graph**: nodes are functions (including LLM calls), edges define what runs next, and a shared **state** object flows through the whole graph — replacing your `messages` list with something more structured and inspectable.

### 7.2 Core Concepts

**State** — a typed structure (usually a `TypedDict` or Pydantic model) that flows through every node:

```python
from typing import TypedDict, Annotated
from langgraph.graph.message import add_messages

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]  # auto-appends instead of overwriting
    iteration_count: int
```

**Nodes** — plain functions that take state, do something, return updated state:

```python
def call_model(state: AgentState):
    response = client.messages.create(
        model="claude-sonnet-4-6", max_tokens=1024, tools=tools,
        messages=state["messages"]
    )
    return {"messages": [response]}

def call_tools(state: AgentState):
    last_message = state["messages"][-1]
    results = [execute_tool(b.name, b.input) for b in last_message.content if b.type == "tool_use"]
    return {"messages": results}
```

**Edges** — including **conditional edges**, which are the graph's version of your loop's if-statement:

```python
def should_continue(state: AgentState):
    last_message = state["messages"][-1]
    if last_message.stop_reason == "tool_use":
        return "tools"
    return "end"
```

**Building the graph:**

```python
from langgraph.graph import StateGraph, END

graph = StateGraph(AgentState)
graph.add_node("agent", call_model)
graph.add_node("tools", call_tools)
graph.set_entry_point("agent")
graph.add_conditional_edges("agent", should_continue, {"tools": "tools", "end": END})
graph.add_edge("tools", "agent")  # after tools run, go back to the model

app = graph.compile()
result = app.invoke({"messages": [{"role": "user", "content": "Check order 4521"}], "iteration_count": 0})
```

Notice: this is *the exact same loop* from Chapter 5, just expressed as a graph instead of a `for` loop. The value isn't different behavior — it's that the structure is now explicit, inspectable, and composable.

### 7.3 Checkpointing — Pause and Resume

This is LangGraph's biggest practical win over a hand-rolled loop: built-in state persistence.

```python
from langgraph.checkpoint.sqlite import SqliteSaver

checkpointer = SqliteSaver.from_conn_string("agent_state.db")
app = graph.compile(checkpointer=checkpointer)

config = {"configurable": {"thread_id": "customer-4521-conversation"}}
result = app.invoke({"messages": [{"role": "user", "content": "Check order 4521"}]}, config=config)

# ...later, even after a server restart...
result2 = app.invoke({"messages": [{"role": "user", "content": "And notify them"}]}, config=config)
# The graph automatically reloads all prior state for this thread_id
```

This is directly relevant to anything you deploy on your Hetzner VPS: a support agent conversation can span hours, survive a server restart, and pick up exactly where it left off.

### 7.4 Human-in-the-Loop

For anything touching money, production data, or irreversible actions (a very real concern for ApexERP-style agents), you interrupt the graph before a risky node and wait for explicit approval:

```python
app = graph.compile(checkpointer=checkpointer, interrupt_before=["send_notification_node"])

result = app.invoke(initial_state, config=config)
# Graph pauses right before send_notification_node runs

# ...show the pending action to a human, get approval...

result = app.invoke(None, config=config)  # resumes from where it paused
```

This single pattern is what makes agentic systems safe to put in front of real customers/production data — never let an agent take an irreversible action without this kind of checkpoint, at least initially, until you've built enough evaluation confidence (Chapter 13) to trust it unsupervised for that action type.

### 7.5 Subgraphs — The Bridge to Multi-Agent

A compiled graph can itself be used as a node inside a bigger graph. This is how LangGraph does multi-agent systems (Chapter 9) — each "agent" is just a subgraph, and a parent graph routes between them.

### 7.6 Milestone Project for This Chapter

Rebuild your Chapter 5 ApexERP agent in LangGraph with: (1) SQLite checkpointing so a conversation survives a script restart, and (2) an `interrupt_before` on the notification-sending node, requiring manual approval (simulate this with an `input()` prompt for now) before the agent actually "sends" anything.

---

