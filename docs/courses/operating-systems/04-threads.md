# Chapter 4: Threads

## Learning Objectives

- Define a thread and differentiate it from a process
- Compare user-level threads and kernel-level threads
- Explain the three multithreading models (many-to-one, one-to-one, many-to-many)
- Use POSIX threads (pthreads) for multithreaded programming
- Identify issues in multithreaded programs (safety, liveness, performance)
- Understand how threading maps to modern multicore hardware

## Theory

![Threads Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/04-threads.png)

### Thread Concept

A **thread** is the basic unit of CPU utilization. It consists of a thread ID, a program counter, a register set, and a stack. Threads share with their sibling threads:

- The code section (text)
- The data section (global variables, heap)
- Open file descriptors
- Signal handlers

```
┌─────────────────────────┐
│       Process            │
│  ┌───────────────────┐   │
│  │     Address Space  │   │
│  │  ┌─────┐┌─────┐   │   │
│  │  │ Code││ Data │   │   │
│  │  └─────┘└─────┘   │   │
│  │  ┌─────┐┌─────┐   │   │
│  │  │Heap ││ ... │   │   │
│  │  └─────┘└─────┘   │   │
│  └───────────────────┘   │
│  ┌───────┐┌───────┐      │
│  │Thread1││Thread2│ ...  │
│  │ PC,R  ││ PC,R  │      │
│  │ Stack ││ Stack │      │
│  └───────┘└───────┘      │
└─────────────────────────┘
```

**Key insight**: Threads are lightweight compared to processes. Creating a thread is 10–100× faster than creating a process because less state needs to be duplicated.

### Benefits of Multithreading

1. **Responsiveness**: Even if one thread is blocked, the program continues
2. **Resource sharing**: Threads share address space automatically
3. **Economy**: Creating and switching threads is cheaper than processes
4. **Scalability**: Threads can run on different cores in parallel

### Thread vs Process Comparison

| Aspect | Process | Thread |
|--------|---------|--------|
| Address space | Separate | Shared |
| Creation time | Slow (copy address space) | Fast (share address space) |
| Context switch | Heavy (mmu, TLB flush) | Lightweight |
| Communication | IPC (shared mem, msg) | Direct memory access |
| Protection | OS-enforced isolation | Programmer-managed |
| Crash impact | Other processes unaffected | Can crash entire process |

### User-Level Threads

Thread management is done by a **thread library in user space**, without kernel involvement.

**How it works**: The kernel sees only a single process. The thread library manages thread creation, scheduling, and switching entirely in user space. Switching threads is as fast as saving/restoring a few registers.

**Pros**:
- No kernel involvement → very fast (microsecond-level switching)
- Works on any OS that supports processes
- Customizable scheduling policy

**Cons**:
- A blocking system call blocks **all** threads
- Cannot utilize multiple cores (kernel only schedules the process, not individual threads)
- Page faults block entire process

### Kernel-Level Threads

Thread management is handled by the kernel. Each thread is a separate schedulable entity.

**How it works**: The kernel creates and schedules threads just like processes (on Linux, `clone()` with flags shares address space). Thread switching requires a system call.

**Pros**:
- Blocking one thread does not block others
- Can run on multiple cores in parallel
- Kernel can schedule threads intelligently

**Cons**:
- Slower thread operations (system call overhead)
- More memory overhead (each thread has a kernel stack and PCB)
- OS-specific threading APIs

### Multithreading Models

#### Many-to-One Model

Many user-level threads map to a single kernel thread.

```
User space:  T1   T2   T3    (thread library manages these)
                \  |  /
Kernel space:     K1          (single kernel thread)
```

**Used in**: Solaris Green Threads, GNU Portable Threads.

**Problem**: No parallelism — can't use multiple cores. A single blocking call blocks everything.

#### One-to-One Model

Each user thread maps to a separate kernel thread.

```
User space:   T1    T2    T3
              |     |     |
Kernel space: K1    K2    K3
```

**Used in**: Linux (via NPTL — Native POSIX Thread Library), Windows, Solaris 9+.

**Pro**: True parallelism on multicore. Blocking one thread doesn't block others.
**Con**: Creating a kernel thread is expensive; many threads can hurt performance.

#### Many-to-Many Model (Two-Level Model)

Many user-level threads multiplex onto a smaller or equal number of kernel threads.

```
User space:   T1  T2  T3  T4  T5
               \ /     \ /   |
                M1      M2   M3
Kernel space:   K1      K2   K3
```

**Used in**: Solaris (before version 9), IRIX, Tru64 Unix.

**Best of both worlds**: Fast user-level creation + kernel parallelism. But complex to implement.

### Thread Libraries

#### POSIX Threads (pthreads)

The standard threading API on Unix-like systems.

```c
#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

#define NUM_THREADS 5

void *thread_function(void *arg) {
    int id = *(int *)arg;
    printf("Thread %d: Hello from thread!\n", id);
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];

    for (int i = 0; i < NUM_THREADS; i++) {
        thread_ids[i] = i;
        int rc = pthread_create(&threads[i], NULL, thread_function, &thread_ids[i]);
        if (rc) {
            fprintf(stderr, "Error creating thread %d: %d\n", i, rc);
            exit(1);
        }
    }

    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("Main: All threads done.\n");
    return 0;
}
```

Compile with: `gcc program.c -lpthread`

#### Thread Synchronization Primitives

pthreads provides mutexes and condition variables:

```c
#include <stdio.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int shared_counter = 0;

void *increment(void *arg) {
    for (int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&mutex);
        shared_counter++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}

int main() {
    pthread_t t1, t2;

    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Final counter: %d (expected: 200000)\n", shared_counter);
    return 0;
}
```

### Threading Issues

#### fork() in Multithreaded Programs

If one thread calls `fork()`, the child process should duplicate only the calling thread or all threads? Two options:

- `fork()` duplicates only the calling thread (Linux behavior)
- If exec() is called immediately after fork(), only duplicating the calling thread is sufficient
- If the child does not call exec(), all threads should be duplicated

#### Thread Cancellation

A thread can be **cancelled** before it finishes:

- **Deferred cancellation**: Target thread periodically checks if it should cancel (safe, default)
- **Asynchronous cancellation**: Target thread is cancelled immediately (dangerous — could leave resources in inconsistent state)

```c
pthread_cancel(thread_id);  // Request cancellation (deferred by default)
```

#### Signal Handling

- **Synchronous signals**: Sent to the offending thread (SIGSEGV, SIGFPE)
- **Asynchronous signals**: Sent to the process; the OS delivers to any thread not blocking the signal

### Thread Pools

Creating a thread per task has overhead. A **thread pool** creates a fixed number of threads at startup. Idle threads wait in a pool; when work arrives, a thread is assigned. Benefits:

- Eliminates thread creation latency
- Limits the number of threads (resource management)
- Easy to manage (no unbounded thread growth)

## Examples

### Example 1: Computing Pi with Multiple Threads

```c
#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

#define NUM_THREADS 4
#define NUM_STEPS 1000000

double step;
double partial_sums[NUM_THREADS];

void *compute(void *arg) {
    int id = *(int *)arg;
    double x, sum = 0.0;

    for (int i = id; i < NUM_STEPS; i += NUM_THREADS) {
        x = (i + 0.5) * step;
        sum += 4.0 / (1.0 + x * x);
    }

    partial_sums[id] = sum;
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int ids[NUM_THREADS];

    step = 1.0 / NUM_STEPS;

    for (int i = 0; i < NUM_THREADS; i++) {
        ids[i] = i;
        pthread_create(&threads[i], NULL, compute, &ids[i]);
    }

    double total = 0.0;
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
        total += partial_sums[i];
    }

    double pi = total * step;
    printf("Computed pi = %.15f\n", pi);
    printf("Error = %.15f\n", pi - 3.141592653589793);

    return 0;
}
```

### Example 2: Amdahl's Law

The theoretical speedup from parallelization is bounded by the serial portion of the program:

```
Speedup = 1 / (S + (1-S)/N)

Where:
  S = fraction of program that is serial
  N = number of processors
```

If 10% of a program is serial, the maximum speedup on 16 cores is:
```
Speedup = 1 / (0.1 + 0.9/16) = 1 / (0.1 + 0.05625) = 6.4x
```

Even with infinite cores, the speedup cannot exceed 1/S = 10x.

## Summary

- A thread is a lightweight unit of CPU execution sharing address space with sibling threads
- User-level threads are fast but cannot utilize multiple cores or handle blocking calls well
- Kernel-level threads support parallelism but have higher overhead
- Many-to-many models attempt to combine benefits of both
- pthreads is the standard POSIX API for threads
- Thread pools amortize creation cost and limit resource usage
- Amdahl's Law governs the theoretical speedup from parallelization

## Exercises

### Basic

1. What are the differences between a thread and a process? List at least four.
2. Write a program that creates 10 threads, each printing its own ID. Verify that IDs from different threads can interleave.
3. What happens if you forget to call `pthread_join()`? What if the main thread exits before all threads finish?

### Intermediate

4. Write a producer-consumer program using pthreads and a mutex-protected shared buffer. Create 2 producer threads and 2 consumer threads.
5. Compare the performance of `fork()` vs `pthread_create()`. Create 1000 processes vs 1000 threads, measuring total creation time.
6. Explain the many-to-many threading model. Under what circumstances does it outperform one-to-one? When does it underperform?

### Advanced

7. Implement a simple thread pool: a fixed set of worker threads that pull tasks from a queue. The queue should support `enqueue(void (*function)(void*), void *arg)`.
8. Write a program that demonstrates the **false sharing** problem: two threads writing to adjacent heap variables that share a cache line. Measure the slowdown. Fix with alignment.
9. The Linux `clone()` system call allows fine-grained control over what is shared between parent and child. Research the CLONE_VM, CLONE_FILES, and CLONE_SIGHAND flags. Write a small program that creates a process that shares memory with its parent (like a thread) but has its own PID.
