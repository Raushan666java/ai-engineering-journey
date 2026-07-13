# Chapter 1: Introduction to Object-Oriented Programming

> **Previous:** None | **Next:** [Classes and Objects](./02-classes-objects.md)

## Learning Objectives

After studying this chapter, students will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/hero.svg" alt="Chapter Banner: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/handwritten-notes.svg" alt="Handwritten Notes: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/sticky-notes.svg" alt="Sticky Notes: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/visual-explanation.svg" alt="Visual Explanation: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/architecture.svg" alt="Architecture: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/workflow.svg" alt="Workflow: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/mindmap.svg" alt="Mind Map: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/comparison.svg" alt="Comparison: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/cheatsheet.svg" alt="Cheat Sheet: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/interview-quiz.svg" alt="Quiz Card: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/oop-cpp/01-introduction/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/oop-cpp/01-introduction/social-card.svg" alt="Social Card: Chapter 1: Introduction to Object-Oriented Programming" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Define OOP and contrast it with procedural programming across 10+ dimensions
- Identify and explain the four pillars: encapsulation, inheritance, polymorphism, abstraction
- Distinguish between a class and an object with precise terminology
- Model real-world entities as objects with state, behaviour, and identity
- Explain message passing and its role in object collaboration
- Trace the historical evolution of OOP from Simula-67 to modern languages
- Implement basic OOP constructs in C++ with compilable examples
- Analyse the complexity and trade-offs of OOP design decisions
- Connect OOP concepts to real-world systems (GUI, games, OS, frameworks)

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| What is OOP | Programming paradigm that groups data + behaviour into objects | Model real-world entities directly in code |
| Procedural vs OOP | Procedures operate on separate data; objects unite them | OOP reduces coupling for large systems |
| Class vs Object | Class = blueprint, Object = instance | One class can produce millions of objects |
| Encapsulation | Bundle data + methods; hide internal state | Use `private:` data with `public:` getters/setters |
| Inheritance | Child class acquires parent properties | Reuse code; model is-a relationships |
| Polymorphism | One interface, many implementations | Write generic code that works with any derived type |
| Abstraction | Hide complexity; expose only essentials | Separate interface from implementation |
| Message Passing | Objects communicate by sending/receiving messages | Loose coupling through method calls |
| Benefits | Reusability, maintainability, scalability, security | OOP dominates enterprise software |

## Chapter Roadmap

```mermaid
flowchart LR
    A[What is OOP] --> B[Procedural vs OOP]
    B --> C[Class vs Object]
    C --> D[Encapsulation]
    D --> E[Inheritance]
    E --> F[Polymorphism]
    F --> G[Abstraction]
    G --> H[Message Passing]
    H --> I[Benefits & Applications]
```

---

## 1.1 What is Object-Oriented Programming?

> **One-Sentence Takeaway:** OOP is a programming paradigm that organises code around objects→bundles of data (attributes) and behaviour (methods)→rather than around functions and logic.

### 1.1.1 The Core Idea

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-handwritten.svg" alt="Handwritten: 1.1.1 The Core Idea" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-diagram.svg" alt="Diagram: 1.1.1 The Core Idea" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-1-the-core-idea-sticky.svg" alt="Sticky Note: 1.1.1 The Core Idea" width="30%">
</a>


Object-Oriented Programming (OOP) is a paradigm that models software as a collection of interacting objects rather than as a sequence of procedures. Each object represents a real-world entity→a user, a bank account, a GUI button, a game character→and holds both the data describing that entity and the operations that can be performed on it.

In procedural programming, the unit of organisation is the **function**. Data flows into a function, gets transformed, and flows out. In OOP, the unit of organisation is the **object**→a self-contained unit that owns its data and exposes a controlled set of operations.

| Aspect | Procedural Thinking | OOP Thinking |
|--------|-------------------|--------------|
| "I need to compute a salary" | Call `compute_salary(emp_id, hours, rate)` | Ask `employee.computeSalary()` |
| "I need to save a record" | Call `save_to_db(record_struct, table_name)` | Ask `record.save()` |
| "I need to draw a shape" | Switch on `shape_type` in a big function | Ask `shape.draw()` → each shape knows how |

### 1.1.2 The Three Dimensions of an Object

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-handwritten.svg" alt="Handwritten: 1.1.2 The Three Dimensions of an Object" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-diagram.svg" alt="Diagram: 1.1.2 The Three Dimensions of an Object" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-1-2-the-three-dimensions-of-an-object-sticky.svg" alt="Sticky Note: 1.1.2 The Three Dimensions of an Object" width="30%">
</a>


Every object has three essential dimensions:

1. **Identity** → a unique handle that distinguishes this object from all others (its memory address or a unique ID).
2. **State** → the data stored inside the object (member variables).
3. **Behaviour** → the operations the object can perform (member functions / methods).

```cpp
#include <iostream>
#include <string>

class BankAccount {
private:
    std::string accountId;      // Identity
    double balance;              // State

public:
    BankAccount(std::string id, double initialBal)
        : accountId(id), balance(initialBal) {}

    void deposit(double amount) {           // Behaviour
        if (amount > 0) balance += amount;
    }

    bool withdraw(double amount) {          // Behaviour
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    double getBalance() const { return balance; }
    std::string getId() const { return accountId; }
};

int main() {
    BankAccount acc1("A001", 1000.0);
    BankAccount acc2("A002", 500.0);

    acc1.deposit(250.0);
    acc2.withdraw(100.0);

    std::cout << acc1.getId() << " balance: " << acc1.getBalance() << "\n";
    std::cout << acc2.getId() << " balance: " << acc2.getBalance() << "\n";
    return 0;
}
```

**Output:**
```
A001 balance: 1250
A002 balance: 400
```

**Dry Run / Walkthrough:**

| Step | Line(s) | What Happens | acc1 State | acc2 State |
|------|---------|-------------|------------|------------|
| 1 | `BankAccount acc1("A001", 1000.0)` | Constructor runs; accountId="A001", balance=1000.0 | {A001, 1000.0} | → |
| 2 | `BankAccount acc2("A002", 500.0)` | Constructor runs; accountId="A002", balance=500.0 | {A001, 1000.0} | {A002, 500.0} |
| 3 | `acc1.deposit(250.0)` | balance = 1000.0 + 250.0 = 1250.0 | {A001, 1250.0} | {A002, 500.0} |
| 4 | `acc2.withdraw(100.0)` | 100.0 &lt;= 500.0 → true; balance = 500.0 - 100.0 = 400.0 | {A001, 1250.0} | {A002, 400.0} |
| 5 | `acc1.getBalance()` | Returns 1250.0 | printed | → |
| 6 | `acc2.getBalance()` | Returns 400.0 | → | printed |

**Complexity Analysis:**

| Operation | Time Complexity | Why |
|-----------|----------------|-----|
| Constructor | O(1) | String copy dominates, but fixed per call |
| `deposit` | O(1) | Single double addition and bounds check |
| `withdraw` | O(1) | One comparison + one subtraction |
| `getBalance` / `getId` | O(1) | Direct member access (inlined by compiler) |
| Object creation (heap) | O(1) amortised | Memory allocation is constant-time amortised |

---

## 1.2 Procedural Programming vs OOP

> **One-Sentence Takeaway:** Procedural code separates data from behaviour; OOP unites them→making large systems easier to reason about, extend, and maintain.

### 1.2.1 Procedural Style → Data and Functions Are Separate

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-handwritten.svg" alt="Handwritten: 1.2.1 Procedural Style → Data and Functions Are Separate" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-diagram.svg" alt="Diagram: 1.2.1 Procedural Style → Data and Functions Are Separate" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-1-procedural-style-data-and-functions-are-separate-sticky.svg" alt="Sticky Note: 1.2.1 Procedural Style → Data and Functions Are Separate" width="30%">
</a>


In procedural programming, data structures (structs) hold only data, and functions operate on those structures. The programmer must remember which function works with which struct.

```cpp
// Procedural approach → data and functions are separate

#include <iostream>
#include <string>

struct Account {
    std::string id;
    double balance;
};

void deposit(Account* acc, double amount) {
    if (amount > 0 && acc != nullptr) {
        acc->balance += amount;
    }
}

bool withdraw(Account* acc, double amount) {
    if (acc == nullptr) return false;
    if (amount > 0 && amount <= acc->balance) {
        acc->balance -= amount;
        return true;
    }
    return false;
}

void print(const Account* acc) {
    if (acc) {
        std::cout << acc->id << ": " << acc->balance << "\n";
    }
}

int main() {
    Account a1{"A001", 1000.0};
    Account a2{"A002", 500.0};

    deposit(&a1, 250.0);
    withdraw(&a2, 100.0);

    print(&a1);
    print(&a2);
    return 0;
}
```

**Output:**
```
A001: 1250
A002: 400
```

**Problems with this approach as systems grow:**

1. **No ownership** → any function can modify any field of any struct.
2. **Scattered logic** → `deposit`, `withdraw`, `print` all live independently; nothing groups them.
3. **Easy to misuse** → passing a `nullptr` or the wrong struct type compiles fine.
4. **Poor scalability** → adding a new account type (e.g., `SavingsAccount`) requires editing all functions.

### 1.2.2 OOP Style → Data and Behaviour Are United

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-handwritten.svg" alt="Handwritten: 1.2.2 OOP Style → Data and Behaviour Are United" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-diagram.svg" alt="Diagram: 1.2.2 OOP Style → Data and Behaviour Are United" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-2-oop-style-data-and-behaviour-are-united-sticky.svg" alt="Sticky Note: 1.2.2 OOP Style → Data and Behaviour Are United" width="30%">
</a>


The same logic in OOP style (as shown in Â§1.1.2) groups data and behaviour inside the class. The object protects its data and exposes only intentional operations.

### 1.2.3 Deep Comparison Table

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-handwritten.svg" alt="Handwritten: 1.2.3 Deep Comparison Table" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-diagram.svg" alt="Diagram: 1.2.3 Deep Comparison Table" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-3-deep-comparison-table-sticky.svg" alt="Sticky Note: 1.2.3 Deep Comparison Table" width="30%">
</a>


| Dimension | Procedural Programming | Object-Oriented Programming |
|-----------|----------------------|---------------------------|
| **Unit of organisation** | Functions | Objects (classes) |
| **Data ownership** | Data is passed around; no owner | Each object owns its data |
| **Abstraction mechanism** | Functions (hide implementation) | Classes + interfaces (hide data + implementation) |
| **Reusability unit** | Functions, libraries | Classes, inheritance hierarchies, templates |
| **State management** | Global variables + local state | Per-object state (encapsulated) |
| **Coupling** | High (functions depend on struct layouts) | Low (objects communicate through interfaces) |
| **Cohesion** | Low (related data & functions are scattered) | High (data + methods co-located) |
| **Security / data hiding** | None (all fields accessible) | `private:` / `protected:` access specifiers |
| **Extensibility** | Modify existing functions or add new ones | Add new classes via inheritance without touching existing code |
| **Code reuse** | Copy-paste or shared libraries (loose) | Inheritance, composition, polymorphism (tight + flexible) |
| **Testing** | Harder (mock data separately from functions) | Easier (mock objects / dependency injection) |
| **Mental model** | "The computer executes steps on data" | "Objects send messages to each other" |
| **Best suited for** | Small to medium programs, algorithms, embedded | Large enterprise systems, GUI, games, frameworks |
| **Real-world mapping** | Weak (no natural mapping to entities) | Strong (each real entity = one object) |
| **Parallelism** | Functions share global data (race-prone) | Objects can own private state (easier to isolate) |

### 1.2.4 When Each Approach Shines

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-handwritten.svg" alt="Handwritten: 1.2.4 When Each Approach Shines" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-diagram.svg" alt="Diagram: 1.2.4 When Each Approach Shines" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-2-4-when-each-approach-shines-sticky.svg" alt="Sticky Note: 1.2.4 When Each Approach Shines" width="30%">
</a>


| Scenario | Use Procedural | Use OOP |
|----------|---------------|---------|
| Write a 50-line data-crunching script | âœ“ | Decent but overkill |
| Build a GUI with 200 buttons, windows, dialogs | Painful | âœ“ Natural fit |
| Implement a physics engine | âœ“ Core algorithms are functional | Some OOP for entities |
| Design a banking system with 50 account types | Maintenance nightmare | âœ“ Inheritance handles this |
| Write firmware for a microcontroller | âœ“ (limited resources) | Needle in a haystack |
| Build a web framework (e.g., Spring, ASP.NET) | Not practical | âœ“ Framework design demands OOP |

---

## 1.3 Class vs Object

> **One-Sentence Takeaway:** A class is the blueprint; an object is the house built from that blueprint.

### 1.3.1 The Blueprint Analogy

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-handwritten.svg" alt="Handwritten: 1.3.1 The Blueprint Analogy" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-diagram.svg" alt="Diagram: 1.3.1 The Blueprint Analogy" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-1-the-blueprint-analogy-sticky.svg" alt="Sticky Note: 1.3.1 The Blueprint Analogy" width="30%">
</a>


A **class** is a compile-time concept→it defines the structure (which data members exist) and the behaviour (which methods exist) but occupies no runtime memory by itself. An **object** is a runtime entity→a concrete instance of a class that has its own memory, its own copy of member variables, and a distinct identity.

| Aspect | Class | Object |
|--------|-------|--------|
| **Definition** | User-defined type / template | Concrete instance of a class |
| **Memory** | Zero bytes at runtime (just a type descriptor in the compiled binary) | Occupies `sizeof(ClassName)` bytes on stack or heap |
| **Existence** | Compile-time concept | Runtime entity |
| **Number** | One class definition per program | Zero to millions of objects |
| **State** | No state (defines variable types, not values) | Holds actual values for each member |
| **Creation** | Written by the programmer in source | Created via `new` or stack declaration |
| **Destruction** | Never destroyed | Destroyed via `delete` or scope exit |
| **Analogy** | Blueprint for a car | The actual car on the road |
| **C++ keyword** | `class` or `struct` | Variable name of the class type |

### 1.3.2 Why Distinguish?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-handwritten.svg" alt="Handwritten: 1.3.2 Why Distinguish?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-diagram.svg" alt="Diagram: 1.3.2 Why Distinguish?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-2-why-distinguish-sticky.svg" alt="Sticky Note: 1.3.2 Why Distinguish?" width="30%">
</a>


```cpp
#include <iostream>
#include <string>

class Car {
public:
    std::string model;
    int year;

    Car(std::string m, int y) : model(m), year(y) {}

    void honk() const {
        std::cout << model << " says Beep!\n";
    }
};

int main() {
    // 'Car' is the class (blueprint)
    // 'myCar' and 'yourCar' are objects (instances)
    Car myCar("Toyota Camry", 2022);
    Car yourCar("Honda Accord", 2023);

    myCar.honk();    // Toyota Camry says Beep!
    yourCar.honk();  // Honda Accord says Beep!

    std::cout << "Size of Car class (per object): " << sizeof(Car) << " bytes\n";

    return 0;
}
```

**Output:**
```
Toyota Camry says Beep!
Honda Accord says Beep!
Size of Car class (per object): 40 bytes
```

### 1.3.3 Class vs Object Comparison Table

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-handwritten.svg" alt="Handwritten: 1.3.3 Class vs Object Comparison Table" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-diagram.svg" alt="Diagram: 1.3.3 Class vs Object Comparison Table" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-3-class-vs-object-comparison-table-sticky.svg" alt="Sticky Note: 1.3.3 Class vs Object Comparison Table" width="30%">
</a>


| Criterion | Class | Object |
|-----------|-------|--------|
| Defined at | Compile time (source code) | Runtime (execution) |
| Memory allocated | Never (just type info) | Yes, on declaration |
| Can have data values | No (declares member types only) | Yes (each object stores its own values) |
| Can invoke methods | No (you cannot call `Car::honk()` without an object) | Yes (`myCar.honk()`) |
| Can be passed as parameter | As a type parameter (templates) | As a value, pointer, or reference |
| Exists in | Source file | Stack or heap at runtime |
| Number of copies | Exactly 1 per translation unit | N (as many as you create) |
| Access specifiers matter at | Compile-time access checking | Same rules apply to the instance |

### 1.3.4 Visualising Class vs Object in Memory

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-handwritten.svg" alt="Handwritten: 1.3.4 Visualising Class vs Object in Memory" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-diagram.svg" alt="Diagram: 1.3.4 Visualising Class vs Object in Memory" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-3-4-visualising-class-vs-object-in-memory-sticky.svg" alt="Sticky Note: 1.3.4 Visualising Class vs Object in Memory" width="30%">
</a>


```
CLASS (compile time)                OBJECTS (runtime)
+---------------------+            +-----------------------+
|   class Car         |            | myCar (stack, addr 0x1000) |
|  - model : string   |            |  model: "Toyota Camry" |
|  - year  : int      |  =====>    |  year : 2022           |
|  + honk()           |  instantiate|-----------------------|
|  + Car(m, y)        |            | yourCar (stack, addr 0x1030)|
+---------------------+            |  model: "Honda Accord"|
                                   |  year : 2023           |
                                   +-----------------------+
```

---

## 1.4 History of OOP → A Timeline

> **One-Sentence Takeaway:** OOP evolved over five decades from simulation languages to the dominant paradigm in enterprise, web, and systems programming.

| Year | Milestone | Key Figure(s) | Significance |
|------|-----------|---------------|-------------|
| **1962** | **Simula I** invented at Norwegian Computing Center | Ole-Johan Dahl, Kristen Nygaard | First language with classes, objects, inheritance, dynamic binding. Designed for simulation. |
| **1967** | **Simula 67** released | Dahl, Nygaard | Formalised class, subclass, virtual methods, and `this` reference. Considered the first true OOP language. |
| **1972** | **Smalltalk-72** at Xerox PARC | Alan Kay, Dan Ingalls, Adele Goldberg | Pure OOP language where "everything is an object." Introduced the term "OOP." MVC pattern born here. |
| **1980** | **Smalltalk-80** released | Kay, Ingalls, Goldberg | Fully-reflective OOP with IDE, debugger, inspector. Influenced Java, Python, Ruby. |
| **1979** | **C++** (initially "C with Classes") | Bjarne Stroustrup at Bell Labs | Added classes, inheritance, strong typing to C. First widely-used hybrid (procedural + OOP) language. |
| **1983** | **C++** named and released | Stroustrup | Added virtual functions, operator overloading, references. |
| **1985** | **C++ 1.0** commercial release | Stroustrup | First commercial C++ compiler (Cfront). OOP reachable to systems programmers. |
| **1986** | **Objective-C** created | Brad Cox, Tom Love at Stepstone | Smalltalk-style OOP added to C. Later became the foundation for iOS/macOS. |
| **1986** | Eiffel language released | Bertrand Meyer | Introduced Design by Contract (DbC). Pure OOP with rigorous type system. |
| **1991** | **Python** released | Guido van Rossum | Multi-paradigm with first-class OOP support. Classes, inheritance, duck typing. |
| **1995** | **Java 1.0** released | James Gosling at Sun Microsystems | "Write once, run anywhere." Pure OOP (primitives excepted). Became the dominant enterprise OOP language. |
| **1995** | **Ruby** released | Yukihiro Matsumoto | Pure OOP. Everything is an object, including numbers. Influenced by Smalltalk, Perl, Lisp. |
| **2000** | **C# 1.0** released | Anders Hejlsberg at Microsoft | Java-like OOP with component-oriented features. Properties, events, delegates. |
| **2000** | **PHP 4** adds OOP | Zend Technologies | Classes and objects introduced to the web scripting world. |
| **2005** | **PHP 5** major OOP overhaul | Zend | Real OOP with `private`/`protected`/`public`, interfaces, exceptions. |
| **2011** | **C++11** → modern C++ | ISO C++ Committee | Major OOP enhancements: move semantics, `auto`, lambdas, `nullptr`. Modern C++ idiom established. |
| **2014** | **Swift 1.0** released | Apple (Chris Lattner) | Protocol-oriented + OOP. Protocols (interfaces) as primary abstraction mechanism. |
| **2020s** | OOP influence absorbed by all mainstream languages | Community | Even functional languages (Scala, Kotlin) include classes; OOP patterns ubiquitous in frameworks. |

### Key Observations from the Timeline

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-handwritten.svg" alt="Handwritten: Key Observations from the Timeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-diagram.svg" alt="Diagram: Key Observations from the Timeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-observations-from-the-timeline-sticky.svg" alt="Sticky Note: Key Observations from the Timeline" width="30%">
</a>


1. **OOP started with simulation** → Dahl and Nygaard needed to model real-world entities (ships, queues, cargo). Objects were the natural unit.
2. **Smalltalk defined the vision** → Alan Kay coined "object-oriented programming" and imagined a world of communicating objects (inspired by biological cells and computers on the ARPANET).
3. **C++ made OOP practical for systems programming** → Stroustrup's hybrid approach let programmers choose when to use OOP, enabling gradual adoption.
4. **Java made OOP mainstream** → Sun's marketing and the web boom catapulted OOP to the dominant paradigm.
5. **Modern languages are multi-paradigm** → Pure OOP is rare now; most languages mix OOP, functional, and procedural styles.

---

## 1.5 Real-World Analogies with C++ Code

### Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-handwritten.svg" alt="Handwritten: Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-diagram.svg" alt="Diagram: Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-1-the-car-blueprint-class-and-actual-cars-objects-sticky.svg" alt="Sticky Note: Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)" width="30%">
</a>


| Real World | C++ Equivalent |
|------------|---------------|
| Blueprint for a car | `class Car { ... };` |
| An actual car on the road | `Car myCar;` |
| Car's colour, speed, fuel level | Member variables (`color_`, `speed_`, `fuel_`) |
| Accelerate, brake, turn | Member functions (`accelerate()`, `brake()`, `turn()`) |
| Press the gas pedal = message | Method call: `myCar.accelerate(10)` |

```cpp
#include <iostream>
#include <string>

class Car {
private:
    std::string color_;
    int speed_;       // km/h
    int fuel_;        // litres

public:
    Car(std::string color, int fuel)
        : color_(color), speed_(0), fuel_(fuel) {}

    void accelerate(int amount) {
        if (fuel_ <= 0) {
            std::cout << "Out of fuel!\n";
            return;
        }
        speed_ += amount;
        fuel_ -= 1;  // burn 1 litre per acceleration
        std::cout << color_ << " car accelerates to " << speed_ << " km/h\n";
    }

    void brake() {
        speed_ = 0;
        std::cout << color_ << " car stopped.\n";
    }

    int getSpeed() const { return speed_; }
    int getFuel() const { return fuel_; }
};

int main() {
    Car redCar("Red", 10);    // Blueprint → object (red car with 10L fuel)
    Car blueCar("Blue", 5);   // Blueprint → object (blue car with 5L fuel)

    redCar.accelerate(20);    // Send "accelerate" message to redCar
    redCar.accelerate(10);    // Send "accelerate" message again
    blueCar.accelerate(30);   // Send "accelerate" message to blueCar

    std::cout << "Red car speed: " << redCar.getSpeed() << " km/h\n";
    std::cout << "Blue car fuel: " << blueCar.getFuel() << " L\n";

    return 0;
}
```

**Output:**
```
Red car accelerates to 20 km/h
Red car accelerates to 30 km/h
Blue car accelerates to 30 km/h
Red car speed: 30 km/h
Blue car fuel: 4 L
```

**Dry Run / Step-by-Step:**

| Step | Code | Effect | redCar state | blueCar state |
|------|------|--------|-------------|-------------|
| 1 | `Car redCar("Red", 10)` | Constructor | color=Red, speed=0, fuel=10 | → |
| 2 | `Car blueCar("Blue", 5)` | Constructor | as above | color=Blue, speed=0, fuel=5 |
| 3 | `redCar.accelerate(20)` | speed=0+20=20, fuel=10-1=9 | speed=20, fuel=9 | unchanged |
| 4 | `redCar.accelerate(10)` | speed=20+10=30, fuel=9-1=8 | speed=30, fuel=8 | unchanged |
| 5 | `blueCar.accelerate(30)` | speed=0+30=30, fuel=5-1=4 | unchanged | speed=30, fuel=4 |
| 6 | `redCar.getSpeed()` | returns 30 | → | → |

---

### Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-handwritten.svg" alt="Handwritten: Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-diagram.svg" alt="Diagram: Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-2-restaurant-kitchen-chef-orders-and-plates-sticky.svg" alt="Sticky Note: Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates" width="30%">
</a>


This analogy models **object collaboration** (message passing).

| Real World | C++ Equivalent |
|------------|---------------|
| Chef | `class Chef { ... };` |
| Order ticket | `class Order { ... };` |
| Plate of food | `class Plate { ... };` |
| Chef receives order | `Chef.cook(order)` → message passing |
| Order has items | `Order::items_` → member data |

```cpp
#include <iostream>
#include <string>
#include <vector>

class Order {
public:
    std::vector<std::string> items;
    int tableNumber;

    Order(std::vector<std::string> i, int t) : items(i), tableNumber(t) {}
};

class Plate {
public:
    std::string food;
    int tableNumber;

    Plate(std::string f, int t) : food(f), tableNumber(t) {}
};

class Chef {
private:
    std::string name_;

public:
    Chef(std::string name) : name_(name) {}

    Plate cook(const Order& order) {
        std::cout << name_ << " is cooking for table " << order.tableNumber << "\n";
        std::string combined;
        for (const auto& item : order.items) {
            combined += item + " ";
        }
        return Plate(combined, order.tableNumber);
    }
};

class Waiter {
private:
    Chef& chef_;

public:
    Waiter(Chef& chef) : chef_(chef) {}

    void serve(const Order& order) {
        std::cout << "Waiter delivers order to chef...\n";
        Plate plate = chef_.cook(order);   // Message passing: Waiter → Chef
        std::cout << "Serving \"" << plate.food
                  << "\" to table " << plate.tableNumber << "\n";
    }
};

int main() {
    Chef chef("Gordon");
    Waiter waiter(chef);

    Order order({"Steak", "Fries", "Salad"}, 7);

    waiter.serve(order);  // Waiter sends message to Chef via serve()

    return 0;
}
```

**Output:**
```
Waiter delivers order to chef...
Gordon is cooking for table 7
Serving "Steak Fries Salad " to table 7
```

**Objects and their interactions:**

```
[Waiter] --serve(order)--> [Chef] --cook(order)--> returns Plate
    |                                                |
    |              Message Passing Chain             |
    +------------------------------------------------+
```

---

### Analogy 3: ATM Machine → State, Behaviour, Encapsulation

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-handwritten.svg" alt="Handwritten: Analogy 3: ATM Machine → State, Behaviour, Encapsulation" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-diagram.svg" alt="Diagram: Analogy 3: ATM Machine → State, Behaviour, Encapsulation" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/analogy-3-atm-machine-state-behaviour-encapsulation-sticky.svg" alt="Sticky Note: Analogy 3: ATM Machine → State, Behaviour, Encapsulation" width="30%">
</a>


```cpp
#include <iostream>
#include <string>

class ATM {
private:
    std::string location_;
    double cashAvailable_;
    bool isOnline_;

public:
    ATM(std::string loc, double initialCash)
        : location_(loc), cashAvailable_(initialCash), isOnline_(true) {}

    bool dispenseCash(double amount) {
        if (!isOnline_) {
            std::cout << "ATM offline.\n";
            return false;
        }
        if (amount > cashAvailable_) {
            std::cout << "Insufficient cash in ATM.\n";
            return false;
        }
        cashAvailable_ -= amount;
        std::cout << "Dispensed $" << amount << " from " << location_ << "\n";
        return true;
    }

    double getCashLevel() const { return cashAvailable_; }
    bool isOnline() const { return isOnline_; }
    void setOnline(bool status) { isOnline_ = status; }
};

int main() {
    ATM atm("Main Street Branch", 10000.0);

    atm.dispenseCash(2000.0);   // Customer withdraws
    atm.dispenseCash(9000.0);   // Another withdrawal → may fail
    atm.dispenseCash(500.0);    // After cash runs low

    std::cout << "Remaining cash: $" << atm.getCashLevel() << "\n";
    return 0;
}
```

**Output:**
```
Dispensed $2000 from Main Street Branch
Dispensed $9000 from Main Street Branch
Insufficient cash in ATM.
Remaining cash: $800
```

**Complexity Analysis of ATM Example:**

| Operation | Complexity | Why |
|-----------|------------|-----|
| `dispenseCash` | O(1) | Constant-time checks and subtraction |
| `getCashLevel` | O(1) | Direct field access |
| Object creation | O(1) | String copy + double assignment |

---

## 1.6 The Four Pillars of OOP → Overview

> **One-Sentence Takeaway:** Encapsulation hides data, inheritance reuses code, polymorphism swaps behaviour, abstraction simplifies interfaces → together they enable scalable, maintainable software.

| Pillar | Definition | Real-World Analogy | C++ Mechanism | Key Benefit |
|--------|------------|-------------------|---------------|-------------|
| **Encapsulation** | Bundle data + methods; hide internal state | A pill capsule contains medicine but hides its chemical composition | `private:` members + `public:` methods | Data protection, controlled access |
| **Inheritance** | Create new classes from existing ones | Child inherits parent's DNA but has unique traits | `class Derived : public Base { }` | Code reuse, is-a relationships |
| **Polymorphism** | One interface, many implementations | A "play" button works on DVD, Spotify, YouTube differently | Virtual functions + overriding | Extensibility, generic code |
| **Abstraction** | Hide complexity; expose only what's needed | Driving a car: you use steering wheel + pedals, not the engine internals | Pure virtual classes / interfaces | Reduce cognitive load, decouple usage from implementation |

### Detailed Exploration of Each Pillar (Sections 1.6.1â€“1.6.4)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-handwritten.svg" alt="Handwritten: Detailed Exploration of Each Pillar (Sections 1.6.1â€“1.6.4)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-diagram.svg" alt="Diagram: Detailed Exploration of Each Pillar (Sections 1.6.1â€“1.6.4)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/detailed-exploration-of-each-pillar-sections-1-6-1-1-6-4-sticky.svg" alt="Sticky Note: Detailed Exploration of Each Pillar (Sections 1.6.1â€“1.6.4)" width="30%">
</a>


### 1.6.1 Encapsulation → The First Pillar

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-handwritten.svg" alt="Handwritten: 1.6.1 Encapsulation → The First Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-diagram.svg" alt="Diagram: 1.6.1 Encapsulation → The First Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-1-encapsulation-the-first-pillar-sticky.svg" alt="Sticky Note: 1.6.1 Encapsulation → The First Pillar" width="30%">
</a>


> **One-Sentence Takeaway:** Encapsulation wraps data and functions into a single unit and restricts direct access to an object's internal state.

**Why it matters:** Without encapsulation, any part of the program could modify any data structure, leading to unpredictable states and impossible-to-track bugs.

**Numbered mechanism in C++:**

1. Declare member variables in the `private:` section.
2. Provide `public:` getter and setter methods for controlled access.
3. Implement validation logic inside setters.
4. Keep implementation details hidden; expose only the interface.
5. Users interact with the object through its public API only.

```cpp
#include <iostream>
#include <string>

class Employee {
private:
    std::string name_;
    int age_;
    double salary_;

public:
    Employee(std::string name, int age, double salary)
        : name_(name), age_(age), salary_(salary) {}

    // Getter → controlled read access
    std::string getName() const { return name_; }
    int getAge() const { return age_; }
    double getSalary() const { return salary_; }

    // Setter with validation → controlled write access
    void setAge(int age) {
        if (age >= 18 && age <= 90) {
            age_ = age;
        } else {
            std::cout << "Invalid age: " << age << "\n";
        }
    }

    void setSalary(double salary) {
        if (salary >= 0) {
            salary_ = salary;
        } else {
            std::cout << "Salary cannot be negative.\n";
        }
    }

    void giveRaise(double percent) {
        if (percent > 0) {
            salary_ *= (1.0 + percent / 100.0);
        }
    }
};

int main() {
    Employee emp("Alice", 30, 50000.0);

    // emp.salary_ = 100000;   // ERROR: salary_ is private
    emp.giveRaise(10.0);       // 10% raise through public API

    std::cout << emp.getName() << " earns $"
              << emp.getSalary() << "\n";

    emp.setAge(150);           // Invalid → will be rejected
    std::cout << "Age remains: " << emp.getAge() << "\n";

    return 0;
}
```

**Output:**
```
Alice earns $55000
Invalid age: 150
Age remains: 30
```

**Dry Run of `giveRaise`:**

| Step | Code | Calculation | Result |
|------|------|-------------|--------|
| 1 | `giveRaise(10.0)` | percent = 10.0 > 0 → true | Enters if-block |
| 2 | `salary_ *= (1.0 + 10.0/100.0)` | salary_ = 50000.0 * 1.10 | salary_ = 55000.0 |
| 3 | Return | → | salary_ now 55000 |

**Why encapsulation works for large teams:**

- **Contract**: the public API is the contract; as long as it stays stable, internal changes don't break callers.
- **Audit**: every state change goes through a method that can log, validate, or reject.
- **Refactoring**: rename a private field without touching any external code.

---

### 1.6.2 Inheritance → The Second Pillar

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-handwritten.svg" alt="Handwritten: 1.6.2 Inheritance → The Second Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-diagram.svg" alt="Diagram: 1.6.2 Inheritance → The Second Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-2-inheritance-the-second-pillar-sticky.svg" alt="Sticky Note: 1.6.2 Inheritance → The Second Pillar" width="30%">
</a>


> **One-Sentence Takeaway:** Inheritance lets a class acquire properties and behaviour from a parent class, establishing an is-a relationship.

**Why it matters:** Without inheritance, every new class must be written from scratch. With inheritance, you build hierarchies that mirror real-world taxonomies.

**Numbered mechanism in C++:**

1. Identify a base class with common attributes and behaviour.
2. Define derived classes that `:` inherit from the base.
3. Specify access specifier: `public` inheritance (most common).
4. Add unique members in derived classes.
5. Optionally override (redefine) base class methods.

```cpp
#include <iostream>
#include <string>

class Animal {                               // Base class
protected:
    std::string name_;
    int age_;

public:
    Animal(std::string name, int age)
        : name_(name), age_(age) {}

    void eat() const {
        std::cout << name_ << " is eating.\n";
    }

    void sleep() const {
        std::cout << name_ << " is sleeping.\n";
    }

    virtual void sound() const {             // Virtual → can be overridden
        std::cout << name_ << " makes a sound.\n";
    }

    std::string getName() const { return name_; }
};

class Dog : public Animal {                  // Derived class → Dog is an Animal
public:
    Dog(std::string name, int age)
        : Animal(name, age) {}              // Call base constructor

    void sound() const override {            // Override base behaviour
        std::cout << name_ << " barks: Woof! Woof!\n";
    }

    void fetch() const {                     // Unique to Dog
        std::cout << name_ << " is fetching the ball.\n";
    }
};

class Cat : public Animal {                  // Another derived class
public:
    Cat(std::string name, int age)
        : Animal(name, age) {}

    void sound() const override {
        std::cout << name_ << " meows: Meow!\n";
    }

    void purr() const {
        std::cout << name_ << " is purring.\n";
    }
};

int main() {
    Dog dog("Buddy", 3);
    Cat cat("Whiskers", 2);

    dog.eat();                               // Inherited from Animal
    dog.sound();                             // Overridden in Dog
    dog.fetch();                             // Unique to Dog

    cat.sleep();                             // Inherited
    cat.sound();                             // Overridden in Cat
    cat.purr();                              // Unique to Cat

    return 0;
}
```

**Output:**
```
Buddy is eating.
Buddy barks: Woof! Woof!
Buddy is fetching the ball.
Whiskers is sleeping.
Whiskers meows: Meow!
Whiskers is purring.
```

**Inheritance Hierarchy Diagram:**

```
            +---------+
            | Animal  |  (base class)
            +---------+
           /           \
     +-------+       +-------+
     |  Dog  |       |  Cat  |  (derived classes)
     +-------+       +-------+
     + fetch()       + purr()
     + sound() ovr.  + sound() ovr.
```

**Complexity Analysis:**

| Operation | Complexity | Why |
|-----------|------------|-----|
| Base class method call via derived object | O(1) | Direct dispatch (non-virtual) |
| Virtual method call (overridden) | O(1) | V-table lookup (constant, ~2 extra instructions) |
| Constructor chain (base → derived) | O(1) per constructor | Linear in depth of hierarchy |
| Memory per object | `sizeof(Base) + sizeof(Derived members)` | Base sub-object stored first in memory |

**What is inherited and what is not:**

| Member type | Inherited? | Notes |
|-------------|-----------|-------|
| Public member functions | âœ“ Yes | Accessible through derived object |
| Protected member variables | âœ“ Yes | Accessible inside derived class methods |
| Private member variables | âœ— Not directly | Exist in memory but inaccessible by name |
| Constructors | âœ— Not inherited | Must be called explicitly from derived ctor |
| Destructors | âœ“ Yes (virtual recommended) | Automatically called in reverse order |
| Friend functions | âœ— Not inherited | Friendship is not transitive |
| Assignment operator | âœ— Not inherited | Compiler-generated if not user-defined |

---

### 1.6.3 Polymorphism → The Third Pillar

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-handwritten.svg" alt="Handwritten: 1.6.3 Polymorphism → The Third Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-diagram.svg" alt="Diagram: 1.6.3 Polymorphism → The Third Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-3-polymorphism-the-third-pillar-sticky.svg" alt="Sticky Note: 1.6.3 Polymorphism → The Third Pillar" width="30%">
</a>


> **One-Sentence Takeaway:** Polymorphism lets one interface work with multiple types → the same function call behaves differently depending on the object's actual type.

**Etymology:** From Greek *polys* (many) + *morphÄ“* (form) = "many forms."

**Why it matters:** Without polymorphism, every type check requires explicit conditional logic. With polymorphism, adding a new type requires zero changes to existing code.

**Numbered mechanism in C++:**

1. Declare a virtual function in the base class using the `virtual` keyword.
2. Override the function in derived classes using `override`.
3. Use pointers or references to the base class to refer to derived objects.
4. Call the virtual function → the compiler dispatches to the correct override at runtime.
5. This is called **dynamic dispatch** and uses a **v-table** (virtual method table).

```cpp
#include <iostream>
#include <vector>
#include <memory>

class Shape {
public:
    virtual double area() const = 0;        // Pure virtual → abstract
    virtual void draw() const = 0;
    virtual ~Shape() = default;             // Virtual destructor for safe deletion
};

class Circle : public Shape {
private:
    double radius_;
public:
    Circle(double r) : radius_(r) {}
    double area() const override {
        return 3.14159 * radius_ * radius_;
    }
    void draw() const override {
        std::cout << "  ( ) \n";
        std::cout << " (   )  Circle\n";
        std::cout << "  ( )  radius=" << radius_ << "\n";
    }
};

class Rectangle : public Shape {
private:
    double width_, height_;
public:
    Rectangle(double w, double h) : width_(w), height_(h) {}
    double area() const override {
        return width_ * height_;
    }
    void draw() const override {
        std::cout << " +------+\n";
        std::cout << " |      | Rectangle\n";
        std::cout << " +------+ w=" << width_ << " h=" << height_ << "\n";
    }
};

class Triangle : public Shape {
private:
    double base_, height_;
public:
    Triangle(double b, double h) : base_(b), height_(h) {}
    double area() const override {
        return 0.5 * base_ * height_;
    }
    void draw() const override {
        std::cout << "   /\\  \n";
        std::cout << "  /  \\  Triangle\n";
        std::cout << " /____\\ base=" << base_ << " h=" << height_ << "\n";
    }
};

void printShapeInfo(const Shape& s) {       // Works with ANY Shape
    s.draw();
    std::cout << "   Area: " << s.area() << "\n\n";
}

int main() {
    Circle c(5.0);
    Rectangle r(4.0, 6.0);
    Triangle t(3.0, 8.0);

    // Polymorphic calls through base class reference
    printShapeInfo(c);    // Circle passed as const Shape&
    printShapeInfo(r);    // Rectangle passed as const Shape&
    printShapeInfo(t);    // Triangle passed as const Shape&

    // Polymorphic container
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(2.5));
    shapes.push_back(std::make_unique<Rectangle>(3.0, 5.0));
    shapes.push_back(std::make_unique<Triangle>(6.0, 4.0));

    std::cout << "--- Polymorphic container ---\n";
    double totalArea = 0.0;
    for (const auto& shape : shapes) {
        totalArea += shape->area();
    }
    std::cout << "Total area of all shapes: " << totalArea << "\n";

    return 0;
}
```

**Output:**
```
  ( ) 
 (   )  Circle
  ( )  radius=5
   Area: 78.5397

 +------+
 |      | Rectangle
 +------+ w=4 h=6
   Area: 24

   /\  
  /  \  Triangle
 /____\ base=3 h=8
   Area: 12

--- Polymorphic container ---
Total area of all shapes: 46.3988
```

**How the Virtual Table (v-table) Works:**

```
Memory layout for Circle object c:

  +---------------------+
  | vptr  → [Circle vtable]  |
  |   ┌──────────────┐  |
  |   │ Circle::area()│  |
  |   │ Circle::draw()│  |
  |   │ ~Circle()     │  |
  |   └──────────────┘  |
  | radius_ = 5.0       |
  +---------------------+

At compile time:
  printShapeInfo(c) compiles to:
    Load c.vptr
    Jump to vptr[0]  (index for area())
```

**Steps of Dynamic Dispatch:**

1. Compiler sees `s.area()` where `s` is `const Shape&`.
2. Compiler doesn't know which `area()` to call at compile time.
3. At runtime, the program reads `s`'s v-pointer (hidden first field).
4. The v-pointer points to the actual class's v-table (e.g., `Circle`'s v-table).
5. The v-table contains function pointers; slot 0 is `area()`.
6. The program jumps to `Circle::area()` or `Rectangle::area()` etc.

**Complexity Analysis of Virtual Dispatch:**

| Aspect | Cost | Why |
|--------|------|-----|
| Non-virtual function call | ~1-2 CPU cycles | Direct jump to known address |
| Virtual function call | ~3-5 CPU cycles | Two indirections: vptr → vtable → function address |
| Non-virtual call → wrong type | Compile error | Caught before execution |
| Virtual call → wrong type | Impossible | Always dispatched to correct override |
| Branch misprediction (if-else chain) | 10-20 cycles per mispredict | Virtual dispatch avoids branches entirely |

**Polymorphism eliminates conditionals:**

```cpp
// WITHOUT polymorphism: every new shape requires editing this function
double totalAreaProcedural(const std::vector<ShapeType>& shapes) {
    double total = 0;
    for (auto& s : shapes) {
        if (s.type == CIRCLE)      total += circleArea(s.r);
        else if (s.type == RECT)   total += rectArea(s.w, s.h);
        else if (s.type == TRI)    total += triArea(s.b, s.h);
        // Adding Pentagon means adding another else-if
    }
    return total;
}

// WITH polymorphism: adding Pentagon requires zero changes here
double totalAreaOOP(const std::vector<Shape*>& shapes) {
    double total = 0;
    for (auto* s : shapes)
        total += s->area();          // No if-else needed
    return total;
}
```

---

### 1.6.4 Abstraction → The Fourth Pillar

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-handwritten.svg" alt="Handwritten: 1.6.4 Abstraction → The Fourth Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-diagram.svg" alt="Diagram: 1.6.4 Abstraction → The Fourth Pillar" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-6-4-abstraction-the-fourth-pillar-sticky.svg" alt="Sticky Note: 1.6.4 Abstraction → The Fourth Pillar" width="30%">
</a>


> **One-Sentence Takeaway:** Abstraction separates what something does from how it does it, letting users work with high-level concepts without managing low-level details.

**Why it matters:** Without abstraction, every user of a component must understand its full internal complexity. With abstraction, complex systems become accessible and interchangeable.

**Abstraction vs Encapsulation (critical distinction):**

| Aspect | Encapsulation | Abstraction |
|--------|--------------|-------------|
| **Focus** | Hiding data | Hiding complexity |
| **Mechanism** | `private:` fields + public methods | Pure virtual classes / interfaces |
| **Answers** | "Who can access this data?" | "What does this component do?" |
| **Implementation** | Access specifiers (private/protected/public) | Abstract base classes with pure virtual functions |
| **Real-world** | ATM hides its cash cassette | ATM hides how it counts bills, logs transactions, communicates with bank |

**Numbered mechanism in C++:**

1. Declare an abstract base class with at least one **pure virtual function** (`= 0`).
2. The abstract class defines the interface but provides no implementation.
3. Derived classes must implement all pure virtual functions.
4. Users write code against the abstract interface.
5. Concrete implementations can be swapped without changing user code.

```cpp
#include <iostream>
#include <string>
#include <memory>

class Database {                        // Abstract interface
public:
    virtual bool connect(const std::string& url) = 0;
    virtual void execute(const std::string& sql) = 0;
    virtual std::string query(const std::string& sql) = 0;
    virtual ~Database() = default;
};

class MySQLDatabase : public Database {
public:
    bool connect(const std::string& url) override {
        std::cout << "Connecting to MySQL at " << url << "\n";
        return true;
    }
    void execute(const std::string& sql) override {
        std::cout << "MySQL executing: " << sql << "\n";
    }
    std::string query(const std::string& sql) override {
        std::cout << "MySQL querying: " << sql << "\n";
        return "[MySQL result set]";
    }
};

class PostgresDatabase : public Database {
public:
    bool connect(const std::string& url) override {
        std::cout << "Connecting to PostgreSQL at " << url << "\n";
        return true;
    }
    void execute(const std::string& sql) override {
        std::cout << "PostgreSQL executing: " << sql << "\n";
    }
    std::string query(const std::string& sql) override {
        std::cout << "PostgreSQL querying: " << sql << "\n";
        return "[PostgreSQL result set]";
    }
};

class ReportGenerator {                 // Works with ANY Database
private:
    Database& db_;
public:
    ReportGenerator(Database& db) : db_(db) {}

    void generateSalesReport() {
        db_.connect("localhost:3306");
        db_.execute("CREATE TEMP TABLE sales AS SELECT * FROM orders");
        std::string result = db_.query("SELECT SUM(total) FROM sales");
        std::cout << "Sales report: " << result << "\n";
    }
};

int main() {
    MySQLDatabase mySQLDb;
    PostgresDatabase pgDb;

    ReportGenerator report1(mySQLDb);
    report1.generateSalesReport();
    std::cout << "---\n";

    ReportGenerator report2(pgDb);      // Same code, different database
    report2.generateSalesReport();

    return 0;
}
```

**Output:**
```
Connecting to MySQL at localhost:3306
MySQL executing: CREATE TEMP TABLE sales AS SELECT * FROM orders
MySQL querying: SELECT SUM(total) FROM sales
Sales report: [MySQL result set]
---
Connecting to PostgreSQL at localhost:3306
PostgreSQL executing: CREATE TEMP TABLE sales AS SELECT * FROM orders
PostgreSQL querying: SELECT SUM(total) FROM sales
Sales report: [PostgreSQL result set]
```

**Key insight:** `ReportGenerator` has zero idea which database it is using. The abstraction (`Database` interface) decouples the report logic from the database implementation. Adding `SQLiteDatabase` requires:
- One new class implementing `Database`
- Zero changes to `ReportGenerator`

**Complexity Advantage:**

| Without Abstraction | With Abstraction |
|---------------------|------------------|
| `ReportGeneratorMySQL`, `ReportGeneratorPostgres`, `ReportGeneratorSQLite` → 3 independent classes | One `ReportGenerator` + 3 database implementations |
| Adding a new DB: write new report generator + test | Adding a new DB: write DB adapter only |
| Fixing a report bug: fix N versions | Fixing a report bug: fix one place |

---
## 1.7 Message Passing

> **One-Sentence Takeaway:** Objects collaborate by sending messages (calling methods) to each other → the fundamental mechanism of interaction in an object-oriented system.

### 1.7.1 What is Message Passing?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-handwritten.svg" alt="Handwritten: 1.7.1 What is Message Passing?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-diagram.svg" alt="Diagram: 1.7.1 What is Message Passing?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-1-what-is-message-passing-sticky.svg" alt="Sticky Note: 1.7.1 What is Message Passing?" width="30%">
</a>


Message passing is the process by which objects communicate. In OOP, one object sends a message to another object, and the receiving object decides how to respond (or if to respond at all). In C++, message passing is implemented as **method calls** on an object.

**Key characteristics:**

1. **Decoupling** → the sender does not need to know how the receiver fulfils the request.
2. **Encapsulation** → the receiver's internal state is never directly exposed.
3. **Polymorphism** → different receivers can respond to the same message differently.
4. **Late binding** → which `respondTo` is called can be determined at runtime.

### 1.7.2 Anatomy of a Message

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-handwritten.svg" alt="Handwritten: 1.7.2 Anatomy of a Message" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-diagram.svg" alt="Diagram: 1.7.2 Anatomy of a Message" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-2-anatomy-of-a-message-sticky.svg" alt="Sticky Note: 1.7.2 Anatomy of a Message" width="30%">
</a>


```
sender.message(arguments)
   |       |       |
   |       |       +-- Data passed with the message
   |       +-- Message name (method selector)
   +-- Object that receives the message
```

### 1.7.3 Message Passing Example: Coffee Machine Simulation

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-handwritten.svg" alt="Handwritten: 1.7.3 Message Passing Example: Coffee Machine Simulation" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-diagram.svg" alt="Diagram: 1.7.3 Message Passing Example: Coffee Machine Simulation" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-3-message-passing-example-coffee-machine-simulation-sticky.svg" alt="Sticky Note: 1.7.3 Message Passing Example: Coffee Machine Simulation" width="30%">
</a>


```cpp
#include <iostream>
#include <string>

class CoffeeMachine {
private:
    int waterLevel_;    // ml
    int beanLevel_;     // grams
    bool isOn_;

public:
    CoffeeMachine() : waterLevel_(1000), beanLevel_(500), isOn_(false) {}

    void turnOn() {
        isOn_ = true;
        std::cout << "Coffee machine ON.\n";
    }

    void turnOff() {
        isOn_ = false;
        std::cout << "Coffee machine OFF.\n";
    }

    std::string brew(const std::string& type) {
        if (!isOn_) return "Machine is off!";
        if (waterLevel_ < 200) return "Not enough water!";
        if (beanLevel_ < 20) return "Not enough beans!";

        waterLevel_ -= 200;
        beanLevel_  -= 20;

        return "Here is your " + type + "! â˜•";
    }

    int getWaterLevel() const { return waterLevel_; }
    int getBeanLevel() const { return beanLevel_; }
};

class Person {
private:
    std::string name_;

public:
    Person(std::string name) : name_(name) {}

    void makeCoffee(CoffeeMachine& machine, const std::string& type) {
        std::cout << name_ << " asks for " << type << "\n";

        // Message passing: Person sends "brew" message to CoffeeMachine
        std::string result = machine.brew(type);

        std::cout << "CoffeeMachine: " << result << "\n";
    }

    void refillMachine(CoffeeMachine& machine) {
        std::cout << name_ << " refills the machine.\n";
        // In real OOP, this would go through a public interface
        // Here, we'd ideally call machine.refill() → illustrating the need
        // for proper encapsulation of refill logic
    }
};

int main() {
    CoffeeMachine machine;
    Person alice("Alice");
    Person bob("Bob");

    alice.makeCoffee(machine, "Espresso");   // Message: Person → CoffeeMachine
    machine.turnOn();                         // Message: main → CoffeeMachine

    alice.makeCoffee(machine, "Latte");      // Message: Person → CoffeeMachine
    bob.makeCoffee(machine, "Cappuccino");   // Message: Person → CoffeeMachine

    std::cout << "\nWater left: " << machine.getWaterLevel() << " ml\n";
    std::cout << "Beans left: " << machine.getBeanLevel() << " g\n";

    return 0;
}
```

**Output:**
```
Alice asks for Espresso
CoffeeMachine: Machine is off!
Alice asks for Latte
CoffeeMachine: Here is your Latte! â˜•
Bob asks for Cappuccino
CoffeeMachine: Here is your Cappuccino! â˜•

Water left: 600 ml
Beans left: 460 g
```

**Message Passing Diagram:**

```
main()                         CoffeeMachine
  |                                |
  |--turnOn()--------------------->|  (message: turn on)
  |                                |
Alice()                         CoffeeMachine
  |                                |
  |--makeCoffee(machine, "Latte")  |
  |    |                           |
  |    |--brew("Latte")----------->|  (message: brew coffee)
  |    |                           |-- waterLevel_ -= 200
  |    |                           |-- beanLevel_ -= 20
  |    |<-- "Here is your Latte!"--|  (reply)
  |    |                           |
  |                                |
Bob()                           CoffeeMachine
  |                                |
  |--makeCoffee(machine, "Capp")   |
  |    |--brew("Cappuccino")------>|  (message: brew coffee)
  |    |<-- "Here is your Capp!"---|  (reply)
```

### 1.7.4 Message Passing vs Function Calls

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-handwritten.svg" alt="Handwritten: 1.7.4 Message Passing vs Function Calls" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-diagram.svg" alt="Diagram: 1.7.4 Message Passing vs Function Calls" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-4-message-passing-vs-function-calls-sticky.svg" alt="Sticky Note: 1.7.4 Message Passing vs Function Calls" width="30%">
</a>


| Aspect | Pure Procedural Function Call | OOP Message Passing |
|--------|------------------------------|---------------------|
| **Who decides what happens?** | The function implementation | The receiving object |
| **Which function runs?** | Determined by the function name at compile time | Determined by the receiver's type at compile or run time |
| **Data access** | Function receives data as parameters | Object can access its own private state |
| **Control** | Caller is in control | Receiver is in control |
| **Polymorphism** | Manual (if-else or switch) | Automatic (virtual dispatch) |
| **Analogy** | "Execute steps 1-5 on this data" | "Please do what you do with this" |

### 1.7.5 Comparing Object Interaction Patterns

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-handwritten.svg" alt="Handwritten: 1.7.5 Comparing Object Interaction Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-diagram.svg" alt="Diagram: 1.7.5 Comparing Object Interaction Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-7-5-comparing-object-interaction-patterns-sticky.svg" alt="Sticky Note: 1.7.5 Comparing Object Interaction Patterns" width="30%">
</a>


| Pattern | Description | Example |
|---------|-------------|---------|
| **Direct message** | obj.method() | `account.deposit(100)` |
| **Chained message** | obj1.getObj2().method() | `car.getEngine().start()` |
| **Delegation** | Object forwards message to helper | `printer.print(doc)` internally calls `spooler.queue(doc)` |
| **Callback** | Object A passes a function for Object B to call later | `button.onClick(handler)` |
| **Observer** | Object notifies all registered observers | `subject.notifyObservers(event)` |

---

## 1.8 Benefits of OOP

> **One-Sentence Takeaway:** OOP reduces complexity in large systems through encapsulation, reuse, and clear modelling of real-world entities.

### 1.8.1 The Seven Key Benefits

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-handwritten.svg" alt="Handwritten: 1.8.1 The Seven Key Benefits" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-diagram.svg" alt="Diagram: 1.8.1 The Seven Key Benefits" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-1-the-seven-key-benefits-sticky.svg" alt="Sticky Note: 1.8.1 The Seven Key Benefits" width="30%">
</a>


| # | Benefit | Explanation | C++ Mechanism |
|---|---------|-------------|---------------|
| 1 | **Modularity** | Each object is a self-contained unit. Debug, test, and modify one object without affecting others. | Separate class per file; each class has a single responsibility |
| 2 | **Reusability** | Write once, use many times. Inheritance and composition let you reuse tested code. | Inheritance (`class D : public B`), composition (member objects), templates |
| 3 | **Maintainability** | Well-encapsulated objects are easy to change. Internal changes don't ripple to callers. | Encapsulation (`private:` data, `public:` API) |
| 4 | **Scalability** | OOP systems grow by adding new classes, not by modifying existing code. | Open/Closed Principle: classes open for extension, closed for modification |
| 5 | **Security** | Private members cannot be accessed from outside. Controlled access prevents invalid states. | `private:`, `protected:`, `const` methods |
| 6 | **Readability** | Code mirrors real-world structure. A `BankAccount` object is more intuitive than a `struct Account` + 20 functions. | Class names map to domain concepts |
| 7 | **Testability** | Each class can be tested independently. Mock objects replace real dependencies for isolated tests. | Dependency injection, virtual interfaces |

### 1.8.2 Empirical Advantages → What Studies Show

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-handwritten.svg" alt="Handwritten: 1.8.2 Empirical Advantages → What Studies Show" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-diagram.svg" alt="Diagram: 1.8.2 Empirical Advantages → What Studies Show" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-2-empirical-advantages-what-studies-show-sticky.svg" alt="Sticky Note: 1.8.2 Empirical Advantages → What Studies Show" width="30%">
</a>


- **Defect density**: OOP projects show 30-50% fewer defects compared to procedural projects of equivalent size (Capers Jones, "Applied Software Measurement").
- **Productivity**: Reuse through inheritance can improve programmer productivity by 20-40% after the first release (Boehm, "Software Engineering Economics").
- **Change impact**: Encapsulation reduces the ripple effect of changes: a change to a private field affects exactly one class, not every function that touches a struct.
- **Time to market**: Frameworks (which are OOP-based) reduce development time by 50-70% for standard applications.

### 1.8.3 When OOP Benefits Are Moderate (Not Magic)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-handwritten.svg" alt="Handwritten: 1.8.3 When OOP Benefits Are Moderate (Not Magic)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-diagram.svg" alt="Diagram: 1.8.3 When OOP Benefits Are Moderate (Not Magic)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-3-when-oop-benefits-are-moderate-not-magic-sticky.svg" alt="Sticky Note: 1.8.3 When OOP Benefits Are Moderate (Not Magic)" width="30%">
</a>


| Claim | Reality |
|-------|---------|
| "OOP makes everything reusable" | Reuse requires deliberate design (interfaces, dependency injection). Naive OOP creates rigid hierarchies. |
| "OOP is always more maintainable" | Poor OOP (deep inheritance, god classes) is harder to maintain than clean procedural code. |
| "OOP is the only modern paradigm" | Functional programming excels at data transformation; OOP excels at stateful entities. Modern languages mix both. |
| "Inheritance is always the right reuse mechanism" | Composition ("has-a") is often better than inheritance ("is-a"). Prefer composition over inheritance in most cases. |

### 1.8.4 Complexity Analysis of OOP Benefits

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-handwritten.svg" alt="Handwritten: 1.8.4 Complexity Analysis of OOP Benefits" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-diagram.svg" alt="Diagram: 1.8.4 Complexity Analysis of OOP Benefits" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-8-4-complexity-analysis-of-oop-benefits-sticky.svg" alt="Sticky Note: 1.8.4 Complexity Analysis of OOP Benefits" width="30%">
</a>


| Benefit | How it reduces complexity | Measurable metric |
|---------|--------------------------|-------------------|
| Encapsulation | Reduces coupling → fewer modules affected per change | Lower Coupling Between Objects (CBO) metric |
| Inheritance | Eliminates duplicate code → one base class replaces N copies | Higher reuse ratio |
| Polymorphism | Eliminates conditional branches → no switch-on-type | Lower cyclomatic complexity |
| Abstraction | Reduces cognitive load → programmer sees interface, not implementation | Fewer concepts to hold in working memory |
| Modularity | Isolates failure → bug in one class doesn't crash others | Smaller Mean Time to Repair (MTTR) |

---

## 1.9 Applications of OOP in Real Systems

> **One-Sentence Takeaway:** Every major software system you interact with → from your phone's UI to the video game you played last night → is built on OOP principles.

### 1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-handwritten.svg" alt="Handwritten: 1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-diagram.svg" alt="Diagram: 1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-1-gui-frameworks-qt-wxwidgets-mfc-sticky.svg" alt="Sticky Note: 1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)" width="30%">
</a>


GUI frameworks are perhaps the strongest argument for OOP. Every visual element is an object.

| GUI Element | C++ Class | OOP Concept Used |
|------------|-----------|------------------|
| Window | `QMainWindow`, `QWidget` | Base class (inheritance) |
| Button | `QPushButton` | Inheritance from `QWidget` |
| Text input | `QLineEdit` | Inheritance + encapsulation |
| Event handler | `void onClick()` | Polymorphism (virtual slots) |
| Layout manager | `QVBoxLayout` | Composition |

```cpp
// Simplified Qt-like OOP GUI structure
#include <iostream>
#include <string>
#include <vector>

class Widget {                              // Abstract base for ALL UI elements
protected:
    int x_, y_, width_, height_;
    bool visible_;
public:
    Widget(int x, int y, int w, int h)
        : x_(x), y_(y), width_(w), height_(h), visible_(true) {}
    virtual void draw() const = 0;          // Polymorphic drawing
    virtual void onClick(int mx, int my) {  // Default: no-op
        std::cout << "Widget clicked at (" << mx << "," << my << ")\n";
    }
    void setVisible(bool v) { visible_ = v; }
    bool isVisible() const { return visible_; }
    virtual ~Widget() = default;
};

class Button : public Widget {              // Inheritance
private:
    std::string label_;
public:
    Button(int x, int y, int w, int h, std::string label)
        : Widget(x, y, w, h), label_(label) {}
    void draw() const override {
        std::cout << "[ " << label_ << " ]  at (" << x_ << "," << y_ << ")\n";
    }
    void onClick(int mx, int my) override {
        std::cout << "Button '" << label_ << "' pressed!\n";
        // Execute callback, submit form, etc.
    }
};

class TextBox : public Widget {
private:
    std::string text_;
public:
    TextBox(int x, int y, int w, int h)
        : Widget(x, y, w, h) {}
    void draw() const override {
        std::cout << "| " << text_ << " | at (" << x_ << "," << y_ << ")\n";
    }
    void setText(const std::string& t) { text_ = t; }
    std::string getText() const { return text_; }
};

class Window {                               // Composition: Window HAS Widgets
private:
    std::string title_;
    std::vector<Widget*> widgets_;
public:
    Window(std::string title) : title_(title) {}

    void addWidget(Widget* w) {
        widgets_.push_back(w);
    }

    void render() {
        std::cout << "\n+==== " << title_ << " ====+\n";
        for (const auto& w : widgets_) {
            if (w->isVisible()) {
                w->draw();                  // Polymorphic call!
            }
        }
        std::cout << "+====================+\n";
    }

    void handleClick(int mx, int my) {
        for (auto& w : widgets_) {
            if (mx >= w->x_ && mx <= w->x_ + w->width_ &&
                my >= w->y_ && my <= w->y_ + w->height_) {
                w->onClick(mx, my);         // Polymorphic dispatch
            }
        }
    }
};

int main() {
    Button btn1(10, 10, 80, 30, "Submit");
    Button btn2(100, 10, 60, 30, "Cancel");
    TextBox tb(10, 50, 200, 25);
    tb.setText("Hello OOP");

    Window win("My App");
    win.addWidget(&btn1);
    win.addWidget(&btn2);
    win.addWidget(&tb);

    win.render();

    std::cout << "\nUser clicks at (15, 15):\n";
    win.handleClick(15, 15);

    std::cout << "\nUser clicks at (110, 15):\n";
    win.handleClick(110, 15);

    return 0;
}
```

**Output:**
```
+==== My App ====+
[ Submit ]  at (10,10)
[ Cancel ]  at (100,10)
| Hello OOP | at (10,50)
+====================+

User clicks at (15, 15):
Button 'Submit' pressed!

User clicks at (110, 15):
Button 'Cancel' pressed!
```

**OOP principles demonstrated:**
- **Inheritance**: `Button` and `TextBox` both inherit from `Widget`
- **Polymorphism**: `w->draw()` and `w->onClick()` dispatch to the correct subclass
- **Encapsulation**: Each widget hides its internal state
- **Composition**: `Window` contains `Widget*` objects
- **Abstraction**: `Widget` defines the interface; subclasses implement details

---

### 1.9.2 Game Engines (Unity, Unreal Engine)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-handwritten.svg" alt="Handwritten: 1.9.2 Game Engines (Unity, Unreal Engine)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-diagram.svg" alt="Diagram: 1.9.2 Game Engines (Unity, Unreal Engine)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-2-game-engines-unity-unreal-engine-sticky.svg" alt="Sticky Note: 1.9.2 Game Engines (Unity, Unreal Engine)" width="30%">
</a>


Games are inherently object-oriented: every entity in a game world is an object with state and behaviour.

| Game Entity | C++ Concept | OOP Feature |
|------------|-------------|-------------|
| Player | `class Player : public Character` | Inheritance |
| Enemy | `class Enemy : public Character` | Inheritance |
| Weapon | `class Weapon : public Item` | Inheritance |
| Collision detection | `entity->onCollide(other)` | Polymorphism + message passing |
| Update loop | `for (entity : entities) entity->update()` | Polymorphism |
| Game state | `Player::health_` (private + getter) | Encapsulation |

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <memory>

class GameObject {                          // Base class for ALL game objects
protected:
    std::string name_;
    int x_, y_;
    int health_;

public:
    GameObject(std::string name, int x, int y, int hp)
        : name_(name), x_(x), y_(y), health_(hp) {}

    virtual void update() {                 // Called every frame → polymorphic
        std::cout << name_ << " at (" << x_ << "," << y_ << ")\n";
    }

    virtual void onCollision(GameObject* other) {
        std::cout << name_ << " collided with " << other->getName() << "\n";
    }

    void takeDamage(int dmg) {
        health_ -= dmg;
        std::cout << name_ << " takes " << dmg << " damage. HP: " << health_ << "\n";
        if (health_ <= 0) {
            std::cout << name_ << " destroyed!\n";
        }
    }

    std::string getName() const { return name_; }
    int getX() const { return x_; }
    int getY() const { return y_; }
    int getHealth() const { return health_; }
    bool isAlive() const { return health_ > 0; }

    virtual ~GameObject() = default;
};

class Player : public GameObject {
private:
    int score_;
public:
    Player(std::string name, int x, int y)
        : GameObject(name, x, y, 100), score_(0) {}

    void move(int dx, int dy) {
        x_ += dx; y_ += dy;
        std::cout << name_ << " moves to (" << x_ << "," << y_ << ")\n";
    }

    void update() override {
        std::cout << "Player " << name_ << " HP:" << health_
                  << " Score:" << score_ << "\n";
    }

    void addScore(int points) { score_ += points; }
};

class Enemy : public GameObject {
private:
    std::string type_;
public:
    Enemy(std::string name, int x, int y, std::string type, int hp)
        : GameObject(name, x, y, hp), type_(type) {}

    void update() override {
        x_ += (rand() % 3) - 1;             // Random patrol
        y_ += (rand() % 3) - 1;
        std::cout << type_ << " " << name_ << " patrols to ("
                  << x_ << "," << y_ << ")\n";
    }

    void onCollision(GameObject* other) override {
        if (dynamic_cast<Player*>(other)) {
            std::cout << type_ << " attacks " << other->getName() << "!\n";
            other->takeDamage(10);
        }
    }
};

class Coin : public GameObject {
public:
    Coin(int x, int y) : GameObject("Coin", x, y, 1) {}

    void onCollision(GameObject* other) override {
        Player* p = dynamic_cast<Player*>(other);
        if (p) {
            p->addScore(100);
            health_ = 0;                    // Coin collected
            std::cout << "Coin collected! +100 points\n";
        }
    }

    void update() override {
        // Coins just sparkle → no movement
        std::cout << "Coin sparkles at (" << x_ << "," << y_ << ")\n";
    }
};

class GameEngine {
private:
    std::vector<std::unique_ptr<GameObject>> objects_;
    int frame_ = 0;

public:
    void addObject(std::unique_ptr<GameObject> obj) {
        objects_.push_back(std::move(obj));
    }

    void update() {
        std::cout << "\n=== Frame " << frame_++ << " ===\n";
        for (auto& obj : objects_) {
            if (obj->isAlive()) {
                obj->update();              // Polymorphic update
            }
        }
        // Simple collision detection (every pair)
        for (size_t i = 0; i < objects_.size(); ++i) {
            for (size_t j = i + 1; j < objects_.size(); ++j) {
                if (objects_[i]->isAlive() && objects_[j]->isAlive()) {
                    int dx = abs(objects_[i]->getX() - objects_[j]->getX());
                    int dy = abs(objects_[i]->getY() - objects_[j]->getY());
                    if (dx <= 1 && dy <= 1) {
                        objects_[i]->onCollision(objects_[j].get());
                        objects_[j]->onCollision(objects_[i].get());
                    }
                }
            }
        }
    }
};

int main() {
    srand(42);
    GameEngine engine;

    engine.addObject(std::make_unique<Player>("Hero", 5, 5));
    engine.addObject(std::make_unique<Enemy>("Goblin-1", 4, 4, "Goblin", 30));
    engine.addObject(std::make_unique<Enemy>("Orc-1", 8, 8, "Orc", 60));
    engine.addObject(std::make_unique<Coin>(5, 6));
    engine.addObject(std::make_unique<Coin>(7, 7));

    for (int i = 0; i < 5; ++i) {
        engine.update();
    }

    return 0;
}
```

**Output (representative → varies with rand):**
```
=== Frame 0 ===
Player Hero HP:100 Score:0
Goblin Goblin-1 patrols to (4,4)
Orc Orc-1 patrols to (8,8)
Coin sparkles at (5,6)
Coin sparkles at (7,7)
Goblin-1 collided with Hero
Goblin attacks Hero!
Hero takes 10 damage. HP: 90
Hero collided with Goblin-1
...

=== Frame 1 ===
Player Hero HP:90 Score:0
...
Coin collected! +100 points
...
```

**OOP in game engines → key takeaway:** The game loop (`for each object: update()`) is the signature OOP pattern → it treats all objects uniformly through a polymorphic interface. Adding a new entity type (e.g., `PowerUp`, `Boss`, `Door`) requires zero changes to the game loop.

---

### 1.9.3 Operating System Design

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-handwritten.svg" alt="Handwritten: 1.9.3 Operating System Design" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-diagram.svg" alt="Diagram: 1.9.3 Operating System Design" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-3-operating-system-design-sticky.svg" alt="Sticky Note: 1.9.3 Operating System Design" width="30%">
</a>


Operating systems use OOP extensively for abstracting hardware resources.

| OS Component | OOP Concept | Example |
|-------------|-------------|---------|
| Device drivers | Interface + implementation | `class USBDriver : public Driver` |
| File systems | Abstract base + concrete | `class Ext4FS : public FileSystem` |
| Process scheduler | Polymorphic scheduling | `class Scheduler` with virtual `schedule()` |
| Memory manager | Encapsulation | `MemoryManager` hides page tables internally |

```cpp
#include <iostream>
#include <string>
#include <vector>

class FileSystem {                          // Abstract interface for all file systems
public:
    virtual bool mount(const std::string& device) = 0;
    virtual void unmount() = 0;
    virtual std::string readFile(const std::string& path) = 0;
    virtual void writeFile(const std::string& path, const std::string& data) = 0;
    virtual std::vector<std::string> listDir(const std::string& path) = 0;
    virtual ~FileSystem() = default;
};

class Ext4FS : public FileSystem {
private:
    std::string device_;
    bool mounted_ = false;
    // Internal: inode tables, block groups, journal → all hidden

public:
    bool mount(const std::string& device) override {
        device_ = device;
        mounted_ = true;
        std::cout << "Ext4: Mounted " << device << " (journal replayed)\n";
        return true;
    }

    void unmount() override {
        std::cout << "Ext4: Unmounting " << device_ << " (journal committed)\n";
        mounted_ = false;
    }

    std::string readFile(const std::string& path) override {
        if (!mounted_) return "ERROR: Not mounted";
        std::cout << "Ext4: Reading " << path << " (inode lookup, block read)\n";
        return "[Data from " + path + "]";
    }

    void writeFile(const std::string& path, const std::string& data) override {
        if (!mounted_) return;
        std::cout << "Ext4: Writing " << data.size() << " bytes to "
                  << path << " (block allocation, journal entry)\n";
    }

    std::vector<std::string> listDir(const std::string& path) override {
        if (!mounted_) return {};
        std::cout << "Ext4: Listing " << path << " (directory entry scan)\n";
        return {"file1.txt", "file2.txt", "subdir/"};
    }
};

class NTFS : public FileSystem {
private:
    std::string device_;
    bool mounted_ = false;
    // Internal: MFT, clusters, USN journal → all hidden

public:
    bool mount(const std::string& device) override {
        device_ = device;
        mounted_ = true;
        std::cout << "NTFS: Mounted " << device_ << " (MFT parsed)\n";
        return true;
    }

    void unmount() override {
        std::cout << "NTFS: Unmounting " << device_ << " ($LogFile flushed)\n";
        mounted_ = false;
    }

    std::string readFile(const std::string& path) override {
        if (!mounted_) return "ERROR: Not mounted";
        std::cout << "NTFS: Reading " << path << " (MFT record lookup)\n";
        return "[Data from " + path + "]";
    }

    void writeFile(const std::string& path, const std::string& data) override {
        if (!mounted_) return;
        std::cout << "NTFS: Writing " << data.size() << " bytes to "
                  << path << " (cluster allocation, $LogFile)\n";
    }

    std::vector<std::string> listDir(const std::string& path) override {
        if (!mounted_) return {};
        std::cout << "NTFS: Listing " << path << " (B-tree index scan)\n";
        return {"boot.ini", "pagefile.sys", "Users/"};
    }
};

class VFS {                                 // Virtual File System → the OS layer
private:
    FileSystem* mountedFS_ = nullptr;

public:
    void mount(FileSystem* fs, const std::string& device) {
        mountedFS_ = fs;
        mountedFS_->mount(device);
    }

    void unmount() {
        if (mountedFS_) mountedFS_->unmount();
    }

    void readUserFile(const std::string& path) {
        if (!mountedFS_) {
            std::cout << "VFS: No filesystem mounted.\n";
            return;
        }
        std::string data = mountedFS_->readFile(path);
        std::cout << "VFS: User read -> " << data << "\n";
    }

    void writeUserFile(const std::string& path, const std::string& data) {
        if (!mountedFS_) {
            std::cout << "VFS: No filesystem mounted.\n";
            return;
        }
        mountedFS_->writeFile(path, data);
    }
};

int main() {
    VFS vfs;

    Ext4FS ext4;
    NTFS  ntfs;

    std::cout << "--- Mounting Ext4 ---\n";
    vfs.mount(&ext4, "/dev/sda1");
    vfs.readUserFile("/home/user/doc.txt");
    vfs.writeUserFile("/home/user/doc.txt", "Hello OOP!");
    vfs.unmount();

    std::cout << "\n--- Mounting NTFS ---\n";
    vfs.mount(&ntfs, "\\\\.\\C:");
    vfs.readUserFile("\\Users\\Admin\\doc.txt");
    vfs.unmount();

    return 0;
}
```

**Output:**
```
--- Mounting Ext4 ---
Ext4: Mounted /dev/sda1 (journal replayed)
Ext4: Reading /home/user/doc.txt (inode lookup, block read)
VFS: User read -> [Data from /home/user/doc.txt]
Ext4: Writing 8 bytes to /home/user/doc.txt (block allocation, journal entry)
Ext4: Unmounting /dev/sda1 (journal committed)

--- Mounting NTFS ---
NTFS: Mounted \\.\C: (MFT parsed)
NTFS: Reading \Users\Admin\doc.txt (MFT record lookup)
VFS: User read -> [Data from \Users\Admin\doc.txt]
```

**The power of the abstraction:** `VFS` never knows which filesystem it is using. Same code, completely different internal implementations. Linux's VFS layer works exactly this way → it's why you can `mount` ext4, NTFS, FAT32, or XFS with the same system calls.

---

### 1.9.4 Other Real-World Applications of OOP

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-handwritten.svg" alt="Handwritten: 1.9.4 Other Real-World Applications of OOP" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-diagram.svg" alt="Diagram: 1.9.4 Other Real-World Applications of OOP" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-9-4-other-real-world-applications-of-oop-sticky.svg" alt="Sticky Note: 1.9.4 Other Real-World Applications of OOP" width="30%">
</a>


| Domain | OOP Usage | Examples |
|--------|-----------|----------|
| **Web Frameworks** | Controllers, models, views as objects | ASP.NET MVC, Spring, Django, Ruby on Rails |
| **Database Drivers** | Abstract connection/query interfaces | JDBC (`Connection`, `Statement`, `ResultSet`) |
| **UI Component Libraries** | Widget hierarchies with polymorphic rendering | Qt, wxWidgets, FLTK |
| **Compilers** | AST nodes as polymorphic objects | `class Expr` → `class BinaryExpr`, `class NumberExpr` |
| **Networking** | Protocol abstractions, socket wrappers | `class TCPSocket : public Socket`, Boost.Asio |
| **Graphics Engines** | Shapes, textures, shaders as objects | OpenSceneGraph, OGRE3D |
| **Financial Systems** | Account, trade, order as objects | Bloomberg, FIX protocol handlers |
| **Medical Imaging** | Image, filter, segmentation as objects | ITK, VTK (The Insight Toolkit) |
| **Robotics** | Sensor, actuator, controller abstractions | ROS (Robot Operating System) nodes |

---

## 1.10 Interview Corner

> Common OOP interview questions with detailed answers and code examples.

### Q1: What is the difference between a class and an object? Explain with a real-world analogy.

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-handwritten.svg" alt="Handwritten: What is the difference between a class and an object? Explain with a real-world analogy." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-diagram.svg" alt="Diagram: What is the difference between a class and an object? Explain with a real-world analogy." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy-sticky.svg" alt="Sticky Note: What is the difference between a class and an object? Explain with a real-world analogy." width="30%">
</a>


**Answer:**

A **class** is a blueprint or template that defines the structure (member variables) and behaviour (member functions) that objects of that type will have. An **object** is a concrete instance of a class → it has its own memory, its own copy of member variables, and its own identity.

**Real-world analogy:** A class is like the blueprint for a house. The blueprint defines how many rooms, where the doors are, and the roof shape → but it is not a house. The house built from that blueprint is the object. You can build 100 identical houses from one blueprint, each occupying different land, having different occupants, and existing independently.

```cpp
class House {                               // Blueprint (class)
public:
    int rooms;
    bool hasGarage;
    House(int r, bool g) : rooms(r), hasGarage(g) {}
};

int main() {
    House h1(3, true);                      // Object 1
    House h2(4, false);                     // Object 2 → separate instance
    House h3(2, true);                      // Object 3
    // One class, three objects
    return 0;
}
```

| Criterion | Class | Object |
|-----------|-------|--------|
| Compile-time / runtime | Compile-time concept | Runtime entity |
| Memory | Zero bytes at runtime | `sizeof(ClassName)` bytes |
| State | No state | Holds actual values |
| Count per program | 1 definition | 0 to N instances |

---

### Q2: Explain the four pillars of OOP with a single real-world scenario.

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-handwritten.svg" alt="Handwritten: Explain the four pillars of OOP with a single real-world scenario." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-diagram.svg" alt="Diagram: Explain the four pillars of OOP with a single real-world scenario." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/explain-the-four-pillars-of-oop-with-a-single-real-world-scenario-sticky.svg" alt="Sticky Note: Explain the four pillars of OOP with a single real-world scenario." width="30%">
</a>


**Answer:**

Let's use a **smartphone** as the unifying analogy:

1. **Abstraction**: You interact with the phone through a touchscreen with icons. You don't see the CPU registers, memory buses, or radio firmware. The OS abstracts all that complexity behind a simple interface.
2. **Encapsulation**: The phone's battery is sealed inside the case. You can charge it (public method) but you can't directly touch the lithium-ion cells (private data). The phone ensures you don't short-circuit the battery.
3. **Inheritance**: "All iPhones have a screen, a battery, and a processor" (base class). The iPhone 15, 15 Pro, and 15 Pro Max inherit these features but add their own (Pro has telephoto lens, Pro Max has larger battery).
4. **Polymorphism**: When you plug in a USB-C charger, the phone doesn't care whether it's a 20W Apple charger, a 65W laptop charger, or a 5W bedside charger. The `charge()` method works the same way regardless of the actual charger type.

```cpp
class SmartPhone {                          // Abstraction: simplified interface
public:
    virtual void charge(int watts) = 0;
    virtual void takePhoto() = 0;
    virtual void installApp(std::string name) = 0;
};

class iPhone : public SmartPhone {          // Inheritance
private:
    int batteryLevel_ = 0;                  // Encapsulation
public:
    void charge(int watts) override {       // Polymorphism
        batteryLevel_ = std::min(100, batteryLevel_ + watts / 5);
    }
    void takePhoto() override { /* ... */ }
    void installApp(std::string name) override { /* ... */ }
};
```

---

### Q3: How does C++ implement polymorphism? Explain the virtual table mechanism.

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-handwritten.svg" alt="Handwritten: How does C++ implement polymorphism? Explain the virtual table mechanism." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-diagram.svg" alt="Diagram: How does C++ implement polymorphism? Explain the virtual table mechanism." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism-sticky.svg" alt="Sticky Note: How does C++ implement polymorphism? Explain the virtual table mechanism." width="30%">
</a>


**Answer:**

C++ implements runtime polymorphism through **virtual functions** and the **virtual table (v-table)** mechanism.

**How it works:**

1. When a class declares a `virtual` function, the compiler creates a hidden array called the **v-table** for that class.
2. The v-table contains function pointers → one per virtual function → pointing to the most-derived override.
3. Each object of a class with virtual functions has a hidden pointer (the **v-pointer** or `vptr`) added as its first member (usually).
4. When a virtual function is called through a base class pointer or reference, the compiler generates code that:
   a. Reads the object's `vptr`
   b. Looks up the function address from the v-table at the correct index
   c. Jumps to that address

```cpp
class Base {
public:
    virtual void foo() { std::cout << "Base::foo\n"; }
    virtual void bar() { std::cout << "Base::bar\n"; }
    void nonVirtual() { std::cout << "Base::nonVirtual\n"; }
};

class Derived : public Base {
public:
    void foo() override { std::cout << "Derived::foo\n"; }
};

// Memory layout of Derived object:
// [ vptr ] -> points to Derived vtable
// [ base members ]
// [ derived members ]
//
// Derived vtable:
// [0] -> Derived::foo
// [1] -> Base::bar    (not overridden)
//
// Calling:
// Base* p = new Derived();
// p->foo();    // vptr → vtable[0] → Derived::foo  (5 CPU cycles)
// p->bar();    // vptr → vtable[1] → Base::bar     (5 CPU cycles)
// p->nonVirtual(); // compiled to direct call: Base::nonVirtual (1-2 CPU cycles)
```

**Why not always virtual?** Non-virtual calls are resolved at compile time (static dispatch) → the compiler emits a direct `call` instruction. Virtual calls require two indirections (object → v-table → function) which prevents inlining and adds ~3 extra CPU cycles plus a cache miss potential.

---

### Q4: What is the difference between abstraction and encapsulation? Many beginners confuse them.

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-handwritten.svg" alt="Handwritten: What is the difference between abstraction and encapsulation? Many beginners confuse them." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-diagram.svg" alt="Diagram: What is the difference between abstraction and encapsulation? Many beginners confuse them." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them-sticky.svg" alt="Sticky Note: What is the difference between abstraction and encapsulation? Many beginners confuse them." width="30%">
</a>


**Answer:**

| | Encapsulation | Abstraction |
|---|---|---|
| **Focus** | Hiding **data** (implementation details) | Hiding **complexity** (how something works) |
| **Mechanism** | Access specifiers (`private:`, `protected:`) | Pure virtual functions / interfaces |
| **Answers** | "Who can access this?" | "What does this do?" |
| **Real-world** | A pill capsule hides its chemical ingredients | The label "Take 1 daily" hides the metabolic pathway |
| **C++ example** | `private:` member variables with public getters | Abstract class with `virtual void doSomething() = 0` |

**Can you have one without the other?**
- Encapsulation without abstraction: A class with all `private` data but no inheritance hierarchy. It's encapsulated but still exposes full complexity.
- Abstraction without encapsulation: An interface is abstract. But if the concrete class exposes all its internal data publicly, it's abstract but not encapsulated.
- **Best practice**: Both together → abstract interfaces that hide complexity **and** encapsulated implementations that protect data.

```cpp
// ABSTRACT but NOT encapsulated
class BadAccount {
public:
    virtual double getBalance() = 0;
    double balance;   // PUBLIC! Anyone can set this to anything
};

// ENCAPSULATED but NOT abstract
class GoodAccount {
private:
    double balance_;
public:
    double getBalance() const { return balance_; }
    void deposit(double amt) { if (amt > 0) balance_ += amt; }
    // No virtual functions, no inheritance → concrete but protected
};
```

---

### Q5: What is the difference between "is-a" and "has-a" relationships? When should you use each?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-handwritten.svg" alt="Handwritten: What is the difference between "is-a" and "has-a" relationships? When should you use each?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-diagram.svg" alt="Diagram: What is the difference between "is-a" and "has-a" relationships? When should you use each?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each-sticky.svg" alt="Sticky Note: What is the difference between "is-a" and "has-a" relationships? When should you use each?" width="30%">
</a>


**Answer:**

| Relationship | Type | C++ Mechanism | Example |
|-------------|------|---------------|---------|
| **is-a** (inheritance) | A Dog IS AN Animal | `class Dog : public Animal` | `Student` is a `Person` |
| **has-a** (composition) | A Car HAS AN Engine | Member variable: `Engine engine_;` | `Car` has a `SteeringWheel` |

**Decision rule:** Ask yourself "Is X a type of Y?" If yes, use inheritance. If X merely contains or uses Y, use composition.

```cpp
// is-a: Inheritance
class Animal { public: virtual void eat() = 0; };
class Dog : public Animal {
    void eat() override { /* chew */ }
};
// Dog IS an Animal → correct use of inheritance

// has-a: Composition
class Engine {
public:
    void start() { /* ignite fuel */ }
};
class Car {
private:
    Engine engine_;          // Car HAS an Engine
    SteeringWheel wheel_;    // Car HAS a SteeringWheel
public:
    void start() { engine_.start(); }
};
// Car HAS an Engine → correct use of composition
```

**Why "prefer composition over inheritance"?**

1. **Fragile base class problem**: Changes to the base class can break derived classes in unexpected ways.
2. **Tight coupling**: Inheritance creates the strongest coupling in OOP.
3. **Encapsulation leakage**: Derived classes may need to know about base class internals.
4. **Rigid hierarchies**: Deep inheritance trees are hard to refactor.
5. **Composition is more flexible**: You can swap components at runtime (`car.setEngine(new ElectricEngine())`).

```cpp
// Composition gives you runtime flexibility
class GasEngine { public: void run() { std::cout << "Vroom\n"; } };
class ElectricEngine { public: void run() { std::cout << "Whir\n"; } };

class Car {
private:
    GasEngine* engine_;    // Pointer to engine
public:
    Car(GasEngine* e) : engine_(e) {}
    void drive() { engine_->run(); }
};

int main() {
    GasEngine gas;
    ElectricEngine electric;  // Want to use this? Can't without changing Car.
    Car myCar(&gas);
    myCar.drive();
    return 0;
}
```

For true flexibility, abstract the engine:

```cpp
class Engine { public: virtual void run() = 0; };
class Car {
private:
    Engine* engine_;
public:
    Car(Engine* e) : engine_(e) {}
    void drive() { engine_->run(); }
};
// Now you can swap ANY engine at runtime
```

---

### Q6: Can you have OOP without inheritance? Explain.

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-handwritten.svg" alt="Handwritten: Can you have OOP without inheritance? Explain." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-diagram.svg" alt="Diagram: Can you have OOP without inheritance? Explain." width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/can-you-have-oop-without-inheritance-explain-sticky.svg" alt="Sticky Note: Can you have OOP without inheritance? Explain." width="30%">
</a>


**Answer:**

Yes. Encapsulation + polymorphism can exist without inheritance through **compile-time polymorphism** (templates / generics) and **duck typing**.

In C++, templates provide polymorphism without a common base class:

```cpp
// No inheritance → yet each type behaves polymorphically
template <typename T>
void process(T& obj) {
    obj.doWork();    // Any type that has doWork() works
}

class A {
public:
    void doWork() { std::cout << "A working\n"; }
};

class B {
public:
    void doWork() { std::cout << "B working\n"; }
};

int main() {
    A a; B b;
    process(a);     // Works → A has doWork()
    process(b);     // Works → B has doWork()
    // No inheritance anywhere in this code!
    return 0;
}
```

This is called **static polymorphism** or **compile-time polymorphism**. It is more efficient (no v-table, no runtime overhead) but less flexible (types must be known at compile time).

Alan Kay, who coined the term "object-oriented programming," considered **message passing** to be more fundamental than inheritance. In his view, OOP is about encapsulated objects communicating → whether or not they share a type hierarchy.

---

### Q7: What is the diamond problem in inheritance, and how does C++ solve it?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-handwritten.svg" alt="Handwritten: What is the diamond problem in inheritance, and how does C++ solve it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-diagram.svg" alt="Diagram: What is the diamond problem in inheritance, and how does C++ solve it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it-sticky.svg" alt="Sticky Note: What is the diamond problem in inheritance, and how does C++ solve it?" width="30%">
</a>


**Answer:**

The **diamond problem** occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity:

```
   Animal
  /      \
Mammal   Bird
  \      /
   Bat
```

`Bat` inherits `Animal` data twice (once through `Mammal`, once through `Bird`), leading to ambiguity → which `Animal::age` are we referring to?

```cpp
class Animal { public: int age; };
class Mammal : public Animal {};
class Bird : public Animal {};
class Bat : public Mammal, public Bird {};  // Two copies of Animal

int main() {
    Bat bat;
    bat.age = 5;        // ERROR: ambiguous → which Animal::age?
    bat.Mammal::age = 5; // OK → explicitly specify path
}
```

**C++ solution:** Virtual inheritance via the `virtual` keyword:

```cpp
class Animal { public: int age; };
class Mammal : virtual public Animal {};   // Virtual inheritance
class Bird   : virtual public Animal {};
class Bat    : public Mammal, public Bird {};
// Now Bat has only ONE shared copy of Animal

int main() {
    Bat bat;
    bat.age = 5;        // OK → only one Animal subobject
    return 0;
}
```

**Trade-off:** Virtual inheritance adds runtime overhead (extra pointer indirection) and should only be used when the diamond pattern is genuinely needed. Most OOP designs avoid it through composition or single-inheritance hierarchies.

---

### Q8: What is the difference between early binding and late binding?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-handwritten.svg" alt="Handwritten: What is the difference between early binding and late binding?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-diagram.svg" alt="Diagram: What is the difference between early binding and late binding?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-early-binding-and-late-binding-sticky.svg" alt="Sticky Note: What is the difference between early binding and late binding?" width="30%">
</a>


**Answer:**

| Aspect | Early Binding (Static Dispatch) | Late Binding (Dynamic Dispatch) |
|--------|-------------------------------|-------------------------------|
| **When resolved** | Compile time | Runtime |
| **C++ mechanism** | Non-virtual functions, function overloading, templates | Virtual functions |
| **Performance** | Faster (direct call, can be inlined) | Slightly slower (v-table lookup, cannot inline) |
| **Flexibility** | Less flexible → function determined by static type | More flexible → function determined by dynamic type |
| **When to use** | Performance-critical, known types at compile time | Extensibility, polymorphic behaviour needed |

```cpp
class Shape {
public:
    void drawEarly()  { std::cout << "Shape\n"; }         // Early binding
    virtual void drawLate() { std::cout << "Shape\n"; }   // Late binding
};

class Circle : public Shape {
public:
    void drawEarly()  { std::cout << "Circle\n"; }
    void drawLate() override { std::cout << "Circle\n"; }
};

int main() {
    Shape* s = new Circle();
    s->drawEarly();     // "Shape"   → early binding uses Shape::drawEarly
    s->drawLate();      // "Circle"  → late binding uses Circle::drawLate
    delete s;
    return 0;
}
```

---

### Q9: What is the difference between public, protected, and private inheritance in C++?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-handwritten.svg" alt="Handwritten: What is the difference between public, protected, and private inheritance in C++?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-diagram.svg" alt="Diagram: What is the difference between public, protected, and private inheritance in C++?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-the-difference-between-public-protected-and-private-inheritance-in-c-sticky.svg" alt="Sticky Note: What is the difference between public, protected, and private inheritance in C++?" width="30%">
</a>


**Answer:**

| Inheritance type | Base `public` members become | Base `protected` members become | Base `private` members |
|-----------------|------------------------------|--------------------------------|----------------------|
| `public` | `public` in derived | `protected` in derived | Not accessible |
| `protected` | `protected` in derived | `protected` in derived | Not accessible |
| `private` | `private` in derived | `private` in derived | Not accessible |

```cpp
class Base {
public:    int pub;
protected: int prot;
private:   int priv;
};

class PubDerived : public Base {
    // pub is public, prot is protected, priv is inaccessible
};

class ProtDerived : protected Base {
    // pub is protected, prot is protected, priv is inaccessible
    void f() { pub = 1; prot = 1; }  // OK → both accessible here
};

class PrivDerived : private Base {
    // pub is private, prot is private, priv is inaccessible
};

int main() {
    PubDerived  pd;  pd.pub = 1;      // OK → pub is public
    ProtDerived pod; // pod.pub = 1;  // ERROR → pub is now protected
    PrivDerived prd; // prd.pub = 1;  // ERROR → pub is now private
    return 0;
}
```

**Rule of thumb:** 99% of inheritance in practice is `public`. `private` inheritance is used for "implemented-in-terms-of" (composition alternative). `protected` inheritance is rare.

---

### Q10: What is a pure virtual function? Why would you use one?

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-handwritten.svg" alt="Handwritten: What is a pure virtual function? Why would you use one?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-diagram.svg" alt="Diagram: What is a pure virtual function? Why would you use one?" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/what-is-a-pure-virtual-function-why-would-you-use-one-sticky.svg" alt="Sticky Note: What is a pure virtual function? Why would you use one?" width="30%">
</a>


**Answer:**

A **pure virtual function** is a virtual function declared with `= 0`. It has no implementation in the base class and forces all concrete derived classes to provide an implementation. A class containing at least one pure virtual function is **abstract** → you cannot instantiate it.

```cpp
class Shape {                           // Abstract class
public:
    virtual double area() const = 0;    // Pure virtual
    virtual void draw() const = 0;
};

// Shape s;  // ERROR: cannot instantiate abstract class

class Circle : public Shape {
    double r_;
public:
    Circle(double r) : r_(r) {}
    double area() const override { return 3.14159 * r_ * r_; }
    void draw() const override { /* ... */ }
};
// Circle is concrete → can instantiate
```

**Why use pure virtual functions:**

1. **Define an interface** → specify WHAT but not HOW.
2. **Force implementation** → derived classes must provide behaviour or remain abstract.
3. **Polymorphic base** → enables runtime polymorphism through base class pointers.
4. **Design tool** → the abstract class communicates "this is a contract, not a default."
5. **Prevent instantiation** → some classes exist purely to be base classes (e.g., `Shape`, `Animal`).

---

## 1.11 Common OOP Mistakes and Anti-Patterns

### 1.11.1 God Object

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-handwritten.svg" alt="Handwritten: 1.11.1 God Object" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-diagram.svg" alt="Diagram: 1.11.1 God Object" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-1-god-object-sticky.svg" alt="Sticky Note: 1.11.1 God Object" width="30%">
</a>


A single class that knows too much or does too much.

```cpp
// Bad: God class → does everything
class Application {
public:
    void handleUserInput();
    void processPayment();
    void renderGraphics();
    void sendEmail();
    void generateReport();
    void manageDatabase();
    void authenticateUser();
    void playSound();
    void compressVideo();
    // 50+ more methods...
};
```

**Solution:** Split into focused classes (Single Responsibility Principle).

### 1.11.2 Deep Inheritance Hierarchy

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-handwritten.svg" alt="Handwritten: 1.11.2 Deep Inheritance Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-diagram.svg" alt="Diagram: 1.11.2 Deep Inheritance Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-2-deep-inheritance-hierarchy-sticky.svg" alt="Sticky Note: 1.11.2 Deep Inheritance Hierarchy" width="30%">
</a>


```cpp
class A {};
class B : public A {};
class C : public B {};
class D : public C {};
class E : public D {};
class F : public E {};  // 6 levels deep → WHY?
```

**Problems:** Fragile base class, hard to understand, tight coupling, hard to test.

**Rule of thumb:** Max 3-4 levels of inheritance. Prefer composition after that.

### 1.11.3 Ignoring the Liskov Substitution Principle (LSP)

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-handwritten.svg" alt="Handwritten: 1.11.3 Ignoring the Liskov Substitution Principle (LSP)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-diagram.svg" alt="Diagram: 1.11.3 Ignoring the Liskov Substitution Principle (LSP)" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-3-ignoring-the-liskov-substitution-principle-lsp-sticky.svg" alt="Sticky Note: 1.11.3 Ignoring the Liskov Substitution Principle (LSP)" width="30%">
</a>


Derived classes must be substitutable for their base classes.

```cpp
// LSP violation: Square is NOT a good substitute for Rectangle
class Rectangle {
public:
    virtual void setWidth(int w)  { width_ = w; }
    virtual void setHeight(int h) { height_ = h; }
    int area() const { return width_ * height_; }
protected:
    int width_ = 0, height_ = 0;
};

class Square : public Rectangle {
public:
    void setWidth(int w) override {
        width_ = height_ = w;    // Breaks expectations
    }
    void setHeight(int h) override {
        width_ = height_ = h;    // Breaks expectations
    }
};

void process(Rectangle& r) {
    r.setWidth(5);
    r.setHeight(4);
    std::cout << "Area = " << r.area() << "\n";  // Expects 20
}

int main() {
    Rectangle r;
    process(r);     // Area = 20  âœ“
    Square s;
    process(s);     // Area = 16  âœ— (called with Square, gets 16 not 20!)
    return 0;
}
```

### 1.11.4 Using Inheritance for Code Reuse Only

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-handwritten.svg" alt="Handwritten: 1.11.4 Using Inheritance for Code Reuse Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-diagram.svg" alt="Diagram: 1.11.4 Using Inheritance for Code Reuse Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/1-11-4-using-inheritance-for-code-reuse-only-sticky.svg" alt="Sticky Note: 1.11.4 Using Inheritance for Code Reuse Only" width="30%">
</a>


Just because two classes share some code doesn't mean one should inherit from the other.

```cpp
// Wrong: using inheritance just to reuse code
class DatabaseManager {
public:
    void connect();
    void executeQuery();
    void disconnect();
};

class UserService : public DatabaseManager {
    // Reusing DatabaseManager code... but UserService IS NOT a DatabaseManager
    // UserService HAS-A database connection
};

// Correct: composition
class UserService {
private:
    DatabaseManager db_;    // HAS-A relationship
public:
    void saveUser() { db_.connect(); /* ... */ }
};
```

---

## 1.12 Chapter Summary

Object-Oriented Programming is a paradigm that organises code around objects→bundles of data and behaviour→rather than around functions and logic. This chapter introduced the foundational concepts:

| Concept | Key Takeaway | C++ Mechanism |
|---------|-------------|---------------|
| **Class vs Object** | Blueprint vs instance | `class` keyword vs variable declaration |
| **OOP vs Procedural** | OOP unites data + behaviour; procedural separates them | Method calls vs function calls |
| **Encapsulation** | Data hiding + controlled access | `private:` / `protected:` specifiers |
| **Inheritance** | "is-a" relationships enable code reuse | `class D : public B` |
| **Polymorphism** | One interface, multiple implementations | Virtual functions + overriding |
| **Abstraction** | Separate interface from implementation | Pure virtual classes / interfaces |
| **Message Passing** | Objects collaborate through method calls | `obj.method(args)` |
| **Benefits** | Modularity, reusability, maintainability, scalability | All of the above working together |

### Key Design Guidelines

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-handwritten.svg" alt="Handwritten: Key Design Guidelines" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-diagram.svg" alt="Diagram: Key Design Guidelines" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/key-design-guidelines-sticky.svg" alt="Sticky Note: Key Design Guidelines" width="30%">
</a>


1. **Prefer composition over inheritance** → "has-a" is more flexible than "is-a" in most scenarios.
2. **Keep inheritance shallow** → 3-4 levels maximum; deep hierarchies are brittle.
3. **Use abstraction at module boundaries** → program to interfaces, not implementations.
4. **Encapsulate aggressively** → make member variables private, provide getters only when needed.
5. **Design for polymorphism** → write functions that accept base class references, not concrete types.
6. **Follow the Liskov Substitution Principle** → derived classes should be replaceable for their base.
7. **Single Responsibility** → each class should have exactly one reason to change.
8. **Favour composition for behaviour reuse** → strategy pattern over deep inheritance.

### OOP is Not a Silver Bullet

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-handwritten.svg" alt="Handwritten: OOP is Not a Silver Bullet" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-diagram.svg" alt="Diagram: OOP is Not a Silver Bullet" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/oop-is-not-a-silver-bullet-sticky.svg" alt="Sticky Note: OOP is Not a Silver Bullet" width="30%">
</a>


OOP excels at modelling complex systems with many interacting entities. But for:
- **Data-heavy transformation pipelines**: functional programming often works better.
- **Small scripts**: procedural code is simpler and faster to write.
- **Performance-critical hot paths**: careful procedural code can be faster (no v-table, no indirection).
- **Concurrent systems**: functional purity avoids shared mutable state.

The best programmers are **multi-paradigm** → they choose the right tool for the job.

---

## 1.13 Chapter Quiz

1. Which of the following best describes a class?
   A) A runtime entity that holds data and behaviour
   B) A blueprint that defines the structure of objects
   C) A function that operates on data structures
   D) A memory segment that stores variables
   <details><summary>Answer&lt;/summary&gt;**B)** A class is a compile-time blueprint. An object is the runtime instance.</details>

2. Which pillar of OOP is primarily responsible for data hiding?
   A) Inheritance
   B) Polymorphism
   C) Encapsulation
   D) Abstraction
   <details><summary>Answer&lt;/summary&gt;**C)** Encapsulation bundles data with methods and restricts direct access via access specifiers.</details>

3. What does the `virtual` keyword in C++ enable?
   A) Function overloading
   B) Operator overloading
   C) Runtime polymorphism (dynamic dispatch)
   D) Template instantiation
   <details><summary>Answer&lt;/summary&gt;**C)** Virtual functions enable late binding through the v-table mechanism.</details>

4. Which relationship is correctly modelled with inheritance?
   A) A Car HAS AN Engine
   B) A Department HAS Employees
   C) A Circle IS A Shape
   D) A Student HAS A Name
   <details><summary>Answer&lt;/summary&gt;**C)** "is-a" relationships use inheritance; "has-a" relationships use composition.</details>

5. What problem does the Liskov Substitution Principle address?
   A) Memory leaks in derived classes
   B) Derived classes that break base class contracts
   C) Diamond inheritance ambiguity
   D) Compilation order of multiple base classes
   <details><summary>Answer&lt;/summary&gt;**B)** LSP states derived classes must be substitutable for their base. The Square-Rectangle problem is the classic example.</details>

6. Which of the following is NOT a benefit of OOP?
   A) Modularity
   B) Reusability
   C) Automatic parallelisation
   D) Maintainability
   <details><summary>Answer&lt;/summary&gt;**C)** OOP does not automatically parallelise code. Concurrency requires explicit design.</details>

7. What is the difference between early binding and late binding?
   A) Early binding is faster; late binding is more flexible
   B) Early binding works with classes; late binding works with structs
   C) Early binding is used in Java; late binding is used in C++
   D) There is no difference
   <details><summary>Answer&lt;/summary&gt;**A)** Early binding (non-virtual) resolves at compile time; late binding (virtual) resolves at runtime.</details>

8. A pure virtual function is declared with:
   A) `virtual void f() {}`
   B) `void f() = 0;`
   C) `virtual void f() = 0;`
   D) `abstract void f();`
   <details><summary>Answer&lt;/summary&gt;**C)** `virtual void f() = 0;` declares a pure virtual function, making the class abstract.</details>

9. What is the diamond problem in C++?
   A) Circular dependency between two classes
   B) A class inheriting from two classes with a common ancestor
   C) An object that takes too much memory
   D) Two functions with the same name and parameters
   <details><summary>Answer&lt;/summary&gt;**B)** The diamond problem occurs with multiple inheritance where a class inherits from two classes sharing a common base, creating duplicate base sub-objects.</details>

10. Which inheritance type changes public members to private in the derived class?
    A) `public` inheritance
    B) `protected` inheritance
    C) `private` inheritance
    D) `virtual` inheritance
    <details><summary>Answer&lt;/summary&gt;**C)** In `private` inheritance, all base members become private in the derived class.</details>

---

## 1.14 Exercises

### Review Questions

1. Define OOP in your own words. What problem does it solve that procedural programming does not?
2. List and explain the four pillars of OOP. Give a real-world example for each.
3. What is the difference between a class and an object? Why is this distinction important?
4. Explain message passing. How is it different from a regular function call?
5. What is the v-table? How does C++ use it to implement polymorphism?
6. Why is "composition over inheritance" a recommended guideline? Give an example where inheritance is wrong but composition is right.
7. What is the difference between abstraction and encapsulation? Can you have one without the other?
8. How do OOP concepts appear in GUI frameworks? Give a concrete example.
9. What is the Liskov Substitution Principle? Show a violation with code.
10. What are the benefits and drawbacks of using OOP?

### Coding Problems

<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-handwritten.svg" alt="Handwritten: Coding Problems" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-diagram.svg" alt="Diagram: Coding Problems" width="30%">
</a>
<a href="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/oop-cpp/01-introduction/coding-problems-sticky.svg" alt="Sticky Note: Coding Problems" width="30%">
</a>


1. **Design a Library System**: Create classes `Book`, `Member`, and `Librarian`. Use encapsulation (private ISBN, public borrow/return), inheritance (`Member` → `PremiumMember` with extra borrowing limit), and polymorphism (a `displayInfo()` virtual method).

2. **Shape Hierarchy**: Build an abstract `Shape` class with `area()` and `perimeter()`. Derive `Circle`, `Rectangle`, `Triangle`. Demonstrate polymorphism by storing pointers to all shapes in a `vector<Shape*>` and computing total area.

3. **Vehicle System**: Model `Vehicle` → `Car`, `Bike`, `Truck`. Add a pure virtual `move()`. Demonstrate message passing by modelling a `Driver` object that sends `drive(Vehicle*)` messages.

4. **Implement Encapsulation Bug**: Write a class `BankAccount` with a `public` balance that gets corrupted. Fix it by making balance `private` and providing validated deposit/withdraw methods. Show the before and after.

5. **Game Entity Prototype**: Implement a mini OOP game where `Entity` → `Player`, `Enemy`, `Projectile`. Each has `update()` (polymorphic) and `render()`. The game loop stores all entities in a single polymorphic container.

### Challenge Problems

6. **Refactor Procedural to OOP**: Take the procedural `Account` code from Â§1.2.1 and refactor it to OOP. Add at least two new account types (SavingsAccount, CheckingAccount) using inheritance. Demonstrate polymorphism in a single loop.

7. **Design a Messaging System**: Model a simplified email system with classes `Message`, `Inbox`, `User`. Demonstrate message passing where `User` sends a `Message` to another `User`, and the receiving `User`'s `Inbox` stores it. Add a `SpamFilter` as a polymorphic component.

---

## 1.15 References and Further Reading

- Stroustrup, B. "The C++ Programming Language" (4th Edition). Addison-Wesley, 2013.
- Gamma, E. et al. "Design Patterns: Elements of Reusable Object-Oriented Software." Addison-Wesley, 1994.
- Meyer, B. "Object-Oriented Software Construction" (2nd Edition). Prentice Hall, 1997.
- Kay, A. "The Early History of Smalltalk." History of Programming Languages II, ACM, 1996.
- Dahl, O.-J. & Nygaard, K. "SIMULA: An ALGOL-Based Simulation Language." Communications of the ACM, 1966.
- Martin, R. C. "Clean Architecture: A Craftsman's Guide to Software Structure and Design." Prentice Hall, 2017.
- C++ Standard → ISO/IEC 14882:2020 (C++20). Sections 11 (Classes), 12 (Derived classes), 13 (Member access control), 14 (Virtual functions).
