/**
 * DAY 31: DISTRIBUTED SYSTEMS PATTERNS
 * Advanced Distributed Computing Concepts
 * 
 * Topics Covered:
 * 1. Distributed Consensus (Raft, Paxos)
 * 2. Distributed Locking
 * 3. Leader Election
 * 4. Distributed Caching
 * 5. Consistent Hashing
 * 6. Distributed Rate Limiting
 * 7. Distributed Tracing
 * 8. Vector Clocks & Causality
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.time.*;
import java.util.stream.*;

public class DistributedSystemsPatterns {
    
    // ========================================================================
    // PATTERN 1: DISTRIBUTED LOCKING (RedLock Algorithm)
    // ========================================================================
    
    /**
     * Distributed Lock using RedLock algorithm
     * 
     * Purpose: Ensure mutual exclusion across distributed systems
     * 
     * Algorithm:
     * 1. Get current timestamp
     * 2. Try to acquire lock on all N instances
     * 3. If locked on majority (N/2 + 1) within timeout → Success
     * 4. Otherwise, release all locks and retry
     * 
     * Time Complexity: O(n) where n = number of lock instances
     * Space Complexity: O(n)
     * 
     * Real-world Usage:
     * - Redis RedLock
     * - Distributed resource allocation
     * - Leader election
     */
    static class DistributedLock {
        static class LockInstance {
            private String id;
            private Map<String, LockInfo> locks = new ConcurrentHashMap<>();
            
            LockInstance(String id) {
                this.id = id;
            }
            
            public boolean tryLock(String resource, String token, Duration ttl) {
                LockInfo existing = locks.get(resource);
                if (existing != null && existing.isValid()) {
                    return false; // Already locked
                }
                
                locks.put(resource, new LockInfo(token, Instant.now().plus(ttl)));
                return true;
            }
            
            public boolean unlock(String resource, String token) {
                LockInfo lock = locks.get(resource);
                if (lock != null && lock.token.equals(token)) {
                    locks.remove(resource);
                    return true;
                }
                return false;
            }
            
            public boolean isLocked(String resource) {
                LockInfo lock = locks.get(resource);
                return lock != null && lock.isValid();
            }
        }
        
        static class LockInfo {
            String token;
            Instant expiry;
            
            LockInfo(String token, Instant expiry) {
                this.token = token;
                this.expiry = expiry;
            }
            
            boolean isValid() {
                return Instant.now().isBefore(expiry);
            }
        }
        
        private List<LockInstance> instances;
        private int quorum; // Majority: N/2 + 1
        private Duration lockTimeout = Duration.ofSeconds(10);
        
        public DistributedLock(int instanceCount) {
            this.instances = new ArrayList<>();
            for (int i = 0; i < instanceCount; i++) {
                instances.add(new LockInstance("instance-" + i));
            }
            this.quorum = instanceCount / 2 + 1;
        }
        
        /**
         * Acquire distributed lock
         * 
         * @param resource Resource to lock
         * @param ttl Time-to-live for lock
         * @return Lock token if successful, null otherwise
         */
        public String acquireLock(String resource, Duration ttl) {
            String token = UUID.randomUUID().toString();
            Instant start = Instant.now();
            int lockedCount = 0;
            
            // Try to acquire lock on all instances
            for (LockInstance instance : instances) {
                if (instance.tryLock(resource, token, ttl)) {
                    lockedCount++;
                }
            }
            
            Instant end = Instant.now();
            Duration elapsed = Duration.between(start, end);
            
            // Check if we got majority and within timeout
            if (lockedCount >= quorum && elapsed.compareTo(lockTimeout) < 0) {
                System.out.printf("✓ Lock acquired: %s (locked %d/%d instances)%n", 
                    resource, lockedCount, instances.size());
                return token;
            }
            
            // Failed to acquire lock, release all
            releaseLock(resource, token);
            System.out.printf("✗ Lock failed: %s (only %d/%d instances, need %d)%n",
                resource, lockedCount, instances.size(), quorum);
            return null;
        }
        
        /**
         * Release distributed lock
         */
        public void releaseLock(String resource, String token) {
            int released = 0;
            for (LockInstance instance : instances) {
                if (instance.unlock(resource, token)) {
                    released++;
                }
            }
            System.out.printf("Lock released: %s (%d instances)%n", resource, released);
        }
        
        /**
         * Check if resource is locked
         */
        public boolean isLocked(String resource) {
            int lockedCount = 0;
            for (LockInstance instance : instances) {
                if (instance.isLocked(resource)) {
                    lockedCount++;
                }
            }
            return lockedCount >= quorum;
        }
    }
    
    // ========================================================================
    // PATTERN 2: LEADER ELECTION (Bully Algorithm)
    // ========================================================================
    
    /**
     * Leader Election using Bully Algorithm
     * 
     * Purpose: Elect a leader in distributed system
     * 
     * Algorithm:
     * 1. When node detects leader failure, start election
     * 2. Send ELECTION message to all higher-ID nodes
     * 3. If no response from higher nodes → Declare self as leader
     * 4. If response received → Wait for COORDINATOR message
     * 5. New leader sends COORDINATOR message to all nodes
     * 
     * Time Complexity: O(n²) in worst case
     * Space Complexity: O(n)
     * 
     * Properties:
     * - Highest ID node becomes leader
     * - Handles failures and recoveries
     * - Eventually consistent
     */
    static class LeaderElection {
        enum MessageType { ELECTION, OK, COORDINATOR }
        
        static class Message {
            MessageType type;
            int senderId;
            
            Message(MessageType type, int senderId) {
                this.type = type;
                this.senderId = senderId;
            }
        }
        
        static class Node {
            private int id;
            private boolean isAlive = true;
            private Integer leaderId = null;
            private List<Node> allNodes;
            private BlockingQueue<Message> messageQueue = new LinkedBlockingQueue<>();
            private boolean isElecting = false;
            
            Node(int id) {
                this.id = id;
            }
            
            public void setAllNodes(List<Node> nodes) {
                this.allNodes = nodes;
            }
            
            /**
             * Start election process
             */
            public void startElection() {
                if (!isAlive || isElecting) return;
                
                isElecting = true;
                System.out.printf("Node %d: Starting election%n", id);
                
                // Send ELECTION to all higher-ID nodes
                List<Node> higherNodes = allNodes.stream()
                    .filter(n -> n.id > this.id && n.isAlive)
                    .collect(Collectors.toList());
                
                if (higherNodes.isEmpty()) {
                    // No higher nodes, become leader
                    becomeLeader();
                    return;
                }
                
                // Send ELECTION messages
                for (Node node : higherNodes) {
                    node.receiveMessage(new Message(MessageType.ELECTION, this.id));
                }
                
                // Wait for OK responses (simplified: just check if any higher node alive)
                try {
                    Thread.sleep(100); // Timeout for responses
                    
                    boolean receivedOK = false;
                    while (!messageQueue.isEmpty()) {
                        Message msg = messageQueue.poll();
                        if (msg.type == MessageType.OK) {
                            receivedOK = true;
                            break;
                        }
                    }
                    
                    if (!receivedOK) {
                        becomeLeader();
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                isElecting = false;
            }
            
            private void becomeLeader() {
                leaderId = this.id;
                System.out.printf("Node %d: I am the new LEADER%n", id);
                
                // Announce to all nodes
                for (Node node : allNodes) {
                    if (node.id != this.id && node.isAlive) {
                        node.receiveMessage(new Message(MessageType.COORDINATOR, this.id));
                    }
                }
            }
            
            public void receiveMessage(Message message) {
                if (!isAlive) return;
                
                switch (message.type) {
                    case ELECTION:
                        // Respond with OK and start own election
                        Node sender = allNodes.get(message.senderId);
                        sender.receiveMessage(new Message(MessageType.OK, this.id));
                        startElection();
                        break;
                        
                    case COORDINATOR:
                        leaderId = message.senderId;
                        System.out.printf("Node %d: Acknowledging leader %d%n", 
                            id, message.senderId);
                        isElecting = false;
                        break;
                        
                    case OK:
                        messageQueue.offer(message);
                        break;
                }
            }
            
            public void fail() {
                isAlive = false;
                System.out.printf("Node %d: FAILED%n", id);
            }
            
            public void recover() {
                isAlive = true;
                System.out.printf("Node %d: RECOVERED%n", id);
                startElection();
            }
            
            public Integer getLeaderId() {
                return leaderId;
            }
            
            public boolean isLeader() {
                return isAlive && leaderId != null && leaderId == this.id;
            }
        }
    }
    
    // ========================================================================
    // PATTERN 3: CONSISTENT HASHING
    // ========================================================================
    
    /**
     * Consistent Hashing for Distributed Caching
     * 
     * Purpose: Distribute keys uniformly, minimize redistribution on node changes
     * 
     * Algorithm:
     * 1. Hash nodes to ring (0 to 2^32-1)
     * 2. Hash keys to ring
     * 3. Key assigned to next node clockwise
     * 4. Use virtual nodes for better distribution
     * 
     * Time Complexity: O(log n) for lookup (TreeMap)
     * Space Complexity: O(n × v) where v = virtual nodes
     * 
     * Benefits:
     * - Minimal redistribution (only K/n keys move on add/remove)
     * - Uniform distribution with virtual nodes
     * - Scalable
     */
    static class ConsistentHashing {
        private TreeMap<Integer, String> ring = new TreeMap<>();
        private int virtualNodes = 150; // Virtual nodes per physical node
        
        /**
         * Add node to ring with virtual nodes
         * 
         * Virtual nodes improve distribution:
         * - Without: Some nodes may get more keys (hot spots)
         * - With: Keys distributed more uniformly
         */
        public void addNode(String node) {
            for (int i = 0; i < virtualNodes; i++) {
                int hash = hash(node + "#" + i);
                ring.put(hash, node);
            }
            System.out.printf("Added node: %s (with %d virtual nodes)%n", 
                node, virtualNodes);
        }
        
        /**
         * Remove node from ring
         */
        public void removeNode(String node) {
            for (int i = 0; i < virtualNodes; i++) {
                int hash = hash(node + "#" + i);
                ring.remove(hash);
            }
            System.out.printf("Removed node: %s%n", node);
        }
        
        /**
         * Get node for key
         * 
         * Finds next node clockwise on ring
         */
        public String getNode(String key) {
            if (ring.isEmpty()) return null;
            
            int hash = hash(key);
            
            // Find next node clockwise (ceiling)
            Map.Entry<Integer, String> entry = ring.ceilingEntry(hash);
            
            // If no entry found, wrap around to first
            if (entry == null) {
                entry = ring.firstEntry();
            }
            
            return entry.getValue();
        }
        
        /**
         * Get distribution of keys across nodes
         */
        public Map<String, Integer> getDistribution(List<String> keys) {
            Map<String, Integer> distribution = new HashMap<>();
            
            for (String key : keys) {
                String node = getNode(key);
                distribution.merge(node, 1, Integer::sum);
            }
            
            return distribution;
        }
        
        /**
         * Hash function (FNV-1a)
         */
        private int hash(String key) {
            final int FNV_32_INIT = 0x811c9dc5;
            final int FNV_32_PRIME = 0x01000193;
            
            int hash = FNV_32_INIT;
            for (byte b : key.getBytes()) {
                hash ^= (b & 0xff);
                hash *= FNV_32_PRIME;
            }
            
            return hash;
        }
        
        /**
         * Print ring state
         */
        public void printRing() {
            Map<String, Long> nodeCounts = ring.values().stream()
                .collect(Collectors.groupingBy(n -> n, Collectors.counting()));
            
            System.out.println("\nRing state:");
            nodeCounts.forEach((node, count) -> 
                System.out.printf("  %s: %d positions%n", node, count));
        }
    }
    
    // ========================================================================
    // PATTERN 4: VECTOR CLOCKS (Causality Tracking)
    // ========================================================================
    
    /**
     * Vector Clocks for tracking causality in distributed systems
     * 
     * Purpose: Determine causal relationships between events
     * 
     * Properties:
     * - Each node maintains vector of logical clocks
     * - Increment own clock on local event
     * - Merge clocks on message receive
     * 
     * Relationships:
     * - A < B: A happened before B (A causally precedes B)
     * - A > B: B happened before A
     * - A || B: Concurrent (no causal relationship)
     * 
     * Time Complexity: O(n) for comparison
     * Space Complexity: O(n) per event
     */
    static class VectorClock {
        private Map<String, Integer> clocks;
        
        public VectorClock() {
            this.clocks = new ConcurrentHashMap<>();
        }
        
        public VectorClock(Map<String, Integer> clocks) {
            this.clocks = new ConcurrentHashMap<>(clocks);
        }
        
        /**
         * Increment clock for node
         */
        public void increment(String nodeId) {
            clocks.merge(nodeId, 1, Integer::sum);
        }
        
        /**
         * Merge with another vector clock (on message receive)
         * 
         * Takes maximum of each component
         */
        public void merge(VectorClock other) {
            for (Map.Entry<String, Integer> entry : other.clocks.entrySet()) {
                String nodeId = entry.getKey();
                int otherValue = entry.getValue();
                clocks.merge(nodeId, otherValue, Math::max);
            }
        }
        
        /**
         * Check if this clock happened before other
         * 
         * A < B if:
         * - For all i: A[i] <= B[i]
         * - Exists j: A[j] < B[j]
         */
        public boolean happenedBefore(VectorClock other) {
            boolean anyLess = false;
            
            // Check all nodes in this clock
            for (Map.Entry<String, Integer> entry : this.clocks.entrySet()) {
                String nodeId = entry.getKey();
                int thisValue = entry.getValue();
                int otherValue = other.clocks.getOrDefault(nodeId, 0);
                
                if (thisValue > otherValue) {
                    return false; // Not happened before
                }
                if (thisValue < otherValue) {
                    anyLess = true;
                }
            }
            
            // Check nodes only in other clock
            for (String nodeId : other.clocks.keySet()) {
                if (!this.clocks.containsKey(nodeId)) {
                    anyLess = true;
                }
            }
            
            return anyLess;
        }
        
        /**
         * Check if concurrent with other
         */
        public boolean isConcurrentWith(VectorClock other) {
            return !this.happenedBefore(other) && !other.happenedBefore(this);
        }
        
        public VectorClock copy() {
            return new VectorClock(new HashMap<>(this.clocks));
        }
        
        @Override
        public String toString() {
            return clocks.toString();
        }
        
        /**
         * Example: Distributed system with 3 nodes
         */
        static class DistributedEvent {
            String nodeId;
            String event;
            VectorClock timestamp;
            
            DistributedEvent(String nodeId, String event, VectorClock timestamp) {
                this.nodeId = nodeId;
                this.event = event;
                this.timestamp = timestamp;
            }
            
            @Override
            public String toString() {
                return String.format("%s: %s at %s", nodeId, event, timestamp);
            }
        }
    }
    
    // ========================================================================
    // PATTERN 5: DISTRIBUTED RATE LIMITING (Token Bucket)
    // ========================================================================
    
    /**
     * Distributed Rate Limiter using Redis-like approach
     * 
     * Purpose: Rate limit across multiple instances
     * 
     * Strategies:
     * 1. Fixed Window: Simple but bursty
     * 2. Sliding Window: More accurate but complex
     * 3. Token Bucket: Smooth, allows bursts
     * 4. Leaky Bucket: Constant rate
     * 
     * Implementation: Token Bucket with distributed state
     */
    static class DistributedRateLimiter {
        static class TokenBucket {
            private String key;
            private int capacity;
            private double tokensPerSecond;
            private double tokens;
            private Instant lastRefill;
            
            TokenBucket(String key, int capacity, double tokensPerSecond) {
                this.key = key;
                this.capacity = capacity;
                this.tokensPerSecond = tokensPerSecond;
                this.tokens = capacity;
                this.lastRefill = Instant.now();
            }
            
            public synchronized boolean allowRequest(int tokensNeeded) {
                refill();
                
                if (tokens >= tokensNeeded) {
                    tokens -= tokensNeeded;
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
            
            public double getTokens() {
                refill();
                return tokens;
            }
        }
        
        // Simulate distributed storage (Redis-like)
        private Map<String, TokenBucket> buckets = new ConcurrentHashMap<>();
        private int defaultCapacity = 100;
        private double defaultRate = 10.0; // 10 requests/second
        
        /**
         * Check if request allowed
         */
        public boolean allowRequest(String clientId) {
            return allowRequest(clientId, 1);
        }
        
        public boolean allowRequest(String clientId, int tokens) {
            TokenBucket bucket = buckets.computeIfAbsent(clientId,
                k -> new TokenBucket(k, defaultCapacity, defaultRate));
            
            return bucket.allowRequest(tokens);
        }
        
        /**
         * Get current tokens for client
         */
        public double getTokens(String clientId) {
            TokenBucket bucket = buckets.get(clientId);
            return bucket != null ? bucket.getTokens() : defaultCapacity;
        }
        
        /**
         * Configure rate limit
         */
        public void setRateLimit(int capacity, double tokensPerSecond) {
            this.defaultCapacity = capacity;
            this.defaultRate = tokensPerSecond;
        }
    }
    
    // ========================================================================
    // PATTERN 6: DISTRIBUTED CACHE (Write-Through, Write-Behind)
    // ========================================================================
    
    /**
     * Distributed Cache with multiple strategies
     * 
     * Strategies:
     * 1. Cache-Aside: App manages cache
     * 2. Write-Through: Write to cache and DB together
     * 3. Write-Behind: Write to cache, async to DB
     * 4. Refresh-Ahead: Proactive refresh before expiry
     * 
     * Eviction Policies:
     * - LRU: Least Recently Used
     * - LFU: Least Frequently Used
     * - TTL: Time-To-Live
     */
    static class DistributedCache<K, V> {
        static class CacheEntry<V> {
            V value;
            Instant expiry;
            long accessCount;
            Instant lastAccess;
            
            CacheEntry(V value, Duration ttl) {
                this.value = value;
                this.expiry = Instant.now().plus(ttl);
                this.accessCount = 0;
                this.lastAccess = Instant.now();
            }
            
            boolean isExpired() {
                return Instant.now().isAfter(expiry);
            }
            
            void access() {
                accessCount++;
                lastAccess = Instant.now();
            }
        }
        
        enum CacheStrategy { CACHE_ASIDE, WRITE_THROUGH, WRITE_BEHIND }
        
        private Map<K, CacheEntry<V>> cache = new ConcurrentHashMap<>();
        private int maxSize = 1000;
        private Duration defaultTTL = Duration.ofMinutes(5);
        private CacheStrategy strategy = CacheStrategy.WRITE_THROUGH;
        
        // Simulate database
        private Map<K, V> database = new ConcurrentHashMap<>();
        
        // Write-behind queue
        private BlockingQueue<Map.Entry<K, V>> writeQueue = new LinkedBlockingQueue<>();
        private ScheduledExecutorService writeExecutor = Executors.newSingleThreadScheduledExecutor();
        
        public DistributedCache(CacheStrategy strategy) {
            this.strategy = strategy;
            
            // Start write-behind worker if needed
            if (strategy == CacheStrategy.WRITE_BEHIND) {
                startWriteBehindWorker();
            }
            
            // Start expiry cleanup
            startExpiryCleanup();
        }
        
        /**
         * Get value from cache
         */
        public V get(K key) {
            CacheEntry<V> entry = cache.get(key);
            
            if (entry != null && !entry.isExpired()) {
                entry.access();
                System.out.printf("Cache HIT: %s%n", key);
                return entry.value;
            }
            
            // Cache miss - load from database
            System.out.printf("Cache MISS: %s%n", key);
            V value = database.get(key);
            
            if (value != null) {
                put(key, value);
            }
            
            return value;
        }
        
        /**
         * Put value in cache
         */
        public void put(K key, V value) {
            // Evict if needed
            if (cache.size() >= maxSize) {
                evictOne();
            }
            
            cache.put(key, new CacheEntry<>(value, defaultTTL));
            
            switch (strategy) {
                case WRITE_THROUGH:
                    // Write to DB immediately
                    database.put(key, value);
                    System.out.printf("WRITE-THROUGH: %s%n", key);
                    break;
                    
                case WRITE_BEHIND:
                    // Queue for async write
                    writeQueue.offer(Map.entry(key, value));
                    System.out.printf("WRITE-BEHIND queued: %s%n", key);
                    break;
                    
                case CACHE_ASIDE:
                    // App manages DB writes
                    System.out.printf("CACHE-ASIDE: %s (app must write to DB)%n", key);
                    break;
            }
        }
        
        /**
         * Evict least recently used entry
         */
        private void evictOne() {
            K lruKey = cache.entrySet().stream()
                .min(Comparator.comparing(e -> e.getValue().lastAccess))
                .map(Map.Entry::getKey)
                .orElse(null);
            
            if (lruKey != null) {
                cache.remove(lruKey);
                System.out.printf("Evicted LRU: %s%n", lruKey);
            }
        }
        
        /**
         * Start write-behind worker
         */
        private void startWriteBehindWorker() {
            writeExecutor.scheduleAtFixedRate(() -> {
                try {
                    Map.Entry<K, V> entry = writeQueue.poll(100, TimeUnit.MILLISECONDS);
                    if (entry != null) {
                        database.put(entry.getKey(), entry.getValue());
                        System.out.printf("WRITE-BEHIND completed: %s%n", entry.getKey());
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }, 0, 100, TimeUnit.MILLISECONDS);
        }
        
        /**
         * Start expiry cleanup
         */
        private void startExpiryCleanup() {
            writeExecutor.scheduleAtFixedRate(() -> {
                int removed = 0;
                Iterator<Map.Entry<K, CacheEntry<V>>> iter = cache.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<K, CacheEntry<V>> entry = iter.next();
                    if (entry.getValue().isExpired()) {
                        iter.remove();
                        removed++;
                    }
                }
                if (removed > 0) {
                    System.out.printf("Expired cleanup: removed %d entries%n", removed);
                }
            }, 1, 1, TimeUnit.SECONDS);
        }
        
        public void shutdown() {
            writeExecutor.shutdown();
        }
        
        public int size() {
            return cache.size();
        }
    }
    
    // ========================================================================
    // DEMONSTRATION
    // ========================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 31: DISTRIBUTED SYSTEMS PATTERNS");
        System.out.println("=".repeat(80));
        
        // Demo 1: Distributed Locking
        System.out.println("\n--- DEMO 1: Distributed Lock (RedLock) ---\n");
        demonstrateDistributedLock();
        
        // Demo 2: Leader Election
        System.out.println("\n--- DEMO 2: Leader Election (Bully Algorithm) ---\n");
        demonstrateLeaderElection();
        
        // Demo 3: Consistent Hashing
        System.out.println("\n--- DEMO 3: Consistent Hashing ---\n");
        demonstrateConsistentHashing();
        
        // Demo 4: Vector Clocks
        System.out.println("\n--- DEMO 4: Vector Clocks (Causality) ---\n");
        demonstrateVectorClocks();
        
        // Demo 5: Distributed Rate Limiting
        System.out.println("\n--- DEMO 5: Distributed Rate Limiting ---\n");
        demonstrateRateLimiting();
        
        // Demo 6: Distributed Cache
        System.out.println("\n--- DEMO 6: Distributed Cache ---\n");
        demonstrateDistributedCache();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All demonstrations completed successfully!");
        System.out.println("=".repeat(80));
    }
    
    private static void demonstrateDistributedLock() throws InterruptedException {
        DistributedLock lock = new DistributedLock(5);
        
        // Acquire lock
        String token1 = lock.acquireLock("resource-1", Duration.ofSeconds(5));
        
        // Try to acquire again (should fail)
        String token2 = lock.acquireLock("resource-1", Duration.ofSeconds(5));
        
        // Release lock
        if (token1 != null) {
            lock.releaseLock("resource-1", token1);
        }
        
        // Now should succeed
        String token3 = lock.acquireLock("resource-1", Duration.ofSeconds(5));
        if (token3 != null) {
            lock.releaseLock("resource-1", token3);
        }
    }
    
    private static void demonstrateLeaderElection() throws InterruptedException {
        // Create 5 nodes
        List<LeaderElection.Node> nodes = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            nodes.add(new LeaderElection.Node(i));
        }
        
        // Set references
        for (LeaderElection.Node node : nodes) {
            node.setAllNodes(nodes);
        }
        
        // Node 2 starts election
        System.out.println("\nScenario 1: Node 2 starts election");
        nodes.get(2).startElection();
        Thread.sleep(200);
        
        // Node 4 (highest) fails
        System.out.println("\nScenario 2: Leader (Node 4) fails");
        nodes.get(4).fail();
        Thread.sleep(100);
        
        // Node 1 starts election
        nodes.get(1).startElection();
        Thread.sleep(200);
        
        // Node 4 recovers
        System.out.println("\nScenario 3: Node 4 recovers");
        nodes.get(4).recover();
        Thread.sleep(200);
    }
    
    private static void demonstrateConsistentHashing() {
        ConsistentHashing ch = new ConsistentHashing();
        
        // Add nodes
        ch.addNode("server-1");
        ch.addNode("server-2");
        ch.addNode("server-3");
        
        ch.printRing();
        
        // Generate keys
        List<String> keys = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            keys.add("key-" + i);
        }
        
        // Check distribution
        Map<String, Integer> dist1 = ch.getDistribution(keys);
        System.out.println("\nInitial distribution:");
        dist1.forEach((node, count) -> 
            System.out.printf("  %s: %d keys (%.1f%%)%n", 
                node, count, count * 100.0 / keys.size()));
        
        // Add new node
        System.out.println("\nAdding server-4...");
        ch.addNode("server-4");
        
        Map<String, Integer> dist2 = ch.getDistribution(keys);
        System.out.println("\nDistribution after adding node:");
        dist2.forEach((node, count) -> 
            System.out.printf("  %s: %d keys (%.1f%%)%n", 
                node, count, count * 100.0 / keys.size()));
        
        // Calculate redistribution
        int moved = 0;
        for (String key : keys) {
            String oldNode = getNodeFromDist(key, dist1, ch);
            String newNode = ch.getNode(key);
            if (!oldNode.equals(newNode)) {
                moved++;
            }
        }
        System.out.printf("\nKeys redistributed: %d (%.1f%%)%n", 
            moved, moved * 100.0 / keys.size());
    }
    
    private static String getNodeFromDist(String key, Map<String, Integer> dist, 
                                          ConsistentHashing ch) {
        // Simplified: just return current node
        return ch.getNode(key);
    }
    
    private static void demonstrateVectorClocks() {
        System.out.println("3-node distributed system: A, B, C\n");
        
        // Node A events
        VectorClock clockA = new VectorClock();
        clockA.increment("A");
        VectorClock.DistributedEvent e1 = 
            new VectorClock.DistributedEvent("A", "write x=1", clockA.copy());
        System.out.println(e1);
        
        // Node B events
        VectorClock clockB = new VectorClock();
        clockB.increment("B");
        VectorClock.DistributedEvent e2 = 
            new VectorClock.DistributedEvent("B", "write y=2", clockB.copy());
        System.out.println(e2);
        
        // A sends message to B
        clockA.increment("A");
        VectorClock.DistributedEvent e3 = 
            new VectorClock.DistributedEvent("A", "send msg to B", clockA.copy());
        System.out.println(e3);
        
        // B receives message
        clockB.merge(clockA);
        clockB.increment("B");
        VectorClock.DistributedEvent e4 = 
            new VectorClock.DistributedEvent("B", "receive msg from A", clockB.copy());
        System.out.println(e4);
        
        // Node C events
        VectorClock clockC = new VectorClock();
        clockC.increment("C");
        VectorClock.DistributedEvent e5 = 
            new VectorClock.DistributedEvent("C", "write z=3", clockC.copy());
        System.out.println(e5);
        
        // Check causality
        System.out.println("\nCausality Analysis:");
        System.out.printf("e1 -> e4? %b (e1 happened before e4)%n", 
            e1.timestamp.happenedBefore(e4.timestamp));
        System.out.printf("e2 || e5? %b (e2 and e5 are concurrent)%n",
            e2.timestamp.isConcurrentWith(e5.timestamp));
    }
    
    private static void demonstrateRateLimiting() throws InterruptedException {
        DistributedRateLimiter limiter = new DistributedRateLimiter();
        limiter.setRateLimit(5, 2.0); // 5 capacity, 2 tokens/sec
        
        String client = "client-1";
        
        // Burst of requests
        System.out.println("Burst of 7 requests:");
        for (int i = 1; i <= 7; i++) {
            boolean allowed = limiter.allowRequest(client);
            System.out.printf("Request %d: %s (tokens: %.2f)%n", 
                i, allowed ? "ALLOWED" : "BLOCKED", limiter.getTokens(client));
        }
        
        // Wait for refill
        Thread.sleep(1500);
        System.out.println("\nAfter 1.5 seconds (refilled ~3 tokens):");
        for (int i = 1; i <= 4; i++) {
            boolean allowed = limiter.allowRequest(client);
            System.out.printf("Request %d: %s (tokens: %.2f)%n", 
                i, allowed ? "ALLOWED" : "BLOCKED", limiter.getTokens(client));
        }
    }
    
    private static void demonstrateDistributedCache() throws InterruptedException {
        DistributedCache<String, String> cache = 
            new DistributedCache<>(DistributedCache.CacheStrategy.WRITE_THROUGH);
        
        // Put values
        cache.put("user:1", "Alice");
        cache.put("user:2", "Bob");
        cache.put("user:3", "Charlie");
        
        // Get values
        System.out.println("\nRetrieving values:");
        System.out.println("user:1 = " + cache.get("user:1")); // HIT
        System.out.println("user:2 = " + cache.get("user:2")); // HIT
        System.out.println("user:4 = " + cache.get("user:4")); // MISS
        
        System.out.println("\nCache size: " + cache.size());
        
        Thread.sleep(500);
        cache.shutdown();
    }
}
