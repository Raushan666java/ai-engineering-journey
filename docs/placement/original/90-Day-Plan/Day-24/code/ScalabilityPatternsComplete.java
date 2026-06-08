/**
 * DAY 24 - SCALABILITY PATTERNS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Database Sharding
 * 2. Read Replicas & Write Masters
 * 3. Caching Strategies (Cache-Aside, Write-Through, Write-Behind)
 * 4. Content Delivery Network (CDN) Simulation
 * 5. Horizontal vs Vertical Scaling
 * 6. Load Balancing Algorithms
 * 7. Data Partitioning Strategies
 * 8. Consistent Hashing
 * 9. Message Queue Patterns
 * 10. Async Processing
 * 
 * Production-ready implementations with comprehensive examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class ScalabilityPatternsComplete {

    // ============================================================================
    // 1. DATABASE SHARDING
    // ============================================================================

    /**
     * Database Sharding - Horizontal partitioning
     * Split data across multiple databases
     */
    static class DatabaseShard {
        private final String shardId;
        private final Map<String, String> data;

        public DatabaseShard(String shardId) {
            this.shardId = shardId;
            this.data = new ConcurrentHashMap<>();
        }

        public void put(String key, String value) {
            data.put(key, value);
        }

        public String get(String key) {
            return data.get(key);
        }

        public String getShardId() {
            return shardId;
        }

        public int size() {
            return data.size();
        }
    }

    /**
     * Shard Manager with Hash-based routing
     */
    static class ShardManager {
        private final List<DatabaseShard> shards;
        private final int shardCount;

        public ShardManager(int shardCount) {
            this.shardCount = shardCount;
            this.shards = new ArrayList<>();
            for (int i = 0; i < shardCount; i++) {
                shards.add(new DatabaseShard("SHARD-" + i));
            }
        }

        public void put(String key, String value) {
            DatabaseShard shard = getShardForKey(key);
            shard.put(key, value);
        }

        public String get(String key) {
            DatabaseShard shard = getShardForKey(key);
            return shard.get(key);
        }

        private DatabaseShard getShardForKey(String key) {
            int hash = Math.abs(key.hashCode());
            int shardIndex = hash % shardCount;
            return shards.get(shardIndex);
        }

        public void printShardDistribution() {
            System.out.println("\nShard Distribution:");
            for (DatabaseShard shard : shards) {
                System.out.println(shard.getShardId() + ": " + shard.size() + " records");
            }
        }
    }

    /**
     * Range-based Sharding
     */
    static class RangeBasedShardManager {
        private final Map<String, DatabaseShard> shards;

        public RangeBasedShardManager() {
            this.shards = new ConcurrentHashMap<>();
            shards.put("A-M", new DatabaseShard("SHARD-A-M"));
            shards.put("N-Z", new DatabaseShard("SHARD-N-Z"));
        }

        public void put(String key, String value) {
            DatabaseShard shard = getShardForKey(key);
            shard.put(key, value);
        }

        public String get(String key) {
            DatabaseShard shard = getShardForKey(key);
            return shard.get(key);
        }

        private DatabaseShard getShardForKey(String key) {
            char firstChar = Character.toUpperCase(key.charAt(0));
            if (firstChar >= 'A' && firstChar <= 'M') {
                return shards.get("A-M");
            } else {
                return shards.get("N-Z");
            }
        }
    }

    // ============================================================================
    // 2. READ REPLICAS & WRITE MASTERS
    // ============================================================================

    /**
     * Master-Slave Replication Pattern
     */
    static class DatabaseNode {
        private final String nodeId;
        private final boolean isMaster;
        private final Map<String, String> data;

        public DatabaseNode(String nodeId, boolean isMaster) {
            this.nodeId = nodeId;
            this.isMaster = isMaster;
            this.data = new ConcurrentHashMap<>();
        }

        public void write(String key, String value) {
            if (!isMaster) {
                throw new IllegalStateException("Cannot write to read replica");
            }
            data.put(key, value);
        }

        public String read(String key) {
            return data.get(key);
        }

        public void replicate(Map<String, String> masterData) {
            if (isMaster) {
                throw new IllegalStateException("Cannot replicate to master");
            }
            data.putAll(masterData);
        }

        public Map<String, String> getData() {
            return new HashMap<>(data);
        }

        public boolean isMaster() {
            return isMaster;
        }

        public String getNodeId() {
            return nodeId;
        }
    }

    /**
     * Master-Replica Database System
     */
    static class MasterReplicaSystem {
        private final DatabaseNode master;
        private final List<DatabaseNode> replicas;
        private final ScheduledExecutorService replicationScheduler;
        private int replicaIndex = 0;

        public MasterReplicaSystem(int replicaCount) {
            this.master = new DatabaseNode("MASTER", true);
            this.replicas = new ArrayList<>();
            for (int i = 0; i < replicaCount; i++) {
                replicas.add(new DatabaseNode("REPLICA-" + i, false));
            }
            this.replicationScheduler = Executors.newScheduledThreadPool(1);
            startReplication();
        }

        public void write(String key, String value) {
            master.write(key, value);
        }

        public String read(String key) {
            // Round-robin load balancing across replicas
            DatabaseNode replica = replicas.get(replicaIndex);
            replicaIndex = (replicaIndex + 1) % replicas.size();
            return replica.read(key);
        }

        private void startReplication() {
            replicationScheduler.scheduleAtFixedRate(() -> {
                Map<String, String> masterData = master.getData();
                for (DatabaseNode replica : replicas) {
                    replica.replicate(masterData);
                }
            }, 0, 100, TimeUnit.MILLISECONDS);
        }

        public void shutdown() {
            replicationScheduler.shutdown();
        }
    }

    // ============================================================================
    // 3. CACHING STRATEGIES
    // ============================================================================

    /**
     * Cache-Aside Pattern (Lazy Loading)
     */
    static class CacheAsidePattern<K, V> {
        private final Map<K, V> cache;
        private final Function<K, V> dataLoader;
        private final int maxSize;

        public CacheAsidePattern(Function<K, V> dataLoader, int maxSize) {
            this.cache = new LinkedHashMap<K, V>(maxSize, 0.75f, true) {
                protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                    return size() > maxSize;
                }
            };
            this.dataLoader = dataLoader;
            this.maxSize = maxSize;
        }

        public V get(K key) {
            V value = cache.get(key);
            if (value == null) {
                value = dataLoader.apply(key);
                if (value != null) {
                    cache.put(key, value);
                }
            }
            return value;
        }

        public void put(K key, V value) {
            cache.put(key, value);
        }

        public void invalidate(K key) {
            cache.remove(key);
        }
    }

    /**
     * Write-Through Cache Pattern
     */
    static class WriteThroughCache<K, V> {
        private final Map<K, V> cache;
        private final Map<K, V> database;

        public WriteThroughCache() {
            this.cache = new ConcurrentHashMap<>();
            this.database = new ConcurrentHashMap<>();
        }

        public void put(K key, V value) {
            // Write to database first
            database.put(key, value);
            // Then update cache
            cache.put(key, value);
        }

        public V get(K key) {
            V value = cache.get(key);
            if (value == null) {
                value = database.get(key);
                if (value != null) {
                    cache.put(key, value);
                }
            }
            return value;
        }
    }

    /**
     * Write-Behind (Write-Back) Cache Pattern
     */
    static class WriteBehindCache<K, V> {
        private final Map<K, V> cache;
        private final Map<K, V> database;
        private final Queue<Map.Entry<K, V>> writeQueue;
        private final ScheduledExecutorService flushScheduler;

        public WriteBehindCache(int flushIntervalMs) {
            this.cache = new ConcurrentHashMap<>();
            this.database = new ConcurrentHashMap<>();
            this.writeQueue = new ConcurrentLinkedQueue<>();
            this.flushScheduler = Executors.newScheduledThreadPool(1);
            startFlushing(flushIntervalMs);
        }

        public void put(K key, V value) {
            cache.put(key, value);
            writeQueue.offer(new AbstractMap.SimpleEntry<>(key, value));
        }

        public V get(K key) {
            return cache.get(key);
        }

        private void startFlushing(int intervalMs) {
            flushScheduler.scheduleAtFixedRate(() -> {
                while (!writeQueue.isEmpty()) {
                    Map.Entry<K, V> entry = writeQueue.poll();
                    if (entry != null) {
                        database.put(entry.getKey(), entry.getValue());
                    }
                }
            }, intervalMs, intervalMs, TimeUnit.MILLISECONDS);
        }

        public void shutdown() {
            flushScheduler.shutdown();
        }
    }

    // ============================================================================
    // 4. CONTENT DELIVERY NETWORK (CDN) SIMULATION
    // ============================================================================

    /**
     * CDN Edge Server
     */
    static class EdgeServer {
        private final String location;
        private final Map<String, byte[]> cache;
        private final int maxCacheSize;

        public EdgeServer(String location, int maxCacheSize) {
            this.location = location;
            this.cache = new ConcurrentHashMap<>();
            this.maxCacheSize = maxCacheSize;
        }

        public byte[] getContent(String url) {
            return cache.get(url);
        }

        public void cacheContent(String url, byte[] content) {
            if (cache.size() < maxCacheSize) {
                cache.put(url, content);
            }
        }

        public String getLocation() {
            return location;
        }
    }

    /**
     * CDN Network
     */
    static class CDNNetwork {
        private final Map<String, EdgeServer> edgeServers;
        private final OriginServer originServer;

        public CDNNetwork() {
            this.edgeServers = new ConcurrentHashMap<>();
            this.originServer = new OriginServer();
            initializeEdgeServers();
        }

        private void initializeEdgeServers() {
            edgeServers.put("US-EAST", new EdgeServer("US-EAST", 100));
            edgeServers.put("US-WEST", new EdgeServer("US-WEST", 100));
            edgeServers.put("EU", new EdgeServer("EU", 100));
            edgeServers.put("ASIA", new EdgeServer("ASIA", 100));
        }

        public byte[] getContent(String userLocation, String url) {
            EdgeServer edge = findNearestEdge(userLocation);
            byte[] content = edge.getContent(url);

            if (content == null) {
                // Cache miss - fetch from origin
                content = originServer.getContent(url);
                if (content != null) {
                    edge.cacheContent(url, content);
                }
            }

            return content;
        }

        private EdgeServer findNearestEdge(String userLocation) {
            // Simplified geo-routing
            if (userLocation.startsWith("US-E")) return edgeServers.get("US-EAST");
            if (userLocation.startsWith("US-W")) return edgeServers.get("US-WEST");
            if (userLocation.startsWith("EU")) return edgeServers.get("EU");
            return edgeServers.get("ASIA");
        }
    }

    static class OriginServer {
        private final Map<String, byte[]> content;

        public OriginServer() {
            this.content = new ConcurrentHashMap<>();
            content.put("/index.html", "Home Page".getBytes());
            content.put("/logo.png", "Logo Image".getBytes());
        }

        public byte[] getContent(String url) {
            return content.get(url);
        }
    }

    // ============================================================================
    // 5. LOAD BALANCING ALGORITHMS
    // ============================================================================

    /**
     * Server Instance
     */
    static class ServerInstance {
        private final String serverId;
        private final AtomicInteger activeConnections;
        private final AtomicLong totalRequests;

        public ServerInstance(String serverId) {
            this.serverId = serverId;
            this.activeConnections = new AtomicInteger(0);
            this.totalRequests = new AtomicLong(0);
        }

        public void handleRequest() {
            activeConnections.incrementAndGet();
            totalRequests.incrementAndGet();
            // Simulate processing
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            activeConnections.decrementAndGet();
        }

        public String getServerId() { return serverId; }
        public int getActiveConnections() { return activeConnections.get(); }
        public long getTotalRequests() { return totalRequests.get(); }
    }

    /**
     * Round Robin Load Balancer
     */
    static class RoundRobinLoadBalancer {
        private final List<ServerInstance> servers;
        private final AtomicInteger currentIndex;

        public RoundRobinLoadBalancer(List<ServerInstance> servers) {
            this.servers = new ArrayList<>(servers);
            this.currentIndex = new AtomicInteger(0);
        }

        public ServerInstance getNextServer() {
            int index = currentIndex.getAndIncrement() % servers.size();
            return servers.get(index);
        }
    }

    /**
     * Least Connections Load Balancer
     */
    static class LeastConnectionsLoadBalancer {
        private final List<ServerInstance> servers;

        public LeastConnectionsLoadBalancer(List<ServerInstance> servers) {
            this.servers = new ArrayList<>(servers);
        }

        public ServerInstance getNextServer() {
            return servers.stream()
                .min(Comparator.comparingInt(ServerInstance::getActiveConnections))
                .orElse(servers.get(0));
        }
    }

    /**
     * Weighted Round Robin Load Balancer
     */
    static class WeightedRoundRobinLoadBalancer {
        private final List<ServerInstance> servers;
        private final Map<ServerInstance, Integer> weights;
        private final List<ServerInstance> weightedList;
        private final AtomicInteger currentIndex;

        public WeightedRoundRobinLoadBalancer(Map<ServerInstance, Integer> serverWeights) {
            this.servers = new ArrayList<>(serverWeights.keySet());
            this.weights = new HashMap<>(serverWeights);
            this.weightedList = new ArrayList<>();
            this.currentIndex = new AtomicInteger(0);

            // Build weighted list
            for (Map.Entry<ServerInstance, Integer> entry : serverWeights.entrySet()) {
                for (int i = 0; i < entry.getValue(); i++) {
                    weightedList.add(entry.getKey());
                }
            }
        }

        public ServerInstance getNextServer() {
            int index = currentIndex.getAndIncrement() % weightedList.size();
            return weightedList.get(index);
        }
    }

    // ============================================================================
    // 6. CONSISTENT HASHING
    // ============================================================================

    /**
     * Consistent Hashing Implementation
     */
    static class ConsistentHashing {
        private final TreeMap<Long, String> ring;
        private final int virtualNodes;

        public ConsistentHashing(int virtualNodes) {
            this.ring = new TreeMap<>();
            this.virtualNodes = virtualNodes;
        }

        public void addNode(String nodeId) {
            for (int i = 0; i < virtualNodes; i++) {
                long hash = hash(nodeId + "#" + i);
                ring.put(hash, nodeId);
            }
        }

        public void removeNode(String nodeId) {
            for (int i = 0; i < virtualNodes; i++) {
                long hash = hash(nodeId + "#" + i);
                ring.remove(hash);
            }
        }

        public String getNode(String key) {
            if (ring.isEmpty()) {
                return null;
            }
            long hash = hash(key);
            Map.Entry<Long, String> entry = ring.ceilingEntry(hash);
            if (entry == null) {
                entry = ring.firstEntry();
            }
            return entry.getValue();
        }

        private long hash(String key) {
            try {
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] digest = md.digest(key.getBytes(StandardCharsets.UTF_8));
                long hash = 0;
                for (int i = 0; i < 8; i++) {
                    hash = (hash << 8) | (digest[i] & 0xFF);
                }
                return hash;
            } catch (Exception e) {
                return key.hashCode();
            }
        }

        public int getRingSize() {
            return ring.size();
        }
    }

    // ============================================================================
    // 7. MESSAGE QUEUE PATTERNS
    // ============================================================================

    /**
     * Simple Message Queue
     */
    static class Message {
        private final String id;
        private final String content;
        private final long timestamp;

        public Message(String content) {
            this.id = UUID.randomUUID().toString();
            this.content = content;
            this.timestamp = System.currentTimeMillis();
        }

        public String getId() { return id; }
        public String getContent() { return content; }
        public long getTimestamp() { return timestamp; }
    }

    static class MessageQueue {
        private final Queue<Message> queue;
        private final int maxSize;

        public MessageQueue(int maxSize) {
            this.queue = new ConcurrentLinkedQueue<>();
            this.maxSize = maxSize;
        }

        public boolean enqueue(Message message) {
            if (queue.size() >= maxSize) {
                return false;
            }
            return queue.offer(message);
        }

        public Message dequeue() {
            return queue.poll();
        }

        public int size() {
            return queue.size();
        }

        public boolean isEmpty() {
            return queue.isEmpty();
        }
    }

    /**
     * Pub-Sub Pattern
     */
    static class PubSubBroker {
        private final Map<String, List<Consumer<Message>>> subscribers;

        public PubSubBroker() {
            this.subscribers = new ConcurrentHashMap<>();
        }

        public void subscribe(String topic, Consumer<Message> subscriber) {
            subscribers.computeIfAbsent(topic, k -> new CopyOnWriteArrayList<>())
                .add(subscriber);
        }

        public void publish(String topic, Message message) {
            List<Consumer<Message>> topicSubscribers = subscribers.get(topic);
            if (topicSubscribers != null) {
                for (Consumer<Message> subscriber : topicSubscribers) {
                    subscriber.accept(message);
                }
            }
        }

        public void unsubscribe(String topic, Consumer<Message> subscriber) {
            List<Consumer<Message>> topicSubscribers = subscribers.get(topic);
            if (topicSubscribers != null) {
                topicSubscribers.remove(subscriber);
            }
        }
    }

    // ============================================================================
    // 8. ASYNC PROCESSING
    // ============================================================================

    /**
     * Async Task Processor
     */
    static class AsyncTaskProcessor {
        private final ExecutorService executor;
        private final Map<String, CompletableFuture<String>> tasks;

        public AsyncTaskProcessor(int threadPoolSize) {
            this.executor = Executors.newFixedThreadPool(threadPoolSize);
            this.tasks = new ConcurrentHashMap<>();
        }

        public String submitTask(String taskId, Callable<String> task) {
            CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
                try {
                    return task.call();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }, executor);

            tasks.put(taskId, future);
            return taskId;
        }

        public String getResult(String taskId) throws Exception {
            CompletableFuture<String> future = tasks.get(taskId);
            if (future == null) {
                throw new Exception("Task not found");
            }
            return future.get();
        }

        public boolean isComplete(String taskId) {
            CompletableFuture<String> future = tasks.get(taskId);
            return future != null && future.isDone();
        }

        public void shutdown() {
            executor.shutdown();
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) throws Exception {
        System.out.println("=== DAY 24: SCALABILITY PATTERNS ===\n");

        // Test Database Sharding
        demonstrateSharding();

        // Test Master-Replica
        demonstrateMasterReplica();

        // Test Caching
        demonstrateCaching();

        // Test CDN
        demonstrateCDN();

        // Test Load Balancing
        demonstrateLoadBalancing();

        // Test Consistent Hashing
        demonstrateConsistentHashing();

        // Test Message Queue
        demonstrateMessageQueue();

        // Test Async Processing
        demonstrateAsyncProcessing();
    }

    private static void demonstrateSharding() {
        System.out.println("\n--- Database Sharding Demo ---");
        ShardManager shardManager = new ShardManager(3);

        // Insert data
        for (int i = 0; i < 10; i++) {
            String key = "user-" + i;
            shardManager.put(key, "User " + i + " data");
        }

        shardManager.printShardDistribution();

        // Retrieve data
        String value = shardManager.get("user-5");
        System.out.println("\nRetrieved: user-5 = " + value);
    }

    private static void demonstrateMasterReplica() throws InterruptedException {
        System.out.println("\n--- Master-Replica Demo ---");
        MasterReplicaSystem system = new MasterReplicaSystem(2);

        system.write("key1", "value1");
        system.write("key2", "value2");

        // Wait for replication
        Thread.sleep(200);

        // Read from replicas
        System.out.println("Read from replica: " + system.read("key1"));
        System.out.println("Read from replica: " + system.read("key2"));

        system.shutdown();
    }

    private static void demonstrateCaching() {
        System.out.println("\n--- Caching Strategies Demo ---");

        // Cache-Aside
        CacheAsidePattern<String, String> cacheAside = new CacheAsidePattern<>(
            key -> "Loaded from DB: " + key, 5
        );
        System.out.println("Cache-Aside: " + cacheAside.get("user-1"));
        System.out.println("Cache-Aside: " + cacheAside.get("user-1")); // From cache

        // Write-Through
        WriteThroughCache<String, String> writeThrough = new WriteThroughCache<>();
        writeThrough.put("key1", "value1");
        System.out.println("Write-Through: " + writeThrough.get("key1"));
    }

    private static void demonstrateCDN() {
        System.out.println("\n--- CDN Demo ---");
        CDNNetwork cdn = new CDNNetwork();

        byte[] content1 = cdn.getContent("US-EAST", "/index.html");
        System.out.println("Content from US-EAST: " + new String(content1));

        byte[] content2 = cdn.getContent("EU", "/index.html");
        System.out.println("Content from EU: " + new String(content2));
    }

    private static void demonstrateLoadBalancing() {
        System.out.println("\n--- Load Balancing Demo ---");

        List<ServerInstance> servers = Arrays.asList(
            new ServerInstance("Server-1"),
            new ServerInstance("Server-2"),
            new ServerInstance("Server-3")
        );

        // Round Robin
        RoundRobinLoadBalancer rrLB = new RoundRobinLoadBalancer(servers);
        System.out.println("Round Robin:");
        for (int i = 0; i < 5; i++) {
            System.out.println("  Request " + i + " -> " + rrLB.getNextServer().getServerId());
        }

        // Least Connections
        LeastConnectionsLoadBalancer lcLB = new LeastConnectionsLoadBalancer(servers);
        System.out.println("\nLeast Connections:");
        for (int i = 0; i < 5; i++) {
            ServerInstance server = lcLB.getNextServer();
            System.out.println("  Request " + i + " -> " + server.getServerId() + 
                " (connections: " + server.getActiveConnections() + ")");
        }
    }

    private static void demonstrateConsistentHashing() {
        System.out.println("\n--- Consistent Hashing Demo ---");
        ConsistentHashing ch = new ConsistentHashing(3);

        ch.addNode("Server-1");
        ch.addNode("Server-2");
        ch.addNode("Server-3");

        System.out.println("Ring size: " + ch.getRingSize());

        for (int i = 0; i < 5; i++) {
            String key = "key-" + i;
            String node = ch.getNode(key);
            System.out.println(key + " -> " + node);
        }
    }

    private static void demonstrateMessageQueue() {
        System.out.println("\n--- Message Queue Demo ---");
        MessageQueue queue = new MessageQueue(10);

        queue.enqueue(new Message("Task 1"));
        queue.enqueue(new Message("Task 2"));
        queue.enqueue(new Message("Task 3"));

        System.out.println("Queue size: " + queue.size());

        Message msg = queue.dequeue();
        System.out.println("Dequeued: " + msg.getContent());
        System.out.println("Queue size: " + queue.size());

        // Pub-Sub
        System.out.println("\nPub-Sub:");
        PubSubBroker broker = new PubSubBroker();
        broker.subscribe("orders", msg2 -> 
            System.out.println("  Subscriber received: " + msg2.getContent()));
        broker.publish("orders", new Message("New order #123"));
    }

    private static void demonstrateAsyncProcessing() throws Exception {
        System.out.println("\n--- Async Processing Demo ---");
        AsyncTaskProcessor processor = new AsyncTaskProcessor(2);

        String taskId = processor.submitTask("task-1", () -> {
            Thread.sleep(1000);
            return "Task completed";
        });

        System.out.println("Task submitted: " + taskId);
        System.out.println("Is complete: " + processor.isComplete(taskId));

        Thread.sleep(1500);
        System.out.println("Is complete: " + processor.isComplete(taskId));
        System.out.println("Result: " + processor.getResult(taskId));

        processor.shutdown();
    }
}
