# DAY 20: QUICK REFERENCE GUIDE
## System Design & Microservices Cheat Sheet

---

## LOAD BALANCING ALGORITHMS

### 1. Round Robin
```java
Server getServer() {
    return servers[currentIndex++ % servers.length];
}
```
**Use:** Equal load distribution
**Complexity:** O(1)
**Pros:** Simple, fair distribution
**Cons:** Ignores server capacity

### 2. Weighted Round Robin
```java
int totalWeight = 0;
for (Server s : servers) {
    totalWeight += s.weight;
}
int randomValue = random() % totalWeight;
// Find server for randomValue
```
**Use:** Servers with different capacities
**Complexity:** O(n) or O(log n) with preprocessing
**Pros:** Account for different capacities
**Cons:** Slower than simple round robin

### 3. Least Connections
```java
Server selected = servers[0];
for (Server s : servers) {
    if (s.connectionCount < selected.connectionCount) {
        selected = s;
    }
}
```
**Use:** Long-lived connections
**Complexity:** O(n)
**Pros:** Balances active connections
**Cons:** Slower for many servers

### 4. IP Hash
```java
int hash = clientIP.hashCode();
return servers[hash % servers.length];
```
**Use:** Session persistence
**Complexity:** O(1)
**Pros:** Client always routed to same server
**Cons:** Uneven load if keys correlated

---

## CACHING PATTERNS

### Cache-Aside (Lazy Loading)
```
Check cache → if miss → fetch DB → store in cache
```
**Pros:** Simple, only caches accessed data
**Cons:** Cache miss latency, stale data possible

### Write-Through
```
Write cache → then write DB (wait for both)
```
**Pros:** Data always consistent
**Cons:** Write latency doubled

### Write-Behind (Write-Back)
```
Write cache → return to client → async write DB
```
**Pros:** Fast writes, good for writes
**Cons:** Data loss risk, eventual consistency

### TTL (Time-To-Live)
```java
long expiresAt = System.currentTimeMillis() + ttlMs;
```
**Use:** Prevent stale data
**Best:** Combine with event-based invalidation

---

## CIRCUIT BREAKER STATES

```
CLOSED (Normal)
   ↓ (Failures exceed threshold)
OPEN (Reject immediately)
   ↓ (Timeout expires)
HALF_OPEN (Test recovery)
   ↓
CLOSED or OPEN
```

**Configuration:**
- Failure threshold: 5 consecutive failures
- Timeout: 30 seconds
- Success threshold (half-open): 2 successes

---

## DATABASE SHARDING

### Range-Based Sharding
```
ShardID = hashKey.hashCode() % numShards
```
**Pros:** Simple range queries
**Cons:** Uneven distribution

### Hash-Based Sharding
```
ShardID = hash(key) % numShards
```
**Pros:** Even distribution
**Cons:** Range queries require scanning all shards

### Directory-Based Sharding
```
Map<Key, ShardID> directory
```
**Pros:** Flexible, can rebalance
**Cons:** Directory lookup overhead

### Consistent Hashing
```
KeyPosition = hash(key)
ServerPosition = findNextServerPosition(KeyPosition)
```
**Pros:** Minimal redistribution on add/remove
**Cons:** More complex implementation

---

## RATE LIMITING ALGORITHMS

### Token Bucket
```
Tokens per second: rate
Bucket capacity: rate * burstSeconds
Each request: consume 1 token
Refill: rate tokens per second
```
**Pros:** Handles bursts, configurable rate
**Cons:** Needs timer for refills

### Sliding Window Counter
```
Record timestamp of each request
Count requests in last window_size seconds
If count >= limit, reject
```
**Pros:** Accurate rate limiting
**Cons:** Memory overhead

### Fixed Window
```
Reset counter every fixed interval
Count requests in current window
```
**Pros:** Simple, low memory
**Cons:** Uneven at window boundaries

---

## HTTP STATUS CODES

### Success (2xx)
- **200 OK**: Request succeeded
- **201 Created**: Resource created
- **202 Accepted**: Request queued
- **204 No Content**: Success, no content to return

### Redirect (3xx)
- **301 Moved Permanently**: Permanent redirect
- **302 Found**: Temporary redirect
- **304 Not Modified**: Use cached version

### Client Error (4xx)
- **400 Bad Request**: Invalid request format
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Authenticated but not authorized
- **404 Not Found**: Resource doesn't exist
- **429 Too Many Requests**: Rate limit exceeded

### Server Error (5xx)
- **500 Internal Server Error**: Unexpected error
- **502 Bad Gateway**: Gateway error
- **503 Service Unavailable**: Service temporarily down
- **504 Gateway Timeout**: Response timeout

---

## API VERSIONING STRATEGIES

### 1. URL Path
```
/api/v1/users
/api/v2/users
```
**Pros:** Clear, multiple versions simultaneously
**Cons:** Code duplication

### 2. Query Parameter
```
/users?version=2
/users?v=2
```
**Pros:** Single URL
**Cons:** Easy to forget version

### 3. Header
```
Accept: application/vnd.api+v2+json
X-API-Version: 2
```
**Pros:** Cleaner URLs
**Cons:** Less discoverable

### 4. Subdomain
```
v1.api.example.com
v2.api.example.com
```
**Pros:** Clean separation
**Cons:** Infrastructure complexity

---

## PAGINATION STRATEGIES

### Offset-Based
```
/users?offset=20&limit=10
```
**Pros:** Simple, familiar
**Cons:** Slow for large offsets, unstable with real-time data

### Cursor-Based
```
/users?cursor=eyJpZCI6IDEwMH0&limit=10
```
**Pros:** Efficient, stable with real-time data
**Cons:** Cursor must be maintained

### Keyset (Seek Method)
```
/users?after_id=100&limit=10
```
**Pros:** Very efficient
**Cons:** Only forward-backward navigation

---

## DISTRIBUTED LOCKING

### Optimistic Locking
```java
while (true) {
    version = readVersion(key);
    data = readData(key);
    modifiedData = modify(data);
    if (tryUpdate(key, modifiedData, version)) {
        break; // Success
    }
    // Retry
}
```
**Best:** Low contention
**Cons:** Retry overhead under high contention

### Pessimistic Locking
```java
acquireLock(key);
try {
    data = readData(key);
    modifiedData = modify(data);
    writeData(key, modifiedData);
} finally {
    releaseLock(key);
}
```
**Best:** High contention
**Cons:** Lock contention, potential deadlocks

---

## TIMEOUT PATTERNS

```java
// Timeout with Future
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<String> future = executor.submit(() -> callService());

try {
    String result = future.get(5, TimeUnit.SECONDS);
} catch (TimeoutException e) {
    // Handle timeout
}
```

**Recommended timeouts:**
- API calls: 5-30 seconds
- Database queries: 1-10 seconds
- Cache lookups: 100-500 ms

---

## RETRY STRATEGY

```java
int maxRetries = 3;
long initialBackoff = 100;
double multiplier = 2.0;

for (int attempt = 0; attempt < maxRetries; attempt++) {
    try {
        return callService();
    } catch (Exception e) {
        if (attempt == maxRetries - 1) throw e;
        long backoff = initialBackoff * (long) Math.pow(multiplier, attempt);
        Thread.sleep(backoff);
    }
}
```

**Backoff calculation:**
- Attempt 1: 100 ms
- Attempt 2: 200 ms
- Attempt 3: 400 ms
- Prevents thundering herd

---

## MONITORING METRICS

### Request Metrics
```
Requests per second (RPS)
Average response time
p50, p95, p99 latency
Error rate
```

### Resource Metrics
```
CPU utilization
Memory usage
Disk I/O
Network I/O
```

### Business Metrics
```
Conversion rate
User engagement
Revenue
Churn rate
```

---

## COMMON LATENCY BENCHMARKS

| Operation | Latency |
|-----------|---------|
| CPU register access | 0.3 ns |
| L1 cache access | 0.9 ns |
| L2 cache access | 2.8 ns |
| Main memory access | 9.6 ns |
| SSD random read | 1 μs |
| SSD sequential read | 0.1 μs |
| Disk random read | 2 ms |
| Network round trip (same datacenter) | 0.5 ms |
| Network round trip (across US) | 50 ms |

---

## MICROSERVICES ANTI-PATTERNS

❌ **Too Many Services**
Too granular, hard to manage

❌ **Shared Database**
Tight coupling, scaling issues

❌ **Synchronous Everything**
Cascading failures

❌ **No API Versioning**
Can't evolve independently

❌ **Missing Circuit Breaker**
Cascading failures from failing services

❌ **No Monitoring**
Can't detect issues

---

## MICROSERVICES PATTERNS

✅ **API Gateway**
Single entry point for all requests

✅ **Service Discovery**
Automatic service location

✅ **Event-Driven**
Asynchronous communication

✅ **API Versioning**
Independent evolution

✅ **Circuit Breaker**
Fault isolation

✅ **Monitoring & Tracing**
Visibility into system

---

## GC TUNING TIPS

```java
// Increase heap size
java -Xmx4G -Xms4G App

// Use G1 GC (good for large heaps)
java -XX:+UseG1GC App

// Monitor GC
java -Xmx4G -XX:+PrintGCDetails -XX:+PrintGCDateStamps App

// Reduce object allocation
// Use object pools
// Reuse collections
// Avoid string concatenation in loops
```

---

## MEMORY OPTIMIZATION CHECKLIST

✅ Use StringBuilder for string concatenation  
✅ Implement object pooling for expensive objects  
✅ Choose appropriate collection types  
✅ Set HashMap initial capacity = expectedSize / 0.75  
✅ Use primitive arrays instead of ArrayList<Integer>  
✅ Lazy initialize expensive objects  
✅ Close resources in finally or try-with-resources  
✅ Monitor heap usage regularly  
✅ Profile before optimizing  
✅ Test performance improvements  

---

## SCALABILITY CHECKLIST

✅ Load balance requests across servers  
✅ Cache frequently accessed data  
✅ Use CDN for static content  
✅ Shard databases by key  
✅ Implement circuit breakers  
✅ Use message queues for async work  
✅ Implement rate limiting  
✅ Monitor all services  
✅ Plan for failures  
✅ Document architecture decisions  

---

**Quick lookup guide for system design interviews**
