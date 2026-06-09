# Chapter 7: Templates

## Learning Objectives

After studying this chapter, students will be able to:

- Write type-agnostic function and class templates
- Understand template instantiation and code generation
- Apply template specialisation for type-specific behaviour
- Use variadic templates for type-safe heterogeneous parameter packs
- Recognise SFINAE and its role in overload resolution

## 7.1 Motivation

Strong typing is a cornerstone of C++, but it creates duplication when the same logic applies across multiple types. Consider a function that swaps two values: without templates, we write overloads for every type.

Templates eliminate this duplication by parameterising types:

```cpp
template <typename T>
void my_swap(T& a, T& b) {
    T tmp = a;
    a = b;
    b = tmp;
}

int main() {
    int x = 1, y = 2;
    my_swap(x, y);        // T deduced as int

    std::string s1 = "a", s2 = "b";
    my_swap(s1, s2);      // T deduced as std::string
}
```

## 7.2 Function Templates

A function template is not a function but a blueprint from which the compiler generates functions through *instantiation*. The template parameter can be deduced from the arguments or specified explicitly:

```cpp
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    auto a = max_of(3, 7);             // T = int
    auto b = max_of(3.14, 2.72);       // T = double
    auto c = max_of<double>(3, 2.72);  // explicit: T = double
}
```

Template parameters need not be types. Non-type template parameters accept compile-time constant values:

```cpp
template <typename T, size_t N>
class FixedArray {
private:
    T data_[N];
public:
    constexpr size_t size() const { return N; }
    T& operator[](size_t i) { return data_[i]; }
};
```

## 7.3 Class Templates

Class templates enable generic container types:

```cpp
template <typename T>
class Stack {
public:
    void push(const T& value) {
        data_.push_back(value);
    }

    void pop() {
        if (!data_.empty()) data_.pop_back();
    }

    const T& top() const {
        return data_.back();
    }

    bool empty() const { return data_.empty(); }

private:
    std::vector<T> data_;
};

// Usage:
Stack<int> int_stack;
int_stack.push(42);
Stack<std::string> str_stack;
str_stack.push("hello");
```

Member functions defined outside the class body require the template parameter again:

```cpp
template <typename T>
void Stack<T>::push(const T& value) {
    data_.push_back(value);
}
```

## 7.4 Template Specialisation

Specialisation allows providing a different implementation for a specific type:

```cpp
// Primary template
template <typename T>
struct IsPointer {
    static constexpr bool value = false;
};

// Full specialisation for T*
template <typename T>
struct IsPointer<T*> {
    static constexpr bool value = true;
};
```

Function template specialisation:

```cpp
template <typename T>
std::string to_string(const T& value) {
    return std::to_string(value);
}

// Specialisation for std::string
template <>
std::string to_string(const std::string& value) {
    return value;
}
```

## 7.5 Variadic Templates

Variadic templates (C++11) accept an arbitrary number of template arguments:

```cpp
// Base case
void print_all() {}

// Recursive variadic
template <typename First, typename... Rest>
void print_all(const First& first, const Rest&... rest) {
    std::cout << first << ' ';
    print_all(rest...);
}

int main() {
    print_all(1, 3.14, "hello", 'c');
    // Output: 1 3.14 hello c
}
```

Fold expressions (C++17) simplify variadic operations:

```cpp
template <typename... Args>
auto sum(Args... args) {
    return (... + args);         // unary right fold
}

template <typename... Args>
void print_all(const Args&... args) {
    ((std::cout << args << ' '), ...);   // comma fold
}
```

Four fold forms exist:
- `(... + args)` — unary left fold
- `(args + ...)` — unary right fold
- `(0 + ... + args)` — binary left fold
- `(args + ... + 0)` — binary right fold

## 7.6 SFINAE

Substitution Failure Is Not An Error (SFINAE) is a principle: when substituting template arguments for a function template produces an invalid type or expression, the compiler removes that candidate from overload resolution rather than emitting an error.

This enables compile-time introspection:

```cpp
// Detect whether a type has a .size() member
template <typename T, typename = void>
struct has_size : std::false_type {};

template <typename T>
struct has_size<T, std::void_t<decltype(std::declval<T>().size())>>
    : std::true_type {};

static_assert(has_size<std::vector<int>>::value);
static_assert(!has_size<int>::value);
```

`std::enable_if` is a classic SFINAE tool for conditionally enabling templates:

```cpp
template <typename T>
typename std::enable_if<std::is_integral<T>::value, T>::type
half(T value) {
    return value / 2;
}

template <typename T>
typename std::enable_if<std::is_floating_point<T>::value, T>::type
half(T value) {
    return value / 2.0;
}
```

C++17's `if constexpr` provides a cleaner alternative in many cases:

```cpp
template <typename T>
auto half(T value) {
    if constexpr (std::is_integral_v<T>) {
        return value / 2;
    } else {
        return value / 2.0;
    }
}
```

## 7.7 Summary

Templates enable type-parametric programming in C++. Function and class templates reduce code duplication, specialisation tailors behaviour for specific types, variadic templates handle heterogeneous parameter packs, and SFINAE enables compile-time type introspection. Templates are the foundation of the Standard Template Library and much of modern C++.

## Exercises

### Review Questions

1. How does template instantiation differ from function overloading?
2. What is the purpose of template specialisation?
3. Explain the difference between `typename` and `class` in template parameter declarations.
4. What problem do fold expressions solve?
5. What does SFINAE stand for and why is it important?

### Application Problems

1. Write a function template `find_max` that accepts a `std::vector<T>` and returns the maximum element. Test with `int`, `double`, and `std::string` vectors.
2. Implement a class template `RingBuffer<T, N>`—a fixed-size circular buffer using a `std::array<T, N>`. Provide `push`, `pop`, `front`, `back`, `size`, `empty`, and `full` operations. Ensure it works with non-default-constructible types.

### Challenge Problem

3. Implement a compile-time type erasure system: create a class template `Any` that can hold any type and a function template `any_cast<T>` to retrieve it. You may use `std::any` as a reference but must implement the core mechanism yourself using a base class with virtual functions, a derived wrapper template, and `typeid` for casting. Demonstrate holding `int`, `std::string`, and a user-defined `Point` struct.
