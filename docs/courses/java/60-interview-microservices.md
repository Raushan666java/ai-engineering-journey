# Chapter 60: Microservices Interview Q&A (Part A â€” Q1â€“Q8)

![Microservices Interview Topics - Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices.png)

### Q1: What is microservice architecture and how does it differ from monolithic architecture?

**Answer:**

Microservice architecture decomposes an application into small, independently deployable services that each own a specific business capability. A monolithic architecture packages all functionality into a single deployable unit.

```java
// â”€â”€ Monolithic: everything in one service â”€â”€
@RestController
@RequestMapping("/api")
public class MonolithController {
    @Autowired private UserService userService;
    @Autowired private OrderService orderService;
    @Autowired private PaymentService paymentService;
    @Autowired private NotificationService notificationService;
}

// â”€â”€ Microservice: separate services, each with its own API â”€â”€
// Service 1: user-service
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    @RestController
    @RequestMapping("/users")
    class UserController {
        @GetMapping("/{id}") public User getUser(@PathVariable Long id) { /* ... */ }
    }
}

// Service 2: order-service
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceApplication {
    @RestController
    @RequestMapping("/orders")
    class OrderController {
        @PostMapping
        public Order createOrder(@RequestBody OrderRequest req) {
            // Calls payment-service and notification-service via HTTP/async
        }
    }
}

// Service 3: payment-service
@SpringBootApplication
@EnableEurekaClient
public class PaymentServiceApplication { /* ... */ }
```

Key differences:
- **Deployment**: Monolith deploys as one WAR/JAR. Microservices deploy independently.
- **Scaling**: Monolith scales the entire application. Microservices scale only the services under load.
- **Database**: Monolith typically uses one shared database. Microservices own their data (database-per-service).
- **Team structure**: Monolith works for small teams. Microservices align with cross-functional teams owning one service each.
- **Communication**: Monolith uses in-process method calls. Microservices use network calls (HTTP/gRPC/messaging).
- **Failure isolation**: Monolith failure takes down everything. Microservices fail independently (with circuit breakers).

Start monolithic. Split into microservices only when you need independent scaling, deployment velocity, or team independence. Premature microservices add complexity without benefit.

---

### Q2: How do you decompose a monolith into microservices?

**Answer:**

Decomposition follows Domain-Driven Design â€” identify bounded contexts and aggregate boundaries. Use the Strangler Fig pattern to migrate incrementally.

```java
// â”€â”€ Phase 1: Identify bounded contexts through domain analysis â”€â”€
// Original monolith entities often blur domain boundaries:
@Entity
public class User {
    private Long id;
    private String name;
    private String email;
    private String shippingAddress;     // belongs to shipping context
    private String preferredPayment;    // belongs to payment context
    private List<Order> orders;         // belongs to order context
}

// â”€â”€ Phase 2: Extract the first bounded context â”€â”€
// New user-service keeps only user data
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue private Long id;
    private String name;
    private String email;
}

// â”€â”€ Phase 3: Create API contract between services â”€â”€
// user-service exposes what order-service needs via a client
@FeignClient(name = "user-service")
public interface UserServiceClient {
    @GetMapping("/users/{id}")
    UserDto getUser(@PathVariable Long id);
}

// order-service stores only the reference (user_id), not embedded user data
@Entity
@Table(name = "orders")
public class Order {
    @Id @GeneratedValue private Long id;
    private Long userId;                // FK reference â€” no User entity
    private BigDecimal total;
    private String status;
}

// â”€â”€ Phase 4: Strangler Fig â€” route traffic gradually â”€â”€
// API gateway routes /users/* to user-service, /orders/* to order-service
// Both services can still share the old database during migration
@Bean
public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("users", r -> r.path("/api/users/**")
            .uri("lb://user-service"))
        .route("orders", r -> r.path("/api/orders/**")
            .uri("lb://order-service"))
        .build();
}
```

Extraction order: start with the bounded context that changes most frequently, has the simplest data, or requires independent scaling. Never extract services that share a database transaction â€” they belong in the same service.

---

### Q3: Compare synchronous and asynchronous communication between microservices

**Answer:**

Synchronous (HTTP/gRPC) gives immediate responses but couples services in time. Asynchronous (messaging) decouples services but adds eventual consistency and complexity.

```java
// â”€â”€ Synchronous: HTTP via Feign Client â”€â”€
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;
    @Autowired private InventoryServiceClient inventoryClient;

    @Transactional
    public Order createOrderSync(OrderRequest request) {
        // Blocks until user-service responds
        UserDto user = userClient.getUser(request.userId());
        // Blocks until inventory-service responds
        InventoryStatus stock = inventoryClient.checkStock(request.productId());

        if (!stock.available()) throw new InsufficientStockException();
        Order order = orderRepo.save(new Order(request));
        inventoryClient.reserveStock(request.productId(), request.quantity());
        return order;
    }
}

// â”€â”€ Asynchronous: Event-driven via Kafka â”€â”€
@Service
public class OrderEventProducer {
    @Autowired private KafkaTemplate<String, OrderEvent> kafka;

    public void createOrderAsync(OrderRequest request) {
        Order order = orderRepo.save(new Order(request));
        // Fire-and-forget event â€” inventory-service consumes asynchronously
        kafka.send("order.created", new OrderCreatedEvent(order.getId(), request));
    }
}

// inventory-service consumes the event independently
@Component
public class InventoryEventConsumer {
    @KafkaListener(topics = "order.created")
    public void handleOrderCreated(OrderCreatedEvent event) {
        // Deduct stock in its own transaction
        inventoryService.deductStock(event.productId(), event.quantity());
        // Emits inventory.reserved or inventory.failed event
        kafkaTemplate.send("inventory.reserved", new InventoryReservedEvent(event.orderId()));
    }
}

// order-service handles the callback event
@Component
public class OrderEventConsumer {
    @KafkaListener(topics = "inventory.reserved")
    public void handleInventoryReserved(InventoryReservedEvent event) {
        orderService.updateStatus(event.orderId(), "CONFIRMED");
    }
}
```

| Aspect | Synchronous | Asynchronous |
|--------|-----------|-------------|
| Latency | Higher (blocking) | Lower from caller's perspective |
| Coupling | Tight (service must be up) | Loose (offline consumer tolerated) |
| Consistency | Strong (within transaction) | Eventual |
| Complexity | Lower | Higher (dead letter queues, retries) |
| Debugging | Easier (single flow) | Harder (scattered across consumers) |
| Backpressure | Tricky | Natural (queues buffer) |

Use synchronous for reads and commands where immediate response is required. Use asynchronous for cross-service workflows where the caller doesn't need an immediate answer.

---

### Q4: How do you implement an API Gateway with Spring Cloud Gateway?

**Answer:**

Spring Cloud Gateway provides routing, filtering, rate limiting, and cross-cutting concerns at a single entry point.

```java
// â”€â”€ Main application â”€â”€
@SpringBootApplication
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}

// â”€â”€ Route configuration with filters â”€â”€
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
            // Route 1: user-service with header stripping
            .route("user-service", r -> r.path("/api/users/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway", "spring-cloud-gateway")
                    .retry(3)
                    .circuitBreaker(config -> config
                        .setName("userServiceCB")
                        .setFallbackUri("forward:/fallback/users")))
                .uri("lb://user-service"))

            // Route 2: order-service with rate limiting
            .route("order-service", r -> r.path("/api/orders/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .requestRateLimiter(config -> config
                        .setRateLimiter(redisRateLimiter())))
                .uri("lb://order-service"))

            .build();
    }

    // â”€â”€ Redis-based rate limiter â”€â”€
    @Bean
    public RedisRateLimiter redisRateLimiter() {
        return new RedisRateLimiter(10, 20, 1);  // 10 requests/sec, burst 20
    }
}

// â”€â”€ Global filters (applied to every route) â”€â”€
@Component
public class GlobalLoggingFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        long start = System.currentTimeMillis();
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            log.info("{} {} -> {} ({}ms)",
                exchange.getRequest().getMethod(),
                exchange.getRequest().getPath(),
                exchange.getResponse().getStatusCode(),
                System.currentTimeMillis() - start);
        }));
    }
}

// â”€â”€ Security: validate JWT at the gateway â”€â”€
@Component
public class JwtAuthFilter implements GatewayFilterFactory<Object> {
    @Override
    public GatewayFilter apply(Object config) {
        return (exchange, chain) -> {
            String auth = exchange.getRequest().getHeaders()
                .getFirst(HttpHeaders.AUTHORIZATION);
            if (auth == null || !auth.startsWith("Bearer ")) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }
            Jwt jwt = jwtDecoder.decode(auth.substring(7));
            // Add user info to downstream headers
            exchange.getRequest().mutate()
                .header("X-User-Id", jwt.getSubject());
            return chain.filter(exchange);
        };
    }
}
```

API Gateway responsibilities: routing, authentication, rate limiting, request/response transformation, circuit breaking, logging, and aggregation. Do NOT put business logic in the gateway â€” it's a routing layer, not an orchestration layer.

---

### Q5: How does service discovery work with Eureka?

**Answer:**

Service discovery lets services find each other without hardcoded URLs. Each service registers itself with Eureka on startup and sends heartbeats to maintain its lease.

```java
// â”€â”€ Eureka Server (the registry) â”€â”€
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml for Eureka server:
// server.port: 8761
// eureka.client.register-with-eureka: false
// eureka.client.fetch-registry: false

// â”€â”€ Eureka Client (every microservice) â”€â”€
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

// application.yml for clients:
// spring.application.name: order-service
// eureka.client.service-url.defaultZone: http://localhost:8761/eureka/
// eureka.instance.prefer-ip-address: true
// eureka.instance.lease-renewal-interval-in-seconds: 10
// eureka.instance.lease-expiration-duration-in-seconds: 30

// â”€â”€ Using discovery to call another service â”€â”€
@Service
public class OrderService {

    @Autowired
    private DiscoveryClient discoveryClient;

    public String getUserEmail(Long userId) {
        // Look up user-service instances dynamically
        List<ServiceInstance> instances = discoveryClient
            .getInstances("user-service");

        if (instances.isEmpty()) {
            throw new ServiceUnavailableException("user-service not found");
        }

        ServiceInstance instance = instances.get(0);
        URI uri = instance.getUri();
        String url = uri + "/users/" + userId + "/email";

        // Use RestTemplate or WebClient to call the discovered URL
        return restTemplate.getForObject(url, String.class);
    }
}

// â”€â”€ Load-balanced with @LoadBalanced â”€â”€
@Configuration
public class ClientConfig {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

@Service
public class OrderService {
    @Autowired
    private RestTemplate restTemplate;  // automatically load-balanced via Eureka

    public String getUserEmail(Long userId) {
        // Just use the service name â€” Ribbon/Ribbon resolves via Eureka
        return restTemplate.getForObject(
            "http://user-service/users/" + userId + "/email",
            String.class);
    }
}
```

Eureka provides client-side load balancing. Each client maintains a local registry of available instances and rotates through them (round-robin by default). If a service instance fails to send a heartbeat within 3 lease periods, Eureka evicts it.

For production, run at least 2 Eureka servers in a multi-DC setup. Eureka is AP (availability + partition tolerance) â€” sacrifices consistency, which is fine for service discovery.

---

### Q6: How do you externalize configuration with Spring Cloud Config?

**Answer:**

Spring Cloud Config Server serves configuration from a Git backend. Config clients fetch their configuration on startup and can refresh it at runtime.

```java
// â”€â”€ Config Server â”€â”€
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

// application.yml:
// server.port: 8888
// spring.cloud.config.server.git.uri: https://github.com/raushan666/config-repo
// spring.cloud.config.server.git.searchPaths: '{application}'
// spring.cloud.config.server.git.default-label: main

// â”€â”€ Git-backed config repository structure â”€â”€
// config-repo/
//   order-service.yml          (shared for all profiles)
//   order-service-dev.yml      (dev profile)
//   order-service-prod.yml     (prod profile)
//   application.yml            (shared across all services)

// order-service.yml in Git:
// server:
//   port: 8081
// spring:
//   datasource:
//     url: ${DB_URL}
//     username: ${DB_USER}
//     password: ${DB_PASS}
// order-service:
//   order-timeout: 30s
//   max-batch-size: 100

// â”€â”€ Config Client â”€â”€
@SpringBootApplication
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

// bootstrap.yml (loaded before application.yml):
// spring.application.name: order-service
// spring.cloud.config.uri: http://localhost:8888
// spring.cloud.config.fail-fast: true
// spring.cloud.config.retry.initial-interval: 1000
// spring.cloud.config.retry.max-attempts: 5

// â”€â”€ Using config values â”€â”€
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Value("${order-service.order-timeout:30s}")
    private Duration orderTimeout;

    @Value("${order-service.max-batch-size:100}")
    private int maxBatchSize;

    @RefreshScope  // Enables runtime refresh without restart
    @Component
    public class OrderConfig {
        @Value("${order-service.discount-rate:0}")
        private double discountRate;
    }
}

// â”€â”€ Trigger refresh â”€â”€
@RestController
public class ConfigRefreshController {
    @Autowired
    private RefreshEndpoint refreshEndpoint;

    @PostMapping("/actuator/refresh")
    public Set<String> refresh() {
        return refreshEndpoint.refresh();  // Returns changed property keys
    }
}
// POST http://order-service/actuator/refresh
// Response: ["order-service.discount-rate"]

// â”€â”€ For automatic broadcast, use Spring Cloud Bus â”€â”€
// POST http://config-server/actuator/busrefresh/order-service:**
// Broadcasts refresh to all instances of order-service via RabbitMQ
```

Config server enables centralized management, version history (through Git), and environment-specific overrides. Never store secrets in plain text â€” use `{cipher}` encrypted values with a symmetric key or Vault backend.

---

### Q7: How do you implement distributed tracing with Micrometer and Zipkin?

**Answer:**

Distributed tracing traces a request across multiple microservices using trace IDs and span IDs. Spring Cloud Sleuth (now Micrometer Tracing) integrates with Zipkin for visualization.

```java
// â”€â”€ Dependencies (Spring Boot 3.x) â”€â”€
// implementation 'io.micrometer:micrometer-tracing-bridge-brave'
// implementation 'io.zipkin.reporter2:zipkin-reporter-brave'
// implementation 'io.micrometer:micrometer-tracing'

// â”€â”€ Application configuration â”€â”€
@SpringBootApplication
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

// application.yml:
// management.tracing.sampling.probability: 1.0   (1.0 = trace all requests)
// spring.sleuth.reporter.zipkin.enabled: true    (for Sleuth 2.x, pre-micrometer)
// Actually with Micrometer Tracing:
// management.zipkin.tracing.endpoint: http://localhost:9411/api/v2/spans

// â”€â”€ Manual tracing in code â”€â”€
@Service
public class OrderService {

    @Autowired
    private Tracer tracer;  // Micrometer Tracing Tracer

    @Autowired
    private UserServiceClient userClient;

    public Order createOrder(OrderRequest request) {
        // Create a custom span for business logic
        Span span = tracer.nextSpan().name("create-order").start();
        try (Tracer.SpanInScope ws = tracer.withSpan(span)) {
            span.tag("user.id", String.valueOf(request.userId()));
            span.tag("order.total", request.total().toString());

            // This HTTP call automatically propagates the trace ID
            UserDto user = userClient.getUser(request.userId());

            Order order = orderRepo.save(new Order(request));

            span.tag("order.id", String.valueOf(order.getId()));
            return order;
        } finally {
            span.end();
        }
    }
}

// â”€â”€ Trace propagation via RestTemplate â”€â”€
@Configuration
public class TracingConfig {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    // Micrometer automatically instruments RestTemplate, WebClient, Kafka, etc.
    // No manual header propagation needed with brave instrumentation
}

// â”€â”€ View traces in Zipkin â”€â”€
// docker run -d -p 9411:9411 openzipkin/zipkin
// Then visit http://localhost:9411 â€” search by trace ID or service

// â”€â”€ Tag annotation with @SpanTag â”€â”€
@Component
public class PaymentProcessor {
    @NewSpan(name = "process-payment")
    public PaymentResult process(
            @SpanTag("payment.amount") BigDecimal amount,
            @SpanTag("payment.method") String method) {
        // Method arguments are automatically captured as span tags
    }
}
```

Each trace has a unique trace ID (propagated across services via HTTP headers). Each service creates spans within that trace. Zipkin collects spans and shows them in a waterfall view, revealing which service caused the latency.

With 100% sampling in dev (1.0) and 1-10% in prod, tracing adds negligible overhead. Pair traces with logs by including the trace ID in log output (`%X{traceId}`).

---

### Q8: Explain the Saga pattern with a code example

**Answer:**

The Saga pattern manages distributed transactions across microservices by breaking them into a sequence of local transactions with compensating actions for rollback. Two implementations: choreography (each service emits/reacts to events) and orchestration (a coordinator drives the flow).

```java
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// CHOREOGRAPHY SAGA â€” services react to each other's events
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// Step 1: Order Service creates order and emits event
@Service
public class OrderSagaService {
    @Autowired private OrderRepository orderRepo;
    @Autowired private KafkaTemplate<String, Object> kafka;

    @Transactional
    public Order createOrder(OrderRequest req) {
        Order order = new Order(req.userId(), req.productId(), req.quantity(), req.total());
        order.setStatus("PENDING");
        order = orderRepo.save(order);

        // Emit event â€” inventory service consumes this
        kafka.send("saga.order-created", new OrderCreatedEvent(order.getId(), req));
        return order;
    }

    // Compensating handler: if inventory fails, cancel the order
    @KafkaListener(topics = "saga.inventory-failed")
    public void handleInventoryFailed(InventoryFailedEvent event) {
        Order order = orderRepo.findById(event.orderId()).orElseThrow();
        order.setStatus("CANCELLED");
        order.setFailureReason(event.reason());
        orderRepo.save(order);
    }
}

// Step 2: Inventory Service reserves stock
@Service
public class InventorySagaService {
    @Autowired private InventoryRepository invRepo;
    @Autowired private KafkaTemplate<String, Object> kafka;

    @KafkaListener(topics = "saga.order-created")
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            ProductInventory inv = invRepo.findByProductId(event.productId());
            inv.reserve(event.quantity());
            invRepo.save(inv);
            kafka.send("saga.inventory-reserved",
                new InventoryReservedEvent(event.orderId()));
        } catch (Exception e) {
            kafka.send("saga.inventory-failed",
                new InventoryFailedEvent(event.orderId(), e.getMessage()));
        }
    }
}

// Step 3: Payment Service processes payment
@Service
public class PaymentSagaService {
    @KafkaListener(topics = "saga.inventory-reserved")
    public void handleInventoryReserved(InventoryReservedEvent event) {
        try {
            paymentService.charge(event.orderId(), event.total());
            kafka.send("saga.payment-completed",
                new PaymentCompletedEvent(event.orderId()));
        } catch (Exception e) {
            // Compensating: release inventory
            kafka.send("saga.payment-failed",
                new PaymentFailedEvent(event.orderId()));
        }
    }

    // Compensating: refund if downstream fails
    @KafkaListener(topics = "saga.refund-requested")
    public void handleRefundRequested(RefundRequestedEvent event) {
        paymentService.refund(event.orderId());
    }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// ORCHESTRATION SAGA â€” a coordinator manages the flow
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// Saga Orchestrator
@Component
public class OrderSagaOrchestrator {
    @Autowired private KafkaTemplate<String, Object> kafka;
    @Autowired private SagaStateRepository sagaStateRepo;

    @Transactional
    public void startSaga(CreateOrderCommand cmd) {
        SagaState state = new SagaState(cmd.orderId(), "ORDER_CREATED");
        sagaStateRepo.save(state);
        kafka.send("saga.commands", new ReserveInventoryCmd(cmd.orderId(), cmd.productId(), cmd.quantity()));
    }

    @KafkaListener(topics = "saga.events")
    public void handleEvent(SagaEvent event) {
        SagaState state = sagaStateRepo.findById(event.sagaId()).orElseThrow();

        switch (state.currentStep()) {
            case "ORDER_CREATED" -> {
                if (event instanceof InventoryReservedEvent) {
                    state.advanceTo("INVENTORY_RESERVED");
                    kafka.send("saga.commands", new ProcessPaymentCmd(event.orderId()));
                } else if (event instanceof InventoryFailedEvent) {
                    state.fail(event.reason());
                    // Saga complete â€” order already marked PENDING, no action needed
                }
            }
            case "INVENTORY_RESERVED" -> {
                if (event instanceof PaymentCompletedEvent) {
                    state.advanceTo("PAYMENT_COMPLETED");
                    kafka.send("saga.commands", new ConfirmOrderCmd(event.orderId()));
                } else if (event instanceof PaymentFailedEvent) {
                    // Compensate: release inventory
                    kafka.send("saga.commands", new ReleaseInventoryCmd(event.orderId()));
                    state.compensate();
                }
            }
            default -> state.fail("Unknown step: " + state.currentStep());
        }
        sagaStateRepo.save(state);
    }
}
```

Saga handles long-running transactions without locking resources. Choreography works when the flow is simple (3-4 services). Orchestration is better for complex workflows with branching and compensations. Never use XA/2PC transactions across services â€” that defeats the purpose of microservices.


### Q9: What is CQRS and how do you implement it?

**Answer:**

CQRS (Command Query Responsibility Segregation) separates write models (commands) from read models (queries). Each model has its own database schema, optimized for its operation.

```java
// â”€â”€ Command side: focused on writes â”€â”€
@RestController
@RequestMapping("/orders/commands")
public class OrderCommandController {
    @Autowired private OrderCommandService commandService;

    @PostMapping
    public CompletableFuture<UUID> createOrder(@RequestBody CreateOrderCommand cmd) {
        return commandService.handle(cmd);  // Returns order ID immediately
    }

    @PostMapping("/{id}/cancel")
    public void cancelOrder(@PathVariable UUID id) {
        commandService.handle(new CancelOrderCommand(id));
    }
}

@Service
public class OrderCommandService {
    @Autowired private OrderCommandRepository cmdRepo;
    @Autowired private EventPublisher eventPublisher;

    @Transactional
    public CompletableFuture<UUID> handle(CreateOrderCommand cmd) {
        OrderWriteModel order = new OrderWriteModel(
            cmd.userId(), cmd.productId(), cmd.quantity(), cmd.total()
        );
        order = cmdRepo.save(order);

        // Publish event for the query side to consume
        eventPublisher.publish(new OrderCreatedEvent(
            order.getId(), cmd.userId(), cmd.productId(),
            cmd.quantity(), cmd.total()
        ));
        return CompletableFuture.completedFuture(order.getId());
    }
}

// Write-side repository (simple, no complex joins needed)
@Repository
public interface OrderCommandRepository extends JpaRepository<OrderWriteModel, UUID> {}

// â”€â”€ Query side: optimized for reads â”€â”€
@RestController
@RequestMapping("/orders/queries")
public class OrderQueryController {
    @Autowired private OrderQueryService queryService;

    @GetMapping("/{id}")
    public OrderReadModel getOrder(@PathVariable UUID id) {
        return queryService.findById(id);
    }

    @GetMapping
    public Page<OrderReadModel> listOrders(
            @RequestParam UUID userId,
            @PageableDefault(size = 20) Pageable pageable) {
        return queryService.findByUserId(userId, pageable);
    }
}

// Query-side uses a denormalized read model
@Entity
@Table(name = "order_read_model")
public class OrderReadModel {
    @Id private UUID id;
    private Long userId;
    private String userName;        // denormalized from user-service
    private String productName;     // denormalized from product-service
    private int quantity;
    private BigDecimal total;
    private String status;
    private Instant createdAt;
    private Instant updatedAt;
}

// Query-side event consumer keeps the read model in sync
@Component
public class OrderEventConsumer {
    @Autowired private OrderQueryRepository queryRepo;

    @Transactional
    @KafkaListener(topics = "order.events")
    public void handleOrderEvent(OrderEvent event) {
        if (event instanceof OrderCreatedEvent e) {
            OrderReadModel model = new OrderReadModel();
            model.setId(e.orderId());
            model.setUserId(e.userId());
            model.setProductName(productService.getName(e.productId()));  // denormalize
            model.setQuantity(e.quantity());
            model.setTotal(e.total());
            model.setStatus("PENDING");
            model.setCreatedAt(Instant.now());
            queryRepo.save(model);
        } else if (event instanceof OrderStatusChangedEvent e) {
            queryRepo.findById(e.orderId()).ifPresent(model -> {
                model.setStatus(e.newStatus());
                model.setUpdatedAt(Instant.now());
            });
        }
    }
}
```

CQRS adds significant complexity (eventual consistency, duplicate data, two models to maintain). Use it only when reads and writes have fundamentally different shapes â€” for example, writes are simple INSERT/UPDATE but reads need complex aggregations, joins, or full-text search.

Apply CQRS to individual bounded contexts, not the entire system. Most services do not need CQRS â€” a well-designed JPA model with DTO projections is sufficient.

---

### Q10: How do you implement a circuit breaker with Resilience4j?

**Answer:**

Resilience4j provides circuit breakers, retries, rate limiters, bulkheads, and time limiters. The circuit breaker prevents cascading failures by failing fast when a downstream service is unhealthy.

```java
// â”€â”€ Configuration â”€â”€
// application.yml:
// resilience4j.circuitbreaker:
//   instances:
//     userService:
//       sliding-window-size: 10
//       sliding-window-type: COUNT_BASED
//       minimum-number-of-calls: 5
//       failure-rate-threshold: 50
//       wait-duration-in-open-state: 30s
//       permitted-number-of-calls-in-half-open-state: 3
//       record-exceptions:
//         - java.io.IOException
//         - org.springframework.web.client.HttpServerErrorException
//       ignore-exceptions:
//         - org.springframework.web.client.HttpClientErrorException  (4xx â€” not a circuit failure)

// â”€â”€ Registration â”€â”€
@Configuration
public class Resilience4jConfig {
    @Bean
    public Customizer<Resilience4JCircuitBreakerFactory> defaultConfig() {
        return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)
            .circuitBreakerConfig(CircuitBreakerConfig.custom()
                .slidingWindowSize(10)
                .failureRateThreshold(50)
                .waitDurationInOpenState(Duration.ofSeconds(30))
                .permittedNumberOfCallsInHalfOpenState(3)
                .build())
            .timeLimiterConfig(TimeLimiterConfig.custom()
                .timeoutDuration(Duration.ofSeconds(4))
                .build())
            .build());
    }
}

// â”€â”€ Usage with @CircuitBreaker annotation â”€â”€
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;

    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    @TimeLimiter(name = "userService")
    public CompletableFuture<UserDto> getUser(Long userId) {
        return CompletableFuture.supplyAsync(() ->
            userClient.getUser(userId));
    }

    // Fallback must match the return type and parameters
    public CompletableFuture<UserDto> getUserFallback(Long userId, Throwable t) {
        log.warn("user-service unavailable, returning cached user: {}", t.getMessage());
        return CompletableFuture.completedFuture(
            new UserDto(userId, "Cached User", "cached@example.com"));
    }
}

// â”€â”€ Manual circuit breaker usage â”€â”€
@Service
public class PaymentService {
    private final CircuitBreaker circuitBreaker;

    public PaymentService(CircuitBreakerRegistry registry) {
        this.circuitBreaker = registry.circuitBreaker("paymentService");
    }

    public PaymentResult processPayment(PaymentRequest req) {
        // Decorate supplier with circuit breaker
        Supplier<PaymentResult> decorated = CircuitBreaker
            .decorateSupplier(circuitBreaker, () -> callPaymentProvider(req));

        // Also add retry
        Retry retry = Retry.ofDefaults("paymentRetry");
        Supplier<PaymentResult> retryAndCircuit = Retry
            .decorateSupplier(retry, decorated);

        // Try with fallback
        Try<PaymentResult> result = Try.ofSupplier(retryAndCircuit)
            .recover(throwable -> PaymentResult.failed("Payment unavailable"));

        return result.get();
    }
}

// â”€â”€ Monitoring circuit breaker state â”€â”€
@Component
public class CircuitBreakerMonitor {
    public CircuitBreakerMonitor(CircuitBreakerRegistry registry) {
        // Log every state transition
        registry.getAllCircuitBreakers().forEach(cb -> {
            cb.getEventPublisher()
                .onStateTransition(event ->
                    log.info("CircuitBreaker {}: {} -> {}",
                        event.getCircuitBreakerName(),
                        event.getOldState(),
                        event.getNewState()));
        });
    }
}
```

Circuit breaker states: CLOSED (normal, pass through) â†’ OPEN (fail fast, no calls) â†’ HALF_OPEN (allow limited probe calls) â†’ back to CLOSED or OPEN. Use it on every cross-service call. Without circuit breakers, a cascading failure in one service can take down the entire system.

---

### Q11: How do you handle service-to-service authentication with OAuth2 and JWT?

**Answer:**

OAuth2 with JWT provides token-based authentication. The client credentials grant is the standard pattern for service-to-service communication.

```java
// â”€â”€ Authorization Server config (Spring Authorization Server) â”€â”€
@Configuration
@EnableAuthorizationServer
public class AuthServerConfig {
    @Bean
    public RegisteredClientRepository registeredClientRepository() {
        RegisteredClient orderService = RegisteredClient.withId(UUID.randomUUID().toString())
            .clientId("order-service")
            .clientSecret("{noop}order-secret")  // noop = plain text â€” use BCrypt in prod
            .authorizationGrantType(ClientCredentialsGrant.INSTANCE)
            .scope("order:read")
            .scope("order:write")
            .build();
        return new InMemoryRegisteredClientRepository(orderService);
    }
}

// â”€â”€ Resource Server config (each microservice validates tokens) â”€â”€
// application.yml:
// spring.security.oauth2.resourceserver.jwt:
//   issuer-uri: http://localhost:9000
//   jwk-set-uri: http://localhost:9000/.well-known/jwks.json

@Configuration
@EnableWebSecurity
public class ResourceServerConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/orders/**").hasAuthority("SCOPE_order:read")
                .requestMatchers(HttpMethod.POST, "/orders/**").hasAuthority("SCOPE_order:write")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
        return http.build();
    }
}

// â”€â”€ Client credentials flow (service calls another service) â”€â”€
@Service
public class ServiceClient {
    @Autowired
    private WebClient webClient;

    @Autowired
    private ClientRegistrationRepository registrations;

    public String callService(String targetClientId, String path) {
        // Get the client credentials grant for the calling service
        OAuth2AuthorizedClient client = authorizeClient(targetClientId);

        return webClient.get()
            .uri("http://target-service" + path)
            .headers(h -> h.setBearerAuth(client.getAccessToken().getTokenValue()))
            .retrieve()
            .bodyToMono(String.class)
            .block();
    }

    private OAuth2AuthorizedClient authorizeClient(String targetClientId) {
        // Use OAuth2AuthorizedClientManager to get/refresh tokens
        ClientRegistration reg = registrations.findByRegistrationId(targetClientId);
        OAuth2ClientCredentialsGrantRequest request =
            new OAuth2ClientCredentialsGrantRequest(reg);
        OAuth2AccessTokenResponse response = restTemplate.postForObject(
            reg.getProviderDetails().getTokenUri(),
            request, OAuth2AccessTokenResponse.class);
        return new OAuth2AuthorizedClient(reg, reg.getClientId(),
            response.getAccessToken());
    }
}

// â”€â”€ Extract user context from JWT â”€â”€
@RestController
@RequestMapping("/orders")
public class OrderController {
    @GetMapping("/current")
    public String getCurrentUser(@AuthenticationPrincipal Jwt jwt) {
        // JWT contains: sub (user ID), claims (roles, scopes)
        String userId = jwt.getSubject();
        String email = jwt.getClaimAsString("email");
        List<String> roles = jwt.getClaimAsStringList("roles");
        return "User: " + userId + ", Email: " + email + ", Roles: " + roles;
    }
}
```

JWT is stateless â€” the resource server only needs the public key (JWKS) to verify tokens, no database call. Token expiry is short (15-30 minutes for access tokens). Use refresh tokens for user-facing flows; client credentials flow generates new tokens directly.

Never embed sensitive data in JWT claims (they are base64-encoded, not encrypted). For fine-grained authorization, use OAuth2 scopes combined with custom claims or a dedicated authorization service.

---

### Q12: How do you implement event-driven microservices with Kafka?

**Answer:**

Apache Kafka provides a distributed commit log for asynchronous event streaming between services. Each service publishes events to topics; other services consume from those topics independently.

```java
// â”€â”€ Producer configuration â”€â”€
@Configuration
public class KafkaProducerConfig {
    @Bean
    public ProducerFactory<String, Object> producerFactory() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
            StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
            JsonSerializer.class);
        props.put(ProducerConfig.ACKS_CONFIG, "all");          // wait for all replicas
        props.put(ProducerConfig.RETRIES_CONFIG, 3);
        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);  // exactly-once semantics
        return new DefaultKafkaProducerFactory<>(props);
    }

    @Bean
    public KafkaTemplate<String, Object> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}

// â”€â”€ Event publisher â”€â”€
@Service
public class OrderEventPublisher {
    @Autowired
    private KafkaTemplate<String, Object> kafka;

    @Transactional
    public void orderCreated(Order order) {
        // Send event and wait for acknowledgment
        ListenableFuture<SendResult<String, Object>> future =
            kafka.send("order.created", order.getId().toString(),
                new OrderCreatedEvent(order.getId(), order.getUserId(),
                    order.getTotal()));

        future.addCallback(
            result -> log.info("Event sent: {}", result.getRecordMetadata().offset()),
            ex -> log.error("Failed to send event", ex)
        );
    }

    // â”€â”€ Transactional outbox pattern â”€â”€
    @Transactional
    public void createOrderAndPublishEvent(OrderRequest request) {
        // 1. Save order in the database
        Order order = orderRepository.save(new Order(request));

        // 2. Also save the event in an outbox table (same transaction!)
        OutboxEvent outbox = new OutboxEvent(
            null, "order.created", order.getId().toString(),
            new ObjectMapper().writeValueAsString(
                new OrderCreatedEvent(order.getId(), order.getUserId(), order.getTotal()))
        );
        outboxRepository.save(outbox);
        // A separate poller reads OutboxEvent and publishes to Kafka
        // This ensures at-least-once delivery without distributed transactions
    }
}

// â”€â”€ Consumer configuration â”€â”€
@Configuration
public class KafkaConsumerConfig {
    @Bean
    public ConsumerFactory<String, Object> consumerFactory() {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "inventory-service-group");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
            StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
            JsonDeserializer.class);
        props.put(JsonDeserializer.TRUSTED_PACKAGES,
            "com.company.*");  // security: whitelist packages
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);  // manual commit
        return new DefaultKafkaConsumerFactory<>(props);
    }
}

// â”€â”€ Event consumer â”€â”€
@Component
public class InventoryEventConsumer {
    @Autowired
    private InventoryService inventoryService;

    @KafkaListener(topics = "order.created",
        groupId = "inventory-service-group",
        containerFactory = "kafkaListenerContainerFactory")
    @Transactional
    public void handleOrderCreated(
            @Payload OrderCreatedEvent event,
            @Header(KafkaHeaders.OFFSET) long offset,
            Acknowledgment acknowledgment) {

        try {
            inventoryService.reserveStock(event.productId(), event.quantity());
            // Manual commit after processing
            acknowledgment.acknowledge();
        } catch (InsufficientStockException e) {
            // Publish a failure event and commit the offset (skip this message)
            kafkaTemplate.send("inventory.failed",
                new InventoryFailedEvent(event.orderId(), e.getMessage()));
            acknowledgment.acknowledge();
        } catch (Exception e) {
            // Do not commit â€” message will be re-delivered
            log.error("Failed to process order {}, will retry", event.orderId(), e);
            throw new RetryableException("Retry later");
        }
    }
}

// â”€â”€ Idempotent consumer (same event may be delivered twice) â”€â”€
@Service
public class IdempotentConsumerService {
    @Autowired
    private ProcessedEventRepository processedEventRepo;

    @Transactional
    public void handleEvent(OrderCreatedEvent event) {
        // Check if we already processed this event
        if (processedEventRepo.existsByEventId(event.getEventId())) {
            log.info("Duplicate event: {}, skipping", event.getEventId());
            return;
        }

        // Process the event
        inventoryService.reserveStock(event.productId(), event.quantity());

        // Record the event ID to prevent duplicate processing
        processedEventRepo.save(new ProcessedEvent(event.getEventId()));
    }
}
```

Kafka provides at-least-once delivery by default. Consumers must be idempotent. The transactional outbox pattern prevents dual-write problems (saving to DB and sending Kafka event atomically).

Use one topic per event type or per bounded context. Partition count should be equal to the maximum expected consumer parallelism. Replication factor 3 in production.

---

### Q13: How do you handle containerization for microservices with Docker?

**Answer:**

Each microservice gets a Docker image with multi-stage builds for minimal size. Spring Boot 3.x provides layered JARs for efficient Docker builds.

```dockerfile
# â”€â”€ Multi-stage Dockerfile for a Spring Boot microservice â”€â”€

# Stage 1: Build the application
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /build

# Copy Maven wrapper and pom.xml first (cache layer)
COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline -B

# Copy source and build
COPY src src
RUN ./mvnw package -DskipTests -B

# Stage 2: Extract Spring Boot layered JAR
FROM builder AS layers
WORKDIR /layers
RUN java -Djarmode=layertools -jar /build/target/*.jar extract

# Stage 3: Runtime image (minimal)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy each layer separately (Docker caches layers independently)
COPY --from=layers layers/dependencies/ ./
COPY --from=layers layers/spring-boot-loader/ ./
COPY --from=layers layers/snapshot-dependencies/ ./
COPY --from=layers layers/application/ ./

# Non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]
```

```yaml
# â”€â”€ docker-compose.yml for local development â”€â”€
version: '3.8'
services:
  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"

  config-server:
    build: ./config-server
    ports:
      - "8888:8888"
    depends_on:
      - eureka-server

  user-service:
    build: ./user-service
    ports:
      - "8081:8081"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
    depends_on:
      - eureka-server
      - config-server

  order-service:
    build: ./order-service
    ports:
      - "8082:8082"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
    depends_on:
      - eureka-server
      - config-server
      - user-service

  api-gateway:
    build: ./api-gateway
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
    depends_on:
      - eureka-server
      - user-service
      - order-service

  kafka:
    image: confluentinc/cp-kafka:7.6.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  zipkin:
    image: openzipkin/zipkin
    ports:
      - "9411:9411"
```

Key Docker best practices:
- Multi-stage builds keep images under 200 MB (vs 800+ MB with full JDK)
- `jre-alpine` as base reduces attack surface and size
- Layer ordering: dependencies change rarely, application code changes frequently
- HEALTHCHECK enables orchestration to detect dead instances
- Non-root user prevents container breakout from gaining root access
- docker-compose for local dev, Kubernetes for production


### Q14: How do you deploy microservices on Kubernetes?

**Answer:**

Kubernetes orchestrates containerized microservices with deployments, services, config maps, and ingress controllers.

```yaml
# â”€â”€ Deployment for a microservice â”€â”€
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  labels:
    app: order-service
spec:
  replicas: 3  # Run 3 instances for high availability
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
        - name: order-service
          image: raushan666/order-service:1.0.0
          imagePullPolicy: Always
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: "k8s"
            - name: DB_URL
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: url
            - name: DB_USERNAME
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: username
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: password
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 20
            periodSeconds: 5
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
---
# â”€â”€ Service (stable network endpoint) â”€â”€
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP  # Internal â€” only accessible within the cluster
---
# â”€â”€ ConfigMap for non-sensitive config â”€â”€
apiVersion: v1
kind: ConfigMap
metadata:
  name: order-service-config
data:
  application.yml: |
    order-service:
      order-timeout: 30s
      max-batch-size: 100
---
# â”€â”€ HPA (auto-scaling) â”€â”€
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
---
# â”€â”€ Ingress (external traffic routing) â”€â”€
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /users(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: user-service
                port:
                  number: 80
          - path: /orders(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: order-service
                port:
                  number: 80
```

Spring Boot Kubernetes-friendly configuration:
```yaml
# application-k8s.yml
spring:
  cloud:
    kubernetes:
      discovery:
        enabled: true   # Use Kubernetes DNS instead of Eureka
      config:
        enabled: true   # Read ConfigMap as configuration source
      secrets:
        enabled: true   # Read Secrets as configuration source
  config:
    import: configmap:order-service-config

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  health:
    livenessstate:
      enabled: true
    readinessstate:
      enabled: true
```

Deploy a new version:
```bash
kubectl set image deployment/order-service order-service=raushan666/order-service:1.1.0
kubectl rollout status deployment/order-service
```

Kubernetes replaces Eureka for service discovery (DNS resolution), replaces Config Server (ConfigMaps + Secrets), and provides health checks (liveness/readiness probes) instead of Eureka heartbeats. Use Spring Cloud Kubernetes for seamless integration.

---

### Q15: Compare deployment strategies: rolling, blue/green, and canary

**Answer:**

```java
// â”€â”€ Rolling update (Kubernetes default) â”€â”€
// Updates pods gradually â€” old pods keep serving until new ones are healthy
apiVersion: apps/v1
kind: Deployment
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        // One extra pod during update
      maxUnavailable: 0  // Zero downtime: only create new pods before removing old ones

// â”€â”€ Blue/Green deployment â”€â”€
// Two identical environments: Blue (current), Green (new)
apiVersion: apps/v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
    version: green   # â† Flip this from "blue" to "green" to switch traffic
---
# Deploy green:
# kubectl apply -f deployment-green.yml
# Wait for all green pods to pass readiness probes
# Then switch traffic:
# kubectl patch service order-service -p '{"spec":{"selector":{"version":"green"}}}'
# When confirmed, delete blue:
# kubectl delete -f deployment-blue.yml

// â”€â”€ Canary deployment (traffic splitting) â”€â”€
// Route 5% of traffic to the new version, monitor, then gradually increase
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  hosts:
    - order-service
  http:
    - match:
        - headers:
            canary:
              exact: "true"      # Route internal testers to canary
      route:
        - destination:
            host: order-service
            subset: canary
          weight: 100
    - route:
        - destination:
            host: order-service
            subset: stable
          weight: 95            # 95% traffic to stable
        - destination:
            host: order-service
            subset: canary
          weight: 5             # 5% to canary
---
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: order-service
spec:
  host: order-service
  subsets:
    - name: stable
      labels:
        version: v1
    - name: canary
      labels:
        version: v2
```

| Strategy | Downtime | Risk | Rollback Speed | Traffic Control | Complexity |
|----------|----------|------|---------------|-----------------|-----------|
| Rolling | None | Moderate (gradual exposure) | Slow | Limited (per-pod) | Low |
| Blue/Green | Switch moment (seconds) | Low (all traffic at once) | Instant (flip back) | None | Medium |
| Canary | None | Lowest (small % first) | Instant (cut traffic) | Fine-grained (1-99%) | High (Service Mesh) |

Start with rolling (built into Kubernetes, zero configuration). Move to blue/green when you need instant rollback. Use canary only when you have a service mesh (Istio, Linkerd) and need to test new versions on real traffic.

---

### Q16: How do you monitor microservices with Prometheus and Grafana?

**Answer:**

Spring Boot Actuator exposes metrics in Prometheus format. Prometheus scrapes them. Grafana visualizes dashboards.

```java
// â”€â”€ Dependencies â”€â”€
// implementation 'org.springframework.boot:spring-boot-starter-actuator'
// implementation 'io.micrometer:micrometer-registry-prometheus'

// â”€â”€ Configuration â”€â”€
// application.yml:
// management:
//   endpoints:
//     web:
//       exposure:
//         include: health,info,metrics,prometheus
//   metrics:
//     tags:
//       application: ${spring.application.name}
//     export:
//       prometheus:
//         enabled: true

// â”€â”€ Custom metrics â”€â”€
@Service
public class OrderMetricsService {
    private final Counter orderCounter;
    private final Timer orderTimer;
    private final DistributionSummary orderValueSummary;

    public OrderMetricsService(MeterRegistry registry) {
        orderCounter = Counter.builder("orders.created.total")
            .description("Total orders created")
            .tag("service", "order-service")
            .register(registry);

        orderTimer = Timer.builder("orders.processing.time")
            .description("Time taken to process an order")
            .publishPercentiles(0.5, 0.95, 0.99)
            .register(registry);

        orderValueSummary = DistributionSummary.builder("orders.value")
            .description("Order value distribution")
            .baseUnit("USD")
            .publishPercentiles(0.5, 0.95, 0.99)
            .register(registry);
    }

    public void recordOrder(BigDecimal value) {
        orderCounter.increment();
        orderValueSummary.record(value.doubleValue());
    }

    public <T> T measureOrderProcessing(Supplier<T> op) {
        return orderTimer.record(op);
    }
}

// â”€â”€ Micrometer annotations â”€â”€
@Component
public class PaymentProcessor {
    @Timed(value = "payment.processing", percentiles = {0.5, 0.95, 0.99})
    public PaymentResult processPayment(PaymentRequest req) {
        // Method execution time is automatically recorded
    }

    @Counted(value = "payment.retries", description = "Payment retry count")
    public void retryPayment(Long orderId) { }
}
```

```yaml
# â”€â”€ Prometheus config (prometheus.yml) â”€â”€
scrape_configs:
  - job_name: 'spring-boot-apps'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets:
        - 'user-service:8080'
        - 'order-service:8080'
        - 'payment-service:8080'

  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
```

```yaml
# â”€â”€ Kubernetes PodMonitor (operator-based scraping) â”€â”€
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: spring-boot-monitor
spec:
  selector:
    matchLabels:
      app: order-service
  podMetricsEndpoints:
    - port: http
      path: /actuator/prometheus
```

Grafana dashboard panels to create:
- Request rate (requests/sec by endpoint)
- Error rate (5xx / total requests)
- Latency (p50, p95, p99 in ms)
- JVM metrics (heap usage, GC pause time, thread count)
- Database connection pool (active/idle/waiting)
- Circuit breaker state (CLOSED/OPEN/HALF_OPEN)
- System metrics (CPU, memory, disk)

Alert on: p99 latency > 1s, error rate > 1%, circuit breaker OPEN, heap usage > 80%, connection pool exhaustion.

---

### Q17: How do you implement contract testing with Spring Cloud Contract?

**Answer:**

Contract testing verifies that a producer's API matches what the consumer expects, without end-to-end integration tests. Spring Cloud Contract generates tests and stubs from Groovy or YAML contracts.

```groovy
// â”€â”€ Producer contract (user-service) â”€â”€
// File: contracts/shouldReturnUser.groovy
Contract.make {
    description "should return user by ID"
    request {
        method GET()
        url "/users/1"
        headers {
            accept(applicationJson())
        }
    }
    response {
        status OK()
        headers {
            contentType(applicationJson())
        }
        body([
            id: 1,
            name: "Raushan",
            email: "raushan@example.com"
        ])
    }
}
```

```java
// â”€â”€ Producer-side base test (Spring Cloud Contract generates tests) â”€â”€
// File: src/test/java/.../BaseContractTest.java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public abstract class BaseContractTest {
    @Autowired
    private MockMvc mockMvc;

    // Spring Cloud Contract auto-creates a test class that extends this
    // and verifies the controller matches the contract
}
```

```bash
# Generate contract tests + publish stubs:
./mvnw verifystubs:8080
```

```java
// â”€â”€ Consumer-side (order-service uses stubs to test its client) â”€â”€
@SpringBootTest
@AutoConfigureStubRunner(
    stubsMode = StubRunnerProperties.StubsMode.LOCAL,
    ids = "com.company:user-service:+:stubs:8080"
)
class UserServiceClientTest {
    @Autowired
    private UserServiceClient userClient;

    @Test
    void shouldReturnUser() {
        UserDto user = userClient.getUser(1L);
        assertThat(user.id()).isEqualTo(1L);
        assertThat(user.name()).isEqualTo("Raushan");
        assertThat(user.email()).isEqualTo("raushan@example.com");
    }
}
```

Spring Cloud Contract automatically verifies that the consumer's client code works against the producer's contract. If the producer changes a response field, the consumer build breaks before deployment â€” not in production.

Contract testing replaces brittle end-to-end tests for cross-service integration. Combined with consumer-driven contracts, it prevents breaking changes from reaching production.

---

### Q18: How do you handle database-per-service with shared data concerns?

**Answer:**

Each microservice owns its database â€” no other service accesses it directly. Data that spans services is shared through events or API calls.

```java
// â”€â”€ Anti-pattern: direct database access â”€â”€
// order-service calls user-service's database directly â€” WRONG
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // order-service should NOT have this â€” it violates service boundaries
}

// â”€â”€ Correct: API-based data sharing â”€â”€
// order-service calls user-service's REST API
@FeignClient(name = "user-service")
public interface UserServiceClient {
    @GetMapping("/users/{id}/shipping-address")
    AddressDto getShippingAddress(@PathVariable Long id);
}

// â”€â”€ Correct: Event-based data sharing â”€â”€
// When user changes their shipping address, user-service publishes an event
@Service
public class UserService {
    @Transactional
    public void updateShippingAddress(Long userId, Address newAddress) {
        userRepo.updateAddress(userId, newAddress);
        // Publish event â€” order-service consumes and updates its local cache
        eventPublisher.publish(new AddressChangedEvent(userId, newAddress));
    }
}

// order-service caches only the shipping address it needs
@Service
public class OrderAddressService {
    @Autowired private OrderAddressCacheRepository addressCache;

    @Transactional
    @KafkaListener(topics = "user.address-changed")
    public void handleAddressChanged(AddressChangedEvent event) {
        orderAddressCache.save(
            new OrderAddressCache(event.userId(), event.newAddress()));
    }
}

@Entity
public class OrderAddressCache {
    @Id private Long userId;            // Same ID as user-service
    private String street;
    private String city;
    private String zipCode;
    // Only the fields order-service needs
}
```

Strategies for cross-service data:
1. **API calls**: Best for real-time data (get user details when creating an order)
2. **Event replication**: Best for reference data (cache user address locally, update via events)
3. **API composition**: Best for complex read models (API gateway aggregates responses)
4. **Shared kernel**: Rare â€” share only extremely stable data (country codes, tax rates) as a library

Never share databases between services. If two services need the same table, they are not independent â€” merge them into one service.

---

### Q19: What are common microservices anti-patterns and how do you avoid them?

**Answer:**

```java
// â”€â”€ Anti-pattern 1: Distributed Monolith â”€â”€
// Services are split but share a database and cannot deploy independently
@Entity
@Table(name = "orders")
public class Order {
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;  // â† Order-service needs User entity from user-service's DB
}
// Fix: Each service owns its data. Order-service stores only user_id as a value.

// â”€â”€ Anti-pattern 2: Chatty Communication â”€â”€
// Multiple API calls to complete one operation
@Service
public class OrderService {
    public Order createOrder(OrderRequest req) {
        UserDto user = userClient.getUser(req.userId());          // call 1
        AddressDto address = userClient.getAddress(req.userId()); // call 2
        PaymentMethodDto pm = userClient.getPaymentMethod(req.userId()); // call 3
        // Prefer bulk API: userClient.getUserWithDetails(req.userId())
    }
}

// â”€â”€ Anti-pattern 3: Shared Libraries for Domain Logic â”€â”€
// A shared JAR that contains business logic used by multiple services
public class OrderValidationUtils {
    // Any change to this requires rebuilding ALL services
    // Fix: duplicate validation logic per service or make it a separate microservice
}

// â”€â”€ Anti-pattern 4: Golden Hammer (everything must be a microservice) â”€â”€
@SpringBootApplication
public class EmailSendingService { }  // Could be a simple function + queue
// Fix: Use serverless functions for simple tasks. Not everything needs a full service.

// â”€â”€ Anti-pattern 5: No Monitoring or Observability â”€â”€
// Services communicate without tracing, logging correlation, or metrics
// Fix: Always include distributed tracing (Micrometer + Zipkin),
// structured logging (trace ID in every log), and Prometheus metrics.

// â”€â”€ Anti-pattern 6: Leaky Abstractions â”€â”€
// Internal implementation details leak through service boundaries
@FeignClient(name = "user-service")
public interface UserServiceClient {
    @GetMapping("/users/{id}/raw")
    String getRawUserData();  // Returns internal DB representation
}
// Fix: Each service has its own API contract with DTOs, not exposed entities.

// â”€â”€ Anti-pattern 7: Orchestration in the API Gateway â”€â”€
@RestController
public class ApiGatewayController {
    @GetMapping("/order-details/{orderId}")
    public OrderDetailsDto getOrderDetails(@PathVariable Long orderId) {
        OrderDto order = orderClient.getOrder(orderId);
        UserDto user = userClient.getUser(order.userId());
        ProductDto product = productClient.getProduct(order.productId());
        // Gateway is now doing orchestration â€” it should just route
    }
}
// Fix: Create a dedicated order-aggregation-service for API composition.
```

Golden rule: If splitting a service doesn't give you independent deployability, independent scalability, or independent team ownership, don't split it.

---

### Q20: How do you test microservices end-to-end?

**Answer:**

Testing microservices uses a pyramid: unit tests (many) â†’ integration tests (fewer) â†’ contract tests (per pair) â†’ end-to-end tests (few).

```java
// â”€â”€ Layer 1: Unit tests (fast, isolated, mock external calls) â”€â”€
@ExtendWith(MockitoExtension.class)
class OrderServiceUnitTest {
    @Mock private OrderRepository orderRepo;
    @Mock private UserServiceClient userClient;
    @InjectMocks private OrderService orderService;

    @Test
    void shouldCreateOrder() {
        when(userClient.getUser(1L)).thenReturn(new UserDto(1L, "Raushan"));
        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal("50.00"));

        Order result = orderService.createOrder(req);

        assertThat(result.getStatus()).isEqualTo("PENDING");
        verify(orderRepo).save(any(Order.class));
    }
}

// â”€â”€ Layer 2: Integration tests with TestContainers â”€â”€
@SpringBootTest
@Testcontainers
class OrderServiceIntegrationTest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16");

    @Container
    static KafkaContainer kafka = new KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:7.6.0"));

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry reg) {
        reg.add("spring.datasource.url", postgres::getJdbcUrl);
        reg.add("spring.kafka.bootstrap-servers", kafka::getBootstrapServers);
    }

    @Autowired private OrderService orderService;
    @Autowired private OrderRepository orderRepo;

    @Test
    void shouldPersistOrder() {
        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal("50.00"));

        Order result = orderService.createOrder(req);

        assertThat(orderRepo.findById(result.getId())).isPresent();
        assertThat(result.getTotal()).isEqualByComparingTo(new BigDecimal("100.00"));
    }
}

// â”€â”€ Layer 3: Contract tests (Spring Cloud Contract or Pact) â”€â”€
@SpringBootTest
@AutoConfigureStubRunner(
    stubsMode = StubRunnerProperties.StubsMode.LOCAL,
    ids = "com.company:user-service:+:stubs:8080")
class OrderServiceContractTest {
    @Autowired
    private UserServiceClient userClient;

    @Test
    void shouldGetUser() {
        UserDto user = userClient.getUser(1L);
        assertThat(user.name()).isEqualTo("Raushan");
    }
}

// â”€â”€ Layer 4: End-to-end tests (few, smoke-test critical paths) â”€â”€
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
class OrderE2ETest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16");

    @Container
    static KafkaContainer kafka = new KafkaContainer(
        DockerImageName.parse("confluentinc/cp-kafka:7.6.0"));

    @LocalServerPort
    private int port;

    private WebTestClient client;

    @BeforeEach
    void setUp() {
        client = WebTestClient.bindToServer()
            .baseUrl("http://localhost:" + port)
            .build();
    }

    @Test
    void fullOrderFlow() {
        // Create order via REST
        client.post().uri("/orders")
            .bodyValue(new OrderRequest(1L, 100L, 2, new BigDecimal("50.00")))
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("$.status").isEqualTo("PENDING")
            .jsonPath("$.total").isEqualTo(100.00);

        // Verify Kafka event was published
        // (consume the event from the test container and assert)
    }
}

// â”€â”€ WireMock for external service simulation â”€â”€
@SpringBootTest
@WireMockTest(httpPort = 9090)
class OrderServiceWireMockTest {
    @Test
    void shouldHandleUserServiceTimeout() {
        // Simulate slow user-service response
        stubFor(get(urlEqualTo("/users/1"))
            .willReturn(aResponse()
                .withFixedDelay(5000)
                .withStatus(200)));

        // Circuit breaker should trigger fallback
        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal("50.00"));
        assertThrows(CircuitBreakerOpenException.class,
            () -> orderService.createOrder(req));
    }
}
```

End-to-end tests are slow and flaky. Keep them to 3-5 critical paths per service. Rely on contract tests for cross-service integration and unit tests for business logic.


### Q21: What is a service mesh and when would you use Istio?

**Answer:**

A service mesh manages service-to-service communication at the infrastructure layer using sidecar proxies. Istio injects an Envoy proxy alongside each pod, handling traffic management, security, and observability without changing application code.

```java
// â”€â”€ Without service mesh: circuit breaker in application code â”€â”€
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;

    @CircuitBreaker(name = "userService", fallbackMethod = "fallback")
    public UserDto getUser(Long id) {
        return userClient.getUser(id);
    }
}

// â”€â”€ With Istio: circuit breaker moves to infrastructure â”€â”€
// application code is clean â€” no Resilience4j annotations needed
@Service
public class OrderService {
    @Autowired private UserServiceClient userClient;

    public UserDto getUser(Long id) {
        return userClient.getUser(id);  // No circuit breaker â€” Istio handles it
    }
}
```

```yaml
# â”€â”€ Istio DestinationRule (circuit breaker at mesh level) â”€â”€
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
# â”€â”€ Istio VirtualService (traffic splitting for canary) â”€â”€
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
# â”€â”€ Istio PeerAuthentication (mTLS between services) â”€â”€
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: default
spec:
  mtls:
    mode: STRICT  # All inter-service traffic must use mTLS
---
# â”€â”€ Istio AuthorizationPolicy â”€â”€
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
- Traffic management (canary, circuit breaker, retries, timeouts â€” no code changes)
- Security (mTLS, authorization, authentication at the proxy level)
- Observability (automatic metrics, traces, access logs per request)
- Resilience (timeouts, retries, circuit breaking, outlier detection)

Use a service mesh when you have 10+ services and can't add cross-cutting code to each one. Do not use a service mesh for small deployments (3-5 services) â€” the complexity of managing sidecars and control plane is not worth it.

---

### Q22: How do you implement structured logging and log aggregation?

**Answer:**

Structured logging outputs JSON with consistent fields (service name, trace ID, level, message, timestamp). ELK or Loki aggregates logs from all services into a searchable store.

```java
// â”€â”€ Logback configuration for structured JSON logging â”€â”€
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

// â”€â”€ Dependencies â”€â”€
// implementation 'net.logstash.logback:logstash-logback-encoder:7.4'

// â”€â”€ Structured logging in application code â”€â”€
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

// â”€â”€ JSON output (single log entry) â”€â”€
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

// â”€â”€ Loki log query â”€â”€
// {service="order-service", level="ERROR"} |= "traceId=abc123def456"
// {service=~"user-service|order-service", level="ERROR"} | json | line_format "{{.message}}"

// â”€â”€ Logback MDC with auto-cleanup via Filter â”€â”€
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
- Structured JSON means no regex parsing â€” just query fields
- Never log sensitive data (PII, passwords, tokens) â€” even in structured logs
- Correlation ID (traceId) connects logs across services during a single request flow
- Use Loki + Grafana for Kubernetes-native log aggregation (no Elasticsearch cluster needed)

---

### Q23: How do you handle database migrations across multiple microservices?

**Answer:**

Each microservice manages its own database migrations independently. Migrations are versioned, sequential, and tested in CI.

```java
// â”€â”€ Each service has its own Flyway configuration â”€â”€
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

// â”€â”€ Migration files are prefixed by version: V{version}__{description}.sql â”€â”€
// order-service:
//   db/migration/order/V1__create_orders_table.sql
//   db/migration/order/V2__add_status_column.sql
//   db/migration/order/V3__add_indexes.sql
//
// user-service:
//   db/migration/user/V1__create_users_table.sql
//   db/migration/user/V2__add_email_verification.sql

// â”€â”€ V3__add_indexes.sql for order-service â”€â”€
-- Create indexes for common queries
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status) WHERE status IN ('PENDING', 'PROCESSING');
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- Backfill existing data if needed
-- UPDATE orders SET status = 'PENDING' WHERE status IS NULL;

// â”€â”€ Advanced: multi-service migration coordination â”€â”€
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

// â”€â”€ Backward compatibility: expand-contract for cross-service migrations â”€â”€
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
for f in db/migration/*/V*.sql; do
  down="${f/V/__down/V}"
  if [ ! -f "${down}" ]; then
    echo "WARNING: No undo migration for $f"
  fi
done

# Check for SQL syntax errors via dry-run
flyway migrate -dryRunOutput=dry-run.sql
```

Each service's migration is independent. Never share migration files across services. Backward-compatible migrations (expand phase) allow zero-downtime deployment.

---

### Q24: How do you implement idempotency in microservices?

**Answer:**

Idempotency ensures that processing the same request multiple times produces the same result. For asynchronous processing, this means deduplication at the consumer.

```java
// â”€â”€ Idempotency key pattern (for REST endpoints) â”€â”€
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

// â”€â”€ Idempotency registry (using database for persistence) â”€â”€
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

// â”€â”€ Idempotent Kafka consumer â”€â”€
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

// â”€â”€ Guarantee: atomic check-then-process with database constraint â”€â”€
// PostgreSQL:
// CREATE UNIQUE INDEX idx_idempotency ON idempotency_keys(idempotency_key);
//
// INSERT INTO idempotency_keys(idempotency_key, result_id, created_at)
// VALUES ('key-123', NULL, NOW())
// ON CONFLICT (idempotency_key) DO NOTHING
// RETURNING idempotency_key;
//
// If the INSERT returns the key, this is the first call â€” process normally.
// If it returns nothing, another request already started processing â€” return cached result.

```

Idempotency is not optional in microservices â€” network retries guarantee duplicate requests. Every write endpoint should accept an idempotency key. Every async consumer should deduplicate by event ID.

---

### Q25: What distributed caching strategies work for microservices?

**Answer:**

Distributed caching (Redis) reduces latency and database load. Two primary patterns: cache-aside (read-through) and write-through.

```java
// â”€â”€ Cache-aside: read from cache, miss -> load from DB -> populate cache â”€â”€
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

        // Cache miss â€” load from database
        Product product = productRepo.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        ProductDto dto = ProductDto.from(product);

        // Populate cache with TTL
        redis.opsForValue().set(key, dto, CACHE_TTL);
        return dto;
    }

    // â”€â”€ Invalidate cache on write â”€â”€
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

// â”€â”€ Spring Cache abstraction â”€â”€
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

// â”€â”€ Redis configuration for distributed caching â”€â”€
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

// â”€â”€ Cache stampede prevention â”€â”€
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

        // Lock not acquired â€” wait briefly and retry
        Thread.sleep(100);
        return redis.opsForValue().get(key);  // Should be populated by now
    }
}

// â”€â”€ Cache strategy comparison â”€â”€
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
