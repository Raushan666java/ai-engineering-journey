# Week 2 — LangGraph Advanced

**Goal:** Multi-agent systems with LangGraph
**Output:** Supervisor agent, multi-agent workflow, parallel execution

---

## Day 1 — Multi-Agent with LangGraph

```python
from typing import TypedDict, List, Literal, Annotated, Optional
from langgraph.graph import StateGraph, END, add_messages
from langgraph.checkpoint import MemorySaver
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, AIMessage, SystemMessage
import operator

"""
LangGraph mein multi-agent:
→ Har agent ek NODE hai
→ Shared STATE hai jo agents communicate karte hain
→ Router decide karta hai kaun sa agent next
"""

# Define shared state
class MultiAgentState(TypedDict):
    messages: Annotated[list, add_messages]
    current_agent: str
    agent_outputs: dict
    route_history: list
    error_count: int

llm = ChatOpenAI(model="gpt-4o", temperature=0)
```

---

## Day 2 — Supervisor Node

```python
"""
Supervisor = Router jo decide karta hai kaun sa agent handle karega.
"""

def supervisor_node(state: MultiAgentState) -> dict:
    """Decide which agent should handle the next step."""
    
    last_message = state["messages"][-1].content if state["messages"] else ""
    
    prompt = f"""
    You are a supervisor managing AI agents in an ERP system.
    Available agents:
    
    1. SALES_AGENT: Handles sales data, revenue, orders, customer info
    2. INVENTORY_AGENT: Handles stock levels, products, warehouses
    3. FINANCE_AGENT: Handles billing, invoices, payments, expenses
    4. SUPPORT_AGENT: Handles customer issues, tickets, FAQs
    5. FINAL: If the user request is fully resolved
    
    User message: {last_message}
    
    Which agent should handle this? Choose one: SALES_AGENT, INVENTORY_AGENT, FINANCE_AGENT, SUPPORT_AGENT, or FINAL
    
    Also provide a brief reason for this decision.
    
    Format: AGENT: [name]
    Reason: [brief explanation]
    """
    
    response = llm.invoke(prompt)
    content = response.content
    
    # Parse agent name
    for agent in ["SALES_AGENT", "INVENTORY_AGENT", "FINANCE_AGENT", "SUPPORT_AGENT", "FINAL"]:
        if agent in content:
            return {
                "current_agent": agent,
                "route_history": state["route_history"] + [agent]
            }
    
    return {"current_agent": "SUPPORT_AGENT"}

# Agent nodes
def sales_agent(state: MultiAgentState) -> MultiAgentState:
    """Handle sales-related queries."""
    query = state["messages"][-1].content
    
    response = llm.invoke(f"""
    You are a SALES AGENT for ApexERP.
    Handle this query: {query}
    
    You have access to sales data, customer info, order history.
    Respond with actual data when possible, otherwise provide guidance.
    Use Hinglish.
    """)
    
    return {
        "messages": [AIMessage(content=response.content, name="sales_agent")],
        "agent_outputs": {**state["agent_outputs"], "sales": response.content}
    }

def inventory_agent(state: MultiAgentState) -> MultiAgentState:
    """Handle inventory-related queries."""
    query = state["messages"][-1].content
    
    response = llm.invoke(f"""
    You are an INVENTORY AGENT for ApexERP.
    Handle this query: {query}
    
    You track stock levels, warehouse data, product info.
    Use Hinglish.
    """)
    
    return {
        "messages": [AIMessage(content=response.content, name="inventory_agent")],
        "agent_outputs": {**state["agent_outputs"], "inventory": response.content}
    }

def finance_agent(state: MultiAgentState) -> MultiAgentState:
    """Handle finance-related queries."""
    query = state["messages"][-1].content
    
    response = llm.invoke(f"""
    You are a FINANCE AGENT for ApexERP.
    Handle this query: {query}
    
    You handle billing, invoices, payments, expenses, budgets.
    Use Hinglish.
    """)
    
    return {
        "messages": [AIMessage(content=response.content, name="finance_agent")],
        "agent_outputs": {**state["agent_outputs"], "finance": response.content}
    }

def support_agent(state: MultiAgentState) -> MultiAgentState:
    """Handle support-related queries."""
    query = state["messages"][-1].content
    
    response = llm.invoke(f"""
    You are a SUPPORT AGENT for ApexERP.
    Handle this query: {query}
    
    You help with product issues, troubleshooting, FAQs.
    Use Hinglish.
    """)
    
    return {
        "messages": [AIMessage(content=response.content, name="support_agent")],
        "agent_outputs": {**state["agent_outputs"], "support": response.content}
    }
```

---

## Day 3 — Conditional Routing

```python
"""
Conditional routing = Supervisor's decision ke basis par
agent ko route karna.
"""

def router_condition(state: MultiAgentState) -> Literal[
    "sales_agent", "inventory_agent", "finance_agent", 
    "support_agent", "final"
]:
    """Route to appropriate agent based on supervisor decision."""
    current = state.get("current_agent", "")
    route_count = len(state["route_history"])
    
    # Prevent infinite loops (max 5 routes)
    if route_count > 4:
        return "final"
    
    agent_map = {
        "SALES_AGENT": "sales_agent",
        "INVENTORY_AGENT": "inventory_agent",
        "FINANCE_AGENT": "finance_agent",
        "SUPPORT_AGENT": "support_agent",
        "FINAL": "final"
    }
    
    return agent_map.get(current, "final")

def final_node(state: MultiAgentState) -> dict:
    """Compile final response from all agent outputs."""
    all_outputs = state.get("agent_outputs", {})
    
    if not all_outputs:
        return {
            "messages": [AIMessage(content="Mujhe samajh nahi aaya. Kripya dobara batao.")]
        }
    
    # Combine outputs
    combined = "\n\n".join([
        f"**{agent.upper()}**: {output}"
        for agent, output in all_outputs.items()
    ])
    
    final = llm.invoke(f"""
    Combine these agent responses into a single coherent answer in Hinglish:
    
    {combined}
    """)
    
    return {
        "messages": [AIMessage(content=final.content)],
        "current_agent": "done"
    }

# Build graph
def build_multi_agent_graph():
    workflow = StateGraph(MultiAgentState)
    
    # Add nodes
    workflow.add_node("supervisor", supervisor_node)
    workflow.add_node("sales_agent", sales_agent)
    workflow.add_node("inventory_agent", inventory_agent)
    workflow.add_node("finance_agent", finance_agent)
    workflow.add_node("support_agent", support_agent)
    workflow.add_node("final", final_node)
    
    # Start with supervisor
    workflow.set_entry_point("supervisor")
    
    # Supervisor routes to agents
    workflow.add_conditional_edges(
        "supervisor",
        router_condition,
        {
            "sales_agent": "sales_agent",
            "inventory_agent": "inventory_agent",
            "finance_agent": "finance_agent",
            "support_agent": "support_agent",
            "final": "final"
        }
    )
    
    # After any agent, go back to supervisor (or handle errors)
    for agent in ["sales_agent", "inventory_agent", "finance_agent", "support_agent"]:
        workflow.add_conditional_edges(
            agent,
            lambda s: "final" if s.get("error_count", 0) > 3 else "supervisor",
            {
                "supervisor": "supervisor",
                "final": "final"
            }
        )
    
    workflow.add_edge("final", END)
    
    return workflow.compile()

# Usage
app = build_multi_agent_graph()

result = app.invoke({
    "messages": [HumanMessage(content="Q4 sales kya the aur inventory status kya hai?")],
    "current_agent": "",
    "agent_outputs": {},
    "route_history": [],
    "error_count": 0
})

print(result["messages"][-1].content)
```

---

## Day 4 — Agent Communication via Shared State

```python
"""
Agents ek dusre se kaise communicate karte hain:

1. Shared State: Sab agents ek common state access kar sakte hain
2. Messages List: Har agent apna output messages mein add karta hai
3. Agent Outputs: Structured output dictionary
4. Tool Results: Agar ek agent ne tool call kiya, result shared
"""

from pydantic import BaseModel

class TaskOutput(BaseModel):
    agent_name: str
    task_type: str
    result: str
    confidence: float
    needs_human: bool = False

def structured_agent_node(state: MultiAgentState, agent_name: str) -> MultiAgentState:
    """
    Agent with structured communication.
    """
    query = state["messages"][-1].content
    previous_outputs = state.get("agent_outputs", {})
    
    # Give agent context of what other agents did
    context = "\n".join([
        f"{k}: {v[:200]}" 
        for k, v in previous_outputs.items()
    ]) if previous_outputs else "No previous context"
    
    response = llm.invoke(f"""
    You are {agent_name} in ApexERP multi-agent system.
    
    Previous work by other agents:
    {context}
    
    Current query: {query}
    
    Respond in structured format:
    1. What information you're providing
    2. Any dependencies on other agents
    3. Any issues or errors
    
    Use Hinglish:
    """)
    
    # Structured output
    task_output = TaskOutput(
        agent_name=agent_name,
        task_type="query_processing",
        result=response.content,
        confidence=0.85 if "error" not in response.content.lower() else 0.4,
        needs_human="approve" in response.content.lower()
    )
    
    return {
        "messages": [AIMessage(content=task_output.result, name=agent_name)],
        "agent_outputs": {
            **previous_outputs,
            agent_name: task_output.model_dump()
        }
    }

# Different agents use the same function
def sales_agent_structured(state):
    return structured_agent_node(state, "sales_agent")

def inventory_agent_structured(state):
    return structured_agent_node(state, "inventory_agent")
```

---

## Day 5 — Parallel Agent Execution

```python
"""
Parallel execution = multiple agents ek saath kaam karein.

Use case: "Q4 ka data chahiye"
→ Sales agent: sales nikaal raha hai
→ Inventory agent: stock check kar raha hai
→ Finance agent: profit calculate kar raha hai
→ Sab parallel mein chal rahe hain
→ Phir combine karo
"""

from langgraph.graph import StateGraph, END
import asyncio
import time

class ParallelAgentExecutor:
    """
    Multiple agents ko parallel mein execute karo.
    Har agent independent kaam karta hai.
    Phir supervisor combine karta hai.
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)
    
    async def run_agent(self, agent_name: str, task: str) -> dict:
        """Run a single agent with timing."""
        start = time.time()
        
        result = self.llm.invoke(f"""
        You are {agent_name} in ApexERP.
        Task: {task}
        Provide your analysis in 2-3 sentences.
        """)
        
        elapsed = time.time() - start
        
        return {
            "agent": agent_name,
            "result": result.content,
            "elapsed_seconds": round(elapsed, 2)
        }
    
    async def run_parallel(self, tasks: dict) -> list:
        """Run multiple agents in parallel."""
        coroutines = [
            self.run_agent(name, task)
            for name, task in tasks.items()
        ]
        
        results = await asyncio.gather(*coroutines)
        return results

# Usage
async def parallel_demo():
    executor = ParallelAgentExecutor()
    
    tasks = {
        "sales_agent": "What were Q4 2024 sales figures?",
        "inventory_agent": "What is current inventory level of top 5 products?",
        "finance_agent": "What was net profit in Q4 2024?"
    }
    
    results = await executor.run_parallel(tasks)
    
    for r in results:
        print(f"\n=== {r['agent']} ({r['elapsed_seconds']}s) ===")
        print(r['result'])

# Run
# asyncio.run(parallel_demo())

# LangGraph version with parallel fan-out
from langgraph.graph import StateGraph

def fan_out_node(state: MultiAgentState) -> MultiAgentState:
    """
    Fan-out: ek input se multiple parallel tasks create karo.
    """
    query = state["messages"][-1].content
    
    # Determine which agents to run in parallel
    parallel_tasks = []
    
    if "sales" in query.lower() or "revenue" in query.lower() or "sale" in query.lower():
        parallel_tasks.append("sales")
    if "inventory" in query.lower() or "stock" in query.lower():
        parallel_tasks.append("inventory")
    if "finance" in query.lower() or "profit" in query.lower() or "bill" in query.lower():
        parallel_tasks.append("finance")
    
    # If no specific keywords, run all
    if not parallel_tasks:
        parallel_tasks = ["sales", "inventory", "finance"]
    
    # Store which parallel agents to run
    return {"agent_outputs": {"parallel_tasks": parallel_tasks}}

def collect_results(state: MultiAgentState) -> MultiAgentState:
    """
    Fan-in: saare parallel results ko collect karo.
    """
    parallel_results = state.get("agent_outputs", {})
    tasks = parallel_results.get("parallel_tasks", [])
    
    collected = {
        k: v for k, v in parallel_results.items() 
        if k != "parallel_tasks" and not k.startswith("_")
    }
    
    # Create summary
    summary = llm.invoke(f"""
    Summarize these parallel agent results into one answer:
    
    {collected}
    
    Use Hinglish. Highlight key numbers.
    """)
    
    return {"messages": [AIMessage(content=summary.content)]}
```

---

## Day 6 — Error Handling in Multi-Agent

```python
"""
Multi-agent mein errors handle karna critical hai:

1. Agent fail → Try again
2. Agent fail again → Route to different agent
3. All fail → Human escalation
4. Timeout → Move to next agent
5. Invalid output → Request clarification
"""

class RobustMultiAgent:
    """
    Multi-agent system with comprehensive error handling.
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
        self.max_retries = 2
    
    def run_with_retry(self, agent_func, state: MultiAgentState, agent_name: str) -> MultiAgentState:
        """Run agent with retry logic."""
        
        for attempt in range(self.max_retries + 1):
            try:
                result = agent_func(state)
                # Check if result is valid
                if result and result.get("messages"):
                    return result
                else:
                    raise ValueError("Empty result")
                    
            except Exception as e:
                print(f"[ERROR] {agent_name} attempt {attempt + 1} failed: {e}")
                
                if attempt < self.max_retries:
                    # Add error to state and retry
                    state["error_count"] += 1
                    state["messages"].append(
                        AIMessage(content=f"Error in {agent_name}. Retrying...")
                    )
                else:
                    # Final failure
                    return {
                        "messages": [AIMessage(
                            content=f"{agent_name} failed after {self.max_retries} retries. Escalating to human."
                        )],
                        "agent_outputs": {
                            **state.get("agent_outputs", {}),
                            f"{agent_name}_error": f"Failed after {self.max_retries} attempts"
                        }
                    }
        
        return state
    
    def handle_timeout(self, state: MultiAgentState, agent_name: str) -> MultiAgentState:
        """Handle agent timeout."""
        return {
            "messages": [AIMessage(
                content=f"{agent_name} took too long. Moving to next step."
            )],
            "agent_outputs": {
                **state.get("agent_outputs", {}),
                f"{agent_name}_timeout": True
            }
        }
    
    def escalate_to_human(self, state: MultiAgentState) -> dict:
        """When all agents fail, escalate to human."""
        error_summary = "\n".join([
            f"{k}: {v}" 
            for k, v in state.get("agent_outputs", {}).items()
            if "error" in k or "timeout" in k
        ])
        
        return {
            "messages": [AIMessage(content=f"""
⚠️ Human intervention needed!

All agents failed to process this request.

Errors:
{error_summary}

Please handle manually or ask the user for more details.
            """)],
            "current_agent": "escalated"
        }

# Error router
def error_router(state: MultiAgentState) -> str:
    """Route based on error count."""
    error_count = state.get("error_count", 0)
    
    if error_count >= 3:
        return "escalate"
    elif error_count >= 1:
        return "retry"
    else:
        return "continue"
```

---

## Day 7 — Practical: Customer Support Triage System

```python
class CustomerSupportTriage:
    """
    Complete multi-agent customer support system.
    
    Flow:
    1. User query aayi
    2. Triage agent categorizes
    3. Specific agent handles it
    4. If complex → multiple agents collaborate
    5. Quality check → Final response
    """
    
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.3)
        self.build_graph()
    
    def triage(self, state: MultiAgentState) -> MultiAgentState:
        """Categorize the incoming query."""
        query = state["messages"][-1].content
        
        category = self.llm.invoke(f"""
        Categorize this customer query:
        "{query}"
        
        Categories:
        - BILLING: Payment, invoice, subscription, refund
        - TECHNICAL: Bug, error, feature request, setup
        - ACCOUNT: Login, password, profile, settings
        - SALES: Pricing, demo, purchase, upgrade
        - GENERAL: Anything else
        
        Respond with just the category name.
        """)
        
        return {"current_agent": category.content.strip()}
    
    def billing_handler(self, state: MultiAgentState) -> MultiAgentState:
        query = state["messages"][-1].content
        result = self.llm.invoke(f"""
        You are a BILLING support agent for ApexERP.
        
        Customer: {query}
        
        Steps:
        1. Check if it's about payment, invoice, or refund
        2. Provide clear solution
        3. If amount involved, ask for confirmation
        
        Use Hinglish:
        """)
        return {
            "messages": [AIMessage(content=result.content, name="billing")],
            "agent_outputs": {"billing": result.content}
        }
    
    def technical_handler(self, state: MultiAgentState) -> MultiAgentState:
        query = state["messages"][-1].content
        result = self.llm.invoke(f"""
        You are a TECHNICAL support agent for ApexERP.
        
        Customer: {query}
        
        Steps:
        1. Identify the technical issue
        2. Provide step-by-step solution
        3. Ask clarifying questions if needed
        
        Use Hinglish:
        """)
        return {
            "messages": [AIMessage(content=result.content, name="technical")],
            "agent_outputs": {"technical": result.content}
        }
    
    def quality_check(self, state: MultiAgentState) -> MultiAgentState:
        """Final quality check before response."""
        response = state["messages"][-1].content
        
        check = self.llm.invoke(f"""
        Quality check this support response:
        
        {response}
        
        Check:
        1. Is it helpful? (yes/no)
        2. Is it accurate? (yes/no)
        3. Does it ask for needed info? (yes/no)
        4. Is tone appropriate? (yes/no)
        
        If all yes, say "APPROVED". Otherwise, say what to improve.
        """)
        
        if "APPROVED" in check.content:
            return state
        else:
            # Re-route to fix
            state["messages"].append(AIMessage(content=f"Quality issue: {check.content}"))
            return state
    
    def build_graph(self):
        workflow = StateGraph(MultiAgentState)
        
        workflow.add_node("triage", self.triage)
        workflow.add_node("billing", self.billing_handler)
        workflow.add_node("technical", self.technical_handler)
        workflow.add_node("account", self.account_handler)
        workflow.add_node("sales", self.sales_handler)
        workflow.add_node("general", self.general_handler)
        workflow.add_node("quality", self.quality_check)
        
        workflow.set_entry_point("triage")
        
        # Conditional routing from triage
        workflow.add_conditional_edges(
            "triage",
            lambda s: s.get("current_agent", "GENERAL").lower(),
            {
                "billing": "billing",
                "technical": "technical",
                "account": "account",
                "sales": "sales",
                "general": "general"
            }
        )
        
        # All agents go to quality check
        for agent in ["billing", "technical", "account", "sales", "general"]:
            workflow.add_edge(agent, "quality")
        
        workflow.add_edge("quality", END)
        
        self.app = workflow.compile()
    
    def handle_query(self, query: str) -> str:
        result = self.app.invoke({
            "messages": [HumanMessage(content=query)],
            "current_agent": "",
            "agent_outputs": {},
            "route_history": [],
            "error_count": 0
        })
        
        return result["messages"][-1].content

# Usage
support = CustomerSupportTriage()
response = support.handle_query("Mera invoice nahi aa raha hai, kya karun?")
print(response)
```

---

## Summary

```
Week 2 khatam:

✅ Multi-Agent Graph — Supervisor + specialized agents
✅ Conditional Routing — Router decides kaun sa agent
✅ Shared State — Agents communicate via state
✅ Parallel Execution — Agents ek saath kaam karte hain
✅ Error Handling — Retry, timeout, human escalation
✅ Support Triage — Complete production system

Ab tu multi-agent systems bana sakta hai!
```
