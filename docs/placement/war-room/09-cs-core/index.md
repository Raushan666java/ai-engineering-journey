---
title: Phase 09 — CS Core
---

# Phase 09 — CS Core

> **Rapid-fire CS fundamentals.** Forty drills across OS, DBMS, Networking, and OOP/Patterns. Built for the 5–15 minute "core CS" round that interviewers slot before the language-specific deep dive.

These are shorter than the Laravel/AI drills. The script for each is 2–3 sentences — because in a CS-core round, the interviewer is firing questions every 60 seconds. You don't have time for a 4-sentence essay. You have time for a definition + the *one* detail that proves you understand.

Each drill includes:

- **The Script** — the 2–3 sentence answer you say aloud.
- **The Anatomy** — why this script wins.
- **Code or ASCII diagram** — where applicable.
- **3 follow-ups** — the most likely interviewer pushbacks.
- **Common traps** — what kills weaker candidates.

---

## Operating Systems (10 drills)

| # | Drill | Focus |
|---|---|---|
| 1 | [Process vs Thread](os/process-vs-thread.md) | Memory sharing, context switch cost |
| 2 | [Context Switching](os/context-switching.md) | What happens, why expensive |
| 3 | [Deadlock](os/deadlock.md) | Coffman's 4 conditions, prevention |
| 4 | [Mutex vs Semaphore](os/mutex-vs-semaphore.md) | Binary vs counting, ownership |
| 5 | [Paging vs Segmentation](os/paging-vs-segmentation.md) | Fixed vs variable, fragmentation |
| 6 | [Virtual Memory](os/virtual-memory.md) | Demand paging, TLB, page faults |
| 7 | [Scheduling Algorithms](os/scheduling-algorithms.md) | FCFS, SJF, RR, MLFQ |
| 8 | [Fork vs Exec](os/fork-vs-exec.md) | Process creation pattern |
| 9 | [IPC Mechanisms](os/ipc-mechanisms.md) | Pipes, sockets, shared memory |
| 10 | [Producer-Consumer](os/producer-consumer.md) | Classic sync problem |

## DBMS (10 drills)

| # | Drill | Focus |
|---|---|---|
| 1 | [ACID Properties](dbms/acid-properties.md) | Atomicity, Consistency, Isolation, Durability |
| 2 | [Normalization](dbms/normalization.md) | 1NF–BCNF + denormalization |
| 3 | [B-Tree vs B+ Tree](dbms/b-tree-vs-b-plus-tree.md) | Why DBs use B+ |
| 4 | [Join Types](dbms/join-types.md) | INNER, LEFT, RIGHT, FULL, CROSS |
| 5 | [Transactions & Isolation](dbms/transactions-isolation.md) | 4 levels + 3 anomalies |
| 6 | [NoSQL vs SQL](dbms/nosql-vs-sql.md) | When each wins |
| 7 | [CAP Theorem](dbms/cap-theorem.md) | 2 of 3 in partition |
| 8 | [Sharding Strategies](dbms/sharding-strategies.md) | Range, hash, geo, directory |
| 9 | [Database Replication](dbms/database-replication.md) | Master-slave, sync vs async |
| 10 | [Query Optimization](dbms/query-optimization.md) | EXPLAIN, indexes, rewrites |

## Networking (10 drills)

| # | Drill | Focus |
|---|---|---|
| 1 | [OSI vs TCP/IP](networking/osi-vs-tcp-ip.md) | 7-layer vs 4-layer mapping |
| 2 | [TCP vs UDP](networking/tcp-vs-udp.md) | Reliability, order, use cases |
| 3 | [HTTP vs HTTPS](networking/http-vs-https.md) | TLS handshake, certificates |
| 4 | [HTTP Status Codes](networking/http-status-codes.md) | Top 14 codes with when to use |
| 5 | [DNS Resolution](networking/dns-resolution.md) | Recursive, iterative, caching |
| 6 | [TCP Handshake](networking/tcp-handshake.md) | 3-way open, 4-way close |
| 7 | [REST vs GraphQL](networking/rest-vs-graphql.md) | Over/under-fetching |
| 8 | [WebSockets](networking/websockets.md) | Full-duplex, when over polling |
| 9 | [Load Balancing](networking/load-balancing.md) | L4 vs L7, algorithms |
| 10 | [CDN](networking/cdn.md) | Edge caching, push vs pull |

## OOP & Design Patterns (10 drills)

| # | Drill | Focus |
|---|---|---|
| 1 | [SOLID Principles](oop/solid-principles.md) | All 5 with examples |
| 2 | [Inheritance vs Composition](oop/inheritance-vs-composition.md) | "Has-a vs Is-a" |
| 3 | [Abstract vs Interface](oop/abstract-vs-interface.md) | When to use which |
| 4 | [Polymorphism Types](oop/polymorphism-types.md) | Compile-time, runtime, parametric |
| 5 | [Encapsulation vs Abstraction](oop/encapsulation-abstraction.md) | Different concepts confused |
| 6 | [Design Patterns Overview](oop/design-patterns-overview.md) | 23 GoF, most-asked 5 |
| 7 | [Singleton & Factory](oop/singleton-factory.md) | Code + anti-pattern caveats |
| 8 | [Observer & Strategy](oop/observer-strategy.md) | Laravel events, payment gateways |
| 9 | [MVC vs MVVM](oop/mvc-vs-mvvm.md) | Flow direction, binding |
| 10 | [Functional vs OOP](oop/functional-vs-oop.md) | Paradigms compared |

---

## How to use this phase

- **Two weeks out from a CS-heavy interview** (especially product cos, MNC graduate programs): drill 5 per day, 50-min sessions. Two weeks = all 40 covered.
- **Three days out:** focus on the 4 most-asked from each subcategory. Skip the rest.
- **Day of:** skim only — don't re-drill. These should be muscle memory.

The top 10 across the whole phase (the ones every interviewer reaches for):

1. Process vs Thread
2. Deadlock
3. ACID Properties
4. Normalization
5. TCP vs UDP
6. HTTP Status Codes
7. OSI vs TCP/IP
8. SOLID Principles
9. Inheritance vs Composition
10. CAP Theorem

If you have one evening, drill those ten.

---

*The CS-core round is not a memory test — it's a coverage test. Interviewers want to know you didn't skip these in your degree. A 2-sentence clean answer per topic is enough to pass.*
