# Chapter 2: Classes and Objects

> **Previous:** [Introduction](./01-introduction.md) | **Next:** [Constructors](./03-constructors.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Define a class with data members and member functions
- Apply access specifiers to enforce encapsulation
- Distinguish between `class` and `struct` in C++
- Use the `this` pointer explicitly and implicitly
- Declare `const` member functions and understand their purpose
- Implement and access static members

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Class Concept | A class is a blueprint; an object is an instance | Encapsulate data + operations together as a unit |
| Access Specifiers | `private`, `protected`, `public` control visibility | Keep data `private`, expose only what callers need |
| `class` vs `struct` | Identical except default access level | Use `struct` for aggregates, `class` for invariants |
| Member Functions | Functions scoped within a class operate on its data | Define in header for small functions; `.cpp` for larger ones |
| `this` Pointer | Implicit pointer to the invoking object | Return `*this` for fluent method chaining |
| `const` Member Functions | Promise not to modify the object's state | Mark all read-only methods `const` — enables `const` correctness |
| Static Members | Belong to the class, not any instance | Use for counters, factories, and shared configuration |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Class Concept] --> B[Access Specifiers]
    B --> C[class vs struct]
    C --> D[Member Functions]
    D --> E[this Pointer]
    E --> F[const Member Functions]
    F --> G[Static Members]
```

## 2.1 The Class Concept

> **One-Sentence Takeaway:** A class bundles data and behaviour into a single user-defined type; an object is a concrete, run-time instantiation of that blueprint.

![OOP Concepts Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/02-classes-objects.png)

A class is a user-defined type that encapsulates data and the operations that manipulate that data. An object is an instance of a classâ€”a concrete allocation of memory that conforms to the class's layout.

```cpp
class BankAccount {
private:
    std::string owner_name_;
    double      balance_;

public:
    void deposit(double amount) {
        if (amount > 0) {
            balance_ += amount;
        }
    }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance_) {
            balance_ -= amount;
            return true;
        }
        return false;
    }

    double get_balance() const {
        return balance_;
    }
};
```

The class definition provides a blueprint. Objects are instantiated as variables:

```cpp
int main() {
    BankAccount acc;          // object on the stack
    acc.deposit(1000.0);
    acc.withdraw(250.0);
    std::cout << acc.get_balance() << '\n';  // 750
}
```

## 2.2 Access Specifiers

> **One-Sentence Takeaway:** Access specifiers enforce encapsulation — `private` hides implementation, `protected` opens it to derived classes, and `public` defines the interface contract.

Access specifiers control the visibility of class members:

| Specifier | Meaning |
|-----------|---------|
| `private` | Accessible only within the class itself (default for `class`) |
| `protected` | Accessible within the class and its derived classes |
| `public` | Accessible from any code |

Encapsulation is the principle that an object's internal state should be protected from direct external modification. By making data members `private` and exposing controlled access through `public` member functions, the class enforces invariants.

> **Pro Tip:** The "rule of thumb" for access: start everything `private`, then elevate to `protected` only when a derived class genuinely needs it, and to `public` only for the interface your callers require. In the `BankAccount` example, the `balance_` can never become negative because all mutations pass through `deposit` and `withdraw`, which validate their arguments.

## 2.3 `class` versus `struct`

> **One-Sentence Takeaway:** `class` and `struct` differ only in default access — `private` for `class`, `public` for `struct` — making `struct` the natural choice for plain-data aggregates.

In C++, `struct` and `class` are functionally identical except for default access:

- `class`: members are `private` by default
- `struct`: members are `public` by default

Convention favours `struct` for passive data containers (plain-old-data aggregates) and `class` for types with invariants and private state.

```cpp
struct Point {
    double x;
    double y;
};

class Matrix {
private:
    double data_[16];
public:
    // constructors, operations...
};
```

This is a stylistic convention, not a technical distinction. The compiler treats both identically.

## 2.4 Member Functions

> **One-Sentence Takeaway:** Member functions operate on the object's data directly; define them inside the class for implicit `inline`, or outside using `::` to reduce header dependencies.

Member functions (also called methods) are functions defined inside a class scope. They operate on the object on which they are called, accessing that object's member variables directly.

Member functions can be defined inside the class body (implicitly `inline`) or outside using the scope resolution operator `::`:

```cpp
class Rectangle {
private:
    double width_;
    double height_;
public:
    double area() const;
};

double Rectangle::area() const {
    return width_ * height_;
}
```

Separating declaration (in the header) from definition (in the `.cpp` file) reduces compilation dependencies and is standard practice for larger projects.

## 2.5 The `this` Pointer

> **One-Sentence Takeaway:** `this` is the implicit pointer to the calling object — use it to disambiguate names and return `*this` for method chaining.

Every non-static member function has access to an implicit parameter named `this`, which is a pointer to the object on which the function was invoked.

```cpp
class Example {
private:
    int value_;
public:
    void set_value(int value) {
        this->value_ = value;   // disambiguates parameter from member
    }

    Example* get_this() {
        return this;            // enables method chaining
    }
};
```

Method chaining returns `*this` from each mutator, allowing calls to be concatenated:

```cpp
class Printer {
public:
    Printer& add(const std::string& s) {
        buffer_ += s;
        return *this;
    }
    void print() const {
        std::cout << buffer_ << '\n';
    }
private:
    std::string buffer_;
};

// Usage:
Printer p;
p.add("Hello ").add("World!").print();
```

## 2.6 const Member Functions

> **One-Sentence Takeaway:** A `const` after the parameter list makes `*this` read-only — the compiler enforces that the object's observable state does not change.

A member function declared with `const` after its parameter list promises not to modify the object's observable state. The compiler enforces this promise.

```cpp
class Counter {
private:
    int count_ = 0;
public:
    void increment() { ++count_; }
    int value() const { return count_; }   // read-only
};
```

The `const` qualifier is part of the function signature; a class can have both `const` and non-`const` overloads:

```cpp
class Buffer {
public:
    char& operator[](size_t index) {
        return data_[index];
    }
    const char& operator[](size_t index) const {
        return data_[index];      // called on const objects
    }
private:
    char data_[1024];
};
```

A `const` object can only call `const` member functions. This is the foundation of const-correctness, a critical design discipline in C++.

> **Remember:** Every getter that does not mutate should be `const`. If you forget, callers with a `const&` to your object cannot use that method — leading to frustrating compile errors.

## 2.7 Static Members

> **One-Sentence Takeaway:** Static members exist once per class, not once per object — use them for counters, factories, and class-wide configuration.

Static members belong to the class itself rather than to any individual object. They represent shared state or utility functions.

```cpp
class Logger {
public:
    static void log(const std::string& message) {
        ++instance_count_;
        std::cout << "[" << tag_ << "] " << message << '\n';
    }

    static int instance_count() { return instance_count_; }

private:
    static inline std::string tag_ = "APP";  // C++17 inline initialisation
    static int instance_count_;
};

// Definition in exactly one translation unit (pre-C++17):
int Logger::instance_count_ = 0;
```

Static member functions have no `this` pointer and cannot access non-static members. They are often used for factory functions, singleton accessors, and utility operations.

Static data members must be defined outside the class (in exactly one translation unit), unless they are declared `constexpr` or `inline` (C++17).

> **Warning:** Forgetting to define a static data member in exactly one `.cpp` file causes a linker error. The C++17 `inline` keyword eliminates this hassle — use `static inline` for class-level constants.

## Concept Comparison Table

| Feature | Description | Default `class` | Default `struct` |
|---------|-------------|----------------|-------------------|
| Default access | Members implicitly | `private` | `public` |
| Inheritance default | Derivation access | `private` | `public` |
| Typical use | Types with invariants | `class` | `struct` |
| Data member convention | Naming style | Trailing `_` (e.g. `value_`) | No suffix |
| Aggregate initialisation | `{ ... }` syntax | Not allowed with private members | Allowed with all-public |

## Quick Reference

| Construct | Syntax | Notes |
|-----------|--------|-------|
| Class definition | `class Name { ... };` | Semicolon required after `}` |
| Access specifier | `private:` / `protected:` / `public:` | Stays in effect until next specifier |
| `this` pointer | `this->member` | Implicit in member functions |
| `const` member function | `void f() const;` | `*this` is `const` inside the body |
| Static member function | `static void f();` | No `this` pointer |
| Static data member (C++17) | `static inline T x = val;` | No out-of-class definition needed |
| Method chaining | `return *this;` | Return type must be `T&` |

## Cross-Application Matrix

| Area | Application of Concepts |
|------|------------------------|
| Game Engines (Unreal) | `UObject` base class with static reflection and `this`-based chaining |
| GUI Frameworks (Qt) | QObject uses static meta-object system and const-correct getters |
| Banking / Finance | Account classes enforce invariants through private data + public accessors |
| Embedded Firmware | `struct` for register maps; `class` for driver abstractions with static instances |
| Compiler / Language Tools | AST nodes use `class` hierarchies with `const` visitor methods |

## Chapter Quiz

1. What is the default access level for members of a `class` in C++?
   A) `public`
   B) `protected`
   C) `private`
   D) It depends on the compiler
   <details><summary>Answer</summary>**C)** For a `class`, members are `private` by default. For a `struct`, they are `public` by default.</details>

2. Which statement about `const` member functions is **true**?
   A) They cannot be called on non-`const` objects
   B) They can modify `mutable` members and static members
   C) They must be defined inside the class body
   D) They cannot be overloaded
   <details><summary>Answer</summary>**B)** `const` member functions cannot modify object state, but `mutable` members and static members are exempt from this restriction.</details>

3. What does `this` represent inside a static member function?
   A) A pointer to the class type
   B) A pointer to the current object
   C) A null pointer
   D) Static member functions do not have a `this` pointer
   <details><summary>Answer</summary>**D)** Static member functions belong to the class, not any instance, so they have no `this` pointer.</details>

4. Why would you return `*this` from a member function?
   A) To avoid copying the object
   B) To enable method chaining
   C) To mark the function as const
   D) To access private members
   <details><summary>Answer</summary>**B)** Returning `*this` as a reference (typically `T&`) allows callers to chain multiple calls on the same object: `obj.setX(1).setY(2)`.</details>

5. How do you share a counter across all instances of a class?
   A) Use a global variable
   B) Use a static data member
   C) Use a local variable inside each method
   D) Use a `const` member function
   <details><summary>Answer</summary>**B)** A `static` data member exists once for the entire class, shared across all instances. Increment it in the constructor to count living objects.</details>

## 2.8 Summary

Classes are the central mechanism for encapsulation in C++. Access specifiers enforce visibility boundaries, `this` provides self-referencing, `const` member functions enable const-correct access, and static members model class-level data and behaviour. Together, these features allow the programmer to define types that maintain invariants and present a clear public interface.

## Exercises

### Review Questions

1. What is the default access specifier for `class`? For `struct`?
2. Why is encapsulating data members behind private access beneficial?
3. In which scenarios must `this->` be explicit rather than implicit?
4. What prevents a `const` member function from modifying the object?
5. How does a static member function differ from a non-static one?

### Application Problems

1. Design a `class` named `Time` that stores hours, minutes, and seconds privately. Provide public member functions: `set_time(int h, int m, int s)` with validation, `to_string() const` returning a formatted string like `"14:30:00"`, and `add_seconds(int s)`.
2. Implement a `class` named `Student` with private members for name, ID, and a vector of grades. Provide a `const` member function to compute the average grade, and a static member that tracks the total number of `Student` objects created.

### Challenge Problem

3. Implement a `class` named `Matrix3x3` that stores a 3x3 matrix in a private `std::array<double, 9>`. Provide `const` and non-`const` `operator()` overloads for element access (i, j), `const` member functions `determinant()` and `transpose()`, a non-`const` `invert()` that returns `bool` indicating success, and implement method chaining for setters.
