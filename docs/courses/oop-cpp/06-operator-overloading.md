# Chapter 6: Operator Overloading

## Learning Objectives

After studying this chapter, students will be able to:

- Design operator overloads that preserve intuitive semantics
- Implement binary and unary operators as member and non-member functions
- Use friend functions for operator access to private state
- Overload stream insertion `<<` and extraction `>>`
- Write conversion operators for type interoperability

## 6.1 Philosophy and Constraints

![Operator Overloading Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/06-operator-overloading.png)

Operator overloading allows user-defined types to participate in C++'s expression syntax. The language imposes several invariants:

- At least one operand must be of user-defined type (you cannot redefine `int + int`).
- Precedence, associativity, and arity are fixed (you cannot make `+` unary or change its precedence).
- New operators cannot be created (no `**` for exponentiation).
- The operators `::`, `.`, `.*`, `?:`, and `sizeof` cannot be overloaded.

The golden rule: *when in doubt, do as the ints do*. An overloaded operator should behave consistently with its built-in counterpart. Surprising semantics confuse users and invite bugs.

## 6.2 Binary Operators

A binary operator can be implemented as a member function (one explicit parameter, the left operand is `*this`) or a non-member function (two explicit parameters).

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

A `friend` declaration grants a non-member function access to the class's private members. Friends are declared inside the class body but are not member functions.

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

Overloading `<<` for output and `>>` for input follows a fixed pattern:

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
