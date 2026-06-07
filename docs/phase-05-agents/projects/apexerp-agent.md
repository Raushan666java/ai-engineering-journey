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

## Architecture

```
┌─────────────────────────────────────┐
│           User Interface            │
│  (Slack / Web / API / WhatsApp)     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         ApexERP Agent API           │
│         FastAPI + Streaming         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│        LangGraph Agent Loop         │
│                                     │
│   ┌─────────┐    ┌──────────────┐   │
│   │ Router  │───►│ Query DB    │   │
│   └─────────┘    └──────────────┘   │
│        │         ┌──────────────┐   │
│        ├────────►│ Send Email   │   │
│        │         └──────────────┘   │
│        │         ┌──────────────┐   │
│        ├────────►│ Report Gen   │   │
│        │         └──────────────┘   │
│        │         ┌──────────────┐   │
│        └────────►│ Calendar     │   │
│                  └──────────────┘   │
└──────────────┬──────────────────────┘
               │
     ┌─────────┼────────────┐
     ▼         ▼            ▼
┌────────┐ ┌──────┐ ┌──────────┐
│Postgres│ │SMTP │ │Calendar API│
└────────┘ └──────┘ └──────────┘
```

---

## Tools Implemented

### 1. Database Query Tool

```python
from langchain.tools import BaseTool
from typing import Optional, Type
from pydantic import BaseModel, Field
import sqlalchemy
import re

class DBQueryInput(BaseModel):
    query: str = Field(description="Natural language description of data needed")

class DatabaseTool(BaseTool):
    name: str = "query_database"
    description: str = """
    Query ApexERP database for sales, inventory, orders, customer data.
    Use this when user asks about business data.
    """
    args_schema: Type[BaseModel] = DBQueryInput
    
    def __init__(self, db_url: str):
        super().__init__()
        self.engine = sqlalchemy.create_engine(db_url)
        self.schema = self._load_schema()
    
    def _load_schema(self) -> str:
        inspector = sqlalchemy.inspect(self.engine)
        schema = []
        for table in inspector.get_table_names():
            cols = inspector.get_columns(table)
            schema.append(f"Table {table}: " + ", ".join(f"{c['name']}({c['type']})" for c in cols))
        return "\n".join(schema)
    
    def _run(self, query: str) -> str:
        # Validate — allow only SELECT
        prompt = f"""
        Database schema:
        {self.schema}
        
        Convert to SQL: {query}
        Return ONLY SQL, no explanation.
        """
        
        llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
        sql = llm.invoke(prompt).strip()
        
        # Safety check
        if not re.match(r'^\s*SELECT\b', sql, re.IGNORECASE):
            return "Only SELECT queries allowed"
        
        # Execute
        try:
            with self.engine.connect() as conn:
                result = conn.execute(sqlalchemy.text(sql))
                rows = result.fetchmany(10)
                cols = result.keys()
                return "\n".join(str(dict(zip(cols, row))) for row in rows)
        except Exception as e:
            return f"Query error: {e}"
```

### 2. Email Tool

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders
import os

class EmailInput(BaseModel):
    to: str = Field(description="Recipient email")
    subject: str = Field(description="Email subject")
    body: str = Field(description="Email body text")
    attachment_path: Optional[str] = Field(None, description="Optional file path")

class EmailTool(BaseTool):
    name: str = "send_email"
    description: str = "Send email to any ApexERP user. Requires human approval."
    args_schema: Type[BaseModel] = EmailInput
    
    def __init__(self, smtp_config: dict):
        super().__init__()
        self.smtp_host = smtp_config["host"]
        self.smtp_port = smtp_config["port"]
        self.smtp_user = smtp_config["user"]
        self.smtp_pass = smtp_config["pass"]
    
    def _run(self, to: str, subject: str, body: str, attachment_path: Optional[str] = None) -> str:
        # First, request human approval
        approved = self._request_approval(to, subject)
        if not approved:
            return "Email sending cancelled — human did not approve."
        
        # Send
        msg = MIMEMultipart()
        msg["From"] = self.smtp_user
        msg["To"] = to
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))
        
        if attachment_path and os.path.exists(attachment_path):
            with open(attachment_path, "rb") as f:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(f.read())
                encoders.encode_base64(part)
                part.add_header("Content-Disposition", f"attachment; filename={os.path.basename(attachment_path)}")
                msg.attach(part)
        
        with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
            server.starttls()
            server.login(self.smtp_user, self.smtp_pass)
            server.send_message(msg)
        
        return f"Email sent to {to}: {subject}"
    
    def _request_approval(self, to: str, subject: str) -> bool:
        """Call HITL API for approval."""
        import requests
        try:
            resp = requests.post(
                "http://localhost:8000/agent/action/request",
                json={
                    "action_id": f"email_{int(time.time())}",
                    "tool": "send_email",
                    "args": {"to": to, "subject": subject},
                    "description": f"Send email to {to}: {subject}"
                },
                timeout=60
            )
            return resp.json().get("approved", False)
        except:
            # Fallback to terminal input
            response = input(f"Send email to {to}: {subject}? (y/n): ")
            return response.lower() == "y"
```

### 3. Report Generation Tool

```python
from datetime import datetime

class ReportTool(BaseTool):
    name: str = "generate_report"
    description: str = """
    Generate business reports. 
    Input: report type and parameters.
    Returns: formatted report with data.
    """
    
    def _run(self, report_type: str, params: str = "") -> str:
        if report_type == "sales":
            return self._sales_report(params)
        elif report_type == "inventory":
            return self._inventory_report(params)
        elif report_type == "customer":
            return self._customer_report(params)
        else:
            return f"Unknown report type: {report_type}"
    
    def _sales_report(self, params: str) -> str:
        period = params or "Q4 2024"
        return f"""
╔════════════════════════════════════════╗
║        SALES REPORT - {period}         ║
╠════════════════════════════════════════╣
║ Total Revenue:     $1,200,000         ║
║ Total Orders:      4,500              ║
║ Avg Order Value:   $267               ║
║ Growth:            -15% YoY           ║
║ Top Product:       ERP Pro License    ║
║ Top Region:        North India        ║
╚════════════════════════════════════════╝
"""
```

### 4. Calendar Tool

```python
class CalendarTool(BaseTool):
    name: str = "manage_calendar"
    description: str = """
    Manage calendar: schedule meetings, check availability, list events.
    """
    
    def _run(self, action: str, params: str) -> str:
        if action == "schedule":
            return self._schedule_meeting(params)
        elif action == "list":
            return self._list_events(params)
        elif action == "availability":
            return self._check_availability(params)
        return "Unknown action"
    
    def _schedule_meeting(self, params: str) -> str:
        return f"Meeting scheduled: {params}"
    
    def _list_events(self, params: str) -> str:
        return "Today's events:\n- 10:00 Team Standup\n- 14:00 Client Call\n- 16:00 Review"
    
    def _check_availability(self, params: str) -> str:
        return "Available slots today: 9:00-10:00, 11:00-14:00, 16:00-18:00"
```

---

## Main Agent Setup

```python
from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain import hub
from langgraph.graph import StateGraph, END
from typing import TypedDict, Literal
from langchain.schema import HumanMessage, AIMessage

# Tools
tools = [
    DatabaseTool("postgresql://user:pass@localhost:5432/apexerp"),
    EmailTool({"host": "smtp.gmail.com", "port": 587, "user": "...", "pass": "..."}),
    ReportTool(),
    CalendarTool(),
]

# LLM
llm = ChatOpenAI(model="gpt-4o", temperature=0.1)

# Agent
agent = create_react_agent(
    llm=llm,
    tools=tools,
    prompt=hub.pull("hwchase17/react")
)

# Executor
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    memory=ConversationBufferMemory(memory_key="chat_history", return_messages=True),
    max_iterations=8,
    early_stopping_method="generate",
    handle_parsing_errors=True,
    verbose=True,
    return_intermediate_steps=True,
)
```

---

## FastAPI Endpoints

```python
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import asyncio
import json

app = FastAPI(title="ApexERP AI Agent")

class ChatRequest(BaseModel):
    message: str
    user_id: str = "default"
    stream: bool = False

class ChatResponse(BaseModel):
    response: str
    actions_taken: list = []

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Main chat endpoint."""
    result = agent_executor.invoke({"input": request.message})
    
    actions = []
    for step in result.get("intermediate_steps", []):
        action, observation = step
        actions.append({
            "tool": action.tool,
            "input": action.tool_input,
            "result": str(observation)[:200]
        })
    
    return ChatResponse(
        response=result["output"],
        actions_taken=actions
    )

@app.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    """Streaming chat endpoint."""
    async def generate():
        async for event in agent_executor.astream_events(
            {"input": request.message},
            version="v1"
        ):
            kind = event["event"]
            if kind == "on_llm_stream":
                chunk = event["data"]["chunk"].content
                if chunk:
                    yield f"data: {json.dumps({'type': 'token', 'content': chunk})}\n\n"
            elif kind == "on_tool_start":
                yield f"data: {json.dumps({'type': 'tool', 'tool': event['name']})}\n\n"
        yield f"data: {json.dumps({'type': 'done'})}\n\n"
    
    return StreamingResponse(generate(), media_type="text/event-stream")
```

---

## Human Approval Workflow

```python
# HitlService handles async approvals
class HitlService:
    def __init__(self):
        self.pending_actions = {}
        self.results = {}
    
    async def request_approval(self, action: dict) -> bool:
        action_id = str(uuid.uuid4())
        self.pending_actions[action_id] = asyncio.Event()
        
        # Notify dashboard/Slack
        await self._notify(action_id, action)
        
        # Wait for response (5 min timeout)
        try:
            await asyncio.wait_for(
                self.pending_actions[action_id].wait(),
                timeout=300
            )
            return self.results.pop(action_id, False)
        except asyncio.TimeoutError:
            return False
    
    async def respond(self, action_id: str, approved: bool):
        if action_id in self.pending_actions:
            self.results[action_id] = approved
            self.pending_actions[action_id].set()
    
    async def _notify(self, action_id: str, action: dict):
        # Slack notification
        # Web dashboard notification
        print(f"[HITL] Action {action_id}: {action['description']}")

# API endpoints
@app.post("/agent/approve")
async def approve_action(action_id: str, approved: bool = True):
    await hitl_service.respond(action_id, approved)
    return {"status": "processed"}
```

---

## Testing

```python
import pytest
from unittest.mock import Mock, patch

@pytest.fixture
def agent():
    return create_apexerp_agent()

class TestApexERPAgent:
    
    def test_sales_query(self, agent):
        result = agent.invoke({"input": "Q4 sales kya the?"})
        assert "Q4" in result["output"] or "sales" in result["output"]
    
    def test_email_with_approval(self, agent):
        with patch.object(EmailTool, '_request_approval', return_value=True):
            result = agent.invoke({
                "input": "raushan@apexpillar.com ko test email bhejo"
            })
            assert "sent" in result["output"].lower()
    
    def test_report_generation(self, agent):
        result = agent.invoke({"input": "Sales report generate karo"})
        assert "revenue" in result["output"].lower()
    
    def test_error_recovery(self, agent):
        """Agent should recover from invalid queries."""
        result = agent.invoke({"input": "asdkhj!@#$ invalid query"})
        assert result["output"]  # Should return something, not crash
    
    def test_multi_step(self, agent):
        result = agent.invoke({
            "input": "Pichle mahine ke sales nikaalo aur report banao"
        })
        assert result["output"]
```

---

## Deployment

```bash
# 1. Install
git clone <repo>
cd apexerp-agent
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# 2. Configure
cp .env.example .env
# Edit: OPENAI_API_KEY, DB_URL, SMTP_CONFIG

# 3. Run
uvicorn api.main:app --host 0.0.0.0 --port 8000 --reload

# 4. Docker
docker-compose up -d
```

---

## Success Checklist

- [ ] Agent can query database and return results
- [ ] Email tool working with human approval
- [ ] Report generation with formatted output
- [ ] Calendar scheduling working
- [ ] Human-in-the-loop for critical actions
- [ ] Streaming responses from FastAPI
- [ ] Error recovery when tool fails
- [ ] Session management with memory
- [ ] Docker deployment
- [ ] Test coverage > 80%
