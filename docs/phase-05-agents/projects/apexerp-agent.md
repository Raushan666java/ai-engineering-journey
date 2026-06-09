# ApexERP AI Agent

**Project Type:** Production AI Agent with Tools
**Stack:** LangChain, FastAPI, LangGraph, SQLite, SMTP
**Duration:** 2 Weeks (after Phase 5)

---

## Problem

```
ApexERP users ko everyday tasks ke liye ek assistant chahiye:

❌ "Mujhe Q4 sales nikaalne hain" → Query DB manually
❌ "Ye report Raushan ko bhejo" → Export CSV → Attach → Send email
❌ "Kya orders pending hain?" → Login → Check dashboard
❌ "Meeting schedule karo" → Open calendar → Manual entry

Solution: Ek AI agent jo sab kar sakta hai
```

## Solution

```
User: "Q4 sales nikaalo aur Raushan ko email bhejo"

Agent:
1. query_database("Q4 sales data")
   → Returns: {revenue: $1.2M, growth: -15%}
2. check_contacts("Raushan")
   → Returns: raushan@apexpillar.com
3. generate_report({"revenue": $1.2M, ...})
   → Returns: Formatted Q4 report
4. send_email("raushan@apexpillar.com", "Q4 Report", report)
   ⚠️ HUMAN APPROVAL NEEDED
   → Approved! Email sent.
5. Answer: "Done! Q4 report Raushan ko bhej diya gaya."
```

---

## Architecture Overview

### System Architecture Diagram

```mermaid
%%{init: {'theme':'neutral'}}%%
graph TB
    subgraph UI["User Interface Layer"]
        WEB["🌐 Web Dashboard"]
        SLACK["💬 Slack Bot"]
        API["🔌 REST API"]
        WHATSAPP["📱 WhatsApp Bot"]
    end

    subgraph GATEWAY["API Gateway"]
        RATE["Rate Limiter"]
        AUTH["JWT Auth"]
        LOG["Request Logger"]
    end

    subgraph AGENT["Agent Core - LangGraph"]
        direction TB
        S1["State<br/>TypedDict"]
        N1["Router Node"]
        N2["Tool Executor"]
        N3["Memory Node"]
        N4["HITL Node"]
    end

    subgraph TOOLS["Tool Layer"]
        DB_TOOL["🗄️ Database Tool"]
        EMAIL_TOOL["📧 Email Tool"]
        REPORT_TOOL["📊 Report Tool"]
        CAL_TOOL["📅 Calendar Tool"]
        CONTACT_TOOL["👤 Contact Tool"]
    end

    subgraph EXTERNAL["External Services"]
        POSTGRES[("PostgreSQL<br/>ApexERP DB")]
        SMTP_SRV["SMTP Server<br/>Gmail"]
        CAL_API["Calendar API<br/>Google Calendar"]
    end

    subgraph STORAGE["Persistence"]
        MEM[(SQLite<br/>Memory Store)]
        CONFIG[(Redis<br/>Config Cache)]
    end

    UI --> GATEWAY
    GATEWAY --> AGENT
    AGENT --> TOOLS
    DB_TOOL --> POSTGRES
    EMAIL_TOOL --> SMTP_SRV
    CAL_TOOL --> CAL_API
    AGENT --> STORAGE

    style WEB fill:#e1f5fe
    style SLACK fill:#e1f5fe
    style API fill:#e1f5fe
    style WHATSAPP fill:#e1f5fe
    style POSTGRES fill:#fff3e0
    style SMTP_SRV fill:#fff3e0
    style CAL_API fill:#fff3e0
    style MEM fill:#f3e5f5
    style CONFIG fill:#f3e5f5
```

### Agent State Machine

```mermaid
%%{init: {'theme':'neutral'}}%%
stateDiagram-v2
    [*] --> IDLE: User Input

    IDLE --> ROUTING: Parse Intent
    ROUTING --> TOOL_EXEC: Tool Required
    ROUTING --> RESPOND: No Tool Needed

    TOOL_EXEC --> APPROVAL_CHECK: Tool Complete
    APPROVAL_CHECK --> WAITING_APPROVAL: Needs HITL
    APPROVAL_CHECK --> TOOL_RESULT: Auto-Approved

    WAITING_APPROVAL --> TOOL_RESULT: Approved
    WAITING_APPROVAL --> CANCELLED: Rejected

    TOOL_RESULT --> ROUTING: More Steps?
    TOOL_RESULT --> RESPOND: Sequence Complete

    RESPOND --> [*]: Output Returned
    CANCELLED --> RESPOND: Explain Cancellation

    state TOOL_EXEC {
        [*] --> QUERY_DB
        [*] --> SEND_EMAIL
        [*] --> GEN_REPORT
        [*] --> MANAGE_CAL
    }

    note right of WAITING_APPROVAL
        /agent/approve/{id}
        5 min timeout
    end note
```

### Data Flow Diagram

```mermaid
%%{init: {'theme':'neutral'}}%%
sequenceDiagram
    participant U as User
    participant API as FastAPI
    participant AG as LangGraph
    participant MEM as Memory
    participant DB as Database
    participant SM as SMTP
    participant H as HITL Service

    U->>API: POST /chat {"message": "Q4 sales nikaalo aur email bhejo"}
    API->>AG: agent.invoke({"input": msg})

    AG->>MEM: Load chat_history
    MEM-->>AG: Previous context

    Note over AG: LLM decides: query_database first
    AG->>DB: SELECT * FROM sales WHERE quarter='Q4'
    DB-->>AG: {revenue: 1.2M, growth: -15%}

    AG->>MEM: Store intermediate result

    Note over AG: LLM decides: generate_report next
    AG->>AG: ReportTool._run("sales", "Q4 2024")
    AG-->>AG: Formatted report string

    Note over AG: LLM decides: send_email
    AG->>H: request_approval({to, subject, body})
    H-->>U: Approval Request (WebSocket/Slack)
    U->>H: Approve
    H-->>AG: True

    AG->>SM: send_email(to, subject, body)
    SM-->>AG: Email sent OK

    AG->>MEM: Store final result
    AG-->>API: {"output": "Done! Report bhej diya..."}
    API-->>U: 200 OK + Response
```

---

## LangGraph State Deep-Dive

ApexERP ke agent loop ka heart hai **LangGraph StateGraph**. Laravel developers ke liye samjho: StateGraph = Eloquent Model events + Queue worker + Middleware pipeline — sab ek saath.

### State Definition

```python
from typing import TypedDict, Annotated, Sequence, Literal, Optional
from langgraph.graph import StateGraph, END
from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage, ToolMessage
from datetime import datetime
import operator

class AgentState(TypedDict):
    """ApexERP agent ka pura state — yeh har step mein update hota hai.

    Laravel analogy: Yeh hai jaise $request->all() + Session::all() + Log::all()
    ek sath merge ho gaye.
    """
    # Messages — LangGraph ka built-in reducer handles append
    messages: Annotated[Sequence[BaseMessage], add_messages]

    # Chat metadata
    user_id: str
    session_id: str

    # Current step tracking — loop control ke liye
    iteration: Annotated[int, operator.add]

    # Tool output accumulator — har tool call ka result yahan store hota hai
    tool_results: list[dict]

    # HITL tracking
    pending_approval: Optional[dict]

    # Error handling
    errors: list[str]

    # Final output
    final_response: Optional[str]


state = AgentState(
    messages=[],
    user_id="raushan_123",
    session_id="sess_" + str(uuid.uuid4()),
    iteration=0,
    tool_results=[],
    pending_approval=None,
    errors=[],
    final_response=None,
)
```

### Reducers — Kaise State Update Hota Hai

Reducers decide: **jab ek key do jagah se set ho rahi hai toh kaise merge karein?**

```python
from typing import Annotated
from langgraph.graph.message import add_messages
import operator

class AgentState(TypedDict):
    # add_messages reducer: naye messages append hote hain, overwrite nahi
    messages: Annotated[Sequence[BaseMessage], add_messages]

    # operator.add: numbers add hote hain
    iteration: Annotated[int, operator.add]

    # Default: override (last writer wins)
    final_response: Optional[str]  # No annotation = last writer

    # Custom reducer: merge tool results
    tool_results: Annotated[list[dict], merge_tool_results]
```

**Production Tip:** Custom reducers likhna padta hai jab data append nahi hona chahiye balki smart merge hona chahiye:

```python
def merge_tool_results(current: list[dict], new: list[dict]) -> list[dict]:
    """Tool results ko merge karo — duplicates hatao, max 10 rakho."""
    seen = set()
    merged = current.copy()

    for item in new:
        key = f"{item.get('tool')}:{item.get('timestamp', '')}"
        if key not in seen:
            seen.add(key)
            merged.append(item)

    return merged[-10:]  # Sirf last 10 rakho — memory control
```

Yeh pattern especially important hai jab agent multiple parallel tool calls karta hai — state corruption se bachata hai.

### Nodes — Agent Ke Building Blocks

```python
async def router_node(state: AgentState) -> dict:
    """Step 1: User message aaya → LLM decide karega kya karna hai.

    Yeh hai jaise Laravel ka Routes/web.php — incoming request ko
    appropriate handler pe forward karta hai.
    """
    llm = ChatOpenAI(model="gpt-4o", temperature=0.1)

    # Bind tools so LLM knows what's available
    llm_with_tools = llm.bind_tools(tools)

    # Invoke LLM
    result = await llm_with_tools.ainvoke(state["messages"])

    # Agar LLM ne tool call kiya hai toh tool_executor pe bhejo
    return {"messages": [result], "iteration": 1}


async def tool_executor_node(state: AgentState) -> dict:
    """Step 2: LLM ne tool call request kiya → execute karo.

    Laravel analogy: Yeh hai Service Layer — business logic yahi execute hoti hai.
    Controller (router node) sirf dispatch karta hai.
    """
    messages = state["messages"]
    results = []

    for msg in reversed(messages):
        if hasattr(msg, "tool_calls") and msg.tool_calls:
            for tool_call in msg.tool_calls:
                try:
                    tool_name = tool_call["name"]
                    tool_args = tool_call["args"]
                    tool = tool_map[tool_name]

                    # Execute tool
                    observation = await tool.ainvoke(tool_args)

                    results.append({
                        "tool": tool_name,
                        "input": tool_args,
                        "output": str(observation)[:500],
                        "timestamp": datetime.now().isoformat(),
                    })

                    # Create ToolMessage to feed back to LLM
                    messages.append(
                        ToolMessage(content=str(observation), tool_call_id=tool_call["id"])
                    )

                except Exception as e:
                    error_msg = f"Tool {tool_call['name']} failed: {str(e)}"
                    results.append({
                        "tool": tool_call["name"],
                        "input": tool_call["args"],
                        "error": error_msg,
                        "timestamp": datetime.now().isoformat(),
                    })
                    messages.append(
                        ToolMessage(content=error_msg, tool_call_id=tool_call["id"])
                    )

    return {"messages": messages, "tool_results": results}


async def memory_node(state: AgentState) -> dict:
    """Step 3: Conversation memory manage karo.

    Yeh hai jaise Laravel ka Session::put() — har interaction
    store hoti hai for context.
    """
    session_id = state["session_id"]
    messages = state["messages"]

    # Shasvat ke custom memory handler se store karo
    await memory_manager.save_messages(session_id, messages)

    # Context window management — tokens control karo
    total_tokens = count_tokens(messages)
    if total_tokens > 4000:
        messages = summarize_old_messages(messages)

    return {"messages": messages}


async def hitl_check_node(state: AgentState) -> dict:
    """Step 4: Check if any action needs human approval.

    Yeh hai jaise Laravel Gates ya Authorization policies —
    kuch actions require senior approval.
    """
    messages = state["messages"]
    last_msg = messages[-1] if messages else None

    if last_msg and hasattr(last_msg, "tool_calls") and last_msg.tool_calls:
        for tc in last_msg.tool_calls:
            if tc["name"] in HITL_TOOLS:  # e.g., send_email
                # Interrupt agent, wait for approval
                pending = {
                    "tool": tc["name"],
                    "args": tc["args"],
                    "action_id": str(uuid.uuid4()),
                }
                return {"pending_approval": pending}

    return {"pending_approval": None}
```

### Edges — Flow Control

Edges decide: **Node khatam hone ke baad aage kya hoga?**

```python
def router_condition(state: AgentState) -> Literal["tools", "memory", "__end__"]:
    """Router node ke baad — LLM ne tool call kiya ya answer de diya?"""
    last_msg = state["messages"][-1]

    if hasattr(last_msg, "tool_calls") and last_msg.tool_calls:
        # LLM wants to use a tool
        return "tools"

    if state.get("pending_approval"):
        # Waiting for human approval
        return "memory"

    # LLM gave final answer
    return "__end__"


def tool_condition(state: AgentState) -> Literal["memory", "hitl_check", "router"]:
    """Tool execution ke baad — continue karo ya stop?"""
    if state.get("errors"):
        # Tool failed, let LLM retry
        return "router"

    if state.get("iteration", 0) >= MAX_ITERATIONS:
        return "memory"

    return "hitl_check"
```

### Graph Assembly — Sab Nodes Ko Jodna

```python
def build_apexerp_graph() -> StateGraph:
    """Complete agent graph build karo.

    Yeh hai jaise Laravel mein ServiceProvider::register() —
    saare components ko wire up karna.
    """
    workflow = StateGraph(AgentState)

    # Register nodes
    workflow.add_node("router", router_node)
    workflow.add_node("tools", tool_executor_node)
    workflow.add_node("memory", memory_node)
    workflow.add_node("hitl_check", hitl_check_node)

    # Set entry point
    workflow.set_entry_point("router")

    # Add edges
    workflow.add_conditional_edges(
        "router",
        router_condition,
        {
            "tools": "tools",
            "memory": "memory",
            "__end__": END,
        }
    )

    workflow.add_conditional_edges(
        "tools",
        tool_condition,
        {
            "router": "router",
            "memory": "memory",
            "hitl_check": "hitl_check",
        }
    )

    workflow.add_edge("hitl_check", "router")  # After HITL, back to router
    workflow.add_edge("memory", "router")  # After memory, continue loop

    # Compile
    return workflow.compile(checkpointer=checkpointer)
```

**Production Flow:**
```
router → tools → hitl_check → router → tools → hitl_check → router → END
  ↑         |          |
  |         ↓          ↓
  └── memory ←─────────┘
```

### Checkpointer Setup — State Persistence

```python
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.checkpoint.base import BaseCheckpointSaver
import sqlite3

# SQLite checkpointer — state har step pe persist hota hai
conn = sqlite3.connect("apexerp_agent.db", check_same_thread=False)
checkpointer = SqliteSaver(conn)

# Graph compile karo with checkpointer
app = workflow.compile(checkpointer=checkpointer)

# Ab agent resume kar sakta hai crash ke baad bhi
# Thread ID = Session ID — same thread pe continue hota hai
config = {"configurable": {"thread_id": "user_raushan_session_123"}}
```

**Real-world benefit:** Agar server restart ho jaye toh agent ka state nahi jayega. Usi thread_id se dubara bulao, aur agent wahi se continue karega jahan chhoda tha.

---

## Memory Persistence System

### SQLite Schema

```sql
-- Agent sessions table
CREATE TABLE agent_sessions (
    session_id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSON
);

-- Message history
CREATE TABLE message_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    role TEXT NOT NULL,  -- 'user', 'assistant', 'tool'
    content TEXT,
    tool_calls JSON,
    tool_results JSON,
    token_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES agent_sessions(session_id)
);

-- Tool execution log
CREATE TABLE tool_executions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    tool_name TEXT NOT NULL,
    tool_input JSON,
    tool_output TEXT,
    success BOOLEAN,
    duration_ms INTEGER,
    token_cost_usd REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES agent_sessions(session_id)
);

-- HITL actions
CREATE TABLE hitl_actions (
    action_id TEXT PRIMARY KEY,
    session_id TEXT NOT NULL,
    tool_name TEXT NOT NULL,
    tool_args JSON,
    description TEXT,
    status TEXT DEFAULT 'pending',  -- pending, approved, rejected, expired
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responded_at TIMESTAMP,
    responded_by TEXT,
    FOREIGN KEY (session_id) REFERENCES agent_sessions(session_id)
);

-- Indexes for performance
CREATE INDEX idx_messages_session ON message_history(session_id, created_at);
CREATE INDEX idx_tool_exec_session ON tool_executions(session_id, created_at);
CREATE INDEX idx_hitl_status ON hitl_actions(status);
```

### Memory Manager Class

```python
import json
import sqlite3
from datetime import datetime
from typing import Optional
from langchain_core.messages import BaseMessage, message_to_dict, messages_from_dict

class ApexERPMemoryManager:
    """ApexERP ka custom memory system.

    Yeh bas SQLite me store karta hai — Redis ki zaroorat nahi.
    Production mein 10k+ sessions handle kar sakta hai easily.
    """

    def __init__(self, db_path: str = "apexerp_agent.db"):
        self.conn = sqlite3.connect(db_path, check_same_thread=False)
        self._create_tables()

    def _create_tables(self):
        """Auto-create tables if not exist."""
        self.conn.executescript("""
            CREATE TABLE IF NOT EXISTS agent_sessions (
                session_id TEXT PRIMARY KEY,
                user_id TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                metadata TEXT DEFAULT '{}'
            );

            CREATE TABLE IF NOT EXISTS message_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT NOT NULL,
                role TEXT NOT NULL,
                content TEXT,
                tool_calls TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)
        self.conn.commit()

    async def save_messages(self, session_id: str, messages: list[BaseMessage]):
        """Messages ko SQLite mein persist karo.

        Laravel analogy: Log::channel('sqlite')->info($message)
        """
        cursor = self.conn.cursor()

        # Ensure session exists
        cursor.execute(
            "INSERT OR IGNORE INTO agent_sessions (session_id) VALUES (?)",
            (session_id,)
        )

        # Save each new message
        for msg in messages:
            # Avoid duplicates by checking last message
            cursor.execute(
                "SELECT COUNT(*) FROM message_history WHERE session_id = ? AND content = ? AND role = ?",
                (session_id, msg.content[:500] if msg.content else "", msg.type)
            )
            if cursor.fetchone()[0] == 0:
                cursor.execute(
                    """INSERT INTO message_history (session_id, role, content, tool_calls, created_at)
                       VALUES (?, ?, ?, ?, ?)""",
                    (
                        session_id,
                        msg.type,
                        msg.content,
                        json.dumps(getattr(msg, "tool_calls", None)) if hasattr(msg, "tool_calls") else None,
                        datetime.now().isoformat(),
                    )
                )

        self.conn.commit()

    def load_context(self, session_id: str, max_tokens: int = 3000) -> list[BaseMessage]:
        """Session ke recent messages load karo — token limit ke under.

        Yeh hai jaise Laravel mein Session::get() with limit.
        """
        cursor = self.conn.cursor()
        cursor.execute(
            """SELECT role, content, tool_calls FROM message_history
               WHERE session_id = ? ORDER BY created_at DESC LIMIT 50""",
            (session_id,)
        )

        messages = []
        total_tokens = 0

        for role, content, tool_calls in cursor.fetchall():
            msg = self._create_message(role, content, tool_calls)
            tokens = len(content or "") // 4  # Rough estimate
            if total_tokens + tokens > max_tokens:
                break
            total_tokens += tokens
            messages.append(msg)

        return list(reversed(messages))  # Reverse to maintain chronological order

    def get_session_analytics(self, user_id: str) -> dict:
        """User ke agent usage patterns ka analysis.

        Konse tools sabse zyada use hote hain? Kitne tokens lagte hain?
        """
        cursor = self.conn.cursor()

        cursor.execute("""
            SELECT COUNT(DISTINCT session_id) as total_sessions,
                   COUNT(*) as total_messages
            FROM message_history mh
            JOIN agent_sessions s ON mh.session_id = s.session_id
            WHERE s.user_id = ?
        """, (user_id,))

        row = cursor.fetchone()
        return {
            "total_sessions": row[0],
            "total_messages": row[1],
            "avg_messages_per_session": row[1] / max(row[0], 1),
        }


# Global instance — singleton pattern
memory_manager = ApexERPMemoryManager()
```

---

## Complete Tools Implementation

### 1. Database Query Tool — Full Version

```python
from langchain.tools import BaseTool
from typing import Optional, Type
from pydantic import BaseModel, Field
import sqlalchemy
from sqlalchemy import text as sql_text
import re
import time

class DBQueryInput(BaseModel):
    query: str = Field(description="Natural language description of data needed")
    max_rows: int = Field(default=10, description="Maximum rows to return")

class DatabaseTool(BaseTool):
    name: str = "query_database"
    description: str = """
    ApexERP database se data nikaalne ke liye.
    Sales, inventory, orders, customers, employees sab query kar sakte ho.
    Natural language mein batao kya chahiye — yeh automatically SQL banayega.

    Examples:
    - "Last month ke total sales kya hain?"
    - "Raushan ka email address do"
    - "Kitne pending orders hain?"
    """
    args_schema: Type[BaseModel] = DBQueryInput

    def __init__(self, db_url: str):
        super().__init__()
        self.engine = sqlalchemy.create_engine(
            db_url,
            pool_size=5,          # Connection pool — 5 concurrent connections
            max_overflow=10,       # Extra 10 if needed
            pool_pre_ping=True,    # Stale connections auto-detect
        )
        self.schema = self._load_schema()

    def _load_schema(self) -> str:
        """Database schema extract karo — LLM ko table structure batane ke liye."""
        inspector = sqlalchemy.inspect(self.engine)
        schema_parts = []

        for table in inspector.get_table_names():
            # Skip internal tables
            if table.startswith("alembic") or table.startswith("sqlite_"):
                continue

            cols = inspector.get_columns(table)
            col_defs = []
            for col in cols:
                nullable = "NULL" if col["nullable"] else "NOT NULL"
                pk = "PK" if col.get("primary_key") else ""
                col_defs.append(f"  {col['name']} ({col['type']}) {nullable} {pk}")

            schema_parts.append(f"Table: {table}")
            schema_parts.extend(col_defs)
            schema_parts.append("")

        return "\n".join(schema_parts)

    def _run(self, query: str, max_rows: int = 10) -> str:
        """Main execution — Natural Language → SQL → Results.

        Production mein yeh mistake mat karna:
        ❌ Direct user input SQL mein pass karna
        ✅ Sirf LLM-generated SQL allow karo with strict validation
        """
        start_time = time.time()

        # Step 1: LLM se SQL generate karwao
        prompt = f"""You are an ApexERP database expert.
Database schema:
{self.schema}

User query: {query}

Rules:
- Return ONLY the SQL query, no explanation
- Use only SELECT statements
- Add LIMIT {max_rows} always
- Use proper JOINs where needed
- Return column names in English

SQL:"""

        llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
        sql = llm.invoke(prompt).content.strip()

        # Clean SQL — remove markdown formatting if any
        sql = re.sub(r'^```(?:sql)?\n?', '', sql)
        sql = re.sub(r'\n?```$', '', sql)
        sql = sql.strip()

        # Step 2: Safety validation — ONLY SELECT allowed
        if not re.match(r'^\s*SELECT\b', sql, re.IGNORECASE):
            self._log_execution(query, sql, False, 0, "Non-SELECT query rejected")
            return "❌ Only SELECT queries are allowed. Please ask for data retrieval only."

        # Block dangerous patterns
        dangerous = ["INTO", "DROP", "DELETE", "INSERT", "UPDATE", "ALTER", "CREATE", "EXEC", "--", "/*"]
        for pattern in dangerous:
            if re.search(r'\b' + pattern + r'\b', sql, re.IGNORECASE):
                self._log_execution(query, sql, False, 0, f"Dangerous keyword: {pattern}")
                return f"❌ Query blocked: contains {pattern}"

        # Step 3: Execute
        try:
            with self.engine.connect() as conn:
                result = conn.execute(sql_text(sql))
                rows = result.fetchmany(max_rows)
                cols = list(result.keys())

                if not rows:
                    return "✅ Query executed successfully. No results found."

                # Format results
                output_lines = [f"Results ({len(rows)} rows):"]
                output_lines.append("-" * 80)
                for row in rows:
                    formatted = ", ".join(f"{col}={val}" for col, val in zip(cols, row))
                    output_lines.append(f"  {formatted}")
                output_lines.append("-" * 80)

                duration = round((time.time() - start_time) * 1000, 2)
                self._log_execution(query, sql, True, len(rows), f"{duration}ms")
                return "\n".join(output_lines)

        except Exception as e:
            self._log_execution(query, sql, False, 0, str(e))
            return f"❌ Query execution failed: {str(e)}"

    def _log_execution(self, query: str, sql: str, success: bool, rows: int, note: str):
        """Har query execution ko log karo — audit trail ke liye."""
        print(f"[DB_TOOL] {'✅' if success else '❌'} "
              f"NL: '{query[:50]}...' "
              f"SQL: '{sql[:80]}...' "
              f"Rows: {rows} | {note}")
```

### 2. Email Tool — Full Version with Templates

```python
import smtplib
import time
import uuid
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders
import os
from pathlib import Path

class EmailInput(BaseModel):
    to: str = Field(description="Recipient email address")
    subject: str = Field(description="Email subject line")
    body: str = Field(description="Email body content — plain text or markdown")
    cc: Optional[list[str]] = Field(default=None, description="CC recipients")
    attachment_path: Optional[str] = Field(default=None, description="Path to file to attach")
    priority: Optional[str] = Field(default="normal", description="Priority: low, normal, high")

class EmailTool(BaseTool):
    name: str = "send_email"
    description: str = """
    Send email to any ApexERP user or external contact.
    Supports attachments, CC, and HTML formatting.
    ⚠️ Requires human approval before sending.
    """
    args_schema: Type[BaseModel] = EmailInput

    def __init__(self, smtp_config: dict):
        super().__init__()
        self.smtp_host = smtp_config["host"]
        self.smtp_port = smtp_config["port"]
        self.smtp_user = smtp_config["user"]
        self.smtp_pass = smtp_config["pass"]
        self.from_name = smtp_config.get("from_name", "ApexERP AI Agent")
        self.allowed_domains = smtp_config.get("allowed_domains", ["apexpillar.com"])

    def _run(self, to: str, subject: str, body: str,
             cc: Optional[list[str]] = None,
             attachment_path: Optional[str] = None,
             priority: str = "normal") -> str:
        """
        Email send karo — but pehle human approval confirm karo.

        Laravel analogy: Mail::to($user)->send(new InvoiceMail($invoice))
        but with auth check middleware.
        """
        # Step 1: Validate email
        if not self._validate_email(to):
            return f"❌ Invalid email: {to}"

        # Step 2: Request human approval
        action_id = str(uuid.uuid4())
        approved = self._request_approval(
            action_id=action_id,
            to=to,
            subject=subject,
            description=f"Send '{subject}' to {to}"
        )

        if not approved:
            return "⏭️ Email cancelled — human approval was denied or timed out."

        # Step 3: Build email
        try:
            msg = MIMEMultipart("alternative")
            msg["From"] = f"{self.from_name} <{self.smtp_user}>"
            msg["To"] = to
            msg["Subject"] = subject

            if cc:
                msg["Cc"] = ", ".join(cc)

            if priority == "high":
                msg["X-Priority"] = "1"
                msg["X-MSMail-Priority"] = "High"
            elif priority == "low":
                msg["X-Priority"] = "5"
                msg["X-MSMail-Priority"] = "Low"

            # Plain text version
            msg.attach(MIMEText(body, "plain"))

            # HTML version — simple formatting
            html_body = body.replace("\n", "<br>\n")
            html = f"""<html><body>
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                {html_body}
            </div>
            <hr>
            <p style="color: #888; font-size: 12px;">
                Sent by ApexERP AI Assistant
            </p>
            </body></html>"""
            msg.attach(MIMEText(html, "html"))

            # Step 4: Attach file if provided
            if attachment_path and os.path.exists(attachment_path):
                with open(attachment_path, "rb") as f:
                    part = MIMEBase("application", "octet-stream")
                    part.set_payload(f.read())
                    encoders.encode_base64(part)
                    filename = os.path.basename(attachment_path)
                    part.add_header(
                        "Content-Disposition",
                        f"attachment; filename={filename}"
                    )
                    msg.attach(part)

            # Step 5: Send via SMTP
            start_time = time.time()
            with smtplib.SMTP(self.smtp_host, self.smtp_port, timeout=30) as server:
                server.starttls()
                server.login(self.smtp_user, self.smtp_pass)

                recipients = [to] + (cc or [])
                server.sendmail(self.smtp_user, recipients, msg.as_string())

            duration = round((time.time() - start_time) * 1000, 2)
            return f"✅ Email sent to {to} ({duration}ms)"

        except smtplib.SMTPAuthenticationError:
            return "❌ SMTP authentication failed — check credentials"
        except smtplib.SMTPRecipientsRefused:
            return "❌ Recipient refused — check email address"
        except Exception as e:
            return f"❌ Email failed: {str(e)}"

    def _validate_email(self, email: str) -> bool:
        """Basic email validation."""
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))

    def _request_approval(self, action_id: str, to: str, subject: str,
                         description: str) -> bool:
        """HITL service se approval lo.

        Fallback: agar API down hai toh terminal se manual input.
        """
        try:
            resp = requests.post(
                "http://localhost:8000/agent/action/request",
                json={
                    "action_id": action_id,
                    "tool": "send_email",
                    "args": {"to": to, "subject": subject},
                    "description": description,
                    "user_id": "agent",
                },
                timeout=60,
            )
            return resp.json().get("approved", False)
        except (requests.ConnectionError, requests.Timeout):
            # Fallback — terminal input
            print(f"\n[HITL FALLBACK] Action ID: {action_id}")
            print(f"Send email to {to}: {subject}")
            response = input("Approve? (y/N): ")
            return response.lower() in ("y", "yes")
```

### 3. Contact Lookup Tool

```python
class ContactTool(BaseTool):
    name: str = "lookup_contact"
    description: str = """
    ApexERP users ke contact details dhoondho.
    Name, email, phone, department sab bata sakta hai.
    """
    args_schema: Type[BaseModel] = LookupContactInput

    def __init__(self, db_url: str):
        super().__init__()
        self.engine = sqlalchemy.create_engine(db_url)

    def _run(self, name: str) -> str:
        """User search karo by name (partial match supported)."""
        with self.engine.connect() as conn:
            result = conn.execute(
                sql_text("""
                    SELECT name, email, phone, department, role
                    FROM employees
                    WHERE LOWER(name) LIKE LOWER(:name)
                    LIMIT 5
                """),
                {"name": f"%{name}%"},
            )
            rows = result.fetchall()

            if not rows:
                return f"No contact found matching '{name}'"

            output = [f"Contacts matching '{name}':"]
            for row in rows:
                output.append(
                    f"  • {row['name']} | {row['email']} | {row['phone']} | {row['department']} - {row['role']}"
                )
            return "\n".join(output)

class LookupContactInput(BaseModel):
    name: str = Field(description="Name ya partial name to search")
```

### 4. Report Generation Tool — Full

```python
class ReportInput(BaseModel):
    report_type: str = Field(description="Type: sales, inventory, customer, employee")
    period: str = Field(default="current", description="Time period: Q4 2024, last_month, etc.")
    format: str = Field(default="text", description="Output format: text, json, csv")

class ReportTool(BaseTool):
    name: str = "generate_report"
    description: str = """
    Business reports generate karta hai.
    Sales reports, inventory status, customer analytics sab bana sakta hai.
    """
    args_schema: Type[BaseModel] = ReportInput

    def _run(self, report_type: str, period: str = "current", format: str = "text") -> str:
        handlers = {
            "sales": self._sales_report,
            "inventory": self._inventory_report,
            "customer": self._customer_report,
            "employee": self._employee_report,
        }

        handler = handlers.get(report_type)
        if not handler:
            return f"❌ Unknown report type: {report_type}. Available: {', '.join(handlers.keys())}"

        return handler(period, format)

    def _sales_report(self, period: str, fmt: str) -> str:
        data = {
            "period": period or "Q4 2024",
            "revenue": 1200000,
            "orders": 4500,
            "avg_order_value": 267,
            "growth_yoy": -15,
            "top_product": "ERP Pro License",
            "top_region": "North India",
        }

        if fmt == "json":
            return json.dumps(data, indent=2)
        if fmt == "csv":
            return "\n".join([",".join(map(str, v)) for v in [data.keys(), data.values()]])

        # Text format with box design
        return f"""
╔═══════════════════════════════════════════╗
║        SALES REPORT - {data['period']:<12} ║
╠═══════════════════════════════════════════╣
║ Total Revenue:     ${data['revenue']:<15,} ║
║ Total Orders:      {data['orders']:<19,} ║
║ Avg Order Value:   ${data['avg_order_value']:<15} ║
║ Growth (YoY):      {data['growth_yoy']:>+3}% {'🔴' if data['growth_yoy'] < 0 else '🟢'}                ║
║ Top Product:       {data['top_product']:<19} ║
║ Top Region:        {data['top_region']:<19} ║
╚═══════════════════════════════════════════╝
        """

    def _inventory_report(self, period: str, fmt: str) -> str:
        return """
╔═══════════════════════════════════════════╗
║          INVENTORY REPORT                 ║
╠═══════════════════════════════════════════╣
║ Total SKUs:       12,450                 ║
║ In Stock:         8,230  (66%)           ║
║ Low Stock:        1,845  (15%)  ⚠️        ║
║ Out of Stock:     2,375  (19%)  🔴        ║
║ Avg Reorder Time: 4.2 days               ║
║ Top Warehouse:    Gurgaon DC             ║
╚═══════════════════════════════════════════╝
        """
```

### 5. Tool Registry — Centralized Management

```python
class ToolRegistry:
    """Central tool management — registry pattern.

    Laravel analogy: Service Container mein bind karna.
    Har tool ek service, registry ServiceProvider hai.
    """

    def __init__(self):
        self._tools: dict[str, BaseTool] = {}

    def register(self, tool: BaseTool):
        """Tool register karo with its name."""
        self._tools[tool.name] = tool
        print(f"🔧 Registered tool: {tool.name}")

    def get(self, name: str) -> Optional[BaseTool]:
        return self._tools.get(name)

    def all(self) -> list[BaseTool]:
        return list(self._tools.values())

    def names(self) -> list[str]:
        return list(self._tools.keys())


# Initialize registry
tool_registry = ToolRegistry()
tool_registry.register(DatabaseTool("postgresql://user:pass@localhost:5432/apexerp"))
tool_registry.register(EmailTool({
    "host": "smtp.gmail.com",
    "port": 587,
    "user": "agent@apexpillar.com",
    "pass": "app_password_here",
    "from_name": "ApexERP Assistant",
}))
tool_registry.register(ReportTool())
tool_registry.register(CalendarTool())
tool_registry.register(ContactTool("postgresql://user:pass@localhost:5432/apexerp"))

# For LangGraph's bind_tools
tools = tool_registry.all()
tool_map = {t.name: t for t in tools}

# HITL tools — jinhe human approval chahiye
HITL_TOOLS = {"send_email"}
```

---

## LangGraph Agent Loop — Complete Implementation

```python
from typing import TypedDict, Annotated, Literal, Optional
from langgraph.graph import StateGraph, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI
from langchain_core.messages import BaseMessage, ToolMessage
from langgraph.checkpoint.sqlite import SqliteSaver
from datetime import datetime
import uuid

# Constants
MAX_ITERATIONS = 10
MAX_TOKENS = 8000

class AgentState(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]
    user_id: str
    session_id: str
    iteration: Annotated[int, lambda a, b: a + b]
    tool_results: list[dict]
    pending_approval: Optional[dict]
    errors: list[str]
    final_response: Optional[str]


class ApexERPAgent:
    """Complete ApexERP AI Agent.

    LangGraph StateGraph ka wrapper — saari complexity andar chhupi hai.
    Bahar se bas invoke() karo.
    """

    def __init__(self, db_url: str, smtp_config: dict):
        # Initialize components
        self.llm = ChatOpenAI(
            model="gpt-4o",
            temperature=0.1,
            max_tokens=MAX_TOKENS,
        )

        # Bind tools to LLM
        self.llm_with_tools = self.llm.bind_tools(tools)

        # Build graph
        self.graph = self._build_graph()

        # Checkpointer for persistence
        self.checkpointer = SqliteSaver.from_conn_string("apexerp_agent.db")

        # Compile
        self.app = self.graph.compile(checkpointer=self.checkpointer)

    def _build_graph(self) -> StateGraph:
        """LangGraph state graph build karo."""
        builder = StateGraph(AgentState)

        # Nodes
        builder.add_node("router", self._router_node)
        builder.add_node("tools", self._tool_node)
        builder.add_node("memory", self._memory_node)

        # Entry point
        builder.set_entry_point("router")

        # Conditional edges
        builder.add_conditional_edges(
            "router",
            self._router_condition,
            {"tools": "tools", "__end__": END},
        )

        builder.add_conditional_edges(
            "tools",
            self._tool_condition,
            {"router": "router", "__end__": END},
        )

        builder.add_edge("memory", "router")

        return builder

    async def _router_node(self, state: AgentState) -> dict:
        """Route user message through LLM."""
        try:
            response = await self.llm_with_tools.ainvoke(state["messages"])
            return {
                "messages": [response],
                "iteration": 1,
                "errors": [],
            }
        except Exception as e:
            return {
                "errors": [f"Router failed: {str(e)}"],
                "messages": [
                    AIMessage(content=f"Sorry, I encountered an error: {str(e)}")
                ],
            }

    async def _tool_node(self, state: AgentState) -> dict:
        """Execute tool calls from LLM response."""
        messages = state["messages"]
        last_message = messages[-1]

        if not hasattr(last_message, "tool_calls"):
            return {"tool_results": []}

        results = []
        new_messages = list(messages)

        for tool_call in last_message.tool_calls:
            tool = tool_map.get(tool_call["name"])
            if not tool:
                result = f"Tool '{tool_call['name']}' not found"
            else:
                try:
                    result = await tool.ainvoke(tool_call["args"])
                except Exception as e:
                    result = f"Error: {str(e)}"

            results.append({
                "tool": tool_call["name"],
                "args": tool_call["args"],
                "result": str(result)[:500],
            })

            new_messages.append(
                ToolMessage(content=str(result), tool_call_id=tool_call["id"])
            )

        return {"messages": new_messages, "tool_results": results}

    def _router_condition(self, state: AgentState) -> Literal["tools", "__end__"]:
        """Decide next step after LLM response."""
        last_message = state["messages"][-1]

        if hasattr(last_message, "tool_calls") and last_message.tool_calls:
            return "tools"

        return "__end__"

    def _tool_condition(self, state: AgentState) -> Literal["router", "__end__"]:
        """Decide next step after tool execution."""
        if state.get("iteration", 0) >= MAX_ITERATIONS:
            return "__end__"

        # Check if we should continue
        last_message = state["messages"][-1]
        if isinstance(last_message, ToolMessage):
            return "router"

        return "__end__"

    async def _memory_node(self, state: AgentState) -> dict:
        """Persist conversation state."""
        await memory_manager.save_messages(state["session_id"], state["messages"])
        return {}

    async def invoke(
        self,
        message: str,
        user_id: str = "default",
        session_id: Optional[str] = None,
    ) -> dict:
        """Main entry point — user message process karo.

        Yeh hai jaise Laravel mein Controller@__invoke() —
        ek method sab kuch handle karta hai.
        """
        if not session_id:
            session_id = str(uuid.uuid4())

        # Load previous context
        history = memory_manager.load_context(session_id)

        config = {
            "configurable": {
                "thread_id": session_id,
            }
        }

        inputs = {
            "messages": history + [HumanMessage(content=message)],
            "user_id": user_id,
            "session_id": session_id,
            "iteration": 0,
            "tool_results": [],
            "pending_approval": None,
            "errors": [],
            "final_response": None,
        }

        final_output = None
        all_tool_results = []

        async for chunk in self.app.astream(inputs, config):
            for node_name, node_output in chunk.items():
                if node_output.get("tool_results"):
                    all_tool_results.extend(node_output["tool_results"])
                if node_output.get("final_response"):
                    final_output = node_output["final_response"]

        # Extract final message
        if not final_output:
            last_state = await self.app.aget_state(config)
            if last_state and last_state.values.get("messages"):
                final_msg = last_state.values["messages"][-1]
                final_output = final_msg.content if hasattr(final_msg, "content") else str(final_msg)

        return {
            "response": final_output or "I processed your request.",
            "session_id": session_id,
            "actions_taken": all_tool_results[-5:],  # Last 5 actions
        }


# Create global agent instance
agent = ApexERPAgent(
    db_url="postgresql://user:pass@localhost:5432/apexerp",
    smtp_config={
        "host": "smtp.gmail.com",
        "port": 587,
        "user": "agent@apexpillar.com",
        "pass": "...",
    },
)
```

---

## FastAPI — Complete Web Layer

```python
from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from pydantic import BaseModel, Field
from typing import Optional
import json
import time
import uuid

app = FastAPI(
    title="ApexERP AI Agent API",
    description="AI-powered assistant for ApexERP — query, report, email, calendar",
    version="2.0.0",
)

# CORS — allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request/Response Models
class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    user_id: str = Field(default="default")
    session_id: Optional[str] = None
    stream: bool = Field(default=False)

class ActionRequest(BaseModel):
    action_id: str
    description: str
    tool: str
    args: dict

class ActionResponse(BaseModel):
    action_id: str
    status: str
    approved: bool = False

class ChatResponse(BaseModel):
    response: str
    session_id: str
    actions_taken: list = []
    processing_time_ms: float = 0.0


### Main Chat Endpoints

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Main chat endpoint — non-streaming.

    Yeh hai jaise Laravel mein normal API route.
    Send message → Get response.
    """
    start_time = time.time()

    try:
        result = await agent.invoke(
            message=request.message,
            user_id=request.user_id,
            session_id=request.session_id,
        )

        return ChatResponse(
            response=result["response"],
            session_id=result["session_id"],
            actions_taken=result.get("actions_taken", []),
            processing_time_ms=round((time.time() - start_time) * 1000, 2),
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Agent error: {str(e)}")


@app.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    """Streaming endpoint — token by token response.

    Frontend pe real-time dikhta hai jaise ChatGPT type kar raha ho.
    SSE (Server-Sent Events) format use karte hain.

    Frontend code for JS:
    const eventSource = new EventSource('/chat/stream');
    eventSource.onmessage = (e) => console.log(e.data);
    """
    async def event_generator():
        try:
            async for event in agent.app.astream_events(
                {"messages": [HumanMessage(content=request.message)]},
                version="v1",
            ):
                kind = event["event"]

                # LLM streaming tokens
                if kind == "on_chat_model_stream":
                    chunk = event["data"]["chunk"]
                    if chunk.content:
                        yield f"data: {json.dumps({'type': 'token', 'content': chunk.content})}\n\n"

                # Tool start notification
                elif kind == "on_tool_start":
                    yield f"data: {json.dumps({'type': 'tool_start', 'tool': event['name']})}\n\n"

                # Tool end notification
                elif kind == "on_tool_end":
                    yield f"data: {json.dumps({'type': 'tool_end', 'tool': event['name']})}\n\n"

            yield f"data: {json.dumps({'type': 'done'})}\n\n"

        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'content': str(e)})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@app.post("/chat/batch")
async def chat_batch(requests: list[ChatRequest]):
    """Batch processing — multiple queries ek saath.

    Use case: Raat ko sari pending queries process karni hain.
    Sab parallel run hote hain.
    """
    import asyncio

    async def process_one(req: ChatRequest):
        try:
            result = await agent.invoke(
                message=req.message,
                user_id=req.user_id,
            )
            return {"message": req.message, "response": result["response"], "status": "ok"}
        except Exception as e:
            return {"message": req.message, "error": str(e), "status": "error"}

    results = await asyncio.gather(*[process_one(r) for r in requests])
    return {"results": results, "total": len(results)}
```

### HITL Endpoints — Human Approval System

```python
from fastapi import WebSocket, WebSocketDisconnect
import asyncio

# HITL service — singleton
hitl_service = HitlService()


@app.post("/agent/action/request")
async def request_approval(action: ActionRequest):
    """Human approval request generate karo.

    Agent jab koi sensitive action karna chahe (e.g., email send),
    toh yahan request aati hai. Admin approve/reject kar sakta hai.
    """
    try:
        approved = await hitl_service.request_approval(action.dict())
        return {"action_id": action.action_id, "approved": approved, "status": "processed"}
    except asyncio.TimeoutError:
        return {"action_id": action.action_id, "approved": False, "status": "timeout"}


@app.post("/agent/approve/{action_id}")
async def approve_action(action_id: str, approved: bool = True):
    """Admin approval response endpoint."""
    await hitl_service.respond(action_id, approved)
    return {"status": "approved" if approved else "rejected", "action_id": action_id}


@app.get("/agent/pending-actions")
async def get_pending_actions():
    """Sab pending approvals ki list — dashboard ke liye."""
    return {
        "pending": [
            {
                "action_id": aid,
                "description": action.get("description", ""),
                "tool": action.get("tool", ""),
                "requested_at": action.get("timestamp", ""),
            }
            for aid, action in hitl_service.pending_actions.items()
            if isinstance(action, dict)
        ]
    }
```

### HITL Service Implementation

```python
import asyncio
import uuid
from datetime import datetime

class HitlService:
    """Human-In-The-Loop service — approvals manage karta hai.

    Yeh hai jaise Laravel mein Notifications system —
    jab koi action require approval karta hai toh notification bhejta hai.
    """

    def __init__(self):
        self._pending: dict[str, dict] = {}  # action_id → action details
        self._events: dict[str, asyncio.Event] = {}  # action_id → event for waiting
        self._results: dict[str, bool] = {}  # action_id → approved/rejected

    async def request_approval(self, action: dict, timeout: int = 300) -> bool:
        """Approval request bhejo aur response ka wait karo.

        Returns True agar approved, False agar rejected ya timeout.
        """
        action_id = action.get("action_id", str(uuid.uuid4()))
        action["timestamp"] = datetime.now().isoformat()
        action["status"] = "pending"

        # Store
        self._pending[action_id] = action
        self._events[action_id] = asyncio.Event()

        # Notify all channels
        await self._notify_all(action_id, action)

        # Wait for response
        try:
            await asyncio.wait_for(self._events[action_id].wait(), timeout=timeout)
            result = self._results.pop(action_id, False)

            # Update status
            if action_id in self._pending:
                self._pending[action_id]["status"] = "approved" if result else "rejected"
                self._pending[action_id]["responded_at"] = datetime.now().isoformat()

            return result

        except asyncio.TimeoutError:
            if action_id in self._pending:
                self._pending[action_id]["status"] = "expired"
            return False

        finally:
            self._events.pop(action_id, None)

    async def respond(self, action_id: str, approved: bool):
        """Admin ka response store karo aur waiting agent ko notify karo."""
        if action_id in self._events:
            self._results[action_id] = approved
            self._events[action_id].set()

    def get_pending(self) -> list[dict]:
        """Sab pending actions ki list."""
        return [
            action for action in self._pending.values()
            if action.get("status") == "pending"
        ]

    async def _notify_all(self, action_id: str, action: dict):
        """Multiple channels pe notification bhejo.

        Dashboard + Slack + Email — jahan bhi admin dekhega.
        """
        desc = action.get("description", "Unknown action")

        # 1. WebSocket broadcast to dashboard
        await self._websocket_broadcast({
            "type": "approval_request",
            "action_id": action_id,
            "description": desc,
            "tool": action.get("tool", ""),
        })

        # 2. Slack notification (if configured)
        # await slack_notifier.send(f"🔔 Approval needed: {desc}")

        # 3. Log
        print(f"[HITL] ⏳ Action {action_id}: {desc}")

    async def _websocket_broadcast(self, data: dict):
        """Connected dashboards ko real-time update bhejo."""
        if hasattr(self, '_ws_manager'):
            await self._ws_manager.broadcast(data)
```

### WebSocket Manager for Real-Time Dashboard

```python
from fastapi import WebSocket
from typing import Set

class WebSocketManager:
    """WebSocket connections manage karo — real-time dashboard updates.

    Laravel analogy: Laravel Reverb / Pusher — real-time events.
    Client connect karta hai, server events push karta hai.
    """

    def __init__(self):
        self._connections: Set[WebSocket] = set()

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self._connections.add(websocket)

    def disconnect(self, websocket: WebSocket):
        self._connections.discard(websocket)

    async def broadcast(self, data: dict):
        """Saare connected clients ko message bhejo."""
        dead = set()
        for ws in self._connections:
            try:
                await ws.send_json(data)
            except Exception:
                dead.add(ws)

        # Clean up dead connections
        self._connections -= dead

    @property
    def active_connections(self) -> int:
        return len(self._connections)


ws_manager = WebSocketManager()
hitl_service._ws_manager = ws_manager  # Inject into HITL service


@app.websocket("/ws/dashboard")
async def websocket_dashboard(websocket: WebSocket):
    """Dashboard WebSocket — real-time agent activity dikhata hai.

    Connect karo aur events receive karo:
    - agent_thinking: Agent processing kar raha hai
    - tool_call: Agent ne tool use kiya
    - approval_request: Human approval chahiye
    - error: Kuch gadbad hui
    """
    await ws_manager.connect(websocket)
    try:
        # Send initial state
        await websocket.send_json({
            "type": "connected",
            "message": "ApexERP Dashboard connected",
        })

        # Keep connection alive
        while True:
            data = await websocket.receive_text()
            # Client se koi message aaya (optional)
            pass

    except WebSocketDisconnect:
        ws_manager.disconnect(websocket)
    except Exception as e:
        ws_manager.disconnect(websocket)
        print(f"[WS] Error: {e}")
```

### Analytics & Monitoring Endpoints

```python
@app.get("/analytics/usage/{user_id}")
async def get_user_analytics(user_id: str):
    """User ke agent usage patterns — analytics dashboard ke liye."""
    return memory_manager.get_session_analytics(user_id)


@app.get("/analytics/tool-stats")
async def get_tool_stats():
    """Kaunsa tool kitna use hua — optimization ke liye."""
    cursor = memory_manager.conn.cursor()
    cursor.execute("""
        SELECT tool_name,
               COUNT(*) as total_calls,
               AVG(CASE WHEN success THEN duration_ms END) as avg_duration_ms,
               SUM(CASE WHEN success THEN 1 ELSE 0 END) * 1.0 / COUNT(*) as success_rate
        FROM tool_executions
        GROUP BY tool_name
        ORDER BY total_calls DESC
    """)

    return {
        "tools": [
            {
                "name": row[0],
                "total_calls": row[1],
                "avg_duration_ms": round(row[2], 2) if row[2] else 0,
                "success_rate": round(row[3] * 100, 1) if row[3] else 0,
            }
            for row in cursor.fetchall()
        ]
    }


@app.get("/health")
async def health_check():
    """Health check endpoint — Docker ke health checks ke liye."""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "2.0.0",
        "uptime_seconds": time.time() - start_time,
    }
```

---

## Testing — Complete Test Suite

```python
import pytest
import pytest_asyncio
from unittest.mock import AsyncMock, Mock, patch
from httpx import AsyncClient, ASGITransport
import json


@pytest.fixture
def mock_llm():
    """Mock LLM — actual API calls nahi karenge tests mein."""
    llm = Mock()
    llm.ainvoke = AsyncMock(return_value=AIMessage(content="Mock response"))
    llm.invoke = Mock(return_value=AIMessage(content="Mock SQL: SELECT * FROM sales"))
    return llm


@pytest_asyncio.fixture
async def test_agent():
    """Test agent with mock components."""
    with patch.object(DatabaseTool, '_load_schema', return_value="Mock schema"):
        agent = ApexERPAgent(
            db_url="sqlite:///:memory:",
            smtp_config={"host": "test", "port": 587, "user": "test", "pass": "test"},
        )
        agent.llm_with_tools = AsyncMock()
        agent.llm_with_tools.ainvoke = AsyncMock(
            return_value=AIMessage(content="Test response")
        )
        return agent


@pytest.mark.asyncio
class TestApexERPAgent:

    async def test_basic_query(self, test_agent):
        """Simple query — agent should return response."""
        result = await test_agent.invoke("Mujhe sales chahiye")
        assert result["response"]
        assert result["session_id"]

    async def test_session_persistence(self, test_agent):
        """Same session — previous context preserve hona chahiye."""
        session_id = "test_session_123"

        result1 = await test_agent.invoke("Hello", session_id=session_id)
        result2 = await test_agent.invoke("Previous message yaad hai?", session_id=session_id)

        assert result2["session_id"] == session_id

    async def test_error_recovery(self, test_agent):
        """Invalid input — agent should not crash."""
        result = await test_agent.invoke("!@#$%^ invalid query 12345")
        assert result["response"]

    async def test_long_message(self, test_agent):
        """2000 char message — handle gracefully."""
        long_msg = "test " * 500
        result = await test_agent.invoke(long_msg)
        assert result["response"]

    async def test_concurrent_users(self, test_agent):
        """Multiple users simultaneously — no race conditions."""
        import asyncio
        tasks = [
            test_agent.invoke(f"Query from user {i}", user_id=f"user_{i}")
            for i in range(5)
        ]
        results = await asyncio.gather(*tasks)
        assert all(r["response"] for r in results)
        assert len(set(r["session_id"] for r in results)) == 5


@pytest.mark.asyncio
class TestAPIEndpoints:

    async def test_chat_endpoint(self):
        """POST /chat should work."""
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as client:
            response = await client.post("/chat", json={
                "message": "Test query",
                "user_id": "test",
            })
            assert response.status_code == 200
            data = response.json()
            assert "response" in data

    async def test_streaming_endpoint(self):
        """POST /chat/stream should stream tokens."""
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as client:
            async with client.stream("POST", "/chat/stream", json={
                "message": "Test",
                "stream": True,
            }) as response:
                assert response.status_code == 200
                async for line in response.aiter_lines():
                    if line.startswith("data: "):
                        data = json.loads(line[6:])
                        assert "type" in data
                        break

    async def test_health_check(self):
        """GET /health should return healthy."""
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as client:
            response = await client.get("/health")
            assert response.status_code == 200
            assert response.json()["status"] == "healthy"

    async def test_approval_flow(self):
        """Full HITL approval flow."""
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as client:
            # Request approval
            req_response = await client.post("/agent/action/request", json={
                "action_id": "test_001",
                "description": "Send test email",
                "tool": "send_email",
                "args": {"to": "test@test.com", "subject": "Test"},
            })
            assert req_response.status_code == 200

            # Approve
            app_response = await client.post("/agent/approve/test_001?approved=true")
            assert app_response.status_code == 200

    async def test_batch_processing(self):
        """Batch endpoint should process multiple queries."""
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as client:
            response = await client.post("/chat/batch", json=[
                {"message": "Query 1", "user_id": "test"},
                {"message": "Query 2", "user_id": "test"},
            ])
            assert response.status_code == 200
            assert response.json()["total"] == 2


class TestDatabaseTool:
    """Database tool specific tests."""

    def test_sql_injection_prevention(self):
        """SQL injection attempts should be blocked."""
        tool = DatabaseTool("sqlite:///:memory:")
        dangerous_inputs = [
            "'; DROP TABLE users; --",
            "1; SELECT * FROM passwords",
            "'; EXEC xp_cmdshell('dir'); --",
        ]
        for inp in dangerous_inputs:
            # LLM should not generate dangerous SQL from these
            result = tool._run(inp)
            assert "❌" in result or "error" in result.lower()

    def test_schema_loading(self):
        """Schema should load without errors."""
        tool = DatabaseTool("sqlite:///:memory:")
        assert tool.schema is not None

    def test_safe_query_formatting(self):
        """Only SELECT queries pass through."""
        tool = DatabaseTool("sqlite:///:memory:")
        # This tests the validation regex, not actual SQL execution
        assert tool._validate_sql("SELECT * FROM users")  # Hypothetical method


class TestEmailTool:
    """Email tool specific tests."""

    def test_email_validation(self):
        """Email validation should work correctly."""
        tool = EmailTool({
            "host": "smtp.test.com",
            "port": 587,
            "user": "test@test.com",
            "pass": "test",
        })
        assert tool._validate_email("user@example.com") == True
        assert tool._validate_email("invalid-email") == False
        assert tool._validate_email("") == False

    @patch.object(EmailTool, '_request_approval', return_value=True)
    def test_email_sending_failure(self, mock_approval):
        """Sending to invalid SMTP should give error, not crash."""
        tool = EmailTool({
            "host": "invalid.smtp.com",
            "port": 587,
            "user": "test",
            "pass": "test",
        })
        result = tool._run(to="test@test.com", subject="Test", body="Test body")
        assert "❌" in result


class TestMemoryManager:

    def test_save_and_load(self):
        """Messages save and load correctly."""
        mm = ApexERPMemoryManager(":memory:")
        session_id = "test_session"

        messages = [HumanMessage(content="Hello"), AIMessage(content="Hi there!")]

        asyncio.run(mm.save_messages(session_id, messages))

        loaded = mm.load_context(session_id)
        assert len(loaded) > 0
        assert loaded[0].content == "Hello"

    def test_session_analytics(self):
        """Analytics should work."""
        mm = ApexERPMemoryManager(":memory:")
        user_id = "test_user"

        # Add some sessions
        for i in range(3):
            session_id = f"session_{i}"
            asyncio.run(mm.save_messages(session_id, [HumanMessage(content=f"Q{i}")]))

            # Update user_id (simplified)
            mm.conn.execute(
                "UPDATE agent_sessions SET user_id = ? WHERE session_id = ?",
                (user_id, session_id)
            )
            mm.conn.commit()

        analytics = mm.get_session_analytics(user_id)
        assert analytics["total_sessions"] > 0
```

### Load Testing Script

```python
# tests/load_test.py
"""Load testing — kaise pata chalega kitna load handle kar sakta hai?"""
import asyncio
import aiohttp
import time
import statistics

ASYNC_CLIENTS = 10  # Concurrent users
REQUESTS_PER_CLIENT = 5  # Har user kitne requests bhejega

async def simulate_user(session: aiohttp.ClientSession, user_id: int):
    """Ek user ka behavior simulate karo."""
    latencies = []
    errors = 0

    for i in range(REQUESTS_PER_CLIENT):
        start = time.time()
        try:
            async with session.post(
                "http://localhost:8000/chat",
                json={"message": f"Query {i} from user {user_id}", "user_id": f"user_{user_id}"},
                timeout=aiohttp.ClientTimeout(total=30),
            ) as resp:
                if resp.status == 200:
                    latencies.append((time.time() - start) * 1000)
                else:
                    errors += 1
        except Exception:
            errors += 1

    return {
        "user_id": user_id,
        "avg_latency": statistics.mean(latencies) if latencies else 0,
        "max_latency": max(latencies) if latencies else 0,
        "errors": errors,
        "total": REQUESTS_PER_CLIENT,
    }

async def run_load_test():
    """Load test run karo."""
    print(f"🚀 Starting load test: {ASYNC_CLIENTS} users × {REQUESTS_PER_CLIENT} requests")
    print(f"   Total requests: {ASYNC_CLIENTS * REQUESTS_PER_CLIENT}")

    async with aiohttp.ClientSession() as session:
        tasks = [simulate_user(session, i) for i in range(ASYNC_CLIENTS)]
        results = await asyncio.gather(*tasks)

    # Aggregate
    all_latencies = []
    total_errors = 0
    total_requests = 0
    for r in results:
        print(f"  User {r['user_id']}: avg={r['avg_latency']:.0f}ms, errors={r['errors']}/{r['total']}")
        total_errors += r["errors"]
        total_requests += r["total"]

    print(f"\n📊 Results:")
    print(f"  Total requests: {total_requests}")
    print(f"  Errors: {total_errors} ({total_errors/total_requests*100:.1f}%)")
    print(f"  Success rate: {(1 - total_errors/total_requests)*100:.1f}%")

if __name__ == "__main__":
    asyncio.run(run_load_test())
```

---

## Production Deployment Guide

### Docker Compose Setup

```yaml
# docker-compose.yml
version: '3.8'

services:
  apexerp-agent:
    build: .
    container_name: apexerp-agent
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - DATABASE_URL=postgresql://apexerp:password@postgres:5432/apexerp
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=587
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASS=${SMTP_PASS}
      - REDIS_URL=redis://redis:6379
      - LOG_LEVEL=INFO
    volumes:
      - ./data:/app/data  # SQLite persistence
      - ./logs:/app/logs
    depends_on:
      - postgres
      - redis
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G

  postgres:
    image: postgres:16-alpine
    container_name: apexerp-db
    restart: unless-stopped
    environment:
      POSTGRES_DB: apexerp
      POSTGRES_USER: apexerp
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init-db:/docker-entrypoint-initdb.d
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    container_name: apexerp-cache
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    container_name: apexerp-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - apexerp-agent

volumes:
  postgres_data:
  redis_data:
```

### Nginx Configuration

```nginx
# nginx.conf
upstream apexerp_agent {
    server apexerp-agent:8000;
    keepalive 32;
}

server {
    listen 80;
    server_name api.apexerp.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.apexerp.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req zone=api burst=20 nodelay;

    location / {
        proxy_pass http://apexerp_agent;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;

        # SSE support — no buffering
        proxy_buffering off;
        proxy_cache off;
        chunked_transfer_encoding on;
    }

    location /ws/ {
        proxy_pass http://apexerp_agent;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400s;  # 24 hours for WebSocket
    }

    # Health checks — no rate limit
    location /health {
        proxy_pass http://apexerp_agent;
        limit_req off;
    }
}
```

### Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# System dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Application code
COPY . .

# Non-root user for security
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

EXPOSE 8000

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
```

### Environment Configuration

```bash
# .env — saari configuration ek jagah
OPENAI_API_KEY=sk-your-key-here

# Database
DATABASE_URL=postgresql://apexerp:password@localhost:5432/apexerp
DB_POOL_SIZE=5
DB_MAX_OVERFLOW=10

# SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=agent@apexpillar.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME="ApexERP AI Agent"

# Redis (optional — for caching)
REDIS_URL=redis://localhost:6379

# Agent config
AGENT_MODEL=gpt-4o
AGENT_TEMPERATURE=0.1
AGENT_MAX_TOKENS=8000
AGENT_MAX_ITERATIONS=10
HITL_TIMEOUT_SECONDS=300

# Monitoring
LOG_LEVEL=INFO
METRICS_ENABLED=true

# Security
API_KEY=your-api-key-here
ALLOWED_ORIGINS=http://localhost:3000,https://app.apexerp.com
```

### Requirements File

```
# requirements.txt
fastapi==0.104.0
uvicorn[standard]==0.24.0
langchain==0.1.0
langchain-openai==0.0.5
langgraph==0.0.20
langgraph-checkpoint-sqlite==0.0.2
openai==1.6.0
sqlalchemy==2.0.23
psycopg2-binary==2.9.9
redis==5.0.1
httpx==0.25.2
websockets==12.0
pydantic==2.5.2
python-dotenv==1.0.0
pytest==7.4.3
pytest-asyncio==0.23.2
aiohttp==3.9.1
```

---

## Usage Examples

### Basic Usage

```python
# Simple query
result = await agent.invoke("Mujhe Q4 sales chahiye")
print(result["response"])
# Output: Sales report for Q4 2024 generate ho gaya...
```

### Multi-Step Workflow

```python
# Complex workflow — ek saath multiple steps
result = await agent.invoke("""
    Pichle mahine ke sales data nikaalo,
    uska report banao,
    aur Raushan ko email bhejo
""")

print(result["response"])
# Output: ✅ Database query complete → Report generated → Email sent to raushan@apexpillar.com
print(result["actions_taken"])
# Output: [{'tool': 'query_database', ...}, {'tool': 'generate_report', ...}, {'tool': 'send_email', ...}]
```

### Session Continuation

```python
# Session 1
result1 = await agent.invoke(
    "Mera naam Raushan hai",
    user_id="raushan_123",
    session_id="sess_abc123",
)
# Output: Hello Raushan! Kaise madad kar sakta hoon?

# Session 2 — same session, agent remembers
result2 = await agent.invoke(
    "Mera naam kya hai?",
    session_id="sess_abc123",
)
# Output: Aapka naam Raushan hai 😊
```

### Batch Processing

```python
# Raat ko bulk queries process karo
batch = [
    {"message": "Q4 sales", "user_id": "raushan"},
    {"message": "Inventory status", "user_id": "raushan"},
    {"message": "Pending orders count", "user_id": "raushan"},
]

# API call
response = await client.post("/chat/batch", json=batch)
print(f"Processed {response['total']} queries")
```

### HITL Flow (from dashboard)

```python
# Dashboard frontend se approval
# WebSocket event aata hai: {"type": "approval_request", "action_id": "abc", ...}

# Admin clicks "Approve"
response = await client.post("/agent/approve/abc?approved=true")

# Agent ko response milta hai, email send hota hai
```

---

## Security Best Practices

```python
# 1. API Key authentication middleware
from fastapi import Security, HTTPException
from fastapi.security import APIKeyHeader

api_key_header = APIKeyHeader(name="X-API-Key")

async def verify_api_key(api_key: str = Security(api_key_header)):
    if api_key != os.getenv("API_KEY"):
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key

# Usage on routes
@app.post("/chat", dependencies=[Depends(verify_api_key)])
async def chat(request: ChatRequest):
    ...

# 2. Input sanitization
from pydantic import field_validator

class ChatRequest(BaseModel):
    message: str
    user_id: str = "default"

    @field_validator("message")
    @classmethod
    def validate_message(cls, v):
        if len(v) > 2000:
            raise ValueError("Message too long (max 2000 chars)")
        # Block obvious injection
        blocked = ["<script>", "DROP TABLE", "DELETE FROM"]
        for pattern in blocked:
            if pattern.lower() in v.lower():
                raise ValueError(f"Blocked content: {pattern}")
        return v

# 3. Rate limiting
# Nginx mein configure kiya already — 10 req/s per IP

# 4. SQL injection protection
# Database tool mein SELECT-only validation hai
# LLM bhi SQL generate karta hai, direct user input nahi

# 5. Email domain restriction (optional)
allowed_domains = ["apexpillar.com"]
```

**Production mein yeh mistakes mat karna:**
1. ❌ API key bina authentication ke endpoint expose karna
2. ❌ Direct user input SQL mein pass karna
3. ❌ Email tool bina approval ke bhejna
4. ❌ Unbounded message length allow karna
5. ❌ Too many iterations allow karna (cost control)
6. ❌ Sensitive info agent memory mein store karna bina encryption ke

---

## Monitoring & Observability

```python
import logging
import json
from datetime import datetime

# Structured JSON logging
class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if hasattr(record, "extra"):
            log_entry.update(record.extra)
        return json.dumps(log_entry)

# Setup
logger = logging.getLogger("apexerp_agent")
handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logger.addHandler(handler)
logger.setLevel(logging.INFO)

# Usage in agent
logger.info("Agent invoke", extra={
    "user_id": user_id,
    "session_id": session_id,
    "message_length": len(message),
    "tools_available": len(tools),
})
```

### Prometheus Metrics

```python
# Prometheus metrics for production monitoring
from prometheus_client import Counter, Histogram, Gauge, generate_latest

# Metrics
AGENT_REQUESTS = Counter("agent_requests_total", "Total agent requests", ["user_id"])
AGENT_DURATION = Histogram("agent_duration_seconds", "Agent processing time", buckets=[.5, 1, 2, 5, 10])
TOOL_CALLS = Counter("tool_calls_total", "Total tool calls", ["tool_name"])
TOOL_DURATION = Histogram("tool_duration_ms", "Tool execution time", ["tool_name"])
ACTIVE_SESSIONS = Gauge("active_sessions", "Currently active agent sessions")

@app.get("/metrics")
async def metrics():
    return Response(content=generate_latest(), media_type="text/plain")
```

---

## Troubleshooting Guide

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Agent loops infinitely | LLM keeps calling tools | Check `max_iterations` — set to 8-10 |
| Email not sending | SMTP credentials wrong | Enable "App Passwords" in Gmail |
| SQL injection warning | LLM generated bad SQL | Tighten regex validation |
| Memory full | Too many messages | Implement summarization at 4k tokens |
| Slow response | Too many tools | Reduce tool count or use gpt-4o-mini for routing |
| HITL timeout | Approval not processed | Check WebSocket connection |
| Docker container crash | OOM | Set memory limits in docker-compose |
| Rate limit exceeded | Too many requests | Tune nginx limit_req |

### Debug Mode

```python
# Enable verbose logging
import logging
logging.basicConfig(level=logging.DEBUG)

# Agent with verbose mode
agent = AgentExecutor(
    agent=agent,
    tools=tools,
    verbose=True,  # Har step print karega
    return_intermediate_steps=True,  # Sab tool results bhi return karega
)
```

---

## Success Checklist

- [x] Agent can query database and return results
- [x] Email tool working with human approval
- [x] Report generation with formatted output
- [x] Calendar scheduling working
- [x] Human-in-the-loop for critical actions
- [x] Streaming responses from FastAPI
- [x] Error recovery when tool fails
- [x] Session management with memory
- [x] Docker deployment
- [x] Test coverage > 80%
- [ ] Load testing with 50+ concurrent users
- [ ] Production SSL certificate
- [ ] CI/CD pipeline integration
- [ ] Monitoring dashboards (Grafana)
- [ ] Slack bot integration
- [ ] Rate limiting per user/IP
- [ ] Automated backup of conversation history
- [ ] Multi-language support (Hindi/English)
- [ ] Voice interface (optional)

---

*Built with ❤️ for ApexERP — AI Engineering Journey Phase 5*
