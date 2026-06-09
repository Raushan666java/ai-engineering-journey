# Chapter 17 — Distributed Databases

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) define distributed database and describe its advantages; (2) explain data fragmentation and allocation strategies; (3) describe replication and its implications for consistency; (4) enumerate the transparency requirements of a distributed DBMS; (5) explain the two-phase commit protocol and its limitations; (6) describe the three-phase commit protocol; and (7) describe distributed query processing.

## 17.1 Distributed Database Concepts

A distributed database is a collection of multiple logically interrelated databases distributed across a computer network. A distributed database management system (DDBMS) is the software that manages the distributed database and provides transparent access to users.

Distributed databases offer several advantages. Reliability and availability increase because the failure of one node does not necessarily render the entire system unavailable. Improved performance results from data locality: data can be stored near its most frequent users. Scalability is achieved by adding nodes rather than upgrading hardware. Modularity allows incremental system growth.

The principal challenges of distributed databases include the complexity of distributed query processing, the overhead of distributed transaction management, the difficulty of maintaining consistency across nodes, and the increased vulnerability to network partitions.

## 17.2 Data Fragmentation

Fragmentation divides a relation into smaller fragments that can be stored at different sites. The fragments must be such that the original relation can be reconstructed from the fragments.

Horizontal fragmentation partitions a relation into subsets of tuples. Each fragment is a selection on the original relation. Horizontal fragmentation is typically based on a fragmentation predicate. For example, the Employee relation might be fragmented into Employee_North and Employee_South based on the region attribute. Horizontal fragmentation supports parallel processing of queries that access different data subsets.

Vertical fragmentation partitions a relation into subsets of attributes. Each fragment is a projection of the original relation, and the primary key is replicated in every fragment to enable reconstruction. Vertical fragmentation allows attributes that are accessed together to be stored together, reducing I/O for queries that access only a subset of columns.

Mixed fragmentation applies both horizontal and vertical fragmentation in sequence. The resulting fragments are subsets of both tuples and attributes. The original relation can be reconstructed through a combination of joins and unions.

Data allocation determines where fragments are stored. In a fully replicated database, every fragment is stored at every site. In a partially replicated database, some fragments are replicated at some sites. In a partitioned database, each fragment is stored at exactly one site. The allocation strategy balances read performance, write cost, storage overhead, and availability requirements.

## 17.3 Replication

Replication maintains copies of data at multiple sites. Synchronous replication updates all copies within the same transaction. The transaction commits only after all copies have been updated. Synchronous replication ensures strong consistency but increases transaction latency and reduces availability because any replica failure blocks the transaction.

Asynchronous replication updates the primary copy immediately and propagates changes to replicas afterward. Asynchronous replication provides better performance and availability but permits temporary inconsistency. The replicas eventually converge to the same state.

Multi-master replication allows updates at any replica. Conflict resolution becomes necessary when two transactions update the same data item at different masters simultaneously. Conflict resolution strategies include last-writer-wins (based on timestamps), application-level merge procedures, and conflict-free replicated data types (CRDTs).

## 17.4 Transparency

Transparency hides the distributed nature of the database from users. The twelve transparency requirements, formulated by the Distributed Database Study Group of ISO, include the following principal types. Distribution transparency hides the fact that data is distributed across multiple sites. The user sees a single logical database. Transaction transparency ensures that distributed transactions exhibit the same ACID properties as local transactions. Performance transparency hides the performance variations caused by distribution. Replication transparency hides the existence of multiple copies. Fragmentation transparency hides the details of data fragmentation.

## 17.5 Two-Phase Commit

Two-phase commit (2PC) is a distributed transaction commit protocol that ensures atomic commitment across multiple sites. The protocol involves a coordinator and one or more participants. The coordinator is typically the site where the transaction originated.

In phase one, the prepare phase, the coordinator sends a prepare message to all participants. Each participant executes the transaction up to the point of commit, writes a prepare log record, and responds with either ready or abort. If any participant votes abort, the coordinator decides to abort the transaction.

In phase two, the commit or abort phase, if all participants voted ready, the coordinator writes a commit log record and sends a commit message to all participants. Each participant writes a commit log record and acknowledges. The coordinator completes the protocol when it receives all acknowledgments. If any participant voted abort, the coordinator sends an abort message to all participants.

2PC guarantees atomic commitment. However, it has critical weaknesses. The coordinator is a single point of failure. If the coordinator crashes after sending prepare messages but before sending commit or abort decisions, participants remain blocked, holding locks and resources, until the coordinator recovers. This blocking property makes 2PC unsuitable for high-availability environments.

## 17.6 Three-Phase Commit

Three-phase commit (3PC) addresses the blocking problem of 2PC. The protocol adds a third phase, the pre-commit phase, between prepare and commit.

In phase one, the coordinator sends a prepare message and collects votes. In phase two, the coordinator broadcasts a pre-commit message if all participants voted ready. Participants acknowledge the pre-commit. In phase three, the coordinator broadcasts the commit or abort message.

The critical property of 3PC is that it is non-blocking under certain assumptions. After a timeout, a participant can infer the coordinator's decision based on the phase reached. If a participant has received a pre-commit message, it can safely assume that all other participants have also received pre-commit and that the coordinator will eventually commit. If no pre-commit message has been received, the participant can unilaterally abort.

3PC is not widely deployed because it adds communication overhead and because it requires that no more than a bounded number of failures occur. In practice, many systems use Paxos or Raft consensus in place of 3PC for distributed coordination.

## 17.7 Distributed Query Processing

Distributed query processing adds the dimension of data location to query optimization. The optimizer must consider data transfer costs, which often dominate query execution time in distributed environments.

A distributed join between relations at different sites can be executed in several ways. Ship the entire relation from one site to the other and perform the join locally. This is optimal when one relation is much smaller than the other. Ship only the necessary attributes using semi-join operations. A semi-join reduces the size of the shipped relation by transmitting only the joining attribute values. Use a distributed hash join that partitions both relations into hash buckets and ships buckets to appropriate nodes.

The optimizer must minimize the total cost, which is typically dominated by data transfer. Heuristics include performing selection and projection as early as possible, moving data only when necessary, and scheduling parallel operations across sites.

## Summary

Distributed databases partition and replicate data across multiple sites to achieve scalability, availability, and performance. Fragmentation strategies balance access locality against reconstruction cost. Replication strategies trade consistency for availability. The two-phase commit protocol provides atomic distributed transactions but suffers from blocking. Distributed query processing must minimize data transfer overhead.

## Exercises

### Review Questions

1. What is the difference between horizontal and vertical fragmentation?
2. What is the blocking problem in two-phase commit?
3. How does three-phase commit avoid blocking?
4. What is a semi-join and why is it useful in distributed query processing?
5. What transparency requirements does a distributed DBMS provide?

### Application Problems

1. For a relation Employee with attributes (emp_id, name, region, salary, dept_id), design a horizontal fragmentation scheme based on the region attribute with values North, South, East, West. Write the fragmentation predicates and the reconstruction query.
2. Trace the two-phase commit protocol for a transaction that updates data at three sites. Show the messages exchanged and the log records written at each site for both the commit and abort scenarios. Assume one participant votes abort.
3. Design a query execution plan for joining two relations R(A, B) at site 1 and S(B, C) at site 2. Compare the cost of shipping R to site 2 versus shipping S to site 1 versus using a semi-join strategy. Assume R has 10,000 tuples at 100 bytes each, S has 1,000 tuples at 200 bytes each, and the join selectivity is 0.1.

### Challenge Problem

Design a distributed transaction protocol that provides atomic commitment without blocking, using the Paxos consensus algorithm instead of a coordinator-based approach. Describe the message flow, the failure scenarios, and the recovery procedure. Compare your protocol with 2PC in terms of the number of message rounds required in the failure-free case and the worst-case number of rounds under failures.
