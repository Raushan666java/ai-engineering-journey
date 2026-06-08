# Day 59 — System Design: Distributed Load Balancing

## Architecture Layers

**L4 Load Balancing (Transport Layer)**
```
Client → L4 LB (TCP/UDP) → Backend Servers
```
- Pros: High performance, protocol-agnostic, low latency
- Cons: No application-level routing, limited health checks
- Examples: AWS NLB, HAProxy in TCP mode, IPVS

**L7 Load Balancing (Application Layer)**
```
Client → L7 LB (HTTP/gRPC) → Backend Services
```
- Pros: Content-based routing, SSL termination, caching
- Cons: Higher latency, more CPU intensive
- Examples: AWS ALB, Nginx, Envoy, Traefik

## Distributed Systems Patterns

**1. Client-Side Load Balancing**
```
Client (with LB library) → Service Registry → Backend Servers
```
- Used in: gRPC, Spring Cloud, Netflix Ribbon
- Pros: No centralized bottleneck, low latency
- Cons: Client complexity, harder to update logic

**2. Service Mesh (Sidecar Pattern)**
```
App → Sidecar Proxy (Envoy) → Sidecar Proxy → App
                ↓                      ↓
         Control Plane (Istio/Linkerd)
```
- Pros: Language-agnostic, centralized policy, observability
- Cons: Increased complexity, latency overhead
- Features: Circuit breaking, retries, mTLS, telemetry

**3. DNS-Based Load Balancing**
```
Client → DNS → Returns multiple IPs → Round-robin at DNS level
```
- Pros: Simple, widely supported
- Cons: No health awareness, DNS caching issues, slow failover

## Consistent Hashing in Practice

**Redis Cluster**
```java
// Redis uses 16384 hash slots
slot = CRC16(key) % 16384
// Map slots to nodes: [0-5460] → Node A, [5461-10922] → Node B, etc.
```

**Cassandra**
```
// Uses Murmur3 hash
token = murmur3(key)
// Virtual nodes (vnodes): Each node owns 256 tokens by default
```

**Memcached (libmemcached)**
```
// Ketama consistent hashing algorithm
// Uses MD5, 160 virtual nodes per server
```

## Handling Node Failures

**Replication + Consistent Hashing**
```
Primary: ConsistentHash(key) → Node A
Replica: ConsistentHash(key + ":replica") → Node B
```

**Bounded Load Consistent Hashing**
- Limit each node to at most (1 + ε) × average load
- Prevents hotspots from skewed key distribution
- Used by Google Maglev load balancer

## Implementation Patterns

**Weighted Consistent Hashing**
```java
// Give more virtual nodes to higher-capacity servers
for (int i = 0; i < capacity * virtualNodeMultiplier; i++) {
    ring.put(hash(node.id + "#" + i), node);
}
```

**Jump Consistent Hash** (Google)
```java
// O(ln n) computation, zero memory overhead
int jumpConsistentHash(long key, int numBuckets) {
    int b = -1, j = 0;
    while (j < numBuckets) {
        b = j;
        key = key * 2862933555777941757L + 1;
        j = (int)((b + 1) / ((key >> 33) + 1));
    }
    return b;
}
```

## Monitoring & Operations

**Key Metrics**
- Request distribution variance (σ/μ)
- P99 latency per backend
- Connection pool utilization
- Health check success rate
- Rebalancing frequency

**Auto-Scaling Integration**
```
Scale-out: Add nodes → Consistent hash redistributes load
Scale-in: Remove nodes → Minimal key movement
Health: Auto-remove failed nodes from ring
```

**Graceful Degradation**
- Circuit breaker: Stop routing to failing nodes
- Fallback: Route to secondary data center
- Admission control: Reject traffic before overload

## Real-World Examples

**CDN (Content Delivery Network)**
```
User → DNS → Edge PoP (consistent hash on URL)
     → If miss, fetch from origin
```

**Database Sharding**
```
userID → Shard = ConsistentHash(userID)
     → Each shard is replicated (primary + replicas)
```

**API Gateway**
```
Request → Gateway → Consistent hash on API key
       → Rate limiter (per-key buckets on same node)
       → Backend service
```
