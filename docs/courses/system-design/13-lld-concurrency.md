# Chapter 13: Low-Level Design: Concurrency and Threading
> **Previous:** [12 Lld Component Design](./12-lld-component-design.md) | **Next:** [14 Distributed Data Structures](./14-distributed-data-structures.md)

---
## Learning Objectives
- Identify and fix race conditions using mutual exclusion, semaphores, and condition variables
- Analyze deadlock scenarios using the four Coffman conditions and apply prevention/avoidance strategies
- Implement lock-free data structures using compare-and-swap (CAS) and manage the ABA problem
- Calculate theoretical speedup limits using Amdahl's Law and Gustafson's Law
- Design thread pool configurations (fixed, cached, scheduled, work-stealing) for different workload types
- Distinguish between threading models: async/await event loops, actor model message passing, and CSP channels
---

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/hero.svg" alt="Chapter Banner: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/handwritten-notes.svg" alt="Handwritten Notes: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/sticky-notes.svg" alt="Sticky Notes: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/visual-explanation.svg" alt="Visual Explanation: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/architecture.svg" alt="Architecture: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/workflow.svg" alt="Workflow: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/mindmap.svg" alt="Mind Map: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/comparison.svg" alt="Comparison: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/cheatsheet.svg" alt="Cheat Sheet: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/interview-quiz.svg" alt="Quiz Card: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/system-design/13-lld-concurrency/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/system-design/13-lld-concurrency/social-card.svg" alt="Social Card: Chapter 13: Low-Level Design: Concurrency and Threading" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Concurrency models, threading, async, locks, race conditions |
| **Key Concepts** | Thread safety, deadlock, livelock, starvation, race conditions |
| **Concurrency Models** | Thread-based, event-driven, actor model, coroutines |
| **Synchronization** | Mutex, semaphore, condition variable, atomic operations |
| **Async Patterns** | Promise, future, async/await, reactor pattern |
| **Real-World** | Node.js, Go goroutines, Java concurrency, Akka actors |

---
## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
```

## Theory
> **One-Sentence Takeaway:** Theory is the foundation ? master it before moving to examples and exercises.
### Thread Safety Fundamentals


> **Pro Tip:** Master this concept thoroughly ? it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept ? it appears in nearly every system design interview. Understand both the how and the why.

> **Warning:** A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements.

> **Pro Tip:** Master this concept thoroughly ? it appears in nearly every system design interview.
![Concurrency and Threading Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/13-concurrency.png)

A **race condition** occurs when the behavior of a program depends on the interleaving of operations across multiple threads. The classic example is a non-atomic increment: `counter += 1` compiles into three machine instructions—load, add, store. Two threads executing simultaneously can both load the same value, both increment it, and both store it, losing one increment.

A **critical section** is a region of code that accesses shared resources and must not be executed by more than one thread at a time. The goal of synchronization is to enforce mutual exclusion over critical sections.

**Mutex** (mutual exclusion) is the most basic synchronization primitive. A thread locks a mutex before entering a critical section and unlocks it after leaving. If the mutex is already locked, the thread blocks until it is unlocked. Mutexes in Python (`threading.Lock`) are reentrant by default only when using `RLock`.

```python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:
            counter += 1
```

**Semaphore** generalizes mutex to allow N concurrent threads. A semaphore maintains a count; `acquire()` decrements the count (blocking if zero), and `release()` increments it. A binary semaphore (count = 1) is equivalent to a mutex. Semaphores are useful for controlling access to a pool of resources (e.g., database connections).

**Condition Variable** allows threads to wait for a specific condition to become true. A thread waits on a condition variable, releasing the associated mutex and sleeping until another thread signals that the condition may be true. Condition variables are used to implement producer-consumer queues where a consumer waits for items to become available.

**Read-Write Lock** allows multiple concurrent readers but exclusive access for writers. This optimizes for read-heavy workloads: readers do not block other readers, only writers. Python's standard library does not include a read-write lock, but one can be built on top of `threading.Condition`.

### Deadlock


> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Deadlock occurs when two or more threads are each waiting for the other to release a resource. The four **Coffman conditions** are necessary for deadlock:

1. **Mutual Exclusion**: at least one resource is non-sharable.
2. **Hold and Wait**: a thread holds at least one resource while waiting for another.
3. **No Preemption**: resources cannot be forcibly taken from a thread.
4. **Circular Wait**: a cycle of threads exists where each holds a resource the next one needs.

```python
def thread_a():
    lock1.acquire()
    lock2.acquire()  # May deadlock with thread_b

def thread_b():
    lock2.acquire()
    lock1.acquire()  # May deadlock with thread_a
```

**Deadlock Prevention** eliminates one of the four conditions:
- Eliminate mutual exclusion: use lock-free data structures.
- Eliminate hold-and-wait: acquire all locks at once atomically.
- Eliminate no preemption: allow lock stealing (risky).
- Eliminate circular wait: enforce a global lock ordering (most practical).

A **lock order** prevents circular wait by ensuring that all threads acquire locks in the same global order. If lock1 is always acquired before lock2, the cycle in the example above cannot form.

**Deadlock Avoidance** uses the **Banker's Algorithm**, which checks whether granting a resource request leaves the system in a safe state. A state is safe if there exists a sequence of thread executions where all threads can complete. The algorithm is conservative and requires knowing maximum resource requirements in advance, which limits its practical use.

**Deadlock Detection** allows the system to enter a deadlock but detects it (via a wait-for graph cycle detection) and recovers by terminating one or more threads or preempting resources.

### Lock-Free Programming


> **Remember:** Always articulate trade-offs clearly ? interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Lock-free programming achieves thread safety without mutexes by using **atomic operations** directly on memory. The fundamental primitive is **Compare-and-Swap (CAS)**:

```
CAS(address, expected, new):
    if *address == expected:
        *address = new
        return True
    else:
        return False
```

CAS is a single atomic instruction on most CPUs (e.g., `cmpxchg` on x86). A lock-free increment loop looks like:

```python
def atomic_increment(counter: list):
    while True:
        old = counter[0]
        new = old + 1
        if CAS(counter, old, new):
            break
```

If another thread modifies the counter between the read and the CAS, the CAS fails and the loop retries.

**The ABA Problem**: Thread A reads value `A` from a location. Thread B changes it to `B` and back to `A`. Thread A's CAS succeeds, but the state is different (a node was removed and reinserted, but its address is the same). Solutions include tagged pointers or double-wide CAS that increments a version number alongside the pointer.

**Hazard Pointers**: In lock-free data structures, a thread may delete a node that another thread is still accessing. Hazard pointers solve this: each thread publishes the addresses it is currently accessing; a thread cannot delete a node if any hazard pointer points to it.

### Amdahl's Law and Gustafson's Law


**Amdahl's Law** gives the theoretical speedup when parallelizing a workload with a serial fraction `s` (non-parallelizable) and a parallel fraction `p` (where `p = 1 - s`):

```
Speedup(S) = 1 / (s + p/N)
```

where `N` is the number of processors. As `N ? 8`, the maximum speedup is `1/s`. If 10% of a task is serial, the absolute maximum speedup is 10×, regardless of how many cores you add. This is Amdahl's sobering insight: serial bottlenecks dominate at scale.

**Gustafson's Law** provides a different perspective: rather than fixing the problem size and measuring how fast it runs, fix the execution time and ask how large a problem can be solved. Since problem size typically grows with available parallelism, the scaled speedup is:

```
Scaled Speedup(S) = s + p * N = s + (1 - s) * N = N - s * (N - 1)
```

Amdahl's Law describes strong scaling (fixed problem, more cores). Gustafson's Law describes weak scaling (fixed time, larger problem). Both are useful: Amdahl tells you the ceiling for a given computation; Gustafson tells you how much you can compute with more resources.

### Thread Pools


Thread pools mitigate the overhead of thread creation and destruction. Four common configurations:

**Fixed Thread Pool**: A fixed number of threads handle incoming tasks. Tasks beyond the pool size are queued. Best for CPU-bound workloads where oversubscription (more threads than cores) degrades performance due to context switching.

**Cached Thread Pool**: Threads are created on demand and cached for reuse. Idle threads are terminated after a timeout. Best for short-lived, I/O-bound tasks where tasks arrive in bursts.

**Scheduled Thread Pool**: Executes tasks after a delay or periodically. Used for cron-like timers, health checks, and retry logic.

**Work-Stealing Pool** (Fork-Join): Each worker thread has its own deque of tasks. When a thread's deque is empty, it steals tasks from other threads' tails. This provides better load balancing than a global work queue because threads naturally steal from busy neighbors. Java's `ForkJoinPool` and Go's goroutine scheduler use work-stealing.

Python's `concurrent.futures.ThreadPoolExecutor` provides a configurable thread pool:

```python
from concurrent.futures import ThreadPoolExecutor, as_completed

def fetch_url(url: str) -> bytes: ...

with ThreadPoolExecutor(max_workers=10) as executor:
    futures = [executor.submit(fetch_url, url) for url in urls]
    for future in as_completed(futures):
        result = future.result()
        process(result)
```

### Async/Await Internals


Async/await is a cooperative concurrency model where a single thread switches between tasks at explicit await points. The core components are:

**Event Loop**: A loop that continuously checks for ready tasks and resumes them. It manages a ready queue, an I/O poller (e.g., epoll on Linux, IOCP on Windows), and a timer heap for delayed tasks.

**Coroutine**: A function defined with `async def` that can be suspended and resumed. In Python, each coroutine is an object that follows the iterator-like protocol: `__next__` drives execution, and `StopIteration` carries the return value.

**Future / Promise**: A placeholder for a result that is not yet available. A future has three states: pending, resolved (with a value), or rejected (with an exception). Callbacks can be attached to futures for notification.

```python
import asyncio

async def fetch_data(url: str) -> bytes:
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.read()

async def main():
    task1 = asyncio.create_task(fetch_data("/api/1"))
    task2 = asyncio.create_task(fetch_data("/api/2"))
    results = await asyncio.gather(task1, task2)

asyncio.run(main())
```

The JavaScript event loop is similar but runs on a single thread with a callback queue. The microtask queue (promises) has higher priority than the macrotask queue (setTimeout, I/O). This ordering is critical: a promise resolution always runs before the next timer callback, even if the timer has elapsed.

### Actor Model


The Actor model (Erlang, Akka) treats every entity as an **actor**—a computation unit that encapsulates state, behavior, and a mailbox. Actors communicate exclusively through asynchronous message passing; they never share state. Each actor processes messages sequentially from its mailbox.

Advantages:
- No shared state means no locks, no race conditions.
- Actors can be distributed across machines transparently.
- Supervision hierarchies handle failure: when an actor crashes, its supervisor decides whether to restart it.

```python
# Simplified actor using threads and queues
class Actor:
    def __init__(self):
        self._mailbox = queue.Queue()
        self._thread = threading.Thread(target=self._run, daemon=True)
        self._thread.start()

    def send(self, message):
        self._mailbox.put(message)

    def _run(self):
        while True:
            message = self._mailbox.get()
            self.on_message(message)

    def on_message(self, message):
        raise NotImplementedError
```

Erlang's "let it crash" philosophy treats crashes as first-class failures to be managed by supervisors, not caught and handled inline. This produces systems that self-heal without complex error-handling logic.

### Go Goroutines and CSP


Go implements Communicating Sequential Processes (CSP). Goroutines are lightweight threads multiplexed onto OS threads by Go's runtime scheduler. The key abstraction is the **channel**:

```go
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i  // Send
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Println(val)
    }
}

func main() {
    ch := make(chan int, 5)  // Buffered channel
    go producer(ch)
    consumer(ch)
}
```

Channels are first-class values that can be passed to functions, selected with `select`, and closed to signal completion. The `select` statement waits on multiple channel operations simultaneously, executing the first one that becomes ready:

```go
select {
case msg := <-ch1:
    fmt.Println(msg)
case <-time.After(1 * time.Second):
    fmt.Println("timeout")
case <-done:
    return
}
```

Goroutine leaks occur when a goroutine is blocked forever on a send or receive. Detection tools (Go's pprof, leak-checking libraries) identify goroutines that have not terminated. The typical fix: use contexts with deadlines or cancellations.

### Dining Philosophers


Five philosophers sit at a table with five forks. Each philosopher alternates between thinking and eating. To eat, a philosopher needs both the left and right forks. The naive solution (pick up left, then right) deadlocks when all five philosophers pick up their left fork simultaneously.

**Solution 1: Mutex with a guardian**. A mutex protects the fork-picking sequence. This limits concurrency but prevents deadlock.

**Solution 2: Resource hierarchy**. Number the forks 0-4. Each philosopher picks up the lower-numbered fork first. Philosopher 4 (forks 4 and 0) picks up fork 0 first. This breaks the circular wait.

**Solution 3: Chandy-Misra algorithm** (distributed):
- Forks are labeled as clean or dirty.
- Initially, lower-numbered philosophers have dirty forks.
- A philosopher sends a request for a fork they need.
- A fork is released if it is dirty (becomes clean after release).
- This guarantees that at least one philosopher can always eat.

```python
import threading
import time
import random

class Fork:
    def __init__(self, id: int):
        self.id = id
        self.lock = threading.Lock()

class Philosopher(threading.Thread):
    def __init__(self, id: int, left_fork: Fork, right_fork: Fork):
        super().__init__()
        self.id = id
        self.left = left_fork
        self.right = right_fork

    def run(self):
        for _ in range(5):
            self.think()
            self.eat()

    def think(self):
        print(f"Philosopher {self.id} thinking")
        time.sleep(random.uniform(0.5, 1.5))

    def eat(self):
        # Resource hierarchy: pick up lower-numbered fork first
        first = self.left if self.left.id < self.right.id else self.right
        second = self.right if first == self.left else self.left

        with first.lock:
            with second.lock:
                print(f"Philosopher {self.id} eating")
                time.sleep(random.uniform(0.5, 1.0))
```

---
## Examples
### Example 1: Concurrent LRU Cache with Lock Striping

A high-performance LRU cache that supports concurrent access. Lock striping divides the cache into segments, each with its own lock, reducing contention compared to a single global lock.

```python
import threading
from collections import OrderedDict

class ConcurrentLRUCache:
    def __init__(self, capacity: int, num_segments: int = 16):
        self._segments = [LRUSegment(capacity // num_segments)
                          for _ in range(num_segments)]

    def _get_segment(self, key: str):
        return self._segments[hash(key) % len(self._segments)]

    def get(self, key: str):
        return self._get_segment(key).get(key)

    def put(self, key: str, value):
        self._get_segment(key).put(key, value)

class LRUSegment:
    def __init__(self, capacity: int):
        self._capacity = capacity
        self._cache = OrderedDict()
        self._lock = threading.Lock()

    def get(self, key: str):
        with self._lock:
            if key in self._cache:
                self._cache.move_to_end(key)
                return self._cache[key]
            return None

    def put(self, key: str, value):
        with self._lock:
            if key in self._cache:
                self._cache.move_to_end(key)
            self._cache[key] = value
            if len(self._cache) > self._capacity:
                self._cache.popitem(last=False)
```

**Why lock striping works**: The LRU cache has `capacity` entries. With 16 segments, each segment holds approximately `capacity/16` entries. Contention on any single lock is reduced by a factor proportional to the number of segments. Python's `hash()` distributes keys reasonably uniformly, so hot keys affect only one segment.

### Example 2: Reader-Writer Lock Implementation

```python
import threading

class ReadWriteLock:
    def __init__(self):
        self._readers = 0
        self._lock = threading.Lock()
        self._cond = threading.Condition(self._lock)

    def acquire_read(self):
        with self._cond:
            while self._readers < 0:  # Writer is active
                self._cond.wait()
            self._readers += 1

    def release_read(self):
        with self._cond:
            self._readers -= 1
            if self._readers == 0:
                self._cond.notify_all()

    def acquire_write(self):
        with self._cond:
            while self._readers != 0:
                self._cond.wait()
            self._readers = -1  # Signal writer active

    def release_write(self):
        with self._cond:
            self._readers = 0
            self._cond.notify_all()
```

This implementation uses a negative `_readers` value to indicate that a writer is active. Readers block until the writer finishes. Writers block while any reader is active. The `notify_all()` in `release_write` wakes all waiting readers.

### Example 3: Thread-Safe Singleton with Double-Checked Locking

```python
import threading

class DatabaseConnectionPool:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:          # First check (unlocked)
            with cls._lock:                # Acquire class-level lock
                if cls._instance is None:  # Second check (locked)
                    obj = super().__new__(cls)
                    obj._connections = []  # Initialize here
                    cls._instance = obj
        return cls._instance

    def get_connection(self):
        # Return pooled connection
        pass
```

The first check avoids the overhead of acquiring the lock on every access after initialization. The second check ensures that if two threads pass the first check concurrently, only one creates the instance.

### Example 4: Producer-Consumer with Condition Variable

```python
import threading
import time
import random

class BoundedBuffer:
    def __init__(self, capacity: int):
        self._buffer = []
        self._capacity = capacity
        self._lock = threading.Lock()
        self._not_full = threading.Condition(self._lock)
        self._not_empty = threading.Condition(self._lock)

    def put(self, item):
        with self._lock:
            while len(self._buffer) >= self._capacity:
                self._not_full.wait()
            self._buffer.append(item)
            self._not_empty.notify()

    def get(self):
        with self._lock:
            while len(self._buffer) == 0:
                self._not_empty.wait()
            item = self._buffer.pop(0)
            self._not_full.notify()
            return item

def producer(buf: BoundedBuffer, items: int):
    for i in range(items):
        buf.put(i)
        print(f"Produced {i}")
        time.sleep(random.uniform(0.1, 0.3))
    buf.put(None)  # Sentinel

def consumer(buf: BoundedBuffer, name: str):
    while True:
        item = buf.get()
        if item is None:
            buf.put(None)  # Propagate sentinel for other consumers
            break
        print(f"{name} consumed {item}")
        time.sleep(random.uniform(0.2, 0.5))

buf = BoundedBuffer(5)
t1 = threading.Thread(target=producer, args=(buf, 10))
t2 = threading.Thread(target=consumer, args=(buf, "C1"))
t3 = threading.Thread(target=consumer, args=(buf, "C2"))

t1.start(); t2.start(); t3.start()
t1.join(); t2.join(); t3.join()
```

**Two condition variables** (`_not_full`, `_not_empty`) avoid the thundering herd problem. If a single condition variable is used, a `notify_all()` wakes all threads, but only one can proceed. With two condition variables, only the relevant threads are woken.

### Example 5: Thread Pool Implementation

```python
import threading
import queue
from concurrent.futures import Future

class ThreadPool:
    def __init__(self, num_workers: int):
        self._tasks = queue.Queue()
        self._workers = []
        self._shutdown = False

        for _ in range(num_workers):
            t = threading.Thread(target=self._worker_loop, daemon=True)
            t.start()
            self._workers.append(t)

    def submit(self, fn, *args, **kwargs) -> Future:
        future = Future()
        self._tasks.put((fn, args, kwargs, future))
        return future

    def _worker_loop(self):
        while not (self._shutdown and self._tasks.empty()):
            try:
                fn, args, kwargs, future = self._tasks.get(timeout=1)
                try:
                    result = fn(*args, **kwargs)
                    future.set_result(result)
                except Exception as e:
                    future.set_exception(e)
                finally:
                    self._tasks.task_done()
            except queue.Empty:
                continue

    def shutdown(self):
        self._shutdown = True
        for w in self._workers:
            w.join()

pool = ThreadPool(4)
futures = [pool.submit(lambda x: x * 2, i) for i in range(10)]
results = [f.result() for f in futures]
```

### Example 6: Lock-Free Stack with CAS (ABA Problem)

```python
import threading
import time

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LockFreeStack:
    def __init__(self):
        self._top = None
        self._lock = threading.Lock()

    def push(self, value):
        node = Node(value)
        while True:
            node.next = self._top
            # CAS would be: compare_and_swap(&self._top, node.next, node)
            # Python simulation:
            with self._lock:
                if self._top == node.next:
                    self._top = node
                    return

    def pop(self):
        while True:
            old_top = self._top
            if old_top is None:
                return None
            # CAS would be: compare_and_swap(&self._top, old_top, old_top.next)
            with self._lock:
                if self._top == old_top:
                    self._top = old_top.next
                    return old_top.value
```

Python's GIL provides memory safety for individual bytecode operations, but the CAS loop pattern is necessary in languages without a GIL (C++, Rust, Java with `AtomicReference`). The ABA problem manifests when a node is popped, freed, then reallocated at the same address—a hazard pointer scheme or tagged reference is needed.

### Example 7: async/await — Web Scraper with asyncio

```python
import asyncio
import aiohttp

async def fetch(session: aiohttp.ClientSession, url: str) -> dict:
    async with session.get(url) as response:
        return {"url": url, "status": response.status, "size": len(await response.read())}

async def fetch_all(urls: list[str]) -> list[dict]:
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        return await asyncio.gather(*tasks)

async def main():
    urls = [f"https://httpbin.org/delay/{i}" for i in range(1, 6)]
    results = await fetch_all(urls)
    for r in results:
        print(f"{r['url']}: {r['status']} ({r['size']} bytes)")

asyncio.run(main())
```

**Execution flow**: `asyncio.run(main())` creates the event loop, runs `main`, and closes the loop. Inside `fetch_all`, `asyncio.gather` schedules all coroutines concurrently. At each `await`, the event loop suspends the coroutine and runs another ready coroutine. I/O waits do not block the thread—they register a callback with the OS poller and resume when data arrives.

### Example 8: Deadlock Detection with Wait-For Graph

```python
import threading
import time

class DeadlockDetector:
    def __init__(self):
        self._lock = threading.Lock()
        self._wait_for = {}  # thread_id -> set of lock_ids it's waiting for
        self._holders = {}   # lock_id -> thread_id that holds it

    def acquire(self, lock, timeout=5):
        thread_id = threading.current_thread().ident
        lock_id = id(lock)
        start = time.time()

        while time.time() - start < timeout:
            with self._lock:
                if lock_id not in self._holders:
                    self._holders[lock_id] = thread_id
                    return True
                self._wait_for[thread_id] = {self._holders[lock_id]}

            if self._detect_cycle():
                print("DEADLOCK DETECTED!")
                raise RuntimeError("Deadlock")

            time.sleep(0.01)

        return False

    def _detect_cycle(self) -> bool:
        # Simple DFS for cycle detection in wait-for graph
        visited = set()
        for thread in self._wait_for:
            if self._dfs(thread, set()):
                return True
        return False

    def _dfs(self, thread, path) -> bool:
        if thread in path:
            return True
        path.add(thread)
        for waiting in self._wait_for.get(thread, set()):
            if self._dfs(waiting, path):
                return True
        path.remove(thread)
        return False
```

### Example 9: Go-Style Channel in Python

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.
```python
import threading
import queue
from typing import Generic, TypeVar

T = TypeVar('T')

class Chan(Generic[T]):
    def __init__(self, capacity: int = 0):
        self._queue = queue.Queue(maxsize=capacity)
        self._closed = False
        self._close_lock = threading.Lock()

    def send(self, item: T):
        if self._closed:
            raise ValueError("send on closed channel")
        self._queue.put(item)

    def recv(self) -> T:
        item = self._queue.get()
        self._queue.task_done()
        return item

    def close(self):
        with self._close_lock:
            self._closed = True

    def __iter__(self):
        return self

    def __next__(self):
        try:
            return self.recv()
        except queue.Empty:
            raise StopIteration

def select(chan_map: dict[Chan, callable], timeout=None) -> bool:
    """Simplified select: waits for any channel to be ready."""
    start = time.time()
    while True:
        for ch, fn in chan_map.items():
            try:
                msg = ch._queue.get_nowait()
                fn(msg)
                return True
            except queue.Empty:
                continue
        if timeout and (time.time() - start) > timeout:
            return False
        time.sleep(0.001)
```

## Concept Comparison

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 13: Low-Level Design: Concurrency and Threading | Fundamental concept for system design |

---

## Quick Reference

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept from Chapter 13: Low-Level Design: Concurrency and Threading |

---

## Cross-Application Matrix

| Concept | Application | Trade-Off |
|---------|------------|-----------|
| Theory | Relevant across design scenarios | Requirements-driven decisions |

---

## Chapter Quiz

| # | Question | A | B | C | D | Answer |
|---|----------|---|---|---|---|--------|
| 1 | What does Amdahl's Law describe? | Speedup from adding memory | Maximum theoretical speedup from parallelization | Network latency reduction | Disk I/O optimization | **B** |
| 2 | Which of the four Coffman conditions is most practical to eliminate? | Mutual Exclusion | Hold and Wait | No Preemption | Circular Wait | **D** |
| 3 | What is the ABA problem? | A deadlock detection algorithm | A CAS race where a value changes then reverts | A thread starvation pattern | A memory leak scenario | **B** |
| 4 | Why does NGINX use a single-threaded event loop? | To simplify locking | For maximum CPU utilization | Because I/O-bound workloads benefit from async I/O without context switching | Because it only handles one connection | **C** |
| 5 | What is the key difference between Actor model and CSP? | Actors share state; CSP does not | Actors communicate via named channels; CSP via direct messages | Actors use message passing with named recipients; CSP uses channels as intermediaries | CSP uses locks; Actors do not | **C** |

---

## Practical Takeaways

| Takeaway | Application |
|----------|-------------|
| Use mutexes for short critical sections; prefer read-write locks for read-heavy workloads | Profile lock contention; switch to read-write locks when reader : writer ratio exceeds 10:1 |
| Break circular wait with a global lock ordering to prevent deadlock | Assign numeric IDs to all locks; enforce acquisition order in code reviews |
| Use lock-free data structures only when contention is high and benchmarks prove benefit | Start with mutexes; profile; only migrate to CAS-based structures if contention is >30% |
| Async/await with event loops is ideal for I/O-bound services | Use for web servers, proxies, and API gateways; avoid for CPU-bound computation |
| Thread pools should match workload type: fixed for CPU, cached for bursty I/O | Configure `max_workers = CPU cores + 1` for CPU-bound; allow unbounded for I/O-bound |
| Actor model eliminates shared state but adds message-passing overhead | Use when state isolation is critical (game servers, financial transactions) |
| Use work-stealing pools for unbalanced, recursive workloads | Fork-join patterns, parallel sort, and tree traversal benefit from dynamic load balancing |

## Case Study

**Scenario: Real-time Chat Backend at Scale**

A team is building a real-time chat service targeting 10 million daily active users with 1 million concurrent connections. The initial prototype uses a thread-per-connection model: each WebSocket connection spawns a dedicated OS thread. Under 10,000 concurrent connections, the system consumes 2 GB of RAM just for thread stacks (default 2 MB per thread) and spends 40% of CPU time on context switching. At 100,000 connections, the system is unresponsive due to memory exhaustion.

The team redesigns using an event-loop architecture (Node.js with `async/await`). A single thread handles 10,000 connections using epoll for I/O multiplexing. Message broadcasting uses a Redis pub-sub channel: each server instance subscribes to all room channels and emits messages to connected clients without per-connection threads. Memory drops to 500 MB for the same 100,000 connections, and context switching overhead disappears.

For stateful operations (user presence tracking, typing indicators), the team adopts an Actor-like model per chat room. Each room is an independent state machine processed sequentially, eliminating locking entirely. Room state is stored in Redis as a hash, and the event loop processes one message per room at a time. This hybrid architecture — event loop for I/O, actor-per-room for state — handles 1 million concurrent connections on 10 commodity servers with P99 message delivery latency under 50 ms. The key insight: matching concurrency model to workload type (I/O vs stateful computation) is more important than raw throughput.


### Implementation: Concurrency and Parallelism

```typescript
class ThreadPool { private queue: (() => void)[] = []; private running = 0;
  constructor(private maxConcurrency: number) {}
  enqueue(task: () => void): void { this.queue.push(task); this.drain(); }
  private drain(): void { if (this.running >= this.maxConcurrency || this.queue.length === 0) return; this.running++; const task = this.queue.shift()!; Promise.resolve().then(() => { task(); this.running--; this.drain(); }); }
  get pendingTasks(): number { return this.queue.length; } get activeTasks(): number { return this.running; }
}
class Mutex { private locked = false; private waiters: (() => void)[] = [];
  acquire(): Promise<void> { if (!this.locked) { this.locked = true; return Promise.resolve(); } return new Promise(r => this.waiters.push(r)); }
  release(): void { if (this.waiters.length > 0) this.waiters.shift()!(); else this.locked = false; }
}
class ReadWriteLock { private readers = 0; private writers = 0; private writeWaiters: (() => void)[] = [];
  acquireRead(): Promise<void> { while (this.writers > 0 || this.writeWaiters.length > 0) return new Promise(r => setTimeout(r, 10)); this.readers++; return Promise.resolve(); }
  releaseRead(): void { this.readers--; }
  acquireWrite(): Promise<void> { this.writers++; while (this.readers > 0) return new Promise(r => setTimeout(r, 10)); return Promise.resolve(); }
  releaseWrite(): void { this.writers--; }
}
class Barrier { private count: number; private arrived = 0; private resolve: (() => void) | null = null;
  constructor(count: number) { this.count = count; }
  wait(): Promise<void> { this.arrived++; if (this.arrived >= this.count) { this.resolve?.(); this.arrived = 0; return Promise.resolve(); } return new Promise(r => this.resolve = r); }
}
class Semaphore { private count: number; private waiters: (() => void)[] = [];
  constructor(initial: number) { this.count = initial; }
  acquire(): Promise<void> { if (this.count > 0) { this.count--; return Promise.resolve(); } return new Promise(r => this.waiters.push(r)); }
  release(): void { if (this.waiters.length > 0) this.waiters.shift()!(); else this.count++; }
}
class ActorModel { private mailbox: any[] = []; private processing = false;
  constructor(private name: string) {}
  send(msg: any): void { this.mailbox.push(msg); if (!this.processing) this.process(); }
  private async process(): Promise<void> { this.processing = true; while (this.mailbox.length > 0) { const msg = this.mailbox.shift(); await this.handle(msg); } this.processing = false; }
  private async handle(msg: any): Promise<void> { console.log(`${this.name} received:`, msg); }
}
```

### TypeScript: Thread Pool with Worker Threads and Shutdown

```typescript
class WorkerThread {
  private thread: Promise<void>;
  private running = true;
  constructor(private id: number, private taskQueue: (() => Promise<void>)[], private onIdle: () => void) {
    this.thread = this.run();
  }
  private async run(): Promise<void> {
    while (this.running) {
      const task = this.taskQueue.shift();
      if (task) await task();
      else await new Promise(r => setTimeout(r, 10));
    }
  }
  shutdown(): void { this.running = false; }
  async join(): Promise<void> { await this.thread; }
}

class ThreadPoolExecutor {
  private workers: WorkerThread[] = [];
  private taskQueue: (() => Promise<void>)[] = [];
  private drained = false;
  private drainResolve: (() => void) | null = null;
  private activeCount = 0;

  constructor(private numWorkers: number) {
    for (let i = 0; i < numWorkers; i++) {
      this.workers.push(new WorkerThread(i, this.taskQueue, () => this.checkDrained()));
    }
  }

  async submit<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.taskQueue.push(async () => {
        this.activeCount++;
        try { resolve(await fn()); }
        catch (e) { reject(e); }
        finally { this.activeCount--; this.checkDrained(); }
      });
    });
  }

  private checkDrained(): void {
    if (this.drained && this.taskQueue.length === 0 && this.activeCount === 0) {
      this.drainResolve?.();
    }
  }

  async shutdown(): Promise<void> {
    this.drained = true;
    if (this.taskQueue.length === 0 && this.activeCount === 0) return;
    await new Promise<void>(r => this.drainResolve = r);
    for (const w of this.workers) w.shutdown();
    await Promise.all(this.workers.map(w => w.join()));
  }
}
```

### TypeScript: Readers-Writers Lock with Fairness

```typescript
class ReadersWritersLock {
  private readers = 0;
  private writing = false;
  private readerWaiters: (() => void)[] = [];
  private writerWaiters: (() => void)[] = [];
  private writerActive = false;

  async acquireRead(): Promise<void> {
    if (!this.writing && this.writerWaiters.length === 0 && !this.writerActive) {
      this.readers++;
      return;
    }
    await new Promise<void>(r => this.readerWaiters.push(r));
    this.readers++;
  }

  releaseRead(): void {
    this.readers--;
    if (this.readers === 0) this.tryActivateWriter();
  }

  async acquireWrite(): Promise<void> {
    if (this.readers === 0 && !this.writing) {
      this.writing = true;
      this.writerActive = true;
      return;
    }
    await new Promise<void>(r => this.writerWaiters.push(r));
    this.writing = true;
    this.writerActive = true;
  }

  releaseWrite(): void {
    this.writing = false;
    this.writerActive = false;
    this.tryActivateReaders();
    if (this.readerWaiters.length === 0) this.tryActivateWriter();
  }

  private tryActivateReaders(): void {
    while (this.readerWaiters.length > 0 && !this.writing) {
      this.readerWaiters.shift()!();
    }
  }

  private tryActivateWriter(): void {
    if (this.writerWaiters.length > 0 && this.readers === 0 && !this.writing) {
      this.writerWaiters.shift()!();
    }
  }
}
```

### TypeScript: Dining Philosophers with Waiter Arbitrator

```typescript
class Chopstick {
  private held = false;
  private waiters: (() => void)[] = [];

  async acquire(): Promise<void> {
    if (!this.held) { this.held = true; return; }
    await new Promise<void>(r => this.waiters.push(r));
    this.held = true;
  }

  release(): void {
    this.held = false;
    if (this.waiters.length > 0) this.waiters.shift()!();
  }
}

class Waiter {
  private eating = new Set<number>();
  constructor(private numPhilosophers: number) {}

  async requestToEat(id: number): Promise<void> {
    while (true) {
      const left = id;
      const right = (id + 1) % this.numPhilosophers;
      if (!this.eating.has(left) && !this.eating.has(right)) {
        this.eating.add(id);
        return;
      }
      await new Promise(r => setTimeout(r, 10));
    }
  }

  finishEating(id: number): void { this.eating.delete(id); }
}

class DiningPhilosopher {
  constructor(
    private id: number,
    private left: Chopstick,
    private right: Chopstick,
    private waiter: Waiter,
    private name: string
  ) {}

  async dine(cycles: number): Promise<void> {
    for (let i = 0; i < cycles; i++) {
      await this.think();
      await this.waiter.requestToEat(this.id);
      await this.left.acquire();
      await this.right.acquire();
      await this.eat();
      this.right.release();
      this.left.release();
      this.waiter.finishEating(this.id);
    }
  }

  private async think(): Promise<void> {
    await new Promise(r => setTimeout(r, Math.random() * 100));
  }

  private async eat(): Promise<void> {
    await new Promise(r => setTimeout(r, Math.random() * 50));
  }
}

async function simulateDiningPhilosophers(): Promise<void> {
  const N = 5;
  const chopsticks = Array.from({ length: N }, () => new Chopstick());
  const waiter = new Waiter(N);
  const philosophers = Array.from({ length: N }, (_, i) =>
    new DiningPhilosopher(i, chopsticks[i], chopsticks[(i + 1) % N], waiter, `Philosopher-${i}`)
  );
  await Promise.all(philosophers.map(p => p.dine(3)));
  console.log('All philosophers finished dining — no deadlock occurred');
}
```

### Concurrency Models Comparison

```mermaid
flowchart TB
    subgraph THREAD_BASED["Thread-Based Concurrency"]
        T1["Thread 1<br/>Stack + Registers"]
        T2["Thread 2<br/>Stack + Registers"]
        T3["Thread N<br/>Stack + Registers"]
        SHARED["Shared Memory<br/>Heap / Objects"]
        LOCK["Lock / Mutex / Semaphore<br/>Synchronization Primitives"]
        T1 & T2 & T3 --> SHARED
        T1 & T2 & T3 -.-> LOCK
    end

    subgraph EVENT_LOOP["Event Loop / Async"]
        EL["Event Loop<br/>Single Thread"]
        TQ["Task Queue<br/>Microtasks > Macrotasks"]
        IO["I/O Poller<br/>epoll / IOCP / kqueue"]
        TIMER["Timer Heap<br/>setTimeout / setInterval"]
        CORO["Coroutines<br/>async / await"]
        EL --> TQ & IO & TIMER
        TQ --> CORO
    end

    subgraph ACTOR_MODEL["Actor Model"]
        A1["Actor A<br/>State + Mailbox"]
        A2["Actor B<br/>State + Mailbox"]
        A3["Actor C<br/>State + Mailbox"]
        SUP["Supervisor<br/>Restart Strategy"]
        A1 -.->|message| A2
        A2 -.->|message| A3
        A3 -.->|message| A1
        A1 & A2 & A3 --> SUP
    end

    classDef thread fill:#4A90D9,color:#fff
    classDef event fill:#7B68EE,color:#fff
    classDef actor fill:#2E8B57,color:#fff
    classDef sync fill:#D32F2F,color:#fff
    class T1,T2,T3 thread
    class EL,IO,TIMER event
    class A1,A2,A3,SUP actor
    class LOCK sync
```

// lld concurrency
// distributed-systems-scalability implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'lld concurrency', data: { topic: 'distributed-systems-scalability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// lld concurrency - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'system-design demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'system-design', chapter: 'lld concurrency' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('system-design'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary
- Race conditions require mutual exclusion: use mutex, semaphore, or read-write locks to protect critical sections.
- Deadlock requires four Coffman conditions; the most practical prevention is a global lock ordering to break circular wait.
- Lock-free programming uses CAS loops for thread safety without mutexes; the ABA problem is a critical concern that requires versioned references or hazard pointers.
- Amdahl's Law gives the serial-bottleneck speedup ceiling; Gustafson's Law gives the scaled speedup for larger problems on more processors.
- Thread pools manage worker thread lifecycles: fixed pools for CPU-bound work, cached pools for bursty I/O, work-stealing pools for unbalanced loads.
- Async/await provides cooperative concurrency on a single thread via event loops, futures, and coroutines.
- The Actor model eliminates shared state entirely, communicating through message passing with supervision hierarchies for fault tolerance.
- Go's CSP model uses goroutines and channels with the `select` statement for composable concurrency.
- The Dining Philosophers problem illustrates deadlock, and solutions include resource hierarchy ordering and the Chandy-Misra distributed algorithm.
- Concurrent data structures (LRU cache with lock striping, lock-free stack) balance correctness with performance.
- Real-world systems like Redis (single-threaded event loop) and NGINX (async I/O) demonstrate that threads are not always the right answer.
---
## Exercises
### Review Questions
<details><summary>Solution</summary>1. Amdahl's Law: S = 1 / (s + (1-s)/N). With s = 0.05 (5% serial): at N = 32, S = 1 / (0.05 + 0.95/32) ≈ 13.5×. At N = 1024, S = 1 / (0.05 + 0.95/1024) ≈ 18.6×. The limit as N → ∞ is 1/0.05 = 20×. Diminishing returns occur because the serial fraction dominates: doubling cores from 512 to 1024 adds only 0.3× speedup.
2. The four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Eliminating hold-and-wait (acquire all locks atomically) is impractical when locks are discovered dynamically (e.g., a transaction that locks rows as it scans). The most practical target is circular wait via a global lock ordering.
3. In a lock-free stack: thread A reads top = node X, thread B pops X (now top = Y), thread B pushes X back (top = X again, but X's next pointer may differ). Thread A's CAS succeeds but the stack state is corrupted. Hazard pointers prevent this by ensuring no thread's referenced node is freed.
4. Actor model: direct message passing to named actors. CSP: communication via anonymous channels. Actors encapsulate state per entity; CSP decouples senders from receivers via channel intermediaries. Go's select and Erlang's receive demonstrate the ergonomic differences.
5. NGINX uses an event loop because web serving is I/O-bound. A single thread handles thousands of connections using epoll. Thread-per-connection outperforms only when each connection requires significant CPU (e.g., video transcoding per stream) where parallel computation justifies context switching.</details>

### Application Problems
<details><summary>Solution</summary>1. Lock striping implementation: create 16 buckets, each with a ReadWriteLock. For a put/get, hash the key to a bucket and acquire that bucket's lock. With 8 threads on 10,000 ops each, the striped version typically shows 4-8× throughput improvement over a single global lock because contention is reduced by the number of buckets.
2. Resource hierarchy solution: number forks 0-4. Each philosopher picks up the lower-numbered fork first. Philosopher 4 (forks 4 and 0) picks up fork 0 first. This breaks the circular wait. The semaphore-based solution limits concurrency to 4 philosophers, guaranteeing at least one can eat.
3. Async scraper typically completes 2-5× faster than thread-pool scraper because there is no thread creation/context-switch overhead and the event loop handles I/O waits more efficiently. The gap widens with more URLs because thread pools hit OS scheduling limits.</details>

### Challenge Problem
<details><summary>Solution</summary>Design a distributed rate limiter with token bucket: use a central Redis store for token state with Lua scripts for atomicity. Each `allow_request` call executes a Lua script that checks and decrements tokens atomically. For deadlock freedom, never acquire multiple locks — the Lua script operates on a single key. Metrics counters are atomic Redis INCR operations. Graceful degradation: if Redis is unreachable, fall back to a local in-memory token bucket that allows requests with degraded accuracy (may overshoot but never blocks).

For the toy Redis-style KV store: implement a single-threaded event loop that polls a command queue. Use a min-heap for TTL expiry (timer wheel approximation). Compare throughput: single-threaded achieves 50K-100K ops/sec on modern hardware with no locking overhead. Multi-threaded with sharded locks may achieve 200K-400K but adds complexity. Under Amdahl's Law, a single-threaded event loop has s = 1 (serial fraction = 100%), so speedup is exactly 1× regardless of cores — but the simplicity and predictability often wins for caching workloads where 100K ops/sec is sufficient.</details>
