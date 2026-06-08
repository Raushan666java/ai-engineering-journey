/**
 * DAY 32: EVENT-DRIVEN ARCHITECTURE & SAGA PATTERNS
 * Advanced Microservices Communication Patterns
 * 
 * Topics Covered:
 * 1. Event Sourcing Pattern
 * 2. CQRS (Command Query Responsibility Segregation)
 * 3. Saga Pattern - Orchestration
 * 4. Saga Pattern - Choreography
 * 5. Outbox Pattern
 * 6. Event Bus / Message Broker
 * 7. Idempotent Consumer
 * 8. Retry with Exponential Backoff
 * 
 * Real-World Applications:
 * - E-commerce order processing
 * - Banking transactions
 * - Uber ride coordination
 * - Event-driven microservices
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

public class EventDrivenPatterns {
    
    // ========================================================================
    // PATTERN 1: EVENT SOURCING
    // ========================================================================
    
    /**
     * Event Sourcing - Store state as sequence of events
     * 
     * Benefits:
     * - Complete audit trail
     * - Temporal queries (state at any point in time)
     * - Event replay
     * - Debugging and analytics
     * 
     * Used by: Banking systems, audit systems, CQRS implementations
     */
    static class EventSourcing {
        
        interface Event {
            String getAggregateId();
            Instant getTimestamp();
            long getVersion();
        }
        
        static class AccountCreatedEvent implements Event {
            String accountId;
            String owner;
            Instant timestamp;
            long version;
            
            AccountCreatedEvent(String accountId, String owner, long version) {
                this.accountId = accountId;
                this.owner = owner;
                this.timestamp = Instant.now();
                this.version = version;
            }
            
            public String getAggregateId() { return accountId; }
            public Instant getTimestamp() { return timestamp; }
            public long getVersion() { return version; }
            
            @Override
            public String toString() {
                return String.format("AccountCreated(id=%s, owner=%s, v=%d)", 
                    accountId, owner, version);
            }
        }
        
        static class MoneyDepositedEvent implements Event {
            String accountId;
            double amount;
            Instant timestamp;
            long version;
            
            MoneyDepositedEvent(String accountId, double amount, long version) {
                this.accountId = accountId;
                this.amount = amount;
                this.timestamp = Instant.now();
                this.version = version;
            }
            
            public String getAggregateId() { return accountId; }
            public Instant getTimestamp() { return timestamp; }
            public long getVersion() { return version; }
            
            @Override
            public String toString() {
                return String.format("MoneyDeposited(id=%s, amount=%.2f, v=%d)", 
                    accountId, amount, version);
            }
        }
        
        static class MoneyWithdrawnEvent implements Event {
            String accountId;
            double amount;
            Instant timestamp;
            long version;
            
            MoneyWithdrawnEvent(String accountId, double amount, long version) {
                this.accountId = accountId;
                this.amount = amount;
                this.timestamp = Instant.now();
                this.version = version;
            }
            
            public String getAggregateId() { return accountId; }
            public Instant getTimestamp() { return timestamp; }
            public long getVersion() { return version; }
            
            @Override
            public String toString() {
                return String.format("MoneyWithdrawn(id=%s, amount=%.2f, v=%d)", 
                    accountId, amount, version);
            }
        }
        
        /**
         * Event Store - Append-only storage for events
         */
        static class EventStore {
            // Store events: aggregateId -> list of events
            private Map<String, List<Event>> events = new ConcurrentHashMap<>();
            
            /**
             * Append event to store
             */
            public void append(Event event) {
                events.computeIfAbsent(event.getAggregateId(), 
                    k -> new CopyOnWriteArrayList<>()).add(event);
                
                System.out.printf("[EVENT STORE] Appended: %s%n", event);
            }
            
            /**
             * Get all events for aggregate
             */
            public List<Event> getEvents(String aggregateId) {
                return new ArrayList<>(
                    events.getOrDefault(aggregateId, Collections.emptyList()));
            }
            
            /**
             * Get events after specific version
             */
            public List<Event> getEventsAfterVersion(String aggregateId, long version) {
                return events.getOrDefault(aggregateId, Collections.emptyList())
                    .stream()
                    .filter(e -> e.getVersion() > version)
                    .collect(Collectors.toList());
            }
            
            /**
             * Get events in time range
             */
            public List<Event> getEventsBetween(String aggregateId, 
                                               Instant start, Instant end) {
                return events.getOrDefault(aggregateId, Collections.emptyList())
                    .stream()
                    .filter(e -> !e.getTimestamp().isBefore(start) && 
                               !e.getTimestamp().isAfter(end))
                    .collect(Collectors.toList());
            }
        }
        
        /**
         * Account Aggregate - Reconstruct state from events
         */
        static class BankAccount {
            String accountId;
            String owner;
            double balance;
            long version;
            
            BankAccount(String accountId) {
                this.accountId = accountId;
                this.version = 0;
            }
            
            /**
             * Rebuild state by replaying events
             */
            public void loadFromHistory(List<Event> history) {
                for (Event event : history) {
                    apply(event);
                }
            }
            
            /**
             * Apply event to update state
             */
            private void apply(Event event) {
                if (event instanceof AccountCreatedEvent) {
                    AccountCreatedEvent e = (AccountCreatedEvent) event;
                    this.owner = e.owner;
                    this.balance = 0;
                    this.version = e.version;
                    
                } else if (event instanceof MoneyDepositedEvent) {
                    MoneyDepositedEvent e = (MoneyDepositedEvent) event;
                    this.balance += e.amount;
                    this.version = e.version;
                    
                } else if (event instanceof MoneyWithdrawnEvent) {
                    MoneyWithdrawnEvent e = (MoneyWithdrawnEvent) event;
                    this.balance -= e.amount;
                    this.version = e.version;
                }
            }
            
            @Override
            public String toString() {
                return String.format("Account(id=%s, owner=%s, balance=%.2f, v=%d)", 
                    accountId, owner, balance, version);
            }
        }
    }
    
    // ========================================================================
    // PATTERN 2: CQRS (Command Query Responsibility Segregation)
    // ========================================================================
    
    /**
     * CQRS - Separate read and write models
     * 
     * Benefits:
     * - Optimize reads and writes independently
     * - Scale read and write sides separately
     * - Different data models for queries
     * - Event sourcing friendly
     * 
     * Used by: High-traffic systems, complex domains
     */
    static class CQRS {
        
        // ===== WRITE SIDE (Commands) =====
        
        interface Command {
            String getCommandId();
        }
        
        static class CreateOrderCommand implements Command {
            String commandId;
            String orderId;
            String customerId;
            List<String> items;
            
            CreateOrderCommand(String orderId, String customerId, List<String> items) {
                this.commandId = UUID.randomUUID().toString();
                this.orderId = orderId;
                this.customerId = customerId;
                this.items = items;
            }
            
            public String getCommandId() { return commandId; }
        }
        
        static class CancelOrderCommand implements Command {
            String commandId;
            String orderId;
            String reason;
            
            CancelOrderCommand(String orderId, String reason) {
                this.commandId = UUID.randomUUID().toString();
                this.orderId = orderId;
                this.reason = reason;
            }
            
            public String getCommandId() { return commandId; }
        }
        
        /**
         * Command Handler - Process commands and emit events
         */
        static class OrderCommandHandler {
            private EventSourcing.EventStore eventStore;
            
            OrderCommandHandler(EventSourcing.EventStore eventStore) {
                this.eventStore = eventStore;
            }
            
            public void handle(CreateOrderCommand cmd) {
                System.out.printf("[COMMAND] Creating order: %s%n", cmd.orderId);
                
                // Validate command (business logic)
                if (cmd.items.isEmpty()) {
                    throw new IllegalArgumentException("Order must have items");
                }
                
                // Emit event
                OrderCreatedEvent event = new OrderCreatedEvent(
                    cmd.orderId, cmd.customerId, cmd.items, 1);
                eventStore.append(event);
            }
            
            public void handle(CancelOrderCommand cmd) {
                System.out.printf("[COMMAND] Cancelling order: %s%n", cmd.orderId);
                
                // Load current state
                List<EventSourcing.Event> history = eventStore.getEvents(cmd.orderId);
                
                // Validate can cancel
                // ... business logic ...
                
                // Emit event
                OrderCancelledEvent event = new OrderCancelledEvent(
                    cmd.orderId, cmd.reason, history.size() + 1);
                eventStore.append(event);
            }
        }
        
        static class OrderCreatedEvent implements EventSourcing.Event {
            String orderId;
            String customerId;
            List<String> items;
            Instant timestamp;
            long version;
            
            OrderCreatedEvent(String orderId, String customerId, 
                            List<String> items, long version) {
                this.orderId = orderId;
                this.customerId = customerId;
                this.items = items;
                this.timestamp = Instant.now();
                this.version = version;
            }
            
            public String getAggregateId() { return orderId; }
            public Instant getTimestamp() { return timestamp; }
            public long getVersion() { return version; }
        }
        
        static class OrderCancelledEvent implements EventSourcing.Event {
            String orderId;
            String reason;
            Instant timestamp;
            long version;
            
            OrderCancelledEvent(String orderId, String reason, long version) {
                this.orderId = orderId;
                this.reason = reason;
                this.timestamp = Instant.now();
                this.version = version;
            }
            
            public String getAggregateId() { return orderId; }
            public Instant getTimestamp() { return timestamp; }
            public long getVersion() { return version; }
        }
        
        // ===== READ SIDE (Queries) =====
        
        /**
         * Read Model - Denormalized for fast queries
         */
        static class OrderReadModel {
            String orderId;
            String customerId;
            String status;
            List<String> items;
            Instant createdAt;
            Instant updatedAt;
            
            OrderReadModel(String orderId, String customerId, List<String> items) {
                this.orderId = orderId;
                this.customerId = customerId;
                this.items = items;
                this.status = "CREATED";
                this.createdAt = Instant.now();
                this.updatedAt = Instant.now();
            }
        }
        
        /**
         * Query Handler - Optimized for reads
         */
        static class OrderQueryHandler {
            // Denormalized read models
            private Map<String, OrderReadModel> orders = new ConcurrentHashMap<>();
            private Map<String, List<OrderReadModel>> customerOrders = new ConcurrentHashMap<>();
            
            /**
             * Project events into read model
             */
            public void project(EventSourcing.Event event) {
                if (event instanceof OrderCreatedEvent) {
                    OrderCreatedEvent e = (OrderCreatedEvent) event;
                    OrderReadModel model = new OrderReadModel(
                        e.orderId, e.customerId, e.items);
                    
                    orders.put(e.orderId, model);
                    customerOrders.computeIfAbsent(e.customerId, 
                        k -> new CopyOnWriteArrayList<>()).add(model);
                    
                    System.out.printf("[PROJECTION] Order created: %s%n", e.orderId);
                    
                } else if (event instanceof OrderCancelledEvent) {
                    OrderCancelledEvent e = (OrderCancelledEvent) event;
                    OrderReadModel model = orders.get(e.orderId);
                    if (model != null) {
                        model.status = "CANCELLED";
                        model.updatedAt = e.timestamp;
                        System.out.printf("[PROJECTION] Order cancelled: %s%n", e.orderId);
                    }
                }
            }
            
            /**
             * Query: Get order by ID
             */
            public OrderReadModel getOrder(String orderId) {
                return orders.get(orderId);
            }
            
            /**
             * Query: Get all orders for customer
             */
            public List<OrderReadModel> getOrdersByCustomer(String customerId) {
                return customerOrders.getOrDefault(customerId, Collections.emptyList());
            }
            
            /**
             * Query: Get orders by status
             */
            public List<OrderReadModel> getOrdersByStatus(String status) {
                return orders.values().stream()
                    .filter(o -> o.status.equals(status))
                    .collect(Collectors.toList());
            }
        }
    }
    
    // ========================================================================
    // PATTERN 3: SAGA PATTERN - ORCHESTRATION
    // ========================================================================
    
    /**
     * Saga Orchestration - Central coordinator manages saga
     * 
     * Benefits:
     * - Centralized logic
     * - Easy to understand flow
     * - Better error handling
     * 
     * Drawbacks:
     * - Single point of coordination
     * - Orchestrator becomes complex
     */
    static class SagaOrchestration {
        
        enum SagaState {
            STARTED, INVENTORY_RESERVED, PAYMENT_PROCESSED, 
            COMPLETED, FAILED, COMPENSATING, COMPENSATED
        }
        
        /**
         * Order Saga - Coordinates distributed transaction
         * Steps:
         * 1. Reserve inventory
         * 2. Process payment
         * 3. Confirm order
         * 
         * Compensations (if any step fails):
         * - Release inventory
         * - Refund payment
         */
        static class OrderSaga {
            String sagaId;
            String orderId;
            SagaState state;
            List<String> executedSteps;
            String failureReason;
            
            OrderSaga(String orderId) {
                this.sagaId = UUID.randomUUID().toString();
                this.orderId = orderId;
                this.state = SagaState.STARTED;
                this.executedSteps = new ArrayList<>();
            }
            
            @Override
            public String toString() {
                return String.format("Saga(id=%s, order=%s, state=%s, steps=%s)", 
                    sagaId, orderId, state, executedSteps);
            }
        }
        
        /**
         * Saga Orchestrator - Coordinates the saga
         */
        static class SagaOrchestrator {
            
            /**
             * Execute saga with automatic compensation on failure
             */
            public void executeSaga(OrderSaga saga) {
                System.out.printf("[SAGA] Starting: %s%n", saga.sagaId);
                
                try {
                    // Step 1: Reserve inventory
                    reserveInventory(saga);
                    saga.executedSteps.add("RESERVE_INVENTORY");
                    saga.state = SagaState.INVENTORY_RESERVED;
                    System.out.printf("[SAGA] Inventory reserved: %s%n", saga.orderId);
                    
                    // Step 2: Process payment
                    processPayment(saga);
                    saga.executedSteps.add("PROCESS_PAYMENT");
                    saga.state = SagaState.PAYMENT_PROCESSED;
                    System.out.printf("[SAGA] Payment processed: %s%n", saga.orderId);
                    
                    // Step 3: Confirm order
                    confirmOrder(saga);
                    saga.executedSteps.add("CONFIRM_ORDER");
                    saga.state = SagaState.COMPLETED;
                    System.out.printf("[SAGA] Order confirmed: %s%n", saga.orderId);
                    
                } catch (Exception e) {
                    saga.state = SagaState.FAILED;
                    saga.failureReason = e.getMessage();
                    System.out.printf("[SAGA] Failed: %s - %s%n", saga.orderId, e.getMessage());
                    
                    // Execute compensating transactions
                    compensate(saga);
                }
            }
            
            private void reserveInventory(OrderSaga saga) throws Exception {
                // Simulate inventory service call
                Thread.sleep(10);
                
                // Simulate occasional failure
                if (ThreadLocalRandom.current().nextInt(100) < 10) {
                    throw new Exception("Inventory not available");
                }
            }
            
            private void processPayment(OrderSaga saga) throws Exception {
                // Simulate payment service call
                Thread.sleep(10);
                
                // Simulate occasional failure
                if (ThreadLocalRandom.current().nextInt(100) < 10) {
                    throw new Exception("Payment declined");
                }
            }
            
            private void confirmOrder(OrderSaga saga) throws Exception {
                // Simulate order service call
                Thread.sleep(10);
            }
            
            /**
             * Compensate - Rollback executed steps
             */
            private void compensate(OrderSaga saga) {
                System.out.printf("[SAGA] Compensating: %s%n", saga.sagaId);
                saga.state = SagaState.COMPENSATING;
                
                // Compensate in reverse order
                List<String> steps = new ArrayList<>(saga.executedSteps);
                Collections.reverse(steps);
                
                for (String step : steps) {
                    try {
                        switch (step) {
                            case "RESERVE_INVENTORY":
                                releaseInventory(saga);
                                System.out.printf("[SAGA] Inventory released: %s%n", saga.orderId);
                                break;
                            case "PROCESS_PAYMENT":
                                refundPayment(saga);
                                System.out.printf("[SAGA] Payment refunded: %s%n", saga.orderId);
                                break;
                        }
                    } catch (Exception e) {
                        System.out.printf("[SAGA] Compensation failed: %s - %s%n", 
                            step, e.getMessage());
                    }
                }
                
                saga.state = SagaState.COMPENSATED;
                System.out.printf("[SAGA] Compensated: %s%n", saga.sagaId);
            }
            
            private void releaseInventory(OrderSaga saga) throws Exception {
                Thread.sleep(10);
                // Release inventory
            }
            
            private void refundPayment(OrderSaga saga) throws Exception {
                Thread.sleep(10);
                // Refund payment
            }
        }
    }
    
    // ========================================================================
    // PATTERN 4: SAGA PATTERN - CHOREOGRAPHY
    // ========================================================================
    
    /**
     * Saga Choreography - Services coordinate via events
     * 
     * Benefits:
     * - Decentralized (no single orchestrator)
     * - Services are independent
     * - Better scalability
     * 
     * Drawbacks:
     * - Harder to understand overall flow
     * - Difficult to track saga state
     */
    static class SagaChoreography {
        
        /**
         * Event Bus for service coordination
         */
        static class EventBus {
            private Map<Class<?>, List<Consumer<Object>>> subscribers = new ConcurrentHashMap<>();
            
            public <T> void subscribe(Class<T> eventType, Consumer<T> handler) {
                subscribers.computeIfAbsent(eventType, k -> new CopyOnWriteArrayList<>())
                    .add((Consumer<Object>) handler);
            }
            
            public void publish(Object event) {
                System.out.printf("[EVENT BUS] Publishing: %s%n", 
                    event.getClass().getSimpleName());
                
                List<Consumer<Object>> handlers = subscribers.get(event.getClass());
                if (handlers != null) {
                    handlers.forEach(handler -> {
                        try {
                            handler.accept(event);
                        } catch (Exception e) {
                            System.out.printf("[EVENT BUS] Handler error: %s%n", e.getMessage());
                        }
                    });
                }
            }
        }
        
        // Events
        static class OrderPlacedEvent {
            String orderId;
            String customerId;
            double amount;
            
            OrderPlacedEvent(String orderId, String customerId, double amount) {
                this.orderId = orderId;
                this.customerId = customerId;
                this.amount = amount;
            }
        }
        
        static class InventoryReservedEvent {
            String orderId;
            InventoryReservedEvent(String orderId) { this.orderId = orderId; }
        }
        
        static class InventoryReservationFailedEvent {
            String orderId;
            String reason;
            InventoryReservationFailedEvent(String orderId, String reason) {
                this.orderId = orderId;
                this.reason = reason;
            }
        }
        
        static class PaymentProcessedEvent {
            String orderId;
            PaymentProcessedEvent(String orderId) { this.orderId = orderId; }
        }
        
        static class PaymentFailedEvent {
            String orderId;
            String reason;
            PaymentFailedEvent(String orderId, String reason) {
                this.orderId = orderId;
                this.reason = reason;
            }
        }
        
        static class OrderCompletedEvent {
            String orderId;
            OrderCompletedEvent(String orderId) { this.orderId = orderId; }
        }
        
        static class OrderCancelledEvent {
            String orderId;
            String reason;
            OrderCancelledEvent(String orderId, String reason) {
                this.orderId = orderId;
                this.reason = reason;
            }
        }
        
        /**
         * Order Service - Initiates saga
         */
        static class OrderService {
            private EventBus eventBus;
            
            OrderService(EventBus eventBus) {
                this.eventBus = eventBus;
                
                // Subscribe to events
                eventBus.subscribe(PaymentProcessedEvent.class, this::onPaymentProcessed);
                eventBus.subscribe(InventoryReservationFailedEvent.class, this::onInventoryFailed);
                eventBus.subscribe(PaymentFailedEvent.class, this::onPaymentFailed);
            }
            
            public void placeOrder(String orderId, String customerId, double amount) {
                System.out.printf("[ORDER SERVICE] Placing order: %s%n", orderId);
                eventBus.publish(new OrderPlacedEvent(orderId, customerId, amount));
            }
            
            private void onPaymentProcessed(PaymentProcessedEvent event) {
                System.out.printf("[ORDER SERVICE] Order completed: %s%n", event.orderId);
                eventBus.publish(new OrderCompletedEvent(event.orderId));
            }
            
            private void onInventoryFailed(InventoryReservationFailedEvent event) {
                System.out.printf("[ORDER SERVICE] Order cancelled (inventory): %s%n", event.orderId);
                eventBus.publish(new OrderCancelledEvent(event.orderId, event.reason));
            }
            
            private void onPaymentFailed(PaymentFailedEvent event) {
                System.out.printf("[ORDER SERVICE] Order cancelled (payment): %s%n", event.orderId);
                eventBus.publish(new OrderCancelledEvent(event.orderId, event.reason));
            }
        }
        
        /**
         * Inventory Service - Reserves inventory
         */
        static class InventoryService {
            private EventBus eventBus;
            
            InventoryService(EventBus eventBus) {
                this.eventBus = eventBus;
                eventBus.subscribe(OrderPlacedEvent.class, this::onOrderPlaced);
                eventBus.subscribe(OrderCancelledEvent.class, this::onOrderCancelled);
            }
            
            private void onOrderPlaced(OrderPlacedEvent event) {
                System.out.printf("[INVENTORY SERVICE] Reserving inventory: %s%n", event.orderId);
                
                // Simulate inventory check
                boolean available = ThreadLocalRandom.current().nextInt(100) < 90;
                
                if (available) {
                    eventBus.publish(new InventoryReservedEvent(event.orderId));
                } else {
                    eventBus.publish(new InventoryReservationFailedEvent(
                        event.orderId, "Out of stock"));
                }
            }
            
            private void onOrderCancelled(OrderCancelledEvent event) {
                System.out.printf("[INVENTORY SERVICE] Releasing inventory: %s%n", event.orderId);
                // Release reserved inventory
            }
        }
        
        /**
         * Payment Service - Processes payment
         */
        static class PaymentService {
            private EventBus eventBus;
            
            PaymentService(EventBus eventBus) {
                this.eventBus = eventBus;
                eventBus.subscribe(InventoryReservedEvent.class, this::onInventoryReserved);
                eventBus.subscribe(OrderCancelledEvent.class, this::onOrderCancelled);
            }
            
            private void onInventoryReserved(InventoryReservedEvent event) {
                System.out.printf("[PAYMENT SERVICE] Processing payment: %s%n", event.orderId);
                
                // Simulate payment processing
                boolean success = ThreadLocalRandom.current().nextInt(100) < 95;
                
                if (success) {
                    eventBus.publish(new PaymentProcessedEvent(event.orderId));
                } else {
                    eventBus.publish(new PaymentFailedEvent(event.orderId, "Insufficient funds"));
                }
            }
            
            private void onOrderCancelled(OrderCancelledEvent event) {
                System.out.printf("[PAYMENT SERVICE] Refunding payment: %s%n", event.orderId);
                // Refund payment if processed
            }
        }
    }
    
    // ========================================================================
    // PATTERN 5: OUTBOX PATTERN
    // ========================================================================
    
    /**
     * Outbox Pattern - Ensure reliable event publishing
     * 
     * Problem: Dual write problem (DB + Message broker)
     * Solution: Write to DB and outbox table in same transaction
     * 
     * Benefits:
     * - Guaranteed event delivery
     * - Atomicity between state change and event
     * - No lost events
     */
    static class OutboxPattern {
        
        static class OutboxMessage {
            String id;
            String aggregateId;
            String eventType;
            String payload;
            Instant createdAt;
            boolean published;
            Instant publishedAt;
            
            OutboxMessage(String aggregateId, String eventType, String payload) {
                this.id = UUID.randomUUID().toString();
                this.aggregateId = aggregateId;
                this.eventType = eventType;
                this.payload = payload;
                this.createdAt = Instant.now();
                this.published = false;
            }
        }
        
        /**
         * Outbox Table (simulated)
         */
        static class OutboxTable {
            private List<OutboxMessage> messages = new CopyOnWriteArrayList<>();
            
            public void insert(OutboxMessage message) {
                messages.add(message);
                System.out.printf("[OUTBOX] Inserted: %s - %s%n", 
                    message.eventType, message.aggregateId);
            }
            
            public List<OutboxMessage> getUnpublished() {
                return messages.stream()
                    .filter(m -> !m.published)
                    .collect(Collectors.toList());
            }
            
            public void markPublished(String messageId) {
                messages.stream()
                    .filter(m -> m.id.equals(messageId))
                    .forEach(m -> {
                        m.published = true;
                        m.publishedAt = Instant.now();
                    });
            }
        }
        
        /**
         * Service that uses outbox pattern
         */
        static class OrderService {
            private OutboxTable outbox;
            
            OrderService(OutboxTable outbox) {
                this.outbox = outbox;
            }
            
            /**
             * Create order - Atomic operation
             */
            public void createOrder(String orderId, String customerId) {
                // BEGIN TRANSACTION
                
                // 1. Save order to database
                System.out.printf("[ORDER SERVICE] Saving order: %s%n", orderId);
                // database.save(order);
                
                // 2. Insert event into outbox (same transaction)
                OutboxMessage message = new OutboxMessage(
                    orderId,
                    "OrderCreated",
                    String.format("{\"orderId\":\"%s\",\"customerId\":\"%s\"}", 
                        orderId, customerId)
                );
                outbox.insert(message);
                
                // COMMIT TRANSACTION
                // Both DB write and outbox write are atomic!
            }
        }
        
        /**
         * Outbox Publisher - Polls and publishes events
         */
        static class OutboxPublisher {
            private OutboxTable outbox;
            private SagaChoreography.EventBus eventBus;
            private ScheduledExecutorService scheduler;
            
            OutboxPublisher(OutboxTable outbox, SagaChoreography.EventBus eventBus) {
                this.outbox = outbox;
                this.eventBus = eventBus;
                this.scheduler = Executors.newScheduledThreadPool(1);
            }
            
            /**
             * Start polling for unpublished messages
             */
            public void start() {
                scheduler.scheduleAtFixedRate(
                    this::publishPendingMessages,
                    0, 1, TimeUnit.SECONDS
                );
            }
            
            private void publishPendingMessages() {
                List<OutboxMessage> unpublished = outbox.getUnpublished();
                
                for (OutboxMessage message : unpublished) {
                    try {
                        // Publish to event bus / message broker
                        System.out.printf("[OUTBOX PUBLISHER] Publishing: %s%n", 
                            message.eventType);
                        
                        // Simulate publishing to Kafka/RabbitMQ
                        Thread.sleep(10);
                        
                        // Mark as published
                        outbox.markPublished(message.id);
                        
                    } catch (Exception e) {
                        System.out.printf("[OUTBOX PUBLISHER] Failed: %s%n", e.getMessage());
                        // Will retry on next poll
                    }
                }
            }
            
            public void stop() {
                scheduler.shutdown();
            }
        }
    }
    
    // ========================================================================
    // DEMONSTRATIONS
    // ========================================================================
    
    public static void demonstrateEventSourcing() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 1: EVENT SOURCING");
        System.out.println("=".repeat(80));
        
        EventSourcing.EventStore eventStore = new EventSourcing.EventStore();
        
        // Create account and perform operations
        String accountId = "ACC-001";
        
        eventStore.append(new EventSourcing.AccountCreatedEvent(accountId, "Alice", 1));
        eventStore.append(new EventSourcing.MoneyDepositedEvent(accountId, 1000.0, 2));
        eventStore.append(new EventSourcing.MoneyWithdrawnEvent(accountId, 200.0, 3));
        eventStore.append(new EventSourcing.MoneyDepositedEvent(accountId, 500.0, 4));
        
        // Rebuild state from events
        EventSourcing.BankAccount account = new EventSourcing.BankAccount(accountId);
        List<EventSourcing.Event> history = eventStore.getEvents(accountId);
        account.loadFromHistory(history);
        
        System.out.println("\nReconstructed state: " + account);
        System.out.println("Event count: " + history.size());
    }
    
    public static void demonstrateCQRS() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 2: CQRS");
        System.out.println("=".repeat(80));
        
        EventSourcing.EventStore eventStore = new EventSourcing.EventStore();
        CQRS.OrderCommandHandler commandHandler = new CQRS.OrderCommandHandler(eventStore);
        CQRS.OrderQueryHandler queryHandler = new CQRS.OrderQueryHandler();
        
        // Execute commands
        CQRS.CreateOrderCommand cmd1 = new CQRS.CreateOrderCommand(
            "ORD-001", "CUST-001", Arrays.asList("Item1", "Item2"));
        commandHandler.handle(cmd1);
        
        CQRS.CreateOrderCommand cmd2 = new CQRS.CreateOrderCommand(
            "ORD-002", "CUST-001", Arrays.asList("Item3"));
        commandHandler.handle(cmd2);
        
        // Project events to read model
        eventStore.getEvents("ORD-001").forEach(queryHandler::project);
        eventStore.getEvents("ORD-002").forEach(queryHandler::project);
        
        // Execute queries
        System.out.println("\n--- Queries ---");
        CQRS.OrderReadModel order = queryHandler.getOrder("ORD-001");
        System.out.println("Order: " + order.orderId + " - " + order.status);
        
        List<CQRS.OrderReadModel> customerOrders = 
            queryHandler.getOrdersByCustomer("CUST-001");
        System.out.println("Customer orders: " + customerOrders.size());
    }
    
    public static void demonstrateSagaOrchestration() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 3: SAGA ORCHESTRATION");
        System.out.println("=".repeat(80));
        
        SagaOrchestration.SagaOrchestrator orchestrator = 
            new SagaOrchestration.SagaOrchestrator();
        
        // Execute multiple sagas
        for (int i = 1; i <= 5; i++) {
            SagaOrchestration.OrderSaga saga = 
                new SagaOrchestration.OrderSaga("ORD-" + i);
            orchestrator.executeSaga(saga);
            System.out.println("Final state: " + saga);
            System.out.println();
        }
    }
    
    public static void demonstrateSagaChoreography() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 4: SAGA CHOREOGRAPHY");
        System.out.println("=".repeat(80));
        
        SagaChoreography.EventBus eventBus = new SagaChoreography.EventBus();
        
        // Initialize services
        new SagaChoreography.OrderService(eventBus);
        new SagaChoreography.InventoryService(eventBus);
        new SagaChoreography.PaymentService(eventBus);
        
        SagaChoreography.OrderService orderService = 
            new SagaChoreography.OrderService(eventBus);
        
        // Place orders
        for (int i = 1; i <= 3; i++) {
            System.out.println("\n--- Order " + i + " ---");
            orderService.placeOrder("ORD-" + i, "CUST-001", 100.0);
            Thread.sleep(100); // Allow events to propagate
        }
    }
    
    public static void demonstrateOutboxPattern() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 5: OUTBOX PATTERN");
        System.out.println("=".repeat(80));
        
        OutboxPattern.OutboxTable outbox = new OutboxPattern.OutboxTable();
        SagaChoreography.EventBus eventBus = new SagaChoreography.EventBus();
        
        OutboxPattern.OrderService orderService = new OutboxPattern.OrderService(outbox);
        OutboxPattern.OutboxPublisher publisher = 
            new OutboxPattern.OutboxPublisher(outbox, eventBus);
        
        // Start publisher
        publisher.start();
        
        // Create orders
        orderService.createOrder("ORD-001", "CUST-001");
        orderService.createOrder("ORD-002", "CUST-002");
        orderService.createOrder("ORD-003", "CUST-003");
        
        // Wait for publishing
        Thread.sleep(2000);
        
        publisher.stop();
        
        System.out.println("\nAll messages published via outbox pattern");
    }
    
    // ========================================================================
    // MAIN
    // ========================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 32: EVENT-DRIVEN ARCHITECTURE & SAGA PATTERNS");
        System.out.println("=".repeat(80));
        
        demonstrateEventSourcing();
        
        demonstrateCQRS();
        
        demonstrateSagaOrchestration();
        
        demonstrateSagaChoreography();
        
        demonstrateOutboxPattern();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("ALL PATTERNS DEMONSTRATED SUCCESSFULLY");
        System.out.println("=".repeat(80));
    }
}
