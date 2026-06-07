# DAY 11: MULTITHREADING QUICK REFERENCE

## 🧵 Thread Creation Cheat Sheet

```java
// Method 1: Extend Thread
class MyThread extends Thread {
    public void run() { /* code */ }
}
new MyThread().start();

// Method 2: Implement Runnable
class MyRunnable implements Runnable {
    public void run() { /* code */ }
}
new Thread(new MyRunnable()).start();

// Method 3: Anonymous Runnable
new Thread(new Runnable() {
    public void run() { /* code */ }
}).start();

// Method 4: Lambda
new Thread(() -> { /* code */ }).start();
```

---

## 🔄 Thread Lifecycle

```
NEW → RUNNABLE → [BLOCKED / WAITING / TIMED_WAITING] → TERMINATED
```

| State | Description |
|-------|-------------|
| **NEW** | Thread created but not started |
| **RUNNABLE** | Running or ready to run |
| **BLOCKED** | Waiting for monitor lock |
| **WAITING** | Waiting indefinitely (wait, join) |
| **TIMED_WAITING** | Waiting with timeout (sleep) |
| **TERMINATED** | Completed execution |

---

## 🛠️ Thread Methods

```java
// Start thread
thread.start();         // Creates new thread
thread.run();          // Executes on current thread (DON'T USE)

// Pause & Wait
Thread.sleep(1000);    // Sleep 1 second (throws InterruptedException)
thread.join();         // Wait for completion
thread.join(2000);     // Wait max 2 seconds

// Interrupt
thread.interrupt();    // Set interrupt flag
Thread.interrupted();  // Check and clear flag
thread.isInterrupted(); // Check flag

// Priority
thread.setPriority(Thread.MAX_PRIORITY); // 1-10
thread.setDaemon(true); // Background thread

// Info
thread.isAlive();      // Check if running
thread.getName();      // Get thread name
Thread.currentThread(); // Get current thread
```

---

## 🏊 ExecutorService

```java
// Types
ExecutorService executor = Executors.newSingleThreadExecutor();
executor = Executors.newFixedThreadPool(4);
executor = Executors.newCachedThreadPool();
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);

// Submit tasks
executor.submit(() -> { /* code */ });
Future<Integer> future = executor.submit(() -> 42);

// Callable & Future
Callable<Integer> task = () -> { return 42; };
Future<Integer> result = executor.submit(task);
int value = result.get(); // Blocks
result.cancel(true);      // Interrupt

// Shutdown
executor.shutdown();
executor.awaitTermination(5, TimeUnit.SECONDS);
```

---

## 🔒 Synchronization Mechanisms

### 1. synchronized Keyword

```java
// Method synchronization
public synchronized void method() { /* code */ }

// Block synchronization
synchronized (lock) { /* code */ }

// Static synchronization
public static synchronized void method() { /* code */ }
```

### 2. wait/notify

```java
synchronized (lock) {
    while (!condition) {
        lock.wait();     // Release lock and wait
    }
    // Do work
    lock.notifyAll();   // Wake all waiting threads
}
```

### 3. ReentrantLock

```java
Lock lock = new ReentrantLock();
lock.lock();
try {
    // Critical section
} finally {
    lock.unlock(); // MUST unlock in finally
}

// tryLock
if (lock.tryLock(2, TimeUnit.SECONDS)) {
    try { /* code */ } 
    finally { lock.unlock(); }
}
```

### 4. ReadWriteLock

```java
ReadWriteLock rwLock = new ReentrantReadWriteLock();

// Read (multiple allowed)
rwLock.readLock().lock();
try { /* read */ } finally { rwLock.readLock().unlock(); }

// Write (exclusive)
rwLock.writeLock().lock();
try { /* write */ } finally { rwLock.writeLock().unlock(); }
```

### 5. volatile

```java
private volatile boolean flag = false;
// Guarantees visibility across threads
```

### 6. Atomic Variables

```java
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();       // Atomic ++
count.getAndIncrement();       // Atomic ++
count.compareAndSet(10, 20);  // CAS: if 10, set 20
```

---

## 🎯 Advanced Concurrency

### Semaphore
```java
Semaphore sem = new Semaphore(3); // 3 permits
sem.acquire();  // Get permit (blocks if none)
try { /* code */ } 
finally { sem.release(); } // Return permit
```

### CountDownLatch
```java
CountDownLatch latch = new CountDownLatch(3);
latch.countDown(); // Decrease count
latch.await();     // Wait until 0
```

### CyclicBarrier
```java
CyclicBarrier barrier = new CyclicBarrier(3, () -> {
    System.out.println("All reached!");
});
barrier.await(); // Wait for all parties
```

### CompletableFuture
```java
CompletableFuture.supplyAsync(() -> 42)
    .thenApply(x -> x * 2)
    .thenAccept(System.out::println)
    .exceptionally(ex -> { /* handle */ return null; });
```

---

## 📦 Concurrent Collections

| Collection | Use Case |
|------------|----------|
| **ConcurrentHashMap** | High-concurrency map |
| **CopyOnWriteArrayList** | Read-heavy, rare writes |
| **ConcurrentLinkedQueue** | Non-blocking queue |
| **LinkedBlockingQueue** | Bounded producer-consumer |
| **PriorityBlockingQueue** | Priority queue |
| **DelayQueue** | Delayed tasks |
| **SynchronousQueue** | Direct handoff |
| **ConcurrentSkipListMap** | Sorted concurrent map |

### Usage Examples

```java
// ConcurrentHashMap
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.putIfAbsent("key", 1);
map.compute("key", (k, v) -> v == null ? 1 : v + 1);

// CopyOnWriteArrayList (read-heavy)
CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
list.add(1); // Creates copy

// BlockingQueue
BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(10);
queue.put(1);    // Blocks if full
int item = queue.take(); // Blocks if empty
```

---

## 🎨 Common Patterns

### Producer-Consumer
```java
BlockingQueue<Integer> queue = new LinkedBlockingQueue<>();

// Producer
queue.put(item);

// Consumer
int item = queue.take();
```

### Reader-Writer
```java
ReadWriteLock rwLock = new ReentrantReadWriteLock();

// Reader
rwLock.readLock().lock();
try { /* read */ } finally { rwLock.readLock().unlock(); }

// Writer
rwLock.writeLock().lock();
try { /* write */ } finally { rwLock.writeLock().unlock(); }
```

### Thread-Safe Singleton
```java
class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

---

## ⚡ Complexity Reference

| Operation | synchronized | ReentrantLock | Atomic | volatile |
|-----------|-------------|---------------|--------|----------|
| Time | O(1) | O(1) | O(1) | O(1) |
| Space | O(1) | O(1) | O(1) | O(1) |
| Atomicity | ✅ | ✅ | ✅ | ❌ |
| Visibility | ✅ | ✅ | ✅ | ✅ |

---

## ⚠️ Common Pitfalls

1. **Deadlock** - Acquire locks in same order
2. **Race Condition** - Use synchronization
3. **Busy Waiting** - Use wait/notify instead of loops
4. **Forget unlock** - Always unlock in finally
5. **synchronized(this)** - Prefer private lock object
6. **Calling run()** - Always use start()
7. **Missing volatile** - Use for visibility
8. **Thread.stop()** - NEVER use (deprecated)

---

## 🎯 When to Use What?

| Scenario | Solution |
|----------|----------|
| Simple counter | AtomicInteger |
| High-concurrency map | ConcurrentHashMap |
| Producer-consumer | BlockingQueue |
| One-time barrier | CountDownLatch |
| Reusable barrier | CyclicBarrier |
| Resource limiting | Semaphore |
| Read-heavy list | CopyOnWriteArrayList |
| Complex locking | ReentrantLock |
| Visibility only | volatile |
| Fork-Join tasks | ForkJoinPool |

---

**💡 Pro Tip**: Prefer higher-level abstractions (ExecutorService, concurrent collections) over low-level synchronization!
