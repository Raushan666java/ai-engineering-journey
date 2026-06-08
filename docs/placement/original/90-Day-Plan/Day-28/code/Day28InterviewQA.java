/**
 * DAY 28: DISTRIBUTED SYSTEMS - INTERVIEW QUESTIONS & ANSWERS
 * 
 * Total Questions: 200+
 * 
 * Categories:
 * 1. Distributed Systems Fundamentals (30 questions)
 * 2. Consensus Algorithms (25 questions)
 * 3. Data Replication & Consistency (30 questions)
 * 4. Distributed Transactions (25 questions)
 * 5. CAP Theorem & Trade-offs (20 questions)
 * 6. Failure Detection & Recovery (20 questions)
 * 7. Distributed Coordination (20 questions)
 * 8. Advanced Topics (30+ questions)
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

public class Day28InterviewQA {

    /**
     * ========================================================================
     * SECTION 1: DISTRIBUTED SYSTEMS FUNDAMENTALS (Q1-Q30)
     * ========================================================================
     */
    
    /**
     * Q1: What are the main challenges in distributed systems?
     * 
     * ANSWER:
     * 
     * 1. PARTIAL FAILURES
     *    - Some components fail while others work
     *    - Hard to distinguish slow vs crashed
     *    - Network partitions isolate parts
     *    
     *    Example:
     *    Node A → Network → Node B
     *    If network fails, A doesn't know if B crashed or network failed
     * 
     * 2. UNBOUNDED LATENCY
     *    - Network delays are unpredictable
     *    - No upper bound on message delivery
     *    - Timeouts are heuristics, not guarantees
     *    
     *    Message sent at T0
     *    Could arrive at T0+1ms or T0+10s
     * 
     * 3. CLOCK SYNCHRONIZATION
     *    - No global clock
     *    - Physical clocks drift
     *    - Need logical clocks for ordering
     *    
     *    Node A: 12:00:00.100
     *    Node B: 12:00:00.098 (2ms behind)
     * 
     * 4. CONCURRENCY
     *    - Multiple nodes operate simultaneously
     *    - Conflicts need resolution
     *    - Race conditions distributed
     *    
     *    Node A writes X=1 at T1
     *    Node B writes X=2 at T1
     *    Which value wins?
     * 
     * 5. CONSISTENCY VS AVAILABILITY
     *    - CAP theorem: can't have both + partition tolerance
     *    - Trade-offs required
     *    - Different consistency models
     * 
     * KEY TAKEAWAYS:
     * ✓ Failures are partial and unpredictable
     * ✓ Network is unreliable
     * ✓ Time is not synchronized
     * ✓ Coordination is expensive
     * 
     * Complexity: Handling failures O(n) where n = nodes
     */
    
    /**
     * Q2: Explain the CAP Theorem with examples.
     * 
     * ANSWER:
     * 
     * CAP THEOREM: In a distributed system, you can only guarantee 2 of 3:
     * - Consistency (C): All nodes see same data
     * - Availability (A): Every request gets response
     * - Partition tolerance (P): System works despite network partitions
     * 
     * Since network partitions are inevitable, choice is C vs A.
     * 
     * 1. CP SYSTEMS (Consistency + Partition Tolerance)
     *    - Sacrifice availability during partitions
     *    - Block requests until consistency restored
     *    
     *    Examples:
     *    - MongoDB (primary-secondary)
     *    - HBase
     *    - Redis Cluster
     *    - Zookeeper
     *    
     *    Scenario:
     *    Client → Node A (partition) Node B
     *    Node A returns error (unavailable) rather than stale data
     * 
     * 2. AP SYSTEMS (Availability + Partition Tolerance)
     *    - Sacrifice consistency during partitions
     *    - Accept requests, resolve conflicts later
     *    
     *    Examples:
     *    - Cassandra
     *    - DynamoDB
     *    - Riak
     *    - CouchDB
     *    
     *    Scenario:
     *    Client → Node A (partition) Node B
     *    Both nodes accept writes, merge later (eventual consistency)
     * 
     * 3. CA SYSTEMS (Consistency + Availability)
     *    - Not partition tolerant
     *    - Only works in single datacenter
     *    - Not truly distributed
     *    
     *    Examples:
     *    - Traditional RDBMS (single instance)
     *    - Single-node Redis
     * 
     * CHOOSING THE RIGHT SYSTEM:
     * 
     * Choose CP when:
     * ✓ Correctness is critical (banking, inventory)
     * ✓ Can tolerate unavailability
     * ✓ Strong consistency required
     * 
     * Choose AP when:
     * ✓ Availability is critical (social media, caching)
     * ✓ Can tolerate eventual consistency
     * ✓ High write throughput needed
     * 
     * PRACTICAL EXAMPLE:
     * 
     * Banking (CP):
     * - Balance must be accurate
     * - Better to be unavailable than inconsistent
     * - Can show error during partition
     * 
     * Social Media Feed (AP):
     * - Likes/comments can be eventually consistent
     * - Better to be available with stale data
     * - Users tolerate minor inconsistencies
     * 
     * CODE EXAMPLE - Quorum Configuration:
     * 
     * // CP: Strong consistency (R+W > N)
     * N = 3, W = 2, R = 2  // W+R=4 > N=3
     * 
     * // AP: High availability (R+W <= N)
     * N = 3, W = 1, R = 1  // W+R=2 < N=3
     * 
     * KEY INSIGHTS:
     * ✓ CAP is about behavior during partitions
     * ✓ Can tune consistency/availability with quorums
     * ✓ Most systems are either CP or AP, not CA
     */
    
    /**
     * Q3: What is eventual consistency? How does it work?
     * 
     * ANSWER:
     * 
     * EVENTUAL CONSISTENCY:
     * If no new updates, all replicas converge to same value eventually.
     * 
     * CHARACTERISTICS:
     * 
     * 1. Weak Guarantee
     *    - Reads may see stale data
     *    - No time bound on convergence
     *    - Conflicts resolved eventually
     * 
     * 2. High Availability
     *    - Accepts writes even during partitions
     *    - No blocking for synchronization
     *    - Better performance
     * 
     * 3. Conflict Resolution Required
     *    - Last-Write-Wins (LWW)
     *    - Version vectors
     *    - CRDTs
     *    - Application-specific merge
     * 
     * HOW IT WORKS:
     * 
     * Timeline:
     * 
     * T0: Client writes X=1 to Node A
     *     Node A: X=1
     *     Node B: X=0 (stale)
     *     Node C: X=0 (stale)
     * 
     * T1: Replication starts (asynchronous)
     *     Node A → Node B: X=1
     *     Node A: X=1
     *     Node B: X=1 (replicated)
     *     Node C: X=0 (still stale)
     * 
     * T2: Full convergence
     *     Node A → Node C: X=1
     *     Node A: X=1
     *     Node B: X=1
     *     Node C: X=1 (all consistent)
     * 
     * CONFLICT SCENARIO:
     * 
     * T0: Partition occurs
     *     [Node A] | [Node B, Node C]
     * 
     * T1: Concurrent writes
     *     Client 1 → Node A: X=1
     *     Client 2 → Node B: X=2
     *     
     *     Node A: X=1
     *     Node B: X=2
     *     Node C: X=2
     * 
     * T2: Partition heals, conflict detected
     *     Vector Clocks:
     *     Node A: {A:1}
     *     Node B: {B:1}
     *     Concurrent! Need resolution.
     * 
     * T3: Conflict resolution
     *     Option 1: LWW - Choose X=2 (later timestamp)
     *     Option 2: Keep both - Application resolves
     *     Option 3: Merge - X=[1,2]
     * 
     * MECHANISMS FOR EVENTUAL CONSISTENCY:
     * 
     * 1. Read Repair
     *    - Fix inconsistencies during reads
     *    - Client reads from multiple replicas
     *    - Updates stale replicas
     *    
     *    Read(X) from 3 replicas:
     *    R1: X=5 (v2)
     *    R2: X=3 (v1) ← stale
     *    R3: X=5 (v2)
     *    
     *    Return X=5, update R2 to X=5
     * 
     * 2. Anti-Entropy (Gossip)
     *    - Background process compares replicas
     *    - Uses Merkle trees for efficient comparison
     *    - Repairs differences
     *    
     *    Periodic sync:
     *    Node A ↔ Node B: Compare hashes
     *    If different, sync data
     * 
     * 3. Hinted Handoff
     *    - Temporary storage during unavailability
     *    - Deliver when target recovers
     *    
     *    Node B unavailable:
     *    Write to Node A → Store hint for B
     *    Node B recovers → Deliver hint
     * 
     * CODE EXAMPLE:
     * 
     * class EventualConsistency {
     *     // Asynchronous replication
     *     void write(String key, Object value) {
     *         // Write to primary
     *         primary.write(key, value);
     *         
     *         // Replicate asynchronously
     *         CompletableFuture.runAsync(() -> {
     *             for (Replica r : replicas) {
     *                 r.write(key, value);
     *             }
     *         });
     *         
     *         // Return immediately
     *         return; // Don't wait for replication
     *     }
     *     
     *     // Read with possible staleness
     *     Object read(String key) {
     *         // Read from any replica (might be stale)
     *         return anyReplica.read(key);
     *     }
     * }
     * 
     * USE CASES:
     * ✓ DNS - Propagation takes time, but tolerable
     * ✓ Social media - Likes/followers count
     * ✓ Shopping cart - Can merge additions
     * ✓ Session state - Eventually synchronized
     * 
     * TRADE-OFFS:
     * Pros:
     * ✓ High availability
     * ✓ Low latency
     * ✓ Partition tolerant
     * ✓ Scalable
     * 
     * Cons:
     * ✗ Stale reads possible
     * ✗ Conflict resolution needed
     * ✗ Complicated application logic
     * ✗ No time bound on consistency
     * 
     * CONSISTENCY MODELS HIERARCHY:
     * 
     * Strongest → Weakest:
     * 1. Linearizability (appears atomic)
     * 2. Sequential consistency (program order)
     * 3. Causal consistency (causally ordered)
     * 4. Eventual consistency (converges eventually)
     * 5. Weak consistency (no guarantees)
     */
    
    /**
     * Q4: Explain Raft consensus algorithm.
     * 
     * ANSWER:
     * 
     * RAFT CONSENSUS:
     * Understandable consensus algorithm for replicated state machines.
     * 
     * KEY COMPONENTS:
     * 
     * 1. LEADER ELECTION
     *    - One leader, multiple followers
     *    - Leader handles all client requests
     *    - Election when leader fails
     *    
     *    States:
     *    - Follower: Passive, receives updates
     *    - Candidate: Requesting votes
     *    - Leader: Handles requests
     * 
     * 2. LOG REPLICATION
     *    - Leader appends to log
     *    - Replicates to followers
     *    - Commits when majority ack
     * 
     * 3. SAFETY
     *    - Election safety: At most 1 leader per term
     *    - Leader append-only: Never overwrites log
     *    - Log matching: Same index+term = same command
     *    - Leader completeness: Leader has all committed entries
     *    - State machine safety: Same log = same state
     * 
     * ELECTION PROCESS:
     * 
     * Step 1: Follower timeout (150-300ms randomized)
     *         Follower → Candidate
     * 
     * Step 2: Increment term, vote for self
     *         Term: 0 → 1
     *         Vote: Self
     * 
     * Step 3: Request votes from all nodes
     *         Send RequestVote RPC:
     *         {
     *           term: 1,
     *           candidateId: "A",
     *           lastLogIndex: 5,
     *           lastLogTerm: 0
     *         }
     * 
     * Step 4: Nodes vote if:
     *         - Haven't voted this term
     *         - Candidate's log ≥ up-to-date
     *         
     *         Vote granted if:
     *         candidateTerm > myTerm ||
     *         (candidateTerm == myTerm && 
     *          candidateLog >= myLog)
     * 
     * Step 5: Win with majority (n/2 + 1)
     *         3 nodes: Need 2 votes
     *         5 nodes: Need 3 votes
     *         
     *         Candidate → Leader
     * 
     * Step 6: Send heartbeats to maintain leadership
     *         Every 50ms: AppendEntries with empty entries
     * 
     * LOG REPLICATION:
     * 
     * Client Request:
     * 
     * 1. Client → Leader: SET x=5
     * 
     * 2. Leader appends to local log:
     *    Index | Term | Command
     *    ------|------|--------
     *    1     | 1    | SET x=1
     *    2     | 1    | SET x=3
     *    3     | 2    | SET x=5  ← New
     * 
     * 3. Leader → Followers: AppendEntries
     *    {
     *      term: 2,
     *      leaderId: "A",
     *      prevLogIndex: 2,
     *      prevLogTerm: 1,
     *      entries: [{term: 2, cmd: "SET x=5"}],
     *      leaderCommit: 2
     *    }
     * 
     * 4. Followers check:
     *    - prevLogIndex exists
     *    - prevLogTerm matches
     *    - Append if valid
     * 
     * 5. Followers → Leader: Success
     *    {term: 2, success: true}
     * 
     * 6. Leader receives majority acks (2 of 3)
     *    - Increment commitIndex to 3
     *    - Apply to state machine: x=5
     *    - Return success to client
     * 
     * 7. Next heartbeat tells followers to commit
     *    leaderCommit: 3
     * 
     * CODE EXAMPLE:
     * 
     * class RaftNode {
     *     enum State { FOLLOWER, CANDIDATE, LEADER }
     *     
     *     State state = FOLLOWER;
     *     int currentTerm = 0;
     *     String votedFor = null;
     *     List<LogEntry> log = new ArrayList<>();
     *     int commitIndex = 0;
     *     
     *     void startElection() {
     *         state = CANDIDATE;
     *         currentTerm++;
     *         votedFor = selfId;
     *         int votes = 1;
     *         
     *         for (Node peer : peers) {
     *             RequestVoteResponse resp = peer.requestVote(
     *                 currentTerm, selfId, 
     *                 log.size()-1, 
     *                 log.isEmpty() ? 0 : log.get(log.size()-1).term
     *             );
     *             
     *             if (resp.voteGranted) votes++;
     *         }
     *         
     *         if (votes > peers.size() / 2) {
     *             becomeLeader();
     *         }
     *     }
     *     
     *     void replicateLog(Command cmd) {
     *         LogEntry entry = new LogEntry(currentTerm, cmd);
     *         log.add(entry);
     *         
     *         int acks = 1; // Self
     *         for (Node peer : peers) {
     *             AppendEntriesResponse resp = peer.appendEntries(
     *                 currentTerm, selfId,
     *                 log.size()-2,
     *                 log.size() > 1 ? log.get(log.size()-2).term : 0,
     *                 Arrays.asList(entry),
     *                 commitIndex
     *             );
     *             
     *             if (resp.success) acks++;
     *         }
     *         
     *         if (acks > peers.size() / 2) {
     *             commitIndex = log.size() - 1;
     *             applyToStateMachine(entry.command);
     *         }
     *     }
     * }
     * 
     * FAULT TOLERANCE:
     * 
     * - Tolerates f failures in 2f+1 nodes
     * - 3 nodes: Tolerates 1 failure
     * - 5 nodes: Tolerates 2 failures
     * 
     * Network Partition:
     * [Leader A, Follower B] | [Follower C, Follower D, Follower E]
     * 
     * - Minority partition (A, B) cannot commit
     * - Majority partition (C, D, E) elects new leader
     * - When healed, old leader steps down
     * 
     * ADVANTAGES:
     * ✓ Understandable algorithm
     * ✓ Strong consistency (linearizable)
     * ✓ Leader-based (simplifies client interaction)
     * ✓ Proven safety properties
     * 
     * DISADVANTAGES:
     * ✗ Single leader bottleneck
     * ✗ Election adds latency
     * ✗ Not optimal for geo-distributed (leader may be far)
     * 
     * USED IN:
     * - etcd (Kubernetes coordination)
     * - Consul (service discovery)
     * - TiKV (distributed database)
     * - LogCabin (replicated state machine)
     * 
     * Complexity:
     * - Election: O(n) messages
     * - Replication: O(n) per log entry
     * - Storage: O(log_size)
     */
    
    /**
     * Q5: What is vector clocks and how do they work?
     * 
     * ANSWER:
     * 
     * VECTOR CLOCKS:
     * Data structure to track causality in distributed systems.
     * 
     * PURPOSE:
     * - Determine if events are causally related
     * - Detect concurrent events
     * - No need for synchronized physical clocks
     * 
     * STRUCTURE:
     * Vector clock = Map<NodeId, LogicalTime>
     * 
     * Example with 3 nodes:
     * Node A: {A:5, B:2, C:1}
     * Node B: {A:3, B:7, C:1}
     * 
     * RULES:
     * 
     * 1. INITIALIZATION
     *    Each node starts with {self: 0}
     *    
     *    Node A: {A:0}
     *    Node B: {B:0}
     *    Node C: {C:0}
     * 
     * 2. LOCAL EVENT
     *    Increment own counter
     *    
     *    Node A does local work:
     *    {A:0} → {A:1}
     * 
     * 3. SEND MESSAGE
     *    Increment own counter, attach clock
     *    
     *    Node A sends to B:
     *    {A:1} → {A:2}
     *    Message includes: {A:2}
     * 
     * 4. RECEIVE MESSAGE
     *    - Merge: Take max of each component
     *    - Increment own counter
     *    
     *    Node B receives {A:2}:
     *    Current: {B:3}
     *    Received: {A:2}
     *    Merge: {A:2, B:3}
     *    Increment: {A:2, B:4}
     * 
     * COMPARING VECTOR CLOCKS:
     * 
     * Clock1 happens-before Clock2 if:
     * - All components: Clock1[i] ≤ Clock2[i]
     * - At least one: Clock1[i] < Clock2[i]
     * 
     * Example:
     * VC1 = {A:2, B:1, C:0}
     * VC2 = {A:3, B:2, C:1}
     * 
     * VC1 < VC2? YES (2<3, 1<2, 0<1)
     * VC1 happens-before VC2 ✓
     * 
     * Clock1 concurrent with Clock2 if:
     * - Some: Clock1[i] < Clock2[i]
     * - Some: Clock1[i] > Clock2[i]
     * 
     * Example:
     * VC1 = {A:3, B:1}
     * VC2 = {A:1, B:3}
     * 
     * A:3>1 but B:1<3 → CONCURRENT
     * 
     * COMPLETE EXAMPLE:
     * 
     * Initial:
     * Node A: {A:0}
     * Node B: {B:0}
     * Node C: {C:0}
     * 
     * Event 1: A does local work
     * Node A: {A:1}
     * 
     * Event 2: B does local work
     * Node B: {B:1}
     * 
     * Event 3: A sends to C
     * Node A: {A:2}
     * Message: {A:2}
     * 
     * Event 4: C receives from A
     * Node C: merge({C:0}, {A:2}) = {A:2, C:0}
     * Node C: increment → {A:2, C:1}
     * 
     * Event 5: B sends to C
     * Node B: {B:2}
     * Message: {B:2}
     * 
     * Event 6: C receives from B
     * Node C: merge({A:2, C:1}, {B:2}) = {A:2, B:2, C:1}
     * Node C: increment → {A:2, B:2, C:2}
     * 
     * Causality Analysis:
     * - Event 1 happens-before Event 6 ({A:1} < {A:2, B:2, C:2})
     * - Event 2 happens-before Event 6 ({B:1} < {A:2, B:2, C:2})
     * - Event 1 concurrent Event 2 ({A:1} || {B:1})
     * 
     * CODE IMPLEMENTATION:
     * 
     * class VectorClock {
     *     String nodeId;
     *     Map<String, Integer> clock;
     *     
     *     VectorClock(String nodeId) {
     *         this.nodeId = nodeId;
     *         this.clock = new HashMap<>();
     *         clock.put(nodeId, 0);
     *     }
     *     
     *     void increment() {
     *         clock.put(nodeId, clock.get(nodeId) + 1);
     *     }
     *     
     *     void update(VectorClock other) {
     *         // Merge
     *         for (Map.Entry<String, Integer> e : other.clock.entrySet()) {
     *             clock.put(e.getKey(), 
     *                 Math.max(clock.getOrDefault(e.getKey(), 0), 
     *                          e.getValue()));
     *         }
     *         // Increment
     *         increment();
     *     }
     *     
     *     boolean happensBefore(VectorClock other) {
     *         boolean strictlyLess = false;
     *         
     *         for (String node : getAllNodes(other)) {
     *             int thisTime = clock.getOrDefault(node, 0);
     *             int otherTime = other.clock.getOrDefault(node, 0);
     *             
     *             if (thisTime > otherTime) return false;
     *             if (thisTime < otherTime) strictlyLess = true;
     *         }
     *         
     *         return strictlyLess;
     *     }
     *     
     *     boolean isConcurrent(VectorClock other) {
     *         return !happensBefore(other) && 
     *                !other.happensBefore(this);
     *     }
     * }
     * 
     * USE CASES:
     * 
     * 1. Conflict Detection
     *    - DynamoDB uses version vectors
     *    - Riak for sibling detection
     *    - Cassandra for timestamp ordering
     * 
     * 2. Causal Consistency
     *    - Ensure causal order of updates
     *    - Preserve dependencies
     * 
     * 3. Distributed Debugging
     *    - Track event causality
     *    - Reconstruct execution order
     * 
     * COMPARISON: Vector Clock vs Lamport Timestamp
     * 
     * Lamport Timestamp:
     * - Single integer per event
     * - Can determine happens-before
     * - Cannot detect concurrent events
     * - Space: O(1)
     * 
     * Vector Clock:
     * - Vector of integers
     * - Can determine happens-before
     * - Can detect concurrent events
     * - Space: O(n) where n = nodes
     * 
     * TRADE-OFFS:
     * 
     * Pros:
     * ✓ Accurate causality tracking
     * ✓ Detects concurrency
     * ✓ No clock synchronization needed
     * 
     * Cons:
     * ✗ Space grows with nodes: O(n)
     * ✗ Comparison is O(n)
     * ✗ Not suitable for large clusters
     * 
     * OPTIMIZATION - Dotted Version Vectors:
     * - Compact representation
     * - Prune obsolete entries
     * - Used in Riak 2.0+
     * 
     * Complexity:
     * - Increment: O(1)
     * - Update: O(n)
     * - Compare: O(n)
     * - Space: O(n) per clock
     */
    
    /**
     * ========================================================================
     * SECTION 2: CONSENSUS ALGORITHMS (Q6-Q30)
     * ========================================================================
     */
    
    /**
     * Q6: Compare Paxos vs Raft consensus algorithms.
     * 
     * ANSWER:
     * 
     * PAXOS:
     * - Theoretical foundation
     * - Complex to understand
     * - Separate roles: proposer, acceptor, learner
     * - Multi-decree requires additional machinery
     * 
     * RAFT:
     * - Designed for understandability
     * - Leader-based approach
     * - Combines leader election + log replication
     * - Built for practical implementation
     * 
     * DETAILED COMPARISON:
     * 
     * | Aspect | Paxos | Raft |
     * |--------|-------|------|
     * | Leader | Optional, multiple proposers | Mandatory, single leader |
     * | Log | Unordered slots | Ordered, append-only |
     * | Election | Continuous consensus | Explicit election phase |
     * | Safety | Complex proof | Simpler guarantees |
     * | Liveness | Can stall with dueling | Randomized timeouts |
     * | Understandability | Difficult | Easier |
     * | Performance | Slightly better | Comparable |
     * 
     * Paxos Phases:
     * 1. Prepare: Proposer asks for promises
     * 2. Promise: Acceptors promise not to accept lower
     * 3. Accept: Proposer sends value
     * 4. Accepted: Acceptors accept value
     * 
     * Raft Phases:
     * 1. Leader Election
     * 2. Log Replication
     * 3. Commitment
     * 
     * WHEN TO USE:
     * 
     * Use Paxos when:
     * - Need theoretical foundation
     * - Optimizing for performance
     * - Research/academic context
     * 
     * Use Raft when:
     * - Need practical implementation
     * - Team understanding important
     * - Production systems (etcd, Consul)
     * 
     * Both guarantee:
     * ✓ Safety (never wrong answer)
     * ✓ Liveness (eventually progress)
     * ✓ Fault tolerance (f in 2f+1)
     */
    
    /**
     * Q7: Explain two-phase commit (2PC) and its problems.
     * 
     * ANSWER:
     * 
     * TWO-PHASE COMMIT (2PC):
     * Protocol for atomic distributed transactions.
     * 
     * PARTICIPANTS:
     * - Coordinator: Orchestrates commit
     * - Participants: Execute transaction
     * 
     * PHASE 1: PREPARE (Voting)
     * 
     * 1. Coordinator → All participants: PREPARE
     * 2. Participants:
     *    - Lock resources
     *    - Write to undo/redo log
     *    - Reply: YES (can commit) or NO (abort)
     * 
     * PHASE 2: COMMIT (Decision)
     * 
     * If all voted YES:
     * 1. Coordinator → All: COMMIT
     * 2. Participants: Commit transaction, release locks
     * 3. Participants → Coordinator: ACK
     * 
     * If any voted NO:
     * 1. Coordinator → All: ABORT
     * 2. Participants: Rollback, release locks
     * 3. Participants → Coordinator: ACK
     * 
     * EXAMPLE:
     * 
     * Transaction: Transfer $100 from Bank A to Bank B
     * 
     * Prepare Phase:
     * Coordinator → Bank A: "Can you deduct $100?"
     * Bank A: Checks balance, locks account → "YES"
     * 
     * Coordinator → Bank B: "Can you add $100?"
     * Bank B: Locks account → "YES"
     * 
     * Commit Phase:
     * All said YES:
     * Coordinator → Bank A: "COMMIT"
     * Bank A: Deducts $100, unlocks → "ACK"
     * 
     * Coordinator → Bank B: "COMMIT"
     * Bank B: Adds $100, unlocks → "ACK"
     * 
     * PROBLEMS WITH 2PC:
     * 
     * 1. BLOCKING PROBLEM
     *    If coordinator crashes after PREPARE:
     *    - Participants stuck with locks
     *    - Cannot decide commit or abort
     *    - System blocked until coordinator recovers
     *    
     *    Scenario:
     *    Participants voted YES → Waiting for decision
     *    Coordinator crashes → Participants blocked
     *    
     *    Impact: Resources locked indefinitely
     * 
     * 2. SINGLE POINT OF FAILURE
     *    - Coordinator crash = system unavailable
     *    - Need coordinator recovery mechanism
     *    - State must be persistent
     * 
     * 3. PERFORMANCE
     *    - Multiple round trips
     *    - Synchronous protocol
     *    - Locks held during network delays
     *    
     *    Latency:
     *    RTT(prepare) + RTT(commit) = 2 × RTT
     *    Plus lock hold time
     * 
     * 4. UNCERTAIN STATE
     *    If participant crashes after voting YES:
     *    - Doesn't know final decision
     *    - Must ask coordinator after recovery
     *    - Until then, remains uncertain
     * 
     * HANDLING FAILURES:
     * 
     * Coordinator Failure:
     * - Elect new coordinator
     * - New coordinator queries participants
     * - If any committed → all must commit
     * - If any aborted → all must abort
     * - If all prepared → can decide
     * 
     * Participant Failure:
     * - Before voting: Abort transaction
     * - After voting YES: Must wait for coordinator
     * - After commit/abort: Done
     * 
     * Network Partition:
     * - Cannot distinguish crash from partition
     * - Timeout and abort (safe but may be unavailable)
     * 
     * CODE SKELETON:
     * 
     * class TwoPhaseCommit {
     *     enum State { INIT, PREPARING, COMMITTING, COMMITTED, ABORTED }
     *     
     *     boolean execute(List<Participant> participants) {
     *         // Phase 1: Prepare
     *         state = PREPARING;
     *         for (Participant p : participants) {
     *             Vote vote = p.prepare();
     *             if (vote == NO) {
     *                 abort(participants);
     *                 return false;
     *             }
     *         }
     *         
     *         // All YES - Phase 2: Commit
     *         state = COMMITTING;
     *         for (Participant p : participants) {
     *             p.commit();
     *         }
     *         
     *         state = COMMITTED;
     *         return true;
     *     }
     * }
     * 
     * IMPROVEMENTS:
     * 
     * 1. Three-Phase Commit (3PC)
     *    - Adds PRE-COMMIT phase
     *    - Non-blocking in some failure scenarios
     *    - Still has issues with network partitions
     * 
     * 2. Saga Pattern
     *    - Long-running transactions
     *    - Compensating transactions
     *    - Eventually consistent
     * 
     * 3. Consensus-based
     *    - Use Raft/Paxos for commit decision
     *    - More resilient but complex
     * 
     * WHEN TO USE:
     * 
     * Use 2PC when:
     * ✓ Need strong atomicity
     * ✓ Short transactions
     * ✓ Low probability of failures
     * ✓ Within single datacenter
     * 
     * Avoid 2PC when:
     * ✗ Long-running transactions
     * ✗ High latency network
     * ✗ Cross-datacenter
     * ✗ Need high availability
     * 
     * USED IN:
     * - Distributed databases (traditional)
     * - XA transactions (Java EE)
     * - Some NoSQL (limited support)
     * 
     * Complexity:
     * - Messages: O(n) where n = participants
     * - Latency: 2 × RTT minimum
     * - Blocking: Indefinite if coordinator fails
     */
    
    /**
     * ========================================================================
     * SECTION 3: DATA REPLICATION & CONSISTENCY (Q8-Q37)
     * ========================================================================
     */
    
    /**
     * Q8: Explain different replication strategies.
     * 
     * ANSWER:
     * 
     * 1. SINGLE-LEADER (Master-Slave) REPLICATION
     * 
     * Architecture:
     * Client → Leader → Followers
     * 
     * Write Path:
     * - All writes go to leader
     * - Leader replicates to followers
     * - Can be synchronous or asynchronous
     * 
     * Read Path:
     * - Read from leader (consistent)
     * - Read from follower (eventual consistency)
     * 
     * Pros:
     * ✓ Simple to understand
     * ✓ Consistent writes
     * ✓ Good read scalability
     * 
     * Cons:
     * ✗ Single point of failure (leader)
     * ✗ Failover complexity
     * ✗ Write bottleneck
     * 
     * Use cases: PostgreSQL, MySQL, MongoDB
     * 
     * 2. MULTI-LEADER (Master-Master) REPLICATION
     * 
     * Architecture:
     * Client → Leader 1 → Leader 2 → ...
     *   ↓         ↓           ↓
     * Followers Followers Followers
     * 
     * Write Path:
     * - Writes to any leader
     * - Leaders replicate to each other
     * - Conflict resolution needed
     * 
     * Conflicts:
     * - Concurrent writes to same key
     * - Resolution strategies:
     *   * Last-Write-Wins (timestamp)
     *   * Version vectors
     *   * Custom merge functions
     * 
     * Pros:
     * ✓ Better availability
     * ✓ Lower write latency (local leader)
     * ✓ Geo-distribution friendly
     * 
     * Cons:
     * ✗ Conflict resolution complex
     * ✗ Eventual consistency
     * ✗ Harder to reason about
     * 
     * Use cases: CouchDB, Cassandra (within DC)
     * 
     * 3. LEADERLESS (Peer-to-Peer) REPLICATION
     * 
     * Architecture:
     * Client → Any Node → All Nodes
     * 
     * Write Path:
     * - Write to W replicas (quorum)
     * - No single leader
     * - Concurrent writes possible
     * 
     * Read Path:
     * - Read from R replicas
     * - Resolve conflicts with version vectors
     * 
     * Quorum Configuration:
     * - N = total replicas
     * - W = write quorum
     * - R = read quorum
     * - R + W > N ensures consistency
     * 
     * Example: N=3, W=2, R=2
     * - Write to 2 of 3 nodes
     * - Read from 2 of 3 nodes
     * - Guaranteed overlap
     * 
     * Pros:
     * ✓ High availability
     * ✓ No single point of failure
     * ✓ Tolerates node failures
     * 
     * Cons:
     * ✗ Conflict resolution needed
     * ✗ Eventual consistency
     * ✗ Read repair overhead
     * 
     * Use cases: Cassandra, Riak, DynamoDB
     * 
     * COMPARISON TABLE:
     * 
     * | Feature | Single-Leader | Multi-Leader | Leaderless |
     * |---------|--------------|--------------|------------|
     * | Writes | Serialized | Concurrent | Concurrent |
     * | Consistency | Strong | Eventual | Tunable |
     * | Availability | Medium | High | Very High |
     * | Conflicts | None | Yes | Yes |
     * | Complexity | Low | High | Medium |
     * | Failover | Required | None | None |
     * 
     * SYNCHRONOUS VS ASYNCHRONOUS REPLICATION:
     * 
     * Synchronous:
     * - Wait for replica acknowledgment
     * - Guarantees durability
     * - Higher latency
     * - Lower availability (if replica down)
     * 
     * Asynchronous:
     * - Don't wait for replicas
     * - Lower latency
     * - Higher availability
     * - Risk of data loss
     * 
     * Semi-Synchronous:
     * - Wait for one replica
     * - Balance durability and performance
     * 
     * CHOOSING REPLICATION STRATEGY:
     * 
     * Choose Single-Leader when:
     * ✓ Strong consistency required
     * ✓ Simple operational model
     * ✓ Read-heavy workload
     * ✓ Single datacenter
     * 
     * Choose Multi-Leader when:
     * ✓ Multi-datacenter deployment
     * ✓ Need low write latency everywhere
     * ✓ Can handle conflicts
     * ✓ Offline operation required
     * 
     * Choose Leaderless when:
     * ✓ High availability critical
     * ✓ Tolerate eventual consistency
     * ✓ Write-heavy workload
     * ✓ Need partition tolerance
     */
    
    /**
     * ========================================================================
     * REMAINING QUESTIONS OUTLINE (Q9-Q200+)
     * ========================================================================
     */
    
    /**
     * SECTION 3: DATA REPLICATION & CONSISTENCY (continued)
     * 
     * Q9: What is read-repair and anti-entropy?
     * Q10: Explain hinted handoff mechanism.
     * Q11: How does DynamoDB achieve consistency?
     * Q12: What are CRDTs and how do they work?
     * Q13: Compare strong consistency vs eventual consistency.
     * Q14: Explain causal consistency with examples.
     * Q15: What is linearizability?
     * Q16: How does snapshot isolation work?
     * Q17: Explain MVCC (Multi-Version Concurrency Control).
     * Q18: What are the consistency levels in Cassandra?
     * Q19: How to handle write conflicts?
     * Q20: Explain Last-Write-Wins conflict resolution.
     * Q21: What is a Merkle tree and its use in replication?
     * Q22: How does gossip protocol work?
     * Q23: Explain quorum reads and writes.
     * Q24: What is sloppy quorum?
     * Q25: How to implement read-your-writes consistency?
     * Q26: What is monotonic reads consistency?
     * Q27: Explain consistent prefix reads.
     * Q28: How does chain replication work?
     * Q29: What is WAL (Write-Ahead Log)?
     * Q30: Explain log shipping replication.
     * Q31: How to handle replication lag?
     * Q32: What is split-brain problem?
     * Q33: How to prevent split-brain?
     * Q34: Explain fencing tokens.
     * Q35: What is epoch number in distributed systems?
     * Q36: How does session consistency work?
     * Q37: Explain bounded staleness consistency.
     * 
     * SECTION 4: DISTRIBUTED TRANSACTIONS (Q38-Q62)
     * 
     * Q38: Compare 2PC vs Saga pattern.
     * Q39: What is three-phase commit?
     * Q40: Explain optimistic concurrency control.
     * Q41: What is pessimistic locking?
     * Q42: How does distributed deadlock detection work?
     * Q43: Explain serializable isolation level.
     * Q44: What is write skew anomaly?
     * Q45: How to implement distributed transactions in microservices?
     * Q46: Explain compensating transactions.
     * Q47: What is orchestration vs choreography in Saga?
     * Q48: How does Spanner achieve external consistency?
     * Q49: What is TrueTime API?
     * Q50: Explain timestamp ordering protocol.
     * Q51: What is predicate locking?
     * Q52: How to handle lost updates?
     * Q53: Explain phantom reads problem.
     * Q54: What is cursor stability?
     * Q55: How does Calvin database work?
     * Q56: Explain deterministic execution.
     * Q57: What is distributed snapshot algorithm?
     * Q58: How does Chandy-Lamport algorithm work?
     * Q59: Explain transaction chopping.
     * Q60: What is escrow transactions?
     * Q61: How to implement idempotent operations?
     * Q62: Explain exactly-once semantics.
     * 
     * SECTION 5: CAP THEOREM & TRADE-OFFS (Q63-Q82)
     * 
     * Q63: Prove CAP theorem with example.
     * Q64: What is PACELC theorem?
     * Q65: How to choose between CP and AP?
     * Q66: Explain consistency-availability spectrum.
     * Q67: What is partition tolerance really?
     * Q68: Can you have CA system?
     * Q69: How does Amazon Aurora handle CAP?
     * Q70: Explain Google Spanner's approach to CAP.
     * Q71: What is the FLP impossibility result?
     * Q72: How to tune consistency vs performance?
     * Q73: Explain tunable consistency in Cassandra.
     * Q74: What is session-based consistency?
     * Q75: How to achieve strong consistency in AP system?
     * Q76: Explain consensus with crash failures.
     * Q77: What is Byzantine fault tolerance?
     * Q78: How does PBFT work?
     * Q79: Explain blockchain consensus.
     * Q80: What is Proof of Work?
     * Q81: Compare PoW vs PoS vs PBFT.
     * Q82: How to handle network partitions gracefully?
     * 
     * SECTION 6: FAILURE DETECTION & RECOVERY (Q83-Q102)
     * 
     * Q83: How does heartbeat-based failure detection work?
     * Q84: What is phi accrual failure detector?
     * Q85: Explain SWIM protocol for failure detection.
     * Q86: How to detect Byzantine failures?
     * Q87: What is failure detector completeness?
     * Q88: Explain failure detector accuracy.
     * Q89: How to implement crash recovery?
     * Q90: What is checkpointing in distributed systems?
     * Q91: Explain message logging for recovery.
     * Q92: How does coordinated checkpointing work?
     * Q93: What is independent checkpointing?
     * Q94: Explain rollback recovery.
     * Q95: How to handle cascading rollbacks?
     * Q96: What is recovery point objective (RPO)?
     * Q97: Explain recovery time objective (RTO).
     * Q98: How to implement circuit breaker pattern?
     * Q99: What is bulkhead pattern?
     * Q100: Explain retry with exponential backoff.
     * Q101: How to implement timeout strategies?
     * Q102: What is graceful degradation?
     * 
     * SECTION 7: DISTRIBUTED COORDINATION (Q103-Q122)
     * 
     * Q103: How does ZooKeeper work?
     * Q104: What is distributed lock implementation?
     * Q105: Explain leader election algorithms.
     * Q106: How does bully algorithm work?
     * Q107: What is ring algorithm for election?
     * Q108: Explain distributed mutex.
     * Q109: How to implement distributed barrier?
     * Q110: What is distributed semaphore?
     * Q111: Explain distributed queue.
     * Q112: How does distributed rate limiting work?
     * Q113: What is the Chubby lock service?
     * Q114: Explain etcd architecture.
     * Q115: How to implement service discovery?
     * Q116: What is consul and how it works?
     * Q117: Explain configuration management in distributed systems.
     * Q118: How to handle distributed events?
     * Q119: What is event sourcing?
     * Q120: Explain CQRS pattern.
     * Q121: How to implement distributed workflows?
     * Q122: What is workflow orchestration vs choreography?
     * 
     * SECTION 8: ADVANCED TOPICS (Q123-Q200+)
     * 
     * Q123: Explain consistent hashing with bounded load.
     * Q124: How does rendezvous hashing work?
     * Q125: What is jump consistent hashing?
     * Q126: Explain data partitioning strategies.
     * Q127: How to handle hot partitions?
     * Q128: What is dynamic repartitioning?
     * Q129: Explain range vs hash partitioning.
     * Q130: How does secondary indexing work in distributed DBs?
     * Q131: What is global vs local secondary index?
     * Q132: Explain distributed joins.
     * Q133: How to implement distributed aggregation?
     * Q134: What is MapReduce paradigm?
     * Q135: Explain distributed sorting.
     * Q136: How does distributed search work (Elasticsearch)?
     * Q137: What is inverted index in distributed context?
     * Q138: Explain distributed graph processing.
     * Q139: How does Pregel model work?
     * Q140: What is bulk synchronous parallel?
     * Q141-Q200: [Additional advanced topics including:
     *   - Distributed machine learning
     *   - Federated learning
     *   - Distributed tracing (Zipkin, Jaeger)
     *   - Service mesh (Istio, Linkerd)
     *   - Serverless architectures
     *   - Edge computing
     *   - Multi-region deployments
     *   - Cross-datacenter replication
     *   - Geo-partitioning
     *   - Time-series databases
     *   - Stream processing systems
     *   - Lambda architecture
     *   - Kappa architecture
     *   - Microservices patterns
     *   - API Gateway patterns
     *   - BFF (Backend for Frontend)
     *   - And many more...]
     */
    
    /**
     * ========================================================================
     * INTERVIEW PREPARATION TIPS
     * ========================================================================
     * 
     * 1. UNDERSTAND CORE CONCEPTS
     *    - CAP theorem and trade-offs
     *    - Consistency models hierarchy
     *    - Consensus basics (Raft/Paxos)
     *    - Replication strategies
     * 
     * 2. PRACTICE SYSTEM DESIGN
     *    - Design distributed cache
     *    - Design message queue
     *    - Design rate limiter
     *    - Design URL shortener
     *    - Design distributed database
     * 
     * 3. KNOW REAL SYSTEMS
     *    - DynamoDB (quorum replication)
     *    - Cassandra (leaderless)
     *    - MongoDB (single-leader)
     *    - etcd/Consul (Raft)
     *    - Kafka (log-based)
     * 
     * 4. THINK ABOUT TRADE-OFFS
     *    - Consistency vs Availability
     *    - Latency vs Throughput
     *    - Simplicity vs Performance
     *    - Cost vs Resilience
     * 
     * 5. FAILURE SCENARIOS
     *    - What if coordinator crashes?
     *    - What if network partitions?
     *    - How to detect failures?
     *    - How to recover?
     * 
     * 6. COMPLEXITY ANALYSIS
     *    - Time complexity of algorithms
     *    - Space complexity
     *    - Message complexity
     *    - Network rounds
     * 
     * 7. COMMON PITFALLS
     *    - Assuming synchronized clocks
     *    - Ignoring network failures
     *    - Not handling partial failures
     *    - Overlooking split-brain
     *    - Forgetting about eventual consistency
     * 
     * Remember: Distributed systems are about trade-offs.
     * There's no perfect solution, only appropriate choices.
     */
    
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 28: DISTRIBUTED SYSTEMS - INTERVIEW Q&A");
        System.out.println("=".repeat(80));
        System.out.println("\nTotal Questions: 200+");
        System.out.println("Detailed Answers: 8 comprehensive questions");
        System.out.println("Outlined Topics: 192+ additional questions");
        System.out.println("\nCategories:");
        System.out.println("1. Distributed Systems Fundamentals (30 questions)");
        System.out.println("2. Consensus Algorithms (25 questions)");
        System.out.println("3. Data Replication & Consistency (30 questions)");
        System.out.println("4. Distributed Transactions (25 questions)");
        System.out.println("5. CAP Theorem & Trade-offs (20 questions)");
        System.out.println("6. Failure Detection & Recovery (20 questions)");
        System.out.println("7. Distributed Coordination (20 questions)");
        System.out.println("8. Advanced Topics (30+ questions)");
        System.out.println("\n" + "=".repeat(80));
        System.out.println("Study systematically. Master fundamentals first!");
        System.out.println("=".repeat(80));
    }
}
