# Week 1 — Memory Systems

**Goal:** Agent memory ka gyaan — short-term se long-term tak
**Output:** 4 memory types implemented + custom memory class

---

## Day 1 — Why Memory Matters

```
Without memory:
User: "Mera naam Raushan hai"
Agent: "Hi! Kaise help kar sakta hoon?"
User: "Mera naam kya hai?"
Agent: "Sorry, mujhe nahi pata"  ❌

With memory:
User: "Mera naam Raushan hai"
Agent: "Namaste Raushan! Kaise help kar sakta hoon?"
User: "Mera naam kya hai?"
Agent: "Aapka naam Raushan hai, ApexPillar mein kaam karte hain" ✅
```

### Types of Memory

```
Short-term Memory:
→ Current conversation (last N messages)
→ Like human working memory
→ Lost after conversation ends

Long-term Memory:
→ Stored permanently
→ Across sessions
→ Like human's long-term memory
→ Uses vector DB for semantic search

Entity Memory:
→ Remember entities (people, places, things)
→ "Raushan → name, ApexPillar → company"
→ Updates as conversation progresses

Summary Memory:
→ Old messages compress karo
→ Jab conversation bahut lambi ho jaye
→ Summary store, details discard
```

---

## Day 2 — ConversationBufferMemory

```python
from langchain.memory import ConversationBufferMemory
from langchain.schema import HumanMessage, AIMessage

class SimpleChatMemory:
    """
    Sabse basic memory — saare messages store karta hai.
    Pros: Kuch miss nahi hota
    Cons: Token usage zyada hai
    """
    def __init__(self):
        self.memory = ConversationBufferMemory(
            return_messages=True,
            memory_key="chat_history"
        )

    def add_user_message(self, message: str):
        self.memory.chat_memory.add_message(HumanMessage(content=message))

    def add_ai_message(self, message: str):
        self.memory.chat_memory.add_message(AIMessage(content=message))

    def get_history(self) -> str:
        return self.memory.load_memory_variables({})["chat_history"]

# Usage
chat = SimpleChatMemory()
chat.add_user_message("Mera naam Raushan hai")
chat.add_ai_message("Namaste Raushan!")

history = chat.get_history()
# Returns: [HumanMessage("Mera naam Raushan hai"), AIMessage("Namaste Raushan!")]
```

### With Agent

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain.tools import Tool
from langchain.memory import ConversationBufferMemory
from langchain_openai import ChatOpenAI

# Tool
def get_current_time(query: str) -> str:
    from datetime import datetime
    return f"Current time: {datetime.now().strftime('%H:%M:%S')}"

tools = [
    Tool(
        name="current_time",
        func=get_current_time,
        description="Get current time. Use for time-related queries."
    )
]

llm = ChatOpenAI(model="gpt-4o")

# Agent with memory
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    memory=memory,
    verbose=True,
    max_iterations=3
)

# Conversation
resp1 = agent_executor.invoke({"input": "Mera naam Raushan hai"})
# Agent remembers this...

resp2 = agent_executor.invoke({"input": "Mera naam kya hai?"})
# "Aapka naam Raushan hai" ✅
```

---

## Day 3 — ConversationSummaryBufferMemory

```python
from langchain.memory import ConversationSummaryBufferMemory
from langchain_openai import ChatOpenAI

class SummaryMemory:
    """
    Jab conversation boht lambi ho jaye (>token_limit),
    toh purani messages ka summary bana do.
    Fresh messages as they are store karo.

    Best of both worlds:
    → Recent messages: full detail
    → Old messages: summarized but key info preserved
    """
    def __init__(self, max_token_limit: int = 2000):
        self.memory = ConversationSummaryBufferMemory(
            llm=ChatOpenAI(model="gpt-4o", temperature=0),
            max_token_limit=max_token_limit,
            return_messages=True,
            memory_key="chat_history"
        )

    def add(self, human: str, ai: str):
        self.memory.chat_memory.add_user_message(human)
        self.memory.chat_memory.add_ai_message(ai)

    def load(self) -> str:
        return self.memory.load_memory_variables({})["chat_history"]

# Demo: Token limit cross hone par summary kaise banta hai
memory = SummaryMemory(max_token_limit=500)

for i in range(20):
    memory.add(
        f"Q{i}: ApexERP ke baare mein batao?",
        f"A{i}: ApexERP ek ERP system hai jisme inventory, sales, finance modules hain..."
    )

history = memory.load()
# Purani messages → summary (compress)
# Recent messages → full text
```

### How it works internally

```python
"""
SummaryBufferMemory ka internal logic:

1. New message add karo
2. Total tokens check karo
3. If > max_token_limit:
   a. Purani messages nikaalo
   b. LLM se summary banao
   c. Summary + recent messages = new history
4. If <= max_token_limit:
   → Sab as it is store karo
"""
```

---

## Day 4 — VectorStoreMemory

```python
from langchain.memory import VectorStoreRetrieverMemory
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from datetime import datetime

class LongTermMemory:
    """
    Vector DB mein memories store karo.
    Har memory ka embedding banega.
    Similar memories retrieve ho sakti hain.

    Use case:
    → User ne kaha "Mujhe Q4 sales chahiye"
    → Next session: "Pichli baar waisi report chahiye"
    → System similar memory retrieve karega
    """
    def __init__(self):
        vectorstore = Chroma(
            collection_name="agent_memories",
            embedding_function=OpenAIEmbeddings()
        )
        self.memory = VectorStoreRetrieverMemory(
            retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
            memory_key="relevant_memories",
            return_messages=True
        )

    def save_context(self, user_input: str, ai_output: str):
        """Save conversation context."""
        self.memory.save_context(
            {"input": user_input},
            {"output": ai_output}
        )

    def load_context(self, query: str) -> str:
        """Load relevant memories for a query."""
        return self.memory.load_memory_variables({"input": query})

    def save_important(self, key: str, value: str):
        """Save an important fact explicitly."""
        self.save_context(key, value)

# Advanced: Custom Memory Store
import sqlite3
import json
import numpy as np
from typing import List, Dict

class SQLiteVectorMemory:
    """
    SQLite mein memory + embeddings store karo.
    Vector search for similar memories.
    """
    def __init__(self, db_path: str = "agent_memory.db"):
        self.embeddings = OpenAIEmbeddings()
        self.conn = sqlite3.connect(db_path)
        self._create_tables()

    def _create_tables(self):
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS memories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                key TEXT,
                value TEXT,
                embedding TEXT,
                timestamp TEXT,
                session_id TEXT
            )
        """)
        self.conn.commit()

    def save(self, key: str, value: str, session_id: str = "default"):
        emb = self.embeddings.embed_query(f"{key}: {value}")
        self.conn.execute(
            "INSERT INTO memories (key, value, embedding, timestamp, session_id) VALUES (?, ?, ?, ?, ?)",
            (key, value, json.dumps(emb), datetime.now().isoformat(), session_id)
        )
        self.conn.commit()

    def search(self, query: str, k: int = 5) -> List[Dict]:
        query_emb = self.embeddings.embed_query(query)
        rows = self.conn.execute("SELECT * FROM memories").fetchall()

        scored = []
        for row in rows:
            stored_emb = json.loads(row[3])
            similarity = self._cosine_similarity(query_emb, stored_emb)
            scored.append((similarity, row))

        scored.sort(reverse=True)
        return [
            {"key": r[1], "value": r[2], "score": s, "session": r[5]}
            for s, r in scored[:k]
        ]

    def _cosine_similarity(self, a: List[float], b: List[float]) -> float:
        a_np, b_np = np.array(a), np.array(b)
        return np.dot(a_np, b_np) / (np.linalg.norm(a_np) * np.linalg.norm(b_np))

# Usage
memory = SQLiteVectorMemory()
memory.save("user_name", "Raushan")
memory.save("company", "ApexPillar Tech")
memory.save("recent_query", "Q4 sales decline analysis")

results = memory.search("user ke baare mein batao")
# Returns: ["Raushan", "ApexPillar Tech"] with similarity scores
```

---

## Day 5 — EntityMemory

```python
from langchain.memory import ConversationEntityMemory
from langchain_openai import ChatOpenAI

class EntityAwareMemory:
    """
    Entities (people, places, things) track karo.
    Har entity ke baare mein jo bhi pata chale, store karo.
    Automatically update entities as conversation progresses.
    """
    def __init__(self):
        self.memory = ConversationEntityMemory(
            llm=ChatOpenAI(model="gpt-4o", temperature=0),
            memory_key="entities",
            return_messages=True
        )

    def add(self, user: str, ai: str):
        self.memory.save_context(
            {"input": user},
            {"output": ai}
        )

    def get_entities(self) -> dict:
        return self.memory.load_memory_variables({})

    def get_entity_store(self) -> dict:
        """Internal entity store access."""
        return self.memory.entity_store.store

# Usage
entity_memory = EntityAwareMemory()
entity_memory.add(
    "Mera naam Raushan hai aur mein ApexPillar mein kaam karta hoon",
    "Namaste Raushan! ApexPillar mein kya role hai aapka?"
)
entity_memory.add(
    "Mein Laravel developer hoon",
    "Achha! AI engineering seekh rahe hain?"
)

entities = entity_memory.get_entity_store()
# {
#   "Raushan": {"mentions": 2, "role": "Laravel developer", "company": "ApexPillar"},
#   "ApexPillar": {"mentions": 1, "type": "company"}
# }
```

### Custom Entity Store

```python
import json
from typing import Dict, Optional
from langchain.memory.entity import BaseEntityStore

class FileEntityStore(BaseEntityStore):
    """
    Entities ko file mein persist karo.
    Baar baar naye conversation mein bhi entities available.
    """
    def __init__(self, file_path: str = "entities.json"):
        self.file_path = file_path
        self.store: Dict = {}
        self.load()

    @property
    def store(self) -> Dict:
        return self._store

    def load(self):
        try:
            with open(self.file_path, "r") as f:
                self._store = json.load(f)
        except FileNotFoundError:
            self._store = {}

    def save(self):
        with open(self.file_path, "w") as f:
            json.dump(self._store, f, indent=2)

    def get(self, key: str) -> Optional[str]:
        return self._store.get(key)

    def set(self, key: str, value: Optional[str]):
        if value is None:
            self._store.pop(key, None)
        else:
            self._store[key] = value
        self.save()

    def delete(self, key: str):
        self._store.pop(key, None)
        self.save()

    def exists(self, key: str) -> bool:
        return key in self._store

    def clear(self):
        self._store.clear()
        self.save()

# Usage
entity_store = FileEntityStore("apexerp_entities.json")
entity_store.set("Raushan_role", "Laravel Developer")
entity_store.set("Raushan_company", "ApexPillar Tech")
entity_store.set("Raushan_location", "Patna")

print(entity_store.get("Raushan_role"))  # "Laravel Developer"
```

---

## Day 6 — SQLite-backed Memory Persistence

```python
import sqlite3
from typing import List, Dict
from datetime import datetime
from langchain.schema import HumanMessage, AIMessage, SystemMessage

class SQLiteChatMemory:
    """
    Saari conversations SQLite mein store karo.
    Session-based: har session ki apni memory.
    
    Benefits:
    → Session restart pe bhi memory available
    → Query kar sakte ho "pichle session mein kya hua tha?"
    → Analytics: kitne conversations, avg length, etc.
    """
    def __init__(self, db_path: str = "chat_history.db", session_id: str = None):
        self.conn = sqlite3.connect(db_path)
        self.session_id = session_id or datetime.now().strftime("%Y%m%d_%H%M%S")
        self._create_tables()

    def _create_tables(self):
        self.conn.executescript("""
            CREATE TABLE IF NOT EXISTS sessions (
                session_id TEXT PRIMARY KEY,
                created_at TEXT,
                updated_at TEXT
            );
            
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT,
                role TEXT,
                content TEXT,
                timestamp TEXT,
                token_count INTEGER DEFAULT 0,
                FOREIGN KEY (session_id) REFERENCES sessions(session_id)
            );
            
            CREATE TABLE IF NOT EXISTS summaries (
                session_id TEXT PRIMARY KEY,
                summary TEXT,
                created_at TEXT,
                token_count INTEGER
            );
        """)
        self.conn.commit()
        
        # Ensure session exists
        self.conn.execute(
            "INSERT OR IGNORE INTO sessions (session_id, created_at, updated_at) VALUES (?, ?, ?)",
            (self.session_id, datetime.now().isoformat(), datetime.now().isoformat())
        )
        self.conn.commit()

    def add_message(self, role: str, content: str):
        """Add a message to current session."""
        self.conn.execute(
            "INSERT INTO messages (session_id, role, content, timestamp) VALUES (?, ?, ?, ?)",
            (self.session_id, role, content, datetime.now().isoformat())
        )
        self.conn.execute(
            "UPDATE sessions SET updated_at = ? WHERE session_id = ?",
            (datetime.now().isoformat(), self.session_id)
        )
        self.conn.commit()

    def add_user(self, content: str):
        self.add_message("user", content)

    def add_ai(self, content: str):
        self.add_message("assistant", content)

    def get_history(self, limit: int = 50) -> List[Dict]:
        cursor = self.conn.execute(
            "SELECT role, content, timestamp FROM messages WHERE session_id = ? ORDER BY id ASC LIMIT ?",
            (self.session_id, limit)
        )
        return [
            {"role": row[0], "content": row[1], "timestamp": row[2]}
            for row in cursor.fetchall()
        ]

    def get_session_summary(self) -> str:
        """Get or create summary for current session."""
        cursor = self.conn.execute(
            "SELECT summary FROM summaries WHERE session_id = ?",
            (self.session_id,)
        )
        row = cursor.fetchone()
        if row:
            return row[0]
        return "No summary yet"

    def generate_summary(self, llm) -> str:
        """Generate summary of current session using LLM."""
        history = self.get_history()
        text = "\n".join(f"{m['role']}: {m['content']}" for m in history)
        
        summary = llm.invoke(f"Summarize this conversation in 2-3 sentences:\n\n{text}")
        
        self.conn.execute(
            "INSERT OR REPLACE INTO summaries (session_id, summary, created_at) VALUES (?, ?, ?)",
            (self.session_id, summary, datetime.now().isoformat())
        )
        self.conn.commit()
        return summary

    def list_sessions(self) -> List[Dict]:
        cursor = self.conn.execute(
            "SELECT session_id, created_at, updated_at FROM sessions ORDER BY updated_at DESC"
        )
        return [
            {"id": r[0], "created": r[1], "updated": r[2]}
            for r in cursor.fetchall()
        ]

    def clear_session(self):
        self.conn.execute("DELETE FROM messages WHERE session_id = ?", (self.session_id,))
        self.conn.execute("DELETE FROM summaries WHERE session_id = ?", (self.session_id,))
        self.conn.commit()

# Usage
memory = SQLiteChatMemory("apexerp_chats.db")

# Simulate conversation
memory.add_user("Mera naam Raushan hai")
memory.add_ai("Namaste Raushan! Kaise help karun?")

history = memory.get_history()
# [{"role": "user", "content": "Mera naam Raushan hai"}, ...]

# New session
memory2 = SQLiteChatMemory("apexerp_chats.db", session_id="new_session")
memory2.add_user("Pichli baar kya baat hui thi?")
memory2.add_ai("Mujhe check karne do...")
```

---

## Day 7 — Custom Memory + Memory Compression

### Custom Memory Class

```python
from langchain.memory import BaseMemory
from typing import List, Dict, Any
from pydantic import BaseModel, Field
import json

class CustomAgentMemory(BaseMemory):
    """
    Apna khud ka memory system.
    Kuch bhi store kar sakte hain.
    
    Features:
    → Recent messages (last 10)
    → Important facts (extracted by LLM)
    → Task progress (current state of work)
    → User preferences
    """
    memory_key: str = "custom_memory"
    
    # Memory stores
    recent_messages: List[Dict] = []
    important_facts: Dict[str, str] = {}
    task_state: Dict[str, Any] = {}
    user_preferences: Dict[str, Any] = {}
    
    max_recent: int = 10

    @property
    def memory_variables(self) -> List[str]:
        return [self.memory_key]

    def load_memory_variables(self, inputs: Dict) -> Dict:
        """Return formatted memory for LLM context."""
        memory_str = f"""
Recent Conversation:
{self._format_messages()}

Important Facts About User:
{json.dumps(self.important_facts, indent=2)}

Current Task:
{json.dumps(self.task_state, indent=2)}

User Preferences:
{json.dumps(self.user_preferences, indent=2)}
"""
        return {self.memory_key: memory_str}

    def save_context(self, inputs: Dict, outputs: Dict) -> None:
        """Save new context."""
        user_input = inputs.get("input", "")
        ai_output = outputs.get("output", "")
        
        # Save recent message
        self.recent_messages.append({
            "human": user_input,
            "ai": ai_output
        })
        
        # Keep only last N
        if len(self.recent_messages) > self.max_recent:
            self.recent_messages.pop(0)

    def clear(self) -> None:
        self.recent_messages = []
        self.important_facts = {}
        self.task_state = {}
        self.user_preferences = {}

    def add_fact(self, key: str, value: str):
        self.important_facts[key] = value

    def add_preference(self, key: str, value: Any):
        self.user_preferences[key] = value

    def set_task(self, task_id: str, state: Dict):
        self.task_state[task_id] = state

    def _format_messages(self) -> str:
        lines = []
        for msg in self.recent_messages[-5:]:  # Last 5 for context window
            lines.append(f"User: {msg['human'][:200]}")
            lines.append(f"AI: {msg['ai'][:200]}")
        return "\n".join(lines)

# Usage
memory = CustomAgentMemory()
memory.add_fact("name", "Raushan")
memory.add_fact("company", "ApexPillar Tech")
memory.add_preference("language", "Hinglish")
memory.add_preference("response_style", "detailed with examples")
memory.set_task("report_gen", {"step": "query_sales", "status": "in_progress"})

memory.save_context({"input": "Q4 sales report do"}, {"output": "Let me fetch..."})
context = memory.load_memory_variables({})
print(context["custom_memory"])
```

### Memory Compression

```python
from typing import List
from langchain_openai import ChatOpenAI

class MemoryCompressor:
    """
    Jab memory boht badi ho jaye, compress karo.
    
    Strategy:
    1. Messages ko segments mein tod do
    2. Har segment ka summary banao
    3. Important facts extract karo
    4. Old summaries discard, new ke saath merge karo
    """
    def __init__(self, llm=None, max_segments: int = 5):
        self.llm = llm or ChatOpenAI(model="gpt-4o-mini", temperature=0)
        self.max_segments = max_segments
        self.segments: List[Dict] = []

    def add_segment(self, messages: List[Dict]) -> str:
        """Add a message segment and get its summary."""
        text = "\n".join(f"{m['role']}: {m['content']}" for m in messages)
        
        summary = self.llm.invoke(f"""
        Summarize this conversation segment. Extract:
        1. Key decisions made
        2. Important facts mentioned
        3. User preferences revealed
        4. Any pending tasks
        
        Conversation:
        {text}
        
        Summary:
        """)
        
        self.segments.append({
            "summary": summary,
            "message_count": len(messages)
        })
        
        # Compress if too many segments
        if len(self.segments) > self.max_segments:
            self._compress()
        
        return summary

    def _compress(self):
        """Merge oldest segments into one summary."""
        oldest = self.segments[:2]
        remaining = self.segments[2:]
        
        merge_text = "\n".join(s["summary"] for s in oldest)
        merged = self.llm.invoke(f"Merge these conversation summaries into one:\n\n{merge_text}")
        
        self.segments = [{"summary": merged, "message_count": sum(s["message_count"] for s in oldest)}] + remaining

    def get_compressed_context(self) -> str:
        summaries = [s["summary"] for s in self.segments[-3:]]  # Last 3 segments
        return "\n\n".join(summaries)

    def extract_facts(self, text: str) -> Dict[str, str]:
        facts = self.llm.invoke(f"""
        Extract all factual statements from:
        {text}
        
        Return as JSON: {{"key": "value"}}
        Example: {{"name": "Raushan", "company": "ApexPillar"}}
        """)
        
        import json
        try:
            return json.loads(facts)
        except:
            return {"error": "Could not parse facts"}

# Usage
compressor = MemoryCompressor()
session1 = [
    {"role": "user", "content": "Mera naam Raushan hai mein ApexPillar mein kaam karta hoon"},
    {"role": "assistant", "content": "Namaste Raushan!"}
]
summary1 = compressor.add_segment(session1)

session2 = [
    {"role": "user", "content": "Mujhe Q4 sales report chahiye"},
    {"role": "assistant", "content": "Let me fetch that..."}
]
summary2 = compressor.add_segment(session2)

context = compressor.get_compressed_context()
# "Raushan, ApexPillar employee. Requested Q4 sales report."
```

---

## Summary

```
Week 1 khatam:

✅ ConversationBufferMemory — Simple, full history store
✅ SummaryBufferMemory — Auto-summarize when token limit hits
✅ VectorStoreMemory — Semantic search in memories
✅ EntityMemory — Track people, places, things
✅ Custom Memory — Apna khud ka memory system
✅ SQLite Persistence — Memory survive karta hai restart ke baad
✅ Memory Compression — Token waste kam karo

Next week: Production agents with tools, HITL, tracing
```
