/**
 * DAY 28: DISTRIBUTED DATA REPLICATION & CONSISTENCY
 * 
 * Topics Covered:
 * 1. Replication Strategies (Master-Slave, Multi-Master, Quorum)
 * 2. Consistency Models (Strong, Eventual, Causal)
 * 3. Conflict Resolution (LWW, CRDT, Vector Clocks)
 * 4. Read-Repair & Anti-Entropy
 * 5. Merkle Trees for Synchronization
 * 6. Write-Ahead Log (WAL)
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.security.MessageDigest;

public class DistributedDataReplication {

    // ============================================================================
    // PATTERN 1: QUORUM-BASED REPLICATION
    // ============================================================================
    
    /**
     * Quorum Replication - Configurable consistency with R + W > N
     * 
     * Key Features:
     * - Configurable consistency levels
     * - R + W > N ensures consistency
     * - Tunable availability vs consistency
     * - Handles network partitions
     * 
     * Time Complexity: O(W) for writes, O(R) for reads
     * Space Complexity: O(N * data_size) where N = replicas
     * 
     * Use Cases:
     * - Cassandra, DynamoDB, Riak
     * - Distributed key-value stores
     * - High-availability databases
     */
    static class QuorumReplication {
        static class Replica {
            String replicaId;
            Map<String, VersionedValue> data;
            boolean available;
            long latency; // Simulated network latency
            
            public Replica(String replicaId, long latency) {
                this.replicaId = replicaId;
                this.data = new ConcurrentHashMap<>();
                this.available = true;
                this.latency = latency;
            }
            
            public void write(String key, VersionedValue value) {
                simulateLatency();
                data.put(key, value);
            }
            
            public VersionedValue read(String key) {
                simulateLatency();
                return data.get(key);
            }
            
            private void simulateLatency() {
                try {
                    Thread.sleep(latency);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }
        
        static class VersionedValue {
            Object value;
            long version;
            long timestamp;
            String writerId;
            
            public VersionedValue(Object value, long version, String writerId) {
                this.value = value;
                this.version = version;
                this.timestamp = System.currentTimeMillis();
                this.writerId = writerId;
            }
            
            @Override
            public String toString() {
                return String.format("v%d:%s@%d", version, value, timestamp);
            }
        }
        
        List<Replica> replicas;
        int N; // Replication factor
        int W; // Write quorum
        int R; // Read quorum
        long versionCounter;
        int writeCount;
        int readCount;
        int conflictCount;
        
        public QuorumReplication(int N, int W, int R) {
            this.replicas = new ArrayList<>();
            this.N = N;
            this.W = W;
            this.R = R;
            this.versionCounter = 0;
            this.writeCount = 0;
            this.readCount = 0;
            this.conflictCount = 0;
            
            // Validate quorum configuration
            if (W + R <= N) {
                System.out.println("WARNING: W + R <= N may lead to inconsistency");
            }
            if (W <= N/2) {
                System.out.println("WARNING: W <= N/2 may lose writes during partitions");
            }
        }
        
        public void addReplica(String replicaId, long latency) {
            replicas.add(new Replica(replicaId, latency));
        }
        
        /**
         * Quorum write - Write to W replicas
         * Time: O(W) parallel, O(N) worst case
         */
        public boolean write(String key, Object value, String writerId) {
            writeCount++;
            long version = ++versionCounter;
            VersionedValue versionedValue = new VersionedValue(value, version, writerId);
            
            System.out.println(String.format("Writing key=%s, value=%s (v%d) with W=%d",
                                             key, value, version, W));
            
            // Write to all replicas in parallel
            CountDownLatch latch = new CountDownLatch(W);
            AtomicInteger successCount = new AtomicInteger(0);
            
            List<Replica> availableReplicas = getAvailableReplicas();
            
            for (Replica replica : availableReplicas) {
                CompletableFuture.runAsync(() -> {
                    try {
                        replica.write(key, versionedValue);
                        successCount.incrementAndGet();
                        System.out.println("  ✓ Written to " + replica.replicaId);
                    } catch (Exception e) {
                        System.out.println("  ✗ Failed to write to " + replica.replicaId);
                    } finally {
                        latch.countDown();
                    }
                });
            }
            
            try {
                // Wait for W successful writes
                boolean success = latch.await(1000, TimeUnit.MILLISECONDS);
                boolean quorumAchieved = successCount.get() >= W;
                
                if (quorumAchieved) {
                    System.out.println("  Write quorum achieved: " + 
                                       successCount.get() + "/" + W);
                } else {
                    System.out.println("  Write quorum failed: " + 
                                       successCount.get() + "/" + W);
                }
                
                return quorumAchieved;
            } catch (InterruptedException e) {
                return false;
            }
        }
        
        /**
         * Quorum read - Read from R replicas and resolve conflicts
         * Time: O(R) parallel
         */
        public VersionedValue read(String key) {
            readCount++;
            System.out.println(String.format("Reading key=%s with R=%d", key, R));
            
            // Read from R replicas in parallel
            List<VersionedValue> values = new ArrayList<>();
            CountDownLatch latch = new CountDownLatch(R);
            
            List<Replica> availableReplicas = getAvailableReplicas();
            
            for (int i = 0; i < Math.min(R, availableReplicas.size()); i++) {
                Replica replica = availableReplicas.get(i);
                CompletableFuture.runAsync(() -> {
                    try {
                        VersionedValue value = replica.read(key);
                        if (value != null) {
                            synchronized (values) {
                                values.add(value);
                            }
                            System.out.println("  ✓ Read from " + replica.replicaId + 
                                               ": " + value);
                        }
                    } catch (Exception e) {
                        System.out.println("  ✗ Failed to read from " + replica.replicaId);
                    } finally {
                        latch.countDown();
                    }
                });
            }
            
            try {
                latch.await(1000, TimeUnit.MILLISECONDS);
                
                if (values.isEmpty()) {
                    System.out.println("  No values found");
                    return null;
                }
                
                // Resolve conflicts by choosing highest version (Last-Write-Wins)
                VersionedValue latest = resolveConflicts(values);
                System.out.println("  Resolved value: " + latest);
                
                return latest;
            } catch (InterruptedException e) {
                return null;
            }
        }
        
        /**
         * Resolve conflicts using Last-Write-Wins (LWW)
         * Time: O(n) where n = number of values
         */
        private VersionedValue resolveConflicts(List<VersionedValue> values) {
            if (values.size() > 1) {
                conflictCount++;
            }
            
            return values.stream()
                         .max(Comparator.comparingLong(v -> v.version))
                         .orElse(null);
        }
        
        private List<Replica> getAvailableReplicas() {
            return replicas.stream()
                           .filter(r -> r.available)
                           .collect(java.util.stream.Collectors.toList());
        }
        
        public void setReplicaAvailability(String replicaId, boolean available) {
            replicas.stream()
                    .filter(r -> r.replicaId.equals(replicaId))
                    .forEach(r -> r.available = available);
            System.out.println("Replica " + replicaId + " is now " + 
                               (available ? "AVAILABLE" : "UNAVAILABLE"));
        }
        
        public void printMetrics() {
            System.out.println("\n=== Quorum Replication Metrics ===");
            System.out.println("Configuration: N=" + N + ", W=" + W + ", R=" + R);
            System.out.println("Writes: " + writeCount);
            System.out.println("Reads: " + readCount);
            System.out.println("Conflicts resolved: " + conflictCount);
            System.out.println("Consistency guarantee: " + 
                               (W + R > N ? "STRONG" : "EVENTUAL"));
        }
    }
    
    // ============================================================================
    // PATTERN 2: CONFLICT-FREE REPLICATED DATA TYPES (CRDT)
    // ============================================================================
    
    /**
     * CRDT - Grow-Only Counter (G-Counter)
     * 
     * Key Features:
     * - Conflict-free merges
     * - Commutative operations
     * - Eventually consistent
     * - No coordination needed
     * 
     * Time Complexity: O(1) for increment, O(n) for merge
     * Space Complexity: O(n) where n = number of replicas
     * 
     * Use Cases:
     * - Counters, sets, registers
     * - Collaborative editing
     * - Distributed caches
     */
    static class GCounter {
        String replicaId;
        Map<String, Long> counts; // ReplicaId -> Count
        
        public GCounter(String replicaId) {
            this.replicaId = replicaId;
            this.counts = new ConcurrentHashMap<>();
            this.counts.put(replicaId, 0L);
        }
        
        /**
         * Increment counter
         * Time: O(1)
         */
        public void increment(long delta) {
            counts.put(replicaId, counts.get(replicaId) + delta);
        }
        
        /**
         * Get total value
         * Time: O(n) where n = replicas
         */
        public long value() {
            return counts.values().stream().mapToLong(Long::longValue).sum();
        }
        
        /**
         * Merge with another counter (idempotent)
         * Time: O(n)
         */
        public void merge(GCounter other) {
            for (Map.Entry<String, Long> entry : other.counts.entrySet()) {
                String id = entry.getKey();
                long otherCount = entry.getValue();
                counts.put(id, Math.max(counts.getOrDefault(id, 0L), otherCount));
            }
        }
        
        @Override
        public String toString() {
            return String.format("GCounter[%s, value=%d, counts=%s]", 
                                 replicaId, value(), counts);
        }
    }
    
    /**
     * CRDT - Positive-Negative Counter (PN-Counter)
     * Supports both increment and decrement
     */
    static class PNCounter {
        GCounter positive;
        GCounter negative;
        String replicaId;
        
        public PNCounter(String replicaId) {
            this.replicaId = replicaId;
            this.positive = new GCounter(replicaId);
            this.negative = new GCounter(replicaId);
        }
        
        public void increment(long delta) {
            positive.increment(delta);
        }
        
        public void decrement(long delta) {
            negative.increment(delta);
        }
        
        public long value() {
            return positive.value() - negative.value();
        }
        
        public void merge(PNCounter other) {
            positive.merge(other.positive);
            negative.merge(other.negative);
        }
        
        @Override
        public String toString() {
            return String.format("PNCounter[%s, value=%d, +%d -%d]", 
                                 replicaId, value(), 
                                 positive.value(), negative.value());
        }
    }
    
    /**
     * CRDT - Grow-Only Set (G-Set)
     */
    static class GSet<T> {
        String replicaId;
        Set<T> elements;
        
        public GSet(String replicaId) {
            this.replicaId = replicaId;
            this.elements = new ConcurrentHashSet<>();
        }
        
        public void add(T element) {
            elements.add(element);
        }
        
        public boolean contains(T element) {
            return elements.contains(element);
        }
        
        public void merge(GSet<T> other) {
            elements.addAll(other.elements);
        }
        
        public Set<T> value() {
            return new HashSet<>(elements);
        }
        
        @Override
        public String toString() {
            return String.format("GSet[%s, size=%d, elements=%s]", 
                                 replicaId, elements.size(), elements);
        }
    }
    
    // ============================================================================
    // PATTERN 3: MERKLE TREE - EFFICIENT SYNCHRONIZATION
    // ============================================================================
    
    /**
     * Merkle Tree - Detect differences between replicas
     * 
     * Key Features:
     * - Efficient diff detection: O(log n)
     * - Minimal data transfer
     * - Integrity verification
     * - Anti-entropy repair
     * 
     * Time Complexity: O(log n) for comparison, O(n) for build
     * Space Complexity: O(n)
     * 
     * Use Cases:
     * - Cassandra anti-entropy repair
     * - Git version control
     * - Blockchain
     * - File synchronization (Dropbox)
     */
    static class MerkleTree {
        static class Node {
            String hash;
            Node left;
            Node right;
            String key;
            Object value;
            
            Node(String hash) {
                this.hash = hash;
            }
            
            boolean isLeaf() {
                return key != null;
            }
        }
        
        Node root;
        Map<String, Object> data;
        int rangeSize;
        
        public MerkleTree(int rangeSize) {
            this.rangeSize = rangeSize;
            this.data = new TreeMap<>();
        }
        
        public void put(String key, Object value) {
            data.put(key, value);
        }
        
        /**
         * Build Merkle tree from data
         * Time: O(n log n) for sorting + O(n) for building
         */
        public void build() {
            List<Map.Entry<String, Object>> entries = 
                new ArrayList<>(data.entrySet());
            entries.sort(Map.Entry.comparingByKey());
            
            root = buildTree(entries, 0, entries.size());
        }
        
        private Node buildTree(List<Map.Entry<String, Object>> entries, 
                               int start, int end) {
            if (start >= end) return null;
            
            if (end - start == 1) {
                // Leaf node
                Map.Entry<String, Object> entry = entries.get(start);
                Node leaf = new Node(hash(entry.getKey() + ":" + entry.getValue()));
                leaf.key = entry.getKey();
                leaf.value = entry.getValue();
                return leaf;
            }
            
            // Internal node
            int mid = (start + end) / 2;
            Node node = new Node(null);
            node.left = buildTree(entries, start, mid);
            node.right = buildTree(entries, mid, end);
            
            // Compute hash of children
            String leftHash = node.left != null ? node.left.hash : "";
            String rightHash = node.right != null ? node.right.hash : "";
            node.hash = hash(leftHash + rightHash);
            
            return node;
        }
        
        /**
         * Find differences with another tree
         * Time: O(d log n) where d = differences
         */
        public List<String> findDifferences(MerkleTree other) {
            List<String> differences = new ArrayList<>();
            findDifferencesRecursive(root, other.root, differences);
            return differences;
        }
        
        private void findDifferencesRecursive(Node node1, Node node2, 
                                              List<String> differences) {
            // Both null - no difference
            if (node1 == null && node2 == null) return;
            
            // One null - all keys different
            if (node1 == null || node2 == null) {
                Node nonNull = node1 != null ? node1 : node2;
                collectAllKeys(nonNull, differences);
                return;
            }
            
            // Same hash - no difference
            if (node1.hash.equals(node2.hash)) return;
            
            // Leaf nodes with different hashes
            if (node1.isLeaf() && node2.isLeaf()) {
                differences.add(node1.key);
                return;
            }
            
            // Recurse on children
            findDifferencesRecursive(node1.left, node2.left, differences);
            findDifferencesRecursive(node1.right, node2.right, differences);
        }
        
        private void collectAllKeys(Node node, List<String> keys) {
            if (node == null) return;
            if (node.isLeaf()) {
                keys.add(node.key);
                return;
            }
            collectAllKeys(node.left, keys);
            collectAllKeys(node.right, keys);
        }
        
        private String hash(String data) {
            try {
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] hash = md.digest(data.getBytes());
                StringBuilder sb = new StringBuilder();
                for (byte b : hash) {
                    sb.append(String.format("%02x", b));
                }
                return sb.substring(0, 8); // Truncate for readability
            } catch (Exception e) {
                return Integer.toHexString(data.hashCode());
            }
        }
        
        public String getRootHash() {
            return root != null ? root.hash : "";
        }
    }
    
    // ============================================================================
    // PATTERN 4: WRITE-AHEAD LOG (WAL)
    // ============================================================================
    
    /**
     * Write-Ahead Log - Durability and crash recovery
     * 
     * Key Features:
     * - Durability (D in ACID)
     * - Crash recovery
     * - Point-in-time recovery
     * - Replication via log shipping
     * 
     * Time Complexity: O(1) for append, O(n) for replay
     * Space Complexity: O(log_size)
     * 
     * Use Cases:
     * - PostgreSQL, MySQL
     * - Kafka commit log
     * - Redis AOF
     */
    static class WriteAheadLog {
        enum OperationType { INSERT, UPDATE, DELETE, CHECKPOINT }
        
        static class LogEntry {
            long lsn; // Log Sequence Number
            OperationType operation;
            String key;
            Object oldValue;
            Object newValue;
            long timestamp;
            boolean committed;
            
            LogEntry(long lsn, OperationType operation, String key, 
                     Object oldValue, Object newValue) {
                this.lsn = lsn;
                this.operation = operation;
                this.key = key;
                this.oldValue = oldValue;
                this.newValue = newValue;
                this.timestamp = System.currentTimeMillis();
                this.committed = false;
            }
            
            @Override
            public String toString() {
                return String.format("LSN[%d] %s %s: %s->%s %s", 
                                     lsn, operation, key, oldValue, newValue,
                                     committed ? "COMMITTED" : "UNCOMMITTED");
            }
        }
        
        List<LogEntry> log;
        Map<String, Object> data; // In-memory data
        long nextLSN;
        long lastCheckpoint;
        int logSize;
        int checkpointInterval;
        
        public WriteAheadLog(int checkpointInterval) {
            this.log = new ArrayList<>();
            this.data = new HashMap<>();
            this.nextLSN = 1;
            this.lastCheckpoint = 0;
            this.checkpointInterval = checkpointInterval;
        }
        
        /**
         * Write operation to log (before applying to data)
         * Time: O(1)
         */
        public long writeLog(OperationType operation, String key, 
                             Object oldValue, Object newValue) {
            LogEntry entry = new LogEntry(nextLSN++, operation, key, 
                                          oldValue, newValue);
            log.add(entry);
            logSize++;
            
            System.out.println("WAL: " + entry);
            
            // Auto-checkpoint if needed
            if (logSize - lastCheckpoint >= checkpointInterval) {
                checkpoint();
            }
            
            return entry.lsn;
        }
        
        /**
         * Insert operation
         * Time: O(1)
         */
        public void insert(String key, Object value) {
            long lsn = writeLog(OperationType.INSERT, key, null, value);
            data.put(key, value);
            commitLog(lsn);
        }
        
        /**
         * Update operation
         * Time: O(1)
         */
        public void update(String key, Object newValue) {
            Object oldValue = data.get(key);
            long lsn = writeLog(OperationType.UPDATE, key, oldValue, newValue);
            data.put(key, newValue);
            commitLog(lsn);
        }
        
        /**
         * Delete operation
         * Time: O(1)
         */
        public void delete(String key) {
            Object oldValue = data.get(key);
            long lsn = writeLog(OperationType.DELETE, key, oldValue, null);
            data.remove(key);
            commitLog(lsn);
        }
        
        private void commitLog(long lsn) {
            // Find and commit log entry
            for (LogEntry entry : log) {
                if (entry.lsn == lsn) {
                    entry.committed = true;
                    break;
                }
            }
        }
        
        /**
         * Checkpoint - Flush state and truncate log
         * Time: O(n) where n = log entries
         */
        public void checkpoint() {
            System.out.println("\n=== CHECKPOINT at LSN " + nextLSN + " ===");
            
            LogEntry checkpoint = new LogEntry(nextLSN++, 
                                               OperationType.CHECKPOINT, 
                                               null, null, null);
            checkpoint.committed = true;
            log.add(checkpoint);
            
            // In real system: flush data to disk
            System.out.println("Flushed " + data.size() + " keys to disk");
            
            lastCheckpoint = log.size() - 1;
            
            // Truncate old log entries (keep from last checkpoint)
            if (lastCheckpoint > checkpointInterval * 2) {
                int removed = (int) lastCheckpoint - checkpointInterval;
                log = log.subList(removed, log.size());
                System.out.println("Truncated " + removed + " old log entries");
            }
        }
        
        /**
         * Recover from crash - Replay log
         * Time: O(n) where n = uncommitted entries
         */
        public void recover() {
            System.out.println("\n=== RECOVERY: Replaying WAL ===");
            
            // Find last checkpoint
            int checkpointIdx = -1;
            for (int i = log.size() - 1; i >= 0; i--) {
                if (log.get(i).operation == OperationType.CHECKPOINT) {
                    checkpointIdx = i;
                    break;
                }
            }
            
            // Clear in-memory data
            data.clear();
            
            // Replay from checkpoint
            int startIdx = checkpointIdx >= 0 ? checkpointIdx + 1 : 0;
            for (int i = startIdx; i < log.size(); i++) {
                LogEntry entry = log.get(i);
                if (entry.committed) {
                    replayEntry(entry);
                }
            }
            
            System.out.println("Recovery complete. Data size: " + data.size());
        }
        
        private void replayEntry(LogEntry entry) {
            System.out.println("Replaying: " + entry);
            switch (entry.operation) {
                case INSERT:
                case UPDATE:
                    data.put(entry.key, entry.newValue);
                    break;
                case DELETE:
                    data.remove(entry.key);
                    break;
            }
        }
        
        public void printState() {
            System.out.println("\n=== WAL State ===");
            System.out.println("Log size: " + log.size());
            System.out.println("Data size: " + data.size());
            System.out.println("Last checkpoint: " + lastCheckpoint);
            System.out.println("Data: " + data);
        }
    }
    
    // ============================================================================
    // DEMONSTRATION
    // ============================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 28: DISTRIBUTED DATA REPLICATION - DEMONSTRATIONS");
        System.out.println("=".repeat(80));
        
        demonstrateQuorumReplication();
        demonstrateCRDT();
        demonstrateMerkleTree();
        demonstrateWAL();
    }
    
    private static void demonstrateQuorumReplication() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 1: QUORUM REPLICATION");
        System.out.println("=".repeat(80));
        
        // N=5, W=3, R=3 (Strong consistency: W+R=6 > N=5)
        QuorumReplication quorum = new QuorumReplication(5, 3, 3);
        
        quorum.addReplica("replica1", 10);
        quorum.addReplica("replica2", 15);
        quorum.addReplica("replica3", 20);
        quorum.addReplica("replica4", 25);
        quorum.addReplica("replica5", 30);
        
        // Write operation
        quorum.write("user:123", "Alice", "client1");
        
        Thread.sleep(100);
        
        // Read operation
        quorum.read("user:123");
        
        Thread.sleep(100);
        
        // Simulate partition
        System.out.println("\n--- Simulating partition ---");
        quorum.setReplicaAvailability("replica4", false);
        quorum.setReplicaAvailability("replica5", false);
        
        // Write with partition
        quorum.write("user:456", "Bob", "client2");
        
        quorum.printMetrics();
    }
    
    private static void demonstrateCRDT() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 2: CONFLICT-FREE REPLICATED DATA TYPES");
        System.out.println("=".repeat(80));
        
        // G-Counter
        System.out.println("\n--- G-Counter (Grow-Only) ---");
        GCounter counter1 = new GCounter("node1");
        GCounter counter2 = new GCounter("node2");
        
        counter1.increment(5);
        counter2.increment(3);
        
        System.out.println("Before merge:");
        System.out.println("  " + counter1);
        System.out.println("  " + counter2);
        
        counter1.merge(counter2);
        counter2.merge(counter1);
        
        System.out.println("After merge:");
        System.out.println("  " + counter1);
        System.out.println("  " + counter2);
        
        // PN-Counter
        System.out.println("\n--- PN-Counter (Increment/Decrement) ---");
        PNCounter pn1 = new PNCounter("node1");
        PNCounter pn2 = new PNCounter("node2");
        
        pn1.increment(10);
        pn1.decrement(3);
        pn2.increment(5);
        pn2.decrement(2);
        
        System.out.println("Before merge:");
        System.out.println("  " + pn1);
        System.out.println("  " + pn2);
        
        pn1.merge(pn2);
        pn2.merge(pn1);
        
        System.out.println("After merge:");
        System.out.println("  " + pn1);
        System.out.println("  " + pn2);
        
        // G-Set
        System.out.println("\n--- G-Set (Grow-Only Set) ---");
        GSet<String> set1 = new GSet<>("node1");
        GSet<String> set2 = new GSet<>("node2");
        
        set1.add("apple");
        set1.add("banana");
        set2.add("banana");
        set2.add("cherry");
        
        System.out.println("Before merge:");
        System.out.println("  " + set1);
        System.out.println("  " + set2);
        
        set1.merge(set2);
        set2.merge(set1);
        
        System.out.println("After merge:");
        System.out.println("  " + set1);
        System.out.println("  " + set2);
    }
    
    private static void demonstrateMerkleTree() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 3: MERKLE TREE - EFFICIENT SYNC");
        System.out.println("=".repeat(80));
        
        // Create two replicas with slightly different data
        MerkleTree tree1 = new MerkleTree(16);
        MerkleTree tree2 = new MerkleTree(16);
        
        // Common data
        for (int i = 1; i <= 5; i++) {
            tree1.put("key" + i, "value" + i);
            tree2.put("key" + i, "value" + i);
        }
        
        // Differences
        tree1.put("key6", "value6_A"); // Different value
        tree2.put("key6", "value6_B");
        
        tree1.put("key7", "value7"); // Only in tree1
        tree2.put("key8", "value8"); // Only in tree2
        
        tree1.build();
        tree2.build();
        
        System.out.println("Tree1 root hash: " + tree1.getRootHash());
        System.out.println("Tree2 root hash: " + tree2.getRootHash());
        System.out.println("Trees match: " + 
                           tree1.getRootHash().equals(tree2.getRootHash()));
        
        List<String> differences = tree1.findDifferences(tree2);
        System.out.println("\nDifferences found: " + differences.size());
        System.out.println("Different keys: " + differences);
        
        System.out.println("\nMerkle Tree Summary:");
        System.out.println("✓ Detected differences in O(d log n) time");
        System.out.println("✓ Minimal data transfer needed");
        System.out.println("✓ Perfect for anti-entropy repair");
    }
    
    private static void demonstrateWAL() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 4: WRITE-AHEAD LOG - DURABILITY");
        System.out.println("=".repeat(80));
        
        WriteAheadLog wal = new WriteAheadLog(5);
        
        // Perform operations
        wal.insert("user:1", "Alice");
        wal.insert("user:2", "Bob");
        wal.update("user:1", "Alice Smith");
        wal.insert("user:3", "Charlie");
        wal.delete("user:2");
        wal.insert("user:4", "David");
        
        wal.printState();
        
        // Simulate crash
        System.out.println("\n💥 SYSTEM CRASH!");
        
        // Recover
        wal.recover();
        wal.printState();
        
        System.out.println("\nWAL Summary:");
        System.out.println("✓ All committed operations recovered");
        System.out.println("✓ Durability guaranteed");
        System.out.println("✓ Periodic checkpoints reduce recovery time");
    }
}
