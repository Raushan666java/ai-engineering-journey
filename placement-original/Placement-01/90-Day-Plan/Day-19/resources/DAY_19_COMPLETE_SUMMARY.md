# DAY 19: COMPLETE SUMMARY - CONCURRENCY & PARALLEL PROGRAMMING

## Overview
**Day 19** provides comprehensive coverage of Java's concurrency framework, including threading fundamentals, synchronization mechanisms, executor services, lock framework, concurrent collections, and advanced memory model concepts. This is the foundation for building scalable, multi-threaded applications.

---

## SECTION 1: THREADING FUNDAMENTALS

### Thread Creation
**Two main approaches:**

```java
// Approach 1: Extend Thread class
class MyThread extends Thread {
    public void run() { /* ... */ }
}
new MyThread().start();

// Approach 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() { /* ... */ }
}
new Thread(new MyRunnable()).start();
```

### Thread Lifecycle
- **NEW**: Thread created but not started
- **RUNNABLE**: Thread ready to run or running
- **BLOCKED**: Thread waiting to acquire lock
- **WAITING**: Thread waiting indefinitely (wait(), join())
- **TIMED_WAITING**: Thread waiting with timeout
- **TERMINATED**: Thread has completed

### Synchronization Basics
```java
// Synchronized method
public synchronized void increment() { count++; }

// Synchronized block (more granular)
synchronized (lock) { count++; }

// Reentrant - same thread can acquire again
lock.lock();
outerMethod(); // calls innerMethod() that also locks
lock.unlock();
```

### Memory Model & Happens-Before
- **Happens-Before**: Memory visibility guarantee between operations
- **Volatile**: Ensures variable visibility across threads
  - Write creates memory barrier (store-release)
  - Read creates memory barrier (load-acquire)
- **Synchronized**: Provides both visibility and mutual exclusion

**Key Relationships:**
1. Thread.start() happens-before run() method
2. run() completion happens-before join() returns
3. volatile write happens-before volatile read
4. lock acquire happens-before lock release

---

## SECTION 2: EXECUTOR FRAMEWORK

### Thread Pool Types
```java
// 1. Single Thread - Sequential execution
ExecutorService executor = Executors.newSingleThreadExecutor();

// 2. Fixed Pool - Fixed number of threads
ExecutorService executor = Executors.newFixedThreadPool(10);

// 3. Cached Pool - Dynamic threads, reuse idle
ExecutorService executor = Executors.newCachedThreadPool();

// 4. Scheduled Pool - For delayed/periodic tasks
ScheduledExecutorService scheduler = 
    Executors.newScheduledThreadPool(5);

// 5. Work Stealing - For divide-and-conquer
ExecutorService executor = Executors.newWorkStealingPool();
```

### Task Submission
```java
// Runnable - no return value
executor.submit(runnable);

// Callable - returns value
Future<Integer> future = executor.submit(callable);

// Getting results
Integer result = future.get();           // blocks
result = future.get(2, TimeUnit.SECONDS); // timeout

// Multiple tasks
List<Future<String>> futures = executor.invokeAll(tasks);
String firstResult = executor.invokeAny(tasks);
```

### ScheduledExecutorService
```java
// One-time delay
scheduler.schedule(task, 2, TimeUnit.SECONDS);

// Periodic - fixed rate
scheduler.scheduleAtFixedRate(task, 0, 1, TimeUnit.SECONDS);

// Periodic - fixed delay (respects task duration)
scheduler.scheduleWithFixedDelay(task, 0, 1, TimeUnit.SECONDS);
```

### ForkJoinPool
Used for recursive divide-and-conquer problems:
```java
class SumTask extends RecursiveTask<Long> {
    protected Long compute() {
        if (size <= THRESHOLD) {
            return sum; // Base case
        }
        SumTask left = new SumTask(...);
        SumTask right = new SumTask(...);
        left.fork();
        return right.compute() + left.join();
    }
}
```

### Proper Shutdown
```java
executor.shutdown();  // Stop accepting new tasks

// Wait for completion
if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
    executor.shutdownNow(); // Force shutdown
    executor.awaitTermination(2, TimeUnit.SECONDS);
}
```

---

## SECTION 3: LOCK FRAMEWORK

### ReentrantLock
```java
ReentrantLock lock = new ReentrantLock();

// Basic usage
lock.lock();
try { /* critical section */ }
finally { lock.unlock(); }

// Non-blocking attempt
if (lock.tryLock()) {
    try { /* ... */ }
    finally { lock.unlock(); }
}

// With timeout
if (lock.tryLock(2, TimeUnit.SECONDS)) {
    try { /* ... */ }
    finally { lock.unlock(); }
}

// Fair vs unfair
ReentrantLock fairLock = new ReentrantLock(true);
```

### ReadWriteLock
Perfect for read-heavy workloads:
```java
ReadWriteLock lock = new ReentrantReadWriteLock();

// Multiple threads can read simultaneously
lock.readLock().lock();
try { /* read operation */ }
finally { lock.readLock().unlock(); }

// Only one writer at a time
lock.writeLock().lock();
try { /* write operation */ }
finally { lock.writeLock().unlock(); }
```

### StampedLock
Optimistic locking for very high contention:
```java
// Optimistic read - no lock
long stamp = lock.tryOptimisticRead();
double value = x;

// Validate if data was written
if (!lock.validate(stamp)) {
    // Retry with pessimistic read lock
    stamp = lock.readLock();
    try {
        value = x;
    } finally {
        lock.unlockRead(stamp);
    }
}

// Write lock
long stamp = lock.writeLock();
try { x = newValue; }
finally { lock.unlockWrite(stamp); }
```

### Condition Variables
```java
Condition notEmpty = lock.newCondition();
Condition notFull = lock.newCondition();

// Producer
lock.lock();
try {
    while (isFull()) notFull.await();
    add(item);
    notEmpty.signalAll();
} finally { lock.unlock(); }

// Consumer
lock.lock();
try {
    while (isEmpty()) notEmpty.await();
    item = remove();
    notFull.signalAll();
} finally { lock.unlock(); }
```

### Semaphore
Resource limiting:
```java
Semaphore semaphore = new Semaphore(3); // 3 permits

semaphore.acquire();
try { /* use resource */ }
finally { semaphore.release(); }
```

### CountDownLatch
One-time synchronization:
```java
CountDownLatch latch = new CountDownLatch(3);

// Worker threads
latch.countDown();

// Main thread
latch.await(); // Waits for count to reach 0
```

### CyclicBarrier
Multi-way synchronization (reusable):
```java
CyclicBarrier barrier = new CyclicBarrier(3, () -> {
    System.out.println("All arrived!");
});

// Each thread waits at barrier
barrier.await();
```

---

## SECTION 4: CONCURRENT COLLECTIONS

### ConcurrentHashMap
- Segment locking (default 16 segments)
- Concurrent reads and writes to different buckets
- Atomic operations: putIfAbsent(), replace(), compute()

```java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// Atomic operations
map.putIfAbsent("key", 1); // Only if absent
map.replace("key", 1, 2);  // Only if old value matches
map.compute("key", (k, v) -> v == null ? 0 : v + 1);
```

### BlockingQueue Implementations
```java
// FIFO Queue
BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(10);
queue.put(item);       // Blocks if full
Integer item = queue.take(); // Blocks if empty

// Fixed size array
queue = new ArrayBlockingQueue<>(5);

// Priority-based
queue = new PriorityBlockingQueue<>();

// One-item queue (handoff)
queue = new SynchronousQueue<>();

// Delayed items
queue = new DelayQueue<>();
```

### CopyOnWriteArrayList
Reads never block, writes copy entire array:
```java
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();

// Safe iteration during concurrent modifications
for (String item : list) { /* won't throw ConcurrentModificationException */ }
```

### ConcurrentSkipListMap
Sorted map with concurrent access:
```java
ConcurrentSkipListMap<Integer, String> map = new ConcurrentSkipListMap<>();
map.forEach((k, v) -> System.out.println(k + " -> " + v)); // Sorted order
```

---

## SECTION 5: ADVANCED CONCEPTS

### Atomic Variables
Lock-free thread-safety via Compare-And-Swap (CAS):
```java
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();
counter.getAndIncrement();
counter.compareAndSet(expect, update);

AtomicReference<String> ref = new AtomicReference<>();
ref.set("value");
ref.get();

// Prevent ABA problem
AtomicStampedReference<String> stamped = 
    new AtomicStampedReference<>("A", 0);
```

### Volatile
Memory visibility without atomicity:
```java
private volatile boolean flag = false; // Changes visible to all threads

// Without volatile: thread might cache value
private boolean flag = false; // WRONG for cross-thread visibility
```

### ThreadLocal
Thread-specific data:
```java
ThreadLocal<Connection> connLocal = 
    ThreadLocal.withInitial(() -> new Connection());

Connection conn = connLocal.get(); // Gets thread's instance
connLocal.remove();                // IMPORTANT: prevent memory leak
```

### Double-Checked Locking
Lazy initialization pattern (use volatile!):
```java
private volatile Singleton instance = null;

public Singleton getInstance() {
    if (instance == null) {           // Check 1: no lock
        synchronized (this) {
            if (instance == null) {   // Check 2: with lock
                instance = new Singleton();
            }
        }
    }
    return instance;
}
```

### Immutability
Objects inherently thread-safe:
```java
final class ImmutablePoint {
    private final int x, y;
    
    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

---

## KEY INTERVIEW QUESTIONS (25)

### Threading Fundamentals
**Q1**: Difference between Thread and Runnable?
**A**: Thread is a class, Runnable is interface. Prefer Runnable for single inheritance.

**Q2**: What are thread states?
**A**: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED

**Q3**: Difference between wait() and sleep()?
**A**: wait() releases lock, sleep() doesn't. wait() needs notify().

### Synchronization
**Q4**: Difference between synchronized and ReentrantLock?
**A**: ReentrantLock offers try-lock, fairness, multiple conditions, explicit control.

**Q5**: When to use volatile vs synchronized?
**A**: volatile for visibility only, synchronized for visibility + atomicity.

**Q6**: What causes deadlock and prevention?
**A**: Circular lock dependency. Prevent with lock ordering, timeouts, or avoiding nested locks.

### Executor Framework
**Q7**: When to use which thread pool?
**A**: Single (sequential), Fixed (controlled concurrency), Cached (dynamic), Scheduled (delayed tasks).

**Q8**: What is Future?
**A**: Represents async computation result. Use get() to block for result.

**Q9**: Difference between shutdown() and shutdownNow()?
**A**: shutdown() waits for tasks, shutdownNow() interrupts immediately.

### Locks
**Q10**: When to use ReadWriteLock?
**A**: For read-heavy workloads where multiple threads read, few write.

**Q11**: What is StampedLock optimistic read?
**A**: Returns stamp without locking, validate later if data was modified.

**Q12**: How does Semaphore work?
**A**: Maintains permits. acquire() waits if none available, release() adds permit.

### Collections
**Q13**: Why use ConcurrentHashMap instead of synchronized HashMap?
**A**: ConcurrentHashMap uses segment locking, synchronized has global lock.

**Q14**: When to use CopyOnWriteArrayList?
**A**: Read-heavy workloads. Iteration is thread-safe, writes expensive.

**Q15**: What is BlockingQueue?
**A**: Queue that blocks put() if full, take() if empty. For producer-consumer.

### Advanced
**Q16**: Explain happens-before relationship.
**A**: Memory visibility guarantee. If A happens-before B, A's effects visible before B executes.

**Q17**: What is volatile?
**A**: Ensures visibility, not atomicity. Creates memory barriers (store-release, load-acquire).

**Q18**: What is ABA problem?
**A**: CAS succeeds if value matches original, missing A→B→A changes. Use AtomicStampedReference.

**Q19**: Explain double-checked locking.
**A**: Two checks to minimize locking. Must use volatile to prevent reordering.

**Q20**: When to use ThreadLocal?
**A**: Thread-isolated data (DB connections, session info). Always call remove().

**Q21**: What is lock-free programming?
**A**: Synchronization without locks using atomic operations (CAS).

**Q22**: Difference between CountDownLatch and CyclicBarrier?
**A**: Latch one-time, Barrier reusable. Latch waits for completion, Barrier waits for arrival.

**Q23**: What is ForkJoinPool?
**A**: Executor for recursive divide-and-conquer using work stealing.

**Q24**: How to prevent deadlock?
**A**: Lock ordering, timeouts, or avoid nested locks.

**Q25**: What is immutability advantage?
**A**: Objects inherently thread-safe, no synchronization needed.

---

## COMMON PATTERNS

### Producer-Consumer
```java
BlockingQueue<Item> queue = new LinkedBlockingQueue<>();

// Producer
queue.put(item);

// Consumer
Item item = queue.take();
```

### Read-Write Pattern
```java
ReadWriteLock lock = new ReentrantReadWriteLock();

// Multiple readers
lock.readLock().lock();
try { /* read */ }
finally { lock.readLock().unlock(); }

// Exclusive writer
lock.writeLock().lock();
try { /* write */ }
finally { lock.writeLock().unlock(); }
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

### Work Distribution with Executor
```java
ExecutorService executor = Executors.newFixedThreadPool(10);
for (Task task : tasks) {
    executor.submit(task);
}
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);
```

---

## BEST PRACTICES

1. **Prefer Immutability**: Immutable objects are inherently thread-safe
2. **Minimize Lock Scope**: Hold locks only when necessary
3. **Avoid Nested Locks**: Prevents deadlock
4. **Use Lock Ordering**: Always acquire locks in same order
5. **Prefer Executors**: Don't create threads manually
6. **Use Concurrent Collections**: Instead of synchronized wrappers
7. **Call remove() on ThreadLocal**: Prevents memory leaks
8. **Use volatile for visibility**: Atomicity requires synchronized/locks
9. **Prefer higher-level constructs**: Use CountDownLatch, Semaphore instead of wait/notify
10. **Test under contention**: Concurrency bugs hard to reproduce

---

## PERFORMANCE CONSIDERATIONS

- **ConcurrentHashMap**: Segment locking, better than synchronized HashMap
- **ReadWriteLock**: Better than synchronized for read-heavy
- **StampedLock**: Better than ReadWriteLock for very high contention
- **CopyOnWriteArrayList**: Good for read-heavy, bad for write-heavy
- **Atomic variables**: Lock-free, very fast under contention
- **ForkJoinPool**: Efficient for recursive problems with work stealing

---

## TROUBLESHOOTING COMMON ISSUES

### Deadlock
**Symptom**: Program hangs indefinitely
**Solution**: Lock ordering, timeouts, avoid nested locks

### Race Condition
**Symptom**: Inconsistent results between runs
**Solution**: Use synchronized, locks, or atomic variables

### Lost Updates
**Symptom**: Some changes lost
**Solution**: Ensure atomicity of read-modify-write

### Memory Visibility Issues
**Symptom**: Thread doesn't see latest value
**Solution**: Use volatile, synchronized, or locks

### ThreadLocal Memory Leak
**Symptom**: Memory grows over time
**Solution**: Call threadLocal.remove() in finally block

---

## RESOURCES & NEXT STEPS

**Study Materials**:
- Java Concurrency in Practice (Goetz et al.)
- Java Memory Model specification
- ExecutorService documentation

**Practice Areas**:
- Implement thread-safe data structures
- Design concurrent applications
- Optimize for scalability
- Debug concurrency issues

**Day 20 Preparation**:
- Review synchronization patterns
- Practice lock-free algorithms
- Study performance optimization techniques

---

**Day 19 Completion**: ✅ COMPREHENSIVE CONCURRENCY MASTERY ACHIEVED
