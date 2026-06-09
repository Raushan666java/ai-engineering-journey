# Chapter 13: Memory Hierarchy

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Explain the principle of locality and its role in memory hierarchy design
2. Analyse cache organisation including direct-mapped, fully associative, and set-associative mappings
3. Compare write-through and write-back cache write policies
4. Describe virtual memory organisation and address translation
5. Design the translation lookaside buffer (TLB) and analyse its performance

## Theory

### 13.1 Principle of Locality

Memory hierarchy exploits two forms of locality exhibited by programs:

- **Temporal locality**: A memory location accessed once is likely to be accessed again soon.
- **Spatial locality**: If a memory location is accessed, nearby locations are likely to be accessed soon.

The hierarchy places smaller, faster memory close to the processor and larger, slower memory farther away.

### 13.2 Cache Memory

A cache is a small, fast memory that holds copies of frequently accessed data from main memory. Cache operation is transparent to the programmer.

#### 13.2.1 Cache Terminology

- **Block (line)**: The minimum unit of data transfer between cache and main memory.
- **Tag**: The portion of the address used to identify which block is stored in a cache line.
- **Index**: The portion of the address used to select a cache line.
- **Offset**: The portion of the address used to select a byte within a block.
- **Hit**: The requested data is found in the cache.
- **Miss**: The requested data is not in the cache; it must be fetched from the next level.
- **Hit rate**: Fraction of accesses that hit in the cache.
- **Miss rate**: 1 &minus; hit rate.
- **Hit time**: Time to access the cache on a hit.
- **Miss penalty**: Time to fetch the block from the next level on a miss.

#### 13.2.2 Direct-Mapped Cache

Each main memory block maps to exactly one cache line. The cache line is determined by the index bits of the address.

For a cache with 2^n lines, the index is the *n* bits immediately above the block offset.

**Address division**: [Tag | Index | Block Offset]

**Miss handling**: The cache line is evicted and replaced with the requested block.

**Advantage**: Simple, fast access.
**Disadvantage**: Conflict misses occur when multiple addresses map to the same line.

#### 13.2.3 Fully Associative Cache

Any main memory block can be placed in any cache line. The cache controller compares the tag against all cache line tags simultaneously (content-addressable memory).

**Advantage**: No conflict misses; best utilisation of cache space.
**Disadvantage**: Expensive, slow for large caches (comparator per line).

#### 13.2.4 Set-Associative Cache

The cache is divided into *v* sets, each containing *k* ways (lines). An *k*-way set-associative cache: each main memory block maps to one set, but can be placed in any of the *k* lines within that set.

The index selects the set; the tag is compared against all *k* ways within the set.

| Associativity | Conflict Misses | Hardware Cost | Hit Time |
|:-------------:|:---------------:|:-------------:|:--------:|
| Direct-mapped (1-way) | High | Low | Fast |
| 2-way set-associative | Moderate | Moderate | Moderate |
| 4-way set-associative | Low | High | Moderate |
| Full associative | None | Highest | Slowest |

**Replacement policies for set-associative caches**:
- **LRU (Least Recently Used)**: Replace the block that has been unused the longest.
- **FIFO (First In, First Out)**: Replace the oldest block.
- **Random**: Replace a randomly selected block.

### 13.3 Write Policies

#### 13.3.1 Write-Through

Data is written to both the cache and main memory simultaneously. The write buffer allows the processor to continue while the write completes.

**Advantage**: Main memory is always consistent.
**Disadvantage**: High write traffic to main memory.

#### 13.3.2 Write-Back

Data is written only to the cache. The modified cache line is marked as dirty and written back to main memory only when the line is evicted.

**Advantage**: Reduced write traffic.
**Disadvantage**: Temporary inconsistency between cache and main memory.

#### 13.3.3 Miss Handling on Writes

- **Write-allocate**: On a write miss, the block is fetched into the cache, then the write is performed.
- **Write-no-allocate**: On a write miss, the write goes directly to main memory without fetching the block into the cache.

Write-through caches typically use write-no-allocate. Write-back caches typically use write-allocate.

### 13.4 Cache Performance

**Average memory access time (AMAT)**:

AMAT = Hit time + Miss rate &times; Miss penalty

**Optimisation techniques**:
1. Larger block size (reduces compulsory misses, increases miss penalty).
2. Higher associativity (reduces conflict misses, increases hit time).
3. Multilevel caches (L1 small and fast, L2 larger and slower, reducing effective miss penalty).

### 13.5 Virtual Memory

Virtual memory provides the illusion of a large, contiguous address space. The processor generates virtual addresses, which are translated to physical addresses by the memory management unit (MMU).

#### 13.5.1 Page-Based Virtual Memory

- **Page**: The unit of virtual memory (typically 4 KB).
- **Page frame**: The unit of physical memory.
- **Page table**: A per-process data structure that maps virtual page numbers (VPN) to physical frame numbers (PFN).
- **Page fault**: When a virtual page is not in physical memory, the OS loads it from disk.

**Address translation**: Virtual address = [VPN | Page Offset]. The VPN indexes the page table to find the PFN. Physical address = [PFN | Page Offset].

#### 13.5.2 Page Table Organisation

A flat page table has 2^(number of VPN bits) entries. For a 32-bit address space with 4 KB pages: 2^20 entries. With 4 bytes per entry, the page table is 4 MB per process.

**Hierarchical page tables**: Reduce memory overhead by using multiple levels. A two-level page table has a page directory (first level) that points to page tables (second level), which contain the VPN-to-PFN mappings.

### 13.6 Translation Lookaside Buffer (TLB)

The TLB is a small, fully associative cache of recently used VPN-to-PFN translations. It eliminates the need to access the page table in memory for every memory access.

**TLB hit**: Translation is obtained from the TLB in one cycle.
**TLB miss**: The hardware or software walks the page table to find the translation, loads it into the TLB, and retries.

**TLB performance**:

Effective translation time = TLB hit rate &times; TLB hit time + TLB miss rate &times; TLB miss penalty

## Examples

### Example 13.1: Cache Address Division

A 64 KB direct-mapped cache has 16-byte blocks. The system has a 32-bit address. Determine the number of bits for tag, index, and offset.

**Solution**:
Block offset: 16 bytes = 2^4, so 4 offset bits.
Number of cache lines: 64 KB / 16 B = 4096 lines = 2^12, so 12 index bits.
Tag bits: 32 &minus; 12 &minus; 4 = 16 bits.

Address division: [31:16] tag, [15:4] index, [3:0] offset.

### Example 13.2: Cache Miss Rate Calculation

A program accesses the following word addresses (in decimal): 0, 4, 8, 12, 16, 20, 24, 28, 0, 4. The cache is 32-byte direct-mapped with 4-byte blocks. Calculate the miss rate.

**Solution**: Each block is 4 bytes. Block address = word address / 4. Addresses map to blocks 0, 1, 2, 3, 4, 5, 6, 7, 0, 1. The cache has 8 lines (32 / 4). First access to each block is a miss. Subsequent access is a hit if the block is still in the cache. Access sequence: miss, miss, miss, miss, miss, miss, miss, miss, hit, hit. Miss rate = 8/10 = 80%.

### Example 13.3: AMAT Calculation

A processor has a 2.5 GHz clock. L1 hit time is 1 cycle, L1 miss rate is 5%, L2 hit time is 10 cycles, L2 miss rate is 20%, and main memory access time is 100 cycles. Calculate the AMAT.

**Solution**:
L1 AMAT = 1 + (0.05 &times; 10) = 1.5 cycles.
L1 MAMAT = 1 + (0.05 &times; [10 + 0.20 &times; 100]) = 1 + 0.05 &times; (10 + 20) = 1 + 1.5 = 2.5 cycles.

In nanoseconds (2.5 GHz = 0.4 ns per cycle): AMAT = 2.5 &times; 0.4 = 1.0 ns.

### Example 13.4: TLB Performance

A TLB has 95% hit rate, 1 cycle hit time, and 20 cycle miss penalty. Average memory access time?

**Solution**: Effective translation time = 0.95 &times; 1 + 0.05 &times; 20 = 0.95 + 1.0 = 1.95 cycles.

## Summary

- Caches exploit temporal and spatial locality to reduce average memory access time.
- Direct-mapped, set-associative, and fully associative caches offer different trade-offs between complexity and miss rate.
- Write-through and write-back policies govern how cache writes are propagated to main memory.
- Virtual memory provides process isolation and a uniform address space using page tables.
- The TLB accelerates address translation by caching recent page table entries.

## Exercises

### Review Questions

1. Define temporal and spatial locality. Provide an example of each.
2. What is the difference between a cache hit and a cache miss?
3. Explain the three Cs of cache misses.
4. How does virtual memory provide the illusion of a larger address space?
5. What purpose does the TLB serve?

### Application Problems

1. A 32 KB 4-way set-associative cache has 32-byte blocks. The system uses 32-bit addresses. Calculate the number of sets, index bits, and tag bits.

2. For the following word address sequence (decimal): 2, 6, 10, 14, 18, 22, 26, 30, 2, 6, compute the miss rate for:
   a) A 16-byte direct-mapped cache with 4-byte blocks
   b) A 16-byte 2-way set-associative cache with 4-byte blocks and LRU replacement

3. A system with 2.0 GHz processor has L1: 1 cycle, 8% miss; L2: 8 cycles, 25% miss; L3: 20 cycles, 40% miss; memory: 150 cycles. Calculate the AMAT in cycles and nanoseconds.

4. In a 32-bit system with 4 KB pages, a two-level page table has 1024 entries in the page directory and 256 entries per page table. Calculate the total page table memory per process if only 25% of the VPNs are mapped.

5. A TLB has 64 entries, 99% hit rate, 1 cycle hit time, and 30 cycle miss penalty. For a program with 1 million memory accesses, calculate the total TLB access time.

### Challenge Problem

Design a 4-way set-associative cache with LRU replacement. The cache has 32 KB total capacity with 64-byte blocks for a 32-bit processor. Describe:
a) The address division into tag, index, and offset
b) The LRU state machine for each set (maintaining 4! = 24 possible orderings)
c) The comparison and selection logic for reads
d) The timing of tag comparison vs data array access
e) Calculate the area trade-off compared to a direct-mapped cache of the same capacity
