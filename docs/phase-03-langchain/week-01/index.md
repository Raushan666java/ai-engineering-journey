# Week 1 — LangChain Core

**Goal:** LangChain ke basic building blocks samajhna — models, prompts, parsers, chains, memory
**Project:** Blog outline generator using LCEL

---

## 1. Setup

```bash
pip install langchain langchain-openai python-dotenv pydantic
```

```env title=".env"
OPENAI_API_KEY=sk-your-key-here
```

```python
from dotenv import load_dotenv
load_dotenv()
```

---

## 2. Chat Models

### ChatOpenAI — OpenAI ka model use karo

```python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini")

# Direct call
response = model.invoke("India ka capital kya hai?")
print(response.content)
# Output: India ka capital New Delhi hai.
```

### ChatOllama — Local model (free)

```python
from langchain_ollama import ChatOllama

model = ChatOllama(model="llama3")
response = model.invoke("What is RAG in AI?")
print(response.content)
```

!!! tip "Local vs Cloud"
    Agar API key nahi hai, toh Ollama use karo. Same interface. Bas model name change.

---

## 3. Prompt Templates

Hardcoded prompts gande hote hain. Templates use karo.

```python
from langchain_core.prompts import ChatPromptTemplate

# Simple template
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant that speaks Hinglish."),
    ("human", "{input}")
])

chain = prompt | model
result = chain.invoke({"input": "Python mein list comprehension kya hai?"})
print(result.content)
```

### Multiple message types

```python
from langchain_core.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)

system = SystemMessagePromptTemplate.from_template(
    "You are a {role}. Answer in Hinglish."
)
human = HumanMessagePromptTemplate.from_template("{question}")

prompt = ChatPromptTemplate.from_messages([system, human])

chain = prompt | model
result = chain.invoke({
    "role": "Python expert",
    "question": "What is a decorator?"
})
print(result.content)
```

### Few-shot prompting

```python
from langchain_core.prompts import FewShotChatMessagePromptTemplate

examples = [
    {"input": "2+2", "output": "4"},
    {"input": "10-3", "output": "7"},
]

example_prompt = ChatPromptTemplate.from_messages([
    ("human", "{input}"),
    ("ai", "{output}"),
])

few_shot = FewShotChatMessagePromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
)

final_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a math expert."),
    few_shot,
    ("human", "{input}"),
])

chain = final_prompt | model
print(chain.invoke({"input": "5*5"}).content)
# Output: 25
```

---

## 4. Output Parsers

Model jo bhi bole, parse karo structured format mein.

### StrOutputParser — Direct string

```python
from langchain_core.output_parsers import StrOutputParser

chain = prompt | model | StrOutputParser()
result = chain.invoke({"input": "Hello!"})
print(result)  # Direct string, no .content needed
```

### CommaSeparatedListOutputParser — List chahiye

```python
from langchain_core.output_parsers import CommaSeparatedListOutputParser
from langchain_core.prompts import PromptTemplate

parser = CommaSeparatedListOutputParser()

prompt = PromptTemplate(
    template="List 5 {topic}.\n{format_instructions}",
    input_variables=["topic"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = prompt | model | parser
result = chain.invoke({"topic": "Indian cities"})
print(result)
# Output: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
```

### PydanticOutputParser — Structured JSON

```python
from pydantic import BaseModel, Field
from langchain_core.output_parsers import PydanticOutputParser

class BlogOutline(BaseModel):
    title: str = Field(description="Blog ka title")
    headings: list[str] = Field(description="List of section headings")
    word_count: int = Field(description="Estimated word count")

parser = PydanticOutputParser(pydantic_object=BlogOutline)

prompt = PromptTemplate(
    template="Generate a blog outline about {topic}.\n{format_instructions}",
    input_variables=["topic"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = prompt | model | parser
result = chain.invoke({"topic": "AI in healthcare"})
print(f"Title: {result.title}")
print(f"Headings: {result.headings}")
print(f"Words: {result.word_count}")
```

---

## 5. Chains

### LLMChain (Simplest)

```python
from langchain.chains import LLMChain

chain = LLMChain(
    llm=model,
    prompt=ChatPromptTemplate.from_template("Tell me about {topic}"),
)
result = chain.run(topic="black holes")
print(result)
```

!!! warning "LLMChain is Legacy"
    LLMChain ab old style hai. LCEL prefer karo (→ aage dekho).

### SimpleSequentialChain — Ek ke baad ek

```python
from langchain.chains import SimpleSequentialChain

chain1 = LLMChain(
    llm=model,
    prompt=PromptTemplate.from_template("Write a joke about {topic}"),
)

chain2 = LLMChain(
    llm=model,
    prompt=PromptTemplate.from_template("Rate this joke from 1-10: {joke}"),
)

overall = SimpleSequentialChain(chains=[chain1, chain2], verbose=True)
result = overall.run("programmers")
print(result)
# Joke generate hua → uski rating aayi
```

### SequentialChain — Multiple inputs/outputs

```python
from langchain.chains import SequentialChain

chain1 = LLMChain(
    llm=model,
    prompt=PromptTemplate.from_template(
        "Write a short story about {topic} in {language}"
    ),
    output_key="story",
)

chain2 = LLMChain(
    llm=model,
    prompt=PromptTemplate.from_template(
        "Summarize this story in 2 lines: {story}"
    ),
    output_key="summary",
)

chain = SequentialChain(
    chains=[chain1, chain2],
    input_variables=["topic", "language"],
    output_variables=["story", "summary"],
)

result = chain.invoke({
    "topic": "a wise elephant",
    "language": "Hinglish",
})
print("Story:", result["story"])
print("Summary:", result["summary"])
```

### RouterChain — Topic ke hisaab se route

```python
from langchain.chains.router import LLMRouterChain
from langchain.chains.router.llm_router import RouterOutputParser

physics_prompt = PromptTemplate.from_template(
    "You are a physics expert. Answer: {input}"
)
math_prompt = PromptTemplate.from_template(
    "You are a math expert. Answer: {input}"
)

chains = [
    {"name": "physics", "description": "Good for physics questions", "prompt": physics_prompt},
    {"name": "math", "description": "Good for math questions", "prompt": math_prompt},
]

# Router chain banega jo decide karega kaunsa chain use karna hai
# Practical implementation complex hai — LCEL mein better karenge
```

---

## 6. Memory

Chatbot banate ho toh past yaad rakhna padega.

### ConversationBufferMemory

```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()

chain = ConversationChain(
    llm=model,
    memory=memory,
    verbose=True,
)

print(chain.predict(input="Hi, mein Raushan hoon"))
print(chain.predict(input="Mera naam kya hai?"))
# Output: Aapka naam Raushan hai! ✅
```

### ConversationSummaryMemory

Buffer memory sab kuch store karta hai → token zyada lagte hain.
Summary memory sirf summary store karti hai.

```python
from langchain.memory import ConversationSummaryMemory

memory = ConversationSummaryMemory(llm=model)
chain = ConversationChain(llm=model, memory=memory, verbose=True)

print(chain.predict(input="Mujhe Python seekhna hai"))
print(chain.predict(input="Kaunsa framework best hai?"))
print(chain.predict(input="Pehle kya pucha tha?"))
# Memory call nahi karega, summary regenerate karega
```

---

## 7. LCEL — LangChain Expression Language

**LCEL = The Pipe Operator (`|`)**

LCEL is the modern way to compose LangChain components. Chain = prompt | model | parser.

```python
# LCEL ka magic
chain = prompt_template | model | StrOutputParser()

# Under the hood yeh RunnableSequence bana raha hai
# Har component Runnable interface implement karta hai
```

### Why LCEL?

| Feature | Old Way | LCEL Way |
|---------|---------|----------|
| Chain banana | `LLMChain(llm=..., prompt=...)` | `prompt \| model` |
| Output parse | alag se call | `prompt \| model \| parser` |
| Streaming | alag logic | built-in |
| Async | alag implementation | built-in |
| Batch | loop | `.batch()` |
| Parallel | complex | `.map()` |

### Real examples

```python
# Chaining with LCEL
from operator import itemgetter

chain = (
    {"topic": itemgetter("topic")}
    | prompt
    | model
    | StrOutputParser()
)

# Ya directly:
chain = prompt | model | StrOutputParser()

# Batch processing
topics = ["AI", "Python", "Blockchain"]
results = chain.batch([{"topic": t} for t in topics])
for topic, result in zip(topics, results):
    print(f"{topic}: {result[:50]}...")
```

### RunnablePassthrough — for routing

```python
from langchain_core.runnables import RunnablePassthrough

# Jab data ko chain ke through bhejna ho bina change kiye
chain = (
    {"input": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)

# Ya multiple values pass karna ho
chain = (
    {"context": itemgetter("context"), "question": itemgetter("question")}
    | prompt
    | model
    | StrOutputParser()
)
```

### RunnableParallel — Parallel execution

```python
from langchain_core.runnables import RunnableParallel

chain1 = prompt1 | model | StrOutputParser()
chain2 = prompt2 | model | StrOutputParser()

combined = RunnableParallel(chain1=chain1, chain2=chain2)
result = combined.invoke({"topic": "Python"})
print(result["chain1"])
print(result["chain2"])
```

---

## 8. Streaming

Real-time output dikhani hai? LCEL mein built-in hai.

```python
# Streaming tokens in real-time
for chunk in chain.stream({"topic": "AI in healthcare"}):
    print(chunk, end="", flush=True)

# Agar normal chain hai toh async bhi kar sakte ho
async for chunk in chain.astream({"topic": "Machine Learning"}):
    print(chunk, end="", flush=True)
```

---

## Week 1 Project: Blog Outline Generator

LCEL ka use karke ek blog outline generator banayenge.

```python title="blog_outline_generator.py"
import os
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)


class BlogOutline(BaseModel):
    title: str = Field(description="Catchy blog title")
    meta_description: str = Field(description="SEO meta description in 160 chars")
    headings: list[str] = Field(description="Main section headings")
    sub_headings: dict[str, list[str]] = Field(
        description="Sub-sections under each heading"
    )
    estimated_read_time: int = Field(description="Minutes to read")
    tags: list[str] = Field(description="5 relevant tags")


parser = PydanticOutputParser(pydantic_object=BlogOutline)

prompt = PromptTemplate(
    template=(
        "You are an expert blog writer. Generate a detailed blog outline.\n\n"
        "Topic: {topic}\n"
        "Target Audience: {audience}\n"
        "Tone: {tone}\n\n"
        "{format_instructions}"
    ),
    input_variables=["topic", "audience", "tone"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = (
    {
        "topic": RunnablePassthrough(),
        "audience": lambda x: "Indian developers learning AI",
        "tone": lambda x: "Hinglish, friendly, practical",
    }
    | prompt
    | model
    | parser
)


def main():
    print("🚀 Blog Outline Generator\n")

    topic = input("Blog topic: ").strip()
    if not topic:
        topic = "LangChain for beginners"

    print("\n⏳ Generating outline...\n")

    outline = chain.invoke(topic)

    print(f"📝 {outline.title}")
    print(f"   {outline.meta_description}")
    print(f"   ⏱ {outline.estimated_read_time} min read")
    print(f"   🏷 {' | '.join(outline.tags)}\n")

    for heading in outline.headings:
        print(f"  • {heading}")
        sub = outline.sub_headings.get(heading, [])
        for s in sub:
            print(f"      - {s}")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
```

### Run karo:

```bash
python blog_outline_generator.py
```

```
🚀 Blog Outline Generator

Blog topic: Python generators

📝 Python Generators Samajhna: Beginner se Pro Tak
   Learn Python generators with practical examples in Hinglish
   ⏱ 8 min read
   🏷 Python | Generators | Memory Optimization | Iterators | Coding

  • Generators Kya Hain?
      - Problem: List memory kahan kha jati hai
      - Solution: yield keyword ka magic
  • Real Life Examples
      - File reading with generators
      - Infinite sequences
  ...
```

---

## Summary

| Concept | Use Case | LCEL Equivalent |
|---------|----------|-----------------|
| ChatOpenAI | LLM call | `ChatOpenAI()` |
| PromptTemplate | Dynamic prompts | `template \| model` |
| StrOutputParser | String output | `model \| StrOutputParser()` |
| PydanticOutputParser | Structured output | `model \| PydanticOutputParser()` |
| RunnablePassthrough | Pass data through | `itemgetter()` |
| RunnableParallel | Parallel execution | `RunnableParallel()` |
| Memory | Chat history | ConversationBufferMemory |

---

## Practice Tasks

- [ ] ChatOpenAI aur ChatOllama dono try karo
- [ ] 3 different prompt templates banao
- [ ] PydanticOutputParser se structured output lo
- [ ] SequentialChain se story → translation pipeline banao
- [ ] LCEL se ek chain banao jo parallel mein 2 prompts run kare
- [ ] Streaming output try karo
- [ ] Blog outline generator customize karo — apne topic ke saath

---
**Agle week:** RAG basics — documents ko connect karenge LLM se.
