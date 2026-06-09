# Week 2 — Chains, Memory & Document Loaders

**Goal:** Multi-step AI workflows banana — chains, memory, aur document processing seekhna
**Target Audience:** Laravel/PHP developer transitioning to AI Engineering
**Project:** PDF Q&A Bot with conversation memory

---

## Day 1: Chains — AI Workflows Ka Foundation

### Chain Kya Hai?

PHP mein tum multiple functions ko ek pipeline mein jodte ho:

```php
// PHP pipeline
$request = validate($request);           // Step 1
$data = process($request);               // Step 2
$response = formatResponse($data);       // Step 3
return $response;                         // Step 4
```

LangChain ka **Chain** exactly yahi hai — multiple LLM operations ko ek sequence mein jodna. Ek chain ka output doosre chain ka input ban sakta hai.

```python
# LangChain pipeline
result = prompt | model | parser
# Step 1      Step 2    Step 3
```

### Types of Chains

```
┌─────────────────────────────────────────────────────────────┐
│                        CHAINS                                │
│                                                              │
│  LLMChain          SequentialChain       RouterChain         │
│  ┌──────────┐     ┌──────────┐          ┌──────────┐        │
│  │ Prompt→  │     │ Chain1  │          │ Router  │─────▶Physics│
│  │ Model→   │     │   ↓     │          │ LLM     │─────▶Math  │
│  │ Output   │     │ Chain2  │          │ Decide  │─────▶Chem │
│  └──────────┘     └──────────┘          └──────────┘        │
│                                                              │
│  Simple call       Multiple steps        Dynamic routing     │
└─────────────────────────────────────────────────────────────┘
```

---

## Day 2: LLMChain — The Simplest Chain

### LLMChain Deep Dive

```python
from langchain.chains import LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

# LLMChain — prompt + model ka wrapper
chain = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Tell me a {adjective} joke about {topic}.",
        input_variables=["adjective", "topic"],
    ),
    verbose=True,  # Chain ke steps console mein dikhenge
)

# Method 1: run() — legacy
result = chain.run(adjective="funny", topic="programmers")
print(result)

# Method 2: invoke() — modern (recommended)
result = chain.invoke({
    "adjective": "funny",
    "topic": "programmers",
})
print(result["text"])  # invoke returns dict with "text" key

# Method 3: predict() — keval inputs
result = chain.predict(adjective="silly", topic="dogs")
print(result)
```

### LLMChain Internals

```python
# Ye sab same hai:
# LLMChain class ke andar kya hota hai?

class LLMChainInternal:
    """Conceptual — real code nahi hai yeh"""
    def __init__(self, llm, prompt):
        self.llm = llm
        self.prompt = prompt

    def invoke(self, inputs):
        # Step 1: Prompt format karo
        formatted_prompt = self.prompt.format(**inputs)

        # Step 2: LLM ko bhejo
        raw_response = self.llm.invoke(formatted_prompt)

        # Step 3: Output wrap karo
        return {"text": raw_response.content}

# Isiliye LLMChain invoke() par dict leta hai aur dict return karta hai
```

### PHP Developer Connection

```php
// Laravel mein aisa hota:
class JokeChain {
    protected $llm;  // ChatGPT client
    protected $prompt;  // Template string

    public function generate($adjective, $topic) {
        $prompt = str_replace(
            ['{adjective}', '{topic}'],
            [$adjective, $topic],
            $this->prompt
        );
        return $this->llm->ask($prompt);
    }
}
// LLMChain same pattern follow karta hai!
```

### Practical Example: Translation Chain

```python
from langchain.chains import LLMChain
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

# Translation chain — ek input, ek output
translate_chain = LLMChain(
    llm=model,
    prompt=ChatPromptTemplate.from_messages([
        ("system", "You are a translator. Translate {source_lang} to {target_lang}."),
        ("human", "{text}"),
    ]),
    output_key="translation",  # Output key name
)

result = translate_chain.invoke({
    "source_lang": "English",
    "target_lang": "Hinglish",
    "text": "Hello, how are you?",
})
print(result["translation"])
# Output: "Namaste, aap kaise hain?"
```

---

## Day 3: Sequential Chains — Ek Ke Baad Ek

### SimpleSequentialChain — Single Input/Output

```python
from langchain.chains import SimpleSequentialChain, LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

# Chain 1: Joke generate karo
chain1 = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Write a funny joke about {topic}.",
        input_variables=["topic"],
    ),
    verbose=True,
)

# Chain 2: Joke ko Hindi mein translate karo
chain2 = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Translate this joke to Hindi: {joke}",
        input_variables=["joke"],
    ),
    verbose=True,
)

# SimpleSequentialChain — ek chain ka output directly doosre mein jata hai
overall = SimpleSequentialChain(
    chains=[chain1, chain2],
    verbose=True,  # Har step ka output dikhega
)

# Run: "programmers" → chain1 → joke → chain2 → Hindi joke
result = overall.run("programmers")
print(result)
```

**Flow diagram:**
```
Input: "programmers"
    ↓
Chain 1: "Write a joke about programmers"
    ↓ "Why do programmers prefer dark mode? Because light attracts bugs!"
Chain 2: "Translate to Hindi"
    ↓ "प्रोग्रामर डार्क मोड क्यों पसंद करते हैं? क्योंकि रोशनी बग्स को आकर्षित करती है!"
Output: Hindi joke
```

### SequentialChain — Multiple Inputs/Outputs

```python
from langchain.chains import SequentialChain, LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.5)

# Chain 1: Story likho
chain1 = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Write a {length} story about {topic} in {language}.",
        input_variables=["length", "topic", "language"],
    ),
    output_key="story",  # Important: output ko naam do
    verbose=True,
)

# Chain 2: Story ko summarize karo
chain2 = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Summarize this story in 2 bullet points:\n\n{story}",
        input_variables=["story"],
    ),
    output_key="summary",
    verbose=True,
)

# Chain 3: Moral of the story
chain3 = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="What is the moral of this story?\n\n{story}\n\nMoral:",
        input_variables=["story"],
    ),
    output_key="moral",
    verbose=True,
)

# SequentialChain — multiple outputs preserve karta hai
overall = SequentialChain(
    chains=[chain1, chain2, chain3],
    input_variables=["length", "topic", "language"],
    output_variables=["story", "summary", "moral"],
    verbose=True,
)

result = overall.invoke({
    "length": "short",
    "topic": "a clever fox",
    "language": "Hinglish",
})

print("\n📖 Story:")
print(result["story"])
print("\n📝 Summary:")
print(result["summary"])
print("\n💡 Moral:")
print(result["moral"])
```

**Key difference:**
```
SimpleSequentialChain: input → A → B → C → output
    (Har chain ka output agle chain ka input)
    
SequentialChain: input → A → {story} → B → {summary}
                                       → C → {moral}
    (Multiple outputs preserve, selective routing)
```

### PHP Mental Model

```php
// SimpleSequentialChain jaisa:
$result = step1($input);     // Chain 1
$result = step2($result);    // Chain 2 — previous ka output
$result = step3($result);    // Chain 3
return $result;
// Ek pipeline, ek data flow

// SequentialChain jaisa:
$data = ['topic' => 'fox', 'length' => 'short'];
$data['story'] = step1($data);     // New output
$data['summary'] = step2($data);   // Previous outputs bhi available
$data['moral'] = step3($data);     // Selective use
return $data;
// Shared state, multiple outputs
```

### Practical: Blog Post Pipeline

```python
"""Blog post generation pipeline — PHP developers ke liye example"""

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

# Step 1: Title generate karo
title_chain = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Generate a catchy blog title about {topic} for {audience}.\n"
                 "Title should be in Hinglish style.",
        input_variables=["topic", "audience"],
    ),
    output_key="title",
)

# Step 2: Outline banao
outline_chain = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Create a blog outline for:\nTitle: {title}\nTopic: {topic}\n"
                 "Include 4-6 sections with brief descriptions.",
        input_variables=["title", "topic"],
    ),
    output_key="outline",
)

# Step 3: Introduction likho
intro_chain = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Write an engaging introduction for this blog:\n"
                 "Title: {title}\nOutline: {outline}\n\n"
                 "Hook the reader in first paragraph.",
        input_variables=["title", "outline"],
    ),
    output_key="introduction",
)

# Step 4: Meta description
meta_chain = LLMChain(
    llm=model,
    prompt=PromptTemplate(
        template="Write an SEO meta description (max 160 chars) for:\n"
                 "Title: {title}",
        input_variables=["title"],
    ),
    output_key="meta_description",
)

# Combine
blog_pipeline = SequentialChain(
    chains=[title_chain, outline_chain, intro_chain, meta_chain],
    input_variables=["topic", "audience"],
    output_variables=["title", "outline", "introduction", "meta_description"],
    verbose=True,
)

result = blog_pipeline.invoke({
    "topic": "LangChain for beginners",
    "audience": "PHP developers",
})
print(f"Title: {result['title']}\n")
print(f"Intro: {result['introduction'][:200]}...")
```

---

## Day 4: RouterChain — Smart Routing

### RouterChain kyun chahiye?

Jab user ka question different domains se ho sakta hai — physics, math, history, coding — toh ek hi chain sab kuch nahi kar sakta. RouterChain decide karta hai ki kaunsa specialized chain use karna hai.

```
User Question: "Black hole kya hai?"
    ↓
┌──────────────────┐
│  Router LLM      │ ← Decide karega: physics, math, ya general?
│  (Small, fast)   │
└──────┬───────────┘
       │
  ┌────┴────┬─────────┬──────────┐
  ▼         ▼         ▼          ▼
Physics   Math     History    General
Chain     Chain    Chain      Chain
  ▼         ▼         ▼          ▼
Answer   Answer    Answer     Answer
```

### Implementation

```python
from langchain.chains.router import LLMRouterChain
from langchain.chains.router.llm_router import RouterOutputParser
from langchain.chains.router.multi_prompt_prompt import MULTI_PROMPT_ROUTER_TEMPLATE
from langchain.chains import LLMChain, ConversationChain
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# ── Specialized prompts ──────────────────────

physics_prompt = PromptTemplate(
    template="You are a physics professor. Explain in simple Hinglish.\n{input}",
    input_variables=["input"],
)

math_prompt = PromptTemplate(
    template="You are a math tutor. Show step-by-step solution in Hinglish.\n{input}",
    input_variables=["input"],
)

history_prompt = PromptTemplate(
    template="You are a history expert. Provide accurate dates and context in Hinglish.\n{input}",
    input_variables=["input"],
)

coding_prompt = PromptTemplate(
    template="You are a senior developer. Give code examples in Hinglish.\n{input}",
    input_variables=["input"],
)

# ── Destination chains ───────────────────────

destinations = [
    {
        "name": "physics",
        "description": "Good for answering questions about physics concepts",
        "prompt": physics_prompt,
    },
    {
        "name": "math",
        "description": "Good for answering math problems and calculations",
        "prompt": math_prompt,
    },
    {
        "name": "history",
        "description": "Good for historical events and dates",
        "prompt": history_prompt,
    },
    {
        "name": "coding",
        "description": "Good for programming questions",
        "prompt": coding_prompt,
    },
]

# ── Router chain ─────────────────────────────

router_chain = LLMRouterChain.from_prompts(
    llm=model,
    prompt=MULTI_PROMPT_ROUTER_TEMPLATE,
    destinations=destinations,
    router_parser=RouterOutputParser(),
)

# ── Use ──────────────────────────────────────

def route_question(question: str) -> str:
    """Question ko appropriate chain par route karo"""
    result = router_chain.invoke({"input": question})
    
    # Router returns destination name
    destination = result["destination"]
    if destination == "DEFAULT":
        # Fallback — koi specific chain nahi mila
        return model.invoke(question).content
    
    # Selected chain se answer do
    selected_prompt = next(
        d["prompt"] for d in destinations if d["name"] == destination
    )
    chain = LLMChain(llm=model, prompt=selected_prompt)
    return chain.run(question)

# Test
questions = [
    "Black hole kya hota hai?",
    "25 * 48 kaise solve karein?",
    "Akbar the Great kaun tha?",
    "Python list comprehension kya hai?",
]

for q in questions:
    print(f"\nQ: {q}")
    print(f"A: {route_question(q)}")
```

### RouterChain Limitations

```python
# RouterChain ke issues:
# 1. Legacy code — ab LCEL prefer karte hain
# 2. Router LLM bhi ek API call hai → latency + cost
# 3. Fixed destinations — runtime mein change nahi kar sakte
# 4. Better alternatives: LangGraph conditional edges (Week 3)

# Modern replacement: RunnableBranch
from langchain_core.runnables import RunnableBranch

branch = RunnableBranch(
    (lambda x: "physics" in x, physics_chain),
    (lambda x: "math" in x, math_chain),
    default_chain,  # Fallback
)

result = branch.invoke("What is gravity?")
# Physics chain select hoga because "physics" keyword
```

---

## Day 5: Memory — LLMs Ko Past Yaad Dilana

### Why Memory?

Har LLM call stateless hoti hai — model bhool jaata hai ki tumne pehle kya kaha. Memory is problem solve karti hai.

```
Without Memory:
User: "Mera naam Raushan hai"
AI: "Namaste Raushan!"
User: "Mera naam kya hai?"
AI: "Mujhe nahi pata, aapne nahi bataya" ❌

With Memory:
User: "Mera naam Raushan hai"
AI: "Namaste Raushan!"
User: "Mera naam kya hai?"
AI: "Aapka naam Raushan hai!" ✅
```

### Memory Types

```
┌──────────────────────────────────────────────────────────┐
│                      MEMORY TYPES                         │
│                                                           │
│  BufferMemory      SummaryMemory      VectorStoreMemory   │
│  ┌──────────┐     ┌──────────┐       ┌──────────┐        │
│  │ Full     │     │ Summary  │       │ Semantic │        │
│  │ History  │     │ + Key    │       │ Search   │        │
│  │ Store    │     │ Points   │       │ Based    │        │
│  └──────────┘     └──────────┘       └──────────┘        │
│                                                           │
│  Pros: Simple    Pros: Token save   Pros: Scalable       │
│  Cons: Expensive Cons: Loses detail Cons: Complex        │
└──────────────────────────────────────────────────────────┘
```

### ConversationBufferMemory — Full History

```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

# Memory buffer — full conversation store karta hai
memory = ConversationBufferMemory()

chain = ConversationChain(
    llm=model,
    memory=memory,
    verbose=True,  # Prompt + response console mein dekho
)

# Conversation
print(chain.predict(input="Hi! Mera naam Raushan hai"))
print(chain.predict(input="Main PHP developer hoon"))
print(chain.predict(input="Mera naam kya hai?"))
# ✅ Raushan
print(chain.predict(input="Mera profession kya hai?"))
# ✅ PHP developer

# Memory ka content dekho
print(memory.buffer)
# Human: Hi! Mera naam Raushan hai
# AI: Namaste Raushan!...
# Human: Main PHP developer hoon
# AI: Aap PHP developer hain...
```

### ConversationBufferWindowMemory — Limited Window

```python
from langchain.memory import ConversationBufferWindowMemory

# Sirf last k=2 turns yaad rakhega
window_memory = ConversationBufferWindowMemory(k=2)

chain = ConversationChain(
    llm=model,
    memory=window_memory,
    verbose=True,
)

chain.predict(input="Hi! Mein Raushan hoon")
chain.predict(input="Main PHP developer hoon")
chain.predict(input="Mujhe Python seekhna hai")
chain.predict(input="Mera naam kya hai?")
# ❌ Bhool gaya — kyunki sirf last 2 turns yaad hai
# "Python" aur "seekhna" yaad hai, "Raushan" bhool gaya

# Window memory tab use karo jab:
# - Token cost control karni ho
# - Sirf recent context relevant ho
# - Chatbot mein recent conversation hi matter karta ho
```

### ConversationSummaryMemory — Smart Memory

```python
from langchain.memory import ConversationSummaryMemory

# Pura history nahi, sirf summary rakhta hai
summary_memory = ConversationSummaryMemory(llm=model)

chain = ConversationChain(
    llm=model,
    memory=summary_memory,
    verbose=True,
)

chain.predict(input="Hi! Mera naam Raushan hai")
chain.predict(input="Main PHP developer hoon, 5 saal ka experience")
chain.predict(input="Mujhe Python aur AI seekhna hai")
chain.predict(input="Mera naam kya hai?")
# ✅ Yaad hai — summary mein store hua
# (Lekin details thodi blur ho sakti hain)
```

**Comparison:**
```
BufferMemory after 10 turns:
    "Human: Hi\nAI: Hello\nHuman: Name is X\nAI: Hi X\nHuman: I work at Y\n..." 
    → ~2000 tokens, $0.003 cost

SummaryMemory after 10 turns:
    "User ka naam X hai aur wo Y mein kaam karta hai. Wo AI seekh raha hai."
    → ~50 tokens, $0.0001 cost
    
BufferMemory = Laravel query log (pura detail)
SummaryMemory = Database summary table (compressed)
```

### ConversationSummaryBufferMemory — Best of Both

```python
from langchain.memory import ConversationSummaryBufferMemory

# max_token_limit ke baad automatically summarize karta hai
smart_memory = ConversationSummaryBufferMemory(
    llm=model,
    max_token_limit=100,  # 100 tokens ke baad summarization start
)

chain = ConversationChain(
    llm=model,
    memory=smart_memory,
    verbose=True,
)

# Chhoti conversation → buffer mein
# Lambi conversation → summary mein convert
```

### VectorStoreMemory — Semantic Search Based Memory

```python
from langchain.memory import VectorStoreRetrieverMemory
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings

# Vector store — embeddings based memory
embeddings = OpenAIEmbeddings()
vector_store = Chroma(embedding_function=embeddings)

# Retriever memory — semantically similar past conversations retrieve karega
vector_memory = VectorStoreRetrieverMemory(
    retriever=vector_store.as_retriever(search_kwargs={"k": 2}),
    memory_key="relevant_history",
)

# Save context
vector_memory.save_context(
    {"input": "Mera naam Raushan hai aur main AI engineer hoon"},
    {"output": "Great! Aap AI engineer ho"},
)
vector_memory.save_context(
    {"input": "Mujhe Python pasand hai"},
    {"output": "Python best language hai AI ke liye"},
)

# Query — semantically related context retrieve hoga
relevant = vector_memory.load_memory_variables(
    {"input": "Mera profession kya hai?"}
)
print(relevant)
# → Raushan AI engineer ke baare mein info milegi
# (kyunki "profession" semantically "AI engineer" se related hai)
```

### Memory in Production

```python
# Real application mein memory kaise use karein

class ChatbotWithMemory:
    def __init__(self, model, memory_type="buffer"):
        self.model = model

        if memory_type == "buffer":
            self.memory = ConversationBufferMemory()
        elif memory_type == "summary":
            self.memory = ConversationSummaryMemory(llm=model)
        elif memory_type == "window":
            self.memory = ConversationBufferWindowMemory(k=5)
        else:
            raise ValueError(f"Unknown memory: {memory_type}")

        self.chain = ConversationChain(
            llm=model,
            memory=self.memory,
            verbose=False,
        )

    def chat(self, message: str) -> str:
        return self.chain.predict(input=message)

    def get_history(self) -> str:
        return self.memory.buffer

    def clear(self):
        self.memory.clear()


bot = ChatbotWithMemory(ChatOpenAI(model="gpt-4o-mini", temperature=0.7))

print(bot.chat("Hi!"))
print(bot.chat("Mera naam Raushan hai"))
print(bot.chat("Main AI seekh raha hoon"))
print(bot.chat("Mera naam kya hai?"))  # ✅ Still remembers
bot.clear()
print(bot.chat("Mera naam kya hai?"))  # ❌ Bhool gaya (cleared)
```

### PHP Developer Mental Model

```php
// PHP Session jaisa:
// $_SESSION['chat_history'] .= "User: $msg\nAI: $response\n";
// ConversationBufferMemory = $_SESSION with full history

// PHP Cache jaisa:
// $summary = summarize($full_history);
// $_SESSION['summary'] = $summary;
// ConversationSummaryMemory = summarized cache

// PHP Elasticsearch jaisa:
// $relevant = $elastic->search(query: $question, index: 'chat_history');
// VectorStoreMemory = semantic search over past conversations
```

---

## Day 6: Document Loaders — Data Ko LLM Mein Feed Karna

### Why Document Loaders?

LLM ko external documents se data feed karna hota hai. Lekin har file type ka format alag hota hai — PDF, Word, CSV, Web pages. Document loaders sabko standard `Document` object mein convert karte hain.

```
File Types:
┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐
│  PDF   │   │  Word  │   │  CSV   │   │  Text  │   │  Web   │
└───┬────┘   └───┬────┘   └───┬────┘   └───┬────┘   └───┬────┘
    │            │            │            │            │
    └────────────┴────────────┴────────────┴────────────┘
                        │
            ┌───────────▼───────────┐
            │   Document Object     │
            │   {                   │
            │     page_content: str,│
            │     metadata: dict    │
            │   }                   │
            └───────────────────────┘
```

### Document Object Structure

```python
from langchain_core.documents import Document

# Har loader ka output — Document object
doc = Document(
    page_content="Yeh document ka actual text hai...",
    metadata={
        "source": "report.pdf",     # File source
        "page": 1,                  # Page number
        "author": "Raushan",        # Custom metadata
    },
)

print(doc.page_content)  # Text content
print(doc.metadata)      # Dictionary — file info
print(doc.type)          # "Document"
```

### TextLoader — Simple Text Files

```python
from langchain_community.document_loaders import TextLoader

loader = TextLoader("notes.txt")
docs = loader.load()

# Single document
print(f"Total docs: {len(docs)}")
print(f"Content: {docs[0].page_content[:200]}")
print(f"Metadata: {docs[0].metadata}")
# {'source': 'notes.txt'}

# Encoding handle karo
loader = TextLoader("hindi_notes.txt", encoding="utf-8")
```

### PyPDFLoader — PDF Files

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("report.pdf")
docs = loader.load()

print(f"Total pages: {len(docs)}")
for i, doc in enumerate(docs[:3]):
    print(f"\n─── Page {i+1} ───")
    print(f"Content: {doc.page_content[:150]}")
    print(f"Metadata: {doc.metadata}")
    # {'source': 'report.pdf', 'page': 0}

# Ek saath saari pages
full_text = "\n".join(d.page_content for d in docs)
print(f"Full document: {len(full_text)} characters")
```

### CSVLoader — CSV Files

```python
from langchain_community.document_loaders import CSVLoader

# Har row ek document ban jayega
loader = CSVLoader("employees.csv")
docs = loader.load()

print(f"Total rows: {len(docs)}")
for doc in docs[:3]:
    print(f"\nRow content: {doc.page_content}")
    # "Name: Raushan, Age: 28, Department: Engineering"
    print(f"Source: {doc.metadata['source']}")

# Custom column delimiter
loader = CSVLoader("data.tsv", csv_kwargs={"delimiter": "\t"})
```

### WebBaseLoader — Web Pages

```python
from langchain_community.document_loaders import WebBaseLoader

# Web page se content extract karo
loader = WebBaseLoader("https://en.wikipedia.org/wiki/Artificial_intelligence")
docs = loader.load()

print(f"Content length: {len(docs[0].page_content)} characters")
print(f"Title from metadata: {docs[0].metadata.get('title', 'N/A')}")

# Multiple URLs
urls = [
    "https://en.wikipedia.org/wiki/Python_(programming_language)",
    "https://en.wikipedia.org/wiki/Machine_learning",
]
loader = WebBaseLoader(urls)
all_docs = loader.load()
print(f"Loaded {len(all_docs)} documents from {len(urls)} URLs")
```

### DirectoryLoader — Batch Processing

```python
from langchain_community.document_loaders import DirectoryLoader, TextLoader

# Poori directory load karo
loader = DirectoryLoader(
    path="./documents/",
    glob="**/*.txt",  # Pattern matching
    loader_cls=TextLoader,  # Kaunsa loader use karna hai
    show_progress=True,  # Progress bar
)
docs = loader.load()

print(f"Loaded {len(docs)} files")

# Ya multiple loaders mix karo
from langchain_community.document_loaders import PythonLoader

loader = DirectoryLoader(
    path="./code/",
    glob="**/*.py",
    loader_cls=PythonLoader,
    loader_kwargs={"encoding": "utf-8"},
)
code_docs = loader.load()
```

### UnstructuredFileLoader — Universal Loader

```python
from langchain_community.document_loaders import UnstructuredFileLoader

# Ek loader jo almost sab support karta hai
loader = UnstructuredFileLoader("document.pdf")
# PDF, Word, PowerPoint, Excel, images, HTML — sab kaam karta hai

# Different modes
loader = UnstructuredFileLoader(
    "presentation.pptx",
    mode="elements",  # Har element alag document
    # modes: "single" (default), "elements", "paged"
)
docs = loader.load()
print(f"Elements: {len(docs)}")
# Har paragraph, heading, image alag document mein
```

### Document Loader Comparison Table

| Loader | Use For | Metadata | Special Features |
|--------|---------|----------|-----------------|
| `TextLoader` | `.txt`, `.md`, `.log` | source | Encoding options |
| `PyPDFLoader` | `.pdf` | source, page | Page-wise splitting |
| `CSVLoader` | `.csv`, `.tsv` | source, row | Row-wise documents |
| `WebBaseLoader` | URLs | source, title | HTML extraction |
| `DirectoryLoader` | Batch files | source | Glob patterns |
| `Docx2txtLoader` | `.docx` | source | Word documents |
| `UnstructuredFileLoader` | Any file | source, filetype | Universal |
| `JSONLoader` | `.json` | source | Key-based extraction |

---

## Day 7: Text Splitters — Chunking Strategies

### Why Split?

LLMs ki context window limited hai. GPT-4o-mini: 128K tokens. Phir bhi, ek 500-page PDF nahi bhej sakte ek saath.

```python
# Bina split: 500 pages → Context overflow ❌
# Split ke saath: 500 pages → 1000 chunks → Sirf relevant chunks LLM ko

# Chunk size ka effect:
small_chunks = ["A", "B", "C", "D", "E"]    # 100 chars each — precise but isolated
medium_chunks = ["AB", "CD", "EF"]            # 500 chars each — balanced
large_chunks = ["ABCDE"]                       # 2000 chars — context-rich but expensive
```

### RecursiveCharacterTextSplitter — The Gold Standard

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Recommended — most use cases ke liye best
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # Characters per chunk
    chunk_overlap=50,     # Overlap — context continuity
    separators=["\n\n", "\n", ".", " ", ""],  # Split priority
    length_function=len,  # Kaise measure karein
)

# Documents split karo
with open("long_article.txt") as f:
    text = f.read()

chunks = splitter.split_text(text)           # Split raw text
# Ya split_documents for Document objects
# doc_chunks = splitter.split_documents(docs)

print(f"Original: {len(text)} chars")
print(f"Chunks: {len(chunks)}")
for i, chunk in enumerate(chunks[:3]):
    print(f"\nChunk {i+1} ({len(chunk)} chars):")
    print(chunk[:100] + "...")
```

**How RecursiveCharacterTextSplitter works:**

```
Input Text:
"Paragraph 1...\n\nParagraph 2...\n\nParagraph 3...\n\n..."

Step 1: "\n\n" se split karo
  → ["Paragraph 1...", "Paragraph 2...", "Paragraph 3...", ...]

Step 2: Agar koi chunk > chunk_size → "\n" se split karo
  → ["Sentence 1.", "Sentence 2.", "Sentence 3.", ...]

Step 3: Agar still too big → ". " se split karo
  → ["Clause 1.", "Clause 2.", "Clause 3.", ...]

Step 4: Last resort — character by character
  → ["A", "B", "C", ...]

Har step par overlap maintain karo
```

### Chunk Size Decision Guide

```python
# ── Small chunks (200-300 chars) ──
# Best for: Precise retrieval, FAQ
# Problem: Context lost ho sakta hai
small = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=30)

# ── Medium chunks (500-1000 chars) — RECOMMENDED ──
# Best for: General RAG, Q&A
# Balance of precision and context
medium = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)

# ── Large chunks (1500-2000 chars) ──
# Best for: Summarization, long-form analysis
# Better context, but more tokens = more cost
large = RecursiveCharacterTextSplitter(chunk_size=1500, chunk_overlap=150)

# ── Rule of thumb ──
# Chunk size = 2x the length of typical answer
# Agar answer 1 paragraph hai → chunk_size = 500-1000
```

### Overlap Ka Importance

```python
# Overlap ke bina context gap:
text = "Raushan ne Python mein project banaya. Yeh project AI ka tha."
# Chunk 1: "Raushan ne Python mein project banaya."
# Chunk 2: "Yeh project AI ka tha."
# Query: "Kaunsa language use hui?" → Chunk 1 match hoga ✅
# Query: "Project kya tha?" → Chunk 2 match hoga ✅
# Dono chunks alag, koi problem nahi.

text_with_gap = "Invoice number INV-2024-001 hai. Yeh GST compliant hai."
# Chunk 1: "Invoice number INV-2024-001 hai."
# Chunk 2: "Yeh GST compliant hai."
# Query: "Invoice ka number kya hai aur GST compliant hai?" 
# → Sirf half answer milega ❌

# Overlap solution:
text = "Invoice number INV-2024-001 hai. Yeh GST compliant hai."
# Chunk 1: "Invoice number INV-2024-001 hai. Yeh GST"
# Chunk 2: "INV-2024-001 hai. Yeh GST compliant hai."
# Query: "Invoice details batao" → Dono chunks match ✅
```

### TokenTextSplitter — Token-Aware Splitting

```python
from langchain_text_splitters import TokenTextSplitter

# Characters nahi, tokens count karta hai
# OpenAI ke 1 token ≈ 0.75 words (English)
token_splitter = TokenTextSplitter(
    chunk_size=200,     # 200 tokens per chunk
    chunk_overlap=20,   # 20 tokens overlap
)

# Jab exact token control chahiye (e.g., model context limit)
text = "..." * 10000
chunks = token_splitter.split_text(text)
print(f"Token-based chunks: {len(chunks)}")
print(f"First chunk tokens: ~{len(chunks[0]) * 0.75:.0f} words")
```

### Semantic Chunking — Smart Splitting

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

# Semantic chunker — meaning ke hisaab se split karta hai
# Na ki character count se

semantic_splitter = SemanticChunker(
    embeddings=OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",  # "standard_deviation" ya "interquartile"
    # Percentile: top 25% similar sentences ko ek group mein rakhta hai
)

with open("research_paper.txt") as f:
    text = f.read()

chunks = semantic_splitter.split_text(text)
print(f"Semantic chunks: {len(chunks)}")

for i, chunk in enumerate(chunks):
    print(f"\nChunk {i+1} ({len(chunk)} chars):")
    print(chunk[:150] + "...")
```

**Semantic vs Recursive comparison:**
```
Recursive Split: "Invoice generation process involves...\n\nThen validation..."
  Chunk 1: "Invoice generation process involves..." (fixed size)
  Chunk 2: "Then validation..." (fixed size)
  → Same topic chunk ho sakta hai ya nahi

Semantic Split: Same text
  Chunk 1: "Invoice generation process involves..." (topic: invoice)
  Chunk 2: "GST rates are 5%, 12%, 18%, 28%..." (topic: GST)
  → Topic boundaries par split ✅
```

### Chunking Strategy Flowchart

```
User Document
    ↓
┌─────────────────────────────────────┐
│  Document Type Decide Karein        │
│                                     │
│  General Text → RecursiveSplit      │
│  Code → Python/Code Splitter        │
│  Markdown → MarkdownHeaderSplitter  │
│  Research Paper → SemanticChunker   │
│  JSON → JSON Splitter               │
└─────────────────────────────────────┘
    ↓
Chunk Size Decide Karein:
  Q&A → 500 chars
  Summarization → 2000 chars
  Code Analysis → 1000 chars
    ↓
Overlap Add Karein:
  ch = 500 → overlap = 50 (10%)
  ch = 1000 → overlap = 150 (15%)
  ch = 2000 → overlap = 200 (10%)
```

### MarkdownHeaderTextSplitter — Structured Docs

```python
from langchain_text_splitters import MarkdownHeaderTextSplitter

# Markdown headers ke hisaab se split
headers_to_split_on = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

splitter = MarkdownHeaderTextSplitter(headers_to_split_on)

with open("documentation.md") as f:
    md_text = f.read()

chunks = splitter.split_text(md_text)
for chunk in chunks:
    print(f"Section: {chunk.metadata}")
    print(f"Content: {chunk.page_content[:100]}...\n")
    # metadata: {"Header 1": "Introduction", "Header 2": "Setup"}
```

---

## Day 8: RAG Pipeline — Document Loaders ko Chains se Jodna

Ab tak humne chains, memory, aur document loaders alag-alag dekhe. Ab sabko ek saath jodte hain — RAG pipeline.

### Complete RAG Flow

```
Document Upload
    ↓
[PyPDFLoader] → Raw text extract
    ↓
[Text Splitter] → Chunks (500 chars each)
    ↓
[OpenAI Embeddings] → Vectors (1536 dims)
    ↓
[Chroma Vector Store] → Save + Index
    ↓
User Question
    ↓
[Embed Query] → Chroma Search → Top-k Chunks
    ↓
[Memory: Past Context] + [Chunks] + [Question]
    ↓
[LLM] → Answer with Citations
```

### Full RAG Pipeline Code

```python title="rag_pipeline.py"
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


class DocumentRAG:
    """Complete RAG system with document processing + Q&A + Memory"""

    def __init__(self):
        self.memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
        )
        self.vector_store = None
        self.retriever = None
        self.qa_chain = None

    def load_document(self, file_path: str):
        """Step 1: PDF load karo"""
        print(f"📄 Loading: {file_path}")
        loader = PyPDFLoader(file_path)
        docs = loader.load()
        print(f"   Pages: {len(docs)}")
        return docs

    def split_document(self, docs: list):
        """Step 2: Chunks mein todo"""
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=500,
            chunk_overlap=50,
        )
        chunks = splitter.split_documents(docs)
        print(f"   Chunks: {len(chunks)}")
        return chunks

    def create_vector_store(self, chunks: list):
        """Step 3: Vector store banao"""
        print("💾 Creating vector store...")
        self.vector_store = Chroma.from_documents(
            documents=chunks,
            embedding=embeddings,
            persist_directory="./chroma_db",
        )
        self.retriever = self.vector_store.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 4},
        )
        print("   ✅ Vector store ready")

    def build_chain(self):
        """Step 4: RAG chain banao with memory"""
        prompt = PromptTemplate(
            template=(
                "You are a helpful document assistant. Answer in Hinglish.\n\n"
                "Previous conversation:\n{chat_history}\n\n"
                "Context from document:\n{context}\n\n"
                "Question: {question}\n\n"
                "Hinglish Answer (with source citation if possible):"
            ),
            input_variables=["chat_history", "context", "question"],
        )

        def format_docs(docs):
            return "\n\n---\n\n".join(
                f"[Page {d.metadata.get('page', '?')}] {d.page_content}"
                for d in docs
            )

        self.qa_chain = (
            {
                "context": self.retriever | format_docs,
                "question": RunnablePassthrough(),
                "chat_history": lambda x: self.memory.load_memory_variables({}).get(
                    "chat_history", ""
                ),
            }
            | prompt
            | model
            | StrOutputParser()
        )

    def ask(self, question: str) -> str:
        """Question pucho aur answer + memory save karo"""
        if not self.qa_chain:
            return "Pehle document load karo!"

        answer = self.qa_chain.invoke(question)

        # Memory mein save karo
        self.memory.save_context(
            {"input": question},
            {"output": answer},
        )

        return answer

    def process(self, file_path: str):
        """End-to-end: load → split → store → chain"""
        docs = self.load_document(file_path)
        chunks = self.split_document(docs)
        self.create_vector_store(chunks)
        self.build_chain()
        print("\n✅ Ready! Questions puch sakte ho.")


def main():
    rag = DocumentRAG()

    pdf = input("PDF path: ").strip()
    if not os.path.exists(pdf):
        print("❌ File nahi mili")
        return

    rag.process(pdf)

    print("\n" + "=" * 50)
    print("🤖 Ask questions (q = quit)")
    print("=" * 50)

    while True:
        q = input("\nYou: ").strip()
        if q.lower() == "q":
            break

        answer = rag.ask(q)
        print(f"Bot: {answer}")


if __name__ == "__main__":
    main()
```

### Trace: What Happens Under the Hood

```
Q: "Invoice generation process kya hai?"

Step 1: Memory Check
  → chat_history loaded (empty on first call)

Step 2: Embed Query
  → "Invoice generation process kya hai?"
  → [0.023, -0.456, 0.789, ...] (1536-dim vector)

Step 3: Chroma Similarity Search
  → Comparing query vector with all chunk vectors
  → Found 4 most similar chunks:
     Chunk 47: "Invoice INV-2024-001..." (score: 0.89)
     Chunk 12: "GST invoice format..." (score: 0.76)
     Chunk 89: "Payment terms..." (score: 0.61)
     Chunk 3: "Company registration..." (score: 0.45)

Step 4: Format Context
  → [Page 5] Invoice INV-2024-001...
  → [Page 2] GST invoice format...
  → ...

Step 5: Build Prompt
  System: "Answer based on context..."
  Chat History: ""
  Context: [Page 5] Invoice INV-2024-001...
  Question: Invoice generation process kya hai?

Step 6: LLM Generates Answer
  → "Invoice generate karne ke liye pehle customer details
     fill karo, fir product select karo, fir GST calculate
     karo aur final amount generate karo."

Step 7: Save to Memory
  → "User asked about invoice process, bot explained steps"
```

### Testing with Different Parameters

```python
# Experiment: Different k values try karo
for k in [1, 3, 5, 10]:
    retriever = vector_store.as_retriever(
        search_kwargs={"k": k}
    )
    docs = retriever.invoke("Invoice process")
    print(f"k={k}: Retrieved {len(docs)} docs")
    print(f"  Quality: {'✅ Good' if k >=3 else '⚠️ Might miss context'}")
    print(f"  Cost: {'💰 Cheap' if k <=3 else '💸 Expensive'}")
```

### PHP Developer Mental Model

```php
// PHP mein RAG pipeline jaise:
// $documents = $pdfParser->parse('file.pdf');          // Document Loader
// $chunks = str_split($documents, 500);                 // Text Splitter
// foreach ($chunks as $chunk) {
//     $vector = $embeddingAPI->embed($chunk);            // Embeddings
//     $vectorDB->insert($vector, $chunk);                // Vector Store
// }
// $queryVector = $embeddingAPI->embed($question);
// $results = $vectorDB->similaritySearch($queryVector); // Retrieval
// $prompt = "Context: " . $results . "\nQ: " . $question;
// $answer = $llmAPI->ask($prompt);                       // Generation
```

---

## Daily Practice Schedule

### Day 1: LLMChain
- [ ] LLMChain with 3 different prompts
- [ ] run() vs invoke() vs predict() — difference samjho
- [ ] Chain ko verbose=True ke saath run karo
- [ ] Output key ka concept samjho

### Day 2: Sequential Chains
- [ ] SimpleSequentialChain with 2 steps
- [ ] SequentialChain with 3 steps and multiple outputs
- [ ] Blog post pipeline implement karo
- [ ] Translation pipeline banao (English → Hindi → Hinglish)

### Day 3: RouterChain + RunnableBranch
- [ ] RouterChain with 3 destinations
- [ ] Default fallback chain add karo
- [ ] RunnableBranch se replace karo
- [ ] Router ke decisions analyze karo

### Day 4: Memory Types
- [ ] ConversationBufferMemory try karo
- [ ] BufferWindowMemory with k=2 vs k=10 compare karo
- [ ] SummaryMemory — token savings measure karo
- [ ] VectorStoreRetrieverMemory implement karo

### Day 5: Document Loaders
- [ ] PyPDFLoader se PDF load karo
- [ ] CSVLoader se CSV data nikaalo
- [ ] WebBaseLoader se website scrape karo
- [ ] DirectoryLoader se batch processing karo
- [ ] UnstructuredFileLoader try karo

### Day 6: Text Splitters
- [ ] RecursiveCharacterTextSplitter with chunk_size 200/500/1000
- [ ] Overlap ka effect dekho (0 vs 50 vs 100)
- [ ] TokenTextSplitter try karo
- [ ] SemanticChunker try karo (if available)

### Day 7: Complete RAG
- [ ] RAG pipeline with your own PDF
- [ ] Memory ke saath follow-up questions pucho
- [ ] Different k values test karo
- [ ] Source citations add karo
- [ ] ContextualCompressionRetriever try karo

---

## Common Mistakes

### ❌ Mistake 1: Chunk Size Too Big
```python
# BAD: Pura page ek chunk mein
splitter = RecursiveCharacterTextSplitter(chunk_size=5000)
# LLM context overflow or irrelevant info

# GOOD: 500-1000 chars
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
```

### ❌ Mistake 2: Memory Without Limit
```python
# BAD: Unlimited buffer memory
memory = ConversationBufferMemory()
# 1000 turns ke baad → 50K tokens → expensive!

# GOOD: Window memory
memory = ConversationBufferWindowMemory(k=10)
# Sirf last 10 turns
```

### ❌ Mistake 3: SequentialChain Without Output Keys
```python
# BAD: Output keys missing
chain1 = LLMChain(llm=model, prompt=prompt1)
chain2 = LLMChain(llm=model, prompt=prompt2)
SequentialChain(chains=[chain1, chain2], ...)  # Error!

# GOOD
chain1 = LLMChain(llm=model, prompt=prompt1, output_key="story")
chain2 = LLMChain(llm=model, prompt=prompt2, output_key="summary")
```

### ❌ Mistake 4: Not Handling Empty Results
```python
# BAD: Direct access
docs = retriever.invoke(query)
context = docs[0].page_content  # IndexError if empty!

# GOOD
docs = retriever.invoke(query)
if docs:
    context = "\n".join(d.page_content for d in docs)
else:
    context = "Document mein relevant information nahi mili."
```

---

## Summary Table

| Component | Purpose | Key Code |
|-----------|---------|----------|
| `LLMChain` | Single prompt+model | `LLMChain(llm=model, prompt=prompt)` |
| `SimpleSequentialChain` | Linear pipeline | `SimpleSequentialChain(chains=[...])` |
| `SequentialChain` | Multi IO pipeline | `SequentialChain(chains=[...], output_variables=[...])` |
| `LLMRouterChain` | Dynamic routing | `LLMRouterChain.from_prompts(...)` |
| `ConversationBufferMemory` | Full history | `ConversationBufferMemory()` |
| `ConversationBufferWindowMemory` | Limited window | `ConversationBufferWindowMemory(k=5)` |
| `ConversationSummaryMemory` | Summarized | `ConversationSummaryMemory(llm=model)` |
| `VectorStoreRetrieverMemory` | Semantic search | `VectorStoreRetrieverMemory(retriever=...)` |
| `PyPDFLoader` | PDF loading | `PyPDFLoader("file.pdf")` |
| `CSVLoader` | CSV loading | `CSVLoader("data.csv")` |
| `WebBaseLoader` | Web scraping | `WebBaseLoader("https://...")` |
| `RecursiveCharacterTextSplitter` | Smart splitting | `RecursiveCharacterTextSplitter(chunk_size=500)` |
| `SemanticChunker` | Meaning-based split | `SemanticChunker(embeddings=...)` |

---

**Agle week:** RAG Deep Dive — embeddings, vector stores, retrieval strategies, aur advanced QA patterns.
