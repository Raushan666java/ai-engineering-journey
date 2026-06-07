# 🎯 Java Interview Questions Bank - Company Wise

## 🚀 FAANG Level Questions

### GOOGLE - Advanced Java Concepts

#### Q1: Explain HashMap internal working with collision handling
```java
// HashMap uses array of buckets, each bucket is a linked list (Java 8: tree after threshold)
public class HashMapInternals {
    // Simplified HashMap structure
    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;
        
        Node(int hash, K key, V value, Node<K,V> next) {
            this.hash = hash;
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }
    
    // Hash function
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
    
    // Index calculation
    static int indexFor(int hash, int length) {
        return hash & (length - 1); // Equivalent to hash % length for power of 2
    }
}
```
**Answer Points:**
- Uses array of buckets (default 16)
- Hash collision handled by chaining (linked list)
- Java 8+: Tree structure when bucket size > 8
- Load factor 0.75, rehashing when exceeded
- Time complexity: O(1) average, O(n) worst case

#### Q2: Why String is immutable? What are the benefits?
```java
public final class String {
    private final char[] value; // Immutable array
    private int hash; // Cached hash code
    
    // String pool example
    public static void stringPoolDemo() {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        
        System.out.println(s1 == s2);     // true (same reference)
        System.out.println(s1 == s3);     // false (different objects)
        System.out.println(s1.equals(s3)); // true (same content)
    }
}
```
**Benefits:**
- String pool optimization
- Thread safety
- Hashcode caching
- Security (can't be modified after creation)

### AMAZON - Multithreading & Concurrency

#### Q3: Implement thread-safe Singleton with lazy initialization
```java
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {
        // Prevent reflection attack
        if (instance != null) {
            throw new RuntimeException("Use getInstance() method");
        }
    }
    
    // Double-checked locking
    public static ThreadSafeSingleton getInstance() {
        if (instance == null) {
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}

// Alternative: Enum Singleton (Best approach)
public enum EnumSingleton {
    INSTANCE;
    
    public void doSomething() {
        // Business logic
    }
}
```

#### Q4: Producer-Consumer problem using BlockingQueue
```java
public class ProducerConsumerBlockingQueue {
    private final BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);
    
    class Producer implements Runnable {
        public void run() {
            try {
                for (int i = 0; i < 20; i++) {
                    queue.put(i); // Blocks if queue is full
                    System.out.println("Produced: " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Consumer implements Runnable {
        public void run() {
            try {
                while (true) {
                    Integer item = queue.take(); // Blocks if queue is empty
                    System.out.println("Consumed: " + item);
                    Thread.sleep(150);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
```

### MICROSOFT - Design Patterns & Architecture

#### Q5: Implement Observer Pattern for Stock Price Updates
```java
interface Observer {
    void update(String stock, double price);
}

interface Subject {
    void addObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

class StockPrice implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String stockSymbol;
    private double price;
    
    public StockPrice(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }
    
    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }
    
    @Override
    public void addObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(stockSymbol, price);
        }
    }
}

class StockTrader implements Observer {
    private String name;
    
    public StockTrader(String name) {
        this.name = name;
    }
    
    @Override
    public void update(String stock, double price) {
        System.out.println(name + " notified: " + stock + " price is now " + price);
    }
}
```

#### Q6: Factory Pattern for Database Connections
```java
interface DatabaseConnection {
    void connect();
    void disconnect();
}

class MySQLConnection implements DatabaseConnection {
    public void connect() { System.out.println("Connected to MySQL"); }
    public void disconnect() { System.out.println("Disconnected from MySQL"); }
}

class PostgreSQLConnection implements DatabaseConnection {
    public void connect() { System.out.println("Connected to PostgreSQL"); }
    public void disconnect() { System.out.println("Disconnected from PostgreSQL"); }
}

class DatabaseConnectionFactory {
    public static DatabaseConnection createConnection(String type) {
        switch (type.toUpperCase()) {
            case "MYSQL":
                return new MySQLConnection();
            case "POSTGRESQL":
                return new PostgreSQLConnection();
            default:
                throw new IllegalArgumentException("Unknown database type: " + type);
        }
    }
}
```

### META - Modern Java Features

#### Q7: Stream API - Complex Data Processing
```java
class Employee {
    private String name;
    private String department;
    private double salary;
    private int age;
    
    // Constructor, getters, setters
}

public class StreamOperations {
    public Map<String, Double> getAverageSalaryByDepartment(List<Employee> employees) {
        return employees.stream()
                .collect(Collectors.groupingBy(
                    Employee::getDepartment,
                    Collectors.averagingDouble(Employee::getSalary)
                ));
    }
    
    public List<String> getTopEarners(List<Employee> employees, int count) {
        return employees.stream()
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                .limit(count)
                .map(Employee::getName)
                .collect(Collectors.toList());
    }
    
    public Map<String, List<Employee>> groupByDepartmentAndSortBySalary(List<Employee> employees) {
        return employees.stream()
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                .collect(Collectors.groupingBy(Employee::getDepartment));
    }
}
```

#### Q8: Optional Usage and Best Practices
```java
public class OptionalExamples {
    
    // Bad: Using Optional as method parameter
    public void badMethod(Optional<String> name) { } // DON'T DO THIS
    
    // Good: Return Optional from methods that might not have a value
    public Optional<Employee> findEmployeeById(int id) {
        // Database lookup simulation
        return employees.stream()
                .filter(emp -> emp.getId() == id)
                .findFirst();
    }
    
    // Chaining Optional operations
    public Optional<String> getEmployeeEmailDomain(int employeeId) {
        return findEmployeeById(employeeId)
                .map(Employee::getEmail)
                .filter(email -> email.contains("@"))
                .map(email -> email.substring(email.indexOf("@") + 1));
    }
    
    // Optional with exception handling
    public Employee getEmployeeOrThrow(int id) {
        return findEmployeeById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found: " + id));
    }
    
    // Conditional processing with Optional
    public void processEmployee(int id) {
        findEmployeeById(id)
                .filter(Employee::isActive)
                .ifPresentOrElse(
                    this::processActiveEmployee,
                    () -> System.out.println("No active employee found with id: " + id)
                );
    }
}
```

## 🏢 PRODUCT COMPANIES

### UBER/OLA - System Design & Performance

#### Q9: LRU Cache Implementation
```java
public class LRUCache {
    private final int capacity;
    private final Map<Integer, Node> cache;
    private final Node head, tail;
    
    private class Node {
        int key, value;
        Node prev, next;
        
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        
        // Create dummy head and tail nodes
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        Node node = cache.get(key);
        if (node == null) {
            return -1;
        }
        
        // Move accessed node to head
        moveToHead(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        Node node = cache.get(key);
        
        if (node == null) {
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addToHead(newNode);
            
            if (cache.size() > capacity) {
                Node tail = removeTail();
                cache.remove(tail.key);
            }
        } else {
            node.value = value;
            moveToHead(node);
        }
    }
    
    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
    
    private Node removeTail() {
        Node lastNode = tail.prev;
        removeNode(lastNode);
        return lastNode;
    }
}
```

### FLIPKART/AMAZON - Collections & Algorithms

#### Q10: Custom ArrayList Implementation
```java
public class CustomArrayList<E> {
    private static final int DEFAULT_CAPACITY = 10;
    private Object[] elements;
    private int size;
    
    public CustomArrayList() {
        elements = new Object[DEFAULT_CAPACITY];
    }
    
    public CustomArrayList(int initialCapacity) {
        if (initialCapacity < 0) {
            throw new IllegalArgumentException("Illegal Capacity: " + initialCapacity);
        }
        elements = new Object[initialCapacity];
    }
    
    public boolean add(E element) {
        ensureCapacity();
        elements[size++] = element;
        return true;
    }
    
    public void add(int index, E element) {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        
        ensureCapacity();
        System.arraycopy(elements, index, elements, index + 1, size - index);
        elements[index] = element;
        size++;
    }
    
    @SuppressWarnings("unchecked")
    public E get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        return (E) elements[index];
    }
    
    @SuppressWarnings("unchecked")
    public E remove(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        
        E oldValue = (E) elements[index];
        int numMoved = size - index - 1;
        if (numMoved > 0) {
            System.arraycopy(elements, index + 1, elements, index, numMoved);
        }
        elements[--size] = null; // Clear reference
        return oldValue;
    }
    
    public int size() {
        return size;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    private void ensureCapacity() {
        if (size >= elements.length) {
            int newCapacity = elements.length * 2;
            elements = Arrays.copyOf(elements, newCapacity);
        }
    }
}
```

## 🎯 BEHAVIORAL QUESTIONS WITH TECHNICAL DEPTH

### Q11: "Tell me about a challenging bug you fixed"
**Technical Answer Structure:**
```java
// Example: ConcurrentModificationException fix
public class ConcurrentModificationFix {
    private List<String> items = new ArrayList<>();
    
    // WRONG: Modifying list while iterating
    public void removeItemsWrong(String prefix) {
        for (String item : items) {
            if (item.startsWith(prefix)) {
                items.remove(item); // ConcurrentModificationException
            }
        }
    }
    
    // CORRECT: Using Iterator
    public void removeItemsCorrect(String prefix) {
        Iterator<String> iterator = items.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            if (item.startsWith(prefix)) {
                iterator.remove(); // Safe removal
            }
        }
    }
    
    // ALTERNATIVE: Using removeIf (Java 8+)
    public void removeItemsModern(String prefix) {
        items.removeIf(item -> item.startsWith(prefix));
    }
}
```

### Q12: "How do you ensure thread safety?"
```java
public class ThreadSafetyExamples {
    
    // 1. Synchronized methods
    private int counter = 0;
    public synchronized void increment() {
        counter++;
    }
    
    // 2. Synchronized blocks with specific locks
    private final Object lock = new Object();
    public void method() {
        synchronized(lock) {
            // Critical section
        }
    }
    
    // 3. Volatile for visibility
    private volatile boolean flag = false;
    
    // 4. Atomic classes
    private AtomicInteger atomicCounter = new AtomicInteger(0);
    public void atomicIncrement() {
        atomicCounter.incrementAndGet();
    }
    
    // 5. Concurrent collections
    private ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
    
    // 6. ThreadLocal for thread-specific data
    private ThreadLocal<SimpleDateFormat> dateFormat = 
        ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));
}
```

## 🚨 TRICKY QUESTIONS & GOTCHAS

### Q13: What's the output?
```java
public class TrickyQuestions {
    
    // Question 1: String concatenation
    public static void stringQuestion() {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        String s4 = "Hel" + "lo";
        String s5 = "Hel" + new String("lo");
        
        System.out.println(s1 == s2);  // true (string pool)
        System.out.println(s1 == s3);  // false (different objects)
        System.out.println(s1 == s4);  // true (compile-time constant)
        System.out.println(s1 == s5);  // false (runtime concatenation)
    }
    
    // Question 2: Integer caching
    public static void integerQuestion() {
        Integer a = 127;
        Integer b = 127;
        Integer c = 128;
        Integer d = 128;
        
        System.out.println(a == b);  // true (cached -128 to 127)
        System.out.println(c == d);  // false (not cached)
    }
    
    // Question 3: Exception handling
    public static int exceptionQuestion() {
        try {
            return 1;
        } catch (Exception e) {
            return 2;
        } finally {
            return 3;  // This overrides return from try block
        }
        // Output: 3
    }
    
    // Question 4: Overriding vs Overloading
    public static void methodQuestion() {
        Parent p = new Child();
        p.show();  // Output: "Child's show" (Runtime polymorphism - overriding)
        p.display("test");  // Output: "Parent's display" (Compile-time binding - overloading)
    }
    
    static class Parent {
        public void show() { System.out.println("Parent's show"); }
        public void display(String s) { System.out.println("Parent's display"); }
    }
    
    static class Child extends Parent {
        @Override
        public void show() { System.out.println("Child's show"); }
        
        // This is overloading, not overriding (different signature)
        public void display(Object o) { System.out.println("Child's display"); }
    }
    
    // Question 5: Initialization order
    public static void initializationQuestion() {
        new ChildInit();
        /* Output:
           Parent static block
           Child static block
           Parent instance block
           Parent constructor
           Child instance block
           Child constructor
        */
    }
    
    static class ParentInit {
        static { System.out.println("Parent static block"); }
        { System.out.println("Parent instance block"); }
        public ParentInit() { System.out.println("Parent constructor"); }
    }
    
    static class ChildInit extends ParentInit {
        static { System.out.println("Child static block"); }
        { System.out.println("Child instance block"); }
        public ChildInit() { System.out.println("Child constructor"); }
    }
}
```

### Q14: Memory Leak Scenarios
```java
public class MemoryLeakExamples {
    
    // 1. Static collections that grow indefinitely
    private static List<Object> staticList = new ArrayList<>();
    
    public void addToStaticList(Object obj) {
        staticList.add(obj); // Memory leak if not cleaned
    }
    
    // 2. Listeners not removed
    private List<EventListener> listeners = new ArrayList<>();
    
    public void addListener(EventListener listener) {
        listeners.add(listener);
        // Should provide removeListener method
    }
    
    // 3. ThreadLocal not cleaned
    private ThreadLocal<ExpensiveObject> threadLocal = new ThreadLocal<>();
    
    public void useThreadLocal() {
        threadLocal.set(new ExpensiveObject());
        // Should call threadLocal.remove() when done
    }
    
    // 4. Inner class holding reference to outer class
    public class InnerClass {
        // Implicitly holds reference to OuterClass instance
        // Can cause memory leak if inner class outlives outer class
    }
    
    // Solution: Use static inner class when possible
    public static class StaticInnerClass {
        // No implicit reference to outer class
    }
}
```

## 📊 PERFORMANCE & OPTIMIZATION QUESTIONS

### Q15: How to optimize this code?
```java
// BEFORE: Inefficient code
public class InefficiientCode {
    public List<String> processStrings(List<String> input) {
        List<String> result = new ArrayList<>();
        for (String s : input) {
            String processed = "";
            for (int i = 0; i < s.length(); i++) {
                processed += s.charAt(i); // String concatenation in loop - O(n²)
            }
            if (processed.length() > 5) {
                result.add(processed.toUpperCase());
            }
        }
        return result;
    }
}

// AFTER: Optimized code
public class OptimizedCode {
    public List<String> processStrings(List<String> input) {
        return input.stream()
                .filter(s -> s.length() > 5)
                .map(String::toUpperCase)
                .collect(Collectors.toList());
    }
    
    // Alternative with StringBuilder for complex string operations
    public List<String> processStringsWithStringBuilder(List<String> input) {
        List<String> result = new ArrayList<>(input.size()); // Pre-size collection
        
        for (String s : input) {
            if (s.length() > 5) {
                StringBuilder sb = new StringBuilder(s.length()); // Pre-size StringBuilder
                sb.append(s);
                result.add(sb.toString().toUpperCase());
            }
        }
        return result;
    }
}
```

### Q16: Explain JVM Memory Management
```java
public class JVMMemoryManagement {
    /*
    JVM Memory Areas:
    
    1. Heap Memory:
       - Young Generation (Eden, Survivor spaces S0 and S1)
       - Old Generation (Tenured space)
       - Objects are allocated here
       - Garbage collection happens here
    
    2. Non-Heap Memory:
       - Metaspace (Java 8+) / PermGen (before Java 8)
       - Class metadata, method data, constant pools
    
    3. Stack Memory:
       - Thread-specific
       - Method frames, local variables, references
       - LIFO structure
    
    4. PC Register:
       - Per thread
       - Holds address of current executing instruction
    
    5. Native Method Stack:
       - For native methods
    */
    
    public void memoryLeakExample() {
        // Common memory leak causes:
        
        // 1. Static collections or fields
        static List<Object> leakyList = new ArrayList<>();
        
        // 2. Unclosed resources
        try {
            FileInputStream fis = new FileInputStream("file.txt");
            // Missing close() call
        } catch (Exception e) { }
        
        // 3. Inner class references
        class OuterClass {
            private byte[] largeArray = new byte[1000000];
            
            public Runnable getAction() {
                // Inner class holds implicit reference to OuterClass
                return new Runnable() {
                    @Override
                    public void run() {
                        System.out.println("Action");
                    }
                };
            }
        }
        
        // 4. ThreadLocal variables not removed
        ThreadLocal<LargeObject> threadLocal = new ThreadLocal<>();
        threadLocal.set(new LargeObject());
        // Missing threadLocal.remove();
    }
}
```

## 🎯 FINAL INTERVIEW TIPS

### Code Quality Checklist
```java
public class InterviewCodeQuality {
    
    // ✅ Good practices to follow
    public Optional<Employee> findEmployeeById(int id) {
        // 1. Validate inputs
        if (id <= 0) {
            throw new IllegalArgumentException("Employee ID must be positive");
        }
        
        // 2. Use meaningful variable names
        Optional<Employee> foundEmployee = employees.stream()
                .filter(employee -> employee.getId() == id)
                .findFirst();
        
        // 3. Handle edge cases
        return foundEmployee;
    }
    
    // 4. Use appropriate data structures
    private Map<Integer, Employee> employeeCache = new HashMap<>(); // O(1) lookup
    
    // 5. Consider thread safety when needed
    private final Object lock = new Object();
    
    public void updateEmployee(Employee employee) {
        synchronized (lock) {
            employeeCache.put(employee.getId(), employee);
        }
    }
    
    // 6. Use try-with-resources for resource management
    public String readFile(String filename) throws IOException {
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
            return reader.lines().collect(Collectors.joining("\n"));
        }
    }
}
```

### Common Mistakes to Avoid
- ❌ Not handling null values
- ❌ Using `==` instead of `equals()` for object comparison
- ❌ Not closing resources (use try-with-resources)
- ❌ Creating unnecessary objects in loops
- ❌ Not considering thread safety in multi-threaded environments
- ❌ Using raw types instead of generics
- ❌ Not validating method parameters

**Remember: Write code as if the person maintaining it is a violent psychopath who knows where you live! 😄**

## 🏆 SUCCESS FORMULA

**Technical Knowledge (60%) + Problem Solving (25%) + Communication (15%) = Interview Success! 🚀**