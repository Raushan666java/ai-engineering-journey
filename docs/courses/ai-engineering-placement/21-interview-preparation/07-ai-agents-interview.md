# AI Agents Interview

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand agent architecture: perceive, reason, act, learn loops |
| LO2 | Build agents with tool use, memory, and planning capabilities |
| LO3 | Implement multi-agent systems with orchestration and communication |
| LO4 | Use LangGraph for stateful, controllable agent workflows |
| LO5 | Apply the Model Context Protocol (MCP) for standardized tool integration |
| LO6 | Design production-ready agent systems with safety, observability, and error handling |

## Introduction

Understanding ai agents interview is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering ai agents interview.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding ai agents interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how ai agents interview works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind ai agents interview
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Agent Architecture | Perception, reasoning, action, memory, learning loops |
| 7.2 | Tool-Using Agents | Tool definitions, execution, error handling, rate limiting |
| 7.3 | Agent Memory | Short-term, long-term, episodic, procedural memory stores |
| 7.4 | Planning & Reasoning | Task decomposition, ReAct, Plan-and-Execute, reflection |
| 7.5 | Multi-Agent Systems | Orchestrator-worker, peer-to-peer, debate, pipeline patterns |
| 7.6 | LangGraph | State graphs, nodes, edges, conditional routing |
| 7.7 | MCP (Model Context Protocol) | Standardized tool/resources, server/client architecture |
| 7.8 | Production Agents | Observability, safety, error recovery, cost optimization |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Agent Architecture] --> B[Tool-Using Agents]
    B --> C[Agent Memory]
    C --> D[Planning & Reasoning]
    D --> E[Multi-Agent Systems]
    E --> F[LangGraph]
    F --> G[MCP]
    G --> H[Production Agents]
```text

## 7.1 Agent Architecture

An AI agent is an autonomous system that perceives its environment, reasons about goals, takes actions, and learns from outcomes. The core loop:

**Perceive → Reason → Act → Observe → Learn**

**Components**:
- **LLM Core**: The reasoning engine. Decides what to do next based on current state, goals, and memory.
- **Tools**: Functions the agent can call (APIs, databases, calculators, search engines).
- **Memory**: Stores past interactions, learned information, and execution context.
- **Planning module**: Decomposes complex goals into sub-tasks, creates execution plans.
- **Safety guardrails**: Constraints on actions, input/output filtering, human-in-the-loop checks.

```python
from dataclasses import dataclass, field
from typing import Any, Callable
import json

@dataclass
class AgentState:
    messages: list[dict] = field(default_factory=list)
    memory: dict[str, Any] = field(default_factory=dict)
    tools: dict[str, Callable] = field(default_factory=dict)
    max_steps: int = 20
    current_step: int = 0

class Agent:
    def __init__(self, llm, tools: dict[str, Callable], system_prompt: str):
        self.llm = llm
        self.tools = tools
        self.system_prompt = system_prompt
        self.state = AgentState(tools=tools)

    async def run(self, user_input: str) -> str:
        self.state.messages.append({"role": "user", "content": user_input})
        self.state.current_step = 0

        while self.state.current_step < self.state.max_steps:
            self.state.current_step += 1

            response = await self.llm.generate(
                system=self.system_prompt,
                messages=self.state.messages,
                tools=self.state.tools,
            )

            if response.finish_reason == "stop":
                final = response.content
                self.state.messages.append({"role": "assistant", "content": final})
                return final

            if response.finish_reason == "tool_calls":
                self.state.messages.append({
                    "role": "assistant",
                    "content": response.content,
                    "tool_calls": response.tool_calls,
                })

                for tool_call in response.tool_calls:
                    result = await self.execute_tool(tool_call)
                    self.state.messages.append({
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": str(result),
                    })

        return "Max steps reached. Partial result: " + self.state.messages[-1]["content"]

    async def execute_tool(self, tool_call) -> Any:
        func_name = tool_call.function.name
        args = json.loads(tool_call.function.arguments)
        if func_name not in self.tools:
            return f"Error: Unknown tool '{func_name}'"
        try:
            result = await self.tools[func_name](**args)
            return result
        except Exception as e:
            return f"Error executing {func_name}: {e}"
```text

**Agent types**: Simple reflex (pre-programmed responses), model-based (maintains internal state), goal-based (works toward targets), utility-based (maximizes a score function), learning agents (improves through experience).

---

## 7.2 Tool-Using Agents

Tools are the agent's interface to the external world. Well-designed tool definitions are critical for agent success.

**Tool definition format**: Name, description, parameter schema (JSON Schema). The description is most important — it's how the LLM knows when to use the tool. Be verbose and specific.

**Execution patterns**: Sequential (one tool call at a time), parallel (multiple independent tool calls), iterative (tool calls in a loop), conditional (tool choice depends on previous results).

```python

## Tool definitions with Pydantic
from pydantic import BaseModel, Field
from typing import Optional

class WeatherToolParams(BaseModel):
    location: str = Field(description="City name, optionally with country code")
    units: Optional[str] = Field("celsius", description="Temperature units: celsius or fahrenheit")

class DatabaseQueryParams(BaseModel):
    sql: str = Field(description="The SQL query to execute")
    params: Optional[list] = Field(None, description="Query parameters")

class SendEmailParams(BaseModel):
    to: str = Field(description="Recipient email address")
    subject: str = Field(description="Email subject line")
    body: str = Field(description="Email body content")

## Tool implementations
import httpx

async def get_weather(location: str, units: str = "celsius") -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://api.weather.com/v1/current",
            params={"location": location, "units": units}
        )
        return response.json()

async def query_database(sql: str, params: Optional[list] = None) -> list[dict]:
    # Execute query (simplified)
    return [{"result": "sample"}]

async def send_email(to: str, subject: str, body: str) -> dict:
    # Send email via SMTP/API
    return {"status": "sent", "to": to, "subject": subject}

## Register tools with descriptions
tools = {
    "get_weather": {
        "fn": get_weather,
        "spec": {
            "name": "get_weather",
            "description": "Get current weather conditions for a location. Use this when the user asks about weather, temperature, or forecast.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string", "description": "City name"},
                    "units": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                },
                "required": ["location"],
            },
        },
    },
    "query_database": {
        "fn": query_database,
        "spec": {
            "name": "query_database",
            "description": "Execute a SQL query on the company database. Returns rows as JSON. Only use for SELECT queries.",
            "parameters": {
                "type": "object",
                "properties": {
                    "sql": {"type": "string", "description": "SELECT SQL query"},
                },
                "required": ["sql"],
            },
        },
    },
    "send_email": {
        "fn": send_email,
        "spec": {
            "name": "send_email",
            "description": "Send an email to a recipient. Use when the user wants to compose and send an email.",
            "parameters": {
                "type": "object",
                "properties": {
                    "to": {"type": "string", "description": "Recipient email"},
                    "subject": {"type": "string", "description": "Email subject"},
                    "body": {"type": "string", "description": "Email body"},
                },
                "required": ["to", "subject", "body"],
            },
        },
    },
}

## Tool execution with error handling and retry
async def safe_execute_tool(tool_call, tools: dict, max_retries: int = 2) -> str:
    func_name = tool_call.function.name
    args = json.loads(tool_call.function.arguments)
    tool = tools.get(func_name)
    if not tool:
        return f"Error: Unknown tool '{func_name}'. Available tools: {list(tools.keys())}"

    for attempt in range(max_retries):
        try:
            result = await tool["fn"](**args)
            return json.dumps(result, default=str)[:2000]  # truncate for context
        except httpx.TimeoutException:
            if attempt == max_retries - 1:
                return f"Error: {func_name} timed out after {max_retries} attempts"
            continue
        except Exception as e:
            return f"Error: {func_name} failed with: {str(e)}"
    return f"Error: {func_name} failed"
```text

**Tool design principles**: One tool per action (don't combine unrelated operations). Return structured data (JSON). Handle errors gracefully and return meaningful error messages. Implement timeouts. Rate-limit tool calls to prevent abuse.

---

## 7.3 Agent Memory

Memory enables agents to maintain context across interactions and learn from experience.

**Short-term memory**: The current context window (conversation history, current task state). Managed via sliding window or summarization.

**Long-term memory**: Persistent storage of facts, user preferences, and past interactions. Stored in a vector database or structured database. Retrieved on-demand.

**Episodic memory**: Records of specific past episodes (what happened, what the agent did, what the outcome was). Used for learning from past mistakes.

**Procedural memory**: Knowledge of how to perform tasks (plans, workflows, standard operating procedures). Can be learned or pre-programmed.

```python
import json
import sqlite3
from datetime import datetime
from typing import Optional

class LongTermMemory:
    def __init__(self, db_path: str = "agent_memory.db"):
        self.conn = sqlite3.connect(db_path)
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS episodic_memory (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT,
                timestamp TEXT,
                summary TEXT,
                embedding TEXT,
                details TEXT
            )
        """)
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS factual_memory (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT,
                fact TEXT,
                category TEXT,
                confidence REAL DEFAULT 1.0,
                created_at TEXT,
                updated_at TEXT
            )
        """)
        self.conn.commit()

    def store_episode(self, user_id: str, summary: str, details: dict) -> int:
        cursor = self.conn.execute(
            "INSERT INTO episodic_memory (user_id, timestamp, summary, details) VALUES (?, ?, ?, ?)",
            (user_id, datetime.now().isoformat(), summary, json.dumps(details))
        )
        self.conn.commit()
        return cursor.lastrowid

    def retrieve_relevant_episodes(self, user_id: str, query: str, limit: int = 5) -> list[dict]:
        # Simple keyword matching (replace with embedding similarity in production)
        cursor = self.conn.execute(
            "SELECT * FROM episodic_memory WHERE user_id = ? AND summary LIKE ? ORDER BY id DESC LIMIT ?",
            (user_id, f"%{query}%", limit)
        )
        return [dict(row) for row in cursor.fetchall()]

    def store_fact(self, user_id: str, fact: str, category: str, confidence: float = 1.0) -> int:
        cursor = self.conn.execute(
            """INSERT INTO factual_memory (user_id, fact, category, confidence, created_at, updated_at)
               VALUES (?, ?, ?, ?, ?, ?)""",
            (user_id, fact, category, confidence, datetime.now().isoformat(), datetime.now().isoformat())
        )
        self.conn.commit()
        return cursor.lastrowid

    def get_user_preferences(self, user_id: str) -> list[str]:
        cursor = self.conn.execute(
            "SELECT fact FROM factual_memory WHERE user_id = ? AND category = 'preference' ORDER BY updated_at DESC",
            (user_id,)
        )
        return [row[0] for row in cursor.fetchall()]

## Working memory for current task
class WorkingMemory:
    def __init__(self, max_tokens: int = 4000):
        self.context: list[dict] = []
        self.max_tokens = max_tokens
        self.task_state: dict = {}
        self.subtask_stack: list[str] = []

    def add_message(self, role: str, content: str, metadata: Optional[dict] = None) -> None:
        self.context.append({"role": role, "content": content, **(metadata or {})})
        self._trim_context()

    def _trim_context(self) -> None:
        # Estimate token count and trim oldest messages
        total = sum(len(m["content"]) // 4 for m in self.context)
        while total > self.max_tokens and len(self.context) > 2:
            self.context.pop(0)
            total = sum(len(m["content"]) // 4 for m in self.context)

    def get_context(self) -> list[dict]:
        return self.context

    def update_task_state(self, key: str, value: Any) -> None:
        self.task_state[key] = value

    def push_subtask(self, task: str) -> None:
        self.subtask_stack.append(task)

    def pop_subtask(self) -> Optional[str]:
        return self.subtask_stack.pop() if self.subtask_stack else None

    def clear(self) -> None:
        self.context = []
        self.task_state = {}
        self.subtask_stack = []
```text

---

## 7.4 Planning & Reasoning

Planning decomposes complex tasks into manageable steps. Reasoning ensures each step is grounded and correct.

**ReAct (Reasoning + Acting)**: Interleave reasoning traces ("Thought: ...") with actions ("Action: ..."). The thought process makes the agent's decisions transparent.

**Plan-and-Execute**: Generate a complete plan upfront, then execute steps sequentially. May re-plan when steps fail.

**Tree-of-Thoughts**: Explore multiple reasoning branches simultaneously. Maintain several candidate plans, evaluate progress, prune unpromising branches.

**Reflection**: After completing a task, the agent analyzes what went well or wrong and updates its memory. This is how agents learn from experience.

```python
from typing import Literal

class PlanningAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools

    async def plan_and_execute(self, task: str) -> str:
        # Step 1: Generate plan
        plan = await self._generate_plan(task)
        print(f"Plan: {plan}")

        # Step 2: Execute plan step by step
        results = []
        for step in plan["steps"]:
            result = await self._execute_step(step)
            results.append(result)

            # Step 3: Check if re-planning is needed
            if result.get("failed"):
                new_plan = await self._replan(task, results)
                return await self.plan_and_execute(f"{task}\nContext: {results}")

        # Step 4: Synthesize final answer
        final = await self._synthesize(task, plan, results)
        return final

    async def _generate_plan(self, task: str) -> dict:
        prompt = f"""Create a step-by-step plan for the following task.
For each step, specify:
- Which tool to use (or "no tool" for reasoning)
- What input to provide
- What the expected output should be

Task: {task}

Output as JSON with a "steps" array."""
        response = await self.llm.generate(prompt, temperature=0)
        return json.loads(response)

    async def _execute_step(self, step: dict) -> dict:
        if step.get("tool") == "no_tool":
            return {"result": "reasoning step completed", "failed": False}

        tool = self.tools.get(step["tool"])
        if not tool:
            return {"result": f"Unknown tool: {step['tool']}", "failed": True}

        try:
            result = await tool["fn"](**step.get("input", {}))
            return {"result": result, "failed": False}
        except Exception as e:
            return {"result": str(e), "failed": True}

    async def _replan(self, task: str, results: list) -> dict:
        prompt = f"""The following plan step failed. Create a revised plan.

Task: {task}
Completed steps: {results}

Revised plan (JSON format with 'steps' array):"""
        response = await self.llm.generate(prompt, temperature=0)
        return json.loads(response)

    async def _synthesize(self, task: str, plan: dict, results: list) -> str:
        prompt = f"""Based on the following plan and results, provide a final answer to the user.

Task: {task}
Plan: {plan['steps']}
Results: {results}

Final answer:"""
        return await self.llm.generate(prompt, temperature=0)

## Reflection agent
async def reflection_loop(agent, task: str, max_iterations: int = 3) -> str:
    context = {"attempts": []}

    for i in range(max_iterations):
        result = await agent.run(task)
        context["attempts"].append({"iteration": i, "result": result})

        # Self-reflection
        reflection_prompt = f"""Task: {task}
My response: {result}
Evaluate your response. Identify any issues, missing information, or errors.
If the response is satisfactory, say "SATISFACTORY". Otherwise, explain what needs improvement."""
        evaluation = await agent.llm.generate(reflection_prompt, temperature=0)

        if "SATISFACTORY" in evaluation:
            return result

        # Improve based on reflection
        task = f"{task}\n\nPrevious attempt failed. Feedback: {evaluation}"

    return context["attempts"][-1]["result"]
```text

---

## 7.5 Multi-Agent Systems

Multiple agents collaborate to solve complex tasks. Each agent has a specialized role.

**Architectures**:
- **Orchestrator-Worker**: A coordinator agent decomposes tasks and delegates to specialist agents.
- **Peer-to-Peer**: Agents communicate directly, each with specific expertise.
- **Debate**: Agents argue different positions to arrive at a consensus.
- **Pipeline**: Agents process sequentially — output of one is input to the next.
- **Supervisor**: An oversight agent monitors and coordinates the work of sub-agents.

```python
from enum import Enum

class AgentRole(Enum):
    RESEARCHER = "researcher"      # Gathers information
    ANALYST = "analyst"           # Analyzes data, finds patterns
    WRITER = "writer"             # Produces final content
    CRITIC = "critic"             # Reviews and provides feedback
    COORDINATOR = "coordinator"   # Manages workflow

@dataclass
class SpecializedAgent:
    role: AgentRole
    llm: Any
    tools: dict
    instructions: str

class Orchestrator:
    def __init__(self, coordinator: SpecializedAgent, workers: list[SpecializedAgent]):
        self.coordinator = coordinator
        self.workers = {w.role: w for w in workers}

    async def run(self, task: str) -> str:
        # Decompose task
        plan = await self._create_plan(task)
        print(f"Plan: {plan}")

        results = {}
        for step in plan["steps"]:
            role = AgentRole(step["assigned_to"])
            agent = self.workers.get(role)
            if not agent:
                continue

            result = await self._run_agent(agent, step["instruction"])
            results[role.value] = result

        # Synthesize results
        final = await self._synthesize(task, results)
        return final

    async def _create_plan(self, task: str) -> dict:
        prompt = f"""As the coordinator, create a plan to complete this task.
Assign each step to one of: researcher, analyst, writer, critic.

Task: {task}

Output JSON with "steps" array, each with "assigned_to" and "instruction"."""
        response = await self.coordinator.llm.generate(prompt)
        return json.loads(response)

    async def _run_agent(self, agent: SpecializedAgent, instruction: str) -> str:
        agent_instance = Agent(
            llm=agent.llm,
            tools=agent.tools,
            system_prompt=f"You are a {agent.role.value}. {agent.instructions}"
        )
        return await agent_instance.run(instruction)

    async def _synthesize(self, task: str, results: dict) -> str:
        prompt = f"""Task: {task}

Results from specialists:
{json.dumps(results, indent=2)}

Synthesize these results into a final, coherent answer."""
        return await self.coordinator.llm.generate(prompt)

## Debate pattern: two agents argue different positions
async def debate(agent_a: SpecializedAgent, agent_b: SpecializedAgent, topic: str, rounds: int = 3) -> str:
    a_position = await agent_a.llm.generate(
        f"Argue FOR: {topic}. Provide three key points."
    )
    b_position = await agent_b.llm.generate(
        f"Argue AGAINST: {topic}. Provide three key points."
    )
    transcript = [
        f"{agent_a.role.value}: {a_position}",
        f"{agent_b.role.value}: {b_position}",
    ]

    for i in range(rounds):
        a_response = await agent_a.llm.generate(
            f"Previous arguments:\n{transcript[-2]}\n\nYou said: {transcript[-1]}\n\nRebuttal:"
        )
        transcript.append(f"{agent_a.role.value} (round {i+1}): {a_response}")

        b_response = await agent_b.llm.generate(
            f"Previous arguments:\n{transcript[-2]}\n\nYou said: {transcript[-1]}\n\nRebuttal:"
        )
        transcript.append(f"{agent_b.role.value} (round {i+1}): {b_response}")

    # Judge
    judge_prompt = f"Given this debate on '{topic}', synthesize the best answer:\n\n" + "\n".join(transcript)
    return await agent_a.llm.generate(judge_prompt)
```text

**Communication patterns**: Agents communicate via messages (structured JSON), shared memory (a common workspace), or events (pub/sub). Message schemas should include: sender, receiver, message type, payload, timestamp, and conversation_id.

---

## 7.6 LangGraph

LangGraph enables building stateful, controllable agent workflows as directed graphs.

**Core concepts**:
- **State**: Shared data structure passed between nodes. Contains messages, agent state, and any custom fields.
- **Nodes**: Python functions that process the state. Each node typically calls an LLM or executes a tool.
- **Edges**: Define the flow between nodes. Can be conditional (function determines the next node).
- **Cycles**: LangGraph supports loops (agents loop until a condition is met).

```python
from typing import TypedDict, Annotated, Sequence
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor, ToolInvocation
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage, FunctionMessage
import operator

## Define agent state
class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    task: str
    steps_remaining: int

## Define nodes
async def call_model(state: AgentState, llm, tools):
    messages = state["messages"]
    response = await llm.ainvoke(messages, tools=tools)
    return {"messages": [response]}

async def execute_tools(state: AgentState, tool_executor):
    last_message = state["messages"][-1]
    if not last_message.tool_calls:
        return {"messages": []}

    results = []
    for tool_call in last_message.tool_calls:
        action = ToolInvocation(
            tool=tool_call["name"],
            tool_input=tool_call["args"],
        )
        response = await tool_executor.ainvoke(action)
        results.append(FunctionMessage(
            content=str(response),
            name=tool_call["name"],
        ))
    return {"messages": results}

## Conditional routing
def should_continue(state: AgentState) -> str:
    messages = state["messages"]
    last_message = messages[-1]
    if last_message.tool_calls:
        return "continue"
    return "end"

## Build the graph
def create_agent_graph(llm, tools):
    tool_executor = ToolExecutor(tools)

    workflow = StateGraph(AgentState)

    workflow.add_node("agent", lambda state: call_model(state, llm, tools))
    workflow.add_node("action", lambda state: execute_tools(state, tool_executor))

    workflow.set_entry_point("agent")

    workflow.add_conditional_edges(
        "agent",
        should_continue,
        {"continue": "action", "end": END},
    )

    workflow.add_edge("action", "agent")

    return workflow.compile()

## Example with human-in-the-loop
from langgraph.checkpoint import MemorySaver

def create_human_review_graph(llm, tools):
    tool_executor = ToolExecutor(tools)
    memory = MemorySaver()

    workflow = StateGraph(AgentState)

    async def call_model(state):
        messages = state["messages"]
        response = await llm.ainvoke(messages, tools=tools)
        return {"messages": [response]}

    async def human_review(state):
        last_message = state["messages"][-1]
        print(f"Actions requested: {last_message.tool_calls}")
        approval = input("Approve? (y/n): ")
        if approval.lower() == "y":
            return {"messages": []}  # proceed
        raise Exception("Human cancelled")

    async def execute_tools_node(state):
        last_message = state["messages"][-1]
        results = []
        for tool_call in last_message.tool_calls:
            action = ToolInvocation(
                tool=tool_call["name"],
                tool_input=tool_call["args"],
            )
            response = await tool_executor.ainvoke(action)
            results.append(FunctionMessage(content=str(response), name=tool_call["name"]))
        return {"messages": results}

    workflow.add_node("agent", call_model)
    workflow.add_node("human_review", human_review)
    workflow.add_node("action", execute_tools_node)

    workflow.set_entry_point("agent")

    workflow.add_conditional_edges(
        "agent",
        should_continue,
        {"continue": "human_review", "end": END},
    )

    workflow.add_edge("human_review", "action")
    workflow.add_edge("action", "agent")

    return workflow.compile(checkpointer=memory)
```text

**LangGraph advantages over chains**: Stateful (maintains complex state across steps), controllable (conditional routing, loops), human-in-the-loop (pauses for approval), persistence (checkpoints for recovery), streaming (stream state updates in real-time).

---

## 7.7 MCP (Model Context Protocol)

MCP standardizes how agents discover and interact with external tools, resources, and prompts. It's like USB-C for AI agents — a universal protocol for connecting LLMs with tools and data sources.

**Architecture**:
- **MCP Server**: Provides tools, resources, and prompt templates. Each server exposes a set of capabilities.
- **MCP Client**: Connects to servers, discovers capabilities, and invokes tools. Built into the agent.
- **Transport**: JSON-RPC over stdin/stdout (local) or HTTP+SSE (remote).

```python

## MCP Server implementation
from mcp.server import Server, NotificationOptions
from mcp.server.models import InitializationOptions
import mcp.server.stdio
import mcp.types as types

class DatabaseMCPServer:
    def __init__(self, db_connection):
        self.db = db_connection
        self.server = Server("database-mcp")

        # Register tools
        @self.server.list_tools()
        async def handle_list_tools() -> list[types.Tool]:
            return [
                types.Tool(
                    name="query",
                    description="Execute a SQL query on the database",
                    inputSchema={
                        "type": "object",
                        "properties": {
                            "sql": {"type": "string", "description": "SQL query"},
                        },
                        "required": ["sql"],
                    },
                ),
                types.Tool(
                    name="get_schema",
                    description="Get the database schema",
                    inputSchema={
                        "type": "object",
                        "properties": {},
                    },
                ),
            ]

        @self.server.call_tool()
        async def handle_call_tool(name: str, arguments: dict) -> list[types.TextContent]:
            if name == "query":
                result = self.db.execute(arguments["sql"])
                return [types.TextContent(type="text", text=str(result))]
            if name == "get_schema":
                schema = self.db.get_schema()
                return [types.TextContent(type="text", text=str(schema))]
            raise ValueError(f"Unknown tool: {name}")

        # Register resources (data sources)
        @self.server.list_resources()
        async def handle_list_resources() -> list[types.Resource]:
            return [
                types.Resource(
                    uri="database://tables",
                    name="Database Tables",
                    description="List of all database tables",
                    mimeType="application/json",
                ),
            ]

        @self.server.read_resource()
        async def handle_read_resource(uri: str) -> str:
            if uri == "database://tables":
                tables = self.db.get_table_names()
                return json.dumps(tables)
            raise ValueError(f"Unknown resource: {uri}")

    async def run(self):
        async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
            await self.server.run(
                read_stream,
                write_stream,
                InitializationOptions(
                    server_name="database-mcp",
                    server_version="1.0.0",
                ),
            )

## MCP Client (in the agent)
class MCPClient:
    def __init__(self):
        self.servers: dict[str, ServerSession] = {}
        self.tools: list[types.Tool] = []

    async def connect_server(self, name: str, command: str):
        # Spawn MCP server process
        process = await asyncio.create_subprocess_exec(
            *command.split(),
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        read, write = process.stdout, process.stdin
        session = await self._create_session(read, write)
        self.servers[name] = session

        # Discover tools
        result = await session.list_tools()
        self.tools.extend(result.tools)

    async def execute_tool(self, tool_name: str, arguments: dict) -> Any:
        for server_name, session in self.servers.items():
            result = await session.call_tool(tool_name, arguments)
            if result is not None:
                return result.content
        raise ValueError(f"Tool {tool_name} not found on any connected server")
```text

**Benefits of MCP**: Standardized integration (no custom adapters for each tool), dynamic discovery (new tools auto-available), security boundaries (server controls access), composability (combine multiple MCP servers).

---

## 7.8 Production Agents

Building production-ready agent systems requires addressing reliability, safety, observability, and cost.

**Observability**: Log every step (thought, tool call, result, errors). Track token usage, latency, and cost per agent run. Use distributed tracing (LangSmith, OpenTelemetry) to follow agent execution across tool calls.

**Error recovery**: Implement retry with exponential backoff for transient failures. Use circuit breakers for external APIs. Have fallback strategies when primary tools fail. Save agent state periodically for recovery.

**Safety**: Rate-limit tool calls (per user, per session). Set max steps, max tokens, and timeout for agent runs. Implement human-in-the-loop for high-risk actions (database writes, payments, account changes). Validate all tool inputs and outputs.

```python
import time
from typing import Optional
from dataclasses import dataclass

@dataclass
class AgentRunConfig:
    max_steps: int = 25
    max_tokens: int = 16000
    timeout_seconds: int = 120
    max_tool_calls_per_minute: int = 30
    require_human_approval_for: set = None

class ProductionAgent:
    def __init__(self, llm, tools, config: AgentRunConfig, tracer=None):
        self.llm = llm
        self.tools = tools
        self.config = config
        self.tracer = tracer
        self.tool_call_times: list[float] = []
        self.state = AgentState()

    async def run(self, user_input: str) -> str:
        start_time = time.time()
        self.state = AgentState()
        self.state.messages.append({"role": "user", "content": user_input})

        total_tokens = 0
        with self.tracer.start_span("agent_run") if self.tracer else nullcontext():
            while self.state.current_step < self.config.max_steps:
                # Check timeout
                if time.time() - start_time > self.config.timeout_seconds:
                    return "Agent timed out. Partial result: " + self._get_last_output()

                # Check rate limit
                self._clean_old_tool_calls()
                if len(self.tool_call_times) >= self.config.max_tool_calls_per_minute:
                    await asyncio.sleep(60 - (time.time() - self.tool_call_times[0]))

                # Generate next action
                response = await self.llm.generate(
                    system=self._get_system_prompt(),
                    messages=self.state.messages,
                    tools=list(self.tools.values()),
                    max_tokens=self.config.max_tokens - total_tokens,
                )
                total_tokens += response.usage.total_tokens

                if total_tokens > self.config.max_tokens:
                    return "Token limit reached."

                if response.finish_reason == "stop":
                    final = response.content
                    self._log_run(user_input, final, start_time, total_tokens)
                    return final

                if response.finish_reason == "tool_calls":
                    self.state.current_step += 1
                    for tool_call in response.tool_calls:
                        # Human approval check
                        if self._needs_approval(tool_call):
                            approved = await self._request_human_approval(tool_call)
                            if not approved:
                                continue

                        result = await self._execute_with_monitoring(tool_call)
                        self.state.messages.append({
                            "role": "tool",
                            "tool_call_id": tool_call.id,
                            "content": result,
                        })

        return "Max steps reached."

    def _needs_approval(self, tool_call) -> bool:
        if not self.config.require_human_approval_for:
            return False
        return tool_call.function.name in self.config.require_human_approval_for

    async def _execute_with_monitoring(self, tool_call) -> str:
        self.tool_call_times.append(time.time())
        with self.tracer.start_span(f"tool_{tool_call.function.name}") as span:
            span.set_attribute("tool", tool_call.function.name)
            span.set_attribute("args", tool_call.function.arguments)
            result = await safe_execute_tool(tool_call, self.tools)
            span.set_attribute("result_length", len(result))
            return result

    def _log_run(self, input: str, output: str, start: float, tokens: int):
        duration = time.time() - start
        print(f"Agent run: {duration:.2f}s, {tokens} tokens, {len(self.tool_call_times)} tool calls")

    def _get_last_output(self) -> str:
        for msg in reversed(self.state.messages):
            if msg["role"] == "assistant":
                return msg["content"]
        return ""

    def _clean_old_tool_calls(self) -> None:
        now = time.time()
        self.tool_call_times = [t for t in self.tool_call_times if now - t < 60]
```text

**Cost optimization**: Use cheaper models for simple steps (classification, intent detection). Batch independent tool calls. Cache repeated tool results. Use semantic caching for similar queries. Set per-user spending limits.

---

## Summary

- Agent architecture: perceive → reason → act → observe → learn; the LLM is the reasoning core
- Tools are the agent's interface to the world; clear descriptions are critical for correct usage
- Memory types: short-term (context), long-term (persistent storage), episodic (past experiences), procedural (how-to knowledge)
- Planning: ReAct (interleaved reasoning + actions), Plan-and-Execute (generate then execute), Tree-of-Thoughts (multiple branches)
- Multi-agent patterns: orchestrator-worker (centralized), peer-to-peer (decentralized), debate (adversarial), pipeline (sequential)
- LangGraph: stateful graphs with nodes, edges, conditional routing, and human-in-the-loop support
- MCP: standardized protocol for connecting agents to tools and data sources
- Production agents need observability, safety guardrails, error recovery, cost management, and rate limiting

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Agent not using tools | Improve tool descriptions (be verbose and specific) | Adding more tools |
| Tool calls failing | Implement retry + error handling in tool execution | Letting errors surface to the user |
| Agent loops | Max steps limit + timeout + cycle detection | Allowing infinite loops |
| Multi-agent coordination | Clear message schema + role definitions | Agents talking past each other |
| Production deployment | Observability + rate limiting + human-in-the-loop | Deploying without monitoring |
| Cost optimization | Cache tool results + use cheaper models for simple steps | Calling expensive LLM for every decision |
| Safety | Input/output filtering + human approval for critical actions | Giving agents unrestricted tool access |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s07-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between an agent and a chain?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Chain</strong>: A predefined sequence of LLM calls and tool executions. The flow is hardcoded — step A → step B → step C. No branching, no dynamic decisions. Deterministic and predictable. Good for well-understood, stable workflows.</p>
    <p><strong>Agent</strong>: An LLM-driven system that dynamically decides which actions to take. The agent observes the result of each action and decides the next step based on the current state and goal. Autonomous, flexible, and adaptive. Good for open-ended tasks where the optimal path isn't known in advance.</p>
    <p><strong>Key differences</strong>:</p>
    <table>
      <tr><th>Aspect</th><th>Chain</th><th>Agent</th></tr>
      <tr><td>Flow</td><td>Fixed, predefined</td><td>Dynamic, LLM-decided</td></tr>
      <tr><td>Predictability</td><td>High</td><td>Lower (emergent behavior)</td></tr>
      <tr><td>Flexibility</td><td>Low</td><td>High</td></tr>
      <tr><td>Error handling</td><td>Scripted fallbacks</td><td>Self-correction</td></tr>
      <tr><td>Best for</td><td>Stable workflows</td><td>Open-ended tasks</td></tr>
    </table>
    <p>In practice, many systems combine both: chains for known steps and agents for decision points within those steps.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you prevent an agent from getting stuck in a loop?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Prevention strategies</strong>:</p>
    <ol>
      <li><strong>Maximum step limit</strong>: Set a hard limit (e.g., 25 steps). Return partial result when exceeded.</li>
      <li><strong>Timeout</strong>: Abort the agent run after a time threshold (e.g., 120 seconds).</li>
      <li><strong>Cycle detection</strong>: Track the sequence of tool calls. If the same sequence repeats 2-3 times, break the loop and force a different path.</li>
      <li><strong>Novelty requirement</strong>: Instruct the agent that repeating the same action is not allowed.</li>
      <li><strong>Increasing error penalty</strong>: Each retry of the same action costs a larger penalty or reduces available steps.</li>
      <li><strong>State differencing</strong>: Compare state before/after each action. If no change, force a different action.</li>
    </ol>
    <pre><code>class LoopDetector:
    def __init__(self, max_repetitions: int = 3):
        self.action_history: list[str] = []
        self.max_reps = max_repetitions

    def record_action(self, action: str) -> bool:
        self.action_history.append(action)
        if len(self.action_history) < self.max_reps:
            return False

        # Check for repeating pattern
        for pattern_length in range(1, self.max_reps):
            if len(self.action_history) >= pattern_length * 2:
                recent = self.action_history[-pattern_length:]
                previous = self.action_history[-2*pattern_length:-pattern_length]
                if recent == previous:
                    return True  # loop detected
        return False</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Compare ReAct and Plan-and-Execute agent patterns.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>ReAct</strong> (Reasoning + Acting): Interleaves thinking and doing. Each step is "Thought: ... Action: ... Observation: ...". The agent decides the next action after seeing the result of the previous one.</p>
    <ul>
      <li>Pros: Highly adaptive, can change strategy mid-course based on observations, natural for simple tasks</li>
      <li>Cons: No long-term planning horizon, can get stuck in local optima, doesn't consider future steps</li>
      <li>Best for: Simple tasks (2-5 steps), question answering, single-goal scenarios</li>
    </ul>
    <p><strong>Plan-and-Execute</strong>: First generate a complete plan with all steps, then execute each step sequentially.</p>
    <ul>
      <li>Pros: Clear roadmap, easier to verify and validate, better for multi-step complex tasks, supports re-planning when steps fail</li>
      <li>Cons: Rigid — may miss opportunities discovered during execution, planning overhead for simple tasks</li>
      <li>Best for: Complex multi-step tasks, research projects, software development</li>
    </ul>
    <p><strong>Hybrid</strong>: Generate a high-level plan upfront, then use ReAct within each step. This combines the structure of plan-and-execute with the flexibility of ReAct.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you design a tool description for optimal LLM usage?
  </summary>
  <div class="tp-qa-answer">
    <p>Tool descriptions are how the LLM knows when and how to use a tool. Well-crafted descriptions dramatically improve agent performance.</p>
    <p><strong>Best practices</strong>:</p>
    <ol>
      <li><strong>Be specific about use cases</strong>: "Use for X when Y" instead of "Performs X"</li>
      <li><strong>Mention when NOT to use</strong>: Helps the LLM avoid inappropriate tool calls</li>
      <li><strong>Describe output format</strong>: So the LLM knows what to expect and how to interpret results</li>
      <li><strong>Include parameter details</strong>: Valid values, format expectations, defaults</li>
      <li><strong>Mention side effects</strong>: Does this tool modify state? Send emails? Charge money?</li>
    </ol>
    <pre><code># Bad
{"name": "search", "description": "Search the database"}

## Good
{"name": "search_employees",
 "description": "Search for employee information by name, email, or department.
  Use this when the user asks about an employee's role, contact info, or team.
  Do NOT use this for salary information (use get_salary instead).
  Returns: list of matching employees with name, email, department, and title.",
 "parameters": {...}}</code></pre>
    <p><strong>Rule of thumb</strong>: Write the description as if you're explaining the tool to a smart but inexperienced colleague who needs to know exactly when to use it and what to expect.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: Explain the Model Context Protocol (MCP) architecture.
  </summary>
  <div class="tp-qa-answer">
    <p>MCP is a standardized protocol for connecting LLM agents with external tools, data sources, and prompts. It follows a client-server architecture:</p>
    <p><strong>MCP Server</strong>:</p>
    <ul>
      <li>Exposes capabilities: tools (functions the agent can call), resources (data the agent can read), prompts (templates the agent can use)</li>
      <li>Communicates via JSON-RPC over stdin/stdout (local) or HTTP+SSE (remote)</li>
      <li>Implements security at the server level (authentication, authorization, rate limiting)</li>
    </ul>
    <p><strong>MCP Client</strong> (in the agent):</p>
    <ul>
      <li>Connects to servers via transport layer</li>
      <li>Discovers available tools, resources, and prompts on connect</li>
      <li>Invokes tools by sending JSON-RPC requests with parameters</li>
      <li>Receives results and error messages</li>
    </ul>
    <p><strong>Benefits</strong>: Standardized integration (any MCP-compliant client works with any MCP server), dynamic discovery (no hardcoded tool lists), composability (connect to multiple servers), security isolation (server controls what it exposes).</p>
    <p>MCP is analogous to how USB-C standardizes device connections — once adopted, any "MCP-compatible" tool can connect to any "MCP-compatible" agent without custom adapters.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you evaluate an agent's performance?
  </summary>
  <div class="tp-qa-answer">
    <p>Agent evaluation is more complex than model evaluation because agents are multi-step and the path matters, not just the final answer.</p>
    <p><strong>Metrics</strong>:</p>
    <ul>
      <li><strong>Task success rate</strong>: Percentage of tasks completed successfully (binary or graded)</li>
      <li><strong>Steps to completion</strong>: Efficiency — fewer steps is better for the same result</li>
      <li><strong>Tool call accuracy</strong>: Percentage of tool calls that were appropriate for the task</li>
      <li><strong>Error recovery rate</strong>: How often the agent recovers from tool failures vs getting stuck</li>
      <li><strong>Cost per task</strong>: Token usage + API costs</li>
      <li><strong>Latency</strong>: Total time from request to completion</li>
    </ul>
    <p><strong>Evaluation approaches</strong>:</p>
    <ul>
      <li><strong>Golden trajectories</strong>: Create reference solutions (the optimal sequence of steps). Compare the agent's path to the golden path using edit distance or similar metrics.</li>
      <li><strong>Outcome-based</strong>: Only evaluate the final result. Pass/fail based on correctness.</li>
      <li><strong>Process-based</strong>: Evaluate each intermediate step. Was the right tool chosen? Was the input correct?</li>
      <li><strong>Adversarial evaluation</strong>: Test edge cases — ambiguous inputs, failed tool calls, conflicting instructions.</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: When would you use a multi-agent system vs a single agent?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Single agent is better when</strong>:</p>
    <ul>
      <li>The task is well-scoped and doesn't require diverse expertise</li>
      <li>Task complexity is low to moderate (5-10 steps)</li>
      <li>Simplicity and maintainability are priorities</li>
      <li>Debugging and testing ease is important</li>
      <li>Latency matters (single agent is faster)</li>
    </ul>
    <p><strong>Multi-agent is better when</strong>:</p>
    <ul>
      <li>The task requires diverse expertise (research + analysis + writing)</li>
      <li>Tasks are complex and benefit from decomposition</li>
      <li>You need specialization (each agent has unique tools/knowledge)</li>
      <li>You want review/critique built into the workflow</li>
      <li>Tasks can be parallelized across agents</li>
      <li>You need role-based safety (e.g., read-only vs write agents)</li>
    </ul>
    <p><strong>Guideline</strong>: Start with a single agent. Add more agents only when you can clearly define distinct roles that would benefit from separate system prompts, tools, or models.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How does LangGraph enable agent control flow?
  </summary>
  <div class="tp-qa-answer">
    <p>LangGraph represents agent workflows as directed graphs where:</p>
    <ul>
      <li><strong>Nodes</strong> are Python functions that process and update the state. Each node typically calls an LLM or executes a tool.</li>
      <li><strong>Edges</strong> define the graph connectivity. Can be fixed ("always go from A to B") or conditional ("if the last message contains tool calls, go to tool_executor; otherwise, end").</li>
      <li><strong>State</strong> is a shared TypedDict that passes through all nodes. The agent's messages, task info, and configuration live here.</li>
    </ul>
    <p><strong>Control flow features</strong>:</p>
    <ul>
      <li><strong>Cycles</strong>: Unlike linear chains, LangGraph supports loops. The agent can call tools, observe results, and loop back to the LLM for the next decision.</li>
      <li><strong>Conditional routing</strong>: Functions determine which node to go to next based on the current state. This is how agents make decisions.</li>
      <li><strong>Human-in-the-loop</strong>: The graph can pause execution at specific nodes, request human approval, and resume. State checkpoints enable this.</li>
      <li><strong>Persistence</strong>: State can be saved to a database, enabling agent runs to survive process restarts.</li>
      <li><strong>Streaming</strong>: State updates can be streamed in real-time, enabling live UI updates during agent execution.</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What safety measures would you implement for a code-writing agent?
  </summary>
  <div class="tp-qa-answer">
    <p>A code-writing agent that can read/write files, execute commands, and access the internet presents significant risk. Essential safety measures:</p>
    <ol>
      <li><strong>Sandboxed execution</strong>: Run all generated code in an isolated container (Docker) with no network access, read-only file system, and limited resources.</li>
      <li><strong>Human approval for destructive operations</strong>: Require confirmation for file deletions, database writes, package installations, and deployment commands.</li>
      <li><strong>Scope limitation</strong>: Restrict file access to a specific project directory. Block access to system files, environment variables, and credentials.</li>
      <li><strong>Command blocklist</strong>: Block dangerous commands (rm -rf, sudo, chmod, curl to unknown destinations, eval-based execution).</li>
      <li><strong>Output review</strong>: Review generated code for security issues before execution — check for SQL injection, command injection, hardcoded secrets.</li>
      <li><strong>Rate limiting</strong>: Limit file writes and command executions per minute to prevent rapid destructive changes.</li>
      <li><strong>Session isolation</strong>: Each agent session runs in its own environment. No cross-session contamination.</li>
      <li><strong>Audit logging</strong>: Log every file read/write, command execution, and tool call with full context for review.</li>
    </ol>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you handle conflicting information from different sources in an agent?
  </summary>
  <div class="tp-qa-answer">
    <p>Agents often encounter conflicting information from different tools or sources. Here's how to handle it:</p>
    <ol>
      <li><strong>Source priority</strong>: Define a hierarchy of trust. "Primary database > cache > web search". Instruct the agent to prefer higher-priority sources.</li>
      <li><strong>Timestamp-based recency</strong>: Prefer the most recent data. Include timestamps in tool outputs.</li>
      <li><strong>Confidence scoring</strong>: Each source can return a confidence score. The agent weighs higher-confidence sources more heavily.</li>
      <li><strong>Triangulation</strong>: When sources conflict, the agent is instructed to acknowledge the conflict and present both perspectives rather than picking arbitrarily.</li>
      <li><strong>Ask for clarification</strong>: If the conflict can't be resolved, the agent should ask the user for guidance.</li>
    </ol>
    <pre><code>def resolve_conflict(sources: list[dict]) -> str:
    priority = {"database": 3, "api": 2, "web_search": 1}
    sorted_sources = sorted(sources, key=lambda s: priority.get(s["source"], 0), reverse=True)
    best = sorted_sources[0]

    if len(sources) > 1 and any(s["value"] != best["value"] for s in sources):
        return (
            f"According to {best['source']}: {best['value']} "
            f"(Note: other sources report conflicting information. "
            f"Using {best['source']} as the most authoritative source.)"
        )
    return best["value"]</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: Design an agent that can book a meeting with multiple participants.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Tools needed</strong>: Calendar API (check availability, create event), Email/Slack (send invitations), Contacts directory (resolve names to emails).</p>
    <p><strong>Agent workflow</strong>:</p>
    <pre><code># Step 1: Parse the request

## User: "Schedule a 1-hour meeting with Alice and Bob next Tuesday afternoon"

## Step 2: Resolve participants
participants = resolve_contacts(["Alice", "Bob"])

## → [{"name": "Alice", "email": "alice@co.com"}, {"name": "Bob", "email": "bob@co.com"}]

## Step 3: Check availability
slots = check_availability(
    participants=["alice@co.com", "bob@co.com", "current_user@co.com"],
    date="next Tuesday",
    duration_minutes=60,
    time_range="13:00-17:00",
)

## → [{"start": "14:00", "end": "15:00", "all_available": True}]

## Step 4: Propose time to user

## Agent: "Next Tuesday at 2-3 PM works for everyone. Shall I book it?"

## Step 5: Create event (after user confirmation)
event = create_calendar_event(
    title="Meeting: Project Discussion",
    start="2024-06-18T14:00:00",
    end="2024-06-18T15:00:00",
    participants=["alice@co.com", "bob@co.com"],
)
send_invitations(event["id"])

## Step 6: Confirm

## Agent: "Meeting booked for Tuesday at 2:00 PM. Invitations sent."</code></pre>
    <p><strong>Edge cases</strong>: No common slot found (suggest alternatives), participant declines (re-schedule), timezone differences (auto-convert), recurring meetings (handle separately).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: What is the difference between tool use and function calling?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Function calling</strong> (OpenAI terminology, also called "tool use" in Anthropic): The LLM outputs structured JSON specifying a function name and arguments. The API returns a special response with `finish_reason: "tool_calls"` and the function call details. The application is responsible for executing the function and returning the result.</p>
    <p>This is a capability of the LLM API — the model is trained to output structured function calls.</p>
    <p><strong>Broader tool use</strong> encompasses the full system: defining tool schemas, deciding when to call which tool, executing the tool, handling results, and looping back to the LLM. Tool use includes function calling as a component but also covers:</p>
    <ul>
      <li>Tool discovery (via MCP or static registration)</li>
      <li>Orchestration (single vs parallel calls)</li>
      <li>Error handling (retries, fallbacks)</li>
      <li>Result integration (how tool outputs are presented to the LLM)</li>
      <li>Rate limiting and safety checks</li>
    </ul>
    <p>In everyday usage, "function calling" and "tool use" are often used interchangeably to mean "the LLM can request external actions." The distinction matters mainly when discussing architecture.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: How do you optimize agent response time?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>LLM optimization</strong>:</p>
    <ul>
      <li>Use faster models for simple decisions (classification, intent detection) and reserve powerful models for complex reasoning</li>
      <li>Reduce context size by trimming or summarizing history</li>
      <li>Use speculative decoding to reduce per-token latency</li>
      <li>Batch independent tool calls instead of sequential</li>
    </ul>
    <p><strong>Tool optimization</strong>:</p>
    <ul>
      <li>Cache results of frequently-used, slow-changing tools</li>
      <li>Use connection pooling for database and API access</li>
      <li>Implement tool result prefetching (predict what tools might be needed)</li>
      <li>Set aggressive timeouts on tool calls</li>
    </ul>
    <p><strong>Architecture optimization</strong>:</p>
    <ul>
      <li>Stream token output so users see partial results while the agent continues working</li>
      <li>Use parallel tool execution for independent operations</li>
      <li>Consider a hybrid architecture where a fast classifier routes to specialized handlers</li>
      <li>Use agent run pooling for common operations (pre-computed responses to frequent queries)</li>
    </ul>
    <pre><code># Parallel tool execution
async def execute_tools_parallel(tool_calls: list, tools: dict) -> list:
    tasks = []
    for tc in tool_calls:
        tasks.append(safe_execute_tool(tc, tools))
    return await asyncio.gather(*tasks)</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: How would you build an agent that can browse the web?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Approach 1 — Read-only browser tools</strong>:</p>
    <ul>
      <li>Provide tools: `browse_url(url)`, `search_web(query)`, `extract_text(html)`, `click_element(selector)`, `scroll_page(direction)`</li>
      <li>Use a headless browser (Playwright, Puppeteer) behind the tools</li>
      <li>The agent issues commands to navigate and extract information</li>
      <li>Limit to read-only operations for safety</li>
    </ul>
    <p><strong>Approach 2 — Screenshot + vision model</strong>:</p>
    <ul>
      <li>Take screenshots of the page and use a vision-capable LLM (GPT-4V) to understand the content</li>
      <li>Agent decides: "click the login button at coordinates (400, 600)"</li>
      <li>More natural interaction but higher latency and cost</li>
    </ul>
    <p><strong>Key challenges</strong>:</p>
    <ul>
      <li>Authentication: Agents can't handle login flows without credentials — require pre-authenticated sessions</li>
      <li>JavaScript-heavy sites: Many modern sites require JS rendering — use a full browser engine</li>
      <li>CAPTCHAs: The agent will get stuck on CAPTCHAs — design workflows that avoid triggering them</li>
      <li>Session management: Maintain cookies and local storage across requests</li>
      <li>Safety: Prevent the agent from performing destructive actions (form submission, account deletion)</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s07-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: Design a multi-agent system for automated code review.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Architecture</strong>:</p>
    <ul>
      <li><strong>Orchestrator Agent</strong>: Receives the PR diff, breaks it into files/components, assigns reviewers</li>
      <li><strong>Static Analysis Agent</strong>: Analyzes code quality, style issues, potential bugs (wraps linters: ruff, mypy, eslint)</li>
      <li><strong>Security Agent</strong>: Checks for OWASP Top 10 vulnerabilities, hardcoded secrets, injection risks</li>
      <li><strong>Logic Review Agent</strong>: Reviews algorithm correctness, edge case coverage, potential race conditions</li>
      <li><strong>Documentation Agent</strong>: Checks if code changes are documented, verifies docstring accuracy</li>
      <li><strong>Synthesis Agent</strong>: Collects all reviews, resolves conflicts, and produces the final review summary</li>
    </ul>
    <pre><code>class CodeReviewOrchestrator:
    def __init__(self):
        self.agents = {
            "static": StaticAnalysisAgent(),
            "security": SecurityReviewAgent(),
            "logic": LogicReviewAgent(),
            "docs": DocumentationAgent(),
        }

    async def review_pr(self, pr_diff: str, repo_context: dict) -> ReviewReport:
        # Distribute code files to agents
        files = self._parse_diff(pr_diff)
        reviews = {}

        # Run analysis agents in parallel
        tasks = {}
        for agent_name, agent in self.agents.items():
            tasks[agent_name] = agent.review(files, repo_context)
        results = await asyncio.gather(*tasks.values())

        for agent_name, result in zip(self.agents.keys(), results):
            reviews[agent_name] = result

        # Synthesis agent produces final report
        synthesis = SynthesisAgent()
        final_report = await synthesis.synthesize(reviews)
        return final_report</code></pre>
    <p><strong>Review criteria</strong>: Issues are categorized as blocker/critical/warning/suggestion. The orchestrator deduplicates overlapping findings. The final review is posted as a PR comment with per-file annotations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the core reasoning engine of an AI agent?

a) Vector database
b) Tool executor
c) LLM
d) Memory store

<details class="tp-qa-card" data-qid="ip-s07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) LLM</strong></p><p>The LLM serves as the reasoning core, deciding which actions to take based on the current state and goals. Tools and memory support this reasoning.</p></div></details>

**Q2**: Which LangGraph feature enables agent loops?

a) Conditional edges
b) State checkpoints
c) Cycles (directed cycles in the graph)
d) Node timeouts

<details class="tp-qa-card" data-qid="ip-s07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Cycles (directed cycles in the graph)</strong></p><p>LangGraph supports cycles — the agent can loop from a tool node back to the LLM node, enabling multi-step decision-making.</p></div></details>

**Q3**: What does MCP standardize?

a) Model training pipelines
b) Connections between LLMs and external tools/data
c) Prompt template formats
d) Embedding model evaluation

<details class="tp-qa-card" data-qid="ip-s07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Connections between LLMs and external tools/data</strong></p><p>The Model Context Protocol standardizes how agents discover and interact with tools, resources, and prompts across different providers.</p></div></details>

**Q4**: Which memory type stores records of past agent experiences for learning?

a) Short-term memory
b) Procedural memory
c) Episodic memory
d) Working memory

<details class="tp-qa-card" data-qid="ip-s07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Episodic memory</strong></p><p>Episodic memory records specific past episodes (actions taken, outcomes observed), enabling the agent to learn from past experiences.</p></div></details>

**Q5**: What is the most important part of a tool definition for LLM understanding?

a) The function name
b) The parameter JSON schema
c) The description
d) The return type

<details class="tp-qa-card" data-qid="ip-s07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) The description</strong></p><p>The description tells the LLM when and why to use the tool. A well-written description is more important than parameter schemas for correct tool selection.</p></div></details>

## Exercises

**Easy** — Build a simple ReAct agent that can answer questions using a calculator tool and a weather API tool. Implement the Thought/Action/Observation loop manually (without frameworks).

**Easy** — Create three LangGraph nodes: `llm_call`, `tool_executor`, and `output_formatter`. Connect them with conditional routing: if the LLM calls a tool, go to `tool_executor`, otherwise go to `output_formatter` then end.

**Medium** — Implement a multi-agent system with a researcher agent and a writer agent. The researcher gathers information from a mock API, and the writer produces a formatted report. Use message-based communication between agents.

**Medium** — Build an MCP server that exposes two tools: `search_documents` and `get_document`. Connect it to an MCP client in an agent. The agent should discover the tools automatically on connection.

**Hard** — Design and implement a production-grade code review agent. It should analyze a pull request diff, check for style issues, security vulnerabilities, and logical errors. Output a structured review with severity levels and line-specific comments. Add human-in-the-loop before posting the review.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 21-interview-preparation
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?
2. Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?
2. How would you explain 21-interview-preparation to a non-technical stakeholder?

#### Microsoft Style
1. How does 21-interview-preparation integrate with enterprise systems and cloud architectures?
2. What are the security implications of 21-interview-preparation?

#### NVIDIA Style
1. How would you optimize 21-interview-preparation for GPU-accelerated computing?
2. What parallel processing patterns apply to 21-interview-preparation?

#### AI Startup Style
1. How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 21-interview-preparation?

### Resume Tips
- **Technical Skills**: List 21-interview-preparation under relevant technical skills
- **Project Description**: "Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 21-interview-preparation in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 21-interview-preparation
- [ ] Practice 3-5 problems related to 21-interview-preparation
- [ ] Prepare 2 real-world examples of using 21-interview-preparation
- [ ] Know the time/space complexity of common 21-interview-preparation operations
- [ ] Have questions ready about how the company uses 21-interview-preparation> **Next**: [08 — System Design Interview →](08-system-design-interview.md)
