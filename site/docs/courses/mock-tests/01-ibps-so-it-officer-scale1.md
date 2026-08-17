---
id: 01-ibps-so-it-officer-scale1
slug: /mock-tests/01-ibps-so-it-officer-scale1
title: "IBPS SO IT Officer Scale 1 — Full-Length Mock Test"
sidebar_label: "IBPS SO IT Officer Scale 1 — Full-Length Mock Test"
sidebar_position: 1
---
# IBPS SO IT Officer Scale 1 — Full-Length Mock Test

> **Exam:** IBPS Specialist Officer (SO) — IT Officer Scale 1  
> **Total Questions:** 175 | **Duration:** 120 minutes | **Max Marks:** 175  
> **Negative Marking:** 0.25 per wrong answer

---
## Test Pattern

| Section | Questions | Marks | Duration |
|---------|-----------|-------|----------|
| Professional Knowledge (IT) | 60 | 60 | 45 min |
| Reasoning Ability | 45 | 45 | 40 min |
| English Language | 35 | 35 | 25 min |
| Quantitative Aptitude | 35 | 35 | 25 min |
| **Total** | **175** | **175** | **120 min** |

---

## Sectional Cutoff (Expected)

| Section | General | OBC | SC | ST |
|---------|---------|-----|----|----|
| Professional Knowledge | 15/60 | 13/60 | 10/60 | 8/60 |
| Reasoning | 9/45 | 8/45 | 6/45 | 5/45 |
| English | 7/35 | 6/35 | 5/35 | 4/35 |
| Quantitative Aptitude | 7/35 | 6/35 | 5/35 | 4/35 |
| **Overall** | **53/175** | **48/175** | **38/175** | **32/175** |

---

## Timing Guidelines

| Section | Recommended Time | Min per Question | Strategy |
|---------|-----------------|------------------|----------|
| Professional Knowledge | 40 min | 40 sec | Answer technical questions first |
| Reasoning | 35 min | 47 sec | Puzzles first, then quick topics |
| English | 20 min | 34 sec | RC first, grammar next |
| Quantitative Aptitude | 25 min | 43 sec | DI first, arithmetic next |
| Buffer | 10 min | — | Review marked questions |


---

## Section 1: Professional Knowledge (60 Questions)

**Topic Weightage:** DBMS (12), Computer Networks (10), Operating Systems (10), Data Structures (8), Software Engineering (6), OOP Concepts (6), Web Technologies (4), Cloud Computing (2), Cyber Security (2)

---

### Q1. [MCQ] | 1 Mark | DBMS

**Which of the following normal forms is violated if a non-prime attribute is transitively dependent on a candidate key?**

A) 1NF  
B) 2NF  
C) 3NF  
D) BCNF

<details>
<summary>Show Answer</summary>

**Answer:** C) 3NF

**Explanation:** 3NF requires that every non-prime attribute is non-transitively dependent on every candidate key. If there is a transitive dependency (A -> B -> C where C is non-prime, B is non-prime, and A is a candidate key), then 3NF is violated. The table is in 2NF but not in 3NF.

**Key Takeaway:** 3NF eliminates transitive dependencies of non-prime attributes on candidate keys. BCNF is stricter — it requires every determinant to be a candidate key.
</details>

---

### Q2. [MCQ] | 1 Mark | DBMS

**In a B+ tree index, which of the following statements is TRUE?**

A) All keys appear in both internal and leaf nodes  
B) Leaf nodes contain pointers to data records  
C) Internal nodes store data records  
D) Leaf nodes are not linked to each other

<details>
<summary>Show Answer</summary>

**Answer:** B) Leaf nodes contain pointers to data records

**Explanation:** In a B+ tree, internal nodes serve as routers containing only keys, while all actual data pointers are stored in the leaf nodes. Leaf nodes are linked together sequentially, enabling efficient range queries.

**Key Takeaway:** B+ trees separate routing (internal nodes) from data (leaf nodes), with linked leaf nodes for efficient range scanning.
</details>

---

### Q3. [MCQ] | 1 Mark | DBMS

**Consider a relation R(A, B, C, D, E) with functional dependencies: A -> B, A -> C, BC -> D, D -> E. What is the candidate key of R?**

A) A  
B) BC  
C) A, BC  
D) AB

<details>
<summary>Show Answer</summary>

**Answer:** A) A

**Explanation:** A determines B and C. BC determines D, and D determines E. A -> B, A -> C, from BC -> D we get A -> D (since A determines B and C), D -> E, so A -> E. Thus A determines all attributes. So A alone is the candidate key.

**Key Takeaway:** A candidate key is the minimal set of attributes that can determine all attributes in a relation.
</details>

---

### Q4. [MCQ] | 1 Mark | DBMS

**Which isolation level in SQL ensures that a transaction reads only committed data but may get non-repeatable reads?**

A) READ UNCOMMITTED  
B) READ COMMITTED  
C) REPEATABLE READ  
D) SERIALIZABLE

<details>
<summary>Show Answer</summary>

**Answer:** B) READ COMMITTED

**Explanation:** READ COMMITTED ensures that any read operation reads only committed data. However, if you read the same row twice, another transaction could update and commit between the two reads, causing a non-repeatable read.

**Key Takeaway:** READ COMMITTED prevents dirty reads but allows non-repeatable reads and phantom reads.
</details>

---

### Q5. [MCQ] | 1 Mark | DBMS

**Which of the following schedules is NOT conflict serializable?**

A) R1(A), W2(A), R1(B), W2(B)  
B) R1(A), R2(A), W1(A), W2(A)  
C) R1(A), W1(A), R2(A), W2(A)  
D) R1(A), R2(A), R2(B), R1(B)

<details>
<summary>Show Answer</summary>

**Answer:** B) R1(A), R2(A), W1(A), W2(A)

**Explanation:** In schedule B, R1(A) and W2(A) conflict -> T1 -> T2. R2(A) and W1(A) conflict -> T2 -> T1. This creates a cycle T1 -> T2 and T2 -> T1, so the schedule is NOT conflict serializable.

**Key Takeaway:** Check conflict serializability using a precedence graph — a cycle means the schedule is not conflict serializable.
</details>

---

### Q6. [MCQ] | 1 Mark | DBMS

**Which of the following is NOT an ACID property of a transaction?**

A) Atomicity  
B) Consistency  
C) Isolation  
D) Integration

<details>
<summary>Show Answer</summary>

**Answer:** D) Integration

**Explanation:** ACID stands for Atomicity, Consistency, Isolation, Durability. "Integration" is not an ACID property.

**Key Takeaway:** ACID = Atomicity, Consistency, Isolation, Durability — the four fundamental properties of database transactions.
</details>

---

### Q7. [MCQ] | 1 Mark | DBMS

**Which SQL statement removes all rows from a table without removing the table structure?**

A) DELETE  
B) DROP  
C) TRUNCATE  
D) REMOVE

<details>
<summary>Show Answer</summary>

**Answer:** C) TRUNCATE

**Explanation:** TRUNCATE removes all rows but preserves the table structure. It is faster than DELETE because it does not generate individual row delete logs. DROP removes the entire table structure.

**Key Takeaway:** TRUNCATE is DDL (fast, no rollback in some DBMS); DELETE is DML (slower, row-by-row, can be rolled back).
</details>

---

### Q8. [MCQ] | 1 Mark | DBMS

**In ER diagrams, which symbol represents a weak entity?**

A) Rectangle  
B) Ellipse  
C) Double rectangle  
D) Diamond

<details>
<summary>Show Answer</summary>

**Answer:** C) Double rectangle

**Explanation:** Weak entities are shown with a double rectangle. Regular entities use a single rectangle. Attributes use ellipses. Relationships use diamonds.

**Key Takeaway:** Double rectangle = weak entity (depends on strong entity); single rectangle = strong entity.
</details>

---

### Q9. [MCQ] | 1 Mark | DBMS

**Which normal form eliminates partial dependencies?**

A) 1NF  
B) 2NF  
C) 3NF  
D) BCNF

<details>
<summary>Show Answer</summary>

**Answer:** B) 2NF

**Explanation:** 2NF requires the relation to be in 1NF and every non-prime attribute to be fully functionally dependent on the candidate key (no partial dependency). Partial dependency occurs when a non-key attribute depends on only part of a composite key.

**Key Takeaway:** 2NF eliminates partial dependencies; 3NF eliminates transitive dependencies; BCNF requires every determinant to be a candidate key.
</details>

---

### Q10. [MCQ] | 1 Mark | DBMS

**Which decomposition of R(A, B, C, D) with FDs: A -> B, A -> C, B -> D is lossless join?**

A) R1(A,B), R2(A,C), R3(B,D)  
B) R1(A,B,C), R2(A,D)  
C) R1(A,B), R2(C,D)  
D) R1(A,B,C), R2(B,D)

<details>
<summary>Show Answer</summary>

**Answer:** D) R1(A,B,C), R2(B,D)

**Explanation:** R1 intersection R2 = {B}. B is a candidate key in R2(B,D) because B -> D. Thus the decomposition is lossless join.

**Key Takeaway:** A decomposition is lossless if the common attributes form a candidate key in at least one of the decomposed relations.
</details>

---

### Q11. [MCQ] | 1 Mark | Computer Networks

**Which OSI layer handles routing and logical addressing?**

A) Data Link Layer  
B) Network Layer  
C) Transport Layer  
D) Session Layer

<details>
<summary>Show Answer</summary>

**Answer:** B) Network Layer

**Explanation:** The Network Layer (Layer 3) handles routing and IP addressing. Data Link (Layer 2) handles MAC addresses. Transport (Layer 4) handles end-to-end communication.

**Key Takeaway:** OSI Layers: Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application.
</details>

---

### Q12. [MCQ] | 1 Mark | Computer Networks

**Which protocol maps IP addresses to MAC addresses?**

A) DNS  
B) ARP  
C) DHCP  
D) ICMP

<details>
<summary>Show Answer</summary>

**Answer:** B) ARP (Address Resolution Protocol)

**Explanation:** ARP maps IP to MAC within a local network. DNS maps domain names to IP. DHCP assigns IP addresses dynamically. ICMP handles error reporting and diagnostics.

**Key Takeaway:** ARP = IP to MAC; RARP = MAC to IP; DNS = Domain to IP.
</details>

---

### Q13. [MCQ] | 1 Mark | Computer Networks

**In TCP/IP, which layer corresponds to OSI Network layer?**

A) Application Layer  
B) Transport Layer  
C) Internet Layer  
D) Network Access Layer

<details>
<summary>Show Answer</summary>

**Answer:** C) Internet Layer

**Explanation:** TCP/IP Internet Layer handles IP addressing and routing, corresponding to OSI Network Layer. TCP/IP has 4 layers: Application, Transport, Internet, Network Access.

**Key Takeaway:** TCP/IP Internet Layer = OSI Network Layer; TCP/IP Transport Layer = OSI Transport Layer.
</details>

---

### Q14. [MCQ] | 1 Mark | Computer Networks

**Which switching technique is used in traditional telephone networks?**

A) Circuit Switching  
B) Packet Switching  
C) Message Switching  
D) Virtual Circuit Switching

<details>
<summary>Show Answer</summary>

**Answer:** A) Circuit Switching

**Explanation:** Traditional telephone networks use circuit switching, establishing a dedicated path for the call duration. Modern data networks use packet switching.

**Key Takeaway:** Circuit switching = dedicated path, constant bandwidth; Packet switching = shared path, variable bandwidth.
</details>

---

### Q15. [MCQ] | 1 Mark | Computer Networks

**Which of the following is a Class B IP address?**

A) 10.0.0.1  
B) 172.16.0.1  
C) 192.168.1.1  
D) 224.0.0.1

<details>
<summary>Show Answer</summary>

**Answer:** B) 172.16.0.1

**Explanation:** Class B ranges from 128.0.0.0 to 191.255.255.255. 172.16.0.1 falls within this range. 10.0.0.1 is Class A, 192.168.1.1 is Class C, 224.0.0.1 is Class D (multicast).

**Key Takeaway:** Class A: 1-126, Class B: 128-191, Class C: 192-223, Class D: 224-239, Class E: 240-255.
</details>

---

### Q16. [MCQ] | 1 Mark | Computer Networks

**Which HTTP status code means "Not Found"?**

A) 200  
B) 301  
C) 401  
D) 404

<details>
<summary>Show Answer</summary>

**Answer:** D) 404

**Explanation:** 404 = Not Found. 200 = OK. 301 = Moved Permanently. 401 = Unauthorized.

**Key Takeaway:** 2xx = Success, 3xx = Redirection, 4xx = Client Error, 5xx = Server Error.
</details>

---

### Q17. [MCQ] | 1 Mark | Computer Networks

**Which protocol provides reliable, connection-oriented data transfer?**

A) UDP  
B) IP  
C) TCP  
D) HTTP

<details>
<summary>Show Answer</summary>

**Answer:** C) TCP

**Explanation:** TCP provides reliable, ordered, connection-oriented transfer with acknowledgments and retransmission. UDP is connectionless and unreliable but faster.

**Key Takeaway:** TCP = reliable, ordered, slower; UDP = unreliable, unordered, faster. Choose based on application needs.
</details>

---

### Q18. [MCQ] | 1 Mark | Computer Networks

**What is the maximum segment length of 10Base-T Ethernet?**

A) 100 meters  
B) 185 meters  
C) 500 meters  
D) 200 meters

<details>
<summary>Show Answer</summary>

**Answer:** A) 100 meters

**Explanation:** 10Base-T (twisted pair) max length = 100m. 10Base-2 (thin coax) = 185m. 10Base-5 (thick coax) = 500m.

**Key Takeaway:** The number before "Base" is speed in Mbps; the indicator after "Base" denotes the medium type and length.
</details>

---

### Q19. [MCQ] | 1 Mark | Computer Networks

**Which device connects different network types and operates at Layer 3?**

A) Hub  
B) Switch  
C) Router  
D) Bridge

<details>
<summary>Show Answer</summary>

**Answer:** C) Router

**Explanation:** Routers operate at Layer 3 (Network) and can connect different network types. Hubs = Layer 1, Switches/Bridges = Layer 2.

**Key Takeaway:** Hub = L1, Switch/Bridge = L2, Router = L3, Gateway = L4-L7.
</details>

---

### Q20. [MCQ] | 1 Mark | Computer Networks

**What is the subnet mask for a /27 CIDR notation?**

A) 255.255.255.0  
B) 255.255.255.224  
C) 255.255.255.240  
D) 255.255.255.192

<details>
<summary>Show Answer</summary>

**Answer:** B) 255.255.255.224

**Explanation:** /27 means 27 network bits = 11111111.11111111.11111111.11100000 = 255.255.255.224. This gives 2^5 - 2 = 30 usable hosts.

**Key Takeaway:** /24 = 256 IPs, /25 = 128, /26 = 64, /27 = 32, /28 = 16, /29 = 8, /30 = 4.
</details>

---

### Q21. [MCQ] | 1 Mark | Operating Systems

**Which scheduling algorithm is preemptive?**

A) FCFS  
B) SJF (non-preemptive)  
C) Round Robin  
D) Priority (non-preemptive)

<details>
<summary>Show Answer</summary>

**Answer:** C) Round Robin

**Explanation:** Round Robin is preemptive — the CPU is taken away after the time quantum expires. FCFS is non-preemptive. SJF and Priority can be either.

**Key Takeaway:** Preemptive = can interrupt running process; Non-preemptive = waits for voluntary release.
</details>

---

### Q22. [MCQ] | 1 Mark | Operating Systems

**Which memory management technique causes external fragmentation?**

A) Paging  
B) Segmentation  
C) Virtual memory  
D) Demand paging

<details>
<summary>Show Answer</summary>

**Answer:** B) Segmentation

**Explanation:** Segmentation causes external fragmentation because variable-size segments create memory holes. Paging uses fixed-size pages eliminating external fragmentation but causing internal fragmentation.

**Key Takeaway:** Paging -> internal fragmentation; Segmentation -> external fragmentation.
</details>

---

### Q23. [MCQ] | 1 Mark | Operating Systems

**Breaking which deadlock condition involves forcibly preempting a resource?**

A) Mutual Exclusion  
B) Hold and Wait  
C) No Preemption  
D) Circular Wait

<details>
<summary>Show Answer</summary>

**Answer:** C) No Preemption

**Explanation:** The four deadlock conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Breaking No Preemption allows the OS to forcibly take resources from a process.

**Key Takeaway:** To prevent deadlock, break any one of the four conditions. Preemption directly addresses condition #3.
</details>

---

### Q24. [MCQ] | 1 Mark | Operating Systems

**Which page replacement algorithm suffers from Belady's Anomaly?**

A) Optimal  
B) LRU  
C) FIFO  
D) LFU

<details>
<summary>Show Answer</summary>

**Answer:** C) FIFO

**Explanation:** Belady's Anomaly is when increasing page frames increases page faults. Only FIFO exhibits this among basic algorithms. Optimal and LRU are stack algorithms immune to this anomaly.

**Key Takeaway:** FIFO is simple but can behave counterintuitively under certain reference patterns.
</details>

---

### Q25. [MCQ] | 1 Mark | Operating Systems

**What is the purpose of a system call?**

A) To compile a program  
B) To interface between user programs and the OS kernel  
C) To manage file systems only  
D) To boot the computer

<details>
<summary>Show Answer</summary>

**Answer:** B) To provide an interface between user programs and the OS kernel

**Explanation:** System calls allow user-space programs to request kernel services like file operations, process control, and communication.

**Key Takeaway:** System calls switch from user mode to kernel mode; they are the API between programs and the OS.
</details>

---

### Q26. [MCQ] | 1 Mark | Operating Systems

**Which is NOT a process state?**

A) New  
B) Ready  
C) Running  
D) Compiled

<details>
<summary>Show Answer</summary>

**Answer:** D) Compiled

**Explanation:** Standard process states: New, Ready, Running, Blocked/Waiting, Terminated. "Compiled" is not a process state.

**Key Takeaway:** Process lifecycle: New -> Ready -> Running -> Waiting -> Terminated.
</details>

---

### Q27. [MCQ] | 1 Mark | Operating Systems

**Which disk scheduling algorithm treats the disk as a circular buffer?**

A) FCFS  
B) SSTF  
C) SCAN  
D) C-SCAN

<details>
<summary>Show Answer</summary>

**Answer:** D) C-SCAN (Circular SCAN)

**Explanation:** C-SCAN moves the head in one direction servicing requests, then jumps back to the start. This provides uniform waiting time.

**Key Takeaway:** SCAN = elevator (back and forth); C-SCAN = one direction then jump back.
</details>

---

### Q28. [MCQ] | 1 Mark | Operating Systems

**Virtual address size in a 32-bit system?**

A) 16 bits  
B) 32 bits  
C) 64 bits  
D) 128 bits

<details>
<summary>Show Answer</summary>

**Answer:** B) 32 bits

**Explanation:** 32-bit systems have 32-bit virtual addresses, allowing 2^32 = 4 GB virtual address space per process.

**Key Takeaway:** Address width determines maximum addressable memory: 2^(address bits) bytes.
</details>

---

### Q29. [MCQ] | 1 Mark | Operating Systems

**Which is a method to handle deadlocks?**

A) Deadlock Prevention  
B) Deadlock Avoidance  
C) Deadlock Detection and Recovery  
D) All of the above

<details>
<summary>Show Answer</summary>

**Answer:** D) All of the above

**Explanation:** Prevention (break a condition), Avoidance (Banker's Algorithm), Detection and Recovery (detect and resolve) are all valid deadlock handling methods.

**Key Takeaway:** Prevention is strictest; Avoidance is more flexible; Detection allows deadlocks but resolves them.
</details>

---

### Q30. [MCQ] | 1 Mark | Operating Systems

**What is a semaphore?**

A) A CPU scheduling algorithm  
B) A synchronization primitive for shared resource access  
C) A memory management unit  
D) A file system structure

<details>
<summary>Show Answer</summary>

**Answer:** B) A synchronization primitive for controlling access to shared resources

**Explanation:** A semaphore is an integer variable with atomic wait() and signal() operations. Binary semaphores (mutexes) handle mutual exclusion. Counting semaphores manage resource pools.

**Key Takeaway:** Semaphores prevent race conditions via atomic P(wait) and V(signal) operations.
</details>

---

### Q31. [MCQ] | 1 Mark | Data Structures

**Time complexity of searching in a balanced BST?**

A) O(1)  
B) O(log n)  
C) O(n)  
D) O(n^2)

<details>
<summary>Show Answer</summary>

**Answer:** B) O(log n)

**Explanation:** Balanced BST (AVL, Red-Black) height = O(log n), so search = O(log n). Unbalanced BST worst case = O(n).

**Key Takeaway:** Balanced BST guarantees O(log n) for search, insert, and delete.
</details>

---

### Q32. [MCQ] | 1 Mark | Data Structures

**Best data structure for a priority queue?**

A) Array  
B) Linked List  
C) Heap  
D) Stack

<details>
<summary>Show Answer</summary>

**Answer:** C) Heap

**Explanation:** Heap provides O(log n) insertion and O(log n) deletion of highest priority element. Arrays/linked lists need O(n) to find the max priority element.

**Key Takeaway:** Heaps give the best balance of efficiency for priority queue operations.
</details>

---

### Q33. [MCQ] | 1 Mark | Data Structures

**Which traversal visits Left, Root, Right?**

A) Preorder  
B) Inorder  
C) Postorder  
D) Level order

<details>
<summary>Show Answer</summary>

**Answer:** B) Inorder

**Explanation:** Inorder = L -> Root -> R. Preorder = Root -> L -> R. Postorder = L -> R -> Root. Level order = BFS.

**Key Takeaway:** Inorder traversal of a BST gives sorted ascending order.
</details>

---

### Q34. [MCQ] | 1 Mark | Data Structures

**Maximum nodes in a binary tree of height h?**

A) 2^h  
B) 2^h - 1  
C) 2^(h-1)  
D) h^2

<details>
<summary>Show Answer</summary>

**Answer:** B) 2^h - 1

**Explanation:** Level 0: 1, Level 1: 2, Level 2: 4, ..., Level h-1: 2^(h-1). Sum = 2^h - 1 (geometric series).

**Key Takeaway:** Nodes double at each level; a full binary tree maximizes nodes for a given height.
</details>

---

### Q35. [MCQ] | 1 Mark | Data Structures

**Which collision resolution stores all keys in the hash table itself?**

A) Separate Chaining  
B) Open Addressing  
C) Double Hashing  
D) Both B and C

<details>
<summary>Show Answer</summary>

**Answer:** D) Both B and C

**Explanation:** Open Addressing stores all elements in the table array. It uses probing (linear, quadratic, double hashing). Separate Chaining uses linked lists for collisions.

**Key Takeaway:** Open Addressing = store in table, probe on collision; Separate Chaining = linked lists.
</details>

---

### Q36. [MCQ] | 1 Mark | Data Structures

**Worst-case time complexity of quicksort?**

A) O(n log n)  
B) O(n)  
C) O(n^2)  
D) O(log n)

<details>
<summary>Show Answer</summary>

**Answer:** C) O(n^2)

**Explanation:** Quicksort worst case = O(n^2) when pivot selection causes unbalanced partitions (e.g., sorted array with first element as pivot). Average case = O(n log n).

**Key Takeaway:** Use randomized pivot or median-of-three to avoid worst-case O(n^2).
</details>

---

### Q37. [MCQ] | 1 Mark | Data Structures

**Which data structure uses LIFO?**

A) Queue  
B) Stack  
C) Deque  
D) Priority Queue

<details>
<summary>Show Answer</summary>

**Answer:** B) Stack

**Explanation:** Stack = LIFO (Last In First Out). Queue = FIFO. Deque = both ends. Priority Queue = highest priority first.

**Key Takeaway:** Stack applications: function calls, undo; Queue applications: BFS, scheduling.
</details>

---

### Q38. [MCQ] | 1 Mark | Data Structures

**Edges in a complete graph with n vertices?**

A) n  
B) n(n-1)/2  
C) n^2  
D) n-1

<details>
<summary>Show Answer</summary>

**Answer:** B) n(n-1)/2

**Explanation:** Each of n vertices connects to n-1 others, and each edge counted twice: n(n-1)/2.

**Key Takeaway:** Complete graph K_n has maximum possible edges = n(n-1)/2.
</details>

---

### Q39. [MCQ] | 1 Mark | Software Engineering

**Which SDLC model suits well-defined requirements?**

A) Waterfall  
B) Spiral  
C) Agile  
D) RAD

<details>
<summary>Show Answer</summary>

**Answer:** A) Waterfall

**Explanation:** Waterfall works when requirements are clear and stable. It follows linear flow: Requirements -> Design -> Implementation -> Testing -> Deployment.

**Key Takeaway:** Waterfall = rigid, plan-driven; Agile = flexible, iterative.
</details>

---

### Q40. [MCQ] | 1 Mark | Software Engineering

**What does UML stand for?**

A) Unified Modeling Language  
B) Universal Markup Language  
C) Unified Machine Language  
D) Universal Modeling Language

<details>
<summary>Show Answer</summary>

**Answer:** A) Unified Modeling Language

**Explanation:** UML is a standardized modeling language with 14 diagram types for visualizing software system design.

**Key Takeaway:** UML has structural (class, component) and behavioral (use case, sequence, activity) diagrams.
</details>

---

### Q41. [MCQ] | 1 Mark | Software Engineering

**Which testing checks internal code logic?**

A) Black Box Testing  
B) White Box Testing  
C) Grey Box Testing  
D) Acceptance Testing

<details>
<summary>Show Answer</summary>

**Answer:** B) White Box Testing

**Explanation:** White box (structural) testing examines internal code paths, logic, and implementation. Black box tests functionality without code knowledge.

**Key Takeaway:** White box = internal/code; Black box = external/functionality; Grey box = combination.
</details>

---

### Q42. [MCQ] | 1 Mark | Software Engineering

**Purpose of a UML use case diagram?**

A) Show physical architecture  
B) Illustrate interactions between actors and the system  
C) Display message sequences between objects  
D) Represent class static structure

<details>
<summary>Show Answer</summary>

**Answer:** B) Illustrate interactions between actors and the system

**Explanation:** Use case diagrams capture functional requirements by showing actors and use cases. Sequence diagrams show message flow. Class diagrams show static structure.

**Key Takeaway:** Use case diagrams answer "what does the system do?" from an external perspective.
</details>

---

### Q43. [MCQ] | 1 Mark | Software Engineering

**Which agile methodology uses time-boxed sprints?**

A) Kanban  
B) Scrum  
C) XP  
D) Lean

<details>
<summary>Show Answer</summary>

**Answer:** B) Scrum

**Explanation:** Scrum uses sprints (2-4 weeks) with daily stand-ups, sprint planning, review, and retrospectives.

**Key Takeaway:** Scrum = sprints + roles (PO, SM, Dev Team) + artifacts (Backlogs, Increment).
</details>

---

### Q44. [MCQ] | 1 Mark | Software Engineering

**Purpose of a version control system?**

A) Manage budgets  
B) Track changes and coordinate multiple developers  
C) Compile source code  
D) Deploy applications

<details>
<summary>Show Answer</summary>

**Answer:** B) Track changes and coordinate work among multiple developers

**Explanation:** VCS (Git, SVN) tracks revisions, enables branching/merging, maintains history, and facilitates collaboration.

**Key Takeaway:** VCS = history + collaboration + branching/merging + backup.
</details>

---

### Q45. [MCQ] | 1 Mark | OOP Concepts

**Which OOP principle allows a class to inherit from another?**

A) Encapsulation  
B) Polymorphism  
C) Inheritance  
D) Abstraction

<details>
<summary>Show Answer</summary>

**Answer:** C) Inheritance

**Explanation:** Inheritance lets child classes acquire parent properties/behaviors. Encapsulation hides state. Polymorphism allows multiple forms. Abstraction hides implementation.

**Key Takeaway:** Java: extends for class, implements for interface. C++: : for both.
</details>

---

### Q46. [MCQ] | 1 Mark | OOP Concepts

**Which is NOT a polymorphism type in C++?**

A) Compile-time polymorphism  
B) Runtime polymorphism  
C) Data polymorphism  
D) Function overloading

<details>
<summary>Show Answer</summary>

**Answer:** C) Data polymorphism

**Explanation:** C++ supports compile-time (overloading) and runtime (virtual functions) polymorphism. "Data polymorphism" is not recognized.

**Key Takeaway:** Compile-time = early binding; Runtime = late binding via virtual functions.
</details>

---

### Q47. [MCQ] | 1 Mark | OOP Concepts

**What is a virtual function in C++?**

A) Function that cannot be overridden  
B) Resolved at compile time  
C) Can be overridden in derived classes, resolved at runtime  
D) A static class function

<details>
<summary>Show Answer</summary>

**Answer:** C) A function that can be overridden in derived classes and resolved at runtime

**Explanation:** Virtual functions enable runtime polymorphism. The correct function is called based on the actual object type, not the pointer type.

**Key Takeaway:** irtual = dynamic binding; pure virtual = abstract class; override keyword helps catch errors.
</details>

---

### Q48. [MCQ] | 1 Mark | OOP Concepts

**Which access specifier restricts access to within the same class only?**

A) public  
B) private  
C) protected  
D) internal

<details>
<summary>Show Answer</summary>

**Answer:** B) private

**Explanation:** Private members accessible only within the defining class. Public = everywhere. Protected = class + derived classes.

**Key Takeaway:** private < protected < public. Use private as default for encapsulation.
</details>

---

### Q49. [MCQ] | 1 Mark | OOP Concepts

**What is the diamond problem?**

A) Multiple inheritance classes sharing a common base  
B) Circular class dependencies  
C) Memory allocation issues  
D) Design pattern problem

<details>
<summary>Show Answer</summary>

**Answer:** A) A class inherits from multiple classes with a common base class

**Explanation:** The diamond problem causes ambiguity in multiple inheritance. C++ resolves it with virtual inheritance.

**Key Takeaway:** Virtual inheritance (class B : virtual public A) ensures only one copy of the base class.
</details>

---

### Q50. [MCQ] | 1 Mark | OOP Concepts

**Which pattern ensures a single instance with global access?**

A) Factory  
B) Singleton  
C) Observer  
D) Decorator

<details>
<summary>Show Answer</summary>

**Answer:** B) Singleton

**Explanation:** Singleton = private constructor + static instance + static getInstance(). Used for logging, config, connection pools.

**Key Takeaway:** Singleton restricts instantiation to one object; ensure thread-safety in multi-threaded contexts.
</details>

---

### Q51. [MCQ] | 1 Mark | Web Technologies

**Which HTML tag defines an internal style sheet?**

A) <css>  
B) <style>  
C) <script>  
D) <link>

<details>
<summary>Show Answer</summary>

**Answer:** B) <style>

**Explanation:** <style> in <head> defines internal CSS. <link> links external stylesheets. <script> adds JavaScript.

**Key Takeaway:** Internal CSS = <style>; External = <link>; Inline = style attribute.
</details>

---

### Q52. [MCQ] | 1 Mark | Web Technologies

**Which HTTP method is idempotent?**

A) POST  
B) GET  
C) PATCH  
D) Both B and C

<details>
<summary>Show Answer</summary>

**Answer:** B) GET

**Explanation:** GET is idempotent (same result from multiple requests). DELETE and PUT are also idempotent. POST and PATCH are not.

**Key Takeaway:** Idempotent: GET, HEAD, PUT, DELETE, OPTIONS, TRACE. Non-idempotent: POST, PATCH.
</details>

---

### Q53. [MCQ] | 1 Mark | Web Technologies

**Purpose of DOCTYPE in HTML5?**

A) Specify character encoding  
B) Declare document as HTML5  
C) Include external CSS  
D) Define page title

<details>
<summary>Show Answer</summary>

**Answer:** B) To declare the document as HTML5

**Explanation:** <!DOCTYPE html> puts browsers in standards mode. Without it, browsers may render in quirks mode.

**Key Takeaway:** DOCTYPE must be the first line. HTML5 DOCTYPE is simply <!DOCTYPE html>.
</details>

---

### Q54. [MCQ] | 1 Mark | Web Technologies

**Which is a JavaScript framework/library?**

A) Django  
B) Flask  
C) React  
D) Laravel

<details>
<summary>Show Answer</summary>

**Answer:** C) React

**Explanation:** React is a JavaScript UI library. Django and Flask are Python frameworks. Laravel is a PHP framework.

**Key Takeaway:** Popular JS frameworks: React, Angular, Vue.js, Svelte, Next.js.
</details>

---

### Q55. [MCQ] | 1 Mark | Web Technologies

**What does JSON stand for?**

A) JavaScript Object Notation  
B) Java Standard Object Network  
C) JavaScript Online Notation  
D) Java Serialized Object Notation

<details>
<summary>Show Answer</summary>

**Answer:** A) JavaScript Object Notation

**Explanation:** JSON is a lightweight data-interchange format, easy for humans to read and machines to parse. It is language-independent.

**Key Takeaway:** JSON uses key-value pairs; widely used in REST APIs and web services.
</details>

---

### Q56. [MCQ] | 1 Mark | Cloud Computing

**Which cloud model provides virtualized computing resources?**

A) SaaS  
B) PaaS  
C) IaaS  
D) FaaS

<details>
<summary>Show Answer</summary>

**Answer:** C) IaaS (Infrastructure as a Service)

**Explanation:** IaaS provides VMs, storage, networks. PaaS provides development platforms. SaaS provides ready software.

**Key Takeaway:** IaaS = infrastructure; PaaS = platform; SaaS = software. AWS EC2 = IaaS, Heroku = PaaS, Gmail = SaaS.
</details>

---

### Q57. [MCQ] | 1 Mark | Cloud Computing

**What is cloud elasticity?**

A) Lower latency  
B) Automatic resource scaling based on demand  
C) Better security  
D) Offline access

<details>
<summary>Show Answer</summary>

**Answer:** B) Resources scale up/down automatically based on demand

**Explanation:** Elasticity enables dynamic resource allocation matching demand. Scalability is the ability to grow; elasticity is dynamic scaling.

**Key Takeaway:** Elasticity = automatic scaling; Scalability = ability to grow.
</details>

---

### Q58. [MCQ] | 1 Mark | Cyber Security

**Which attack uses fraudulent emails from legitimate-looking sources?**

A) Phishing  
B) Smishing  
C) Vishing  
D) Spoofing

<details>
<summary>Show Answer</summary>

**Answer:** A) Phishing

**Explanation:** Phishing = email-based social engineering. Smishing = SMS. Vishing = voice. Spear phishing = targeted.

**Key Takeaway:** Verify sender addresses; do not click suspicious links; use multi-factor authentication.
</details>

---

### Q59. [MCQ] | 1 Mark | Cyber Security

**Which encryption uses a public-private key pair?**

A) AES  
B) DES  
C) RSA  
D) Blowfish

<details>
<summary>Show Answer</summary>

**Answer:** C) RSA

**Explanation:** RSA is asymmetric encryption using public/private keys. AES, DES, Blowfish are symmetric (same key for encryption/decryption).

**Key Takeaway:** Asymmetric (RSA, ECC) = public/private pair; Symmetric (AES, DES) = shared key.
</details>

---

### Q60. [MCQ] | 1 Mark | Cloud Computing

**Which is NOT a cloud deployment model?**

A) Public Cloud  
B) Private Cloud  
C) Hybrid Cloud  
D) Distributed Cloud

<details>
<summary>Show Answer</summary>

**Answer:** D) Distributed Cloud

**Explanation:** Standard cloud deployment models: Public, Private, Hybrid, Community. Distributed cloud is an emerging concept but not a standard deployment model.

**Key Takeaway:** Deployment models define who has access: Public (anyone), Private (single org), Hybrid (mix), Community (shared by several orgs).
</details>

---

