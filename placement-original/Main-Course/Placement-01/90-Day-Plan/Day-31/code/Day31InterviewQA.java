/**
 * DAY 31: INTERVIEW QUESTIONS & ANSWERS
 * Distributed Systems Deep Dive
 * 
 * 160+ Interview Questions covering:
 * - Distributed Systems Fundamentals
 * - CAP Theorem & Consistency Models
 * - Consensus Algorithms
 * - Replication Strategies
 * - Distributed Locking
 * - Leader Election
 * - Consistent Hashing
 * - Vector Clocks & Causality
 * - CRDTs
 * - Real-World System Design
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 4, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;

public class Day31InterviewQA {
    
    // ========================================================================
    // SECTION 1: DISTRIBUTED SYSTEMS FUNDAMENTALS (25 Questions)
    // ========================================================================
    
    /**
     * Q1: What is a distributed system? ⭐
     * 
     * ANSWER:
     * A distributed system is a collection of independent computers that appears
     * to its users as a single coherent system. Key characteristics:
     * 
     * 1. Multiple Nodes: System components run on separate machines
     * 2. Message Passing: Nodes communicate via network messages
     * 3. No Shared Memory: Each node has its own local memory
     * 4. Concurrent Execution: Multiple processes execute simultaneously
     * 5. Partial Failures: Some nodes can fail while others continue
     * 
     * Examples: Google Search, Netflix, Amazon, Facebook
     * 
     * Benefits:
     * - Scalability: Handle more load by adding machines
     * - Fault Tolerance: System continues despite node failures
     * - Geographic Distribution: Serve users worldwide with low latency
     * - Resource Sharing: Share expensive resources across organization
     * 
     * Challenges:
     * - Network failures and partitions
     * - Clock synchronization
     * - Consensus and coordination
     * - Data consistency
     */
    
    /**
     * Q2: What is the CAP Theorem? ⭐⭐⭐
     * 
     * ANSWER:
     * CAP Theorem states that a distributed system can provide at most TWO
     * of these three guarantees simultaneously:
     * 
     * C - Consistency: All nodes see the same data at the same time
     * A - Availability: Every request receives a response (success/failure)
     * P - Partition Tolerance: System continues despite network partitions
     * 
     * Trade-offs:
     * 
     * CP Systems (Consistency + Partition Tolerance):
     * - Sacrifice availability during partitions
     * - Examples: HBase, MongoDB (with strong consistency), Redis Cluster
     * - Use case: Banking, financial transactions
     * 
     * AP Systems (Availability + Partition Tolerance):
     * - Sacrifice consistency during partitions (eventual consistency)
     * - Examples: Cassandra, DynamoDB, CouchDB
     * - Use case: Social media, shopping carts
     * 
     * CA Systems (Consistency + Availability):
     * - Cannot tolerate partitions (single-node systems)
     * - Examples: Traditional RDBMS (single instance)
     * - Not truly distributed
     * 
     * Note: In practice, network partitions WILL happen, so choice is
     * really between CP and AP.
     */
    static void demonstrateCAP() {
        System.out.println("CAP Theorem Demonstration");
        System.out.println("=".repeat(60));
        
        // AP System: Returns stale data during partition
        class APSystem {
            Map<String, String> cache = new HashMap<>();
            boolean partitioned = false;
            
            void write(String key, String value) {
                if (!partitioned) {
                    cache.put(key, value);
                    System.out.println("AP: Wrote " + key + "=" + value);
                } else {
                    System.out.println("AP: Network partitioned, writing locally");
                    cache.put(key, value); // Still available!
                }
            }
            
            String read(String key) {
                System.out.println("AP: Reading " + key + " = " + cache.get(key));
                return cache.get(key); // Always returns (might be stale)
            }
        }
        
        // CP System: Refuses requests during partition
        class CPSystem {
            Map<String, String> data = new HashMap<>();
            boolean partitioned = false;
            
            void write(String key, String value) {
                if (partitioned) {
                    throw new RuntimeException("CP: Cannot write - no quorum");
                }
                data.put(key, value);
                System.out.println("CP: Wrote " + key + "=" + value);
            }
            
            String read(String key) {
                if (partitioned) {
                    throw new RuntimeException("CP: Cannot read - no quorum");
                }
                String value = data.get(key);
                System.out.println("CP: Reading " + key + " = " + value);
                return value;
            }
        }
        
        System.out.println("\n--- AP System (Cassandra-style) ---");
        APSystem ap = new APSystem();
        ap.write("user", "Alice");
        ap.read("user");
        ap.partitioned = true;
        System.out.println("Network partition occurs!");
        ap.write("user", "Bob"); // Still works!
        ap.read("user"); // Returns value (might be inconsistent)
        
        System.out.println("\n--- CP System (MongoDB-style) ---");
        CPSystem cp = new CPSystem();
        cp.write("user", "Alice");
        cp.read("user");
        cp.partitioned = true;
        System.out.println("Network partition occurs!");
        try {
            cp.write("user", "Bob"); // Fails!
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    
    /**
     * Q3: What are consistency models in distributed systems? ⭐⭐⭐
     * 
     * ANSWER:
     * Consistency models define what values a read operation can return.
     * 
     * 1. STRONG CONSISTENCY (Linearizability)
     *    - All nodes see the same data at the same time
     *    - Reads return most recent write
     *    - Example: Google Spanner, etcd
     *    - Implementation: Consensus protocols (Paxos, Raft)
     * 
     * 2. EVENTUAL CONSISTENCY
     *    - Eventually all nodes converge to same value
     *    - Reads may return stale data temporarily
     *    - Example: DynamoDB, Cassandra
     *    - Implementation: Anti-entropy, read repair
     * 
     * 3. CAUSAL CONSISTENCY
     *    - Causally related operations seen in order
     *    - Concurrent operations can be seen differently
     *    - Example: COPS, Eiger
     *    - Implementation: Vector clocks
     * 
     * 4. SEQUENTIAL CONSISTENCY
     *    - Operations appear in some sequential order
     *    - All nodes agree on order
     *    - Weaker than linearizability
     * 
     * 5. READ-YOUR-WRITES
     *    - Client sees its own writes immediately
     *    - Other clients may see stale data
     *    - Example: Session stickiness
     * 
     * 6. MONOTONIC READS
     *    - Once a client reads a value, subsequent reads
     *      return same or newer value (no going backwards)
     * 
     * Trade-off: Stronger consistency → Lower availability/performance
     */
    
    /**
     * Q4: What is the difference between synchronous and asynchronous replication? ⭐⭐
     * 
     * ANSWER:
     * 
     * SYNCHRONOUS REPLICATION:
     * - Primary waits for acknowledgment from replicas before confirming write
     * - Guarantees data consistency across all nodes
     * - Higher latency (must wait for network round trips)
     * - Lower availability (if replica down, writes fail)
     * - Use case: Financial transactions, critical data
     * 
     * ASYNCHRONOUS REPLICATION:
     * - Primary confirms write immediately, replicates in background
     * - Better performance and availability
     * - Risk of data loss if primary fails before replication
     * - Eventual consistency
     * - Use case: Analytics, caching, non-critical data
     * 
     * SEMI-SYNCHRONOUS (Hybrid):
     * - Wait for at least one replica (not all)
     * - Balance between consistency and availability
     * - Example: MySQL semi-sync replication
     */
    static void demonstrateReplication() {
        System.out.println("\nReplication Patterns");
        System.out.println("=".repeat(60));
        
        class SyncReplication {
            void write(String data) {
                System.out.println("Sync: Writing to primary...");
                
                // Simulate network delay to replicas
                try { Thread.sleep(50); } catch (InterruptedException e) {}
                System.out.println("Sync: Waiting for replica 1...");
                
                try { Thread.sleep(50); } catch (InterruptedException e) {}
                System.out.println("Sync: Waiting for replica 2...");
                
                System.out.println("Sync: Write confirmed (all replicas updated)");
            }
        }
        
        class AsyncReplication {
            void write(String data) {
                System.out.println("Async: Writing to primary...");
                System.out.println("Async: Write confirmed immediately");
                
                // Background replication
                CompletableFuture.runAsync(() -> {
                    try { Thread.sleep(50); } catch (InterruptedException e) {}
                    System.out.println("Async: Replicated to replica 1");
                });
                
                CompletableFuture.runAsync(() -> {
                    try { Thread.sleep(50); } catch (InterruptedException e) {}
                    System.out.println("Async: Replicated to replica 2");
                });
            }
        }
        
        System.out.println("\n--- Synchronous Replication ---");
        long start = System.currentTimeMillis();
        new SyncReplication().write("data");
        System.out.println("Time: " + (System.currentTimeMillis() - start) + "ms\n");
        
        System.out.println("--- Asynchronous Replication ---");
        start = System.currentTimeMillis();
        new AsyncReplication().write("data");
        System.out.println("Time: " + (System.currentTimeMillis() - start) + "ms");
        
        try { Thread.sleep(200); } catch (InterruptedException e) {}
    }
    
    /**
     * Q5: What is quorum in distributed systems? ⭐⭐⭐
     * 
     * ANSWER:
     * Quorum is the minimum number of nodes that must agree for an operation
     * to succeed. Used to maintain consistency in distributed systems.
     * 
     * Formula: W + R > N
     * - N = Total number of replicas
     * - W = Write quorum (nodes that must acknowledge write)
     * - R = Read quorum (nodes that must respond to read)
     * 
     * Examples:
     * 
     * 1. Strong Consistency: W=3, R=3, N=5
     *    - Majority for both reads and writes
     *    - Guarantees latest value always read
     * 
     * 2. Read-Optimized: W=4, R=2, N=5
     *    - Faster reads (only need 2 nodes)
     *    - Slower writes (need 4 nodes)
     * 
     * 3. Write-Optimized: W=2, R=4, N=5
     *    - Faster writes
     *    - Slower reads
     * 
     * Benefits:
     * - Fault tolerance: Can tolerate N - W failures for writes
     * - Consistency: Overlapping quorums ensure consistency
     * - Flexibility: Tune for read-heavy or write-heavy workloads
     */
    
    // Additional questions (concise answers)
    static String[] FUNDAMENTALS_QUESTIONS = {
        "Q6: What is Byzantine fault? ⭐⭐⭐",
        "Q7: What is split-brain problem? ⭐⭐",
        "Q8: What is the difference between horizontal and vertical scaling? ⭐",
        "Q9: What is sharding? ⭐⭐",
        "Q10: What is a distributed hash table (DHT)? ⭐⭐",
        "Q11: What is the FLP impossibility result? ⭐⭐⭐",
        "Q12: What is eventual consistency? ⭐⭐",
        "Q13: What is read-your-writes consistency? ⭐⭐",
        "Q14: What is monotonic reads consistency? ⭐⭐",
        "Q15: What is session consistency? ⭐⭐",
        "Q16: What is the difference between fault tolerance and high availability? ⭐⭐",
        "Q17: What is idempotency and why is it important? ⭐⭐",
        "Q18: What is two generals problem? ⭐⭐⭐",
        "Q19: What is the difference between safety and liveness? ⭐⭐⭐",
        "Q20: What is back pressure in distributed systems? ⭐⭐",
        "Q21: What is circuit breaker pattern? ⭐⭐",
        "Q22: What is bulkhead pattern? ⭐⭐",
        "Q23: What is the difference between RPC and messaging? ⭐⭐",
        "Q24: What is service discovery? ⭐⭐",
        "Q25: What is distributed tracing? ⭐⭐"
    };
    
    // ========================================================================
    // SECTION 2: CONSENSUS ALGORITHMS (20 Questions)
    // ========================================================================
    
    /**
     * Q26: What is Paxos? ⭐⭐⭐
     * 
     * ANSWER:
     * Paxos is a family of consensus algorithms that allows a distributed
     * system to agree on a single value despite failures.
     * 
     * Three Roles:
     * 1. Proposer: Proposes values
     * 2. Acceptor: Votes on proposals
     * 3. Learner: Learns chosen value
     * 
     * Two Phases:
     * 
     * PHASE 1 - PREPARE:
     * - Proposer sends PREPARE(n) to majority of acceptors
     * - Acceptor responds with promise not to accept proposals < n
     * - Also returns highest accepted proposal (if any)
     * 
     * PHASE 2 - ACCEPT:
     * - Proposer sends ACCEPT(n, value) to majority
     * - Acceptor accepts if no higher prepare received
     * - If majority accepts, value is chosen
     * 
     * Properties:
     * - Safety: Only one value can be chosen
     * - Liveness: Eventually a value will be chosen (with certain assumptions)
     * - Fault Tolerance: Tolerates f failures with 2f+1 nodes
     * 
     * Variations:
     * - Basic Paxos: Single value consensus
     * - Multi-Paxos: Sequence of values (leader optimization)
     * - Fast Paxos: Reduced latency
     * 
     * Used in: Google Chubby, Apache ZooKeeper (ZAB variant)
     */
    
    /**
     * Q27: What is Raft consensus algorithm? ⭐⭐⭐
     * 
     * ANSWER:
     * Raft is a consensus algorithm designed to be more understandable
     * than Paxos while providing similar guarantees.
     * 
     * Three Components:
     * 
     * 1. LEADER ELECTION:
     *    - Nodes start as FOLLOWER
     *    - Election timeout → become CANDIDATE
     *    - Request votes from other nodes
     *    - Majority votes → become LEADER
     *    - Leader sends periodic heartbeats
     * 
     * 2. LOG REPLICATION:
     *    - Client sends command to leader
     *    - Leader appends to its log
     *    - Leader replicates to followers via AppendEntries RPC
     *    - Once replicated to majority → committed
     *    - Leader applies to state machine and returns to client
     * 
     * 3. SAFETY:
     *    - Election Safety: At most one leader per term
     *    - Leader Append-Only: Leader never overwrites/deletes entries
     *    - Log Matching: If two logs contain same entry at same index,
     *      all preceding entries are identical
     *    - Leader Completeness: If entry committed in term T,
     *      it will be present in leaders of all higher terms
     *    - State Machine Safety: If a server applies entry at index i,
     *      no other server will apply different entry at i
     * 
     * Key Concepts:
     * - Term: Logical time, increments on election
     * - Log Index: Position in the log
     * - Commit Index: Highest log entry known to be committed
     * - Election Timeout: Randomized to avoid split votes
     * 
     * Used in: etcd, Consul, CockroachDB
     */
    
    /**
     * Q28: Raft vs Paxos - What are the differences? ⭐⭐⭐
     * 
     * ANSWER:
     * 
     * RAFT:
     * + Easier to understand and implement
     * + Strong leader (all requests go through leader)
     * + Leader election is part of protocol
     * + Better suited for practical systems
     * + Extensive documentation and educational materials
     * - Leader is bottleneck for all writes
     * 
     * PAXOS:
     * + More flexible (no single leader required)
     * + Can have multiple proposers
     * + More general-purpose
     * + Theoretical foundation well-studied
     * - Harder to understand and implement correctly
     * - Often requires additional protocols (Multi-Paxos)
     * - Leader election not specified in basic Paxos
     * 
     * Similarities:
     * - Both achieve consensus with majority quorum
     * - Both tolerate f failures with 2f+1 nodes
     * - Both guarantee safety
     * - Both have similar performance characteristics
     * 
     * When to use:
     * - Raft: Building new distributed systems (etcd, Consul)
     * - Paxos: When flexibility needed or already invested
     */
    
    /**
     * Q29: What is Two-Phase Commit (2PC)? ⭐⭐
     * 
     * ANSWER:
     * 2PC is an atomic commitment protocol for distributed transactions.
     * 
     * Roles:
     * - Coordinator: Orchestrates the commit
     * - Participants: Execute the transaction
     * 
     * Two Phases:
     * 
     * PHASE 1 - PREPARE:
     * 1. Coordinator sends PREPARE to all participants
     * 2. Each participant:
     *    - Executes transaction up to commit point
     *    - Writes to undo/redo log
     *    - Responds YES (can commit) or NO (abort)
     * 
     * PHASE 2 - COMMIT/ABORT:
     * 1. If ALL participants voted YES:
     *    - Coordinator sends COMMIT to all
     *    - Participants commit and release locks
     * 2. If ANY participant voted NO:
     *    - Coordinator sends ABORT to all
     *    - Participants rollback and release locks
     * 
     * Problems:
     * 1. Blocking: Participants must wait for coordinator
     * 2. Single Point of Failure: If coordinator fails in phase 2,
     *    participants are blocked indefinitely
     * 3. Not partition-tolerant
     * 
     * Used in: Traditional databases, XA transactions
     */
    
    /**
     * Q30: What is Three-Phase Commit (3PC)? ⭐⭐⭐
     * 
     * ANSWER:
     * 3PC extends 2PC to reduce blocking in coordinator failures.
     * 
     * Three Phases:
     * 
     * PHASE 1 - PREPARE (CAN-COMMIT):
     * - Coordinator asks: "Can you commit?"
     * - Participants respond YES/NO
     * 
     * PHASE 2 - PRE-COMMIT:
     * - If all YES: Coordinator sends PRE-COMMIT
     * - Participants acknowledge PRE-COMMIT
     * - This phase ensures all participants know decision
     * 
     * PHASE 3 - DO-COMMIT:
     * - Coordinator sends DO-COMMIT
     * - Participants commit
     * 
     * Advantages over 2PC:
     * - Non-blocking: Participants can make progress if coordinator fails
     * - If participant receives PRE-COMMIT, knows others also received
     * - Can timeout and commit safely
     * 
     * Disadvantages:
     * - More messages (higher latency)
     * - Still not partition-tolerant
     * - Rarely used in practice
     * 
     * Network partition can still cause inconsistency!
     */
    
    static String[] CONSENSUS_QUESTIONS = {
        "Q31: What is ZAB (ZooKeeper Atomic Broadcast)? ⭐⭐⭐",
        "Q32: What is Viewstamped Replication? ⭐⭐⭐",
        "Q33: What is the difference between consensus and atomic broadcast? ⭐⭐⭐",
        "Q34: What is Byzantine Paxos? ⭐⭐⭐",
        "Q35: What is Fast Paxos? ⭐⭐⭐",
        "Q36: What is EPaxos (Egalitarian Paxos)? ⭐⭐⭐",
        "Q37: How does Raft handle log compaction? ⭐⭐",
        "Q38: What is the role of term in Raft? ⭐⭐",
        "Q39: How does Raft prevent split votes? ⭐⭐",
        "Q40: What is PBFT (Practical Byzantine Fault Tolerance)? ⭐⭐⭐",
        "Q41: What is Tendermint consensus? ⭐⭐⭐",
        "Q42: How does blockchain achieve consensus? ⭐⭐⭐",
        "Q43: What is Proof of Work? ⭐⭐",
        "Q44: What is Proof of Stake? ⭐⭐",
        "Q45: What is the difference between crash faults and Byzantine faults? ⭐⭐⭐"
    };
    
    // ========================================================================
    // SECTION 3: DISTRIBUTED LOCKING (15 Questions)
    // ========================================================================
    
    /**
     * Q46: What is the RedLock algorithm? ⭐⭐⭐
     * 
     * ANSWER:
     * RedLock is a distributed locking algorithm for Redis, designed to
     * provide stronger guarantees than single-instance locks.
     * 
     * Algorithm:
     * 1. Get current time in milliseconds
     * 2. Try to acquire lock on all N instances sequentially
     *    - Use same key and random value on all instances
     *    - Set TTL to expire lock automatically
     *    - Use small timeout for each acquisition
     * 3. Calculate time elapsed to acquire locks
     * 4. Lock is acquired if:
     *    - Client acquired lock on majority (N/2 + 1)
     *    - Elapsed time < lock validity time
     * 5. If acquired, validity = initial_validity - elapsed - clock_drift
     * 6. If failed to acquire majority, unlock all instances
     * 
     * Parameters:
     * - N = 5 instances (recommended)
     * - Quorum = 3 (N/2 + 1)
     * - Lock TTL (e.g., 5 seconds)
     * - Clock drift factor (small, e.g., 1ms)
     * 
     * Safety Properties:
     * - At most one client holds lock at any time
     * - Deadlock free (automatic release via TTL)
     * - Fault tolerance (up to N/2 failures)
     * 
     * Criticisms (Martin Kleppmann):
     * - Clock drift can cause issues
     * - Doesn't provide fencing tokens
     * - Network delays can violate safety
     * 
     * Better Alternative: Fencing tokens with monotonic sequence
     */
    
    /**
     * Q47: What are fencing tokens? ⭐⭐⭐
     * 
     * ANSWER:
     * Fencing tokens solve the problem of stale lock holders accessing
     * a protected resource after lock has been acquired by another client.
     * 
     * Problem Scenario:
     * 1. Client A acquires lock, gets token = 33
     * 2. Client A pauses (GC, network delay)
     * 3. Lock expires, Client B acquires lock, gets token = 34
     * 4. Client A resumes, tries to access resource (dangerous!)
     * 
     * Solution - Fencing Tokens:
     * - Lock service returns monotonically increasing token
     * - Client includes token in every request to resource
     * - Resource rejects requests with token <= last seen token
     * 
     * Example:
     * Time 1: A acquires lock → token 33
     * Time 2: B acquires lock → token 34
     * Time 3: B writes to storage with token 34 → Accepted
     * Time 4: A (delayed) writes to storage with token 33 → REJECTED!
     * 
     * Implementation:
     * - ZooKeeper: znode version (monotonic)
     * - etcd: Revision number
     * - Custom: Database sequence/counter
     * 
     * This provides linearizability even with clock drift!
     */
    
    static String[] LOCKING_QUESTIONS = {
        "Q48: How does Chubby (Google) implement distributed locks? ⭐⭐⭐",
        "Q49: What is the difference between pessimistic and optimistic locking? ⭐⭐",
        "Q50: How does ZooKeeper implement distributed locks? ⭐⭐⭐",
        "Q51: What is a distributed semaphore? ⭐⭐",
        "Q52: What is a distributed read-write lock? ⭐⭐",
        "Q53: What is lock granularity and why does it matter? ⭐⭐",
        "Q54: How do you prevent deadlocks in distributed systems? ⭐⭐⭐",
        "Q55: What is the convoy effect in locking? ⭐⭐",
        "Q56: How do you implement fair locking? ⭐⭐",
        "Q57: What is lock escalation? ⭐⭐",
        "Q58: What is a lease in distributed systems? ⭐⭐",
        "Q59: How do you handle lock expiration? ⭐⭐",
        "Q60: What is the difference between locks and latches? ⭐⭐"
    };
    
    // ========================================================================
    // SECTION 4: CONSISTENT HASHING (15 Questions)
    // ========================================================================
    
    /**
     * Q61: What is consistent hashing? ⭐⭐⭐
     * 
     * ANSWER:
     * Consistent hashing is a technique to distribute data across nodes
     * while minimizing reorganization when nodes are added/removed.
     * 
     * Traditional Hashing Problem:
     * - node = hash(key) % N
     * - When N changes, almost ALL keys need to move
     * - Example: 100 nodes → 101 nodes = ~99% keys rehashed
     * 
     * Consistent Hashing Solution:
     * 1. Hash both keys and nodes to a ring [0, 2^32)
     * 2. Key is assigned to first node clockwise on ring
     * 3. When node added/removed: only K/N keys move (K = total keys)
     * 
     * Algorithm:
     * - Ring: 0 to 2^32 - 1
     * - Hash function: hash(key) → position on ring
     * - Nodes placed on ring: hash(node_id)
     * - Key assignment: Find next node clockwise from hash(key)
     * 
     * Virtual Nodes:
     * - Each physical node has ~150 virtual nodes
     * - Better distribution (prevent hot spots)
     * - Smoother load balancing when adding/removing nodes
     * 
     * Benefits:
     * - Minimal key movement: O(K/N) keys move
     * - Scalability: Easy to add/remove nodes
     * - Load balancing: With virtual nodes
     * 
     * Used in: Cassandra, DynamoDB, Memcached, Riak
     */
    
    /**
     * Q62: How many virtual nodes should you use? ⭐⭐
     * 
     * ANSWER:
     * Virtual nodes (vnodes) improve load distribution in consistent hashing.
     * 
     * Recommended: 128-256 vnodes per physical node
     * 
     * Trade-offs:
     * 
     * TOO FEW VNODES (< 50):
     * - Poor distribution
     * - Hot spots (some nodes get more keys)
     * - Uneven load after adding/removing nodes
     * 
     * OPTIMAL (128-256):
     * - Good distribution (~1% variance)
     * - Reasonable overhead
     * - Cassandra default: 256
     * - Riak default: 64
     * 
     * TOO MANY VNODES (> 1000):
     * - Diminishing returns on distribution
     * - Higher memory overhead (more entries in hash table)
     * - Slower lookups (more nodes to check)
     * 
     * Calculation:
     * Standard deviation of load ∝ 1/√vnodes
     * 100 vnodes → ~10% variance
     * 256 vnodes → ~6% variance
     */
    
    static String[] HASHING_QUESTIONS = {
        "Q63: What is rendezvous hashing? ⭐⭐⭐",
        "Q64: What is jump consistent hash? ⭐⭐",
        "Q65: How does DynamoDB use consistent hashing? ⭐⭐⭐",
        "Q66: What is the difference between hash partitioning and range partitioning? ⭐⭐",
        "Q67: How do you handle hot spots in consistent hashing? ⭐⭐⭐",
        "Q68: What is bounded load consistent hashing? ⭐⭐⭐",
        "Q69: How do you implement weighted consistent hashing? ⭐⭐",
        "Q70: What hash functions work well for consistent hashing? ⭐⭐",
        "Q71: How do you replicate data with consistent hashing? ⭐⭐⭐",
        "Q72: What is the O(1) consistent hashing variant? ⭐⭐⭐",
        "Q73: How do you migrate data during node changes? ⭐⭐",
        "Q74: What is the Maglev hashing algorithm? ⭐⭐⭐",
        "Q75: How does Cassandra implement consistent hashing? ⭐⭐⭐"
    };
    
    // ========================================================================
    // SECTION 5: VECTOR CLOCKS & CRDT (20 Questions)
    // ========================================================================
    
    /**
     * Q76: What are vector clocks? ⭐⭐⭐
     * 
     * ANSWER:
     * Vector clocks track causality in distributed systems, determining
     * whether events happened-before, after, or concurrently.
     * 
     * Structure:
     * - Vector of logical timestamps, one per node
     * - Example: {A: 3, B: 2, C: 1}
     * 
     * Rules:
     * 1. On local event: Increment own counter
     *    - A does something → A: {A:1, B:0, C:0}
     * 
     * 2. On send: Include vector clock in message
     *    - A sends to B → msg carries {A:1, B:0, C:0}
     * 
     * 3. On receive: Merge vectors (take max of each component) + increment own
     *    - B receives from A:
     *      B_old = {A:0, B:1, C:0}
     *      msg = {A:1, B:0, C:0}
     *      B_new = {A:max(0,1), B:max(1,0)+1, C:max(0,0)} = {A:1, B:2, C:0}
     * 
     * Comparison (Happened-Before):
     * - V1 < V2 if: ∀i V1[i] ≤ V2[i] AND ∃j V1[j] < V2[j]
     * - V1 || V2 (concurrent) if: ∃i,j V1[i] < V2[i] AND V1[j] > V2[j]
     * 
     * Example:
     * V1 = {A:2, B:1, C:0}
     * V2 = {A:3, B:2, C:0}
     * Result: V1 → V2 (V1 happened before V2)
     * 
     * V3 = {A:2, B:0, C:1}
     * Result: V1 || V3 (concurrent, need conflict resolution)
     * 
     * Used in: Dynamo, Riak, Voldemort
     */
    
    /**
     * Q77: What are CRDTs? ⭐⭐⭐
     * 
     * ANSWER:
     * CRDT (Conflict-Free Replicated Data Types) are data structures
     * that automatically resolve conflicts in replicated systems.
     * 
     * Two Types:
     * 
     * 1. STATE-BASED (CvRDT - Convergent):
     *    - Replicas exchange full state
     *    - Merge function combines states
     *    - Must be: Commutative, Associative, Idempotent
     * 
     * 2. OPERATION-BASED (CmRDT - Commutative):
     *    - Replicas exchange operations
     *    - Operations must commute
     *    - Requires reliable delivery
     * 
     * Common CRDTs:
     * 
     * G-COUNTER (Grow-only Counter):
     * - State: Map of {node → count}
     * - Increment: counts[myNode]++
     * - Merge: Take max of each node's count
     * - Value: Sum of all counts
     * 
     * PN-COUNTER (Positive-Negative Counter):
     * - Two G-Counters (positive, negative)
     * - Increment: positive++
     * - Decrement: negative++
     * - Value: positive - negative
     * 
     * LWW-Element-Set (Last-Write-Wins Set):
     * - Add set: {element → timestamp}
     * - Remove set: {element → timestamp}
     * - Contains: addTime > removeTime
     * - Merge: Take max timestamp
     * 
     * OR-Set (Observed-Remove Set):
     * - Each element has unique tag
     * - Add: Add with new tag
     * - Remove: Remove specific tags
     * - Preserves adds concurrent with removes
     * 
     * Properties:
     * + Strong Eventual Consistency
     * + Automatic conflict resolution
     * + No coordination needed
     * - Limited operations
     * - State can grow (garbage collection needed)
     * 
     * Used in: Riak, Redis, Soundcloud, Figma
     */
    
    static String[] CAUSALITY_QUESTIONS = {
        "Q78: What are Lamport timestamps? ⭐⭐",
        "Q79: What is the difference between Lamport and Vector clocks? ⭐⭐⭐",
        "Q80: What are dotted version vectors? ⭐⭐⭐",
        "Q81: What is causal consistency? ⭐⭐⭐",
        "Q82: How do you implement collaborative text editing with CRDTs? ⭐⭐⭐",
        "Q83: What is RGA (Replicated Growable Array)? ⭐⭐⭐",
        "Q84: What is the difference between G-Set and 2P-Set? ⭐⭐",
        "Q85: How does Riak use vector clocks? ⭐⭐⭐",
        "Q86: What is the sibling problem in distributed databases? ⭐⭐",
        "Q87: What is operational transformation vs CRDT? ⭐⭐⭐",
        "Q88: What is the CAP theorem for CRDTs? ⭐⭐⭐",
        "Q89: How do you garbage collect CRDT tombstones? ⭐⭐⭐",
        "Q90: What is the delta-CRDT? ⭐⭐⭐",
        "Q91: How does Figma use CRDTs for multiplayer? ⭐⭐⭐",
        "Q92: What is hybrid logical clock? ⭐⭐⭐",
        "Q93: What is the happened-before relation? ⭐⭐",
        "Q94: How do you detect concurrent updates? ⭐⭐",
        "Q95: What is causal broadcast? ⭐⭐⭐"
    };
    
    // ========================================================================
    // SECTION 6: REAL-WORLD SYSTEMS (30 Questions)
    // ========================================================================
    
    static String[] REAL_WORLD_QUESTIONS = {
        "Q96: How does Cassandra achieve high availability? ⭐⭐⭐",
        "Q97: How does DynamoDB partition data? ⭐⭐⭐",
        "Q98: How does Kafka guarantee ordering? ⭐⭐⭐",
        "Q99: How does Redis Cluster work? ⭐⭐⭐",
        "Q100: How does MongoDB replica set election work? ⭐⭐⭐",
        "Q101: How does Elasticsearch distribute shards? ⭐⭐⭐",
        "Q102: How does Spanner achieve global consistency? ⭐⭐⭐",
        "Q103: How does CockroachDB achieve distributed SQL? ⭐⭐⭐",
        "Q104: How does etcd implement distributed configuration? ⭐⭐⭐",
        "Q105: How does Consul do service discovery? ⭐⭐⭐",
        "Q106: How does ZooKeeper ensure strong consistency? ⭐⭐⭐",
        "Q107: How does Riak handle conflict resolution? ⭐⭐⭐",
        "Q108: How does HBase achieve consistency? ⭐⭐⭐",
        "Q109: How does Couchbase handle replication? ⭐⭐⭐",
        "Q110: How does Neo4j cluster data? ⭐⭐⭐",
        "Q111: How does FoundationDB provide transactions? ⭐⭐⭐",
        "Q112: How does TiDB achieve HTAP? ⭐⭐⭐",
        "Q113: How does YugabyteDB combine Raft and sharding? ⭐⭐⭐",
        "Q114: How does ScyllaDB improve on Cassandra? ⭐⭐⭐",
        "Q115: How does VoltDB achieve high performance? ⭐⭐⭐",
        "Q116: How does RocksDB implement LSM trees? ⭐⭐⭐",
        "Q117: How does Prometheus handle time series data? ⭐⭐⭐",
        "Q118: How does InfluxDB optimize for time series? ⭐⭐⭐",
        "Q119: How does ClickHouse achieve fast analytics? ⭐⭐⭐",
        "Q120: How does Druid enable real-time analytics? ⭐⭐⭐",
        "Q121: How does Pinot optimize for OLAP? ⭐⭐⭐",
        "Q122: How does S3 guarantee durability? ⭐⭐⭐",
        "Q123: How does Bigtable structure data? ⭐⭐⭐",
        "Q124: How does Memcached distribute keys? ⭐⭐",
        "Q125: How does Hazelcast implement distributed computing? ⭐⭐⭐"
    };
    
    // ========================================================================
    // SECTION 7: ADVANCED TOPICS (35+ Questions)
    // ========================================================================
    
    static String[] ADVANCED_QUESTIONS = {
        "Q126: What is gossip protocol? ⭐⭐⭐",
        "Q127: What is the SWIM protocol? ⭐⭐⭐",
        "Q128: What is anti-entropy? ⭐⭐",
        "Q129: What is read repair? ⭐⭐",
        "Q130: What is hinted handoff? ⭐⭐⭐",
        "Q131: What is sloppy quorum? ⭐⭐⭐",
        "Q132: What is Merkle tree and how is it used? ⭐⭐⭐",
        "Q133: What is bloom filter? ⭐⭐",
        "Q134: What is LSM tree? ⭐⭐⭐",
        "Q135: What is write-ahead log (WAL)? ⭐⭐",
        "Q136: What is snapshot isolation? ⭐⭐⭐",
        "Q137: What is serializability? ⭐⭐⭐",
        "Q138: What is linearizability? ⭐⭐⭐",
        "Q139: What is the difference between serializability and linearizability? ⭐⭐⭐",
        "Q140: What is optimistic concurrency control? ⭐⭐",
        "Q141: What is MVCC (Multi-Version Concurrency Control)? ⭐⭐⭐",
        "Q142: What is distributed deadlock detection? ⭐⭐⭐",
        "Q143: What is the phantom read problem? ⭐⭐",
        "Q144: What is write skew? ⭐⭐⭐",
        "Q145: What is lost update problem? ⭐⭐",
        "Q146: What is the difference between isolation levels? ⭐⭐⭐",
        "Q147: What is saga pattern for distributed transactions? ⭐⭐⭐",
        "Q148: What is event sourcing? ⭐⭐⭐",
        "Q149: What is CQRS? ⭐⭐⭐",
        "Q150: What is the outbox pattern? ⭐⭐",
        "Q151: What is dual write problem? ⭐⭐",
        "Q152: What is change data capture (CDC)? ⭐⭐⭐",
        "Q153: What is distributed tracing? ⭐⭐",
        "Q154: What is the difference between monitoring and observability? ⭐⭐",
        "Q155: What is rate limiting in distributed systems? ⭐⭐",
        "Q156: What is the token bucket algorithm? ⭐⭐",
        "Q157: What is the leaky bucket algorithm? ⭐⭐",
        "Q158: What is backpressure? ⭐⭐",
        "Q159: What is the bulkhead pattern? ⭐⭐",
        "Q160: What is the circuit breaker pattern? ⭐⭐"
    };
    
    // ========================================================================
    // MAIN - DEMONSTRATIONS
    // ========================================================================
    
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 31: INTERVIEW QUESTIONS & ANSWERS");
        System.out.println("Distributed Systems Deep Dive");
        System.out.println("=".repeat(80));
        
        // Run demonstrations
        System.out.println("\n--- DETAILED ANSWER DEMONSTRATIONS ---\n");
        
        demonstrateCAP();
        
        demonstrateReplication();
        
        // Print question counts
        System.out.println("\n" + "=".repeat(80));
        System.out.println("QUESTION SUMMARY");
        System.out.println("=".repeat(80));
        
        System.out.println("\nSection 1: Distributed Systems Fundamentals");
        System.out.println("  Detailed Answers: 5");
        System.out.println("  Additional Questions: " + FUNDAMENTALS_QUESTIONS.length);
        
        System.out.println("\nSection 2: Consensus Algorithms");
        System.out.println("  Detailed Answers: 5");
        System.out.println("  Additional Questions: " + CONSENSUS_QUESTIONS.length);
        
        System.out.println("\nSection 3: Distributed Locking");
        System.out.println("  Detailed Answers: 2");
        System.out.println("  Additional Questions: " + LOCKING_QUESTIONS.length);
        
        System.out.println("\nSection 4: Consistent Hashing");
        System.out.println("  Detailed Answers: 2");
        System.out.println("  Additional Questions: " + HASHING_QUESTIONS.length);
        
        System.out.println("\nSection 5: Vector Clocks & CRDTs");
        System.out.println("  Detailed Answers: 2");
        System.out.println("  Additional Questions: " + CAUSALITY_QUESTIONS.length);
        
        System.out.println("\nSection 6: Real-World Systems");
        System.out.println("  Questions: " + REAL_WORLD_QUESTIONS.length);
        
        System.out.println("\nSection 7: Advanced Topics");
        System.out.println("  Questions: " + ADVANCED_QUESTIONS.length);
        
        int totalQuestions = 5 + FUNDAMENTALS_QUESTIONS.length + 
                           5 + CONSENSUS_QUESTIONS.length +
                           2 + LOCKING_QUESTIONS.length +
                           2 + HASHING_QUESTIONS.length +
                           2 + CAUSALITY_QUESTIONS.length +
                           REAL_WORLD_QUESTIONS.length +
                           ADVANCED_QUESTIONS.length;
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("TOTAL: " + totalQuestions + "+ INTERVIEW QUESTIONS");
        System.out.println("16 Detailed Answers with Code Examples");
        System.out.println("144+ Additional Questions Outlined");
        System.out.println("=".repeat(80));
    }
}
