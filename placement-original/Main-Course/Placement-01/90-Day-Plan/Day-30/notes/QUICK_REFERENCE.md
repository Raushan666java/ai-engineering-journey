# DAY 30: QUICK REFERENCE GUIDE
## Cloud Architecture & Microservices Cheat Sheet

---

## 🎯 **PATTERN SELECTION GUIDE**

### **When to Use Each Pattern**

| Problem | Pattern | When to Use |
|---------|---------|-------------|
| Services can't find each other | Service Discovery | Dynamic cloud environments |
| Single entry point needed | API Gateway | Multiple microservices |
| Service keeps failing | Circuit Breaker | Calling unreliable services |
| Need async communication | Event Bus | Loose coupling required |
| Need complete audit trail | Event Sourcing | Compliance, temporal queries |
| Complex read/write needs | CQRS | Different scaling requirements |
| Distributed transaction | Saga | Multi-service workflows |
| Deploy without downtime | Blue-Green | Critical apps, instant rollback |
| Gradual rollout needed | Canary | High-risk changes, A/B testing |

---

## 📐 **ARCHITECTURE PATTERNS**

### **1. Service Discovery**

```java
// Registration
ServiceRegistry registry = new ServiceRegistry();
registry.register("user-service", 
    new ServiceInstance("id1", "192.168.1.10", 8080));

// Discovery
List<ServiceInstance> instances = registry.discover("user-service");

// Load Balancing
LoadBalancer lb = new RoundRobinStrategy();
ServiceInstance selected = lb.select(instances);
```

**Key Points:**
- ✓ O(1) registration and discovery
- ✓ Heartbeat mechanism for health checks
- ✓ Automatic cleanup of unhealthy instances

---

### **2. API Gateway**

```java
// Setup
APIGateway gateway = new APIGateway();
gateway.addRoute("/users", "http://user-service:8080");
gateway.addFilter(new AuthenticationFilter());
gateway.addFilter(new RateLimitFilter(100, 10.0)); // 100 capacity, 10/sec

// Route Request
Response response = gateway.route(request);
```

**Responsibilities:**
1. Request routing
2. Authentication/Authorization
3. Rate limiting
4. Caching
5. Load balancing
6. Request aggregation

---

### **3. Circuit Breaker**

```java
CircuitBreaker breaker = new CircuitBreaker(
    5,    // failure threshold
    2,    // success threshold
    60    // timeout seconds
);

CompletableFuture<T> result = breaker.execute(() -> 
    CompletableFuture.supplyAsync(() -> serviceCall())
);
```

**State Machine:**
```
CLOSED (normal) --[failures >= 5]--> OPEN (failing)
      ↑                                    |
      |                          [timeout: 60s]
      |                                    ↓
      +--[successes >= 2]-- HALF_OPEN (testing)
```

---

### **4. Event Bus**

```java
EventBus bus = new EventBus();

// Subscribe
bus.subscribe("order.placed", event -> {
    System.out.println("Processing: " + event);
});

// Publish
bus.publish("order.placed", 
    new Event("OrderPlaced", orderData));
```

**Best Practices:**
- Use topic-based routing
- Implement dead letter queue
- Handle failures gracefully
- Make handlers idempotent

---

### **5. Event Sourcing**

```java
EventSourcingRepository<Account> repo = new EventSourcingRepository<>();

// Append events
repo.appendEvent(accountId, "AccountOpened", balance);
repo.appendEvent(accountId, "MoneyDeposited", amount);

// Rebuild state
Account account = repo.rebuildState(accountId, 
    Account::new, Account::apply);
```

**Formulas:**
```
Current State = Initial State + ∑(All Events)

Temporal Query = Initial State + ∑(Events until Time T)
```

---

### **6. CQRS**

```java
CQRSSystem<User> system = new CQRSSystem<>();

// Write Model (Commands)
system.registerCommandHandler(CreateUserCommand.class, 
    cmd -> writeModel.createUser(cmd));

// Read Model (Queries)
system.registerQueryHandler(GetUserQuery.class,
    query -> readModel.getUser(query.getUserId()));
```

**Architecture:**
```
Commands → Write Model → Events → Read Model → Queries
            ↓                        ↑
        Event Store          Eventual Consistency
```

---

### **7. Saga Pattern**

```java
Saga saga = new Saga("order-saga");

saga.addStep(new SagaStep(
    "Reserve Inventory",
    () -> inventoryService.reserve(items),      // Action
    () -> inventoryService.release(items)       // Compensation
));

saga.addStep(new SagaStep(
    "Process Payment",
    () -> paymentService.charge(amount),
    () -> paymentService.refund(amount)
));

saga.execute();  // Auto-compensate on failure
```

**Compensation Flow:**
```
Success: Step1 → Step2 → Step3 ✓

Failure: Step1 ✓ → Step2 ✓ → Step3 ✗
         ↓
         Compensate Step2 → Compensate Step1
```

---

### **8. Container Orchestration**

```java
ContainerOrchestrator orchestrator = new ContainerOrchestrator();

// Add nodes
orchestrator.addNode(new Node("node-1", 8192, 4.0));

// Deploy
Deployment deployment = new Deployment(
    "web-app", containerSpec, 3, DeploymentStrategy.ROLLING_UPDATE
);
orchestrator.deploy(deployment);

// Scale
orchestrator.scale("web-app", 5);
```

**Scheduling Algorithm:**
```
1. Filter nodes: availableMemory >= required && availableCPU >= required
2. Select: node with MIN(availableMemory) // Bin packing
3. Allocate resources on selected node
```

---

### **9. Auto-Scaling**

```java
AutoScaler scaler = new AutoScaler(orchestrator);

// Add policy
scaler.addPolicy(new ScalingPolicy(
    "cpu_usage",  // metric name
    70.0,         // target value (%)
    2,            // min replicas
    10,           // max replicas
    Duration.ofMinutes(5)  // cooldown
));

// Report metrics
scaler.reportMetric("cpu_usage", currentCpuUsage);
```

**Scaling Formula:**
```
desired = current × (avgMetricValue / targetValue)
desired = clamp(desired, minReplicas, maxReplicas)
```

---

### **10. Deployment Strategies**

#### **Blue-Green**
```java
BlueGreenDeployer deployer = new BlueGreenDeployer();

deployer.deploy("v2.0");      // Deploy to inactive
deployer.switchTraffic();     // BLUE 0% → GREEN 100%
deployer.rollback();          // Instant rollback if needed
```

#### **Canary**
```java
CanaryDeployer deployer = new CanaryDeployer();

CanaryConfig config = new CanaryConfig(
    List.of(5, 10, 25, 50, 100),    // Traffic steps
    Duration.ofMinutes(1),           // Step duration
    Map.of("error_rate", 1.0)        // Thresholds
);

deployer.deploy("v2.0", config);    // Automatic rollout
```

---

## 🔧 **COMMON ALGORITHMS**

### **Rate Limiting (Token Bucket)**

```java
class TokenBucket {
    int capacity;
    double tokens;
    double refillRate;
    Instant lastRefill;
    
    boolean allowRequest() {
        refill();
        if (tokens >= 1) {
            tokens -= 1;
            return true;
        }
        return false;
    }
    
    void refill() {
        double elapsed = Duration.between(lastRefill, now()).toMillis() / 1000.0;
        tokens = min(capacity, tokens + (elapsed * refillRate));
        lastRefill = now();
    }
}
```

**Formula:**
```
tokens = min(capacity, tokens + (elapsed × tokensPerSecond))
```

---

### **Consistent Hashing**

```java
class ConsistentHashing {
    TreeMap<Integer, String> ring = new TreeMap<>();
    
    void addNode(String node) {
        for (int i = 0; i < 150; i++) {  // Virtual nodes
            int hash = hash(node + i);
            ring.put(hash, node);
        }
    }
    
    String getNode(String key) {
        int hash = hash(key);
        Map.Entry<Integer, String> entry = ring.ceilingEntry(hash);
        return (entry != null) ? entry.getValue() : ring.firstEntry().getValue();
    }
}
```

**Time Complexity:**
- Add Node: O(k log n) where k = virtual nodes
- Get Node: O(log n)

---

### **Exponential Backoff**

```java
long getBackoffDelay(int attempt) {
    long baseDelay = 100;  // ms
    long maxDelay = 30000; // 30 seconds
    
    long delay = baseDelay * (1L << attempt);  // 2^attempt
    delay = Math.min(delay, maxDelay);
    
    // Add jitter (0-25% randomness)
    long jitter = (long) (delay * 0.25 * Math.random());
    return delay + jitter;
}
```

**Delays:**
```
Attempt 1: 100ms  + jitter
Attempt 2: 200ms  + jitter
Attempt 3: 400ms  + jitter
Attempt 4: 800ms  + jitter
Attempt 5: 1600ms + jitter
...
```

---

## 📊 **COMPLEXITY QUICK REFERENCE**

| Operation | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Service Registry - Register | O(1) | O(1) | O(1) | O(n) |
| Service Discovery | O(1) | O(1) | O(1) | - |
| Round Robin Load Balancer | O(1) | O(1) | O(1) | O(1) |
| Least Connections LB | O(n) | O(n) | O(n) | O(n) |
| Consistent Hashing - Add | O(k log n) | O(k log n) | O(k log n) | O(kn) |
| Consistent Hashing - Get | O(log n) | O(log n) | O(log n) | - |
| Rate Limiter (Token Bucket) | O(1) | O(1) | O(1) | O(m) |
| Circuit Breaker - Execute | O(1) | O(1) | O(1) | O(1) |
| Event Bus - Subscribe | O(1) | O(1) | O(1) | O(m) |
| Event Bus - Publish | O(m) | O(m) | O(m) | - |
| Event Sourcing - Append | O(1) | O(1) | O(1) | O(e) |
| Event Sourcing - Rebuild | O(e) | O(e) | O(e) | O(1) |
| Container Scheduler | O(n) | O(n) | O(n) | O(n) |
| Auto-Scaler Evaluate | O(h) | O(h) | O(h) | O(h) |

*n = nodes/services, m = subscribers/clients, e = events, h = history, k = virtual nodes*

---

## 🎯 **DECISION TREES**

### **Communication Pattern Selection**

```
Need immediate response?
├─ Yes → Synchronous (REST, gRPC)
│  └─ High throughput? → gRPC
│  └─ Simple CRUD? → REST
└─ No → Asynchronous (Message Queue)
   └─ Need ordering? → Kafka
   └─ Simple pub-sub? → RabbitMQ
```

### **Deployment Strategy Selection**

```
Can afford 2x resources?
├─ Yes → Need instant rollback?
│  ├─ Yes → Blue-Green
│  └─ No → Canary (safer)
└─ No → Rolling Update
```

### **Data Consistency Model**

```
Need immediate consistency?
├─ Yes → Synchronous transactions
│  └─ Single service → ACID
│  └─ Multiple services → Avoid or use 2PC (not recommended)
└─ No → Eventual consistency
   └─ Complex workflow? → Saga
   └─ Audit trail needed? → Event Sourcing
   └─ Read/Write optimization? → CQRS
```

---

## 📋 **BEST PRACTICES CHECKLIST**

### **Microservices Design**
- [ ] Each service has single responsibility
- [ ] Services communicate via well-defined APIs
- [ ] Database per service
- [ ] Independent deployment capability
- [ ] Service discovery implemented
- [ ] API Gateway for external access

### **Resilience**
- [ ] Circuit breakers on external calls
- [ ] Retry logic with exponential backoff
- [ ] Timeouts configured
- [ ] Fallback responses defined
- [ ] Bulkheads for resource isolation
- [ ] Health checks implemented

### **Observability**
- [ ] Centralized logging
- [ ] Distributed tracing
- [ ] Metrics collection (RED/USE)
- [ ] Alerting configured
- [ ] Dashboards created

### **Security**
- [ ] Authentication/Authorization
- [ ] mTLS for service-to-service
- [ ] API rate limiting
- [ ] Input validation
- [ ] Secrets management

### **Performance**
- [ ] Caching strategy defined
- [ ] Database optimization
- [ ] Async processing where possible
- [ ] Load testing completed
- [ ] Auto-scaling configured

---

## 🚨 **COMMON PITFALLS**

### **❌ Don't**
1. Create distributed monolith (tight coupling)
2. Ignore network failures (always fail gracefully)
3. Skip circuit breakers on external calls
4. Use distributed transactions (2PC)
5. Share databases between services
6. Overlook monitoring and alerting
7. Deploy without health checks
8. Ignore idempotency
9. Forget about eventual consistency
10. Skip load testing

### **✅ Do**
1. Design for failure
2. Implement observability from day one
3. Use asynchronous communication where possible
4. Apply saga pattern for distributed transactions
5. Implement proper service discovery
6. Use API gateway for external access
7. Configure auto-scaling
8. Test resilience (chaos engineering)
9. Monitor key metrics
10. Automate deployments

---

## 📖 **INTERVIEW FORMULAS**

### **System Design**
```
Capacity = QPS × Data Size × Replication Factor
Throughput = Bandwidth / Packet Size
Latency = Network + Processing + Queueing
Availability = MTBF / (MTBF + MTTR)
```

### **Scalability**
```
Horizontal Scaling = N × Single Instance Capacity
Vertical Scaling = Limited by hardware

Load per instance = Total Load / Number of Instances
```

### **CAP Theorem**
```
Can only choose 2 of 3:
- Consistency (all nodes see same data)
- Availability (system always responds)
- Partition Tolerance (works despite network failures)

Common choices:
- CA: Single-node databases (not distributed)
- CP: MongoDB, HBase (sacrifice availability)
- AP: Cassandra, DynamoDB (sacrifice consistency)
```

---

## 🎓 **KEY INTERVIEW TALKING POINTS**

### **Microservices Benefits**
1. Independent scaling
2. Technology flexibility (polyglot)
3. Fault isolation
4. Faster development cycles
5. Team autonomy

### **Microservices Challenges**
1. Distributed system complexity
2. Data consistency
3. Testing difficulty
4. Operational overhead
5. Network latency

### **Circuit Breaker**
- Prevents cascading failures
- Fails fast (don't wait for timeout)
- Gives failing service time to recover
- States: CLOSED → OPEN → HALF_OPEN → CLOSED

### **Event Sourcing**
- Store events, not state
- Complete audit trail
- Temporal queries (time travel)
- Event replay capability
- Trade-off: storage overhead, query complexity

### **CQRS**
- Separate read and write models
- Independent scaling
- Optimized queries (denormalized)
- Trade-off: eventual consistency, complexity

### **Saga Pattern**
- Distributed transaction management
- Compensating transactions
- Orchestration (centralized) vs Choreography (decentralized)
- Trade-off: eventual consistency, complexity

---

## 📚 **QUICK COMMANDS**

### **Run Code**
```bash
# Compile
javac MicroservicesArchitecture.java
javac EventDrivenArchitecture.java
javac CloudDeploymentPatterns.java
javac Day30ComprehensivePractice.java
javac Day30InterviewQA.java

# Run
java MicroservicesArchitecture
java EventDrivenArchitecture
java CloudDeploymentPatterns
java Day30ComprehensivePractice
java Day30InterviewQA
```

---

## 🎯 **EXAM TIPS**

1. **Always mention trade-offs** (no silver bullet)
2. **Use real-world examples** (Netflix, Uber, Amazon)
3. **Draw diagrams** (architecture, sequence, state)
4. **Discuss alternatives** (show you know multiple approaches)
5. **Consider scale** (100 users vs 100 million)
6. **Think about failure scenarios** (what can go wrong?)
7. **Mention monitoring** (how to observe system health)

---

*Quick Reference for Day 30: Cloud Architecture & Microservices*  
*Keep this handy during interviews and practice sessions!*
