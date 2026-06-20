# Chapter 9: Virtual Memory

**<< [Memory Management](./08-memory-management.md)** | [**Next: File Systems**](./10-file-systems.md) >>

---


## Learning Objectives

- Distinguish virtual memory from physical memory management
- Explain demand paging and the concept of page faults
- Implement and compare page replacement algorithms (FIFO, Optimal, LRU, Second-Chance)
- Analyze thrashing and its relation to the working-set model
- Describe the effects of page size on system performance
- Apply the principle of locality (spatial and temporal)
## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Virtual Memory** | Allows execution of processes partially in memory; illusion of larger memory |
| **Demand Paging** | Pages loaded only when referenced; lazy pager |
| **Page Fault** | Referenced page not in memory => trap to OS => load from disk => restart instruction |
| **Page Replacement** | Select victim page: FIFO, Optimal, LRU, Approximated LRU (Clock) |
| **Thrashing** | Excessive paging -- process spends more time paging than executing |
| **Allocation** | Equal, proportional, or priority-based page allocation among processes |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Virtual Memory Concept] --> B[Demand Paging]
    B --> C[Page Fault Handling]
    C --> D[Copy-on-Write]
    D --> E[Page Replacement Algorithms]
    E --> F[Frame Allocation]
    F --> G[Thrashing]
    G --> H[Summary]
</div>

## Theory

![Paging and Segmentation](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/09-virtual-memory.png)

### Virtual Memory Concept

Virtual memory separates the logical memory (address space) as seen by a process from physical memory. This allows:

- Programs larger than physical memory to run (using demand paging)
- Each process to have its own private, contiguous address space
- Efficient sharing of memory between processes
- Simplified memory management (each process sees a clean linear address space)

The virtual address space is divided into pages. Only pages that are actively needed must be in physical memory.

### Demand Paging

In a **demand paging** system, pages are loaded into memory only when they are referenced (not in advance). This is like a paging system with **lazy loading**.

```
Page Table Entry (with demand paging):
â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”¬â”€â”€â”€â”¬â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚Frame â”‚ V â”‚ R â”‚ D â”‚Protectionâ”‚
â”‚Numberâ”‚alidâ”‚ef â”‚irtyâ”‚         â”‚
â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”´â”€â”€â”€â”´â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

- **Valid bit** = 0: Page is not in memory (page fault)
- **Valid bit** = 1: Page is in memory

#### Page Fault Handling Sequence

When a process accesses a page with the valid bit = 0:

1. The MMU traps to the OS (page fault)
2. The OS saves the process state (registers, PC)
3. The OS determines which virtual page caused the fault
4. The OS validates the address (is it a valid page? check protection bits)
5. The OS finds a free frame from the free-frame list
6. The OS initiates a disk read to bring the needed page into the frame
7. While the disk read is in progress, the OS may context-switch to another process
8. When the disk read completes, the OS updates the page table (valid = 1, frame = f)
9. The process is restarted at the instruction that caused the fault

```
Page Fault â†’ Trap â†’ OS checks validity
                â”‚
          â”Œâ”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”
          â†“             â†“
     Invalid page    Valid page (not in memory)
          â†“                â”‚
     Segmentation     Find free frame
     Fault                â”‚
                     â”Œâ”€â”€â”€â”€â”´â”€â”€â”€â”€â”
                     â†“         â†“
                 Found    None available
                     â”‚         â”‚
                     â”‚    Page replacement
                     â”‚         â”‚
                     â†“â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                  Disk read needed page
                       â”‚
                  Update page table
                       â”‚
                  Restart instruction
```

#### Effective Access Time with Demand Paging

```
EAT = (1 âˆ’ p) Ã— memory_access + p Ã— page_fault_time

Where p = page fault probability (0 â‰¤ p â‰¤ 1)

Example:
  Memory access = 100 ns
  Page fault service time = 10 ms (including disk access)
  p = 0.001 (1 fault per 1000 accesses)

  EAT = 0.999 Ã— 100ns + 0.001 Ã— 10ms
      = 99.9ns + 10,000ns
      = 10,099.9ns (âˆ¼10Î¼s)

  The system is 100Ã— slower with just 0.1% page faults!
```

### Copy-on-Write (COW)

When `fork()` is called, instead of copying all pages, the child **shares** the parent's pages. Pages are marked as copy-on-write. When either process writes to a page, a trap occurs, and the page is duplicated.

COW eliminates the overhead of copying the entire address space â€” especially valuable when `exec()` follows `fork()` (the common case).

### Page Replacement

When a page fault occurs and no free frames are available, the OS must **replace** an existing page to make room for the new one.

#### Page Replacement Algorithms

#### FIFO (First-In, First-Out)

Replace the page that has been in memory the longest.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 â†’ fault  [7]
  0 â†’ fault  [7, 0]
  1 â†’ fault  [7, 0, 1]
  2 â†’ fault  [0, 1, 2]     (replaces 7 â€” the oldest)
  0 â†’ hit    [0, 1, 2]
  3 â†’ fault  [1, 2, 3]     (replaces 0)
  0 â†’ fault  [2, 3, 0]     (replaces 1)
  ...
  Total page faults: 15
```

**Belady's Anomaly**: With FIFO, increasing the number of frames can sometimes INCREASE page faults (counterintuitive).

#### Optimal Page Replacement (OPT or MIN)

Replace the page that will not be used for the longest time in the future.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 â†’ fault  [7]
  0 â†’ fault  [7, 0]
  1 â†’ fault  [7, 0, 1]
  2 â†’ fault  [0, 1, 2]     (replaces 7 â€” used farthest in future)
  0 â†’ hit
  3 â†’ fault  [0, 1, 3]     (replaces 2 or 1; optimal replaces 2)
  ...
  Total page faults: 9
```

**Problem**: Requires knowledge of the future â€” impossible to implement. Used as a benchmark for other algorithms.

#### LRU (Least Recently Used)

Replace the page that has not been used for the longest time. This approximates Optimal using past behavior.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 â†’ fault  [7]
  0 â†’ fault  [7, 0]
  1 â†’ fault  [7, 0, 1]
  2 â†’ fault  [0, 1, 2]     (replaces 7 â€” least recently used)
  0 â†’ hit    update LRU
  3 â†’ fault  [1, 2, 3]     (replaces 1 â€” LRU is 1, then 2, then 0)
  ...
  Total page faults: 12
```

**LRU Implementation**:

1. **Counters**: Each page table entry has a time-of-use field. When a page is accessed, the clock is copied into the field. Replacement searches for the smallest time. (Expensive: must scan all entries and maintain the clock.)

2. **Stack**: Keep a stack of page numbers. On each access, move the accessed page to the top. The bottom is the LRU page. (Expensive: stack updates require pointer changes.)

3. **Approximation with reference bits**: Most systems provide a **reference bit** per page (set by hardware on each access). The OS can periodically clear and check reference bits to approximate LRU.

#### Second-Chance (Clock) Algorithm

A FIFO variant that uses the reference bit. Pages are arranged in a circular list with a hand pointer.

```
Hand â†’ [Page A: ref=1] â†’ [Page B: ref=0] â†’ [Page C: ref=1] â†’ [Page D: ref=0]
           â”‚                                                      â”‚
           â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Algorithm:
1. Check the page the hand points to
2. If ref = 0: replace this page
3. If ref = 1: set ref = 0, advance hand, repeat
```

This is essentially a circular FIFO with a second chance. It approximates LRU with very little overhead.

```
Clock algorithm with reference string 7, 0, 1, 2 (3 frames):
  After 7, 0, 1: [7(r=1), 0(r=1), 1(r=1)]  handâ†’7
  Reference 2 (fault):
    Handâ†’7: ref=1 â†’ set to 0, advance
    Handâ†’0: ref=1 â†’ set to 0, advance
    Handâ†’1: ref=1 â†’ set to 0, advance
    Handâ†’7: ref=0 â†’ replace!
    [2(r=1), 0(r=0), 1(r=0)]  handâ†’0
```

### Frame Allocation

How many frames should each process get?

**Minimum allocation**: Defined by the architecture â€” the number of frames needed for all instructions that can reference memory in one cycle. Example: a move instruction with source and destination operands might need 6 frames.

**Equal allocation**: If 100 frames and 5 processes, give each 20 frames.

**Proportional allocation**: Give frames proportional to process size.

```
frames_for_Pi = (size_of_Pi / total_size) Ã— total_frames
```

**Priority allocation**: Higher-priority processes get more frames.

### Thrashing

**Thrashing** occurs when a process is spending more time paging than executing. The system is overcommitted â€” the working set of all processes exceeds physical memory.

```
Symptoms of thrashing:
- CPU utilization drops (processes are waiting for pages)
- OS thinks it needs more multiprogramming
- OS adds more processes to the system
- Even more paging â†’ even lower CPU utilization â†’ even more processes
  This is a positive feedback loop that can bring a system to its knees!
```

#### The Working-Set Model (Denning, 1968)

The **working set** is the set of pages a process is currently using. It is defined as the set of pages referenced in the last Î” (working-set window).

- If the total working set exceeds physical memory â†’ thrashing
- If a process does not have enough frames to hold its working set â†’ thrashing

```
Working set size as a function of Î” (time window):
  - Small Î”: Working set is small but may not capture locality
  - Large Î”: Working set approaches the entire address space
  - Infinite Î”: All pages ever referenced are in the working set

The working set changes over time as the program moves through different
phases (locality transitions).
```

**Locality**: Programs tend to access memory in localized clusters:
- **Spatial locality**: If a location is accessed, nearby locations are likely to be accessed soon (sequential code, array traversal)
- **Temporal locality**: If a location is accessed, it will likely be accessed again soon (loops, frequently used variables)

### Page Size

Choosing the page size involves trade-offs:

```
Factor            Small Pages          Large Pages
â”€â”€â”€â”€â”€â”€            â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Internal frag     Less waste           More waste
Page table        Larger table         Smaller table
I/O overhead      More I/Os            Fewer I/Os
Locality          Better matching      May include unrelated data
TLB reach         Smaller              Larger
```

Typical page size: 4 KB (x86, ARM default). Huge pages (2 MB on x86-64) for large database-like workloads.

### Modern Developments

**Transparent Huge Pages (THP)**: Linux automatically promotes groups of 4 KB pages to 2 MB pages when they are frequently accessed together.

**Memory-mapped files**: Instead of using `read()`/`write()`, files are mapped into the address space via `mmap()`. Accessing the mapped region causes page faults that bring in file data. This unifies file I/O and memory management.

```c
#include <stdio.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("data.txt", O_RDONLY);
    struct stat sb;

    fstat(fd, &sb);
    size_t size = sb.st_size;

    // Map the entire file into memory
    char *data = mmap(NULL, size, PROT_READ, MAP_PRIVATE, fd, 0);

    // Now access file data as if it were memory
    for (size_t i = 0; i < size; i++) {
        putchar(data[i]);  // Generates page faults on first access
    }

    munmap(data, size);
    close(fd);
    return 0;
}
```

## Examples

### Example 1: Page Fault Rate vs Performance

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate a large array
    int size = 100 * 1024 * 1024;  // 100 million integers = 400 MB
    int *arr = malloc(size * sizeof(int));

    if (!arr) { perror("malloc"); return 1; }

    // Sequential access (good locality â€” low page faults)
    for (int i = 0; i < size; i++) {
        arr[i] = i;  // Pages brought in sequentially
    }

    // Random access (poor locality â€” many page faults)
    srand(0);
    for (int i = 0; i < 1000000; i++) {
        int idx = rand() % size;
        arr[idx] = i;  // May cause TLB misses and page faults
    }

    free(arr);
    return 0;
}
```

### Example 2: Page Replacement Simulation

```c
#include <stdio.h>
#include <stdbool.h>

#define MAX_FRAMES 10
#define REF_LEN 20

int reference[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1};

int fifo(int frames_count) {
    int frames[MAX_FRAMES];
    int next_replace = 0;
    int faults = 0;

    for (int i = 0; i < frames_count; i++) frames[i] = -1;

    for (int i = 0; i < REF_LEN; i++) {
        int page = reference[i];
        bool found = false;

        // Check if page is already in a frame
        for (int j = 0; j < frames_count; j++) {
            if (frames[j] == page) {
                found = true;
                break;
            }
        }

        if (!found) {
            frames[next_replace] = page;
            next_replace = (next_replace + 1) % frames_count;
            faults++;
            printf("FIFO (%d frames): Page %d â†’ fault\n", frames_count, page);
        }
    }

    return faults;
}

int optimal(int frames_count) {
    int frames[MAX_FRAMES];
    int faults = 0;

    for (int i = 0; i < frames_count; i++) frames[i] = -1;

    for (int i = 0; i < REF_LEN; i++) {
        int page = reference[i];
        bool found = false;

        for (int j = 0; j < frames_count; j++) {
            if (frames[j] == page) { found = true; break; }
        }

        if (!found) {
            if (i < frames_count) {
                frames[i] = page;  // Fill empty frames
            } else {
                // Find the page that will be used farthest in the future
                int farthest = -1, victim = 0;
                for (int j = 0; j < frames_count; j++) {
                    int next_use = REF_LEN;  // Default: never used again
                    for (int k = i + 1; k < REF_LEN; k++) {
                        if (frames[j] == reference[k]) {
                            next_use = k;
                            break;
                        }
                    }
                    if (next_use > farthest) {
                        farthest = next_use;
                        victim = j;
                    }
                }
                frames[victim] = page;
            }
            faults++;
        }
    }

    return faults;
}

int main() {
    for (int f = 1; f <= 7; f++) {
        printf("Frames: %d, FIFO: %d faults, Optimal: %d faults\n",
               f, fifo(f), optimal(f));
    }
    return 0;
}
```


> [TIP]
> **LRU replacement** is the most effective theoretical algorithm but expensive to implement exactly. Practical systems use approximations: the **second-chance (clock) algorithm** uses a reference bit to approximate LRU with minimal overhead.

> [WARNING]
> **Belady anomaly** is unique to FIFO: adding more frames can increase page faults. This does not occur with stack-based algorithms like LRU or Optimal.

> [NOTE]
> **Copy-on-Write (CoW)** is key: `fork()` creates a child that shares the parent pages until one writes. No physical pages are copied until then. This dramatically speeds up `fork()` and reduces memory usage.

## Concept Comparison

| Algorithm | Belady Anomaly | Implementation Cost | Hit Ratio |
|---------|--------------|-------------------|---------|
| FIFO | Yes | Very low | Poor -- may evict frequently used pages |
| Optimal (MIN) | No | Impossible (needs future knowledge) | Best (benchmark) |
| LRU | No | High (full implementation) | Near-optimal |
| Clock (2nd Chance) | Varies | Low (reference bit) | Good approx. of LRU |

## Quick Reference

| Term | Definition |
|------|------------|
| **Virtual Memory** | Separation of logical from physical memory; process runs partially loaded |
| **Demand Paging** | Page loaded only when a reference to it occurs |
| **Page Fault** | Interrupt when referenced page is not in physical memory |
| **Thrashing** | Critical performance collapse from excessive paging |
| **Copy-on-Write** | Pages shared until modified, then copied |
| **Working Set** | Set of pages a process is actively referencing |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| Demand Paging | Standard | May disable (prefers own caching) | Host-paged | Guest OS manages own paging |
| LRU | Approximated (Clock) | Buffer pool replacement | Not applicable | Page ballooning |
| Thrashing | Good allocation reduces | Rare (controlled workload) | Rare | Over-commitment risk |
| CoW | fork() optimization | Snapshot/checkpoint | Container layers | VM cloning |

## Chapter Quiz

1. What happens when a process references a page not in memory?
   - a) Process terminated
   - b) Page fault; OS loads page from disk
   - c) System reboots
   - d) TLB is flushed

2. Which replacement algorithm is impossible to implement?
   - a) FIFO
   - b) LRU
   - c) Optimal (MIN)
   - d) Clock

3. Belady anomaly is associated with:
   - a) FIFO
   - b) LRU
   - c) Optimal
   - d) Clock

4. Spending more time paging than executing is called:
   - a) Deadlock
   - b) Thrashing
   - c) Starvation
   - d) Race condition

## Summary

- Virtual memory decouples logical address space from physical memory via demand paging
- Page faults are expensive (~10ms); even 0.1% fault rate causes a 100Ã— slowdown
- FIFO is simple but can exhibit Belady's Anomaly (more frames â†’ more faults)
- Optimal page replacement minimizes faults but requires future knowledge
- LRU approximates Optimal using past references; Clock algorithm approximates LRU with low overhead
- Thrashing occurs when working set exceeds physical memory; solved by adjusting multiprogramming level
- Locality (spatial + temporal) makes virtual memory work in practice
- Page size involves trade-offs between internal fragmentation, TLB reach, and I/O overhead

## Exercises

### Basic

1. What is a page fault? Walk through the steps the OS takes to handle one.
2. Given the reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 frames, compute page faults for FIFO and LRU.
3. What is thrashing? What is the working set, and how does it relate to thrashing?

### Intermediate

4. Demonstrate Belady's Anomaly: Find a reference string where FIFO with 4 frames has more faults than with 3 frames.
5. Implement the Clock (Second-Chance) page replacement algorithm. Use a circular list of page table entries with reference bits. Test it on the same reference string as Example 2.
6. Explain the working-set model. If a process has working-set window Î” = 10, and the reference string is 1, 2, 3, 2, 1, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, what is the working set at each point? Identify locality transitions.

### Advanced

7. Write a benchmark that allocates a 1 GB array and measures access time for sequential, strided (stride = page_size Ã— 2), and fully random access patterns. Use `clock_gettime()` for precise measurement. Explain the results in terms of TLB misses and page faults.
8. Implement the **Working-Set Page Replacement Algorithm**: keep track of each process's working set and preempt pages not in the working set. Compare its fault rate to LRU for the reference string.
9. Design and implement a program that uses `mmap()` to process a 1 GB file. Measure the time to read the file sequentially with and without `madvise()` hints (`MADV_SEQUENTIAL`, `MADV_RANDOM`, `MADV_WILLNEED`). What is the impact of each hint on page faults?
