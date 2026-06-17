# Chapter 9: Virtual Memory

## Learning Objectives

- Distinguish virtual memory from physical memory management
- Explain demand paging and the concept of page faults
- Implement and compare page replacement algorithms (FIFO, Optimal, LRU, Second-Chance)
- Analyze thrashing and its relation to the working-set model
- Describe the effects of page size on system performance
- Apply the principle of locality (spatial and temporal)

## Theory

![Paging and Segmentation](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/09-virtual-memory.png)

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
┌──────┬───┬───┬───┬──────────┐
│Frame │ V │ R │ D │Protection│
│Number│alid│ef │irty│         │
└──────┴───┴───┴───┴──────────┘
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
Page Fault → Trap → OS checks validity
                │
          ┌─────┴──────┐
          ↓             ↓
     Invalid page    Valid page (not in memory)
          ↓                │
     Segmentation     Find free frame
     Fault                │
                     ┌────┴────┐
                     ↓         ↓
                 Found    None available
                     │         │
                     │    Page replacement
                     │         │
                     ↓─────────┘
                  Disk read needed page
                       │
                  Update page table
                       │
                  Restart instruction
```

#### Effective Access Time with Demand Paging

```
EAT = (1 − p) × memory_access + p × page_fault_time

Where p = page fault probability (0 ≤ p ≤ 1)

Example:
  Memory access = 100 ns
  Page fault service time = 10 ms (including disk access)
  p = 0.001 (1 fault per 1000 accesses)

  EAT = 0.999 × 100ns + 0.001 × 10ms
      = 99.9ns + 10,000ns
      = 10,099.9ns (∼10μs)

  The system is 100× slower with just 0.1% page faults!
```

### Copy-on-Write (COW)

When `fork()` is called, instead of copying all pages, the child **shares** the parent's pages. Pages are marked as copy-on-write. When either process writes to a page, a trap occurs, and the page is duplicated.

COW eliminates the overhead of copying the entire address space — especially valuable when `exec()` follows `fork()` (the common case).

### Page Replacement

When a page fault occurs and no free frames are available, the OS must **replace** an existing page to make room for the new one.

#### Page Replacement Algorithms

#### FIFO (First-In, First-Out)

Replace the page that has been in memory the longest.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 → fault  [7]
  0 → fault  [7, 0]
  1 → fault  [7, 0, 1]
  2 → fault  [0, 1, 2]     (replaces 7 — the oldest)
  0 → hit    [0, 1, 2]
  3 → fault  [1, 2, 3]     (replaces 0)
  0 → fault  [2, 3, 0]     (replaces 1)
  ...
  Total page faults: 15
```

**Belady's Anomaly**: With FIFO, increasing the number of frames can sometimes INCREASE page faults (counterintuitive).

#### Optimal Page Replacement (OPT or MIN)

Replace the page that will not be used for the longest time in the future.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 → fault  [7]
  0 → fault  [7, 0]
  1 → fault  [7, 0, 1]
  2 → fault  [0, 1, 2]     (replaces 7 — used farthest in future)
  0 → hit
  3 → fault  [0, 1, 3]     (replaces 2 or 1; optimal replaces 2)
  ...
  Total page faults: 9
```

**Problem**: Requires knowledge of the future — impossible to implement. Used as a benchmark for other algorithms.

#### LRU (Least Recently Used)

Replace the page that has not been used for the longest time. This approximates Optimal using past behavior.

```
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames:

  7 → fault  [7]
  0 → fault  [7, 0]
  1 → fault  [7, 0, 1]
  2 → fault  [0, 1, 2]     (replaces 7 — least recently used)
  0 → hit    update LRU
  3 → fault  [1, 2, 3]     (replaces 1 — LRU is 1, then 2, then 0)
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
Hand → [Page A: ref=1] → [Page B: ref=0] → [Page C: ref=1] → [Page D: ref=0]
           │                                                      │
           └──────────────────────────────────────────────────────┘

Algorithm:
1. Check the page the hand points to
2. If ref = 0: replace this page
3. If ref = 1: set ref = 0, advance hand, repeat
```

This is essentially a circular FIFO with a second chance. It approximates LRU with very little overhead.

```
Clock algorithm with reference string 7, 0, 1, 2 (3 frames):
  After 7, 0, 1: [7(r=1), 0(r=1), 1(r=1)]  hand→7
  Reference 2 (fault):
    Hand→7: ref=1 → set to 0, advance
    Hand→0: ref=1 → set to 0, advance
    Hand→1: ref=1 → set to 0, advance
    Hand→7: ref=0 → replace!
    [2(r=1), 0(r=0), 1(r=0)]  hand→0
```

### Frame Allocation

How many frames should each process get?

**Minimum allocation**: Defined by the architecture — the number of frames needed for all instructions that can reference memory in one cycle. Example: a move instruction with source and destination operands might need 6 frames.

**Equal allocation**: If 100 frames and 5 processes, give each 20 frames.

**Proportional allocation**: Give frames proportional to process size.

```
frames_for_Pi = (size_of_Pi / total_size) × total_frames
```

**Priority allocation**: Higher-priority processes get more frames.

### Thrashing

**Thrashing** occurs when a process is spending more time paging than executing. The system is overcommitted — the working set of all processes exceeds physical memory.

```
Symptoms of thrashing:
- CPU utilization drops (processes are waiting for pages)
- OS thinks it needs more multiprogramming
- OS adds more processes to the system
- Even more paging → even lower CPU utilization → even more processes
  This is a positive feedback loop that can bring a system to its knees!
```

#### The Working-Set Model (Denning, 1968)

The **working set** is the set of pages a process is currently using. It is defined as the set of pages referenced in the last Δ (working-set window).

- If the total working set exceeds physical memory → thrashing
- If a process does not have enough frames to hold its working set → thrashing

```
Working set size as a function of Δ (time window):
  - Small Δ: Working set is small but may not capture locality
  - Large Δ: Working set approaches the entire address space
  - Infinite Δ: All pages ever referenced are in the working set

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
──────            ───────────          ──────────
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

    // Sequential access (good locality — low page faults)
    for (int i = 0; i < size; i++) {
        arr[i] = i;  // Pages brought in sequentially
    }

    // Random access (poor locality — many page faults)
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
            printf("FIFO (%d frames): Page %d → fault\n", frames_count, page);
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

## Summary

- Virtual memory decouples logical address space from physical memory via demand paging
- Page faults are expensive (~10ms); even 0.1% fault rate causes a 100× slowdown
- FIFO is simple but can exhibit Belady's Anomaly (more frames → more faults)
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
6. Explain the working-set model. If a process has working-set window Δ = 10, and the reference string is 1, 2, 3, 2, 1, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, what is the working set at each point? Identify locality transitions.

### Advanced

7. Write a benchmark that allocates a 1 GB array and measures access time for sequential, strided (stride = page_size × 2), and fully random access patterns. Use `clock_gettime()` for precise measurement. Explain the results in terms of TLB misses and page faults.
8. Implement the **Working-Set Page Replacement Algorithm**: keep track of each process's working set and preempt pages not in the working set. Compare its fault rate to LRU for the reference string.
9. Design and implement a program that uses `mmap()` to process a 1 GB file. Measure the time to read the file sequentially with and without `madvise()` hints (`MADV_SEQUENTIAL`, `MADV_RANDOM`, `MADV_WILLNEED`). What is the impact of each hint on page faults?
