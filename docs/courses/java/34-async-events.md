# Async Processing & Spring Events
> **Previous:** [Security and Performance Testing](33-security-perf-test.md) | **Next:** [RabbitMQ](35-rabbitmq.md)

## Learning Objectives

By the end of this chapter, you will be able to:
- Configure and use Spring's `@Async` annotation for asynchronous method execution
- Tune thread pools with `ThreadPoolTaskExecutor` including core/max pool sizes, queue capacity, keep-alive, and rejection policies
- Return `CompletableFuture` and `ListenableFuture` from async methods and compose results
- Handle async method exceptions with `AsyncUncaughtExceptionHandler` and `CompletableFuture` error recovery
- Publish and listen to Spring `ApplicationEvent` objects using both programmatic and annotation-based approaches
- Use `@EventListener` with SpEL expressions, ordering, and conditions
- Apply `@TransactionalEventListener` for transaction-bound event handling with phase control
- Combine `@Async` with `@EventListener` for fully asynchronous event processing
- Design effective event payloads, implement event batching, and evaluate event sourcing basics

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/34-async-events/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/hero.svg" alt="Chapter Banner: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/handwritten-notes.svg" alt="Handwritten Notes: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/sticky-notes.svg" alt="Sticky Notes: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/visual-explanation.svg" alt="Visual Explanation: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/architecture.svg" alt="Architecture: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/workflow.svg" alt="Workflow: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/mindmap.svg" alt="Mind Map: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/comparison.svg" alt="Comparison: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/cheatsheet.svg" alt="Cheat Sheet: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/interview-quiz.svg" alt="Quiz Card: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/34-async-events/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/34-async-events/social-card.svg" alt="Social Card: Async Processing & Spring Events" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Async in Spring → `@Async`, `@EnableAsync`, and `TaskExecutor` | Decouple method execution from caller thread |
| Spring Events → `ApplicationEventPublisher` and `@EventListener` | In-process pub/sub for loose coupling |
| Transaction-Bound Events → `@TransactionalEventListener` | React to events after transaction commit or rollback |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Async and Events] --> B[@Async]
    A --> C[Application Events]
    A --> D[Transactional Events]
    B --> B1[TaskExecutor config]
    B --> B2[Future / CompletableFuture]
    C --> C1[ApplicationEventPublisher]
    C --> C2[@EventListener]
    D --> D1[@TransactionalEventListener]
    D --> D2[Phase: AFTER_COMMIT / AFTER_ROLLBACK]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| `@Async` | Runs method in separate thread | Requires `@EnableAsync`, uses `TaskExecutor` |
| `ApplicationEventPublisher` | Publishes application events | Synchronous by default |
| `@EventListener` | Listens for application events | Conditional with SpEL |
| `@TransactionalEventListener` | Listens after transaction phase | `phase = TransactionPhase.AFTER_COMMIT` |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@EnableAsync` | Enables Spring async support | Add to `@Configuration` class |
| `@Async` | Marks method for async execution | `@Async void sendNotification(User user)` |
| `ApplicationEventPublisher.publishEvent()` | Publishes an event | `publisher.publishEvent(new OrderCreatedEvent(order))` |
| `@EventListener(condition = ...)` | Conditional event listener | `@EventListener(condition = "#event.success")` |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| Email Notifications | `@Async` | Send welcome emails without blocking the HTTP response |
| Audit Logging | `@TransactionalEventListener(afterCommit)` | Log after DB transaction succeeds |
| Cache Eviction | Application Events | Publish cache clear event on data update |

---
## Chapter Quiz

1. Which annotation enables async processing in Spring? **Answer:** `@EnableAsync` on a `@Configuration` class
2. What is the default behavior of `ApplicationEventPublisher.publishEvent()`? **Answer:** Synchronous → the publisher blocks until all listeners finish
3. Which event listener annotation reacts only after a successful transaction? **Answer:** `@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)`

## Theory

![Async Processing & Events Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/34-async-events.png)

### 1. The Synchronous Problem


Most Spring beans execute synchronously by default. When a method does I/O, calls a remote API, or performs a CPU-intensive computation, the caller's thread blocks. In a web application, this means one of the container's request-handling threads is stuck waiting. Under load, the thread pool saturates, requests queue up, and latency spikes.

Asynchronous processing decouples the caller from the callee's execution. The caller fires a task and continues immediately; a separate thread Ã¢â‚¬â€ managed by a thread pool Ã¢â‚¬â€ executes the task later.

### 2. Enabling Async Support


Spring's async support requires the `@EnableAsync` annotation. It is an `@Configuration`-level annotation that tells Spring to scan for `@Async` on beans and to create proxies (either JDK dynamic proxies or CGLIB proxies) that intercept calls and dispatch them to a task executor.

```java
@Configuration
@EnableAsync
public class AsyncConfig {
}
```

By default, Spring uses a `SimpleAsyncTaskExecutor` which creates a new thread per task. **This is not suitable for production** because it does not reuse threads. You must override the executor strategy.

### 3. Thread Pool Configuration with ThreadPoolTaskExecutor


`ThreadPoolTaskExecutor` wraps `java.util.concurrent.ThreadPoolExecutor` and exposes Spring-friendly bean properties. It is the standard production choice.

```java
@Configuration
@EnableAsync
public class ThreadPoolConfig {

    @Bean(name = "taskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(25);
        executor.setQueueCapacity(100);
        executor.setKeepAliveSeconds(120);
        executor.setThreadNamePrefix("async-worker-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(30);
        executor.initialize();
        return executor;
    }
}
```

Key properties explained:

| Property | Purpose |
|----------|---------|
| `corePoolSize` | Threads kept alive even when idle. Initial pool size. |
| `maxPoolSize` | Maximum threads if queue fills up. |
| `queueCapacity` | The number of tasks that can sit in the `BlockingQueue` before new threads are created beyond `corePoolSize`. |
| `keepAliveSeconds` | Idle threads beyond `corePoolSize` are terminated after this time. |
| `threadNamePrefix` | Used for naming threads in logs and monitoring. |
| `rejectedExecutionHandler` | Policy when both pool and queue are saturated. |

**Rejection Policy comparison:**

| Policy | Behavior |
|--------|----------|
| `AbortPolicy` | Throws `RejectedExecutionException` (default, dangerous) |
| `CallerRunsPolicy` | The calling thread executes the task. Back-pressure. |
| `DiscardPolicy` | Silently drops the task. |
| `DiscardOldestPolicy` | Drops the oldest queued task, then retries. |

**Pool scaling behavior:**
1. If running threads &lt; `corePoolSize`, a new thread is created.
2. If running threads >= `corePoolSize`, the task is queued.
3. If the queue is full and running threads &lt; `maxPoolSize`, a new thread is created.
4. If the queue is full and running threads >= `maxPoolSize`, the rejection policy kicks in.

### 4. @Async with void Methods


The simplest use of `@Async` is on a `void` method. The caller returns immediately; the method runs on a pool thread.

```java
@Service
public class EmailService {

    @Async
    public void sendWelcomeEmail(String email) {
        // Simulate email sending
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.printf("Welcome email sent to %s on thread %s%n",
            email, Thread.currentThread().getName());
    }

    @Async("customExecutor")
    public void sendPasswordReset(String email) {
        // Uses the bean named "customExecutor"
    }
}
```

Important caveats:
- The caller must invoke the method **from outside the class**. Self-invocation bypasses the proxy.
- The `void` return means the caller cannot know if the method failed. Exceptions are silently lost unless a custom `AsyncUncaughtExceptionHandler` is installed.

### 5. @Async with CompletableFuture


Returning `CompletableFuture<T>` from an `@Async` method gives the caller a handle to:
- Get the result or timeout
- Compose with other futures (`thenApply`, `thenCompose`, `thenCombine`)
- Handle errors with `exceptionally()` or `handle()`

```java
@Service
public class ReportService {

    private static final Logger log = LoggerFactory.getLogger(ReportService.class);

    @Async
    public CompletableFuture<Report> generateReport(String reportId) {
        log.info("Generating report {} on thread {}", reportId,
            Thread.currentThread().getName());
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Report report = new Report(reportId, "Q4 Results", "PDF");
        return CompletableFuture.completedFuture(report);
    }

    @Async
    public CompletableFuture<List<String>> fetchDataSources(String reportId) {
        log.info("Fetching data sources for {} on thread {}", reportId,
            Thread.currentThread().getName());
        return CompletableFuture.completedFuture(List.of("sales_db", "inventory_api"));
    }

    @Async
    public CompletableFuture<Void> cacheReport(Report report) {
        log.info("Caching report {} on thread {}", report.getId(),
            Thread.currentThread().getName());
        return CompletableFuture.allOf();
    }
}
```

**Composing async results:**

```java
@Service
public class ReportCoordinator {

    private final ReportService reportService;

    public ReportCoordinator(ReportService reportService) {
        this.reportService = reportService;
    }

    public CompletableFuture<Report> buildReport(String reportId) {
        CompletableFuture<Report> reportFuture = reportService.generateReport(reportId);
        CompletableFuture<List<String>> dataFuture = reportService.fetchDataSources(reportId);

        return reportFuture.thenCombine(dataFuture, (report, sources) -> {
            report.setDataSources(sources);
            return report;
        }).thenCompose(report ->
            reportService.cacheReport(report)
                .thenApply(v -> report)
        );
    }

    public Report buildReportSync(String reportId) {
        return buildReport(reportId)
            .completeOnTimeout(null, 10, TimeUnit.SECONDS)
            .exceptionally(ex -> {
                log.error("Report generation failed", ex);
                return null;
            })
            .join();
    }
}
```

**Error recovery with CompletableFuture:**

```java
reportService.generateReport("R-001")
    .thenApply(Report::getId)
    .handle((id, ex) -> {
        if (ex != null) {
            log.error("Failed to generate report", ex);
            return null;
        }
        return id;
    });

reportService.generateReport("R-002")
    .exceptionally(ex -> {
        log.warn("Recovering from error", ex);
        return Report.errorReport("R-002", ex.getMessage());
    })
    .thenAccept(report -> log.info("Recovered report: {}", report));

reportService.generateReport("R-003")
    .whenComplete((report, ex) -> {
        if (ex == null) {
            log.info("Success: {}", report);
        } else {
            log.error("Failure", ex);
        }
    });
```

### 6. @Async with ListenableFuture (Legacy)


Before `CompletableFuture`, Spring provided `ListenableFuture`. It is still supported but `CompletableFuture` is preferred.

```java
@Async
public ListenableFuture<String> processOrder(Long orderId) {
    return AsyncResult.forValue("Processed order " + orderId);
}

@Async
public ListenableFuture<String> processOrderWithCallback(Long orderId) {
    ListenableFuture<String> future = AsyncResult.forValue("Processed " + orderId);
    future.addCallback(
        result -> log.info("Success: {}", result),
        ex -> log.error("Failure", ex)
    );
    return future;
}
```

### 7. Async Exception Handling


Uncaught exceptions in `void` async methods are invisible by default. Spring provides two ways to handle them:

**7.1 Implement AsyncConfigurer:**

```java
@Configuration
@EnableAsync
public class AsyncExceptionConfig implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("async-");
        executor.initialize();
        return executor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncExceptionHandler();
    }
}
```

**7.2 Custom AsyncUncaughtExceptionHandler:**

```java
public class SimpleAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(SimpleAsyncExceptionHandler.class);

    @Override
    public void handleUncaughtException(Throwable ex, Method method, Object... params) {
        log.error("Async method {} threw exception", method.getName(), ex);
        log.warn("Method parameters: {}", Arrays.toString(params));
        // Send alert, write to dead-letter queue, etc.
        if (ex instanceof DataAccessException) {
            // Retry logic could go here
        }
    }
}
```

**7.3 Multiple Handlers via Delegation:**

```java
public class DelegatingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {

    private final List<AsyncUncaughtExceptionHandler> handlers;

    public DelegatingAsyncExceptionHandler(List<AsyncUncaughtExceptionHandler> handlers) {
        this.handlers = handlers;
    }

    @Override
    public void handleUncaughtException(Throwable ex, Method method, Object... params) {
        for (AsyncUncaughtExceptionHandler handler : handlers) {
            try {
                handler.handleUncaughtException(ex, method, params);
            } catch (Exception e) {
                // Log and continue Ã¢â‚¬â€œ never let one handler break the chain
            }
        }
    }
}
```

**7.4 Logging Async Failures with AOP:**

```java
@Aspect
@Component
public class AsyncLoggingAspect {

    private static final Logger log = LoggerFactory.getLogger(AsyncLoggingAspect.class);

    @Around("@annotation(org.springframework.scheduling.annotation.Async)")
    public Object logAsyncExecution(ProceedingJoinPoint pjp) throws Throwable {
        String methodName = pjp.getSignature().toShortString();
        log.info("Entering async method: {}", methodName);
        long start = System.currentTimeMillis();
        try {
            Object result = pjp.proceed();
            long elapsed = System.currentTimeMillis() - start;
            log.info("Completed async method: {} in {}ms", methodName, elapsed);
            return result;
        } catch (Exception ex) {
            log.error("Async method {} failed after {}ms", methodName,
                System.currentTimeMillis() - start, ex);
            throw ex;
        }
    }
}
```

### 8. Custom Thread Pool with Named Qualifier


When you need multiple pools for different workloads (I/O vs CPU), use `@Qualifier`:

```java
@Configuration
public class MultiPoolConfig {

    @Bean(name = "ioTaskExecutor")
    public Executor ioTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(50);
        executor.setQueueCapacity(200);
        executor.setThreadNamePrefix("io-");
        executor.setKeepAliveSeconds(60);
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.initialize();
        return executor;
    }

    @Bean(name = "cpuTaskExecutor")
    public Executor cpuTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        int cores = Runtime.getRuntime().availableProcessors();
        executor.setCorePoolSize(cores);
        executor.setMaxPoolSize(cores * 2);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("cpu-");
        executor.initialize();
        return executor;
    }

    @Bean(name = "eventTaskExecutor")
    public Executor eventTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(4);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(500);
        executor.setThreadNamePrefix("event-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.DiscardPolicy());
        executor.initialize();
        return executor;
    }
}
```

Usage:

```java
@Service
public class HybridService {

    @Async("ioTaskExecutor")
    public CompletableFuture<String> callExternalApi(String url) {
        return CompletableFuture.completedFuture("response from " + url);
    }

    @Async("cpuTaskExecutor")
    public CompletableFuture<BigDecimal> calculateRisk(DataPoint dp) {
        return CompletableFuture.completedFuture(dp.calculateRiskScore());
    }

    @Async("eventTaskExecutor")
    public void fireNotification(String userId) {
        // fast fire-and-forget
    }
}
```

### 9. Application Events Ã¢â‚¬â€ The Traditional Way


Spring's `ApplicationEvent` class and `ApplicationEventPublisher` provide a publish-subscribe mechanism within the same Spring `ApplicationContext`.

```java
public class OrderCreatedEvent extends ApplicationEvent {

    private final Long orderId;
    private final String customerEmail;
    private final BigDecimal total;
    private final LocalDateTime createdAt;

    public OrderCreatedEvent(Object source, Long orderId, String customerEmail,
                             BigDecimal total, LocalDateTime createdAt) {
        super(source);
        this.orderId = orderId;
        this.customerEmail = customerEmail;
        this.total = total;
        this.createdAt = createdAt;
    }

    public Long getOrderId() { return orderId; }
    public String getCustomerEmail() { return customerEmail; }
    public BigDecimal getTotal() { return total; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
```

**Publisher:**

```java
@Component
public class OrderEventPublisher {

    private final ApplicationEventPublisher publisher;

    public OrderEventPublisher(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    public void publishOrderCreated(Order order) {
        OrderCreatedEvent event = new OrderCreatedEvent(
            this,
            order.getId(),
            order.getCustomerEmail(),
            order.getTotal(),
            order.getCreatedAt()
        );
        publisher.publishEvent(event);
    }

    public void publishOrderCancelled(Order order, String reason) {
        OrderCancelledEvent event = new OrderCancelledEvent(
            this,
            order.getId(),
            reason
        );
        publisher.publishEvent(event);
    }
}
```

**Listener (classic):**

```java
@Component
public class InventoryUpdateListener implements ApplicationListener<OrderCreatedEvent> {

    private static final Logger log = LoggerFactory.getLogger(InventoryUpdateListener.class);

    @Override
    public void onApplicationEvent(OrderCreatedEvent event) {
        log.info("Reserving inventory for order {}", event.getOrderId());
        // Inventory reservation logic
    }
}
```

**Multiple listeners receive the same event synchronously by default.** The publisher thread blocks until all listeners finish.

### 10. Annotation-Based @EventListener


Modern code should use `@EventListener` on any bean method:

```java
@Component
public class EmailNotificationListener {

    private static final Logger log = LoggerFactory.getLogger(EmailNotificationListener.class);

    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        log.info("Sending confirmation email for order {} to {}",
            event.getOrderId(), event.getCustomerEmail());
    }

    @EventListener
    public void handleOrderCancelled(OrderCancelledEvent event) {
        log.info("Notifying customer about cancelled order {}", event.getOrderId());
    }

    @EventListener
    public void handleAllOrders(Object event) {
        if (event instanceof OrderCreatedEvent || event instanceof OrderCancelledEvent) {
            log.trace("Order-related event: {}", event);
        }
    }
}
```

**SpEL conditions:**

```java
@Component
public class HighValueOrderHandler {

    @EventListener(condition = "#event.total > 1000")
    public void handleHighValueOrder(OrderCreatedEvent event) {
        log.info("High-value order {} for {}. Flagging for review.",
            event.getOrderId(), event.getTotal());
    }

    @EventListener(condition = "#event.total > 5000")
    public void handleVipOrder(OrderCreatedEvent event) {
        log.info("VIP order {} Ã¢â‚¬â€œ assigning dedicated support.", event.getOrderId());
    }

    @EventListener(condition = "#event.customerEmail.contains('wholesale')")
    public void handleWholesaleOrder(OrderCreatedEvent event) {
        log.info("Wholesale order {} Ã¢â‚¬â€œ applying bulk discount.", event.getOrderId());
    }
}
```

**Ordering listeners:**

```java
@Component
public class FraudDetectionListener {

    @EventListener
    @Order(1)
    public void checkFraud(OrderCreatedEvent event) {
        log.info("Fraud check for order {}", event.getOrderId());
    }
}

@Component
public class InventoryReservationListener {

    @EventListener
    @Order(2)
    public void reserveInventory(OrderCreatedEvent event) {
        log.info("Reserve inventory for order {}", event.getOrderId());
    }
}

@Component
public class ShippingSchedulerListener {

    @EventListener
    @Order(3)
    public void scheduleShipping(OrderCreatedEvent event) {
        log.info("Schedule shipping for order {}", event.getOrderId());
    }
}
```

**Event listener with id (for programmatic removal):**

```java
@Component
public class ConditionalEventListener {

    @EventListener(id = "audit-log-listener")
    public void auditLog(OrderCreatedEvent event) {
        log.info("Audit: order {} created", event.getOrderId());
    }

    @EventListener(id = "metrics-listener", condition = "#event.total > 0")
    public void metrics(OrderCreatedEvent event) {
        log.info("Metrics: order total {}", event.getTotal());
    }
}
```

### 11. @TransactionalEventListener


`@TransactionalEventListener` binds an event listener to a transaction phase. The event is only delivered when the publishing method's transaction reaches the specified phase.

```java
@Component
public class TransactionBoundEventHandlers {

    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)
    public void beforeCommit(OrderCreatedEvent event) {
        System.out.println("BEFORE_COMMIT: Validating order " + event.getOrderId());
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void afterCommit(OrderCreatedEvent event) {
        System.out.println("AFTER_COMMIT: Order " + event.getOrderId() + " is confirmed");
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
    public void afterRollback(OrderCreatedEvent event) {
        System.out.println("AFTER_ROLLBACK: Order " + event.getOrderId() + " was rolled back");
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)
    public void afterCompletion(OrderCreatedEvent event) {
        System.out.println("AFTER_COMPLETION: Transaction ended for order " + event.getOrderId());
    }

    @TransactionalEventListener(
        phase = TransactionPhase.AFTER_COMMIT,
        condition = "#event.total > 5000",
        fallbackExecution = true
    )
    public void highValueAfterCommit(OrderCreatedEvent event) {
        System.out.println("High-value order " + event.getOrderId()
            + " committed. Notifying sales team.");
    }
}
```

| Phase | When it fires |
|-------|--------------|
| `BEFORE_COMMIT` | Before the transaction commits, within the same transaction |
| `AFTER_COMMIT` | After a successful commit (default) |
| `AFTER_ROLLBACK` | After a rollback |
| `AFTER_COMPLETION` | After commit or rollback |

The `fallbackExecution` parameter (default false) controls whether the listener fires even when no transaction is active.

### 12. Making Event Listeners Async


By default, all event listeners run on the publisher's thread. Adding `@Async` to an `@EventListener` method dispatches it to the task executor.

```java
@Component
public class AsyncEventListeners {

    @Async
    @EventListener
    public void sendConfirmationEmail(OrderCreatedEvent event) {
        // Runs on async-executor thread
        System.out.println("Sending email on thread: "
            + Thread.currentThread().getName());
    }

    @Async("ioTaskExecutor")
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void generateInvoice(OrderCreatedEvent event) {
        System.out.println("Generating invoice for order " + event.getOrderId()
            + " on " + Thread.currentThread().getName());
    }

    @Async
    @EventListener(condition = "#event.total > 10000")
    public void notifyEnterpriseSupport(OrderCreatedEvent event) {
        System.out.println("Enterprise support notified for order "
            + event.getOrderId());
    }
}
```

**Complete async event-driven flow:**

```java
@Service
public class OrderService {

    private final ApplicationEventPublisher publisher;

    public OrderService(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        Order order = new Order(request.getCustomerId(), request.getItems());
        // persist to database
        publisher.publishEvent(new OrderCreatedEvent(
            this, order.getId(), order.getCustomerEmail(),
            order.getTotal(), order.getCreatedAt()
        ));
        return order;
    }
}

@Component
public class AsyncEventListenerChain {

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 1)
    public CompletableFuture<Void> validatePayment(OrderCreatedEvent event) {
        System.out.println("Validating payment for " + event.getOrderId());
        return CompletableFuture.completedFuture(null);
    }

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 2)
    public void reserveInventory(OrderCreatedEvent event) {
        System.out.println("Reserving inventory for " + event.getOrderId());
    }

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 3)
    public void scheduleDelivery(OrderCreatedEvent event) {
        System.out.println("Scheduling delivery for " + event.getOrderId());
    }
}
```

### 13. Generic Events


Spring events support generic payloads:

```java
public class GenericEvent<T> {

    private final T payload;
    private final boolean success;

    public GenericEvent(T payload, boolean success) {
        this.payload = payload;
        this.success = success;
    }

    public T getPayload() { return payload; }
    public boolean isSuccess() { return success; }
}
```

**Resolution via generic type:**

```java
@Component
public class GenericEventHandler {

    @EventListener
    public void handleUserCreated(GenericEvent<UserCreatedPayload> event) {
        UserCreatedPayload payload = event.getPayload();
        System.out.println("User created: " + payload.getEmail());
    }

    @EventListener
    public void handleProductUpdated(GenericEvent<ProductUpdatedPayload> event) {
        ProductUpdatedPayload payload = event.getPayload();
        System.out.println("Product updated: " + payload.getSku());
    }
}
```

### 14. Event Payload Design


Events should be immutable, self-contained DTOs that carry enough context for any listener to act without querying the database.

```java
public class UserRegisteredEvent {

    private final String userId;
    private final String email;
    private final String name;
    private final String sourceApp;
    private final LocalDateTime timestamp;
    private final Map<String, Object> metadata;

    public UserRegisteredEvent(String userId, String email, String name,
                               String sourceApp, LocalDateTime timestamp,
                               Map<String, Object> metadata) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.sourceApp = sourceApp;
        this.timestamp = timestamp;
        this.metadata = metadata;
    }

    public String getUserId() { return userId; }
    public String getEmail() { return email; }
    public String getName() { return name; }
    public String getSourceApp() { return sourceApp; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public Map<String, Object> getMetadata() { return metadata; }

    @Override
    public String toString() {
        return "UserRegisteredEvent{userId='" + userId + "', email='" + email + "'}";
    }
}
```

**Event payload best practices:**
- Immutable fields, no setters
- Include a timestamp (preferably `Instant` or `LocalDateTime`)
- Include a correlation ID for tracing
- Include source/version info for schema evolution
- Do not include heavy objects like `HttpSession`, `EntityManager`, or serialized file content

### 15. Event Batching


When many events are published in rapid succession, batching improves throughput:

```java
@Component
public class EventBatcher {

    private static final Logger log = LoggerFactory.getLogger(EventBatcher.class);
    private final ApplicationEventPublisher publisher;
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();

    private final Queue<MetricRecord> batch = new ConcurrentLinkedQueue<>();
    private static final int BATCH_SIZE = 50;
    private static final int FLUSH_INTERVAL_MS = 5000;

    public EventBatcher(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
        scheduler.scheduleAtFixedRate(this::flush, FLUSH_INTERVAL_MS, FLUSH_INTERVAL_MS, TimeUnit.MILLISECONDS);
    }

    public void recordMetric(String name, double value, Map<String, String> tags) {
        batch.add(new MetricRecord(name, value, tags, Instant.now()));
        if (batch.size() >= BATCH_SIZE) {
            flush();
        }
    }

    public void flush() {
        List<MetricRecord> records = new ArrayList<>();
        MetricRecord record;
        while ((record = batch.poll()) != null) {
            records.add(record);
        }
        if (!records.isEmpty()) {
            publisher.publishEvent(new MetricBatchEvent(this, records));
            log.info("Published batch of {} metrics", records.size());
        }
    }

    @PreDestroy
    public void shutdown() {
        flush();
        scheduler.shutdown();
    }
}
```

### 16. Event Priority


Implement priority-based processing:

```java
public class PrioritizedEvent<T> {

    private final T payload;
    private final int priority;

    public PrioritizedEvent(T payload, int priority) {
        this.payload = payload;
        this.priority = priority;
    }

    public T getPayload() { return payload; }
    public int getPriority() { return priority; }
}

@Component
public class PriorityEventProcessor {

    private final PriorityQueue<PrioritizedEvent<OrderCreatedEvent>> queue =
        new PriorityQueue<>(Comparator.comparingInt(PrioritizedEvent::getPriority).reversed());

    @Async
    @EventListener
    public void enqueue(PrioritizedEvent<OrderCreatedEvent> event) {
        synchronized (queue) {
            queue.offer(event);
        }
    }

    @Async
    public void processQueue() {
        while (true) {
            PrioritizedEvent<OrderCreatedEvent> event;
            synchronized (queue) {
                event = queue.poll();
            }
            if (event != null) {
                process(event.getPayload());
            } else {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        }
    }

    private void process(OrderCreatedEvent event) {
        System.out.println("Processing priority event for order " + event.getOrderId());
    }
}
```

### 17. Event Sourcing Basics


Event sourcing persists every state change as an immutable event in an append-only store, rather than storing current state. The current state is reconstructed by replaying events.

```java
public interface EventStore {
    void save(DomainEvent event);
    List<DomainEvent> findByAggregateId(String aggregateId);
    List<DomainEvent> findAllSince(Long globalSequence);
    Long getLastSequence();
}

@Component
public class InMemoryEventStore implements EventStore {

    private final List<DomainEvent> events = new CopyOnWriteArrayList<>();

    @Override
    public void save(DomainEvent event) {
        events.add(event);
    }

    @Override
    public List<DomainEvent> findByAggregateId(String aggregateId) {
        return events.stream()
            .filter(e -> e.getAggregateId().equals(aggregateId))
            .collect(Collectors.toList());
    }

    @Override
    public List<DomainEvent> findAllSince(Long globalSequence) {
        return events.stream()
            .filter(e -> e.getSequence() > globalSequence)
            .collect(Collectors.toList());
    }

    @Override
    public Long getLastSequence() {
        return events.isEmpty() ? 0L : events.get(events.size() - 1).getSequence();
    }
}
```

**Base domain event:**

```java
public abstract class DomainEvent {

    private final String aggregateId;
    private final String eventType;
    private final Long sequence;
    private final Instant occurredAt;

    protected DomainEvent(String aggregateId, String eventType, Long sequence) {
        this.aggregateId = aggregateId;
        this.eventType = eventType;
        this.sequence = sequence;
        this.occurredAt = Instant.now();
    }

    public String getAggregateId() { return aggregateId; }
    public String getEventType() { return eventType; }
    public Long getSequence() { return sequence; }
    public Instant getOccurredAt() { return occurredAt; }
}

public class AccountOpenedEvent extends DomainEvent {
    private final String accountHolder;
    private final BigDecimal initialDeposit;

    public AccountOpenedEvent(String aggregateId, Long sequence,
                              String accountHolder, BigDecimal initialDeposit) {
        super(aggregateId, "ACCOUNT_OPENED", sequence);
        this.accountHolder = accountHolder;
        this.initialDeposit = initialDeposit;
    }

    public String getAccountHolder() { return accountHolder; }
    public BigDecimal getInitialDeposit() { return initialDeposit; }
}

public class MoneyDepositedEvent extends DomainEvent {
    private final BigDecimal amount;
    private final String reference;

    public MoneyDepositedEvent(String aggregateId, Long sequence,
                               BigDecimal amount, String reference) {
        super(aggregateId, "MONEY_DEPOSITED", sequence);
        this.amount = amount;
        this.reference = reference;
    }

    public BigDecimal getAmount() { return amount; }
    public String getReference() { return reference; }
}

public class MoneyWithdrawnEvent extends DomainEvent {
    private final BigDecimal amount;

    public MoneyWithdrawnEvent(String aggregateId, Long sequence, BigDecimal amount) {
        super(aggregateId, "MONEY_WITHDRAWN", sequence);
        this.amount = amount;
    }

    public BigDecimal getAmount() { return amount; }
    public String getReason() {
        return "Withdrawal of " + amount + " on " + getOccurredAt();
    }
}
```

**Aggregate reconstruction from events:**

```java
public class BankAccount {

    private String accountId;
    private String accountHolder;
    private BigDecimal balance;
    private boolean isActive;
    private long version;

    public BankAccount(List<DomainEvent> eventStream) {
        eventStream.forEach(this::apply);
    }

    public void apply(DomainEvent event) {
        if (event instanceof AccountOpenedEvent e) {
            apply(e);
        } else if (event instanceof MoneyDepositedEvent e) {
            apply(e);
        } else if (event instanceof MoneyWithdrawnEvent e) {
            apply(e);
        }
        version++;
    }

    private void apply(AccountOpenedEvent event) {
        this.accountId = event.getAggregateId();
        this.accountHolder = event.getAccountHolder();
        this.balance = event.getInitialDeposit();
        this.isActive = true;
    }

    private void apply(MoneyDepositedEvent event) {
        this.balance = this.balance.add(event.getAmount());
    }

    private void apply(MoneyWithdrawnEvent event) {
        this.balance = this.balance.subtract(event.getAmount());
    }

    public String getAccountId() { return accountId; }
    public String getAccountHolder() { return accountHolder; }
    public BigDecimal getBalance() { return balance; }
    public boolean isActive() { return isActive; }
    public long getVersion() { return version; }
}
```

### 18. Full Asynchronous Event Pipeline


Putting it all together:

```java
@SpringBootApplication
@EnableAsync
public class AsyncEventApplication {

    public static void main(String[] args) {
        SpringApplication.run(AsyncEventApplication.class, args);
    }
}

@Configuration
public class AppAsyncConfig implements AsyncConfigurer {

    @Override
    @Bean(name = "applicationTaskExecutor")
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(8);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(200);
        executor.setKeepAliveSeconds(60);
        executor.setThreadNamePrefix("app-async-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(30);
        executor.initialize();
        return executor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new DelegatingAsyncExceptionHandler(Arrays.asList(
            new LoggingAsyncExceptionHandler(),
            new MetricsAsyncExceptionHandler()
        ));
    }
}

public class LoggingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {
    private static final Logger log = LoggerFactory.getLogger(LoggingAsyncExceptionHandler.class);

    @Override
    public void handleUncaughtException(Throwable ex, Method method, Object... params) {
        log.error("Uncaught async exception in {} with params {}",
            method.getName(), Arrays.toString(params), ex);
    }
}

public class MetricsAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {
    private final MeterRegistry meterRegistry;

    public MetricsAsyncExceptionHandler(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @Override
    public void handleUncaughtException(Throwable ex, Method method, Object... params) {
        meterRegistry.counter("async.errors",
            "method", method.getName(),
            "exception", ex.getClass().getSimpleName()
        ).increment();
    }
}
```

**Complete domain event publisher with transaction-aware publishing:**

```java
@Component
public class TransactionAwareEventPublisher {

    private final ApplicationEventPublisher publisher;
    private final TransactionSynchronizationManager synchronizationManager;

    public TransactionAwareEventPublisher(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    public void publishAfterCommit(DomainEvent event) {
        if (TransactionSynchronizationManager.isActualTransactionActive()) {
            TransactionSynchronizationManager.registerSynchronization(
                new TransactionSynchronization() {
                    @Override
                    public void afterCommit() {
                        publisher.publishEvent(event);
                    }
                }
            );
        } else {
            publisher.publishEvent(event);
        }
    }

    public void publishAfterRollback(DomainEvent event) {
        if (TransactionSynchronizationManager.isActualTransactionActive()) {
            TransactionSynchronizationManager.registerSynchronization(
                new TransactionSynchronization() {
                    @Override
                    public void afterCompletion(int status) {
                        if (status == STATUS_ROLLED_BACK) {
                            publisher.publishEvent(event);
                        }
                    }
                }
            );
        }
    }
}
```

### 19. Unit Testing Async Methods


```java
@SpringBootTest
class AsyncServiceTest {

    @Autowired
    private ReportService reportService;

    @Test
    void testAsyncReturnsCompletableFuture() throws Exception {
        CompletableFuture<Report> future = reportService.generateReport("R-001");
        Report report = future.get(5, TimeUnit.SECONDS);
        assertThat(report.getId()).isEqualTo("R-001");
    }

    @Test
    void testAsyncTimeout() {
        assertThatThrownBy(() ->
            reportService.generateReport("R-002").get(100, TimeUnit.MILLISECONDS)
        ).isInstanceOf(TimeoutException.class);
    }
}

@SpringBootTest
class AsyncEventHandlerTest {

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private EmailNotificationListener listener;

    @Test
    void testEventListenerReceivesEvent() {
        OrderCreatedEvent event = new OrderCreatedEvent(
            this, 1L, "test@test.com", BigDecimal.valueOf(100), LocalDateTime.now()
        );
        publisher.publishEvent(event);
        // Verify side effects (e.g., verify email was queued)
    }
}
```

### 20. Monitoring Async Execution


```java
@Component
public class AsyncMetricsPublisher {

    private final MeterRegistry meterRegistry;

    public AsyncMetricsPublisher(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @EventListener
    public void onAsyncExecution(AsyncExecutionEvent event) {
        meterRegistry.timer("async.execution",
            "method", event.getMethodName(),
            "thread", event.getThreadName()
        ).record(event.getDuration());
    }

    @EventListener(condition = "#event.success == false")
    public void onAsyncFailure(AsyncExecutionEvent event) {
        meterRegistry.counter("async.failures",
            "method", event.getMethodName(),
            "exception", event.getExceptionType()
        ).increment();
    }
}
```

### 21. Advanced ThreadPoolTaskExecutor Configuration


```java
@Configuration
public class AdvancedExecutorConfig {

    @Bean(name = "monitoredExecutor")
    public Executor monitoredExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(30);
        executor.setQueueCapacity(150);
        executor.setKeepAliveSeconds(120);
        executor.setThreadNamePrefix("monitored-");

        // Custom rejection policy with metrics
        executor.setRejectedExecutionHandler((r, exec) -> {
            if (!exec.isShutdown()) {
                BlockingQueue<Runnable> queue = exec.getQueue();
                int queueSize = queue.size();
                int poolSize = exec.getPoolSize();
                System.out.printf("Task rejected. Queue: %d, Pool: %d%n",
                    queueSize, poolSize);
                // Fall back to caller's thread
                r.run();
            }
        });

        // Thread factory with custom naming and daemon flag
        executor.setThreadFactory(r -> {
            Thread t = new Thread(r, "monitored-" + ThreadLocalRandom.current().nextLong());
            t.setDaemon(false);
            t.setPriority(Thread.NORM_PRIORITY);
            t.setUncaughtExceptionHandler((thread, ex) ->
                System.err.println("Thread " + thread.getName() + " died: " + ex.getMessage())
            );
            return t;
        });

        executor.initialize();

        // Expose pool metrics via Micrometer
        monitorPoolMetrics(executor);

        return executor;
    }

    private void monitorPoolMetrics(ThreadPoolTaskExecutor executor) {
        ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
        scheduler.scheduleAtFixedRate(() -> {
            ThreadPoolExecutor tpe = executor.getThreadPoolExecutor();
            System.out.printf("""
                Pool Metrics:
                - Active Threads: %d
                - Current Pool Size: %d
                - Core Pool Size: %d
                - Max Pool Size: %d
                - Queued Tasks: %d
                - Completed Tasks: %d
                - Largest Pool Size: %d
                %n""",
                tpe.getActiveCount(),
                tpe.getPoolSize(),
                tpe.getCorePoolSize(),
                tpe.getMaximumPoolSize(),
                tpe.getQueue().size(),
                tpe.getCompletedTaskCount(),
                tpe.getLargestPoolSize()
            );
        }, 0, 30, TimeUnit.SECONDS);
    }
}
```

> [!TIP]
> Always configure a custom `TaskExecutor` bean → the default `SimpleAsyncTaskExecutor` creates a new thread per invocation with no pool.

> [!WARNING]
> Async listeners can lose events on application shutdown. Consider using an outbox pattern for critical events.

> [!NOTE]
> `@TransactionalEventListener` only fires if the publishing method runs inside a `@Transactional` context.

## Summary

Spring's async infrastructure spans two dimensions Ã¢â‚¬â€ method-level `@Async` with customizable thread pools, and the event system (`ApplicationEvent` / `@EventListener` / `@TransactionalEventListener`). Key takeaways:

- **`@EnableAsync`** activates async processing. Always override the default executor with a properly tuned `ThreadPoolTaskExecutor`.
- **Thread pool tuning** requires understanding the core/max/queue relationship. `CallerRunsPolicy` provides natural back-pressure for production systems.
- **`CompletableFuture`** is the preferred return type for async methods Ã¢â‚¬â€ it enables composition, error recovery, and timeout control.
- **Async exception handling** requires `AsyncUncaughtExceptionHandler` for void methods; `CompletableFuture.exceptionally/handle` for future-returning methods.
- **Spring Events** decouple publishers from listeners. Use `@EventListener` with SpEL conditions and ordering.
- **`@TransactionalEventListener`** binds event delivery to transaction lifecycle phases, ensuring events only fire after successful commits.
- **Combine `@Async` with `@EventListener`** for fully asynchronous event processing on dedicated thread pools.
- **Event sourcing** persists state changes as immutable events and reconstructs current state by replaying the event stream.

## Exercises

### Exercise 1: Configure a Thread Pool
Create a `ThreadPoolTaskExecutor` bean named `reportExecutor` with core=4, max=12, queue=80, `CallerRunsPolicy`, and thread prefix `"report-"`.

### Exercise 2: Async Report Generation
Write a service with an `@Async` method that returns `CompletableFuture<Report>`. Have it sleep 2 seconds, then create and return a `Report` object.

### Exercise 3: Compose Async Results
Write a coordinator service that calls two async methods in parallel, combines their results with `thenCombine`, and returns the merged output.

### Exercise 4: Async Error Handling
Write a custom `AsyncUncaughtExceptionHandler` that logs the method name, parameters, and exception. Register it via `AsyncConfigurer`.

### Exercise 5: Publish Custom Event
Define an `InventoryLowEvent` with `sku`, `currentStock`, and `threshold`. Publish it when stock drops below threshold. Listen with `@EventListener`.

### Exercise 6: Conditional Event Listener
Create two `@EventListener` methods for `OrderCreatedEvent` Ã¢â‚¬â€ one that fires for totals > $500 and one for totals &lt;= $500. Use SpEL `condition`.

### Exercise 7: Transaction-Bound Event
Create a `@TransactionalEventListener` with `AFTER_COMMIT` phase that sends a notification. Verify it runs only after the transaction commits.

### Exercise 8: Async Event Listener
Combine `@Async` with `@TransactionalEventListener` so that event handling runs on a separate thread pool.

### Exercise 9: Event Store Implementation
Implement an in-memory `EventStore` that stores `DomainEvent` objects. Write a method to reconstruct a `BankAccount` aggregate from its event stream.

### Exercise 10: Comprehensive Async Pipeline
Build a complete pipeline: a service method with `@Transactional` publishes an event; three `@Async` `@TransactionalEventListener` handlers process it in order; an `AsyncUncaughtExceptionHandler` catches any failures.
