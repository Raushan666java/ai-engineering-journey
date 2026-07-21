# System Design Interview

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Apply a structured framework to approach any system design question |
| LO2 | Design scalable data stores: SQL vs NoSQL, sharding, replication, CAP tradeoffs |
| LO3 | Architect distributed systems with load balancing, caching, CDNs, and message queues |
| LO4 | Design real-time systems: chat, live streaming, collaborative editing |
| LO5 | Design data-intensive systems: analytics pipeline, data warehouse, streaming processing |
| LO6 | Whiteboard and communicate design decisions clearly under time pressure |

## Introduction

Understanding system design interview is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering system design interview.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding system design interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how system design interview works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind system design interview
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Design Framework | Requirements, estimation, data model, API, high-level design, deep dive |
| 8.2 | Data Stores | SQL vs NoSQL, replication, sharding, indexing strategies |
| 8.3 | Caching | CDN, Redis, cache eviction, cache-aside, write-through |
| 8.4 | Load Balancing | Algorithms, DNS, reverse proxy, consistent hashing |
| 8.5 | Microservices & APIs | Gateway, service mesh, RPC, GraphQL, REST |
| 8.6 | Real-Time Systems | WebSockets, SSE, chat, notifications, live streaming |
| 8.7 | Data Systems | OLAP vs OLTP, data warehouse, streaming, batch processing |
| 8.8 | Case Studies | URL shortener, chat system, rate limiter, design interview walkthrough |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Design Framework] --> B[Data Stores]
    B --> C[Caching]
    C --> D[Load Balancing]
    D --> E[Microservices & APIs]
    E --> F[Real-Time Systems]
    F --> G[Data Systems]
    G --> H[Case Studies]
```text

## 8.1 Design Framework

A structured approach ensures you cover all aspects of the system. Follow this framework:

**Step 1 — Requirements gathering (2-3 min)**: Ask clarifying questions. Functional requirements (what the system does). Non-functional requirements (scalability, latency, availability, durability). Out-of-scope items.

**Step 2 — Estimation (2-3 min)**: Traffic (DAU, requests/second, bandwidth), storage (data per entity, total storage, growth rate), compute (servers needed, CPU/memory requirements).

**Step 3 — Data model (3-4 min)**: Schema design (tables, indexes, relationships). Storage choice (SQL vs NoSQL). Data access patterns.

**Step 4 — API design (2-3 min)**: REST/GraphQL endpoints, request/response formats, WebSocket events.

**Step 5 — High-level design (5-7 min)**: System diagram showing components (load balancer, app servers, databases, caches, queues, CDN). Data flow arrows.

**Step 6 — Deep dive (10-15 min)**: Focus on the most interesting aspect. Scaling, sharding, replication, consistency, fault tolerance, monitoring.

**Step 7 — Tradeoffs and summary (2-3 min)**: What you optimized for, what you sacrificed, alternative approaches.

```python

## Estimation utility
def estimate_traffic(dau: int, requests_per_user_per_day: float) -> dict:
    daily_requests = dau * requests_per_user_per_day
    qps = daily_requests / (24 * 3600)  # queries per second
    peak_qps = qps * 3  # assume 3x peak factor
    return {
        "daily_requests": daily_requests,
        "avg_qps": qps,
        "peak_qps": peak_qps,
    }

def estimate_storage(records_per_day: int, record_size_bytes: int, retention_days: int) -> dict:
    daily_storage = records_per_day * record_size_bytes
    total = daily_storage * retention_days
    return {
        "daily_gb": daily_storage / (1024**3),
        "total_gb": total / (1024**3),
        "total_tb": total / (1024**4),
    }

## Example: Design Twitter

## DAU: 200M, tweets/user/day: 2
traffic = estimate_traffic(200_000_000, 2)
print(f"Avg QPS: {traffic['avg_qps']:.0f}, Peak QPS: {traffic['peak_qps']:.0f}")

## Avg QPS: 4,630, Peak QPS: 13,890

## Storage: 400M tweets/day, 500 bytes per tweet, 5 year retention
storage = estimate_storage(400_000_000, 500, 365 * 5)
print(f"Total storage: {storage['total_tb']:.0f} TB")

## Total storage: ~333 TB
```text

---

## 8.2 Data Stores

Choosing the right data store is one of the most important design decisions.

**Relational databases (PostgreSQL, MySQL)**: Strong consistency, ACID transactions, complex queries, joins. Best for: financial systems, user accounts, inventory, any system requiring data integrity.

**Document stores (MongoDB, DynamoDB)**: Flexible schema, horizontal scaling, good for hierarchical data. Best for: content management, catalogs, user profiles, gaming.

**Key-value stores (Redis, Memcached)**: Ultra-fast access, simple data model. Best for: caching, session storage, real-time leaderboards.

**Wide-column stores (Cassandra, ScyllaDB)**: High write throughput, eventually consistent. Best for: time-series data, IoT, event logging, recommendation engines.

**Search engines (Elasticsearch)**: Full-text search, complex aggregations. Best for: log analytics, product search, site search.

```python

## Sharding strategies
import hashlib

class ConsistentHashRing:
    def __init__(self, nodes: list[str], replicas: int = 100):
        self.replicas = replicas
        self.ring = {}
        self.sorted_keys = []
        for node in nodes:
            self.add_node(node)

    def add_node(self, node: str) -> None:
        for i in range(self.replicas):
            key = self._hash(f"{node}:{i}")
            self.ring[key] = node
            self.sorted_keys.append(key)
        self.sorted_keys.sort()

    def remove_node(self, node: str) -> None:
        for i in range(self.replicas):
            key = self._hash(f"{node}:{i}")
            del self.ring[key]
            self.sorted_keys.remove(key)

    def get_node(self, key: str) -> str:
        if not self.ring:
            raise Exception("No nodes available")
        hash_key = self._hash(key)
        for ring_key in self.sorted_keys:
            if hash_key <= ring_key:
                return self.ring[ring_key]
        return self.ring[self.sorted_keys[0]]

    def _hash(self, key: str) -> int:
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

## Range-based sharding
class RangeShardManager:
    def __init__(self, shard_ranges: list[tuple[int, int, str]]):
        self.shards = shard_ranges  # [(min_id, max_id, shard_url), ...]

    def get_shard(self, entity_id: int) -> str:
        for min_id, max_id, url in self.shards:
            if min_id <= entity_id <= max_id:
                return url
        raise ValueError(f"No shard for id {entity_id}")

## Read replicas for scaling reads
class ReadWriteSplitting:
    def __init__(self, write_master: str, read_replicas: list[str]):
        self.master = write_master
        self.replicas = read_replicas
        self._replica_index = 0

    def write(self, query: str, params: tuple) -> None:
        execute(self.master, query, params)

    def read(self, query: str, params: tuple) -> list:
        replica = self.replicas[self._replica_index % len(self.replicas)]
        self._replica_index += 1
        return execute(replica, query, params)
```text

**Replication**: Leader-follower (single leader, async/sync replication), leader-leader (multi-write, conflict resolution), quorum-based (R = read quorum, W = write quorum, N = total replicas).

---

## 8.3 Caching

Caching reduces latency and database load. A multi-level cache strategy is essential for large-scale systems.

**CDN**: Caches static assets (images, CSS, JS, videos) at edge locations close to users. Providers: CloudFront, Cloudflare, Akamai.

**In-memory cache (Redis, Memcached)**: Caches database query results, computed data, and session state. TTL-based eviction or LRU.

**Application-level cache**: In-process memory cache (lru_cache, dictionary) for frequently accessed, rarely changed data.

**Browser cache**: HTTP caching headers (Cache-Control, ETag, Expires) to reduce network requests.

```python
from datetime import timedelta
from typing import Optional, Any

## Multi-level cache
class MultiLevelCache:
    def __init__(self, l1_cache: Any, l2_cache: Any, l1_ttl: int = 60, l2_ttl: int = 3600):
        self.l1 = l1_cache  # in-memory, fast, small
        self.l2 = l2_cache  # Redis, slower, large
        self.l1_ttl = l1_ttl
        self.l2_ttl = l2_ttl

    def get(self, key: str) -> Optional[str]:
        # Check L1 first
        result = self.l1.get(key)
        if result is not None:
            return result

        # Check L2
        result = self.l2.get(key)
        if result is not None:
            # Promote to L1
            self.l1.set(key, result, self.l1_ttl)
            return result

        return None

    def set(self, key: str, value: str) -> None:
        self.l1.set(key, value, self.l1_ttl)
        self.l2.set(key, value, self.l2_ttl)

    def invalidate(self, key: str) -> None:
        self.l1.invalidate(key)
        self.l2.delete(key)

## Cache-aside pattern
def get_user(user_id: int, cache, db) -> dict:
    cache_key = f"user:{user_id}"

    # Try cache
    cached = cache.get(cache_key)
    if cached:
        return json.loads(cached)

    # Load from database
    user = db.query("SELECT * FROM users WHERE id = ?", (user_id,))

    if user:
        cache.set(cache_key, json.dumps(user), ttl=3600)
    return user

## Write-through cache
def update_user(user_id: int, data: dict, cache, db) -> dict:
    # Update database
    db.execute("UPDATE users SET name = ? WHERE id = ?", (data["name"], user_id))

    # Update cache (or invalidate)
    cache.set(f"user:{user_id}", json.dumps({**data, "id": user_id}), ttl=3600)

    return data
```text

**Cache eviction policies**: LRU (Least Recently Used) — most common; LFU (Least Frequently Used) — for popularity-based access; FIFO (First In First Out) — simple; TTL (Time To Live) — automatic expiration.

**Cache invalidation challenges**: Stale data, thundering herd (many requests miss cache simultaneously after expiry). Solutions: write-through cache, early recalculation, probabilistic expiration, cache warming, stale-while-revalidate.

---

## 8.4 Load Balancing

Load balancers distribute traffic across multiple servers for availability and scalability.

**Algorithms**: Round robin (simple, equal distribution), least connections (sends to least busy server), IP hash (session persistence), weighted round robin (for heterogeneous servers).

**DNS load balancing**: Distribute traffic across data centers. Simple but slow to failover (TTL propagation).

**Reverse proxy (Nginx, HAProxy)**: Terminates client connections, distributes to backend servers. Can also handle SSL termination, request buffering, and health checks.

**Layer 4 vs Layer 7**: L4 (transport layer — TCP/UDP, faster, less intelligent), L7 (application layer — HTTP/HTTPS, can inspect requests, content-based routing).

```python

## Simple round-robin load balancer
class RoundRobinLoadBalancer:
    def __init__(self, servers: list[str]):
        self.servers = servers
        self.index = 0

    def get_server(self) -> str:
        server = self.servers[self.index]
        self.index = (self.index + 1) % len(self.servers)
        return server

## Weighted round robin
class WeightedLoadBalancer:
    def __init__(self, servers: dict[str, int]):
        # servers = {"server1": 3, "server2": 1}  # server1 gets 3x traffic
        self.pool = []
        for server, weight in servers.items():
            self.pool.extend([server] * weight)
        self.index = 0

    def get_server(self) -> str:
        server = self.pool[self.index]
        self.index = (self.index + 1) % len(self.pool)
        return server

## Least connections (simplified)
class LeastConnectionsBalancer:
    def __init__(self, servers: list[str]):
        self.connections = {s: 0 for s in servers}

    def assign(self) -> str:
        server = min(self.connections, key=self.connections.get)
        self.connections[server] += 1
        return server

    def release(self, server: str) -> None:
        self.connections[server] = max(0, self.connections[server] - 1)

## Health check integration
class HealthCheckBalancer(RoundRobinLoadBalancer):
    def __init__(self, servers: list[str], health_check_path: str = "/health"):
        super().__init__(servers)
        self.healthy = {s: True for s in servers}
        self.health_check_path = health_check_path

    async def check_health(self) -> None:
        import httpx
        async with httpx.AsyncClient() as client:
            for server in self.servers:
                try:
                    resp = await client.get(f"{server}{self.health_check_path}", timeout=2)
                    self.healthy[server] = resp.status_code == 200
                except Exception:
                    self.healthy[server] = False

    def get_server(self) -> str:
        healthy_servers = [s for s in self.servers if self.healthy[s]]
        if not healthy_servers:
            raise Exception("No healthy servers available")
        # Fall back to super to get round-robin among healthy
        return healthy_servers[self.index % len(healthy_servers)]
```text

**Consistent hashing**: When adding/removing servers, only K/N keys need to be remapped (where K = total keys, N = number of servers). Essential for distributed caches and databases.

---

## 8.5 Microservices & APIs

Microservices decompose a system into independently deployable services. Each service owns its data and domain.

**API Gateway**: Single entry point for all clients. Handles authentication, rate limiting, routing, aggregation, and protocol translation. Alternatives: Kong, Apigee, AWS API Gateway, custom Nginx.

**Service mesh**: Infrastructure layer for service-to-service communication. Handles traffic management, observability, and security. Istio, Linkerd, Consul Connect.

**gRPC**: High-performance RPC framework using Protocol Buffers. Good for internal service-to-service communication. Supports bi-directional streaming.

```python

## Service decomposition example — e-commerce platform
SERVICES = {
    "user-service": {
        "responsibilities": ["User registration", "Authentication", "Profile management"],
        "data": ["users", "sessions"],
        "api": ["POST /users", "GET /users/:id", "POST /auth/login"],
    },
    "product-service": {
        "responsibilities": ["Product catalog", "Inventory", "Search"],
        "data": ["products", "categories", "inventory"],
        "api": ["GET /products", "GET /products/:id", "GET /search"],
    },
    "order-service": {
        "responsibilities": ["Order management", "Cart", "Order lifecycle"],
        "data": ["orders", "order_items", "carts"],
        "api": ["POST /orders", "GET /orders/:id", "PATCH /orders/:id/status"],
    },
    "payment-service": {
        "responsibilities": ["Payment processing", "Refunds", "Billing"],
        "data": ["payments", "transactions"],
        "api": ["POST /payments", "POST /refunds"],
    },
    "notification-service": {
        "responsibilities": ["Email", "SMS", "Push notifications"],
        "data": ["notification_templates", "sent_notifications"],
        "api": ["POST /notifications/send"],
    },
}

## Circuit breaker pattern
import time

class CircuitBreaker:
    def __init__(self, failure_threshold: int = 5, recovery_timeout: float = 30.0):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failure_count = 0
        self.last_failure_time = 0.0
        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN

    async def call(self, func, *args, **kwargs):
        if self.state == "OPEN":
            if time.time() - self.last_failure_time >= self.recovery_timeout:
                self.state = "HALF_OPEN"
            else:
                raise Exception("Circuit breaker is OPEN")

        try:
            result = await func(*args, **kwargs)
            if self.state == "HALF_OPEN":
                self.state = "CLOSED"
                self.failure_count = 0
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
            raise e

## API rate limiter
class SlidingWindowRateLimiter:
    def __init__(self, redis_client):
        self.redis = redis_client

    async def check_rate_limit(self, user_id: str, endpoint: str, max_requests: int, window_ms: int) -> bool:
        key = f"ratelimit:{user_id}:{endpoint}"
        now = int(time.time() * 1000)
        window_start = now - window_ms

        pipe = self.redis.pipeline()
        pipe.zremrangebyscore(key, 0, window_start)
        pipe.zcard(key)
        pipe.zadd(key, {str(now): now})
        pipe.expire(key, window_ms // 1000 + 1)
        _, count, _, _ = pipe.execute()

        return count < max_requests
```text

**Inter-service communication patterns**: Synchronous (HTTP/gRPC — simple but creates coupling), asynchronous (message queue/event bus — decoupled, eventual consistency), hybrid (events for notification, APIs for queries).

---

## 8.6 Real-Time Systems

Real-time features (chat, notifications, live updates) are common system design questions.

**WebSockets**: Full-duplex persistent connection. Used for: chat, live notifications, collaborative editing, real-time dashboards.

**Server-Sent Events (SSE)**: Server pushes events to client over HTTP. Simpler than WebSockets, unidirectional. Used for: stock tickers, status updates, news feeds.

**Long polling**: Client sends a request, server holds it until data is available. Simpler to implement (no special server support) but less efficient.

```python
import asyncio
from typing import Set
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

class ChatRoom:
    def __init__(self):
        self.connections: Set[WebSocket] = set()

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.add(websocket)

    def disconnect(self, websocket: WebSocket):
        self.connections.discard(websocket)

    async def broadcast(self, message: str, sender: WebSocket = None):
        for conn in self.connections:
            if conn != sender:
                try:
                    await conn.send_text(message)
                except Exception:
                    self.disconnect(conn)

room = ChatRoom()

@app.websocket("/ws/chat/{room_id}")
async def chat_endpoint(websocket: WebSocket, room_id: str):
    await room.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await room.broadcast(data, sender=websocket)
    except WebSocketDisconnect:
        room.disconnect(websocket)

## Notification system with fan-out
class NotificationService:
    def __init__(self, db, message_queue, websocket_manager):
        self.db = db
        self.queue = message_queue
        self.ws = websocket_manager

    async def send_notification(self, user_id: str, notification: dict):
        # Store in database
        notif_id = await self.db.execute(
            "INSERT INTO notifications (user_id, type, content, created_at) VALUES ($1, $2, $3, NOW())",
            user_id, notification["type"], notification["content"]
        )

        # Send via WebSocket if connected
        await self.ws.send_to_user(user_id, {
            "type": "notification",
            "id": notif_id,
            **notification
        })

        # No WebSocket — will be fetched on next page load
        # Push notification as fallback
        await self.queue.publish("send_push", {
            "user_id": user_id,
            "title": notification["title"],
            "body": notification["body"],
        })

    async def get_notifications(self, user_id: str, limit: int = 50) -> list[dict]:
        rows = await self.db.fetch(
            "SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2",
            user_id, limit
        )
        return [dict(r) for r in rows]
```text

**Presence system**: Track online/offline status. Use Redis with TTL (heartbeat every 30 seconds). Show "last seen" for offline users. Handle disconnections gracefully.

---

## 8.7 Data Systems

Data-intensive systems handle large-scale data processing, analytics, and reporting.

**OLTP (Online Transaction Processing)**: Many small transactions, low latency, row-oriented storage. Standard relational databases.

**OLAP (Online Analytical Processing)**: Complex queries on large datasets, column-oriented storage (ClickHouse, Redshift, BigQuery).

**Lambda architecture**: Batch processing (accurate, high latency) + stream processing (approximate, low latency). Combines results from both paths.

**Kappa architecture**: Everything is a stream. Use stream processing for all data. Simpler than Lambda, but requires replay capability.

```python

## Event streaming architecture
from dataclasses import dataclass
from datetime import datetime
import json

@dataclass
class Event:
    event_id: str
    event_type: str
    entity_id: str
    timestamp: datetime
    data: dict

class StreamProcessor:
    def __init__(self, kafka_producer, kafka_consumer):
        self.producer = kafka_producer
        self.consumer = kafka_consumer

    async def emit_event(self, event: Event):
        await self.producer.send(
            topic=event.event_type,
            key=event.entity_id,
            value=json.dumps({
                "event_id": event.event_id,
                "type": event.event_type,
                "entity_id": event.entity_id,
                "timestamp": event.timestamp.isoformat(),
                "data": event.data,
            }),
        )

    async def process_stream(self, topic: str, handler):
        async for message in self.consumer:
            event_data = json.loads(message.value)
            event = Event(
                event_id=event_data["event_id"],
                event_type=event_data["type"],
                entity_id=event_data["entity_id"],
                timestamp=datetime.fromisoformat(event_data["timestamp"]),
                data=event_data["data"],
            )
            await handler(event)

## Windowed aggregation
class SlidingWindowAggregator:
    def __init__(self, window_size: int = 60, slide_interval: int = 10):
        self.window_size = window_size  # seconds
        self.slide_interval = slide_interval
        self.buckets: dict[int, list] = {}

    def add_event(self, event: dict) -> None:
        bucket = int(time.time() / self.slide_interval) * self.slide_interval
        self.buckets.setdefault(bucket, []).append(event)
        # Clean old buckets
        cutoff = time.time() - self.window_size
        self.buckets = {k: v for k, v in self.buckets.items() if k >= cutoff}

    def get_window_stats(self) -> dict:
        cutoff = time.time() - self.window_size
        relevant = [e for k, v in self.buckets.items() if k >= cutoff for e in v]
        return {
            "count": len(relevant),
            "timestamp": datetime.now().isoformat(),
        }
```text

**Data pipeline design**: Source (DB, logs, events) → Ingestion (Kafka, Kinesis) → Processing (Spark, Flink) → Storage (S3, Redshift) → Serving (BI tools, APIs).

---

## 8.8 Case Studies

**Case Study 1: URL Shortener**

Requirements: Generate short URLs, redirect to original, track clicks, handle 100M URLs.

Data model: `urls(id BIGSERIAL, short_code VARCHAR(10) UNIQUE, original_url TEXT, created_at TIMESTAMP, user_id INT, click_count INT DEFAULT 0)`.

Short code: Base62 encode auto-increment ID (deterministic, no collision) or random 7-char string. For 100M URLs, 7 chars of 62 = 3.5T combinations.

Key design: Redirect is a simple key lookup (Redis cache with DB fallback). Click tracking is async (Kafka + batch write to DB). Cache hit ratio target: >99% for frequently accessed URLs.

```python
def base62_encode(num: int) -> str:
    alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if num == 0:
        return alphabet[0]
    result = []
    while num > 0:
        num, rem = divmod(num, 62)
        result.append(alphabet[rem])
    return "".join(reversed(result))
```text

**Case Study 2: Chat System**

Requirements: 1:1 and group chat, 50M DAU, messages delivered in <100ms, message history for 1 year.

Architecture: WebSocket gateway farm (persistent connections), Redis pub/sub for message routing within a chat room, Cassandra for message history (ordered by time), S3 for media attachments.

Data model: `messages(chat_id, message_id TIMEUUID, sender_id, content, created_at)` with partition key = chat_id.

Key design: Fan-out on write for small groups (write to each member's inbox), fan-out on read for large groups (read from shared timeline). Push notifications via APNS/FCM.

**Case Study 3: Rate Limiter**

Requirements: 100K QPS, per-user rate limiting, sliding window, configurable limits per endpoint.

Architecture: Redis sorted sets (sliding window) or Redis counters (fixed window). Distributed via Redis Cluster. Local in-memory counters for hot-path decisions, synced to Redis periodically.

```python
class RateLimiter:
    def __init__(self, redis_client):
        self.redis = redis_client

    async def is_allowed(self, user_id: str, limit: int, window_ms: int) -> bool:
        key = f"rl:{user_id}"
        now = int(time.time() * 1000)

        # Remove old entries
        await self.redis.zremrangebyscore(key, 0, now - window_ms)

        # Count recent requests
        count = await self.redis.zcard(key)

        if count >= limit:
            return False

        # Add current request
        await self.redis.zadd(key, {str(now): now})
        await self.redis.expire(key, window_ms // 1000 + 1)
        return True
```text

**Design interview walkthrough**:

1. Clarify requirements (functional + non-functional)
2. Estimate scale (traffic, storage, bandwidth)
3. Define data model and API
4. Draw high-level architecture diagram
5. Deep dive: sharding, caching, consistency, fault tolerance
6. Summarize tradeoffs

---

## Summary

- Use the 7-step framework: requirements → estimation → data model → API → high-level design → deep dive → tradeoffs
- Choose data stores based on access patterns: SQL for consistency, NoSQL for scale
- Multi-level caching: CDN → Redis → local cache → database
- Load balancing: round robin for simplicity, consistent hashing for cache-friendly distribution
- Microservices decompose by domain; use API gateway for cross-cutting concerns
- Real-time systems: WebSockets for bidirectional, SSE for server push, Kafka for event streaming
- Data systems: OLTP for transactions, OLAP for analytics, streaming for real-time processing
- Practice common designs: URL shortener, chat, rate limiter, news feed, payment system

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Estimating scale | Calculate QPS and storage upfront | Jumping into design without numbers |
| Database choice | SQL for consistency, NoSQL for scale | Using MongoDB for financial transactions |
| Read-heavy workload | Add caching layer + read replicas | Scaling the write master |
| High write throughput | Append-only log + async processing | Synchronous writes to relational DB |
| Microservices | Domain-based decomposition, async communication | Splitting by technical layers only |
| Real-time features | WebSockets for low-latency bidirectional | Polling every second |
| System design interview | Draw and explain, not just talk | Coding during system design |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s08-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How do you approach a system design interview question?
  </summary>
  <div class="tp-qa-answer">
    <p>Use the 7-step framework:</p>
    <ol>
      <li><strong>Clarify requirements</strong> (2-3 min): Ask about functional requirements (what should the system do?) and non-functional requirements (how many users, latency requirements, availability expectations).</li>
      <li><strong>Estimate scale</strong> (2-3 min): Calculate daily active users, QPS, storage, bandwidth. Use rough numbers and round for simplicity.</li>
      <li><strong>Data model</strong> (3-4 min): Define the main entities, relationships, and storage choice. Draw the schema on the whiteboard.</li>
      <li><strong>API design</strong> (2-3 min): Define the main endpoints and their request/response format.</li>
      <li><strong>High-level design</strong> (5-7 min): Draw the system diagram with all major components and data flow.</li>
      <li><strong>Deep dive</strong> (10-15 min): Focus on the most interesting part — caching strategy, sharding, consistency model, fault tolerance.</li>
      <li><strong>Summarize</strong> (2-3 min): Review the design, discuss tradeoffs, and mention what you would improve.</li>
    </ol>
    <p>Throughout: <strong>communicate clearly</strong>, explain tradeoffs, and engage the interviewer for feedback.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: When would you choose SQL over NoSQL for a new system?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Choose SQL (PostgreSQL, MySQL) when</strong>:</p>
    <ul>
      <li>Data integrity is critical (ACID transactions, foreign keys)</li>
      <li>Complex queries and joins are needed</li>
      <li>Schema is stable and well-defined</li>
      <li>Consistency is more important than availability (CAP: CP)</li>
      <li>Examples: financial systems, user accounts, inventory</li>
    </ul>
    <p><strong>Choose NoSQL when</strong>:</p>
    <ul>
      <li>Schema is flexible or evolving rapidly</li>
      <li>Need horizontal scaling with high write throughput</li>
      <li>Data is hierarchical or document-oriented</li>
      <li>Availability is more important than consistency (CAP: AP)</li>
      <li>Examples: user sessions, IoT data, content catalogs, event logs</li>
    </ul>
    <p><strong>Hybrid approach</strong>: Many systems use both. PostgreSQL for core business data (accounts, orders), DynamoDB/MongoDB for high-throughput access patterns (sessions, events, user-generated content).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Design a URL shortener like bit.ly.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Shorten URLs, redirect to original, track clicks, handle 100M URLs, fast redirects.</p>
    <p><strong>Data model</strong>: `urls(id BIGSERIAL, short_code VARCHAR(10) UNIQUE, original_url TEXT, user_id INT, created_at TIMESTAMP, clicks INT DEFAULT 0)`. Index on short_code.</p>
    <p><strong>Short code generation</strong>: Base62 encode auto-increment ID (deterministic, no collision check needed). 7 characters → 62^7 ≈ 3.5 trillion combinations.</p>
    <p><strong>API</strong>: POST /shorten (returns short code), GET /{code} (HTTP 301 redirect with Location header), GET /{code}/stats (clicks, referrers).</p>
    <p><strong>High-level design</strong>: Load balancer → Web servers → Redis cache → PostgreSQL. Write path: insert URL → get ID → encode → update short_code. Read path: check Redis → if miss, check DB → populate Redis → return redirect.</p>
    <p><strong>Scale</strong>: 100M URLs = ~50GB storage (500 bytes per record). Redis can handle 100K QPS. For higher scale, shard by short_code prefix.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How would you design a real-time chat application?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: 1:1 and group chat, 50M DAU, <100ms delivery, persistent message history.</p>
    <p><strong>Architecture</strong>:</p>
    <ul>
      <li><strong>WebSocket gateway</strong>: Elastic load balancer → WebSocket server farm. Each server handles 10K+ persistent connections.</li>
      <li><strong>Connection management</strong>: Redis maintains user → WebSocket server mapping. When user connects, register in Redis.</li>
      <li><strong>Message routing</strong>: Sender's WebSocket server publishes message to Redis pub/sub channel for the chat room. All servers subscribed to the channel receive and forward to connected recipients.</li>
      <li><strong>Message persistence</strong>: Cassandra for message history (partitioned by chat_id, ordered by time). TTL of 1 year.</li>
      <li><strong>Fan-out strategy</strong>: Small groups (≤100 members): write message to each member's timeline in Cassandra. Large groups: read from shared timeline on demand.</li>
    </ul>
    <p><strong>Key considerations</strong>: Handle reconnection (last seen message ID for sync), presence (heartbeat with TTL in Redis), media uploads (S3 with signed URLs), push notifications (APNS/FCM for offline users).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: Explain consistent hashing and why it's important.
  </summary>
  <div class="tp-qa-answer">
    <p>Consistent hashing is a distributed hashing scheme that maps keys to servers on a hash ring. Each server is placed on the ring at multiple points (virtual nodes). Keys are assigned to the nearest server clockwise on the ring.</p>
    <p><strong>Why it matters</strong>: In a simple modulo-based shard (key % N), adding or removing a server causes K * (N-1)/N keys to move (almost all keys). In consistent hashing, only K/N keys move when a server changes.</p>
    <p><strong>Benefits</strong>:</p>
    <ul>
      <li>Minimal redistribution when scaling up/down</li>
      <li>Hotspots are reduced by virtual nodes (each physical server maps to multiple ring positions)</li>
      <li>Supports heterogeneous servers (heavier servers get more virtual nodes)</li>
    </ul>
    <p><strong>Used in</strong>: Amazon DynamoDB, Cassandra, Discord, Akamai CDN.</p>
    <p><strong>Tradeoffs</strong>: Lookup is O(log N) with a sorted ring (binary search). Load distribution depends on hash function quality. Virtual nodes help but add memory overhead.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How would you design a news feed system like Facebook or Twitter?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Show a personalized feed of recent posts from followed users/entities. 500M DAU, <500ms feed load, posts within 24 hours.</p>
    <p><strong>Two approaches</strong>:</p>
    <ul>
      <li><strong>Fan-out on write (push)</strong>: When a user posts, write the post ID to each follower's feed cache (Redis list). Pros: O(1) read. Cons: write amplification for users with millions of followers (celebrities).</li>
      <li><strong>Fan-out on read (pull)</strong>: When loading the feed, fetch posts from followed users, merge and rank. Pros: O(1) write. Cons: O(n) read (n = number of followed users), slow for users following many accounts.</li>
    </ul>
    <p><strong>Hybrid approach</strong>: Push feed for regular users. Pull feed for celebrities (identified by follower count threshold). Or use a "fan-out on write" approach but limit to the most recent 500-800 feed items per user inbox.</p>
    <p><strong>Data model</strong>: Post sharded by post ID. Feed stored in Redis sorted sets (score = timestamp). Background workers populate feeds asynchronously.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: Design a distributed rate limiter that handles 1M QPS.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Sliding window rate limiting per user/IP, 1M QPS, <1ms overhead.</p>
    <p><strong>Architecture</strong>:</p>
    <ul>
      <li><strong>Local (L1) counters</strong>: Each server maintains in-memory counters with periodic sync to Redis. Handles 99% of checks with zero network latency.</li>
      <li><strong>Redis (L2) counters</strong>: Distributed coordination. Use Redis Cluster for high availability.</li>
      <li><strong>Sliding window via sorted sets</strong>: ZREMRANGEBYSCORE to remove old entries, ZCARD to count. Optimized with Lua scripting for atomicity.</li>
    </ul>
    <pre><code>-- Lua script for atomic rate limit check
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])

redis.call('ZREMRANGEBYSCORE', key, 0, now - window)
local count = redis.call('ZCARD', key)
if count >= limit then
    return 0  -- denied
end
redis.call('ZADD', key, now, now)
redis.call('EXPIRE', key, window // 1000 + 1)
return 1  -- allowed</code></pre>
    <p><strong>Optimization</strong>: Use batch processing — combine multiple rate limit updates into one Redis call. Use local counters for hot-path decisions, synced to Redis every second.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How would you design a payment system?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Process payments, handle refunds, prevent double charges, idempotent, audit trail.</p>
    <p><strong>Data model</strong>: `payments(id UUID, user_id INT, amount DECIMAL(10,2), currency VARCHAR(3), status VARCHAR(20), idempotency_key VARCHAR(64) UNIQUE, created_at TIMESTAMP)`.</p>
    <p><strong>Idempotency</strong>: Client sends an idempotency key. If the key already exists, return the existing result instead of processing again. Stored in database with unique constraint, plus Redis cache for fast lookup.</p>
    <p><strong>Two-phase commit pattern</strong>: Reserve (hold) → capture (charge) → settle. If capture fails → release the hold. Use a payment gateway adaptor pattern for provider abstraction (Stripe, PayPal, Adyen).</p>
    <p><strong>Consistency</strong>: Payment > 0 and balance check in the same transaction. Use optimistic locking for balance updates. Dead letter queue for failed payments with manual reconciliation.</p>
    <p><strong>Security</strong>: PCI DSS compliance, tokenization (never store raw card numbers), encryption at rest and in transit, audit logging of all payment operations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: Design a distributed task queue.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Enqueue tasks, execute by workers, retry on failure, scheduling, at-least-once delivery, monitoring.</p>
    <p><strong>Architecture</strong>:</p>
    <ul>
      <li><strong>Redis Lists</strong>: BRPOP for blocking dequeue. Priority: use sorted sets with score = priority.</li>
      <li><strong>Kafka</strong>: For high-throughput task distribution. Each partition consumed by one worker group.</li>
      <li><strong>Database-backed</strong>: PostgreSQL with SKIP LOCKED for row-level locking (avoid contention).</li>
    </ul>
    <pre><code>CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    payload JSONB NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    priority INT DEFAULT 0,
    max_retries INT DEFAULT 3,
    retry_count INT DEFAULT 0,
    scheduled_at TIMESTAMP DEFAULT NOW(),
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_tasks_status ON tasks(status, scheduled_at) WHERE status = 'pending';

-- Worker picks up a task
UPDATE tasks SET status = 'processing', updated_at = NOW()
WHERE id = (
    SELECT id FROM tasks
    WHERE status = 'pending' AND scheduled_at <= NOW()
    ORDER BY priority DESC, scheduled_at ASC
    LIMIT 1
    FOR UPDATE SKIP LOCKED
)
RETURNING *;</code></pre>
    <p>Key features: Dead letter queue (tasks exceeding max_retries), heartbeat (check if worker is alive), graceful shutdown (SIGTERM → finish current task), exponential backoff for retries.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How would you design a logging and monitoring system?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Data pipeline</strong>:</p>
    <ul>
      <li><strong>Collection</strong>: Filebeat/Fluentd on each server tail log files → Kafka (buffering and decoupling)</li>
      <li><strong>Processing</strong>: Logstash or custom stream processor (parse, enrich, transform)</li>
      <li><strong>Storage</strong>: Elasticsearch for searchable logs (hot-warm-cold architecture), S3 for long-term cold storage</li>
      <li><strong>Visualization</strong>: Grafana for metrics, Kibana for log search and analysis</li>
    </ul>
    <p><strong>Metrics pipeline</strong>:</p>
    <ul>
      <li><strong>Collection</strong>: Prometheus exporters on each service (expose /metrics endpoint)</li>
      <li><strong>Storage</strong>: Prometheus (time-series database), Thanos or VictoriaMetrics for long-term retention</li>
      <li><strong>Alerting</strong>: Prometheus AlertManager with rules (latency > 500ms → critical alert)</li>
    </ul>
    <p><strong>Key metrics to track</strong>: Latency (p50, p95, p99), error rate, request rate, saturation (CPU, memory, connections). USE method (Utilization, Saturation, Errors) for every resource.</p>
    <p><strong>Distributed tracing</strong>: OpenTelemetry for trace propagation. Jaeger or Zipkin for trace visualization. Trace ID in all logs for correlation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: Compare REST, GraphQL, and gRPC for API design.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>REST</strong>: Resources via URLs, HTTP methods for operations. Caching built-in. Good for public APIs and simple CRUD. Response includes all fields (over-fetching). Version via URL or headers.</p>
    <p><strong>GraphQL</strong>: Single endpoint, client specifies fields. Resolves N+1 with DataLoader. Good for complex UIs with nested data. Caching is harder. Schema is strongly typed (introspection).</p>
    <p><strong>gRPC</strong>: Protocol Buffers, HTTP/2, streaming. Strong typing, code generation. Good for internal service-to-service communication. Bi-directional streaming. Not browser-native (needs gRPC-web proxy).</p>
    <p><strong>Decision guide</strong>:</p>
    <ul>
      <li>Public API with simple CRUD: REST</li>
      <li>Complex frontend with nested data: GraphQL</li>
      <li>High-performance internal microservices: gRPC</li>
      <li>Many teams use all three: gRPC internally, REST/GraphQL externally</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: How do you ensure high availability in a distributed system?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Redundancy</strong>: Multiple instances of every component (servers, load balancers, databases). Run across multiple availability zones.</p>
    <p><strong>Health checks</strong>: LB detects unhealthy servers and stops routing traffic. Auto-healing (auto-scaling group replaces failed instances).</p>
    <p><strong>Database HA</strong>: Read replicas, automatic failover (Patroni for PostgreSQL, Aurora multi-AZ), cross-region replication for disaster recovery.</p>
    <p><strong>Caching HA</strong>: Redis Cluster or Sentinel for automatic failover. Cache-aside pattern — app can still run without cache (slower but functional).</p>
    <p><strong>Graceful degradation</strong>: When a dependency fails, degrade functionality instead of returning errors. Example: recommendations fail → show default products.</p>
    <p><strong>Chaos engineering</strong>: Regularly test failure scenarios (kill a server, slow down a database, network partition). Netflix's Chaos Monkey, AWS Fault Injection Simulator.</p>
    <p><strong>SLA/SLO targets</strong>: Design for 99.9%+ availability. Calculate allowed downtime per month: 99.9% = ~43 min/month, 99.99% = ~4 min/month.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: Design a collaborative document editing system (like Google Docs).
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Multiple users edit simultaneously, changes propagate in real-time, conflict resolution, version history.</p>
    <p><strong>Two approaches</strong>:</p>
    <ul>
      <li><strong>Operational Transformation (OT)</strong>: Each operation is transformed against concurrent operations to maintain consistency. Used by Google Docs. Complex but mature.</li>
      <li><strong>CRDT (Conflict-free Replicated Data Types)</strong>: Data structure designed so concurrent updates converge automatically. Simpler than OT. Used by Figma. Growing adoption.</li>
    </ul>
    <p><strong>Architecture</strong>:</p>
    <ul>
      <li>WebSocket connection for real-time sync</li>
      <li>Server maintains document state and broadcasts operations to all connected clients</li>
      <li>Operation log for version history (append-only, stored in PostgreSQL or S3)</li>
      <li>Cursor positions broadcast separately (ephemeral, doesn't need persistence)</li>
      <li>Presence awareness — who's viewing/editing each section</li>
    </ul>
    <p><strong>Key challenges</strong>: Conflict resolution (OT/CRDT), latency (aim for <50ms between keystrokes), scalability (document server farm with consistent hashing by document ID), persistence (periodic snapshots + operation log).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: How would you design a video streaming platform?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Requirements</strong>: Upload, transcode, store, stream videos to 10M+ users. Low latency for live streaming.</p>
    <p><strong>Upload path</strong>: User uploads → load balancer → upload servers (chunked uploads, resume support) → S3 raw storage → message queue → transcoding workers.</p>
    <p><strong>Transcoding</strong>: FFmpeg workers process video into multiple resolutions (360p, 720p, 1080p, 4K) and formats (HLS, DASH). Stored in CDN origin. Generate thumbnails at intervals.</p>
    <p><strong>Streaming path</strong>: User requests video → CDN serves HLS/DASH playlists → video chunks served from edge. CDN caches at edge locations close to users.</p>
    <p><strong>Live streaming</strong>: RTMP/WHIP ingest → transcoding pipeline (low latency) → HLS/DASH output → CDN distribution. Use chunked transfer encoding for low-latency HLS (LL-HLS).</p>
    <p><strong>Metadata</strong>: PostgreSQL for video metadata (title, description, uploader, duration). Elasticsearch for search. Redis for view counts and trending.</p>
    <p><strong>Scale considerations</strong>: CDN handles 95%+ of traffic. Regional upload endpoints for faster uploads. Adaptive bitrate streaming to handle varying network conditions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s08-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: What are the key design decisions for a global social media platform?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Key decisions</strong>:</p>
    <ol>
      <li><strong>Data partitioning</strong>: Shard by user ID (consistent hashing) for user data. Shard by post ID for content. Shard by time for feed data.</li>
      <li><strong>Feed generation</strong>: Hybrid push/pull. Push for active users with moderate follower counts (fan-out on write). Pull for celebrities.</li>
      <li><strong>Real-time features</strong>: WebSocket gateway farm for chat and notifications. Redis pub/sub for room-based message routing. Presence server (heartbeat with TTL).</li>
      <li><strong>Content delivery</strong>: CDN for images/videos. Edge compute for personalized content (Cloudflare Workers). Multi-region deployment.</li>
      <li><strong>Data analytics</strong>: Kafka for event streaming (likes, shares, views). Spark/Flink for real-time aggregation. ClickHouse or Druid for interactive analytics.</li>
      <li><strong>Caching strategy</strong>: CDN → Redis cluster (distributed) → local cache (LRU). Multi-tier with TTL-based invalidation. Cache user profiles, feed items, trending topics.</li>
      <li><strong>Consistency model</strong>: Eventual consistency for most features (feed, likes, counts). Strong consistency for critical data (account settings, payments).</li>
    </ol>
    <p><strong>Regional deployment</strong>: Deploy in US, EU, Asia. Use DNS geo-routing. Each region has its own stack. Cross-region replication for user data. Eventual consistency across regions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the main advantage of consistent hashing over modulo-based sharding?

a) Faster lookups
b) Minimal key redistribution when servers change
c) Better load balancing
d) Support for transactions

<details class="tp-qa-card" data-qid="ip-s08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Minimal key redistribution when servers change</strong></p><p>Consistent hashing moves only K/N keys when a server is added/removed, vs K*(N-1)/N keys with modulo-based sharding.</p></div></details>

**Q2**: Which cache pattern requires the application to load data from the database on a cache miss?

a) Write-through
b) Write-behind
c) Cache-aside
d) Read-through

<details class="tp-qa-card" data-qid="ip-s08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Cache-aside</strong></p><p>In cache-aside, the application checks the cache first, and on a miss, loads data from the database and populates the cache.</p></div></details>

**Q3**: Which protocol is best for real-time bidirectional communication between browser and server?

a) HTTP long polling
b) Server-Sent Events
c) WebSockets
d) gRPC

<details class="tp-qa-card" data-qid="ip-s08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) WebSockets</strong></p><p>WebSockets provide full-duplex persistent communication over a single TCP connection, ideal for low-latency bidirectional data flow.</p></div></details>

**Q4**: In a URL shortener, what is the most space-efficient approach for generating short codes?

a) UUID
b) Random alphanumeric string
c) Base62 encode of auto-increment ID
d) Hash of the original URL

<details class="tp-qa-card" data-qid="ip-s08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Base62 encode of auto-increment ID</strong></p><p>Base62 encoding of a sequential ID guarantees uniqueness without collision checks and is space-efficient.</p></div></details>

**Q5**: What does CAP theorem's "C" stand for?

a) Consistency
b) Concurrency
c) Caching
d) Compression

<details class="tp-qa-card" data-qid="ip-s08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Consistency</strong></p><p>Consistency means every read receives the most recent write or an error. It's one of the three guarantees in the CAP theorem.</p></div></details>

## Exercises

**Easy** — Estimate the storage and QPS for a photo-sharing app like Instagram. Assume 500M DAU, each user uploads 0.5 photos/day, each photo is 2MB. Calculate daily storage, yearly storage, upload QPS, and view QPS (assume each user views 100 photos/day).

**Easy** — Design the data model for a bookmarks/tags system. Support: users save bookmarks with URLs and tags, search by tag, search by text in title/description. Write the SQL schema.

**Medium** — Design a notification system that supports: in-app notifications, push notifications (APNS/FCM), email notifications, and SMS. Handle 100M daily notifications. Design the data model, architecture, and delivery flow.

**Medium** — Design an e-commerce inventory system that tracks stock across multiple warehouses. Support: reserve inventory when added to cart, release when cart expires, decrement on purchase, prevent overselling.

**Hard** — Design a real-time analytics platform for tracking user events (page views, clicks, purchases) from 100M+ monthly active users. Requirements: sub-second query latency for dashboards, slice by date/user/event type, retain data for 2 years. Design the data pipeline, storage, and query layer.

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
1. Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?
2. Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?
2. How would you explain 21-interview-preparation to a non-technical stakeholder?

#### Microsoft Style
1. How does 21-interview-preparation integrate with enterprise systems and cloud architectures?
2. What are the security implications of 21-interview-preparation?

#### NVIDIA Style
1. How would you optimize 21-interview-preparation for GPU-accelerated computing?
2. What parallel processing patterns apply to 21-interview-preparation?

#### AI Startup Style
1. How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 21-interview-preparation?

### Resume Tips
- **Technical Skills**: List 21-interview-preparation under relevant technical skills
- **Project Description**: "Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 21-interview-preparation in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 21-interview-preparation
- [ ] Practice 3-5 problems related to 21-interview-preparation
- [ ] Prepare 2 real-world examples of using 21-interview-preparation
- [ ] Know the time/space complexity of common 21-interview-preparation operations
- [ ] Have questions ready about how the company uses 21-interview-preparation> **Next**: [09 — Behavioral STAR Interview →](09-behavioral-star-interview.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
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

- How this connects to Interview Preparation fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master system design interview?
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

Understanding the evolution of system design interview helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding system design interview at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of system design interview like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply system design interview concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of system design interview?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply system design interview in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying system design interview to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production