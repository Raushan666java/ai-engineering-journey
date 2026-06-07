/**
 * DAY 30: EVENT-DRIVEN ARCHITECTURE & MESSAGE PATTERNS
 * 
 * Complete implementation of event-driven microservices including:
 * - Event Bus / Message Broker
 * - Publish-Subscribe Pattern
 * - Event Sourcing
 * - CQRS (Command Query Responsibility Segregation)
 * - Saga Pattern for Distributed Transactions
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

// ============================================================================
// PATTERN 1: EVENT BUS / MESSAGE BROKER
// ============================================================================

/**
 * Event Bus - Publish-Subscribe messaging system
 * 
 * Pattern: Decouple services using asynchronous event messaging
 * Features:
 * - Topic-based routing
 * - Multiple subscribers per topic
 * - Async message delivery
 * - Message persistence (optional)
 * - Dead letter queue
 * 
 * Time Complexity: O(1) publish, O(m) delivery where m = subscribers
 * Space Complexity: O(n) where n = queued messages
 */
class EventBus {
    
    /**
     * Event message
     */
    static class Event {
        private final String id;
        private final String topic;
        private final String type;
        private final Object payload;
        private final Map<String, String> metadata;
        private final Instant timestamp;
        
        Event(String topic, String type, Object payload, Map<String, String> metadata) {
            this.id = UUID.randomUUID().toString();
            this.topic = topic;
            this.type = type;
            this.payload = payload;
            this.metadata = new HashMap<>(metadata);
            this.timestamp = Instant.now();
        }
        
        public String getId() { return id; }
        public String getTopic() { return topic; }
        public String getType() { return type; }
        public Object getPayload() { return payload; }
        public Map<String, String> getMetadata() { return new HashMap<>(metadata); }
        public Instant getTimestamp() { return timestamp; }
        
        @Override
        public String toString() {
            return String.format("Event[id=%s, topic=%s, type=%s, timestamp=%s]",
                id, topic, type, timestamp);
        }
    }
    
    /**
     * Event Handler
     */
    @FunctionalInterface
    interface EventHandler {
        void handle(Event event) throws Exception;
    }
    
    /**
     * Subscriber with filter
     */
    static class Subscriber {
        private final String id;
        private final String topic;
        private final Predicate<Event> filter;
        private final EventHandler handler;
        private final ExecutorService executor;
        
        Subscriber(String id, String topic, Predicate<Event> filter, EventHandler handler) {
            this.id = id;
            this.topic = topic;
            this.filter = filter;
            this.handler = handler;
            this.executor = Executors.newSingleThreadExecutor();
        }
        
        public String getId() { return id; }
        public String getTopic() { return topic; }
        
        public CompletableFuture<Void> deliver(Event event) {
            return CompletableFuture.runAsync(() -> {
                try {
                    if (filter.test(event)) {
                        handler.handle(event);
                    }
                } catch (Exception e) {
                    System.err.printf("[Subscriber:%s] Error handling event: %s%n", id, e.getMessage());
                    throw new RuntimeException(e);
                }
            }, executor);
        }
        
        public void shutdown() {
            executor.shutdown();
        }
    }
    
    // Event Bus storage
    private final Map<String, List<Subscriber>> subscribers;
    private final BlockingQueue<Event> messageQueue;
    private final ExecutorService publishExecutor;
    private final BlockingQueue<Event> deadLetterQueue;
    private final List<Event> eventStore; // For event sourcing
    private volatile boolean running;
    
    public EventBus() {
        this.subscribers = new ConcurrentHashMap<>();
        this.messageQueue = new LinkedBlockingQueue<>();
        this.publishExecutor = Executors.newFixedThreadPool(4);
        this.deadLetterQueue = new LinkedBlockingQueue<>();
        this.eventStore = new CopyOnWriteArrayList<>();
        this.running = true;
        
        // Start message processing
        startMessageProcessor();
    }
    
    /**
     * Subscribe to topic
     */
    public String subscribe(String topic, EventHandler handler) {
        return subscribe(topic, event -> true, handler);
    }
    
    /**
     * Subscribe with filter
     */
    public String subscribe(String topic, Predicate<Event> filter, EventHandler handler) {
        String subscriberId = UUID.randomUUID().toString();
        Subscriber subscriber = new Subscriber(subscriberId, topic, filter, handler);
        
        subscribers.computeIfAbsent(topic, k -> new CopyOnWriteArrayList<>())
                .add(subscriber);
        
        System.out.printf("[EventBus] Subscriber %s registered for topic: %s%n", 
            subscriberId.substring(0, 8), topic);
        
        return subscriberId;
    }
    
    /**
     * Unsubscribe
     */
    public void unsubscribe(String subscriberId) {
        subscribers.values().forEach(list -> 
            list.removeIf(sub -> {
                if (sub.getId().equals(subscriberId)) {
                    sub.shutdown();
                    return true;
                }
                return false;
            })
        );
    }
    
    /**
     * Publish event
     */
    public CompletableFuture<Void> publish(String topic, String type, Object payload) {
        return publish(topic, type, payload, Collections.emptyMap());
    }
    
    /**
     * Publish event with metadata
     */
    public CompletableFuture<Void> publish(String topic, String type, Object payload, 
                                          Map<String, String> metadata) {
        Event event = new Event(topic, type, payload, metadata);
        
        // Store event for event sourcing
        eventStore.add(event);
        
        // Add to queue for async processing
        return CompletableFuture.runAsync(() -> {
            try {
                messageQueue.put(event);
                System.out.printf("[EventBus] Published: %s%n", event);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new RuntimeException(e);
            }
        }, publishExecutor);
    }
    
    /**
     * Message processor - delivers events to subscribers
     */
    private void startMessageProcessor() {
        Thread processor = new Thread(() -> {
            while (running || !messageQueue.isEmpty()) {
                try {
                    Event event = messageQueue.poll(1, TimeUnit.SECONDS);
                    if (event != null) {
                        deliverEvent(event);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        });
        processor.setName("EventBus-Processor");
        processor.setDaemon(true);
        processor.start();
    }
    
    /**
     * Deliver event to subscribers
     */
    private void deliverEvent(Event event) {
        List<Subscriber> topicSubscribers = subscribers.getOrDefault(event.getTopic(), 
            Collections.emptyList());
        
        if (topicSubscribers.isEmpty()) {
            System.out.printf("[EventBus] No subscribers for topic: %s%n", event.getTopic());
            return;
        }
        
        List<CompletableFuture<Void>> futures = topicSubscribers.stream()
                .map(subscriber -> subscriber.deliver(event)
                    .exceptionally(error -> {
                        // Add to dead letter queue on failure
                        deadLetterQueue.offer(event);
                        return null;
                    }))
                .collect(Collectors.toList());
        
        // Wait for all deliveries
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
    }
    
    /**
     * Get event history (for event sourcing)
     */
    public List<Event> getEventHistory(String topic) {
        return eventStore.stream()
                .filter(event -> event.getTopic().equals(topic))
                .collect(Collectors.toList());
    }
    
    /**
     * Get dead letter queue
     */
    public List<Event> getDeadLetterQueue() {
        return new ArrayList<>(deadLetterQueue);
    }
    
    /**
     * Shutdown event bus
     */
    public void shutdown() {
        running = false;
        publishExecutor.shutdown();
        subscribers.values().forEach(list -> 
            list.forEach(Subscriber::shutdown)
        );
    }
}

// ============================================================================
// PATTERN 2: EVENT SOURCING
// ============================================================================

/**
 * Event Sourcing - Store all changes as sequence of events
 * 
 * Pattern: Persist domain events instead of current state
 * Benefits:
 * - Complete audit trail
 * - Temporal queries
 * - Event replay
 * - Debugging
 * 
 * Time Complexity: O(1) append event, O(n) rebuild state
 * Space Complexity: O(n) where n = number of events
 */
class EventSourcingRepository<T> {
    
    /**
     * Domain Event
     */
    static class DomainEvent {
        private final String aggregateId;
        private final String eventType;
        private final Object data;
        private final Instant timestamp;
        private final long version;
        
        DomainEvent(String aggregateId, String eventType, Object data, long version) {
            this.aggregateId = aggregateId;
            this.eventType = eventType;
            this.data = data;
            this.timestamp = Instant.now();
            this.version = version;
        }
        
        public String getAggregateId() { return aggregateId; }
        public String getEventType() { return eventType; }
        public Object getData() { return data; }
        public Instant getTimestamp() { return timestamp; }
        public long getVersion() { return version; }
    }
    
    /**
     * Event Store
     */
    private final Map<String, List<DomainEvent>> eventStore;
    private final Map<String, Long> versionTracker;
    
    public EventSourcingRepository() {
        this.eventStore = new ConcurrentHashMap<>();
        this.versionTracker = new ConcurrentHashMap<>();
    }
    
    /**
     * Append event
     */
    public void appendEvent(String aggregateId, String eventType, Object data) {
        long version = versionTracker.compute(aggregateId, (k, v) -> v == null ? 1 : v + 1);
        
        DomainEvent event = new DomainEvent(aggregateId, eventType, data, version);
        
        eventStore.computeIfAbsent(aggregateId, k -> new CopyOnWriteArrayList<>())
                .add(event);
        
        System.out.printf("[EventSourcing] Appended: %s v%d - %s%n", 
            aggregateId, version, eventType);
    }
    
    /**
     * Get all events for aggregate
     */
    public List<DomainEvent> getEvents(String aggregateId) {
        return new ArrayList<>(eventStore.getOrDefault(aggregateId, Collections.emptyList()));
    }
    
    /**
     * Get events after version
     */
    public List<DomainEvent> getEventsSince(String aggregateId, long version) {
        return eventStore.getOrDefault(aggregateId, Collections.emptyList())
                .stream()
                .filter(event -> event.getVersion() > version)
                .collect(Collectors.toList());
    }
    
    /**
     * Rebuild state from events
     */
    public T rebuildState(String aggregateId, BiFunction<T, DomainEvent, T> eventApplier, T initialState) {
        List<DomainEvent> events = getEvents(aggregateId);
        
        T state = initialState;
        for (DomainEvent event : events) {
            state = eventApplier.apply(state, event);
        }
        
        return state;
    }
    
    /**
     * Get state at specific point in time
     */
    public T getStateAt(String aggregateId, Instant pointInTime, 
                       BiFunction<T, DomainEvent, T> eventApplier, T initialState) {
        List<DomainEvent> events = eventStore.getOrDefault(aggregateId, Collections.emptyList())
                .stream()
                .filter(event -> event.getTimestamp().isBefore(pointInTime) || 
                               event.getTimestamp().equals(pointInTime))
                .collect(Collectors.toList());
        
        T state = initialState;
        for (DomainEvent event : events) {
            state = eventApplier.apply(state, event);
        }
        
        return state;
    }
}

// ============================================================================
// PATTERN 3: CQRS (Command Query Responsibility Segregation)
// ============================================================================

/**
 * CQRS - Separate read and write models
 * 
 * Pattern: Different models for commands (writes) and queries (reads)
 * Benefits:
 * - Independent scaling
 * - Optimized data models
 * - Better performance
 * 
 * Time Complexity: O(1) command, O(1) query (with proper indexing)
 * Space Complexity: O(n) for write model + O(n) for read model
 */
class CQRSSystem<T> {
    
    /**
     * Command - represents write operation
     */
    interface Command {
        String getCommandType();
        String getAggregateId();
    }
    
    /**
     * Query - represents read operation
     */
    interface Query<R> {
        String getQueryType();
        R execute();
    }
    
    /**
     * Command Handler
     */
    @FunctionalInterface
    interface CommandHandler<C extends Command> {
        void handle(C command);
    }
    
    /**
     * Query Handler
     */
    @FunctionalInterface
    interface QueryHandler<Q extends Query<R>, R> {
        R handle(Q query);
    }
    
    // Write model (event sourcing)
    private final EventSourcingRepository<T> writeModel;
    
    // Read model (optimized for queries)
    private final Map<String, T> readModel;
    
    // Handlers
    private final Map<String, CommandHandler> commandHandlers;
    private final Map<String, QueryHandler> queryHandlers;
    
    // Event bus for synchronization
    private final EventBus eventBus;
    
    public CQRSSystem(EventBus eventBus) {
        this.writeModel = new EventSourcingRepository<>();
        this.readModel = new ConcurrentHashMap<>();
        this.commandHandlers = new ConcurrentHashMap<>();
        this.queryHandlers = new ConcurrentHashMap<>();
        this.eventBus = eventBus;
        
        // Subscribe to events to update read model
        eventBus.subscribe("commands", this::updateReadModel);
    }
    
    /**
     * Register command handler
     */
    public <C extends Command> void registerCommandHandler(String commandType, CommandHandler<C> handler) {
        commandHandlers.put(commandType, handler);
    }
    
    /**
     * Register query handler
     */
    public <Q extends Query<R>, R> void registerQueryHandler(String queryType, QueryHandler<Q, R> handler) {
        queryHandlers.put(queryType, handler);
    }
    
    /**
     * Execute command
     */
    public CompletableFuture<Void> executeCommand(Command command) {
        return CompletableFuture.runAsync(() -> {
            CommandHandler handler = commandHandlers.get(command.getCommandType());
            if (handler == null) {
                throw new IllegalArgumentException("No handler for command: " + command.getCommandType());
            }
            
            // Execute command
            handler.handle(command);
            
            // Publish event
            eventBus.publish("commands", command.getCommandType(), command);
            
            System.out.printf("[CQRS] Executed command: %s%n", command.getCommandType());
        });
    }
    
    /**
     * Execute query
     */
    public <R> R executeQuery(Query<R> query) {
        QueryHandler<Query<R>, R> handler = queryHandlers.get(query.getQueryType());
        if (handler == null) {
            throw new IllegalArgumentException("No handler for query: " + query.getQueryType());
        }
        
        R result = handler.handle(query);
        System.out.printf("[CQRS] Executed query: %s%n", query.getQueryType());
        return result;
    }
    
    /**
     * Update read model from events
     */
    private void updateReadModel(EventBus.Event event) {
        // This would be customized based on your domain
        System.out.printf("[CQRS] Updating read model from event: %s%n", event.getType());
    }
    
    /**
     * Get write model (for event sourcing operations)
     */
    public EventSourcingRepository<T> getWriteModel() {
        return writeModel;
    }
    
    /**
     * Get read model (for queries)
     */
    public Map<String, T> getReadModel() {
        return new HashMap<>(readModel);
    }
}

// ============================================================================
// PATTERN 4: SAGA PATTERN (Distributed Transactions)
// ============================================================================

/**
 * Saga Pattern - Manage distributed transactions
 * 
 * Pattern: Break transaction into local transactions with compensating actions
 * Types:
 * - Choreography: Decentralized, event-driven
 * - Orchestration: Centralized coordinator
 * 
 * Time Complexity: O(n) where n = number of steps
 * Space Complexity: O(n) for transaction log
 */
class SagaOrchestrator {
    
    /**
     * Saga Step
     */
    static class SagaStep {
        private final String name;
        private final Supplier<CompletableFuture<Void>> action;
        private final Supplier<CompletableFuture<Void>> compensation;
        
        SagaStep(String name, 
                Supplier<CompletableFuture<Void>> action,
                Supplier<CompletableFuture<Void>> compensation) {
            this.name = name;
            this.action = action;
            this.compensation = compensation;
        }
        
        public String getName() { return name; }
        
        public CompletableFuture<Void> execute() {
            System.out.printf("[Saga] Executing step: %s%n", name);
            return action.get();
        }
        
        public CompletableFuture<Void> compensate() {
            System.out.printf("[Saga] Compensating step: %s%n", name);
            return compensation.get();
        }
    }
    
    /**
     * Saga Definition
     */
    static class Saga {
        private final String id;
        private final List<SagaStep> steps;
        private SagaStatus status;
        private int currentStep;
        
        Saga(String id) {
            this.id = id;
            this.steps = new ArrayList<>();
            this.status = SagaStatus.PENDING;
            this.currentStep = 0;
        }
        
        public String getId() { return id; }
        public SagaStatus getStatus() { return status; }
        public void setStatus(SagaStatus status) { this.status = status; }
        public int getCurrentStep() { return currentStep; }
        public void setCurrentStep(int step) { this.currentStep = step; }
        
        public Saga addStep(SagaStep step) {
            steps.add(step);
            return this;
        }
        
        public List<SagaStep> getSteps() {
            return new ArrayList<>(steps);
        }
    }
    
    enum SagaStatus {
        PENDING, RUNNING, COMPLETED, COMPENSATING, FAILED
    }
    
    /**
     * Saga execution log
     */
    static class SagaLog {
        private final String sagaId;
        private final List<String> executedSteps;
        private final List<String> compensatedSteps;
        private final Instant startedAt;
        private Instant completedAt;
        
        SagaLog(String sagaId) {
            this.sagaId = sagaId;
            this.executedSteps = new CopyOnWriteArrayList<>();
            this.compensatedSteps = new CopyOnWriteArrayList<>();
            this.startedAt = Instant.now();
        }
        
        public void recordExecution(String stepName) {
            executedSteps.add(stepName);
        }
        
        public void recordCompensation(String stepName) {
            compensatedSteps.add(stepName);
        }
        
        public void complete() {
            completedAt = Instant.now();
        }
        
        public List<String> getExecutedSteps() {
            return new ArrayList<>(executedSteps);
        }
    }
    
    // Saga storage
    private final Map<String, Saga> sagas;
    private final Map<String, SagaLog> logs;
    private final EventBus eventBus;
    
    public SagaOrchestrator(EventBus eventBus) {
        this.sagas = new ConcurrentHashMap<>();
        this.logs = new ConcurrentHashMap<>();
        this.eventBus = eventBus;
    }
    
    /**
     * Create new saga
     */
    public Saga createSaga(String sagaId) {
        Saga saga = new Saga(sagaId);
        sagas.put(sagaId, saga);
        logs.put(sagaId, new SagaLog(sagaId));
        return saga;
    }
    
    /**
     * Execute saga
     */
    public CompletableFuture<Void> execute(String sagaId) {
        Saga saga = sagas.get(sagaId);
        if (saga == null) {
            return CompletableFuture.failedFuture(
                new IllegalArgumentException("Saga not found: " + sagaId));
        }
        
        saga.setStatus(SagaStatus.RUNNING);
        SagaLog log = logs.get(sagaId);
        
        return executeSteps(saga, log)
                .thenRun(() -> {
                    saga.setStatus(SagaStatus.COMPLETED);
                    log.complete();
                    System.out.printf("[Saga:%s] Completed successfully%n", sagaId);
                    eventBus.publish("saga", "COMPLETED", sagaId);
                })
                .exceptionally(error -> {
                    System.err.printf("[Saga:%s] Failed: %s%n", sagaId, error.getMessage());
                    return compensate(saga, log).join();
                });
    }
    
    /**
     * Execute all steps sequentially
     */
    private CompletableFuture<Void> executeSteps(Saga saga, SagaLog log) {
        CompletableFuture<Void> chain = CompletableFuture.completedFuture(null);
        
        for (SagaStep step : saga.getSteps()) {
            chain = chain.thenCompose(v -> 
                step.execute().thenRun(() -> {
                    log.recordExecution(step.getName());
                    saga.setCurrentStep(saga.getCurrentStep() + 1);
                })
            );
        }
        
        return chain;
    }
    
    /**
     * Compensate executed steps in reverse order
     */
    private CompletableFuture<Void> compensate(Saga saga, SagaLog log) {
        saga.setStatus(SagaStatus.COMPENSATING);
        
        List<SagaStep> executedSteps = saga.getSteps()
                .subList(0, saga.getCurrentStep());
        Collections.reverse(executedSteps);
        
        CompletableFuture<Void> chain = CompletableFuture.completedFuture(null);
        
        for (SagaStep step : executedSteps) {
            chain = chain.thenCompose(v -> 
                step.compensate().thenRun(() -> 
                    log.recordCompensation(step.getName())
                )
            );
        }
        
        return chain.thenRun(() -> {
            saga.setStatus(SagaStatus.FAILED);
            log.complete();
            System.out.printf("[Saga:%s] Compensated%n", saga.getId());
            eventBus.publish("saga", "COMPENSATED", saga.getId());
        });
    }
    
    /**
     * Get saga status
     */
    public SagaStatus getStatus(String sagaId) {
        Saga saga = sagas.get(sagaId);
        return saga != null ? saga.getStatus() : null;
    }
    
    /**
     * Get saga log
     */
    public SagaLog getLog(String sagaId) {
        return logs.get(sagaId);
    }
}

// ============================================================================
// DEMONSTRATION
// ============================================================================

public class EventDrivenArchitecture {
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("EVENT-DRIVEN ARCHITECTURE PATTERNS DEMONSTRATION");
        System.out.println("=".repeat(80));
        
        // Demo 1: Event Bus
        demonstrateEventBus();
        
        Thread.sleep(2000);
        
        // Demo 2: Event Sourcing
        demonstrateEventSourcing();
        
        Thread.sleep(2000);
        
        // Demo 3: CQRS
        demonstrateCQRS();
        
        Thread.sleep(2000);
        
        // Demo 4: Saga Pattern
        demonstrateSaga();
    }
    
    private static void demonstrateEventBus() throws InterruptedException {
        System.out.println("\n--- DEMO 1: EVENT BUS ---\n");
        
        EventBus eventBus = new EventBus();
        
        // Subscribe to user events
        eventBus.subscribe("user.events", event -> {
            System.out.printf("[Subscriber:Email] Processing: %s%n", event.getType());
            // Send email notification
        });
        
        eventBus.subscribe("user.events", event -> {
            System.out.printf("[Subscriber:Analytics] Tracking: %s%n", event.getType());
            // Track in analytics
        });
        
        // Subscribe with filter
        eventBus.subscribe("order.events", 
            event -> event.getType().equals("ORDER_COMPLETED"),
            event -> {
                System.out.printf("[Subscriber:Shipping] Shipping order: %s%n", 
                    event.getPayload());
            }
        );
        
        // Publish events
        eventBus.publish("user.events", "USER_REGISTERED", 
            Map.of("userId", "123", "email", "user@example.com"));
        
        eventBus.publish("user.events", "USER_LOGGED_IN",
            Map.of("userId", "123"));
        
        eventBus.publish("order.events", "ORDER_CREATED",
            Map.of("orderId", "456"));
        
        eventBus.publish("order.events", "ORDER_COMPLETED",
            Map.of("orderId", "456"));
        
        Thread.sleep(1000); // Wait for async processing
        
        System.out.println("\nEvent History for user.events:");
        eventBus.getEventHistory("user.events").forEach(event ->
            System.out.println("  - " + event)
        );
        
        eventBus.shutdown();
    }
    
    private static void demonstrateEventSourcing() {
        System.out.println("\n--- DEMO 2: EVENT SOURCING ---\n");
        
        EventSourcingRepository<BankAccount> repository = new EventSourcingRepository<>();
        
        String accountId = "ACC-123";
        
        // Append events
        repository.appendEvent(accountId, "ACCOUNT_CREATED", 
            Map.of("owner", "John Doe", "initialBalance", 1000.0));
        repository.appendEvent(accountId, "DEPOSIT", 
            Map.of("amount", 500.0));
        repository.appendEvent(accountId, "WITHDRAWAL", 
            Map.of("amount", 200.0));
        repository.appendEvent(accountId, "DEPOSIT", 
            Map.of("amount", 300.0));
        
        // Rebuild current state
        BankAccount currentState = repository.rebuildState(accountId, 
            (account, event) -> {
                if (account == null) {
                    account = new BankAccount(accountId);
                }
                account.applyEvent(event);
                return account;
            },
            null
        );
        
        System.out.printf("\nCurrent Balance: $%.2f%n", currentState.getBalance());
        
        // Get state at specific time (e.g., 2 seconds ago)
        Instant twoSecondsAgo = Instant.now().minusSeconds(2);
        BankAccount pastState = repository.getStateAt(accountId, twoSecondsAgo,
            (account, event) -> {
                if (account == null) {
                    account = new BankAccount(accountId);
                }
                account.applyEvent(event);
                return account;
            },
            null
        );
        
        System.out.printf("Balance 2 seconds ago: $%.2f%n", 
            pastState != null ? pastState.getBalance() : 0.0);
    }
    
    private static void demonstrateCQRS() {
        System.out.println("\n--- DEMO 3: CQRS ---\n");
        
        EventBus eventBus = new EventBus();
        CQRSSystem<User> cqrs = new CQRSSystem<>(eventBus);
        
        // Register command handlers
        cqrs.registerCommandHandler("CREATE_USER", (CreateUserCommand cmd) -> {
            System.out.printf("Creating user: %s%n", cmd.getUsername());
            // Write to event store
        });
        
        cqrs.registerCommandHandler("UPDATE_EMAIL", (UpdateEmailCommand cmd) -> {
            System.out.printf("Updating email for: %s%n", cmd.getUserId());
            // Write to event store
        });
        
        // Register query handlers
        cqrs.registerQueryHandler("GET_USER", (GetUserQuery query) -> {
            System.out.printf("Querying user: %s%n", query.getUserId());
            // Read from optimized read model
            return new User(query.getUserId(), "John Doe", "john@example.com");
        });
        
        // Execute commands
        cqrs.executeCommand(new CreateUserCommand("user-1", "johndoe")).join();
        cqrs.executeCommand(new UpdateEmailCommand("user-1", "newemail@example.com")).join();
        
        // Execute queries
        User user = cqrs.executeQuery(new GetUserQuery("user-1"));
        System.out.printf("\nQueried User: %s%n", user);
        
        eventBus.shutdown();
    }
    
    private static void demonstrateSaga() {
        System.out.println("\n--- DEMO 4: SAGA PATTERN ---\n");
        
        EventBus eventBus = new EventBus();
        SagaOrchestrator orchestrator = new SagaOrchestrator(eventBus);
        
        // Create order placement saga
        SagaOrchestrator.Saga orderSaga = orchestrator.createSaga("order-saga-1");
        
        // Step 1: Reserve inventory
        orderSaga.addStep(new SagaOrchestrator.SagaStep(
            "Reserve Inventory",
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  → Reserving inventory...");
                // Simulate success
            }),
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  ← Releasing inventory reservation...");
            })
        ));
        
        // Step 2: Process payment
        orderSaga.addStep(new SagaOrchestrator.SagaStep(
            "Process Payment",
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  → Processing payment...");
                // Simulate failure
                throw new RuntimeException("Payment declined");
            }),
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  ← Refunding payment...");
            })
        ));
        
        // Step 3: Ship order
        orderSaga.addStep(new SagaOrchestrator.SagaStep(
            "Ship Order",
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  → Shipping order...");
            }),
            () -> CompletableFuture.runAsync(() -> {
                System.out.println("  ← Canceling shipment...");
            })
        ));
        
        // Execute saga
        System.out.println("Executing order saga...");
        orchestrator.execute("order-saga-1").join();
        
        // Check status
        System.out.printf("\nSaga Status: %s%n", orchestrator.getStatus("order-saga-1"));
        
        SagaOrchestrator.SagaLog log = orchestrator.getLog("order-saga-1");
        System.out.println("Executed Steps: " + log.getExecutedSteps());
        System.out.println("Compensated Steps: " + log.compensatedSteps);
        
        eventBus.shutdown();
    }
    
    // Helper classes for demos
    static class BankAccount {
        private final String id;
        private double balance;
        
        BankAccount(String id) {
            this.id = id;
            this.balance = 0.0;
        }
        
        void applyEvent(EventSourcingRepository.DomainEvent event) {
            Map<String, Object> data = (Map<String, Object>) event.getData();
            switch (event.getEventType()) {
                case "ACCOUNT_CREATED":
                    this.balance = (Double) data.get("initialBalance");
                    break;
                case "DEPOSIT":
                    this.balance += (Double) data.get("amount");
                    break;
                case "WITHDRAWAL":
                    this.balance -= (Double) data.get("amount");
                    break;
            }
        }
        
        double getBalance() { return balance; }
    }
    
    static class User {
        private final String id;
        private final String username;
        private final String email;
        
        User(String id, String username, String email) {
            this.id = id;
            this.username = username;
            this.email = email;
        }
        
        @Override
        public String toString() {
            return String.format("User[id=%s, username=%s, email=%s]", id, username, email);
        }
    }
    
    // CQRS Commands
    static class CreateUserCommand implements CQRSSystem.Command {
        private final String userId;
        private final String username;
        
        CreateUserCommand(String userId, String username) {
            this.userId = userId;
            this.username = username;
        }
        
        public String getCommandType() { return "CREATE_USER"; }
        public String getAggregateId() { return userId; }
        public String getUsername() { return username; }
    }
    
    static class UpdateEmailCommand implements CQRSSystem.Command {
        private final String userId;
        private final String newEmail;
        
        UpdateEmailCommand(String userId, String newEmail) {
            this.userId = userId;
            this.newEmail = newEmail;
        }
        
        public String getCommandType() { return "UPDATE_EMAIL"; }
        public String getAggregateId() { return userId; }
        public String getUserId() { return userId; }
    }
    
    // CQRS Queries
    static class GetUserQuery implements CQRSSystem.Query<User> {
        private final String userId;
        
        GetUserQuery(String userId) {
            this.userId = userId;
        }
        
        public String getQueryType() { return "GET_USER"; }
        public String getUserId() { return userId; }
        public User execute() { return null; } // Handled by query handler
    }
}
