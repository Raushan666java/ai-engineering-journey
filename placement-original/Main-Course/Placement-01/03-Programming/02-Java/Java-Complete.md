# ☕ Java Programming - Complete Mastery

## 📋 10-Week Java Learning Path

### Week 1-2: Java Fundamentals & Syntax

#### 📖 Core Concepts
1. **Java Basics**
   - JVM, JRE, and JDK
   - Platform independence
   - Java compilation process
   - Setting up development environment

2. **Syntax and Data Types**
   - Variables and constants
   - Primitive data types
   - Operators and expressions
   - Control structures (if, switch, loops)

3. **Methods and Classes**
   - Method definition and calling
   - Method overloading
   - Class and object basics
   - Constructor concepts

#### 💡 Code Examples

```java
// Basic Java Program Structure
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables and data types
        int age = 25;
        double salary = 50000.0;
        String name = "John Doe";
        boolean isEmployed = true;
        
        // Control structures
        if (age >= 18) {
            System.out.println("You are an adult");
        }
        
        // Loops
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}

// Simple Class Example
class Student {
    private String name;
    private int rollNumber;
    
    // Constructor
    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    
    // Methods
    public void displayInfo() {
        System.out.println("Name: " + name + ", Roll: " + rollNumber);
    }
}
```

#### 🔬 Practice Problems (Week 1-2)
1. Calculator with basic operations
2. Number pattern printing programs
3. Prime number checker
4. Factorial calculator
5. Simple student management system

### Week 3-4: Object-Oriented Programming (OOP)

#### 📖 Core Concepts
1. **Encapsulation**
   - Access modifiers (private, public, protected)
   - Getter and setter methods
   - Data hiding principles

2. **Inheritance**
   - extends keyword
   - super keyword
   - Method overriding
   - Constructor chaining

3. **Polymorphism**
   - Runtime polymorphism
   - Method overriding vs overloading
   - Dynamic method dispatch

4. **Abstraction**
   - Abstract classes
   - Interfaces
   - Multiple inheritance through interfaces

#### 💡 OOP Implementation

```java
// Encapsulation Example
class BankAccount {
    private double balance;
    private String accountNumber;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    public double getBalance() {
        return balance;
    }
}

// Inheritance Example
class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void start() {
        System.out.println("Vehicle starting...");
    }
}

class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, int year, int doors) {
        super(brand, year);
        this.numberOfDoors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starting...");
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
}

// Interface Example
interface Drawable {
    void draw();
    default void print() {
        System.out.println("Printing shape...");
    }
}

class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }
}
```

#### 🔬 Practice Projects (Week 3-4)
1. Employee management system with inheritance
2. Shape calculator using interfaces
3. Library management system
4. Banking system with different account types

### Week 5-6: Collections Framework

#### 📖 Core Concepts
1. **Collection Hierarchy**
   - Collection interface
   - List, Set, Queue interfaces
   - Map interface

2. **List Implementations**
   - ArrayList vs LinkedList
   - Vector and Stack
   - Performance characteristics

3. **Set Implementations**
   - HashSet, LinkedHashSet, TreeSet
   - Uniqueness and ordering

4. **Map Implementations**
   - HashMap, LinkedHashMap, TreeMap
   - Key-value pair operations

#### 💡 Collections Examples

```java
import java.util.*;

public class CollectionsExample {
    public static void main(String[] args) {
        // ArrayList Example
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        
        // Iteration
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // HashMap Example
        Map<String, Integer> studentGrades = new HashMap<>();
        studentGrades.put("Alice", 95);
        studentGrades.put("Bob", 87);
        studentGrades.put("Charlie", 92);
        
        // Accessing map
        for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // HashSet Example
        Set<Integer> uniqueNumbers = new HashSet<>();
        uniqueNumbers.add(1);
        uniqueNumbers.add(2);
        uniqueNumbers.add(1); // Duplicate, won't be added
        
        System.out.println("Unique numbers: " + uniqueNumbers);
    }
}

// Custom comparator example
class Student implements Comparable<Student> {
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
    
    // Getters and toString method
    public String getName() { return name; }
    public int getGrade() { return grade; }
    
    @Override
    public String toString() {
        return name + "(" + grade + ")";
    }
}
```

#### 🔬 Collections Practice (Week 5-6)
1. Implement a phone book using HashMap
2. Create a playlist manager using ArrayList
3. Build a unique word counter using HashSet
4. Sort students by different criteria using TreeSet

### Week 7-8: Exception Handling & File I/O

#### 📖 Core Concepts
1. **Exception Handling**
   - try-catch-finally blocks
   - Checked vs unchecked exceptions
   - Custom exceptions
   - Best practices

2. **File Operations**
   - Reading and writing files
   - BufferedReader and BufferedWriter
   - File and Path classes
   - Try-with-resources

#### 💡 Exception and File I/O Examples

```java
import java.io.*;
import java.nio.file.*;
import java.util.*;

// Custom Exception
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class BankAccountWithExceptions {
    private double balance;
    
    public BankAccountWithExceptions(double balance) {
        this.balance = balance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Insufficient funds. Balance: " + balance + ", Requested: " + amount
            );
        }
        balance -= amount;
    }
    
    public double getBalance() {
        return balance;
    }
}

// File I/O Example
public class FileOperations {
    public static void writeToFile(String filename, List<String> data) {
        try (BufferedWriter writer = Files.newBufferedWriter(Paths.get(filename))) {
            for (String line : data) {
                writer.write(line);
                writer.newLine();
            }
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
    
    public static List<String> readFromFile(String filename) {
        List<String> lines = new ArrayList<>();
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lines.add(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading from file: " + e.getMessage());
        }
        return lines;
    }
}
```

### Week 9-10: Advanced Java Features

#### 📖 Core Concepts
1. **Multithreading**
   - Thread class and Runnable interface
   - Synchronization and locks
   - Thread communication
   - ExecutorService

2. **Java 8+ Features**
   - Lambda expressions
   - Streams API
   - Optional class
   - Method references

3. **Generics**
   - Generic classes and methods
   - Wildcards
   - Type erasure

#### 💡 Advanced Features Examples

```java
import java.util.*;
import java.util.stream.*;
import java.util.concurrent.*;

// Lambda and Streams Example
public class Java8Features {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Filter even numbers and square them
        List<Integer> evenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        
        System.out.println("Even squares: " + evenSquares);
        
        // Optional example
        Optional<Integer> max = numbers.stream()
            .max(Integer::compareTo);
        
        max.ifPresent(value -> System.out.println("Maximum: " + value));
    }
}

// Multithreading Example
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

class CounterTask implements Runnable {
    private Counter counter;
    private int iterations;
    
    public CounterTask(Counter counter, int iterations) {
        this.counter = counter;
        this.iterations = iterations;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < iterations; i++) {
            counter.increment();
        }
    }
}

// Generics Example
class GenericBox<T> {
    private T item;
    
    public void setItem(T item) {
        this.item = item;
    }
    
    public T getItem() {
        return item;
    }
}
```

## 🎯 Complete Java Interview Preparation

### Core Topics Checklist
- [ ] Java Basics and Syntax
- [ ] OOP Principles (Encapsulation, Inheritance, Polymorphism, Abstraction)
- [ ] Collections Framework
- [ ] Exception Handling
- [ ] File I/O Operations
- [ ] Multithreading and Concurrency
- [ ] Java 8+ Features (Lambda, Streams, Optional)
- [ ] Generics
- [ ] String manipulation and regular expressions
- [ ] JVM internals and garbage collection

### Common Interview Questions

#### Basic Level
1. What is Java and why is it platform independent?
2. Explain the difference between JDK, JRE, and JVM
3. What are the main principles of OOP?
4. Difference between method overloading and overriding
5. What is the difference between ArrayList and LinkedList?

#### Intermediate Level
1. Explain the difference between checked and unchecked exceptions
2. How does HashMap work internally?
3. What is the difference between synchronized and volatile?
4. Explain the concept of immutable objects
5. How do lambda expressions work?

#### Advanced Level
1. Explain JVM memory structure
2. How does garbage collection work?
3. What are the different types of thread pools?
4. Explain the Stream API and its benefits
5. How do generics work and what is type erasure?

## 🏆 Practical Projects

### Project 1: Banking Management System
- Account management with different account types
- Transaction processing and history
- Exception handling for invalid operations
- File-based data persistence

### Project 2: Student Information System
- Student and course management
- Grade tracking and GPA calculation
- Collections for data storage
- Serialization for data persistence

### Project 3: Multi-threaded Chat Application
- Server-client architecture
- Thread management for multiple users
- Synchronization for shared resources
- GUI using Swing or JavaFX

### Project 4: E-commerce Console Application
- Product catalog management
- Shopping cart functionality
- Order processing and tracking
- File I/O for data persistence

## 📊 Progress Tracking

### Weekly Assessment Template
```markdown
# Java Week [X] Progress

## Concepts Mastered ✅
- [ ] Core concept 1
- [ ] Core concept 2
- [ ] Core concept 3

## Code Examples Implemented
- [ ] Basic programs (5+)
- [ ] OOP examples (3+)
- [ ] Collections usage (3+)

## Practice Problems Solved
- Easy: ___/10
- Medium: ___/8
- Hard: ___/5

## Projects Completed
- [ ] Mini project 1
- [ ] Mini project 2

## Interview Questions Practiced
- Basic: ___/10
- Intermediate: ___/8
- Advanced: ___/5
```

## 📚 Learning Resources

### Books
- "Head First Java" by Kathy Sierra
- "Effective Java" by Joshua Bloch
- "Java: The Complete Reference" by Herbert Schildt

### Online Platforms
- Oracle Java Documentation
- Codecademy Java Course
- LeetCode Java problems
- HackerRank Java challenges

### Practice Websites
- CodingBat (Java practice problems)
- GeeksforGeeks Java section
- JavaTpoint tutorials
- Baeldung Java guides

---

**Remember**: Java is widely used in enterprise applications. Focus on both core concepts and practical implementation skills!
