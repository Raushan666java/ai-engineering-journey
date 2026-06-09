# Week 1 — LangChain Core: Models, Prompts, Parsers

**Goal:** LangChain ke basic building blocks samajhna — LLM interfaces, prompt templates, output parsers, aur unka aapas mein connection
**Target Audience:** Laravel/PHP developer jo AI engineering seekh raha hai
**Project:** Blog outline generator using LCEL

---

## Day 1: LangChain Kya Hai? LLM se Kya Difference Hai?

### Why LangChain?

PHP mein tum `$httpClient->post('https://api.openai.com/v1/chat/completions')` seedha OpenAI API call kar sakte ho. Toh LangChain ki kya zaroorat?

```php
// PHP mein direct API call — kaam karta hai, lekin scalable nahi
$curl = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode([
    'model' => 'gpt-4o-mini',
    'messages' => [['role' => 'user', 'content' => 'Hello']]
]));
```

Yeh approach chhoti projects ke liye theek hai. Lekin jaise-jaise complexity badhti hai:

| Problem | Direct API Call | LangChain |
|---------|----------------|-----------|
| Multiple models swap karna | Code change karo | Bas model name badlo |
| Prompt versioning | Strings hardcoded | Templates + version control |
| Output structure | JSON parse manually | Pydantic parsers |
| Memory/conversation | DB + token counting | Built-in memory |
| Multi-step chains | Manual orchestration | LCEL pipelines |
| Tool calling | Custom logic | Built-in tool framework |

**Samajhne ka formula:** LangChain = Laravel's abstraction over database queries, lekin yeh LLMs ke liye hai. Jaise Eloquent tumhe direct SQL se bachata hai, waise LangChain tumhe raw API calls se bachata hai.

### LangChain Architecture (Top Level)

```
Your Application Code
        ↓
┌───────────────────────┐
│   LangChain           │
│   ┌─────────────────┐ │
│   │ Models          │ │ ← ChatOpenAI, ChatOllama, Claude
│   │ Prompts         │ │ ← Templates, few-shot, dynamic
│   │ Parsers         │ │ ← StrOutput, Pydantic, JSON
│   │ Chains          │ │ ← LCEL pipelines
│   │ Memory          │ │ ← Conversation, summary
│   │ Retrieval       │ │ ← RAG components
│   │ Agents/Tools    │ │ ← Dynamic LLM decisions
│   └─────────────────┘ │
└───────────────────────┘
        ↓
    LLM Provider (OpenAI / Ollama / Anthropic)
```

### Runnable Interface — LangChain ka "Contract"

LangChain mein har component ek **Runnable** hota hai. Runnable ka matlab — us component ko `invoke()`, `batch()`, `stream()`, `astream()` kiya ja sakta hai.

```python
# Runnable interface — sab components yeh methods implement karte hain
component.invoke(input)        # Single input process
component.batch([input1, input2])  # Multiple inputs
component.stream(input)        # Streaming output
component.astream(input)       # Async streaming
```

PHP analogy: Interface jaisa `Runnable` ek contract hai. Jaise Laravel mein `ShouldQueue` interface implement karta hai toh job queue mein ja sakti hai, waise hi LangChain mein `Runnable` implement karne wala koi bhi component chain mein connect ho sakta hai.

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│ Prompt  │────▶│  Model  │────▶│  Parser  │
│(Runnable)│     │(Runnable)│     │(Runnable)│
└─────────┘     └─────────┘     └─────────┘
     ↓               ↓               ↓
  invoke()        invoke()        invoke()
  batch()         batch()         batch()
  stream()        stream()        stream()
```

Sab Runnable hain, isliye pipe operator `|` se connect kar sakte ho.

---

## Day 2: Setup & First Model Call

### Installation

```bash
# LangChain core + OpenAI integration
pip install langchain langchain-openai

# Utils
pip install python-dotenv pydantic

# Optional: Ollama for local models
pip install langchain-ollama
```

### Environment Setup

```bash
# .env file
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-4o-mini
LANGCHAIN_TRACING_V2=true  # Optional: LangSmith tracing
```

### First LangChain Program

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

# Model initialize — Laravel mein DB facade jaisa
model = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.7,     # Creativity: 0 = deterministic, 1 = very random
    max_tokens=500,      # Response ki length limit
)

# Direct invoke — simple LLM call
response = model.invoke("India ka capital kya hai?")
print(response.content)
# Output: India ka capital New Delhi hai.

# Response object mein kya hota hai?
print(type(response))          # <class 'langchain_core.messages.AIMessage'>
print(response.content)        # Actual text
print(response.response_metadata)  # Token usage, model, etc.
# Output: {'token_usage': {'completion_tokens': 8, 'prompt_tokens': 16, 'total_tokens': 24}, 'model': 'gpt-4o-mini'}
```

### Understanding the Response Object

PHP developers ke liye: response ek associative array nahi hai, balki ek **AIMessage object** hai.

```python
# Response ke saare fields
response = model.invoke("Hello!")

response.content        # → String: actual text
response.type           # → "ai"
response.id             # → Unique message ID
response.tool_calls     # → List of tool calls (empty by default)
response.usage_metadata # → Token counts
    # input_tokens: 10
    # output_tokens: 5
    # total_tokens: 15
```

### Multiple Models Comparison

```python
# ── GPT-4o-mini (Fast, cheap, OpenAI ka budget model)
from langchain_openai import ChatOpenAI
gpt = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# ── GPT-4o (Powerful, expensive, complex tasks)
gpt4 = ChatOpenAI(model="gpt-4o", temperature=0)

# ── Claude 3 Haiku (Anthropic, fast)
# pip install langchain-anthropic
from langchain_anthropic import ChatAnthropic
claude = ChatAnthropic(model="claude-3-haiku-20240307", temperature=0)

# ── Ollama (Local, free, privacy)
# pip install langchain-ollama
# First: ollama pull llama3
from langchain_ollama import ChatOllama
llama = ChatOllama(model="llama3", temperature=0)
```

### Model Comparison Table

| Feature | GPT-4o-mini | GPT-4o | Claude 3 Haiku | Llama 3 (Local) |
|---------|-------------|--------|----------------|-----------------|
| **Cost** | $0.15/1M input | $2.50/1M input | $0.25/1M input | Free |
| **Speed** | Fastest | Medium | Fast | Depends on hardware |
| **Reasoning** | Good | Excellent | Very Good | Good |
| **Hinglish** | Excellent | Excellent | Good | Decent |
| **Context Window** | 128K tokens | 128K tokens | 200K tokens | 8K tokens |
| **API Key Required** | Yes | Yes | Yes | No |
| **Use Case** | Daily tasks | Complex reasoning | Fast responses | Privacy-sensitive |

```python
# Swap models — bas ek line change
def ask_question(model, question: str) -> str:
    """Kisi bhi model se sawaal pucho — ek jaisa interface"""
    response = model.invoke(question)
    return response.content

# Ab koi bhi model pass karo
print(ask_question(gpt, "RAG kya hai?"))
print(ask_question(claude, "RAG kya hai?"))
print(ask_question(llama, "RAG kya hai?"))

# Output similar hoga (same question), lekin style alag ho sakti hai
```

!!! tip "API Key nahi hai?"
    Ollama istemal karo. Same LangChain interface. Sirf model name change karna hai.
    `ChatOpenAI(model="gpt-4o-mini")` → `ChatOllama(model="llama3")`

### Temperature Parameter — Samajhna Zaroori Hai

```python
# Temperature = 0 → Always same answer (deterministic)
strict_model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
r1 = strict_model.invoke("2+2 kya hota hai?")  # Always "4"
r2 = strict_model.invoke("2+2 kya hota hai?")  # Always "4"
# r1.content == r2.content → True ✅

# Temperature = 1 → Creative, different answers
creative_model = ChatOpenAI(model="gpt-4o-mini", temperature=1)
r1 = creative_model.invoke("Mujhe ek joke sunao")
r2 = creative_model.invoke("Mujhe ek joke sunao")
# r1.content != r2.content (most likely) ✅
```

**Rule of thumb:**
| Task | Temperature | Reason |
|------|------------|--------|
| Factual Q&A | 0.0 | Consistent answers |
| Code generation | 0.0 - 0.2 | Bug-free code |
| Creative writing | 0.7 - 1.0 | Novelty chahiye |
| Brainstorming | 0.8 - 1.0 | Diverse ideas |
| Chatbot | 0.3 - 0.7 | Balance |

---

## Day 3: Prompt Templates — Deep Dive

### The Problem with Hardcoded Prompts

PHP developers often do this:

```php
// PHP mein hardcoded prompt — BAD
$prompt = "You are a helpful assistant. Answer in Hinglish.\nQuestion: " . $question;
```

Problems:
1. **Dynamic parts** — Har baar string concatenation
2. **Versioning** — Prompt change kiya? Har jagah badlo
3. **Type safety** — Kis variable ki kya value jayegi, pata nahi
4. **Reusability** — Copy-paste har jagah

### PromptTemplate — The Solution

```python
from langchain_core.prompts import PromptTemplate

# PromptTemplate define karo
template = PromptTemplate(
    template="Mujhe {topic} ke baare mein batao, {language} mein.",
    input_variables=["topic", "language"],
)

# Use karo
prompt1 = template.format(topic="Python", language="Hinglish")
# → "Mujhe Python ke baare mein batao, Hinglish mein."

prompt2 = template.format(topic="LangChain", language="English")
# → "Mujhe LangChain ke baare mein batao, English mein."
```

**PHP mental model:**
```php
// Laravel Blade template jaisa
// template.blade.php: "Mujhe {{ $topic }} ke baare mein batao, {{ $language }} mein."
// PromptTemplate = PHP Mein Laravel Blade jaisa hi hai
```

### Partial Variables — Jab kuch variables fixed ho

```python
from langchain_core.prompts import PromptTemplate

template = PromptTemplate(
    template="You are a {role}. Answer in {language}. Question: {question}",
    input_variables=["role", "language", "question"],
)

# Partial — role aur language fixed karo
partial_template = template.partial(
    role="Senior Python Developer",
    language="Hinglish",
)

# Ab sirf question dena hoga
print(partial_template.format(question="Decorator kya hai?"))
# → "You are a Senior Python Developer. Answer in Hinglish. Question: Decorator kya hai?"
```

### ChatPromptTemplate — The Real MVP

```python
from langchain_core.prompts import ChatPromptTemplate

# ChatPromptTemplate — multiple messages support
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} who answers in {language}."),
    ("human", "{input}"),
])

# Chain banao
chain = prompt | model
result = chain.invoke({
    "role": "Python expert",
    "language": "Hinglish",
    "input": "List comprehension kya hai?"
})
print(result.content)
```

### Deep Dive: ChatPromptTemplate Components

```python
from langchain_core.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
    AIMessagePromptTemplate,
)
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage

# Method 1: from_messages (recommended)
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful AI."),
    ("human", "Hello!"),
    ("ai", "Hi! Kaise ho?"),
    ("human", "{input}"),
])

# Method 2: Explicit classes
system = SystemMessagePromptTemplate.from_template(
    "You are a {role}."
)
human = HumanMessagePromptTemplate.from_template("{input}")

prompt = ChatPromptTemplate.from_messages([system, human])

# Method 3: Direct message objects (advanced)
messages = [
    SystemMessage(content="You are a Python expert."),
    HumanMessage(content="Explain decorators."),
]

# Jab 'messages' list already ready ho toh seedha model.invoke
response = model.invoke(messages)

# PromptTemplate se messages banake invoke karo
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} expert."),
    ("human", "Explain {topic}."),
])
messages = prompt.format_messages(role="Python", topic="decorators")
response = model.invoke(messages)
```

### Why Four Message Types?

```python
from langchain_core.messages import (
    SystemMessage,    # System instructions / behavior
    HumanMessage,     # User ka input
    AIMessage,        # AI ka response
    ToolMessage,      # Tool se result (Week 3-4)
)

# Real conversation structure
messages = [
    SystemMessage(content="You are a Hinglish assistant."),
    HumanMessage(content="Mera naam Raushan hai."),
    AIMessage(content="Namaste Raushan! Kaise ho aap?"),
    HumanMessage(content="Mera naam kya hai?"),
]
# AI should respond "Raushan" because it has context
```

PHP mental model: Think of each message type as a different HTTP request body format — same endpoint, different structure.

### FewShotPromptTemplate — Examples Do, Pattern Banao

```python
from langchain_core.prompts import FewShotChatMessagePromptTemplate
from langchain_core.prompts import ChatPromptTemplate

# Examples — training data ki tarah
examples = [
    {"input": "2+2 ka man kya hai?", "output": "2+2 = 4"},
    {"input": "10 - 3 batao", "output": "10 - 3 = 7"},
    {"input": "5 guna 3", "output": "5 × 3 = 15"},
]

# Example prompt template — har example ka format
example_prompt = ChatPromptTemplate.from_messages([
    ("human", "{input}"),
    ("ai", "{output}"),
])

# Few-shot prompt template
few_shot_prompt = FewShotChatMessagePromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
)

# Final prompt — system + few-shot examples + user question
final_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a math expert. Answer precisely."),
    few_shot_prompt,
    ("human", "{input}"),
])

chain = final_prompt | model
print(chain.invoke({"input": "25 / 5 kaise solve karein?"}).content)
# Output: 25 ÷ 5 = 5 (pattern follow karega)
```

### FewShot ka Dynamic Version

```python
# Kabhi kabhi examples dynamically select karne hote hain
from langchain_core.prompts import FewShotChatMessagePromptTemplate
from langchain_core.example_selectors import SemanticSimilarityExampleSelector
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma

# Zyada examples
all_examples = [
    {"input": "2+2", "output": "4"},
    {"input": "10-3", "output": "7"},
    {"input": "5*5", "output": "25"},
    {"input": "100/4", "output": "25"},
    {"input": "Hello in Hindi", "output": "Namaste"},
    {"input": "Hello in French", "output": "Bonjour"},
]

# Example selector — query se similar examples automatically select karega
example_selector = SemanticSimilarityExampleSelector.from_examples(
    examples=all_examples,
    embeddings=OpenAIEmbeddings(),
    vectorstore_cls=Chroma,
    k=2,  # Sirf 2 most relevant examples
)

# Dynamic few-shot
few_shot_prompt = FewShotChatMessagePromptTemplate(
    example_selector=example_selector,
    example_prompt=example_prompt,  # same as before
)

# Agar math question puchoge → math examples select honge
# Agar translation puchoge → translation examples select honge
```

### Prompt Template Best Practices

```python
# BAD prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "Answer the question."),
    ("human", "{input}"),
])

# GOOD prompt — specific, structured, role-based
prompt = ChatPromptTemplate.from_messages([
    ("system", (
        "You are a {role} with expertise in {domain}.\n"
        "Rules:\n"
        "1. Always answer in {language}\n"
        "2. If unsure, say 'Mujhe nahi pata'\n"
        "3. Give examples from {domain}\n"
        "4. Keep response under {max_words} words"
    )),
    ("human", "{input}"),
])

# Use
chain = prompt | model
result = chain.invoke({
    "role": "Senior AI Engineer",
    "domain": "Natural Language Processing",
    "language": "Hinglish",
    "max_words": "100",
    "input": "Transformer architecture kya hai?"
})
```

### Variable Injection — PHP se Connection

```python
# PHP mein aisa hota hai:
# $prompt = str_replace(['{name}', '{age}'], [$name, $age], $template);

# LangChain mein:
from langchain_core.prompts import PromptTemplate

template = PromptTemplate(
    template="User {name} (age {age}) asked: {question}",
    input_variables=["name", "age", "question"],
)

# Input validation automatically hoti hai
try:
    template.format(name="Raushan")  # Missing 'age' and 'question'
except KeyError as e:
    print(f"Variable missing: {e}")
```

---

## Day 4: Output Parsers — LLM se Structured Data Kaise Nikalein

### Why Output Parsers?

LLM hamesha text return karta hai. Lekin tumhe JSON chahiye, ya list chahiye, ya ek Pydantic object. Output parser raw text ko parse karta hai.

```python
# Bina parser — manual parsing
raw = model.invoke("List 5 Indian cities")
text = raw.content  # "1. Mumbai\n2. Delhi\n3. Bangalore\n4. Chennai\n5. Kolkata"

# Manual parse — error-prone
lines = text.split("\n")
cities = [line.split(". ")[1] for line in lines if line.strip()]
# Works, but fragile

# Parser ke saath — automatic
from langchain_core.output_parsers import CommaSeparatedListOutputParser
parser = CommaSeparatedListOutputParser()
parsed = parser.parse("Mumbai, Delhi, Bangalore, Chennai, Kolkata")
# ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
```

### StrOutputParser — Simplest

```python
from langchain_core.output_parsers import StrOutputParser

# Bina parser:
prompt = ChatPromptTemplate.from_messages([
    ("system", "Answer in Hinglish."),
    ("human", "{input}"),
])
chain = prompt | model
result = chain.invoke({"input": "Python kya hai?"})
print(result.content)  # .content karna pad raha hai

# StrOutputParser ke saath:
chain = prompt | model | StrOutputParser()
result = chain.invoke({"input": "Python kya hai?"})
print(result)  # Direct string — no .content needed!
```

### CommaSeparatedListOutputParser — List Output

```python
from langchain_core.output_parsers import CommaSeparatedListOutputParser
from langchain_core.prompts import PromptTemplate

parser = CommaSeparatedListOutputParser()

prompt = PromptTemplate(
    template="List 5 {topic}.\n{format_instructions}",
    input_variables=["topic"],
    partial_variables={
        "format_instructions": parser.get_format_instructions()
    },
)

chain = prompt | model | parser
result = chain.invoke({"topic": "Python frameworks"})
print(result)
# Output: ['Django', 'Flask', 'FastAPI', 'Pyramid', 'Bottle']
print(type(result))  # <class 'list'>
# Ab list operations kar sakte ho!
for framework in result:
    print(f"- {framework}")
```

### JsonOutputParser — JSON Output

```python
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate

parser = JsonOutputParser()

prompt = PromptTemplate(
    template="Output a JSON object with keys: name, age, city.\n{format_instructions}\nPerson: {description}",
    input_variables=["description"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = prompt | model | parser
result = chain.invoke({"description": "A 25-year-old developer from Mumbai"})
print(result)
# {'name': 'Raushan', 'age': 25, 'city': 'Mumbai'}
print(result["name"])  # Direct dictionary access ✅
```

### PydanticOutputParser — The Most Powerful

```python
from pydantic import BaseModel, Field
from langchain_core.output_parsers import PydanticOutputParser

# Step 1: Define your data structure
class Developer(BaseModel):
    name: str = Field(description="Developer ka naam")
    age: int = Field(description="Umar in years")
    skills: list[str] = Field(description="Programming skills")
    experience_years: int = Field(description="Years of experience")
    is_available: bool = Field(description="Freelancing ke liye available?")
    preferred_rate: float = Field(description="Hourly rate in USD")

parser = PydanticOutputParser(pydantic_object=Developer)

prompt = PromptTemplate(
    template=(
        "Generate a developer profile based on:\n"
        "Description: {description}\n\n"
        "{format_instructions}"
    ),
    input_variables=["description"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = prompt | model | parser
result = chain.invoke({
    "description": "Raushan, 28 saal ka, 5 saal ka experience, "
                   "PHP aur Python jaanta hai, freelancing karta hai, $50/hour"
})

print(f"Name: {result.name}")           # Raushan
print(f"Skills: {', '.join(result.skills)}")  # PHP, Python (ya aur bhi)
print(f"Available: {result.is_available}")     # True

# Type-safe — Pydantic validation automatically
# Agar LLM ne age "twenty-eight" diya → error throw karega
```

### Multiple Parsers Comparison

```python
# Scenario: LLM se product details nikalni hain

from langchain_core.output_parsers import (
    StrOutputParser,       # Raw string
    CommaSeparatedListOutputParser,  # List
    JsonOutputParser,       # Dict (no schema validation)
    PydanticOutputParser,   # Typed object (with validation)
)
from pydantic import BaseModel, Field

# Option 1: StrOutputParser
parser1 = StrOutputParser()
chain1 = prompt | model | parser1
raw = chain1.invoke(...)
# "Product: Laptop, Price: 50000, Brand: Dell"
# Manual parsing needed

# Option 2: CommaSeparatedListOutputParser
parser2 = CommaSeparatedListOutputParser()
chain2 = prompt | model | parser2
# ['Product: Laptop', 'Price: 50000', 'Brand: Dell']
# List mili, but key-value nahi

# Option 3: JsonOutputParser
parser3 = JsonOutputParser()
chain3 = prompt | model | parser3
# {'product': 'Laptop', 'price': 50000, 'brand': 'Dell'}
# Dictionary mili, lekin type validation nahi

# Option 4: PydanticOutputParser (BEST)
class Product(BaseModel):
    name: str = Field(description="Product name")
    price: float = Field(description="Price in INR")
    brand: str = Field(description="Brand name")
    in_stock: bool = Field(description="Availability")

parser4 = PydanticOutputParser(pydantic_object=Product)
chain4 = prompt | model | parser4
product = chain4.invoke(...)
# product.name → "Laptop"
# product.price → 50000.0 (float guaranteed)
# Agar LLM ne price "fifty thousand" diya → Pydantic error!
```

### OutputParser Internals

```python
# Parser ke format instructions — yeh prompt mein LLM ko batata hai kaise output karna hai
parser = PydanticOutputParser(pydantic_object=BlogOutline)
instructions = parser.get_format_instructions()

print(instructions)
# Output:
# "The output should be formatted as a JSON instance that conforms
#  to the schema below. ..."
```

### Custom OutputParser — Jab Kuch Aur Chahiye

```python
from langchain_core.output_parsers import BaseOutputParser
import re

class EmailExtractorParser(BaseOutputParser[dict]):
    """Text se email aur phone extract karo"""

    def parse(self, text: str) -> dict:
        emails = re.findall(r'\b[\w\.-]+@[\w\.-]+\.\w+\b', text)
        phones = re.findall(r'\b\d{10}\b', text)
        return {
            "emails": emails,
            "phones": phones,
            "original_text": text[:100],
        }

    @property
    def _type(self) -> str:
        return "email_extractor"

# Use
parser = EmailExtractorParser()
result = parser.parse(
    "Contact raushan@email.com or call 9876543210"
)
# {'emails': ['raushan@email.com'], 'phones': ['9876543210'], ...}
```

---

## Day 5: Streaming Responses — Real-time Output

### Why Streaming?

LLM responses mein delay hota hai (1-5 seconds). User wait karta hai. Streaming se token-by-token output dikhata hai — better UX.

```
Without Streaming:     [wait 3s] → [full response appears]
With Streaming:        [token] [token] [token] ... [token]
                       "Mujhe... Python... mein... list... comprehension..."
```

### Basic Streaming

```python
# Streaming — LCEL mein built-in
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("human", "{input}"),
])

chain = prompt | model | StrOutputParser()

# Stream — token by token
print("🤖: ", end="")
for chunk in chain.stream({"input": "Python generators kya hain? Hinglish mein batao"}):
    print(chunk, end="", flush=True)
# Output: "Python generators ek aisa function hai jo yield keyword use karta hai..."
# Har word real-time dikhega
```

### Async Streaming

```python
# Async version — FastAPI ya async apps ke liye
import asyncio

async def stream_response():
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful assistant."),
        ("human", "{input}"),
    ])
    chain = prompt | model | StrOutputParser()

    print("🤖: ", end="")
    async for chunk in chain.astream({"input": "Explain async/await in Python in Hinglish"}):
        print(chunk, end="", flush=True)

# Run
asyncio.run(stream_response())
```

### Event-Based Streaming

```python
# Advanced: Different event types track karo
chain = prompt | model | StrOutputParser()

async for event in chain.astream_events(
    {"input": "What is AI?"},
    version="v1",
):
    kind = event["event"]
    if kind == "on_chat_model_stream":
        # LLM token generate kar raha hai
        content = event["data"]["chunk"].content
        print(content, end="", flush=True)
    elif kind == "on_parser_start":
        print("\n[Parser Started]", end="")
    elif kind == "on_chain_end":
        print("\n[Done]")
```

### Streaming in FastAPI (Production)

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

app = FastAPI()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
prompt = ChatPromptTemplate.from_messages([
    ("system", "Answer in Hinglish."),
    ("human", "{input}"),
])
chain = prompt | model | StrOutputParser()


@app.get("/chat/{question}")
async def chat(question: str):
    async def generate():
        async for chunk in chain.astream({"input": question}):
            yield f"data: {chunk}\n\n"  # SSE format

    return StreamingResponse(generate(), media_type="text/event-stream")


# Test: curl http://localhost:8000/chat/Hello
```

### Streaming with Callbacks

```python
from langchain_core.callbacks import CallbackManager, StreamingStdOutCallbackHandler

# Console mein real-time output dekho
model_with_streaming = ChatOpenAI(
    model="gpt-4o-mini",
    streaming=True,  # Enable streaming
    callbacks=[StreamingStdOutCallbackHandler()],
)

# Direct invoke — automatically stream karega console par
response = model_with_streaming.invoke("Mujhe ek story sunao")
```

---

## Day 6: Putting It All Together — Blog Outline Generator

### Architecture

```
User Input (Topic)
     ↓
┌────────────────────────────────────────────┐
│  Inline Passthrough                        │
│  topic → topic (passthrough)               │
│  audience → "Indian developers" (fixed)     │
│  tone → "Hinglish" (fixed)                 │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  PromptTemplate                            │
│  "Generate outline for {topic}...          │
│   Audience: {audience}, Tone: {tone}"      │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  ChatOpenAI (gpt-4o-mini)                  │
│  Raw text generation                       │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  PydanticOutputParser                      │
│  → BlogOutline object                      │
└────────────────────────────────────────────┘
     ↓
Structured Output (title, headings, tags, etc.)
```

### Complete Code with Explanation

```python title="blog_outline_generator.py"
import os
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

# ── Step 1: Model Initialize ────────────────────
# temperature=0.7 for creative outlines
model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

# ── Step 2: Output Structure Define ─────────────
# Pydantic model defines exactly what we want from LLM
class BlogOutline(BaseModel):
    title: str = Field(description="Catchy blog title in Hinglish style")
    meta_description: str = Field(description="SEO meta description max 160 chars")
    headings: list[str] = Field(description="Main section headings (4-6 items)")
    sub_headings: dict[str, list[str]] = Field(
        description="Sub-sections under each heading. Keys match headings list"
    )
    estimated_read_time: int = Field(description="Minutes to read (5-15)")
    tags: list[str] = Field(description="5 relevant SEO tags")

# Pydantic se parser banao
parser = PydanticOutputParser(pydantic_object=BlogOutline)

# ── Step 3: Prompt Template ─────────────────────
# Format instructions parser auto-generate karta hai
prompt = PromptTemplate(
    template=(
        "You are an expert blog writer and content strategist.\n\n"
        "Generate a detailed blog outline for:\n"
        "Topic: {topic}\n"
        "Target Audience: {audience}\n"
        "Tone: {tone}\n\n"
        "{format_instructions}"
    ),
    input_variables=["topic", "audience", "tone"],
    partial_variables={
        "format_instructions": parser.get_format_instructions()
    },
)

# ── Step 4: LCEL Chain ──────────────────────────
# RunnablePassthrough — topic variable ko directly pass karo
# audience aur tone lambda functions se inject karo
chain = (
    {
        "topic": RunnablePassthrough(),
        "audience": lambda x: "Indian developers learning AI engineering",
        "tone": lambda x: "Hinglish, friendly, practical with examples",
    }
    | prompt
    | model
    | parser
)

# ── Step 5: Main Function ───────────────────────
def main():
    print("=" * 50)
    print("  🚀 Blog Outline Generator")
    print("=" * 50)

    # Input
    topic = input("\nBlog topic: ").strip()
    if not topic:
        topic = "LangChain for PHP developers"
        print(f"  (Using default: {topic})")

    # Generate
    print("\n⏳ Generating outline...\n")
    outline = chain.invoke(topic)

    # Display
    print("=" * 50)
    print(f"  📝 {outline.title}")
    print(f"  {outline.meta_description}")
    print(f"  ⏱ {outline.estimated_read_time} min read")
    print(f"  🏷️  {' | '.join(outline.tags)}")
    print("=" * 50)

    for heading in outline.headings:
        print(f"\n  📌 {heading}")
        subs = outline.sub_headings.get(heading, [])
        for sub in subs:
            print(f"      ▸ {sub}")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
```

### Running the Project

```bash
python blog_outline_generator.py
```

```
==================================================
  🚀 Blog Outline Generator
==================================================

Blog topic: PHP se AI Engineer kaise bane

==================================================
  📝 PHP Developer se AI Engineer: Complete Roadmap 2026
  PHP developers ke liye AI engineering ka practical roadmap in Hinglish
  ⏱ 12 min read
  🏷️  PHP | AI Engineering | Python | Machine Learning | Career
==================================================

  📌 Why AI Engineering for PHP Developers?
      ▸ Current market trends — AI jobs 300% growth
      ▸ PHP skills ka advantage — logic building already aati hai
      ▸ Transition roadmap — 6 months part-time

  📌 Python Basics for PHP Devs
      ▸ PHP vs Python syntax comparison
      ▸ Key differences: arrays, OOP, type hints
      ▸ pip vs composer jaisa hi hai

  📌 Machine Learning Fundamentals
      ▸ What is ML? (PHP dev perspective)
      ▸ Supervised vs Unsupervised (simple examples)
      ▸ Train your first model in 30 minutes

  📌 LangChain & LLM Apps
      ▸ LangChain kya hai? (Laravel pipelines jaisa)
      ▸ RAG architecture for document Q&A
      ▸ Build your first AI app

  📌 Deployment & Portfolio
      ▸ Docker deployment for AI apps
      ▸ Portfolio projects jo impress karein
      ▸ Interview preparation

✅ Done!
```

### Extension: Streaming Version

```python title="blog_outline_stream.py"
"""Streaming version — real-time outline generation"""

from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import JsonOutputParser

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7, streaming=True)

prompt = PromptTemplate(
    template="Generate a blog outline about {topic} in JSON format.\n"
             "Keys: title, headings (list), word_count (int)",
    input_variables=["topic"],
)

chain = prompt | model | JsonOutputParser()

# Stream
for chunk in chain.stream({"topic": "AI for PHP Developers"}):
    if isinstance(chunk, dict):
        print(f"Title: {chunk.get('title', '')}")
        print(f"Headings: {chunk.get('headings', [])}")
```

---

## Daily Practice Schedule

### Day 1: Theory & Setup
- [ ] LangChain ka concept samjho — why abstraction matters
- [ ] Virtual environment setup with requirements
- [ ] First ChatOpenAI call karo
- [ ] AIMessage object ke saare fields explore karo
- [ ] Temperature 0 vs 1 ka difference dekho

### Day 2: Model Exploration
- [ ] GPT-4o-mini, Claude, Llama — teeno try karo
- [ ] Har model se same question pucho, answers compare karo
- [ ] Token usage track karo (response_metadata)
- [ ] max_tokens limit ka effect dekho

### Day 3: Prompt Mastery
- [ ] 3 different PromptTemplate banao
- [ ] ChatPromptTemplate with system + human messages
- [ ] variables partial karo
- [ ] Few-shot prompting with 3+ examples
- [ ] Dynamic few-shot with SemanticSimilarityExampleSelector

### Day 4: Output Parsing
- [ ] StrOutputParser use karo
- [ ] CommaSeparatedListOutputParser try karo
- [ ] JsonOutputParser se dictionary nikalo
- [ ] PydanticOutputParser se 3-field model banake parse karo
- [ ] Ek custom parser likho

### Day 5: Streaming
- [ ] Basic streaming loop implement karo
- [ ] Async streaming try karo
- [ ] FastAPI mein streaming endpoint banao
- [ ] Callback-based streaming dekho

### Day 6: Project
- [ ] Blog outline generator run karo
- [ ] Different topics try karo
- [ ] Pydantic model mein 2 extra fields add karo
- [ ] Streaming version banao
- [ ] Apne portfolio topic ke saath test karo

---

## Common Mistakes (Yeh Mistakes Mat Karna)

### ❌ Mistake 1: API Key Hardcoding
```python
# BAD
api_key = "sk-xxxxx"  # Git mein commit ho jayega!

# GOOD
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
```

### ❌ Mistake 2: Temperature 0 for Creative Tasks
```python
# BAD: Har baar same outline generate hoga
model = ChatOpenAI(temperature=0)
chain.invoke("Blog outline AI")  # Same result
chain.invoke("Blog outline AI")  # Same result

# GOOD
model = ChatOpenAI(temperature=0.7)  # Creative variation
```

### ❌ Mistake 3: Prompt Overlooking Format Instructions
```python
# BAD: LLM ko nahi pata kaise output karna hai
prompt = PromptTemplate(
    template="Generate about {topic}",
    input_variables=["topic"],
)

# GOOD: Format instructions include karo
prompt = PromptTemplate(
    template="Generate about {topic}\n{format_instructions}",
    input_variables=["topic"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)
```

### ❌ Mistake 4: Ignoring Token Count
```python
# BAD: Koi limit nahi
model = ChatOpenAI()  # Default max_tokens = infinity
response = model.invoke("Write a very long story")
# Bill: $0.50 for one call!

# GOOD
model = ChatOpenAI(max_tokens=200)  # Limit fixed
response = model.invoke("Write a very long story")
# Same quality, less cost
```

### ❌ Mistake 5: Overlooking Batch Processing
```python
# BAD: Loop mein ek ek karke
topics = ["AI", "Python", "ML", "DL", "NLP"]
for topic in topics:
    result = chain.invoke({"topic": topic})
    # 5 API calls, 5x slower

# GOOD: Batch
results = chain.batch([{"topic": t} for t in topics])
# 1 API call (internally parallel), 5x faster
```

---

## PHP Developer Mental Model Summary

| PHP Concept | LangChain Equivalent |
|-------------|---------------------|
| Blade Template | `PromptTemplate` |
| Eloquent Model | `PydanticOutputParser` |
| Service Provider | `ChatOpenAI(model=...)` |
| Middleware Pipeline | LCEL `pipe operator (|)` |
| Queue Jobs | `batch()` method |
| Event Streaming | `stream()` method |
| Config(`config/app.php`) | `ChatPromptTemplate` system messages |
| Validation Request | `Pydantic` schema validation |
| Artisan Command | `chain.invoke()` |

---

## Summary Table

| Component | Purpose | Key Code |
|-----------|---------|----------|
| `ChatOpenAI` | LLM call karna | `ChatOpenAI(model="gpt-4o-mini")` |
| `PromptTemplate` | Dynamic prompts | `PromptTemplate(template=..., input_variables=[...])` |
| `ChatPromptTemplate` | Multi-message prompts | `ChatPromptTemplate.from_messages([...])` |
| `FewShotChatMessagePromptTemplate` | Example-based learning | `FewShotChatMessagePromptTemplate(examples=..., example_prompt=...)` |
| `StrOutputParser` | Raw string output | `model \| StrOutputParser()` |
| `CommaSeparatedListOutputParser` | List output | `model \| CommaSeparatedListOutputParser()` |
| `JsonOutputParser` | Dict output | `model \| JsonOutputParser()` |
| `PydanticOutputParser` | Typed structured output | `model \| PydanticOutputParser(pydantic_object=MyModel)` |
| `stream()` | Real-time output | `chain.stream({"input": "..."})` |
| `batch()` | Parallel processing | `chain.batch([{...}, {...}])` |
| LCEL `\|` | Chain composition | `prompt \| model \| parser` |

---

## Week 1 Project Checklist

- [ ] Blog outline generator successfully runs
- [ ] At least 3 different topics tested
- [ ] Pydantic model has 5+ fields
- [ ] Streaming output added
- [ ] Both OpenAI and Ollama tested
- [ ] Output saved to a JSON file
- [ ] Custom prompt template with 3+ variables
- [ ] batch() with 3+ topics tested

---

## Quick Reference: Common Patterns

```python
# Pattern 1: Simple Q&A
chain = prompt | model | StrOutputParser()

# Pattern 2: Structured Output
chain = prompt | model | PydanticOutputParser(pydantic_object=MyModel)

# Pattern 3: Multiple Fixed Values
chain = (
    {"input": RunnablePassthrough(), "lang": lambda x: "Hinglish"}
    | prompt | model | StrOutputParser()
)

# Pattern 4: Streaming
for chunk in chain.stream({"input": "Hello"}):
    print(chunk, end="", flush=True)

# Pattern 5: Batch Processing
results = chain.batch([{"input": q} for q in questions])

# Pattern 6: Dynamic Few-shot
chain = final_prompt | model | StrOutputParser()
```

---

**Agle week:** Chains, Memory, aur Document Loaders — multi-step AI workflows banayenge.
