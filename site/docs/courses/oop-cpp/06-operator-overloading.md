---
slug: /oop-cpp/06-operator-overloading
title: "Chapter 6: Operator Overloading"
sidebar_label: "Chapter 6: Operator Overloading"
sidebar_position: 6
---
# Chapter 6: Operator Overloading

> **Previous:** [Polymorphism](./05-polymorphism.md) | **Next:** [Templates](./07-templates.md)

---

## Learning Objectives

After studying this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/06-operator-overloading/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/06-operator-overloading/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/06-operator-overloading/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/06-operator-overloading/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/06-operator-overloading/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/06-operator-overloading/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

- Explain the rules and constraints of C++ operator overloading
- Implement binary and unary operators as member and non-member functions
- Distinguish between member and non-member overloads with rationale
- Overload arithmetic, comparison, increment/decrement, and stream operators
- Implement subscript `[]`, function call `()`, and type conversion operators
- Apply correct return type conventions for each operator category
- Identify which operators cannot be overloaded and why
- Analyze operator resolution through dry-run trace tables
- Apply operator overloading in real-world systems like std::string, std::complex, std::vector
- Answer interview questions on operator overloading best practices

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Rules & Constraints | Fixed precedence, associativity, arity; >=1 user-defined operand | "When in doubt, do as the ints do" |
| Member vs Non-Member | *this as left operand vs explicit parameters | Non-member when left operand is not class type |
| Arithmetic (`+ - * /`) | Return by value, implement via `+=` for efficiency | Binary `+` should not be a friend unless needed |
| Comparison (`== != < <= > >=`) | Define `==` and `<`, derive the rest | Consistent semantics for `std::sort`, `std::find` |
| Increment/Decrement | Prefix returns ref; postfix returns copy | Prefer prefix --- it avoids a copy |
| Stream (`<< >>`) | Return stream reference for chaining | Always non-member; often friend |
| Subscript `[]` | Must return reference for assignment `a[i]=v` | Provide const and non-const overloads |
| Function Call `()` | Enables functors and lambdas | Store state for configurable behavior |
| Type Conversion | `operator T()` for implicit; `explicit` to prevent narrowing | Always mark `operator bool()` explicit |
| `new`/`delete` | Per-class allocation control | Rarely needed; use for custom memory pools |
| Can't Overload | `::` `.` `.*` `?:` `sizeof` `typeid` `static_cast` etc. | Member access and type identity stay built-in |

---

## Chapter Roadmap

```mermaid
flowchart LR
    A[Rules & Constraints] --> B[Member vs Non-Member]
    B --> C[Arithmetic + - * /]
    B --> D[Comparison == != < <= > >=]
    B --> E[Increment ++ --]
    B --> F[Stream << >>]
    B --> G[Subscript []]
    B --> H[Function Call ()]
    B --> I[Type Conversion]
    B --> J[Assignment = new delete]
    B --> K[Limitations & Guidelines]
    K --> L[Real-World Applications]
    L --> M[Interview Corner]
```

---

## 6.1 Rules and Constraints

> **One-Sentence Takeaway:** Operator overloading extends C++ expression syntax to user-defined types while preserving the language's fixed precedence, associativity, and arity rules.

### Real-World Analogy --- The Piano Keyboard

Think of C++ operators like the keys on a piano. The key labeled "middle C" always plays middle C --- its position, feel, and behavior are fixed by the instrument's design. Operator overloading is like a synthesizer that changes *what sound* that key produces while keeping the key itself in the same place. You cannot:
- Move the key to a different position on the keyboard (change precedence)
- Make the key play two notes at once by pressing it alone (change arity)
- Add a new key between two existing ones (invent a new operator)

### Fundamental Rules

**Rule 1 --- At Least One User-Defined Operand**
You cannot redefine operators on built-in types alone. `int + int` is forever `int + int`.

**Rule 2 --- Fixed Precedence and Associativity**
`a + b * c` always multiplies before adding, regardless of what `+` and `*` mean for your type.

**Rule 3 --- Fixed Arity**
Unary operators stay unary; binary operators stay binary. `?` is the only ternary operator and cannot be overloaded.

**Rule 4 --- No New Operators**
You cannot create `**` for exponentiation, `<>` for spaceship, or any novel symbol.

**Rule 5 --- Some Operators Are Off-Limits**
`::` (scope resolution), `.` (member access), `.*` (member pointer access), `?:` (ternary conditional), `sizeof`, `typeid`, `static_cast`, `dynamic_cast`, `const_cast`, `reinterpret_cast`, and `alignof` cannot be overloaded.

### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| Overload resolution | O(k) where k = candidate functions | Compiler enumerates viable overloads and selects best match |
| Code generation | O(1) per operator call | Inlined if definition is visible; no runtime dispatch unless virtual |
| Cognitive cost for reader | O(n) where n = number of overloads | Each overload is a new contract the reader must learn |

### Golden Rule

> **"When in doubt, do as the ints do."** --- If your overloaded `+` does something surprising, you have violated the Principle of Least Surprise. An operator should mean what users expect it to mean based on its built-in behavior.

---

## 6.2 Syntax and Fundamentals

### Real-World Analogy --- Function with a Special Name

An operator is a function whose name is `operator` followed by the operator symbol. Think of it as a function that gets called with a special syntax. `a + b` is really `a.operator+(b)` or `operator+(a, b)`.

### Numbered Steps for Writing an Operator Overload

1. **Identify the operator** you want to overload (e.g., `+`, `==`, `<<`)
2. **Decide member or non-member**: If the operator must modify left operand or access its private data, prefer member. If left operand is not your class type, non-member is required
3. **Choose the correct signature**: Match arity and return type conventions
4. **Implement the logic**: Write the body using public interface or friend access
5. **Test with natural syntax**: Verify `a + b` compiles and produces correct results

### Generic Syntax Template

```
// Member function form
ReturnType operator@(ParameterList) { ... }

// Non-member function form
ReturnType operator@(Param1, Param2) { ... }
```

Where `@` is the operator symbol (+, -, ==, etc.) and `ParameterList` has one fewer parameter than the operator's arity (the left operand is `*this` for member functions).

### Example --- Basic Structure

```cpp
#include <iostream>

class Point {
public:
    Point(int x = 0, int y = 0) : x_(x), y_(y) {}

    // Member binary operator: p1 + p2
    Point operator+(const Point& rhs) const {
        return Point(x_ + rhs.x_, y_ + rhs.y_);
    }

    // Member compound assignment: p1 += p2
    Point& operator+=(const Point& rhs) {
        x_ += rhs.x_;
        y_ += rhs.y_;
        return *this;
    }

    // Non-member friend for stream output
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        return os << "(" << p.x_ << ", " << p.y_ << ")";
    }

private:
    int x_, y_;
};
```

**Output:**
```
(3, 5)
(4, 7)
```

### Dry Run --- Operator Resolution

| Expression | Resolved As | Return Type | Mechanism |
|-----------|-------------|-------------|-----------|
| `p1 + p2` | `p1.operator+(p2)` | `Point` by value | Member function, rhs as parameter |
| `p1 += p2` | `p1.operator+=(p2)` | `Point&` by reference | Modifies `*this`, returns self |
| `std::cout << p1` | `operator<<(std::cout, p1)` | `std::ostream&` | Non-member, friend access |

---

## 6.3 Member vs Non-Member Overloads

> **One-Sentence Takeaway:** Choose member when the left operand is `*this` and the operator modifies the object; choose non-member when the left operand is not the class type or symmetric conversion is desired.

### Real-World Analogy --- Two Doors to the Same Room

A member operator is like a door in your own house --- you walk through it directly (your class, your control). A non-member operator is like a door in a shared building --- you need a key (friend declaration) to access private rooms.

### Comprehensive Comparison Table

| Criterion | Member Function | Non-Member Function |
|-----------|----------------|---------------------|
| Syntax | `T::operator@(rhs)` | `operator@(lhs, rhs)` |
| Left operand | `*this` (implicit) | First explicit parameter |
| Required for `=` `()` `[]` `->` | Yes | No (language mandates) |
| Compound assignment `+=` `-=` | Yes (convention) | Possible but unusual |
| Conversion operators | Yes (only form allowed) | No |
| Mixed-type operations | Left operand must be `T` | Both operands can convert |
| Symmetric promotion | Left operand cannot convert | Both operands convert equally |
| Private member access | Direct access to `this->priv` | Requires `friend` declaration |
| Virtual dispatch | Yes (if declared virtual) | No |
| Number of parameters | Arity minus 1 | Full arity |
| Typical use | `+=`, `++`, `--`, `[]`, `()`, `->`, `=` | `<<`, `>>`, `+`, `-`, `==`, `<` |

### Code Example --- Symmetric Conversion

```cpp
#include <iostream>

class Meter {
public:
    explicit Meter(double m) : value_(m) {}
    double value() const { return value_; }

    // Member: left must be Meter
    Meter operator+(const Meter& rhs) const {
        return Meter(value_ + rhs.value_);
    }

private:
    double value_;
};

// Non-member: allows double + Meter as well as Meter + Meter
Meter operator+(double lhs, const Meter& rhs) {
    return Meter(lhs + rhs.value());
}

Meter operator+(const Meter& lhs, double rhs) {
    return Meter(lhs.value() + rhs);
}

int main() {
    Meter m1(10), m2(20);
    Meter m3 = m1 + m2;        // OK: member
    Meter m4 = 5.0 + m1;       // OK: non-member
    Meter m5 = m1 + 3.0;       // OK: non-member
    std::cout << m3.value() << " " << m4.value() << " " << m5.value() << "\n";
}
```

**Output:**
```
30 15 13
```

### Decision Flowchart

```
Is the operator one of =, (), [], ->, T() ?
    -> YES -> Must be member
    -> NO
Does the operator modify the left operand?
    -> YES -> Prefer member (e.g., +=, -=, ++)
    -> NO
Is the left operand a stream or other non-class type?
    -> YES -> Must be non-member (e.g., <<, >>)
    -> NO
Do you want symmetric conversion on both sides?
    -> YES -> Use non-member
    -> NO
Use member (simpler, direct access)
```

### Dry Run --- Resolution for Mixed Types

| Expression | Candidates Considered | Best Match | Reason |
|-----------|---------------------|------------|--------|
| `m1 + m2` | `Meter::operator+(Meter)`, `operator+(Meter, Meter)` | Member | Exact match, no conversion needed |
| `5.0 + m1` | `operator+(double, Meter)` | Non-member | Only viable; no member exists for double |
| `m1 + 3.0` | `Meter::operator+(Meter)` requires conversion 3.0->Meter; `operator+(Meter, double)` | Non-member | Exact match on rhs avoids conversion |

---

## 6.4 Overloading Arithmetic Operators

> **One-Sentence Takeaway:** Implement compound assignment `+=` as a member, then implement `+` in terms of `+=` for DRY code.

### Real-World Analogy --- A Cash Register

Adding two prices on a cash register (`item1 + item2`) produces a new total without modifying either item. Adding an item to an existing total (`total += item`) modifies the register's running total. The first creates a new value; the second changes the existing one.

### Numbered Steps for Arithmetic Overloads

1. Decide which operators are meaningful (+, -, *, /, %)
2. Implement compound assignment versions as members returning `T&`
3. Implement binary versions as non-members returning `T` (by value)
4. Make binary versions call the compound versions to avoid duplication
5. For mixed-type operations, provide overloads for both orderings

### Pseudocode

```
class T {
    member operator+=(T rhs) -> T&:
        this.data += rhs.data
        return this

    member operator-=(T rhs) -> T&:
        this.data -= rhs.data
        return this
}

// Non-member binary (calls compound)
non-member operator+(T lhs, T rhs) -> T:
    temp = lhs      // copy
    temp += rhs     // reuse compound
    return temp

non-member operator-(T lhs, T rhs) -> T:
    temp = lhs
    temp -= rhs
    return temp
```

### Full Code --- Complex Number Arithmetic

```cpp
#include <iostream>

class Complex {
public:
    Complex(double r = 0, double i = 0) : real_(r), imag_(i) {}

    // Compound assignment --- members
    Complex& operator+=(const Complex& rhs) {
        real_ += rhs.real_;
        imag_ += rhs.imag_;
        return *this;
    }

    Complex& operator-=(const Complex& rhs) {
        real_ -= rhs.real_;
        imag_ -= rhs.imag_;
        return *this;
    }

    Complex& operator*=(const Complex& rhs) {
        double r = real_ * rhs.real_ - imag_ * rhs.imag_;
        double i = real_ * rhs.imag_ + imag_ * rhs.real_;
        real_ = r;
        imag_ = i;
        return *this;
    }

    Complex& operator/=(const Complex& rhs) {
        double denom = rhs.real_ * rhs.real_ + rhs.imag_ * rhs.imag_;
        double r = (real_ * rhs.real_ + imag_ * rhs.imag_) / denom;
        double i = (imag_ * rhs.real_ - real_ * rhs.imag_) / denom;
        real_ = r;
        imag_ = i;
        return *this;
    }

    double real() const { return real_; }
    double imag() const { return imag_; }

private:
    double real_, imag_;
};

// Binary arithmetic --- non-members calling compound
Complex operator+(Complex lhs, const Complex& rhs) {
    lhs += rhs;    // calls operator+=
    return lhs;
}

Complex operator-(Complex lhs, const Complex& rhs) {
    lhs -= rhs;
    return lhs;
}

Complex operator*(Complex lhs, const Complex& rhs) {
    lhs *= rhs;
    return lhs;
}

Complex operator/(Complex lhs, const Complex& rhs) {
    lhs /= rhs;
    return lhs;
}

// Unary minus
Complex operator-(const Complex& c) {
    return Complex(-c.real(), -c.imag());
}

std::ostream& operator<<(std::ostream& os, const Complex& c) {
    os << c.real();
    if (c.imag() >= 0) os << "+" << c.imag() << "i";
    else os << "-" << -c.imag() << "i";
    return os;
}

int main() {
    Complex a(3, 4), b(1, 2);
    std::cout << "a = " << a << "\n";
    std::cout << "b = " << b << "\n";
    std::cout << "a + b = " << (a + b) << "\n";
    std::cout << "a - b = " << (a - b) << "\n";
    std::cout << "a * b = " << (a * b) << "\n";
    std::cout << "a / b = " << (a / b) << "\n";
    std::cout << "-a = " << (-a) << "\n";

    // Compound assignment modifies in place
    Complex c(1, 1);
    c += Complex(2, 2);
    std::cout << "c after +=: " << c << "\n";
}
```

**Output:**
```
a = 3+4i
b = 1+2i
a + b = 4+6i
a - b = 2+2i
a * b = -5+10i
a / b = 2.2-0.4i
-a = -3-4i
c after +=: 3+3i
```

### Dry Run --- Operator Resolution for Complex Arithmetic

| Step | Expression | Resolved As | Intermediate State |
|------|-----------|-------------|-------------------|
| 1 | `a + b` | `operator+(a, b)` | lhs = copy of a |
| 2 | Inside `operator+` | `lhs += b` -> `lhs.operator+=(b)` | lhs.real_ = 3+1=4, lhs.imag_ = 4+2=6 |
| 3 | Return | returns lhs (by value) | Complex(4, 6) |
| 4 | Output | `operator<<(cout, result)` | prints "4+6i" |
| 5 | `c += Complex(2,2)` | `c.operator+=(Complex(2,2))` | c.real_ = 1+2=3, c.imag_ = 1+2=3 |

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|---------------|------------------|-----|
| `operator+` (binary) | O(n) for container-like types; O(1) for simple types | O(1) extra (temporary) | Copy + compound; copy dominates for large objects |
| `operator+=` (compound) | O(n) or O(1) | O(1) | Modifies in place; no extra allocation |
| `operator*` (complex multiply) | O(1) arithmetic | O(1) | 4 multiplications, 2 additions, no branching |
| `operator/` (complex division) | O(1) arithmetic | O(1) | 6 multiplications, 3 additions, 1 division |

### WHY Complexity Matters

Always prefer `+=` over `+` when modifying an existing object. The expression `a = a + b` creates a temporary (costly for large types like `std::string` or `std::vector`), while `a += b` modifies directly. For `std::string`, `+` allocates a new buffer (O(n) memory), while `+=` may reuse existing capacity.

---

## 6.5 Overloading Comparison Operators

> **One-Sentence Takeaway:** Define `==` and `<`, then derive `!=`, `>`, `<=`, `>=` from them --- C++20 spaceship `<=>` simplifies this further.

### Real-World Analogy --- A Weighing Scale

A weighing scale compares two objects and tells you their relationship: equal weight, heavier, lighter, heavier-or-equal, lighter-or-equal, or not-equal. Comparison operators are the six ways to read this relationship.

### Numbered Steps for Comparison Overloads

1. Define `operator==` --- the primary equality check
2. Define `operator<` --- the primary ordering check
3. Derive `!=` from `==`: `return !(lhs == rhs);`
4. Derive `>` from `<`: `return rhs < lhs;`
5. Derive `<=` from `<` and `==`: `return !(rhs < lhs);`
6. Derive `>=` from `<` and `==`: `return !(lhs < rhs);`
7. (C++17) Use `<` and `==` for all six; (C++20) Use `<=>` for all six

### Pseudocode

```
non-member operator==(T lhs, T rhs) -> bool:
    return lhs.field1 == rhs.field1 AND lhs.field2 == rhs.field2

non-member operator<(T lhs, T rhs) -> bool:
    if lhs.field1 != rhs.field1:
        return lhs.field1 < rhs.field1
    return lhs.field2 < rhs.field2

non-member operator!=(T lhs, T rhs) -> bool:
    return NOT (lhs == rhs)

non-member operator>(T lhs, T rhs) -> bool:
    return rhs < lhs

non-member operator<=(T lhs, T rhs) -> bool:
    return NOT (rhs < lhs)

non-member operator>=(T lhs, T rhs) -> bool:
    return NOT (lhs < rhs)
```

### Full Code --- Fraction with Comparisons

```cpp
#include <iostream>
#include <numeric> // for gcd (C++17)

class Fraction {
public:
    Fraction(int num = 0, int den = 1)
        : num_(num), den_(den) {
        if (den_ < 0) { num_ = -num_; den_ = -den_; }
        normalize();
    }

    int num() const { return num_; }
    int den() const { return den_; }

private:
    void normalize() {
        int g = std::gcd(std::abs(num_), std::abs(den_));
        num_ /= g;
        den_ /= g;
    }

    int num_, den_;
};

// Equality
bool operator==(const Fraction& lhs, const Fraction& rhs) {
    return lhs.num() == rhs.num() && lhs.den() == rhs.den();
}

// Less-than (for sorting)
bool operator<(const Fraction& lhs, const Fraction& rhs) {
    return lhs.num() * rhs.den() < rhs.num() * lhs.den();
}

// Derived from ==
bool operator!=(const Fraction& lhs, const Fraction& rhs) {
    return !(lhs == rhs);
}

// Derived from <
bool operator>(const Fraction& lhs, const Fraction& rhs) {
    return rhs < lhs;
}

bool operator<=(const Fraction& lhs, const Fraction& rhs) {
    return !(rhs < lhs);
}

bool operator>=(const Fraction& lhs, const Fraction& rhs) {
    return !(lhs < rhs);
}

std::ostream& operator<<(std::ostream& os, const Fraction& f) {
    return os << f.num() << "/" << f.den();
}

int main() {
    Fraction f1(1, 2), f2(3, 4), f3(2, 4);

    std::cout << std::boolalpha;
    std::cout << f1 << " == " << f3 << " ? " << (f1 == f3) << "\n";
    std::cout << f1 << " != " << f2 << " ? " << (f1 != f2) << "\n";
    std::cout << f1 << " < "  << f2 << " ? " << (f1 < f2)  << "\n";
    std::cout << f2 << " > "  << f1 << " ? " << (f2 > f1)  << "\n";
    std::cout << f1 << " <= " << f3 << " ? " << (f1 <= f3) << "\n";
    std::cout << f2 << " >= " << f3 << " ? " << (f2 >= f3) << "\n";

    // Sorting
    Fraction arr[] = {{3,4}, {1,3}, {1,2}, {5,6}};
    std::sort(std::begin(arr), std::end(arr));
    std::cout << "Sorted: ";
    for (const auto& f : arr) std::cout << f << " ";
    std::cout << "\n";
}
```

**Output:**
```
1/2 == 2/4 ? true
1/2 != 3/4 ? true
1/2 < 3/4 ? true
3/4 > 1/2 ? true
1/2 <= 2/4 ? true
3/4 >= 2/4 ? true
Sorted: 1/3 1/2 3/4 5/6
```

### Dry Run --- Comparison of `1/2` and `3/4`

| Step | Expression | Resolved As | Computation | Result |
|------|-----------|-------------|-------------|--------|
| 1 | `f1 == f3` | `operator==(f1, f3)` | num=1==2? No; actually 1/2 vs 2/4 normalized = 1/2 == 1/2 -> true | true |
| 2 | `f1 < f2` | `operator<(f1, f2)` | 1*4 &lt; 3*2 -&gt; 4 &lt; 6 -&gt; true | true |
| 3 | `f1 != f2` | `operator!=(f1, f2)` | !(f1 == f2) -> !(1/2 == 3/4) -> !false | true |
| 4 | `f2 > f1` | `operator>(f2, f1)` | rhs &lt; lhs -&gt; f1 &lt; f2 -&gt; true | true |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator==` (Fraction) | O(1) | Two integer comparisons after normalization |
| `operator<` (Fraction) | O(1) | Cross-multiplication: 2 multiplications |
| Sorting N Fractions | O(N log N) | N comparisons [N] O(1) each |
| Derived operators (`!=`, `>`, `<=`, `>=`) | O(1) | Single negation of base comparison |

### WHY Derive `!=` from `==`

Duplicating logic across all six operators violates DRY. If the equality check ever changes (e.g., adding epsilon-tolerance for floating-point fields), every operator would need updating. Deriving ensures consistency: change `==`, and all five others automatically follow.

---

## 6.6 Overloading Increment and Decrement

> **One-Sentence Takeaway:** Prefix `++` returns a reference to the incremented object; postfix `++` returns a copy of the original value --- always prefer prefix for non-trivial types.

### Real-World Analogy --- Odometer vs Snapshot

Prefix `++` is like a car odometer --- it advances and you see the new value immediately. Postfix `++` is like taking a photograph first, then advancing the odometer --- you keep the old value as a record.

### Numbered Steps

1. Prefix `++`: Take no parameters, increment, return `*this` by reference
2. Postfix `++`: Take a dummy `int` parameter (unused), save a copy, increment via prefix, return the saved copy
3. Prefix `--`: Same as prefix `++` but decrement
4. Postfix `--`: Same as postfix `++` but decrement

### Pseudocode

```
class T {
    member operator++() -> T&:         // prefix ++x
        ++this.data
        return this

    member operator++(int) -> T:        // postfix x++
        old = copy(this)
        ++(*this)                       // call prefix
        return old

    member operator--() -> T&:         // prefix --x
        --this.data
        return this

    member operator--(int) -> T:        // postfix x--
        old = copy(this)
        --(*this)                       // call prefix
        return old
}
```

### Full Code --- Custom Iterator-Like Counter

```cpp
#include <iostream>
#include <vector>

class Counter {
public:
    explicit Counter(int start = 0) : count_(start) {}

    // Prefix ++
    Counter& operator++() {
        ++count_;
        return *this;
    }

    // Postfix ++ (int is dummy parameter)
    Counter operator++(int) {
        Counter old(*this);
        ++(*this);          // call prefix
        return old;
    }

    // Prefix --
    Counter& operator--() {
        --count_;
        return *this;
    }

    // Postfix --
    Counter operator--(int) {
        Counter old(*this);
        --(*this);
        return old;
    }

    int value() const { return count_; }

private:
    int count_;
};

int main() {
    Counter c(10);

    std::cout << "Start: " << c.value() << "\n";
    std::cout << "Prefix ++c: " << (++c).value() << "\n";
    std::cout << "After prefix: " << c.value() << "\n";

    Counter d(20);
    std::cout << "\nStart: " << d.value() << "\n";
    std::cout << "Postfix d++: " << (d++).value() << "\n";
    std::cout << "After postfix: " << d.value() << "\n";

    // Practical use in iteration
    std::vector<int> nums = {10, 20, 30};
    auto it = nums.begin();
    std::cout << "\nIterator style:\n";
    std::cout << "*it++ = " << *(it++) << "\n";
    std::cout << "*it = " << *it << "\n";
}
```

**Output:**
```
Start: 10
Prefix ++c: 11
After prefix: 11

Start: 20
Postfix d++: 20
After postfix: 21

Iterator style:
*it++ = 10
*it = 20
```

### Dry Run --- Prefix vs Postfix

| Step | Expression | What Happens | c.value() |
|------|-----------|-------------|-----------|
| 1 | Initial state | --- | 10 |
| 2 | `++c` | `operator++()` called: count_ becomes 11, returns `*this` | 11 |
| 3 | `.value()` called on result | Reads returned object's count_ | 11 |
| 4 | `d++` | `operator++(int)` called: saves copy (20), calls `++(*this)` -> 21, returns old copy | 21 (but returned value is 20) |

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|---------------|------------------|-----|
| Prefix `++` | O(1) | O(1) | Direct increment, no copy |
| Postfix `++` | O(1) + copy | O(1) + sizeof(T) | Must copy original state |
| Prefix `--` | O(1) | O(1) | Same as prefix `++` |
| Postfix `--` | O(1) + copy | O(1) + sizeof(T) | Same as postfix `++` |

### WHY Prefer Prefix

For a simple `int`, the cost difference is negligible. But for an iterator walking a `std::list` node-by-node, postfix `++` copies the iterator (a pointer + some state), while prefix does not. In tight loops, this matters.

**Rule of thumb:** Always use prefix unless you specifically need the old value. `for (auto it = v.begin(); it != v.end(); ++it)` --- prefix.

---

## 6.7 Overloading Stream Operators

> **One-Sentence Takeaway:** Stream `<<` and `>>` must be non-member functions returning a stream reference to support chaining; they typically need friend access.

### Real-World Analogy --- A Factory Assembly Line

Think of `<<` as putting an object onto a conveyor belt (output stream) --- the belt keeps moving, and you can put more objects after it. `>>` is like taking raw materials off the belt to build an object --- the belt hands you pieces one at a time.

### Numbered Steps

1. **Output `<<`**: Accept `std::ostream&` and `const T&`; write to the stream; return `std::ostream&`
2. **Input `>>`**: Accept `std::istream&` and `T&` (non-const); read from the stream into the object; return `std::istream&`
3. **Friend declaration**: Declare both as `friend` inside the class if they need private member access

### Pseudocode

```
// Output
non-member operator<<(ostream& os, const T& obj) -> ostream&:
    os << obj.field1 << " " << obj.field2
    return os

// Input
non-member operator>>(istream& is, T& obj) -> istream&:
    is >> obj.field1 >> obj.field2
    return is
```

### Full Code --- Date with Stream I/O

```cpp
#include <iostream>
#include <iomanip>
#include <sstream>

class Date {
public:
    Date(int y = 1970, int m = 1, int d = 1)
        : year_(y), month_(m), day_(d) {}

    friend std::ostream& operator<<(std::ostream& os, const Date& dt);
    friend std::istream& operator>>(std::istream& is, Date& dt);

private:
    int year_, month_, day_;
};

std::ostream& operator<<(std::ostream& os, const Date& dt) {
    os << std::setfill('0')
       << dt.year_ << "-"
       << std::setw(2) << dt.month_ << "-"
       << std::setw(2) << dt.day_;
    return os;
}

std::istream& operator>>(std::istream& is, Date& dt) {
    char dash1, dash2;
    is >> dt.year_ >> dash1 >> dt.month_ >> dash2 >> dt.day_;
    if (!is || dash1 != '-' || dash2 != '-') {
        is.setstate(std::ios::failbit);
    }
    return is;
}

int main() {
    Date d(2024, 12, 25);
    std::cout << "Date: " << d << "\n";

    // Chaining
    Date d1(2024, 1, 1), d2(2024, 12, 31);
    std::cout << "Range: [" << d1 << "] to [" << d2 << "]\n";

    // Input
    std::string input = "2024-03-15";
    std::istringstream iss(input);
    Date parsed;
    if (iss >> parsed) {
        std::cout << "Parsed: " << parsed << "\n";
    }

    // String stream
    std::ostringstream oss;
    oss << d;
    std::string str = oss.str();
    std::cout << "String: " << str << "\n";
}
```

**Output:**
```
Date: 2024-12-25
Range: [2024-01-01] to [2024-12-31]
Parsed: 2024-03-15
String: 2024-12-25
```

### Dry Run --- Stream Operations

| Step | Expression | Stream State | Return Value |
|------|-----------|-------------|--------------|
| 1 | `std::cout << d` | Writes "2024-12-25" | `std::cout` (reference) |
| 2 | `oss << d` | oss buffer = "2024-12-25" | `oss` (reference) |
| 3 | `iss >> parsed` | Reads 2024, '-', 03, '-', 15 | `iss` (reference) |
| 4 | Check `if (iss)` | failbit not set -> true | --- |
| 5 | `std::cout << parsed` | Writes "2024-03-15" | `std::cout` |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator<<` (simple) | O(k) where k = output length | Formatted output per field |
| `operator>>` (simple) | O(k) where k = input length | Formatted input per field |
| Chaining N operators | O(N*k) | Each op writes/reads independently |

### WHY Stream Operators Must Be Non-Members

The left operand of `<<` is `std::ostream&`, not your class type. If `operator<<` were a member of `Date`, the call would be `d << std::cout` --- backwards from the natural `std::cout << d`. Non-member form fixes the operand order.

---

## 6.8 Overloading Subscript `[]`

> **One-Sentence Takeaway:** `operator[]` must return a reference to support `a[i] = value`; provide const and non-const overloads.

### Real-World Analogy --- A Mailbox Array

An apartment building has numbered mailboxes. You write `mailboxes[3]` to access mailbox #3. You can both read what's inside (`cout << mailboxes[3]`) and put something inside (`mailboxes[3] = "letter"`). This read-write duality is exactly what `operator[]` enables.

### Numbered Steps

1. Non-const version returns `T&` --- enables both reading and writing
2. Const version returns `const T&` --- enables reading-only on const objects
3. Add bounds checking (or document that it's unchecked, like raw arrays)
4. For associative containers, `[]` may create entries on access (like `std::map`)

### Pseudocode

```
class T {
    member operator[](size_t index) -> ValueType&:
        if index >= size: throw out_of_range
        return data[index]

    member operator[](size_t index) const -> const ValueType&:
        if index >= size: throw out_of_range
        return data[index]
}
```

### Full Code --- SafeArray with Subscript

```cpp
#include <iostream>
#include <stdexcept>
#include <string>

class SafeArray {
public:
    SafeArray(size_t size)
        : size_(size), data_(new int[size_]())
    {}

    ~SafeArray() { delete[] data_; }

    // Non-const subscript --- read/write
    int& operator[](size_t index) {
        if (index >= size_) {
            throw std::out_of_range("Index " + std::to_string(index)
                + " out of range [0, " + std::to_string(size_) + ")");
        }
        return data_[index];
    }

    // Const subscript --- read only
    const int& operator[](size_t index) const {
        if (index >= size_) {
            throw std::out_of_range("Index " + std::to_string(index)
                + " out of range [0, " + std::to_string(size_) + ")");
        }
        return data_[index];
    }

    size_t size() const { return size_; }

private:
    size_t size_;
    int* data_;

    // Prevent copying
    SafeArray(const SafeArray&) = delete;
    SafeArray& operator=(const SafeArray&) = delete;
};

int main() {
    SafeArray arr(5);

    // Write via subscript
    for (size_t i = 0; i < arr.size(); ++i) {
        arr[i] = static_cast<int>(i * 10);
    }

    // Read via subscript
    std::cout << "Array contents: ";
    for (size_t i = 0; i < arr.size(); ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << "\n";

    // Modifying existing element
    arr[2] = 99;
    std::cout << "After arr[2] = 99: " << arr[2] << "\n";

    // Const access
    const SafeArray& carr = arr;
    std::cout << "First element: " << carr[0] << "\n";
    // carr[0] = 5; // ERROR: const reference returned

    // Bounds check
    try {
        arr[100] = 0;
    } catch (const std::out_of_range& e) {
        std::cout << "Exception: " << e.what() << "\n";
    }
}
```

**Output:**
```
Array contents: 0 10 20 30 40
After arr[2] = 99: 99
First element: 0
Exception: Index 100 out of range [0, 5)
```

### Dry Run --- Subscript Operator Resolution

| Step | Expression | Overload Selected | Returns | Effect |
|------|-----------|------------------|---------|--------|
| 1 | `arr[i] = i*10` | `int& operator[](size_t)` | Reference to data_[i] | Write: modifies array |
| 2 | `std::cout << arr[i]` | `int& operator[](size_t)` | Reference to data_[i] | Read: prints value |
| 3 | `carr[0]` | `const int& operator[](size_t) const` | Const ref to data_[0] | Read only |
| 4 | `arr[100]` | Checks `100 >= 5` | Throws `std::out_of_range` | Exception thrown |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator[]` (bounded) | O(1) | Single bounds check + pointer arithmetic |
| `operator[]` (unbounded) | O(1) | Just pointer arithmetic |
| Bounds check overhead | O(1) | Single integer comparison + conditional |

### WHY Return a Reference

Without a reference return, `arr[i] = value` would modify a temporary copy. The expression `arr[i]` must be an *lvalue* (something that can appear on the left side of `=`). Returning `int&` makes it an lvalue; returning `int` makes it an rvalue.

---

## 6.9 Overloading Function Call `()`

> **One-Sentence Takeaway:** `operator()` creates functors (function objects) that can maintain state between calls and be used with STL algorithms.

### Real-World Analogy --- A Coffee Machine with Presets

A coffee machine remembers your settings (strength, size, temperature). Every time you press the brew button `()`, it uses the stored settings to make coffee. The machine itself is a "function object" --- stateful, reusable, customizable.

### Numbered Steps

1. Define `operator()` with desired parameters and return type
2. Store configuration in the object's member variables
3. The object can now be called like a function: `myFunctor(args)`
4. Use with STL algorithms that accept callables

### Pseudocode

```
class T {
    member operator()(Params...) -> ReturnType:
        // use this->state to compute result
        return computed_value
}
```

### Full Code --- Functor Examples

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

// Functor with state
class Adder {
public:
    explicit Adder(int inc) : increment_(inc) {}

    int operator()(int x) const {
        return x + increment_;
    }

private:
    int increment_;
};

// Stateless functor for STL
class EvenFirst {
public:
    bool operator()(int a, int b) const {
        if ((a % 2) != (b % 2)) {
            return (a % 2) == 0;  // evens before odds
        }
        return a < b;              // otherwise ascending
    }
};

int main() {
    // Functor with state
    Adder add5(5);
    Adder add10(10);

    std::cout << "add5(3) = " << add5(3) << "\n";
    std::cout << "add10(3) = " << add10(3) << "\n";

    // Functor as callable argument
    std::vector<int> nums = {1, 2, 3, 4, 5};
    std::cout << "Plus 10: ";
    std::transform(nums.begin(), nums.end(), nums.begin(), add10);
    for (int n : nums) std::cout << n << " ";
    std::cout << "\n";

    // Functor for custom sort
    std::vector<int> data = {3, 1, 4, 2, 5};
    std::sort(data.begin(), data.end(), EvenFirst{});
    std::cout << "Even-first sort: ";
    for (int n : data) std::cout << n << " ";
    std::cout << "\n";

    // Lambda (syntactic sugar for functor)
    auto multiplier = [](int a, int b) { return a * b; };
    std::cout << "Lambda: multiplier(6, 7) = " << multiplier(6, 7) << "\n";
}
```

**Output:**
```
add5(3) = 8
add10(3) = 13
Plus 10: 11 12 13 14 15
Even-first sort: 2 4 1 3 5
Lambda: multiplier(6, 7) = 42
```

### Dry Run --- Adder Functor

| Step | Expression | What Happens | Result |
|------|-----------|-------------|--------|
| 1 | `Adder add5(5)` | Constructor: increment_ = 5 | add5 object created |
| 2 | `add5(3)` | `operator()(3)` called; returns 3 + 5 | 8 |
| 3 | `add10(3)` | `operator()(3)` called on different instance; returns 3 + 10 | 13 |
| 4 | `std::transform(..., add10)` | For each element `n`, calls `add10(n)` | {11, 12, 13, 14, 15} |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator()(int)` (Adder) | O(1) | Single addition |
| `std::transform` with functor | O(N) | One functor call per element |
| Custom sort with comparator | O(N log N) | Comparator called for each comparison |

### WHY Functors Over Function Pointers

Functors can store state (configuration, counters, cached values), while function pointers carry zero state. STL algorithms inline functor calls better because the compiler sees the complete type, not just a pointer. Lambdas in C++11+ are syntactic sugar that compile to anonymous functors.

---

## 6.10 Type Conversion Operators

> **One-Sentence Takeaway:** Conversion operators `operator T()` define implicit conversions from your type to T --- always mark single-argument conversions and `operator bool()` as `explicit` in modern C++.

### Real-World Analogy --- A Universal Adapter

A universal power adapter converts the plug shape from one standard to another. It works automatically (implicitly) when you plug in, but you need a physical switch (`explicit`/`static_cast`) for dangerous conversions that could damage equipment.

### Numbered Steps

1. Decide which target types are safe for implicit conversion
2. For safe targets, define `operator TargetType() const` --- implicit
3. For risky or narrowing targets, prefix with `explicit` (C++11+)
4. Always mark `operator bool()` as `explicit` to prevent unintended arithmetic
5. Provide `static_cast` as the escape hatch for explicit conversions

### Pseudocode

```
class T {
    // Implicit conversion to U
    member operator U() const -> U:
        return U(field1, field2)

    // Explicit conversion to V (C++11+)
    explicit member operator V() const -> V:
        return static_cast<V>(field1)
}
```

### Full Code --- Safe Conversions

```cpp
#include <iostream>
#include <string>

class Percentage {
public:
    explicit Percentage(double value) : value_(value) {}

    // Safe: implicit double conversion (no narrowing for most uses)
    operator double() const {
        return value_;
    }

    // EXPLICIT: prevent accidental int truncation
    explicit operator int() const {
        return static_cast<int>(value_ + 0.5);  // round, not truncate
    }

    // EXPLICIT bool: prevent accidental integer promotion
    explicit operator bool() const {
        return value_ > 0.0;
    }

    // String representation
    std::string toString() const {
        return std::to_string(value_) + "%";
    }

private:
    double value_;
};

int main() {
    Percentage pct(75.3);

    // Implicit double conversion OK
    double d = pct;
    std::cout << "Double: " << d << "\n";

    // Explicit int requires static_cast
    int i = static_cast<int>(pct);
    std::cout << "Int (rounded): " << i << "\n";

    // Explicit bool --- works in boolean context
    if (pct) {
        std::cout << pct.toString() << " is positive\n";
    }

    Percentage zero(0.0);
    if (!zero) {
        std::cout << "Zero is falsy\n";
    }

    // This would fail: int x = pct; // ERROR if explicit
    // This would fail: pct + 5;     // ERROR if explicit bool

    // Multiple conversion targets
    Percentage a(50.0), b(25.0);
    double sum = a + b;   // both convert to double, then added
    std::cout << "Sum: " << sum << "\n";
}
```

**Output:**
```
Double: 75.3
Int (rounded): 75
75.300000% is positive
Zero is falsy
Sum: 75
```

### Dry Run --- Conversion Resolution

| Step | Expression | Conversion Path | Result | Why |
|------|-----------|-----------------|--------|-----|
| 1 | `double d = pct` | `operator double()` called | 75.3 | Implicit, safe |
| 2 | `static_cast<int>(pct)` | `operator int()` called | 75 | Explicit, must cast |
| 3 | `if (pct)` | `operator bool()` called, result true | condition true | Explicit OK in bool context |
| 4 | `a + b` | Both convert to double via `operator double()` | 75.0 | Only common type |
| 5 | `int x = pct` | No viable conversion | Compile error | `operator int()` is explicit |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator double()` | O(1) | Read member, return |
| `operator int()` | O(1) | Read, round, return |
| `operator bool()` | O(1) | Single comparison |
| Arithmetic via conversion | O(1) | Convert both operands, then built-in op |

### WHY Mark `operator bool()` Explicit

Without `explicit`, `operator bool()` enables a cascade of unintended promotions: `bool` -> `int` -> `float` -> `double`. This means `pct + 5` would compile (converting the object to bool, then to int), producing garbage. `explicit operator bool()` restricts usage to boolean contexts (conditions in `if`, `while`, `for`, `&&`, `||`, `!`).

---

## 6.11 Overloading Assignment `=` and `new`/`delete`

> **One-Sentence Takeaway:** `operator=` must be a member function returning `T&` to support chaining; `operator new`/`delete` control per-class memory allocation.

### 6.11.1 Assignment Operator `=`

### Real-World Analogy --- Copying a Document

When you copy a document (a = b), you want the copy to be independent of the original --- changes to one should not affect the other. This is deep copying. Shallow copying (just sharing a pointer) is like giving someone a link to your Google Doc instead of an actual copy.

### Numbered Steps

1. **Self-assignment check**: Guard against `a = a`
2. **Release old resources**: Delete existing allocated memory
3. **Allocate and copy**: Deep-copy the source's resources
4. **Return `*this`**: By reference for chaining (`a = b = c`)

### Pseudocode

```
class T {
    member operator=(const T& other) -> T&:
        if this != &other:              // self-assignment check
            delete this.resource        // release old
            this.resource = copy(other.resource)  // deep copy
        return this
}
```

### Full Code --- String with Assignment

```cpp
#include <iostream>
#include <cstring>

class MyString {
public:
    MyString(const char* s = "")
        : size_(std::strlen(s))
    {
        data_ = new char[size_ + 1];
        std::memcpy(data_, s, size_ + 1);
    }

    ~MyString() { delete[] data_; }

    // Copy assignment
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] data_;                     // release old
            size_ = other.size_;
            data_ = new char[size_ + 1];        // allocate new
            std::memcpy(data_, other.data_, size_ + 1);  // copy
        }
        return *this;                           // return for chaining
    }

    // Copy-and-swap idiom (strong exception safety)
    void swap(MyString& other) noexcept {
        std::swap(data_, other.data_);
        std::swap(size_, other.size_);
    }

    MyString& operator=(MyString other) {  // pass by value (copy)
        swap(other);
        return *this;
    }

    const char* c_str() const { return data_; }

private:
    char* data_;
    size_t size_;
};

int main() {
    MyString s1("Hello");
    MyString s2("World");
    MyString s3("C++");

    s1 = s2;            // basic assignment
    std::cout << "s1 = " << s1.c_str() << "\n";

    s1 = s2 = s3;       // chaining
    std::cout << "s1 = " << s1.c_str() << "\n";
    std::cout << "s2 = " << s2.c_str() << "\n";

    s1 = s1;            // self-assignment (must be safe)
    std::cout << "Self-assignment: " << s1.c_str() << "\n";
}
```

**Output:**
```
s1 = World
s1 = C++
s2 = C++
Self-assignment: C++
```

### 6.11.2 Overloading `new` and `delete`

### Real-World Analogy --- A Custom Locker System

Instead of using the school's general storage room (global heap), a sports club installs its own lockers (custom pool) sized for sports equipment. Members (`operator new`) get a locker from this custom pool, and returning equipment (`operator delete`) puts the locker back.

### Numbered Steps

1. Declare `static void* operator new(size_t size)` --- allocates memory
2. Declare `static void operator delete(void* ptr)` --- deallocates memory
3. The class automatically uses these for all allocations
4. Useful for memory pooling, alignment control, or tracking

### Full Code --- Class-Specific Allocator

```cpp
#include <iostream>
#include <cstdlib>

struct Tracked {
    static int alloc_count;
    static int dealloc_count;

    int id = 0;

    static void* operator new(size_t size) {
        ++alloc_count;
        std::cout << "Tracked::new(" << size << ") --- allocation #"
                  << alloc_count << "\n";
        return std::malloc(size);
    }

    static void operator delete(void* ptr) {
        ++dealloc_count;
        std::cout << "Tracked::delete --- deallocation #"
                  << dealloc_count << "\n";
        std::free(ptr);
    }
};

int Tracked::alloc_count = 0;
int Tracked::dealloc_count = 0;

int main() {
    Tracked* p1 = new Tracked();
    Tracked* p2 = new Tracked();

    delete p1;
    delete p2;

    std::cout << "Total allocations: " << Tracked::alloc_count << "\n";
    std::cout << "Total deallocations: " << Tracked::dealloc_count << "\n";
}
```

**Output:**
```
Tracked::new(4) --- allocation #1
Tracked::new(4) --- allocation #2
Tracked::delete --- deallocation #1
Tracked::delete --- deallocation #2
Total allocations: 2
Total deallocations: 2
```

### Dry Run --- Assignment Operator

| Step | Expression | State Before | Action | State After |
|------|-----------|-------------|--------|-------------|
| 1 | `s1 = s2` | s1="Hello", s2="World" | Self-check: `&s1 != &s2` true | --- |
| 2 | --- | --- | delete[] s1.data_ (frees "Hello") | s1.data_ = dangling |
| 3 | --- | --- | allocate new char[6] | s1.data_ = new buffer |
| 4 | --- | --- | memcpy "World\0" into s1.data_ | s1 = "World" |
| 5 | return | --- | return *this | chaining enabled |
| 6 | `s1 = s1` | s1 = same | Self-check: `this == &other` true | No-op, safe |

### Complexity Analysis

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| `operator=` (copy) | O(n) | n = length of string; must allocate + copy |
| `operator=` (copy-and-swap) | O(n) | Copy + 2 pointer swaps |
| Self-assignment check | O(1) | Single pointer comparison |
| `operator new` (trivial) | O(1) | Forward to malloc |
| `operator delete` (trivial) | O(1) | Forward to free |
| Custom pool allocator | O(1) amortized | Pre-allocated block, O(1) list operations |

### WHY Assignment Returns `T&`

Returning a reference enables `a = b = c`, which evaluates right-to-left: `b = c` returns `T&` referring to `b`, then `a = b`. Returning by value would require an extra copy. Returning `void` would break the pattern entirely.
---

## 6.12 Operator Overloading Limitations

> **One-Sentence Takeaway:** Operator overloading cannot change operator fundamentals (precedence, associativity, arity), cannot add new operators, and several operators are permanently off-limits to preserve language safety.

### Real-World Analogy --- Traffic Rules

You can customize your car (paint, wheels, sound system) --- that's operator overloading. But you cannot change the rules of the road: red means stop, you drive on the right side, speed limits apply. The language's operator rules are the rules of the road.

### Numbered Limitations

1. **Cannot change precedence**: `a + b * c` always multiplies first
2. **Cannot change associativity**: `a - b - c` always groups left-to-right
3. **Cannot change arity**: `+` is always binary; `!` is always unary
4. **Cannot create new operator tokens**: No `**`, `<>`, or `<=>` (until C++20, which made `<=>` a built-in token)
5. **Cannot overload operators on built-in types alone**: `int + int` is fixed
6. **Cannot guarantee short-circuit evaluation**: `&&` and `||` lose short-circuit semantics when overloaded
7. **Cannot overload operator with all built-in operands**: At least one user-defined type required
8. **Cannot make operators virtual by default**: Virtual dispatch for operators requires explicit `virtual` declaration
9. **Cannot have non-member `=` `()` `[]` `->`**: These must be members
10. **Cannot control implicit conversion sequences**: Conversion operators participate in standard rank-based overload resolution

### The Short-Circuit Trap

```cpp
#include <iostream>

struct Guard {
    bool value_;
    explicit Guard(bool v) : value_(v) {}

    bool operator&&(const Guard& other) const {
        std::cout << "Both evaluated!\n";
        return value_ && other.value_;
    }
};

int main() {
    Guard a(false), b(true);

    // Built-in short-circuit: b is never evaluated
    bool builtin = false && (std::cout << "Won't print\n", true);

    // Overloaded: BOTH operands evaluated before operator&& runs
    Guard result = a && b;  // prints "Both evaluated!"
}
```

**Output:**
```
Both evaluated!
```

Both `a` and `b` are fully evaluated before `Guard::operator&&` executes. The short-circuit behavior of built-in `&&` is lost.

### Complexity Analysis

| Limitation | Impact | Mitigation |
|-----------|--------|------------|
| No new operators | Some domains (regex, matrix) lack natural syntax | Use named functions: `a.dot(b)` instead of `a * b` |
| Fixed precedence | `a << b + c` parses as `(a << b) + c`, not `a << (b + c)` | Add parentheses explicitly |
| Lost short-circuit | Overloaded `&&` and `||` always evaluate both sides | Avoid overloading `&&` and `||` on types with side effects |
| Must be member | `=`, `()`, `[]`, `->` cannot be non-member | Language design ensures left operand = `*this` for these |

---

## 6.13 Operators That Cannot Be Overloaded

> **One-Sentence Takeaway:** The operators `::`, `.`, `.*`, `?:`, `sizeof`, `typeid`, `alignof`, `static_cast`, `dynamic_cast`, `const_cast`, `reinterpret_cast`, and `noexcept` cannot be overloaded --- they preserve core language safety and identity semantics.

### Comprehensive Table with Reasons

| Operator | Name | Reason It Cannot Be Overloaded |
|----------|------|-------------------------------|
| `::` | Scope resolution | The left operand is a namespace or class name, not an expression with a value. Overloading would require changing name lookup rules --- the foundation of C++'s type system. |
| `.` | Direct member access | Must always refer to an actual member of the object. Overloading would break the fundamental guarantee that `obj.member` accesses exactly that member. |
| `.*` | Pointer-to-member access | Same as `.` --- must always resolve to an actual member. The whole point is compile-time member resolution. |
| `?:` | Ternary conditional | Arity 3. C++ has no mechanism for ternary operator overloading; introducing one would require rewriting the expression parser. Also, short-circuit behavior is essential. |
| `sizeof` | Object size | Must return the actual compile-time size in bytes. Overloading would break template metaprogramming, array allocation, and serialization. |
| `typeid` | Runtime type identification | Must return the actual `std::type_info` for the object's dynamic type. Overloading would break RTTI --- a core safety feature. |
| `alignof` | Alignment requirement | Must return actual alignment. Overloading would break memory allocation and placement new correctness. |
| `static_cast` | Static type conversion | Conversion between related types must be known at compile time. Overloading would interfere with implicit conversion sequences. |
| `dynamic_cast` | Dynamic type conversion | Safe downcasting depends on the actual vtable structure. Overloading would break type safety. |
| `const_cast` | Const removal | Const-correctness enforcement. Overloading would let user code subvert const guarantees. |
| `reinterpret_cast` | Reinterpret conversion | Bit-level reinterpretation depends on actual object representation. Overloading would create an inconsistent type system. |
| `noexcept` | Exception specification query | Must reflect the actual noexceptness of an expression. Overloading would break `noexcept`-based SFINAE and move optimizations. |
| `#` / `##` | Preprocessor operators | These operate at the preprocessor level (token manipulation), not on runtime values. Operator overloading is a compile-time/runtime feature. |
| `.` (dot) | C++ member access | Unlike `->` (which can be overloaded), direct `.` access is an invariant of the language's type system. |

### Deep Reasoning for Each

#### `::` --- Scope Resolution
```cpp
// Cannot overload: must always mean "look up name in this scope"
std::vector<int> v;    // :: finds std namespace
MyClass::Nested n;     // :: finds nested type
```
If `::` were overloadable, type lookup would become ambiguous --- is `A::B` a member of A's scope, or a call to A's `operator::`?

#### `.` --- Direct Member Access
```cpp
struct S { int x; };
S s;
s.x = 42;  // Must mean actual member x
```
The `.` operator has one operand that is an object and the other a member name --- not a value. The second "operand" is not an expression; it's an identifier resolved at compile time.

#### `?:` --- Ternary Conditional
```cpp
// Built-in: only one branch evaluated
int result = (condition) ? expr_true : expr_false;
```
If overloaded, both branches would be evaluated before the operator runs --- defeating the purpose of a conditional.

#### `sizeof` --- Size Of
```cpp
template<typename T>
void copy_array(T* dst, const T* src) {
    std::memcpy(dst, src, sizeof(T) * N);  // Must be actual size
}
```
Template code universally assumes `sizeof(T)` is the actual object size. Overloading would silently break all template libraries.

### Code Example --- Dangerous Toys (If These Could Be Overloaded)

```cpp
// THIS CODE IS ILLUSTRATIVE --- overloads would NOT compile
// Showing why the prohibition exists

struct Dangerous {
    // If sizeof could be overloaded...
    // int operator sizeof() { return 1; }  // ERROR: illegal
};

// What would break:
// int buf[sizeof(Dangerous)];  // array could be wrong size
// new Dangerous;               // allocator could get wrong size
// memcpy(&a, &b, sizeof(a));  // could copy wrong amount
```

### When Attempting to Overload

```cpp
struct S {
    // int operator.(int) { return 0; }   // ERROR
    // int operator::(int) { return 0; }  // ERROR
    // int operator?:(bool, int) { return 0; }  // ERROR
};
```

Each of these produces a compiler error: "cannot overload the unoverloadable."

---

## 6.14 Return Type Conventions

> **One-Sentence Takeaway:** Return type conventions signal intent --- references for lvalue semantics, values for rvalue semantics, `bool` for comparisons, `void` for side-effect-only operators.

### Comprehensive Table

| Operator Category | Operators | Return Type Convention | Why |
|------------------|-----------|----------------------|-----|
| Arithmetic binary | `+`, `-`, `*`, `/`, `%` | `T` by value | Creates a new object; returning reference would alias a temporary |
| Arithmetic compound | `+=`, `-=`, `*=`, `/=`, `%=` | `T&` | Modifies and returns `*this` --- enables `a = b += c` |
| Unary arithmetic | `+`, `-` | `T` by value | Negation/identity produce new values |
| Increment prefix | `++`, `--` (prefix) | `T&` | Returns the object itself after modification |
| Increment postfix | `++`, `--` (postfix) | `T` by value | Returns the original state before modification |
| Comparison | `==`, `!=`, `<`, `<=`, `>`, `>=` | `bool` | These are predicates; `bool` is the only sensible return type |
| Logical | `&&`, `||`, `!` | `bool` | Predicates; but beware lost short-circuit |
| Bitwise | `&`, `|`, `^`, `~`, `<<`, `>>` | `T` by value | Bitwise operations produce new values |
| Bitwise compound | `&=`, `|=`, `^=`, `<<=`, `>>=` | `T&` | Modifies and returns `*this` |
| Stream output | `<<` | `std::ostream&` | Returns stream for chaining |
| Stream input | `>>` | `std::istream&` | Returns stream for chaining |
| Subscript | `[]` | `T&` (non-const), `const T&` (const) | Lvalue access; enables `a[i] = v` |
| Function call | `()` | Any | Depends on semantics --- what the functor computes |
| Dereference | `*`, `->` | `T&`, `T*` | Pointer-like access |
| Address-of | `&` | `T*` or smart pointer | Returns pointer to the object |
| Assignment | `=` | `T&` | Returns `*this` for chaining |
| Type conversion | `operator T()` | `T` | Implicitly returns the converted value |
| `new` | `operator new` | `void*` | Returns raw memory pointer |
| `delete` | `operator delete` | `void` | Frees memory, nothing to return |

### Why These Conventions Exist

**Returning `T&` (reference)** signals that the returned value is an *lvalue* --- it has an identity, an address, and can be assigned to. Used for operators that modify the object (`+=`, `=`, prefix `++`).

**Returning `T` (value)** signals that the returned value is an *rvalue* --- a temporary that may be moved or copied. Used for operators that compute new values (`+`, postfix `++`).

**Returning `bool`** signals a predicate --- the operator checks a condition but does not produce a meaningful value beyond true/false.

### Anti-Pattern --- Wrong Return Type

```cpp
struct Bad {
    int value_;
    
    // WRONG: returning void breaks chaining
    void operator+=(const Bad& rhs) { value_ += rhs.value_; }
    
    // WRONG: returning by value for prefix ++
    Bad operator++() { ++value_; return *this; }
    // This copies, ignoring the convention
};
```

---

## 6.15 Operator Overloading Guidelines

> **One-Sentence Takeaway:** Follow the Principle of Least Surprise --- an overloaded operator should mean what users expect from its built-in counterpart.

### Guideline 1 --- When in Doubt, Do as the Ints Do

If your `+` operator doesn't behave like built-in `+`, your users will be confused. The built-in operators define the contract.

```cpp
// GOOD: + creates a new object, += modifies in place
Money operator+(Money a, const Money& b) { return a += b; }
Money& operator+=(const Money& b) { amount_ += b.amount_; return *this; }

// BAD: + modifies the left operand
Money operator+(Money& a, const Money& b) { return a += b; }  // side effect!
```

### Guideline 2 --- Implement `+` in Terms of `+=`

The binary version is a non-member that copies, applies compound, and returns the copy. This avoids code duplication and ensures consistent behavior.

```cpp
// Member
T& T::operator+=(const T& rhs) { /* modify *this */ return *this; }

// Non-member (one implementation for all binary operators)
T operator+(T lhs, const T& rhs) { lhs += rhs; return lhs; }
```

### Guideline 3 --- Provide `const` and Non-`const` Overloads

For subscript `[]` and dereference `*`, both versions are needed for full usability.

```cpp
T& operator[](size_t i) { return data_[i]; }
const T& operator[](size_t i) const { return data_[i]; }
```

### Guideline 4 --- Prefer Non-Member for Symmetric Operators

Operators with symmetric operands (`==`, `<`, `+` --- when both sides can convert) should be non-members to allow left-side conversions.

```cpp
// BAD: String("hello") == "world" OK, but "world" == String("hello") fails
class String { bool operator==(const String&) const; };

// GOOD: both directions work via implicit conversion
bool operator==(const String& a, const String& b);
```

### Guideline 5 --- Never Overload `&&`, `||`, or `,`

These operators lose their special semantics when overloaded:
- `&&` and `||` lose short-circuit evaluation
- `,` loses left-to-right evaluation order

### Guideline 6 --- Always Handle Self-Assignment

```cpp
T& T::operator=(const T& other) {
    if (this != &other) {  // self-assignment check
        // copy logic
    }
    return *this;
}
```

Or use copy-and-swap (strong exception safety):

```cpp
T& T::operator=(T other) {  // copy passed by value
    swap(other);
    return *this;
}
```

### Guideline 7 --- Keep `operator bool()` Explicit

```cpp
explicit operator bool() const { return valid_; }
```

This prevents unintended promotion to `int` while allowing boolean context usage.

### Guideline 8 --- Don't Overload Operators for Unrelated Semantics

Using `+` for string concatenation is fine (it's associative, commutative-adjacent). Using `+` for set union is questionable (union is more like `|`). Using `+` for database connection is wrong.

### Guideline 9 --- Provide `operator!=` Alongside `operator==`

Even with C++20's `<=>`, it's good practice to ensure `!=` is available and consistent with `==`.

### Guideline 10 --- Document Non-Standard Semantics

If your operator must deviate from built-in behavior, document it explicitly. Users reading `if (a == b)` assume equality, not approximate fuzzy matching.

---

## 6.16 Applications in Real Systems

> **One-Sentence Takeaway:** The C++ standard library's core types (std::string, std::complex, std::vector) demonstrate operator overloading done right --- intuitive, consistent, and powerful.

### 6.16.1 `std::string` --- The Reference Model

`std::string` is arguably the best example of operator overloading in the standard library. Every operator is intuitive:

| Operator | Semantics | Implementation Pattern |
|----------|-----------|----------------------|
| `+` | Concatenation | Non-member, returns `string` |
| `+=` | Append in place | Member, returns `string&` |
| `==` / `!=` | Equality check | Non-member returns `bool` |
| `<` / `<=` / `>` / `>=` | Lexicographic ordering | Non-member returns `bool` |
| `[]` | Character access | Returns `char&` / `const char&` |
| `<<` | Stream output | `ostream&` |
| `>>` | Stream input | `istream&` |

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s1 = "Hello, ";
    std::string s2 = "World!";

    // + for concatenation
    std::string s3 = s1 + s2;
    std::cout << s3 << "\n";       // Output: Hello, World!

    // += for append
    s1 += "C++";
    std::cout << s1 << "\n";       // Output: Hello, C++

    // [] for character access
    s1[0] = 'h';
    std::cout << s1 << "\n";       // Output: hello, C++

    // == and < for comparison
    std::cout << std::boolalpha;
    std::cout << (s1 == s2) << "\n"; // false

    // Mixed string + literal
    std::string s4 = s1 + " rocks!";
    std::cout << s4 << "\n";       // Output: hello, C++ rocks!

    // Iterator-style with ++ on iterators (not string itself)
    for (auto it = s4.begin(); it != s4.end(); ++it) {
        std::cout << *it;
    }
    std::cout << "\n";
}
```

**Output:**
```
Hello, World!
Hello, C++
hello, C++
false
hello, C++ rocks!
hello, C++ rocks!
```

#### Internal Complexity

| Operation | Time Complexity | Memory Complexity | Why |
|-----------|---------------|-------------------|-----|
| `s1 + s2` | O(n + m) | O(n + m) | Allocates new buffer, copies both |
| `s1 += s2` | O(m) amortized | O(1) or O(n+m) | May reallocate if capacity exceeded |
| `s1 == s2` | O(min(n, m)) | O(1) | Character-by-character comparison |
| `s1[n]` | O(1) | O(1) | Direct pointer arithmetic |

### 6.16.2 `std::complex` --- Mathematical Precision

`std::complex` demonstrates operator overloading for mathematical types where every arithmetic operator is defined with exact semantics.

```cpp
#include <iostream>
#include <complex>

int main() {
    std::complex<double> a(3.0, 4.0);
    std::complex<double> b(1.0, 2.0);

    std::cout << "a = " << a << "\n";
    std::cout << "b = " << b << "\n";
    std::cout << "a + b = " << (a + b) << "\n";
    std::cout << "a - b = " << (a - b) << "\n";
    std::cout << "a * b = " << (a * b) << "\n";
    std::cout << "a / b = " << (a / b) << "\n";
    std::cout << "-a = " << (-a) << "\n";
    std::cout << "conj(a) = " << std::conj(a) << "\n";
    std::cout << "abs(a) = " << std::abs(a) << "\n";

    // Mixed with double
    std::cout << "a + 1.0 = " << (a + 1.0) << "\n";
    std::cout << "2.0 * a = " << (2.0 * a) << "\n";

    // Chaining
    std::complex<double> c = a * b + a;
    std::cout << "a * b + a = " << c << "\n";

    // Comparison (C++20: == and != only)
    std::cout << std::boolalpha;
    std::cout << "a == a ? " << (a == a) << "\n";
}
```

**Output:**
```
a = (3,4)
b = (1,2)
a + b = (4,6)
a - b = (2,2)
a * b = (-5,10)
a / b = (2.2,-0.4)
-a = (-3,-4)
conj(a) = (3,-4)
abs(a) = 5
a + 1.0 = (4,4)
2.0 * a = (6,8)
a * b + a = (-2,14)
a == a ? true
```

#### Why `std::complex` Overloads All Arithmetic

`std::complex<double>` without operator overloading would require:
```cpp
// Without operator overloading:
ComplexAdd(a, ComplexMul(b, c));  // confusing, non-standard

// With operator overloading:
a + b * c;  // natural math notation
```

### 6.16.3 `std::vector` --- Container Access

`std::vector` demonstrates subscript `[]`, assignment, and comparison operators for containers.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // operator[] for access
    std::vector<int> v = {10, 20, 30, 40, 50};
    v[2] = 99;                    // write via []
    std::cout << "v[2] = " << v[2] << "\n";  // read via []

    // operator= for assignment
    std::vector<int> v2;
    v2 = v;                       // deep copy
    std::cout << "v2 size: " << v2.size() << "\n";

    // operator== for comparison
    std::vector<int> v3 = {10, 20, 99, 40, 50};
    std::cout << std::boolalpha;
    std::cout << "v == v2 ? " << (v == v2) << "\n";
    std::cout << "v == v3 ? " << (v == v3) << "\n";

    // operator< for ordering
    std::cout << "v < v3 ? " << (v < v3) << "\n";

    // Iterators use ++ and * (operator overloading in iterator classes)
    std::cout << "Elements: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << "\n";

    // Sorting relies on operator<
    std::vector<int> unsorted = {5, 3, 1, 4, 2};
    std::sort(unsorted.begin(), unsorted.end());
    std::cout << "Sorted: ";
    for (int x : unsorted) std::cout << x << " ";
    std::cout << "\n";
}
```

**Output:**
```
v[2] = 99
v2 size: 5
v == v2 ? true
v == v3 ? true
v < v3 ? false
Elements: 10 20 99 40 50
Sorted: 1 2 3 4 5
```

#### Iterator Operator Overloading

Iterators are the unsung heroes of operator overloading. Every `++`, `*`, `->`, `==`, `!=` on an iterator is an overloaded operator:

```cpp
// Simplified iterator concept
template<typename T>
class VectorIterator {
    T* ptr_;
public:
    VectorIterator& operator++() { ++ptr_; return *this; }       // prefix
    VectorIterator operator++(int) { auto old = *this; ++ptr_; return old; }  // postfix
    T& operator*() { return *ptr_; }                             // dereference
    bool operator!=(const VectorIterator& other) const { return ptr_ != other.ptr_; }
};
```

### Comparison Table --- std::string vs std::complex vs std::vector

| Feature | `std::string` | `std::complex` | `std::vector` |
|---------|---------------|----------------|---------------|
| `+` | Concatenation | Complex addition | Not defined (use `insert`) |
| `+=` | Append | Complex add-assign | Not defined |
| `==` | Character equality | Value equality | Element-wise equality |
| `<` | Lexicographic | Not defined (C++17) | Lexicographic element-wise |
| `[]` | `char&` at position | Not defined | `T&` at position |
| `<<` | Stream output | Stream output | Stream output (C++20? prior: format) |
| `++` | Not on string (on iterators) | Not defined | Not on vector (on iterators) |
| `->` | Via iterator | Via smart pointer? | Via iterator |

### Why These Types Succeed

Each type asks: "Does this operator make intuitive sense for what this type represents?"

- `string + string` = concatenation -> intuitive (joins sequences)
- `complex + complex` = addition -> intuitive (mathematical)
- `vector + vector` = ? -> ambiguous (append? element-wise add? union?) -> NOT defined

This is the Principle of Least Surprise in action.

---

## 6.17 Interview Corner

### Q1: When should you implement an operator as a member function vs a non-member function?

**Answer:**

| Condition | Choice | Reason |
|-----------|--------|--------|
| Operator must be `=` `()` `[]` `->` `T()` | **Member** | C++ language mandates these as members |
| Operator modifies `*this` (`+=`, `*=`, prefix `++`) | **Member** | Natural: left operand is `*this` |
| Left operand is not class type (`<<`, `>>`) | **Non-member** | `cout << obj` --- left is `ostream`, not your class |
| Symmetric conversion desired (`+`, `==`, `<`) | **Non-member** | Both operands can undergo implicit conversion |
| Private access needed | **Non-member friend** | Friend declaration grants access |

**Code snippet illustrating the decision:**

```cpp
class Rational {
    int num_, den_;
public:
    // Member: modifies *this
    Rational& operator+=(const Rational& rhs) {
        num_ = num_ * rhs.den_ + rhs.num_ * den_;
        den_ *= rhs.den_;
        return *this;
    }

    // Friend non-member: symmetric conversion
    friend Rational operator+(Rational lhs, const Rational& rhs) {
        return lhs += rhs;
    }
};
```

### Q2: Why are `operator<<` and `operator>>` for streams always implemented as non-member functions?

**Answer:** Because the left operand is `std::ostream&`, not your class type. If `<<` were a member, the call would be `myObj << std::cout`, which is backwards from natural usage `std::cout << myObj`. As a non-member, both operands are explicit parameters, so the natural order works. They typically need `friend` status to access private members.

```cpp
// CORRECT --- non-member
std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
    os << obj.private_field;  // needs friend
    return os;
}

// WRONG --- backwards syntax
// class MyClass { std::ostream& operator<<(std::ostream& os); };
// Usage: myObj << cout;  // non-standard!
```

### Q3: Explain the difference between prefix and postfix `++` in terms of implementation and performance.

**Answer:**

Prefix `++` increments the object and returns a reference to it. Postfix `++` saves a copy of the original, increments the object, and returns the saved copy (by value). The `int` dummy parameter distinguishes them in the signature.

**Performance:**
- Prefix: O(1) with no copy --- just increment and return `*this`
- Postfix: O(1) + copy construction --- must create a temporary

For simple `int`, the difference is negligible. For iterators in tight loops, the copy cost adds up.

```cpp
// Prefix --- efficient
Iterator& Iterator::operator++() {
    ++ptr_;
    return *this;
}

// Postfix --- must copy
Iterator Iterator::operator++(int) {
    Iterator old = *this;  // copy
    ++ptr_;                // increment via prefix
    return old;            // return original
}

// Prefer prefix in loops:
for (auto it = v.begin(); it != v.end(); ++it)  // OK (no copy)
for (auto it = v.begin(); it != v.end(); it++)  // works, but copies
```

### Q4: What is the copy-and-swap idiom and why is it useful for `operator=`?

**Answer:** Copy-and-swap is a technique that implements copy assignment by passing the source by value (creating a copy), then swapping the contents of `*this` with the copy. The copy's destructor then cleans up the old resources.

**Benefits:**
1. **Strong exception safety**: If the copy construction throws, `*this` is unchanged
2. **Code reuse**: The copy constructor and swap function do all the work
3. **Self-assignment safety**: The copy-and-swap pattern handles `a = a` automatically (the extra copy is wasteful but safe)
4. **No code duplication**: One implementation handles both copy and move if the parameter is passed by value

```cpp
class MyString {
    char* data_;
    size_t size_;
public:
    // Copy constructor
    MyString(const MyString& other)
        : size_(other.size_), data_(new char[other.size_ + 1])
    {
        std::memcpy(data_, other.data_, size_ + 1);
    }

    // Destructor
    ~MyString() { delete[] data_; }

    // Swap (noexcept is important for exception safety)
    friend void swap(MyString& a, MyString& b) noexcept {
        std::swap(a.data_, b.data_);
        std::swap(a.size_, b.size_);
    }

    // Copy-assign via copy-and-swap
    MyString& operator=(MyString other) {  // pass by value = copy
        swap(*this, other);
        return *this;
    }
};
```

### Q5: How do you decide which operators to overload for a custom class?

**Answer:** Use this decision framework:

1. **Is the operator semantically meaningful?** Would a user naturally write `a + b` for this type? If not, don't overload. Use named functions instead.

2. **Does the operator preserve mathematical laws?** `+` should be commutative (or document if not). `==` should be reflexive, symmetric, transitive.

3. **Does the operator interact with the standard library?** If users will sort your type, provide `operator<`. If they'll compare, provide `operator==`. If they'll stream, provide `<<` and `>>`.

4. **Would a named function be clearer?** For types where operator meaning is ambiguous, prefer `dot()`, `cross()`, or `append()` over `*` or `+`.

```cpp
// GOOD: operator+ is intuitive for vectors
Vector3D a, b;
Vector3D c = a + b;  // vector addition

// BAD: what does matrix + database mean?
// Database operator+(const Database& other);  // ambiguous!

// GOOD: named function is clearer
Matrix Database::mergeWith(const Database& other);
```

### Q6: What is the problem with overloading `operator&` (address-of)?

**Answer:** Overloading `operator&` changes the behavior of the unary `&` operator, which normally returns the address of the object. This can break templates and smart pointers that rely on `&` returning a raw pointer.

```cpp
struct Tricky {
    int value;
    Tricky* operator&() {
        return reinterpret_cast<Tricky*>(0xDEADBEEF);  // lies about address
    }
};

Tricky t;
Tricky* ptr = &t;  // ptr = 0xDEADBEEF, not actual address!
```

This is why standard library smart pointers provide `std::addressof()` --- a helper that obtains the real address even when `operator&` is overloaded.

### Q7: How does C++20's `<=>` (spaceship operator) change operator overloading?

**Answer:** C++20 introduces the three-way comparison operator `<=>` that can auto-generate all six comparison operators (`==`, `!=`, `<`, `<=`, `>`, `>=`).

```cpp
#include <iostream>
#include <compare>

struct Point {
    int x, y;
    auto operator<=>(const Point&) const = default;  // generates all six
};

int main() {
    Point a{1, 2}, b{3, 4};
    std::cout << std::boolalpha;
    std::cout << (a < b) << "\n";   // true: generated from <=>
    std::cout << (a == b) << "\n";  // false: generated from <=>
    std::cout << (a != b) << "\n";  // true: generated
    std::cout << (a <= b) << "\n";  // true: generated
}
```

**Output:**
```
true
false
true
true
```

With `= default`, the compiler generates member-wise `<=>` and `==`. For custom ordering:

```cpp
struct Point {
    int x, y;
    std::strong_ordering operator<=>(const Point& other) const {
        if (auto cmp = x <=> other.x; cmp != 0) return cmp;
        return y <=> other.y;
    }
    bool operator==(const Point& other) const = default;
};
```

### Q8: How does operator overloading affect move semantics?

**Answer:** Move semantics interact with operator overloading primarily through `operator=` and rvalue reference overloads.

```cpp
class Buffer {
    int* data_;
    size_t size_;
public:
    // Move assignment (in addition to copy assignment)
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            other.data_ = nullptr;
            other.size_ = 0;
        }
        return *this;
    }
};
```

With the copy-and-swap pattern (passing by value), move assignment comes for free:

```cpp
Buffer& operator=(Buffer other) noexcept {  // copies if lvalue, moves if rvalue
    swap(*this, other);
    return *this;
}
// Usage:
Buffer a, b;
a = b;           // copy (lvalue)
a = std::move(b); // move (xvalue)
a = Buffer(100);  // move (prvalue)
```

### Q9: Why must `operator[]` return a reference? What happens if it returns by value?

**Answer:** `operator[]` must return a reference to make `arr[i] = value` work. If it returned by value, the expression `arr[i] = value` would modify a temporary copy, not the actual array element.

```cpp
struct BadArray {
    int data_[10];
    int operator[](size_t i) const { return data_[i]; }
    // No non-const overload --- cannot write arr[i] = v
    // If it returns int, then arr[0] = 5 compiles but modifies a temporary
};

// Const and non-const overloads:
struct GoodArray {
    int data_[10];
    int& operator[](size_t i) { return data_[i]; }        // read/write
    const int& operator[](size_t i) const { return data_[i]; }  // read-only
};
```

### Q10: Should you overload `operator&&` and `operator||`? Why or why not?

**Answer:** Generally no. The built-in `&&` and `||` have short-circuit semantics: if the left operand determines the result, the right operand is never evaluated. Overloaded versions always evaluate both operands before calling the operator function. This breaks expected behavior and can mask bugs.

```cpp
// Built-in: short-circuits
if (ptr && ptr->isValid()) { /* safe: ptr never dereferenced if null */ }

// Overloaded: both evaluated before operator call
if (safe_ptr && ptr->isValid()) { /* ptr might be dereferenced anyway! */ }
```

If you must overload them, document the non-short-circuiting behavior explicitly. Most code is better served by named functions like `logical_and()`.

---

## 6.18 Concept Comparison Tables

### Member vs Non-Member Decision Matrix

| Scenario | Member | Non-Member | Friend Needed? |
|----------|--------|------------|---------------|
| `operator=` | [Y] Required | [N] | N/A |
| `operator()` | [Y] Required | [N] | N/A |
| `operator[]` | [Y] Required | [N] | N/A |
| `operator->` | [Y] Required | [N] | N/A |
| `operator T()` | [Y] Required | [N] | N/A |
| `operator+=` | [Y] Convention | Possible | If non-member, yes |
| Prefix `++` | [Y] Convention | Possible | If non-member, yes |
| `operator+` | Possible | [Y] Preferred | Only if private access |
| `operator==` | Possible | [Y] Preferred | Only if private access |
| `operator<<` | [N] Wrong | [Y] Required | Usually yes |

### Return Type Quick Reference

| Operator | Return Type | Category |
|----------|------------|----------|
| `+`, `-`, `*`, `/`, `%` | `T` | New value |
| `+=`, `-=`, `*=`, `/=`, `%=` | `T&` | Modified self |
| `++` (prefix), `--` (prefix) | `T&` | Modified self |
| `++` (postfix), `--` (postfix) | `T` | Old value |
| `==`, `!=`, `<`, `<=`, `>`, `>=` | `bool` | Predicate |
| `!`, `&&`, `||` | `bool` | Predicate |
| `<<`, `>>` (stream) | `ostream&`, `istream&` | Stream reference |
| `[]` | `T&` / `const T&` | Element access |
| `()` | Any | Computed value |
| `=` | `T&` | Modified self |
| `operator T()` | `T` | Converted value |

### Can't Overload Summary

| Operator | Name | Reason |
|----------|------|--------|
| `::` | Scope resolution | Name lookup foundation |
| `.` | Member access | Type system invariant |
| `.*` | Member pointer | Same as `.` |
| `?:` | Ternary conditional | Short-circuit + arity 3 |
| `sizeof` | Size query | Template metaprogramming essential |
| `typeid` | Type ID | RTTI foundation |
| `alignof` | Alignment | Memory allocation correctness |
| `static_cast` | Static cast | Compile-time conversion safety |
| `dynamic_cast` | Dynamic cast | Runtime type safety |
| `const_cast` | Const cast | Const correctness |
| `reinterpret_cast` | Reinterpret cast | Representation invariant |
| `noexcept` | Exception spec | noexcept-SFINAE |
| `#` / `##` | Preprocessor | Token level, not expression |

---

## 6.19 Summary

Operator overloading integrates user-defined types into C++'s expression syntax while respecting the language's fixed precedence, associativity, and arity rules.

### Key Takeaways

1. **Rules**: At least one user-defined operand; no new operators; fixed precedence/associativity/arity; `::`, `.`, `.*`, `?:`, `sizeof`, `typeid`, casts, and `alignof` cannot be overloaded.

2. **Member vs Non-Member**: `=` `()` `[]` `->` `T()` must be members. Compound assignment (`+=`) should be members. Non-members enable symmetric conversion. Stream operators must be non-members.

3. **Arithmetic**: Implement compound (`+=`) first, then binary (`+`) by copying and applying compound. Return by value for binary, by reference for compound.

4. **Comparison**: Define `==` and `<` as primaries; derive `!=`, `>`, `<=`, `>=` from them. C++20 `<=>` auto-generates all six.

5. **Increment**: Prefix returns `T&` (no copy); postfix returns `T` (old value by copy). Prefer prefix.

6. **Stream**: Return stream reference for chaining. Friend for private access. Non-member by necessity.

7. **Subscript**: Return `T&` (lvalue) for `a[i] = v`. Provide const overload for read-only access.

8. **Function Call**: Creates stateful functors usable with STL algorithms. Lambdas are syntactic sugar.

9. **Conversion**: Use `explicit operator bool()` to prevent accidental arithmetic promotion. Use `explicit` for narrowing conversions.

10. **Assignment**: Return `T&`. Handle self-assignment. Copy-and-swap provides strong exception safety.

11. **Guidelines**: "When in doubt, do as the ints do." Implement `+` in terms of `+=`. Don't overload `&&`, `||`, or `,`. Document non-standard semantics.

### Why Operator Overloading Matters

Operator overloading transforms user-defined types from "data containers" into "types with meaning." `std::string` without `+` is just a character buffer; `std::complex` without `+` is just a pair of doubles. The operators are what make these types *feel* like language primitives. Judicious use produces elegant, readable code. Overuse produces confusion. The balance is the mark of an experienced C++ developer.

---

## Exercises

### Review Questions

1. Which operators must be implemented as member functions? Why does the language require this?
2. What is the difference in return type between prefix `++` and postfix `++`? What performance implication does this have?
3. Why can't you overload `::`, `.`, and `?:`? What fundamental language properties would break?
4. Explain why `operator<<` for stream output must be a non-member function.
5. What is the copy-and-swap idiom and what advantages does it provide for `operator=`?
6. Why should `operator bool()` always be marked `explicit`?
7. How does C++20's `<=>` operator simplify comparison operator overloading?

### Application Problems

1. **BigInteger class**: Implement a `BigInteger` class using `std::vector<int>` of digits. Overload `+`, `-`, `*`, `==`, `<`, `<<`, `>>`, prefix/postfix `++`, `explicit operator bool()`, and `explicit operator long long()`. Handle carries and borrows correctly. Test with values exceeding `long long` range.

2. **Matrix class**: Implement a `Matrix` class with overloaded `+`, `-`, `*` (matrix multiplication), `*=` (scalar), `()(i,j)` for element access, `<<` for pretty printing, and `==` for equality. Use `friend` where needed.

3. **Polynomial class**: Implement a `Polynomial` class storing coefficients in a `std::map<int, double>` (exponent -> coefficient). Overload `+`, `-`, `*`, `==`, `<<`, `()` for evaluation (substitute x value). Bonus: Overload `[]` to get/set coefficient by exponent.

4. **Smart pointer with operators**: Implement a simplified `SharedPtr<T>` that overloads `*`, `->`, `bool()` (explicit), `==` (nullptr comparison), and `!`. Include reference counting.

### Challenge Problem

5. **Custom iterator with full operator overloads**: Implement a `Range` class that represents a half-open interval `[start, end)` and provides a forward iterator. The iterator must overload `++` (prefix and postfix), `*`, `->`, `==`, `!=`. Demonstrate range-for support.

```cpp
Range r(0, 10);
for (auto x : r) {  // requires begin() and end() returning iterators
    std::cout << x << " ";  // 0 1 2 3 4 5 6 7 8 9
}
```

