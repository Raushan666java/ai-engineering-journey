# Chapter 2: Classes and Objects

## Learning Objectives

After studying this chapter, students will be able to:

- Define a class with data members and member functions
- Apply access specifiers to enforce encapsulation
- Distinguish between `class` and `struct` in C++
- Use the `this` pointer explicitly and implicitly
- Declare `const` member functions and understand their purpose
- Implement and access static members

## 2.1 The Class Concept

A class is a user-defined type that encapsulates data and the operations that manipulate that data. An object is an instance of a class—a concrete allocation of memory that conforms to the class's layout.

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

Access specifiers control the visibility of class members:

| Specifier | Meaning |
|-----------|---------|
| `private` | Accessible only within the class itself (default for `class`) |
| `protected` | Accessible within the class and its derived classes |
| `public` | Accessible from any code |

Encapsulation is the principle that an object's internal state should be protected from direct external modification. By making data members `private` and exposing controlled access through `public` member functions, the class enforces invariants. In the `BankAccount` example, the `balance_` can never become negative because all mutations pass through `deposit` and `withdraw`, which validate their arguments.

## 2.3 `class` versus `struct`

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

## 2.7 Static Members

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
