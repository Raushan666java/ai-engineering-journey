# Chapter 9: Virtual Memory

**<< [Memory Management](./08-memory-management.md)** | [**Next: File Systems**](./10-file-systems.md) >>

---

## Learning Objectives

- Distinguish virtual memory from physical memory management
- Explain demand paging and the concept of page faults
- Implement and compare page replacement algorithms (FIFO, Optimal, LRU, Second-Chance, MFU, LFU)
- Analyze thrashing and its relation to the working-set model
- Describe the effects of page size on system performance
- Apply the principle of locality (spatial and temporal)
- Understand frame allocation strategies and their impact
- Explain LRU approximation techniques used in real OS

## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Virtual Memory** | Allows execution of processes partially in memory; illusion of larger memory |
| **Demand Paging** | Pages loaded only when referenced; lazy pager |
| **Page Fault** | Referenced page not in memory => trap to OS => load from disk => restart instruction |
| **Copy-on-Write** | Pages shared after fork(); copied only on write |
| **Page Replacement** | Select victim page: FIFO, Optimal, LRU, Clock, MFU, LFU |
| **LRU Approximation** | Reference bit, Second-Chance, NRU, Aging - practical LRU |
| **Frame Allocation** | Fixed, proportional, priority, local, global |
| **Thrashing** | Excessive paging - process spends more time paging than executing |
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
    G --> H[Working Set Model]
    H --> I[Page Size]
    I --> J[Real Systems]
    J --> K[Summary]
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

**Real-World Analogy:** A large library with a small reading desk. You cannot place all books on the desk at once. Instead, you bring books from the stacks to the desk only when you need them. When the desk is full and you need another book, you return one to the stacks. The desk is physical memory; the stacks are disk; your research paper is the process accessing data across many books.

### Demand Paging

In a **demand paging** system, pages are loaded into memory only when they are referenced (not in advance). This is like a paging system with **lazy loading**.

```
Page Table Entry (with demand paging):
+-------+---+---+---+------------+
| Frame | V | R | D | Protection |
| Number| a | e | i |           |
|       | l | f | r |           |
|       | i |   | t |           |
|       | d |   | y |           |
+-------+---+---+---+------------+
```

- **Valid bit** = 0: Page is not in memory (page fault)
- **Valid bit** = 1: Page is in memory
- **Reference bit (R):** Set by hardware when page is accessed
- **Dirty bit (D):** Set when page is written to

#### Real-World Analogy

A food delivery kitchen with limited counter space. Ingredients (pages) are stored in a large walk-in refrigerator (disk). The chef (CPU) only brings ingredients to the counter (physical memory) when a dish (instruction) requires them. If the counter is full when a new ingredient is needed, the chef must put something back in the fridge first.

#### Demand Paging - Numbered Steps

1. CPU generates virtual address for instruction/data fetch
2. MMU translates virtual page number (VPN) to page table entry (PTE)
3. MMU checks valid bit in PTE
4. If valid bit = 1 (page in memory): MMU extracts frame number, forms physical address, accesses memory
5. If valid bit = 0 (page not in memory): MMU raises a **page fault** trap to the OS
6. OS saves CPU state (PC, registers)
7. OS validates the faulting address (is it a valid mapping?)
8. OS reads the page from swap space/disk into a free frame
9. OS updates page table: set valid bit = 1, record frame number
10. OS restarts the faulting instruction

```
DEMAND PAGING FLOW:

   CPU Access
      |
      v
   MMU: Translate VPN -> PTE
      |
      v
   Check Valid Bit
   /              \
 Valid=1          Valid=0
   |                 |
   v                 v
 Extract Frame    PAGE FAULT
   |                 |
   v                 v
 Physical Addr    OS Handler
   |              - Save state
   v              - Validate addr
 Memory Access    - Disk I/O (page in)
   |              - Update page table
   v              - Restart instr
   Done
```

#### Pseudocode - Demand Paging Handler

```
PROCEDURE handle_memory_access(virtual_address):
    vpn = virtual_address >> PAGE_SHIFT
    pte = page_table[vpn]

    IF pte.valid == 1:
        frame = pte.frame_number
        physical_address = (frame << PAGE_SHIFT) | (virtual_address & OFFSET_MASK)
        access_memory(physical_address)
    ELSE:
        CALL page_fault_handler(vpn)
    END IF
END PROCEDURE

PROCEDURE page_fault_handler(vpn):
    SAVE process_state(PC, registers)

    IF NOT is_valid_address(vpn):
        SEND_SIGSEGV(process)
        RETURN
    END IF

    IF page_table[vpn].valid == 1:
        // Race condition: page was brought in by another thread
        RESTORE process_state()
        RETURN
    END IF

    frame = FIND_free_frame()
    IF frame == NULL:
        victim = SELECT_victim_page()
        IF victim.dirty == 1:
            WRITE victim TO swap_disk
        END IF
        UPDATE page_table[victim.vpn].valid = 0
        frame = victim.frame_number
    END IF

    ISSUE_disk_read(vpn, frame)
    UPDATE page_table[vpn].valid = 1
    UPDATE page_table[vpn].frame = frame
    UPDATE page_table[vpn].dirty = 0

    RESTORE process_state()
    // Instruction restarts - MMU retries access
END PROCEDURE
```

#### Dry Run - Demand Paging Trace

Time | Access | Page Table State | Fault? | Free Frames | Notes
-----|--------|-----------------|--------|-------------|------
t1   | VPN=3  | 3->[1,F0], others [0,-] | YES | 2 | Load from disk, frame 0
t2   | VPN=5  | 3->[1,F0], 5->[1,F1], others [0,-] | YES | 1 | Load from disk, frame 1
t3   | VPN=3  | 3->[1,F0], 5->[1,F1] | NO | 1 | Hit - already in F0
t4   | VPN=8  | 3->[1,F0], 5->[1,F1], 8->[1,F2] | YES | 0 | Load from disk, frame 2
t5   | VPN=5  | Hit | NO | 0 |
t6   | VPN=9  | 9->[1,F0] replaces 3 (FIFO) | YES | 0 | Replace: evict VPN 3

#### C++ Implementation - Demand Paging Simulation

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <climits>

struct PageTableEntry {
    bool valid;
    unsigned frame;
    bool dirty;
    bool referenced;
};

class DemandPagingSimulator {
    unsigned page_count;
    unsigned frame_count;
    std::vector<PageTableEntry> page_table;
    std::vector<unsigned> free_frames;
    std::vector<unsigned> memory;

public:
    DemandPagingSimulator(unsigned pages, unsigned frames)
        : page_count(pages), frame_count(frames) {
        page_table.resize(pages, {false, 0, false, false});
        for (unsigned i = 0; i < frames; i++) free_frames.push_back(i);
        memory.resize(frames, UINT_MAX);
    }

    struct Result {
        unsigned page_faults;
        unsigned page_hits;
        double fault_rate;
    };

    Result run(const std::vector<unsigned>& references) {
        unsigned faults = 0, hits = 0;
        for (auto vpn : references) {
            if (page_table[vpn].valid) {
                hits++;
                page_table[vpn].referenced = true;
                std::cout << "VPN " << vpn << " -> HIT (frame "
                          << page_table[vpn].frame << ")\n";
            } else {
                faults++;
                handle_fault(vpn);
                std::cout << "VPN " << vpn << " -> FAULT (frame "
                          << page_table[vpn].frame << ")\n";
            }
        }
        return {faults, hits, (double)faults / references.size()};
    }

private:
    void handle_fault(unsigned vpn) {
        if (!free_frames.empty()) {
            unsigned frame = free_frames.back();
            free_frames.pop_back();
            page_table[vpn] = {true, frame, false, true};
            memory[frame] = vpn;
        } else {
            unsigned victim_frame = 0;
            unsigned victim_vpn = memory[0];
            if (page_table[victim_vpn].dirty) {
                std::cout << "  Writing back VPN " << victim_vpn << "\n";
            }
            page_table[victim_vpn].valid = false;
            page_table[vpn] = {true, victim_frame, false, true};
            memory[victim_frame] = vpn;
        }
    }
};

int main() {
    DemandPagingSimulator dps(20, 3);
    std::vector<unsigned> refs = {3, 5, 3, 8, 5, 9};
    auto r = dps.run(refs);
    std::cout << "\nFaults: " << r.page_faults
              << ", Hits: " << r.page_hits
              << ", Rate: " << r.fault_rate << "\n";
    return 0;
}
```

#### Python Implementation - Demand Paging Simulation

```python
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class PageTableEntry:
    valid: bool = False
    frame: Optional[int] = None
    dirty: bool = False
    referenced: bool = False


class DemandPagingSimulator:
    def __init__(self, num_pages: int, num_frames: int):
        self.page_table = [PageTableEntry() for _ in range(num_pages)]
        self.free_frames = list(range(num_frames))
        self.memory: List[Optional[int]] = [None] * num_frames

    def run(self, references: List[int]):
        faults = hits = 0
        for vpn in references:
            if self.page_table[vpn].valid:
                hits += 1
                self.page_table[vpn].referenced = True
                print(f"VPN {vpn} -> HIT (frame {self.page_table[vpn].frame})")
            else:
                faults += 1
                self._handle_fault(vpn)
                print(f"VPN {vpn} -> FAULT (frame {self.page_table[vpn].frame})")
        print(f"\nFaults: {faults}, Hits: {hits}, Rate: {faults / len(references):.2f}")
        return faults, hits

    def _handle_fault(self, vpn: int):
        if self.free_frames:
            frame = self.free_frames.pop()
            self.page_table[vpn] = PageTableEntry(valid=True, frame=frame, referenced=True)
            self.memory[frame] = vpn
        else:
            victim_frame = 0
            victim_vpn = self.memory[0]
            if self.page_table[victim_vpn].dirty:
                print(f"  Writing back VPN {victim_vpn}")
            self.page_table[victim_vpn] = PageTableEntry()
            self.page_table[vpn] = PageTableEntry(valid=True, frame=victim_frame, referenced=True)
            self.memory[victim_frame] = vpn


if __name__ == "__main__":
    dps = DemandPagingSimulator(20, 3)
    dps.run([3, 5, 3, 8, 5, 9])
```

#### Complexity Analysis

- **Time per access:** O(1) for hit (MMU lookup + memory access); O(p) for fault where p = page replacement overhead
- **Space:** O(P + F) where P = number of virtual pages, F = number of frames
- **WHY O(1) for hits:** Page table lookup is direct-indexed by VPN; MMU does it in hardware
- **WHY page faults are expensive:** Disk I/O (~10ms) vs RAM access (~100ns) = 100,000x slower
- **EAT formula:** EAT = (1-p) * MA + p * PFT where p = fault probability, MA = memory access time, PFT = page fault time

#### A&D Table

| Advantage | Disadvantage |
|-----------|-------------|
| Runs programs larger than physical RAM | Page faults are expensive (disk I/O) |
| Higher multiprogramming degree | Overhead of page table management |
| Less I/O (only needed pages loaded) | Thrashing possible under memory pressure |
| Each process gets private address space | TLB misses add translation cost |

#### Edge Cases

- **Zero pages (lazy allocation):** On first access, OS maps to a shared zero-filled page, then copy-on-write. No physical page allocated until write.
- **No free frame available:** Triggers page replacement. If all frames are wired/pinned, the fault cannot be serviced (system panic in extreme cases).
- **Instruction restart:** If the faulting instruction is complex (e.g. string move spanning pages), the OS must save enough state to restart safely.

### Page Fault Handling - Detailed Flow

#### Real-World Analogy

You are reading a textbook at a library desk. You realize the chapter you need is in a different book still on the shelf (page fault). You:
1. Mark your current place (save state)
2. Walk to the shelf (disk seek)
3. Retrieve the book (read from disk)
4. Bring it to your desk and open to the right page (load into frame)
5. Resume reading where you left off (restart instruction)

#### The 9 Steps of Page Fault Handling

1. **Trap to OS:** The MMU detects the valid bit = 0 and raises a page fault exception. Control transfers to the OS page fault handler.
2. **Save Process State:** The OS saves the program counter, registers, and other volatile state of the currently running process.
3. **Identify Faulting Page:** The OS reads the faulting virtual address from the CPU control registers (CR2 on x86) and extracts the VPN.
4. **Validate Address:** The OS checks:
   - Is the VPN within the process valid address range?
   - Do the protection bits permit the requested access (read/write/execute)?
   - If invalid -> segmentation fault / access violation.
5. **Find a Free Frame:** Consult the free-frame list. If empty, invoke page replacement to evict a victim.
6. **Initiate Disk I/O:** Issue a block read from the swap area or mapped file into the allocated frame. This is the slowest step.
7. **Context Switch (Optional):** While waiting for disk, the OS may run another process to keep the CPU busy.
8. **I/O Completion Interrupt:** The disk controller signals completion. The OS updates the PTE: set valid = 1, fill frame number, clear dirty bit.
9. **Restart Instruction:** The OS restores the saved state and re-executes the faulting instruction. The MMU retries the translation - this time valid = 1, access succeeds.

```
PAGE FAULT FLOW (detailed):

  +------------------+
  | Instruction Ref  |
  | Virtual Address  |
  +--------+---------+
           |
           v
  +--------+---------+
  | MMU: VPN->PTE    |
  | Valid bit == 0   |
  +--------+---------+
           |
           v
  +--------+---------+
  | TRAP to OS       |
  | Page Fault       |
  | Handler          |
  +--------+---------+
           |
           v
  +--------+---------+
  | Save CPU state   |
  | (PC, regs)       |
  +--------+---------+
           |
           v
  +--------+---------+
  | Validate address |
  +--------+---------+
   /                \
  v                  v
Valid             Invalid
  |                  |
  v                  v
+--+-----------+   SEGFAULT
| Free Frame?  |   (kill process)
+--+--------+--+
 /          \
v            v
Yes          No
|             |
|     +-------+-------+
|     | Page Replace   |
|     | Select victim  |
|     | Dirty? Writebk |
|     +-------+-------+
|             |
+------+------+
       |
       v
+------+---------+
| Start Disk I/O |
| (blocking/async)|
+------+---------+
       |
       v
+------+---------+
| Update PTE      |
| valid=1, frame= |
+------+---------+
       |
       v
+------+---------+
| Restart Instr   |
+----------------+
```

#### Effective Access Time with Demand Paging

```
EAT = (1 - p) * memory_access + p * page_fault_time

Where p = page fault probability (0 <= p <= 1)

Memory access = 100 ns
Page fault service time = 10 ms (including disk access)

EAT for various fault rates:

p = 0.00001 (1 in 100,000):
  EAT = 0.99999 * 100ns + 0.00001 * 10ms
      = 99.999ns + 100ns = ~200ns  (2x slowdown)

p = 0.0001 (1 in 10,000):
  EAT = 0.9999 * 100ns + 0.0001 * 10ms
      = 99.99ns + 1000ns = ~1100ns  (11x slowdown)

p = 0.001 (1 in 1,000):
  EAT = 0.999 * 100ns + 0.001 * 10ms
      = 99.9ns + 10000ns = ~10100ns  (101x slowdown)

p = 0.01 (1 in 100):
  EAT = 0.99 * 100ns + 0.01 * 10ms
      = 99ns + 100000ns = ~100100ns  (1001x slowdown)

CONCLUSION: Even 0.1% page faults cause a 100x slowdown.
Systems must keep fault rate extremely low (< 0.001%).
```

### Copy-on-Write (COW)

When `fork()` is called, instead of copying all pages, the child **shares** the parent pages. Pages are marked as copy-on-write. When either process writes to a page, a trap occurs, and the page is duplicated.

COW eliminates the overhead of copying the entire address space - especially valuable when `exec()` follows `fork()` (the common case).

#### Real-World Analogy

A shared office document. Instead of photocopying the entire binder for every team member, everyone reads the same original. The first person who wants to mark up a page makes a photocopy of just that page. Everyone else still reads the original.

#### COW Numbered Steps

1. Parent process calls `fork()`
2. OS creates child process with its own page table
3. OS copies parent page table entries to child page table
4. All PTEs are marked read-only with COW flag set
5. Both processes share the same physical frames
6. Process P1 writes to shared page at address A
7. MMU detects write to read-only page (page fault)
8. OS fault handler sees COW flag:
   a. Allocate a new physical frame
   b. Copy page content from original frame
   c. Update P1 PTE: point to new frame, set read-write
   d. Decrement original frame reference count
9. P1 retries instruction - write succeeds on private copy
10. Other process still has read-only access to original

#### COW Dry Run Trace

Step | Action | Pages Shared | New Frames | Notes
-----|--------|-------------|------------|------
1    | Initial parent | A(pvt), B(pvt), C(pvt) | 3 | 3 frames in use
2    | fork() | A(cow), B(cow), C(cow) | 3 | 0 new frames allocated
3    | Child reads A | Hit, no copy | 3 | Read-only ok
4    | Parent writes B | Fault! OS copies B | 4 | New frame for B'
5    | Child writes A | Fault! OS copies A | 5 | New frame for A'
6    | Both read C | Hit, still shared | 5 | C remains COW

#### C++ Implementation - COW Simulation

```cpp
#include <iostream>
#include <vector>

class COWSimulator {
    struct Frame {
        std::vector<char> data;
        int ref_count;
        bool cow;
    };
    std::vector<Frame> frames;

public:
    COWSimulator() {
        frames.push_back({{'A'}, 1, false});
        frames.push_back({{'B'}, 1, false});
        frames.push_back({{'C'}, 1, false});
    }

    void fork(int parent_pid, int child_pid) {
        std::cout << "  COW fork: child " << child_pid
                  << " shares " << frames.size() << " frames\n";
        for (auto& f : frames) {
            f.ref_count++;
            f.cow = true;
        }
    }

    void write(int pid, int frame_id) {
        auto& f = frames[frame_id];
        if (f.cow) {
            std::cout << "  COW fault on frame " << frame_id
                      << " (refs=" << f.ref_count << ")\n";
            frames.push_back({f.data, 1, false});
            f.ref_count--;
            if (f.ref_count == 0) f.cow = false;
            std::cout << "  Copied to new frame " << frames.size() - 1 << "\n";
        } else {
            std::cout << "  Write to private frame " << frame_id << "\n";
        }
    }

    void print_stats() {
        std::cout << "Total frames: " << frames.size() << "\n";
        for (size_t i = 0; i < frames.size(); i++) {
            std::cout << "  Frame " << i << ": refs=" << frames[i].ref_count
                      << " cow=" << frames[i].cow << "\n";
        }
    }
};

int main() {
    COWSimulator sim;
    std::cout << "=== COW Simulation ===\n";
    sim.fork(1, 2);
    sim.write(2, 0);
    sim.write(1, 1);
    sim.print_stats();
    return 0;
}
```

#### Python Implementation - COW Simulation

```python
class COWSimulator:
    def __init__(self):
        self.frames = [
            {"data": "AAAA", "refs": 1, "cow": False},
            {"data": "BBBB", "refs": 1, "cow": False},
            {"data": "CCCC", "refs": 1, "cow": False},
        ]

    def fork(self, parent_pid, child_pid):
        print(f"  COW fork: child {child_pid} shares {len(self.frames)} frames")
        for f in self.frames:
            f["refs"] += 1
            f["cow"] = True

    def write(self, pid, frame_id):
        f = self.frames[frame_id]
        if f["cow"]:
            print(f"  COW fault on frame {frame_id} (refs={f['refs']})")
            self.frames.append({"data": f["data"][:], "refs": 1, "cow": False})
            f["refs"] -= 1
            if f["refs"] == 0:
                f["cow"] = False
            print(f"  Copied to new frame {len(self.frames) - 1}")
        else:
            print(f"  Write to private frame {frame_id}")

    def print_stats(self):
        print(f"Total frames: {len(self.frames)}")
        for i, f in enumerate(self.frames):
            print(f"  Frame {i}: refs={f['refs']} cow={f['cow']}")


sim = COWSimulator()
print("=== COW Simulation ===")
sim.fork(1, 2)
sim.write(2, 0)
sim.write(1, 1)
sim.print_stats()
```

#### Complexity Analysis

- **Time (fork):** O(P) where P = number of page table entries (copy PTEs, no memory copy)
- **Time (COW fault):** O(page_size) for the actual copy + O(1) for PTE update
- **Space savings:** Without COW, fork() copies all pages - O(total_address_space). With COW, typically 90%+ of pages are never copied.
- **WHY O(P) for fork:** Must duplicate every PTE for the child process page table. But actual physical pages are not copied - only meta-data. This is thousands of times faster than copying all pages.
### Page Replacement

When a page fault occurs and no free frames are available, the OS must **replace** an existing page to make room for the new one. The page replacement algorithm selects which page to evict.

#### Page Replacement Algorithms

### FIFO (First-In, First-Out)

Replace the page that has been in memory the longest.

#### Real-World Analogy

A supermarket checkout queue. The first person in line (oldest arrival) is served and leaves first. In FIFO page replacement, the page that entered memory earliest is the first to be evicted - regardless of how frequently it is used.

#### FIFO Numbered Steps

1. Maintain a queue of pages in memory order (by load time)
2. On a page fault with no free frames:
   a. Dequeue the head of the queue (oldest page)
   b. Evict the dequeued page (write back if dirty)
   c. Load the new page
   d. Enqueue the new page at the tail
3. On a page hit: no change to the queue

#### Pseudocode - FIFO

```
PROCEDURE fifo_page_replace(reference_string, frame_count):
    frames = EMPTY_ARRAY(frame_count)
    queue = EMPTY_QUEUE()
    faults = 0

    FOR page IN reference_string:
        IF page IN frames:
            PRINT "HIT"
        ELSE:
            IF frames has free slot:
                frames[next_free] = page
            ELSE:
                victim = queue.dequeue()
                frames[position_of(victim)] = page
            queue.enqueue(page)
            faults++
            PRINT "FAULT"
    RETURN faults
```

#### Dry Run Trace Table - FIFO

Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames

Time | Ref | Frame0 | Frame1 | Frame2 | Queue (front->back) | Fault? | Victim
-----|-----|--------|--------|--------|---------------------|--------|-------
1    | 7   | 7      | -      | -      | [7]                 | FAULT  | -
2    | 0   | 7      | 0      | -      | [7,0]               | FAULT  | -
3    | 1   | 7      | 0      | 1      | [7,0,1]             | FAULT  | -
4    | 2   | **2**  | 0      | 1      | [0,1,2]             | FAULT  | 7
5    | 0   | 2      | 0      | 1      | [0,1,2]             | HIT    | -
6    | 3   | 2      | **3**  | 1      | [1,2,3]             | FAULT  | 0
7    | 0   | 2      | 3      | **0**  | [2,3,0]             | FAULT  | 1
8    | 4   | **4**  | 3      | 0      | [3,0,4]             | FAULT  | 2
9    | 2   | 4      | **2**  | 0      | [0,4,2]             | FAULT  | 3
10   | 3   | 4      | 2      | **3**  | [4,2,3]             | FAULT  | 0
11   | 0   | **0**  | 2      | 3      | [2,3,0]             | FAULT  | 4
12   | 3   | 0      | 2      | 3      | [2,3,0]             | HIT    | -
13   | 2   | 0      | 2      | 3      | [2,3,0]             | HIT    | -
14   | 1   | 0      | **1**  | 3      | [3,0,1]             | FAULT  | 2
15   | 2   | 0      | 1      | **2**  | [0,1,2]             | FAULT  | 3
16   | 0   | 0      | 1      | 2      | [0,1,2]             | HIT    | -
17   | 1   | 0      | 1      | 2      | [0,1,2]             | HIT    | -
18   | 7   | **7**  | 1      | 2      | [1,2,7]             | FAULT  | 0
19   | 0   | 7      | **0**  | 2      | [2,7,0]             | FAULT  | 1
20   | 1   | 7      | 0      | **1**  | [7,0,1]             | FAULT  | 2

Total page faults: 15

#### C++ Implementation - FIFO

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>

class FIFOReplacement {
    unsigned frame_count;
    std::vector<int> frames;
    std::queue<int> fifo_queue;
    std::unordered_set<int> in_memory;

public:
    FIFOReplacement(unsigned n) : frame_count(n), frames(n, -1) {}

    unsigned run(const std::vector<int>& references) {
        unsigned faults = 0;
        int next_free = 0;

        std::cout << "\n=== FIFO Page Replacement ===\n";
        for (size_t i = 0; i < references.size(); i++) {
            int page = references[i];
            if (in_memory.count(page)) {
                std::cout << "Ref " << page << " -> HIT\n";
            } else {
                faults++;
                if ((int)in_memory.size() < frame_count) {
                    frames[next_free] = page;
                    fifo_queue.push(page);
                    in_memory.insert(page);
                    next_free++;
                    std::cout << "Ref " << page << " -> FAULT (loaded into F" << next_free-1 << ")\n";
                } else {
                    int victim = fifo_queue.front();
                    fifo_queue.pop();
                    in_memory.erase(victim);
                    for (auto& f : frames) {
                        if (f == victim) { f = page; break; }
                    }
                    fifo_queue.push(page);
                    in_memory.insert(page);
                    std::cout << "Ref " << page << " -> FAULT (replaced " << victim << ")\n";
                }
            }
        }
        return faults;
    }
};
```

#### Python Implementation - FIFO

```python
from collections import deque

class FIFOReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count
        self.frames = [-1] * frame_count
        self.fifo_queue = deque()
        self.in_memory = set()

    def run(self, references):
        faults = 0
        next_free = 0
        print("\n=== FIFO Page Replacement ===")
        for page in references:
            if page in self.in_memory:
                print(f"Ref {page} -> HIT")
            else:
                faults += 1
                if len(self.in_memory) < self.frame_count:
                    self.frames[next_free] = page
                    self.fifo_queue.append(page)
                    self.in_memory.add(page)
                    print(f"Ref {page} -> FAULT (loaded into F{next_free})")
                    next_free += 1
                else:
                    victim = self.fifo_queue.popleft()
                    self.in_memory.remove(victim)
                    idx = self.frames.index(victim)
                    self.frames[idx] = page
                    self.fifo_queue.append(page)
                    self.in_memory.add(page)
                    print(f"Ref {page} -> FAULT (replaced {victim})")
        return faults
```

#### Complexity Analysis

- **Time:** O(N * F) worst case where N = references, F = frames (linear scan to check membership). With hash set: O(N) average.
- **Space:** O(F) for frames + queue
- **WHY O(N):** Each reference requires O(1) set lookup and O(1) queue operations in the average case with hash set optimization.

#### A&D Table

| Advantage | Disadvantage |
|-----------|-------------|
| Extremely simple to implement | Suffers from Belady Anomaly |
| Low overhead (no metadata needed) | May evict frequently used pages |
| Fairness - all pages eventually replaced | Ignores access patterns entirely |

#### Edge Cases - FIFO

- **Belady Anomaly:** Adding more frames INCREASES page faults. Example: Reference string 1,2,3,4,1,2,5,1,2,3,4,5 with 3 frames has 9 faults; with 4 frames has 10 faults.
- **Zero pages:** If process references no pages, FIFO never activates.
- **No frame available:** If all frames are pinned (locked in memory), the fault cannot be serviced.
- **Identical references:** If the same page is referenced repeatedly, FIFO fails to keep it in memory because age determines eviction, not utility.

```
BELADY ANOMALY DEMONSTRATION:

Ref str: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

3 frames:
  1 -> F(1) [1]
  2 -> F(2) [1,2]
  3 -> F(3) [1,2,3]
  4 -> F(4) [2,3,4]  replaces 1
  1 -> F(5) [3,4,1]  replaces 2
  2 -> F(6) [4,1,2]  replaces 3
  5 -> F(7) [1,2,5]  replaces 4
  1 -> HIT
  2 -> HIT
  3 -> F(8) [2,5,3]  replaces 1
  4 -> F(9) [5,3,4]  replaces 2
  5 -> HIT
  Total: 9 faults

4 frames:
  1 -> F(1) [1]
  2 -> F(2) [1,2]
  3 -> F(3) [1,2,3]
  4 -> F(4) [1,2,3,4]
  1 -> HIT
  2 -> HIT
  5 -> F(5) [2,3,4,5]  replaces 1
  1 -> F(6) [3,4,5,1]  replaces 2
  2 -> F(7) [4,5,1,2]  replaces 3
  3 -> F(8) [5,1,2,3]  replaces 4
  4 -> F(9) [1,2,3,4]  replaces 5
  5 -> F(10) [2,3,4,5] replaces 1
  Total: 10 faults  <-- MORE faults with MORE frames!
```

### Optimal Page Replacement (OPT or MIN)

Replace the page that will not be used for the longest time in the future.

#### Real-World Analogy

A chess grandmaster planning future moves. When deciding which piece to sacrifice, they look ahead several moves to see which piece will be least needed in the future. The piece needed farthest in the future is sacrificed.

#### Optimal Numbered Steps

1. On a page fault:
   a. For each page currently in a frame, scan the future reference string
   b. Find the page whose next reference occurs farthest in the future
   c. If a page is never referenced again, choose it immediately
   d. Evict that page
2. On a page hit: do nothing

#### Pseudocode - Optimal

```
PROCEDURE optimal_replace(references, frame_count):
    frames = EMPTY_ARRAY(frame_count)
    faults = 0

    FOR i = 0 TO references.length - 1:
        page = references[i]
        IF page IN frames:
            PRINT "HIT"
        ELSE:
            faults++
            IF frames has free slot:
                frames[free] = page
            ELSE:
                victim = -1
                farthest = -1
                FOR each f in frames:
                    next_use = INFINITY
                    FOR j = i+1 TO references.length - 1:
                        IF references[j] == f:
                            next_use = j
                            BREAK
                    IF next_use > farthest:
                        farthest = next_use
                        victim = f
                REPLACE victim with page in frames
    RETURN faults
```

#### Dry Run Trace Table - Optimal

Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames

Time | Ref | Frame0 | Frame1 | Frame2 | Future Lookup (victim choice) | Fault?
-----|-----|--------|--------|--------|------------------------------|-------
1    | 7   | 7      | -      | -      | -                             | FAULT
2    | 0   | 7      | 0      | -      | -                             | FAULT
3    | 1   | 7      | 0      | 1      | -                             | FAULT
4    | 2   | **2**  | 0      | 1      | 7 next@17, 0 next@5, 1 next@14 -> farthest=7 | FAULT
5    | 0   | 2      | 0      | 1      | Hit                           | HIT
6    | 3   | 2      | **3**  | 1      | 2 next@9, 0 next@11, 1 next@14 -> farthest=1 | FAULT
7    | 0   | 2      | 3      | 0      | Hit                           | HIT
8    | 4   | **4**  | 3      | 0      | 2 next@9, 0 next@11, 1 next@14 -> farthest=1 | FAULT
9    | 2   | 4      | 3      | **2**  | 4 never again, 3 next@10, 0 next@11 -> farthest=4 | FAULT
10   | 3   | 4      | 3      | 2      | Hit                           | HIT
11   | 0   | **0**  | 3      | 2      | 4 never again, 3 next@10, 2 next@13 -> farthest=4 | FAULT
12   | 3   | 0      | 3      | 2      | Hit                           | HIT
13   | 2   | 0      | 3      | 2      | Hit                           | HIT
14   | 1   | 0      | **1**  | 2      | 0 next@16, 3 never again, 2 next@15 -> farthest=3 | FAULT
15   | 2   | 0      | 1      | 2      | Hit                           | HIT
16   | 0   | 0      | 1      | 2      | Hit                           | HIT
17   | 1   | 0      | 1      | 2      | Hit                           | HIT
18   | 7   | **7**  | 1      | 2      | 0 next@20, 1 next@19, 2 never again -> farthest=2 | FAULT
19   | 0   | 7      | 1      | **0**  | 7 never again, 1 never again -> farthest=7 or 1 | FAULT
20   | 1   | 7      | 1      | 0      | Hit                           | HIT

Total page faults: 9

#### C++ Implementation - Optimal

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
#include <climits>

class OptimalReplacement {
    unsigned frame_count;

public:
    OptimalReplacement(unsigned n) : frame_count(n) {}

    unsigned run(const std::vector<int>& references) {
        std::vector<int> frames(frame_count, -1);
        std::unordered_set<int> in_memory;
        unsigned faults = 0;
        int next_free = 0;

        std::cout << "\n=== Optimal Page Replacement ===\n";
        for (size_t i = 0; i < references.size(); i++) {
            int page = references[i];
            if (in_memory.count(page)) {
                std::cout << "Ref " << page << " -> HIT\n";
                continue;
            }
            faults++;
            if ((int)in_memory.size() < frame_count) {
                frames[next_free] = page;
                in_memory.insert(page);
                std::cout << "Ref " << page << " -> FAULT (F" << next_free++ << ")\n";
            } else {
                int victim = -1, farthest = -1;
                for (int f = 0; f < frame_count; f++) {
                    int next_use = INT_MAX;
                    for (size_t j = i + 1; j < references.size(); j++) {
                        if (frames[f] == references[j]) {
                            next_use = j;
                            break;
                        }
                    }
                    if (next_use > farthest) {
                        farthest = next_use;
                        victim = f;
                    }
                }
                int victim_page = frames[victim];
                in_memory.erase(victim_page);
                frames[victim] = page;
                in_memory.insert(page);
                std::cout << "Ref " << page << " -> FAULT (replaced " << victim_page << ")\n";
            }
        }
        return faults;
    }
};
```

#### Python Implementation - Optimal

```python
class OptimalReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count

    def run(self, references):
        frames = [-1] * self.frame_count
        in_memory = set()
        faults = 0
        next_free = 0

        print("\n=== Optimal Page Replacement ===")
        for i, page in enumerate(references):
            if page in in_memory:
                print(f"Ref {page} -> HIT")
                continue
            faults += 1
            if len(in_memory) < self.frame_count:
                frames[next_free] = page
                in_memory.add(page)
                print(f"Ref {page} -> FAULT (F{next_free})")
                next_free += 1
            else:
                farthest = -1
                victim = -1
                for f in range(self.frame_count):
                    page_f = frames[f]
                    next_use = float('inf')
                    for j in range(i + 1, len(references)):
                        if references[j] == page_f:
                            next_use = j
                            break
                    if next_use > farthest:
                        farthest = next_use
                        victim = f
                victim_page = frames[victim]
                in_memory.remove(victim_page)
                frames[victim] = page
                in_memory.add(page)
                print(f"Ref {page} -> FAULT (replaced {victim_page})")
        return faults
```

#### Complexity Analysis

- **Time:** O(N * F * R) worst case where N = references, F = frames, R = remaining references (scanning future). In practice O(N * F) for short strings, but unbounded for long strings.
- **Space:** O(F) for frames
- **WHY O(N*F*R):** For each fault, we scan the future reference string for each frame to find the farthest next use. This is expensive but provides the theoretical minimum fault rate.

#### A&D Table

| Advantage | Disadvantage |
|-----------|-------------|
| Minimum possible page faults (theoretical benchmark) | Requires future knowledge - impossible to implement |
| No Belady Anomaly (stack property) | High computational cost even if future were known |
| Best for comparison/evaluation | Cannot be used in real-time systems |

### LRU (Least Recently Used)

Replace the page that has not been used for the longest time. This approximates Optimal using past behavior.

#### Real-World Analogy

A cluttered desk. When you need more workspace and must clear items, you move the items you have not touched in the longest time. The document you were reading just moments ago stays; the one you have not looked at in hours goes.

#### LRU Numbered Steps

1. On a page access (hit OR fault):
   - Update the access timestamp for the page
2. On a page fault with no free frames:
   a. Scan all frames to find the page with the oldest (smallest) timestamp
   b. Evict that page (write back if dirty)
   c. Load the new page with current timestamp

#### Pseudocode - LRU

```
PROCEDURE lru_replace(references, frame_count):
    frames = EMPTY_ARRAY(frame_count)
    last_used = EMPTY_ARRAY(frame_count)  // timestamps
    time = 0
    faults = 0

    FOR page IN references:
        time++
        IF page IN frames:
            last_used[position] = time   // update access time
            PRINT "HIT"
        ELSE:
            faults++
            IF frames has free slot:
                frames[free] = page
                last_used[free] = time
            ELSE:
                // Find page with minimum last_used (oldest)
                victim = INDEX_OF_MIN(last_used)
                frames[victim] = page
                last_used[victim] = time
            PRINT "FAULT"
    RETURN faults
```

#### Dry Run Trace Table - LRU

Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
3 frames (timestamps shown)

Time | Ref | F0(page,ts) | F1(page,ts) | F2(page,ts) | LRU Order (oldest->newest) | Fault?
-----|-----|-------------|-------------|-------------|---------------------------|-------
1    | 7   | (7,1)       | -           | -           | [7]                       | FAULT
2    | 0   | (7,1)       | (0,2)       | -           | [7,0]                     | FAULT
3    | 1   | (7,1)       | (0,2)       | (1,3)       | [7,0,1]                   | FAULT
4    | 2   | (2,4)       | (0,2)       | (1,3)       | [0,1,2] replaces 7        | FAULT
5    | 0   | (2,4)       | (0,5)       | (1,3)       | [1,2,0] update ts         | HIT
6    | 3   | (2,4)       | (3,6)       | (1,3)       | [1,2,3] replaces 0        | FAULT
7    | 0   | (2,4)       | (3,6)       | (0,7)       | [2,3,0] replaces 1        | FAULT
8    | 4   | (4,8)       | (3,6)       | (0,7)       | [3,0,4] replaces 2        | FAULT
9    | 2   | (4,8)       | (3,6)       | (2,9)       | [3,4,2] replaces 0        | FAULT
10   | 3   | (4,8)       | (3,10)      | (2,9)       | [4,2,3] update ts         | HIT
11   | 0   | (4,8)       | (0,11)      | (2,9)       | [4,2,0] replaces 3        | FAULT
12   | 3   | (3,12)      | (0,11)      | (2,9)       | [2,0,3] replaces 4        | FAULT
13   | 2   | (3,12)      | (0,11)      | (2,13)      | [0,3,2] update ts         | HIT
14   | 1   | (3,12)      | (1,14)      | (2,13)      | [3,2,1] replaces 0        | FAULT
15   | 2   | (3,12)      | (1,14)      | (2,15)      | [3,1,2] update ts         | HIT
16   | 0   | (0,16)      | (1,14)      | (2,15)      | [1,2,0] replaces 3        | FAULT
17   | 1   | (0,16)      | (1,17)      | (2,15)      | [2,0,1] update ts         | HIT
18   | 7   | (0,16)      | (1,17)      | (7,18)      | [0,1,7] replaces 2        | FAULT
19   | 0   | (0,19)      | (1,17)      | (7,18)      | [1,7,0] update ts         | HIT
20   | 1   | (0,19)      | (1,20)      | (7,18)      | [7,0,1] update ts         | HIT

Total page faults: 12

#### C++ Implementation - LRU

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <climits>

class LRUReplacement {
    unsigned frame_count;

public:
    LRUReplacement(unsigned n) : frame_count(n) {}

    unsigned run(const std::vector<int>& references) {
        std::vector<int> frames(frame_count, -1);
        std::vector<int> last_used(frame_count, 0);
        std::unordered_map<int, int> page_to_frame;
        unsigned faults = 0, time = 0;
        int next_free = 0;

        std::cout << "\n=== LRU Page Replacement ===\n";
        for (int page : references) {
            time++;
            if (page_to_frame.count(page)) {
                int f = page_to_frame[page];
                last_used[f] = time;
                std::cout << "Ref " << page << " -> HIT (F" << f << ")\n";
            } else {
                faults++;
                if ((int)page_to_frame.size() < frame_count) {
                    frames[next_free] = page;
                    last_used[next_free] = time;
                    page_to_frame[page] = next_free;
                    std::cout << "Ref " << page << " -> FAULT (F" << next_free++ << ")\n";
                } else {
                    int victim_f = 0, oldest = INT_MAX;
                    for (int f = 0; f < frame_count; f++) {
                        if (last_used[f] < oldest) {
                            oldest = last_used[f];
                            victim_f = f;
                        }
                    }
                    int victim_page = frames[victim_f];
                    page_to_frame.erase(victim_page);
                    frames[victim_f] = page;
                    last_used[victim_f] = time;
                    page_to_frame[page] = victim_f;
                    std::cout << "Ref " << page << " -> FAULT (replaced " << victim_page << ")\n";
                }
            }
        }
        return faults;
    }
};
```

#### Python Implementation - LRU

```python
class LRUReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count

    def run(self, references):
        frames = [-1] * self.frame_count
        last_used = [0] * self.frame_count
        page_to_frame = {}
        faults = 0
        time = 0
        next_free = 0

        print("\n=== LRU Page Replacement ===")
        for page in references:
            time += 1
            if page in page_to_frame:
                f = page_to_frame[page]
                last_used[f] = time
                print(f"Ref {page} -> HIT (F{f})")
            else:
                faults += 1
                if len(page_to_frame) < self.frame_count:
                    frames[next_free] = page
                    last_used[next_free] = time
                    page_to_frame[page] = next_free
                    print(f"Ref {page} -> FAULT (F{next_free})")
                    next_free += 1
                else:
                    victim_f = min(range(self.frame_count), key=lambda f: last_used[f])
                    victim_page = frames[victim_f]
                    del page_to_frame[victim_page]
                    frames[victim_f] = page
                    last_used[victim_f] = time
                    page_to_frame[page] = victim_f
                    print(f"Ref {page} -> FAULT (replaced {victim_page})")
        return faults
```

#### Complexity Analysis

- **Time (counter method):** O(N * F) worst case for scanning frames on each fault. Can be O(N) with hash map + priority queue.
- **Space:** O(F) for frames + O(F) for metadata
- **WHY O(N*F):** On each fault we may scan all frames to find the minimum timestamp. Using a stack (move-to-front on access) gives O(N) but high constant factor for pointer updates.

#### A&D Table

| Advantage | Disadvantage |
|-----------|-------------|
| Near-optimal performance (approximates OPT) | High implementation cost for exact LRU |
| No Belady Anomaly (stack property) | Hardware support needed for per-access timestamp |
| Good temporal locality exploitation | Counter overflow in long-running systems |

### Second-Chance (Clock) Algorithm

A FIFO variant that uses the reference bit. Pages are arranged in a circular list with a hand pointer.

#### Real-World Analogy

A lazy professor collecting exams. Walking around the room (circular), they check each student. If a student is still writing (reference bit = 1), the professor says "keep going, I will come back" and clears the bit. If the student is done (ref = 0), the professor takes the exam (evicts the page).

#### Second-Chance Numbered Steps

1. Arrange pages in a circular buffer with a hand pointer
2. On a page fault:
   a. While True:
      - Check page at hand position
      - If ref bit = 0: evict this page, load new page with ref = 1, advance hand, break
      - If ref bit = 1: set ref = 0, advance hand, continue
3. On a page hit: set ref bit = 1 (hand pointer does not move)

#### Pseudocode - Second-Chance (Clock)

```
PROCEDURE clock_replace(references, frame_count):
    frames = EMPTY_ARRAY(frame_count)  // page numbers
    ref_bits = EMPTY_ARRAY(frame_count, 0)
    hand = 0
    faults = 0

    FOR page IN references:
        IF page IN frames:
            ref_bits[position] = 1   // set reference
            PRINT "HIT"
        ELSE:
            faults++
            WHILE frames[hand] != -1  // skip empty slots initially
                IF ref_bits[hand] == 0:
                    // Victim found
                    IF frames[hand] != -1:
                        PRINT "Evict " + frames[hand]
                    frames[hand] = page
                    ref_bits[hand] = 1
                    hand = (hand + 1) % frame_count
                    BREAK
                ELSE:
                    ref_bits[hand] = 0  // second chance
                    hand = (hand + 1) % frame_count
            IF frames[hand] == -1:  // empty slot
                frames[hand] = page
                ref_bits[hand] = 1
                hand = (hand + 1) % frame_count
            PRINT "FAULT"
    RETURN faults
```

#### Dry Run Trace Table - Second-Chance

Reference string: 7, 0, 1, 2, 0, 3, 0, 4 (first 8), 3 frames

Time | Ref | Frame0(p,r) | Frame1(p,r) | Frame2(p,r) | Hand | Action
-----|-----|-------------|-------------|-------------|------|-------
1    | 7   | (7,1)       | -           | -           | 1    | FAULT, hand->1
2    | 0   | (7,1)       | (0,1)       | -           | 2    | FAULT, hand->2
3    | 1   | (7,1)       | (0,1)       | (1,1)       | 0    | FAULT, hand->0
4    | 2   | (7,1)->(7,0)| (0,1)->(0,0)| (1,1)->(1,0)| 0->1 | Scan: 7r=1->0,hand=1; 0r=1->0,hand=2; 1r=1->0,hand=0; 7r=0->evict!
     |     | **(2,1)**   | (0,0)       | (1,0)       | 1    | FAULT, hand->1
5    | 0   | (2,1)       | (0,1)       | (1,0)       | 1    | HIT (0 already in F1, set ref=1)
6    | 3   | (2,1)       | (0,1)->(0,0)| (1,0)->evict| 1->2 | Scan: 0r=1->0,hand=2; 1r=0->evict!
     |     | (2,1)       | (0,0)       | **(3,1)**   | 0    | FAULT, hand->0
7    | 0   | (2,1)       | (0,1)       | (3,1)       | 0    | HIT (0 already in F1, set ref=1)
8    | 4   | (2,1)->(2,0)| (0,1)->(0,0)| (3,1)->(3,0)| 0->1 | Scan: 2r=1->0,hand=1; 0r=1->0,hand=2; 3r=1->0,hand=0; 2r=0->evict!
     |     | **(4,1)**   | (0,0)       | (3,0)       | 1    | FAULT, hand->1

#### C++ Implementation - Second-Chance (Clock)

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

class ClockReplacement {
    unsigned frame_count;
    std::vector<int> frames;
    std::vector<bool> ref_bits;
    int hand;
    std::unordered_map<int, int> page_to_frame;

public:
    ClockReplacement(unsigned n) : frame_count(n), hand(0) {
        frames.resize(n, -1);
        ref_bits.resize(n, false);
    }

    unsigned run(const std::vector<int>& references) {
        unsigned faults = 0;
        int loaded = 0;

        std::cout << "\n=== Clock (Second-Chance) Page Replacement ===\n";
        for (int page : references) {
            if (page_to_frame.count(page)) {
                int f = page_to_frame[page];
                ref_bits[f] = true;
                std::cout << "Ref " << page << " -> HIT (F" << f << ")\n";
            } else {
                faults++;
                if (loaded < frame_count) {
                    frames[loaded] = page;
                    ref_bits[loaded] = true;
                    page_to_frame[page] = loaded;
                    std::cout << "Ref " << page << " -> FAULT (F" << loaded << ")\n";
                    loaded++;
                } else {
                    while (true) {
                        if (!ref_bits[hand]) {
                            int victim = frames[hand];
                            page_to_frame.erase(victim);
                            std::cout << "  Evict " << victim << " from F" << hand << "\n";
                            frames[hand] = page;
                            ref_bits[hand] = true;
                            page_to_frame[page] = hand;
                            hand = (hand + 1) % frame_count;
                            break;
                        } else {
                            ref_bits[hand] = false;
                            hand = (hand + 1) % frame_count;
                        }
                    }
                    std::cout << "Ref " << page << " -> FAULT\n";
                }
            }
            // Print current state
            std::cout << "  State: ";
            for (int f = 0; f < frame_count; f++) {
                if (frames[f] >= 0)
                    std::cout << "[" << frames[f] << ":" << ref_bits[f] << "] ";
                else std::cout << "[-] ";
            }
            std::cout << "(hand->" << hand << ")\n";
        }
        return faults;
    }
};
```

#### Python Implementation - Second-Chance (Clock)

```python
class ClockReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count
        self.frames = [-1] * frame_count
        self.ref_bits = [False] * frame_count
        self.hand = 0
        self.page_to_frame = {}

    def run(self, references):
        faults = 0
        loaded = 0

        print("\n=== Clock (Second-Chance) Page Replacement ===")
        for page in references:
            if page in self.page_to_frame:
                f = self.page_to_frame[page]
                self.ref_bits[f] = True
                print(f"Ref {page} -> HIT (F{f})")
            else:
                faults += 1
                if loaded < self.frame_count:
                    self.frames[loaded] = page
                    self.ref_bits[loaded] = True
                    self.page_to_frame[page] = loaded
                    print(f"Ref {page} -> FAULT (F{loaded})")
                    loaded += 1
                else:
                    while True:
                        if not self.ref_bits[self.hand]:
                            victim = self.frames[self.hand]
                            del self.page_to_frame[victim]
                            print(f"  Evict {victim} from F{self.hand}")
                            self.frames[self.hand] = page
                            self.ref_bits[self.hand] = True
                            self.page_to_frame[page] = self.hand
                            self.hand = (self.hand + 1) % self.frame_count
                            break
                        else:
                            self.ref_bits[self.hand] = False
                            self.hand = (self.hand + 1) % self.frame_count
                    print(f"Ref {page} -> FAULT")
            state = " ".join(f"[{self.frames[f]}:{int(self.ref_bits[f])}]"
                             if self.frames[f] >= 0 else "[-]"
                             for f in range(self.frame_count))
            print(f"  State: {state} (hand->{self.hand})")
        return faults
```

#### Complexity Analysis

- **Time:** O(N * F) worst case if every fault requires a full scan (all ref=1). Average case O(N) as scans are short.
- **Space:** O(F) for frames + reference bits
- **WHY O(N*F) worst case:** If all frames have ref=1, the clock hand makes a full revolution before finding a victim. In practice, systems avoid this by periodically clearing ref bits.

#### A&D Table

| Advantage | Disadvantage |
|-----------|-------------|
| Simple, low overhead (only 1 bit per frame) | Can degrade to FIFO if all ref bits are 1 |
| Approximates LRU well | Hand pointer management adds slight complexity |
| No Belady Anomaly in practice | Performance depends on reference bit patterns |
| Used in real systems (Linux, BSD) | Not as good as true LRU for some workloads |
### MFU (Most Frequently Used) Page Replacement

Replace the most frequently used page. The rationale: a page that has been used many times may have already completed its purpose.

#### Real-World Analogy

A pop song that was popular last year but is now overplayed. Everyone has heard it enough (most frequently played), so the radio station drops it to make room for fresh songs.

#### MFU Numbered Steps

1. Maintain a counter per page tracking frequency of access
2. On a page hit: increment the counter for that page
3. On a page fault with no free frames:
   a. Scan all frames to find the page with the **highest** frequency counter
   b. Evict that page (write back if dirty)
   c. Load the new page with counter = 1

#### Pseudocode - MFU

```
PROCEDURE mfu_replace(references, frame_count):
    frames = EMPTY_ARRAY(frame_count)
    frequencies = EMPTY_ARRAY(frame_count, 0)
    faults = 0

    FOR page IN references:
        IF page IN frames:
            frequencies[position]++     // increment frequency
            PRINT "HIT"
        ELSE:
            faults++
            IF frames has free slot:
                frames[free] = page
                frequencies[free] = 1
            ELSE:
                // Find frame with MAX frequency
                victim = INDEX_OF_MAX(frequencies)
                frames[victim] = page
                frequencies[victim] = 1
            PRINT "FAULT"
    RETURN faults
```

#### Dry Run Trace Table - MFU

Reference: 7, 0, 1, 2, 0, 3, 0, 4 with 3 frames

Time | Ref | F0(page,freq) | F1(page,freq) | F2(page,freq) | Action
-----|-----|--------------|--------------|--------------|-------
1    | 7   | (7,1)        | -            | -            | FAULT (load)
2    | 0   | (7,1)        | (0,1)        | -            | FAULT (load)
3    | 1   | (7,1)        | (0,1)        | (1,1)        | FAULT (load)
4    | 2   | **2,1**      | (0,1)        | (1,1)        | FAULT (tie->replace 7)
5    | 0   | (2,1)        | (0,**2**)    | (1,1)        | HIT (freq++)
6    | 3   | (2,1)        | (0,2)        | **3,1**      | FAULT (MFU=0@2, replace 1)
7    | 0   | (2,1)        | (0,**3**)    | (3,1)        | HIT (freq++)
8    | 4   | (2,1)        | (0,3)        | **4,1**      | FAULT (MFU=0@3, replace 3)

#### C++ Implementation - MFU

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

class MFUReplacement {
    unsigned frame_count;

public:
    MFUReplacement(unsigned n) : frame_count(n) {}

    unsigned run(const std::vector<int>& references) {
        std::vector<int> frames(frame_count, -1);
        std::vector<int> freq(frame_count, 0);
        std::unordered_map<int, int> page_to_frame;
        unsigned faults = 0;
        int next_free = 0;

        std::cout << "\n=== MFU Page Replacement ===\n";
        for (int page : references) {
            if (page_to_frame.count(page)) {
                int f = page_to_frame[page];
                freq[f]++;
                std::cout << "Ref " << page << " -> HIT (F" << f << ", freq=" << freq[f] << ")\n";
            } else {
                faults++;
                if ((int)page_to_frame.size() < frame_count) {
                    frames[next_free] = page;
                    freq[next_free] = 1;
                    page_to_frame[page] = next_free;
                    std::cout << "Ref " << page << " -> FAULT (F" << next_free++ << ")\n";
                } else {
                    int victim_f = 0;
                    for (int f = 1; f < frame_count; f++)
                        if (freq[f] > freq[victim_f]) victim_f = f;
                    int victim = frames[victim_f];
                    page_to_frame.erase(victim);
                    frames[victim_f] = page;
                    freq[victim_f] = 1;
                    page_to_frame[page] = victim_f;
                    std::cout << "Ref " << page << " -> FAULT (replaced " << victim
                              << ", freq=" << freq[victim_f] << ")\n";
                }
            }
        }
        return faults;
    }
};
```

#### Python Implementation - MFU

```python
class MFUReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count

    def run(self, references):
        frames = [-1] * self.frame_count
        freq = [0] * self.frame_count
        page_to_frame = {}
        faults = 0
        next_free = 0

        print("\n=== MFU Page Replacement ===")
        for page in references:
            if page in page_to_frame:
                f = page_to_frame[page]
                freq[f] += 1
                print(f"Ref {page} -> HIT (F{f}, freq={freq[f]})")
            else:
                faults += 1
                if len(page_to_frame) < self.frame_count:
                    frames[next_free] = page
                    freq[next_free] = 1
                    page_to_frame[page] = next_free
                    print(f"Ref {page} -> FAULT (F{next_free})")
                    next_free += 1
                else:
                    victim_f = max(range(self.frame_count), key=lambda f: freq[f])
                    victim = frames[victim_f]
                    del page_to_frame[victim]
                    frames[victim_f] = page
                    freq[victim_f] = 1
                    page_to_frame[page] = victim_f
                    print(f"Ref {page} -> FAULT (replaced {victim}, freq={freq[victim_f]})")
        return faults
```

### LFU (Least Frequently Used) Page Replacement

Replace the page that has been used the fewest number of times.

#### Real-World Analogy

A museum rotating exhibits. The exhibit that has attracted the fewest visitors (lowest footfall) is the first to be replaced when a new exhibit arrives. The most popular exhibits stay.

#### LFU Numbered Steps

1. Maintain a counter per page tracking frequency of access
2. On a page hit: increment the counter for that page
3. On a page fault with no free frames:
   a. Scan all frames to find the page with the **lowest** frequency counter
   b. On tie: use LRU among ties (or FIFO)
   c. Evict that page
   d. Load the new page with counter = 1

#### Pseudocode - LFU

```
PROCEDURE lfu_replace(references, frame_count):
    frames = EMPTY_ARRAY(frame_count)
    frequencies = EMPTY_ARRAY(frame_count, 0)
    last_used = EMPTY_ARRAY(frame_count, 0)
    time = 0
    faults = 0

    FOR page IN references:
        time++
        IF page IN frames:
            frequencies[position]++
            last_used[position] = time
            PRINT "HIT"
        ELSE:
            faults++
            IF frames has free slot:
                frames[free] = page
                frequencies[free] = 1
                last_used[free] = time
            ELSE:
                // Find frame with MIN frequency, break ties with LRU
                victim = INDEX_OF_MIN_FREQ_TIE_LRU(frequencies, last_used)
                frames[victim] = page
                frequencies[victim] = 1
                last_used[victim] = time
            PRINT "FAULT"
    RETURN faults
```

#### Dry Run Trace Table - LFU

Reference: 7, 0, 1, 2, 0, 3, 0, 4 with 3 frames

Time | Ref | F0(page,freq,ts) | F1(page,freq,ts) | F2(page,freq,ts) | Action
-----|-----|-----------------|-----------------|-----------------|-------
1    | 7   | (7,1,1)         | -               | -               | FAULT (load)
2    | 0   | (7,1,1)         | (0,1,2)         | -               | FAULT (load)
3    | 1   | (7,1,1)         | (0,1,2)         | (1,1,3)         | FAULT (load)
4    | 2   | **2,1,4**       | (0,1,2)         | (1,1,3)         | FAULT (tie->LRU=7, replace)
5    | 0   | (2,1,4)         | (0,**2**,5)     | (1,1,3)         | HIT
6    | 3   | (2,1,4)         | (0,2,5)         | **3,1,6**       | FAULT (min freq=1@2or3, LRU=1)
7    | 0   | (2,1,4)         | (0,**3**,7)     | (3,1,6)         | HIT
8    | 4   | (2,1,4)         | (0,3,7)         | **4,1,8**       | FAULT (min freq=1@2or4, LRU=2@4)

#### C++ Implementation - LFU

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <limits>

class LFUReplacement {
    unsigned frame_count;

public:
    LFUReplacement(unsigned n) : frame_count(n) {}

    unsigned run(const std::vector<int>& references) {
        std::vector<int> frames(frame_count, -1);
        std::vector<int> freq(frame_count, 0);
        std::vector<int> last_used(frame_count, 0);
        std::unordered_map<int, int> page_to_frame;
        unsigned faults = 0, time = 0;
        int next_free = 0;

        std::cout << "\n=== LFU Page Replacement ===\n";
        for (int page : references) {
            time++;
            if (page_to_frame.count(page)) {
                int f = page_to_frame[page];
                freq[f]++;
                last_used[f] = time;
                std::cout << "Ref " << page << " -> HIT (F" << f << ", freq=" << freq[f] << ")\n";
            } else {
                faults++;
                if ((int)page_to_frame.size() < frame_count) {
                    frames[next_free] = page;
                    freq[next_free] = 1;
                    last_used[next_free] = time;
                    page_to_frame[page] = next_free;
                    std::cout << "Ref " << page << " -> FAULT (F" << next_free++ << ")\n";
                } else {
                    int victim_f = 0;
                    int min_freq = std::numeric_limits<int>::max();
                    int oldest_time = std::numeric_limits<int>::max();
                    for (int f = 0; f < frame_count; f++) {
                        if (freq[f] < min_freq ||
                            (freq[f] == min_freq && last_used[f] < oldest_time)) {
                            min_freq = freq[f];
                            oldest_time = last_used[f];
                            victim_f = f;
                        }
                    }
                    int victim = frames[victim_f];
                    page_to_frame.erase(victim);
                    frames[victim_f] = page;
                    freq[victim_f] = 1;
                    last_used[victim_f] = time;
                    page_to_frame[page] = victim_f;
                    std::cout << "Ref " << page << " -> FAULT (replaced " << victim
                              << ", freq=" << min_freq << ")\n";
                }
            }
        }
        return faults;
    }
};
```

#### Python Implementation - LFU

```python
class LFUReplacement:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count

    def run(self, references):
        frames = [-1] * self.frame_count
        freq = [0] * self.frame_count
        last_used = [0] * self.frame_count
        page_to_frame = {}
        faults = 0
        time = 0
        next_free = 0

        print("\n=== LFU Page Replacement ===")
        for page in references:
            time += 1
            if page in page_to_frame:
                f = page_to_frame[page]
                freq[f] += 1
                last_used[f] = time
                print(f"Ref {page} -> HIT (F{f}, freq={freq[f]})")
            else:
                faults += 1
                if len(page_to_frame) < self.frame_count:
                    frames[next_free] = page
                    freq[next_free] = 1
                    last_used[next_free] = time
                    page_to_frame[page] = next_free
                    print(f"Ref {page} -> FAULT (F{next_free})")
                    next_free += 1
                else:
                    def victim_key(f):
                        return (freq[f], last_used[f])
                    victim_f = min(range(self.frame_count), key=victim_key)
                    victim = frames[victim_f]
                    del page_to_frame[victim]
                    frames[victim_f] = page
                    freq[victim_f] = 1
                    last_used[victim_f] = time
                    page_to_frame[page] = victim_f
                    print(f"Ref {page} -> FAULT (replaced {victim}, freq={freq[victim_f]})")
        return faults
```

### LRU Approximation Algorithms

Exact LRU is expensive. Real systems approximate LRU with minimal hardware support.

#### 1. Reference Bit Method

A single reference bit per page. Hardware sets the bit on any access. The OS periodically clears the bit. Pages with bit=0 have not been accessed recently.

```
Periodic scan (every timer tick):
  FOR each page:
    IF ref_bit == 0:
      Page has not been accessed since last scan
      Candidate for eviction
    ELSE:
      ref_bit = 0  // Reset for next interval
```

#### 2. Not Recently Used (NRU) Algorithm

Combines reference bit (R) and dirty bit (D) to classify pages into 4 classes:

Class | R | D | Priority for Eviction
------|---|---|---------------------
0     | 0 | 0 | **Highest** - not referenced, not dirty
1     | 0 | 1 | High - not referenced, but dirty (write-back needed)
2     | 1 | 0 | Low - referenced, not dirty
3     | 1 | 1 | **Lowest** - referenced and dirty

NRU removes a random page from the lowest-numbered non-empty class.

```
NRU Algorithm:
  1. Periodically (e.g. every 20ms clock interrupt):
     - Clear reference bits of all pages
  2. On page fault:
     - Inspect all pages, classify into R/D classes 0-3
     - Select a random victim page from the lowest class
     - If dirty, schedule write-back
     - Load the new page
```

#### 3. Second-Chance (Clock) Algorithm

Already covered in detail above. The clock algorithm is the most widely used LRU approximation.

#### 4. Aging Algorithm

A more accurate LRU approximation using multiple bits. Maintains an N-bit counter per page (typically 8 bits). Periodically (every timer tick):
- Shift the counter right by 1
- Add the reference bit to the high-order bit
- Clear the reference bit

```
AGING ALGORITHM:

Each page has an 8-bit counter initially 00000000.

Timer tick processing (every ~20ms):
  FOR each page:
    counter = (counter >> 1)        // Shift right
    IF ref_bit == 1:
      counter = counter | 0x80      // Set MSB
    ref_bit = 0                      // Clear

On page fault:
  Victim = page with smallest counter value
  (Lower counter = less recently used over the window)

Example counter evolution:
  Page A: 00000000 -> 10000000 -> 11000000 -> 11100000 -> 01110000
  Page B: 00000000 -> 01000000 -> 00100000 -> 10010000 -> 01001000
  Page C: 00000000 -> 10000000 -> 01000000 -> 10100000 -> 11010000

After 5 ticks, Page B (01001000 = 72) is older than Page A (01110000 = 112)
```

### Page Replacement Algorithms Comparison Table

| Algorithm | Philosophy | Implementation Cost | Fault Rate | Belady Anomaly | Real-World Use |
|-----------|-----------|-------------------|------------|----------------|----------------|
| **FIFO** | Oldest page first | Very low (queue) | High | Yes | Rare (educational) |
| **Optimal (MIN)** | Farthest future use | Impossible (needs future) | Lowest (theoretical) | No | Benchmark only |
| **LRU** | Least recently used | High (timestamps/stack) | Near-optimal | No | Some databases |
| **Second-Chance** | Ref bit + circular FIFO | Low (1 bit + pointer) | Good | Varies | Linux, BSD, macOS |
| **Aging** | Multi-bit LRU approx | Medium (8-bit counter) | Good | No | Some UNIX variants |
| **NRU** | R/D bit classes | Very low (random pick) | Moderate | No | MINIX, educational |
| **MFU** | Most frequently used | Medium (freq counter) | Poor | No | Rare (niche) |
| **LFU** | Least frequently used | Medium (freq counter) | Moderate | No | Cache systems (Redis) |

### Frame Allocation

How many frames should each process get? The allocation strategy directly impacts performance and thrashing behavior.

#### Fixed Allocation

**Equal Allocation:** If 100 frames and 5 processes, give each 20 frames regardless of size.

```
equal_frames_per_process = total_free_frames / total_processes
```

**Proportional Allocation:** Give frames proportional to process size.

```
frames_for_Pi = (size_of_Pi / total_size_of_all_processes) * total_frames
```

Example: Process A = 100 KB, Process B = 300 KB, total frames = 64
  - A gets: (100/400) * 64 = 16 frames
  - B gets: (300/400) * 64 = 48 frames

#### Priority Allocation

Higher-priority processes get proportionally more frames.

```
frames_for_Pi = (size_of_Pi * priority_Pi) / SUM(size * priority) * total_frames
```

Or simply: priority acts as a multiplier on the proportional allocation.

#### Local vs Global Allocation

| Strategy | Victim Selection | Key Characteristic |
|----------|-----------------|-------------------|
| **Local Replacement** | Victim from the SAME process that faulted | Processes isolated - one process thrashing does not affect others |
| **Global Replacement** | Victim from ANY process in system | More efficient overall - memory flows to where needed |

**Local Replacement:**
- Each process has its own fixed set of frames
- Replaces only its own pages
- Pro: Isolation (one process thrashing does not steal frames from others)
- Con: Inefficient (idle processes keep frames that active processes need)

**Global Replacement:**
- All frames are in a single pool
- Any process can replace any page
- Pro: Adaptive (memory goes to active processes)
- Con: One process thrashing can steal frames from others

Most modern OS use **global replacement** with working-set monitoring to prevent thrashing.

```
FRAME ALLOCATION STRATEGIES:

          Fixed Allocation
          /               \
     Equal           Proportional
         |                   |
   (frame/process)    (frame proportional to size)
         |                   |
     Local repl.         Local repl.
         |
   +----+----+
   |         |
 Isolated   May waste frames
 processes  under-utilized

          Global Allocation
                |
         All frames shared
                |
        Victim from any process
                |
   +----+----+----+----+
   |         |         |
Adaptive  Can steal  Requires WSS
efficient from others monitoring
```

### Thrashing

**Thrashing** occurs when a process spends more time paging than executing. The system is overcommitted - the working set of all processes exceeds physical memory.

#### Real-World Analogy

A chef in a tiny kitchen. There are too many dishes being prepared simultaneously. The chef spends all their time shuffling ingredients between the counter and the refrigerator (paging), with almost no time actually cooking. The kitchen is in a frenzy of constant swapping.

#### Thrashing Model with Degree of Multiprogramming

```
CPU Utilization
    ^
    |              *
    |           *     *
    |         *         *
    |       *             * *
    |     *                   * * * * *
    |   *                               * * *
    | *                                       * * * * *
    +-------------------------------------------------------> Degree of
        Low                     Optimal         High       Multiprogramming
                                   |
                                Thrashing
                                Begins Here
```

As the degree of multiprogramming (number of processes) increases:
1. Initially, CPU utilization increases (more work to do)
2. At some point, memory becomes overcommitted
3. Processes start faulting more frequently
4. Each fault requires disk I/O - process blocks
5. OS sees CPU idle and brings in more processes (wrong response!)
6. More processes -> more paging -> worse thrashing

This is a **positive feedback loop** (vicious cycle):

```
More processes
    |
    v
Less memory per process
    |
    v
More page faults
    |
    v
More disk I/O (processes block)
    |
    v
CPU utilization drops
    |
    v
OS thinks: "CPU is idle, add more processes!"
    |
    v
(System spirals)
```

#### Thrashing Detection

```
Symptoms of thrashing:
  - Page fault rate climbs significantly above threshold
  - CPU utilization drops despite high multiprogramming
  - Disk queue length increases (all processes waiting for paging)
  - Throughput decreases as more work is added

Detection:
  IF (page_fault_rate > HIGH_THRESHOLD) AND
     (cpu_utilization < LOW_THRESHOLD) AND
     (disk_queue_length > DISK_THRESHOLD):
    System is thrashing
```

#### Thrashing Prevention

1. **Working Set Model:** Ensure each process has enough frames for its working set
2. **Page Fault Frequency (PFF) Control:** Monitor fault rate per process:
   - If fault rate too high: allocate more frames
   - If fault rate too low: deallocate frames (make available to others)
3. **Suspend processes:** If thrashing is detected, suspend (swap out) one or more processes

```
PAGE FAULT FREQUENCY CONTROL:

Page Fault Rate
    ^
    |              * * * * *
    |         *               * *
    |       *                     * *
    |     *                          * *
    |    *                               * * * *
    |   *                                    Upper bound
    |  *                                         (increase frames)
    | *                                           |
    |*                               * * * * * *  v
    |    Lower bound (decrease frames)
    +------------------------------------------------------>
                       Frames Allocated

  Upper bound: Fault rate too high -> add frames
  Lower bound: Fault rate too low  -> remove frames
  Operating range: between bounds
```

### Working Set Model

The **working set** is the set of pages a process is currently using. It represents the current locality.

#### Formal Definition

The working set W(t, Delta) is the set of pages referenced by a process in the time interval [t - Delta + 1, t], where Delta is the **working-set window**.

```
Working set at time t:
  W(t, Delta) = { pages referenced in the last Delta memory accesses }

Working set size (WSS):
  |W(t, Delta)| = number of unique pages referenced in the window
```

#### Working Set Numbered Steps

1. Choose a window size Delta (e.g. 10,000 references)
2. Maintain a sliding window of the last Delta references
3. At any time t, the working set = set of unique pages in the window
4. As the process executes, the working set changes:
   - Program enters a new phase -> new pages added, old pages drop out
   - Stable phase -> working set size remains relatively constant
5. The OS ensures each process has at least WSS frames
6. If total WSS across all processes > physical memory -> thrashing

#### Working Set Evolution Trace

Reference string: 1, 2, 3, 2, 1, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2
Window Delta = 6

Ref | Window (last 6) | Working Set | WSS | Notes
----|----------------|-------------|-----|------
1   | [1]            | {1}         | 1   | Initial
2   | [1,2]          | {1,2}       | 2   |
3   | [1,2,3]        | {1,2,3}     | 3   |
2   | [1,2,3,2]      | {1,2,3}     | 3   |
1   | [1,2,3,2,1]    | {1,2,3}     | 3   |
4   | [2,3,2,1,4]    | {1,2,3,4}   | 4   | Phase transition: adding 4
5   | [3,2,1,4,5]    | {1,2,3,4,5} | 5   | Phase transition: adding 5
6   | [2,1,4,5,6]    | {1,2,4,5,6} | 5   | 3 dropped, 6 added
1   | [1,4,5,6,1]    | {1,4,5,6}   | 4   | 2 dropped
2   | [4,5,6,1,2]    | {1,2,4,5,6} | 5   | Locality shift
4   | [5,6,1,2,4]    | {1,2,4,5,6} | 5   | Stable phase
5   | [6,1,2,4,5]    | {1,2,4,5,6} | 5   |
6   | [1,2,4,5,6]    | {1,2,4,5,6} | 5   |
1   | [2,4,5,6,1]    | {1,2,4,5,6} | 5   |
2   | [4,5,6,1,2]    | {1,2,4,5,6} | 5   |

#### Working Set vs Thrashing Prevention

```
Total Working Set = Sum of all process WSS

IF total_working_set > physical_memory:
    -> System is overcommitted
    -> Thrashing imminent
    -> Action: Suspend one or more processes

IF total_working_set << physical_memory:
    -> Resources are underutilized
    -> Can increase multiprogramming
```

### Page Size

Choosing the page size involves trade-offs that impact multiple system components.

#### Page Size Trade-offs Table

| Factor | Small Pages | Large Pages | Explanation |
|--------|-------------|-------------|-------------|
| **Internal Fragmentation** | Less waste | More waste | Last page may be only partially used |
| **Page Table Size** | Larger (more entries) | Smaller (fewer entries) | Page table = address_space / page_size |
| **I/O Overhead** | More transfers | Fewer transfers | Each page fault requires one I/O |
| **TLB Reach** | Smaller (fewer mappings) | Larger (more address space mapped) | TLB entries * page_size |
| **Locality** | Better matching | May include unrelated data | Large pages bring in unneeded data |
| **Disk Transfer** | More seeks, less data | Fewer seeks, more data | Disk throughput vs latency trade-off |

#### TLB Reach Formula

```
TLB Reach = TLB_Entries * Page_Size

Example:
  4 KB pages, 64 TLB entries -> TLB Reach = 256 KB
  2 MB pages, 64 TLB entries -> TLB Reach = 128 MB

Larger TLB reach means more of the working set fits in the TLB,
reducing TLB misses.
```

#### Why 4 KB is Standard

- Historical: PDP-11 used 8 KB pages, then 4 KB became common
- Trade-off sweet spot: 4 KB balances internal fragmentation vs page table size
- Hardware support: x86, ARM, RISC-V all support 4 KB base pages
- Huge pages (2 MB, 1 GB): Available for workloads with large, contiguous memory (databases, VMs)

#### Real-World Analogy

Packing a suitcase. Small pages = many small boxes (lots of labels to manage, but tightly packed). Large pages = fewer big boxes (fewer labels, but wasted space inside each partially-filled box). For a trip (process), you pack items you need. If boxes are too big, you bring unnecessary items. If too small, you spend all day managing boxes.

### Modern Developments

**Transparent Huge Pages (THP):** Linux automatically promotes groups of 4 KB pages to 2 MB pages when they are frequently accessed together.

**Memory-mapped files:** Instead of using `read()`/`write()`, files are mapped into the address space via `mmap()`. Accessing the mapped region causes page faults that bring in file data. This unifies file I/O and memory management.

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

**Kernel Same-page Merging (KSM):** Linux kernel scans memory and merges identical pages from different processes into a single copy-on-write page. Used in virtualization to reduce memory usage.

**Memory Ballooning:** In virtualized environments, the hypervisor can "inflate" a balloon driver inside the guest to reclaim memory, then "deflate" to give memory back. This allows dynamic memory balancing between VMs.
## Interview Corner

Common interview questions on virtual memory with detailed answers.

### Q1: Walk through the complete steps of page fault handling.

**Answer:** A page fault follows these 9 steps:
1. **Trap:** MMU detects valid bit = 0, raises page fault exception
2. **Save state:** OS saves PC, registers of current process
3. **Identify page:** OS reads CR2 register (x86) to extract faulting virtual address
4. **Validate:** Check if VPN is in valid range, verify protection bits
5. **Free frame:** Check free-frame list; if empty, invoke replacement
6. **Disk I/O:** Issue read from swap/mapped file (slowest step)
7. **Context switch (optional):** Run another process during I/O wait
8. **I/O complete:** Disk interrupt -> update PTE (valid=1, frame=f)
9. **Restart:** Restore saved state, re-execute faulting instruction

**Key insight:** The instruction restarts from scratch, not resumes. This matters for auto-increment instructions or string copies that span page boundaries.

### Q2: What are the trade-offs between small and large page sizes?

**Answer:**

| Aspect | Small Page (4 KB) | Large Page (2 MB) |
|--------|-----------------|-------------------|
| Internal fragmentation | Low | Higher |
| Page table size | Large (512 entries per 2MB for 4KB pages) | Small (1 entry per 2MB) |
| TLB reach | 4KB * entries (e.g. 256KB) | 2MB * entries (e.g. 128MB) |
| Page fault I/O | Small transfer per fault | Large transfer per fault |
| Allocation flexibility | High | Low (may need contiguous physical) |

**When to use large pages:** Databases, in-memory caches, VMs, HPC.
**When to use small pages:** General-purpose workloads, I/O-bound processes.

### Q3: How does the TLB differ from a CPU cache?

| Property | TLB | CPU Cache (L1/L2/L3) |
|----------|-----|---------------------|
| **What it caches** | Virtual-to-physical address translations | Actual data and instructions |
| **Size** | Small (32-2048 entries) | Larger (32KB-64MB) |
| **Associativity** | Fully/highly associative | N-way set associative |
| **Miss penalty** | Page walk (walk page table) | Access next-level cache or memory |
| **Replacement** | Typically LRU/random | LRU, pseudo-LRU, RR |
| **Managed by** | Hardware (MMU) | Hardware (cache controller) |

**TLB miss:** Access page table in memory (may trigger page fault).
**Cache miss:** Access next level cache or main memory.
Without TLB: every memory access needs two physical accesses (page table + data).

### Q4: What is the difference between paging and swapping?

**Paging:** Moves individual pages between memory and swap (fixed-size units).
**Swapping:** Moves entire processes between memory and swap.

Modern systems use paging, not swapping (except for suspend/resume).

### Q5: Explain Belady Anomaly and which algorithms exhibit it.

Belady Anomaly occurs when increasing the number of frames **increases** page faults. Only FIFO exhibits it (and some FIFO-like algorithms). LRU and Optimal do NOT exhibit it because they follow the **stack property**: the set of pages in memory with N frames is a subset of the set with N+1 frames. FIFO does not satisfy this because the queue order changes with different frame counts.

### Q6: How would you implement LRU in a real OS kernel?

In practice, exact LRU is too expensive. Use **LRU approximation**:
1. **Clock (Second-Chance):** Circular buffer with reference bit - used in Linux, BSD
2. **Aging:** N-bit counter per page shifted periodically with reference bit injected
3. **Two-handed clock:** Two pointers racing - one clears ref bits, one evicts

### Q7: What is the difference between local and global page replacement?

**Local:** Victim selected from the faulting process only. Provides isolation but may waste memory.
**Global:** Victim selected from any process. More efficient but can cause cross-process thrashing.

Linux uses **global** replacement (page reclaim from any process) but with per-process working-set estimation to prevent thrashing.

### Q8: What happens when you allocate more memory than physical RAM?

On most systems, it works (via demand paging). Pages that are not accessed stay on disk. When you actually access all allocated memory, the system either:
- Thrash (hard disk continuously paging)
- Invoke OOM (Out-Of-Memory) killer to terminate processes
- Swap to SSD with better performance (but still slow)

### Q9: Why does fork() use copy-on-write? How much does it save?

Without COW: `fork()` copies the entire address space of the parent (could be GB). With COW: only page tables are copied (a few KB). Actual pages are shared and duplicated only on write. Since `exec()` (removing the entire address space) usually follows `fork()`, COW avoids copying pages that will be immediately discarded. Savings: 99.9%+ in common case.

### Q10: What is mmap() and how does it relate to demand paging?

`mmap()` maps a file (or device) into the virtual address space. File content is demand-paged: accessing a mapped region causes a page fault, and the OS reads the file block from disk into memory. This unifies file I/O and memory management - the same page fault mechanism handles both swap and file-backed pages.

## Applications in Real Systems

### Linux Page Reclaim (kswapd + PFRA)

Linux uses a sophisticated page reclamation system:

```
Components:
  - kswapd: Kernel thread that activates when free memory is low
  - PFRA: Page Frame Reclamation Algorithm
  - LRU lists: active (referenced recently) and inactive lists

LRU Lists in Linux:
  [Inactive List] <-> [Active List]
        |                    |
    Clean pages         Recently used
    Ready for eviction  Promoted on second access

kswapd Operation:
  1. Monitors free memory pages (watermarks: min, low, high)
  2. When free < low watermark: kswapd wakes up
  3. Scans pages from inactive list and reclaims clean ones
  4. Moves pages from active to inactive if ref bit is clear
  5. Sleeps when free > high watermark

Watermarks:
  High: kswapd sleeps
  Low:  kswapd starts reclaim
  Min:  Direct reclaim (processes reclaim pages synchronously)
```

**Page types in Linux:**
- **File-backed pages:** Content from files (can be dropped if clean)
- **Anonymous pages:** Heap, stack (must be swapped to swap space)
- **Shared pages:** Mapped by multiple processes (COW)

**Reclaim priority (swappiness):**
- swappiness = 0: Only reclaim file-backed pages (no swap)
- swappiness = 60 (default): Balance between file-backed and anonymous
- swappiness = 100: Aggressively swap anonymous pages

### Windows Virtual Memory

Windows uses a **demand paging with clustering** approach:

```
Windows Virtual Memory Components:

  Working Set Manager:
    - Monitors per-process working set sizes
    - Adjusts working set limits dynamically
    - Uses FIFO-with-clock replacement (approximate LRU)

  Balance Set Manager:
    - system thread that runs every 4 seconds
    - Checks memory-related counters
    - Modifies process working set limits

  Pages:
    - Valid: In physical memory, accessible
    - Transition: In standby list (still in memory but not in working set)
    - Invalid: On disk (page file)
    - Modified: Dirty pages not yet written to disk

  Memory Lists:
    - Zeroed list: Pages cleared for security (satisfied first)
    - Free list: Unused pages
    - Standby list: Recently evicted pages (reclaim without disk I/O!)
    - Modified list: Dirty pages waiting to be written to disk

  Page File:
    - System managed pagefile.sys
    - Can extend across multiple disks
    - Size recommendations: 1-3x physical RAM

  Working Set Policies:
    - Minimum: Process must have at least this many pages
    - Maximum: Hard limit (default: 345 pages on 32-bit)
    - Current: Dynamically adjusted based on memory pressure
```

**Windows Clock Algorithm:**
Windows uses FIFO with clock (improved variant). Each page has:
- **Reference bit:** Set on access
- **Modified bit:** Set on write
- **Protection bits:** Read/write/execute

The clock hand scans forward, skipping recently referenced pages.

### macOS Virtual Memory

macOS (XNU kernel) uses a unified cache architecture:

```
macOS Virtual Memory Components:

  Unified Buffer Cache:
    - Single cache for both file system and virtual memory
    - No separate buffer cache (unlike older UNIX)
    - All file I/O goes through the page cache

  Dynamic Pager:
    - Manages swap backing store
    - Creates/removes swap files as needed
    - Automatically adjusts number of swap files

  Memory Pressure:
    - Level: Normal -> Warning -> Critical
    - memorystatus: Notifies apps of pressure level
    - Jetsam: Terminates processes under critical pressure
    - Compression: Compress inactive pages instead of swapping

  Page Compression (since Mavericks 10.9):
    - Instead of swapping idle pages to disk, compress them
    - WKdm compression algorithm (fast, designed for memory)
    - Compressed pages stored in "compressor" (separate from swap)
    - ~2x compression ratio typical
    - Avoids disk I/O = faster and saves SSD wear

  Memory Zones:
    - Kernel map: Kernel allocations
    - I/O map: Device I/O buffers
    - User map: Application memory
    - Shared map: Shared libraries, inter-process communication

  Swap Files:
    - /private/var/vm/swapfile0, swapfile1, ...
    - Created on demand, removed when empty
    - Multiple swap files for parallelism
```

### Key Differences Table

| Aspect | Linux | Windows | macOS |
|--------|-------|---------|-------|
| **Replacement** | Two-list LRU (active/inactive) | Clock (FIFO with ref bit) | LRU with compression |
| **Swapping** | kswapd + OOM killer | Working set manager | Dynamic pager + Jetsam |
| **Compression** | zram/zswap (optional) | No (uses page file) | Yes (default since 10.9) |
| **Huge Pages** | THP (2MB/1GB) | Large Pages | Super Pages |
| **File Cache** | Page cache (unified) | Standby list | Unified cache |
| **OOM Handling** | OOM killer (sends SIGKILL) | Out-of-memory manager | Jetsam (priority-based) |
| **Swap Location** | Separate partition or file | pagefile.sys | /private/var/vm/ |

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

    // Sequential access (good locality - low page faults)
    for (int i = 0; i < size; i++) {
        arr[i] = i;  // Pages brought in sequentially
    }

    // Random access (poor locality - many page faults)
    srand(0);
    for (int i = 0; i < 1000000; i++) {
        int idx = rand() % size;
        arr[idx] = i;  // May cause TLB misses and page faults
    }

    free(arr);
    return 0;
}
```

### Example 2: Page Replacement Simulation in Python (All Algorithms)

```python
class PageReplacementBenchmark:
    def __init__(self, frame_count: int):
        self.frame_count = frame_count

    def fifo(self, refs):
        frames, faults, q = [], 0, []
        for p in refs:
            if p in frames:
                continue
            faults += 1
            if len(frames) < self.frame_count:
                frames.append(p)
                q.append(p)
            else:
                victim = q.pop(0)
                idx = frames.index(victim)
                frames[idx] = p
                q.append(p)
        return faults

    def optimal(self, refs):
        frames, faults = [], 0
        for i, p in enumerate(refs):
            if p in frames:
                continue
            faults += 1
            if len(frames) < self.frame_count:
                frames.append(p)
            else:
                farthest, victim = -1, -1
                for f in frames:
                    try:
                        nxt = refs.index(f, i + 1)
                    except ValueError:
                        nxt = float('inf')
                    if nxt > farthest:
                        farthest = nxt
                        victim = f
                frames.remove(victim)
                frames.append(p)
        return faults

    def lru(self, refs):
        frames, faults, last_used = [], 0, {}
        for i, p in enumerate(refs):
            if p in frames:
                last_used[p] = i
                continue
            faults += 1
            if len(frames) < self.frame_count:
                frames.append(p)
            else:
                lru_page = min(frames, key=lambda f: last_used.get(f, -1))
                frames.remove(lru_page)
                frames.append(p)
            last_used[p] = i
        return faults

    def clock(self, refs):
        frames, refs_bits, hand = [None] * self.frame_count, [0] * self.frame_count, 0
        page_set, faults, loaded = set(), 0, 0
        for p in refs:
            if p in page_set:
                refs_bits[frames.index(p)] = 1
                continue
            faults += 1
            if loaded < self.frame_count:
                frames[loaded] = p
                refs_bits[loaded] = 1
                page_set.add(p)
                hand = (loaded + 1) % self.frame_count if loaded == hand else hand
                loaded += 1
            else:
                while True:
                    if refs_bits[hand] == 0:
                        victim = frames[hand]
                        page_set.remove(victim)
                        frames[hand] = p
                        refs_bits[hand] = 1
                        page_set.add(p)
                        hand = (hand + 1) % self.frame_count
                        break
                    else:
                        refs_bits[hand] = 0
                        hand = (hand + 1) % self.frame_count
        return faults

    def mfu(self, refs):
        frames, freq, faults = [], {}, 0
        for p in refs:
            if p in freq:
                freq[p] += 1
                continue
            faults += 1
            if len(frames) < self.frame_count:
                frames.append(p)
                freq[p] = 1
            else:
                mfu_page = max(frames, key=lambda f: freq.get(f, 0))
                frames.remove(mfu_page)
                del freq[mfu_page]
                frames.append(p)
                freq[p] = 1
        return faults

    def lfu(self, refs):
        frames, freq, faults = [], {}, 0
        for p in refs:
            if p in freq:
                freq[p] += 1
                continue
            faults += 1
            if len(frames) < self.frame_count:
                frames.append(p)
                freq[p] = 1
            else:
                lfu_page = min(frames, key=lambda f: freq.get(f, 0))
                frames.remove(lfu_page)
                del freq[lfu_page]
                frames.append(p)
                freq[p] = 1
        return faults


if __name__ == "__main__":
    refs = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
    bm = PageReplacementBenchmark(3)

    results = {
        "FIFO":   bm.fifo(refs),
        "OPT":    bm.optimal(refs),
        "LRU":    bm.lru(refs),
        "Clock":  bm.clock(refs),
        "MFU":    bm.mfu(refs),
        "LFU":    bm.lfu(refs),
    }

    print(f"{'Algorithm':<10} {'Faults':>6}")
    print("-" * 18)
    for algo, faults in sorted(results.items(), key=lambda x: x[1]):
        print(f"{algo:<10} {faults:>6}")

    print("\nRunning on reference string:")
    print(refs)
```

### Example 3: C++ Program for all Page Replacement Algorithms

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>
#include <algorithm>
#include <climits>

class PageReplacementBenchmark {
    int frame_count;

public:
    PageReplacementBenchmark(int n) : frame_count(n) {}

    int fifo(const std::vector<int>& refs) {
        std::queue<int> q;
        std::unordered_set<int> in_mem;
        int faults = 0;
        for (int p : refs) {
            if (in_mem.count(p)) continue;
            faults++;
            if ((int)in_mem.size() < frame_count) {
                in_mem.insert(p); q.push(p);
            } else {
                int v = q.front(); q.pop();
                in_mem.erase(v); in_mem.insert(p); q.push(p);
            }
        }
        return faults;
    }

    int optimal(const std::vector<int>& refs) {
        std::unordered_set<int> in_mem;
        int faults = 0;
        for (size_t i = 0; i < refs.size(); i++) {
            int p = refs[i];
            if (in_mem.count(p)) continue;
            faults++;
            if ((int)in_mem.size() < frame_count) {
                in_mem.insert(p);
            } else {
                int victim = -1, farthest = -1;
                for (int f : in_mem) {
                    int next = INT_MAX;
                    for (size_t j = i+1; j < refs.size(); j++)
                        if (refs[j] == f) { next = j; break; }
                    if (next > farthest) { farthest = next; victim = f; }
                }
                in_mem.erase(victim);
                in_mem.insert(p);
            }
        }
        return faults;
    }

    int lru(const std::vector<int>& refs) {
        std::unordered_set<int> in_mem;
        std::unordered_map<int, int> lru_map;
        int faults = 0;
        for (size_t i = 0; i < refs.size(); i++) {
            int p = refs[i];
            if (in_mem.count(p)) { lru_map[p] = i; continue; }
            faults++;
            if ((int)in_mem.size() < frame_count) {
                in_mem.insert(p);
            } else {
                int lru_page = -1, oldest = INT_MAX;
                for (int f : in_mem) {
                    if (lru_map[f] < oldest) { oldest = lru_map[f]; lru_page = f; }
                }
                in_mem.erase(lru_page);
                in_mem.insert(p);
            }
            lru_map[p] = i;
        }
        return faults;
    }

    int mfu(const std::vector<int>& refs) {
        std::vector<int> frames;
        std::unordered_map<int, int> freq;
        int faults = 0;
        for (int p : refs) {
            if (freq.count(p)) { freq[p]++; continue; }
            faults++;
            if ((int)frames.size() < frame_count) {
                frames.push_back(p); freq[p] = 1;
            } else {
                auto it = std::max_element(frames.begin(), frames.end(),
                    [&](int a, int b) { return freq[a] < freq[b]; });
                freq.erase(*it);
                *it = p; freq[p] = 1;
            }
        }
        return faults;
    }

    int lfu(const std::vector<int>& refs) {
        std::vector<int> frames;
        std::unordered_map<int, int> freq;
        int faults = 0;
        for (int p : refs) {
            if (freq.count(p)) { freq[p]++; continue; }
            faults++;
            if ((int)frames.size() < frame_count) {
                frames.push_back(p); freq[p] = 1;
            } else {
                auto it = std::min_element(frames.begin(), frames.end(),
                    [&](int a, int b) { return freq[a] < freq[b]; });
                freq.erase(*it);
                *it = p; freq[p] = 1;
            }
        }
        return faults;
    }
};

int main() {
    std::vector<int> refs = {7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1};
    PageReplacementBenchmark bm(3);

    std::cout << "Ref string: ";
    for (int r : refs) std::cout << r << " ";
    std::cout << "\n\nAlgorithm  Faults\n--------  ------\n";
    std::cout << "FIFO    " << bm.fifo(refs) << "\n";
    std::cout << "OPT     " << bm.optimal(refs) << "\n";
    std::cout << "LRU     " << bm.lru(refs) << "\n";
    std::cout << "MFU     " << bm.mfu(refs) << "\n";
    std::cout << "LFU     " << bm.lfu(refs) << "\n";
    return 0;
}
```

## Concept Comparison

| Algorithm | Belady Anomaly | Implementation Cost | Hit Ratio | Use Case |
|---------|--------------|-------------------|---------|----------|
| FIFO | Yes | Very low | Poor - may evict frequently used pages | Educational |
| Optimal (MIN) | No | Impossible (needs future) | Best (benchmark) | Theoretical comparison |
| LRU | No | High (full implementation) | Near-optimal | Databases, caches |
| Clock (2nd Chance) | Varies | Low (reference bit) | Good approx. of LRU | Linux, BSD, Windows |
| Aging | No | Medium (8-bit counter) | Good | Some UNIX systems |
| NRU | No | Very low (R/D bits) | Moderate | MINIX, embedded |
| MFU | No | Medium (freq counter) | Poor for temporal | Rare, niche |
| LFU | No | Medium (freq counter) | Moderate | Redis, CDN caches |

## Quick Reference

| Term | Definition |
|------|------------|
| **Virtual Memory** | Separation of logical from physical memory; process runs partially loaded |
| **Demand Paging** | Page loaded only when a reference to it occurs |
| **Page Fault** | Interrupt when referenced page is not in physical memory |
| **Valid Bit** | Indicates whether a page is in physical memory |
| **Dirty Bit** | Indicates whether page content has been modified |
| **Reference Bit** | Hardware-set bit indicating page was accessed |
| **Thrashing** | Critical performance collapse from excessive paging |
| **Copy-on-Write** | Pages shared until modified, then copied |
| **Working Set** | Set of pages a process is actively referencing |
| **Working Set Window** | Time interval defining the working set (Delta) |
| **Belady Anomaly** | More frames can increase page faults (FIFO only) |
| **TLB Reach** | Amount of virtual address space covered by TLB |
| **Locality** | Tendency to access nearby or recently accessed addresses |
| **Swappiness** | Linux kernel parameter for swap aggressiveness |
| **OOM Killer** | Process that terminates processes when memory is exhausted |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone | HPC/ML |
|-------|----------|--------|---------------|----------|--------|
| Demand Paging | Standard | May disable (prefers own caching) | Host-paged | Guest OS manages own paging | Large page allocations |
| LRU | Approximated (Clock) | Buffer pool replacement | Not applicable | Page ballooning | Huge pages, pinned memory |
| Thrashing | Good allocation reduces | Rare (controlled workload) | Rare (predefined) | Over-commitment risk | Memory oversubscription |
| CoW | fork() optimization | Snapshot/checkpoint | Container layers | VM cloning | MPI fork optimization |
| Page Size | 4 KB standard | 2 MB / 1 GB huge pages | Custom (MMU optional) | 4 KB | 2 MB / 1 GB |
| Replacement | Global (Linux) | Application-level (Buffer Pool) | Pre-allocated | Global + compression | Pinned memory |

## Chapter Quiz

1. What happens when a process references a page not in memory?
   - a) Process terminated
   - b) Page fault; OS loads page from disk
   - c) System reboots
   - d) TLB is flushed

2. Which replacement algorithm is impossible to implement in a real OS?
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

5. The Clock algorithm approximates:
   - a) FIFO
   - b) Optimal
   - c) LRU
   - d) MFU

6. Which algorithm uses reference and dirty bits to classify pages into 4 classes?
   - a) Aging
   - b) NRU
   - c) Second-Chance
   - d) FIFO

7. When fork() is called, pages are initially:
   - a) Copied to new physical frames
   - b) Shared as copy-on-write
   - c) Mapped to the zero page
   - d) Swapped to disk

8. The working set is:
   - a) All pages a process has ever accessed
   - b) Pages referenced in the last Delta time interval
   - c) The entire address space
   - d) Pages in the TLB

## Summary

- Virtual memory decouples logical address space from physical memory via demand paging
- Page faults are expensive (~10ms); even 0.1% fault rate causes a 100x slowdown
- FIFO is simple but can exhibit Belady Anomaly (more frames = more faults)
- Optimal page replacement minimizes faults but requires future knowledge
- LRU approximates Optimal using past references; Clock algorithm approximates LRU with low overhead
- MFU/LFU use access frequency - useful for specific workloads (caching)
- LRU approximations (Aging, NRU, Clock) provide practical LRU without full hardware support
- Frame allocation: fixed (equal/proportional) vs priority, local vs global
- Thrashing occurs when working set exceeds physical memory; solved by adjusting multiprogramming
- Working set model uses a sliding window (Delta) to estimate each process memory needs
- Locality (spatial + temporal) makes virtual memory work in practice
- Page size involves trade-offs between internal fragmentation, TLB reach, and I/O overhead
- Real systems (Linux, Windows, macOS) use demand paging with LRU approximation
- Linux uses kswapd with active/inactive lists; Windows uses clock with standby/modified lists
- macOS uses page compression to reduce swapping on SSDs

## Exercises

### Basic

1. What is a page fault? Walk through the steps the OS takes to handle one.
2. Given the reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 frames, compute page faults for FIFO, LRU, and Clock.
3. What is thrashing? What is the working set, and how does it relate to thrashing?
4. List the page replacement algorithms and rank them by implementation cost.

### Intermediate

5. Demonstrate Belady Anomaly: Find a reference string where FIFO with 4 frames has more faults than with 3 frames.
6. Implement the Clock (Second-Chance) page replacement algorithm. Use a circular list of page table entries with reference bits. Test it on the same reference string as Example 2.
7. Explain the working-set model. If a process has working-set window Delta = 10, and the reference string is 1, 2, 3, 2, 1, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, what is the working set at each point? Identify locality transitions.
8. Compare local vs global page replacement. Give an advantage and disadvantage of each.
9. Write a Python program that compares FIFO, LRU, Optimal, Clock, MFU, and LFU on the same reference string and prints the fault counts.

### Advanced

10. Write a benchmark that allocates a 1 GB array and measures access time for sequential, strided (stride = page_size * 2), and fully random access patterns. Use `clock_gettime()` for precise measurement. Explain the results in terms of TLB misses and page faults.
11. Implement the **Working-Set Page Replacement Algorithm**: keep track of each process working set and preempt pages not in the working set. Compare its fault rate to LRU for the reference string.
12. Design and implement a program that uses `mmap()` to process a 1 GB file. Measure the time to read the file sequentially with and without `madvise()` hints (`MADV_SEQUENTIAL`, `MADV_RANDOM`, `MADV_WILLNEED`). What is the impact of each hint on page faults?
13. Implement the Aging LRU approximation algorithm. Compare its fault count against exact LRU on the standard reference string.
14. Research and describe how Linux reclaims pages during memory pressure. Explain the roles of kswapd, the active/inactive lists, and swappiness.
