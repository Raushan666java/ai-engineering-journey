# 🔗 STAGE 5A — LangChain Core

> **Level:** Intermediate | **Duration:** 1–2 Weeks

---

## 1. What Is LangChain?

Framework for building LLM-powered applications.

```
LangChain gives you:
├── Models      → Connect to any LLM
├── Prompts     → Template management
├── Chains      → Sequence operations
├── Memory      → Conversation state
├── Tools       → External actions
├── Agents      → Autonomous decision-making
└── Retrievers  → Vector DB search
```

### Installation
```bash
pip install langchain langchain-openai langchain-community
```

---

## 2. LCEL (LangChain Expression Language)

The modern way to build chains with `|` pipe operator.

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Define components
prompt = ChatPromptTemplate.from_template(
    "Explain {topic} like I'm a senior developer. Be concise."
)
llm = ChatOpenAI(model="gpt-4o-mini")
parser = StrOutputParser()

# Chain with | operator
chain = prompt | llm | parser

# Run
result = chain.invoke({"topic": "Docker networking"})
print(result)
```

### Multi-Step Chain
```python
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Step 1: Generate code
code_prompt = ChatPromptTemplate.from_template(
    "Write a Python function to {task}. Only code, no explanation."
)

# Step 2: Review code
review_prompt = ChatPromptTemplate.from_template(
    "Review this code and list any bugs or improvements:\n{code}"
)

# Chain them
code_chain = code_prompt | llm | StrOutputParser()
review_chain = review_prompt | llm | StrOutputParser()

# Run sequentially
code = code_chain.invoke({"task": "scrape a webpage and extract titles"})
review = review_chain.invoke({"code": code})
```

---

## 3. Output Parsers

```python
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class ProductInfo(BaseModel):
    name: str = Field(description="Product name")
    price: float = Field(description="Product price")
    category: str = Field(description="Product category")
    features: list[str] = Field(description="Key features")

parser = PydanticOutputParser(pydantic_object=ProductInfo)

prompt = ChatPromptTemplate.from_template(
    "Extract product info from: {text}\n{format_instructions}"
)

chain = prompt | llm | parser

result = chain.invoke({
    "text": "iPhone 15 Pro, $999, smartphone with A17 chip and titanium design",
    "format_instructions": parser.get_format_instructions()
})

print(result.name)      # "iPhone 15 Pro"
print(result.price)     # 999.0
print(result.features)  # ["A17 chip", "titanium design"]
```

---

## 4. Memory Systems

```python
from langchain.memory import ConversationBufferMemory, ConversationSummaryMemory

# Buffer Memory (stores all messages)
memory = ConversationBufferMemory(return_messages=True)
memory.save_context(
    {"input": "My name is Raushan"},
    {"output": "Hello Raushan!"}
)

# Summary Memory (summarizes old messages — saves tokens)
memory = ConversationSummaryMemory(llm=llm, return_messages=True)

# Window Memory (keeps last N exchanges)
from langchain.memory import ConversationBufferWindowMemory
memory = ConversationBufferWindowMemory(k=5, return_messages=True)
```

---

## 5. Tools

```python
from langchain.tools import tool
from langchain_community.tools import DuckDuckGoSearchRun

# Built-in tool
search = DuckDuckGoSearchRun()

# Custom tool
@tool
def calculate_price(quantity: int, unit_price: float) -> str:
    """Calculate total price with tax."""
    subtotal = quantity * unit_price
    tax = subtotal * 0.18  # 18% GST
    total = subtotal + tax
    return f"Subtotal: ₹{subtotal}, Tax: ₹{tax}, Total: ₹{total}"

@tool
def search_database(query: str) -> str:
    """Search the product database for matching items."""
    # Your database query logic here
    results = db.products.search(query)
    return str(results)
```

---

## 6. Building an Agent

```python
from langchain.agents import create_tool_calling_agent, AgentExecutor

# Define tools
tools = [search, calculate_price, search_database]

# Create prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful e-commerce assistant. Use tools when needed."),
    ("placeholder", "{chat_history}"),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

# Create agent
agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Run
result = executor.invoke({
    "input": "Find laptops under ₹50000 and calculate price for 3 units of the cheapest one",
    "chat_history": [],
})
```

### Agent Flow
```
User: "Find laptops under ₹50000"
  ↓
Agent THINKS: I need to search the database
  ↓
Agent ACTS: Calls search_database("laptops under 50000")
  ↓
Agent OBSERVES: Results returned
  ↓
Agent THINKS: User wants price for 3 units of cheapest
  ↓
Agent ACTS: Calls calculate_price(3, 35000)
  ↓
Agent RESPONDS: "I found 5 laptops. The cheapest is ₹35,000.
                 For 3 units: Total ₹1,23,900 (including 18% GST)"
```

---

## 7. Streaming

```python
# Stream responses
async for chunk in chain.astream({"topic": "Kubernetes"}):
    print(chunk, end="", flush=True)
```

---

## 🎯 Practice Tasks
- [ ] Build LCEL chain with prompt → LLM → parser
- [ ] Create a multi-step chain (generate + review)
- [ ] Implement Pydantic output parser
- [ ] Build custom tools
- [ ] Create an agent with 3+ tools

---

*Next: [LangGraph — Stateful Agents →](./02_LANGGRAPH.md)*
