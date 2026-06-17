# Chapter 17: Distributed Database Systems

## Learning Objectives

- Understand distributed database architecture and design goals
- Explain data fragmentation and replication strategies
- Compare distributed query processing techniques
- Implement distributed transactions using 2PC and 3PC
- Understand consistency models in distributed systems
- Evaluate CAP theorem trade-offs in practice

## Theory

![Distributed Databases, Security and Performance Tuning](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/database-management-systems/ch07-distributed-security-performance.png)

### 17.1 Distributed Database Concepts

A **distributed database** is a collection of logically related databases distributed across a computer network, appearing as a single system to the user.

**Key Properties (Date's 12 Rules for DDBMS):**
1. **Local autonomy:** Each site operates independently
2. **No reliance on a central site:** No single point of failure
3. **Continuous operation:** No planned downtime for schema changes, etc.
4. **Location transparency:** Users don't need to know where data resides
5. **Fragmentation transparency:** Users see logical tables, not fragments
6. **Replication transparency:** Users don't know about copies
7. **Distributed query processing:** Queries span multiple sites transparently
8. **Distributed transaction management:** ACID across sites
9. **Hardware independence:** Runs on heterogeneous hardware
10. **OS independence:** Runs on different operating systems
11. **Network independence:** Works across different protocols
12. **DBMS independence:** Works with different database vendors (heterogeneous)

**Advantages:**
- **Reliability and availability:** No single point of failure
- **Scalability:** Add nodes horizontally
- **Performance:** Data can be stored closer to users
- **Modularity:** Systems can be expanded incrementally

**Challenges:**
- **Complexity:** Significantly harder than centralized DBMS
- **Synchronization:** Keeping replicas in sync is expensive
- **Network dependency:** Latency, partitions, bandwidth limits
- **Security:** More attack surface
- **Transaction coordination:** Multi-site ACID is hard

### 17.2 Data Fragmentation

**Horizontal Fragmentation:** Splitting a table by rows (tuples).

```
employees (original)
┌─────┬───────┬─────────┐
│ id  │ name  │ dept    │
├─────┼───────┼─────────┤
│ 1   │ Alice │ Sales   │
│ 2   │ Bob   │ Sales   │
│ 3   │ Carol │ Eng     │
│ 4   │ Dave  │ Eng     │
│ 5   │ Eve   │ Sales   │
└─────┴───────┴─────────┘

Horizontal fragments:
Site 1 (Sales):                Site 2 (Engineering):
┌─────┬───────┬─────────┐      ┌─────┬───────┬─────────┐
│ id  │ name  │ dept    │      │ id  │ name  │ dept    │
├─────┼───────┼─────────┤      ├─────┼───────┼─────────┤
│ 1   │ Alice │ Sales   │      │ 3   │ Carol │ Eng     │
│ 2   │ Bob   │ Sales   │      │ 4   │ Dave  │ Eng     │
│ 5   │ Eve   │ Sales   │      └─────┴───────┴─────────┘
└─────┴───────┴─────────┘
```

```sql
-- Horizontal fragmentation rule:
employee_Sales = σ_dept='Sales'(employees)
employee_Eng = σ_dept='Engineering'(employees)
```

**Vertical Fragmentation:** Splitting a table by columns (attributes).

```
employees (original)
┌─────┬───────┬─────────┬─────────┬──────────┐
│ id  │ name  │ dept    │ salary  │ ssn      │
└─────┴───────┴─────────┴─────────┴──────────┘

Vertical fragments:
Site 1 (public):                     Site 2 (sensitive):
┌─────┬───────┬─────────┐            ┌─────┬─────────┬──────────┐
│ id  │ name  │ dept    │            │ id  │ salary  │ ssn      │
└─────┴───────┴─────────┘            └─────┴─────────┴──────────┘
```

```sql
-- Vertical fragmentation (must preserve key):
employee_public = π_id, name, dept(employees)
employee_sensitive = π_id, salary, ssn(employees)
```

**Mixed Fragmentation:** Combine horizontal and vertical.

```sql
-- First horizontal, then vertical
sales_public = π_id, name(σ_dept='Sales'(employees))
sales_sensitive = π_id, salary(σ_dept='Sales'(employees))
```

### 17.3 Replication

**Full Replication:** Every site stores the complete database.

- **Pros:** Highest availability, read performance
- **Cons:** Write cost is high (must update all replicas), storage waste

**Partial Replication:** Each site stores a subset of the database.

- **Pros:** Balances cost and performance
- **Cons:** Some queries may need to access multiple sites

**Replication Protocols:**

- **Eager (Synchronous):** All replicas updated before transaction commits. Guarantees consistency. High latency.
- **Lazy (Asynchronous):** Update one replica, propagate later. Low latency. Risk of inconsistency.

### 17.4 Distributed Query Processing

Queries in a distributed system must be decomposed into sub-queries for each site, with results combined.

**Example: Query across fragments**

```sql
-- Find all employees earning more than their manager across all sites
SELECT e.name, e.salary
FROM employees e, managers m
WHERE e.dept_id = m.dept_id
  AND e.salary > m.max_salary
  AND m.budget > 1000000;
```

**Distributed Query Plan:**
```
1. Send sub-query to Site A: SELECT * FROM employees WHERE dept_id IN (SELECT dept_id FROM managers WHERE budget > 1000000)
2. Send sub-query to Site B: SELECT * FROM managers WHERE budget > 1000000
3. Transfer results to coordinator site
4. Perform join locally
5. Apply remaining filters
```

**Semi-Join Optimization:** Reduces data transfer.

Instead of sending full tables between sites, send only the join columns:

```sql
-- Without semi-join: Send all rows of one table to the other site
-- With semi-join:
-- Site 1: Send π_dept_id(managers) to Site 2  (small!)
-- Site 2: Return matching employee rows only    (filtered!)
-- Site 1: Join received rows with local managers
```

### 17.5 Distributed Transactions

**Two-Phase Commit (2PC):** The standard protocol for distributed transactions.

```
Phase 1: Prepare
Coordinator → All participants: "Prepare to commit transaction T"
Participant: If ready, log PREPARED state, respond YES
             If not, log ABORT, respond NO

Phase 2: Commit/Abort
Coordinator:
  - If all YES: Log COMMIT, send COMMIT to all participants
  - If any NO:  Log ABORT, send ABORT to all participants
Participant:
  - On COMMIT: Apply changes, release locks, log DONE
  - On ABORT: Rollback, release locks, log ABORTED
```

```
Coordinator                      Participant 1                     Participant 2
    │                                  │                                  │
    ├─────────"Prepare T1"─────────────►                                  │
    │                                  │                                  │
    │◄─────────"Ready/YES"──────────────┤                                  │
    │                                  │                                  │
    ├─────────"Prepare T1"────────────────────────────────────────────────►
    │                                  │                                  │
    │◄─────────"Ready/YES"────────────────────────────────────────────────┤
    │                                  │                                  │
    │  (All YES → Decide COMMIT)       │                                  │
    │                                  │                                  │
    ├─────────"Commit T1"──────────────►                                  │
    ├─────────"Commit T1"────────────────────────────────────────────────►
    │                                  │                                  │
    │◄─────────"Ack"────────────────────┤                                  │
    │◄─────────"Ack"──────────────────────────────────────────────────────┤
    │  (Transaction complete)          │                                  │
```

**2PC Problems:**
- **Blocking:** If coordinator fails after prepare, participants are stuck (holding locks, uncertain state)
- **Single point of failure:** Coordinator crash blocks all participants

**Three-Phase Commit (3PC):** Non-blocking but more complex.

1. **CanCommit:** Coordinator asks if participants can commit
2. **PreCommit:** Coordinator sends pre-commit (after all YES responses)
3. **DoCommit:** Coordinator sends final commit

3PC avoids blocking because participants can unilaterally abort after a timeout in certain states.

### 17.6 CAP Theorem in Practice

| Database | Style | CAP | Notes |
|----------|-------|-----|-------|
| PostgreSQL (single) | RDBMS | CA | Not distributed |
| PostgreSQL (streaming replicas) | RDBMS | CP/AP | Async replicas = AP; sync = CP |
| Cassandra | Column-family | AP | Tunable consistency |
| MongoDB | Document | CP (default) | Can be configured |
| Redis Cluster | KV | CP | Partition → some unavailable |
| DynamoDB | KV | AP | Eventual consistency by default |

### 17.7 Consistency in Distributed Systems

**Strong Consistency (Linearizability):** Every read sees the latest write.

**Eventual Consistency:** Given enough time without updates, all replicas converge.

**Causal Consistency:** Operations causally related are seen in order; concurrent operations may be seen in any order.

**Quorum-Based Consistency (Dynamo-style):**
- N = total replicas
- W = number of replicas to acknowledge a write
- R = number of replicas to read from
- Condition for strong consistency: R + W > N

```
Example: N=3, W=2, R=2 → Strong consistency (2+2=4 > 3)
         N=3, W=1, R=1 → Weak consistency (1+1=2 ≤ 3)
```

### 17.8 Distributed Database Architectures

**Shared Nothing:** Each node has its own CPU, memory, and disk. Data is distributed across nodes. Example: Cassandra, HBase, Google Spanner.

**Shared Disk:** All nodes share a central disk. Example: Oracle RAC.

**Shared Memory:** All nodes share memory. Rare in distributed databases (more common in parallel databases).

### 17.9 Google Spanner — The Gold Standard

Spanner is Google's globally-distributed SQL database achieving:
- **External consistency (linearizability)** across global deployments
- **TrueTime API:** Uses atomic clocks + GPS to assign globally-ordered timestamps
- **Paxos-based** synchronous replication
- **SQL interface** with distributed joins

Key insight: TrueTime allows Spanner to enforce commit ordering without centralized coordination.

### 17.10 NewSQL

A class of databases that combine SQL/ACID with distributed scalability:

| System | Approach |
|--------|----------|
| Google Spanner | TrueTime + Paxos + synchronous replication |
| CockroachDB | Spanner-inspired, open-source, multi-active |
| TiDB | Distributed SQL with Raft consensus |
| VoltDB | In-memory, shared-nothing, stored procedures |
| NuoDB | Peer-to-peer, elastic SQL |

## Examples

**Example 17.1: Fragmentation Design**

An e-commerce database with tables: customers, orders, order_items.

```sql
-- Horizontal fragmentation by region
-- Site US: customers from North America
CREATE TABLE customers_us AS
  SELECT * FROM customers WHERE region = 'NA';

-- Site EU: customers from Europe
CREATE TABLE customers_eu AS
  SELECT * FROM customers WHERE region = 'EU';

-- Vertical fragmentation for privacy (GDPR)
-- Site EU (public): limited customer data
CREATE VIEW customer_eu_public AS
  SELECT customer_id, name, city FROM customers_eu;

-- Site EU (secure): sensitive data
CREATE TABLE customer_eu_private AS
  SELECT customer_id, email, phone, credit_card FROM customers_eu;
```

**Example 17.2: Distributed Query with Semi-Join**

```sql
-- Query: Find customers who ordered in the last 30 days
-- Site A stores customers, Site B stores orders

-- Without semi-join:
-- Site B: Transfer all recent orders to Site A

-- With semi-join optimization:
-- Step 1: Site B sends only customer_ids to Site A
SELECT DISTINCT customer_id FROM orders WHERE order_date > NOW() - INTERVAL '30 days';

-- Step 2: Site A filters customers by those IDs, returns matches
SELECT * FROM customers WHERE customer_id IN (received_ids);

-- Step 3: Combine at coordinator
```

**Example 17.3: 2PC Implementation (Conceptual)**

```python
class TwoPhaseCommit:
    def __init__(self, coordinator, participants):
        self.coordinator = coordinator
        self.participants = participants

    def execute(self, transaction):
        # Phase 1: Prepare
        responses = []
        for p in self.participants:
            response = p.prepare(transaction)
            responses.append(response)

        # Phase 2: Commit or Abort
        if all(r == "YES" for r in responses):
            for p in self.participants:
                p.commit(transaction)
            return "COMMITTED"
        else:
            for p in self.participants:
                p.abort(transaction)
            return "ABORTED"
```

## Summary

- Distributed databases provide scalability, availability, and transparency at the cost of complexity.
- Fragmentation (horizontal, vertical, mixed) splits data across sites.
- Replication provides availability but introduces consistency challenges.
- 2PC enables distributed transactions but blocks on coordinator failure.
- Semi-joins reduce data transfer in distributed query processing.
- CAP theorem guides design: choose consistency (CP) or availability (AP) during partitions.
- Quorum-based systems (R + W > N) allow tunable consistency.
- Modern systems like Spanner and CockroachDB achieve SQL+ACID at global scale.

## Exercises

### Basic

1. What are the advantages and challenges of distributed databases compared to centralized databases?

2. Explain the difference between horizontal and vertical fragmentation. Give a scenario where each is appropriate.

3. What is the CAP theorem? Why can you have only two of the three properties during a network partition?

4. In a quorum system with N=5 replicas, what values of W and R provide strong consistency?

### Intermediate

5. Consider an orders table with 100M rows, accessed from two data centers (NY and London). 80% of queries access orders from the local region, 20% query globally. Design a fragmentation and replication strategy. Justify your choices.

6. Walk through the 2PC protocol for a transfer of $500 from Account A (at Site 1) to Account B (at Site 2). What happens if Site 2 crashes after sending "YES" but before receiving the commit? What happens if the coordinator crashes after all "YES" responses but before sending commits?

7. Compare eager (synchronous) and lazy (asynchronous) replication. Under what conditions would you choose each? What consistency guarantees does each provide?

8. Design a distributed query execution plan for:
   ```sql
   SELECT e.name, d.name
   FROM employees e
   JOIN departments d ON e.dept_id = d.dept_id
   WHERE e.salary > 100000 AND d.location = 'NY'
   ```
   The employees table is horizontally fragmented by location at three sites. Departments is fully replicated at all sites.

### Advanced

9. Google Spanner achieves external consistency using TrueTime. How does TrueTime work? Why is it necessary for distributed transactions? How does CockroachDB achieve similar guarantees without atomic clocks?

10. Design a distributed key-value store with the following requirements:
    - N=3 replication across three data centers
    - Support eventual consistency (W=1, R=1 for lowest latency)
    - Support strong consistency (W=3, R=1 or W=1, R=3)
    - Handle network partitions without data loss
    - Conflict resolution: last-write-wins for simple values, version vectors for complex data
    Show the read and write paths for both consistency modes.

11. The CAP theorem says you can't have all three. But modern systems like MongoDB (CP) and Cassandra (AP) claim to handle partitions while offering both. How do they achieve this? Is there a practical compromise that CAP doesn't fully capture? (Consider the PACELC extension.)
