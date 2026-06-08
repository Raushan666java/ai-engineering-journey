# OOP Best Practices and Design Principles

## SOLID Principles

### S - Single Responsibility Principle (SRP)
**A class should have only one reason to change.**

```java
// Bad - Multiple responsibilities
class Employee {
    void calculateSalary() { }
    void saveToDatabase() { }
    void generateReport() { }
}

// Good - Single responsibility
class Employee {
    void calculateSalary() { }
}

class EmployeeRepository {
    void saveToDatabase(Employee emp) { }
}

class EmployeeReportGenerator {
    void generateReport(Employee emp) { }
}
```

**Benefits:**
- Easier to understand
- Easier to test
- Less prone to bugs
- Better code organization

---

### O - Open/Closed Principle (OCP)
**Software entities should be open for extension but closed for modification.**

```java
// Bad - Must modify to add new shape
class AreaCalculator {
    double calculateArea(Object shape) {
        if (shape instanceof Circle) {
            // Circle area calculation
        } else if (shape instanceof Rectangle) {
            // Rectangle area calculation
        }
        // Must modify to add Triangle
    }
}

// Good - Extend without modification
abstract class Shape {
    abstract double calculateArea();
}

class Circle extends Shape {
    double calculateArea() { /* implementation */ }
}

class Rectangle extends Shape {
    double calculateArea() { /* implementation */ }
}

// Add new shape without modifying existing code
class Triangle extends Shape {
    double calculateArea() { /* implementation */ }
}
```

---

### L - Liskov Substitution Principle (LSP)
**Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.**

```java
// Bad - Violates LSP
class Rectangle {
    protected int width, height;
    
    void setWidth(int w) { width = w; }
    void setHeight(int h) { height = h; }
    int getArea() { return width * height; }
}

class Square extends Rectangle {
    void setWidth(int w) {
        width = w;
        height = w; // Breaks LSP - unexpected behavior
    }
}

// Good - Follow LSP
interface Shape {
    int getArea();
}

class Rectangle implements Shape {
    private int width, height;
    int getArea() { return width * height; }
}

class Square implements Shape {
    private int side;
    int getArea() { return side * side; }
}
```

---

### I - Interface Segregation Principle (ISP)
**Clients should not be forced to depend on interfaces they don't use.**

```java
// Bad - Fat interface
interface Worker {
    void work();
    void eat();
    void sleep();
}

class Robot implements Worker {
    void work() { /* OK */ }
    void eat() { /* Robot doesn't eat! */ }
    void sleep() { /* Robot doesn't sleep! */ }
}

// Good - Segregated interfaces
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}

class Human implements Workable, Eatable, Sleepable {
    void work() { }
    void eat() { }
    void sleep() { }
}

class Robot implements Workable {
    void work() { }
}
```

---

### D - Dependency Inversion Principle (DIP)
**High-level modules should not depend on low-level modules. Both should depend on abstractions.**

```java
// Bad - Direct dependency
class MySQLDatabase {
    void save(String data) { }
}

class UserService {
    private MySQLDatabase db = new MySQLDatabase(); // Tight coupling
    
    void saveUser(User user) {
        db.save(user.toString());
    }
}

// Good - Depend on abstraction
interface Database {
    void save(String data);
}

class MySQLDatabase implements Database {
    void save(String data) { }
}

class MongoDatabase implements Database {
    void save(String data) { }
}

class UserService {
    private Database db; // Depend on abstraction
    
    UserService(Database db) {
        this.db = db; // Dependency injection
    }
    
    void saveUser(User user) {
        db.save(user.toString());
    }
}
```

---

## Composition Over Inheritance

**Favor "has-a" relationships over "is-a" relationships when possible.**

```java
// Inheritance (rigid)
class Vehicle {
    void start() { }
    void stop() { }
}

class Car extends Vehicle {
    // Inherits start() and stop()
    // What if we need different engine?
}

// Composition (flexible)
interface Engine {
    void start();
    void stop();
}

class PetrolEngine implements Engine {
    void start() { System.out.println("Petrol engine start"); }
    void stop() { System.out.println("Petrol engine stop"); }
}

class ElectricEngine implements Engine {
    void start() { System.out.println("Electric engine start"); }
    void stop() { System.out.println("Electric engine stop"); }
}

class Car {
    private Engine engine; // Composition
    
    Car(Engine engine) {
        this.engine = engine;
    }
    
    void start() {
        engine.start(); // Delegate to engine
    }
}

// Usage
Car petrolCar = new Car(new PetrolEngine());
Car electricCar = new Car(new ElectricEngine());
```

**Benefits of Composition:**
- More flexible
- Easier to change behavior at runtime
- Better encapsulation
- Avoids fragile base class problem

---

## Encapsulation Best Practices

### 1. Keep Fields Private
```java
// Good
class Person {
    private String name; // Private field
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

### 2. Validate in Setters
```java
class Person {
    private int age;
    
    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age");
        }
        this.age = age;
    }
}
```

### 3. Return Defensive Copies
```java
class DateRange {
    private Date start;
    
    public Date getStart() {
        return new Date(start.getTime()); // Return copy, not reference
    }
}
```

---

## Inheritance Best Practices

### 1. Use @Override
```java
class Child extends Parent {
    @Override // Always use annotation
    public void method() {
        // Implementation
    }
}
```

### 2. Don't Override equals Without hashCode
```java
class Person {
    @Override
    public boolean equals(Object obj) {
        // Implementation
    }
    
    @Override
    public int hashCode() { // Must override both
        // Implementation
    }
}
```

### 3. Keep Hierarchies Shallow
```java
// Bad - Deep hierarchy
A → B → C → D → E → F

// Good - Shallow hierarchy
A → B
A → C
```

### 4. Design for Inheritance or Prohibit It
```java
// Either document how to extend
public class Extendable {
    /**
     * Subclasses must override this method...
     */
    protected void hookMethod() { }
}

// Or make final to prevent extension
public final class NotExtendable {
    // Cannot be inherited
}
```

---

## Polymorphism Best Practices

### 1. Program to Interface
```java
// Good
List<String> list = new ArrayList<>();

// Less flexible
ArrayList<String> list = new ArrayList<>();
```

### 2. Use Polymorphic Collections
```java
List<Shape> shapes = Arrays.asList(
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
);

for (Shape shape : shapes) {
    shape.draw(); // Polymorphic call
}
```

### 3. Avoid Excessive Downcasting
```java
// Bad - Too much downcasting
if (animal instanceof Dog) {
    ((Dog) animal).fetch();
} else if (animal instanceof Cat) {
    ((Cat) animal).scratch();
}

// Good - Use polymorphism
animal.performAction(); // Each subclass implements
```

---

## Abstraction Best Practices

### 1. Abstract Class Naming
```java
// Common pattern
abstract class AbstractList { }
abstract class AbstractMap { }

// Or descriptive name
abstract class Vehicle { }
abstract class Shape { }
```

### 2. Use Template Method Pattern
```java
abstract class DataProcessor {
    public final void process() { // Template method
        loadData();
        transformData();
        saveData();
    }
    
    protected abstract void loadData();
    protected abstract void transformData();
    protected abstract void saveData();
}
```

### 3. Provide Meaningful Abstractions
```java
// Good - Clear abstraction
interface PaymentProcessor {
    boolean processPayment(double amount);
    void refund(double amount);
}

// Bad - Leaky abstraction
interface PaymentProcessor {
    boolean connectToBank();  // Implementation detail
    boolean validateCard();   // Implementation detail
    boolean charge();         // Too vague
}
```

---

## Interface Best Practices

### 1. Functional Interfaces (Java 8+)
```java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Usage with lambda
Calculator add = (a, b) -> a + b;
```

### 2. Marker Interfaces
```java
interface Serializable { } // Marker interface
```

### 3. Default Methods for Evolution
```java
interface List {
    void add(Object o);
    
    // Add new method without breaking existing implementations
    default void forEach(Consumer action) {
        // Default implementation
    }
}
```

---

## Code Quality Principles

### DRY (Don't Repeat Yourself)
```java
// Bad
class Report {
    void generatePDFReport() {
        System.out.println("Report Header");
        // Generate PDF
        System.out.println("Report Footer");
    }
    
    void generateHTMLReport() {
        System.out.println("Report Header");
        // Generate HTML
        System.out.println("Report Footer");
    }
}

// Good
abstract class Report {
    public final void generate() {
        printHeader();
        generateContent();
        printFooter();
    }
    
    private void printHeader() {
        System.out.println("Report Header");
    }
    
    protected abstract void generateContent();
    
    private void printFooter() {
        System.out.println("Report Footer");
    }
}
```

### KISS (Keep It Simple, Stupid)
```java
// Complicated
if ((status == Status.ACTIVE && user.hasPermission()) || 
    (status == Status.PENDING && admin.approved())) {
    // Complex condition
}

// Simple
boolean canAccess = isActiveUser() || isPendingAndApproved();
if (canAccess) {
    // Clear intent
}
```

### YAGNI (You Aren't Gonna Need It)
```java
// Bad - Over-engineering
class User {
    // Current requirements only need name
    private String name;
    
    // YAGNI - Not needed yet
    private String futureField1;
    private String futureField2;
    private Map<String, Object> extensionPoints;
}

// Good - Implement what's needed
class User {
    private String name;
}
```

---

## Common Anti-Patterns to Avoid

### 1. God Object
```java
// Bad - One class does everything
class SystemManager {
    void manageUsers() { }
    void manageDatabase() { }
    void manageNetwork() { }
    void manageUI() { }
    // ... 100 more methods
}
```

### 2. Circular Dependencies
```java
// Bad
class A {
    private B b;
}

class B {
    private A a; // Circular dependency
}
```

### 3. Feature Envy
```java
// Bad - Method in wrong class
class ShoppingCart {
    void calculateDiscount(Customer customer) {
        // Uses mostly Customer data
        if (customer.isPremium()) {
            return customer.getPoints() * 0.1;
        }
    }
}

// Good - Move to Customer class
class Customer {
    double calculateDiscount() {
        if (isPremium()) {
            return points * 0.1;
        }
    }
}
```

---

## Summary Checklist

- [ ] Each class has single responsibility
- [ ] Classes open for extension, closed for modification
- [ ] Subclasses can replace parent without breaking code
- [ ] Interfaces are small and focused
- [ ] Depend on abstractions, not concretions
- [ ] Favor composition over inheritance
- [ ] Fields are private, access through methods
- [ ] Always use @Override annotation
- [ ] Program to interface, not implementation
- [ ] Keep class hierarchies shallow
- [ ] Avoid code duplication (DRY)
- [ ] Keep it simple (KISS)
- [ ] Implement only what's needed (YAGNI)
