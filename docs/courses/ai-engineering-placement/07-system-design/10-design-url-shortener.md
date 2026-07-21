<!-- Clear Language: Keep sentences under 50 words -->
# Design URL Shortener — Hashing, Redirects, Analytics

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand URL shortener requirements and system constraints |
| LO2 | Design a key generation system with collision handling |
| LO3 | Implement redirection logic with 301 vs 302 trade-offs |
| LO4 | Build click analytics tracking with real-time aggregation |
| LO5 | Scale the system to handle billions of URLs and redirects |
| LO6 | Address security concerns: spam, phishing, rate limiting |

## Introduction

Understanding design url shortener is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering design url shortener.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding design url shortener is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how design url shortener works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind design url shortener
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | Requirements & Constraints | Read/write ratio, length limits, scale targets |
| 10.2 | Key Generation | Base62 encoding, hash-based, counter-based |
| 10.3 | Storage Schema | Relational vs NoSQL, sharding strategy |
| 10.4 | Redirection Logic | 301 permanent vs 302 temporary, caching |
| 10.5 | Analytics Pipeline | Click tracking, aggregation, real-time dashboards |
| 10.6 | Security & Abuse Prevention | Rate limiting, URL validation, spam detection |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Client] --> B{Generate Short URL}
    B --> C[Validate Long URL]
    C --> D[Generate Unique Key]
    D --> E[Store in Database]
    E --> F[Return Short URL]
    F --> G[Client Stores Short URL]
    G --> H{Access Short URL}
    H --> I[Lookup Key in Cache]
    I --> J{Cache Hit?}
    J -->|Yes| K[Redirect to Long URL]
    J -->|No| L[Lookup in DB]
    L --> M[Update Cache]
    M --> K
    K --> N[Record Analytics Event]

## 10.1 Requirements & Constraints

**Functional requirements**: Generate a short URL for any long URL, redirect short URL to original URL, track click analytics, handle billions of URLs.

**Non-functional requirements**: Low latency redirects (<10ms), high availability (99.99%), scalability (100M+ URLs/month), durability.

```typescript
interface URLShortenerConfig {
  maxKeyLength: number;
  encodingBase: number;
  allowedChars: string;
  cacheTTL: number;
  rateLimitPerIP: number;
}

const DEFAULT_CONFIG: URLShortenerConfig = {
  maxKeyLength: 7,
  encodingBase: 62,
  allowedChars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  cacheTTL: 3600,
  rateLimitPerIP: 100,
};
```text

**Scale estimation**: 100M URLs/month = ~3.3M/day = ~38/sec writes. 1B redirects/month = ~33M/day = ~380/sec reads. Read to write ratio is about 10:1.

**Length trade-offs**: 7 chars in base62 = 62^7 = ~3.5 trillion unique keys. 6 chars = ~56 billion. For most systems, 7 characters provides sufficient capacity with room for growth.

---

## 10.2 Key Generation

Three primary approaches for generating short URL keys:

**Base62 encoding**: Convert an integer ID to base62 using alphanumeric characters.

```typescript
class Base62Encoder {
  private chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  encode(id: number): string {
    if (id === 0) return this.chars[0];
    let result = "";
    while (id > 0) {
      result = this.chars[id % 62] + result;
      id = Math.floor(id / 62);
    }
    return result;
  }

  decode(short: string): number {
    let id = 0;
    for (const char of short) {
      id = id * 62 + this.chars.indexOf(char);
    }
    return id;
  }
}
```text

**Hash-based**: Hash the long URL using MD5 or SHA-256, take first 7 bytes, encode to base62. Collision risk requires resolution (append counter, retry with salt).

**Counter-based**: Use a distributed counter (Redis INCR, Snowflake ID, database sequence) and encode the counter value. Simple, no collisions, but requires a reliable counter service.

```typescript
class KeyGenerator {
  private encoder = new Base62Encoder();

  async generate(longUrl: string, userId?: string): Promise<string> {
    const id = await this.getNextId();
    return this.encoder.encode(id);
  }

  private async getNextId(): Promise<number> {
    // Using Redis INCR for simplicity
    return this.redis.incr("url:counter");
  }
}
```text

**Recommended approach**: Counter-based with Redis INCR (or Snowflake for distributed setup). Pre-generate batches of IDs for lower latency.

---

## 10.3 Storage Schema

**Relational (PostgreSQL)**:

```sql
CREATE TABLE urls (
    id BIGSERIAL PRIMARY KEY,
    short_key VARCHAR(10) UNIQUE NOT NULL,
    long_url TEXT NOT NULL,
    user_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_short_key ON urls(short_key);

CREATE TABLE click_events (
    id BIGSERIAL,
    url_id BIGINT REFERENCES urls(id),
    clicked_at TIMESTAMP DEFAULT NOW(),
    ip_address VARCHAR(45),
    user_agent TEXT,
    referer TEXT,
    country VARCHAR(2),
    device_type VARCHAR(20)
);
```text

**NoSQL (DynamoDB/Cassandra)**: Partition key = short_key, with long_url as sort key or attribute. Click events stored in separate time-series table.

```typescript
interface URLRecord {
  shortKey: string;
  longUrl: string;
  userId?: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  clickCount: number;
}

class URLRepository {
  async save(record: URLRecord): Promise<void> {
    await db.urls.insertOne(record);
  }

  async findByShortKey(key: string): Promise<URLRecord | null> {
    const cached = await cache.get(`url:${key}`);
    if (cached) return JSON.parse(cached);
    const record = await db.urls.findOne({ shortKey: key });
    if (record) {
      await cache.set(`url:${key}`, JSON.stringify(record), "EX", 3600);
    }
    return record;
  }
}
```text

**Sharding strategy**: Shard by short_key using consistent hashing. Co-locate URL record and its click events on the same shard.

---

## 10.4 Redirection Logic

**301 Moved Permanently vs 302 Found**:
- **301**: Browser caches the redirect permanently. Good for SEO — search engines update their indexes. Bad for analytics — browser skips your server on subsequent visits.
- **302**: Temporary redirect. Browser always checks with your server. Good for analytics. Bad for SEO.

```typescript
class RedirectHandler {
  private repository: URLRepository;

  async handleRedirect(req: any, res: any): Promise<void> {
    const shortKey = req.params.key;

    // Validate key format
    if (!/^[0-9a-zA-Z]{6,10}$/.test(shortKey)) {
      return res.status(404).send("Invalid short URL");
    }

    const record = await this.repository.findByShortKey(shortKey);
    if (!record || !record.isActive) {
      return res.status(404).send("URL not found");
    }

    if (record.expiresAt && record.expiresAt < new Date()) {
      return res.status(410).send("URL has expired");
    }

    // Async analytics (don't block redirect)
    this.recordClick(shortKey, req).catch((err) =>
      console.error("Analytics error:", err)
    );

    // Use 302 for analytics tracking, 301 for permanent URLs
    const use301 = record.clickCount > 1000;
    res.status(use301 ? 301 : 302);
    res.setHeader("Location", record.longUrl);
    res.setHeader("Cache-Control", use301 ? "public, max-age=86400" : "no-cache");
    res.end();
  }

  private async recordClick(shortKey: string, req: any): Promise<void> {
    await db.clickEvents.insertOne({
      shortKey,
      timestamp: new Date(),
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      referer: req.headers["referer"],
    });
  }
}
```text

**Caching strategy**: Cache URL mappings in Redis with TTL (1 hour). Use CDN (CloudFront, Cloudflare) for frequently accessed URLs. Consider stale-while-revalidate for cache hits.

---

## 10.5 Analytics Pipeline

Analytics data flows from redirect servers through a pipeline to provide real-time and historical insights.

```typescript
interface ClickAnalytics {
  totalClicks: number;
  uniqueVisitors: number;
  clicksByCountry: Map<string, number>;
  clicksByDevice: Map<string, number>;
  clicksByHour: Map<string, number>;
  topReferrers: Array<{ source: string; count: number }>;
}

class AnalyticsAggregator {
  private counter: Map<string, number> = new Map();

  async recordEvent(shortKey: string, event: any): Promise<void> {
    // Push to message queue for async processing
    await queue.publish("click-events", { shortKey, ...event });
  }

  async getAnalytics(shortKey: string): Promise<ClickAnalytics> {
    const pipeline = [
      { $match: { shortKey } },
      {
        $group: {
          _id: null,
          totalClicks: { $sum: 1 },
          uniqueVisitors: { $addToSet: "$ip" },
        },
      },
    ];
    const result = await db.clickEvents.aggregate(pipeline).toArray();
    return {
      totalClicks: result[0]?.totalClicks ?? 0,
      uniqueVisitors: result[0]?.uniqueVisitors?.length ?? 0,
      clicksByCountry: await this.countBy(shortKey, "country"),
      clicksByDevice: await this.countBy(shortKey, "deviceType"),
      clicksByHour: await this.countByHour(shortKey),
      topReferrers: await this.getTopReferrers(shortKey),
    };
  }

  private async countBy(shortKey: string, field: string): Promise<Map<string, number>> {
    const results = await db.clickEvents
      .aggregate([
        { $match: { shortKey } },
        { $group: { _id: `$${field}`, count: { $sum: 1 } } },
      ])
      .toArray();
    return new Map(results.map((r: any) => [r._id, r.count]));
  }

  private async countByHour(shortKey: string): Promise<Map<string, number>> {
    const results = await db.clickEvents
      .aggregate([
        { $match: { shortKey } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%dT%H:00:00Z", date: "$timestamp" } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ])
      .toArray();
    return new Map(results.map((r: any) => [r._id, r.count]));
  }

  private async getTopReferrers(
    shortKey: string,
    limit = 10
  ): Promise<Array<{ source: string; count: number }>> {
    return db.clickEvents
      .aggregate([
        { $match: { shortKey } },
        { $group: { _id: "$referer", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: limit },
      ])
      .toArray();
  }
}
```text

**Architecture**: Redirect servers emit click events to Kafka/Kinesis. Stream processor aggregates data into time-series database (ClickHouse, InfluxDB). API server queries aggregated data for analytics dashboards.

---

## 10.6 Security & Abuse Prevention

URL shorteners are commonly abused for phishing, spam, and malware distribution.

```typescript
class URLValidator {
  private blockedDomains = [
    "malware.example.com",
    "phishing.example.com",
  ];
  private blockedPatterns = [
    /bit\.ly\/.*/i,
    /tinyurl\.com\/.*/i,
    /login\./i,
  ];

  async validate(longUrl: string): Promise<ValidationResult> {
    try {
      const parsed = new URL(longUrl);

      // Block known malicious domains
      if (this.blockedDomains.includes(parsed.hostname)) {
        return { valid: false, reason: "Domain is blocked" };
      }

      // Block recursive shortening
      for (const pattern of this.blockedPatterns) {
        if (pattern.test(longUrl)) {
          return { valid: false, reason: "Recursive URL shortening detected" };
        }
      }

      // Reject non-HTTP(S) protocols
      if (!["http:", "https:"].includes(parsed.protocol)) {
        return { valid: false, reason: "Only HTTP/HTTPS URLs allowed" };
      }

      // Check URL reachability (optional)
      const reachable = await this.checkReachability(longUrl);
      if (!reachable) {
        return { valid: false, reason: "URL is not reachable" };
      }

      return { valid: true };
    } catch {
      return { valid: false, reason: "Invalid URL format" };
    }
  }

  private async checkReachability(url: string): Promise<boolean> {
    try {
      const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(5000) });
      return res.ok;
    } catch {
      return false;
    }
  }
}

interface ValidationResult {
  valid: boolean;
  reason?: string;
}
```text

**Additional security measures**: Rate limiting per IP (100 URLs/hour), user authentication for URL creation, click-through warnings for suspicious URLs, URL expiration policies, real-time scanning against threat intelligence feeds.

---

## TypeScript Parallel

```typescript
class URLShortenerService {
  private encoder = new Base62Encoder();
  private repository: URLRepository;
  private validator: URLValidator;
  private cache: Map<string, string> = new Map();

  async createShortUrl(longUrl: string, userId?: string): Promise<string> {
    const validation = await this.validator.validate(longUrl);
    if (!validation.valid) throw new Error(validation.reason);

    const id = await this.getNextId();
    const shortKey = this.encoder.encode(id);

    await this.repository.save({
      shortKey,
      longUrl,
      userId,
      createdAt: new Date(),
      isActive: true,
      clickCount: 0,
    });

    this.cache.set(shortKey, longUrl);
    return `https://short.url/${shortKey}`;
  }

  async resolveShortUrl(shortKey: string): Promise<string | null> {
    const cached = this.cache.get(shortKey);
    if (cached) return cached;

    const record = await this.repository.findByShortKey(shortKey);
    if (!record || !record.isActive) return null;

    this.cache.set(shortKey, record.longUrl);
    return record.longUrl;
  }

  private async getNextId(): Promise<number> {
    // In production, use Redis INCR or Snowflake
    return Date.now();
  }
}
```text

---

## Summary

- URL shortener requires ~10:1 read/write ratio with sub-10ms redirect latency
- Key generation options: Base62 encoding of counter IDs, hash-based with collision handling, or pre-generated key batches
- 7 characters in base62 provides ~3.5 trillion unique keys
- Use 302 redirect for trackable links (analytics), 301 for permanent well-known links
- Cache URL mappings in Redis with CDN for high-traffic URLs
- Click analytics pipeline uses message queue + stream processor + time-series DB
- Security measures: URL validation, rate limiting, phishing detection, URL expiration
- Shard by short_key using consistent hashing for horizontal scaling
- Pre-generate key batches and warm cache for popular URLs
- Monitor redirect latency and analytics pipeline health as key SLIs

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Key generation | Counter-based with Base62 encoding | MD5 hash (collision risk) |
| Redirect type | 302 for analytics, 301 for permanent | Always 301 (lose analytics) |
| Caching | Redis + CDN with 1-hour TTL | No caching (DB overload) |
| Analytics pipeline | Async message queue + stream processor | Synchronous analytics (blocks redirect) |
| Security | URL validation + rate limiting + threat scanning | No validation (phishing risk) |
| Scale | Consistent hashing + pre-generated keys | Single DB for all URLs |

## Interview Q&A

<details class="tp-qa-card" data-qid="sd07-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How would you design a URL shortener for 100M URLs and 1B redirects per month?
  </summary>
  <div class="tp-qa-answer">
    <p>Key components: <strong>1) Key generation service</strong> using distributed counter (Redis INCR or Snowflake) with Base62 encoding. <strong>2) Storage</strong>: DynamoDB or Cassandra sharded by short_key. PostgreSQL with Citus for relational needs. <strong>3) Cache</strong>: Redis cluster for hot URLs, CDN for popular redirects. <strong>4) Redirect service</strong>: Stateless, horizontally scalable, returns 301/302 with Location header. <strong>5) Analytics</strong>: Click events to Kafka, processed by Spark/Flink, stored in ClickHouse. Scale to 380 reads/sec is moderate; the main challenge is the analytics pipeline at 1B events/month.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Compare 301 vs 302 redirect. When would you use each?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>301 (Moved Permanently)</strong>: Browser caches the redirect. Subsequent requests go directly to the target URL without hitting the shortener. Good for SEO (search engines update index) and reduces server load. Bad for analytics — you lose click tracking after the first request. <strong>302 (Found)</strong>: Browser always requests the short URL, gets redirected each time. Better for analytics but adds latency and server load. Use 302 for most cases (analytics matter). Switch to 301 for URLs with >1000 clicks (SEO benefit outweighs analytics loss).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you generate unique short URL keys at scale?
  </summary>
  <div class="tp-qa-answer">
    <p>Three approaches: <strong>1) Counter-based</strong>: Use a distributed unique ID generator (Redis INCR, Snowflake, database sequence) and encode the ID to Base62. No collisions. Requires a highly-available ID service. <strong>2) Hash-based</strong>: Hash the long URL (MD5/SHA-256), take 7-8 bytes, encode to Base62. Collisions possible but rare. Handle by appending a counter to the input. <strong>3) Pre-generated keys</strong>: Batch-generate keys offline, mark them available. On creation, assign the next available key. Fast creation time at the cost of batching logic. I recommend counter-based for simplicity and deterministic behavior.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you handle URL spam and abuse?
  </summary>
  <div class="tp-qa-answer">
    <p>Multi-layered approach: <strong>1) Creation time</strong>: Validate URL format, check against blocklists, verify domain resolves, rate limit per IP/user (100 URLs/hour). <strong>2) Storage time</strong>: Scan URLs against threat intelligence feeds (Google Safe Browsing, PhishTank). <strong>3) Redirect time</strong>: Show interstitial warning for flagged URLs. <strong>4) Analytics</strong>: Monitor for suspicious patterns — high click-through from unknown referrers, geographically distributed clicks in short time. <strong>5) Reporting</strong>: Allow users to report abusive URLs. Automated take-down when confirmed. <strong>6) Expiration</strong>: Automatically expire URLs after 30 days of inactivity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you design the analytics system for a URL shortener?
  </summary>
  <div class="tp-qa-answer">
    <p>Decoupled architecture: <strong>1) Event production</strong>: Redirect servers emit click events (timestamp, IP, user agent, referer) to a message queue (Kafka/Kinesis). Non-blocking — redirect is served in <5ms, analytics is async. <strong>2) Stream processing</strong>: Apache Flink or Spark Streaming aggregates events in micro-batches. Pre-computes counts by URL, country, device, hour. <strong>3) Storage</strong>: Write-optimized time-series DB (ClickHouse, InfluxDB) for click events. Aggregated data in PostgreSQL or Elasticsearch. <strong>4) Serving</strong>: REST API queries aggregated data. Cache popular analytics results. <strong>5) Real-time</strong>: Use Redis sorted sets for real-time click counters with leaderboard-style querying.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is the optimal key length for a URL shortener?
  </summary>
  <div class="tp-qa-answer">
    <p>Base62 with 7 characters gives 62^7 = ~3.5 trillion combinations. 6 chars = ~56 billion. 8 chars = ~218 trillion. For most systems, 7 characters is optimal: <strong>Too short (4-5 chars)</strong>: 62^4 = 15M, too few; 62^5 = 916M, likely insufficient. <strong>Too long (8-10)</strong>: Unnecessary length with diminishing capacity returns. <strong>7 chars</strong>: Good balance of sufficient capacity (3.5T) and short length. At 100M URLs/year, 7 chars supports 35,000 years. You can also make keys variable length for a more polished UX: start with 5 chars and extend when needed.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you shard the URL database for a URL shortener?
  </summary>
  <div class="tp-qa-answer">
    <p>Shard by short_key using consistent hashing. Benefits: even distribution across shards, minimal data movement during resharding, fast lookup (direct shard routing). Alternative: directory-based sharding with a lookup table mapping key ranges to shards. For click analytics data, shard by short_key AND time range (year-month) to keep recent data hot and enable efficient time-range queries. Use co-location: URL metadata and its click events on the same shard. For read-heavy workloads, add read replicas per shard.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle custom short URLs (vanity URLs)?
  </summary>
  <div class="tp-qa-answer">
    <p>Custom URLs (e.g., short.url/black-friday-sale) have different requirements: <strong>1) Key generation</strong>: User provides the key instead of auto-generating. Need to check uniqueness across all keys. <strong>2) Validation</strong>: Restrict to alphanumeric + hyphens, length 5-20 chars. <strong>3) Rate limiting</strong>: Stricter limits on custom URLs to prevent squatting. <strong>4) Reservation</strong>: Reserved keywords (api, admin, help) should be blocked. <strong>5) Expiration</strong>: Custom URLs typically have annual renewal. <strong>6) Storage</strong>: Same table with a flag or separate table. Use unique index on short_key regardless.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you make the URL shortener highly available?
  </summary>
  <div class="tp-qa-answer">
    <p>Seven 9s (99.99999%) availability requires: <strong>1) Stateless redirect servers</strong> behind load balancer, auto-scaling group. <strong>2) Database multi-region replication</strong>: Primary in one region, read replicas in other regions. <strong>3) Cache redundancy</strong>: Redis Cluster with replica shards. <strong>4) CDN</strong>: Serve popular redirects from edge. <strong>5) Graceful degradation</strong>: Cache URL mappings aggressively. If DB is down, serve from cache (possibly stale). <strong>6) Key generation HA</strong>: Multiple ID generation services with conflict detection. <strong>7) Analytics decoupling</strong>: Queue-based analytics so redirect is never blocked by analytics pipeline.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sd07-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you design the database schema for a URL shortener?
  </summary>
  <div class="tp-qa-answer">
    <p>Two main tables: <strong>URLs table</strong>: short_key (PK, VARCHAR(10)), long_url (TEXT), user_id (VARCHAR(50), indexed), created_at, expires_at, is_active, click_count (denormalized counter). Index: short_key unique index. <strong>Click events table</strong>: id (BIGSERIAL), short_key (FK, VARCHAR(10)), clicked_at, ip_address, user_agent, referer, country, device_type. Partition click_events by month for performance. For NoSQL (DynamoDB): URLs table with short_key as partition key, long_url as attribute. Click events as a separate table with short_key as PK and clicked_at as sort key for time-range queries.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the read-to-write ratio typically expected for a URL shortener?

a) 1:1
b) 10:1
c) 100:1
d) 1:10

<details class="tp-qa-card" data-qid="sd07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 10:1</strong></p><p>URL shorteners typically have far more reads (redirects) than writes (creation). A 10:1 ratio is common.</p></div></details>

**Q2**: How many unique keys can 7 characters of Base62 represent?

a) 62 million
b) 3.5 trillion
c) 56 billion
d) 1 billion

<details class="tp-qa-card" data-qid="sd07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 3.5 trillion</strong></p><p>62^7 = approximately 3.5 trillion unique combinations.</p></div></details>

**Q3**: Which HTTP redirect status code is best for analytics tracking?

a) 301
b) 302
c) 307
d) 308

<details class="tp-qa-card" data-qid="sd07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 302</strong></p><p>302 redirect always goes through the server, enabling click tracking on every request.</p></div></details>

**Q4**: What is the main advantage of counter-based key generation?

a) URL-dependent keys
b) No collisions
c) Faster encoding
d) Shorter keys

<details class="tp-qa-card" data-qid="sd07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) No collisions</strong></p><p>Counter-based generation guarantees unique keys without collision checking.</p></div></details>

**Q5**: Which approach is recommended for scaling click analytics?

a) Synchronous database writes
b) Async message queue + stream processor
c) In-memory counters only
d) Write to log files and batch process weekly

<details class="tp-qa-card" data-qid="sd07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Async message queue + stream processor</strong></p><p>Async processing ensures redirects are fast and analytics pipeline is decoupled from the critical path.</p></div></details>

## Exercises

**Easy** — Implement a Base62 encoder/decoder in TypeScript that converts integers to alphanumeric strings and back.

**Easy** — Write a URL validator that checks for valid format, HTTP/HTTPS protocol, and blocks known malicious domains.

**Medium** — Implement a URL shortener service with Redis-backed counter for key generation and Redis caching for URL lookups. Include 302 redirect logic.

**Medium** — Build a click analytics tracker that records events to a queue and aggregates clicks by URL, country, and device type.

**Hard** — Design and implement a distributed key generation service that pre-generates batches of unique IDs and hands them out atomically to multiple application instances.

**Hard** — Implement a complete URL shortener with all components: key generation, storage (SQLite), caching (in-memory LRU), 301/302 redirect logic, rate limiting per IP, and basic click analytics.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

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
- [ ] Have questions ready about how the company uses 07-system-design> **Next**: [Design ChatGPT](11-design-chatgpt.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to System Design fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master design url shortener?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of design url shortener helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding design url shortener at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of design url shortener like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply design url shortener concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of design url shortener?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply design url shortener in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying design url shortener to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production