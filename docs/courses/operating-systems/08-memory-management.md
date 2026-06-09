# Chapter 8 — Memory Management

## Learning Objectives

1. Distinguish logical, physical, and virtual addresses.
2. Compare contiguous allocation schemes and their fragmentation problems.
3. Explain paging and the function of the page table and TLB.
4. Describe segmentation and segmented paging.
5. Calculate effective access times with a TLB.

## 8.1 Address Binding

Programs manipulate **logical addresses** (also called virtual addresses). These addresses must be bound to **physical addresses** (actual RAM locations). Binding can occur at:

- **Compile time**: Absolute code is generated. If the starting address changes, recompilation is required.
- **Load time**: The compiler generates relocatable code. The loader translates addresses as it loads the program.
- **Execution time**: Address translation occurs dynamically during execution, supported by hardware (MMU). Most modern OSs use this method.

The **Memory Management Unit (MMU)** is hardware that translates logical addresses to physical addresses at runtime. The CPU sends logical addresses; the MMU adds a relocation register value to produce the physical address.

## 8.2 Contiguous Allocation

Each process occupies a single contiguous block of physical memory.

### 8.2.1 Fixed Partitioning

Memory is divided into fixed-size partitions. A process is loaded into the smallest partition that fits it.

**Disadvantages**: Internal fragmentation — a process does not fill its entire partition, wasting space. Partition size must be chosen a priori; small partitions cannot run large programs.

### 8.2.2 Dynamic Partitioning

Partitions are created dynamically to match process sizes. When a process terminates, its memory is freed, creating a hole. The OS maintains a list of holes.

**Placement algorithms**:

- **First-fit**: Allocate the first hole large enough. Fast, simple.
- **Best-fit**: Allocate the smallest hole large enough. Minimises wasted space but creates many tiny holes.
- **Worst-fit**: Allocate the largest hole. Leaves larger leftover holes but tends to waste large spaces.

**Disadvantages**: External fragmentation — many small holes between allocated blocks, preventing allocation of large processes even though total free space is sufficient.

### 8.2.3 Compaction

Compaction rearranges memory to combine all free space into one large block. Requires processes to be relocatable (dynamic binding at execution time). Compaction is expensive — it involves copying the entire process memory and updating all addresses.

## 8.3 Paging

Paging solves the fragmentation problem by dividing physical memory into fixed-size frames and logical memory into same-sized pages. A logical address is split into:

- **Page number (p)**: Index into a page table.
- **Page offset (d)**: Displacement within the page.

```
Logical address = (p, d)
Physical address = frame_number * frame_size + d
```

The **page table** maps page numbers to frame numbers. Each process has its own page table, stored in memory. The page-table base register (PTBR) points to the current process's page table.

### 8.3.1 Page Size

Typical page sizes are 4 KB (x86) or 8 KB (SPARC). Larger pages reduce the size of the page table and improve TLB coverage but increase internal fragmentation. The trend toward large pages (2 MB "huge pages" in Linux) is driven by databases and virtualisation workloads.

### 8.3.2 Translation Lookaside Buffer (TLB)

Every memory access requires reading the page table, which adds an extra memory reference. The TLB is a fast associative cache that stores recently used page-table entries.

**Effective Access Time (EAT)**:

```
EAT = hit_ratio × TLB_hit_time + (1 − hit_ratio) × TLB_miss_time
```

Example: TLB hit time = 10 ns, memory access time = 100 ns, hit ratio = 0.98:

```
EAT = 0.98 × (10 + 100) + 0.02 × (10 + 100 + 100)
    = 0.98 × 110 + 0.02 × 210
    = 107.8 + 4.2 = 112 ns
```

Without TLB: 200 ns (two memory accesses per address). TLB improves performance by 44%.

### 8.3.3 Protection

Each page-table entry includes a valid-invalid bit and protection bits:

- **Valid bit**: Indicates whether the page is in the process's logical address space.
- **Read/write/execute bits**: Enforce access permissions.
- **Dirty bit**: Set when the page has been written to (used for page replacement policies).

## 8.4 Segmentation

A segment is a variable-length logical unit corresponding to program structure (code, data, stack, symbol table, etc.). A logical address is `(segment_number, offset)`.

The **segment table** maps segment numbers to base addresses and limits. If the offset exceeds the limit, a segmentation fault occurs — this is the origin of the phrase.

**Advantages**:
- Natural fit for programmer's view (separate segments for functions, data structures).
- Segments can grow independently.
- Segments can be shared easily (same segment number mapped to same physical segment).

**Disadvantage**: External fragmentation, because segments are variable-length.

## 8.5 Segmented Paging

Combines segmentation with paging. Each segment is divided into pages, eliminating external fragmentation while preserving the logical structure of segmentation.

```
Logical address = (segment_number, page_number, offset)
```

On x86-64 systems, the segmentation model is essentially flat (all segments cover the entire address space), and paging handles all management. The classical 80x86 architecture used a two-level segmentation-paging scheme:

1. Segment selector → linear address (via Global/Local Descriptor Table).
2. Linear address → physical address (via page tables).

## 8.6 Page Table Implementation

### 8.6.1 Hierarchical Page Tables

A 32-bit logical address with 4 KB pages (12-bit offset) requires a 20-bit page number = 2^20 ≈ 1 million entries. To avoid storing such a large contiguous table, a two-level hierarchy is used:

- **Outer page table**: Indexed by the first p1 bits of the page number.
- **Inner page table**: Indexed by the remaining p2 bits.

x86 two-level paging: 10 bits outer, 10 bits inner, 12 bits offset.

For 64-bit architectures, three or four levels are required. x86-64 uses four levels (PML4, PDPT, PD, PT) with a 48-bit virtual address space.

### 8.6.2 Hashed Page Tables

For address spaces larger than 32 bits, hashed page tables use a hash function to map virtual page numbers to entries in a hash bucket chain. Each entry contains the virtual page number, the mapped frame number, and a pointer to the next entry in the chain.

### 8.6.3 Inverted Page Tables

An inverted page table has one entry per physical frame rather than one per virtual page. Each entry stores the PID and virtual page number mapping to that frame. The table size is proportional to physical memory, not virtual address space — a significant saving for 64-bit systems. However, lookups require searching the entire table (or using a hash). PowerPC and IA-64 use variants of inverted page tables.

## Summary

Memory management maps logical addresses to physical memory. Contiguous allocation suffers from fragmentation. Paging divides memory into fixed frames, eliminating external fragmentation at the cost of a page table. The TLB accelerates address translation. Segmentation provides a logical view of memory. Modern systems combine segment-paging or use purely paged models with multi-level page tables for 64-bit address spaces.

## Exercises

### Review Questions

1. What is the difference between logical and physical addresses, and what hardware performs the translation?
2. Define internal and external fragmentation. Which allocation method is prone to each?
3. How does the TLB improve effective memory access time?
4. What advantage does segmentation provide over paging for shared libraries?
5. Why do 64-bit systems use multi-level page tables instead of a single-level one?

### Application Problems

1. A system has 32-bit logical addresses with 4 KB pages. If each page table entry is 4 bytes, how large is a single-level page table? How much memory do two-level hierarchical page tables consume, assuming the outer table uses 10 bits?
2. Compute the effective access time for a system with TLB hit ratio 0.95, TLB access time 20 ns, and memory access time 100 ns. What is the improvement over a system without a TLB?
3. A program accesses pages in the sequence: 0, 1, 2, 3, 0, 1, 4, 5, 0, 1. The TLB has 4 entries and uses LRU replacement. How many TLB misses occur?

### Challenge Problem

1. Simulate a multi-level paging system. Given a 64-bit virtual address with page size 4 KB (12 bits offset) and three levels (9 bits each), implement a function that takes a virtual address and returns the physical frame number, assuming the page table entries are stored in a radix tree. Handle page faults by allocating new intermediate nodes on demand.
