/**
 * DAY 32: MICROSERVICES ARCHITECTURE PATTERNS
 * Core Microservices Design Patterns & Best Practices
 * 
 * Topics Covered:
 * 1. Service Discovery (Eureka, Consul patterns)
 * 2. API Gateway Pattern
 * 3. Circuit Breaker (Hystrix pattern)
 * 4. Service Mesh (Sidecar pattern)
 * 5. Event-Driven Architecture
 * 6. Saga Pattern (Distributed Transactions)
 * 7. CQRS (Command Query Responsibility Segregation)
 * 8. Backend for Frontend (BFF)
 * 
 * Real-World Applications:
 * - Netflix microservices
 * - Uber architecture
 * - Amazon services
 * - Kubernetes patterns
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 4, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.function.*;
import java.util.stream.*;

public class MicroservicesPatterns {
    
    // ========================================================================
    // PATTERN 1: SERVICE DISCOVERY
    // ========================================================================
    
    /**
     * Service Registry - Central registry for service instances
     * Pattern: Eureka/Consul style service discovery
     * 
     * Features:
     * - Register/deregister services
     * - Health checks
     * - Load balancing
     * - Service lookup
     */
    static class ServiceRegistry {
        
        static class ServiceInstance {
            String serviceId;
            String instanceId;
            String host;
            int port;
            Map<String, String> metadata;
            Instant lastHeartbeat;
            HealthStatus status;
            
            ServiceInstance(String serviceId, String instanceId, String host, int port) {
                this.serviceId = serviceId;
                this.instanceId = instanceId;
                this.host = host;
                this.port = port;
                this.metadata = new HashMap<>();
                this.lastHeartbeat = Instant.now();
                this.status = HealthStatus.UP;
            }
            
            String getUrl() {
                return "http://" + host + ":" + port;
            }
            
            boolean isHealthy() {
                Duration timeSinceHeartbeat = Duration.between(lastHeartbeat, Instant.now());
                return status == HealthStatus.UP && timeSinceHeartbeat.getSeconds() < 30;
            }
            
            @Override
            public String toString() {
                return String.format("%s:%s (%s:%d) - %s", 
                    serviceId, instanceId, host, port, status);
            }
        }
        
        enum HealthStatus { UP, DOWN, STARTING, OUT_OF_SERVICE }
        
        // Service registry storage: serviceId -> list of instances
        private Map<String, List<ServiceInstance>> registry = new ConcurrentHashMap<>();
        
        // Heartbeat checker
        private ScheduledExecutorService heartbeatChecker;
        
        public ServiceRegistry() {
            // Start heartbeat checker every 10 seconds
            heartbeatChecker = Executors.newScheduledThreadPool(1);
            heartbeatChecker.scheduleAtFixedRate(
                this::checkHeartbeats, 
                10, 10, TimeUnit.SECONDS
            );
        }
        
        /**
         * Register a new service instance
         */
        public void register(ServiceInstance instance) {
            registry.computeIfAbsent(instance.serviceId, k -> new CopyOnWriteArrayList<>())
                    .add(instance);
            
            System.out.printf("[REGISTRY] Registered: %s%n", instance);
        }
        
        /**
         * Deregister service instance
         */
        public void deregister(String serviceId, String instanceId) {
            List<ServiceInstance> instances = registry.get(serviceId);
            if (instances != null) {
                instances.removeIf(i -> i.instanceId.equals(instanceId));
                System.out.printf("[REGISTRY] Deregistered: %s/%s%n", serviceId, instanceId);
            }
        }
        
        /**
         * Send heartbeat to keep instance alive
         */
        public void heartbeat(String serviceId, String instanceId) {
            List<ServiceInstance> instances = registry.get(serviceId);
            if (instances != null) {
                instances.stream()
                    .filter(i -> i.instanceId.equals(instanceId))
                    .forEach(i -> i.lastHeartbeat = Instant.now());
            }
        }
        
        /**
         * Get healthy instances of a service
         */
        public List<ServiceInstance> getInstances(String serviceId) {
            return registry.getOrDefault(serviceId, Collections.emptyList())
                .stream()
                .filter(ServiceInstance::isHealthy)
                .collect(Collectors.toList());
        }
        
        /**
         * Get single instance using round-robin load balancing
         */
        public ServiceInstance getInstance(String serviceId) {
            List<ServiceInstance> instances = getInstances(serviceId);
            if (instances.isEmpty()) {
                throw new RuntimeException("No healthy instances for: " + serviceId);
            }
            
            // Simple round-robin
            int index = ThreadLocalRandom.current().nextInt(instances.size());
            return instances.get(index);
        }
        
        /**
         * Check heartbeats and mark unhealthy instances as DOWN
         */
        private void checkHeartbeats() {
            registry.values().forEach(instances -> {
                instances.forEach(instance -> {
                    if (!instance.isHealthy() && instance.status == HealthStatus.UP) {
                        instance.status = HealthStatus.DOWN;
                        System.out.printf("[REGISTRY] Instance DOWN: %s%n", instance);
                    }
                });
            });
        }
        
        /**
         * Get all services
         */
        public Set<String> getAllServices() {
            return new HashSet<>(registry.keySet());
        }
        
        public void shutdown() {
            heartbeatChecker.shutdown();
        }
    }
    
    // ========================================================================
    // PATTERN 2: API GATEWAY
    // ========================================================================
    
    /**
     * API Gateway - Single entry point for all client requests
     * 
     * Features:
     * - Request routing
     * - Load balancing
     * - Authentication/Authorization
     * - Rate limiting
     * - Request/Response transformation
     * - Circuit breaking
     */
    static class APIGateway {
        
        static class Request {
            String path;
            String method;
            Map<String, String> headers;
            String body;
            String clientId;
            
            Request(String path, String method, String clientId) {
                this.path = path;
                this.method = method;
                this.clientId = clientId;
                this.headers = new HashMap<>();
            }
        }
        
        static class Response {
            int statusCode;
            Map<String, String> headers;
            String body;
            
            Response(int statusCode, String body) {
                this.statusCode = statusCode;
                this.body = body;
                this.headers = new HashMap<>();
            }
            
            boolean isSuccess() {
                return statusCode >= 200 && statusCode < 300;
            }
        }
        
        static class Route {
            String pathPattern;
            String targetService;
            boolean authRequired;
            
            Route(String pathPattern, String targetService, boolean authRequired) {
                this.pathPattern = pathPattern;
                this.targetService = targetService;
                this.authRequired = authRequired;
            }
            
            boolean matches(String path) {
                // Simple pattern matching (in production use regex)
                return path.startsWith(pathPattern.replace("**", ""));
            }
        }
        
        private ServiceRegistry serviceRegistry;
        private List<Route> routes;
        private Map<String, Integer> rateLimits; // clientId -> request count
        private ScheduledExecutorService rateLimitReset;
        
        public APIGateway(ServiceRegistry registry) {
            this.serviceRegistry = registry;
            this.routes = new ArrayList<>();
            this.rateLimits = new ConcurrentHashMap<>();
            
            // Reset rate limits every minute
            rateLimitReset = Executors.newScheduledThreadPool(1);
            rateLimitReset.scheduleAtFixedRate(
                () -> rateLimits.clear(),
                1, 1, TimeUnit.MINUTES
            );
        }
        
        /**
         * Add route configuration
         */
        public void addRoute(String pathPattern, String targetService, boolean authRequired) {
            routes.add(new Route(pathPattern, targetService, authRequired));
            System.out.printf("[GATEWAY] Added route: %s -> %s%n", pathPattern, targetService);
        }
        
        /**
         * Handle incoming request
         */
        public Response handleRequest(Request request) {
            System.out.printf("[GATEWAY] Request: %s %s from %s%n", 
                request.method, request.path, request.clientId);
            
            // 1. Rate limiting
            if (!checkRateLimit(request.clientId)) {
                return new Response(429, "Rate limit exceeded");
            }
            
            // 2. Find matching route
            Route route = findRoute(request.path);
            if (route == null) {
                return new Response(404, "Route not found");
            }
            
            // 3. Authentication (simplified)
            if (route.authRequired && !authenticate(request)) {
                return new Response(401, "Unauthorized");
            }
            
            // 4. Service discovery and routing
            try {
                ServiceRegistry.ServiceInstance instance = 
                    serviceRegistry.getInstance(route.targetService);
                
                // 5. Forward request to service
                Response response = forwardRequest(request, instance);
                
                System.out.printf("[GATEWAY] Response: %d from %s%n", 
                    response.statusCode, instance.getUrl());
                
                return response;
                
            } catch (Exception e) {
                System.out.printf("[GATEWAY] Error: %s%n", e.getMessage());
                return new Response(503, "Service unavailable");
            }
        }
        
        /**
         * Rate limiting: max 100 requests per minute per client
         */
        private boolean checkRateLimit(String clientId) {
            int count = rateLimits.getOrDefault(clientId, 0);
            if (count >= 100) {
                return false;
            }
            rateLimits.put(clientId, count + 1);
            return true;
        }
        
        /**
         * Find route matching the request path
         */
        private Route findRoute(String path) {
            return routes.stream()
                .filter(r -> r.matches(path))
                .findFirst()
                .orElse(null);
        }
        
        /**
         * Simple authentication check
         */
        private boolean authenticate(Request request) {
            String authHeader = request.headers.get("Authorization");
            // In production: validate JWT, OAuth token, etc.
            return authHeader != null && authHeader.startsWith("Bearer ");
        }
        
        /**
         * Forward request to actual service
         */
        private Response forwardRequest(Request request, ServiceRegistry.ServiceInstance instance) {
            // Simulate HTTP call to service
            try {
                Thread.sleep(10); // Simulate network latency
                
                // Simulate service response
                String responseBody = String.format(
                    "{\"service\": \"%s\", \"instance\": \"%s\", \"path\": \"%s\"}",
                    instance.serviceId, instance.instanceId, request.path
                );
                
                return new Response(200, responseBody);
                
            } catch (InterruptedException e) {
                return new Response(500, "Internal server error");
            }
        }
        
        public void shutdown() {
            rateLimitReset.shutdown();
        }
    }
    
    // ========================================================================
    // PATTERN 3: CIRCUIT BREAKER
    // ========================================================================
    
    /**
     * Circuit Breaker - Prevent cascading failures
     * 
     * States:
     * - CLOSED: Normal operation, requests pass through
     * - OPEN: Failures exceeded threshold, reject requests immediately
     * - HALF_OPEN: Test if service recovered, allow limited requests
     * 
     * Similar to: Netflix Hystrix, Resilience4j
     */
    static class CircuitBreaker {
        
        enum State { CLOSED, OPEN, HALF_OPEN }
        
        private String serviceName;
        private State state;
        private int failureCount;
        private int successCount;
        private final int failureThreshold; // Open circuit after N failures
        private final int successThreshold; // Close circuit after N successes in HALF_OPEN
        private final Duration timeout; // Time to wait before HALF_OPEN
        private Instant lastFailureTime;
        
        public CircuitBreaker(String serviceName, int failureThreshold, 
                            int successThreshold, Duration timeout) {
            this.serviceName = serviceName;
            this.state = State.CLOSED;
            this.failureThreshold = failureThreshold;
            this.successThreshold = successThreshold;
            this.timeout = timeout;
            this.failureCount = 0;
            this.successCount = 0;
        }
        
        /**
         * Execute operation with circuit breaker protection
         */
        public <T> T execute(Supplier<T> operation, Supplier<T> fallback) {
            if (state == State.OPEN) {
                // Check if timeout elapsed
                if (Duration.between(lastFailureTime, Instant.now()).compareTo(timeout) > 0) {
                    System.out.printf("[CIRCUIT BREAKER][%s] HALF_OPEN - Testing service%n", serviceName);
                    state = State.HALF_OPEN;
                    successCount = 0;
                } else {
                    // Still open, return fallback immediately
                    System.out.printf("[CIRCUIT BREAKER][%s] OPEN - Using fallback%n", serviceName);
                    return fallback.get();
                }
            }
            
            try {
                // Execute operation
                T result = operation.get();
                onSuccess();
                return result;
                
            } catch (Exception e) {
                onFailure();
                System.out.printf("[CIRCUIT BREAKER][%s] Operation failed: %s%n", 
                    serviceName, e.getMessage());
                return fallback.get();
            }
        }
        
        /**
         * Record successful execution
         */
        private void onSuccess() {
            failureCount = 0;
            
            if (state == State.HALF_OPEN) {
                successCount++;
                if (successCount >= successThreshold) {
                    System.out.printf("[CIRCUIT BREAKER][%s] CLOSED - Service recovered%n", serviceName);
                    state = State.CLOSED;
                    successCount = 0;
                }
            }
        }
        
        /**
         * Record failed execution
         */
        private void onFailure() {
            failureCount++;
            lastFailureTime = Instant.now();
            
            if (state == State.HALF_OPEN) {
                // Any failure in HALF_OPEN -> back to OPEN
                System.out.printf("[CIRCUIT BREAKER][%s] OPEN - Service still failing%n", serviceName);
                state = State.OPEN;
                successCount = 0;
                
            } else if (state == State.CLOSED && failureCount >= failureThreshold) {
                // Too many failures -> OPEN
                System.out.printf("[CIRCUIT BREAKER][%s] OPEN - Threshold exceeded (%d failures)%n", 
                    serviceName, failureCount);
                state = State.OPEN;
            }
        }
        
        public State getState() {
            return state;
        }
        
        public int getFailureCount() {
            return failureCount;
        }
    }
    
    // ========================================================================
    // PATTERN 4: SIDECAR PATTERN (Service Mesh)
    // ========================================================================
    
    /**
     * Sidecar - Proxy deployed alongside each service
     * 
     * Responsibilities:
     * - Service discovery
     * - Load balancing
     * - Circuit breaking
     * - Metrics collection
     * - Distributed tracing
     * - Security (mTLS)
     * 
     * Similar to: Envoy, Linkerd, Istio
     */
    static class SidecarProxy {
        
        static class ServiceCall {
            String targetService;
            String method;
            String path;
            Instant timestamp;
            Duration duration;
            boolean success;
            
            ServiceCall(String targetService, String method, String path) {
                this.targetService = targetService;
                this.method = method;
                this.path = path;
                this.timestamp = Instant.now();
            }
            
            void complete(boolean success, Duration duration) {
                this.success = success;
                this.duration = duration;
            }
        }
        
        private String serviceId;
        private ServiceRegistry serviceRegistry;
        private Map<String, CircuitBreaker> circuitBreakers;
        private List<ServiceCall> callHistory; // Metrics
        
        public SidecarProxy(String serviceId, ServiceRegistry registry) {
            this.serviceId = serviceId;
            this.serviceRegistry = registry;
            this.circuitBreakers = new ConcurrentHashMap<>();
            this.callHistory = new CopyOnWriteArrayList<>();
        }
        
        /**
         * Make inter-service call through sidecar
         */
        public String call(String targetService, String method, String path) {
            System.out.printf("[SIDECAR][%s] Calling %s: %s %s%n", 
                serviceId, targetService, method, path);
            
            ServiceCall call = new ServiceCall(targetService, method, path);
            Instant start = Instant.now();
            
            try {
                // Get or create circuit breaker for target service
                CircuitBreaker cb = circuitBreakers.computeIfAbsent(
                    targetService,
                    k -> new CircuitBreaker(targetService, 3, 2, Duration.ofSeconds(5))
                );
                
                // Execute with circuit breaker protection
                String result = cb.execute(
                    () -> doServiceCall(targetService, method, path),
                    () -> getFallbackResponse(targetService)
                );
                
                Duration duration = Duration.between(start, Instant.now());
                call.complete(true, duration);
                callHistory.add(call);
                
                return result;
                
            } catch (Exception e) {
                Duration duration = Duration.between(start, Instant.now());
                call.complete(false, duration);
                callHistory.add(call);
                throw e;
            }
        }
        
        /**
         * Actual service call with service discovery
         */
        private String doServiceCall(String targetService, String method, String path) {
            // Service discovery
            ServiceRegistry.ServiceInstance instance = serviceRegistry.getInstance(targetService);
            
            // Simulate HTTP call
            try {
                Thread.sleep(ThreadLocalRandom.current().nextInt(10, 50));
                
                // Simulate occasional failures
                if (ThreadLocalRandom.current().nextInt(100) < 5) { // 5% failure rate
                    throw new RuntimeException("Service temporarily unavailable");
                }
                
                return String.format("{\"instance\": \"%s\", \"response\": \"success\"}", 
                    instance.instanceId);
                
            } catch (InterruptedException e) {
                throw new RuntimeException("Call interrupted", e);
            }
        }
        
        /**
         * Fallback response when service is unavailable
         */
        private String getFallbackResponse(String targetService) {
            return String.format("{\"service\": \"%s\", \"response\": \"fallback\"}", 
                targetService);
        }
        
        /**
         * Get metrics for monitoring
         */
        public Map<String, Object> getMetrics() {
            Map<String, Object> metrics = new HashMap<>();
            
            // Total calls
            metrics.put("total_calls", callHistory.size());
            
            // Success rate
            long successCount = callHistory.stream().filter(c -> c.success).count();
            metrics.put("success_rate", 
                callHistory.isEmpty() ? 0.0 : (double) successCount / callHistory.size());
            
            // Average latency
            double avgLatency = callHistory.stream()
                .filter(c -> c.duration != null)
                .mapToLong(c -> c.duration.toMillis())
                .average()
                .orElse(0.0);
            metrics.put("avg_latency_ms", avgLatency);
            
            // Circuit breaker states
            Map<String, String> cbStates = circuitBreakers.entrySet().stream()
                .collect(Collectors.toMap(
                    Map.Entry::getKey,
                    e -> e.getValue().getState().toString()
                ));
            metrics.put("circuit_breakers", cbStates);
            
            return metrics;
        }
    }
    
    // ========================================================================
    // DEMONSTRATION
    // ========================================================================
    
    public static void demonstrateServiceDiscovery() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 1: SERVICE DISCOVERY");
        System.out.println("=".repeat(80));
        
        ServiceRegistry registry = new ServiceRegistry();
        
        // Register multiple instances of services
        registry.register(new ServiceRegistry.ServiceInstance(
            "user-service", "user-1", "192.168.1.10", 8081));
        registry.register(new ServiceRegistry.ServiceInstance(
            "user-service", "user-2", "192.168.1.11", 8081));
        registry.register(new ServiceRegistry.ServiceInstance(
            "order-service", "order-1", "192.168.1.20", 8082));
        
        System.out.println("\nAll services: " + registry.getAllServices());
        
        // Get instances
        System.out.println("\nUser service instances:");
        registry.getInstances("user-service").forEach(System.out::println);
        
        // Load balanced instance selection
        System.out.println("\nLoad balanced selection:");
        for (int i = 0; i < 5; i++) {
            ServiceRegistry.ServiceInstance instance = registry.getInstance("user-service");
            System.out.println("Selected: " + instance.instanceId);
        }
        
        registry.shutdown();
    }
    
    public static void demonstrateAPIGateway() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 2: API GATEWAY");
        System.out.println("=".repeat(80));
        
        ServiceRegistry registry = new ServiceRegistry();
        registry.register(new ServiceRegistry.ServiceInstance(
            "user-service", "user-1", "192.168.1.10", 8081));
        registry.register(new ServiceRegistry.ServiceInstance(
            "order-service", "order-1", "192.168.1.20", 8082));
        
        APIGateway gateway = new APIGateway(registry);
        
        // Configure routes
        gateway.addRoute("/api/users/**", "user-service", true);
        gateway.addRoute("/api/orders/**", "order-service", true);
        gateway.addRoute("/health", "user-service", false);
        
        // Test requests
        System.out.println("\n--- Test Requests ---");
        
        // 1. Authenticated request
        APIGateway.Request req1 = new APIGateway.Request("/api/users/123", "GET", "client-1");
        req1.headers.put("Authorization", "Bearer token123");
        APIGateway.Response resp1 = gateway.handleRequest(req1);
        System.out.println("Response: " + resp1.statusCode + " - " + resp1.body);
        
        // 2. Unauthenticated request
        APIGateway.Request req2 = new APIGateway.Request("/api/orders/456", "GET", "client-2");
        APIGateway.Response resp2 = gateway.handleRequest(req2);
        System.out.println("Response: " + resp2.statusCode + " - " + resp2.body);
        
        // 3. Health check (no auth required)
        APIGateway.Request req3 = new APIGateway.Request("/health", "GET", "client-3");
        APIGateway.Response resp3 = gateway.handleRequest(req3);
        System.out.println("Response: " + resp3.statusCode + " - " + resp3.body);
        
        gateway.shutdown();
        registry.shutdown();
    }
    
    public static void demonstrateCircuitBreaker() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 3: CIRCUIT BREAKER");
        System.out.println("=".repeat(80));
        
        CircuitBreaker cb = new CircuitBreaker("payment-service", 3, 2, Duration.ofSeconds(2));
        
        // Simulate service that fails then recovers
        AtomicInteger callCount = new AtomicInteger(0);
        Supplier<String> operation = () -> {
            int count = callCount.incrementAndGet();
            // Fail first 5 calls, then succeed
            if (count <= 5) {
                throw new RuntimeException("Service error");
            }
            return "Payment processed";
        };
        
        Supplier<String> fallback = () -> "Using cached data";
        
        System.out.println("\n--- Executing operations ---");
        for (int i = 1; i <= 10; i++) {
            System.out.printf("\nCall %d:%n", i);
            String result = cb.execute(operation, fallback);
            System.out.println("Result: " + result);
            System.out.println("Circuit state: " + cb.getState());
            
            if (i == 5) {
                System.out.println("\n--- Waiting for circuit to HALF_OPEN ---");
                Thread.sleep(2500); // Wait for timeout
            }
        }
    }
    
    public static void demonstrateSidecar() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 4: SIDECAR PATTERN");
        System.out.println("=".repeat(80));
        
        ServiceRegistry registry = new ServiceRegistry();
        registry.register(new ServiceRegistry.ServiceInstance(
            "inventory-service", "inv-1", "192.168.1.30", 8083));
        registry.register(new ServiceRegistry.ServiceInstance(
            "payment-service", "pay-1", "192.168.1.40", 8084));
        
        SidecarProxy sidecar = new SidecarProxy("order-service", registry);
        
        System.out.println("\n--- Making inter-service calls ---");
        
        // Make multiple calls
        for (int i = 0; i < 10; i++) {
            try {
                String result = sidecar.call("inventory-service", "GET", "/api/inventory/check");
                System.out.println("Response: " + result);
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
        
        // Display metrics
        System.out.println("\n--- Sidecar Metrics ---");
        Map<String, Object> metrics = sidecar.getMetrics();
        metrics.forEach((key, value) -> 
            System.out.printf("%s: %s%n", key, value));
        
        registry.shutdown();
    }
    
    // ========================================================================
    // MAIN - RUN ALL DEMONSTRATIONS
    // ========================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 32: MICROSERVICES ARCHITECTURE PATTERNS");
        System.out.println("Core Design Patterns for Distributed Systems");
        System.out.println("=".repeat(80));
        
        demonstrateServiceDiscovery();
        
        demonstrateAPIGateway();
        
        demonstrateCircuitBreaker();
        
        demonstrateSidecar();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("ALL PATTERNS DEMONSTRATED SUCCESSFULLY");
        System.out.println("=".repeat(80));
    }
}
