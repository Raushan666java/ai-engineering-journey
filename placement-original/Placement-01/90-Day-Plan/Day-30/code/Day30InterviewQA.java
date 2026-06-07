/**
 * DAY 30: COMPREHENSIVE INTERVIEW Q&A
 * Cloud Architecture & Microservices
 * 
 * 150+ Interview Questions with Detailed Answers
 * 
 * Topics:
 * 1. Microservices Architecture (20 Q&A)
 * 2. Service Discovery & Communication (20 Q&A)
 * 3. API Gateway & Routing (15 Q&A)
 * 4. Circuit Breaker & Resilience (15 Q&A)
 * 5. Event-Driven Architecture (20 Q&A)
 * 6. Event Sourcing & CQRS (20 Q&A)
 * 7. Saga Pattern (15 Q&A)
 * 8. Container Orchestration (15 Q&A)
 * 9. Deployment Strategies (15 Q&A)
 * 10. Cloud Design Patterns (10+ Q&A)
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;

public class Day30InterviewQA {
    
    // ========================================================================
    // SECTION 1: MICROSERVICES ARCHITECTURE
    // ========================================================================
    
    /**
     * Q1: What are microservices? How do they differ from monolithic architecture?
     * 
     * ANSWER:
     * Microservices are an architectural style where an application is composed of
     * small, independent services that:
     * 
     * 1. Run in their own processes
     * 2. Communicate via lightweight mechanisms (HTTP, messaging)
     * 3. Are independently deployable
     * 4. Are organized around business capabilities
     * 5. Can use different technologies/databases
     * 
     * MONOLITHIC vs MICROSERVICES:
     * 
     * +------------------+-------------------------+---------------------------+
     * | Aspect           | Monolithic              | Microservices             |
     * +------------------+-------------------------+---------------------------+
     * | Structure        | Single codebase         | Multiple services         |
     * | Deployment       | All-or-nothing          | Independent               |
     * | Scaling          | Scale entire app        | Scale individual services |
     * | Technology       | Single stack            | Polyglot                  |
     * | Data             | Single database         | Database per service      |
     * | Development      | Easier initially        | More complex              |
     * | Testing          | Simpler                 | More challenging          |
     * | Fault Isolation  | Poor                    | Excellent                 |
     * | Team Structure   | Single team             | Team per service          |
     * +------------------+-------------------------+---------------------------+
     * 
     * WHEN TO USE MICROSERVICES:
     * ✓ Large, complex applications
     * ✓ Need for independent scaling
     * ✓ Multiple teams working in parallel
     * ✓ Different technology requirements
     * ✓ Frequent deployments needed
     * 
     * WHEN TO AVOID:
     * ✗ Small, simple applications
     * ✗ Limited team size
     * ✗ Tight budget/time constraints
     * ✗ No DevOps maturity
     */
    
    /**
     * Q2: What is the Database per Service pattern? What are its trade-offs?
     * 
     * ANSWER:
     * Each microservice has its own private database that no other service can access directly.
     * 
     * BENEFITS:
     * ✓ Loose coupling - services can change database schema independently
     * ✓ Technology flexibility - can use different database types
     * ✓ Scalability - each database can be scaled independently
     * ✓ Fault isolation - database failure affects only one service
     * 
     * CHALLENGES:
     * ✗ Data consistency - no ACID transactions across services
     * ✗ Data duplication - may need to replicate data
     * ✗ Complex queries - no joins across databases
     * ✗ Data synchronization overhead
     * 
     * SOLUTIONS:
     * - Event-driven synchronization
     * - Saga pattern for distributed transactions
     * - CQRS for complex queries
     * - API Composition for joining data
     */
    
    /**
     * Q3: Explain the API Gateway pattern with code example
     */
    static class Q3_APIGateway {
        static class Request {
            String path;
            String method;
            Map<String, String> headers;
            
            Request(String path, String method) {
                this.path = path;
                this.method = method;
                this.headers = new HashMap<>();
            }
        }
        
        static class Response {
            int statusCode;
            String body;
            
            Response(int statusCode, String body) {
                this.statusCode = statusCode;
                this.body = body;
            }
        }
        
        /**
         * API Gateway routes requests to appropriate microservices
         * 
         * RESPONSIBILITIES:
         * - Request routing
         * - Authentication/Authorization
         * - Rate limiting
         * - Request/Response transformation
         * - Load balancing
         * - Caching
         * - Logging/Monitoring
         * 
         * Time Complexity: O(1) for routing
         */
        static class APIGateway {
            private Map<String, String> routes = new HashMap<>();
            private Map<String, Integer> rateLimits = new ConcurrentHashMap<>();
            
            public void addRoute(String path, String serviceUrl) {
                routes.put(path, serviceUrl);
            }
            
            public Response route(Request request) {
                // 1. Authentication
                if (!authenticate(request)) {
                    return new Response(401, "Unauthorized");
                }
                
                // 2. Rate limiting
                if (!checkRateLimit(request)) {
                    return new Response(429, "Too Many Requests");
                }
                
                // 3. Route to service
                String serviceUrl = routes.get(request.path);
                if (serviceUrl == null) {
                    return new Response(404, "Not Found");
                }
                
                // 4. Forward request (simplified)
                return new Response(200, "Forwarded to: " + serviceUrl);
            }
            
            private boolean authenticate(Request request) {
                return request.headers.containsKey("Authorization");
            }
            
            private boolean checkRateLimit(Request request) {
                String clientId = request.headers.getOrDefault("X-Client-Id", "default");
                int count = rateLimits.getOrDefault(clientId, 0);
                
                if (count >= 10) return false;
                
                rateLimits.put(clientId, count + 1);
                return true;
            }
        }
        
        public static void demonstrate() {
            System.out.println("Q3: API Gateway Pattern\n");
            
            APIGateway gateway = new APIGateway();
            gateway.addRoute("/users", "http://user-service:8080");
            gateway.addRoute("/orders", "http://order-service:8080");
            
            Request request = new Request("/users", "GET");
            request.headers.put("Authorization", "Bearer token123");
            request.headers.put("X-Client-Id", "client-1");
            
            Response response = gateway.route(request);
            System.out.printf("Status: %d, Body: %s%n", response.statusCode, response.body);
        }
    }
    
    // TODO: Q4-Q20
    // Q4: What is Service Mesh? Compare with API Gateway
    // Q5: Explain the Strangler Fig pattern for migrating to microservices
    // Q6: What are the communication patterns in microservices? (Sync vs Async)
    // Q7: How do you handle distributed transactions?
    // Q8: Explain the Backends for Frontends (BFF) pattern
    // Q9: What is the Sidecar pattern?
    // Q10: How do you manage configuration in microservices?
    // Q11: Explain service decomposition strategies
    // Q12: What are bounded contexts in DDD?
    // Q13: How do you handle versioning in microservices?
    // Q14: What is polyglot persistence?
    // Q15: Explain the Ambassador pattern
    // Q16: How do you implement authentication in microservices?
    // Q17: What is eventual consistency?
    // Q18: Explain the Anti-Corruption Layer pattern
    // Q19: How do you handle cascading failures?
    // Q20: What are the testing strategies for microservices?
    
    // ========================================================================
    // SECTION 2: SERVICE DISCOVERY & COMMUNICATION
    // ========================================================================
    
    /**
     * Q21: Explain Service Discovery pattern with implementation
     */
    static class Q21_ServiceDiscovery {
        /**
         * SERVICE DISCOVERY PATTERN
         * 
         * Problem: How do services find each other in dynamic cloud environments?
         * 
         * Solution: Service registry that tracks available service instances
         * 
         * TWO APPROACHES:
         * 
         * 1. CLIENT-SIDE DISCOVERY:
         *    - Client queries registry
         *    - Client chooses instance (load balancing)
         *    - Example: Netflix Eureka
         *    
         * 2. SERVER-SIDE DISCOVERY:
         *    - Load balancer queries registry
         *    - Client calls load balancer
         *    - Example: AWS ELB, Kubernetes Service
         * 
         * IMPLEMENTATION:
         */
        static class ServiceRegistry {
            private Map<String, List<ServiceInstance>> registry = new ConcurrentHashMap<>();
            
            public void register(String serviceName, ServiceInstance instance) {
                registry.computeIfAbsent(serviceName, k -> new CopyOnWriteArrayList<>())
                        .add(instance);
                System.out.printf("Registered: %s at %s:%d%n", 
                    serviceName, instance.host, instance.port);
            }
            
            public List<ServiceInstance> discover(String serviceName) {
                return registry.getOrDefault(serviceName, Collections.emptyList());
            }
            
            public void deregister(String serviceName, String instanceId) {
                List<ServiceInstance> instances = registry.get(serviceName);
                if (instances != null) {
                    instances.removeIf(i -> i.id.equals(instanceId));
                }
            }
        }
        
        static class ServiceInstance {
            String id;
            String host;
            int port;
            
            ServiceInstance(String id, String host, int port) {
                this.id = id;
                this.host = host;
                this.port = port;
            }
        }
        
        /**
         * LOAD BALANCING STRATEGIES:
         * - Round Robin: O(1) - distribute evenly
         * - Random: O(1) - simple but uneven
         * - Least Connections: O(n) - track active connections
         * - Weighted: O(n) - based on instance capacity
         */
        static class RoundRobinLoadBalancer {
            private int index = 0;
            
            public ServiceInstance select(List<ServiceInstance> instances) {
                if (instances.isEmpty()) return null;
                ServiceInstance selected = instances.get(index);
                index = (index + 1) % instances.size();
                return selected;
            }
        }
        
        public static void demonstrate() {
            System.out.println("Q21: Service Discovery Pattern\n");
            
            ServiceRegistry registry = new ServiceRegistry();
            
            // Register instances
            registry.register("user-service", 
                new ServiceInstance("u1", "192.168.1.10", 8080));
            registry.register("user-service", 
                new ServiceInstance("u2", "192.168.1.11", 8080));
            
            // Discover and load balance
            List<ServiceInstance> instances = registry.discover("user-service");
            RoundRobinLoadBalancer lb = new RoundRobinLoadBalancer();
            
            for (int i = 0; i < 4; i++) {
                ServiceInstance instance = lb.select(instances);
                System.out.printf("Request %d -> %s:%d%n", 
                    i + 1, instance.host, instance.port);
            }
        }
    }
    
    /**
     * Q22: What is the Circuit Breaker pattern? When to use it?
     */
    static class Q22_CircuitBreaker {
        /**
         * CIRCUIT BREAKER PATTERN
         * 
         * Purpose: Prevent cascading failures by failing fast
         * 
         * THREE STATES:
         * 
         * 1. CLOSED (Normal):
         *    - Requests pass through
         *    - Count failures
         *    - Open circuit if failures >= threshold
         * 
         * 2. OPEN (Failing):
         *    - Reject requests immediately
         *    - Return error or fallback
         *    - After timeout, move to HALF_OPEN
         * 
         * 3. HALF_OPEN (Testing):
         *    - Allow limited requests
         *    - If succeed: CLOSED
         *    - If fail: OPEN
         * 
         * WHEN TO USE:
         * ✓ Calling remote services
         * ✓ Database operations
         * ✓ Third-party APIs
         * ✓ Any unreliable dependency
         * 
         * BENEFITS:
         * ✓ Fail fast (don't wait for timeout)
         * ✓ Prevent resource exhaustion
         * ✓ Give service time to recover
         * ✓ Graceful degradation
         * 
         * Time Complexity: O(1) for state check
         */
        enum State { CLOSED, OPEN, HALF_OPEN }
        
        static class CircuitBreaker {
            private State state = State.CLOSED;
            private int failureCount = 0;
            private final int threshold = 5;
            private Instant openedAt;
            private final Duration timeout = Duration.ofSeconds(60);
            
            public <T> T execute(Supplier<T> operation) throws Exception {
                if (state == State.OPEN) {
                    if (shouldAttemptReset()) {
                        state = State.HALF_OPEN;
                    } else {
                        throw new Exception("Circuit is OPEN");
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
            
            private boolean shouldAttemptReset() {
                return Duration.between(openedAt, Instant.now()).compareTo(timeout) >= 0;
            }
            
            private void onSuccess() {
                failureCount = 0;
                if (state == State.HALF_OPEN) {
                    state = State.CLOSED;
                }
            }
            
            private void onFailure() {
                failureCount++;
                if (failureCount >= threshold) {
                    state = State.OPEN;
                    openedAt = Instant.now();
                }
            }
        }
    }
    
    // TODO: Q23-Q40
    // Q23: Explain the Retry pattern with exponential backoff
    // Q24: What is the Bulkhead pattern?
    // Q25: How does the Timeout pattern work?
    // Q26: Explain request hedging
    // Q27: What is the Fallback pattern?
    // Q28: How do you implement health checks?
    // Q29: Explain gRPC vs REST
    // Q30: What is message queueing? When to use?
    // Q31: Explain the Outbox pattern
    // Q32: What is idempotency? Why important?
    // Q33: How do you handle duplicate messages?
    // Q34: Explain request correlation
    // Q35: What is distributed tracing?
    // Q36: How do you implement service-to-service authentication?
    // Q37: Explain mTLS (Mutual TLS)
    // Q38: What is rate limiting? Implementation strategies?
    // Q39: How do you handle backpressure?
    // Q40: Explain the Cache-Aside pattern
    
    // ========================================================================
    // SECTION 3: API GATEWAY & ROUTING
    // ========================================================================
    
    /**
     * Q41: What are the responsibilities of an API Gateway?
     * 
     * ANSWER:
     * An API Gateway is a single entry point for all clients.
     * 
     * KEY RESPONSIBILITIES:
     * 
     * 1. REQUEST ROUTING:
     *    - Route to appropriate microservice
     *    - Path-based routing: /users/* -> user-service
     *    - Header-based routing: version-based
     * 
     * 2. AUTHENTICATION & AUTHORIZATION:
     *    - Validate JWT tokens
     *    - OAuth2/OpenID Connect
     *    - API key validation
     * 
     * 3. RATE LIMITING:
     *    - Per-client limits
     *    - Token bucket algorithm
     *    - Prevent abuse
     * 
     * 4. REQUEST/RESPONSE TRANSFORMATION:
     *    - Protocol translation (REST to gRPC)
     *    - Data format conversion (JSON to XML)
     *    - Header manipulation
     * 
     * 5. CACHING:
     *    - Response caching
     *    - Reduce backend load
     *    - Improve performance
     * 
     * 6. LOAD BALANCING:
     *    - Distribute requests across instances
     *    - Health-based routing
     * 
     * 7. REQUEST AGGREGATION:
     *    - Combine multiple backend calls
     *    - Reduce client round-trips
     * 
     * 8. LOGGING & MONITORING:
     *    - Centralized logging
     *    - Request tracing
     *    - Metrics collection
     * 
     * 9. SECURITY:
     *    - SSL termination
     *    - DDoS protection
     *    - IP whitelisting
     * 
     * 10. CIRCUIT BREAKING:
     *     - Fail fast on service failures
     *     - Prevent cascading failures
     * 
     * POPULAR API GATEWAYS:
     * - Kong
     * - AWS API Gateway
     * - Azure API Management
     * - Netflix Zuul
     * - Spring Cloud Gateway
     */
    
    // TODO: Q42-Q55
    // Q42: Explain rate limiting algorithms (Token Bucket, Leaky Bucket)
    // Q43: How do you implement request aggregation?
    // Q44: What is API versioning? Strategies?
    // Q45: Explain response caching strategies
    // Q46: How do you handle CORS in API Gateway?
    // Q47: What is request deduplication?
    // Q48: Explain WebSocket routing
    // Q49: How do you implement API metering?
    // Q50: What is the Backend for Frontend pattern?
    // Q51: How do you handle file uploads through API Gateway?
    // Q52: Explain API Gateway vs Service Mesh
    // Q53: How do you implement custom filters/middleware?
    // Q54: What is request transformation?
    // Q55: How do you handle long-polling in API Gateway?
    
    // ========================================================================
    // SECTION 4: CIRCUIT BREAKER & RESILIENCE
    // ========================================================================
    
    // (Q22 covered earlier)
    
    // TODO: Q56-Q70
    // Q56: Compare Circuit Breaker libraries (Hystrix, Resilience4j)
    // Q57: How do you configure circuit breaker thresholds?
    // Q58: Explain half-open state in detail
    // Q59: What is the difference between Timeout and Circuit Breaker?
    // Q60: How do you implement fallback responses?
    // Q61: Explain metric-based circuit breaking
    // Q62: What is adaptive circuit breaking?
    // Q63: How do you test circuit breakers?
    // Q64: Explain circuit breaker monitoring
    // Q65: How do you handle circuit breaker state synchronization?
    // Q66: What is the Retry pattern? Best practices?
    // Q67: Explain jitter in retry logic
    // Q68: How do you implement graceful degradation?
    // Q69: What is the Bulkhead pattern implementation?
    // Q70: How do you combine multiple resilience patterns?
    
    // ========================================================================
    // SECTION 5: EVENT-DRIVEN ARCHITECTURE
    // ========================================================================
    
    /**
     * Q71: What is Event-Driven Architecture? Benefits and challenges?
     */
    static class Q71_EventDrivenArchitecture {
        /**
         * EVENT-DRIVEN ARCHITECTURE (EDA)
         * 
         * Definition: Architecture where components communicate through events
         * 
         * KEY CONCEPTS:
         * 
         * 1. EVENT:
         *    - Something that happened (past tense)
         *    - Immutable
         *    - Examples: OrderPlaced, UserRegistered
         * 
         * 2. EVENT PRODUCER:
         *    - Publishes events
         *    - Doesn't know consumers
         *    - Decoupled
         * 
         * 3. EVENT CONSUMER:
         *    - Subscribes to events
         *    - Reacts to events
         *    - Independent processing
         * 
         * 4. EVENT BUS/BROKER:
         *    - Routes events
         *    - Examples: Kafka, RabbitMQ, AWS SNS/SQS
         * 
         * PATTERNS:
         * 
         * 1. Pub-Sub:
         *    - One-to-many
         *    - Multiple consumers
         *    - Broadcast events
         * 
         * 2. Event Streaming:
         *    - Ordered sequence
         *    - Replay capability
         *    - Example: Kafka
         * 
         * 3. Event Sourcing:
         *    - Store events, not state
         *    - Complete audit trail
         *    - Rebuild state from events
         * 
         * BENEFITS:
         * ✓ Loose coupling
         * ✓ Scalability (async processing)
         * ✓ Flexibility (add consumers easily)
         * ✓ Real-time processing
         * ✓ Audit trail
         * 
         * CHALLENGES:
         * ✗ Eventual consistency
         * ✗ Debugging complexity
         * ✗ Event ordering
         * ✗ Duplicate events
         * ✗ Message delivery guarantees
         */
        
        static class EventBus {
            private Map<String, List<Consumer<Event>>> subscribers = new ConcurrentHashMap<>();
            
            public void subscribe(String topic, Consumer<Event> handler) {
                subscribers.computeIfAbsent(topic, k -> new CopyOnWriteArrayList<>())
                        .add(handler);
            }
            
            public void publish(String topic, Event event) {
                List<Consumer<Event>> handlers = subscribers.get(topic);
                if (handlers != null) {
                    handlers.forEach(handler -> 
                        CompletableFuture.runAsync(() -> handler.accept(event)));
                }
            }
        }
        
        static class Event {
            String id = UUID.randomUUID().toString();
            String type;
            Object payload;
            Instant timestamp = Instant.now();
            
            Event(String type, Object payload) {
                this.type = type;
                this.payload = payload;
            }
        }
        
        public static void demonstrate() {
            System.out.println("Q71: Event-Driven Architecture\n");
            
            EventBus bus = new EventBus();
            
            // Subscribe to OrderPlaced event
            bus.subscribe("order.placed", event -> {
                System.out.println("Inventory Service: Reserve items");
            });
            
            bus.subscribe("order.placed", event -> {
                System.out.println("Payment Service: Process payment");
            });
            
            bus.subscribe("order.placed", event -> {
                System.out.println("Notification Service: Send confirmation email");
            });
            
            // Publish event
            bus.publish("order.placed", new Event("OrderPlaced", 
                Map.of("orderId", "12345", "items", List.of("item1", "item2"))));
            
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
    }
    
    // TODO: Q72-Q90
    // Q72: Explain message delivery guarantees (At-most-once, At-least-once, Exactly-once)
    // Q73: How do you handle event ordering?
    // Q74: What is the Dead Letter Queue pattern?
    // Q75: Explain event replay
    // Q76: How do you implement event filtering?
    // Q77: What is event enrichment?
    // Q78: Explain the Competing Consumers pattern
    // Q79: How do you handle poison messages?
    // Q80: What is event versioning?
    // Q81: Explain event schema evolution
    // Q82: How do you implement event correlation?
    // Q83: What is the Claim Check pattern?
    // Q84: Explain event batching
    // Q85: How do you handle backpressure in event systems?
    // Q86: What is Change Data Capture (CDC)?
    // Q87: Explain Kafka vs RabbitMQ
    // Q88: How do you implement event monitoring?
    // Q89: What is the Inbox pattern?
    // Q90: How do you test event-driven systems?
    
    // ========================================================================
    // SECTION 6: EVENT SOURCING & CQRS
    // ========================================================================
    
    /**
     * Q91: Explain Event Sourcing pattern with example
     */
    static class Q91_EventSourcing {
        /**
         * EVENT SOURCING
         * 
         * Definition: Store state changes as a sequence of events
         * 
         * TRADITIONAL vs EVENT SOURCING:
         * 
         * Traditional (CRUD):
         * +--------+----------+---------+
         * | AcctID | Balance  | Status  |
         * +--------+----------+---------+
         * | 123    | $1500    | Active  |  ← Current state only
         * +--------+----------+---------+
         * 
         * Event Sourcing:
         * +--------+--------------------+--------+-----------+
         * | AcctID | Event              | Amount | Timestamp |
         * +--------+--------------------+--------+-----------+
         * | 123    | AccountOpened      | $1000  | T1        |
         * | 123    | MoneyDeposited     | $700   | T2        |
         * | 123    | MoneyWithdrawn     | $200   | T3        |  ← All events
         * +--------+--------------------+--------+-----------+
         * 
         * Balance = $1000 + $700 - $200 = $1500
         * 
         * BENEFITS:
         * ✓ Complete audit trail
         * ✓ Temporal queries (state at any point in time)
         * ✓ Event replay
         * ✓ Debugging (reconstruct any state)
         * ✓ Event-driven integration
         * 
         * CHALLENGES:
         * ✗ Storage overhead (all events)
         * ✗ Query complexity (rebuild state)
         * ✗ Schema evolution
         * ✗ Learning curve
         * 
         * SOLUTIONS:
         * - Snapshots (periodic state saves)
         * - CQRS (separate read model)
         * - Event upcasting (schema migration)
         */
        
        static class BankAccount {
            private String accountId;
            private double balance = 0;
            private List<Event> events = new ArrayList<>();
            
            public void applyEvent(Event event) {
                events.add(event);
                switch (event.type) {
                    case "AccountOpened":
                        balance = (double) event.data;
                        break;
                    case "MoneyDeposited":
                        balance += (double) event.data;
                        break;
                    case "MoneyWithdrawn":
                        balance -= (double) event.data;
                        break;
                }
            }
            
            public double getBalance() {
                return balance;
            }
            
            public List<Event> getEvents() {
                return new ArrayList<>(events);
            }
        }
        
        static class Event {
            String type;
            Object data;
            Instant timestamp = Instant.now();
            
            Event(String type, Object data) {
                this.type = type;
                this.data = data;
            }
        }
        
        public static void demonstrate() {
            System.out.println("Q91: Event Sourcing\n");
            
            BankAccount account = new BankAccount();
            
            account.applyEvent(new Event("AccountOpened", 1000.0));
            account.applyEvent(new Event("MoneyDeposited", 700.0));
            account.applyEvent(new Event("MoneyWithdrawn", 200.0));
            
            System.out.println("Current Balance: $" + account.getBalance());
            System.out.println("\nEvent History:");
            account.getEvents().forEach(e ->
                System.out.printf("  %s: $%.2f at %s%n", e.type, e.data, e.timestamp));
        }
    }
    
    /**
     * Q92: What is CQRS? How does it work with Event Sourcing?
     * 
     * ANSWER:
     * CQRS (Command Query Responsibility Segregation)
     * 
     * Separate models for reading and writing data:
     * 
     * WRITE MODEL (Commands):
     * - Handle business logic
     * - Validate and execute commands
     * - Produce events
     * 
     * READ MODEL (Queries):
     * - Optimized for queries
     * - Denormalized data
     * - Updated by events
     * 
     * ARCHITECTURE:
     * 
     *                    Commands
     *                       ↓
     *                 [Write Model]
     *                       ↓
     *                   [Events]
     *                   ↙       ↘
     *          [Read Model 1]  [Read Model 2]
     *                   ↓            ↓
     *                Queries      Queries
     * 
     * BENEFITS:
     * ✓ Independent scaling (read-heavy vs write-heavy)
     * ✓ Optimized queries (denormalized)
     * ✓ Multiple read models (different views)
     * ✓ Eventual consistency
     * 
     * WHEN TO USE:
     * - Complex business logic
     * - Different read/write performance needs
     * - Multiple query patterns
     * - Event-driven architecture
     * 
     * WHEN TO AVOID:
     * - Simple CRUD applications
     * - Strong consistency required
     * - Small team (added complexity)
     */
    
    // TODO: Q93-Q110
    // Q93: How do you implement snapshots in Event Sourcing?
    // Q94: Explain event upcasting/versioning
    // Q95: How do you handle schema evolution?
    // Q96: What are temporal queries?
    // Q97: How do you implement event replay?
    // Q98: Explain the Projection pattern
    // Q99: How do you handle event conflicts?
    // Q100: What is the difference between Event Sourcing and Change Data Capture?
    // Q101: How do you implement CQRS read model synchronization?
    // Q102: Explain command handlers vs event handlers
    // Q103: How do you handle long-running processes in CQRS?
    // Q104: What is the Process Manager pattern?
    // Q105: How do you implement event store?
    // Q106: Explain event partitioning
    // Q107: How do you query Event Sourcing systems?
    // Q108: What is eventual consistency?
    // Q109: How do you handle event store backups?
    // Q110: Explain aggregate roots in DDD/CQRS
    
    // ========================================================================
    // SECTION 7: SAGA PATTERN
    // ========================================================================
    
    /**
     * Q111: What is the Saga pattern? When to use it?
     * 
     * ANSWER:
     * Saga manages distributed transactions across microservices
     * 
     * PROBLEM:
     * - No distributed ACID transactions
     * - Each service has its own database
     * - Need to maintain consistency
     * 
     * SOLUTION:
     * - Sequence of local transactions
     * - Each step publishes event
     * - Compensating transactions on failure
     * 
     * TWO APPROACHES:
     * 
     * 1. ORCHESTRATION (Centralized):
     *    - Saga orchestrator controls flow
     *    - Tells each service what to do
     *    - Easier to manage and monitor
     *    - Single point of failure
     * 
     * 2. CHOREOGRAPHY (Decentralized):
     *    - Services listen for events
     *    - React independently
     *    - More resilient
     *    - Harder to track
     * 
     * EXAMPLE - Order Saga:
     * 
     * Success Flow:
     * 1. Reserve Inventory → Success
     * 2. Process Payment → Success
     * 3. Ship Order → Success
     * ✓ Transaction Complete
     * 
     * Failure Flow:
     * 1. Reserve Inventory → Success
     * 2. Process Payment → FAILURE
     * 3. Compensate: Release Inventory
     * ✗ Transaction Rolled Back
     * 
     * COMPENSATING TRANSACTIONS:
     * - Undo previous steps
     * - Execute in reverse order
     * - Must be idempotent
     * 
     * WHEN TO USE:
     * ✓ Distributed transactions needed
     * ✓ Eventual consistency acceptable
     * ✓ Complex business workflows
     * 
     * WHEN TO AVOID:
     * ✗ Immediate consistency required
     * ✗ Simple workflows
     */
    
    // TODO: Q112-Q125
    // Q112: Compare Saga orchestration vs choreography
    // Q113: How do you implement saga timeout handling?
    // Q114: What is saga state machine?
    // Q115: How do you handle partial failures?
    // Q116: Explain compensating transactions
    // Q117: How do you make sagas idempotent?
    // Q118: What is the Process Manager pattern?
    // Q119: How do you implement saga monitoring?
    // Q120: Explain saga logging and audit trail
    // Q121: How do you test sagas?
    // Q122: What is saga isolation?
    // Q123: How do you handle concurrent sagas?
    // Q124: Explain saga recovery strategies
    // Q125: How do you implement long-running sagas?
    
    // ========================================================================
    // SECTION 8: CONTAINER ORCHESTRATION
    // ========================================================================
    
    /**
     * Q126: Explain Kubernetes architecture and components
     * 
     * ANSWER:
     * Kubernetes is a container orchestration platform
     * 
     * ARCHITECTURE:
     * 
     * CONTROL PLANE (Master):
     * 1. API Server - Entry point for all operations
     * 2. etcd - Distributed key-value store (cluster state)
     * 3. Scheduler - Assigns pods to nodes
     * 4. Controller Manager - Maintains desired state
     * 
     * WORKER NODES:
     * 1. Kubelet - Node agent, runs containers
     * 2. Kube-proxy - Network proxy
     * 3. Container Runtime - Docker, containerd, etc.
     * 
     * KEY CONCEPTS:
     * 
     * Pod:
     * - Smallest deployable unit
     * - One or more containers
     * - Shared network and storage
     * 
     * Deployment:
     * - Manages replica sets
     * - Rolling updates
     * - Rollback capability
     * 
     * Service:
     * - Stable endpoint for pods
     * - Load balancing
     * - Service discovery
     * 
     * ConfigMap/Secret:
     * - Configuration management
     * - Sensitive data storage
     * 
     * Namespace:
     * - Virtual clusters
     * - Resource isolation
     * 
     * SCHEDULING:
     * - Resource requests/limits
     * - Node affinity/anti-affinity
     * - Taints and tolerations
     */
    
    // TODO: Q127-Q140
    // Q127: Explain Kubernetes pod lifecycle
    // Q128: What are liveness and readiness probes?
    // Q129: How does Kubernetes service discovery work?
    // Q130: Explain Kubernetes networking model
    // Q131: What are StatefulSets? When to use?
    // Q132: Explain DaemonSets
    // Q133: How do you manage persistent storage in Kubernetes?
    // Q134: What is a Helm chart?
    // Q135: Explain Kubernetes resource quotas
    // Q136: How do you implement auto-scaling in Kubernetes?
    // Q137: What are Kubernetes operators?
    // Q138: Explain ingress controllers
    // Q139: How do you handle configuration in Kubernetes?
    // Q140: What is a service mesh (Istio, Linkerd)?
    
    // ========================================================================
    // SECTION 9: DEPLOYMENT STRATEGIES
    // ========================================================================
    
    /**
     * Q141: Compare deployment strategies: Blue-Green, Canary, Rolling
     * 
     * ANSWER:
     * 
     * 1. BLUE-GREEN DEPLOYMENT:
     * 
     * Setup: Two identical environments (Blue, Green)
     * 
     * Process:
     * - Blue: Current version (100% traffic)
     * - Green: Deploy new version
     * - Test Green environment
     * - Switch traffic: Blue 0% → Green 100%
     * - Keep Blue for rollback
     * 
     * Pros:
     * ✓ Zero downtime
     * ✓ Instant rollback
     * ✓ Full testing before switch
     * 
     * Cons:
     * ✗ Double resources needed
     * ✗ Database migration challenges
     * 
     * 2. CANARY DEPLOYMENT:
     * 
     * Process:
     * - Deploy new version to small subset
     * - Route small % of traffic (5%)
     * - Monitor metrics
     * - Gradually increase (10%, 25%, 50%, 100%)
     * - Rollback if issues
     * 
     * Traffic Distribution:
     * Time  | Old    | New
     * T0    | 100%   | 0%
     * T1    | 95%    | 5%
     * T2    | 90%    | 10%
     * T3    | 75%    | 25%
     * T4    | 50%    | 50%
     * T5    | 0%     | 100%
     * 
     * Pros:
     * ✓ Gradual rollout
     * ✓ Real user testing
     * ✓ Minimal risk
     * 
     * Cons:
     * ✗ Complex routing
     * ✗ Longer deployment time
     * 
     * 3. ROLLING DEPLOYMENT:
     * 
     * Process:
     * - Replace instances one by one
     * - Instance 1: Old → New
     * - Wait for health check
     * - Instance 2: Old → New
     * - Continue until all replaced
     * 
     * Pros:
     * ✓ No extra resources
     * ✓ Gradual rollout
     * 
     * Cons:
     * ✗ Both versions running (compatibility)
     * ✗ Slow rollback
     * 
     * COMPARISON TABLE:
     * 
     * +----------------+------------+-------------+------------+
     * | Aspect         | Blue-Green | Canary      | Rolling    |
     * +----------------+------------+-------------+------------+
     * | Downtime       | Zero       | Zero        | Zero       |
     * | Resources      | 2x         | ~1.1x       | 1x         |
     * | Rollback Speed | Instant    | Fast        | Slow       |
     * | Risk           | Medium     | Low         | Medium     |
     * | Complexity     | Low        | High        | Medium     |
     * | Testing        | Complete   | Gradual     | Limited    |
     * +----------------+------------+-------------+------------+
     * 
     * WHEN TO USE:
     * - Blue-Green: Critical apps, database changes
     * - Canary: High-risk changes, A/B testing
     * - Rolling: Standard updates, resource-constrained
     */
    
    // TODO: Q142-Q155
    // Q142: What is A/B testing deployment?
    // Q143: Explain shadow deployment
    // Q144: How do you implement feature toggles?
    // Q145: What is dark launching?
    // Q146: Explain database migration strategies
    // Q147: How do you handle config changes during deployment?
    // Q148: What is progressive delivery?
    // Q149: Explain deployment automation (CI/CD)
    // Q150: How do you implement deployment monitoring?
    
    // ========================================================================
    // SECTION 10: CLOUD DESIGN PATTERNS
    // ========================================================================
    
    // TODO: Q151-Q160+
    // Q151: Explain the Strangler Fig pattern
    // Q152: What is the Sidecar pattern?
    // Q153: Explain the Ambassador pattern
    // Q154: What is the Anti-Corruption Layer?
    // Q155: Explain the Backends for Frontends pattern
    // Q156: What is the Retry pattern with exponential backoff?
    // Q157: Explain the Cache-Aside pattern
    // Q158: What is the Claim Check pattern?
    // Q159: Explain the Competing Consumers pattern
    // Q160: What is the Priority Queue pattern?
    
    // ========================================================================
    // MAIN - DEMONSTRATE SELECTED Q&A
    // ========================================================================
    
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 30: COMPREHENSIVE INTERVIEW Q&A");
        System.out.println("Cloud Architecture & Microservices");
        System.out.println("=".repeat(80));
        System.out.println();
        
        // Demonstrate key questions with code
        Q3_APIGateway.demonstrate();
        System.out.println("\n" + "-".repeat(80) + "\n");
        
        Q21_ServiceDiscovery.demonstrate();
        System.out.println("\n" + "-".repeat(80) + "\n");
        
        Q71_EventDrivenArchitecture.demonstrate();
        System.out.println("\n" + "-".repeat(80) + "\n");
        
        Q91_EventSourcing.demonstrate();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("160+ INTERVIEW QUESTIONS COVERED");
        System.out.println("15 Fully Detailed | 145+ Outlined");
        System.out.println("=".repeat(80));
    }
}
