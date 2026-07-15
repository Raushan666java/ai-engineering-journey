# Chapter 6: Semaphores & Monitors

**<< [Process Synchronization](./05-synchronization.md)** | [**Next: Deadlocks**](./07-deadlocks.md) >>

---

## Learning Objectives

- Define a semaphore and explain its two atomic operations wait() and signal()
- Distinguish between binary and counting semaphores with real-world analogies
- Solve the bounded-buffer (producer-consumer) problem with semaphores
- Implement the readers-writers problem and analyze its fairness issues
- Solve the dining philosophers problem and identify deadlock risks
- Analyze the sleeping barber and cigarette smokers problems
- Explain monitors as a high-level synchronization construct
- Differentiate Mesa vs Hoare monitor semantics
- Use condition variables to implement complex synchronization patterns
- Compare semaphore-based and monitor-based solutions
- Apply semaphores and monitors in real systems (Linux, POSIX, Java, C++)

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/06-semaphores-monitors/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Semaphore** | Integer variable accessed only via `wait()` and `signal()` atomic operations |
| **Binary Semaphore** | Values 0 and 1 only; behaves like a mutex but without ownership |
| **Counting Semaphore** | Integer range >= 0; controls access to multiple identical resources |
| **Monitor** | High-level construct class with automatic mutual exclusion + condition variables |
| **Mesa vs Hoare** | Mesa: signaler keeps lock, waiter rechecks. Hoare: signaler transfers lock to waiter |
| **Classic Problems** | Bounded Buffer, Readers-Writers, Dining Philosophers, Sleeping Barber, Cigarette Smokers |
| **Interview Corner** | Mutex vs Semaphore vs Condition Variable distinctions |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Semaphore Concept] --> B[Binary & Counting Semaphores]
    B --> C[Wait & Signal Operations]
    C --> D[Classic Synchronization Problems]
    D --> E[Monitors & Condition Variables]
    E --> F[Mesa vs Hoare Semantics]
    F --> G[Real System Applications]
    G --> H[Interview Corner & Summary]
</div>

---

## 1. Semaphore Fundamentals

### 1.1 What is a Semaphore?


A **semaphore** is an integer variable `S` accessed exclusively through two atomic operations: `wait(S)` (P → _proberen_, "to test" in Dutch) and `signal(S)` (V → _verhogen_, "to increment" in Dutch). Edsger Dijkstra introduced semaphores in 1965 as a fundamental synchronization primitive.

**Real-World Analogy: Online Ticket Booking System**

A concert venue has 100 seats. The ticketing system behaves exactly like a counting semaphore:

- The integer `S` = number of remaining seats
- `wait(S)` = booking a seat (if one is available)
- `signal(S)` = cancelling a booking (releasing a seat)

**Numbered Steps → How a Semaphore Works:**

1. Thread calls `wait(S)` → operation enters the atomic critical section
2. System reads current value of `S`
3. If `S > 0`: decrement `S` by 1, thread proceeds immediately
4. If `S == 0`: thread is **blocked** and placed in the semaphore's waiting queue
5. Thread remains blocked until another thread calls `signal(S)`
6. When `signal(S)` executes: increment `S` by 1
7. If the waiting queue is non-empty: one waiting thread is **woken up** and allowed to proceed
8. The awakened thread re-enters step 2 (re-checking `S`)

**Formal Definition:**

```
wait(S):
    while (S <= 0)   // busy-wait OR block
        ;            // do nothing (or put thread to sleep)
    S = S - 1;

signal(S):
    S = S + 1;
```

**Pseudocode Implementation (blocking variant):**

```
// Blocking semaphore with process queue
struct Semaphore {
    int value;
    Queue<PCB> waiting_queue;  // queue of blocked processes
}

wait(Semaphore S):
    disable_interrupts()
    S.value = S.value - 1
    if S.value < 0:
        // Block this process
        add_current_process_to(S.waiting_queue)
        block_current_process()  // yields CPU
    enable_interrupts()

signal(Semaphore S):
    disable_interrupts()
    S.value = S.value + 1
    if S.value <= 0:
        // Wake a blocked process
        PCB pcb = remove_from(S.waiting_queue)
        wake_up(pcb)  // move to ready queue
    enable_interrupts()
```

**Key invariant**: When `S.value < 0`, `|S.value|` = number of processes blocked on that semaphore.

**Dry Run Trace Table → Single Semaphore, Two Threads:**

| Step | Thread | Operation | S (before) | Condition | S (after) | Blocked Queue | Ready Queue |
|------|--------|-----------|-----------|-----------|-----------|--------------|-------------|
| 1 | T1 | wait(S) | 1 | S > 0, proceed | 0 | [] | [T1] |
| 2 | T2 | wait(S) | 0 | S == 0, BLOCK | -1 | [T2] | [T1] |
| 3 | T1 | signal(S) | -1 | queue non-empty, wake T2 | 0 | [] | [T2] |
| 4 | T2 | (resumes) | 0 | S &lt;= 0, but woken by signal | - | - | - |

**C++ Implementation:**

```cpp
#include <iostream>
#include <thread>
#include <queue>
#include <mutex>
#include <condition_variable>

class Semaphore {
private:
    int count;
    std::mutex mtx;
    std::condition_variable cv;

public:
    explicit Semaphore(int initial_count) : count(initial_count) {}

    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) {
            cv.wait(lock);  // block until signaled
        }
        count--;
    }

    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();  // wake one waiting thread
    }
};

int shared = 0;
Semaphore sem(1);

void worker(int id) {
    sem.wait();
    shared++;
    std::cout << "Thread " << id << " incremented to " << shared << "\n";
    sem.signal();
}

int main() {
    std::thread t1(worker, 1);
    std::thread t2(worker, 2);
    std::thread t3(worker, 3);
    t1.join(); t2.join(); t3.join();
    std::cout << "Final value: " << shared << "\n";
    return 0;
}
```

**Python Implementation:**

```python
import threading
import time

class Semaphore:
    def __init__(self, initial: int):
        self.count = initial
        self.mutex = threading.Lock()
        self.cond = threading.Condition(self.mutex)

    def wait(self):
        with self.cond:
            while self.count == 0:
                self.cond.wait()
            self.count -= 1

    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

# Usage
sem = Semaphore(1)
shared = 0

def worker(id):
    global shared
    sem.wait()
    shared += 1
    print(f"Thread {id} incremented to {shared}")
    sem.signal()

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]
for t in threads: t.start()
for t in threads: t.join()
print(f"Final value: {shared}")
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time (wait, no contention)** | O(1) | Single atomic decrement |
| **Time (wait, contention)** | O(1) (block) + scheduler overhead | Thread blocks, scheduler selects next |
| **Time (signal, no waiters)** | O(1) | Single atomic increment |
| **Time (signal, with waiters)** | O(1) (wake) + scheduler overhead | Dequeue + ready-queue insertion |
| **Space** | O(n) | n = maximum blocked threads |
| **Memory per semaphore** | O(1) | Integer + queue pointer |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Simple integer API → easy to understand conceptually | No ownership → any thread can signal, enabling accidental wake-ups |
| Efficient O(1) operations in uncontended case | Low-level → easy to forget signal() causing deadlock |
| Both mutual exclusion and synchronization in one primitive | Binary semaphore != mutex (lack of ownership causes subtle bugs) |
| Counting variant naturally models resource pools | No compiler enforcement → errors are runtime-only |
| Blocking (not busy-wait) conserves CPU | Prone to deadlock, starvation, and priority inversion |

**Edge Cases:**

| Edge Case | Cause | Consequence | Solution |
|-----------|-------|-------------|----------|
| **Signal overflow** | signal() called too many times without wait() | Count exceeds max int; undefined behavior | Use bounded semaphore or periodically reset |
| **Double wait on same thread** | Deadlock thread calls wait() twice | Thread blocks forever | Never wait() twice without intervening signal() |
| **Orphaned signal** | Thread exits without calling signal() | Count permanently wrong; other threads starve | Use RAII wrappers or try/finally |
| **Spurious wakeup** | OS wakes a thread waiting on semaphore | Thread proceeds even if count == 0 | Always re-check count in while() loop |
| **Priority inversion** | High-prio thread blocks on low-prio thread holding sem | Low-prio thread may be preempted by medium-prio | Use priority inheritance protocol |

### 1.2 Wait (P) and Signal (V) Operations → Deep Dive


**Numbered Steps → wait(S) in the Blocking Variant:**

1. Disable interrupts (or acquire internal spinlock)
2. Decrement `S.value` by 1: `S.value = S.value - 1`
3. If `S.value >= 0`: re-enable interrupts, thread continues with resource acquired
4. If `S.value < 0`: thread must block
5. Save thread's current context (registers, PC, stack pointer)
6. Move thread from running state to blocked state
7. Insert thread into semaphore's FIFO waiting queue
8. Re-enable interrupts
9. Invoke CPU scheduler to pick next ready thread

**Numbered Steps → signal(S) in the Blocking Variant:**

1. Disable interrupts (or acquire internal spinlock)
2. Increment `S.value` by 1: `S.value = S.value + 1`
3. If `S.value > 0`: no waiters exist; re-enable interrupts, return
4. If `S.value <= 0`: at least one waiter exists
5. Remove one PCB from the front of the waiting queue (FIFO)
6. Change its state from blocked to ready
7. Insert it into the ready queue
8. Re-enable interrupts
9. (Optional) If scheduler is preemptive, yield CPU to let the newly-ready thread run

**Dry Run Trace → Producer-Consumer with Binary Semaphore:**

Setup: `sem = 1` (binary). Two threads: T1 (producer), T2 (consumer).

| Step | Thread | Op | sem.value | Queue | Condition |
|------|--------|----|-----------|-------|-----------|
| 1 | T1 | wait(sem) | 1 | [] | T1 decrements to 0, proceeds |
| 2 | T1 | (in CS) | 0 | [] | T1 is producing |
| 3 | T2 | wait(sem) | 0 | [T2] | T2 decrements to -1, blocks |
| 4 | T1 | signal(sem) | -1 | [T2] | T1 increments to 0, wakes T2 |
| 5 | T2 | (resumes) | 0 | [] | T2 enters CS |
| 6 | T2 | signal(sem) | 0 | [] | T2 increments to 1 |
| 7 | T1 | wait(sem) | 1 | [] | T1 decrements to 0, enters CS |

### 1.3 Binary vs Counting Semaphore → Detailed Comparison


| Property | Binary Semaphore | Counting Semaphore |
|----------|-----------------|-------------------|
| **Value range** | 0 or 1 only | 0, 1, 2, ..., N (any non-negative integer) |
| **Initial value** | Usually 1 (unlocked) or 0 (locked) | N (number of available resources) |
| **Purpose** | Mutual exclusion | Resource counting and synchronization |
| **Resource model** | Single resource (one key, one door) | Multiple identical resources (N keys, one door) |
| **wait() when 0** | Blocks thread | Blocks thread |
| **signal() when 1** | No effect on value (stays 1) | May increase beyond 1 |
| **Used as mutex?** | Yes, with caution (no ownership) | No → would allow >1 thread into CS |
| **Implementation** | Can be built from counting semaphore with max=1 | Generalization of binary semaphore |
| **Typical use** | Lock protection, thread rendezvous | Resource pools, bounded queues |

**Real-World Analogy:**

- **Binary semaphore**: A single bathroom key. Only one person can use the bathroom at a time. The key is either at the front desk (0 = available) or with someone (1 = in use).
- **Counting semaphore**: A parking garage with 50 spaces. The counter shows how many spaces are left. Multiple cars can park simultaneously up to the capacity.

**Binary Semaphore Implementation in C++:**

```cpp
class BinarySemaphore {
private:
    int count;  // 0 or 1 only
    std::mutex mtx;
    std::condition_variable cv;

public:
    explicit BinarySemaphore(int initial) : count(initial ? 1 : 0) {}

    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count = 0;  // Only ever set to 0
    }

    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        if (count == 0) {
            count = 1;
            cv.notify_one();
        }  // If count already 1, no effect (binary invariant)
    }
};
```

**Counting Semaphore Implementation in Python:**

```python
class CountingSemaphore:
    def __init__(self, initial: int):
        self.count = initial  # Can be any non-negative int
        self.mutex = threading.Lock()
        self.cond = threading.Condition(self.mutex)

    def wait(self):
        with self.cond:
            while self.count == 0:
                self.cond.wait()
            self.count -= 1  # Any decrement to >= 0

    def signal(self):
        with self.cond:
            self.count += 1  # Can grow beyond initial
            self.cond.notify()

# Usage: parking lot with 3 spaces
lot = CountingSemaphore(3)

def park(car_id):
    lot.wait()
    print(f"Car {car_id} parked. Spaces left: (unknown)")
    time.sleep(1)
    lot.signal()
    print(f"Car {car_id} left.")
```

---

## 2. Semaphore vs Mutex → Critical Comparison

| Property | Semaphore (Binary) | Mutex |
|----------|-------------------|-------|
| **Ownership** | None → any thread can signal | Yes → only owning thread can unlock |
| **Initial state** | Configurable (0 or 1) | Always unlocked initially |
| **Unlock by wrong thread** | Allowed (can cause bugs) | UB or error (checked in debug builds) |
| **Reentrant (recursive)** | No | Yes (many implementations) |
| **Priority inheritance** | No (unless custom) | Yes (in RTOS and Linux) |
| **Use case** | Signaling, producer-consumer, resource counting | Mutual exclusion, data structure protection |
| **Performance** | Slightly slower (queue management) | Optimized for fast path |
| **In kernel** | Linux: `struct semaphore` | Linux: `struct mutex` (futex-based) |

**When to use which?**

Use a **mutex** when you need to protect shared data → only one thread should read/write at a time. Use a **semaphore** when you need to signal between threads or count available resources.

**Demonstration → Why Binary Semaphore Is Not a Mutex:**

```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>

sem_t sem;
int shared = 0;

void bad_behavior() {
    // Thread 1 acquires the semaphore
    sem_wait(&sem);
    shared = 42;
    // Thread 1 exits without signaling → DEADLOCK for others
}

void wrong_thread_signals() {
    sem_wait(&sem);
    shared = 99;
    sem_post(&sem);  // Correct: this thread unlocks
}

int main() {
    sem_init(&sem, 0, 1);
    std::thread t1(bad_behavior);
    t1.join();
    // Now sem == 0 permanently → any future thread is stuck
    // THIS CANNOT HAPPEN WITH A MUTEX (unless buggy code)
    sem_destroy(&sem);
    return 0;
}
```

A mutex would detect this: unlocking from the wrong thread returns an error or causes undefined behavior that can be caught.

---

## 3. Classic Synchronization Problems

### 3.1 Producer-Consumer (Bounded Buffer)


**Scenario:** A buffer of fixed size N. Producer processes put items into the buffer; consumer processes remove items. Producers must block when the buffer is full; consumers must block when empty.

**Real-World Analogy:** A bakery with N display shelves. The baker (producer) bakes and places pastries on shelves. The customer (consumer) takes pastries. If all shelves are full, the baker waits. If all shelves are empty, customers wait.

**Numbered Steps:**

1. Producer creates an item
2. Producer calls `wait(empty)` → decrements empty-slot counter
3. If no empty slots, producer blocks
4. Producer calls `wait(mutex)` → locks buffer for exclusive access
5. Producer places item into buffer at position `in`
6. Producer calls `signal(mutex)` → releases buffer lock
7. Producer calls `signal(full)` → increments full-slot counter, wakes consumer
8. Consumer calls `wait(full)` → decrements full-slot counter
9. If no items available, consumer blocks
10. Consumer calls `wait(mutex)` → locks buffer
11. Consumer removes item from buffer at position `out`
12. Consumer calls `signal(mutex)` → releases buffer
13. Consumer calls `signal(empty)` → increments empty-slot counter, wakes producer

**Pseudocode:**

```
semaphore empty = N   // N empty slots initially
semaphore full  = 0   // 0 full slots initially
semaphore mutex = 1   // binary for buffer access

producer():
    while true:
        item = produce()
        wait(empty)     // decrement empty count
        wait(mutex)     // lock buffer
        buffer[in] = item
        in = (in + 1) % N
        signal(mutex)   // unlock buffer
        signal(full)    // increment full count

consumer():
    while true:
        wait(full)      // decrement full count
        wait(mutex)     // lock buffer
        item = buffer[out]
        out = (out + 1) % N
        signal(mutex)   // unlock buffer
        signal(empty)   // increment empty count
        consume(item)
```

**Dry Run Trace Table → Buffer Size N=3, 1 Producer, 1 Consumer:**

| Step | Action | empty | full | mutex | Buffer State | Queue (blocked) |
|------|--------|-------|------|-------|-------------|-----------------|
| 0 | Initial | 3 | 0 | 1 | [_, _, _] | |
| 1 | P: wait(empty) | 2 | 0 | 1 | [_, _, _] | |
| 2 | P: wait(mutex) | 2 | 0 | 0 | [_, _, _] | |
| 3 | P: produce item A, buffer[0]=A | 2 | 0 | 0 | [A, _, _] | |
| 4 | P: signal(mutex) | 2 | 0 | 1 | [A, _, _] | |
| 5 | P: signal(full) | 2 | 1 | 1 | [A, _, _] | |
| 6 | C: wait(full) | 2 | 0 | 1 | [A, _, _] | |
| 7 | C: wait(mutex) | 2 | 0 | 0 | [A, _, _] | |
| 8 | C: consume A, buffer[0]=free | 2 | 0 | 0 | [_, _, _] | |
| 9 | C: signal(mutex) | 2 | 0 | 1 | [_, _, _] | |
| 10 | C: signal(empty) | 3 | 0 | 1 | [_, _, _] | |
| 11 | P: wait(empty) | 2 | 0 | 1 | [_, _, _] | |
| 12 | P: wait(mutex) | 2 | 0 | 0 | [_, _, _] | |
| 13 | P: produce B, buffer[1]=B | 2 | 0 | 0 | [_, B, _] | |
| 14 | P: signal(mutex) | 2 | 0 | 1 | [_, B, _] | |
| 15 | P: signal(full) | 2 | 1 | 1 | [_, B, _] | |
| 16 | P: wait(empty) | 1 | 1 | 1 | [_, B, _] | |
| 17 | P: wait(mutex) | 1 | 1 | 0 | [_, B, _] | |
| 18 | P: produce C, buffer[2]=C | 1 | 1 | 0 | [_, B, C] | |
| 19 | P: signal(mutex) | 1 | 1 | 1 | [_, B, C] | |
| 20 | P: signal(full) | 1 | 2 | 1 | [_, B, C] | |
| 21 | P: wait(empty) | 0 | 2 | 1 | [_, B, C] | |
| 22 | P: wait(mutex) | 0 | 2 | 0 | [_, B, C] | |
| 23 | P: produce D, buffer[0]=D | 0 | 2 | 0 | [D, B, C] | |
| 24 | P: signal(mutex) | 0 | 2 | 1 | [D, B, C] | |
| 25 | P: signal(full) | 0 | 3 | 1 | [D, B, C] | |
| 26 | P: wait(empty) | -1 | 3 | 1 | [D, B, C] | [P blocked] |
| 27 | C: wait(full) | -1 | 2 | 1 | [D, B, C] | [P] |
| 28 | C: wait(mutex) | -1 | 2 | 0 | [D, B, C] | [P] |
| 29 | C: consume D, buffer[0]=free | -1 | 2 | 0 | [_, B, C] | [P] |
| 30 | C: signal(mutex) | -1 | 2 | 1 | [_, B, C] | [P] |
| 31 | C: signal(empty) | 0 | 2 | 1 | [_, B, C] | |
| 32 | P: resumes (was blocked on empty) | - | - | - | - | - |
**C++ Implementation (Bounded Buffer):**

```cpp
#include <iostream>
#include <thread>
#include <vector>
#include <queue>
#include <mutex>
#include <condition_variable>
#include <chrono>

class Semaphore {
    int count;
    std::mutex mtx;
    std::condition_variable cv;
public:
    Semaphore(int n) : count(n) {}
    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count--;
    }
    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();
    }
};

const int BUFFER_SIZE = 5;
std::queue<int> buffer;
Semaphore empty(BUFFER_SIZE);
Semaphore full(0);
Semaphore mutex(1);

void producer(int id) {
    for (int i = 0; i < 10; i++) {
        int item = i + id * 100;
        std::this_thread::sleep_for(std::chrono::milliseconds(100));

        empty.wait();
        mutex.wait();
        buffer.push(item);
        std::cout << "P" << id << " produced " << item
                  << " [size=" << buffer.size() << "]\n";
        mutex.signal();
        full.signal();
    }
}

void consumer(int id) {
    for (int i = 0; i < 10; i++) {
        full.wait();
        mutex.wait();
        int item = buffer.front(); buffer.pop();
        std::cout << "C" << id << " consumed " << item
                  << " [size=" << buffer.size() << "]\n";
        mutex.signal();
        empty.signal();
        std::this_thread::sleep_for(std::chrono::milliseconds(150));
    }
}

int main() {
    std::thread p1(producer, 1), p2(producer, 2);
    std::thread c1(consumer, 1), c2(consumer, 2);
    p1.join(); p2.join(); c1.join(); c2.join();
    return 0;
}
```

**Python Implementation (Bounded Buffer):**

```python
import threading
import time
import random

class Semaphore:
    def __init__(self, n: int):
        self.count = n
        self.cond = threading.Condition()

    def wait(self):
        with self.cond:
            while self.count == 0:
                self.cond.wait()
            self.count -= 1

    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

BUFFER_SIZE = 5
buffer = []
empty = Semaphore(BUFFER_SIZE)
full = Semaphore(0)
mutex = Semaphore(1)

def producer(id):
    for i in range(8):
        item = i + id * 100
        time.sleep(random.uniform(0.05, 0.2))
        empty.wait()
        mutex.wait()
        buffer.append(item)
        print(f"P{id} produced {item} [size={len(buffer)}]")
        mutex.signal()
        full.signal()

def consumer(id):
    for i in range(8):
        full.wait()
        mutex.wait()
        item = buffer.pop(0)
        print(f"C{id} consumed {item} [size={len(buffer)}]")
        mutex.signal()
        empty.signal()
        time.sleep(random.uniform(0.1, 0.3))

threads = []
for i in range(2):
    t = threading.Thread(target=producer, args=(i+1,))
    threads.append(t)
    t.start()
for i in range(2):
    t = threading.Thread(target=consumer, args=(i+1,))
    threads.append(t)
    t.start()
for t in threads:
    t.join()
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time → produce (no contention)** | O(1) | Two wait + two signal = 4 O(1) ops |
| **Time → produce (buffer full)** | O(1) block + O(n) wake | Blocked thread, scheduler overhead |
| **Time → consume (no contention)** | O(1) | Same as above |
| **Space → buffer** | O(N) | N slots for items |
| **Space → semaphores** | O(1) | Three semaphore structures |
| **Throughput bound** | O(1) per item | Linear in threads, constant per item |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Decouples producers from consumers (no direct knowledge) | Buffer size is fixed → may waste space or be insufficient |
| Handles burst production/consumption | Semaphore ordering is critical → reversed wait() causes deadlock |
| Supports multiple producers and consumers | Must ensure mutex + empty/full ordering (wait(empty) before wait(mutex)) |
| No busy-waiting → threads block efficiently | Not suitable for distributed systems |

**Edge Cases:**

| Case | Issue | Resolution |
|------|-------|------------|
| **Buffer full + mutex locked first** | Deadlock: Producer holds mutex, waits on empty → consumer can't get mutex to signal empty | Always wait(empty) before wait(mutex) |
| **Spurious wakeup of producer** | Buffer may be full when producer resumes | Wrap wait in while() loop |
| **Multiple consumers wake** | All consumers find buffer has 1 item; only one gets it | while(count==0) loop ensures re-check |
| **Producer much faster than consumer** | Buffer stays full; producer blocks frequently | Increase buffer size or add more consumers |
| **Consumer much faster than producer** | Buffer stays empty; consumer blocks frequently | Decrease buffer size or add more producers |

---

### 3.2 Readers-Writers Problem


**Scenario:** A shared database. Readers only read the data (multiple can read simultaneously). Writers need exclusive access (no readers, no other writers).

**Real-World Analogy:** A library study room. Multiple people can read silently together (readers). If someone wants to reorganize the shelves (writer), everyone must leave and the door locks until the reorganization is complete.

**Numbered Steps → Readers-Priority Variant:**

1. Reader calls `wait(mutex)` to update reader count
2. Reader increments `read_count`
3. If this is the first reader (`read_count == 1`), reader calls `wait(rw_mutex)` → locks out writers
4. Reader calls `signal(mutex)` → releases reader-count lock
5. Reader reads the shared data (multiple readers can be here simultaneously)
6. Reader calls `wait(mutex)` again to update reader count
7. Reader decrements `read_count`
8. If this is the last reader (`read_count == 0`), reader calls `signal(rw_mutex)` → lets writers in
9. Reader calls `signal(mutex)` → releases reader-count lock

**Writer Steps:**
1. Writer calls `wait(rw_mutex)` → waits until no readers and no other writer
2. Writer modifies shared data (exclusive access)
3. Writer calls `signal(rw_mutex)` → releases exclusive access

**Pseudocode:**

```
semaphore rw_mutex = 1   // exclusive access for writers
semaphore mutex = 1      // protects read_count
int read_count = 0

reader():
    wait(mutex)
    read_count++
    if read_count == 1:
        wait(rw_mutex)   // first reader locks writers out
    signal(mutex)

    // -- reading section --
    read(shared_data)

    wait(mutex)
    read_count--
    if read_count == 0:
        signal(rw_mutex) // last reader lets writers in
    signal(mutex)

writer():
    wait(rw_mutex)       // exclusive access
    // -- writing section --
    write(shared_data)
    signal(rw_mutex)
```

**Dry Run Trace → Readers-Writers (Readers-Priority):**

| Step | Thread | Op | read_count | rw_mutex | mutex | Queue |
|------|--------|----|-----------|----------|-------|-------|
| 0 | Initial | | 0 | 1 | 1 | |
| 1 | R1 | wait(mutex) | 0 | 1 | 0 | |
| 2 | R1 | read_count++ | 1 | 1 | 0 | |
| 3 | R1 | count==1, wait(rw_mutex) | 1 | 0 | 0 | |
| 4 | R1 | signal(mutex) | 1 | 0 | 1 | |
| 5 | R1 | (reading) | 1 | 0 | 1 | |
| 6 | W1 | wait(rw_mutex) | 1 | -1 | 1 | [W1] |
| 7 | R2 | wait(mutex) | 1 | -1 | 0 | [W1] |
| 8 | R2 | read_count++ | 2 | -1 | 0 | [W1] |
| 9 | R2 | count != 1, skip rw_mutex | 2 | -1 | 0 | [W1] |
| 10 | R2 | signal(mutex) | 2 | -1 | 1 | [W1] |
| 11 | R2 | (reading) | 2 | -1 | 1 | [W1] |
| 12 | R1 | wait(mutex) | 2 | -1 | 0 | [W1] |
| 13 | R1 | read_count-- | 1 | -1 | 0 | [W1] |
| 14 | R1 | count != 0, skip rw_mutex | 1 | -1 | 0 | [W1] |
| 15 | R1 | signal(mutex) | 1 | -1 | 1 | [W1] |
| 16 | R2 | wait(mutex) | 1 | -1 | 0 | [W1] |
| 17 | R2 | read_count-- | 0 | -1 | 0 | [W1] |
| 18 | R2 | count==0, signal(rw_mutex) | 0 | 0 | 0 | |
| 19 | R2 | signal(mutex) | 0 | 0 | 1 | |
| 20 | W1 | (woken, acquires rw_mutex) | 0 | 0 | 1 | |

**C++ Implementation (Readers-Writers):**

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <vector>

class Semaphore {
    int count;
    std::mutex mtx;
    std::condition_variable cv;
public:
    Semaphore(int n) : count(n) {}
    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count--;
    }
    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();
    }
};

Semaphore rw_mutex(1), mutex(1);
int read_count = 0;
int shared_data = 0;

void reader(int id) {
    for (int i = 0; i < 3; i++) {
        mutex.wait();
        read_count++;
        if (read_count == 1) rw_mutex.wait();
        mutex.signal();

        std::cout << "Reader " << id << " reads " << shared_data
                  << " (active readers: " << read_count << ")\n";

        mutex.wait();
        read_count--;
        if (read_count == 0) rw_mutex.signal();
        mutex.signal();
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }
}

void writer(int id) {
    for (int i = 0; i < 2; i++) {
        rw_mutex.wait();
        shared_data++;
        std::cout << "Writer " << id << " writes " << shared_data << "\n";
        rw_mutex.signal();
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
    }
}

int main() {
    std::vector<std::thread> threads;
    for (int i = 0; i < 3; i++) threads.push_back(std::thread(reader, i));
    for (int i = 0; i < 2; i++) threads.push_back(std::thread(writer, i));
    for (auto& t : threads) t.join();
    return 0;
}
```

**Python Implementation (Readers-Writers):**

```python
import threading
import time

class Semaphore:
    def __init__(self, n: int):
        self.count = n
        self.cond = threading.Condition()
    def wait(self):
        with self.cond:
            while self.count == 0: self.cond.wait()
            self.count -= 1
    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

rw_mutex = Semaphore(1)
mutex = Semaphore(1)
read_count = 0
shared_data = 0

def reader(id):
    global read_count, shared_data
    for _ in range(3):
        mutex.wait()
        read_count += 1
        if read_count == 1:
            rw_mutex.wait()
        mutex.signal()

        print(f"Reader {id} reads {shared_data} (active readers: {read_count})")

        mutex.wait()
        read_count -= 1
        if read_count == 0:
            rw_mutex.signal()
        mutex.signal()
        time.sleep(0.1)

def writer(id):
    global shared_data
    for _ in range(2):
        rw_mutex.wait()
        shared_data += 1
        print(f"Writer {id} writes {shared_data}")
        rw_mutex.signal()
        time.sleep(0.2)

threads = []
for i in range(3):
    threads.append(threading.Thread(target=reader, args=(i,)))
for i in range(2):
    threads.append(threading.Thread(target=writer, args=(i,)))
for t in threads: t.start()
for t in threads: t.join()
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time → reader (no writer)** | O(1) | Two mutex lock/unlock, no writer semaphore wait |
| **Time → reader (writer active)** | O(1) block | Blocked on rw_mutex until writer finishes |
| **Time → writer (no contention)** | O(1) | Single wait/signal on rw_mutex |
| **Space** | O(1) | Two semaphores + integer |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Maximum concurrency for reads | Readers-priority causes writer starvation |
| Simple implementation | Writers-priority causes reader starvation |
| Fair version possible (add queue semaphore) | No true fairness without additional mechanism |

**Edge Cases:**

| Case | Issue | Resolution |
|------|-------|------------|
| **Continuous readers** | Writer can starve indefinitely | Add service queue or writer-priority variant |
| **Writer waiting + new reader** | New reader jumps ahead (readers-priority) | Add `wait(service_queue)` to both readers and writers |
| **Nested reader/writer** | Deadlock if a reader tries to write | Use separate locks or upgrade locks |
| **read_count overflow** | Many readers wrap the counter | Use atomic or unbounded integer |

---

### 3.3 Dining Philosophers Problem


**Scenario:** Five philosophers sit at a round table with five chopsticks (one between each pair). Each philosopher alternates between thinking and eating. To eat, a philosopher needs both chopsticks (left and right). After eating, they put down both chopsticks and think.

**Real-World Analogy:** Five people at a round dinner table sharing forks. Each person needs both their left and right fork to eat. They can't reach across the table. This models resource contention where processes need multiple resources simultaneously.

**Numbered Steps → Naive (Deadlock-Prone) Version:**

1. Philosopher thinks for a random amount of time
2. Philosopher picks up left chopstick: `wait(chopsticks[left])`
3. Philosopher picks up right chopstick: `wait(chopsticks[right])`
4. Philosopher eats
5. Philosopher puts down left chopstick: `signal(chopsticks[left])`
6. Philosopher puts down right chopstick: `signal(chopsticks[right])`
7. Go back to step 1

**Deadlock Scenario:** All 5 philosophers pick up their left chopstick simultaneously. Each holds one chopstick and waits for the right one. Nobody releases. **Deadlock.**

**Pseudocode → Deadlock-Free (Waiter/Asymmetric):**

```
// Solution: Limit to 4 philosophers eating simultaneously
semaphore chopsticks[5] = {1, 1, 1, 1, 1}
semaphore limit = 4  // at most 4 can try to eat

philosopher(id):
    while true:
        think()
        wait(limit)          // Ask permission to eat
        wait(chopsticks[left])
        wait(chopsticks[right])
        eat()
        signal(chopsticks[left])
        signal(chopsticks[right])
        signal(limit)        // Release permit

// Alternative: Asymmetric → odd pick left first, even pick right first
philosopher_asymmetric(id):
    while true:
        think()
        if id % 2 == 0:     // Even: right then left
            wait(chopsticks[right])
            wait(chopsticks[left])
        else:                // Odd: left then right
            wait(chopsticks[left])
            wait(chopsticks[right])
        eat()
        signal(chopsticks[left])
        signal(chopsticks[right])
```

**Dry Run Trace → Deadlock Scenario (All 5 pick up left):**

| Step | P0 | P1 | P2 | P3 | P4 | Chopsticks state | Blocked |
|------|----|----|----|----|----|-----------------|---------|
| 0 | think | think | think | think | think | [1,1,1,1,1] | |
| 1 | pick L(0) | think | think | think | think | [0,1,1,1,1] | |
| 2 | pick L(0) | pick L(1) | think | think | think | [0,0,1,1,1] | |
| 3 | pick L(0) | pick L(1) | pick L(2) | think | think | [0,0,0,1,1] | |
| 4 | pick L(0) | pick L(1) | pick L(2) | pick L(3) | think | [0,0,0,0,1] | |
| 5 | pick L(0) | pick L(1) | pick L(2) | pick L(3) | pick L(4) | [0,0,0,0,0] | |
| 6 | pick R(1) | pick R(2) | pick R(3) | pick R(4) | pick R(0) | [0,0,0,0,0] | ALL DEADLOCKED |
**C++ Implementation (Dining Philosophers → Deadlock-Free):**

```cpp
#include <iostream>
#include <thread>
#include <vector>

class Semaphore {
    int count;
    std::mutex mtx;
    std::condition_variable cv;
public:
    Semaphore(int n) : count(n) {}
    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count--;
    }
    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();
    }
};

const int N = 5;
Semaphore chopsticks[N]{1,1,1,1,1};
Semaphore limit(4);  // At most 4 can compete for chopsticks

void philosopher(int id) {
    int left = id;
    int right = (id + 1) % N;

    for (int i = 0; i < 5; i++) {
        std::cout << "Philosopher " << id << " thinking...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(500 + id * 100));

        limit.wait();
        chopsticks[left].wait();
        chopsticks[right].wait();

        std::cout << "Philosopher " << id << " EATING\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(300));

        chopsticks[left].signal();
        chopsticks[right].signal();
        limit.signal();
    }
}

int main() {
    std::vector<std::thread> philosophers;
    for (int i = 0; i < N; i++)
        philosophers.push_back(std::thread(philosopher, i));
    for (auto& t : philosophers) t.join();
    return 0;
}
```

**Python Implementation:**

```python
import threading
import time
import random

class Semaphore:
    def __init__(self, n: int):
        self.count = n
        self.cond = threading.Condition()
    def wait(self):
        with self.cond:
            while self.count == 0: self.cond.wait()
            self.count -= 1
    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

N = 5
chopsticks = [Semaphore(1) for _ in range(N)]
limit = Semaphore(4)

def philosopher(id):
    left, right = id, (id + 1) % N
    for _ in range(5):
        print(f"Philosopher {id} thinking...")
        time.sleep(random.uniform(0.3, 0.7))

        limit.wait()
        chopsticks[left].wait()
        chopsticks[right].wait()

        print(f"Philosopher {id} EATING")
        time.sleep(random.uniform(0.3, 0.5))

        chopsticks[left].signal()
        chopsticks[right].signal()
        limit.signal()

threads = [threading.Thread(target=philosopher, args=(i,)) for i in range(N)]
for t in threads: t.start()
for t in threads: t.join()
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time → eat (no contention)** | O(1) | Two wait + two signal on chopsticks |
| **Time → eat (contention)** | O(n) block | At most N-1 philosophers may compete |
| **Space** | O(N) | N chopstick semaphores + limit semaphore |
| **Deadlock prevention overhead** | O(1) per eat | Single extra semaphore check |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Simple conceptual model for resource contention | Naive solution deadlocks → all can pick up left fork |
| Can be solved without deadlock via 4 strategies | Starvation possible if some philosophers eat more often |
| Illustrates circular wait condition | Does not model general resource allocation (only 2 resources per process) |
| Multiple known correct solutions | Some solutions reduce concurrency (e.g., limit=4) |

**Edge Cases:**

| Case | Issue | Resolution |
|------|-------|------------|
| **All pick up left simultaneously** | Circular wait deadlock | Limit to N-1 eaters OR asymmetric pickup |
| **Fast eater, slow thinker** | Starvation of others (can grab chopsticks repeatedly) | Add fairness: must wait after eating |
| **One philosopher holds both forever** | Neighbors starve | Add timeout → release if can't get both |
| **Philosopher dies while holding** | Resource leak | RAII wrapper for chopsticks |

---

### 3.4 Sleeping Barber Problem


**Scenario:** A barbershop has one barber, one barber chair, and N waiting chairs. If no customers, the barber sleeps. If a customer arrives and all chairs are full, the customer leaves. If the barber is busy, the customer sits in a waiting chair. This models bounded-buffer with a single server.

**Real-World Analogy:** A small barbershop. The barber sleeps when no one is there. Customers arrive → if a waiting seat is free, they sit. If the barber is asleep, the customer wakes them. If all seats are full, the customer leaves.

**Numbered Steps:**

1. Customer arrives at barbershop
2. Customer calls `wait(mutex)` to check waiting chairs
3. If waiting customers &lt; N:
   - Increment `waiting_customers`
   - Customer sits in waiting chair
   - Customer calls `signal(mutex)`
   - Customer calls `wait(barber_ready)` → waits for barber
   - Customer gets haircut
   - Customer calls `wait(mutex)` to update count
   - Decrement `waiting_customers`
   - Customer calls `signal(customer_done)` → signals barber to accept next
   - Customer calls `signal(mutex)`
   - Customer leaves
4. If waiting customers >= N:
   - Customer calls `signal(mutex)` and leaves the shop

**Barber Steps:**
1. Barber calls `wait(customer_done)` → waits for a customer
2. Barber signals `barber_ready` → invites next customer
3. Barber gives haircut
4. Go to step 1

**Pseudocode:**

```
semaphore mutex = 1
semaphore customer_done = 0   // barber waits on this
semaphore barber_ready = 0    // customer waits on this
int waiting_customers = 0
const int N = 4               // waiting chairs

barber():
    while true:
        wait(customer_done)   // Wait for a customer
        signal(barber_ready)  // Invite customer in
        give_haircut()

customer():
    wait(mutex)
    if waiting_customers < N:
        waiting_customers++
        signal(mutex)
        wait(barber_ready)    // Wait for barber to be free
        get_haircut()
        wait(mutex)
        waiting_customers--
        signal(customer_done) // Tell barber we're done
        signal(mutex)
    else:
        signal(mutex)         // No chairs → leave
        // Customer leaves without haircut
```

**C++ Implementation:**

```cpp
#include <iostream>
#include <thread>
#include <chrono>
#include <random>

class Semaphore {
    int count;
    std::mutex mtx;
    std::condition_variable cv;
public:
    Semaphore(int n) : count(n) {}
    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count--;
    }
    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();
    }
};

const int CHAIRS = 4;
Semaphore mutex(1), customer_done(0), barber_ready(0);
int waiting = 0;

void barber_fn() {
    while (true) {
        customer_done.wait();       // sleep if no customers
        barber_ready.signal();      // invite customer
        std::cout << "Barber: cutting hair...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
    }
}

void customer_fn(int id) {
    std::mt19937 rng(id);
    std::this_thread::sleep_for(std::chrono::milliseconds(rng() % 1000));

    mutex.wait();
    if (waiting < CHAIRS) {
        waiting++;
        std::cout << "Customer " << id << " sits (waiting=" << waiting << ")\n";
        mutex.signal();
        customer_done.signal();     // wake barber
        barber_ready.wait();        // wait for barber
        std::cout << "Customer " << id << " getting haircut\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(400));
        mutex.wait();
        waiting--;
        mutex.signal();
        std::cout << "Customer " << id << " leaves done\n";
    } else {
        mutex.signal();
        std::cout << "Customer " << id << " leaves (no chairs)\n";
    }
}

int main() {
    std::thread barber(barber_fn);
    barber.detach();

    std::vector<std::thread> customers;
    for (int i = 0; i < 10; i++)
        customers.push_back(std::thread(customer_fn, i));
    for (auto& t : customers) t.join();

    std::this_thread::sleep_for(std::chrono::seconds(1));
    return 0;
}
```

**Python Implementation:**

```python
import threading
import time
import random

class Semaphore:
    def __init__(self, n: int):
        self.count = n
        self.cond = threading.Condition()
    def wait(self):
        with self.cond:
            while self.count == 0: self.cond.wait()
            self.count -= 1
    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

CHAIRS = 4
mutex = Semaphore(1)
customer_done = Semaphore(0)
barber_ready = Semaphore(0)
waiting = 0

def barber():
    while True:
        customer_done.wait()
        barber_ready.signal()
        print("Barber: cutting hair...")
        time.sleep(random.uniform(0.3, 0.6))

def customer(id):
    global waiting
    time.sleep(random.uniform(0, 0.5))

    mutex.wait()
    if waiting < CHAIRS:
        waiting += 1
        print(f"Customer {id}: sits (waiting={waiting})")
        mutex.signal()
        customer_done.signal()
        barber_ready.wait()
        print(f"Customer {id}: getting haircut")
        time.sleep(0.3)
        mutex.wait()
        waiting -= 1
        mutex.signal()
        print(f"Customer {id}: done, leaving")
    else:
        mutex.signal()
        print(f"Customer {id}: no chairs, leaving")

threading.Thread(target=barber, daemon=True).start()
customers = [threading.Thread(target=customer, args=(i,)) for i in range(10)]
for c in customers: c.start()
for c in customers: c.join()
time.sleep(0.5)
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time → haircut (no wait)** | O(1) | Single customer, barber idle |
| **Time → customer arrival (chairs full)** | O(1) | Check and leave immediately |
| **Time → customer arrival (chairs avail)** | O(1) block | May wait on barber_ready |
| **Space → waiting chairs** | O(N) | N semaphore slots |
| **Maximum throughput** | 1 haircut / unit time | Single barber (bottleneck) |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Models bounded server with overflow handling | Single server → limited throughput |
| No busy-waiting → barber sleeps | Customers may be turned away even if barber idle momentarily |
| Naturally prevents buffer overflow | Hard to extend to multiple barbers |

**Edge Cases:**

| Case | Issue | Resolution |
|------|-------|------------|
| **Customer arrives while barber cutting** | Must wait → handled by customer_done/barber_ready | Correct by design |
| **Barber asleep, customer arrives** | Customer wakes barber via customer_done.signal() | Correct by design |
| **All chairs full + barber idle** | Customer leaves unnecessarily | Unlikely with correct semaphore counts |
| **Barber dies** | All future customers wait forever | Heartbeat/watchdog mechanism |

---

### 3.5 Cigarette Smokers Problem


**Scenario:** Three smokers sit at a table, each with an infinite supply of one ingredient (tobacco, paper, or matches). An agent places two ingredients on the table at random. The smoker with the missing ingredient picks them up, makes a cigarette, and smokes. The agent repeats.

**Real-World Analogy:** Three chefs in a kitchen. Chef A has pasta, Chef B has sauce, Chef C has cheese. The manager randomly puts two ingredients on the counter. The chef who has the third can make a dish. This models synchronization where a thread must wait for multiple resources produced by different producers.

**Numbered Steps:**

1. Agent randomly picks two ingredients
2. Agent signals the corresponding semaphore for the smoker who has the missing third
3. Agent returns to step 1
4. Smoker waits on their semaphore
5. When signaled, smoker picks up ingredients, rolls cigarette, smokes
6. Smoker signals agent that they're done
7. Go to step 4

**Pseudocode (3 semaphore variant):**

```
semaphore agent = 1           // agent has ingredients
semaphore tobacco_smoker = 0  // smoker with paper+matches
semaphore paper_smoker = 0    // smoker with tobacco+matches
semaphore match_smoker = 0    // smoker with tobacco+paper

agent():
    while true:
        wait(agent)
        rand = random(0..2)
        if rand == 0:          // tobacco available
            signal(paper_smoker)    // paper + matches smoker needs tobacco
        elif rand == 1:        // paper available
            signal(match_smoker)    // tobacco + matches smoker needs paper
        else:                  // matches available
            signal(tobacco_smoker)  // tobacco + paper smoker needs matches

smoker_with_tobacco():
    while true:
        wait(tobacco_smoker)
        // has tobacco, picks up paper + matches
        make_cigarette()
        smoke()
        signal(agent)

smoker_with_paper():
    while true:
        wait(paper_smoker)
        make_cigarette()
        smoke()
        signal(agent)

smoker_with_matches():
    while true:
        wait(match_smoker)
        make_cigarette()
        smoke()
        signal(agent)
```

**Key insight**: The agent generates ingredients non-deterministically. Only one smoker can proceed per round. The agent waits for the smoker to finish before generating more ingredients → otherwise ingredients would pile up.

**C++ Implementation:**

```cpp
#include <iostream>
#include <thread>
#include <random>

class Semaphore {
    int count;
    std::mutex mtx;
    std::condition_variable cv;
public:
    Semaphore(int n) : count(n) {}
    void wait() {
        std::unique_lock<std::mutex> lock(mtx);
        while (count == 0) cv.wait(lock);
        count--;
    }
    void signal() {
        std::unique_lock<std::mutex> lock(mtx);
        count++;
        cv.notify_one();
    }
};

Semaphore agent(1), tobacco(0), paper(0), matches(0);
std::mt19937 rng(std::random_device{}());

void agent_fn() {
    for (int i = 0; i < 6; i++) {
        agent.wait();
        int choice = rng() % 3;
        switch (choice) {
            case 0: std::cout << "Agent: puts tobacco+paper (match smoker)\n";
                    matches.signal(); break;
            case 1: std::cout << "Agent: puts tobacco+matches (paper smoker)\n";
                    paper.signal(); break;
            case 2: std::cout << "Agent: puts paper+matches (tobacco smoker)\n";
                    tobacco.signal(); break;
        }
    }
}

void smoker(int id, Semaphore& my_sem, const char* ingredient) {
    for (int i = 0; i < 6; i++) {
        my_sem.wait();
        std::cout << "Smoker with " << ingredient << " makes cigarette\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
        std::cout << "Smoker with " << ingredient << " smoking...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(300));
        agent.signal();
    }
}

int main() {
    std::thread a(agent_fn);
    std::thread t1(smoker, 1, std::ref(tobacco), "tobacco");
    std::thread p1(smoker, 2, std::ref(paper), "paper");
    std::thread m1(smoker, 3, std::ref(matches), "matches");
    a.join(); t1.join(); p1.join(); m1.join();
    return 0;
}
```

**Python Implementation:**

```python
import threading
import time
import random

class Semaphore:
    def __init__(self, n: int):
        self.count = n
        self.cond = threading.Condition()
    def wait(self):
        with self.cond:
            while self.count == 0: self.cond.wait()
            self.count -= 1
    def signal(self):
        with self.cond:
            self.count += 1
            self.cond.notify()

agent_sem = Semaphore(1)
tobacco = Semaphore(0)
paper = Semaphore(0)
matches = Semaphore(0)

def agent():
    for _ in range(6):
        agent_sem.wait()
        choice = random.randint(0, 2)
        if choice == 0:
            print("Agent: tobacco+paper (needs matches)")
            matches.signal()
        elif choice == 1:
            print("Agent: tobacco+matches (needs paper)")
            paper.signal()
        else:
            print("Agent: paper+matches (needs tobacco)")
            tobacco.signal()

def smoker(name, sem):
    for _ in range(6):
        sem.wait()
        print(f"Smoker with {name}: makes cigarette")
        time.sleep(random.uniform(0.2, 0.4))
        print(f"Smoker with {name}: smoking")
        time.sleep(random.uniform(0.3, 0.5))
        agent_sem.signal()

threads = []
threads.append(threading.Thread(target=agent))
threads.append(threading.Thread(target=smoker, args=("tobacco", tobacco)))
threads.append(threading.Thread(target=smoker, args=("paper", paper)))
threads.append(threading.Thread(target=smoker, args=("matches", matches)))
for t in threads: t.start()
for t in threads: t.join()
```

**Complexity Analysis:**

| Metric | Value | Why |
|--------|-------|-----|
| **Time → one round** | O(1) | One agent + one smoker, constant ops |
| **Space** | O(1) | 4 semaphores |
| **Throughput** | 1 cigarette per round | Agent waits for smoker to finish |
| **Fairness** | Random → depends on RNG | All smokers eventually served |

**Advantages & Disadvantages:**

| Advantages | Disadvantages |
|-----------|--------------|
| Models multi-resource synchronization elegantly | Only one smoker can proceed at a time |
| Agent + smoker decoupling is clean | Requires careful semaphore count management |
| No deadlock (single resource type per smoker) | If agent is much faster, smokers queue |

**Edge Cases:**

| Case | Issue | Resolution |
|------|-------|------------|
| **Agent runs before smokers ready** | Ingredient signals lost if no smoker waiting | Signal is persistent → semaphore count increments |
| **Two smokers share ingredient** | Not possible → each has unique ingredient | Design ensures exactly one smoker per ingredient combo |
| **Agent starvation** | Agent blocked on agent_sem | Not possible → each smoker signals agent after smoking |

---

## 4. Semaphore vs Counting Semaphore → Comprehensive Comparison

| Property | Binary Semaphore | Counting Semaphore |
|----------|-----------------|-------------------|
| **Value range** | 0 or 1 only | 0 to N (any non-negative integer) |
| **Initial value** | Usually 1 (mutex) or 0 (sync) | N (number of resource instances) |
| **Primary use** | Mutual exclusion, signaling | Resource counting, managing pools |
| **wait() effect** | Sets to 0 | Decrements by 1 |
| **signal() effect** | Sets to 1 (no effect if already 1) | Increments by 1 |
| **Maximum concurrency** | 1 thread in CS | N threads in resource pool |
| **Can replace mutex?** | Yes (with caution) | No (would allow >1 into CS) |
| **Can replace condition var?** | Limited (no broadcast) | No (no predicate check) |
| **Implementation** | Can use counting with max=1 | General form |

**When to use Counting Semaphore:**
- Thread pool management (limit concurrent workers)
- Bounded buffer (empty/full slot counting)
- Connection pool (N database connections)
- Any scenario with multiple identical resources

---

## 5. Monitors

### 5.1 Monitor Definition and Structure


A **monitor** (Hoare, 1974; Brinch Hansen, 1973) is a high-level synchronization construct that encapsulates shared data, operations on that data, and synchronization into a single abstraction. A monitor guarantees **only one thread can be active inside the monitor at a time** → mutual exclusion is automatic.

**Formal Structure:**

```
monitor MonitorName {
    // Private shared variables
    int shared_data;
    condition_variable cv1, cv2;

    // Initialization code
    void init() {
        shared_data = 0;
    }

    // Public procedures → mutual exclusion enforced by compiler
    public void operation1() {
        // Automatically acquires monitor lock
        ...
        // Automatically releases monitor lock on return
    }

    public int operation2() {
        ...
    }
}
```

**Key properties:**
- Only one thread can execute inside the monitor at any time
- Threads that call monitor procedures while another thread is inside are blocked
- Condition variables provide scheduling synchronization inside the monitor
- The compiler/runtime ensures mutual exclusion → programmer cannot forget lock/unlock

**Real-World Analogy:** A bank teller window. Only one customer at a time can stand at the window (mutual exclusion). If the customer needs a manager's approval (condition variable), they step aside, let other customers proceed, and wait until the manager is available.

### 5.2 Condition Variables


A **condition variable** is a queue of threads waiting for a specific condition to become true. Condition variables are used inside monitors.

**Operations:**

| Operation | Description |
|-----------|-------------|
| `wait(cv, lock)` | Atomically release the monitor lock and block until signaled. Upon return, the lock is re-acquired. |
| `signal(cv)` (notify) | Wake up one waiting thread (if any). |
| `broadcast(cv)` (notifyAll) | Wake up all waiting threads. |

**Important**: Always use `while` not `if` to test the condition. This handles **spurious wakeups** (threads can wake without signal).

### 5.3 Mesa vs Hoare Semantics


| Property | Hoare Semantics (1974) | Mesa Semantics (1980) |
|----------|----------------------|---------------------|
| **Signal semantics** | Signaler immediately transfers monitor to waiter | Signaler continues; waiter moves to ready queue |
| **Waiter guarantee** | Waiter is guaranteed condition is still true | Waiter must re-check condition (**MUST use while()**) |
| **Context switches** | 2 per signal (signaler out, waiter in, waiter out, signaler in) | 0-1 per signal (waiter may run later) |
| **Implementation complexity** | Higher (need to save signaler's context) | Simpler |
| **Used by** | Original Hoare monitor proposal | Java, POSIX threads, C++ std::condition_variable, most real systems |
| **Condition check pattern** | `if (condition) wait(cv)` → safe | `while (condition) wait(cv)` → mandatory |
| **Performance** | More context switches | Fewer context switches |

**Why Mesa is more popular:**
1. Simpler implementation in the runtime/OS
2. Lower overhead (fewer context switches)
3. Eaiser to implement correctly (signal can be an optimization, not correctness-critical)
4. The `while` re-check pattern is defensive even against spurious wakeups

**Mesa Semantics → Detailed Execution:**

```
Thread A (inside monitor):          Thread B (inside monitor):
1. while (data == 0)               1. data = 42
   wait(cv)  // releases lock      2. signal(cv)  // A moves to ready
2. // A is in waiting queue         3. // B continues, holds lock
3. // B signals, A moves to ready   4. B exits monitor, releases lock
4. // A re-acquires lock            5. // A may now run
5. while (data == 0)  // re-check!  (Another thread C could have changed data)
6. // proceed
```

**Hoare Semantics → Detailed Execution:**

```
Thread A (inside monitor):          Thread B (inside monitor):
1. while (data == 0)               1. data = 42
   wait(cv)  // releases lock      2. signal(cv)  // A runs immediately
2. // A is in waiting queue         3. // B is suspended until A finishes
3. // B signals A                   4. A exits monitor OR waits
4. // B is suspended                5. // B resumes automatically
5. // A runs IMMEDIATELY
6. // data IS 42 (guaranteed)
7. // A exits or waits again
```

### 5.4 Monitor-based Solutions


**Bounded Buffer with Monitor (Mesa semantics → standard POSIX):**

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
    while (count == BUFFER_SIZE) {           // Mesa: while, not if
        pthread_cond_wait(&cond_not_full, &mutex);
    }
    buffer[in] = item;
    in = (in + 1) % BUFFER_SIZE;
    count++;
    pthread_cond_signal(&cond_not_empty);     // Signal that buffer not empty
    pthread_mutex_unlock(&mutex);
}

int get() {
    pthread_mutex_lock(&mutex);
    while (count == 0) {                      // Mesa: while, not if
        pthread_cond_wait(&cond_not_empty, &mutex);
    }
    int item = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    count--;
    pthread_cond_signal(&cond_not_full);      // Signal that buffer not full
    pthread_mutex_unlock(&mutex);
    return item;
}
```

**Dining Philosophers with Monitor (Hoare-style):**

```
monitor DiningPhilosophers {
    enum {THINKING, HUNGRY, EATING} state[5];
    condition_variable self[5];  // philosopher waits on own cv

    void init() {
        for i in 0..4: state[i] = THINKING;
    }

    void pickup(int i) {
        state[i] = HUNGRY;
        test(i);                    // Try to acquire forks
        if (state[i] != EATING)
            self[i].wait();         // Block → forks not available
    }

    void putdown(int i) {
        state[i] = THINKING;
        test((i + 4) % 5);          // Check left neighbor
        test((i + 1) % 5);          // Check right neighbor
    }

    void test(int i) {
        if (state[(i+4)%5] != EATING &&  // left not eating
            state[i] == HUNGRY &&
            state[(i+1)%5] != EATING) {  // right not eating
            state[i] = EATING;
            self[i].signal();       // Wake philosopher i (if waiting)
        }
    }
}
```

**Important note**: In this monitor-based solution, `test()` signals the neighbor's condition variable, not the philosopher's own. The philosopher only signals its own CV when it can eat. The caller of `pickup()` blocks on `self[i].wait()` if `test()` didn't succeed.
**Dining Philosophers with C++ Monitor (condition_variable):**

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <vector>

class DiningPhilosophers {
    enum State { THINKING, HUNGRY, EATING };
    static const int N = 5;
    State state[N];
    std::mutex mtx;
    std::condition_variable cv[N];

    void test(int i) {
        int left = (i + N - 1) % N;
        int right = (i + 1) % N;
        if (state[left] != EATING && state[i] == HUNGRY && state[right] != EATING) {
            state[i] = EATING;
            cv[i].notify_one();
        }
    }

public:
    DiningPhilosophers() {
        for (int i = 0; i < N; i++) state[i] = THINKING;
    }

    void pickup(int i) {
        std::unique_lock<std::mutex> lock(mtx);
        state[i] = HUNGRY;
        test(i);
        while (state[i] != EATING)
            cv[i].wait(lock);   // Mesa semantics → re-check in while()
    }

    void putdown(int i) {
        std::unique_lock<std::mutex> lock(mtx);
        state[i] = THINKING;
        test((i + N - 1) % N);  // Check left neighbor
        test((i + 1) % N);      // Check right neighbor
    }
};

void philosopher(DiningPhilosophers& dp, int id) {
    for (int i = 0; i < 5; i++) {
        std::cout << "Philosopher " << id << " thinking\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(300 + id * 50));
        dp.pickup(id);
        std::cout << "Philosopher " << id << " EATING\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
        dp.putdown(id);
    }
}

int main() {
    DiningPhilosophers dp;
    std::vector<std::thread> threads;
    for (int i = 0; i < 5; i++)
        threads.push_back(std::thread(philosopher, std::ref(dp), i));
    for (auto& t : threads) t.join();
    return 0;
}
```

**Readers-Writers with Monitor in Python (using threading.Condition):**

```python
import threading

class ReadersWritersMonitor:
    def __init__(self):
        self.mutex = threading.Lock()
        self.can_read = threading.Condition(self.mutex)
        self.can_write = threading.Condition(self.mutex)
        self.readers = 0
        self.writers = 0
        self.write_requests = 0  # Writer-priority tracking

    def start_read(self):
        with self.mutex:
            while self.writers > 0 or self.write_requests > 0:
                self.can_read.wait()
            self.readers += 1

    def end_read(self):
        with self.mutex:
            self.readers -= 1
            if self.readers == 0:
                self.can_write.notify()

    def start_write(self):
        with self.mutex:
            self.write_requests += 1
            while self.readers > 0 or self.writers > 0:
                self.can_write.wait()
            self.write_requests -= 1
            self.writers += 1

    def end_write(self):
        with self.mutex:
            self.writers -= 1
            self.can_read.notify_all()  # Wake all waiting readers
            self.can_write.notify()     # Wake one waiting writer

# Usage
mon = ReadersWritersMonitor()
shared = 0

def reader(id):
    mon.start_read()
    print(f"Reader {id}: read {shared}")
    mon.end_read()

def writer(id, val):
    mon.start_write()
    shared = val
    print(f"Writer {id}: wrote {shared}")
    mon.end_write()
```

---

## 6. Applications in Real Systems

### 6.1 Linux Kernel Semaphores


The Linux kernel provides `struct semaphore` for kernel-space synchronization:

```c
#include <linux/semaphore.h>

// Declare and initialize
struct semaphore sem;
sema_init(&sem, 1);     // Initial value = 1 (binary semaphore)

// Operations
void down(struct semaphore *sem);     // P (wait) → blocking
int down_interruptible(struct semaphore *sem); // P → can be interrupted by signal
int down_trylock(struct semaphore *sem);       // P → non-blocking
void up(struct semaphore *sem);       // V (signal)
```

In modern Linux (2.6.39+), `struct mutex` is preferred over binary semaphores:

```c
struct mutex mtx;
mutex_init(&mtx);
mutex_lock(&mtx);
mutex_unlock(&mtx);
```

**Key differences in Linux:**
- `struct mutex` has ownership tracking, priority inheritance, faster fast-path (futex-based)
- `struct semaphore` has no ownership, no priority inheritance
- Counting semaphores are still used for resource counting (e.g., `struct rw_semaphore`)

**Linux completion variables** (a lightweight one-shot semaphore for thread signaling):

```c
#include <linux/completion.h>

struct completion comp;
init_completion(&comp);

// Thread 1 (waiter):
wait_for_completion(&comp);

// Thread 2 (signaler):
complete(&comp);  // Signal completion (wakes all waiters)
complete_all(&comp);  // Signal all current and future waiters
```

### 6.2 POSIX Semaphores


POSIX defines two semaphore types: named and unnamed (memory-based).

**Unnamed semaphores:**

```c
#include <semaphore.h>

sem_t sem;
sem_init(&sem, 0, 1);      // pshared=0 (process-private), value=1
sem_wait(&sem);            // Blocking wait
sem_trywait(&sem);         // Non-blocking wait (returns -1/EAGAIN)
sem_timedwait(&sem, &ts);  // Wait with timeout
sem_post(&sem);            // Signal
sem_getvalue(&sem, &val);  // Get current value (may be stale)
sem_destroy(&sem);         // Cleanup
```

**Named semaphores** (can synchronize across unrelated processes):

```c
sem_t *sem = sem_open("/mysem", O_CREAT, 0666, 1);
sem_wait(sem);
sem_post(sem);
sem_close(sem);
sem_unlink("/mysem");  // Remove when no longer needed
```

### 6.3 Java Synchronization: synchronized, wait(), notify()


Java's built-in monitor mechanism uses `synchronized` blocks and `wait()`/`notify()` on any object.

**Java synchronized block (intrinsic lock):**

```java
public class Counter {
    private int count = 0;

    // synchronized method → entire method is monitor
    public synchronized void increment() {
        count++;
    }

    // synchronized block → finer granularity
    public void decrement() {
        synchronized(this) {
            count--;
        }
    }
}
```

**Java wait()/notify() → Mesa semantics:**

```java
public class BoundedBuffer {
    private final int[] buffer = new int[5];
    private int count = 0, in = 0, out = 0;

    public synchronized void put(int item) throws InterruptedException {
        while (count == buffer.length) {   // Mesa: while, not if
            wait();                         // Releases lock, blocks
        }                                   // Re-acquires lock on return
        buffer[in] = item;
        in = (in + 1) % buffer.length;
        count++;
        notifyAll();                        // Wake all waiting threads
    }

    public synchronized int get() throws InterruptedException {
        while (count == 0) {
            wait();
        }
        int item = buffer[out];
        out = (out + 1) % buffer.length;
        count--;
        notifyAll();
        return item;
    }
}
```

**Key Java points:**
- `synchronized` any method = monitor entry (mutual exclusion)
- `wait()` releases the intrinsic lock and blocks
- `notify()` wakes one thread (arbitrary choice → JVM implementation specific)
- `notifyAll()` wakes all waiting threads (safer, but more context switches)
- Always use `while()` loop → Java uses Mesa semantics → plus spurious wakeups are permitted
- Java's `Lock` and `Condition` interfaces (java.util.concurrent.locks) provide more control:

```java
import java.util.concurrent.locks.*;

class BoundedBuffer {
    private final Lock lock = new ReentrantLock();
    private final Condition notFull = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();
    private final int[] buffer = new int[5];
    private int count = 0, in = 0, out = 0;

    public void put(int item) throws InterruptedException {
        lock.lock();
        try {
            while (count == buffer.length) notFull.await();
            buffer[in] = item;
            in = (in + 1) % buffer.length;
            count++;
            notEmpty.signal();
        } finally {
            lock.unlock();
        }
    }

    public int get() throws InterruptedException {
        lock.lock();
        try {
            while (count == 0) notEmpty.await();
            int item = buffer[out];
            out = (out + 1) % buffer.length;
            count--;
            notFull.signal();
            return item;
        } finally {
            lock.unlock();
        }
    }
}
```

### 6.4 C++ std::condition_variable


C++11 introduced `std::condition_variable` as part of the standard threading library:

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>

class BoundedBuffer {
    std::mutex mtx;
    std::condition_variable not_full;
    std::condition_variable not_empty;
    std::queue<int> buffer;
    static const int MAX = 5;

public:
    void put(int item) {
        std::unique_lock<std::mutex> lock(mtx);
        not_full.wait(lock, [this]{ return buffer.size() < MAX; });
        buffer.push(item);
        not_empty.notify_one();
    }

    int get() {
        std::unique_lock<std::mutex> lock(mtx);
        not_empty.wait(lock, [this]{ return !buffer.empty(); });
        int item = buffer.front();
        buffer.pop();
        not_full.notify_one();
        return item;
    }
};
```

**Key features:**
- `wait(lock, predicate)` → the predicate is checked before blocking and after wakeup; eliminates need for explicit while() loop
- `notify_one()` → wake one waiting thread
- `notify_all()` → wake all waiting threads
- Works only with `std::unique_lock<std::mutex>` (not `lock_guard`)
- Uses Mesa semantics

**Complete example → reader-writer lock with condition variables:**

```cpp
class RWLock {
    std::mutex mtx;
    std::condition_variable cv;
    int readers = 0;
    bool writer_active = false;
    int waiting_writers = 0;

public:
    void lock_read() {
        std::unique_lock<std::mutex> lock(mtx);
        while (writer_active || waiting_writers > 0)
            cv.wait(lock);
        readers++;
    }

    void unlock_read() {
        std::unique_lock<std::mutex> lock(mtx);
        readers--;
        if (readers == 0) cv.notify_all();
    }

    void lock_write() {
        std::unique_lock<std::mutex> lock(mtx);
        waiting_writers++;
        while (writer_active || readers > 0)
            cv.wait(lock);
        waiting_writers--;
        writer_active = true;
    }

    void unlock_write() {
        std::unique_lock<std::mutex> lock(mtx);
        writer_active = false;
        cv.notify_all();
    }
};
```

**C++20 Semaphore:**

C++20 finally added native semaphores to the standard library:

```cpp
#include <iostream>
#include <thread>
#include <semaphore>
#include <vector>

std::counting_semaphore<5> sem(3);  // max=5, initial=3

void worker(int id) {
    sem.acquire();  // Wait
    std::cout << "Worker " << id << " in critical section\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
    sem.release();  // Signal
}

int main() {
    std::vector<std::thread> workers;
    for (int i = 0; i < 10; i++)
        workers.push_back(std::thread(worker, i));
    for (auto& w : workers) w.join();
    return 0;
}
```

`std::binary_semaphore` is an alias for `std::counting_semaphore<1>`.

---

## 7. Interview Corner

### Q1: Can a binary semaphore be used as a mutex?


**Short answer:** Yes, but with significant caveats. A binary semaphore initialized to 1 provides mutual exclusion → only one thread can pass `wait()` at a time. However:

| Property | Binary Semaphore | Mutex |
|----------|-----------------|-------|
| **Ownership** | None → any thread can signal() | Only the locking thread can unlock() |
| **Reentrancy** | No → second wait() by same thread deadlocks | Yes → many mutexes support recursive locking |
| **Priority inheritance** | No | Yes (in RTOS/Linux) |
| **Safety** | Lower → accidental signal() from wrong thread corrupts state | Higher → ownership check catches errors |
| **Performance** | May be similar | Often faster (futex, no queue management in fast path) |

**Interview tip:** Say "A binary semaphore can provide mutual exclusion but is not a mutex. The key difference is ownership → a mutex can only be unlocked by the thread that locked it, while a semaphore can be signaled by any thread. This makes semaphores more suitable for signaling patterns and mutexes more suitable for critical section protection."

### Q2: What is the difference between a semaphore and a condition variable?


| Aspect | Semaphore | Condition Variable |
|--------|-----------|-------------------|
| **State** | Has internal integer counter | Has no state → just a queue of waiting threads |
| **Signal persistence** | signal() increments counter → persists even if no thread waiting | signal() with no waiters has no effect → signal is lost |
| **Usage pattern** | Count resources, not conditions | Wait for specific predicates (data available, queue not full) |
| **Mutex relationship** | Self-contained (no external mutex needed) | Must be paired with a mutex |
| **Broadcast** | Not directly supported (must signal N times) | notify_all() / broadcast() wakes all |
| **Spurious wakeup protection** | count ensures correctness even with spurious wakeup | Must use while() loop to re-check predicate |
| **Conceptual level** | Lower-level | Higher-level (designed for monitors) |

**Key interview insight:** A semaphore can simulate a condition variable (using a binary semaphore for signaling), and a condition variable can simulate a semaphore (using a counter + mutex + CV). But each has different strengths → semaphores for resource counting, condition variables for complex predicate waits.

### Q3: What happens if you reverse the order of wait() operations in bounded buffer?


In the producer-consumer problem, if you do:
```c
wait(mutex);    // lock buffer FIRST
wait(empty);    // then check for empty slot
```

When the buffer is full:
1. Producer holds mutex (buffer locked)
2. Producer blocks on `wait(empty)` → buffer is full
3. Consumer can't run → needs mutex to consume
4. **DEADLOCK** → producer holds mutex, consumer needs mutex

Correct order: `wait(empty)` then `wait(mutex)`.

### Q4: Why must you use while() not if() with condition variables?


```
// WRONG → can cause data corruption:
if (count == 0)
    wait(&cond, &mutex);  // If spurious wakeup, proceeds with count == 0!

// CORRECT → always re-checks:
while (count == 0)
    wait(&cond, &mutex);  // Re-checks after wakeup
```

Reasons:
1. **Mesa semantics**: signaller continues holding the lock; by the time waiter runs, condition may have changed
2. **Spurious wakeups**: POSIX permits threads to wake from `pthread_cond_wait()` without a signal
3. **Multiple waiters**: If two threads are waiting on the same condition and one is signaled, the other wakes spuriously

### Q5: How do you prevent deadlock in the dining philosophers problem?


| Solution | Mechanism | Concurrency | Complexity |
|----------|-----------|-------------|------------|
| Limit to N-1 eaters | Extra semaphore (limit=4) | N-1 | Low |
| Asymmetric pickup | Odd: left→right, Even: right→left | N (no artificial limit) | Low |
| Waiter/arbitrator | Mutex around both pickups | N (serialized pickup) | Low |
| Monitor + state array | Monitor tracks state (thinking/hungry/eating) | N | Medium |
| Resource hierarchy | Number chopsticks, always pick lower number first | N | Low |

### Q6: What is the difference between notify() and notifyAll()?


| notify() (signal) | notifyAll() (broadcast) |
|-------------------|------------------------|
| Wakes one waiting thread | Wakes all waiting threads |
| Which thread? JVM/OS dependent (usually highest priority or longest waiting) | All threads compete for the lock |
| Risk of missed signal if wrong thread wakes | No missed signals |
| More efficient (fewer context switches) | Potentially many context switches |
| Use when only one thread can make progress | Use when multiple threads might be able to progress |
| Example: one item produced, one consumer needed | Example: buffer no longer full, multiple producers can write |

### Q7: What is a spurious wakeup and how do you handle it?


A **spurious wakeup** occurs when a thread waiting on a condition variable wakes up even though no thread called `signal()` or `broadcast()`. This is permitted by the POSIX standard and the Java Memory Model for implementation flexibility.

**Always guard `wait()` calls with a `while()` loop testing the actual condition.**

### Q8: Semaphore vs mutex → which is faster?


In practice, **mutexes are faster** because:
1. Mutexes use **futex** (fast userspace mutex) → the lock/unlock fast path is entirely in userspace with no syscall if uncontended
2. Semaphore implementations often include queue management overhead
3. Mutex ownership enables optimizations (e.g., priority inheritance, lock elision)

However, the difference is small for uncontended cases. For heavily contended cases, the algorithm and data structure matter more than the primitive.

---

## 8. Concept Comparison → Full Reference

| Feature | Semaphore | Monitor |
|---------|-----------|---------|
| Primitive level | Low-level (integer + wait/signal) | High-level (class + condition variables) |
| Mutual exclusion | Manual (binary semaphore) | Automatic (compiler/runtime enforces) |
| Error-prone? | Yes (forget signal → deadlock, forget wait → race) | Less (structure enforced) |
| Condition vars | Not built-in (simulate with semaphores) | Built-in (wait/signal on condition vars) |
| Distributed? | No (shared memory required) | No (shared memory required) |
| Ownership | None | Lock + CV association |
| Reentrancy | Not supported | Supported in Java (synchronized) |
| Popularity | OS kernels, embedded systems | Java, C++, Python, concurrent languages |
| Learning curve | Steeper (easy to misuse) | Gentler (structured approach) |

## 9. Quick Reference

| Term | Definition |
|------|------------|
| **Semaphore S** | Integer variable accessed atomically via `wait(S)` and `signal(S)` |
| **Binary Semaphore** | Semaphore with values 0 or 1 only |
| **Counting Semaphore** | Semaphore with integer range >= 0 |
| **wait(S)** (P) | Decrement S; block if S &lt;= 0 |
| **signal(S)** (V) | Increment S; wake blocked thread if any |
| **Monitor** | Abstract data type with mutual exclusion + condition variables |
| **Condition Variable** | Queue of threads waiting for a specific predicate |
| **Mesa Semantics** | Signaler keeps lock; waiter re-checks condition |
| **Hoare Semantics** | Signaler transfers lock to waiter immediately |
| **Spurious Wakeup** | Thread wakes from wait() without signal; must re-check |
| **Bounded Buffer** | Fixed-size buffer shared by producers and consumers |
| **Readers-Writers** | Multiple readers OR exclusive writers on shared data |
| **Dining Philosophers** | N processes sharing N resources in circular pattern |
| **Sleeping Barber** | Single server with bounded wait queue |
| **Cigarette Smokers** | Process must wait for multiple specific resources |
| **Priority Inversion** | High-prio thread blocked by low-prio holding a needed lock |
| **Deadlock** | Circular wait where each thread holds a resource another needs |
| **Starvation** | Thread never gets access because others always go first |
| **Futex** | Fast userspace mutex → Linux's efficient mutex implementation |

---

## 10. Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone OS |
|---------|-----------|----------|-----------------|---------------|
| **Bounded Buffer** | Request queue (producer=HTTP listener, consumer=worker thread) | Connection pool | ISR → task communication | Input event queue |
| **Readers-Writers** | Config file access (many reads, rare writes) | Row-level locking (SELECT vs UPDATE) | Sensor calibration data | Contacts database |
| **Dining Philosophers** | Lock ordering in resource manager | Transaction ordering | Shared peripheral access | Camera vs flashlight DMA |
| **Sleeping Barber** | Thread pool with idle workers | Database connection pool | Power-saving idle mode | Background task scheduler |
| **Cigarette Smokers** | Multi-resource dependency (RAM+CPU+IO) | Two-phase commit coordinator | Multiple sensor fusion | Camera+Flash+Processing pipeline |

---

### TypeScript Semaphore and Monitor Simulator

The following TypeScript implementation models counting semaphores, bounded buffer (producer-consumer), dining philosophers, and reader-writer locks:

```typescript
/**
 * Semaphore & Monitor Simulator
 * Implements: counting semaphore, bounded buffer, dining philosophers,
 *             readers-writers, sleeping barber
 */
class Semaphore {
  private value: number;
  private waitQueue: string[] = []; // blocked "threads"
  private log: string[] = [];

  constructor(initial: number) {
    this.value = initial;
  }

  async wait(id: string): Promise<void> {
    this.value--;
    if (this.value < 0) {
      this.log.push(`[${id}] BLOCKED — semaphore value=${this.value}`);
      this.waitQueue.push(id);
      // Simulate blocking — yield until signaled
      await new Promise<void>(resolve => {
        const check = () => {
          if (!this.waitQueue.includes(id)) {
            resolve();
          } else {
            setImmediate(check);
          }
        };
        setImmediate(check);
      });
    }
    this.log.push(`[${id}] ENTERED critical section — value=${this.value}`);
  }

  signal(id: string): void {
    this.value++;
    if (this.waitQueue.length > 0) {
      const woken = this.waitQueue.shift()!;
      this.log.push(`[${id}] SIGNAL — woke up ${woken}`);
    }
    this.log.push(`[${id}] EXIT — semaphore value=${this.value}`);
  }

  getValue(): number { return this.value; }
  getLog(): string[] { return [...this.log]; }
}

class BoundedBuffer {
  private buffer: number[];
  private capacity: number;
  private in = 0;
  private out = 0;
  private count = 0;
  private mutex: Semaphore;
  private empty: Semaphore;
  private full: Semaphore;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.mutex = new Semaphore(1);
    this.empty = new Semaphore(capacity);
    this.full = new Semaphore(0);
  }

  async produce(item: number, producerId: string): Promise<void> {
    await this.empty.wait(producerId);
    await this.mutex.wait(producerId);

    this.buffer[this.in] = item;
    this.in = (this.in + 1) % this.capacity;
    this.count++;

    this.mutex.signal(producerId);
    this.full.signal(producerId);
  }

  async consume(consumerId: string): Promise<number> {
    await this.full.wait(consumerId);
    await this.mutex.wait(consumerId);

    const item = this.buffer[this.out];
    this.out = (this.out + 1) % this.capacity;
    this.count--;

    this.mutex.signal(consumerId);
    this.empty.signal(consumerId);
    return item;
  }

  getCount(): number { return this.count; }
}

class DiningPhilosophers {
  private chopsticks: Semaphore[];
  private eatCount: number[];

  constructor(n: number) {
    this.chopsticks = Array.from({ length: n }, () => new Semaphore(1));
    this.eatCount = new Array(n).fill(0);
  }

  async dine(id: number, meals: number): Promise<void> {
    const left = id;
    const right = (id + 1) % this.chopsticks.length;

    for (let i = 0; i < meals; i++) {
      // Think (simulated delay)
      await new Promise(r => setImmediate(r));

      // Deadlock-free pickup: resource ordering
      // Odd IDs pick up right first, even pick up left first
      if (id % 2 === 0) {
        await this.chopsticks[left].wait(`P${id}`);
        await this.chopsticks[right].wait(`P${id}`);
      } else {
        await this.chopsticks[right].wait(`P${id}`);
        await this.chopsticks[left].wait(`P${id}`);
      }

      // Eat
      this.eatCount[id]++;
      this.chopsticks[left].signal(`P${id}`);
      this.chopsticks[right].signal(`P${id}`);
    }
  }
}

class ReadersWritersLock {
  private readCount = 0;
  private writeLock: Semaphore;
  private readTry: Semaphore;

  constructor() {
    this.writeLock = new Semaphore(1);
    this.readTry = new Semaphore(1);
  }

  async startRead(id: string): Promise<void> {
    await this.readTry.wait(id);
    this.readCount++;
    if (this.readCount === 1) {
      await this.writeLock.wait(id); // First reader locks writers out
    }
    this.readTry.signal(id);
  }

  endRead(id: string): void {
    this.readCount--;
    if (this.readCount === 0) {
      this.writeLock.signal(id); // Last reader allows writers
    }
  }

  async startWrite(id: string): Promise<void> {
    await this.writeLock.wait(id);
  }

  endWrite(id: string): void {
    this.writeLock.signal(id);
  }
}

// Demonstrate producer-consumer
const buffer = new BoundedBuffer(5);
console.log('=== Producer-Consumer with Semaphores ===');
await buffer.produce(100, 'P1');
await buffer.produce(200, 'P1');
const val = await buffer.consume('C1');
console.log(`  Consumed: ${val}, Buffer count: ${buffer.getCount()}`);

// Demonstrate dining philosophers deadlock prevention
console.log('\n=== Dining Philosophers (asymmetric pickup) ===');
const dp = new DiningPhilosophers(5);
await Promise.all([
  dp.dine(0, 3), dp.dine(1, 3), dp.dine(2, 3),
  dp.dine(3, 3), dp.dine(4, 3)
]);
console.log('  All philosophers finished eating — no deadlock');
```

### Additional Chapter Quiz Questions


13. In the dining philosophers problem with resource ordering, which philosopher could potentially starve even though deadlock is prevented?
    - a) Philosopher 0 (even, picks up left first)
    - b) Philosopher 3 (odd, picks up right first)
    - c) Philosopher 4 because it is adjacent to two aggressive eaters
    - d) Starvation is impossible with resource ordering

14. What is the difference between Hoare semantics and Mesa semantics for monitors?
    - a) Hoare is older; Mesa is newer
    - b) In Hoare, the signaled thread runs immediately; in Mesa, it competes for the lock
    - c) Hoare uses while loops; Mesa uses if statements
    - d) They are identical

15. Which condition variable pattern must be used under Mesa semantics?
    - a) `if (condition) wait()`
    - b) `while (!condition) wait()`
    - c) `do { wait() } while (condition)`
    - d) `wait()` without condition check

16. What is a "spurious wakeup"?
    - a) A thread wakes up without being signaled
    - b) A thread signals without waking anyone
    - c) A semaphore that wakes on its own
    - d) A deadlock that resolves itself

17. In the readers-writers problem, what is the risk of reader-preference?
    - a) Readers may see inconsistent data
    - b) Writers may starve
    - c) Deadlock is inevitable
    - d) Performance is always worse

**Answers:** 13-c, 14-b, 15-b, 16-a, 17-b

### Additional Exercises


#### Basic
16. What happens if `wait(mutex)` is called before `wait(empty)` in the bounded buffer producer? Trace the deadlock scenario step by step.

#### Intermediate
17. Implement a **priority semaphore** in TypeScript: a semaphore where higher-priority waiters are signaled before lower-priority waiters, regardless of arrival order. Show that this solves the priority inversion problem for the signaling pattern.
18. Write a TypeScript simulation of the **sleeping barber problem**: one barber (single server), N waiting chairs (bounded queue). If no customers, the barber sleeps. If a customer arrives and the barber is asleep, the customer wakes the barber. If all chairs are full, the customer leaves.

#### Advanced
19. Implement a **concurrent hash map** using fine-grained locking in TypeScript. Use an array of mutexes (one per bucket) to allow concurrent reads/writes to different buckets. Compare performance against a single-lock implementation under workloads: (a) 90% reads, 10% writes, (b) 50/50 mixed.
20. Implement the **cigarette smokers problem** using semaphores in TypeScript. The agent places two ingredients on the table. Each smoker has an infinite supply of one ingredient and needs the other two. Show that the solution correctly coordinates without deadlock.

## 11. Summary

- A **semaphore** is an integer with two atomic operations: `wait()` (decrement/block) and `signal()` (increment/wake)
- **Binary semaphores** (0/1) handle mutual exclusion and signaling; **counting semaphores** (0..N) manage resource pools
- The **bounded buffer** problem uses three semaphores: `empty` (counts slots), `full` (counts items), `mutex` (protects buffer)
- The **readers-writers** problem highlights fairness: readers-priority can starve writers, writers-priority can starve readers
- The **dining philosophers** problem demonstrates deadlock → solutions include limiting concurrency, asymmetric pickup, and monitors
- The **sleeping barber** problem models bounded servers with overflow handling
- The **cigarette smokers** problem demonstrates multi-resource synchronization with a coordinator agent
- **Monitors** provide automatic mutual exclusion with condition variables for scheduling
- **Mesa semantics** (signaler keeps lock, waiter re-checks) is more common than **Hoare semantics** (immediate handoff)
- POSIX condition variables, Java `synchronized`/`wait()`/`notify()`, and C++ `std::condition_variable` all use Mesa semantics
- Always guard `wait()` with a `while()` loop → Mesa semantics and spurious wakeups require it
- A binary semaphore is **not** a mutex → the key difference is ownership

## 12. Exercises

### Basic


1. Why must `wait(empty)` and `wait(mutex)` in the bounded buffer be in that order? What happens if they are reversed?
2. In the dining philosophers problem, trace the exact sequence that leads to deadlock with 5 philosophers.
3. What is the difference between `pthread_cond_signal()` and `pthread_cond_broadcast()`?
4. In the readers-writers problem, how can writers starve? Design a trace that shows 3 readers preventing a writer from accessing the database.
5. What happens if a counting semaphore's counter overflows? How would you detect this?

### Intermediate


6. Implement the readers-writers problem with writer priority. A writer that arrives should block all subsequent readers until it completes.
7. Solve the dining philosophers problem without using a waiter mutex → instead, change the pickup order so that philosophers with odd IDs pick up left first, even IDs pick up right first. Prove this prevents deadlock.
8. Implement a reusable barrier using condition variables. The barrier should support a variable number of threads and be reusable across multiple phases.
9. Modify the sleeping barber problem to support 3 barbers instead of 1, each with their own chair, sharing the same waiting room.
10. Implement the cigarette smokers problem where the agent puts ingredients at random intervals and multiple smokers may compete.

### Advanced


11. Implement a **priority ceiling protocol** using monitors. When a high-priority task blocks on a low-priority task holding a lock, the low-priority task should temporarily inherit the high priority. Use `pthread` real-time scheduling for this.
12. Implement a concurrent hash table with fine-grained locking (one lock per bucket) using POSIX threads. Compare its performance to a single-lock implementation under (a) read-heavy, (b) write-heavy, (c) mixed workloads. What is the optimal number of buckets for 8 threads?
13. Design and implement a **reading-room problem**: A reading room can hold N readers simultaneously. A writer needs exclusive access. But unlike classic readers-writers, readers may enter and leave the room independently, and a writer must wait for ALL current readers to leave before entering. The writer must also prevent new readers from entering while waiting. Implement with both semaphores and monitors.
14. Compare the performance of `std::counting_semaphore`, `std::mutex` + `std::condition_variable`, and a spinlock for protecting a shared counter with 1000 increments per thread across 1, 2, 4, 8, and 16 threads. Explain the results.
15. Find and fix a real concurrency bug in an open-source project that uses semaphores or condition variables. Document the bug, the fix, and why the original code was wrong.
