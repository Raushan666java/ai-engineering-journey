# 🤝 STAGE 5C — Multi-Agent Systems & Memory

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Multi-Agent Architecture

```
Supervisor Agent
├── Research Agent     → Searches web, reads docs
├── Code Agent         → Writes and reviews code
├── Data Agent         → Queries databases, analyzes data
└── Communication Agent → Sends emails, notifications
```

### Supervisor Pattern
```python
from langgraph.graph import StateGraph, START, END
from langchain_openai import ChatOpenAI

class TeamState(TypedDict):
    task: str
    messages: list
    current_agent: str
    results: dict

def supervisor(state):
    """Decides which agent should handle next"""
    llm = ChatOpenAI(model="gpt-4o-mini")
    response = llm.invoke(
        f"Given task: {state['task']}\n"
        f"Results so far: {state['results']}\n"
        "Which agent should act next? Options: researcher, coder, done"
    )
    return {"current_agent": response.content.strip()}

def researcher(state):
    """Research agent — searches for information"""
    # search logic here
    return {"results": {**state["results"], "research": "findings..."}}

def coder(state):
    """Code agent — generates code solutions"""
    # code generation logic here
    return {"results": {**state["results"], "code": "solution..."}}

def route(state) -> str:
    return state["current_agent"]

# Build multi-agent graph
graph = StateGraph(TeamState)
graph.add_node("supervisor", supervisor)
graph.add_node("researcher", researcher)
graph.add_node("coder", coder)

graph.add_edge(START, "supervisor")
graph.add_conditional_edges("supervisor", route, {
    "researcher": "researcher",
    "coder": "coder",
    "done": END,
})
graph.add_edge("researcher", "supervisor")
graph.add_edge("coder", "supervisor")

team = graph.compile()
```

---

## 2. Memory Types

### Short-Term (Conversation Buffer)
```python
from langchain.memory import ConversationBufferMemory
memory = ConversationBufferMemory(return_messages=True)
# Stores all messages — grows infinitely
```

### Sliding Window
```python
from langchain.memory import ConversationBufferWindowMemory
memory = ConversationBufferWindowMemory(k=10)
# Keeps last 10 exchanges only
```

### Summary Memory
```python
from langchain.memory import ConversationSummaryMemory
memory = ConversationSummaryMemory(llm=llm)
# Summarizes old messages to save tokens
```

### Long-Term (Vector Store)
```python
from langchain.memory import VectorStoreRetrieverMemory

memory = VectorStoreRetrieverMemory(
    retriever=vectorstore.as_retriever(search_kwargs={"k": 5})
)
# Stores memories in vector DB, retrieves relevant ones
```

### Entity Memory
```python
from langchain.memory import ConversationEntityMemory
memory = ConversationEntityMemory(llm=llm)
# Tracks entities (people, places, things) mentioned
# "Remember: Raushan prefers dark mode and uses Laravel"
```

---

## 3. Persistent Memory (Redis)

```python
from langchain_community.chat_message_histories import RedisChatMessageHistory

history = RedisChatMessageHistory(
    session_id="user_123",
    url="redis://localhost:6379"
)

history.add_user_message("Hello!")
history.add_ai_message("Hi! How can I help?")

# Retrieve
messages = history.messages
```

---

## 4. Agent Communication Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Sequential** | Agent A → Agent B → Agent C | Pipeline processing |
| **Supervisor** | Boss assigns to workers | Complex tasks |
| **Debate** | Agents discuss/argue | Better decisions |
| **Voting** | Multiple agents vote | Consensus |
| **Hierarchical** | Multi-level supervisors | Large systems |

---

## 🎯 Practice Tasks
- [ ] Build a 2-agent system (researcher + coder)
- [ ] Implement supervisor pattern
- [ ] Add vector store memory for long-term recall
- [ ] Use Redis for persistent chat history
- [ ] Create a debate between two agents

---

*Next: [Production Agents →](./04_PRODUCTION_AGENTS.md)*
