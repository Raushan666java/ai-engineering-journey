# Chapter 15: Concurrency

> **Previous:** [14-lambdas](./14-lambdas.md) | **Next:** [16-design-patterns](./16-design-patterns.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Create and manage threads with `std::thread`
- Protect shared data with `std::mutex` and `std::lock_guard`
- Coordinate threads using `std::condition_variable`
- Launch asynchronous tasks with `std::async` and `std::future`
- Use `std::atomic` for lock-free operations

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Concurrency Landscape** | C++11 memory model enables portable threading | Know your hardware concurrency |
| **std::thread** | Join or detach every thread before destruction | Store thread objects, don't let them fall out of scope |
| **Mutex and Lock Guard** | mutex + lock_guard = RAII lock management | Always lock with RAII wrappers |
| **condition_variable** | Wait for condition, notify when state changes | Always check the predicate in a loop |
| **async/future/promise** | Highest-level primitive: launch policy + future result | Prefer async over manual thread for task parallelism |
| **Atomics** | Lock-free operations on fundamental types | Use for simple counters and flags only |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Concurrency Landscape] --> B[std::thread]
    B --> C[Mutex and Lock Guard]
    C --> D[condition_variable]
    B --> E[async/future/promise]
    C --> F[Atomics]
    E --> F
    F --> G[Avoiding Common Pitfalls]
```

## 15.1 The Concurrency Landscape

![Concurrency Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/15-concurrency.png)

Modern hardware provides multiple cores that execute threads in parallel. C++11 introduced a portable threading library. Two fundamental issues arise:

> **Warning:** Always lock mutexes with RAII wrappers (lock_guard or unique_lock). Manual lock/unlock pairs are error-prone and exception-unsafe.


1. **Data races**: multiple threads access the same memory location without synchronisation
2. **Deadlocks**: threads block waiting for each other's resources

The C++ memory model guarantees that well-defined concurrent programs behave predictably across all architectures.

## 15.2 std::thread

> **One-Sentence Takeaway:** std::thread launches execution in a new thread; you must join or detach before it is destroyed.
A `std::thread` represents a single execution context:

```cpp
#include <thread>
#include <iostream>

void worker(int id) {
    std::cout << "Worker " << id << " running on thread "
              << std::this_thread::get_id() << '\n';
}

int main() {
    std::thread t1(worker, 1);
    std::thread t2(worker, 2);

    t1.join();   // wait for t1 to finish
    t2.join();   // wait for t2 to finish

    std::cout << "Main thread done\n";
}
```

Key operations:
- `join()` â€” blocks until the thread completes
- `detach()` â€” allows the thread to run independently (careful: detached threads outlive the creating scope)
- `joinable()` â€” checks if `join` or `detach` is valid

A thread must be joined or detached before destruction, or `std::terminate` is called.

## 15.3 Mutex and Lock Guard

> **One-Sentence Takeaway:** std::mutex protects shared data; lock_guard and unique_lock provide RAII lock management.
A `std::mutex` provides mutual exclusion. `std::lock_guard` acquires the mutex on construction and releases it on destruction (RAII):

```cpp
#include <mutex>

std::mutex mtx;
int shared_counter = 0;

void increment() {
    for (int i = 0; i < 100000; ++i) {
        std::lock_guard<std::mutex> lock(mtx);
        ++shared_counter;
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << shared_counter << '\n';  // 200000
}
```

Without the mutex, the result would be unpredictable due to data races.

Additional mutex variants:
- `std::recursive_mutex` â€” same thread can lock multiple times
- `std::timed_mutex` â€” supports `try_lock_for` and `try_lock_until`
- `std::shared_mutex` (C++17) â€” multiple readers, exclusive writer

## 15.4 std::condition_variable

> **One-Sentence Takeaway:** condition_variable lets threads wait for a condition, waking only when another thread notifies them.
A condition variable allows threads to wait for a condition to become true:

```cpp
#include <condition_variable>
#include <queue>
#include <thread>

std::queue<int> data_queue;
std::mutex mtx;
std::condition_variable cv;

void producer() {
    for (int i = 0; i < 10; ++i) {
        {
            std::lock_guard<std::mutex> lock(mtx);
            data_queue.push(i);
        }
        cv.notify_one();                  // wake one consumer
        std::this_thread::sleep_for(std::chrono::milliseconds(50));
    }
}

void consumer() {
    while (true) {
        std::unique_lock<std::mutex> lock(mtx);
        cv.wait(lock, [] { return !data_queue.empty(); });
        // cv.wait releases the lock, sleeps until notified,
        // then reacquires the lock and checks the predicate

        int value = data_queue.front();
        data_queue.pop();
        lock.unlock();

        std::cout << "Consumed: " << value << '\n';

        if (value == 9) break;
    }
}

int main() {
    std::thread prod(producer);
    std::thread cons(consumer);
    prod.join();
    cons.join();
}
```

`std::condition_variable::wait` requires `std::unique_lock` (not `lock_guard`) because it must be able to lock and unlock the mutex.

## 15.5 std::async, std::future, std::promise

> **One-Sentence Takeaway:** std::async with std::future is the highest-level concurrency primitive, returning a result that will be available later.
`std::async` runs a function asynchronously and returns a `std::future` that holds the result:

```cpp
#include <future>
#include <chrono>

int slow_compute(int x) {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    return x * x;
}

int main() {
    auto future = std::async(std::launch::async, slow_compute, 42);

    std::cout << "Computing...\n";

    int result = future.get();   // blocks until result is ready
    std::cout << "Result: " << result << '\n';
}
```

Launch policies:
- `std::launch::async` â€” run on a new thread
- `std::launch::deferred` â€” run on `get()` call, lazily
- Default (`std::launch::async | std::launch::deferred`) â€” implementation chooses

`std::promise` provides a channel for setting a value that a `future` retrieves:

```cpp
void set_value(std::promise<int>&& prom) {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    prom.set_value(99);
}

int main() {
    std::promise<int> prom;
    std::future<int> fut = prom.get_future();

    std::thread worker(set_value, std::move(prom));

    std::cout << "Waiting...\n";
    std::cout << "Got: " << fut.get() << '\n';

    worker.join();
}
```

## 15.6 Atomic Operations

> **One-Sentence Takeaway:** std::atomic provides lock-free operations on fundamental types, essential for lock-free algorithms.
`std::atomic<T>` provides lock-free operations for small types (typically integral and pointer):

```cpp
#include <atomic>

std::atomic<int> counter{0};

void increment() {
    for (int i = 0; i < 100000; ++i) {
        counter.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << counter.load() << '\n';  // 200000
}
```

Common atomic operations:
- `load()` â€” read the value
- `store()` â€” write the value
- `exchange()` â€” replace and return old value
- `fetch_add()`, `fetch_sub()` â€” atomic arithmetic
- `compare_exchange_weak()`, `compare_exchange_strong()` â€” CAS

Memory ordering specifies visibility constraints:
- `memory_order_relaxed` â€” no ordering guarantees (fastest)
- `memory_order_acquire` â€” subsequent reads see prior writes
- `memory_order_release` â€” prior writes become visible to acquire
- `memory_order_seq_cst` â€” sequential consistency (default, safest)

## 15.7 Avoiding Common Pitfalls

> **One-Sentence Takeaway:** Deadlock, data races, and false sharing are common pitfalls — systematic discipline prevents them.
### Deadlock
Lock mutexes in a consistent order:

```cpp
std::mutex m1, m2;

// BAD: potential deadlock
// Thread A: lock(m1), lock(m2)
// Thread B: lock(m2), lock(m1)

// GOOD: consistent ordering, or use std::lock
void safe_op() {
    std::lock(m1, m2);         // lock both atomically
    std::lock_guard<std::mutex> lk1(m1, std::adopt_lock);
    std::lock_guard<std::mutex> lk2(m2, std::adopt_lock);
}
```

### Data Race on Reference-Captured Variables
Capturing by reference in a lambda that runs on another thread:

```cpp
int x = 42;
std::thread t([&x] {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cout << x << '\n';   // BUG: x may be destroyed
});
t.detach();
// main may exit before the thread reads x
```

Capture by value or join the thread before exit.

## Concept Comparison Table

| Primitive | Purpose | Key Method | RAII Wrapper |
|-----------|---------|------------|-------------|
| std::thread | Execution context | `join()`, `detach()` | N/A (join in destructor) |
| std::mutex | Mutual exclusion | `lock()`, `unlock()` | std::lock_guard, unique_lock |
| std::condition_variable | Thread coordination | `wait()`, `notify_one()` | unique_lock required |
| std::future | Async result | `get()`, `wait_for()` | N/A |
| std::atomic | Lock-free ops | `load()`, `store()`, `fetch_add()` | N/A |

## Quick Reference

| Situation | Correct Pattern |
|-----------|----------------|
| Protect shared data | `std::mutex m; std::lock_guard<std::mutex> lock(m);` |
| Thread-safe queue | mutex + condition_variable: wait loop with predicate |
| Fire-and-forget task | `std::async(std::launch::async, func)` |
| Get a result later | `auto future = std::async(func); auto result = future.get();` |
| Simple counter | `std::atomic<int> counter{0}; counter.fetch_add(1);` |
| Avoid deadlock | Lock mutexes in consistent order; use std::lock |

## Cross-Application Matrix

| Domain | How Concepts Apply |
|--------|-------------------|
| **Web Servers** | Thread pool processing requests, async for I/O |
| **Game Engines** | Dedicated threads for render, physics, audio, network |
| **Data Processing** | async for parallel map-reduce, future for result collection |
| **GUI Applications** | Background thread for work, future to update UI on completion |
| **Real-time Systems** | Atomics for lock-free metrics, careful mutex discipline |

## Chapter Quiz

1. What must you do with every std::thread before it is destroyed?
   A) Nothing — destructor handles it
   B) Call join() or detach()
   C) Call interrupt()
   D) Call cancel()
   <details><summary>Answer</summary>**B)** If neither join nor detach is called, std::thread's destructor calls std::terminate.</details>

2. What is the correct RAII wrapper for a mutex?
   A) std::mutex_lock
   B) std::lock_guard or std::unique_lock
   C) std::scoped_mutex
   D) std::auto_lock
   <details><summary>Answer</summary>**B)** lock_guard and unique_lock provide RAII lock management.</details>

3. Why must you check the predicate in a loop with condition_variable::wait?
   A) It is optional
   B) Spurious wakeups can occur
   C) The compiler requires it
   D) The mutex is unlocked during wait
   <details><summary>Answer</summary>**B)** Spurious wakeups are allowed — always check the predicate in a loop.</details>

4. std::async with std::launch::async guarantees:
   A) The function runs on the calling thread
   B) A new thread is created
   C) The function is deferred
   D) The function runs asynchronously
   <details><summary>Answer</summary>**B)** std::launch::async forces a new thread to be created.</details>

5. Which of the following is NOT a common concurrency pitfall?
   A) Deadlock
   B) Data race
   C) Virtual function call overhead
   D) False sharing
   <details><summary>Answer</summary>**C)** Virtual function call overhead is not a concurrency-specific issue.</details>

## 15.8 Summary

C++ concurrency primitives provide portable, type-safe access to multi-threaded execution. `std::thread` creates execution contexts, `std::mutex` with `std::lock_guard` protects shared data, `std::condition_variable` coordinates threads, `std::async`/`std::future` manage asynchronous results, and `std::atomic` enables lock-free operations for simple cases. Always follow ordering conventions to avoid deadlocks and data races.

## Exercises

### Review Questions

1. What happens if a `std::thread` is destroyed while still joinable?
2. Why is `std::lock_guard` preferred over manual `lock()`/`unlock()`?
3. How does `std::condition_variable::wait` avoid busy-waiting?
4. What is the difference between `std::async(std::launch::async, ...)` and `std::thread(...)`?
5. What does `memory_order_seq_cst` guarantee compared to `memory_order_relaxed`?

### Application Problems

1. Write a program that computes the sum of a large vector (10 million elements) using four threads dividing the work evenly. Use `std::async` and combine the partial sums. Compare performance against a single-threaded version.
2. Implement a thread-safe queue class that uses `std::mutex` and `std::condition_variable`. Provide `push`, `pop`, `try_pop`, and `size` operations.

### Challenge Problem

3. Implement a simple thread pool. The class `ThreadPool` should accept a number of worker threads, support `enqueue(Func&& f)` that returns a `std::future<ResultType>`, and shut down gracefully when destroyed. Use a `std::vector<std::thread>` for workers, a shared `std::queue<std::packaged_task<void()>>` for tasks, mutex for synchronisation, and a condition variable for thread notification.
