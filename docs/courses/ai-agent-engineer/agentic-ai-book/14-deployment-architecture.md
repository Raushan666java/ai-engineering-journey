## Chapter 14: Deployment Architecture

### 14.1 Wrapping the Agent in an API

You already know this half — FastAPI. The agent (whether a hand-rolled loop or a compiled LangGraph graph) sits behind a standard endpoint:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AgentRequest(BaseModel):
    message: str
    thread_id: str

@app.post("/agent/chat")
async def chat(req: AgentRequest):
    config = {"configurable": {"thread_id": req.thread_id}}
    result = graph_app.invoke({"messages": [{"role": "user", "content": req.message}]}, config=config)
    return {"response": result["messages"][-1].content}
```

### 14.2 Where State Lives

For anything beyond a toy demo, move the LangGraph checkpointer from SQLite to Postgres (`langgraph-checkpoint-postgres`) so multiple API workers/processes share consistent state — SQLite doesn't handle concurrent access well under real load.

### 14.3 Deployment on Your Existing Infra

Your Hetzner VPS + Cloudflare Tunnel setup (already running your ChromaDB memory server) is a perfectly good home for this:

```
Cloudflare Tunnel ──► FastAPI (agent endpoint) ──► LangGraph app
                                                  ├──► Postgres (checkpoints + logs)
                                                  ├──► ChromaDB (RAG/long-term memory)
                                                  └──► Laravel APIs (real actions)
```

### 14.4 Triggering Agents From n8n

Rather than replacing your n8n workflows, treat the deployed agent as **one more node type**: an HTTP Request node in n8n calling your `/agent/chat` endpoint. This lets you keep n8n for what it's good at (scheduled, fixed-sequence automation) while delegating the genuinely unpredictable/branching decision-making sub-tasks to the agent — a hybrid architecture that's honestly often *better* than making everything "agentic," since it keeps cost and unpredictability contained to only the parts of the workflow that truly need it.

### 14.5 Streaming Responses

For anything user-facing, stream tokens/tool-call progress rather than waiting for the full multi-step loop to finish silently — LangGraph supports streaming intermediate node outputs, which you can forward over Server-Sent Events or WebSockets so the frontend can show "checking order status... calculating... sending notification..." as it happens, rather than a long silent wait.

### 14.6 Milestone Project for This Chapter

Deploy your Chapter 9 supervisor agent behind a FastAPI endpoint on your VPS, with Postgres-backed checkpointing, and wire it up as an HTTP node inside one real n8n workflow — confirming the hybrid fixed-pipeline + agent architecture actually works end to end.

---

*(Continued in Part V — Applied)*

