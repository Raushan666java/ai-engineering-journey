# Chapter 8: Memory Management

**<< [Deadlocks](./07-deadlocks.md)** | [**Next: Virtual Memory**](./09-virtual-memory.md) >>

---

## Learning Objectives

- Explain the distinction between logical and physical addresses with real-world analogies
- Describe address binding at compile, load, and execution time with detailed steps
- Implement and trace contiguous memory allocation algorithms (first-fit, best-fit, worst-fit, next-fit)
- Design paged memory systems with hierarchical, hashed, and inverted page tables
- Execute full page-table walk dry runs from logical to physical addresses
- Explain segmentation, segment-table organization, and combined segmentation-with-paging
- Analyze complexity trade-offs (time, space, fragmentation) for every memory management scheme
- Map concepts to real systems: x86-64, ARM, Linux buddy allocator, huge pages, TLB reach

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/08-memory-management/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/08-memory-management/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/08-memory-management/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/08-memory-management/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/08-memory-management/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/08-memory-management/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Address Binding** | Compile-time, load-time, execution-time binding; relocation at different stages |
| **Logical vs Physical** | CPU generates logical addresses; MMU translates to physical at runtime using base/limit registers |
| **Contiguous Allocation** | Process loaded into contiguous memory partition; suffers external fragmentation |
| **Dynamic Storage Allocation** | First-fit (fast), Best-fit (minimizes waste), Worst-fit (avoids tiny holes), Next-fit (rotational) |
| **Paging** | Fixed-size pages/frames; eliminates external fragmentation; page table maps pages to frames |
| **Segmentation** | Variable-sized logical segments; matches programmer view; suffers external fragmentation |
| **Segmentation + Paging** | Combine segments + paging for efficient use; segments mapped to pages in x86 architecture |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Address Binding] --> B[Logical vs Physical Addresses]
    B --> C[MMU & Relocation]
    C --> D[Contiguous Allocation]
    D --> E[Fixed Partitioning]
    D --> F[Dynamic Partitioning]
    E --> G[Fragmentation]
    F --> G
    G --> H[Paging]
    G --> I[Segmentation]
    H --> J[Page Tables: Single / Multi / Hashed / Inverted]
    H --> K[TLB & Effective Access Time]
    I --> L[Segmentation with Paging]
    K --> M[Interview Corner & Real Systems]
    L --> M
    M --> N[Summary]
</div>

---

## Theory

![Memory Allocation](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/08-memory-management.png)

---

### Address Binding


**Address binding** is the process of mapping program instructions and data to memory addresses. The stage at which this binding occurs determines flexibility, performance, and security characteristics of the resulting program.

#### Real-World Analogy

> **Airline Seat Assignment**
> - **Compile-time binding**: You buy a specific seat (14A) when booking â€” that seat is locked regardless of flight changes.
> - **Load-time binding**: The airline assigns your seat at the gate based on availability when you board.
> - **Execution-time binding**: The flight attendant reseats you mid-flight to balance the aircraft.

Each later stage offers more flexibility but requires more infrastructure (hardware or software support).

#### The Three Binding Stages

**1. Compile-time Binding**

If the memory location of a process is known **in advance** at compile time, the compiler can generate **absolute code**. The addresses in the compiled binary are hardcoded.

```
Programmer writes:    int x = 10;
Compiler sees:        LOAD R1, [0x1000]   // x is hardcoded at address 0x1000
```

- **Must recompile** to relocate the program.
- Used by simple embedded systems and MS-DOS .COM files.
- If the starting address changes, every absolute reference breaks.

**2. Load-time Binding**

The compiler generates **relocatable code** (object files with relative addresses). The **loader** performs final address binding when loading the program into memory.

```
Object file:          LOAD R1, [R2 + 0x100]    // relative offset
Loader adds base:     Physical = Base + 0x100
```

- The process must be loaded into a **contiguous block** of memory.
- The base address is added to every relative reference at load time.
- If the program is swapped out and later reloaded at a different address, it must be rebound (reloaded).

**3. Execution-time Binding (Runtime Binding)**

Binding is delayed until the process is **running**. Hardware (the **MMU**) performs translation on every memory access.

```
Every instruction execution:
  CPU produces logical address â†’ MMU adds relocation register â†’ physical address
```

- Used by all modern general-purpose operating systems (Linux, Windows, macOS).
- Requires **hardware support** (MMU, TLB).
- Enables **swapping**, **paging**, **virtual memory**, and **process isolation**.

#### Step-by-Step Process of Execution-Time Binding

```
Step 1: CPU fetches instruction
        â””â”€â”€ Instruction contains a LOGICAL address (e.g., 0x1000)

Step 2: CPU sends logical address to MMU

Step 3: MMU adds current relocation register value (e.g., 0x400000)
        â””â”€â”€ Physical = 0x1000 + 0x400000 = 0x401000

Step 4: MMU sends physical address to memory bus

Step 5: Memory controller reads physical address 0x401000

Step 6: Data returned to CPU via MMU
```

#### Pseudocode

```
PROCEDURE translate_address(logical_addr, relocation_register):
    physical_addr â† logical_addr + relocation_register
    IF physical_addr < relocation_register + limit_register:
        RETURN physical_addr    // Valid access
    ELSE:
        RAISE segmentation_fault    // Out of bounds
    END IF
END PROCEDURE
```

#### C++ Implementation

```cpp
#include <iostream>
#include <cstdint>
#include <stdexcept>

class MMUSimulator {
private:
    uint32_t relocation_register;
    uint32_t limit_register;

public:
    MMUSimulator(uint32_t base, uint32_t limit)
        : relocation_register(base), limit_register(limit) {}

    uint32_t translate(uint32_t logical_address) {
        uint32_t physical_address = logical_address + relocation_register;

        if (physical_address >= relocation_register + limit_register) {
            throw std::out_of_range(
                "Segmentation fault: address " +
                std::to_string(physical_address) + " out of bounds [0, " +
                std::to_string(relocation_register + limit_register) + ")"
            );
        }
        std::cout << "Logical: 0x" << std::hex << logical_address
                  << " + Base: 0x" << relocation_register
                  << " = Physical: 0x" << physical_address << std::dec << "\n";
        return physical_address;
    }

    void set_base_limit(uint32_t base, uint32_t limit) {
        relocation_register = base;
        limit_register = limit;
    }
};

int main() {
    MMUSimulator mmu(0x400000, 0x100000); // Base = 4MB, Limit = 1MB

    try {
        mmu.translate(0x001000); // Valid â†’ 0x401000
        mmu.translate(0x00F000); // Valid â†’ 0x40F000
        mmu.translate(0x200000); // Invalid â†’ exception (beyond limit)
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
    }

    return 0;
}
```

#### Python Implementation

```python
class MMUSimulator:
    def __init__(self, base: int, limit: int):
        self.relocation_register = base
        self.limit_register = limit

    def translate(self, logical_address: int) -> int:
        physical_address = logical_address + self.relocation_register
        upper_bound = self.relocation_register + self.limit_register

        if physical_address >= upper_bound:
            raise MemoryError(
                f"Segmentation fault: {hex(physical_address)} "
                f"out of bounds [0x0, {hex(upper_bound)})"
            )

        print(f"Logical: {hex(logical_address)} + "
              f"Base: {hex(self.relocation_register)} = "
              f"Physical: {hex(physical_address)}")
        return physical_address

    def set_base_limit(self, base: int, limit: int):
        self.relocation_register = base
        self.limit_register = limit


if __name__ == "__main__":
    mmu = MMUSimulator(0x400000, 0x100000)
    try:
        mmu.translate(0x001000)
        mmu.translate(0x200000)
    except MemoryError as e:
        print(f"Error: {e}")
```

#### Dry Run Trace Table

| Step | Operation | Logical Addr | Relocation Register | Limit Register | Physical Addr | Valid? |
|------|-----------|-------------|--------------------|---------------|--------------|--------|
| 1 | CPU issues LOAD | 0x001000 | 0x400000 | 0x100000 | â€” | â€” |
| 2 | MMU adds base | 0x001000 | 0x400000 | 0x100000 | 0x401000 | Check |
| 3 | Bounds check | â€” | â€” | â€” | 0x401000 | 0x401000 &lt; 0x500000 âœ“ |
| 4 | Return phys addr | â€” | â€” | â€” | 0x401000 | â€” |
| 5 | CPU issues LOAD | 0x200000 | 0x400000 | 0x100000 | â€” | â€” |
| 6 | MMU adds base | 0x200000 | 0x400000 | 0x100000 | 0x600000 | Check |
| 7 | Bounds check | â€” | â€” | â€” | 0x600000 | 0x600000 >= 0x500000 âœ— |
| 8 | Raise segfault | â€” | â€” | â€” | â€” | Exception |

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time (execution)** | O(1) | One addition + one comparison per memory access â€” constant, hardware-pipelined |
| **Space** | O(1) | Two registers (base + limit) per process stored in PCB |
| **Context switch cost** | O(1) | Reload MMU registers with new process base/limit |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Simple hardware â€” just adders and comparators | Requires contiguous memory allocation |
| Fast â€” single-cycle translation | Suffers external fragmentation |
| Built-in protection via limit register | No paging â€” entire process must be in memory |
| Minimal context-switch cost | Cannot support virtual memory > physical RAM |

#### Edge Cases

| Edge Case | What Happens |
|-----------|-------------|
| **Logical address = 0** | Translated to base address â€” valid first byte of process |
| **Address + base overflows uint32** | Wraparound; must be checked by hardware (carry flag) |
| **Limit register = 0** | Every access fails immediately â€” process can't run |
| **Multi-threaded access** | Each thread shares same base/limit â€” all threads mapped to same physical region |

---

### Logical vs Physical Address


Every memory address generated by the CPU is a **logical address** (also called a **virtual address**). The actual memory hardware sees and responds to **physical addresses**. The MMU sits between them.

#### Hardware View

```
  CPU (logical addr)          MMU (translation)        Memory Bus (physical addr)
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ LOAD R1, [0x1000]   â”‚â”€â”€â†’â”‚ Physical = Logical   â”‚â”€â”€â†’â”‚ Address 0x401000        â”‚
â”‚                     â”‚   â”‚         + Base        â”‚   â”‚ Contains value 0x42     â”‚
â”‚ Logical = 0x1000    â”‚   â”‚ 0x1000 + 0x400000    â”‚   â”‚                         â”‚
â”‚                     â”‚   â”‚         = 0x401000    â”‚   â”‚                         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### Detailed Comparison

| Property | Logical Address | Physical Address |
|----------|---------------|-----------------|
| **Generated by** | CPU (by the instruction) | Memory unit (after MMU translation) |
| **Also called** | Virtual address | Real address, absolute address |
| **Visibility** | Visible to programmer/compiler | Not visible to the program |
| **Space** | Logical address space (per-process) | Physical address space (system-wide) |
| **Size** | Determined by CPU bits (32-bit â†’ 4 GB) | Determined by RAM installed |
| **Persistence** | Changes per process (each process has its own) | Fixed for each physical memory location |
| **Binding time** | Runtime (every instruction) | At memory access time |
| **User program sees** | Logical addresses only | Never sees physical addresses directly |
| **Protection** | Per-process isolation via MMU | Shared across all processes |
| **Swapping** | Logical space can exceed physical (demand paging) | Bounded by physical RAM size |

#### Real-World Analogy: Hotel Room Keys

> - **Logical address** = Your room key number (Room 205). Every guest thinks they have "Room 205" regardless of which floor they're on.
> - **Physical address** = The actual physical room (Building 2, Floor 4, Room 5). Two different hotels can both have "Room 205" â€” the logical-to-physical mapping is unique per hotel (per process).
> - **MMU** = The front desk clerk who tells you "Room 205 is actually around the corner."
> - **TLB** = Your memory of which way to turn â€” you don't ask the front desk every time.

#### Address Space Sizes

| Architecture | Logical Address Bits | Logical Space | Physical Address Bits | Max Physical RAM |
|-------------|-------------------|--------------|---------------------|-----------------|
| 8-bit (6502) | 16 | 64 KB | 16 | 64 KB |
| 32-bit (x86) | 32 | 4 GB | 32 (PAE: 36) | 4 GB (64 GB with PAE) |
| 64-bit (x86-64) | 48 (current) | 256 TB | 48 | 256 TB (up to 52 bits in future) |
| ARMv8-A (64-bit) | 48 | 256 TB | 40-48 | 1 TB - 256 TB |

#### Translation illustrated for a 32-bit system

```
Logical Address (32 bits):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚     Page Number (20)     â”‚   Offset (12)      â”‚
â”‚     0x00002              â”‚     0xA5C          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
         â–¼
   Page Table (per-process)
   â”Œâ”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”
   â”‚Page 0 â”‚ Frame 8â”‚
   â”‚Page 1 â”‚ Frame 3â”‚
   â”‚Page 2 â”‚ Frame 12â”‚
   â”‚...    â”‚ ...    â”‚
   â””â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚ Page 2 â†’ Frame 12 = 0xC
         â–¼
Physical Address (32 bits):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚     Frame Number (20)    â”‚   Offset (12)      â”‚
â”‚     0x0000C              â”‚     0xA5C          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  = 0x0000C << 12 | 0xA5C = 0xCA5C
```

---

### MMU â€” Memory Management Unit


The **MMU** is a hardware component that performs runtime translation of logical addresses to physical addresses. It is a critical part of the CPU's memory subsystem.

#### MMU Architecture

```
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚                  CPU Core                       â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                  â”‚
                    â”‚  â”‚  ALU     â”‚    â”‚  Control  â”‚                  â”‚
                    â”‚  â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”˜                  â”‚
                    â”‚       â”‚                â”‚                        â”‚
                    â”‚       â–¼                â–¼                        â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”           â”‚
                    â”‚  â”‚           MMU                     â”‚           â”‚
                    â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚           â”‚
                    â”‚  â”‚  â”‚ Segment â”‚  â”‚   Page Unit    â”‚  â”‚           â”‚
                    â”‚  â”‚  â”‚  Unit   â”‚  â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚  â”‚           â”‚
                    â”‚  â”‚  â”‚(optional)â”‚  â”‚ â”‚ Page Table â”‚ â”‚  â”‚           â”‚
                    â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚ â”‚   Walker   â”‚ â”‚  â”‚           â”‚
                    â”‚  â”‚               â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚  â”‚           â”‚
                    â”‚  â”‚               â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚  â”‚           â”‚
                    â”‚  â”‚               â”‚ â”‚   TLB     â”‚ â”‚  â”‚           â”‚
                    â”‚  â”‚               â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚  â”‚           â”‚
                    â”‚  â”‚               â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚           â”‚
                    â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜           â”‚
                    â”‚                    â”‚                             â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                         â”‚ Physical Address
                                         â–¼
                              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                              â”‚   Memory Bus / RAM   â”‚
                              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### MMU Components

| Component | Function | Speed |
|-----------|----------|-------|
| **Segment Unit** | Translates logical â†’ linear address (x86 real/protected mode) | 1 cycle |
| **Page Unit** | Translates linear â†’ physical address via page tables | 1 cycle (TLB hit) to 100+ cycles (walk) |
| **TLB** | Cache for recent page table entries | 0.5-1 cycle |
| **Page Table Walker** | Hardware state machine that walks multi-level page tables on TLB miss | 3-4 memory accesses |
| **Protection Check Unit** | Validates access rights (R/W/X, supervisor/user) | In parallel with translation |

#### Real-World Analogy: Embassy Translation Office

> The MMU is like the translation office at an embassy. A citizen (CPU) writes a letter in their native language (logical address). The translation office converts it to the host country's language (physical address) and verifies the citizen is allowed in that area (protection check). The TLB is like a pocket phrasebook â€” for common phrases, no translation office visit needed.

#### MMU Responsibilities

1. **Address Translation:** Convert every logical address to a physical address in 0-1 cycles
2. **Protection Checking:** Verify the access (read/write/execute) is permitted for the current privilege level
3. **Cache Control:** Set cacheability attributes per page (uncacheable, write-through, write-back)
4. **TLB Management:** Handle TLB misses by walking page tables or trapping to OS
5. **Memory Attributes:** Mark pages as non-executable (NX bit), non-cacheable (for MMIO), or read-only

#### Pseudocode for TLB-aware MMU Translation

```
PROCEDURE mmu_translate(logical_addr, process_id):
    page_number â† logical_addr >> PAGE_SHIFT
    offset â† logical_addr & PAGE_MASK

    // Step 1: Check TLB
    tlb_entry â† tlb_lookup(process_id, page_number)
    IF tlb_entry found:
        frame_number â† tlb_entry.frame
        HIT_STATISTICS.increment()
        RETURN (frame_number << PAGE_SHIFT) | offset

    // Step 2: TLB Miss â€” walk page table
    MISS_STATISTICS.increment()
    page_table_entry â† walk_page_table(page_number)

    IF page_table_entry.valid == 0:
        RAISE page_fault

    // Step 3: Check permissions
    IF not has_permission(page_table_entry, current_access_type):
        RAISE protection_fault

    // Step 4: Update TLB (may evict old entry)
    tlb_insert(process_id, page_number, page_table_entry.frame)

    RETURN (page_table_entry.frame << PAGE_SHIFT) | offset
END PROCEDURE
```

---

### Contiguous Allocation


In **contiguous memory allocation**, each process occupies a single contiguous block of physical memory. This was the dominant model in early operating systems.

#### Fixed Partitioning

Memory is divided into **fixed-size partitions** at boot time. Each partition can hold one process.

```
Memory Layout (Fixed Partitions):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Partition 0        â”‚ Partition 1          â”‚ Partition 2          â”‚
â”‚ 0 MB â€” 256 MB     â”‚ 256 MB â€” 512 MB     â”‚ 512 MB â€” 768 MB     â”‚
â”‚ Process A (200 MB) â”‚ Process B (100 MB)  â”‚ Free                 â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Partition 3        â”‚ Partition 4          â”‚ Partition 5          â”‚
â”‚ 768 MB â€” 896 MB   â”‚ 896 MB â€” 960 MB     â”‚ 960 MB â€” 1024 MB    â”‚
â”‚ Free               â”‚ Process C (30 MB)   â”‚ Free                 â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Problem:** A process of 300 MB cannot run even though only 364 MB is used â€” the free memory is fragmented across small partitions (256 MB max in any single partition).

#### Dynamic Partitioning (Variable Partition)

Partitions are created dynamically to match the exact size of each process.

```
Memory after some allocations:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  OS      â”‚  Process A   â”‚  Free    â”‚  Process B   â”‚  Free    â”‚
â”‚  (200MB) â”‚  (150MB)     â”‚  (100MB) â”‚  (80MB)      â”‚  (470MB) â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
0         200            350        450            530        1000
```

#### Multiple Partition Allocation

**Multiple Partition Method**: A set of fixed/variable partitions is maintained. When a new process arrives, it is placed in the smallest available partition large enough (or a variable-sized hole).

#### Real-World Analogy: Airport Parking Lot

> - **Contiguous allocation** = You must park your car in a single continuous parking spot. If you have a long car (large process), you need a long uninterrupted space.
> - **Fixed partitions** = The lot has pre-marked spots of various sizes (compact, sedan, SUV). An SUV spot stays empty if no SUV arrives, even if several compact spots are free.
> - **Dynamic partitions** = Valet parking arranges cars bumper-to-bumper in any available gap.
> - **External fragmentation** = After cars leave, empty spaces are scattered across the lot â€” no single gap is big enough for the next bus.
> - **Compaction** = The valet shifts all cars to one side to consolidate all empty space.

#### Step-by-Step: Process Loading in Dynamic Partitioning

```
Initial Free List: [{start: 200, size: 800}]

Step 1: Process P1 (size 120) arrives
    Find hole â‰¥ 120 â†’ hole at 200, size 800
    Split: Allocate [200, 120], Remaining free [320, 680]
    Free List: [{start: 320, size: 680}]

Step 2: Process P2 (size 250) arrives
    Find hole â‰¥ 250 â†’ hole at 320, size 680
    Split: Allocate [320, 250], Remaining free [570, 430]
    Free List: [{start: 570, size: 430}]

Step 3: Process P3 (size 100) arrives
    Find hole â‰¥ 100 â†’ hole at 570, size 430
    Split: Allocate [570, 100], Remaining free [670, 330]
    Free List: [{start: 670, size: 330}]

Step 4: Process P1 terminates (returns 120 MB at 200)
    Free List: [{start: 200, size: 120}, {start: 670, size: 330}]
    Merge adjacent? No (200 + 120 = 320 â‰  670)

Step 5: Process P2 terminates (returns 250 MB at 320)
    Free List: [{start: 200, size: 120}, {start: 320, size: 250}, {start: 670, size: 330}]
    Merge: [200, 120] and [320, 250] are adjacent (200+120=320) â†’ merge to [200, 370]
    Free List: [{start: 200, size: 370}, {start: 670, size: 330}]

Step 6: Process P4 (size 500) arrives
    Largest free hole is 370 â€” not enough!
    Out of memory (external fragmentation)
    Solution: Compact or swap a process out
```

---

### Dynamic Storage Allocation


When a process is loaded into memory, the OS must decide which free hole to allocate. Four classic algorithms exist.

#### 1. First-Fit

Allocate the **first** hole that is large enough.

##### Real-World Analogy

> **Parking lot**: Drive in and take the first empty spot that fits your car. Don't check further spots â€” just park.

##### Pseudocode

```
PROCEDURE first_fit(request_size):
    FOR each hole in free_list:
        IF hole.size â‰¥ request_size:
            // Allocate from this hole
            allocated â† {start: hole.start, size: request_size}
            hole.start â† hole.start + request_size
            hole.size â† hole.size - request_size
            IF hole.size == 0:
                REMOVE hole from free_list
            END IF
            RETURN allocated
        END IF
    END FOR
    RETURN NULL  // Not enough memory
END PROCEDURE
```

##### C++ Implementation

```cpp
#include <iostream>
#include <list>
#include <algorithm>

struct Hole {
    uint32_t start;
    uint32_t size;
};

struct AllocResult {
    uint32_t start;
    uint32_t size;
    bool success;
};

class MemoryAllocator {
private:
    std::list<Hole> free_list;
    uint32_t total_memory;

    void merge_adjacent() {
        free_list.sort([](const Hole& a, const Hole& b) {
            return a.start < b.start;
        });
        for (auto it = free_list.begin(); it != free_list.end(); ++it) {
            auto next = std::next(it);
            if (next != free_list.end() &&
                it->start + it->size == next->start) {
                it->size += next->size;
                free_list.erase(next);
                --it; // Recheck from this position
            }
        }
    }

public:
    MemoryAllocator(uint32_t total) : total_memory(total) {
        free_list.push_back({0, total});
    }

    AllocResult allocate_first_fit(uint32_t size) {
        for (auto it = free_list.begin(); it != free_list.end(); ++it) {
            if (it->size >= size) {
                uint32_t alloc_start = it->start;
                it->start += size;
                it->size -= size;
                if (it->size == 0) {
                    free_list.erase(it);
                }
                std::cout << "First-fit: Allocated " << size
                          << " at address " << alloc_start << "\n";
                return {alloc_start, size, true};
            }
        }
        std::cout << "First-fit: Allocation failed for " << size << "\n";
        return {0, 0, false};
    }

    void release(uint32_t start, uint32_t size) {
        std::cout << "Releasing " << size << " at " << start << "\n";
        free_list.push_back({start, size});
        merge_adjacent();
    }

    void print_free_list() {
        std::cout << "Free list: ";
        for (const auto& h : free_list) {
            std::cout << "[" << h.start << ", " << h.start + h.size - 1
                      << " size=" << h.size << "] ";
        }
        std::cout << "\n";
    }
};

int main() {
    MemoryAllocator alloc(1024);

    alloc.allocate_first_fit(200);  // Alloc at 0
    alloc.allocate_first_fit(150);  // Alloc at 200
    alloc.print_free_list();        // Free: [350, 1023] size=674

    alloc.release(0, 200);          // Free: [0,199] + [350,1023]
    alloc.print_free_list();

    alloc.allocate_first_fit(100);  // First-fit: takes [0,99]
    alloc.print_free_list();

    return 0;
}
```

##### Python Implementation

```python
from dataclasses import dataclass
from typing import Optional


@dataclass
class Hole:
    start: int
    size: int


class MemoryAllocator:
    def __init__(self, total: int):
        self.free_list = [Hole(0, total)]
        self.total = total

    def _merge_adjacent(self):
        self.free_list.sort(key=lambda h: h.start)
        i = 0
        while i < len(self.free_list) - 1:
            curr = self.free_list[i]
            next_ = self.free_list[i + 1]
            if curr.start + curr.size == next_.start:
                curr.size += next_.size
                self.free_list.pop(i + 1)
            else:
                i += 1

    def allocate_first_fit(self, size: int) -> Optional[int]:
        for i, hole in enumerate(self.free_list):
            if hole.size >= size:
                alloc_start = hole.start
                hole.start += size
                hole.size -= size
                if hole.size == 0:
                    self.free_list.pop(i)
                print(f"First-fit: Allocated {size} at {alloc_start}")
                return alloc_start
        print(f"First-fit: Failed for {size}")
        return None

    def release(self, start: int, size: int):
        print(f"Releasing {size} at {start}")
        self.free_list.append(Hole(start, size))
        self._merge_adjacent()

    def print_free_list(self):
        print("Free list:", [(h.start, h.start + h.size - 1, h.size)
                             for h in self.free_list])


if __name__ == "__main__":
    alloc = MemoryAllocator(1024)
    alloc.allocate_first_fit(200)
    alloc.allocate_first_fit(150)
    alloc.release(0, 200)
    alloc.print_free_list()
    alloc.allocate_first_fit(100)
    alloc.print_free_list()
```

#### 2. Best-Fit

Allocate the **smallest** hole that is large enough. Minimizes wasted space.

##### Real-World Analogy

> **Packing suitcases**: You measure every empty space in the trunk and choose the one where your suitcase fits most snugly â€” minimal wasted cubic inches.

##### Pseudocode

```
PROCEDURE best_fit(request_size):
    best_hole â† NULL
    best_index â† -1

    FOR each hole in free_list:
        IF hole.size â‰¥ request_size:
            IF best_hole is NULL OR hole.size < best_hole.size:
                best_hole â† hole
                best_index â† current_index
            END IF
        END IF
    END FOR

    IF best_hole is not NULL:
        // Allocate from best_hole
        allocated â† {start: best_hole.start, size: request_size}
        best_hole.start â† best_hole.start + request_size
        best_hole.size â† best_hole.size - request_size
        IF best_hole.size == 0:
            REMOVE best_hole from free_list
        END IF
        RETURN allocated
    END IF
    RETURN NULL
END PROCEDURE
```

##### C++ Implementation (Best-Fit as extension)

```cpp
AllocResult allocate_best_fit(uint32_t size) {
    auto best_it = free_list.end();
    uint32_t best_remainder = UINT32_MAX;

    for (auto it = free_list.begin(); it != free_list.end(); ++it) {
        if (it->size >= size) {
            uint32_t remainder = it->size - size;
            if (remainder < best_remainder) {
                best_remainder = remainder;
                best_it = it;
            }
        }
    }

    if (best_it != free_list.end()) {
        uint32_t alloc_start = best_it->start;
        best_it->start += size;
        best_it->size -= size;
        if (best_it->size == 0) {
            free_list.erase(best_it);
        }
        std::cout << "Best-fit: Allocated " << size
                  << " at address " << alloc_start << "\n";
        return {alloc_start, size, true};
    }
    std::cout << "Best-fit: Allocation failed for " << size << "\n";
    return {0, 0, false};
}
```

##### Python Implementation (Best-Fit)

```python
def allocate_best_fit(self, size: int) -> Optional[int]:
    best_idx = -1
    best_remainder = float('inf')

    for i, hole in enumerate(self.free_list):
        if hole.size >= size:
            remainder = hole.size - size
            if remainder < best_remainder:
                best_remainder = remainder
                best_idx = i

    if best_idx >= 0:
        hole = self.free_list[best_idx]
        alloc_start = hole.start
        hole.start += size
        hole.size -= size
        if hole.size == 0:
            self.free_list.pop(best_idx)
        print(f"Best-fit: Allocated {size} at {alloc_start}")
        return alloc_start
    print(f"Best-fit: Failed for {size}")
    return None
```

#### 3. Worst-Fit

Allocate the **largest** hole. Intention: the remaining free space is still large enough to be useful for another allocation.

##### Real-World Analogy

> **Packing suitcases**: You choose the largest empty spot, even if your suitcase is small. That way, the remaining space in that spot is still big enough for another suitcase later.

##### C++ Implementation (Worst-Fit)

```cpp
AllocResult allocate_worst_fit(uint32_t size) {
    auto worst_it = free_list.end();
    uint32_t worst_size = 0;

    for (auto it = free_list.begin(); it != free_list.end(); ++it) {
        if (it->size >= size && it->size > worst_size) {
            worst_size = it->size;
            worst_it = it;
        }
    }

    if (worst_it != free_list.end()) {
        uint32_t alloc_start = worst_it->start;
        worst_it->start += size;
        worst_it->size -= size;
        if (worst_it->size == 0) {
            free_list.erase(worst_it);
        }
        std::cout << "Worst-fit: Allocated " << size
                  << " at address " << alloc_start << "\n";
        return {alloc_start, size, true};
    }
    std::cout << "Worst-fit: Allocation failed for " << size << "\n";
    return {0, 0, false};
}
```

#### 4. Next-Fit

Same as first-fit, but the search starts from where the **previous allocation ended**, not from the beginning. This distributes allocations more evenly.

##### Real-World Analogy

> **Parking lot**: Instead of always starting from the entrance, you start from where you last parked. This wears out the lot more evenly â€” all areas get used, not just the front.

##### C++ Implementation (Next-Fit)

```cpp
class MemoryAllocatorWithNextFit : public MemoryAllocator {
private:
    std::list<Hole>::iterator last_alloc;

public:
    MemoryAllocatorWithNextFit(uint32_t total)
        : MemoryAllocator(total), last_alloc(free_list.begin()) {}

    AllocResult allocate_next_fit(uint32_t size) {
        auto start_it = last_alloc;
        auto it = last_alloc;

        do {
            if (it->size >= size) {
                uint32_t alloc_start = it->start;
                it->start += size;
                it->size -= size;
                if (it->size == 0) {
                    it = free_list.erase(it);
                    if (it == free_list.end()) it = free_list.begin();
                } else {
                    ++it;
                }
                last_alloc = it;
                std::cout << "Next-fit: Allocated " << size
                          << " at address " << alloc_start << "\n";
                return {alloc_start, size, true};
            }
            ++it;
            if (it == free_list.end()) it = free_list.begin();
        } while (it != start_it);

        std::cout << "Next-fit: Allocation failed for " << size << "\n";
        return {0, 0, false};
    }
};
```

#### Full Dry Run: Same Allocation Sequence Across All Four Algorithms

Initial memory: 0 MB â€” 1024 MB (all free).

Allocation sequence: A(200), B(150), C(100), free A, D(80), free C, E(300)

##### First-Fit Trace

| Step | Action | Allocated At | Free List After |
|------|--------|-------------|----------------|
| 0 | Initial | â€” | [{0, 1024}] |
| 1 | A(200) | 0 | [{200, 824}] |
| 2 | B(150) | 200 | [{350, 674}] |
| 3 | C(100) | 350 | [{450, 574}] |
| 4 | Free A | â€” | [{0, 200}, {450, 574}] |
| 5 | D(80) | 0 | [{80, 120}, {450, 574}] |
| 6 | Free C | â€” | [{80, 120}, {450, 574}] (merge doesn't apply â€” 80+120=200 â‰  450) |
| 7 | E(300) | 450 (first hole â‰¥ 300) | [{80, 120}, {750, 274}] |

##### Best-Fit Trace

| Step | Action | Allocated At | Rationale |
|------|--------|-------------|-----------|
| 0 | Initial | â€” | [{0, 1024}] |
| 1 | A(200) | 0 | Only hole, remainder 824 |
| 2 | B(150) | 200 | Only hole, remainder 674 |
| 3 | C(100) | 350 | Only hole, remainder 574 |
| 4 | Free A | â€” | [{0, 200}, {450, 574}] |
| 5 | D(80) | **0** | Hole 0 has size 200 (rem 120), hole 450 has size 574 (rem 494) â€” 120 &lt; 494 |
| 6 | Free C | â€” | [{80, 120}, {450, 574}] |
| 7 | E(300) | **450** | Hole 80 has size 120 (too small), hole 450 has size 574 â€” smallest feasible |

##### Worst-Fit Trace

| Step | Action | Allocated At | Rationale |
|------|--------|-------------|-----------|
| 0 | Initial | â€” | [{0, 1024}] |
| 1 | A(200) | 0 | Only hole |
| 2 | B(150) | 200 | Only hole |
| 3 | C(100) | 350 | Only hole |
| 4 | Free A | â€” | [{0, 200}, {450, 574}] |
| 5 | D(80) | **450** | Hole 450 has size 574 (largest), hole 0 has size 200 |
| 6 | Free C | â€” | [{0, 200}, {370, 124}] (merge: A + D merged? No. 0+200=200 â‰  370. Actually: free C is at 350-450, adjacent to D at 450-530 â†’ merge to hole at 350 size 124 + 80 = wait, C was at 350-450, D is at 450-530. Free C returns 350-450. Adjacent to D's hole [370, 124]... Let me redo this properly. Initially after step 3: A[0,200], B[200,350], C[350,450]. Step 4: free A â†’ [{0,200}, {450,574}]. Step 5: D(80) â†’ worst-fit allocates at 450 â†’ [{0,200}, {530,494}]. Step 6: free C (at 350, size 100) â†’ [{0,200}, {350,100}, {530,494}]. Step 6 merge: B is process at 200-350, free [350,450] adjacent to free... no, B is allocated. So no merge between 200 and 350. But wait, we need to check adjacency: 200 (A's freed space) + 200 = 400 â‰  350. So no merge. [{0,200}, {350,100}, {530,494}]. Step 7: E(300) â†’ worst-fit takes 530 (largest at 494)... wait 494 â‰¥ 300 and 200 &lt; 300? No. Actually 200 < 300 so only {530,494} qualifies. Alloc at 530. â†’ [{0,200}, {350,100}, {830,194}]. |
| 7 | E(300) | 530 | Only hole large enough is 494 |

##### Next-Fit Trace

| Step | Action | Allocate At | Search Start | Free List |
|------|--------|------------|-------------|-----------|
| 0 | Init | â€” | â€” | [{0, 1024}] |
| 1 | A(200) | 0 | start=0 â†’ after 200 | [{200, 824}] |
| 2 | B(150) | 200 | start=200 â†’ after 350 | [{350, 674}] |
| 3 | C(100) | 350 | start=350 â†’ after 450 | [{450, 574}] |
| 4 | Free A | â€” | (last_alloc still at 450-end boundary) | [{0,200}, {450,574}] |
| 5 | D(80) | **450** (start search from last_alloc=450) | â€” | [{0,200}, {530,494}] |
| 6 | Free C(350,100) | â€” | â€” | [{0,200}, {350,100}, {530,494}] |
| 7 | E(300) | **530** | Search from 350 (last ended at 530+80) â†’ 350 too small â†’ 530 fits | [{0,200}, {350,100}, {830,194}] |

#### Complexity Analysis

| Algorithm | Search Cost | Insertion | Memory Overhead | Fragmentation Tendency |
|-----------|-------------|-----------|----------------|----------------------|
| **First-Fit** | O(n) average O(n/2) | O(1) split | Minimal (no tracking) | Moderate â€” leaves small holes near front |
| **Best-Fit** | O(n) full scan | O(1) split | Slightly more (tracks best) | Worst â€” leaves tiny unusable holes |
| **Worst-Fit** | O(n) full scan | O(1) split | Slightly more | Better â€” leaves large remaining holes |
| **Next-Fit** | O(n) worst-case | O(1) split | Minimal | Moderate â€” spreads fragmentation evenly |

**Why these complexities?**
- **n** = number of free holes. In the worst case (highly fragmented memory), n can be O(number of allocated blocks). First-fit stops early on average (O(n/2)). Best-fit and worst-fit always scan all holes.
- All algorithms are O(1) for the actual allocation (just pointer arithmetic on the chosen hole).
- Merging adjacent freed holes requires O(m log m) sort or O(m) linear scan where m is number of freed regions.

#### Advantages & Disadvantages Table

| Algorithm | Advantage | Disadvantage |
|-----------|-----------|-------------|
| **First-Fit** | Fastest average case; simple | Scatters small holes at front of memory |
| **Best-Fit** | Uses smallest suitable hole; minimizes waste per allocation | Produces many tiny useless holes; slowest search |
| **Worst-Fit** | Leaves large holes that remain useful | Wastes large holes on small requests; poor memory utilization |
| **Next-Fit** | Evenly distributes allocations; no front-bias | Can be slower than first-fit worst-case (full wrap-around) |

#### Edge Cases

| Edge Case | Impact |
|-----------|--------|
| **Allocation size = 0** | Should return error or NULL; wastes no memory but must be handled |
| **Allocation larger than any hole** | All four algorithms fail â€” must compact, swap, or wait |
| **Exactly matching hole** | Perfect fit â€” no remaining fragment; hole is removed from free list |
| **Adjacent holes on free** | Must merge â€” otherwise fragmentation worsens over time |
| **Free entire memory at once** | After merging, list reverts to single hole of total size |
| **Request exactly at top/bottom** | Works normally; boundary checking needed |
| **Multiple allocations same size** | Best-fit degenerates to first-fit if searching from same point |
| **Concurrent frees** | Locking required; two concurrent frees of adjacent blocks must merge atomically |

---

### Fragmentation


Fragmentation is the wasted memory that occurs when free space is not contiguous or when allocated blocks are larger than needed.

#### External Fragmentation

Total free memory exists but is broken into small, non-contiguous chunks. No single chunk satisfies a request.

```
Memory Layout with External Fragmentation:
â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”
â”‚  P1  â”‚ Free â”‚  P2  â”‚ Free â”‚  P3  â”‚ Free â”‚  P4  â”‚ Free â”‚
â”‚ 100M â”‚  10M â”‚ 200M â”‚  5M  â”‚ 150M â”‚  8M  â”‚ 180M â”‚ 12M  â”‚
â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”˜
Total free: 35 MB but largest hole is 12 MB.
A process needing 20 MB cannot be loaded.
```

**Causes:** Variable-sized allocations and deallocations over time create a checkerboard pattern.

**Solutions:**
1. **Compaction:** Move allocated processes to one end of memory â†’ coalesce all free space.
2. **Paging:** Use fixed-size pages â†’ no external fragmentation.
3. **Segregation:** Use separate pools for different size classes (buddy system, slab allocator).

#### Internal Fragmentation

Allocated memory block is larger than the process requested; the excess inside the block is wasted.

```
Process needs 18 KB â†’ allocated 20 KB (fixed partition of 20 KB)
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  18 KB used    â”‚ 2 KB waste  â”‚  â† Internal fragmentation (inside block)
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Causes:** Fixed-size partitions, page-aligned allocation, rounding up to alignment boundaries.

**Example:** A process needs 35,000 bytes. With 4 KB pages:
- Required pages = ceil(35000 / 4096) = ceil(8.54) = 9 pages = 36,864 bytes
- Wasted = 36,864 - 35,000 = 1,864 bytes (internal fragmentation)

**Solutions:**
1. Small page sizes (4 KB wastes less than 64 KB pages)
2. Slab allocator (exact-size caches within pages)
3. Variable partition allocation (exact fit)

#### Measuring Fragmentation

**External fragmentation ratio:**
```
F_ext = 1 - (largest_free_hole / total_free_memory)
```

If total free = 100 MB and largest hole = 30 MB: F_ext = 0.7 (70% of free memory is unavailable).

**Internal fragmentation ratio:**
```
F_int = 1 - (requested_size / allocated_size)
```

If requested 18 KB, allocated 20 KB: F_int = 0.1 (10% waste).

#### Compaction

Compaction rearranges memory to merge all free holes into a single large block.

```
Before Compaction:
â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”
â”‚  P1  â”‚ Free â”‚  P2  â”‚ Free â”‚  P3  â”‚
â”‚  80M â”‚  20M â”‚ 150M â”‚  30M â”‚ 100M â”‚
â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”˜
Total: 380 MB used, 50 MB free (fragmented)

After Compaction:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  P1  â”‚  P2  â”‚  P3    â”‚   Free       â”‚
â”‚ 80M  â”‚ 150M â”‚ 100M   â”‚   50 MB      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
Total: 330 MB used, 50 MB free (contiguous)
```

**Cost:** Compaction is expensive â€” O(n) where n is number of allocated processes. Every process must be relocated, which means updating all pointers. Only works if processes support dynamic binding (runtime relocation via MMU).

#### Real-World Analogy: Hard Drive Files

> **External fragmentation** = Your hard drive has 50 GB free, but it's scattered in 1 GB chunks across the platter. A 10 GB file can't be saved. You need to defragment (compaction).
>
> **Internal fragmentation** = You save a 3 KB text file. The filesystem allocates a 4 KB cluster. You wasted 1 KB of disk space inside the block.

---

### Paging


**Paging** solves the external fragmentation problem by dividing both logical and physical memory into fixed-size blocks. Paging is **invisible to the programmer** â€” it's entirely handled by the MMU.

#### Core Concepts

- **Page**: Fixed-size block of logical memory (typically 4 KB).
- **Frame**: Fixed-size block of physical memory â€” exactly the same size as a page.
- **Page Table**: Per-process data structure mapping page numbers to frame numbers.

```
Logical Memory (Process A):         Physical Memory:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Page 0        â”‚â”€â”€â”€â”€â”              â”‚ Frame 0       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤    â”‚              â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Page 1        â”‚    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â†’â”‚ Frame 8       â”‚  â† Page 0 of A
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤    â”‚              â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Page 2        â”‚    â”‚              â”‚ Frame 9       â”‚  â† Page 3 of B
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤    â”‚              â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Page 3        â”‚â”€â”€â”€â†’â”‚              â”‚ Frame 12      â”‚  â† Page 2 of A
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â”‚              â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
                     â”‚              â”‚ Frame 3       â”‚  â† Page 1 of A
                     â”‚              â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
                     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â†’ â”‚ ...           â”‚
                                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### Step-by-Step: How Address Translation Works in Paging

```
Given: 32-bit logical address, 4 KB page size (2^12 bytes)

LOGICAL ADDRESS FORMAT:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Page Number (p)    â”‚   Offset (d)         â”‚
â”‚    20 bits           â”‚   12 bits            â”‚
â”‚    bits 31-12        â”‚   bits 11-0          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Step 1: CPU issues LOAD from address 0x2A5C

Step 2: Split into page number and offset
    Page number = 0x2A5C >> 12 = 0x2
    Offset = 0x2A5C & 0xFFF = 0xA5C

Step 3: Look up page 2 in the page table
    Page table[2] = Frame 12 = 0xC

Step 4: Construct physical address
    Physical = (Frame << 12) | Offset
             = (0xC << 12) | 0xA5C
             = 0xC000 | 0xA5C
             = 0xCA5C

Step 5: Memory controller reads physical address 0xCA5C
```

#### Full Dry Run: Logical Address â†’ Physical Address

**Setup:**
- Page size = 4 KB (2^12), offset = 12 bits
- Page table:
  | Page | Frame | Valid |
  |------|-------|-------|
  | 0 | 8 | Yes |
  | 1 | 3 | Yes |
  | 2 | 12 | Yes |
  | 3 | 0 | No |

**Translate logical address 0x2A5C:**

| Step | Operation | Value (Binary) | Value (Hex) |
|------|-----------|---------------|-------------|
| 1 | Logical address | 0000 0000 0000 0000 0010 1010 0101 1100 | 0x00002A5C |
| 2 | Extract page (bits 31-12) | 0000 0000 0000 0000 0010 | 0x2 |
| 3 | Extract offset (bits 11-0) | 1010 0101 1100 | 0xA5C |
| 4 | Lookup page 2 in PT | Frame = 12 = 0xC | â€” |
| 5 | Shift frame: 0xC &lt;< 12 | 0000 0000 0000 1100 0000 0000 0000 0000 | 0x000C000 |
| 6 | OR with offset | 0000 0000 0000 1100 1010 0101 1100 | 0x000CA5C |
| 7 | Physical address | â€” | **0xCA5C** |

**Translate logical address 0x35A0 (page 3, which is invalid):**

| Step | Operation | Value |
|------|-----------|-------|
| 1 | Logical address | 0x000035A0 |
| 2 | Page number | 0x35A0 >> 12 = 0x3 |
| 3 | Offset | 0x35A0 & 0xFFF = 0x5A0 |
| 4 | Page table[3].valid = false | **PAGE FAULT â†’ trap to OS** |
| 5 | OS checks: page on disk? | If yes â†’ load from swap. If not â†’ segfault. |

#### Page Table Entry (PTE) Structure

A page table entry contains more than just the frame number. Typical 32-bit PTE:

```
31      12|11|10|9|8|7|6|5|4|3|2|1|0
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”¬â”€â”
â”‚ Frame Address (20) â”‚Gâ”‚Sâ”‚0â”‚Aâ”‚Dâ”‚Aâ”‚Câ”‚Wâ”‚Uâ”‚Râ”‚Pâ”‚
â”‚                     â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚ â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”´â”€â”˜
```

| Bit | Name | Purpose |
|-----|------|---------|
| 0 | P (Present) | Is page in physical memory? |
| 1 | R/W | Read-write (0 = read-only) |
| 2 | U/S | User/supervisor |
| 3 | PWT | Page write-through |
| 4 | PCD | Page cache disabled |
| 5 | A | Accessed (set by hardware on read/write) |
| 6 | D | Dirty (set by hardware on write) |
| 7 | PAT | Page attribute table index |
| 8 | G | Global page (don't flush from TLB) |
| 9-11 | Available | OS can use these bits |
| 12-31 | Frame Address | Physical frame number (20 bits â†’ 1M frames Ã— 4 KB = 4 GB) |

#### Page Table Structures

##### 1. Single-Level Page Table

Simplest form: one array of PTEs per process.

```
32-bit address, 4 KB pages â†’ 2^20 = 1,048,576 entries
Each entry: 4 bytes â†’ page table size = 4 MB per process
```

**Problem:** 4 MB per process. For 100 processes = 400 MB just for page tables.

##### 2. Hierarchical (Multi-Level) Page Table

Breaks the page table into multiple levels. Only populated levels are allocated.

**Two-Level Page Table (32-bit):**

```
Logical Address:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  p1 (10 bits)     â”‚  p2 (10 bits)     â”‚  offset (12 bits)    â”‚
â”‚  Index outer PT   â”‚  Index inner PT   â”‚  Page offset         â”‚
â”‚  0-1023            â”‚  0-1023           â”‚  0-4095              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Translation:
    PT1[p1] â†’ points to a PT2 page
    PT2[p2] â†’ contains the frame number
    Physical = (frame << 12) | offset
```

**Memory savings:** Outer page table = 1024 entries Ã— 4 bytes = 4 KB. Inner tables allocated only for used page ranges. A process using 8 MB of memory (2048 pages) needs 2 inner tables = 8 KB + 4 KB = 12 KB total, vs 4 MB for single-level.

**Four-Level Page Table (x86-64, 48-bit):**

```
Logical Address (48-bit, 4 KB pages):
â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ p1(9)â”‚ p2(9)â”‚ p3(9)â”‚ p4(9)â”‚ offset (12) â”‚
â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Each level: 512 entries (9 bits), each entry 8 bytes = 4 KB table
```

##### Full Four-Level Page Walk Dry Run

**Setup:** x86-64, 4 KB pages, logical address 0x7F3A4B2C1000

```
Step 1: Extract indices
    p1 = (0x7F3A4B2C1000 >> 39) & 0x1FF = 0xFE (510)
    p2 = (0x7F3A4B2C1000 >> 30) & 0x1FF = 0x1D0 (464)
    p3 = (0x7F3A4B2C1000 >> 21) & 0x1FF = 0x0D9 (217)
    p4 = (0x7F3A4B2C1000 >> 12) & 0x1FF = 0x0C1 (193)
    offset = 0x7F3A4B2C1000 & 0xFFF = 0x000

Step 2: Walk
    CR3 â†’ PML4 table base (physical): 0x1A00000
    PML4[p1=510] = 0x1B00067 â†’ next table at 0x1B00000

    Page Directory Pointer Table[p2=464] = 0x1C00067 â†’ next at 0x1C00000

    Page Directory[p3=217] = 0x1D00067 â†’ next at 0x1D00000

    Page Table[p4=193] = 0x00000000_1E000067 â†’ frame = 0x1E00000

Step 3: Physical address = 0x1E00000 << 12 | 0x000 = 0x1E00000000
```

##### 3. Hashed Page Table

For address spaces larger than 32 bits. The virtual page number is hashed, and the hash chain is searched.

```
Virtual Page Number â†’ Hash Function â†’ Hash Table
                                        â”‚
                                   â”Œâ”€â”€â”€â”€â”´â”€â”€â”€â”€â”
                                   â”‚ Linked  â”‚
                                   â”‚  List   â”‚
                                   â”‚ (chain) â”‚
                                   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                   Compare: (PID, VPN) match?
```

**Clustered Page Tables:** A variant where each hash entry contains multiple consecutive page mappings (a "cluster"), exploiting spatial locality.

##### 4. Inverted Page Table

Instead of one entry per page (per process), there is **one entry per physical frame**. Each entry stores (process ID, page number).

```
Physical Frames:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Frame 0    â”‚ Frame 1    â”‚ Frame 2    â”‚ Frame 3    â”‚ Frame 4    â”‚
â”‚ (PID1,Pg3) â”‚ (PID2,Pg0) â”‚ (PID1,Pg7) â”‚ (Free)     â”‚ (PID3,Pg2) â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Size:** 4 GB RAM / 4 KB pages = 1,048,576 entries â€” much smaller than per-process page tables.

**Problem:** Translation requires searching the entire table. Solution: hash the (PID, VPN) pair to index directly.

#### Real-World Analogy: Library Books

> - **Pages** = Individual book pages (fixed size)
> - **Frames** = Slots on the bookshelf (same size as pages)
> - **Page table** = The library catalog: "Moby-Dick, Chapter 3 is on Shelf 4, Shelf 5 and Shelf 12." (Not contiguous!)
> - **TLB** = Your mental map of where the last 16 books you read are â€” you don't check the catalog for those.
> - **Multi-level page table** = Catalog in sections: "Literature section starts at Row 5, American authors start at Shelf 3..."
> - **Inverted page table** = Labels on each shelf slot saying which book and chapter is there.

#### C++ Implementation: Simulated Paging System

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <cstdint>
#include <iomanip>
#include <random>

class PagingSimulator {
private:
    static constexpr uint32_t PAGE_SIZE = 4096;
    static constexpr uint32_t PAGE_SHIFT = 12;
    static constexpr uint32_t PAGE_MASK = 0xFFF;
    static constexpr uint32_t NUM_FRAMES = 256;

    std::vector<uint32_t> page_table; // page â†’ frame mapping
    std::vector<bool> frame_free;
    uint32_t page_faults;
    uint32_t total_accesses;

public:
    PagingSimulator(uint32_t num_pages)
        : page_table(num_pages, UINT32_MAX)
        , frame_free(NUM_FRAMES, true)
        , page_faults(0), total_accesses(0) {}

    struct TranslationResult {
        uint32_t physical_address;
        bool page_fault;
        uint32_t page_number;
        uint32_t frame_number;
        uint32_t offset;
    };

    TranslationResult translate(uint32_t logical_address) {
        total_accesses++;

        uint32_t page_number = logical_address >> PAGE_SHIFT;
        uint32_t offset = logical_address & PAGE_MASK;

        TranslationResult result;
        result.page_number = page_number;
        result.offset = offset;

        // Check page table
        if (page_number >= page_table.size() ||
            page_table[page_number] == UINT32_MAX) {
            // Page fault
            result.page_fault = true;
            page_faults++;
            return result;
        }

        uint32_t frame = page_table[page_number];
        result.frame_number = frame;
        result.physical_address = (frame << PAGE_SHIFT) | offset;
        result.page_fault = false;
        return result;
    }

    void load_page(uint32_t page_number, uint32_t frame_number) {
        if (page_number < page_table.size() && frame_number < NUM_FRAMES) {
            page_table[page_number] = frame_number;
            frame_free[frame_number] = false;
        }
    }

    void print_stats() {
        std::cout << "Total accesses: " << total_accesses << "\n";
        std::cout << "Page faults: " << page_faults << "\n";
        std::cout << "Page fault rate: "
                  << (total_accesses > 0 ?
                      (100.0 * page_faults / total_accesses) : 0.0)
                  << "%\n";
    }
};

int main() {
    PagingSimulator pager(1024); // 1024 virtual pages

    // Load some pages into frames
    pager.load_page(0, 8);
    pager.load_page(1, 3);
    pager.load_page(2, 12);
    pager.load_page(5, 45);

    // Test translations
    uint32_t test_addrs[] = {0x2A5C, 0x1000, 0x5000, 0x5ABC, 0x9999};
    for (uint32_t addr : test_addrs) {
        auto result = pager.translate(addr);
        std::cout << "Logical: 0x" << std::hex << std::setw(8) << std::setfill('0') << addr
                  << " Page: 0x" << result.page_number
                  << " Offset: 0x" << result.offset << std::dec;
        if (result.page_fault) {
            std::cout << " â†’ PAGE FAULT\n";
        } else {
            std::cout << " â†’ Physical: 0x" << std::hex << result.physical_address << std::dec << "\n";
        }
    }

    pager.print_stats();
    return 0;
}
```

#### Python Implementation: TLB Simulation with LRU

```python
import random
from collections import OrderedDict


class TLB:
    def __init__(self, size: int):
        self.size = size
        self.entries: OrderedDict[int, int] = OrderedDict()
        self.hits = 0
        self.misses = 0

    def lookup(self, page_number: int) -> int | None:
        if page_number in self.entries:
            self.entries.move_to_end(page_number)
            self.hits += 1
            return self.entries[page_number]
        self.misses += 1
        return None

    def insert(self, page_number: int, frame_number: int):
        if page_number in self.entries:
            self.entries.move_to_end(page_number)
            return
        if len(self.entries) >= self.size:
            self.entries.popitem(last=False)
        self.entries[page_number] = frame_number

    def hit_rate(self) -> float:
        total = self.hits + self.misses
        return self.hits / total if total > 0 else 0.0


class PageTable:
    def __init__(self, num_pages: int):
        self.entries: dict[int, int] = {}

    def lookup(self, page_number: int) -> int | None:
        return self.entries.get(page_number, None)

    def insert(self, page_number: int, frame_number: int):
        self.entries[page_number] = frame_number


class PagingWithTLB:
    def __init__(self, tlb_size: int, num_frames: int):
        self.tlb = TLB(tlb_size)
        self.page_table = PageTable(1_000_000)
        self.frames = list(range(num_frames))
        self.next_frame = 0
        self.page_faults = 0
        self.accesses = 0

    def _alloc_frame(self, page_number: int) -> int:
        frame = self.frames[self.next_frame % len(self.frames)]
        self.next_frame += 1
        self.page_table.insert(page_number, frame)
        self.page_faults += 1
        return frame

    def translate(self, logical_address: int) -> int:
        self.accesses += 1
        page_number = logical_address >> 12
        offset = logical_address & 0xFFF

        # Check TLB first
        frame = self.tlb.lookup(page_number)
        if frame is None:
            # TLB miss â†’ check page table
            frame = self.page_table.lookup(page_number)
            if frame is None:
                # Page fault â†’ allocate frame
                frame = self._alloc_frame(page_number)
            self.tlb.insert(page_number, frame)

        return (frame << 12) | offset

    def report(self):
        print(f"Accesses: {self.accesses}")
        print(f"Page faults: {self.page_faults} "
              f"({100 * self.page_faults / self.accesses:.2f}%)")
        print(f"TLB hits: {self.tlb.hits} "
              f"(hit rate: {self.tlb.hit_rate() * 100:.2f}%)")


def simulate_workload(tlb_size: int, num_accesses: int = 10000) -> PagingWithTLB:
    system = PagingWithTLB(tlb_size, num_frames=256)
    rng = random.Random(42)

    for _ in range(num_accesses):
        # 80% local access, 20% random â†’ working set pattern
        if rng.random() < 0.8:
            addr = rng.randint(0, 100) << 12
        else:
            addr = rng.randint(0, 10000) << 12
        system.translate(addr)

    return system


if __name__ == "__main__":
    for tlb_size in [8, 16, 32, 64, 128]:
        system = simulate_workload(tlb_size)
        print(f"\nTLB size: {tlb_size}")
        system.report()
```

#### Effective Access Time (EAT) Formula

```
EAT = TLB_hit_ratio Ã— (TLB_access_time + memory_access_time)
    + TLB_miss_ratio Ã— (TLB_access_time + page_table_walk_time + memory_access_time)

Where:
  page_table_walk_time = depth Ã— memory_access_time
  (depth = number of levels in the page table)
```

##### Worked Example

**Parameters:**
- TLB access: 1 ns
- Memory access: 100 ns
- TLB hit ratio: 99%
- 4-level page table (walk = 4 Ã— 100 ns = 400 ns on miss)

```
EAT = 0.99 Ã— (1 + 100) + 0.01 Ã— (1 + 400 + 100)
    = 0.99 Ã— 101   + 0.01 Ã— 501
    = 99.99        + 5.01
    = 105.0 ns

Without TLB: 400 ns (walk) + 100 ns (access) = 500 ns per access!
With TLB (99%): 105 ns â†’ ~4.8Ã— improvement
```

##### Impact of TLB Hit Rate

| Hit Rate | EAT (1-level) | EAT (4-level) | vs Without TLB |
|----------|--------------|--------------|---------------|
| 90% | 111 ns | 151 ns | 3.3Ã— slower |
| 95% | 106 ns | 126 ns | 4.0Ã— slower |
| 98% | 103 ns | 109 ns | 4.6Ã— slower |
| 99% | 102 ns | 105 ns | 4.8Ã— faster |
| 99.9% | 100.1 ns | 100.5 ns | 5.0Ã— faster |

#### Hierarchical Page Table Implementation

```cpp
#include <iostream>
#include <vector>
#include <cstdint>

class TwoLevelPageTable {
private:
    static constexpr uint32_t PAGE_SIZE = 4096;
    static constexpr uint32_t P1_BITS = 10;
    static constexpr uint32_t P2_BITS = 10;
    static constexpr uint32_t OFFSET_BITS = 12;
    static constexpr uint32_t P1_MASK = 0x3FF;
    static constexpr uint32_t P2_MASK = 0x3FF;

    struct InnerTable {
        std::vector<uint32_t> entries;
        InnerTable() : entries(1024, 0) {} // 1024 entries â†’ preset=false
    };

    std::vector<InnerTable*> outer_table;

    uint32_t get_p1(uint32_t addr) const {
        return (addr >> (P2_BITS + OFFSET_BITS)) & P1_MASK;
    }

    uint32_t get_p2(uint32_t addr) const {
        return (addr >> OFFSET_BITS) & P2_MASK;
    }

public:
    TwoLevelPageTable() : outer_table(1024, nullptr) {}

    void map(uint32_t logical_addr, uint32_t frame_number, bool present = true) {
        uint32_t p1 = get_p1(logical_addr);
        uint32_t p2 = get_p2(logical_addr);

        if (outer_table[p1] == nullptr) {
            outer_table[p1] = new InnerTable();
        }

        // Encode present bit in bit 0, frame number in bits 12-31
        outer_table[p1]->entries[p2] = (frame_number << 12) | (present ? 1 : 0);
    }

    uint32_t translate(uint32_t logical_addr, bool& success) {
        uint32_t p1 = get_p1(logical_addr);
        uint32_t p2 = get_p2(logical_addr);
        uint32_t offset = logical_addr & 0xFFF;

        if (outer_table[p1] == nullptr) {
            success = false;
            return 0;
        }

        uint32_t pte = outer_table[p1]->entries[p2];
        if (!(pte & 1)) { // Present bit
            success = false;
            return 0;
        }

        uint32_t frame = pte >> 12;
        success = true;
        return (frame << 12) | offset;
    }
};

int main() {
    TwoLevelPageTable pt;

    // Map logical 0x00002A5C â†’ frame 12
    pt.map(0x00002A5C, 12);

    bool ok;
    uint32_t phys = pt.translate(0x00002A5C, ok);
    std::cout << "Translated: 0x" << std::hex << phys
              << " (success=" << std::dec << ok << ")\n";

    phys = pt.translate(0xDEADBEEF, ok);
    std::cout << "Translated invalid: success=" << ok << "\n";

    return 0;
}
```

#### Complexity Analysis of Paging

| Operation | Complexity | Why |
|-----------|-----------|-----|
| **Page table lookup (direct)** | O(1) | Array index into page table |
| **Page table walk (hierarchical)** | O(depth) | depth = number of levels (2-5), each is a memory access |
| **TLB lookup** | O(1) | Hardware associative cache (CAM) |
| **TLB miss handling (hardware)** | O(depth) | Hardware walks page table, fills TLB |
| **TLB miss handling (software)** | O(depth + trap) | Trap to OS, fills TLB, return |
| **Page table size (single-level)** | O(VPN_range) | 2^entries â€” grows with address space, not usage |
| **Page table size (hierarchical)** | O(used_pages Ã— depth) | Only allocate inner tables for used ranges |
| **Inverted page table** | O(physical_frames) | 1 entry per frame â€” far smaller for large address spaces |

#### Advantages & Disadvantages

| Aspect | Benefit | Drawback |
|--------|---------|----------|
| **Fragmentation** | No external fragmentation | Internal fragmentation (< 1 page per process) |
| **Protection** | Per-page R/W/X bits | Must be set for every page |
| **Sharing** | Easy: map same frame in multiple page tables | Requires careful synchronization |
| **Sparseness** | Multi-level PT handles sparse address spaces | Walk takes multiple memory accesses |
| **Performance** | TLB makes common case fast | TLB miss is expensive (hundreds of cycles) |
| **Memory overhead** | Hierarchical reduces overhead | Single-level wastes 4 MB+ per process |

#### Edge Cases in Paging

| Edge Case | What Happens |
|-----------|-------------|
| **Page table self-reference** | Used by OS to access page tables; one recursive entry maps the PT itself |
| **Huge pages (2 MB, 1 GB)** | Single PTE maps large range; reduces TLB pressure but increases internal fragmentation |
| **Non-contiguous page table allocation** | Multi-level PT naturally handles this; inner tables allocated on demand |
| **Page table overflow (32-bit)** | Single-level PT for 32-bit = 4 MB â€” fits in contiguous physical memory but wastes space |
| **64-bit with single-level PT** | Impossible â€” 2^52 entries would be 32 PB of page table |
| **Copy-on-write (fork)** | Page tables marked read-only; actual frame duplicated only on write |
| **NUMA memory** | Page tables must be local to the accessing core for performance |
| **PCIe MMIO** | Physical address range mapped to devices, not RAM; marked uncacheable |

---

### Segmentation


**Segmentation** is a memory management scheme that divides a program into **logical segments** that match the programmer's view: code, data, stack, heap, shared libraries.

#### Segment Table

Each segment has a **base** (starting physical address) and a **limit** (size). The logical address is a (segment_number, offset) pair.

```
Logical Address:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Segment Number   â”‚   Offset within Segment â”‚
â”‚     s            â”‚        d                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚            Segment Table                    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Seg# â”‚  Base    â”‚  Limit   â”‚  Protection   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  0   â”‚ 0x400000 â”‚ 0x010000 â”‚   R-X (Code)  â”‚
â”‚  1   â”‚ 0x500000 â”‚ 0x020000 â”‚   RW- (Data)  â”‚
â”‚  2   â”‚ 0x700000 â”‚ 0x100000 â”‚   RW- (Heap)  â”‚
â”‚  3   â”‚ 0xFFFF000â”‚ 0x001000 â”‚   RW- (Stack) â”‚
â”‚  4   â”‚ 0x600000 â”‚ 0x005000 â”‚   R-- (Const) â”‚
â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚
        â–¼
Physical Address = Base + Offset
  (if offset < Limit, else segmentation fault)
```

#### Full Segment Translation Dry Run

**Segment table:**
| Segment | Base | Limit |
|---------|------|-------|
| 0 (Code) | 0x400000 | 0x10000 |
| 1 (Data) | 0x500000 | 0x20000 |
| 2 (Stack) | 0xFFF0000 | 0x1000 |

**Translate logical address (Seg=1, Offset=0x1234):**

| Step | Operation | Value |
|------|-----------|-------|
| 1 | Extract segment | 1 |
| 2 | Extract offset | 0x1234 |
| 3 | Check: offset â‰¤ Limit? | 0x1234 &lt; 0x20000 âœ“ |
| 4 | Physical = Base + Offset | 0x500000 + 0x1234 = **0x501234** |

**Translate logical address (Seg=2, Offset=0x2000):**

| Step | Operation | Value |
|------|-----------|-------|
| 1 | Extract segment | 2 |
| 2 | Extract offset | 0x2000 |
| 3 | Check: offset â‰¤ Limit? | 0x2000 > 0x1000 âœ— |
| 4 | Result | **Segmentation fault â€” offset beyond limit** |

#### Real-World Analogy: Office Building

> - **Segments** are like different zones in an office building:
>   - Segment 0 = Lobby (code) â€” you enter here
>   - Segment 1 = Filing room (data) â€” storage area
>   - Segment 2 = Conference room (stack) â€” temporary workspace
>   - Segment 3 = Parking garage (heap) â€” variable sized
> - Each zone has a maximum capacity (limit).
> - The segment table is the building directory: "Filing room is in the east wing, room 101-250."

#### Segmentation Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Matches programmer's logical view of memory | External fragmentation (variable-sized segments) |
| Each segment has independent protection (R/W/X) | Must find contiguous physical memory per segment |
| Segments can grow independently (stack, heap) | Complicated memory management (compaction needed) |
| Simplifies sharing of code segments | Segment table limited by hardware register count |
| No internal fragmentation | Segments must fit in physical memory entirely |

#### C++: Segment Translation Simulator

```cpp
#include <iostream>
#include <vector>
#include <cstdint>
#include <string>

struct Segment {
    std::string name;
    uint32_t base;
    uint32_t limit;
    uint32_t protection; // 0=R, 1=RW, 2=RX, 3=RWX
};

class SegmentationSimulator {
private:
    std::vector<Segment> segment_table;

public:
    void add_segment(const std::string& name, uint32_t base,
                     uint32_t limit, uint32_t prot) {
        segment_table.push_back({name, base, limit, prot});
    }

    struct Result {
        uint32_t physical;
        bool ok;
        std::string reason;
    };

    Result translate(uint32_t segment, uint32_t offset) {
        if (segment >= segment_table.size()) {
            return {0, false, "Invalid segment number"};
        }

        const auto& seg = segment_table[segment];
        if (offset >= seg.limit) {
            return {0, false,
                "Offset " + std::to_string(offset) +
                " exceeds segment limit " + std::to_string(seg.limit)};
        }

        return {seg.base + offset, true, "OK"};
    }

    void dump_table() {
        std::cout << "Segment Table:\n";
        std::cout << "  #  | Name  | Base    | Limit   | Prot\n";
        std::cout << "-----|-------|---------|---------|-----\n";
        for (size_t i = 0; i < segment_table.size(); i++) {
            auto& s = segment_table[i];
            std::cout << "  " << i << " | " << s.name
                      << " | 0x" << std::hex << s.base
                      << " | 0x" << s.limit
                      << " | 0x" << s.protection << std::dec << "\n";
        }
    }
};

int main() {
    SegmentationSimulator sim;
    sim.add_segment("Code",  0x400000, 0x10000, 2); // RX
    sim.add_segment("Data",  0x500000, 0x20000, 1); // RW
    sim.add_segment("Stack", 0xFFF0000, 0x1000, 1); // RW

    sim.dump_table();

    auto r1 = sim.translate(1, 0x1234);
    std::cout << "Seg 1, Off 0x1234 â†’ 0x" << std::hex
              << r1.physical << std::dec
              << " (" << r1.reason << ")\n";

    auto r2 = sim.translate(2, 0x2000);
    std::cout << "Seg 2, Off 0x2000 â†’ "
              << (r2.ok ? "0x" + std::to_string(r2.physical) : r2.reason) << "\n";

    return 0;
}
```

---

### Segmentation with Paging (x86 Architecture)


Modern CPUs combine both schemes: **segmentation** provides logical organization, and **paging** manages physical memory. The CPU first translates the logical address through segmentation to get a **linear address**, then translates that through paging to get the **physical address**.

```
Logical Address â†’ [Segmentation Unit] â†’ Linear Address â†’ [Paging Unit] â†’ Physical Address
```

#### x86 Protected Mode Translation

```
Logical Address (48-bit far pointer):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Segment Selector â”‚       Offset (32-bit)      â”‚
â”‚    16 bits       â”‚                            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Segment Descriptor  â”‚
â”‚  (Global/Local DT)   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Base = 0x00000000    â”‚  â† In flat model, base = 0
â”‚ Limit = 0xFFFFFFFF   â”‚  â† Limit = 4 GB
â”‚ G-bit = 1            â”‚  â† Granularity: 4 KB units
â”‚ DPL = 0              â”‚  â† Privilege level
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚
        â–¼
Linear Address = Segment.Base + Offset = 0 + Offset = Offset (in flat mode)
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Page Translation   â”‚
â”‚   (2-level for 32-bitâ”‚
â”‚   4-level for 64-bit)â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚
        â–¼
Physical Address (sent to memory bus)
```

#### Flat Memory Model in Linux

Linux sets up all four segments (kernel code, kernel data, user code, user data) with:
- **Base = 0x00000000**
- **Limit = 0xFFFFFFFF** (4 GB for 32-bit) or 0xFFFFFFFFFF... (for 64-bit)

This effectively **disables segmentation** â€” the logical address IS the linear address. All memory protection is handled by the paging unit.

**Why does Linux do this?**
1. **Portability:** Most RISC architectures (ARM, RISC-V) don't support segmentation at all.
2. **Simplicity:** One less layer of translation to manage.
3. **Flat addressing:** Easier to implement mmap, shared memory, and demand paging.

#### x86-64: Segmentation in 64-bit Mode

In 64-bit (long) mode:
- Segmentation is **mostly disabled**
- CS (code segment) controls privilege level and 64/32-bit mode
- DS, ES, SS segment bases are treated as 0
- FS and GS segments CAN have non-zero bases (used for thread-local storage, per-CPU data)

```
Linux uses:
  GS: per-CPU data area (current task pointer, etc.)
  FS: thread-local storage (TLS) for user-space
```

#### Real-World Analogy: Shipping Warehouse

> - **Segments** = Labeled crates (Kitchen Stuff, Bedroom Stuff). Matches how you think about your belongings.
> - **Pages** = Standard-sized boxes that the moving company requires. You repack your crates into boxes.
> - **Segmentation + Paging** = The crates exist logically, but inside they're packed into uniform boxes for efficient stacking on the truck.
> - **Flat model** = The moving company just stacks boxes directly â€” the crates are "virtual labels" where every crate has the same size.

---

### Swapping


A process can be **swapped** temporarily out of memory to a **backing store** (swap partition on disk).

#### Standard Swapping

```
1. OS selects victim process
2. Write entire process image â†’ swap partition
3. Update PCB: mark as swapped
4. Free the process's memory
5. When needed: read back from swap â†’ find new memory location â†’ reload
```

**Problem:** Swapping entire processes is slow (gigabytes of I/O). Rarely used in modern systems.

#### Swapping with Paging (Demand Paging)

Only individual pages are swapped, not entire processes. This is the foundation of **virtual memory** (next chapter).

```
1. Process tries to access a page not in memory
2. MMU triggers a page fault
3. OS reads the needed page from swap
4. Process continues (only the needed page was loaded)
```

---

## Interview Corner

### Fragmentation Types

| Type | Cause | Occurs In | Solution |
|------|-------|-----------|----------|
| **External** | Variable-sized allocations create scattered free holes | Contiguous allocation, Segmentation | Compaction, Paging |
| **Internal** | Allocated block larger than requested (rounding) | Fixed partitions, Paging | Smaller page size, Slab allocator |
| **Segment fragmentation** | Segments of varying sizes cause fragmentation | Segmentation | Combine with paging |

### TLB Reach

**TLB Reach** = Number of TLB entries Ã— Page size.

```
With 64 TLB entries and 4 KB pages:
  TLB reach = 64 Ã— 4 KB = 256 KB

With 64 TLB entries and 2 MB huge pages:
  TLB reach = 64 Ã— 2 MB = 128 MB

With 64 TLB entries and 1 GB huge pages:
  TLB reach = 64 Ã— 1 GB = 64 GB
```

**Problem:** Modern applications have working sets much larger than 256 KB. A database processing 1 GB of data will experience heavy TLB thrashing with 4 KB pages.

**Solutions:**
1. **Huge pages** (2 MB, 1 GB): Cover more memory per TLB entry.
2. **Multi-level TLB**: L1 (small, fast) + L2 (larger, slightly slower) caches.
3. **Page table walk caches**: Cache intermediate page table entries (PML4, PDPT, PD entries).

### Page Size Trade-Offs

| Page Size | Advantage | Disadvantage |
|-----------|-----------|-------------|
| **4 KB** (default) | Minimal internal waste, fine-grained protection | Large page tables, many TLB misses |
| **2 MB** (huge) | Larger TLB reach, smaller page tables | More internal waste (avg 1 MB/region) |
| **1 GB** (gigantic) | Massive TLB reach, minimal page table overhead | Very large internal waste, coarse-grained |
| **64 KB** (ARM) | Good TLB reach, larger than 4KB | Compatibility issues with 4 KB assumptions |

**Typical workloads:**
- **Databases:** Benefit from 2 MB huge pages (large contiguous working set).
- **HPC / Scientific computing:** Benefit from 1 GB pages (very large arrays).
- **General-purpose desktop:** 4 KB is optimal (sparse access patterns, many small allocations).

### TLB and Context Switch

On context switch, the TLB must be flushed unless it supports **address space identifiers (ASIDs)**.

| Approach | Mechanism | Overhead |
|----------|-----------|----------|
| **Full TLB flush** | Invalidate all entries | High â€” repopulate on next accesses |
| **Global pages** | Mark OS/kernel pages as global (bit 8 in PTE) | Medium â€” kernel entries survive |
| **ASIDs** | Tag each TLB entry with a process ID | Low â€” only flush on PID reuse |

### Thrashing

**Thrashing** occurs when the system spends more time swapping pages in/out than executing. The OS detects thrashing via:
- **CPU utilization drops** while page fault rate spikes.
- **Working set model**: If total working set > physical memory â†’ thrashing.

**Solutions:**
1. Reduce degree of multiprogramming.
2. Use a local page replacement algorithm (per-process).
3. Increase physical memory.

---

## Applications in Real Systems

### x86-64 Page Tables (Intel/AMD)

- **4-level paging** (48-bit virtual address space): PML4 â†’ PDPT â†’ PD â†’ PT
- **5-level paging** (57-bit): Adds PML5 level â€” available on Ice Lake and later
- Page size: 4 KB (default), 2 MB (via PS=1 in PD entry), 1 GB (via PS=1 in PDPT entry)
- **PCID** (Process Context IDentifier): TLB entries tagged with PCID â€” no flush on context switch
- **INVPCID** instruction: Invalidate specific TLB entries by PCID

```
x86-64 4-Level Page Table Walk (48-bit):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ CR3 â†’ PML4 Table (4 KB, 512 entries Ã— 8 bytes = 4 KB)      â”‚
â”‚        â”‚                                                     â”‚
â”‚        â””â”€â”€ PML4[Index1] â†’ PDP Table (4 KB, 512 entries)     â”‚
â”‚               â”‚                                              â”‚
â”‚               â””â”€â”€ PDP[Index2] â†’ PD Table (4 KB, 512 entries)â”‚
â”‚                      â”‚                                       â”‚
â”‚                      â””â”€â”€ PD[Index3] â†’ PT Table (4 KB, 512)  â”‚
â”‚                             â”‚                                â”‚
â”‚                             â””â”€â”€ PT[Index4] â†’ Frame           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### ARMv8-A Page Tables

- Supports 4 KB, 16 KB, 64 KB pages
- **2-4 level page tables** depending on granule size
- **Stage 1 translation**: Virtual address â†’ Intermediate physical address (IPA)
- **Stage 2 translation**: IPA â†’ Physical address (hypervisor stage)
- **Two-stage translation** enables hardware-virtualized memory management
- **Translation Granule**: 4 KB (most common), 16 KB, 64 KB
- **TTBR0** (user) and **TTBR1** (kernel) â€” separate page table bases

```
ARMv8 4 KB granule, 4-level:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ TTBR0/1 â†’ Level 0 Table (4 KB)          â”‚
â”‚             â”‚                             â”‚
â”‚             â””â”€ L0[Index0] â†’ Level 1      â”‚
â”‚                    â”‚                      â”‚
â”‚                    â””â”€ L1[Index1] â†’ L2    â”‚
â”‚                           â”‚               â”‚
â”‚                           â””â”€ L2[I2] â†’ L3 â”‚
â”‚                                  â”‚        â”‚
â”‚                                  â””â”€ Frame â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Linux Buddy Allocator

Linux uses a **buddy allocator** for managing physical page frames. It divides memory into power-of-2 sized blocks.

```
Order 0:  4 KB pages (single page frames)
Order 1:  8 KB (2 pages)
Order 2:  16 KB (4 pages)
Order 3:  32 KB (8 pages)
Order 4:  64 KB (16 pages)
...
Order 10: 4 MB (1024 pages)

Allocation: Round up request to next power of 2 â†’ check free list.
  If no block at that order, take larger block, split into two "buddies".
  Give one buddy, put the other on the lower-order free list.

Free: Merge with buddy if free, promoting to higher order.
```

**Example: Allocating 15 KB (need 16 KB block = order 2):**
```
1. Request 15 KB â†’ round up to 16 KB â†’ check order-2 free list
2. If order-2 empty, check order-3 (32 KB):
   - Split order-3 block into two order-2 buddies (A, B)
   - Return A to caller
   - Add B to order-2 free list
3. On free: merge A with B if B is still free â†’ restore order-3 block
```

**Advantages:**
- Fast allocation (no complex search â€” just check buddy list)
- Simple coalescing (buddies always adjacent, easy to detect)
- No external fragmentation within the allocator

### Windows Memory Manager

Windows uses a **demand-paged** virtual memory system with:
- **Working set management**: Per-process trim policy when memory is low
- **Modified page writer**: Asynchronously writes dirty pages to disk
- **AWE (Address Windowing Extensions)**: Allows 32-bit processes to access > 4 GB RAM
- **Superfetch/Prefetch**: Predicts page usage patterns and pre-loads pages
- **Memory compression**: Compresses pages instead of writing to disk (Windows 10+)

---

## Examples

### Example 1: Address Translation with Paging (Full Walk)

Given:
- 32-bit logical address space
- Page size = 4 KB (2Â¹Â² bytes)
- Page table:

| Page | Frame | Valid |
|------|-------|-------|
| 0 | 8 | Yes |
| 1 | 3 | Yes |
| 2 | 12 | Yes |
| 3 | 0 | No |

**Translate logical address 0x2A5C to physical:**

```
Step 1: Address = 0x00002A5C
        Binary:  0000 0000 0000 0000 0010 1010 0101 1100

Step 2: Page Number = Address >> 12
        0x00002A5C >> 12 = 0x00002 = Page 2

Step 3: Offset = Address & 0xFFF
        0x00002A5C & 0xFFF = 0xA5C

Step 4: Page Table[2] â†’ Frame 12 = 0xC

Step 5: Physical = (Frame << 12) | Offset
        0xC << 12 = 0xC000
        0xC000 | 0xA5C = 0xCA5C

Result: 0x2A5C â†’ 0xCA5C
```

### Example 2: Memory Allocation Simulation (Complete)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct MemoryBlock {
    int start;
    int size;
    bool free;
    int process_id;
};

class MemoryManager {
    std::vector<MemoryBlock> blocks;

    void merge() {
        std::sort(blocks.begin(), blocks.end(),
            [](auto& a, auto& b) { return a.start < b.start; });
        for (size_t i = 0; i + 1 < blocks.size(); i++) {
            if (blocks[i].free && blocks[i + 1].free &&
                blocks[i].start + blocks[i].size == blocks[i + 1].start) {
                blocks[i].size += blocks[i + 1].size;
                blocks.erase(blocks.begin() + i + 1);
                i--;
            }
        }
    }

public:
    MemoryManager(int total_size) {
        blocks.push_back({0, total_size, true, -1});
    }

    int allocate(int process_id, int size, const std::string& strategy) {
        size_t target = blocks.size();
        size_t best_idx = blocks.size();
        int best_remainder = INT_MAX;

        for (size_t i = 0; i < blocks.size(); i++) {
            if (!blocks[i].free || blocks[i].size < size) continue;

            if (strategy == "first" && target == blocks.size()) {
                target = i;
                break;  // First-fit: stop at first
            }
            if (strategy == "best") {
                int rem = blocks[i].size - size;
                if (rem < best_remainder) {
                    best_remainder = rem;
                    best_idx = i;
                }
            }
            if (strategy == "worst" && blocks[i].size > (target < blocks.size() ?
                blocks[target].size : 0)) {
                target = i;
            }
        }

        if (strategy == "best" && best_idx < blocks.size()) target = best_idx;
        if (target >= blocks.size()) return -1;

        auto& hole = blocks[target];
        int addr = hole.start;
        if (hole.size == size) {
            hole.free = false;
            hole.process_id = process_id;
        } else {
            hole.start += size;
            hole.size -= size;
            blocks.insert(blocks.begin() + target,
                {addr, size, false, process_id});
        }
        return addr;
    }

    void deallocate(int process_id) {
        for (auto& b : blocks) {
            if (!b.free && b.process_id == process_id) {
                b.free = true;
                b.process_id = -1;
            }
        }
        merge();
    }

    void print() {
        printf("Memory Map:\n");
        for (auto& b : blocks) {
            printf("  [%4d-%4d] %s", b.start, b.start + b.size - 1,
                   b.free ? "FREE" : ("PID=" + std::to_string(b.process_id)).c_str());
            if (b.free) printf(" (size=%d)", b.size);
            printf("\n");
        }
    }
};

int main() {
    MemoryManager mm(1024);
    mm.print();

    int a = mm.allocate(1, 200, "first");
    int b = mm.allocate(2, 150, "first");
    printf("P1 at %d, P2 at %d\n", a, b);
    mm.print();

    mm.deallocate(1);
    mm.print();

    int d = mm.allocate(4, 80, "best");
    printf("P4 at %d (best-fit)\n", d);
    mm.print();

    return 0;
}
```

### Example 3: Page Table Size Calculation

**Question:** 64-bit address space, 4 KB pages, 4-level page table. What is the total page table overhead for a process using 1 GB of memory?

```
Page size = 4 KB = 2^12
Address bits = 48 (x86-64 currently uses 48 bits)
Levels = 4
Each level index: (48 - 12) / 4 = 9 bits per level
Entries per level: 2^9 = 512
Each entry: 8 bytes
Table size per level: 512 Ã— 8 = 4 KB

For 1 GB = 2^30 bytes:
  Pages needed = 2^30 / 2^12 = 2^18 = 262,144 pages
  Page table entries = 262,144 entries
  Inner (L4) page tables needed:
    Entries per table: 512
    Tables needed: 262,144 / 512 = 512 L4 tables

  L3 tables needed: 512 L4 tables / 512 entries per L3 = 1 L3 table
  (In practice: ceil(512 / 512) = 1)

  L2 tables: 1 (from L3) / 512 = 1 (truncated)
  L1 (PML4): always 1

  Memory overhead:
    PML4:  1 Ã— 4 KB =   4 KB
    L3:    1 Ã— 4 KB =   4 KB
    L2:    1 Ã— 4 KB =   4 KB
    L4:  512 Ã— 4 KB = 2048 KB = 2 MB

  Total page table memory: ~2.016 MB for 1 GB of mapped memory.
  Overhead ratio: 2.016 MB / 1024 MB â‰ˆ 0.2%

Compare to single-level page table for 48-bit:
  2^36 entries Ã— 8 bytes = 2^39 bytes = 512 GB â€” impossible!
```

---

### TypeScript Memory Management Simulator

The following TypeScript implementation models paging, TLB with LRU, page table walk, and dynamic allocation strategies:

```typescript
/**
 * Memory Management Simulator
 * Implements: paging, TLB with LRU, page table walk,
 *             first/best/worst-fit allocation, buddy allocator
 */
interface PageTableEntry {
  frameNumber: number;
  valid: boolean;
  dirty: boolean;
  referenced: boolean;
}

class PagingSimulator {
  private pageTable: Map<number, PageTableEntry> = new Map();
  private frameSize: number;
  private totalFrames: number;
  private freeFrames: Set<number>;
  private tlb: { page: number; frame: number; lastAccess: number }[] = [];
  private tlbSize: number;
  private tlbHits = 0;
  private tlbMisses = 0;
  private accessTime = 0;

  constructor(frameSize: number, totalFrames: number, tlbSize: number) {
    this.frameSize = frameSize;
    this.totalFrames = totalFrames;
    this.freeFrames = new Set(Array.from({ length: totalFrames }, (_, i) => i));
    this.tlbSize = tlbSize;
  }

  translateAddress(logicalAddress: number): { physicalAddress: number; tlbHit: boolean; pageFault: boolean } {
    const pageNumber = Math.floor(logicalAddress / this.frameSize);
    const offset = logicalAddress % this.frameSize;
    this.accessTime++;

    // Check TLB first
    const tlbEntry = this.tlb.find(e => e.page === pageNumber);
    if (tlbEntry) {
      this.tlbHits++;
      tlbEntry.lastAccess = this.accessTime;
      return { physicalAddress: tlbEntry.frame * this.frameSize + offset, tlbHit: true, pageFault: false };
    }

    this.tlbMisses++;

    // Check page table
    const pte = this.pageTable.get(pageNumber);
    if (pte && pte.valid) {
      // TLB miss but page is in memory â€” update TLB
      this.updateTLB(pageNumber, pte.frameNumber);
      pte.referenced = true;
      return { physicalAddress: pte.frameNumber * this.frameSize + offset, tlbHit: false, pageFault: false };
    }

    // Page fault â€” allocate frame
    if (this.freeFrames.size === 0) {
      return { physicalAddress: -1, tlbHit: false, pageFault: true };
    }

    const frame = this.freeFrames.values().next().value;
    this.freeFrames.delete(frame);
    this.pageTable.set(pageNumber, { frameNumber: frame, valid: true, dirty: false, referenced: true });
    this.updateTLB(pageNumber, frame);

    return { physicalAddress: frame * this.frameSize + offset, tlbHit: false, pageFault: true };
  }

  private updateTLB(page: number, frame: number): void {
    if (this.tlb.length >= this.tlbSize) {
      // LRU eviction
      const lru = this.tlb.reduce((min, e) => e.lastAccess < min.lastAccess ? e : min);
      const idx = this.tlb.indexOf(lru);
      this.tlb[idx] = { page, frame, lastAccess: this.accessTime };
    } else {
      this.tlb.push({ page, frame, lastAccess: this.accessTime });
    }
  }

  getStats(): string {
    const totalAccesses = this.tlbHits + this.tlbMisses;
    return JSON.stringify({
      tlbHits: this.tlbHits,
      tlbMisses: this.tlbMisses,
      tlbHitRate: (this.tlbHits / totalAccesses * 100).toFixed(2) + '%',
      pageTableEntries: this.pageTable.size,
      freeFrames: this.freeFrames.size,
      totalFrames: this.totalFrames
    }, null, 2);
  }
}

class MemoryAllocator {
  private holes: { start: number; size: number }[] = [];
  private totalMemory: number;

  constructor(totalMemory: number) {
    this.totalMemory = totalMemory;
    this.holes.push({ start: 0, size: totalMemory });
  }

  allocate(size: number, strategy: 'first' | 'best' | 'worst' | 'next'): number | null {
    let selected: { idx: number; hole: { start: number; size: number } } | null = null;
    let nextIdx = 0;

    switch (strategy) {
      case 'first': {
        for (let i = 0; i < this.holes.length; i++) {
          if (this.holes[i].size >= size) {
            selected = { idx: i, hole: this.holes[i] };
            break;
          }
        }
        break;
      }
      case 'best': {
        let minWaste = Infinity;
        for (let i = 0; i < this.holes.length; i++) {
          const waste = this.holes[i].size - size;
          if (waste >= 0 && waste < minWaste) {
            minWaste = waste;
            selected = { idx: i, hole: this.holes[i] };
          }
        }
        break;
      }
      case 'worst': {
        let maxSize = -1;
        for (let i = 0; i < this.holes.length; i++) {
          if (this.holes[i].size >= size && this.holes[i].size > maxSize) {
            maxSize = this.holes[i].size;
            selected = { idx: i, hole: this.holes[i] };
          }
        }
        break;
      }
      case 'next': {
        for (let i = nextIdx; i < this.holes.length; i++) {
          if (this.holes[i].size >= size) {
            selected = { idx: i, hole: this.holes[i] };
            nextIdx = i;
            break;
          }
        }
        if (!selected) {
          for (let i = 0; i < nextIdx; i++) {
            if (this.holes[i].size >= size) {
              selected = { idx: i, hole: this.holes[i] };
              nextIdx = i;
              break;
            }
          }
        }
        break;
      }
    }

    if (!selected) return null;

    const { idx, hole } = selected;
    const address = hole.start;

    if (hole.size === size) {
      this.holes.splice(idx, 1);
    } else {
      this.holes[idx] = { start: hole.start + size, size: hole.size - size };
    }

    return address;
  }

  free(address: number, size: number): void {
    this.holes.push({ start: address, size });
    this.holes.sort((a, b) => a.start - b.start);
    this.mergeAdjacent();
  }

  private mergeAdjacent(): void {
    for (let i = 0; i < this.holes.length - 1; i++) {
      if (this.holes[i].start + this.holes[i].size === this.holes[i + 1].start) {
        this.holes[i].size += this.holes[i + 1].size;
        this.holes.splice(i + 1, 1);
        i--;
      }
    }
  }

  printHoles(): string {
    return this.holes.map(h => `[${h.start}-${h.start + h.size - 1}] (${h.size} KB)`).join(', ');
  }
}

// Paging demo
console.log('=== Paging with TLB ===');
const paging = new PagingSimulator(4096, 64, 4);
for (let i = 0; i < 100; i++) {
  const addr = Math.floor(Math.random() * 0x100000);
  paging.translateAddress(addr);
}
console.log(paging.getStats());

// Allocation demo
console.log('\n=== Memory Allocation ===');
const alloc = new MemoryAllocator(1024);
console.log('Initial:', alloc.printHoles());
console.log('First-fit 200:', alloc.allocate(200, 'first'));
console.log('Best-fit 100:', alloc.allocate(100, 'best'));
console.log('Free at 0 size 200');
alloc.free(0, 200);
console.log('After free:', alloc.printHoles());
```

### Effective Access Time Calculation

The Effective Access Time (EAT) formula captures TLB performance:

```
EAT = Hit_Ratio Ã— (TLB_Access + Memory_Access) + Miss_Ratio Ã— (TLB_Access + Page_Walk + Memory_Access)
```

**Example 1:** TLB hit rate = 98%, TLB access = 2 ns, memory access = 100 ns, page walk = 100 ns (single level)
```
EAT = 0.98 Ã— (2 + 100) + 0.02 Ã— (2 + 100 + 100)
    = 0.98 Ã— 102 + 0.02 Ã— 202
    = 99.96 + 4.04
    = 104.0 ns 
```

**Example 2:** Four-level page table (4 page walks = 400 ns)
```
EAT = 0.98 Ã— (2 + 100) + 0.02 Ã— (2 + 400 + 100)
    = 0.98 Ã— 102 + 0.02 Ã— 502
    = 99.96 + 10.04
    = 110.0 ns
```

### Additional Chapter Quiz Questions

9. What is the TLB reach with 32 entries and 4 KB pages?
   - a) 32 KB
   - b) 128 KB
   - c) 256 KB
   - d) 512 KB

10. Which page table structure uses a hash function to map virtual pages to physical frames?
    - a) Hierarchical page table
    - b) Hashed page table
    - c) Inverted page table
    - d) Single-level page table

11. What is the primary advantage of an inverted page table?
    - a) Faster lookups
    - b) Proportional to physical memory size, not virtual address space
    - c) Simpler implementation
    - d) No TLB needed

12. In the buddy allocator, what happens when you free a block that is adjacent to its buddy?
    - a) Both blocks remain separate
    - b) The blocks are merged into a larger block
    - c) The blocks are zeroed
    - d) Nothing special happens

13. What is compaction in memory management?
    - a) Compressing memory pages
    - b) Moving allocated processes to consolidate free memory
    - c) Reducing page table size
    - d) Merging adjacent free blocks

**Answers:** 9-b, 10-b, 11-b, 12-b, 13-b

### Additional Exercises

#### Basic
13. Calculate the effective access time for a system with 95% TLB hit rate, 1 ns TLB access, 50 ns memory access, and a two-level page table (50 ns per walk). Show all steps.

#### Intermediate
14. Write a TypeScript program that simulates a multi-level page table for a 32-bit system with 4 KB pages. Given a logical address, walk through each level to find the physical address. Support 2-level and 3-level page table configurations.
15. Implement a **buddy allocator** in TypeScript: allocate and free memory in power-of-2-sized blocks. Show the free list at each order after a sequence of allocations and deallocations. Demonstrate coalescing when buddies are freed.

#### Advanced
16. Write a TypeScript program that implements and benchmarks the four dynamic allocation strategies (first-fit, best-fit, worst-fit, next-fit) on a simulated 1 MB heap. Run 1000 random allocation/free operations and measure: average allocation time, external fragmentation (total free space in largest hole), and allocation success rate.
17. Implement a **TLB simulator** with LRU replacement policy. Process a random sequence of 10,000 page accesses (50-200 distinct pages). Measure hit rate for TLB sizes of 4, 8, 16, 32, and 64 entries. Plot the hit rate vs. TLB size relationship.

## Concept Comparison

| Feature | Contiguous | Paging | Segmentation | Seg+Paging |
|-------|----------|------|------------|----------|
| **Fragmentation** | External | Internal (small) | External | Minimal |
| **Address Space** | One linear space | Linear pages | Multiple logical segments | Segments of pages |
| **Programmer View** | Linear | Invisible (completely transparent) | Matches program structure | Best of both |
| **Sharing** | Hard | Easy (share frames) | Easy (share segments) | Easy |
| **Protection** | Base/limit registers | Page-level R/W/X | Segment-level | Per-page |
| **Memory overhead** | Minimal | Page tables (multi-level reduces) | Segment table | Both |
| **Growing** | Fixed at load time | Pages added on demand | Segments can grow | On demand |
| **Hardware support** | MMU with base/limit | MMU + TLB | MMU + segment registers | Full MMU |
| **OS Example** | Early Unix | Linux, Windows, macOS | OS/2 | Intel x86-64 |

## Quick Reference

| Term | Definition |
|------|------------|
| **Logical Address** | Address generated by CPU; also called virtual address |
| **Physical Address** | Actual address in RAM; seen by memory unit |
| **MMU** | Hardware that translates logical to physical addresses at runtime |
| **Page** | Fixed-size block of logical memory (typically 4 KB) |
| **Frame** | Fixed-size block of physical memory (same size as page) |
| **Page Table** | Per-process data structure mapping page numbers to frame numbers |
| **TLB** | Hardware cache for fast page table lookups (Translation Lookaside Buffer) |
| **PTBR** | Page Table Base Register â€” points to the active page table |
| **Paging** | Memory scheme using fixed-size pages to eliminate external fragmentation |
| **Segmentation** | Memory scheme using variable-sized logical segments |
| **External Fragmentation** | Free memory scattered in small holes between allocated blocks |
| **Internal Fragmentation** | Wasted space inside an allocated block beyond requested size |
| **Compaction** | Moving processes to consolidate free memory into one contiguous hole |
| **EAT** | Effective Access Time = (HR Ã— TLB_time) + (MR Ã— (TLB_time + walk_time + mem_time)) |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| **Paging** | Standard memory management | 2 MB huge pages common | Often runs without MMU (bare metal) | Guest OS uses nested paging |
| **Segmentation** | x86 legacy mode only | Not used | Logical segments for memory-mapped I/O | Not used |
| **TLB** | Crucial for connection handling | Large TLB needed for buffer pool | Simple or no TLB | Virtualized TLB (nested) |
| **Large Pages** | Helpful for caching | Critical for performance | Rarely supported | Used for graphics drivers |
| **Swapping** | Minimal (in-memory) | Often disabled (direct I/O) | No swap | Compressed swap (zRAM) |

## Chapter Quiz

1. Which technique divides memory into fixed-size blocks?
   - a) Paging
   - b) Segmentation
   - c) Contiguous allocation
   - d) Dynamic partitioning

2. The MMU is responsible for:
   - a) Managing disk storage
   - b) Translating logical to physical addresses
   - c) Scheduling processes
   - d) Handling I/O

3. What is external fragmentation?
   - a) Wasted space inside allocated blocks
   - b) Wasted space between allocated blocks
   - c) Page table overflow
   - d) TLB miss penalty

4. Which dynamic allocation algorithm searches from the last allocation point?
   - a) First-fit
   - b) Best-fit
   - c) Worst-fit
   - d) Next-fit

5. What is the effective access time with 98% TLB hit rate, 1 ns TLB access, 100 ns memory access?
   - a) 101 ns
   - b) 102 ns
   - c) 103 ns
   - d) 151 ns

6. In a two-level page table for 32-bit with 4 KB pages, how many bits index the outer table?
   - a) 8
   - b) 10
   - c) 12
   - d) 20

7. Inverted page tables have one entry per:
   - a) Page
   - b) Process
   - c) Frame
   - d) Segment

8. What is TLB reach with 64 entries and 2 MB pages?
   - a) 256 KB
   - b) 128 MB
   - c) 64 MB
   - d) 512 KB

## Summary

- Logical addresses are mapped to physical addresses by the MMU, enabling relocation and protection
- Address binding occurs at compile time, load time, or execution time â€” modern OS use execution-time binding
- Contiguous allocation suffers from external fragmentation; compaction can reclaim wasted space
- Dynamic storage allocation: First-fit (fastest average), Best-fit (minimal waste per alloc), Worst-fit (leaves large holes), Next-fit (no front-bias)
- Paging eliminates external fragmentation using fixed-size pages and frames; page tables map between them
- Page table structures: single (simple but large), hierarchical (saves memory), hashed (for >32 bit), inverted (tiny but slow)
- TLB caches recent page table lookups; TLB reach = entries Ã— page size
- Effective access time: EAT = HR Ã— (TLB + mem) + MR Ã— (TLB + walk + mem)
- Segmentation matches the programmer's view with variable-sized logical segments; combined with paging in modern x86
- Linux uses flat segmentation (base=0, limit=max) and relies entirely on paging for protection

## Exercises

### Basic

1. Given a 32-bit logical address and a 4 KB page size, how many entries are in a single-level page table? How much memory does the page table consume?
2. What is external fragmentation? How does paging solve it? What new problem does it introduce?
3. If a TLB has 98% hit rate, TLB access takes 2 ns, and memory access takes 100 ns, what is the EAT? A two-level page table? A four-level?
4. Explain the difference between compile-time, load-time, and execution-time address binding.

### Intermediate

5. Implement a memory allocator that tracks free holes and supports first-fit, best-fit, worst-fit, and next-fit allocation. Use a linked list of hole descriptors. Test it with a sequence of requests and releases.
6. For a 64-bit address space with 4 KB pages, a single-level page table would need 2^52 entries (quadrillions). Explain how a four-level page table works and calculate how much memory the top-level table consumes.
7. Design a **two-level page table** for a 32-bit system with 4 KB pages. Show how the logical address 0x12345678 is translated, given appropriate page table entries. Walk through every step with binary values.
8. Simulate the buddy allocator: allocate and free blocks of sizes 64 KB, 128 KB, 32 KB, and 256 KB from an initial 1 MB pool. Show the resulting free lists at each order after each operation.

### Advanced

9. Write a program that simulates a TLB with LRU replacement. Process a random sequence of page numbers (10,000 accesses, 10-100 distinct pages) and measure the hit rate for TLB sizes of 8, 16, 32, 64, and 128 entries. Plot the results.
10. The x86-64 architecture supports 4 KB, 2 MB, and 1 GB page sizes. Write a program that allocates a 1 GB memory region using `mmap()` and measures TLB miss rate with `perf stat -e dTLB-load-misses`. Test with 4 KB pages (default) vs 2 MB huge pages (use `mmap` with `MAP_HUGETLB`). Explain the difference.
11. Implement a simple **inverted page table** with hashing. Support insert and lookup operations indexed by (process_id, page_number). Compare its memory usage with a traditional page table for a system with 1 GB RAM and 4 KB pages.
12. Implement the four dynamic allocation algorithms in Python and run a simulation with 1000 random allocations and deallocations. Measure: average allocation time per algorithm, total external fragmentation after 1000 operations, and largest remaining free hole. Which algorithm wins on each metric?

### Answers to Quiz

1. a) Paging
2. b) Translating logical to physical addresses
3. b) Wasted space between allocated blocks
4. d) Next-fit
5. 0.98 Ã— (1 + 100) + 0.02 Ã— (1 + 100 + 100) = 0.98 Ã— 101 + 0.02 Ã— 201 = 98.98 + 4.02 = 103.0 ns (answer: c)
6. b) 10 (32 - 12 = 20 bits for page number; split into 10 + 10)
7. c) Frame
8. b) 128 MB (64 Ã— 2 MB = 128 MB)
