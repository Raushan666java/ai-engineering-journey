# SOLID Principles Explained

## Overview

SOLID is an acronym for five design principles that make software designs more understandable, flexible, and maintainable.

Created by **Robert C. Martin** (Uncle Bob)

---

## 1. Single Responsibility Principle (SRP)

### Definition
**A class should have one, and only one, reason to change.**

### Explanation
Each class should focus on doing one thing and doing it well. If a class has multiple responsibilities, changes to one responsibility may affect the others.

### Example

**❌ Bad (Multiple Responsibilities)**
```java
class Employee {
    private String name;
    private double salary;
    
    // Responsibility 1: Calculate salary
    public double calculateSalary() {
        // Calculation logic
        return salary * 1.1;
    }
    
    // Responsibility 2: Database operations
    public void saveToDatabase() {
        // Database code
        System.out.println("Saving to DB...");
    }
    
    // Responsibility 3: Generate report
    public void generateReport() {
        // Report generation
        System.out.println("Generating report...");
    }
}
```

**✅ Good (Single Responsibility)**
```java
// Only handles employee data
class Employee {
    private String name;
    private double salary;
    
    public double calculateSalary() {
        return salary * 1.1;
    }
    
    public String getName() { return name; }
    public double getSalary() { return salary; }
}

// Only handles database operations
class EmployeeRepository {
    public void save(Employee employee) {
        System.out.println("Saving " + employee.getName() + " to DB");
    }
}

// Only handles report generation
class EmployeeReportGenerator {
    public void generate(Employee employee) {
        System.out.println("Generating report for " + employee.getName());
    }
}
```

### Benefits
- Easier to understand
- Easier to test
- Easier to maintain
- Reduces coupling

---

## 2. Open/Closed Principle (OCP)

### Definition
**Software entities should be open for extension but closed for modification.**

### Explanation
You should be able to add new functionality without changing existing code. Use abstraction to achieve this.

### Example

**❌ Bad (Must Modify for New Types)**
```java
class AreaCalculator {
    public double calculateArea(Object shape) {
        if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            return Math.PI * circle.radius * circle.radius;
        } else if (shape instanceof Rectangle) {
            Rectangle rect = (Rectangle) shape;
            return rect.length * rect.width;
        }
        // Must modify this method to add Triangle
        return 0;
    }
}
```

**✅ Good (Open for Extension)**
```java
// Abstract base class
abstract class Shape {
    public abstract double calculateArea();
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length, width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
}

// Add new shape without modifying existing code
class Triangle extends Shape {
    private double base, height;
    
    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}

// Calculator doesn't need modification
class AreaCalculator {
    public double calculate(Shape shape) {
        return shape.calculateArea();
    }
}
```

### Benefits
- Add features without breaking existing code
- Easier to maintain
- Reduces risk of bugs
- Supports polymorphism

---

## 3. Liskov Substitution Principle (LSP)

### Definition
**Objects of a superclass should be replaceable with objects of a subclass without affecting correctness.**

### Explanation
If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering program correctness.

### Example

**❌ Bad (Violates LSP)**
```java
class Rectangle {
    protected int width;
    protected int height;
    
    public void setWidth(int width) {
        this.width = width;
    }
    
    public void setHeight(int height) {
        this.height = height;
    }
    
    public int getArea() {
        return width * height;
    }
}

class Square extends Rectangle {
    @Override
    public void setWidth(int width) {
        this.width = width;
        this.height = width;  // Violates LSP
    }
    
    @Override
    public void setHeight(int height) {
        this.width = height;
        this.height = height;  // Violates LSP
    }
}

// Test shows violation
void testArea() {
    Rectangle rect = new Square();
    rect.setWidth(5);
    rect.setHeight(4);
    // Expected: 20, Actual: 16 (Square behavior unexpected)
    assert rect.getArea() == 20; // FAILS!
}
```

**✅ Good (Follows LSP)**
```java
interface Shape {
    int getArea();
}

class Rectangle implements Shape {
    private int width;
    private int height;
    
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public int getArea() {
        return width * height;
    }
}

class Square implements Shape {
    private int side;
    
    public Square(int side) {
        this.side = side;
    }
    
    @Override
    public int getArea() {
        return side * side;
    }
}

// No unexpected behavior
void testArea() {
    Shape rect = new Rectangle(5, 4);
    assert rect.getArea() == 20; // PASSES
    
    Shape square = new Square(4);
    assert square.getArea() == 16; // PASSES
}
```

### Benefits
- Ensures correct inheritance
- Prevents unexpected behavior
- Improves reliability
- Supports polymorphism properly

---

## 4. Interface Segregation Principle (ISP)

### Definition
**Clients should not be forced to depend on interfaces they don't use.**

### Explanation
Create specific, focused interfaces rather than one large, general-purpose interface.

### Example

**❌ Bad (Fat Interface)**
```java
interface Worker {
    void work();
    void eat();
    void sleep();
}

class Human implements Worker {
    public void work() { System.out.println("Working"); }
    public void eat() { System.out.println("Eating"); }
    public void sleep() { System.out.println("Sleeping"); }
}

class Robot implements Worker {
    public void work() { System.out.println("Working"); }
    
    // Forced to implement even though robots don't eat/sleep
    public void eat() { 
        throw new UnsupportedOperationException();
    }
    
    public void sleep() { 
        throw new UnsupportedOperationException();
    }
}
```

**✅ Good (Segregated Interfaces)**
```java
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
    public void work() { System.out.println("Working"); }
    public void eat() { System.out.println("Eating"); }
    public void sleep() { System.out.println("Sleeping"); }
}

class Robot implements Workable {
    public void work() { System.out.println("Working"); }
    // Only implements what it needs
}
```

### Benefits
- Smaller, focused interfaces
- Classes implement only needed methods
- Easier to understand
- Reduces coupling

---

## 5. Dependency Inversion Principle (DIP)

### Definition
**High-level modules should not depend on low-level modules. Both should depend on abstractions.**

### Explanation
Depend on interfaces or abstract classes rather than concrete classes. Use dependency injection.

### Example

**❌ Bad (Direct Dependency)**
```java
class MySQLDatabase {
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
}

class UserService {
    private MySQLDatabase database;
    
    public UserService() {
        this.database = new MySQLDatabase(); // Tight coupling
    }
    
    public void saveUser(String userData) {
        database.save(userData);
    }
}

// Hard to switch to MongoDB or test with mock
```

**✅ Good (Dependency Inversion)**
```java
// Abstraction
interface Database {
    void save(String data);
}

// Low-level modules
class MySQLDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
}

class MongoDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving to MongoDB: " + data);
    }
}

// High-level module depends on abstraction
class UserService {
    private Database database;
    
    // Dependency injection
    public UserService(Database database) {
        this.database = database;
    }
    
    public void saveUser(String userData) {
        database.save(userData);
    }
}

// Usage - easily switch implementations
UserService mysqlService = new UserService(new MySQLDatabase());
UserService mongoService = new UserService(new MongoDatabase());
UserService testService = new UserService(new MockDatabase());
```

### Benefits
- Loose coupling
- Easy to test (mock dependencies)
- Easy to swap implementations
- More flexible and maintainable

---

## SOLID Principles Summary

| Principle | What It Says | Key Benefit |
|-----------|--------------|-------------|
| **S**RP | One class, one responsibility | Easier to understand and maintain |
| **O**CP | Open for extension, closed for modification | Add features without breaking code |
| **L**SP | Subtypes must be substitutable | Ensures correct inheritance |
| **I**SP | Many specific interfaces > one general | No forced dependencies |
| **D**IP | Depend on abstractions, not concretions | Loose coupling, easy testing |

---

## How to Apply SOLID

### Design Phase
1. Identify responsibilities (SRP)
2. Design abstractions (OCP, DIP)
3. Ensure substitutability (LSP)
4. Create focused interfaces (ISP)

### Code Review
1. Check class responsibilities
2. Look for hard-coded dependencies
3. Verify inheritance relationships
4. Examine interface sizes

### Refactoring
1. Extract classes with multiple responsibilities
2. Replace conditionals with polymorphism
3. Introduce interfaces for dependencies
4. Split large interfaces

---

## Real-World Examples

### Spring Framework
- **DIP**: Dependency Injection container
- **OCP**: Extensible through configurations
- **ISP**: Focused interfaces (ApplicationContext, etc.)

### Java Collections
- **LSP**: All List implementations are substitutable
- **ISP**: Separate interfaces (List, Set, Map)
- **OCP**: Can add custom implementations

### Design Patterns Using SOLID
- **Strategy Pattern**: OCP, DIP
- **Factory Pattern**: DIP, OCP
- **Observer Pattern**: OCP, ISP
- **Decorator Pattern**: OCP, LSP

---

## Common Violations

### SRP Violations
- God objects (do everything)
- Classes with multiple change reasons

### OCP Violations
- Switch statements on type
- Modifying classes to add features

### LSP Violations
- Throwing unexpected exceptions
- Changing method behavior unexpectedly

### ISP Violations
- Forcing empty implementations
- Large, monolithic interfaces

### DIP Violations
- Creating dependencies with `new`
- Depending on concrete classes

---

## Benefits of Following SOLID

1. **Maintainability**: Easier to update and fix
2. **Testability**: Simple to write unit tests
3. **Flexibility**: Easy to adapt to changes
4. **Scalability**: Support growth without rewrite
5. **Reusability**: Components can be reused
6. **Understandability**: Code is clearer

---

## Interview Tips

**Q: Explain SOLID principles**
- Give definition of each
- Provide simple example
- Explain benefits

**Q: Which SOLID principle is most important?**
- All are important, but SRP is fundamental
- Explain why (everything else builds on it)

**Q: How do SOLID principles relate to design patterns?**
- Many patterns implement SOLID principles
- Give examples (Strategy, Factory, Observer)

**Q: Can you violate SOLID principles?**
- Yes, but understand trade-offs
- Sometimes pragmatism over purity
- Document intentional violations
