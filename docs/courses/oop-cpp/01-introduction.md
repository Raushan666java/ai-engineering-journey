# Chapter 1: Introduction to C++

## Learning Objectives

After studying this chapter, students will be able to:

- Contrast C and C++ approaches to I/O, type safety, and code organization
- Use `std::cin` and `std::cout` for console input and output
- Organise code with namespaces and understand the `using` declaration
- Apply default arguments and function overloading correctly
- Distinguish between references and pointers and use references idiomatically

## 1.1 C++ as an Evolutionary Superset of C

![C++ Introduction Mindmap](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/oop-cpp/01-introduction.png)

C++ was designed by Bjarne Stroustrup beginning in 1979 as "C with Classes." The language retains full backward compatibility with C while adding support for object-oriented programming, generic programming, and a rich standard library. The fundamental difference is philosophical: C gives the programmer enough rope to hang themselves; C++ adds guardrails without removing the rope entirely.

In C, the programmer manually manages every aspect of program behaviour—memory allocation, string handling, I/O buffering. C++ introduces abstractions that encode these patterns into reusable, type-safe constructs. For example, where C uses `printf` with format specifiers that are checked only at runtime, C++ provides type-safe I/O streams resolved at compile time.

## 1.2 Input and Output Streams

The C++ Standard Library provides the `<iostream>` header, which declares global stream objects:

- `std::cin` — standard input (connected to keyboard by default)
- `std::cout` — standard output
- `std::cerr` — unbuffered standard error
- `std::clog` — buffered standard error

The stream operators `<<` (insertion) and `>>` (extraction) perform formatted I/O. The type of the operand determines the formatting automatically, eliminating the format-string mismatches that plague C's `printf` family.

```cpp
#include <iostream>
#include <string>

int main() {
    std::cout << "Enter your name and age: ";

    std::string name;
    int age = 0;
    std::cin >> name >> age;

    std::cout << "Hello, " << name << "! You are "
              << age << " years old." << std::endl;

    return 0;
}
```

**Output:**
```
Enter your name and age: Alice 22
Hello, Alice! You are 22 years old.
```

The `std::endl` manipulator inserts a newline character and flushes the output buffer. In performance-sensitive code, `\n` is preferred because it avoids the flush overhead.

## 1.3 Namespaces

Namespaces prevent name collisions by grouping identifiers under a named scope. The `std` namespace contains all Standard Library entities.

```cpp
namespace my_code {
    int compute() { return 42; }
}

namespace your_code {
    int compute() { return -1; }
}

int main() {
    int a = my_code::compute();    // 42
    int b = your_code::compute();  // -1
}
```

Three forms of `using` bring names into the current scope:

- `using std::cout;` — brings a single name into scope (preferred in practice)
- `using namespace std;` — brings the entire namespace into scope (common in textbooks, discouraged in production)
- `using std::literals;` — brings user-defined literal operators into scope

Header files should never contain `using namespace std;` because they would force the directive on every translation unit that includes them.

## 1.4 Default Parameters

C++ allows function parameters to have default values. Arguments are matched from left to right; once a parameter has a default value, all subsequent parameters must also have defaults.

```cpp
void display(const std::string& msg,
             int repeat = 1,
             char delim = '\n') {
    for (int i = 0; i < repeat; ++i) {
        std::cout << msg << delim;
    }
}

int main() {
    display("Hello");               // repeat=1, delim='\n'
    display("Hi", 3);               // repeat=3, delim='\n'
    display("Hey", 2, '!');         // repeat=2, delim='!'
}
```

Default arguments are resolved at compile time based on the caller's context. They are typically specified in the function declaration (in the header) rather than in the definition.

## 1.5 Function Overloading

Function overloading allows multiple functions to share the same name provided their parameter lists differ in number, type, or both. The compiler selects the best match through a process called overload resolution.

```cpp
int max(int a, int b) {
    return (a > b) ? a : b;
}

double max(double a, double b) {
    return (a > b) ? a : b;
}

char max(char a, char b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << max(3, 7) << '\n';         // calls int version
    std::cout << max(3.14, 2.72) << '\n';   // calls double version
    std::cout << max('A', 'Z') << '\n';     // calls char version
}
```

Overloading is resolved at compile time (static polymorphism). The return type alone is insufficient to distinguish overloads—the parameter types must differ. Ambiguous calls, where multiple overloads are equally good matches, cause a compilation error.

## 1.6 References

A reference is an alias for an existing variable. Unlike a pointer, a reference cannot be null and cannot be reseated to refer to a different object after initialisation.

```cpp
int x = 42;
int& ref = x;   // ref is a reference to x
ref = 100;       // x is now 100

int* ptr = &x;  // ptr points to x
ptr = nullptr;   // ptr can be null; ref cannot
```

References are the idiomatic C++ mechanism for passing large objects into functions without copying. Passing by `const` reference communicates "I will read but not modify," while pass-by-value communicates "I need my own copy."

```cpp
void process(const std::vector<int>& data) {
    // read-only access, no copy
    for (int v : data) {
        std::cout << v << ' ';
    }
}
```

Reference parameters also enable output parameters when a function must produce multiple results:

```cpp
bool divide(int a, int b, int& quotient, int& remainder) {
    if (b == 0) return false;
    quotient  = a / b;
    remainder = a % b;
    return true;
}
```

## 1.7 Summary

C++ extends C with type-safe I/O streams, namespace-based code organisation, default arguments, function overloading, and reference types. These features form the foundation upon which object-oriented programming is built. The shift from C to C++ is a shift from manual, error-prone patterns to compiler-checked abstractions that encode intent directly in code.

## Exercises

### Review Questions

1. What advantages do C++ I/O streams offer over C's `printf`/`scanf`?
2. Why is `using namespace std;` discouraged in header files?
3. Can default arguments appear in both the declaration and the definition of a function? Explain.
4. How does the compiler resolve which overloaded function to call?
5. Explain why a reference cannot be null but a pointer can.

### Application Problems

1. Write a program that reads a list of integers from the user (terminated by a non-integer) and prints their sum, average, minimum, and maximum using `std::cin` and `std::cout`.
2. Implement an overloaded set of `print` functions that accept: (a) an `int`, (b) a `double`, (c) a `std::string`, and (d) a vector of any printable type using a template (preview of Chapter 7). Each function should print its argument enclosed in brackets: `[42]`.

### Challenge Problem

3. Implement a simple command-line calculator that reads expressions of the form `number operator number` (e.g., `3 + 4`) using `std::cin`, supports the four basic arithmetic operations, and loops until the user enters `quit`. Use references to implement a function `bool parse_input(const std::string& input, double& a, char& op, double& b)`.
