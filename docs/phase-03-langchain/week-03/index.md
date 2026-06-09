# Week 3 — LangGraph & Agents

**Goal:** Simple chains se aage badho — dynamic, stateful, multi-step AI workflows banane sikho
**Duration:** 8 Days
**Target:** Laravel/PHP developer → AI agent builder

---

## 📚 PHP Developer Mental Model

| PHP/Laravel Concept | LangGraph/Agents Concept | Exactly Same? |
|---|---|---|
| Queue Job | Node (ek processing step) | Similar — ek kaam jo execute hota hai |
| Queue Worker | Agent (loop mein nodes chalta hai) | Similar |
| Event → Listener chain | Edge → Node flow | Similar |
| Stateful Job (with `$this->data`) | AgentState (TypedDict) | Similar |
| Job batching + chain | StateGraph with conditional edges | LangGraph is more flexible |
| Pipeline pattern (Laravel) | Sequential chain | Same concept |
| try/catch block | Node-level error handling | LangGraph ka built-in retry |
| Database transaction | Graph checkpoint/save | Similar — state persistence |
| Event bus with routing | Conditional edges | LangGraph = LLM decides routing |
| Supervisor process | Multi-agent supervisor | Same pattern! |
| Middleware | LangGraph's before/after node hooks | Similar |

**Core Difference:** Laravel mein aap manually decide karte ho ki age konsa job chale. LangGraph mein LLM **khud decide karta hai** based on state.

---

## 📅 Week Overview

| Day | Topic | Target |
|-----|-------|--------|
| 1 | StateGraph Fundamentals | Graph build karna, nodes + edges samajhna |
| 2 | Conditional Routing & Decisions | LLM ko decision-maker banana |
| 3 | ReAct Agent Pattern Deep Dive | Reason + Act loop ka internals |
| 4 | Custom Tools & Tool Calling | LLM ko tools dena sikhna |
| 5 | Stateful Agents & Persistence | Memory with SQLite + checkpointing |
| 6 | Multi-Agent Systems | Multiple agents collaborate |
| 7 | Streaming, Tracing & Debugging | Real-time output + debugging |
| 8 | Final Project: Research Agent | End-to-end production agent |

---

## Prerequisites Checklist

- [ ] Python 3.10+ installed
- [ ] OpenAI API key ready
- [ ] Week 1-2 concepts clear (chains, prompts, parsers)
- [ ] Basic Python typing (TypedDict, Literal)
- [ ] pip install langgraph langchain-openai duckduckgo_search

---

# DAY 1: StateGraph Fundamentals

## 1.1 StateGraph Kya Hai?

**Graph = Nodes + Edges**

Simple chain mein ek linear path hota hai. StateGraph mein aap ek **graph structure** define karte ho jahan:

- **Nodes** = Processing steps (functions)
- **Edges** = Connections between nodes
- **State** = Global data structure jo sab nodes access karein

```mermaid
flowchart LR
    A[Start] --> B[Node 1: Process Input]
    B --> C{Decision?}
    C -->|Yes| D[Node 2: Transform]
    C -->|No| E[Node 3: Fallback]
    D --> F[End]
    E --> F
```

**PHP analogy:** Laravel mein jab tum pipeline pattern use karte ho:
```php
// Laravel Pipeline — similar to chain
$pipeline = app(Pipeline::class)
    ->send($request)
    ->through([ValidateInput::class, TransformData::class, SaveToDB::class])
    ->thenReturn();
```

LangGraph mein yehi graph ke roop mein:
```python
graph = StateGraph(MyState)
graph.add_node("validate", validate_input)
graph.add_node("transform", transform_data)
graph.add_node("save", save_to_db)
graph.add_edge("validate", "transform")
graph.add_edge("transform", "save")
```

**Key difference:** Pipeline mein fixed order hai. Graph mein **conditions** daal sakte ho — "agar yeh condition true hai to is node pe jao, otherwise us node pe."

## 1.2 State Schema (TypedDict)

State ek **shared memory** hai — har node ise padh sakta hai aur modify kar sakta hai.

```python
from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph, END
import operator


class BlogState(TypedDict):
    topic: str                            # Input topic
    outline: List[str]                    # Generated outline
    content: str                          # Blog content
    seo_keywords: List[str]               # SEO keywords
    review_feedback: str                  # Review feedback
    iterations: int                       # Kitni baar revise kiya
    final_output: str                     # Final blog post


# Annotated type for list reduction (merge)
class AgentState(TypedDict):
    messages: Annotated[List, operator.add]  # Auto-append
    step_count: int
```

**TypedDict vs Laravel:**
```php
// Laravel — array based, no type safety
$state = [
    'topic' => 'AI',
    'outline' => [],
    'content' => '',
    'iterations' => 0,
];

// Python — typed, IDE support, validation
class BlogState(TypedDict):
    topic: str
    outline: List[str]
    content: str
    iterations: int
```

**Yeh mistake mat karna:** `TypedDict` keys ka type mismatch — har node ko same structure follow karna hoga. Return type bhi `MyState` hi rakhna, `dict` nahi.

## 1.3 Node Functions

Har node ek **function** hai jo state leta hai aur state return karta hai:

```python
def node_function(state: BlogState) -> BlogState:
    """Process karo state ko aur return karo"""
    state["content"] = state["content"].upper()
    state["iterations"] += 1
    return state
```

**Important rules:**

1. **Pure-ish functions:** Node input state leta hai, output state return karta hai.
2. **Always return state:** Agar kuch nahi badla to bhi return theek hai.
3. **Side effects allowed:** API calls, DB writes, LLM calls — sab allowed.
4. **State mutation is fine:** Directly `state["key"] = value` kar sakte ho.

```python
def generate_outline(state: BlogState) -> BlogState:
    """LLM se outline generate karo"""
    prompt = (
        f"Topic: {state['topic']}\n"
        "Generate 5-point blog outline. Return as comma-separated list."
    )
    response = llm.invoke(prompt)
    state["outline"] = [p.strip() for p in response.content.split(",")]
    return state


def write_content(state: BlogState) -> BlogState:
    """Outline ke based content likho"""
    outline_text = "\n".join(f"- {p}" for p in state["outline"])
    prompt = (
        f"Write detailed blog on: {state['topic']}\n\n"
        f"Outline:\n{outline_text}"
    )
    response = llm.invoke(prompt)
    state["content"] = response.content
    return state


def review_content(state: BlogState) -> BlogState:
    """Content review karo aur feedback do"""
    prompt = (
        f"Review this blog content. Give 2-3 improvement suggestions:\n\n"
        f"{state['content'][:1000]}"
    )
    response = llm.invoke(prompt)
    state["review_feedback"] = response.content
    return state
```

## 1.4 Building the Graph

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

# 1. State define karo
class BlogState(TypedDict):
    topic: str
    outline: List[str]
    content: str
    review_feedback: str
    iterations: int

# 2. Graph object banao
graph = StateGraph(BlogState)

# 3. Nodes add karo
graph.add_node("generate_outline", generate_outline)
graph.add_node("write", write_content)
graph.add_node("review", review_content)

# 4. Entry point set karo
graph.set_entry_point("generate_outline")

# 5. Edges connect karo
graph.add_edge("generate_outline", "write")
graph.add_edge("write", "review")
graph.add_edge("review", END)

# 6. Compile karo
app = graph.compile()
```

**Flow visualization:**

```mermaid
flowchart LR
    subgraph Graph
        direction TB
        A[generate_outline] --> B[write]
        B --> C[review]
        C --> D[END]
    end
```

## 1.5 Running the Graph

```python
# StateGraph invoke karo
initial_state = {
    "topic": "AI in Healthcare",
    "outline": [],
    "content": "",
    "review_feedback": "",
    "iterations": 0,
}

result = app.invoke(initial_state)

print("Generated Content:")
print(result["content"])
print(f"\nFeedback: {result['review_feedback']}")
```

**What happens internally (trace):**

```
Step 1: generate_outline()
    Input state:  {"topic": "AI in Healthcare", "outline": [], ...}
    LLM called with: "Topic: AI in Healthcare\nGenerate 5-point blog outline..."
    LLM response: "1. Introduction, 2. Current Applications, 3. Challenges..."
    Output state: {"outline": ["1. Introduction", "2. Current Applications", ...], ...}

Step 2: write()
    Input state:  {"outline": ["1. Introduction", ...], ...}
    LLM called with: "Write detailed blog on: AI in Healthcare\nOutline:\n- 1. Introduction..."
    Output state: {"content": "Artificial Intelligence is transforming...", ...}

Step 3: review()
    Input state:  {"content": "Artificial Intelligence is...", ...}
    LLM called with: "Review this blog content..."
    Output state: {"review_feedback": "1. Add more statistics...", ...}
```

## 1.6 PHP Developer Comparison

```php
// Laravel mein yeh kaise karte:
class BlogPipeline
{
    public function __construct(
        private LLMService $llm,
        private array $state = []
    ) {}

    public function generateOutline(): void
    {
        $prompt = "Topic: {$this->state['topic']}\nGenerate 5-point outline...";
        $response = $this->llm->invoke($prompt);
        $this->state['outline'] = explode("\n", $response);
    }

    public function run(array $initialState): array
    {
        $this->state = $initialState;
        $this->generateOutline();
        $this->writeContent();
        $this->reviewContent();
        return $this->state;
    }
}

// VS LangGraph:
// graph = StateGraph(BlogState)
// graph.add_node("outline", generate_outline)
// graph.add_edge("outline", "write")
// graph.compile().invoke(initial_state)
```

**Fayda:** LangGraph mein tum alag pipeline class nahi banana — bas nodes define karo, edges define karo, aur graph compile karo. State automatically pass hoti hai.

## Day 1 Practice

- [ ] Ek `StateGraph` banao with 2 nodes: `greet_user` and `ask_question`
- [ ] State mein `username` and `question_count` add karo
- [ ] Har node ke baad state print karo (manual tracing)
- [ ] TypedDict ka use karo (dictionary nahi)

---

# DAY 2: Conditional Routing & Decisions

## 2.1 Conditional Edges Kya Hai?

Ab tak humne fixed edges dekhe — Node A always goes to Node B. Lekin real mein LLM ko **decide** karna chahiye.

**Conditional Edge = Function jo decide kare next node**

```python
from typing import Literal


def route_based_on_state(state: BlogState) -> Literal["write", "regenerate"]:
    """State check karo aur decide karo next node"""
    if not state["outline"]:
        return "regenerate"        # Wapas outline banao
    return "write"                  # Content generation pe jao
```

**PHP analogy:**
```php
// Laravel — switch statement
switch ($state['outline']) {
    case null:
        return 'regenerate';
    default:
        return 'write';
}
```

## 2.2 Adding Conditional Edges

```python
# Conditional edge add karo
graph.add_conditional_edges(
    "generate_outline",          # Source node
    route_based_on_state,        # Decision function
    {
        "write": "write",        # Route → Node mapping
        "regenerate": "generate_outline",
    }
)
```

**Full example with review loop:**

```python
def needs_revision(state: BlogState) -> Literal["write", "review", "publish"]:
    """Decide next step based on state"""
    if state["iterations"] >= 3:
        return "publish"          # Max revisions reached
    
    if "improve" in state["review_feedback"].lower():
        state["iterations"] += 1
        return "write"            # Revise karo
    
    if state["review_feedback"] == "":
        return "review"           # Review pending hai
    
    return "publish"              # Ready to publish


# Complex graph with loops
graph = StateGraph(BlogState)

graph.add_node("generate_outline", generate_outline)
graph.add_node("write", write_content)
graph.add_node("review", review_content)
graph.add_node("publish", publish_post)

graph.set_entry_point("generate_outline")

graph.add_edge("generate_outline", "write")
graph.add_edge("write", "review")

graph.add_conditional_edges(
    "review",
    needs_revision,
    {
        "write": "write",        # Loop back
        "review": "review",      # Re-review (rare)
        "publish": "publish",    # Continue
    }
)

graph.add_edge("publish", END)
```

```mermaid
flowchart TD
    A[generate_outline] --> B[write]
    B --> C[review]
    C --> D{needs_revision?}
    D -->|iterations < 3, needs improve| B
    D -->|no feedback yet| C
    D -->|ready| E[publish]
    E --> F[END]
```

## 2.3 LLM as Router

Kabhi kabhi routing decision bhi LLM se karana better hota hai:

```python
from langchain_core.pydantic_v1 import BaseModel, Field


class RouterOutput(BaseModel):
    """LLM ka structured routing decision"""
    next_step: str = Field(description="One of: 'search', 'calculate', 'answer'")
    reasoning: str = Field(description="Kyun yeh step chuna")


def llm_router(state: AgentState) -> Literal["search", "calculate", "answer"]:
    """LLM se pucho ki age kya karna hai"""
    user_query = state["messages"][-1].content
    
    router_llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    router_llm = router_llm.with_structured_output(RouterOutput)
    
    prompt = (
        f"User query: {user_query}\n\n"
        "Decide next step:\n"
        "- 'search': Web search needed for info\n"
        "- 'calculate': Mathematical computation needed\n"
        "- 'answer': Can answer directly without tools\n"
    )
    
    result: RouterOutput = router_llm.invoke(prompt)
    print(f"🤔 Router: {result.reasoning}")
    return result.next_step


# Graph mein use karo
graph.add_conditional_edges(
    "analyze_query",
    llm_router,
    {
        "search": "web_search",
        "calculate": "calculator",
        "answer": "generate_answer",
    }
)
```

**Yeh mistake mat karna:** Router LLM ko bina structured output ke nahi chorna — kabhi kabhi galat format mein answer dega. `with_structured_output()` use karo.

## 2.4 Handling END Condition

Always ensure there's a path to `END`, otherwise graph infinite loop mein phas jayega:

```python
def should_end(state: BlogState) -> Literal["continue_writing", END]:
    """Safe routing — always has END path"""
    if state["iterations"] > 5:
        return END                 # Safety ceiling
    if state["content"] and len(state["content"]) > 500:
        return END
    return "continue_writing"
```

**Pro tip:** Always have a MAX_ITERATIONS safety check in your routing functions. LLM kabhi kabhi loop mein phas sakta hai.

## Day 2 Practice

- [ ] Conditional edge banao jo user query ke type ke based route kare
- [ ] Review loop implement karo with max 3 iterations
- [ ] LLM-as-router implement karo using `with_structured_output()`
- [ ] Safety check daalo (max iterations guard)

---

# DAY 3: ReAct Agent Pattern Deep Dive

## 3.1 ReAct Kya Hai?

**ReAct = Reason + Act**

Yeh pattern hai jahan LLM **sochta hai** (Reason) → **action leta hai** (Act) → **observation dekhta hai** (Observe) → **phir sochta hai**.

```mermaid
flowchart LR
    subgraph ReAct Loop
        direction TB
        A[User Query] --> B[Thought]
        B --> C{Need Tool?}
        C -->|Yes| D[Action: Call Tool]
        D --> E[Observation: Tool Result]
        E --> B
        C -->|No| F[Final Answer]
        F --> G[Output]
    end
```

**Real example:**
```
User: "Delhi ka temperature kya hai aur 5 din baad kya hoga?"

Thought 1: User Delhi ka current temperature puch raha hai. 
           Mujhe weather API call karni padegi.
Action 1: get_weather("Delhi")
Observation 1: Delhi ka temperature 35°C hai, sunny

Thought 2: Ab 5 din ka forecast bhi chahiye.
           Weather API se forecast bhi le sakta hoon.
Action 2: get_forecast("Delhi", days=5)
Observation 2: 5-day forecast: 34°C, 36°C, 33°C, 35°C, 32°C

Thought 3: Dono answers mil gaye. Ab user ko response deta hoon.
Final: Delhi mein aaj 35°C hai. Agle 5 din 32-36°C ke beech rahega.
```

## 3.2 How create_react_agent Works (Internals)

`create_react_agent` ek prebuilt LangGraph agent hai. Yeh internally kya karta hai:

```python
# Yeh hai create_react_agent ka simplified internals:
def create_react_agent(model, tools, prompt=None):
    
    # Step 1: Tools ko LLM-compatible format mein convert karo
    tool_executor = ToolExecutor(tools)
    bound_model = model.bind_tools(tools)
    
    # Step 2: State schema define karo
    class ReActState(TypedDict):
        messages: Annotated[list, operator.add]
        next_step: str
    
    # Step 3: Nodes define karo
    def call_model(state: ReActState) -> ReActState:
        """LLM se response lo"""
        messages = state["messages"]
        if prompt:
            messages = [SystemMessage(content=prompt)] + messages
        response = bound_model.invoke(messages)
        state["messages"].append(AIMessage(content=response.content))
        return state
    
    def should_continue(state: ReActState) -> Literal["action", "end"]:
        """Check if tool call needed"""
        last_msg = state["messages"][-1]
        if last_msg.additional_kwargs.get("tool_calls"):
            return "action"
        return "end"
    
    def call_tool(state: ReActState) -> ReActState:
        """Execute tool calls"""
        last_msg = state["messages"][-1]
        for tool_call in last_msg.additional_kwargs["tool_calls"]:
            result = tool_executor.invoke(
                ToolInvocation(
                    tool=tool_call["function"]["name"],
                    tool_input=json.loads(tool_call["function"]["arguments"]),
                )
            )
            state["messages"].append(AIMessage(content=str(result)))
        return state
    
    # Step 4: Graph build karo
    graph = StateGraph(ReActState)
    graph.add_node("agent", call_model)
    graph.add_node("action", call_tool)
    graph.set_entry_point("agent")
    graph.add_conditional_edges("agent", should_continue)
    graph.add_edge("action", "agent")
    
    return graph.compile()
```

**Key insight:** Prebuilt agent bhi wahi karta hai jo tum apne custom graph mein karoge. Bas convenience function hai.

## 3.3 Tool Binding — How LLM Calls Tools

LLM ko tool call karane ke liye **tool binding** hoti hai. Yeh LLM ke API ko batata hai ki "yeh tools available hain":

```python
from langchain_core.tools import tool

@tool
def get_weather(city: str) -> str:
    """Get current weather for a city."""
    # ... implementation ...

@tool
def calculator(expression: str) -> str:
    """Evaluate mathematical expressions."""
    # ... implementation ...

# Model ko tools se bind karo
model_with_tools = model.bind_tools([get_weather, calculator])

# Internally kya hota hai:
# Yeh OpenAI API ko yeh JSON bhejta hai:
"""
{
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get current weather for a city.",
        "parameters": {
          "type": "object",
          "properties": {
            "city": {
              "type": "string",
              "description": "City name"
            }
          },
          "required": ["city"]
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "calculator",
        "description": "Evaluate mathematical expressions.",
        "parameters": {
          "type": "object",
          "properties": {
            "expression": {
              "type": "string",
              "description": "Math expression"
            }
          },
          "required": ["expression"]
        }
      }
    }
  }
]
"""
```

**LLM ka response jab tool call karna chahe:**
```json
{
  "content": null,
  "tool_calls": [
    {
      "id": "call_abc123",
      "type": "function",
      "function": {
        "name": "get_weather",
        "arguments": "{\"city\": \"Delhi\"}"
      }
    }
  ]
}
```

**Yeh mistake mat karna:** `@tool` decorator ke saath docstring mandatory hai — LLM usi ko padh ke decide karta hai ki kaunsa tool use karna hai. Bina description ke tool confuse ho jayega.

## 3.4 Message Flow in ReAct

Har step ke baad messages list mein kya add hota hai:

```python
# Step 0: Initial
messages = [
    HumanMessage(content="Delhi ka temperature kya hai?")
]

# Step 1: Agent thinks
messages = [
    HumanMessage(content="Delhi ka temperature kya hai?"),
    AIMessage(content=None, tool_calls=[...]),  # Tool call request
]

# Step 2: Tool executes
messages = [
    HumanMessage(content="Delhi ka temperature kya hai?"),
    AIMessage(content=None, tool_calls=[...]),
    ToolMessage(content="35°C, Sunny", tool_call_id="call_abc123"),
]

# Step 3: Agent final answer
messages = [
    HumanMessage(content="Delhi ka temperature kya hai?"),
    AIMessage(content=None, tool_calls=[...]),
    ToolMessage(content="35°C, Sunny", tool_call_id="call_abc123"),
    AIMessage(content="Delhi mein aaj 35°C temperature hai aur mausam sunny hai."),
]
```

## 3.5 Manual ReAct Implementation

Samajhne ke liye, bina prebuilt ke khud ReAct implement karo:

```python
def manual_react_agent(query: str, tools: list, model, max_iterations: int = 5):
    """ReAct loop manually implement kiya"""
    
    system_prompt = (
        "You are a helpful assistant with access to tools.\n"
        "Think step by step. Use tools when needed.\n"
        "When you have enough information, provide the final answer in Hinglish."
    )
    
    messages = [SystemMessage(content=system_prompt), HumanMessage(content=query)]
    model_with_tools = model.bind_tools(tools)
    
    for i in range(max_iterations):
        print(f"\n--- Iteration {i+1} ---")
        
        # THINK: LLM se response lo
        response = model_with_tools.invoke(messages)
        messages.append(response)
        
        # CHECK: Tool call kiya?
        if not response.additional_kwargs.get("tool_calls"):
            print(f"✅ Final Answer: {response.content[:100]}...")
            return response.content
        
        # ACT: Tool execute karo
        for tc in response.additional_kwargs["tool_calls"]:
            tool_name = tc["function"]["name"]
            tool_args = json.loads(tc["function"]["arguments"])
            
            print(f"🔧 Calling: {tool_name}({tool_args})")
            
            # Tool dhundho aur execute karo
            for tool in tools:
                if tool.name == tool_name:
                    result = tool.invoke(tool_args)
                    messages.append(
                        ToolMessage(content=str(result), tool_call_id=tc["id"])
                    )
                    print(f"📊 Result: {str(result)[:100]}...")
                    break
            else:
                # Tool nahi mila
                messages.append(
                    ToolMessage(content=f"Tool {tool_name} not found", tool_call_id=tc["id"])
                )
    
    return "Max iterations reached. Unable to complete."


# Use karo
result = manual_react_agent(
    "Mumbai aur Delhi ka temperature compare karo",
    tools=[get_weather],
    model=ChatOpenAI(model="gpt-4o-mini", temperature=0),
)
```

## Day 3 Practice

- [ ] `create_react_agent` use karo with 2 tools
- [ ] Manual ReAct implementation likho without prebuilt helper
- [ ] Message flow trace karo — har step print karo
- [ ] Max iteration safety check implement karo
- [ ] Complex query do jahan multiple tools chahiye

---

# DAY 4: Custom Tools & Tool Calling

## 4.1 Tool Creation Deep Dive

Tools ka teen parts hote hain:

1. **Name** — Unique identifier
2. **Description** — LLM ko batata hai kab use karna hai
3. **Args Schema** — Input parameters ka structure

```python
from langchain_core.tools import tool
from pydantic import BaseModel, Field


# Method 1: @tool decorator (simple)
@tool
def search_flights(from_city: str, to_city: str, date: str) -> str:
    """Search for available flights between cities on a specific date.
    
    Args:
        from_city: Departure city name
        to_city: Destination city name
        date: Date in YYYY-MM-DD format
    """
    flight_data = {
        ("delhi", "mumbai", "2026-06-15"): "₹5,200 - IndiGo 6E-123, 2h 05m",
        ("mumbai", "delhi", "2026-06-15"): "₹5,800 - SpiceJet SG-456, 2h 10m",
        ("delhi", "bangalore", "2026-06-15"): "₹4,500 - Air India AI-789, 2h 30m",
    }
    key = (from_city.lower(), to_city.lower(), date)
    return flight_data.get(key, f"No flights found from {from_city} to {to_city} on {date}")


# Method 2: Pydantic schema (complex)
class FlightSearchInput(BaseModel):
    """Input schema for flight search tool"""
    from_city: str = Field(description="Departure city name")
    to_city: str = Field(description="Destination city name")
    date: str = Field(description="Travel date in YYYY-MM-DD format")
    passengers: int = Field(default=1, description="Number of passengers")


@tool(args_schema=FlightSearchInput)
def search_flights_advanced(
    from_city: str, to_city: str, date: str, passengers: int = 1
) -> str:
    """Search for available flights with passenger count"""
    # Implementation
    return f"Found flights for {passengers} passenger(s) from {from_city} to {to_city}"


# Method 3: LangChain StructuredTool
from langchain_core.tools import StructuredTool

def db_query_func(query: str, limit: int = 10) -> str:
    """Run SQL query on database"""
    # Implementation
    return f"Executed: {query} LIMIT {limit}"


db_tool = StructuredTool.from_function(
    func=db_query_func,
    name="database_query",
    description="Query the database using SQL. Returns results as text.",
)
```

## 4.2 Tool Internals — Schema Generation

Jab tum `@tool` decorator use karte ho, LangChain automatically **JSON schema** generate karta hai:

```python
@tool
def send_email(to: str, subject: str, body: str, cc: str = None) -> str:
    """Send an email to a recipient.
    
    Args:
        to: Email address of recipient
        subject: Email subject line
        body: Email body content
        cc: CC recipient (optional)
    """
    print(f"Sending email to {to}...")
    return f"Email sent to {to}"


# Check generated schema
print(send_email.name)        # "send_email"
print(send_email.description) # "Send an email to a recipient."
print(send_email.args)        
# {
#   "to": {"title": "To", "type": "string"},
#   "subject": {"title": "Subject", "type": "string"},
#   "body": {"title": "Body", "type": "string"},
#   "cc": {"title": "Cc", "type": "string", "default": None}
# }
```

**Yeh mistake mat karna:** Function arguments mein type hints daalna bhoolna. `to: str` nahi balki `to` likha to schema mein `type` missing ho jayega aur LLM confuse ho jayega.

## 4.3 Error Handling in Tools

Tools kabhi kabhi fail karte hain. Handle karo gracefully:

```python
@tool
def fetch_stock_price(symbol: str) -> str:
    """Get current stock price for a given symbol (e.g., AAPL, GOOGL, TCS.NS)"""
    import requests
    
    try:
        url = f"https://api.example.com/stock/{symbol}"
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        return f"{symbol}: ₹{data['price']} ({data['change_percent']}%)"
    
    except requests.Timeout:
        return f"⚠️ Stock API timeout for {symbol}. Please try again."
    
    except requests.HTTPError as e:
        if response.status_code == 404:
            return f"❌ Symbol '{symbol}' not found. Check the symbol and try again."
        return f"❌ API error: {e}"
    
    except Exception as e:
        return f"❌ Unexpected error fetching {symbol}: {str(e)}"


@tool
def divide_numbers(a: float, b: float) -> str:
    """Divide two numbers: a / b"""
    try:
        result = a / b
        return f"{a} / {b} = {result}"
    except ZeroDivisionError:
        return "❌ Error: Division by zero is not possible."
    except Exception as e:
        return f"❌ Error: {str(e)}"
```

**Why error handling matters:** LLM tool result ko padhta hai. Agar error aaya to LLM user ko bata sakta hai "Yeh tool fail ho gaya, kuch aur try karte hain." Agar raw exception aaya to LLM confuse ho jayega.

## 4.4 Tool Chaining — Multiple Tools in Sequence

Agent ek query mein multiple tools call kar sakta hai:

```python
@tool
def get_capital(country: str) -> str:
    """Get the capital city of a country."""
    capitals = {
        "india": "Delhi",
        "france": "Paris",
        "japan": "Tokyo",
        "australia": "Canberra",
    }
    return capitals.get(country.lower(), f"Capital not found for {country}")


@tool
def get_population(city: str) -> str:
    """Get the population of a city."""
    populations = {
        "delhi": "32.9 million",
        "paris": "11.2 million",
        "tokyo": "37.4 million",
        "canberra": "472,000",
    }
    return populations.get(city.lower(), f"Population data not available for {city}")


@tool
def get_weather(city: str) -> str:
    """Get current weather for a city."""
    weather = {
        "delhi": "35°C, Sunny",
        "paris": "18°C, Cloudy",
        "tokyo": "22°C, Rainy",
        "canberra": "12°C, Clear",
    }
    return weather.get(city.lower(), f"Weather data not available for {city}")


tools = [get_capital, get_population, get_weather]
agent = create_react_agent(model=model, tools=tools)

# Agent will:
# 1. Call get_capital("France") → "Paris"
# 2. Call get_population("Paris") → "11.2 million"
# 3. Call get_weather("Paris") → "18°C, Cloudy"
# 4. Combine results → "France ki capital Paris hai. Population 11.2M, weather 18°C cloudy."
result = agent.invoke({
    "messages": [("human", "France ke capital ki population aur weather kya hai?")]
})
```

**Tool chaining ka trace:**

```
Query: "France ke capital ki population aur weather kya hai?"

🧠 Thought: User France ke capital ke baare mein puch raha hai.
            Pehle capital dhundhna hoga, phir population aur weather.

🔧 Action 1: get_capital(country="France")
📊 Result: Paris

🧠 Thought: Capital Paris hai. Ab population aur weather lete hain.
            Dono independent hain — ek saath call kar sakta hoon.

🔧 Action 2: get_population(city="Paris")
📊 Result: 11.2 million

🔧 Action 3: get_weather(city="Paris")
📊 Result: 18°C, Cloudy

🧠 Thought: Sab data mil gaya. Ab user ko answer deta hoon.

✅ Answer: France ki capital Paris hai jahan population 11.2 million hai
           aur weather 18°C cloudy hai.
```

## 4.5 PHP Developer Comparison: Tools

```php
// PHP mein tool — array-based, manual
$tools = [
    'get_weather' => [
        'description' => 'Get weather for a city',
        'parameters' => ['city' => 'string'],
        'handler' => function($args) {
            // Implementation
            return "35°C";
        },
    ],
];

// VS Python LangChain:
// @tool decorator — auto schema, auto binding
@tool
def get_weather(city: str) -> str:
    """Get weather for a city."""
    return "35°C"
```

**LangChain advantage:** PHP mein tumhe khud schema define karna padega, khud LLM ko tool format mein convert karna padega. LangChain ka `@tool` yeh sab automatically karta hai.

## Day 4 Practice

- [ ] 3 custom tools banao with error handling
- [ ] Tool schema ko inspect karo (`.name`, `.description`, `.args`)
- [ ] Tool chaining ka example banao — ek tool ka output doosre tool mein jaye
- [ ] Error case handle karo — tool ko intentionally fail karake dekho
- [ ] `StructuredTool.from_function()` use karo

---

# DAY 5: Stateful Agents & Persistence

## 5.1 Why Persistence Matters

Without persistence:
```python
# Har invoke fresh session hota hai
result1 = agent.invoke({"messages": [("human", "Mera naam Raushan hai")]})
# Agent remembers this...

result2 = agent.invoke({"messages": [("human", "Mera naam kya hai?")]})
# 😱 Agent bhool gaya! "Sorry, aapne apna naam nahi bataya."
```

**Problem:** LLM inherently **stateless** hai. Har request independent hoti hai.

**Solution:** LangGraph ka **checkpointer** system — jo har step ke baad state save karta hai.

## 5.2 Checkpointer System

```python
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3

# SQLite database mein state save hoga
conn = sqlite3.connect("agent_memory.db", check_same_thread=False)
memory = SqliteSaver(conn)

agent = create_react_agent(
    model=model,
    tools=tools,
    checkpointer=memory,
)

# Thread ID — conversation groups
config = {"configurable": {"thread_id": "user_raushan_001"}}

# Pehli baat
response1 = agent.invoke(
    {"messages": [("human", "Hi, main Raushan hoon. Main AI engineer hoon.")]},
    config,
)

# Doosri baat — agent ko yaad hai
response2 = agent.invoke(
    {"messages": [("human", "Mera naam kya hai aur main kya karta hoon?")]},
    config,
)
# ✅ "Aap Raushan hain aur AI engineer hain."

# Naya thread — agent ko kuch yaad nahi
other_config = {"configurable": {"thread_id": "user_new_001"}}
response3 = agent.invoke(
    {"messages": [("human", "Mera naam kya hai?")]},
    other_config,
)
# ❌ "Mujhe nahi pata. Aapne bataya nahi."
```

**How checkpointer works internally:**

```mermaid
flowchart LR
    subgraph Session["Thread: user_raushan_001"]
        A[Step 1] --> B[Checkpoint 1]
        B --> C[Step 2]
        C --> D[Checkpoint 2]
        D --> E[Step 3]
        E --> F[Checkpoint 3]
    end
    
    subgraph DB["SQLite Database"]
        G[(agent_memory.db)]
    end
    
    B -.->|Save| G
    D -.->|Save| G
    F -.->|Save| G
```

## 5.3 Multiple Persistence Backends

LangGraph multiple storage options support karta hai:

```python
# 1. IN-MEMORY (default) — sab bhool jayega restart ke baad
from langgraph.checkpoint.memory import MemorySaver
memory = MemorySaver()

# 2. SQLite — file-based, persistent
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3
conn = sqlite3.connect("conversations.db", check_same_thread=False)
memory = SqliteSaver(conn)

# 3. Postgres — production ke liye
# pip install langgraph-checkpoint-postgres
# from langgraph.checkpoint.postgres import PostgresSaver
# connection_string = "postgresql://user:pass@localhost:5432/langgraph"
# memory = PostgresSaver(connection_string)

# 4. Async Postgres (recommended for production)
# memory = AsyncPostgresSaver(connection_string)
# await memory.setup()
```

**Comparison table:**

| Backend | Persistent | Fast | Production Ready | Setup |
|---------|-----------|------|-----------------|-------|
| MemorySaver | ❌ | ✅✅✅ | ❌ | None |
| SqliteSaver | ✅ | ✅✅ | ✅ (low traffic) | `pip install` |
| PostgresSaver | ✅ | ✅✅✅ | ✅✅✅ | Docker + pip |

## 5.4 State Management with Multiple Threads

```python
# Multiple users/alag-alag conversations
users = [
    {"thread_id": "user_raushan_001", "msg": "Mujhe Python sikhna hai"},
    {"thread_id": "user_priya_001",   "msg": "Mujhe JavaScript chahiye"},
    {"thread_id": "user_ravi_001",    "msg": "Data science course do"},
]

for user in users:
    config = {"configurable": {"thread_id": user["thread_id"]}}
    agent.invoke(
        {"messages": [("human", user["msg"])]},
        config,
    )

# Saare users alag-alag yaad rakhenge
for user in users:
    config = {"configurable": {"thread_id": user["thread_id"]}}
    result = agent.invoke(
        {"messages": [("human", "Maine kya pucha tha?")]},
        config,
    )
    print(f"{user['thread_id']}: {result['messages'][-1].content[:50]}...")
```

## 5.5 Custom Checkpointer with MongoDB Example

```python
# Simple custom checkpointer using MongoDB (or any DB)
import json
from pymongo import MongoClient

class MongoCheckpointer:
    """Extremely simplified checkpointer — MongoDB ke upar"""
    
    def __init__(self, uri: str = "mongodb://localhost:27017"):
        self.client = MongoClient(uri)
        self.db = self.client["langgraph_memory"]
        self.collection = self.db["checkpoints"]
    
    def get(self, thread_id: str) -> dict | None:
        result = self.collection.find_one({"_id": thread_id})
        if result:
            return json.loads(result["state"])
        return None
    
    def put(self, thread_id: str, state: dict) -> None:
        self.collection.update_one(
            {"_id": thread_id},
            {"$set": {"state": json.dumps(state, default=str)}},
            upsert=True,
        )
    
    def delete(self, thread_id: str) -> None:
        self.collection.delete_one({"_id": thread_id})


# Use in LangGraph
# (Real implementation LangGraph ke checkpointer interface follow karega)
```

## 5.6 State Recovery — Resume from Checkpoint

Ek baar save kiya to wapas wahin se resume kar sakte ho:

```python
# Pehla interaction
config = {"configurable": {"thread_id": "research_001"}}
agent.invoke(
    {"messages": [("human", "Research karo: AI in 2026")]},
    config,
)
# Agent ne 3 searches ki, 2 tools use kiye...

# Agle din — wapas aao
result = agent.invoke(
    {"messages": [("human", "Previous research ka summary do")]},
    config,
)
# ✅ Agent ko yaad hai! Wapas state load kiya.
```

**Real-world use case:** Koi user agent ke saath baat kar raha hai, beech mein page refresh ho jata hai — thread_id se wapas resume ho jayega. Koi data nahi khoyega.

## Day 5 Practice

- [ ] SqliteSaver implement karo with 2 different thread IDs
- [ ] Verify that different threads have different conversation memory
- [ ] Thread ke andar multiple turns lo aur verify memory
- [ ] `get_state()` method use karo — current state inspect karo
- [ ] In-memory vs SQLite comparison karo

---

# DAY 6: Multi-Agent Systems

## 6.1 Why Multiple Agents?

Ek agent sab kuch nahi kar sakta. Complex tasks mein specialization chahiye:

```mermaid
flowchart LR
    subgraph Team
        A[Supervisor Agent] --> B[Researcher Agent]
        A --> C[Writer Agent]
        A --> D[Reviewer Agent]
        B --> A
        C --> A
        D --> A
    end
    E[User] --> A
    A --> F[Final Output]
```

**Real-world analogy:** Laravel project mein ek developer sab kuch nahi karta. Designer, backend dev, frontend dev, QA — sab alag specialize hote hain. Same logic AI mein.

**Benefits of multi-agent:**
- **Separation of concerns:** Har agent ka ek specific role
- **Better quality:** Specialized agent domain mein behtar perform karta hai
- **Parallel execution:** Agents ek saath kaam kar sakte hain
- **Scalability:** Naye agents add karna easy hai

## 6.2 Supervisor Agent Pattern

```python
from typing import TypedDict, Literal, List
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langgraph.prebuilt import create_react_agent


# ── Specialist Agents ──────────────────────

@tool
def research_topic(topic: str) -> str:
    """Research a topic using web search. Returns findings."""
    with DDGS() as ddgs:
        results = list(ddgs.text(topic, max_results=5))
    return "\n".join(f"{r['title']}: {r['body'][:200]}" for r in results)


@tool
def write_article(context: str) -> str:
    """Write an article based on research context."""
    return "Article generated based on research..."


researcher = create_react_agent(
    model=ChatOpenAI(model="gpt-4o-mini", temperature=0.3),
    tools=[research_topic],
    prompt="You are a research specialist. Find relevant information. Be thorough.",
)

writer = create_react_agent(
    model=ChatOpenAI(model="gpt-4o-mini", temperature=0.7),
    tools=[write_article],
    prompt="You are a content writer. Write engaging, well-structured articles.",
)


# ── Supervisor State ───────────────────────

class SupervisorState(TypedDict):
    task: str
    research_results: str
    draft: str
    feedback: str
    current_step: str
    iterations: int


# ── Supervisor Nodes ───────────────────────

def delegate_to_researcher(state: SupervisorState) -> SupervisorState:
    """Send task to researcher agent"""
    result = researcher.invoke({
        "messages": [("human", f"Research this topic in detail: {state['task']}")]
    })
    state["research_results"] = result["messages"][-1].content
    return state


def delegate_to_writer(state: SupervisorState) -> SupervisorState:
    """Send research to writer agent"""
    result = writer.invoke({
        "messages": [
            ("human",
                f"Write an article based on this research:\n{state['research_results']}")
        ]
    })
    state["draft"] = result["messages"][-1].content
    return state


def review_draft(state: SupervisorState) -> SupervisorState:
    """Review the draft"""
    reviewer_llm = ChatOpenAI(model="gpt-4o", temperature=0)
    
    review = reviewer_llm.invoke(
        f"Review this article draft. Give specific feedback:\n\n{state['draft'][:2000]}"
    )
    state["feedback"] = review.content
    return state


def should_revise(state: SupervisorState) -> Literal["writer", "complete"]:
    """Decide: revise or complete?"""
    state["iterations"] += 1
    if state["iterations"] >= 3:
        return "complete"
    if "revision" in state["feedback"].lower() or "improve" in state["feedback"].lower():
        return "writer"
    return "complete"


# ── Build Supervisor Graph ─────────────────

supervisor = StateGraph(SupervisorState)

supervisor.add_node("researcher", delegate_to_researcher)
supervisor.add_node("writer", delegate_to_writer)
supervisor.add_node("reviewer", review_draft)

supervisor.set_entry_point("researcher")
supervisor.add_edge("researcher", "writer")
supervisor.add_edge("writer", "reviewer")
supervisor.add_conditional_edges("reviewer", should_revise)
supervisor.add_edge("complete", END)

supervisor_app = supervisor.compile()


# ── Run ────────────────────────────────────

result = supervisor_app.invoke({
    "task": "Write an article about LangChain agents",
    "research_results": "",
    "draft": "",
    "feedback": "",
    "current_step": "start",
    "iterations": 0,
})

print(f"📝 Final Article:\n{result['draft']}")
```

## 6.3 Agent Communication Patterns

```mermaid
flowchart LR
    subgraph Sequential
        A1[Agent A] --> B1[Agent B] --> C1[Agent C]
    end
    
    subgraph Parallel
        A2[Agent A] --> B2[Agent B]
        A2 --> C2[Agent C]
        A2 --> D2[Agent D]
    end
    
    subgraph Network
        A3[Agent A] <--> B3[Agent B]
        B3 <--> C3[Agent C]
        A3 <--> C3[Agent D]
    end
```

**Pattern 1: Sequential (Pipe)**
```python
# Agent A → Agent B → Agent C
# Use: Data pipeline, ETL workflows
```

**Pattern 2: Parallel (Fan-out)**
```python
# Agent A sends to multiple agents simultaneously
# Use: Multi-source research, parallel verification
```

**Pattern 3: Network (Mesh)**
```python
# All agents can talk to each other
# Use: Debate, collaborative problem-solving
# Most complex — use sparingly
```

## 6.4 Parallel Agent Execution

LangGraph mein parallel execution ke liye multiple entry points use kar sakte ho:

```python
def run_research_parallel(state: SupervisorState) -> SupervisorState:
    """Multiple researchers parallel mein kaam karein"""
    
    researchers = [
        create_react_agent(model=model, tools=[research_topic],
            prompt=f"You research from a {angle} perspective."),
        for angle in ["technical", "business", "ethical"]
    ]
    
    results = []
    for researcher in researchers:
        result = researcher.invoke({
            "messages": [("human", f"Research: {state['task']}")]
        })
        results.append(result["messages"][-1].content)
    
    state["research_results"] = "\n\n=====\n\n".join(results)
    return state
```

## 6.5 PHP Developer Comparison: Multi-Agent

```php
// Laravel mein multi-worker pattern
class ArticleWorkflow {
    public function handle($task) {
        $research = app(ResearchAgent::class)->handle($task);
        $draft = app(WriterAgent::class)->handle($research);
        $feedback = app(ReviewerAgent::class)->handle($draft);
        return $this->finalize($draft, $feedback);
    }
}

// VS LangGraph Supervisor:
// SupervisorState + StateGraph → LLM decides flow
```

**Key difference:** Laravel mein flow fixed hota hai code mein. LangGraph mein LLM decide karta hai ki age kya karna hai based on current state.

## Day 6 Practice

- [ ] 2 specialist agents banao + 1 supervisor
- [ ] Sequential multi-agent pipeline banao
- [ ] Parallel research execution implement karo
- [ ] Agent communication pattern ka code likho

---

# DAY 7: Streaming, Tracing & Debugging

## 7.1 Streaming Modes

LangGraph 3 streaming modes provide karta hai:

```python
# Mode 1: "values" — har step ke baad full state
print("=== VALUES MODE ===")
for event in app.stream(
    {"messages": [("human", "Delhi ke baare mein batao")]},
    stream_mode="values",
):
    message = event["messages"][-1]
    if hasattr(message, "content") and message.content:
        print(f"📝 {message.content[:100]}")
    print("---")


# Mode 2: "updates" — sirf jo change hua
print("\n=== UPDATES MODE ===")
for event in app.stream(
    {"messages": [("human", "Tell me about AI")]},
    stream_mode="updates",
):
    for node_name, update in event.items():
        print(f"[{node_name}] changed")
        if "messages" in update:
            msg = update["messages"][-1]
            if hasattr(msg, "content") and msg.content:
                print(f"  Content: {msg.content[:150]}")


# Mode 3: "debug" — detailed internals (LangGraph v0.2+)
# print("\n=== DEBUG MODE ===")
# for event in app.stream({...}, stream_mode="debug"):
#     print(event)
```

**Streaming output visualization:**

```
=== VALUES MODE ===
📝 Delhi ke baare mein batao
---
📝 {'tool_calls': [{'name': 'web_search', 'args': {'query': 'Delhi India city facts'}}]}
---
📝 Title: Delhi - Wikipedia
Body: Delhi, officially the National Capital Territory...
---
📝 Delhi India ki capital hai. Yamuna river ke kinare...

=== UPDATES MODE ===
[agent] changed
[action] changed
  Content: Title: Delhi - Wikipedia...
[agent] changed
  Content: Delhi India ki capital hai...
```

## 7.2 Token-Level Streaming

Real-time token streaming for better UX:

```python
# Token-level streaming with callback
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler


model = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[StreamingStdOutCallbackHandler()],
)

# Ab jab bhi LLM generate karega, token by token print hoga
# Lekin yeh sirf direct LLM calls ke liye kaam karega, agent ke through nahi


# Agent ke through token streaming:
for event in agent.stream(
    {"messages": [("human", "Delhi ke baare mein 5 lines mein batao")]},
    stream_mode="values",
):
    msg = event["messages"][-1]
    if isinstance(msg, AIMessage) and msg.content:
        print(msg.content, end="", flush=True)
    elif isinstance(msg, ToolMessage):
        # Tool result aaya — print it
        print(f"\n[📊 Tool Result: {msg.content[:50]}...]\n")
```

## 7.3 LangSmith Tracing

Production mein debugging ke liye **LangSmith** ka use karo:

```python
import os
os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = "lsv2_..."
os.environ["LANGCHAIN_PROJECT"] = "phase-03-agents"

# Ab har run trace ho jayega LangSmith dashboard mein
agent.invoke({"messages": [("human", "Research AI agents")]})

# LangSmith mein check karo:
# - Har step ka latency
# - LLM calls aur unka cost
# - Token usage
# - Tool call timing
# - Error details
```

**LangSmith trace ka example:**

```
Trace ID: abc123-xyz
├── Root: Agent Run
│   ├── Step 1: call_model (385ms, 142 tokens)
│   │   └── LLM Call: gpt-4o-mini ($0.0012)
│   ├── Step 2: should_continue (5ms)
│   ├── Step 3: execute_tools (1200ms)
│   │   └── Tool: web_search (1150ms)
│   ├── Step 4: call_model (520ms, 890 tokens)
│   │   └── LLM Call: gpt-4o-mini ($0.0034)
│   └── Step 5: should_continue (3ms)
Total: 2163ms, $0.0046
```

## 7.4 Manual Debugging Techniques

Jab LangSmith available nahi:

```python
def debug_node(node_name: str):
    """Decorator-style debug wrapper for nodes"""
    def decorator(func):
        def wrapper(state):
            print(f"\n{'='*50}")
            print(f"🔍 Node: {node_name}")
            print(f"{'='*50}")
            print(f"Input state keys: {list(state.keys())}")
            
            result = func(state)
            
            print(f"\nOutput changes:")
            for key in result:
                if key in state and result[key] != state[key]:
                    old_val = str(state[key])[:100]
                    new_val = str(result[key])[:100]
                    print(f"  {key}: {old_val} → {new_val}")
            
            return result
        return wrapper
    return decorator


# Use karo:
@debug_node("researcher")
def research_node(state):
    # ... implementation
    return state
```

## 7.5 Common Debugging Issues & Solutions

| Issue | Symptom | Solution |
|-------|---------|----------|
| Infinite loop | Agent same tool baar baar call kare | Max iterations guard lagao |
| Wrong tool choice | LLM wrong tool use kare | Tool descriptions improve karo |
| Token limit | Response truncate ho | `max_tokens` parameter badhao |
| State corruption | Keys missing in state | TypedDict properly define karo |
| Tool timeout | External API slow | Timeout + retry implement karo |
| Memory leak | Long conversations | State summarization implement karo |

## Day 7 Practice

- [ ] "values" aur "updates" streaming modes dono try karo
- [ ] Token-level streaming implement karo
- [ ] LangSmith setup karo aur trace analyze karo
- [ ] Debug wrapper function likho
- [ ] Intentional error introduce karo aur trace dekho

---

# DAY 8: Final Project — Research Agent

## 8.1 Project Overview

Ek production-ready research agent jo:

- Kisi bhi topic par deep research kare
- Multiple sources se information collect kare
- Structured summary generate kare
- Stream kare real-time progress
- State persist kare (checkpointing)
- Handle kare errors gracefully

## 8.2 Full Implementation

```python
#!/usr/bin/env python3
"""
research_agent.py — Production-ready Research Agent
LangGraph + LangChain + DuckDuckGo

Usage:
    python research_agent.py
    python research_agent.py --topic "AI in Healthcare" --depth full
"""

import os
import sys
import json
import argparse
from typing import TypedDict, Literal, List, Annotated
from datetime import datetime
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.sqlite import SqliteSaver
from duckduckgo_search import DDGS

load_dotenv()


# ── Configuration ──────────────────────────

class Config:
    MODEL = os.getenv("LLM_MODEL", "gpt-4o-mini")
    TEMPERATURE = 0.3
    MAX_SEARCHES = 5
    MAX_RETRIES = 3
    DB_PATH = "research_memory.db"


model = ChatOpenAI(model=Config.MODEL, temperature=Config.TEMPERATURE)


# ── Tools ──────────────────────────────────

@tool
def web_search(query: str) -> str:
    """Search the web for current information. Use for research queries."""
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=5))
        
        if not results:
            return "❌ No results found"
        
        formatted = []
        for i, r in enumerate(results, 1):
            title = r.get("title", "No title")
            body = r.get("body", "No content")
            href = r.get("href", "")
            formatted.append(f"{i}. {title}\n   URL: {href}\n   {body[:300]}")
        
        return "\n\n".join(formatted)
    
    except Exception as e:
        return f"❌ Search failed: {str(e)}"


@tool
def get_current_date() -> str:
    """Get today's date. Useful for time-sensitive research."""
    return datetime.now().strftime("%Y-%m-%d %A")


tools = [web_search, get_current_date]


# ── State ──────────────────────────────────

class ResearchState(TypedDict):
    """State schema for research agent"""
    topic: str                                    # Research topic
    sub_questions: List[str]                      # Sub-questions to explore
    search_results: List[str]                     # Raw search results
    synthesized: str                              # Synthesized content
    final_report: str                             # Final structured report
    current_depth: int                            # Current search depth
    errors: List[str]                             # Error log
    status: str                                   # Current status
    start_time: str                               # When research started


# ── Nodes ──────────────────────────────────

def initialize(state: ResearchState) -> ResearchState:
    """Initialize research — extract topic, generate sub-questions"""
    print(f"\n🔬 Starting research on: {state['topic']}")
    state["start_time"] = datetime.now().isoformat()
    state["status"] = "initializing"
    
    # Sub-questions generate karo for comprehensive research
    sub_q_prompt = (
        f"Research Topic: {state['topic']}\n\n"
        "Generate 5 sub-questions that would help create a comprehensive report.\n"
        "Return as a JSON array of strings, nothing else.\n"
        "Example: ['question 1', 'question 2', ...]"
    )
    
    try:
        response = model.invoke([HumanMessage(content=sub_q_prompt)])
        sub_q_text = response.content.strip()
        # Extract JSON array from response
        if "[" in sub_q_text:
            sub_q_text = sub_q_text[sub_q_text.index("["):sub_q_text.rindex("]")+1]
        state["sub_questions"] = json.loads(sub_q_text)
    except:
        # Fallback questions
        state["sub_questions"] = [
            f"What is {state['topic']}?",
            f"Latest developments in {state['topic']}",
            f"Challenges and opportunities in {state['topic']}",
            f"Key players in {state['topic']}",
            f"Future of {state['topic']}",
        ]
    
    state["search_results"] = []
    state["errors"] = []
    state["current_depth"] = 0
    state["status"] = "searching"
    
    print(f"📋 Sub-questions generated: {len(state['sub_questions'])}")
    return state


def search_web(state: ResearchState) -> ResearchState:
    """Execute web searches for all sub-questions"""
    if state["current_depth"] >= Config.MAX_SEARCHES:
        state["status"] = "synthesizing"
        return state
    
    question_idx = state["current_depth"]
    if question_idx >= len(state["sub_questions"]):
        state["status"] = "synthesizing"
        return state
    
    query = state["sub_questions"][question_idx]
    print(f"  🔍 Searching ({question_idx+1}/{len(state['sub_questions'])}): {query[:60]}...")
    
    # Main query search
    result = web_search.invoke(query)
    state["search_results"].append(f"Query: {query}\n{result}")
    
    state["current_depth"] += 1
    
    return state


def should_continue_search(state: ResearchState) -> Literal["search", "synthesize"]:
    """Decide: more search or move to synthesis"""
    if state["current_depth"] < len(state["sub_questions"]):
        return "search"
    return "synthesize"


def synthesize(state: ResearchState) -> ResearchState:
    """Synthesize all search results into structured report"""
    print(f"  📝 Synthesizing {len(state['search_results'])} search results...")
    
    all_results = "\n\n=====\n\n".join(state["search_results"])
    
    synthesis_prompt = (
        f"Research Topic: {state['topic']}\n\n"
        f"Search Results:\n{all_results[:8000]}\n\n"
        "Create a comprehensive research report with:\n"
        "1. **Executive Summary** (2-3 sentences)\n"
        "2. **Key Findings** (4-6 bullet points with details)\n"
        "3. **Analysis & Insights** (what does this mean?)\n"
        "4. **Challenges & Considerations**\n"
        "5. **Future Outlook**\n"
        "6. **Sources** (list the URLs you found)\n\n"
        "Write in Hinglish for Indian developers.\n"
        "Be specific and factual. Avoid vague statements."
    )
    
    try:
        response = model.invoke([HumanMessage(content=synthesis_prompt)])
        state["synthesized"] = response.content
        state["status"] = "report_generation"
    except Exception as e:
        state["errors"].append(f"Synthesis failed: {str(e)}")
        state["synthesized"] = "Synthesis failed. Raw results available."
    
    return state


def generate_report(state: ResearchState) -> ResearchState:
    """Generate final formatted report"""
    print(f"  📄 Generating final report...")
    
    report_prompt = (
        f"Research Topic: {state['topic']}\n"
        f"Date: {get_current_date.invoke({})}\n\n"
        f"Synthesized Content:\n{state['synthesized'][:4000]}\n\n"
        "Create a professional research report with proper markdown formatting.\n"
        "Include: Title, Date, Executive Summary, Detailed Findings, Conclusion.\n"
        "Make it ready to share with colleagues.\n"
        "Write in Hinglish style."
    )
    
    try:
        response = model.invoke([HumanMessage(content=report_prompt)])
        state["final_report"] = response.content
        state["status"] = "complete"
    except Exception as e:
        state["errors"].append(f"Report generation failed: {str(e)}")
        state["final_report"] = state["synthesized"]
        state["status"] = "complete"
    
    elapsed = datetime.now() - datetime.fromisoformat(state["start_time"])
    print(f"✅ Research complete in {elapsed.total_seconds():.1f}s")
    
    return state


def error_handler(state: ResearchState) -> ResearchState:
    """Handle errors gracefully"""
    if state["errors"]:
        print(f"⚠️ {len(state['errors'])} errors occurred:")
        for e in state["errors"]:
            print(f"  - {e}")
    return state


# ── Build Graph ────────────────────────────

def build_research_graph() -> StateGraph:
    """Build the complete research agent graph"""
    
    graph = StateGraph(ResearchState)
    
    # Add nodes
    graph.add_node("initialize", initialize)
    graph.add_node("search", search_web)
    graph.add_node("synthesize", synthesize)
    graph.add_node("generate_report", generate_report)
    graph.add_node("error_handler", error_handler)
    
    # Entry point
    graph.set_entry_point("initialize")
    
    # Edges
    graph.add_edge("initialize", "search")
    graph.add_conditional_edges("search", should_continue_search)
    graph.add_edge("synthesize", "generate_report")
    graph.add_edge("generate_report", "error_handler")
    graph.add_edge("error_handler", END)
    
    return graph


# ── Run ────────────────────────────────────

def run_research(topic: str, memory: bool = True):
    """Run research agent"""
    
    # SQLite memory
    checkpointer = None
    if memory:
        import sqlite3
        conn = sqlite3.connect(Config.DB_PATH, check_same_thread=False)
        checkpointer = SqliteSaver(conn)
    
    graph = build_research_graph()
    app = graph.compile(checkpointer=checkpointer)
    
    config = {"configurable": {"thread_id": f"research_{topic[:20]}_{datetime.now().timestamp()}"}}
    
    try:
        result = app.invoke(
            {
                "topic": topic,
                "sub_questions": [],
                "search_results": [],
                "synthesized": "",
                "final_report": "",
                "current_depth": 0,
                "errors": [],
                "status": "start",
                "start_time": "",
            },
            config,
        )
        return result
    
    except Exception as e:
        print(f"❌ Research failed: {str(e)}")
        return {"final_report": f"Error: {str(e)}", "errors": [str(e)]}


# ── CLI ────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Research Agent — LangGraph")
    parser.add_argument("--topic", "-t", type=str, help="Research topic")
    parser.add_argument("--no-memory", action="store_true", help="Disable persistence")
    
    args = parser.parse_args()
    
    topic = args.topic or input("🔬 Research topic: ").strip()
    if not topic:
        topic = "Latest developments in Artificial Intelligence"
    
    print("\n" + "=" * 60)
    print("🔬 RESEARCH AGENT")
    print("=" * 60 + "\n")
    
    result = run_research(topic, memory=not args.no_memory)
    
    print("\n" + "=" * 60)
    print("📄 RESEARCH REPORT")
    print("=" * 60)
    print(result["final_report"])
    
    if result["errors"]:
        print("\n⚠️ ERRORS:")
        for e in result["errors"]:
            print(f"  - {e}")


if __name__ == "__main__":
    main()
```

## 8.3 Usage & Testing

```bash
# Basic usage
python research_agent.py

# Direct topic
python research_agent.py --topic "RAG techniques 2026"

# Without persistance
python research_agent.py --topic "AI agents" --no-memory

# Pipe output to file
python research_agent.py --topic "LangChain vs LlamaIndex" > report.md
```

**Sample output:**

```
🔬 Starting research on: LangGraph vs LangChain
📋 Sub-questions generated: 5
  🔍 Searching (1/5): What is LangGraph?...
  🔍 Searching (2/5): Difference between LangGraph and LangChain...
  🔍 Searching (3/5): When to use LangGraph vs LangChain...
  🔍 Searching (4/5): LangGraph tutorial examples...
  🔍 Searching (5/5): LangGraph production use cases...
  📝 Synthesizing 5 search results...
  📄 Generating final report...
✅ Research complete in 18.3s

============================================================
📄 RESEARCH REPORT
============================================================
## Research Report: LangGraph vs LangChain

**Date:** 2026-06-09

### Executive Summary
LangGraph aur LangChain dono LangChain ecosystem ka part hain...
...
```

## 8.4 VPS Deployment

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY research_agent.py .

ENTRYPOINT ["python", "research_agent.py"]
```

```txt
# requirements.txt
langchain-openai==0.3.*
langgraph==0.4.*
duckduckgo-search==7.*
python-dotenv==1.*
```

```bash
# Docker build & run
docker build -t research-agent .
docker run -it --env-file .env research-agent --topic "AI trends 2026"

# API mode — FastAPI wrapper
# (Week 4 project mein full deployment)
```

## 8.5 Evaluation Metrics

| Metric | How to Measure | Target |
|--------|---------------|--------|
| Search coverage | % of sub-questions searched | 100% |
| Result relevance | LLM rating (1-5) | >4.0 |
| Report structure | Has all 6 sections? | Pass/Fail |
| Response time | Total execution time | <60s |
| Error rate | Errors / total steps | <10% |
| Token efficiency | Tokens per report | <4000 |

## Day 8 Practice

- [ ] Research agent ko run karo with 3 different topics
- [ ] Agent ko extend karo — add `fetch_wikipedia` tool
- [ ] Error scenario test karo — network disconnect karke dekho
- [ ] Docker image banao aur test karo
- [ ] LangSmith trace analyze karo

---

## 🧠 Test Your Understanding

**Q1:** StateGraph mein node kaise add karte hain?
<details>
<summary>Answer</summary>
`graph.add_node("node_name", function_name)` se. Har node ko unique name dena zaroori hai.
</details>

**Q2:** Conditional edge aur regular edge mein kya farak hai?
<details>
<summary>Answer</summary>
Regular edge fixed path hota hai (A always goes to B). Conditional edge mein ek function decide karta hai ki age kahan jana hai based on current state.
</details>

**Q3:** Agent ko multiple tools kaise provide karte hain?
<details>
<summary>Answer</summary>
`tools = [tool1, tool2, tool3]` list banao aur `create_react_agent(model=model, tools=tools)` mein pass karo.
</details>

**Q4:** Har baar agent ko wahi state yaad rakhne ke liye kya karna chahiye?
<details>
<summary>Answer</summary>
Checkpointer (jaise SqliteSaver) use karo aur har conversation ke liye unique `thread_id` do.
</details>

---

## 📊 PHP Developer Summary Table

| Laravel Concept | LangGraph Concept | Implementation |
|----------------|-------------------|----------------|
| `Queue::push()` | `graph.add_node()` | Processing step add |
| `Queue::chain()` | `graph.add_edge()` | Step sequence define |
| `Event::dispatch()` → listener | Conditional edge → node | LLM-based routing |
| `Cache::remember()` | Checkpointer save/load | State persistence |
| `Pipeline::send()->through()` | `StateGraph().invoke()` | Run the graph |
| Job middleware | Node pre/post hooks | Before/after processing |
| Exception handler | Node try/except | Error handling |
| Supervisor process | Multi-agent supervisor | Agent orchestration |

---

## ✅ Week 3 Completion Checklist

- [ ] Day 1: StateGraph fundamentals — build + run
- [ ] Day 2: Conditional routing with LLM decisions
- [ ] Day 3: ReAct agent pattern — understand internals
- [ ] Day 4: Custom tools with error handling
- [ ] Day 5: Stateful agents with SQLite persistence
- [ ] Day 6: Multi-agent systems with supervisor
- [ ] Day 7: Streaming, tracing & debugging
- [ ] Day 8: Research agent project — complete + deploy
- [ ] All PHP mental model sections read
- [ ] All daily practice exercises completed

---

**👉 Next → Week 4: Document AI — Full-Stack Capstone Project**
