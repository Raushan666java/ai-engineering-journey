# 🔧 Generics & Multithreading - Quick Study Notes

## 🎯 Learning Strategy
- **Type Safety First**: Always think about compile-time safety
- **Concurrency Visualization**: Draw thread interaction diagrams
- **Real-world Examples**: Connect to actual multithreading scenarios

## 1. Generics

### Generic Classes
```java
// Generic class definition
public class Box<T> {
    private T content;
    
    public void set(T content) {
        this.content = content;
    }
    
    public T get() {
        return content;
    }
}

// Usage
Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String value = stringBox.get(); // No casting needed

Box<Integer> intBox = new Box<>();
intBox.set(42);
Integer number = intBox.get();
```

### Type Erasure
```java
// What happens during compilation
public class Box<T> {
    private T content;
    
    public void set(T content) {
        this.content = content;
    }
    
    public T get() {
        return content;
    }
}

// After type erasure (what the JVM sees)
public class Box {
    private Object content;
    
    public void set(Object content) {
        this.content = content;
    }
    
    public Object get() {
        return content;
    }
}

// Implications of type erasure
public class TypeErasureExample {
    // Cannot overload based on generic type parameters
    public void process(List<String> stringList) { }
    // public void process(List<Integer> intList) { } // Compile error!
    
    // Cannot use instanceof with generic types
    public void checkType(Object obj) {
        // if (obj instanceof List<String>) { } // Compile error!
        if (obj instanceof List<?>) { } // OK - can check raw type
    }
    
    // Cannot create arrays of generic types
    // List<String>[] array = new List<String>[10]; // Compile error!
    List<?>[] array = new List<?>[10]; // OK - wildcard works
}
```

### Generic Methods
```java
public class GenericMethods {
    
    // Generic method
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    // Multiple type parameters
    public static <T, U> void printPair(T first, U second) {
        System.out.println("First: " + first + ", Second: " + second);
    }
    
    // Bounded type parameters
    public static <T extends Number> double sum(T[] numbers) {
        double total = 0.0;
        for (T num : numbers) {
            total += num.doubleValue();
        }
        return total;
    }
}

// Usage
String[] names = {"Alice", "Bob"};
GenericMethods.swap(names, 0, 1);

GenericMethods.printPair("Hello", 42);

Integer[] nums = {1, 2, 3, 4, 5};
double result = GenericMethods.sum(nums);
```

### Wildcards
```java
public class WildcardExamples {
    
    // Upper bounded wildcard (? extends)
    public static double sumNumbers(List<? extends Number> numbers) {
        double sum = 0.0;
        for (Number num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    // Lower bounded wildcard (? super)
    public static void addNumbers(List<? super Integer> numbers) {
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
    }
    
    // Unbounded wildcard (?)
    public static void printList(List<?> list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
    
    public static void wildcardUsage() {
        // Upper bounded - can read as Number
        List<Integer> intList = Arrays.asList(1, 2, 3);
        List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3);
        
        double sum1 = sumNumbers(intList);    // Works
        double sum2 = sumNumbers(doubleList); // Works
        
        // Lower bounded - can add Integer
        List<Number> numberList = new ArrayList<>();
        List<Object> objectList = new ArrayList<>();
        
        addNumbers(numberList); // Works
        addNumbers(objectList); // Works
        
        // Unbounded - can read as Object
        printList(intList);
        printList(Arrays.asList("a", "b", "c"));
    }
}
```

### Generic Interfaces
```java
// Generic interface
public interface Comparable<T> {
    int compareTo(T other);
}

// Implementation
public class Student implements Comparable<Student> {
    private String name;
    private int grade;
    
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    
    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.grade, other.grade);
    }
}

// Generic interface with multiple parameters
public interface Pair<T, U> {
    T getFirst();
    U getSecond();
    void setFirst(T first);
    void setSecond(U second);
}

public class OrderedPair<T, U> implements Pair<T, U> {
    private T first;
    private U second;
    
    public OrderedPair(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    @Override
    public T getFirst() { return first; }
    
    @Override
    public U getSecond() { return second; }
    
    @Override
    public void setFirst(T first) { this.first = first; }
    
    @Override
    public void setSecond(U second) { this.second = second; }
}
```

### Memory Trick for Wildcards
- **? extends T**: "Producer Extends" - can only READ (produce) values
- **? super T**: "Consumer Super" - can only WRITE (consume) values
- **PECS**: Producer Extends, Consumer Super

## 2. Multithreading Basics

### Thread Creation
```java
// Method 1: Extending Thread class
public class MyThread extends Thread {
    private String threadName;
    
    public MyThread(String name) {
        this.threadName = name;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(threadName + " - Count: " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted");
            }
        }
    }
}

// Method 2: Implementing Runnable interface (Preferred)
public class MyRunnable implements Runnable {
    private String threadName;
    
    public MyRunnable(String name) {
        this.threadName = name;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(threadName + " - Count: " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted");
            }
        }
    }
}

// Usage
public class ThreadExample {
    public static void main(String[] args) {
        // Method 1
        MyThread thread1 = new MyThread("Thread-1");
        thread1.start();
        
        // Method 2
        Thread thread2 = new Thread(new MyRunnable("Thread-2"));
        thread2.start();
        
        // Method 3: Lambda expression (Java 8+)
        Thread thread3 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Lambda Thread - Count: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        });
        thread3.start();
    }
}
```

### Thread Lifecycle
```java
public class ThreadLifecycleExample {
    public static void demonstrateLifecycle() {
        Thread thread = new Thread(() -> {
            System.out.println("Thread is running");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
            System.out.println("Thread finished");
        });
        
        System.out.println("State: " + thread.getState()); // NEW
        
        thread.start();
        System.out.println("State: " + thread.getState()); // RUNNABLE
        
        try {
            Thread.sleep(500);
            System.out.println("State: " + thread.getState()); // TIMED_WAITING
            
            thread.join(); // Wait for thread to complete
            System.out.println("State: " + thread.getState()); // TERMINATED
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

## 3. Synchronization

### Synchronized Methods
```java
public class Counter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    public synchronized void decrement() {
        count--;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

// Usage
public class SynchronizedExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        // Create multiple threads that increment counter
        Thread[] threads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            });
            threads[i].start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            thread.join();
        }
        
        System.out.println("Final count: " + counter.getCount()); // Should be 10000
    }
}
```

### Thread Safety with Atomic Classes
```java
import java.util.concurrent.atomic.*;

public class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet(); // Atomic operation
    }
    
    public void decrement() {
        count.decrementAndGet(); // Atomic operation
    }
    
    public int getCount() {
        return count.get();
    }
    
    // Compare and set operations
    public void updateIfEquals(int expected, int update) {
        count.compareAndSet(expected, update);
    }
}

// Other atomic classes
public class AtomicExamples {
    public void demonstrateAtomics() {
        // Atomic primitives
        AtomicInteger atomicInt = new AtomicInteger(0);
        AtomicLong atomicLong = new AtomicLong(0L);
        AtomicBoolean atomicBool = new AtomicBoolean(false);
        
        // Atomic references
        AtomicReference<String> atomicRef = new AtomicReference<>("initial");
        atomicRef.set("updated");
        String value = atomicRef.get();
        
        // Atomic arrays
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10);
        atomicArray.set(5, 100);
        int arrayValue = atomicArray.get(5);
        
        // Atomic field updaters
        AtomicIntegerFieldUpdater<SomeClass> updater = 
            AtomicIntegerFieldUpdater.newUpdater(SomeClass.class, "someField");
    }
}

class SomeClass {
    volatile int someField;
}
```

### Thread Safety with Atomic Classes
```java
import java.util.concurrent.atomic.*;

public class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet(); // Atomic operation
    }
    
    public void decrement() {
        count.decrementAndGet(); // Atomic operation
    }
    
    public int getCount() {
        return count.get();
    }
    
    // Compare and set operations
    public void updateIfEquals(int expected, int update) {
        count.compareAndSet(expected, update);
    }
}

// Other atomic classes
public class AtomicExamples {
    public void demonstrateAtomics() {
        // Atomic primitives
        AtomicInteger atomicInt = new AtomicInteger(0);
        AtomicLong atomicLong = new AtomicLong(0L);
        AtomicBoolean atomicBool = new AtomicBoolean(false);
        
        // Atomic references
        AtomicReference<String> atomicRef = new AtomicReference<>("initial");
        atomicRef.set("updated");
        String value = atomicRef.get();
        
        // Atomic arrays
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10);
        atomicArray.set(5, 100);
        int arrayValue = atomicArray.get(5);
        
        // Atomic field updaters
        AtomicIntegerFieldUpdater<SomeClass> updater = 
            AtomicIntegerFieldUpdater.newUpdater(SomeClass.class, "someField");
    }
}

class SomeClass {
    volatile int someField;
}
```

### Synchronized Blocks
```java
public class SynchronizedBlockExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();
    private int count1 = 0;
    private int count2 = 0;
    
    public void incrementCount1() {
        synchronized (lock1) {
            count1++;
        }
    }
    
    public void incrementCount2() {
        synchronized (lock2) {
            count2++;
        }
    }
    
    // Class-level synchronization
    public static synchronized void staticMethod() {
        // Synchronized on Class object
    }
    
    // Equivalent to above
    public static void staticMethodEquivalent() {
        synchronized (SynchronizedBlockExample.class) {
            // Synchronized on Class object
        }
    }
}
```

### Wait, Notify, NotifyAll
```java
public class ProducerConsumerExample {
    private final Object lock = new Object();
    private boolean dataReady = false;
    private String data;
    
    // Producer method
    public void produce(String newData) {
        synchronized (lock) {
            while (dataReady) {
                try {
                    lock.wait(); // Wait until data is consumed
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
            
            this.data = newData;
            dataReady = true;
            System.out.println("Produced: " + data);
            lock.notifyAll(); // Notify waiting consumers
        }
    }
    
    // Consumer method
    public String consume() {
        synchronized (lock) {
            while (!dataReady) {
                try {
                    lock.wait(); // Wait until data is available
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return null;
                }
            }
            
            String consumedData = this.data;
            dataReady = false;
            System.out.println("Consumed: " + consumedData);
            lock.notifyAll(); // Notify waiting producers
            return consumedData;
        }
    }
}
```

## 4. Concurrent Collections

### Thread-Safe Collections
```java
import java.util.concurrent.*;

public class ConcurrentCollectionsExample {
    public void demonstrateConcurrentCollections() {
        // ConcurrentHashMap - Thread-safe HashMap
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        concurrentMap.put("key1", 1);
        concurrentMap.putIfAbsent("key2", 2);
        
        // Atomic operations
        concurrentMap.compute("key1", (key, value) -> value + 1);
        concurrentMap.merge("key3", 1, Integer::sum);
        
        // CopyOnWriteArrayList - Thread-safe ArrayList (read-heavy scenarios)
        CopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();
        cowList.add("item1");
        cowList.add("item2");
        
        // BlockingQueue - Producer-Consumer scenarios
        BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);
        
        // Producer
        new Thread(() -> {
            try {
                for (int i = 0; i < 5; i++) {
                    queue.put("Item " + i);
                    System.out.println("Produced: Item " + i);
                    Thread.sleep(1000);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
        
        // Consumer
        new Thread(() -> {
            try {
                for (int i = 0; i < 5; i++) {
                    String item = queue.take();
                    System.out.println("Consumed: " + item);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
    }
}
```

### Executor Framework
```java
import java.util.concurrent.*;

public class ExecutorExample {
    public void demonstrateExecutors() {
        // Different types of thread pools
        ExecutorService fixedPool = Executors.newFixedThreadPool(3); // Fixed number of threads
        ExecutorService cachedPool = Executors.newCachedThreadPool(); // Creates threads as needed
        ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor(); // Single thread
        ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(2); // For scheduled tasks
        
        // Submit tasks
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            fixedPool.submit(() -> {
                System.out.println("Task " + taskId + " executed by " + 
                                 Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        // Scheduled tasks
        scheduledPool.schedule(() -> System.out.println("Delayed task"), 2, TimeUnit.SECONDS);
        scheduledPool.scheduleAtFixedRate(() -> System.out.println("Repeated task"), 0, 3, TimeUnit.SECONDS);
        
        // Shutdown executor
        fixedPool.shutdown();
        try {
            if (!fixedPool.awaitTermination(60, TimeUnit.SECONDS)) {
                fixedPool.shutdownNow();
            }
        } catch (InterruptedException e) {
            fixedPool.shutdownNow();
        }
        
        // Callable and Future
        ExecutorService executor = Executors.newSingleThreadExecutor();
        
        Callable<Integer> task = () -> {
            Thread.sleep(2000);
            return 42;
        };
        
        Future<Integer> future = executor.submit(task);
        
        try {
            // Check if task is done
            System.out.println("Is task done? " + future.isDone());
            
            // Try to cancel task
            // future.cancel(true);
            // System.out.println("Is task cancelled? " + future.isCancelled());
            
            // Get result with timeout
            Integer result = future.get(3, TimeUnit.SECONDS);
            System.out.println("Result: " + result);
        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            e.printStackTrace();
        }
        
        // CompletableFuture (Java 8+)
        CompletableFuture<String> completableFuture = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return "Result from async computation";
        });
        
        // Chain operations
        CompletableFuture<String> future2 = completableFuture
            .thenApply(s -> s + " - processed")
            .thenApply(String::toUpperCase);
        
        // Handle results
        future2.thenAccept(System.out::println);
        
        executor.shutdown();
    }
}
```

## 🧠 Quick Learning Techniques

### 1. Memory Aids
- **Generics**: "Type Safety at Compile Time"
- **? extends**: "Can READ, Cannot WRITE"
- **? super**: "Can WRITE, Cannot READ"
- **Synchronized**: "One Thread at a Time"
- **Wait/Notify**: "Producer-Consumer Communication"

### 2. Thread States Mnemonic
**"New Runnable Blocked Waiting Timed-Waiting Terminated"**
- **NEW**: Thread created but not started
- **RUNNABLE**: Thread executing or ready to execute
- **BLOCKED**: Thread blocked waiting for monitor lock
- **WAITING**: Thread waiting indefinitely
- **TIMED_WAITING**: Thread waiting for specified time
- **TERMINATED**: Thread completed execution

### 3. Synchronization Rules
1. **Synchronized methods**: Lock on object instance
2. **Static synchronized methods**: Lock on Class object
3. **Synchronized blocks**: Lock on specified object
4. **Wait/Notify**: Must be called within synchronized context

## 📝 Practice Problems (35 minutes daily)

### Generics Practice
1. Create generic Stack class with push/pop operations
2. Implement generic method to find maximum element
3. Create bounded generic class for numeric operations
4. Use wildcards to create utility methods for collections

### Multithreading Practice
1. Implement producer-consumer using wait/notify
2. Create thread-safe singleton class
3. Implement parallel sum calculation using multiple threads
4. Design a simple thread pool implementation

### Code Templates
```java
// Generic class template
public class GenericClass<T extends SomeClass> {
    private T data;
    
    public void setData(T data) {
        this.data = data;
    }
    
    public T getData() {
        return data;
    }
}

// Thread-safe class template
public class ThreadSafeClass {
    private final Object lock = new Object();
    private volatile boolean flag = false;
    
    public void synchronizedMethod() {
        synchronized (lock) {
            // Critical section
        }
    }
}

// Producer-Consumer template
public class ProducerConsumer {
    private final Object lock = new Object();
    private Queue<Item> queue = new LinkedList<>();
    private final int MAX_SIZE = 10;
    
    public void produce(Item item) {
        synchronized (lock) {
            while (queue.size() == MAX_SIZE) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
            queue.offer(item);
            lock.notifyAll();
        }
    }
    
    public Item consume() {
        synchronized (lock) {
            while (queue.isEmpty()) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return null;
                }
            }
            Item item = queue.poll();
            lock.notifyAll();
            return item;
        }
    }
}
```

## 🎯 Daily Review Checklist
- [ ] Understand generic syntax and wildcards
- [ ] Know when to use bounded type parameters
- [ ] Can create and manage threads properly
- [ ] Understand synchronization mechanisms
- [ ] Know thread-safe collection alternatives
- [ ] Can implement producer-consumer pattern

## ⚡ Speed Learning Tips
1. **Type Safety Focus**: Always think about compile-time vs runtime
2. **Thread Visualization**: Draw diagrams of thread interactions
3. **Synchronization Practice**: Code different synchronization scenarios
4. **Concurrent Collections**: Know when to use each type
5. **Executor Framework**: Prefer executors over raw threads

## 🔗 Next Topic Preview
**Modern Java Features**: Lambda expressions, Stream API, Optional, Date/Time API