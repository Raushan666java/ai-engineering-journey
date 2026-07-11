# Chapter 8: Exception Handling

> **Previous:** [07-templates](./07-templates.md) | **Next:** [09-stl-containers](./09-stl-containers.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Write exception-safe code using try/catch/throw with proper resource management
- Understand stack unwinding and its interaction with destructors during exception propagation
- Apply RAII for deterministic resource management in the presence of exceptions
- Use `noexcept` correctly in function declarations and understand its optimization impact
- Create custom exception types derived from `std::exception` with domain-specific data
- Distinguish among error-handling strategies and choose appropriate mechanisms
- Analyze exception safety guarantees (basic, strong, nothrow) for any function
- Handle constructor failures without memory leaks

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Traditional Error Handling** | Return codes are fragile; exceptions provide structured propagation | Use exceptions for exceptional conditions, not control flow |
| **Throw, Try, Catch** | Three-keyword mechanism separates detection from handling | Always catch by reference to avoid slicing |
| **Stack Unwinding** | Destructors run automatically during scope rollback | Keep destructors noexcept — exceptions during unwinding terminate |
| **Catch by Value vs Reference** | Value catches slice the exception object | Catch by `const&` always |
| **RAII** | Resource acquisition is initialization — deterministic cleanup | Prefer RAII wrappers over manual try/catch |
| **noexcept** | Declares functions that never throw, enabling optimization | Mark move operations and swap as noexcept |
| **Exception Hierarchy** | `std::exception` base class for polymorphic catching | Derive custom exceptions from `std::runtime_error` |
| **Constructor Exceptions** | Partially-constructed objects leak resources | Use RAII members to avoid manual cleanup |
| **Safety Guarantees** | Three levels: basic, strong, nothrow | Prefer strong guarantee for transactional operations |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Traditional Error Handling] --> B[Throw/Try/Catch]
    B --> C[Stack Unwinding]
    C --> D[RAII]
    D --> E[noexcept]
    D --> F[Exception Safety]
    F --> G[Basic / Strong / Nothrow]
    B --> H[Catch by Value vs Reference]
    H --> I[Slicing Problem]
    B --> J[Function Try Blocks]
    B --> K[Rethrowing]
    C --> L[Constructor / Destructor Exceptions]
    L --> M[Memory Leak Problem & Fix]
    E --> N[noexcept vs throw() vs nothing]
```

## 8.1 Traditional Error Handling

### 8.1.1 The Old Way

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-handwritten.svg" alt="Handwritten: 8.1.1 The Old Way" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-diagram.svg" alt="Diagram: 8.1.1 The Old Way" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-1-the-old-way-sticky.svg" alt="Sticky Note: 8.1.1 The Old Way" width="30%">
</a>


Before C++ exceptions, error handling relied on return codes, sentinel values, and the global `errno` variable. This approach is still common in C code and low-level libraries:

#### Return Codes

```cpp
// C-style: return code indicates success/failure
int divide(int a, int b, int* result) {
    if (b == 0) return -1;          // error code
    *result = a / b;
    return 0;                        // success
}

int main() {
    int res;
    int status = divide(10, 0, &res);
    if (status != 0) {
        fprintf(stderr, "Division failed\n");
        return 1;
    }
    printf("Result: %d\n", res);
    return 0;
}
```

#### errno and strerror

```cpp
#include <cmath>
#include <cerrno>
#include <cstring>
#include <iostream>

int main() {
    errno = 0;
    double result = std::sqrt(-1.0);
    if (errno == EDOM) {
        std::cerr << "Domain error: " << std::strerror(errno) << '\n';
    }
    std::cout << "sqrt(-1) = " << result << '\n';  // prints NaN
}
```

#### Sentinel Values

```cpp
// Using a sentinel to indicate "not found"
int find_in_array(const int* arr, size_t size, int value) {
    for (size_t i = 0; i < size; ++i) {
        if (arr[i] == value) return static_cast<int>(i);
    }
    return -1;  // sentinel: "not found" (ambiguous if -1 is valid index)
}
```

### 8.1.2 Problems with Traditional Approaches

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-handwritten.svg" alt="Handwritten: 8.1.2 Problems with Traditional Approaches" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-diagram.svg" alt="Diagram: 8.1.2 Problems with Traditional Approaches" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-2-problems-with-traditional-approaches-sticky.svg" alt="Sticky Note: 8.1.2 Problems with Traditional Approaches" width="30%">
</a>


| Problem | Example | Consequence |
|---------|---------|-------------|
| **Ignore return codes** | `printf("result: %d", divide(a, b, &res));` | Error silently swallowed |
| **Mixed error paths** | `if` nesting obscures normal flow | Code becomes unreadable |
| **Constructors can't return** | No return type possible | Object created in invalid state |
| **Global state (errno)** | Race conditions in multithreaded code | Undefined behavior |
| **Type-erased errors** | `-1` could mean anything | No semantic information |
| **No stack context** | Caller knows "what" failed, not "where" | Harder debugging |

### 8.1.3 Analogy: Safety Net vs. Hand Signals

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-handwritten.svg" alt="Handwritten: 8.1.3 Analogy: Safety Net vs. Hand Signals" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-diagram.svg" alt="Diagram: 8.1.3 Analogy: Safety Net vs. Hand Signals" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-1-3-analogy-safety-net-vs-hand-signals-sticky.svg" alt="Sticky Note: 8.1.3 Analogy: Safety Net vs. Hand Signals" width="30%">
</a>


**Traditional error handling** is like rock climbers using hand signals: every step requires explicit communication, signals can be missed, and if communication fails, the climber falls silently.

**Exceptions** are like a safety net: you don't need to signal on every step. If a climber falls, the net catches them automatically, regardless of where they are on the climb. The net (exception handler) is placed at strategic positions, not on every foothold.

```text
Traditional:           Exceptions:
Step 1: check return   Step 1: just climb
Step 2: check return   Step 2: just climb
Step 3: check return   Step 3: fall → net catches
Step 4: check return   Step 4: just climb
```
## 8.2 Throw, Try, Catch

> **Analogy:** A hospital emergency system. Workers (code) detect problems and call a code (throw). The emergency response team (catch) is stationed in specific areas (try blocks) and responds only to specific emergencies (exception types). If the right team isnt in this area, the emergency propagates up the chain of command (stack unwinding).

### 8.2.1 The Three Keywords

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-handwritten.svg" alt="Handwritten: 8.2.1 The Three Keywords" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-diagram.svg" alt="Diagram: 8.2.1 The Three Keywords" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-1-the-three-keywords-sticky.svg" alt="Sticky Note: 8.2.1 The Three Keywords" width="30%">
</a>


The C++ exception mechanism consists of three keywords:

| Keyword | Role | Description |
|---------|------|-------------|
| `throw` | Detector | Creates an exception object and transfers control |
| `try` | Observer | Delineates a block where exceptions are monitored |
| `catch` | Handler | Specifies which exception type to handle |

### 8.2.2 How `throw` Works

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-handwritten.svg" alt="Handwritten: 8.2.2 How `throw` Works" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-diagram.svg" alt="Diagram: 8.2.2 How `throw` Works" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-2-how-throw-works-sticky.svg" alt="Sticky Note: 8.2.2 How `throw` Works" width="30%">
</a>


When a `throw` statement executes:

1. An exception object is **copy-initialized** from the thrown expression
2. A special **exception control block** is allocated (typically heap-allocated)
3. The compiler searches for a matching `catch` handler in the current call stack
4. If no match is found in the current function, **stack unwinding** begins
5. If no match is found anywhere, `std::terminate()` is called

#### Syntax

```cpp
throw expression;                    // throw by value
throw;                               // rethrow current exception (only in catch block)
```

#### Pseudocode

```
FUNCTION readConfig(path):
    IF file does not exist:
        CREATE FileNotFoundError object
        TRANSFER control to exception handling system
    END IF
    // normal execution continues if no throw
END FUNCTION
```

#### Code Example

```cpp
#include <iostream>
#include <stdexcept>
#include <string>

double divide(double a, double b) {
    if (b == 0.0) {
        throw std::runtime_error("Division by zero: denominator is 0");
    }
    return a / b;
}

int main() {
    try {
        double result = divide(10.0, 0.0);
        std::cout << "Result: " << result << '\n';
    } catch (const std::runtime_error& e) {
        std::cerr << "Error caught: " << e.what() << '\n';
    }
}
```

**Output:**
```
Error caught: Division by zero: denominator is 0
```

### 8.2.3 The `try` Block

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-handwritten.svg" alt="Handwritten: 8.2.3 The `try` Block" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-diagram.svg" alt="Diagram: 8.2.3 The `try` Block" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-3-the-try-block-sticky.svg" alt="Sticky Note: 8.2.3 The `try` Block" width="30%">
</a>


A `try` block establishes a context for exception handling:

```cpp
try {
    // code that may throw
    // if an exception is thrown here, execution jumps to a matching catch
    // if no exception is thrown, catch blocks are skipped entirely
}
```

### 8.2.4 The `catch` Clause

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-handwritten.svg" alt="Handwritten: 8.2.4 The `catch` Clause" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-diagram.svg" alt="Diagram: 8.2.4 The `catch` Clause" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-4-the-catch-clause-sticky.svg" alt="Sticky Note: 8.2.4 The `catch` Clause" width="30%">
</a>


A `catch` clause specifies:
1. The type of exception it handles
2. The handler code

```cpp
catch (const Type& parameter) {
    // handler code
    // parameter contains the caught exception object
}
```

### 8.2.5 Multiple Catch Blocks

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-handwritten.svg" alt="Handwritten: 8.2.5 Multiple Catch Blocks" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-diagram.svg" alt="Diagram: 8.2.5 Multiple Catch Blocks" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-5-multiple-catch-blocks-sticky.svg" alt="Sticky Note: 8.2.5 Multiple Catch Blocks" width="30%">
</a>


Catch clauses are evaluated **in order**. The **first** matching type is selected:

```cpp
#include <iostream>
#include <stdexcept>
#include <vector>

void process(int value) {
    if (value < 0) {
        throw std::invalid_argument("Negative values not allowed");
    } else if (value == 0) {
        throw std::runtime_error("Zero requires special handling");
    } else if (value > 100) {
        throw std::out_of_range("Value exceeds maximum");
    }
    std::cout << "Processing " << value << '\n';
}

int main() {
    for (int v : {-5, 0, 150, 42}) {
        try {
            process(v);
        } catch (const std::invalid_argument& e) {
            std::cerr << "Invalid: " << e.what() << '\n';
        } catch (const std::out_of_range& e) {
            std::cerr << "Range: " << e.what() << '\n';
        } catch (const std::runtime_error& e) {
            std::cerr << "Runtime: " << e.what() << '\n';
        } catch (const std::exception& e) {
            std::cerr << "Standard: " << e.what() << '\n';
        }
        std::cout << "---\n";
    }
}
```

**Output:**
```
Invalid: Negative values not allowed
---
Runtime: Zero requires special handling
---
Range: Value exceeds maximum
---
Processing 42
---
```

**Important:** The order matters. If `catch (const std::exception&)` appears before the more specific types, it will catch everything:

```cpp
// WRONG: base class catches all derived types
try {
    process(v);
} catch (const std::exception& e) {     // catches everything!
    // all exceptions land here
} catch (const std::invalid_argument& e) {  // never reached
    // unreachable code
}
```

**Compiler warning:** Most compilers will warn about "exception of type X will be caught by earlier handler" for unreachable catch blocks.

### 8.2.6 Catch-All Handler

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-handwritten.svg" alt="Handwritten: 8.2.6 Catch-All Handler" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-diagram.svg" alt="Diagram: 8.2.6 Catch-All Handler" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-6-catch-all-handler-sticky.svg" alt="Sticky Note: 8.2.6 Catch-All Handler" width="30%">
</a>


The ellipsis catch-all `catch(...)` catches **any** exception, including non-standard types:

```cpp
#include <iostream>

int main() {
    try {
        throw 42;                 // throwing an int (not derived from std::exception)
    } catch (const std::exception& e) {
        std::cerr << "Standard: " << e.what() << '\n';
    } catch (...) {               // catches the int
        std::cerr << "Caught unknown exception (non-standard type)\n";
    }
}
```

**Output:**
```
Caught unknown exception (non-standard type)
```

**Use cases for catch-all:**
- Logging and rethrowing in a high-level handler
- Preventing exceptions from escaping `main()` or thread functions
- Cleaning up resources before rethrowing

```cpp
try {
    risky_operation();
} catch (...) {
    // log the error
    std::cerr << "Unknown exception at " << __FILE__ << ":" << __LINE__ << '\n';
    throw;   // rethrow -- must not swallow unknown exceptions
}
```

**Warning:** Never use `catch(...)` without rethrowing unless you are at the top level. Swallowing all exceptions hides bugs.

### 8.2.7 Rethrowing

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-handwritten.svg" alt="Handwritten: 8.2.7 Rethrowing" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-diagram.svg" alt="Diagram: 8.2.7 Rethrowing" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-7-rethrowing-sticky.svg" alt="Sticky Note: 8.2.7 Rethrowing" width="30%">
</a>


The `throw;` statement (without an expression) rethrows the current exception:

```cpp
#include <iostream>
#include <stdexcept>

void level3() {
    throw std::runtime_error("Error in level 3");
}

void level2() {
    try {
        level3();
    } catch (const std::exception& e) {
        std::cerr << "level2 caught: " << e.what() << " -- rethrowing\n";
        throw;   // rethrow -- preserves the original exception object
    }
}

void level1() {
    try {
        level2();
    } catch (const std::exception& e) {
        std::cerr << "level1 caught: " << e.what() << '\n';
    }
}

int main() {
    level1();
}
```

**Output:**
```
level2 caught: Error in level 3 -- rethrowing
level1 caught: Error in level 3
```

**Key points about rethrowing:**
- The exception object is the **same** object, not a copy
- Rethrowing outside a `catch` block calls `std::terminate()`
- Use rethrow when you can partially handle but need upper-level handlers to finish

### 8.2.8 Function Try Blocks

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-handwritten.svg" alt="Handwritten: 8.2.8 Function Try Blocks" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-diagram.svg" alt="Diagram: 8.2.8 Function Try Blocks" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-2-8-function-try-blocks-sticky.svg" alt="Sticky Note: 8.2.8 Function Try Blocks" width="30%">
</a>


A **function try block** wraps the entire function body in a `try` block, including the **constructor initializer list**:

```cpp
#include <iostream>
#include <stdexcept>
#include <string>

class Member {
public:
    Member(const std::string& name) : name_(name) {
        std::cout << "Member " << name_ << " constructed\n";
        if (name_ == "bad") {
            throw std::runtime_error("Member " + name_ + " failed");
        }
    }
    ~Member() { std::cout << "Member " << name_ << " destroyed\n"; }
private:
    std::string name_;
};

class Container {
public:
    // Function try block for constructor
    Container(const std::string& member_name)
    try : member_(member_name) {
        std::cout << "Container body\n";
    } catch (const std::exception& e) {
        std::cerr << "Container construction failed: " << e.what() << '\n';
        // Rethrow is IMPLICIT at end of constructor catch block
        // The member subobjects are already destroyed
    }

    ~Container() noexcept { std::cout << "Container destroyed\n"; }

private:
    Member member_;
};

int main() {
    try {
        Container c("bad");
    } catch (const std::exception& e) {
        std::cerr << "main caught: " << e.what() << '\n';
    }
    std::cout << "---\n";
    Container c("good");  // this one works
}
```

**Output:**
```
Member bad constructed
Member bad destroyed
Container construction failed: Member bad failed
main caught: Member bad failed
---
Member good constructed
Container body
Container destroyed
```

**Key points about function try blocks:**
- Catch blocks in constructor function try blocks **must** rethrow (implicit rethrow if no explicit throw)
- They catch exceptions from member initializers and base class constructors
- The object is considered "not fully constructed" -- destructor will NOT be called
- Destructor function try blocks cannot swallow exceptions (they propagate unless caught and handled to termination)
- **Use sparingly:** usually better to use RAII members that handle their own errors

## 8.3 Catch by Value vs Reference

### 8.3.1 The Slicing Problem

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-handwritten.svg" alt="Handwritten: 8.3.1 The Slicing Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-diagram.svg" alt="Diagram: 8.3.1 The Slicing Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-1-the-slicing-problem-sticky.svg" alt="Sticky Note: 8.3.1 The Slicing Problem" width="30%">
</a>


When you catch by **value**, the exception object is **sliced** -- the dynamic type is lost:

```cpp
#include <iostream>
#include <stdexcept>

class MyException : public std::runtime_error {
public:
    MyException(const std::string& msg, int code)
        : std::runtime_error(msg), code_(code) {}
    int code() const { return code_; }
private:
    int code_;
};

int main() {
    try {
        throw MyException("custom error", 42);

    } catch (std::runtime_error e) {   // BY VALUE -- SLICING!
        // e is a std::runtime_error, NOT a MyException
        // e.code() does not exist -- compile error
        std::cerr << "Caught: " << e.what() << '\n';
        // We lost the error_code information!
    }
}
```

### 8.3.2 Why Slicing Happens

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-handwritten.svg" alt="Handwritten: 8.3.2 Why Slicing Happens" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-diagram.svg" alt="Diagram: 8.3.2 Why Slicing Happens" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-2-why-slicing-happens-sticky.svg" alt="Sticky Note: 8.3.2 Why Slicing Happens" width="30%">
</a>


When catching by value, the catch parameter is **copy-constructed** from the exception object. The copy uses the **static type** of the catch parameter, not the dynamic type of the thrown object. Since `std::runtime_error` has no `code()` method, the additional data from `MyException` is sliced away.

### 8.3.3 The Fix: Catch by const Reference

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-handwritten.svg" alt="Handwritten: 8.3.3 The Fix: Catch by const Reference" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-diagram.svg" alt="Diagram: 8.3.3 The Fix: Catch by const Reference" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-3-the-fix-catch-by-const-reference-sticky.svg" alt="Sticky Note: 8.3.3 The Fix: Catch by const Reference" width="30%">
</a>


```cpp
try {
    throw MyException("custom error", 42);
} catch (const std::runtime_error& e) {   // BY REFERENCE -- no slicing!
    // e still refers to the original MyException object
    // dynamic_cast or virtual dispatch works correctly
    std::cerr << "Caught: " << e.what() << '\n';
    // We need a virtual interface or dynamic_cast to access code()
}
```

### 8.3.4 Comparison Table: Catch by Value vs Reference

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-handwritten.svg" alt="Handwritten: 8.3.4 Comparison Table: Catch by Value vs Reference" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-diagram.svg" alt="Diagram: 8.3.4 Comparison Table: Catch by Value vs Reference" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-4-comparison-table-catch-by-value-vs-reference-sticky.svg" alt="Sticky Note: 8.3.4 Comparison Table: Catch by Value vs Reference" width="30%">
</a>


| Aspect | Catch by Value | Catch by Reference |
|--------|---------------|-------------------|
| **Syntax** | `catch (Type e)` | `catch (const Type& e)` |
| **Slicing** | Yes -- derived type information lost | No -- original type preserved |
| **Copies** | At least 2 copies (throw + catch) | 1 copy (throw only) |
| **Performance** | Slower (extra copy + potential allocation) | Faster (no extra copy) |
| **Polymorphism** | Broken -- `what()` called on base slice | Works -- virtual dispatch on original |
| **Modification** | Can modify local copy | Cannot modify (const ref) |
| **Recommended?** | Never for exception types | Always |

### 8.3.5 Catch by Pointer -- Why Not?

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-handwritten.svg" alt="Handwritten: 8.3.5 Catch by Pointer -- Why Not?" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-diagram.svg" alt="Diagram: 8.3.5 Catch by Pointer -- Why Not?" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-5-catch-by-pointer-why-not-sticky.svg" alt="Sticky Note: 8.3.5 Catch by Pointer -- Why Not?" width="30%">
</a>


Some older code catches by pointer:

```cpp
try {
    throw new std::runtime_error("heap allocated");
} catch (std::runtime_error* e) {
    // must remember to delete!
    delete e;
}
```

**Problems:**
- Manual memory management -- who deletes?
- Inconsistency -- mixing `throw by value` with `catch by pointer`
- Exception object could be stack-allocated
- Not idiomatic in modern C++

### 8.3.6 Rule of Thumb

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-handwritten.svg" alt="Handwritten: 8.3.6 Rule of Thumb" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-diagram.svg" alt="Diagram: 8.3.6 Rule of Thumb" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-3-6-rule-of-thumb-sticky.svg" alt="Sticky Note: 8.3.6 Rule of Thumb" width="30%">
</a>


> **Always catch by `const&`**. Never catch by value (slicing), never catch by pointer (ownership ambiguity), and avoid non-const reference (no need to modify the exception).

```cpp
// Good -- idiomatic, efficient, polymorphic
catch (const std::exception& e) { ... }

// Bad -- slicing, extra copies
catch (std::exception e) { ... }

// Bad -- ownership problems
catch (std::exception* e) { ... }

// Acceptable for catch-all
catch (...) { ... }
```
## 8.4 Stack Unwinding

> **Analogy:** A row of dominoes. When you push the first domino (throw), each domino falls in sequence backward (stack frames unwind), and as each domino falls, it triggers a spring-loaded mechanism that cleans up (destructors run). The process is automatic, orderly, and guaranteed.

### 8.4.1 What Is Stack Unwinding?

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-handwritten.svg" alt="Handwritten: 8.4.1 What Is Stack Unwinding?" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-diagram.svg" alt="Diagram: 8.4.1 What Is Stack Unwinding?" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-1-what-is-stack-unwinding-sticky.svg" alt="Sticky Note: 8.4.1 What Is Stack Unwinding?" width="30%">
</a>


When an exception is thrown, the runtime system **unwinds** the call stack:
1. It walks up the call stack looking for a matching `catch` handler
2. For each function frame it passes through, it **destroys all local automatic objects** in reverse order of construction
3. When it finds a matching handler, control transfers to that handler with the exception object available

### 8.4.2 Detailed Trace Example

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-handwritten.svg" alt="Handwritten: 8.4.2 Detailed Trace Example" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-diagram.svg" alt="Diagram: 8.4.2 Detailed Trace Example" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-2-detailed-trace-example-sticky.svg" alt="Sticky Note: 8.4.2 Detailed Trace Example" width="30%">
</a>


```cpp
#include <iostream>
#include <stdexcept>
#include <string>

class Logger {
public:
    Logger(const std::string& name) : name_(name) {
        std::cout << "  CONSTRUCT: " << name_ << '\n';
    }
    ~Logger() {
        std::cout << "  DESTROY:   " << name_ << '\n';
    }
private:
    std::string name_;
};

void inner() {
    Logger l3("l3 (inner)");
    Logger l4("l4 (inner)");
    std::cout << "  ABOUT TO THROW\n";
    throw std::runtime_error("exception from inner");
    std::cout << "  AFTER THROW (never executed)\n";
}

void middle() {
    Logger l2("l2 (middle)");
    std::cout << "  Calling inner...\n";
    inner();
    std::cout << "  After inner call (never executed)\n";
}

void outer() {
    Logger l1("l1 (outer)");
    std::cout << "  Calling middle...\n";
    middle();
    std::cout << "  After middle call (never executed)\n";
}

int main() {
    try {
        outer();
    } catch (const std::exception& e) {
        std::cerr << "  CATCH: " << e.what() << '\n';
    }
    std::cout << "  Back in main -- program continues\n";
}
```

**Output:**
```
  CONSTRUCT: l1 (outer)
  Calling middle...
  CONSTRUCT: l2 (middle)
  Calling inner...
  CONSTRUCT: l3 (inner)
  CONSTRUCT: l4 (inner)
  ABOUT TO THROW
  DESTROY:   l4 (inner)
  DESTROY:   l3 (inner)
  DESTROY:   l2 (middle)
  DESTROY:   l1 (outer)
  CATCH: exception from inner
  Back in main -- program continues
```

### 8.4.3 Dry Run Trace Table

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-handwritten.svg" alt="Handwritten: 8.4.3 Dry Run Trace Table" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-diagram.svg" alt="Diagram: 8.4.3 Dry Run Trace Table" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-3-dry-run-trace-table-sticky.svg" alt="Sticky Note: 8.4.3 Dry Run Trace Table" width="30%">
</a>


| Step | Action | Stack Frame | Local Objects | Status |
|------|--------|-------------|---------------|--------|
| 1 | `main()` calls `outer()` | main, outer | - | Normal execution |
| 2 | `outer()` constructs `l1` | main, outer | l1 | Normal execution |
| 3 | `outer()` calls `middle()` | main, outer, middle | l1 | Normal execution |
| 4 | `middle()` constructs `l2` | main, outer, middle | l1, l2 | Normal execution |
| 5 | `middle()` calls `inner()` | main, outer, middle, inner | l1, l2 | Normal execution |
| 6 | `inner()` constructs `l3` | main, outer, middle, inner | l1, l2, l3 | Normal execution |
| 7 | `inner()` constructs `l4` | main, outer, middle, inner | l1, l2, l3, l4 | Normal execution |
| 8 | `throw` executes | main, outer, middle, inner | l1, l2, l3, l4 | **Exception active** |
| 9 | Unwind `inner()` frame | main, outer, middle | l1, l2, l3 | `l4` destroyed |
| 10 | Unwind `inner()` frame | main, outer, middle | l1, l2 | `l3` destroyed |
| 11 | Unwind `middle()` frame | main, outer | l1 | `l2` destroyed |
| 12 | Unwind `outer()` frame | main | - | `l1` destroyed |
| 13 | Match in `main()` | main | - | Handler runs |
| 14 | Handler executes | main | - | Prints CATCH |
| 15 | Continue after try/catch | main | - | Normal execution resumes |

### 8.4.4 What Happens During Unwinding

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-handwritten.svg" alt="Handwritten: 8.4.4 What Happens During Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-diagram.svg" alt="Diagram: 8.4.4 What Happens During Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-4-what-happens-during-unwinding-sticky.svg" alt="Sticky Note: 8.4.4 What Happens During Unwinding" width="30%">
</a>


During stack unwinding, the runtime performs these steps for each stack frame:

1. **Identify automatic objects** in the current scope
2. **Call destructors** in reverse order of construction
3. **Release stack memory** for the frame
4. **Move to the next frame** and repeat

**Critical rule:** If a destructor throws during stack unwinding while another exception is active, `std::terminate()` is called immediately. This is why destructors must be `noexcept`.

### 8.4.5 Objects Not Destroyed During Unwinding

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-handwritten.svg" alt="Handwritten: 8.4.5 Objects Not Destroyed During Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-diagram.svg" alt="Diagram: 8.4.5 Objects Not Destroyed During Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-5-objects-not-destroyed-during-unwinding-sticky.svg" alt="Sticky Note: 8.4.5 Objects Not Destroyed During Unwinding" width="30%">
</a>


- **Heap-allocated objects** (raw `new`/`malloc`) are NOT destroyed
- **Static objects** persist
- **Thread-local objects** persist within the thread
- Objects in the frame that **contains the catch handler** are destroyed before the handler runs

```cpp
#include <iostream>
#include <stdexcept>

class Resource {
public:
    Resource(const char* name) : name_(name) {
        std::cout << "  Acquire: " << name_ << '\n';
    }
    ~Resource() {
        std::cout << "  Release: " << name_ << '\n';
    }
private:
    const char* name_;
};

int main() {
    Resource* leaked = nullptr;
    try {
        Resource r1("stack_resource");
        leaked = new Resource("heap_resource");  // raw pointer -- will leak!
        throw std::runtime_error("error");
        delete leaked;  // never reached
    } catch (...) {
        std::cerr << "Caught -- heap_resource was leaked!\n";
        delete leaked;  // manually clean up
    }
}
```

**Output:**
```
  Acquire: stack_resource
  Acquire: heap_resource
  Release: stack_resource
Caught -- heap_resource was leaked!
  Release: heap_resource
```

**Note:** The `heap_resource` is not destroyed during unwinding because it is heap-allocated. Only automatic (stack) objects are destroyed. **Always use RAII wrappers** (smart pointers) instead of raw pointers.

### 8.4.6 Complexity Analysis of Stack Unwinding

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-handwritten.svg" alt="Handwritten: 8.4.6 Complexity Analysis of Stack Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-diagram.svg" alt="Diagram: 8.4.6 Complexity Analysis of Stack Unwinding" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-4-6-complexity-analysis-of-stack-unwinding-sticky.svg" alt="Sticky Note: 8.4.6 Complexity Analysis of Stack Unwinding" width="30%">
</a>


| Metric | Complexity | Notes |
|--------|------------|-------|
| **Finding handler** | O(d) | d = stack depth, linear search up the stack |
| **Destroying objects** | O(n) | n = number of automatic objects on the unwound path |
| **Total unwinding cost** | O(d + n) | Linear in stack depth and object count |
| **Memory for exception** | O(1) | Fixed-size exception control block (typically heap) |
| **Code size increase** | O(f) | f = number of functions with try/catch |
| **Runtime overhead** (no throw) | Near zero | Table-based dispatch, no cost on happy path |

Modern compilers use **table-based exception handling** (Itanium C++ ABI / SEH on Windows). The zero-cost exception model means:
- No overhead on the non-exception (happy) path
- All overhead is paid when an exception is actually thrown
- The compiler generates static tables mapping PC ranges to handler addresses

## 8.5 RAII and Exceptions

> **Analogy:** A self-closing faucet. When you leave the room (exit scope), the faucet automatically turns off (destructor runs) whether you left normally or were called away urgently (exception). You never have to remember to turn it off manually.

### 8.5.1 What RAII Provides

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-handwritten.svg" alt="Handwritten: 8.5.1 What RAII Provides" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-diagram.svg" alt="Diagram: 8.5.1 What RAII Provides" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-1-what-raii-provides-sticky.svg" alt="Sticky Note: 8.5.1 What RAII Provides" width="30%">
</a>


RAII (Resource Acquisition Is Initialization) is the single most important technique for exception-safe C++:

| Principle | Implementation | Benefit |
|-----------|---------------|---------|
| **Acquire in constructor** | Open file, allocate memory, lock mutex | Resource guaranteed to exist |
| **Release in destructor** | Close file, free memory, unlock mutex | Resource guaranteed to be released |
| **No manual cleanup** | Destructor runs during unwinding | Exception-safe by default |

### 8.5.2 RAII Wrapper Examples

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-handwritten.svg" alt="Handwritten: 8.5.2 RAII Wrapper Examples" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-diagram.svg" alt="Diagram: 8.5.2 RAII Wrapper Examples" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-2-raii-wrapper-examples-sticky.svg" alt="Sticky Note: 8.5.2 RAII Wrapper Examples" width="30%">
</a>


**File handle wrapper:**
```cpp
#include <cstdio>
#include <stdexcept>
#include <string>
#include <iostream>

class FileHandle {
public:
    explicit FileHandle(const char* path, const char* mode = "r")
        : fp_(std::fopen(path, mode)) {
        if (!fp_) {
            throw std::runtime_error(
                std::string("Cannot open file: ") + path);
        }
        std::cout << "Opened: " << path << '\n';
    }

    ~FileHandle() {
        if (fp_) {
            std::fclose(fp_);
            std::cout << "Closed file\n";
        }
    }

    // Non-copyable
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;

    // Movable
    FileHandle(FileHandle&& other) noexcept : fp_(other.fp_) {
        other.fp_ = nullptr;
    }

    FileHandle& operator=(FileHandle&& other) noexcept {
        if (this != &other) {
            if (fp_) std::fclose(fp_);
            fp_ = other.fp_;
            other.fp_ = nullptr;
        }
        return *this;
    }

    std::string read_line() {
        // implementation omitted for brevity
        return "line content";
    }

private:
    std::FILE* fp_;
};

void process_file() {
    FileHandle fh("data.txt", "r");
    // If read_line() throws, fh destructor still runs
    auto line = fh.read_line();
    std::cout << "Read: " << line << '\n';
}   // fh is destroyed here (normal exit or exception)
```

**Mutex lock wrapper:**
```cpp
#include <mutex>
#include <iostream>

class LockGuard {
public:
    explicit LockGuard(std::mutex& mtx) : mtx_(mtx) {
        mtx_.lock();
        std::cout << "Mutex locked\n";
    }
    ~LockGuard() {
        mtx_.unlock();
        std::cout << "Mutex unlocked\n";
    }
    LockGuard(const LockGuard&) = delete;
    LockGuard& operator=(const LockGuard&) = delete;
private:
    std::mutex& mtx_;
};

std::mutex global_mutex;
int shared_data = 0;

void update_shared() {
    LockGuard guard(global_mutex);
    // If an exception is thrown here, the mutex is still released
    shared_data++;
    std::cout << "Shared data: " << shared_data << '\n';
}   // guard destructor unlocks even if exception propagates
```

**Note:** C++17 provides `std::scoped_lock` and C++11 provides `std::lock_guard` which do exactly this. Always prefer standard RAII wrappers.

### 8.5.3 Smart Pointers as RAII

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-handwritten.svg" alt="Handwritten: 8.5.3 Smart Pointers as RAII" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-diagram.svg" alt="Diagram: 8.5.3 Smart Pointers as RAII" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-3-smart-pointers-as-raii-sticky.svg" alt="Sticky Note: 8.5.3 Smart Pointers as RAII" width="30%">
</a>


Smart pointers are RAII wrappers for heap memory:

```cpp
#include <memory>
#include <iostream>
#include <stdexcept>

class ExpensiveObject {
public:
    ExpensiveObject(int id) : id_(id) {
        std::cout << "Creating object " << id_ << '\n';
    }
    ~ExpensiveObject() {
        std::cout << "Destroying object " << id_ << '\n';
    }
    void do_work() { /* ... */ }
private:
    int id_;
};

void process_with_raii() {
    // Heap allocation wrapped in RAII -- automatically freed
    auto obj = std::make_unique<ExpensiveObject>(42);
    obj->do_work();
    // If do_work() throws, unique_ptr destructor frees the memory
}   // obj destroyed here (normal or exception path)

void process_without_raii() {
    // RAW pointer -- MEMORY LEAK if do_work() throws!
    ExpensiveObject* obj = new ExpensiveObject(42);
    obj->do_work();   // if this throws...
    delete obj;       // ...this never executes
}

int main() {
    try {
        process_with_raii();  // safe
        process_without_raii();  // leak if exception
    } catch (...) {
        std::cerr << "Exception caught\n";
    }
}
```

### 8.5.4 RAII Guideline

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-handwritten.svg" alt="Handwritten: 8.5.4 RAII Guideline" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-diagram.svg" alt="Diagram: 8.5.4 RAII Guideline" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-4-raii-guideline-sticky.svg" alt="Sticky Note: 8.5.4 RAII Guideline" width="30%">
</a>


> **Every resource should be owned by an RAII object.** If you have a raw `new`, `malloc`, `fopen`, `socket`, or `CreateMutex` in your code, you are likely doing it wrong. Wrap it in a class with a destructor or use the standard library wrapper.

### 8.5.5 Transaction Safety with RAII

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-handwritten.svg" alt="Handwritten: 8.5.5 Transaction Safety with RAII" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-diagram.svg" alt="Diagram: 8.5.5 Transaction Safety with RAII" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-5-5-transaction-safety-with-raii-sticky.svg" alt="Sticky Note: 8.5.5 Transaction Safety with RAII" width="30%">
</a>


```cpp
#include <iostream>
#include <stdexcept>
#include <string>

class Transaction {
public:
    explicit Transaction(const std::string& name)
        : name_(name), committed_(false) {
        std::cout << "BEGIN TRANSACTION: " << name_ << '\n';
    }

    ~Transaction() noexcept {
        if (!committed_) {
            rollback();
        }
    }

    void commit() {
        std::cout << "COMMIT TRANSACTION: " << name_ << '\n';
        committed_ = true;
    }

    // No copying or moving
    Transaction(const Transaction&) = delete;
    Transaction& operator=(const Transaction&) = delete;

private:
    void rollback() {
        std::cout << "ROLLBACK TRANSACTION: " << name_ << '\n';
    }

    std::string name_;
    bool committed_;
};

void bank_transfer(double amount) {
    Transaction tx("transfer");
    // perform transfer logic...
    if (amount <= 0) {
        throw std::invalid_argument("Amount must be positive");
    }
    // send money...
    if (amount > 10000) {
        throw std::runtime_error("Requires manager approval");
    }
    tx.commit();  // only commits if all checks pass
}   // if exception, tx destructor calls rollback()

int main() {
    try {
        bank_transfer(50000);
    } catch (const std::exception& e) {
        std::cerr << "Transfer failed: " << e.what() << '\n';
    }
}
```

**Output:**
```
BEGIN TRANSACTION: transfer
ROLLBACK TRANSACTION: transfer
Transfer failed: Requires manager approval
```
## 8.6 Constructor / Destructor Exceptions

> **Analogy:** Building a house. If the roof collapses during construction (constructor exception), the partially built walls must be cleaned up. But if the roof collapses after the house is finished and occupied (destructor exception), its a disaster that collapses the whole neighborhood.

### 8.6.1 The Constructor Exception Problem

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-handwritten.svg" alt="Handwritten: 8.6.1 The Constructor Exception Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-diagram.svg" alt="Diagram: 8.6.1 The Constructor Exception Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-1-the-constructor-exception-problem-sticky.svg" alt="Sticky Note: 8.6.1 The Constructor Exception Problem" width="30%">
</a>


When a constructor throws, the object is considered **not fully constructed**. The destructor will **NOT** be called because the object never completed construction. However, **already-constructed base classes and members ARE destroyed**.

#### The Memory Leak

```cpp
#include <iostream>
#include <stdexcept>
#include <cstring>

class StringBuffer {
public:
    StringBuffer(const char* str) {
        size_t len = std::strlen(str);
        data_ = new char[len + 1];    // allocate
        std::strcpy(data_, str);
        // If we throw AFTER this allocation, data_ leaks!
        if (len == 0) {
            throw std::invalid_argument("Empty string not allowed");
        }
        std::cout << "Buffer allocated: " << data_ << '\n';
    }

    ~StringBuffer() {
        delete[] data_;
        std::cout << "Buffer freed\n";
    }

private:
    char* data_;
};

int main() {
    try {
        StringBuffer sb("");   // throws -- leaks?
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
}
```

**Problem:** If `StringBuffer` constructor allocates `data_` before throwing, `~StringBuffer()` never runs because the object was never fully constructed. The heap memory leaks.

### 8.6.2 The Fix: Use RAII Members

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-handwritten.svg" alt="Handwritten: 8.6.2 The Fix: Use RAII Members" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-diagram.svg" alt="Diagram: 8.6.2 The Fix: Use RAII Members" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-2-the-fix-use-raii-members-sticky.svg" alt="Sticky Note: 8.6.2 The Fix: Use RAII Members" width="30%">
</a>


The solution is to use RAII wrapper **members** instead of raw resources:

```cpp
#include <iostream>
#include <stdexcept>
#include <memory>
#include <cstring>
#include <vector>

class SafeStringBuffer {
public:
    SafeStringBuffer(const char* str)
        : size_(std::strlen(str)),
          data_(std::make_unique<char[]>(size_ + 1))  // RAII wraps allocation
    {
        std::strcpy(data_.get(), str);
        if (size_ == 0) {
            // Even if we throw, data_ (unique_ptr) is already destroyed
            // as a fully-constructed member
            throw std::invalid_argument("Empty string not allowed");
        }
        std::cout << "Safe buffer: " << data_.get() << '\n';
    }

    // No need for user-declared destructor -- unique_ptr handles cleanup
    // Rule of Zero in action!

private:
    size_t size_;
    std::unique_ptr<char[]> data_;  // RAII -- automatically freed
};

int main() {
    try {
        SafeStringBuffer sb("");
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
    std::cout << "No leak -- unique_ptr handled cleanup\n";
}
```

**Output:**
```
Error: Empty string not allowed
No leak -- unique_ptr handled cleanup
```

### 8.6.3 Two-Phase Construction

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-handwritten.svg" alt="Handwritten: 8.6.3 Two-Phase Construction" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-diagram.svg" alt="Diagram: 8.6.3 Two-Phase Construction" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-3-two-phase-construction-sticky.svg" alt="Sticky Note: 8.6.3 Two-Phase Construction" width="30%">
</a>


Another pattern is two-phase construction, though it is generally considered less idiomatic in C++:

```cpp
class TwoPhaseObject {
public:
    TwoPhaseObject() : initialized_(false) {}

    // Second phase -- can fail safely because no resources held yet
    void initialize(const std::string& config) {
        // open files, allocate memory, connect to services
        resource_ = new char[1024];  // raw only for illustration
        initialized_ = true;
    }

    ~TwoPhaseObject() {
        if (initialized_) {
            delete[] resource_;
        }
    }

    bool is_initialized() const { return initialized_; }

private:
    char* resource_ = nullptr;
    bool initialized_;
};
```

**Drawback:** The object exists in an invalid state between construction and initialization. RAII is preferred.

### 8.6.4 The Destructor Exception Problem

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-handwritten.svg" alt="Handwritten: 8.6.4 The Destructor Exception Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-diagram.svg" alt="Diagram: 8.6.4 The Destructor Exception Problem" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-4-the-destructor-exception-problem-sticky.svg" alt="Sticky Note: 8.6.4 The Destructor Exception Problem" width="30%">
</a>


Destructors should **never** throw. If a destructor throws during stack unwinding (when another exception is active), `std::terminate()` is called:

```cpp
#include <iostream>
#include <stdexcept>

class BadDestructor {
public:
    ~BadDestructor() {
        std::cout << "Bad destructor running...\n";
        throw std::runtime_error("destructor failed");  // DONT DO THIS
    }
};

int main() {
    try {
        BadDestructor b;
        throw std::runtime_error("main exception");
        // When main exception unwinds, b destructor runs...
        // b destructor throws -> std::terminate()
    } catch (...) {
        std::cerr << "Never reached\n";
    }
}
```

**Output (typically):**
```
Bad destructor running...
terminate called after throwing an instance of std::runtime_error
  what():  destructor failed
[1]    12345 abort (core dumped)
```

### 8.6.5 Destructor Exception Rules

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-handwritten.svg" alt="Handwritten: 8.6.5 Destructor Exception Rules" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-diagram.svg" alt="Diagram: 8.6.5 Destructor Exception Rules" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-5-destructor-exception-rules-sticky.svg" alt="Sticky Note: 8.6.5 Destructor Exception Rules" width="30%">
</a>


| Rule | Rationale |
|------|-----------|
| **Always mark destructors `noexcept`** | C++11 makes destructors noexcept by default |
| **Never throw from destructors** | Two active exceptions = terminate |
| **Handle errors internally** | Log, swallow, or defer |
| **If you must propagate, use `std::terminate` handler** | Set a custom terminate handler |

### 8.6.6 Handling Destructor Errors Safely

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-handwritten.svg" alt="Handwritten: 8.6.6 Handling Destructor Errors Safely" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-diagram.svg" alt="Diagram: 8.6.6 Handling Destructor Errors Safely" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-6-6-handling-destructor-errors-safely-sticky.svg" alt="Sticky Note: 8.6.6 Handling Destructor Errors Safely" width="30%">
</a>


```cpp
#include <iostream>
#include <exception>
#include <stdexcept>

class FileWriter {
public:
    explicit FileWriter(const char* path) {
        // open file...
        std::cout << "File opened\n";
    }

    ~FileWriter() noexcept {
        try {
            // flush and close -- might fail
            flush();
            std::cout << "File closed safely\n";
        } catch (...) {
            // Log the error but do NOT let exception escape
            std::cerr << "Warning: file close failed (suppressed)\n";
        }
    }

    void write(const std::string& data) {
        if (data.empty()) {
            throw std::invalid_argument("Cannot write empty data");
        }
        // write to file...
    }

    void flush() {
        // might throw if disk is full
        // throw std::runtime_error("Disk full during flush");
    }

private:
    // file handle would be here
};

int main() {
    try {
        FileWriter fw("output.txt");
        fw.write("Hello");
        // If write throws, fw destructor still runs safely
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
    std::cout << "Program continues\n";
}
```

## 8.7 Exception Safety Guarantees

> **Analogy:** A bank transaction. If it fails, the bank can either: put the money back (strong guarantee), or at minimum ensure no money disappears from the system (basic guarantee), or never fail at all (nothrow guarantee).

### 8.7.1 The Three Levels

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-handwritten.svg" alt="Handwritten: 8.7.1 The Three Levels" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-diagram.svg" alt="Diagram: 8.7.1 The Three Levels" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-1-the-three-levels-sticky.svg" alt="Sticky Note: 8.7.1 The Three Levels" width="30%">
</a>


| Level | Guarantee | Meaning | Example |
|-------|-----------|---------|---------|
| **No-throw** | `noexcept` | Function will never throw | `int size() const noexcept` |
| **Strong** | Commit or rollback | If exception occurs, state is unchanged | `vector::push_back` (C++98) |
| **Basic** | No leaks, valid state | Resources released, invariants maintained | Most STL operations |
| **None** | No guarantee | May leak, may corrupt | Your own buggy code |

### 8.7.2 No-throw Guarantee

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-handwritten.svg" alt="Handwritten: 8.7.2 No-throw Guarantee" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-diagram.svg" alt="Diagram: 8.7.2 No-throw Guarantee" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-2-no-throw-guarantee-sticky.svg" alt="Sticky Note: 8.7.2 No-throw Guarantee" width="30%">
</a>


The strongest level. The operation **cannot fail**. Used for:
- Destructors
- `swap` operations
- Move constructors/assignments
- Simple queries (size, empty, begin, end)

```cpp
void safe_swap(int& a, int& b) noexcept {
    int temp = a;
    a = b;
    b = temp;
}
```

**Complexity:** O(1) for swaps, O(1) for queries.

### 8.7.3 Strong Guarantee (Commit or Rollback)

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-handwritten.svg" alt="Handwritten: 8.7.3 Strong Guarantee (Commit or Rollback)" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-diagram.svg" alt="Diagram: 8.7.3 Strong Guarantee (Commit or Rollback)" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-3-strong-guarantee-commit-or-rollback-sticky.svg" alt="Sticky Note: 8.7.3 Strong Guarantee (Commit or Rollback)" width="30%">
</a>


If an exception is thrown, the program state is **unchanged** from before the call. This is the "all-or-nothing" guarantee.

```cpp
#include <iostream>
#include <vector>
#include <stdexcept>
#include <string>

class Account {
public:
    Account(const std::string& name, double balance)
        : name_(name), balance_(balance) {}

    // Strong guarantee: either both accounts are updated or neither
    friend void transfer(Account& from, Account& to, double amount) {
        // Pre-validate -- no side effects yet
        if (amount < 0) {
            throw std::invalid_argument("Negative transfer");
        }
        if (from.balance_ < amount) {
            throw std::runtime_error("Insufficient funds");
        }

        // Now perform the actual state changes
        from.balance_ -= amount;   // modify first account
        // If the next line throws, we have a problem!
        to.balance_ += amount;     // modify second account
    }

    double balance() const { return balance_; }

private:
    std::string name_;
    double balance_;
};
```

**Problem:** The `transfer` above is NOT strongly safe. If `to.balance_ += amount` throws (unlikely for double, but could with custom types), `from` is already modified.

**Strongly safe version using copy-and-swap:**

```cpp
#include <algorithm>  // for swap

class AccountV2 {
public:
    AccountV2(const std::string& name, double balance)
        : name_(name), balance_(balance) {}

    void deposit(double amount) {
        if (amount < 0) {
            throw std::invalid_argument("Negative deposit");
        }
        balance_ += amount;
    }

    void withdraw(double amount) {
        if (amount < 0) {
            throw std::invalid_argument("Negative withdrawal");
        }
        if (balance_ < amount) {
            throw std::runtime_error("Insufficient funds");
        }
        balance_ -= amount;
    }

    double balance() const noexcept { return balance_; }

    // Strong guarantee via copy-and-swap
    friend void transfer_v2(AccountV2& from, AccountV2& to, double amount) {
        // Create copies
        AccountV2 from_copy = from;
        AccountV2 to_copy = to;

        // Modify copies (if this throws, originals unchanged)
        from_copy.withdraw(amount);
        to_copy.deposit(amount);

        // Only now commit via noexcept swap
        using std::swap;
        swap(from, from_copy);   // noexcept
        swap(to, to_copy);       // noexcept
    }

    friend void swap(AccountV2& a, AccountV2& b) noexcept {
        using std::swap;
        swap(a.balance_, b.balance_);
        swap(a.name_, b.name_);
    }

private:
    std::string name_;
    double balance_;
};
```

**The copy-and-swap idiom:**
1. Make a **copy** of the object(s) to modify
2. Perform operations on the **copy** (may throw)
3. If all operations succeed, **swap** the copy with the original (noexcept)

### 8.7.4 Basic Guarantee (No Leaks, Valid State)

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-handwritten.svg" alt="Handwritten: 8.7.4 Basic Guarantee (No Leaks, Valid State)" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-diagram.svg" alt="Diagram: 8.7.4 Basic Guarantee (No Leaks, Valid State)" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-4-basic-guarantee-no-leaks-valid-state-sticky.svg" alt="Sticky Note: 8.7.4 Basic Guarantee (No Leaks, Valid State)" width="30%">
</a>


If an exception is thrown, the program remains in a **valid** (but potentially indeterminate) state. No resources leak, all invariants are preserved, but the specific state may differ from before the call.

```cpp
class BasicSafeVector {
public:
    BasicSafeVector() : data_(nullptr), size_(0), capacity_(0) {}

    ~BasicSafeVector() noexcept {
        delete[] data_;
    }

    void push_back(int value) {
        if (size_ == capacity_) {
            // Basic guarantee: even if reallocation fails (bad_alloc),
            // the original data remains intact (valid state)
            size_t new_cap = capacity_ == 0 ? 1 : capacity_ * 2;
            int* new_data = new int[new_cap];  // may throw bad_alloc
            for (size_t i = 0; i < size_; ++i) {
                new_data[i] = data_[i];
            }
            delete[] data_;
            data_ = new_data;
            capacity_ = new_cap;
        }
        data_[size_++] = value;
    }

    size_t size() const noexcept { return size_; }

private:
    int* data_;
    size_t size_;
    size_t capacity_;
};
```

### 8.7.5 Safety Level Comparison Table

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-handwritten.svg" alt="Handwritten: 8.7.5 Safety Level Comparison Table" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-diagram.svg" alt="Diagram: 8.7.5 Safety Level Comparison Table" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-5-safety-level-comparison-table-sticky.svg" alt="Sticky Note: 8.7.5 Safety Level Comparison Table" width="30%">
</a>


| Aspect | None | Basic | Strong | No-throw |
|--------|------|-------|--------|----------|
| **No leaks** | Maybe | Yes | Yes | Yes |
| **Valid state** | Maybe | Yes | Yes | Yes |
| **State unchanged** | No | No | **Yes** | Yes |
| **Never throws** | No | No | No | **Yes** |
| **Prevalence** | Buggy code | Most operations | Transactional code | Queries, destructors, swap |
| **Implementation** | No effort | Careful cleanup | Copy-and-swap | Simple operations |

### 8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-handwritten.svg" alt="Handwritten: 8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-diagram.svg" alt="Diagram: 8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-7-6-achieving-strong-guarantee-the-copy-and-swap-idiom-sticky.svg" alt="Sticky Note: 8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom" width="30%">
</a>


```cpp
#include <utility>
#include <cstring>

class String {
public:
    String() : data_(new char[1]{}) {}

    String(const char* str)
        : data_(str ? new char[std::strlen(str) + 1]{} : new char[1]{}) {
        if (str) std::strcpy(data_, str);
    }

    // Copy constructor (may throw bad_alloc -- but thats fine)
    String(const String& other)
        : data_(new char[std::strlen(other.data_) + 1]{}) {
        std::strcpy(data_, other.data_);
    }

    // Move constructor -- noexcept for vector optimization
    String(String&& other) noexcept
        : data_(std::exchange(other.data_, nullptr)) {}

    // Copy-and-swap assignment -- STRONG GUARANTEE
    String& operator=(String other) noexcept {
        // If copy construction throws, this never executes
        swap(*this, other);
        return *this;
    }

    ~String() noexcept { delete[] data_; }

    friend void swap(String& a, String& b) noexcept {
        using std::swap;
        swap(a.data_, b.data_);
    }

    const char* c_str() const noexcept { return data_; }

private:
    char* data_;
};
```

**Why this gives strong guarantee:**
1. The parameter `other` is passed **by value** -- copy happens at the call site
2. If the copy throws `bad_alloc`, `*this` is untouched
3. If the copy succeeds, `swap` (noexcept) exchanges the state
4. Old state is destroyed when `other` goes out of scope
## 8.8 The noexcept Specifier

> **Analogy:** A fireproof building. The builder guarantees (noexcept) that the building will never catch fire. Because of this guarantee, the city can optimize zoning (compiler optimizations) and use cheaper materials (no exception-handling bookkeeping). But if a fire somehow starts anyway, the building is immediately demolished (terminate).

### 8.8.1 noexcept Syntax

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-handwritten.svg" alt="Handwritten: 8.8.1 noexcept Syntax" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-diagram.svg" alt="Diagram: 8.8.1 noexcept Syntax" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-1-noexcept-syntax-sticky.svg" alt="Sticky Note: 8.8.1 noexcept Syntax" width="30%">
</a>


```cpp
void function1() noexcept;            // guarantees: no exceptions
void function2() noexcept(true);      // same as above
void function3() noexcept(false);     // may throw (default)
void function4() noexcept(condition); // conditional noexcept
```

### 8.8.2 What noexcept Means

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-handwritten.svg" alt="Handwritten: 8.8.2 What noexcept Means" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-diagram.svg" alt="Diagram: 8.8.2 What noexcept Means" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-2-what-noexcept-means-sticky.svg" alt="Sticky Note: 8.8.2 What noexcept Means" width="30%">
</a>


1. **Contract:** The function promises not to throw exceptions
2. **Consequence of violation:** If a `noexcept` function does throw, `std::terminate()` is called immediately
3. **No stack unwinding:** The stack may or may not be unwound -- behavior is implementation-defined
4. **Optimization:** The compiler can omit exception-handling bookkeeping code

### 8.8.3 noexcept vs throw() vs Nothing

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-handwritten.svg" alt="Handwritten: 8.8.3 noexcept vs throw() vs Nothing" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-diagram.svg" alt="Diagram: 8.8.3 noexcept vs throw() vs Nothing" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-3-noexcept-vs-throw-vs-nothing-sticky.svg" alt="Sticky Note: 8.8.3 noexcept vs throw() vs Nothing" width="30%">
</a>


| Aspect | `noexcept` (C++11) | `throw()` (deprecated) | Nothing (default) |
|--------|---------------------|------------------------|-------------------|
| **Syntax** | `void f() noexcept` | `void f() throw()` | `void f()` |
| **Violation consequence** | `std::terminate()` | `std::unexpected()` (old), then `terminate` | Normal unwinding |
| **Stack unwinding on violation** | Maybe (impl-defined) | Yes (old standard) | Yes |
| **Runtime check** | No | Yes (unexpected handler called) | No |
| **Compiler optimization** | Maximum | Some (less reliable) | Minimal |
| **Status** | Modern C++ | Deprecated in C++17, removed in C++20 | Default for non-noexcept |
| **Conditional** | `noexcept(expr)` | No | No |
| **Operator form** | `noexcept(expr)` (boolean) | No | No |

### 8.8.4 Conditional noexcept

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-handwritten.svg" alt="Handwritten: 8.8.4 Conditional noexcept" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-diagram.svg" alt="Diagram: 8.8.4 Conditional noexcept" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-4-conditional-noexcept-sticky.svg" alt="Sticky Note: 8.8.4 Conditional noexcept" width="30%">
</a>


Use `noexcept(condition)` for templates where noexcept-ness depends on the template parameter:

```cpp
#include <type_traits>
#include <iostream>
#include <vector>

template <typename T>
class Container {
public:
    // Move constructor is noexcept only if Ts move is noexcept
    Container(Container&& other) noexcept(std::is_nothrow_move_constructible_v<T>)
        : data_(std::move(other.data_)) {}

    // The noexcept operator evaluates at compile time
    void push_back(const T& value) noexcept(noexcept(data_.push_back(value))) {
        data_.push_back(value);
    }

private:
    std::vector<T> data_;
};

// Example: checking noexcept
int main() {
    std::cout << std::boolalpha;
    std::cout << "int move is noexcept: "
              << std::is_nothrow_move_constructible_v<int> << '\n';
    std::cout << "std::vector<int> push_back noexcept: "
              << noexcept(std::declval<std::vector<int>&>().push_back(1)) << '\n';
}
```

### 8.8.5 The noexcept Operator

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-handwritten.svg" alt="Handwritten: 8.8.5 The noexcept Operator" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-diagram.svg" alt="Diagram: 8.8.5 The noexcept Operator" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-5-the-noexcept-operator-sticky.svg" alt="Sticky Note: 8.8.5 The noexcept Operator" width="30%">
</a>


The `noexcept` operator is a compile-time check that returns `true` if the expression is non-throwing:

```cpp
#include <iostream>

void may_throw() noexcept(false) {}
void no_throw() noexcept {}

int main() {
    std::cout << std::boolalpha;
    std::cout << "may_throw is noexcept: "
              << noexcept(may_throw()) << '\n';         // false
    std::cout << "no_throw is noexcept: "
              << noexcept(no_throw()) << '\n';           // true
    std::cout << "sizeof(int) is noexcept: "
              << noexcept(sizeof(int)) << '\n';          // true
    std::cout << "new int is noexcept: "
              << noexcept(new int) << '\n';              // false (bad_alloc)
}
```

### 8.8.6 When to Use noexcept

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-handwritten.svg" alt="Handwritten: 8.8.6 When to Use noexcept" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-diagram.svg" alt="Diagram: 8.8.6 When to Use noexcept" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-6-when-to-use-noexcept-sticky.svg" alt="Sticky Note: 8.8.6 When to Use noexcept" width="30%">
</a>


| Case | Apply noexcept? | Reason |
|------|----------------|--------|
| **Destructors** | Yes (implicitly since C++11) | Never throw from destructors |
| **Move constructor** | Yes | Enables vector reallocation optimization |
| **Move assignment** | Yes | Enables swap and reallocation |
| **swap()** | Yes | Required for strong guarantee idiom |
| **Simple getters** | Yes | `size()`, `empty()`, `begin()`, `end()` |
| **Functions that never throw** | Yes | Clarifies contract |
| **Functions that may throw** | No | Default |
| **Functions throwing in rare edge cases** | **No** | Dont lie to the compiler |
| **Functions that wrap potentially-throwing code** | No | Default |

### 8.8.7 The Vector Reallocation Optimization

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-handwritten.svg" alt="Handwritten: 8.8.7 The Vector Reallocation Optimization" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-diagram.svg" alt="Diagram: 8.8.7 The Vector Reallocation Optimization" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-7-the-vector-reallocation-optimization-sticky.svg" alt="Sticky Note: 8.8.7 The Vector Reallocation Optimization" width="30%">
</a>


This is the most important practical effect of noexcept:

```cpp
#include <vector>
#include <iostream>

struct MovableButThrowing {
    int id;
    MovableButThrowing(int i) : id(i) {}
    MovableButThrowing(MovableButThrowing&& other) noexcept(false) {
        // This move constructor is NOT noexcept
        id = other.id;
        other.id = -1;
        if (id == 42) {
            throw std::runtime_error("move failed on 42");
        }
    }
};

struct MovableNoexcept {
    int id;
    MovableNoexcept(int i) : id(i) {}
    MovableNoexcept(MovableNoexcept&& other) noexcept {
        id = other.id;
        other.id = -1;
    }
};

int main() {
    // With noexcept(false) move -- vector will COPY, not move
    std::vector<MovableButThrowing> v1;
    v1.push_back(MovableButThrowing{1});
    v1.push_back(MovableButThrowing{2});
    // Reallocation uses COPY constructor (slower, but safe)

    std::cout << "\n---\n";

    // With noexcept(true) move -- vector will MOVE (fast)
    std::vector<MovableNoexcept> v2;
    v2.push_back(MovableNoexcept{1});
    v2.push_back(MovableNoexcept{2});
    // Reallocation uses MOVE constructor (fast, optimal)
}
```

**Why this matters:** `std::vector` grows its internal buffer when it runs out of capacity. During reallocation:
- If the element type has a `noexcept` move constructor: elements are **moved** (fast, O(1) each)
- If not (or pre-C++11): elements are **copied** (potentially slow, O(n) each)

The difference can be 10x-100x for types with expensive copies.

### 8.8.8 Common noexcept Mistakes

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-handwritten.svg" alt="Handwritten: 8.8.8 Common noexcept Mistakes" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-diagram.svg" alt="Diagram: 8.8.8 Common noexcept Mistakes" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-8-8-common-noexcept-mistakes-sticky.svg" alt="Sticky Note: 8.8.8 Common noexcept Mistakes" width="30%">
</a>


```cpp
// MISTAKE 1: Calling throwing code from noexcept
void safe() noexcept {
    throw std::runtime_error("oops");  // calls std::terminate()!
}

// MISTAKE 2: Wrong assumption about noexcept
void might_throw() noexcept {
    std::vector<int> v;
    v.push_back(42);
    // push_back may throw bad_alloc -- but we declared noexcept!
    // If allocation fails, program terminates
}

// MISTAKE 3: noexcept on template without considering all instantiations
template <typename T>
void wrap(T&& value) noexcept {
    // fine for int, but what if Ts operator= throws?
    value = T{};
}

// Correct: conditional noexcept
template <typename T>
void wrap_correct(T&& value) noexcept(noexcept(value = T{})) {
    value = T{};
}
```

## 8.9 Standard Exception Hierarchy

### 8.9.1 Full Hierarchy

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-handwritten.svg" alt="Handwritten: 8.9.1 Full Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-diagram.svg" alt="Diagram: 8.9.1 Full Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-1-full-hierarchy-sticky.svg" alt="Sticky Note: 8.9.1 Full Hierarchy" width="30%">
</a>


The C++ standard library defines a rich exception hierarchy rooted at `std::exception`:

```
std::exception
├── std::logic_error
│   ├── std::invalid_argument
│   ├── std::domain_error
│   ├── std::length_error
│   └── std::out_of_range
├── std::runtime_error
│   ├── std::range_error
│   ├── std::overflow_error
│   └── std::underflow_error
├── std::bad_alloc
│   └── std::bad_array_new_length
├── std::bad_cast
├── std::bad_typeid
├── std::bad_exception
├── std::bad_function_call
├── std::bad_weak_ptr
├── std::bad_optional_access
├── std::bad_any_cast
└── std::bad_variant_access
```

### 8.9.2 Exception Categories

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-handwritten.svg" alt="Handwritten: 8.9.2 Exception Categories" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-diagram.svg" alt="Diagram: 8.9.2 Exception Categories" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-2-exception-categories-sticky.svg" alt="Sticky Note: 8.9.2 Exception Categories" width="30%">
</a>


**Logic errors** (`std::logic_error`): Errors detectable before program execution — precondition violations.

| Exception | When Thrown | Typical Cause |
|-----------|-------------|---------------|
| `std::invalid_argument` | Invalid argument value | `std::bitset::bitset(string with non-0/1)` |
| `std::domain_error` | Argument outside domain | Mathematical domain violation |
| `std::length_error` | Size exceeds maximum | `std::vector::reserve(n > max_size())` |
| `std::out_of_range` | Index out of bounds | `std::vector::at(100)` on 10-element vector |

**Runtime errors** (`std::runtime_error`): Errors detectable only during execution.

| Exception | When Thrown | Typical Cause |
|-----------|-------------|---------------|
| `std::range_error` | Result outside range | Arithmetic result outside representable range |
| `std::overflow_error` | Arithmetic overflow | `std::bitset::to_ulong()` on too-large bitset |
| `std::underflow_error` | Arithmetic underflow | Floating-point underflow (rare) |

### 8.9.3 Code: Using the Hierarchy

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-handwritten.svg" alt="Handwritten: 8.9.3 Code: Using the Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-diagram.svg" alt="Diagram: 8.9.3 Code: Using the Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-3-code-using-the-hierarchy-sticky.svg" alt="Sticky Note: 8.9.3 Code: Using the Hierarchy" width="30%">
</a>


```cpp
#include <iostream>
#include <vector>
#include <stdexcept>
#include <bitset>

int main() {
    try {
        std::vector<int> v(5);
        v.at(10) = 42;           // throws std::out_of_range
    } catch (const std::out_of_range& e) {
        std::cerr << "Out of range: " << e.what() << '\n';
    }

    try {
        std::bitset<5> b("11002");  // invalid character 2
    } catch (const std::invalid_argument& e) {
        std::cerr << "Invalid: " << e.what() << '\n';
    }

    try {
        std::vector<int> big;
        big.reserve(big.max_size() + 1);  // throws std::length_error
    } catch (const std::length_error& e) {
        std::cerr << "Too long: " << e.what() << '\n';
    }

    try {
        int* p = new int[100000000000000];  // throws std::bad_alloc
    } catch (const std::bad_alloc& e) {
        std::cerr << "Allocation failed: " << e.what() << '\n';
    }
}
```

### 8.9.4 The `what()` Method

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-handwritten.svg" alt="Handwritten: 8.9.4 The `what()` Method" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-diagram.svg" alt="Diagram: 8.9.4 The `what()` Method" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-9-4-the-what-method-sticky.svg" alt="Sticky Note: 8.9.4 The `what()` Method" width="30%">
</a>


Every `std::exception` subclass provides a virtual `what()` method returning a C-string description:

```cpp
#include <exception>
#include <iostream>

// what() signature:
// virtual const char* what() const noexcept;

void print_exception_info(const std::exception& e) {
    std::cerr << "Exception type: " << typeid(e).name()
              << "\n  what(): " << e.what() << '\n';
}

int main() {
    try {
        throw std::runtime_error("Something went wrong");
    } catch (const std::exception& e) {
        print_exception_info(e);
    }
}
```
## 8.10 Custom Exception Classes

> **Analogy:** A hospital has a standard emergency code system (Code Blue = cardiac arrest, Code Red = fire). Similarly, your application should have a standard exception hierarchy where each exception type carries domain-specific information.

### 8.10.1 Design Guidelines

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-handwritten.svg" alt="Handwritten: 8.10.1 Design Guidelines" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-diagram.svg" alt="Diagram: 8.10.1 Design Guidelines" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-1-design-guidelines-sticky.svg" alt="Sticky Note: 8.10.1 Design Guidelines" width="30%">
</a>


| Guideline | Rationale |
|-----------|-----------|
| **Derive from `std::exception` (or subclass)** | Interoperability with catch(const std::exception&) |
| **Use `std::runtime_error` as base for runtime errors** | Most common category |
| **Use `std::logic_error` for precondition violations** | Bugs that should be fixed |
| **Provide a meaningful `what()` message** | Debugging and logging |
| **Keep exception classes simple** | Exception handling is already slow -- dont make it worse |
| **Make destructors noexcept** | Default, but be explicit |
| **Preserve copy semantics** | Exceptions are copied when thrown |
| **Add domain-specific data members** | Error codes, file paths, line numbers |

### 8.10.2 Complete Custom Exception Hierarchy

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-handwritten.svg" alt="Handwritten: 8.10.2 Complete Custom Exception Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-diagram.svg" alt="Diagram: 8.10.2 Complete Custom Exception Hierarchy" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-2-complete-custom-exception-hierarchy-sticky.svg" alt="Sticky Note: 8.10.2 Complete Custom Exception Hierarchy" width="30%">
</a>


```cpp
#include <iostream>
#include <stdexcept>
#include <string>
#include <system_error>
#include <sstream>

//============================================================
// Base: ApplicationError
//============================================================
class ApplicationError : public std::runtime_error {
public:
    explicit ApplicationError(const std::string& message,
                              int error_code = 0)
        : std::runtime_error(message), error_code_(error_code) {}

    int error_code() const noexcept { return error_code_; }

protected:
    // Helper for derived classes to build messages
    static std::string build_message(const std::string& context,
                                     const std::string& detail) {
        return "[" + context + "] " + detail;
    }

private:
    int error_code_;
};

//============================================================
// Level 1: Domain-specific categories
//============================================================
class DatabaseError : public ApplicationError {
public:
    DatabaseError(const std::string& query, int db_error_code)
        : ApplicationError(
              build_message("Database", "Query failed with code "
                           + std::to_string(db_error_code)),
              db_error_code),
          query_(query) {}

    const std::string& query() const noexcept { return query_; }

private:
    std::string query_;
};

class NetworkError : public ApplicationError {
public:
    NetworkError(const std::string& host, int port,
                 const std::string& reason)
        : ApplicationError(
              build_message("Network",
                           "Connection to " + host + ":" +
                           std::to_string(port) + " failed: " + reason),
              0),
          host_(host), port_(port) {}

    const std::string& host() const noexcept { return host_; }
    int port() const noexcept { return port_; }

private:
    std::string host_;
    int port_;
};

class ConfigError : public ApplicationError {
public:
    ConfigError(const std::string& file_path,
                const std::string& reason)
        : ApplicationError(
              build_message("Config",
                           "File " + file_path + ": " + reason),
              0),
          file_path_(file_path) {}

    const std::string& file_path() const noexcept { return file_path_; }

private:
    std::string file_path_;
};

//============================================================
// Level 2: More specific types
//============================================================
class ConnectionTimeoutError : public NetworkError {
public:
    ConnectionTimeoutError(const std::string& host, int port,
                           int timeout_ms)
        : NetworkError(host, port,
                       "Timeout after " + std::to_string(timeout_ms) + "ms"),
          timeout_ms_(timeout_ms) {}

    int timeout_ms() const noexcept { return timeout_ms_; }

private:
    int timeout_ms_;
};

class ConnectionRefusedError : public NetworkError {
public:
    ConnectionRefusedError(const std::string& host, int port)
        : NetworkError(host, port, "Connection refused") {}
};

class QueryExecutionError : public DatabaseError {
public:
    QueryExecutionError(const std::string& query, int error_code,
                        const std::string& sql_state)
        : DatabaseError(query, error_code),
          sql_state_(sql_state) {}

    const std::string& sql_state() const noexcept { return sql_state_; }

private:
    std::string sql_state_;
};

//============================================================
// Using the hierarchy
//============================================================
void connect_to_service() {
    // Simulate various failure modes
    throw ConnectionTimeoutError("api.example.com", 443, 5000);
}

void execute_query() {
    throw QueryExecutionError("SELECT * FROM users", 1062, "23000");
}

int main() {
    // Polymorphic catch: use the most specific base you care about
    try {
        connect_to_service();
    } catch (const ConnectionTimeoutError& e) {
        std::cerr << "Timeout on " << e.host() << ":"
                  << e.port() << " after " << e.timeout_ms() << "ms\n";
    } catch (const NetworkError& e) {
        std::cerr << "Network issue: " << e.what() << '\n';
    } catch (const ApplicationError& e) {
        std::cerr << "Application error [" << e.error_code()
                  << "]: " << e.what() << '\n';
    } catch (const std::exception& e) {
        std::cerr << "Standard error: " << e.what() << '\n';
    }

    try {
        execute_query();
    } catch (const QueryExecutionError& e) {
        std::cerr << "Query failed [" << e.sql_state() << "]: "
                  << e.what() << '\n';
    } catch (const DatabaseError& e) {
        std::cerr << "Database error on query: " << e.query() << '\n';
    }
}
```

**Output:**
```
Timeout on api.example.com:443 after 5000ms
Query failed [23000]: [Database] Query failed with code 1062
```

### 8.10.3 Exception Class Checklist

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-handwritten.svg" alt="Handwritten: 8.10.3 Exception Class Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-diagram.svg" alt="Diagram: 8.10.3 Exception Class Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-10-3-exception-class-checklist-sticky.svg" alt="Sticky Note: 8.10.3 Exception Class Checklist" width="30%">
</a>


- [ ] Properly derived from `std::exception` or subclass
- [ ] Virtual `what()` inherited (no need to override if base is sufficient)
- [ ] Public copy constructor (implicitly provided if no weird members)
- [ ] `noexcept` destructor (implicit, but verify)
- [ ] Meaningful error message in constructor
- [ ] Additional data members for context (error codes, file names, etc.)
- [ ] Accessors for additional data (const, noexcept)

## 8.11 Interview Corner

> **Q1: Explain what happens during stack unwinding when an exception is thrown.**

**Answer:**

When a C++ exception is thrown, the runtime performs a structured sequence of operations known as stack unwinding:

1. **Exception object creation:** The thrown expression is used to copy-initialize a special exception object allocated in a compiler-managed location (usually on the heap in the Itanium C++ ABI).

2. **Handler search:** The runtime searches up the call stack for a catch clause matching the exception type. This search examines each function frame in reverse call order.

3. **Destructor invocation:** For each frame passed through during the search, all local automatic objects are destroyed in reverse order of their construction. This is the core of RAII guarantees.

4. **Control transfer:** When a matching handler is found, the stack is rewound to that frame, and execution continues in the catch block.

5. **Matching rules:** The catch clauses are evaluated in order of appearance. A match occurs if:
   - The types are identical (ignoring top-level cv-qualifiers)
   - The thrown type is publicly derived from the catch type
   - The catch is `catch(...)`
   - The catch is a pointer type and standard pointer conversions apply

6. **No handler found:** If no matching handler exists anywhere in the call stack, `std::terminate()` is called.

**Critical point:** If during stack unwinding a destructor throws another exception, `std::terminate()` is immediately called because the runtime cannot handle two simultaneous active exceptions.

> **Q2: Why should destructors never throw exceptions?**

**Answer:**

Destructors must never throw for several reasons:

1. **Stack unwinding during exception:** If a destructor throws while the stack is already unwinding due to another exception, there are two active exceptions simultaneously. The C++ runtime cannot handle this and calls `std::terminate()`.

2. **C++11 default:** Destructors are implicitly `noexcept(true)` since C++11. If a destructor attempts to throw, the compiler may call `std::terminate()` immediately, even during normal (non-exceptional) destruction.

3. **RAII contract violation:** RAII relies on destructors running successfully to release resources. If a destructor throws, resource cleanup is interrupted, potentially leaking resources.

4. **Container guarantees:** STL containers assume element destructors never throw. If a destructor throws during `std::vector::erase()` or similar operations, the container is left in an undefined state.

**What to do instead:**

```cpp
class SafeResource {
public:
    ~SafeResource() noexcept {
        try {
            cleanup();  // might throw
        } catch (...) {
            // Log the error but never propagate
            std::cerr << "Cleanup failed (suppressed)\n";
        }
    }

private:
    void cleanup() {
        // might logically fail (e.g., file close error)
    }
};
```

> **Q3: What is the difference between catching by value vs catching by reference?**

**Answer:**

| Aspect | Catch by Value | Catch by Reference |
|--------|---------------|-------------------|
| **Slicing** | Yes -- the exception object is copy-constructed into the catch parameter using the static type, losing any derived type information | No -- the reference binds to the original exception object, preserving dynamic type |
| **Copies** | At least two: one for the throw and one for the catch parameter | At least one: just the throw |
| **Polymorphism** | Broken: `e.what()` calls the base class version even if a derived type was thrown | Works: virtual dispatch resolves to the most-derived `what()` override |
| **Performance** | Slower -- extra copy, which may allocate | Faster -- no extra copy |

**Example demonstrating the difference:**

```cpp
struct Base : std::exception {
    const char* what() const noexcept override {
        return "Base";
    }
};

struct Derived : Base {
    const char* what() const noexcept override {
        return "Derived";
    }
};

int main() {
    try { throw Derived(); }
    catch (Base b) { std::cout << b.what() << '\n'; }  // prints "Base" (sliced)
    // vs
    try { throw Derived(); }
    catch (const Base& b) { std::cout << b.what() << '\n'; }  // prints "Derived"
}
```

> **Q4: What are the three levels of exception safety guarantees?**

**Answer:**

The three levels, from weakest to strongest:

**1. Basic Guarantee:** If an exception is thrown, no resources are leaked and objects remain in a valid (but unspecified) state. Invariants are maintained, but the specific value is unknown. Most operations in the standard library provide at least the basic guarantee.

*Example:* A `push_back` that leaks no memory even if reallocation fails.

**2. Strong Guarantee (Commit or Rollback):** If an exception is thrown, the program state is exactly as it was before the call. This is an "all-or-nothing" transaction semantics.

*Implementation strategy:* The **copy-and-swap idiom** is the classic approach:
- Create a copy of the object(s)
- Modify the copy
- If all modifications succeed, swap (noexcept) the copy with the original
- If any modification throws, the copy is destroyed and the original is untouched

**3. No-throw Guarantee:** The operation will never throw an exception. This is the strongest guarantee and is required for:
- Destructors
- `swap` operations
- Move constructors (for optimal vector reallocation)
- Simple queries like `size()`, `empty()`

**Comparison:**

```
                  NEVER THROWS
                  ┌──────────────────────────────┐
                  │  No-throw (swap, move, dtor) │
                  │──────────────────────────────│
                  │  Strong (commit or rollback) │
                  │──────────────────────────────│
     MAY THROW    │  Basic (no leaks, valid)     │
                  └──────────────────────────────┘
```

> **Q5: What is the difference between `noexcept`, `throw()`, and no exception specification?**

**Answer:**

```cpp
void f1() noexcept;      // C++11: terminate on violation
void f2() throw();       // deprecated C++03: unexpected() on violation
void f3();               // Default: may throw
```

| Feature | `noexcept` | `throw()` | None |
|---------|-----------|-----------|------|
| C++ Standard | C++11 onward | C++03 (deprecated in C++17, removed in C++20) | Always |
| On violation | `std::terminate()` | `std::unexpected()` then typically `terminate` | N/A |
| Stack unwinding on violation | Implementation-defined (may unwind, may not) | Yes, destructors run before `unexpected()` | Always (normal) |
| Runtime overhead | Zero cost (static table) | Some (runtime checks for unexpected handler) | Zero cost (table-based) |
| Compiler optimization | Maximum -- can omit EH tables | Less reliable optimization | Normal |
| Conditional form | `noexcept(expr)` | No | N/A |
| Operator form | `noexcept(expr)` (compile-time boolean) | No | N/A |

**The key insight:** `noexcept` is not just syntactic sugar for `throw()`. The semantics differ in important ways:
- `noexcept` separates the optimization guarantee from the runtime enforcement mechanism
- It enables the standard library to detect noexcept-ness via `std::is_nothrow_*` type traits
- It allows conditional noexcept, which is essential for templates
- The lack of guaranteed stack unwinding on violation enables greater compiler freedom

> **Q6: How does RAII interact with exception handling?**

**Answer:**

RAII (Resource Acquisition Is Initialization) and exception handling are complementary mechanisms that together form the backbone of C++ error management:

**How they interact:**

1. **Automatic cleanup:** When an exception propagates, stack unwinding guarantees that destructors of local objects run in reverse construction order. RAII leverages this to automatically release resources (memory, file handles, mutexes, connections).

2. **No leak path:** With RAII, there is no code path where a resource is forgotten. The destructor runs whether the scope exits normally or via exception.

3. **Exception safety:** RAII is the primary tool for achieving basic and strong exception safety guarantees. Without RAII, every try/catch block would need manual cleanup code, which is error-prone and violates DRY.

**Example of bad code (manual cleanup, leak-prone):**

```cpp
void bad() {
    Resource* r = new Resource();
    // if doWork() throws, resource leaks
    doWork(r);
    delete r;
}
```

**Example of good code (RAII, exception-safe):**

```cpp
void good() {
    auto r = std::make_unique<Resource>();
    // if doWork() throws, unique_ptr destructor cleans up
    doWork(r.get());
    // if we get here, delete happens automatically
}
```

**The golden rule:** If all resource management is done through RAII wrappers, your code is automatically exception-safe at the basic guarantee level.

> **Q7: Can constructors throw exceptions? What happens to partially-constructed objects?**

**Answer:**

Yes, constructors can and should throw exceptions to indicate construction failure. Here is what happens:

1. **No destructor call:** If a constructor throws, the destructor of the object being constructed is **NOT called** because the object was never fully constructed.

2. **Member and base destructors:** Fully constructed subobjects (base classes and member variables) **ARE** destroyed in reverse order of their construction.

3. **Memory leak risk:** If a constructor allocates a raw resource (e.g., `new`) and then throws before storing it in a member, that resource leaks.

**The fix: Use RAII members**

```cpp
// BAD: raw pointer member -- leaks on exception
class Bad {
    int* data;
public:
    Bad() {
        data = new int[100];
        throw std::runtime_error("fail");  // data leaks!
    }
    ~Bad() { delete[] data; }
};

// GOOD: RAII member -- no leak
class Good {
    std::unique_ptr<int[]> data;
public:
    Good() : data(std::make_unique<int[]>(100)) {
        throw std::runtime_error("fail");  // data is destroyed as member
    }
    // No need for user-defined destructor (Rule of Zero)
};
```

**Key guideline:** Prefer RAII member objects over raw resources. If a member is an RAII wrapper, its destructor runs automatically even when the containing objects constructor throws. This is the "RAII members protect constructor exceptions" principle.
## 8.12 Applications in Real Systems

### 8.12.1 STL Exception Behavior

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-handwritten.svg" alt="Handwritten: 8.12.1 STL Exception Behavior" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-diagram.svg" alt="Diagram: 8.12.1 STL Exception Behavior" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-1-stl-exception-behavior-sticky.svg" alt="Sticky Note: 8.12.1 STL Exception Behavior" width="30%">
</a>


The C++ Standard Library uses exceptions extensively. Every container operation documents its exception safety guarantee.

| Container | Operation | Safety Level | Notes |
|-----------|-----------|-------------|-------|
| `std::vector` | `push_back()` | Strong (if T move is noexcept) | Copy or move elements on reallocation |
| `std::vector` | `insert()` | Basic or Strong | Depends on number of elements |
| `std::list` | `push_back()` | Strong | No reallocation (node-based) |
| `std::map` | `insert()` | Strong | Node-based, rarely throws |
| `std::string` | `operator+=` | Strong | Reallocation may copy |
| `std::shared_ptr` | Constructor | Strong | Allocates control block |
| `std::fstream` | Operations | Basic | May set failbit instead of throw |

### 8.12.2 Smart Pointer Exception Safety

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-handwritten.svg" alt="Handwritten: 8.12.2 Smart Pointer Exception Safety" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-diagram.svg" alt="Diagram: 8.12.2 Smart Pointer Exception Safety" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-2-smart-pointer-exception-safety-sticky.svg" alt="Sticky Note: 8.12.2 Smart Pointer Exception Safety" width="30%">
</a>


Smart pointers demonstrate RAII at work in the standard library:

```cpp
#include <memory>
#include <iostream>
#include <stdexcept>

struct Connection {
    Connection() { std::cout << "Connection opened\n"; }
    ~Connection() { std::cout << "Connection closed\n"; }
    void send(const std::string& data) {
        if (data.empty())
            throw std::runtime_error("Cannot send empty data");
        std::cout << "Sent: " << data << '\n';
    }
};

// Custom deleter for shared_ptr
struct ConnectionDeleter {
    void operator()(Connection* c) const noexcept {
        delete c;   // Connection destructor runs here
    }
};

void process_data(const std::string& data) {
    // RAII: connection is automatically closed
    std::unique_ptr<Connection, ConnectionDeleter> conn(new Connection());
    // Even if send() throws, ~unique_ptr calls the deleter
    conn->send(data);
    std::cout << "Data processed successfully\n";
}   // unique_ptr destructor runs even on exception

int main() {
    try {
        process_data("");   // throws
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
}
```

**Output:**
```
Connection opened
Connection closed
Error: Cannot send empty data
```

### 8.12.3 Transaction Processing Systems

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-handwritten.svg" alt="Handwritten: 8.12.3 Transaction Processing Systems" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-diagram.svg" alt="Diagram: 8.12.3 Transaction Processing Systems" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-3-transaction-processing-systems-sticky.svg" alt="Sticky Note: 8.12.3 Transaction Processing Systems" width="30%">
</a>


Financial systems rely heavily on exception-safe transaction handling:

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
#include <vector>

class Account {
public:
    Account(const std::string& id, double balance)
        : id_(id), balance_(balance) {}

    void withdraw(double amount) {
        if (amount < 0) throw std::invalid_argument("Negative withdraw");
        if (balance_ < amount) throw std::runtime_error("Insufficient funds");
        balance_ -= amount;
    }

    void deposit(double amount) {
        if (amount < 0) throw std::invalid_argument("Negative deposit");
        balance_ += amount;
    }

    double balance() const noexcept { return balance_; }
    const std::string& id() const noexcept { return id_; }

private:
    std::string id_;
    double balance_;
};

// Strong guarantee: transaction is atomic
void wire_transfer(Account& from, Account& to, double amount) {
    // Check preconditions first
    if (&from == &to)
        throw std::logic_error("Cannot transfer to self");
    if (amount <= 0)
        throw std::invalid_argument("Amount must be positive");

    // Copy-and-swap approach
    Account from_copy = from;  // copy
    Account to_copy = to;      // copy

    from_copy.withdraw(amount);  // modify copies (may throw)
    to_copy.deposit(amount);     // modify copies (may throw)

    // Commit: noexcept swap
    using std::swap;
    swap(from, from_copy);
    swap(to, to_copy);
}

int main() {
    Account alice("A001", 1000.0);
    Account bob("B002", 500.0);

    try {
        wire_transfer(alice, bob, 200.0);
        std::cout << "Transfer succeeded\n";
    } catch (const std::exception& e) {
        std::cerr << "Transfer failed: " << e.what() << '\n';
    }

    std::cout << "Alice: $" << alice.balance()
              << ", Bob: $" << bob.balance() << '\n';

    // This will fail but leave state unchanged
    try {
        wire_transfer(alice, bob, 2000.0);  // insufficient
    } catch (const std::exception& e) {
        std::cerr << "Transfer failed: " << e.what() << '\n';
    }

    std::cout << "Alice: $" << alice.balance()
              << ", Bob: $" << bob.balance() << '\n';
}
```

**Output:**
```
Transfer succeeded
Alice: $800, Bob: $700
Transfer failed: Insufficient funds
Alice: $800, Bob: $700
```

### 8.12.4 Server Request Handling

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-handwritten.svg" alt="Handwritten: 8.12.4 Server Request Handling" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-diagram.svg" alt="Diagram: 8.12.4 Server Request Handling" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-4-server-request-handling-sticky.svg" alt="Sticky Note: 8.12.4 Server Request Handling" width="30%">
</a>


```cpp
#include <iostream>
#include <stdexcept>
#include <memory>
#include <string>

class Request { /* ... */ };
class Response { /* ... */ };
class DatabaseSession {
public:
    DatabaseSession() { std::cout << "DB session opened\n"; }
    ~DatabaseSession() noexcept { std::cout << "DB session closed\n"; }
};

class RequestHandler {
public:
    Response handle(const Request& req) {
        // Function-level try block
        try {
            return process(req);
        } catch (const DatabaseError& e) {
            log_error("Database failure for request", e);
            throw;  // rethrow -- dont swallow
        } catch (const NetworkError& e) {
            log_error("Network failure", e);
            throw;
        } catch (const std::exception& e) {
            log_error("Unknown error", e);
            throw;
        }
    }

private:
    Response process(const Request& req) {
        DatabaseSession session;  // RAII -- always closed
        // ... process request ...
        throw ConnectionTimeoutError("db.internal", 5432, 30000);
        return Response{};
    }

    void log_error(const std::string& context,
                   const std::exception& e) {
        std::cerr << "[ERROR] " << context << ": " << e.what() << '\n';
    }
};
```

### 8.12.5 noexcept in Real-World Code

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-handwritten.svg" alt="Handwritten: 8.12.5 noexcept in Real-World Code" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-diagram.svg" alt="Diagram: 8.12.5 noexcept in Real-World Code" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-5-noexcept-in-real-world-code-sticky.svg" alt="Sticky Note: 8.12.5 noexcept in Real-World Code" width="30%">
</a>


```cpp
// std::swap -- must be noexcept for generic code
template <typename T>
void swap(T& a, T& b) noexcept(noexcept(T(std::move(a))) &&
                                noexcept(a = std::move(b))) {
    T tmp = std::move(a);
    a = std::move(b);
    b = std::move(tmp);
}

// std::vector growth decision:
// Uses move if noexcept, copies otherwise
template <typename T>
void vector_growth_example() {
    std::vector<T> v;
    // If T has noexcept move:
    //   reallocation uses memcpy-like moves (fast)
    // If T lacks noexcept move:
    //   reallocation uses copies (slower, but safe)
    for (int i = 0; i < 1000; ++i) {
        v.push_back(T(i));
    }
}
```

### 8.12.6 Exception-Safe Logger

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-handwritten.svg" alt="Handwritten: 8.12.6 Exception-Safe Logger" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-diagram.svg" alt="Diagram: 8.12.6 Exception-Safe Logger" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-6-exception-safe-logger-sticky.svg" alt="Sticky Note: 8.12.6 Exception-Safe Logger" width="30%">
</a>


```cpp
#include <fstream>
#include <mutex>
#include <string>
#include <iostream>

class Logger {
public:
    explicit Logger(const std::string& path)
        : file_(path, std::ios::app) {
        if (!file_.is_open()) {
            throw std::runtime_error("Cannot open log file: " + path);
        }
    }

    // Non-copyable, non-movable
    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;

    // Basic guarantee: log is in valid state after exception
    void log(const std::string& level, const std::string& message) {
        std::lock_guard<std::mutex> lock(mutex_);
        // If file_ write fails, we log to stderr instead
        try {
            file_ << "[" << level << "] " << message << '\n';
            file_.flush();
        } catch (const std::exception& e) {
            std::cerr << "[LOGGER FAILURE] " << e.what() << '\n';
            // Falls back to stderr -- operation not lost entirely
            std::cerr << "[" << level << "] " << message << '\n';
        }
    }

private:
    std::ofstream file_;
    std::mutex mutex_;
};
```

### 8.12.7 Performance Considerations

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-handwritten.svg" alt="Handwritten: 8.12.7 Performance Considerations" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-diagram.svg" alt="Diagram: 8.12.7 Performance Considerations" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/8-12-7-performance-considerations-sticky.svg" alt="Sticky Note: 8.12.7 Performance Considerations" width="30%">
</a>


| Operation | Cost (typical) | Notes |
|-----------|---------------|-------|
| Zero-cost try block (no throw) | ~0 cycles | Table-based EH has no overhead on happy path |
| Throwing an exception | 10,000-100,000 cycles | Stack unwinding, destructor calls, handler search |
| Catch by reference | Negligible extra | Reference bind is cheap |
| Catch by value (with copy) | Variable | Depends on exception types copy cost |
| noexcept optimization | None at runtime | Enables compiler to omit EH tables |

**When NOT to use exceptions:**
- High-frequency loops (>1% throw rate)
- Embedded systems with exception support disabled
- Real-time systems with strict latency requirements
- As normal control flow (exceptions are for exceptional conditions)

## Chapter Summary

### Concept Comparison Table

| Strategy | Mechanism | Safety Level | When to Use |
|----------|-----------|-------------|-------------|
| Return Codes | errno, sentinel values | None | Non-critical, frequent failures |
| Exceptions | throw/try/catch | Basic/Strong | Exceptional, rare failures |
| noexcept | Compiler guarantee | No-throw | Functions that truly never throw |
| RAII | Destructor-based cleanup | Basic+ | Resource management always |
| std::optional (C++17) | Value-or-nullopt | No-throw | Expected absence, not failure |
| std::expected (C++23) | Value-or-error | No-throw | Expected recoverable errors |

### noexcept Decision Flowchart

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-handwritten.svg" alt="Handwritten: noexcept Decision Flowchart" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-diagram.svg" alt="Diagram: noexcept Decision Flowchart" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/noexcept-decision-flowchart-sticky.svg" alt="Sticky Note: noexcept Decision Flowchart" width="30%">
</a>


```
                    ┌─────────────┐
                    │ Function    │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │ Destructor? │─── Yes ──► noexcept (implicit)
                    └──────┬──────┘
                           │ No
                    ┌──────┴──────┐
                    │ Move/Swap?  │─── Yes ──► noexcept (for optimization)
                    └──────┬──────┘
                           │ No
                    ┌──────┴──────────┐
                    │ Simple getter?  │─── Yes ──► noexcept
                    └──────┬──────────┘
                           │ No
                    ┌──────┴────────────────────┐
                    │ Uses throwing operations? │─── Yes ──► noexcept(false)
                    └──────┬────────────────────┘
                           │ No
                    ┌──────┴──────┐
                    │ noexcept    │ (carefully consider)
                    └─────────────┘
```

### Quick Reference

| Concept | Key Detail | Common Pitfall |
|---------|------------|----------------|
| throw | Creates exception object, starts unwinding | Throwing during stack unwinding = terminate |
| try/catch | Catches by reference | Catching by value slices the object |
| RAII | Destructor releases resource | Forgetting RAII = manual cleanup |
| noexcept | Optimization contract | Violating it calls terminate |
| what() | Virtual method on std::exception | Not overridden in custom types |
| Function try block | Catches member init exceptions | Implicit rethrow in constructors |
| Catch-all | catch(...) | Swallowing exceptions hides bugs |
| Strong guarantee | Copy-and-swap idiom | Forgetting noexcept on swap |

### Common Pitfalls

<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-handwritten.svg" alt="Handwritten: Common Pitfalls" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-diagram.svg" alt="Diagram: Common Pitfalls" width="30%">
</a>
<a href="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/oop-cpp/08-exceptions/common-pitfalls-sticky.svg" alt="Sticky Note: Common Pitfalls" width="30%">
</a>


1. **Catching by value** -- causes slicing, extra copies
2. **Swallowing exceptions** -- catch(...) without rethrow hides bugs
3. **Throwing from destructors** -- calls std::terminate during unwinding
4. **Raw pointers in classes** -- leak if constructor throws
5. **noexcept lying** -- throwing from noexcept calls terminate
6. **Wrong catch order** -- base class before derived class catches everything
7. **Exception as control flow** -- slower than if/else for frequent paths
8. **Forgetting std::nothrow** -- `new(std::nothrow)` for non-throwing allocation

## Chapter Quiz

1. What happens to local objects during stack unwinding?
   A) They are leaked
   B) Their destructors run in reverse order of construction
   C) Their destructors run in construction order
   D) They are ignored
   <details><summary>Answer&lt;/summary&gt;**B)** Stack unwinding destroys local objects in reverse order of construction.</details>

2. Why should destructors never throw?
   A) It is undefined behaviour
   B) std::terminate is called during stack unwinding if a destructor throws
   C) The compiler forbids it
   D) It causes a segmentation fault
   <details><summary>Answer&lt;/summary&gt;**B)** If a destructor throws during stack unwinding when another exception is active, std::terminate is called.</details>

3. What does noexcept enable that copy constructors do not?
   A) Virtual dispatch
   B) Move-based reallocation in std::vector
   C) Inline expansion
   D) Template instantiation
   <details><summary>Answer&lt;/summary&gt;**B)** std::vector uses noexcept move constructors to choose moves over copies during reallocation.</details>

4. The RAII idiom stands for:
   A) Resource Allocation in Initialisation
   B) Resource Acquisition Is Initialisation
   C) Runtime Allocation and Immediate Initialisation
   D) Random Access Iterator Integration
   <details><summary>Answer&lt;/summary&gt;**B)** Resource Acquisition Is Initialisation.</details>

5. Which catch-all handler is correct?
   A) catch()
   B) catch(...)
   C) catch(any)
   D) catch(*)
   <details><summary>Answer&lt;/summary&gt;**B)** catch(...) is the catch-all handler.</details>

6. What is the main problem with catching exceptions by value?
   A) It is syntactically incorrect
   B) It slices the exception object, losing derived type information
   C) It is slower than catching by pointer
   D) The compiler forbids it
   <details><summary>Answer&lt;/summary&gt;**B)** Catching by value slices the exception object, losing polymorphic behavior and any additional data in derived types.</details>

7. Which exception safety level guarantees that the program state is unchanged if an exception occurs?
   A) Basic
   B) Strong
   C) No-throw
   D) Both Strong and No-throw
   <details><summary>Answer&lt;/summary&gt;**D)** Both Strong (commit or rollback) and No-throw guarantee state is unchanged, but No-throw additionally guarantees no exception is emitted.</details>

8. What happens if a constructor throws after allocating a raw resource?
   A) The resource is automatically freed
   B) The resource leaks because the destructor is not called
   C) The program terminates
   D) The resource is freed by the delete operator
   <details><summary>Answer&lt;/summary&gt;**B)** The destructor is not called for objects whose constructor did not complete. Use RAII wrappers to avoid leaks.</details>

## Exercises

### Review Questions

1. What happens to local objects during stack unwinding when an exception propagates?
2. Why should destructors never throw exceptions?
3. What is RAII and why is it important for exception safety?
4. When would you declare a function `noexcept`?
5. How does `catch(...)` differ from `catch(const std::exception&)`?
6. What is the difference between catching by value and catching by reference?
7. Explain the three exception safety levels.
8. What is the difference between `noexcept` and `throw()`?

### Application Problems

1. **Safe File Reader:** Write a program that reads integers from a file and computes their average. Use exceptions to handle: file not found, empty file, and non-integer data. Define a custom exception hierarchy with a base class `FileError` and derived `FileNotFoundError` and `ParseError`.

2. **SafeArray with Bounds Checking:** Implement a `SafeArray` class template with bounds checking. The `operator[]` should throw `std::out_of_range` for invalid indices. Demonstrate correct stack unwinding by creating several `SafeArray` objects in nested scopes.

3. **Bank Transaction with Strong Guarantee:** Implement a `Transaction` class that provides the `commit()` and `rollback()` patterns. Wrap an operation between `begin` and `end` calls; if an exception occurs between them, the destructor calls `rollback()` automatically. Demonstrate with a simple bank-transfer scenario involving two `Account` objects.

### Challenge Problem

4. **Exception-Safe Database Connection Pool:**
   Design and implement a `ConnectionPool` class that:
   - Maintains a fixed-size pool of database connections (simulate with RAII wrapper)
   - Provides `acquire()` returning a RAII guard that releases on destruction
   - Is exception-safe: if a connection throws during use, it is returned to the pool
   - Provides strong guarantee for acquire/release operations
   - Handles the case where all connections are in use (throws `std::runtime_error`)
   - Write a multithreaded test that demonstrates exception safety under contention

5. **Noexcept Audit:**
   Given the following class, identify which functions should be `noexcept` and which should not. Justify each decision:

```cpp
class ImageProcessor {
public:
    ImageProcessor(const std::string& path);
    ~ImageProcessor();
    ImageProcessor(const ImageProcessor& other);
    ImageProcessor(ImageProcessor&& other);
    ImageProcessor& operator=(ImageProcessor other);
    void resize(int width, int height);
    void apply_filter(const std::string& filter_name);
    int width() const;
    int height() const;
    void swap(ImageProcessor& other);
    void save(const std::string& output_path);
};
```
