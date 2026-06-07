/**
 * DAY 24 - ADVANCED SYSTEM DESIGN PATTERNS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Rate Limiting & Throttling
 * 2. Circuit Breaker Pattern
 * 3. Bulkhead Pattern
 * 4. Event Sourcing
 * 5. CQRS (Command Query Responsibility Segregation)
 * 6. Saga Pattern
 * 7. API Gateway Pattern
 * 8. Service Mesh
 * 9. Strangler Fig Pattern
 * 10. Backends for Frontends (BFF)
 * 
 * Production-ready implementations with comprehensive examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.time.*;
import java.util.function.*;

public class SystemDesignPatternsComplete {

    // ============================================================================
    // 1. RATE LIMITING & THROTTLING
    // ============================================================================

    /**
     * Token Bucket Rate Limiter
     * - Allows burst traffic while maintaining average rate
     * - Production use: API throttling, request limiting
     */
    static class TokenBucketRateLimiter {
        private final long capacity;
        private final long refillRate; // tokens per second
        private final AtomicLong tokens;
        private final AtomicLong lastRefillTimestamp;

        public TokenBucketRateLimiter(long capacity, long refillRate) {
            this.capacity = capacity;
            this.refillRate = refillRate;
            this.tokens = new AtomicLong(capacity);
            this.lastRefillTimestamp = new AtomicLong(System.nanoTime());
        }

        public boolean allowRequest() {
            refill();
            long currentTokens = tokens.get();
            if (currentTokens > 0) {
                if (tokens.compareAndSet(currentTokens, currentTokens - 1)) {
                    return true;
                }
            }
            return false;
        }

        private void refill() {
            long now = System.nanoTime();
            long lastRefill = lastRefillTimestamp.get();
            long elapsedNanos = now - lastRefill;
            long tokensToAdd = (elapsedNanos * refillRate) / 1_000_000_000;

            if (tokensToAdd > 0) {
                long newTokens = Math.min(capacity, tokens.get() + tokensToAdd);
                if (tokens.compareAndSet(tokens.get(), newTokens)) {
                    lastRefillTimestamp.set(now);
                }
            }
        }

        public long getAvailableTokens() {
            refill();
            return tokens.get();
        }
    }

    /**
     * Leaky Bucket Rate Limiter
     * - Smooths out traffic spikes
     * - Enforces strict rate limit
     */
    static class LeakyBucketRateLimiter {
        private final Queue<Long> requests;
        private final long capacity;
        private final long leakRate; // requests per second
        private final long windowMs;

        public LeakyBucketRateLimiter(long capacity, long leakRate) {
            this.requests = new ConcurrentLinkedQueue<>();
            this.capacity = capacity;
            this.leakRate = leakRate;
            this.windowMs = 1000 / leakRate;
        }

        public boolean allowRequest() {
            long now = System.currentTimeMillis();
            leak(now);

            if (requests.size() < capacity) {
                requests.offer(now);
                return true;
            }
            return false;
        }

        private void leak(long now) {
            while (!requests.isEmpty() && 
                   (now - requests.peek()) > windowMs) {
                requests.poll();
            }
        }
    }

    /**
     * Sliding Window Rate Limiter
     * - More accurate than fixed window
     * - Prevents edge case exploits
     */
    static class SlidingWindowRateLimiter {
        private final ConcurrentHashMap<String, Queue<Long>> userRequests;
        private final long maxRequests;
        private final long windowMs;

        public SlidingWindowRateLimiter(long maxRequests, long windowMs) {
            this.userRequests = new ConcurrentHashMap<>();
            this.maxRequests = maxRequests;
            this.windowMs = windowMs;
        }

        public boolean allowRequest(String userId) {
            long now = System.currentTimeMillis();
            Queue<Long> requests = userRequests.computeIfAbsent(
                userId, k -> new ConcurrentLinkedQueue<>()
            );

            // Remove old requests
            while (!requests.isEmpty() && 
                   (now - requests.peek()) > windowMs) {
                requests.poll();
            }

            if (requests.size() < maxRequests) {
                requests.offer(now);
                return true;
            }
            return false;
        }

        public long getRemainingRequests(String userId) {
            Queue<Long> requests = userRequests.get(userId);
            if (requests == null) return maxRequests;
            return maxRequests - requests.size();
        }
    }

    // ============================================================================
    // 2. CIRCUIT BREAKER PATTERN
    // ============================================================================

    /**
     * Circuit Breaker with State Machine
     * States: CLOSED -> OPEN -> HALF_OPEN -> CLOSED
     */
    static class CircuitBreaker {
        enum State { CLOSED, OPEN, HALF_OPEN }

        private volatile State state = State.CLOSED;
        private final AtomicInteger failureCount = new AtomicInteger(0);
        private final AtomicInteger successCount = new AtomicInteger(0);
        private volatile long lastFailureTime = 0;

        private final int failureThreshold;
        private final int successThreshold;
        private final long timeoutMs;

        public CircuitBreaker(int failureThreshold, int successThreshold, long timeoutMs) {
            this.failureThreshold = failureThreshold;
            this.successThreshold = successThreshold;
            this.timeoutMs = timeoutMs;
        }

        public <T> T execute(Supplier<T> operation) throws Exception {
            if (state == State.OPEN) {
                if (System.currentTimeMillis() - lastFailureTime >= timeoutMs) {
                    state = State.HALF_OPEN;
                    successCount.set(0);
                } else {
                    throw new Exception("Circuit breaker is OPEN");
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
            failureCount.set(0);
            if (state == State.HALF_OPEN) {
                if (successCount.incrementAndGet() >= successThreshold) {
                    state = State.CLOSED;
                }
            }
        }

        private void onFailure() {
            lastFailureTime = System.currentTimeMillis();
            if (failureCount.incrementAndGet() >= failureThreshold) {
                state = State.OPEN;
            }
        }

        public State getState() {
            return state;
        }

        public void reset() {
            state = State.CLOSED;
            failureCount.set(0);
            successCount.set(0);
        }
    }

    /**
     * Advanced Circuit Breaker with Metrics
     */
    static class AdvancedCircuitBreaker {
        enum State { CLOSED, OPEN, HALF_OPEN }

        private volatile State state = State.CLOSED;
        private final Queue<Boolean> results; // true = success, false = failure
        private final int windowSize;
        private final double failureThreshold; // percentage
        private volatile long openedAt = 0;
        private final long cooldownMs;

        public AdvancedCircuitBreaker(int windowSize, double failureThreshold, long cooldownMs) {
            this.results = new ConcurrentLinkedQueue<>();
            this.windowSize = windowSize;
            this.failureThreshold = failureThreshold;
            this.cooldownMs = cooldownMs;
        }

        public <T> T call(Callable<T> operation) throws Exception {
            checkState();

            if (state == State.OPEN) {
                throw new Exception("Circuit breaker is OPEN - refusing call");
            }

            try {
                T result = operation.call();
                recordSuccess();
                return result;
            } catch (Exception e) {
                recordFailure();
                throw e;
            }
        }

        private void checkState() {
            if (state == State.OPEN) {
                if (System.currentTimeMillis() - openedAt >= cooldownMs) {
                    state = State.HALF_OPEN;
                    results.clear();
                }
            }
        }

        private void recordSuccess() {
            addResult(true);
            if (state == State.HALF_OPEN && getSuccessRate() > (1.0 - failureThreshold)) {
                state = State.CLOSED;
            }
        }

        private void recordFailure() {
            addResult(false);
            if (getFailureRate() >= failureThreshold) {
                state = State.OPEN;
                openedAt = System.currentTimeMillis();
            }
        }

        private void addResult(boolean success) {
            if (results.size() >= windowSize) {
                results.poll();
            }
            results.offer(success);
        }

        private double getFailureRate() {
            if (results.isEmpty()) return 0.0;
            long failures = results.stream().filter(r -> !r).count();
            return (double) failures / results.size();
        }

        private double getSuccessRate() {
            return 1.0 - getFailureRate();
        }

        public State getState() {
            return state;
        }
    }

    // ============================================================================
    // 3. BULKHEAD PATTERN
    // ============================================================================

    /**
     * Bulkhead Pattern - Isolate resources to prevent cascading failures
     * Like compartments in a ship
     */
    static class BulkheadExecutor {
        private final Map<String, ExecutorService> pools;
        private final int poolSize;

        public BulkheadExecutor(int poolSize) {
            this.pools = new ConcurrentHashMap<>();
            this.poolSize = poolSize;
        }

        public <T> Future<T> submit(String serviceName, Callable<T> task) {
            ExecutorService pool = pools.computeIfAbsent(serviceName, 
                k -> Executors.newFixedThreadPool(poolSize));
            return pool.submit(task);
        }

        public void shutdown(String serviceName) {
            ExecutorService pool = pools.remove(serviceName);
            if (pool != null) {
                pool.shutdown();
            }
        }

        public void shutdownAll() {
            pools.values().forEach(ExecutorService::shutdown);
            pools.clear();
        }
    }

    /**
     * Semaphore-based Bulkhead
     */
    static class SemaphoreBulkhead {
        private final Map<String, Semaphore> semaphores;
        private final int maxConcurrent;

        public SemaphoreBulkhead(int maxConcurrent) {
            this.semaphores = new ConcurrentHashMap<>();
            this.maxConcurrent = maxConcurrent;
        }

        public <T> T execute(String resource, Supplier<T> operation) throws Exception {
            Semaphore semaphore = semaphores.computeIfAbsent(
                resource, k -> new Semaphore(maxConcurrent)
            );

            if (!semaphore.tryAcquire()) {
                throw new Exception("Resource " + resource + " is at capacity");
            }

            try {
                return operation.get();
            } finally {
                semaphore.release();
            }
        }

        public int getAvailablePermits(String resource) {
            Semaphore semaphore = semaphores.get(resource);
            return semaphore != null ? semaphore.availablePermits() : maxConcurrent;
        }
    }

    // ============================================================================
    // 4. EVENT SOURCING
    // ============================================================================

    /**
     * Event Sourcing - Store state changes as sequence of events
     */
    interface Event {
        String getEventId();
        String getAggregateId();
        long getTimestamp();
        String getEventType();
    }

    static class BaseEvent implements Event {
        private final String eventId;
        private final String aggregateId;
        private final long timestamp;
        private final String eventType;

        public BaseEvent(String aggregateId, String eventType) {
            this.eventId = UUID.randomUUID().toString();
            this.aggregateId = aggregateId;
            this.timestamp = System.currentTimeMillis();
            this.eventType = eventType;
        }

        public String getEventId() { return eventId; }
        public String getAggregateId() { return aggregateId; }
        public long getTimestamp() { return timestamp; }
        public String getEventType() { return eventType; }
    }

    /**
     * Event Store
     */
    static class EventStore {
        private final List<Event> events = new CopyOnWriteArrayList<>();
        private final Map<String, List<Event>> aggregateEvents = new ConcurrentHashMap<>();

        public void save(Event event) {
            events.add(event);
            aggregateEvents.computeIfAbsent(event.getAggregateId(), 
                k -> new CopyOnWriteArrayList<>()).add(event);
        }

        public List<Event> getEvents(String aggregateId) {
            return new ArrayList<>(aggregateEvents.getOrDefault(
                aggregateId, Collections.emptyList()
            ));
        }

        public List<Event> getEventsAfter(String aggregateId, long timestamp) {
            return getEvents(aggregateId).stream()
                .filter(e -> e.getTimestamp() > timestamp)
                .collect(java.util.stream.Collectors.toList());
        }

        public List<Event> getAllEvents() {
            return new ArrayList<>(events);
        }
    }

    /**
     * Account Example with Event Sourcing
     */
    static class AccountCreatedEvent extends BaseEvent {
        private final String owner;
        private final double initialBalance;

        public AccountCreatedEvent(String accountId, String owner, double initialBalance) {
            super(accountId, "AccountCreated");
            this.owner = owner;
            this.initialBalance = initialBalance;
        }

        public String getOwner() { return owner; }
        public double getInitialBalance() { return initialBalance; }
    }

    static class MoneyDepositedEvent extends BaseEvent {
        private final double amount;

        public MoneyDepositedEvent(String accountId, double amount) {
            super(accountId, "MoneyDeposited");
            this.amount = amount;
        }

        public double getAmount() { return amount; }
    }

    static class MoneyWithdrawnEvent extends BaseEvent {
        private final double amount;

        public MoneyWithdrawnEvent(String accountId, double amount) {
            super(accountId, "MoneyWithdrawn");
            this.amount = amount;
        }

        public double getAmount() { return amount; }
    }

    static class Account {
        private String accountId;
        private String owner;
        private double balance;

        public static Account reconstruct(List<Event> events) {
            Account account = new Account();
            for (Event event : events) {
                account.apply(event);
            }
            return account;
        }

        private void apply(Event event) {
            if (event instanceof AccountCreatedEvent) {
                AccountCreatedEvent e = (AccountCreatedEvent) event;
                this.accountId = e.getAggregateId();
                this.owner = e.getOwner();
                this.balance = e.getInitialBalance();
            } else if (event instanceof MoneyDepositedEvent) {
                MoneyDepositedEvent e = (MoneyDepositedEvent) event;
                this.balance += e.getAmount();
            } else if (event instanceof MoneyWithdrawnEvent) {
                MoneyWithdrawnEvent e = (MoneyWithdrawnEvent) event;
                this.balance -= e.getAmount();
            }
        }

        public double getBalance() { return balance; }
        public String getOwner() { return owner; }
    }

    // ============================================================================
    // 5. CQRS (Command Query Responsibility Segregation)
    // ============================================================================

    /**
     * CQRS - Separate read and write models
     */
    interface Command {
        String getCommandId();
        String getAggregateId();
    }

    interface Query {
        String getQueryId();
    }

    static class CreateAccountCommand implements Command {
        private final String commandId = UUID.randomUUID().toString();
        private final String accountId;
        private final String owner;
        private final double initialBalance;

        public CreateAccountCommand(String accountId, String owner, double initialBalance) {
            this.accountId = accountId;
            this.owner = owner;
            this.initialBalance = initialBalance;
        }

        public String getCommandId() { return commandId; }
        public String getAggregateId() { return accountId; }
        public String getOwner() { return owner; }
        public double getInitialBalance() { return initialBalance; }
    }

    static class DepositMoneyCommand implements Command {
        private final String commandId = UUID.randomUUID().toString();
        private final String accountId;
        private final double amount;

        public DepositMoneyCommand(String accountId, double amount) {
            this.accountId = accountId;
            this.amount = amount;
        }

        public String getCommandId() { return commandId; }
        public String getAggregateId() { return accountId; }
        public double getAmount() { return amount; }
    }

    static class GetAccountBalanceQuery implements Query {
        private final String queryId = UUID.randomUUID().toString();
        private final String accountId;

        public GetAccountBalanceQuery(String accountId) {
            this.accountId = accountId;
        }

        public String getQueryId() { return queryId; }
        public String getAccountId() { return accountId; }
    }

    /**
     * Command Handler
     */
    static class AccountCommandHandler {
        private final EventStore eventStore;

        public AccountCommandHandler(EventStore eventStore) {
            this.eventStore = eventStore;
        }

        public void handle(CreateAccountCommand command) {
            Event event = new AccountCreatedEvent(
                command.getAggregateId(),
                command.getOwner(),
                command.getInitialBalance()
            );
            eventStore.save(event);
        }

        public void handle(DepositMoneyCommand command) {
            Event event = new MoneyDepositedEvent(
                command.getAggregateId(),
                command.getAmount()
            );
            eventStore.save(event);
        }
    }

    /**
     * Query Handler with Read Model
     */
    static class AccountQueryHandler {
        private final EventStore eventStore;
        private final Map<String, Double> balanceCache = new ConcurrentHashMap<>();

        public AccountQueryHandler(EventStore eventStore) {
            this.eventStore = eventStore;
        }

        public double handle(GetAccountBalanceQuery query) {
            return balanceCache.computeIfAbsent(query.getAccountId(), accountId -> {
                List<Event> events = eventStore.getEvents(accountId);
                Account account = Account.reconstruct(events);
                return account.getBalance();
            });
        }

        public void updateCache(String accountId) {
            List<Event> events = eventStore.getEvents(accountId);
            Account account = Account.reconstruct(events);
            balanceCache.put(accountId, account.getBalance());
        }
    }

    // ============================================================================
    // 6. SAGA PATTERN
    // ============================================================================

    /**
     * Saga Pattern - Distributed transaction management
     * Choreography-based saga
     */
    interface SagaStep {
        void execute() throws Exception;
        void compensate() throws Exception;
    }

    static class Saga {
        private final List<SagaStep> steps = new ArrayList<>();
        private final Stack<SagaStep> executedSteps = new Stack<>();

        public void addStep(SagaStep step) {
            steps.add(step);
        }

        public void execute() throws Exception {
            try {
                for (SagaStep step : steps) {
                    step.execute();
                    executedSteps.push(step);
                }
            } catch (Exception e) {
                rollback();
                throw new Exception("Saga failed, rolled back", e);
            }
        }

        private void rollback() {
            while (!executedSteps.isEmpty()) {
                SagaStep step = executedSteps.pop();
                try {
                    step.compensate();
                } catch (Exception e) {
                    // Log compensation failure
                    System.err.println("Compensation failed: " + e.getMessage());
                }
            }
        }
    }

    /**
     * Order Saga Example
     */
    static class ReserveInventoryStep implements SagaStep {
        private final String orderId;
        private final String productId;
        private final int quantity;

        public ReserveInventoryStep(String orderId, String productId, int quantity) {
            this.orderId = orderId;
            this.productId = productId;
            this.quantity = quantity;
        }

        public void execute() throws Exception {
            System.out.println("Reserving " + quantity + " units of " + productId);
            // Actual inventory reservation logic
        }

        public void compensate() throws Exception {
            System.out.println("Releasing " + quantity + " units of " + productId);
            // Actual inventory release logic
        }
    }

    static class ProcessPaymentStep implements SagaStep {
        private final String orderId;
        private final double amount;
        private String transactionId;

        public ProcessPaymentStep(String orderId, double amount) {
            this.orderId = orderId;
            this.amount = amount;
        }

        public void execute() throws Exception {
            System.out.println("Processing payment of $" + amount);
            transactionId = UUID.randomUUID().toString();
            // Actual payment processing
        }

        public void compensate() throws Exception {
            System.out.println("Refunding payment transaction " + transactionId);
            // Actual refund logic
        }
    }

    static class CreateShipmentStep implements SagaStep {
        private final String orderId;
        private String shipmentId;

        public CreateShipmentStep(String orderId) {
            this.orderId = orderId;
        }

        public void execute() throws Exception {
            System.out.println("Creating shipment for order " + orderId);
            shipmentId = UUID.randomUUID().toString();
            // Actual shipment creation
        }

        public void compensate() throws Exception {
            System.out.println("Cancelling shipment " + shipmentId);
            // Actual shipment cancellation
        }
    }

    // ============================================================================
    // 7. API GATEWAY PATTERN
    // ============================================================================

    /**
     * API Gateway - Single entry point for all clients
     */
    static class APIGateway {
        private final Map<String, Function<Request, Response>> routes;
        private final RateLimiter rateLimiter;
        private final AuthenticationService authService;

        public APIGateway() {
            this.routes = new ConcurrentHashMap<>();
            this.rateLimiter = new RateLimiter(100, 1000); // 100 req/sec
            this.authService = new AuthenticationService();
        }

        public void registerRoute(String path, Function<Request, Response> handler) {
            routes.put(path, handler);
        }

        public Response handleRequest(Request request) {
            // Rate limiting
            if (!rateLimiter.allowRequest(request.getClientId())) {
                return new Response(429, "Too Many Requests");
            }

            // Authentication
            if (!authService.authenticate(request.getToken())) {
                return new Response(401, "Unauthorized");
            }

            // Routing
            Function<Request, Response> handler = routes.get(request.getPath());
            if (handler == null) {
                return new Response(404, "Not Found");
            }

            // Execute
            try {
                return handler.apply(request);
            } catch (Exception e) {
                return new Response(500, "Internal Server Error");
            }
        }
    }

    static class Request {
        private final String path;
        private final String method;
        private final String clientId;
        private final String token;
        private final Map<String, String> headers;
        private final String body;

        public Request(String path, String method, String clientId, String token) {
            this.path = path;
            this.method = method;
            this.clientId = clientId;
            this.token = token;
            this.headers = new HashMap<>();
            this.body = "";
        }

        public String getPath() { return path; }
        public String getMethod() { return method; }
        public String getClientId() { return clientId; }
        public String getToken() { return token; }
    }

    static class Response {
        private final int statusCode;
        private final String body;
        private final Map<String, String> headers;

        public Response(int statusCode, String body) {
            this.statusCode = statusCode;
            this.body = body;
            this.headers = new HashMap<>();
        }

        public int getStatusCode() { return statusCode; }
        public String getBody() { return body; }
    }

    static class RateLimiter {
        private final SlidingWindowRateLimiter limiter;

        public RateLimiter(long maxRequests, long windowMs) {
            this.limiter = new SlidingWindowRateLimiter(maxRequests, windowMs);
        }

        public boolean allowRequest(String clientId) {
            return limiter.allowRequest(clientId);
        }
    }

    static class AuthenticationService {
        private final Set<String> validTokens = ConcurrentHashMap.newKeySet();

        public AuthenticationService() {
            validTokens.add("valid-token-123");
        }

        public boolean authenticate(String token) {
            return validTokens.contains(token);
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) throws Exception {
        System.out.println("=== DAY 24: ADVANCED SYSTEM DESIGN PATTERNS ===\n");

        // Test Rate Limiting
        demonstrateRateLimiting();

        // Test Circuit Breaker
        demonstrateCircuitBreaker();

        // Test Bulkhead Pattern
        demonstrateBulkhead();

        // Test Event Sourcing
        demonstrateEventSourcing();

        // Test CQRS
        demonstrateCQRS();

        // Test Saga Pattern
        demonstrateSaga();

        // Test API Gateway
        demonstrateAPIGateway();
    }

    private static void demonstrateRateLimiting() {
        System.out.println("\n--- Rate Limiting Demo ---");
        TokenBucketRateLimiter limiter = new TokenBucketRateLimiter(5, 2);

        for (int i = 0; i < 10; i++) {
            boolean allowed = limiter.allowRequest();
            System.out.println("Request " + (i + 1) + ": " + 
                (allowed ? "ALLOWED" : "REJECTED") + 
                " (tokens: " + limiter.getAvailableTokens() + ")");
        }
    }

    private static void demonstrateCircuitBreaker() throws Exception {
        System.out.println("\n--- Circuit Breaker Demo ---");
        CircuitBreaker breaker = new CircuitBreaker(3, 2, 5000);

        // Simulate failures
        for (int i = 0; i < 5; i++) {
            try {
                breaker.execute(() -> {
                    if (Math.random() > 0.5) throw new RuntimeException("Service failed");
                    return "Success";
                });
                System.out.println("Call " + (i + 1) + ": SUCCESS (State: " + breaker.getState() + ")");
            } catch (Exception e) {
                System.out.println("Call " + (i + 1) + ": FAILED (State: " + breaker.getState() + ")");
            }
        }
    }

    private static void demonstrateBulkhead() {
        System.out.println("\n--- Bulkhead Pattern Demo ---");
        BulkheadExecutor bulkhead = new BulkheadExecutor(2);

        for (int i = 0; i < 5; i++) {
            final int taskNum = i;
            bulkhead.submit("service-a", () -> {
                System.out.println("Service A - Task " + taskNum + " executing");
                Thread.sleep(1000);
                return "Done " + taskNum;
            });
        }

        System.out.println("Submitted 5 tasks to service-a (pool size: 2)");
        bulkhead.shutdownAll();
    }

    private static void demonstrateEventSourcing() {
        System.out.println("\n--- Event Sourcing Demo ---");
        EventStore eventStore = new EventStore();

        String accountId = "ACC-001";
        eventStore.save(new AccountCreatedEvent(accountId, "John Doe", 1000.0));
        eventStore.save(new MoneyDepositedEvent(accountId, 500.0));
        eventStore.save(new MoneyWithdrawnEvent(accountId, 200.0));

        Account account = Account.reconstruct(eventStore.getEvents(accountId));
        System.out.println("Account owner: " + account.getOwner());
        System.out.println("Final balance: $" + account.getBalance());
        System.out.println("Total events: " + eventStore.getEvents(accountId).size());
    }

    private static void demonstrateCQRS() {
        System.out.println("\n--- CQRS Demo ---");
        EventStore eventStore = new EventStore();
        AccountCommandHandler commandHandler = new AccountCommandHandler(eventStore);
        AccountQueryHandler queryHandler = new AccountQueryHandler(eventStore);

        String accountId = "ACC-002";
        commandHandler.handle(new CreateAccountCommand(accountId, "Jane Smith", 2000.0));
        commandHandler.handle(new DepositMoneyCommand(accountId, 1000.0));

        queryHandler.updateCache(accountId);
        double balance = queryHandler.handle(new GetAccountBalanceQuery(accountId));
        System.out.println("Query result - Balance: $" + balance);
    }

    private static void demonstrateSaga() throws Exception {
        System.out.println("\n--- Saga Pattern Demo ---");
        Saga orderSaga = new Saga();
        orderSaga.addStep(new ReserveInventoryStep("ORDER-001", "PROD-123", 2));
        orderSaga.addStep(new ProcessPaymentStep("ORDER-001", 99.99));
        orderSaga.addStep(new CreateShipmentStep("ORDER-001"));

        try {
            orderSaga.execute();
            System.out.println("Saga completed successfully");
        } catch (Exception e) {
            System.out.println("Saga failed: " + e.getMessage());
        }
    }

    private static void demonstrateAPIGateway() {
        System.out.println("\n--- API Gateway Demo ---");
        APIGateway gateway = new APIGateway();

        gateway.registerRoute("/api/users", req -> new Response(200, "{\"users\": []}"));
        gateway.registerRoute("/api/products", req -> new Response(200, "{\"products\": []}"));

        Request request1 = new Request("/api/users", "GET", "client-123", "valid-token-123");
        Response response1 = gateway.handleRequest(request1);
        System.out.println("Response 1: " + response1.getStatusCode() + " - " + response1.getBody());

        Request request2 = new Request("/api/invalid", "GET", "client-123", "valid-token-123");
        Response response2 = gateway.handleRequest(request2);
        System.out.println("Response 2: " + response2.getStatusCode() + " - " + response2.getBody());
    }
}
