# 🎯 Interview-Ready Java Code Templates

## 🚀 Essential Code Patterns for Job Interviews

### 1. CORE JAVA TEMPLATES

#### String Manipulation
```java
// String vs StringBuilder performance
public String concatenateStrings(String[] strings) {
    StringBuilder sb = new StringBuilder();
    for (String s : strings) {
        sb.append(s);
    }
    return sb.toString();
}

// String pool demonstration
public void stringPoolDemo() {
    String s1 = "Hello";        // String pool
    String s2 = "Hello";        // Same reference from pool
    String s3 = new String("Hello"); // New object in heap
    
    System.out.println(s1 == s2);     // true
    System.out.println(s1 == s3);     // false
    System.out.println(s1.equals(s3)); // true
}
```

#### Array Operations
```java
// Two Sum - HashMap approach O(n)
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

// Array rotation
public void rotateArray(int[] nums, int k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
```

### 2. OOP DESIGN TEMPLATES

#### Class Design with Best Practices
```java
public class Employee implements Comparable<Employee> {
    private final String name;
    private final int id;
    private double salary;
    
    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    // Getters
    public String getName() { return name; }
    public int getId() { return id; }
    public double getSalary() { return salary; }
    
    // Setter with validation
    public void setSalary(double salary) {
        if (salary < 0) throw new IllegalArgumentException("Salary cannot be negative");
        this.salary = salary;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Employee employee = (Employee) obj;
        return id == employee.id && Objects.equals(name, employee.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, id);
    }
    
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.id, other.id);
    }
    
    @Override
    public String toString() {
        return String.format("Employee{name='%s', id=%d, salary=%.2f}", name, id, salary);
    }
}
```

#### Inheritance Hierarchy
```java
// Abstract base class
abstract class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public abstract void start();
    public abstract double getFuelEfficiency();
    
    public void displayInfo() {
        System.out.println(brand + " " + year);
    }
}

// Concrete implementation
class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int year, int doors) {
        super(brand, year);
        this.doors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine started");
    }
    
    @Override
    public double getFuelEfficiency() {
        return 15.5; // km per liter
    }
}
```

### 3. EXCEPTION HANDLING TEMPLATES

#### Custom Exception with Best Practices
```java
// Custom checked exception
public class InsufficientFundsException extends Exception {
    private final double requestedAmount;
    private final double availableBalance;
    
    public InsufficientFundsException(double requestedAmount, double availableBalance) {
        super(String.format("Insufficient funds: requested %.2f, available %.2f", 
              requestedAmount, availableBalance));
        this.requestedAmount = requestedAmount;
        this.availableBalance = availableBalance;
    }
    
    public double getRequestedAmount() { return requestedAmount; }
    public double getAvailableBalance() { return availableBalance; }
}

// Usage in business logic
public class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
    }
}
```

#### Resource Management
```java
// Try-with-resources template
public String readFileContent(String filename) throws IOException {
    try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
        return reader.lines().collect(Collectors.joining("\n"));
    }
}

// Multiple resources
public void copyFile(String source, String destination) throws IOException {
    try (InputStream in = Files.newInputStream(Paths.get(source));
         OutputStream out = Files.newOutputStream(Paths.get(destination))) {
        in.transferTo(out);
    }
}
```

### 4. COLLECTIONS FRAMEWORK TEMPLATES

#### HashMap Operations
```java
public class HashMapOperations {
    
    // Count frequency of elements
    public Map<String, Integer> countFrequency(List<String> items) {
        Map<String, Integer> frequency = new HashMap<>();
        for (String item : items) {
            frequency.merge(item, 1, Integer::sum);
        }
        return frequency;
    }
    
    // Group by property
    public Map<String, List<Employee>> groupByDepartment(List<Employee> employees) {
        return employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment));
    }
    
    // Find duplicates
    public Set<String> findDuplicates(List<String> items) {
        Set<String> seen = new HashSet<>();
        return items.stream()
                .filter(item -> !seen.add(item))
                .collect(Collectors.toSet());
    }
}
```

#### Custom Comparators
```java
public class ComparatorExamples {
    
    // Sort employees by multiple criteria
    public List<Employee> sortEmployees(List<Employee> employees) {
        return employees.stream()
                .sorted(Comparator
                    .comparing(Employee::getDepartment)
                    .thenComparing(Employee::getSalary, Comparator.reverseOrder())
                    .thenComparing(Employee::getName))
                .collect(Collectors.toList());
    }
    
    // Custom comparator for complex objects
    public static final Comparator<Employee> BY_PERFORMANCE = (e1, e2) -> {
        int salaryCompare = Double.compare(e2.getSalary(), e1.getSalary());
        if (salaryCompare != 0) return salaryCompare;
        return e1.getName().compareTo(e2.getName());
    };
}
```

### 5. MULTITHREADING TEMPLATES

#### Thread-Safe Singleton
```java
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {
        // Prevent reflection attack
        if (instance != null) {
            throw new RuntimeException("Use getInstance() method");
        }
    }
    
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
```

#### Producer-Consumer Pattern
```java
public class ProducerConsumer {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int MAX_SIZE = 10;
    private final Object lock = new Object();
    
    public void produce(int item) throws InterruptedException {
        synchronized (lock) {
            while (queue.size() == MAX_SIZE) {
                lock.wait();
            }
            queue.offer(item);
            System.out.println("Produced: " + item);
            lock.notifyAll();
        }
    }
    
    public int consume() throws InterruptedException {
        synchronized (lock) {
            while (queue.isEmpty()) {
                lock.wait();
            }
            int item = queue.poll();
            System.out.println("Consumed: " + item);
            lock.notifyAll();
            return item;
        }
    }
}
```

#### Thread Pool Usage
```java
public class ThreadPoolExample {
    private final ExecutorService executor = Executors.newFixedThreadPool(5);
    
    public CompletableFuture<String> processAsync(String data) {
        return CompletableFuture.supplyAsync(() -> {
            // Simulate processing
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return "Processed: " + data;
        }, executor);
    }
    
    public void shutdown() {
        executor.shutdown();
        try {
            if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
}
```

### 6. MODERN JAVA TEMPLATES

#### Stream API Patterns
```java
public class StreamPatterns {
    
    // Filter-Map-Collect pattern
    public List<String> processNames(List<Person> people) {
        return people.stream()
                .filter(person -> person.getAge() > 18)
                .map(Person::getName)
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
    }
    
    // Grouping and aggregation
    public Map<String, Double> averageSalaryByDepartment(List<Employee> employees) {
        return employees.stream()
                .collect(Collectors.groupingBy(
                    Employee::getDepartment,
                    Collectors.averagingDouble(Employee::getSalary)
                ));
    }
    
    // Parallel processing
    public long countLargeNumbers(List<Integer> numbers) {
        return numbers.parallelStream()
                .filter(n -> n > 1000)
                .count();
    }
    
    // Custom collector
    public String joinWithPrefix(List<String> items, String prefix) {
        return items.stream()
                .collect(Collectors.joining(", ", prefix + "[", "]"));
    }
    
    // FlatMap example
    public List<String> getAllTags(List<Post> posts) {
        return posts.stream()
                .flatMap(post -> post.getTags().stream())
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    // Partitioning
    public Map<Boolean, List<Employee>> partitionByExperience(List<Employee> employees) {
        return employees.stream()
                .collect(Collectors.partitioningBy(e -> e.getYearsOfExperience() > 5));
    }
    
    // Statistics
    public DoubleSummaryStatistics getSalaryStatistics(List<Employee> employees) {
        return employees.stream()
                .collect(Collectors.summarizingDouble(Employee::getSalary));
    }
}
```

#### Optional Usage
```java
public class OptionalPatterns {
    
    // Safe method chaining
    public Optional<String> getEmployeeEmail(int employeeId) {
        return findEmployeeById(employeeId)
                .map(Employee::getContact)
                .map(Contact::getEmail)
                .filter(email -> email.contains("@"));
    }
    
    // Optional with exception
    public Employee getEmployeeOrThrow(int id) {
        return findEmployeeById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found: " + id));
    }
    
    // Conditional processing
    public void processEmployee(int id) {
        findEmployeeById(id)
                .filter(emp -> emp.isActive())
                .ifPresentOrElse(
                    this::processActiveEmployee,
                    () -> System.out.println("No active employee found")
                );
    }
}
```

### 7. DESIGN PATTERNS TEMPLATES

#### Factory Pattern
```java
public interface DatabaseConnection {
    void connect();
}

public class DatabaseConnectionFactory {
    public static DatabaseConnection createConnection(String type) {
        switch (type.toUpperCase()) {
            case "MYSQL":
                return new MySQLConnection();
            case "POSTGRESQL":
                return new PostgreSQLConnection();
            case "MONGODB":
                return new MongoDBConnection();
            default:
                throw new IllegalArgumentException("Unknown database type: " + type);
        }
    }
}
```

#### Observer Pattern
```java
public interface Observer {
    void update(String message);
}

public class Subject {
    private final List<Observer> observers = new ArrayList<>();
    
    public void addObserver(Observer observer) {
        observers.add(observer);
    }
    
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    public void notifyObservers(String message) {
        observers.forEach(observer -> observer.update(message));
    }
}
```

#### Builder Pattern
```java
public class Employee {
    private final String name;
    private final int id;
    private final String department;
    private final double salary;
    
    private Employee(Builder builder) {
        this.name = builder.name;
        this.id = builder.id;
        this.department = builder.department;
        this.salary = builder.salary;
    }
    
    public static class Builder {
        private String name;
        private int id;
        private String department;
        private double salary;
        
        public Builder setName(String name) {
            this.name = name;
            return this;
        }
        
        public Builder setId(int id) {
            this.id = id;
            return this;
        }
        
        public Builder setDepartment(String department) {
            this.department = department;
            return this;
        }
        
        public Builder setSalary(double salary) {
            this.salary = salary;
            return this;
        }
        
        public Employee build() {
            return new Employee(this);
        }
    }
}

// Usage
Employee emp = new Employee.Builder()
    .setName("John Doe")
    .setId(123)
    .setDepartment("Engineering")
    .setSalary(75000)
    .build();
```

#### Singleton Pattern (Enum Implementation)
```java
// Thread-safe, serialization-safe, reflection-safe singleton
public enum EnumSingleton {
    INSTANCE;
    
    private String data;
    
    public String getData() {
        return data;
    }
    
    public void setData(String data) {
        this.data = data;
    }
    
    public void doSomething() {
        System.out.println("Singleton action");
    }
}

// Usage
EnumSingleton singleton = EnumSingleton.INSTANCE;
singleton.setData("test");
singleton.doSomething();
```

#### Strategy Pattern
```java
// Strategy interface
public interface PaymentStrategy {
    void pay(int amount);
}

// Concrete strategies
public class CreditCardStrategy implements PaymentStrategy {
    private String cardNumber;
    private String cvv;
    
    public CreditCardStrategy(String cardNumber, String cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid with credit card");
    }
}

public class PayPalStrategy implements PaymentStrategy {
    private String email;
    
    public PayPalStrategy(String email) {
        this.email = email;
    }
    
    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using PayPal");
    }
}

// Context
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    
    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}

// Usage
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardStrategy("1234-5678", "123"));
cart.checkout(100);

cart.setPaymentStrategy(new PayPalStrategy("example@email.com"));
cart.checkout(200);
```

### 8. COMMON INTERVIEW PROBLEMS

#### LRU Cache Implementation
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
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        Node node = cache.get(key);
        if (node == null) return -1;
        
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

## 🎯 INTERVIEW SUCCESS CHECKLIST

### Before the Interview
- [ ] Practice these templates until you can write them without reference
- [ ] Understand time/space complexity of each approach
- [ ] Be ready to explain design decisions
- [ ] Know when to use each pattern

### During the Interview
- [ ] Start with brute force, then optimize
- [ ] Explain your thought process
- [ ] Write clean, readable code
- [ ] Handle edge cases
- [ ] Test your solution with examples

### Key Points to Remember
- **Always validate inputs**
- **Use meaningful variable names**
- **Handle null cases**
- **Consider thread safety when relevant**
- **Optimize for readability first, performance second**

**Master these templates and you'll be ready for any Java interview! 🚀**