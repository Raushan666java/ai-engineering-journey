# Module 4: Threading and Concurrency

## Thread Fundamentals

### What is a Thread?
A thread is a lightweight process that shares memory space with other threads in the same process.

### Thread vs Process
| Aspect | Process | Thread |
|--------|---------|--------|
| Memory | Separate address space | Shared address space |
| Creation | Expensive | Lightweight |
| Communication | IPC required | Direct memory access |
| Context Switch | Heavy | Light |

## Thread Models

### User-Level Threads
```c
struct user_thread {
    int tid;
    void *stack;
    jmp_buf context;
    int state;
    struct user_thread *next;
};

struct thread_scheduler {
    struct user_thread *ready_queue;
    struct user_thread *current_thread;
    int time_slice;
};

void thread_yield() {
    if (setjmp(current_thread->context) == 0) {
        schedule_next_thread();
        longjmp(next_thread->context, 1);
    }
}
```

### Kernel-Level Threads
```c
struct kernel_thread {
    int tid;
    int pid;                    // Parent process
    struct registers regs;      // CPU registers
    void *kernel_stack;         // Kernel stack
    void *user_stack;          // User stack
    int priority;
    int state;
};

int create_kernel_thread(void (*start_routine)(void*), void *arg) {
    struct kernel_thread *thread = allocate_thread();
    thread->tid = next_tid++;
    thread->kernel_stack = allocate_kernel_stack();
    thread->user_stack = allocate_user_stack();
    
    setup_thread_context(thread, start_routine, arg);
    add_to_ready_queue(thread);
    
    return thread->tid;
}
```

## Thread Synchronization

### Race Conditions
```c
int global_counter = 0;

void increment_counter() {
    int temp = global_counter;  // Read
    temp = temp + 1;           // Modify
    global_counter = temp;     // Write
    // Race condition: Another thread can modify between read and write
}
```

### Critical Section Problem
```c
struct critical_section {
    bool entry_section();     // Request entry
    void critical_section();  // Critical code
    void exit_section();     // Release
    void remainder_section(); // Non-critical code
};

// Peterson's Algorithm for 2 processes
bool flag[2] = {false, false};
int turn = 0;

void peterson_enter(int process_id) {
    int other = 1 - process_id;
    flag[process_id] = true;
    turn = other;
    while (flag[other] && turn == other) {
        // Busy wait
    }
}

void peterson_exit(int process_id) {
    flag[process_id] = false;
}
```

## Synchronization Primitives

### Mutex Implementation
```c
struct mutex {
    int locked;
    struct thread_queue waiting_threads;
    spinlock_t spinlock;
};

void mutex_lock(struct mutex *m) {
    spin_lock(&m->spinlock);
    
    if (m->locked) {
        enqueue(&m->waiting_threads, current_thread);
        thread_block();
        spin_unlock(&m->spinlock);
        schedule();
    } else {
        m->locked = 1;
        spin_unlock(&m->spinlock);
    }
}

void mutex_unlock(struct mutex *m) {
    spin_lock(&m->spinlock);
    
    if (!queue_empty(&m->waiting_threads)) {
        struct thread *next = dequeue(&m->waiting_threads);
        thread_unblock(next);
    } else {
        m->locked = 0;
    }
    
    spin_unlock(&m->spinlock);
}
```

### Semaphore Implementation
```c
struct semaphore {
    int value;
    struct thread_queue waiting_threads;
    spinlock_t spinlock;
};

void semaphore_wait(struct semaphore *sem) {
    spin_lock(&sem->spinlock);
    
    sem->value--;
    if (sem->value < 0) {
        enqueue(&sem->waiting_threads, current_thread);
        thread_block();
        spin_unlock(&sem->spinlock);
        schedule();
    } else {
        spin_unlock(&sem->spinlock);
    }
}

void semaphore_signal(struct semaphore *sem) {
    spin_lock(&sem->spinlock);
    
    sem->value++;
    if (sem->value <= 0) {
        struct thread *next = dequeue(&sem->waiting_threads);
        thread_unblock(next);
    }
    
    spin_unlock(&sem->spinlock);
}
```

### Condition Variables
```c
struct condition_variable {
    struct thread_queue waiting_threads;
    spinlock_t spinlock;
};

void cond_wait(struct condition_variable *cv, struct mutex *mutex) {
    spin_lock(&cv->spinlock);
    
    enqueue(&cv->waiting_threads, current_thread);
    thread_block();
    
    spin_unlock(&cv->spinlock);
    mutex_unlock(mutex);
    
    schedule();
    
    mutex_lock(mutex);
}

void cond_signal(struct condition_variable *cv) {
    spin_lock(&cv->spinlock);
    
    if (!queue_empty(&cv->waiting_threads)) {
        struct thread *next = dequeue(&cv->waiting_threads);
        thread_unblock(next);
    }
    
    spin_unlock(&cv->spinlock);
}
```

## Classic Synchronization Problems

### Producer-Consumer Problem
```c
#define BUFFER_SIZE 10

struct buffer {
    int items[BUFFER_SIZE];
    int in, out, count;
    struct mutex mutex;
    struct condition_variable not_full;
    struct condition_variable not_empty;
};

void producer(struct buffer *buf, int item) {
    mutex_lock(&buf->mutex);
    
    while (buf->count == BUFFER_SIZE) {
        cond_wait(&buf->not_full, &buf->mutex);
    }
    
    buf->items[buf->in] = item;
    buf->in = (buf->in + 1) % BUFFER_SIZE;
    buf->count++;
    
    cond_signal(&buf->not_empty);
    mutex_unlock(&buf->mutex);
}

int consumer(struct buffer *buf) {
    mutex_lock(&buf->mutex);
    
    while (buf->count == 0) {
        cond_wait(&buf->not_empty, &buf->mutex);
    }
    
    int item = buf->items[buf->out];
    buf->out = (buf->out + 1) % BUFFER_SIZE;
    buf->count--;
    
    cond_signal(&buf->not_full);
    mutex_unlock(&buf->mutex);
    
    return item;
}
```

### Readers-Writers Problem
```c
struct rw_lock {
    int readers;
    bool writer;
    struct mutex mutex;
    struct condition_variable read_ok;
    struct condition_variable write_ok;
};

void reader_lock(struct rw_lock *rw) {
    mutex_lock(&rw->mutex);
    
    while (rw->writer) {
        cond_wait(&rw->read_ok, &rw->mutex);
    }
    
    rw->readers++;
    mutex_unlock(&rw->mutex);
}

void reader_unlock(struct rw_lock *rw) {
    mutex_lock(&rw->mutex);
    
    rw->readers--;
    if (rw->readers == 0) {
        cond_signal(&rw->write_ok);
    }
    
    mutex_unlock(&rw->mutex);
}

void writer_lock(struct rw_lock *rw) {
    mutex_lock(&rw->mutex);
    
    while (rw->readers > 0 || rw->writer) {
        cond_wait(&rw->write_ok, &rw->mutex);
    }
    
    rw->writer = true;
    mutex_unlock(&rw->mutex);
}

void writer_unlock(struct rw_lock *rw) {
    mutex_lock(&rw->mutex);
    
    rw->writer = false;
    cond_broadcast(&rw->read_ok);
    cond_signal(&rw->write_ok);
    
    mutex_unlock(&rw->mutex);
}
```

## Thread Pools

### Thread Pool Implementation
```c
struct thread_pool {
    struct thread *threads;
    int num_threads;
    struct task_queue queue;
    struct mutex queue_mutex;
    struct condition_variable queue_cond;
    bool shutdown;
};

struct task {
    void (*function)(void *);
    void *argument;
    struct task *next;
};

void* worker_thread(void *arg) {
    struct thread_pool *pool = (struct thread_pool*)arg;
    
    while (!pool->shutdown) {
        mutex_lock(&pool->queue_mutex);
        
        while (queue_empty(&pool->queue) && !pool->shutdown) {
            cond_wait(&pool->queue_cond, &pool->queue_mutex);
        }
        
        if (pool->shutdown) {
            mutex_unlock(&pool->queue_mutex);
            break;
        }
        
        struct task *task = dequeue_task(&pool->queue);
        mutex_unlock(&pool->queue_mutex);
        
        task->function(task->argument);
        free(task);
    }
    
    return NULL;
}

void submit_task(struct thread_pool *pool, void (*func)(void*), void *arg) {
    struct task *task = malloc(sizeof(struct task));
    task->function = func;
    task->argument = arg;
    
    mutex_lock(&pool->queue_mutex);
    enqueue_task(&pool->queue, task);
    cond_signal(&pool->queue_cond);
    mutex_unlock(&pool->queue_mutex);
}
```

## Lock-Free Programming

### Atomic Operations
```c
// Compare-and-swap implementation
bool compare_and_swap(int *ptr, int expected, int new_value) {
    int old_value = *ptr;
    if (old_value == expected) {
        *ptr = new_value;
        return true;
    }
    return false;
}

// Lock-free counter
struct atomic_counter {
    volatile int value;
};

void atomic_increment(struct atomic_counter *counter) {
    int old_value, new_value;
    do {
        old_value = counter->value;
        new_value = old_value + 1;
    } while (!compare_and_swap(&counter->value, old_value, new_value));
}
```

### Lock-Free Stack
```c
struct lf_stack_node {
    void *data;
    struct lf_stack_node *next;
};

struct lf_stack {
    struct lf_stack_node *head;
};

void lf_push(struct lf_stack *stack, void *data) {
    struct lf_stack_node *new_node = malloc(sizeof(struct lf_stack_node));
    new_node->data = data;
    
    struct lf_stack_node *old_head;
    do {
        old_head = stack->head;
        new_node->next = old_head;
    } while (!compare_and_swap(&stack->head, old_head, new_node));
}

void* lf_pop(struct lf_stack *stack) {
    struct lf_stack_node *old_head;
    struct lf_stack_node *new_head;
    
    do {
        old_head = stack->head;
        if (!old_head) return NULL;
        new_head = old_head->next;
    } while (!compare_and_swap(&stack->head, old_head, new_head));
    
    void *data = old_head->data;
    free(old_head);
    return data;
}
```

## Thread-Local Storage

### TLS Implementation
```c
struct tls_data {
    int key;
    void *value;
    struct tls_data *next;
};

struct thread_local_storage {
    struct tls_data *data_list;
    struct mutex mutex;
};

int tls_create_key() {
    static int next_key = 0;
    return ++next_key;
}

void tls_set_value(int key, void *value) {
    struct thread_local_storage *tls = get_current_thread_tls();
    
    mutex_lock(&tls->mutex);
    
    struct tls_data *data = find_tls_data(tls, key);
    if (!data) {
        data = malloc(sizeof(struct tls_data));
        data->key = key;
        data->next = tls->data_list;
        tls->data_list = data;
    }
    
    data->value = value;
    mutex_unlock(&tls->mutex);
}

void* tls_get_value(int key) {
    struct thread_local_storage *tls = get_current_thread_tls();
    
    mutex_lock(&tls->mutex);
    struct tls_data *data = find_tls_data(tls, key);
    void *value = data ? data->value : NULL;
    mutex_unlock(&tls->mutex);
    
    return value;
}
```

## Lab Exercises

### Exercise 1: Thread Library
```c
// Implement user-level thread library
typedef struct thread {
    int tid;
    void *stack;
    jmp_buf context;
    int state;
} thread_t;

int thread_create(thread_t *thread, void (*start_routine)(void*), void *arg);
void thread_yield(void);
int thread_join(thread_t thread, void **retval);
void thread_exit(void *retval);
```

### Exercise 2: Synchronization Primitives
```c
// Implement mutex and semaphore
typedef struct {
    int locked;
    // Add necessary fields
} mutex_t;

int mutex_init(mutex_t *mutex);
int mutex_lock(mutex_t *mutex);
int mutex_unlock(mutex_t *mutex);
int mutex_destroy(mutex_t *mutex);
```

## Quiz Questions
1. What is the difference between user-level and kernel-level threads?
2. Explain the race condition problem with an example
3. How does Peterson's algorithm solve the critical section problem?
4. What are the advantages of lock-free programming?
5. Describe the producer-consumer problem and its solution

## Next Module
Module 5: CPU Scheduling