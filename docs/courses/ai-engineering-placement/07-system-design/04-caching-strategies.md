# Caching Strategies — Redis, CDN, and Application Cache

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand caching fundamentals and the cache hierarchy |
| LO2 | Implement Redis for distributed caching |
| LO3 | Configure CDN caching for static assets |
| LO4 | Apply cache invalidation strategies |
| LO5 | Handle cache stampede and thundering herd |
| LO6 | Design multi-tier caching for optimal performance |

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/04-caching-strategies/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Cache Hierarchy | L1/L2/L3, CDN, browser, app, database |
| 4.2 | Redis Caching | Data structures, expiration, persistence |
| 4.3 | CDN Caching | Edge locations, TTL, purge |
| 4.4 | Cache Patterns | Aside, through, behind, stampede protection |
| 4.5 | Cache Invalidation | TTL, write-through, event-driven |
| 4.6 | Cache Stampede | Mutex, early recompute, probabilistic |
| 4.7 | Multi-Tier Caching | Combining local + distributed cache |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Cache Hierarchy] --> B[Redis]
    B --> C[CDN]
    C --> D[Cache Patterns]
    D --> E[Invalidation]
    E --> F[Stampede Prevention]
    F --> G[Multi-Tier]
```

## 4.1 Cache Hierarchy

Caches exist at multiple levels in a system:

```mermaid
flowchart LR
    B[Browser Cache] --> C[CDN Cache]
    C --> D[Load Balancer Cache]
    D --> E[Application Cache]
    E --> F[Redis/Distributed Cache]
    F --> G[Database Cache]
    G --> H[Disk]
```

| Level | Location | Speed | Size | Example |
|-------|----------|-------|------|---------|
| L1 | CPU | 1ns | KB | CPU cache |
| Browser | Client | 10ms | MB | HTTP cache |
| CDN | Edge | 20ms | GB | CloudFront |
| App | Memory | 1ms | MB | In-memory dict |
| Distributed | Network | 3ms | GB | Redis |
| Database | Disk | 10ms | GB | Query cache |

## 4.2 Redis Caching

Redis is an in-memory data structure store used as cache.

```python
import redis

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

# Basic operations
r.set("user:123", '{"name": "Alice", "email": "alice@example.com"}', ex=3600)
data = r.get("user:123")

# Cache with TTL
r.setex("session:abc", 86400, session_data)

# Atomic operations
r.incr("page_views:home")
r.expire("page_views:home", 60)

# Data structures
r.lpush("recent_views:123", "product_456")
r.ltrim("recent_views:123", 0, 9)  # Keep last 10
```

**Redis eviction policies**:

| Policy | Behavior |
|--------|----------|
| noeviction | Return errors on write |
| allkeys-lru | Evict least recently used |
| allkeys-lfu | Evict least frequently used |
| volatile-lru | Evict LRU among keys with TTL |
| volatile-ttl | Evict key with shortest TTL |

## 4.3 CDN Caching

CDNs cache content at edge locations close to users.

```python
# CloudFront with Lambda@Edge for cache optimization
def viewer_request(event):
    request = event["Records"][0]["cf"]["request"]
    headers = request["headers"]

    # Set cache control
    headers["cache-control"] = [{"key": "Cache-Control", "value": "public, max-age=86400"}]
    return request

# Cache behavior rules
# /static/* -> long TTL (30 days)
# /api/user/* -> short TTL (60 seconds)
# /api/* -> no cache
```

**CDN best practices**:
- Cache static assets aggressively (1 year)
- Version assets in URL (bundle.v2.js)
- Use cache invalidations for updates
- Serve compressed content (gzip/brotli)
- Set proper Cache-Control headers

## 4.4 Cache Patterns

**Cache Aside**: Application manages cache and database.

```python
def get_user(user_id):
    # Try cache
    user = cache.get(f"user:{user_id}")
    if user:
        return user
    # Cache miss - read from DB
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    if user:
        cache.set(f"user:{user_id}", user, ex=3600)
    return user

def update_user(user_id, data):
    db.execute("UPDATE users SET ... WHERE id = ?", data, user_id)
    cache.delete(f"user:{user_id}")  # Invalidate cache
```

**Read Through**: Cache library handles DB reads.

**Write Through**: Cache is updated on every write.

**Write Behind**: Async batch write to DB.

## 4.5 Cache Invalidation

Invalidation is one of the two hard things in computer science.

| Strategy | Description | Pros | Cons |
|----------|-------------|------|------|
| TTL | Expire after time | Simple | Stale data |
| Write-through | Update on write | Fresh data | Write latency |
| Write-behind | Async DB write | Fast writes | Potential data loss |
| Event-driven | Invalidate on event | Targeted | Complex |

```python
# Event-driven invalidation
def on_user_updated(event):
    user_id = event["user_id"]
    cache.delete(f"user:{user_id}")
    cache.delete(f"user_orders:{user_id}")
```

## 4.6 Cache Stampede

When many requests miss cache simultaneously and all hit the database.

**Solutions**:

```python
# Mutex lock
def get_expensive_data(key):
    data = cache.get(key)
    if data:
        return data

    # Only one thread fetches from DB
    lock_key = f"lock:{key}"
    if cache.setnx(lock_key, "1", ex=10):
        data = db.query("SELECT ...")
        cache.set(key, data, ex=300)
        cache.delete(lock_key)
    else:
        # Wait for first thread
        time.sleep(0.1)
        return cache.get(key)
    return data

# Early recompute (recompute before TTL expires)
def get_with_early_recompute(key, ttl=300, early_ttl=60):
    data = cache.get(key)
    if data:
        # Check if nearing expiration
        remaining = cache.ttl(key)
        if remaining < early_ttl:
            # Async refresh (don't block)
            thread = Thread(target=refresh_cache, args=(key,))
            thread.start()
        return data
    return refresh_cache(key)
```

## 4.7 Multi-Tier Caching

Combine local (in-process) cache with distributed (Redis) cache.

```python
class MultiTierCache:
    def __init__(self):
        self.local = {}  # In-memory dict
        self.redis = redis.Redis()

    def get(self, key):
        # L1: Local cache (fastest)
        if key in self.local:
            return self.local[key]

        # L2: Redis
        data = self.redis.get(key)
        if data:
            self.local[key] = data  # Populate L1
            return data

        return None

    def set(self, key, value, ttl=300):
        self.local[key] = value
        self.redis.setex(key, ttl, value)

    def invalidate(self, key):
        self.local.pop(key, None)
        self.redis.delete(key)
```

---

## TypeScript Parallel

```typescript
interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

class InMemoryCache<T> {
  private store = new Map<string, CacheEntry<T>>();

  get(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }

  set(key: string, value: T, ttlMs: number): void {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  delete(key: string): void {
    this.store.delete(key);
  }
}
```

---

## Summary

- Cache hierarchy ranges from L1 CPU cache to CDN edge locations, each with different speed/capacity tradeoffs
- Redis provides distributed in-memory caching with data structures, TTL, and atomic operations
- CDNs cache static assets at edge locations with long TTLs for fast global content delivery
- Cache Aside is the most common pattern: check cache first, fall back to DB, update cache
- Cache invalidation strategies include TTL, write-through, write-behind, and event-driven
- Cache stampede occurs when many requests miss cache simultaneously; use mutex locks or early recompute
- Multi-tier caching combines local (fast, small) with distributed (slower, larger) caches
- Redis eviction policies (LRU, LFU, TTL) manage memory when full
- Versioned asset URLs enable aggressive CDN caching with controlled invalidation
- Always set appropriate TTLs and monitor cache hit rates

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Static assets | CDN with versioned URLs | No cache headers |
| API responses | Redis Cache Aside with TTL | No caching |
| User sessions | Redis with TTL | In-memory session storage |
| Cache invalidation | Event-driven + TTL | Only TTL (stale data) |
| High traffic | Multi-tier cache + stampede protection | Single cache layer |
| Memory management | Set eviction policy and maxmemory | Unlimited growth |

## Interview Q&A

<details class="tp-qa-card" data-qid="sysdes-s04-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is cache aside pattern?</summary>
  <div class="tp-qa-answer"><p>Application checks cache first. On miss, reads from DB, stores in cache with TTL, returns data. On write, updates DB and invalidates/updates cache. Most common caching pattern.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is cache stampede and how to prevent it?</summary>
  <div class="tp-qa-answer"><p>When many requests miss cache simultaneously and hit DB. Solutions: mutex lock (only one thread fetches), early recompute (refresh before expiration), probabilistic expiration (random early expiration).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: Redis eviction policies?</summary>
  <div class="tp-qa-answer"><p>noeviction (error), allkeys-lru (least recently used), allkeys-lfu (least frequently used), volatile-lru (LRU among keys with TTL), volatile-ttl (shortest TTL first).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What is write-through cache?</summary>
  <div class="tp-qa-answer"><p>Cache is updated on every write operation before the write is acknowledged. Ensures cache is always fresh but adds latency to writes. Good for read-heavy workloads.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: How does CDN caching work?</summary>
  <div class="tp-qa-answer"><p>Content is cached at edge servers worldwide. Users receive content from the nearest edge. Cache-Control headers determine TTL. Versioned URLs enable long-term caching with controlled invalidations.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you measure cache effectiveness?</summary>
  <div class="tp-qa-answer"><p>Cache hit rate (hits / total requests). High hit rate (>90%) indicates effective caching. Also monitor: miss rate, latency improvement, DB query reduction.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: When should you NOT use cache?</summary>
  <div class="tp-qa-answer"><p>Real-time data requiring immediate consistency, rapidly changing data (caching overhead > benefit), small datasets (DB is fast enough), write-heavy workloads with low read ratio.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: What is multi-tier caching?</summary>
  <div class="tp-qa-answer"><p>Combining multiple cache layers: L1 (in-process memory, fastest, small), L2 (Redis, fast, large), L3 (CDN, slower, global). Each layer compensates for the limitations of others.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: How do you invalidate cached content?</summary>
  <div class="tp-qa-answer"><p>TTL expiration (simplest), write-through invalidation (update cache on write), event-driven (publish invalidation events), cache purge (remove by pattern for CDN), versioned keys.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s04-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: Design a cache for a social media feed.</summary>
  <div class="tp-qa-answer"><p>Multi-tier: CDN for images/videos, Redis for user feed data (precomputed, TTL 5 min), local cache for hot users. Invalidation via event when new post created. Precompute feeds for active users asynchronously.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which cache level has the fastest access time?

a) CDN
b) Redis
c) L1 CPU
d) Browser

<details class="tp-qa-card" data-qid="sysdes-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) L1 CPU (~1ns)</strong></p></div></details>

**Q2**: What Redis eviction policy removes the least recently used keys?

a) volatile-ttl
b) allkeys-lru
c) allkeys-lfu
d) noeviction

<details class="tp-qa-card" data-qid="sysdes-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) allkeys-lru</strong></p></div></details>

**Q3**: What prevents cache stampede with a distributed lock?

a) Cache aside
b) Mutex
c) Write through
d) CDN

<details class="tp-qa-card" data-qid="sysdes-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Mutex</strong></p></div></details>

**Q4**: Which CDN caching strategy enables controlled invalidation?

a) Short TTL
b) Versioned URLs
c) Cache purge
d) No cache

<details class="tp-qa-card" data-qid="sysdes-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Versioned URLs</strong></p></div></details>

**Q5**: What metric indicates cache effectiveness?

a) Cache size
b) Hit rate
c) TTL length
d) Number of keys

<details class="tp-qa-card" data-qid="sysdes-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Hit rate</strong></p></div></details>

## Exercises

**Easy** — Set up Redis, implement Cache Aside pattern for user profiles with 5-minute TTL. Measure hit rate.

**Medium** — Implement multi-tier cache: local in-memory cache + Redis. Write get, set, and invalidate methods. Handle cache stampede with mutex.

**Medium** — Configure CDN caching for static assets. Set appropriate Cache-Control headers for (a) immutable assets (1 year), (b) CSS/JS (1 day), (c) HTML (no cache).

**Hard** — Design a caching system for a news website. Handle: real-time breaking news (no cache), articles (CDN + Redis with event-driven invalidation), user profiles (Cache Aside), ad content (short TTL).

**Hard** — Implement write-behind caching with Redis and PostgreSQL. Batch writes to DB asynchronously. Handle: cache coherency, batch failures, retry logic, and data loss prevention.

## Cache-Aside vs Read-Through vs Write-Through

**Implementation comparison**:

```python
# Cache-Aside (most common)
class CacheAside:
    def get(self, key):
        value = cache.get(key)
        if value is None:  # Cache miss
            value = db.query("SELECT * FROM data WHERE key = ?", key)
            cache.set(key, value, ttl=300)
        return value

    def set(self, key, value):
        db.update("UPDATE data SET value = ? WHERE key = ?", value, key)
        cache.delete(key)  # Invalidate cache

# Read-Through (cache knows how to fetch from DB)
class ReadThroughCache:
    def get(self, key):
        # Cache itself handles DB fallback
        return cache.get_or_compute(key, lambda: db.query("SELECT * FROM data WHERE key = ?", key), ttl=300)

# Write-Through (cache updated on every write)
class WriteThroughCache:
    def get(self, key):
        return cache.get(key)  # Always fresh

    def set(self, key, value):
        cache.set(key, value)
        db.insert("INSERT INTO data (key, value) VALUES (?, ?)", key, value)

# Write-Behind (async DB write)
class WriteBehindCache:
    def __init__(self):
        self.write_queue = Queue()

    def set(self, key, value):
        cache.set(key, value)
        self.write_queue.put((key, value))  # Deferred DB write

    def flush(self):
        while not self.write_queue.empty():
            key, value = self.write_queue.get()
            db.insert("INSERT INTO data (key, value) VALUES (?, ?)", key, value)
```

## Content Delivery Network (CDN) Deep Dive

**CDN caching headers**:

```python
from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/static/{file_path:path}")
async def serve_static(file_path: str):
    # Immutable content — cache forever
    if file_path.endswith((".js", ".css")):
        return Response(
            content=get_file(file_path),
            headers={
                "Cache-Control": "public, max-age=31536000, immutable",
                "ETag": generate_etag(file_path),
            }
        )

    # API response — short cache
    return Response(
        content=get_api_data(file_path),
        headers={
            "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        }
    )

    # User-specific — no cache
    return Response(
        content=get_user_data(file_path),
        headers={
            "Cache-Control": "private, no-cache, no-store, must-revalidate",
        }
    )
```

**CDN cache invalidation strategies**:

| Strategy | Trigger | Latency | Cost |
|----------|---------|---------|------|
| TTL expiration | Time-based | Variable | Free |
| URL versioning | New deploy | Instant | URL management |
| Cache purge | API call | Minutes | API calls |
| Cache tags | Tag-based invalidation | Seconds | CDN feature |

## Cache Monitoring

```python
class CacheMonitor:
    def __init__(self, redis_client):
        self.redis = redis_client
        self.metrics = {"hits": 0, "misses": 0, "sets": 0, "evictions": 0}

    def track_hit(self):
        self.metrics["hits"] += 1

    def track_miss(self):
        self.metrics["misses"] += 1

    def hit_rate(self) -> float:
        total = self.metrics["hits"] + self.metrics["misses"]
        return self.metrics["hits"] / total if total > 0 else 0.0

    def report(self) -> dict:
        return {
            "hit_rate": f"{self.hit_rate():.1%}",
            "hits": self.metrics["hits"],
            "misses": self.metrics["misses"],
            "used_memory": self.redis.info("memory")["used_memory_human"],
            "keys": self.redis.dbsize(),
            "hit_rate_status": "good" if self.hit_rate() > 0.9 else "needs_improvement"
        }

# Usage
monitor = CacheMonitor(redis_client)

def get_user(user_id):
    cache_key = f"user:{user_id}"
    user = cache.get(cache_key)
    if user:
        monitor.track_hit()
        return user
    monitor.track_miss()
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    cache.set(cache_key, user, ex=3600)
    return user
```

---

> **Next**: [Database Scaling](05-database-scaling.md)
