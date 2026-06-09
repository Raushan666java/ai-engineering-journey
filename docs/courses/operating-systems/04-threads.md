# Chapter 4 — Threads

## Learning Objectives

1. Define a thread and distinguish it from a process.
2. Compare user-level and kernel-level threads.
3. Describe the three multithreading models.
4. Implement multithreaded programs using POSIX threads.
5. Explain thread pools and their advantages.

## 4.1 Thread Concept

A **thread** is the smallest unit of CPU utilisation. A process can contain one or more threads, each with its own program counter, register set, and stack space. Threads within the same process share the address space, open files, signal handlers, and other OS resources.

The key distinction between processes and threads:

| Property | Process | Thread |
|----------|---------|--------|
| Address space | Private | Shared with process siblings |
| Resource ownership | Owns resources | Shares process resources |
| Creation cost | High (PCB, address space) | Low (stack only) |
| Context switch cost | High (address space switch) | Low (same address space) |
| Communication | IPC mechanisms | Shared memory directly |

Because threads share the address space, creating and switching between threads is significantly cheaper than creating and switching between processes. A thread context switch changes only the program counter, registers, and stack pointer; the page table remains unchanged.

## 4.2 Benefits of Multithreading

- **Responsiveness**: A multithreaded interactive application remains responsive even if one thread blocks (e.g., a web browser with one thread for UI and another for network I/O).
- **Resource sharing**: Threads automatically share memory and file descriptors, avoiding the overhead of IPC.
- **Economy**: Thread creation requires a fraction of the memory and time required for process creation.
- **Scalability**: On multiprocessor systems, threads can execute in parallel on different cores, improving throughput.

## 4.3 User-Level Threads

User-level threads (ULTs) are managed entirely in user space by a thread library (e.g., GNU Pth, early Java threads). The kernel is unaware of threads; it schedules only the containing process.

**Advantages**:
- Thread switching does not require kernel entry, avoiding mode-switch overhead.
- Scheduling can be customised per application.
- Works on OSs that do not support kernel threads.

**Disadvantages**:
- A blocking system call (e.g., `read()`) blocks all threads in the process because the kernel only sees the process.
- Multi-core parallelism is impossible — the kernel schedules only the process, not individual threads.
- A page fault in one thread blocks all others.

## 4.4 Kernel-Level Threads

Kernel-level threads (KLTs) are managed by the OS kernel. The kernel schedules each thread independently. Windows, Linux, macOS, and modern UNIX systems use kernel threads.

**Advantages**:
- Threads can run in parallel on multiple cores.
- A blocking call blocks only the calling thread; other threads in the same process continue.
- The kernel can schedule threads from different processes on different cores.

**Disadvantages**:
- Thread operations (create, synchronise, switch) require system calls, incurring mode-switch overhead.
- Kernel thread control blocks consume kernel memory.

## 4.5 Multithreading Models

### 4.5.1 Many-to-One

Many user-level threads map to a single kernel thread. The thread library schedules ULTs in user space; the kernel sees one thread per process. Used by early Java VMs and GNU Pth. Suffers from the blocking problem described in §4.3.

### 4.5.2 One-to-One

Each user-level thread maps to a separate kernel thread. This provides full parallelism but incurs overhead for thread management. Linux (via `clone()`) and Windows use this model. Most modern systems default to one-to-one.

### 4.5.3 Many-to-Many

Many user-level threads multiplex onto a smaller or equal number of kernel threads. The thread library manages the mapping; the kernel schedules kernel threads. This model combines the efficiency of user-level creation with kernel parallelism. Solaris (prior to Solaris 9) and older IRIX implementations used this model. The **two-level model** variant allows some user threads to be bound to specific kernel threads for real-time guarantees.

## 4.6 POSIX Threads (pthreads)

POSIX threads (pthreads) is a standard API for thread creation and synchronisation, defined in IEEE 1003.1c. The API is available on UNIX-like systems and via libraries on Windows (pthreads-w32).

### 4.6.1 Thread Creation

```c
#include <pthread.h>
#include <stdio.h>

void *worker(void *arg) {
    int thread_id = *(int *)arg;
    printf("Thread %d: Hello from worker\n", thread_id);
    return NULL;
}

int main() {
    pthread_t t1, t2;
    int id1 = 1, id2 = 2;
    
    pthread_create(&t1, NULL, worker, &id1);
    pthread_create(&t2, NULL, worker, &id2);
    
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    return 0;
}
```

`pthread_create()` takes four arguments: a pointer to a `pthread_t` to store the thread ID, thread attributes (NULL for defaults), the function to execute, and an argument to pass to that function.

### 4.6.2 Thread Termination

- The thread function returns.
- `pthread_exit()` is called explicitly.
- `pthread_cancel()` cancels the thread from another thread.
- The process exits (all threads terminate).

`pthread_join()` blocks the calling thread until the target thread finishes, analogous to `waitpid()`.

### 4.6.3 Thread Attributes

Thread attributes are specified via a `pthread_attr_t` object, initialised with `pthread_attr_init()`. Attributes include:

- **Detached state**: A detached thread's resources are reclaimed automatically when it terminates (no `join` needed).
- **Stack size**: Override the default stack size.
- **Scheduling policy**: Set SCHED_FIFO, SCHED_RR, or SCHED_OTHER.

```c
pthread_attr_t attr;
pthread_attr_init(&attr);
pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);
pthread_create(&tid, &attr, worker, NULL);
```

## 4.7 Thread Pools

Creating a thread for each incoming request is inefficient — thread creation overhead can dominate the request-handling time, and unlimited threads can exhaust system resources. A **thread pool** pre-creates a fixed number of threads that wait for work.

When a new task arrives, it is placed into a work queue. An idle thread from the pool dequeues and executes the task. If no thread is available, the task waits.

**Advantages**:
- Eliminates per-task creation overhead.
- Bounds resource consumption.
- Enables latency control (pool size can be tuned).

```c
// Pseudocode for a thread pool:
ThreadPool pool(num_threads);
while (task = get_next_request()) {
    pool.enqueue(task);
}

// Each pool thread:
void *pool_worker(void *arg) {
    while (true) {
        Task t = queue.dequeue(); // blocks if empty
        t.execute();
    }
}
```

Thread pool size is a critical parameter. A CPU-bound pool should be roughly `n_cpus + 1`. An I/O-bound pool can be larger, up to `2 * n_cpus` or more, because threads spend much time blocked.

## 4.8 Thread-Local Storage

Threads share the process address space, but each thread may need its own private data. **Thread-local storage (TLS)** provides per-thread variables. In C11, the `_Thread_local` storage class specifier declares a variable with thread-specific lifetime:

```c
_Thread_local int errno; // each thread has its own errno
```

The `pthreads` API offers `pthread_key_create()`, `pthread_setspecific()`, and `pthread_getspecific()` for dynamic TLS management.

## Summary

Threads enable lightweight concurrency within a process. User-level threads offer low switching cost but block on kernel operations; kernel threads provide full parallelism with higher overhead. The one-to-one model dominates modern systems. pthreads provides a portable API. Thread pools manage resource utilisation under load. TLS gives threads private data within a shared address space.

## Exercises

### Review Questions

1. What resources are shared among threads in the same process? What resources are per-thread?
2. Compare user-level and kernel-level threads along three dimensions: creation cost, parallel execution, and blocking behaviour.
3. Draw and explain the three multithreading models (many-to-one, one-to-one, many-to-many).
4. What is a thread pool, and what problems does it solve?
5. How does thread-local storage differ from using a global variable?

### Application Problems

1. Write a C program using pthreads that creates four threads. Each thread computes the sum of a distinct quarter of a 10,000-element integer array. The main thread prints the total sum after all threads join.
2. A server uses a thread pool of size 8. Each incoming request requires 50 ms of computation (CPU-bound) and 100 ms of I/O. Plot the throughput as a function of request arrival rate (requests/second). When does the system saturate?
3. Compare the memory consumed by 100 processes (each with a 256 KB stack) vs. 100 threads in a single process (each with a 64 KB stack). Include PCB and TCB overhead estimates.

### Challenge Problem

1. Implement a minimal thread pool library in C: `tp_create(int n)`, `tp_enqueue(tp, void (*fn)(void *), void *arg)`, `tp_destroy(tp)`. Use a mutex and condition variable to synchronise access to the work queue. Test it by scheduling 100 tasks that each compute a Fibonacci number.
