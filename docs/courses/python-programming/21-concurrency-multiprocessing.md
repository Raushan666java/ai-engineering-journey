# Chapter 21: Concurrency, Multiprocessing & Parallelism

## Learning Objectives

After completing this chapter, you will be able to:
- Understand the Python GIL and its impact on different workload types
- Use threading for I/O-bound tasks safely
- Use multiprocessing for CPU-bound tasks efficiently
- Choose between concurrent.futures, multiprocessing, and joblib
- Parallelize ML workflows: hyperparameter tuning, batch inference, ensemble evaluation
- Avoid shared-state pitfalls and serialization bottlenecks

## 21.1 The GIL Problem

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
