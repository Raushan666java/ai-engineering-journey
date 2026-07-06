# Chapter 3: Operating Systems — Exam Quick Revision

## Learning Objectives
- Diagram process states and transitions
- Solve CPU scheduling problems with Gantt charts (FCFS, SJF, SRTF, RR, Priority)
- Analyze synchronization problems (producer-consumer, readers-writers, dining philosopher)
- Apply Banker's algorithm for deadlock avoidance
- Translate logical to physical addresses using paging with TLB
- Compute page replacement algorithm performance (page faults)
- Calculate disk scheduling seek time for various algorithms

---

## 1. Process States &amp; Transitions

```
         +--------+    Admitted      +--------+
         |  NEW   | --------------> | READY  |
         +--------+                  +--------+
                                         |
                                    (Dispatch)
                                         |
                                   +----v----+
                                   | RUNNING |
                                   +----+----+
                                        |
                    +--------------------+---------+----------+
                    |                    |                    |
             (Time quantum           (I/O or           (Preempted
              expired)               event wait)        by higher priority)
                    |                    |                    |
              +-----v---+         +------v------+           |
              |  READY  |         | BLOCKED/    |-----------+
              +---------+         |  WAITING    |
                                  +------+------+
                                         |
                                    (I/O completion)
                                         |
                                    +----v----+
                                    |  READY  |
                                    +---------+
```

### Scheduler Types
| Scheduler | Frequency | Function |
|-----------|-----------|----------|
| **Long-term** (Job) | Low | Load processes from disk into memory — controls degree of multiprogramming |
| **Short-term** (CPU) | Very high (ms) | Selects next process to run — dispatches from ready queue |
| **Medium-term** | Medium | Swaps processes in/out of memory — for suspending/resuming |

---

## 2. CPU Scheduling Algorithms

### FCFS (First Come First Serve)
- Non-preemptive; simple FIFO queue
- **Convoy effect:** Short process waits behind long one
- Avg waiting time can be high

### SJF (Shortest Job First)
- Non-preemptive — choose process with smallest CPU burst next
- **Optimal** for minimizing average waiting time
- **Problem:** Starvation of long processes; need burst time prediction

### SRTF (Shortest Remaining Time First)
- Preemptive version of SJF
- When new process arrives with shorter remaining time, preempt current

### Round Robin (RR)
- Each process gets time quantum q; circular ready queue
- q too large → degenerates to FCFS
- q too small → too many context switches (CPU overhead)
- **Typical q:** 10–100 ms

### Priority Scheduling
- Preemptive or non-preemptive
- Lower number = higher priority (Unix conventions)
- **Starvation:** Low-priority processes may never execute
- **Aging:** Gradually increase priority of waiting processes

### Solved Numerical — Gantt Chart

**Processes:** P1(0,5), P2(1,3), P3(2,8), P4(3,2) — (arrival, burst)

**FCFS:**
```
P1(0-5) | P2(5-8) | P3(8-16) | P4(16-18)
Waiting times: 0,4,6,13 → Average: 23/4 = 5.75
```

**SJF (non-preemptive):**
```
P1(0-5) | P2(5-8) | P4(8-10) | P3(10-18)
Waiting times: 0,4,8,5 → Average: 17/4 = 4.25
```

**SRTF (preemptive):**
```
P1(0-1) | P2(1-4) | P3(4-12) | P4(12-14) | ... (P4 completes at 14)
Wait: P1=1, P2=0, P4=9, P3=2
```

**Round Robin (q=4):**
```
P1(0-4) | P2(4-7) | P3(7-11) | P1(11-12) | P3(12-16) | P4(16-18)
```

### Context Switch Overhead
- Time to save/restore registers, PCB, TLB flush
- **Direct cost:** CPU cycles wasted
- **Indirect cost:** Cache pollution

---

## 3. Synchronization

### Semaphore Operations
- **S** is a non-negative integer variable
- **wait(S) / P(S):** while (S ≤ 0) busy-wait; S--
- **signal(S) / V(S):** S++
- **Binary semaphore:** 0 or 1 (like mutex)
- **Counting semaphore:** Any non-negative integer

### Producer-Consumer Problem
```c
semaphore empty = n;  // buffer slots
semaphore full = 0;   // filled slots
semaphore mutex = 1;  // mutual exclusion

// Producer
while (true) {
    produce(item);
    wait(empty);
    wait(mutex);
    buffer[in] = item;
    in = (in + 1) % n;
    signal(mutex);
    signal(full);
}

// Consumer
while (true) {
    wait(full);
    wait(mutex);
    item = buffer[out];
    out = (out + 1) % n;
    signal(mutex);
    signal(empty);
    consume(item);
}
```

### Readers-Writers Problem
| Problem Type | Priority | Policy |
|-------------|----------|--------|
| First R-W | Readers | Multiple readers allowed; writers starve |
| Second R-W | Writers | Once writer is ready, no new readers; readers starve |
| Third R-W | Queue | Fair: FCFS order of requests |

### Dining Philosopher Problem
- 5 philosophers, 5 chopsticks, must acquire both to eat
- **Deadlock scenario:** Each picks left chopstick simultaneously
- **Solutions:**
  1. Pick right then left (asymmetric)
  2. Limit to 4 philosophers eating at once
  3. Use mutex on eating (only one eats at a time)
  4. Use AND semaphore (simultaneous chopstick grab)

---

## 4. Deadlock

### Four Necessary Conditions
1. **Mutual Exclusion:** At least one resource is non-sharable
2. **Hold and Wait:** Process holds a resource while waiting for another
3. **No Preemption:** Resource cannot be forcibly taken
4. **Circular Wait:** Cycle exists in wait-for graph

### Deadlock Handling Strategies
| Strategy | Approach | Example |
|----------|----------|---------|
| Prevention | Break one of the 4 conditions | Order resources (eliminate circular wait) |
| Avoidance | Banker's algorithm — safe state check | Resource allocation graph |
| Detection | Wait-for graph cycle detection | Periodically check for cycles |
| Recovery | Kill process or preempt resource | Victim selection, rollback |

### Banker's Algorithm

**Data structures:** Available (resources free), Max (process max need), Allocation (currently held), Need = Max − Allocation

**Safety algorithm:**
```
1. Work = Available; Finish[i] = false for all i
2. Find i where Finish[i]==false AND Need[i] ≤ Work
3. Work = Work + Allocation[i]; Finish[i] = true
4. If all Finish[i]==true ⇒ safe state
```

**Solved Numerical:**
Resources: A=10, B=5, C=7
Available = [3, 3, 2]

| Process | Allocation | Max | Need |
|---------|-----------|-----|------|
| P0 | [0,1,0] | [7,5,3] | [7,4,3] |
| P1 | [2,0,0] | [3,2,2] | [1,2,2] |
| P2 | [3,0,2] | [9,0,2] | [6,0,0] |
| P3 | [2,1,1] | [2,2,2] | [0,1,1] |
| P4 | [0,0,2] | [4,3,3] | [4,3,1] |

**Safe sequence:** P1 → P3 → P4 → P0 → P2 (or P1 → P3 → P0 → P4 → P2)

---

## 5. Memory Management — Paging

### Logical to Physical Address Translation
```
Logical Address (CPU) → Segmentation → Paging → Physical Address (RAM)
```

**Formulas:**
- Page size = 2^(offset bits)
- Page number (p) = logical_address / page_size
- Offset (d) = logical_address % page_size
- Frame number (f) = page_table[p]
- Physical address = f × page_size + d

**TLB (Translation Lookaside Buffer):**
- Cache for page table entries
- **Effective Access Time (EAT):**
  - EAT = TLB_hit_ratio × (TLB_access_time + memory_access)
  - + (1 − hit_ratio) × (TLB_access_time + 2 × memory_access)

**Solved Example:**
Logical address = 16 bits, page size = 4 KB, page table:
Page 0 → Frame 5; Page 1 → Frame 8; Page 2 → Frame 3

Address 0x2A3F:
- Offset bits: 12 (page size = 2^12 = 4096 = 4 KB)
- Page number: 0x2A3F / 0x1000 = 2
- Offset: 0x2A3F % 0x1000 = 0xA3F
- Frame: 3
- Physical address = 3 × 0x1000 + 0xA3F = 0x3A3F

---

## 6. Page Replacement Algorithms

### FIFO (First In First Out)
- Oldest loaded page is replaced
- **Belady's Anomaly:** More frames can increase page faults

### LRU (Least Recently Used)
- Replace page that has been unused for longest time
- Requires hardware support (time stamps or counter)
- **Stack property:** No Belady's anomaly

### Optimal (MIN)
- Replace page that will be used farthest in future
- **Not implementable** in practice — used as benchmark

### Solved Numerical: Page Faults

**Reference string:** 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
**Frames = 3**

| Algorithm | Page Faults |
|-----------|-------------|
| FIFO | 15 |
| LRU | 12 |
| Optimal | 9 |

---

## 7. Disk Scheduling

### Comparison Table

| Algorithm | Description | Seek Pattern | Fairness |
|-----------|-------------|-------------|----------|
| FCFS | Serve in request order | No biasing | Fair |
| SSTF | Shortest seek time first | Arms biased to middle | May starve edge |
| SCAN (Elevator) | Head moves one direction, serves all, then reverses | Full sweep | No starvation |
| C-SCAN | Head serves one direction only, then jumps back | Circular sweep | Uniform wait |
| LOOK | SCAN but stop at last request in each direction | Efficient sweep | No starvation |
| C-LOOK | C-SCAN but stop at last request | Efficient circular | Uniform wait |

### Solved Numerical
Requests: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at 53.

**FCFS:** |98−53| + |183−98| + |37−183| + |122−37| + |14−122| + |124−14| + |65−124| + |67−65|
= 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = **640**

**SCAN (moving upward, to 199):**
Order: 37, 14, 67, 98, 122, 124, 183
Wait, moving upward first: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → then back: 37 → 14
Seek: 12+2+31+24+2+59+16 + 162+23 = **331**

**C-SCAN (upward to 199, then jump to 0):**
53→65→67→98→122→124→183→199, jump to 0, 14→37
Seek: 12+2+31+24+2+59+16 + 199 + 14+23 = **382**

---

## Solved MCQs

**Q1:** In a system with 32-bit logical address and 8 KB page size, how many entries in the page table?
- (a) 2^19
- (b) 2^20
- (c) 2^21
- (d) 2^22

**Answer:** (a) 2^19. Offset bits = log2(8192) = 13. Page number bits = 32 − 13 = 19. So 2^19 pages.

**Q2:** Consider reference string 1,2,3,4,1,2,5,1,2,3,4,5 with 3 frames. Using FIFO, how many page faults?
- (a) 8
- (b) 9
- (c) 10
- (d) 11

**Answer:** (b) 9. Sequence: 1(F),2(F),3(F),4(F → replace 1),1(F → replace 2),2(F → replace 3),5(F → replace 4),1(F → replace 1),2(F → replace 2),3(F → replace 5),4(F → replace 1),5 — 9 faults.

**Q3:** Banker's algorithm — need = max − allocation. If Need[i] ≤ Available, process is:
- (a) In deadlock
- (b) Safe to execute
- (c) In unsafe state
- (d) Starving

**Answer:** (b) Safe to execute. The process can complete and release its resources.

---

## 8. Threads

### User-Level vs Kernel-Level Threads

| Aspect | User-Level Threads | Kernel-Level Threads |
|--------|--------------------|---------------------|
| Managed by | Thread library (user space) | Kernel |
| Context switch | Fast (no system call) | Slow (system call overhead) |
| Blocking | One thread blocks → all block | One thread blocks → others run |
| Parallelism | Limited (single core) | True parallelism on multi-core |
| Example | POSIX Threads (pthreads in user mode) | Windows Threads, Linux Threads |
| Mapping | Many-to-one | One-to-one / Many-to-many |

### Threading Models
```
Many-to-One:   Many user threads → 1 kernel thread (obsolete)
One-to-One:    1 user thread → 1 kernel thread (Linux, Windows)
Many-to-Many:  Many user threads → Many kernel threads (Solaris)
```

### Thread vs Process
| Feature | Process | Thread |
|---------|---------|--------|
| Address space | Separate (isolated) | Shared with process |
| Context switch | Heavy (page table, TLB flush) | Light (registers, stack) |
| Communication | IPC (pipe, message queue, shared memory) | Shared memory directly |
| Creation time | Slow (OS data structures) | Fast |
| Protection | OS-enforced isolation | Within process — no isolation |

## 9. Memory Management — Segmentation

### Segmentation vs Paging

| Aspect | Segmentation | Paging |
|--------|-------------|--------|
| View | Logical (code, data, stack) | Physical (fixed-size frames) |
| Size | Variable | Fixed |
| Fragmentation | External | Internal |
| User visible | Yes (segment names/numbers) | No (transparent) |
| Address | s (segment#) + d (offset) | p (page#) + d (offset) |
| Table | Segment table (base + limit) | Page table |

### Combined: Segmented Paging
- Logical address: (segment#, page#, offset)
- Physical address: page table lookup within segment

## 10. File Systems

### File Allocation Methods

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Contiguous** | Each file in contiguous blocks | Fast sequential/random access | External fragmentation, need max size |
| **Linked** | Each block points to next | No fragmentation | Slow random access, pointer space |
| **Indexed** | Index block points to data blocks | Fast random access | Index block overhead, limit file size |

### Free Space Management
- **Bit vector:** 1 bit per block (free/allocated) — fast, needs memory
- **Linked list:** Free blocks linked — no extra memory, slow
- **Grouping:** Store pointers in free blocks
- **Counting:** Track contiguous free blocks

### Disk Structure
- **Track:** Concentric circle on platter
- **Sector:** Minimum storage unit (typically 512 bytes or 4 KB)
- **Cylinder:** Set of tracks at same radius across all platters
- **Partition:** Logical division of disk

## 11. Virtual Memory

### Demand Paging
- Pages loaded only when referenced (lazy loading)
- **Page fault:** Reference to non-resident page → OS loads from disk

### Thrashing
- **Symptom:** Excessive page faults, low CPU utilization
- **Cause:** Too many processes in memory (sum of working sets > physical memory)
- **Solution:** Reduce multiprogramming degree, working set model

### Page Size Trade-off
| Small page | Large page |
|------------|------------|
| Less internal fragmentation | More internal fragmentation |
| Larger page tables (more entries) | Smaller page tables |
| More page faults (more I/O) | Fewer page faults |
| Better spatial locality (fits better) | May load unnecessary data |

---

## Summary
- **Process states:** New → Ready → Running → Blocked → Terminated
- **Scheduling:** FCFS (convoy), SJF (optimal avg wait), RR (time quantum), Priority (starvation)
- **Sync:** Semaphores P/V, producer-consumer (counting sem), readers-writers, dining philosopher (deadlock risk)
- **Deadlock:** 4 conditions (ME + H&amp;W + No-Preempt + Circular), Banker's algorithm (safe/unsafe state)
- **Paging:** Logical→Physical via page table, TLB for speed, EAT formula
- **Page replacement:** FIFO (Belady's anomaly), LRU (no anomaly), Optimal (benchmark)
- **Disk scheduling:** SCAN (elevator), C-SCAN (uniform), SSTF (starvation possible)
- **Threads:** User-level (fast, managed by library) vs Kernel-level (true parallelism)
- **Segmentation:** Variable-size logical units; **Paging:** Fixed-size physical units
- **File systems:** Contiguous, linked, indexed allocation
- **Virtual memory:** Demand paging, thrashing (too many page faults), working set model

---

## HOT Topics (Frequently Asked in IBPS SO IT Mains)
1. CPU scheduling Gantt chart and average waiting/turnaround time calculation
2. Banker's algorithm — determine safe sequence from given allocation and max matrices
3. Page fault calculation for FIFO, LRU, Optimal reference strings
4. Logical to physical address translation with page table
5. Semaphore-based synchronization code — find initial value(s) for correct execution
6. Disk scheduling — total seek distance calculation for SCAN, C-SCAN, LOOK
7. Deadlock detection — wait-for graph analysis
8. Virtual memory concepts — page size tradeoff, thrashing detection

---

## Chapter Quiz (MCQs)

<details>
<summary>Q1: Belady's anomaly is associated with which page replacement algorithm?</summary>
A1: FIFO. Belady's anomaly occurs when increasing the number of frames actually increases page faults.
</details>

<details>
<summary>Q2: In process synchronization, what does the P(s) operation do?</summary>
A2: P(s) or wait(s) decrements the semaphore s. If s becomes negative, the process is blocked and added to the waiting queue.
</details>

<details>
<summary>Q3: Which disk scheduling algorithm may cause starvation of edge tracks?</summary>
A3: SSTF (Shortest Seek Time First). It always serves the closest request, leading to edge requests being starved.
</details>

<details>
<summary>Q4: What is the time quantum for Round Robin scheduling if the average context switch time is 0.5 ms and the desired CPU utilization is at least 90%?</summary>
A4: The context switch overhead fraction = context_switch_time / quantum. For 90% utilization: 0.5/q ≤ 0.1 → q ≥ 5 ms.
</details>

<details>
<summary>Q5: In the dining philosophers problem, which deadlock condition is addressed by limiting philosophers to 4 at a time?</summary>
A5: Circular wait. By allowing at most 4 philosophers to eat simultaneously, at least one can acquire both chopsticks, breaking the cycle.
</details>
