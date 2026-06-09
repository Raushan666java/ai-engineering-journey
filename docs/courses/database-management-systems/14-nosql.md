# Chapter 14: NoSQL Databases

## Learning Objectives

- Understand the limitations of relational databases for modern applications
- Explain the CAP theorem and its implications for distributed systems
- Distinguish ACID from BASE consistency models
- Classify NoSQL database types: document, key-value, column-family, graph
- Select appropriate NoSQL solutions based on application requirements
- Understand when to use SQL vs. NoSQL

## Theory

### 14.1 The Rise of NoSQL

Relational databases dominated data management for decades, but the 2000s brought new challenges:

**Scale:** Web applications (Google, Amazon, Facebook) needed to handle petabytes of data across thousands of servers. Relational databases struggled with horizontal scaling.

**Schema Flexibility:** Agile development and semi-structured data (JSON, XML) demanded flexible schemas that relational databases could not easily provide.

**Data Variety:** Relational normalization is designed for structured data, but modern applications handle documents, graphs, time-series, and key-value patterns.

**The "NoSQL" Name:** The term "NoSQL" was popularized at a 2009 meetup about distributed non-relational databases. It was originally "No SQL" but is now commonly understood as "Not Only SQL."

### 14.2 The CAP Theorem

Proposed by Eric Brewer in 2000 (proven by Gilbert and Lynch in 2002), the CAP theorem states that a distributed data system can only guarantee **two** of the following three properties simultaneously:

**Consistency (C):** Every read receives the most recent write or an error. All nodes see the same data at the same time.

**Availability (A):** Every request receives a (non-error) response, without guarantee that it contains the most recent write.

**Partition Tolerance (P):** The system continues to operate despite arbitrary network partitions (nodes being disconnected from each other).

```
      Consistency
         /\
        /  \
       /    \
      / CAP  \
     /        \
    /__________\
Availability  Partition Tolerance
```

**CAP Trade-offs:**
- **CP (Consistent + Partition Tolerant):** If a partition occurs, some nodes become unavailable to maintain consistency. Example: HBase, MongoDB (default)
- **AP (Available + Partition Tolerant):** If a partition occurs, all nodes remain available but may return stale data. Example: Cassandra, CouchDB
- **CA (Consistent + Available):** Not possible in a distributed system (you cannot avoid partitions in practice). Traditional RDBMS in a single-node setup are CA.

**Important nuance:** CAP is not "pick 2 of 3 forever" but rather "during a network partition, you must choose between C and A." Outside of partitions, you can have both C and A.

### 14.3 BASE vs. ACID

NoSQL systems often use **BASE** instead of ACID:

- **Basically Available:** The system guarantees availability (per CAP)
- **Soft State:** The system state may change over time without input (due to eventual consistency)
- **Eventual Consistency:** Given enough time without updates, all replicas will converge to the same value

**Eventual Consistency:** After a write, reads may see stale data for a period, but eventually all replicas will agree on the latest value.

**Consistency Models (from weak to strong):**
1. **Eventual:** Reads may return any value; will converge eventually
2. **Causal:** Reads are consistent with cause-effect relationships
3. **Read-your-writes:** A process always sees its own writes
4. **Monotonic reads:** Once you see a value, you never see an older version
5. **Strong (Linearizable):** Every read sees the latest write (like ACID)

### 14.4 NoSQL Database Categories

#### 14.4.1 Document Stores (MongoDB, Couchbase, CouchDB, Firebase)

**Data Model:** Semi-structured documents (JSON, BSON, XML). Each document is self-contained with its own schema (schema-on-read).

**Key Features:**
- Schema flexibility: Documents in the same collection can have different fields
- Rich querying: Query by document fields, nested fields, arrays
- Indexes: Secondary indexes on any field
- Aggregation: MapReduce or aggregation pipelines

**When to use:**
- Content management systems
- E-commerce product catalogs (varying product attributes)
- Real-time analytics and event logging
- User profiles with varying data

**When NOT to use:**
- Highly normalized, join-heavy data
- Multi-row transactions (ACID across documents is limited)

```javascript
// MongoDB document example
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "username": "alice",
  "email": "alice@example.com",
  "profile": {
    "first_name": "Alice",
    "last_name": "Chen",
    "age": 28
  },
  "orders": [
    { "order_id": 1001, "total": 59.99, "status": "shipped" },
    { "order_id": 1002, "total": 129.99, "status": "pending" }
  ],
  "created_at": ISODate("2026-01-15T10:30:00Z")
}
```

#### 14.4.2 Key-Value Stores (Redis, DynamoDB, Riak, Memcached)

**Data Model:** A simple key-value map. The value is opaque to the database (usually a blob or simple data type).

**Key Features:**
- Extremely fast: O(1) lookups by primary key
- Simple data model: Get/Set/Delete operations
- Often in-memory (Redis) or SSD-optimized (DynamoDB)
- Supports TTL (time-to-live) expiration

**When to use:**
- Caching layers
- Session storage
- Real-time counters and leaderboards
- Simple metadata lookups

**When NOT to use:**
- Complex queries or joins
- Multi-key transactions
- Hierarchical or relationship-heavy data

```
// Redis key-value examples (Chapter 16 covers Redis in depth)
SET user:1001:name "Alice Chen"
SET user:1001:email "alice@example.com"
GET user:1001:name
// Result: "Alice Chen"
```

#### 14.4.3 Column-Family Stores (Cassandra, HBase, ScyllaDB, Bigtable)

**Data Model:** Data is stored in column families (similar to tables but sparse). Each row can have different columns. Columns are grouped into column families.

**Key Features:**
- Wide-column storage: Optimized for queries over large ranges of columns
- Excellent write throughput
- Built for horizontal scaling (add nodes, no downtime)
- Tunable consistency (per-query consistency level)

**When to use:**
- Time-series data (IoT sensor readings, logs)
- Large-scale data warehousing
- Applications needing high write throughput
- Event logging and activity feeds

**When NOT to use:**
- Ad-hoc queries requiring joins
- Strongly consistent transactions across rows
- Evolving query patterns requiring schema changes on the fly

```
// Cassandra table (CQL)
CREATE TABLE sensor_data (
    sensor_id UUID,
    timestamp TIMESTAMP,
    temperature DOUBLE,
    humidity DOUBLE,
    pressure DOUBLE,
    PRIMARY KEY (sensor_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);

// Query
SELECT temperature, humidity
FROM sensor_data
WHERE sensor_id = 123e4567-e89b-12d3-a456-426614174000
  AND timestamp > '2026-01-01'
ORDER BY timestamp DESC;
```

#### 14.4.4 Graph Databases (Neo4j, Amazon Neptune, ArangoDB, JanusGraph)

**Data Model:** Nodes (entities) and edges (relationships). Both nodes and edges can have properties.

**Key Features:**
- Relationship traversal is fast (constant time per hop, regardless of data size)
- Expressive query languages (Cypher, Gremlin, SPARQL)
- Natural for connected data

**When to use:**
- Social networks (friends, followers)
- Recommendation engines
- Fraud detection (relationship patterns)
- Knowledge graphs
- Network and IT operations

**When NOT to use:**
- Simple CRUD applications
- Bulk aggregation/analytics
- Tabular reporting

```
// Neo4j Cypher query
MATCH (p:Person)-[:FRIENDS_WITH]->(friend:Person)
WHERE p.name = "Alice"
RETURN friend.name, friend.email
ORDER BY friend.name
LIMIT 20

// Find recommendation: friends of friends
MATCH (p:Person {name: "Alice"})-[:FRIENDS_WITH]->()-[:FRIENDS_WITH]->(recommendation)
WHERE NOT (p)-[:FRIENDS_WITH]->(recommendation)
RETURN DISTINCT recommendation.name
LIMIT 10
```

### 14.5 NoSQL Query Languages

Unlike SQL's universal standard, NoSQL systems have diverse query languages:

| System | Query Language | Example Syntax |
|--------|---------------|----------------|
| MongoDB | MQL (MongoDB Query Language) | `db.users.find({age: {$gt: 25}})` |
| Cassandra | CQL (Cassandra Query Language) | `SELECT * FROM users WHERE age > 25;` |
| Neo4j | Cypher | `MATCH (u:User) WHERE u.age > 25 RETURN u` |
| Redis | Commands | `SCAN 0 MATCH user:*` |
| DynamoDB | PartiQL / API | `SELECT * FROM Users WHERE age > 25` |

### 14.6 Polyglot Persistence

Modern applications often use **multiple** database types, each optimized for specific workloads:

```python
# E-commerce application stack:
# - PostgreSQL: Orders, inventory, payments (ACID needed)
# - Redis: Session cache, product cache, shopping cart
# - MongoDB: Product catalog (varying attributes)
# - Elasticsearch: Full-text product search
# - Neo4j: Product recommendation engine
```

### 14.7 SQL vs. NoSQL Decision Guide

| Criteria | SQL (RDBMS) | NoSQL |
|----------|-------------|-------|
| **Schema** | Fixed, predefined | Flexible, dynamic |
| **Consistency** | Strong (ACID) | Varies (BASE) |
| **Scaling** | Vertical (primary) | Horizontal (native) |
| **Joins** | Built-in, optimized | Limited or none |
| **Transactions** | Full ACID | Limited or single-document |
| **Query complexity** | Very high (SQL) | Varies by type |
| **Maturity** | 50+ years | 15-20 years |
| **When to use** | Structured data, complex queries, ACID required | Scale-out, flexible schemas, high throughput |

**The SQL vs. NoSQL Question:**
- "Which is better?" is the wrong question
- The right question: "What data access patterns does my application need?"
- Many modern apps use both (polyglot persistence)

## Examples

**Example 14.1: CAP in Practice — Network Partition**

A distributed database with nodes in us-east-1 and us-west-1.

Network partition occurs. User A writes value X to us-east-1. User B reads from us-west-1.

- **CP choice:** us-west-1 returns an error (unavailable) because it cannot confirm consistency.
- **AP choice:** us-west-1 returns a value (possibly stale) to maintain availability.

**Example 14.2: Choosing the Right Database**

Scenario: A social media application.

| Component | Data Pattern | Database Choice | Reason |
|-----------|-------------|-----------------|--------|
| User profiles | Document, varying fields | MongoDB | Schema flexibility |
| Friend graph | Highly connected | Neo4j | Fast traversals |
| Feed cache | Key-value, TTL | Redis | Low latency |
| Activity logs | Append-only, time-range queries | Cassandra | High write throughput |
| Payments | ACID required | PostgreSQL | Transaction safety |

**Example 14.3: Same Data, Different Models**

A person with their hobbies:

```sql
-- Relational (SQL)
CREATE TABLE person (id INT PK, name VARCHAR);
CREATE TABLE hobby (id INT PK, name VARCHAR);
CREATE TABLE person_hobby (person_id FK, hobby_id FK);
```

```javascript
// Document (MongoDB)
{
  "name": "Alice",
  "hobbies": ["reading", "hiking", "photography"]
}
```

```
// Graph (Neo4j)
(Person {name: "Alice"})-[:LIKES]->(Hobby {name: "reading"})
(Person {name: "Alice"})-[:LIKES]->(Hobby {name: "hiking"})
```

Each representation has different trade-offs for querying, updating, and scaling.

## Summary

- NoSQL emerged to handle scale, schema flexibility, and diverse data models.
- The CAP theorem: in a partition, choose consistency or availability.
- BASE (Basically Available, Soft State, Eventual Consistency) is the NoSQL alternative to ACID.
- Four main NoSQL types: Document, Key-Value, Column-Family, and Graph.
- Each type excels at specific workloads; no single database is best for everything.
- Polyglot persistence uses multiple database types in one application.
- The SQL vs. NoSQL choice depends on your data access patterns, not dogma.

## Exercises

### Basic

1. Explain the CAP theorem. What three properties does it describe? Why can you only have two in a distributed system?

2. List the four main categories of NoSQL databases and give an example system for each.

3. What is eventual consistency? How does it differ from strong consistency?

4. For each scenario, suggest the best database type: a) user session cache, b) social network graph, c) sensor data time series, d) product catalog with varying attributes.

### Intermediate

5. Compare ACID and BASE consistency models. In what scenarios would you choose BASE over ACID?

6. Explain the concept of polyglot persistence. For an e-commerce platform, list at least three different databases that might be used and what each handles.

7. A team is building a real-time chat application. They need low-latency message delivery, presence indicators, and message history. Which database type(s) would you recommend for each concern?

8. Why is "CA" (Consistent + Available without Partition Tolerance) considered impractical in distributed systems?

### Advanced

9. Design a data model for a Twitter-like microblogging platform using:
   a) A relational database (PostgreSQL)
   b) A document database (MongoDB)
   c) A graph database (Neo4j)
   
   Consider: users, tweets, follows, likes, retweets. What queries are easy/hard in each model?

10. Consider the "PACELC" theorem (an extension of CAP). It states: "In a distributed system, if a partition occurs (P), you must trade between Availability (A) and Consistency (C); otherwise (E — Else), you trade between Latency (L) and Consistency (C)." Explain this extension and how it applies to DynamoDB's design choices.

11. Eventual consistency can lead to "stale reads." Design a system that uses a version vector or vector clock to detect conflicting updates during an eventual consistency reconciliation process. How does Amazon Dynamo handle conflict resolution? How does Cassandra?
