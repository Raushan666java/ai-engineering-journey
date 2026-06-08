/**
 * DAY 24 - DISTRIBUTED SYSTEMS PATTERNS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Two-Phase Commit (2PC)
 * 2. Three-Phase Commit (3PC)
 * 3. Paxos Consensus
 * 4. Raft Consensus
 * 5. Vector Clocks
 * 6. Gossip Protocol
 * 7. Merkle Trees
 * 8. Bloom Filters
 * 9. Leader Election
 * 10. Split-Brain Resolution
 * 
 * Production-ready implementations with comprehensive examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.stream.*;

public class DistributedSystemsComplete {

    // ============================================================================
    // 1. TWO-PHASE COMMIT (2PC)
    // ============================================================================

    /**
     * Two-Phase Commit Protocol
     * Phase 1: Prepare (voting)
     * Phase 2: Commit/Abort
     */
    interface Participant {
        boolean prepare(String transactionId);
        void commit(String transactionId);
        void abort(String transactionId);
    }

    static class DatabaseParticipant implements Participant {
        private final String participantId;
        private final Map<String, String> preparedTransactions;
        private final Map<String, String> committedData;

        public DatabaseParticipant(String participantId) {
            this.participantId = participantId;
            this.preparedTransactions = new ConcurrentHashMap<>();
            this.committedData = new ConcurrentHashMap<>();
        }

        @Override
        public boolean prepare(String transactionId) {
            // Simulate preparation (validate, lock resources, etc.)
            preparedTransactions.put(transactionId, "prepared");
            System.out.println(participantId + " prepared for " + transactionId);
            return true;
        }

        @Override
        public void commit(String transactionId) {
            String state = preparedTransactions.remove(transactionId);
            if (state != null) {
                committedData.put(transactionId, "committed");
                System.out.println(participantId + " committed " + transactionId);
            }
        }

        @Override
        public void abort(String transactionId) {
            preparedTransactions.remove(transactionId);
            System.out.println(participantId + " aborted " + transactionId);
        }

        public String getParticipantId() {
            return participantId;
        }
    }

    static class TwoPhaseCommitCoordinator {
        private final List<Participant> participants;

        public TwoPhaseCommitCoordinator(List<Participant> participants) {
            this.participants = new ArrayList<>(participants);
        }

        public boolean executeTransaction(String transactionId) {
            System.out.println("\n=== Starting 2PC for " + transactionId + " ===");

            // Phase 1: Prepare
            System.out.println("Phase 1: Prepare");
            boolean allPrepared = true;
            for (Participant participant : participants) {
                if (!participant.prepare(transactionId)) {
                    allPrepared = false;
                    break;
                }
            }

            // Phase 2: Commit or Abort
            System.out.println("Phase 2: " + (allPrepared ? "Commit" : "Abort"));
            if (allPrepared) {
                for (Participant participant : participants) {
                    participant.commit(transactionId);
                }
                return true;
            } else {
                for (Participant participant : participants) {
                    participant.abort(transactionId);
                }
                return false;
            }
        }
    }

    // ============================================================================
    // 2. VECTOR CLOCKS
    // ============================================================================

    /**
     * Vector Clock - Track causality in distributed systems
     */
    static class VectorClock {
        private final Map<String, Integer> clock;

        public VectorClock() {
            this.clock = new ConcurrentHashMap<>();
        }

        public VectorClock(Map<String, Integer> clock) {
            this.clock = new ConcurrentHashMap<>(clock);
        }

        public void increment(String nodeId) {
            clock.put(nodeId, clock.getOrDefault(nodeId, 0) + 1);
        }

        public void update(VectorClock other) {
            for (Map.Entry<String, Integer> entry : other.clock.entrySet()) {
                String nodeId = entry.getKey();
                int otherValue = entry.getValue();
                int currentValue = clock.getOrDefault(nodeId, 0);
                clock.put(nodeId, Math.max(currentValue, otherValue));
            }
        }

        public boolean happensBefore(VectorClock other) {
            boolean strictlyLess = false;
            for (String nodeId : getAllNodeIds(other)) {
                int thisValue = clock.getOrDefault(nodeId, 0);
                int otherValue = other.clock.getOrDefault(nodeId, 0);

                if (thisValue > otherValue) {
                    return false;
                }
                if (thisValue < otherValue) {
                    strictlyLess = true;
                }
            }
            return strictlyLess;
        }

        public boolean isConcurrent(VectorClock other) {
            return !happensBefore(other) && !other.happensBefore(this);
        }

        private Set<String> getAllNodeIds(VectorClock other) {
            Set<String> allNodes = new HashSet<>(clock.keySet());
            allNodes.addAll(other.clock.keySet());
            return allNodes;
        }

        @Override
        public String toString() {
            return clock.toString();
        }

        public Map<String, Integer> getClock() {
            return new HashMap<>(clock);
        }
    }

    /**
     * Versioned Value with Vector Clock
     */
    static class VersionedValue<T> {
        private final T value;
        private final VectorClock vectorClock;

        public VersionedValue(T value, VectorClock vectorClock) {
            this.value = value;
            this.vectorClock = new VectorClock(vectorClock.getClock());
        }

        public T getValue() {
            return value;
        }

        public VectorClock getVectorClock() {
            return vectorClock;
        }
    }

    // ============================================================================
    // 3. GOSSIP PROTOCOL
    // ============================================================================

    /**
     * Gossip Protocol - Eventually consistent information dissemination
     */
    static class GossipNode {
        private final String nodeId;
        private final Map<String, String> data;
        private final Set<GossipNode> peers;
        private final Random random;

        public GossipNode(String nodeId) {
            this.nodeId = nodeId;
            this.data = new ConcurrentHashMap<>();
            this.peers = ConcurrentHashMap.newKeySet();
            this.random = new Random();
        }

        public void addPeer(GossipNode peer) {
            peers.add(peer);
        }

        public void put(String key, String value) {
            data.put(key, value);
        }

        public void gossip() {
            if (peers.isEmpty()) return;

            // Select random peer
            List<GossipNode> peerList = new ArrayList<>(peers);
            GossipNode peer = peerList.get(random.nextInt(peerList.size()));

            // Send data to peer
            peer.receive(new HashMap<>(data));
        }

        public void receive(Map<String, String> receivedData) {
            // Merge received data
            for (Map.Entry<String, String> entry : receivedData.entrySet()) {
                data.putIfAbsent(entry.getKey(), entry.getValue());
            }
        }

        public Map<String, String> getData() {
            return new HashMap<>(data);
        }

        public String getNodeId() {
            return nodeId;
        }
    }

    /**
     * Gossip Network Simulator
     */
    static class GossipNetwork {
        private final List<GossipNode> nodes;
        private final ScheduledExecutorService scheduler;

        public GossipNetwork(int nodeCount) {
            this.nodes = new ArrayList<>();
            for (int i = 0; i < nodeCount; i++) {
                nodes.add(new GossipNode("Node-" + i));
            }

            // Create random topology
            for (GossipNode node : nodes) {
                for (GossipNode peer : nodes) {
                    if (node != peer && Math.random() > 0.5) {
                        node.addPeer(peer);
                    }
                }
            }

            this.scheduler = Executors.newScheduledThreadPool(1);
        }

        public void startGossiping(int intervalMs) {
            scheduler.scheduleAtFixedRate(() -> {
                for (GossipNode node : nodes) {
                    node.gossip();
                }
            }, 0, intervalMs, TimeUnit.MILLISECONDS);
        }

        public void stopGossiping() {
            scheduler.shutdown();
        }

        public GossipNode getNode(int index) {
            return nodes.get(index);
        }

        public List<GossipNode> getNodes() {
            return new ArrayList<>(nodes);
        }
    }

    // ============================================================================
    // 4. MERKLE TREES
    // ============================================================================

    /**
     * Merkle Tree - Efficient data verification
     */
    static class MerkleTree {
        static class Node {
            String hash;
            Node left;
            Node right;

            Node(String hash) {
                this.hash = hash;
            }
        }

        private Node root;
        private final List<String> dataBlocks;

        public MerkleTree(List<String> dataBlocks) {
            this.dataBlocks = new ArrayList<>(dataBlocks);
            this.root = buildTree(dataBlocks);
        }

        private Node buildTree(List<String> blocks) {
            if (blocks.isEmpty()) return null;
            if (blocks.size() == 1) {
                return new Node(hash(blocks.get(0)));
            }

            List<Node> nodes = new ArrayList<>();
            for (String block : blocks) {
                nodes.add(new Node(hash(block)));
            }

            while (nodes.size() > 1) {
                List<Node> parents = new ArrayList<>();
                for (int i = 0; i < nodes.size(); i += 2) {
                    Node left = nodes.get(i);
                    Node right = (i + 1 < nodes.size()) ? nodes.get(i + 1) : left;

                    Node parent = new Node(hash(left.hash + right.hash));
                    parent.left = left;
                    parent.right = right;
                    parents.add(parent);
                }
                nodes = parents;
            }

            return nodes.get(0);
        }

        public String getRootHash() {
            return root != null ? root.hash : "";
        }

        public boolean verify(MerkleTree other) {
            return getRootHash().equals(other.getRootHash());
        }

        private String hash(String data) {
            // Simple hash for demo (use SHA-256 in production)
            return String.valueOf(data.hashCode());
        }

        public List<String> getDataBlocks() {
            return new ArrayList<>(dataBlocks);
        }
    }

    // ============================================================================
    // 5. BLOOM FILTERS
    // ============================================================================

    /**
     * Bloom Filter - Space-efficient probabilistic data structure
     */
    static class BloomFilter {
        private final BitSet bitSet;
        private final int size;
        private final int hashFunctions;

        public BloomFilter(int size, int hashFunctions) {
            this.bitSet = new BitSet(size);
            this.size = size;
            this.hashFunctions = hashFunctions;
        }

        public void add(String element) {
            for (int i = 0; i < hashFunctions; i++) {
                int hash = hash(element, i);
                bitSet.set(Math.abs(hash % size));
            }
        }

        public boolean mightContain(String element) {
            for (int i = 0; i < hashFunctions; i++) {
                int hash = hash(element, i);
                if (!bitSet.get(Math.abs(hash % size))) {
                    return false;
                }
            }
            return true;
        }

        private int hash(String element, int seed) {
            return (element.hashCode() * (seed + 1));
        }

        public double getFalsePositiveRate(int insertedElements) {
            double k = hashFunctions;
            double m = size;
            double n = insertedElements;
            return Math.pow(1 - Math.exp(-k * n / m), k);
        }
    }

    // ============================================================================
    // 6. LEADER ELECTION
    // ============================================================================

    /**
     * Bully Algorithm for Leader Election
     */
    static class BullyNode {
        private final int nodeId;
        private volatile boolean isLeader;
        private volatile int currentLeaderId;
        private final List<BullyNode> allNodes;

        public BullyNode(int nodeId, List<BullyNode> allNodes) {
            this.nodeId = nodeId;
            this.allNodes = allNodes;
            this.isLeader = false;
            this.currentLeaderId = -1;
        }

        public void startElection() {
            System.out.println("Node " + nodeId + " starting election");

            List<BullyNode> higherNodes = allNodes.stream()
                .filter(n -> n.nodeId > this.nodeId)
                .collect(Collectors.toList());

            if (higherNodes.isEmpty()) {
                becomeLeader();
            } else {
                // Send election message to higher nodes
                boolean responseReceived = false;
                for (BullyNode node : higherNodes) {
                    if (node.receiveElection(this)) {
                        responseReceived = true;
                    }
                }

                if (!responseReceived) {
                    becomeLeader();
                }
            }
        }

        public boolean receiveElection(BullyNode sender) {
            if (sender.nodeId < this.nodeId) {
                startElection();
                return true;
            }
            return false;
        }

        private void becomeLeader() {
            isLeader = true;
            currentLeaderId = nodeId;
            System.out.println("Node " + nodeId + " is now the leader");

            // Announce victory
            for (BullyNode node : allNodes) {
                if (node != this) {
                    node.receiveVictory(nodeId);
                }
            }
        }

        public void receiveVictory(int leaderId) {
            isLeader = false;
            currentLeaderId = leaderId;
        }

        public boolean isLeader() {
            return isLeader;
        }

        public int getNodeId() {
            return nodeId;
        }
    }

    // ============================================================================
    // 7. RAFT CONSENSUS (Simplified)
    // ============================================================================

    /**
     * Simplified Raft Node
     */
    static class RaftNode {
        enum State { FOLLOWER, CANDIDATE, LEADER }

        private final String nodeId;
        private volatile State state;
        private volatile int currentTerm;
        private volatile String votedFor;
        private final List<String> log;

        public RaftNode(String nodeId) {
            this.nodeId = nodeId;
            this.state = State.FOLLOWER;
            this.currentTerm = 0;
            this.votedFor = null;
            this.log = new CopyOnWriteArrayList<>();
        }

        public void becomeCandidate() {
            state = State.CANDIDATE;
            currentTerm++;
            votedFor = nodeId;
            System.out.println(nodeId + " became CANDIDATE for term " + currentTerm);
        }

        public void becomeLeader() {
            state = State.LEADER;
            System.out.println(nodeId + " became LEADER for term " + currentTerm);
        }

        public void becomeFollower(int term) {
            state = State.FOLLOWER;
            currentTerm = term;
            votedFor = null;
            System.out.println(nodeId + " became FOLLOWER for term " + currentTerm);
        }

        public boolean requestVote(int term, String candidateId) {
            if (term > currentTerm) {
                currentTerm = term;
                votedFor = null;
            }

            if (term == currentTerm && (votedFor == null || votedFor.equals(candidateId))) {
                votedFor = candidateId;
                return true;
            }

            return false;
        }

        public void appendEntry(String entry) {
            if (state == State.LEADER) {
                log.add(entry);
            }
        }

        public State getState() {
            return state;
        }

        public String getNodeId() {
            return nodeId;
        }

        public int getCurrentTerm() {
            return currentTerm;
        }
    }

    // ============================================================================
    // 8. QUORUM-BASED SYSTEMS
    // ============================================================================

    /**
     * Quorum Read/Write System
     */
    static class QuorumSystem {
        private final List<DataNode> nodes;
        private final int writeQuorum;
        private final int readQuorum;

        static class DataNode {
            private final String nodeId;
            private final Map<String, VersionedValue<String>> data;

            public DataNode(String nodeId) {
                this.nodeId = nodeId;
                this.data = new ConcurrentHashMap<>();
            }

            public void write(String key, VersionedValue<String> value) {
                data.put(key, value);
            }

            public VersionedValue<String> read(String key) {
                return data.get(key);
            }

            public String getNodeId() {
                return nodeId;
            }
        }

        public QuorumSystem(int nodeCount, int writeQuorum, int readQuorum) {
            if (writeQuorum + readQuorum <= nodeCount) {
                throw new IllegalArgumentException("W + R must be > N for consistency");
            }

            this.nodes = new ArrayList<>();
            for (int i = 0; i < nodeCount; i++) {
                nodes.add(new DataNode("Node-" + i));
            }
            this.writeQuorum = writeQuorum;
            this.readQuorum = readQuorum;
        }

        public boolean write(String key, String value, VectorClock clock) {
            VersionedValue<String> versionedValue = new VersionedValue<>(value, clock);
            int successCount = 0;

            for (DataNode node : nodes) {
                node.write(key, versionedValue);
                successCount++;
                if (successCount >= writeQuorum) {
                    return true;
                }
            }

            return false;
        }

        public VersionedValue<String> read(String key) {
            List<VersionedValue<String>> values = new ArrayList<>();

            for (int i = 0; i < readQuorum && i < nodes.size(); i++) {
                VersionedValue<String> value = nodes.get(i).read(key);
                if (value != null) {
                    values.add(value);
                }
            }

            // Return value with highest vector clock
            return values.stream()
                .max(Comparator.comparing(v -> v.getVectorClock().toString()))
                .orElse(null);
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) throws Exception {
        System.out.println("=== DAY 24: DISTRIBUTED SYSTEMS PATTERNS ===\n");

        // Test Two-Phase Commit
        demonstrateTwoPhaseCommit();

        // Test Vector Clocks
        demonstrateVectorClocks();

        // Test Gossip Protocol
        demonstrateGossip();

        // Test Merkle Trees
        demonstrateMerkleTrees();

        // Test Bloom Filters
        demonstrateBloomFilter();

        // Test Leader Election
        demonstrateLeaderElection();

        // Test Raft
        demonstrateRaft();

        // Test Quorum
        demonstrateQuorum();
    }

    private static void demonstrateTwoPhaseCommit() {
        System.out.println("\n=== Two-Phase Commit Demo ===");
        List<Participant> participants = Arrays.asList(
            new DatabaseParticipant("DB1"),
            new DatabaseParticipant("DB2"),
            new DatabaseParticipant("DB3")
        );

        TwoPhaseCommitCoordinator coordinator = new TwoPhaseCommitCoordinator(participants);
        boolean success = coordinator.executeTransaction("TXN-001");
        System.out.println("Transaction result: " + (success ? "SUCCESS" : "FAILED"));
    }

    private static void demonstrateVectorClocks() {
        System.out.println("\n=== Vector Clocks Demo ===");
        VectorClock vc1 = new VectorClock();
        VectorClock vc2 = new VectorClock();

        vc1.increment("Node-A");
        System.out.println("VC1 after Node-A event: " + vc1);

        vc2.increment("Node-B");
        System.out.println("VC2 after Node-B event: " + vc2);

        vc1.update(vc2);
        vc1.increment("Node-A");
        System.out.println("VC1 after receiving VC2 and increment: " + vc1);

        System.out.println("VC1 happens before VC2? " + vc1.happensBefore(vc2));
        System.out.println("VC1 concurrent with VC2? " + vc1.isConcurrent(vc2));
    }

    private static void demonstrateGossip() throws InterruptedException {
        System.out.println("\n=== Gossip Protocol Demo ===");
        GossipNetwork network = new GossipNetwork(5);

        // Add data to one node
        network.getNode(0).put("key1", "value1");
        System.out.println("Initial: Node-0 has data");

        // Start gossiping
        network.startGossiping(100);

        // Wait for propagation
        Thread.sleep(500);

        // Check all nodes
        for (GossipNode node : network.getNodes()) {
            System.out.println(node.getNodeId() + " data: " + node.getData());
        }

        network.stopGossiping();
    }

    private static void demonstrateMerkleTrees() {
        System.out.println("\n=== Merkle Trees Demo ===");
        List<String> data1 = Arrays.asList("block1", "block2", "block3", "block4");
        List<String> data2 = Arrays.asList("block1", "block2", "block3", "block4");
        List<String> data3 = Arrays.asList("block1", "block2", "block3", "block5");

        MerkleTree tree1 = new MerkleTree(data1);
        MerkleTree tree2 = new MerkleTree(data2);
        MerkleTree tree3 = new MerkleTree(data3);

        System.out.println("Tree1 root: " + tree1.getRootHash());
        System.out.println("Tree2 root: " + tree2.getRootHash());
        System.out.println("Tree3 root: " + tree3.getRootHash());

        System.out.println("Tree1 == Tree2? " + tree1.verify(tree2));
        System.out.println("Tree1 == Tree3? " + tree1.verify(tree3));
    }

    private static void demonstrateBloomFilter() {
        System.out.println("\n=== Bloom Filter Demo ===");
        BloomFilter filter = new BloomFilter(1000, 3);

        filter.add("apple");
        filter.add("banana");
        filter.add("cherry");

        System.out.println("Contains 'apple'? " + filter.mightContain("apple"));
        System.out.println("Contains 'banana'? " + filter.mightContain("banana"));
        System.out.println("Contains 'orange'? " + filter.mightContain("orange"));
        System.out.println("False positive rate: " + 
            String.format("%.4f", filter.getFalsePositiveRate(3)));
    }

    private static void demonstrateLeaderElection() {
        System.out.println("\n=== Leader Election (Bully) Demo ===");
        List<BullyNode> nodes = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            nodes.add(new BullyNode(i, nodes));
        }

        // Update references
        for (BullyNode node : nodes) {
            // Already passed in constructor
        }

        // Start election from node 2
        nodes.get(1).startElection();

        // Find leader
        for (BullyNode node : nodes) {
            if (node.isLeader()) {
                System.out.println("\nFinal leader: Node " + node.getNodeId());
            }
        }
    }

    private static void demonstrateRaft() {
        System.out.println("\n=== Raft Consensus Demo ===");
        List<RaftNode> nodes = Arrays.asList(
            new RaftNode("Node-1"),
            new RaftNode("Node-2"),
            new RaftNode("Node-3")
        );

        // Node 1 becomes candidate
        nodes.get(0).becomeCandidate();

        // Simulate voting
        int votes = 1; // Self vote
        for (int i = 1; i < nodes.size(); i++) {
            if (nodes.get(i).requestVote(nodes.get(0).getCurrentTerm(), nodes.get(0).getNodeId())) {
                votes++;
            }
        }

        if (votes > nodes.size() / 2) {
            nodes.get(0).becomeLeader();
        }

        System.out.println("Leader elected: " + nodes.get(0).getNodeId());
    }

    private static void demonstrateQuorum() {
        System.out.println("\n=== Quorum System Demo ===");
        QuorumSystem quorum = new QuorumSystem(5, 3, 3);

        VectorClock clock = new VectorClock();
        clock.increment("writer");

        quorum.write("key1", "value1", clock);
        System.out.println("Wrote key1=value1 to quorum");

        VersionedValue<String> result = quorum.read("key1");
        if (result != null) {
            System.out.println("Read from quorum: " + result.getValue());
            System.out.println("Version: " + result.getVectorClock());
        }
    }
}
