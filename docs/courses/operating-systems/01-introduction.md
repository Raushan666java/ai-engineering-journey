# Chapter 1 — Introduction to Operating Systems

## Learning Objectives

1. Define the role of an operating system and distinguish it from application software.
2. Describe the evolution of operating systems from batch processing to distributed systems.
3. Explain the services an OS provides to users and programs.
4. Understand the system call interface and differentiate modes of execution (user vs. kernel).
5. Compare monolithic, microkernel, and hybrid OS structures.

## 1.1 What Is an Operating System?

An operating system is a layer of system software that manages computer hardware and provides a virtual machine abstraction to application programs. A computer system can be decomposed into four components: hardware (CPU, memory, I/O devices), the operating system, application programs, and users. The OS operates as an intermediary, controlling execution of programs and arbitrating access to shared resources.

The operating system has two primary responsibilities:

- **Resource management**: Allocating CPU time, memory space, storage capacity, and I/O bandwidth among competing processes.
- **Abstraction**: Presenting a clean, high-level interface that hides the complexity of the underlying hardware. For example, the file abstraction replaces raw disk sector addressing with named, randomly accessible byte sequences.

## 1.2 Evolution of Operating Systems

### 1.2.1 Batch Systems (1950s–1960s)

Early computers lacked an operating system. Programmers signed up for machine time, loaded their program via punch cards, and ran the machine exclusively until completion. The first OS software emerged to automate job sequencing: a resident monitor loaded one job after another, eliminating human intervention between runs. A job control language (JCL) specified resource requirements.

### 1.2.2 Multiprogramming (1960s–1970s)

When a running job waited for I/O, the CPU remained idle. Multiprogramming increased utilisation by keeping several jobs in memory simultaneously. While one job waited for I/O, the OS switched the CPU to another ready job. This required hardware support for memory protection and interrupt-driven I/O. The OS now had to schedule jobs, manage memory across multiple resident programs, and coordinate concurrent access to devices.

### 1.2.3 Timesharing (1970s–1980s)

Timesharing extended multiprogramming to provide interactive use. The CPU was shared among many users by rapidly switching between processes, giving each user the illusion of a dedicated machine. Response time became a primary metric. Timesharing introduced process scheduling with time quanta, demand paging for virtual memory, and file systems designed for interactive access. The UNIX operating system emerged in this era.

### 1.2.4 Distributed Systems (1980s–Present)

A distributed OS manages a collection of independent, networked computers as a single coherent system. Users see a unified resource namespace. Modern operating systems incorporate distributed features: network file systems (NFS), remote procedure calls, and clustering support. Cloud computing extends this model to data-centre scale, where hypervisors and container orchestrators manage vast resource pools.

## 1.3 Operating System Services

Operating systems provide a standard set of services accessible through system calls:

- **Process execution**: Load a program into memory, run it, handle its termination.
- **I/O operations**: Read and write files, communicate with devices.
- **File system manipulation**: Create, delete, read, write, and search files and directories.
- **Communication**: Exchange data between processes on the same machine (pipes, shared memory) or across a network (sockets).
- **Error detection**: Detect and respond to hardware failures, memory access violations, and invalid instructions.
- **Resource allocation**: Schedule CPU cycles, allocate memory, manage disk space.
- **Accounting**: Track resource usage for billing or profiling.
- **Protection and security**: Enforce access controls, authenticate users, isolate processes.

## 1.4 System Calls

A system call is the programmatic interface between a user-space application and the OS kernel. Applications request OS services by invoking library functions (e.g., `read()`, `write()`, `fork()`) that trap into kernel mode.

**Example** — The C standard library `printf()` ultimately calls `write()`:

```c
#include <unistd.h>
ssize_t write(int fd, const void *buf, size_t count);
```

When `write()` is called, the C library stub places arguments in fixed registers, triggers a software interrupt or `syscall` instruction, which switches the CPU to kernel mode. The kernel dispatches to the appropriate handler, performs the operation, and returns to user mode.

### 1.4.1 System Call Categories

| Category | Examples |
|----------|----------|
| Process control | `fork()`, `exec()`, `wait()`, `exit()` |
| File management | `open()`, `close()`, `read()`, `write()`, `lseek()` |
| Device management | `ioctl()`, `read()`, `write()` |
| Information maintenance | `getpid()`, `alarm()`, `time()` |
| Communication | `pipe()`, `shmget()`, `socket()`, `send()` |

## 1.5 Operating System Structure

### 1.5.1 Monolithic Structure

In a monolithic kernel, all OS services (scheduling, file system, networking, device drivers) run in kernel space with full hardware access. This provides excellent performance due to low intra-kernel call overhead but creates a large trusted computing base (TCB) — any driver bug can crash the entire system. Early UNIX and Linux use a monolithic design.

### 1.5.2 Microkernel Structure

A microkernel minimises the kernel to only essential mechanisms: address-space management, thread scheduling, and inter-process communication (IPC). All other services (file systems, networking, device drivers) run as user-space processes. This improves modularity and fault isolation — a crashed file server does not bring down the whole system — but IPC overhead can degrade performance. Examples: MINIX, QNX, L4, seL4.

### 1.5.3 Hybrid Structure

Modern operating systems adopt a hybrid approach, combining monolithic performance with microkernel modularity. The Linux kernel is monolithic but supports loadable kernel modules (LKMs) that can be inserted and removed at runtime. Windows NT uses a hybrid kernel with an executive layer, kernel-mode drivers, and user-mode subsystems. macOS X uses the XNU kernel (X is Not UNIX), which combines a Mach microkernel core with a monolithic BSD layer.

### 1.5.4 Layered Approach

A layered system is organised as a hierarchy of abstractions, where each layer depends only on the layer immediately below. The Hardware Abstraction Layer (HAL) hides platform-specific details; above it sit the kernel, system services, and applications. Layering simplifies design and verification at the cost of some performance due to layer-crossing overhead.

## 1.6 System Boot

When a computer is powered on, the OS must be loaded into memory. The bootstrap program (firmware BIOS or UEFI) locates the bootloader on a designated storage device, loads it into memory, and transfers control. The bootloader then loads the OS kernel. This process establishes the initial kernel data structures, detects hardware, and mounts the root filesystem before launching the first user-space process (init). The boot process is examined in detail in Chapter 18.

## 1.7 User Mode and Kernel Mode

The CPU provides at least two modes of operation:

- **Kernel mode** (supervisor mode, ring 0): The executing code has full access to all hardware and privileged instructions.
- **User mode** (ring 3 on x86): Execution is restricted; privileged instructions and direct hardware access cause traps.

The mode bit in the processor status register tracks the current mode. When a system call, interrupt, or exception occurs, the CPU switches to kernel mode; the OS handles the event and returns to user mode before resuming the application. This hardware-enforced separation is the foundation of OS security.

## 1.8 System Calls in Detail

The system-call mechanism is the sole entry point into the kernel from user space. On x86-64 Linux, system calls are made via the `syscall` instruction, which sets the register `rcx` to the return address and `r11` to `rflags`, then loads the kernel stack and jumps to a predefined entry point. The system-call number is passed in `rax`; arguments are passed in `rdi`, `rsi`, `rdx`, `r10`, `r8`, and `r9`. The kernel dispatches to the handler registered in the `sys_call_table` array. On return, `sysret` or `sysexit` restores user mode.

Parameter passing through registers (rather than the stack) avoids the overhead of memory access during the switch. This design is critical because system calls are frequent operations: a typical web server may perform thousands per second.

## Summary

The operating system manages hardware and provides abstractions that make computing practical. From batch monitors to distributed cloud platforms, OS design has evolved to maximise resource utilisation, support interactive use, and enforce security. System calls bridge user programs to kernel services. OS structure ranges from monolithic (fast, large TCB) to microkernel (modular, IPC overhead), with modern systems choosing pragmatic hybrids.

## Exercises

### Review Questions

1. What are the two primary roles of an operating system?
2. How does multiprogramming improve CPU utilisation over simple batch processing?
3. List four categories of system calls and give an example of each.
4. What is the difference between kernel mode and user mode, and why is it important?
5. Name two advantages and two disadvantages of a microkernel architecture.

### Application Problems

1. Consider a system with one CPU. A program performs a `read()` system call. Trace the sequence of mode switches, identifying where each switch occurs and what triggers it.
2. Compare the number of mode switches required for a file write in a monolithic kernel vs. a microkernel where the file server is a user-space process.
3. A batch system processes 100 jobs per hour with 40% CPU utilisation. After upgrading to multiprogramming with degree 4, utilisation rises to 85%. What is the throughput in jobs per hour? (Assume CPU-bound jobs.)

### Challenge Problem

1. Design a minimal set of system calls sufficient to implement a UNIX-like shell. Justify each call by identifying which shell operations it enables. Provide signatures and semantics for your proposed calls.
