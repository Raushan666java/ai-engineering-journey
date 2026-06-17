# Chapter 15: Concurrency

## Learning Objectives

After studying this chapter, students will be able to:

- Create and manage threads with `std::thread`
- Protect shared data with `std::mutex` and `std::lock_guard`
- Coordinate threads using `std::condition_variable`
- Launch asynchronous tasks with `std::async` and `std::future`
- Use `std::atomic` for lock-free operations

## 15.1 The Concurrency Landscape

![Concurrency Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/oop-cpp/15-concurrency.png)

Modern hardware provides multiple cores that execute threads in parallel. C++11 introduced a portable threading library. Two fundamental issues arise:

1. **Data races**: multiple threads access the same memory location without synchronisation
2. **Deadlocks**: threads block waiting for each other's resources

The C++ memory model guarantees that well-defined concurrent programs behave predictably across all architectures.

## 15.2 std::thread

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
- `join()` — blocks until the thread completes
- `detach()` — allows the thread to run independently (careful: detached threads outlive the creating scope)
- `joinable()` — checks if `join` or `detach` is valid

A thread must be joined or detached before destruction, or `std::terminate` is called.

## 15.3 Mutex and Lock Guard

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
- `std::recursive_mutex` — same thread can lock multiple times
- `std::timed_mutex` — supports `try_lock_for` and `try_lock_until`
- `std::shared_mutex` (C++17) — multiple readers, exclusive writer

## 15.4 std::condition_variable

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
- `std::launch::async` — run on a new thread
- `std::launch::deferred` — run on `get()` call, lazily
- Default (`std::launch::async | std::launch::deferred`) — implementation chooses

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
- `load()` — read the value
- `store()` — write the value
- `exchange()` — replace and return old value
- `fetch_add()`, `fetch_sub()` — atomic arithmetic
- `compare_exchange_weak()`, `compare_exchange_strong()` — CAS

Memory ordering specifies visibility constraints:
- `memory_order_relaxed` — no ordering guarantees (fastest)
- `memory_order_acquire` — subsequent reads see prior writes
- `memory_order_release` — prior writes become visible to acquire
- `memory_order_seq_cst` — sequential consistency (default, safest)

## 15.7 Avoiding Common Pitfalls

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
