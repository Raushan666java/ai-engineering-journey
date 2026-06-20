# Chapter 6: Operator Overloading

> **Previous:** [Polymorphism](./05-polymorphism.md) | **Next:** [Templates](./07-templates.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Design operator overloads that preserve intuitive semantics
- Implement binary and unary operators as member and non-member functions
- Use friend functions for operator access to private state
- Overload stream insertion `<<` and extraction `>>`
- Write conversion operators for type interoperability

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Philosophy & Constraints | Operators follow fixed precedence, associativity, and arity | "When in doubt, do as the ints do" |
| Binary Operators | Member vs non-member: left operand determines form | Use non-member when left operand is not the class type |
| Unary Operators | Prefix returns reference; postfix returns value | Prefer prefix `++` — it avoids a copy |
| Friend Functions | Non-member access to private state | Friendship is not symmetric, transitive, or inherited |
| Stream Operators | `<<` and `>>` must return stream reference | Always return the stream parameter for chaining |
| Conversion Operators | `operator T()` enables implicit conversion | Use `explicit` to prevent accidental narrowing |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Philosophy & Constraints] --> B[Binary Operators]
    B --> C[Unary Operators]
    C --> D[Friend Functions]
    D --> E[Stream Operators]
    E --> F[Conversion Operators]
```

## 6.1 Philosophy and Constraints

> **One-Sentence Takeaway:** Operator overloading lets user-defined types use C++ expression syntax — precedence, associativity, and arity remain fixed, and at least one operand must be user-defined.(https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/06-operator-overloading.png)

Operator overloading allows user-defined types to participate in C++'s expression syntax. The language imposes several invariants:

- At least one operand must be of user-defined type (you cannot redefine `int + int`).
- Precedence, associativity, and arity are fixed (you cannot make `+` unary or change its precedence).
- New operators cannot be created (no `**` for exponentiation).
- The operators `::`, `.`, `.*`, `?:`, and `sizeof` cannot be overloaded.

The golden rule: *when in doubt, do as the ints do*. An overloaded operator should behave consistently with its built-in counterpart. Surprising semantics confuse users and invite bugs.

## 6.2 Binary Operators

> **One-Sentence Takeaway:** Binary operators can be members (left operand is `*this`) or non-members — prefer non-member when the left operand is not the class type. (one explicit parameter, the left operand is `*this`) or a non-member function (two explicit parameters).

```cpp
class Vector2D {
public:
    Vector2D(double x, double y) : x_(x), y_(y) {}

    // Member: v1 += v2
    Vector2D& operator+=(const Vector2D& rhs) {
        x_ += rhs.x_;
        y_ += rhs.y_;
        return *this;
    }

    // Member: v1 + v2
    Vector2D operator+(const Vector2D& rhs) const {
        return Vector2D(x_ + rhs.x_, y_ + rhs.y_);
    }

    friend std::ostream& operator<<(std::ostream& os,
                                    const Vector2D& v);

private:
    double x_, y_;
};
```

Non-member operators are preferred when the left operand is not of the class type (e.g., `int * Vector`):

```cpp
Vector2D operator*(double scalar, const Vector2D& v) {
    return Vector2D(v.x() * scalar, v.y() * scalar);
}
```

## 6.3 Unary Operators

> **One-Sentence Takeaway:** Prefix ++ returns a reference; postfix returns a copy of the old value — prefix is more efficient.

Unary operators (`++`, `--`, `-`, `!`, `~`) are typically member functions with no parameters (prefix) or one `int` parameter (postfix, used as a disambiguator):

```cpp
class Counter {
public:
    Counter& operator++() {     // prefix: ++c
        ++count_;
        return *this;
    }

    Counter operator++(int) {   // postfix: c++
        Counter tmp(*this);
        ++(*this);
        return tmp;             // returns old value
    }

    Counter operator-() const { // unary negation
        return Counter(-count_);
    }

private:
    int count_ = 0;
};
```

Prefix increment returns a reference (no copy), while postfix returns a value (copy required). For non-trivial types, prefix is more efficient.

## 6.4 Friend Functions

> **One-Sentence Takeaway:** A riend declaration grants non-member functions access to private members — use it sparingly.

A riend declaration grants a non-member function access to the class's private members. Friends are declared inside the class body but are not member functions.

```cpp
class Matrix {
    friend Matrix operator*(const Matrix& a, const Matrix& b);
    friend std::ostream& operator<<(std::ostream&, const Matrix&);

private:
    double data_[16];
};

Matrix operator*(const Matrix& a, const Matrix& b) {
    // accesses a.data_ and b.data_ directly
}
```

Friendship is not symmetric, transitive, or inherited. If class A declares B as a friend, B can access A's private members, but A cannot access B's (unless B also declares A as a friend). Children of A do not inherit B's friendship.

## 6.5 Stream Operators

> **One-Sentence Takeaway:** Stream operators return a stream reference to support chaining — they are always non-member functions.

Overloading << for output and `>>` for input follows a fixed pattern:

```cpp
class Complex {
public:
    Complex(double r = 0, double i = 0) : real_(r), imag_(i) {}

    friend std::ostream& operator<<(std::ostream& os,
                                    const Complex& c) {
        os << c.real_;
        if (c.imag_ >= 0)
            os << "+" << c.imag_ << "i";
        else
            os << "-" << -c.imag_ << "i";
        return os;
    }

    friend std::istream& operator>>(std::istream& is,
                                    Complex& c) {
        is >> c.real_ >> c.imag_;
        return is;
    }

private:
    double real_, imag_;
};
```

Stream operators must return a reference to the stream to enable chaining: `cout << a << b`.

## 6.6 Conversion Operators

> **One-Sentence Takeaway:** Conversion operators define implicit conversions — mark them explicit to prevent dangerous silent conversions.

Conversion operators allow implicit conversion from a user-defined type to another type. The `explicit` keyword (C++11) prevents unwanted implicit conversions.

```cpp
class Rational {
public:
    Rational(int num, int den = 1)
        : num_(num), den_(den) {}

    // Implicit conversion to double
    operator double() const {
        return static_cast<double>(num_) / den_;
    }

    // Explicit conversion to int (must use static_cast)
    explicit operator int() const {
        return num_ / den_;
    }

private:
    int num_, den_;
};

int main() {
    Rational r(3, 4);
    double d = r;           // OK: implicit double conversion
    // int i = r;           // ERROR: int conversion is explicit
    int i = static_cast<int>(r);  // OK
}
```

The `explicit` conversion operator prevents accidental narrowing. The `bool` conversion operator is a common special case: `explicit operator bool() const` allows use in conditionals while preventing unintended integer promotion.

> **Pro Tip:** Always mark `operator bool()` as `explicit`. Without it, your type could accidentally participate in arithmetic expressions — one of the most common operator-overloading bugs.

> **Remember:** Friend functions are not member functions — they are ordinary functions with special access privileges. Do not confuse friends with methods.

## Concept Comparison Table

| Operator Category | Member vs Non-member | Typical Syntax | Notes |
|------------------|---------------------|---------------|-------|
| Arithmetic (`+`, `-`, `*`, `/`) | Either; non-member for mixed types | `T operator+(const T&, const T&)` | Return by value |
| Compound assignment (`+=`, `-=`) | Member only | `T& operator+=(const T&)` | Return `*this` by reference |
| Increment/Decrement | Member | `T& operator++()` / `T operator++(int)` | Prefix ref, postfix value |
| Stream (`<<`, `>>`) | Non-member (friend) | `ostream& operator<<(ostream&, const T&)` | Return stream reference |
| Conversion | Member only | `explicit operator bool() const` | Use `explicit` in C++11 |
| Function call `()` | Member only | `ReturnType operator()(Args...)` | Enables functors |

## Quick Reference

| Construct | Syntax | Critical Detail |
|-----------|--------|----------------|
| Binary member | `T operator+(const T& rhs) const` | Left operand is `*this` |
| Binary non-member | `T operator+(const T& lhs, const T& rhs)` | Friend if private access needed |
| Prefix `++` | `T& operator++()` | Return reference |
| Postfix `++` | `T operator++(int)` | `int` is dummy disambiguator |
| Stream out | `ostream& operator<<(ostream&, const T&)` | Return `os` |
| Explicit conversion | `explicit operator bool() const` | Prevents implicit narrowing |

## Cross-Application Matrix

| Domain | How Concepts Apply |
|--------|-------------------|
| **Game Development** | `Vector2D`, `Matrix4` overload arithmetic for transformations |
| **Financial Systems** | `Currency`, `Money` overload arithmetic and `<<` for reporting |
| **Scientific Computing** | `Complex`, `Quaternion` overload all arithmetic operators |
| **GUI Frameworks** | `QString` overloads `+` for concatenation, `<<` for stream output |
| **Embedded Systems** | Fixed-point `Fixed` class overloads arithmetic for efficient DSP |

## Chapter Quiz

1. Why are `<<` and `>>` overloaded as non-member functions?
   A) They cannot be member functions
   B) The left operand (`ostream&`) is not the class type
   C) The compiler requires it for stream operators
   D) It is more efficient
   <details><summary>Answer</summary>**B)** The left operand of `<<` is `std::ostream&`, not the class type, so a non-member function is required.</details>

2. How does C++ distinguish prefix `++` from postfix `++`?
   A) Return type — prefix returns reference, postfix returns value
   B) Postfix has a dummy `int` parameter
   C) Prefix has no parameters, postfix has a `double` parameter
   D) They are distinguished by the function name
   <details><summary>Answer</summary>**B)** Postfix `++` takes an unnamed `int` parameter as a disambiguator: `T operator++(int)`.</details>

3. Is friendship inherited?
   A) Yes, derived classes inherit the base's friendships
   B) No, friendship is not inherited
   C) Only if the derived class re-declares the friend
   D) Only for `public` inheritance
   <details><summary>Answer</summary>**B)** Friendship is not symmetric, transitive, or inherited in C++.</details>

4. What does `explicit operator bool() const` prevent?
   A) Using the object in `if` statements
   B) Implicit conversion to `int`, `pointer`, etc. via `bool` promotion
   C) The object from being copied
   D) Calling `delete` on the object
   <details><summary>Answer</summary>**B)** Without `explicit`, `operator bool()` allows accidental promotion to integer types — `explicit` restricts it to boolean contexts.</details>

5. The golden rule of operator overloading is:
   A) Overload as many operators as possible
   B) When in doubt, do as the ints do
   C) Always use member functions
   D) Never overload operators
   <details><summary>Answer</summary>**B)** Operators should behave consistently with their built-in counterparts — surprising semantics confuse users and invite bugs.</details>

## 6.7 Summary

Operator overloading integrates user-defined types into C++'s expression syntax. Friend functions enable non-member operator overloads to access private state. Stream operators standardise I/O for custom types. Conversion operators control type interoperability, with `explicit` guarding against unintended conversions. Judicious operator overloading produces code that reads naturally; overuse produces confusion.

## Exercises

### Review Questions

1. Why are `<<` and `>>` overloaded as non-member functions rather than members?
2. What distinguishes prefix `++` from postfix `++` in a class definition?
3. What are the limitations of friendship in C++?
4. When should a conversion operator be declared `explicit`?
5. Why must `operator=` be implemented as a member function?

### Application Problems

1. Implement a `Fraction` class with overloaded `+`, `-`, `*`, `/`, `==`, `!=`, `<`, `<<`, `>>`, and conversion to `double`. Reduce fractions to lowest terms in each operation.
2. Overload `operator[]` for a `class` named `SparseVector` that stores non-zero entries in a `std::map<size_t, double>`. The `operator[]` should create entries on access. Also provide a `const` version that returns `0.0` for missing indices.

### Challenge Problem

3. Implement a `class` named `BigInteger` that can represent arbitrarily large integers using a `std::vector<int>` of digits. Overload `+`, `-`, `*`, `==`, `<`, `<<`, `>>`, prefix and postfix `++`, `explicit operator bool()`, and `explicit operator long long()`. Handle carries and borrows correctly. Test with values that exceed `long long` range.
