/**
 * DAY 24 - MICROSERVICES PATTERNS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Service Discovery (Client-Side & Server-Side)
 * 2. Health Checks & Heartbeat
 * 3. Sidecar Pattern
 * 4. Ambassador Pattern
 * 5. Anti-Corruption Layer
 * 6. Retry with Exponential Backoff
 * 7. Timeout Pattern
 * 8. Idempotency
 * 9. Outbox Pattern
 * 10. Request Tracing & Correlation
 * 
 * Production-ready implementations with comprehensive examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.time.*;
import java.util.function.*;

public class MicroservicesPatternsComplete {

    // ============================================================================
    // 1. SERVICE DISCOVERY
    // ============================================================================

    /**
     * Service Registry
     */
    static class ServiceInstance {
        private final String serviceId;
        private final String host;
        private final int port;
        private final Map<String, String> metadata;
        private volatile long lastHeartbeat;

        public ServiceInstance(String serviceId, String host, int port) {
            this.serviceId = serviceId;
            this.host = host;
            this.port = port;
            this.metadata = new ConcurrentHashMap<>();
            this.lastHeartbeat = System.currentTimeMillis();
        }

        public void heartbeat() {
            lastHeartbeat = System.currentTimeMillis();
        }

        public boolean isHealthy(long timeoutMs) {
            return (System.currentTimeMillis() - lastHeartbeat) < timeoutMs;
        }

        public String getServiceId() { return serviceId; }
        public String getHost() { return host; }
        public int getPort() { return port; }
        public String getUrl() { return "http://" + host + ":" + port; }
    }

    /**
     * Service Registry with Health Checks
     */
    static class ServiceRegistry {
        private final Map<String, List<ServiceInstance>> services;
        private final ScheduledExecutorService healthChecker;
        private final long healthCheckInterval = 5000; // 5 seconds
        private final long instanceTimeout = 15000; // 15 seconds

        public ServiceRegistry() {
            this.services = new ConcurrentHashMap<>();
            this.healthChecker = Executors.newScheduledThreadPool(1);
            startHealthChecks();
        }

        public void register(ServiceInstance instance) {
            services.computeIfAbsent(instance.getServiceId(), 
                k -> new CopyOnWriteArrayList<>()).add(instance);
            System.out.println("Registered: " + instance.getServiceId() + 
                " at " + instance.getUrl());
        }

        public void deregister(ServiceInstance instance) {
            List<ServiceInstance> instances = services.get(instance.getServiceId());
            if (instances != null) {
                instances.remove(instance);
                System.out.println("Deregistered: " + instance.getServiceId());
            }
        }

        public List<ServiceInstance> discover(String serviceId) {
            List<ServiceInstance> instances = services.get(serviceId);
            if (instances == null) {
                return Collections.emptyList();
            }
            return instances.stream()
                .filter(i -> i.isHealthy(instanceTimeout))
                .collect(java.util.stream.Collectors.toList());
        }

        public ServiceInstance getHealthyInstance(String serviceId) {
            List<ServiceInstance> instances = discover(serviceId);
            if (instances.isEmpty()) {
                return null;
            }
            // Simple round-robin
            return instances.get(new Random().nextInt(instances.size()));
        }

        private void startHealthChecks() {
            healthChecker.scheduleAtFixedRate(() -> {
                for (Map.Entry<String, List<ServiceInstance>> entry : services.entrySet()) {
                    entry.getValue().removeIf(instance -> !instance.isHealthy(instanceTimeout));
                }
            }, healthCheckInterval, healthCheckInterval, TimeUnit.MILLISECONDS);
        }

        public void shutdown() {
            healthChecker.shutdown();
        }
    }

    // ============================================================================
    // 2. RETRY WITH EXPONENTIAL BACKOFF
    // ============================================================================

    /**
     * Retry Policy with Exponential Backoff
     */
    static class RetryPolicy {
        private final int maxRetries;
        private final long initialDelayMs;
        private final long maxDelayMs;
        private final double multiplier;

        public RetryPolicy(int maxRetries, long initialDelayMs, long maxDelayMs, double multiplier) {
            this.maxRetries = maxRetries;
            this.initialDelayMs = initialDelayMs;
            this.maxDelayMs = maxDelayMs;
            this.multiplier = multiplier;
        }

        public <T> T execute(Callable<T> operation) throws Exception {
            int attempt = 0;
            long delay = initialDelayMs;
            Exception lastException = null;

            while (attempt < maxRetries) {
                try {
                    return operation.call();
                } catch (Exception e) {
                    lastException = e;
                    attempt++;

                    if (attempt >= maxRetries) {
                        break;
                    }

                    System.out.println("Attempt " + attempt + " failed, retrying in " + delay + "ms");
                    Thread.sleep(delay);

                    delay = Math.min((long) (delay * multiplier), maxDelayMs);
                }
            }

            throw new Exception("Max retries exceeded", lastException);
        }
    }

    /**
     * Retry with Jitter
     */
    static class RetryWithJitter {
        private final int maxRetries;
        private final long baseDelayMs;
        private final Random random;

        public RetryWithJitter(int maxRetries, long baseDelayMs) {
            this.maxRetries = maxRetries;
            this.baseDelayMs = baseDelayMs;
            this.random = new Random();
        }

        public <T> T execute(Callable<T> operation) throws Exception {
            int attempt = 0;
            Exception lastException = null;

            while (attempt < maxRetries) {
                try {
                    return operation.call();
                } catch (Exception e) {
                    lastException = e;
                    attempt++;

                    if (attempt >= maxRetries) {
                        break;
                    }

                    // Exponential backoff with jitter
                    long maxDelay = (long) (baseDelayMs * Math.pow(2, attempt));
                    long delay = random.nextLong() % maxDelay;
                    delay = Math.abs(delay);

                    System.out.println("Retry attempt " + attempt + " after " + delay + "ms");
                    Thread.sleep(delay);
                }
            }

            throw new Exception("Max retries exceeded", lastException);
        }
    }

    // ============================================================================
    // 3. TIMEOUT PATTERN
    // ============================================================================

    /**
     * Timeout Wrapper
     */
    static class TimeoutExecutor {
        private final ExecutorService executor;

        public TimeoutExecutor() {
            this.executor = Executors.newCachedThreadPool();
        }

        public <T> T executeWithTimeout(Callable<T> task, long timeoutMs) throws Exception {
            Future<T> future = executor.submit(task);
            try {
                return future.get(timeoutMs, TimeUnit.MILLISECONDS);
            } catch (TimeoutException e) {
                future.cancel(true);
                throw new Exception("Operation timed out after " + timeoutMs + "ms");
            }
        }

        public void shutdown() {
            executor.shutdown();
        }
    }

    // ============================================================================
    // 4. IDEMPOTENCY
    // ============================================================================

    /**
     * Idempotency Key Store
     */
    static class IdempotencyKeyStore {
        private final Map<String, IdempotentOperation> operations;

        static class IdempotentOperation {
            private final String key;
            private final String result;
            private final long timestamp;

            public IdempotentOperation(String key, String result) {
                this.key = key;
                this.result = result;
                this.timestamp = System.currentTimeMillis();
            }

            public String getResult() { return result; }
            public long getTimestamp() { return timestamp; }
        }

        public IdempotencyKeyStore() {
            this.operations = new ConcurrentHashMap<>();
        }

        public boolean hasKey(String key) {
            return operations.containsKey(key);
        }

        public String getResult(String key) {
            IdempotentOperation op = operations.get(key);
            return op != null ? op.getResult() : null;
        }

        public void storeResult(String key, String result) {
            operations.put(key, new IdempotentOperation(key, result));
        }

        public void cleanupOldKeys(long maxAgeMs) {
            long now = System.currentTimeMillis();
            operations.entrySet().removeIf(entry -> 
                (now - entry.getValue().getTimestamp()) > maxAgeMs
            );
        }
    }

    /**
     * Idempotent Service
     */
    static class IdempotentService {
        private final IdempotencyKeyStore keyStore;

        public IdempotentService() {
            this.keyStore = new IdempotencyKeyStore();
        }

        public String processRequest(String idempotencyKey, Supplier<String> operation) {
            // Check if already processed
            if (keyStore.hasKey(idempotencyKey)) {
                System.out.println("Request already processed, returning cached result");
                return keyStore.getResult(idempotencyKey);
            }

            // Process and store result
            String result = operation.get();
            keyStore.storeResult(idempotencyKey, result);
            return result;
        }
    }

    // ============================================================================
    // 5. OUTBOX PATTERN
    // ============================================================================

    /**
     * Outbox Event
     */
    static class OutboxEvent {
        private final String eventId;
        private final String aggregateId;
        private final String eventType;
        private final String payload;
        private final long timestamp;
        private volatile boolean published;

        public OutboxEvent(String aggregateId, String eventType, String payload) {
            this.eventId = UUID.randomUUID().toString();
            this.aggregateId = aggregateId;
            this.eventType = eventType;
            this.payload = payload;
            this.timestamp = System.currentTimeMillis();
            this.published = false;
        }

        public void markPublished() {
            this.published = true;
        }

        public boolean isPublished() { return published; }
        public String getEventId() { return eventId; }
        public String getEventType() { return eventType; }
        public String getPayload() { return payload; }
    }

    /**
     * Outbox Pattern Implementation
     */
    static class OutboxPublisher {
        private final Queue<OutboxEvent> outbox;
        private final ScheduledExecutorService publisher;

        public OutboxPublisher() {
            this.outbox = new ConcurrentLinkedQueue<>();
            this.publisher = Executors.newScheduledThreadPool(1);
            startPublishing();
        }

        public void addEvent(OutboxEvent event) {
            outbox.offer(event);
        }

        private void startPublishing() {
            publisher.scheduleAtFixedRate(() -> {
                while (!outbox.isEmpty()) {
                    OutboxEvent event = outbox.peek();
                    if (event != null && !event.isPublished()) {
                        try {
                            publishEvent(event);
                            event.markPublished();
                            outbox.poll();
                        } catch (Exception e) {
                            System.err.println("Failed to publish event: " + e.getMessage());
                            break; // Retry on next iteration
                        }
                    }
                }
            }, 100, 100, TimeUnit.MILLISECONDS);
        }

        private void publishEvent(OutboxEvent event) {
            // Simulate publishing to message broker
            System.out.println("Publishing event: " + event.getEventType() + 
                " - " + event.getPayload());
        }

        public void shutdown() {
            publisher.shutdown();
        }
    }

    // ============================================================================
    // 6. REQUEST TRACING & CORRELATION
    // ============================================================================

    /**
     * Trace Context
     */
    static class TraceContext {
        private final String traceId;
        private final String spanId;
        private final String parentSpanId;
        private final long startTime;
        private volatile long endTime;

        public TraceContext(String traceId, String spanId, String parentSpanId) {
            this.traceId = traceId;
            this.spanId = spanId;
            this.parentSpanId = parentSpanId;
            this.startTime = System.currentTimeMillis();
        }

        public void finish() {
            this.endTime = System.currentTimeMillis();
        }

        public long getDuration() {
            return endTime - startTime;
        }

        public String getTraceId() { return traceId; }
        public String getSpanId() { return spanId; }
        public String getParentSpanId() { return parentSpanId; }
    }

    /**
     * Distributed Tracing
     */
    static class DistributedTracer {
        private static final ThreadLocal<TraceContext> currentContext = new ThreadLocal<>();
        private final List<TraceContext> traces;

        public DistributedTracer() {
            this.traces = new CopyOnWriteArrayList<>();
        }

        public TraceContext startTrace(String operationName) {
            String traceId = UUID.randomUUID().toString();
            String spanId = UUID.randomUUID().toString();
            TraceContext context = new TraceContext(traceId, spanId, null);
            currentContext.set(context);
            traces.add(context);
            System.out.println("Started trace: " + traceId + " for " + operationName);
            return context;
        }

        public TraceContext startSpan(String operationName) {
            TraceContext parent = currentContext.get();
            String traceId = parent != null ? parent.getTraceId() : UUID.randomUUID().toString();
            String spanId = UUID.randomUUID().toString();
            String parentSpanId = parent != null ? parent.getSpanId() : null;

            TraceContext context = new TraceContext(traceId, spanId, parentSpanId);
            currentContext.set(context);
            traces.add(context);
            System.out.println("Started span: " + spanId + " for " + operationName);
            return context;
        }

        public void finishSpan(TraceContext context) {
            context.finish();
            System.out.println("Finished span: " + context.getSpanId() + 
                " (duration: " + context.getDuration() + "ms)");
        }

        public TraceContext getCurrentContext() {
            return currentContext.get();
        }

        public List<TraceContext> getTraces() {
            return new ArrayList<>(traces);
        }
    }

    // ============================================================================
    // 7. SIDECAR PATTERN
    // ============================================================================

    /**
     * Sidecar Component
     */
    static class Sidecar {
        private final String serviceId;
        private final Map<String, String> configuration;
        private final MetricsCollector metricsCollector;

        static class MetricsCollector {
            private final Map<String, AtomicLong> metrics = new ConcurrentHashMap<>();

            public void increment(String metric) {
                metrics.computeIfAbsent(metric, k -> new AtomicLong()).incrementAndGet();
            }

            public long getMetric(String metric) {
                AtomicLong value = metrics.get(metric);
                return value != null ? value.get() : 0;
            }

            public Map<String, Long> getAllMetrics() {
                Map<String, Long> result = new HashMap<>();
                metrics.forEach((k, v) -> result.put(k, v.get()));
                return result;
            }
        }

        public Sidecar(String serviceId) {
            this.serviceId = serviceId;
            this.configuration = new ConcurrentHashMap<>();
            this.metricsCollector = new MetricsCollector();
            loadConfiguration();
        }

        private void loadConfiguration() {
            configuration.put("max_connections", "100");
            configuration.put("timeout_ms", "5000");
        }

        public String getConfig(String key) {
            return configuration.get(key);
        }

        public void recordMetric(String metric) {
            metricsCollector.increment(metric);
        }

        public Map<String, Long> getMetrics() {
            return metricsCollector.getAllMetrics();
        }
    }

    // ============================================================================
    // 8. ANTI-CORRUPTION LAYER
    // ============================================================================

    /**
     * Legacy System Interface
     */
    interface LegacySystem {
        String getData(String id);
    }

    static class LegacyCustomerSystem implements LegacySystem {
        private final Map<String, String> data = new ConcurrentHashMap<>();

        public LegacyCustomerSystem() {
            data.put("1", "CUST|John Doe|john@example.com|NYC");
        }

        @Override
        public String getData(String id) {
            return data.get(id);
        }
    }

    /**
     * Modern Domain Model
     */
    static class Customer {
        private final String id;
        private final String name;
        private final String email;
        private final String city;

        public Customer(String id, String name, String email, String city) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.city = city;
        }

        @Override
        public String toString() {
            return "Customer{id=" + id + ", name=" + name + 
                ", email=" + email + ", city=" + city + "}";
        }
    }

    /**
     * Anti-Corruption Layer
     */
    static class CustomerAdapter {
        private final LegacySystem legacySystem;

        public CustomerAdapter(LegacySystem legacySystem) {
            this.legacySystem = legacySystem;
        }

        public Customer getCustomer(String id) {
            String legacyData = legacySystem.getData(id);
            if (legacyData == null) {
                return null;
            }

            // Transform legacy format to modern model
            String[] parts = legacyData.split("\\|");
            return new Customer(id, parts[1], parts[2], parts[3]);
        }
    }

    // ============================================================================
    // 9. HEALTH CHECKS
    // ============================================================================

    /**
     * Health Check System
     */
    static class HealthCheck {
        enum Status { HEALTHY, DEGRADED, UNHEALTHY }

        static class HealthCheckResult {
            private final String component;
            private final Status status;
            private final String message;
            private final long responseTimeMs;

            public HealthCheckResult(String component, Status status, 
                                    String message, long responseTimeMs) {
                this.component = component;
                this.status = status;
                this.message = message;
                this.responseTimeMs = responseTimeMs;
            }

            @Override
            public String toString() {
                return component + ": " + status + " (" + responseTimeMs + "ms) - " + message;
            }

            public Status getStatus() { return status; }
        }

        private final Map<String, Supplier<HealthCheckResult>> checks;

        public HealthCheck() {
            this.checks = new ConcurrentHashMap<>();
        }

        public void registerCheck(String name, Supplier<HealthCheckResult> check) {
            checks.put(name, check);
        }

        public Map<String, HealthCheckResult> runAllChecks() {
            Map<String, HealthCheckResult> results = new HashMap<>();
            for (Map.Entry<String, Supplier<HealthCheckResult>> entry : checks.entrySet()) {
                results.put(entry.getKey(), entry.getValue().get());
            }
            return results;
        }

        public Status getOverallStatus() {
            Map<String, HealthCheckResult> results = runAllChecks();
            if (results.values().stream().anyMatch(r -> r.getStatus() == Status.UNHEALTHY)) {
                return Status.UNHEALTHY;
            }
            if (results.values().stream().anyMatch(r -> r.getStatus() == Status.DEGRADED)) {
                return Status.DEGRADED;
            }
            return Status.HEALTHY;
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) throws Exception {
        System.out.println("=== DAY 24: MICROSERVICES PATTERNS ===\n");

        // Test Service Discovery
        demonstrateServiceDiscovery();

        // Test Retry
        demonstrateRetry();

        // Test Timeout
        demonstrateTimeout();

        // Test Idempotency
        demonstrateIdempotency();

        // Test Outbox
        demonstrateOutbox();

        // Test Tracing
        demonstrateTracing();

        // Test Sidecar
        demonstrateSidecar();

        // Test Anti-Corruption Layer
        demonstrateACL();

        // Test Health Checks
        demonstrateHealthChecks();
    }

    private static void demonstrateServiceDiscovery() throws InterruptedException {
        System.out.println("\n--- Service Discovery Demo ---");
        ServiceRegistry registry = new ServiceRegistry();

        ServiceInstance service1 = new ServiceInstance("user-service", "localhost", 8001);
        ServiceInstance service2 = new ServiceInstance("user-service", "localhost", 8002);

        registry.register(service1);
        registry.register(service2);

        service1.heartbeat();
        service2.heartbeat();

        ServiceInstance instance = registry.getHealthyInstance("user-service");
        System.out.println("Discovered instance: " + instance.getUrl());

        registry.shutdown();
    }

    private static void demonstrateRetry() throws Exception {
        System.out.println("\n--- Retry Pattern Demo ---");
        RetryPolicy retry = new RetryPolicy(3, 100, 1000, 2.0);

        AtomicInteger attempts = new AtomicInteger(0);
        try {
            String result = retry.execute(() -> {
                int attempt = attempts.incrementAndGet();
                if (attempt < 3) {
                    throw new Exception("Temporary failure");
                }
                return "Success on attempt " + attempt;
            });
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.out.println("Failed: " + e.getMessage());
        }
    }

    private static void demonstrateTimeout() throws Exception {
        System.out.println("\n--- Timeout Pattern Demo ---");
        TimeoutExecutor executor = new TimeoutExecutor();

        try {
            String result = executor.executeWithTimeout(() -> {
                Thread.sleep(500);
                return "Completed in time";
            }, 1000);
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.out.println("Timeout: " + e.getMessage());
        }

        executor.shutdown();
    }

    private static void demonstrateIdempotency() {
        System.out.println("\n--- Idempotency Pattern Demo ---");
        IdempotentService service = new IdempotentService();

        String key = "order-123";
        String result1 = service.processRequest(key, () -> "Order processed");
        String result2 = service.processRequest(key, () -> "Order processed again");

        System.out.println("First call: " + result1);
        System.out.println("Second call (cached): " + result2);
    }

    private static void demonstrateOutbox() throws InterruptedException {
        System.out.println("\n--- Outbox Pattern Demo ---");
        OutboxPublisher publisher = new OutboxPublisher();

        publisher.addEvent(new OutboxEvent("order-1", "OrderCreated", "{orderId: 1}"));
        publisher.addEvent(new OutboxEvent("order-2", "OrderCreated", "{orderId: 2}"));

        Thread.sleep(500);
        publisher.shutdown();
    }

    private static void demonstrateTracing() {
        System.out.println("\n--- Distributed Tracing Demo ---");
        DistributedTracer tracer = new DistributedTracer();

        TraceContext trace = tracer.startTrace("process-order");
        TraceContext span1 = tracer.startSpan("validate-order");
        tracer.finishSpan(span1);
        TraceContext span2 = tracer.startSpan("save-order");
        tracer.finishSpan(span2);
        tracer.finishSpan(trace);
    }

    private static void demonstrateSidecar() {
        System.out.println("\n--- Sidecar Pattern Demo ---");
        Sidecar sidecar = new Sidecar("my-service");

        System.out.println("Config: max_connections = " + sidecar.getConfig("max_connections"));

        sidecar.recordMetric("requests");
        sidecar.recordMetric("requests");
        sidecar.recordMetric("errors");

        System.out.println("Metrics: " + sidecar.getMetrics());
    }

    private static void demonstrateACL() {
        System.out.println("\n--- Anti-Corruption Layer Demo ---");
        LegacyCustomerSystem legacy = new LegacyCustomerSystem();
        CustomerAdapter adapter = new CustomerAdapter(legacy);

        Customer customer = adapter.getCustomer("1");
        System.out.println("Modernized: " + customer);
    }

    private static void demonstrateHealthChecks() {
        System.out.println("\n--- Health Checks Demo ---");
        HealthCheck healthCheck = new HealthCheck();

        healthCheck.registerCheck("database", () -> {
            long start = System.currentTimeMillis();
            return new HealthCheck.HealthCheckResult(
                "database", HealthCheck.Status.HEALTHY, "Connected", 
                System.currentTimeMillis() - start
            );
        });

        healthCheck.registerCheck("cache", () -> {
            long start = System.currentTimeMillis();
            return new HealthCheck.HealthCheckResult(
                "cache", HealthCheck.Status.HEALTHY, "OK", 
                System.currentTimeMillis() - start
            );
        });

        Map<String, HealthCheck.HealthCheckResult> results = healthCheck.runAllChecks();
        results.values().forEach(System.out::println);
        System.out.println("Overall Status: " + healthCheck.getOverallStatus());
    }
}
