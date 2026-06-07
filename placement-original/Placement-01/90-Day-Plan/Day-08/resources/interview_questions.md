# OOP Interview Questions and Answers

## Basic OOP Concepts

### Q1: What are the four pillars of OOP?
**A:** The four pillars of OOP are:
1. **Encapsulation**: Bundling data and methods, hiding internal details
2. **Inheritance**: Creating new classes from existing classes
3. **Polymorphism**: Objects taking many forms
4. **Abstraction**: Hiding implementation details, showing only essential features

---

### Q2: What is the difference between class and object?
**A:**
- **Class**: Blueprint or template that defines properties and behaviors
- **Object**: Instance of a class, actual entity created from the blueprint

```java
class Car { }           // Class (blueprint)
Car myCar = new Car();  // Object (instance)
```

---

### Q3: What is encapsulation? Why is it important?
**A:** Encapsulation is wrapping data (fields) and code (methods) together, restricting direct access to some components.

**Benefits:**
- Data hiding and security
- Controlled access through getters/setters
- Flexibility to change implementation
- Easier maintenance

```java
class Account {
    private double balance;  // Hidden
    
    public void deposit(double amount) {  // Controlled access
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

---

## Inheritance

### Q4: What is inheritance? What are its types?
**A:** Inheritance allows a class to inherit properties and methods from another class.

**Types in Java:**
1. **Single**: Class B extends Class A ✓
2. **Multilevel**: C extends B, B extends A ✓
3. **Hierarchical**: B and C extend A ✓
4. **Multiple**: C extends A and B ✗ (Not supported with classes, use interfaces)
5. **Hybrid**: Combination ✗ (Not supported)

---

### Q5: Why doesn't Java support multiple inheritance with classes?
**A:** To avoid the **Diamond Problem** - ambiguity when two parent classes have the same method.

```java
// Not allowed in Java
class A {
    void method() { }
}

class B {
    void method() { }
}

// class C extends A, B { }  // ERROR: Which method() to inherit?
```

**Solution:** Use interfaces, which can have multiple implementations.

---

### Q6: What is method overriding? What are the rules?
**A:** Method overriding is when a child class provides a specific implementation of a method already defined in parent class.

**Rules:**
1. Same method signature (name + parameters)
2. Cannot reduce access level (public → protected not allowed)
3. Return type must be same or covariant
4. Cannot override static, final, or private methods
5. Use @Override annotation (recommended)

```java
class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}
```

---

### Q7: Can you override static methods?
**A:** No, static methods are **hidden**, not overridden. They belong to the class, not the object.

```java
class Parent {
    static void method() { System.out.println("Parent"); }
}

class Child extends Parent {
    static void method() { System.out.println("Child"); }
}

Parent p = new Child();
p.method();  // Output: "Parent" (based on reference type, not object type)
```

---

### Q8: What is constructor chaining?
**A:** Constructor chaining is calling one constructor from another. Use `super()` to call parent constructor or `this()` to call another constructor in the same class.

```java
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        super();  // Calls Parent constructor (implicit if not written)
        System.out.println("Child constructor");
    }
}
```

---

## Polymorphism

### Q9: What is polymorphism? What are its types?
**A:** Polymorphism means "many forms" - ability of objects to take different forms.

**Types:**
1. **Compile-time (Static)**: Method overloading, operator overloading
2. **Runtime (Dynamic)**: Method overriding, dynamic method dispatch

```java
// Compile-time
void add(int a, int b) { }
void add(double a, double b) { }

// Runtime
Animal a = new Dog();
a.makeSound();  // Calls Dog's makeSound() at runtime
```

---

### Q10: Difference between method overloading and overriding?
**A:**

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| **When** | Compile-time | Runtime |
| **Where** | Same class | Parent-child classes |
| **Parameters** | Must differ | Must be same |
| **Return type** | Can differ | Same/covariant |
| **Access modifier** | Can differ | Cannot reduce |
| **Purpose** | Different ways to call method | Specific implementation |

---

### Q11: What is dynamic method dispatch?
**A:** Dynamic method dispatch is the mechanism where a call to an overridden method is resolved at runtime based on the actual object type, not the reference type.

```java
Animal animal = new Dog();  // Reference: Animal, Object: Dog
animal.makeSound();         // Calls Dog's makeSound() (runtime decision)
```

---

### Q12: What is upcasting and downcasting?
**A:**
- **Upcasting**: Converting subclass reference to superclass reference (implicit, safe)
- **Downcasting**: Converting superclass reference to subclass reference (explicit, risky)

```java
Dog dog = new Dog();
Animal animal = dog;  // Upcasting (implicit)

Animal a = new Dog();
if (a instanceof Dog) {
    Dog d = (Dog) a;  // Downcasting (explicit, safe with instanceof)
}
```

---

## Abstraction

### Q13: What is abstraction? How is it achieved in Java?
**A:** Abstraction hides implementation details and shows only essential features.

**Achieved through:**
1. Abstract classes (0-100% abstraction)
2. Interfaces (100% abstraction, pre-Java 8)

```java
abstract class Animal {
    abstract void makeSound();  // No implementation
}

interface Drawable {
    void draw();  // Abstract method
}
```

---

### Q14: Difference between abstract class and interface?
**A:**

| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| **Inheritance** | Single | Multiple |
| **Variables** | Any type | public static final only |
| **Methods** | Abstract + Concrete | Abstract (+ default/static in Java 8+) |
| **Constructor** | Yes | No |
| **Access modifiers** | Any | public (default) |
| **When to use** | Related classes, shared code | Unrelated classes, contract |

---

### Q15: Can abstract class have constructor?
**A:** Yes, abstract class can have constructor. It's called when a concrete subclass is instantiated.

```java
abstract class Animal {
    String name;
    
    Animal(String name) {  // Constructor
        this.name = name;
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);  // Calls abstract class constructor
    }
}
```

---

### Q16: Can we have abstract method in non-abstract class?
**A:** No, if a class has any abstract method, the class must be declared abstract.

```java
// class MyClass {  // ERROR
//     abstract void method();
// }

abstract class MyClass {  // Correct
    abstract void method();
}
```

---

## Interfaces

### Q17: What are default methods in interfaces (Java 8)?
**A:** Default methods allow adding new methods to interfaces without breaking existing implementations.

```java
interface MyInterface {
    void abstractMethod();
    
    default void defaultMethod() {
        System.out.println("Default implementation");
    }
}

class MyClass implements MyInterface {
    public void abstractMethod() { }
    // No need to implement defaultMethod
}
```

---

### Q18: Can interface have static methods?
**A:** Yes (Java 8+), static methods in interfaces are utility methods that cannot be inherited.

```java
interface Calculator {
    static int add(int a, int b) {
        return a + b;
    }
}

// Usage
int sum = Calculator.add(5, 3);
```

---

### Q19: What is a functional interface?
**A:** A functional interface has exactly one abstract method. Used with lambda expressions.

```java
@FunctionalInterface
interface Operation {
    int apply(int a, int b);
}

// Lambda usage
Operation add = (a, b) -> a + b;
```

---

### Q20: Can a class implement multiple interfaces?
**A:** Yes, a class can implement multiple interfaces, solving the multiple inheritance problem.

```java
interface A { }
interface B { }

class C implements A, B { }
```

---

## Advanced Questions

### Q21: What is the diamond problem?
**A:** Diamond problem occurs when a class inherits from two classes that have the same method, causing ambiguity.

```
     A
    / \
   B   C
    \ /
     D
```

Java avoids this by:
- Not allowing multiple inheritance with classes
- Allowing multiple implementation with interfaces
- Using default methods (must override if conflict)

---

### Q22: Explain "composition over inheritance"
**A:** Favor "has-a" relationships (composition) over "is-a" relationships (inheritance) for flexibility.

```java
// Inheritance (rigid)
class Car extends Engine { }

// Composition (flexible)
class Car {
    private Engine engine;  // Car HAS-A Engine
    
    Car(Engine engine) {
        this.engine = engine;
    }
}
```

**Benefits:**
- More flexible
- Easier to change at runtime
- Avoids inheritance problems

---

### Q23: What are access modifiers? Explain their visibility.
**A:**

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

---

### Q24: What is the purpose of the final keyword?
**A:**
- **final class**: Cannot be inherited
- **final method**: Cannot be overridden
- **final variable**: Cannot be reassigned (constant)

```java
final class FinalClass { }           // Cannot extend
class A {
    final void method() { }         // Cannot override
    final int CONSTANT = 10;        // Cannot change
}
```

---

### Q25: What is covariant return type?
**A:** A overriding method can return a subtype of the type returned by the overridden method.

```java
class Animal {
    Animal reproduce() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    Dog reproduce() {  // Covariant return type (Dog is subtype of Animal)
        return new Dog();
    }
}
```

---

## SOLID Principles

### Q26: What are SOLID principles?
**A:**
- **S**ingle Responsibility: One class, one responsibility
- **O**pen/Closed: Open for extension, closed for modification
- **L**iskov Substitution: Subtypes must be substitutable for base types
- **I**nterface Segregation: Many specific interfaces > one general interface
- **D**ependency Inversion: Depend on abstractions, not concretions

---

### Q27: Explain Liskov Substitution Principle
**A:** Objects of a superclass should be replaceable with objects of subclasses without breaking the application.

```java
// Bad - Square violates LSP
class Rectangle {
    void setWidth(int w) { }
    void setHeight(int h) { }
}

class Square extends Rectangle {
    void setWidth(int w) {
        super.setWidth(w);
        super.setHeight(w);  // Unexpected behavior
    }
}

// Good - Separate hierarchies
interface Shape { int getArea(); }
class Rectangle implements Shape { }
class Square implements Shape { }
```

---

## Object Class Methods

### Q28: Why override equals() and hashCode() together?
**A:** If two objects are equal according to equals(), they must have the same hashCode().

```java
class Person {
    String name;
    
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Person) {
            return this.name.equals(((Person) obj).name);
        }
        return false;
    }
    
    @Override
    public int hashCode() {
        return name.hashCode();
    }
}
```

**Consequence if not overridden together:**
- HashMap, HashSet may not work correctly
- Equal objects might have different hash codes

---

### Q29: What is the difference between == and equals()?
**A:**
- **==**: Compares references (memory addresses)
- **equals()**: Compares object content (can be overridden)

```java
String s1 = new String("Hello");
String s2 = new String("Hello");

s1 == s2;         // false (different objects)
s1.equals(s2);    // true (same content)
```

---

### Q30: What is the purpose of toString() method?
**A:** Provides string representation of an object. Useful for debugging and logging.

```java
class Person {
    String name;
    int age;
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

Person p = new Person();
System.out.println(p);  // Calls toString() automatically
```

---

## Practical Scenarios

### Q31: Design a class hierarchy for a library system
**A:**
```java
abstract class LibraryItem {
    protected String id;
    protected String title;
    protected boolean isAvailable;
    
    abstract double calculateLateFee(int daysLate);
}

class Book extends LibraryItem {
    private String author;
    private String ISBN;
    
    @Override
    double calculateLateFee(int daysLate) {
        return daysLate * 0.50;
    }
}

class Magazine extends LibraryItem {
    private int issueNumber;
    
    @Override
    double calculateLateFee(int daysLate) {
        return daysLate * 0.25;
    }
}

interface Borrowable {
    boolean checkout(String memberId);
    boolean returnItem();
}
```

---

### Q32: How would you implement a payment system with multiple payment methods?
**A:**
```java
interface PaymentMethod {
    boolean processPayment(double amount);
    String getPaymentType();
}

class CreditCard implements PaymentMethod {
    public boolean processPayment(double amount) {
        // Process credit card payment
        return true;
    }
    
    public String getPaymentType() {
        return "Credit Card";
    }
}

class PayPal implements PaymentMethod {
    public boolean processPayment(double amount) {
        // Process PayPal payment
        return true;
    }
    
    public String getPaymentType() {
        return "PayPal";
    }
}

class PaymentProcessor {
    public void process(PaymentMethod method, double amount) {
        if (method.processPayment(amount)) {
            System.out.println("Payment successful via " + method.getPaymentType());
        }
    }
}
```

---

## Quick Tips for Interviews

1. **Always use @Override**: Shows understanding of best practices
2. **Explain with examples**: Draw diagrams if possible
3. **Know real-world uses**: Collections, JDBC, Spring Framework
4. **Understand trade-offs**: When to use inheritance vs composition
5. **SOLID principles**: Be ready to explain with examples
6. **Practice coding**: Implement hierarchies on whiteboard
