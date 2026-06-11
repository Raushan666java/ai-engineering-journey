# Chapter 2: Scalability and Load Balancing

---

## Learning Objectives

- Compare vertical and horizontal scaling strategies with appropriate use cases
- Distinguish L4 and L7 load balancing with detailed trade-off analysis
- Implement and select among seven load-balancing algorithms based on traffic patterns
- Design DNS-based and global server load balancing for multi-region deployments
- Configure health checks and auto-scaling policies with appropriate metrics and cooldown
- Analyze the sticky sessions problem and design stateless alternatives
- Model real-world load balancing at AWS, Google Cloud, and Cloudflare

---

## Theory

### Vertical Scaling (Scale Up)

Vertical scaling adds resources to a single machine: more CPU cores, more RAM, faster SSDs, higher-bandwidth NICs. It is the simplest scaling strategy because it requires zero application changes.

**Advantages:**
- No code changes needed. The application remains a single process with a single address space.
- No network coordination overhead. All communication is within the machine (CPU cache, memory bus, local disk).
- No consistency or distributed transaction problems.
- Licensing costs often scale linearly with hardware (for per-CPU licenses, this can be cheaper than per-instance cloud costs).

**Disadvantages:**
- **Hardware ceiling.** A single x86 server cannot exceed ~64 TB RAM (current max) or ~448 CPU cores. There is no way to vertically scale past the largest machine a vendor sells.
- **Cost super-linearity.** High-end machines cost exponentially more than commodity servers. A 2x machine rarely costs 2x — it costs 3-5x because of premium hardware.
- **Single point of failure.** If the machine dies, the system is down. Redundancy requires moving to horizontal scaling anyway.
- **Planned downtime.** Upgrades require reboots (RAM, CPU replacement). This violates availability SLAs.

Vertical scaling is appropriate for legacy applications, stateful systems that cannot be easily partitioned, and workloads under ~100K QPS where the hardware ceiling is not a concern.

---

### Horizontal Scaling (Scale Out)

Horizontal scaling adds more machines to the pool. Each machine handles a fraction of the workload. The system's total capacity is N × (capacity of a single node) minus coordination overhead.

**Advantages:**
- **Near-linear scalability** if the workload is partitionable. Load balancers + stateless app servers scale almost perfectly to hundreds of thousands of nodes.
- **Commodity hardware.** Use cheap off-the-shelf servers or cloud instances. A cluster of 100 small machines is often cheaper than one large machine with the same total capacity.
- **Fault isolation.** A single machine failure drops capacity by 1/N, not to zero. Redundancy is built in.
- **Rolling upgrades.** Deploy code to a subset of nodes at a time. Zero-downtime deployments are standard.

**Disadvantages:**
- **Coordination overhead.** Distributed consensus, consistent hashing, and data replication all consume CPU and network bandwidth, reducing effective throughput per node.
- **Operational complexity.** Managing 100 servers is harder than managing 1. Requires orchestration (Kubernetes, Nomad), monitoring, logging aggregation, and automated deployment pipelines.
- **State management.** Sessions, caches, and databases must be externalized to shared services (Redis, databases) rather than stored on the application server.

**Shared-Nothing Architecture.** Each node is independent; it owns its CPU, memory, and disk, and shares nothing with other nodes. Communication happens exclusively over the network. This is the dominant pattern for horizontally scaled systems because it eliminates resource contention and allows independent failure.

---

### L4 vs L7 Load Balancing

Load balancers operate at different layers of the OSI model:

| Criterion | L4 (Transport) | L7 (Application) |
|-----------|----------------|------------------|
| OSI Layer | 4 — TCP/UDP | 7 — HTTP/HTTPS, gRPC |
| Routing basis | IP address, port, protocol | URL path, HTTP headers, cookies, request body |
| Performance | Very high (kernel-level forwarding, minimal overhead) | Moderate (must parse and potentially modify traffic) |
| TLS termination | No (passes encrypted traffic through) | Yes (terminates TLS, can inspect plaintext) |
| Sticky sessions | Source IP hash only | Cookie-based affinity |
| Content-aware routing | Impossible | Full (route /api/v1 to one pool, /static to another) |
| Health checks | TCP port probes | Application-aware (check HTTP 200, response time) |
| Complexity | Low | Higher (protocol-specific configuration) |
| Typical latency | ~microseconds | ~milliseconds |
| Example tools | HAProxy in TCP mode, AWS NLB | NGINX, HAProxy in HTTP mode, AWS ALB, GCP HTTP LB |

**L4 is faster but dumber.** It forwards TCP segments without understanding the application protocol. This is appropriate for:
- Database traffic (MySQL, PostgreSQL direct connections)
- Non-HTTP protocols (gRPC without proxy termination, WebSocket without sticky sessions)
- Any scenario where raw throughput is the primary concern

**L7 is slower but smarter.** It can:
- Route requests to different backend pools based on URL path (microservices routing)
- Modify headers (add X-Forwarded-For, rewrite paths)
- Terminate TLS, offloading encryption work from application servers
- Implement sophisticated health checks (check for specific response content)
- Compress responses before sending to clients

**Comparison rule of thumb:** Use L4 unless you need L7 features. The performance difference is significant at high throughput (100K+ QPS), and the simpler configuration of L4 reduces operational risk.

---

### Load Balancing Algorithms

#### Round Robin

Requests are distributed to servers in sequential order. Server 1 → Server 2 → Server 3 → Server 1.

```
Servers: [A, B, C]
Request 1 → A, Request 2 → B, Request 3 → C, Request 4 → A, ...
```

**Pros:** Simple, deterministic, no per-request computation overhead.
**Cons:** Does not account for variable request cost, variable server capacity, or current server load.
**Use when:** All servers have identical capacity and all requests cost the same.

#### Weighted Round Robin

Each server gets a weight proportional to its capacity. A server with weight 2 receives twice as many requests as a server with weight 1.

```
Servers: [A(weight 3), B(weight 1), C(weight 2)]
Allocation pattern: A, A, A, B, C, C, A, A, A, B, C, C, ...
```

**Pros:** Handles heterogeneous server capacity.
**Cons:** Still does not account for dynamic load fluctuations.

#### Least Connections

The load balancer sends each new request to the server with the fewest currently active connections.

$$P(server_i) = 1 / \min(connections_1, connections_2, ..., connections_n)$$

**Pros:** Adapts to variable request duration. A server stuck processing a long-running request stops receiving new ones.
**Cons:** Requires the load balancer to track connection counts per server (stateful). Susceptible to oscillation under rapid load changes.
**Use when:** Request processing times vary significantly. The classic choice for database connection pooling layers.

#### Least Response Time

Requests are sent to the server with the lowest current average response time. This combines connection count information with actual performance data.

**Pros:** Adapts to both load and server performance degradation (e.g., a server with a failing disk becomes slower, receives fewer requests).
**Cons:** More computation per request. Response time sampling adds latency. Can create feedback loops (a slightly faster server gets more requests, becomes slower, loses requests, oscillates).
**Use when:** Server performance varies over time and monitoring is already in place.

#### IP Hash

The client's IP address (or a portion of it) is hashed, and the hash value determines the server:

$$server_index = hash(client\_IP) \bmod N$$

where N is the number of servers.

**Pros:** Ensures the same client (from the same IP) is always sent to the same server. Provides "poor man's sticky sessions" without requiring cookies.
**Cons:** If a server is added or removed, the hash modulus changes — most clients remap to different servers. This is the **remapping problem.** IP addresses behind NAT or proxy (corporate networks, mobile carriers) all hash to the same server, causing uneven distribution.

#### Consistent Hashing

A hash ring technique that minimizes remapping when the server pool changes:

$$server = \text{nearest clockwise server from } hash(key)$$

Each server is placed on a ring of hash values (e.g., 0 to 2^32-1). Each request key is hashed to a point on the ring, and the request is sent to the nearest clockwise server.

When a server is added or removed, only the keys whose hash falls between the old server's position and the new server's position remap. Expected fraction of keys remapped: 1/N where N is the number of servers.

**Virtual nodes:** Each physical server is represented by multiple points on the ring to improve load distribution (mitigates the "hot partition" problem where a single server's hash position ends up with an unfair share of the ring).

**Pros:** Minimal remapping on topology changes. Uniform distribution with virtual nodes.
**Cons:** Complexity. Still vulnerable to server overload if a particular key range attracts disproportionate traffic.
**Use when:** The server pool changes frequently (auto-scaling) or for distributed caching systems (Memcached, Redis Cluster).

#### Random

Select a server uniformly at random. With a sufficient number of requests, this approximates round-robin distribution.

**Pros:** Stateless (no connection tracking required). Simple to implement.
**Cons:** No awareness of server load or capacity. In practice performs nearly identically to round-robin for large N but has higher variance for small N.

---

### Reverse Proxy

A reverse proxy sits in front of application servers, accepting client requests and forwarding them to backend servers on behalf of the client. Unlike a forward proxy (which acts on behalf of clients), a reverse proxy acts on behalf of servers.

**NGINX configuration example:**

```nginx
http {
    upstream backend {
        least_conn;
        server app1.internal:8080 weight=3;
        server app2.internal:8080 weight=2;
        server app3.internal:8080 weight=1;
    }

    server {
        listen 443 ssl;
        server_name api.example.com;

        ssl_certificate /etc/ssl/certs/example.crt;
        ssl_certificate_key /etc/ssl/private/example.key;

        location /api/ {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location /static/ {
            root /var/www/static;
            expires 30d;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

**HAProxy configuration example:**

```haproxy
frontend http-in
    bind *:80
    bind *:443 ssl crt /etc/ssl/certs/haproxy.pem
    default_backend app_servers

backend app_servers
    balance leastconn
    option httpchk GET /health HTTP/1.1\r\nHost:\ healthcheck
    server app1 10.0.1.1:8080 check inter 5s fall 3 rise 2
    server app2 10.0.1.2:8080 check inter 5s fall 3 rise 2
    server app3 10.0.1.3:8080 check inter 5s fall 3 rise 2
```

**Key features of reverse proxies:**
- **SSL termination:** Decrypt HTTPS traffic once at the proxy, send plain HTTP internally. Reduces per-application TLS overhead.
- **Compression:** gzip/brotli compression of responses before sending to clients. Offloads CPU-intensive compression.
- **Static file serving:** Serve static assets directly from disk without hitting the application server.
- **Request buffering:** Buffer slow client uploads (the proxy accepts the full request quickly, then forwards to the backend at full speed).
- **Response caching:** Cache common responses to reduce backend load.

---

### DNS Load Balancing

DNS load balancing distributes traffic by returning different IP addresses for the same domain name.

#### Round-Robin DNS

The DNS server returns A/AAAA records in a rotating order:

```
query: api.example.com
response: TTL=300, records=[203.0.113.1, 203.0.113.2, 203.0.113.3]

Next query: api.example.com
response: TTL=300, records=[203.0.113.2, 203.0.113.3, 203.0.113.1]
```

Clients typically use the first IP address returned, so traffic distributes roughly evenly.

**Problems:** DNS caching by ISPs and clients defeats distribution (a busy resolver caches the result for the full TTL, sending all its traffic to one IP). There is no server load awareness — a dead server is still returned until the TTL expires and the DNS record is updated.

#### Weighted DNS

Each IP address is assigned a weight. The DNS server returns addresses proportional to their weights:

```
api.example.com  203.0.113.1  weight=10
api.example.com  203.0.113.2  weight=20
api.example.com  203.0.113.3  weight=10
```

Server B receives twice the traffic of A or C. Useful for heterogeneous data center capacity.

#### Geographic DNS (GeoDNS)

The DNS server examines the client's source IP (EDNS0 Client Subnet extension or resolver IP) and returns the IP of the nearest data center:

```
Client in London → returns eu-west-1 IP (10.1.1.1)
Client in Tokyo → returns ap-northeast-1 IP (10.3.1.1)
Client in New York → returns us-east-1 IP (10.2.1.1)
```

**Pros:** Reduces latency by directing users to the closest region. Allows geo-specific content restrictions.
**Cons:** Requires geo-IP databases, which are imperfect. Some ISPs route DNS queries through resolvers in other regions.

---

### Global Server Load Balancing (GSLB)

GSLB distributes traffic across data centers or cloud regions. It is the cross-region counterpart of local load balancing.

#### Active-Active

All data centers serve traffic simultaneously. Traffic is distributed based on geographic proximity, capacity, or health.

```
┌───────────────────────────────────────┐
│              Global DNS                │
│        (Route53 / Cloud DNS)           │
└──────┬────────────────────┬────────────┘
       │                    │
       ▼                    ▼
┌──────────────┐   ┌──────────────┐
│  us-east-1   │   │  eu-west-1   │
│  (active)    │   │  (active)    │
│  60% traffic │   │  40% traffic │
└──────────────┘   └──────────────┘
```

**Pros:** Higher total capacity, lower latency for globally distributed users.
**Cons:** Requires cross-region data replication, which adds latency and consistency challenges.

#### Active-Passive

One region serves all traffic; the other region is on standby. On failure, traffic is rerouted to the passive region.

```
Normal operation:
┌──────────────┐   ┌──────────────┐
│  us-east-1   │   │  eu-west-1   │
│  (active)    │   │  (passive)   │
│  100% traffic│   │   0 traffic  │
└──────────────┘   └──────────────┘

After failover:
┌──────────────┐   ┌──────────────┐
│  us-east-1   │   │  eu-west-1   │
│  (down)      │   │  (active)    │
│   0 traffic  │   │  100% traffic│
└──────────────┘   └──────────────┘
```

**Pros:** Simpler (no cross-region replication for state; passive region can lag), cheaper (half the infrastructure is idle in normal operation).
**Cons:** Wasted capacity, slower failover (may need to warm caches), data loss risk if passive region replication lags.

#### Anycast Routing

The same IP address is announced from multiple data centers via BGP. Internet routers send traffic to the closest (topologically) data center.

```
IP 203.0.113.1 announced from:
  - us-east-1 (AS 12345)
  - eu-west-1 (AS 12346)
  - ap-northeast-1 (AS 12347)

Traffic from London reaches eu-west-1 (shortest AS-path).
Traffic from Mumbai reaches ap-northeast-1.
```

**Pros:** Transparent to clients (single IP address). Automatic failover (BGP withdraws the route if a data center goes down).
**Cons:** BGP convergence can take minutes. Traffic distribution is not controllable (it follows internet routing policies, not your capacity plan). Harder to debug.

---

### Health Checks

Load balancers must distinguish healthy from unhealthy servers. Two approaches:

#### Passive Health Checks

The load balancer monitors real traffic to detect failures. If a server returns N consecutive errors (5xx, connection refused, timeout), it is marked unhealthy.

```
Failure counter:
  server A: 3 consecutive 502 errors → mark unhealthy
  server A: first successful response after unhealthy → mark healthy
```

**Pros:** Zero overhead (uses existing traffic). Detects application-layer failures.
**Cons:** May serve errors during the detection window. Slow to detect failures if traffic is low.

#### Active Health Checks

The load balancer periodically sends synthetic requests (health probes) to each server:

```
Every 5 seconds, send GET /health to each server.
- HTTP 200 + body "ok" → healthy
- HTTP 5xx or timeout after 2s → unhealthy
- After 3 consecutive failures → remove from pool
- After 2 consecutive successes → return to pool
```

**Pros:** Fast failure detection (independent of traffic volume). Proactive — catches failures before users see errors.
**Cons:** Extra load on servers (must serve health requests). May over-flag servers under transient load spikes (require generous failure thresholds).

---

### Auto-Scaling

Auto-scaling automatically adjusts the number of compute instances based on demand. Two approaches:

#### Reactive Scaling

React to measured metrics:

```
Scale-up condition: CPU > 70% for 5 consecutive minutes
Scale-down condition: CPU < 30% for 10 consecutive minutes
Cooldown: 3 minutes between scaling actions
```

**Metrics commonly used:**
- CPU utilization (%)
- Memory utilization (%)
- Request queue depth (requests waiting in the LB)
- Request count per second
- Custom metric (e.g., Kafka consumer lag)

**Cooldown:** A stabilization period after a scaling action to prevent flapping (rapid scale-up/down cycles). New instances take 30-120 seconds to warm up (boot, deploy code, connect to dependencies). During cooldown, no additional scaling actions fire.

#### Predictive Scaling

Use machine learning to forecast demand and provision capacity ahead of time. Services like AWS Forecast or GCP Autoscaler learn daily and weekly patterns.

```
Prediction: Monday 9:00-9:30 AM will see 3x normal traffic
Action: proactively scale from 10 to 30 instances at 8:45 AM
```

**Pros:** Handles flash crowds better than reactive (which is always behind the curve).
**Cons:** Requires historical data. May waste money if predictions are inaccurate.

**Scale-up/down strategy:** Scale up fast (add 2x capacity on each scale-up), scale down slow (remove 1/3 at a time). This protects against cascading failures where a rapid scale-down followed by a load spike triggers another scale-up cycle.

---

### The Sticky Sessions Problem

Sticky sessions (session affinity) means routing a client to the same application server for the duration of their session. This seems natural but is fundamentally incompatible with resilient horizontal scaling.

**Why sticky sessions are bad:**
- If the server dies, the session is lost even if other servers are healthy.
- During rolling deployments, sessions pin clients to old servers, complicating drain cycles.
- Auto-scaling is less effective because adding servers only helps for new sessions, not existing ones.
- Load distribution becomes uneven (some servers accumulate long-lived sessions).

**Solution: External Session Store**

Store session state in a shared, highly available data store:

```
┌─────────┐   ┌─────────┐   ┌─────────┐
│ Client 1 │   │ Client 2 │   │ Client 3 │
└────┬────┘   └────┬────┘   └────┬────┘
     │             │             │
     ▼             ▼             ▼
┌───────────────────────────────────────┐
│           Load Balancer               │
│         (round-robin or LC)           │
└──┬──────────┬──────────┬──────────────┘
   │          │          │
   ▼          ▼          ▼
┌─────┐  ┌─────┐  ┌─────┐
│ S1  │  │ S2  │  │ S3  │  ← all stateless
└─┬───┘  └─┬───┘  └─┬───┘
  │        │        │
  └────────┼────────┘
           ▼
    ┌───────────┐
    │  Redis    │  ← session store
    │ (cluster) │
    └───────────┘
```

Any server can serve any request by reading/writing session data to Redis. This makes every request independent and enables true horizontal scaling.

---

### Real-World Systems

**AWS Elastic Load Balancer (ELB).** Three tiers: Classic Load Balancer (L4/L7 hybrid, legacy), Application Load Balancer (L7, HTTP/HTTPS, content-based routing, path patterns, host-based routing), Network Load Balancer (L4, ultra-low latency, TCP/UDP/TLS, handles millions of requests/second). ALB supports weighted target groups, stickiness via cookies, native WebSocket support.

**Google Cloud Load Balancer.** Unlike AWS, GCLB is a single global anycast front-end — you create one load balancer that serves traffic across all regions. Traffic enters the Google Front End (GFE) at the nearest edge point-of-presence (POP) and is routed over Google's private network (not the public internet) to the backend. This eliminates public internet variability.

**Cloudflare Load Balancing.** Monitors origin server health, pools, geo-steering. Cloudflare uses Anycast for its own IP addresses — all 200+ data centers announce the same IPs, and traffic naturally goes to the nearest one. Their load balancer sits on top of this Anycast layer.

---

## Examples

### Example 1: Designing Load Balancing for a Global E-Commerce Site

**Scenario:** An e-commerce platform with users in North America, Europe, and Asia. 200M monthly visits. Black Friday traffic is 10x normal.

**DNS layer:** GeoDNS routes users to the nearest regional cluster. us-east-1 for NA, eu-west-1 for EU, ap-southeast-1 for Asia.

**Regional GSLB:** Each region has an active-passive pair of availability zones. us-east-1a (active), us-east-1b (passive). DNS health checks monitor region health.

**Local load balancer:** GCP HTTP LB (global) or AWS ALB per region. L7 routing: `/shop/*` to web servers, `/api/*` to API servers, `/static/*` directly to CDN.

**Auto-scaling:** Predictive scaling for Black Friday (train model on last year's data + current trend). Reactive scaling for normal operations. Scale-up cooldown: 60 seconds. Scale-down cooldown: 300 seconds.

**Session management:** No sticky sessions. Cart data stored in Redis cluster (with persistence to DynamoDB for durability).

### Example 2: Consistent Hashing for a Distributed Cache

**Problem:** A Memcached cluster with 10 nodes. Adding one node should not invalidate all cached keys.

**Solution — Consistent Hash Ring:**
- Hash space: 0 to 2^32-1 (circle)
- Each server placed at 100 virtual node positions (random points on the ring)
- Each key `cache_key` = `hash("product:12345")` → find nearest clockwise server
- Adding a cache node: add 100 virtual node positions. Only keys mapping to those ring intervals remap. Expected remap: ~1/11 of keys (not 10/11 as with naive hash).

```python
import hashlib
import bisect

class ConsistentHashRing:
    def __init__(self, servers=None, virtual_nodes=100):
        self.virtual_nodes = virtual_nodes
        self.ring = []
        self.nodes = {}
        if servers:
            for server in servers:
                self.add_node(server)

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node_id):
        for i in range(self.virtual_nodes):
            hash_val = self._hash(f"{node_id}:{i}")
            bisect.insort(self.ring, (hash_val, node_id))
        self.nodes[node_id] = True

    def remove_node(self, node_id):
        for i in range(self.virtual_nodes):
            hash_val = self._hash(f"{node_id}:{i}")
            self.ring.remove((hash_val, node_id))
        del self.nodes[node_id]

    def get_node(self, key):
        if not self.ring:
            return None
        hash_val = self._hash(key)
        idx = bisect.bisect_left(self.ring, (hash_val, ''))
        if idx == len(self.ring):
            idx = 0
        return self.ring[idx][1]
```

---

## Summary

- Vertical scaling adds resources to one machine; horizontal scaling adds more machines. Horizontal is the dominant pattern for internet-scale systems.
- L4 load balancing operates on TCP/UDP (fast, protocol-agnostic); L7 operates on HTTP/HTTPS (slow, content-aware).
- Seven load-balancing algorithms exist: Round Robin, Weighted Round Robin, Least Connections, Least Response Time, IP Hash, Consistent Hash, and Random. Choose based on request-cost variability and server-pool dynamics.
- DNS load balancing (round-robin, weighted, geographic) provides simple cross-region distribution but is limited by caching and slow propagation.
- GSLB operates at the cross-region level using active-active, active-passive, or anycast patterns.
- Active health checks probe periodically; passive health checks monitor live traffic. Most systems use both.
- Reactive auto-scaling uses immediate metrics; predictive auto-scaling uses ML-based forecasts. Cooldown prevents flapping.
- Sticky sessions are an anti-pattern. Externalize session state to Redis or similar.
- Consistent hashing minimizes remapping when the server pool changes, making it essential for distributed caching.

---

## Exercises

### Review Questions (4-5)

1. Explain why horizontal scaling is generally preferred over vertical scaling for internet systems, and describe one scenario where vertical scaling is the better choice.

2. What is the difference between L4 and L7 load balancing? Describe a specific use case where L4 is required.

3. Compare active-active and active-passive GSLB configurations. What is the trade-off between them?

4. Explain the "thundering herd" problem that can occur with health checks during a failover event and how to prevent it.

5. How does consistent hashing solve the remapping problem? What role do virtual nodes play?

### Application Problems (3-4)

1. A photo-sharing app has 500M users. Each user uploads 1 photo/day (avg 3 MB). Currently uses 50 application servers (each handles 500 RPS). Compute the current load and determine how many additional servers are needed if traffic doubles.

2. Design a health check strategy for a microservice with 5 replicas. The service has a startup warmup time of 30 seconds and occasional GC pauses of 2 seconds. Choose active vs passive, thresholds, and interval.

3. A WebSocket server farm handles 100K persistent connections. The connections are mostly idle but occasionally burst-heavy. Propose a load-balancing algorithm and justify why Least Connections is (or is not) appropriate.

4. Configure an NGINX reverse proxy that routes `/api/users/*` to a user-service pool, `/api/search/*` to a search-service pool, and `/static/*` directly from disk. Use least_conn for user-service and IP_hash for search-service. Write the config.

### Challenge Problem (1)

You are designing a multi-region gaming platform that hosts real-time multiplayer matches. 50M DAU, each match lasts 10-30 minutes with 10-100 players. Players must be grouped by latency (all players in a match should have <100ms to the server). The platform must handle peak traffic (weekend evenings) at 5x average.

1. Design a three-tier load-balancing architecture: DNS → regional → per-match. Specify the algorithm at each tier and justify each choice.
2. The match server is stateful (player positions, game state). How do you handle persistence and failover without sticky sessions? Propose an architecture.
3. During a regional outage, the active data center in us-east-1 goes down. A player in a match in progress is disconnected. Describe how the passive region takes over and what happens to the in-flight match. What data loss, if any, is acceptable?
4. Compute auto-scaling parameters: target CPU, cooldown times, scale-up factor (add N or double?), scale-down factor. Base your reasoning on match duration and server boot-up time (assume 90 seconds to warm a game server).
5. Critique your own design: which component fails first at 10x traffic? How would you re-architect?
