# Chapter 4: Inheritance

## Learning Objectives

After studying this chapter, students will be able to:

- Model is-a relationships using inheritance
- Control member visibility through access specifiers in derived classes
- Implement single, multilevel, multiple, and hierarchical inheritance
- Recognise and resolve the diamond problem using virtual inheritance
- Understand construction and destruction order in class hierarchies

## 4.1 Base and Derived Classes

Inheritance enables a class to acquire the members of another class, establishing an is-a relationship. The class being inherited from is the *base class* (or parent, superclass); the inheriting class is the *derived class* (or child, subclass).

```cpp
class Shape {
public:
    void set_position(double x, double y) {
        x_ = x; y_ = y;
    }

private:
    double x_ = 0, y_ = 0;
};

class Circle : public Shape {
public:
    void set_radius(double r) { radius_ = r; }

private:
    double radius_ = 1.0;
};
```

A `Circle` is-a `Shape`: every `Circle` object contains a `Shape` subobject. The derived class can access public and protected members of the base but not private members.

```cpp
int main() {
    Circle c;
    c.set_position(10.0, 20.0);   // inherited from Shape
    c.set_radius(5.0);
}
```

## 4.2 Access Control in Inheritance

Three inheritance access specifiers control how base class members are seen by code outside the derived class:

| Inheritance | Base `public` in derived | Base `protected` in derived | Base `private` in derived |
|------------|-------------------------|----------------------------|--------------------------|
| `public`   | `public`                | `protected`                | inaccessible             |
| `protected`| `protected`             | `protected`                | inaccessible             |
| `private`  | `private`               | `private`                  | inaccessible             |

Public inheritance is by far the most common and is the only form that models is-a. Private inheritance models implemented-in-terms-of and is primarily a reuse mechanism. Protected inheritance is rare.

```cpp
class Base {
public:
    int a;
protected:
    int b;
private:
    int c;
};

class Pub : public Base {
    // a is public, b is protected, c inaccessible
};

class Priv : private Base {
    // a and b are private, c inaccessible
};
```

## 4.3 Inheritance Types

### Single Inheritance
One derived class inherits from one base class. Simple and predictable.

```cpp
class Vehicle { /* ... */ };
class Car : public Vehicle { /* ... */ };
```

### Multilevel Inheritance
A chain of inheritance: A → B → C. Each level adds or specialises behaviour.

```cpp
class Animal { /* ... */ };
class Mammal : public Animal { /* ... */ };
class Dog : public Mammal { /* ... */ };
```

### Multiple Inheritance
A derived class inherits from two or more base classes.

```cpp
class Camera { /* ... */ };
class Phone { /* ... */ };
class Smartphone : public Camera, public Phone { /* ... */ };
```

### Hierarchical Inheritance
One base class serves as parent to multiple derived classes.

```cpp
class Shape { /* ... */ };
class Circle : public Shape { /* ... */ };
class Square : public Shape { /* ... */ };
class Triangle : public Shape { /* ... */ };
```

### Hybrid Inheritance (Diamond Problem)
A combination of multiple and hierarchical inheritance creates a diamond shape, where a derived class inherits from two classes that share a common ancestor:

```
    A
   / \
  B   C
   \ /
    D
```

## 4.4 The Diamond Problem and Virtual Inheritance

Without special handling, class D inherits two copies of A's members—one through B and one through C—causing ambiguity:

```cpp
class A {
public:
    int value_;
};

class B : public A { };
class C : public A { };
class D : public B, public C { };

int main() {
    D d;
    // d.value_ = 5;          // ERROR: ambiguous
    d.B::value_ = 5;          // OK, but two copies exist
    d.C::value_ = 7;
}
```

Virtual inheritance merges the shared base into a single subobject:

```cpp
class B : virtual public A { };
class C : virtual public A { };
class D : public B, public C { };
// D now has only one A subobject
```

Virtual inheritance introduces additional complexity: the virtual base is initialised directly by the most-derived class, not by the intermediate bases. Construction order ensures the virtual base is constructed first.

```cpp
class A {
public:
    A(int v) : value_(v) {}
    int value_;
};

class B : virtual public A {
public:
    B() : A(0) {}    // ignored when B is part of D
};

class C : virtual public A {
public:
    C() : A(0) {}    // ignored when C is part of D
};

class D : public B, public C {
public:
    D() : A(42), B(), C() {}   // D initialises A directly
};
```

## 4.5 Construction and Destruction Order

Construction proceeds from base to derived: base class constructors run first (in declaration order for multiple inheritance), then member initialisations, then the derived constructor body.

Destruction reverses this order: derived destructor runs first, then members are destroyed in reverse order of initialisation, then base destructors run in reverse order.

```cpp
class A {
public:
    A() { std::cout << "A "; }
    ~A() { std::cout << "~A "; }
};

class B : public A {
public:
    B() { std::cout << "B "; }
    ~B() { std::cout << "~B "; }
};

int main() {
    B b;   // Output: "A B ~B ~A"
}
```

## 4.6 Summary

Inheritance models hierarchical is-a relationships in C++. Access specifiers control visibility propagation, different inheritance forms address various design needs, and virtual inheritance resolves the diamond problem at the cost of some complexity. Understanding construction and destruction order is essential for correct resource management in derived classes.

## Exercises

### Review Questions

1. When would you use `protected` inheritance instead of `public` inheritance?
2. What is the difference between `private` inheritance and composition?
3. How does virtual inheritance resolve the diamond problem?
4. Who is responsible for initialising a virtual base class?
5. In what order are destructors called for a derived class object?

### Application Problems

1. Implement a class hierarchy: `Person` (name, age), `Student` (person + major, GPA), and `Professor` (person + department, salary). Use public inheritance. Provide appropriate constructors using initialiser lists.
2. Create a class `MediaFile` with virtual functions `play()` and `stop()`. Derive `AudioFile` and `VideoFile` from it. Then create `AVFile` that inherits from both `AudioFile` and `VideoFile`. Resolve the diamond using virtual inheritance.

### Challenge Problem

3. Implement a class hierarchy for a GUI toolkit: `Widget` (base, with position and size), `Clickable` (mixin with `on_click`), `Scrollable` (mixin with `on_scroll`), `Button` (inherits Widget and Clickable), `ScrollPanel` (inherits Widget and Scrollable), and `ListBox` (inherits Widget, Clickable, Scrollable). Use virtual inheritance for Widget. Implement a minimal event dispatch mechanism.
