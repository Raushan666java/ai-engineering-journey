<div class="module-hero">
  🖥️
  <h1>CS Core — Computer Science Ki Jaan</h1>
  <p>Placement interviews ka backbone. DSA, OS, DBMS, CN, CO, TOC — har company poochti hai. Is module mein 7 subjects ka comprehensive coverage hai.</p>
  <p><span class="tag-hot">7 Subjects</span> <span class="tag-star">500+ Problems</span> <span class="tag-method">Interview Ready</span></p>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 TIP</span>
  Ye module placements ki jaan hai. Har subject ek pillar hai — ek bhi weak mat chhodo. Rozana 2-3 ghante CS Core ko do aur interview-ready ban jao. DSA + OS + DBMS + CN — ye 4 subjects toh har company mandatory poochti hai. Inhe pehle pakka karo!
</div>

<div class="roadmap-path">
  <div class="roadmap-step" data-step="1">
    <h4>DSA — Data Structures &amp; Algorithms</h4>
    <p>12-week mastery — Arrays se DP tak, 500+ problems. Sabse important subject.</p>
  </div>
  <div class="roadmap-step" data-step="2">
    <h4>OS — Operating Systems</h4>
    <p>16-week A to Z course — Process, Memory, Deadlocks, Virtualization, Security.</p>
  </div>
  <div class="roadmap-step" data-step="3">
    <h4>DBMS — Database Management Systems</h4>
    <p>8-week course — SQL, Normalization, Transactions, NoSQL, CAP Theorem.</p>
  </div>
  <div class="roadmap-step" data-step="4">
    <h4>CN — Computer Networks</h4>
    <p>8-week course — OSI, TCP/IP, Subnetting, Routing, Network Security.</p>
  </div>
  <div class="roadmap-step" data-step="5">
    <h4>COA — Computer Organization &amp; Architecture</h4>
    <p>Pipeline, Cache, Addressing Modes, Data Representation.</p>
  </div>
  <div class="roadmap-step" data-step="6">
    <h4>TOC — Theory of Computation</h4>
    <p>Automata, Grammars, Turing Machines, Chomsky Hierarchy basics.</p>
  </div>
  <div class="roadmap-step" data-step="7">
    <h4>SE — Software Engineering</h4>
    <p>15-week program — SDLC, Testing, Design Patterns, CI/CD.</p>
  </div>
</div>

---

## DSA — Data Structures & Algorithms

**Duration**: 12-week mastery plan

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Week</th><th>Topic</th><th>Key Patterns</th><th>Problems</th></tr>
</thead>
<tbody>
<tr><td>1-2</td><td>Arrays &amp; Strings</td><td>Two Pointers, Sliding Window, Prefix/Suffix Arrays</td><td>50 (20E, 20M, 10H)</td></tr>
<tr><td>3</td><td>Linked Lists</td><td>Fast &amp; Slow Pointers, Reverse, Cycle Detection</td><td>25</td></tr>
<tr><td>4</td><td>Stacks &amp; Queues</td><td>Monotonic Stack, Expression Evaluation, BFS</td><td>25</td></tr>
<tr><td>5-6</td><td>Trees</td><td>Recursive Traversals, Level-order, BST Ops, Path Sum</td><td>40</td></tr>
<tr><td>7-8</td><td>Graphs</td><td>DFS/BFS, Dijkstra, Topological Sort, Union-Find, MST</td><td>40</td></tr>
<tr><td>9-10</td><td>Dynamic Programming</td><td>Memoization vs Tabulation, 1D/2D DP, LCS, KnapSack</td><td>40</td></tr>
<tr><td>11-12</td><td>Advanced</td><td>Tries, Segment Trees, BIT, Advanced Sorting</td><td>30</td></tr>
</tbody>
</table>

### Practice Target

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

- **Handwritten DSA Notes**: Available in PDF References
- **DSA Summary**: Complete DSA Practice Summary (500+ problems mapped)

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

**Duration**: 16-week A to Z course

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Phase</th><th>Modules</th><th>Key Concepts</th></tr>
</thead>
<tbody>
<tr><td>Phase 1: OS Foundations (Weeks 1-4)</td><td>OS Intro, System Architecture, Process Mgmt, Threading</td><td>System Calls, Process States, Context Switching, IPC</td></tr>
<tr><td>Phase 2: Core Concepts (Weeks 5-8)</td><td>CPU Scheduling, Process Sync, Deadlocks, Memory Mgmt</td><td>Scheduling Algorithms, Semaphores, Deadlock Prevention, Fragmentation</td></tr>
<tr><td>Phase 3: Advanced Memory &amp; Storage (Weeks 9-12)</td><td>Virtual Memory, File Systems, Storage Mgmt, I/O Systems</td><td>Demand Paging, Page Replacement, Disk Scheduling, RAID</td></tr>
<tr><td>Phase 4: Modern OS Concepts (Weeks 13-16)</td><td>Security, Distributed Systems, Virtualization, Modern Topics</td><td>Access Control, Distributed FS, Hypervisors, RTOS</td></tr>
</tbody>
</table>

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

**Duration**: 8-week complete course

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Weeks</th><th>Module</th><th>Core Concepts</th></tr>
</thead>
<tbody>
<tr><td>1-2</td><td>Database Fundamentals &amp; ER Modeling</td><td>DBMS vs File Systems, ER Diagrams, Entities/Attributes, Cardinality, Weak Entities</td></tr>
<tr><td>3-4</td><td>Relational Model &amp; SQL</td><td>Keys (Primary, Foreign, Candidate), DDL/DML/DCL/TCL, Joins, Subqueries, Window Functions</td></tr>
<tr><td>5-6</td><td>Normalization &amp; Schema Design</td><td>Functional Dependencies, 1NF → BCNF, Anomalies (Insert/Delete/Update), Denormalization</td></tr>
<tr><td>7-8</td><td>Transactions &amp; Concurrency</td><td>ACID Properties, Locking, Isolation Levels, Deadlock Detection, Log-based Recovery</td></tr>
</tbody>
</table>

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

<table class="table-dash">
<thead>
<tr><th>Level</th><th>Count</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td>Easy</td><td>20</td><td>SELECT, WHERE, ORDER BY, GROUP BY, HAVING, JOINs</td></tr>
<tr><td>Medium</td><td>20</td><td>Subquery (2nd highest salary), Self-join, Window Functions, Correlated Subqueries</td></tr>
<tr><td>Hard</td><td>10</td><td>Recursive CTE, Dynamic Pivot, Analytical Queries, Transaction Isolation</td></tr>
</tbody>
</table>

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

**Duration**: 8-week course, 500+ practice questions

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Module</th><th>Weeks</th><th>Topics</th><th>Practice</th></tr>
</thead>
<tbody>
<tr><td>1: Network Fundamentals</td><td>1</td><td>Network Types (LAN/WAN/MAN), Topologies, Components</td><td>50 Q + 3 Labs</td></tr>
<tr><td>2: Physical Layer</td><td>2</td><td>Transmission Media, Signal Encoding, Multiplexing, Error Detection</td><td>60 Q + 4 Labs</td></tr>
<tr><td>3: Data Link Layer</td><td>3-4</td><td>Framing, Error Correction, Flow Control, MAC, Ethernet/WiFi</td><td>80 Q + 5 Labs</td></tr>
<tr><td>4: Network Layer</td><td>5-6</td><td>IP Addressing &amp; Subnetting, Routing, IPv4/IPv6, ICMP/ARP/DHCP</td><td>100 Q + 6 Labs</td></tr>
<tr><td>5: Transport Layer</td><td>7</td><td>TCP vs UDP, Port Numbers, Connection Mgmt, Congestion Control</td><td>70 Q + 4 Labs</td></tr>
<tr><td>6: Application Layer</td><td>8</td><td>HTTP/HTTPS, FTP, SMTP, DNS, Socket Programming</td><td>80 Q + 3 Labs</td></tr>
<tr><td>7: Network Security</td><td>9</td><td>Cryptography, SSL/TLS, VPN, Firewalls</td><td>60 Q + 2 Labs</td></tr>
</tbody>
</table>

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

No dedicated folder in source — concepts spread across reference docs. Ye subjects often OS ke saath padhe jaate hain.

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

**Duration**: 15-week professional program

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Module</th><th>Weeks</th><th>Topics</th></tr>
</thead>
<tbody>
<tr><td>1: SDLC Models</td><td>1-2</td><td>Waterfall, Agile, Scrum, Kanban</td></tr>
<tr><td>2: Requirements &amp; Design</td><td>3-4</td><td>SRS, Functional vs Non-functional, System Architecture</td></tr>
<tr><td>3: Testing &amp; QA</td><td>5-7</td><td>TDD, BDD, Testing Levels (Unit, Integration, System)</td></tr>
<tr><td>4: Version Control &amp; Collaboration</td><td>8-9</td><td>Git, Branching, Code Review, CI/CD Pipeline</td></tr>
<tr><td>5: Project Management</td><td>10-11</td><td>Estimation, Risk Management, Stakeholder Management</td></tr>
<tr><td>6: Advanced Testing</td><td>12-13</td><td>Performance/Security Testing, Automation Frameworks</td></tr>
<tr><td>7: Design Patterns</td><td>14-15</td><td>Creational (Singleton, Factory), Structural (Adapter, Proxy), Behavioral (Observer, Strategy)</td></tr>
</tbody>
</table>

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

90-Day Plan mein har din ka topic likha hai:

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

---

## Notes

<div id="page-notes"></div>
