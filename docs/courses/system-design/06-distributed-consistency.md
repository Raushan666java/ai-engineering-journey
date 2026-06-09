# Chapter 6: CAP Theorem and Distributed Consistency

---

## Learning Objectives

- State and prove the CAP Theorem using the "Network Partition" argument
- Differentiate between Strong, Eventual, and Causal consistency models
- Explain the PACELC extension and its implications for non-partitioned states
- Analyze how Quorum reads/writes affect system consistency and availability

---

## Theory

### The CAP Theorem
Formulated by Eric Brewer, the CAP theorem states that a distributed data store can provide at most two of the following three guarantees:
- **Consistency (C):** Every read receives the most recent write or an error.
- **Availability (A):** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **Partition Tolerance (P):** The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

In the real world, network partitions **will** happen. Therefore, we cannot "choose" CA. We must choose between **CP** (Consistency under partition) or **AP** (Availability under partition).

### Consistency Models
1. **Strong Consistency:** After a write completes, any subsequent read will return that value. This is the goal of CP systems.
2. **Eventual Consistency:** If no new updates are made to a data item, eventually all accesses will return the last updated value. This is common in AP systems (e.g., DNS, Amazon Dynamo).
3. **Causal Consistency:** If one operation "causally" follows another, all nodes must see them in that order. For example, a reply to a comment must not appear before the comment itself.

### PACELC Extension
The CAP theorem only describes what happens during a partition. **PACELC** adds:
- **P** (If there is a partition), choose between **A** (Availability) and **C** (Consistency).
- **E** (Else - no partition), choose between **L** (Latency) and **C** (Consistency).
Even in a healthy network, you might choose "Eventual Consistency" to reduce **Latency**.

---

## Examples

### Example 1: The ATM Withdrawal (CP vs AP)
Imagine two ATMs (nodes) and a network failure between them.
- **CP Design:** The ATMs stop allowing withdrawals because they can't verify the balance in real-time. Consistency is maintained (no overdraft), but Availability is lost.
- **AP Design:** The ATMs allow withdrawals up to $200 regardless of the balance. Availability is high, but Consistency is lost (the user might withdraw more than they have).

### Example 2: Quorum Consistency (N, R, W)
In a leaderless system with 3 nodes ($N=3$):
- If we require 2 nodes to confirm a write ($W=2$) and 2 nodes to confirm a read ($R=2$), then because $W + R > N$ ($2+2 > 3$), at least one node in the read set must overlap with the write set. This provides **Strong Consistency**.
- If we set $W=1$ and $R=1$, $W+R \leq N$. We get very low latency (Availability), but we might read stale data (**Eventual Consistency**).

---

## Summary

- The CAP theorem is a fundamental law of distributed systems: you must choose between C and A during a network partition.
- Network partitions are unavoidable in large-scale systems, so Partition Tolerance (P) is a requirement.
- CP systems prioritize data integrity; AP systems prioritize uptime and user experience.
- PACELC highlights the trade-off between latency and consistency even during normal operation.
- Consistency is not binary; it's a spectrum ranging from Strong to Eventual.

---

## Exercises

### Review Questions
1. Why is it impossible to have a CA system in a distributed environment?
2. Explain "Eventual Consistency" in your own words.
3. What is a "Network Partition"?
4. In PACELC, what does the "E" stand for, and why is it important?

### Application Problems
1. **System Classification:** Classify the following as CP or AP:
   - A distributed lock manager (e.g., Etcd).
   - A social media "Like" counter.
   - A relational database with synchronous replication.
2. **Quorum Calculation:** You have 5 nodes. You want the fastest possible writes ($W=1$). What is the minimum $R$ value required to guarantee strong consistency?
3. **Business Decision:** You are building a "Flight Booking" system. During a network partition, would you choose CP or AP? Justify your choice based on the business risk.

### Challenge Problem
**Conflict Resolution in AP Systems:** In an AP system, two users update their status at the same time during a partition. User A sets status to "Happy," User B sets it to "Excited." When the partition heals, the system has two conflicting values. Propose a deterministic way to resolve this (e.g., Last Writer Wins using timestamps) and discuss the flaws of using system clocks in distributed environments.
