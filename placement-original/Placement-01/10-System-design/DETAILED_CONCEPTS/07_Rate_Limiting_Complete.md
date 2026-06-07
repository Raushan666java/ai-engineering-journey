# 🚦 Rate Limiting - Complete Deep Dive

## What is Rate Limiting?

### Definition
Controlling the rate of requests a client can make to prevent abuse and ensure fair usage.

### Why Rate Limiting?
```
Without Rate Limiting:
- DDoS attacks possible
- Resource exhaustion
- Unfair usage
- Cost overruns

With Rate Limiting:
✅ Prevent abuse
✅ Ensure availability
✅ Fair resource allocation
✅ Cost control
```

---

## Rate Limiting Algorithms

### 1. Token Bucket
```python
import time

class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate  # tokens per second
        self.last_refill = time.time()
    
    def allow_request(self):
        self._refill()
        
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
    
    def _refill(self):
        now = time.time()
        elapsed = now - self.last_refill
        tokens_to_add = elapsed * self.refill_rate
        
        self.tokens = min(self.capacity, self.tokens + tokens_to_add)
        self.last_refill = now

# Usage
bucket = TokenBucket(capacity=100, refill_rate=10)  # 10 req/sec

if bucket.allow_request():
    process_request()
else:
    return "Rate limit exceeded"

Pros:
✅ Handles bursts (up to capacity)
✅ Smooth rate limiting
✅ Memory efficient

Cons:
❌ Complex implementation
```

### 2. Leaky Bucket
```python
from collections import deque
import time

class LeakyBucket:
    def __init__(self, capacity, leak_rate):
        self.capacity = capacity
        self.leak_rate = leak_rate  # requests per second
        self.queue = deque()
        self.last_leak = time.time()
    
    def allow_request(self):
        self._leak()
        
        if len(self.queue) < self.capacity:
            self.queue.append(time.time())
            return True
        return False
    
    def _leak(self):
        now = time.time()
        elapsed = now - self.last_leak
        requests_to_leak = int(elapsed * self.leak_rate)
        
        for _ in range(min(requests_to_leak, len(self.queue))):
            self.queue.popleft()
        
        self.last_leak = now

Pros:
✅ Smooth output rate
✅ Predictable behavior

Cons:
❌ No burst handling
❌ Higher memory usage
```

### 3. Fixed Window Counter
```python
import time

class FixedWindowCounter:
    def __init__(self, limit, window_size=60):
        self.limit = limit
        self.window_size = window_size
        self.counter = 0
        self.window_start = time.time()
    
    def allow_request(self):
        now = time.time()
        
        # Reset window if expired
        if now - self.window_start >= self.window_size:
            self.counter = 0
            self.window_start = now
        
        if self.counter < self.limit:
            self.counter += 1
            return True
        return False

# Example: 100 requests per minute
limiter = FixedWindowCounter(limit=100, window_size=60)

Pros:
✅ Simple implementation
✅ Memory efficient

Cons:
❌ Burst at window boundaries
❌ Unfair distribution

Problem:
Time 0:59 → 100 requests (allowed)
Time 1:00 → 100 requests (allowed)
Result: 200 requests in 2 seconds!
```

### 4. Sliding Window Log
```python
import time
from collections import deque

class SlidingWindowLog:
    def __init__(self, limit, window_size=60):
        self.limit = limit
        self.window_size = window_size
        self.requests = deque()
    
    def allow_request(self):
        now = time.time()
        
        # Remove old requests
        while self.requests and self.requests[0] < now - self.window_size:
            self.requests.popleft()
        
        if len(self.requests) < self.limit:
            self.requests.append(now)
            return True
        return False

Pros:
✅ Accurate rate limiting
✅ No boundary issues

Cons:
❌ High memory usage (stores all timestamps)
❌ Expensive cleanup
```

### 5. Sliding Window Counter
```python
import time

class SlidingWindowCounter:
    def __init__(self, limit, window_size=60):
        self.limit = limit
        self.window_size = window_size
        self.current_window = {"start": time.time(), "count": 0}
        self.previous_window = {"start": 0, "count": 0}
    
    def allow_request(self):
        now = time.time()
        
        # Shift windows if needed
        if now - self.current_window["start"] >= self.window_size:
            self.previous_window = self.current_window
            self.current_window = {"start": now, "count": 0}
        
        # Calculate weighted count
        elapsed = now - self.current_window["start"]
        previous_weight = 1 - (elapsed / self.window_size)
        
        estimated_count = (
            self.previous_window["count"] * previous_weight +
            self.current_window["count"]
        )
        
        if estimated_count < self.limit:
            self.current_window["count"] += 1
            return True
        return False

Pros:
✅ Accurate
✅ Memory efficient
✅ No boundary issues

Cons:
❌ Slightly complex
```

---

## Distributed Rate Limiting

### Redis-Based Implementation
```python
import redis
import time

class DistributedRateLimiter:
    def __init__(self, redis_client):
        self.redis = redis_client
    
    def allow_request(self, user_id, limit=100, window=60):
        key = f"rate_limit:{user_id}"
        now = time.time()
        
        # Remove old entries
        self.redis.zremrangebyscore(key, 0, now - window)
        
        # Count requests in window
        count = self.redis.zcard(key)
        
        if count < limit:
            # Add current request
            self.redis.zadd(key, {now: now})
            self.redis.expire(key, window)
            return True
        
        return False

# Usage
redis_client = redis.Redis()
limiter = DistributedRateLimiter(redis_client)

if limiter.allow_request(user_id=123, limit=100, window=60):
    process_request()
else:
    return {"error": "Rate limit exceeded"}, 429
```

### Token Bucket with Redis
```python
import redis
import time

class RedisTokenBucket:
    def __init__(self, redis_client):
        self.redis = redis_client
    
    def allow_request(self, user_id, capacity=100, refill_rate=10):
        key = f"token_bucket:{user_id}"
        now = time.time()
        
        # Get current state
        pipe = self.redis.pipeline()
        pipe.hgetall(key)
        result = pipe.execute()[0]
        
        if not result:
            # Initialize bucket
            tokens = capacity
            last_refill = now
        else:
            tokens = float(result[b'tokens'])
            last_refill = float(result[b'last_refill'])
            
            # Refill tokens
            elapsed = now - last_refill
            tokens_to_add = elapsed * refill_rate
            tokens = min(capacity, tokens + tokens_to_add)
        
        if tokens >= 1:
            tokens -= 1
            
            # Update state
            pipe = self.redis.pipeline()
            pipe.hset(key, 'tokens', tokens)
            pipe.hset(key, 'last_refill', now)
            pipe.expire(key, 3600)
            pipe.execute()
            
            return True
        
        return False
```

---

## Rate Limiting Strategies

### Per-User Rate Limiting
```python
@app.get("/api/data")
def get_data(user_id: int):
    if not rate_limiter.allow_request(f"user:{user_id}", limit=100):
        return {"error": "Rate limit exceeded"}, 429
    
    return fetch_data()

Use case: Prevent individual user abuse
```

### Per-IP Rate Limiting
```python
from fastapi import Request

@app.get("/api/data")
def get_data(request: Request):
    client_ip = request.client.host
    
    if not rate_limiter.allow_request(f"ip:{client_ip}", limit=1000):
        return {"error": "Rate limit exceeded"}, 429
    
    return fetch_data()

Use case: Prevent DDoS attacks
```

### Per-API Endpoint Rate Limiting
```python
@app.get("/api/expensive-operation")
def expensive_operation(user_id: int):
    if not rate_limiter.allow_request(
        f"user:{user_id}:expensive",
        limit=10,  # Lower limit for expensive operations
        window=3600  # Per hour
    ):
        return {"error": "Rate limit exceeded"}, 429
    
    return perform_expensive_operation()

Use case: Protect expensive resources
```

### Tiered Rate Limiting
```python
RATE_LIMITS = {
    "free": {"limit": 100, "window": 3600},
    "basic": {"limit": 1000, "window": 3600},
    "premium": {"limit": 10000, "window": 3600}
}

@app.get("/api/data")
def get_data(user_id: int):
    user_tier = get_user_tier(user_id)
    limits = RATE_LIMITS[user_tier]
    
    if not rate_limiter.allow_request(
        f"user:{user_id}",
        limit=limits["limit"],
        window=limits["window"]
    ):
        return {"error": "Rate limit exceeded"}, 429
    
    return fetch_data()

Use case: Monetization, fair usage
```

---

## Response Headers

### Standard Headers
```python
from fastapi import Response

@app.get("/api/data")
def get_data(response: Response, user_id: int):
    limit = 100
    remaining = get_remaining_requests(user_id)
    reset_time = get_reset_time(user_id)
    
    # Add rate limit headers
    response.headers["X-RateLimit-Limit"] = str(limit)
    response.headers["X-RateLimit-Remaining"] = str(remaining)
    response.headers["X-RateLimit-Reset"] = str(reset_time)
    
    if remaining <= 0:
        response.headers["Retry-After"] = str(reset_time - time.time())
        return {"error": "Rate limit exceeded"}, 429
    
    return fetch_data()

Headers:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640000000
Retry-After: 3600
```

---

## Advanced Patterns

### Adaptive Rate Limiting
```python
class AdaptiveRateLimiter:
    def __init__(self):
        self.base_limit = 100
        self.current_limit = 100
        self.error_rate_threshold = 0.05
    
    def allow_request(self, user_id):
        error_rate = self.get_error_rate()
        
        # Adjust limit based on system health
        if error_rate > self.error_rate_threshold:
            self.current_limit = int(self.base_limit * 0.5)  # Reduce by 50%
        else:
            self.current_limit = self.base_limit
        
        return rate_limiter.allow_request(user_id, limit=self.current_limit)

Use case: Protect system during high load
```

### Quota-Based Rate Limiting
```python
class QuotaRateLimiter:
    def __init__(self, redis_client):
        self.redis = redis_client
    
    def allow_request(self, user_id, cost=1):
        key = f"quota:{user_id}"
        quota = int(self.redis.get(key) or 0)
        
        if quota >= cost:
            self.redis.decrby(key, cost)
            return True
        
        return False
    
    def add_quota(self, user_id, amount):
        key = f"quota:{user_id}"
        self.redis.incrby(key, amount)

# Usage: Different operations cost different amounts
limiter.allow_request(user_id, cost=1)   # Simple query
limiter.allow_request(user_id, cost=10)  # Complex query
limiter.allow_request(user_id, cost=100) # Export data

Use case: API pricing, resource management
```

---

## Testing Rate Limiters

### Load Testing
```python
import asyncio
import aiohttp

async def test_rate_limiter():
    async with aiohttp.ClientSession() as session:
        tasks = []
        for i in range(150):  # Exceed limit of 100
            task = session.get('http://api.example.com/data')
            tasks.append(task)
        
        responses = await asyncio.gather(*tasks)
        
        success_count = sum(1 for r in responses if r.status == 200)
        rate_limited = sum(1 for r in responses if r.status == 429)
        
        print(f"Success: {success_count}")
        print(f"Rate limited: {rate_limited}")
        
        assert success_count == 100
        assert rate_limited == 50

asyncio.run(test_rate_limiter())
```

---

## Summary

### Algorithm Comparison
```
Algorithm           Accuracy  Memory  Burst  Complexity
──────────────────────────────────────────────────────
Token Bucket        High      Low     Yes    Medium
Leaky Bucket        High      Medium  No     Medium
Fixed Window        Low       Low     Yes    Low
Sliding Window Log  High      High    No     High
Sliding Window Ctr  High      Low     No     Medium
```

### Best Practices
- Use Redis for distributed systems
- Return proper HTTP headers
- Implement tiered limits
- Monitor rate limit hits
- Provide clear error messages
- Consider burst allowances
- Test under load

### Common Use Cases
```
Use Case                  Algorithm           Limit
────────────────────────────────────────────────────
API rate limiting         Token Bucket        1000/hour
DDoS protection          Fixed Window        10000/min
Login attempts           Sliding Window      5/15min
Expensive operations     Token Bucket        10/hour
Free tier limits         Sliding Window Ctr  100/day
```

---

**Next**: [08_CDN_Complete.md](./08_CDN_Complete.md)
