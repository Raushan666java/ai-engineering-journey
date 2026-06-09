# Chapter 2 — Processes

## Learning Objectives

1. Define the process abstraction and distinguish a process from a program.
2. Describe the process control block and its role in context switching.
3. Illustrate the five-state process model and transitions.
4. Implement process creation using `fork()` and `exec()`.
5. Explain the mechanisms for inter-process communication.

## 2.1 The Process Concept

A **process** is a program in execution. While a program is a passive collection of instructions stored on disk, a process is an active entity with its own address space, register state, and system resources. The operating system multiplexes execution across many processes, giving each the illusion of owning the CPU.

A process in memory comprises four segments:

- **Text section**: The compiled machine code (read-only, sharable).
- **Data section**: Global and static variables (initialised and uninitialised BSS).
- **Heap**: Dynamically allocated memory (grows upward via `malloc`/`sbrk`).
- **Stack**: Local variables, function arguments, return addresses (grows downward).

## 2.2 Process Control Block

The OS represents each process with a **process control block (PCB)**, also called a task struct. The PCB is the kernel's data structure for tracking process state. It contains:

| Field | Description |
|-------|-------------|
| Process ID (PID) | Unique numeric identifier |
| State | Running, ready, blocked, etc. |
| Program counter | Address of next instruction to execute |
| CPU registers | Saved context for the process |
| Memory limits | Base and limit registers, page table pointer |
| Open files | Array of file descriptors |
| Scheduling info | Priority, queue pointers, CPU burst data |
| Accounting | CPU time used, process creation time |

## 2.3 Process States

The canonical five-state model:

```
         ┌──────────────────────────────┐
         │         NEW                  │
         └───────────┬──────────────────┘
                     │ admit
                     ▼
         ┌──────────────────────────────┐
   ┌─────│          READY               │◄──────────────┐
   │     └───────────┬──────────────────┘               │
   │                 │ schedule (dispatch)               │
   │                 ▼                                   │
   │     ┌──────────────────────────────┐               │
   │     │         RUNNING             │────┐           │
   │     └───────────┬──────────────────┘   │           │
   │                 │                      │ I/O or    │
   │                 │ preempt              │ event     │
   │                 ▼                      │ wait      │
   │     ┌──────────────────────────────┐   │           │
   │     │         READY               │◄──┘           │
   │     └──────────────────────────────┘               │
   │                                                    │
   │     ┌──────────────────────────────┐               │
   │     │       BLOCKED (WAITING)      │───────────────┘
   │     └──────────────────────────────┘   I/O complete
   │                 │                      or event occurs
   │                 │ exit
   │                 ▼
   │     ┌──────────────────────────────┐
   └─────│       TERMINATED             │
         └──────────────────────────────┘
```

- **New**: The process is being created.
- **Ready**: The process is loaded into memory and is waiting to be assigned to the CPU.
- **Running**: Instructions are being executed on the CPU.
- **Blocked** (or waiting): The process is waiting for some event (I/O completion, signal).
- **Terminated**: The process has finished execution.

Operating systems may add states such as **suspended ready** and **suspended blocked** to support swapping processes out of memory.

## 2.4 Context Switch

A context switch is the mechanism by which the OS suspends one process and resumes another. When a context switch occurs:

1. The CPU's current register state (program counter, stack pointer, general-purpose registers) is saved into the PCB of the running process.
2. The PCB of the next process to run is loaded into the CPU registers.
3. The memory-management unit (MMU) is reconfigured to point to the new process's page table.
4. Execution resumes at the new process's saved program counter.

Context switching is pure overhead — the CPU does no useful work during the switch. The switch time depends on hardware support (hardware context switching on some architectures) and is typically in the range of 1–10 microseconds.

## 2.5 Process Creation: fork() and exec()

In UNIX-like systems, process creation occurs through the `fork()`–`exec()` pair.

### 2.5.1 fork()

The `fork()` system call creates a new process (the child) by duplicating the calling process (the parent). After `fork()`, both processes execute the next instruction. `fork()` returns the child's PID to the parent and 0 to the child.

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    
    if (pid < 0) {
        perror("fork failed");
        return 1;
    } else if (pid == 0) {
        printf("Child process: PID = %d\n", getpid());
    } else {
        printf("Parent process: child PID = %d\n", pid);
    }
    return 0;
}
```

The child inherits copies of the parent's address space, open file descriptors, signal handlers, and environment variables. Modern implementations use **copy-on-write (COW)** semantics to avoid immediately copying the entire address space; physical memory pages are shared until one process writes to them.

### 2.5.2 exec()

The `exec()` family of system calls replaces the current process's address space with a new program image. The PID does not change, but all prior code, data, stack, and heap are discarded.

```c
#include <unistd.h>

int main() {
    pid_t pid = fork();
    if (pid == 0) {
        char *args[] = {"/bin/ls", "-l", NULL};
        execvp(args[0], args);
        perror("exec failed"); // only reached if exec fails
    }
    return 0;
}
```

The `wait()` system call allows the parent to block until the child terminates, collecting its exit status.

### 2.5.3 Zombies and Orphans

If the parent does not `wait()` for a child, the child's PCB persists after termination — the process becomes a **zombie**. Zombies consume only PCB space. If the parent terminates before the child, the child becomes an **orphan** and is adopted by the `init` process (PID 1), which periodically reaps orphaned children.

## 2.6 Inter-Process Communication (IPC)

Processes may communicate through message-based or memory-based mechanisms.

### 2.6.1 Pipes

A pipe is a unidirectional communication channel. The `pipe()` system call creates a pair of file descriptors: `fd[0]` for reading and `fd[1]` for writing.

```c
int fd[2];
pipe(fd);
pid_t pid = fork();
if (pid == 0) {
    close(fd[1]);          // close write end
    read(fd[0], buf, len); // read from pipe
} else {
    close(fd[0]);          // close read end
    write(fd[1], data, len);
}
```

**Named pipes** (FIFOs) persist in the file system and allow unrelated processes to communicate.

### 2.6.2 Message Queues

A message queue is a linked list of messages managed by the kernel. Processes send and receive typed messages without a direct connection. The System V API uses `msgget()`, `msgsnd()`, and `msgrcv()`.

### 2.6.3 Shared Memory

Shared memory is the fastest IPC mechanism: multiple processes map the same physical memory pages into their address spaces. The POSIX API uses `shm_open()` and `mmap()`. Synchronisation (semaphores or mutexes) is required to prevent race conditions.

### 2.6.4 Sockets

A socket is an endpoint for communication across a network or within the same host (UNIX domain sockets). The socket API (`socket()`, `bind()`, `listen()`, `connect()`, `send()`, `recv()`) enables bidirectional communication between processes on the same or different machines.

## Summary

A process is the OS unit of execution, described by a PCB and transitioning through well-defined states. Context switching enables multiprogramming. `fork()` and `exec()` provide a clean process-creation model. IPC mechanisms — pipes, message queues, shared memory, and sockets — enable inter-process data exchange with varying performance and complexity trade-offs.

## Exercises

### Review Questions

1. What four memory segments constitute a process's address space?
2. List five fields stored in a process control block.
3. Draw and label the five-state process model, including all valid transitions.
4. Why is copy-on-write desirable in `fork()` implementation?
5. What is a zombie process? How does it arise, and how is it cleaned up?

### Application Problems

1. A system performs 2000 context switches per second. Each switch requires 8 microseconds. What percentage of CPU time is consumed by context switching?
2. Write a C program that creates a child process using `fork()`. The child should execute `ls -la` after printing its own PID. The parent should wait for the child and print the child's exit status.
3. Two processes communicate via shared memory. One writes an array of 1000 integers; the other reads it. Estimate the time difference between this method and a pipe-based transfer for 1000 integers. Assume the context switch time is 5 microseconds.

### Challenge Problem

1. Implement a bounded buffer using shared memory and a named semaphore. The producer reads lines from stdin and writes them into the buffer; the consumer reads lines from the buffer and writes them to stdout. Handle the case where the producer receives EOF. Allocate the shared memory segment using `shm_open()` and `mmap()`.
