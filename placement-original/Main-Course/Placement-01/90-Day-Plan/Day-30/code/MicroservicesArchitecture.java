/**
 * DAY 30: CLOUD ARCHITECTURE & MICROSERVICES PATTERNS
 * 
 * Complete implementation of microservices architecture patterns including:
 * - Service Discovery & Registration
 * - API Gateway Pattern
 * - Circuit Breaker Pattern
 * - Service Mesh & Load Balancing
 * - Event-Driven Architecture
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.time.*;
import java.util.stream.*;
import java.net.*;

// ============================================================================
// PATTERN 1: SERVICE DISCOVERY & REGISTRATION
// ============================================================================

/**
 * Service Registry - Centralized service discovery
 * 
 * Pattern: Service instances register themselves and can be discovered by others
 * Use Case: Dynamic service location in microservices architecture
 * 
 * Time Complexity: O(1) register, O(1) discover, O(n) health check
 * Space Complexity: O(n) where n = number of services
 */
class ServiceRegistry {
    
    /**
     * Service Instance metadata
     */
    static class ServiceInstance {
        private final String serviceId;
        private final String host;
        private final int port;
        private final Map<String, String> metadata;
        private final Instant registeredAt;
        private Instant lastHeartbeat;
        private HealthStatus status;
        
        public ServiceInstance(String serviceId, String host, int port, Map<String, String> metadata) {
            this.serviceId = serviceId;
            this.host = host;
            this.port = port;
            this.metadata = new HashMap<>(metadata);
            this.registeredAt = Instant.now();
            this.lastHeartbeat = Instant.now();
            this.status = HealthStatus.HEALTHY;
        }
        
        public String getServiceId() { return serviceId; }
        public String getHost() { return host; }
        public int getPort() { return port; }
        public String getUrl() { return "http://" + host + ":" + port; }
        public Map<String, String> getMetadata() { return new HashMap<>(metadata); }
        public Instant getLastHeartbeat() { return lastHeartbeat; }
        public HealthStatus getStatus() { return status; }
        
        public void updateHeartbeat() {
            this.lastHeartbeat = Instant.now();
            this.status = HealthStatus.HEALTHY;
        }
        
        public void markUnhealthy() {
            this.status = HealthStatus.UNHEALTHY;
        }
        
        public boolean isHealthy() {
            return status == HealthStatus.HEALTHY;
        }
        
        public boolean isStale(Duration maxAge) {
            return Duration.between(lastHeartbeat, Instant.now()).compareTo(maxAge) > 0;
        }
        
        @Override
        public String toString() {
            return String.format("ServiceInstance[id=%s, url=%s, status=%s]", 
                serviceId, getUrl(), status);
        }
    }
    
    enum HealthStatus {
        HEALTHY, UNHEALTHY, UNKNOWN
    }
    
    // Registry storage: serviceName -> List of instances
    private final Map<String, List<ServiceInstance>> registry;
    private final Duration heartbeatTimeout;
    private final ScheduledExecutorService healthCheckExecutor;
    private final List<ServiceRegistryListener> listeners;
    
    public ServiceRegistry() {
        this(Duration.ofSeconds(30));
    }
    
    public ServiceRegistry(Duration heartbeatTimeout) {
        this.registry = new ConcurrentHashMap<>();
        this.heartbeatTimeout = heartbeatTimeout;
        this.listeners = new CopyOnWriteArrayList<>();
        this.healthCheckExecutor = Executors.newSingleThreadScheduledExecutor();
        
        // Start periodic health checks
        startHealthChecks();
    }
    
    /**
     * Register a service instance
     */
    public void register(String serviceName, ServiceInstance instance) {
        registry.computeIfAbsent(serviceName, k -> new CopyOnWriteArrayList<>())
                .add(instance);
        
        notifyListeners(new ServiceEvent(ServiceEventType.REGISTERED, serviceName, instance));
        
        System.out.printf("[Registry] Registered: %s at %s%n", serviceName, instance.getUrl());
    }
    
    /**
     * Deregister a service instance
     */
    public void deregister(String serviceName, String serviceId) {
        List<ServiceInstance> instances = registry.get(serviceName);
        if (instances != null) {
            instances.removeIf(instance -> {
                if (instance.getServiceId().equals(serviceId)) {
                    notifyListeners(new ServiceEvent(ServiceEventType.DEREGISTERED, serviceName, instance));
                    System.out.printf("[Registry] Deregistered: %s (id=%s)%n", serviceName, serviceId);
                    return true;
                }
                return false;
            });
        }
    }
    
    /**
     * Update heartbeat for a service instance
     */
    public void heartbeat(String serviceName, String serviceId) {
        List<ServiceInstance> instances = registry.get(serviceName);
        if (instances != null) {
            instances.stream()
                    .filter(instance -> instance.getServiceId().equals(serviceId))
                    .forEach(ServiceInstance::updateHeartbeat);
        }
    }
    
    /**
     * Discover healthy instances of a service
     */
    public List<ServiceInstance> discover(String serviceName) {
        return registry.getOrDefault(serviceName, Collections.emptyList())
                .stream()
                .filter(ServiceInstance::isHealthy)
                .collect(Collectors.toList());
    }
    
    /**
     * Get a single instance using load balancing
     */
    public Optional<ServiceInstance> getInstance(String serviceName, LoadBalancingStrategy strategy) {
        List<ServiceInstance> instances = discover(serviceName);
        if (instances.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(strategy.select(instances));
    }
    
    /**
     * Periodic health check
     */
    private void startHealthChecks() {
        healthCheckExecutor.scheduleAtFixedRate(() -> {
            registry.forEach((serviceName, instances) -> {
                instances.forEach(instance -> {
                    if (instance.isStale(heartbeatTimeout)) {
                        instance.markUnhealthy();
                        notifyListeners(new ServiceEvent(ServiceEventType.UNHEALTHY, serviceName, instance));
                        System.out.printf("[Registry] Marked unhealthy: %s (id=%s)%n", 
                            serviceName, instance.getServiceId());
                    }
                });
            });
        }, 10, 10, TimeUnit.SECONDS);
    }
    
    public void addListener(ServiceRegistryListener listener) {
        listeners.add(listener);
    }
    
    private void notifyListeners(ServiceEvent event) {
        listeners.forEach(listener -> listener.onServiceEvent(event));
    }
    
    public void shutdown() {
        healthCheckExecutor.shutdown();
    }
    
    /**
     * Service Registry Listener
     */
    interface ServiceRegistryListener {
        void onServiceEvent(ServiceEvent event);
    }
    
    static class ServiceEvent {
        final ServiceEventType type;
        final String serviceName;
        final ServiceInstance instance;
        final Instant timestamp;
        
        ServiceEvent(ServiceEventType type, String serviceName, ServiceInstance instance) {
            this.type = type;
            this.serviceName = serviceName;
            this.instance = instance;
            this.timestamp = Instant.now();
        }
    }
    
    enum ServiceEventType {
        REGISTERED, DEREGISTERED, UNHEALTHY, HEALTHY
    }
}

/**
 * Load Balancing Strategies
 */
interface LoadBalancingStrategy {
    ServiceRegistry.ServiceInstance select(List<ServiceRegistry.ServiceInstance> instances);
}

class RoundRobinStrategy implements LoadBalancingStrategy {
    private final Map<String, Integer> counters = new ConcurrentHashMap<>();
    
    @Override
    public ServiceRegistry.ServiceInstance select(List<ServiceRegistry.ServiceInstance> instances) {
        if (instances.isEmpty()) {
            throw new IllegalArgumentException("No instances available");
        }
        
        String key = instances.get(0).getServiceId();
        int index = counters.compute(key, (k, v) -> v == null ? 0 : (v + 1) % instances.size());
        return instances.get(index);
    }
}

class RandomStrategy implements LoadBalancingStrategy {
    private final Random random = new Random();
    
    @Override
    public ServiceRegistry.ServiceInstance select(List<ServiceRegistry.ServiceInstance> instances) {
        return instances.get(random.nextInt(instances.size()));
    }
}

class LeastConnectionsStrategy implements LoadBalancingStrategy {
    private final Map<String, Integer> connections = new ConcurrentHashMap<>();
    
    @Override
    public ServiceRegistry.ServiceInstance select(List<ServiceRegistry.ServiceInstance> instances) {
        return instances.stream()
                .min(Comparator.comparingInt(instance -> 
                    connections.getOrDefault(instance.getServiceId(), 0)))
                .orElseThrow();
    }
    
    public void incrementConnections(String serviceId) {
        connections.merge(serviceId, 1, Integer::sum);
    }
    
    public void decrementConnections(String serviceId) {
        connections.computeIfPresent(serviceId, (k, v) -> Math.max(0, v - 1));
    }
}

// ============================================================================
// PATTERN 2: API GATEWAY
// ============================================================================

/**
 * API Gateway - Single entry point for all client requests
 * 
 * Pattern: Route, compose, and transform requests to microservices
 * Features:
 * - Request routing
 * - Request/Response transformation
 * - Authentication & Authorization
 * - Rate limiting
 * - Caching
 * - Request aggregation
 * 
 * Time Complexity: O(1) routing, O(n) aggregation where n = number of services
 * Space Complexity: O(m) where m = number of routes
 */
class ApiGateway {
    
    /**
     * Route definition
     */
    static class Route {
        private final String path;
        private final String method;
        private final String targetService;
        private final String targetPath;
        private final boolean requiresAuth;
        private final List<RouteFilter> filters;
        
        Route(String path, String method, String targetService, String targetPath, boolean requiresAuth) {
            this.path = path;
            this.method = method;
            this.targetService = targetService;
            this.targetPath = targetPath;
            this.requiresAuth = requiresAuth;
            this.filters = new ArrayList<>();
        }
        
        public String getPath() { return path; }
        public String getMethod() { return method; }
        public String getTargetService() { return targetService; }
        public String getTargetPath() { return targetPath; }
        public boolean requiresAuth() { return requiresAuth; }
        
        public void addFilter(RouteFilter filter) {
            filters.add(filter);
        }
        
        public List<RouteFilter> getFilters() {
            return new ArrayList<>(filters);
        }
        
        public boolean matches(String path, String method) {
            return this.path.equals(path) && this.method.equalsIgnoreCase(method);
        }
    }
    
    /**
     * HTTP Request
     */
    static class HttpRequest {
        private final String path;
        private final String method;
        private final Map<String, String> headers;
        private final Map<String, String> queryParams;
        private final String body;
        
        HttpRequest(String path, String method, Map<String, String> headers, 
                   Map<String, String> queryParams, String body) {
            this.path = path;
            this.method = method;
            this.headers = new HashMap<>(headers);
            this.queryParams = new HashMap<>(queryParams);
            this.body = body;
        }
        
        public String getPath() { return path; }
        public String getMethod() { return method; }
        public Map<String, String> getHeaders() { return new HashMap<>(headers); }
        public Map<String, String> getQueryParams() { return new HashMap<>(queryParams); }
        public String getBody() { return body; }
        public String getHeader(String name) { return headers.get(name); }
    }
    
    /**
     * HTTP Response
     */
    static class HttpResponse {
        private final int statusCode;
        private final Map<String, String> headers;
        private final String body;
        
        HttpResponse(int statusCode, Map<String, String> headers, String body) {
            this.statusCode = statusCode;
            this.headers = new HashMap<>(headers);
            this.body = body;
        }
        
        public int getStatusCode() { return statusCode; }
        public Map<String, String> getHeaders() { return new HashMap<>(headers); }
        public String getBody() { return body; }
        
        public static HttpResponse ok(String body) {
            return new HttpResponse(200, Collections.emptyMap(), body);
        }
        
        public static HttpResponse error(int code, String message) {
            return new HttpResponse(code, Collections.emptyMap(), message);
        }
    }
    
    /**
     * Route Filter for request/response transformation
     */
    interface RouteFilter {
        HttpRequest filterRequest(HttpRequest request);
        HttpResponse filterResponse(HttpResponse response);
    }
    
    /**
     * Authentication Filter
     */
    static class AuthenticationFilter implements RouteFilter {
        private final Set<String> validTokens;
        
        AuthenticationFilter() {
            this.validTokens = ConcurrentHashMap.newKeySet();
            // Add some demo tokens
            validTokens.add("valid-token-123");
        }
        
        @Override
        public HttpRequest filterRequest(HttpRequest request) {
            String token = request.getHeader("Authorization");
            if (token == null || !validTokens.contains(token.replace("Bearer ", ""))) {
                throw new UnauthorizedException("Invalid or missing authentication token");
            }
            return request;
        }
        
        @Override
        public HttpResponse filterResponse(HttpResponse response) {
            return response; // No transformation needed
        }
    }
    
    static class UnauthorizedException extends RuntimeException {
        UnauthorizedException(String message) {
            super(message);
        }
    }
    
    /**
     * Rate Limiting Filter
     */
    static class RateLimitFilter implements RouteFilter {
        private final Map<String, TokenBucket> buckets = new ConcurrentHashMap<>();
        private final int capacity;
        private final int tokensPerSecond;
        
        RateLimitFilter(int capacity, int tokensPerSecond) {
            this.capacity = capacity;
            this.tokensPerSecond = tokensPerSecond;
        }
        
        @Override
        public HttpRequest filterRequest(HttpRequest request) {
            String clientId = request.getHeader("X-Client-Id");
            if (clientId == null) clientId = "anonymous";
            
            TokenBucket bucket = buckets.computeIfAbsent(clientId, 
                k -> new TokenBucket(capacity, tokensPerSecond));
            
            if (!bucket.tryConsume()) {
                throw new RateLimitExceededException("Rate limit exceeded");
            }
            
            return request;
        }
        
        @Override
        public HttpResponse filterResponse(HttpResponse response) {
            return response;
        }
    }
    
    static class RateLimitExceededException extends RuntimeException {
        RateLimitExceededException(String message) {
            super(message);
        }
    }
    
    /**
     * Token Bucket for rate limiting
     */
    static class TokenBucket {
        private final int capacity;
        private final double tokensPerSecond;
        private double tokens;
        private Instant lastRefill;
        
        TokenBucket(int capacity, double tokensPerSecond) {
            this.capacity = capacity;
            this.tokensPerSecond = tokensPerSecond;
            this.tokens = capacity;
            this.lastRefill = Instant.now();
        }
        
        synchronized boolean tryConsume() {
            refill();
            if (tokens >= 1) {
                tokens -= 1;
                return true;
            }
            return false;
        }
        
        private void refill() {
            Instant now = Instant.now();
            double elapsed = Duration.between(lastRefill, now).toMillis() / 1000.0;
            tokens = Math.min(capacity, tokens + (elapsed * tokensPerSecond));
            lastRefill = now;
        }
    }
    
    // Gateway components
    private final List<Route> routes;
    private final ServiceRegistry serviceRegistry;
    private final LoadBalancingStrategy loadBalancer;
    private final Map<String, HttpResponse> cache;
    
    public ApiGateway(ServiceRegistry serviceRegistry, LoadBalancingStrategy loadBalancer) {
        this.routes = new CopyOnWriteArrayList<>();
        this.serviceRegistry = serviceRegistry;
        this.loadBalancer = loadBalancer;
        this.cache = new ConcurrentHashMap<>();
    }
    
    /**
     * Register a route
     */
    public void registerRoute(Route route) {
        routes.add(route);
        System.out.printf("[Gateway] Registered route: %s %s -> %s%s%n", 
            route.getMethod(), route.getPath(), route.getTargetService(), route.getTargetPath());
    }
    
    /**
     * Handle incoming request
     */
    public CompletableFuture<HttpResponse> handleRequest(HttpRequest request) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                // Find matching route
                Route route = findRoute(request.getPath(), request.getMethod())
                        .orElseThrow(() -> new RuntimeException("No route found for: " + 
                            request.getMethod() + " " + request.getPath()));
                
                // Apply request filters
                HttpRequest filteredRequest = request;
                for (RouteFilter filter : route.getFilters()) {
                    filteredRequest = filter.filterRequest(filteredRequest);
                }
                
                // Check cache
                String cacheKey = getCacheKey(request);
                if (cache.containsKey(cacheKey)) {
                    System.out.println("[Gateway] Cache hit for: " + cacheKey);
                    return cache.get(cacheKey);
                }
                
                // Discover service instance
                ServiceRegistry.ServiceInstance instance = serviceRegistry
                        .getInstance(route.getTargetService(), loadBalancer)
                        .orElseThrow(() -> new RuntimeException("No healthy instance found for: " + 
                            route.getTargetService()));
                
                // Forward request to service
                HttpResponse response = forwardRequest(instance, route.getTargetPath(), filteredRequest);
                
                // Apply response filters
                for (RouteFilter filter : route.getFilters()) {
                    response = filter.filterResponse(response);
                }
                
                // Cache response
                if (request.getMethod().equalsIgnoreCase("GET")) {
                    cache.put(cacheKey, response);
                }
                
                return response;
                
            } catch (UnauthorizedException e) {
                return HttpResponse.error(401, e.getMessage());
            } catch (RateLimitExceededException e) {
                return HttpResponse.error(429, e.getMessage());
            } catch (Exception e) {
                return HttpResponse.error(500, "Internal server error: " + e.getMessage());
            }
        });
    }
    
    /**
     * Request aggregation - combine multiple service calls
     */
    public CompletableFuture<HttpResponse> aggregate(List<HttpRequest> requests) {
        List<CompletableFuture<HttpResponse>> futures = requests.stream()
                .map(this::handleRequest)
                .collect(Collectors.toList());
        
        return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                .thenApply(v -> {
                    String aggregatedBody = futures.stream()
                            .map(CompletableFuture::join)
                            .map(HttpResponse::getBody)
                            .collect(Collectors.joining(",", "[", "]"));
                    return HttpResponse.ok(aggregatedBody);
                });
    }
    
    private Optional<Route> findRoute(String path, String method) {
        return routes.stream()
                .filter(route -> route.matches(path, method))
                .findFirst();
    }
    
    private String getCacheKey(HttpRequest request) {
        return request.getMethod() + ":" + request.getPath() + ":" + 
               request.getQueryParams().toString();
    }
    
    private HttpResponse forwardRequest(ServiceRegistry.ServiceInstance instance, 
                                       String targetPath, HttpRequest request) {
        // Simulate HTTP call to microservice
        System.out.printf("[Gateway] Forwarding %s %s to %s%s%n", 
            request.getMethod(), request.getPath(), instance.getUrl(), targetPath);
        
        // Simulate response
        return HttpResponse.ok("{\"service\":\"" + instance.getServiceId() + 
                              "\",\"data\":\"response data\"}");
    }
}

// ============================================================================
// PATTERN 3: CIRCUIT BREAKER
// ============================================================================

/**
 * Circuit Breaker - Prevent cascading failures
 * 
 * Pattern: Monitor failures and open circuit to prevent further calls
 * States: CLOSED (normal) -> OPEN (failing) -> HALF_OPEN (testing)
 * 
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(1)
 */
class CircuitBreaker {
    
    enum State {
        CLOSED,    // Normal operation, requests pass through
        OPEN,      // Failing, requests rejected immediately
        HALF_OPEN  // Testing if service recovered
    }
    
    /**
     * Circuit Breaker Configuration
     */
    static class Config {
        final int failureThreshold;      // Number of failures before opening
        final int successThreshold;      // Number of successes to close from half-open
        final Duration timeout;          // Time before trying again (OPEN -> HALF_OPEN)
        final Duration resetTimeout;     // Time window for failure counting
        
        Config(int failureThreshold, int successThreshold, Duration timeout, Duration resetTimeout) {
            this.failureThreshold = failureThreshold;
            this.successThreshold = successThreshold;
            this.timeout = timeout;
            this.resetTimeout = resetTimeout;
        }
        
        static Config defaultConfig() {
            return new Config(5, 2, Duration.ofSeconds(60), Duration.ofSeconds(30));
        }
    }
    
    private final String name;
    private final Config config;
    private volatile State state;
    private int failureCount;
    private int successCount;
    private Instant lastFailureTime;
    private Instant stateChangedAt;
    private final List<CircuitBreakerListener> listeners;
    
    public CircuitBreaker(String name) {
        this(name, Config.defaultConfig());
    }
    
    public CircuitBreaker(String name, Config config) {
        this.name = name;
        this.config = config;
        this.state = State.CLOSED;
        this.failureCount = 0;
        this.successCount = 0;
        this.stateChangedAt = Instant.now();
        this.listeners = new CopyOnWriteArrayList<>();
    }
    
    /**
     * Execute operation with circuit breaker protection
     */
    public <T> CompletableFuture<T> execute(Supplier<CompletableFuture<T>> operation) {
        if (!canExecute()) {
            return CompletableFuture.failedFuture(
                new CircuitBreakerOpenException("Circuit breaker is OPEN for: " + name));
        }
        
        return operation.get()
                .thenApply(result -> {
                    onSuccess();
                    return result;
                })
                .exceptionally(error -> {
                    onFailure();
                    throw new RuntimeException(error);
                });
    }
    
    /**
     * Check if circuit allows execution
     */
    private synchronized boolean canExecute() {
        switch (state) {
            case CLOSED:
                return true;
                
            case OPEN:
                // Check if timeout has passed
                if (Duration.between(stateChangedAt, Instant.now()).compareTo(config.timeout) > 0) {
                    transitionTo(State.HALF_OPEN);
                    return true;
                }
                return false;
                
            case HALF_OPEN:
                return true;
                
            default:
                return false;
        }
    }
    
    /**
     * Record successful execution
     */
    private synchronized void onSuccess() {
        switch (state) {
            case HALF_OPEN:
                successCount++;
                if (successCount >= config.successThreshold) {
                    transitionTo(State.CLOSED);
                }
                break;
                
            case CLOSED:
                reset();
                break;
        }
    }
    
    /**
     * Record failed execution
     */
    private synchronized void onFailure() {
        lastFailureTime = Instant.now();
        
        switch (state) {
            case CLOSED:
                failureCount++;
                if (failureCount >= config.failureThreshold) {
                    transitionTo(State.OPEN);
                }
                break;
                
            case HALF_OPEN:
                transitionTo(State.OPEN);
                break;
        }
    }
    
    /**
     * Transition to new state
     */
    private void transitionTo(State newState) {
        State oldState = this.state;
        this.state = newState;
        this.stateChangedAt = Instant.now();
        
        if (newState == State.CLOSED) {
            reset();
        } else if (newState == State.HALF_OPEN) {
            successCount = 0;
        }
        
        System.out.printf("[CircuitBreaker:%s] %s -> %s%n", name, oldState, newState);
        notifyListeners(oldState, newState);
    }
    
    /**
     * Reset counters
     */
    private void reset() {
        failureCount = 0;
        successCount = 0;
    }
    
    public State getState() {
        return state;
    }
    
    public void addListener(CircuitBreakerListener listener) {
        listeners.add(listener);
    }
    
    private void notifyListeners(State from, State to) {
        listeners.forEach(listener -> listener.onStateChange(name, from, to));
    }
    
    /**
     * Circuit Breaker Listener
     */
    interface CircuitBreakerListener {
        void onStateChange(String circuitBreakerName, State from, State to);
    }
    
    static class CircuitBreakerOpenException extends RuntimeException {
        CircuitBreakerOpenException(String message) {
            super(message);
        }
    }
}

// ============================================================================
// DEMONSTRATION
// ============================================================================

public class MicroservicesArchitecture {
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("MICROSERVICES ARCHITECTURE PATTERNS DEMONSTRATION");
        System.out.println("=".repeat(80));
        
        // Demo 1: Service Discovery
        demonstrateServiceDiscovery();
        
        Thread.sleep(2000);
        
        // Demo 2: API Gateway
        demonstrateApiGateway();
        
        Thread.sleep(2000);
        
        // Demo 3: Circuit Breaker
        demonstrateCircuitBreaker();
    }
    
    private static void demonstrateServiceDiscovery() {
        System.out.println("\n--- DEMO 1: SERVICE DISCOVERY & REGISTRATION ---\n");
        
        ServiceRegistry registry = new ServiceRegistry(Duration.ofSeconds(5));
        
        // Register listener
        registry.addListener(event -> {
            System.out.printf("[Listener] Event: %s for %s%n", 
                event.type, event.serviceName);
        });
        
        // Register service instances
        ServiceRegistry.ServiceInstance userService1 = new ServiceRegistry.ServiceInstance(
            "user-service-1", "192.168.1.10", 8080, 
            Map.of("version", "1.0", "region", "us-east")
        );
        
        ServiceRegistry.ServiceInstance userService2 = new ServiceRegistry.ServiceInstance(
            "user-service-2", "192.168.1.11", 8080,
            Map.of("version", "1.0", "region", "us-west")
        );
        
        registry.register("user-service", userService1);
        registry.register("user-service", userService2);
        
        // Discover services
        System.out.println("\nDiscovering user-service instances:");
        List<ServiceRegistry.ServiceInstance> instances = registry.discover("user-service");
        instances.forEach(instance -> System.out.println("  - " + instance));
        
        // Load balancing
        System.out.println("\nLoad balancing with Round Robin:");
        LoadBalancingStrategy roundRobin = new RoundRobinStrategy();
        for (int i = 0; i < 5; i++) {
            ServiceRegistry.ServiceInstance instance = registry.getInstance("user-service", roundRobin)
                    .orElseThrow();
            System.out.printf("Request %d routed to: %s%n", i + 1, instance.getUrl());
        }
        
        registry.shutdown();
    }
    
    private static void demonstrateApiGateway() {
        System.out.println("\n--- DEMO 2: API GATEWAY ---\n");
        
        // Setup registry and gateway
        ServiceRegistry registry = new ServiceRegistry();
        ApiGateway gateway = new ApiGateway(registry, new RoundRobinStrategy());
        
        // Register services
        registry.register("user-service", new ServiceRegistry.ServiceInstance(
            "user-1", "localhost", 8081, Collections.emptyMap()
        ));
        registry.register("order-service", new ServiceRegistry.ServiceInstance(
            "order-1", "localhost", 8082, Collections.emptyMap()
        ));
        
        // Configure routes
        ApiGateway.Route userRoute = new ApiGateway.Route(
            "/api/users", "GET", "user-service", "/users", true
        );
        userRoute.addFilter(new ApiGateway.AuthenticationFilter());
        userRoute.addFilter(new ApiGateway.RateLimitFilter(10, 5));
        
        ApiGateway.Route orderRoute = new ApiGateway.Route(
            "/api/orders", "GET", "order-service", "/orders", false
        );
        
        gateway.registerRoute(userRoute);
        gateway.registerRoute(orderRoute);
        
        // Test requests
        System.out.println("\nTesting API Gateway:");
        
        // Valid authenticated request
        ApiGateway.HttpRequest request1 = new ApiGateway.HttpRequest(
            "/api/users", "GET",
            Map.of("Authorization", "Bearer valid-token-123", "X-Client-Id", "client-1"),
            Collections.emptyMap(), null
        );
        
        ApiGateway.HttpResponse response1 = gateway.handleRequest(request1).join();
        System.out.printf("Response 1: %d - %s%n", response1.getStatusCode(), response1.getBody());
        
        // Unauthenticated request
        ApiGateway.HttpRequest request2 = new ApiGateway.HttpRequest(
            "/api/users", "GET",
            Collections.emptyMap(),
            Collections.emptyMap(), null
        );
        
        ApiGateway.HttpResponse response2 = gateway.handleRequest(request2).join();
        System.out.printf("Response 2: %d - %s%n", response2.getStatusCode(), response2.getBody());
        
        registry.shutdown();
    }
    
    private static void demonstrateCircuitBreaker() {
        System.out.println("\n--- DEMO 3: CIRCUIT BREAKER ---\n");
        
        CircuitBreaker breaker = new CircuitBreaker("payment-service", 
            new CircuitBreaker.Config(3, 2, Duration.ofSeconds(5), Duration.ofSeconds(10))
        );
        
        // Add listener
        breaker.addListener((name, from, to) -> {
            System.out.printf("[Listener] Circuit breaker '%s': %s -> %s%n", name, from, to);
        });
        
        // Simulate service calls
        System.out.println("Simulating service calls:");
        
        for (int i = 1; i <= 10; i++) {
            final int callNumber = i;
            
            CompletableFuture<String> future = breaker.execute(() -> {
                // Simulate failures for first 5 calls
                if (callNumber <= 5) {
                    return CompletableFuture.failedFuture(
                        new RuntimeException("Service unavailable")
                    );
                } else {
                    return CompletableFuture.completedFuture("Success");
                }
            });
            
            try {
                String result = future.join();
                System.out.printf("Call %d: %s (State: %s)%n", callNumber, result, breaker.getState());
            } catch (Exception e) {
                System.out.printf("Call %d: FAILED - %s (State: %s)%n", 
                    callNumber, e.getCause().getMessage(), breaker.getState());
            }
            
            // Wait a bit between calls
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.printf("\nFinal circuit breaker state: %s%n", breaker.getState());
    }
}
