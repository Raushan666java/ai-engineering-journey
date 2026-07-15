# Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin
> **Previous:** [17 Observability Resiliency](./17-observability-resiliency.md) | **Next:** [19 Case Study Whatsapp](./19-case-study-whatsapp.md)

---

## Learning Objectives

- Design a globally distributed URL shortening service with high read throughput and low redirect latency
- Implement a distributed rate limiter using Redis with sliding window algorithms and Lua scripting for atomicity
- Build a content-addressable pastebin service with deduplication, automatic expiry, and CDN-backed delivery
- Analyze the trade-offs between hashing strategies, storage engines, and caching layers for write-once read-many workloads
- Understand how to pre-generate unique identifiers to avoid database contention on write paths
- Compare token bucket, leaky bucket, fixed window, and sliding window algorithms for rate limiting at scale

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/system-design/18-case-studies-classic/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/system-design/18-case-studies-classic/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/system-design/18-case-studies-classic/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/system-design/18-case-studies-classic/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/system-design/18-case-studies-classic/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/system-design/18-case-studies-classic/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Aspect | Details |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory] --> B[Case Study: URL Shortener]
    C[Case Study: Rate Limiter]
    B --> C
    D[Case Study: Pastebin]
    C --> D
```
|--------|---------|
| **Scope** | Classic case studies: URL shortener, rate limiter, chat system |
| **Key Concepts** | Core topics covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |
| **Design Skills** | System decomposition, architecture comparison |
| **Interview Angle** | Frequently tested in system design interviews |

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Core concepts covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |
| **Key Concepts** | Theory, Case Study: URL Shortener, Case Study: Rate Limiter, Case Study: Pastebin |
| **Design Skills** | Concept mastery and practical application |
| **Interview Angle** | Common system design interview topic |

---
---

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
    B[Case Study URL Shortener]
    A --> B
    C[Case Study Rate Limiter]
    B --> C
    D[Case Study Pastebin]
    C --> D
    E[Concept Comparison]
    D --> E
    F[Quick Reference]
    E --> F
    G[CrossApplication Matrix]
    F --> G
    H[Chapter Quiz]
    G --> H
```

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation ? master it before moving to examples and exercises.

![URL Shortener Rate Limiter Pastebin Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/18-url-shortener-rate-limiter.png)

### Requirements Phase


> **Pro Tip:** Master this concept thoroughly ? it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept ? it appears in nearly every system design interview. Understand both the how and the why.

> **Warning:** A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements.

> **Pro Tip:** Master this concept thoroughly ? it appears in nearly every system design interview.
Every system design begins with precise functional and non-functional requirements. Ambiguity is the enemy of good architecture.

**URL Shortener Requirements**

| Aspect | Specification |
|--------|--------------|
| Generate short URL | Input a long URL, output a short key (6-8 characters) |
| Redirect | 301 or 302 redirect from short URL to original long URL |
| Custom alias | Optional user-defined short path |
| Analytics | Per-link click count, referrer, geo, timestamp |
| TTL support | Optional expiration for time-limited campaigns |
| Traffic | 100 million URLs created per month |
| Write QPS | ~40 writes per second (100M / ~2.6M sec/month) |
| Read QPS | ~400 reads per second (10:1 read-to-write ratio) |
| Latency | Redirects under 10ms end-to-end |
| Availability | 99.99% (four nines) — redirects must always work |

**Rate Limiter Requirements**

| Aspect | Specification |
|--------|--------------|
| Per-user quota | 100 requests per minute per API key |
| Per-IP quota | 500 requests per minute per source IP |
| Distributed | Consistent enforcement across all app servers |
| Latency overhead | Less than 1ms added to request path |
| Configurable | Per-endpoint rules, burst allowances |
| Headers | Inform clients of remaining quota and reset time |
| Accuracy | Within 1% of true rate under normal conditions |

**Pastebin Requirements**

| Aspect | Specification |
|--------|--------------|
| Create paste | Accept text content, return URL |
| Syntax highlighting | Auto-detect or explicit language tag |
| Expiry | Optional TTL: 10min, 1hr, 1day, 1week, 1month, never |
| Access control | Public, unlisted (random URL), private |
| Read pattern | Write-once, read-many, content never changes |
| Traffic | 1M paste creations/day, 50M reads/day |
| Storage | Raw text + metadata, average paste ~10KB |
| CDN | Popular pastes served from edge |

### Estimation Phase


> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Orders of magnitude matter. We compute storage, bandwidth, and QPS before choosing components.

**URL Shortener Storage**

- 100M URLs/month × 12 months = 1.2B URLs/year
- Average entry: short key (8 bytes) + long URL (2048 bytes avg) + created_at (8 bytes) + user_id (8 bytes) + metadata (~200 bytes) = ~2.3KB
- Total per year: 1.2B × 2.3KB ˜ 2.8TB
- With replication factor 3 and Cassandra overhead: ~10TB/year
- Cache: 80% of reads hit 20% of URLs (Pareto). Top 200M URLs in Redis: 200M × 2.3KB ˜ 460GB. Use Redis Cluster with sharding.
- Bandwidth writes: 40 QPS × 2.3KB ˜ 92KB/sec (trivial)
- Bandwidth reads: 400 QPS × 2.3KB ˜ 920KB/sec

**Rate Limiter Storage**

- 100M users × ~200 bytes/user (counter state) = 20GB if stored per-user
- Redis optimization: window data per key is small (<100 bytes)
- Total Redis memory: ~2-4GB for 10M active daily users
- Network: rate limiter check adds ~1 round trip per request (or zero with local cache)

**Pastebin Storage**

- 1M pastes/day × 10KB avg = 10GB/day raw content
- 30 days × 10GB = 300GB hot storage
- Metadata: 1M × 1KB = 1GB/day ? 30GB/month
- Object store (S3) costs: ~$23/TB/month for standard tier
- Transition infrequent-access pastes to S3 Glacier after 30 days
- CDN: cache popular pastes (Pareto: 10% of pastes serve 90% of reads)

### High-Level Design Phase


> **Remember:** Always articulate trade-offs clearly ? interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Logical architecture before physical implementation. We decompose the system into collaborating services.

**URL Shortener HLD**

```
Client ? CDN (static assets) ? Load Balancer (Round Robin) ? App Server Pool
  +--? Write Path: KGS (Key Generation Service) ? Redis (cache) ? Cassandra (persistence)
  +--? Read Path:  Redis (cache hit) ? Cassandra (cache miss ? populate cache)
```

The Key Generation Service is the central innovation. A naive approach generates a random key on each write, requiring a database uniqueness check per request. KGS pre-generates batches of unique keys and marks them as used in a separate database table. Each app server maintains a local pool of 10,000 pre-generated keys, eliminating the database write bottleneck for ID generation entirely.

**Rate Limiter HLD**

```
Client ? Load Balancer ? App Server (local rate limiter cache)
  ? Redis Cluster (distributed counter, Lua scripting)
  ? API Gateway (global rate limit rules)
```

The rate limiter sits in front of the API. A middleware layer intercepts each request, extracts the user or IP identifier, checks the current count, and either allows or rejects the request. The decision is cached locally on each app server to minimize Redis round trips for high-volume users.

**Pastebin HLD**

```
Client ? CDN (CloudFront) ? Load Balancer (ELB) ? App Server Pool (EC2 Auto Scaling)
  +-- Write: S3 Object Store (paste content, keyed by SHA-256)
  +-- Metadata: PostgreSQL RDS (Multi-AZ, with read replicas)
  +-- Cache: ElastiCache Redis (popular metadata + rendered HTML)
  +-- Search: Elasticsearch (full-text search over content and language)
  +-- Workers: SQS ? Lambda (expiry, syntax highlighting, CDN pre-warm)
```

Pastes are content-addressed. The server computes SHA-256(content) to generate a unique hash. If the hash already exists in the metadata database, the system returns the existing URL (deduplication). This approach guarantees that identical content always maps to the same paste, saving storage and reducing redundancy.

**Component Decision Matrix**

The following table captures the rationale for each technology choice in the Pastebin architecture:

| Component | Options Considered | Chosen | Rationale |
|-----------|-------------------|--------|-----------|
| Object store | S3, GCS, MinIO | S3 | Lifecycle policies for automated tier transitions, 11 nines durability, global edge presence |
| Metadata DB | PostgreSQL, MySQL, Cassandra | PostgreSQL | Relational schema with ACID for deduplication check, partial indexes for expiry queries |
| Cache | Redis, Memcached | Redis | Rich data structures (sorted sets for trending), persistence, pub-sub for cache invalidation |
| Search | Elasticsearch, Algolia, MeiliSearch | Elasticsearch | Full-text search with custom scoring, aggregations for language and category statistics |
| Queue | SQS, RabbitMQ, Kafka | SQS | Fully managed, infinite retention window, dead-letter queues for failed highlighting jobs |
| Syntax highlight | Pygments, highlight.js, Prism | Pygments | 500+ language support, server-side execution with no client dependency, active community |

### Deep Dive Phase


Now we examine the hard problems — the details that separate a toy from a production system.

**Comparative Analysis: Three Approaches to Unique ID Generation**

The most critical decision in a URL shortener is how to generate unique, collision-free keys. Three approaches dominate, each with distinct trade-offs:

| Approach | Key Space | Collision Risk | Read Performance | Write Performance | Complexity |
|----------|-----------|---------------|-----------------|-------------------|------------|
| Base62 from counter | 62^N (deterministic) | Zero | O(1) lookup on primary key | O(1) increment + encode | Low |
| MD5 truncation | 2^56 (7 bytes) | Birthday bound: ~2.4B keys for 50% | O(1) on hash index | O(1) hash + collision check | Medium |
| Snowflake ID | 2^63 (signed 64-bit) | Zero (monotonic) | O(1) range index | O(1) server-local increment | Low |

Base62 with a counter-based ID (distributed sequence generator) is the most practical choice. It guarantees no collisions, produces short keys, and the Counter can be sharded per server (e.g., server 1 generates IDs 1, N+1, 2N+1...). The encoding function is trivial:

```python
BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def encode_base62(num):
    if num == 0:
        return BASE62[0]
    result = []
    while num > 0:
        num, rem = divmod(num, 62)
        result.append(BASE62[rem])
    return ''.join(reversed(result))
```

With 7 characters, Base62 gives us 62^7 ˜ 3.5 trillion unique keys. At 100M new URLs per month, this space lasts ~3,500 years.

**URL Shortener Deep Dive**

Hashing strategy is the first architectural decision. Base62 encoding (a-z, A-Z, 0-9 = 62 characters) produces short, human-readable keys. With 7 characters, we have 62^7 ˜ 3.5 trillion unique keys. MD5 hash truncation produces a 128-bit hash, truncated to the first 7 bytes, then Base62 encoded. The risk is collision: with 3.5 trillion keys and a truncated hash, the birthday paradox gives a ~50% collision probability at ~2.4 billion keys. For a URL shortener, collisions are unacceptable because they would redirect one URL to another.

Collision resolution strategies include:
- **Append a counter**: When a collision is detected, append a sequence number and re-hash.
- **Fallback to longer key**: If the first 7 characters collide, try 8, then 9 characters.
- **Use a counter-based ID**: Increment a distributed counter (e.g., Snowflake ID or Redis INCR), then Base62 encode the numeric value. This guarantees uniqueness without collisions.

**URL Shortener Security and Abuse Prevention**

URL shorteners are a favorite tool for attackers. Shortened URLs obscure the destination, making them ideal for phishing and malware distribution. Security measures include:

- **URL validation on creation**: Before generating a short URL, the system checks the long URL against known malware blocklists (Google Safe Browsing API, PhishTank, custom blocklists). Suspicious URLs are rejected with an error or flagged for manual review.
- **Click-through warning**: If a short URL has been reported as abusive or the destination domain has a low reputation score, users see an interstitial warning page before being redirected. The warning page shows the full destination URL and a "Proceed at your own risk" button.
- **Rate limiting on creation**: Per-IP and per-user limits on URL creation prevent bulk generation of malicious links. A single user creating 1,000 URLs in 5 minutes is throttled.
- **Expiring suspicious URLs**: Newly created URLs that have zero clicks in 7 days and were flagged by the URL validator are automatically deleted.
- **QR code generation**: Short URLs are frequently encoded into QR codes. The system generates QR codes server-side with embedded expiry, ensuring that printed QR codes for time-limited campaigns stop working after expiry.

The KGS approach uses a database-backed pool of pre-generated keys. A key table stores `(id, key, is_used)` rows. When an app server runs low on keys, it requests a batch of 10,000, atomically marking them as used. This design ensures:
- No database contention on the write path for key generation
- Enables key recycling (reuse keys from deleted URLs after a grace period)
- Provides consistent key length (no variable-length URLs)
- Eliminates collision entirely since each key is handed out exactly once

Cache strategy: Use Redis with write-through and read-through. On write, store in both Redis and Cassandra. On read, check Redis first. The 301 vs 302 redirect decision matters. 301 (Moved Permanently) is cached by browsers and reduces server load but makes analytics harder because the browser never contacts the server again for that URL. 302 (Found) is not cached and passes through the server, enabling analytics tracking. The canonical answer: use 301 for most URLs (performance) but 302 for custom short URLs or analytics-tracked campaigns.

Analytics tracking uses an asynchronous pipeline. The redirect returns immediately; an event is published to Kafka containing the short key, timestamp, referrer, user-agent, and IP geolocation. Downstream consumers process Kafka events into a time-series database (ClickHouse or Druid) for dashboard queries.

**Database Sharding and Read Replicas**

At 1.2B URLs/year, a single database instance becomes a bottleneck. The sharding strategy uses the short key as the shard key with consistent hashing:

```python
shard_id = hash(short_key) % NUM_SHARDS
```

With 64 shards and replication factor 3, each shard handles ~20M URLs/year. Each shard has one writer and two read replicas. Writes go to the writer; reads go to the replicas via round-robin (for Redis cache misses). This gives a read capacity of ~5,000 QPS at the database layer, well above the 400 QPS read requirement.

**Read Replica Lag and Consistency**

The cache-aside pattern with write-through ensures that recent writes are always in Redis. Database read replicas may lag by up to 100ms. The consistency guarantee: after a successful write, the next read hits Redis (populated during write). If Redis is down and the read replica has not yet replicated the write, the user sees a stale redirect. For a URL shortener, this is acceptable — the user created the URL and the redirect works, just pointing to an old URL if they recently edited it.

**Rate Limiter Deep Dive**

Four algorithm choices with distinct trade-offs:

**Token Bucket**: A bucket holds N tokens. Each request consumes 1 token. Tokens refill at rate R per second. Bursts of up to N requests pass through immediately. Implementation is simple with a single Redis key `bucket:{id}` storing `(tokens, last_refill_timestamp)`. The burst tolerance makes it ideal for API gateways handling traffic spikes. However, a sustained rate above R eventually exhausts the bucket and blocks all traffic until refill.

**Leaky Bucket**: Requests enter a queue of size N. A worker processes requests at rate R per second. Excess requests are discarded. This smooths traffic perfectly but introduces queuing latency and cannot handle bursts naturally. Useful for downstream services with fixed processing capacity.

**Fixed Window**: Count requests in a window `[T, T+60s)`. If count exceeds threshold, reject. Simple to implement with Redis `INCR` and `EXPIRE`. The boundary problem: if a user sends 100 requests at 0:59 and 100 more at 1:01, they serve 200 requests in a 2-second period while the 1-minute window shows only 100 each. This can allow 2x the allowed rate at window boundaries.

**Sliding Window Log**: Maintain a sorted set of timestamps per user (`ZADD`). Count timestamps in the last 60 seconds with `ZCOUNT`. Reject if over limit. This is perfectly accurate (no boundary problem) but memory-intensive. A user with 100 req/min stores 100 entries per window. At 10M active users, this is prohibitive.

**Sliding Window Counter**: The compromise. Track the current window's counter and the previous window's counter. Calculate:

```
weighted_count = current_count + previous_count × (window_elapsed / window_size)
```

This approximates the true sliding window rate with O(1) storage per user — just two counters per key. Redis Lua script:

```lua
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

local current_window = math.floor(now / window)
local previous_window = current_window - 1

local current_count = redis.call("GET", key .. ":" .. current_window) or 0
local previous_count = redis.call("GET", key .. ":" .. previous_window) or 0

local elapsed = (now % window) / window
local weighted = current_count + previous_count * elapsed

if weighted >= limit then
    return 0  -- rate limited
end

redis.call("INCR", key .. ":" .. current_window)
redis.call("EXPIRE", key .. ":" .. current_window, window * 2)
return 1  -- allowed
```

Local caching reduces Redis pressure by 10x. Each app server pre-allocates a batch of tokens (e.g., 10) and serves requests from memory until the batch is consumed, then requests a new batch from Redis. The cost is a slight overshoot on the rate limit (up to 10 requests per server per batch cycle). For most APIs, this accuracy trade-off is acceptable in exchange for eliminating 90% of Redis round trips.

Rate limit headers follow the standard convention:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests per window |
| `X-RateLimit-Remaining` | Remaining requests in current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |
| `Retry-After` | Seconds to wait before retrying (on 429) |

Handling hot users requires priority queuing. If a single user sends 10,000 req/s, their rate limiter key becomes a Redis hot spot. Solution: split the user's counter across N shards (e.g., `user:{id}:shard:{0..N}`) and check each shard independently. The error margin increases slightly but the hot key is eliminated.

**Pastebin Deep Dive**

Content addressing via SHA-256 enables automatic deduplication. When a user creates a paste, the server:
1. Receives the content and optional metadata (language, expiry, visibility)
2. Computes SHA-256(content) to produce a 64-character hex digest
3. Checks the metadata database for an existing entry with this hash
4. If found and permissions match, returns the existing URL
5. If not found, uploads content to S3 with the hash as the object key
6. Creates a metadata record in PostgreSQL (hash, language, expiry, visibility, created_at, access_count)
7. Generates a short URL from the hash or a separate auto-increment ID for public pastes

Deduplication at scale means that extremely popular content (source code snippets, error logs, configuration files) is stored once regardless of how many times users paste it. The hash serves as both the content identifier and the storage key.

Expiry logic uses a TTL column in PostgreSQL and a background worker. The worker queries for expired pastes every 60 seconds, marks them as deleted in metadata, and issues S3 lifecycle rules to delete the underlying objects. For user experience, deleted pastes return a 410 Gone response with a clear message.

S3 lifecycle policies automate storage tier transitions:
- Days 0-30: S3 Standard (frequent access)
- Days 31-90: S3 Infrequent Access (IA, lower storage cost)
- Days 91-365: S3 Glacier (archival, ~$1/TB/month)
- After 365: S3 Glacier Deep Archive or deletion

The syntax highlighting pipeline processes pastes asynchronously. When a paste is created, the language is auto-detected (or specified by the user). A background worker runs a syntax highlighter (Pygments or highlight.js server-side) and stores the rendered HTML alongside the raw text. This pre-rendered HTML is served directly to clients, avoiding client-side processing.

CDN integration caches popular pastes at edge locations. The CDN key is the paste hash. When a paste receives more than a configurable threshold of requests (e.g., 1000/hour), the CDN is pre-warmed with the paste content. Subsequent requests bypass the origin entirely, reducing latency to &lt;10ms globally.

**Rate Limiting for Pastebin Create and Read**

Pastebin's traffic asymmetry (50M reads vs 1M writes per day) means the create path is the primary abuse vector. Rate limiting applies differently to each operation:

| Operation | Unauthenticated | Authenticated (Free) | Authenticated (Pro) |
|-----------|----------------|---------------------|---------------------|
| Create paste | 5 per hour, per IP | 50 per hour | 500 per hour |
| Read paste | 100 per minute, per IP | Unlimited | Unlimited |
| Search | 10 per minute, per IP | 60 per minute | 300 per minute |

Abuse detection on the create path includes:
- **Content fingerprinting**: Compute a rolling hash (Rabin-Karp) of submitted content to detect duplicate spam even with minor variations
- **Honeypot fields**: Hidden form fields that only bots fill in; if populated, reject without processing
- **IP reputation**: Real-time check against known spammer IP ranges and VPN/proxy detection services
- **Rate limit tiers verified via email**: Unverified users have stricter limits; email verification raises the tier

**Pastebin Data Model**

The PostgreSQL schema for paste metadata:

```sql
CREATE TABLE pastes (
    id BIGSERIAL PRIMARY KEY,
    short_id VARCHAR(12) UNIQUE NOT NULL,
    content_hash VARCHAR(64) NOT NULL,       -- SHA-256
    s3_key VARCHAR(128) NOT NULL,
    language VARCHAR(32) DEFAULT 'text',
    visibility VARCHAR(10) DEFAULT 'public', -- public, unlisted, private
    user_id BIGINT,                           -- nullable for anonymous
    ip_address INET NOT NULL,
    content_length INT NOT NULL,
    title VARCHAR(256),
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_pastes_hash ON pastes (content_hash) WHERE is_deleted = FALSE;
CREATE INDEX idx_pastes_expiry ON pastes (expires_at) WHERE expires_at IS NOT NULL AND is_deleted = FALSE;
CREATE INDEX idx_pastes_user ON pastes (user_id) WHERE is_deleted = FALSE;
CREATE INDEX idx_pastes_created ON pastes (created_at DESC);
```

The `content_hash` unique index enables O(1) deduplication lookup. The `short_id` is the public-facing URL key (either truncated hash or sequential counter). The partial index on `expires_at` ensures the expiry worker scan is efficient even with billions of pastes, because most pastes have `expires_at IS NULL` (no expiry).

---

## Case Study: URL Shortener
> **One-Sentence Takeaway:** Real-world case studies reveal how architectural decisions map to business constraints at scale.

### Requirements

Alice runs a marketing platform that needs branded short URLs for client campaigns. Requirements:
- 50M short URLs created per month initially
- 400 reads per write (heavy read bias)
- Custom alias support for brand URLs
- Click analytics with geographic breakdown
- 99.99% availability SLA

### Estimation

| Metric | Value |
|--------|-------|
| Writes/sec | ~20 (50M/month) |
| Reads/sec | ~8,000 |
| Storage/year | ~1.4TB raw, ~5TB with replication |
| Cache size | ~200GB (top 100M URLs in Redis) |
| Bandwidth out | ~100 Mbps |

### High-Level Design

```
Client ? CloudFront (CDN for redirects?) ? ELB ? EC2 App Servers (auto-scaling)
  ? KGS (MySQL for key batches) ? Redis Cluster (cache, 10 shards)
  ? Cassandra Cluster (6 nodes, RF=3) ? Kafka ? ClickHouse (analytics)
```

### Deep Dive

The key generation service uses a dedicated MySQL table with two columns: `(id, short_key, is_used)`. A batch processor pre-generates 1M keys daily and stores them. App servers pull batches of 1,000 keys via a stored procedure:

```sql
BEGIN TRANSACTION;
SELECT short_key FROM key_pool WHERE is_used = FALSE LIMIT 1000 FOR UPDATE;
UPDATE key_pool SET is_used = TRUE WHERE short_key IN (...);
COMMIT;
```

App servers cache 10,000 keys in memory, requesting replacement when the pool drops below 1,000. This eliminates write-path database contention entirely.

Cache hierarchy: L1 (local app server LRU cache, 10MB, ~5,000 entries) ? L2 (Redis Cluster, 200GB, ~100M entries) ? Cassandra (full dataset). A Bloom filter in front of Cassandra eliminates unnecessary lookups for non-existent short URLs.

**Cache Invalidation Strategy**

When a user updates a custom short URL's target, the cache must be invalidated:
1. The write path updates Cassandra first (strong consistency on the short URL's primary shard)
2. After Cassandra acknowledges the write, Redis is updated with the new value
3. A cache invalidation message is published to a Redis pub-sub channel
4. All app servers subscribe to this channel and evict the stale entry from their L1 cache
5. The next read hits Redis (L2), which has the updated value

This invalidation strategy ensures that cache inconsistency window is bounded by the Redis update time (~1ms) plus the L1 pub-sub propagation time (~10-50ms). No stale entry persists beyond 100ms.

**Operational Monitoring and Alerting**

Key metrics tracked for the URL shortener:
- **Redirect latency P50/P99/P99.9**: Alert if P99 exceeds 20ms
- **Cache hit ratio**: Alert if L1 + L2 combined hit ratio drops below 99.5% (target: 99.9%)
- **KGS key pool depth**: Alert if the pre-generated key pool drops below 1M keys (reserve for 1 hour)
- **Cassandra read/write latency**: Alert if P99 exceeds 50ms
- **Error rate (4xx/5xx)**: Alert if error rate exceeds 0.1% for 5 consecutive minutes
- **Bloom filter false positive rate**: Tracked weekly; if above 0.1%, the filter is rebuilt with larger capacity

#
### Implementation: Classic Case Studies

```typescript
class TwitterCloneArchitecture {
  private tweets = new Map<string, { id: string; userId: string; content: string; timestamp: number; likes: number }>();
  private follows = new Map<string, Set<string>>(); private timelines = new Map<string, string[]>();
  postTweet(userId: string, content: string): string { if (content.length > 280) throw new Error("Too long"); const id = `tweet-${Date.now()}`; this.tweets.set(id, { id, userId, content, timestamp: Date.now(), likes: 0 });
    const followerIds = this.follows.get(userId); if (followerIds) { for (const fid of followerIds) { if (!this.timelines.has(fid)) this.timelines.set(fid, []); this.timelines.get(fid)!.unshift(id); } }
    if (!this.timelines.has(userId)) this.timelines.set(userId, []); this.timelines.get(userId)!.unshift(id); return id; }
  getTimeline(userId: string, limit = 20): { id: string; content: string; author: string; timestamp: number }[] {
    const ids = (this.timelines.get(userId) || []).slice(0, limit); return ids.map(id => { const t = this.tweets.get(id); return t ? { id: t.id, content: t.content, author: t.userId, timestamp: t.timestamp } : null; }).filter(Boolean) as any; }
  follow(followerId: string, followeeId: string): void { if (!this.follows.has(followeeId)) this.follows.set(followeeId, new Set()); this.follows.get(followeeId)!.add(followerId); }
}
class URLShortener { private urlMap = new Map<string, string>(); private reverseMap = new Map<string, string>();
  shorten(url: string): string { if (this.reverseMap.has(url)) return this.reverseMap.get(url)!; const id = this.generateId(); this.urlMap.set(id, url); this.reverseMap.set(url, id); return id; }
  resolve(id: string): string | undefined { return this.urlMap.get(id); }
  private generateId(): string { return Math.random().toString(36).substring(2, 8); }
}
class RateLimiterSlidingWindow { private windows = new Map<string, number[]>();
  constructor(private maxRequests: number, private windowMs: number) {}
  allow(key: string): boolean { const now = Date.now(); let window = this.windows.get(key) || []; window = window.filter(t => now - t < this.windowMs); if (window.length >= this.maxRequests) { this.windows.set(key, window); return false; } window.push(now); this.windows.set(key, window); return true; }
}
class ChatSystem { private rooms = new Map<string, { messages: { user: string; text: string; ts: number }[]; users: Set<string> }>();
  createRoom(id: string): void { this.rooms.set(id, { messages: [], users: new Set() }); }
  joinRoom(roomId: string, userId: string): void { const room = this.rooms.get(roomId); if (room) room.users.add(userId); }
  sendMessage(roomId: string, userId: string, text: string): void { const room = this.rooms.get(roomId); if (room && room.users.has(userId)) room.messages.push({ user: userId, text, ts: Date.now() }); }
  getMessages(roomId: string, limit = 50): any[] { const room = this.rooms.get(roomId); return room ? room.messages.slice(-limit) : []; }
}
```

// case studies classic
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
  await proc.add({ id: '1', name: 'case studies classic', data: { topic: 'distributed-systems-scalability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// case studies classic - additional TS implementations

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
  log.info('Cache demo started', { course: 'system-design', chapter: 'case studies classic' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('system-design'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- KGS pre-generation eliminates write-path database hotspots
- Browser caching via 301 redirects reduces server load by 80%+ for popular URLs
- 301 vs 302 trades analytics precision for performance
- Redis write-through cache with L1 local cache achieves sub-10ms reads
- Cassandra provides write-optimized, horizontally scalable storage
- Async analytics pipeline decouples tracking from redirect latency
- Collision-free key generation requires counter-based or pre-generated IDs
- Base62 encoding produces human-readable short URLs with sufficient entropy

---

## Case Study: Rate Limiter
> **One-Sentence Takeaway:** Real-world case studies reveal how architectural decisions map to business constraints at scale.

### Requirements

A public API platform serving 10,000 third-party developers. Each API key is rate-limited to 100 req/min for the free tier and 10,000 req/min for enterprise. The system must handle 500K req/s peak.

### Estimation

| Metric | Value |
|--------|-------|
| Peak QPS | 500,000 |
| Active keys | 50,000 |
| Redis keys | ~150,000 (3 counters per active key) |
| Redis memory | ~30MB for counters |
| Redis QPS | ~500,000 checks/sec |
| Network | ~5Gbps inbound |

### High-Level Design

```
Client ? ELB ? API Gateway (Zuul/Kong)
  ? Rate Limiter Middleware
    ? Local Token Cache (per-server)
    ? Redis Cluster (distributed counters, Lua scripting)
  ? Backend Services
```

### Deep Dive

The token bucket variant used here is "burst-aware." Each user is configured with `max_burst` (the bucket capacity) and `refill_rate` (tokens per second). Enterprise customers get a larger bucket and faster refill.

Redis Lua scripting ensures atomicity. The script is only ~20 lines but eliminates race conditions between checking and incrementing the counter. Without Lua, two concurrent requests could both read count=99, both increment, and both pass — allowing 101 requests instead of 100.

Local caching is tiered by user plan. Free-tier users have no local cache (every request hits Redis). Enterprise users get a local batch of 100 tokens. This incentivizes upgrades while protecting the free-tier from abuse.

**Distributed Counter Synchronization**

The fundamental challenge of distributed rate limiting is maintaining accurate state across many application servers without introducing a single point of failure. The solution space spans several approaches:

| Approach | Consistency | Latency | Redis Load | Overshoot Risk |
|----------|------------|---------|------------|----------------|
| Redis on every request | Strong | +1ms per request | Very high | None |
| Local batch (N tokens) | Eventual | +0ms (local) | Reduced by N | Up to N per server |
| Local batch + background sync | Eventually consistent | +0ms | Very low | Bounded by sync interval |
| CRDT counters (Redis-free) | Eventual | +0ms | None | Bounded by merge interval |

The production system uses a tiered approach: free-tier users check Redis on every request (strong consistency, every request counted accurately). Tier-2 users get a local cache of 10 tokens. Enterprise users get 100. The overshoot is bounded: at worst, a user exceeds their limit by (N × number_of_servers) tokens per window. With N=100 and 50 servers, the worst-case overshoot is 5,000 requests — acceptable for enterprise SLAs that specify "burst up to 10x".

**Rate Limit Header Design**

The rate limit response headers follow the IETF standard draft:

```
HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1620000000
Retry-After: 13
```

The `X-RateLimit-Remaining` header is computed as `limit - weighted_count`, floored at zero. The `X-RateLimit-Reset` is the Unix timestamp when the current window expires. The `Retry-After` header on 429 responses tells the client exactly how many seconds to wait before retrying.

Clients are expected to implement exponential backoff with jitter. A well-behaved client reads `X-RateLimit-Remaining` and slows down as it approaches zero. The `Retry-After` header prevents thundering herd problems when all rate-limited clients retry simultaneously.

### Summary

- Sliding window counter provides O(1) storage with sufficient accuracy
- Lua scripting in Redis eliminates counter race conditions
- Local token batching reduces Redis load by 10x for trusted users
- Rate limit headers enable clients to self-regulate
- Sharding hot user keys prevents Redis hot spots
- Configurable rules per endpoint support tiered pricing
- <1ms overhead achieved with local cache hits

---

## Case Study: Pastebin
> **One-Sentence Takeaway:** Real-world case studies reveal how architectural decisions map to business constraints at scale.

### Requirements

A developer tool for sharing code snippets and logs. Pastes are write-once, read-many. Content ranges from 1-line shell commands to 10MB log files. Popular pastes can receive millions of views.

### Estimation

| Metric | Value |
|--------|-------|
| Pastes/day | 1M |
| Reads/day | 50M |
| Average paste size | 10KB |
| Hot storage (30 days) | 300GB |
| Archive storage (1 year) | 3.6TB in Glacier |
| CDN offload | 90% of reads from edge |

### High-Level Design

```
Client ? CloudFront CDN ? ELB ? EC2 App Servers
  ? S3 Object Store (paste content)
  ? PostgreSQL (metadata, dedup)
  ? Background Workers
    +-- Expiry Worker (deletes expired pastes)
    +-- Syntax Highlighting Worker
    +-- CDN Pre-warm Worker
```

### Deep Dive

Content hashing for deduplication is the defining feature. SHA-256(content) produces a 64-character digest that serves as the S3 object key. The deduplication check is a simple primary key lookup in PostgreSQL. If the hash exists, the system returns the existing paste URL — but only if the visibility settings are compatible. A private paste that happens to match a public paste is treated as a new object (the hash is salted with a user-specific nonce).

The short URL for public pastes is generated from a truncated portion of the hash (first 8 hex characters ? 4 billion unique IDs) or from a sequential ID with the hash used only for storage deduplication.

Syntax highlighting runs via a Celery-like task queue. The worker detects the language using file extension, shebang, or content heuristics (Pygments' lexer guessing). The rendered HTML is stored in both S3 (as a separate `.html` object) and in a CDN cache for fast delivery.

Expiry uses a PostgreSQL partial index: `CREATE INDEX idx_expired ON pastes (expires_at) WHERE expires_at IS NOT NULL`. A cron-like worker runs every 60 seconds:

```sql
SELECT id, s3_key FROM pastes WHERE expires_at < NOW() AND is_deleted = FALSE LIMIT 1000;
```

For each expired paste, the worker marks `is_deleted = TRUE` in metadata (soft delete for 30 days in case of accidental expiry), then schedules S3 object deletion via an async queue.

### Summary

- Content hashing enables free deduplication for identical pastes
- SHA-256 as object key guarantees uniqueness in S3 without collisions
- Background workers decouple highlighting and expiry from request path
- S3 lifecycle policies automate tier transitions and cost optimization
- CDN pre-warm reduces latency for viral content
- Soft delete window protects against accidental expiry
- PostgreSQL partial index makes expiry queries efficient at scale

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Metric |
|---------|-----------|------------|
| Theory | Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Defined by specific measurable attributes |
| Case Study: URL Shortener | Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Defined by specific measurable attributes |
| Case Study: Rate Limiter | Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Defined by specific measurable attributes |
| Case Study: Pastebin | Core topic covered in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Defined by specific measurable attributes |

---

## Quick Reference

| Topic | Key Point |
|-------|-----------|
| Theory | Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |
| Case Study: URL Shortener | Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |
| Case Study: Rate Limiter | Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |
| Case Study: Pastebin | Fundamental concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |

---

## Cross-Application Matrix

| Component | When to Use | Trade-Off |
|-----------|------------|-----------|
| Theory | Appropriate for specific system contexts | Each choice involves trade-offs |
| Case Study: URL Shortener | Appropriate for specific system contexts | Each choice involves trade-offs |
| Case Study: Rate Limiter | Appropriate for specific system contexts | Each choice involves trade-offs |
| Case Study: Pastebin | Appropriate for specific system contexts | Each choice involves trade-offs |

---

## Chapter Quiz

| # | Question | A | B | C | D | Answer |
|---|----------|---|---|---|---|--------|
| 1 | What is the primary purpose of KGS in a URL shortener? | Key Generation Service — pre-generates unique keys to avoid write-path DB contention | Key Gateway Service — routes traffic to key servers | Knowledge Graph Service — stores URL metadata | Kernel Gateway Service — OS-level routing | **A** |
| 2 | Which rate limiting algorithm perfectly tracks the true rate without a boundary problem? | Token Bucket | Fixed Window | Sliding Window Log | Leaky Bucket | **C** |
| 3 | How does Pastebin achieve deduplication? | Comparing URL paths | SHA-256 content hashing | User-provided unique keys | Sequential ID generation | **B** |
| 4 | What is the recommended Base62 key length for a URL shortener with 100M URLs/month? | 4 characters | 5 characters | 7 characters | 10 characters | **C** |
| 5 | In the sliding window counter algorithm, how is the approximate count calculated? | current_count + previous_count × (elapsed/window) | current_count + previous_count | max(current, previous) | min(current, previous) | **A** |

---

## Practical Takeaways

| Takeaway | Application |
|----------|-------------|
| Pre-generate unique keys (KGS pattern) to eliminate write-path database contention | URL shorteners, ID generation services, coupon code generators — batch 10K keys per server |
| Use 301 (permanent) redirect for most URLs, 302 (temporary) for analytics-tracked campaigns | Default: 301 for all URLs. Override to 302 for campaign URLs that need per-click tracking |
| Sliding window counter in Redis balances accuracy and memory — O(1) storage per user, ~5% error margin | API rate limiting: store two counters (current + previous window), use Lua for atomic check-and-increment |
| Content addressing via SHA-256 enables free deduplication for write-once read-many workloads | Pastebin, image hosting, file sharing — identical content maps to same storage location |
| Multi-tier caching (L1 local → L2 Redis → DB) achieves 99%+ hit rates for read-heavy workloads | L1: 10MB LRU per server (sub-ms). L2: Redis Cluster (1-5ms). L3: Cassandra/S3 (10-50ms) |
| S3 lifecycle policies automate storage tier transitions — Standard → IA → Glacier → Deep Archive | 0-30d: Standard. 31-90d: IA. 91-365d: Glacier. >365d: Deep Archive or delete |
| Async analytics pipeline (Kafka → ClickHouse) decouples tracking from redirect latency | URL click analytics: publish to Kafka synchronously, consume asynchronously for dashboard queries |

## Case Study

**Scenario: Scaling a URL Shortener for Enterprise Marketing**

A marketing analytics platform launches a branded URL shortener for enterprise clients. Each client wants custom domains (`go.acme.com/link`), per-domain analytics dashboards, and click tracking with geographic breakdown. Initial traffic is 10 million URLs/month, growing to 100 million within 6 months.

The team makes three critical architecture decisions. First, they implement KGS with a dedicated MySQL key_pool table. An hourly batch job generates 5 million keys (enough for 12 hours of growth). Each app server maintains a local pool of 10,000 keys, requesting a refill via a transactional stored procedure when the pool drops below 2,000. This eliminates any write-path database contention — key generation is purely an in-memory operation.

Second, they implement a multi-tier read path. L1 is a local LRU cache (10MB, ~5,000 entries) per server — sub-millisecond for hot URLs. L2 is a Redis Cluster (10 shards, 200GB total) — P99 read latency 2ms. A Bloom filter (m/n=9.6, k=7, 6MB per server) sits in front of Cassandra, eliminating 99% of lookups for non-existent short URLs. The combined cache hierarchy achieves a 99.7% hit rate, meaning only 0.3% of reads reach Cassandra.

Third, they deploy a click analytics pipeline using Kafka → ClickHouse. Each redirect publishes a small event to Kafka (short key, timestamp, referrer, user-agent, geo-IP). A ClickHouse consumer batch-inserts events every 5 seconds. Dashboard queries aggregate over 7-day windows with sub-second response times. The entire pipeline adds less than 2ms to the redirect path, and ClickHouse compresses the event stream to 0.5 bytes per event — storing 1 billion clicks/day in under 500MB.

The system handles 3,500 writes/second and 35,000 reads/second at peak with P99 redirect latency under 8ms. Monthly infrastructure cost is $45,000 (vs $280,000 estimated for a naive single-database design).
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Fundamental to system design |
| Case Study: URL Shortener | Core topic in Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin | Fundamental to system design |

---

## Quick Reference

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept for Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|--------|-------------------|-----------|
| Theory | Relevant across multiple system design scenarios | Each choice has trade-offs |

---

## Chapter Quiz

**Q1:** What is the primary trade-off discussed in this chapter?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content&lt;/details&gt;

**Q2:** Which concept is most fundamental to the topic of Chapter 18
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

### TypeScript: URL Shortener with Base62, Collision Handling, and Redirection

```typescript
class URLShortener {
  private store = new Map<string, string>();
  private reverseStore = new Map<string, string>();
  private counter = 1000000;
  private customAliases = new Map<string, string>();
  private clicks = new Map<string, number>();
  private readonly BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private encodeBase62(num: number): string {
    if (num === 0) return this.BASE62[0];
    let result = '';
    while (num > 0) {
      result = this.BASE62[num % 62] + result;
      num = Math.floor(num / 62);
    }
    return result;
  }

  private hashUrl(url: string): string {
    let h = 0;
    for (let i = 0; i < url.length; i++) h = ((h << 5) - h + url.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  shorten(url: string, customAlias?: string): string {
    if (this.reverseStore.has(url)) return this.reverseStore.get(url)!;

    let shortId: string;
    if (customAlias) {
      if (this.store.has(customAlias) || this.customAliases.has(customAlias)) {
        throw new Error('Custom alias already in use');
      }
      shortId = customAlias;
      this.customAliases.set(customAlias, url);
    } else {
      shortId = this.encodeBase62(this.counter++);
      while (this.store.has(shortId)) {
        shortId = this.encodeBase62(this.counter++);
      }
    }

    this.store.set(shortId, url);
    this.reverseStore.set(url, shortId);
    this.clicks.set(shortId, 0);
    return shortId;
  }

  resolve(shortId: string, recordClick = true): { url?: string; statusCode: number } {
    const url = this.store.get(shortId);
    if (!url) return { statusCode: 404 };
    if (recordClick) {
      this.clicks.set(shortId, (this.clicks.get(shortId) ?? 0) + 1);
    }
    return { url, statusCode: 301 };
  }

  getClickCount(shortId: string): number { return this.clicks.get(shortId) ?? 0; }

  delete(shortId: string): boolean {
    const url = this.store.get(shortId);
    if (!url) return false;
    this.store.delete(shortId);
    this.reverseStore.delete(url);
    this.customAliases.delete(shortId);
    this.clicks.delete(shortId);
    return true;
  }

  getStats(): { totalUrls: number; totalClicks: number; topUrls: { id: string; url: string; clicks: number }[] } {
    const totalClicks = [...this.clicks.values()].reduce((a, b) => a + b, 0);
    const topUrls = [...this.store.entries()]
      .map(([id, url]) => ({ id, url, clicks: this.clicks.get(id) ?? 0 }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);
    return { totalUrls: this.store.size, totalClicks, topUrls };
  }

  detectCollision(shortId: string, url: string): boolean {
    const existing = this.store.get(shortId);
    return existing !== undefined && existing !== url;
  }
}

function demoURLShortener() {
  const us = new URLShortener();
  const id1 = us.shorten('https://example.com/very/long/url/1');
  console.log(`Shortened to: ${id1}`);
  const resolved = us.resolve(id1);
  console.log(`Resolved: ${resolved.url} (${resolved.statusCode})`);
  const id2 = us.shorten('https://example.com/very/long/url/1');
  console.log(`Dedup check: ${id1 === id2 ? 'same ID (dedup)' : 'different ID'}`);
  us.resolve(id1);
  us.resolve(id1);
  us.resolve(id2);
  console.log('Stats:', JSON.stringify(us.getStats()));
}
```

### TypeScript: Web Crawler with URL Frontier, Politeness, and Dedup

```typescript
interface CrawlResult {
  url: string;
  statusCode: number;
  content: string;
  contentType: string;
  links: string[];
  crawlTimeMs: number;
}

class RobotsTxtParser {
  private disallowed = new Map<string, string[]>();
  private crawlDelays = new Map<string, number>();

  parse(domain: string, content: string): void {
    const disallowed: string[] = [];
    const lines = content.split('\n');
    let currentUserAgent = '';
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('User-agent:')) {
        currentUserAgent = trimmed.split(':')[1].trim();
      } else if (trimmed.startsWith('Disallow:')) {
        const path = trimmed.split(':')[1]?.trim();
        if (path && (currentUserAgent === '*' || currentUserAgent === 'my-crawler')) {
          disallowed.push(path);
        }
      } else if (trimmed.startsWith('Crawl-Delay:')) {
        const delay = parseInt(trimmed.split(':')[1]?.trim() || '10', 10);
        this.crawlDelays.set(domain, delay);
      }
    }
    if (disallowed.length > 0) this.disallowed.set(domain, disallowed);
  }

  isAllowed(domain: string, path: string): boolean {
    const disallowed = this.disallowed.get(domain);
    if (!disallowed) return true;
    return !disallowed.some(d => path.startsWith(d));
  }

  getCrawlDelay(domain: string): number {
    return this.crawlDelays.get(domain) ?? 1;
  }
}

class BloomFilterDedup {
  private bits: boolean[];
  private hashCount: number;

  constructor(size: number, hashCount: number) {
    this.bits = new Array(size).fill(false);
    this.hashCount = hashCount;
  }

  add(url: string): void {
    for (let i = 0; i < this.hashCount; i++) {
      this.bits[this.hash(url, i) % this.bits.length] = true;
    }
  }

  mightContain(url: string): boolean {
    for (let i = 0; i < this.hashCount; i++) {
      if (!this.bits[this.hash(url, i) % this.bits.length]) return false;
    }
    return true;
  }

  private hash(url: string, seed: number): number {
    let h = seed * 31;
    for (let i = 0; i < url.length; i++) h = ((h << 5) - h + url.charCodeAt(i)) | 0;
    return h >>> 0;
  }
}

class URLFrontier {
  private queue: string[] = [];
  private inFlight = new Set<string>();
  private seen = new Set<string>();
  private domainQueues = new Map<string, string[]>();
  private lastCrawlTime = new Map<string, number>();

  constructor(private politenessDelayMs: number, private maxQueueSize = 100000) {}

  add(url: string, force = false): void {
    if (this.seen.has(url) && !force) return;
    if (this.queue.length >= this.maxQueueSize) return;
    this.seen.add(url);
    this.queue.push(url);
    const domain = new URL(url).hostname;
    if (!this.domainQueues.has(domain)) this.domainQueues.set(domain, []);
    this.domainQueues.get(domain)!.push(url);
  }

  addBatch(urls: string[]): void {
    for (const url of urls) this.add(url);
  }

  async next(): Promise<string | null> {
    const now = Date.now();
    for (let i = 0; i < this.queue.length; i++) {
      const url = this.queue[i];
      if (this.inFlight.has(url)) continue;
      const domain = new URL(url).hostname;
      const lastCrawl = this.lastCrawlTime.get(domain) ?? 0;
      if (now - lastCrawl < this.politenessDelayMs) continue;
      this.queue.splice(i, 1);
      this.inFlight.add(url);
      this.lastCrawlTime.set(domain, now);
      return url;
    }
    return null;
  }

  complete(url: string): void {
    this.inFlight.delete(url);
  }

  size(): number { return this.queue.length; }
  inFlightCount(): number { return this.inFlight.size; }
}

class WebCrawler {
  private frontier: URLFrontier;
  private dedup: BloomFilterDedup;
  private robotsParser = new RobotsTxtParser();
  private visited = 0;
  private errors = 0;
  private startTime = 0;

  constructor(
    private seedUrls: string[],
    private maxPages: number,
    private maxConcurrency: number,
    politenessDelayMs = 1000
  ) {
    this.frontier = new URLFrontier(politenessDelayMs);
    this.dedup = new BloomFilterDedup(1000000, 7);
    this.frontier.addBatch(seedUrls);
  }

  async crawl(): Promise<{ results: CrawlResult[]; stats: any }> {
    this.startTime = Date.now();
    const results: CrawlResult[] = [];
    const active: Promise<void>[] = [];

    for (let i = 0; i < this.maxConcurrency; i++) {
      active.push(this.crawlWorker(results));
    }

    await Promise.all(active);
    return {
      results,
      stats: {
        visited: this.visited,
        errors: this.errors,
        durationMs: Date.now() - this.startTime,
        frontierSize: this.frontier.size(),
      },
    };
  }

  private async crawlWorker(results: CrawlResult[]): Promise<void> {
    while (this.visited < this.maxPages) {
      const url = await this.frontier.next();
      if (!url) break;

      const domain = new URL(url).hostname;
      if (!this.robotsParser.isAllowed(domain, new URL(url).pathname)) {
        this.frontier.complete(url);
        continue;
      }

      if (this.dedup.mightContain(url)) {
        this.frontier.complete(url);
        continue;
      }

      const start = Date.now();
      try {
        const response = await this.fetchUrl(url);
        const crawlTime = Date.now() - start;
        this.dedup.add(url);
        this.visited++;

        const links = this.extractLinks(url, response.content);
        const result: CrawlResult = {
          url, statusCode: response.statusCode,
          content: response.content.substring(0, 1000),
          contentType: response.contentType,
          links, crawlTimeMs: crawlTime,
        };
        results.push(result);

        const filteredLinks = links.filter(l => {
          try {
            return !this.dedup.mightContain(l) &&
                   this.robotsParser.isAllowed(new URL(l).hostname, new URL(l).pathname);
          } catch { return false; }
        });
        this.frontier.addBatch(filteredLinks);
      } catch (err) {
        this.errors++;
      }
      this.frontier.complete(url);
    }
  }

  private async fetchUrl(url: string): Promise<{ statusCode: number; content: string; contentType: string }> {
    await new Promise(r => setTimeout(r, 5 + Math.random() * 10));
    return {
      statusCode: 200,
      content: `<html><body><a href="${url}/page1">Link 1</a><a href="${url}/page2">Link 2</a></body></html>`,
      contentType: 'text/html',
    };
  }

  private extractLinks(baseUrl: string, html: string): string[] {
    const links: string[] = [];
    const regex = /href="([^"]+)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      try {
        links.push(new URL(match[1], baseUrl).href);
      } catch { continue; }
    }
    return links;
  }
}

async function demoCrawler() {
  const crawler = new WebCrawler(['https://example.com'], 10, 3, 500);
  const result = await crawler.crawl();
  console.log(`Crawled ${result.stats.visited} pages in ${result.stats.durationMs}ms with ${result.stats.errors} errors`);
  for (const r of result.results.slice(0, 3)) {
    console.log(`  ${r.url} (${r.statusCode}, ${r.crawlTimeMs}ms, ${r.links.length} links)`);
  }
}
```

### URL Shortener Read/Write Path Architecture

```mermaid
flowchart TB
    subgraph USERS["Users"]
        USER_CREATE["User creates short URL<br/>POST /shorten"]
        USER_CLICK["User clicks short URL<br/>GET /abc123"]
    end

    subgraph WRITE_PATH["Write Path"]
        LB_W["Load Balancer"]
        APP_W["App Server<br/>Validate URL<br/>Check custom alias"]
        KGS["Key Generation Service<br/>MySQL key_pool table<br/>Pre-generates 1M keys/day"]
        COLLISION["Collision Check<br/>Bloom Filter + DB lookup"]
        CASSANDRA_W["Cassandra<br/>Write shard<br/>RF=3, CL=QUORUM"]
        REDIS_W["Redis Cache<br/>Write-through<br/>TTL=24h"]
        ANALYTICS_QUEUE["Kafka<br/>Analytics event<br/>Async tracking"]
    end

    subgraph READ_PATH["Read Path"]
        LB_R["Load Balancer<br/>Geo-aware"]
        APP_R["App Server<br/>Parse short ID<br/>301 vs 302 decision"]
        L1_CACHE["L1 Cache<br/>Local LRU<br/>10MB / 5000 entries"]
        L2_CACHE["L2 Cache<br/>Redis Cluster<br/>200GB / 100M entries"]
        BLOOM_FILTER["Bloom Filter<br/>m=48M bits, k=7<br/>Filter non-existent keys"]
        CASSANDRA_R["Cassandra<br/>Read replica<br/>CL=ONE (eventual)"]
        LOG_CLICK["Click Logger<br/>Kafka → ClickHouse"]
    end

    subgraph RESPONSE["Response"]
        REDIRECT["301/302 Redirect<br/>Location: long URL"]
        ANALYTICS["Analytics Pipeline<br/>ClickHouse Dashboard"]
    end

    USER_CREATE --> LB_W --> APP_W
    APP_W --> KGS
    APP_W --> COLLISION
    APP_W --> CASSANDRA_W
    CASSANDRA_W --> REDIS_W
    REDIS_W --> ANALYTICS_QUEUE

    USER_CLICK --> LB_R --> APP_R
    APP_R --> L1_CACHE
    L1_CACHE -->|"miss"| L2_CACHE
    L2_CACHE -->|"miss"| BLOOM_FILTER
    BLOOM_FILTER -->|"might exist"| CASSANDRA_R
    CASSANDRA_R --> L2_CACHE
    L2_CACHE --> L1_CACHE
    L1_CACHE --> APP_R
    APP_R --> REDIRECT
    APP_R --> LOG_CLICK
    LOG_CLICK --> ANALYTICS

    classDef user fill:#E3F2FD,color:#1565C0
    classDef write fill:#FFCDD2,color:#C62828
    classDef read fill:#C8E6C9,color:#2E7D32
    classDef cache fill:#FFF3E0,color:#E65100
    classDef resp fill:#F3E5F5,color:#7B1FA2
    class USER_CREATE,USER_CLICK user
    class LB_W,APP_W,KGS,COLLISION,CASSANDRA_W,REDIS_W,ANALYTICS_QUEUE write
    class LB_R,APP_R,L1_CACHE,L2_CACHE,BLOOM_FILTER,CASSANDRA_R,LOG_CLICK read
    class REDIRECT,ANALYTICS resp
```

### TypeScript: URL Shortener, Rate Limiter, and Pastebin

```typescript
class URLShortener {
  private store = new Map<string, string>();
  private base62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  private counter = 1000000;

  private encode(num: number): string {
    let s = "";
    while (num > 0) { s = this.base62[num % 62] + s; num = Math.floor(num / 62); }
    return s;
  }

  shorten(longUrl: string): string {
    const id = this.encode(this.counter++);
    this.store.set(id, longUrl);
    return `https://short.url/${id}`;
  }

  resolve(shortId: string): string | undefined { return this.store.get(shortId); }
}

class SlidingWindowCounter {
  private windows = new Map<string, { timestamp: number; count: number }[]>();
  constructor(private limit: number, private windowMs: number) {}

  allow(key: string): boolean {
    const now = Date.now();
    let entries = this.windows.get(key) ?? [];
    entries = entries.filter(e => now - e.timestamp < this.windowMs);
    const total = entries.reduce((s, e) => s + e.count, 0);
    if (total >= this.limit) return false;
    const last = entries[entries.length - 1];
    if (last && now - last.timestamp < 1000) { last.count++; }
    else { entries.push({ timestamp: now, count: 1 }); }
    this.windows.set(key, entries);
    return true;
  }
}

class PastebinStore {
  private pastes = new Map<string, { content: string; title: string; language: string; createdAt: number; expiresAt: number }>();
  private contentHash = new Map<string, string>();

  create(content: string, title: string, language: string, ttlMs: number): string {
    const hash = this.sha256(content);
    const existing = this.contentHash.get(hash);
    if (existing) return existing;
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    this.pastes.set(id, { content, title, language, createdAt: Date.now(), expiresAt: Date.now() + ttlMs });
    this.contentHash.set(hash, id);
    return id;
  }

  get(id: string): { content: string; title: string; language: string } | null {
    const paste = this.pastes.get(id);
    if (!paste || Date.now() > paste.expiresAt) { this.pastes.delete(id); return null; }
    return { content: paste.content, title: paste.title, language: paste.language };
  }

  private sha256(data: string): string {
    let h = 0;
    for (let i = 0; i < data.length; i++) h = ((h << 5) - h + data.charCodeAt(i)) | 0;
    return Math.abs(h).toString(16);
  }
}
```

## Summary

- URL shorteners require collision-free key generation; KGS pre-generation is the standard pattern
- Rate limiters must balance accuracy, memory, and Redis round trips; sliding window counter is the practical winner
- Pastebin architectures exploit write-once read-many patterns with content addressing and aggressive caching
- All three systems benefit from multi-tier caching (L1 local, L2 Redis, L3 database)
- Async pipelines (Kafka, Celery) decouple analytics, highlighting, and expiry from the request path
- CDN integration reduces origin load by 80-95% for read-heavy workloads
- Trade-off tables guide component selection: consistency vs availability, accuracy vs latency, cost vs performance

---

## Exercises

### Review Questions
<details><summary>Solution</summary>1. Boundary problem: in fixed-window (e.g., 100 req/min at :00), a user can send 100 requests at :59 and 100 at 1:01 — 200 requests in 2 seconds. Sliding window counter fixes this by tracking the current and previous window counters and computing a weighted average: `current + previous * (elapsed/window_size)`. This approximates the true sliding window rate within ~5% error.
2. KGS pre-generates keys to eliminate write-path database contention. On-demand generation requires a database uniqueness check per request (SELECT + INSERT). Batch pre-generation (10K keys per batch, atomically marked as used) uses a single transaction for 10K keys, reducing DB writes by 10,000×. The app server then hands out keys from memory with zero database overhead.
3. 301 (Moved Permanently): browser-cached, never contacts server again for that URL. Use for permanent short URLs where analytics tracking is not needed. 302 (Found): not cached, passes through server on every click. Use for custom short URLs, campaign URLs, or any URL requiring per-click analytics. Trade-off: 301 reduces server load by 80%+ but loses analytics granularity.
4. SHA-256 of content produces a 64-character hex digest used as S3 object key. If two users paste identical content with the same visibility (public), the system returns the same URL — free deduplication. If one user sets their paste to private, the hash is salted with user_id: `SHA-256(content + user_id)` → different hash → separate storage. The public paste remains deduplicated; the private paste creates a new entry.
5. Birthday paradox: with truncated MD5 (7 bytes = 56 bits), the probability of a collision reaches 50% at ~2^28 ≈ 268 million keys. For a system with billions of keys, collisions are guaranteed. Alternatives: (a) Base62 from distributed counter — zero collision risk. (b) Full SHA-256 (128 bits vs 56) — collision probability is negligible at trillions of keys. (c) Counter-based encoding (Snowflake-style).
6. Token bucket: allows bursts up to bucket size (tokens accumulate during idle). Best for traffic with natural bursts (API calls from user interactions). Sliding window counter: enforces exact rate over window. Best when the rate limit is strict (SLA enforcement, paid API tiers). Token bucket overshoots after idle periods; sliding window is always accurate.</details>

### Application Problems
<details><summary>Solution</summary>1. **Custom domains**: Each domain gets a key_pool table shard with a prefix (e.g., `acme_keys`). Domain-specific KGS generates keys with a domain prefix: `acme:aB3xK`. Domain-specific Redis cache shard (keyed by domain prefix). Analytics: partition ClickHouse table by domain_id, each domain queries its own partition. SSL: use ACME/LetsEncrypt with automatic certificate provisioning via DNS-01 challenge when domain is registered. DNS: CNAME each custom domain to the shared URL shortener domain (e.g., `go.acme.com CNAME shortener.com`).
2. **Multi-layer rate limiter**: Redis key schema: `rl:{endpoint}:{user}:{ip}:window`. Lua script: check endpoint (10 req/s), then user (100 req/s), then IP (1000 req/s), then global (100000 req/s) — any layer exceeding limit returns 429 with layer identifier. If endpoint layer rate-limits, the request is rejected even if the user and IP layers have capacity — this is correct: the most restrictive limit always applies. Return headers indicate which layer triggered the limit.
3. **Pastebin search**: Elasticsearch cluster with 3 nodes. Index mapping: `{ content: text, title: text, language: keyword, created_at: date, content_hash: keyword }`. Daily index (1M docs/day ≈ 10GB), 30-day retention = 30 indexes. Re-index: when language detection model updates, run a batch job that queries pastes created after the model version date, re-detects language, updates ES documents. Use reindex API with slicing for parallelization. Search latency: <100ms P99 for full-text queries.
4. **Abuse prevention**: Tiers: unauthenticated (10/hr per IP), email-verified (50/hr), pro (500/hr). Content scanning: run ClamAV and regex scanner asynchronously via SQS queue. If scan takes >5 seconds, return the paste immediately and mark as "scanning" — if scan detects abuse, replace with 410 Gone. To scale scanning: lambda workers auto-scale to 1000 concurrent instances. Dedup: check SHA-256 against recent 24-hour window — if same hash appears >100 times in an hour from different IPs, rate-limit further uploads of that content.</details>

### Challenge Problem
<details><summary>Solution</summary>**Distributed Pastebin with Collaborative Editing**: 

Version storage: Use a content-delta chain (edit operations stored as operational transforms) rather than full copies per version. Each version stores: base snapshot (every 100 edits) + forward deltas. This reduces storage from O(N × content_size) to O(N × avg_delta_size). For source code pastebins, deltas average 50 bytes vs 10KB full copies.

OT server: Stateless WebSocket server that receives edit operations from all collaborators, transforms concurrent operations against each other, and broadcasts the transformed result. Use a centralized OT sequencer (Redis Stream) to assign total order to edits. Each edit has: paste_id, user_id, operation (insert/delete with position), client_version, server_version.

Real-time sync: WebSocket connections to the nearest edge PoP. Each PoP has a local Redis pub-sub channel per paste. The OT server subscribes to all active paste channels. When an edit arrives, the server transforms it, appends to the event log, and publishes the transformed operation back to the channel for all clients.

Merge strategy: When two users edit the same document differently, OT ensures both edits are applied in a consistent order. If conflicts are semantically unresolvable (both users edit the same word differently), the server picks the first operation received (by server version) and notifies the second user of the conflict.

Interactions with deduplication: Real-time editing breaks content-addressed deduplication because the SHA-256 hash changes with every edit. Solution: use a "base content hash" for the initial paste (enables dedup for the initial upload), and a separate "live editing session ID" for ongoing edits. When the session ends (all users disconnect), compute the final SHA-256 and store as a new paste version. The original base hash still deduplicates with any identical future uploads.

Two users editing differently: The SHA-256 content address is the final resolved hash after applying all OT-transformed edits in sequence. Each user sees the same final state (OT guarantees convergence), so the SHA-256 is identical after all edits are applied. Intermediate states differ but are not stored as content-addressed objects — they exist only as transient delta streams in the OT server's memory.</details>
