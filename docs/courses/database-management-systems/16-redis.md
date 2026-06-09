# Chapter 16 — Redis

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe Redis data structures and their appropriate use cases; (2) configure RDB and AOF persistence; (3) set up replication and understand its properties; (4) use Redis pub/sub for messaging; (5) apply caching patterns including cache-aside, write-through, and TTL-based eviction; and (6) manage key expiration and eviction policies.

## 16.1 Redis Architecture

Redis is an in-memory data structure store that can serve as a database, cache, and message broker. It is designed for low-latency access to data that fits primarily in memory. The single-threaded event loop architecture ensures atomicity for individual commands and simplifies implementation, though recent versions have introduced background threads for certain I/O operations.

Redis commands are organized into approximately two hundred commands grouped by data type. The command interface follows a simple request-response protocol over TCP. Clients issue commands as text strings or using binary-safe Redis Serialization Protocol (RESP) encoding. Redis supports transactions, Lua scripting for server-side logic, and modules for extending functionality.

## 16.2 Data Structures

The string is the most fundamental Redis data type. Strings are binary-safe and can hold text, integers, floating-point numbers, or serialized objects up to 512 megabytes. String operations include GET, SET, MSET, MGET, INCR, DECR, APPEND, and STRLEN.

SET user:1001:name "Alice Zhang"
INCR user:1001:visits

Lists are ordered sequences of strings. Lists support push and pop operations from both ends (LPUSH, RPUSH, LPOP, RPOP), range queries (LRANGE), and trimming (LTRIM). Lists are implemented as linked lists, making head and tail operations O(1) and index accesses O(N). Lists are suitable for message queues and activity feeds.

Hashes are maps of string fields to string values. Hashes provide efficient access to individual fields within a larger object, making them ideal for representing objects without serialization overhead. Hash operations include HSET, HGET, HGETALL, HINCRBY, and HDEL.

HSET user:1001 name "Alice Zhang" major "CS" gpa "3.8"
HGET user:1001 name

Sets are unordered collections of unique strings. Sets support add, remove, and membership test operations, as well as set operations including union, intersection, and difference. Set operations include SADD, SREM, SMEMBERS, SISMEMBER, SUNION, SINTER, and SDIFF.

Sorted sets are ordered collections of unique strings, each associated with a numeric score. Elements are ordered by score and, for ties, lexicographically by member. Sorted sets support range queries by score and by rank, making them ideal for leaderboards and time-series indices. Operations include ZADD, ZRANGE, ZRANGEBYSCORE, ZRANK, and ZREM.

Additional data structures include bitmaps for bit-level operations, HyperLogLog for approximate cardinality estimation, geospatial indices for location-based queries, and streams for append-only log storage.

## 16.3 Persistence

Redis offers two persistence mechanisms. RDB (Redis Database) persistence creates point-in-time snapshots of the dataset at configurable intervals. RDB files are compact, suitable for backups and disaster recovery, and enable fast restarts. The trade-off is potential data loss of the most recent writes, up to the snapshot interval.

AOF (Append-Only File) persistence logs every write operation received by the server. The AOF file can be replayed to reconstruct the dataset. AOF provides finer-grained durability. Three fsync policies are available: always (fsync on every write, maximum durability but slowest), everysec (fsync once per second, good compromise), and no (let the operating system decide). The everysec policy is the default.

Redis supports mixed persistence using both RDB and AOF simultaneously. When both are enabled, Redis uses the AOF file for recovery because it contains the most complete record of operations. The AOF file can be rewritten to compact it: BGREWRITEAOF creates a new AOF file from the current in-memory state, discarding redundant operations.

## 16.4 Replication

Redis replication follows a leader-follower (primary-replica) model. Each replica connects to a primary and receives a copy of the data. The replication process has two phases. During the initial synchronization, the primary forks a child process to create an RDB snapshot, which is transferred to the replica. After initialization, the primary streams incoming write commands to the replica in real time.

Replicas are read-only by default. They can serve read queries, improving read throughput and providing geographic locality. If the primary fails, a replica can be promoted to primary manually or automatically using Redis Sentinel. Sentinel provides monitoring, notification, and automatic failover. A minimum of three Sentinel instances is required for robust operation.

Redis Cluster provides automatic sharding across multiple nodes, supporting up to approximately 1,000 nodes. Cluster nodes use a gossip protocol to discover other nodes and exchange health information. Data is partitioned into 16,384 hash slots, with each node responsible for a subset of slots. The client is redirected to the correct node for each operation.

## 16.5 Pub/Sub

Redis pub/sub provides a lightweight messaging pattern. Publishers send messages to channels without knowledge of subscribers. Subscribers express interest in one or more channels and receive messages published to those channels. The PUBLISH command sends a message to a channel. The SUBSCRIBE command subscribes to channels.

PUBLISH news:tech "New Redis version released"
SUBSCRIBE news:tech

Pub/sub messages are fire-and-forget. If no subscriber is listening, the message is discarded. Redis does not persist pub/sub messages. For reliable messaging, Redis streams provide persistent, consumer-group-based message delivery with acknowledgment tracking.

## 16.6 Caching Patterns

Redis is widely used as a cache. The cache-aside pattern requires the application to check the cache before querying the database. On a cache miss, the application loads data from the database, stores it in the cache, and returns it. The cache-aside pattern is simple and effective when the working set fits in memory.

The write-through pattern writes data to both the cache and the database in the same operation. Write-through ensures cache consistency but increases write latency and may store rarely-accessed data in the cache.

Time-to-live (TTL) expiration automatically removes keys after a specified duration. Redis supports per-key TTL through the EXPIRE command. When a key expires, it is removed lazily (on access) and periodically (the active expiration cycle samples keys with TTLs and removes expired ones).

When memory reaches the configured limit (maxmemory), Redis applies an eviction policy. Policies include noeviction (return errors for writes), allkeys-lru (evict the least recently used key regardless of TTL), volatile-lru (evict the least recently used key among those with TTL set), allkeys-lfu (evict the least frequently used key), and volatile-ttl (evict the key with the shortest remaining TTL).

## Summary

Redis is a versatile in-memory data structure store. Its rich data structures support diverse application patterns beyond simple caching. Persistence mechanisms trade durability for performance. Replication and clustering provide scalability and availability. Pub/sub and streams enable messaging. Proper configuration of eviction policies and TTLs is essential for production deployments.

## Exercises

### Review Questions

1. Why is Redis called a data structure store rather than a database?
2. When should a hash be used instead of a string for storing object data?
3. What is the difference between RDB and AOF persistence?
4. How does Redis Cluster handle data partitioning?
5. What happens to pub/sub messages when no subscriber is connected to the channel?

### Application Problems

1. Design a Redis data model for a real-time leaderboard that updates scores as players complete games. Include the ability to query the top 100 players, a specific player's rank, and players within a score range.
2. Implement a rate limiter using Redis that allows at most 100 requests per minute per API key. Explain which data structure you used and why.
3. Configure a Redis cache for an e-commerce product catalog with 500,000 products. Design the key naming scheme, TTL strategy, and eviction policy. Explain how you handle cache invalidation when product prices change.

### Challenge Problem

Design and implement a distributed lock using Redis that is safe under network partitions (based on the Redlock algorithm). Your solution must handle the following scenarios: (a) a client acquires a lock and crashes before releasing it, (b) a clock jump on a Redis node causes premature lock expiration, and (c) multiple clients contend for the same lock simultaneously. Analyze the correctness guarantees and failure modes of your implementation.
