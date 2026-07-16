# Memory and State

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand types of agent memory — short-term, long-term, episodic, semantic |
| LO2 | Implement conversation history management with token budgeting |
| LO3 | Build external memory stores using vector databases and key-value stores |
| LO4 | Design state management patterns for complex agent workflows |
| LO5 | Implement persistent agent state with save/restore mechanisms |

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Memory Types | Short-term, long-term, episodic, semantic, procedural |
| 5.2 | Conversation Memory | History management, token budgeting, summarization |
| 5.3 | External Memory | Vector stores for semantic memory, KV stores for facts |
| 5.4 | State Management | Shared state patterns, state machines, persistence |
| 5.5 | Save and Restore | Checkpointing, serialization, reloading agent state |
| 5.6 | Memory Optimization | Compression, forgetting strategies, relevance scoring |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Memory Types
        ST[Short-Term\nCurrent Conversation]
        LT[Long-Term\nAcross Sessions]
        EP[Episodic\nPast Experiences]
        SM[Semantic\nFacts & Knowledge]
    end
    ST --> |Summarize| LT
    LT --> |Store| DB[(Vector/Persistent Store)]
    EP --> DB
    SM --> DB
    DB --> |Retrieve| AG[Agent Context]
    AG --> ST
```

## 5.1 Memory Types

Agents need different types of memory to be effective across short and long timescales.

### Memory Classification

```python
from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional, Callable
from enum import Enum
import json
import time


class MemoryType(Enum):
    SHORT_TERM = "short_term"  # Current conversation, limited window
    LONG_TERM = "long_term"  # Across sessions, persistent
    EPISODIC = "episodic"  # Past experiences and outcomes
    SEMANTIC = "semantic"  # Facts, knowledge, procedures
    WORKING = "working"  # Current task state


@dataclass
class MemoryEntry:
    content: str
    memory_type: MemoryType
    timestamp: float = field(default_factory=time.time)
    metadata: Dict = field(default_factory=dict)
    importance: float = 0.5  # 0.0 to 1.0
    access_count: int = 0


class MemoryStore:
    def __init__(self):
        self.entries: List[MemoryEntry] = []

    def add(self, content: str, memory_type: MemoryType, metadata: Dict = None, importance: float = 0.5):
        self.entries.append(MemoryEntry(
            content=content,
            memory_type=memory_type,
            metadata=metadata or {},
            importance=importance,
        ))

    def get_by_type(self, memory_type: MemoryType) -> List[MemoryEntry]:
        return [e for e in self.entries if e.memory_type == memory_type]

    def get_recent(self, n: int = 5) -> List[MemoryEntry]:
        sorted_entries = sorted(self.entries, key=lambda e: e.timestamp, reverse=True)
        return sorted_entries[:n]

    def search(self, query: str) -> List[MemoryEntry]:
        query_lower = query.lower()
        results = []
        for entry in self.entries:
            if query_lower in entry.content.lower():
                results.append(entry)
        return results

    def forget(self, before_timestamp: float):
        self.entries = [e for e in self.entries if e.timestamp >= before_timestamp]

    def consolidate(self):
        """Merge similar entries to save space."""
        pass


memory = MemoryStore()
memory.add("User prefers Python programming", MemoryType.SEMANTIC, importance=0.8)
memory.add("Searched for AI agents, found useful results", MemoryType.EPISODIC, importance=0.6)
print(f"Semantic memories: {len(memory.get_by_type(MemoryType.SEMANTIC))}")
print(f"Search 'Python': {len(memory.search('Python'))}")
```

## 5.2 Conversation Memory

### 5.2.1 Sliding Window Memory

```python
class SlidingWindowMemory:
    def __init__(self, max_messages: int = 10, max_tokens: int = 4000):
        self.messages: List[Dict] = []
        self.max_messages = max_messages
        self.max_tokens = max_tokens

    def add_message(self, role: str, content: str):
        self.messages.append({"role": role, "content": content})
        self._trim()

    def _trim(self):
        while len(self.messages) > self.max_messages:
            self.messages.pop(0)

        total_tokens = sum(len(m["content"]) // 4 for m in self.messages)
        while total_tokens > self.max_tokens and len(self.messages) > 2:
            removed = self.messages.pop(0)
            total_tokens -= len(removed["content"]) // 4

    def get_context(self) -> List[Dict]:
        return list(self.messages)

    def get_summary_prompt(self) -> str:
        history = "\n".join([f"{m['role']}: {m['content'][:200]}" for m in self.messages])
        return f"Previous conversation:\n{history}"


window = SlidingWindowMemory(max_messages=5, max_tokens=1000)
for i in range(10):
    window.add_message("user", f"Message {i}" * 10)
    window.add_message("assistant", f"Response {i}" * 10)
print(f"Window size: {len(window.messages)} messages (trimmed from 10)")
```

### 5.2.2 Summarizing Memory

```python
class SummarizingMemory:
    def __init__(self, llm_fn: Callable, summary_threshold: int = 5):
        self.llm = llm_fn
        self.summary_threshold = summary_threshold
        self.messages: List[Dict] = []
        self.summary: Optional[str] = None

    def add_message(self, role: str, content: str):
        self.messages.append({"role": role, "content": content})

        if len(self.messages) >= self.summary_threshold:
            self._generate_summary()

    def _generate_summary(self):
        full_text = "\n".join([f"{m['role']}: {m['content']}" for m in self.messages])
        summary_prompt = f"""Summarize this conversation briefly:

{full_text}

Summary:"""
        self.summary = self.llm(summary_prompt)
        self.messages = self.messages[-2:]  # Keep last 2 messages for recent context

    def get_context(self) -> str:
        parts = []
        if self.summary:
            parts.append(f"Previous conversation summary: {self.summary}")
        if self.messages:
            parts.append("Recent messages:")
            parts.extend([f"{m['role']}: {m['content'][:200]}" for m in self.messages])
        return "\n".join(parts)


sum_mem = SummarizingMemory(lambda p: "Conversation summary: User asked about AI agents.")
for i in range(6):
    sum_mem.add_message("user", f"Question {i}")
    sum_mem.add_message("assistant", f"Answer {i}")
print(f"Summary generated: {sum_mem.summary is not None}")
print(f"Remaining messages: {len(sum_mem.messages)}")
```

### 5.2.3 Hybrid Memory

```python
class HybridMemory:
    def __init__(self, max_recent: int = 5, llm_fn: Callable = None):
        self.recent: List[Dict] = []
        self.summary: Optional[str] = None
        self.max_recent = max_recent
        self.llm = llm_fn
        self.total_messages = 0

    def add(self, role: str, content: str):
        self.recent.append({"role": role, "content": content})
        self.total_messages += 1

        if len(self.recent) >= self.max_recent * 2:
            self._summarize_old()

    def _summarize_old(self):
        old_messages = self.recent[:-self.max_recent]
        if not old_messages:
            return

        text = "\n".join([f"{m['role']}: {m['content'][:200]}" for m in old_messages])
        new_summary = self.llm(f"Summarize: {text}") if self.llm else f"Summary of {len(old_messages)} messages."

        if self.summary:
            self.summary = self.llm(f"Combine summaries:\n1. {self.summary}\n2. {new_summary}") if self.llm else f"{self.summary}\n{new_summary}"
        else:
            self.summary = new_summary

        self.recent = self.recent[-self.max_recent:]

    def get_full_context(self) -> str:
        parts = []
        if self.summary:
            parts.append(f"Summary: {self.summary}")
        parts.extend([f"{m['role']}: {m['content'][:200]}" for m in self.recent])
        return "\n".join(parts)

    def stats(self) -> Dict:
        return {
            "total_messages": self.total_messages,
            "recent_messages": len(self.recent),
            "has_summary": self.summary is not None,
        }


hybrid = HybridMemory(max_recent=3, llm_fn=lambda p: "Merged summary of conversation.")
for i in range(10):
    hybrid.add("user", f"Query {i}")
    hybrid.add("assistant", f"Response {i}")
print(f"Hybrid memory stats: {hybrid.stats()}")
```

## 5.3 External Memory

### 5.3.1 Vector Memory Store

```python
class VectorMemoryStore:
    def __init__(self, dimension: int = 384):
        self.dimension = dimension
        self.memories: List[Dict] = []
        self.embeddings: List[np.ndarray] = []

    def add_memory(self, content: str, metadata: Dict = None, importance: float = 0.5):
        embedding = mock_embedder(content)
        self.memories.append({
            "content": content,
            "metadata": metadata or {},
            "importance": importance,
            "timestamp": time.time(),
        })
        self.embeddings.append(embedding)

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        query_emb = mock_embedder(query)
        similarities = []
        for i, mem_emb in enumerate(self.embeddings):
            sim = float(np.dot(query_emb, mem_emb))
            similarities.append((i, sim))

        similarities.sort(key=lambda x: x[1], reverse=True)
        results = []
        for idx, sim in similarities[:top_k]:
            mem = self.memories[idx]
            results.append({**mem, "relevance": round(sim, 4)})
        return results

    def get_recent(self, n: int = 5) -> List[Dict]:
        sorted_memories = sorted(self.memories, key=lambda m: m["timestamp"], reverse=True)
        return sorted_memories[:n]


vmem = VectorMemoryStore()
vmem.add_memory("User likes Python programming", {"source": "conversation"}, 0.8)
vmem.add_memory("Completed project on AI agents", {"source": "project"}, 0.9)
results = vmem.search("programming preferences")
print(f"Vector search results: {len(results)}")
for r in results:
    print(f"  {r['content']} (relevance: {r['relevance']})")
```

### 5.3.2 Key-Value Fact Memory

```python
class FactMemory:
    def __init__(self):
        self.facts: Dict[str, List[Dict]] = {}
        self.confidence: Dict[str, float] = {}

    def remember(self, key: str, value: str, source: str = "user", confidence: float = 0.8):
        if key not in self.facts:
            self.facts[key] = []
        self.facts[key].append({
            "value": value,
            "source": source,
            "confidence": confidence,
            "timestamp": time.time(),
        })
        self.confidence[key] = max(
            confidence,
            self.confidence.get(key, 0)
        )

    def recall(self, key: str, min_confidence: float = 0.5) -> Optional[str]:
        entries = self.facts.get(key, [])
        if not entries:
            return None
        # Return most confident recent entry
        best = max(entries, key=lambda e: e["confidence"] * (1 if e["confidence"] >= min_confidence else 0))
        return best["value"] if best["confidence"] >= min_confidence else None

    def update_confidence(self, key: str, new_confidence: float):
        if key in self.confidence:
            self.confidence[key] = (self.confidence[key] + new_confidence) / 2

    def forget(self, key: str):
        self.facts.pop(key, None)
        self.confidence.pop(key, None)

    def get_all_facts(self) -> List[Dict]:
        facts = []
        for key, entries in self.facts.items():
            for entry in entries:
                facts.append({"key": key, **entry})
        return facts


facts = FactMemory()
facts.remember("user_name", "Alice", "conversation")
facts.remember("preferred_language", "Python", "conversation")
print(f"Recalled name: {facts.recall('user_name')}")
print(f"Recalled unknown: {facts.recall('favorite_color')}")
```

### 5.3.3 Episodic Memory

```python
class EpisodicMemory:
    def __init__(self):
        self.episodes: List[Dict] = []

    def record(self, action: str, outcome: str, context: Dict, success: bool):
        self.episodes.append({
            "action": action,
            "outcome": outcome,
            "context": context,
            "success": success,
            "timestamp": time.time(),
        })

    def get_similar_experiences(self, action: str, top_k: int = 3) -> List[Dict]:
        action_lower = action.lower()
        relevant = [e for e in self.episodes if action_lower in e["action"].lower()]
        relevant.sort(key=lambda e: e["timestamp"], reverse=True)
        return relevant[:top_k]

    def get_success_rate(self, action: str) -> float:
        episodes = [e for e in self.episodes if action.lower() in e["action"].lower()]
        if not episodes:
            return 0.0
        successes = sum(1 for e in episodes if e["success"])
        return successes / len(episodes)

    def get_best_approach(self, goal: str) -> Optional[str]:
        """Find the most successful approach for a given goal."""
        relevant = [e for e in self.episodes if e["success"] and goal.lower() in str(e["context"]).lower()]
        if relevant:
            return max(relevant, key=lambda e: e["timestamp"])["action"]
        return None


episodes = EpisodicMemory()
episodes.record("web_search", "Found relevant papers", {"query": "AI agents"}, True)
episodes.record("database_query", "No results", {"query": "AI agents"}, False)
print(f"Success rate for 'search': {episodes.get_success_rate('search'):.0%}")
```

## 5.4 State Management

### 5.4.1 State Machine Pattern

```python
class AgentState:
    def __init__(self):
        self.memory = MemoryStore()
        self.conversation = SummarizingMemory(lambda p: "summary")
        self.facts = FactMemory()
        self.episodes = EpisodicMemory()
        self.current_task: Optional[str] = None
        self.step_count: int = 0
        self.max_steps: int = 20

    def reset(self):
        self.current_task = None
        self.step_count = 0

    def start_task(self, task: str):
        self.current_task = task
        self.step_count = 0

    def increment_step(self):
        self.step_count += 1
        return self.step_count <= self.max_steps

    def snapshot(self) -> Dict:
        return {
            "current_task": self.current_task,
            "step_count": self.step_count,
            "fact_count": len(self.facts.get_all_facts()),
            "episode_count": len(self.episodes.episodes),
        }


state = AgentState()
state.start_task("Research AI agents")
state.increment_step()
state.facts.remember("research_topic", "AI agents", "system")
print(f"State snapshot: {state.snapshot()}")
```

### 5.4.2 Shared State Between Agents

```python
class SharedState:
    def __init__(self):
        self.data: Dict[str, Any] = {}
        self.locks: Dict[str, bool] = {}

    def get(self, key: str, default=None):
        return self.data.get(key, default)

    def set(self, key: str, value: Any):
        self.data[key] = value

    def update(self, key: str, update_fn: Callable):
        if key in self.data:
            self.data[key] = update_fn(self.data[key])

    def acquire_lock(self, key: str) -> bool:
        if self.locks.get(key, False):
            return False
        self.locks[key] = True
        return True

    def release_lock(self, key: str):
        self.locks[key] = False

    def clear(self):
        self.data.clear()
        self.locks.clear()


shared = SharedState()
shared.set("research_results", [])
shared.update("research_results", lambda x: x + ["Found paper on AI agents"])
print(f"Shared data: {shared.get('research_results')}")
```

## 5.5 Save and Restore

### 5.5.1 State Serialization

```python
import pickle
import json
from datetime import datetime


class StateSerializer:
    @staticmethod
    def to_dict(state: AgentState) -> Dict:
        return {
            "current_task": state.current_task,
            "step_count": state.step_count,
            "max_steps": state.max_steps,
            "facts": state.facts.get_all_facts(),
            "episodes": state.episodes.episodes,
            "saved_at": datetime.now().isoformat(),
        }

    @staticmethod
    def from_dict(data: Dict) -> AgentState:
        state = AgentState()
        state.current_task = data.get("current_task")
        state.step_count = data.get("step_count", 0)
        state.max_steps = data.get("max_steps", 20)

        for fact in data.get("facts", []):
            state.facts.remember(fact["key"], fact["value"], fact.get("source", "restore"), fact.get("confidence", 0.5))

        for episode in data.get("episodes", []):
            state.episodes.record(episode["action"], episode["outcome"], episode.get("context", {}), episode.get("success", False))

        return state

    @staticmethod
    def save_to_file(state: AgentState, filepath: str):
        data = StateSerializer.to_dict(state)
        with open(filepath, "w") as f:
            json.dump(data, f, indent=2)

    @staticmethod
    def load_from_file(filepath: str) -> AgentState:
        with open(filepath, "r") as f:
            data = json.load(f)
        return StateSerializer.from_dict(data)


original = AgentState()
original.start_task("Memory research")
original.facts.remember("topic", "agent memory", "system")
original.episodes.record("search", "found papers", {"query": "memory"}, True)

serialized = StateSerializer.to_dict(original)
restored = StateSerializer.from_dict(serialized)
print(f"Original task: {original.current_task}")
print(f"Restored task: {restored.current_task}")
print(f"Facts match: {original.facts.recall('topic') == restored.facts.recall('topic')}")
```

### 5.5.2 Checkpoint Manager

```python
class CheckpointManager:
    def __init__(self, storage_dir: str = "./checkpoints"):
        self.storage_dir = storage_dir
        self.checkpoints: Dict[str, str] = {}

    def save(self, agent_id: str, state: AgentState, tag: str = "latest"):
        from pathlib import Path
        Path(self.storage_dir).mkdir(parents=True, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{self.storage_dir}/{agent_id}_{tag}_{timestamp}.json"
        StateSerializer.save_to_file(state, filename)
        self.checkpoints[f"{agent_id}:{tag}"] = filename
        return filename

    def load(self, agent_id: str, tag: str = "latest") -> Optional[AgentState]:
        key = f"{agent_id}:{tag}"
        filename = self.checkpoints.get(key)
        if filename:
            return StateSerializer.load_from_file(filename)
        return None

    def list_checkpoints(self, agent_id: str) -> List[str]:
        return [k for k in self.checkpoints.keys() if k.startswith(agent_id)]

    def rollback(self, agent_id: str, steps_back: int = 1) -> Optional[AgentState]:
        checkpoints = self.list_checkpoints(agent_id)
        if len(checkpoints) > steps_back:
            target = checkpoints[-steps_back - 1]
            tag = target.split(":")[1]
            return self.load(agent_id, tag)
        return None


cm = CheckpointManager("./checkpoints")
cm.save("agent-1", original, "v1")
print(f"Saved checkpoint: {cm.list_checkpoints('agent-1')}")
```

### 5.5.3 Session Persistence

```python
class SessionManager:
    def __init__(self):
        self.sessions: Dict[str, AgentState] = {}

    def create_session(self, session_id: str) -> AgentState:
        state = AgentState()
        self.sessions[session_id] = state
        return state

    def get_session(self, session_id: str) -> Optional[AgentState]:
        return self.sessions.get(session_id)

    def delete_session(self, session_id: str):
        self.sessions.pop(session_id, None)

    def cleanup_old_sessions(self, max_age_seconds: int = 3600):
        now = time.time()
        expired = []
        for sid, state in self.sessions.items():
            if hasattr(state, "_created_at"):
                if now - state._created_at > max_age_seconds:
                    expired.append(sid)
        for sid in expired:
            self.delete_session(sid)

    def stats(self) -> Dict:
        return {
            "active_sessions": len(self.sessions),
            "total_sessions": len(self.sessions),
        }


sm = SessionManager()
state_a = sm.create_session("session-1")
state_b = sm.create_session("session-2")
state_a.facts.remember("session", "one", "system")
state_b.facts.remember("session", "two", "system")
print(f"Session 1 fact: {sm.get_session('session-1').facts.recall('session')}")
print(f"Active sessions: {sm.stats()['active_sessions']}")
```

## 5.6 Memory Optimization

### 5.6.1 Importance-Based Retention

```python
class ImportanceBasedMemory:
    def __init__(self, max_entries: int = 100, importance_threshold: float = 0.3):
        self.entries: List[MemoryEntry] = []
        self.max_entries = max_entries
        self.threshold = importance_threshold

    def add(self, content: str, importance: float, metadata: Dict = None):
        if importance < self.threshold:
            return

        self.entries.append(MemoryEntry(
            content=content,
            memory_type=MemoryType.SEMANTIC,
            importance=importance,
            metadata=metadata or {},
        ))

        self._prune()

    def _prune(self):
        if len(self.entries) > self.max_entries:
            self.entries.sort(key=lambda e: (e.importance, e.timestamp), reverse=True)
            self.entries = self.entries[:self.max_entries]

    def get_important(self, min_importance: float = 0.7) -> List[MemoryEntry]:
        return [e for e in self.entries if e.importance >= min_importance]


importance_mem = ImportanceBasedMemory(max_entries=10, importance_threshold=0.3)
importance_mem.add("Critical user preference", 0.9)
importance_mem.add("Minor observation", 0.2)
print(f"Important entries: {len(importance_mem.get_important(0.7))}")
print(f"Total entries: {len(importance_mem.entries)}")
```

### 5.6.2 Forgetting Curve

```python
class ForgettingCurve:
    def __init__(self, decay_rate: float = 0.1):
        self.decay_rate = decay_rate

    def recall_probability(self, entry: MemoryEntry, current_time: float = None) -> float:
        if current_time is None:
            current_time = time.time()
        age = current_time - entry.timestamp
        hours = age / 3600
        probability = entry.importance * (2.718 ** (-self.decay_rate * hours))
        return max(0.0, min(1.0, probability))

    def should_forget(self, entry: MemoryEntry, threshold: float = 0.1) -> bool:
        return self.recall_probability(entry) < threshold


curve = ForgettingCurve(decay_rate=0.05)
old_entry = MemoryEntry(content="old info", memory_type=MemoryType.SEMANTIC, timestamp=time.time() - 86400, importance=0.5)
new_entry = MemoryEntry(content="new info", memory_type=MemoryType.SEMANTIC, timestamp=time.time(), importance=0.8)
print(f"Old recall prob: {curve.recall_probability(old_entry):.3f}")
print(f"New recall prob: {curve.recall_probability(new_entry):.3f}")
print(f"Forget old: {curve.should_forget(old_entry, 0.2)}")
```

### 5.6.3 Memory Compression

```python
class MemoryCompressor:
    def __init__(self, llm_fn: Callable):
        self.llm = llm_fn

    def compress(self, entries: List[MemoryEntry]) -> str:
        text = "\n".join([e.content for e in entries])
        compression_prompt = f"""Compress these memories into a concise summary.
Keep all important facts and preferences.

Memories:
{text}

Compressed:"""
        return self.llm(compression_prompt)

    def batch_summarize(self, entries: List[MemoryEntry], batch_size: int = 5) -> List[str]:
        summaries = []
        for i in range(0, len(entries), batch_size):
            batch = entries[i:i + batch_size]
            summary = self.compress(batch)
            summaries.append(summary)
        return summaries


compressor = MemoryCompressor(lambda p: "Compressed summary of agent memories.")
entries = [
    MemoryEntry("User prefers Python for data science", MemoryType.SEMANTIC),
    MemoryEntry("User is working on an AI agent project", MemoryType.SEMANTIC),
]
summary = compressor.compress(entries)
print(f"Compressed: {summary}")
```

## Summary

Memory and state management are critical for building capable AI agents. Short-term memory maintains the current conversation context with sliding windows and summarization. Long-term memory persists facts, preferences, and knowledge across sessions using vector stores and key-value stores. Episodic memory records past actions and outcomes for experience-based learning. State management patterns include state machines with shared state for multi-agent systems. Save/restore mechanisms with checkpointing enable persistence, rollback, and session management. Memory optimization techniques include importance-based retention, forgetting curves, and compression.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Separate memory types | Use different stores for short-term, long-term, and episodic memory |
| Implement forgetting | Not all information is equally important — prune aggressively |
| Use vector memory | Semantic search over past interactions enables relevant recall |
| Checkpoint regularly | Save state at each step for debugging and recovery |
| Compress conversation | Summarize old turns to fit within context window limits |
| Share state carefully | Use locks for concurrent agent access to shared state |

## Interview Q&A

<details class="tp-qa-card" data-qid="ag05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What types of memory do AI agents use?
  </summary>
  <div class="tp-qa-answer">
    <p>AI agents use three types of memory. Short-term memory holds the current conversation context (recent messages, current task state) and is limited by the LLM's context window. Long-term memory persists information across sessions using external storage (databases, vector stores, files). Episodic memory stores specific past events and experiences that can be retrieved and replayed. Additionally, procedural memory stores how to perform tasks (tool usage patterns, workflows). Each memory type serves a different purpose: short-term for immediate coherence, long-term for user preferences and facts, episodic for learning from past mistakes, and procedural for efficient task execution. Production agents typically combine all four types, with size limits and eviction policies for each.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does vector search work for long-term memory?
  </summary>
  <div class="tp-qa-answer">
    <p>Vector search for memory works by converting text into embeddings (fixed-size numerical vectors using models like text-embedding-ada-002) and storing them in a vector database. When a new query arrives, it's embedded with the same model, and the database finds the most similar stored vectors using cosine similarity or dot product. The retrieved memories are then added to the LLM prompt as context. Key parameters: top-K (how many memories to retrieve), similarity threshold (minimum score to include), and recency boost (multiply score by a recency factor). Vector search is preferred over keyword search because it captures semantic meaning — "how do I book a flight?" matches "travel reservation process" even though they share no keywords. Popular vector databases include Pinecone, Qdrant, Milvus, and pgvector.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is a memory manager in an agent system?
  </summary>
  <div class="tp-qa-answer">
    <p>A memory manager is a centralized service that orchestrates all memory operations across an agent system. It handles: (1) storing new memories (converting text to embeddings, inserting into vector store with metadata like timestamp, session ID, importance score); (2) retrieving relevant memories (embedding queries, searching vector store, ranking and filtering results); (3) memory consolidation (merging duplicate memories, pruning outdated ones, updating importance scores based on access frequency); (4) memory decay (reducing importance of unused memories over time until they're archived); and (5) session management (associating memories with sessions and users). The memory manager provides a clean API for the agent to access memory without knowing the underlying storage details. It also enforces memory limits and implements eviction policies (remove least recently used memories when the store exceeds capacity).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you manage context window limits?
  </summary>
  <div class="tp-qa-answer">
    <p>Managing context window limits requires strategies to fit the most relevant information within the LLM's token budget. Common approaches: (1) message pruning — remove oldest or least relevant messages while keeping recent ones; (2) message summarization — compress multiple messages into a summary, trading detail for space; (3) sliding window — keep only the last N messages, archiving older ones to long-term memory; (4) importance scoring — rank messages by relevance and drop low-scoring ones first; (5) token counting — track usage and trigger pruning when approaching the limit. Each strategy has tradeoffs: pruning is simple but may lose context, summarization preserves semantic content but loses verbatim details, sliding window works well for recent context but loses early conversation. Most production agents use a combination, with summarization for older context and a sliding window for recent messages.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What strategies exist for memory consolidation?
  </summary>
  <div class="tp-qa-answer">
    <p>Memory consolidation strategies reorganize and optimize stored memories for better retrieval and efficiency. Key strategies: (1) deduplication — detect and merge memories with near-identical content using similarity thresholds; (2) abstraction — generalize specific memories into broader patterns (e.g., multiple "user liked sci-fi movies" entries become "user's top genre: sci-fi"); (3) forgetting — reduce importance scores for memories that haven't been accessed recently; (4) hierarchical storage — keep high-level summaries in fast storage and detailed memories in slower storage; (5) temporal clustering — group memories by time periods for more efficient retrieval of recent context. Consolidation typically runs as a background process triggered by memory count thresholds or time intervals. The goal is to maintain a manageable, high-signal memory store that provides the most useful context without exceeding storage or retrieval latency limits.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How does state persistence work in LangGraph?
  </summary>
  <div class="tp-qa-answer">
    <p>State persistence in LangGraph saves the graph's state at each execution step using checkpointers. A checkpointer serializes the current state (all message history, node results, and execution metadata) to a storage backend after each node executes. The <code>StateGraph</code> is compiled with a checkpointer instance, and each invocation uses a thread ID to identify the conversation session. On subsequent invocations with the same thread ID, the graph loads the last checkpoint and continues from that point rather than starting fresh. Persistence backends include: in-memory (for testing), SQLite (single-process, file-based), Postgres (production, multi-process), and Redis (high-performance, caching). State persistence enables conversation continuity — the agent remembers past interactions even across server restarts — and is essential for any multi-turn agent application.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is semantic memory and how does it differ from episodic memory?
  </summary>
  <div class="tp-qa-answer">
    <p>Semantic memory stores factual knowledge independent of specific experiences — like "Paris is the capital of France" or "user prefers email over Slack for notifications". Episodic memory stores specific events with temporal context — like "last time user asked about pricing, they chose the enterprise plan on March 15th". The key difference is that semantic memory stores generalizable facts extracted from experiences, while episodic memory stores the raw experiences themselves. For agents, semantic memory grows more useful over time as patterns emerge from many interactions. Episodic memory is better for debugging ("what exactly happened in that last session?") and for learning from specific past mistakes. Both are typically stored in vector databases but with different indexing strategies — semantic memories are clustered by topic, episodic memories by time.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you implement message pruning?
  </summary>
  <div class="tp-qa-answer">
    <p>Message pruning removes selected messages from the conversation history to stay within context limits. Implementation tracks message metadata (timestamp, token count, role, importance score) and applies a pruning policy when total tokens exceed a threshold. The simplest policy removes oldest messages first, but better policies consider: message role (user messages may be more important than system messages), importance score (tagged by the agent during execution), and whether a message has been referenced in later responses. A summarization-based approach replaces a block of pruned messages with a generated summary. Implementation uses a <code>MessageManager</code> class with a <code>prune(max_tokens)</code> method that calculates current usage, identifies candidates for removal, and reconstructs the message array. Production systems log all pruned messages for debugging and audit trails.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is a sliding window buffer and how does it work?
  </summary>
  <div class="tp-qa-answer">
    <p>A sliding window buffer keeps only the N most recent messages in the LLM context, discarding older ones. It works by maintaining a list of messages with a fixed maximum size — when a new message arrives and the buffer is full, the oldest message is removed before adding the new one. The window size is typically set below the LLM's context limit (e.g., 7000 tokens for an 8000-token model) to leave room for system prompts and tool results. Variants include: (1) token-based window (count tokens, not messages); (2) time-based window (keep messages from the last N minutes); (3) importance-aware window (evict lowest-importance message). The sliding window is simple and efficient, but can drop important early context. Production agents often combine it with summarization — the removed older messages are summarized and kept as a single condensed message at the start of the window.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag05-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement a summary-based memory system?
  </summary>
  <div class="tp-qa-answer">
    <p>A summary-based memory system maintains a running summary of the conversation that's updated after each exchange. Implementation: (1) initialize with a placeholder summary; (2) after each user/assistant turn, pass the current summary and new messages to an LLM to generate an updated summary; (3) always include the summary in the prompt alongside recent messages (within the sliding window). The summary is stored in long-term memory keyed by session ID. This preserves the gist of early conversation even when those messages are pruned from the context window. The system also stores important facts extracted from the conversation (semantic memory) and recent detailed history (episodic memory). When constructing the prompt, the agent includes: the running summary, recent messages from the sliding window, relevant semantic memories from vector search, and any relevant episodic memories. This layered approach maximizes relevant context within the token budget.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="agent-s5-quiz1">
<summary><strong>1.</strong> Which memory type stores facts and knowledge about the user?</summary>
A. Short-term memory
B. Episodic memory
C. Semantic memory
D. Working memory
Answer: C
</details>

<details data-qid="agent-s5-quiz2">
<summary><strong>2.</strong> What is the primary challenge with short-term conversation memory?</summary>
A. Storage cost
B. Context window token limits
C. Encryption requirements
D. Network latency
Answer: B
</details>

<details data-qid="agent-s5-quiz3">
<summary><strong>3.</strong> How does a summarizing memory reduce token usage?</summary>
A. By deleting all old messages
B. By compressing old conversation turns into a summary
C. By using shorter words
D. By storing messages in binary format
Answer: B
</details>

<details data-qid="agent-s5-quiz4">
<summary><strong>4.</strong> What is the purpose of importance-based retention?</summary>
A. To store all memories equally
B. To keep high-value information while discarding low-value information
C. To encrypt important memories
D. To share memories between agents
Answer: B
</details>

<details data-qid="agent-s5-quiz5">
<summary><strong>5.</strong> What does checkpointing enable in agent systems?</summary>
A. Faster execution
B. State persistence, recovery, and rollback
C. Better tool selection
D. Improved prompt engineering
Answer: B
</details>

## Exercises

1. Implement a hybrid memory system with sliding window (last 5 messages) and summarization (LLM-generated summary of older messages). Test with 15 messages and print the context.

2. Build a vector memory store that stores agent experiences as embeddings. Implement search with 10 test memories and demonstrate that semantically similar queries retrieve relevant results.

3. Create a persistent session manager that saves agent state to JSON files and restores it on subsequent interactions. Run a 3-turn conversation, save, restart, and verify state continuity.

4. Implement an importance-based forgetting system where memories with importance < 0.3 are discarded and low-access-count memories are pruned. Test with 20 entries of varying importance.

5. Design a shared state system for multi-agent collaboration with read/write locks. Simulate 3 agents reading and updating shared state concurrently without data races.
