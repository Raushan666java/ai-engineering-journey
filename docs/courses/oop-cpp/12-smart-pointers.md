# Chapter 12: Smart Pointers

## Learning Objectives

After studying this chapter, students will be able to:

- Manage dynamic memory using `unique_ptr` for exclusive ownership
- Use `shared_ptr` for shared ownership with reference counting
- Break circular references with `weak_ptr`
- Create smart pointers with `make_unique` and `make_shared`
- Implement custom deleters for non-memory resources

## 12.1 The Problem with Raw `new`/`delete`

![Smart Pointers Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/12-smart-pointers.png)

Manual memory management is error-prone:

```cpp
void process() {
    int* ptr = new int(42);
    // ... code that may throw or return early ...
    delete ptr;   // easy to forget or skip
}
```

Common problems: memory leaks (forgotten `delete`), double deletion, use-after-free, and exception safety. Smart pointers automate ownership semantics using RAII.

## 12.2 std::unique_ptr

`unique_ptr` represents exclusive ownership. It is movable but not copyable. When the `unique_ptr` is destroyed, the owned object is deleted.

```cpp
#include <memory>

class Resource {
public:
    Resource() { std::cout << "Acquire\n"; }
    ~Resource() { std::cout << "Release\n"; }
    void work() { std::cout << "Working\n"; }
};

int main() {
    std::unique_ptr<Resource> ptr(new Resource());
    // or: auto ptr = std::make_unique<Resource>();

    ptr->work();

    // Transfer ownership
    std::unique_ptr<Resource> other = std::move(ptr);
    // ptr is now null

    // other is destroyed here, releasing the Resource
}
```

`unique_ptr` works with arrays (specialisation in C++17):

```cpp
auto arr = std::make_unique<int[]>(100);
arr[0] = 42;
```

Key operations:
- `release()` â€” relinquish ownership, return raw pointer
- `reset(p)` â€” delete current object, take ownership of `p`
- `get()` â€” return raw pointer (non-owning)
- `swap(other)` â€” swap managed objects

## 12.3 std::shared_ptr

`shared_ptr` implements shared ownership through reference counting. The managed object is destroyed when the last `shared_ptr` owning it is destroyed.

```cpp
#include <memory>

int main() {
    auto p1 = std::make_shared<int>(42);
    {
        auto p2 = p1;                      // reference count: 2
        std::cout << *p2 << '\n';          // 42
        std::cout << p2.use_count() << '\n'; // 2
    }                                      // p2 destroyed, count: 1
    std::cout << p1.use_count() << '\n';   // 1
}                                          // p1 destroyed, count: 0, int freed
```

Reference counting has overhead:
- Memory for the reference count (control block) is allocated separately
- Increment and decrement operations are atomic (thread-safe but non-trivial)
- Cyclic references cause memory leaks (addressed by `weak_ptr`)

## 12.4 make_unique and make_shared

Factory functions are preferred over explicit `new`:

```cpp
// Preferred
auto ptr = std::make_unique<MyClass>(arg1, arg2);
auto sptr = std::make_shared<MyClass>(arg1, arg2);

// Less preferred (possible exception-safety issues)
std::unique_ptr<MyClass> ptr(new MyClass(arg1, arg2));
```

`make_shared` allocates the object and control block in a single allocation, improving cache locality and reducing overhead. `make_unique` was added in C++14 (it is `std::make_unique`).

The exception-safety concern: `f(unique_ptr<T>(new T), other_func())` â€” if `other_func` throws after `new T` but before `unique_ptr` construction, a leak occurs. `make_unique` eliminates this window.

## 12.5 std::weak_ptr

`weak_ptr` provides a non-owning "weak reference" to a `shared_ptr`-managed object. It does not affect the reference count. To access the object, lock itâ€”which returns a `shared_ptr` (or null if the object was deleted).

```cpp
#include <memory>

int main() {
    auto sp = std::make_shared<int>(42);
    std::weak_ptr<int> wp = sp;            // count still 1

    if (auto locked = wp.lock()) {
        std::cout << *locked << '\n';      // 42
    }

    sp.reset();                            // object destroyed

    if (auto locked = wp.lock()) {
        std::cout << *locked << '\n';      // never reached
    } else {
        std::cout << "Object expired\n";
    }
}
```

`weak_ptr` is essential for breaking circular references (Section 12.7).

## 12.6 Custom Deleters

Smart pointers can manage non-memory resources through custom deleters:

```cpp
// Unique pointer with custom deleter
auto file_deleter = [](std::FILE* fp) {
    if (fp) std::fclose(fp);
};

std::unique_ptr<std::FILE, decltype(file_deleter)>
    file_ptr(std::fopen("test.txt", "w"), file_deleter);

// Shared pointer with custom deleter
auto socket_deleter = [](int* sock) {
    std::cout << "Closing socket\n";
    // close(*sock);
    delete sock;
};

std::shared_ptr<int> sock_ptr(new int(42), socket_deleter);
```

The deleter type is part of `unique_ptr`'s template signature but not `shared_ptr`'s (shared_ptr uses type erasure for the deleter).

## 12.7 Circular References

A common pitfall with `shared_ptr` is circular references, where two objects hold `shared_ptr` to each other, preventing both from being freed:

```cpp
struct Node {
    std::shared_ptr<Node> next;
    ~Node() { std::cout << "Destroyed\n"; }
};

int main() {
    auto a = std::make_shared<Node>();
    auto b = std::make_shared<Node>();
    a->next = b;
    b->next = a;      // Cycle: neither destructor runs
    std::cout << a.use_count() << '\n';  // 2
}   // Memory leak â€” "Destroyed" never printed
```

The fix: use `weak_ptr` for back-references:

```cpp
struct Node {
    std::shared_ptr<Node> next;
    std::weak_ptr<Node> prev;    // back reference is weak
    ~Node() { std::cout << "Destroyed\n"; }
};

int main() {
    auto a = std::make_shared<Node>();
    auto b = std::make_shared<Node>();
    a->next = b;
    b->prev = a;      // weak_ptr does not increase count
}
```

## 12.8 Summary

Smart pointers automate memory management through RAII. `unique_ptr` provides exclusive ownership with zero overhead, `shared_ptr` enables shared ownership via reference counting, and `weak_ptr` breaks cycles and provides optional observation. Factory functions `make_unique` and `make_shared` are preferred for safety and performance. Custom deleters extend smart pointers to any resource.

## Exercises

### Review Questions

1. Why is `unique_ptr` not copyable but movable?
2. What is the reference counting overhead of `shared_ptr`?
3. How does `weak_ptr::lock()` prevent a dangling pointer?
4. Why is `make_shared` more efficient than constructing `shared_ptr` with `new`?
5. When must a custom deleter be provided?

### Application Problems

1. Implement a singly-linked list where each node's `next` pointer is a `unique_ptr<Node>`. Provide `push_front`, `pop_front`, and `print` operations. Explain why `unique_ptr` works here.
2. Create a `class Graph` with nodes that hold `shared_ptr<Node>` to their neighbours. Use `weak_ptr` in the adjacency list to avoid cycles. Provide `add_node`, `add_edge`, and `find_node` methods.

### Challenge Problem

3. Implement a simple garbage-collected environment using `shared_ptr` and `weak_ptr`. Create a `class Heap` that holds `shared_ptr<void>` to all allocated objects. Implement `collect_garbage()` that scans all roots (a separate list of strong references) and frees unreachable objects by resetting shared_ptrs in the heap. Demonstrate with a tree-like object graph.
