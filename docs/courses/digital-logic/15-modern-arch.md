# Chapter 15: Modern Architectures

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Explain superscalar processor organisation and instruction-level parallelism
2. Compare VLIW and superscalar scheduling approaches
3. Describe multi-core processor architectures and cache coherence protocols
4. Analyse GPU architecture and the CUDA programming model
5. Discuss speculative execution and its security implications

## Theory

### 15.1 Superscalar Architecture

A superscalar processor issues multiple instructions per clock cycle to multiple execution units. Unlike pipelining (which exploits temporal parallelism), superscalar execution exploits spatial parallelism through multiple functional units.

#### 15.1.1 Instruction-Level Parallelism (ILP)

ILP is the degree to which instructions in a program can be executed in parallel. Dependencies limit ILP:

- **Data dependencies**: True (RAW), output (WAW), and anti (WAR) dependencies.
- **Name dependencies**: Register renaming eliminates WAR and WAW dependencies by mapping architectural registers to a larger pool of physical registers.
- **Control dependencies**: Branches limit the window of instructions available for parallel issue.

#### 15.1.2 Superscalar Pipeline Stages

A superscalar pipeline extends the classic five-stage pipeline:

1. **Fetch**: Fetch multiple instructions per cycle (typically 4&ndash;8).
2. **Decode**: Decode instructions and perform register renaming.
3. **Issue**: Dispatch instructions to reservation stations for functional units.
4. **Execute**: Execute in parallel functional units (ALUs, FPUs, load/store units).
5. **Commit**: Write results in program order using a reorder buffer (ROB).

#### 15.1.3 Out-of-Order Execution

Instructions execute when their operands are available, not necessarily in program order. The reorder buffer ensures that results appear to commit in program order, maintaining precise exceptions.

#### 15.1.4 Register Renaming

Register renaming eliminates false dependencies. A mapping table translates architectural register specifiers to physical register specifiers. A pool of physical registers (larger than the architectural register set) provides temporary storage for speculative results.

### 15.2 VLIW Architecture

Very Long Instruction Word (VLIW) processors encode multiple operations in a single wide instruction word. The compiler schedules operations statically, eliminating the need for complex out-of-order hardware.

| Feature | Superscalar | VLIW |
|---------|-------------|------|
| Scheduling | Dynamic (hardware) | Static (compiler) |
| Instruction width | Variable (depend on issue) | Fixed, very wide |
| Hardware complexity | High | Lower |
| Compiler complexity | Lower | Higher |
| Binary compatibility | Preserved across generations | Breaks across generations |
| Examples | Intel Core, ARM Cortex | Intel Itanium, TI C6000 DSP |

**Challenges of VLIW**:
- Object-code compatibility across processor generations with different issue widths
- NOPs in the instruction stream when insufficient parallelism exists
- Variable latencies (cache misses) are difficult to schedule statically

### 15.3 Multi-Core Processors

Multi-core processors integrate multiple processor cores on a single die, exploiting thread-level parallelism (TLP). Each core typically includes private L1 and L2 caches, with a shared L3 cache.

#### 15.3.1 Cache Coherence

When multiple cores have private caches, the same memory location may be cached in multiple caches with different values. Cache coherence protocols ensure a consistent view of memory.

**MSI protocol**: Each cache line is in one of three states:
- **M (Modified)**: The line is dirty (modified) and exclusive to this cache.
- **S (Shared)**: The line is clean and may exist in other caches.
- **I (Invalid)**: The line is not present or is stale.

**MESI protocol** adds an Exclusive state: the line is clean and present only in this cache. An E-state line transitions to S upon a remote read, and to M upon a local write.

**Snooping protocol**: Each cache monitors (snoops) the bus for coherence transactions. When a core writes to a shared line, it broadcasts an invalidation message that other caches must honour.

**Directory-based protocol**: A distributed directory tracks which caches hold each memory line. Used in systems with many cores where bus snooping would create excessive traffic.

#### 15.3.2 Memory Consistency

Memory consistency models define the order in which memory operations from one core become visible to other cores.

- **Sequential consistency**: All memory operations appear to execute in program order, with a single total order across all cores.
- **Total Store Order (TSO)**: Stores may be buffered but become visible in order; loads may bypass pending stores.
- **Relaxed consistency**: Various reorderings are permitted (load-load, load-store, store-store, store-load) requiring explicit memory barriers.

#### 15.3.3 Simultaneous Multithreading (SMT)

SMT (Hyper-Threading in Intel terminology) allows multiple threads to share a single core's execution resources. The core duplicates the architectural state (registers, PC) for each thread but shares the functional units. This improves utilisation when one thread stalls (e.g., on a cache miss).

Multi-threading approaches:

- **Fine-grained multithreading**: Switch between threads every cycle.
- **Coarse-grained multithreading**: Switch only when the current thread stalls.
- **Simultaneous multithreading**: Issue instructions from multiple threads in the same cycle.

### 15.4 GPU Architecture

Graphics processing units (GPUs) are specialised processors optimised for data-parallel computation. They employ a single-instruction, multiple-thread (SIMT) execution model.

#### 15.4.1 GPU Organisation

A GPU comprises multiple streaming multiprocessors (SMs), each containing many CUDA cores (simple ALUs). Key characteristics:

- Hundreds to thousands of lightweight cores
- High memory bandwidth
- Large register files for fast thread context switching
- Hardware scheduling of thread blocks

#### 15.4.2 SIMT Execution

Groups of 32 threads (a warp in NVIDIA terminology) execute the same instruction simultaneously on different data. Divergent branches (where threads within a warp take different paths) reduce utilisation because both paths are executed serially.

#### 15.4.3 GPU Memory Hierarchy

- **Global memory**: Large, high-bandwidth DRAM accessible by all threads.
- **Shared memory**: Small, low-latency SRAM shared by threads within a thread block.
- **Registers**: Private per-thread, fast.
- **Constant/texture memory**: Read-only caches for constants and textures.

#### 15.4.4 Heterogeneous Computing

Modern systems combine CPU and GPU in a heterogeneous architecture. The CPU (host) launches kernels (functions) on the GPU (device). Data is transferred between CPU and GPU memory over PCI Express or a unified memory fabric.

### 15.5 Vector Processing

Vector processors operate on arrays of data with a single instruction. A vector instruction specifies an operation on entire vectors: `VADD V1, V2, V3` adds all elements of V2 and V3 element-wise, storing in V1.

**Vector register**: A register file where each register holds multiple elements.
**Vector length**: The number of elements in a vector operation.
**Vector chaining**: Forwarding results from one vector operation to the next without memory access.

Vector processing provides high computational throughput for regular data-parallel workloads.

### 15.6 Speculative Execution

Speculative execution allows the processor to execute instructions before it is certain that they should be executed. Results are stored in the reorder buffer and committed only when the speculation is confirmed (e.g., branch prediction is correct).

#### 15.6.1 Security Implications — Spectre and Meltdown

Speculative execution introduces side-channel vulnerabilities:

- **Spectre (2018)**: Branch prediction poisoning causes the processor to speculatively execute instructions that access secret data. The secret is recovered through cache timing side channels.
- **Meltdown (2018)**: Out-of-order execution reads protected kernel memory before the permission check is completed. The data is exfiltrated through cache timing.

**Mitigations**:
- Serialising instructions (LFENCE, MFENCE, SFENCE)
- Kernel page table isolation (KPTI)
- Retpoline: A return-address-based branch prediction mitigation
- Microcode updates from processor vendors

### 15.7 Power and Thermal Considerations

Modern architectures face significant power and thermal constraints.

**Dynamic power**: P = &alpha; &times; C &times; V^2 &times; f, where &alpha; is activity factor, C is capacitance, V is voltage, f is frequency.

**Dark silicon**: In modern process nodes, not all transistors can be powered simultaneously due to thermal limits. This drives the trend toward specialised accelerators.

**DVFS (Dynamic Voltage and Frequency Scaling)**: Reducing voltage and frequency during low utilisation periods to save power.

### 15.8 Future Directions

- **Chiplet architectures**: Multiple smaller dies packaged together, improving yield and modularity.
- **Near-memory computing**: Processing logic integrated with memory to reduce data movement.
- **Domain-specific accelerators**: Custom hardware for machine learning, cryptography, and networking.
- **Quantum computing**: Exploiting quantum mechanical phenomena for certain classes of problems.

## Examples

### Example 15.1: Superscalar Speedup

A 4-way superscalar processor can issue up to 4 instructions per cycle. A program has an ILP of 1.8 (average independent instructions per cycle). In a 5-stage scalar pipeline, the program runs at CPI = 1.5 (with hazards). Calculate the speedup.

**Solution**: With unlimited issue width, speedup would be limited by ILP. The 4-way superscalar can achieve at most 1.8 IPC (limited by ILP). CPI_super = 1 / 1.8 = 0.556. Speedup = CPI_scalar / CPI_super = 1.5 / 0.556 = 2.70.

### Example 15.2: GPU Throughput Calculation

A GPU has 20 SMs, each with 64 CUDA cores running at 1.5 GHz. Each core can execute one single-precision floating-point multiply-add (FMA) per cycle. Calculate the peak GFLOPS.

**Solution**: Total cores = 20 &times; 64 = 1280. Each core performs 2 floating-point operations per FMA. Peak GFLOPS = 1280 &times; 2 &times; 1.5 = 3840 GFLOPS = 3.84 TFLOPS.

### Example 15.3: Cache Coherence Protocol

In a dual-core system with the MESI protocol, core A reads address X (miss). Core B then reads X (miss). Core A writes X. Trace the cache line states.

**Solution**:
1. Core A reads X: Miss. Line loaded in Exclusive (E) state. Memory: E.
2. Core B reads X: Miss. Snoop sees E. Core A transitions to Shared (S). Core B loads in S. Memory: S, S.
3. Core A writes X: Snoop sends invalidation to Core B. Core B transitions to Invalid (I). Core A transitions to Modified (M).

### Example 15.4: Amdahl's Law

A program is 90% parallelisable (can run on multiple cores) and 10% serial. Calculate the speedup on 4 cores and on 16 cores.

**Solution**:
4 cores: Speedup = 1 / (0.10 + 0.90/4) = 1 / (0.10 + 0.225) = 1 / 0.325 = 3.08.
16 cores: Speedup = 1 / (0.10 + 0.90/16) = 1 / (0.10 + 0.05625) = 1 / 0.15625 = 6.40.

## Summary

- Superscalar processors exploit ILP by issuing multiple instructions per cycle with out-of-order execution.
- VLIW shifts scheduling complexity from hardware to the compiler.
- Multi-core processors exploit TLP, requiring cache coherence and memory consistency mechanisms.
- GPUs achieve massive throughput through SIMT execution and thousands of lightweight cores.
- Speculative execution improves performance but introduces security vulnerabilities.

## Exercises

### Review Questions

1. What distinguishes superscalar from VLIW architectures?
2. Explain the purpose of a reorder buffer.
3. What is the difference between MSI and MESI cache coherence protocols?
4. How does GPU execution differ from CPU execution?
5. What vulnerability does speculative execution introduce?

### Application Problems

1. A 3-way superscalar processor has a program with ILP = 2.5. The base scalar CPI is 1.8. Calculate the superscalar CPI and speedup.

2. A GPU has 16 SMs with 128 CUDA cores each at 1.8 GHz. A workload has 85% occupancy (active warps per SM) and 60% ALU utilisation. Calculate the effective GFLOPS.

3. A program has a serial fraction of 8%. Apply Amdahl's law to compute the maximum possible speedup with infinite cores.

4. In a 4-core system using the MESI protocol, core 0 has address A in Modified state. Core 1 reads A. Trace all state transitions and bus transactions.

5. Compare the memory bandwidth utilisation of a vector processor with vector length 64 and a scalar processor for a 1024-element vector addition. Assume both processors run at 2 GHz and memory bandwidth is 50 GB/s.

### Challenge Problem

Design a simple out-of-order execution engine with register renaming for a 2-issue superscalar processor. The architectural register file has 8 registers (R0&ndash;R7). The physical register file has 16 registers (P0&ndash;P15). Describe:
a) The register mapping table structure
b) The free list management for physical registers
c) The reservation station organisation
d) The reorder buffer and commit logic
e) How precise exceptions are maintained

Show a worked example of the renaming process for the instruction sequence:
ADD R1, R2, R3
SUB R2, R1, R4
MUL R5, R1, R6
