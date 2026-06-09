# Operating Systems — Complete Textbook

## Course Overview

This textbook provides a comprehensive treatment of modern operating systems, spanning fundamental principles through advanced implementation topics. The material is organised to support a rigorous one- or two-semester university course at the undergraduate level. Each chapter integrates theoretical exposition with concrete worked examples, pseudocode algorithms, and exercises calibrated to three tiers of difficulty.

An operating system is the most critical software layer on any computing device. It manages hardware resources, provides abstractions that simplify application development, enforces security and isolation policies, and delivers the illusion of infinite, exclusive access to finite, shared resources. Understanding how operating systems achieve these goals is essential knowledge for any serious computer scientist or software engineer.

## Prerequisites

- Proficiency in C or a systems programming language
- Basic computer architecture (CPU, memory hierarchy, buses, interrupts)
- Data structures (queues, lists, trees, hash tables)

## Chapter List

### Part I — Foundations

| # | Chapter | Topics |
|---|---------|--------|
| 1 | Introduction | OS definition, system calls, OS structures |
| 2 | Processes | PCB, states, fork/exec, IPC mechanisms |
| 3 | CPU Scheduling | FCFS, SJF, Round Robin, CFS |
| 4 | Threads | User/kernel threads, pthreads, thread pools |
| 5 | Synchronization | Race conditions, Peterson's, hardware primitives |
| 6 | Semaphores & Monitors | Classic synchronisation problems, condition variables |
| 7 | Deadlocks | RAG, prevention, avoidance, detection |

### Part II — Memory

| # | Chapter | Topics |
|---|---------|--------|
| 8 | Memory Management | Paging, segmentation, TLB |
| 9 | Virtual Memory | Demand paging, page replacement, thrashing |

### Part III — Storage

| # | Chapter | Topics |
|---|---------|--------|
| 10 | File Systems | File concepts, directories, mounting |
| 11 | File System Implementation | i-nodes, journaling, free-space management |
| 12 | Secondary Storage | Disk scheduling, RAID, swap |
| 13 | I/O Systems | Polling, DMA, device drivers |

### Part IV — Advanced Topics

| # | Chapter | Topics |
|---|---------|--------|
| 14 | Linux Kernel | task_struct, buddy allocator, VFS |
| 15 | Shell Scripting | Bash, pipes, job control, process monitoring |
| 16 | Security | Access control, SELinux, encryption |
| 17 | Virtualization | Hypervisors, containers, Docker, Kubernetes |
| 18 | Case Studies | Linux boot, Windows NT, Android, RTOS |

## How to Use This Textbook

Each chapter begins with **Learning Objectives** and concludes with three exercise tiers:

- **Review Questions** test recall of definitions and concepts.
- **Application Problems** require analysis, calculation, or small code fragments.
- **Challenge Problems** explore deeper extensions suitable for projects or examinations.

Pseudocode appears in a C-like dialect. Full C code fragments are included where the implementation details are instructive. Mathematical notation follows standard algorithm-analysis conventions.

## Recommended Reading

- Silberschatz, Galvin, Gagne. *Operating System Concepts*, 10th Edition.
- Tanenbaum, Bos. *Modern Operating Systems*, 5th Edition.
- Love. *Linux Kernel Development*, 3rd Edition.
- McKusick, Neville-Neil, Watson. *The Design and Implementation of the FreeBSD Operating System*, 2nd Edition.
