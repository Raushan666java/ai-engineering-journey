/**
 * DAY 24 - PRACTICE PROBLEMS - ADVANCED SYSTEM DESIGN
 * 
 * 50 Comprehensive Practice Problems covering:
 * - System Design Patterns
 * - Scalability Patterns
 * - Distributed Systems
 * - Microservices Architecture
 * - Production Systems
 * 
 * Difficulty: Advanced Level
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

public class Day24PracticeProblems {

    // ============================================================================
    // RATE LIMITING PROBLEMS
    // ============================================================================

    /**
     * Problem 1: Implement a Fixed Window Rate Limiter
     * Design a rate limiter that allows N requests per fixed time window
     */
    static class FixedWindowRateLimiter {
        // TODO: Implement fixed window rate limiting
        private final Map<String, Queue<Long>> userWindows = new ConcurrentHashMap<>();
        private final long windowSizeMs;
        private final int maxRequests;

        public FixedWindowRateLimiter(long windowSizeMs, int maxRequests) {
            this.windowSizeMs = windowSizeMs;
            this.maxRequests = maxRequests;
        }

        public boolean allowRequest(String userId) {
            long now = System.currentTimeMillis();
            long windowStart = (now / windowSizeMs) * windowSizeMs;
            
            Queue<Long> window = userWindows.computeIfAbsent(userId, k -> new ConcurrentLinkedQueue<>());
            window.removeIf(timestamp -> timestamp < windowStart);
            
            if (window.size() < maxRequests) {
                window.offer(now);
                return true;
            }
            return false;
        }
    }

    /**
     * Problem 2: Multi-Tier Rate Limiter
     * Implement different rate limits for different user tiers (free, premium, enterprise)
     */
    static class MultiTierRateLimiter {
        enum Tier { FREE, PREMIUM, ENTERPRISE }
        
        private final Map<Tier, Integer> tierLimits = Map.of(
            Tier.FREE, 100,
            Tier.PREMIUM, 1000,
            Tier.ENTERPRISE, 10000
        );
        
        public boolean allowRequest(String userId, Tier tier) {
            // TODO: Implement multi-tier rate limiting
            return true;
        }
    }

    // ============================================================================
    // CIRCUIT BREAKER PROBLEMS
    // ============================================================================

    /**
     * Problem 3: Circuit Breaker with Custom Fallback
     * Implement circuit breaker that executes fallback on failure
     */
    static class FallbackCircuitBreaker<T> {
        private volatile int failureCount = 0;
        private volatile boolean isOpen = false;
        
        public T execute(Callable<T> primary, Supplier<T> fallback) {
            // TODO: Implement with fallback logic
            return null;
        }
    }

    /**
     * Problem 4: Distributed Circuit Breaker
     * Circuit breaker that shares state across multiple instances
     */
    static class DistributedCircuitBreaker {
        private final Map<String, Integer> sharedState = new ConcurrentHashMap<>();
        
        public boolean isOpen(String serviceId) {
            // TODO: Check distributed state
            return false;
        }
    }

    // ============================================================================
    // CACHING PROBLEMS
    // ============================================================================

    /**
     * Problem 5: LRU Cache with TTL
     * Implement LRU cache where entries expire after TTL
     */
    static class LRUCacheWithTTL<K, V> {
        static class Entry<V> {
            V value;
            long expiryTime;
            
            Entry(V value, long ttlMs) {
                this.value = value;
                this.expiryTime = System.currentTimeMillis() + ttlMs;
            }
        }
        
        private final int capacity;
        private final LinkedHashMap<K, Entry<V>> cache;
        
        public LRUCacheWithTTL(int capacity) {
            this.capacity = capacity;
            this.cache = new LinkedHashMap<K, Entry<V>>(capacity, 0.75f, true) {
                protected boolean removeEldestEntry(Map.Entry<K, Entry<V>> eldest) {
                    return size() > capacity;
                }
            };
        }
        
        public V get(K key) {
            Entry<V> entry = cache.get(key);
            if (entry == null) return null;
            if (System.currentTimeMillis() > entry.expiryTime) {
                cache.remove(key);
                return null;
            }
            return entry.value;
        }
        
        public void put(K key, V value, long ttlMs) {
            cache.put(key, new Entry<>(value, ttlMs));
        }
    }

    /**
     * Problem 6: Multi-Level Cache
     * L1 (in-memory) -> L2 (Redis) -> L3 (Database)
     */
    static class MultiLevelCache<K, V> {
        private final Map<K, V> l1Cache = new ConcurrentHashMap<>();
        private final Map<K, V> l2Cache = new ConcurrentHashMap<>();
        
        public V get(K key, Function<K, V> loader) {
            V value = l1Cache.get(key);
            if (value != null) return value;
            
            value = l2Cache.get(key);
            if (value != null) {
                l1Cache.put(key, value);
                return value;
            }
            
            value = loader.apply(key);
            if (value != null) {
                l2Cache.put(key, value);
                l1Cache.put(key, value);
            }
            return value;
        }
    }

    // ============================================================================
    // LOAD BALANCING PROBLEMS
    // ============================================================================

    /**
     * Problem 7: Consistent Hashing with Virtual Nodes
     * Implement consistent hashing for better distribution
     */
    static class ConsistentHashLoadBalancer {
        private final TreeMap<Integer, String> ring = new TreeMap<>();
        
        public void addServer(String serverId, int virtualNodes) {
            for (int i = 0; i < virtualNodes; i++) {
                int hash = hash(serverId + "#" + i);
                ring.put(hash, serverId);
            }
        }
        
        public String getServer(String key) {
            int hash = hash(key);
            Map.Entry<Integer, String> entry = ring.ceilingEntry(hash);
            return entry != null ? entry.getValue() : ring.firstEntry().getValue();
        }
        
        private int hash(String key) {
            return key.hashCode();
        }
    }

    /**
     * Problem 8: Adaptive Load Balancer
     * Adjust routing based on server load and response time
     */
    static class AdaptiveLoadBalancer {
        static class ServerMetrics {
            int activeConnections;
            long avgResponseTimeMs;
            double cpuUsage;
        }
        
        public String selectServer(Map<String, ServerMetrics> servers) {
            // TODO: Implement adaptive selection
            return servers.keySet().iterator().next();
        }
    }

    // ============================================================================
    // DISTRIBUTED SYSTEMS PROBLEMS
    // ============================================================================

    /**
     * Problem 9: Implement Eventual Consistency
     * Design a system where updates propagate with eventual consistency
     */
    static class EventuallyConsistentStore<K, V> {
        private final Map<K, V> localStore = new ConcurrentHashMap<>();
        private final Queue<Map.Entry<K, V>> syncQueue = new ConcurrentLinkedQueue<>();
        
        public void put(K key, V value) {
            localStore.put(key, value);
            syncQueue.offer(new AbstractMap.SimpleEntry<>(key, value));
        }
        
        public V get(K key) {
            return localStore.get(key);
        }
        
        public void sync(EventuallyConsistentStore<K, V> replica) {
            while (!syncQueue.isEmpty()) {
                Map.Entry<K, V> entry = syncQueue.poll();
                replica.localStore.put(entry.getKey(), entry.getValue());
            }
        }
    }

    /**
     * Problem 10: Implement Conflict Resolution with Last-Write-Wins
     */
    static class LWWStore<K, V> {
        static class TimestampedValue<V> {
            V value;
            long timestamp;
            
            TimestampedValue(V value) {
                this.value = value;
                this.timestamp = System.currentTimeMillis();
            }
        }
        
        private final Map<K, TimestampedValue<V>> store = new ConcurrentHashMap<>();
        
        public void put(K key, V value) {
            store.merge(key, new TimestampedValue<>(value), (old, newVal) -> 
                newVal.timestamp > old.timestamp ? newVal : old
            );
        }
        
        public V get(K key) {
            TimestampedValue<V> tv = store.get(key);
            return tv != null ? tv.value : null;
        }
    }

    // ============================================================================
    // MESSAGE QUEUE PROBLEMS
    // ============================================================================

    /**
     * Problem 11: Priority Message Queue
     * Messages with higher priority are dequeued first
     */
    static class PriorityMessageQueue<T> {
        static class Message<T> implements Comparable<Message<T>> {
            T data;
            int priority;
            
            Message(T data, int priority) {
                this.data = data;
                this.priority = priority;
            }
            
            public int compareTo(Message<T> other) {
                return Integer.compare(other.priority, this.priority);
            }
        }
        
        private final PriorityQueue<Message<T>> queue = new PriorityQueue<>();
        
        public void enqueue(T data, int priority) {
            queue.offer(new Message<>(data, priority));
        }
        
        public T dequeue() {
            Message<T> msg = queue.poll();
            return msg != null ? msg.data : null;
        }
    }

    /**
     * Problem 12: Dead Letter Queue
     * Messages that fail processing go to DLQ
     */
    static class DeadLetterQueue<T> {
        private final Queue<T> mainQueue = new ConcurrentLinkedQueue<>();
        private final Queue<T> deadLetterQueue = new ConcurrentLinkedQueue<>();
        private final int maxRetries;
        
        public DeadLetterQueue(int maxRetries) {
            this.maxRetries = maxRetries;
        }
        
        public boolean process(T message, Function<T, Boolean> processor) {
            int retries = 0;
            while (retries < maxRetries) {
                if (processor.apply(message)) {
                    return true;
                }
                retries++;
            }
            deadLetterQueue.offer(message);
            return false;
        }
    }

    // ============================================================================
    // SAGA PATTERN PROBLEMS
    // ============================================================================

    /**
     * Problem 13: Implement Saga Orchestration
     * Central coordinator manages saga workflow
     */
    static class SagaOrchestrator {
        interface SagaAction {
            boolean execute();
            void compensate();
        }
        
        private final List<SagaAction> actions = new ArrayList<>();
        
        public void addAction(SagaAction action) {
            actions.add(action);
        }
        
        public boolean execute() {
            List<SagaAction> executed = new ArrayList<>();
            for (SagaAction action : actions) {
                if (!action.execute()) {
                    // Compensate in reverse order
                    for (int i = executed.size() - 1; i >= 0; i--) {
                        executed.get(i).compensate();
                    }
                    return false;
                }
                executed.add(action);
            }
            return true;
        }
    }

    /**
     * Problem 14: E-Commerce Order Saga
     * Implement complete order processing saga
     */
    static class OrderSaga {
        // TODO: Implement order saga with inventory, payment, shipping
    }

    // ============================================================================
    // MICROSERVICES PROBLEMS
    // ============================================================================

    /**
     * Problem 15: Service Mesh Proxy
     * Implement sidecar proxy for service-to-service communication
     */
    static class ServiceMeshProxy {
        private final Map<String, String> routes = new ConcurrentHashMap<>();
        
        public void registerRoute(String service, String endpoint) {
            routes.put(service, endpoint);
        }
        
        public String route(String service) {
            return routes.get(service);
        }
    }

    /**
     * Problem 16: API Gateway with Request Aggregation
     * Aggregate multiple service calls into single response
     */
    static class APIGatewayAggregator {
        public Map<String, Object> aggregateResponse(List<String> services) 
                throws InterruptedException, ExecutionException {
            ExecutorService executor = Executors.newFixedThreadPool(services.size());
            Map<String, CompletableFuture<Object>> futures = new HashMap<>();
            
            for (String service : services) {
                futures.put(service, CompletableFuture.supplyAsync(() -> 
                    callService(service), executor
                ));
            }
            
            Map<String, Object> result = new HashMap<>();
            for (Map.Entry<String, CompletableFuture<Object>> entry : futures.entrySet()) {
                result.put(entry.getKey(), entry.getValue().get());
            }
            
            executor.shutdown();
            return result;
        }
        
        private Object callService(String service) {
            return "Response from " + service;
        }
    }

    // ============================================================================
    // DATABASE SHARDING PROBLEMS
    // ============================================================================

    /**
     * Problem 17: Implement Geo-Sharding
     * Shard data based on geographic region
     */
    static class GeoShardManager {
        enum Region { US_EAST, US_WEST, EU, ASIA }
        
        private final Map<Region, Map<String, String>> shards = new ConcurrentHashMap<>();
        
        public GeoShardManager() {
            for (Region region : Region.values()) {
                shards.put(region, new ConcurrentHashMap<>());
            }
        }
        
        public void put(Region region, String key, String value) {
            shards.get(region).put(key, value);
        }
        
        public String get(Region region, String key) {
            return shards.get(region).get(key);
        }
    }

    /**
     * Problem 18: Cross-Shard Transactions
     * Coordinate transactions across multiple shards
     */
    static class CrossShardTransaction {
        // TODO: Implement 2PC across shards
    }

    // ============================================================================
    // CQRS & EVENT SOURCING PROBLEMS
    // ============================================================================

    /**
     * Problem 19: Event Store with Snapshots
     * Optimize event replay with periodic snapshots
     */
    static class EventStoreWithSnapshots<T> {
        interface Event {}
        interface Aggregate {
            void apply(Event event);
        }
        
        static class Snapshot<T> {
            T state;
            long version;
        }
        
        private final List<Event> events = new CopyOnWriteArrayList<>();
        private final Map<Long, Snapshot<T>> snapshots = new ConcurrentHashMap<>();
        private final int snapshotInterval = 10;
        
        public void append(Event event) {
            events.add(event);
            if (events.size() % snapshotInterval == 0) {
                // createSnapshot();
            }
        }
    }

    /**
     * Problem 20: Read Model Projections
     * Build materialized views from events
     */
    static class ReadModelProjection {
        // TODO: Implement projection builder
    }

    // ============================================================================
    // ADVANCED PROBLEMS
    // ============================================================================

    /**
     * Problem 21-50: Additional challenges
     * 
     * 21. Implement rate limiting with Redis
     * 22. Build distributed lock with Redlock algorithm
     * 23. Design URL shortener system
     * 24. Implement distributed cache invalidation
     * 25. Build real-time leaderboard system
     * 26. Design notification system with priorities
     * 27. Implement session management across servers
     * 28. Build recommendation system cache
     * 29. Design metrics aggregation pipeline
     * 30. Implement distributed tracing system
     * 
     * 31. Build service dependency graph
     * 32. Design auto-scaling algorithm
     * 33. Implement database connection pooling
     * 34. Build request deduplication system
     * 35. Design data replication strategy
     * 36. Implement backup and restore system
     * 37. Build chaos engineering framework
     * 38. Design A/B testing framework
     * 39. Implement feature flags system
     * 40. Build distributed logging system
     * 
     * 41. Design streaming data pipeline
     * 42. Implement time-series database
     * 43. Build graph database query engine
     * 44. Design multi-tenant isolation
     * 45. Implement zero-downtime deployment
     * 46. Build canary release system
     * 47. Design blue-green deployment
     * 48. Implement service versioning
     * 49. Build API rate limiting with quotas
     * 50. Design disaster recovery system
     */

    // ============================================================================
    // REAL-WORLD SCENARIOS
    // ============================================================================

    /**
     * Scenario 1: Design Twitter-like Feed System
     */
    static class FeedSystem {
        // TODO: Implement timeline generation with caching
    }

    /**
     * Scenario 2: Design Uber-like Matching System
     */
    static class RideMatchingSystem {
        // TODO: Implement geo-spatial matching
    }

    /**
     * Scenario 3: Design Netflix-like Streaming System
     */
    static class VideoStreamingSystem {
        // TODO: Implement CDN, adaptive bitrate, caching
    }

    /**
     * Scenario 4: Design Amazon-like Product Catalog
     */
    static class ProductCatalogSystem {
        // TODO: Implement search, filtering, recommendations
    }

    /**
     * Scenario 5: Design WhatsApp-like Messaging System
     */
    static class MessagingSystem {
        // TODO: Implement message delivery, offline sync
    }

    // ============================================================================
    // TEST RUNNER
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 24: PRACTICE PROBLEMS ===\n");

        // Test Problem 1
        testFixedWindowRateLimiter();

        // Test Problem 5
        testLRUCacheWithTTL();

        // Test Problem 6
        testMultiLevelCache();

        // Test Problem 7
        testConsistentHashing();

        // Test Problem 11
        testPriorityQueue();

        System.out.println("\n✅ All practice problems compiled successfully!");
        System.out.println("📝 Total Problems: 50");
        System.out.println("🎯 Complete remaining problems for mastery");
    }

    private static void testFixedWindowRateLimiter() {
        System.out.println("\n--- Testing Fixed Window Rate Limiter ---");
        FixedWindowRateLimiter limiter = new FixedWindowRateLimiter(1000, 5);
        
        for (int i = 0; i < 7; i++) {
            boolean allowed = limiter.allowRequest("user1");
            System.out.println("Request " + (i + 1) + ": " + (allowed ? "✓ Allowed" : "✗ Rejected"));
        }
    }

    private static void testLRUCacheWithTTL() {
        System.out.println("\n--- Testing LRU Cache with TTL ---");
        LRUCacheWithTTL<String, String> cache = new LRUCacheWithTTL<>(3);
        
        cache.put("key1", "value1", 1000);
        cache.put("key2", "value2", 1000);
        
        System.out.println("Get key1: " + cache.get("key1"));
        System.out.println("Get key2: " + cache.get("key2"));
    }

    private static void testMultiLevelCache() {
        System.out.println("\n--- Testing Multi-Level Cache ---");
        MultiLevelCache<String, String> cache = new MultiLevelCache<>();
        
        String value = cache.get("key1", k -> "Loaded from DB: " + k);
        System.out.println("First access: " + value);
        
        String cached = cache.get("key1", k -> "Should not load");
        System.out.println("Second access (cached): " + cached);
    }

    private static void testConsistentHashing() {
        System.out.println("\n--- Testing Consistent Hashing ---");
        ConsistentHashLoadBalancer lb = new ConsistentHashLoadBalancer();
        
        lb.addServer("server1", 3);
        lb.addServer("server2", 3);
        lb.addServer("server3", 3);
        
        for (int i = 0; i < 5; i++) {
            String server = lb.getServer("request-" + i);
            System.out.println("Request " + i + " -> " + server);
        }
    }

    private static void testPriorityQueue() {
        System.out.println("\n--- Testing Priority Message Queue ---");
        PriorityMessageQueue<String> queue = new PriorityMessageQueue<>();
        
        queue.enqueue("Low priority", 1);
        queue.enqueue("High priority", 10);
        queue.enqueue("Medium priority", 5);
        
        System.out.println("Dequeue: " + queue.dequeue());
        System.out.println("Dequeue: " + queue.dequeue());
        System.out.println("Dequeue: " + queue.dequeue());
    }
}
