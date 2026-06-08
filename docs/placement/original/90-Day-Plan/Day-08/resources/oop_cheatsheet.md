# OOP Quick Reference Cheatsheet

## Inheritance

### Basic Syntax
```java
class Parent { }
class Child extends Parent { }
```

### Constructor Chaining
```java
class Parent {
    Parent(String name) { }
}

class Child extends Parent {
    Child(String name) {
        super(name); // Must be first line
    }
}
```

### Method Overriding
```java
class Parent {
    void method() { }
}

class Child extends Parent {
    @Override  // Recommended
    void method() { }
}
```

### Access Modifiers Visibility
| Modifier | Same Class | Same Package | Subclass | Other |
|----------|-----------|--------------|----------|-------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

---

## Polymorphism

### Runtime Polymorphism
```java
Animal a = new Dog();  // Upcasting
a.makeSound();         // Calls Dog's method
```

### Compile-time Polymorphism
```java
void method(int a) { }
void method(String a) { }  // Overloading
void method(int a, int b) { }
```

### Casting
```java
// Upcasting (implicit)
Parent p = new Child();

// Downcasting (explicit)
if (p instanceof Child) {
    Child c = (Child) p;
}
```

---

## Abstraction

### Abstract Class
```java
abstract class Shape {
    // Abstract method
    abstract double area();
    
    // Concrete method
    void display() {
        System.out.println("Area: " + area());
    }
}

class Circle extends Shape {
    @Override
    double area() { return 3.14 * r * r; }
}
```

### Template Method Pattern
```java
abstract class Algorithm {
    public final void execute() {
        step1();
        step2();
        step3();
    }
    
    protected abstract void step1();
    protected abstract void step2();
    void step3() { } // Optional hook
}
```

---

## Interfaces

### Basic Interface
```java
interface Drawable {
    void draw();  // public abstract by default
}

class Circle implements Drawable {
    public void draw() { }
}
```

### Multiple Interfaces
```java
interface A { }
interface B { }

class C implements A, B { }
```

### Default Methods (Java 8+)
```java
interface MyInterface {
    void abstractMethod();
    
    default void defaultMethod() {
        System.out.println("Default");
    }
    
    static void staticMethod() {
        System.out.println("Static");
    }
}
```

### Functional Interface
```java
@FunctionalInterface
interface Operation {
    int apply(int a, int b);
}

// Lambda usage
Operation add = (a, b) -> a + b;
```

---

## Key Differences

### Overloading vs Overriding
| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Binding | Compile-time | Runtime |
| Parameters | Must differ | Same |
| Return type | Can differ | Same/covariant |
| Class | Same class | Parent-child |

### Abstract Class vs Interface
| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Inheritance | Single | Multiple |
| Variables | Any type | Constants only |
| Constructor | Yes | No |
| Access | Any modifier | Public |
| Methods | Abstract + Concrete | Abstract (+ default/static) |

---

## Object Class Methods

```java
class MyClass {
    @Override
    public String toString() {
        return "MyClass representation";
    }
    
    @Override
    public boolean equals(Object obj) {
        // Compare objects
    }
    
    @Override
    public int hashCode() {
        // Generate hash code
    }
}
```

---

## Common Keywords

### final
```java
final class FinalClass { }        // Cannot inherit
class A {
    final void method() { }       // Cannot override
    final int CONST = 10;         // Cannot modify
}
```

### static
```java
class A {
    static int count;             // Class variable
    static void method() { }      // Class method
    static { }                    // Static block
}
```

### super
```java
class Child extends Parent {
    Child() {
        super();              // Call parent constructor
    }
    
    void method() {
        super.method();       // Call parent method
        super.field;          // Access parent field
    }
}
```

### this
```java
class A {
    int x;
    
    A(int x) {
        this.x = x;           // Reference current object
    }
    
    A() {
        this(10);             // Call another constructor
    }
}
```

---

## instanceof Operator

```java
if (obj instanceof ClassName) {
    ClassName c = (ClassName) obj;
}

// Pattern matching (Java 16+)
if (obj instanceof String s) {
    System.out.println(s.length());
}
```

---

## SOLID Principles Quick Reference

- **S**ingle Responsibility: One class, one purpose
- **O**pen/Closed: Open for extension, closed for modification
- **L**iskov Substitution: Subtypes replaceable with base types
- **I**nterface Segregation: Many specific interfaces > one general
- **D**ependency Inversion: Depend on abstractions, not concretions

---

## Common Patterns

### Factory Pattern
```java
abstract class Animal {
    abstract void makeSound();
}

class AnimalFactory {
    static Animal getAnimal(String type) {
        if (type.equals("dog")) return new Dog();
        if (type.equals("cat")) return new Cat();
        return null;
    }
}
```

### Singleton Pattern
```java
class Singleton {
    private static Singleton instance;
    
    private Singleton() { }
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

---

## Best Practices

✓ Use `@Override` annotation  
✓ Program to interface, not implementation  
✓ Favor composition over inheritance  
✓ Keep fields private  
✓ Override `equals()` with `hashCode()`  
✓ Use meaningful names  
✓ Follow SOLID principles  
✓ Write unit tests  
✗ Avoid deep inheritance hierarchies  
✗ Don't make everything public  
✗ Avoid god objects  

---

## Common Mistakes

❌ Forgetting `super()` in constructor  
❌ Reducing visibility when overriding  
❌ Not using `instanceof` before downcasting  
❌ Confusing method hiding with overriding  
❌ Creating circular dependencies  
❌ Violating Liskov Substitution Principle  
❌ Overriding `equals()` without `hashCode()`  

---

## Quick Decision Tree

**Need to share code?**
- Related classes + state → Abstract Class
- Unrelated classes + contract → Interface

**Need multiple inheritance?**
- Use Interfaces

**Hide implementation?**
- Use Abstract Class or Interface

**Define behavior variants?**
- Use Polymorphism

**Reuse code?**
- Inheritance or Composition (prefer composition)
