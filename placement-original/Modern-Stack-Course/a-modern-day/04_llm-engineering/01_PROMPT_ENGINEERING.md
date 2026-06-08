# 🎯 STAGE 4A — Prompt Engineering Mastery

> **Level:** Intermediate → Advanced | **Duration:** 1 Week

---

## 📋 Topics
1. Prompt Anatomy
2. System Prompts
3. Role Prompting
4. Chain of Thought
5. Few-Shot Prompting
6. Structured Output (JSON)
7. Tool/Function Calling
8. Advanced Patterns
9. Prompt Templates

---

## 1. Prompt Anatomy

```
Every prompt has these parts:

┌─────────────────────────┐
│ SYSTEM PROMPT           │ ← Who is the AI?
│ (personality, rules)    │
├─────────────────────────┤
│ CONTEXT                 │ ← What info does it need?
│ (documents, data)       │
├─────────────────────────┤
│ USER INSTRUCTION        │ ← What should it do?
│ (the actual task)       │
├─────────────────────────┤
│ OUTPUT FORMAT            │ ← How should it respond?
│ (JSON, markdown, etc.)  │
└─────────────────────────┘
```

---

## 2. System Prompts

```python
messages = [
    {
        "role": "system",
        "content": """You are a senior Laravel developer assistant.
        
Rules:
- Always write production-quality code
- Include error handling
- Follow PSR-12 coding standards
- Use type hints and return types
- Explain WHY, not just WHAT
- If unsure, say "I'm not sure" instead of guessing"""
    },
    {
        "role": "user",
        "content": "Create a service class for handling payments"
    }
]
```

---

## 3. Role Prompting

```python
# Basic role
"You are a database optimization expert."

# Detailed role
"""You are a senior software architect with 15 years of experience
in building scalable SaaS platforms. You specialize in:
- Laravel and PHP backend architecture
- Microservices design
- Database optimization
- AI integration

When reviewing code, focus on:
1. Performance implications
2. Security vulnerabilities
3. Scalability concerns
4. Code maintainability"""
```

---

## 4. Chain of Thought (CoT)

Force the AI to think step by step.

### Without CoT
```
Q: "Should I use Redis or Memcached?"
A: "Use Redis" (no reasoning)
```

### With CoT
```python
prompt = """
Analyze whether Redis or Memcached is better for my use case.

Think step by step:
1. First, list the requirements
2. Compare features of each
3. Consider trade-offs
4. Give your recommendation with reasoning

My use case: SaaS application with 100K users, need caching,
session storage, and queue backend.
"""
```

---

## 5. Few-Shot Prompting

Give examples to teach the AI the pattern.

```python
prompt = """Convert product descriptions to structured JSON.

Example 1:
Input: "Nike Air Max 90 running shoes, red color, size 10, price $150"
Output: {"name": "Nike Air Max 90", "type": "shoes", "color": "red", "size": "10", "price": 150}

Example 2:
Input: "Apple MacBook Pro 16-inch, M3 chip, 32GB RAM, $2499"
Output: {"name": "Apple MacBook Pro 16-inch", "type": "laptop", "specs": {"chip": "M3", "ram": "32GB"}, "price": 2499}

Now convert this:
Input: "Samsung Galaxy S24 Ultra smartphone, 512GB storage, titanium gray, $1299"
Output:"""
```

---

## 6. Structured Output (JSON Mode)

```python
response = client.chat.completions.create(
    model="gpt-4o-mini",
    response_format={"type": "json_object"},
    messages=[
        {
            "role": "system",
            "content": "Extract product info. Respond in JSON with keys: name, category, price, features (array)"
        },
        {
            "role": "user",
            "content": "The iPhone 15 Pro costs $999 and features a titanium design, A17 Pro chip, and 48MP camera"
        }
    ],
)

import json
data = json.loads(response.choices[0].message.content)
# {"name": "iPhone 15 Pro", "category": "smartphone", "price": 999, "features": [...]}
```

---

## 7. Function/Tool Calling

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_database",
            "description": "Search the product database",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"},
                    "category": {"type": "string", "enum": ["electronics", "clothing", "books"]},
                    "max_price": {"type": "number", "description": "Maximum price filter"},
                },
                "required": ["query"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "send_email",
            "description": "Send an email notification",
            "parameters": {
                "type": "object",
                "properties": {
                    "to": {"type": "string"},
                    "subject": {"type": "string"},
                    "body": {"type": "string"},
                },
                "required": ["to", "subject", "body"],
            },
        },
    },
]

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Find laptops under $1000 and email results to admin@example.com"}],
    tools=tools,
    tool_choice="auto",
)

# AI decides which tools to call and with what parameters
```

---

## 8. Advanced Patterns

### Persona + Task + Format + Constraints
```python
prompt = """
PERSONA: You are a data analyst specializing in e-commerce metrics.

TASK: Analyze the following sales data and provide insights.

DATA:
{sales_data}

FORMAT: Respond in this exact JSON structure:
{
  "summary": "one paragraph overview",
  "key_metrics": {
    "total_revenue": number,
    "growth_rate": "percentage",
    "top_product": "name"
  },
  "recommendations": ["action 1", "action 2", "action 3"],
  "risk_factors": ["risk 1", "risk 2"]
}

CONSTRAINTS:
- Base insights only on provided data
- Keep recommendations actionable
- Flag any data quality issues
"""
```

### Iterative Refinement
```python
# Round 1: Generate
draft = llm.invoke("Write a product description for a SaaS dashboard tool")

# Round 2: Critique
critique = llm.invoke(f"Critique this product description and suggest improvements:\n{draft}")

# Round 3: Refine
final = llm.invoke(f"Rewrite this based on the critique:\nOriginal: {draft}\nCritique: {critique}")
```

---

## 9. Prompt Templates (LangChain)

```python
from langchain.prompts import ChatPromptTemplate

template = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} assistant. Respond in {language}."),
    ("user", "{question}"),
])

prompt = template.format_messages(
    role="Laravel developer",
    language="English",
    question="How to implement API rate limiting?"
)
```

---

## 🎯 Practice Tasks
- [ ] Write system prompts for 3 different AI assistants
- [ ] Implement chain-of-thought for a complex analysis
- [ ] Build few-shot prompt for data extraction
- [ ] Use JSON mode for structured outputs
- [ ] Implement tool calling with 3+ tools

---

*Next: [Embeddings & Vector DB →](./02_EMBEDDINGS_VECTOR_DB.md)*
