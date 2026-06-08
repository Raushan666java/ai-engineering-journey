# DAY 22 - QUICK REFERENCE GUIDE

## Fast Lookup

### Microservices Characteristics
```
✓ Single responsibility
✓ Independent deployment
✓ Loose coupling
✓ High cohesion
✓ Owned by small team (2-pizza team)
```

### When to Use Microservices
```
YES:
- Large team (> 20 engineers)
- Multiple independent features
- Different scaling needs
- Technology diversity needed
- High availability critical

NO:
- Small team (< 10)
- Tightly coupled features
- Same scaling needs
- Performance critical (direct calls)
- Still building MVP
```

### Communication Patterns

**SYNCHRONOUS (Request-Response)**
```
REST:
- Simple, well-understood
- No special tooling
- ~200ms latency typical
- Use for: Queries, simple mutations

gRPC:
- 7x faster than REST
- Streaming support
- Binary protocol
- Use for: High throughput, internal services
```

**ASYNCHRONOUS (Event-Driven)**
```
Advantages:
- Loose coupling
- Scalability
- Resilience

Disadvantages:
- Eventual consistency
- Harder to debug
- Complex error handling

Tools: RabbitMQ, Kafka, AWS SNS/SQS
```

**HYBRID**
```
Use BOTH:
- Sync: Queries, immediate response needed
- Async: Events, background processing

Example:
POST /orders → Sync (returns order ID immediately)
OrderCreated event → Async (inventory updates)
```

### Resilience Patterns

**CIRCUIT BREAKER**
```
States:
CLOSED (normal) → 
  OPEN (failures threshold) → 
    HALF_OPEN (recovery test) → 
      CLOSED (recovered)

Failure threshold: 5 errors
Success threshold: 3 successes
Timeout: 60 seconds before retry
```

**RETRY WITH BACKOFF**
```
Fixed Delay:
  delay = 1 second (always)

Linear Backoff:
  attempt 1: 1s
  attempt 2: 2s
  attempt 3: 3s

Exponential Backoff:
  attempt 1: 1s
  attempt 2: 2s
  attempt 3: 4s
  attempt 4: 8s

With Jitter:
  exponential + random factor
  Prevents retry storms
```

**TIMEOUT**
```
Service call timeout = 30 seconds
No waiting forever
Fail fast
```

**BULKHEAD**
```
Separate thread pools per service
Service A: 10 threads
Service B: 10 threads
Prevent cascade failures
```

**RATE LIMITING**
```
Token Bucket:
  - 100 tokens
  - Refill 10/second
  - Each request = 1 token
  - No tokens = reject

Prevents: DOS, cascades, overload
```

### Saga Pattern (Distributed Transactions)

**CHOREOGRAPHY (Event-Driven)**
```
OrderService: Create order
  ↓ OrderCreated event
InventoryService: Deduct stock
  ↓ StockDeducted event
PaymentService: Process payment
  ↓ PaymentProcessed event
NotificationService: Send confirmation

On failure:
PaymentFailed event triggers compensations
```

**ORCHESTRATION (Centralized)**
```
SagaOrchestrator:
1. CreateOrder → OrderService
2. Wait OrderCreated
3. DeductStock → InventoryService
4. Wait StockDeducted
5. ProcessPayment → PaymentService
6. If failed: Execute compensations
```

**COMPENSATING TRANSACTIONS**
```
Create order    ← Compensation: Cancel order
Deduct stock    ← Compensation: Refund stock
Process payment ← Compensation: Refund payment

On failure: Execute compensations in reverse
```

### API Gateway Responsibilities

```
✓ Routing
  - /users → User Service
  - /orders → Order Service

✓ Authentication
  - Validate JWT
  - Pass to services

✓ Rate Limiting
  - Prevent abuse
  - Per user/API key

✓ Request Transformation
  - Format conversion
  - Protocol conversion

✓ Response Aggregation
  - Combine multiple service responses
  - GraphQL federation

✓ Logging & Monitoring
  - Centralized visibility
  - Request tracing

✓ Caching
  - Cache response
  - Reduce downstream load
```

### Service Discovery

**CLIENT-SIDE**
```
1. Service registers with registry (Eureka, Consul)
2. Client queries registry
3. Client calls service directly
4. Client does load balancing

Example: Netflix Eureka
```

**SERVER-SIDE**
```
1. Service registers with registry
2. Client calls load balancer
3. Load balancer queries registry
4. Load balancer calls service
5. Load balancer does load balancing

Example: Kubernetes services
```

### Load Balancing Algorithms

```
ROUND-ROBIN:
  Instance 1 → Instance 2 → Instance 3 → Instance 1
  Simple, even distribution

LEAST-CONNECTIONS:
  Send to instance with fewest active connections
  Good for long-lived connections

WEIGHTED:
  Instance 1 (10%) → Instance 2 (30%) → Instance 3 (60%)
  Based on capacity

IP-HASH:
  Hash(client_ip) % instances
  Sticky sessions, consistent

RANDOM:
  Random instance
  Simple, distributed load
```

### Health Checking

```
Types:
- Liveness: Is service running?
  Response: 200 OK
  Frequency: Every 10-30 seconds
  
- Readiness: Can service handle traffic?
  Response: 200 OK
  Frequency: Every 5-10 seconds

Actions on failure:
- Remove from load balancer
- Restart instance
- Create new instance
```

### Observability Checklist

**LOGGING**
```
✓ Request ID (correlation)
✓ Service name
✓ Duration
✓ Status (success/error)
✓ Error message & stack trace
✓ User ID
✓ Key parameters

Centralize: ELK (Elasticsearch, Logstash, Kibana)
```

**METRICS**
```
✓ Request rate (requests/second)
✓ Error rate (errors/second)
✓ Latency (p50, p95, p99)
✓ CPU, memory, disk
✓ Business metrics (orders/sec, revenue)

Tools: Prometheus (collection), Grafana (visualization)
```

**TRACING**
```
✓ Correlation ID → Track entire request
✓ Service name → Which service
✓ Duration → How long in each service
✓ Dependencies → Service call order

Tools: Jaeger, Zipkin, AWS X-Ray
```

### Deployment Strategies

**BLUE-GREEN**
```
Blue (v1.0) ← Traffic
Green (v2.0) ← No traffic, testing

1. Deploy v2.0 to Green
2. Test Green
3. Switch traffic: Blue → Green
4. Keep Blue as rollback

Downtime: 0
Rollback: Instant
```

**CANARY**
```
v1.0: 99% traffic
v2.0: 1% traffic

Monitor error rate, latency
Gradually increase v2.0 percentage
If issues: Rollback v2.0

Downtime: 0
Risk: Minimal
Detection: Early
```

**ROLLING**
```
5 instances total

Instance 1: Stop, deploy v2.0, start
Instance 2: Stop, deploy v2.0, start
...
Instance 5: Stop, deploy v2.0, start

Downtime: 0 (always 80% available)
Speed: Slow (each one takes time)
Rollback: Complex (mixed versions)
```

### Consistency Models

**STRONG CONSISTENCY**
```
Write → All replicas updated → Read
Always read latest data
Good for: Financial systems
Cost: Lower availability, latency
```

**EVENTUAL CONSISTENCY**
```
Write → Master updated → Propagate to replicas → Read
Read might see stale data temporarily
Good for: Social media, user feeds
Cost: Stale data possible
```

**CAUSAL CONSISTENCY**
```
Related operations see consistent state
Unrelated operations may see stale state
Good for: Comments on post
Cost: Medium
```

**SESSION CONSISTENCY**
```
Single user sees consistent state
Different users may see different versions
Good for: Shopping cart
Cost: Low
```

### Data Management Patterns

**DATABASE PER SERVICE**
```
Each service owns its database
No shared database
Strong boundaries
Harder to query across services

✓ Service independence
✗ No JOIN operations
```

**SAGA PATTERN**
```
For distributed transactions
Compensating transactions on failure
```

**CQRS (Command Query Responsibility Segregation)**
```
Separate models for writes and reads
Write model: Normalized (normal DB)
Read model: Denormalized (optimized for queries)

Sync: Write to write DB, then update read DB

Benefits: Optimize independently
Costs: Consistency lag, complexity
```

**EVENT SOURCING**
```
Store events instead of state
State = replay of all events
Audit trail built-in
```

### Common Interview Questions

```
Q: Monolith or Microservices?
A: Depends on team size, feature coupling, scaling needs

Q: How to handle cascading failures?
A: Circuit breaker, bulkhead, timeout, rate limiting

Q: How to ensure consistency across services?
A: Saga pattern with compensations, eventual consistency

Q: How to debug issues?
A: Centralized logging, distributed tracing, metrics

Q: How to deploy without downtime?
A: Blue-green, canary, rolling updates

Q: How to handle service discovery?
A: Client-side (Eureka) or server-side (K8s)

Q: Sync or async communication?
A: Sync for queries, async for events

Q: How to scale?
A: Horizontal scaling (add more instances), caching, CDN

Q: How to monitor?
A: Metrics (Prometheus), tracing (Jaeger), logging (ELK)

Q: How to handle partial failures?
A: Timeouts, retries, circuit breaker, fallbacks
```

### Architecture Decision Matrix

| Decision | Option A | Option B | Best For |
|----------|----------|----------|----------|
| Coupling | Sync (tight) | Async (loose) | Loose → Async |
| Scale | Vertical | Horizontal | Large → Horizontal |
| DB | Shared | Per-service | Ownership → Per-service |
| Consistency | Strong | Eventual | Critical → Strong |
| Deployment | Blue-green | Canary | Safe → Blue-green |
| Load Balance | Client-side | Server-side | K8s → Server-side |

### Performance Optimization

```
CACHING:
- Cache popular data
- TTL: 1 hour typical
- Invalidate on update

CDN:
- Cache static content
- Serve from edge
- Reduce latency

DATABASE:
- Index on queries
- Denormalize if needed
- Read replicas

ASYNC:
- Don't block on slow operations
- Process in background

COMPRESSION:
- Compress response
- Reduce bandwidth

BATCHING:
- Combine multiple requests
- Reduce roundtrips
```

### Scaling Strategies

```
HORIZONTAL:
- Add more instances
- Load balance traffic
- Works for stateless services

VERTICAL:
- Upgrade CPU/RAM
- Limited by hardware
- Single point of failure

CACHING:
- Cache hot data
- Reduce downstream load

DATABASE:
- Replication (read scaling)
- Sharding (write scaling)
- Partitioning

CDN:
- Static content
- Geographic distribution
```

### Production Checklist

```
□ Logging configured (correlation IDs)
□ Metrics configured (Prometheus)
□ Tracing configured (Jaeger)
□ Alerts configured
□ Health checks implemented
□ Circuit breaker added
□ Timeout configured
□ Rate limiting added
□ API versioning planned
□ Documentation updated
□ Security review done
□ Load testing done
□ Rollback plan ready
□ Monitoring dashboard ready
```

---

**Remember**: Microservices complexity is real. Start simple, add complexity when needed.

