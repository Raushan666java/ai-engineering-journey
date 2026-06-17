# Chapter 5: Process Synchronization

## Learning Objectives

- Define race conditions and explain why they occur in concurrent systems
- Formulate the critical section problem and characterize a valid solution
- Implement Peterson's solution for two processes
- Explain hardware support for synchronization (test-and-set, compare-and-swap)
- Use mutex locks and semaphores for process synchronization
- Recognize classic synchronization problems and their solutions

## Theory

![Sync Problems](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/05-synchronization.png)

### Race Conditions

A **race condition** occurs when multiple processes or threads access shared data concurrently, and the final result depends on the order of execution.

Consider two threads executing this code on a shared variable `counter`:

```c
counter++;  // Actually three machine instructions:
            // 1. LOAD counter into register
            // 2. INCREMENT register
            // 3. STORE register to counter
```

If both threads execute simultaneously:

```
Thread 1: LOAD counter (5)
Thread 1: INCREMENT (register = 6)
Thread 2: LOAD counter (5)      ← reads stale value!
Thread 2: INCREMENT (register = 6)
Thread 1: STORE counter (6)
Thread 2: STORE counter (6)     ← final value is 6, not 7!
```

The problem: the two increment operations interleaved incorrectly. This is a race condition.

### The Critical Section Problem

Consider a system with n processes, each containing a **critical section** — code that accesses shared data. The critical section problem is to design a protocol that processes can use to coordinate access.

A valid solution must satisfy three requirements:

1. **Mutual Exclusion**: If process Pᵢ is executing in its critical section, no other process can be executing in its critical section
2. **Progress**: If no process is in its critical section and some processes want to enter, only those not in their remainder sections can participate in deciding which will enter next; this selection cannot be postponed indefinitely
3. **Bounded Waiting**: There is a bound on the number of times other processes are allowed to enter their critical sections after a process has made a request to enter

### Peterson's Solution

A software-based solution for two processes, by Gary Peterson (1981).

```c
#include <stdio.h>
#include <pthread.h>
#include <stdbool.h>

#define THREADS 2

int turn;
bool flag[THREADS];
int shared_counter = 0;

void lock(int self) {
    int other = 1 - self;
    flag[self] = true;      // I want to enter
    turn = other;            // But I'll let the other go first
    while (flag[other] && turn == other) {
        // Busy wait — spin until it's my turn
    }
}

void unlock(int self) {
    flag[self] = false;     // I'm done
}

void *worker(void *arg) {
    int id = *(int *)arg;

    for (int i = 0; i < 100000; i++) {
        lock(id);
        shared_counter++;   // Critical section
        unlock(id);
    }
    return NULL;
}

int main() {
    pthread_t t1, t2;
    int id1 = 0, id2 = 1;

    flag[0] = flag[1] = false;
    turn = 0;

    pthread_create(&t1, NULL, worker, &id1);
    pthread_create(&t2, NULL, worker, &id2);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Counter: %d (expected: 200000)\n", shared_counter);
    return 0;
}
```

Peterson's solution works but only for two processes. It also requires **busy waiting** — the CPU spins uselessly.

### Hardware Support for Synchronization

Modern hardware provides atomic instructions that make synchronization more efficient.

#### Test-and-Set (TSL)

```c
// Atomic hardware instruction — implemented in hardware on most architectures
int test_and_set(int *target) {
    int old = *target;
    *target = 1;     // Always set to 1
    return old;      // Return original value
}
```

Used to implement a simple lock:

```c
struct lock {
    int flag;
};

void lock_init(struct lock *l) {
    l->flag = 0;
}

void acquire(struct lock *l) {
    while (test_and_set(&l->flag) == 1) {
        // Busy wait
    }
}

void release(struct lock *l) {
    l->flag = 0;
}
```

#### Compare-and-Swap (CAS)

```c
// Atomic compare and swap (x86: CMPXCHG instruction)
int compare_and_swap(int *value, int expected, int new_value) {
    int old = *value;
    if (*value == expected) {
        *value = new_value;
    }
    return old;
}
```

CAS is the foundation of **lock-free** data structures.

### Mutex Locks

A **mutex** (mutual exclusion) is a simple lock that protects a critical section.

```c
#include <stdio.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int shared = 0;

void *critical_section(void *arg) {
    for (int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&mutex);
        // Critical section — only one thread at a time
        shared++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}
```

**Spinlocks** vs **Mutexes**:
- Spinlock: Busy-waits (good for short critical sections, no context switch)
- Mutex: Blocks and yields CPU (good for long critical sections)

### Semaphores

A **semaphore** (Dijkstra, 1965) is an integer variable accessed only through two atomic operations: `wait()` (P — _proberen_, "to test") and `signal()` (V — _verhogen_, "to increment").

```c
// Semaphore as an abstract data type
struct semaphore {
    int value;
    struct process *queue;  // Queue of waiting processes
};

void wait(struct semaphore *s) {
    s->value--;
    if (s->value < 0) {
        // Add process to s->queue
        // Block the process (yield CPU)
    }
}

void signal(struct semaphore *s) {
    s->value++;
    if (s->value <= 0) {
        // Remove a process from s->queue
        // Wake up that process (move to ready queue)
    }
}
```

**Binary semaphores** (value 0 or 1) behave like mutexes.

**Counting semaphores** allow multiple units of a resource. For example, a semaphore initialized to 5 could allow up to 5 concurrent accesses to a pool of 5 identical resources.

#### POSIX Semaphores

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t semaphore;
int shared_counter = 0;

void *worker(void *arg) {
    for (int i = 0; i < 100000; i++) {
        sem_wait(&semaphore);     // P operation
        shared_counter++;
        sem_post(&semaphore);     // V operation
    }
    return NULL;
}

int main() {
    pthread_t t1, t2;

    sem_init(&semaphore, 0, 1);  // Binary semaphore (value = 1)

    pthread_create(&t1, NULL, worker, NULL);
    pthread_create(&t2, NULL, worker, NULL);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Counter: %d\n", shared_counter);

    sem_destroy(&semaphore);
    return 0;
}
```

### Synchronization in Linux

Linux provides several synchronization mechanisms:

- **Atomic integers**: `atomic_t`, `atomic_inc()`, `atomic_dec_and_test()`
- **Spinlocks**: `spin_lock()`, `spin_unlock()` — for short critical sections in interrupt context
- **Mutexes**: `struct mutex`, `mutex_lock()`, `mutex_unlock()` — for longer critical sections
- **Reader-writer spinlocks**: Many readers OR one writer
- **Sequential locks (seqlocks)**: Writers never wait; readers detect concurrent writes

## Examples

### Example 1: Race Condition Demonstration

```c
// race.c — compile with: gcc race.c -lpthread -o race
// Run several times to see the counter vary
#include <stdio.h>
#include <pthread.h>

int counter = 0;  // UNSYNCHRONIZED shared variable

void *add_many(void *arg) {
    for (int i = 0; i < 1000000; i++) {
        counter++;  // Race condition here!
    }
    return NULL;
}

int main() {
    pthread_t t1, t2;

    pthread_create(&t1, NULL, add_many, NULL);
    pthread_create(&t2, NULL, add_many, NULL);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Counter: %d (expected: 2000000)\n", counter);
    return 0;
}
```

### Example 2: Semaphore as a Resource Counter

A counting semaphore managing a pool of 3 identical printers:

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

sem_t printers;

void *print_job(void *arg) {
    int id = *(int *)arg;

    printf("Job %d waiting for printer...\n", id);
    sem_wait(&printers);  // Acquire a printer

    printf("Job %d printing...\n", id);
    sleep(2);  // Simulate printing

    printf("Job %d done.\n", id);
    sem_post(&printers);  // Release the printer

    return NULL;
}

int main() {
    pthread_t jobs[10];
    int ids[10];

    sem_init(&printers, 0, 3);  // 3 printers available

    for (int i = 0; i < 10; i++) {
        ids[i] = i;
        pthread_create(&jobs[i], NULL, print_job, &ids[i]);
    }

    for (int i = 0; i < 10; i++) {
        pthread_join(jobs[i], NULL);
    }

    sem_destroy(&printers);
    return 0;
}
```

## Summary

- Race conditions happen when concurrent operations interleave incorrectly on shared data
- The critical section must satisfy mutual exclusion, progress, and bounded waiting
- Peterson's solution demonstrates software-based synchronization (for 2 processes)
- Hardware provides test-and-set and compare-and-swap for atomic operations
- Mutex locks protect critical sections; semaphores generalize counting and signaling
- Busy waiting wastes CPU cycles; blocking (wait queue) is more efficient for longer waits
- POSIX provides `pthread_mutex_t` and `sem_t` for user-level synchronization

## Exercises

### Basic

1. What is a race condition? Provide an example beyond counter increment.
2. Explain the three requirements for a solution to the critical section problem.
3. What is the difference between a mutex and a binary semaphore?

### Intermediate

4. Prove that Peterson's solution satisfies mutual exclusion, progress, and bounded waiting.
5. Implement a **ticket lock**, where each thread takes a number and waits until its number is called. Demonstrate that it provides FIFO fairness (bounded waiting).
6. Compare spinlocks and mutexes. Write a benchmark that measures the performance of each for a critical section that takes (a) 10ns, (b) 10μs, (c) 10ms.

### Advanced

7. Implement a lock-free stack using compare-and-swap (CAS). The stack should support `push()` and `pop()` without locks. Handle the ABA problem.
8. The **Dekker algorithm** is another software-based two-process mutual exclusion solution from 1965. Implement it, prove its correctness, and compare it to Peterson's solution.
9. Implement a **reader-writer lock** using semaphores. Multiple readers should be able to access the shared data simultaneously, but writers must have exclusive access. Show that readers can starve writers in your implementation, then fix it.
