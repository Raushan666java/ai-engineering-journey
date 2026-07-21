# OOP in Python � Classes, Inheritance, Polymorphism, Dunder Methods

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Define classes with attributes, methods, and constructors |
| LO2 | Use inheritance, method overriding, and super() |
| LO3 | Apply polymorphism through duck typing and abstract classes |
| LO4 | Implement encapsulation with properties and name mangling |
| LO5 | Override dunder methods for custom behavior |
| LO6 | Understand dataclasses, class methods, and static methods |

## Introduction

Understanding oop in python is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering oop in python.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding oop in python is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how oop in python works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind oop in python
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Examples

### Basic Example

```python

## Basic oop in python example
def example():
    """Demonstrate oop in python"""
    result = "Hello, oop in python!"
    print(result)
    return result

example()
```

### Expected Output

```text
Hello, oop in python!
```

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Classes & Objects | __init__, self, attributes, methods |
| 8.2 | Inheritance | super(), MRO, multiple inheritance |
| 8.3 | Polymorphism | duck typing, ABC, @abstractmethod |
| 8.4 | Encapsulation | @property, name mangling |
| 8.5 | Dunder Methods | __str__, __repr__, __eq__, __call__ |
| 8.6 | Advanced Topics | @classmethod, @staticmethod, dataclasses, __slots__ |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Classes] --> B[__init__ + self]
    A --> C[Methods & Attributes]
    D[Inheritance] --> E[super()]
    D --> F[MRO]
    G[Polymorphism] --> H[Duck Typing]
    G --> I[ABC]
    J[Dunder Methods] --> K[__str__, __eq__, ...]
    L[Dataclasses] --> M[Auto __init__, __repr__, __eq__]
```text

## 8.1 Classes and Objects

`python
class Dog:
    species = "Canis familiaris"

    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def description(self):
        return f"{self.name} is {self.age} years old"

    def bark(self, sound="Woof"):
        return f"{self.name} says {sound}"

buddy = Dog("Buddy", 3)
print(buddy.description())  # Buddy is 3 years old
print(buddy.bark())         # Buddy says Woof
print(Dog.species)          # Canis familiaris
print(buddy.species)        # Canis familiaris
`

## 8.2 Inheritance

`python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        raise NotImplementedError

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof"

animals = [Cat("Whiskers"), Dog("Buddy")]
for a in animals:
    print(a.speak())

class Manager(Employee):
    def __init__(self, first, last, pay, employees=None):
        super().__init__(first, last, pay)
        self.employees = employees or []

class A:
    def method(self): return "A"
class B(A):
    def method(self): return "B"
class C(A):
    def method(self): return "C"
class D(B, C): pass

d = D()
print(d.method())  # B (MRO: D -> B -> C -> A)
print(D.__mro__)   # (D, B, C, A, object)
`

## 8.3 Polymorphism

`python
class Duck:
    def quack(self): return "Quack!"
    def fly(self): return "Flap!"

class Person:
    def quack(self): return "I'm quacking!"
    def fly(self): return "I'm flying!"

def make_it_quack(thing):
    print(thing.quack())

make_it_quack(Duck())    # Quack!
make_it_quack(Person())  # I'm quacking!

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float: pass

class Circle(Shape):
    def __init__(self, radius): self.radius = radius
    def area(self): return 3.14159 * self.radius ** 2

c = Circle(5)
print(c.area())  # 78.53975
`

## 8.4 Encapsulation

`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance       # protected
        self.__pin = "1234"           # name mangling

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Negative balance")
        self._balance = amount

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

account = BankAccount("Alice", 1000)
print(account.balance)       # 1000
account.balance = 1500       # setter
print(account._balance)      # 1500 (convention says don't)

## print(account.__pin)       # AttributeError
print(account._BankAccount__pin)  # "1234" (mangled name)
`

## 8.5 Dunder Methods

`python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    def __str__(self):
        return f"'{self.title}' by {self.author}"
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    def __len__(self): return self.pages
    def __eq__(self, other):
        return self.title == other.title and self.author == other.author
    def __lt__(self, other): return self.pages < other.pages
    def __call__(self): return f"Reading '{self.title}'..."

b1 = Book("1984", "Orwell", 328)
b2 = Book("Brave New World", "Huxley", 311)
print(str(b1))   # '1984' by Orwell
print(repr(b1))  # Book('1984', 'Orwell', 328)
print(len(b1))   # 328
print(b1 == b2)  # False
print(b1())      # Reading '1984'...
`

## 8.6 Advanced Topics

`python
@classmethod
def from_string(cls, date_str):
    year, month, day = map(int, date_str.split("-"))
    return cls(year, month, day)

@staticmethod
def is_valid_date(year, month, day):
    return 1 <= month <= 12 and 1 <= day <= 31

from dataclasses import dataclass, field

@dataclass(order=True)
class Person:
    name: str
    age: int
    email: str = ""
    tags: list = field(default_factory=list)

p1 = Person("Alice", 30)
p2 = Person("Alice", 30)
print(p1 == p2)  # True (auto __eq__)
print(p1)        # Person(name='Alice', age=30, email='')

class Point:
    __slots__ = ("x", "y")
    def __init__(self, x, y): self.x, self.y = x, y
`

## TypeScript Parallel

`	ypescript
class Dog {
    species: string = "Canis familiaris";
    constructor(public name: string, public age: number) {}
    description(): string { return ${this.name} is  years old; }
}

abstract class Shape { abstract area(): number; }
class Circle extends Shape {
    constructor(private radius: number) { super(); }
    area(): number { return Math.PI * this.radius ** 2; }
}
`

## Summary

- Classes define blueprints; __init__ initializes; self is the instance reference
- Class attributes shared; instance attributes per-object
- Inheritance: class Child(Parent); super() calls parent
- MRO determines method lookup order in multiple inheritance
- Duck typing: if it has the method, call it
- @property creates controlled access to attributes
- Dunder methods (__str__, __eq__, __len__) customize built-in behavior
- @classmethod receives cls; @staticmethod receives neither
- Dataclasses auto-generate __init__, __repr__, __eq__
- __slots__ reduces memory by eliminating __dict__

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Data container | @dataclass | Manual __init__ boilerplate |
| Alternative constructor | @classmethod from_xxx | Complex __init__ params |
| Getter/setter with logic | @property | Direct attribute access |
| Immutable object | @dataclass(frozen=True) | Manual __setattr__ |
| Memory-sensitive | __slots__ | Default __dict__ |
| Must-implement interface | ABC + @abstractmethod | raise NotImplementedError |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s08-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Class vs instance attributes?</summary>
  <div class="tp-qa-answer"><p>Class attributes shared across all instances (defined in class body). Instance attributes per-object (set in __init__). Modifying via instance creates a shadowing instance attribute.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does super() work?</summary>
  <div class="tp-qa-answer"><p>Returns proxy that delegates to next class in MRO. Single inheritance: calls parent. Multiple inheritance: follows C3 linearization.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Duck typing example?</summary>
  <div class="tp-qa-answer"><p>If object implements needed methods, type doesn't matter. Both Duck and Person with quack() work with make_it_quack(). No inheritance required.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: __str__ vs __repr__?</summary>
  <div class="tp-qa-answer"><p>__str__: human-readable, used by print/str(). __repr__: unambiguous, ideally recreates object, used by debugger. Fallback: __str__ uses __repr__ if missing.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: @classmethod vs @staticmethod?</summary>
  <div class="tp-qa-answer"><p>@classmethod receives cls (the class), used for alternative constructors. @staticmethod receives neither, used for utilities related to the class.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Name mangling?</summary>
  <div class="tp-qa-answer"><p>Double underscore prefixes rename attribute to _ClassName__attr. Prevents accidental overriding in subclasses. Not truly private � still accessible with mangled name.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: Dataclass benefits?</summary>
  <div class="tp-qa-answer"><p>Auto-generates __init__, __repr__, __eq__, __hash__. Supports annotations, defaults, field factories, frozen=True, order=True.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What is MRO?</summary>
  <div class="tp-qa-answer"><p>Method Resolution Order � the order Python searches for methods. Uses C3 linearization. View with Class.__mro__. D(B,C) -> B -> C -> A -> object.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: Purpose of __slots__?</summary>
  <div class="tp-qa-answer"><p>Prevents __dict__ per instance, saving ~40-50% memory. Only listed attributes allowed. Trade-off: no dynamic attribute assignment.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s08-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: ABC vs duck typing?</summary>
  <div class="tp-qa-answer"><p>ABC enforces interface � subclasses must implement methods. Duck typing is flexible � just call and trust. ABC for formal contracts; duck typing for Pythonic protocols.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: First parameter of instance methods? a) self b) this c) cls d) instance

<details class="tp-qa-card" data-qid="p02-s08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) self</strong></p></div></details>

**Q2**: Method called by print()? a) __repr__ b) __str__ c) __format__ d) __display__

<details class="tp-qa-card" data-qid="p02-s08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) __str__</strong></p></div></details>

**Q3**: How to make abstract class? a) inherit ABC b) @abstractmethod c) both d) raise NotImplementedError

<details class="tp-qa-card" data-qid="p02-s08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) both inherit ABC and use @abstractmethod</strong></p></div></details>

**Q4**: @classmethod receives? a) self b) cls c) instance d) nothing

<details class="tp-qa-card" data-qid="p02-s08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) cls</strong></p></div></details>

**Q5**: What does __slots__ do? a) speeds methods b) prevents __dict__ c) enables MRO d) auto __init__

<details class="tp-qa-card" data-qid="p02-s08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) prevents __dict__ to save memory</strong></p></div></details>

## Exercises

**Easy** � Rectangle class with width/height, area() and perimeter().
**Easy** � Student dataclass with name, grades, average_grade().
**Medium** � Vehicle hierarchy: Vehicle -> Car, Motorcycle, Truck with start/stop/fuel_efficiency.
**Medium** � Custom Vector class with __add__, __sub__, __mul__, __repr__, __eq__.
**Hard** � Implement @property from scratch using descriptors.
**Hard** � SimpleORM mapping dataclass attributes to columns with save/find/delete.

## 8.7 Composition vs Inheritance

Favor composition over inheritance for flexible designs.

`python

## Inheritance approach (tight coupling)
class Engine:
    def start(self): return "Engine running"

class Car(Engine):  # Car IS-A Engine -- questionable
    def drive(self):
        return f"Driving: {self.start()}"

## Composition approach (loose coupling)
class Engine:
    def start(self): return "Engine running"

class Wheels:
    def rotate(self): return "Wheels spinning"

class Car:
    def __init__(self):
        self.engine = Engine()  # Car HAS-A Engine
        self.wheels = Wheels()  # Car HAS-A Wheels

    def drive(self):
        return f"{self.engine.start()}, {self.wheels.rotate()}"

## Mixin composition
class JSONMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class LogMixin:
    def log(self, msg):
        print(f"[LOG] {msg}")

class User(JSONMixin, LogMixin):
    def __init__(self, name):
        self.name = name

user = User("Alice")
print(user.to_json())  # {"name": "Alice"}
user.log("User created")
`

## 8.8 Protocols and Structural Typing

`python
from typing import Protocol, runtime_checkable

@runtime_checkable
class Iterable(Protocol):
    def __iter__(self):
        ...

class MyContainer:
    def __init__(self, items):
        self.items = items
    def __iter__(self):
        return iter(self.items)

def process(iterable: Iterable):
    for item in iterable:
        print(item)

process(MyContainer([1, 2, 3]))  # OK
process([4, 5, 6])               # OK -- list implements __iter__
print(isinstance([1, 2], Iterable))  # True (with @runtime_checkable)

## Protocol for file-like objects
class Readable(Protocol):
    def read(self) -> str: ...

class FileReader:
    def read(self) -> str:
        return "file content"

class StringReader:
    def read(self) -> str:
        return "string content"

def load_data(source: Readable):
    return source.read()
`

## 8.9 Descriptors

Descriptors control attribute access on another class.

`python
class ValidatedAttribute:
    def __init__(self, validator):
        self.validator = validator
        self.data = {}

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return self.data.get(id(obj))

    def __set__(self, obj, value):
        if not self.validator(value):
            raise ValueError(f"Invalid value: {value}")
        self.data[id(obj)] = value

    def __delete__(self, obj):
        del self.data[id(obj)]

def positive_number(value):
    return isinstance(value, (int, float)) and value > 0

class Product:
    price = ValidatedAttribute(positive_number)

    def __init__(self, name, price):
        self.name = name
        self.price = price

p = Product("Widget", 10.99)
print(p.price)  # 10.99

## p.price = -5  # ValueError: Invalid value: -5

## Property is implemented using descriptors
class Property:
    def __init__(self, fget=None, fset=None):
        self.fget = fget
        self.fset = fset

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        if self.fget is None:
            raise AttributeError
        return self.fget(obj)

    def __set__(self, obj, value):
        if self.fset is None:
            raise AttributeError
        self.fset(obj, value)
`

## 8.10 Multiple Inheritance and MRO Deep Dive

`python

## Diamond problem
class A:
    def method(self): return "A"

class B(A):
    def method(self): return "B"

class C(A):
    def method(self): return "C"

class D(B, C):
    pass

d = D()
print(d.method())  # "B" (MRO: D -> B -> C -> A)
print(D.__mro__)

## (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

## MRO follows C3 linearization:

## 1. Children come before parents

## 2. Order of bases is respected

## 3. First occurrence of a class is kept

## Cooperative multiple inheritance with super()
class Base:
    def __init__(self, **kwargs):
        print(f"Base.__init__({kwargs})")
        super().__init__(**kwargs)

class NameMixin(Base):
    def __init__(self, name=None, **kwargs):
        print(f"NameMixin.__init__(name={name})")
        super().__init__(**kwargs)
        self.name = name

class AgeMixin(Base):
    def __init__(self, age=None, **kwargs):
        print(f"AgeMixin.__init__(age={age})")
        super().__init__(**kwargs)
        self.age = age

class Person(NameMixin, AgeMixin):
    def __init__(self, **kwargs):
        print("Person.__init__")
        super().__init__(**kwargs)

p = Person(name="Alice", age=30)

## Person.__init__

## NameMixin.__init__(name=Alice)

## AgeMixin.__init__(age=30)

## Base.__init__({})
print(f"{p.name} is {p.age}")  # Alice is 30
`

## 8.11 Common Pitfalls

`python

## Pitfall 1: Forgetting super() in __init__
class Parent:
    def __init__(self):
        self.value = "parent"

class Child(Parent):
    def __init__(self):
        # super().__init__()  # MISSING!
        self.value = "child"

## Pitfall 2: Mutable class attributes
class Dog:
    tricks = []  # shared across instances!

    def add_trick(self, trick):
        self.tricks.append(trick)

d1 = Dog()
d2 = Dog()
d1.add_trick("roll over")
print(d2.tricks)  # ['roll over'] -- shared state!

class DogFixed:
    def __init__(self):
        self.tricks = []  # per-instance

## Pitfall 3: Confusing __str__ and __repr__
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    # Missing __repr__ makes debugging hard

## Pitfall 4: Not using @abstractmethod properly
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self): pass

## Will error: s = Shape()  # Can't instantiate abstract class

## Pitfall 5: Modifying __slots__ classes at runtime
class Fixed:
    __slots__ = ("x", "y")

f = Fixed()
f.x = 1

## f.z = 2  # AttributeError: 'Fixed' has no attribute 'z'
`

## 8.12 Design Patterns in Python

`python

## Singleton pattern
class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True

## Factory pattern
class Animal:
    def speak(self): pass

class Dog(Animal):
    def speak(self): return "Woof"

class Cat(Animal):
    def speak(self): return "Meow"

class AnimalFactory:
    @staticmethod
    def create(animal_type: str) -> Animal:
        animals = {"dog": Dog, "cat": Cat}
        return animals[animal_type]()

## Observer pattern
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class Observer:
    def update(self, message):
        print(f"Received: {message}")

sub = Subject()
obs1 = Observer()
obs2 = Observer()
sub.attach(obs1)
sub.attach(obs2)
sub.notify("Event happened")
`

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 01-python-programming
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 01-python-programming. When would you choose one approach over another?
2. Design a system that efficiently handles 01-python-programming at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 01-python-programming. What was your approach and what was the result?
2. How would you explain 01-python-programming to a non-technical stakeholder?

#### Microsoft Style
1. How does 01-python-programming integrate with enterprise systems and cloud architectures?
2. What are the security implications of 01-python-programming?

#### NVIDIA Style
1. How would you optimize 01-python-programming for GPU-accelerated computing?
2. What parallel processing patterns apply to 01-python-programming?

#### AI Startup Style
1. How would you implement 01-python-programming in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 01-python-programming?

### Resume Tips
- **Technical Skills**: List 01-python-programming under relevant technical skills
- **Project Description**: "Implemented 01-python-programming to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 01-python-programming in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 01-python-programming
- [ ] Practice 3-5 problems related to 01-python-programming
- [ ] Prepare 2 real-world examples of using 01-python-programming
- [ ] Know the time/space complexity of common 01-python-programming operations
- [ ] Have questions ready about how the company uses 01-python-programming> **Next**: [09 -- Decorators & Generators ?](09-decorators-and-generators.md)
