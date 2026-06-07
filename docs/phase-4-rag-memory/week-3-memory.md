# Week 3: Memory Systems

**Duration:** September 15-21, 2026 | **Hours:** 35

---

## Day 1-2: Mem0

```python
from mem0 import Memory

memory = Memory()

# Store
memory.add(
    "User ka naam Raushan hai, woh Patna mein rehta hai",
    user_id="raushan_123"
)

# Search
results = memory.search(
    "User kahan rehta hai?",
    user_id="raushan_123"
)
```

## Day 3-4: Custom Memory (Laravel + pgvector)

```php
// Store memory
AgentMemory::updateOrCreate(
    ['user_id' => $userId, 'key' => 'preferred_item'],
    ['value' => 'cement bags 50kg']
);

// Load memory for context
$memories = AgentMemory::where('user_id', $userId)
    ->pluck('value', 'key')
    ->toArray();
```

## Day 5-6: Multi-User Memory

- User isolation
- Memory expiration (TTL)
- Cross-session continuity

## Integration

Build a memory layer that:
- Stores conversations automatically
- Extracts important facts via LLM
- Retrieves relevant memories for context
