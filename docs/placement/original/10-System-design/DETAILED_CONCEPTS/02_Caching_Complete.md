# 🚀 Caching - Complete Deep Dive

## Table of Contents
1. [What is Caching?](#what-is-caching)
2. [Why Caching Works](#why-caching-works)
3. [Cache Levels](#cache-levels)
4. [Caching Strategies](#caching-strategies)
5. [Cache Eviction Policies](#cache-eviction-policies)
6. [Distributed Caching](#distributed-caching)
7. [Cache Invalidation](#cache-invalidation)
8. [Implementation Examples](#implementation-examples)

---

## What is Caching?

### Definition
**Caching** is storing frequently accessed data in a fast-access storage layer to reduce latency and load on primary data sources.

### Performance Impact
```
Without Cache:
Request → Application → Database (50ms) → Response
Total: 50ms per request
1000 requests = 50,000ms = 50 seconds

With Cache (90% hit rate):
900 requests → Cache (1ms) → Response = 900ms
100 requests → Database (50ms) → Response = 5,000ms
Total: 5,900ms = 5.9 seconds

Performance Improvement: 8.5x faster
```

### Cost Impact
```
Database Costs:
- 1000 queries/sec × $0.001 per query = $1/sec
- Monthly: $2.6 million

With 90% Cache Hit Rate:
- 100 queries/sec × $0.001 = $0.10/sec
- Cache cost: $100/month (Redis)
- Monthly: $260,000 + $100 = $260,100

Savings: $2.34 million/month (90% reduction)
```

---

## Why Caching Works

### The 80/20 Rule (Pareto Principle)
```
Observation: 80% of requests access 20% of data

Example - E-commerce Product Views:
Total products: 1 million
Popular products: 200,000 (20%)
Traffic distribution:
- 80% of views → 200,000 products
- 20% of views → 800,000 products

Cache Strategy:
- Cache 200,000 popular products (20% of data)
- Serve 80% of traffic from cache
- Result: 80% cache hit rate with only 20% data cached
```

### Locality of Reference

#### 1. Temporal Locality
```
Principle: Recently accessed data likely to be accessed again soon

Example - User Profile:
Time 0ms:   User logs in → Fetch profile from DB (50ms)
Time 100ms: User views dashboard → Profile from cache (1ms)
Time 500ms: User edits settings → Profile from cache (1ms)
Time 1000ms: User posts comment → Profile from cache (1ms)

Without cache: 4 × 50ms = 200ms
With cache: 50ms + 3 × 1ms = 53ms
Improvement: 3.8x faster
```

#### 2. Spatial Locality
```
Principle: Data near recently accessed data likely to be accessed

Example - News Feed:
User views post #100 → Cache posts #95-105 (prefetch)
User scrolls down → Posts #101-105 already cached
User scrolls more → Cache posts #106-115

Result: Smooth scrolling, no loading delays
```

---

## Cache Levels

### Level 1: Client-Side Cache (Browser)
```
Location: User's browser
Speed: Instant (0ms)
Size: 50-100MB
TTL: Days to weeks

Example:
GET /api/user/profile
Response Headers:
  Cache-Control: max-age=3600, public
  ETag: "abc123"

Second request:
GET /api/user/profile
Request Headers:
  If-None-Match: "abc123"
Response: 304 Not Modified (no data transfer)

Benefits:
- Zero server load
- Zero network latency
- Reduces bandwidth costs

Use Cases:
- Static assets (CSS, JS, images)
- User profile data
- Product catalogs
```

### Level 2: CDN Cache (Edge)
```
Location: Edge servers (CloudFlare, Akamai)
Speed: 10-50ms
Size: Terabytes
TTL: Hours to days

Architecture:
User (New York) → CDN Edge (New York) → Origin (California)
                  ↓ Cache Hit
                  Response (10ms instead of 100ms)

Benefits:
- Geographic proximity
- Reduces origin server load
- DDoS protection
- SSL termination

Use Cases:
- Images, videos
- Static HTML pages
- API responses (with proper headers)

Configuration:
Cache-Control: public, max-age=86400, s-maxage=604800
               ↑ Browser  ↑ 1 day    ↑ CDN: 7 days
```

### Level 3: Application Cache (Redis/Memcached)
```
Location: Dedicated cache servers
Speed: 1-5ms
Size: Gigabytes to Terabytes
TTL: Minutes to hours

Architecture:
App Server → Redis Cluster → Database
             ↓ Cache Hit (1ms)
             ↓ Cache Miss → DB (50ms) → Update Cache

Benefits:
- Shared across app servers
- Persistent (Redis)
- Advanced data structures
- Pub/Sub messaging

Use Cases:
- Session data
- User profiles
- API responses
- Database query results
- Rate limiting counters
```

### Level 4: Database Cache (Query Cache)
```
Location: Database server memory
Speed: 5-10ms
Size: Gigabytes
TTL: Until data changes

Example - MySQL Query Cache:
SELECT * FROM users WHERE id = 123;
↓ First execution: 50ms (disk read)
↓ Cached in memory
↓ Second execution: 5ms (memory read)

Benefits:
- Automatic (no code changes)
- Exact query matching
- Invalidates on data change

Limitations:
- Invalidated on ANY table write
- Not effective for write-heavy tables
- Deprecated in MySQL 8.0 (use Redis instead)
```

---

## Caching Strategies

### 1. Cache-Aside (Lazy Loading)
```python
def get_user(user_id):
    # Try cache first
    cache_key = f"user:{user_id}"
    user = cache.get(cache_key)
    
    if user:
        return user  # Cache hit
    
    # Cache miss: Load from database
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    
    # Store in cache for future requests
    cache.set(cache_key, user, ttl=3600)  # 1 hour
    
    return user

# Pros:
# - Only caches requested data (efficient memory usage)
# - Resilient (cache failure doesn't break app)
# - Simple to implement

# Cons:
# - Cache miss penalty (3 round trips: cache, db, cache)
# - Stale data possible
# - Cache warming needed after restart
```

### 2. Read-Through Cache
```python
class ReadThroughCache:
    def get(self, key, loader_func):
        # Cache handles loading automatically
        value = self.cache.get(key)
        
        if value is None:
            value = loader_func()  # Load from source
            self.cache.set(key, value)
        
        return value

# Usage
def get_user(user_id):
    return cache.get(
        f"user:{user_id}",
        lambda: db.query("SELECT * FROM users WHERE id = ?", user_id)
    )

# Pros:
# - Cleaner code (cache logic encapsulated)
# - Consistent behavior

# Cons:
# - Tight coupling with cache
# - Cache failure breaks app
```

### 3. Write-Through Cache
```python
def update_user(user_id, data):
    # Update database
    db.query("UPDATE users SET ... WHERE id = ?", user_id, data)
    
    # Update cache immediately
    cache.set(f"user:{user_id}", data, ttl=3600)
    
    return data

# Pros:
# - Cache always consistent with database
# - No stale data
# - Read performance excellent

# Cons:
# - Write latency higher (2 operations)
# - Wasted cache space (may cache unused data)
# - Cache failure breaks writes
```

### 4. Write-Behind Cache (Write-Back)
```python
def update_user(user_id, data):
    # Update cache immediately
    cache.set(f"user:{user_id}", data, ttl=3600)
    
    # Queue database update (async)
    queue.enqueue("update_user_db", user_id, data)
    
    return data  # Return immediately

# Background worker
def update_user_db(user_id, data):
    db.query("UPDATE users SET ... WHERE id = ?", user_id, data)

# Pros:
# - Fastest write performance
# - Batching possible (write 1000 updates at once)
# - Reduces database load

# Cons:
# - Data loss risk (if cache crashes before DB write)
# - Complex to implement
# - Eventual consistency
```

### 5. Write-Around Cache
```python
def update_user(user_id, data):
    # Update database only
    db.query("UPDATE users SET ... WHERE id = ?", user_id, data)
    
    # Invalidate cache (don't update)
    cache.delete(f"user:{user_id}")
    
    # Next read will fetch fresh data from DB

# Pros:
# - Avoids cache pollution (write-once data)
# - Simple implementation
# - Good for write-heavy workloads

# Cons:
# - Cache miss on next read
# - Not suitable for read-heavy workloads
```

### Strategy Comparison
```
Workload Type          Best Strategy       Reason
─────────────────────────────────────────────────────────
Read-heavy (90% read)  Write-Through       Always fresh, fast reads
Write-heavy (90% write) Write-Around       Avoids cache pollution
Balanced (50/50)       Cache-Aside         Flexible, resilient
High performance       Write-Behind        Fastest writes
Simple app             Cache-Aside         Easy to implement
```

---

## Cache Eviction Policies

### 1. LRU (Least Recently Used)
```python
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key not in self.cache:
            return None
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Remove first item (least recently used)
            self.cache.popitem(last=False)

# Example:
cache = LRUCache(capacity=3)
cache.put("A", 1)  # Cache: [A]
cache.put("B", 2)  # Cache: [A, B]
cache.put("C", 3)  # Cache: [A, B, C]
cache.get("A")     # Cache: [B, C, A] (A moved to end)
cache.put("D", 4)  # Cache: [C, A, D] (B evicted)

# Best for: General purpose caching
# Time complexity: O(1) for get and put
```

### 2. LFU (Least Frequently Used)
```python
class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.freq = {}  # key → frequency count
    
    def get(self, key):
        if key not in self.cache:
            return None
        self.freq[key] += 1  # Increment frequency
        return self.cache[key]
    
    def put(self, key, value):
        if len(self.cache) >= self.capacity:
            # Find least frequently used
            lfu_key = min(self.freq, key=self.freq.get)
            del self.cache[lfu_key]
            del self.freq[lfu_key]
        
        self.cache[key] = value
        self.freq[key] = 1

# Example:
cache = LFUCache(capacity=3)
cache.put("A", 1)  # Freq: A=1
cache.put("B", 2)  # Freq: A=1, B=1
cache.put("C", 3)  # Freq: A=1, B=1, C=1
cache.get("A")     # Freq: A=2, B=1, C=1
cache.get("A")     # Freq: A=3, B=1, C=1
cache.put("D", 4)  # Freq: A=3, C=1, D=1 (B evicted)

# Best for: Long-term popular items
# Use case: Product catalog (popular products stay cached)
```

### 3. FIFO (First In First Out)
```python
from collections import deque

class FIFOCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.queue = deque()
    
    def put(self, key, value):
        if len(self.cache) >= self.capacity:
            # Remove oldest item
            oldest = self.queue.popleft()
            del self.cache[oldest]
        
        self.cache[key] = value
        self.queue.append(key)

# Example:
cache = FIFOCache(capacity=3)
cache.put("A", 1)  # Queue: [A]
cache.put("B", 2)  # Queue: [A, B]
cache.put("C", 3)  # Queue: [A, B, C]
cache.put("D", 4)  # Queue: [B, C, D] (A evicted)

# Best for: Time-sensitive data
# Use case: News articles, recent logs
```

### 4. TTL (Time To Live)
```python
import time

class TTLCache:
    def __init__(self):
        self.cache = {}
        self.expiry = {}
    
    def put(self, key, value, ttl_seconds):
        self.cache[key] = value
        self.expiry[key] = time.time() + ttl_seconds
    
    def get(self, key):
        if key not in self.cache:
            return None
        
        # Check if expired
        if time.time() > self.expiry[key]:
            del self.cache[key]
            del self.expiry[key]
            return None
        
        return self.cache[key]

# Example:
cache = TTLCache()
cache.put("session", "abc123", ttl_seconds=3600)  # 1 hour
cache.put("otp", "123456", ttl_seconds=300)       # 5 minutes

# Best for: Time-sensitive data
# Use case: Sessions, OTPs, temporary tokens
```

### Policy Comparison
```
Policy  Hit Rate  Memory Efficiency  Use Case
──────────────────────────────────────────────────────
LRU     High      Good              General purpose
LFU     Highest   Best              Long-term patterns
FIFO    Medium    Good              Time-based data
TTL     Varies    Excellent         Expiring data
Random  Low       Good              Simple/fast eviction
```

---

## Distributed Caching

### Redis Architecture
```
Single Instance:
Client → Redis Server (1 instance)
- Simple
- Single point of failure
- Limited capacity

Master-Slave Replication:
Client → Redis Master (writes)
         ↓ Replication
         Redis Slave 1 (reads)
         Redis Slave 2 (reads)
- High availability
- Read scaling
- Automatic failover (with Sentinel)

Redis Cluster:
Client → [Shard 1, Shard 2, Shard 3, ..., Shard N]
- Horizontal scaling
- No single point of failure
- Automatic sharding
- 16,384 hash slots distributed across nodes
```

### Consistent Hashing
```python
import hashlib

class ConsistentHash:
    def __init__(self, nodes, virtual_nodes=150):
        self.ring = {}
        self.sorted_keys = []
        
        for node in nodes:
            for i in range(virtual_nodes):
                key = self._hash(f"{node}:{i}")
                self.ring[key] = node
        
        self.sorted_keys = sorted(self.ring.keys())
    
    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)
    
    def get_node(self, key):
        hash_key = self._hash(key)
        
        # Find first node >= hash_key
        for ring_key in self.sorted_keys:
            if ring_key >= hash_key:
                return self.ring[ring_key]
        
        # Wrap around to first node
        return self.ring[self.sorted_keys[0]]

# Example:
nodes = ["cache1", "cache2", "cache3"]
ch = ConsistentHash(nodes)

# Keys distributed across nodes
ch.get_node("user:123")  # → cache2
ch.get_node("user:456")  # → cache1
ch.get_node("user:789")  # → cache3

# Add new node
nodes.append("cache4")
ch = ConsistentHash(nodes)
# Only ~25% of keys remapped (instead of 100%)
```

---

## Cache Invalidation

### Problem: Cache Consistency
```
Time  Database      Cache         Issue
0ms   name="John"   name="John"   ✅ Consistent
10ms  name="Jane"   name="John"   ❌ Stale cache
100ms name="Jane"   name="Jane"   ✅ Consistent again
```

### Solution 1: TTL-Based Invalidation
```python
def get_user(user_id):
    cache_key = f"user:{user_id}"
    user = cache.get(cache_key)
    
    if not user:
        user = db.query("SELECT * FROM users WHERE id = ?", user_id)
        cache.set(cache_key, user, ttl=300)  # 5 minutes
    
    return user

# Pros: Simple, automatic
# Cons: Stale data for up to 5 minutes
# Best for: Data that changes infrequently
```

### Solution 2: Write-Through Invalidation
```python
def update_user(user_id, data):
    # Update database
    db.query("UPDATE users SET ... WHERE id = ?", user_id, data)
    
    # Invalidate cache
    cache.delete(f"user:{user_id}")

# Pros: Always fresh data
# Cons: Cache miss on next read
# Best for: Frequently updated data
```

### Solution 3: Event-Based Invalidation
```python
# Publisher (when data changes)
def update_user(user_id, data):
    db.query("UPDATE users SET ... WHERE id = ?", user_id, data)
    
    # Publish invalidation event
    pubsub.publish("cache:invalidate", f"user:{user_id}")

# Subscriber (cache invalidation service)
def handle_invalidation(message):
    cache_key = message
    cache.delete(cache_key)
    
    # Also invalidate related caches
    if cache_key.startswith("user:"):
        user_id = cache_key.split(":")[1]
        cache.delete(f"user_posts:{user_id}")
        cache.delete(f"user_followers:{user_id}")

# Pros: Decoupled, scalable
# Cons: Complex, eventual consistency
# Best for: Microservices architecture
```

### Solution 4: Cache Stampede Prevention
```python
import threading

locks = {}

def get_user(user_id):
    cache_key = f"user:{user_id}"
    user = cache.get(cache_key)
    
    if user:
        return user
    
    # Prevent multiple threads from querying DB simultaneously
    lock = locks.setdefault(cache_key, threading.Lock())
    
    with lock:
        # Double-check cache (another thread may have loaded it)
        user = cache.get(cache_key)
        if user:
            return user
        
        # Load from database
        user = db.query("SELECT * FROM users WHERE id = ?", user_id)
        cache.set(cache_key, user, ttl=3600)
        
        return user

# Prevents: 1000 simultaneous requests → 1000 DB queries
# Result: 1000 simultaneous requests → 1 DB query
```

---

## Implementation Examples

### Example 1: Session Store
```python
import redis
import json
import uuid

class SessionStore:
    def __init__(self):
        self.redis = redis.Redis(host='localhost', port=6379)
    
    def create_session(self, user_id):
        session_id = str(uuid.uuid4())
        session_data = {
            "user_id": user_id,
            "created_at": time.time()
        }
        
        # Store session with 1 hour expiry
        self.redis.setex(
            f"session:{session_id}",
            3600,
            json.dumps(session_data)
        )
        
        return session_id
    
    def get_session(self, session_id):
        data = self.redis.get(f"session:{session_id}")
        return json.loads(data) if data else None
    
    def delete_session(self, session_id):
        self.redis.delete(f"session:{session_id}")

# Usage
store = SessionStore()
session_id = store.create_session(user_id=123)
session = store.get_session(session_id)
```

### Example 2: Rate Limiter
```python
class RateLimiter:
    def __init__(self, redis_client):
        self.redis = redis_client
    
    def is_allowed(self, user_id, max_requests=100, window_seconds=60):
        key = f"rate_limit:{user_id}"
        current = self.redis.get(key)
        
        if current is None:
            # First request in window
            self.redis.setex(key, window_seconds, 1)
            return True
        
        if int(current) < max_requests:
            # Increment counter
            self.redis.incr(key)
            return True
        
        # Rate limit exceeded
        return False

# Usage
limiter = RateLimiter(redis.Redis())
if limiter.is_allowed(user_id=123, max_requests=10, window_seconds=60):
    process_request()
else:
    return "Rate limit exceeded"
```

### Example 3: Leaderboard
```python
class Leaderboard:
    def __init__(self, redis_client):
        self.redis = redis_client
        self.key = "leaderboard:scores"
    
    def add_score(self, user_id, score):
        # Sorted set: O(log N)
        self.redis.zadd(self.key, {user_id: score})
    
    def get_top(self, n=10):
        # Get top N users
        return self.redis.zrevrange(self.key, 0, n-1, withscores=True)
    
    def get_rank(self, user_id):
        # Get user's rank (0-indexed)
        rank = self.redis.zrevrank(self.key, user_id)
        return rank + 1 if rank is not None else None
    
    def get_score(self, user_id):
        return self.redis.zscore(self.key, user_id)

# Usage
lb = Leaderboard(redis.Redis())
lb.add_score("user123", 1000)
lb.add_score("user456", 1500)
top_players = lb.get_top(10)
my_rank = lb.get_rank("user123")
```

---

## Summary

### Key Takeaways
1. **80/20 Rule**: Cache 20% of data to serve 80% of requests
2. **Choose Right Strategy**: Cache-aside for most cases
3. **Set Appropriate TTL**: Balance freshness vs performance
4. **Monitor Hit Rate**: Target 80%+ for effective caching
5. **Handle Invalidation**: Prevent stale data issues
6. **Prevent Stampede**: Use locking for cache misses
7. **Use Redis**: Industry standard for distributed caching

### Caching Checklist
- [ ] Identify hot data (80/20 rule)
- [ ] Choose caching strategy
- [ ] Set appropriate TTL
- [ ] Implement cache invalidation
- [ ] Add monitoring (hit rate, latency)
- [ ] Handle cache failures gracefully
- [ ] Test cache stampede scenarios
- [ ] Document cache keys and TTLs

---

**Next**: [03_Load_Balancing_Complete.md](./03_Load_Balancing_Complete.md)
