# DAY 22 - ADVANCED SYSTEM DESIGN & MICROSERVICES

## Core Learning Objectives

By mastering Day 22, you will understand:
- Microservices architecture design and principles
- Service decomposition and domain-driven design
- Inter-service communication patterns (sync and async)
- Resilience patterns (circuit breaker, retry, timeout)
- Distributed transactions and saga pattern
- API gateway design and routing
- Service discovery and load balancing
- API design principles and REST/gRPC patterns
- Security patterns in distributed systems
- DevOps practices and deployment strategies
- Performance optimization and scalability techniques
- Monitoring, logging, and observability

---

## Module 1: MICROSERVICES FUNDAMENTALS

### 1.1 What Are Microservices?

**Definition**: Architecture style where application is built as collection of small, independent services that communicate over network.

**Characteristics**:
- Single Responsibility: Each service handles one business domain
- Independently Deployable: Can deploy without other services
- Loosely Coupled: Services don't depend on each other
- Highly Cohesive: Related code together in one service

**Example Structure**:
```
Monolith → Microservices
┌─────────────────────┐    ┌──────────┐  ┌──────────┐  ┌──────────┐
│  User Module        │    │ User     │  │ Order    │  │ Payment  │
│  Order Module       │ => │ Service  │  │ Service  │  │ Service  │
│  Payment Module     │    └──────────┘  └──────────┘  └──────────┘
│  Inventory Module   │    ┌──────────┐  ┌──────────┐
└─────────────────────┘    │ Inventory│  │ Shipping │
                           │ Service  │  │ Service  │
                           └──────────┘  └──────────┘
```

### 1.2 Microservices vs Monoliths

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| Deployment | All together | Independent |
| Scaling | Scale everything | Scale by service |
| Technology | Same tech stack | Mix technologies |
| Complexity | Simple at start | Complex |
| Team | Single team | Multiple teams |
| Performance | Direct calls (fast) | Network calls (slower) |
| Data Management | Single DB | Multiple DBs |

**Choose Microservices When**:
- Large team (> 20 engineers)
- Multiple independent features
- Different scaling needs per service
- Need technology diversity
- High availability critical

**Choose Monolith When**:
- Small team (< 10 engineers)
- Tightly coupled features
- Same scaling needs
- Performance critical (no network calls)
- Still building MVP

### 1.3 Service Decomposition

**Domain-Driven Design (DDD)**:
- Bounded contexts = microservice boundaries
- Ubiquitous language for each domain
- Anti-corruption layer between services

**Example E-commerce Decomposition**:
```
Orders Service:
  - Responsibility: Create, manage, track orders
  - API: POST /orders, GET /orders/{id}
  - Database: Order DB

Users Service:
  - Responsibility: User profiles, authentication
  - API: POST /users, GET /users/{id}
  - Database: Users DB

Payments Service:
  - Responsibility: Process, track payments
  - API: POST /payments, GET /payments/{id}
  - Database: Payments DB

Inventory Service:
  - Responsibility: Stock levels, updates
  - API: GET /inventory/{sku}, PUT /inventory/{sku}
  - Database: Inventory DB
```

**How to Decompose**:
1. Identify business domains
2. Find natural boundaries
3. Group related functionality
4. Ensure minimal coupling
5. Verify team organization aligns

---

## Module 2: SERVICE COMMUNICATION

### 2.1 Synchronous Communication (Request-Response)

**REST/HTTP**:
```
Client → [HTTP GET /users/123] → User Service → Response {id: 123, name: "John"}

Advantages:
- Simple, well-understood
- Immediate response
- Browser-friendly

Disadvantages:
- Blocking calls
- Cascading failures
- Tightly coupled
```

**gRPC**:
```
Uses protocol buffers + HTTP/2
Better performance than REST (up to 7x faster)
Streaming support
Strong typing
```

### 2.2 Asynchronous Communication

**Message Brokers** (RabbitMQ, Kafka):
```
Service A publishes event:
"OrderPlaced" event → Message Broker → Queue

Service B subscribes:
Message Broker → Service B → Process event
No waiting, no blocking
```

**Advantages**:
- Loose coupling
- Resilience (broker handles retries)
- Scalability (multiple subscribers)
- Eventual consistency

**Disadvantages**:
- Harder to debug
- Eventual consistency
- Complex error handling

**Choose Sync When**:
- Need immediate response
- Request-response pattern
- Simple queries

**Choose Async When**:
- Event-driven workflow
- Decoupling important
- Can handle eventual consistency
- Heavy processing

### 2.3 Hybrid Approach

Most systems use both:
- Synchronous: User queries, immediate results
- Asynchronous: Background tasks, event processing

Example: User creates order
```
1. POST /orders (Sync) → Creates order, returns ID immediately
2. OrderCreated event (Async) → Publishes event
3. Inventory service subscribes → Updates stock asynchronously
4. Payment service subscribes → Processes payment asynchronously
```

---

## Module 3: RESILIENCE PATTERNS

### 3.1 Circuit Breaker

**Problem**: Service A calls Service B (down) → Hangs → Cascades to all callers of A

**Solution**: Circuit breaker tracks failures
```
CLOSED (Normal):
  ✓ All requests pass through
  ✓ If failures > threshold → OPEN

OPEN (Fail Fast):
  ✗ All requests rejected immediately
  ✗ After timeout → HALF_OPEN

HALF_OPEN (Recovery):
  ~ Allow some requests through
  ~ If success → CLOSED
  ~ If failure → OPEN
```

### 3.2 Retry & Backoff

**Fixed Retry**: 
```
try {
  callService()
} catch (Exception e) {
  Thread.sleep(1000) // 1 second
  retry()
}

Problem: Retry storms (all clients retry simultaneously)
```

**Exponential Backoff**:
```
Attempt 1: wait 1s
Attempt 2: wait 2s
Attempt 3: wait 4s
Attempt 4: wait 8s

With jitter (random):
Attempt 1: wait 1s ± random
Attempt 2: wait 2s ± random
```

### 3.3 Timeout

```
Service call timeout = 30s
If no response in 30s → fail immediately
Don't wait forever
```

### 3.4 Bulkhead Pattern

**Problem**: One slow endpoint uses all threads → All requests blocked

**Solution**: Separate thread pools per endpoint
```
Thread Pool 1 (10 threads): Order service
Thread Pool 2 (10 threads): User service
Thread Pool 3 (10 threads): Payment service

If payment slow, doesn't affect orders
```

### 3.5 Rate Limiting

**Token Bucket**:
```
Bucket: 100 tokens, refill 10/second
Request: takes 1 token
If no tokens: reject request

Prevents: Cascading failures, DOS attacks
```

---

## Module 4: DISTRIBUTED TRANSACTIONS

### 4.1 Problem: ACID Across Services

**Transaction**: User creates order
```
1. Create order record (Orders DB)
2. Deduct inventory (Inventory DB)
3. Process payment (Payments DB)

If step 2 fails after step 1 → Inconsistent state
How to rollback step 1 if in different service?
```

### 4.2 Solution: Saga Pattern

**Choreography** (Event-driven):
```
OrderService: Create order, publish OrderCreated
InventoryService: Hear OrderCreated, deduct stock, publish StockDeducted
PaymentService: Hear StockDeducted, process payment, publish PaymentProcessed

If PaymentProcessed fails:
PaymentService: Publish PaymentFailed
InventoryService: Hear PaymentFailed, refund stock
OrderService: Hear PaymentFailed, cancel order
```

**Orchestration** (Centralized):
```
SagaOrchestrator:
  1. Send CreateOrder to OrderService
  2. Wait for OrderCreated
  3. Send DeductStock to InventoryService
  4. Wait for StockDeducted
  5. Send ProcessPayment to PaymentService
  6. If PaymentFailed: Send Compensations
```

**Advantages of Saga**:
- No distributed 2-phase commit
- Supports eventual consistency
- Better scalability

**Disadvantages**:
- Complex error handling
- Compensations must be idempotent
- Hard to debug

### 4.3 Compensating Transactions

```
Step: Create order
Compensation: Cancel order

Step: Deduct stock
Compensation: Refund stock

Step: Process payment
Compensation: Refund payment

If any step fails, execute compensations in reverse order
```

---

## Module 5: API GATEWAY

### 5.1 Purpose

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
   ┌───▼──────────────┐
   │  API Gateway     │
   │  - Routing       │
   │  - Auth          │
   │  - Rate Limit    │
   │  - Transform     │
   └───┬────┬────┬────┘
       │    │    │
   ┌───▼────▼────▼────┐
   │ Service 1, 2, 3  │
   └──────────────────┘
```

### 5.2 Responsibilities

1. **Routing**: /users → User Service, /orders → Order Service
2. **Authentication**: Validate JWT, pass to services
3. **Rate Limiting**: Prevent abuse
4. **Request Transformation**: Convert format
5. **Response Aggregation**: Combine multiple service responses
6. **Logging & Monitoring**: Centralized visibility

### 5.3 Patterns

**Backend for Frontend (BFF)**:
```
Separate gateways for mobile vs web
Mobile gateway: Optimize for mobile (less data)
Web gateway: Optimize for web (more features)
```

---

## Module 6: SERVICE DISCOVERY

**Problem**: Services move (new instances, different ports, hosts)
```
How does Service A find Service B's current address?
```

**Solution**: Service Discovery
```
Service Registry (Eureka, Consul, etcd):
  Service B: Register at http://service-b-host:port
  
Service A: 
  1. Query registry: "Where is Service B?"
  2. Registry: "Service B at http://host:port"
  3. Call Service B
```

**Patterns**:

1. **Client-Side Discovery**:
   - Client queries registry
   - Client has load balancing logic
   - Example: Eureka with Netflix clients

2. **Server-Side Discovery**:
   - Load balancer queries registry
   - Client calls load balancer
   - Example: Kubernetes service discovery

---

## Module 7: OBSERVABILITY

### 7.1 Three Pillars

**Logging**:
```
Every request logs: timestamp, service, duration, error
Centralized logging (ELK stack): Elasticsearch, Logstash, Kibana
```

**Metrics**:
```
Request rate, error rate, latency
CPU, memory, disk usage
Business metrics (orders/sec, revenue/hour)
Collect with Prometheus, visualize with Grafana
```

**Tracing**:
```
Request flows through 5 services
Correlation ID tracks entire request
Each service logs with correlation ID
Can reconstruct full request path
Tools: Jaeger, Zipkin
```

### 7.2 Importance in Microservices

```
Single service: Easy to debug (logs on one machine)
10 services: Hard to debug (spread across 10 machines)

Observability allows:
- Find which service is slow
- Trace errors through services
- Understand performance bottlenecks
- Detect anomalies
```

---

## Module 8: DEPLOYMENT STRATEGIES

### 8.1 Blue-Green Deployment

```
Blue (Current) Version 1.0 ← Gets traffic
Green (New) Version 2.0 ← No traffic

1. Deploy V2.0 to Green
2. Test Green thoroughly
3. Switch traffic: Blue → Green
4. Keep Blue as rollback

Advantage: Zero downtime, instant rollback
```

### 8.2 Canary Release

```
V1.0: Gets 99% traffic
V2.0: Gets 1% traffic

Monitor error rate, latency
If V2.0 good: Gradually increase to 5%, 10%, etc.
If V2.0 bad: Rollback immediately

Advantage: Detect issues in production with minimal blast radius
```

### 8.3 Rolling Update

```
5 instances of service

1. Stop instance 1, deploy new version
2. Wait for health checks
3. Stop instance 2, deploy new version
4. ... repeat until all updated

Advantage: No downtime, gradual rollout
Disadvantage: Can be slow, version mix
```

---

## Module 9: MONITORING & ALERTING

### 9.1 Key Metrics to Monitor

```
Availability: Service up time (target: 99.9% = 8.7 hours downtime/year)
Latency: Response time (target: p95 < 200ms, p99 < 500ms)
Error Rate: % of failed requests (target: < 0.1%)
Throughput: Requests per second (capacity planning)
Resources: CPU, memory, disk (optimization)
```

### 9.2 Alerting Rules

```
Alert if:
- Error rate > 1%
- Latency p95 > 500ms
- Service down
- CPU > 80%
- Disk > 90%

Alert destinations: PagerDuty, Slack, SMS
```

---

## Interview Tips for System Design

### 1. Ask Questions First
- Users? Traffic? Geographic distribution?
- Data volume? Consistency needs?
- Availability requirements?

### 2. Start with Requirements
- Functional: What features?
- Non-functional: Scale, latency, consistency?

### 3. High-Level Design
- Main components
- Data flow
- Communication patterns

### 4. Deep Dive (if time)
- Database choice
- Scaling strategy
- Fault handling
- Monitoring

### 5. Always Discuss Tradeoffs
- Sync vs Async
- Strong vs Eventual consistency
- Monolith vs Microservices
- Cache vs Accuracy

### 6. Common Scenarios

**Design Instagram Feed**:
- Services: User, Post, Feed, Search
- Communication: Async for new posts
- Caching: Cache popular posts
- Scaling: Shard by user

**Design Uber**:
- Services: User, Ride, Payment, Matching
- Real-time: WebSocket for ride updates
- Geo: Spatial DB for location
- Consistency: Eventual for pricing

**Design Twitter**:
- Services: User, Tweet, Timeline, Search
- Async: Event stream for new tweets
- Caching: Cache popular tweets
- Load: Handle billions of tweets

---

## Common Mistakes

❌ Start with microservices immediately (premature)
✓ Start with monolith, split when needed

❌ Synchronous communication everywhere
✓ Use async for events and background jobs

❌ Ignore observability
✓ Log, trace, monitor from day 1

❌ Skip API versioning
✓ Plan for API evolution

❌ No circuit breaker
✓ Add resilience patterns

❌ Shared database across services
✓ Each service owns its data

❌ No deployment strategy
✓ Use blue-green or canary

❌ Tight coupling in service contracts
✓ Loose coupling with versioning

---

## Key Takeaways

1. **Microservices = Distributed Systems**
   - All distributed system challenges apply
   - Network is unreliable
   - Consistency is eventual
   - Failures happen

2. **Choose Communication Carefully**
   - Sync = Simple but coupled
   - Async = Complex but loose
   - Use both appropriately

3. **Add Resilience**
   - Circuit breaker, retry, timeout
   - Bulkhead, rate limiting
   - Prevent cascading failures

4. **Handle Distributed Transactions**
   - Saga pattern with compensations
   - Eventual consistency

5. **Invest in Observability**
   - Logging, metrics, tracing
   - Essential for debugging

6. **Plan Deployments**
   - Blue-green, canary, rolling
   - Zero downtime strategies

7. **Not Always Microservices**
   - Monolith better for small teams
   - Complexity tradeoff real
   - Start simple, scale when needed

---

**MASTERY ACHIEVED**: Day 22 complete. You can now design and build scalable distributed systems with microservices architecture.

