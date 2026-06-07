/**
 * DAY 30: COMPREHENSIVE PRACTICE PROBLEMS
 * Cloud Architecture & Microservices
 * 
 * 75+ Practice Problems organized by difficulty and topic
 * 
 * Topics Covered:
 * 1. Service Discovery & Registration (10 problems)
 * 2. API Gateway & Routing (10 problems)
 * 3. Circuit Breaker & Resilience (10 problems)
 * 4. Event-Driven Architecture (10 problems)
 * 5. Event Sourcing & CQRS (10 problems)
 * 6. Saga Pattern (10 problems)
 * 7. Container Orchestration (10 problems)
 * 8. Deployment Strategies (15+ problems)
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

public class Day30ComprehensivePractice {
    
    // ========================================================================
    // SECTION 1: SERVICE DISCOVERY & REGISTRATION
    // ========================================================================
    
    /**
     * Problem 1: Basic Service Registry ⭐
     * Implement a service registry that stores service instances by name
     * 
     * Requirements:
     * - register(serviceName, host, port)
     * - discover(serviceName) -> List<ServiceInstance>
     * - deregister(serviceName, instanceId)
     * 
     * Time Complexity: O(1) for all operations
     */
    static class Problem1_ServiceRegistry {
        // TODO: Implement service registry
        
        public void test() {
            System.out.println("Problem 1: Service Registry");
            // TODO: Add test cases
        }
    }
    
    /**
     * Problem 2: Health Check System ⭐⭐
     * Implement health checking for registered services
     * 
     * Requirements:
     * - Periodic health checks (heartbeat)
     * - Mark unhealthy services after timeout
     * - Auto-deregister after N failed checks
     * 
     * Complexity: O(n) for health check sweep
     */
    static class Problem2_HealthCheckSystem {
        // TODO: Implement health check system
        
        public void test() {
            System.out.println("Problem 2: Health Check System");
            // TODO: Add test cases
        }
    }
    
    /**
     * Problem 3: Load Balancer - Round Robin ⭐
     * Implement round-robin load balancing
     */
    static class Problem3_RoundRobinLoadBalancer {
        private int currentIndex = 0;
        
        public String selectInstance(List<String> instances) {
            if (instances.isEmpty()) return null;
            String selected = instances.get(currentIndex);
            currentIndex = (currentIndex + 1) % instances.size();
            return selected;
        }
        
        public void test() {
            System.out.println("Problem 3: Round Robin Load Balancer");
            
            List<String> instances = List.of("server1", "server2", "server3");
            
            for (int i = 0; i < 7; i++) {
                String selected = selectInstance(instances);
                System.out.printf("Request %d -> %s%n", i + 1, selected);
            }
            // Expected: server1, server2, server3, server1, server2, server3, server1
        }
    }
    
    // TODO: Problems 4-10
    // Problem 4: Weighted Load Balancing ⭐⭐
    // Problem 5: Least Connections Load Balancing ⭐⭐
    // Problem 6: Consistent Hashing ⭐⭐⭐
    // Problem 7: Service Discovery with Caching ⭐⭐
    // Problem 8: Multi-Datacenter Service Discovery ⭐⭐⭐
    // Problem 9: DNS-based Service Discovery ⭐⭐
    // Problem 10: Service Mesh Sidecar ⭐⭐⭐
    
    // ========================================================================
    // SECTION 2: API GATEWAY & ROUTING
    // ========================================================================
    
    /**
     * Problem 11: Request Router ⭐
     * Route requests to appropriate microservice
     */
    static class Problem11_RequestRouter {
        private Map<String, String> routes = new HashMap<>();
        
        public void addRoute(String path, String service) {
            routes.put(path, service);
        }
        
        public String route(String path) {
            return routes.get(path);
        }
        
        public void test() {
            System.out.println("Problem 11: Request Router");
            
            addRoute("/users", "user-service");
            addRoute("/orders", "order-service");
            addRoute("/products", "product-service");
            
            System.out.println("/users -> " + route("/users"));
            System.out.println("/orders -> " + route("/orders"));
            System.out.println("/products -> " + route("/products"));
        }
    }
    
    /**
     * Problem 12: Rate Limiter (Token Bucket) ⭐⭐
     * Implement rate limiting using token bucket algorithm
     */
    static class Problem12_TokenBucketRateLimiter {
        private int capacity;
        private double tokens;
        private double refillRate; // tokens per second
        private Instant lastRefill;
        
        public Problem12_TokenBucketRateLimiter(int capacity, double refillRate) {
            this.capacity = capacity;
            this.tokens = capacity;
            this.refillRate = refillRate;
            this.lastRefill = Instant.now();
        }
        
        public synchronized boolean allowRequest() {
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
            tokens = Math.min(capacity, tokens + (elapsed * refillRate));
            lastRefill = now;
        }
        
        public void test() throws InterruptedException {
            System.out.println("Problem 12: Token Bucket Rate Limiter");
            
            // 5 tokens capacity, 2 tokens/second
            Problem12_TokenBucketRateLimiter limiter = 
                new Problem12_TokenBucketRateLimiter(5, 2.0);
            
            // Burst of 7 requests
            for (int i = 1; i <= 7; i++) {
                boolean allowed = limiter.allowRequest();
                System.out.printf("Request %d: %s%n", i, allowed ? "ALLOWED" : "BLOCKED");
            }
            
            // Wait and try again
            Thread.sleep(1000);
            System.out.println("\nAfter 1 second:");
            for (int i = 1; i <= 3; i++) {
                boolean allowed = limiter.allowRequest();
                System.out.printf("Request %d: %s%n", i, allowed ? "ALLOWED" : "BLOCKED");
            }
        }
    }
    
    // TODO: Problems 13-20
    // Problem 13: Request/Response Transformation ⭐⭐
    // Problem 14: API Versioning ⭐⭐
    // Problem 15: Request Aggregation ⭐⭐⭐
    // Problem 16: Response Caching ⭐⭐
    // Problem 17: Request Deduplication ⭐⭐
    // Problem 18: Circuit Breaker Integration ⭐⭐⭐
    // Problem 19: Distributed Tracing ⭐⭐⭐
    // Problem 20: API Gateway Authentication ⭐⭐
    
    // ========================================================================
    // SECTION 3: CIRCUIT BREAKER & RESILIENCE
    // ========================================================================
    
    /**
     * Problem 21: Simple Circuit Breaker ⭐⭐
     * Implement basic circuit breaker pattern
     */
    static class Problem21_SimpleCircuitBreaker {
        enum State { CLOSED, OPEN, HALF_OPEN }
        
        private State state = State.CLOSED;
        private int failureCount = 0;
        private final int failureThreshold = 3;
        private Instant openedAt;
        private final Duration timeout = Duration.ofSeconds(5);
        
        public <T> T execute(Supplier<T> operation) {
            if (state == State.OPEN) {
                if (Duration.between(openedAt, Instant.now()).compareTo(timeout) > 0) {
                    state = State.HALF_OPEN;
                    System.out.println("Circuit: OPEN -> HALF_OPEN");
                } else {
                    throw new RuntimeException("Circuit is OPEN");
                }
            }
            
            try {
                T result = operation.get();
                onSuccess();
                return result;
            } catch (Exception e) {
                onFailure();
                throw e;
            }
        }
        
        private void onSuccess() {
            if (state == State.HALF_OPEN) {
                state = State.CLOSED;
                System.out.println("Circuit: HALF_OPEN -> CLOSED");
            }
            failureCount = 0;
        }
        
        private void onFailure() {
            failureCount++;
            if (failureCount >= failureThreshold) {
                state = State.OPEN;
                openedAt = Instant.now();
                System.out.println("Circuit: CLOSED -> OPEN");
            }
        }
        
        public void test() throws InterruptedException {
            System.out.println("Problem 21: Simple Circuit Breaker");
            
            Problem21_SimpleCircuitBreaker breaker = new Problem21_SimpleCircuitBreaker();
            
            // Simulate failures
            for (int i = 1; i <= 5; i++) {
                try {
                    breaker.execute(() -> {
                        throw new RuntimeException("Service unavailable");
                    });
                } catch (Exception e) {
                    System.out.printf("Call %d failed: %s%n", i, e.getMessage());
                }
            }
            
            // Wait for timeout
            Thread.sleep(6000);
            
            // Try again
            try {
                String result = breaker.execute(() -> "Success!");
                System.out.println("Call succeeded: " + result);
            } catch (Exception e) {
                System.out.println("Call failed: " + e.getMessage());
            }
        }
    }
    
    // TODO: Problems 22-30
    // Problem 22: Retry with Exponential Backoff ⭐⭐
    // Problem 23: Bulkhead Pattern ⭐⭐⭐
    // Problem 24: Timeout Pattern ⭐
    // Problem 25: Fallback Pattern ⭐⭐
    // Problem 26: Cache Aside Pattern ⭐⭐
    // Problem 27: Request Hedging ⭐⭐⭐
    // Problem 28: Adaptive Circuit Breaker ⭐⭐⭐
    // Problem 29: Health Check Endpoint ⭐
    // Problem 30: Graceful Degradation ⭐⭐
    
    // ========================================================================
    // SECTION 4: EVENT-DRIVEN ARCHITECTURE
    // ========================================================================
    
    /**
     * Problem 31: Simple Event Bus ⭐
     * Implement publish-subscribe event bus
     */
    static class Problem31_SimpleEventBus {
        private Map<String, List<Consumer<Object>>> subscribers = new ConcurrentHashMap<>();
        
        public void subscribe(String topic, Consumer<Object> handler) {
            subscribers.computeIfAbsent(topic, k -> new CopyOnWriteArrayList<>())
                    .add(handler);
        }
        
        public void publish(String topic, Object event) {
            List<Consumer<Object>> handlers = subscribers.get(topic);
            if (handlers != null) {
                handlers.forEach(handler -> handler.accept(event));
            }
        }
        
        public void test() {
            System.out.println("Problem 31: Simple Event Bus");
            
            Problem31_SimpleEventBus bus = new Problem31_SimpleEventBus();
            
            // Subscribe to user events
            bus.subscribe("user.created", event -> 
                System.out.println("Email service: Sending welcome email for " + event));
            
            bus.subscribe("user.created", event ->
                System.out.println("Analytics: Tracking user creation for " + event));
            
            // Publish event
            bus.publish("user.created", "john@example.com");
        }
    }
    
    // TODO: Problems 32-40
    // Problem 32: Event with Metadata ⭐
    // Problem 33: Event Filtering ⭐⭐
    // Problem 34: Event Ordering ⭐⭐⭐
    // Problem 35: Dead Letter Queue ⭐⭐
    // Problem 36: Event Replay ⭐⭐⭐
    // Problem 37: Event Batching ⭐⭐
    // Problem 38: Exactly-Once Delivery ⭐⭐⭐
    // Problem 39: Event Schema Evolution ⭐⭐⭐
    // Problem 40: Competing Consumers ⭐⭐
    
    // ========================================================================
    // SECTION 5: EVENT SOURCING & CQRS
    // ========================================================================
    
    /**
     * Problem 41: Event Store ⭐⭐
     * Store events and rebuild state
     */
    static class Problem41_EventStore {
        static class Event {
            String type;
            Map<String, Object> data;
            Instant timestamp;
            
            Event(String type, Map<String, Object> data) {
                this.type = type;
                this.data = data;
                this.timestamp = Instant.now();
            }
        }
        
        private List<Event> events = new ArrayList<>();
        
        public void appendEvent(String type, Map<String, Object> data) {
            events.add(new Event(type, data));
            System.out.printf("Event appended: %s%n", type);
        }
        
        public List<Event> getEvents() {
            return new ArrayList<>(events);
        }
        
        public void test() {
            System.out.println("Problem 41: Event Store");
            
            Problem41_EventStore store = new Problem41_EventStore();
            
            store.appendEvent("AccountCreated", Map.of("accountId", "123", "balance", 1000));
            store.appendEvent("MoneyDeposited", Map.of("accountId", "123", "amount", 500));
            store.appendEvent("MoneyWithdrawn", Map.of("accountId", "123", "amount", 200));
            
            // Rebuild state
            double balance = 0;
            for (Event event : store.getEvents()) {
                switch (event.type) {
                    case "AccountCreated":
                        balance = ((Number) event.data.get("balance")).doubleValue();
                        break;
                    case "MoneyDeposited":
                        balance += ((Number) event.data.get("amount")).doubleValue();
                        break;
                    case "MoneyWithdrawn":
                        balance -= ((Number) event.data.get("amount")).doubleValue();
                        break;
                }
            }
            
            System.out.printf("Rebuilt balance: $%.2f%n", balance);
        }
    }
    
    // TODO: Problems 42-50
    // Problem 42: Snapshot Pattern ⭐⭐⭐
    // Problem 43: CQRS Read Model ⭐⭐
    // Problem 44: CQRS Write Model ⭐⭐
    // Problem 45: Command Handler ⭐⭐
    // Problem 46: Query Handler ⭐⭐
    // Problem 47: Projection Building ⭐⭐⭐
    // Problem 48: Event Versioning ⭐⭐⭐
    // Problem 49: Temporal Queries ⭐⭐⭐
    // Problem 50: Event Migration ⭐⭐⭐
    
    // ========================================================================
    // SECTION 6: SAGA PATTERN
    // ========================================================================
    
    /**
     * Problem 51: Saga Orchestrator ⭐⭐⭐
     * Implement saga pattern for distributed transactions
     */
    static class Problem51_SagaOrchestrator {
        static class SagaStep {
            String name;
            Runnable action;
            Runnable compensation;
            
            SagaStep(String name, Runnable action, Runnable compensation) {
                this.name = name;
                this.action = action;
                this.compensation = compensation;
            }
        }
        
        private List<SagaStep> steps = new ArrayList<>();
        private List<SagaStep> executedSteps = new ArrayList<>();
        
        public void addStep(SagaStep step) {
            steps.add(step);
        }
        
        public void execute() {
            try {
                for (SagaStep step : steps) {
                    System.out.println("Executing: " + step.name);
                    step.action.run();
                    executedSteps.add(step);
                }
                System.out.println("Saga completed successfully");
            } catch (Exception e) {
                System.err.println("Saga failed: " + e.getMessage());
                compensate();
            }
        }
        
        private void compensate() {
            System.out.println("Compensating executed steps...");
            Collections.reverse(executedSteps);
            for (SagaStep step : executedSteps) {
                System.out.println("Compensating: " + step.name);
                step.compensation.run();
            }
        }
        
        public void test() {
            System.out.println("Problem 51: Saga Orchestrator");
            
            Problem51_SagaOrchestrator saga = new Problem51_SagaOrchestrator();
            
            saga.addStep(new SagaStep(
                "Reserve Inventory",
                () -> System.out.println("  → Inventory reserved"),
                () -> System.out.println("  ← Inventory released")
            ));
            
            saga.addStep(new SagaStep(
                "Process Payment",
                () -> {
                    System.out.println("  → Processing payment");
                    throw new RuntimeException("Payment failed");
                },
                () -> System.out.println("  ← Payment refunded")
            ));
            
            saga.addStep(new SagaStep(
                "Ship Order",
                () -> System.out.println("  → Order shipped"),
                () -> System.out.println("  ← Shipment cancelled")
            ));
            
            saga.execute();
        }
    }
    
    // TODO: Problems 52-60
    // Problem 52: Saga Choreography ⭐⭐⭐
    // Problem 53: Saga State Machine ⭐⭐⭐
    // Problem 54: Saga Timeout Handling ⭐⭐
    // Problem 55: Saga Compensation Logging ⭐⭐
    // Problem 56: Parallel Saga Steps ⭐⭐⭐
    // Problem 57: Conditional Saga Steps ⭐⭐
    // Problem 58: Saga Retry Logic ⭐⭐
    // Problem 59: Idempotent Saga Steps ⭐⭐⭐
    // Problem 60: Saga Monitoring ⭐⭐
    
    // ========================================================================
    // SECTION 7: CONTAINER ORCHESTRATION
    // ========================================================================
    
    /**
     * Problem 61: Container Scheduler ⭐⭐
     * Schedule containers on nodes based on resources
     */
    static class Problem61_ContainerScheduler {
        static class Node {
            String name;
            int availableMemory;
            double availableCpu;
            
            Node(String name, int memory, double cpu) {
                this.name = name;
                this.availableMemory = memory;
                this.availableCpu = cpu;
            }
        }
        
        static class Container {
            String name;
            int memoryRequired;
            double cpuRequired;
            
            Container(String name, int memory, double cpu) {
                this.name = name;
                this.memoryRequired = memory;
                this.cpuRequired = cpu;
            }
        }
        
        private List<Node> nodes = new ArrayList<>();
        
        public void addNode(Node node) {
            nodes.add(node);
        }
        
        public String schedule(Container container) {
            for (Node node : nodes) {
                if (node.availableMemory >= container.memoryRequired &&
                    node.availableCpu >= container.cpuRequired) {
                    
                    node.availableMemory -= container.memoryRequired;
                    node.availableCpu -= container.cpuRequired;
                    return node.name;
                }
            }
            return null; // No suitable node found
        }
        
        public void test() {
            System.out.println("Problem 61: Container Scheduler");
            
            Problem61_ContainerScheduler scheduler = new Problem61_ContainerScheduler();
            
            scheduler.addNode(new Node("node-1", 4096, 4.0));
            scheduler.addNode(new Node("node-2", 8192, 8.0));
            
            Container c1 = new Container("app-1", 1024, 1.0);
            Container c2 = new Container("app-2", 2048, 2.0);
            Container c3 = new Container("app-3", 4096, 4.0);
            
            System.out.println(c1.name + " scheduled on: " + scheduler.schedule(c1));
            System.out.println(c2.name + " scheduled on: " + scheduler.schedule(c2));
            System.out.println(c3.name + " scheduled on: " + scheduler.schedule(c3));
        }
    }
    
    // TODO: Problems 62-70
    // Problem 62: Rolling Update ⭐⭐⭐
    // Problem 63: Auto-Scaling ⭐⭐⭐
    // Problem 64: Pod Affinity/Anti-Affinity ⭐⭐⭐
    // Problem 65: Resource Quotas ⭐⭐
    // Problem 66: Liveness/Readiness Probes ⭐⭐
    // Problem 67: Volume Management ⭐⭐
    // Problem 68: Network Policies ⭐⭐⭐
    // Problem 69: ConfigMap/Secrets ⭐⭐
    // Problem 70: StatefulSet Management ⭐⭐⭐
    
    // ========================================================================
    // SECTION 8: DEPLOYMENT STRATEGIES
    // ========================================================================
    
    /**
     * Problem 71: Blue-Green Deployment ⭐⭐
     * Switch traffic between two environments
     */
    static class Problem71_BlueGreenDeployment {
        enum Environment { BLUE, GREEN }
        
        private Environment activeEnvironment = Environment.BLUE;
        private String blueVersion = "v1.0";
        private String greenVersion = null;
        
        public void deployToInactive(String version) {
            if (activeEnvironment == Environment.BLUE) {
                greenVersion = version;
                System.out.println("Deployed " + version + " to GREEN");
            } else {
                blueVersion = version;
                System.out.println("Deployed " + version + " to BLUE");
            }
        }
        
        public void switchTraffic() {
            activeEnvironment = (activeEnvironment == Environment.BLUE) 
                ? Environment.GREEN : Environment.BLUE;
            System.out.println("Switched traffic to " + activeEnvironment);
        }
        
        public String getActiveVersion() {
            return (activeEnvironment == Environment.BLUE) ? blueVersion : greenVersion;
        }
        
        public void test() {
            System.out.println("Problem 71: Blue-Green Deployment");
            
            Problem71_BlueGreenDeployment deployment = new Problem71_BlueGreenDeployment();
            
            System.out.println("Active: " + deployment.getActiveVersion());
            
            deployment.deployToInactive("v2.0");
            System.out.println("Active: " + deployment.getActiveVersion());
            
            deployment.switchTraffic();
            System.out.println("Active: " + deployment.getActiveVersion());
        }
    }
    
    // TODO: Problems 72-75+
    // Problem 72: Canary Deployment ⭐⭐⭐
    // Problem 73: A/B Testing Deployment ⭐⭐⭐
    // Problem 74: Shadow Deployment ⭐⭐⭐
    // Problem 75: Feature Toggles ⭐⭐
    
    // ========================================================================
    // MAIN - RUN ALL TESTS
    // ========================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 30: COMPREHENSIVE PRACTICE PROBLEMS");
        System.out.println("Cloud Architecture & Microservices");
        System.out.println("=".repeat(80));
        
        // Run solved problems
        System.out.println("\n--- SOLVED PROBLEMS ---\n");
        
        new Problem3_RoundRobinLoadBalancer().test();
        System.out.println();
        
        new Problem11_RequestRouter().test();
        System.out.println();
        
        new Problem12_TokenBucketRateLimiter().test();
        System.out.println();
        
        new Problem21_SimpleCircuitBreaker().test();
        System.out.println();
        
        new Problem31_SimpleEventBus().test();
        System.out.println();
        
        new Problem41_EventStore().test();
        System.out.println();
        
        new Problem51_SagaOrchestrator().test();
        System.out.println();
        
        new Problem61_ContainerScheduler().test();
        System.out.println();
        
        new Problem71_BlueGreenDeployment().test();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("75+ PRACTICE PROBLEMS AVAILABLE");
        System.out.println("9 Fully Solved | 66+ To Practice");
        System.out.println("=".repeat(80));
    }
}
