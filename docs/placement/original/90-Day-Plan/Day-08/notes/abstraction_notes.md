# Abstraction in Java

## What is Abstraction?

**Abstraction** is the process of hiding implementation details and showing only essential features to the user. It focuses on **what** an object does rather than **how** it does it.

## Why Abstraction?

1. **Reduce Complexity**: Hide unnecessary details
2. **Increase Security**: Protect implementation from external access
3. **Code Reusability**: Share common functionality
4. **Loose Coupling**: Reduce dependencies between components
5. **Easy Maintenance**: Changes in implementation don't affect users

---

## Ways to Achieve Abstraction in Java

### 1. Abstract Classes (0-100% abstraction)
### 2. Interfaces (100% abstraction, pre-Java 8)

---

## Abstract Classes

### Definition
A class declared with `abstract` keyword that cannot be instantiated.

```java
abstract class Animal {
    // Abstract class
}

// Animal a = new Animal(); // ERROR: Cannot instantiate
```

### Characteristics
- Cannot create objects of abstract class
- Can have both abstract and concrete methods
- Can have constructors
- Can have instance variables
- Can have static methods
- Can have final methods
- Can implement interfaces

---

## Abstract Methods

Methods declared without implementation (no body).

```java
abstract class Shape {
    // Abstract method - no implementation
    abstract double calculateArea();
    
    // Concrete method - has implementation
    void display() {
        System.out.println("Area: " + calculateArea());
    }
}
```

### Rules:
1. Declared with `abstract` keyword
2. No method body (ends with semicolon)
3. Must be overridden in concrete subclass
4. Cannot be `static`, `final`, or `private`

---

## Creating Abstract Classes

```java
abstract class Employee {
    protected String name;
    protected int id;
    
    // Constructor
    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    // Abstract method
    public abstract double calculateSalary();
    
    // Concrete method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + calculateSalary());
    }
}

// Concrete subclass
class FullTimeEmployee extends Employee {
    private double monthlySalary;
    
    public FullTimeEmployee(String name, int id, double salary) {
        super(name, id);
        this.monthlySalary = salary;
    }
    
    @Override
    public double calculateSalary() {
        return monthlySalary;
    }
}
```

---

## Template Method Pattern

Define the skeleton of an algorithm in a base class, letting subclasses implement specific steps.

```java
abstract class DataProcessor {
    // Template method - defines algorithm structure
    public final void process() {
        readData();
        processData();
        writeData();
    }
    
    // Steps to be implemented by subclasses
    protected abstract void readData();
    protected abstract void processData();
    protected abstract void writeData();
}

class CSVProcessor extends DataProcessor {
    @Override
    protected void readData() {
        System.out.println("Reading CSV file");
    }
    
    @Override
    protected void processData() {
        System.out.println("Processing CSV data");
    }
    
    @Override
    protected void writeData() {
        System.out.println("Writing CSV file");
    }
}
```

**Key Points:**
- Template method is usually `final` (prevent overriding)
- Defines overall algorithm structure
- Subclasses implement specific steps

---

## When to Use Abstract Classes

Use abstract classes when:

1. **Share code** among closely related classes
2. **Declare non-static/non-final fields** (state)
3. **Require access modifiers** other than public
4. **Provide partial implementation** (mix of abstract and concrete)
5. **Establish "is-a" relationship** with shared behavior

**Example Use Cases:**
- GUI component hierarchy (Component → Button, Label, TextField)
- Database connections (AbstractConnection)
- File processing (AbstractFileProcessor)
- Game characters (Character → Warrior, Mage, Archer)

---

## Abstract Class vs Concrete Class

| Feature | Abstract Class | Concrete Class |
|---------|----------------|----------------|
| **Instantiation** | Cannot instantiate | Can instantiate |
| **Methods** | Can have abstract methods | Only concrete methods |
| **Purpose** | Provide base for subclasses | Complete, usable class |
| **Keyword** | `abstract` keyword required | No keyword |
| **Implementation** | Partial implementation | Complete implementation |

---

## Abstract Class Features

### 1. Constructors
```java
abstract class Vehicle {
    protected String brand;
    
    // Constructor in abstract class
    public Vehicle(String brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand); // Call abstract class constructor
    }
}
```

### 2. Instance Variables
```java
abstract class Shape {
    protected String color;      // Instance variable
    protected static int count;  // Static variable
    
    abstract double area();
}
```

### 3. Static Methods
```java
abstract class MathUtils {
    // Static method in abstract class
    public static int add(int a, int b) {
        return a + b;
    }
}

// Usage: MathUtils.add(5, 3);
```

### 4. Final Methods
```java
abstract class Document {
    // Final method - cannot be overridden
    public final void printHeader() {
        System.out.println("=== Document ===");
    }
    
    abstract void printContent();
}
```

---

## Levels of Abstraction

### 0% Abstraction (Concrete Class)
```java
class Circle {
    double radius;
    
    double area() {
        return Math.PI * radius * radius;
    }
}
```

### Partial Abstraction (Abstract Class)
```java
abstract class Shape {
    abstract double area();        // Abstract
    
    void display() {               // Concrete
        System.out.println("Area: " + area());
    }
}
```

### 100% Abstraction (Interface, pre-Java 8)
```java
interface Drawable {
    void draw();  // Pure abstraction
}
```

---

## Abstract Class Best Practices

1. **Name with "Abstract" prefix**: `AbstractList`, `AbstractMap` (optional but common)
2. **Document inheritance**: Explain how to extend the class
3. **Use template method pattern**: For algorithmic structure
4. **Don't make everything abstract**: Provide useful concrete methods
5. **Keep shallow hierarchies**: Avoid deep abstract class chains
6. **Use final for template methods**: Prevent algorithm modification

---

## Common Mistakes

1. **Trying to instantiate**: `new AbstractClass()` ❌
2. **Not implementing abstract methods**: In concrete subclass ❌
3. **Making abstract methods private**: Not allowed ❌
4. **Abstract methods in concrete class**: Must declare class as abstract ❌
5. **Forgetting @Override**: When implementing abstract methods ⚠️

---

## Interview Questions

### Q: Can abstract class have constructor?
**A:** Yes, called when concrete subclass is instantiated through super().

### Q: Can abstract method be static?
**A:** No, static methods cannot be abstract (they belong to class, not object).

### Q: Can abstract method be private?
**A:** No, private methods cannot be overridden, defeating the purpose.

### Q: Can abstract class implement interface?
**A:** Yes, and it doesn't need to implement all methods.

```java
abstract class AbstractList implements List {
    // Can leave some methods unimplemented
}
```

### Q: Can we have abstract class without abstract methods?
**A:** Yes, to prevent instantiation while providing concrete methods.

```java
abstract class Utility {
    public void helperMethod() {
        // Concrete method
    }
}
```

### Q: Difference between abstract class and interface?
**A:**

| Abstract Class | Interface |
|----------------|-----------|
| Single inheritance | Multiple implementation |
| Can have state (fields) | Only constants |
| Can have constructors | No constructors |
| Any access modifier | All public (default) |
| Partial implementation | No implementation (pre-Java 8) |
| "is-a" relationship | "can-do" capability |

### Q: When to use abstract class vs interface?
**A:**
- **Abstract Class**: Related classes sharing code, need state
- **Interface**: Unrelated classes sharing contract, multiple inheritance

---

## Real-World Examples

### Java Collections Framework
```java
abstract class AbstractList<E> implements List<E> {
    // Partial implementation of List interface
    public abstract E get(int index);
    
    public boolean isEmpty() {
        return size() == 0;
    }
}

class ArrayList<E> extends AbstractList<E> {
    // Complete implementation
}
```

### Servlet API
```java
abstract class HttpServlet {
    public void service(HttpRequest req, HttpResponse res) {
        // Template method
        if (req.getMethod().equals("GET")) {
            doGet(req, res);
        } else if (req.getMethod().equals("POST")) {
            doPost(req, res);
        }
    }
    
    protected abstract void doGet(HttpRequest req, HttpResponse res);
    protected abstract void doPost(HttpRequest req, HttpResponse res);
}
```

### AWT/Swing Components
```java
abstract class Component {
    protected int x, y, width, height;
    
    public abstract void paint(Graphics g);
    
    public void setLocation(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

---

## Abstraction Design Principles

### 1. Dependency Inversion Principle (DIP)
Depend on abstractions, not concretions.

```java
// Good - depend on abstraction
abstract class PaymentProcessor {
    abstract void process(double amount);
}

class CreditCardProcessor extends PaymentProcessor {
    void process(double amount) {
        // Implementation
    }
}
```

### 2. Program to Interface
```java
// Good
List<String> list = new ArrayList<>();

// Less flexible
ArrayList<String> list = new ArrayList<>();
```

### 3. Liskov Substitution Principle (LSP)
Subclass should be substitutable for parent class.

```java
abstract class Bird {
    abstract void move();
}

class Sparrow extends Bird {
    void move() {
        fly(); // OK - sparrows fly
    }
}

class Penguin extends Bird {
    void move() {
        walk(); // OK - penguins walk
    }
}
```

---

## Summary

**Abstraction** hides complexity and shows only essential features:

**Abstract Classes:**
- ✓ Provide partial implementation
- ✓ Can have state (instance variables)
- ✓ Can have constructors
- ✓ Support template method pattern
- ✓ Use for "is-a" relationship with shared code

**Key Benefits:**
1. Hide implementation details
2. Reduce complexity
3. Enable code reuse
4. Support polymorphism
5. Enforce contract

**When to Use:**
- Need to share code among related classes
- Require access to protected members
- Want to provide default behavior
- Need instance variables
- Implementing template method pattern
