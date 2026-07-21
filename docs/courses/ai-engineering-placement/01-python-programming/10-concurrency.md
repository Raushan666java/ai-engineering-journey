# Concurrency � Threading, Multiprocessing, and Async

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Use threading for I/O-bound concurrent tasks |
| LO2 | Use multiprocessing for CPU-bound parallel execution |
| LO3 | Write async code with asyncio, await, and async def |
| LO4 | Understand the GIL and its impact on concurrency |
| LO5 | Synchronize shared state with locks, events, and queues |
| LO6 | Choose the right concurrency model for the task |

## Introduction

Understanding concurrency is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering concurrency.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | Threading Basics | Thread, start, join, daemon |
| 10.2 | Thread Synchronization | Lock, RLock, Semaphore, Queue |
| 10.3 | Multiprocessing | Process, Pool, shared memory |
| 10.4 | GIL Explained | Global Interpreter Lock limits |
| 10.5 | asyncio | async/await, event loop, tasks |
| 10.6 | Choosing a Model | I/O-bound vs CPU-bound comparison |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Concurrency] --> B[Threading: I/O bound]
    A --> C[Multiprocessing: CPU bound]
    A --> D[asyncio: async I/O]
    B --> E[Lock/Queue sync]
    C --> F[Pool/Process]
    D --> G[async/await event loop]
    H[GIL] -.-> B
    H -.-> D
```text

## 10.1 Threading Basics

`python
import threading
import time

def worker(name: str, delay: float):
    print(f"{name} starting")
    time.sleep(delay)
    print(f"{name} finished")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(f"Thread-{i}", i))
    threads.append(t)
    t.start()

for t in threads:
    t.join()  # wait for completion

print("All threads done")
`

**ThreadPoolExecutor**:

`python
from concurrent.futures import ThreadPoolExecutor
import requests

def fetch_url(url: str) -> str:
    response = requests.get(url)
    return f"{url}: {response.status_code}"

urls = ["https://python.org", "https://github.com", "https://example.com"]

with ThreadPoolExecutor(max_workers=5) as executor:
    results = executor.map(fetch_url, urls)

for result in results:
    print(result)
`

## 10.2 Thread Synchronization

`python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:  # acquire/release automatically
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)  # 1,000,000 (correct with lock)

## Queue � thread-safe producer/consumer
from queue import Queue

def producer(q, n):
    for i in range(n):
        q.put(f"item-{i}")
    q.put(None)  # sentinel

def consumer(q):
    while True:
        item = q.get()
        if item is None:
            break
        print(f"Consumed {item}")

q = Queue()
threading.Thread(target=producer, args=(q, 5)).start()
threading.Thread(target=consumer, args=(q)).start()
`

## 10.3 Multiprocessing

`python
import multiprocessing as mp

def square(n: int) -> int:
    return n * n

if __name__ == "__main__":
    with mp.Pool(processes=4) as pool:
        results = pool.map(square, range(10))
        print(results)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

    # Process class
    def worker(name):
        print(f"Process {name} running")

    processes = [mp.Process(target=worker, args=(i,)) for i in range(3)]
    for p in processes: p.start()
    for p in processes: p.join()
`

**Shared memory**:

`python
import multiprocessing as mp

def worker(ns, arr):
    ns.value += 1
    arr[0] = 99

if __name__ == "__main__":
    mgr = mp.Manager()
    ns = mgr.Namespace()
    ns.value = 0
    arr = mgr.Array("i", [0, 0, 0])

    p = mp.Process(target=worker, args=(ns, arr))
    p.start()
    p.join()
    print(ns.value, list(arr))  # 1, [99, 0, 0]
`

## 10.4 GIL Explained

The Global Interpreter Lock (GIL) is a mutex in CPython that prevents multiple threads from executing Python bytecode simultaneously.

`python
## GIL demonstration
import threading
import time

def count(n: int):
    while n > 0:
        n -= 1

## CPU-bound � threading is NO faster than sequential (GIL)
start = time.time()
count(50_000_000)
count(50_000_000)
print(f"Sequential: {time.time() - start:.2f}s")

start = time.time()
t1 = threading.Thread(target=count, args=(50_000_000,))
t2 = threading.Thread(target=count, args=(50_000_000,))
t1.start(); t2.start()
t1.join(); t2.join()
print(f"Threaded: {time.time() - start:.2f}s")
## Both ~same time due to GIL

## I/O-bound � threading helps (GIL released during I/O)
def io_task():
    time.sleep(1)  # simulated I/O

start = time.time()
threads = [threading.Thread(target=io_task) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(f"Threaded I/O: {time.time() - start:.2f}s")  # ~1s

start = time.time()
for _ in range(10): io_task()
print(f"Sequential I/O: {time.time() - start:.2f}s")  # ~10s
`

## 10.5 asyncio

`python
import asyncio

async def fetch_data(name: str, delay: float):
    print(f"Fetching {name}...")
    await asyncio.sleep(delay)  # non-blocking
    print(f"Got {name}")
    return f"data-{name}"

async def main():
    # Sequential
    result1 = await fetch_data("A", 2)
    result2 = await fetch_data("B", 1)
    print(result1, result2)  # ~3s total

    # Concurrent
    task1 = asyncio.create_task(fetch_data("C", 2))
    task2 = asyncio.create_task(fetch_data("D", 1))
    results = await asyncio.gather(task1, task2)
    print(results)  # ~2s total (overlap)

asyncio.run(main())
`

**Async HTTP requests**:

`python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [
            fetch_url(session, "https://python.org"),
            fetch_url(session, "https://github.com"),
        ]
        pages = await asyncio.gather(*tasks)
        print(f"Fetched {len(pages)} pages")

asyncio.run(main())
`

## 10.6 Choosing the Right Model

| Aspect | Threading | Multiprocessing | asyncio |
|--------|-----------|-----------------|---------|
| Best for | I/O-bound | CPU-bound | I/O-bound |
| GIL | Affected (I/O releases) | Not affected (separate processes) | Not affected (single-threaded) |
| Memory | Shared (same process) | Separate (each process) | Shared |
| Overhead | Low | High | Very low |
| Debugging | Harder (race conditions) | Easier (isolated) | Easier (deterministic) |
| Python model | OS threads | OS processes | Single-thread coroutines |

`python
## Decision flowchart
def choose_model(task_type: str, num_items: int):
    if task_type == "CPU":
        return "multiprocessing.Pool"
    elif num_items > 1000:
        return "asyncio"  # thousands of concurrent connections
    else:
        return "threading.ThreadPoolExecutor"
`

## TypeScript Parallel

`	ypescript
// TypeScript � single-threaded async/await
async function fetchData(name: string, delay: number): Promise<string> {
    console.log(Fetching ...);
    await new Promise(resolve => setTimeout(resolve, delay * 1000));
    return data-;
}

async function main() {
    const [a, b] = await Promise.all([
        fetchData("A", 2),
        fetchData("B", 1),
    ]);
    console.log(a, b);

    // Web Workers for CPU parallelism
    const worker = new Worker("worker.js");
    worker.postMessage("start");
}
`

## Summary

- Threading is for I/O-bound tasks (network, disk) � benefits despite GIL
- Multiprocessing is for CPU-bound tasks � bypasses GIL with separate processes
- GIL prevents true parallel execution of Python bytecode in threads
- Use Locks, RLocks, and Queues for thread-safe shared state
- asyncio provides single-threaded concurrency with async/await
- asyncio is excellent for thousands of concurrent I/O operations
- ThreadPoolExecutor and ProcessPoolExecutor for managing thread/process pools
- await releases control back to the event loop, enabling concurrency
- async functions are coroutines � they run cooperatively on one thread
- Choose based on: CPU-bound ? multiprocessing, I/O-bound with many connections ? asyncio, I/O-bound with moderate load ? threading

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| CPU computation | multiprocessing.Pool | threading (GIL limited) |
| Many network requests | asyncio + aiohttp | threading (higher overhead) |
| File I/O | asyncio or ThreadPoolExecutor | Manual thread management |
| Shared counter | threading.Lock | No synchronization |
| Producer/consumer | queue.Queue | Shared list without lock |
| Task scheduling | asyncio.create_task | Manual event loop management |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s10-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the GIL and how does it affect Python?</summary>
  <div class="tp-qa-answer"><p>The GIL (Global Interpreter Lock) is a mutex that prevents multiple threads from executing Python bytecode at once in CPython. It makes CPU-bound threading no faster than sequential code. I/O-bound threads benefit because the GIL is released during blocking I/O operations. Multiprocessing bypasses the GIL by using separate processes.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: When would you use threading vs asyncio?</summary>
  <div class="tp-qa-answer"><p>Threading: OS-managed preemptive multitasking, good for integrating blocking libraries, moderate number of tasks. asyncio: cooperative single-threaded multitasking, excellent for thousands of concurrent tasks, requires async-compatible libraries. asyncio has lower overhead and more control but requires async code throughout.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: How do you share data between processes?</summary>
  <div class="tp-qa-answer"><p>Use multiprocessing.Manager() for Namespaces, dicts, lists. Use multiprocessing.Queue for producer/consumer. Use shared memory with multiprocessing.Value and multiprocessing.Array. For complex data, serialize with pickle through Queue.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What is the difference between a Thread and a Process?</summary>
  <div class="tp-qa-answer"><p>Threads share the same memory space (within one process) and can communicate via shared variables (with synchronization). Processes have separate memory, are isolated, and use IPC (queues, pipes). Processes are heavier to create but provide true parallelism and crash isolation.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: How does async/await work in Python?</summary>
  <div class="tp-qa-answer"><p>async def defines a coroutine. await suspends the coroutine until the awaited awaitable completes. The event loop (asyncio.run) schedules and runs coroutines cooperatively. When a coroutine hits await, the event loop switches to another ready coroutine. asyncio.sleep() simulates async I/O by yielding control.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: What is a race condition?</summary>
  <div class="tp-qa-answer"><p>A race condition occurs when multiple threads access shared data without synchronization, and the result depends on the non-deterministic order of execution. Example: two threads incrementing a counter without a lock may lose updates. Solved with Lock, RLock, or thread-safe data structures like Queue.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is a deadlock and how to avoid it?</summary>
  <div class="tp-qa-answer"><p>A deadlock occurs when two threads each hold a lock the other needs, causing both to wait forever. Avoid by: consistent lock ordering, using timeout-based lock acquisition (lock.acquire(timeout=5)), using RLock (reentrant, same thread can re-acquire), or using higher-level constructs like Queue.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How does ThreadPoolExecutor differ from manual threading?</summary>
  <div class="tp-qa-answer"><p>ThreadPoolExecutor manages a pool of reusable threads, handles queuing, and provides a clean API with .submit() and .map(). Manual threading requires creating, starting, joining each thread individually. The executor reduces overhead, prevents thread proliferation, and simplifies error handling with futures.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: When would you use ProcessPoolExecutor?</summary>
  <div class="tp-qa-answer"><p>Use ProcessPoolExecutor for CPU-bound tasks that benefit from parallelism: heavy numerical computation, image processing, ML model training over many configurations. Uses multiprocessing.Pool internally. Data is serialized with pickle, so ensure arguments are picklable. Overhead of process creation is higher than threads.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s10-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Can asyncio and threading be used together?</summary>
  <div class="tp-qa-answer"><p>Yes. Use loop.run_in_executor() to run blocking code in a thread pool from asyncio. This bridges synchronous and async code. Similarly, asyncio.run_coroutine_threadsafe() schedules a coroutine from a thread. Common pattern: async web server that offloads CPU tasks to a thread/process pool.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which concurrency model bypasses the GIL? a) threading b) multiprocessing c) asyncio d) all

<details class="tp-qa-card" data-qid="p02-s10-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) multiprocessing</strong></p></div></details>

**Q2**: What does await do? a) creates thread b) suspends coroutine c) blocks thread d) starts process

<details class="tp-qa-card" data-qid="p02-s10-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) suspends coroutine yielding control to event loop</strong></p></div></details>

**Q3**: Which sync primitive is reentrant? a) Lock b) RLock c) Semaphore d) Event

<details class="tp-qa-card" data-qid="p02-s10-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) RLock</strong></p></div></details>

**Q4**: What does queue.Queue provide? a) thread-safe FIFO b) async queue c) process-safe d) lock-free

<details class="tp-qa-card" data-qid="p02-s10-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) thread-safe FIFO queue</strong></p></div></details>

**Q5**: Best for 10000 concurrent HTTP requests? a) threading b) multiprocessing c) asyncio d) sequential

<details class="tp-qa-card" data-qid="p02-s10-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) asyncio with aiohttp for high concurrency</strong></p></div></details>

## Exercises

**Easy** � Write a threaded program that downloads 5 URLs concurrently using requests and ThreadPoolExecutor.

**Easy** � Use asyncio to run 3 async tasks with different delays using asyncio.gather.

**Medium** � Implement a thread-safe producer/consumer pattern using queue.Queue that passes 10 items.

**Medium** � Write a multiprocessing script that computes the sum of squares for numbers 1-10,000,000 using Pool, comparing with single-process time.

**Hard** � Implement a simple async HTTP server using asyncio that handles GET requests and returns JSON responses.

**Hard** � Create a hybrid program: asyncio event loop that offloads CPU-heavy tasks to a ProcessPoolExecutor using loop.run_in_executor.

## 10.7 Concurrent Futures Advanced

`python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, as_completed, wait, FIRST_COMPLETED
import time

## As completed - process results as they finish
def fetch_url(url: str) -> str:
    time.sleep(len(url) * 0.1)  # simulate network delay
    return f"Result from {url}"

urls = ["short", "medium_length", "a_very_long_url_name"]
with ThreadPoolExecutor(max_workers=3) as executor:
    futures = {executor.submit(fetch_url, url): url for url in urls}
    for future in as_completed(futures):
        url = futures[future]
        try:
            result = future.result()
            print(f"Completed: {url} -> {result}")
        except Exception as e:
            print(f"Failed: {url} -> {e}")

## Wait with timeout
futures = [executor.submit(time.sleep, t) for t in [1, 2, 3]]
done, not_done = wait(futures, timeout=2.0, return_when=FIRST_COMPLETED)
print(f"Done: {len(done)}, Not done: {len(not_done)}")

## Callbacks on future completion
def on_done(future):
    print(f"Callback: {future.result()}")

future = executor.submit(fetch_url, "test")
future.add_done_callback(on_done)

## Future chaining
def compute_heavy(n: int) -> int:
    return sum(i * i for i in range(n))

with ProcessPoolExecutor() as executor:
    future = executor.submit(compute_heavy, 10_000_000)
    result = future.result(timeout=30)
    print(f"Computed: {result}")
`

## 10.8 Advanced asyncio Patterns

`python
import asyncio
import time

## Semaphore for rate limiting
async def fetch_with_limit(sem, url):
    async with sem:
        print(f"Fetching {url}")
        await asyncio.sleep(1)
        return f"Data from {url}"

async def rate_limited_fetcher():
    sem = asyncio.Semaphore(3)  # max 3 concurrent
    urls = [f"url-{i}" for i in range(10)]
    tasks = [fetch_with_limit(sem, url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

## asyncio.Queue for producer/consumer
async def producer(queue, n):
    for i in range(n):
        await queue.put(f"item-{i}")
        await asyncio.sleep(0.1)
    await queue.put(None)  # sentinel

async def consumer(queue, name):
    while True:
        item = await queue.get()
        if item is None:
            queue.task_done()
            break
        print(f"{name} processed {item}")
        await asyncio.sleep(0.2)
        queue.task_done()

async def queue_demo():
    q = asyncio.Queue()
    producers = [asyncio.create_task(producer(q, 5))]
    consumers = [asyncio.create_task(consumer(q, f"Worker-{i}")) for i in range(2)]
    await asyncio.gather(*producers)
    await q.join()
    for c in consumers:
        c.cancel()

## asyncio with timeout
async def slow_operation():
    await asyncio.sleep(10)
    return "Done"

async def with_timeout():
    try:
        result = await asyncio.wait_for(slow_operation(), timeout=2.0)
    except asyncio.TimeoutError:
        print("Operation timed out after 2 seconds")

## Task cancellation
async def cancellable_work():
    try:
        while True:
            await asyncio.sleep(0.5)
            print("Working...")
    except asyncio.CancelledError:
        print("Work cancelled")
        raise

async def cancel_demo():
    task = asyncio.create_task(cancellable_work())
    await asyncio.sleep(2)
    task.cancel()
    try:
        await task
    except asyncio.CancelledError:
        print("Task cancelled successfully")
`

## 10.9 Synchronization Primitives

`python
import threading
import time

## RLock - reentrant lock (same thread can acquire multiple times)
lock = threading.RLock()
def recursive_lock(n):
    with lock:
        if n > 0:
            print(f"Level {n}")
            recursive_lock(n - 1)

recursive_lock(3)  # works with RLock, would deadlock with Lock

## Event - signaling between threads
event = threading.Event()

def waiter(event):
    print("Waiting for event...")
    event.wait()
    print("Event received!")

def setter(event):
    time.sleep(1)
    print("Setting event")
    event.set()

t1 = threading.Thread(target=waiter, args=(event,))
t2 = threading.Thread(target=setter, args=(event,))
t1.start(); t2.start()
t1.join(); t2.join()

## Condition variable - complex signaling
cv = threading.Condition()
items = []

def producer(cv, items):
    with cv:
        for i in range(5):
            items.append(f"item-{i}")
            cv.notify()  # wake up consumer
            time.sleep(0.1)

def consumer(cv, items):
    with cv:
        while not items:
            cv.wait()  # wait for producer
        print(f"Got {items.pop(0)}")

## Barrier - synchronize n threads at a point
barrier = threading.Barrier(3)

def worker(barrier, name):
    print(f"{name} waiting at barrier")
    barrier.wait()
    print(f"{name} passed barrier")

threads = [threading.Thread(target=worker, args=(barrier, f"W-{i}")) for i in range(3)]
for t in threads: t.start()
for t in threads: t.join()
`

## 10.10 Common Pitfalls

`python
## Pitfall 1: Not joining threads before exit
t = threading.Thread(target=lambda: time.sleep(1))
t.start()
## t.join()  # MISSING - program may exit before thread completes
## Daemon threads: t.daemon = True (killed when main exits)

## Pitfall 2: Race conditions without locks
counter = 0
def increment_bad():
    global counter
    for _ in range(100000):
        counter += 1  # NOT atomic!

## Pitfall 3: Deadlock with multiple locks
lock1 = threading.Lock()
lock2 = threading.Lock()

def thread_a():
    with lock1:
        time.sleep(0.1)
        with lock2: pass  # might deadlock with thread_b

def thread_b():
    with lock2:
        time.sleep(0.1)
        with lock1: pass  # might deadlock with thread_a

## Solution: consistent lock ordering

## Pitfall 4: Forgetting if __name__ == "__main__" in multiprocessing
## Multiprocessing on Windows re-imports the module
## All process-creating code must be guarded

## Pitfall 5: Mixing asyncio and blocking code
import asyncio
import requests

async def bad():
    response = requests.get("https://python.org")  # BLOCKS event loop!
    return response

## Solution: use asyncio.to_thread() or aiohttp

## Pitfall 6: Shared mutable state across processes
## Processes don't share memory - use Manager() or Queue()
`

## 10.11 Real-World Concurrency Patterns

`python
## Thread pool for web scraping
def scrape_url(url: str) -> dict:
    import requests
    response = requests.get(url, timeout=10)
    return {"url": url, "status": response.status_code, "size": len(response.content)}

urls = ["https://python.org", "https://github.com", "https://stackoverflow.com"] * 10

with ThreadPoolExecutor(max_workers=10) as pool:
    results = list(pool.map(scrape_url, urls))
print(f"Scraped {len(results)} URLs")

## asyncio web server (minimal)
async def handle_request(reader, writer):
    data = await reader.read(100)
    message = data.decode()
    response = f"Echo: {message}"
    writer.write(response.encode())
    await writer.drain()
    writer.close()

async def run_server():
    server = await asyncio.start_server(handle_request, "127.0.0.1", 8888)
    async with server:
        await server.serve_forever()

## Multiprocessing for CPU-bound tasks
def is_prime(n: int) -> bool:
    if n < 2: return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0: return False
    return True

numbers = [15485863, 15485867, 15485869, 15485917, 15485923]
with ProcessPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(is_prime, numbers))
print(f"Prime results: {results}")
`

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 01-python-programming
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 01-python-programming. When would you choose one approach over another?
2. Design a system that efficiently handles 01-python-programming at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 01-python-programming. What was your approach and what was the result?
2. How would you explain 01-python-programming to a non-technical stakeholder?

#### Microsoft Style
1. How does 01-python-programming integrate with enterprise systems and cloud architectures?
2. What are the security implications of 01-python-programming?

#### NVIDIA Style
1. How would you optimize 01-python-programming for GPU-accelerated computing?
2. What parallel processing patterns apply to 01-python-programming?

#### AI Startup Style
1. How would you implement 01-python-programming in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 01-python-programming?

### Resume Tips
- **Technical Skills**: List 01-python-programming under relevant technical skills
- **Project Description**: "Implemented 01-python-programming to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 01-python-programming in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 01-python-programming
- [ ] Practice 3-5 problems related to 01-python-programming
- [ ] Prepare 2 real-world examples of using 01-python-programming
- [ ] Know the time/space complexity of common 01-python-programming operations
- [ ] Have questions ready about how the company uses 01-python-programming> **Next**: [11 � NumPy Fundamentals ?](11-numpy-fundamentals.md)
