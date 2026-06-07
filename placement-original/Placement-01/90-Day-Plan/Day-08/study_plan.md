# Day 8 Study Plan: OOP - Inheritance, Polymorphism & Abstraction

## 📅 Schedule Overview (9 hours total)

### Morning Session (9:00 AM - 12:00 PM) - 3 hours
**Focus**: Inheritance fundamentals and theory

### Afternoon Session (1:00 PM - 5:00 PM) - 4 hours  
**Focus**: Polymorphism, abstraction, and interfaces

### Evening Session (7:00 PM - 9:00 PM) - 2 hours
**Focus**: Practice problems and interview preparation

---

## 🌅 Morning Session (3 hours)

### Hour 1: Inheritance Basics (9:00 AM - 10:00 AM)
**Objectives**:
- Understand the "is-a" relationship
- Learn `extends` keyword
- Master constructor chaining

**Activities**:
1. **Read** (20 min):
   - notes/inheritance_notes.md
   - Oracle Java Inheritance tutorial
   
2. **Study** code/inheritance_basics.java (30 min):
   - Analyze Vehicle → Car → SportsCar hierarchy
   - Trace constructor execution order
   - Understand `super()` keyword usage
   
3. **Practice** (10 min):
   - Create your own Person → Student → GraduateStudent hierarchy
   - Implement constructor chaining

**Key Concepts**:
- Every class extends Object implicitly
- Constructors are not inherited
- `super()` must be first statement in constructor
- `protected` allows access in subclasses

### Hour 2: Method Overriding (10:00 AM - 11:00 AM)
**Objectives**:
- Master method overriding rules
- Use @Override annotation
- Understand access modifier rules

**Activities**:
1. **Read** (15 min):
   - Method overriding rules
   - Covariant return types
   
2. **Code** (35 min):
   - Modify inheritance_basics.java
   - Override toString() method in all classes
   - Override equals() and hashCode()
   - Test with different access modifiers
   
3. **Quiz** (10 min):
   - Can private methods be overridden? (No)
   - Can static methods be overridden? (No, hidden)
   - Can final methods be overridden? (No)
   - Can you reduce visibility when overriding? (No)

**Key Concepts**:
- @Override is not mandatory but recommended
- Cannot reduce visibility (public → protected not allowed)
- Return type must be same or covariant
- Exceptions thrown must be same or subtype

### Hour 3: Polymorphism Introduction (11:00 AM - 12:00 PM)
**Objectives**:
- Differentiate compile-time vs runtime polymorphism
- Understand dynamic method dispatch

**Activities**:
1. **Read** (20 min):
   - notes/polymorphism_notes.md
   - Compile-time vs runtime polymorphism
   
2. **Study** code/polymorphism_demo.java (30 min):
   - Analyze Animal hierarchy
   - Observe dynamic method dispatch
   - Test upcasting and downcasting
   
3. **Experiment** (10 min):
   - Create Shape → Circle, Square
   - Store in Shape[] array
   - Call overridden methods

**Key Concepts**:
- Method overloading = compile-time polymorphism
- Method overriding = runtime polymorphism
- Reference type determines compile-time access
- Object type determines runtime behavior

---

## 🌞 Afternoon Session (4 hours)

### Hour 4: Advanced Polymorphism (1:00 PM - 2:00 PM)
**Objectives**:
- Master upcasting and downcasting
- Use instanceof operator safely

**Activities**:
1. **Code Review** (20 min):
   - Analyze polymorphism_demo.java in detail
   - Trace method calls at runtime
   
2. **Practice** (30 min):
   - Implement polymorphic collections
   - Use instanceof for type checking
   - Practice safe downcasting
   
3. **Debug** (10 min):
   - Intentionally cause ClassCastException
   - Fix with instanceof checks

**Key Concepts**:
- Upcasting is implicit and safe
- Downcasting requires explicit cast and check
- Use instanceof before downcasting
- Polymorphic behavior reduces coupling

### Hour 5: Abstract Classes (2:00 PM - 3:00 PM)
**Objectives**:
- Create and use abstract classes
- Implement abstract methods

**Activities**:
1. **Read** (15 min):
   - notes/abstraction_notes.md
   - When to use abstract classes
   
2. **Study** code/abstraction_demo.java (25 min):
   - Analyze abstract Shape class
   - Understand template method pattern
   - See concrete implementations
   
3. **Code** (20 min):
   - Create abstract Employee class
   - Add abstract calculateSalary() method
   - Implement FullTimeEmployee, ContractEmployee

**Key Concepts**:
- Abstract classes cannot be instantiated
- Can have both abstract and concrete methods
- Subclass must implement all abstract methods
- Use for partial implementation sharing

### Hour 6: Interfaces (3:00 PM - 4:00 PM)
**Objectives**:
- Understand interface purpose
- Implement multiple interfaces

**Activities**:
1. **Read** (15 min):
   - Interface definition and purpose
   - Abstract class vs interface
   
2. **Study** code/interface_demo.java (30 min):
   - Analyze Drawable, Movable interfaces
   - See multiple interface implementation
   - Understand default methods
   
3. **Code** (15 min):
   - Create Comparable, Serializable usage example
   - Implement custom interface

**Key Concepts**:
- All methods are public abstract by default (pre-Java 8)
- Variables are public static final by default
- Can implement multiple interfaces
- Default methods allow evolution without breaking code

### Hour 7: Interface Advanced Features (4:00 PM - 5:00 PM)
**Objectives**:
- Use default and static methods
- Understand functional interfaces

**Activities**:
1. **Read** (15 min):
   - Java 8 interface enhancements
   - Functional interfaces and lambdas
   
2. **Code** (35 min):
   - Add default methods to custom interface
   - Create static utility methods in interface
   - Implement functional interface
   - Resolve diamond problem with default methods
   
3. **Compare** (10 min):
   - Interface vs abstract class decision matrix
   - When to use each

**Key Concepts**:
- Default methods have implementation
- Static methods cannot be inherited
- Functional interface has one abstract method
- @FunctionalInterface annotation

---

## 🌙 Evening Session (2 hours)

### Hour 8: Practice Problems (7:00 PM - 8:00 PM)
**Objectives**:
- Apply OOP concepts to real problems
- Solve 6 practice challenges

**Activities**:
1. **Solve** code/practice_problems.java (50 min):
   - Problem 1: Employee hierarchy
   - Problem 2: Banking system
   - Problem 3: Shape calculator
   - Problem 4: Payment processor
   - Problem 5: Vehicle rental system
   - Problem 6: Animal sounds
   
2. **Test** (10 min):
   - Compile and run all solutions
   - Verify polymorphic behavior

**Problems Overview**:
- Each problem requires inheritance, polymorphism, or abstraction
- Focus on clean design and SOLID principles
- Test with multiple object types

### Hour 9: Interview Preparation (8:00 PM - 9:00 PM)
**Objectives**:
- Master OOP interview questions
- Review SOLID principles

**Activities**:
1. **Read** (20 min):
   - resources/interview_questions.md
   - resources/solid_principles.md
   
2. **Practice** (30 min):
   - Explain inheritance vs composition
   - Design class hierarchies on paper
   - Answer "Why is multiple inheritance not in Java?"
   - Explain method overriding vs overloading
   
3. **Review** (10 min):
   - Quick review of all code examples
   - Update progress.md
   - Note difficult concepts for revision

**Interview Topics**:
- Inheritance vs composition
- Abstract class vs interface
- Method overriding rules
- SOLID principles
- Polymorphism benefits
- Diamond problem
- Covariant return types

---

## 📝 Checkpoints

### After Morning Session
- [ ] Can explain inheritance and "is-a" relationship
- [ ] Understand constructor chaining
- [ ] Know method overriding rules
- [ ] Understand dynamic method dispatch

### After Afternoon Session
- [ ] Can implement abstract classes
- [ ] Understand when to use interfaces
- [ ] Know difference between abstract class and interface
- [ ] Can implement multiple interfaces

### After Evening Session
- [ ] Solved all 6 practice problems
- [ ] Can answer common OOP interview questions
- [ ] Understand SOLID principles
- [ ] Ready to apply OOP in real projects

---

## 🎯 Key Takeaways

### Inheritance
```java
class Parent {
    Parent() { System.out.println("Parent"); }
}
class Child extends Parent {
    Child() { 
        super(); // Implicit if not written
        System.out.println("Child"); 
    }
}
```

### Polymorphism
```java
Animal animal = new Dog(); // Upcasting
animal.makeSound(); // Calls Dog's makeSound() - Runtime polymorphism

if (animal instanceof Dog) {
    Dog dog = (Dog) animal; // Safe downcasting
}
```

### Abstraction
```java
abstract class Shape {
    abstract double area(); // No implementation
    void display() { // Concrete method allowed
        System.out.println("Area: " + area());
    }
}
```

### Interface
```java
interface Drawable {
    void draw(); // Abstract by default
    default void display() { // Default method
        System.out.println("Displaying...");
    }
}
```

---

## 📚 Additional Study Resources

### Videos
- Java OOP Tutorial - Inheritance (30 min)
- Polymorphism Explained - CodeWithMosh (20 min)
- Abstract Classes vs Interfaces (15 min)

### Reading
- Effective Java - Items 17-20 (Inheritance)
- Head First Java - Chapter 7-8
- Oracle Java Tutorial - OOP Concepts

### Practice
- HackerRank OOP challenges
- LeetCode design problems
- CodeChef OOP exercises

---

## ✅ End of Day Goals
By 9:00 PM, you should have:
1. ✅ Created and tested inheritance hierarchies
2. ✅ Implemented polymorphism with method overriding
3. ✅ Used abstract classes and interfaces
4. ✅ Solved 6 OOP practice problems
5. ✅ Understood SOLID principles
6. ✅ Ready to explain OOP concepts in interviews

**Total Code Written**: ~500 lines  
**Concepts Mastered**: 15+  
**Problems Solved**: 6  
**Interview Questions Prepared**: 20+
