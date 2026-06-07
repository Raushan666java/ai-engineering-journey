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
       │
       ├── OrderAgent
       │   Tools: order_create, order_status, shipping_track
       │
       ├── FinanceAgent
       │   Tools: invoice_gen, payment_process, expense_track
       │
       └── CustomerAgent
           Tools: ticket_create, faq_search, email_send

Each agent has:
→ Shared memory (Redis)
→ Database access (PostgreSQL)
→ Tool restrictions
→ Error recovery
```

---

## Agent Definitions

### 1. InventoryAgent

```python
class InventoryAgent:
    """
    Inventory management specialist.
    Handles: stock levels, product info, warehouse management.
    """
    
    tools = [
        Tool(
            name="check_stock",
            func=lambda product_id: f"Stock for {product_id}: 150 units",
            description="Check current stock level for a product"
        ),
        Tool(
            name="get_product_details",
            func=lambda product_id: {"name": "ERP Pro License", "price": 49999, "category": "Software"},
            description="Get product information"
        ),
        Tool(
            name="check_warehouse",
            func=lambda warehouse_id: f"Warehouse {warehouse_id}: 80% capacity, 5000 items",
            description="Check warehouse status"
        ),
        Tool(
            name="low_stock_alert",
            func=lambda threshold: ["Product A (50 units)", "Product B (12 units)"],
            description="Get products below stock threshold"
        ),
    ]
    
    system_prompt = """You are Inventory Agent for ApexERP.
    You handle all inventory-related queries.
    Be precise with numbers. Alert if stock is low.
    Use Hinglish."""
```

### 2. OrderAgent

```python
class OrderAgent:
    """
    Order processing specialist.
    Handles: order creation, tracking, returns, shipping.
    """
    
    tools = [
        Tool(
            name="create_order",
            func=lambda customer_id, items: f"Order #ORD-{int(time.time())} created",
            description="Create new order for customer"
        ),
        Tool(
            name="get_order_status",
            func=lambda order_id: f"Order {order_id}: Shipped, expected delivery in 2 days",
            description="Check order status"
        ),
        Tool(
            name="track_shipping",
            func=lambda order_id: {"status": "in_transit", "location": "Patna Hub", "eta": "2 days"},
            description="Track shipping for an order"
        ),
        Tool(
            name="process_return",
            func=lambda order_id, reason: f"Return initiated for {order_id}. Refund in 5-7 days.",
            description="Process order return"
        ),
        Tool(
            name="cancel_order",
            func=lambda order_id: f"Order {order_id} cancelled. No charge.",
            description="Cancel an order if not yet shipped"
        ),
    ]
    
    system_prompt = """You are Order Agent for ApexERP.
    You process and track orders.
    Verify inventory before creating orders.
    Use Hinglish."""
```

### 3. FinanceAgent

```python
class FinanceAgent:
    """
    Finance management specialist.
    Handles: invoices, payments, expenses, reports.
    """
    
    tools = [
        Tool(
            name="generate_invoice",
            func=lambda order_id: f"Invoice #INV-{int(time.time())} generated for order {order_id}",
            description="Generate invoice for completed order"
        ),
        Tool(
            name="process_payment",
            func=lambda invoice_id, amount: f"Payment of ₹{amount} processed for {invoice_id}",
            description="Process payment for invoice"
        ),
        Tool(
            name="get_payment_status",
            func=lambda invoice_id: f"Invoice {invoice_id}: Paid on 2024-12-01",
            description="Check payment status"
        ),
        Tool(
            name="record_expense",
            func=lambda category, amount, desc: f"Expense recorded: {category} ₹{amount}",
            description="Record a business expense"
        ),
        Tool(
            name="generate_report",
            func=lambda period: f"Report for {period}: Revenue ₹50L, Expenses ₹35L, Profit ₹15L",
            description="Generate financial report for period"
        ),
    ]
    
    system_prompt = """You are Finance Agent for ApexERP.
    You handle all financial operations.
    Be accurate with numbers. Verify before transactions.
    Use Hinglish."""
```

### 4. CustomerAgent

```python
class CustomerAgent:
    """
    Customer relationship specialist.
    Handles: queries, tickets, feedback, communication.
    """
    
    tools = [
        Tool(
            name="search_faq",
            func=lambda query: f"FAQ results for '{query}': ...",
            description="Search knowledge base for answers"
        ),
        Tool(
            name="create_ticket",
            func=lambda customer_id, issue, priority: f"Ticket #{int(time.time())} created. Priority: {priority}",
            description="Create support ticket"
        ),
        Tool(
            name="get_ticket_status",
            func=lambda ticket_id: f"Ticket {ticket_id}: In Progress, assigned to Raushan",
            description="Check ticket status"
        ),
        Tool(
            name="send_notification",
            func=lambda customer_id, message: f"Notification sent to customer {customer_id}",
            description="Send notification to customer"
        ),
        Tool(
            name="get_customer_history",
            func=lambda customer_id: {"orders": 12, "tickets": 3, "total_spent": 450000},
            description="Get customer history summary"
        ),
    ]
    
    system_prompt = """You are Customer Agent for ApexERP.
    You handle all customer-facing interactions.
    Be polite, helpful, and professional.
    Use Hinglish."""
```

---

## LangGraph Implementation

```python
from typing import TypedDict, Literal, Annotated
from langgraph.graph import StateGraph, END, add_messages
from langgraph.checkpoint import MemorySaver
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, AIMessage
from langchain.tools import Tool
import json

# State
class ERPState(TypedDict):
    messages: Annotated[list, add_messages]
    current_agent: str
    agent_outputs: dict
    order_data: dict
    error_count: int
    requires_approval: bool

llm = ChatOpenAI(model="gpt-4o", temperature=0.2)

# Supervisor
def supervisor_node(state: ERPState) -> dict:
    """Route to appropriate ERP agent."""
    query = state["messages"][-1].content
    
    decision = llm.invoke(f"""
    ApexERP multi-agent system. Route this query:
    
    "{query}"
    
    Agents:
    - INVENTORY: stock, product, warehouse, supply
    - ORDER: order process, shipping, returns, tracking
    - FINANCE: payment, invoice, expense, report, billing
    - CUSTOMER: support, ticket, faq, complaint, help
    - DONE: Query is fully resolved
    
    Route to: [AGENT_NAME]
    """)
    
    agent = "DONE"
    for a in ["INVENTORY", "ORDER", "FINANCE", "CUSTOMER", "DONE"]:
        if a in decision.content.upper():
            agent = a
            break
    
    return {"current_agent": agent}

# Agent factory
def create_agent_node(agent_name: str, tools: list, system_prompt: str):
    """Create a LangGraph node for any agent."""
    
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
                agent_name: response.content
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

# Build graph
def build_erp_graph():
    workflow = StateGraph(ERPState)
    
    workflow.add_node("supervisor", supervisor_node)
    workflow.add_node("inventory", inventory_node)
    workflow.add_node("order", order_node)
    workflow.add_node("finance", finance_node)
    workflow.add_node("customer", customer_node)
    
    workflow.set_entry_point("supervisor")
    
    workflow.add_conditional_edges(
        "supervisor",
        lambda s: s["current_agent"].lower(),
        {
            "inventory": "inventory",
            "order": "order",
            "finance": "finance",
            "customer": "customer",
            "done": END
        }
    )
    
    # After each agent, check if done or need more
    for agent in ["inventory", "order", "finance", "customer"]:
        workflow.add_conditional_edges(
            agent,
            lambda s: "supervisor" if s.get("error_count", 0) < 3 else END,
            {"supervisor": "supervisor", END: END}
        )
    
    return workflow.compile()

# Main app
erp_multi_agent = build_erp_graph()
```

---

## FastAPI Endpoints

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import uuid

app = FastAPI(title="ApexERP Multi-Agent System")

class AgentRequest(BaseModel):
    message: str
    session_id: Optional[str] = None
    user_id: str = "anonymous"

class AgentResponse(BaseModel):
    response: str
    session_id: str
    agents_involved: list
    requires_approval: bool = False

# Session management
sessions = {}

@app.post("/api/agent/chat", response_model=AgentResponse)
async def agent_chat(request: AgentRequest):
    session_id = request.session_id or str(uuid.uuid4())
    
    if session_id not in sessions:
        # New session
        sessions[session_id] = {
            "messages": [],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False
        }
    
    state = sessions[session_id]
    state["messages"].append(HumanMessage(content=request.message))
    
    try:
        result = erp_multi_agent.invoke(state)
        sessions[session_id] = result
        
        agents_used = list(result.get("agent_outputs", {}).keys())
        
        return AgentResponse(
            response=result["messages"][-1].content,
            session_id=session_id,
            agents_involved=agents_used,
            requires_approval=result.get("requires_approval", False)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/agent/session/{session_id}")
async def get_session(session_id: str):
    if session_id not in sessions:
        raise HTTPException(404, "Session not found")
    
    state = sessions[session_id]
    return {
        "session_id": session_id,
        "message_count": len(state["messages"]),
        "agents_involved": list(state.get("agent_outputs", {}).keys()),
        "requires_approval": state.get("requires_approval", False)
    }
```

---

## Testing Multi-Agent Interactions

```python
import pytest
from unittest.mock import patch

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
            "requires_approval": False
        }
        
        result = system.invoke(state)
        assert len(result["messages"]) > 0
        assert "inventory" in result.get("agent_outputs", {}) or "order" in result.get("agent_outputs", {})
    
    def test_inventory_query(self, system):
        state = {
            "messages": [HumanMessage(content="Stock mein kya hai?")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False
        }
        
        result = system.invoke(state)
        assert "inventory" in result.get("agent_outputs", {})
    
    def test_complex_workflow(self, system):
        """Test multi-step workflow."""
        state = {
            "messages": [HumanMessage(content="Order ka status check karo aur invoice bhejo")],
            "current_agent": "",
            "agent_outputs": {},
            "order_data": {},
            "error_count": 0,
            "requires_approval": False
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
            "requires_approval": False
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
            "requires_approval": False
        }
        
        result = system.invoke(state)
        assert "Raushan" in result["messages"][-1].content
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
    depends_on:
      - redis
      - postgres

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: apexerp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
# Commands
git clone <repo>
cd multi-agent-erp
cp .env.example .env
docker-compose up -d

# Test
curl -X POST http://localhost:8000/api/agent/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Mujhe Q4 sales report chahiye", "user_id": "raushan"}'
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
- [ ] Production monitoring set up
