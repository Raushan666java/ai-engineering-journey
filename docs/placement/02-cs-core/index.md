# CS Core — Computer Science Ki Jaan

Ye module placement interviews ka backbone hai. DSA, OS, DBMS, CN, CO, TOC — har company poochti hai. Iska structure `placement-original/Main-Course/Placement-01/02-CS-Core/` mein milega. Har subject ka detailed breakdown neeche diya hai source files se.

---

## DSA — Data Structures & Algorithms

**Location**: `placement-original/Main-Course/Placement-01/02-CS-Core/01-DSA/DSA-Roadmap.md` — 12-week mastery plan

### Detailed Topic Breakdown (from `DSA-Roadmap.md`)

| Week | Topic | Key Patterns | Problems |
|------|-------|-------------|----------|
| 1-2 | Arrays & Strings | Two Pointers, Sliding Window, Prefix/Suffix Arrays | 50 (20E, 20M, 10H) |
| 3 | Linked Lists | Fast & Slow Pointers, Reverse, Cycle Detection | 25 |
| 4 | Stacks & Queues | Monotonic Stack, Expression Evaluation, BFS | 25 |
| 5-6 | Trees | Recursive Traversals, Level-order, BST Ops, Path Sum | 40 |
| 7-8 | Graphs | DFS/BFS, Dijkstra, Topological Sort, Union-Find, MST | 40 |
| 9-10 | Dynamic Programming | Memoization vs Tabulation, 1D/2D DP, LCS, KnapSack | 40 |
| 11-12 | Advanced | Tries, Segment Trees, BIT, Advanced Sorting | 30 |

### Practice Target (from `placement-original/DSA-Practice/practice/PRACTICE_TRACKER.md`)

- **Easy**: 150 problems
- **Medium**: 200 problems
- **Hard**: 100 problems
- **Total**: 500+ problems

### Core Patterns to Master

- **Two Pointers**: left-right, fast-slow — sorted arrays me gold mine
- **Sliding Window**: fixed size aur variable size — substring problems ka baap
- **Kadane's Algorithm**: Maximum Subarray sum — O(n) me khatam
- **Floyd's Algorithm**: cycle detection in linked lists
- **Recursive Tree Patterns**: inorder/preorder/postorder, BST se path sum tak
- **Union-Find**: graph me connected components aur cycle detection

### Reference PDFs

- **Handwritten DSA Notes**: `placement-original/PDF-References/Data Structure and Algorithms Handwritten Notes.!!.pdf`
- **DSA Summary**: `placement-original/DSA-Practice/practice/dsa/COMPLETE_DSA_PRACTICE_SUMMARY.md`

### Key Interview Questions

1. Find second largest element in array without sorting — O(n) approach
2. Detect cycle in linked list (Floyd's Algorithm) — implement slow/fast pointer
3. Longest substring without repeating characters — sliding window + hashmap
4. Two Sum problem — hashmap O(n) solution (classic!)
5. Merge two sorted linked lists — recursive ya iterative
6. Check if binary tree is BST — inorder traversal ya min/max range
7. Reverse a linked list in groups of K
8. Maximum subarray sum (Kadane's Algorithm)

---

## OS — Operating Systems

**Location**: `placement-original/Main-Course/Placement-01/02-CS-Core/04-OS/COURSE_INDEX.md` — 16-week A to Z course

### Detailed Topic Breakdown (from `COURSE_INDEX.md`)

| Phase | Modules | Key Concepts |
|-------|---------|-------------|
| Phase 1: OS Foundations (Weeks 1-4) | OS Intro, System Architecture, Process Mgmt, Threading | System Calls, Process States, Context Switching, IPC |
| Phase 2: Core Concepts (Weeks 5-8) | CPU Scheduling, Process Sync, Deadlocks, Memory Mgmt | Scheduling Algorithms, Semaphores, Deadlock Prevention, Fragmentation |
| Phase 3: Advanced Memory & Storage (Weeks 9-12) | Virtual Memory, File Systems, Storage Mgmt, I/O Systems | Demand Paging, Page Replacement, Disk Scheduling, RAID |
| Phase 4: Modern OS Concepts (Weeks 13-16) | Security, Distributed Systems, Virtualization, Modern Topics | Access Control, Distributed FS, Hypervisors, RTOS |

### CPU Scheduling Algorithms

- **FCFS (First Come First Serve)** — non-preemptive, convoy effect
- **SJF (Shortest Job First)** — optimal avg waiting time, but starvation possible
- **Round Robin** — time quantum based, preemptive, fair
- **Priority Scheduling** — preemptive/non-preemptive, priority inversion issue

### Memory Management Deep-Dive

- **Paging**: logical address → page table → physical frame; no external fragmentation
- **Segmentation**: logical address → segment table → physical address; external fragmentation possible
- **Virtual Memory**: demand paging, page fault handling, thrashing
- **Page Replacement**: FIFO, Optimal, LRU, Clock algorithm
- **TLB**: translation lookaside buffer — speed booster for address translation

### Process Synchronization

- **Race Condition**: multiple processes access shared data concurrently
- **Critical Section Problem**: mutual exclusion, progress, bounded waiting
- **Semaphores**: counting vs binary — wait() and signal() operations
- **Mutex Locks**: simpler than semaphore, only one process at a time
- **Deadlock**: 4 necessary conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)
- **Deadlock Handling**: Prevention, Avoidance (Banker's Algorithm), Detection & Recovery

### Key Interview Questions

1. Difference between process and thread — memory, context switch cost, communication
2. What is a deadlock? Explain 4 conditions with real-life example
3. FCFS vs SJF vs Round Robin — which is better and when?
4. Explain virtual memory and demand paging with example
5. What is thrashing? How to prevent it?
6. Producer-Consumer problem using semaphores — implement wait/signal
7. Difference between paging and segmentation
8. What are page replacement algorithms? Compare FIFO, LRU, Optimal
9. Banker's Algorithm — deadlock avoidance kaise kaam karta hai?
10. Explain TLB and how it speeds up memory access

---

## DBMS — Database Management Systems

**Location**: `placement-original/Main-Course/Placement-01/02-CS-Core/02-DBMS/DBMS-Complete.md` — 8-week complete course

### Detailed Topic Breakdown (from `DBMS-Complete.md`)

| Weeks | Module | Core Concepts |
|-------|--------|--------------|
| 1-2 | Database Fundamentals & ER Modeling | DBMS vs File Systems, ER Diagrams, Entities/Attributes, Cardinality, Weak Entities |
| 3-4 | Relational Model & SQL | Keys (Primary, Foreign, Candidate), DDL/DML/DCL/TCL, Joins, Subqueries, Window Functions |
| 5-6 | Normalization & Schema Design | Functional Dependencies, 1NF → BCNF, Anomalies (Insert/Delete/Update), Denormalization |
| 7-8 | Transactions & Concurrency | ACID Properties, Locking, Isolation Levels, Deadlock Detection, Log-based Recovery |

### Normalization — Step by Step

- **1NF**: Atomic values, no repeating groups
- **2NF**: 1NF + no partial dependency on composite key
- **3NF**: 2NF + no transitive dependency
- **BCNF**: 3NF + every determinant is a candidate key
- **Real example (from source)**:
  ```
  Before: Student_Course(StudentID, StudentName, CourseID, CourseName, Grade, Instructor)
  After 3NF:
    Students(StudentID, StudentName)
    Courses(CourseID, CourseName, Instructor)
    Enrollments(StudentID, CourseID, Grade)
  ```

### ACID Properties Example

- **Atomicity**: All or nothing — transaction ya to fully execute, ya rollback
- **Consistency**: Valid state to valid state — integrity constraints maintain
- **Isolation**: Concurrent transactions don't interfere — serializable by default
- **Durability**: Committed changes persist — even after system crash

### SQL Practice: 50 Problems

| Level | Count | Examples |
|-------|-------|----------|
| Easy | 20 | SELECT, WHERE, ORDER BY, GROUP BY, HAVING, JOINs |
| Medium | 20 | Subquery (2nd highest salary), Self-join, Window Functions, Correlated Subqueries |
| Hard | 10 | Recursive CTE, Dynamic Pivot, Analytical Queries, Transaction Isolation |

### NoSQL Overview

- **Document DB**: MongoDB — JSON-like documents, schema-less
- **Key-Value**: Redis — ultra-fast, caching queen
- **Column-Family**: Cassandra — write-heavy, high availability
- **Graph**: Neo4j — relationships-focused data
- **CAP Theorem**: Consistency, Availability, Partition Tolerance — pick any two

### Key Interview Questions

1. What is normalization? Explain 1NF, 2NF, 3NF, BCNF with example
2. ACID properties explain karo — real transaction example do
3. Write SQL to find second highest salary from Employee table
4. Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
5. What are the anomalies in database design? Insertion, Deletion, Update anomalies explain karo
6. What is indexing? How does B-Tree index work?
7. Explain isolation levels in DBMS — Read Uncommitted to Serializable
8. What is the difference between 3NF and BCNF? Example do
9. How do you handle many-to-many relationships in a relational schema?
10. What is CAP theorem? Explain with MongoDB and RDBMS examples

---

## CN — Computer Networks

**Location**: `placement-original/Main-Course/Placement-01/02-CS-Core/03-CN/COMPLETE_CN_COURSE_INDEX.md` — 8-week course, 500+ practice questions

### Detailed Topic Breakdown (from source)

| Module | Weeks | Topics | Practice |
|--------|-------|--------|----------|
| 1: Network Fundamentals | 1 | Network Types (LAN/WAN/MAN), Topologies, Components | 50 Q + 3 Labs |
| 2: Physical Layer | 2 | Transmission Media, Signal Encoding, Multiplexing, Error Detection | 60 Q + 4 Labs |
| 3: Data Link Layer | 3-4 | Framing, Error Correction, Flow Control, MAC, Ethernet/WiFi | 80 Q + 5 Labs |
| 4: Network Layer | 5-6 | IP Addressing & Subnetting, Routing, IPv4/IPv6, ICMP/ARP/DHCP | 100 Q + 6 Labs |
| 5: Transport Layer | 7 | TCP vs UDP, Port Numbers, Connection Mgmt, Congestion Control | 70 Q + 4 Labs |
| 6: Application Layer | 8 | HTTP/HTTPS, FTP, SMTP, DNS, Socket Programming | 80 Q + 3 Labs |
| 7: Network Security | 9 | Cryptography, SSL/TLS, VPN, Firewalls | 60 Q + 2 Labs |

### Top 20 Interview Topics (from source)

1. OSI vs TCP/IP Model — 7 layers vs 4 layers, comparison
2. TCP vs UDP — connection-oriented vs connectionless, reliability vs speed
3. IP Addressing & Subnetting — classful vs classless, CIDR
4. Routing Protocols — RIP (distance vector), OSPF (link state), BGP (path vector)
5. HTTP vs HTTPS — SSL/TLS encryption, port 80 vs 443
6. DNS Resolution Process — recursive vs iterative query
7. ARP Protocol — IP to MAC address mapping
8. Network Security — Firewall, VPN, Access Control Lists
9. Load Balancing — round-robin, least connections, weighted
10. CDN Working — edge servers, caching, latency reduction

### Key Interview Questions

1. Difference between OSI and TCP/IP model — layer-by-layer comparison
2. TCP 3-way handshake explain karo — SYN, SYN-ACK, ACK with states
3. What happens when you type google.com in browser? Full flow from DNS to HTTP
4. Explain IP subnetting — given IP 192.168.1.0/24, create 4 subnets
5. TCP vs UDP — examples of applications using each (HTTP uses TCP, DNS uses UDP, etc.)
6. What is ARP? How does it resolve IP to MAC address?
7. Difference between hub, switch, and router — collision domain vs broadcast domain
8. Explain sliding window protocol in TCP — flow control and congestion control
9. What are the different types of DNS records? A, AAAA, CNAME, MX, NS
10. How does SSL/TLS handshake work? Certificates, asymmetric to symmetric key exchange

---

## COA — Computer Organization & Architecture

No dedicated folder in source — concepts spread across `placement-original/Main-Course/Placement-01/02-CS-Core/` reference docs. Ye subjects often OS ke saath padhe jaate hain.

### Core Topics

- **Von Neumann Architecture**: CPU, Memory, I/O — single bus, stored program concept
- **CPU Components**: ALU, Control Unit, Registers (PC, IR, MAR, MBR, AC)
- **Memory Hierarchy**: Register > Cache > RAM > Disk (speed cost tradeoff)
- **Cache Memory**: L1/L2/L3, mapping techniques (Direct, Associative, Set-Associative)
- **Pipelining**: 5-stage (IF, ID, EX, MEM, WB), hazards (Structural, Data, Control)
- **Data Representation**: 1's complement, 2's complement, IEEE 754 floating-point
- **Number Systems**: Binary, Octal, Hex, conversions, binary arithmetic
- **Addressing Modes**: Immediate, Direct, Indirect, Register, Indexed

### Key Interview Questions

1. Explain Von Neumann architecture with block diagram
2. What is pipelining? Explain 5-stage pipeline and hazards
3. Difference between RISC and CISC architectures
4. What is cache memory? Explain direct mapping vs associative mapping
5. How negative numbers are stored in memory — 2's complement explanation
6. Explain memory hierarchy and why is it hierarchical?
7. What are the different addressing modes in computer architecture?
8. Explain DMA (Direct Memory Access) — how does it speed up I/O?

---

## TOC — Theory of Computation

Topics spread across reference material. Placement perspective me ye basics kaafi hain.

### Core Topics

- **Automata Theory**: DFA, NFA, epsilon-NFA — state diagrams and conversions
- **Regular Languages**: Regular expressions, pumping lemma
- **Context Free Grammars**: CFG, derivation trees, ambiguity
- **Pushdown Automata**: PDA — NFA + stack
- **Turing Machines**: computational model, decidability, halting problem
- **Chomsky Hierarchy**: Type 0-3 grammars

### Key Interview Questions

1. Difference between DFA and NFA — conversion NFA to DFA
2. What is the pumping lemma for regular languages? Example use
3. Design a DFA that accepts strings ending with "01"
4. What is a Turing Machine? Define formally
5. What is the Halting Problem and why is it undecidable?
6. Explain Chomsky Hierarchy with examples of each type

---

## SE — Software Engineering

**Location**: `placement-original/Main-Course/Placement-01/02-CS-Core/05-SE/Software-Engineering-Complete-Course.md` — 15-week professional program

### Detailed Topic Breakdown (from source)

| Module | Weeks | Topics |
|--------|-------|--------|
| 1: SDLC Models | 1-2 | Waterfall, Agile, Scrum, Kanban |
| 2: Requirements & Design | 3-4 | SRS, Functional vs Non-functional, System Architecture |
| 3: Testing & QA | 5-7 | TDD, BDD, Testing Levels (Unit, Integration, System) |
| 4: Version Control & Collaboration | 8-9 | Git, Branching, Code Review, CI/CD Pipeline |
| 5: Project Management | 10-11 | Estimation, Risk Management, Stakeholder Management |
| 6: Advanced Testing | 12-13 | Performance/Security Testing, Automation Frameworks |
| 7: Design Patterns | 14-15 | Creational (Singleton, Factory), Structural (Adapter, Proxy), Behavioral (Observer, Strategy) |

### Key Interview Questions

1. Waterfall vs Agile — kab kya use karna chahiye?
2. What is SDLC? Phases explain karo
3. Difference between functional and non-functional requirements
4. What are design patterns? Give example of Singleton pattern
5. What is TDD (Test-Driven Development)? Red-Green-Refactor cycle
6. Difference between verification and validation
7. What is CI/CD and why is it important?

---

## 90-Day Plan Alignment

`placement-original/Main-Course/Placement-01/90-Day-Plan/` mein har din ka topic likha hai:

- Days 1-30: DSA basics (arrays, strings, linked lists, stacks, queues, trees)
- Days 31-60: Advanced DSA (DP, graphs) + OS + DBMS
- Days 61-90: CN + System Design + Interview Prep + Mock Interviews

## Checklist

- [ ] DSA ka 12-week plan follow kar raha hoon — arrays se DP tak
- [ ] Arrays ke 50 problems (20E, 20M, 10H) khatam
- [ ] Linked Lists, Stacks, Queues, Trees ki practice kiya
- [ ] Graphs — DFS/BFS, Dijkstra, topological sort
- [ ] DP — memoization, tabulation, knapsack patterns mastered
- [ ] OS ke 4 phases complete — process, memory, storage, virtualization
- [ ] CPU Scheduling algorithms differentiate karte aata hai
- [ ] Deadlock handling — prevention, avoidance, detection sab clear
- [ ] SQL — DDL/DML/DCL, Joins, Subqueries, Window Functions practice
- [ ] Normalization 1NF → BCNF real example ke saath aata hai
- [ ] ACID properties and transaction isolation levels yaad hai
- [ ] CN ke 7 modules — physical layer se security tak cover
- [ ] OSI vs TCP/IP, subnetting, DNS resolution process aata hai
- [ ] COA — pipeline, cache, addressing modes basics clear
- [ ] SE — SDLC models, design patterns, testing types cover kiye
- [ ] 90-day plan ke hisaab se daily topic kar raha hoon
- [ ] Mock interviews dena start kar diya
