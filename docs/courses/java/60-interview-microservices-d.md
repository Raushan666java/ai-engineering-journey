![Microservices Advanced Topics - Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices-d.png)

## Chapter at a Glance

| Topic | Key Focus | Key Questions |
|-------|----------|--------------|
| Core Concepts | Foundational understanding | Definitions, contrasts, trade-offs |
| Code Examples | Compilable, runnable solutions | Real interview scenarios |
| Best Practices | Production-ready patterns | Pitfalls to avoid |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Code Examples]
    B --> C[Edge Cases]
    C --> D[Best Practices]
```

### Q21: What is a service mesh and when would you use Istio?


> **Pro Tip:** In interviews, always start with the "why" before the "how." Explaining the reasoning behind a design choice is more valuable than reciting syntax.

> **Remember:** Code readability matters in interviews. Write clean, well-structured code with meaningful variable names.


**Answer:**

A service mesh manages service-to-service communication at the infrastructure layer using sidecar proxies. Istio injects an Envoy proxy alongside each pod, handling traffic management, security, and observability without changing application code.

```java
// ── Without service mesh: circuit breaker in application code ──
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;

    @CircuitBreaker(name = "userService", fallbackMethod = "fallback")
    public UserDto getUser(Long id) {
        return userClient.getUser(id);
    }
}

// ── With Istio: circuit breaker moves to infrastructure ──
// application code is clean → no Resilience4j annotations needed
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;

    public UserDto getUser(Long id) {
        return userClient.getUser(id);  // No circuit breaker → Istio handles it
    }
}
```

```yaml
# ── Istio DestinationRule (circuit breaker at mesh level) ──

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: user-service
spec:
  host: user-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 10
        http2MaxRequests: 100
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
---
# ── Istio VirtualService (traffic splitting for canary) ──

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: user-service
spec:
  hosts:
    - user-service
  http:
    - route:
        - destination:
            host: user-service
            subset: v1
          weight: 90
        - destination:
            host: user-service
            subset: v2
          weight: 10
    - timeout: 3s
      retries:
        attempts: 3
        perTryTimeout: 1s
---
# ── Istio PeerAuthentication (mTLS between services) ──

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: default
spec:
  mtls:
    mode: STRICT  # All inter-service traffic must use mTLS
---
# ── Istio AuthorizationPolicy ──

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: order-service-policy
spec:
  selector:
    matchLabels:
      app: order-service
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/default/sa/api-gateway"]
      to:
        - operation:
            methods: ["GET"]
```

Service mesh provides:
- Traffic management (canary, circuit breaker, retries, timeouts → no code changes)
- Security (mTLS, authorization, authentication at the proxy level)
- Observability (automatic metrics, traces, access logs per request)
- Resilience (timeouts, retries, circuit breaking, outlier detection)

Use a service mesh when you have 10+ services and can't add cross-cutting code to each one. Do not use a service mesh for small deployments (3-5 services) → the complexity of managing sidecars and control plane is not worth it.

---

### Q22: How do you implement structured logging and log aggregation?


**Answer:**

Structured logging outputs JSON with consistent fields (service name, trace ID, level, message, timestamp). ELK or Loki aggregates logs from all services into a searchable store.

```java
// ── Logback configuration for structured JSON logging ──
// resources/logback-spring.xml
<configuration>
    <appender name="JSON" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <includeMdc>true</includeMdc>          <!-- Include MDC context -->
            <customFields>{"service":"order-service","environment":"${ENV:-dev}"}</customFields>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="JSON"/>
    </root>
</configuration>

// ── Dependencies ──
// implementation 'net.logstash.logback:logstash-logback-encoder:7.4'

// ── Structured logging in application code ──
@Service
public class OrderService {
    private static final Logger log = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private Tracer tracer;  // Micrometer Tracing

    @Transactional
    public Order createOrder(OrderRequest req) {
        // MDC is automatically populated by Micrometer with traceId and spanId
        MDC.put("user.id", String.valueOf(req.userId()));
        MDC.put("order.total", req.total().toPlainString());

        log.info("Creating order");
        try {
            Order order = orderRepo.save(new Order(req));
            MDC.put("order.id", String.valueOf(order.getId()));
            log.info("Order created successfully");
            return order;
        } catch (Exception e) {
            log.error("Failed to create order", e);
            throw e;
        } finally {
            MDC.remove("user.id");
            MDC.remove("order.total");
            MDC.remove("order.id");
        }
    }
}

// ── JSON output (single log entry) ──
// {
//   "@timestamp": "2026-06-16T12:30:00.000+00:00",
//   "level": "INFO",
//   "service": "order-service",
//   "environment": "prod",
//   "traceId": "abc123def456",
//   "spanId": "span789",
//   "message": "Order created successfully",
//   "mdc": {
//     "user.id": "42",
//     "order.total": "100.00",
//     "order.id": "87"
//   },
//   "logger_name": "com.company.orderservice.OrderService",
//   "thread_name": "http-nio-8080-exec-3"
// }

// ── Loki log query ──
// {service="order-service", level="ERROR"} |= "traceId=abc123def456"
// {service=~"user-service|order-service", level="ERROR"} | json | line_format "{{.message}}"

// ── Logback MDC with auto-cleanup via Filter ──
@Component
public class MdcFilter implements WebFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        return chain.filter(exchange)
            .contextWrite(ctx -> {
                MDC.put("request.path", exchange.getRequest().getPath().value());
                MDC.put("request.method", exchange.getRequest().getMethod().name());
                return ctx;
            })
            .doFinally(signalType -> MDC.clear());
    }
}
```

Best practices:
- Every log entry includes `traceId`, `service`, `level`, and `timestamp`
- Structured JSON means no regex parsing → just query fields
- Never log sensitive data (PII, passwords, tokens) → even in structured logs
- Correlation ID (traceId) connects logs across services during a single request flow
- Use Loki + Grafana for Kubernetes-native log aggregation (no Elasticsearch cluster needed)

---

### Q23: How do you handle database migrations across multiple microservices?


**Answer:**

Each microservice manages its own database migrations independently. Migrations are versioned, sequential, and tested in CI.

```java
// ── Each service has its own Flyway configuration ──
// order-service/src/main/resources/application.yml:
// spring:
//   flyway:
//     enabled: true
//     locations: classpath:db/migration/order
//     baseline-on-migrate: true
//     out-of-order: false
//     validate-on-migrate: true

// user-service/src/main/resources/application.yml:
// spring:
//   flyway:
//     locations: classpath:db/migration/user

// ── Migration files are prefixed by version: V{version}__{description}.sql ──
// order-service:
//   db/migration/order/V1__create_orders_table.sql
//   db/migration/order/V2__add_status_column.sql
//   db/migration/order/V3__add_indexes.sql
//
// user-service:
//   db/migration/user/V1__create_users_table.sql
//   db/migration/user/V2__add_email_verification.sql

// ── V3__add_indexes.sql for order-service ──
-- Create indexes for common queries
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status) WHERE status IN ('PENDING', 'PROCESSING');
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- Backfill existing data if needed
-- UPDATE orders SET status = 'PENDING' WHERE status IS NULL;

// ── Advanced: multi-service migration coordination ──
@Service
public class CoordinatedMigrationService {
    @Autowired private Map<String, DataSource> dataSources;

    @EventListener(ApplicationReadyEvent.class)
    public void runCoordinatedMigrations() {
        dataSources.forEach((serviceName, ds) -> {
            Flyway flyway = Flyway.configure()
                .dataSource(ds)
                .locations("classpath:db/migration/" + serviceName)
                .load();
            flyway.migrate();
            log.info("{} migration complete", serviceName);
        });
    }
}

// ── Backward compatibility: expand-contract for cross-service migrations ──
// Phase 1: Add new column (expand)
-- V1__add_phone_column.sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

// Phase 2: Deploy services to write to both old and new fields
// Phase 3: Backfill data
// Phase 4: Migrate readers to new column
// Phase 5: Drop old column (contract)
-- V2__drop_legacy_phone.sql
ALTER TABLE users DROP COLUMN legacy_phone;
```

CI validation:
```bash
# Validate that migrations are reversible (check for down scripts)

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
for f in db/migration/*/V*.sql; do
  down="${f/V/__down/V}"
  if [ ! -f "${down}" ]; then
    echo "WARNING: No undo migration for $f"
  fi
done

# Check for SQL syntax errors via dry-run

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)
flyway migrate -dryRunOutput=dry-run.sql
```

Each service's migration is independent. Never share migration files across services. Backward-compatible migrations (expand phase) allow zero-downtime deployment.

---

### Q24: How do you implement idempotency in microservices?


**Answer:**

Idempotency ensures that processing the same request multiple times produces the same result. For asynchronous processing, this means deduplication at the consumer.

```java
// ── Idempotency key pattern (for REST endpoints) ──
@RestController
@RequestMapping("/orders")
public class OrderController {

    @PostMapping
    public ResponseEntity<Order> createOrder(
            @RequestBody OrderRequest request,
            @RequestHeader("Idempotency-Key") String idempotencyKey) {

        Order order = orderService.createIdempotent(request, idempotencyKey);
        return ResponseEntity.ok(order);
    }
}

@Service
public class OrderService {
    @Autowired private OrderRepository orderRepo;
    @Autowired private IdempotencyRegistry idempotencyRegistry;

    @Transactional
    public Order createIdempotent(OrderRequest request, String idempotencyKey) {
        // Check if this key was already processed
        return idempotencyRegistry.getProcessedResult(idempotencyKey)
            .orElseGet(() -> {
                Order order = orderRepo.save(new Order(request));
                idempotencyRegistry.record(idempotencyKey, order.getId());
                return order;
            });
    }
}

// ── Idempotency registry (using database for persistence) ──
@Entity
@Table(name = "idempotency_keys")
public class IdempotencyRecord {
    @Id
    private String idempotencyKey;

    private Long resultId;  // The ID of the created resource
    private Instant createdAt;

    // TTL: purge old entries after 24 hours
    public boolean isExpired() {
        return createdAt.isBefore(Instant.now().minus(24, ChronoUnit.HOURS));
    }
}

@Repository
public interface IdempotencyRegistry extends JpaRepository<IdempotencyRecord, String> {
    Optional<IdempotencyRecord> findByIdempotencyKey(String key);

    @Modifying
    @Query("DELETE FROM IdempotencyRecord r WHERE r.createdAt < :cutoff")
    void purgeOlderThan(@Param("cutoff") Instant cutoff);
}

// ── Idempotent Kafka consumer ──
@Service
public class IdempotentConsumer {
    @Autowired private ProcessedEventRepository processedRepo;
    @Autowired private OrderRepository orderRepo;

    @Transactional
    @KafkaListener(topics = "payment.completed")
    public void handlePaymentCompleted(PaymentCompletedEvent event) {
        // Deduplicate by event ID
        if (processedRepo.existsByEventId(event.getEventId())) {
            log.info("Duplicate event: {}, skipping", event.getEventId());
            return;
        }

        Order order = orderRepo.findById(event.getOrderId())
            .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        order.setStatus("PAID");
        orderRepo.save(order);

        processedRepo.save(new ProcessedEvent(event.getEventId()));
    }
}

// ── Guarantee: atomic check-then-process with database constraint ──
// PostgreSQL:
// CREATE UNIQUE INDEX idx_idempotency ON idempotency_keys(idempotency_key);
//
// INSERT INTO idempotency_keys(idempotency_key, result_id, created_at)
// VALUES ('key-123', NULL, NOW())
// ON CONFLICT (idempotency_key) DO NOTHING
// RETURNING idempotency_key;
//
// If the INSERT returns the key, this is the first call → process normally.
// If it returns nothing, another request already started processing → return cached result.

```

Idempotency is not optional in microservices → network retries guarantee duplicate requests. Every write endpoint should accept an idempotency key. Every async consumer should deduplicate by event ID.

---

### Q25: What distributed caching strategies work for microservices?


**Answer:**

Distributed caching (Redis) reduces latency and database load. Two primary patterns: cache-aside (read-through) and write-through.

```java
// ── Cache-aside: read from cache, miss -> load from DB -> populate cache ──
@Service
public class ProductService {
    @Autowired private RedisTemplate<String, ProductDto> redis;
    @Autowired private ProductRepository productRepo;

    private static final Duration CACHE_TTL = Duration.ofMinutes(10);

    public ProductDto getProduct(Long id) {
        String key = "product:" + id;

        // Try cache
        ProductDto cached = redis.opsForValue().get(key);
        if (cached != null) {
            return cached;
        }

        // Cache miss → load from database
        Product product = productRepo.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        ProductDto dto = ProductDto.from(product);

        // Populate cache with TTL
        redis.opsForValue().set(key, dto, CACHE_TTL);
        return dto;
    }

    // ── Invalidate cache on write ──
    @Transactional
    public ProductDto updateProduct(Long id, UpdateProductRequest req) {
        Product product = productRepo.findById(id).orElseThrow();
        product.setName(req.name());
        product.setPrice(req.price());
        product = productRepo.save(product);

        // Invalidate cache (or update it with write-through)
        redis.delete("product:" + id);

        return ProductDto.from(product);
    }
}

// ── Spring Cache abstraction ──
@Service
public class ProductService {
    @Cacheable(value = "products", key = "#id", unless = "#result == null")
    public ProductDto getProduct(Long id) {
        Product product = productRepo.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        return ProductDto.from(product);
    }

    @CachePut(value = "products", key = "#id")
    @Transactional
    public ProductDto updateProduct(Long id, UpdateProductRequest req) {
        Product product = productRepo.findById(id).orElseThrow();
        product.setName(req.name());
        product.setPrice(req.price());
        product = productRepo.save(product);
        return ProductDto.from(product);
    }

    @CacheEvict(value = "products", key = "#id")
    public void evictProduct(Long id) {
        // Cache eviction triggered externally (e.g., admin action)
    }
}

// ── Redis configuration for distributed caching ──
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public RedisCacheConfiguration cacheConfiguration() {
        return RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))
            .disableCachingNullValues()
            .serializeKeysWith(
                RedisSerializationContext.SerializationPair
                    .fromSerializer(new StringRedisSerializer()))
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair
                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(
            RedisConnectionFactory factory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(factory);
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());
        return template;
    }
}

// ── Cache stampede prevention ──
@Service
public class ProductService {
    // Without protection: 100 concurrent cache misses all hit the database
    // With Redis lock: only one request hits the DB, others wait

    public ProductDto getProductWithLock(Long id) {
        String key = "product:" + id;
        String lockKey = "lock:" + key;

        // Fast path: try cache
        ProductDto cached = redis.opsForValue().get(key);
        if (cached != null) {
            return cached;
        }

        // Acquire distributed lock
        Boolean locked = redis.opsForValue()
            .setIfAbsent(lockKey, "locked", Duration.ofSeconds(5));
        if (Boolean.TRUE.equals(locked)) {
            try {
                // Double-check cache (another thread may have populated it)
                ProductDto again = redis.opsForValue().get(key);
                if (again != null) {
                    return again;
                }

                // Load from database
                Product product = productRepo.findById(id).orElseThrow();
                ProductDto dto = ProductDto.from(product);
                redis.opsForValue().set(key, dto, CACHE_TTL);
                return dto;
            } finally {
                redis.delete(lockKey);
            }
        }

        // Lock not acquired → wait briefly and retry
        Thread.sleep(100);
        return redis.opsForValue().get(key);  // Should be populated by now
    }
}

// ── Cache strategy comparison ──
// 1. Cache-aside (lazy): Most common. Cache miss = DB hit + cache populate.
//    Pros: Simple, resilient (cache loss just means slower reads).
//    Cons: Cache stampede on first request.

// 2. Write-through: Every write updates both DB and cache.
//    Pros: Cache always consistent with DB. Never stale reads.
//    Cons: Slower writes. Wasted cache writes for infrequently read data.

// 3. Write-behind (write-back): Write to cache, async flush to DB.
//    Pros: Fastest writes. Can batch DB updates.
//    Cons: Data loss if cache goes down before flush. Complex.

// 4. Cache-aside + TTL + invalidation: The sweet spot.
//    Populate on read. Invalidate on write. TTL ensures eventual consistency.
```

Use cache-aside with TTL for most services. Never cache sensitive data (PII, financial details) without explicit TTL and encryption. Always consider the cache-to-DB consistency window and whether stale data is acceptable for the use case.

---

### Q24: What is idempotency and how do you implement it in microservices?


**Answer:**

Idempotency means that executing the same operation multiple times has the same effect as executing it once. In distributed systems, retries are inevitable (network timeouts, leader elections), and without idempotency, retries cause duplicate orders, double charges, and data corruption.

**Idempotency key pattern:**

```java
@Service
public class PaymentService {

    private final PaymentRepository paymentRepo;
    private final IdempotencyRegistry idempotencyRegistry;

    @Transactional
    public PaymentResult processPayment( PaymentRequest request) {
        // 1. Check idempotency — has this key been processed?
        String idempotencyKey = request.idempotencyKey();
        if (idempotencyRegistry.exists(idempotencyKey)) {
            // Return the previously computed result — safe retry
            return idempotencyRegistry.getResult(idempotencyKey);
        }

        // 2. Process the payment (deduct funds, etc.)
        PaymentResult result = paymentGateway.charge(
            request.amount(), request.currency());

        // 3. Store the result keyed by idempotency key
        idempotencyRegistry.store(idempotencyKey, result);

        return result;
    }
}

// Idempotency registry implementations:
// 1. Redis with TTL: SET idempotency:key result NX EX 86400
// 2. Database with unique constraint: idempotency_key VARCHAR(255) UNIQUE
// 3. In-memory HashMap (for single-instance, not for production)
```

**Database-level idempotency with unique constraints:**

```java
@Entity
@Table(name = "payment_events", uniqueConstraints =
    @UniqueConstraint(name = "uk_idempotency_key", columnNames = "idempotency_key"))
public class PaymentEvent {
    @Id @GeneratedValue private Long id;
    @Column(name = "idempotency_key", nullable = false)
    private String idempotencyKey;
    private String status;
    // ...
}

@Transactional
public PaymentResult processPayment(PaymentRequest request) {
    try {
        PaymentEvent event = new PaymentEvent();
        event.setIdempotencyKey(request.idempotencyKey());
        event.setStatus("PROCESSING");
        paymentEventRepo.save(event);  // Unique constraint prevents duplicates

        PaymentResult result = paymentGateway.charge(request.amount());
        event.setStatus("COMPLETED");
        return result;
    } catch (DataIntegrityViolationException e) {
        // Duplicate idempotency key → return stored result
        return paymentEventRepo.findByStatus("COMPLETED")
            .orElseThrow(() -> new RetryableException("Previous request in progress"));
    }
}
```

**Idempotency requirements by HTTP method:**
| Method | Idempotent? | Safe to retry? |
|--------|------------|----------------|
| GET | Yes | Always |
| PUT | Yes (full update) | Yes |
| DELETE | Yes | Yes (second delete returns 404 — same state) |
| POST | No | ❌ Must use idempotency-key header |
| PATCH | Depends | ❌ Use idempotency-key |

---

### Q25: How do you handle schema changes in event-driven microservices?


**Answer:**

Event schemas evolve over time. In event-driven systems, consumers and producers are deployed independently, so you must support multiple schema versions simultaneously.

**Strategy 1: Schema registry (Avro/Protobuf with Schema Registry):**

```java
// Producer sends schema-compatible events
// Schema Registry enforces compatibility rules

// Avro schema v1
record OrderEventV1 {
    string orderId;
    string customerId;
    double total;
}

// Avro schema v2 (backward compatible — added optional field)
record OrderEventV2 {
    string orderId;
    string customerId;
    double total;
    union {null, string} couponCode = null;  // default null
}

// Compatibility types:
// BACKWARD: New schema can read old data (default) — add optional fields
// FORWARD: Old schema can read new data — add fields with defaults
// FULL: Both backward and forward compatible
// NONE: No compatibility checks — use with caution
```

**Strategy 2: Event versioning in the payload:**

```java
// JSON event with version field
public class OrderEvent {
    private int eventVersion;          // 1, 2, 3...
    private String eventType;          // "OrderCreated"
    private Map<String, Object> data;  // Version-specific payload

    public OrderEvent(int version, String type, Map<String, Object> data) {
        this.eventVersion = version;
        this.eventType = type;
        this.data = data;
    }
}

// Consumer handles multiple versions
@Component
public class OrderEventConsumer {

    @KafkaListener(topics = "order-events")
    public void consume(OrderEvent event) {
        switch (event.getEventVersion()) {
            case 1 -> handleV1(event.getData());
            case 2 -> handleV2(event.getData());
            default -> throw new UnsupportedEventException(
                "Version " + event.getEventVersion() + " not supported");
        }
    }

    private void handleV1(Map<String, Object> data) {
        String orderId = (String) data.get("orderId");
        double total = (double) data.get("total");
        // V1 has no couponCode
    }

    private void handleV2(Map<String, Object> data) {
        String orderId = (String) data.get("orderId");
        double total = (double) data.get("total");
        String couponCode = (String) data.getOrDefault("couponCode", null);
        // V2 added couponCode
    }
}
```

**Strategy 3: Dual-write and event migration:**
- Write to both old and new event topics during migration
- Consumers gradually switch from old to new topic
- Once all consumers migrate, stop writing to the old topic

---

## Common Mistakes in Advanced Microservices (GFG-Style)

### Mistake 1: Not setting timeouts on all external calls

```java
// ❌ WRONG: No timeout — thread blocks indefinitely
restTemplate.getForObject("/users/{id}", UserDto.class, id);

// ✅ CORRECT: Always set connect and read timeouts
@Bean
public RestTemplate restTemplate() {
    return new RestTemplateBuilder()
        .connectTimeout(Duration.ofSeconds(2))
        .readTimeout(Duration.ofSeconds(5))
        .build();
}

// With WebClient:
WebClient.builder()
    .baseUrl("http://user-service")
    .clientConnector(new ReactorClientHttpConnector(
        HttpClient.create()
            .responseTimeout(Duration.ofSeconds(5))
            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 2000)
    ))
    .build();
```

### Mistake 2: Cache stampede without protection

```java
// ❌ WRONG: 100 concurrent requests all miss cache, all hit DB
public Product getProduct(Long id) {
    Product cached = cache.get(id);
    if (cached == null) {
        cached = productRepo.findById(id).orElseThrow();
        cache.put(id, cached);  // 100 threads all do this
    }
    return cached;
}

// ✅ CORRECT: Use locking to allow only one DB hit
public Product getProduct(Long id) {
    Product cached = cache.get(id);
    if (cached == null) {
        synchronized (this) {
            cached = cache.get(id);  // Double-check
            if (cached == null) {
                cached = productRepo.findById(id).orElseThrow();
                cache.put(id, cached);
            }
        }
    }
    return cached;
}

// For distributed apps: Redis Redlock or SET NX
```

### Mistake 3: Treating all services the same in deployment

```yaml
# ❌ WRONG: Same resources for all services
# order-service: 2 CPU, 4GB RAM
# audit-service: 2 CPU, 4GB RAM (over-provisioned — audit is I/O bound)

# ✅ CORRECT: Right-size per service
# order-service: 4 CPU, 8GB RAM (CPU-intensive, large heap)
# audit-service: 1 CPU, 2GB RAM (light, async writes)
# payment-service: 2 CPU, 4GB RAM (balanced, strict latency requirements)
```

## Event-Driven vs Request-Driven Comparison Table

| Aspect | Request-Driven (REST) | Event-Driven (Kafka/RabbitMQ) |
|--------|----------------------|------------------------------|
| Coupling | Temporal — caller waits for response | Temporal decoupling — fire and forget |
| Availability | Requires all services up | Partial availability — events queued |
| Consistency | Strong (if transactional) | Eventually consistent |
| Debugging | Easy — linear request flow | Complex — need tracing across events |
| Scaling | Scale by request volume | Scale by event throughput + consumer groups |
| Retry | Client-side retry with idempotency | Broker-based retry (DLQ pattern) |
| Schema evolution | API versioning (URL/header) | Schema registry compatibility |
| Best for | CRUD, queries, real-time responses | Notifications, workflows, data synchronization |

**When to use request-driven:** User-facing operations that need immediate response (checkout, login). **When to use event-driven:** Background processing, cross-service coordination, data replication.

## TypeScript Distributed Cache Simulator

```typescript
interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

class DistributedCacheSimulator {
  private store = new Map<string, CacheEntry<unknown>>();
  private locks = new Map<string, string>();  // key → lock owner

  async get<T>(key: string): Promise<T | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.value as T;
  }

  async set<T>(key: string, value: T, ttlMs: number): Promise<void> {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  /** Cache stampede prevention using distributed lock */
  async getOrCompute<T>(
    key: string,
    ttlMs: number,
    computeFn: () => Promise<T>,
    lockTimeoutMs = 5000
  ): Promise<T> {
    // Fast path: return cached value
    const cached = await this.get<T>(key);
    if (cached !== null) return cached;

    // Try to acquire lock
    const lockId = `lock:${key}`;
    const lockToken = Math.random().toString(36);

    if (this.locks.has(lockId)) {
      // Another thread is computing — wait and retry
      await new Promise(resolve => setTimeout(resolve, 100));
      const retry = await this.get<T>(key);
      if (retry !== null) return retry;
    }

    this.locks.set(lockId, lockToken);
    try {
      // Double-check cache
      const again = await this.get<T>(key);
      if (again !== null) return again;

      // Compute value
      const value = await computeFn();
      await this.set(key, value, ttlMs);
      return value;
    } finally {
      if (this.locks.get(lockId) === lockToken) {
        this.locks.delete(lockId);
      }
    }
  }

  /** Distributed cache stats */
  stats(): { entries: number; locks: number; keys: string[] } {
    return {
      entries: this.store.size,
      locks: this.locks.size,
      keys: [...this.store.keys()]
    };
  }
}

// Demonstration
const cache = new DistributedCacheSimulator();
async function demo() {
  const result = await cache.getOrCompute(
    'product:42',
    60000,
    async () => {
      console.log('[COMPUTE] Loading from database...');
      await new Promise(r => setTimeout(r, 200));
      return { id: 42, name: 'Widget', price: 29.99 };
    }
  );
  console.log('[RESULT]', result);
  console.log('[STATS]', cache.stats());
}
demo();
```

## Mermaid: Distributed Caching Architecture

```mermaid
flowchart TD
    subgraph Clients
        A[API Gateway]
    end

    subgraph Cache Layer
        B[Redis Cluster<br/>Primary]
        C[Redis Replica 1]
        D[Redis Replica 2]
    end

    subgraph Services
        E[Order Service]
        F[Product Service]
        G[User Service]
    end

    subgraph Database
        H[(PostgreSQL<br/>Primary)]
        I[(PostgreSQL<br/>Replica)]
    end

    A --> B
    B --> C
    B --> D

    E --> B
    E --> H
    F --> B
    F --> H
    G --> B
    G --> H

    H -.->|Streaming Replication| I
    B -.->|Cache invalidation| E
    B -.->|Cache invalidation| F

    style B fill:#4caf50,color:#fff
    style C fill:#81c784,color:#fff
    style D fill:#81c784,color:#fff
    style H fill:#2196f3,color:#fff
    style I fill:#64b5f6,color:#fff
```

## Chapter Quiz — Advanced Microservices

4. What is the primary mechanism for idempotency in REST APIs?
    - A) Using POST for all requests
    - B) An idempotency-key header that the client sends
    - C) Using HTTP Basic Auth
    - D) Sending requests twice

<details>
<summary>Answer</summary>
**B) An idempotency-key header.** The client generates a unique key for each operation. The server stores the result keyed by this value, so retries with the same key return the stored result instead of executing the operation again.
</details>

5. Which schema evolution strategy allows new consumers to read old events?
    - A) BACKWARD compatibility
    - B) FORWARD compatibility
    - C) FULL compatibility
    - D) NONE

<details>
<summary>Answer</summary>
**A) BACKWARD compatibility.** Backward compatibility means the new schema can read data written with the old schema — achieved by making new fields optional with defaults.
</details>

6. What is the most effective cache stampede prevention pattern in distributed systems?
    - A) Longer TTL
    - B) Cache-aside with distributed locking
    - C) Using a larger cache
    - D) Disabling the cache

<details>
<summary>Answer</summary>
**B) Cache-aside with distributed locking.** A distributed lock (Redis SET NEX) ensures only one request hits the database on cache miss. Other requests wait briefly and read the populated cache.
</details>

## Concept Comparison Table

| Topic | Key Points | Interview Frequency |
|-------|-----------|-------------------|
| **OOP** | Encapsulation, Inheritance, Polymorphism, Abstraction | Every interview |
| **Collections** | List, Set, Map, Queue, Deque | 9/10 interviews |
| **Concurrency** | synchronized, volatile, Locks, CompletableFuture | 7/10 senior interviews |
| **Java 8+** | Lambdas, Streams, Optional, CompletableFuture | 8/10 interviews |

## Cross-Application Matrix

| Skill | Junior (0-2yr) | Mid (3-5yr) | Senior (6-9yr) | Staff (10+) |
|-------|---------------|-------------|----------------|-------------|
| OOP & Design Patterns | Define and identify | Apply and combine | Evaluate and refactor | Create and teach |
| Collections | Basic usage | Performance trade-offs | Concurrent collections | Custom implementations |
| Concurrency | Syntax knowledge | Write thread-safe code | Debug deadlocks | Design concurrent systems |

## Chapter Quiz

1. What is the difference between equals() and == in Java?
   - A) They are identical
   - B) equals() compares values, == compares references
   - C) == compares values, equals() compares references
   - D) equals() is for primitives, == is for objects

<details>
<summary>Answer&lt;/summary&gt;
**B) equals() compares logical equality (overridable), == compares reference equality.**
</details>

2. Which collection guarantees insertion order?
   - A) HashMap
   - B) TreeMap
   - C) LinkedHashMap
   - D) HashSet

<details>
<summary>Answer&lt;/summary&gt;
**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.
</details>

3. What keyword prevents a method from being overridden?
   - A) static
   - B) final
   - C) private
   - D) abstract

<details>
<summary>Answer&lt;/summary&gt;
**B) final.** A final method cannot be overridden by subclasses.
</details>
