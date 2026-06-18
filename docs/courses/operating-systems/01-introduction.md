# Chapter 1: Introduction to Operating Systems

## Learning Objectives

- Define an operating system and explain its role as a resource manager
- Trace the historical evolution from batch to modern OS
- Distinguish among batch, time-sharing, distributed, real-time, and embedded OS types
- Describe the services an OS provides to users and programs
- Explain system calls and differentiate standard APIs from actual system calls
- Compare OS structures: monolithic, microkernel, layered, modular, hybrid

## Theory

![OS Components](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/01-introduction.png)

### What is an Operating System?

An operating system is system software that manages computer hardware and software resources and provides common services for computer programs. Every general-purpose computer must have an OS to run other programs. The OS acts as an intermediary between users/applications and the hardware.

Two primary views exist:

1. **Resource allocator** â€” The OS manages all resources (CPU, memory, I/O devices) and decides between competing requests for efficient and fair use.
2. **Control program** â€” The OS controls execution of user programs to prevent errors and improper use of the computer.

### Operating System Functions

At its core, an OS performs these functions:

- **Process management**: Creating, scheduling, and terminating processes; synchronizing and communicating between processes
- **Memory management**: Allocating and deallocating memory; tracking which parts are in use; handling virtual memory
- **File system management**: Organizing files into directories; controlling access; managing disk space
- **I/O system management**: Buffering, caching, and interfacing with device drivers
- **Protection and security**: Controlling access to resources; authenticating users; defending against threats
- **Networking**: Implementing protocols and providing interfaces for network communication

### History of Operating Systems

#### Phase 1: Batch Systems (1940sâ€“1950s)

Early computers (ENIAC, UNIVAC) had no OS. Programmers interacted directly with the hardware using switches and paper tape. The first OS appeared in the 1950s with the GM-NAA I/O system for the IBM 701.

Batch systems collected jobs (programs + data) into batches. A resident monitor loaded and executed them sequentially. When one job finished, the monitor loaded the next. This eliminated significant setup time but offered no interactivity.

#### Phase 2: Multiprogramming (1960s)

Multiprogramming improved CPU utilization by keeping multiple jobs in memory simultaneously. While one job waited for I/O, the CPU switched to another. This required interrupt hardware and memory protection.

IBM's OS/360 (1964) was a landmark multiprogramming system â€” and also famously one of the most complex software projects ever attempted (Fred Brooks wrote _The Mythical Man-Month_ about it).

#### Phase 3: Time-Sharing (1970s)

Time-sharing extended multiprogramming to provide interactive computing. The CPU rapidly switched between users, giving each the illusion of a dedicated machine.

CTSS (MIT, 1961) and Multics (MIT/Bell Labs/GE, 1965) pioneered time-sharing. Unix (Ken Thompson and Dennis Ritchie, 1970s) evolved from Multics and became the foundation of modern OS design.

#### Phase 4: Personal Computing (1980s)

Microprocessors made personal computers viable. CP/M, MS-DOS (Microsoft, 1981), and early Mac OS (1984) brought OS to desktops. These were simpler â€” single-user, single-task â€” but introduced graphical user interfaces (GUIs) to the mainstream.

#### Phase 5: Modern Era (1990sâ€“Present)

Linux (Linus Torvalds, 1991) brought Unix-like power to PCs as free software. Windows NT (1993) provided a true, portable OS core. Mobile OS (iOS, Android) adapted kernel designs for resource-constrained, touch-based devices. Cloud and container OS (VMware ESXi, Linux containers) abstract entire machines.

### Types of Operating Systems

#### Batch OS

Jobs with similar needs are batched together. No direct user interaction during execution. Used in early mainframes. **Advantage**: efficient for high-volume similar jobs. **Disadvantage**: poor turnaround, hard to debug.

#### Time-Sharing OS

CPU time is sliced into quanta and distributed among users. Response time is short. Each user feels they own the machine. **Examples**: Unix, Linux, Windows, macOS.

#### Distributed OS

Manages a group of independent computers and makes them appear as a single computer. Resources are shared across a network. **Challenges**: synchronization, fault tolerance, transparency. **Examples**: Amoeba, Sprite, Plan 9.

#### Real-Time OS (RTOS)

Guarantees that critical tasks complete within a strict time bound. Two subtypes:

- **Hard real-time**: Missing a deadline is catastrophic (aircraft control, medical devices)
- **Soft real-time**: Missing deadlines degrades quality but does not cause failure (multimedia, games)

**Examples**: FreeRTOS, VxWorks, QNX.

#### Embedded OS

Designed for devices with limited resources (sensors, smart appliances, IoT). Often runs on ROM, has minimal footprint. **Examples**: Embedded Linux, Windows IoT, TinyOS.

### System Calls

A system call is a programmatic way for a user-space program to request a service from the OS kernel. System calls provide the interface between a process and the OS.

#### System Call Categories

1. **Process control**: `fork()`, `exec()`, `exit()`, `waitpid()`
2. **File management**: `open()`, `read()`, `write()`, `close()`, `lseek()`
3. **Device management**: `ioctl()`, `read()`, `write()`
4. **Information maintenance**: `getpid()`, `alarm()`, `sleep()`
5. **Communication**: `pipe()`, `shmget()`, `msgget()`, `socket()`

#### System Call Flow

1. User program invokes an API function (e.g., `printf()`)
2. The C library (`libc`) places arguments in registers and triggers a trap/interrupt
3. The CPU switches to kernel mode, saves the user process state
4. The kernel's system call handler dispatches to the appropriate service routine
5. The service routine executes in kernel mode
6. Control returns to the user program, CPU switches back to user mode

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();  // system call â€” creates a new process

    if (pid == 0) {
        // Child process
        printf("Child PID: %d\n", getpid());  // getpid() is another system call
    } else if (pid > 0) {
        // Parent process
        printf("Parent created child PID: %d\n", pid);
        wait(NULL);  // system call â€” wait for child to finish
    } else {
        perror("fork failed");
    }

    return 0;
}
```

#### API vs System Call

Most programs use an **API** (Application Programming Interface) rather than invoking system calls directly. The C standard library provides wrapper functions that make the system call on your behalf. The API call `printf()` eventually triggers the `write()` system call.

### Operating System Structures

#### Monolithic Kernel

The entire OS runs in kernel space as a single large program. All components share the same memory space. **Pro**: high performance due to fast communication. **Con**: a bug in any component crashes the entire system.

**Example**: Linux, traditional Unix, MS-DOS.

#### Microkernel

The kernel is minimized to essential functions (IPC, basic scheduling, low-level memory management). Most services (file systems, device drivers, networking) run as user-space processes. **Pro**: reliability, security, easier maintenance. **Con**: performance overhead from IPC.

**Example**: Mach (the foundation of macOS/XNU), MINIX, QNX.

#### Layered Approach

The OS is divided into layers, each built on top of the layer below. Layer 0 is hardware; layer N is the user interface. Each layer only uses services from the layer immediately below. **Pro**: modularity, abstraction. **Con**: less efficient, hard to define clean layers.

**Example**: THE system (Dijkstra, 1968), Venus.

#### Modular Kernel (Hybrid)

Modern kernels combine monolithic and microkernel ideas. The kernel is a core with loadable modules (device drivers, file systems, protocol stacks). Modules run in kernel space but can be loaded/unloaded dynamically.

**Example**: Linux (loadable kernel modules), Windows NT.

```
+-------------------------------------------+
|  User Applications  |  Shell  |  GUIs     |
+-------------------------------------------+
|         System Libraries (libc)            |
+-------------------------------------------+
|         System Call Interface              |
+-------------------------------------------+
|  Process   | Memory   | File    | Network |
|  Manager   | Manager  | System  | Stack   |
|            |          |         |         |
|     Scheduler    |    | Device Drivers    |
|     IPC          |    | I/O Manager       |
+-------------------------------------------+
|      Hardware Abstraction Layer           |
+-------------------------------------------+
|              Hardware                      |
+-------------------------------------------+
```

## Examples

### Example 1: Tracing System Calls with strace

The `strace` tool on Linux shows every system call a program makes:

```bash
$ strace -c ls /tmp
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
  0.00    0.000000           0         5           read
  0.00    0.000000           0         1           write
  0.00    0.000000           0        11           openat
  0.00    0.000000           0        11           close
  0.00    0.000000           0         7           fstat
  0.00    0.000000           0        18           mmap
  0.00    0.000000           0         4           mprotect
  0.00    0.000000           0         2           munmap
  0.00    0.000000           0         3           brk
  0.00    0.000000           0         2           ioctl
  0.00    0.000000           0         1           getdents64
  0.00    0.000000           0         1           set_tid_address
  0.00    0.000000           0        12           newfstatat
  0.00    0.000000           0         1           set_robust_list
------ ----------- ----------- --------- --------- ----------------
100.00    0.000000                    79           total
```

Even a simple `ls` command makes nearly 80 system calls!

### Example 2: Kernel vs User Mode

Processors support at least two privilege levels:

- **User mode**: Restricted access â€” cannot execute privileged instructions, cannot access kernel memory
- **Kernel mode**: Full access â€” can execute any instruction, access any memory

On x86, these are implemented via protection rings (Ring 0 = kernel, Ring 3 = user). The `syscall` instruction (or `int 0x80` on older systems) transitions from user to kernel mode.

```c
// This code will crash in user mode because it tries
// to execute a privileged instruction directly
#include <stdio.h>

int main() {
    // Attempt to modify the interrupt descriptor table
    // This would cause a segmentation fault in user mode
    printf("About to attempt privileged operation...\n");

    // Halt instruction â€” only valid in kernel mode
    __asm__("hlt");

    printf("This line never executes\n");
    return 0;
}
```

## Summary

- An operating system manages hardware resources and provides services to user programs
- OS history progressed from batch (no interactivity) through multiprogramming to time-sharing to modern systems
- Major OS types: batch, time-sharing, distributed, real-time (hard/soft), embedded
- System calls are the interface between user programs and the kernel â€” they switch to kernel mode
- OS structures vary: monolithic (Linux), microkernel (MINIX), layered, modular (hybrid)
- Key abstractions: processes, files, virtual memory, and the system call interface
- The API is not the system call â€” the library wraps the system call for convenience and portability

## Exercises

### Basic

1. List five services an OS provides and explain why each is necessary.
2. What is the difference between user mode and kernel mode? Why does this distinction exist?
3. Use `strace` on your system to trace any command (`ls`, `cat`, `echo`). Identify five different system calls and their purposes.

### Intermediate

4. Compare batch processing with time-sharing. What hardware features made time-sharing possible?
5. Explain the sequence of events from a user calling `printf()` to characters appearing on the terminal. List every OS component involved.
6. A monolithic kernel is faster but less reliable than a microkernel. If you were designing an OS for a spacecraft, which would you choose? Justify your answer.

### Advanced

7. Research the Mach microkernel that underpins macOS/XNU. Identify which OS services run in user space and which remain in the kernel. Why does Apple still call XNU a "hybrid" kernel?
8. The HAL (Hardware Abstraction Layer) allows Windows NT to run on x86, ARM, and Itanium. Design a minimal HAL interface (5â€“8 functions) that would let a kernel scheduler operate without knowing the underlying CPU architecture.
9. Write a short C program that uses `fork()`, `exec()`, and `waitpid()` to create a simple job-control shell that runs a command, reports its exit status, and prints resource usage from `getrusage()`.
