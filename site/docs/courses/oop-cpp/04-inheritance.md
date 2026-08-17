---
id: 04-inheritance
slug: /oop-cpp/04-inheritance
title: "Chapter 4: Inheritance"
sidebar_label: "Chapter 4: Inheritance"
sidebar_position: 4
---
# Chapter 4: Inheritance

> **Previous:** [Constructors](./03-constructors.md) | **Next:** [Polymorphism](./05-polymorphism.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Model is-a relationships using inheritance with correct access specifiers
- Control member visibility through all three inheritance access specifiers
- Implement all five inheritance types: single, multilevel, multiple, hierarchical, hybrid
- Recognise and resolve the diamond problem using virtual inheritance
- Understand virtual base class memory layout and initialisation rules
- Explain construction and destruction order in complex class hierarchies
- Differentiate IS-A from HAS-A and choose the correct relationship model
- Perform safe upcasting and downcasting with static_cast and dynamic_cast
- Answer interview questions on slicing, virtual inheritance, and the diamond problem

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Base and Derived Classes | Derived class contains a base subobject | Model is-a with public inheritance |
| Access Control | Three specifiers control visibility propagation | Use public for is-a, private for implementation reuse |
| Single / Multilevel / Hierarchical | One base fans out or chains down | Prefer shallow hierarchies; composition over deep chains |
| Multiple Inheritance | A class inherits from multiple bases | Powerful but increases complexity; use sparingly |
| Virtual Inheritance | Merges shared base into single subobject | Solves diamond problem; virtual base init by most-derived |
| Construction / Destruction Order | Base first, then members, then body | Destruction is exact reverse of construction |
| IS-A vs HAS-A | Inheritance vs composition distinction | Prefer composition unless true subtype relationship |
| Upcasting / Downcasting | Base* = &derived (implicit); reverse needs cast | dynamic_cast for polymorphic; static_cast when sure |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Base & Derived Classes] --> B[Access Control]
    B --> C[Inheritance Types]
    C --> D[Multiple Inheritance]
    D --> E[Virtual Inheritance / Diamond Problem]
    E --> F[Construction & Destruction Order]
    F --> G[IS-A vs HAS-A]
    G --> H[Upcasting vs Downcasting]
    H --> I[Interview Corner & Real-World Apps]
```

---

## 4.1 Introduction to Inheritance

### One-Sentence Takeaway


Inheritance lets a derived class reuse and extend a base class's interface and implementation, forming an is-a relationship that models real-world hierarchies.

### Real-World Analogy: The Animal Kingdom


Consider the biological classification system:

```
         Animal
        /      \
    Mammal     Bird
    /    \       \
  Dog   Cat     Eagle
```

- **Animal** (base): has a heartbeat, breathes, eats
- **Mammal** (derived from Animal): has warm blood, gives birth
- **Bird** (derived from Animal): has feathers, lays eggs
- **Dog** (derived from Mammal): barks, chases cats
- **Cat** (derived from Mammal): meows, purrs
- **Eagle** (derived from Bird): flies, hunts

A **Dog is-an Animal**. Everything an Animal can do, a Dog can do (plus more). This is the fundamental motivation for inheritance: **code reuse + subtype polymorphism**.

### Why Inheritance?


1. **Code Reuse** → Write common functionality once in the base class
2. **Extensibility** → Add new derived classes without modifying existing code
3. **Polymorphism** → Treat derived objects uniformly through base pointers
4. **Hierarchical Organization** → Model real-world taxonomies naturally

### Numbered Steps to Model Inheritance


| Step | Action | Example |
|------|--------|---------|
| 1 | Identify the common base | All animals breathe |
| 2 | Extract shared members into base class | `class Animal { breathe(); }` |
| 3 | Identify specialisations | Dog barks, Cat meows |
| 4 | Create derived classes using `: public Base` | `class Dog : public Animal {}` |
| 5 | Add specialised members to derived classes | `Dog::bark()` |
| 6 | Verify is-a relationship holds | Dog* can be assigned to Animal* |

### Pseudocode


```
CLASS Animal
    METHOD breathe()
        PRINT "Breathing..."
    END METHOD
END CLASS

CLASS Dog INHERITS Animal
    METHOD bark()
        PRINT "Woof!"
    END METHOD
END CLASS

MAIN
    Dog myDog
    myDog.breathe()    // inherited from Animal
    myDog.bark()       // defined in Dog
END MAIN
```

### C++ Code


```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Woof! Woof!" << endl;
    }
};

int main() {
    Dog myDog;
    myDog.breathe();   // Output: Breathing...
    myDog.bark();      // Output: Woof! Woof!
    return 0;
}
```

**Output:**
```
Breathing...
Woof! Woof!
```

---

## 4.2 Base and Derived Classes → Deep Dive

### Syntax and Semantics


```cpp
class Base {
    // base members
};

class Derived : access-specifier Base {
    // derived members
};
```

The `access-specifier` controls how base class members are seen through the derived class. It is one of `public`, `protected`, or `private`.

### What Inheritance Actually Provides


When `Derived` inherits from `Base`:

1. **All data members** of Base are present in every Derived object (subject to access control)
2. **All member functions** of Base are available on Derived objects (subject to access control)
3. **A Base subobject** exists inside every Derived object
4. **The derived pointer** is implicitly convertible to a base pointer (upcasting)

### Memory Layout of a Derived Object


```cpp
#include <iostream>
using namespace std;

class Base {
public:
    int baseData;
    Base() : baseData(100) {}
};

class Derived : public Base {
public:
    int derivedData;
    Derived() : derivedData(200) {}
};

int main() {
    Derived d;
    cout << "Size of Base:    " << sizeof(Base) << " bytes" << endl;
    cout << "Size of Derived: " << sizeof(Derived) << " bytes" << endl;
    cout << "Address of d:        " << &d << endl;
    cout << "Address of d.baseData: " << &d.baseData << endl;
    cout << "Address of d.derivedData: " << &d.derivedData << endl;
    return 0;
}
```

**Output (typical, implementation-dependent):**
```
Size of Base:    4 bytes
Size of Derived: 8 bytes
Address of d:        0x7ffd1234
Address of d.baseData: 0x7ffd1234
Address of d.derivedData: 0x7ffd1238
```

The Base subobject sits at the beginning of the Derived object, followed by Derived's own members.

```
Memory Layout:
+-------------------+  <-- &d, &d.baseData
| Base subobject    |
|   baseData = 100  |
+-------------------+
| Derived members   |
|   derivedData=200 |
+-------------------+  <-- &d + sizeof(Derived)
```

### Key Points


| Concept | Explanation |
|---------|-------------|
| Base subobject | Every derived object contains a complete base object |
| Constructor chaining | Derived constructor calls base constructor before its own body |
| Access to base | Derived can access public/protected but NOT private base members |
| Size | Derived >= Base in size (always at least as large) |
| Implicit conversion | Derived* to Base* is automatic (upcast) |

---

## 4.3 Access Control in Inheritance

### One-Sentence Takeaway


The inheritance access specifier determines the minimum access level of inherited members as seen through the derived class, controlling visibility propagation.

### The Three Access Specifiers in Inheritance


| Inheritance Specifier | Meaning | Typical Use |
|----------------------|---------|-------------|
| `public` | Base's access levels are preserved in derived | Models is-a relationship (most common) |
| `protected` | Base's public members become protected in derived | Rare; implementation sharing within sub-hierarchy |
| `private` | Base's public and protected become private in derived | Implemented-in-terms-of (prefer composition) |

### Complete Access Control Table


This table shows how base class members (with their original access level) appear inside the derived class **and to outside code** through the derived class:

| Base Member Access | Inheritance Specifier | Access in Derived | Access Outside (via Derived) |
|--------------------|----------------------|-------------------|------------------------------|
| `public` | `public` | `public` | ✅ Accessible |
| `protected` | `public` | `protected` | ❌ Not accessible |
| `private` | `public` | inaccessible | ❌ Not accessible |
| `public` | `protected` | `protected` | ❌ Not accessible |
| `protected` | `protected` | `protected` | ❌ Not accessible |
| `private` | `protected` | inaccessible | ❌ Not accessible |
| `public` | `private` | `private` | ❌ Not accessible |
| `protected` | `private` | `private` | ❌ Not accessible |
| `private` | `private` | inaccessible | ❌ Not accessible |

### Comprehensive Demo


```cpp
#include <iostream>
using namespace std;

class Base {
public:
    int pub = 1;
protected:
    int prot = 2;
private:
    int priv = 3;    // never accessible to derived classes
};

class PubDerived : public Base {
public:
    void show() {
        cout << "Public derived: pub=" << pub     // OK: public
             << ", prot=" << prot                  // OK: protected
             << endl;                              // priv: ERROR
    }
};

class ProtDerived : protected Base {
public:
    void show() {
        cout << "Protected derived: pub=" << pub   // became protected
             << ", prot=" << prot                  // still protected
             << endl;
    }
};

class PrivDerived : private Base {
public:
    void show() {
        cout << "Private derived: pub=" << pub     // became private
             << ", prot=" << prot                  // became private
             << endl;
    }
};

int main() {
    PubDerived pubd;
    pubd.show();
    cout << "Outside: pubd.pub = " << pubd.pub << endl;   // OK: public
    
    ProtDerived protd;
    protd.show();
    // cout << protd.pub;   // ERROR: pub is now protected
    
    PrivDerived privd;
    privd.show();
    // cout << privd.pub;   // ERROR: pub is now private
    
    return 0;
}
```

**Output:**
```
Public derived: pub=1, prot=2
Outside: pubd.pub = 1
Protected derived: pub=1, prot=2
Private derived: pub=1, prot=2
```

### Access Specifier Comparison Table


| Feature | `public` inheritance | `protected` inheritance | `private` inheritance |
|---------|---------------------|------------------------|----------------------|
| Models is-a? | ✅ Yes | ❌ No | ❌ No |
| Base pointers work? | ✅ Yes | ❌ No | ❌ No |
| Polymorphism? | ✅ Yes | ❌ No | ❌ No |
| Frequency | 95%+ of use | <1% | ~4% |
| Can further derive? | ✅ Normal | ✅ Protected access preserved | ❌ Further derived cannot access base |
| Alternative | → | → | Composition (almost always better) |

### Runtime Type Identification with Different Inheritances


```cpp
#include <iostream>
#include <typeinfo>
using namespace std;

class Base { public: virtual ~Base() {} };
class Pub : public Base {};
class Priv : private Base {};  // Note: private inheritance

int main() {
    Pub p;
    Base* bp = &p;             // OK: public inheritance
    cout << "Public: upcast works" << endl;
    
    Priv pr;
    // Base* bp2 = &pr;        // ERROR: private inheritance
    cout << "Private: upcast does NOT work" << endl;
    return 0;
}
```

**Output:**
```
Public: upcast works
Private: upcast does NOT work
```

---

## 4.4 Types of Inheritance → Complete Coverage

### One-Sentence Takeaway


C++ supports five inheritance types: single, multilevel, multiple, hierarchical, and hybrid → each suited to different relationship structures.

### Comprehensive Type Comparison Table


| Type | Diagram | Base-to-Derived | Use Case | Complexity |
|------|---------|-----------------|----------|------------|
| Single | `A -> B` | 1:1 | Simple specialisation | Low |
| Multilevel | `A -> B -> C` | 1:1 chain | Layered abstraction | Medium |
| Multiple | `A, B -> C` | N:1 | Combining independent traits | High |
| Hierarchical | `A -> B, C, D` | 1:N | One base, many specialisations | Medium |
| Hybrid | Multiple + Hierarchical | N:M | Complex real-world modelling | Very High |

---

### 4.4.1 Single Inheritance


**Definition:** One derived class inherits from exactly one base class.

**Real-world analogy:** A Car is a Vehicle.

```
    Vehicle
       |
       v
      Car
```

**Steps:**
1. Identify the base class
2. Identify the derived class
3. Apply `: public Base` syntax
4. Add derived-specific members

**C++ Code:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Vehicle {
protected:
    string brand;
    int year;
public:
    Vehicle(string b, int y) : brand(b), year(y) {
        cout << "Vehicle constructor called" << endl;
    }
    void display() {
        cout << brand << " (" << year << ")" << endl;
    }
};

class Car : public Vehicle {
private:
    int doors;
public:
    Car(string b, int y, int d) : Vehicle(b, y), doors(d) {
        cout << "Car constructor called" << endl;
    }
    void honk() {
        cout << "Beep beep!" << endl;
    }
    void showDetails() {
        display();
        cout << "Doors: " << doors << endl;
    }
};

int main() {
    Car myCar("Toyota", 2022, 4);
    myCar.showDetails();
    myCar.honk();
    return 0;
}
```

**Output:**
```
Vehicle constructor called
Car constructor called
Toyota (2022)
Doors: 4
Beep beep!
```

**Dry Run Trace Table:**

| Step | Action | Output |
|------|--------|--------|
| 1 | `Car myCar("Toyota", 2022, 4)` | |
| 2 | Enter Car constructor | |
| 3 | Call Vehicle("Toyota", 2022) | `Vehicle constructor called` |
| 4 | Initialise doors=4 | |
| 5 | Execute Car constructor body | `Car constructor called` |
| 6 | `myCar.showDetails()` | `Toyota (2022)` / `Doors: 4` |
| 7 | `myCar.honk()` | `Beep beep!` |

**Complexity:**
- **Time:** O(1) for construction (no additional overhead over single class)
- **Space:** Base size + derived members (no extra pointers)
- **Why:** Single inheritance is the simplest form → the derived object layout is contiguous (base subobject followed by derived members)

---

### 4.4.2 Multilevel Inheritance


**Definition:** A chain of inheritance where a class derives from a derived class, forming A → B → C.

**Real-world analogy:** A Golden Retriever is a Dog is a Mammal is an Animal.

```
   Animal
     |
   Mammal
     |
     Dog
     |
 GoldenRetriever
```

**Steps:**
1. Create base class (Animal)
2. Create intermediate derived class (Mammal : public Animal)
3. Create further derived class (Dog : public Mammal)
4. Repeat for additional levels

**C++ Code:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string species;
public:
    Animal(string s) : species(s) {
        cout << "Animal constructed: " << species << endl;
    }
    void breathe() {
        cout << species << " breathes" << endl;
    }
};

class Mammal : public Animal {
protected:
    int bodyTemp;
public:
    Mammal(string s, int t) : Animal(s), bodyTemp(t) {
        cout << "Mammal constructed: " << species << endl;
    }
    void regulateTemp() {
        cout << species << " regulates body temp to " << bodyTemp << "C" << endl;
    }
};

class Dog : public Mammal {
private:
    string breed;
public:
    Dog(string b, int t, string br) : Mammal(b, t), breed(br) {
        cout << "Dog constructed: " << breed << " " << species << endl;
    }
    void bark() {
        cout << breed << " says Woof!" << endl;
    }
};

int main() {
    Dog dog("Canine", 38, "Golden Retriever");
    cout << "---" << endl;
    dog.breathe();
    dog.regulateTemp();
    dog.bark();
    return 0;
}
```

**Output:**
```
Animal constructed: Canine
Mammal constructed: Canine
Dog constructed: Golden Retriever Canine
---
Canine breathes
Canine regulates body temp to 38C
Golden Retriever says Woof!
```

**Constructor Call Chain Trace Table:**

| Step | Constructor Called | What Happens |
|------|-------------------|--------------|
| 1 | `Dog(...)` | Enters Dog constructor, calls Mammal |
| 2 | `Mammal(...)` | Enters Mammal constructor, calls Animal |
| 3 | `Animal(...)` | Initialises species = "Canine" |
| 4 | Animal body executes | Prints "Animal constructed: Canine" |
| 5 | Back to Mammal | Initialises bodyTemp = 38 |
| 6 | Mammal body executes | Prints "Mammal constructed: Canine" |
| 7 | Back to Dog | Initialises breed = "Golden Retriever" |
| 8 | Dog body executes | Prints "Dog constructed: Golden Retriever Canine" |

**Memory Layout (A→B→C):**

```
+------------------+
| Animal subobject |
|   species        |
+------------------+
| Mammal subobject |
|   bodyTemp       |
+------------------+
| Dog members      |
|   breed          |
+------------------+
```

**Complexity:**
- **Depth:** Each level adds one constructor call (O(depth) time for construction chain)
- **Space:** Sum of all base members + own members
- **Recommendation:** Keep depth ≤ 3. Deeper chains increase coupling and make maintenance harder. Prefer composition for deep abstraction layers.

---

### 4.4.3 Multiple Inheritance


**Definition:** A derived class inherits from two or more base classes simultaneously.

**Real-world analogy:** A Smartphone is both a Camera AND a Phone.

```
   Camera     Phone
       \       /
        \     /
       Smartphone
```

**Steps:**
1. Create independent base classes
2. List all bases in the derived class declaration
3. Each base constructor is called in declaration order

**C++ Code:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Camera {
protected:
    int megapixels;
public:
    Camera(int mp) : megapixels(mp) {
        cout << "Camera constructed: " << mp << "MP" << endl;
    }
    void takePhoto() {
        cout << "Taking photo with " << megapixels << "MP camera" << endl;
    }
};

class Phone {
protected:
    string number;
public:
    Phone(string n) : number(n) {
        cout << "Phone constructed: " << n << endl;
    }
    void call(string contact) {
        cout << "Calling " << contact << " from " << number << endl;
    }
};

class Smartphone : public Camera, public Phone {
private:
    string os;
public:
    Smartphone(int mp, string n, string o)
        : Camera(mp), Phone(n), os(o) {
        cout << "Smartphone constructed: " << os << endl;
    }
    void browse(string site) {
        cout << "Browsing " << site << " on " << os << endl;
    }
};

int main() {
    Smartphone iphone(48, "555-0100", "iOS");
    cout << "---" << endl;
    iphone.takePhoto();
    iphone.call("Mom");
    iphone.browse("google.com");
    return 0;
}
```

**Output:**
```
Camera constructed: 48MP
Phone constructed: 555-0100
Smartphone constructed: iOS
---
Taking photo with 48MP camera
Calling Mom from 555-0100
Browsing google.com on iOS
```

**Memory Layout:**

```
+--------------------+
| Camera subobject   |
|   megapixels       |
+--------------------+
| Phone subobject    |
|   number           |
+--------------------+
| Smartphone members |
|   os               |
+--------------------+
```

**Base Construction Order:** Constructors run in **declaration order** (`Camera` then `Phone`), NOT the initialiser list order.

```cpp
// Declaration order: Camera, Phone
class Smartphone : public Camera, public Phone { ... };

// Initialiser list order passed to constructor:
Smartphone(int mp, string n, string o)
    : Phone(n), Camera(mp), os(o) { }  // Camera still called FIRST
```

**Complexity:**
- **Time:** O(N) where N = number of bases (each constructor called once)
- **Space:** Sum of all base sizes + derived members
- **Why risky:** Ambiguity when bases have same-named members; diamond problem requires virtual inheritance

**Potential Ambiguity:**

```cpp
class A { public: void f() {} };
class B { public: void f() {} };
class C : public A, public B {};

int main() {
    C c;
    // c.f();    // ERROR: ambiguous
    c.A::f();    // OK: explicit scope
    c.B::f();    // OK: explicit scope
}
```

---

### 4.4.4 Hierarchical Inheritance


**Definition:** One base class serves as parent to multiple derived classes.

**Real-world analogy:** Shape is the base for Circle, Rectangle, Triangle.

```
            Shape
         /   |   \
        /    |    \
    Circle Rect  Triangle
```

**Steps:**
1. Create one base class with common functionality
2. Create multiple derived classes, each inheriting from the same base
3. Each derived class adds its own specialisation

**C++ Code:**

```cpp
#include <iostream>
#include <cmath>
using namespace std;

class Shape {
protected:
    string color;
public:
    Shape(string c) : color(c) {
        cout << "Shape constructed: " << color << endl;
    }
    virtual double area() const = 0;    // pure virtual
    virtual void draw() const {
        cout << "Drawing a " << color << " shape" << endl;
    }
    virtual ~Shape() {}
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(string c, double r) : Shape(c), radius(r) {}
    double area() const override {
        return M_PI * radius * radius;
    }
    void draw() const override {
        cout << "Drawing a " << color << " circle (r=" << radius << ")" << endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(string c, double w, double h) : Shape(c), width(w), height(h) {}
    double area() const override {
        return width * height;
    }
    void draw() const override {
        cout << "Drawing a " << color << " rectangle (" << width << "x" << height << ")" << endl;
    }
};

class Triangle : public Shape {
private:
    double base, height;
public:
    Triangle(string c, double b, double h) : Shape(c), base(b), height(h) {}
    double area() const override {
        return 0.5 * base * height;
    }
    void draw() const override {
        cout << "Drawing a " << color << " triangle (base=" << base << ")" << endl;
    }
};

int main() {
    Circle c("Red", 5.0);
    Rectangle r("Blue", 4.0, 6.0);
    Triangle t("Green", 3.0, 7.0);
    
    cout << "---" << endl;
    c.draw();   cout << "Area: " << c.area() << endl;
    r.draw();   cout << "Area: " << r.area() << endl;
    t.draw();   cout << "Area: " << t.area() << endl;
    
    // Polymorphic behaviour via base pointer
    Shape* shapes[] = { &c, &r, &t };
    cout << "\nPolymorphic iteration:" << endl;
    for (Shape* s : shapes) {
        s->draw();
        cout << "  Area: " << s->area() << endl;
    }
    return 0;
}
```

**Output:**
```
Shape constructed: Red
Shape constructed: Blue
Shape constructed: Green
---
Drawing a Red circle (r=5)
Area: 78.5398
Drawing a Blue rectangle (4x6)
Area: 24
Drawing a Green triangle (base=3)
Area: 10.5

Polymorphic iteration:
Drawing a Red circle (r=5)
  Area: 78.5398
Drawing a Blue rectangle (4x6)
  Area: 24
Drawing a Green triangle (base=3)
  Area: 10.5
```

**Memory Layout (each derived independently):**

```
Circle:               Rectangle:            Triangle:
+---------------+     +---------------+     +---------------+
| Shape subobj  |     | Shape subobj  |     | Shape subobj  |
|   color       |     |   color       |     |   color       |
+---------------+     +---------------+     +---------------+
| Circle members |     | Rect members  |     | Tri members   |
|   radius      |     |   width       |     |   base        |
+---------------+     |   height      |     |   height      |
                       +---------------+     +---------------+
```

**Complexity:**
- **Time:** Each derived constructed independently (O(1) per object)
- **Space:** Each object has its own copy of base members
- **Why useful:** Eliminates code duplication → shared functionality in Shape, specialised in each derived class

---

## 4.5 Hybrid Inheritance and the Diamond Problem

### 4.5.1 Hybrid Inheritance


**Definition:** A combination of two or more inheritance types. The classic example combines multiple and hierarchical inheritance, creating a diamond shape.

**Real-world analogy:** A FlyingFish is a Fish AND is a Bird-like creature that can fly. But both Fish and Animal share a common ancestor: LivingBeing.

```
         LivingBeing
         /         \
        /           \
      Fish         Bird
        \           /
         \         /
         FlyingFish
```

### 4.5.2 The Diamond Problem → Without Virtual Inheritance


**The Problem:** When a class inherits from two classes that share a common ancestor, two copies of the ancestor's members exist → causing ambiguity.

```cpp
#include <iostream>
using namespace std;

class A {
public:
    int value;
    A() : value(0) {
        cout << "A constructed" << endl;
    }
};

class B : public A {
public:
    B() {
        cout << "B constructed" << endl;
    }
};

class C : public A {
public:
    C() {
        cout << "C constructed" << endl;
    }
};

class D : public B, public C {
public:
    D() {
        cout << "D constructed" << endl;
    }
};

int main() {
    D d;
    // cout << d.value;     // ERROR: ambiguous → two copies of A::value
    cout << "d.B::value = " << d.B::value << endl;   // OK, explicit scope
    cout << "d.C::value = " << d.C::value << endl;   // OK, explicit scope
    cout << "Size of D: " << sizeof(D) << " bytes" << endl;
    return 0;
}
```

**Output:**
```
A constructed
B constructed
A constructed
C constructed
D constructed
d.B::value = 0
d.C::value = 0
Size of D: 8 bytes    // two copies of A::value (4 + 4)
```

**Notice:** "A constructed" appears **twice** → D contains **two separate A subobjects**.

**Memory Layout without Virtual Inheritance:**

```
Object D:
+------------------+
| B subobject      |
|   +------------+ |
|   | A (1st)    | |   <-- d.B::value
|   |   value    | |
|   +------------+ |
+------------------+
| C subobject      |
|   +------------+ |
|   | A (2nd)    | |   <-- d.C::value
|   |   value    | |
|   +------------+ |
+------------------+
| D members        |
+------------------+
```

The two A subobjects are at different offsets, and `d.value` is ambiguous because the compiler cannot tell which `value` you mean.

### 4.5.3 Virtual Inheritance → The Solution


**Virtual inheritance** uses a pointer (vbase pointer) to share a single instance of the common base class among all classes in the hierarchy.

```cpp
#include <iostream>
using namespace std;

class A {
public:
    int value;
    A() : value(0) {
        cout << "A constructed" << endl;
    }
};

class B : virtual public A {
public:
    B() {
        cout << "B constructed" << endl;
    }
};

class C : virtual public A {
public:
    C() {
        cout << "C constructed" << endl;
    }
};

class D : public B, public C {
public:
    D() {
        cout << "D constructed" << endl;
    }
};

int main() {
    D d;
    d.value = 42;             // OK: only one copy of A::value
    cout << "d.value = " << d.value << endl;
    cout << "d.B::value = " << d.B::value << endl;
    cout << "d.C::value = " << d.C::value << endl;
    cout << "Size of D: " << sizeof(D) << " bytes" << endl;
    return 0;
}
```

**Output:**
```
A constructed
B constructed
C constructed
D constructed
d.value = 42
d.B::value = 42
d.C::value = 42
Size of D: 16+ bytes    // varies by compiler; includes vbase pointers
```

**Notice:** "A constructed" appears only **once**. B and C now share the same A subobject.

### 4.5.4 Memory Layout with Virtual Inheritance


When virtual inheritance is used, the compiler inserts a **virtual base pointer (vbptr)** in each class that virtually inherits. This pointer points to a **virtual base table (vbtable)** that contains the offset to the shared base subobject.

```
Object D (with virtual inheritance):
+------------------+
| B vbase ptr      |  -->  vbtable for B: offset to A = 16 bytes
+------------------+
| B members        |
+------------------+
| C vbase ptr      |  -->  vbtable for C: offset to A = 8 bytes
+------------------+
| C members        |
+------------------+
| D members        |
+------------------+
| A subobject      |  <-- shared single copy
|   value          |
+------------------+
```

**Key insight:** The A subobject is at the **end** of D's layout (implementation varies by compiler; GCC puts it at the end, MSVC at negative offsets). Both B and C access A through their vbptr + offset, ensuring they see the same instance.

### 4.5.5 Virtual Base Initialisation Rules


**The most-derived class is responsible for initialising all virtual bases**, regardless of where they appear in the hierarchy. Intermediate classes' constructor calls to the virtual base are **ignored** when they are part of a more-derived object.

```cpp
#include <iostream>
using namespace std;

class A {
public:
    int value;
    A(int v) : value(v) {
        cout << "A(" << value << ") constructed" << endl;
    }
};

class B : virtual public A {
public:
    B() : A(10) {     // will be ignored when B is part of D
        cout << "B constructed" << endl;
    }
};

class C : virtual public A {
public:
    C() : A(20) {     // will be ignored when C is part of D
        cout << "C constructed" << endl;
    }
};

class D : public B, public C {
public:
    D() : A(99), B(), C() {   // D initialises A directly
        cout << "D constructed" << endl;
    }
};

int main() {
    D d;
    cout << "d.value = " << d.value << endl;   // 99, not 10 or 20
    return 0;
}
```

**Output:**
```
A(99) constructed
B constructed
C constructed
D constructed
d.value = 99
```

**Dry Run Trace Table:**

| Step | Constructor | A's initialiser | Actual A init? | Effect |
|------|-------------|-----------------|----------------|--------|
| 1 | `D()` calls `A(99)` | D's init list | ✅ Yes (most-derived) | value = 99 |
| 2 | `B()` attempts `A(10)` | B's init list | ❌ No (ignored) | Skipped |
| 3 | `C()` attempts `A(20)` | C's init list | ❌ No (ignored) | Skipped |
| 4 | `B()` body | → | → | Prints "B constructed" |
| 5 | `C()` body | → | → | Prints "C constructed" |
| 6 | `D()` body | → | → | Prints "D constructed" |

### 4.5.6 Virtual Inheritance with Non-Default Constructor


If A does NOT have a default constructor, the most-derived class **must** explicitly initialise A:

```cpp
#include <iostream>
using namespace std;

class A {
public:
    int id;
    A(int i) : id(i) {}    // no default constructor
};

class B : virtual public A {
public:
    B() : A(0) {}          // ignored when part of D, but needed for standalone B
};

class C : virtual public A {
public:
    C() : A(0) {}          // ignored when part of D, needed for standalone C
};

class D : public B, public C {
public:
    D() : A(999), B(), C() {}   // MUST initialise A → most-derived
};

int main() {
    D d;
    cout << "d.id = " << d.id << endl;   // 999
    B b;
    cout << "b.id = " << b.id << endl;   // 0 (B standalone, B initialises A)
    return 0;
}
```

**Output:**
```
d.id = 999
b.id = 0
```

### 4.5.7 When Is Virtual Inheritance Needed?


| Scenario | Virtual Inheritance Needed? | Example |
|----------|---------------------------|---------|
| Two bases with unrelated members | No | Camera + Phone |
| Diamond shape, no common members used | Optional | Shared base has no data |
| Diamond shape, common data members used | **Yes** | Both bases use ancestor's data |
| Diamond shape, virtual functions from ancestor | **Yes** | Override resolution needs single vtable |
| Diamond shape, dynamic_cast to ancestor | **Yes** | Cast requires unique base subobject |
| Mixin classes (e.g., `Printable`, `Serializable`) | **Yes** | Standard pattern for mixins |

### 4.5.8 Performance Implications of Virtual Inheritance


| Aspect | Without Virtual | With Virtual |
|--------|----------------|--------------|
| Object size | Sum of all base sizes | Sum + vbase pointers (8 bytes per virtual base) |
| Member access | Direct offset | Indirect through vbptr (extra indirection) |
| Construction | Simple chain | Virtual base initialised first (extra check) |
| Upcast | Trivial offset | May use thunk function for adjustment |
| Cache friendliness | High (contiguous) | Lower (extra indirection) |

---

## 4.6 Constructor and Destructor Order in Inheritance

### One-Sentence Takeaway


Construction proceeds from base to derived (virtual bases first, then regular bases, then members, then derived body); destruction is the exact reverse.

### 4.6.1 Construction Order Rules


For a derived class object, constructors execute in this precise order:

1. **Virtual base classes** → in depth-first, left-to-right order (most-derived initialises)
2. **Non-virtual base classes** → in declaration order (left to right)
3. **Member objects** → in declaration order (within the class)
4. **Derived class constructor body** → executes last

### 4.6.2 Destruction Order Rules


Destruction is the **exact reverse** of construction:

1. **Derived class destructor body** → executes first
2. **Member objects** → destroyed in reverse declaration order
3. **Non-virtual base classes** → destroyed in reverse declaration order
4. **Virtual base classes** → destroyed last

### 4.6.3 Complete Demonstration → All Cases


```cpp
#include <iostream>
using namespace std;

struct Member {
    string name;
    Member(string n) : name(n) {
        cout << "  Member " << name << " constructed" << endl;
    }
    ~Member() {
        cout << "  Member " << name << " destroyed" << endl;
    }
};

struct VB {
    string name;
    VB(string n) : name(n) {
        cout << "VB " << name << " constructed" << endl;
    }
    ~VB() {
        cout << "VB " << name << " destroyed" << endl;
    }
};

struct Base1 {
    Base1() { cout << "Base1 constructed" << endl; }
    ~Base1() { cout << "Base1 destroyed" << endl; }
};

struct Base2 {
    Base2() { cout << "Base2 constructed" << endl; }
    ~Base2() { cout << "Base2 destroyed" << endl; }
};

struct Derived : virtual public VB, public Base1, public Base2 {
    Member m1, m2;
    Derived() : VB("VirtualBase"), Base1(), Base2(), m1("one"), m2("two") {
        cout << "Derived body constructed" << endl;
    }
    ~Derived() {
        cout << "Derived body destroyed" << endl;
    }
};

int main() {
    cout << "Creating Derived object:" << endl;
    Derived d;
    cout << "\nDestroying Derived object:" << endl;
    return 0;
}
```

**Output:**
```
Creating Derived object:
VB VirtualBase constructed
Base1 constructed
Base2 constructed
  Member one constructed
  Member two constructed
Derived body constructed

Destroying Derived object:
Derived body destroyed
  Member two destroyed
  Member one destroyed
Base2 destroyed
Base1 destroyed
VB VirtualBase destroyed
```

**Dry Run Trace Table → Construction:**

| Phase | Order | What Runs | Output |
|-------|-------|-----------|--------|
| 1 | Virtual base | VB("VirtualBase") | `VB VirtualBase constructed` |
| 2 | Non-virtual base #1 | Base1() | `Base1 constructed` |
| 3 | Non-virtual base #2 | Base2() | `Base2 constructed` |
| 4 | Member #1 (in order) | Member("one") | `Member one constructed` |
| 5 | Member #2 (in order) | Member("two") | `Member two constructed` |
| 6 | Derived body | Derived::Derived() | `Derived body constructed` |

**Dry Run Trace Table → Destruction:**

| Phase | Order | What Runs | Output |
|-------|-------|-----------|--------|
| 1 | Derived body | ~Derived() | `Derived body destroyed` |
| 2 | Member #2 (reverse) | ~Member("two") | `Member two destroyed` |
| 3 | Member #1 (reverse) | ~Member("one") | `Member one destroyed` |
| 4 | Non-virtual base #2 (reverse) | ~Base2() | `Base2 destroyed` |
| 5 | Non-virtual base #1 (reverse) | ~Base1() | `Base1 destroyed` |
| 6 | Virtual base (last) | ~VB() | `VB VirtualBase destroyed` |

### 4.6.4 Practical Consequences


| Scenario | Problem | Solution |
|----------|---------|----------|
| Calling virtual function in constructor | Override not active yet (base executes before derived is built) | Don't call virtual functions in constructors/destructors |
| Throwing in constructor | Object not fully constructed; destructor NOT called for this class | Use RAII wrappers for cleanup |
| Member depends on base data | Base not initialised until base constructor runs | Order is guaranteed: base before members |
| Exception in destructor | Stack unwinding may call terminate() | Never let exceptions escape destructors |

### 4.6.5 Calling Virtual Functions in Constructor → Demonstration


```cpp
#include <iostream>
using namespace std;

class Base {
public:
    Base() { print(); }    // calls Base::print, NOT Derived::print
    virtual void print() { cout << "Base::print" << endl; }
};

class Derived : public Base {
public:
    Derived() { print(); } // calls Derived::print
    void print() override { cout << "Derived::print" << endl; }
};

int main() {
    Derived d;
    return 0;
}
```

**Output:**
```
Base::print
Derived::print
```

**Why:** During Base constructor execution, the Derived object doesn't exist yet → the vtable points to Base's virtual functions. The override is not active until the Derived component is being constructed.

---

## 4.7 IS-A vs HAS-A Relationship

### One-Sentence Takeaway


IS-A models inheritance (subtype polymorphism); HAS-A models composition (containment). Prefer HAS-A unless a true subtype relationship exists.

### 4.7.1 Definitions


| Relationship | Meaning | C++ Mechanism | Direction |
|-------------|---------|---------------|-----------|
| **IS-A** | A is a type of B | Public inheritance | Dog IS-A Animal |
| **HAS-A** | A contains/uses B | Composition or aggregation | Car HAS-A Engine |

### 4.7.2 Complete Comparison Table


| Aspect | IS-A (Inheritance) | HAS-A (Composition) |
|--------|-------------------|---------------------|
| Relationship | "is a kind of" | "has a" / "contains a" |
| C++ syntax | `class D : public B {}` | `class D { B member_; }` |
| Coupling | Strong (inherits interface + impl) | Weak (encapsulated member) |
| Reuse | White-box (inherits internals) | Black-box (uses interface) |
| Polymorphism | Yes (via base pointer) | No |
| Lifetime coupling | Base + derived always together | Can share, independent lifetimes |
| Testability | Harder (parent needed) | Easier (mock dependencies) |
| Encapsulation | Weaker (derived accesses protected) | Stronger (private member) |
| Typical depth | 2-3 levels max | 1 level (flat) |
| Future flexibility | Lower | Higher (swap implementation) |
| When to use | True subtype, polymorphic behaviour | Functionality reuse, modular design |

### 4.7.3 Correct IS-A Example


```cpp
#include <iostream>
#include <string>
using namespace std;

class Bird {
public:
    virtual void fly() {
        cout << "Bird flying" << endl;
    }
    virtual ~Bird() {}
};

class Sparrow : public Bird {
public:
    void fly() override {
        cout << "Sparrow flying swiftly" << endl;
    }
};

void letItFly(Bird& b) {
    b.fly();    // polymorphic → works for any Bird
}

int main() {
    Sparrow s;
    letItFly(s);    // Sparrow IS-A Bird
    return 0;
}
```

**Output:**
```
Sparrow flying swiftly
```

### 4.7.4 Correct HAS-A Example


```cpp
#include <iostream>
#include <string>
using namespace std;

class Engine {
private:
    int horsepower;
public:
    Engine(int hp) : horsepower(hp) {}
    void start() {
        cout << "Engine (" << horsepower << "HP) started" << endl;
    }
};

class Car {
private:
    Engine engine;        // Car HAS-A Engine
    string model;
public:
    Car(string m, int hp) : model(m), engine(hp) {}
    void start() {
        cout << model << ": ";
        engine.start();   // delegates to engine
    }
};

int main() {
    Car myCar("Sedan", 200);
    myCar.start();
    return 0;
}
```

**Output:**
```
Sedan: Engine (200HP) started
```

### 4.7.5 When Inheritance is WRONG (IS-A Mistake)


```cpp
// BAD: A Square IS-NOT a Rectangle (mathematically yes, OOP no)
class Rectangle {
public:
    virtual void setWidth(int w) { width_ = w; }
    virtual void setHeight(int h) { height_ = h; }
    virtual int area() const { return width_ * height_; }
    virtual ~Rectangle() {}
private:
    int width_ = 0, height_ = 0;
};

class Square : public Rectangle {
public:
    void setWidth(int w) override {
        Rectangle::setWidth(w);
        Rectangle::setHeight(w);   // violates LSP → changes height!
    }
    void setHeight(int h) override {
        Rectangle::setWidth(h);    // violates LSP → changes width!
        Rectangle::setHeight(h);
    }
};
```

**The Liskov Substitution Principle (LSP) violation:** A Square is NOT substitutable for a Rectangle because `setWidth` on a Rectangle should only change width, but on a Square it changes both. **Prefer composition or a common abstract base.**

### 4.7.6 HAS-A over Private Inheritance


```cpp
// AVOID: Private inheritance for reuse
class Engine {
public:
    void start() { cout << "Engine started" << endl; }
};

class Car : private Engine {   // implemented-in-terms-of
public:
    void startCar() { start(); }   // wrapping
};

// PREFER: Composition instead
class CarBetter {
private:
    Engine engine_;    // HAS-A
public:
    void startCar() { engine_.start(); }
};
```

**Decision Framework:**

```
Is it a true subtype?
    ├── Yes → Public inheritance (IS-A)
    └── No  → Does the class just need functionality?
              ├── Yes → Composition (HAS-A)
              └── No  → Neither; unrelated
```

### 4.7.7 IS-A vs HAS-A Code Comparison


```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// --- IS-A Example ---
class Employee {
protected:
    string name;
    int id;
public:
    Employee(string n, int i) : name(n), id(i) {}
    virtual double calculatePay() const = 0;
    virtual ~Employee() {}
};

class Manager : public Employee {       // IS-A
private:
    double salary;
public:
    Manager(string n, int i, double s) : Employee(n, i), salary(s) {}
    double calculatePay() const override {
        return salary + 5000;           // bonus
    }
};

class Developer : public Employee {     // IS-A
private:
    double hourlyRate;
    int hoursWorked;
public:
    Developer(string n, int i, double hr, int hw)
        : Employee(n, i), hourlyRate(hr), hoursWorked(hw) {}
    double calculatePay() const override {
        return hourlyRate * hoursWorked;
    }
};

// --- HAS-A Example ---
class Department {
private:
    string name;
    vector<Employee*> employees;        // HAS-A
public:
    Department(string n) : name(n) {}
    void addEmployee(Employee* e) {
        employees.push_back(e);
    }
    double totalPayroll() const {
        double total = 0;
        for (Employee* e : employees)
            total += e->calculatePay();
        return total;
    }
};

int main() {
    Manager m("Alice", 101, 80000);
    Developer d("Bob", 102, 100, 160);
    
    Department dept("Engineering");
    dept.addEmployee(&m);               // HAS-A relationship
    dept.addEmployee(&d);
    
    cout << "Total payroll for " << "Engineering: $"
         << dept.totalPayroll() << endl;
    return 0;
}
```

**Output:**
```
Total payroll for Engineering: $101000
```

---

## 4.8 Upcasting and Downcasting

### One-Sentence Takeaway


Upcasting (derived → base) is always safe and implicit; downcasting (base → derived) requires explicit casting and runtime checks via dynamic_cast for polymorphic types.

### 4.8.1 Definitions


| Term | Direction | Safety | Syntax |
|------|-----------|--------|--------|
| **Upcast** | Derived* → Base* | ✅ Always safe (implicit) | `Base* bp = &derived;` |
| **Downcast** | Base* → Derived* | ⚠️ Needs runtime check | `Derived* dp = dynamic_cast<Derived*>(bp);` |

### 4.8.2 Why Upcasting is Safe


A Derived object contains a complete Base subobject at a known offset. Converting a Derived* to Base* just adjusts the pointer to point to that subobject → no data is lost.

```
Derived object:
+----------------+  <-- derived ptr
| Base subobject |  <-- base ptr (after upcast)
+----------------+
| Derived members|
+----------------+
```

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    void baseFunc() { cout << "Base function" << endl; }
};

class Derived : public Base {
public:
    void derivedFunc() { cout << "Derived function" << endl; }
};

int main() {
    Derived d;
    Base* bp = &d;         // implicit upcast → always works
    bp->baseFunc();        // OK
    // bp->derivedFunc();  // ERROR: Base* cannot see Derived members
    
    // Upcast reference
    Base& br = d;          // implicit upcast via reference
    br.baseFunc();         // OK
    return 0;
}
```

**Output:**
```
Base function
Base function
```

### 4.8.3 Why Downcasting is Dangerous


Downcasting is dangerous because a Base pointer might not point to a Derived object at all:

```cpp
Base* bp1 = new Derived();   // actually points to Derived
Base* bp2 = new Base();      // actually points to Base (no Derived!)

// If we downcast bp2 to Derived*, we get undefined behaviour
```

### 4.8.4 Downcasting with dynamic_cast (Safe)


`dynamic_cast` performs a runtime check and returns `nullptr` for pointers (or throws `std::bad_cast` for references) if the cast is invalid. Requires at least one virtual function in the base class (RTTI).

```cpp
#include <iostream>
#include <typeinfo>
using namespace std;

class Base {
public:
    virtual ~Base() {}     // needed for dynamic_cast (RTTI)
};

class Derived : public Base {
public:
    void specificFunc() {
        cout << "Derived-specific function" << endl;
    }
};

class Other : public Base {
public:
    void otherFunc() {
        cout << "Other-specific function" << endl;
    }
};

int main() {
    Base* arr[] = { new Derived(), new Other(), new Derived() };
    
    for (Base* bp : arr) {
        // Safe downcast with dynamic_cast
        Derived* dp = dynamic_cast<Derived*>(bp);
        if (dp) {
            cout << "Downcast to Derived succeeded: ";
            dp->specificFunc();
        } else {
            cout << "Not a Derived object" << endl;
        }
    }
    
    // Cleanup
    for (Base* bp : arr) delete bp;
    return 0;
}
```

**Output:**
```
Downcast to Derived succeeded: Derived-specific function
Not a Derived object
Downcast to Derived succeeded: Derived-specific function
```

### 4.8.5 Downcasting with static_cast (Unsafe)


`static_cast<Derived*>(basePtr)` performs no runtime check → the programmer guarantees correctness. Undefined behaviour if the pointer doesn't actually point to Derived.

```cpp
Base* bp = new Base();
// Derived* dp = static_cast<Derived*>(bp);  // Compiles, but UB!
// dp->specificFunc();                        // CRASH → not actually a Derived
```

### 4.8.6 Upcasting vs Downcasting → Complete Comparison


| Aspect | Upcast | Downcast (dynamic_cast) | Downcast (static_cast) |
|--------|--------|------------------------|------------------------|
| Direction | Derived → Base | Base → Derived | Base → Derived |
| Safety | ✅ Always safe | ✅ Checked at runtime | ❌ Undefined if wrong |
| Syntax | Implicit or `static_cast` | `dynamic_cast<D*>(b)` | `static_cast<D*>(b)` |
| Performance | Zero cost (compile-time) | Runtime cost (RTTI check) | Zero cost |
| RTTI needed? | No | Yes (virtual function required) | No |
| Returns on failure | N/A | `nullptr` (pointer) / `bad_cast` (ref) | Undefined behaviour |
| Common use | Polymorphic dispatch | Type-safe retrieval | When type is guaranteed |

### 4.8.7 Multiple Inheritance and Casting


With multiple inheritance, upcasting involves pointer adjustment because the base subobject is not at offset 0:

```cpp
#include <iostream>
using namespace std;

class A {
public:
    int a;
    A() : a(1) { cout << "A at " << this << endl; }
};

class B {
public:
    int b;
    B() : b(2) { cout << "B at " << this << endl; }
};

class C : public A, public B {
public:
    int c;
    C() : c(3) { cout << "C at " << this << endl; }
};

int main() {
    C c;
    A* ap = &c;
    B* bp = &c;     // pointer automatically adjusted!
    
    cout << "&c = " << &c << endl;
    cout << "ap = " << ap << " (offset from c: "
         << (long)((char*)ap - (char*)&c) << ")" << endl;
    cout << "bp = " << bp << " (offset from c: "
         << (long)((char*)bp - (char*)&c) << ")" << endl;
    return 0;
}
```

**Output (typical):**
```
A at 0x7ffd1230
B at 0x7ffd1234
C at 0x7ffd1230
&c = 0x7ffd1230
ap = 0x7ffd1230 (offset from c: 0)
bp = 0x7ffd1234 (offset from c: 4)
```

The compiler automatically adjusts the pointer when casting to B → the B subobject is at offset 4 within C.

### 4.8.8 cross_cast Pattern


When you need to cast across a hierarchy (sibling cast), `dynamic_cast` handles this:

```cpp
class Base { public: virtual ~Base() {} };
class A : public Base {};
class B : public Base {};
class C : public A, public B {};  // inherits Base twice!

// dynamic_cast can navigate the entire hierarchy
```

### 4.8.9 Dynamic Cast Cost Analysis


| Aspect | dynamic_cast | static_cast |
|--------|-------------|-------------|
| Overhead | Runtime type check (RTTI lookup) | Zero |
| Time | ~50-200ns per cast (typical) | ~0ns |
| vtable required | Yes | No |
| Throwing form | `std::bad_cast` for references | N/A |

---

## 4.9 Interview Corner

### One-Sentence Takeaway


These are the most commonly asked C++ inheritance interview questions, covering the diamond problem, object slicing, virtual inheritance, and best practices.

---

### Q1: What is the diamond problem and how does virtual inheritance solve it?


**Answer:**

The diamond problem occurs in multiple inheritance when a class inherits from two classes that share a common ancestor. Without virtual inheritance, the most-derived class contains **two separate copies** of the shared ancestor's members, causing ambiguity when trying to access them.

**Without virtual inheritance (problematic):**
```cpp
class A { public: int x; };
class B : public A {};
class C : public A {};
class D : public B, public C {};

// D contains TWO copies of A::x
// d.x is ambiguous
```

**With virtual inheritance (solved):**
```cpp
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};

// D contains ONE copy of A::x
// d.x is unambiguous
```

**How it works:** The compiler inserts **virtual base pointers (vbptr)** in B and C that point to a shared A subobject. The most-derived class (D) is responsible for initialising A, and the intermediate classes' constructor calls to A are **ignored** when they are part of a more-derived object.

**Memory layout comparison:**

| Without Virtual | With Virtual |
|----------------|--------------|
| Two separate A subobjects | One shared A subobject |
| Larger size | Extra vbase pointers (8 bytes each) |
| Direct offset access | Indirect through vbptr |
| Ambiguous member access | Unambiguous member access |

---

### Q2: What is object slicing and how do you prevent it?


**Answer:**

Object slicing occurs when a derived class object is **copied by value** to a base class object. The derived-specific members are "sliced off," losing data and behaviour.

```cpp
#include <iostream>
#include <vector>
using namespace std;

class Base {
public:
    virtual void speak() {
        cout << "Base speaking" << endl;
    }
};

class Derived : public Base {
private:
    string extraData;     // will be sliced off
public:
    Derived(string s) : extraData(s) {}
    void speak() override {
        cout << "Derived speaking with data: " << extraData << endl;
    }
};

int main() {
    Derived d("secret");
    
    // SLICING HAPPENS HERE:
    Base b = d;           // copy by value → slices!
    b.speak();            // calls Base::speak, NOT Derived::speak
    
    // NO SLICING (correct):
    Base* bp = &d;        // pointer → no slicing
    bp->speak();          // calls Derived::speak (virtual dispatch)
    
    Base& br = d;         // reference → no slicing
    br.speak();           // calls Derived::speak
    return 0;
}
```

**Output:**
```
Base speaking
Derived speaking with data: secret
Derived speaking with data: secret
```

**How to prevent slicing:**

| Method | How |
|--------|-----|
| Use pointers/references | Always pass/return by pointer or reference, never by value |
| Make base class abstract | Prevent instantiation of base with pure virtual functions |
| Delete copy operations in base | `Base(const Base&) = delete;` (drastic but effective) |
| Use `final` for derived classes | Prevents further derivation where slicing is a risk |
| Compiler warnings | `-W slicing` in GCC/Clang |

**Container pitfall:**
```cpp
vector<Base> vec;    // BAD: stores Base by value → slices!
vec.push_back(d);    // slices d to Base

vector<Base*> vec2;  // GOOD: stores pointers → no slicing
vec2.push_back(&d);  // OK
```

---

### Q3: Explain virtual inheritance memory layout. How does the compiler implement it?


**Answer:**

When a class uses virtual inheritance, the compiler inserts a **virtual base pointer (vbptr)** into the class layout. This pointer points to a **virtual base table (vbtable)** that stores the offset from the derived class to the shared virtual base subobject.

**Memory layout for standard single inheritance:**
```
class B : virtual public A { int b; };

Object B:
+------------------+
| vbptr (8 bytes)  |  --> vbtable: [ offset to A = 16 ]
+------------------+
| B::b (4 bytes)   |
+------------------+
| padding           |
+------------------+
| A subobject       |
|   A members       |
+------------------+
```

**Memory layout for diamond (D : B, C, both virtual A):**
```
Object D:
+------------------+
| B vbptr          |  --> B's vbtable: [ offset to A = 24 ]
+------------------+
| B members        |
+------------------+
| C vbptr          |  --> C's vbtable: [ offset to A = 16 ]
+------------------+
| C members        |
+------------------+
| D members        |
+------------------+
| A subobject       |
|   A members       |
+------------------+  (single copy, shared by B and C)
```

**Accessing a virtual base member:**
```cpp
d.A::x = 42;
// Compiler translates to:
// *(reinterpret_cast<int*>(reinterpret_cast<char*>(&d) + vbptr->offset_to_A))
```

**Compiler-specific differences:**

| Compiler | Layout Strategy | vbptr Location |
|----------|----------------|----------------|
| GCC/Clang | Virtual base at **end** of object | vbptr at start of each virtually-derived class |
| MSVC | Virtual base at **negative offset** | vbptr before class data; vbtable entry is negative offset |
| ICC | Configurable | Follows target ABI |

**Cost analysis:**
- Each virtual inheritance adds **8 bytes** (vbptr) per intermediate class
- Each member access through virtual base adds **one extra indirection**
- Construction: most-derived must check if virtual base already initialised (extra flag)

---

### Q4: Can you call a virtual function from a constructor or destructor? What happens?


**Answer:**

Yes, you can call virtual functions from constructors and destructors, but they **do NOT dispatch to overrides in derived classes**. The call resolves to the function version of the class currently being constructed/destroyed.

**Why:** During base class construction, the derived portion doesn't exist yet → the vtable pointer (vptr) points to the base class's vtable, not the derived class's. The same applies during destruction in reverse.

**Example:**
```cpp
#include <iostream>
using namespace std;

class Base {
public:
    Base() { print(); }           // calls Base::print
    virtual void print() {
        cout << "Base::print" << endl;
    }
    virtual ~Base() {}
};

class Derived : public Base {
public:
    Derived() { print(); }        // calls Derived::print
    void print() override {
        cout << "Derived::print" << endl;
    }
};

int main() {
    Derived d;
    return 0;
}
```

**Output:**
```
Base::print
Derived::print
```

**Best practice:** Never rely on virtual dispatch in constructors or destructors. Prefer a separate `init()` method called after construction if polymorphic behaviour is needed.

---

### Q5: What is the difference between `public`, `protected`, and `private` inheritance?


**Answer:**

| Aspect | public | protected | private |
|--------|--------|-----------|---------|
| Base public members become | public | protected | private |
| Base protected members become | protected | protected | private |
| Base private members | inaccessible | inaccessible | inaccessible |
| Models is-a? | ✅ Yes | ❌ No | ❌ No |
| Can upcast to base? | ✅ Implicitly | ❌ Only within derived hierarchy | ❌ No |
| Frequency of use | ~95% | <1% | ~4% |
| Common use case | Subtype polymorphism | Rare; implementation sharing | Implemented-in-terms-of |

**When to use private inheritance (the only valid cases):**
1. Need to inherit protected members but not expose the interface
2. Need to override a virtual function but not expose the base
3. Empty base optimisation (EBO) for size optimisation

**Prefer composition over private inheritance** in virtually all cases where you just need to reuse implementation.

---

### Q6: What does the `final` specifier do in inheritance?


**Answer:**

`final` can be applied to both classes and virtual functions:

- **`final` class:** Cannot be used as a base class
- **`final` virtual function:** Cannot be overridden in derived classes

```cpp
class Base {
public:
    virtual void f();
    virtual void g();
};

class Intermediate : public Base {
public:
    void f() override final;    // f cannot be overridden further
};

class Derived : public Intermediate {
public:
    // void f() override;      // ERROR: f is final in Intermediate
    void g() override;          // OK: g is not final
};

class FinalClass final : public Base {
    // This class cannot be inherited from
};

// class SubClass : public FinalClass {};  // ERROR: FinalClass is final
```

**Use cases:**
1. **Security:** Prevent further derivation of critical classes
2. **Design clarity:** Intentional leaf class in hierarchy
3. **Devirtualisation:** Compiler can devirtualise calls on final classes (optimisation)
4. **API stability:** Guarantee no further overrides in library interfaces

---

### Q7: Explain the Liskov Substitution Principle in the context of inheritance.


**Answer:**

The Liskov Substitution Principle (LSP) states that **objects of a derived class should be substitutable for objects of the base class without altering the correctness of the program**. In other words, if `D` is a subtype of `B`, then any code using `B` should work correctly when `B` is replaced with `D`.

**Violation → Classic Square/Rectangle:**
```cpp
class Rectangle {
public:
    virtual void setWidth(int w) { w_ = w; }
    virtual void setHeight(int h) { h_ = h; }
    int area() const { return w_ * h_; }
private:
    int w_ = 0, h_ = 0;
};

class Square : public Rectangle {
public:
    void setWidth(int w) override {
        Rectangle::setWidth(w);
        Rectangle::setHeight(w);   // LSP VIOLATION
    }
    void setHeight(int h) override {
        Rectangle::setWidth(h);
        Rectangle::setHeight(h);   // LSP VIOLATION
    }
};

void resize(Rectangle& r) {
    r.setWidth(5);
    r.setHeight(10);
    cout << "Area: " << r.area();   // Expects 50, gets 100 for Square
}
```

**How to avoid LSP violations:**
1. Don't weaken base class invariants
2. Don't strengthen preconditions in derived classes
3. Don't weaken postconditions in derived classes
4. Make base classes abstract if behaviour contract is complex
5. Favour composition over inheritance when behaviour differs

**Correct approach → common abstract base:**
```cpp
class Shape {
public:
    virtual int area() const = 0;
    virtual ~Shape() {}
};

class Rectangle : public Shape {
public:
    Rectangle(int w, int h) : w_(w), h_(h) {}
    int area() const override { return w_ * h_; }
private:
    int w_, h_;
};

class Square : public Shape {
public:
    Square(int s) : side_(s) {}
    int area() const override { return side_ * side_; }
private:
    int side_;
};
```

---

### Q8: How do you prevent a class from being inherited in C++?


**Answer:**

**Method 1: `final` specifier (C++11, preferred):**
```cpp
class FinalClass final {
    // Cannot be inherited
};
```

**Method 2: Private constructor + friend (pre-C++11):**
```cpp
class NotInheritable {
private:
    NotInheritable() {}
public:
    static NotInheritable* create() {
        return new NotInheritable();
    }
    ~NotInheritable() {}
};

// class Derived : public NotInheritable {};  // ERROR: cannot access private constructor
```

**Method 3: Virtual inheritance trick with a private virtual base:**
```cpp
class Seal {
    friend class Sealed;
    Seal() {}
};

class Sealed : virtual public Seal {
    // Can be instantiated (Seal's constructor accessible via friendship)
    // But cannot be further derived:
    //   class Derived : public Sealed { ... };
    //   Derived's constructor would need to call Seal() directly (bypassing Sealed),
    //   but Seal's constructor is private to anyone who is not a friend of Seal.
};
```

**Method 4: Template-based (C++11, most robust):**
```cpp
template <typename T>
class MakeFinal {
    friend T;
private:
    MakeFinal() {}
};

class SealedClass : virtual public MakeFinal<SealedClass> {
public:
    SealedClass() {}
};

// class Derived : public SealedClass {};  // ERROR: cannot access MakeFinal constructor
```

---

### Q9: What is the difference between early (static) binding and late (dynamic) binding in inheritance?


**Answer:**

| Aspect | Early Binding (Static) | Late Binding (Dynamic) |
|--------|----------------------|----------------------|
| Resolution time | Compile time | Runtime |
| Mechanism | Compiler knows exact type | vtable lookup via vptr |
| Performance | Zero overhead | ~1 indirection per call |
| Functions | Non-virtual, static, template | Virtual functions |
| C++ keyword | Default behaviour | `virtual` |

```cpp
class Base {
public:
    void nonVirtual() { cout << "Base::nonVirtual" << endl; }
    virtual void isVirtual() { cout << "Base::isVirtual" << endl; }
};

class Derived : public Base {
public:
    void nonVirtual() { cout << "Derived::nonVirtual" << endl; }   // hides
    void isVirtual() override { cout << "Derived::isVirtual" << endl; }
};

int main() {
    Derived d;
    Base* bp = &d;
    
    bp->nonVirtual();    // Early binding: calls Base::nonVirtual
    bp->isVirtual();     // Late binding: calls Derived::isVirtual
    return 0;
}
```

**Output:**
```
Base::nonVirtual
Derived::isVirtual
```

---

### Q10: What happens if a destructor is not virtual in a base class?


**Answer:**

If a base class destructor is **not virtual**, deleting a derived object through a base pointer causes **undefined behaviour** → typically only the base destructor runs, and the derived part leaks resources.

```cpp
class Base {
public:
    ~Base() { cout << "~Base" << endl; }    // non-virtual!
};

class Derived : public Base {
private:
    int* data = new int[100];               // resource
public:
    ~Derived() {
        cout << "~Derived" << endl;
        delete[] data;                       // NEVER CALLED!
    }
};

int main() {
    Base* bp = new Derived();
    delete bp;    // UB: calls only ~Base, not ~Derived
    return 0;
}
```

**Output:** `~Base` (Derived destructor never called → memory leak!)

**Fix: make destructor virtual:**
```cpp
class Base {
public:
    virtual ~Base() { cout << "~Base" << endl; }
};
```

**Output:** `~Derived~Base` (both called correctly)

**Rule of thumb:** If a class has any virtual function, always make the destructor virtual. If a class is designed as a base class (even with no virtual functions), give it a virtual destructor.

---

## 4.10 Applications in Real Systems

### One-Sentence Takeaway


Inheritance is the backbone of major C++ frameworks; understanding real-world hierarchies like Qt and iostream reveals how the concepts are applied at scale.

### 4.10.1 Qt Widget Hierarchy


Qt, the widely-used C++ GUI framework, uses a deep inheritance tree:

```
QObject
  |
  +-- QWidget
  |     |
  |     +-- QFrame
  |     |     |
  |     |     +-- QLabel, QLCDNumber
  |     |     +-- QSplitter
  |     |     +-- QAbstractScrollArea
  |     |           |
  |     |           +-- QTextEdit, QPlainTextEdit
  |     |           +-- QAbstractItemView
  |     |                 |
  |     |                 +-- QListView, QTableView, QTreeView
  |     |
  |     +-- QAbstractButton
  |     |     |
  |     |     +-- QPushButton, QRadioButton, QCheckBox
  |     |     +-- QToolButton
  |     |
  |     +-- QComboBox
  |     +-- QLineEdit
  |     +-- QSlider, QDial
  |
  +-- QLayout              (abstract, not a widget)
  |     +-- QHBoxLayout
  |     +-- QVBoxLayout
  |     +-- QGridLayout
  |
  +-- QTimer
  +-- QStringListModel
```

**Key inheritance features used:**

1. **Virtual base for signals/slots:** QObject provides the signal-slot mechanism via virtual functions
2. **Overridden paintEvent():** Each widget override `QWidget::paintEvent()` to draw itself
3. **Hierarchical ownership:** QObject parent-child tree manages memory (deleting parent deletes children)
4. **Multilevel inheritance:** `QPushButton` inherits `QAbstractButton` → `QWidget` → `QObject` → nothing
5. **Virtual destructor:** `QObject` has a virtual destructor, ensuring proper cleanup

```cpp
// Simplified illustration of Qt-style hierarchy
class QObject {
public:
    virtual ~QObject() {}
    void setParent(QObject* p) { parent_ = p; }
    virtual const char* className() const { return "QObject"; }
private:
    QObject* parent_ = nullptr;
};

class QWidget : public QObject {
public:
    void setGeometry(int x, int y, int w, int h) {
        x_ = x; y_ = y; w_ = w; h_ = h;
    }
    virtual void paintEvent() { /* default paint */ }
    const char* className() const override { return "QWidget"; }
private:
    int x_ = 0, y_ = 0, w_ = 100, h_ = 100;
};

class QAbstractButton : public QWidget {
public:
    void setText(const char* t) { text_ = t; }
    virtual void click() { /* emit clicked signal */ }
    void paintEvent() override { /* draw button */ }
    const char* className() const override { return "QAbstractButton"; }
private:
    const char* text_ = "";
};

class QPushButton : public QAbstractButton {
public:
    void paintEvent() override { /* draw push button */ }
    const char* className() const override { return "QPushButton"; }
};
```

### 4.10.2 C++ iostream Hierarchy


The standard iostream library uses inheritance extensively:

```
                      ios_base
                          |
                        ios
                       /   \
                 istream   ostream
                    |        |
                    +--------+
                        |
                     iostream
                    /        \
              fstream      stringstream
```

**Breakdown:**

| Class | Inherits From | Purpose |
|-------|--------------|---------|
| `ios_base` | (none) | Formatting flags, locale, precision |
| `ios` | `ios_base` | Error state, streambuf association |
| `istream` | `ios` | Input operations (`>>`, `get`, `read`) |
| `ostream` | `ios` | Output operations (`<<`, `put`, `write`) |
| `iostream` | `istream`, `ostream` | Bidirectional I/O (multiple inheritance) |
| `fstream` | `iostream` | File I/O |
| `stringstream` | `iostream` | String-based I/O |

**Note the diamond:** `iostream` inherits from both `istream` and `ostream`, which both inherit from `ios`. This is a **diamond** that uses virtual inheritance:

```cpp
// Simplified iostream layout
class ios : virtual public ios_base { /* ... */ };
class istream : virtual public ios { /* ... */ };
class ostream : virtual public ios { /* ... */ };
class iostream : public istream, public ostream { /* ... */ };
```

`ios` is a virtual base of both `istream` and `ostream`, ensuring `iostream` has only one `ios` and one `ios_base` subobject.

**Why virtual inheritance here:**
1. A `fstream` should have exactly one format state (one `ios_base`)
2. A `fstream` should have exactly one error state (one `ios`)
3. Override `sync()` once, not twice
4. Consistent `tie()`, `rdbuf()`, and `fill()` across both input and output sides

### 4.10.3 Exception Class Hierarchy


C++ standard exception hierarchy:

```
  exception
      |
  +---+---+
  |       |
logic_error  runtime_error
  |       |       |       |
invalid_argument  range_error
out_of_range      overflow_error
length_error      underflow_error
domain_error      system_error
```

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

void processAge(int age) {
    if (age < 0)
        throw invalid_argument("Age cannot be negative");
    if (age > 150)
        throw out_of_range("Age exceeds reasonable limit");
    cout << "Age " << age << " is valid" << endl;
}

int main() {
    try {
        processAge(-5);
    } catch (const invalid_argument& e) {
        cout << "Invalid argument: " << e.what() << endl;
    } catch (const out_of_range& e) {
        cout << "Out of range: " << e.what() << endl;
    } catch (const exception& e) {
        cout << "General exception: " << e.what() << endl;
    }
    return 0;
}
```

**Output:**
```
Invalid argument: Age cannot be negative
```

### 4.10.4 Game Development Entity Hierarchy


```cpp
#include <iostream>
#include <vector>
#include <memory>
using namespace std;

class Entity {
protected:
    int id_;
    int x_, y_;
    int health_;
public:
    Entity(int id, int x, int y, int hp)
        : id_(id), x_(x), y_(y), health_(hp) {}
    virtual void update(float deltaTime) = 0;
    virtual void render() const {
        cout << "Entity " << id_ << " at (" << x_ << "," << y_ << ")" << endl;
    }
    virtual void takeDamage(int dmg) { health_ -= dmg; }
    virtual ~Entity() {}
};

class Player : public Entity {
private:
    int score_;
public:
    Player(int id, int x, int y)
        : Entity(id, x, y, 100), score_(0) {}
    void update(float dt) override {
        // Handle keyboard input, move, etc.
        cout << "Player updated (dt=" << dt << ")" << endl;
    }
    void render() const override {
        cout << "[P] ";
        Entity::render();
    }
};

class Enemy : public Entity {
private:
    int damage_;
    int chaseRange_;
public:
    Enemy(int id, int x, int y, int dmg, int range)
        : Entity(id, x, y, 50), damage_(dmg), chaseRange_(range) {}
    void update(float dt) override {
        // AI movement, attack logic
        cout << "Enemy updated (range=" << chaseRange_ << ")" << endl;
    }
    void render() const override {
        cout << "[E] ";
        Entity::render();
    }
};

class Projectile : public Entity {
private:
    int speed_;
    int direction_;
public:
    Projectile(int id, int x, int y, int s, int d)
        : Entity(id, x, y, 1), speed_(s), direction_(d) {}
    void update(float dt) override {
        x_ += speed_ * direction_ * dt;
        cout << "Projectile moved to (" << x_ << "," << y_ << ")" << endl;
    }
    void render() const override {
        cout << "[*] at (" << x_ << "," << y_ << ")" << endl;
    }
};

int main() {
    vector<unique_ptr<Entity>> entities;
    entities.push_back(make_unique<Player>(0, 100, 100));
    entities.push_back(make_unique<Enemy>(1, 500, 300, 10, 200));
    entities.push_back(make_unique<Projectile>(2, 100, 100, 5, 1));
    
    for (auto& e : entities) {
        e->update(0.016f);    // polymorphic update
        e->render();
        cout << "---" << endl;
    }
    return 0;
}
```

### 4.10.5 Device Driver Abstraction


```cpp
#include <iostream>
#include <string>
using namespace std;

class Device {
protected:
    string name_;
    bool opened_ = false;
public:
    Device(const string& name) : name_(name) {}
    virtual bool open() = 0;
    virtual int read(char* buf, int size) = 0;
    virtual int write(const char* buf, int size) = 0;
    virtual bool close() = 0;
    virtual ~Device() {}
};

class USBDevice : public Device {
public:
    USBDevice() : Device("USB Device") {}
    bool open() override {
        cout << "USB: opening device" << endl;
        opened_ = true;
        return true;
    }
    int read(char* buf, int size) override {
        cout << "USB: reading " << size << " bytes" << endl;
        return size;
    }
    int write(const char* buf, int size) override {
        cout << "USB: writing " << size << " bytes" << endl;
        return size;
    }
    bool close() override {
        cout << "USB: closing device" << endl;
        opened_ = false;
        return true;
    }
};

class NetworkDevice : public Device {
private:
    string ip_;
public:
    NetworkDevice(const string& ip) : Device("Network"), ip_(ip) {}
    bool open() override {
        cout << "Network: connecting to " << ip_ << endl;
        opened_ = true;
        return true;
    }
    int read(char* buf, int size) override {
        cout << "Network: receiving " << size << " bytes from " << ip_ << endl;
        return size;
    }
    int write(const char* buf, int size) override {
        cout << "Network: sending " << size << " bytes to " << ip_ << endl;
        return size;
    }
    bool close() override {
        cout << "Network: disconnecting from " << ip_ << endl;
        opened_ = false;
        return true;
    }
};
```

---

## 4.11 Key Takeaways

### Must-Remember Rules


1. **Public inheritance models IS-A** → use it when a derived class truly is a kind of base class
2. **Make base destructors virtual** when a class is intended as a base
3. **Virtual inheritance for diamonds** → ensures a single shared base subobject
4. **Most-derived initialises virtual bases** → intermediate calls are ignored
5. **Construction order:** virtual bases → non-virtual bases → members → body
6. **Destruction order:** exact reverse of construction
7. **dynamic_cast** for safe downcasting (requires RTTI / virtual functions)
8. **Prefer composition over inheritance** for code reuse (HAS-A over IS-A)
9. **Final class** prevents further inheritance; **final function** prevents further overriding
10. **Object slicing** occurs when passing by value → use pointers or references

### Common Pitfalls


| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| Non-virtual destructor in base | Resource leak on polymorphic delete | Always make destructor virtual in base classes |
| Calling virtual functions from constructor | No polymorphic dispatch | Use `init()` pattern or two-phase construction |
| Deep inheritance chains (>3 levels) | Fragile, hard to maintain | Favour composition; flatten hierarchy |
| Ignoring the diamond problem | Ambiguous member access | Use virtual inheritance for shared bases |
| Private inheritance when composition works | Tight coupling | Prefer a member object |
| Object slicing in containers | Lost derived data | Use containers of pointers (smart pointers) |
| Multiple inheritance with conflicting interfaces | Ambiguity, complex layout | Use explicit scope resolution or interfaces |

### Inheritance Design Checklist


- [ ] Is the relationship truly IS-A (LSP satisfied)?
- [ ] Does the base class have a virtual destructor?
- [ ] Are virtual functions avoided in constructors/destructors?
- [ ] Is the inheritance depth manageable (≤3 levels)?
- [ ] Are diamond-shaped hierarchies using virtual inheritance?
- [ ] Is the most-derived class initialising virtual bases?
- [ ] Is dynamic_cast needed? If yes, RTTI is enabled?
- [ ] Are base class abstract where appropriate (pure virtual)?
- [ ] Is the `final` specifier applied to prevent unintended extension?
- [ ] Could composition replace inheritance for any of the relationships?

---

## Chapter Summary

| Section | Core Concept | Code Pattern |
|---------|-------------|--------------|
| Base & Derived | IS-A relationship, base subobject | `class D : public B {}` |
| Access Control | Visibility propagation via specifiers | `public`/`protected`/`private` inheritance |
| Single Inheritance | 1 base, 1 derived | `class Car : public Vehicle` |
| Multilevel Inheritance | A → B → C chain | `class C : public B` (B from A) |
| Multiple Inheritance | 2+ unrelated bases | `class C : public A, public B` |
| Hierarchical Inheritance | 1 base, N derived | `class B, C, D : public A` |
| Hybrid/Diamond | Combined forms with shared ancestor | `B virtual A, C virtual A, D : B, C` |
| Virtual Inheritance | Single shared base subobject | `class B : virtual public A` |
| Construction Order | VB → Bases → Members → Body | Chain calls in initialiser list |
| Upcast | Derived* → Base* (implicit safe) | `Base* bp = &derived;` |
| Downcast | Base* → Derived* (runtime check) | `dynamic_cast<Derived*>(bp)` |
| IS-A | Inheritance | `class D : public B` |
| HAS-A | Composition | `class D { B member_; }` |
| Diamond Problem | Two copies of shared ancestor | Solved via `virtual` inheritance |

---

## Chapter Quiz

1. Which form of inheritance creates a diamond?
   A) Single inheritance
   B) Multilevel inheritance
   C) Multiple inheritance where bases share a common ancestor
   D) Hierarchical inheritance
   <details><summary>Answer&lt;/summary&gt;**C)** When a class inherits from two classes that share a common ancestor, the diamond shape is created.</details>

2. What is the correct construction order for `D` if `B` and `C` virtually inherit `A`?
   A) B, C, A, D
   B) A, B, C, D
   C) D, A, B, C
   D) A is constructed first regardless
   <details><summary>Answer&lt;/summary&gt;**B)** Virtual bases are constructed first (A), then non-virtual bases in declaration order (B, C), then D's body.</details>

3. Which statement about object slicing is true?
   A) Object slicing is prevented by virtual inheritance
   B) Object slicing occurs when passing by reference
   C) Object slicing occurs when a derived object is copied to a base by value
   D) Object slicing only happens with multiple inheritance
   <details><summary>Answer&lt;/summary&gt;**C)** Slicing happens on by-value copy → the derived portion is lost.</details>

4. Which cast is appropriate for safe downcasting?
   A) static_cast
   B) reinterpret_cast
   C) dynamic_cast
   D) const_cast
   <details><summary>Answer&lt;/summary&gt;**C)** dynamic_cast performs a runtime check and returns nullptr on failure.</details>

5. What does the `final` specifier on a class do?
   A) Makes all members const
   B) Prevents the class from being used as a base
   C) Forces all functions to be virtual
   D) Automatically generates a virtual destructor
   <details><summary>Answer&lt;/summary&gt;**B)** `final` on a class means it cannot be inherited from.</details>

6. In private inheritance, what happens to base public members?
   A) They become public
   B) They become protected
   C) They become private
   D) They become inaccessible
   <details><summary>Answer&lt;/summary&gt;**C)** In private inheritance, all base public and protected members become private.</details>

7. True or False: A virtual function called from a base constructor will invoke the derived override.
   A) True
   B) False
   <details><summary>Answer&lt;/summary&gt;**B)** False. During base construction, the derived portion doesn't exist, so the base version is called.</details>

8. Which is NOT a valid reason to use virtual inheritance?
   A) Resolving the diamond problem
   B) Reducing object size
   C) Sharing a common base in multiple inheritance
   D) Allowing the most-derived class to initialise the shared base
   <details><summary>Answer&lt;/summary&gt;**B)** Virtual inheritance increases object size due to vbase pointers.</details>

---

## Exercises

### Review Questions

1. What is the difference between public and private inheritance? When would you use each?
2. Explain how virtual inheritance resolves the diamond problem at the memory layout level.
3. What happens if you delete a derived object through a base pointer whose destructor is not virtual?
4. Why can't virtual functions be safely called from constructors?
5. Describe three different ways to prevent object slicing.

### Application Problems

1. **Media Player Hierarchy:** Design a class hierarchy for media playback:
   - `MediaFile` (base): title, duration, pure virtual `play()` and `stop()`
   - `AudioFile` : MediaFile (add sample rate, bitrate)
   - `VideoFile` : MediaFile (add resolution, frame rate)
   - `AVFile` : AudioFile, VideoFile (resolve diamond with virtual inheritance)
   
   Implement all classes with constructors, `displayInfo()`, and demonstrate polymorphic playback.

2. **Banking System:** Create a banking hierarchy:
   - `Account` (base): account number, balance, `deposit()`, `withdraw()`, `getBalance()`
   - `SavingsAccount` : Account (interest rate, `addInterest()`)
   - `CheckingAccount` : Account (overdraft limit)
   - Show IS-A relationships, proper constructors with initialiser lists

3. **Employee Management:** Implement:
   - `Person` (base): name, age, address
   - `Employee` : Person (employee ID, salary, `calculatePay()`)
   - `Manager` : Employee (bonus percentage, department)
   - `Intern` : Employee (fixed stipend, duration)
   - Demonstrate upcasting and virtual function dispatch

### Challenge Problem

4. **Plugin Architecture:** Design and implement a mini plugin system:
   - `Plugin` (abstract base): `initialize()`, `execute()`, `shutdown()`, plugin name
   - `LoggingPlugin` : Plugin (writes to log file)
   - `EncryptionPlugin` : Plugin (encrypts/decrypts data with given algorithm)
   - `ConfigPlugin` : Plugin (reads/writes configuration)
   - `AdvancedLogger` : LoggingPlugin (adds rotation, compression)
   
   Create a `PluginManager` class (HAS-A relationship with Plugin*) that loads, initialises, and runs all plugins polymorphically. Use virtual destructors throughout. Demonstrate that the manager works with any plugin type without knowing the concrete type.

---

> **Proceed to:** [Polymorphism](./05-polymorphism.md) to learn how virtual functions and dynamic dispatch enable runtime flexibility.

