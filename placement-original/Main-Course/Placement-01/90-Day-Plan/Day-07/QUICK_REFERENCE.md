# DAY 7: QUICK REFERENCE - INHERITANCE & POLYMORPHISM

## 🔧 KEY SYNTAX & TEMPLATES

### Inheritance
```java
class Parent { }
class Child extends Parent { }
```

### Call parent constructor
```java
class Child extends Parent {
    Child(String arg) {
        super(arg);
    }
}
```

### Accessing parent members
```java
super.someMethod();
super.field;
```

### Overriding
```java
@Override
public void methodName() { /* new behavior */ }
```

### Overloading (Compile-time polymorphism)
```java
void print(int a) {}
void print(String s) {}
void print(int a, int b) {}
```

### Polymorphic reference (Dynamic Dispatch)
```java
Parent ref = new Child();
ref.method(); // Child implementation invoked
```

### Upcasting and Downcasting
```java
Parent ref = new Child(); // implicit upcast
Child c = (Child) ref;     // explicit downcast
if (ref instanceof Child) { /* safe */ }
```

### Inheritance & Access Modifiers
- public: accessible everywhere
- protected: accessible in subclass & same package
- default (package-private): accessible within package only
- private: accessible only within the class

### Abstract Class & Interface
```java
abstract class Animal { abstract void makeSound(); }
class Dog extends Animal { void makeSound() { System.out.println("Bark"); }}

interface Damageable { void takeDamage(int d); }
class Player implements Damageable { public void takeDamage(int d) { /* ... */ }}
```

### Covariant return types
```java
class ParentFactory { Parent create() { return new Parent(); } }
class ChildFactory extends ParentFactory { @Override Child create() { return new Child(); } }
```

### Template Method (Abstract class)
```java
abstract class Game{
    final void template() {
        setup(); start(); end();
    }
    abstract void setup(); abstract void start(); void end(){ }
}
```

---

## ⚠️ COMMON RULES & GOTCHAS
- `final` methods cannot be overridden.
- `static` methods are hidden, not overridden.
- Can't reduce access rights while overriding (public -> private is illegal).
- Constructors are not inherited; the child must call `super()` explicitly when required.
- Use `instanceof` before downcasting to avoid ClassCastException.

---

## PERFORMANCE & COMPLEXITY NOTES
- Inheritance has small runtime overhead only when using polymorphism (virtual method dispatch).
- Composition is often more flexible and preferred for complex systems.

---

## INTERVIEW ONE-LINERS
- "IS-A vs HAS-A: Inheritance vs Composition"
- "Use super() to call base constructor"
- "Upcasting is implicit; downcasting is explicit and can cause ClassCastException"
- "@Override ensures method signature correctness"

---

## QUICK TESTS YOU SHOULD RUN
1. Create multi-level inheritance and verify `super()` call order.
2. Create parent reference to child object and invoke overridden methods.
3. Implement an interface and use arrays of the interface type to call different implementations.

---

**Keep this sheet handy while coding — it summarizes Day 7 essentials!**
