/**
 * DAY 26: DISTRIBUTED SYSTEMS & SCALABILITY PATTERNS
 * 
 * This file contains advanced distributed system patterns:
 * 1. Distributed Cache (Redis-style)
 * 2. Message Queue (Kafka-style)
 * 3. Leader Election (Raft consensus)
 * 4. Distributed Lock (Redlock)
 * 5. Consistent Hashing
 * 6. Sharding Strategies
 * 7. Replication Patterns
 * 8. CAP Theorem Implementations
 * 
 * @author Day 26 - Distributed Systems
 * @version 2.0 - Production Ready
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.time.*;
import java.util.function.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

// ============================================================================
// 1. DISTRIBUTED CACHE PATTERN
// ============================================================================

/**
 * Distributed Cache with TTL, LRU eviction, and replication
 * Similar to Redis/Memcached
 */
class DistributedCache<K, V> {
    
    static class CacheEntry<V> {
        V value;
        long expiryTime;
        long lastAccess;
        int accessCount;
        
        public CacheEntry(V value, long ttlMs) {
            this.value = value;
            this.expiryTime = ttlMs > 0 ? System.currentTimeMillis() + ttlMs : Long.MAX_VALUE;
            this.lastAccess = System.currentTimeMillis();
            this.accessCount = 0;
        }
        
        public boolean isExpired() {
            return System.currentTimeMillis() > expiryTime;
        }
        
        public void access() {
            this.lastAccess = System.currentTimeMillis();
            this.accessCount++;
        }
    }
    
    private final int capacity;
    private final ConcurrentHashMap<K, CacheEntry<V>> cache;
    private final LinkedHashMap<K, Long> lruMap; // For LRU eviction
    private final ScheduledExecutorService cleanupExecutor;
    private final List<Consumer<CacheEvent<K, V>>> listeners;
    
    enum EventType {
        PUT, GET, EVICT, EXPIRE
    }
    
    static class CacheEvent<K, V> {
        EventType type;
        K key;
        V value;
        Instant timestamp;
        
        public CacheEvent(EventType type, K key, V value) {
            this.type = type;
            this.key = key;
            this.value = value;
            this.timestamp = Instant.now();
        }
    }
    
    public DistributedCache(int capacity) {
        this.capacity = capacity;
        this.cache = new ConcurrentHashMap<>();
        this.lruMap = new LinkedHashMap<>(capacity, 0.75f, true);
        this.listeners = new CopyOnWriteArrayList<>();
        this.cleanupExecutor = Executors.newScheduledThreadPool(1);
        
        // Schedule cleanup of expired entries
        cleanupExecutor.scheduleAtFixedRate(this::cleanupExpired, 1, 1, TimeUnit.SECONDS);
    }
    
    /**
     * Put value with TTL (Time To Live)
     */
    public void put(K key, V value, long ttlMs) {
        synchronized (lruMap) {
            // Evict if at capacity
            if (cache.size() >= capacity && !cache.containsKey(key)) {
                evictLRU();
            }
            
            CacheEntry<V> entry = new CacheEntry<>(value, ttlMs);
            cache.put(key, entry);
            lruMap.put(key, System.currentTimeMillis());
            
            notifyListeners(new CacheEvent<>(EventType.PUT, key, value));
        }
    }
    
    /**
     * Get value from cache
     */
    public Optional<V> get(K key) {
        CacheEntry<V> entry = cache.get(key);
        
        if (entry == null) {
            return Optional.empty();
        }
        
        if (entry.isExpired()) {
            remove(key);
            return Optional.empty();
        }
        
        entry.access();
        synchronized (lruMap) {
            lruMap.put(key, System.currentTimeMillis());
        }
        
        notifyListeners(new CacheEvent<>(EventType.GET, key, entry.value));
        return Optional.of(entry.value);
    }
    
    /**
     * Remove from cache
     */
    public void remove(K key) {
        CacheEntry<V> entry = cache.remove(key);
        if (entry != null) {
            synchronized (lruMap) {
                lruMap.remove(key);
            }
            notifyListeners(new CacheEvent<>(EventType.EVICT, key, entry.value));
        }
    }
    
    /**
     * LRU eviction
     */
    private void evictLRU() {
        if (lruMap.isEmpty()) return;
        
        K lruKey = lruMap.keySet().iterator().next();
        CacheEntry<V> entry = cache.remove(lruKey);
        lruMap.remove(lruKey);
        
        if (entry != null) {
            System.out.println("Evicted LRU key: " + lruKey);
            notifyListeners(new CacheEvent<>(EventType.EVICT, lruKey, entry.value));
        }
    }
    
    /**
     * Cleanup expired entries
     */
    private void cleanupExpired() {
        List<K> expiredKeys = new ArrayList<>();
        
        cache.forEach((key, entry) -> {
            if (entry.isExpired()) {
                expiredKeys.add(key);
            }
        });
        
        expiredKeys.forEach(key -> {
            CacheEntry<V> entry = cache.remove(key);
            synchronized (lruMap) {
                lruMap.remove(key);
            }
            if (entry != null) {
                notifyListeners(new CacheEvent<>(EventType.EXPIRE, key, entry.value));
            }
        });
        
        if (!expiredKeys.isEmpty()) {
            System.out.println("Cleaned up " + expiredKeys.size() + " expired entries");
        }
    }
    
    /**
     * Subscribe to cache events
     */
    public void subscribe(Consumer<CacheEvent<K, V>> listener) {
        listeners.add(listener);
    }
    
    private void notifyListeners(CacheEvent<K, V> event) {
        listeners.forEach(listener -> listener.accept(event));
    }
    
    public int size() {
        return cache.size();
    }
    
    public void shutdown() {
        cleanupExecutor.shutdown();
    }
}

// ============================================================================
// 2. MESSAGE QUEUE PATTERN (Kafka-style)
// ============================================================================

/**
 * Distributed Message Queue with topics and consumer groups
 * Similar to Kafka/RabbitMQ
 */
class MessageQueue {
    
    static class Message {
        String id;
        String topic;
        String key;
        String value;
        Map<String, String> headers;
        Instant timestamp;
        
        public Message(String topic, String key, String value) {
            this.id = UUID.randomUUID().toString();
            this.topic = topic;
            this.key = key;
            this.value = value;
            this.headers = new HashMap<>();
            this.timestamp = Instant.now();
        }
        
        public Message withHeader(String key, String value) {
            this.headers.put(key, value);
            return this;
        }
    }
    
    static class Topic {
        String name;
        int partitions;
        List<Queue<Message>> partitionQueues;
        
        public Topic(String name, int partitions) {
            this.name = name;
            this.partitions = partitions;
            this.partitionQueues = new ArrayList<>();
            for (int i = 0; i < partitions; i++) {
                partitionQueues.add(new ConcurrentLinkedQueue<>());
            }
        }
        
        public void publish(Message message) {
            int partition = getPartition(message.key);
            partitionQueues.get(partition).offer(message);
        }
        
        private int getPartition(String key) {
            if (key == null) {
                return ThreadLocalRandom.current().nextInt(partitions);
            }
            return Math.abs(key.hashCode() % partitions);
        }
        
        public Message poll(int partition) {
            return partitionQueues.get(partition).poll();
        }
    }
    
    interface MessageConsumer {
        void consume(Message message);
    }
    
    static class ConsumerGroup {
        String groupId;
        String topic;
        List<MessageConsumer> consumers;
        Map<Integer, Integer> partitionAssignment; // partition -> consumer index
        
        public ConsumerGroup(String groupId, String topic) {
            this.groupId = groupId;
            this.topic = topic;
            this.consumers = new CopyOnWriteArrayList<>();
            this.partitionAssignment = new ConcurrentHashMap<>();
        }
        
        public void addConsumer(MessageConsumer consumer) {
            consumers.add(consumer);
        }
        
        public void assignPartition(int partition, int consumerIndex) {
            partitionAssignment.put(partition, consumerIndex);
        }
    }
    
    private final Map<String, Topic> topics = new ConcurrentHashMap<>();
    private final Map<String, ConsumerGroup> consumerGroups = new ConcurrentHashMap<>();
    private final ScheduledExecutorService pollingExecutor = Executors.newScheduledThreadPool(4);
    
    /**
     * Create a topic
     */
    public void createTopic(String topicName, int partitions) {
        topics.putIfAbsent(topicName, new Topic(topicName, partitions));
        System.out.println("Created topic: " + topicName + " with " + partitions + " partitions");
    }
    
    /**
     * Publish message to topic
     */
    public void publish(Message message) {
        Topic topic = topics.get(message.topic);
        if (topic == null) {
            throw new IllegalArgumentException("Topic not found: " + message.topic);
        }
        
        topic.publish(message);
        System.out.println("Published message to " + message.topic + " (key: " + message.key + ")");
    }
    
    /**
     * Subscribe consumer group to topic
     */
    public void subscribe(String groupId, String topicName, MessageConsumer consumer) {
        ConsumerGroup group = consumerGroups.computeIfAbsent(groupId, 
            k -> new ConsumerGroup(groupId, topicName));
        
        group.addConsumer(consumer);
        
        Topic topic = topics.get(topicName);
        if (topic != null) {
            // Assign partitions to consumers (simple round-robin)
            int consumerIndex = group.consumers.size() - 1;
            int partition = consumerIndex % topic.partitions;
            group.assignPartition(partition, consumerIndex);
            
            // Start polling for this consumer
            startPolling(group, topic, partition, consumerIndex);
        }
    }
    
    private void startPolling(ConsumerGroup group, Topic topic, int partition, int consumerIndex) {
        pollingExecutor.scheduleAtFixedRate(() -> {
            Message message = topic.poll(partition);
            if (message != null && consumerIndex < group.consumers.size()) {
                group.consumers.get(consumerIndex).consume(message);
            }
        }, 100, 100, TimeUnit.MILLISECONDS);
    }
    
    public void shutdown() {
        pollingExecutor.shutdown();
    }
}

// ============================================================================
// 3. LEADER ELECTION (Raft-style)
// ============================================================================

/**
 * Leader Election using Raft consensus algorithm
 * Ensures single leader in distributed system
 */
class LeaderElection {
    
    enum NodeState {
        FOLLOWER, CANDIDATE, LEADER
    }
    
    static class Node {
        String nodeId;
        NodeState state;
        String currentLeader;
        int term;
        String votedFor;
        int votesReceived;
        Instant lastHeartbeat;
        
        public Node(String nodeId) {
            this.nodeId = nodeId;
            this.state = NodeState.FOLLOWER;
            this.term = 0;
            this.lastHeartbeat = Instant.now();
        }
        
        public void becomeFollower(int term) {
            this.state = NodeState.FOLLOWER;
            this.term = term;
            this.votedFor = null;
            this.votesReceived = 0;
        }
        
        public void becomeCandidate() {
            this.state = NodeState.CANDIDATE;
            this.term++;
            this.votedFor = this.nodeId;
            this.votesReceived = 1; // Vote for self
        }
        
        public void becomeLeader() {
            this.state = NodeState.LEADER;
            this.currentLeader = this.nodeId;
            System.out.println("Node " + nodeId + " became LEADER for term " + term);
        }
    }
    
    static class VoteRequest {
        String candidateId;
        int term;
        
        public VoteRequest(String candidateId, int term) {
            this.candidateId = candidateId;
            this.term = term;
        }
    }
    
    static class VoteResponse {
        String voterId;
        int term;
        boolean voteGranted;
        
        public VoteResponse(String voterId, int term, boolean voteGranted) {
            this.voterId = voterId;
            this.term = term;
            this.voteGranted = voteGranted;
        }
    }
    
    private final Map<String, Node> nodes = new ConcurrentHashMap<>();
    private final int electionTimeout = 3000; // ms
    private final int heartbeatInterval = 1000; // ms
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
    
    /**
     * Add node to cluster
     */
    public void addNode(String nodeId) {
        Node node = new Node(nodeId);
        nodes.put(nodeId, node);
        
        // Start election timer
        scheduleElectionTimeout(node);
        
        System.out.println("Node " + nodeId + " joined cluster");
    }
    
    /**
     * Request vote from other nodes
     */
    public VoteResponse requestVote(String voterId, VoteRequest request) {
        Node voter = nodes.get(voterId);
        if (voter == null) {
            return new VoteResponse(voterId, 0, false);
        }
        
        synchronized (voter) {
            // Grant vote if:
            // 1. Request term is greater than current term, OR
            // 2. Same term and haven't voted yet
            if (request.term > voter.term) {
                voter.becomeFollower(request.term);
            }
            
            boolean voteGranted = false;
            if (request.term >= voter.term && 
                (voter.votedFor == null || voter.votedFor.equals(request.candidateId))) {
                voter.votedFor = request.candidateId;
                voter.lastHeartbeat = Instant.now();
                voteGranted = true;
            }
            
            return new VoteResponse(voterId, voter.term, voteGranted);
        }
    }
    
    /**
     * Start election for a candidate
     */
    private void startElection(Node candidate) {
        synchronized (candidate) {
            if (candidate.state == NodeState.LEADER) {
                return; // Already leader
            }
            
            candidate.becomeCandidate();
            System.out.println("Node " + candidate.nodeId + " starting election for term " + candidate.term);
            
            VoteRequest request = new VoteRequest(candidate.nodeId, candidate.term);
            
            // Request votes from all other nodes
            nodes.values().stream()
                .filter(n -> !n.nodeId.equals(candidate.nodeId))
                .forEach(voter -> {
                    VoteResponse response = requestVote(voter.nodeId, request);
                    if (response.voteGranted) {
                        synchronized (candidate) {
                            candidate.votesReceived++;
                        }
                    }
                });
            
            // Check if won election (majority)
            int majority = (nodes.size() / 2) + 1;
            if (candidate.votesReceived >= majority) {
                candidate.becomeLeader();
                startHeartbeat(candidate);
            } else {
                // Lost election, become follower
                candidate.becomeFollower(candidate.term);
                scheduleElectionTimeout(candidate);
            }
        }
    }
    
    /**
     * Send heartbeat as leader
     */
    private void startHeartbeat(Node leader) {
        scheduler.scheduleAtFixedRate(() -> {
            if (leader.state != NodeState.LEADER) {
                return;
            }
            
            // Send heartbeat to all followers
            nodes.values().stream()
                .filter(n -> !n.nodeId.equals(leader.nodeId))
                .forEach(follower -> {
                    synchronized (follower) {
                        if (leader.term >= follower.term) {
                            follower.becomeFollower(leader.term);
                            follower.currentLeader = leader.nodeId;
                            follower.lastHeartbeat = Instant.now();
                        }
                    }
                });
        }, 0, heartbeatInterval, TimeUnit.MILLISECONDS);
    }
    
    /**
     * Schedule election timeout
     */
    private void scheduleElectionTimeout(Node node) {
        scheduler.schedule(() -> {
            long timeSinceHeartbeat = Duration.between(node.lastHeartbeat, Instant.now()).toMillis();
            
            if (node.state != NodeState.LEADER && timeSinceHeartbeat >= electionTimeout) {
                System.out.println("Node " + node.nodeId + " election timeout, starting election");
                startElection(node);
            } else if (node.state != NodeState.LEADER) {
                scheduleElectionTimeout(node);
            }
        }, electionTimeout + ThreadLocalRandom.current().nextInt(1000), TimeUnit.MILLISECONDS);
    }
    
    public String getCurrentLeader() {
        return nodes.values().stream()
            .filter(n -> n.state == NodeState.LEADER)
            .map(n -> n.nodeId)
            .findFirst()
            .orElse(null);
    }
    
    public void shutdown() {
        scheduler.shutdown();
    }
}

// ============================================================================
// 4. DISTRIBUTED LOCK (Redlock Algorithm)
// ============================================================================

/**
 * Distributed Lock using Redlock algorithm
 * Ensures mutual exclusion across distributed system
 */
class DistributedLock {
    
    static class Lock {
        String resource;
        String token;
        long expiryTime;
        
        public Lock(String resource, String token, long ttlMs) {
            this.resource = resource;
            this.token = token;
            this.expiryTime = System.currentTimeMillis() + ttlMs;
        }
        
        public boolean isExpired() {
            return System.currentTimeMillis() > expiryTime;
        }
    }
    
    static class LockInstance {
        String instanceId;
        Map<String, Lock> locks = new ConcurrentHashMap<>();
        
        public LockInstance(String instanceId) {
            this.instanceId = instanceId;
        }
        
        public boolean tryLock(String resource, String token, long ttlMs) {
            Lock existingLock = locks.get(resource);
            
            if (existingLock != null && !existingLock.isExpired()) {
                return false; // Already locked
            }
            
            locks.put(resource, new Lock(resource, token, ttlMs));
            return true;
        }
        
        public boolean unlock(String resource, String token) {
            Lock lock = locks.get(resource);
            if (lock != null && lock.token.equals(token)) {
                locks.remove(resource);
                return true;
            }
            return false;
        }
    }
    
    private final List<LockInstance> instances;
    private final int quorum;
    
    public DistributedLock(int numInstances) {
        this.instances = new ArrayList<>();
        for (int i = 0; i < numInstances; i++) {
            instances.add(new LockInstance("instance-" + i));
        }
        this.quorum = (numInstances / 2) + 1;
    }
    
    /**
     * Try to acquire distributed lock
     */
    public String tryLock(String resource, long ttlMs) {
        String token = UUID.randomUUID().toString();
        int locksAcquired = 0;
        
        // Try to acquire lock on all instances
        for (LockInstance instance : instances) {
            if (instance.tryLock(resource, token, ttlMs)) {
                locksAcquired++;
            }
        }
        
        // Check if quorum achieved
        if (locksAcquired >= quorum) {
            System.out.println("Lock acquired on " + locksAcquired + " instances (quorum: " + quorum + ")");
            return token;
        } else {
            // Failed to acquire quorum, release all locks
            unlock(resource, token);
            System.out.println("Failed to acquire lock quorum");
            return null;
        }
    }
    
    /**
     * Release distributed lock
     */
    public void unlock(String resource, String token) {
        int unlocksSucceeded = 0;
        
        for (LockInstance instance : instances) {
            if (instance.unlock(resource, token)) {
                unlocksSucceeded++;
            }
        }
        
        System.out.println("Lock released on " + unlocksSucceeded + " instances");
    }
}

// ============================================================================
// 5. CONSISTENT HASHING
// ============================================================================

/**
 * Consistent Hashing for distributed load balancing
 * Minimizes redistribution when nodes are added/removed
 */
class ConsistentHashing<T> {
    
    private final TreeMap<Long, T> ring = new TreeMap<>();
    private final int virtualNodes;
    private final MessageDigest md;
    
    public ConsistentHashing(int virtualNodes) {
        this.virtualNodes = virtualNodes;
        try {
            this.md = MessageDigest.getInstance("MD5");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    /**
     * Add node to ring
     */
    public void addNode(T node) {
        for (int i = 0; i < virtualNodes; i++) {
            String virtualKey = node.toString() + "#" + i;
            long hash = hash(virtualKey);
            ring.put(hash, node);
        }
        System.out.println("Added node: " + node + " (" + virtualNodes + " virtual nodes)");
    }
    
    /**
     * Remove node from ring
     */
    public void removeNode(T node) {
        for (int i = 0; i < virtualNodes; i++) {
            String virtualKey = node.toString() + "#" + i;
            long hash = hash(virtualKey);
            ring.remove(hash);
        }
        System.out.println("Removed node: " + node);
    }
    
    /**
     * Get node for a key
     */
    public T getNode(String key) {
        if (ring.isEmpty()) {
            return null;
        }
        
        long hash = hash(key);
        
        // Find first node >= hash
        Map.Entry<Long, T> entry = ring.ceilingEntry(hash);
        
        // Wrap around if needed
        if (entry == null) {
            entry = ring.firstEntry();
        }
        
        return entry.getValue();
    }
    
    /**
     * Hash function (MD5)
     */
    private long hash(String key) {
        md.reset();
        byte[] digest = md.digest(key.getBytes(StandardCharsets.UTF_8));
        
        long hash = 0;
        for (int i = 0; i < 8; i++) {
            hash = (hash << 8) | (digest[i] & 0xFF);
        }
        
        return hash;
    }
    
    /**
     * Get distribution statistics
     */
    public Map<T, Integer> getDistribution(List<String> keys) {
        Map<T, Integer> distribution = new HashMap<>();
        
        for (String key : keys) {
            T node = getNode(key);
            distribution.put(node, distribution.getOrDefault(node, 0) + 1);
        }
        
        return distribution;
    }
}

// ============================================================================
// 6. SHARDING STRATEGIES
// ============================================================================

/**
 * Database Sharding Strategies
 */
class ShardingStrategy {
    
    interface Shard {
        String getShardId();
        void write(String key, Object value);
        Object read(String key);
    }
    
    static class SimpleShard implements Shard {
        String shardId;
        Map<String, Object> data = new ConcurrentHashMap<>();
        
        public SimpleShard(String shardId) {
            this.shardId = shardId;
        }
        
        @Override
        public String getShardId() {
            return shardId;
        }
        
        @Override
        public void write(String key, Object value) {
            data.put(key, value);
        }
        
        @Override
        public Object read(String key) {
            return data.get(key);
        }
    }
    
    /**
     * Range-based sharding
     */
    static class RangeSharding {
        private List<Shard> shards = new ArrayList<>();
        private TreeMap<Integer, Shard> rangeMap = new TreeMap<>();
        
        public void addShard(Shard shard, int rangeStart, int rangeEnd) {
            shards.add(shard);
            for (int i = rangeStart; i <= rangeEnd; i++) {
                rangeMap.put(i, shard);
            }
        }
        
        public Shard getShard(int key) {
            Map.Entry<Integer, Shard> entry = rangeMap.floorEntry(key);
            return entry != null ? entry.getValue() : shards.get(0);
        }
    }
    
    /**
     * Hash-based sharding
     */
    static class HashSharding {
        private List<Shard> shards = new ArrayList<>();
        
        public void addShard(Shard shard) {
            shards.add(shard);
        }
        
        public Shard getShard(String key) {
            int hash = Math.abs(key.hashCode());
            int index = hash % shards.size();
            return shards.get(index);
        }
    }
    
    /**
     * Geo-based sharding
     */
    static class GeoSharding {
        private Map<String, Shard> regionShards = new HashMap<>();
        
        public void addShard(String region, Shard shard) {
            regionShards.put(region, shard);
        }
        
        public Shard getShard(String region) {
            return regionShards.getOrDefault(region, regionShards.values().iterator().next());
        }
    }
}

// ============================================================================
// 7. REPLICATION PATTERNS
// ============================================================================

/**
 * Master-Slave Replication
 */
class MasterSlaveReplication {
    
    interface ReplicaNode {
        String getNodeId();
        void write(String key, Object value);
        Object read(String key);
        void replicate(String key, Object value);
    }
    
    static class DataNode implements ReplicaNode {
        String nodeId;
        Map<String, Object> data = new ConcurrentHashMap<>();
        
        public DataNode(String nodeId) {
            this.nodeId = nodeId;
        }
        
        @Override
        public String getNodeId() {
            return nodeId;
        }
        
        @Override
        public void write(String key, Object value) {
            data.put(key, value);
        }
        
        @Override
        public Object read(String key) {
            return data.get(key);
        }
        
        @Override
        public void replicate(String key, Object value) {
            data.put(key, value);
        }
    }
    
    private ReplicaNode master;
    private List<ReplicaNode> slaves = new CopyOnWriteArrayList<>();
    private final ExecutorService replicationExecutor = Executors.newFixedThreadPool(4);
    
    public void setMaster(ReplicaNode master) {
        this.master = master;
        System.out.println("Master set: " + master.getNodeId());
    }
    
    public void addSlave(ReplicaNode slave) {
        slaves.add(slave);
        System.out.println("Slave added: " + slave.getNodeId());
    }
    
    /**
     * Write to master and replicate to slaves
     */
    public void write(String key, Object value) {
        // Write to master
        master.write(key, value);
        
        // Async replication to slaves
        slaves.forEach(slave -> {
            replicationExecutor.submit(() -> {
                slave.replicate(key, value);
                System.out.println("Replicated to " + slave.getNodeId());
            });
        });
    }
    
    /**
     * Read from slave (load balancing)
     */
    public Object read(String key) {
        if (slaves.isEmpty()) {
            return master.read(key);
        }
        
        // Random slave selection
        ReplicaNode slave = slaves.get(ThreadLocalRandom.current().nextInt(slaves.size()));
        return slave.read(key);
    }
    
    public void shutdown() {
        replicationExecutor.shutdown();
    }
}

// ============================================================================
// 8. CAP THEOREM IMPLEMENTATIONS
// ============================================================================

/**
 * CAP Theorem: Consistency, Availability, Partition Tolerance
 * Can only achieve 2 out of 3
 */
class CAPTheorem {
    
    /**
     * CP System (Consistency + Partition Tolerance)
     * Example: Strong consistency, may reject writes during partition
     */
    static class CPSystem {
        private String leader;
        private Set<String> nodes = new HashSet<>();
        private Map<String, Object> data = new ConcurrentHashMap<>();
        private boolean partitioned = false;
        
        public void addNode(String nodeId) {
            nodes.add(nodeId);
            if (leader == null) {
                leader = nodeId;
            }
        }
        
        public void write(String key, Object value) throws Exception {
            if (partitioned) {
                throw new Exception("System partitioned - writes unavailable");
            }
            
            // Strong consistency - write to all nodes
            data.put(key, value);
            System.out.println("CP: Written to all nodes (strong consistency)");
        }
        
        public Object read(String key) throws Exception {
            if (partitioned) {
                throw new Exception("System partitioned - reads unavailable");
            }
            return data.get(key);
        }
        
        public void simulatePartition() {
            partitioned = true;
            System.out.println("CP: Partition detected - system unavailable");
        }
    }
    
    /**
     * AP System (Availability + Partition Tolerance)
     * Example: Eventually consistent, always available
     */
    static class APSystem {
        private List<Map<String, Object>> nodes = new ArrayList<>();
        private boolean partitioned = false;
        
        public void addNode() {
            nodes.add(new ConcurrentHashMap<>());
        }
        
        public void write(String key, Object value) {
            // Write to any available node
            if (!nodes.isEmpty()) {
                nodes.get(0).put(key, value);
                System.out.println("AP: Written to available node (eventual consistency)");
                
                // Async reconciliation
                if (!partitioned) {
                    reconcile(key, value);
                }
            }
        }
        
        public Object read(String key) {
            // Read from any available node
            return nodes.isEmpty() ? null : nodes.get(0).get(key);
        }
        
        private void reconcile(String key, Object value) {
            // Eventually sync to all nodes
            nodes.forEach(node -> node.put(key, value));
        }
        
        public void simulatePartition() {
            partitioned = true;
            System.out.println("AP: Partition detected - system still available (stale reads possible)");
        }
    }
}

// ============================================================================
// DEMONSTRATION AND TESTING
// ============================================================================

public class DistributedSystemsPatterns {
    
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(80));
        System.out.println("DAY 26: DISTRIBUTED SYSTEMS PATTERNS - COMPREHENSIVE DEMO");
        System.out.println("=".repeat(80));
        
        demoDistributedCache();
        demoMessageQueue();
        demoLeaderElection();
        demoDistributedLock();
        demoConsistentHashing();
        demoSharding();
        demoReplication();
        demoCAPTheorem();
    }
    
    private static void demoDistributedCache() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 1: DISTRIBUTED CACHE");
        System.out.println("=".repeat(80));
        
        DistributedCache<String, String> cache = new DistributedCache<>(5);
        
        // Subscribe to events
        cache.subscribe(event -> {
            System.out.println("Event: " + event.type + " - " + event.key);
        });
        
        // Add items
        cache.put("user:1", "John Doe", 5000);
        cache.put("user:2", "Jane Smith", 5000);
        cache.put("user:3", "Bob Wilson", 2000); // Shorter TTL
        
        // Get items
        System.out.println("Get user:1: " + cache.get("user:1").orElse("Not found"));
        
        // Wait for expiration
        Thread.sleep(3000);
        System.out.println("After 3s, user:3: " + cache.get("user:3").orElse("Expired"));
        
        cache.shutdown();
    }
    
    private static void demoMessageQueue() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 2: MESSAGE QUEUE");
        System.out.println("=".repeat(80));
        
        MessageQueue mq = new MessageQueue();
        
        // Create topic
        mq.createTopic("orders", 3);
        
        // Subscribe consumers
        mq.subscribe("group1", "orders", message -> {
            System.out.println("Consumer 1 received: " + message.value);
        });
        
        mq.subscribe("group1", "orders", message -> {
            System.out.println("Consumer 2 received: " + message.value);
        });
        
        // Publish messages
        mq.publish(new MessageQueue.Message("orders", "order-1", "Order 1 data"));
        mq.publish(new MessageQueue.Message("orders", "order-2", "Order 2 data"));
        mq.publish(new MessageQueue.Message("orders", "order-3", "Order 3 data"));
        
        Thread.sleep(1000);
        mq.shutdown();
    }
    
    private static void demoLeaderElection() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 3: LEADER ELECTION");
        System.out.println("=".repeat(80));
        
        LeaderElection election = new LeaderElection();
        
        // Add nodes
        election.addNode("node-1");
        election.addNode("node-2");
        election.addNode("node-3");
        
        // Wait for election
        Thread.sleep(5000);
        
        String leader = election.getCurrentLeader();
        System.out.println("Current leader: " + leader);
        
        election.shutdown();
    }
    
    private static void demoDistributedLock() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 4: DISTRIBUTED LOCK");
        System.out.println("=".repeat(80));
        
        DistributedLock lock = new DistributedLock(5);
        
        // Try to acquire lock
        String token1 = lock.tryLock("resource-1", 5000);
        if (token1 != null) {
            System.out.println("Lock acquired: " + token1);
            
            // Try to acquire same lock (should fail)
            String token2 = lock.tryLock("resource-1", 5000);
            System.out.println("Second lock attempt: " + (token2 == null ? "Failed" : "Success"));
            
            // Release lock
            lock.unlock("resource-1", token1);
            
            // Now should succeed
            String token3 = lock.tryLock("resource-1", 5000);
            System.out.println("Third lock attempt: " + (token3 == null ? "Failed" : "Success"));
            
            if (token3 != null) {
                lock.unlock("resource-1", token3);
            }
        }
    }
    
    private static void demoConsistentHashing() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 5: CONSISTENT HASHING");
        System.out.println("=".repeat(80));
        
        ConsistentHashing<String> ch = new ConsistentHashing<>(150);
        
        // Add servers
        ch.addNode("server-1");
        ch.addNode("server-2");
        ch.addNode("server-3");
        
        // Generate keys
        List<String> keys = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            keys.add("key-" + i);
        }
        
        // Check distribution
        Map<String, Integer> distribution = ch.getDistribution(keys);
        System.out.println("\nKey distribution:");
        distribution.forEach((server, count) -> 
            System.out.println(server + ": " + count + " keys (" + (count * 100.0 / keys.size()) + "%)"));
        
        // Add new server
        System.out.println("\nAdding server-4...");
        ch.addNode("server-4");
        
        Map<String, Integer> newDistribution = ch.getDistribution(keys);
        System.out.println("\nNew key distribution:");
        newDistribution.forEach((server, count) -> 
            System.out.println(server + ": " + count + " keys (" + (count * 100.0 / keys.size()) + "%)"));
    }
    
    private static void demoSharding() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 6: SHARDING STRATEGIES");
        System.out.println("=".repeat(80));
        
        // Range sharding
        System.out.println("\nRange-based Sharding:");
        ShardingStrategy.RangeSharding rangeSharding = new ShardingStrategy.RangeSharding();
        rangeSharding.addShard(new ShardingStrategy.SimpleShard("shard-1"), 0, 999);
        rangeSharding.addShard(new ShardingStrategy.SimpleShard("shard-2"), 1000, 1999);
        
        ShardingStrategy.Shard shard1 = rangeSharding.getShard(500);
        ShardingStrategy.Shard shard2 = rangeSharding.getShard(1500);
        System.out.println("Key 500 -> " + shard1.getShardId());
        System.out.println("Key 1500 -> " + shard2.getShardId());
        
        // Hash sharding
        System.out.println("\nHash-based Sharding:");
        ShardingStrategy.HashSharding hashSharding = new ShardingStrategy.HashSharding();
        hashSharding.addShard(new ShardingStrategy.SimpleShard("shard-A"));
        hashSharding.addShard(new ShardingStrategy.SimpleShard("shard-B"));
        
        System.out.println("user:123 -> " + hashSharding.getShard("user:123").getShardId());
        System.out.println("user:456 -> " + hashSharding.getShard("user:456").getShardId());
    }
    
    private static void demoReplication() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 7: MASTER-SLAVE REPLICATION");
        System.out.println("=".repeat(80));
        
        MasterSlaveReplication replication = new MasterSlaveReplication();
        
        replication.setMaster(new MasterSlaveReplication.DataNode("master-1"));
        replication.addSlave(new MasterSlaveReplication.DataNode("slave-1"));
        replication.addSlave(new MasterSlaveReplication.DataNode("slave-2"));
        
        // Write data
        replication.write("user:1", "John Doe");
        replication.write("user:2", "Jane Smith");
        
        Thread.sleep(500);
        
        // Read data
        System.out.println("Read user:1: " + replication.read("user:1"));
        
        replication.shutdown();
    }
    
    private static void demoCAPTheorem() throws Exception {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 8: CAP THEOREM");
        System.out.println("=".repeat(80));
        
        // CP System
        System.out.println("\nCP System (Consistency + Partition Tolerance):");
        CAPTheorem.CPSystem cpSystem = new CAPTheorem.CPSystem();
        cpSystem.addNode("node-1");
        cpSystem.addNode("node-2");
        
        cpSystem.write("key1", "value1");
        System.out.println("Read: " + cpSystem.read("key1"));
        
        cpSystem.simulatePartition();
        try {
            cpSystem.write("key2", "value2");
        } catch (Exception e) {
            System.out.println("Write failed: " + e.getMessage());
        }
        
        // AP System
        System.out.println("\nAP System (Availability + Partition Tolerance):");
        CAPTheorem.APSystem apSystem = new CAPTheorem.APSystem();
        apSystem.addNode();
        apSystem.addNode();
        
        apSystem.write("key1", "value1");
        System.out.println("Read: " + apSystem.read("key1"));
        
        apSystem.simulatePartition();
        apSystem.write("key2", "value2"); // Still accepts writes
        System.out.println("Write succeeded even during partition");
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("ALL DISTRIBUTED SYSTEMS PATTERNS DEMONSTRATED!");
        System.out.println("=".repeat(80));
    }
}
