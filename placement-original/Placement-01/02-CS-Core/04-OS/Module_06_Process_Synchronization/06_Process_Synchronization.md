# Module 6: Process Synchronization

## Critical Section Problem

### Race Conditions
```c
int shared_counter = 0;

void increment() {
    int temp = shared_counter;  // Read
    temp = temp + 1;           // Modify  
    shared_counter = temp;     // Write
    // Race condition possible here
}
```

### Critical Section Requirements
1. **Mutual Exclusion**: Only one process in critical section
2. **Progress**: Selection cannot be postponed indefinitely
3. **Bounded Waiting**: Limit on waiting time

## Synchronization Hardware

### Test-and-Set Instruction
```c
bool test_and_set(bool *target) {
    bool rv = *target;
    *target = true;
    return rv;
}

// Usage
bool lock = false;

void acquire_lock() {
    while (test_and_set(&lock));
}

void release_lock() {
    lock = false;
}
```

### Compare-and-Swap
```c
int compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected)
        *value = new_value;
    return temp;
}
```

## Mutex Locks

### Mutex Implementation
```c
struct mutex {
    int available;
    struct process_queue waiting_queue;
};

void mutex_acquire(struct mutex *m) {
    while (!m->available) {
        // Busy waiting or block process
        block_process();
    }
    m->available = false;
}

void mutex_release(struct mutex *m) {
    m->available = true;
    wake_up_process();
}
```

## Semaphores

### Semaphore Operations
```c
struct semaphore {
    int value;
    struct process_queue waiting_queue;
};

void wait(struct semaphore *S) {
    S->value--;
    if (S->value < 0) {
        add_to_queue(&S->waiting_queue, current_process);
        block();
    }
}

void signal(struct semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        struct process *P = remove_from_queue(&S->waiting_queue);
        wakeup(P);
    }
}
```

### Binary vs Counting Semaphores
- **Binary Semaphore**: Value 0 or 1 (mutex-like)
- **Counting Semaphore**: Value can be any non-negative integer

## Classic Synchronization Problems

### Producer-Consumer Problem
```c
#define BUFFER_SIZE 10

struct {
    int buffer[BUFFER_SIZE];
    int in, out;
} shared_data;

struct semaphore mutex = {1, NULL};
struct semaphore empty = {BUFFER_SIZE, NULL};
struct semaphore full = {0, NULL};

void producer() {
    int item;
    while (true) {
        item = produce_item();
        wait(&empty);
        wait(&mutex);
        
        shared_data.buffer[shared_data.in] = item;
        shared_data.in = (shared_data.in + 1) % BUFFER_SIZE;
        
        signal(&mutex);
        signal(&full);
    }
}

void consumer() {
    int item;
    while (true) {
        wait(&full);
        wait(&mutex);
        
        item = shared_data.buffer[shared_data.out];
        shared_data.out = (shared_data.out + 1) % BUFFER_SIZE;
        
        signal(&mutex);
        signal(&empty);
        
        consume_item(item);
    }
}
```

### Readers-Writers Problem
```c
struct semaphore rw_mutex = {1, NULL};  // Mutual exclusion for writers
struct semaphore mutex = {1, NULL};     // Mutual exclusion for read_count
int read_count = 0;

void writer() {
    while (true) {
        wait(&rw_mutex);
        
        // Writing is performed
        write_data();
        
        signal(&rw_mutex);
    }
}

void reader() {
    while (true) {
        wait(&mutex);
        read_count++;
        if (read_count == 1)
            wait(&rw_mutex);  // First reader locks writers
        signal(&mutex);
        
        // Reading is performed
        read_data();
        
        wait(&mutex);
        read_count--;
        if (read_count == 0)
            signal(&rw_mutex);  // Last reader unlocks writers
        signal(&mutex);
    }
}
```

### Dining Philosophers Problem
```c
#define N 5
struct semaphore chopstick[N];

void philosopher(int i) {
    while (true) {
        think();
        
        wait(&chopstick[i]);
        wait(&chopstick[(i + 1) % N]);
        
        eat();
        
        signal(&chopstick[i]);
        signal(&chopstick[(i + 1) % N]);
    }
}

// Deadlock-free solution
void philosopher_safe(int i) {
    while (true) {
        think();
        
        if (i % 2 == 0) {
            wait(&chopstick[i]);
            wait(&chopstick[(i + 1) % N]);
        } else {
            wait(&chopstick[(i + 1) % N]);
            wait(&chopstick[i]);
        }
        
        eat();
        
        signal(&chopstick[i]);
        signal(&chopstick[(i + 1) % N]);
    }
}
```

## Monitors

### Monitor Structure
```c
struct monitor {
    struct mutex monitor_lock;
    struct condition_variable conditions[MAX_CONDITIONS];
    // Shared data
    int shared_variables[MAX_VARS];
};

void monitor_enter(struct monitor *m) {
    mutex_acquire(&m->monitor_lock);
}

void monitor_exit(struct monitor *m) {
    mutex_release(&m->monitor_lock);
}

void condition_wait(struct condition_variable *cv, struct monitor *m) {
    add_to_queue(&cv->waiting_queue, current_process);
    monitor_exit(m);
    block();
    monitor_enter(m);
}

void condition_signal(struct condition_variable *cv) {
    if (!queue_empty(&cv->waiting_queue)) {
        struct process *p = remove_from_queue(&cv->waiting_queue);
        wakeup(p);
    }
}
```

### Producer-Consumer with Monitor
```c
struct buffer_monitor {
    int buffer[BUFFER_SIZE];
    int count, in, out;
    struct condition_variable not_full;
    struct condition_variable not_empty;
};

void produce(struct buffer_monitor *bm, int item) {
    monitor_enter(bm);
    
    while (bm->count == BUFFER_SIZE) {
        condition_wait(&bm->not_full, bm);
    }
    
    bm->buffer[bm->in] = item;
    bm->in = (bm->in + 1) % BUFFER_SIZE;
    bm->count++;
    
    condition_signal(&bm->not_empty);
    monitor_exit(bm);
}

int consume(struct buffer_monitor *bm) {
    monitor_enter(bm);
    
    while (bm->count == 0) {
        condition_wait(&bm->not_empty, bm);
    }
    
    int item = bm->buffer[bm->out];
    bm->out = (bm->out + 1) % BUFFER_SIZE;
    bm->count--;
    
    condition_signal(&bm->not_full);
    monitor_exit(bm);
    
    return item;
}
```

## Atomic Variables

### Atomic Operations
```c
struct atomic_int {
    volatile int value;
};

int atomic_load(struct atomic_int *atomic) {
    return atomic->value;
}

void atomic_store(struct atomic_int *atomic, int value) {
    atomic->value = value;
}

int atomic_fetch_add(struct atomic_int *atomic, int operand) {
    int old_value;
    do {
        old_value = atomic->value;
    } while (!compare_and_swap(&atomic->value, old_value, old_value + operand));
    return old_value;
}

bool atomic_compare_exchange(struct atomic_int *atomic, int *expected, int desired) {
    if (atomic->value == *expected) {
        atomic->value = desired;
        return true;
    } else {
        *expected = atomic->value;
        return false;
    }
}
```

## Alternative Approaches

### Transactional Memory
```c
void transfer_money(struct account *from, struct account *to, int amount) {
    __transaction_atomic {
        if (from->balance >= amount) {
            from->balance -= amount;
            to->balance += amount;
        }
    }
}
```

### Priority Inversion Solutions
```c
struct priority_inheritance_mutex {
    int locked;
    struct process *owner;
    struct process_queue waiting_queue;
    int original_priority;
};

void pi_mutex_lock(struct priority_inheritance_mutex *pim) {
    if (pim->locked && pim->owner->priority < current_process->priority) {
        // Boost owner's priority
        pim->original_priority = pim->owner->priority;
        pim->owner->priority = current_process->priority;
    }
    
    // Standard mutex lock logic
    while (pim->locked) {
        add_to_queue(&pim->waiting_queue, current_process);
        block();
    }
    
    pim->locked = 1;
    pim->owner = current_process;
}

void pi_mutex_unlock(struct priority_inheritance_mutex *pim) {
    pim->locked = 0;
    
    // Restore original priority if boosted
    if (pim->original_priority != -1) {
        pim->owner->priority = pim->original_priority;
        pim->original_priority = -1;
    }
    
    pim->owner = NULL;
    
    if (!queue_empty(&pim->waiting_queue)) {
        struct process *next = remove_from_queue(&pim->waiting_queue);
        wakeup(next);
    }
}
```

## Lab Exercises

### Exercise 1: Implement Semaphore
```c
struct semaphore {
    int value;
    struct process_queue waiting_queue;
    struct spinlock lock;
};

void semaphore_init(struct semaphore *sem, int initial_value);
void semaphore_wait(struct semaphore *sem);
void semaphore_signal(struct semaphore *sem);
void semaphore_destroy(struct semaphore *sem);
```

### Exercise 2: Producer-Consumer Implementation
```c
#define BUFFER_SIZE 10

struct shared_buffer {
    int buffer[BUFFER_SIZE];
    int in, out, count;
    struct semaphore mutex;
    struct semaphore empty;
    struct semaphore full;
};

void producer_thread(struct shared_buffer *sb);
void consumer_thread(struct shared_buffer *sb);
```

## Quiz Questions
1. What are the three requirements for a solution to the critical section problem?
2. Explain the difference between binary and counting semaphores
3. How does the readers-writers problem demonstrate priority issues?
4. What is priority inversion and how can it be solved?
5. Compare monitors with semaphores for synchronization

## Next Module
Module 7: Deadlocks