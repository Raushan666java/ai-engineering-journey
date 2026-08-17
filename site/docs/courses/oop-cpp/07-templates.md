---
id: 07-templates
slug: /oop-cpp/07-templates
title: "Chapter 7: Templates"
sidebar_label: "Chapter 7: Templates"
sidebar_position: 7
---
# Chapter 7: Templates

> **Previous:** [06-operator-overloading](./06-operator-overloading.md) | **Next:** [08-exceptions](./08-exceptions.md)

## Learning Objectives

After studying this chapter, students will be able to:
- Design type-agnostic function and class templates with full mastery
- Trace template instantiation and specialization through dry runs and complexity analysis
- Apply explicit, partial, and full specialization for type-specific optimization
- Deploy variadic templates with fold expressions for type-safe heterogeneous packs
- Exploit SFINAE for compile-time introspection and enable_if-based dispatch
- Analyze the template compilation model and its impact on project structure
- Distinguish typename vs class, template template parameters, and dependent name rules
- Apply template techniques in real systems: CRTP, policy-based design, type traits

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Function Templates** | Type-parameterized function blueprints | Write once, use with any type supporting the operations |
| **Class Templates** | Type-parameterized class blueprints | `std::vector<T>` → the canonical example |
| **Template Instantiation** | Compiler stamping out concrete code per type | Each instantiation is a distinct type with unique address |
| **Template Specialization** | Providing type-specific implementations | Full, partial, and explicit → each serves a different purpose |
| **Non-Type Parameters** | Compile-time constants as template arguments | `std::array<T, N>` → bounds checked at compile time |
| **Variadic Templates** | Accept arbitrary number of type parameters | Foundation of tuples, perfect forwarding, fold expressions |
| **SFINAE** | Substitution Failure Is Not An Error | Compile-time type introspection without runtime cost |
| **Template Template Parameters** | Templates accepting other templates | Policy-based design and container adaptors |
| **CRTP** | Curiously Recurring Template Pattern | Static polymorphism without virtual dispatch |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Function Templates] --> B[Class Templates]
    B --> C[Template Instantiation]
    C --> D[Specialization]
    D --> E[Variadic Templates]
    E --> F[SFINAE]
    F --> G[Real-World Applications]
    G --> H[CRTP & Policy Design]
```

## 7.1 Motivation → The Problem Templates Solve

### Real-World Analogy: The Cookie Cutter

Imagine a bakery that makes three types of cookies: chocolate chip, gingerbread, and sugar. Without a cookie cutter, the baker hand-shapes each cookie individually → exact same labor for every batch. With a single cookie cutter (the **template**), the baker stamps out any dough type in seconds. The cutter is the **blueprint**; each stamped cookie is an **instantiation**.

```
Dough (type)            →  Cookie Cutter (template)  →  Baked Cookie (instantiation)
chocolate chip          →  shape<T>                   →  shape<chocolate_chip>
gingerbread             →  shape<T>                   →  shape<gingerbread>
sugar                   →  shape<T>                   →  shape<sugar>
```

The cutter never changes → only the dough. This is exactly what templates do: the algorithm structure stays fixed; the type parameter changes.

### Analogy: Blueprint and Buildings

A house blueprint describes a structure without specifying the exact materials. The same blueprint can produce a brick house, a wooden house, or a concrete house. The blueprint is the **template**; each constructed house is an **instantiation**.

```
Blueprint (template)    →  material = type parameter
Blueprint for house<T>  →  house<brick>, house<wood>, house<concrete>
```

### The Problem: Code Duplication Without Templates

Strong typing forces repetition when the same logic applies to different types:

```cpp
int max_int(int a, int b) {
    return (a > b) ? a : b;
}

double max_double(double a, double b) {
    return (a > b) ? a : b;
}

std::string max_string(const std::string& a, const std::string& b) {
    return (a > b) ? a : b;
}
```

Every overload is identical except the type. This violates DRY (Don't Repeat Yourself), multiplies maintenance costs, and spreads bugs across N copies. If we find a bug in the comparison logic, we must fix it N times.

### The Solution: A Single Template

```cpp
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}
```

### Numbered Steps of Template Processing

```
Step 1: Write the template blueprint with type parameter T
Step 2: Use the template with a concrete type (e.g., int)
Step 3: Compiler sees the call max_of(3, 7)
Step 4: Compiler deduces T = int from arguments
Step 5: Compiler generates int max_of(int, int) concretely
Step 6: Result is a regular function → same as hand-written
Step 7: Linker resolves calls to the generated function
```

### Pseudocode of Template Expansion

```
FUNCTION_TEMPLATE max_of<T>(a, b):
    IF a > b THEN RETURN a ELSE RETURN b

// When called with int arguments, compiler generates:
FUNCTION max_of_int(a: int, b: int) -> int:
    IF a > b THEN RETURN a ELSE RETURN b

// When called with double arguments, compiler generates:
FUNCTION max_of_double(a: double, b: double) -> double:
    IF a > b THEN RETURN a ELSE RETURN b
```

### Complexity Analysis of the Template Approach

| Approach | Lines of Code | Maintenance Cost | Runtime Overhead | Type Safety |
|----------|--------------|-----------------|------------------|-------------|
| Manual overloading | O(N) types × body | High → fix every copy | None | Full |
| Templates | O(1) | Low → fix once | None (zero-cost) | Full |
| Macros (#define) | O(1) | Medium → debug nightmare | None | None |
| void* + casts | O(1) | High | Cast overhead | Lost |

**Key insight:** Templates provide the same runtime performance as hand-written overloads (zero-cost abstraction) with the maintenance of a single definition.

## 7.2 Function Templates

### 7.2.1 Basic Syntax

A function template declaration begins with the keyword `template` followed by a comma-separated list of template parameters enclosed in angle brackets:

```cpp
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}
```

The template parameter `T` acts as a placeholder for a concrete type. The compiler replaces `T` with the actual type at the point of instantiation.

**Syntax breakdown:**

```
template  ← keyword indicating a template declaration
    <typename T>  ← template parameter list
        typename ← keyword indicating T is a type parameter
        T        ← the template parameter name
    T max_of(T a, T b)  ← function signature using T
        T        ← return type parameterized by T
        T a, T b ← parameter types parameterized by T
```

### 7.2.2 Type Deduction vs Explicit Specification

The compiler can deduce `T` from the function arguments, or you can specify it explicitly:

```cpp
#include <iostream>
#include <string>

template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Type deduction from arguments
    std::cout << max_of(3, 7) << "\n";           // T = int,    output: 7
    std::cout << max_of(3.14, 2.72) << "\n";     // T = double, output: 3.14

    // Explicit type specification
    std::cout << max_of<double>(3, 2.72) << "\n"; // T = double explicitly, output: 3

    // Mixed types require explicit specification
    // max_of(3, 2.72); // ERROR: conflicting deduction (int vs double)
    std::cout << max_of<double>(3, 2.72) << "\n"; // OK: explicit T = double

    // Works with user-defined types too
    std::string s1 = "apple", s2 = "orange";
    std::cout << max_of(s1, s2) << "\n";          // T = std::string, output: orange
}
```

**Output:**
```
7
3.14
3
3
orange
```

### 7.2.3 Template Instantiation Process → Detailed Dry Run

When the compiler encounters `max_of(3, 7)`, it performs the following steps:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    INSTANTIATION DRY RUN: max_of(3, 7)                          │
├───────┬──────────────────────────────────┬───────────────────────────────────────┤
│ Step  │ Action                           │ State                                 │
├───────┼──────────────────────────────────┼───────────────────────────────────────┤
│ 1     │ Parse call expression            │ max_of(3, 7)                          │
│ 2     │ Check argument types             │ 3: int, 7: int                        │
│ 3     │ Name lookup for max_of           │ Found template max_of<T>              │
│ 4     │ Deduce T from argument types     │ T = int (both args are int)           │
│ 5     │ Check template parameter count   │ 1 parameter, 1 provided ✓             │
│ 6     │ Substitute T → int in signature  │ int max_of(int a, int b)              │
│ 7     │ Check constraint (if any)        │ No concepts, unconditional ✓          │
│ 8     │ Substitute T → int in body       │ return (a > b) ? a : b;               │
│ 9     │ Type-check the body with T=int   │ int > int → bool, OK ✓               │
│ 10    │ Generate object code             │ Machine instructions emitted          │
│ 11    │ Store in object file             │ Symbol: int max_of(int, int)          │
│ 12    │ (Link time) Merge duplicates     │ COMDAT folding if multiple TUs        │
└───────┴──────────────────────────────────┴───────────────────────────────────────┘
```

### Dry Run: Multiple Instantiations

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│               INSTANTIATION DRY RUN: max_of with 3 types                        │
├──────────────┬─────────┬──────────┬──────────┬──────────┬───────────────────────┤
│ Call         │ T       │ Return   │ Body after substitution │ Code generated?    │
├──────────────┼─────────┼──────────┼─────────────────────────┼────────────────────┤
│ max_of(3,7)  │ int     │ int      │ (a > b) ? a : b         │ Yes → int version  │
│ max_of(3.14, │ double  │ double   │ (a > b) ? a : b         │ Yes → double vers. │
│  2.72)       │         │          │                         │                     │
│ max_of(s1,s2)│ string  │ string   │ (a > b) ? a : b         │ Yes → string vers. │
└──────────────┴─────────┴──────────┴──────────┬──────────────┴────────────────────┤
                                               │                                   │
                         Each call generates a SEPARATE function with SEPARATE    │
                         machine code. They share NO code at runtime.             │
                         However, all three functions are IDENTICAL in structure  │
                         at the source level.                                     │
                         ─────────────────────────────────────────────────────────│
                         Binary size impact: ~3× a single function                 │
                         Optimization potential: linker may deduplicate identical │
                         machine code if the types produce identical instructions │
                         (e.g., int and long on many platforms)                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Complexity Analysis of Template Instantiation

| Metric | Complexity | Explanation |
|--------|-----------|-------------|
| **Template definition** | O(1) | One definition serves N types |
| **Compile-time cost** | O(N × S) | N = number of types, S = size of template |
| **Runtime performance** | O(1) → optimal | Generated code = hand-written quality |
| **Binary size (code bloat)** | O(N) | Each type gets its own function |
| **Deduplication (linker)** | O(N) worst, often O(1) | COMDAT folding merges identical machine code |
| **Maintenance** | O(1) per fix | One definition to modify |

**Why binary bloat is usually acceptable:**
- Only types that are actually used generate code
- The linker deduplicates identical instantiations
- Code size increase is linear with the number of types, not exponential
- The tradeoff (one definition vs N overloads) is overwhelmingly positive

### 7.2.4 Function Template Overloading

Multiple function templates (or a template and a non-template function) can coexist for the same name. Overload resolution follows a strict priority:

1. **Exact match** → non-template function wins over template
2. **Template with exact deduction**
3. **Promotion/conversion**

```cpp
#include <iostream>
#include <cstring>

// Non-template: exact match for const char*
void max_of(const char* a, const char* b) {
    std::cout << "Non-template (C-string): "
              << (std::strcmp(a, b) > 0 ? a : b) << "\n";
}

// Template: generic version
template <typename T>
void max_of(T a, T b) {
    std::cout << "Template: " << (a > b ? a : b) << "\n";
}

int main() {
    max_of(3, 7);           // template (int)
    max_of("alpha", "beta"); // non-template (const char*) wins by priority rule 1
    max_of(3.14, 2.72);     // template (double)
}
```

**Output:**
```
Template: 7
Non-template (C-string): beta
Template: 3.14
```

**Why the non-template wins for `const char*`:** The non-template is an exact match. The template would deduce `T = const char*` and compare pointers (memory addresses), not string content. The non-template overload uses `strcmp` for lexicographic comparison → semantically correct.

### 7.2.5 Function Template with Multiple Type Parameters

```cpp
#include <iostream>
#include <typeinfo>

template <typename T, typename U>
auto product(T a, U b) -> decltype(a * b) {
    return a * b;
}

int main() {
    auto r1 = product(3, 4.5);        // T=int, U=double, returns double
    auto r2 = product(2.5, 3);        // T=double, U=int, returns double
    auto r3 = product<int, double>(3, 4);

    std::cout << r1 << " " << r2 << " " << r3 << "\n";  // 13.5 7.5 12
}
```

**Output:**
```
13.5 7.5 12
```

**Trailing return type (`-> decltype(a * b)`):** Required when the return type depends on the template parameters in a way that cannot be expressed before the parameter list. `auto` alone (C++14) also works:

```cpp
template <typename T, typename U>
auto product(T a, U b) {      // C++14: auto return type deduction
    return a * b;
}
```

### 7.2.6 Non-Type Template Parameters

Template parameters need not be types. Non-type parameters accept compile-time constant values:

```cpp
#include <iostream>
#include <array>

// Non-type parameter: size_t N is a compile-time constant
template <typename T, size_t N>
class FixedArray {
private:
    T data_[N];
public:
    constexpr size_t size() const { return N; }

    T& operator[](size_t i) {
        return data_[i];  // Bounds checking at compile time when i is constant
    }

    void fill(const T& value) {
        for (size_t i = 0; i < N; ++i) data_[i] = value;
    }
};

int main() {
    FixedArray<int, 5> arr;
    arr.fill(42);
    for (size_t i = 0; i < arr.size(); ++i)
        std::cout << arr[i] << " ";
    // Output: 42 42 42 42 42
}
```

**Allowed non-type parameter types (growing with each standard):**

| C++ Version | Allowed Types |
|-------------|--------------|
| C++98 | Integral types, enumerations, pointers, references |
| C++11 | nullptr_t |
| C++17 | auto (deduced non-type) |
| C++20 | Floating-point types, literal class types |

**Dry Run: FixedArray&lt;int, 5&gt; Instantiation**

```
┌──────────────────────────────────────────────────────────────────────────┐
│               INSTANTIATION DRY RUN: FixedArray<int, 5>                  │
├────────┬─────────────────────────────────┬───────────────────────────────┤
│ Step   │ Action                          │ Result                        │
├────────┼─────────────────────────────────┼───────────────────────────────┤
│ 1      │ Parse FixedArray<int, 5>        │ T = int, N = 5                │
│ 2      │ Substitute T → int in body      │ int data_[5];                 │
│ 3      │ Substitute N → 5 in body        │ size() returns 5              │
│ 4      │ Generate class layout           │ sizeof = 5 * sizeof(int) = 20 │
│ 5      │ Verify N > 0 (implicit)         │ 5 > 0 ✓                       │
│ 6      │ Instantiate constructor         │ FixedArray() → default init   │
│ 7      │ Instantiate size()              │ returns 5 (constexpr)         │
│ 8      │ Instantiate fill()              │ loops 5 times                 │
│ 9      │ Instantiate operator[]          │ bounds check? only if asked   │
└────────┴─────────────────────────────────┴───────────────────────────────┘
```

**Complexity Analysis:**
- **Memory:** sizeof(T) × N → deterministic and known at compile time
- **Access:** O(1) → direct indexing, same as raw array
- **Safety:** Array bounds checked at compile time for constant indices → zero-cost
- **Compare to `std::vector`:** `FixedArray` allocates on stack (no heap), has no dynamic resizing overhead, and N is part of the type → `FixedArray<int, 5>` and `FixedArray<int, 10>` are different types.

**Why N is part of the type:**

```cpp
FixedArray<int, 5> arr5;
FixedArray<int, 10> arr10;
// arr5 = arr10;  // ERROR: different types
// arr5 = arr10;  // Compiler error: no operator= from different type
```

This enables stronger type safety but prevents mixed-size assignments.

## 7.3 Class Templates

### 7.3.1 Basic Syntax

Class templates parameterize both data members and member functions:

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
    size_t size() const { return data_.size(); }

private:
    std::vector<T> data_;
};

// Usage:
Stack<int> int_stack;
int_stack.push(42);
Stack<std::string> str_stack;
str_stack.push("hello");
```

### 7.3.2 Member Functions Defined Outside the Class Body

When member functions are defined outside the class, the template parameter must be repeated and the class scope must be qualified:

```cpp
template <typename T>
class Stack {
public:
    void push(const T& value);
    void pop();
    const T& top() const;
    bool empty() const;
    size_t size() const;
private:
    std::vector<T> data_;
};

// Out-of-class definitions require full template syntax
template <typename T>
void Stack<T>::push(const T& value) {
    data_.push_back(value);
}

template <typename T>
void Stack<T>::pop() {
    if (!data_.empty()) data_.pop_back();
}

template <typename T>
const T& Stack<T>::top() const {
    return data_.back();
}

template <typename T>
bool Stack<T>::empty() const {
    return data_.empty();
}

template <typename T>
size_t Stack<T>::size() const {
    return data_.size();
}
```

**Why the `template <typename T>` prefix is required:** Each out-of-class definition is itself a template. The compiler needs to know that `Stack<T>` refers to a template (not a concrete class) and that `T` is a template parameter (not an existing type).

**Why `Stack<T>::` and not just `Stack::`:** Without `<T>`, the compiler would look for a concrete class named `Stack` (not a class template), which does not exist.

### 7.3.3 Class Template Instantiation → Detailed Dry Run

```cpp
int main() {
    Stack<int> int_stack;
    int_stack.push(42);

    Stack<std::string> str_stack;
    str_stack.push("hello");

    return 0;
}
```

```
┌────────────────────────────────────────────────────────────────────────────┐
│               INSTANTIATION DRY RUN: Stack<int>                           │
├────────┬──────────────────────────────────┬────────────────────────────────┤
│ Step   │ Action                           │ Result                         │
├────────┼──────────────────────────────────┼────────────────────────────────┤
│ 1      │ Parse Stack<int>                 │ T = int                        │
│ 2      │ Substitute int for T in body     │ std::vector<int> data_;        │
│ 3      │ Calculate class layout           │ sizeof(Stack<int>) resolved    │
│ 4      │ Constructor generated            │ Stack<int>::Stack()            │
│ 5      │ push(42) called                  │ push(const int&) needed        │
│ 6      │ push template instantiated       │ void push(const int&) code gen │
│ 7      │ Check push body validity         │ vector<int>::push_back(int) ✓  │
│ 8      │ empty(), size(), top()           │ NOT instantiated (lazy)        │
│        │ not called                       │ → no code generated            │
└────────┴──────────────────────────────────┴────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────────┐
│               INSTANTIATION DRY RUN: Stack<std::string>                   │
├────────┬──────────────────────────────────┬────────────────────────────────┤
│ Step   │ Action                           │ Result                         │
├────────┼──────────────────────────────────┼────────────────────────────────┤
│ 1      │ Parse Stack<std::string>         │ T = std::string                │
│ 2      │ Substitute string for T          │ std::vector<std::string> data_;│
│ 3      │ Layout                           │ sizeof(Stack<string>) resolved │
│ 4      │ push("hello") instantiated       │ void push(const string&) code  │
│ 5      │ copy semantics                   │ string copy constructor called │
│ 6      │ empty, size, top                 │ NOT instantiated               │
└────────┴──────────────────────────────────┴────────────────────────────────┘
```

**Key insight: Lazy instantiation.** The compiler only generates member functions that are actually used. If you never call `Stack<int>::top()`, no code is generated for it. This saves compile time and binary size.

**Complexity Analysis:**
- **push_back:** Amortized O(1) → `std::vector` grows geometrically
- **pop:** O(1) → simply decrements size
- **top:** O(1) → direct reference to back element
- **Space:** O(N) where N is number of elements pushed
- **Compile-time cost:** Proportional to number of member functions actually used

### 7.3.4 Class Template with Non-Type Parameters → Ring Buffer

```cpp
#include <iostream>
#include <cstddef>

template <typename T, std::size_t Capacity>
class RingBuffer {
public:
    RingBuffer() : head_(0), tail_(0), full_(false) {}

    bool push(const T& value) {
        if (full_) return false;       // buffer full
        data_[tail_] = value;
        tail_ = (tail_ + 1) % Capacity;
        full_ = (tail_ == head_);
        return true;
    }

    bool pop(T& out) {
        if (empty()) return false;     // buffer empty
        out = data_[head_];
        head_ = (head_ + 1) % Capacity;
        full_ = false;
        return true;
    }

    bool empty() const { return !full_ && (head_ == tail_); }
    bool full()  const { return full_; }
    std::size_t capacity() const { return Capacity; }

private:
    T data_[Capacity];
    std::size_t head_, tail_;
    bool full_;
};

int main() {
    RingBuffer<int, 3> buf;
    buf.push(10);
    buf.push(20);
    buf.push(30);

    std::cout << "Full: " << buf.full() << "\n";    // 1 (true)
    std::cout << "Push more: " << buf.push(40) << "\n"; // 0 (false, full)

    int val;
    buf.pop(val);
    std::cout << "Popped: " << val << "\n";          // 10
    buf.push(40);
    std::cout << "Push 40: " << buf.push(40) << "\n"; // 1 (now space)

    return 0;
}
```

**Output:**
```
Full: 1
Push more: 0
Popped: 10
Push 40: 1
```

### 7.3.5 Template Template Parameters

A template template parameter is a template that accepts another template as an argument. This enables writing code that works with any container type:

```cpp
#include <iostream>
#include <vector>
#include <deque>
#include <list>
#include <memory>

// Template template parameter: Container is a template expecting <T, Allocator>
template <typename T,
          template <typename, typename> class Container = std::vector>
class Adapter {
public:
    void push(const T& val) { data_.push_back(val); }
    void print() const {
        for (const auto& v : data_) std::cout << v << " ";
        std::cout << "\n";
    }
private:
    Container<T, std::allocator<T>> data_;
};

int main() {
    Adapter<int, std::vector> v_adapter;
    v_adapter.push(1); v_adapter.push(2); v_adapter.push(3);
    v_adapter.print();  // Output: 1 2 3

    Adapter<int, std::deque> d_adapter;
    d_adapter.push(10); d_adapter.push(20);
    d_adapter.print();  // Output: 10 20

    Adapter<int, std::list> l_adapter;
    l_adapter.push(100);
    l_adapter.print();  // Output: 100
}
```

**Output:**
```
1 2 3
10 20
100
```

**Syntax breakdown:**

```
template <typename T, template <typename, typename> class Container>
         ↑                                    ↑
       type param                      template template param
```

The template template parameter `Container` must match the signature of the expected template. `std::vector`, `std::deque`, and `std::list` all accept two template parameters (element type and allocator), so they match `template <typename, typename> class`.

**C++17 update:** You can use `typename` instead of `class` for template template parameters:

```cpp
template <typename T, template <typename, typename> typename Container>
class Adapter { /* ... */ };
```

**Complexity Analysis:**
- **Flexibility cost:** Compile-time only → no runtime cost
- **Binary size:** O(N × M) where N = types used, M = containers used
- **Maintenance:** One implementation works with any compatible container

**Real-world use:** `std::stack`, `std::queue`, and `std::priority_queue` in the STL accept a template template parameter for the underlying container:

```cpp
std::stack<int> s1;                         // deque<int> by default
std::stack<int, std::vector<int>> s2;       // vector-based stack
std::stack<int, std::list<int>> s3;         // list-based stack
```

### 7.3.6 Dependent Names and the `typename` Keyword

When a name in a template depends on a template parameter, the compiler cannot determine whether it names a type or a value until instantiation. You must disambiguate with `typename`:

```cpp
template <typename T>
class Example {
public:
    // T::value_type depends on T → could be a type or a static member
    // Without typename, compiler assumes it's a value (variable/function)
    using Type = typename T::value_type;  // typename required

    void process() {
        // If Nested is a type inside T, we need typename
        typename T::Nested* ptr;          // typename required: declares pointer
        // Without typename: multiplication T::Nested * ptr;
    }
};
```

**The Rule:** Use `typename` before any qualified name that depends on a template parameter and is intended to name a type.

**Failure example:**
```cpp
template <typename T>
void func() {
    T::value_type* p;  // ERROR: parsed as multiplication, not pointer declaration
    // typename T::value_type* p;  // CORRECT: declares pointer p
}
```

**Why this rule exists:** Before instantiation, the compiler does not know what `T::value_type` is. It could be:
- A nested type (`typedef int value_type`)
- A static data member (`static int value_type;`)
- A member function (`void value_type();`)

The C++ standard requires `typename` to resolve the ambiguity.

## 7.4 Template Specialization

### 7.4.1 Full (Explicit) Specialization → Deep Dive

Full specialization provides a completely different implementation for a specific template argument combination:

```cpp
#include <iostream>
#include <cstring>
#include <string>

// Primary template
template <typename T>
const char* describe(const T& value) {
    return "Unknown type";
}

// Full specialization for int
template <>
const char* describe<int>(const int& value) {
    return "Integer type";
}

// Full specialization for std::string
template <>
const char* describe<std::string>(const std::string& value) {
    return value.c_str();
}

int main() {
    std::cout << describe(42) << "\n";               // Integer type
    std::cout << describe(3.14) << "\n";             // Unknown type
    std::cout << describe(std::string("hello")) << "\n"; // hello
}
```

**Output:**
```
Integer type
Unknown type
hello
```

**Dry Run: Full Specialization Selection**

```
┌──────────────────────────────────────────────────────────────────────────┐
│            FULL SPECIALIZATION RESOLUTION DRY RUN                        │
├──────────────────────┬────────────────────────────────┬──────────────────┤
│ Call                 │ Candidates                     │ Result            │
├──────────────────────┼────────────────────────────────┼──────────────────┤
│ describe(42)         │ primary<T> with T=int          │ generic available │
│                      │ full spec for int              │ FULL match ✓     │
│                      │ Full spec wins                 │ "Integer type"   │
├──────────────────────┼────────────────────────────────┼──────────────────┤
│ describe(3.14)       │ primary<T> with T=double       │ only option      │
│                      │ (no spec for double)           │ "Unknown type"   │
├──────────────────────┼────────────────────────────────┼──────────────────┤
│ describe("hello")    │ primary<T> with T=const char*  │ primary used     │
│                      │ (no spec for const char*)      │ "Unknown type"   │
├──────────────────────┼────────────────────────────────┼──────────────────┤
│ describe(string)     │ primary<T> with T=string       │ generic available│
│                      │ full spec for string            │ FULL match ✓    │
│                      │ Full spec wins                 │ "hello"          │
└──────────────────────┴────────────────────────────────┴──────────────────┘
```

### 7.4.2 Partial Specialization

Partial specialization matches a subset of types rather than a single type. It is only allowed for class templates (and variable templates in C++14), NOT for function templates:

```cpp
#include <iostream>

// Primary template
template <typename T>
struct IsPointer {
    static constexpr bool value = false;
};

// Partial specialization for T* (any pointer type)
template <typename T>
struct IsPointer<T*> {
    static constexpr bool value = true;
};

// Partial specialization for const T* (pointer to const)
template <typename T>
struct IsPointer<const T*> {
    static constexpr bool value = true;
};

int main() {
    std::cout << "int:       " << IsPointer<int>::value << "\n";        // 0
    std::cout << "int*:      " << IsPointer<int*>::value << "\n";       // 1
    std::cout << "const int*:" << IsPointer<const int*>::value << "\n"; // 1
    std::cout << "int&:      " << IsPointer<int&>::value << "\n";       // 0
    std::cout << "int**:     " << IsPointer<int**>::value << "\n";      // 1 (via T**)
}
```

**Output:**
```
int:       0
int*:      1
const int*:1
int&:      0
int**:     1
```

**Dry Run: Partial Specialization Matching**

```
┌──────────────────────────────────────────────────────────────────────────┐
│             PARTIAL SPECIALIZATION MATCHING DRY RUN                     │
├──────────────────┬─────────┬──────────────┬──────────────────┬───────────┤
│ Type             │ Primary │ Partial<T*>   │ Partial<const T*>│ Selected  │
├──────────────────┼─────────┼──────────────┼──────────────────┼───────────┤
│ int              │ ✓       │ ✗             │ ✗                 │ Primary   │
│ int*             │ ✓       │ ✓ (T=int)    │ ✗                 │ Part: T*  │
│ const int*       │ ✓       │ ✗             │ ✓ (T=int)         │ Part: c T*│
│ int&             │ ✓       │ ✗             │ ✗                 │ Primary   │
│ int**            │ ✓       │ ✓ (T=int*)   │ ✗                 │ Part: T*  │
│ int***           │ ✓       │ ✓ (T=int**)  │ ✗                 │ Part: T*  │
│ vector<int>*     │ ✓       │ ✓ (T=vector) │ ✗                 │ Part: T*  │
│ const char*      │ ✓       │ ✗             │ ✓ (T=char)        │ Part: c T*│
└──────────────────┴─────────┴──────────────┴──────────────────┴───────────┘
```

**Why partial specialization is NOT allowed for function templates:**

Function templates support overloading, which subsumes partial specialization. Overload resolution already handles "more specialized" vs "less specialized" templates. Using overloading instead keeps the language simpler:

```cpp
// Instead of (ILLEGAL):
// template <typename T> void foo(T* ptr);         // partial spec of foo<T>

// Use overloading (LEGAL and preferred):
template <typename T> void foo(T value);    // base
template <typename T> void foo(T* ptr);     // overload → not a specialization
```

### 7.4.3 Explicit vs Partial vs Full Specialization → Comparison Table

| Aspect | Full (Explicit) Specialization | Partial Specialization | Explicit Instantiation |
|--------|-------------------------------|----------------------|----------------------|
| **Syntax** | `template <> struct C<int>` | `template <T> struct C<T*>` | `template struct C<int>;` |
| **Scope** | One specific type | A family of types | One specific type |
| **Allowed for** | Function & Class templates | Class templates only | Function & Class templates |
| **Generates** | New implementation | New implementation | Uses primary template |
| **Amount of code** | Complete reimplementation | Partial reimplementation | Forces compilation |
| **Overrides primary** | Yes (for that type) | Yes (for that family) | No (uses primary) |
| **Example** | `vector<bool>` | `is_pointer<T*>` | Template code in .cpp |
| **Use case** | Type-specific optimization | Category optimization | Hide definitions, reduce compile time |

### 7.4.4 Full Specialization of Class Templates → Example

```cpp
#include <iostream>
#include <vector>

// Primary template: generic storage
template <typename T>
class Storage {
public:
    explicit Storage(size_t size) : data_(size) {}
    T& get(size_t i) { return data_[i]; }
    size_t size() const { return data_.size(); }
private:
    std::vector<T> data_;
};

// Full specialization for bool: bit-packed storage
template <>
class Storage<bool> {
public:
    explicit Storage(size_t size) : data_(size / 8 + 1, 0) {}

    bool get(size_t i) const {
        return (data_[i / 8] >> (i % 8)) & 1;
    }

    void set(size_t i, bool value) {
        if (value)
            data_[i / 8] |= (1 << (i % 8));
        else
            data_[i / 8] &= ~(1 << (i % 8));
    }

    size_t size() const { return data_.size() * 8; }

private:
    std::vector<unsigned char> data_;
};

int main() {
    Storage<int> ints(10);
    ints.get(0) = 42;

    Storage<bool> bits(80);  // 80 bits = 10 bytes storage
    bits.set(0, true);
    bits.set(7, true);
    std::cout << "Bit 0: " << bits.get(0) << "\n";  // 1
    std::cout << "Bit 7: " << bits.get(7) << "\n";  // 1
    std::cout << "Bit 1: " << bits.get(1) << "\n";  // 0
}
```

**Output:**
```
Bit 0: 1
Bit 7: 1
Bit 1: 0
```

### 7.4.5 When to Specialize vs Overload (Function Templates)

**Rule of thumb:** For function templates, prefer overloading over specialization.

```cpp
#include <iostream>
#include <cstring>

// Primary template
template <typename T>
void print(const T& val) {
    std::cout << "Generic: " << val << "\n";
}

// Overload → works for const char*
void print(const char* val) {
    std::cout << "C-string: " << val << "\n";
}

// Specialization → works but fragile
template <>
void print<int>(const int& val) {
    std::cout << "Specialized int: " << val << "\n";
}

int main() {
    print(42);         // Specialized int: 42
    print(3.14);       // Generic: 3.14
    print("hello");    // C-string: hello (overload wins)
}
```

**Why overloading beats specialization:** Overload resolution is more intuitive. Specialization interacts badly with overloading → if new overloads are added, specializations may be silently ignored. Overloads participate in name lookup; specializations do not.

### 7.4.6 Real-World Specialization: `std::vector<bool>`

The most famous specialization in the C++ standard library:

```cpp
namespace std {
    // Primary template: vector<T>
    template <typename T, typename Alloc = allocator<T>>
    class vector {
        T* data_;
        size_t size_, capacity_;
    public:
        T& operator[](size_t i) { return data_[i]; }
        // ...
    };

    // Full specialization: vector<bool>
    template <>
    class vector<bool> {
        unsigned char* bits_;  // Stores 8 bits per byte
        size_t size_, capacity_;
    public:
        class reference {     // Proxy for bit access
            unsigned char* byte_ptr_;
            int bit_index_;
        public:
            reference& operator=(bool val) { /* set bit */ return *this; }
            operator bool() const { /* read bit */ return result; }
        };

        reference operator[](size_t i);  // Returns proxy, not bool&
        // ...
    };
}
```

`vector<bool>` packs 8 booleans into each byte, saving 87.5% memory. But `operator[]` returns a proxy object (not a `bool&`) because individual bits are not addressable → a notorious design tradeoff.

## 7.5 Variadic Templates (C++11)

### 7.5.1 Basic Syntax

Variadic templates accept an arbitrary number of template parameters:

```cpp
#include <iostream>

// Template parameter pack: typename... Args
// Function parameter pack: Args... args
// Pack expansion: args...

template <typename... Args>
void count_args(Args... args) {
    // sizeof... gets the number of elements in the pack
    std::cout << sizeof...(Args) << " type parameters\n";
    std::cout << sizeof...(args) << " function arguments\n";
}

int main() {
    count_args(1, 2, 3);        // 3 type parameters, 3 arguments
    count_args(1, 2.0, "hi");   // 3 type parameters, 3 arguments
    count_args();               // 0 type parameters, 0 arguments
}
```

**Output:**
```
3 type parameters
3 function arguments
3 type parameters
3 function arguments
0 type parameters
0 function arguments
```

### 7.5.2 Recursive Variadic Approach (C++11/14)

Before fold expressions (C++17), variadic templates required recursion:

```cpp
#include <iostream>

// Base case → no arguments: terminates recursion
void print_all() {
    std::cout << "\n";
}

// Recursive case: process first argument, recurse on rest
template <typename First, typename... Rest>
void print_all(const First& first, const Rest&... rest) {
    std::cout << first << " ";
    print_all(rest...);   // recursive call with remaining args
}

int main() {
    print_all(1, 3.14, "hello", 'c');
    // Output: 1 3.14 hello c
}
```

**Dry Run: `print_all(1, 3.14, "hello", 'c')`**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            VARIADIC RECURSION DRY RUN                                        │
├────────────┬────────────────────────────┬────────┬──────────┬───────────────┤
│ Call Level │ Args Pack                  │ First  │ Output   │ Recurse With  │
├────────────┼────────────────────────────┼────────┼──────────┼───────────────┤
│ 1          │ (1, 3.14, "hello", 'c')    │ 1      │ "1 "     │ (3.14,"hello",'c') │
│ 2          │ (3.14, "hello", 'c')       │ 3.14   │ "3.14 "  │ ("hello", 'c')     │
│ 3          │ ("hello", 'c')             │ "hello"│ "hello " │ ('c')              │
│ 4          │ ('c')                      │ 'c'    │ "c "     │ ()                 │
│ 5          │ ()                         │ →      │ "\n"     │ → base case        │
└────────────┴────────────────────────────┴────────┴──────────┴──────────────────────┘
```

**Instantiation tree for `print_all(1, 3.14, "hello", 'c')`:**

```
print_all(int, double, const char*, char)           → uses cout << int
  └─ print_all(double, const char*, char)           → uses cout << double
       └─ print_all(const char*, char)               → uses cout << const char*
            └─ print_all(char)                       → uses cout << char
                 └─ print_all()                      → base case
```

Each level is a separate function template instantiation with a different signature. The compiler generates 5 distinct functions.

**Complexity Analysis:**
- **Compile-time depth:** O(N) → one template instantiation per argument
- **Runtime depth:** O(N) → one function call per argument (tail recursion not guaranteed → there is work after the recursive call: printing the newline when the base case returns)
- **Code bloat:** O(N) → N distinct function instantiations
- **Alternative (fold expressions):** O(1) instantiation → vastly better

### 7.5.3 Fold Expressions (C++17)

Fold expressions reduce variadic processing to a single operator application, eliminating recursion and its compile-time cost:

```cpp
#include <iostream>

// Unary right fold: (... + args) expands to (a + (b + (c + ...)))
template <typename... Args>
auto sum_unary_right(Args... args) {
    return (... + args);  // empty pack is ill-formed for unary fold
}

// Binary right fold: (0 + ... + args) expands to (0 + (a + (b + ...)))
template <typename... Args>
auto sum_binary_right(Args... args) {
    return (0 + ... + args);  // empty pack returns 0 (identity element)
}

// Comma fold: printable any type
template <typename... Args>
void print_all_fold(const Args&... args) {
    ((std::cout << args << " "), ...);  // comma operator fold
    std::cout << "\n";
}

// Binary left fold for AND
template <typename... Args>
bool all_true(Args... args) {
    return (... && args);  // left fold: ((a && b) && c) ...
}

int main() {
    std::cout << sum_unary_right(1, 2, 3, 4, 5) << "\n";      // 15
    std::cout << sum_binary_right() << "\n";                   // 0 (empty pack OK)
    std::cout << sum_binary_right(1, 2, 3) << "\n";            // 6
    print_all_fold(1, 3.14, "hello", 'c');                     // 1 3.14 hello c
    std::cout << all_true(true, true, true) << "\n";            // 1
    std::cout << all_true(true, false, true) << "\n";           // 0
}
```

**Output:**
```
15
0
6
1 3.14 hello c
1
0
```

**Fold Expression Expansion Examples:**

| Expression | Expansion (4 args: a, b, c, d) |
|-----------|-------------------------------|
| `(... + args)` | `((a + b) + c) + d` |
| `(args + ...)` | `a + (b + (c + d))` |
| `(0 + ... + args)` | `(((0 + a) + b) + c) + d` |
| `(args + ... + 0)` | `a + (b + (c + (d + 0)))` |
| `(... && args)` | `((a && b) && c) && d` |
| `((cout << args), ...)` | `(cout << a), (cout << b), (cout << c), (cout << d)` |

**All foldable operators:**
`+` `-` `*` `/` `%` `^` `&` `|` `=` `<` `>` `<<` `>>` `+=` `-=` `*=` `/=` `%=` `^=` `&=` `|=` `<<=` `>>=` `==` `!=` `<=` `>=` `&&` `||` `,` `.*` `->*`

### 7.5.4 Real-World Application: `std::tuple` Implementation

The `std::tuple` type uses variadic templates heavily:

```cpp
#include <iostream>
#include <string>

// Forward declaration of Tuple
template <typename... Types>
class Tuple;

// Base case: empty tuple
template <>
class Tuple<> {};

// Recursive case: Head + Tail (inherits from Tuple<Tail...>)
template <typename Head, typename... Tail>
class Tuple<Head, Tail...> : private Tuple<Tail...> {
public:
    Tuple() = default;
    Tuple(const Head& head, const Tail&... tail)
        : Tuple<Tail...>(tail...), head_(head) {}

    Head& head() { return head_; }
    const Head& head() const { return head_; }

    Tuple<Tail...>& tail() { return *this; }
    const Tuple<Tail...>& tail() const { return *this; }

private:
    Head head_;
};

// Helper: recursive get by index (specialization terminates at 0)
template <size_t Index, typename Head, typename... Tail>
struct GetHelper {
    static auto& get(Tuple<Head, Tail...>& t) {
        return GetHelper<Index - 1, Tail...>::get(t.tail());
    }
    static const auto& get(const Tuple<Head, Tail...>& t) {
        return GetHelper<Index - 1, Tail...>::get(t.tail());
    }
};

template <typename Head, typename... Tail>
struct GetHelper<0, Head, Tail...> {
    static Head& get(Tuple<Head, Tail...>& t) {
        return t.head();
    }
    static const Head& get(const Tuple<Head, Tail...>& t) {
        return t.head();
    }
};

template <size_t Index, typename... Types>
auto& get(Tuple<Types...>& t) {
    return GetHelper<Index, Types...>::get(t);
}

int main() {
    Tuple<int, double, std::string> t(42, 3.14, "hello");
    std::cout << "0: " << get<0>(t) << "\n";  // 42
    std::cout << "1: " << get<1>(t) << "\n";  // 3.14
    std::cout << "2: " << get<2>(t) << "\n";  // hello

    get<0>(t) = 100;
    std::cout << "Modified 0: " << get<0>(t) << "\n";  // 100
}
```

**Output:**
```
0: 42
1: 3.14
2: hello
Modified 0: 100
```

**Memory layout of Tuple&lt;int, double, string&gt;:**

```
┌─────────────────────────────────────────────┐
│ Tuple<int, double, string>                   │
│ ├── int head_                               │
│ └── Tuple<double, string> (base)            │
│      ├── double head_                       │
│      └── Tuple<string> (base)               │
│           ├── string head_                  │
│           └── Tuple<> (empty base)          │
└─────────────────────────────────────────────┘
```

This is a classic **recursive inheritance** pattern. The `get<2>` call resolves via:

```
get<2>(t) → GetHelper<2, int, double, string>::get(t)
          → GetHelper<1, double, string>::get(t.tail())
          → GetHelper<0, string>::get(t.tail().tail())
          → t.tail().tail().head()
          → the string member
```

## 7.6 SFINAE → Substitution Failure Is Not An Error

### 7.6.1 Core Principle

SFINAE is a C++ rule: when the compiler substitutes template arguments into a function template and the resulting type or expression is invalid, the compiler silently removes that candidate from overload resolution rather than emitting a compilation error.

```
                      Overload Resolution
                              │
                    ┌─────────┴──────────┐
                    │                    │
              Substitution Succeeds   Substitution Fails
                    │                    │
            Candidate Included     Candidate Removed (SFINAE)
                    │                    │
              Other candidates       Other candidates
              still considered       still considered
                    │                    │
              Only if ALL fail →     Only if ALL fail →
              Compilation Error     Compilation Error
```

**Key rule:** SFINAE applies ONLY to the **immediate context** of a function template declaration (template parameters, function parameter types, return type). Errors in the function body are NOT SFINAE → they are hard errors.

### 7.6.2 `std::enable_if` → The Classic SFINAE Tool

```cpp
#include <iostream>
#include <type_traits>

// Enabled only for integral types
template <typename T>
typename std::enable_if<std::is_integral<T>::value, bool>::type
is_odd(T value) {
    return value % 2 != 0;
}

// Enabled only for floating-point types
template <typename T>
typename std::enable_if<std::is_floating_point<T>::value, bool>::type
is_odd(T value) {
    int truncated = static_cast<int>(value);
    return truncated % 2 != 0;
}

int main() {
    std::cout << is_odd(5) << "\n";       // uses integral version: 1
    std::cout << is_odd(4.0) << "\n";     // uses floating-point version: 0
    std::cout << is_odd(7.3) << "\n";     // uses floating-point version: 1
    // is_odd("hello"); // ERROR: no matching function (both removed by SFINAE)
}
```

**Output:**
```
1
0
1
```

**How `enable_if` works (simplified implementation):**

```cpp
template <bool Condition, typename T = void>
struct enable_if {};                      // Primary: no ::type when Condition is false

template <typename T>
struct enable_if<true, T> {               // Partial specialization: ::type exists when true
    using type = T;
};

// C++14 alias template:
template <bool B, typename T = void>
using enable_if_t = typename enable_if<B, T>::type;
```

**Dry Run: `is_odd(5)`**

```
┌──────────────────────────────────────────────────────────────────────────┐
│                  SFINAE RESOLUTION DRY RUN                              │
├──────────────┬──────────────────────────┬───────────────────────────────┤
│ Step         │ Template 1 (integral)     │ Template 2 (floating)        │
├──────────────┼──────────────────────────┼───────────────────────────────┤
│ 1. T deduced │ T = int                  │ T = int (also considered)     │
│ 2. condition │ is_integral<int> = true  │ is_floating_point<int> = false│
│ 3. enable_if │ enable_if<true, bool>    │ enable_if<false, bool>        │
│ 4. ::type    │ ::type = bool ✓          │ ::type does not EXIST ✗       │
│ 5. SFINAE?   │ No → valid substitution  │ YES → removed from overload   │
│              │                          │ set                           │
│ 6. RESULT    │ Template 1 selected      │ →                             │
└──────────────┴──────────────────────────┴───────────────────────────────┘
```

**Dry Run: `is_odd("hello")`**

```
┌──────────────┬──────────────────────────┬───────────────────────────────┐
│ Step         │ Template 1 (integral)     │ Template 2 (floating)        │
├──────────────┼──────────────────────────┼───────────────────────────────┤
│ 1. T deduced │ T = const char*          │ T = const char*               │
│ 2. condition │ is_integral<const char*> │ is_floating_point<const char*>│
│              │ = false                  │ = false                       │
│ 3. enable_if │ enable_if<false, bool>   │ enable_if<false, bool>        │
│ 4. ::type    │ ::type does not EXIST ✗  │ ::type does not EXIST ✗       │
│ 5. SFINAE?   │ YES → removed            │ YES → removed                 │
│ 6. RESULT    │ No viable candidates     │ → compilation ERROR           │
└──────────────┴──────────────────────────┴───────────────────────────────┘
```

### 7.6.3 `void_t` Detection Idiom

A powerful SFINAE pattern for detecting whether a type has a specific member:

```cpp
#include <iostream>
#include <vector>
#include <type_traits>
#include <string>
#include <utility>

// void_t maps any type to void → used to trigger SFINAE
template <typename...>
using void_t = void;

// Primary template: assumes no size() member
template <typename T, typename = void>
struct has_size : std::false_type {};

// Partial specialization: enabled only if T::size() is valid
template <typename T>
struct has_size<T, void_t<decltype(std::declval<T>().size())>>
    : std::true_type {};

// C++17 variable template
template <typename T>
inline constexpr bool has_size_v = has_size<T>::value;

struct MyType {
    int size() const { return 0; }
};

struct OtherType {
    int length() const { return 0; }
};

int main() {
    std::cout << "vector<int>:    " << has_size_v<std::vector<int>> << "\n";   // 1
    std::cout << "string:         " << has_size_v<std::string> << "\n";        // 1
    std::cout << "int:            " << has_size_v<int> << "\n";                // 0
    std::cout << "double:         " << has_size_v<double> << "\n";             // 0
    std::cout << "MyType:         " << has_size_v<MyType> << "\n";             // 1
    std::cout << "OtherType:      " << has_size_v<OtherType> << "\n";          // 0
}
```

**Output:**
```
vector<int>:    1
string:         1
int:            0
double:         0
MyType:         1
OtherType:      0
```

**Step-by-step SFINAE resolution for `has_size<int>`:**

```
  Step 1: has_size<int> → no second argument, defaults to void
          → Evaluate primary template: has_size<int, void>
          → Inherits std::false_type

  Step 2: Consider partial specialization:
          has_size<int, void_t<decltype(std::declval<int>().size())>>
          → Substitute T = int into the partial spec expression:
          → void_t<decltype( int().size() )>
          → int().size() is INVALID (int has no size() member)
          → decltype fails → substitution failure
          → SFINAE removes this candidate

  Step 3: Only primary template remains: value = false
```

**Step-by-step for `has_size<std::vector<int>>`:**

```
  Step 1: Primary: has_size<vector<int>, void> → false_type

  Step 2: Partial specialisation:
          has_size<vector<int>, void_t<decltype(declval<vector<int>>().size())>>
          → vector<int>().size() is VALID (returns size_t)
          → decltype(size_t) = size_t
          → void_t<size_t> = void
          → Matches: has_size<vector<int>, void>

  Step 3: Partial specialization is more specialized than primary → selected
          → value = true
```

**`void_t` explanation:** `void_t` converts any type(s) to `void`. Its purpose is to be used as a default template argument that is replaced by the SFINAE-checked expression. If the expression is valid, `void_t<...>` = `void` = the default, so the specialization matches. If invalid, substitution fails and SFINAE removes the specialization.

### 7.6.4 `if constexpr` → The C++17 Alternative

For many SFINAE use cases, `if constexpr` provides a cleaner alternative:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
auto half(T value) {
    if constexpr (std::is_integral_v<T>) {
        return value / 2;              // integer division: 5/2 = 2
    } else if constexpr (std::is_floating_point_v<T>) {
        return value / 2.0;            // float division: 5.0/2 = 2.5
    } else {
        // This branch is DISCARDED at compile time, but must still compile
        static_assert(std::is_same_v<T, void>, "Unsupported type for half");
    }
}

int main() {
    std::cout << half(5) << "\n";          // 2
    std::cout << half(5.0) << "\n";        // 2.5
    // half("hello");                      // static_assert fires
}
```

**Output:**
```
2
2.5
```

**`if constexpr` vs SFINAE → Comparison:**

| Aspect | SFINAE (enable_if) | if constexpr |
|--------|-------------------|--------------|
| **Readability** | Poor → nested template syntax | Excellent → natural control flow |
| **Error messages** | Inscrutable → pages of template backtrace | Clean → points to failing branch |
| **When available** | C++98/11 | C++17 |
| **Can disable return types** | Yes (via ::type) | No (function must compile) |
| **Multiple overloads** | Yes → each SFINAE guard = separate function | Single function with branches |
| **Debugging** | Extremely hard → silent candidate removal | Straightforward → debugger steps through |
| **Type-level detection** | Yes (void_t idiom) | No (cannot make types disappear) |

### 7.6.5 SFINAE vs Concepts (C++20)

Concepts are the modern replacement for most SFINAE use cases:

```cpp
// C++20 Concepts approach
#include <iostream>
#include <type_traits>
#include <concepts>

template <typename T>
concept Integral = std::is_integral_v<T>;

template <typename T>
concept FloatingPoint = std::is_floating_point_v<T>;

template <Integral T>
T half(T value) {
    return value / 2;
}

template <FloatingPoint T>
T half(T value) {
    return value / 2.0;
}

int main() {
    std::cout << half(5) << "\n";     // 2
    std::cout << half(5.0) << "\n";   // 2.5
}
```

**Concepts vs SFINAE → Comparison:**

| Aspect | Concepts (C++20) | SFINAE (C++11/17) |
|--------|-----------------|-------------------|
| **Syntax** | `template <Integral T>` | `template <typename T, enable_if_t<...>>` |
| **Error messages** | Clear → "T does not satisfy Integral" | Cryptic → template backtrace |
| **Readability** | High → self-documenting | Low → nested boilerplate |
| **Type constraints** | Direct → concepts are named requirements | Indirect → enable_if on return/param |
| **Overload resolution** | Constraint-based ordering | Enable_if boolean trick |
| **Composability** | `concept C = A && B` → natural | Manual template nesting |
| **Availability** | C++20 only | C++98 onward |

## 7.7 Template Compilation Model

### 7.7.1 The Inclusion Model

Templates must be visible at the point of instantiation. The compiler needs the full template definition to generate code for each concrete type. This is called the **inclusion model** or **header-only model**:

```cpp
// my_template.h → header file
#ifndef MY_TEMPLATE_H
#define MY_TEMPLATE_H

template <typename T>
class MyTemplate {
public:
    T get() const { return value_; }
    void set(const T& v) { value_ = v; }
private:
    T value_;
};

#endif
```

```
┌─────────────┐         ┌──────────────┐         ┌───────────┐
│ my_main.cpp │ #include│my_template.h │         │ Compiler  │
│ (T = int)   │────────→│ template def │────────→│ generates │
│             │         │              │         │ MyTemplate│
└─────────────┘         └──────────────┘         │ <int> code│
                                                 └───────────┘
```

**Why templates are defined in headers:**
- The compiler needs the full definition to instantiate
- Separate .cpp with template definition cannot be linked (no code generated until instantiation)
- Each translation unit that uses the template gets a copy of the definition

### 7.7.2 The ODR and Multiple Definitions

The One Definition Rule (ODR) allows multiple identical definitions of inline functions and templates across translation units:

```cpp
// a.cpp
#include "my_template.h"
void func_a() {
    MyTemplate<int> obj;    // a.cpp generates MyTemplate<int> code
}

// b.cpp
#include "my_template.h"
void func_b() {
    MyTemplate<int> obj;    // b.cpp also generates MyTemplate<int> code
}
```

**How duplicate instantiations are handled:**

```
┌──────────┐    ┌───────────────────────┐
│ a.cpp    │    │ MyTemplate<int> code  │──┐
│ b.cpp    │    │ MyTemplate<int> code  │──┤
│ c.cpp    │    │ (no MyTemplate use)   │  │
└──────────┘    └───────────────────────┘  │
                                           │  ┌──────────┐
                                           ├──→│  Linker  │──→ One copy retained
                                           │  └──────────┘
                                           │
                                           │  Other copies discarded
```

The linker deduplicates identical template instantiations via:
- **COMDAT sections** (Windows/Visual C++)
- **linkonce sections** (GCC/Clang)

This is why templates do NOT increase binary size proportionally to the number of translation units.

### 7.7.3 Explicit Instantiation → Hiding Template Definitions

You can keep template definitions in .cpp files by explicitly instantiating the types you need:

```cpp
// my_template.cpp → contains both declaration and definition
template <typename T>
class MyTemplate {
public:
    T get() const { return value_; }
    void set(const T& v) { value_ = v; }
private:
    T value_;
};

// Explicit instantiations → only these types will be available for linking
template class MyTemplate<int>;
template class MyTemplate<double>;

// my_template.h → just the declaration
template <typename T>
class MyTemplate {
public:
    T get() const;
    void set(const T& v);
private:
    T value_;
};
```

**Usage:**
```cpp
#include "my_template.h"

int main() {
    MyTemplate<int> obj;    // OK → linked to explicit instantiation in .cpp
    obj.set(42);

    // MyTemplate<char> obj2;  // LINKER ERROR → never explicitly instantiated
    return 0;
}
```

**When to use explicit instantiation:**
1. **Library code** that only needs to work with a known set of types
2. **Reducing compile time** → precompile template instantiations for common types
3. **Hiding implementation** → distribute headers with declarations only
4. **Controlling binary size** → prevent template bloat from user-defined types

### 7.7.4 The `export` Keyword (Historical)

C++98 introduced `export` to allow template definitions in separate files. It was removed in C++11 because compilers universally failed to implement it correctly. Only one compiler (Comeau C++) ever shipped a working implementation.

```cpp
// Historical curiosity → never use this
export template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}
```

**Lesson:** The inclusion model is the only practical compilation model for templates. Always define templates in headers.

### 7.7.5 Template Compilation Model → Comparison Table

| Aspect | Inclusion Model | Explicit Instantiation | Separate Model (export) |
|--------|----------------|----------------------|------------------------|
| **Definition location** | Header file | .cpp file | Separate file |
| **Compile time** | Higher (each TU re-parses) | Lower (precompiled) | Lower |
| **Binary size** | Potentially larger (duplicates) | Controlled | Controlled |
| **Flexibility** | Maximum (any type) | Limited (explicit types only) | Limited |
| **Implementation hiding** | No (full source visible) | Yes | Yes |
| **Status** | Universal standard | Used for library stability | Removed from standard |

## 7.8 `typename` vs `class` → Detailed Comparison

In template parameter declarations, `typename` and `class` are interchangeable:

```cpp
template <typename T> void func(T);    // ✓
template <class T> void func(T);       // ✓ → identical meaning
```

### The Historical Distinction

When templates were first introduced to C++, only `class` was available:

```cpp
template <class T> void func(T);       // Original C++ syntax (1990s)
```

Later, the committee recognized that template parameters need not be class types → they can be `int`, `double`, `enum`, or any type. The `typename` keyword was added (in C++98 itself, as part of the standard) to reflect this more accurately.

### The Practical Difference

**There is none → for template parameter declarations.** Both declare a type parameter:

```cpp
template <class T>     // T is ANY type (int, double, class, struct, union, etc.)
template <typename T>  // T is ANY type → identical meaning
```

### When `typename` Is Mandatory

`typename` has a crucial SECOND use that `class` cannot replace: disambiguating dependent names:

```cpp
template <typename T>
void func() {
    typename T::iterator it;   // "iterator is a type" → typename REQUIRED
    // T::iterator* it;        // Without typename: parsed as multiplication

    typename std::vector<T>::const_iterator cit; // typename required (dependent)
}

template <class T>
void func2() {
    typename T::iterator it;   // STILL typename, NOT class
    // class T::iterator it;   // ERROR: 'class' cannot disambiguate here
}
```

**Rule:** When accessing a nested type that depends on a template parameter, prefix with `typename` regardless of whether you used `typename` or `class` in the template parameter list.

### Comparison Table

| Purpose | `typename` | `class` |
|---------|-----------|---------|
| Template type parameter | ✓ `template <typename T>` | ✓ `template <class T>` |
| Disambiguate dependent names | ✓ `typename T::type` | ✗ (not allowed) |
| Template template param (pre-C++17) | ✗ | ✓ `template<typename> class Cont` |
| Template template param (C++17+) | ✓ | ✓ |
| Self-documenting that T can be any type | ✓ | ✗ (misleading name) |

### Recommendation

Modern style guides (C++ Core Guidelines, Google Style, LLVM) prefer `typename` for most cases because it accurately describes what is allowed (any type). Reserve `class` only when:
- The parameter is expected to be a user-defined class type (as documentation hint)
- Working with template template parameters in pre-C++17 code

## 7.9 Function Template vs Class Template → Comprehensive Comparison

| Aspect | Function Template | Class Template |
|--------|-------------------|----------------|
| **Syntax** | `template <T> T max(T a, T b)` | `template <T> class Stack { ... };` |
| **Instantiation trigger** | Called with arguments | Object declaration |
| **Type deduction** | Yes → T deduced from arguments | No → T must be explicitly specified |
| **Lazy instantiation** | Whole function body (all or nothing) | Per-member (only used members) |
| **Partial specialization** | NOT allowed (use overloading) | Allowed |
| **Template template params** | Allowed | Allowed |
| **Default arguments** | `template <T = int>` (C++11) | `template <T = int>` |
| **Non-type parameters** | `template <typename T, int N>` | `template <typename T, int N>` |
| **State** | Stateless | Can hold state (data members) |
| **Metaprogramming** | Limited (no partial spec) | Primary vehicle for TMP |
| **Example in STL** | `std::sort`, `std::find_if` | `std::vector`, `std::array` |
| **When to use** | Algorithms operating on types | Data structures holding types |
| **Specialization** | Only full (avoid → use overload instead) | Full and partial |

## 7.10 Applications in Real Systems

### 7.10.1 STL Containers → Template Architecture

Every STL container is a class template. The container adaptors use template template parameters:

```cpp
namespace std {
    // Container: class template
    template <typename T, typename Alloc = allocator<T>>
    class vector { /* ... */ };

    template <typename T, typename Alloc = allocator<T>>
    class list { /* ... */ };

    // Container adaptor: accepts template template parameter
    template <typename T, typename Container = deque<T>>
    class stack {
    public:
        void push(const T& val) { c.push_back(val); }
        void pop() { c.pop_back(); }
        T& top() { return c.back(); }
    private:
        Container c;
    };

    // Usage with different underlying containers
    stack<int> s1;                              // deque<int>
    stack<int, vector<int>> s2;                 // vector<int>
    stack<int, list<int>> s3;                   // list<int>
}
```

### 7.10.2 `std::enable_if` and Type Traits → Memcpy Optimization

```cpp
#include <iostream>
#include <type_traits>
#include <cstring>
#include <vector>
#include <string>

// For trivially copyable types: use memcpy (fast)
template <typename T>
std::enable_if_t<std::is_trivially_copyable_v<T>>
fast_copy(T* dest, const T* src, size_t count) {
    std::memcpy(dest, src, count * sizeof(T));
    std::cout << "memcpy path (" << count << " elements)\n";
}

// For non-trivially copyable types: element-wise copy
template <typename T>
std::enable_if_t<!std::is_trivially_copyable_v<T>>
fast_copy(T* dest, const T* src, size_t count) {
    for (size_t i = 0; i < count; ++i)
        dest[i] = src[i];
    std::cout << "element-wise path (" << count << " elements)\n";
}

struct Trivial {
    int x, y;
};

struct NonTrivial {
    NonTrivial& operator=(const NonTrivial& other) {
        x = other.x;
        return *this;
    }
    int x;
};

int main() {
    Trivial t1[100], t2[100];
    fast_copy(t1, t2, 100);  // memcpy path → trivially copyable

    NonTrivial nt1[100], nt2[100];
    fast_copy(nt1, nt2, 100);  // element-wise path
}
```

**Output:**
```
memcpy path (100 elements)
element-wise path (100 elements)
```

**Complexity Analysis:**
- **Trivially copyable path:** O(N) but memcpy uses SIMD/vectorized instructions → ~10-100x faster than element-wise for large arrays
- **Non-trivially copyable path:** O(N) → operator= per element, preserves deep-copy semantics
- **Selection cost:** Zero at runtime → entirely compile-time dispatch via SFINAE

### 7.10.3 CRTP → Curiously Recurring Template Pattern

CRTP is a technique where a class template accepts a derived class as its template argument, enabling static polymorphism:

```cpp
#include <iostream>

// Base template → accepts Derived as template parameter
template <typename Derived>
class Shape {
public:
    double area() const {
        return static_cast<const Derived*>(this)->area_impl();
    }

    std::string name() const {
        return static_cast<const Derived*>(this)->name_impl();
    }
};

// Derived class passes ITSELF as template argument to base
class Circle : public Shape<Circle> {
public:
    Circle(double radius) : radius_(radius) {}
    double area_impl() const { return 3.14159 * radius_ * radius_; }
    std::string name_impl() const { return "Circle"; }
private:
    double radius_;
};

class Rectangle : public Shape<Rectangle> {
public:
    Rectangle(double w, double h) : w_(w), h_(h) {}
    double area_impl() const { return w_ * h_; }
    std::string name_impl() const { return "Rectangle"; }
private:
    double w_, h_;
};

// Template function works with any Shape<T>
template <typename T>
void print_area(const Shape<T>& shape) {
    std::cout << shape.name() << " area: " << shape.area() << "\n";
}

int main() {
    Circle c(5.0);
    Rectangle r(4.0, 3.0);
    print_area(c);  // Circle  area: 78.5397
    print_area(r);  // Rectangle area: 12
}
```

**Output:**
```
Circle area: 78.5397
Rectangle area: 12
```

**CRTP vs Virtual Functions:**

| Aspect | CRTP (Static Polymorphism) | Virtual Functions (Dynamic Polymorphism) |
|--------|---------------------------|----------------------------------------|
| **Dispatch mechanism** | Compile-time via static_cast | Runtime via vtable |
| **Overhead** | Zero → inlined | vtable pointer + indirection |
| **Type erasure** | No → each T is a different type | Yes → base pointer to any derived |
| **Container friendly** | No → must know T at compile time | Yes → store base* in heterogenous container |
| **Code bloat** | O(N) instantiations (N types) | O(1) → single vtable |
| **Virtual destructor** | Not needed | Required |
| **Use case** | Templates, compile-time dispatch | Runtime polymorphism, plugins |

**Real-world CRTP examples:**
- `std::enable_shared_from_this<T>` → adds `shared_from_this()` to a class
- `std::iterator` (deprecated) → base for custom iterators
- Boost.Operators → generates operator overloads from minimal set
- Eigen → matrix expression templates for zero-cost abstractions
- Microsoft ATL/WTL → window class hierarchies

### 7.10.4 Policy-Based Design

Policy-based design uses template parameters to inject behavioral policies:

```cpp
#include <iostream>
#include <thread>
#include <mutex>

// Threading policies
struct SingleThread {
    void lock() {}
    void unlock() {}
};

struct MultiThread {
    void lock() { mtx_.lock(); }
    void unlock() { mtx_.unlock(); }
private:
    std::mutex mtx_;
};

// Logging policies
struct NoLogging {
    void log(const std::string&) {}
};

struct StdErrLogging {
    void log(const std::string& msg) {
        std::cerr << "[LOG] " << msg << "\n";
    }
};

// Thread-safe, optionally logging stack
template <typename T,
          typename Threading = SingleThread,
          typename Logging = NoLogging>
class PolicyStack : private Threading, private Logging {
public:
    void push(const T& value) {
        Threading::lock();
        Logging::log("push called");
        data_[++top_] = value;
        Threading::unlock();
    }

    T pop() {
        Threading::lock();
        Logging::log("pop called");
        T value = data_[top_--];
        Threading::unlock();
        return value;
    }

    bool empty() const { return top_ < 0; }

private:
    T data_[128];
    int top_ = -1;
};

int main() {
    // Single-threaded, no logging
    PolicyStack<int> s1;
    s1.push(42);

    // Single-threaded, with logging
    PolicyStack<int, SingleThread, StdErrLogging> s2;
    s2.push(100);

    // Multi-threaded, no logging
    PolicyStack<int, MultiThread> s3;
    s3.push(1);
}
```

**Output:**
```
[LOG] push called
```

**Complexity Analysis:**
- **Runtime overhead:** Zero → policy functions are inlined at compile time
- **Compile-time cost:** O(P × M) where P = policies, M = methods
- **Binary size:** Each policy combination creates a separate type → O(N × P)
- **Flexibility:** N types × M threading × L logging = N×M×L combinations with zero runtime cost

### 7.10.5 Type Traits Library

The `<type_traits>` header is built entirely with templates and specialization:

```cpp
#include <iostream>
#include <type_traits>

// How is_integral works (simplified):
// Primary template: not integral
template <typename T>
struct is_integral : std::false_type {};

// Full specializations for integral types
template <> struct is_integral<int> : std::true_type {};
template <> struct is_integral<long> : std::true_type {};
template <> struct is_integral<short> : std::true_type {};
template <> struct is_integral<char> : std::true_type {};
template <> struct is_integral<bool> : std::true_type {};
template <> struct is_integral<unsigned int> : std::true_type {};
template <> struct is_integral<long long> : std::true_type {};

// C++17 variable template
template <typename T>
inline constexpr bool is_integral_v = is_integral<T>::value;

// C++20 concept using type trait
template <typename T>
concept Integral = is_integral_v<T>;

template <Integral T>
T next(T value) { return value + 1; }

int main() {
    static_assert(is_integral_v<int>);
    static_assert(!is_integral_v<double>);

    std::cout << next(5) << "\n";    // 6
    // std::cout << next(5.0);       // ERROR: double does not satisfy Integral
}
```

### 7.10.6 `std::enable_shared_from_this` → CRTP in the Standard Library

```cpp
#include <iostream>
#include <memory>

// CRTP base: Widget inherits from enable_shared_from_this<Widget>
class Widget : public std::enable_shared_from_this<Widget> {
public:
    void process() {
        // Get a shared_ptr to this without creating a second reference count
        auto shared = shared_from_this();
        std::cout << "Processing widget, use_count: "
                  << shared.use_count() << "\n";
    }
};

int main() {
    auto w = std::make_shared<Widget>();
    w->process();  // Output: Processing widget, use_count: 2
}
```

The `enable_shared_from_this<T>` template stores a `weak_ptr<T>` when a `shared_ptr` owns the object. `shared_from_this()` promotes that weak_ptr, producing a new `shared_ptr` that shares ownership with the existing one without increasing the reference count separately.

## 7.11 Common Pitfalls and Best Practices

### Pitfall 1: Forgetting `template` Keyword for Dependent Template Members

```cpp
template <typename T>
void func(T& container) {
    // Error: need 'template' keyword
    // container.template reserve<true>(10);
}
```

**Fix:** Use `template` keyword when calling a member function template on a dependent object.

### Pitfall 2: Code Bloat from Many Template Instantiations

```cpp
// Each of these generates separate machine code:
my_swap(int, int);
my_swap(double, double);
my_swap(char, char);
my_swap(short, short);
```

**Mitigation:** For large functions, use templates as thin wrappers that call non-template implementations.

### Pitfall 3: Forgetting `typename` for Dependent Types

```cpp
template <typename T>
void func() {
    T::iterator* ptr;  // ERROR: parsed as multiplication
}
```

**Fix:** Always use `typename` for dependent type names.

### Pitfall 4: Non-Type Parameter with Runtime Value

```cpp
int n = 10;
FixedArray<int, n> arr;  // ERROR: n must be compile-time constant

constexpr int N = 10;
FixedArray<int, N> arr;  // OK: N is compile-time constant
```

### Best Practice Checklist

1. **Define templates in headers** → inclusion model is the only portable approach
2. **Prefer `typename` over `class`** for type parameters (C++ Core Guidelines)
3. **Prefer overloading over specialization** for function templates
4. **Use `if constexpr`** instead of SFINAE when possible (C++17)
5. **Use Concepts** instead of SFINAE when possible (C++20)
6. **Be aware of lazy instantiation** → don't put type-dependent code in unused branches
7. **Use `static_assert`** for better error messages on invalid template arguments
8. **CRTP for static polymorphism** when virtual dispatch is too expensive
9. **Policy-based design** for compile-time customization of behavior
10. **Explicit instantiation** to control binary size in library code

## 7.12 Interview Corner

### Q1: What is the difference between template instantiation and template specialization?

**Answer:**

| Aspect | Instantiation | Specialization |
|--------|---------------|----------------|
| **Definition** | Compiler generates concrete code from a template for a specific type | You provide an alternative implementation for a specific type |
| **Who does it** | Compiler automatically | Programmer explicitly |
| **When** | When the template is used with a new type | When the generic version is insufficient |
| **Syntax** | Automatic (no extra code) | `template <> struct C<int> { ... };` |
| **Example** | `vector<int>` → instantiated from `vector<T>` | `vector<bool>` → full specialization |

**Key insight:** Instantiation = automatic code generation per type. Specialization = programmer-provided override for specific types.

### Q2: Why can't function templates be partially specialized?

**Answer:** Function templates already have overloading, which provides the same effect as partial specialization with clearer semantics:

```cpp
// Overloading gives the same effect as partial specialization would:
template <typename T> void foo(T);       // #1 → generic
template <typename T> void foo(T*);      // #2 → overload for pointers
template <typename T> void foo(const T*); // #3 → overload for const pointers
```

Overload resolution selects the most specialized viable overload → the same behavior partial specialization would provide. Adding partial specialization to function templates would create confusing interactions with existing overload resolution rules.

For class templates, there is no overloading mechanism, so partial specialization fills a genuine need.

### Q3: What is SFINAE and when would you use it?

**Answer:** Substitution Failure Is Not An Error is a C++ rule that silently removes invalid template candidates during overload resolution rather than emitting a compilation error.

**Use cases:**
1. **Enable/disable function overloads** based on type properties (`enable_if`)
2. **Detect type capabilities** → does it have `.size()`? Does it have a nested `iterator`?
3. **Select optimal implementation** → memcpy for trivially copyable, element-wise otherwise
4. **Conditional compilation** of class members via partial specialization

**Canonical example:**
```cpp
// Only enabled for integral types
template <typename T>
enable_if_t<is_integral_v<T>, T> half(T v) { return v / 2; }

// Only enabled for floating-point types
template <typename T>
enable_if_t<is_floating_point_v<T>, T> half(T v) { return v / 2.0; }
```

### Q4: What is the CRTP and why is it useful?

**Answer:** The Curiously Recurring Template Pattern is a technique where a derived class passes itself as a template argument to its base class:

```cpp
template <typename Derived>
class Base {
    void interface() {
        static_cast<Derived*>(this)->implementation();
    }
};

class Derived : public Base<Derived> {
    void implementation() { /* ... */ }
};
```

**Benefits:**
1. **Static polymorphism** → same interface, zero virtual dispatch overhead
2. **Code reuse** → inject behavior without virtual functions
3. **Compile-time dispatch** → can be fully inlined, unlike virtual calls
4. **No vtable overhead** → no memory or performance cost for polymorphism

**Real-world uses:** `std::enable_shared_from_this`, Eigen expression templates, Boost.Operators, ATL/WTL, CRTP-based mixins.

### Q5: Explain the difference between `typename` and `class` in templates.

**Answer:**

In template parameter declarations, they are **identical:**
```cpp
template <typename T> void func(T);  // OK
template <class T> void func(T);     // identical meaning
```

`class` was the original keyword (from early C++). `typename` was added to emphasize that template parameters can be any type (int, double, enum → not just user-defined classes).

The **practical difference** is that `typename` has a second mandatory role: disambiguating dependent names:
```cpp
template <typename T>
void func() {
    typename T::iterator it;  // "iterator is a type" → typename REQUIRED
}
```

`class` cannot be used for this disambiguation.

### Q6: How does `std::vector<bool>` specialization work and why is it controversial?

**Answer:** `std::vector<bool>` is a full specialization of `std::vector<T>` that stores bits instead of bools → packing 8 booleans per byte.

```cpp
template <>
class vector<bool> {
    unsigned char* bits_;  // 1 byte stores 8 bools
public:
    class reference {     // Proxy → not bool&
        unsigned char* byte_ptr_;
        int bit_index_;
    public:
        reference& operator=(bool val);
        operator bool() const;
    };
    reference operator[](size_t i);
};
```

**Controversy:** `auto b = vec[0]` gives a `reference` (not `bool`), breaking generic code. Templates that work with `vector<T>` for every T `!= bool` break for `vector<bool>`. This violates the principle that template specializations should provide the same interface as the primary template.

### Q7: What is lazy instantiation and how does it affect template design?

**Answer:** Lazy instantiation means class template member functions are only instantiated when they are actually used:

```cpp
template <typename T>
class Example {
public:
    void valid() {}
    void invalid() { T::nonexistent(); }  // Error for most T
};

int main() {
    Example<int> ex;
    ex.valid();          // OK → only valid() is instantiated
    // ex.invalid();     // If called: compilation error
}
```

**Impact on design:**
- You can write templates with type-specific member functions that only work for certain types, as long as they are never called with incompatible types
- Unused template members do not increase compile time or binary size
- Errors in unused functions are never reported → only errors in used functions surface

## 7.13 Summary

Templates are the heart of C++ generic programming. This chapter covered:

| Topic | Key Concept | Practical Application |
|-------|-------------|----------------------|
| **Function templates** | Type-parameterized algorithms | `std::sort`, `std::find_if` |
| **Class templates** | Type-parameterized data structures | `std::vector`, `std::map` |
| **Template instantiation** | Compiler stamps out concrete code | Zero-cost abstraction |
| **Template specialization** | Type-specific overrides | `vector<bool>`, type traits |
| **Non-type parameters** | Compile-time constants | `std::array<T, N>` |
| **Variadic templates** | Arbitrary parameter packs | `std::tuple`, fold expressions |
| **SFINAE** | Compile-time introspection | `enable_if`, `void_t` detection |
| **Template template params** | Templates accepting templates | Container adaptors, policies |
| **CRTP** | Static polymorphism | `enable_shared_from_this` |
| **Policy-based design** | Configurable behavior | Thread safety, logging policies |

The template system is Turing-complete at compile time, enabling arbitrary compile-time computation (template metaprogramming). It is the foundation on which the STL, Boost, and most modern C++ libraries are built.

## 7.14 Exercises

### Review Questions

1. What is the difference between a template and a macro? Why are templates preferred?
2. How does the compiler resolve `foo(3.14, 5)` where `foo` is declared as `template <typename T> T foo(T a, T b)`?
3. Why can class templates be partially specialized but function templates cannot?
4. Explain lazy instantiation with a concrete example.
5. What problem does the `typename` keyword solve in template context?
6. How does SFINAE differ from a compilation error? What are its limits?
7. Compare and contrast CRTP with virtual functions. When would you use each?
8. Explain the inclusion model for templates. Why is `export` no longer in the standard?

### Code Problems

1. **Function template → `find_max`:**
   Write a function template `find_max` that accepts a `std::vector<T>` and returns the maximum element. Test with `int`, `double`, and `std::string` vectors. What complexity does your solution have?

2. **Class template → `RingBuffer<T, N>`:**
   Implement a fixed-size circular buffer using `std::array<T, N>`. Provide `push`, `pop`, `front`, `back`, `size`, `empty`, and `full`. Ensure it works with non-default-constructible types. Use a dry run table to trace three push operations followed by two pops.

3. **Variadic → `apply_all`:**
   Write a variadic function template `apply_all` that accepts a callable and a parameter pack, then applies the callable to each argument. Use fold expressions (C++17).

4. **SFINAE → `is_container`:**
   Write a type trait `is_container<T>` that detects whether `T` has `begin()` and `end()` member functions returning iterators. Test with `std::vector<int>`, `std::string`, `int`, and `int[5]`.

5. **CRTP → `Comparable<T>`:**
   Implement a CRTP base that provides `!=`, `<=`, `>`, `>=` operators from just `==` and `<`. Explain why this avoids virtual functions.

6. **Policy-based → `Serializer<T, Policy>`:**
   Write a JSON serialization policy and a binary serialization policy for a class template `Serializer<T, Policy>`. Demonstrate both.

### Challenge Problem

7. **Compile-time type erasure:**
   Implement a class template `Any` that can hold any type and a function template `any_cast<T>` to retrieve it. Use a base class with virtual functions, a derived wrapper template, and `typeid` for casting. Demonstrate holding `int`, `std::string`, and a user-defined `Point` struct. What are the runtime costs?
