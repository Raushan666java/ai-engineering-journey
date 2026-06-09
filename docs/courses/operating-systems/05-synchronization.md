# Chapter 5 — Synchronization

## Learning Objectives

1. Identify and explain race conditions with examples.
2. State and justify the three requirements for a correct critical-section solution.
3. Implement Peterson's algorithm for two processes.
4. Describe hardware primitives: test-and-set, compare-and-swap.
5. Solve classical synchronisation problems using mutex locks.

## 5.1 Race Conditions

A **race condition** occurs when multiple processes or threads concurrently access and manipulate shared data, and the final result depends on the relative timing of their execution. Race conditions are notoriously difficult to reproduce and debug.

**Example**: Two threads increment a shared counter `count`:

```c
// Thread 1
count = count + 1;
// Thread 2
count = count + 1;
```

The increment instruction compiles to:
```
LOAD  R1, count
ADD   R1, 1
STORE count, R1
```

If both threads execute the LOAD before either executes STORE, the final count is incremented by 1 instead of 2 — the second STORE overwrites the first.

## 5.2 The Critical-Section Problem

A **critical section** is a segment of code that accesses shared resources (variables, files, devices) and must not be executed by more than one process at a time.

A valid solution to the critical-section problem must satisfy three conditions:

1. **Mutual exclusion**: If process P_i is executing in its critical section, no other process may execute in its critical section.
2. **Progress**: If no process is in its critical section and some processes wish to enter, only those processes not in their remainder sections can participate in deciding which enters next; the selection cannot be postponed indefinitely.
3. **Bounded waiting**: There exists a bound on the number of times other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

## 5.3 Peterson's Algorithm

Peterson's algorithm provides a software-based solution for two processes using shared variables `flag` and `turn`.

```c
// Shared variables
int flag[2] = {0, 0};
int turn;

// Process P_i (i = 0 or 1)
void enter_critical(int i) {
    int j = 1 - i;
    flag[i] = 1;       // I want to enter
    turn = j;          // I let the other process go first
    while (flag[j] && turn == j)
        ;              // busy wait
}

void leave_critical(int i) {
    flag[i] = 0;       // I am done
}
```

**Proof of mutual exclusion**: If both processes are in their critical sections simultaneously, then both `flag[0]` and `flag[1]` are true, and `turn` is both 0 and 1 — a contradiction. Therefore mutual exclusion holds.

**Progress**: If P1 is in its remainder section, then `flag[1]` is false, so P0 cannot be blocked by the `while` loop — progress is satisfied.

**Bounded waiting**: P0 can enter at most once before P1 enters again because P0 sets `turn = 1` before waiting.

Peterson's algorithm assumes `LOAD` and `STORE` instructions are atomic, a guarantee not provided by modern hardware. In practice, Peterson's is a pedagogical tool rather than a production mechanism.

## 5.4 Hardware Support for Synchronization

### 5.4.1 Disabling Interrupts

In a uniprocessor system, mutual exclusion can be achieved by disabling interrupts before entering the critical section and re-enabling them after. This prevents the scheduler from preempting the process. However, it is dangerous (the process might never re-enable interrupts) and does not work on multiprocessors.

### 5.4.2 Test-and-Set (TSL)

The test-and-set instruction atomically reads a memory word and writes a nonzero value. It is typically executed as a single, indivisible CPU instruction.

```c
// Pseudo-implementation of test-and-set:
int test_and_set(int *lock) {
    int old = *lock;
    *lock = 1;
    return old;
}

// Usage:
while (test_and_set(&lock))
    ; // busy wait
// critical section
lock = 0;
```

### 5.4.3 Compare-and-Swap (CAS)

CAS atomically compares a memory location to a given value and, if they match, stores a new value. It is the fundamental primitive for lock-free data structures.

```c
// Pseudo-implementation:
int compare_and_swap(int *ptr, int expected, int new) {
    int actual = *ptr;
    if (actual == expected)
        *ptr = new;
    return actual;
}

// Usage for mutual exclusion:
while (compare_and_swap(&lock, 0, 1) != 0)
    ; // busy wait
```

CAS is supported on x86 via the `CMPXCHG` instruction, on ARM via `LDREX`/`STREX`.

## 5.5 Mutex Locks

A mutex (mutual exclusion) lock is a higher-level abstraction built on hardware primitives. The simplest mutex API:

```c
pthread_mutex_lock(&mutex);
// critical section
pthread_mutex_unlock(&mutex);
```

### 5.5.1 Busy-Waiting vs. Blocking

The implementations above use **busy-waiting** (spinning): the thread repeatedly checks the lock condition, consuming CPU cycles. This is appropriate when the critical section is very short and the CPU has cores to spare.

A **blocking mutex** puts the waiting thread to sleep and yields the CPU:

```c
void mutex_lock(mutex_t *m) {
    while (test_and_set(&m->flag)) {
        // Atomically add this thread to the wait queue
        schedule(); // yield CPU
    }
}
```

The trade-off: spinning wastes CPU but avoids a context switch; blocking saves CPU but incurs context-switch overhead.

### 5.5.2 Spinlocks

A spinlock is a mutex that busy-waits. It is used in kernel contexts where sleeping is prohibited (e.g., interrupt handlers). The x86 `PAUSE` instruction is inserted into spin loops to improve performance on hyperthreaded processors.

## 5.6 Classical Synchronisation Problems

### 5.6.1 Bounded-Buffer Problem

A producer places data into a fixed-size buffer; a consumer removes it. The producer must not write into a full buffer; the consumer must not read from an empty buffer.

Using mutexes (without semaphores — semaphores are covered in Chapter 6):

```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int count = 0;
int buffer[BUFFER_SIZE];

void *producer(void *arg) {
    while (true) {
        int item = produce_item();
        // Wait if full (busy-wait variant)
        while (count == BUFFER_SIZE)
            ;
        pthread_mutex_lock(&mutex);
        buffer[in] = item;
        in = (in + 1) % BUFFER_SIZE;
        count++;
        pthread_mutex_unlock(&mutex);
    }
}

void *consumer(void *arg) {
    while (true) {
        while (count == 0)
            ;
        pthread_mutex_lock(&mutex);
        int item = buffer[out];
        out = (out + 1) % BUFFER_SIZE;
        count--;
        pthread_mutex_unlock(&mutex);
        consume_item(item);
    }
}
```

This busy-wait approach is inefficient. Chapter 6 introduces semaphores and condition variables to solve this elegantly.

## 5.7 Atomic Operations in C11

C11 provides an atomic types library for lock-free programming:

```c
#include <stdatomic.h>

atomic_int counter = ATOMIC_VAR_INIT(0);
atomic_fetch_add(&counter, 1);  // atomic increment
```

## Summary

Race conditions arise from unsynchronised concurrent access. The critical-section problem requires mutual exclusion, progress, and bounded waiting. Peterson's algorithm provides a software solution for two processes. Hardware primitives — test-and-set and compare-and-swap — enable spinlocks and higher-level mutexes. Busy-waiting vs. blocking trades CPU cycles against context-switch overhead. These foundations underpin the semaphore and monitor constructs in Chapter 6.

## Exercises

### Review Questions

1. Define a race condition and provide a concrete code example.
2. What are the three requirements for a critical-section solution?
3. Explain how Peterson's algorithm guarantees mutual exclusion.
4. What is the difference between test-and-set and compare-and-swap?
5. When would you choose a spinlock over a blocking mutex?

### Application Problems

1. Use Peterson's algorithm to synchronise two threads incrementing a shared counter 1 million times each. Verify that the final value equals 2 million.
2. Suppose a multiprocessor system where two threads on separate CPUs execute the same spinlock code. Trace the sequence of memory operations that leads to correct mutual exclusion.
3. A mutex implementation uses `test_and_set` with busy-waiting. If the average critical section is 50 ns and the average context switch is 5 microseconds, what fraction of lock acquisitions would need to contend before a blocking mutex becomes preferable?

### Challenge Problem

1. Implement a lock-free stack using CAS. The stack supports `push(value)` and `pop()` operations. Multiple threads must be able to operate concurrently without locks. Demonstrate correctness under contention using a test with 10 threads performing 1000 operations each.
