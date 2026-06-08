# Day 57 — System Design: Distributed Caching

Layers:
- L1: In-process cache (LRU/LFU) for hot data
- L2: Distributed cache (Redis, Memcached) for shared state across services
- L3: Database with query caching and materialized views

Consistency Models:
- **Write-through**: Write to cache and DB synchronously; strong consistency, higher latency.
- **Write-back**: Write to cache, async persist to DB; lower latency, risk of data loss.
- **Cache-aside**: Application manages cache population; flexible but requires careful invalidation.

Cache Stampede Mitigation:
- Use locks or semaphores to serialize cache refresh on miss.
- Probabilistic early expiration to spread refresh load.
- Background refresh before TTL expires.

Distributed Cache Design:
- Use consistent hashing for key distribution.
- Replicate hot keys to reduce load on single nodes.
- Monitor eviction rates and scale capacity proactively.
