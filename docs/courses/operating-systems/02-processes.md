# Chapter 2: Processes

## Learning Objectives

- Define a process and differentiate it from a program
- Describe the five-state process model and transitions
- Explain the structure and contents of a Process Control Block
- Understand context switching and its overhead
- Implement process creation and termination using Unix system calls
- Compare interprocess communication methods: shared memory and message passing
- Distinguish between independent and cooperating processes

## Theory

### Process Concept

A **process** is an instance of a program in execution. While a program is a passive entity (a file on disk), a process is active — it has a program counter, register values, a stack, and data sections.

The key insight: **one program can produce many processes**. Opening three terminal windows running `bash` creates three processes from the same binary.

### Process in Memory

A process occupies memory divided into four sections:

```
+------------------+  high address
|      Stack       |  Local variables, function parameters, return addresses
|       ↓          |
|       ↑          |
|      Heap        |  Dynamically allocated memory (malloc, new)
+------------------+
|      Data        |  Global and static variables
+------------------+
|      Text        |  Program code (machine instructions)
+------------------+  low address
```

- **Text section**: Contains compiled binary code. Read-only to prevent accidental modification.
- **Data section**: Global and static variables (BSS for uninitialized data, initialized data segment).
- **Heap**: Dynamically allocated memory — grows upward toward higher addresses.
- **Stack**: Function call frames, local variables — grows downward.

### Process States

A process transitions through a series of states during its lifetime. The classic **five-state model**:

```
         ┌──────────────────────────────┐
         │          NEW                  │
         └──────────────┬───────────────┘
                        │ admitted
                        ↓
         ┌──────────────────────────────┐
    ┌───│          READY                │◄──────────────┐
    │   └──────────────┬───────────────┘                │
    │                  │ scheduler dispatch             │
    │                  ↓                                │
    │   ┌──────────────────────────────┐                │
    │   │         RUNNING              │                │
    │   └──────┬───────────────┬───────┘                │
    │          │               │                        │
    │   I/O or event wait   interrupt                  │
    │          │               │                        │
    │          ↓               └────────────────────────┘
    │   ┌──────────────────────────────┐
    │   │         WAITING (BLOCKED)    │
    │   └──────────────┬───────────────┘
    │                  │ I/O or event completion
    └──────────────────┘
    
         ┌──────────────────────────────┐
         │        TERMINATED            │
         └──────────────────────────────┘
```

1. **New**: Process is being created
2. **Ready**: Process is in memory, waiting to be assigned to CPU
3. **Running**: Instructions are being executed on the CPU
4. **Waiting (Blocked)**: Process is waiting for some event (I/O completion, signal)
5. **Terminated**: Process has finished execution

### Process Control Block (PCB)

The OS maintains a **Process Control Block** for every process — a data structure that holds all information needed to manage that process. Also known as a task control block.

**PCB contents**:

| Field | Description |
|-------|-------------|
| Process ID (PID) | Unique integer identifier |
| Program counter | Address of the next instruction to execute |
| CPU registers | All registers saved during context switch (accumulators, index registers, stack pointer, etc.) |
| CPU scheduling info | Priority, scheduling queue pointers, any scheduling parameters |
| Memory management | Page tables, segment tables, memory limits |
| Accounting info | CPU time used, time limits, account numbers, process number |
| I/O status | List of open files, I/O requests, allocated devices |

On Linux, the PCB is the `task_struct` structure in `<linux/sched.h>`. It contains hundreds of fields.

### Context Switch

When the OS switches from one process to another, it must save the state of the currently running process and restore the saved state of the next process. This is called a **context switch**.

```
Process P0                    Scheduler                   Process P1
   │                             │                            │
   │         running             │                            │
   │◄────────────────────────────►                            │
   │                      interrupt or system call            │
   │                             │                            │
   │                    save state of P0                      │
   │                    into PCB₀                             │
   │                             │                            │
   │                    reload state of P1                    │
   │                    from PCB₁                             │
   │                             │                            │
   │                             │          running           │
   │◄────────────────────────────►                            │
```

**Context switch time is pure overhead** — the CPU does no useful work during a switch. Typical switch time is 1–10 microseconds (thousands of cycles). Modern systems may do hundreds or thousands of context switches per second.

### Process Creation

Processes create other processes via system calls. On Unix: `fork()`. On Windows: `CreateProcess()`.

#### Unix fork-exec Pattern

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        // Fork failed
        perror("fork");
        return 1;
    }

    if (pid == 0) {
        // CHILD PROCESS
        printf("Child: My PID = %d, Parent PID = %d\n", getpid(), getppid());

        // Replace child process with a new program
        char *args[] = {"/bin/echo", "Hello from exec!", NULL};
        execvp("/bin/echo", args);

        // If exec fails, we reach here
        perror("exec failed");
        return 1;
    } else {
        // PARENT PROCESS
        printf("Parent: Created child PID = %d\n", pid);

        int status;
        waitpid(pid, &status, 0);

        if (WIFEXITED(status)) {
            printf("Child exited with status %d\n", WEXITSTATUS(status));
        }
    }

    return 0;
}
```

**fork()** creates an almost exact copy of the calling process. The child gets a copy of the parent's address space, file descriptors, and signal handlers. The difference: `fork()` returns the child's PID to the parent and 0 to the child.

**exec()** replaces the current process's memory with a new program. The PID does not change, but the text, data, heap, and stack are completely replaced.

### Process Termination

A process terminates when:

- It calls `exit()` (normal termination)
- It returns from `main()` (implicit exit)
- It receives a signal it cannot handle (e.g., SIGKILL)
- It causes an unrecoverable error (segmentation fault)

When a process terminates, the OS:

1. Releases all resources (memory, open files, I/O buffers)
2. Records termination status in the parent's wait queue
3. Removes the process from all scheduling queues
4. The process becomes a **zombie** until the parent calls `wait()`

**Zombie process**: A terminated process whose parent has not yet called `wait()`. The PCB is retained so the parent can read the exit status. Zombies consume minimal resources (just the PCB) but a leak of zombies can exhaust the PID table.

**Orphan process**: A process whose parent terminates before the child. Orphans are adopted by the `init` process (PID 1), which periodically calls `wait()` to clean them up.

### Interprocess Communication (IPC)

Processes can communicate via two primary mechanisms:

#### Shared Memory

A region of memory is shared between processes. Once mapped, data written by one process is immediately visible to others. This is the fastest IPC method (no kernel involvement after setup).

```c
// Producer process — simplified shared memory example
#include <stdio.h>
#include <sys/shm.h>
#include <sys/ipc.h>
#include <string.h>

#define SHM_SIZE 1024

int main() {
    key_t key = ftok("shmfile", 65);
    int shmid = shmget(key, SHM_SIZE, IPC_CREAT | 0666);

    char *data = (char *)shmat(shmid, NULL, 0);

    strcpy(data, "Hello from producer!");
    printf("Producer wrote: %s\n", data);

    shmdt(data);
    return 0;
}
```

```c
// Consumer process
#include <stdio.h>
#include <sys/shm.h>
#include <sys/ipc.h>

#define SHM_SIZE 1024

int main() {
    key_t key = ftok("shmfile", 65);
    int shmid = shmget(key, SHM_SIZE, IPC_CREAT | 0666);

    char *data = (char *)shmat(shmid, NULL, 0);

    printf("Consumer read: %s\n", data);

    shmdt(data);
    shmctl(shmid, IPC_RMID, NULL);  // Remove shared memory
    return 0;
}
```

#### Message Passing

Processes communicate by exchanging messages through the kernel. Messages are sent and received via system calls. No shared address space is needed — making this suitable for distributed systems.

```c
#include <stdio.h>
#include <sys/msg.h>
#include <sys/ipc.h>
#include <string.h>

struct msg_buffer {
    long msg_type;
    char msg_text[100];
};

int main() {
    key_t key = ftok("msgfile", 65);
    int msgid = msgget(key, IPC_CREAT | 0666);

    // Send a message
    struct msg_buffer message;
    message.msg_type = 1;
    strcpy(message.msg_text, "Hello via message queue!");
    msgsnd(msgid, &message, sizeof(message.msg_text), 0);

    printf("Message sent: %s\n", message.msg_text);

    return 0;
}
```

| Feature | Shared Memory | Message Passing |
|---------|---------------|-----------------|
| Speed | Fast (no kernel involvement after setup) | Slower (kernel copies messages) |
| Synchronization | Explicit (mutex/semaphore needed) | Implicit via blocking send/receive |
| Complexity | Higher (must manage synchronization) | Lower (kernel manages buffers) |
| Distributed support | No (requires shared physical memory) | Yes (works across network) |

### Cooperating Processes

Processes are **independent** if they cannot affect or be affected by other processes. They are **cooperating** if they can interact. Reasons for cooperation:

- **Information sharing**: Multiple users accessing the same database
- **Computation speedup**: Breaking a task into sub-tasks running in parallel
- **Modularity**: Separate components for separate functions
- **Convenience**: A user running multiple tasks simultaneously

## Examples

### Example 1: Process Tree with ps

```bash
$ ps -eo pid,ppid,comm,state
  PID  PPID COMMAND         S
    1     0 systemd         S
  345     1 sshd            S
  678   345 bash            S
  712   678 ps              R
```

### Example 2: Visualizing Process State Changes

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        printf("Child: Now in RUNNING state (about to sleep)\n");
        sleep(2);  // Child moves to WAITING state
        printf("Child: Woke up, back in RUNNING\n");
    } else {
        printf("Parent: Running, waiting for child\n");
        wait(NULL);  // Parent could wait or do other work
        printf("Parent: Child finished\n");
    }
    return 0;
}
```

## Summary

- A process is an active instance of a program, containing text, data, heap, and stack
- The five-state model: NEW → READY → RUNNING → WAITING → TERMINATED
- The PCB (task_struct in Linux) holds every piece of state the kernel needs about a process
- Context switching is pure overhead — saving and restoring process state
- `fork()` creates a child; `exec()` replaces the current program; `exit()` terminates
- IPC: shared memory (fast, needs synchronization) or message passing (slower, more structured)
- Zombies are dead processes waiting for parent `wait()`; orphans are adopted by init

## Exercises

### Basic

1. Draw the process state diagram. Identify which transitions are initiated by the OS, which by the process, and which by hardware.
2. Run `ps -eo pid,ppid,state,wchan,comm` on your system. Identify the state of each process. Which processes are waiting? What are they waiting on (wchan)?
3. Write a program that creates a zombie process. Use `ps` to confirm the zombie exists.

### Intermediate

4. Write a program that creates three child processes. Each child prints its PID and exits. The parent waits for all children in order and prints their exit statuses. Use `waitpid()` with the WNOHANG option to demonstrate non-blocking wait.
5. Compare the performance of shared memory vs message passing. Write programs that transfer 1 MB of data using each method and measure the time.
6. Explain the orphan process scenario. Write a program where the parent exits before the child. Verify that `init` (PID 1) becomes the child's new parent using `getppid()`.

### Advanced

7. Implement a simple producer-consumer using shared memory and a circular buffer. The producer writes integers 0–999; the consumer reads and prints them. Use atomic operations or a flag for synchronization.
8. The `vfork()` system call creates a child that shares the parent's address space and blocks the parent until the child calls `exec()` or `exit()`. Research why `vfork()` exists, then write a benchmark comparing `fork()` and `vfork()` latency over 10,000 iterations.
9. Design and implement a message-passing library in C that provides `send(pid, msg)` and `recv(pid, &msg)` using POSIX message queues. The library should handle messages up to 1024 bytes and support non-blocking receives.
