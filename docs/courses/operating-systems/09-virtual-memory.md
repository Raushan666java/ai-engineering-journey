# Chapter 9 — Virtual Memory

## Learning Objectives

1. Explain demand paging and the page-fault handling sequence.
2. Describe copy-on-write and its role in efficient process creation.
3. Evaluate page-replacement algorithms: FIFO, Optimal, LRU, Clock, NFU.
4. Analyse thrashing and the working-set model.
5. Understand page-size trade-offs.

## 9.1 Demand Paging

Under demand paging, pages are loaded into physical memory only when they are accessed, not when the process starts. This enables processes to execute with less physical memory than their total virtual address space — what is needed to fit many processes in memory simultaneously.

When a process references a page that is not in physical memory, a **page fault** occurs:

1. The MMU detects that the page-table entry's valid bit is clear and triggers a trap to the kernel.
2. The kernel determines the virtual address and verifies that the access is legal.
3. The kernel finds a free frame or evicts a page to make room.
4. A disk I/O is issued to read the required page into the frame.
5. While the I/O proceeds, the process is blocked; the OS switches to another process.
6. When the I/O completes, the page table is updated (valid bit set), and the process is made ready.
7. The faulting instruction is restarted; this time the page is resident.

### 9.1.1 Locality of Reference

Demand paging works because of **locality**: programs tend to access a small set of pages within any time interval.

- **Spatial locality**: If address A is accessed, nearby addresses are likely to be accessed soon (array traversal).
- **Temporal locality**: If address A is accessed, A is likely to be accessed again soon (loop variables).

## 9.2 Copy-on-Write (COW)

COW defers the copying of pages until one of the sharing processes writes to them. When a `fork()` call creates a child process, both parent and child initially share the same physical pages, marked as read-only. When either writes to a page, a protection fault occurs, and the kernel creates a private copy.

COW dramatically reduces the memory and time needed for `fork()` when the child immediately calls `exec()` — many shared pages are never copied. Linux's `vfork()` (virtual memory fork) goes further by not copying even the page tables.

## 9.3 Page Replacement

When a page fault occurs and all physical frames are occupied, the OS must choose a page to evict. The page-replacement algorithm determines which page is evicted.

### 9.3.1 FIFO Page Replacement

The oldest page in memory is evicted first. FIFO is simple to implement with a circular queue but can suffer from **Belady's anomaly**: increasing the number of frames can increase the page-fault rate.

**Example**: Reference string = 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5.

| Frames | FIFO faults |
|--------|-------------|
| 3 | 9 |
| 4 | 10 (Belady's anomaly: more frames, more faults!) |

### 9.3.2 Optimal Page Replacement (OPT)

Replace the page that will not be used for the longest period in the future. This yields the minimum possible page-fault rate but requires future knowledge — it is used only as a benchmark.

**Example** (same reference string, 3 frames): 1→2→3→4 (replace 1) →1 (replace 2) →2 (replace 4, since 3 is used sooner) →5 (replace 3) →1→2→3 (replace 5) →4 (replace 1) →5. Total = 7 faults.

### 9.3.3 LRU Page Replacement

Replace the page that has not been used for the longest period in the past. LRU approximates OPT using historical data. It is expensive to implement exactly:

- **Counters**: Each page-table entry has a time-of-use field; the OS scans to find the oldest.
- **Stack**: Maintain a stack of page numbers; a page access moves it to the top. The bottom is the LRU page.

Both approaches require hardware support for per-memory-access timestamp updates, which few architectures provide.

### 9.3.4 LRU Approximation: Clock Algorithm (Second Chance)

The Clock algorithm uses a reference bit (set to 1 when a page is accessed) and a circular pointer.

```
while (true) {
    if (current_page.reference_bit == 0) {
        evict(current_page);
        break;
    } else {
        current_page.reference_bit = 0;
        current_page = next(current_page);
    }
}
```

The **enhanced second-chance algorithm** uses both the reference bit and the modify (dirty) bit:

| (ref, mod) | Interpretation | Priority |
|------------|---------------|----------|
| (0, 0) | Not recently used, clean | Best to evict |
| (0, 1) | Not recently used, dirty | Next (requires write-back) |
| (1, 0) | Recently used, clean | Possibly needed soon |
| (1, 1) | Recently used, dirty | Worst to evict |

The algorithm cycles through frames, clearing ref bits and advancing, until it finds a (0,0) pair.

### 9.3.5 NFU and Aging

**Not Frequently Used (NFU)**: Each page has a counter. At each clock interrupt, the counter is incremented by the reference bit. The page with the smallest counter is evicted. Problem: NFU never forgets — pages accessed long ago retain high counts.

**Aging**: A refinement of NFU that gives higher weight to recent references:

```
counter = (counter >> 1) + (reference_bit << (n-1))
```

Each clock tick, the counter is shifted right by one bit and the current reference bit is added at the most significant position. This distinguishes between "recently used" and "used long ago".

## 9.4 Frame Allocation

The OS must decide how many frames to allocate to each process.

- **Equal allocation**: m frames / n processes.
- **Proportional allocation**: Allocate frames in proportion to process size.
- **Priority allocation**: Higher-priority processes receive more frames.

## 9.5 Thrashing

**Thrashing** occurs when a process spends more time paging than executing. As the degree of multiprogramming increases, memory becomes oversubscribed. Each process lacks sufficient frames, causing constant page faults. CPU utilisation drops, the OS adds more processes thinking the CPU is idle, and the problem compounds.

### 9.5.1 Working-Set Model

The **working set** (Denning, 1968) is the set of pages that a process has referenced in the last Δ (working-set window) memory references. Each process requires its working set to be resident to avoid thrashing.

If the sum of working-set sizes exceeds available physical frames, the OS suspends a process (or swaps it out) rather than allowing thrashing to continue. The working-set window Δ is critical: too small, and the model misses locality; too large, and it overestimates working-set size.

```
WSS_i = number of pages referenced by process i in the last Δ
Total demand = Σ WSS_i
If Total demand > available frames → thrashing → suspend a process
```

### 9.5.2 Page-Fault Frequency (PFF)

An alternative approach: set an acceptable page-fault rate. If the actual rate exceeds the upper threshold, allocate more frames (or suspend the process). If the rate falls below the lower threshold, remove frames.

## 9.6 Page Size Considerations

Page size affects multiple system properties:

| Factor | Small page | Large page |
|--------|------------|------------|
| Internal fragmentation | Less | More |
| Page table size | Larger | Smaller |
| I/O overhead (per page) | More transfers | Fewer, larger transfers |
| TLB coverage | Lower | Higher |
| Locality utilisation | Better | Worse |

Typical systems use 4 KB pages with support for 2 MB "huge pages" for specialised workloads (databases, HPC, VMs). The trend is toward larger default pages as memory sizes grow.

### 9.6.1 Zero-Fill-on-Demand

Pages allocated to a process (for heap or stack growth) are typically zero-filled. Rather than allocating and zeroing physical pages explicitly, the OS maps them to a **zero page** (a page of all zeros) with copy-on-write. When the process writes, a real frame is allocated and initialised.

## Summary

Demand paging loads pages on fault, enabling programs to exceed physical memory. Copy-on-write optimises `fork()`. Page-replacement algorithms trade accuracy against hardware support — Clock and Aging approximate LRU without expensive per-access updates. Thrashing occurs when total working-set demand exceeds physical memory; it is addressed by process suspension or page-fault-frequency control. Page size remains a fundamental design parameter.

## Exercises

### Review Questions

1. Describe the steps taken by the OS to handle a page fault.
2. What is Belady's anomaly, and which algorithm exhibits it?
3. Explain how the Clock algorithm approximates LRU replacement.
4. What is thrashing, and how does the working-set model prevent it?
5. How does copy-on-write reduce the cost of `fork()`?

### Application Problems

1. Given the reference string: 0, 1, 2, 3, 0, 1, 4, 0, 1, 2, 3, 4. Compute the number of page faults for FIFO, LRU, and Optimal replacement with 3 frames and 4 frames.
2. A system with 8 MB of physical memory and 4 KB pages runs 10 processes. Each process's working set is 10 pages. What is the maximum degree of multiprogramming before thrashing occurs? (Assume the OS uses 1 MB for kernel code and data.)
3. Compute the working set for a process that accesses pages: 1, 1, 2, 3, 1, 4, 5, 1, 2, 6, 3, with Δ = 5 references. How does the working set change over time?

### Challenge Problem

1. Implement a virtual-memory simulator in C that reads a reference string and simulates page replacement under FIFO, LRU, Clock, and Optimal. For each algorithm, print the number of page faults and the hit ratio. Allow the user to specify the number of frames. Verify that Belady's anomaly appears in FIFO for the sequence: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 and 4 frames.
