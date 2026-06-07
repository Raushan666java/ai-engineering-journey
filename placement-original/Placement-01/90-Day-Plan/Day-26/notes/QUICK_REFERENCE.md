# DAY 26: QUICK REFERENCE GUIDE
## System Design & Microservices Architecture

---

## 🚀 Pattern Quick Lookup

### Service Registry
```java
// Registration
registry.register(new ServiceInstance("service-id", "host", port));

// Discovery
List<ServiceInstance> instances = registry.getInstances("service-id");
ServiceInstance instance = registry.getInstance("service-id").get();

// Heartbeat
registry.heartbeat("instance-id");
```

### API Gateway
```java
// Add route
gateway.addRoute(new Route("/api/users/{id}", "user-service", "GET")
                    .withAuth()
                    .withRateLimit(100));

// Handle request
Request req = new Request(HttpMethod.GET, "/api/users/123")
                 .withHeader("Authorization", "Bearer token");
Response resp = gateway.handleRequest(req);
```

### Circuit Breaker
```java
// Configuration
CircuitBreakerConfig config = new CircuitBreakerConfig()
    .failureThreshold(5)
    .timeout(60000);

// Execute with protection
CircuitBreaker breaker = new CircuitBreaker("service", config);
String result = breaker.execute(() -> externalService.call());

// With fallback
String result = breaker.executeWithFallback(
    () -> externalService.call(),
    () -> "Fallback response"
);
```

### Saga Pattern
```java
// Orchestration
Saga saga = new Saga("order-123")
    .addStep(new CreateOrderStep(orderId))
    .addStep(new ReserveInventoryStep(productId, quantity))
    .addStep(new ProcessPaymentStep(amount));

boolean success = orchestrator.executeSaga(saga);
```

### Event Sourcing
```java
// Append events
Event event = new BaseEvent("account-1", "MoneyDeposited");
event.data.put("amount", 100);
eventStore.append(event);

// Replay events
double balance = eventStore.replayEvents("account-1", 0.0, (bal, e) -> {
    if (e.getEventType().equals("MoneyDeposited")) {
        return bal + (double)e.getData().get("amount");
    }
    return bal;
});
```

### CQRS
```java
// Command (Write)
CommandHandler.handle(new CreateUserCommand(userId, username, email));

// Query (Read)
UserProjection user = queryHandler.handle(new GetUserQuery(userId));
```

---

## 💾 Distributed Systems Cheat Sheet

### Consistent Hashing
```java
ConsistentHashing<String> ch = new ConsistentHashing<>(150); // virtual nodes

ch.addNode("server-1");
ch.addNode("server-2");
ch.addNode("server-3");

String server = ch.getNode("user:123"); // Find server for key
```

### Distributed Cache
```java
DistributedCache<String, String> cache = new DistributedCache<>(1000);

// Put with TTL
cache.put("key", "value", 5000); // 5 seconds

// Get
Optional<String> value = cache.get("key");

// Subscribe to events
cache.subscribe(event -> {
    System.out.println(event.type + ": " + event.key);
});
```

### Message Queue
```java
// Create topic
mq.createTopic("orders", 3); // 3 partitions

// Publish
mq.publish(new Message("orders", "order-1", "Order data"));

// Subscribe
mq.subscribe("group1", "orders", message -> {
    System.out.println("Received: " + message.value);
});
```

### Distributed Lock
```java
DistributedLock lock = new DistributedLock(5); // 5 instances

// Acquire lock
String token = lock.tryLock("resource-1", 5000); // 5 second TTL

if (token != null) {
    try {
        // Critical section
    } finally {
        lock.unlock("resource-1", token);
    }
}
```

---

## 🔐 API Design Templates

### REST API
```java
Router router = new Router();

// GET endpoint
router.get("/api/users/{id}", req -> {
    String id = req.pathParams.get("id");
    User user = userService.getUser(id);
    return Response.ok(toJSON(user));
});

// POST endpoint
router.post("/api/users", req -> {
    User user = fromJSON(req.body, User.class);
    userService.createUser(user);
    return Response.created(toJSON(user));
});

// PUT endpoint
router.put("/api/users/{id}", req -> {
    String id = req.pathParams.get("id");
    User user = fromJSON(req.body, User.class);
    userService.updateUser(id, user);
    return Response.ok(toJSON(user));
});

// DELETE endpoint
router.delete("/api/users/{id}", req -> {
    String id = req.pathParams.get("id");
    userService.deleteUser(id);
    return new Response(HttpStatus.NO_CONTENT);
});
```

### GraphQL API
```java
Schema schema = new Schema();

// Query resolver
schema.addQuery("user", args -> {
    String userId = (String) args.get("id");
    return userService.getUser(userId);
});

// Mutation resolver
schema.addMutation("createUser", args -> {
    String username = (String) args.get("username");
    return userService.createUser(username);
});

// Execute query
Query query = new Query("query { user }").variable("id", "123");
QueryResult result = schema.execute(query);
```

### JWT Authentication
```java
JWTAuth auth = new JWTAuth();

// Generate token
Token token = auth.generateToken("user-123", "admin");
String tokenStr = token.getToken();

// Validate token
boolean valid = auth.validateToken(tokenStr);

// Get claims
Map<String, Object> claims = Token.parse(tokenStr).getClaims();
```

---

## ⚡ Rate Limiting Quick Start

### Token Bucket
```java
TokenBucketRateLimiter limiter = new TokenBucketRateLimiter(
    10,   // capacity
    2     // refill rate per second
);

boolean allowed = limiter.tryAcquire();
```

### Sliding Window
```java
SlidingWindowRateLimiter limiter = new SlidingWindowRateLimiter(
    5,     // max requests
    1000   // window in ms
);

boolean allowed = limiter.tryAcquire();
```

### Fixed Window
```java
class FixedWindow {
    int count = 0;
    long windowStart = System.currentTimeMillis();
    
    boolean tryAcquire() {
        long now = System.currentTimeMillis();
        if (now - windowStart >= 1000) {
            count = 0;
            windowStart = now;
        }
        return count++ < maxRequests;
    }
}
```

---

## 🔄 Retry Pattern
```java
RetryPolicy retry = new RetryPolicy();
retry.maxAttempts = 3;
retry.initialDelayMs = 100;
retry.backoffMultiplier = 2.0;

String result = retry.execute(() -> {
    return externalService.call();
});
```

---

## 📊 Caching Strategies

### Cache-Aside
```java
Object get(String key) {
    Object value = cache.get(key);
    if (value == null) {
        value = database.get(key);
        cache.put(key, value);
    }
    return value;
}
```

### Write-Through
```java
void put(String key, Object value) {
    cache.put(key, value);
    database.put(key, value);
}
```

### Write-Behind
```java
void put(String key, Object value) {
    cache.put(key, value);
    queue.offer(new WriteOp(key, value)); // Async DB write
}
```

---

## 🎯 System Design Decision Guide

### When to Use Microservices?
**YES:**
- Large team (50+ engineers)
- Independent scaling needed
- Different tech stacks per domain
- Frequent deployments
- Clear bounded contexts

**NO:**
- Small team (<10 engineers)
- Simple application
- Tight coupling between components
- Limited ops experience

### Cache or Not?
**USE CACHE:**
- Read-heavy workload (90%+ reads)
- Data changes infrequently
- Query results are expensive
- Response time critical

**SKIP CACHE:**
- Write-heavy workload
- Data changes frequently
- Simple queries
- Strong consistency required

### Sharding Decision
**SHARD:**
- Data > 100 GB
- Write throughput limited
- Single DB can't handle load
- Clear shard key exists

**DON'T SHARD:**
- Data < 50 GB
- Reads are the bottleneck (use replicas)
- Complex cross-entity queries
- No good shard key

---

## 🔢 Complexity Cheat Sheet

| Pattern | Time | Space | Notes |
|---------|------|-------|-------|
| Service Registry | O(1) | O(n) | n = instances |
| Circuit Breaker | O(1) | O(1) | Per operation |
| Consistent Hashing | O(log n) | O(n×v) | v = virtual nodes |
| Rate Limiting | O(1) | O(w) | w = window size |
| Event Sourcing | O(n) | O(e) | e = events |
| Distributed Lock | O(k) | O(1) | k = instances |

---

## 🎨 Architecture Patterns

### Monolith
```
[UI] → [App Layer] → [Database]
```
**Pros:** Simple, ACID transactions  
**Cons:** Tight coupling, scaling issues

### Microservices
```
[UI] → [API Gateway] → [Service Mesh]
                          ↓
    [Service1] [Service2] [Service3]
        ↓           ↓           ↓
      [DB1]       [DB2]       [DB3]
```
**Pros:** Independent scaling, tech diversity  
**Cons:** Complexity, eventual consistency

### Event-Driven
```
[Service1] → [Event Bus] → [Service2]
                ↓
           [Event Store]
```
**Pros:** Loose coupling, scalability  
**Cons:** Eventual consistency, debugging

---

## 📈 Scalability Strategies

### Horizontal Scaling
```
[Load Balancer]
    ↓
[Server1] [Server2] [Server3] ... [ServerN]
```
- Add more servers
- Stateless services
- Load balancing

### Vertical Scaling
```
[Bigger Server]
- More CPU
- More RAM
- More Disk
```
- Limited by hardware
- Downtime required
- Expensive

### Database Scaling

**Read Replicas:**
```
[Master] ← writes
    ↓
[Slave1] [Slave2] [Slave3] ← reads
```

**Sharding:**
```
[Shard1] [Shard2] [Shard3]
User 1-10K  10K-20K  20K-30K
```

---

## 🔐 Security Checklist

- [ ] HTTPS everywhere
- [ ] API authentication (JWT/OAuth)
- [ ] Rate limiting enabled
- [ ] Input validation
- [ ] SQL injection protection
- [ ] XSS prevention
- [ ] CSRF tokens
- [ ] Secrets in vault
- [ ] Logging (no PII)
- [ ] Regular security audits

---

## 🚨 Common Pitfalls

### 1. No Circuit Breaker
❌ **Problem:** Cascading failures  
✅ **Solution:** Implement circuit breakers

### 2. No Rate Limiting
❌ **Problem:** DDoS vulnerability  
✅ **Solution:** Add rate limiters

### 3. Synchronous Saga
❌ **Problem:** Long request times  
✅ **Solution:** Use async/messaging

### 4. No Caching
❌ **Problem:** High database load  
✅ **Solution:** Multi-level caching

### 5. No Monitoring
❌ **Problem:** Blind to issues  
✅ **Solution:** Metrics, logs, traces

---

## 📱 Real-World Examples

### URL Shortener
```
POST /api/shorten → Generate short code → Store mapping
GET /{code}      → Lookup → Redirect → Track analytics
```

### Rate Limiter
```
Request → Check rate → Allow/Reject
         ↓
    [Redis Counter]
```

### Distributed Cache
```
Request → L1 Cache → L2 Cache → Database
          (Local)    (Redis)
```

---

## ✅ Quick Checklist

### Before Production
- [ ] Load testing done
- [ ] Circuit breakers in place
- [ ] Rate limiting configured
- [ ] Caching implemented
- [ ] Monitoring setup
- [ ] Logging configured
- [ ] Security review done
- [ ] Documentation complete

### Code Review
- [ ] Error handling
- [ ] Timeouts configured
- [ ] Retries with backoff
- [ ] Resources released
- [ ] Thread-safe code
- [ ] No hard-coded values

---

**Use this guide as your quick reference during interviews and implementation!**
