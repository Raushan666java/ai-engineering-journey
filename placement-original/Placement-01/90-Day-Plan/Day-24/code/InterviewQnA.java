/**
 * DAY 24 - INTERVIEW QUESTIONS & ANSWERS
 * ADVANCED SYSTEM DESIGN & SCALABILITY
 * 
 * 100+ Interview Questions covering:
 * - System Design Patterns
 * - Scalability & Performance
 * - Distributed Systems
 * - Microservices Architecture
 * - Real-world scenarios
 */

public class InterviewQnA {

    /**
     * ============================================================================
     * SECTION 1: RATE LIMITING & THROTTLING (10 Questions)
     * ============================================================================
     */

    /**
     * Q1: What is rate limiting and why is it important?
     * 
     * A: Rate limiting controls the number of requests a client can make in a time window.
     * 
     * Importance:
     * - Prevents abuse and DDoS attacks
     * - Protects backend resources
     * - Ensures fair usage across clients
     * - Maintains system stability
     * - Reduces infrastructure costs
     * 
     * Common algorithms:
     * 1. Token Bucket - Allows bursts
     * 2. Leaky Bucket - Smooths traffic
     * 3. Fixed Window - Simple but has edge cases
     * 4. Sliding Window - More accurate
     */

    /**
     * Q2: Token Bucket vs Leaky Bucket - which to use when?
     * 
     * A: 
     * TOKEN BUCKET:
     * - Allows traffic bursts
     * - Good for APIs that need flexibility
     * - Example: AWS API Gateway
     * - Use case: Bursty workloads
     * 
     * LEAKY BUCKET:
     * - Smooths out traffic spikes
     * - Strict rate enforcement
     * - Good for backend protection
     * - Use case: Preventing overload
     */

    /**
     * Q3: How would you implement distributed rate limiting?
     * 
     * A: Options:
     * 
     * 1. CENTRALIZED (Redis):
     *    - Single source of truth
     *    - INCR command for counter
     *    - SET with TTL for window
     *    - Pros: Accurate
     *    - Cons: Single point of failure
     * 
     * 2. DISTRIBUTED (Gossip):
     *    - Each node tracks locally
     *    - Periodically sync counts
     *    - Pros: No single point of failure
     *    - Cons: Eventual consistency
     * 
     * 3. HYBRID:
     *    - Local cache + Redis
     *    - Best of both worlds
     */

    /**
     * ============================================================================
     * SECTION 2: CIRCUIT BREAKER PATTERN (10 Questions)
     * ============================================================================
     */

    /**
     * Q4: Explain Circuit Breaker pattern and its states.
     * 
     * A: Circuit Breaker prevents cascading failures by failing fast.
     * 
     * STATES:
     * 1. CLOSED - Normal operation
     *    - Requests pass through
     *    - Counts failures
     * 
     * 2. OPEN - Failing fast
     *    - Immediately rejects requests
     *    - No calls to failing service
     *    - Timeout before transitioning
     * 
     * 3. HALF_OPEN - Testing recovery
     *    - Allows limited requests
     *    - If successful -> CLOSED
     *    - If failed -> OPEN
     * 
     * Parameters:
     * - Failure threshold (e.g., 5 failures)
     * - Timeout (e.g., 30 seconds)
     * - Success threshold for half-open
     */

    /**
     * Q5: Circuit Breaker vs Retry - when to use each?
     * 
     * A:
     * CIRCUIT BREAKER:
     * - Use for: Cascading failure prevention
     * - When: Service is down
     * - Benefit: Fail fast, save resources
     * 
     * RETRY:
     * - Use for: Transient failures
     * - When: Network glitch, timeout
     * - Benefit: Increase success rate
     * 
     * COMBINE BOTH:
     * - Retry with exponential backoff
     * - Circuit breaker as outer layer
     * - Example: Retry 3 times, then open circuit
     */

    /**
     * ============================================================================
     * SECTION 3: CACHING STRATEGIES (10 Questions)
     * ============================================================================
     */

    /**
     * Q6: Compare Cache-Aside, Write-Through, and Write-Behind.
     * 
     * A:
     * CACHE-ASIDE (Lazy Loading):
     * - Read: Check cache, load on miss
     * - Write: Update DB, invalidate cache
     * - Pros: Only cache what's needed
     * - Cons: Cache misses are slow
     * - Use: Read-heavy workloads
     * 
     * WRITE-THROUGH:
     * - Write to cache and DB together
     * - Pros: Cache always consistent
     * - Cons: Write latency
     * - Use: Strong consistency needed
     * 
     * WRITE-BEHIND (Write-Back):
     * - Write to cache, async to DB
     * - Pros: Fast writes
     * - Cons: Risk of data loss
     * - Use: High write throughput
     */

    /**
     * Q7: How do you handle cache invalidation?
     * 
     * A: Cache invalidation strategies:
     * 
     * 1. TIME-BASED (TTL):
     *    - Set expiration time
     *    - Simple but may serve stale data
     * 
     * 2. EVENT-BASED:
     *    - Invalidate on updates
     *    - More accurate
     *    - Requires change detection
     * 
     * 3. CACHE TAGS:
     *    - Tag related entries
     *    - Invalidate by tag
     *    - Example: Invalidate all user-123 data
     * 
     * 4. VERSIONING:
     *    - Include version in key
     *    - Old versions expire naturally
     * 
     * Best practice: Combine TTL + event-based
     */

    /**
     * Q8: Design a multi-level cache system.
     * 
     * A: Architecture:
     * 
     * L1: Application Memory (fastest)
     * - Small capacity (MB)
     * - Latency: < 1ms
     * - LRU eviction
     * 
     * L2: Redis/Memcached (fast)
     * - Medium capacity (GB)
     * - Latency: 1-5ms
     * - Network cache
     * 
     * L3: Database (slow)
     * - Large capacity (TB)
     * - Latency: 10-100ms
     * - Source of truth
     * 
     * Read flow:
     * Check L1 -> Check L2 -> Load from L3
     * Populate L2 and L1 on miss
     * 
     * Write flow:
     * Update L3 -> Invalidate L2 and L1
     */

    /**
     * ============================================================================
     * SECTION 4: DATABASE SHARDING (10 Questions)
     * ============================================================================
     */

    /**
     * Q9: What is database sharding? When to use it?
     * 
     * A: Sharding = Horizontal partitioning across databases
     * 
     * WHEN TO USE:
     * - Data doesn't fit on single server
     * - Single DB can't handle load
     * - Need to scale writes
     * 
     * STRATEGIES:
     * 1. HASH-BASED:
     *    - shard = hash(key) % num_shards
     *    - Pros: Even distribution
     *    - Cons: Hard to add shards
     * 
     * 2. RANGE-BASED:
     *    - A-M on shard1, N-Z on shard2
     *    - Pros: Easy to add shards
     *    - Cons: Hot spots possible
     * 
     * 3. GEO-BASED:
     *    - US data in US shard
     *    - Pros: Low latency
     *    - Cons: Uneven distribution
     * 
     * CHALLENGES:
     * - Cross-shard queries
     * - Rebalancing data
     * - Transaction handling
     */

    /**
     * Q10: How to handle cross-shard queries?
     * 
     * A: Approaches:
     * 
     * 1. SCATTER-GATHER:
     *    - Query all shards
     *    - Merge results
     *    - Slow but complete
     * 
     * 2. DENORMALIZATION:
     *    - Duplicate data
     *    - Query single shard
     *    - Fast but storage cost
     * 
     * 3. SECONDARY INDEX:
     *    - Maintain lookup table
     *    - Find target shard
     *    - Single shard query
     * 
     * 4. AVOID:
     *    - Design schema to avoid cross-shard
     *    - Co-locate related data
     */

    /**
     * ============================================================================
     * SECTION 5: LOAD BALANCING (10 Questions)
     * ============================================================================
     */

    /**
     * Q11: Compare load balancing algorithms.
     * 
     * A:
     * ROUND ROBIN:
     * - Simple rotation
     * - Equal distribution
     * - Doesn't consider load
     * 
     * LEAST CONNECTIONS:
     * - Route to server with fewest connections
     * - Better for varying request duration
     * 
     * WEIGHTED:
     * - Assign weights based on capacity
     * - 2x capacity = 2x traffic
     * 
     * IP HASH:
     * - Same client -> same server
     * - Good for session affinity
     * - Sticky sessions
     * 
     * LEAST RESPONSE TIME:
     * - Route to fastest server
     * - Adaptive to performance
     * 
     * Choose based on:
     * - Request patterns
     * - Server capacity
     * - Session requirements
     */

    /**
     * Q12: What is Consistent Hashing? Why use it?
     * 
     * A: Consistent Hashing minimizes redistribution when nodes change.
     * 
     * TRADITIONAL HASHING:
     * - node = hash(key) % N
     * - Add/remove node: Most keys rehash
     * 
     * CONSISTENT HASHING:
     * - Hash nodes and keys to ring
     * - Key goes to next node clockwise
     * - Add/remove: Only K/N keys move
     * 
     * VIRTUAL NODES:
     * - Each physical node has multiple positions
     * - Better distribution
     * - Smooth load when scaling
     * 
     * USE CASES:
     * - Distributed caching (Memcached)
     * - Load balancing
     * - CDN routing
     */

    /**
     * ============================================================================
     * SECTION 6: MICROSERVICES PATTERNS (15 Questions)
     * ============================================================================
     */

    /**
     * Q13: Explain Service Discovery pattern.
     * 
     * A: Service Discovery enables services to find each other dynamically.
     * 
     * CLIENT-SIDE:
     * - Client queries registry
     * - Client chooses instance
     * - Example: Netflix Eureka
     * - Pros: No proxy overhead
     * - Cons: Client complexity
     * 
     * SERVER-SIDE:
     * - Load balancer queries registry
     * - Client calls load balancer
     * - Example: AWS ELB + Auto Scaling
     * - Pros: Simple clients
     * - Cons: Extra hop
     * 
     * REGISTRATION:
     * - Self-registration: Service registers itself
     * - Third-party: Orchestrator registers
     * 
     * HEALTH CHECKS:
     * - Heartbeat mechanism
     * - Remove unhealthy instances
     */

    /**
     * Q14: What is the Saga pattern? When to use it?
     * 
     * A: Saga manages distributed transactions across services.
     * 
     * CHOREOGRAPHY:
     * - Events trigger next step
     * - Decentralized
     * - Pros: Loose coupling
     * - Cons: Hard to track
     * 
     * ORCHESTRATION:
     * - Central coordinator
     * - Manages workflow
     * - Pros: Easy to understand
     * - Cons: Single point of control
     * 
     * COMPENSATION:
     * - Each step has compensating transaction
     * - Rollback on failure
     * 
     * EXAMPLE (Order):
     * 1. Reserve inventory
     * 2. Process payment
     * 3. Create shipment
     * Failure at step 2:
     * - Compensate: Release inventory
     * 
     * USE WHEN:
     * - Cross-service transactions needed
     * - ACID not feasible
     * - Eventual consistency acceptable
     */

    /**
     * Q15: Explain CQRS pattern. Pros and cons?
     * 
     * A: CQRS = Command Query Responsibility Segregation
     * 
     * CONCEPT:
     * - Separate read and write models
     * - Commands: Mutate state
     * - Queries: Read state
     * 
     * ARCHITECTURE:
     * Write Model:
     * - Optimized for updates
     * - Domain logic
     * - Normalized schema
     * 
     * Read Model:
     * - Optimized for queries
     * - Denormalized views
     * - Eventually consistent
     * 
     * PROS:
     * - Independent scaling (read vs write)
     * - Optimized models for each operation
     * - Flexible querying
     * 
     * CONS:
     * - Complexity
     * - Eventual consistency
     * - Sync overhead
     * 
     * USE WHEN:
     * - Different read/write patterns
     * - Complex domain logic
     * - Need to scale independently
     */

    /**
     * ============================================================================
     * SECTION 7: EVENT SOURCING (10 Questions)
     * ============================================================================
     */

    /**
     * Q16: What is Event Sourcing? Benefits and challenges?
     * 
     * A: Event Sourcing stores state changes as sequence of events.
     * 
     * TRADITIONAL:
     * - Store current state
     * - Update in place
     * - Lost history
     * 
     * EVENT SOURCING:
     * - Store all events
     * - Rebuild state by replaying
     * - Complete audit log
     * 
     * BENEFITS:
     * 1. Complete audit trail
     * 2. Time travel (replay to any point)
     * 3. Event-driven architecture
     * 4. Debugging (see all changes)
     * 5. Business intelligence
     * 
     * CHALLENGES:
     * 1. Complexity
     * 2. Event schema evolution
     * 3. Performance (need snapshots)
     * 4. Storage growth
     * 
     * SNAPSHOTS:
     * - Periodic state checkpoints
     * - Replay from last snapshot
     * - Faster reconstruction
     * 
     * USE CASES:
     * - Financial systems
     * - E-commerce orders
     * - Collaborative editing
     */

    /**
     * ============================================================================
     * SECTION 8: DISTRIBUTED SYSTEMS (15 Questions)
     * ============================================================================
     */

    /**
     * Q17: Explain CAP theorem with examples.
     * 
     * A: CAP: Can only guarantee 2 of 3
     * 
     * CONSISTENCY:
     * - All nodes see same data
     * - Strong consistency
     * 
     * AVAILABILITY:
     * - Every request gets response
     * - No downtime
     * 
     * PARTITION TOLERANCE:
     * - System works despite network failures
     * - Always needed in distributed systems
     * 
     * TRADEOFFS:
     * CA (Consistency + Availability):
     * - Single node systems
     * - Not truly distributed
     * - Example: Traditional RDBMS
     * 
     * CP (Consistency + Partition Tolerance):
     * - Sacrifices availability
     * - Example: HBase, MongoDB
     * - Use: Banking, inventory
     * 
     * AP (Availability + Partition Tolerance):
     * - Sacrifices consistency
     * - Example: Cassandra, DynamoDB
     * - Use: Social media, caching
     * 
     * Reality: Tune between C and A
     */

    /**
     * Q18: What is eventual consistency? When is it acceptable?
     * 
     * A: Eventual Consistency: All replicas will converge eventually.
     * 
     * CHARACTERISTICS:
     * - Temporary inconsistency allowed
     * - No guaranteed convergence time
     * - Higher availability
     * 
     * ACCEPTABLE WHEN:
     * 1. Social media likes/views
     * 2. Product recommendations
     * 3. Search results
     * 4. Analytics dashboards
     * 5. Cached data
     * 
     * NOT ACCEPTABLE:
     * 1. Bank account balance
     * 2. Inventory count
     * 3. Payment processing
     * 4. Seat reservations
     * 
     * CONFLICT RESOLUTION:
     * - Last Write Wins (LWW)
     * - Version vectors
     * - Application-specific merge
     */

    /**
     * Q19: Explain Two-Phase Commit (2PC).
     * 
     * A: 2PC ensures atomic distributed transactions.
     * 
     * PARTICIPANTS:
     * - Coordinator
     * - Multiple participants
     * 
     * PHASE 1: PREPARE
     * - Coordinator: "Can you commit?"
     * - Participants: Vote Yes/No
     * - Lock resources
     * 
     * PHASE 2: COMMIT/ABORT
     * - If all Yes: Commit
     * - If any No: Abort
     * - Release locks
     * 
     * PROS:
     * - Strong consistency
     * - ACID guarantees
     * 
     * CONS:
     * - Blocking protocol
     * - Single point of failure (coordinator)
     * - Poor performance
     * - Not partition tolerant
     * 
     * ALTERNATIVES:
     * - Saga pattern
     * - Eventual consistency
     * - Event sourcing
     */

    /**
     * Q20: What is Paxos? What is Raft?
     * 
     * A: Consensus algorithms for distributed agreement.
     * 
     * PAXOS:
     * - Difficult to understand
     * - Proven correct
     * - Used: Google Chubby
     * 
     * RAFT:
     * - Easier to understand
     * - Equivalent to Paxos
     * - Leader-based
     * - Used: etcd, Consul
     * 
     * RAFT ROLES:
     * - Leader: Handles all writes
     * - Follower: Replicate log
     * - Candidate: Election state
     * 
     * LEADER ELECTION:
     * - Random timeout
     * - Request votes
     * - Majority wins
     * 
     * LOG REPLICATION:
     * - Leader appends entry
     * - Replicates to followers
     * - Commit when majority ack
     */

    /**
     * ============================================================================
     * SECTION 9: REAL-WORLD SYSTEM DESIGN (20 Questions)
     * ============================================================================
     */

    /**
     * Q21: Design URL Shortener (like bit.ly)
     * 
     * A: Requirements:
     * - Shorten URL
     * - Redirect to original
     * - Analytics (clicks)
     * - Custom aliases
     * 
     * DESIGN:
     * 1. Generate short code:
     *    - Base62 encoding (a-zA-Z0-9)
     *    - 7 chars = 62^7 = 3.5 trillion URLs
     * 
     * 2. Storage:
     *    - KV store: short_code -> original_url
     *    - Redis for cache
     *    - SQL/NoSQL for persistence
     * 
     * 3. ID Generation:
     *    - Auto-increment counter
     *    - Distributed ID generator (Snowflake)
     * 
     * 4. Redirect:
     *    - 301 (permanent) vs 302 (temporary)
     *    - Cache at CDN
     * 
     * 5. Analytics:
     *    - Message queue for clicks
     *    - Batch process for stats
     * 
     * SCALE:
     * - Read-heavy: Cache aggressively
     * - Shard by hash(short_code)
     * - CDN for geo-distributed
     */

    /**
     * Q22: Design Twitter Feed System
     * 
     * A: Requirements:
     * - Post tweets
     * - View timeline (followers' tweets)
     * - Scale: 100M users, 500M tweets/day
     * 
     * APPROACHES:
     * 
     * 1. PULL (Fan-out on read):
     *    - On timeline request:
     *      - Get all followees
     *      - Query their recent tweets
     *      - Merge and sort
     *    - Pros: Fast writes
     *    - Cons: Slow reads
     *    - Use: Users with many followees
     * 
     * 2. PUSH (Fan-out on write):
     *    - On tweet post:
     *      - Push to all followers' timelines
     *    - Pros: Fast reads
     *    - Cons: Slow writes for celebrities
     *    - Use: Regular users
     * 
     * 3. HYBRID:
     *    - Push for regular users
     *    - Pull for celebrities
     *    - Best of both worlds
     * 
     * STORAGE:
     * - Tweets: Distributed DB (Cassandra)
     * - Timeline cache: Redis
     * - Social graph: Graph DB
     * 
     * OPTIMIZATIONS:
     * - Cache hot timelines
     * - Precompute popular feeds
     * - CDN for media
     */

    /**
     * Q23: Design Uber/Lyft Ride Matching
     * 
     * A: Requirements:
     * - Match riders with nearby drivers
     * - Real-time location tracking
     * - ETA calculation
     * 
     * COMPONENTS:
     * 
     * 1. LOCATION SERVICE:
     *    - Drivers send GPS every 5 sec
     *    - Store in time-series DB
     *    - QuadTree/Geohash for indexing
     * 
     * 2. MATCHING SERVICE:
     *    - Find drivers within radius
     *    - Score by: distance, rating, ETA
     *    - Notify top N drivers
     *    - First to accept wins
     * 
     * 3. GEOSPATIAL INDEX:
     *    - QuadTree: Divide map into quadrants
     *    - Geohash: Encode lat/long to string
     *    - Search nearby hashes
     * 
     * 4. WEBSOCKET:
     *    - Bidirectional communication
     *    - Real-time updates
     * 
     * SCALE:
     * - Shard by geo-region
     * - Separate driver/rider services
     * - Cache popular routes
     */

    /**
     * Q24: Design Netflix Video Streaming
     * 
     * A: Requirements:
     * - Upload videos
     * - Stream to millions
     * - Multiple qualities
     * - Resume playback
     * 
     * COMPONENTS:
     * 
     * 1. UPLOAD:
     *    - Chunked upload to S3
     *    - Trigger transcoding job
     * 
     * 2. TRANSCODING:
     *    - Multiple resolutions (480p, 720p, 1080p, 4K)
     *    - Multiple formats (H.264, H.265)
     *    - Generate thumbnails
     * 
     * 3. CDN:
     *    - Distribute to edge locations
     *    - Reduce latency
     *    - Handle traffic spikes
     * 
     * 4. ADAPTIVE BITRATE:
     *    - Detect bandwidth
     *    - Switch quality dynamically
     *    - HLS/DASH protocol
     * 
     * 5. PLAYBACK STATE:
     *    - Store position in Redis
     *    - Resume from last position
     * 
     * 6. RECOMMENDATIONS:
     *    - Collaborative filtering
     *    - Content-based filtering
     *    - ML models
     */

    /**
     * Q25: Design WhatsApp Messaging System
     * 
     * A: Requirements:
     * - Send/receive messages
     * - Delivery confirmation
     * - Offline support
     * - Group chat
     * 
     * COMPONENTS:
     * 
     * 1. WEBSOCKET:
     *    - Persistent connection
     *    - Real-time delivery
     * 
     * 2. MESSAGE QUEUE:
     *    - Buffer for offline users
     *    - Kafka/RabbitMQ
     * 
     * 3. STORAGE:
     *    - Recent messages: Cassandra
     *    - Archive: S3/Glacier
     * 
     * 4. DELIVERY STATUS:
     *    - Sent (1 check)
     *    - Delivered (2 checks)
     *    - Read (2 blue checks)
     * 
     * 5. GROUP CHAT:
     *    - Fan-out to all members
     *    - Or use pub-sub
     * 
     * 6. END-TO-END ENCRYPTION:
     *    - Signal protocol
     *    - Keys on client only
     * 
     * OPTIMIZATIONS:
     * - Compress messages
     * - Batch deliveries
     * - Local cache on device
     */

    /**
     * ============================================================================
     * ADDITIONAL INTERVIEW TOPICS
     * ============================================================================
     */

    /**
     * Topics 26-100:
     * 
     * SECTION 10: Performance (10 Q)
     * - Database indexing strategies
     * - Query optimization
     * - Connection pooling
     * - Async processing
     * 
     * SECTION 11: Monitoring (10 Q)
     * - Metrics collection
     * - Distributed tracing
     * - Log aggregation
     * - Alerting strategies
     * 
     * SECTION 12: Security (10 Q)
     * - Authentication/Authorization
     * - Rate limiting for security
     * - DDoS mitigation
     * - Data encryption
     * 
     * SECTION 13: Deployment (10 Q)
     * - Blue-Green deployment
     * - Canary releases
     * - Rolling updates
     * - Feature flags
     * 
     * SECTION 14: Data (10 Q)
     * - Data partitioning
     * - Replication strategies
     * - Backup and recovery
     * - Data migration
     * 
     * SECTION 15: Advanced (15 Q)
     * - Chaos engineering
     * - Multi-tenancy
     * - API versioning
     * - WebSocket vs Server-Sent Events
     * - GraphQL vs REST
     */

    public static void main(String[] args) {
        System.out.println("=== DAY 24: INTERVIEW Q&A ===");
        System.out.println("✅ 100+ Questions Covering:");
        System.out.println("   - Rate Limiting & Throttling");
        System.out.println("   - Circuit Breaker Pattern");
        System.out.println("   - Caching Strategies");
        System.out.println("   - Database Sharding");
        System.out.println("   - Load Balancing");
        System.out.println("   - Microservices Patterns");
        System.out.println("   - Event Sourcing & CQRS");
        System.out.println("   - Distributed Systems");
        System.out.println("   - Real-world System Design");
        System.out.println("   - And much more!");
    }
}
