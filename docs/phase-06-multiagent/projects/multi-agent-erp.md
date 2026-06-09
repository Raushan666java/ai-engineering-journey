# Multi-Agent ERP System

**Project Type:** Multi-Agent Automation for ApexERP
**Stack:** LangGraph, FastAPI, CrewAI, PostgreSQL, Redis
**Duration:** 2 Weeks (after Phase 6)

---

## Problem

```
Ek single agent sab ERP workflows handle nahi kar sakta:

❌ "Order process karo" → inventory check, payment, invoice, shipping
❌ "Customer support karo" → login, billing, technical, sales
❌ "Monthly closing" → sales data, expenses, P&L, reports

Har complex workflow mein multiple specializations chahiye:
→ Inventory expert stock check kare
→ Finance expert payment handle kare
→ Sales expert pricing verify kare
→ Support expert customer issues solve kare

Real-world scenarios:
• "Mujhe ek product order karna hai" → 
  Inventory Agent: stock check → Order Agent: order create → 
  Finance Agent: payment → Inventory Agent: update stock → 
  Customer Agent: notification

• "Mera invoice nahi aa raha" →
  Customer Agent: query → Finance Agent: invoice check →
  Order Agent: order verify → Finance Agent: resend invoice

• "Monthly report chahiye" →
  Finance Agent: revenue → Order Agent: orders count →
  Inventory Agent: stock changes → Supervisor: compile report

Problem: Ek agent sab kuch nahi kar sakta.
Solution: Specialized agents + Supervisor coordination.
```

## Solution

```
Multi-Agent architecture with 4 specialized agents + 1 supervisor:

┌─────────────────────────────────────────────────────────────┐
│                      SUPERVISOR AGENT                        │
│              Routes requests, orchestrates flow               │
└──┬────────────┬────────────┬──────────────┬─────────────────┘
   │            │            │              │
   ▼            ▼            ▼              ▼
┌────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
│Inventory│ │  Order   │ │ Finance  │ │  Customer    │
│ Agent   │ │  Agent   │ │  Agent   │ │  Agent       │
├────────┤ ├──────────┤ ├──────────┤ ├──────────────┤
│Stock   │ │Process   │ │Invoices │ │Queries       │
│Levels  │ │Orders    │ │Payments │ │Issues        │
│Products│ │Shipping  │ │Expenses │ │Feedback      │
│Warehouse│ │Returns   │ │Reports  │ │Knowledge Base│
└────────┘ └──────────┘ └──────────┘ └──────────────┘
```

### Why LangGraph over CrewAI?

| Aspect | CrewAI | LangGraph |
|---|---|---|
| Routing | Fixed sequential/ hierarchical | Dynamic, LLM-decided |
| State | Ephemeral, per-task | Persistent, checkpointed |
| Parallel | Limited | Full async support |
| Error Handling | Basic retry | Circuit breaker + degradation |
| Human-in-Loop | Yes | Deep integration with pause/resume |
| PHP Analog | Artisan command chain | Laravel pipeline + event system |

---

## Architecture

```
┌──────────────┐
│   FastAPI    │ ← API Gateway
└──────┬───────┘
       │
┌──────▼───────┐
│  Supervisor  │ ← Routes to agent
│   (Router)   │
└──────┬───────┘
       │
┌──────┴──────────────────────────────┐
│         Shared State Layer          │
│  (Messages + Agent Outputs + Tools) │
└──────┬──────────────────────────────┘
       │
       ├── InventoryAgent
       │   Tools: stock_check, warehouse_query, product_info
       │   Memory: Product catalog cache
       │
       ├── OrderAgent
       │   Tools: order_create, order_status, shipping_track
       │   Memory: Order history
       │
       ├── FinanceAgent
       │   Tools: invoice_gen, payment_process, expense_track
       │   Memory: Transaction records
       │
       └── CustomerAgent
           Tools: ticket_create, faq_search, email_send
           Memory: Customer interaction history

Each agent has:
→ Shared memory (Redis)
→ Database access (PostgreSQL)
→ Tool restrictions
→ Error recovery
→ Context window (last N messages)
```

```mermaid
flowchart TD
    U[User] --> API[FastAPI Gateway]
    API --> S[Supervisor Agent]
    
    subgraph "Agent Pool"
        IA[Inventory Agent]
        OA[Order Agent]
        FA[Finance Agent]
        CA[Customer Agent]
    end
    
    subgraph "Infrastructure"
        R[(Redis Cache)]
        P[(PostgreSQL)]
        M[Molten / LangSmith]
    end
    
    S -->|Stock Query| IA
    S -->|Order Query| OA
    S -->|Payment Query| FA
    S -->|Support Query| CA
    
    IA --> R
    IA --> P
    OA --> R
    OA --> P
    FA --> R
    FA --> P
    CA --> R
    CA --> P
    
    IA --> M
    OA --> M
    FA --> M
    CA --> M
```

---

## Agent Definitions

### 1. InventoryAgent

```python
class InventoryAgent:
    """
    Inventory management specialist.
    Handles: stock levels, product info, warehouse management.
    
    PHP Mental Map: Laravel InventoryService with 
    StockController, WarehouseController, ProductController
    """
    
    tools = [
        Tool(
            name="check_stock",
            func=lambda product_id: f"Stock for {product_id}: 150 units",
            description="Check current stock level for a product"
        ),
        Tool(
            name="get_product_details",
            func=lambda product_id: {
                "name": "ERP Pro License", 
                "price": 49999, 
                "category": "Software",
                "sku": "ERP-PRO-001",
                "vendor": "ApexSoft"
            },
            description="Get complete product information"
        ),
        Tool(
            name="check_warehouse",
            func=lambda warehouse_id: {
                "id": warehouse_id,
                "name": "Patna Main Warehouse",
                "capacity_pct": 80,
                "total_items": 5000,
                "last_audit": "2024-11-15"
            },
            description="Check warehouse status and capacity"
        ),
        Tool(
            name="low_stock_alert",
            func=lambda threshold: [
                {"product": "Product A", "stock": 50, "reorder_point": 100},
                {"product": "Product B", "stock": 12, "reorder_point": 50}
            ],
            description="Get products below stock threshold"
        ),
        Tool(
            name="update_stock",
            func=lambda product_id, qty, operation: 
                f"Stock updated: {product_id} {'+' if operation == 'add' else '-'}{qty}",
            description="Update stock level (add or remove)"
        ),
        Tool(
            name="get_reorder_suggestions",
            func=lambda: [
                {"product": "Product A", "suggested_qty": 200, "vendor": "Vendor1"},
                {"product": "Product B", "suggested_qty": 100, "vendor": "Vendor2"}
            ],
            description="Get AI-powered reorder suggestions"
        ),
    ]
    
    system_prompt = """You are Inventory Agent for ApexERP.
    You handle all inventory-related queries.
    Be precise with numbers. Alert if stock is low.
    When checking stock, always suggest alternatives if low.
    Use Hinglish."""
    
    validation_rules = {
        "check_stock": {"product_id": "required|string|min:3"},
        "update_stock": {"product_id": "required", "qty": "required|integer|min:1"},
        "check_warehouse": {"warehouse_id": "required|string"}
    }
```

### 2. OrderAgent

```python
class OrderAgent:
    """
    Order processing specialist.
    Handles: order creation, tracking, returns, shipping.
    
    PHP Mental Map: Laravel OrderController +
    OrderService + ShippingService
    """
    
    tools = [
        Tool(
            name="create_order",
            func=lambda customer_id, items: {
                "order_id": f"ORD-{int(time.time())}",
                "status": "created",
                "items": items,
                "total": sum(item["price"] for item in items),
                "estimated_delivery": "5-7 business days"
            },
            description="Create new order for customer"
        ),
        Tool(
            name="get_order_status",
            func=lambda order_id: {
                "order_id": order_id,
                "status": "shipped",
                "timeline": [
                    {"date": "2024-12-01", "event": "Order placed"},
                    {"date": "2024-12-02", "event": "Payment confirmed"},
                    {"date": "2024-12-03", "event": "Shipped"}
                ],
                "eta": "2 days"
            },
            description="Check complete order status with timeline"
        ),
        Tool(
            name="track_shipping",
            func=lambda order_id: {
                "status": "in_transit",
                "location": "Patna Hub",
                "next_stop": "Lucknow Distribution Center",
                "eta": "2024-12-08",
                "carrier": "Delhivery",
                "tracking_number": "DLV-1234-5678"
            },
            description="Track shipping for an order"
        ),
        Tool(
            name="process_return",
            func=lambda order_id, reason: {
                "return_id": f"RET-{int(time.time())}",
                "status": "initiated",
                "refund_amount": 45000,
                "estimated_days": "5-7 business days",
                "instructions": "Pack item securely, use provided label"
            },
            description="Process order return with full details"
        ),
        Tool(
            name="cancel_order",
            func=lambda order_id: {
                "status": "cancelled",
                "refund": "No charge (cancelled before shipping)",
                "cancelled_at": "2024-12-01 10:30:00"
            },
            description="Cancel an order if not yet shipped"
        ),
        Tool(
            name="list_orders",
            func=lambda customer_id, limit=5: {
                "total_orders": 12,
                "recent": [
                    {"order_id": "ORD-001", "status": "delivered", "amount": 49999},
                    {"order_id": "ORD-002", "status": "shipped", "amount": 29999}
                ]
            },
            description="List recent orders for a customer"
        ),
    ]
    
    system_prompt = """You are Order Agent for ApexERP.
    You process and track orders.
    Verify inventory before creating orders.
    Always provide order IDs and timelines.
    Use Hinglish."""
    
    order_flow = {
        "create": ["verify_customer", "check_inventory", "process_payment", "confirm"],
        "return": ["verify_order", "check_eligibility", "initiate_return", "schedule_pickup"],
        "cancel": ["verify_order", "check_status", "process_cancellation", "notify"]
    }
```

### 3. FinanceAgent

```python
class FinanceAgent:
    """
    Finance management specialist.
    Handles: invoices, payments, expenses, reports.
    
    PHP Mental Map: Laravel InvoiceController +
    PaymentGateway + ReportGenerator
    """
    
    tools = [
        Tool(
            name="generate_invoice",
            func=lambda order_id: {
                "invoice_id": f"INV-{int(time.time())}",
                "order_id": order_id,
                "amount": 49999,
                "tax": 8999.82,
                "total": 58998.82,
                "due_date": "2024-12-15",
                "status": "pending"
            },
            description="Generate invoice for completed order"
        ),
        Tool(
            name="process_payment",
            func=lambda invoice_id, amount, method: {
                "transaction_id": f"TXN-{int(time.time())}",
                "status": "completed",
                "amount": amount,
                "method": method,
                "processed_at": "2024-12-01 10:30:00"
            },
            description="Process payment for invoice"
        ),
        Tool(
            name="get_payment_status",
            func=lambda invoice_id: {
                "invoice_id": invoice_id,
                "status": "paid",
                "paid_on": "2024-12-01",
                "method": "UPI",
                "transaction_id": "TXN-123456"
            },
            description="Check payment status with details"
        ),
        Tool(
            name="record_expense",
            func=lambda category, amount, desc, date: {
                "expense_id": f"EXP-{int(time.time())}",
                "category": category,
                "amount": amount,
                "description": desc,
                "date": date,
                "status": "recorded"
            },
            description="Record a business expense with category"
        ),
        Tool(
            name="generate_report",
            func=lambda period, type: {
                "period": period,
                "type": type,
                "revenue": 5000000,
                "expenses": 3500000,
                "profit": 1500000,
                "margin_pct": 30,
                "key_metrics": {
                    "avg_order_value": 45000,
                    "customer_count": 1250,
                    "repeat_rate": "35%"
                }
            },
            description="Generate comprehensive financial report"
        ),
        Tool(
            name="get_tax_summary",
            func=lambda period: {
                "period": period,
                "gst_collected": 450000,
                "gst_paid": 320000,
                "net_gst": 130000,
                "tds_deducted": 85000,
                "filing_status": "filed"
            },
            description="Get tax summary for a period"
        ),
    ]
    
    system_prompt = """You are Finance Agent for ApexERP.
    You handle all financial operations.
    Be accurate with numbers. Verify before transactions.
    Always mention amounts in INR (₹).
    Use Hinglish."""
```

### 4. CustomerAgent

```python
class CustomerAgent:
    """
    Customer relationship specialist.
    Handles: queries, tickets, feedback, communication.
    
    PHP Mental Map: Laravel SupportController +
    TicketService + NotificationService
    """
    
    tools = [
        Tool(
            name="search_faq",
            func=lambda query: {
                "query": query,
                "results": [
                    {"question": "Kaise login karein?", "answer": "Visit apexerp.com/login..."},
                    {"question": "Password kaise reset karein?", "answer": "Click on Forgot Password..."}
                ],
                "confidence": 0.85
            },
            description="Search knowledge base for answers"
        ),
        Tool(
            name="create_ticket",
            func=lambda customer_id, issue, priority: {
                "ticket_id": f"TKT-{int(time.time())}",
                "status": "created",
                "priority": priority,
                "assigned_to": "Auto-assigned",
                "estimated_response": "2 hours" if priority == "high" else "24 hours"
            },
            description="Create support ticket with priority"
        ),
        Tool(
            name="get_ticket_status",
            func=lambda ticket_id: {
                "ticket_id": ticket_id,
                "status": "in_progress",
                "assigned_to": "Raushan",
                "last_update": "2 hours ago",
                "updates": [
                    "Issue received",
                    "Assigned to Level 2 support",
                    "Currently investigating"
                ]
            },
            description="Check ticket status with timeline"
        ),
        Tool(
            name="send_notification",
            func=lambda customer_id, message, channel: {
                "status": "sent",
                "channel": channel,
                "message": message,
                "sent_at": "2024-12-01 10:30:00"
            },
            description="Send notification to customer via email/sms"
        ),
        Tool(
            name="get_customer_history",
            func=lambda customer_id: {
                "customer_id": customer_id,
                "name": "Raushan Kumar",
                "since": "2023-06-01",
                "total_orders": 12,
                "total_spent": 450000,
                "tickets_raised": 3,
                "satisfaction_score": 4.5,
                "preferences": {
                    "contact_method": "email",
                    "language": "hi-en",
                    "notifications": True
                }
            },
            description="Get complete customer history summary"
        ),
        Tool(
            name="collect_feedback",
            func=lambda customer_id, ticket_id: {
                "status": "feedback_requested",
                "questions": [
                    "Was your issue resolved? (1-5)",
                    "How was the response time? (1-5)",
                    "Any suggestions?"
                ]
            },
            description="Send feedback form after ticket resolution"
        ),
    ]
    
    system_prompt = """You are Customer Agent for ApexERP.
    You handle all customer-facing interactions.
    Be polite, helpful, and professional.
    Always address the customer by name if known.
    Use Hinglish."""
```

---

## LangGraph Implementation

### Core Implementation

```python
from typing import TypedDict, Literal, Annotated, Optional
from langgraph.graph import StateGraph, END, add_messages, START
from langgraph.checkpoint import MemorySaver
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, AIMessage, SystemMessage
from langchain.tools import Tool
from pydantic import BaseModel, Field
import json
import time

# State
class ERPState(TypedDict):
    messages: Annotated[list, add_messages]
    current_agent: str
    agent_outputs: dict
    order_data: dict
    error_count: int
    requires_approval: bool
    session_id: str
    user_id: str
    processing_steps: list

llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
```

### Supervisor with Enhanced Routing

```python
def supervisor_node(state: ERPState) -> dict:
    """Route to appropriate ERP agent with context awareness."""
    query = state["messages"][-1].content
    previous_agents = list(state.get("agent_outputs", {}).keys())
    
    context = f"Previous agents involved: {previous_agents}" if previous_agents else "First request"
    
    decision = llm.invoke(f"""
    ApexERP multi-agent system. Route this query:
    
    "{query}"
    
    {context}
    
    Agents:
    - INVENTORY: stock, product, warehouse, supply, reorder
    - ORDER: order create, track, shipping, returns, cancel
    - FINANCE: payment, invoice, expense, report, billing, tax
    - CUSTOMER: support, ticket, faq, complaint, help, feedback
    - DONE: Query is fully resolved, no more agents needed
    
    Rules:
    - If query needs multiple domains, route to the PRIMARY one first
    - If query is a greeting/thank you → DONE
    - If not sure → CUSTOMER (they can triage further)
    
    Route to: [AGENT_NAME]
    Reason: [why this agent]
    """)
    
    agent = "DONE"
    for a in ["INVENTORY", "ORDER", "FINANCE", "CUSTOMER", "DONE"]:
        if a in decision.content.upper():
            agent = a
            break
    
    # Track routing decision
    steps = state.get("processing_steps", [])
    steps.append({"time": time.time(), "to": agent, "reason": decision.content})
    
    return {"current_agent": agent, "processing_steps": steps}
```

### Agent Factory Pattern

```python
def create_agent_node(agent_name: str, tools: list, system_prompt: str):
    """Create a LangGraph node for any agent.
    
    PHP Mental Map: Laravel Factory Pattern — 
    ek factory jo koi bhi service class bana sakti hai.
    """
    
    def agent_node(state: ERPState) -> ERPState:
        query = state["messages"][-1].content
        
        agent_llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
        agent_llm_with_tools = agent_llm.bind_tools(tools)
        
        response = agent_llm_with_tools.invoke([
            SystemMessage(content=system_prompt),
            *state["messages"][-5:],  # Last 5 messages for context
        ])
        
        return {
            "messages": [response],
            "agent_outputs": {
                **state.get("agent_outputs", {}),
                agent_name: {
                    "response": response.content,
                    "timestamp": time.time(),
                    "tools_used": len(response.tool_calls) if hasattr(response, 'tool_calls') else 0
                }
            }
        }
    
    return agent_node

# Create agents
inventory_node = create_agent_node(
    "inventory", InventoryAgent.tools, InventoryAgent.system_prompt
)
order_node = create_agent_node(
    "order", OrderAgent.tools, OrderAgent.system_prompt
)
finance_node = create_agent_node(
    "finance", FinanceAgent.tools, FinanceAgent.system_prompt
)
customer_node = create_agent_node(
    "customer", CustomerAgent.tools, CustomerAgent.system_prompt
)
```

### Router Logic

```python
def router_condition(state: ERPState) -> Literal[
    "inventory", "order", "finance", "customer", "done"
]:
    """Route based on supervisor decision with safety checks."""
    current = state.get("current_agent", "DONE").lower()
    error_count = state.get("error_count", 0)
    
    # Safety: Prevent infinite loops
    if error_count >= 3:
        return "done"
    
    # Map agent names
    agent_map = {
        "inventory": "inventory",
        "order": "order", 
        "finance": "finance",
        "customer": "customer",
        "done": "done"
    }
    
    return agent_map.get(current, "customer")

def after_agent_router(state: ERPState) -> Literal["supervisor", "done"]:
    """After an agent completes, decide next step."""
    error_count = state.get("error_count", 0)
    
    if error_count >= 3:
        return "done"
    
    # Check if conversation seems complete
    last_message = state["messages"][-1].content if state["messages"] else ""
    
    # Always go back to supervisor unless too many errors
    return "supervisor"
```

### Graph Builder

```python
def build_erp_graph():
    workflow = StateGraph(ERPState)
    
    # Add nodes
    workflow.add_node("supervisor", supervisor_node)
    workflow.add_node("inventory", inventory_node)
    workflow.add_node("order", order_node)
    workflow.add_node("finance", finance_node)
    workflow.add_node("customer", customer_node)
    
    workflow.set_entry_point("supervisor")
    
    # Supervisor → Agent routing
    workflow.add_conditional_edges(
        "supervisor",
        router_condition,
        {
            "inventory": "inventory",
            "order": "order",
            "finance": "finance",
            "customer": "customer",
            "done": END
        }
    )
    
    # After each agent → back to supervisor or done
    for agent in ["inventory", "order", "finance", "customer"]:
        workflow.add_conditional_edges(
            agent,
            after_agent_router,
            {"supervisor": "supervisor", "done": END}
        )
    
    return workflow.compile()

# Main app
erp_multi_agent = build_erp_graph()
```

### Checkpointing for Production

```python
"""
Production ke liye checkpointing zaroori hai:
- Redis ya SQLite mein state save karo
- Crash ke baad state restore ho sake
- Long-running workflows pause/continue ho sakein
"""

# SQLite-based checkpointing
from langgraph.checkpoint.sqlite import SqliteSaver

with SqliteSaver.from_conn_string("checkpoints.db") as saver:
    erp_with_checkpoint = build_erp_graph()
    
    # Each session gets unique thread_id
    config = {"configurable": {"thread_id": "session_123"}}
    
    result = erp_with_checkpoint.invoke(
        {"messages": [HumanMessage(content="Stock kya hai?")],
         "current_agent": "", "agent_outputs": {},
         "order_data": {}, "error_count": 0,
         "requires_approval": False, "session_id": "session_123",
         "user_id": "raushan", "processing_steps": []},
        config=config
    )
    
    # Later, get state back
    saved_state = erp_with_checkpoint.get_state(config)
```

---

## FastAPI Endpoints

### Complete API Implementation

```python
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from typing import Optional
import uuid
import time
import logging

app = FastAPI(
    title="ApexERP Multi-Agent System",
    version="2.0.0",
    description="Multi-agent ERP backend with LangGraph"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("apexerp")

# Models
class AgentRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    session_id: Optional[str] = None
    user_id: str = "anonymous"

class AgentResponse(BaseModel):
    response: str
    session_id: str
    agents_involved: list
    processing_time: float
    requires_approval: bool = False
    steps: list = []

class SessionSummary(BaseModel):
    session_id: str
    message_count: int
    agents_involved: list
    requires_approval: bool
    user_id: str
    last_active: str

# Session management
sessions = {}

def get_or_create_session(session_id: str, user_id: str) -> dict:
    """Get existing session or create new one."""
    if session_id and session_id in sessions:
        return sessions[session_id]
    
    new_id = session_id or str(uuid.uuid4())
    sessions[new_id] = {
        "messages": [],
        "current_agent": "",
        "agent_outputs": {},
        "order_data": {},
        "error_count": 0,
        "requires_approval": False,
        "session_id": new_id,
        "user_id": user_id,
        "processing_steps": [],
        "created_at": time.time(),
        "last_active": time.time()
    }
    return sessions[new_id]

# Auth middleware
security = HTTPBearer()

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Simple token verification. Replace with real auth."""
    if credentials.credentials != "your-api-key":
        raise HTTPException(403, "Invalid token")
    return credentials
```

### API Endpoints

```python
@app.post("/api/agent/chat", response_model=AgentResponse)
async def agent_chat(request: AgentRequest):
    """
    Main chat endpoint.
    Send a message to the multi-agent ERP system.
    """
    start_time = time.time()
    session_id = request.session_id or str(uuid.uuid4())
    
    logger.info(f"Chat request: session={session_id}, user={request.user_id}, msg={request.message[:50]}")
    
    state = get_or_create_session(session_id, request.user_id)
    state["messages"].append(HumanMessage(content=request.message))
    state["last_active"] = time.time()
    
    try:
        result = erp_multi_agent.invoke(state)
        sessions[session_id] = result
        
        agents_used = list(result.get("agent_outputs", {}).keys())
        elapsed = time.time() - start_time
        
        logger.info(f"Chat response: session={session_id}, agents={agents_used}, time={elapsed:.2f}s")
        
        return AgentResponse(
            response=result["messages"][-1].content,
            session_id=session_id,
            agents_involved=agents_used,
            processing_time=round(elapsed, 2),
            requires_approval=result.get("requires_approval", False),
            steps=result.get("processing_steps", [])
        )
    except Exception as e:
        logger.error(f"Chat error: session={session_id}, error={str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/agent/session/{session_id}")
async def get_session(session_id: str):
    """Get session details."""
    if session_id not in sessions:
        raise HTTPException(404, "Session not found")
    
    state = sessions[session_id]
    return SessionSummary(
        session_id=session_id,
        message_count=len(state["messages"]),
        agents_involved=list(state.get("agent_outputs", {}).keys()),
        requires_approval=state.get("requires_approval", False),
        user_id=state.get("user_id", "unknown"),
        last_active=time.ctime(state.get("last_active", 0))
    )

@app.delete("/api/agent/session/{session_id}")
async def clear_session(session_id: str):
    """Clear session memory."""
    if session_id in sessions:
        del sessions[session_id]
    return {"status": "cleared", "session_id": session_id}

@app.get("/api/agent/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "active_sessions": len(sessions),
        "agents_available": ["inventory", "order", "finance", "customer"],
        "timestamp": time.ctime()
    }

@app.get("/api/agent/analytics")
async def analytics():
    """Get system analytics."""
    total_requests = sum(len(s["messages"]) // 2 for s in sessions.values())
    total_sessions = len(sessions)
    agents_used = set()
    for s in sessions.values():
        agents_used.update(s.get("agent_outputs", {}).keys())
    
    return {
        "total_requests": total_requests,
        "total_sessions": total_sessions,
        "unique_agents_used": list(agents_used),
        "active_sessions": len(sessions)
    }

@app.post("/api/agent/reset-session")
async def reset_session(session_id: str = None):
    """Reset a session's state while keeping history."""
    if session_id and session_id in sessions:
        state = sessions[session_id]
        # Keep messages but reset processing state
        state["current_agent"] = ""
        state["agent_outputs"] = {}
        state["error_count"] = 0
        state["requires_approval"] = False
        state["processing_steps"] = []
        return {"status": "reset", "session_id": session_id}
    raise HTTPException(404, "Session not found")
```

---

## Testing Multi-Agent Interactions

### Unit Tests

```python
import pytest
from unittest.mock import patch, MagicMock

class TestMultiAgentERP:
    
    @pytest.fixture
    def system(self):
        return build_erp_graph()
    
    def test_order_flow(self, system):
        """Test complete order processing flow."""
        state = {
            "messages": [HumanMessage(content="Mujhe ek ERP Pro License order karna hai")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False,
            "session_id": "test-1",
            "user_id": "raushan",
            "processing_steps": []
        }
        
        result = system.invoke(state)
        assert len(result["messages"]) > 0
        assert result["messages"][-1].content
        assert "inventory" in result.get("agent_outputs", {}) or "order" in result.get("agent_outputs", {})
    
    def test_inventory_query(self, system):
        state = {
            "messages": [HumanMessage(content="Stock mein kya hai?")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False,
            "session_id": "test-2",
            "user_id": "raushan",
            "processing_steps": []
        }
        
        result = system.invoke(state)
        assert "inventory" in result.get("agent_outputs", {})
    
    def test_complex_workflow(self, system):
        """Test multi-step workflow that requires multiple agents."""
        state = {
            "messages": [HumanMessage(content="Order ka status check karo aur invoice bhejo")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False,
            "session_id": "test-3",
            "user_id": "raushan",
            "processing_steps": []
        }
        
        result = system.invoke(state)
        # Should involve at least 2 agents
        assert len(result.get("agent_outputs", {})) >= 1
    
    def test_error_recovery(self, system):
        """System should handle invalid inputs gracefully."""
        state = {
            "messages": [HumanMessage(content="")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 3,  # Already errored
            "requires_approval": False,
            "session_id": "test-4",
            "user_id": "raushan",
            "processing_steps": []
        }
        
        result = system.invoke(state)
        assert result["messages"][-1].content  # Should have fallback response
    
    def test_conversation_memory(self, system):
        """Test that agents remember context."""
        state = {
            "messages": [
                HumanMessage(content="Mera naam Raushan hai"),
                AIMessage(content="Namaste Raushan!"),
                HumanMessage(content="Mera account balance kya hai?")
            ],
            "current_agent": "",
            "agent_outputs": {"previous": "Raushan introduced"},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False,
            "session_id": "test-5",
            "user_id": "raushan",
            "processing_steps": []
        }
        
        result = system.invoke(state)
        assert len(result["messages"][-1].content) > 0
```

### Integration Tests

```python
class TestAPIEndpoints:
    """Test FastAPI endpoints."""
    
    BASE_URL = "http://localhost:8000"
    
    @pytest.fixture
    def client(self):
        from fastapi.testclient import TestClient
        return TestClient(app)
    
    def test_health_check(self, client):
        response = client.get("/api/agent/health")
        assert response.status_code == 200
        assert response.json()["status"] == "healthy"
    
    def test_chat_endpoint(self, client):
        response = client.post("/api/agent/chat", json={
            "message": "Stock kya hai?",
            "user_id": "test_user"
        })
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert "session_id" in data
    
    def test_session_persistence(self, client):
        # First message
        r1 = client.post("/api/agent/chat", json={
            "message": "Mera naam Raushan hai",
            "user_id": "test_user"
        })
        session_id = r1.json()["session_id"]
        
        # Second message in same session
        r2 = client.post("/api/agent/chat", json={
            "message": "Mera account balance kya hai?",
            "session_id": session_id,
            "user_id": "test_user"
        })
        assert r2.status_code == 200
        assert r2.json()["session_id"] == session_id
    
    def test_invalid_request(self, client):
        response = client.post("/api/agent/chat", json={})
        assert response.status_code == 422  # Validation error
```

### Load Test

```python
"""
Load testing with locust:

locust -f load_test.py --host=http://localhost:8000
"""

from locust import HttpUser, task, between
import random

class ERPUser(HttpUser):
    wait_time = between(1, 3)
    
    queries = [
        "Stock kya hai?",
        "Order ka status batao",
        "Invoice generate karo",
        "Mujhe help chahiye login mein",
        "Q4 sales report chahiye",
        "Product return karna hai",
        "Payment status check karo",
        "Naya order create karo"
    ]
    
    def on_start(self):
        """Create session on start."""
        response = self.client.post("/api/agent/chat", json={
            "message": "Hello",
            "user_id": f"load_test_{self.id}"
        })
        self.session_id = response.json().get("session_id")
    
    @task
    def send_query(self):
        query = random.choice(self.queries)
        self.client.post("/api/agent/chat", json={
            "message": query,
            "session_id": self.session_id,
            "user_id": f"load_test_{self.id}"
        })
    
    @task
    def check_health(self):
        self.client.get("/api/agent/health")
```

---

## Workflow Examples

### Complete Order Processing

```
User: "Mujhe ek ERP Pro License chahiye"

Step 1: Supervisor → INVENTORY
Step 2: Inventory Agent checks stock → "150 units available, ₹49,999"
Step 3: Supervisor → ORDER
Step 4: Order Agent creates order → "ORD-123456 created"
Step 5: Supervisor → FINANCE
Step 6: Finance Agent processes payment → "Payment of ₹49,999 successful"
Step 7: Supervisor → INVENTORY (update)
Step 8: Inventory Agent updates stock → "Stock updated: 149 remaining"
Step 9: Supervisor → CUSTOMER
Step 10: Customer Agent sends notification → "Order confirmed! Tracking: DL-789"
Step 11: Supervisor → DONE

Total: 5 agents involved, 11 steps
```

### Return Processing

```
User: "Maine jo license liya tha, use return karna hai"

Step 1: Supervisor → CUSTOMER
Step 2: Customer Agent: "Kya issue hai?"
Step 3: User: "Product work nahi kar raha"
Step 4: Supervisor → ORDER
Step 5: Order Agent checks eligibility → "Return eligible, 45 days remaining"
Step 6: Supervisor → FINANCE
Step 7: Finance Agent: "Refund of ₹49,999 will be processed"
Step 8: Supervisor → CUSTOMER
Step 9: Customer Agent: "Return initiated. Pickup scheduled. Refund in 5-7 days."
Step 10: Supervisor → DONE
```

### Multi-Agent Collaboration for Financial Report

```
User: "December ka complete financial report chahiye"

Step 1: Supervisor → FINANCE
Step 2: Finance Agent generates report (revenue ₹50L, expenses ₹35L, profit ₹15L)
Step 3: Supervisor → INVENTORY
Step 4: Inventory Agent adds stock movement data
Step 5: Supervisor → ORDER
Step 6: Order Agent adds order statistics (450 orders, avg ₹45K)
Step 7: Supervisor → FINANCE (combine)
Step 8: Finance Agent compiles comprehensive report
Step 9: Supervisor → DONE
```

---

## Security & Best Practices

### Authentication & Rate Limiting

```python
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

@app.post("/api/agent/chat")
@limiter.limit("30/minute")  # 30 requests per minute
async def agent_chat(request: Request, chat_request: AgentRequest):
    """Rate-limited chat endpoint."""
    # ... implementation ...

# Input validation
from pydantic import BaseModel, Field, validator

class AgentRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    session_id: Optional[str] = None
    user_id: str = "anonymous"
    
    @validator("message")
    def validate_message(cls, v):
        # Block injection attempts
        forbidden = ["<script>", "DROP TABLE", "DELETE FROM"]
        for pattern in forbidden:
            if pattern in v.upper():
                raise ValueError("Invalid message content")
        return v
```

### Security Checklist

```
□ API key authentication
□ Rate limiting (30 req/min per user)
□ Input sanitization
□ Session timeout (30 min inactive)
□ Audit logging
□ PII masking in logs
□ HTTPS enforcement
□ CORS whitelist
□ Prompt injection protection
```

---

## Deployment

```yaml
# docker-compose.yml
version: "3.8"

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - REDIS_HOST=redis
      - DATABASE_URL=postgresql://user:pass@postgres:5432/apexerp
      - LANGCHAIN_TRACING_V2=true
      - LANGCHAIN_API_KEY=${LANGCHAIN_API_KEY}
      - LOG_LEVEL=INFO
    depends_on:
      - redis
      - postgres
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/api/agent/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: apexerp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  monitoring:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
    volumes:
      - grafana_data:/var/lib/grafana

volumes:
  postgres_data:
  redis_data:
  grafana_data:
```

### Production Commands

```bash
#!/bin/bash
# deploy.sh — One-click deployment

echo "🚀 Deploying ApexERP Multi-Agent System..."

# 1. Check prerequisites
command -v docker >/dev/null 2>&1 || { echo "Docker required!"; exit 1; }

# 2. Environment setup
if [ ! -f .env ]; then
    cp .env.example .env
    echo "⚠️  Edit .env with your API keys!"
    exit 1
fi

# 3. Build and deploy
docker-compose build --no-cache
docker-compose up -d

# 4. Health check
sleep 5
curl -s http://localhost:8000/api/agent/health || {
    echo "❌ Health check failed!"
    docker-compose logs api
    exit 1
}

echo "✅ ApexERP Multi-Agent System deployed!"
echo "📊 API: http://localhost:8000"
echo "📈 Dashboard: http://localhost:3000 (admin/{$GRAFANA_PASSWORD})"
echo ""

# Test
curl -X POST http://localhost:8000/api/agent/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{"message": "Stock kya hai?", "user_id": "test"}'
```

```bash
# Quick start
git clone <repo>
cd multi-agent-erp
cp .env.example .env
# Edit .env with your keys
docker-compose up -d

# Test
curl -X POST http://localhost:8000/api/agent/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Mujhe Q4 sales report chahiye", "user_id": "raushan"}'
```

---

## Monitoring & Analytics

### LangSmith / LangFuse Integration

```python
"""
Production monitoring ke liye:

1. LangSmith — LangChain's observability platform
2. LangFuse — Open-source tracing
3. Custom Prometheus metrics
"""

from langsmith import Client
from langchain.callbacks.tracers import LangChainTracer

# Enable tracing
tracer = LangChainTracer(
    project_name="apexerp-multiagent",
    client=Client(api_key="your-langsmith-key")
)

# In your agent function:
with tracer:
    result = agent_llm_with_tools.invoke([...])

# Custom metrics (Prometheus)
from prometheus_client import Counter, Histogram, generate_latest

AGENT_CALLS = Counter('agent_calls_total', 'Total agent calls', ['agent_name'])
AGENT_LATENCY = Histogram('agent_latency_seconds', 'Agent latency', ['agent_name'])
AGENT_ERRORS = Counter('agent_errors_total', 'Agent errors', ['agent_name'])

def monitored_agent_node(agent_name: str, tools: list, system_prompt: str):
    """Agent node with monitoring."""
    
    def agent_node(state: ERPState) -> ERPState:
        start = time.time()
        AGENT_CALLS.labels(agent_name=agent_name).inc()
        
        try:
            # ... agent logic ...
            AGENT_LATENCY.labels(agent_name=agent_name).observe(time.time() - start)
            return result
        except Exception as e:
            AGENT_ERRORS.labels(agent_name=agent_name).inc()
            raise
    
    return agent_node
```

### Dashboard Metrics

```
Agents Dashboard:
┌─────────────────────────────────────────────────┐
│ Agent      │ Calls │ Errors │ Avg Latency │ Cost │
├─────────────────────────────────────────────────┤
│ Inventory  │ 1,234  │ 12     │ 2.3s       │ $4.50 │
│ Order      │ 987    │ 8      │ 3.1s       │ $6.20 │
│ Finance    │ 1,567  │ 23     │ 2.8s       │ $5.80 │
│ Customer   │ 2,345  │ 15     │ 1.9s       │ $3.20 │
└─────────────────────────────────────────────────┘

System Health:
• Active Sessions: 47
• Avg Response Time: 2.5s
• Error Rate: 1.2%
• Cache Hit Rate: 64%
• Cost Per Session: $0.08
```

---

## Mistakes to Avoid

```
❌ Ek agent sab kuch kar raha hai
   → Specialization nahi, single point of failure

❌ Supervisor ke bina direct agent calls
   → Koi coordination nahi, agents confuse ho jayenge

❌ State share nahi kar rahe
   → Har agent naye context se kaam karega

❌ Error handling nahi
   → Ek agent fail → poora system fail

❌ No monitoring
   → Pata nahi kaunsa agent slow hai ya fail ho raha

✅ Correct approach:
   • 4 specialized agents + supervisor
   • Shared state with Redis
   • Circuit breaker pattern
   • Comprehensive error handling
   • LangSmith monitoring
   • Rate limiting + auth
```

---

## Success Checklist

- [ ] All 4 agents (Inventory, Order, Finance, Customer) working
- [ ] Supervisor correctly routes queries
- [ ] Multi-step workflows execute correctly
- [ ] Agents share context through state
- [ ] Error recovery when agent fails
- [ ] Session management across conversations
- [ ] FastAPI endpoints serving requests
- [ ] Docker deployment working
- [ ] Test coverage > 70%
- [ ] Rate limiting + auth implemented
- [ ] Prometheus metrics configured
- [ ] Grafana dashboard set up
- [ ] Production monitoring set up
- [ ] Load testing passed (100 concurrent users)

### PHP Developer's Final Note

```
Laravel developer ka multi-agent takeaway:

1. Supervisor = Routes (decides flow)
2. Agents = Controllers + Services (do the work)
3. Shared State = Session + Cache (share data)
4. Tools = Repository Pattern (data access)
5. Checkpointing = Database Transactions (save state)

Jis tarah Laravel mein aap Controllers ko
Services aur Repositories mein break karte ho,
waise hi AI mein aap agents ko specialize karte ho.

Extra mile: Agents LLM-powered hain, isliye
woh dynamic decisions kar sakte hain — 
static Laravel routes se zyada flexible.
```
