# 📚 Java Programming - Quick Concepts Guide

## 🎯 Core Java Concepts & Patterns

### 1. **Java Fundamentals**
```java
// Primitive Data Types
byte b = 127;        // 8-bit, -128 to 127
short s = 32767;     // 16-bit, -32,768 to 32,767
int i = 2147483647;  // 32-bit, -2^31 to 2^31-1
long l = 9223372036854775807L; // 64-bit
float f = 3.14f;     // 32-bit floating point
double d = 3.141592653589793; // 64-bit floating point
char c = 'A';        // 16-bit Unicode
boolean bool = true; // true/false

// Reference Types
String str = "Hello World";
int[] arr = new int[5];
Object obj = new Object();
```

**Memory Allocation:**
- **Stack**: Primitive variables, method calls, references
- **Heap**: Objects, arrays, instance variables
- **String Pool**: String literals for memory efficiency

### 2. **Object-Oriented Programming (OOP)**

#### **Four Pillars of OOP:**
```java
// 1. Encapsulation
public class BankAccount {
    private double balance; // Private field

    public void deposit(double amount) { // Public method
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() { // Controlled access
        return balance;
    }
}

// 2. Inheritance
public class Animal {
    protected String name;

    public void eat() {
        System.out.println("Eating...");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Woof!");
    }
}

// 3. Polymorphism
public class Shape {
    public double area() {
        return 0;
    }
}

public class Circle extends Shape {
    private double radius;

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

// 4. Abstraction
public abstract class Vehicle {
    public abstract void start();
    public abstract void stop();

    public void honk() {
        System.out.println("Beep beep!");
    }
}

public class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car starting...");
    }

    @Override
    public void stop() {
        System.out.println("Car stopping...");
    }
}
```

### 3. **Collections Framework**

#### **List Implementations:**
```java
// ArrayList - Fast random access, slow insertions/deletions
List<String> arrayList = new ArrayList<>();
arrayList.add("A"); arrayList.add("B"); arrayList.add("C");
String element = arrayList.get(1); // O(1)

// LinkedList - Fast insertions/deletions, slow random access
List<String> linkedList = new LinkedList<>();
linkedList.addFirst("A"); linkedList.addLast("C");
linkedList.add(1, "B"); // O(1) for add/remove at ends

// Vector - Synchronized ArrayList (legacy)
Vector<String> vector = new Vector<>();
```

#### **Set Implementations:**
```java
// HashSet - Fast lookup, no duplicates, unordered
Set<String> hashSet = new HashSet<>();
hashSet.add("A"); hashSet.add("B"); hashSet.add("A"); // Only one "A"

// LinkedHashSet - Maintains insertion order
Set<String> linkedHashSet = new LinkedHashSet<>();

// TreeSet - Sorted, implements NavigableSet
Set<String> treeSet = new TreeSet<>();
treeSet.add("C"); treeSet.add("A"); treeSet.add("B");
// Iteration: A, B, C
```

#### **Map Implementations:**
```java
// HashMap - Fast lookup, unordered
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Alice", 25);
hashMap.put("Bob", 30);
int age = hashMap.get("Alice"); // O(1) average

// LinkedHashMap - Maintains insertion order
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

// TreeMap - Sorted keys
Map<String, Integer> treeMap = new TreeMap<>();
// Keys automatically sorted
```

### 4. **Generics**

#### **Generic Classes:**
```java
public class Box<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }
}

// Usage
Box<String> stringBox = new Box<>();
Box<Integer> intBox = new Box<>();
```

#### **Generic Methods:**
```java
public class Utility {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}
```

#### **Wildcards:**
```java
// Unbounded wildcard
public void printList(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
}

// Upper bounded wildcard
public double sumOfList(List<? extends Number> list) {
    double sum = 0.0;
    for (Number num : list) {
        sum += num.doubleValue();
    }
    return sum;
}

// Lower bounded wildcard
public void addNumbers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    list.add(3);
}
```

### 5. **Exception Handling**

#### **Exception Hierarchy:**
```java
Throwable
├── Exception (Checked)
│   ├── IOException
│   ├── SQLException
│   └── Custom exceptions
└── RuntimeException (Unchecked)
    ├── NullPointerException
    ├── IllegalArgumentException
    ├── IndexOutOfBoundsException
    └── Custom runtime exceptions
```

#### **Try-Catch-Finally:**
```java
public void readFile(String fileName) {
    FileReader reader = null;
    try {
        reader = new FileReader(fileName);
        // Read file operations
        int data = reader.read();
        while (data != -1) {
            System.out.print((char) data);
            data = reader.read();
        }
    } catch (FileNotFoundException e) {
        System.err.println("File not found: " + e.getMessage());
    } catch (IOException e) {
        System.err.println("Error reading file: " + e.getMessage());
    } finally {
        if (reader != null) {
            try {
                reader.close();
            } catch (IOException e) {
                System.err.println("Error closing file: " + e.getMessage());
            }
        }
    }
}
```

#### **Try-With-Resources (Java 7+):**
```java
public void readFileModern(String fileName) {
    try (FileReader reader = new FileReader(fileName);
         BufferedReader br = new BufferedReader(reader)) {

        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }

    } catch (IOException e) {
        System.err.println("Error reading file: " + e.getMessage());
    }
    // Resources automatically closed
}
```

### 6. **Multithreading**

#### **Thread Creation:**
```java
// Method 1: Extend Thread class
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

// Usage
MyThread thread = new MyThread();
thread.start(); // Don't call run() directly

// Method 2: Implement Runnable interface
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable running: " + Thread.currentThread().getName());
    }
}

// Usage
Thread thread2 = new Thread(new MyRunnable());
thread2.start();
```

#### **Synchronization:**
```java
public class Counter {
    private int count = 0;

    // Synchronized method
    public synchronized void increment() {
        count++;
    }

    // Synchronized block
    public void incrementBlock() {
        synchronized (this) {
            count++;
        }
    }

    // Static synchronization
    public static synchronized void staticMethod() {
        // Class-level lock
    }
}
```

#### **Producer-Consumer Pattern:**
```java
public class ProducerConsumer {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int CAPACITY = 5;

    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == CAPACITY) {
            wait(); // Wait for consumer
        }
        queue.add(item);
        System.out.println("Produced: " + item);
        notifyAll(); // Notify consumers
    }

    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait(); // Wait for producer
        }
        int item = queue.remove();
        System.out.println("Consumed: " + item);
        notifyAll(); // Notify producers
        return item;
    }
}
```

### 7. **Modern Java Features (Java 8+)**

#### **Lambda Expressions:**
```java
// Traditional approach
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Collections.sort(names, new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// Lambda approach
Collections.sort(names, (a, b) -> a.compareTo(b));

// Even shorter with method reference
Collections.sort(names, String::compareTo);
```

#### **Stream API:**
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter, map, and collect
List<Integer> evenSquares = numbers.stream()
    .filter(n -> n % 2 == 0)        // Keep even numbers
    .map(n -> n * n)                // Square them
    .collect(Collectors.toList());  // Collect to list

// Grouping and aggregation
Map<Integer, List<Integer>> groupedByLength = names.stream()
    .collect(Collectors.groupingBy(String::length));

// Parallel processing
int sum = numbers.parallelStream()
    .mapToInt(Integer::intValue)
    .sum();
```

#### **Optional Class:**
```java
public class UserService {
    private Map<String, User> users = new HashMap<>();

    // Traditional approach (prone to NPE)
    public String getUserName(String id) {
        User user = users.get(id);
        return user != null ? user.getName() : null;
    }

    // Optional approach
    public Optional<String> getUserNameOptional(String id) {
        return Optional.ofNullable(users.get(id))
                      .map(User::getName);
    }

    // Usage
    Optional<String> name = getUserNameOptional("123");
    String result = name.orElse("Unknown User");
    name.ifPresent(n -> System.out.println("User: " + n));
}
```

#### **New Date/Time API:**
```java
import java.time.*;

// LocalDate, LocalTime, LocalDateTime
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime current = LocalDateTime.now();

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String formatted = current.format(formatter);

// Parsing
LocalDate parsed = LocalDate.parse("2023-12-25");

// Duration and Period
Duration duration = Duration.between(LocalTime.of(9, 0), LocalTime.of(17, 0));
Period period = Period.between(LocalDate.of(2023, 1, 1), LocalDate.of(2024, 1, 1));

// ZonedDateTime for time zones
ZonedDateTime zoned = ZonedDateTime.now(ZoneId.of("America/New_York"));
```

### 8. **Design Patterns**

#### **Singleton Pattern:**
```java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {} // Private constructor

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

#### **Factory Pattern:**
```java
public interface Shape {
    void draw();
}

public class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

public class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

public class ShapeFactory {
    public static Shape createShape(String type) {
        switch (type.toLowerCase()) {
            case "circle": return new Circle();
            case "rectangle": return new Rectangle();
            default: throw new IllegalArgumentException("Unknown shape type");
        }
    }
}
```

#### **Observer Pattern:**
```java
import java.util.*;

// Subject interface
public interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Observer interface
public interface Observer {
    void update(String message);
}

// Concrete subject
public class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }

    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }
}

// Concrete observer
public class NewsChannel implements Observer {
    private String name;

    public NewsChannel(String name) {
        this.name = name;
    }

    @Override
    public void update(String news) {
        System.out.println(name + " received news: " + news);
    }
}
```

### 9. **Memory Management & Garbage Collection**

#### **JVM Memory Areas:**
```java
// Method Area (Class metadata, static variables)
// Heap (Objects, instance variables)
// Stack (Method calls, local variables)
// Program Counter (Current instruction)
// Native Method Stack (Native method calls)
```

#### **Garbage Collection:**
```java
// Different GC algorithms
// 1. Serial GC: Single thread, good for small applications
// 2. Parallel GC: Multiple threads, good for batch processing
// 3. CMS (Concurrent Mark Sweep): Low pause times
// 4. G1 GC: Regionalized heap, good for large heaps

// Manual GC (not recommended)
System.gc(); // Hint to JVM to run GC

// Memory monitoring
Runtime runtime = Runtime.getRuntime();
long totalMemory = runtime.totalMemory();
long freeMemory = runtime.freeMemory();
long usedMemory = totalMemory - freeMemory;
```

### 10. **Performance Optimization**

#### **String Operations:**
```java
// Inefficient (creates multiple objects)
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i; // Creates new String object each time
}

// Efficient
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();
```

#### **Collection Performance:**
```java
// Choose the right collection for your use case
// ArrayList: Fast random access, slow insertions/deletions
// LinkedList: Fast insertions/deletions, slow random access
// HashSet: Fast lookup, no order guarantee
// TreeSet: Ordered, slower operations
// HashMap: Fast key-value lookup
// TreeMap: Sorted keys, slower operations
```

#### **Avoiding Common Performance Issues:**
```java
// 1. String concatenation in loops
// 2. Unnecessary object creation
// 3. Inefficient collection usage
// 4. Memory leaks (forgotten listeners, static collections)
// 5. Inefficient algorithms
```

### 11. **Java Best Practices**

#### **Code Style:**
```java
// Use meaningful variable names
int numberOfStudents = 25; // Good
int n = 25;               // Bad

// Use constants for magic numbers
public static final int MAX_STUDENTS = 30;
public static final double PI = 3.14159;

// Use proper access modifiers
private int salary;     // Encapsulation
public void setSalary(int salary) { // Controlled access
    if (salary > 0) {
        this.salary = salary;
    }
}
```

#### **Error Handling:**
```java
// Prefer specific exceptions over generic ones
public void processFile(String fileName) throws IOException {
    // Specific exception type
}

// Use try-with-resources for automatic resource management
try (FileInputStream fis = new FileInputStream(fileName)) {
    // Use fis
} catch (IOException e) {
    // Handle exception
}
```

#### **Documentation:**
```java
/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param n the number to calculate factorial for
 * @return the factorial of n
 * @throws IllegalArgumentException if n is negative
 */
public long factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n must be non-negative");
    }
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1);
}
```

### 12. **Interview Patterns & Tips**

#### **Common Interview Topics:**
1. **String Manipulation**: Reverse, palindrome, anagram checks
2. **Array Operations**: Sorting, searching, duplicate finding
3. **Collection Usage**: Choosing right data structures
4. **OOP Design**: Class design, inheritance vs composition
5. **Multithreading**: Producer-consumer, deadlock prevention
6. **Exception Handling**: Proper error management
7. **Memory Management**: Understanding JVM, GC concepts

#### **Problem-Solving Approach:**
```java
// 1. Understand the problem clearly
// 2. Identify constraints and edge cases
// 3. Choose appropriate data structures
// 4. Write clean, readable code
// 5. Test with various inputs
// 6. Consider time and space complexity

public class ProblemSolver {
    public void solveProblem() {
        // Step 1: Read and understand requirements

        // Step 2: Plan your approach
        // - What data structures to use?
        // - What algorithm to apply?
        // - Edge cases to handle?

        // Step 3: Implement solution
        // - Write clean, well-documented code
        // - Handle edge cases
        // - Consider performance

        // Step 4: Test thoroughly
        // - Normal cases
        // - Edge cases
        // - Error conditions
    }
}
```

#### **Key Interview Concepts:**
- **Big O Notation**: Time and space complexity analysis
- **Data Structures**: Arrays, Lists, Sets, Maps, Trees, Graphs
- **Algorithms**: Sorting, searching, dynamic programming basics
- **Design Patterns**: Singleton, Factory, Observer, Strategy
- **JVM Internals**: Memory management, garbage collection
- **Concurrency**: Threads, synchronization, locks
- **Modern Java**: Lambdas, streams, Optional, new APIs

---

**Remember**: Java is a vast language with many features. Focus on understanding core concepts deeply rather than memorizing syntax. Practice regularly and build projects to reinforce learning. Stay updated with the latest Java versions and features.