# Chapter 8: Exception Handling

## Learning Objectives

After studying this chapter, students will be able to:

- Write exception-safe code using try/catch/throw
- Understand stack unwinding and its interaction with destructors
- Apply RAII for deterministic resource management
- Use `noexcept` correctly in function declarations
- Create custom exception types
- Distinguish among error-handling strategies

## 8.1 Traditional Error Handling

![Exception Handling Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/08-exceptions.png)

C-style error handling uses return codes, sentinel values, and `errno`:

```cpp
FILE* fp = fopen("config.txt", "r");
if (!fp) {
    fprintf(stderr, "Error %d: %s\n", errno, strerror(errno));
    return -1;
}
```

This approach has weaknesses: return codes can be ignored, error paths interleave with normal logic, and constructors cannot return values. C++ exceptions provide a structured alternative.

## 8.2 Throw, Try, Catch

Exception handling uses three keywords:

```cpp
double divide(double a, double b) {
    if (b == 0.0) {
        throw std::runtime_error("Division by zero");
    }
    return a / b;
}

int main() {
    try {
        double result = divide(10.0, 0.0);
        std::cout << result << '\n';
    } catch (const std::runtime_error& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
}
```

When an exception is thrown:
1. A special exception object is constructed (usually by copy).
2. Control transfers to the nearest matching `catch` handler.
3. Stack unwinding beginsâ€”all automatic objects between the `throw` and the `catch` are destroyed.

Multiple `catch` clauses are evaluated in order; the first matching type is selected:

```cpp
try {
    // code that may throw
} catch (const std::invalid_argument& e) {
    // handle invalid argument
} catch (const std::runtime_error& e) {
    // handle runtime error
} catch (const std::exception& e) {
    // catch any standard exception
} catch (...) {
    // catch anything (ellipsis handler)
}
```

## 8.3 Stack Unwinding

When an exception propagates, destructors run for all local objects on the stack between the throw point and the catch handler:

```cpp
class Resource {
public:
    Resource(const std::string& name) : name_(name) {
        std::cout << "Acquire " << name_ << '\n';
    }
    ~Resource() {
        std::cout << "Release " << name_ << '\n';
    }
private:
    std::string name_;
};

void func() {
    Resource r2("r2");
    throw std::runtime_error("error");
}

int main() {
    try {
        Resource r1("r1");
        func();
    } catch (...) {
        std::cout << "Caught exception\n";
    }
}
```

Output:
```
Acquire r1
Acquire r2
Release r2
Release r1
Caught exception
```

This demonstrates why RAII (Resource Acquisition Is Initialisation) is fundamental to exception-safe code: resources are released automatically as objects are destroyed.

## 8.4 RAII

RAII ties resource lifetime to object lifetime: acquire resources in the constructor, release them in the destructor. When the destructor runs during stack unwinding, the resource is released correctly.

```cpp
class File {
public:
    File(const char* path) : fp_(std::fopen(path, "r")) {
        if (!fp_) throw std::runtime_error("Cannot open file");
    }
    ~File() { if (fp_) std::fclose(fp_); }

    std::string read_line() { /* ... */ }

private:
    std::FILE* fp_;

    // No copying allowed
    File(const File&) = delete;
    File& operator=(const File&) = delete;
};
```

All standard library classes (containers, strings, streams, smart pointers) implement RAII. As a rule: manage resources through RAII wrappers and you rarely need explicit cleanup code.

## 8.5 The noexcept Specifier

`noexcept` declares that a function will not emit exceptions. It enables compiler optimisations (exception-handling bookkeeping can be omitted) and signals intent to callers.

```cpp
void safe_function() noexcept {
    // guarantees: will not throw
}

void may_throw() noexcept(false);   // explicit (default for most functions)
```

If a `noexcept` function does throw, `std::terminate` is called immediatelyâ€”no stack unwinding occurs. This makes it unsafe to call throwing code from `noexcept` functions unless you are prepared for program termination.

`noexcept` is also an operator that evaluates to `true` if an expression is noexcept:

```cpp
template <typename T>
void wrapper(T&& value) noexcept(noexcept(T(std::forward<T>(value)))) {
    T other = std::forward<T>(value);
}
```

Move constructors and move assignments should be `noexcept` to enable optimisations like `std::vector`'s growth to use move instead of copy.

## 8.6 Standard Exception Hierarchy

The C++ standard library defines an exception hierarchy rooted at `std::exception`:

```
std::exception
â”œâ”€â”€ std::logic_error
â”‚   â”œâ”€â”€ std::invalid_argument
â”‚   â”œâ”€â”€ std::domain_error
â”‚   â”œâ”€â”€ std::length_error
â”‚   â””â”€â”€ std::out_of_range
â”œâ”€â”€ std::runtime_error
â”‚   â”œâ”€â”€ std::range_error
â”‚   â”œâ”€â”€ std::overflow_error
â”‚   â””â”€â”€ std::underflow_error
â””â”€â”€ std::bad_alloc
    â””â”€â”€ std::bad_array_new_length
```

## 8.7 Custom Exception Classes

Derive custom exceptions from `std::exception` or one of its subclasses:

```cpp
class DatabaseError : public std::runtime_error {
public:
    DatabaseError(const std::string& query, int error_code)
        : std::runtime_error(build_message(query, error_code)),
          error_code_(error_code) {}

    int error_code() const noexcept { return error_code_; }

private:
    static std::string build_message(const std::string& query,
                                     int code) {
        return "Database query \"" + query + "\" failed with code "
               + std::to_string(code);
    }

    int error_code_;
};
```

Custom exceptions preserve the polymorphic `what()` interface while adding domain-specific information.

## 8.8 Summary

C++ exceptions provide structured error propagation with stack unwinding and RAII cleanup. The `noexcept` specifier enables optimisation by promising non-throwing behaviour. A well-defined exception hierarchy and custom exception types improve error reporting. Mastering exceptions is essential for writing robust, resource-safe C++.

## Exercises

### Review Questions

1. What happens to local objects during stack unwinding?
2. Why should destructors never throw exceptions?
3. What is RAII and why is it important for exception safety?
4. When would you declare a function `noexcept`?
5. How does `catch(...)` differ from `catch(const std::exception&)`?

### Application Problems

1. Write a program that reads integers from a file and computes their average. Use exceptions to handle: file not found, empty file, and non-integer data. Define a custom exception hierarchy with a base class `FileError` and derived `FileNotFoundError` and `ParseError`.
2. Implement a `SafeArray` class template with bounds checking. The `operator[]` should throw `std::out_of_range` for invalid indices. Demonstrate correct stack unwinding by creating several `SafeArray` objects in nested scopes.

### Challenge Problem

3. Implement a `Transaction` class that provides the `commit()` and `rollback()` patterns. Wrap an operation between `begin` and `end` calls; if an exception occurs between them, the destructor calls `rollback()` automatically. Demonstrate with a simple bank-transfer scenario involving two `Account` objects.
