# ☕ Complete Java Syllabus - Job Ready Guide

## 🎯 Job-Focused Learning Strategy
- **Interview-First Approach**: Every concept tied to interview questions
- **Minimal Code Maximum Impact**: Essential patterns only
- **Real Company Questions**: Based on FAANG/Product companies

---

## 📋 PHASE 1: CORE JAVA (Week 1-2)

### 1.1 Java Fundamentals
```java
// Data Types - Interview Essential
byte b = 127; short s = 32767; int i = 2147483647; long l = 9223372036854775807L;
float f = 3.14f; double d = 3.14159; char c = 'A'; boolean flag = true;

// String Pool Concept - Frequently Asked
String s1 = "Hello"; // String pool
String s2 = new String("Hello"); // Heap
System.out.println(s1 == s2); // false
System.out.println(s1.equals(s2)); // true
```

**Interview Questions:**
- Difference between `==` and `equals()`
- String pool vs heap memory
- Wrapper classes autoboxing/unboxing

### 1.2 Arrays & Collections Basics
```java
// Array Declaration - 3 Ways
int[] arr1 = new int[5];
int[] arr2 = {1, 2, 3, 4, 5};
int[] arr3 = new int[]{1, 2, 3, 4, 5};

// 2D Array
int[][] matrix = {{1,2}, {3,4}};

// ArrayList vs Array
List<Integer> list = new ArrayList<>();
list.add(10); // Dynamic sizing
```

---

## 📋 PHASE 2: OOP MASTERY (Week 2-3)

### 2.1 Classes & Objects
```java
public class Employee {
    private String name; // Encapsulation
    private static int count = 0; // Static variable
    
    public Employee(String name) { // Constructor
        this.name = name;
        count++;
    }
    
    public static int getCount() { return count; } // Static method
    public String getName() { return name; } // Getter
}
```

### 2.2 Inheritance & Polymorphism
```java
// Inheritance
class Animal {
    protected void eat() { System.out.println("Animal eating"); }
}

class Dog extends Animal {
    @Override
    public void eat() { System.out.println("Dog eating"); } // Method Overriding
    
    public void eat(String food) { } // Method Overloading
}

// Runtime Polymorphism
Animal animal = new Dog();
animal.eat(); // Calls Dog's eat method
```

### 2.3 Abstract Classes vs Interfaces
```java
// Abstract Class - Partial Implementation
abstract class Shape {
    abstract double area(); // Must implement
    void display() { System.out.println("Shape"); } // Can have concrete methods
}

// Interface - Contract
interface Drawable {
    void draw(); // public abstract by default
    default void print() { } // Java 8+ default method
    static void info() { } // Java 8+ static method
}

class Circle extends Shape implements Drawable {
    private double radius;
    
    @Override
    double area() { return Math.PI * radius * radius; }
    
    @Override
    public void draw() { System.out.println("Drawing circle"); }
}
```

**Key Interview Points:**
- Abstract class can have constructors, interfaces cannot
- Multiple inheritance through interfaces only
- When to use abstract class vs interface

---

## 📋 PHASE 3: EXCEPTION HANDLING (Week 3)

### 3.1 Exception Hierarchy & Handling
```java
// Exception Hierarchy
// Throwable -> Exception -> RuntimeException (Unchecked)
//           -> Exception -> IOException (Checked)

// Try-Catch-Finally
public void readFile(String filename) {
    try {
        FileReader file = new FileReader(filename);
        // risky code
    } catch (FileNotFoundException e) {
        System.out.println("File not found: " + e.getMessage());
    } catch (IOException e) {
        System.out.println("IO Error: " + e.getMessage());
    } finally {
        // cleanup code - always executes
    }
}

// Try-with-resources (Java 7+)
try (FileReader file = new FileReader("file.txt")) {
    // auto-closeable resources
} catch (IOException e) {
    e.printStackTrace();
}

// Custom Exception
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}
```

---

## 📋 PHASE 4: COLLECTIONS FRAMEWORK (Week 4)

### 4.1 Collection Hierarchy & Performance
```java
// List - Ordered, Duplicates allowed
List<String> arrayList = new ArrayList<>(); // O(1) access, O(n) insertion
List<String> linkedList = new LinkedList<>(); // O(n) access, O(1) insertion

// Set - No duplicates
Set<String> hashSet = new HashSet<>(); // O(1) operations, no order
Set<String> treeSet = new TreeSet<>(); // O(log n) operations, sorted
Set<String> linkedHashSet = new LinkedHashSet<>(); // O(1) + insertion order

// Map - Key-Value pairs
Map<String, Integer> hashMap = new HashMap<>(); // O(1) operations
Map<String, Integer> treeMap = new TreeMap<>(); // O(log n) operations, sorted keys
```

### 4.2 Essential Collection Operations
```java
// HashMap Operations - Most Important for Interviews
Map<String, Integer> map = new HashMap<>();
map.put("apple", 10);
map.putIfAbsent("banana", 20);
map.getOrDefault("orange", 0);
map.compute("apple", (k, v) -> v + 1);
map.merge("grape", 1, Integer::sum);

// Iteration - 4 Ways
for (String key : map.keySet()) { } // Keys
for (Integer value : map.values()) { } // Values
for (Map.Entry<String, Integer> entry : map.entrySet()) { } // Most efficient
map.forEach((k, v) -> System.out.println(k + "=" + v)); // Java 8+

// Collections Utility
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
Collections.sort(list);
Collections.reverse(list);
int index = Collections.binarySearch(list, 4);
```

---

## 📋 PHASE 5: GENERICS & TYPE SAFETY (Week 4)

### 5.1 Generic Classes & Methods
```java
// Generic Class
public class Box<T> {
    private T content;
    public void set(T content) { this.content = content; }
    public T get() { return content; }
}

// Generic Method
public static <T> void swap(T[] array, int i, int j) {
    T temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Bounded Generics
public static <T extends Number> double sum(List<T> numbers) {
    return numbers.stream().mapToDouble(Number::doubleValue).sum();
}
```

### 5.2 Wildcards - PECS Rule
```java
// Producer Extends, Consumer Super (PECS)
public void wildcardExample() {
    // ? extends T - Producer (can read)
    List<? extends Number> producer = Arrays.asList(1, 2.5, 3L);
    Number num = producer.get(0); // Can read
    // producer.add(4); // Cannot write
    
    // ? super T - Consumer (can write)
    List<? super Integer> consumer = new ArrayList<Number>();
    consumer.add(42); // Can write
    // Integer val = consumer.get(0); // Cannot read specific type
}
```

---

## 📋 PHASE 6: MULTITHREADING (Week 5)

### 6.1 Thread Creation & Lifecycle
```java
// Thread Creation - 3 Ways
class MyThread extends Thread {
    public void run() { System.out.println("Thread running"); }
}

class MyRunnable implements Runnable {
    public void run() { System.out.println("Runnable running"); }
}

// Lambda (Java 8+)
Thread t = new Thread(() -> System.out.println("Lambda thread"));

// Thread States: NEW -> RUNNABLE -> BLOCKED/WAITING/TIMED_WAITING -> TERMINATED
```

### 6.2 Synchronization - Critical for Interviews
```java
// Synchronized Method
public class Counter {
    private int count = 0;
    
    public synchronized void increment() { count++; }
    public synchronized int getCount() { return count; }
}

// Synchronized Block
private final Object lock = new Object();
public void method() {
    synchronized(lock) {
        // critical section
    }
}

// Producer-Consumer Pattern
class ProducerConsumer {
    private Queue<Integer> queue = new LinkedList<>();
    private final int MAX_SIZE = 5;
    
    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == MAX_SIZE) {
            wait(); // Release lock and wait
        }
        queue.offer(item);
        notifyAll(); // Wake up waiting threads
    }
    
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();
        }
        int item = queue.poll();
        notifyAll();
        return item;
    }
}
```

### 6.3 Concurrent Collections
```java
// Thread-Safe Collections
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
CopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();
BlockingQueue<String> blockingQueue = new ArrayBlockingQueue<>(10);

// Executor Framework
ExecutorService executor = Executors.newFixedThreadPool(3);
executor.submit(() -> System.out.println("Task executed"));
executor.shutdown();
```

---

## 📋 PHASE 7: MODERN JAVA (Week 6)

### 7.1 Lambda Expressions & Functional Interfaces
```java
// Functional Interfaces
Predicate<String> isEmpty = s -> s.isEmpty();
Function<String, Integer> length = s -> s.length();
Consumer<String> printer = s -> System.out.println(s);
Supplier<String> supplier = () -> "Hello World";

// Method References
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println); // Method reference
names.stream().map(String::toUpperCase).collect(Collectors.toList());
```

### 7.2 Stream API - Most Important for Modern Interviews
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter-Map-Collect Pattern
List<Integer> evenSquares = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .collect(Collectors.toList());

// Grouping
Map<Boolean, List<Integer>> partitioned = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));

// Reduce Operations
int sum = numbers.stream().reduce(0, Integer::sum);
Optional<Integer> max = numbers.stream().max(Integer::compareTo);

// Parallel Streams
numbers.parallelStream().forEach(System.out::println);
```

### 7.3 Optional - Null Safety
```java
// Optional Creation
Optional<String> empty = Optional.empty();
Optional<String> nonEmpty = Optional.of("Hello");
Optional<String> nullable = Optional.ofNullable(getString());

// Optional Chaining
String result = optional
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .orElse("DEFAULT");

// Method returning Optional
public Optional<User> findUserById(int id) {
    return id > 0 ? Optional.of(new User(id)) : Optional.empty();
}
```

---

## 📋 PHASE 8: ADVANCED TOPICS (Week 7)

### 8.1 Design Patterns - Interview Favorites
```java
// Singleton Pattern
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    
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

// Factory Pattern
interface Shape { void draw(); }
class Circle implements Shape { public void draw() { } }
class Rectangle implements Shape { public void draw() { } }

class ShapeFactory {
    public static Shape createShape(String type) {
        switch (type) {
            case "CIRCLE": return new Circle();
            case "RECTANGLE": return new Rectangle();
            default: throw new IllegalArgumentException("Unknown shape");
        }
    }
}

// Observer Pattern
interface Observer { void update(String message); }
class Subject {
    private List<Observer> observers = new ArrayList<>();
    public void addObserver(Observer observer) { observers.add(observer); }
    public void notifyObservers(String message) {
        observers.forEach(observer -> observer.update(message));
    }
}
```

### 8.2 JVM Internals - Senior Level Questions
```java
// Memory Areas
// Heap: Object storage, Garbage collected
// Stack: Method calls, local variables
// Method Area: Class metadata, static variables
// PC Register: Current instruction pointer

// Garbage Collection
// Young Generation: Eden, S0, S1
// Old Generation: Tenured space
// Permanent Generation/Metaspace: Class metadata

// Memory Leaks Prevention
WeakReference<Object> weakRef = new WeakReference<>(new Object());
// Use try-with-resources for auto-closeable resources
// Avoid static collections that grow indefinitely
```

---

## 🎯 INTERVIEW PREPARATION CHECKLIST

### Core Java (Must Know)
- [ ] String pool vs heap memory
- [ ] equals() and hashCode() contract
- [ ] Checked vs unchecked exceptions
- [ ] ArrayList vs LinkedList performance
- [ ] HashMap internal working
- [ ] Synchronization mechanisms
- [ ] Thread lifecycle and states

### Advanced Java (Senior Level)
- [ ] Generic wildcards (PECS rule)
- [ ] Stream API operations
- [ ] Optional best practices
- [ ] Concurrent collections
- [ ] Design patterns implementation
- [ ] JVM memory model
- [ ] Garbage collection types

### Coding Problems (Practice Daily)
```java
// Common Interview Problems
// 1. Two Sum using HashMap
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[0];
}

// 2. Singleton Thread-Safe Implementation
// 3. Producer-Consumer using BlockingQueue
// 4. Custom ArrayList implementation
// 5. LRU Cache using LinkedHashMap
```

---

## 📊 COMPANY-WISE FOCUS

### FAANG Companies
- **Google**: Multithreading, Collections, Stream API
- **Amazon**: OOP Design, Exception Handling, Generics
- **Microsoft**: Design Patterns, JVM Internals, Concurrency
- **Meta**: Modern Java Features, Lambda, Optional
- **Apple**: Core Java, Memory Management, Performance

### Product Companies
- **Uber/Ola**: Multithreading, Concurrent Collections
- **Flipkart/Amazon**: Collections Framework, Stream API
- **Paytm/PhonePe**: Exception Handling, Design Patterns
- **Zomato/Swiggy**: OOP Principles, Java 8 Features

---

## ⚡ RAPID REVISION (Last Week)

### Daily Quick Review (30 minutes)
```java
// Day 1: Core Java
String s1 = "Hello"; String s2 = new String("Hello");
System.out.println(s1 == s2); // false (reference)
System.out.println(s1.equals(s2)); // true (content)

// Day 2: Collections
Map<String, Integer> map = new HashMap<>();
map.computeIfAbsent("key", k -> 0);

// Day 3: Multithreading
synchronized(this) { /* critical section */ }

// Day 4: Modern Java
list.stream().filter(x -> x > 0).collect(Collectors.toList());

// Day 5: Design Patterns
Singleton.getInstance(); // Thread-safe singleton

// Day 6: Mock Interview
// Day 7: Final Review
```

**Success Formula**: Core Java (40%) + Collections (25%) + Multithreading (20%) + Modern Java (15%) = Job Ready! 🚀