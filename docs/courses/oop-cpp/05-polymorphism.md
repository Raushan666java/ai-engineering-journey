# Chapter 5: Polymorphism

## Learning Objectives

After studying this chapter, students will be able to:

- Explain the difference between compile-time and runtime polymorphism
- Declare and override virtual functions correctly
- Describe the virtual table mechanism and its costs
- Design abstract base classes with pure virtual functions
- Implement virtual destructors to ensure proper cleanup
- Apply RTTI features (`dynamic_cast`, `typeid`) judiciously

## 5.1 The Polymorphism Problem

Consider a shape hierarchy where each derived type draws itself differently. Without polymorphism, we must resort to type tags and conditional logic:

```cpp
void draw_shape(const Shape* s) {
    if (s->type() == CIRCLE)
        draw_circle(static_cast<const Circle*>(s));
    else if (s->type() == SQUARE)
        draw_square(static_cast<const Square*>(s));
    // ...
}
```

This approach is fragile: adding a new shape requires modifying every function that dispatches on type. Polymorphism solves this by letting each class define its own behaviour behind a common interface.

## 5.2 Virtual Functions

A `virtual` function is a member function whose behaviour can be overridden in a derived class. The call is resolved at runtime based on the object's dynamic type, not its static type.

```cpp
class Shape {
public:
    virtual void draw() const {
        std::cout << "Drawing a generic shape\n";
    }
};

class Circle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a circle\n";
    }
};

class Square : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a square\n";
    }
};

void render(const Shape& s) {
    s.draw();   // runtime dispatch
}

int main() {
    Circle c;
    Square sq;
    render(c);   // "Drawing a circle"
    render(sq);  // "Drawing a square"
}
```

The `override` specifier (C++11) is not required but strongly recommended: it causes the compiler to verify that a base class virtual function with the same signature actually exists, catching signature mismatches at compile time.

## 5.3 The vtable and vptr Mechanism

Virtual function dispatch is implemented through a virtual table (vtable) and a virtual pointer (vptr):

1. Every class with virtual functions has a static vtable: an array of function pointers.
2. Each object contains a hidden vptr pointing to its class's vtable.
3. A virtual function call `s.draw()` compiles to `(*(s.vptr[index]))(&s)`.

```
Object s (Circle):
  [vptr]  -------> Circle's vtable:
  [data_]           Shape::draw_area() -> Shape::draw_area
                    Circle::draw()     -> Circle::draw
```

Costs:
- Each object carries one extra pointer (vptr), increasing size by 8 bytes on 64-bit systems.
- Each virtual call requires an extra indirection through the vtable.
- Virtual functions cannot be inlined across translation units (though devirtualisation optimisations exist).

The vptr is initialised during construction: when the base class constructor runs, the vptr points to the base's vtable; once the derived constructor begins, it is updated to the derived's vtable.

## 5.4 Pure Virtual Functions and Abstract Classes

A pure virtual function has no implementation in the declaring class and makes the class *abstract*—objects of that class cannot be instantiated.

```cpp
class Shape {
public:
    virtual double area() const = 0;     // pure virtual
    virtual void draw() const = 0;
};

// Circle must override both area and draw
class Circle : public Shape {
public:
    double area() const override { return 3.14159 * r_ * r_; }
    void draw() const override { /* ... */ }
private:
    double r_ = 1.0;
};
```

Abstract classes define interfaces. They can have data members, concrete member functions, and constructors (called by derived constructors). Attempting to instantiate an abstract class produces a compile-time error.

## 5.5 Virtual Destructors

When a base class pointer is used to delete a derived object, the destructor must be virtual to ensure the derived destructor runs:

```cpp
class Base {
public:
    ~Base() { std::cout << "~Base\n"; }
};

class Derived : public Base {
public:
    ~Derived() { std::cout << "~Derived\n"; }
};

int main() {
    Base* p = new Derived();
    delete p;   // Output: "~Base" only — DERIVED MEMORY LEAK
}
```

Fixing this requires a virtual destructor in the base:

```cpp
class Base {
public:
    virtual ~Base() = default;
};
```

Now `delete p` outputs `~Derived\n~Base\n`. As a rule of thumb: if a class has any virtual function, it should have a virtual destructor. If a class is designed to be a base class but has no virtual functions (rare), consider a protected non-virtual destructor to prevent deletion through a base pointer.

## 5.6 Runtime Type Identification

C++ provides two operators for runtime type identification (RTTI):

- `dynamic_cast` — safely casts a base pointer/reference to a derived type, returning `nullptr` (for pointers) or throwing `std::bad_cast` (for references) on failure.
- `typeid` — returns a `std::type_info` object representing the dynamic type.

```cpp
void process(Shape& s) {
    Circle* c = dynamic_cast<Circle*>(&s);
    if (c) {
        std::cout << "Processing a circle of radius "
                  << c->radius() << '\n';
    }

    if (typeid(s) == typeid(Circle)) {
        std::cout << "Exact type is Circle\n";
    }
}
```

RTTI should be used sparingly. Frequent `dynamic_cast` suggests a design flaw—typically that the interface is insufficient and a virtual function should be added. The performance cost of `dynamic_cast` varies across implementations and class hierarchy depths.

## 5.7 Compile-Time vs Runtime Polymorphism

| Aspect | Compile-time (Templates/Overloading) | Runtime (Virtual Functions) |
|--------|--------------------------------------|----------------------------|
| Resolution | At compile time | At runtime |
| Mechanism | Template instantiation, overload resolution | vtable dispatch |
| Flexibility | Types must be known at compile time | Types can be loaded dynamically |
| Performance | Zero runtime overhead (inlining possible) | Indirect call (cannot inline across TU) |
| Coupling | Types must satisfy a duck-typed interface | Types must inherit from a common base |

Choosing between them depends on the problem: templates suit generic algorithms where type erasure is unnecessary; virtual functions suit heterogeneous collections and plugin architectures.

## 5.8 Summary

Virtual functions enable runtime polymorphism through the vtable mechanism. Pure virtual functions define interfaces that derived classes must implement. Virtual destructors ensure correct cleanup in polymorphic hierarchies. RTTI provides limited runtime type introspection but should be used sparingly. The choice between compile-time and runtime polymorphism is a fundamental design decision in C++.

## Exercises

### Review Questions

1. Explain the content and initialisation order of the vptr during object construction.
2. What is the effect of forgetting `override` on a function that is meant to override a virtual?
3. Why must a destructor be virtual in a polymorphic base class?
4. What are the performance implications of virtual function calls?
5. When is `dynamic_cast` preferable to a virtual function?

### Application Problems

1. Implement a polymorphic shape hierarchy with classes `Shape` (abstract), `Circle`, `Rectangle`, and `Triangle`. Each must override `area()` and `draw()`. Store a collection of `Shape*` in a vector and iterate to display areas.
2. Create an abstract `Logger` interface with pure virtual `log_info`, `log_warning`, `log_error`. Implement `ConsoleLogger` and `FileLogger`. Write a factory function `Logger* create_logger(const std::string& type)`.

### Challenge Problem

3. Implement a simple plugin system. Create an abstract `class Filter` with a pure virtual `std::string apply(const std::string& input)`. Write `UpperCaseFilter`, `LowerCaseFilter`, `ReverseFilter`, and `RemoveSpacesFilter` as derived classes. Using a configuration file (or hardcoded for this exercise), read a list of filter names, instantiate the corresponding classes via a factory, and apply them in sequence to a test string.
