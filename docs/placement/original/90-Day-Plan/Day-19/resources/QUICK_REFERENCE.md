# DAY 19: QUICK REFERENCE GUIDE - CONCURRENCY CHEAT SHEET

## 1. THREAD CREATION (2 WAYS)

### Extend Thread
```java
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}
new MyThread().start();
```

### Implement Runnable (Preferred)
```java
new Thread(() -> System.out.println("Running")).start();
```

---

## 2. SYNCHRONIZATION

### Synchronized Method
```java
public synchronized void increment() { count++; }
```

### Synchronized Block
```java
synchronized (lock) { count++; }
```

### Reentrant Lock
```java
ReentrantLock lock = new ReentrantLock();
lock.lock();
try { /* critical */ } finally { lock.unlock(); }
```

### Try-Lock (Non-blocking)
```java
if (lock.tryLock(2, TimeUnit.SECONDS)) {
    try { /* critical */ }
    finally { lock.unlock(); }
}
```

---

## 3. EXECUTOR FRAMEWORK

### Thread Pools
```java
Executors.newSingleThreadExecutor();      // 1 thread
Executors.newFixedThreadPool(10);         // 10 threads
Executors.newCachedThreadPool();          // Dynamic
Executors.newScheduledThreadPool(5);      // Scheduled
```

### Submit Tasks
```java
executor.submit(() -> doWork());           // Runnable
Future<Integer> future = executor.submit(() -> 42);  // Callable
Integer result = future.get();             // Block for result
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);
```

### Scheduled Tasks
```java
scheduler.schedule(task, 2, TimeUnit.SECONDS);
scheduler.scheduleAtFixedRate(task, 0, 1, TimeUnit.SECONDS);
scheduler.scheduleWithFixedDelay(task, 0, 1, TimeUnit.SECONDS);
```

---

## 4. LOCKS

### ReadWriteLock
```java
ReadWriteLock lock = new ReentrantReadWriteLock();
lock.readLock().lock();    // Multiple readers
lock.writeLock().lock();   // Exclusive writer
```

### StampedLock (Optimistic)
```java
long stamp = lock.tryOptimisticRead();
result = value;
if (!lock.validate(stamp)) {
    stamp = lock.readLock();
    try { result = value; }
    finally { lock.unlockRead(stamp); }
}
```

### Condition Variables
```java
Condition notEmpty = lock.newCondition();
notEmpty.await();      // Wait for signal
notEmpty.signalAll();  // Wake all waiters
```

### Semaphore
```java
Semaphore semaphore = new Semaphore(3);
semaphore.acquire();
try { /* use resource */ }
finally { semaphore.release(); }
```

### CountDownLatch
```java
CountDownLatch latch = new CountDownLatch(3);
latch.countDown();     // In worker
latch.await();         // Wait for all
```

### CyclicBarrier
```java
CyclicBarrier barrier = new CyclicBarrier(3);
barrier.await();       // Wait for all
```

---

## 5. CONCURRENT COLLECTIONS

### ConcurrentHashMap
```java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.putIfAbsent("key", 1);
map.replace("key", 1, 2);
map.compute("key", (k, v) -> v + 1);
```

### BlockingQueue
```java
BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(10);
queue.put(item);           // Block if full
Integer item = queue.take(); // Block if empty

// Alternative: ArrayBlockingQueue, PriorityBlockingQueue, SynchronousQueue
```

### CopyOnWriteArrayList
```java
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
// Safe iteration, expensive writes
for (String item : list) { /* won't throw exception */ }
```

### ConcurrentSkipListMap
```java
ConcurrentSkipListMap<Integer, String> map = new ConcurrentSkipListMap<>();
// Sorted, thread-safe, better than synchronized TreeMap
```

---

## 6. ATOMIC VARIABLES (Lock-Free)

### AtomicInteger
```java
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();      // Atomic ++
counter.getAndIncrement();      // ++ and return old
counter.compareAndSet(0, 1);    // CAS
```

### AtomicReference
```java
AtomicReference<String> ref = new AtomicReference<>();
ref.set("value");
ref.compareAndSet("value", "new");
```

### AtomicStampedReference (Prevent ABA)
```java
AtomicStampedReference<Data> ref = 
    new AtomicStampedReference<>(new Data(), 0);
// Version number prevents ABA problem
```

---

## 7. VOLATILE

### Ensures Visibility (Not Atomicity)
```java
private volatile boolean flag = false;
private volatile int value = 0;

// Value changes visible to all threads
// But not atomic: flag = true; is still not atomic
```

---

## 8. THREADLOCAL

### Thread-Specific Data
```java
ThreadLocal<String> data = ThreadLocal.withInitial(() -> "default");
String value = data.get();
data.set("new value");
data.remove();  // IMPORTANT: prevent memory leak
```

### ThreadLocalRandom
```java
int random = ThreadLocalRandom.current().nextInt(100);
```

---

## 9. THREAD STATES

```
NEW → RUNNABLE ↔ BLOCKED/WAITING/TIMED_WAITING → TERMINATED
```

- **NEW**: Created, not started
- **RUNNABLE**: Running or waiting for CPU
- **BLOCKED**: Waiting for lock
- **WAITING**: Waiting indefinitely (wait(), join())
- **TIMED_WAITING**: Waiting with timeout
- **TERMINATED**: Finished

---

## 10. HAPPENS-BEFORE RULES

1. Thread.start() → run() method execution
2. Last action in run() → join() returns
3. volatile write → volatile read
4. lock acquire → lock release
5. action in thread 1 → synchronized block in thread 2

---

## 11. ANTI-PATTERNS (AVOID)

### ❌ Raw Thread Creation
```java
// WRONG: Uncontrolled thread creation
new Thread(task).start();
```
### ✅ Use Executor
```java
// RIGHT: Controlled thread pool
executor.submit(task);
```

### ❌ Missing Finally
```java
// WRONG: Lock not released if exception
lock.lock();
// ... code that might throw
lock.unlock();
```
### ✅ Use Try-Finally
```java
// RIGHT: Lock always released
lock.lock();
try { /* ... */ }
finally { lock.unlock(); }
```

### ❌ Nested Locks (Deadlock Risk)
```java
// WRONG: Risk of deadlock
synchronized (lock1) {
    synchronized (lock2) { /* ... */ }
}
```
### ✅ Lock Ordering
```java
// RIGHT: Always same order
synchronized (lock1) {
    synchronized (lock2) { /* ... */ }
}
```

---

## 12. COMMON PATTERNS

### Producer-Consumer
```java
BlockingQueue<Item> queue = new LinkedBlockingQueue<>();

// Producer
queue.put(item);

// Consumer
Item item = queue.take();
```

### Lazy Initialization (Thread-Safe)
```java
private volatile Expensive instance = null;

public Expensive getInstance() {
    if (instance == null) {
        synchronized (this) {
            if (instance == null) {
                instance = new Expensive();
            }
        }
    }
    return instance;
}
```

### Immutable Object
```java
final class ImmutablePoint {
    private final int x, y;
    // Constructor only, no setters
}
```

### Work Distribution
```java
ExecutorService executor = Executors.newFixedThreadPool(10);
for (Task task : tasks) {
    executor.submit(task);
}
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);
```

---

## 13. COMPARISON TABLE

| Feature | synchronized | ReentrantLock | ReadWriteLock | StampedLock | Atomic |
|---------|--------------|---------------|---------------|-------------|--------|
| Lock Type | Intrinsic | Explicit | Read/Write | Optimistic | CAS |
| Fairness | No | Yes (optional) | Yes | No | N/A |
| tryLock | No | Yes | Yes | Yes | N/A |
| Timeout | No | Yes | Yes | Yes | N/A |
| Conditions | No | Yes | No | No | N/A |
| Performance | Low contention | Medium | Read-heavy | Very high | Uncontended |

---

## 14. COLLECTION CHOICE GUIDE

| Use Case | Collection |
|----------|-----------|
| Thread-safe map | ConcurrentHashMap |
| Sorted map | ConcurrentSkipListMap |
| Read-heavy list | CopyOnWriteArrayList |
| FIFO queue | LinkedBlockingQueue |
| Priority queue | PriorityBlockingQueue |
| One-item queue | SynchronousQueue |
| Delayed items | DelayQueue |

---

## 15. EXECUTOR SHUTDOWN PATTERN

```java
ExecutorService executor = Executors.newFixedThreadPool(10);

// Submit tasks
executor.submit(task);

// Graceful shutdown
executor.shutdown();
if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
    executor.shutdownNow();
    executor.awaitTermination(2, TimeUnit.SECONDS);
}
```

---

## 16. TOP 10 INTERVIEW Q&A

**Q1**: Difference between Thread and Runnable?
**A**: Thread is class, Runnable is interface. Prefer Runnable.

**Q2**: What's volatile?
**A**: Ensures visibility, not atomicity. Memory barriers.

**Q3**: How to prevent deadlock?
**A**: Lock ordering, timeouts, avoid nested locks.

**Q4**: When use ReadWriteLock?
**A**: Read-heavy workloads.

**Q5**: What is ForkJoinPool?
**A**: Executor for recursive divide-and-conquer.

**Q6**: Difference between wait and sleep?
**A**: wait() releases lock, sleep() doesn't.

**Q7**: What is happens-before?
**A**: Memory visibility guarantee between operations.

**Q8**: When use AtomicInteger?
**A**: Lock-free counter, better performance.

**Q9**: How to prevent ABA problem?
**A**: Use AtomicStampedReference.

**Q10**: What is ThreadLocal?
**A**: Thread-isolated data. Always call remove().

---

## QUICK CHECKLIST

- [ ] Understand thread states and lifecycle
- [ ] Know synchronized vs locks trade-offs
- [ ] Use Executor for thread management
- [ ] Use concurrent collections
- [ ] Understand happens-before rules
- [ ] Prevent deadlock (lock ordering)
- [ ] Use volatile only for visibility
- [ ] Always call remove() on ThreadLocal
- [ ] Use try-finally for lock release
- [ ] Prefer immutability for thread-safety

---

**Master Concurrency - Build Scalable Applications!**
