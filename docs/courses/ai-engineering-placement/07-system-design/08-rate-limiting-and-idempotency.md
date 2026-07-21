# Rate Limiting & Idempotency — Algorithms, Distributed Strategies

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand rate limiting fundamentals and why it is critical for API protection |
| LO2 | Implement token bucket, leaky bucket, fixed window, and sliding window algorithms |
| LO3 | Design distributed rate limiting with Redis and consistent hashing |
| LO4 | Implement idempotency keys for safe retry of mutating operations |
| LO5 | Handle rate limit headers, backoff strategies, and client feedback |
| LO6 | Apply rate limiting at API gateway, application, and database layers |

## Introduction

07-system-design is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures
## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Rate Limiting Fundamentals | Why rate limit, layers, common algorithms |
| 8.2 | Token Bucket Algorithm | Algorithm, implementation, burst handling |
| 8.3 | Sliding Window Algorithms | Fixed window, sliding log, sliding window counter |
| 8.4 | Distributed Rate Limiting | Redis, consistent hashing, local counters with sync |
| 8.5 | Idempotency Keys | Design, storage, expiration, response caching |
| 8.6 | Headers & Client Behavior | Rate limit headers, backoff, retry strategies |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Client Request] --> B{Rate Limit Check}
    B -->|Under Limit| C[Process Request]
    B -->|Over Limit| D[Return 429]
    C --> E{Idempotency Key?}
    E -->|New Key| F[Execute & Cache Result]
    E -->|Existing Key| G[Return Cached Result]
    F --> H[Store Key in Redis]
    H --> I[Response with Rate Headers]
## 8.1 Rate Limiting Fundamentals

Rate limiting controls the number of requests a client can make within a specific time window. It protects APIs from abuse, ensures fair resource allocation, and maintains system stability.

**Layers of rate limiting**: API gateway (global limit), application tier (per-endpoint), database tier (connection pooling).

```typescript
interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  algorithm: "token-bucket" | "fixed-window" | "sliding-window";
}

class RateLimiter {
  protected config: RateLimitConfig;
  constructor(config: RateLimitConfig) {
    this.config = config;
  }
  async check(
    key: string
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    throw new Error("Not implemented");
  }
}
```

**Common reasons**: Prevent DDoS attacks, protect against brute force login attempts, ensure fair usage between tenants, control costs for paid APIs, prevent cascading failures from traffic spikes.

---

## 8.2 Token Bucket Algorithm

Token bucket maintains a bucket that fills at a constant rate (refill rate) up to a maximum capacity (burst size). Each request consumes one token. If the bucket is empty, the request is rejected.

```typescript
class TokenBucket extends RateLimiter {
  private buckets: Map<
    string,
    { tokens: number; lastRefill: number }
  > = new Map();

  constructor(
    private capacity: number,
    private refillRate: number
  ) {
    super({ maxRequests: capacity, windowMs: 1000, algorithm: "token-bucket" });
  }

  async check(
    key: string
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const now = Date.now();
    let bucket = this.buckets.get(key);
    if (!bucket) {
      bucket = { tokens: this.capacity, lastRefill: now };
      this.buckets.set(key, bucket);
    }
    const elapsed = (now - bucket.lastRefill) / 1000;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsed * this.refillRate);
    bucket.lastRefill = now;

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return { allowed: true, remaining: Math.floor(bucket.tokens), resetTime: now + 1000 };
    }
    return { allowed: false, remaining: 0, resetTime: now + Math.ceil((1 - bucket.tokens) / this.refillRate * 1000) };
  }
}
```

**Pros**: Smooth traffic, allows bursts, configurable burst capacity. **Cons**: Memory per key, clock-dependent refill timing.

---

## 8.3 Sliding Window Algorithms

**Fixed window**: Count requests per calendar window (e.g., 100 requests per minute :00-:59). Simple but allows 2x burst at window boundary (99 requests at :59, 100 at :00 = 199 in 2 seconds).

**Sliding window log**: Maintain a sorted log of timestamps per key. Precisely counts requests in any sliding window. Memory-intensive.

**Sliding window counter**: Approximate sliding window by weighting current and previous window counts.

```typescript
class SlidingWindowCounter extends RateLimiter {
  private windows: Map<string, Map<number, number>> = new Map();

  constructor(private maxRequests: number, private windowMs: number) {
    super({ maxRequests, windowMs, algorithm: "sliding-window" });
  }

  async check(
    key: string
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const now = Date.now();
    const currentWindow = Math.floor(now / this.windowMs);
    const previousWindow = currentWindow - 1;

    if (!this.windows.has(key)) this.windows.set(key, new Map());
    const windows = this.windows.get(key)!;
    const currentCount = windows.get(currentWindow) ?? 0;
    const previousCount = windows.get(previousWindow) ?? 0;

    const elapsedInCurrent = (now % this.windowMs) / this.windowMs;
    const weightedCount = previousCount * (1 - elapsedInCurrent) + currentCount;

    if (weightedCount >= this.maxRequests) {
      return { allowed: false, remaining: 0, resetTime: (currentWindow + 1) * this.windowMs };
    }
    windows.set(currentWindow, currentCount + 1);
    return { allowed: true, remaining: this.maxRequests - Math.ceil(weightedCount), resetTime: (currentWindow + 1) * this.windowMs };
  }
}
```

Sliding window counter is the best trade-off: O(1) memory with no boundary burst, within 5-10% accuracy.

---

## 8.4 Distributed Rate Limiting

In a distributed system, rate limit state must be shared across instances. Redis is the most common solution, using Lua scripts for atomic operations.

```typescript
import Redis from "ioredis";

class RedisSlidingWindowLimiter {
  private redis: Redis;

  constructor(redisUrl: string) {
    this.redis = new Redis(redisUrl);
  }

  async check(
    key: string,
    maxRequests: number,
    windowMs: number
  ): Promise<{ allowed: boolean; remaining: number }> {
    const now = Date.now();
    const windowStart = now - windowMs;
    const script = `
      redis.call("ZREMRANGEBYSCORE", KEYS[1], 0, ARGV[1])
      local current = redis.call("ZCARD", KEYS[1])
      if current < tonumber(ARGV[2]) then
        redis.call("ZADD", KEYS[1], ARGV[3], ARGV[4])
        redis.call("EXPIRE", KEYS[1], math.ceil(tonumber(ARGV[5]) / 1000))
        return {1, tonumber(ARGV[2]) - current - 1}
      else
        return {0, 0}
      end
    `;
    const result = await this.redis.eval(
      script,
      1,
      `ratelimit:${key}`,
      windowStart,
      maxRequests,
      now,
      `${now}:${Math.random()}`,
      windowMs
    );
    const [allowed, remaining] = result as [number, number];
    return { allowed: allowed === 1, remaining };
  }
}
```

**Challenges**: Redis becomes a single point of failure and adds ~1ms latency per request. Mitigations: Redis Sentinel/Cluster, local counters with periodic sync (approximate rate limiting).

---

## 8.5 Idempotency Keys

Idempotency ensures that retrying a request produces the same result as the first attempt. Clients generate a unique key (UUIDv4) and send it with mutating requests.

```typescript
interface IdempotencyRecord {
  key: string;
  response: any;
  statusCode: number;
  createdAt: number;
  expiresAt: number;
}

class IdempotencyMiddleware {
  private store: Map<string, IdempotencyRecord> = new Map();
  private ttl = 86400000;

  middleware() {
    return (req: any, res: any, next: any) => {
      if (["POST", "PATCH", "PUT", "DELETE"].includes(req.method)) {
        const key = req.headers["idempotency-key"];
        if (!key) {
          res.setHeader("X-Idempotency-Key-Required", "true");
          return next();
        }
        const existing = this.store.get(key);
        if (existing) {
          return res.status(existing.statusCode).json(existing.response);
        }
        const originalSend = res.json.bind(res);
        res.json = (body: any) => {
          this.store.set(key, {
            key,
            response: body,
            statusCode: res.statusCode,
            createdAt: Date.now(),
            expiresAt: Date.now() + this.ttl,
          });
          return originalSend(body);
        };
        next();
      } else {
        next();
      }
    };
  }
}
```

**Best practices**: Use UUIDv4 as idempotency key, set 24h TTL, return cached response for duplicate keys, include key in response headers.

---

## 8.6 Rate Limit Headers & Client Backoff

Standard rate limit response headers enable clients to adapt their behavior.

```typescript
function setRateLimitHeaders(
  res: any,
  limit: number,
  remaining: number,
  resetTime: number,
  retryAfter?: number
): void {
  res.setHeader("X-RateLimit-Limit", limit);
  res.setHeader("X-RateLimit-Remaining", remaining);
  res.setHeader("X-RateLimit-Reset", Math.ceil(resetTime / 1000));
  if (retryAfter) res.setHeader("Retry-After", Math.ceil(retryAfter / 1000));
}

class ResilientClient {
  private baseUrl: string;
  private maxRetries = 3;

  async request(path: string, options: RequestInit = {}): Promise<Response> {
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      const res = await fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers: { ...options.headers, "Idempotency-Key": crypto.randomUUID() },
      });
      if (res.ok) return res;
      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get("Retry-After") ?? "1", 10);
        await new Promise((r) => setTimeout(r, retryAfter * 1000));
        continue;
      }
      return res;
    }
    throw new Error("Max retries exceeded");
  }
}
```

**Retry strategies**: Immediate retry (idempotent only), fixed delay, exponential backoff (base x 2^attempt), jitter (randomize delay to avoid thundering herd).

---

## TypeScript Parallel

```typescript
class HybridRateLimiter {
  private localCounters: Map<string, { count: number; resetAt: number }> = new Map();
  private redis: any;
  private syncInterval: number;

  constructor(redis: any, syncInterval = 1000) {
    this.redis = redis;
    setInterval(() => this.syncToRedis(), syncInterval);
  }

  private async syncToRedis(): Promise<void> {
    for (const [key, { count }] of this.localCounters) {
      await this.redis.incrby(`ratelimit:${key}:local`, count);
      await this.redis.expire(`ratelimit:${key}:local`, 2);
    }
    this.localCounters.clear();
  }

  async check(key: string, maxGlobal: number, windowMs: number): Promise<boolean> {
    const local = this.localCounters.get(key);
    const now = Date.now();
    if (local && now < local.resetAt) {
      local.count++;
      return local.count <= maxGlobal * 1.1;
    }
    const globalCount = parseInt(await this.redis.get(`ratelimit:${key}:local`) ?? "0", 10);
    if (globalCount >= maxGlobal) return false;
    this.localCounters.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
}
```

---

## Summary

- Rate limiting protects APIs from abuse, ensures fair usage, and prevents cascading failures
- Token bucket allows bursts up to capacity while enforcing a long-term average rate
- Sliding window counter approximates sliding window with O(1) memory and no boundary burst
- Distributed rate limiting requires shared state (Redis) or approximate local counters with periodic sync
- Idempotency keys enable safe retries for mutating operations by caching and replaying responses
- Standard rate limit headers (X-RateLimit-Limit, Remaining, Reset, Retry-After) let clients adapt
- Exponential backoff with jitter prevents thundering herd during retry storms
- Rate limit at multiple layers: global, per-endpoint, per-IP, per-tenant
- Lua scripts in Redis ensure atomic rate limit operations without race conditions
- Always return 429 Too Many Requests with meaningful headers for exceeded limits

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Public API rate limiting | Token bucket per API key + sliding window per endpoint | Single global limit (unfair to heavy users) |
| Login/brute force protection | Strict fixed window (5 attempts/min per IP) | Global rate limit (doesn't stop targeted attacks) |
| Idempotent payment API | Idempotency key required on POST, 24h TTL | No idempotency (duplicate charges risk) |
| Retry strategy | Exponential backoff with jitter | Fixed 1s retries (cascading failures) |
| Multi-tenant rate limiting | Per-tenant token bucket with different capacities | Same limit for all tenants |
| Webhook retry | Exponential backoff over 24h, then dead letter | Infinite retries every 1s (overloads consumer) |

## Interview Q&A

<details class="tp-qa-card" data-qid="sd07-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Explain the difference between token bucket and leaky bucket algorithms.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Token bucket</strong>: Tokens are added at a constant rate up to a maximum capacity. Each request consumes a token. Allows bursts up to the bucket capacity. <strong>Leaky bucket</strong>: Requests are queued and processed at a constant rate. If the queue is full, new requests are rejected. No bursting allowed. Token bucket is preferred for API rate limiting because it allows natural bursts. Leaky bucket is better when strict constant output rate is needed.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you implement rate limiting across multiple server instances?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>1) Centralized Redis</strong>: All instances check Redis counters. Use Lua scripts for atomicity. Simple but adds ~1ms latency. <strong>2) Local counters + periodic sync</strong>: Each instance maintains a local buffer (10% over limit), periodically syncs to Redis. Sacrifices accuracy for lower latency. <strong>3) Consistent hashing</strong>: Route a user's requests to the same instance. No Redis dependency but requires sticky routing. <strong>4) Distributed CRDT counters</strong>: Converge without coordination.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the Retry-After header and how should clients handle it?
  </summary>
  <div class="tp-qa-answer">
    <p>Retry-After is sent with 429 (Too Many Requests) and 503 (Service Unavailable) responses. It can be: a decimal integer (seconds to wait) or an HTTP-date (when to retry). Clients should: parse and respect the header, wait the specified duration before retrying, add jitter to prevent thundering herd, stop retrying after maximum attempts, and only auto-retry for idempotent requests.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do idempotency keys work and when are they required?
  </summary>
  <div class="tp-qa-answer">
    <p>The client generates a unique key (UUIDv4) sent in the Idempotency-Key header with mutating requests. The server stores the response keyed by this ID. If the same key is received again, the server returns the cached response without re-executing the operation. Required for: payment processing, order creation, any operation where duplicate execution causes harm (charging twice, creating two orders). Key properties: unique per operation, random (not predictable), has TTL (typically 24h).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What are the scalability challenges of Redis-based rate limiting?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>1) Redis bottleneck</strong>: Every request requires a Redis round-trip (~0.5-2ms). <strong>2) Redis failover</strong>: Sentinel/Cluster failover may cause data loss. <strong>3) Network latency</strong>: Cross-region Redis adds 50-100ms. <strong>4) Memory usage</strong>: Per-user sliding window logs for millions of users require significant memory. <strong>5) Cluster complexity</strong>: Redis Cluster has cross-slot limitations for Lua scripts. Mitigations: local counters with periodic sync, circuit breakers for Redis unavailability, CRDT-based counters.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: Compare fixed window, sliding log, and sliding window counter algorithms.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Fixed window</strong>: O(1) memory per key, but allows 2x burst at window boundary. <strong>Sliding log</strong>: Perfectly precise, but O(n) memory per key, expensive pruning. <strong>Sliding window counter</strong>: O(1) memory, no boundary burst, approximate (5-10% error). For most APIs, sliding window counter is the best trade-off between accuracy and memory.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you rate limit a multi-tenant SaaS API?
  </summary>
  <div class="tp-qa-answer">
    <p>Implement tiered rate limiting: <strong>1) Per-tenant limits</strong>: Different limits based on plan (Free: 100/min, Pro: 1000/min, Enterprise: 10000/min). <strong>2) Per-endpoint limits</strong>: Stricter limits on expensive endpoints (report generation, bulk exports). <strong>3) Global limits</strong>: Overall system capacity to prevent any single tenant from overwhelming the system. <strong>4) Burst allowance</strong>: Allow short bursts as long as the 5-minute average is within limits. Use token bucket per tenant with different capacities.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is the thundering herd problem in rate limiting and how do you prevent it?
  </summary>
  <div class="tp-qa-answer">
    <p>Thundering herd occurs when many clients retry simultaneously after a rate limit window resets, causing a spike that triggers rate limiting again. Prevention: <strong>1) Jitter</strong>: Add random delay: base_delay + random(0, 1000)ms. <strong>2) Gradual reset</strong>: Use sliding window instead of fixed window. <strong>3) Randomized retry</strong>: Spread retries across a wider window. <strong>4) Server-side smoothing</strong>: Gradually allow requests in. <strong>5) Client backoff with jitter</strong>: delay = min(30000, (2^attempt * 1000) + random(0, 1000)).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle rate limit state when scaling instances up/down?
  </summary>
  <div class="tp-qa-answer">
    <p>Scaling up: New instances start with empty counters and allow more requests until Redis sync catches up. Acceptable — system becomes slightly permissive. Scaling down: In-flight counters in terminating instances are lost. Solutions: <strong>1)</strong> On graceful shutdown, flush local counters to Redis. <strong>2)</strong> Use Redis as source of truth with local caching. <strong>3)</strong> Accept temporary accuracy degradation during scaling (~10% error for <1 minute).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: Design a rate limiter that handles both API keys and IP addresses.
  </summary>
  <div class="tp-qa-answer">
    <p>Two-layer rate limiting: <strong>Layer 1 (API key)</strong>: Token bucket per API key — primary limit identifying the tenant. <strong>Layer 2 (IP)</strong>: Sliding window per IP — catches abuse from stolen keys or unauthenticated traffic. Reject if EITHER limit is exceeded. For authenticated requests, reduce IP limit weight. Redis keys: ratelimit:apikey:{key} and ratelimit:ip:{ip}. Response headers include both limits.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which rate limiting algorithm allows bursts of traffic up to a configurable capacity?

a) Fixed window
b) Token bucket
c) Leaky bucket
d) Sliding log

<details class="tp-qa-card" data-qid="sd07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Token bucket</strong></p><p>Token bucket allows bursts up to bucket capacity while enforcing a long-term average refill rate.</p></div></details>

**Q2**: What HTTP status code should be returned when a client exceeds the rate limit?

a) 400 Bad Request
b) 403 Forbidden
c) 429 Too Many Requests
d) 503 Service Unavailable

<details class="tp-qa-card" data-qid="sd07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 429 Too Many Requests</strong></p><p>429 Too Many Requests is the standard HTTP status code for rate limiting.</p></div></details>

**Q3**: What is the primary purpose of an idempotency key?

a) Authenticate requests
b) Enable safe retries of mutating operations
c) Encrypt payload data
d) Track request latency

<details class="tp-qa-card" data-qid="sd07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Enable safe retries</strong></p><p>Idempotency keys allow clients to safely retry requests without risk of duplicate side effects.</p></div></details>

**Q4**: Which algorithm uses a sorted set of timestamps per key for precise rate limiting?

a) Token bucket
b) Fixed window
c) Sliding log
d) Sliding window counter

<details class="tp-qa-card" data-qid="sd07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Sliding log</strong></p><p>Sliding log maintains a sorted set of timestamps per key to count requests within a precise sliding window.</p></div></details>

**Q5**: What header should a server include to tell a client how long to wait before retrying?

a) X-RateLimit-Reset
b) Retry-After
c) X-Retry-Delay
d) Cache-Control

<details class="tp-qa-card" data-qid="sd07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Retry-After</strong></p><p>Retry-After is the standard HTTP header specifying how long to wait before making a new request.</p></div></details>

## Exercises

**Easy** — Implement a token bucket rate limiter in TypeScript with configurable capacity and refill rate (tokens per second).

**Easy** — Write a function implementing exponential backoff with jitter: takes attempt number and returns delay in milliseconds.

**Medium** — Implement a sliding window counter rate limiter using Redis sorted sets. Support max N requests per T seconds per key.

**Medium** — Build idempotency middleware for Express.js that stores responses in Redis with 24h TTL and replays cached responses for duplicate keys.

**Hard** — Design and implement a distributed rate limiter with local counters (90% accuracy) and periodic Redis sync. Support graceful degradation when Redis is unavailable.

**Hard** — Implement a multi-tier rate limiting system: per-API-key token bucket + per-IP sliding window. Return 429 responses with rate limit headers.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition
## Revision Notes

- Key concept 1: Core principle of 07-system-design
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding
## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 07-system-design. When would you choose one approach over another?
2. Design a system that efficiently handles 07-system-design at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 07-system-design. What was your approach and what was the result?
2. How would you explain 07-system-design to a non-technical stakeholder?

#### Microsoft Style
1. How does 07-system-design integrate with enterprise systems and cloud architectures?
2. What are the security implications of 07-system-design?

#### NVIDIA Style
1. How would you optimize 07-system-design for GPU-accelerated computing?
2. What parallel processing patterns apply to 07-system-design?

#### AI Startup Style
1. How would you implement 07-system-design in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 07-system-design?

### Resume Tips
- **Technical Skills**: List 07-system-design under relevant technical skills
- **Project Description**: "Implemented 07-system-design to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 07-system-design in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 07-system-design
- [ ] Practice 3-5 problems related to 07-system-design
- [ ] Prepare 2 real-world examples of using 07-system-design
- [ ] Know the time/space complexity of common 07-system-design operations
- [ ] Have questions ready about how the company uses 07-system-design> **Next**: [Monitoring & Observability](09-monitoring-and-observability.md)
