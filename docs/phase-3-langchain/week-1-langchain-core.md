# Week 1: LangChain Core

**Duration:** August 3-9, 2026 | **Hours:** 35

---

## Day 1: Setup & First Call

```bash
pip install langchain langchain-openai python-dotenv
```

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.7,
    api_key="your-api-key"  # Use .env
)

messages = [
    SystemMessage("You are a helpful Hindi-English assistant."),
    HumanMessage("Patna ka weather kaisa hai?")
]
response = llm.invoke(messages)
print(response.content)
```

## Day 2: Prompt Templates

```python
from langchain_core.prompts import ChatPromptTemplate

template = ChatPromptTemplate([
    ("system", "You are a {role} expert. Answer in {language}."),
    ("human", "{question}")
])

chain = template | llm
result = chain.invoke({
    "role": "Laravel",
    "language": "Hindi",
    "question": "ORM kaise kaam karta hai?"
})
```

## Day 3: Chains (LCEL)

```python
from langchain_core.output_parsers import StrOutputParser

parser = StrOutputParser()
chain = template | llm | parser

# Now you get string directly
result = chain.invoke({...})
```

## Day 4: Memory

```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()
conversation = ConversationChain(llm=llm, memory=memory)

conversation.predict(input="Mera naam Raushan hai")
conversation.predict(input="Mera naam kya hai?")
# "Tumhara naam Raushan hai" ✅
```

## Day 5: Document Loaders

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("document.pdf")
docs = loader.load()
print(f"Loaded {len(docs)} pages")
```

## Day 6-7: Mini Project — Hindi Chatbot

Build a FastAPI endpoint that:
- Accepts messages in Hindi/English
- Maintains conversation history
- Responds helpfully
- Has system prompt for your use case
