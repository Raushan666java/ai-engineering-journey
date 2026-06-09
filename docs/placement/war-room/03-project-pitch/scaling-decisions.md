---
title: Scaling Decisions — How Would This Handle 10x?
---

# Scaling Decisions

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

*"How would your project scale to 10× users?"* is a senior-interviewer favourite. It tests whether you understand what your code actually does under load, or whether you just made the happy path work.

The wrong answer is *"I'd add more servers"*. The right answer is **bottleneck → intervention → metric**.

---

## Inhale.

For your lead project right now, finish this sentence:

> *"At 10× current load, the first thing to break would be…"*

If you don't have an answer, this drill builds it.

---

## The Script — 90 seconds, 4 beats

> **Beat 1 — Current load (15s)** — *"Today the system handles about 100 registrations per hour at peak, with bursts of 500 in the first 10 minutes of registration opening. Average response time is 180ms, database CPU peaks at 40%, memory is steady at 1.2 GB."*
>
> **Beat 2 — The first bottleneck at 10× (20s)** — *"At 10× — so 5,000 concurrent registrations in 10 minutes — the first thing to break is the seat-allocation row lock. Even with sub-second transactions, 5,000 requests serializing on one row would queue and time out around request 200. That's where the system falls over first."*
>
> **Beat 3 — Two interventions (35s)** — *"Two interventions, in order. One: shard the seat counter by hash bucket — 16 buckets per event, each request locks one bucket. That gives 16× the lock throughput with the same correctness guarantee. Two: move the registration flow behind a queue — accept the request immediately, return a 'processing' page, and process allocations from a Redis queue with N workers. The queue acts as a buffer for the burst."*
>
> **Beat 4 — Metrics + monitoring (20s)** — *"I'd watch three metrics during the load: lock wait time on the seat counter, queue depth, and end-to-end registration latency p95. If lock wait crosses 100ms or queue depth crosses 500, alert and add worker capacity. Without those metrics, scaling is just guessing — I want to see the number move."*

Four beats. **Specific bottleneck, specific fixes, specific metrics.** No buzzwords, no *"just add more servers"*.

---

## The Anatomy — why this wins

Beat 1 — **current numbers**. You can't claim to know how something will scale if you don't know how it performs *now*. *"180ms, 40% DB CPU, 1.2 GB"* tells the interviewer you measured. Most students can't quote a single number about their own project.

Beat 2 — **identify the FIRST thing to break, not all the things**. *"First thing"* is the senior framing — scaling is sequential, not simultaneous. Junior answers list everything ("DB, cache, network, frontend"). Senior answers name *one* and explain why.

Beat 3 — **two interventions, ranked, with mechanics**. Sharding the counter + queue-fronting are real engineering moves. You named the mechanism, not just the buzzword. *"Redis queue with N workers, queue acts as a buffer"* is concrete enough that the interviewer can argue with it — which is what you want.

Beat 4 — **metrics to verify**. This is the killer beat. *"Lock wait time, queue depth, p95 latency"* shows you'd actually watch the change, not assume it worked. Add SLO thresholds (*"alert if X > Y"*) and you sound like someone who's run a production system.

---

## The bottleneck taxonomy

Every web app has the same scaling stack. Memorize the order things break.

### 1. Single-process bottlenecks (first to break)

- **CPU on app server** — synchronous work blocking the request thread (heavy compute, large JSON parsing, regex-heavy validation).
- **Memory on app server** — unbounded caches, large collection loads, leaked closures.
- **File descriptors / connection limits** — too many open DB connections, too many open HTTP clients.

**Interventions**: profile the hot path, move work to queues, bound caches, connection pooling.

### 2. Database bottlenecks (usually second)

- **Lock contention** — row locks, table locks, hot-row updates (counters, leaderboards).
- **Slow queries** — N+1, missing indexes, full table scans.
- **Connection pool exhaustion** — more concurrent requests than DB max_connections.
- **Write throughput** — single writer cannot ingest at the rate of incoming writes.

**Interventions**: read replicas, sharding (by tenant / hash / range), connection pooling (PgBouncer), denormalization, caching at the app layer.

### 3. External service bottlenecks (third)

- **Third-party API rate limits** — OpenAI, Razorpay, Twilio, SMS providers.
- **Webhook ingestion** — incoming webhooks faster than handlers process.
- **CDN miss rates** — origin overloaded when cache is cold.

**Interventions**: retry-with-backoff, queue inbound webhooks, pre-warm caches, request batching to the third party.

### 4. Frontend bottlenecks (often forgotten)

- **JS bundle size** — slow load on mobile, especially in tier-2 cities on 3G.
- **Re-renders under data growth** — list of 10k items grinds React to a halt.
- **API request fan-out** — page loads making 30 API calls in parallel.

**Interventions**: code splitting, virtualization (`react-window`), API aggregation (BFF pattern), pagination.

### 5. Network / infra (last to break, hardest to fix)

- **Bandwidth saturation** at the edge.
- **Cross-region latency** if you serve global users from one region.
- **DNS / load balancer** failures.

**Interventions**: CDN (Cloudflare, CloudFront), multi-region replicas, anycast DNS, autoscaling groups.

---

## The intervention menu

When you propose an intervention, name the mechanism, not just the category.

| Intervention | Mechanism | When to use |
|---|---|---|
| **Caching layer** | Redis with TTL, cache key = request signature | Repeated reads of slowly-changing data |
| **Read replica** | Async replication, route SELECTs to replica | Read-heavy workload, can tolerate seconds of staleness |
| **Queue** | Redis / SQS / RabbitMQ + worker pool | Burst absorption, async work, third-party calls |
| **CDN** | Cloudflare / CloudFront in front of static assets | Globally-distributed users, static or cacheable responses |
| **Database sharding** | Hash-based or range-based partitioning | Single DB cannot handle write throughput |
| **Connection pooling** | PgBouncer (Postgres), ProxySQL (MySQL) | App processes > DB max_connections |
| **Horizontal app scaling** | Multiple app instances behind a load balancer | App CPU is the bottleneck and work is stateless |
| **Background workers** | Move sync work into queued jobs | Request was blocked waiting for slow work |
| **Index optimization** | EXPLAIN → add covering index | Slow queries on a single table |
| **Materialized view** | Pre-computed aggregate refreshed periodically | Dashboard / analytics query that's expensive every time |

For each intervention you propose, you should know:

- **What it costs** (money, complexity, operational burden)
- **What it doesn't fix** (caching doesn't fix writes, queues don't fix the total work)
- **How you'd measure if it worked** (the metric to watch)

---

## Fill in your blanks

For your lead project, write out:

```text
Current load:
  Requests per second / hour at peak:
  Average response time:
  p95 response time:
  DB CPU at peak:
  App memory at peak:

10x bottleneck — what breaks first:
  Component:
  Why it breaks:
  At what load specifically (req/s, queue depth, etc):

Intervention 1:
  Mechanism:
  Expected impact:
  Cost / complexity:
  Metric to watch:

Intervention 2:
  Mechanism:
  Expected impact:
  Cost / complexity:
  Metric to watch:

Monitoring:
  Three metrics to watch during the scale-up:
  Alert thresholds:
```

---

## The 5-day practice drill

- [ ] **Day 1 — Measure current load.** Run `wrk` or `k6` against your local instance. Note response time, error rate, what saturates. If you can't measure, instrument with Laravel Telescope or simple `microtime` logging.
- [ ] **Day 2 — Identify the bottleneck.** Push the load test until something breaks. CPU? DB? Memory? Write it down with the exact failure mode.
- [ ] **Day 3 — Design two interventions.** Use the table above. Name the mechanism, not the buzzword. Justify the order (do the cheapest impactful one first).
- [ ] **Day 4 — Recite the 90-second script.** Time it. Mark beats where you fall back to *"add more servers"* and rewrite.
- [ ] **Day 5 — Mock with friend.** They ask *"how would this scale to 10×?"*. You deliver. They push back: *"why not just add servers?"*. You explain why horizontal scaling doesn't fix DB lock contention.

---

## Recovery — when you blank

If you blank on the current numbers, **honesty wins**:

> *"I don't have a current load benchmark — the project handles real traffic of about [round number] but I haven't load-tested it. Let me reason about it from the architecture: the bottleneck I'd expect first is…"*

Owning the gap is better than fabricating a number.

If you blank on the intervention, **default to the queue-and-cache pair**:

> *"For most apps the first two scaling moves are: introduce a Redis cache in front of the most-read data, and move synchronous third-party calls behind a queue. Both are cheap and both unblock the request thread."*

This pair is correct for ~70% of CRUD apps and gives you something to say.

---

## Variants

=== "60s — Compressed"

    Cut Beat 1 (current load) — just say *"today it handles low hundreds per minute"*. Use when: time-pressed, or this is a follow-up after the project pitch.

=== "90s — Default"

    See main script above.

=== "5min — System design adjacent"

    Walk through the bottleneck taxonomy applied to your project — what breaks first, second, third. Sketch each intervention. Use when: senior engineer pivots from project to system design.

=== "10x to 100x version"

    > *"At 10× I'd do [interventions above]. At 100× the architecture has to change — single-DB writes don't work, the seat-allocation logic moves to a distributed counter (Redis incr or DynamoDB conditional update), and the registration flow becomes event-sourced."*

    Use when: interviewer pushes harder. The 100× answer is *"the architecture changes"*, not *"more of the same"*.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| *"I'd add more servers"* | Tells them you don't know what scales horizontally vs not | Identify the bottleneck FIRST, then choose intervention |
| Lists every possible scaling tool | Sounds like a checklist, no prioritization | Name the FIRST bottleneck and the FIRST two interventions |
| No metrics | Sounds aspirational, can't verify | Three metrics + thresholds, minimum |
| Confuses scaling with reliability | Wrong question answered | Scaling = handling more load. Reliability = handling failures. Different problem. |
| Ignores cost | Sounds like a student, not an engineer | Mention cost / complexity tradeoff for each intervention |
| Claims linear scaling | Wrong | Sub-linear is the rule. Locks, hot rows, and shared resources prevent linear scaling. |

---

## After you drill this

When this drill is **● Drilled**, you can hold your own when the interviewer pivots from *"what did you build?"* to *"what would you build if you had to do it for a million users?"*. That pivot is where 70% of senior interviews go.

Next drills:

→ **[Tradeoffs Narrative](tradeoffs-narrative.md)** — the broader engineering-decisions question
→ **[Hardest Bug](hardest-bug.md)** — the question that often comes paired with this
→ **[10-System-Design](../../10-system-design/index.md)** — the next phase, when you're ready for net-new system design

---

*Update your status badge once you can deliver the 90s scaling script cold, name the first bottleneck with a real load number, propose two interventions with mechanisms, and name three monitoring metrics.*
