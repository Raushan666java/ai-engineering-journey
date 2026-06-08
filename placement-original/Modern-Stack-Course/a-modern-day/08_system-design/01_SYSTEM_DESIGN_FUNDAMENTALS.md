# 🏗 STAGE 8A — System Design Fundamentals

> **Level:** Advanced | **Duration:** 1–2 Weeks

---

## 1. System Design Thinking

### The 4-Step Framework
```
1. REQUIREMENTS → What does the system need to do?
   - Functional: Features, APIs, data
   - Non-functional: Scale, latency, availability

2. ESTIMATION → How big is the problem?
   - Users, requests/sec, data size, storage

3. DESIGN → How will it work?
   - Components, data flow, APIs, database

4. TRADE-OFFS → Why this approach?
   - Consistency vs Availability
   - Latency vs Throughput
   - Cost vs Performance
```

---

## 2. Key Concepts

### CAP Theorem
```
You can only have 2 of 3:
C — Consistency (all nodes see same data)
A — Availability (system always responds)  
P — Partition Tolerance (survives network splits)

Real systems choose:
CP → Banking (consistency critical) → Fail if network issues
AP → Social media (availability critical) → Show stale data
```

### Latency Numbers Every Dev Should Know
```
L1 cache reference:                      0.5 ns
RAM reference:                          100 ns
SSD read:                            16,000 ns  (16 μs)
HDD read:                         2,000,000 ns  (2 ms)
Same datacenter roundtrip:           500,000 ns  (0.5 ms)
Redis GET:                         1,000,000 ns  (1 ms)
Database query:                    5,000,000 ns  (5 ms)
Cross-country roundtrip:         150,000,000 ns  (150 ms)
```

---

## 3. Scaling Patterns

### Vertical Scaling (Scale Up)
```
More CPU, more RAM → Bigger server
✅ Simple, no code changes
❌ Has limits, expensive, single point of failure
```

### Horizontal Scaling (Scale Out)
```
More servers → Load balancer distributes requests
✅ No limit, fault tolerant
❌ Complex, need stateless design
```

### Stateless Design
```
❌ Stateful: Server stores user session in memory
   → Can't use other server next request

✅ Stateless: Session in Redis/DB
   → Any server can handle any request
   → Can scale horizontally
```

---

## 4. Load Balancing

```
Client → Load Balancer
           ├── Server 1
           ├── Server 2
           └── Server 3
```

### Algorithms
| Algorithm | Description |
|-----------|-------------|
| Round Robin | Sequential rotation |
| Least Connections | Send to least busy |
| IP Hash | Same IP → Same server |
| Weighted | More traffic to powerful servers |

### Nginx as Load Balancer
```nginx
upstream backend {
    least_conn;
    server app1:8080 weight=3;
    server app2:8080 weight=2;
    server app3:8080 weight=1;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

---

## 5. Database Design

### Normalization vs Denormalization
```
Normalized (many tables, no duplication):
✅ Data integrity
❌ Complex joins, slower reads

Denormalized (fewer tables, some duplication):
✅ Fast reads, simple queries
❌ Data redundancy, complex updates
```

### When to Denormalize
- Read-heavy applications (95% reads)
- Dashboard/analytics queries
- Search results
- Caching layers

### Database Patterns
```
Single DB          → Simple apps
Read Replicas      → Read-heavy apps
Sharding           → Very large datasets
CQRS               → Different read/write patterns
Event Sourcing     → Audit-critical systems
```

---

## 6. Design Exercise: URL Shortener

### Requirements
- Shorten URL (POST /shorten)
- Redirect (GET /:code)
- Analytics (click count, location)
- 100M URLs, 1B redirects/month

### Back-of-Envelope
```
1B redirects/month
= 33M/day = 400/sec average, 1200/sec peak

Storage: 100M URLs × 500 bytes = 50 GB
Cache: Top 20% URLs = 10 GB Redis
```

### Architecture
```
Client → CDN → Load Balancer
                    ↓
              App Servers (3+)
                    ↓
         ┌─────────┼─────────┐
       Redis     PostgreSQL   Analytics
       (cache)   (primary)    (ClickHouse)
```

---

## 7. Design Exercise: AI SaaS Platform

### Requirements
- Multi-tenant SaaS
- AI scraping + analysis
- 10K tenants, 100K daily scrape jobs
- Real-time dashboard

### Architecture
```
Client (Next.js)
       ↓
   API Gateway (Nginx)
   ├── Auth Service (Laravel)
   ├── Scraping Service (Python)
   ├── AI Service (Python + LLM)
   └── Analytics Service
       ↓
   Message Queue (Redis)
       ↓
   Workers (Python) → Vector DB
       ↓
   PostgreSQL + Redis Cache
```

---

## 🎯 Practice Tasks
- [ ] Design URL shortener system
- [ ] Design AI SaaS platform architecture
- [ ] Calculate back-of-envelope estimates
- [ ] Design database schema for 1M+ users
- [ ] Draw system architecture diagrams

---

*Next: [Scaling, Caching & Queues →](./02_SCALING_CACHING_QUEUES.md)*
