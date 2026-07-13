# Chapter 3: Caching Strategies and Patterns
> **Previous:** [02 Scalability Load Balancing](./02-scalability-load-balancing.md) | **Next:** [04 Database Foundations](./04-database-foundations.md)

---

## Learning Objectives

- Explain temporal and spatial locality and their relationships to caching effectiveness
- Distinguish five caching patterns and select the appropriate one for a given access pattern
- Implement a cache-aside pattern with Redis in a production-like setting
- Design and implement an LRU cache using a doubly linked list and hash map
- Analyze eviction policies (LRU, LFU, FIFO, MRU, ARC, 2Q) with strengths and weaknesses
- Solve the thundering herd problem using mutex locking and probabilistic early expiration
- Model cache consistency trade-offs and apply invalidation strategies
- Analyze real-world cache architectures including Facebook's TAO and Twitter's Twemproxy

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/system-design/03-caching/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/hero.svg" alt="Chapter Banner: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/handwritten-notes.svg" alt="Handwritten Notes: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/sticky-notes.svg" alt="Sticky Notes: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/visual-explanation.svg" alt="Visual Explanation: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/architecture.svg" alt="Architecture: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/workflow.svg" alt="Workflow: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/mindmap.svg" alt="Mind Map: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/comparison.svg" alt="Comparison: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/cheatsheet.svg" alt="Cheat Sheet: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/interview-quiz.svg" alt="Quiz Card: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/03-caching/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/03-caching/social-card.svg" alt="Social Card: Chapter 3: Caching Strategies and Patterns" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


## Chapter at a Glance

| Aspect | Details |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Design Decisions]
    B --> C[Real-World Examples]
```
|--------|---------|
| **Scope** | Locality, caching patterns, eviction policies, invalidation, CDN |
| **Key Concepts** | Core topics covered in Chapter 3: Caching Strategies and Patterns |
| **Design Skills** | Cache pattern selection, eviction tuning, thundering herd prevention |
| **Interview Angle** | Frequently tested in system design interviews |

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Locality, caching patterns, eviction policies, invalidation, CDN |
| **Key Concepts** | Cache-aside, read/write-through, write-behind, refresh-ahead |
| **Eviction Policies** | LRU, LFU, FIFO, MRU, ARC, 2Q ? strengths and weaknesses |
| **Thundering Herd** | Mutex locking and probabilistic early expiration (XFetch) |
| **Invalidation** | TTL, event-driven, write-invalidate ? consistency trade-offs |
| **Real-World** | Facebook TAO, Twitter Twemproxy |

---
---

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
    B[Concept Comparison]
    A --> B
    C[Quick Reference]
    B --> C
    D[CrossApplication Matrix]
    C --> D
    E[Chapter Quiz]
    D --> E
```

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation ? master it before moving to examples and exercises.

![Caching Strategies Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/03-caching.png)

### Locality of Reference


> **Pro Tip:** Master this concept thoroughly ? it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept ? it appears in nearly every system design interview. Understand both the how and the why.

> **Warning:** A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements.

> **Pro Tip:** Master this concept thoroughly ? it appears in nearly every system design interview.
Caching works because of locality of reference — the observation that accessed data is not uniformly distributed.

**Temporal locality:** If a piece of data is accessed now, it is likely to be accessed again soon. Examples: a user's session data, the hot tweet in a timeline, the current page's CSS file. Temporal locality is the reason LRU (Least Recently Used) eviction works well: recently accessed items are kept, untouched items are evicted.

**Spatial locality:** If a piece of data is accessed, nearby data is likely to be accessed soon. Examples: reading a contiguous block of disk sectors, iterating over an array, loading a page of search results. Spatial locality is the reason cache lines fetch 64 bytes from RAM even when only 4 are needed.

**Cache effectiveness metric:**

$$hit\_rate = \frac{cache\_hits}{cache\_hits + cache\_misses}$$

A well-tuned cache for an internet application achieves 90-99% hit rate. Below 85% hit rate, the cache may be doing more harm than good (serving stale data, adding operational complexity, consuming memory for negligible throughput gain).

---

### Cache Hierarchy


> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Caching occurs at every level of a modern system. Each level is faster, smaller, and more expensive per byte than the one below it.

| Level | Type | Size | Latency | Managed by |
|-------|------|------|---------|------------|
| L1 | CPU cache | 32-64 KB | ~1 ns | Hardware |
| L2 | CPU cache | 256-512 KB | ~4 ns | Hardware |
| L3 | CPU cache | 4-32 MB | ~12 ns | Hardware |
| RAM | Main memory | 8-512 GB | ~100 ns | OS |
| Local disk | SSD | 256 GB-2 TB | ~50 µs | OS/App |
| Local memory cache | In-process (e.g., Guava cache) | 0-4 GB | ~5 µs | Application |
| Distributed cache | Redis, Memcached | 10-500 GB | ~1-5 ms | Application |
| Database buffer pool | InnoDB buffer pool, PostgreSQL shared buffers | 1-100 GB | ~100 µs | Database |
| CDN | Edge cache (CloudFront, Cloudflare) | Distributed | ~10-50 ms | CDN provider |

The **cache miss penalty** increases by orders of magnitude at each level. A miss in L1 (~1 ns) costs ~4 ns to fetch from L2. A miss in Redis (~5 ms) costs ~50 ms to fetch from the database. This asymmetry drives the entire caching strategy: maximize the hit rate at the fastest level possible.

---

### Caching Patterns


> **Remember:** Always articulate trade-offs clearly ? interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Five fundamental patterns govern every cache implementation.

#### Cache-Aside (Lazy Loading)

The application manages both the cache and the database. On a read:

```
1. Application checks cache for key K
2. If found (hit): return cached value. Done.
3. If not found (miss): query database for K
4. Store result in cache with TTL
5. Return result
```

On a write:

```
1. Application writes to database
2. Application invalidates (or updates) the cache entry for the key
```

```python
def get_user(user_id):
    # Cache-aside read
    user = cache.get(f"user:{user_id}")
    if user is not None:
        return user

    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    cache.set(f"user:{user_id}", user, ttl=3600)
    return user

def update_user(user_id, data):
    # Cache-aside write
    db.execute("UPDATE users SET name = ? WHERE id = ?", data.name, user_id)

    # Invalidate, don't update — simpler and avoids race conditions
    cache.delete(f"user:{user_id}")
```

**Pros:** Simple to implement. The cache only contains data that is actually requested. Cache failure does not crash the application (it degrades to direct DB reads). TTL provides natural invalidation.

**Cons:** Three round-trips on a cache miss (check cache, query DB, write cache) increases latency for cold data. Stale data window between cache write and TTL expiry.

#### Read-Through

The cache layer itself is responsible for loading data from the database on a miss. The application talks only to the cache.

```
1. Application requests key K from cache
2. Cache hit: return cached value
3. Cache miss: cache loads value from database (transparent to application)
4. Cache stores value and returns to application
```

**Pros:** Simplifies application code. The application is completely decoupled from the database.

**Cons:** The cache must be configured with a loader/DAO for each data type. Less flexible for complex queries (joins, aggregations).

#### Write-Through

Every write goes through the cache to the database. The cache writes to the DB first, and only returns success after both writes succeed.

```
1. Application writes data to cache
2. Cache writes data to database
3. Cache confirms to application only after DB write succeeds
```

**Pros:** Cache is always consistent with the database (strong consistency). Read-after-write always returns the latest value from cache.

**Cons:** Higher write latency (must wait for DB confirmation). Unnecessary DB write if the data is never read again (wasted work). The database is the bottleneck on writes.

#### Write-Behind (Write-Back)

Writes go to the cache, which acknowledges immediately and asynchronously persists to the database.

```
1. Application writes data to cache
2. Cache acknowledges success immediately
3. Later (batch or timer): cache flushes accumulated writes to database
```

**Pros:** Very low write latency (cache is fast). Can batch writes for DB efficiency (1000 writes batched into one 1000-row INSERT).

**Cons:** Data loss risk if the cache fails before flushing to DB. The cache must manage a write-back queue, which adds complexity. Consistency window: the database lags behind the cache.

#### Refresh-Ahead

The cache proactively refreshes a key before it expires, based on access patterns:

```
1. Application requests key K
2. Cache hit: return value, check if key is near expiry
3. If near expiry and access frequency is high: asynchronously reload from DB
4. Cache miss: synchronous DB load, return value
```

**Pros:** Reduces latency for hot keys (never pay the cold-start miss penalty). Smooths out DB load.

**Cons:** May refetch data that is no longer needed (wasteful prediction). Complex to tune the "near expiry" threshold.

---

### Eviction Policies


When the cache is full, something must be evicted. The choice of eviction policy is a bet on future access patterns — which entry is least likely to be needed again?

#### LRU — Least Recently Used

Evict the item accessed furthest in the past.

**Implementation:** Doubly linked list + hash map. On access: move the item to head of list (O(1)). On eviction: remove from tail (O(1)).

**Pros:** Excellent for temporal locality. Simple O(1) implementation.

**Cons:** Vulnerable to scan attacks (a one-time scan of many items evicts all hot data). Does not distinguish between "frequently used but not right now" and "rarely used."

#### LFU — Least Frequently Used

Evict the item with the lowest access frequency.

**Pros:** Resists scan attacks (one-time accesses have low frequency). Good for workload where popularity distribution is stable.

**Cons:** High implementation complexity (need frequency counters + min-heap or frequency buckets). Suffers from "frequency inertia" — once-hot items remain in cache even after they become cold, because their frequency counters take time to decay.

#### FIFO — First In, First Out

Evict the item that was inserted earliest.

**Pros:** Simple queue implementation. No metadata updates on access (cache hits are free).

**Cons:** Ignores access patterns entirely. The most valuable hot item can be evicted simply because it was inserted first. Poor hit rate in practice.

#### MRU — Most Recently Used

Evict the most recently used item.

**Counter-intuitive but useful for:** Scenarios where older items are more likely to be reused. For example, a "scrollable feed" where users start at the most recent item and move backward — recent items have been seen, older ones have not.

#### ARC — Adaptive Replacement Cache

Combines LRU and LFU by maintaining four lists: recent (recency), frequent (frequency), ghost entries (evicted but tracked). Adaptively balances between recency and frequency based on observed workload.

**Pros:** Self-tuning — no manual configuration of recency vs frequency weight. Outperforms LRU on most real-world workloads.

**Cons:** Complex implementation. Ghost entries consume memory.

#### 2Q — Two-Queue Algorithm

Maintains three queues: Am (FIFO, for single-access items), A1 (FIFO for recently accessed that do not appear in Am), and Am (LRU for frequently accessed items). An item starts in Am ? promoted to A1 on second access ? promoted to Am on third access.

**Pros:** Resists scan attacks better than LRU (a single scan fills Am, not the main cache). Better hit rate than LRU for many workloads.

**Cons:** More complex than LRU. Additional memory for metadata.

---

### Implementing an LRU Cache from Scratch


An LRU cache requires O(1) get and put operations. This demands a combination of a hash map (for O(1) lookups) and a doubly linked list (for O(1) removal and re-insertion).

```python
class DLinkedNode:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.cache = dict()               # key ? DLinkedNode
        self.head = DLinkedNode()          # dummy head (most recently used end)
        self.tail = DLinkedNode()          # dummy tail (least recently used end)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add_node(self, node):
        """Add node right after head."""
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node

    def _remove_node(self, node):
        """Remove an existing node from the linked list."""
        prev = node.prev
        nxt = node.next
        prev.next = nxt
        nxt.prev = prev

    def _move_to_head(self, node):
        """Move a node to the head (most recently used position)."""
        self._remove_node(node)
        self._add_node(node)

    def _pop_tail(self):
        """Pop the LRU node (just before tail)."""
        node = self.tail.prev
        self._remove_node(node)
        return node

    def get(self, key: int) -> int:
        node = self.cache.get(key)
        if not node:
            return -1
        # Mark as recently used
        self._move_to_head(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        node = self.cache.get(key)
        if node:
            # Key exists: update value and move to head
            node.value = value
            self._move_to_head(node)
            return
        # New key: create node
        new_node = DLinkedNode(key, value)
        self.cache[key] = new_node
        self._add_node(new_node)
        self.size += 1
        if self.size > self.capacity:
            # Evict LRU
            tail = self._pop_tail()
            del self.cache[tail.key]
            self.size -= 1
```

**Time complexity:** O(1) for both get and put.

**Space complexity:** O(capacity) for the linked list and hash map.

---

### Cache Invalidation


Keeping the cache consistent with the source of truth is the hardest problem in caching.

#### TTL-Based Invalidation

Each cache entry has a Time-To-Live (TTL). After TTL expires, the entry is automatically evicted. The next read triggers a cache miss and reloads fresh data.

```
cache.set(key, value, ttl=3600)   # valid for 1 hour
```

**Pros:** Simple, automatic, no coordination needed. Bounded staleness — data is never more than TTL old.

**Cons:** Data can be stale within the TTL window. Short TTL reduces cache effectiveness. Choosing the right TTL is workload-dependent and requires tuning.

#### Event-Driven Invalidation

The database publishes change events (via CDC — Change Data Capture, or explicit application events). A subscriber receives the event and invalidates or updates the cache.

```
Application update:
  1. Write to DB
  2. Publish event "user:42:updated" to Kafka/RabbitMQ
  3. Cache consumer receives event
  4. Cache deletes key "user:42"
```

**Pros:** Near-instant invalidation (sub-second). TTL can be long or infinite since manual invalidation handles consistency.

**Cons:** Requires a message broker. Eventual consistency — there is a window between DB update and cache invalidation. If the invalidation message is lost, the cache is permanently stale (until TTL fires).

#### Write Invalidate

On every write to the source, explicitly delete (or update) the corresponding cache entry.

```
def update_user(user_id, name):
    db.execute("UPDATE users SET name = ? WHERE id = ?", name, user_id)
    cache.delete(f"user:{user_id}")          # invalidate (lazy: next read fetches fresh)
    # OR
    user = db.execute("SELECT * FROM users WHERE id = ?", user_id)
    cache.set(f"user:{user_id}", user, ttl=3600)  # update (eager: cache stays hot)
```

**Invalidate vs update:** Invalidation is safer — writing the updated value directly to the cache risks writing a stale value if another concurrent writer commits a newer version. Invalidation causes the next read to fetch the latest value. The trade-off is one extra read (the cache miss).

---

### The Thundering Herd Problem


When a popular cache key expires, thousands of concurrent requests all see a miss and simultaneously query the database. This can overwhelm the database.

```
Time 0:    key "homepage_feed" expires
Time 0.01: 500 requests check cache ? all miss
Time 0.02: 500 requests query DB simultaneously
Time 0.05: Database CPU spikes to 100%, latency degrades
Time 0.10: Cascading failure — DB connection pool exhausted
```

**Solution 1: Mutex Locking (Cache Stampede Prevention)**

Only one request reloads the cache; others wait for the result.

```python
def get_homepage():
    cached = cache.get("homepage_feed")
    if cached is not None:
        return cached

    # Try to acquire a distributed lock
    lock_key = "lock:homepage_feed"
    if cache.setnx(lock_key, "locked", ttl=5):   # set if not exists
        try:
            result = db.query("SELECT * FROM feed ORDER BY id DESC LIMIT 100")
            cache.set("homepage_feed", result, ttl=300)
            return result
        finally:
            cache.delete(lock_key)
    else:
        # Another request is reloading. Wait and retry.
        sleep(0.05)
        return get_homepage()   # recursion — will hit cache
```

**Solution 2: Probabilistic Early Expiration (XFetch Algorithm)**

Refresh the cache probabilistically before the TTL actually expires. This smooths the load over time rather than concentrating it at the TTL boundary.

```python
import random

def should_refresh(ttl_remaining, total_ttl, beta=1.0):
    """XFetch algorithm: return True if we should proactively refresh."""
    if ttl_remaining <= 0:
        return True
    probability = (total_ttl - ttl_remaining) / total_ttl
    # The probability of refreshing increases as the entry ages
    threshold = random.random() * beta
    return probability > threshold

# Called on every cache read:
if should_refresh(ttl_remaining=60, total_ttl=300, beta=2.0):
    # Asynchronously reload the cache entry
    thread_pool.submit(reload_cache_entry, key)
```

The parameter ß (beta) controls the aggressiveness: ß=0 means refresh immediately (always); ß=8 means never refresh early (pure TTL). The XFetch algorithm ensures that the expected number of concurrent recomputations at the TTL boundary is approximately 1, regardless of the number of requesting clients.

---

### Global Cache vs Distributed Cache


**Global cache (single node):** A single cache instance shared by all application servers.

```
Pros: Simple, no consistency issues, no distribution overhead.
Cons: Single point of failure, limited by single-node memory, bottleneck for all traffic.
```

**Distributed cache (Redis Cluster, Memcached):** Data is partitioned across multiple nodes, typically using consistent hashing.

```
Redis Cluster:
- Automatic sharding across 16384 hash slots
- Keys are mapped to a slot: HASH_SLOT = CRC16(key) mod 16384
- Each node owns a subset of slots
- Replication: each master has 1+ replicas (for failover)
- No central coordinator — gossip protocol for cluster state

Memcached:
- Client-side consistent hashing
- No replication (Memcached is a cache, not a store — data loss is acceptable)
- No persistence
- Very low overhead (simpler than Redis, faster for simple get/set)
```

| Feature | Redis (Cluster) | Memcached |
|---------|---------------|-----------|
| Data types | String, hash, list, set, sorted set, stream, etc. | String only (binary) |
| Persistence | RDB snapshots, AOF log | None |
| Replication | Yes (leader-follower) | No |
| Sharding | Automatic (hash slots) | Client-side (consistent hashing) |
| Lua scripting | Yes | No |
| Pub/Sub | Yes | No |
| Memory efficiency | Moderate (overhead for data structures) | High (minimal metadata) |

---

### Cache Consistency


**Strong consistency** for caches: every read returns the most recently written value. Achievable only with write-through + distributed coordination (blocking writes until all cache nodes acknowledge). Expensive and rarely used for caches.

**Eventual consistency** for caches: after a write, the cache converges to the updated value within a bounded time window. This is the default for most caching systems. Accept staleness up to TTL.

Between these extremes:

- **Read-your-writes consistency:** After a user updates data, their subsequent reads see the new value (but other users may see stale data). Implemented by versioning or per-user cache affinity.
- **Monotonic reads:** Once a user reads a value, they never see an older value for the same key. Requires a monotonic sequence number.

---

### CDN Caching


Content Delivery Networks cache static (and sometimes dynamic) content at edge nodes geographically close to users.

**Cache-Control headers** control CDN behavior:

```
Cache-Control: public, max-age=31536000, immutable   # 1 year, never re-validate
Cache-Control: public, max-age=60, must-revalidate    # 1 minute, must check origin
Cache-Control: private, max-age=0                     # do not cache
```

**Edge caching:** CDN nodes cache responses by URL. On a miss (not in edge cache), the edge fetches from the origin. Cache hit serves from the edge — significantly reduced latency.

**Purge strategies:**
- **Time-based purge:** Content expires based on Cache-Control headers.
- **API-based purge:** CDN API to immediately invalidate specific URLs or patterns.
- **Tag-based purge (Surrogate-Key):** Assign tags to responses; purge all responses with a given tag.

**CDN for dynamic content:** Modern CDNs (Cloudflare, Fastly) can cache JSON API responses with short TTLs (1-30 seconds), dramatically reducing origin server load for dynamic content.

---

### Real-World Systems


**Facebook's TAO — The Graph Cache at Scale.** Facebook's social graph (users, friends, pages, likes) does not fit traditional caching patterns. TAO is a geographically distributed, always-consistent graph cache layer that sits between application servers and MySQL.

Key properties:
- **Object association cache:** TAO caches graph associations (friend-of-friend, page-liked-by-user), not just key-value pairs.
- **Write-through to MySQL:** Writes go to TAO, TAO writes to MySQL synchronously, then TAO broadcasts invalidation to all regions.
- **Read-after-write consistency:** A write in one region is visible to reads in all regions within milliseconds.
- **Batched API:** TAO exposes a graph query API (get object, get associations, count associations). Applications batch many graph queries into a single TAO request.

TAO serves billions of reads per second and is the layer that makes the Facebook News Feed possible at global scale.

**Twitter's Twemproxy (Nutcracker).** A proxy layer that distributes cache requests across multiple Memcached or Redis servers. Acts as a transparent sharding layer: application servers talk to Twemproxy as if it were a single cache, and Twemproxy routes requests to the correct backend using consistent hashing.

Key properties:
- **Pooling:** Aggregates connections from many app servers to fewer cache connections (reduces connection overhead).
- **Sharding:** Consistent-hash based routing to backend nodes.
- **Auto-ejection:** Detects failed nodes and re-routes traffic.
- **Pipeline support:** Batches multiple cache operations into single backend calls.

Twemproxy reduced Twitter's cache connection count from millions to thousands, solving a systemic connection-exhaustion problem.

---

## Examples

### Example 1: Cache-Aside with Redis for a User Profile Service

```python
import redis
import json
import asyncio

r = redis.Redis(host='cache-cluster.example.com', port=6379,
                decode_responses=True)

USER_CACHE_TTL = 300  # 5 minutes

async def get_user_profile(user_id):
    cache_key = f"user_profile:{user_id}"
    cached = r.get(cache_key)

    if cached is not None:
        return json.loads(cached)

    # Cache miss — load from database
    profile = await db.fetch_one(
        "SELECT id, name, avatar_url, bio FROM users WHERE id = $1",
        user_id
    )

    if profile is None:
        return None

    profile_dict = dict(profile)
    r.setex(cache_key, USER_CACHE_TTL, json.dumps(profile_dict))
    return profile_dict

async def update_user_profile(user_id, updates):
    await db.execute(
        "UPDATE users SET name = $1, bio = $2 WHERE id = $3",
        updates['name'], updates['bio'], user_id
    )
    # Invalidate cache — next read will fetch fresh data
    r.delete(f"user_profile:{user_id}")
```

**Expected behavior:**
- First read for user 42: cache miss ? DB query ? populate cache ? return
- Second read for user 42 (within 5 min): cache hit ? return immediately
- Update user 42: DB update ? cache delete
- Read after update: cache miss ? DB query (fresh data) ? repopulate cache

### Example 2: Probabilistic Early Expiration in JavaScript (Node.js)

```javascript
const redis = require('redis');
const client = redis.createClient();

const BETA = 1.5;
const TTL_SECONDS = 600;

function shouldRefresh(ttlRemaining) {
  if (ttlRemaining <= 0) return true;
  const age = TTL_SECONDS - ttlRemaining;
  const probability = age / TTL_SECONDS;
  return probability > (Math.random() * BETA);
}

async function getFeed(userId) {
  const cacheKey = `feed:${userId}`;
  const cached = await client.get(cacheKey);
  const ttl = await client.ttl(cacheKey);

  if (cached && !shouldRefresh(ttl)) {
    return JSON.parse(cached);
  }

  if (cached && shouldRefresh(ttl)) {
    // Asynchronously refresh in background
    refreshFeedAsync(userId);
    return JSON.parse(cached);
  }

  // Cold miss — synchronous reload
  const feed = await db.queryFeed(userId);
  await client.setEx(cacheKey, TTL_SECONDS, JSON.stringify(feed));
  return feed;
}

async function refreshFeedAsync(userId) {
  const lockKey = `lock:feed:${userId}`;
  const acquired = await client.setNX(lockKey, '1');
  if (!acquired) return;  // another request is already refreshing

  await client.expire(lockKey, 10);
  try {
    const feed = await db.queryFeed(userId);
    await client.setEx(`feed:${userId}`, TTL_SECONDS, JSON.stringify(feed));
  } finally {
    await client.del(lockKey);
  }
}
```

**Expected behavior:**
- As the cache entry ages, the probability of refresh increases smoothly
- At TTL=0, refresh is guaranteed
- The beta parameter controls how early refreshes begin (higher = later, more concentrated at TTL boundary)
- Mutex lock ensures only one background refresh runs per key

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Metric |
|---------|-----------|------------|
| Theory | Core topic covered in Chapter 3: Caching Strategies and Patterns | Defined by specific measurable attributes |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Topic | Key Point |
|-------|-----------|
| Theory | Fundamental concept for Chapter 3: Caching Strategies and Patterns |

---

## Cross-Application Matrix

| Component | When to Use | Trade-Off |
|-----------|------------|-----------|
| Theory | Appropriate for specific system contexts | Each choice involves trade-offs |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

**Q2:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

**Q3:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 3: Caching Strategies and Patterns | Fundamental to system design |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept for Chapter 3: Caching Strategies and Patterns |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|--------|-------------------|-----------|
| Theory | Relevant across multiple system design scenarios | Each choice has trade-offs |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** What is the primary trade-off discussed in this chapter?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content&lt;/details&gt;

**Q2:** Which concept is most fundamental to the topic of Chapter 3
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;Review the core sections&lt;/details&gt;

**Q3:** How does this chapter's main concept apply to real-world systems?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;See the Real-World Systems section&lt;/details&gt;

---


### Implementation: Caching Strategies and CDN

```typescript
class LRUCache { private capacity: number; private cache = new Map<string, { value: any; lastAccess: number; freq: number }>();
  constructor(cap: number) { this.capacity = cap; }
  get(key: string): any { if (!this.cache.has(key)) return -1; const entry = this.cache.get(key)!; entry.lastAccess = Date.now(); entry.freq++; return entry.value; }
  put(key: string, value: any): void { if (this.cache.has(key)) { this.cache.get(key)!.value = value; return; }
    if (this.cache.size >= this.capacity) { let oldest = ""; let minTime = Infinity; for (const [k, v] of this.cache) { if (v.lastAccess < minTime) { minTime = v.lastAccess; oldest = k; } } this.cache.delete(oldest); }
    this.cache.set(key, { value, lastAccess: Date.now(), freq: 0 }); }
}
class WriteThroughCache { private cache = new Map<string, any>();
  write(key: string, value: any, dbWrite: (k: string, v: any) => void): void { this.cache.set(key, value); dbWrite(key, value); }
  read(key: string, dbRead: (k: string) => any): any { if (this.cache.has(key)) return this.cache.get(key); const v = dbRead(key); this.cache.set(key, v); return v; }
}
class CacheAside { async read<T>(key: string, fetchFromDb: (k: string) => Promise<T>, cache: LRUCache): Promise<T> { const cached = cache.get(key); if (cached !== -1) return cached; const data = await fetchFromDb(key); cache.put(key, data); return data; } }
class CDNNode { private cache = new Map<string, { data: string; ttl: number; createdAt: number; hits: number }>();
  set(url: string, data: string, ttl = 3600): void { this.cache.set(url, { data, ttl, createdAt: Date.now(), hits: 0 }); }
  get(url: string): string | null { const entry = this.cache.get(url); if (!entry) return null; if (Date.now() - entry.createdAt > entry.ttl * 1000) { this.cache.delete(url); return null; } entry.hits++; return entry.data; }
  getStats(): { totalItems: number; totalHits: number; hitRate: number } { let hits = 0; for (const entry of this.cache.values()) hits += entry.hits; return { totalItems: this.cache.size, totalHits: hits, hitRate: this.cache.size > 0 ? hits / this.cache.size : 0 }; }
}
class DistributedCache { private nodes = new Map<string, LRUCache>();
  addNode(id: string, capacity: number): void { this.nodes.set(id, new LRUCache(capacity)); }
  getNodeForKey(key: string): LRUCache { const ids = [...this.nodes.keys()]; const hash = [...key].reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0); return this.nodes.get(ids[Math.abs(hash) % ids.length])!; }
  get(key: string): any { return this.getNodeForKey(key).get(key); }
  put(key: string, value: any): void { this.getNodeForKey(key).put(key, value); }
}
```

// caching
// distributed-systems-scalability implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'caching', data: { topic: 'distributed-systems-scalability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// caching - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'system-design demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'system-design', chapter: 'caching' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('system-design'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }

### TypeScript: LRU Cache (O(1) Get/Put)

This class implements a true O(1) LRU cache using a doubly linked list and a hash map — the production-grade approach used in Redis, Memcached, and database buffer pools.

```typescript
class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, ListNode<K, V>> = new Map();
  private head: ListNode<K, V>;
  private tail: ListNode<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = new ListNode<K, V>(null as any, null as any);
    this.tail = new ListNode<K, V>(null as any, null as any);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: K): V | -1 {
    const node = this.cache.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
  }

  put(key: K, value: V): void {
    const node = this.cache.get(key);
    if (node) {
      node.value = value;
      this.moveToHead(node);
      return;
    }
    const newNode = new ListNode(key, value);
    this.cache.set(key, newNode);
    this.addToHead(newNode);
    if (this.cache.size > this.capacity) {
      const removed = this.removeTail();
      this.cache.delete(removed.key);
    }
  }

  has(key: K): boolean { return this.cache.has(key); }

  size(): number { return this.cache.size; }

  clear(): void {
    this.cache.clear();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private addToHead(node: ListNode<K, V>): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: ListNode<K, V>): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private moveToHead(node: ListNode<K, V>): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  private removeTail(): ListNode<K, V> {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }
}

class ListNode<K, V> {
  constructor(
    public key: K,
    public value: V,
    public prev: ListNode<K, V> | null = null,
    public next: ListNode<K, V> | null = null
  ) {}
}

// -- Example ------------------------------------------------------
const cache = new LRUCache<string, number>(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
console.log('Get a:', cache.get('a')); // 1 — moves 'a' to head
cache.put('d', 4); // evicts 'b' (LRU)
console.log('Get b (evicted):', cache.get('b')); // -1
console.log('Cache size:', cache.size()); // 3
```

### TypeScript: Cache-Aside Pattern (Read/Write-Through, Write-Behind)

This class implements the three major cache access patterns — cache-aside, read-through, and write-behind — with configurable TTL and batch flush.

```typescript
interface DataStore<K, V> {
  get(key: K): Promise<V | null>;
  set(key: K, value: V): Promise<void>;
  delete(key: K): Promise<void>;
}

class CacheAside<K, V> {
  constructor(
    private cache: LRUCache<K, V>,
    private store: DataStore<K, V>,
    private ttlMs: number = 60000
  ) {}

  async read(key: K): Promise<V | null> {
    const cached = this.cache.get(key);
    if (cached !== -1) return cached as V;
    const value = await this.store.get(key);
    if (value !== null) {
      this.cache.put(key, value);
      setTimeout(() => this.cache.delete(key), this.ttlMs);
    }
    return value;
  }

  async write(key: K, value: V): Promise<void> {
    await this.store.set(key, value);
    this.cache.delete(key); // invalidate, don't update (race condition safe)
  }

  async invalidate(key: K): Promise<void> {
    this.cache.delete(key);
  }
}

class ReadThroughCache<K, V> {
  constructor(
    private cache: LRUCache<K, V>,
    private loader: (key: K) => Promise<V | null>,
    private ttlMs: number = 60000
  ) {}

  async get(key: K): Promise<V | null> {
    const cached = this.cache.get(key);
    if (cached !== -1) return cached as V;
    const value = await this.loader(key);
    if (value !== null) {
      this.cache.put(key, value);
      setTimeout(() => this.cache.delete(key), this.ttlMs);
    }
    return value;
  }
}

class WriteBehindCache<K, V> {
  private writeQueue: Map<K, V> = new Map();
  private flushTimer: ReturnType<typeof setInterval> | null = null;
  private flushing = false;

  constructor(
    private cache: LRUCache<K, V>,
    private store: DataStore<K, V>,
    private flushIntervalMs: number = 5000,
    private batchSize: number = 100
  ) {
    this.flushTimer = setInterval(() => this.flush(), this.flushIntervalMs);
  }

  async write(key: K, value: V): Promise<void> {
    this.cache.put(key, value);
    this.writeQueue.set(key, value);
    if (this.writeQueue.size >= this.batchSize) {
      await this.flush();
    }
  }

  async read(key: K): Promise<V | null> {
    const cached = this.cache.get(key);
    if (cached !== -1) return cached as V;
    return this.store.get(key);
  }

  private async flush(): Promise<void> {
    if (this.flushing || this.writeQueue.size === 0) return;
    this.flushing = true;
    const batch = new Map(this.writeQueue);
    this.writeQueue.clear();
    for (const [key, value] of batch) {
      try { await this.store.set(key, value); } catch (e) {
        this.writeQueue.set(key, value); // re-queue on failure
      }
    }
    this.flushing = false;
  }

  destroy(): void {
    if (this.flushTimer) clearInterval(this.flushTimer);
    this.flush();
  }
}

// -- Example: Cache-aside usage ----------------------------------
// const store: DataStore<string, string> = { get: async k => null, set: async (k, v) => {}, delete: async k => {} };
// const aside = new CacheAside(new LRUCache(100), store, 30000);
// const val = await aside.read('user:42');
```

### TypeScript: Redis Sentinel (Failover Simulation)

This class simulates the Redis Sentinel failover process — master election, replica promotion, and quorum-based decision making.

```typescript
interface SentinelNode {
  id: string;
  alive: boolean;
  masterId: string | null;
  votesFor: string | null;
  lastHeartbeat: number;
  configEpoch: number;
}

class RedisSentinel {
  private sentinels: Map<string, SentinelNode> = new Map();
  private master: string | null = null;
  private replicas: Set<string> = new Set();
  private failoverInProgress = false;

  constructor(private quorum: number = 2) {}

  addSentinel(id: string): void {
    this.sentinels.set(id, { id, alive: true, masterId: null, votesFor: null, lastHeartbeat: Date.now(), configEpoch: 0 });
  }

  setMaster(sentinelId: string, masterId: string): void {
    this.master = masterId;
    const s = this.sentinels.get(sentinelId);
    if (s) s.masterId = masterId;
  }

  addReplica(replicaId: string): void {
    this.replicas.add(replicaId);
  }

  markDown(nodeId: string): void {
    const s = this.sentinels.get(nodeId);
    if (s) s.alive = false;
  }

  markUp(nodeId: string): void {
    const s = this.sentinels.get(nodeId);
    if (s) s.alive = true;
  }

  heartbeat(): void {
    for (const [, s] of this.sentinels) {
      if (s.alive) s.lastHeartbeat = Date.now();
    }
  }

  detectFailure(timeoutMs: number = 30000): string[] {
    const now = Date.now();
    const failed: string[] = [];
    for (const [id, s] of this.sentinels) {
      if (s.alive && now - s.lastHeartbeat > timeoutMs) {
        s.alive = false;
        failed.push(id);
      }
    }
    return failed;
  }

  startElection(): { winner: string | null; votes: Map<string, number> } {
    const votes = new Map<string, number>();
    const alive = [...this.sentinels.values()].filter(s => s.alive);

    for (const s of alive) {
      const votedFor = alive[Math.floor(Math.random() * alive.length)].id;
      s.votesFor = votedFor;
      votes.set(votedFor, (votes.get(votedFor) ?? 0) + 1);
    }

    let winner: string | null = null;
    let maxVotes = 0;
    for (const [candidate, count] of votes) {
      if (count > maxVotes && count >= this.quorum) {
        maxVotes = count;
        winner = candidate;
      }
    }
    return { winner, votes };
  }

  failover(): { success: boolean; newMaster: string | null; steps: string[] } {
    const steps: string[] = [];
    steps.push('SDOWN: Sentinel detected master failure');

    const { winner, votes } = this.startElection();
    steps.push(`Election: ${[...votes.entries()].map(([k, v]) => `${k}=${v}`).join(', ')}`);

    if (!winner) {
      steps.push('FAIL: No sentinel reached quorum');
      return { success: false, newMaster: null, steps };
    }

    if (this.replicas.size === 0) {
      steps.push('FAIL: No replicas available for promotion');
      return { success: false, newMaster: null, steps };
    }

    const replicaList = [...this.replicas];
    const promoted = replicaList[Math.floor(Math.random() * replicaList.length)];
    this.master = promoted;
    this.failoverInProgress = true;
    steps.push(`PROMOTE: Replica ${promoted} promoted to master`);

    for (const rep of replicaList) {
      if (rep !== promoted) {
        steps.push(`REPLICAOF: ${rep} now replicates from ${promoted}`);
      }
    }

    this.failoverInProgress = false;
    steps.push('OK: Failover complete');
    return { success: true, newMaster: promoted, steps };
  }

  isHealthy(): boolean {
    const alive = [...this.sentinels.values()].filter(s => s.alive).length;
    return alive >= this.quorum && this.master !== null;
  }
}

// -- Example ------------------------------------------------------
const sentinel = new RedisSentinel(2);
for (let i = 0; i < 3; i++) sentinel.addSentinel(`sentinel-${i}`);
sentinel.setMaster('sentinel-0', 'redis-master-0');
sentinel.addReplica('redis-replica-1');
sentinel.addReplica('redis-replica-2');

console.log('=== Simulating master failure ===');
sentinel.markDown('sentinel-0');
const result = sentinel.failover();
result.steps.forEach(s => console.log('  -', s));
console.log('New master:', result.newMaster);
```

### Cache Architecture Patterns

```mermaid
flowchart TD
    classDef cache fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px
    classDef db fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px
    classDef client fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px
    classDef infra fill:#9013fe,color:#fff,stroke:#5c0e9e,stroke-width:2px

    subgraph Cache_Aside
        CA_CLIENT[Application]:::client --> CA_CACHE[Redis/Memcached]:::cache
        CA_CLIENT --> CA_DB[(Database)]:::db
        CA_CACHE -.->|Miss| CA_DB
        CA_DB -.->|Populate| CA_CACHE
    end

    subgraph Read_Write_Through
        RT_CLIENT[Application]:::client --> RT_CACHE[Cache Layer]:::cache
        RT_CACHE --> RT_DB[(Database)]:::db
    end

    subgraph Write_Behind
        WB_CLIENT[Application]:::client --> WB_CACHE[Cache Layer]:::cache
        WB_CACHE -.->|Async Batch| WB_DB[(Database)]:::db
        WB_CACHE --> WB_QUEUE[Write Queue]:::infra
        WB_QUEUE -.->|Periodic Flush| WB_DB
    end

    subgraph Refresh_Ahead
        RA_CLIENT[Application]:::client --> RA_CACHE[Cache Layer]:::cache
        RA_CACHE -.->|Near Expiry| RA_DB[(Database)]:::db
        RA_DB -.->|Async Refresh| RA_CACHE
    end

    subgraph CDN_Caching
        CDN_USER[User Browser]:::client --> CDN_EDGE[CDN Edge]:::infra
        CDN_EDGE --> CDN_ORIGIN[Origin Server]:::infra
        CDN_EDGE -.->|Cache Hit| CDN_USER
        CDN_ORIGIN -.->|Cache Miss| CDN_EDGE
    end

    subgraph Eviction_Policies
        EV_LRU[LRU: Recently Used]:::cache
        EV_LFU[LFU: Frequently Used]:::cache
        EV_ARC[ARC: Adaptive]:::cache
        EV_TTL[TTL: Time-Based]:::cache
    end
```

### Practical Takeaways

| Takeaway | Application |
|----------|-------------|
| Cache what you measure, not everything | Profile read patterns first — cache only data with high read-to-write ratio (>10:1) and temporal locality |
| Cache-aside is the safest default | Application manages both cache and DB; cache failure degrades gracefully to direct DB reads |
| LRU works for most workloads but is vulnerable to scans | Use ARC or 2Q if your workload has periodic batch scans that would evict hot data |
| Thundering herd requires both locking and early expiration | Use mutex for cold-start protection; use XFetch (ß=1.5) for smooth pre-expiration of hot keys |
| Invalidate, don't update | Cache invalidation (delete) is race-condition safe; direct cache updates risk writing stale values |
| TTL provides bounded staleness | Set TTL = acceptable staleness window, not "how long data is valid" |
| Multi-tier caching reduces latency by 10-100x | L1 (in-process) for hot keys, L2 (Redis) for warm data, L3 (DB/CDN) for cold reads |

### Case Study

**Twitter's Cache Architecture Evolution.** Twitter's caching infrastructure evolved through three distinct phases as the platform grew from 10M to 330M MAU. Phase 1 (2009): A single Redis instance cached user timelines with cache-aside pattern — each tweet read went to Redis, missed tweets were fetched from MySQL. This worked until a single celebrity tweet caused 50K QPS on a single cache key, melting down the Redis instance. Phase 2 (2011): Twitter deployed Twemproxy (Nutcracker), a proxy layer that distributed cache requests across 100+ Memcached nodes using consistent hashing with virtual nodes. This solved the sharding problem but introduced connection-exhaustion issues — each of 5,000 app servers opened connections to every Memcached node, totaling 500K connections.

**Phase 3 (2013-Present):** Twitter adopted a three-tier cache architecture. L1: Local in-process cache (Guava) on each app server for the hottest 1% of keys (5ms latency, 50MB per server). L2: Twemproxy-managed Redis Cluster with 256 nodes for warm data (5-10ms latency, 250GB total). L3: MySQL with replica reads for cache misses and cold data. The key innovation was probabilistic early expiration (XFetch with ß=1.0) combined with a distributed mutex per key — this eliminated the thundering herd problem entirely. When a key approaches TTL expiry (~80% age), each app server probabilistically decides to refresh; the mutex ensures only one server actually queries MySQL. This smoothed cache reloads from spiky (all servers at TTL boundary) to uniform across the TTL window.

**Business Impact.** The multi-tier cache reduced p99 read latency from 45ms to 8ms and cut MySQL read load by 94%. Twitter's cache infrastructure now handles 300B+ reads per day with a 98.7% overall hit rate. The Twemproxy connection aggregation reduced total cache connections from 500K to 8K, freeing OS resources and eliminating connection-timeout errors. This case demonstrates that caching at scale requires not just the right data structure (LRU with O(1) operations) but the right architecture (tiered, with XFetch for thundering herd prevention and consistent hashing for elastic scaling).

## Chapter Quiz

| # | Question | A | B | C | D | Answer |
|---|----------|---|---|---|---|--------|
| 1 | Which caching pattern is the most common and flexible? | Write-through | Read-through | Cache-aside | Write-behind | **C** |
| 2 | What is the primary vulnerability of LRU eviction? | High memory usage | Scan attacks | Slow performance | Complexity | **B** |
| 3 | The XFetch algorithm prevents which problem? | Cache poisoning | Memory fragmentation | Thundering herd | Cache stampede | **C** |
| 4 | Why should you invalidate rather than update cache on writes? | Invalidating is faster | Avoids race conditions | Reduces memory usage | Simplifies TTL | **B** |
| 5 | What does Facebook's TAO cache specialize in? | Static assets | User sessions | Graph associations | API responses | **C** |

## Summary

- Caching exploits temporal and spatial locality. A 90%+ hit rate indicates a well-tuned cache; below 85% the cache may be adding complexity without proportional benefit.
- The five caching patterns are Cache-aside, Read-through, Write-through, Write-behind, and Refresh-ahead. Cache-aside is the most common and flexible.
- LRU eviction is the default for most systems but is vulnerable to scan attacks. LFU resists scans but suffers from frequency inertia. ARC and 2Q are self-tuning alternatives.
- A production LRU cache requires O(1) operations via a doubly linked list combined with a hash map.
- The thundering herd problem occurs when many clients simultaneously reload an expired cache key. Mitigation strategies include distributed mutex locks and probabilistic early expiration (XFetch).
- Cache invalidation is harder than caching. TTL provides bounded staleness; event-driven invalidation provides near-instant updates; write-invalidate is the safest write strategy.
- Redis excels at data structure variety and optional persistence; Memcached excels at raw get/set throughput with minimal overhead.
- CDN caching moves content closer to users via edge nodes. Cache-Control headers, surrogate keys, and purge APIs control CDN behavior.
- Facebook TAO and Twitter Twemproxy demonstrate cache architectures at global scale with billions of reads per second.

---

## Exercises

<details>
<summary>Review Questions — Click to expand</summary>

### Review Questions (4-5)

1. Explain the difference between temporal and spatial locality. Provide an example of each from a typical web application workload.
   **Solution:** Temporal locality: a user's session data accessed on every page load (recently accessed, likely again soon). Spatial locality: loading a page of 50 search results from an array (adjacent data, likely accessed together).

2. What is the "scan attack" vulnerability in LRU caches and how does LFU mitigate it?
   **Solution:** A scan attack iterates through many unique keys, evicting all hot data from an LRU cache. LFU mitigates this because one-time scans have low frequency counts, so hot frequently-accessed items remain cached despite the scan.

3. Under what conditions would you choose Write-behind (write-back) over Write-through? What risks does this choice introduce?
   **Solution:** Choose Write-behind when write throughput is critical and some data loss is acceptable (logging, metrics, analytics). Risk: cache failure before flush causes permanent data loss. Write-behind also introduces a consistency window where DB lags behind cache.

4. Describe the XFetch algorithm. Why does it prevent the thundering herd problem while still providing fresh data?
   **Solution:** XFetch probabilistically refreshes cache entries before TTL expiry using a probability function based on entry age. With ß=1.0, the expected number of concurrent recomputations at TTL boundary ≈ 1, eliminating the herd while ensuring fresh data is loaded smoothly over time.

5. What is the difference between event-driven cache invalidation and TTL-based invalidation? When would you use each?
   **Solution:** TTL-based invalidation automatically evicts entries after a fixed time (bounded staleness, simple). Event-driven invalidation uses CDC or application events to immediately invalidate on data change (near-instant, but requires message broker). Use TTL for data with natural expiration (sessions); use event-driven for data where freshness is critical (prices, inventory).

</details>

<details>
<summary>Application Problems — Click to expand</summary>

### Application Problems (3-4)

1. Implement a thread-safe LRU cache in Python or JavaScript with a capacity of 1000 entries. The cache should support get(key) and put(key, value) operations in O(1) time. Use the doubly-linked-list approach described in the chapter.
   **Solution:** Use a Map for O(1) key lookups and a doubly linked list for O(1) eviction. On get: move accessed node to head. On put: if key exists, update and move to head; if new and at capacity, remove tail (LRU) and add new node at head. A TypeScript implementation is provided in this chapter's TS section.

2. Design a caching strategy for a product catalog API. Products are read 10,000x more often than written. Product prices change rarely but must be reflected within 30 seconds. Propose a caching pattern, eviction policy, TTL, and invalidation mechanism.
   **Solution:** Cache-aside pattern. LRU eviction (products have temporal locality). TTL = 30 seconds (matches freshness requirement). Invalidation: on price update, delete cache key so next read fetches fresh data. For popular products, consider write-through to avoid cache miss latency.

3. A cache with a 90% hit rate serves 50,000 QPS. Each cache hit takes 5ms (Redis). Each cache miss takes 100ms (DB query). Calculate the average response time. If the hit rate drops to 70% due to a misconfigured eviction policy, what is the new average response time?
   **Solution:** At 90%: avg = 0.9 * 5ms + 0.1 * 100ms = 4.5 + 10 = 14.5ms. At 70%: avg = 0.7 * 5ms + 0.3 * 100ms = 3.5 + 30 = 33.5ms. A 20% hit rate drop causes a 2.3x increase in average response time.

4. You have a 10-node Redis Cluster. Each node has 8 GB memory. Keys are 1 KB average. Compute the maximum number of keys the cluster can hold. Assuming 20-byte key names, what percentage of memory is overhead?
   **Solution:** Total memory = 10 × 8 GB = 80 GB = 80 × 10^9 bytes. Max keys = 80 × 10^9 / 1024 ≈ 78.1M keys. Overhead per key: Redis dict entry (~64 bytes) + key (20 bytes) + value pointer (~8 bytes) + SDS overhead (~16 bytes) ≈ 108 bytes. Data = 1024 bytes, total per key ≈ 1132 bytes. Overhead % = 108/1132 ≈ 9.5%.

</details>

<details>
<summary>Challenge Problem — Click to expand</summary>

### Challenge Problem (1)

You are designing the caching infrastructure for a real-time news aggregation platform. The platform ingests 10,000 articles per minute from sources worldwide and serves 100M daily active users. Each user sees a personalized feed.

**Solution Outline:**
1. **Three-tier cache:** CDN (Cloudflare) for static assets and top 50 viral articles (TTL=30s). Redis Cluster (distributed) for category pages (TTL=60s) and per-user timeline fragments (TTL=10s). Local in-process cache (Guava/Caffeine) for the hottest 0.1% of articles and user sessions.
2. **Eviction policies:** CDN: LRU. Redis: ARC (resists scan attacks from breaking news — new articles don't evict hot viral data). Local: LRU with small capacity (10K entries).
3. **Thundering herd:** For viral articles, use a two-tier approach: (a) Dedicated "hot cache" with longer TTL and pre-warming on trending detection; (b) XFetch (ß=1.0) for the general cache. On viral detection, proactively pre-compute and push to CDN edge.
4. **Personalization caching:** Cache per-user timeline fragments by computed hash of follow-sources. Invalidate on new article from followed source. Use write-through to ensure consistency within 10s.
5. **Cache warming:** On new DC deployment, replay the last 24 hours of cache writes from the existing DC at 10% of peak rate. Prioritize viral articles and top 1% of users. Use a dedicated warming service with rate limiting to avoid origin overload.
6. **CDN cost:** Daily reads = 100M × 50 (assume 50 items/user) = 5B reads. Static: 5B × 0.8 × 200KB = 800 TB/day. Dynamic: 5B × 0.2 × 50KB = 50 TB/day. Total = 850 TB/day × $0.02 = $17,000/day. Optimizations: (a) Use image CDN with WebP/AVIF compression (reduces 30%); (b) Implement Brotli compression for article content (reduces 50%); (c) Tiered CDN with regional edge caching.

</details>
