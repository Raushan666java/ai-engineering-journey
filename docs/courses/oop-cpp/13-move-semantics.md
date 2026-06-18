# Chapter 13: Move Semantics

## Learning Objectives

After studying this chapter, students will be able to:

- Distinguish lvalues, rvalues, xvalues, and glvalues
- Implement move constructors and move assignment operators
- Apply `std::move` to enable move operations
- Use `std::forward` and perfect forwarding
- Understand the relationship between move semantics and noexcept

## 13.1 Value Categories

![Move vs Copy Sequence Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/13-move-semantics.png)

C++11 introduced a refined taxonomy of value categories:

```
        expression
       /          \
    glvalue      rvalue
   /       \    /      \
lvalue     xvalue  prvalue
```

- **lvalue** (locator value): has an identity, can be addressed (`x`, `++i`, `*p`)
- **prvalue** (pure rvalue): has no identity, used to initialise (`42`, `3+4`, `&x`)
- **xvalue** (eXpiring value): has an identity but its resources can be reused (`std::move(x)`, static_cast to rvalue reference)

An rvalue is either a prvalue or an xvalue. Only rvalues can bind to rvalue references (`T&&`).

```cpp
int x = 42;        // x is an lvalue
int& ref = x;      // ref binds to lvalue
int&& rref = 42;   // 42 is a prvalue, rref binds to rvalue

int&& rref2 = std::move(x);  // x is cast to xvalue, rref2 binds
```

## 13.2 Rvalue References

An rvalue reference (`T&&`) binds exclusively to rvalues. It extends the lifetime of the temporary and signals that the referred object is about to be destroyed, allowing its resources to be "stolen" rather than copied.

```cpp
void process(int& x) {
    std::cout << "lvalue: " << x << '\n';
}

void process(int&& x) {
    std::cout << "rvalue: " << x << '\n';
}

int main() {
    int a = 10;
    process(a);          // calls lvalue overload
    process(20);         // calls rvalue overload
    process(std::move(a)); // calls rvalue overload
}
```

## 13.3 Move Constructor and Move Assignment

Move operations transfer ownership of resources from a source object to a destination, leaving the source in a valid but unspecified state (typically empty or null).

```cpp
class Buffer {
public:
    // Constructor
    Buffer(size_t size)
        : size_(size), data_(new int[size]) {
        std::cout << "Construct\n";
    }

    // Destructor
    ~Buffer() { delete[] data_; }

    // Copy constructor
    Buffer(const Buffer& other)
        : size_(other.size_),
          data_(new int[other.size_]) {
        std::copy(other.data_, other.data_ + size_, data_);
        std::cout << "Copy construct\n";
    }

    // Move constructor
    Buffer(Buffer&& other) noexcept
        : size_(other.size_), data_(other.data_) {
        other.size_ = 0;
        other.data_ = nullptr;
        std::cout << "Move construct\n";
    }

    // Move assignment
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            size_ = other.size_;
            data_ = other.data_;
            other.size_ = 0;
            other.data_ = nullptr;
        }
        return *this;
    }

private:
    size_t size_;
    int* data_;
};

int main() {
    Buffer buf1(1000);
    Buffer buf2 = std::move(buf1);  // move, not copy
    // buf1 is now empty (null/0)
}
```

## 13.4 noexcept and Move Operations

Move constructors and move assignments should be declared `noexcept`. The standard library containers use `std::move_if_noexcept` internally: when reallocating, if the type has a `noexcept` move constructor, elements are moved; otherwise they are copied.

```cpp
struct Movable {
    Movable(Movable&&) noexcept { /* ... */ }
    Movable& operator=(Movable&&) noexcept { /* ... */ }
};

std::vector<Movable> vec;
vec.reserve(1);
vec.emplace_back();  // allocate, move-construct
// If move were not noexcept, vector would copy instead
```

## 13.5 std::move

`std::move` does not move anything. It unconditionally casts its argument to an rvalue reference:

```cpp
template <typename T>
typename std::remove_reference<T>::type&&
move(T&& arg) noexcept {
    return static_cast<typename std::remove_reference<T>::type&&>(arg);
}

std::string s = "hello";
std::string t = std::move(s);   // casts s to rvalue, enables move
```

After `std::move(s)`, `s` is in a valid but unspecified state. Accessing it is allowed, but the value is unpredictable (typically empty).

## 13.6 Perfect Forwarding and std::forward

Perfect forwarding preserves the value category of arguments through function templates. The forwarding reference `T&&` (also called universal reference) binds to both lvalues and rvalues.

```cpp
template <typename T>
void wrapper(T&& arg) {
    // arg is always an lvalue (has a name)
    // To preserve its original value category, use std::forward
    target(std::forward<T>(arg));
}
```

`std::forward` conditionally casts to an rvalue reference only if the original argument was an rvalue:

```cpp
template <typename T>
constexpr T&& forward(typename std::remove_reference<T>::type& arg) noexcept {
    return static_cast<T&&>(arg);
}
```

Practical example â€” a factory that forwards arguments:

```cpp
template <typename T, typename... Args>
std::unique_ptr<T> make_unique(Args&&... args) {
    return std::unique_ptr<T>(
        new T(std::forward<Args>(args)...)
    );
}
```

## 13.7 The Rule of Five

With move semantics, the original Rule of Three expands to five special member functions:

1. Destructor
2. Copy constructor
3. Copy assignment
4. Move constructor
5. Move assignment

The copy-and-swap idiom unifies copy and move assignment:

```cpp
class Buffer {
public:
    // ... constructors, destructor ...

    friend void swap(Buffer& a, Buffer& b) noexcept {
        using std::swap;
        swap(a.size_, b.size_);
        swap(a.data_, b.data_);
    }

    // Unified assignment (copy AND move)
    Buffer& operator=(Buffer other) noexcept {
        swap(*this, other);
        return *this;
    }
};
```

If the argument is an lvalue, `other` is copy-constructed; if an rvalue, it is move-constructed. In either case, swap exchanges resources, and the old state is destroyed when `other` goes out of scope.

## 13.8 Summary

Move semantics eliminate unnecessary copies by transferring ownership of resources from expiring objects. Rvalue references distinguish temporary from persistent objects. `std::move` enables move operations, while `std::forward` preserves value categories through forwarding functions. The Rule of Five formalises the complete set of resource-managing special member functions.

## Exercises

### Review Questions

1. What is the difference between a prvalue and an xvalue?
2. Why must a move constructor be `noexcept` for optimal `vector` performance?
3. What is a forwarding reference (universal reference) and how does it differ from an rvalue reference?
4. Does `std::move` actually move anything? Explain.
5. How does the copy-and-swap idiom serve both copy and move assignment?

### Application Problems

1. Implement a `class DynamicBuffer` with a `noexcept` move constructor and move assignment. Add a logging mechanism to count how many times each special member is called. Test with `std::vector<DynamicBuffer>` and observe when moves vs copies occur.
2. Write a `template <typename... Args> Vector<T>::emplace_back` implementation using perfect forwarding.

### Challenge Problem

3. Implement a toy `std::function` equivalent using type erasure with perfect forwarding. The class template `Function<Ret(Args...)>` should store any callable and invoke it with perfect forwarding. Use a base class with virtual `invoke` and a derived wrapper template. Implement `operator()` with perfect forwarding of arguments.
