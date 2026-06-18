# Chapter 6: Semaphores & Monitors

## Learning Objectives

- Solve the bounded-buffer (producer-consumer) problem with semaphores
- Implement the readers-writers problem and analyze its fairness issues
- Solve the dining philosophers problem and identify deadlock risks
- Explain monitors as a high-level synchronization construct
- Use condition variables to implement complex synchronization patterns
- Compare semaphore-based and monitor-based solutions

## Theory

![Semaphores & Monitors](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/06-semaphores-monitors.png)

### Classic Synchronization Problems

When Dijkstra introduced semaphores in 1965, he also posed three classic problems that have become the standard tests for any synchronization mechanism. Each illustrates a different class of concurrency challenge.

### Problem 1: Bounded Buffer (Producer-Consumer)

**Scenario**: A buffer of fixed size N. Producer processes put items into the buffer; consumer processes remove items. Producers must block when the buffer is full; consumers must block when empty.

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

#define BUFFER_SIZE 5
#define ITEMS 20

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty;  // Counts empty slots
sem_t full;   // Counts full slots
sem_t mutex;  // Binary semaphore for buffer access

void *producer(void *arg) {
    int id = *(int *)arg;

    for (int i = 0; i < ITEMS; i++) {
        int item = i + id * 1000;  // Unique item ID

        sem_wait(&empty);          // Wait for an empty slot
        sem_wait(&mutex);          // Lock buffer

        buffer[in] = item;
        printf("Producer %d: produced %d at slot %d\n", id, item, in);
        in = (in + 1) % BUFFER_SIZE;

        sem_post(&mutex);          // Unlock buffer
        sem_post(&full);           // Signal that a slot is now full
    }
    return NULL;
}

void *consumer(void *arg) {
    int id = *(int *)arg;

    for (int i = 0; i < ITEMS; i++) {
        sem_wait(&full);           // Wait for a full slot
        sem_wait(&mutex);          // Lock buffer

        int item = buffer[out];
        printf("Consumer %d: consumed %d from slot %d\n", id, item, out);
        out = (out + 1) % BUFFER_SIZE;

        sem_post(&mutex);          // Unlock buffer
        sem_post(&empty);          // Signal that a slot is now empty
    }
    return NULL;
}

int main() {
    pthread_t producers[2], consumers[2];
    int ids[2] = {1, 2};

    sem_init(&empty, 0, BUFFER_SIZE);
    sem_init(&full, 0, 0);
    sem_init(&mutex, 0, 1);

    pthread_create(&producers[0], NULL, producer, &ids[0]);
    pthread_create(&producers[1], NULL, producer, &ids[1]);
    pthread_create(&consumers[0], NULL, consumer, &ids[0]);
    pthread_create(&consumers[1], NULL, consumer, &ids[1]);

    for (int i = 0; i < 2; i++) {
        pthread_join(producers[i], NULL);
        pthread_join(consumers[i], NULL);
    }

    sem_destroy(&empty);
    sem_destroy(&full);
    sem_destroy(&mutex);
    return 0;
}
```

**Key insight**: The order of `wait()` operations matters. If a producer locks `mutex` before checking `empty`, deadlock can occur when the buffer is full and consumers are not running.

### Problem 2: Readers-Writers

**Scenario**: A shared database. Readers only read the data (multiple can read simultaneously). Writers need exclusive access.

**Readers-Writers Problem Variant 1** (Readers have priority):
- No reader is kept waiting unless a writer has already obtained access
- If a writer is waiting, new readers get in ahead of it
- **Problem**: Writers can starve

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t rw_mutex;   // Mutual exclusion for writers
sem_t mutex;      // Protects reader count
int read_count = 0;  // Number of active readers
int shared_data = 0;  // The shared resource

void *reader(void *arg) {
    int id = *(int *)arg;

    sem_wait(&mutex);
    read_count++;
    if (read_count == 1) {
        sem_wait(&rw_mutex);  // First reader locks writers out
    }
    sem_post(&mutex);

    // Reading section
    printf("Reader %d: read value %d\n", id, shared_data);

    sem_wait(&mutex);
    read_count--;
    if (read_count == 0) {
        sem_post(&rw_mutex);  // Last reader lets writers in
    }
    sem_post(&mutex);

    return NULL;
}

void *writer(void *arg) {
    int id = *(int *)arg;

    sem_wait(&rw_mutex);  // Exclusive access

    // Writing section
    shared_data++;
    printf("Writer %d: wrote value %d\n", id, shared_data);

    sem_post(&rw_mutex);

    return NULL;
}
```

**Readers-Writers Problem Variant 2** (Writers have priority):
- Once a writer requests access, no new readers can start
- Solves writer starvation but readers can starve

The ideal solution: **fairness** â€” processes are served in order of arrival.

### Problem 3: Dining Philosophers

**Scenario**: Five philosophers sit at a round table with five chopsticks (one between each pair). Each philosopher alternates between thinking and eating. To eat, a philosopher needs both chopsticks (left and right). After eating, they put down both chopsticks and think.

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define N 5

sem_t chopsticks[N];

void think(int id) {
    printf("Philosopher %d is thinking...\n", id);
    sleep(1);
}

void eat(int id) {
    printf("Philosopher %d is eating...\n", id);
    sleep(2);
}

void *philosopher(void *arg) {
    int id = *(int *)arg;
    int left = id;
    int right = (id + 1) % N;

    while (1) {
        think(id);

        // Pick up chopsticks (CAN DEADLOCK!)
        sem_wait(&chopsticks[left]);
        sem_wait(&chopsticks[right]);

        eat(id);

        sem_post(&chopsticks[left]);
        sem_post(&chopsticks[right]);
    }
    return NULL;
}

int main() {
    pthread_t philosophers[N];
    int ids[N];

    for (int i = 0; i < N; i++) {
        sem_init(&chopsticks[i], 0, 1);
    }

    for (int i = 0; i < N; i++) {
        ids[i] = i;
        pthread_create(&philosophers[i], NULL, philosopher, &ids[i]);
    }

    pthread_join(philosophers[0], NULL);  // Runs forever in this example
    return 0;
}
```

**Problem**: If all philosophers pick up their left chopstick simultaneously, no one can pick up the right. **Deadlock**.

**Solutions**:

1. **Limit the table to 4 philosophers** (at most 4 eat at once)
2. **Odd philosophers pick up left first; even pick up right first** (breaks symmetry)
3. **Use a mutex around picking up chopsticks** (only one philosopher can try at a time)
4. **Use a waiter process**: philosophers ask a waiter before picking up chopsticks

```c
// Deadlock-free version using a mutex around chopstick acquisition
pthread_mutex_t waiter = PTHREAD_MUTEX_INITIALIZER;

void *philosopher_safe(void *arg) {
    int id = *(int *)arg;
    int left = id;
    int right = (id + 1) % N;

    while (1) {
        think(id);

        pthread_mutex_lock(&waiter);  // Only one philosopher can pick up at a time
        sem_wait(&chopsticks[left]);
        sem_wait(&chopsticks[right]);
        pthread_mutex_unlock(&waiter);

        eat(id);

        sem_post(&chopsticks[left]);
        sem_post(&chopsticks[right]);
    }
}
```

### Monitors

Semaphores are powerful but error-prone. A **monitor** (Hoare, 1974; Brinch Hansen, 1973) is a high-level synchronization construct that encapsulates shared data, operations, and synchronization into a single abstraction.

A monitor guarantees that **only one process can be active inside the monitor at a time**. This provides mutual exclusion automatically.

```
Monitor MonitorName {
    // Shared variables (private)
    int shared_data;

    // Initialization
    void init() { ... }

    // Public operations (only one thread at a time)
    void operation1() { ... }
    int operation2() { ... }
}
```

#### Condition Variables

Monitors use **condition variables** for scheduling synchronization. A condition variable has two operations:

- `wait(condition)`: Release monitor lock and block until condition is signaled
- `signal(condition)` (or `notify`): Wake up one waiting thread (if any)
- `broadcast(condition)`: Wake up all waiting threads

#### POSIX Condition Variables

```c
#include <stdio.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int ready = 0;

void *waiter(void *arg) {
    pthread_mutex_lock(&mutex);

    while (ready == 0) {
        // Wait atomically releases the mutex and blocks
        // When woken, it re-acquires the mutex
        pthread_cond_wait(&cond, &mutex);
    }

    printf("Waiter: Condition met!\n");
    pthread_mutex_unlock(&mutex);
    return NULL;
}

void *signaler(void *arg) {
    sleep(1);  // Simulate work

    pthread_mutex_lock(&mutex);
    ready = 1;
    printf("Signaler: Setting condition and notifying\n");
    pthread_cond_signal(&cond);  // Wake up one waiter
    pthread_mutex_unlock(&mutex);
    return NULL;
}
```

**Important**: Always use `while (condition)` not `if (condition)` to guard `pthread_cond_wait()`. This handles **spurious wakeups** â€” the thread can wake up even if nobody signaled.

### Monitor-based Solutions

#### Bounded Buffer with Monitor

```c
#include <stdio.h>
#include <pthread.h>

#define BUFFER_SIZE 5

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond_not_full = PTHREAD_COND_INITIALIZER;
pthread_cond_t cond_not_empty = PTHREAD_COND_INITIALIZER;

int buffer[BUFFER_SIZE];
int count = 0, in = 0, out = 0;

void put(int item) {
    pthread_mutex_lock(&mutex);

    while (count == BUFFER_SIZE) {
        pthread_cond_wait(&cond_not_full, &mutex);
    }

    buffer[in] = item;
    in = (in + 1) % BUFFER_SIZE;
    count++;

    pthread_cond_signal(&cond_not_empty);
    pthread_mutex_unlock(&mutex);
}

int get() {
    pthread_mutex_lock(&mutex);

    while (count == 0) {
        pthread_cond_wait(&cond_not_empty, &mutex);
    }

    int item = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    count--;

    pthread_cond_signal(&cond_not_full);
    pthread_mutex_unlock(&mutex);

    return item;
}
```

## Examples

### Example 1: Barrier Synchronization

A **barrier** forces all threads to wait at a point until every thread reaches it.

```c
#include <stdio.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int arrived = 0;
int num_threads = 5;

void barrier_wait() {
    pthread_mutex_lock(&mutex);
    arrived++;

    if (arrived < num_threads) {
        pthread_cond_wait(&cond, &mutex);
    } else {
        // Last thread â€” wake everyone
        arrived = 0;  // Reset for next barrier use
        pthread_cond_broadcast(&cond);
    }

    pthread_mutex_unlock(&mutex);
}

void *worker(void *arg) {
    int id = *(int *)arg;

    printf("Thread %d: working on phase 1...\n", id);
    sleep(1);
    barrier_wait();

    printf("Thread %d: working on phase 2...\n", id);
    sleep(1);
    barrier_wait();

    printf("Thread %d: done.\n", id);
    return NULL;
}
```

### Example 2: Semaphore as a Condition Variable (without monitor)

```c
// Signaling between threads using semaphores
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t done;

void *worker(void *arg) {
    printf("Worker: doing work...\n");
    sleep(2);
    sem_post(&done);  // Signal main thread
    return NULL;
}

int main() {
    pthread_t thread;
    sem_init(&done, 0, 0);

    pthread_create(&thread, NULL, worker, NULL);

    printf("Main: waiting for worker...\n");
    sem_wait(&done);  // Block until worker signals
    printf("Main: worker finished.\n");

    pthread_join(thread, NULL);
    sem_destroy(&done);
    return 0;
}
```

## Summary

- The bounded buffer problem uses counting semaphores for empty/full slots + mutual exclusion
- Readers-writers highlights the tension between concurrency (many readers) and correctness (exclusive writes)
- The dining philosophers problem illustrates deadlock; solutions include breaking symmetry or limiting concurrency
- Monitors provide automatic mutual exclusion with condition variables for scheduling
- `pthread_cond_wait()` atomically releases the mutex and blocks; `pthread_cond_signal()` wakes one waiter
- Always use `while()` not `if()` to guard condition waits (spurious wakeups)
- Monitor-based solutions are generally easier to reason about than semaphore-based ones

## Exercises

### Basic

1. Why must `wait(empty)` and `wait(mutex)` in the bounded buffer be in that order? What happens if they are reversed?
2. In the dining philosophers problem, explain how all five philosophers could deadlock.
3. What is the difference between `pthread_cond_signal()` and `pthread_cond_broadcast()`?

### Intermediate

4. Implement the readers-writers problem with writer priority. A writer that arrives should block all subsequent readers until it completes.
5. Solve the dining philosophers problem without using a waiter mutex â€” instead, change the pickup order so that philosophers with odd IDs pick up left first, even IDs pick up right first. Prove this prevents deadlock.
6. Implement a reusable barrier using condition variables. The barrier should support a variable number of threads and be reusable across multiple phases. (The barrier from Example 1 has a subtle bug â€” can you find it?)

### Advanced

7. Implement a **priority ceiling protocol** using monitors. When a high-priority task blocks on a low-priority task holding a lock, the low-priority task should temporarily inherit the high priority. Use `pthread` real-time scheduling for this.
8. The **sleeping barber problem**: a barbershop has one barber, one barber chair, and N waiting chairs. If no customers, the barber sleeps. If a customer arrives and all chairs are full, they leave. If the barber is busy, the customer sits in a waiting chair. Solve this with semaphores.
9. Implement a concurrent hash table with fine-grained locking (one lock per bucket) using POSIX threads. Compare its performance to a single-lock implementation under (a) read-heavy, (b) write-heavy, (c) mixed workloads. What is the optimal number of buckets for 8 threads?
