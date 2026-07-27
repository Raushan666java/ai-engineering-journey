---
id: 04-phase3-agents-langgraph-mcp
slug: /ai-agent-engineer/04-phase3-agents-langgraph-mcp
title: "Phase 3 — AI Agents: LangGraph, CrewAI, MCP"
sidebar_label: "Phase 3 — AI Agents: LangGraph, CrewAI, MCP"
sidebar_position: 5
---
# Phase 3 — AI Agents: LangGraph, CrewAI, MCP

**Duration:** Weeks 6-8, ~35 hours
**Goal:** Build agent state machines with LangGraph, multi-agent crews with CrewAI, and MCP clients that connect LLMs to tools. Rebuild your Purvanchal Flow Studio orchestration layer from n8n to LangGraph.

---


<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-agent-engineer/04-phase3-agents-langgraph-mcp/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | ReAct pattern (think ? act ? observe ? repeat) | 2 | Explain agent loop vs single LLM call in one sentence |
| 2 | Tool calling deep-dive | 1.5 | Write a tool schema with nested object parameters |
| 3 | LangGraph: StateGraph, nodes, edges | 3 | Build a 3-node linear graph from scratch |
| 4 | Conditional edges and routing | 2.5 | Write a conditional edge based on a custom state field |
| 5 | LangGraph persistence (checkpointer) | 2 | Kill a graph mid-execution and resume it |
| 6 | Human-in-the-loop patterns | 1.5 | Describe a real use case for interrupt/resume |
| 7 | CrewAI: agents, tasks, crews, processes | 2.5 | Build a 2-agent crew (researcher + writer) |
| 8 | MCP protocol spec — 3 primitives | 3 | Map tools/resources/prompts to your existing MCP server |
| 9 | Building an MCP client | 2.5 | Write a client that connects to your memory server |
| 10 | Agent memory patterns | 2 | Distinguish short-term vs long-term memory in your system |
| 11 | Multi-agent orchestration patterns | 2 | Sketch a CRM assistant with 3 agents, justify the pattern |
| 12 | Agent evaluation | 2 | Describe 2 concrete ways to test an agent |
| 13 | Cost/latency in multi-step agent chains | 1.5 | Estimate per-run cost of a 4-step agent chain |
| 14 | OpenAI Agents SDK | 2 | Build an agent using OpenAI Agents SDK with built-in tools |
| 15 | Advanced MCP server development | 2 | Add resources + prompts to your MCP server, not just tools |

---

## 3.1 The ReAct Pattern

**The key insight:** A single LLM call returns text. An agent loops: think ? act ? observe ? repeat.

```
User: "Book a meeting with John tomorrow at 2pm"

Agent loop iteration 1:
  Think: "I need to check John's calendar first"
  Act: [calls check_calendar("John", "2026-06-25")]
  Observe: "John is free at 2pm"

Agent loop iteration 2:
  Think: "John is free, I should book the slot"
  Act: [calls create_event("John", "2026-06-25", "14:00")]
  Observe: "Event created successfully"

Agent loop iteration 3:
  Think: "The event is booked. I should tell the user."
  Act: [returns response to user]
```

```python
# Minimal ReAct loop implementation
def react_loop(tools: dict[str, callable], user_input: str, max_iterations: int = 5) -> str:
    messages = [{"role": "user", "content": user_input}]

    for i in range(max_iterations):
        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            tools=[t["spec"] for t in tools.values()],
        )
        msg = response.choices[0].message

        if msg.content and not msg.tool_calls:
            return msg.content  # Final answer

        messages.append(msg)
        for tc in msg.tool_calls:
            result = tools[tc.function.name]["fn"](**json.loads(tc.function.arguments))
            messages.append({
                "role": "tool",
                "tool_call_id": tc.id,
                "content": str(result),
            })

    return "Max iterations reached"
```

### Exercise

Explain the difference between a single LLM call and an agent loop in one sentence that a non-technical client would understand. Example: "A single call answers your question. An agent checks, tries, fails, retries, and then answers — like a person researching instead of guessing."

---

## 3.2 Tool Calling Deep-Dive

### Nested parameter schemas


```python
# Tool that creates a booking — nested address object
create_booking_schema = {
    "type": "function",
    "function": {
        "name": "create_booking",
        "description": "Create a booking with customer details",
        "parameters": {
            "type": "object",
            "properties": {
                "customer": {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string"},
                        "phone": {"type": "string"},
                        "email": {"type": "string", "format": "email"},
                    },
                    "required": ["name", "phone"],
                },
                "booking": {
                    "type": "object",
                    "properties": {
                        "property_id": {"type": "integer"},
                        "amount": {"type": "number"},
                        "payment_method": {
                            "type": "string",
                            "enum": ["upi", "cash", "card", "cheque"],
                        },
                    },
                    "required": ["property_id", "amount"],
                },
            },
            "required": ["customer", "booking"],
        },
    },
}
```

### How the model decides which tool to call


The model reads the `description` field and the parameter names/types to decide. **Clear descriptions are critical** — the function name and parameter descriptions are what the model sees, not your code comments.

```python
# Bad — model won't understand when to call this
tool_spec = {
    "name": "process",
    "parameters": {"type": "object", "properties": {"a": {"type": "string"}, "b": {"type": "integer"}}},
}

# Good — model can route correctly
tool_spec = {
    "name": "search_knowledge_base",
    "description": "Search the vector database for relevant documents",
    "parameters": {
        "type": "object",
        "properties": {
            "query": {"description": "The search query"},
            "top_k": {"description": "Number of results to return"},
        },
    },
}
```

### Exercise

Write a tool schema with 3 levels of nesting (e.g., a booking tool where each booking has an array of payment installments, each with date and amount). Hand-write it, don't generate it.

---

## 3.3 LangGraph: StateGraph, Nodes, Edges

### State definition


```python
from typing import TypedDict, Optional, Annotated
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

class PipelineState(TypedDict):
    topic: str
    lyrics: Optional[str]
    audio_path: Optional[str]
    vocal_path: Optional[str]
    video_clips: list[str]
    final_video_path: Optional[str]
    error: Optional[str]
    retry_count: int
```

### Node implementation


Each node is a function that takes state and returns a partial state update:

```python
def generate_lyrics_node(state: PipelineState) -> dict:
    """Generate Bhojpuri lyrics from the topic."""
    response = call_llm(
        f"Write Bhojpuri song lyrics about {state['topic']}. "
        f"2 verses, 1 chorus, Bhojpuri language."
    )
    return {"lyrics": response}
```

### Graph construction


```python
graph = StateGraph(PipelineState)

# Add nodes
graph.add_node("generate_lyrics", generate_lyrics_node)
graph.add_node("generate_music", ace_step_node)
graph.add_node("generate_vocals", coqui_xtts_node)
graph.add_node("source_clips", moneyprinterturbo_node)
graph.add_node("compose_video", ffmpeg_compose_node)
graph.add_node("handle_failure", failure_recovery_node)

# Set entry point
graph.set_entry_point("generate_lyrics")

# Add edges
graph.add_edge("generate_lyrics", "generate_music")
graph.add_edge("generate_music", "generate_vocals")
graph.add_edge("generate_vocals", "source_clips")
graph.add_edge("source_clips", "compose_video")

# Conditional edge — the part n8n can't express cleanly
def should_retry(state: PipelineState) -> str:
    if state.get("error") and state["retry_count"] < 3:
        return "retry"
    return "done"

graph.add_conditional_edges(
    "compose_video",
    should_retry,
    {"retry": "handle_failure", "done": END},
)
graph.add_edge("handle_failure", "generate_music")  # Retry from music stage

# Compile
checkpointer = MemorySaver()
app = graph.compile(checkpointer=checkpointer)
```

### Running the graph


```python
# Initial state
initial = {
    "topic": "Bhojpuri village life",
    "lyrics": None,
    "audio_path": None,
    "vocal_path": None,
    "video_clips": [],
    "final_video_path": None,
    "error": None,
    "retry_count": 0,
}

# Run with a thread_id for checkpointing
result = app.invoke(initial, config={"configurable": {"thread_id": "purvanchal-001"}})
print(result["final_video_path"])
```

### Exercise

Build a throwaway 3-node linear graph — no external calls, just print statements that simulate work. Confirm the graph runs in order. Then add a conditional edge. Then break a node and confirm the retry mechanism triggers. Do this before touching the real Purvanchal pipeline.

---

## 3.4 Conditional Edges

Conditional edges are where LangGraph separates from visual orchestrators. n8n has "IF" nodes. LangGraph has **functions** that inspect state and return the next node name.

### Routing based on output quality


```python
def route_by_quality(state: PipelineState) -> str:
    """Route based on whether lyrics meet quality threshold."""
    lyrics = state.get("lyrics", "")
    if len(lyrics) < 100:  # Too short, regenerate
        return "regenerate"
    if "error" in lyrics.lower():
        return "handle_failure"
    return "proceed"

# In graph construction:
graph.add_conditional_edges(
    "generate_lyrics",
    route_by_quality,
    {"regenerate": "generate_lyrics", "proceed": "generate_music", "handle_failure": "handle_failure"},
)
```

### Why conditional edges matter for your portfolio


Visual examples: generic tutorials show `router.add_conditional_edges("classify", ...)`. Your pipeline shows **real business logic** — retry based on output length, quality checks, failure recovery. That's the difference between "I read the docs" and "I built in production."

### Exercise

Write a conditional edge function that routes based on a custom state field (e.g., `output_quality_score > 0.7`). Wire it into a 2-node graph where one path is "retry" and the other is "done."

---

## 3.5 LangGraph Persistence (Checkpointer)

### Why this matters for media pipelines


Your Purvanchal pipeline generates music files that take 2-5 minutes each. If the server crashes at "compose_video," n8n restarts from the beginning. With LangGraph's checkpointer, it resumes from "compose_video" — 4 nodes of work saved.

```python
from langgraph.checkpoint.memory import MemorySaver
from langgraph.checkpoint.sqlite import SqliteSaver

# In-memory (for prototyping)
checkpointer = MemorySaver()

# SQLite (for production — survives server restart)
checkpointer = SqliteSaver.from_conn_string("checkpoints.db")

app = graph.compile(checkpointer=checkpointer)

# Resume a crashed pipeline
previous_state = app.get_state(config={"configurable": {"thread_id": "purvanchal-001"}})
print(f"Pipeline was at node: {previous_state.next}")
result = app.invoke(None, config={"configurable": {"thread_id": "purvanchal-001"}})
```

### Exercise

Start a graph run, kill it mid-execution (Ctrl+C), then resume it using the same thread_id. Confirm the state survives and the graph continues from where it stopped.

---

## 3.6 Human-in-the-Loop (Interrupt/Resume)

Some pipeline stages need approval before proceeding — spending money on API calls, publishing content, approving generated lyrics.

```python
from langgraph.constants import interrupt

def generate_lyrics_node(state: PipelineState) -> dict:
    lyrics = call_llm(...)
    # Pause and ask for human approval
    approved = interrupt({"lyrics": lyrics, "action": "approve_lyrics"})
    if not approved:
        return {"error": "Human rejected lyrics", "retry_count": state["retry_count"] + 1}
    return {"lyrics": lyrics}

# Human approves later:
app.invoke(
    None,
    config={
        "configurable": {"thread_id": "purvanchal-002"},
        "interrupt_after": ["generate_lyrics"],
    },
)
```

### Exercise

Describe one real use case from your own work where this pattern would prevent a costly automated mistake. Write it down — it's an interview talking point.

---

## 3.7 CrewAI: Agents, Tasks, Crews

### Core concepts


```python
from crewai import Agent, Task, Crew, Process

researcher = Agent(
    role="Research Analyst",
    goal="Find relevant information about the given topic",
    backstory="Expert researcher who finds accurate, relevant information.",
    tools=[search_tool, fetch_webpage_tool],
    verbose=True,
)

lyricist = Agent(
    role="Bhojpuri Lyricist",
    goal="Write authentic Bhojpuri lyrics based on research",
    backstory="You are a poet specializing in Bhojpuri folk music.",
    tools=[],
    verbose=True,
)
```

### Tasks


```python
research_task = Task(
    description="Research the topic '{topic}' and provide key themes and vocabulary.",
    expected_output="3-5 key themes with relevant Bhojpuri phrases",
    agent=researcher,
)

lyrics_task = Task(
    description="Write 2 verses and 1 chorus in Bhojpuri based on the research.",
    expected_output="Complete lyrics with verse-chorus structure",
    agent=lyricist,
)
```

### Crew execution


```python
crew = Crew(
    agents=[researcher, lyricist],
    tasks=[research_task, lyrics_task],
    process=Process.sequential,  # or Process.hierarchical
    verbose=True,
)

result = crew.kickoff(inputs={"topic": "Bhojpuri village life"})
print(result)
```

### Sequential vs Hierarchical


| Process | When to use |
|---------|-------------|
| **Sequential** | Simple pipelines, clear dependency order (research ? write ? publish) |
| **Hierarchical** | Complex tasks where a manager agent decomposes work and delegates |

### Exercise

Build a 2-agent throwaway crew (researcher + writer) without looking at docs. Run it on a topic of your choice. This is the CrewAI equivalent of the "3-node linear graph" exercise from LangGraph.

---

## 3.8 MCP Protocol Spec

### The 3 Primitives


| Primitive | What it does | Analogy |
|-----------|-------------|---------|
| **Tools** | Actions the LLM can invoke (function calling) | Like an API endpoint |
| **Resources** | Data the LLM can read (files, DB records) | Like a GET endpoint |
| **Prompts** | Pre-built prompt templates | Like a route with a view |

### Message types


```
Client ? Server:
  - initialize (handshake)
  - tools/list
  - tools/call
  - resources/list
  - resources/read
  - prompts/list
  - prompts/get

Server ? Client:
  - initialize.result
  - tools.list.result
  - tools.call.result
  - resources.list.result
  - resources.read.result
```

### Your existing MCP server (`apex_memory_mcp.py`)


```python
# You already have something like this:
from mcp import Server

server = Server("memory-server")

@server.tool("remember")
async def remember(key: str, value: str):
    await chroma_client.add(key, value)

@server.tool("recall")
async def recall(query: str) -> str:
    results = await chroma_client.search(query)
    return results[0]["text"] if results else "No memory found"

@server.resource("memory://stats")
async def memory_stats(uri: str) -> str:
    return json.dumps({"count": await chroma_client.count()})
```

### Exercise

Map your existing MCP server against the 3 primitives. Which tools does it expose? Which resources? Which prompts? Write this mapping down — you'll use it when discussing MCP in interviews.

---

## 3.9 Building an MCP Client

You've built an MCP **server** (your memory server). Now build a client that connects to it.

```python
from mcp import ClientSession
from mcp.client.stdio import stdio_client

async def main():
    async with stdio_client(["python", "apex_memory_mcp.py"]) as (read, write):
        async with ClientSession(read, write) as session:
            # List tools
            tools = await session.list_tools()
            for tool in tools.tools:
                print(f"Tool: {tool.name} — {tool.description}")

            # Call a tool
            result = await session.call_tool(
                "recall",
                {"query": "What did I work on yesterday?"}
            )
            print(f"Result: {result.content[0].text}")

asyncio.run(main())
```

### Integration: MCP client as a LangGraph tool


```python
from langgraph.prebuilt import ToolNode

async def recall_memory(query: str) -> str:
    async with stdio_client(["python", "apex_memory_mcp.py"]) as (read, write):
        async with ClientSession(read, write) as session:
            result = await session.call_tool("recall", {"query": query})
            return result.content[0].text

# Use in LangGraph
memory_tool = ToolNode([recall_memory])
graph.add_node("query_memory", memory_tool)
```

### Exercise

Write a minimal MCP client that connects to your existing memory server and calls one tool (e.g., `recall`). Confirm it returns data from your ChromaDB. This single integration demonstrates MCP client + LangGraph + your existing infra in one artifact.

---

## 3.10 Agent Memory Patterns

### Short-term memory (conversation buffer)


Stays in the context window. Automatically managed by the LLM API:

```python
messages = [
    {"role": "system", "content": system_prompt},
    {"role": "assistant", "content": "I found the membership fee is ?12,000/year."},
    {"role": "user", "content": "What about the joining fee?"},
]
```

### Long-term memory (vector store)


Your ChromaDB server. Explicit retrieval needed:

```python
def agent_with_memory(user_query: str, user_id: str):
    # Check long-term memory
    relevant_memories = recall_from_chroma(user_id, user_query)
    system_prompt = f"""Previous context:
    {relevant_memories}
    Answer the user's question based on context and conversation."""
    
    # Short-term memory in messages
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_query},
    ]
    return call_llm(messages)
```

### What your system is missing


You have long-term memory (ChromaDB server). You're likely missing:
- **Conversation summaries** — after N turns, summarize and store in memory
- **Entity extraction** — extract key entities (project names, dates, decisions) and store them as structured memory

### Exercise

Identify what short-term memory your current agent pipelines are missing. Add a simple conversation summary step: after every 5 turns, tell the LLM "summarize this conversation" and store the summary in ChromaDB.

---

## 3.11 Multi-Agent Orchestration Patterns

### Supervisor/Worker


```
Supervisor agent --? Sales agent
                 --? Follow-up agent
                 --? Report agent
```

Supervisor delegates tasks. Workers report back. Supervisor decides next action.

**Best for:** Complex workflows where a central coordinator maintains context.

### Peer-to-Peer


```
Sales agent ?--? Follow-up agent
     ¦
Follow-up agent ?--? Report agent
```

Agents communicate directly. No central coordinator.

**Best for:** Independent agents that share information but don't need tight coordination.

### Applied to a CRM assistant


```
Supervisor
  +-- Sales Agent: handles inquiries, booking requests
  +-- Follow-up Agent: sends reminders, follow-ups
  +-- Report Agent: generates daily/weekly reports
```

**Why supervisor/worker fits here:** The Supervisor maintains customer context. Sales doesn't need to know about reports. Report doesn't need to know about active sales.

### Exercise

Sketch a 3-agent multi-agent system for one of your own projects (ApexERP, Purvanchal, or the CRM example). Draw the agents, the communication flow, and justify the pattern choice.

---

## 3.12 Agent Evaluation

Non-deterministic output makes testing hard. Traditional assertions don't work for agent behavior.

### Evaluation method 1: Checklist assertions


```python
def test_lyrics_generation():
    topic = "village life"
    result = generate_lyrics(topic)
    
    assert "Bhojpuri" in result["language"] or len(result["verses"]) > 0
    
# LangSmith equivalent: define evaluator per step
from langsmith import traceable

@traceable
def evaluate_lyrics(output: dict) -> int:
    """Score 1-5 based on output criteria."""
    score = 5
    if len(output.get("lyrics", "")) < 100:
        score -= 2
    if "error" in output.get("lyrics", "").lower():
        score -= 3
    return score
```

### Evaluation method 2: Expected trajectory


Compare the agent's actual tool-call sequence against an expected sequence:

```python
expected_sequence = ["search_kb", "generate_answer"]
actual_sequence = [call["name"] for call in trace.calls]

assert actual_sequence[:2] == expected_sequence
```

### Evaluation method 3: LLM-as-judge


```python
def evaluate_answer(question: str, answer: str, context: str) -> dict:
    prompt = f"""
    Question: {question}
    Context: {context}
    Answer: {answer}
    
    Rate the answer on:
    1. Accuracy (1-5): Is it factually correct based on the context?
    2. Completeness (1-5): Does it fully answer the question?
    3. Grounding (1-5): Does it cite sources appropriately?
    """
    return call_llm_as_judge(prompt)
```

### Exercise

Write 2 concrete evaluation checks for one of your agents. Don't just run it and say "looks right." Write an assertion, a trajectory check, or an LLM-as-judge prompt.

---

## 3.13 Cost and Latency in Multi-Step Agent Chains

### Why costs add up fast


| Step | Model | Input tokens | Output tokens | Cost |
|------|-------|-------------|--------------|------|
| Generate lyrics | GPT-4 | 300 | 200 | $0.009 + $0.012 = $0.021 |
| Generate music API | ACE-Step | — | — | $0.005 (API call) |
| Evaluate quality | GPT-4-mini | 500 | 50 | $0.00075 + $0.0003 = $0.001 |
| Total per pipeline run | | | | ~$0.03 |

At 100 pipeline runs/day: $3/day, $90/month. At 1000 runs/day: $30/day, $900/month.

### Optimization strategies


```python
# 1. Use cheaper models for intermediate steps
def evaluate_lyrics(lyrics: str) -> bool:
    response = openai.chat.completions.create(
        model="gpt-4o-mini",  # Cheaper than gpt-4
        messages=[{"role": "user", "content": f"Rate these lyrics: {lyrics}"}],
        max_tokens=50,
    )
    return "good" in response.choices[0].message.content.lower()

# 2. Cache repeating operations
cache = {}

def get_embedding(text: str) -> list[float]:
    if text in cache:
        return cache[text]
    embedding = openai.embeddings.create(input=text, model="text-embedding-3-small")
    cache[text] = embedding.data[0].embedding
    return cache[text]

# 3. Batch small LLM calls
# Instead of 3 separate calls, combine into one
prompt = """Analyze these 3 items and return JSON:
Item 1: {item1}
Item 2: {item2}
Item 3: {item3}
Return: {{"analysis": [item1_score, item2_score, item3_score]}}"""
```

### Exercise

Estimate the per-run cost of a 4-step agent chain using your actual models and typical token counts. Write down: per-step cost, per-run cost, daily cost at 50 runs. This calculation is a direct interview question.

---

## Phase 3 Project: LangGraph Purvanchal Flow Studio

### What you're building


Replace the n8n orchestration of your Bhojpuri content pipeline with a LangGraph state machine.

### State graph design


```
generate_lyrics --? generate_music --? generate_vocals --? source_clips --? compose_video
                                                                                ¦
                                                                          +-----------+
                                                                          ¦           ¦
                                                                      success       failure
                                                                          ¦       (retry < 3)
                                                                          ¦           ¦
                                                                         END    handle_failure --? generate_music (retry)
```

### Node implementations


Each node wraps an existing external tool call:

```python
def ace_step_node(state: PipelineState) -> dict:
    """Generate instrumental music from lyrics using ACE-Step API."""
    try:
        response = requests.post(
            ACE_STEP_URL,
            json={"lyrics": state["lyrics"], "style": "bhojpuri-folk"},
            headers={"Authorization": f"Bearer {settings.ace_step_key}"},
            timeout=300,  # 5 minute timeout for music generation
        )
        response.raise_for_status()
        audio_path = save_audio(response.content)
        return {"audio_path": audio_path, "error": None}
    except Exception as e:
        return {
            "error": f"ACE-Step failed: {e}",
            "retry_count": state["retry_count"] + 1,
        }

def coqui_xtts_node(state: PipelineState) -> dict:
    """Generate vocal track from lyrics + instrumental."""
    # Uses Coqui XTTS or similar TTS API
    ...

def moneyprinterturbo_node(state: PipelineState) -> dict:
    """Source video clips based on lyrics content."""
    ...

def ffmpeg_compose_node(state: PipelineState) -> dict:
    """Combine audio and video into final output."""
    ...
```

### Project structure


```
purvanchal-flow-studio/
+-- pipeline/
¦   +-- state.py           # PipelineState TypedDict
¦   +-- graph.py           # StateGraph construction
¦   +-- nodes/
¦   ¦   +-- __init__.py
¦   ¦   +-- lyrics.py      # generate_lyrics_node
¦   ¦   +-- music.py       # ace_step_node
¦   ¦   +-- vocals.py      # coqui_xtts_node
¦   ¦   +-- clips.py       # moneyprinterturbo_node
¦   ¦   +-- compose.py     # ffmpeg_compose_node
¦   ¦   +-- failure.py     # failure_recovery_node
¦   +-- config.py          # Settings via pydantic-settings
+-- api/
¦   +-- main.py            # FastAPI app with pipeline endpoints
¦   +-- schemas.py         # Request/response models
+-- .env.example           # API keys with placeholders
+-- Dockerfile
+-- docker-compose.yml
+-- README.md              # Architecture diagram, setup, demo
```

### n8n vs LangGraph comparison write-up


Create `docs/n8n-vs-langgraph.md` covering:

| Dimension | n8n | LangGraph |
|-----------|-----|-----------|
| **Prototyping speed** | Fast — drag, connect, done | Slower — code, debug, compile |
| **Conditional logic** | Visual IF nodes | Arbitrary Python functions |
| **State persistence** | None (no checkpointer) | Built-in checkpointer |
| **Crash recovery** | Full restart | Resume from failed node |
| **Testability** | Manual run | Unit tests on node functions |
| **Version control** | JSON export | Git-friendly Python |
| **Non-technical maintenance** | Possible | Impossible |

**When to use n8n:** Rapid prototyping, stakeholder-visible workflows, simple linear pipelines.

**When to use LangGraph:** Complex conditional routing, long-running pipelines, production reliability requirements.

### Exercise

Run both pipelines on the same input topic. Measure: total execution time, number of API calls, manual interventions needed, recovery from a simulated crash. Document the differences.

---

## 3.14 OpenAI Agents SDK

OpenAI released the Agents SDK as a lightweight alternative to LangGraph for simpler agent patterns. It's worth knowing because (a) clients ask about it and (b) it's genuinely faster for linear tool-use chains.

### Key concepts


| Concept | LangGraph | OpenAI Agents SDK |
|---------|-----------|-------------------|
| Agent definition | StateGraph + nodes | `Agent` class with instructions + tools |
| Tool calling | ToolNode + bind_tools | Decorator-based `@function_tool` |
| Handoffs | Conditional edges | `handoffs` param |
| Guardrails | Custom node | `input_guardrails` param |
| Persistence | Checkpointer | Built-in, no config |

### Basic agent


```python
from agents import Agent, Runner, function_tool

@function_tool
def get_weather(location: str) -> str:
    """Get the current weather for a location."""
    return f"The weather in {location} is 72°F and sunny."

agent = Agent(
    name="Weather agent",
    instructions="You are a helpful weather assistant.",
    tools=[get_weather],
)

result = Runner.run_sync(agent, "What's the weather in Dubai?")
print(result.final_output)
# The weather in Dubai is 72°F and sunny.
```

### Multi-agent with handoffs


```python
from agents import Agent, Runner

# Specialist agents
spanish_agent = Agent(
    name="Spanish agent",
    instructions="You translate English to Spanish.",
)

english_agent = Agent(
    name="English agent",
    instructions="You translate Spanish to English.",
)

# Triage agent
triage_agent = Agent(
    name="Triage agent",
    instructions="Route the user to the right translation agent.",
    handoffs=[spanish_agent, english_agent],
)

result = Runner.run_sync(triage_agent, "Hola, ¿cómo estás?")
print(result.final_output)
# "Hello, how are you?"
```

### Comparison to LangGraph


| Dimension | OpenAI Agents SDK | LangGraph |
|-----------|------------------|-----------|
| Setup time | 5 minutes | 30 minutes |
| Complex routing | Limited | Arbitrary Python |
| State control | Minimal | Full control |
| Tracing | Built-in | Requires LangSmith |
| Cost monitoring | Built-in | Requires wrapper |
| Open source | Yes | Yes |

### Exercise

Build an agent with OpenAI Agents SDK that has 2 tools: `search_web` (mock) and `summarize_text`. Run it with 3 different queries. Then compare the code length against the equivalent LangGraph graph. When would you use one over the other?

---

## 3.15 Advanced MCP Server Development

Your existing MCP memory server exposes tools. MCP also supports **resources** (readable data) and **prompts** (templated prompts). Adding these makes your server more capable.

### MCP recap: 3 primitives


| Primitive | Purpose | Example |
|-----------|---------|---------|
| **Tools** | Action the LLM can invoke | `create_memory`, `search_memories` |
| **Resources** | Data the LLM can read | `file:///logs`, `memory:///recent` |
| **Prompts** | Pre-built prompt templates | `summarize-memories`, `extract-insights` |

### Adding resources


```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Advanced Memory Server")

# Tool — action
@mcp.tool()
def search_memories(query: str) -> list[dict]:
    return memory_store.search(query, top_k=5)

# Resource — readable data
@mcp.resource("memory://recent/{count}")
def recent_memories(count: int = 10) -> str:
    memories = memory_store.get_recent(count)
    return "\n---\n".join(
        f"[{m['id']}] {m['text']} (score: {m['score']})"
        for m in memories
    )

# Resource — static file
@mcp.resource("config://prompts/analyze")
def analyze_prompt() -> str:
    return """Analyze the following information and provide:
1. Key themes
2. Open questions
3. Recommended actions"""
```

### Adding prompt templates


```python
@mcp.prompt()
def summarize_memories(topic: str) -> str:
    """Generate a prompt to summarize all memories about a topic."""
    return f"""
Please review all memories related to "{topic}" and provide:
- A 3-sentence summary of what we know
- Any contradictions in the information
- Suggested next research questions

Memories to analyze:
{topic}
"""

@mcp.prompt()
def extract_action_items(text: str) -> str:
    return f"""
Extract action items from this text. Format as a table with:
| Action | Owner | Deadline | Priority |
|--------|-------|----------|----------|

Text: {text}
"""
```

### Dynamic resources with URI templates


```python
# Access patterns like memory:///search/acme or memory:///search/ranch
from mcp.server import ResourceTemplate

@mcp.resource("memory:///search/{query}")
async def search_resource(query: str) -> str:
    results = memory_store.search(query, top_k=3)
    if not results:
        return f"No memories found for '{query}'"
    return "\n".join(f"- {r['text']} (confidence: {r['score']:.2f})" for r in results)
```

### Testing your server


```bash
# With MCP Inspector
npx @anthropic-ai/mcp-inspector http://localhost:8000/mcp

# Or with a client
python -c "
from mcp import ClientSession, StdioServerParameters
import asyncio

async def test():
    params = StdioServerParameters(
        command='python', args=['memory_server.py']
    )
    async with ClientSession(params) as session:
        result = await session.list_resources()
        print('Resources:', result.resources)
        result = await session.list_prompts()
        print('Prompts:', result.prompts)

asyncio.run(test())
"
```

### Exercise

Add at least 1 resource and 1 prompt template to your MCP memory server. Test with MCP Inspector that both are discoverable. Then connect Claude Desktop to your server and verify the resource appears in the "Attach from MCP" menu.

---


interface PromptTemplate { name: string; template: string; variables: string[]; version: string }
class PromptEngine {
  private templates: Map&lt;string,PromptTemplate&gt; = new Map()
  register(t: PromptTemplate): void { this.templates.set(t.name, t) }
  render(name: string, vars: Record&lt;string,string&gt;): string {
    const t = this.templates.get(name); if(!t) throw new Error(`Template ${name} not found`)
    let result = t.template
    for(const v of t.variables) { if(vars[v] === undefined) throw new Error(`Variable ${v} not provided`); result = result.replace(`{{${v}}}`, vars[v]) }
    return result
  }
  listVersions(): string[] { return Array.from(this.templates.values()).map(t => `${t.name}@${t.version}`) }
  diff(t1: string, t2: string): string { const a = t1.split("\n"), b = t2.split("\n")
    const changes: string[] = []; const max = Math.max(a.length,b.length)
    for(let i=0;i&lt;max;i++) if(a[i] !== b[i]) changes.push(`L${i+1}: ${a[i]??""} | ${b[i]??""}`)
    return changes.join("\n")
  }
}
class ChatComposer {
  private system = ""; private examples: Array&lt;{input:string;output:string}&gt; = []
  setSystem(s: string): this { this.system = s; return this }
  addExample(input: string, output: string): this { this.examples.push({input,output}); return this }
  compose(userInput: string): Array&lt;{role:string;content:string}&gt; {
    const msgs: Array&lt;{role:string;content:string}&gt; = [{role:"system",content:this.system}]
    for(const ex of this.examples) { msgs.push({role:"user",content:ex.input}); msgs.push({role:"assistant",content:ex.output}) }
    msgs.push({role:"user",content:userInput}); return msgs
  }
}
export { PromptTemplate, PromptEngine, ChatComposer }
## Phase 3 Done Checkpoint

Before moving to Phase 4, you should be able to:

- [ ] Explain ReAct loop vs single LLM call in one sentence
- [ ] Build a 3-node LangGraph graph from scratch without copy-pasting
- [ ] Write a conditional edge function based on a custom state field
- [ ] Kill a running graph and resume it from the checkpoint
- [ ] Build a 2-agent CrewAI crew (researcher + writer)
- [ ] Write an MCP client that connects to your existing server and calls a tool
- [ ] Estimate per-run cost of a 4-step agent chain
- [ ] Argue when to use n8n vs LangGraph for a given workflow
- [ ] LangGraph Purvanchal pipeline produces output from end to end
- [ ] Build an agent with OpenAI Agents SDK and compare code to LangGraph
- [ ] Add resources + prompts to your MCP server, verify via MCP Inspector

**Estimated time to checkpoint:** 35-40 hours over 3 weeks.

[Next: Phase 4 — Production Hardening](05-phase4-production-hardening.md)
