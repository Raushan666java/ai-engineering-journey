---
slug: /python-programming/21-concurrency-multiprocessing
title: "Chapter 21: Concurrency, Multiprocessing & Parallelism"
sidebar_label: "Chapter 21: Concurrency, Multiprocessing & Parallelism"
sidebar_position: 21
---
# Chapter 21: Concurrency, Multiprocessing & Parallelism


> **Previous:** [NumPy and pandas](./20-numpy-pandas.md) | **Next:** None
## Learning Objectives

After completing this chapter, you will be able to:
- Understand the Python GIL and its impact on different workload types
- Use threading for I/O-bound tasks safely
- Use multiprocessing for CPU-bound tasks efficiently
- Choose between concurrent.futures, multiprocessing, and joblib
- Parallelize ML workflows: hyperparameter tuning, batch inference, ensemble evaluation
- Avoid shared-state pitfalls and serialization bottlenecks

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


![Concurrency and Multiprocessing](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/21-concurrency-multiprocessing.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|21.1 The GIL Problem||The GIL prevents multiple threads from executing Python bytecode simultaneously on one core.|
|21.2 Threading for I/O-bound Work||Threading works for I/O-bound tasks; multiprocessing is needed for CPU-bound work in pure Python.|
|21.3 Multiprocessing for CPU-bound Work||`concurrent.futures` provides a uniform API: `ThreadPoolExecutor` and `ProcessPoolExecutor`.|
|21.4 concurrent.futures High-Level API||joblib is optimised for ML parallelism with transparent batching and memmap for large arrays.|
|21.5 joblib for ML Parallelism||NumPy releases the GIL for C-level operations; BLAS environment variables control CPU threading.|
|21.6 Shared Memory vs Serialization||undefined|
|21.7 NumPy/Pandas Parallelism||undefined|
|21.8 Practical ML Patterns||undefined|
|21.9 AsyncIO vs Threading vs Multiprocessing||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[The GIL Problem]
    S1[Threading for I/O-bound Work]
    S2[Multiprocessing for CPU-bound Work]
    S3[concurrent.futures High-Level API]
    S4[joblib for ML Parallelism]
    S5[Shared Memory vs Serialization]
    S6[NumPy/Pandas Parallelism]
    S7[Practical ML Patterns]
    S8[AsyncIO vs Threading vs Multiprocessing]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
```
## 21.1 The GIL Problem

> **One-Sentence Takeaway:** The GIL prevents multiple threads from executing Python bytecode simultaneously on one core.


The Global Interpreter Lock (GIL) is a mutex in CPython that prevents multiple threads from executing Python bytecode simultaneously. It exists because CPython's memory management (reference counting) is not thread-safe.

```python
import sys
print(sys._is_gil_enabled())  # True on CPython
```

### 21.1.1 Why the GIL Exists


Every Python object has a reference count. Without the GIL, two threads incrementing/decrementing counts simultaneously would corrupt memory. The GIL guarantees that only one thread runs Python code at a time.

```python
import threading

counter = 0

def increment():
    global counter
    for _ in range(1_000_000):
        counter += 1  # Actually 4 bytecode operations: LOAD, LOAD, ADD, STORE

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)  # Almost never 10_000_000 due to GIL interleaving
```

The GIL ensures safe memory access by serializing bytecode execution. The trade-off is that pure Python CPU-bound code can never use more than one core.

### 21.1.2 I/O-bound vs CPU-bound


```python
import time

def cpu_bound(n):
    """Heavy computation -- GIL limits this to 1 core."""
    return sum(i * i for i in range(n))

def io_bound():
    """Waiting on I/O -- GIL is released during sleep/blocking calls."""
    time.sleep(1)

# I/O-bound: threading helps (GIL released during blocking I/O)
# CPU-bound: threading hurts (contention adds overhead)
```

Many blocking operations release the GIL internally: time.sleep(), read/write on sockets, file I/O, database drivers, NumPy C extensions.

## 21.2 Threading for I/O-bound Work

> **One-Sentence Takeaway:** Threading works for I/O-bound tasks; multiprocessing is needed for CPU-bound work in pure Python.


Threading excels when the program spends most of its time waiting on external resources.

### 21.2.1 ThreadPoolExecutor


```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import urllib.request

urls = [
    "https://api.example.com/data/1",
    "https://api.example.com/data/2",
    "https://api.example.com/data/3",
]

def fetch(url: str) -> tuple[str, int]:
    with urllib.request.urlopen(url, timeout=5) as resp:
        return url, resp.status

with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(fetch, url): url for url in urls}
    for future in as_completed(futures):
        url, status = future.result()
        print(f"{url}: {status}")
```

### 21.2.2 Thread Safety with Locks


```python
import threading

class SafeCounter:
    def __init__(self):
        self._value = 0
        self._lock = threading.Lock()

    def increment(self) -> int:
        with self._lock:
            self._value += 1
            return self._value

    @property
    def value(self) -> int:
        with self._lock:
            return self._value

counter = SafeCounter()

def worker(n):
    for _ in range(n):
        counter.increment()

threads = [threading.Thread(target=worker, args=(1_000,)) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
assert counter.value == 10_000
```

### 21.2.3 Queue-Based Worker Pattern


```python
import queue
import threading
import time

def producer(q: queue.Queue, n: int):
    for i in range(n):
        q.put(f"task-{i}")
        time.sleep(0.01)
    q.put(None)  # Sentinel

def consumer(q: queue.Queue, results: list):
    while True:
        item = q.get()
        if item is None:
            q.task_done()
            break
        results.append(f"processed-{item}")
        q.task_done()

q = queue.Queue(maxsize=20)
results = []
threads = [
    threading.Thread(target=producer, args=(q, 50)),
    threading.Thread(target=consumer, args=(q, results)),
    threading.Thread(target=consumer, args=(q, results)),
]
for t in threads: t.start()
for t in threads: t.join()
assert len(results) == 50
```

## 21.3 Multiprocessing for CPU-bound Work

> **One-Sentence Takeaway:** `concurrent.futures` provides a uniform API: `ThreadPoolExecutor` and `ProcessPoolExecutor`.


Multiprocessing bypasses the GIL by spawning separate Python processes, each with its own interpreter and memory space.

### 21.3.1 ProcessPoolExecutor


```python
from concurrent.futures import ProcessPoolExecutor
import math

def is_prime(n: int) -> bool:
    if n < 2:
        return False
    for i in range(2, int(math.isqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

numbers = [104395301, 104395303, 104395309, 104395313, 104395337]

with ProcessPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(is_prime, numbers))

for n, prime in zip(numbers, results):
    print(f"{n}: {'prime' if prime else 'composite'}")
```

### 21.3.2 Manual Process Pool with Pool


```python
from multiprocessing import Pool, cpu_count
import time

def compute(x: float) -> float:
    for _ in range(10_000_000):
        x = (x * 1.0001) - 0.0001
    return x

values = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]

start = time.perf_counter()
with Pool(processes=cpu_count()) as pool:
    results = pool.map(compute, values)
elapsed = time.perf_counter() - start
print(f"{cpu_count()} cores: {elapsed:.2f}s")
```

### 21.3.3 When to Use Pool.map vs Pool.starmap vs Pool.imap


```python
from multiprocessing import Pool

# pool.map: single iterable
def square(x): return x * x
with Pool() as p:
    print(p.map(square, [1, 2, 3, 4]))

# pool.starmap: multiple arguments per call
def add(a, b, c): return a + b + c
with Pool() as p:
    print(p.starmap(add, [(1, 2, 3), (4, 5, 6)]))

# pool.imap: lazy iterator (memory efficient)
with Pool() as p:
    for result in p.imap(square, range(1000), chunksize=100):
        pass
```

## 21.4 concurrent.futures High-Level API

> **One-Sentence Takeaway:** joblib is optimised for ML parallelism with transparent batching and memmap for large arrays.


The concurrent.futures module provides a uniform interface for both threading and multiprocessing.

### 21.4.1 Choosing the Right Executor


```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, Future
import time

def io_task(url: str) -> str:
    time.sleep(1)  # Simulate HTTP request
    return f"fetched {url}"

def cpu_task(n: int) -> int:
    return sum(i * i for i in range(n))

# ThreadPoolExecutor for I/O-bound
with ThreadPoolExecutor(max_workers=5) as ex:
    futures = [ex.submit(io_task, f"url-{i}") for i in range(5)]
    for f in futures:
        print(f.result())

# ProcessPoolExecutor for CPU-bound
with ProcessPoolExecutor(max_workers=4) as ex:
    futures = [ex.submit(cpu_task, 5_000_000) for i in range(4)]
    for f in futures:
        print(f.result())
```

### 21.4.2 Callbacks and Timeouts


```python
from concurrent.futures import ThreadPoolExecutor, TimeoutError

def slow_task(n: int) -> int:
    import time
    time.sleep(n)
    return n

with ThreadPoolExecutor() as ex:
    future = ex.submit(slow_task, 5)
    try:
        result = future.result(timeout=2)
    except TimeoutError:
        print("Task timed out, cancelling...")
        cancelled = future.cancel()
        print(f"Cancelled: {cancelled}")
```

### 21.4.3 Exception Handling


```python
from concurrent.futures import ThreadPoolExecutor

def risky_division(x: float, y: float) -> float:
    if y == 0:
        raise ValueError("Division by zero")
    return x / y

with ThreadPoolExecutor() as ex:
    futures = [ex.submit(risky_division, 10, i) for i in [2, 0, 5]]
    for f in futures:
        try:
            print(f.result())
        except ValueError as e:
            print(f"Error: {e}")
```

## 21.5 joblib for ML Parallelism

> **One-Sentence Takeaway:** NumPy releases the GIL for C-level operations; BLAS environment variables control CPU threading.


joblib is the standard parallelism library in the scikit-learn ecosystem. It handles transparent process pooling, efficient data serialization (memmap), and caching.

### 21.5.1 Parallel and delayed


```python
from joblib import Parallel, delayed
import time

def train_model(params: dict) -> dict:
    time.sleep(1)  # Simulated training
    return {"params": params, "score": 0.95}

param_grid = [
    {"lr": 0.01, "depth": 3},
    {"lr": 0.01, "depth": 5},
    {"lr": 0.001, "depth": 3},
    {"lr": 0.001, "depth": 5},
]

results = Parallel(n_jobs=-1, verbose=10)(
    delayed(train_model)(params) for params in param_grid
)

for r in results:
    print(f"{r['params']} -> score: {r['score']}")
```

### 21.5.2 Automatic Batching


joblib automatically batches tasks for efficiency. The batch_size parameter controls how many tasks are sent to each worker at once.

```python
from joblib import Parallel, delayed

# Small tasks: larger batches reduce serialization overhead
def process_row(row: int) -> int:
    return row * row

results = Parallel(n_jobs=4, batch_size=100)(
    delayed(process_row)(i) for i in range(10_000)
)
```

### 21.5.3 Memory Mapping for Large Arrays


```python
import numpy as np
from joblib import Parallel, delayed, dump, load

# Create a large array and memory-map it
big_data = np.random.rand(100_000, 100)
dump(big_data, "big_data.npy")
big_data_mmap = load("big_data.npy", mmap_mode="r")

def process_chunk(start: int, end: int) -> float:
    chunk = big_data_mmap[start:end]
    return chunk.mean()

chunk_size = 10_000
chunks = [(i, i + chunk_size) for i in range(0, 100_000, chunk_size)]

results = Parallel(n_jobs=4)(delayed(process_chunk)(s, e) for s, e in chunks)
print(f"Global mean: {np.mean(results):.4f}")
```

## 21.6 Shared Memory vs Serialization

> **One-Sentence Takeaway:** undefined


### 21.6.1 multiprocessing.shared_memory (Python 3.8+)


```python
from multiprocessing import shared_memory, Process
import numpy as np

def worker(shm_name: str, shape: tuple, dtype: type):
    shm = shared_memory.SharedMemory(name=shm_name)
    arr = np.ndarray(shape, dtype=dtype, buffer=shm.buf)
    arr[:] = arr * 2
    shm.close()

arr = np.array([1, 2, 3, 4, 5], dtype=np.float64)
shm = shared_memory.SharedMemory(create=True, size=arr.nbytes)
shared_arr = np.ndarray(arr.shape, dtype=arr.dtype, buffer=shm.buf)
shared_arr[:] = arr[:]

p = Process(target=worker, args=(shm.name, arr.shape, arr.dtype))
p.start()
p.join()

print(shared_arr)  # [2, 4, 6, 8, 10]
shm.close()
shm.unlink()
```

### 21.6.2 Serialization Overhead


```python
import pickle
import numpy as np
from time import perf_counter

# Pickle serialization is expensive for large objects
big_dict = {str(i): np.random.rand(1000) for i in range(1000)}

start = perf_counter()
data = pickle.dumps(big_dict)
deserialized = pickle.loads(data)
print(f"Serialization: {perf_counter() - start:.2f}s, size: {len(data) / 1e6:.1f}MB")
```

Each call to ProcessPoolExecutor.map serializes arguments and return values via pickle. This is why small, frequent tasks are inefficient -- the serialization overhead dominates.

## 21.7 NumPy/Pandas Parallelism

> **One-Sentence Takeaway:** undefined


NumPy and many pandas operations release the GIL because they are implemented in C. This means they can benefit from threading -- but only if the underlying BLAS library is multi-threaded.

### 21.7.1 BLAS Threading


```python
import os
os.environ["OMP_NUM_THREADS"] = "4"
os.environ["MKL_NUM_THREADS"] = "4"
os.environ["OPENBLAS_NUM_THREADS"] = "4"

import numpy as np

# Matrix multiplication uses multi-threaded BLAS automatically
a = np.random.rand(2000, 2000)
b = np.random.rand(2000, 2000)
c = a @ b  # Uses multiple cores internally
```

### 21.7.2 Pandas Groupby with Parallel Backend


```python
import pandas as pd
import numpy as np
from multiprocessing import cpu_count

def parallel_groupby(df: pd.DataFrame, by: str, func: str, column: str) -> pd.Series:
    groups = [group for _, group in df.groupby(by)]
    from concurrent.futures import ProcessPoolExecutor
    with ProcessPoolExecutor(max_workers=cpu_count()) as ex:
        results = list(ex.map(lambda g: getattr(g[column], func)(), groups))
    return pd.Series(results, index=df[by].unique())

df = pd.DataFrame({
    "group": np.random.choice(list("ABCDEFGH"), 100_000),
    "value": np.random.rand(100_000),
})

result = parallel_groupby(df, "group", "mean", "value")
print(result)
```

## 21.8 Practical ML Patterns

> **One-Sentence Takeaway:** undefined


### 21.8.1 Hyperparameter Tuning with Grid Search


```python
from joblib import Parallel, delayed
from sklearn.base import BaseEstimator
import numpy as np
import time

class DummyModel(BaseEstimator):
    def __init__(self, lr=0.01, depth=3):
        self.lr = lr
        self.depth = depth
    def fit(self, X, y):
        time.sleep(0.5)
        self.score_ = np.random.rand()
        return self
    def score(self, X, y):
        return self.score_

def evaluate(params: dict, X, y) -> dict:
    model = DummyModel(**params)
    model.fit(X, y)
    return {**params, "score": model.score(X, y)}

X = np.random.rand(100, 10)
y = np.random.randint(0, 2, 100)

param_grid = [
    {"lr": lr, "depth": d}
    for lr in [0.001, 0.01, 0.1]
    for d in [3, 5, 7, 10]
]

results = Parallel(n_jobs=-1, verbose=5)(
    delayed(evaluate)(params, X, y) for params in param_grid
)

best = max(results, key=lambda r: r["score"])
print(f"Best: {best}")
```

### 21.8.2 Batch Inference


```python
import numpy as np
from joblib import Parallel, delayed

class Model:
    def predict(self, batch: np.ndarray) -> np.ndarray:
        return batch.sum(axis=1)

model = Model()
data = np.random.rand(100_000, 256)
batch_size = 1000

batches = [data[i:i + batch_size] for i in range(0, len(data), batch_size)]
predictions = Parallel(n_jobs=4)(delayed(model.predict)(b) for b in batches)

result = np.concatenate(predictions)
print(f"Predictions: {result.shape}")
```

### 21.8.3 Ensemble Evaluation


```python
import numpy as np
from joblib import Parallel, delayed

def train_and_evaluate(seed: int, X_train, y_train, X_test, y_test) -> float:
    np.random.seed(seed)
    from sklearn.ensemble import RandomForestClassifier
    model = RandomForestClassifier(n_estimators=50, n_jobs=1)
    model.fit(X_train, y_train)
    return model.score(X_test, y_test)

X_train = np.random.rand(1000, 20)
y_train = np.random.randint(0, 2, 1000)
X_test = np.random.rand(200, 20)
y_test = np.random.randint(0, 2, 200)

# Train 10 independent models in parallel
scores = Parallel(n_jobs=4)(
    delayed(train_and_evaluate)(s, X_train, y_train, X_test, y_test)
    for s in range(10)
)

print(f"Mean accuracy: {np.mean(scores):.3f} +/- {np.std(scores):.3f}")
```

### 21.8.4 Chunked Data Processing Pipeline


```python
import pandas as pd
import numpy as np
from joblib import Parallel, delayed

def process_chunk(chunk: pd.DataFrame) -> pd.DataFrame:
    chunk["rolling_mean"] = chunk["value"].rolling(10).mean()
    chunk["feature"] = chunk["value"] / chunk["value"].shift(1)
    return chunk.dropna()

df = pd.DataFrame({
    "group": np.repeat(range(20), 1000),
    "value": np.random.rand(20000),
})

groups = [group for _, group in df.groupby("group")]
results = Parallel(n_jobs=4)(delayed(process_chunk)(g) for g in groups)

final_df = pd.concat(results)
print(f"Processed {len(final_df)} rows")
```

## 21.9 AsyncIO vs Threading vs Multiprocessing

> **One-Sentence Takeaway:** undefined


Python offers three concurrency models for different problems:

```python
import asyncio
import time

# async/await: cooperative multitasking (single thread)
async def fetch_data(url: str) -> str:
    await asyncio.sleep(1)  # Non-blocking wait
    return f"data from {url}"

async def main():
    tasks = [fetch_data(f"url-{i}") for i in range(5)]
    results = await asyncio.gather(*tasks)
    return results

start = time.perf_counter()
results = asyncio.run(main())
print(f"Async: {time.perf_counter() - start:.2f}s")
```

**When to use each:**

| Model | Best For | GIL Impact | Memory |
|-------|----------|------------|--------|
| asyncio | Many concurrent I/O connections | GIL-free (no Python code during await) | Low |
| threading | Moderate I/O, blocking calls | GIL released during blocking ops | Medium |
| multiprocessing | CPU-bound computation | No GIL (separate processes) | High |
| joblib | ML/NumPy parallelism | Combines all approaches | Medium |


## Concept Comparison Table

| Model | Best For | Memory |
|---|---|---|
| asyncio | Many concurrent I/O | Low |
| threading | Moderate I/O, blocking | Medium |
| multiprocessing | CPU-bound | High |
| joblib | ML/NumPy parallelism | Medium |


## Quick Reference

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

# I/O-bound
with ThreadPoolExecutor(max_workers=10) as ex:
    futures = [ex.submit(fetch, url) for url in urls]

# CPU-bound
with ProcessPoolExecutor(max_workers=4) as ex:
    results = list(ex.map(is_prime, numbers))
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Data Science|Hyperparameter tuning with joblib|21.8|
|Web Dev|Async fetch with ThreadPoolExecutor|21.2|
|DevOps|Parallel log processing|21.3|
|Automation|Batch inference pipelines|21.8|


## Chapter Quiz

**Q1.** What does the GIL prevent?
- multi-threading entirely
- parallel bytecode execution on one core **<-- Correct**
- multiprocessing
- file I/O

**Q2.** When does threading help in Python?
- CPU-bound tasks
- I/O-bound tasks **<-- Correct**
- both
- neither

**Q3.** What does ProcessPoolExecutor use?
- threads
- separate processes **<-- Correct**
- coroutines
- lightweight threads

**Q4.** What is joblib optimised for?
- web scraping
- ML parallelism **<-- Correct**
- file I/O
- GUI apps

**Q5.** What does BLAS_NUM_THREADS control?
- thread pool size
- BLAS CPU core count **<-- Correct**
- memory limit
- process count

```typescript
// Chapter 21: TypeScript Concurrency Equivalents
// Python: threading → TypeScript: Worker threads
import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";

// Python: ThreadPoolExecutor → TypeScript: Worker pool pattern
function runInWorker(data: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: data,
    });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

if (!isMainThread) {
  // Worker code (Python equivalent: def worker(x): return x * x)
  const result = (workerData as number) ** 2;
  parentPort!.postMessage(result);
}

// Python: asyncio → TypeScript: async/await (first-class)
async function fetchMultiple(urls: string[]): Promise<unknown[]> {
  const results = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      return res.json();
    })
  );
  return results;
}
// Python equivalent: asyncio.gather(*[fetch(url) for url in urls])

// Python: concurrent.futures.ProcessPoolExecutor
// TypeScript: child_process.fork() for CPU-bound work
import { fork } from "node:child_process";

function runInProcess(script: string, data: unknown): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const child = fork(script);
    child.send(data);
    child.on("message", resolve);
    child.on("error", reject);
  });
}

// Python: multiprocessing.Queue → TypeScript: MessageChannel
const { MessageChannel } = require("node:worker_threads");
const channel = new MessageChannel();

// Python: GIL has no TypeScript equivalent
// Node.js uses a single thread for JavaScript but offloads I/O to libuv
// CPU-bound work blocks the event loop — use Worker threads or child processes
```

### TypeScript Utilities

```typescript
// === Thread Pool Executor (simulated) ===
class ThreadPool {
  private workers: Array<() => Promise<void>> = [];
  private results: unknown[] = [];
  constructor(private concurrency: number) {}
  async submit<T>(fn: () => Promise<T>): Promise<void> {
    this.workers.push(async () => { this.results.push(await fn()); });
  }
  async execute<T>(): Promise<T[]> {
    this.results = [];
    for (let i = 0; i < this.workers.length; i += this.concurrency) {
      const batch = this.workers.slice(i, i + this.concurrency);
      await Promise.all(batch.map((w) => w()));
    }
    this.workers = [];
    return this.results as T[];
  }
}
async function demoPool(): Promise<void> {
  const pool = new ThreadPool(3);
  for (let i = 0; i < 6; i++) {
    const n = i;
    pool.submit(async () => { await new Promise((r) => setTimeout(r, 50)); return n * 2; });
  }
  const results = await pool.execute<number>();
  console.log(results); // [0,2,4,6,8,10]
}
demoPool();

// === Promise Pool (concurrency-limited) ===
async function promisePool<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results: T[] = [];
  const executing: Promise<void>[] = [];
  for (const task of tasks) {
    const p = task().then((r) => { results.push(r); });
    executing.push(p);
    if (executing.length >= limit) await Promise.race(executing);
  }
  await Promise.all(executing);
  return results;
}
// const urls = ["url1", "url2", "url3"];
// const fetchers = urls.map((u) => () => fetch(u).then((r) => r.text()));
// const pages = await promisePool(fetchers, 2);

// === Async Queue with Concurrency ===
class AsyncQueue<T> {
  private queue: T[] = [];
  private consumers: Array<(x: T) => void> = [];
  push(item: T): void {
    if (this.consumers.length > 0) this.consumers.shift()!(item);
    else this.queue.push(item);
  }
  async pop(): Promise<T> {
    if (this.queue.length > 0) return this.queue.shift()!;
    return new Promise((r) => this.consumers.push(r));
  }
}
async function queueDemo(): Promise<void> {
  const q = new AsyncQueue<number>();
  setTimeout(() => { q.push(1); q.push(2); q.push(3); }, 10);
  console.log(await q.pop()); // 1
  console.log(await q.pop()); // 2
  console.log(await q.pop()); // 3
}
queueDemo();

// === Parallel Map (Python Pool.map equivalent) ===
async function parallelMap<T, U>(arr: T[], fn: (x: T) => Promise<U>, concurrency = 4): Promise<U[]> {
  return promisePool(arr.map((x) => () => fn(x)), concurrency);
}
// const doubled = await parallelMap([1,2,3,4,5], async (x) => x * 2, 3);
// console.log(doubled); // [2,4,6,8,10]
```

### TypeScript Async & Concurrency Patterns

```typescript
// === Promise-based async (Python: asyncio) ===
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

// === Parallel execution (Python: asyncio.gather) ===
async function parallel<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  return Promise.all(tasks.map(t => t()));
}
const urls = ["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"];
const results = await parallel(urls.map(url => () => fetchData(url)));

// === Thread pool equivalent (Python: concurrent.futures) ===
async function mapParallel<T, R>(items: T[], fn: (item: T) => Promise<R>, concurrency = 4): Promise<R[]> {
  const results: R[] = [];
  const executing = new Set<Promise<void>>();
  const queue = [...items];
  while (queue.length > 0 || executing.size > 0) {
    while (queue.length > 0 && executing.size < concurrency) {
      const item = queue.shift()!;
      const prom = fn(item).then(r => { results.push(r); });
      executing.add(prom);
      prom.finally(() => executing.delete(prom));
    }
    if (executing.size > 0) await Promise.race(executing);
  }
  return results;
}
const squares = await mapParallel([1, 2, 3, 4, 5], async (n) => {
  await new Promise(r => setTimeout(r, 10));
  return n * n;
});
console.log(squares); // [1, 4, 9, 16, 25]

// === Async Queue (Python: asyncio.Queue) ===
class AsyncQueue<T> {
  private items: T[] = [];
  private resolvers: ((value: T) => void)[] = [];
  async push(item: T): Promise<void> {
    if (this.resolvers.length > 0) this.resolvers.shift()!(item);
    else this.items.push(item);
  }
  async pop(): Promise<T> {
    if (this.items.length > 0) return this.items.shift()!;
    return new Promise(resolve => this.resolvers.push(resolve));
  }
  get length(): number { return this.items.length - this.resolvers.length; }
}

// === Async Event Emitter ===
class AsyncEventEmitter {
  private listeners = new Map<string, ((...args: unknown[]) => void)[]>();
  on(event: string, listener: (...args: unknown[]) => void): void {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event)!.push(listener);
  }
  emit(event: string, ...args: unknown[]): void {
    this.listeners.get(event)?.forEach(l => l(...args));
  }
  async emitAsync(event: string, ...args: unknown[]): Promise<void> {
    await Promise.all(this.listeners.get(event)?.map(l => Promise.resolve(l(...args))) ?? []);
  }
}

// === Worker Pool ===
class WorkerPool {
  private queue: (() => Promise<void>)[] = [];
  private active = 0;
  constructor(private size: number) {}
  async run<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      const task = async () => { try { resolve(await fn()); } catch (e) { reject(e); } };
      this.queue.push(task);
      this.processNext();
    });
  }
  private async processNext(): Promise<void> {
    if (this.active >= this.size || this.queue.length === 0) return;
    this.active++;
    const task = this.queue.shift()!;
    await task();
    this.active--;
    this.processNext();
  }
}
const pool = new WorkerPool(2);
const outputs = await Promise.all([1, 2, 3, 4].map(n => pool.run(async () => {
  await new Promise(r => setTimeout(r, 100));
  return n * 2;
})));
console.log(outputs);
```

## Summary

- The GIL limits pure Python CPU-bound code to one core. Threading only helps I/O-bound tasks.
- Use ThreadPoolExecutor for network calls, file I/O, and database queries.
- Use ProcessPoolExecutor or multiprocessing.Pool for CPU-intensive computations.
- joblib provides a high-level API optimized for ML workflows with transparent batching and memmap support.
- Shared memory (shared_memory module) avoids serialization overhead for large NumPy arrays.
- BLAS-level parallelism (OMP_NUM_THREADS) makes NumPy operations multi-core without Python-level parallelism.
- Choose asyncio for very high connection counts, threading for moderate I/O, and multiprocessing for CPU work.

## Exercises

### Basic


1. Write a script that downloads 10 URLs using ThreadPoolExecutor and measures the total time vs sequential download.
2. Modify the SafeCounter example to use multiprocessing instead of threading. What happens and why?
3. Use ProcessPoolExecutor to compute the sum of squares for numbers 0-10_000_000 in parallel.

### Intermediate


4. Compare the performance of ThreadPoolExecutor vs ProcessPoolExecutor for a function that alternates between CPU computation and time.sleep. Explain the results.
5. Implement a producer-consumer pattern where a producer generates 1000 random arrays and multiple worker processes compute their means, using multiprocessing.Queue.
6. Write a grid search for a RandomForestClassifier with 3 parameters (n_estimators, max_depth, min_samples_split) using joblib.Parallel.

### Advanced


7. Design a parallel data processing pipeline that reads a large CSV file (100M rows), splits it by a categorical column, applies rolling window statistics to each group, and writes results. Use chunked processing and joblib.
8. Benchmark the serialization overhead of passing a 100MB NumPy array to ProcessPoolExecutor workers. Implement a shared_memory alternative and compare wall-clock time.
9. Implement an ensemble of 20 XGBoost classifiers trained in parallel, with results aggregated via majority voting. Handle partial failures gracefully (one model may fail to converge).
