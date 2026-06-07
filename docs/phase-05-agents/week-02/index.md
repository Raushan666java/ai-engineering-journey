# Week 2 — Production Agents

**Goal:** Agents ko production-ready banana
**Output:** Agent with tools, HITL, tracing, LangGraph

---

## Day 1 — Tool Design Patterns

### Why Tool Design Matters?

```
Galat Tool Design:
def query_db(q): 
    return db.execute(q)  # ❌ SQL injection possible
                          # ❌ No error handling
                          # ❌ No rate limiting
                          # ❌ Can delete data

Sahi Tool Design:
def query_db(q):
    validate_input(q)     # ✅ Only SELECT allowed
    sanitize(q)           # ✅ No dangerous chars
    rate_limit_check()    # ✅ Max 10 calls/minute
    try:
        return db.execute(q)
    except Exception as e:
        return f"Error: {e}"  # ✅ Graceful error
```

### Tool Design Template

```python
from langchain.tools import BaseTool, Tool
from pydantic import BaseModel, Field
from typing import Type, Optional
import time
import logging
from functools import wraps

def rate_limit(max_per_minute: int = 10):
    """Rate limiting decorator for tools."""
    calls = []
    
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            calls[:] = [c for c in calls if now - c < 60]
            
            if len(calls) >= max_per_minute:
                return f"Rate limit exceeded. Max {max_per_minute} calls/minute."
            
            calls.append(now)
            return func(*args, **kwargs)
        return wrapper
    return decorator

# Method 1: Using Tool class (simple)
def get_sales_data(query: str) -> str:
    """
    Get sales data from database.
    Input: Description of what sales data is needed.
    """
    try:
        # Validate: only SELECT queries
        # Business logic here
        return f"Sales data for {query}: $1.2M revenue"
    except Exception as e:
        logging.error(f"Sales tool error: {e}")
        return f"Error fetching sales data: {str(e)}"

sales_tool = Tool(
    name="get_sales_data",
    func=get_sales_data,
    description="Fetch sales data from ApexERP database. Use for any sales-related queries."
)

# Method 2: Using BaseTool class (advanced)
class DBQueryTool(BaseTool):
    """
    Proper tool with:
    - Input validation via Pydantic
    - Error handling
    - Rate limiting
    - Detailed description
    """
    name: str = "query_database"
    description: str = """
    Execute SQL queries on ApexERP database.
    ONLY use for SELECT queries.
    Input should be a valid SQL query or natural language description.
    """
    args_schema: Optional[Type[BaseModel]] = None
    db_connection: str = "default"

    def _run(self, query: str) -> str:
        """Synchronous execution."""
        # Rate limiting
        # Input sanitization
        # Query validation
        
        if not query.upper().strip().startswith("SELECT"):
            return "Error: Only SELECT queries are allowed for safety."
        
        try:
            # Execute query (pseudo)
            result = {"revenue": 1200000, "quarter": "Q4"}
            return str(result)
        except Exception as e:
            return f"Query failed: {str(e)}"

    async def _arun(self, query: str) -> str:
        """Asynchronous execution."""
        return self._run(query)

# Method 3: Pydantic input schema
class EmailInput(BaseModel):
    recipient: str = Field(description="Email address of recipient")
    subject: str = Field(description="Email subject line")
    body: str = Field(description="Email body content")

class EmailTool(BaseTool):
    name: str = "send_email"
    description: str = "Send an email to any recipient."
    args_schema: Type[BaseModel] = EmailInput

    def _run(self, recipient: str, subject: str, body: str) -> str:
        # Validate email
        if "@" not in recipient:
            return "Invalid email address"
        
        # Rate limit: max 5 emails per minute
        # Actually send email...
        return f"Email sent to {recipient}: {subject}"
```

---

## Day 2 — AgentExecutor Configuration

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import ChatOpenAI
from langchain.tools import Tool
from langchain import hub

# Tools
tools = [
    Tool(name="query_db", func=lambda q: f"Result: {q}", description="Query database"),
    Tool(name="send_email", func=lambda x: "Email sent!", description="Send email"),
    Tool(name="calculator", func=lambda x: eval(x), description="Calculate math"),
]

llm = ChatOpenAI(model="gpt-4o", temperature=0)

agent = create_react_agent(llm, tools, hub.pull("hwchase17/react"))

# Full configuration
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    
    # ⭐ Critical: Stop infinite loops
    max_iterations=5,           # Max thought-action cycles
    early_stopping_method="generate",  # "force" or "generate"
    
    # ⭐ Error handling
    handle_parsing_errors=True,  # Auto-fix parsing mistakes
    
    # ⭐ Verbose for debugging
    verbose=True,
    
    # ⭐ Return intermediate steps
    return_intermediate_steps=True,
    
    # ⭐ Max execution time
    max_execution_time=30,  # seconds
)

# What happens with max_iterations:
"""
Iteration 1: Thought → Action → Observation
Iteration 2: Thought → Action → Observation
Iteration 3: Thought → Action → Observation
Iteration 4: Thought → Action → Observation
Iteration 5: Thought → Action → Observation
→ Agent pe "generate" mode mein final answer force karega

Without max_iterations: Agent infinite loop mein phas sakta hai
"""

# Usage
result = agent_executor.invoke({
    "input": "Pichle quarter ke sales nikaalo aur Raushan ko email bhejo"
})

print(result["output"])  # Final answer
print(result["intermediate_steps"])  # All steps for debugging
```

---

## Day 3 — Human-in-the-Loop (HITL)

```python
from langchain.agents import AgentExecutor
from langchain.tools import Tool
from typing import Any, Dict, List, Optional

class HumanApprovalTool:
    """
    Kuch actions human approval require karte hain.
    Example: Send email, delete data, large payments.
    """
    
    @staticmethod
    def confirm_action(action_description: str) -> bool:
        """
        Production mein yeh API/webhook se connect hoga.
        Demo ke liye terminal input.
        """
        print(f"\n⚠️  Action requires approval: {action_description}")
        response = input("Approve? (yes/no): ").strip().lower()
        return response in ["yes", "y", "approve"]

# Tool with HITL
def send_email_approved(recipient: str, subject: str, body: str) -> str:
    """Send email with human approval."""
    action = f"Send email to {recipient}: {subject}"
    
    if HumanApprovalTool.confirm_action(action):
        # Actually send the email
        return f"Email sent to {recipient} successfully!"
    else:
        return "Email sending cancelled by user."

def delete_record(record_id: str) -> str:
    """Delete a database record with approval."""
    action = f"Delete record {record_id}"
    
    if HumanApprovalTool.confirm_action(action):
        return f"Record {record_id} deleted."
    else:
        return "Delete cancelled."

# FastAPI endpoint for async approval
"""
POST /agent/action/approve
{
    "action_id": "abc123",
    "tool": "send_email",
    "args": {
        "recipient": "raushan@apexpillar.com",
        "subject": "Q4 Report",
        "body": "..."
    },
    "status": "pending_approval"
}

POST /agent/action/respond
{
    "action_id": "abc123",
    "approved": true
}
"""

# Production HITL service
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio

pending_actions: Dict[str, asyncio.Event] = {}
action_results: Dict[str, bool] = {}

app = FastAPI(title="Agent HITL API")

class ActionRequest(BaseModel):
    action_id: str
    tool: str
    args: dict
    description: str

class ApprovalResponse(BaseModel):
    action_id: str
    approved: bool

@app.post("/agent/action/request")
async def request_approval(action: ActionRequest):
    """Agent calls this when needing approval."""
    pending_actions[action.action_id] = asyncio.Event()
    
    # Notify human (Slack, email, dashboard)
    await notify_human(action)
    
    # Wait for human response (with timeout)
    try:
        await asyncio.wait_for(
            pending_actions[action.action_id].wait(),
            timeout=300.0  # 5 min timeout
        )
        approved = action_results.get(action.action_id, False)
        return {"approved": approved}
    except asyncio.TimeoutError:
        return {"approved": False, "reason": "Timeout"}
    finally:
        pending_actions.pop(action.action_id, None)
        action_results.pop(action.action_id, None)

@app.post("/agent/action/respond")
async def respond_approval(response: ApprovalResponse):
    """Human responds to approval request."""
    if response.action_id not in pending_actions:
        raise HTTPException(404, "Action not found")
    
    action_results[response.action_id] = response.approved
    pending_actions[response.action_id].set()
    return {"status": "processed"}

async def notify_human(action: ActionRequest):
    """Send notification (Slack/webhook)."""
    # Implementation depends on your notification system
    print(f"Action needs approval: {action.description}")
```

---

## Day 4 — LangSmith Tracing

```python
# pip install langsmith

import os
from langsmith import Client
from langchain.callbacks.tracers import LangChainTracer
from langchain.callbacks import tracing_v2_enabled

# Setup
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "ls_..."
os.environ["LANGCHAIN_PROJECT"] = "apexerp-agent"

# Option 1: Global tracing
tracer = LangChainTracer(project_name="apexerp-agent")

# With agent
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[tracer],
    verbose=True
)

# Option 2: Context manager
with tracing_v2_enabled(project_name="apexerp-agent-test"):
    result = agent_executor.invoke({"input": "Q4 sales kya the?"})

# Option 3: Custom metadata
with tracing_v2_enabled(
    project_name="apexerp-agent",
    tags=["production", "user-raushan"],
    metadata={"user_id": "123", "session": "abc"}
):
    result = agent_executor.invoke({"input": "Invoice #123 ka status kya hai?"})
```

### Custom Callbacks

```python
from langchain.callbacks.base import BaseCallbackHandler
import time
import json
import logging

class AgentMonitorCallback(BaseCallbackHandler):
    """
    Custom callback to monitor agent behavior in production.
    """
    def __init__(self):
        self.logs = []
        self.current_run = None

    def on_llm_start(self, serialized, prompts, **kwargs):
        """LLM call started."""
        self.current_run = {
            "type": "llm",
            "start": time.time(),
            "prompt": prompts[0][:200] if prompts else ""
        }

    def on_llm_end(self, response, **kwargs):
        """LLM call finished."""
        if self.current_run:
            self.current_run["latency"] = time.time() - self.current_run["start"]
            self.current_run["tokens"] = response.llm_output.get("token_usage", {})
            self.logs.append(self.current_run)

    def on_tool_start(self, serialized, input_str, **kwargs):
        """Tool execution started."""
        self.current_run = {
            "type": "tool",
            "tool": serialized.get("name", "unknown"),
            "start": time.time(),
            "input": input_str[:200]
        }

    def on_tool_end(self, output, **kwargs):
        """Tool execution finished."""
        if self.current_run:
            self.current_run["latency"] = time.time() - self.current_run["start"]
            self.current_run["output_length"] = len(str(output))
            self.logs.append(self.current_run)
            
            # Alert on slow tools
            if self.current_run["latency"] > 5.0:
                logging.warning(f"Slow tool: {self.current_run['tool']} took {self.current_run['latency']:.2f}s")

    def get_stats(self) -> dict:
        llm_calls = [l for l in self.logs if l["type"] == "llm"]
        tool_calls = [l for l in self.logs if l["type"] == "tool"]
        
        return {
            "total_llm_calls": len(llm_calls),
            "total_tool_calls": len(tool_calls),
            "avg_llm_latency": sum(l["latency"] for l in llm_calls) / max(len(llm_calls), 1),
            "avg_tool_latency": sum(l["latency"] for l in tool_calls) / max(len(tool_calls), 1),
            "total_tokens": sum(l.get("tokens", {}).get("total_tokens", 0) for l in llm_calls)
        }

# Usage
monitor = AgentMonitorCallback()

agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[monitor],
    verbose=True
)

result = agent_executor.invoke({"input": "Q4 report generate karo"})
print(monitor.get_stats())
```

---

## Day 5 — Streaming

```python
from langchain.agents import AgentExecutor
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from typing import AsyncGenerator

# Sync streaming
llm = ChatOpenAI(
    model="gpt-4o",
    streaming=True,
    callbacks=[StreamingStdOutCallbackHandler()]
)

agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools)

# Async streaming with FastAPI
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    question: str

@app.post("/agent/stream")
async def agent_stream(request: QueryRequest):
    return StreamingResponse(
        stream_agent_response(request.question),
        media_type="text/event-stream"
    )

async def stream_agent_response(question: str):
    """Stream agent's thoughts and actions in real-time."""
    async for event in agent_executor.astream_events(
        {"input": question},
        version="v1"
    ):
        kind = event["event"]
        
        if kind == "on_chain_start":
            if event["name"] == "Agent":
                yield f"data: {json.dumps({'type': 'thinking', 'content': 'Processing...'})}\n\n"
                
        elif kind == "on_llm_start":
            yield f"data: {json.dumps({'type': 'llm_start'})}\n\n"
            
        elif kind == "on_llm_stream":
            content = event["data"]["chunk"].content
            if content:
                yield f"data: {json.dumps({'type': 'token', 'content': content})}\n\n"
                
        elif kind == "on_tool_start":
            yield f"data: {json.dumps({'type': 'tool_start', 'tool': event['name']})}\n\n"
            
        elif kind == "on_tool_end":
            yield f"data: {json.dumps({'type': 'tool_end', 'tool': event['name']})}\n\n"
            
        elif kind == "on_chain_end":
            if event["name"] == "Agent":
                yield f"data: {json.dumps({'type': 'done'})}\n\n"

# Frontend consumes this SSE stream
"""
const eventSource = new EventSource('/agent/stream?question=Q4+sales');
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'token') {
        // Append token to output
    } else if (data.type === 'tool_start') {
        // Show "Using tool: query_db"
    }
};
"""
```

---

## Day 6 — Guardrails

```python
from pydantic import BaseModel, validator
from typing import Optional
import re

class AgentInputGuardrails:
    """
    Agent ke input/output ko validate karo.
    """
    
    BLOCKED_PATTERNS = [
        r"ignore.*instructions",
        r"forget.*your.*prompt",
        r"you are a.*",
        r"system.*prompt",
        r"sudo",
        r"rm\s+-rf",
        r"DROP\s+TABLE",
        r"DELETE\s+FROM",
        r"exec\s*\(",
    ]
    
    MAX_INPUT_LENGTH = 2000
    MAX_OUTPUT_LENGTH = 10000
    
    @classmethod
    def validate_input(cls, user_input: str) -> Optional[str]:
        """Validate and sanitize user input."""
        
        # Check length
        if len(user_input) > cls.MAX_INPUT_LENGTH:
            return "Input too long. Please keep under 2000 characters."
        
        # Check blocked patterns
        for pattern in cls.BLOCKED_PATTERNS:
            if re.search(pattern, user_input, re.IGNORECASE):
                return "Input contains blocked patterns."
        
        # Check if it's a prompt injection
        injection_patterns = [
            r"<<.+>>",  # Prompt injection delimiters
            r"\|\|\s*.*\s*\|",  # Role-play markers
            r"new\s+instruction",
            r"ignore.*above",
        ]
        
        for pattern in injection_patterns:
            if re.search(pattern, user_input, re.IGNORECASE):
                return "Potential prompt injection detected."
        
        return None  # Input is valid

    @classmethod
    def sanitize_output(cls, output: str) -> str:
        """Sanitize agent output."""
        
        # Truncate if too long
        if len(output) > cls.MAX_OUTPUT_LENGTH:
            output = output[:cls.MAX_OUTPUT_LENGTH] + "..."
        
        # Remove any system prompts that might leak
        output = re.sub(r"system:.*", "", output, flags=re.IGNORECASE)
        
        # Remove API keys or secrets
        output = re.sub(r"sk-[a-zA-Z0-9]{20,}", "[API_KEY_REDACTED]", output)
        output = re.sub(r"key.*=.*['\"][a-zA-Z0-9]{20,}['\"]", "KEY_REDACTED", output)
        
        return output

# Integration with agent
class GuardedAgent:
    """Agent with input/output guardrails."""
    
    def __init__(self, agent_executor):
        self.agent = agent_executor
    
    def invoke(self, user_input: str) -> str:
        # Input validation
        error = AgentInputGuardrails.validate_input(user_input)
        if error:
            return f"I can't process that: {error}"
        
        # Run agent
        result = self.agent.invoke({"input": user_input})
        output = result["output"]
        
        # Output sanitization
        return AgentInputGuardrails.sanitize_output(output)
```

---

## Day 7 — LangGraph Advanced

### Conditional Edges

```python
from typing import TypedDict, Literal
from langgraph.graph import StateGraph, END
from langgraph.checkpoint import MemorySaver
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, AIMessage
import json

# Define state
class AgentState(TypedDict):
    messages: list
    next_agent: str
    tool_results: dict
    error_count: int

# Router function
def router(state: AgentState) -> Literal["query_db", "send_email", "generate_report", "end"]:
    """Decide next step based on state."""
    last_message = state["messages"][-1].content
    
    llm = ChatOpenAI(model="gpt-4o", temperature=0)
    decision = llm.invoke(f"""
    Based on the user request, what should I do next?
    
    Options:
    - query_db: Need to fetch data from database
    - send_email: Need to send an email
    - generate_report: Need to create a report
    - end: Request is complete
    
    User: {last_message}
    
    Decision (only one word):
    """)
    
    return decision.strip().lower()

# Node functions
def query_db(state: AgentState) -> AgentState:
    """Query database node."""
    try:
        # Execute query
        result = {"sales": 1200000, "quarter": "Q4"}
        state["tool_results"]["db_result"] = result
        state["messages"].append(AIMessage(content=f"Database result: {result}"))
        state["error_count"] = 0
    except Exception as e:
        state["error_count"] += 1
        if state["error_count"] >= 3:
            state["next_agent"] = "end"
        state["messages"].append(AIMessage(content=f"Error: {e}"))
    
    return state

def send_email_node(state: AgentState) -> AgentState:
    """Send email node."""
    # Implementation
    state["messages"].append(AIMessage(content="Email sent successfully"))
    return state

def generate_report(state: AgentState) -> AgentState:
    """Generate report node."""
    data = state["tool_results"].get("db_result", {})
    report = f"Q4 Report: Revenue {data.get('sales', 'N/A')}"
    state["messages"].append(AIMessage(content=report))
    return state

def should_continue(state: AgentState) -> Literal["tools", "end"]:
    """Check if more iterations needed."""
    if state.get("error_count", 0) >= 3:
        return "end"
    if len(state["messages"]) > 10:
        return "end"
    return "tools"

# Build graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("query_db", query_db)
workflow.add_node("send_email", send_email_node)
workflow.add_node("generate_report", generate_report)

# Add conditional edges
workflow.add_conditional_edges(
    "query_db",
    router,
    {
        "query_db": "query_db",
        "send_email": "send_email",
        "generate_report": "generate_report",
        "end": END
    }
)

# Set entry point
workflow.set_entry_point("query_db")

# Add memory
memory = MemorySaver()
app = workflow.compile(checkpointer=memory)

# Usage
result = app.invoke(
    {
        "messages": [HumanMessage(content="Q4 sales nikaalo aur report banao")],
        "next_agent": "query_db",
        "tool_results": {},
        "error_count": 0
    },
    config={"configurable": {"thread_id": "1"}}
)
```

### Subgraphs

```python
from langgraph.graph import StateGraph, END

def create_database_subgraph():
    """
    Database operations ka subgraph.
    Isko main graph mein as a node use kar sakte ho.
    """
    db_workflow = StateGraph(AgentState)
    
    db_workflow.add_node("validate_query", validate_query)
    db_workflow.add_node("execute_query", execute_query)
    db_workflow.add_node("format_results", format_results)
    
    db_workflow.add_edge("validate_query", "execute_query")
    db_workflow.add_edge("execute_query", "format_results")
    db_workflow.add_edge("format_results", END)
    
    db_workflow.set_entry_point("validate_query")
    return db_workflow.compile()

# Use subgraph in main graph
main_workflow = StateGraph(AgentState)
database_subgraph = create_database_subgraph()

main_workflow.add_node("database", database_subgraph)
main_workflow.add_node("email", email_node)
main_workflow.add_node("report", report_node)

main_workflow.add_conditional_edges(
    "database",
    router,
    {
        "email": "email",
        "report": "report",
        "database": "database",
        "end": END
    }
)
```

---

## Summary

```
Week 2 khatam:

✅ Tool Design — Input validation, error handling, rate limiting
✅ AgentExecutor — max_iterations, early_stopping
✅ Human-in-the-Loop — Approval workflows with API
✅ LangSmith Tracing — Debugging agent behavior
✅ Streaming — Real-time agent output
✅ Guardrails — Input/output validation
✅ LangGraph Advanced — Conditional edges, subgraphs

Ab tu production-grade agents bana sakta hai!
```
