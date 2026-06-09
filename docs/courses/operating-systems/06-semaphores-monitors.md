# Chapter 6 — Semaphores and Monitors

## Learning Objectives

1. Define a semaphore and distinguish binary from counting semaphores.
2. Implement mutual exclusion and synchronisation using semaphores.
3. Solve the bounded-buffer, readers-writers, dining-philosophers, and sleeping-barber problems.
4. Explain monitors and condition variables.
5. Compare semaphore-based and monitor-based solutions.

## 6.1 Semaphores

A **semaphore** (Dijkstra, 1965) is an integer variable S accessed through two atomic operations:

- **wait(S)** (also called P or down): while S ≤ 0, block; then S = S − 1.
- **signal(S)** (also called V or up): S = S + 1; if threads are waiting on S, unblock one.

These operations are atomic — the decrement, test, and possible blocking are indivisible. The OS kernel enforces this by disabling interrupts or using hardware atomics.

### 6.1.1 Binary Semaphore

A binary semaphore takes only values 0 and 1. It functions as a mutex:

```c
semaphore mutex = 1;

void process() {
    wait(mutex);     // acquire
    // critical section
    signal(mutex);   // release
}
```

A binary semaphore differs from a mutex in that `signal()` can be called by any process, not necessarily the one that called `wait()`. This makes binary semaphores suitable for signalling between processes.

### 6.1.2 Counting Semaphore

A counting semaphore can range over unrestricted integer values. It is used to manage a pool of identical resources:

```c
semaphore resources = N; // N identical resources

void use_resource() {
    wait(resources);     // acquire one resource
    // use the resource
    signal(resources);   // release it
}
```

### 6.1.3 Implementation

```c
typedef struct {
    int value;
    struct process *list; // queue of waiting processes
} semaphore;

void wait(semaphore *S) {
    S->value--;
    if (S->value < 0) {
        // add this process to S->list
        block(); // yield CPU, scheduler selects another process
    }
}

void signal(semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        // remove a process P from S->list
        wakeup(P);
    }
}
```

When `value` is negative, its absolute value gives the number of processes blocked on the semaphore.

## 6.2 Classic Synchronisation Problems

### 6.2.1 Bounded-Buffer Problem

Also called the producer-consumer problem. Producers insert items into a fixed-size buffer; consumers remove them.

```c
semaphore mutex = 1;      // protects buffer access
semaphore empty = N;      // count of empty slots
semaphore full = 0;       // count of full slots

void *producer(void *arg) {
    while (true) {
        int item = produce();
        wait(&empty);
        wait(&mutex);
        buffer[in] = item;
        in = (in + 1) % N;
        signal(&mutex);
        signal(&full);
    }
}

void *consumer(void *arg) {
    while (true) {
        wait(&full);
        wait(&mutex);
        int item = buffer[out];
        out = (out + 1) % N;
        signal(&mutex);
        signal(&empty);
        consume(item);
    }
}
```

Note: `wait(&mutex)` and `wait(&empty)` are ordered so that a deadlock cannot occur. Reversing the order (acquiring the mutex before checking empty) would invite deadlock if the buffer is full.

### 6.2.2 Readers-Writers Problem

Multiple readers may read a shared database simultaneously, but writers require exclusive access. There are two variant priorities:

**First readers-writers problem** (readers have priority): No reader is kept waiting unless a writer has already obtained access. This can starve writers.

```c
semaphore rw_mutex = 1;   // mutual exclusion for writers
semaphore mutex = 1;      // protects read_count
int read_count = 0;

void *reader(void *arg) {
    while (true) {
        wait(&mutex);
        read_count++;
        if (read_count == 1)
            wait(&rw_mutex); // first reader locks writers out
        signal(&mutex);
        
        // read the database
        
        wait(&mutex);
        read_count--;
        if (read_count == 0)
            signal(&rw_mutex); // last reader lets writers in
        signal(&mutex);
    }
}

void *writer(void *arg) {
    while (true) {
        wait(&rw_mutex);
        // write to the database
        signal(&rw_mutex);
    }
}
```

**Second readers-writers problem** (writers have priority): Once a writer is ready, no new readers are admitted. This can starve readers.

### 6.2.3 Dining-Philosophers Problem

Five philosophers sit at a round table with five forks. Each philosopher alternates between thinking and eating. To eat, a philosopher needs two forks — the one to the left and the one to the right.

A naive solution (each picks up left fork, then right fork) causes deadlock if all five pick up their left fork simultaneously.

**Deadlock-free solution using a semaphore array**:

```c
#define N 5
semaphore fork[N] = {1};

void philosopher(int i) {
    while (true) {
        think();
        
        // Pick up forks: left, then right
        wait(&fork[i]);
        wait(&fork[(i + 1) % N]);
        
        eat();
        
        // Put down forks
        signal(&fork[i]);
        signal(&fork[(i + 1) % N]);
    }
}
```

This solution still risks deadlock. A corrected approach: acquire forks only if both are available, or allow at most four philosophers at the table. Another solution uses a mutex-protected state array:

```c
#define N 5
#define THINKING 0
#define HUNGRY   1
#define EATING   2

int state[N];
semaphore mutex = 1;
semaphore s[N] = {0}; // per-philosopher semaphore

void test(int i) {
    if (state[i] == HUNGRY &&
        state[(i + N - 1) % N] != EATING &&
        state[(i + 1) % N] != EATING) {
        state[i] = EATING;
        signal(&s[i]);
    }
}

void take_forks(int i) {
    wait(&mutex);
    state[i] = HUNGRY;
    test(i);
    signal(&mutex);
    wait(&s[i]); // block if not eating
}

void put_forks(int i) {
    wait(&mutex);
    state[i] = THINKING;
    test((i + N - 1) % N); // check left neighbour
    test((i + 1) % N);     // check right neighbour
    signal(&mutex);
}
```

### 6.2.4 Sleeping-Barber Problem

A barbershop has one barber, one barber chair, and N waiting chairs. If no customers are present, the barber sleeps. When a customer arrives, if the barber is asleep, the customer wakes the barber; otherwise, if a waiting chair is free, the customer sits down; otherwise, the customer leaves.

```c
semaphore customers = 0;
semaphore barber = 0;
semaphore mutex = 1;
int waiting = 0;

void *barber(void *arg) {
    while (true) {
        wait(&customers);  // go to sleep if no customers
        wait(&mutex);
        waiting--;
        signal(&barber);   // barber is ready
        signal(&mutex);
        cut_hair();
    }
}

void *customer(void *arg) {
    wait(&mutex);
    if (waiting < N) {
        waiting++;
        signal(&customers);
        signal(&mutex);
        wait(&barber);     // wait for barber
        get_haircut();
    } else {
        signal(&mutex);
        leave();           // no room
    }
}
```

## 6.3 Monitors

A **monitor** (Hoare, 1974; Brinch Hansen, 1973) is a high-level synchronisation construct that encapsulates shared variables, operations on them, and mutual exclusion into a single language construct. Only one process may execute inside the monitor at any time.

```pascal
monitor SharedCounter {
    int count;
    
    procedure increment() {
        count = count + 1;
    }
    
    procedure decrement() {
        count = count - 1;
    }
}
```

Because the compiler enforces mutual exclusion by generating locking code around each monitor procedure, many synchronisation errors are eliminated at compile time.

### 6.3.1 Condition Variables

Condition variables provide a mechanism for a process to wait inside a monitor until a particular condition becomes true. Two operations:

- **wait(cond)**: Release monitor lock and block on condition.
- **signal(cond)**: Wake one process waiting on condition.

**Bounded buffer with monitors**:

```pascal
monitor BoundedBuffer {
    int buffer[N];
    int in, out, count;
    condition not_full, not_empty;
    
    procedure insert(int item) {
        while (count == N)
            wait(not_full);
        buffer[in] = item;
        in = (in + 1) % N;
        count++;
        signal(not_empty);
    }
    
    procedure remove() returns int {
        while (count == 0)
            wait(not_empty);
        int item = buffer[out];
        out = (out + 1) % N;
        count--;
        signal(not_full);
        return item;
    }
}
```

Note the `while` loop rather than `if`: this guards against **spurious wakeups** (a thread may wake without the condition being true).

### 6.3.2 Signal Semantics

- **Hoare semantics**: The signalling process is suspended; the signalled process runs immediately. Requires a context switch.
- **Mesa semantics** (used in pthreads, Java): The signalling process continues; the signalled process is moved to the ready queue and reacquires the monitor lock when available. The `while` loop is essential.

## 6.4 Semaphores vs. Monitors

| Aspect | Semaphores | Monitors |
|--------|------------|----------|
| Abstraction level | Low (counter) | High (encapsulated data + ops) |
| Error proneness | High (forgot wait/signal, wrong order) | Lower (compiler-enforced) |
| Mutual exclusion | Explicit | Implicit |
| Condition waiting | Global counters | Condition variables |
| Implementation | Kernel or library | Language feature |

## Summary

Semaphores provide a powerful but low-level synchronisation primitive. Classic problems — bounded-buffer, readers-writers, dining-philosophers, sleeping-barber — illustrate common synchronisation patterns. Monitors raise the abstraction level, embedding mutual exclusion into the language and using condition variables for selective waiting. Most modern concurrent programming (Java, Go, C#) uses monitor-style synchronisation, often built on semaphore or mutex primitives in the runtime.

## Exercises

### Review Questions

1. What is the difference between a binary semaphore and a mutex?
2. In the bounded-buffer solution, why must we check `empty` before `mutex`?
3. What problem does the dining-philosophers naive solution have?
4. What are the two operations on condition variables in a monitor?
5. Why do Mesa-semantics monitors require a `while` loop rather than an `if` around condition checks?

### Application Problems

1. Solve the readers-writers problem with writers' priority using semaphores.
2. Implement a barrier synchronisation primitive using semaphores. A barrier ensures that no thread proceeds past the barrier until all N threads have reached it.
3. A hospital has one doctor and 10 chairs in the waiting room. Patients arrive at random intervals. The doctor sees one patient at a time. Model this using semaphores.

### Challenge Problem

1. Implement the dining-philosophers solution using pthreads and condition variables instead of semaphores. Show that it is deadlock-free and starvation-free. Use Mesa-style `pthread_cond_wait()` and `pthread_cond_signal()`.
