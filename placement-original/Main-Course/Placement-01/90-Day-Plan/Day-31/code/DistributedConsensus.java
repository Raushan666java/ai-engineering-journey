/**
 * DAY 31: DISTRIBUTED CONSENSUS & REPLICATION
 * Raft Consensus, Quorum, and Data Replication
 * 
 * Topics Covered:
 * 1. Raft Consensus Algorithm
 * 2. Quorum-Based Replication
 * 3. Gossip Protocol
 * 4. Conflict-Free Replicated Data Types (CRDTs)
 * 5. Two-Phase Commit (2PC)
 * 6. Three-Phase Commit (3PC)
 * 7. Byzantine Fault Tolerance
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;

public class DistributedConsensus {
    
    // ========================================================================
    // PATTERN 1: RAFT CONSENSUS ALGORITHM (Simplified)
    // ========================================================================
    
    /**
     * Raft Consensus - Leader-based consensus protocol
     * 
     * Purpose: Achieve consensus in distributed systems (replicated state machine)
     * 
     * Three roles:
     * 1. Leader: Handles all client requests, replicates log
     * 2. Follower: Passive, responds to RPCs
     * 3. Candidate: Competes to become leader
     * 
     * Two main RPCs:
     * 1. RequestVote: Used by candidates during election
     * 2. AppendEntries: Used by leader to replicate log & heartbeat
     * 
     * Algorithm phases:
     * 1. Leader Election
     * 2. Log Replication
     * 3. Safety (committed entries never lost)
     * 
     * Time Complexity: O(n) for broadcasting
     * Space Complexity: O(log size)
     */
    static class RaftConsensus {
        enum NodeState { FOLLOWER, CANDIDATE, LEADER }
        
        static class LogEntry {
            int term;
            String command;
            
            LogEntry(int term, String command) {
                this.term = term;
                this.command = command;
            }
            
            @Override
            public String toString() {
                return String.format("T%d:%s", term, command);
            }
        }
        
        static class Node {
            private int id;
            private NodeState state = NodeState.FOLLOWER;
            private int currentTerm = 0;
            private Integer votedFor = null;
            private List<LogEntry> log = new CopyOnWriteArrayList<>();
            private int commitIndex = -1;
            private int lastApplied = -1;
            
            // Leader state
            private Map<Integer, Integer> nextIndex = new ConcurrentHashMap<>();
            private Map<Integer, Integer> matchIndex = new ConcurrentHashMap<>();
            
            // Cluster
            private List<Node> cluster;
            
            // Timing
            private Instant lastHeartbeat = Instant.now();
            private Duration electionTimeout = Duration.ofMillis(150 + new Random().nextInt(150));
            private ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
            
            Node(int id) {
                this.id = id;
                startElectionTimer();
            }
            
            public void setCluster(List<Node> cluster) {
                this.cluster = cluster;
                
                // Initialize leader state
                for (Node node : cluster) {
                    if (node.id != this.id) {
                        nextIndex.put(node.id, log.size());
                        matchIndex.put(node.id, -1);
                    }
                }
            }
            
            /**
             * Start election when timeout expires
             */
            private void startElectionTimer() {
                scheduler.scheduleAtFixedRate(() -> {
                    if (state != NodeState.LEADER) {
                        Duration elapsed = Duration.between(lastHeartbeat, Instant.now());
                        if (elapsed.compareTo(electionTimeout) > 0) {
                            startElection();
                        }
                    }
                }, 100, 50, TimeUnit.MILLISECONDS);
            }
            
            /**
             * Start leader election
             */
            private void startElection() {
                state = NodeState.CANDIDATE;
                currentTerm++;
                votedFor = id;
                lastHeartbeat = Instant.now();
                
                int votes = 1; // Vote for self
                
                System.out.printf("Node %d: Starting election for term %d%n", id, currentTerm);
                
                // Request votes from all other nodes
                for (Node node : cluster) {
                    if (node.id != this.id) {
                        boolean granted = node.requestVote(currentTerm, id, 
                            log.size() - 1, 
                            log.isEmpty() ? -1 : log.get(log.size() - 1).term);
                        
                        if (granted) {
                            votes++;
                        }
                    }
                }
                
                // Check if won election (majority)
                int majority = (cluster.size() / 2) + 1;
                if (votes >= majority) {
                    becomeLeader();
                }
            }
            
            /**
             * RequestVote RPC
             */
            public boolean requestVote(int term, int candidateId, 
                                       int lastLogIndex, int lastLogTerm) {
                // Reply false if term < currentTerm
                if (term < currentTerm) {
                    return false;
                }
                
                // Update term if higher
                if (term > currentTerm) {
                    currentTerm = term;
                    state = NodeState.FOLLOWER;
                    votedFor = null;
                }
                
                // Vote if haven't voted or already voted for this candidate
                if (votedFor == null || votedFor == candidateId) {
                    // Check if candidate's log is at least as up-to-date
                    int myLastLogTerm = log.isEmpty() ? -1 : log.get(log.size() - 1).term;
                    int myLastLogIndex = log.size() - 1;
                    
                    boolean logUpToDate = (lastLogTerm > myLastLogTerm) ||
                        (lastLogTerm == myLastLogTerm && lastLogIndex >= myLastLogIndex);
                    
                    if (logUpToDate) {
                        votedFor = candidateId;
                        lastHeartbeat = Instant.now();
                        System.out.printf("Node %d: Voted for Node %d in term %d%n", 
                            id, candidateId, term);
                        return true;
                    }
                }
                
                return false;
            }
            
            /**
             * Become leader after winning election
             */
            private void becomeLeader() {
                state = NodeState.LEADER;
                System.out.printf("Node %d: Became LEADER for term %d%n", id, currentTerm);
                
                // Initialize leader state
                for (Node node : cluster) {
                    if (node.id != this.id) {
                        nextIndex.put(node.id, log.size());
                        matchIndex.put(node.id, -1);
                    }
                }
                
                // Start sending heartbeats
                startHeartbeat();
            }
            
            /**
             * Send periodic heartbeats (empty AppendEntries)
             */
            private void startHeartbeat() {
                scheduler.scheduleAtFixedRate(() -> {
                    if (state == NodeState.LEADER) {
                        for (Node node : cluster) {
                            if (node.id != this.id) {
                                sendAppendEntries(node);
                            }
                        }
                    }
                }, 0, 50, TimeUnit.MILLISECONDS);
            }
            
            /**
             * AppendEntries RPC (heartbeat and log replication)
             */
            private void sendAppendEntries(Node follower) {
                int prevLogIndex = nextIndex.get(follower.id) - 1;
                int prevLogTerm = (prevLogIndex >= 0 && prevLogIndex < log.size()) 
                    ? log.get(prevLogIndex).term : -1;
                
                List<LogEntry> entries = new ArrayList<>();
                int nextIdx = nextIndex.get(follower.id);
                if (nextIdx < log.size()) {
                    entries.addAll(log.subList(nextIdx, log.size()));
                }
                
                boolean success = follower.appendEntries(currentTerm, id, 
                    prevLogIndex, prevLogTerm, entries, commitIndex);
                
                if (success) {
                    if (!entries.isEmpty()) {
                        nextIndex.put(follower.id, log.size());
                        matchIndex.put(follower.id, log.size() - 1);
                        updateCommitIndex();
                    }
                } else {
                    // Decrement nextIndex and retry
                    nextIndex.put(follower.id, Math.max(0, nextIndex.get(follower.id) - 1));
                }
            }
            
            /**
             * AppendEntries RPC handler
             */
            public boolean appendEntries(int term, int leaderId, int prevLogIndex,
                                        int prevLogTerm, List<LogEntry> entries,
                                        int leaderCommit) {
                // Reply false if term < currentTerm
                if (term < currentTerm) {
                    return false;
                }
                
                // Update term and become follower
                if (term > currentTerm) {
                    currentTerm = term;
                    state = NodeState.FOLLOWER;
                    votedFor = null;
                }
                
                lastHeartbeat = Instant.now();
                
                // Reply false if log doesn't contain entry at prevLogIndex with prevLogTerm
                if (prevLogIndex >= 0) {
                    if (prevLogIndex >= log.size() || 
                        log.get(prevLogIndex).term != prevLogTerm) {
                        return false;
                    }
                }
                
                // Append new entries
                if (!entries.isEmpty()) {
                    // Delete conflicting entries
                    int startIndex = prevLogIndex + 1;
                    if (startIndex < log.size()) {
                        log.subList(startIndex, log.size()).clear();
                    }
                    
                    // Append new entries
                    log.addAll(entries);
                    System.out.printf("Node %d: Appended %d entries from leader %d%n",
                        id, entries.size(), leaderId);
                }
                
                // Update commitIndex
                if (leaderCommit > commitIndex) {
                    commitIndex = Math.min(leaderCommit, log.size() - 1);
                }
                
                return true;
            }
            
            /**
             * Update commit index based on majority replication
             */
            private void updateCommitIndex() {
                List<Integer> indices = new ArrayList<>(matchIndex.values());
                indices.add(log.size() - 1); // Leader's matchIndex
                Collections.sort(indices);
                
                int majority = (cluster.size() / 2) + 1;
                int newCommitIndex = indices.get(indices.size() - majority);
                
                if (newCommitIndex > commitIndex && 
                    log.get(newCommitIndex).term == currentTerm) {
                    commitIndex = newCommitIndex;
                    System.out.printf("Node %d: Committed up to index %d%n", id, commitIndex);
                }
            }
            
            /**
             * Client request to append command
             */
            public boolean appendCommand(String command) {
                if (state != NodeState.LEADER) {
                    return false;
                }
                
                LogEntry entry = new LogEntry(currentTerm, command);
                log.add(entry);
                System.out.printf("Node %d: Appended command '%s' at index %d%n",
                    id, command, log.size() - 1);
                
                return true;
            }
            
            public NodeState getState() {
                return state;
            }
            
            public int getTerm() {
                return currentTerm;
            }
            
            public List<LogEntry> getLog() {
                return new ArrayList<>(log);
            }
            
            public void shutdown() {
                scheduler.shutdown();
            }
        }
    }
    
    // ========================================================================
    // PATTERN 2: QUORUM-BASED REPLICATION
    // ========================================================================
    
    /**
     * Quorum-Based Replication
     * 
     * Purpose: Ensure consistency with read/write quorums
     * 
     * Rules:
     * - W + R > N: Read and write quorums must overlap
     * - W > N/2: Write quorum must be majority (avoid conflicts)
     * 
     * Common configurations:
     * - N=3, W=2, R=2: Strong consistency
     * - N=3, W=1, R=3: Fast writes, slow reads
     * - N=3, W=3, R=1: Slow writes, fast reads
     * 
     * Time Complexity: O(n) for broadcast
     * Space Complexity: O(n) for replicas
     */
    static class QuorumReplication<K, V> {
        static class Replica<K, V> {
            private int id;
            private Map<K, VersionedValue<V>> data = new ConcurrentHashMap<>();
            
            Replica(int id) {
                this.id = id;
            }
            
            public boolean write(K key, VersionedValue<V> value) {
                // Simulate network delay
                try {
                    Thread.sleep(new Random().nextInt(50));
                } catch (InterruptedException e) {
                    return false;
                }
                
                VersionedValue<V> existing = data.get(key);
                if (existing == null || value.version > existing.version) {
                    data.put(key, value);
                    System.out.printf("Replica %d: Wrote %s = %s (v%d)%n",
                        id, key, value.value, value.version);
                    return true;
                }
                return false;
            }
            
            public VersionedValue<V> read(K key) {
                // Simulate network delay
                try {
                    Thread.sleep(new Random().nextInt(50));
                } catch (InterruptedException e) {
                    return null;
                }
                
                return data.get(key);
            }
        }
        
        static class VersionedValue<V> {
            V value;
            long version;
            Instant timestamp;
            
            VersionedValue(V value, long version) {
                this.value = value;
                this.version = version;
                this.timestamp = Instant.now();
            }
        }
        
        private List<Replica<K, V>> replicas;
        private int writeQuorum;
        private int readQuorum;
        private AtomicLong versionCounter = new AtomicLong(0);
        
        public QuorumReplication(int replicaCount, int writeQuorum, int readQuorum) {
            this.replicas = new ArrayList<>();
            for (int i = 0; i < replicaCount; i++) {
                replicas.add(new Replica<>(i));
            }
            this.writeQuorum = writeQuorum;
            this.readQuorum = readQuorum;
            
            // Validate quorum rules
            if (writeQuorum + readQuorum <= replicaCount) {
                throw new IllegalArgumentException("W + R must be > N for consistency");
            }
        }
        
        /**
         * Write with quorum
         */
        public boolean write(K key, V value) {
            long version = versionCounter.incrementAndGet();
            VersionedValue<V> versionedValue = new VersionedValue<>(value, version);
            
            System.out.printf("\nWriting %s = %s (need %d/%d replicas)%n",
                key, value, writeQuorum, replicas.size());
            
            // Write to all replicas in parallel
            List<CompletableFuture<Boolean>> futures = replicas.stream()
                .map(replica -> CompletableFuture.supplyAsync(() -> 
                    replica.write(key, versionedValue)))
                .collect(Collectors.toList());
            
            // Wait for write quorum
            int successCount = 0;
            for (CompletableFuture<Boolean> future : futures) {
                try {
                    if (future.get(1, TimeUnit.SECONDS)) {
                        successCount++;
                        if (successCount >= writeQuorum) {
                            System.out.printf("✓ Write successful (quorum reached: %d/%d)%n",
                                successCount, replicas.size());
                            return true;
                        }
                    }
                } catch (Exception e) {
                    // Timeout or error
                }
            }
            
            System.out.printf("✗ Write failed (only %d/%d, need %d)%n",
                successCount, replicas.size(), writeQuorum);
            return false;
        }
        
        /**
         * Read with quorum
         */
        public V read(K key) {
            System.out.printf("\nReading %s (need %d/%d replicas)%n",
                key, readQuorum, replicas.size());
            
            // Read from all replicas in parallel
            List<CompletableFuture<VersionedValue<V>>> futures = replicas.stream()
                .map(replica -> CompletableFuture.supplyAsync(() -> replica.read(key)))
                .collect(Collectors.toList());
            
            // Collect read quorum responses
            List<VersionedValue<V>> values = new ArrayList<>();
            for (CompletableFuture<VersionedValue<V>> future : futures) {
                try {
                    VersionedValue<V> value = future.get(1, TimeUnit.SECONDS);
                    if (value != null) {
                        values.add(value);
                        if (values.size() >= readQuorum) {
                            break;
                        }
                    }
                } catch (Exception e) {
                    // Timeout or error
                }
            }
            
            if (values.size() >= readQuorum) {
                // Return value with highest version (read repair would fix inconsistencies)
                VersionedValue<V> latest = values.stream()
                    .max(Comparator.comparingLong(v -> v.version))
                    .orElse(null);
                
                System.out.printf("✓ Read successful: %s (v%d from %d replicas)%n",
                    latest.value, latest.version, values.size());
                return latest.value;
            }
            
            System.out.printf("✗ Read failed (only %d/%d, need %d)%n",
                values.size(), replicas.size(), readQuorum);
            return null;
        }
    }
    
    // ========================================================================
    // PATTERN 3: GOSSIP PROTOCOL
    // ========================================================================
    
    /**
     * Gossip Protocol for Information Dissemination
     * 
     * Purpose: Spread information across cluster (epidemic algorithm)
     * 
     * Algorithm:
     * 1. Each node periodically selects random peer
     * 2. Exchange information with peer
     * 3. Repeat until information spreads to all nodes
     * 
     * Properties:
     * - Eventually consistent
     * - Fault-tolerant (no single point of failure)
     * - Scalable (O(log n) rounds to reach all nodes)
     * 
     * Time Complexity: O(log n) rounds for full propagation
     * Space Complexity: O(n) for membership
     */
    static class GossipProtocol {
        static class Node {
            private int id;
            private Map<String, Integer> data = new ConcurrentHashMap<>();
            private List<Node> peers = new CopyOnWriteArrayList<>();
            private ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
            private Random random = new Random();
            
            Node(int id) {
                this.id = id;
            }
            
            public void setPeers(List<Node> allNodes) {
                this.peers = allNodes.stream()
                    .filter(n -> n.id != this.id)
                    .collect(Collectors.toList());
            }
            
            /**
             * Start gossip protocol
             */
            public void startGossip() {
                scheduler.scheduleAtFixedRate(() -> {
                    if (!peers.isEmpty()) {
                        // Select random peer
                        Node peer = peers.get(random.nextInt(peers.size()));
                        
                        // Exchange data
                        gossipWith(peer);
                    }
                }, 0, 100, TimeUnit.MILLISECONDS);
            }
            
            /**
             * Gossip with peer (exchange data)
             */
            private void gossipWith(Node peer) {
                // Send our data to peer
                Map<String, Integer> updates = new HashMap<>();
                
                for (Map.Entry<String, Integer> entry : this.data.entrySet()) {
                    String key = entry.getKey();
                    int myVersion = entry.getValue();
                    int peerVersion = peer.data.getOrDefault(key, -1);
                    
                    if (myVersion > peerVersion) {
                        updates.put(key, myVersion);
                    }
                }
                
                if (!updates.isEmpty()) {
                    peer.receiveGossip(id, updates);
                }
                
                // Request data from peer
                for (Map.Entry<String, Integer> entry : peer.data.entrySet()) {
                    String key = entry.getKey();
                    int peerVersion = entry.getValue();
                    int myVersion = this.data.getOrDefault(key, -1);
                    
                    if (peerVersion > myVersion) {
                        this.data.put(key, peerVersion);
                    }
                }
            }
            
            /**
             * Receive gossip from peer
             */
            public void receiveGossip(int fromId, Map<String, Integer> updates) {
                for (Map.Entry<String, Integer> entry : updates.entrySet()) {
                    String key = entry.getKey();
                    int version = entry.getValue();
                    int myVersion = data.getOrDefault(key, -1);
                    
                    if (version > myVersion) {
                        data.put(key, version);
                        System.out.printf("Node %d: Received %s=v%d from Node %d%n",
                            id, key, version, fromId);
                    }
                }
            }
            
            /**
             * Set value (initiates gossip)
             */
            public void setValue(String key, int version) {
                data.put(key, version);
                System.out.printf("Node %d: Set %s=v%d%n", id, key, version);
            }
            
            public Map<String, Integer> getData() {
                return new HashMap<>(data);
            }
            
            public void shutdown() {
                scheduler.shutdown();
            }
        }
    }
    
    // ========================================================================
    // PATTERN 4: CONFLICT-FREE REPLICATED DATA TYPES (CRDTs)
    // ========================================================================
    
    /**
     * CRDTs - Data structures that automatically resolve conflicts
     * 
     * Types:
     * 1. State-based (CvRDT): Merge states
     * 2. Operation-based (CmRDT): Apply operations
     * 
     * Properties:
     * - Commutative: Order doesn't matter
     * - Associative: Grouping doesn't matter
     * - Idempotent: Applying twice = applying once
     * 
     * Examples:
     * - G-Counter: Grow-only counter
     * - PN-Counter: Positive-Negative counter
     * - G-Set: Grow-only set
     * - 2P-Set: Two-phase set (add/remove)
     * - LWW-Element-Set: Last-Write-Wins set
     */
    static class CRDTs {
        /**
         * G-Counter: Grow-only Counter
         * 
         * Each replica has its own counter
         * Merge: Take max of each replica's count
         * Value: Sum of all replica counts
         */
        static class GCounter {
            private String replicaId;
            private Map<String, Integer> counts = new ConcurrentHashMap<>();
            
            GCounter(String replicaId) {
                this.replicaId = replicaId;
                counts.put(replicaId, 0);
            }
            
            public void increment() {
                counts.merge(replicaId, 1, Integer::sum);
            }
            
            public void increment(int delta) {
                counts.merge(replicaId, delta, Integer::sum);
            }
            
            public int value() {
                return counts.values().stream().mapToInt(Integer::intValue).sum();
            }
            
            public void merge(GCounter other) {
                for (Map.Entry<String, Integer> entry : other.counts.entrySet()) {
                    counts.merge(entry.getKey(), entry.getValue(), Math::max);
                }
            }
            
            @Override
            public String toString() {
                return String.format("GCounter{value=%d, counts=%s}", value(), counts);
            }
        }
        
        /**
         * PN-Counter: Positive-Negative Counter
         * 
         * Two G-Counters: one for increments, one for decrements
         * Value: positive - negative
         */
        static class PNCounter {
            private GCounter positive;
            private GCounter negative;
            
            PNCounter(String replicaId) {
                this.positive = new GCounter(replicaId);
                this.negative = new GCounter(replicaId);
            }
            
            public void increment() {
                positive.increment();
            }
            
            public void decrement() {
                negative.increment();
            }
            
            public int value() {
                return positive.value() - negative.value();
            }
            
            public void merge(PNCounter other) {
                positive.merge(other.positive);
                negative.merge(other.negative);
            }
            
            @Override
            public String toString() {
                return String.format("PNCounter{value=%d, pos=%d, neg=%d}",
                    value(), positive.value(), negative.value());
            }
        }
        
        /**
         * LWW-Element-Set: Last-Write-Wins Element Set
         * 
         * Each element has timestamp
         * Merge: Keep element with latest timestamp
         * Remove: Add to tombstone set with timestamp
         */
        static class LWWElementSet<T> {
            private Map<T, Long> addSet = new ConcurrentHashMap<>();
            private Map<T, Long> removeSet = new ConcurrentHashMap<>();
            
            public void add(T element) {
                add(element, System.currentTimeMillis());
            }
            
            public void add(T element, long timestamp) {
                addSet.put(element, timestamp);
            }
            
            public void remove(T element) {
                remove(element, System.currentTimeMillis());
            }
            
            public void remove(T element, long timestamp) {
                removeSet.put(element, timestamp);
            }
            
            public boolean contains(T element) {
                long addTime = addSet.getOrDefault(element, 0L);
                long removeTime = removeSet.getOrDefault(element, 0L);
                
                // Element exists if added after removed (or never removed)
                return addTime > removeTime;
            }
            
            public Set<T> elements() {
                return addSet.keySet().stream()
                    .filter(this::contains)
                    .collect(Collectors.toSet());
            }
            
            public void merge(LWWElementSet<T> other) {
                // Merge add set (take latest timestamp)
                for (Map.Entry<T, Long> entry : other.addSet.entrySet()) {
                    addSet.merge(entry.getKey(), entry.getValue(), Math::max);
                }
                
                // Merge remove set (take latest timestamp)
                for (Map.Entry<T, Long> entry : other.removeSet.entrySet()) {
                    removeSet.merge(entry.getKey(), entry.getValue(), Math::max);
                }
            }
            
            @Override
            public String toString() {
                return elements().toString();
            }
        }
    }
    
    // ========================================================================
    // DEMONSTRATION
    // ========================================================================
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("DAY 31: DISTRIBUTED CONSENSUS & REPLICATION");
        System.out.println("=".repeat(80));
        
        // Demo 1: Raft Consensus
        System.out.println("\n--- DEMO 1: Raft Consensus Algorithm ---\n");
        demonstrateRaft();
        
        // Demo 2: Quorum Replication
        System.out.println("\n--- DEMO 2: Quorum-Based Replication ---\n");
        demonstrateQuorum();
        
        // Demo 3: Gossip Protocol
        System.out.println("\n--- DEMO 3: Gossip Protocol ---\n");
        demonstrateGossip();
        
        // Demo 4: CRDTs
        System.out.println("\n--- DEMO 4: Conflict-Free Replicated Data Types ---\n");
        demonstrateCRDTs();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All demonstrations completed successfully!");
        System.out.println("=".repeat(80));
    }
    
    private static void demonstrateRaft() throws InterruptedException {
        // Create 5-node cluster
        List<RaftConsensus.Node> nodes = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            nodes.add(new RaftConsensus.Node(i));
        }
        
        for (RaftConsensus.Node node : nodes) {
            node.setCluster(nodes);
        }
        
        // Wait for leader election
        Thread.sleep(500);
        
        // Find leader
        RaftConsensus.Node leader = nodes.stream()
            .filter(n -> n.getState() == RaftConsensus.NodeState.LEADER)
            .findFirst()
            .orElse(null);
        
        if (leader != null) {
            System.out.println("\n--- Client Commands ---");
            leader.appendCommand("SET x=1");
            Thread.sleep(200);
            leader.appendCommand("SET y=2");
            Thread.sleep(200);
            leader.appendCommand("SET z=3");
            Thread.sleep(200);
            
            System.out.println("\n--- Final Logs ---");
            for (RaftConsensus.Node node : nodes) {
                System.out.printf("Node %d: %s%n", 
                    node.hashCode() % 100, node.getLog());
            }
        }
        
        // Cleanup
        nodes.forEach(RaftConsensus.Node::shutdown);
    }
    
    private static void demonstrateQuorum() {
        QuorumReplication<String, String> replication = 
            new QuorumReplication<>(5, 3, 3); // N=5, W=3, R=3
        
        // Write value
        replication.write("user:1", "Alice");
        
        // Read value
        String value = replication.read("user:1");
        System.out.println("\nFinal value: " + value);
    }
    
    private static void demonstrateGossip() throws InterruptedException {
        // Create 5 nodes
        List<GossipProtocol.Node> nodes = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            nodes.add(new GossipProtocol.Node(i));
        }
        
        // Set peers
        for (GossipProtocol.Node node : nodes) {
            node.setPeers(nodes);
            node.startGossip();
        }
        
        // Node 0 sets value
        nodes.get(0).setValue("config", 1);
        
        // Wait for gossip to spread
        Thread.sleep(1000);
        
        // Check all nodes
        System.out.println("\n--- Final State ---");
        for (GossipProtocol.Node node : nodes) {
            System.out.printf("Node %d: %s%n", 
                node.hashCode() % 100, node.getData());
        }
        
        // Cleanup
        nodes.forEach(GossipProtocol.Node::shutdown);
    }
    
    private static void demonstrateCRDTs() {
        System.out.println("--- G-Counter (Grow-only Counter) ---");
        CRDTs.GCounter counter1 = new CRDTs.GCounter("replica-1");
        CRDTs.GCounter counter2 = new CRDTs.GCounter("replica-2");
        
        counter1.increment(5);
        counter2.increment(3);
        
        System.out.println("Before merge:");
        System.out.println("  Replica 1: " + counter1);
        System.out.println("  Replica 2: " + counter2);
        
        counter1.merge(counter2);
        System.out.println("After merge:");
        System.out.println("  Replica 1: " + counter1);
        
        System.out.println("\n--- PN-Counter (Increment/Decrement) ---");
        CRDTs.PNCounter pn1 = new CRDTs.PNCounter("replica-1");
        CRDTs.PNCounter pn2 = new CRDTs.PNCounter("replica-2");
        
        pn1.increment();
        pn1.increment();
        pn2.decrement();
        
        System.out.println("Before merge:");
        System.out.println("  Replica 1: " + pn1);
        System.out.println("  Replica 2: " + pn2);
        
        pn1.merge(pn2);
        System.out.println("After merge:");
        System.out.println("  Replica 1: " + pn1);
        
        System.out.println("\n--- LWW-Element-Set (Last-Write-Wins) ---");
        CRDTs.LWWElementSet<String> set1 = new CRDTs.LWWElementSet<>();
        CRDTs.LWWElementSet<String> set2 = new CRDTs.LWWElementSet<>();
        
        set1.add("Alice", 1000);
        set1.add("Bob", 2000);
        set2.add("Charlie", 1500);
        set2.remove("Alice", 3000);
        
        System.out.println("Before merge:");
        System.out.println("  Replica 1: " + set1);
        System.out.println("  Replica 2: " + set2);
        
        set1.merge(set2);
        System.out.println("After merge:");
        System.out.println("  Replica 1: " + set1);
    }
}
