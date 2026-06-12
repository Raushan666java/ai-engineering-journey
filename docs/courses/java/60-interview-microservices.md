# Microservices Interview Q&A

This chapter covers 30 essential microservices interview questions from service decomposition and inter-service communication through resilience patterns, distributed tracing, saga orchestration, and observability. Each answer includes complete, compilable Java and Spring Boot code examples targeting senior-level backend interviews.

### Q1: How do you decompose a monolith into microservices using Domain-Driven Design?

**Answer:** Decomposition starts by identifying bounded contexts â€” explicit boundaries within which a domain model applies. Each bounded context gets its own ubiquitous language, and ideally becomes one microservice. The decomposition follows subdomains: core (competitive advantage), supporting (needed but not core), and generic (off-the-shelf). Conway's Law tells us organizations design systems that mirror their communication structure, so service boundaries should align with team boundaries.

```java
import java.math.BigDecimal;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

record Money(BigDecimal amount, String currency) {
    Money {
        if (amount.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
    }
    public Money add(Money other) {
        if (!this.currency.equals(other.currency))
            throw new IllegalArgumentException("Currency mismatch");
        return new Money(this.amount.add(other.amount), this.currency);
    }
    public Money multiply(int quantity) {
        return new Money(this.amount.multiply(BigDecimal.valueOf(quantity)), this.currency);
    }
}

record Address(String street, String city, String zipCode, String country) {}

class Order {
    private final UUID orderId;
    private UUID customerId;
    private List<OrderLine> orderLines;
    private OrderStatus status;
    private Money total;
    private Instant createdAt;

    public Order(UUID customerId) {
        this.orderId = UUID.randomUUID();
        this.customerId = customerId;
        this.orderLines = new ArrayList<>();
        this.status = OrderStatus.DRAFT;
        this.total = new Money(BigDecimal.ZERO, "USD");
        this.createdAt = Instant.now();
    }

    public void addLine(String productId, String productName, int quantity, Money price) {
        if (status != OrderStatus.DRAFT)
            throw new IllegalStateException("Can only modify DRAFT orders");
        this.orderLines.add(new OrderLine(productId, productName, quantity, price));
        this.total = this.total.add(price.multiply(quantity));
    }

    public OrderConfirmed confirm() {
        if (status != OrderStatus.DRAFT)
            throw new IllegalStateException("Order already confirmed");
        if (orderLines.isEmpty())
            throw new IllegalStateException("Cannot confirm empty order");
        this.status = OrderStatus.CONFIRMED;
        return new OrderConfirmed(this.orderId, this.customerId, this.total, Instant.now());
    }

    public UUID getOrderId() { return orderId; }
    public OrderStatus getStatus() { return status; }
    public Money getTotal() { return total; }
}

enum OrderStatus { DRAFT, CONFIRMED, SHIPPED, DELIVERED, CANCELLED }

class OrderLine {
    private final String productId;
    private final String productName;
    private final int quantity;
    private final Money price;

    OrderLine(String productId, String productName, int quantity, Money price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
    public Money subtotal() { return price.multiply(quantity); }
    public String getProductId() { return productId; }
    public int getQuantity() { return quantity; }
}

record OrderConfirmed(UUID orderId, UUID customerId, Money total, Instant occurredOn) {}

interface OrderRepository {
    Order save(Order order);
    java.util.Optional<Order> findById(UUID orderId);
    List<Order> findByCustomerId(UUID customerId);
}

class OrderService {
    private final OrderRepository orderRepository;
    private final EventBus eventBus;

    public OrderService(OrderRepository orderRepository, EventBus eventBus) {
        this.orderRepository = orderRepository;
        this.eventBus = eventBus;
    }

    public Order createOrder(UUID customerId) {
        Order order = new Order(customerId);
        return orderRepository.save(order);
    }

    public void confirmOrder(UUID orderId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new IllegalArgumentException("Order not found: " + orderId));
        OrderConfirmed event = order.confirm();
        orderRepository.save(order);
        eventBus.publish(event);
    }
}

interface EventBus { void publish(Object event); }
```

### Q2: Should you use database-per-service or a shared database in microservices?

**Answer:** Database-per-service is the microservices default. Each service owns its data and exposes it only through its API. This provides loose coupling, independent deployability, and the right data store per service. A shared database creates tight coupling â€” schema changes require coordinated deploys, and any service can bypass another's data rules.

```java
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "orders")
class OrderEntity {
    @Id
    private UUID id;
    private UUID customerId;
    private String status;
    private BigDecimal totalAmount;
    private String currency;
    private Instant createdAt;

    public OrderEntity() {}
    public OrderEntity(UUID customerId) {
        this.id = UUID.randomUUID();
        this.customerId = customerId;
        this.status = "DRAFT";
        this.totalAmount = BigDecimal.ZERO;
        this.currency = "USD";
        this.createdAt = Instant.now();
    }
    public UUID getId() { return id; }
    public UUID getCustomerId() { return customerId; }
    public String getStatus() { return status; }
}

interface OrderJpaRepository extends JpaRepository<OrderEntity, UUID> {}

@Entity
@Table(name = "customers")
class CustomerEntity {
    @Id
    private UUID id;
    private String name;
    private String email;

    public CustomerEntity() {}
    public CustomerEntity(String name, String email) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.email = email;
    }
}

interface CustomerJpaRepository extends JpaRepository<CustomerEntity, UUID> {}

import org.springframework.web.client.RestClient;

class CustomerOrderService {
    private final RestClient restClient;

    public CustomerOrderService(RestClient.Builder builder) {
        this.restClient = RestClient.builder()
            .baseUrl("http://order-service/api/orders").build();
    }

    public List<?> getOrdersForCustomer(UUID customerId) {
        return restClient.get()
            .uri("/?customerId={customerId}", customerId)
            .retrieve()
            .body(List.class);
    }
}
```

### Q3: What is the difference between synchronous and asynchronous communication in microservices?

**Answer:** Synchronous via REST/gRPC is request/response â€” the caller blocks until it gets an answer. It works well for queries that need immediate data. Asynchronous via messaging decouples the sender from the receiver â€” the sender publishes an event and continues immediately. Async provides better resilience, scalability, and loose coupling. Use synchronous for queries and commands needing immediate confirmation. Use async for event notifications and commands where response is not time-critical.

```java
import org.springframework.web.client.RestClient;
import java.time.Duration;

class SyncOrderClient {
    private final RestClient restClient;

    public SyncOrderClient(RestClient.Builder builder) {
        this.restClient = builder.baseUrl("http://order-service").build();
    }

    public OrderResponse getOrder(String orderId) {
        return restClient.get()
            .uri("/api/orders/{id}", orderId)
            .retrieve()
            .body(OrderResponse.class);
    }
}

record OrderResponse(String id, String status, String customerId) {}

import org.springframework.amqp.rabbit.core.RabbitTemplate;

class AsyncOrderNotifier {
    private final RabbitTemplate rabbitTemplate;

    public AsyncOrderNotifier(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void onOrderShipped(String orderId, String customerEmail) {
        OrderShippedEvent event = new OrderShippedEvent(orderId, customerEmail,
            "Your order has shipped!");
        rabbitTemplate.convertAndSend("order.exchange", "order.shipped", event);
    }
}

record OrderShippedEvent(String orderId, String customerEmail, String message) {}

import org.springframework.amqp.rabbit.annotation.RabbitListener;

class NotificationService {
    @RabbitListener(queues = "order.shipped.queue")
    public void handleOrderShipped(OrderShippedEvent event) {
        sendEmail(event.customerEmail(), event.message());
    }
    private void sendEmail(String to, String body) {
        System.out.println("Sending email to " + to + ": " + body);
    }
}
```

### Q4: Explain choreography vs orchestration sagas. When should you use each?

**Answer:** Choreography is decentralized: each service produces events and listens to events from others. Each service executes its local transaction and publishes a domain event that triggers the next service. Orchestration uses a central coordinator that tells each service what to do via commands and listens for replies. Choreography works well for simple sagas with 2-4 services. Orchestration is better for complex sagas with many participants, branching logic, or when centralized monitoring is needed.

```java
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.UUID;

record OrderCreatedEvent(String orderId, String customerId, BigDecimal amount) {}

@Service
class OrderChoreographyService {
    private final RabbitTemplate rabbitTemplate;
    private final OrderRepository orderRepository;

    public OrderChoreographyService(RabbitTemplate rabbitTemplate,
                                     OrderRepository orderRepository) {
        this.rabbitTemplate = rabbitTemplate;
        this.orderRepository = orderRepository;
    }

    @Transactional
    public String createOrder(String customerId, BigDecimal amount) {
        String orderId = UUID.randomUUID().toString();
        orderRepository.save(new OrderEntity(UUID.fromString(orderId),
            UUID.fromString(customerId)));
        rabbitTemplate.convertAndSend("saga.exchange", "order.created",
            new OrderCreatedEvent(orderId, customerId, amount));
        return orderId;
    }
}

record PaymentProcessedEvent(String orderId, String paymentId, boolean success) {}

@Service
class PaymentChoreographyHandler {
    @RabbitListener(queues = "saga.order.created")
    @Transactional
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            String paymentId = UUID.randomUUID().toString();
            rabbitTemplate.convertAndSend("saga.exchange", "payment.processed",
                new PaymentProcessedEvent(event.orderId(), paymentId, true));
        } catch (Exception e) {
            rabbitTemplate.convertAndSend("saga.exchange", "payment.failed",
                new PaymentFailedEvent(event.orderId(), e.getMessage()));
        }
    }
}

record PaymentFailedEvent(String orderId, String reason) {}
record RefundPaymentEvent(String orderId, String paymentId) {}

import org.springframework.statemachine.StateMachine;

@Service
class SagaOrchestrator {
    private final CommandBus commandBus;
    private final SagaStateRepository sagaStateRepository;

    public SagaOrchestrator(CommandBus commandBus,
                             SagaStateRepository sagaStateRepository) {
        this.commandBus = commandBus;
        this.sagaStateRepository = sagaStateRepository;
    }

    public void startSaga(String orderId, String customerId, BigDecimal amount) {
        SagaState state = new SagaState(orderId, customerId, amount);
        commandBus.send(new ReserveInventoryCommand(orderId));
        state.setCurrentStep("INVENTORY_RESERVING");
        sagaStateRepository.save(state);
    }

    public void onInventoryReserved(String orderId) {
        SagaState state = sagaStateRepository.findById(orderId);
        commandBus.send(new ProcessPaymentCommand(orderId,
            state.getCustomerId(), state.getAmount()));
        state.setCurrentStep("PAYMENT_PROCESSING");
        sagaStateRepository.save(state);
    }

    public void onPaymentProcessed(String orderId) {
        SagaState state = sagaStateRepository.findById(orderId);
        commandBus.send(new ConfirmOrderCommand(orderId));
        state.setCurrentStep("ORDER_CONFIRMING");
        sagaStateRepository.save(state);
    }

    public void onPaymentFailed(String orderId) {
        commandBus.send(new ReleaseInventoryCommand(orderId));
        failSaga(orderId, "Payment failed");
    }

    private void failSaga(String orderId, String reason) {
        SagaState state = sagaStateRepository.findById(orderId);
        state.setStatus("FAILED");
        state.setFailureReason(reason);
        sagaStateRepository.save(state);
    }
}

record ReserveInventoryCommand(String orderId) {}
record ProcessPaymentCommand(String orderId, String customerId, BigDecimal amount) {}
record ConfirmOrderCommand(String orderId) {}
record ReleaseInventoryCommand(String orderId) {}

class SagaState {
    private String orderId;
    private String customerId;
    private BigDecimal amount;
    private String currentStep;
    private String status;
    private String failureReason;

    public SagaState(String orderId, String customerId, BigDecimal amount) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.amount = amount;
        this.status = "STARTED";
    }
    public String getOrderId() { return orderId; }
    public String getCustomerId() { return customerId; }
    public BigDecimal getAmount() { return amount; }
    public String getCurrentStep() { return currentStep; }
    public void setCurrentStep(String step) { this.currentStep = step; }
    public String getStatus() { return status; }
    public void setStatus(String s) { this.status = s; }
    public String getFailureReason() { return failureReason; }
    public void setFailureReason(String r) { this.failureReason = r; }
}

interface SagaStateRepository {
    SagaState findById(String orderId);
    void save(SagaState state);
}

interface CommandBus {
    void send(Object command);
}
```

### Q5: How does Spring Cloud Netflix Eureka work for service discovery?

**Answer:** Eureka follows client-side service discovery. Services register with the Eureka server at startup and send heartbeats. Consumers query the server for available instances and cache the registry locally. `@EnableEurekaServer` turns a Spring Boot app into the registry. `@EnableEurekaClient` makes a service register itself. Eureka uses self-preservation â€” if heartbeats are lost, it keeps the last known instance list instead of immediately evicting, preventing cascade failures in network partitions.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.ServiceInstance;
import java.util.List;

@Service
class OrderDiscoveryService {
    private final DiscoveryClient discoveryClient;

    public OrderDiscoveryService(DiscoveryClient discoveryClient) {
        this.discoveryClient = discoveryClient;
    }

    public String getPaymentServiceUrl() {
        List<ServiceInstance> instances = discoveryClient.getInstances("payment-service");
        if (instances.isEmpty())
            throw new RuntimeException("No payment-service instances available");
        ServiceInstance instance = instances.get(0);
        return "http://" + instance.getHost() + ":" + instance.getPort();
    }

    public void listAllServices() {
        discoveryClient.getServices().forEach(serviceName -> {
            System.out.println("Service: " + serviceName);
            discoveryClient.getInstances(serviceName).forEach(instance ->
                System.out.println("  Instance: " + instance.getUri()));
        });
    }
}

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestTemplate;

@Configuration
class LoadBalancerConfig {
    @Bean
    @LoadBalanced
    public RestTemplate loadBalancedRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    @LoadBalanced
    public RestClient.Builder loadBalancedRestClientBuilder() {
        return RestClient.builder();
    }
}

@Service
class OrderClient {
    private final RestTemplate restTemplate;

    public OrderClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public PaymentStatus checkPayment(String paymentId) {
        return restTemplate.getForObject(
            "http://payment-service/api/payments/{id}",
            PaymentStatus.class, paymentId);
    }
}

record PaymentStatus(String id, String status) {}
```

### Q6: How does Spring Cloud Gateway work? How do you configure routes, predicates, and filters?

**Answer:** Spring Cloud Gateway is a non-blocking API gateway built on Spring WebFlux. Routes map incoming requests to downstream services. Predicates match request attributes (path, header, query param). Filters modify requests and responses (auth, rate limiting, header transform, circuit breaker). The gateway acts as the single entry point for all microservices.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;
import reactor.core.publisher.Mono;

@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("order-service", r -> r
                .path("/api/orders/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .circuitBreaker(config -> config
                        .setName("orderServiceCB")
                        .setFallbackUri("forward:/fallback/orders"))
                    .retry(config -> config
                        .setRetries(3)
                        .setStatuses(java.util.Set.of(500, 503)))
                    .requestRateLimiter(config -> config
                        .setRateLimiter(redisRateLimiter())
                        .setKeyResolver(userKeyResolver())))
                .uri("lb://order-service"))
            .route("payment-service", r -> r
                .path("/api/payments/**")
                .and().header("X-Request-Source", "gateway")
                .filters(f -> f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway-Request", "true")
                    .addResponseHeader("X-Gateway-Version", "1.0")
                    .dedupeResponseHeader("Access-Control-Allow-Origin", "RETAIN_UNIQUE"))
                .uri("lb://payment-service"))
            .route("product-service", r -> r
                .path("/api/products/**")
                .and().method("GET")
                .filters(f -> f
                    .stripPrefix(1)
                    .setResponseHeader("Cache-Control", "max-age=300"))
                .uri("lb://product-service"))
            .build();
    }

    @Bean
    public RedisRateLimiter redisRateLimiter() {
        return new RedisRateLimiter(10, 20, 1);
    }

    @Bean
    public KeyResolver userKeyResolver() {
        return exchange -> {
            String userId = exchange.getRequest().getHeaders()
                .getFirst("X-User-Id");
            return Mono.justOrEmpty(userId).defaultIfEmpty("anonymous");
        };
    }
}

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fallback")
class FallbackController {
    @GetMapping("/orders")
    public String orderFallback() {
        return "{\"error\": \"Order service is temporarily unavailable. Please try again later.\"}";
    }
}

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
class JwtAuthGlobalFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        if (path.startsWith("/auth/") || path.startsWith("/public/"))
            return chain.filter(exchange);

        String authHeader = exchange.getRequest().getHeaders()
            .getFirst("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7);
        try {
            Claims claims = validateToken(token);
            exchange.getRequest().mutate()
                .header("X-User-Id", claims.subject())
                .header("X-User-Roles", String.join(",", claims.roles()));
            return chain.filter(exchange);
        } catch (Exception e) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }

    private Claims validateToken(String token) {
        return new Claims("user-123", java.util.List.of("USER"));
    }

    @Override
    public int getOrder() { return -100; }
}

record Claims(String subject, java.util.List<String> roles) {}
```

### Q7: How do you implement resilience patterns with Resilience4j in Spring Boot?

**Answer:** Resilience4j provides decorators for circuit breaker, retry, rate limiter, bulkhead, and time limiter. The circuit breaker wraps remote calls and monitors failures. When failures exceed a threshold within a sliding window, the circuit opens and subsequent calls fail fast with a fallback. After a wait duration, it becomes half-open for probe calls. Retry with exponential backoff handles transient failures. Rate limiter controls frequency. Bulkhead limits concurrent calls. Time limiter sets max execution duration.

```java
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import org.springframework.web.client.RestTemplate;
import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

@Service
class PaymentClient {
    private final RestTemplate restTemplate;

    public PaymentClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    @Retry(name = "paymentRetry", fallbackMethod = "paymentFallback")
    public PaymentResponse processPayment(PaymentRequest request) {
        return restTemplate.postForObject(
            "http://payment-service/api/payments",
            request, PaymentResponse.class);
    }

    public PaymentResponse paymentFallback(PaymentRequest request, Exception ex) {
        System.err.println("Payment service call failed: " + ex.getMessage());
        return new PaymentResponse("fallback-" + UUID.randomUUID(),
            "PENDING", "Service unavailable");
    }

    @RateLimiter(name = "paymentRateLimiter", fallbackMethod = "rateLimitFallback")
    public PaymentResponse processPaymentWithRateLimit(PaymentRequest request) {
        return processPayment(request);
    }

    public PaymentResponse rateLimitFallback(PaymentRequest request, Exception ex) {
        return new PaymentResponse(null, "RATE_LIMITED", "Too many requests");
    }

    @Bulkhead(name = "paymentBulkhead", type = Bulkhead.Type.THREADPOOL)
    @TimeLimiter(name = "paymentTimeLimiter")
    public CompletableFuture<PaymentResponse> processPaymentAsync(PaymentRequest request) {
        return CompletableFuture.supplyAsync(() -> processPayment(request));
    }
}

record PaymentRequest(String orderId, BigDecimal amount, String currency) {}
record PaymentResponse(String paymentId, String status, String message) {}

import io.github.resilience4j.circuitbreaker.CircuitBreaker;
import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;
import io.github.resilience4j.circuitbreaker.CircuitBreakerRegistry;
import io.github.resilience4j.decorators.Decorators;
import java.time.Duration;

@Service
class ProgrammaticResilienceService {
    private final CircuitBreaker circuitBreaker;
    private final PaymentClient paymentClient;

    public ProgrammaticResilienceService(CircuitBreakerRegistry registry,
                                          PaymentClient paymentClient) {
        this.circuitBreaker = registry.circuitBreaker("paymentService",
            CircuitBreakerConfig.custom()
                .slidingWindowType(CircuitBreakerConfig.SlidingWindowType.COUNT_BASED)
                .slidingWindowSize(20)
                .failureRateThreshold(40)
                .waitDurationInOpenState(Duration.ofSeconds(15))
                .permittedNumberOfCallsInHalfOpenState(5)
                .build());
        this.paymentClient = paymentClient;
    }

    public PaymentResponse callWithCircuitBreaker(PaymentRequest request) {
        Supplier<PaymentResponse> decorated = Decorators.ofSupplier(
                () -> paymentClient.processPayment(request))
            .withCircuitBreaker(circuitBreaker)
            .withFallback(ex -> new PaymentResponse(null, "FALLBACK",
                "Service degraded: " + ex.getMessage()))
            .decorate();
        return decorated.get();
    }
}

import io.micrometer.core.instrument.MeterRegistry;
import jakarta.annotation.PostConstruct;

@Component
class CircuitBreakerMetricsExporter {
    private final CircuitBreakerRegistry registry;
    private final MeterRegistry meterRegistry;

    public CircuitBreakerMetricsExporter(CircuitBreakerRegistry registry,
                                          MeterRegistry meterRegistry) {
        this.registry = registry;
        this.meterRegistry = meterRegistry;
    }

    @PostConstruct
    public void registerMetrics() {
        registry.getAllCircuitBreakers().forEach(cb -> {
            meterRegistry.gauge("resilience4j.circuitbreaker.state",
                java.util.List.of(
                    io.micrometer.core.instrument.Tag.of("name", cb.getName())),
                cb, c -> c.getState().ordinal());
        });
    }
}
```

### Q8: How do you implement distributed tracing with Micrometer Tracing and OpenTelemetry?

**Answer:** Micrometer Tracing provides a vendor-neutral facade for distributed tracing. It automatically propagates trace IDs and span IDs across HTTP headers. OpenTelemetry is the underlying instrumentation library. Configure a sampler (always, probability, or rate-limiting) and an exporter (Zipkin, Jaeger, Tempo via OTLP). Each service gets a unique `service.name`. The trace ID flows through all services for full request path reconstruction.

```java
import io.micrometer.observation.Observation;
import io.micrometer.observation.ObservationRegistry;
import io.micrometer.tracing.BaggageInScope;
import io.micrometer.tracing.Tracer;

@Service
class OrderTracingService {
    private final ObservationRegistry observationRegistry;
    private final Tracer tracer;

    public OrderTracingService(ObservationRegistry observationRegistry, Tracer tracer) {
        this.observationRegistry = observationRegistry;
        this.tracer = tracer;
    }

    public OrderResponse createOrderWithTracing(OrderRequest request) {
        return Observation.createNotStarted("order.create", observationRegistry)
            .lowCardinalityKeyValue("customerId", request.customerId())
            .highCardinalityKeyValue("orderAmount", request.amount().toString())
            .observe(() -> {
                try (BaggageInScope baggage =
                        tracer.createBaggage("customerId", request.customerId())) {
                    OrderResponse response = doCreateOrder(request);
                    tracer.currentSpan().ifPresent(span ->
                        span.tag("orderId", response.orderId()));
                    return response;
                }
            });
    }

    private OrderResponse doCreateOrder(OrderRequest request) {
        return new OrderResponse(UUID.randomUUID().toString(), "CREATED");
    }
}

record OrderRequest(String customerId, BigDecimal amount) {}
record OrderResponse(String orderId, String status) {}

import io.micrometer.tracing.TraceContext;
import io.micrometer.tracing.Tracer;
import org.springframework.scheduling.annotation.Async;
import java.util.concurrent.CompletableFuture;

@Service
class AsyncOrderProcessor {
    private final Tracer tracer;

    public AsyncOrderProcessor(Tracer tracer) {
        this.tracer = tracer;
    }

    @Async
    public CompletableFuture<Void> processOrderAsync(String orderId) {
        TraceContext context = tracer.currentTraceContext().context();
        if (context != null) {
            System.out.println("Processing order " + orderId +
                " in trace: " + context.traceId());
        }
        return CompletableFuture.completedFuture(null);
    }
}
```

### Q9: How does Spring Cloud Config work for distributed configuration?

**Answer:** Spring Cloud Config Server serves configuration from a git repository. Services pull config on startup by sending their application name and active profile. The server responds with merged configuration. Sensitive values are encrypted using symmetric or asymmetric keys. `@RefreshScope` allows beans to reload without restarting â€” a POST to `/actuator/refresh` triggers bean re-creation. Spring Cloud Bus propagates refresh events across all instances via a message broker.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RefreshScope
@RestController
class OrderConfigController {

    @Value("${app.max-order-limit:50}")
    private int maxOrderLimit;

    @Value("${app.features.discount-service:false}")
    private boolean discountServiceEnabled;

    @Value("${app.payment-timeout-ms:3000}")
    private int paymentTimeoutMs;

    @GetMapping("/api/config")
    public ConfigResponse getConfig() {
        return new ConfigResponse(maxOrderLimit, discountServiceEnabled, paymentTimeoutMs);
    }
}

record ConfigResponse(int maxOrderLimit, boolean discountServiceEnabled, int paymentTimeoutMs) {}

import org.springframework.cloud.bus.event.RefreshRemoteApplicationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
class ConfigRefreshListener {
    @EventListener
    public void onRefresh(RefreshRemoteApplicationEvent event) {
        System.out.println("Config refresh received from: " +
            event.getOriginService() + " for destination: " +
            event.getDestinationService());
    }
}

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.vault.authentication.ClientAuthentication;
import org.springframework.vault.authentication.TokenAuthentication;
import org.springframework.vault.client.VaultEndpoint;
import org.springframework.vault.config.AbstractVaultConfiguration;
import java.net.URI;

@Configuration
class VaultConfig extends AbstractVaultConfiguration {
    @Override
    public VaultEndpoint vaultEndpoint() {
        return VaultEndpoint.from(URI.create("http://vault:8200"));
    }

    @Override
    public ClientAuthentication clientAuthentication() {
        return new TokenAuthentication(System.getenv("VAULT_TOKEN"));
    }
}
```

### Q10: Explain the 12-factor app principles and how they apply to microservices.

**Answer:** The 12-factor app methodology defines principles for building cloud-native applications: codebase (one repo, many deploys), dependencies (explicit declaration), config (environment variables), backing services (attached resources), build/release/run (strict separation), processes (stateless), port binding (self-contained HTTP), concurrency (scale via processes), disposability (fast startup/graceful shutdown), dev/prod parity, logs (event streams), and admin processes (one-off tasks). These principles are the foundation of cloud-native microservices.

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
class AppConfiguration {
    @Value("${DB_URL}") private String dbUrl;
    @Value("${DB_USERNAME}") private String dbUsername;
    @Value("${DB_PASSWORD}") private String dbPassword;
    @Value("${MAX_CONNECTIONS:10}") private int maxConnections;
}

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
class DatabaseConfig {
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(System.getenv("DB_URL"));
        config.setUsername(System.getenv("DB_USERNAME"));
        config.setPassword(System.getenv("DB_PASSWORD"));
        config.setMaximumPoolSize(Integer.parseInt(
            System.getenv().getOrDefault("MAX_CONNECTIONS", "10")));
        config.setConnectionTimeout(5000);
        return new HikariDataSource(config);
    }
}

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
class GracefulShutdownHandler {
    private static final Logger log = LoggerFactory.getLogger(GracefulShutdownHandler.class);

    @PreDestroy
    public void onShutdown() {
        log.info("Shutting down gracefully...");
        log.info("Shutdown complete");
    }
}

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import java.util.UUID;

@Service
class StructuredLoggingService {
    private static final Logger log = LoggerFactory.getLogger(StructuredLoggingService.class);

    public void processOrder(String orderId) {
        MDC.put("orderId", orderId);
        MDC.put("traceId", UUID.randomUUID().toString());
        log.info("Processing order started");
        try {
            log.info("Order validated successfully");
        } catch (Exception e) {
            log.error("Order processing failed", e);
        } finally {
            MDC.clear();
        }
    }
}

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class DatabaseMigrationRunner implements CommandLineRunner {
    @Override
    public void run(String... args) {
        if (args.length > 0 && "migrate".equals(args[0])) {
            System.out.println("Running database migrations...");
            System.exit(0);
        }
    }
}
```

### Q11: How do you implement health checks with readiness and liveness probes in Spring Boot?

**Answer:** Spring Boot Actuator exposes `/actuator/health` with status aggregating all health indicators. Kubernetes distinguishes liveness (is the app alive? restart if not) and readiness (is the app ready to serve traffic? remove from service if not). Spring Boot groups health indicators into probe groups. Liveness should be cheap (JVM health). Readiness should check downstream dependencies.

```java
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
class PaymentServiceHealthIndicator implements HealthIndicator {
    private final PaymentServiceClient paymentClient;

    public PaymentServiceHealthIndicator(PaymentServiceClient paymentClient) {
        this.paymentClient = paymentClient;
    }

    @Override
    public Health health() {
        try {
            boolean reachable = paymentClient.healthCheck();
            if (reachable)
                return Health.up()
                    .withDetail("service", "payment-service")
                    .withDetail("latencyMs", 42)
                    .build();
            return Health.down()
                .withDetail("service", "payment-service")
                .withDetail("error", "Health check returned false")
                .build();
        } catch (Exception e) {
            return Health.down(e)
                .withDetail("service", "payment-service")
                .build();
        }
    }
}

interface PaymentServiceClient {
    boolean healthCheck();
}

import org.springframework.boot.actuate.availability.ReadinessStateHealthIndicator;
import org.springframework.boot.availability.ApplicationAvailability;
import org.springframework.boot.availability.ReadinessState;
import org.springframework.stereotype.Component;

@Component
class DatabaseReadinessIndicator extends ReadinessStateHealthIndicator {
    public DatabaseReadinessIndicator(ApplicationAvailability availability) {
        super(availability);
    }

    @Override
    protected void doHealthCheck(Health.Builder builder) {
        builder.up()
            .withDetail("database", "connected")
            .withDetail("migration", "up-to-date");
    }
}

import org.springframework.boot.actuate.health.CompositeHealthContributor;
import org.springframework.boot.actuate.health.HealthContributor;
import org.springframework.boot.actuate.health.NamedContributor;
import org.springframework.stereotype.Component;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Iterator;

@Component
class DownstreamServiceHealthContributor implements CompositeHealthContributor {
    private final Map<String, HealthContributor> contributors = new LinkedHashMap<>();

    public DownstreamServiceHealthContributor(
            PaymentServiceHealthIndicator payment,
            InventoryServiceHealthIndicator inventory) {
        contributors.put("payment", payment);
        contributors.put("inventory", inventory);
    }

    @Override
    public HealthContributor getContributor(String name) {
        return contributors.get(name);
    }

    @Override
    public Iterator<NamedContributor<HealthContributor>> iterator() {
        return contributors.entrySet().stream()
            .map(entry -> NamedContributor.of(entry.getKey(), entry.getValue()))
            .iterator();
    }
}

@Component
class InventoryServiceHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        return Health.up().withDetail("inventory", "available").build();
    }
}
```

### Q12: What are the three pillars of observability? How do you implement them in Spring Boot?

**Answer:** The three pillars are logging (structured event records), metrics (numeric measurements), and tracing (end-to-end request flow). Logging uses structured JSON via Logstash encoder with MDC context. Metrics use Micrometer to expose JVM, application, and custom metrics via Prometheus. Tracing uses OpenTelemetry to propagate trace context. Grafana combines all three.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
class StructuredLoggingFilter extends OncePerRequestFilter {
    private static final Logger log = LoggerFactory.getLogger(StructuredLoggingFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain) {
        String correlationId = request.getHeader("X-Correlation-Id");
        if (correlationId == null || correlationId.isBlank())
            correlationId = UUID.randomUUID().toString();

        MDC.put("correlationId", correlationId);
        MDC.put("service", "order-service");
        long startTime = System.currentTimeMillis();
        log.info("Incoming request: {} {}", request.getMethod(), request.getRequestURI());

        try {
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            log.error("Request failed", e);
        } finally {
            long duration = System.currentTimeMillis() - startTime;
            MDC.put("durationMs", String.valueOf(duration));
            log.info("Request completed");
            MDC.clear();
        }
    }
}

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import io.micrometer.core.instrument.DistributionSummary;
import org.springframework.stereotype.Service;
import java.util.concurrent.Callable;

@Service
class MetricsService {
    private final Counter orderCreatedCounter;
    private final Counter orderFailedCounter;
    private final Timer orderProcessingTimer;
    private final DistributionSummary orderValueSummary;

    public MetricsService(MeterRegistry meterRegistry) {
        this.orderCreatedCounter = Counter.builder("orders.created")
            .description("Total number of created orders")
            .tag("service", "order-service")
            .register(meterRegistry);

        this.orderFailedCounter = Counter.builder("orders.failed")
            .description("Total number of failed orders")
            .tag("service", "order-service")
            .register(meterRegistry);

        this.orderProcessingTimer = Timer.builder("orders.processing.time")
            .description("Time taken to process an order")
            .tag("service", "order-service")
            .publishPercentiles(0.5, 0.95, 0.99)
            .register(meterRegistry);

        this.orderValueSummary = DistributionSummary.builder("orders.value")
            .description("Distribution of order values")
            .tag("service", "order-service")
            .publishPercentiles(0.5, 0.95, 0.99)
            .register(meterRegistry);
    }

    public void recordOrderCreated() { orderCreatedCounter.increment(); }

    public void recordOrderFailed(String reason) {
        orderFailedCounter.increment();
    }

    public <T> T measureProcessingTime(Callable<T> callable) throws Exception {
        return orderProcessingTimer.recordCallable(callable);
    }

    public void recordOrderValue(double amount) {
        orderValueSummary.record(amount);
    }
}

import io.micrometer.core.annotation.Timed;
import java.util.UUID;

@Service
@Timed("orders.service")
class TimedOrderService {
    @Timed(value = "orders.create", longTask = true)
    public OrderResponse createOrder(OrderRequest request) {
        return new OrderResponse(UUID.randomUUID().toString(), "CREATED");
    }
}
```

### Q13: Explain the difference between client-side and server-side service discovery.

**Answer:** In client-side discovery, the client queries a registry (Eureka) and uses a load balancer (Spring Cloud LoadBalancer) to pick an instance. In server-side discovery, the client sends requests to a load balancer (Kubernetes Service or AWS ALB) that routes to healthy instances without the client knowing the registry. Client-side reduces hops and works well in Spring Cloud. Server-side offloads discovery from applications and is standard in Kubernetes.

```java
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Configuration
@LoadBalancerClient(name = "payment-service")
class ClientSideDiscoveryConfig {
    @Bean
    @LoadBalanced
    public RestTemplate loadBalancedRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    @LoadBalanced
    public WebClient.Builder loadBalancedWebClientBuilder() {
        return WebClient.builder();
    }
}

@Service
class ClientSideOrderService {
    private final RestTemplate restTemplate;

    public ClientSideOrderService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public PaymentResponse getPayment(String paymentId) {
        return restTemplate.getForObject(
            "http://payment-service/api/payments/{id}",
            PaymentResponse.class, paymentId);
    }
}

@Service
class ServerSideOrderService {
    private final RestTemplate restTemplate;

    public ServerSideOrderService() {
        this.restTemplate = new RestTemplate();
    }

    public PaymentResponse getPayment(String paymentId) {
        return restTemplate.getForObject(
            "http://payment-service.default.svc.cluster.local:8080/api/payments/{id}",
            PaymentResponse.class, paymentId);
    }
}

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableDiscoveryClient
class KubernetesDiscoveryConfig {}
```

### Q14: Compare RabbitMQ, Kafka, and Amazon SQS for microservices messaging.

**Answer:** RabbitMQ is a general-purpose broker with complex routing (exchanges, bindings); ideal for task distribution and RPC. Kafka is a distributed event streaming platform for high-throughput, persistent, replayable logs; ideal for event sourcing and stream processing. SQS is a fully managed queue with at-least-once delivery, pull-based consumption, and zero operational overhead.

```java
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class RabbitMQConfig {
    static final String EXCHANGE = "order.exchange";
    static final String QUEUE = "order.queue";
    static final String ROUTING_KEY = "order.created";

    @Bean
    public TopicExchange orderExchange() { return new TopicExchange(EXCHANGE); }

    @Bean
    public Queue orderQueue() {
        return QueueBuilder.durable(QUEUE)
            .withArgument("x-dead-letter-exchange", "order.dlx")
            .withArgument("x-dead-letter-routing-key", "order.dead")
            .build();
    }

    @Bean
    public Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(ROUTING_KEY);
    }

    @Bean
    public Jackson2JsonMessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(messageConverter());
        template.setConfirmCallback((correlationData, ack, cause) -> {
            if (!ack) System.err.println("Message not confirmed: " + cause);
        });
        template.setReturnsCallback(returned ->
            System.err.println("Message returned: " + returned.getMessage()));
        return template;
    }
}

@Service
class RabbitMQProducer {
    private final RabbitTemplate rabbitTemplate;

    public RabbitMQProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void publishOrderCreated(OrderCreatedEvent event) {
        rabbitTemplate.convertAndSend(
            RabbitMQConfig.EXCHANGE, RabbitMQConfig.ROUTING_KEY, event);
    }
}

import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.*;
import org.springframework.kafka.listener.CommonLoggingErrorHandler;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;
import java.util.Map;

@Configuration
class KafkaConfig {
    @Bean
    public NewTopic orderEventsTopic() {
        return TopicBuilder.name("order.events")
            .partitions(6).replicas(3)
            .config("cleanup.policy", "compact")
            .build();
    }

    @Bean
    public NewTopic orderDeadLetterTopic() {
        return TopicBuilder.name("order.events.DLT")
            .partitions(3).replicas(1)
            .build();
    }

    @Bean
    public ProducerFactory<String, Object> producerFactory() {
        Map<String, Object> config = Map.of(
            ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092",
            ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class,
            ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class,
            ProducerConfig.ACKS_CONFIG, "all",
            ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true,
            ProducerConfig.RETRIES_CONFIG, 10,
            ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy");
        return new DefaultKafkaProducerFactory<>(config);
    }

    @Bean
    public KafkaTemplate<String, Object> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }

    @Bean
    public ConsumerFactory<String, Object> consumerFactory() {
        JsonDeserializer<Object> deserializer = new JsonDeserializer<>();
        deserializer.addTrustedPackages("com.company.*");
        Map<String, Object> config = Map.of(
            ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092",
            ConsumerConfig.GROUP_ID_CONFIG, "order-service-group",
            ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class,
            ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class,
            ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest",
            ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false,
            ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 100);
        return new DefaultKafkaConsumerFactory<>(config,
            new StringDeserializer(), deserializer);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Object>
            kafkaListenerContainerFactory() {
        var factory = new ConcurrentKafkaListenerContainerFactory<String, Object>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3);
        factory.setCommonErrorHandler(new CommonLoggingErrorHandler());
        return factory;
    }
}

@Service
class KafkaEventPublisher {
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public KafkaEventPublisher(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publish(String topic, String key, Object event) {
        kafkaTemplate.send(topic, key, event)
            .whenComplete((result, ex) -> {
                if (ex != null)
                    System.err.println("Failed to publish event: " + ex.getMessage());
                else
                    System.out.println("Published to " +
                        result.getRecordMetadata().topic());
            });
    }
}

@Service
class KafkaEventConsumer {
    @KafkaListener(topics = "order.events", groupId = "payment-service-group")
    public void onOrderCreated(OrderCreatedEvent event) {
        System.out.println("Processing order " + event.orderId());
    }
}

import io.awspring.cloud.sqs.annotation.SqsListener;
import io.awspring.cloud.sqs.operations.SqsTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.sqs.SqsAsyncClient;

@Configuration
class SQSConfig {
    @Bean
    public SqsAsyncClient sqsAsyncClient() {
        return SqsAsyncClient.builder().region(Region.US_EAST_1).build();
    }

    @Bean
    public SqsTemplate sqsTemplate(SqsAsyncClient client) {
        return SqsTemplate.builder().sqsAsyncClient(client).build();
    }
}

@Service
class SQSEventPublisher {
    private final SqsTemplate sqsTemplate;
    public SQSEventPublisher(SqsTemplate sqsTemplate) { this.sqsTemplate = sqsTemplate; }
    public void publishOrderEvent(OrderCreatedEvent event) {
        sqsTemplate.send("order-events-queue", event);
    }
}

@Service
class SQSEventConsumer {
    @SqsListener("order-events-queue")
    public void onOrderCreated(OrderCreatedEvent event) {
        System.out.println("SQS consumer received order: " + event.orderId());
    }
}
```

### Q15: How do you implement event-driven architecture with domain events in Spring Boot?

**Answer:** Event-driven architecture uses domain events to communicate state changes. The publishing service publishes events to a broker. Consuming services react asynchronously. Events represent facts (past tense: `OrderPlaced`, `PaymentReceived`). Each event carries the aggregate ID, event type, payload, timestamp, and correlation ID. Eventual consistency means consumers see events after a delay.

```java
import java.time.Instant;
import java.util.UUID;

abstract class DomainEvent {
    private final UUID eventId;
    private final Instant occurredOn;
    private final UUID correlationId;

    protected DomainEvent(UUID correlationId) {
        this.eventId = UUID.randomUUID();
        this.occurredOn = Instant.now();
        this.correlationId = correlationId;
    }

    public UUID getEventId() { return eventId; }
    public Instant getOccurredOn() { return occurredOn; }
    public UUID getCorrelationId() { return correlationId; }
    public abstract String getEventType();
}

class OrderPlaced extends DomainEvent {
    private final String orderId;
    private final String customerId;
    private final BigDecimal total;

    public OrderPlaced(UUID correlationId, String orderId,
                       String customerId, BigDecimal total) {
        super(correlationId);
        this.orderId = orderId;
        this.customerId = customerId;
        this.total = total;
    }
    @Override public String getEventType() { return "order.placed"; }
    public String getOrderId() { return orderId; }
    public BigDecimal getTotal() { return total; }
}

class PaymentProcessed extends DomainEvent {
    private final String paymentId;
    private final String orderId;
    private final boolean success;

    public PaymentProcessed(UUID correlationId, String paymentId,
                            String orderId, boolean success) {
        super(correlationId);
        this.paymentId = paymentId;
        this.orderId = orderId;
        this.success = success;
    }
    @Override public String getEventType() { return "payment.processed"; }
    public boolean isSuccess() { return success; }
}

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
class DomainEventPublisher {
    private final ApplicationEventPublisher springEventPublisher;
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public DomainEventPublisher(ApplicationEventPublisher springEventPublisher,
                                 KafkaTemplate<String, Object> kafkaTemplate) {
        this.springEventPublisher = springEventPublisher;
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publish(String topic, DomainEvent event) {
        springEventPublisher.publishEvent(event);
        kafkaTemplate.send(topic, event.getEventId().toString(), event);
        System.out.println("Published event: " + event.getEventType());
    }
}

record EventEnvelope(
    UUID eventId,
    String eventType,
    String aggregateId,
    String aggregateType,
    Object payload,
    UUID correlationId,
    Instant occurredOn,
    int version
) {
    public static EventEnvelope from(String aggregateId, String aggregateType,
                                      DomainEvent event) {
        return new EventEnvelope(
            event.getEventId(), event.getEventType(),
            aggregateId, aggregateType, event,
            event.getCorrelationId(), event.getOccurredOn(), 1);
    }
}

import org.springframework.kafka.annotation.KafkaListener;

@Service
class EventConsumer {
    @KafkaListener(topics = "order.events", groupId = "notification-service")
    public void handleOrderPlaced(EventEnvelope envelope) {
        if (!"order.placed".equals(envelope.eventType())) return;
        OrderPlaced event = (OrderPlaced) envelope.payload();
        System.out.println("Sending confirmation for order: " + event.getOrderId());
    }

    @KafkaListener(topics = "order.events", groupId = "analytics-service")
    public void handleOrderPlacedAnalytics(EventEnvelope envelope) {
        if (!"order.placed".equals(envelope.eventType())) return;
        OrderPlaced event = (OrderPlaced) envelope.payload();
        System.out.println("Recording analytics for order: " + event.getOrderId());
    }
}

import org.springframework.data.redis.core.StringRedisTemplate;
import java.util.concurrent.TimeUnit;

@Service
class IdempotentEventConsumer {
    private final StringRedisTemplate redisTemplate;

    public IdempotentEventConsumer(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public boolean alreadyProcessed(UUID eventId) {
        return Boolean.TRUE.equals(
            redisTemplate.hasKey("processed-events:" + eventId));
    }

    public void markProcessed(UUID eventId) {
        redisTemplate.opsForValue().set(
            "processed-events:" + eventId, "true", 24, TimeUnit.HOURS);
    }

    @KafkaListener(topics = "order.events", groupId = "payment-service")
    public void handleEvent(EventEnvelope envelope) {
        if (alreadyProcessed(envelope.eventId())) {
            System.out.println("Skipping duplicate event: " + envelope.eventId());
            return;
        }
        try {
            processEvent(envelope);
            markProcessed(envelope.eventId());
        } catch (Exception e) {
            System.err.println("Failed to process: " + e.getMessage());
        }
    }

    private void processEvent(EventEnvelope envelope) {}
}
```

### Q16: Explain the Saga pattern and how you handle compensating transactions.

**Answer:** A saga manages distributed transactions across multiple services by breaking them into local transactions with compensating actions. If a step fails, compensating transactions undo previously completed steps. Compensating transactions must be idempotent. The saga log records every step for recovery.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.Instant;
import java.util.UUID;

class SagaState {
    private final String sagaId;
    private final String orderId;
    private String status;
    private String failureReason;
    private final Instant createdAt;

    public SagaState(String orderId) {
        this.sagaId = UUID.randomUUID().toString();
        this.orderId = orderId;
        this.status = "STARTED";
        this.createdAt = Instant.now();
    }
    public String getSagaId() { return sagaId; }
    public String getOrderId() { return orderId; }
    public String getStatus() { return status; }
    public void setStatus(String s) { this.status = s; }
    public void setFailureReason(String r) { this.failureReason = r; }
}

interface SagaLog {
    void save(SagaState state);
    void updateStatus(String sagaId, String status);
    SagaState findBySagaId(String sagaId);
    List<SagaState> findStuckSagas(Instant threshold);
}

@Service
class OrderSagaOrchestrator {
    private static final Logger log = LoggerFactory.getLogger(OrderSagaOrchestrator.class);
    private final KafkaTemplate<String, Object> kafkaTemplate;
    private final SagaLog sagaLog;

    public OrderSagaOrchestrator(KafkaTemplate<String, Object> kafkaTemplate,
                                  SagaLog sagaLog) {
        this.kafkaTemplate = kafkaTemplate;
        this.sagaLog = sagaLog;
    }

    public void startSaga(String orderId, BigDecimal amount) {
        SagaState state = new SagaState(orderId);
        sagaLog.save(state);
        log.info("Saga {} started for order {}", state.getSagaId(), orderId);
        kafkaTemplate.send("saga.commands", "inventory.reserve",
            new ReserveInventoryCommand(state.getSagaId(), orderId));
    }

    public void onInventoryReserved(String sagaId, String orderId, BigDecimal amount) {
        sagaLog.updateStatus(sagaId, "INVENTORY_RESERVED");
        kafkaTemplate.send("saga.commands", "payment.capture",
            new CapturePaymentCommand(sagaId, orderId, amount));
    }

    public void onPaymentCaptured(String sagaId, String orderId) {
        sagaLog.updateStatus(sagaId, "PAYMENT_CAPTURED");
        kafkaTemplate.send("saga.commands", "order.confirm",
            new ConfirmOrderCommand(sagaId, orderId));
    }

    public void onOrderConfirmed(String sagaId) {
        sagaLog.updateStatus(sagaId, "COMPLETED");
        log.info("Saga {} completed", sagaId);
    }

    public void onPaymentFailed(String sagaId, String orderId, String reason) {
        sagaLog.updateStatus(sagaId, "FAILED");
        kafkaTemplate.send("saga.commands", "inventory.release",
            new ReleaseInventoryCommand(sagaId, orderId));
        log.warn("Compensating: releasing inventory for order {}", orderId);
    }

    public void onOrderConfirmationFailed(String sagaId, String orderId) {
        sagaLog.updateStatus(sagaId, "FAILED");
        kafkaTemplate.send("saga.commands", "payment.refund",
            new RefundPaymentCommand(sagaId, orderId));
        kafkaTemplate.send("saga.commands", "inventory.release",
            new ReleaseInventoryCommand(sagaId, orderId));
        log.warn("Compensating: refund + release inventory for {}", orderId);
    }
}

record ReserveInventoryCommand(String sagaId, String orderId) {}
record CapturePaymentCommand(String sagaId, String orderId, BigDecimal amount) {}
record ConfirmOrderCommand(String sagaId, String orderId) {}
record ReleaseInventoryCommand(String sagaId, String orderId) {}
record RefundPaymentCommand(String sagaId, String orderId) {}

@Service
class InventorySagaHandler {
    private static final Logger log = LoggerFactory.getLogger(InventorySagaHandler.class);

    @Transactional
    public void reserveInventory(ReserveInventoryCommand cmd) {
        log.info("Reserving inventory for order {}", cmd.orderId());
    }

    @Transactional
    public void releaseInventory(ReleaseInventoryCommand cmd) {
        log.info("Compensating: releasing inventory for order {}", cmd.orderId());
    }
}

import org.springframework.scheduling.annotation.Scheduled;

@Component
class SagaRecoveryJob {
    private static final Logger log = LoggerFactory.getLogger(SagaRecoveryJob.class);
    private final SagaLog sagaLog;

    public SagaRecoveryJob(SagaLog sagaLog) { this.sagaLog = sagaLog; }

    @Scheduled(fixedRate = 60000)
    public void recoverStuckSagas() {
        Instant threshold = Instant.now().minusSeconds(300);
        List<SagaState> stuck = sagaLog.findStuckSagas(threshold);
        for (SagaState saga : stuck) {
            log.warn("Stuck saga {} for order {}", saga.getSagaId(), saga.getOrderId());
        }
    }
}

import java.util.concurrent.ConcurrentSkipListSet;

@Service
class IdempotentCompensationService {
    private final Set<String> completed = new ConcurrentSkipListSet<>();

    public boolean isAlreadyCompensated(String sagaId, String step) {
        return completed.contains(sagaId + ":" + step);
    }

    public void markCompensated(String sagaId, String step) {
        completed.add(sagaId + ":" + step);
    }

    public void releaseInventory(String sagaId, String orderId) {
        if (isAlreadyCompensated(sagaId, "release-inventory")) return;
        markCompensated(sagaId, "release-inventory");
        System.out.println("Inventory released for order " + orderId);
    }
}
```

### Q17: How do you handle distributed configuration in Kubernetes?

**Answer:** Kubernetes provides ConfigMaps for non-sensitive config and Secrets for sensitive data. Spring Boot reads these via environment variables or mounted volumes. External tools like External Secrets Operator, Sealed Secrets, or Vault manage encrypted secrets. `spring-cloud-starter-kubernetes-client` allows watching ConfigMaps for live reload.

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RefreshScope
@RestController
class ConfigMapController {
    @Value("${app.max-order-limit:50}")
    private int maxOrderLimit;

    @Value("${app.features.new-checkout:false}")
    private boolean newCheckoutEnabled;

    @GetMapping("/api/config/status")
    public ConfigStatus getStatus() {
        return new ConfigStatus(maxOrderLimit, newCheckoutEnabled);
    }

    record ConfigStatus(int maxOrderLimit, boolean newCheckoutEnabled) {}
}
```

### Q18: How do you implement rate limiting in a microservices architecture?

**Answer:** Rate limiting can be implemented at the API gateway (user/IP-based), the service (Resilience4j RateLimiter), or the database (connection pool limits). The gateway is best for external limiting before requests reach services. Common algorithms include token bucket (burst-aware), sliding window (smooth), and fixed window (simple but allows boundary bursts).

```java
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Mono;

@Configuration
class GatewayRateLimitConfig {
    @Bean
    public RedisRateLimiter orderServiceRateLimiter() {
        return new RedisRateLimiter(100, 200, 1);
    }

    @Bean
    public KeyResolver userKeyResolver() {
        return exchange -> {
            String userId = exchange.getRequest().getHeaders()
                .getFirst("X-User-Id");
            return Mono.justOrEmpty(userId).defaultIfEmpty("unknown");
        };
    }

    @Bean
    public KeyResolver ipKeyResolver() {
        return exchange -> Mono.justOrEmpty(
            exchange.getRequest().getRemoteAddress()
                .map(addr -> addr.getAddress().getHostAddress())
        ).defaultIfEmpty("unknown");
    }
}

import io.github.resilience4j.ratelimiter.RequestNotPermitted;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
class RateLimitedOrderController {
    private final OrderService orderService;

    public RateLimitedOrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    @RateLimiter(name = "orderCreation")
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest request) {
        return ResponseEntity.ok(orderService.createOrder(request));
    }

    @ExceptionHandler(RequestNotPermitted.class)
    public ResponseEntity<ErrorResponse> handleRateLimit(RequestNotPermitted ex) {
        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
            .header("Retry-After", "1")
            .body(new ErrorResponse("rate_limit_exceeded",
                "Too many requests. Please try again later."));
    }
}

record ErrorResponse(String code, String message) {}

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;

@Component
class TokenBucketRateLimiter {
    private final ConcurrentMap<String, TokenBucket> buckets = new ConcurrentHashMap<>();

    public boolean tryAcquire(String key, int tokens) {
        TokenBucket bucket = buckets.computeIfAbsent(key,
            k -> new TokenBucket(100, 10));
        return bucket.tryAcquire(tokens);
    }

    static class TokenBucket {
        private final long capacity;
        private final double refillRate;
        private final AtomicLong tokens;
        private volatile long lastRefillTimestamp;

        TokenBucket(long capacity, double refillRatePerSecond) {
            this.capacity = capacity;
            this.refillRate = refillRatePerSecond;
            this.tokens = new AtomicLong(capacity);
            this.lastRefillTimestamp = System.nanoTime();
        }

        boolean tryAcquire(int requiredTokens) {
            refill();
            while (true) {
                long current = tokens.get();
                if (current < requiredTokens) return false;
                if (tokens.compareAndSet(current, current - requiredTokens)) return true;
            }
        }

        private void refill() {
            long now = System.nanoTime();
            long elapsed = now - lastRefillTimestamp;
            if (elapsed > 0) {
                long newTokens = Math.min(
                    (long) (refillRate * elapsed / 1_000_000_000), capacity);
                if (newTokens > 0) {
                    lastRefillTimestamp = now;
                    tokens.updateAndGet(curr -> Math.min(curr + newTokens, capacity));
                }
            }
        }
    }
}
```

### Q19: Explain the difference between REST, gRPC, and messaging for inter-service communication.

**Answer:** REST is synchronous, HTTP-based, uses JSON, universally understood. gRPC is synchronous, HTTP/2-based, uses Protocol Buffers, offers strong typing and streaming. Messaging is asynchronous, broker-based, offers best decoupling. Use REST for public APIs and CRUD. Use gRPC for high-performance internal calls with streaming. Use messaging for event-driven communication where decoupling matters.

```java
import org.springframework.web.client.RestClient;

@Service
class RestCommunication {
    private final RestClient restClient;

    public RestCommunication(RestClient.Builder builder) {
        this.restClient = RestClient.builder()
            .baseUrl("http://payment-service").build();
    }

    public PaymentStatus getPaymentStatus(String paymentId) {
        return restClient.get()
            .uri("/api/payments/{id}", paymentId)
            .retrieve()
            .body(PaymentStatus.class);
    }
}

// gRPC proto definition:
// service PaymentService {
//     rpc ProcessPayment(ProcessPaymentRequest) returns (ProcessPaymentResponse);
//     rpc StreamPaymentStatus(StreamRequest) returns (stream PaymentUpdate);
// }

// gRPC Server (conceptual - requires protobuf codegen):
// @GrpcService
// class PaymentGrpcService extends PaymentServiceGrpc.PaymentServiceImplBase {
//     @Override
//     public void processPayment(ProcessPaymentRequest request,
//                                 StreamObserver<ProcessPaymentResponse> responseObserver) {
//         ProcessPaymentResponse response = ProcessPaymentResponse.newBuilder()
//             .setPaymentId(UUID.randomUUID().toString())
//             .setStatus("COMPLETED")
//             .build();
//         responseObserver.onNext(response);
//         responseObserver.onCompleted();
//     }
// }

record PaymentStatus(String id, String status) {}
```

### Q20: What is the strangler fig pattern for incremental migration to microservices?

**Answer:** The strangler fig pattern incrementally replaces monolith functionality with microservices. New features are built as microservices. A routing layer gradually routes requests to new services. Once fully migrated, the old monolith code is removed. This allows safe, incremental migration without big-bang rewrites.

```java
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Component
class StranglerFigFilter implements Filter {
    private final HttpClient httpClient;
    private static final String MONOLITH_BASE = "http://monolith:8080";
    private static final String ORDER_SERVICE_BASE = "http://order-service:8081";
    private static final String PAYMENT_SERVICE_BASE = "http://payment-service:8082";
    private final FeatureFlagService featureFlags;

    public StranglerFigFilter(FeatureFlagService featureFlags) {
        this.featureFlags = featureFlags;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5)).build();
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        String path = httpRequest.getRequestURI();

        String targetUrl = getTargetUrl(path);
        if (targetUrl != null) {
            proxyTo(targetUrl, httpRequest, httpResponse);
            return;
        }
        chain.doFilter(request, response);
    }

    private String getTargetUrl(String path) {
        if (path.startsWith("/api/orders/checkout") && featureFlags.isEnabled("new-checkout"))
            return ORDER_SERVICE_BASE + path;
        if (path.startsWith("/api/payments") && featureFlags.isEnabled("new-payments"))
            return PAYMENT_SERVICE_BASE + path;
        if (path.startsWith("/api/products"))
            return ORDER_SERVICE_BASE + path;
        return null;
    }

    private void proxyTo(String targetUrl, HttpServletRequest request,
                          HttpServletResponse response) throws IOException {
        try {
            HttpRequest.Builder proxyRequest = HttpRequest.newBuilder()
                .uri(URI.create(targetUrl + "?" + request.getQueryString()))
                .timeout(Duration.ofSeconds(10));

            String method = request.getMethod();
            switch (method) {
                case "GET" -> proxyRequest.GET();
                case "POST" -> proxyRequest.POST(
                    HttpRequest.BodyPublishers.ofInputStream(request::getInputStream));
                case "PUT" -> proxyRequest.PUT(
                    HttpRequest.BodyPublishers.ofInputStream(request::getInputStream));
                case "DELETE" -> proxyRequest.DELETE();
            }

            java.util.Collections.list(request.getHeaderNames())
                .forEach(name -> {
                    if (!"Host".equalsIgnoreCase(name))
                        java.util.Collections.list(request.getHeaders(name))
                            .forEach(value -> proxyRequest.header(name, value));
                });

            HttpResponse<byte[]> proxyResponse = httpClient.send(
                proxyRequest.build(), HttpResponse.BodyHandlers.ofByteArray());

            response.setStatus(proxyResponse.statusCode());
            response.getOutputStream().write(proxyResponse.body());
        } catch (Exception e) {
            response.setStatus(502);
            response.getWriter().write("{\"error\":\"Bad gateway\"}");
        }
    }
}

@Service
class FeatureFlagService {
    private final Map<String, Boolean> flags = new ConcurrentHashMap<>();

    public FeatureFlagService() {
        flags.put("new-products", true);
        flags.put("new-orders", false);
        flags.put("new-checkout", true);
        flags.put("new-payments", false);
    }

    public boolean isEnabled(String feature) {
        return flags.getOrDefault(feature, false);
    }
}
```

### Q21: How do you handle distributed transactions without two-phase commit?

**Answer:** Distributed transactions via 2PC are avoided because they introduce coupling and blocking. Instead, use the Saga pattern with compensating transactions, event-driven eventual consistency, or the Outbox pattern. In the Outbox pattern, the service writes both data changes and events in the same local transaction. A separate process reads the outbox table and publishes events to the broker.

```java
import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "outbox_events")
class OutboxEvent {
    @Id
    private UUID id;
    private String aggregateType;
    private String aggregateId;
    private String eventType;
    @Column(columnDefinition = "TEXT")
    private String payload;
    private Instant createdAt;
    @Enumerated(EnumType.STRING)
    private OutboxStatus status;

    enum OutboxStatus { PENDING, PUBLISHED, FAILED }

    public OutboxEvent() {}
    public OutboxEvent(String aggregateType, String aggregateId,
                        String eventType, String payload) {
        this.id = UUID.randomUUID();
        this.aggregateType = aggregateType;
        this.aggregateId = aggregateId;
        this.eventType = eventType;
        this.payload = payload;
        this.createdAt = Instant.now();
        this.status = OutboxStatus.PENDING;
    }

    public UUID getId() { return id; }
    public String getEventType() { return eventType; }
    public String getPayload() { return payload; }
    public OutboxStatus getStatus() { return status; }
    public void setStatus(OutboxStatus s) { this.status = s; }
}

interface OutboxEventRepository extends JpaRepository<OutboxEvent, UUID> {
    List<OutboxEvent> findTop100ByStatusOrderByCreatedAtAsc(
        OutboxEvent.OutboxStatus status);
}

@Service
class OrderServiceWithOutbox {
    private final OrderJpaRepository orderRepository;
    private final OutboxEventRepository outboxRepository;

    @Transactional
    public String createOrder(CreateOrderRequest request) {
        OrderEntity order = new OrderEntity(UUID.randomUUID(), request.customerId());
        order = orderRepository.save(order);

        OrderCreatedEvent event = new OrderCreatedEvent(
            order.getId().toString(), request.customerId(), request.amount());
        OutboxEvent outbox = new OutboxEvent(
            "Order", order.getId().toString(),
            "OrderCreated", toJson(event));
        outboxRepository.save(outbox);

        return order.getId().toString();
    }

    private String toJson(Object obj) {
        try {
            return new com.fasterxml.jackson.databind.ObjectMapper()
                .writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException("JSON serialization failed", e);
        }
    }
}

record CreateOrderRequest(UUID customerId, BigDecimal amount) {}

@Component
class OutboxPublisher {
    private final OutboxEventRepository outboxRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private static final Logger log = LoggerFactory.getLogger(OutboxPublisher.class);

    @Scheduled(fixedDelay = 1000)
    @Transactional
    public void publishPendingEvents() {
        List<OutboxEvent> pending = outboxRepository
            .findTop100ByStatusOrderByCreatedAtAsc(OutboxEvent.OutboxStatus.PENDING);

        for (OutboxEvent event : pending) {
            try {
                String topic = event.getEventType().toLowerCase();
                kafkaTemplate.send(topic, event.getId().toString(), event.getPayload());
                event.setStatus(OutboxEvent.OutboxStatus.PUBLISHED);
                outboxRepository.save(event);
            } catch (Exception e) {
                log.error("Failed to publish outbox event {}: {}",
                    event.getId(), e.getMessage());
                event.setStatus(OutboxEvent.OutboxStatus.FAILED);
                outboxRepository.save(event);
            }
        }
    }
}
```

### Q22: How does CQRS work in microservices?

**Answer:** CQRS separates read and write operations into different models. Commands change state (write model, normalized). Queries return data (read model, denormalized for fast reads). This allows different data stores â€” relational for writes, Elasticsearch/Redis for reads. Use CQRS when read and write workloads have very different characteristics and the complexity is justified.

```java
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.persistence.*;

@Entity
@Table(name = "orders_command")
class OrderCommandModel {
    @Id
    private UUID id;
    private UUID customerId;
    private String status;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private List<OrderLineCommandModel> lines;
    private BigDecimal total;
    private Instant createdAt;

    public OrderCommandModel() {}
    public OrderCommandModel(UUID customerId) {
        this.id = UUID.randomUUID();
        this.customerId = customerId;
        this.status = "DRAFT";
        this.lines = new ArrayList<>();
        this.createdAt = Instant.now();
    }

    public void addLine(String productId, String productName,
                         int quantity, BigDecimal price) {
        this.lines.add(new OrderLineCommandModel(productId, productName,
            quantity, price));
        recalculateTotal();
    }

    private void recalculateTotal() {
        this.total = lines.stream()
            .map(l -> l.getPrice().multiply(BigDecimal.valueOf(l.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public UUID getId() { return id; }
    public String getStatus() { return status; }
}

@Entity
@Table(name = "order_lines_command")
class OrderLineCommandModel {
    @Id @GeneratedValue
    private Long id;
    private String productId;
    private String productName;
    private int quantity;
    private BigDecimal price;

    public OrderLineCommandModel() {}
    public OrderLineCommandModel(String productId, String productName,
                                  int quantity, BigDecimal price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
    public BigDecimal getPrice() { return price; }
    public int getQuantity() { return quantity; }
}

interface OrderCommandRepository extends JpaRepository<OrderCommandModel, UUID> {}

@Service
class OrderCommandHandler {
    private final OrderCommandRepository commandRepository;

    @Transactional
    public UUID handleCreateOrder(CreateOrderCommand cmd) {
        OrderCommandModel order = new OrderCommandModel(cmd.customerId());
        cmd.items().forEach(item ->
            order.addLine(item.productId(), item.productName(),
                item.quantity(), item.price()));
        order = commandRepository.save(order);
        return order.getId();
    }
}

record CreateOrderCommand(UUID customerId, List<CreateOrderCommand.Item> items) {
    record Item(String productId, String productName, int quantity, BigDecimal price) {}
}

class OrderReadModel {
    private String id;
    private String customerId;
    private String status;
    private BigDecimal total;
    private int itemCount;
    private List<OrderItemReadModel> items;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getCustomerId() { return customerId; }
    public void setCustomerId(String c) { this.customerId = c; }
    public String getStatus() { return status; }
    public void setStatus(String s) { this.status = s; }
    public BigDecimal getTotal() { return total; }
    public void setTotal(BigDecimal t) { this.total = t; }
    public int getItemCount() { return itemCount; }
    public void setItemCount(int c) { this.itemCount = c; }
}

class OrderItemReadModel {
    private String productId;
    private String productName;
    private int quantity;
    private BigDecimal price;
}

@Service
class OrderProjection {
    private final OrderReadRepository readRepository;

    public void onOrderCreated(OrderCreatedEvent event) {
        OrderReadModel model = new OrderReadModel();
        model.setId(event.orderId());
        model.setCustomerId(event.customerId());
        model.setStatus("DRAFT");
        model.setTotal(BigDecimal.ZERO);
        model.setItemCount(0);
        readRepository.save(model);
    }

    public void onOrderConfirmed(OrderConfirmedEvent event) {
        OrderReadModel order = readRepository.findById(event.orderId());
        order.setStatus("CONFIRMED");
        readRepository.save(order);
    }
}

record OrderConfirmedEvent(String orderId, Instant occurredOn) {}

interface OrderReadRepository {
    OrderReadModel findById(String id);
    List<OrderReadModel> findByCustomerId(String customerId, int page, int size);
    void save(OrderReadModel model);
}

@RestController
@RequestMapping("/api/orders/query")
class OrderQueryController {
    private final OrderReadRepository readRepository;

    public OrderQueryController(OrderReadRepository readRepository) {
        this.readRepository = readRepository;
    }

    @GetMapping("/{id}")
    public OrderReadModel getOrder(@PathVariable String id) {
        return readRepository.findById(id);
    }

    @GetMapping
    public List<OrderReadModel> listOrders(
            @RequestParam String customerId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return readRepository.findByCustomerId(customerId, page, size);
    }
}
```

### Q23: How do you handle service-to-service authentication and authorization?

**Answer:** Two main approaches: JWT bearer tokens (user authenticates once, passes JWT through all services, each validates independently) and OAuth 2.0 client credentials (services authenticate to an authorization server to get tokens for calling other services). Mutual TLS provides transport-level authentication. In Kubernetes, service accounts provide identity.

```java
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@Component
@Order(1)
class ServiceAuthFilter implements Filter {
    private final SecretKey signingKey;
    private static final List<String> PUBLIC_PATHS = List.of(
        "/actuator/health", "/actuator/info", "/auth/login");

    public ServiceAuthFilter(@Value("${app.jwt.secret}") String secret) {
        byte[] keyBytes = Base64.getDecoder().decode(secret);
        this.signingKey = Keys.hmacShaKeyFor(keyBytes);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        String path = httpRequest.getRequestURI();

        if (PUBLIC_PATHS.stream().anyMatch(path::startsWith)) {
            chain.doFilter(request, response);
            return;
        }

        String authHeader = httpRequest.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            httpResponse.setStatus(401);
            httpResponse.getWriter().write("{\"error\":\"Missing or invalid token\"}");
            return;
        }

        String token = authHeader.substring(7);
        try {
            Claims claims = Jwts.parser()
                .verifyWith(signingKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
            ServiceContext.set(claims.getSubject(),
                claims.get("roles", List.class));
            chain.doFilter(request, response);
        } catch (Exception e) {
            httpResponse.setStatus(401);
            httpResponse.getWriter().write("{\"error\":\"Invalid token\"}");
        } finally {
            ServiceContext.clear();
        }
    }
}

class ServiceContext {
    private static final ThreadLocal<String> currentUser = new ThreadLocal<>();
    private static final ThreadLocal<List<String>> currentRoles = new ThreadLocal<>();

    public static void set(String userId, List<String> roles) {
        currentUser.set(userId);
        currentRoles.set(roles);
    }
    public static String getCurrentUser() { return currentUser.get(); }
    public static List<String> getCurrentRoles() { return currentRoles.get(); }
    public static boolean hasRole(String role) {
        return currentRoles.get() != null && currentRoles.get().contains(role);
    }
    public static void clear() {
        currentUser.remove();
        currentRoles.remove();
    }
}

import org.springframework.web.client.RestClient;
import org.springframework.http.HttpHeaders;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
class ServiceToServiceAuthClient {
    private final RestClient restClient;
    private final ConcurrentMap<String, Token> tokenCache = new ConcurrentHashMap<>();

    public ServiceToServiceAuthClient() {
        this.restClient = RestClient.builder()
            .baseUrl("http://auth-server:8080").build();
    }

    public String getAccessToken(String clientId, String clientSecret) {
        Token cached = tokenCache.get(clientId);
        if (cached != null && !cached.isExpired())
            return cached.value();

        TokenResponse response = restClient.post()
            .uri("/oauth2/token")
            .header(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded")
            .body("grant_type=client_credentials&client_id=" + clientId
                + "&client_secret=" + clientSecret)
            .retrieve()
            .body(TokenResponse.class);

        Token token = new Token(response.accessToken(),
            System.currentTimeMillis() + (response.expiresIn() * 1000L));
        tokenCache.put(clientId, token);
        return token.value();
    }

    record TokenResponse(String accessToken, long expiresIn) {}
    record Token(String value, long expiresAt) {
        boolean isExpired() { return System.currentTimeMillis() >= expiresAt; }
    }
}

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

class TokenPropagationInterceptor {
    public static void propagateToken(HttpRequest.Builder request) {
        ServletRequestAttributes attrs = (ServletRequestAttributes)
            RequestContextHolder.getRequestAttributes();
        if (attrs != null) {
            HttpServletRequest currentRequest = attrs.getRequest();
            String auth = currentRequest.getHeader("Authorization");
            if (auth != null)
                request.header("Authorization", auth);
        }
    }
}
```

### Q24: Compare Spring Cloud (Eureka/Config/Gateway) vs Kubernetes-native microservices.

**Answer:** Spring Cloud provides mature Java-ecosystem solutions for service discovery (Eureka), configuration (Config Server), and gateways (Gateway). Kubernetes provides equivalent primitives natively: DNS-based service discovery, ConfigMaps/Secrets for config, and Ingress controllers for API gateway. Spring Cloud is more feature-rich but adds JVM overhead. Kubernetes is platform-agnostic but requires more infrastructure knowledge. Many projects use both â€” Spring Boot for application logic, Kubernetes for infrastructure.

```java
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

// Spring Cloud Discovery approach
@Configuration
@EnableDiscoveryClient
class SpringCloudApproach {
    // Uses Eureka for discovery, Config Server for config
    // RestTemplate with @LoadBalanced for client-side load balancing
}

// Kubernetes-native approach
@Service
class KubernetesNativeApproach {
    private final RestTemplate restTemplate = new RestTemplate();

    public Object callPaymentService(String path) {
        // Uses Kubernetes DNS: service-name.namespace.svc.cluster.local
        String url = "http://payment-service.default.svc.cluster.local:8080" + path;
        return restTemplate.getForObject(url, Object.class);
    }
}

// Kubernetes Ingress (alternative to Spring Cloud Gateway)
// apiVersion: networking.k8s.io/v1
// kind: Ingress
// metadata:
//   name: api-gateway
// spec:
//   rules:
//   - host: api.example.com
//     http:
//       paths:
//       - path: /orders
//         pathType: Prefix
//         backend:
//           service:
//             name: order-service
//             port:
//               number: 8080
//       - path: /payments
//         pathType: Prefix
//         backend:
//           service:
//             name: payment-service
//             port:
//               number: 8080
```

### Q25: How do you test microservices? What testing strategies do you use?

**Answer:** Testing microservices requires multiple levels: unit tests for domain logic, integration tests for database/repository layers, contract tests (Spring Cloud Contract or Pact) for service-to-service API compatibility, component tests with TestContainers for full service slices, and end-to-end tests for critical user journeys. Consumer-driven contract tests are especially important â€” they verify that API changes don't break downstream consumers.

```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.cloud.contract.stubrunner.spring.AutoConfigureStubRunner;
import org.springframework.cloud.contract.stubrunner.spring.StubRunnerProperties;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

// Unit Test
class OrderTest {
    @Test
    void shouldCalculateTotal() {
        Order order = new Order(UUID.randomUUID());
        order.addLine("PROD-1", "Product 1", 2, new Money(BigDecimal.TEN, "USD"));
        order.addLine("PROD-2", "Product 2", 1, new Money(BigDecimal.valueOf(5), "USD"));

        order.confirm();
        assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);
        assertThat(order.getTotal()).isEqualTo(
            new Money(BigDecimal.valueOf(25), "USD"));
    }

    @Test
    void shouldNotConfirmEmptyOrder() {
        Order order = new Order(UUID.randomUUID());
        assertThatThrownBy(order::confirm)
            .isInstanceOf(IllegalStateException.class)
            .hasMessageContaining("empty");
    }
}

// Integration Test with TestContainers
import org.springframework.boot.test.context.SpringBootTest;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@Testcontainers
class OrderRepositoryIntegrationTest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Autowired
    private OrderCommandRepository repository;

    @Test
    void shouldPersistOrder() {
        OrderCommandModel order = new OrderCommandModel(UUID.randomUUID());
        order.addLine("PROD-1", "Product 1", 2, BigDecimal.TEN);

        OrderCommandModel saved = repository.save(order);

        assertThat(saved.getId()).isNotNull();
        OrderCommandModel found = repository.findById(saved.getId()).orElseThrow();
        assertThat(found.getStatus()).isEqualTo("DRAFT");
    }
}

// Contract Test with Spring Cloud Contract (consumer side)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureStubRunner(
    ids = "com.example:payment-service:+:stubs:8090",
    stubsMode = StubRunnerProperties.StubsMode.LOCAL)
class PaymentClientContractTest {
    @Autowired
    private RestTemplate restTemplate;

    @Test
    void shouldProcessPayment() {
        PaymentResponse response = restTemplate.postForObject(
            "http://localhost:8090/api/payments",
            new PaymentRequest("order-123", BigDecimal.valueOf(100), "USD"),
            PaymentResponse.class);
        assertThat(response).isNotNull();
        assertThat(response.status()).isIn("COMPLETED", "PENDING");
    }
}

// Contract Test (producer side)
import org.springframework.cloud.contract.verifier.junit.MockVerifierRule;

// In the payment service, Spring Cloud Contract Verifier generates and runs
// tests from contracts defined in Groovy or YAML files:
// Contract:
// org.springframework.cloud.contract.spec.Contract.make {
//     description "should process payment"
//     request {
//         method POST()
//         url "/api/payments"
//         body([orderId: "order-123", amount: 100.00, currency: "USD"])
//     }
//     response {
//         status 200
//         body([paymentId: $(anyUuid()), status: "COMPLETED"])
//     }
// }
```

### Q26: How do you handle circuit breakers in a microservices environment beyond simple configuration?

**Answer:** Beyond basic configuration, circuit breakers need proper fallback design, half-open probe thresholds, metrics export, and integration with the API gateway. Fallbacks should return degraded responses (not errors). Metrics and events should feed into monitoring. Cascading failures â€” where one service's circuit breaker triggers another's â€” must be designed for. The gateway circuit breaker protects upstream services from downstream failures.

```java
import io.github.resilience4j.circuitbreaker.CircuitBreaker;
import io.github.resilience4j.circuitbreaker.CircuitBreakerRegistry;
import io.github.resilience4j.core.EventPublisher;
import jakarta.annotation.PostConstruct;

@Component
class CircuitBreakerEventHandler {
    private final CircuitBreakerRegistry registry;

    public CircuitBreakerEventHandler(CircuitBreakerRegistry registry) {
        this.registry = registry;
    }

    @PostConstruct
    public void registerEventListeners() {
        registry.getAllCircuitBreakers().forEach(cb -> {
            cb.getEventPublisher()
                .onStateTransition(event ->
                    System.out.println("Circuit breaker " + event.getCircuitBreakerName()
                        + ": " + event.getStateTransition()))
                .onFailureRateExceeded(event ->
                    System.err.println("Failure rate exceeded for "
                        + event.getCircuitBreakerName()))
                .onCallNotPermitted(event ->
                    System.out.println("Call not permitted for "
                        + event.getCircuitBreakerName()));
        });
    }
}

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.core.IntervalFunction;

@Service
class AdvancedCircuitBreakerService {
    @CircuitBreaker(name = "externalApi", fallbackMethod = "fallback")
    public ExternalResponse callExternalApi(String request) {
        return restTemplate.getForObject(
            "http://external-api/v1/data/{request}",
            ExternalResponse.class, request);
    }

    public ExternalResponse fallback(String request, Exception ex) {
        // Return stale cached data instead of error
        ExternalResponse cached = cacheService.get(request);
        if (cached != null) {
            cached.setStale(true);
            cached.setWarning("Using cached data - service unavailable");
            return cached;
        }
        return new ExternalResponse("default", "Service unavailable", true);
    }
}

record ExternalResponse(String data, String message, boolean stale) {
    public void setStale(boolean s) {}
    public void setWarning(String w) {}
}
```

### Q27: What is the role of an API service mesh (Istio, Linkerd) in microservices?

**Answer:** A service mesh provides infrastructure layer for service-to-service communication: traffic management (routing, shifting, fault injection), security (mTLS, authorization policies), and observability (metrics, tracing, access logs). It runs as sidecar proxies alongside each service, transparently intercepting traffic. The service mesh handles cross-cutting concerns without changes to application code.

```java
// Without service mesh â€” application must handle resilience:
@Service
class ManualResilienceService {
    @CircuitBreaker(name = "service")
    public Data fetchData() {
        return restTemplate.getForObject("http://other-service/data", Data.class);
    }
}

// With service mesh â€” application code is simple:
@Service
class ServiceMeshAwareService {
    public Data fetchData() {
        // Service mesh handles retries, circuit breaking, mTLS, tracing
        // All configured via Istio VirtualService and DestinationRule YAML
        return restTemplate.getForObject("http://other-service/data", Data.class);
    }
}

// Istio VirtualService configuration (not Java, but referenced):
// apiVersion: networking.istio.io/v1beta1
// kind: VirtualService
// metadata:
//   name: order-service-routing
// spec:
//   hosts:
//   - order-service
//   http:
//   - route:
//     - destination:
//         host: order-service
//         subset: v2
//       weight: 10
//     - destination:
//         host: order-service
//         subset: v1
//       weight: 90
//   - fault:
//       delay:
//         percentage:
//           value: 5
//         fixedDelay: 5s

// Istio DestinationRule with circuit breaker:
// apiVersion: networking.istio.io/v1beta1
// kind: DestinationRule
// metadata:
//   name: order-service-cb
// spec:
//   host: order-service
//   trafficPolicy:
//     connectionPool:
//       tcp:
//         maxConnections: 100
//       http:
//         http1MaxPendingRequests: 10
//         maxRequestsPerConnection: 10
//     outlierDetection:
//       consecutive5xxErrors: 5
//       interval: 10s
//       baseEjectionTime: 30s
```

### Q28: How do you handle blue-green deployments and canary releases in microservices?

**Answer:** Blue-green deployments run two identical environments (blue = current, green = new). Traffic is switched from blue to green after validation. Canary releases route a small percentage of traffic to the new version, gradually increasing if no issues. Both require the API gateway or service mesh to support traffic splitting. Feature flags provide an additional safety layer.

```java
// Application code should be deployment-strategy aware:
// No special code needed if stateless and health probes are correct

// Health check ensures readiness before traffic routing:
@Component
class VersionHealthIndicator implements HealthIndicator {
    @Value("${app.version:unknown}")
    private String version;

    @Override
    public Health health() {
        return Health.up()
            .withDetail("version", version)
            .build();
    }
}

// Kubernetes blue-green deployment:
// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: order-service-green
// spec:
//   replicas: 5
//   selector:
//     matchLabels:
//       app: order-service
//       version: green
//   template:
//     metadata:
//       labels:
//         app: order-service
//         version: green
//     spec:
//       containers:
//       - name: order-service
//         image: registry.example.com/order-service:2.0.0
// ---
// apiVersion: v1
// kind: Service
// metadata:
//   name: order-service
// spec:
//   selector:
//     app: order-service
//     version: blue  # Switch to 'green' when ready

// Canary with Istio (traffic splitting):
// apiVersion: networking.istio.io/v1beta1
// kind: VirtualService
// spec:
//   hosts:
//   - order-service
//   http:
//   - match:
//     - headers:
//         x-canary:
//           exact: "true"
//     route:
//     - destination:
//         host: order-service
//         subset: v2
//   - route:
//     - destination:
//         host: order-service
//         subset: v1
//       weight: 95
//     - destination:
//         host: order-service
//         subset: v2
//       weight: 5

// Feature flag for gradual rollout within a version:
@Service
class FeatureFlaggedService {
    private final FeatureFlagService featureFlags;

    public String processOrder(String orderId) {
        if (featureFlags.isEnabled("new-pricing-engine")) {
            return useNewPricingEngine(orderId);
        }
        return useLegacyPricingEngine(orderId);
    }
}
```

### Q29: How do you implement distributed caching in microservices?

**Answer:** Distributed caching in microservices uses a shared cache layer (Redis) that multiple services access. Cache-aside, read-through, write-through, and write-behind are common patterns. Spring Boot uses `@Cacheable`, `@CachePut`, `@CacheEvict` with Redis, Hazelcast, or Caffeine. The cache should be used for read-heavy, slowly-changing data. Cache invalidation is the hardest problem â€” use TTLs, event-driven invalidation, or write-through.

```java
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

@Service
class ProductCachingService {

    @Cacheable(value = "products", key = "#productId", unless = "#result == null")
    public Product getProduct(String productId) {
        // Expensive database or external API call
        return productRepository.findById(productId)
            .orElse(null);
    }

    @CachePut(value = "products", key = "#product.id")
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @CacheEvict(value = "products", key = "#productId")
    public void deleteProduct(String productId) {
        productRepository.deleteById(productId);
    }

    @Caching(evict = {
        @CacheEvict(value = "products", key = "#productId"),
        @CacheEvict(value = "productSummaries", key = "#category")
    })
    public void deleteProductWithCacheEviction(String productId, String category) {
        productRepository.deleteById(productId);
    }

    @Cacheable(value = "productSummaries", key = "#category")
    public List<ProductSummary> getProductSummaries(String category) {
        return productRepository.findSummariesByCategory(category);
    }
}

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import java.time.Duration;

@Configuration
@EnableCaching
class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(30))
            .disableCachingNullValues()
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair
                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            .withCacheConfiguration("products", RedisCacheConfiguration
                .defaultCacheConfig().entryTtl(Duration.ofMinutes(60)))
            .withCacheConfiguration("productSummaries", RedisCacheConfiguration
                .defaultCacheConfig().entryTtl(Duration.ofMinutes(10)))
            .withCacheConfiguration("userSessions", RedisCacheConfiguration
                .defaultCacheConfig().entryTtl(Duration.ofHours(24)))
            .build();
    }
}

import org.springframework.data.redis.core.StringRedisTemplate;
import java.util.concurrent.TimeUnit;

@Service
class CacheAsideService {
    private final StringRedisTemplate redisTemplate;

    public CacheAsideService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public String getData(String key) {
        // Cache-aside pattern
        String cached = redisTemplate.opsForValue().get(key);
        if (cached != null) return cached;

        String data = loadFromDatabase(key);
        redisTemplate.opsForValue().set(key, data, 5, TimeUnit.MINUTES);
        return data;
    }

    public void invalidate(String key) {
        redisTemplate.delete(key);
    }

    private String loadFromDatabase(String key) {
        return "data-for-" + key;
    }
}

// Event-driven cache invalidation
@Service
class CacheInvalidationConsumer {
    private final ProductCachingService cacheService;

    @KafkaListener(topics = "product.updated", groupId = "cache-service")
    public void onProductUpdated(ProductUpdatedEvent event) {
        cacheService.deleteProduct(event.productId());
    }
}

record Product(String id, String name, BigDecimal price) {}
record ProductSummary(String id, String name) {}
interface ProductRepository {
    java.util.Optional<Product> findById(String id);
    Product save(Product product);
    void deleteById(String id);
    List<ProductSummary> findSummariesByCategory(String category);
}
record ProductUpdatedEvent(String productId) {}
```

### Q30: What are the most common pitfalls when adopting microservices and how do you avoid them?

**Answer:** Common pitfalls include: wrong service boundaries (splitting by technical layers instead of business domains), shared databases (tight coupling), synchronous communication chains (cascading failures), ignoring data consistency, distributed monolith (services deployed together despite being separate), premature splitting, under-investing in observability, and not automating CI/CD. Avoid these by using DDD for boundaries, database-per-service, async communication where possible, sagas for consistency, and investing in CI/CD and observability from day one.

```java
// Pitfall 1: Wrong boundaries â€” splitting by layers instead of domains

// BAD: Technical layer services
// http://user-service/api/users/1  (frontend calls this)
// http://user-service/api/users/1/orders  (also in user service â€” why?)

// GOOD: Domain-oriented services
// http://customer-service/api/customers/1
// http://order-service/api/orders?customerId=1

// Pitfall 2: Synchronous communication chains

// BAD: Service A calls B which calls C which calls D (chain increases latency)
@Service
class BadOrderService {
    public OrderResponse getOrderDetails(String orderId) {
        // This service calls payment which calls fraud which calls notification
        // If notification is slow, ALL are blocked
        return null;
    }
}

// GOOD: Use async for non-critical paths
@Service
class GoodOrderService {
    public OrderResponse getOrderDetails(String orderId) {
        Order order = orderRepository.findById(orderId);
        // Return response immediately â€” send notification async
        eventPublisher.publish(new OrderViewedEvent(orderId));
        return mapToResponse(order);
    }

    private OrderResponse mapToResponse(Order order) {
        return new OrderResponse(order.getId().toString(), order.getStatus().name());
    }
}

// Pitfall 3: Not isolating failures

// BAD: No circuit breaker â€” one failure cascades
@Service
class FragileService {
    public Data callMultipleServices() {
        Data data1 = restTemplate.getForObject("http://service-a/data", Data.class);
        Data data2 = restTemplate.getForObject("http://service-b/data", Data.class);
        return combine(data1, data2);
    }
}

// GOOD: Independent calls with timeouts and fallbacks
@Service
class ResilientService {
    public Data callMultipleServices() {
        CompletableFuture<Data> futureA = CompletableFuture
            .supplyAsync(() -> {
                try { return restTemplate.getForObject(
                    "http://service-a/data", Data.class); }
                catch (Exception e) { return new Data("default-a"); }
            })
            .orTimeout(2, TimeUnit.SECONDS)
            .exceptionally(e -> new Data("default-a"));

        CompletableFuture<Data> futureB = CompletableFuture
            .supplyAsync(() -> {
                try { return restTemplate.getForObject(
                    "http://service-b/data", Data.class); }
                catch (Exception e) { return new Data("default-b"); }
            })
            .orTimeout(2, TimeUnit.SECONDS)
            .exceptionally(e -> new Data("default-b"));

        return combine(futureA.join(), futureB.join());
    }

    private Data combine(Data a, Data b) {
        return new Data(a.value() + " & " + b.value());
    }
}

record Data(String value) {}

// Pitfall 4: Skipping contract testing

// BAD: No contract tests â€” breaking changes go unnoticed until deployment
// GOOD: Consumer-driven contract tests catch API breaks early
// (See Q25 for contract test examples)

// Pitfall 5: Manual deployments â€” leads to errors and slow releases
//
// GOOD: Fully automated CI/CD pipeline:
// 1. Run unit + integration + contract tests
// 2. Build container image
// 3. Push to registry
// 4. Deploy to staging and run smoke tests
// 5. Gradual rollout to production (canary)
// 6. Monitor metrics and rollback if needed

// Pitfall 6: No observability from the start
//
// BAD: "We'll add monitoring later"
// GOOD: Structured logging, metrics, and distributed tracing from day one
//
// Each service must contribute:
// - JSON-structured logs with trace IDs
// - Request rate, error rate, and latency metrics
// - Span exports to distributed tracing backend
// - Health check endpoints for liveness and readiness

// === Quick Reference: Microservices Checklist ===

class MicroservicesChecklist {
    /*
    [x] Service boundaries follow bounded contexts (DDD)
    [x] Database-per-service (no shared databases)
    [x] Async communication for events, sync for queries
    [x] Saga pattern for multi-service transactions
    [x] Circuit breakers and bulkheads for resilience
    [x] API gateway for cross-cutting concerns
    [x] Service discovery (Eureka or Kubernetes DNS)
    [x] Centralized configuration (Config Server or ConfigMaps)
    [x] Distributed tracing (Micrometer Tracing + OpenTelemetry)
    [x] Structured logging (JSON with trace IDs)
    [x] Health probes (liveness + readiness)
    [x] Consumer-driven contract tests
    [x] Fully automated CI/CD pipeline
    [x] Blue-green or canary deployment strategy
    [x] Rate limiting at API gateway
    [x] Service-to-service authentication (mTLS or JWT)
    [x] Graceful shutdown and disposability
    [x] Stateless processes (scale horizontally)
    [x] Feature flags for gradual rollout
    [x] Chaos engineering for resilience validation
    */
}
```

That covers 30 essential microservices interview questions with complete Java and Spring Boot code examples. The chapter spans service decomposition bounded contexts, database-per-service, sync vs async communication, choreography and orchestration sagas, Eureka service discovery, Spring Cloud Gateway, Resilience4j circuit breakers with retry and rate limiting, Micrometer Tracing with OpenTelemetry, Spring Cloud Config with encryption and Vault integration, the 12-factor app methodology, health probes with readiness/liveness, observability with metrics and structured logging, client-side vs server-side discovery, RabbitMQ/Kafka/SQS messaging, event-driven architecture with the outbox pattern, CQRS with separate read/write models, service-to-service authentication, strangler fig pattern, API gateway vs Kubernetes Ingress, CI/CD with contract testing and canary deployments, API gateway patterns, service mesh concepts, caching strategies, blue-green and canary releases, and common microservices pitfalls.

