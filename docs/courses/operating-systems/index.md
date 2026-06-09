# Operating Systems — A Comprehensive Textbook

## Course Description

This textbook provides a rigorous, bottom-up exploration of modern operating systems — the software layer that mediates between hardware and applications. From boot sequences to virtual memory, from process scheduling to file systems, each chapter builds on the last to give you a complete mental model of how an OS works.

Operating systems are the ultimate exercise in resource management: CPU cycles, memory pages, disk sectors, network packets, and security policies must be orchestrated so that hundreds of processes _feel_ like they have the machine to themselves. By the end of this course, you will understand not only _what_ an OS does but _why_ it does it — the trade-offs, the algorithms, the data structures, and the hardware constraints that shape every design decision.

## Prerequisites

- **Computer architecture basics**: CPU, memory hierarchy, interrupts, I/O buses
- **Data structures**: queues, linked lists, hash tables, trees
- **C programming**: pointers, memory management, system calls
- **Basic understanding of assembly**: registers, stack, instruction execution

## How to Use This Textbook

Each chapter follows a consistent structure:

1. **Learning Objectives** — what you should be able to do after reading
2. **Theory** — the concepts, algorithms, and reasoning (with subsections)
3. **Examples** — concrete code snippets, diagrams, and walkthroughs
4. **Summary** — key takeaways in condensed form
5. **Exercises** — tiered by difficulty: Basic, Intermediate, Advanced

Code examples are written in C with POSIX system calls unless otherwise noted. All examples are pedagogical — they illustrate the concept, not production robustness.

## Chapter List

### Part I: Foundations

| # | Chapter | Topics |
|---|---------|--------|
| 1 | [Introduction to Operating Systems](01-introduction.md) | OS definition, types (batch, time-sharing, distributed, real-time), history, system calls, OS structures |
| 2 | [Processes](02-processes.md) | Process concept, process states, PCB, context switching, process creation/termination, IPC |
| 3 | [CPU Scheduling](03-cpu-scheduling.md) | FCFS, SJF, SRTF, Priority, Round Robin, Multilevel Queue, Multilevel Feedback Queue |
| 4 | [Threads](04-threads.md) | Thread models, user vs kernel threads, multithreading models (many-to-one, one-to-one, many-to-many), thread libraries (POSIX, Java) |

### Part II: Concurrency

| # | Chapter | Topics |
|---|---------|--------|
| 5 | [Process Synchronization](05-synchronization.md) | Race conditions, critical section problem, Peterson's solution, mutex locks, semaphores, hardware support |
| 6 | [Semaphores & Monitors](06-semaphores-monitors.md) | Classic synchronization problems (bounded buffer, readers-writers, dining philosophers), monitors, condition variables |
| 7 | [Deadlocks](07-deadlocks.md) | Deadlock characterization (necessary conditions), resource-allocation graphs, prevention, avoidance (Banker's algorithm), detection, recovery |

### Part III: Memory Management

| # | Chapter | Topics |
|---|---------|--------|
| 8 | [Memory Management](08-memory-management.md) | Contiguous allocation, dynamic partitioning, paging, page tables, segmentation, TLB |
| 9 | [Virtual Memory](09-virtual-memory.md) | Demand paging, page replacement (FIFO, Optimal, LRU, Second-Chance), thrashing, working-set model, allocation |

### Part IV: Storage

| # | Chapter | Topics |
|---|---------|--------|
| 10 | [File Systems](10-file-systems.md) | File concepts, access methods (sequential, direct), directory structures, file system mounting, file sharing |
| 11 | [File System Implementation](11-file-system-impl.md) | File system layout, allocation methods (contiguous, linked, indexed), free-space management, efficiency/performance |
| 12 | [Secondary Storage](12-secondary-storage.md) | Disk scheduling (FCFS, SCAN, C-SCAN, LOOK), disk management, RAID structure and levels |
| 13 | [I/O Systems](13-io-systems.md) | I/O hardware (ports, buses, controllers), polling vs interrupts, DMA, kernel I/O subsystem, buffering, caching, spooling |

### Part V: Advanced Topics

| # | Chapter | Topics |
|---|---------|--------|
| 14 | [Linux Kernel Internals](14-linux-kernel.md) | Linux process/thread model (clone), O(1) and CFS schedulers, memory management (buddy allocator, slab), VFS, /proc filesystem |
| 15 | [Shell Scripting](15-shell-scripting.md) | Shell types, variables, control flow, pipes, redirection, job control, signal handling, practical scripts |
| 16 | [Security](16-security.md) | Authentication, authorization, access control (DAC, MAC, RBAC), encryption, SELinux, Linux Security Modules |
| 17 | [Virtualization](17-virtualization.md) | Hypervisors (Type 1 vs Type 2), container vs VM, hardware-assisted virtualization (Intel VT-x, AMD-V), paravirtualization |
| 18 | [Case Studies](18-case-studies.md) | Windows NT kernel, Linux kernel, macOS/XNU, real-time OS (FreeRTOS), microkernel comparison |

## Supplementary Resources

- **Recommended OS**: Linux (Ubuntu/Debian/Fedora) — all examples target POSIX
- **Recommended text**: _Operating System Concepts_ (Silberschatz, Galvin, Gagne) — the "Dinosaur Book"
- **Additional**: _Modern Operating Systems_ (Tanenbaum), _Linux Kernel Development_ (Love)
- **Online**: OSDev Wiki (osdev.org), Linux man pages (man7.org), The Linux Kernel documentation (kernel.org/doc)

## Conventions Used

```
Code blocks like this indicate terminal commands or C source code
```

`Inline code` denotes function names, system calls, or file paths

> **Note**: Callout boxes highlight important nuances or common pitfalls

> **Warning**: These flag potential bugs or security-sensitive patterns

---

*Last updated: June 2026*
