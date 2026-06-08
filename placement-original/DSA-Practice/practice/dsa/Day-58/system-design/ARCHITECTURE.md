# Day 58 — System Design: Distributed Rate Limiting

Distributed Rate Limiting Patterns:

**1. Centralized (Redis-based)**
```
Client → API Gateway → Redis (rate limit counter) → Backend
```
- Pros: Accurate, consistent across instances
- Cons: Single point of failure, added latency, Redis becomes bottleneck
- Implementation: Use Redis INCR with TTL, Lua scripts for atomic operations

**2. Local with Eventual Consistency**
```
Client → API Gateway (local limiter) → Periodic sync → Backend
```
- Pros: Low latency, no external dependency
- Cons: Less accurate, can exceed global limit temporarily
- Implementation: Local token bucket + background sync to update rates

**3. Sticky Sessions**
```
Client → Load Balancer (sticky) → Same API instance → Backend
```
- Pros: Simple, accurate per-client
- Cons: Uneven load distribution, doesn't work for distributed clients
- Implementation: Session affinity at load balancer

**Redis Implementation (Token Bucket)**
```lua
-- Redis Lua script for atomic token bucket
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refill_rate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

local bucket = redis.call('HMGET', key, 'tokens', 'last_refill')
local tokens = tonumber(bucket[1]) or capacity
local last_refill = tonumber(bucket[2]) or now

local elapsed = now - last_refill
local tokens_to_add = math.floor(elapsed * refill_rate)
tokens = math.min(capacity, tokens + tokens_to_add)

if tokens >= 1 then
    tokens = tokens - 1
    redis.call('HMSET', key, 'tokens', tokens, 'last_refill', now)
    redis.call('EXPIRE', key, 3600)
    return 1
else
    return 0
end
```

**API Gateway Integration**
- Kong: Uses Sliding Window Counter with Redis backend
- AWS API Gateway: Token bucket per API key/stage
- Envoy: Local rate limiting + global via external rate limit service

**Best Practices**
1. Return proper HTTP headers (X-RateLimit-Remaining, X-RateLimit-Reset)
2. Use 429 status code with Retry-After header
3. Implement exponential backoff on client side
4. Monitor rate limit hit rates and false positives
5. Use tiered limits (per-user, per-IP, global)
6. Consider hierarchical limiting (user → tenant → global)

**Handling Clock Skew**
- Use centralized time source (Redis TIME command)
- Tolerate small clock differences (±1 second)
- Use logical clocks (Lamport timestamps) for ordering

**Scalability Considerations**
- Shard rate limiters by key hash (user ID, IP)
- Use local caches to reduce Redis load
- Implement circuit breakers for Redis failures
- Fall back to local limiting when Redis unavailable
