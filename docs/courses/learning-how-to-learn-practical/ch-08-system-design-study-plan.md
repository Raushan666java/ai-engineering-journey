# Chapter 8: System Design Study Plan

## Learning Objectives

After this chapter you will be able to:
- Build a structured learning path from fundamentals to mock interviews in 8 weeks
- Understand and apply core building blocks (consistent hashing, caching, database scaling)
- Study real-world systems through case studies (Uber, YouTube, WhatsApp)
- Conduct time-boxed mock design sessions with structured feedback
- Evaluate your designs against production-grade references

## Theory

### The Learning Graph

System design is not a list of topics to memorize — it's a graph of interconnected concepts. Learn them in dependency order.

```mermaid
flowchart TD
    subgraph Weeks 1-2: Fundamentals
        A[CAP + PACELC] --> B[Consistent Hashing]
        B --> C[Caching Strategies]
        C --> D[Database Scaling]
        D --> E[Message Queues]
    end
    subgraph Weeks 3-4: Building Blocks
        F[Rate Limiter] --> G[ID Generator]
        G --> H[URL Shortener]
        H --> I[Key-Value Store]
    end
    subgraph Weeks 5-6: Case Studies
        J[Design Uber] --> K[Design YouTube]
        K --> L[Design WhatsApp]
        L --> M[Design Twitter]
    end
    subgraph Weeks 7-8: Mock Sessions
        N[Time-Boxed Mocks] --> O[Peer Review]
        O --> P[Compare to Reference]
        P --> N
    end
    E --> F
    I --> J
    M --> N
```

### Core Building Blocks Explained

**Consistent Hashing:**
Distributes keys across servers with minimal rebalancing when servers are added or removed. Each server is mapped to multiple points on a hash ring (virtual nodes). A key is assigned to the nearest server clockwise. When a server goes down, only its keys are redistributed to the next server — not all keys.

**Caching Strategies:**
- Cache-aside: Application checks cache first. On miss, reads from DB and populates cache. Simple but can have stale data
- Read-through: Cache sits between app and DB. Cache handles the lookup. Consistent but more complex
- Write-through: Every write goes to cache first, then DB. Read is always fresh but writes are slower
- Write-back: Write to cache only. DB updated asynchronously. Fast writes but risk of data loss
- Eviction policies: LRU (remove least recently used), LFU (remove least frequently used), TTL (remove after time)

**Database Scaling:**
- Read replicas: Copy data to multiple servers. All writes go to primary, reads go to replicas. Good for read-heavy workloads
- Sharding: Split data across servers by a shard key. User ID, location, or hash of ID. Challenge: choosing the right key and handling rebalancing
- Partitioning: Split a table into smaller pieces. Can be horizontal (by rows) or vertical (by columns)
- Connection pooling: Reuse database connections instead of opening new ones for every request

### Case Study Methodology

To study any real-world system:

1. **Requirements (5 min):** Functional (what does it do?) and non-functional (how many users, latency, availability, durability)
2. **Estimation (5 min):** Back-of-envelope: QPS, storage needed, bandwidth, cache size
3. **Data model + API (5 min):** Core entities, relationships, API endpoints with request/response
4. **High-level design (10 min):** Draw the architecture: clients → load balancer → app servers → database. Add caching, queues, CDN where appropriate
5. **Deep dive (10 min):** Pick 1-2 components and detail them. How does the rate limiter work? How is data sharded?
6. **Tradeoffs (5 min):** What did you optimize for? What did you sacrifice? What would you do differently at 10x scale?

### Mock Design Session Format
### Building Block Reference Sheet

Keep this reference handy during mock sessions:

**Storage:**
- SQL: ACID, joins, structured data. Scale with read replicas + sharding
- NoSQL: flexible schema, horizontal scaling. Types: document (MongoDB), key-value (Redis), wide-column (Cassandra), graph (Neo4j)

**Caching:**
- Cache-aside: app checks cache first. Simple, can be stale
- Read-through: cache layer handles lookups. Consistent
- Write-through: every write goes to cache + DB. Fresh reads, slower writes
- Write-back: writes go to cache first, async to DB. Fast writes, risk of loss
- Eviction: LRU (most common), LFU, TTL-based

**Load balancing:**
- Round-robin: simple, doesn't account for server load
- Least connections: routes to least busy server
- IP hash: consistent routing by client IP
- Layer 4 (transport): faster, less intelligent
- Layer 7 (application): slower, understands HTTP

**Database scaling:**
- Read replicas: async copy for read-heavy workloads
- Sharding: split by key (user ID, location, hash). Rebalancing is hard
- Vertical: bigger machine. Simple, reaches limits
- Horizontal: more machines. Complex, scalable

**Message queues:**
- Kafka: high throughput, persistent, replayable. Good for event streaming
- RabbitMQ: flexible routing, reliable. Good for task queues
- SQS: fully managed AWS. Good for decoupling microservices

### Common System Design Prompt Solutions

**Design URL Shortener:**
- Core: 6-char base62 encoded ID (62^6 = 56B URLs)
- Write path: generate unique ID → store in DB → return short URL
- Read path: look up ID in cache → miss? check DB → redirect 301
- Scale: cache popular URLs, shard by ID prefix

**Design Chat System:**
- 1:1 chat: direct WebSocket connection or message queue
- Group chat: fan-out write (single copy + read indices) or fan-out read (copy to each member)
- Online presence: heartbeat (ping every X seconds) + last seen
- Scale: shard by conversation ID, use Redis for presence

**Design News Feed:**
- Write path: user posts → fan-out to followers' feed queues
- Read path: load feed from pre-computed cache → rank by time/relevance
- Scale: pull model on request (load from followers) or push model on write (pre-compute)
- Hybrid: push for active users, pull for inactive


Follow this structure for every mock session:

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Requirements | 5 min | List of functional + non-functional requirements |
| Estimation | 5 min | QPS, storage, bandwidth calculations |
| Data model + API | 5 min | Entities + endpoints |
| High-level design | 15 min | Architecture diagram |
| Deep dive | 10 min | 1-2 components detailed |
| Tradeoffs | 5 min | What you optimized, what you sacrificed |

After the session, grade yourself:
- Did I clarify requirements before designing? (Yes/No)
- Did I do back-of-envelope calculations? (Yes/No)
- Did I choose the right building blocks? (1-5)
- Did I discuss tradeoffs? (Yes/No)
- Did I handle failure scenarios? (1-5)
- Did I stay within the 45-minute time limit? (Yes/No)

## Examples

### Example 1: Consistent Hash Ring

```typescript
class ConsistentHashRing {
    private ring: Map<number, string> = new Map()  // hash → server
    private sortedKeys: number[] = []
    private readonly virtualNodes: number

    constructor(virtualNodes: number = 100) {
        this.virtualNodes = virtualNodes
    }

    addServer(server: string): void {
        for (let i = 0; i < this.virtualNodes; i++) {
            const hash = this.hash(`${server}:${i}`)
            this.ring.set(hash, server)
            this.sortedKeys.push(hash)
        }
        this.sortedKeys.sort((a, b) => a - b)
    }

    removeServer(server: string): void {
        for (let i = 0; i < this.virtualNodes; i++) {
            const hash = this.hash(`${server}:${i}`)
            this.ring.delete(hash)
        }
        this.sortedKeys = this.sortedKeys.filter(k => this.ring.has(k))
    }

    getServer(key: string): string | null {
        if (this.sortedKeys.length === 0) return null

        const hash = this.hash(key)
        const pos = this.findNearestServer(hash)
        return this.ring.get(this.sortedKeys[pos]) ?? null
    }

    getDistribution(): Map<string, number> {
        const distribution = new Map<string, number>()
        this.ring.forEach(server => {
            distribution.set(server, (distribution.get(server) ?? 0) + 1)
        })
        return distribution
    }

    private findNearestServer(hash: number): number {
        let lo = 0
        let hi = this.sortedKeys.length - 1

        while (lo < hi) {
            const mid = (lo + hi) >> 1
            if (this.sortedKeys[mid] < hash) {
                lo = mid + 1
            } else {
                hi = mid
            }
        }

        return this.sortedKeys[lo] >= hash ? lo : 0
    }

    private hash(key: string): number {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = ((hash << 5) - hash) + key.charCodeAt(i)
            hash = hash & hash  // Convert to 32-bit integer
        }
        return Math.abs(hash)
    }
}
```

### Example 2: Load Balancer Strategies

```typescript
type LBStrategy = 'round-robin' | 'least-connections' | 'ip-hash'

interface ServerInstance {
    id: string
    host: string
    port: number
    connections: number
    healthy: boolean
}

class LoadBalancer {
    private servers: ServerInstance[] = []
    private currentIndex = 0

    addServer(host: string, port: number): void {
        this.servers.push({
            id: `${host}:${port}`,
            host,
            port,
            connections: 0,
            healthy: true
        })
    }

    markUnhealthy(serverId: string): void {
        const server = this.servers.find(s => s.id === serverId)
        if (server) server.healthy = false
    }

    getNextRequest(clientIp: string, strategy: LBStrategy): ServerInstance | null {
        const healthy = this.servers.filter(s => s.healthy)
        if (healthy.length === 0) return null

        switch (strategy) {
            case 'round-robin':
                return this.roundRobin(healthy)
            case 'least-connections':
                return this.leastConnections(healthy)
            case 'ip-hash':
                return this.ipHash(healthy, clientIp)
        }
    }

    private roundRobin(servers: ServerInstance[]): ServerInstance {
        const server = servers[this.currentIndex % servers.length]
        this.currentIndex++
        return server
    }

    private leastConnections(servers: ServerInstance[]): ServerInstance {
        return servers.reduce((min, s) =>
            s.connections < min.connections ? s : min
        )
    }

    private ipHash(servers: ServerInstance[], clientIp: string): ServerInstance {
        const hash = clientIp.split('')
            .reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0)
        return servers[Math.abs(hash) % servers.length]
    }
}
```

### Example 3: Design Evaluator

```typescript
interface DesignScore {
    requirementsClarity: 1 | 2 | 3 | 4 | 5
    estimationAccuracy: 1 | 2 | 3 | 4 | 5
    buildingBlocks: 1 | 2 | 3 | 4 | 5
    tradeoffAnalysis: 1 | 2 | 3 | 4 | 5
    failureHandling: 1 | 2 | 3 | 4 | 5
    timeManagement: boolean
}

interface DesignEvaluation {
    score: DesignScore
    strengths: string[]
    weaknesses: string[]
    recommendedStudy: string[]
    overall: number  // percentage
}

class DesignEvaluator {
    evaluate(design: DesignScore): DesignEvaluation {
        const weaknesses: string[] = []

        if (design.requirementsClarity < 4) {
            weaknesses.push('Clarify functional and non-functional requirements before designing')
        }
        if (design.estimationAccuracy < 3) {
            weaknesses.push('Practice back-of-envelope calculations (QPS, storage, bandwidth)')
        }
        if (design.buildingBlocks < 4) {
            weaknesses.push('Study building blocks: caching strategies, database scaling, message queues')
        }
        if (design.tradeoffAnalysis < 4) {
            weaknesses.push('Always discuss tradeoffs: what did you optimize? what did you sacrifice?')
        }
        if (design.failureHandling < 3) {
            weaknesses.push('Add failure scenarios: what happens when a component goes down?')
        }

        const scoreValues = [
            design.requirementsClarity,
            design.estimationAccuracy,
            design.buildingBlocks,
            design.tradeoffAnalysis,
            design.failureHandling
        ]
        const overall = (scoreValues.reduce((s, v) => s + v, 0) / 25) * 100

        return {
            score: design,
            strengths: scoreValues.filter(v => v >= 4).map(() => 'Good'),
            weaknesses,
            recommendedStudy: weaknesses.map(w => {
                if (w.includes('building blocks')) return 'Study: Consistent Hashing, Caching, DB Scaling'
                if (w.includes('tradeoffs')) return 'Study: CAP theorem, PACELC, design tradeoff patterns'
                if (w.includes('failure')) return 'Study: fault tolerance, replication, failover strategies'
                if (w.includes('estimation')) return 'Practice: back-of-envelope calculations'
                return 'Review fundamentals'
            }),
            overall: Math.round(overall)
        }
    }

    getImprovementPath(evaluations: DesignEvaluation[]): string[] {
        const allWeaknesses = evaluations.flatMap(e => e.weaknesses)
        const frequency = new Map<string, number>()
        allWeaknesses.forEach(w => frequency.set(w, (frequency.get(w) ?? 0) + 1))

        return [...frequency.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([weakness]) => weakness)
    }
}
```

## Summary

- System design is a graph of interconnected concepts. Learn fundamentals before building blocks, building blocks before case studies
- Master the core building blocks first: consistent hashing, caching strategies, database scaling, message queues
- Study case studies systematically: requirements → estimation → data model → high-level design → deep dive → tradeoffs
- Mock design sessions should follow a strict 45-minute format. Grade yourself after every session
- The fastest way to improve is to compare your design to a reference architecture

## Practical Takeaways

1. Learn one fundamental per day for the first 2 weeks (CAP, consistent hashing, caching, DB scaling, queues)
2. For every case study, design the system yourself before looking at the reference architecture
3. Use consistent hashing as your go-to distribution strategy — it's the most FAANG-interviewed building block
4. Always spend 5 minutes clarifying requirements before drawing anything
5. Every design session must end with tradeoff analysis — "I optimized for X at the cost of Y"

## Chapter Quiz

<details>
<summary>1. What are the 4 core building blocks to learn first?</summary>
<p>Consistent hashing (key distribution), caching strategies (cache-aside, read-through, write-through, write-back), database scaling (read replicas, sharding, partitioning), and message queues (Kafka topics, RabbitMQ exchanges).</p>
</details>

<details>
<summary>2. How many weeks should you spend on fundamentals before case studies?</summary>
<p>2 weeks on fundamentals (CAP, hashing, caching, DB scaling, queues). Then 2 weeks on building blocks (rate limiter, ID generator, URL shortener, key-value store). Then 2 weeks on case studies.</p>
</details>

<details>
<summary>3. What's the first step in any mock design session?</summary>
<p>Clarify requirements (5 minutes). List functional requirements (what the system does) and non-functional requirements (latency, availability, durability, scale). Do not draw anything until requirements are clear.</p>
</details>

<details>
<summary>4. What's the purpose of virtual nodes in consistent hashing?</summary>
<p>Virtual nodes ensure even distribution of keys across servers. Without virtual nodes, if servers have different capacities or a server is added/removed, the distribution can become skewed. Virtual nodes spread each server across multiple points on the hash ring.</p>
</details>

<details>
<summary>5. What should you evaluate first when reviewing your own design?</summary>
<p>Did I clarify requirements before designing? This is the most common failure point. If you didn't spend 5 minutes on requirements, the rest of the design may be solving the wrong problem. Check this before evaluating technical choices.</p>
</details>

## Exercises

1. **Implement consistent hashing:** Use the ConsistentHashRing class. Add 3 servers, distribute 1000 keys, check the distribution. Remove one server and see how many keys move
2. **Study a case study:** Watch a system design interview video for Uber or YouTube. While watching, use the case study methodology (requirements → estimation → data model → architecture). Pause before the solution and design it yourself first
3. **Mock session:** Do a 45-minute mock design session for URL Shortener. Use the DesignEvaluator to score yourself. Identify 2 areas to improve
4. **Building block implementation:** Implement a simple rate limiter (token bucket or sliding window) in TypeScript
5. **Repeat and compare:** Repeat the same mock prompt (URL Shortener) after 1 week without reviewing your previous design. Compare both versions. Which is better? What improved?
