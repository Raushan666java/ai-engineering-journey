# Chapter 13: Inheritance and Protocols


> **Previous:** [Object-Oriented Programming](./12-oop.md) | **Next:** [Magic Methods and Operator Overloading](./14-magic-methods.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Create class hierarchies using inheritance
- Use `super()` to delegate to parent classes
- Understand MRO and C3 linearization for multiple inheritance
- Apply mixin classes for reusable behaviour
- Define abstract base classes and enforce interfaces
- Use structural subtyping (protocols) for duck typing

![Inheritance and Protocols](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/13-inheritance.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|13.1 Basic Inheritance||Inheritance creates an "is-a" relationship; `super()` delegates to the next class in MRO.|
|13.2 super()||MRO (C3 linearization) determines method lookup order: child before parent, base-order preserved.|
|13.3 Method Resolution Order (MRO)||Mixins provide focused, reusable behaviour and should avoid `__init__`.|
|13.4 Multiple Inheritance||ABCs enforce interface contracts via `@abstractmethod` — cannot be instantiated directly.|
|13.5 Mixins||Protocols (PEP 544) provide structural subtyping: any object with the right methods satisfies the protocol.|
|13.6 Abstract Base Classes (ABCs)||undefined|
|13.7 isinstance and issubclass||undefined|
|13.8 Structural Subtyping (Protocols)||undefined|
|13.9 Composition over Inheritance||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Basic Inheritance]
    S1[super()]
    S2[Method Resolution Order (MRO)]
    S3[Multiple Inheritance]
    S4[Mixins]
    S5[Abstract Base Classes (ABCs)]
    S6[isinstance and issubclass]
    S7[Structural Subtyping (Protocols)]
    S8[Composition over Inheritance]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
```
## 13.1 Basic Inheritance

> **One-Sentence Takeaway:** Inheritance creates an "is-a" relationship; `super()` delegates to the next class in MRO.


A subclass inherits all attributes and methods from its parent:

```python
class Animal:
    def __init__(self, name: str):
        self.name = name
    
    def speak(self) -> str:
        return "..."
    
    def move(self) -> str:
        return f"{self.name} moves"

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"

animals = [Dog("Buddy"), Cat("Whiskers"), Animal("Generic")]
for a in animals:
    print(f"{a.name}: {a.speak()}")
# Buddy: Woof!
# Whiskers: Meow!
# Generic: ...
```

## 13.2 super()

> **One-Sentence Takeaway:** MRO (C3 linearization) determines method lookup order: child before parent, base-order preserved.


`super()` delegates method calls to the parent class:

```python
class Vehicle:
    def __init__(self, brand: str, model: str):
        self.brand = brand
        self.model = model
    
    def description(self) -> str:
        return f"{self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand: str, model: str, doors: int):
        super().__init__(brand, model)  # call parent constructor
        self.doors = doors
    
    def description(self) -> str:
        return f"{super().description()} ({self.doors} doors)"

car = Car("Toyota", "Camry", 4)
print(car.description())  # Toyota Camry (4 doors)
```

`super()` works even in multiple inheritance, following the MRO (discussed below).

## 13.3 Method Resolution Order (MRO)

> **One-Sentence Takeaway:** Mixins provide focused, reusable behaviour and should avoid `__init__`.


MRO determines the order in which classes are searched for methods. Python uses the C3 linearization algorithm:

```python
class A:
    def method(self): return "A"

class B(A):
    def method(self): return "B"

class C(A):
    def method(self): return "C"

class D(B, C):
    pass

d = D()
print(d.method())  # B
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)
```

The MRO for `D(B, C)` is computed as: D â†’ B â†’ C â†’ A â†’ object. Python uses `mro()` to inspect:

```python
for cls in D.__mro__:
    print(cls.__name__, end=" -> ")
# D -> B -> C -> A -> object ->
```

C3 linearization ensures:
- A subclass is always checked before its parent.
- The order of base classes in the class definition is preserved.
- Consistency is maintained (no contradictory ordering).

## 13.4 Multiple Inheritance

> **One-Sentence Takeaway:** ABCs enforce interface contracts via `@abstractmethod` — cannot be instantiated directly.


Python supports multiple inheritance directly:

```python
class Flyer:
    def fly(self) -> str:
        return "Flying"
    
    def move(self) -> str:
        return "Flying through the air"

class Swimmer:
    def swim(self) -> str:
        return "Swimming"
    
    def move(self) -> str:
        return "Swimming through water"

class Duck(Flyer, Swimmer):
    def move(self) -> str:
        return "Walking on land"

duck = Duck()
print(duck.fly())     # Flying
print(duck.swim())    # Swimming
print(duck.move())    # Walking on land  (own method wins)

class Penguin(Swimmer, Flyer):
    pass

penguin = Penguin()
print(penguin.move())  # Swimming through water (Swimmer first in MRO)
```

## 13.5 Mixins

> **One-Sentence Takeaway:** Protocols (PEP 544) provide structural subtyping: any object with the right methods satisfies the protocol.


Mixins are small classes that provide reusable behaviour without defining a complete interface:

```python
class JSONMixin:
    def to_json(self) -> str:
        import json
        return json.dumps(self.__dict__)
    
    @classmethod
    def from_json(cls, json_str: str):
        import json
        data = json.loads(json_str)
        return cls(**data)

class LogMixin:
    def log(self, message: str) -> None:
        print(f"[{self.__class__.__name__}] {message}")

class User(JSONMixin, LogMixin):
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

user = User("Alice", "alice@example.com")
print(user.to_json())        # {"name": "Alice", "email": "alice@example.com"}
user.log("User created")     # [User] User created

# Reconstruct from JSON
user2 = User.from_json('{"name": "Bob", "email": "bob@example.com"}')
print(user2.name)            # Bob
```

Mixins should:
- Not contain `__init__` (or call `super().__init__()`)
- Be narrowly focused on one behaviour
- Have names ending in "Mixin" or describing the behaviour

## 13.6 Abstract Base Classes (ABCs)

> **One-Sentence Takeaway:** undefined


ABCs define interfaces that subclasses must implement:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        pass
    
    @abstractmethod
    def perimeter(self) -> float:
        pass
    
    def description(self) -> str:
        return f"{self.__class__.__name__} (area={self.area():.2f})"

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius
    
    def area(self) -> float:
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self) -> float:
        import math
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height
    
    def area(self) -> float:
        return self.width * self.height
    
    def perimeter(self) -> float:
        return 2 * (self.width + self.height)

# shape = Shape()  # TypeError â€” can't instantiate abstract class
circle = Circle(5)
print(circle.description())  # Circle (area=78.54)
```

### 13.6.1 Abstract Properties

```python
class DataSource(ABC):
    @property
    @abstractmethod
    def connection_string(self) -> str:
        pass

class PostgresSource(DataSource):
    @property
    def connection_string(self) -> str:
        return "postgresql://localhost:5432/db"
```

### 13.6.2 Virtual Subclasses

ABCs can register unrelated classes as virtual subclasses using `.register()`:

```python
from collections.abc import Sequence

class MyList:
    def __init__(self, items):
        self._items = items
    
    def __getitem__(self, index):
        return self._items[index]
    
    def __len__(self):
        return len(self._items)

Sequence.register(MyList)

ml = MyList([1, 2, 3])
print(isinstance(ml, Sequence))  # True
print(issubclass(MyList, Sequence))  # True
```

## 13.7 isinstance and issubclass

> **One-Sentence Takeaway:** undefined


```python
class Animal: pass
class Dog(Animal): pass

d = Dog()
print(isinstance(d, Dog))       # True
print(isinstance(d, Animal))    # True
print(isinstance(d, object))    # True (everything is an object)
print(issubclass(Dog, Animal))  # True
print(issubclass(Dog, object))  # True
print(issubclass(bool, int))    # True (bool is a subclass of int)
```

## 13.8 Structural Subtyping (Protocols)

> **One-Sentence Takeaway:** undefined


PEP 544 introduced `Protocol` in Python 3.8 for structural subtyping (static duck typing):

```python
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> str:
        ...

class Circle:
    def draw(self) -> str:
        return "Drawing circle"

class Square:
    def draw(self) -> str:
        return "Drawing square"
    
    def extra_method(self):
        pass  # extra methods don't break the protocol

def render(obj: Drawable) -> None:
    print(obj.draw())

render(Circle())  # Drawing circle
render(Square())  # Drawing square
```

Protocols check that an object has the required methods with compatible signatures at static type-checking time. At runtime, `isinstance` checks with `@runtime_checkable`:

```python
from typing import Protocol, runtime_checkable

@runtime_checkable
class Named(Protocol):
    name: str

class Person:
    def __init__(self):
        self.name = "Alice"

print(isinstance(Person(), Named))  # True
```

Protocols enable duck typing with static safety â€” objects satisfy a protocol if they have the right methods, regardless of inheritance.

## 13.9 Composition over Inheritance

> **One-Sentence Takeaway:** undefined
> **Pro Tip:** Favour composition over inheritance — it allows different implementations to be injected without changing the class hierarchy.




Prefer composition over inheritance for code reuse:

```python
# Inheritance (less flexible)
class Logger:
    def log(self, msg): print(msg)

class App(Logger):
    def run(self):
        self.log("App started")

# Composition (more flexible)
class Logger:
    def log(self, msg): print(msg)

class App:
    def __init__(self, logger: Logger):
        self.logger = logger
    
    def run(self):
        self.logger.log("App started")

app = App(Logger())
app.run()
```

Composition allows different logger implementations (file, database, cloud) to be injected without changing the class hierarchy.


## Concept Comparison Table

| Mechanism | Type checking | Flexibility |
|---|---|---|
| Inheritance | isinstance checks class tree | Rigid hierarchy |
| ABC | isinstance checks ABC tree | Enforced interface |
| Protocol | Static type checker only | Duck typing with safety |
| Composition | Runtime via injected object | Maximum flexibility |


## Quick Reference

```python
class Animal:
    def speak(self): return "..."
class Dog(Animal):
    def speak(self): return "Woof!"

for a in [Dog(), Animal()]:
    print(a.speak())
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Web Dev|Class-based views inheriting from generic views|13.1|
|Data Science|Custom transformers inheriting sklearn base|13.6|
|DevOps|Plugin systems with ABC interfaces|13.6|
|Automation|Mixin-based logging/timestamp behaviour|13.5|


## Chapter Quiz

**Q1.** What does super() do?
- creates a new instance
- delegates to parent in MRO **<-- Correct**
- calls __init__ only
- returns the class name

**Q2.** What algorithm does Python use for MRO?
- DFS
- BFS
- C3 linearization **<-- Correct**
- Topological sort

**Q3.** What is a mixin?
- a base class with abstract methods
- a focused reusable behaviour class **<-- Correct**
- a protocol interface
- a composition pattern

**Q4.** What prevents ABC instantiation?
- __init__
- @abstractmethod **<-- Correct**
- @staticmethod
- Protocol

**Q5.** Composition is preferred over inheritance because:
- it is faster
- it is more flexible **<-- Correct**
- it uses less memory
- it is simpler


## Summary

- `super()` delegates to the next class in the MRO.
- MRO follows C3 linearization: child before parent, base order preserved.
- Multiple inheritance is supported; use mixins for focused behaviour.
- ABCs with `@abstractmethod` enforce interface contracts.
- Protocols provide structural subtyping for static duck typing.
- Composition is generally more flexible than inheritance.

## Exercises

### Review Questions

1. How does `super()` work in a multiple-inheritance diamond pattern?
2. What is the MRO and how does C3 linearization compute it?
3. When should you use an ABC vs a Protocol?
4. What is a mixin and what conventions do mixins follow?
5. Why is composition sometimes preferred over inheritance?

### Application Problems

1. Create a class hierarchy for geometric solids: `Shape3D` (abstract) â†’ `Sphere`, `Cuboid`, `Cylinder`. Each must implement `volume()` and `surface_area()`. Use `super().__init__()` for common attributes.
2. Implement mixins `TimestampMixin` (adds `created_at` and `updated_at` timestamps) and `SerializableMixin` (adds `to_dict`/`from_dict`). Use them with a `Note` class.
3. Define a `Playable` Protocol with a `play()` method. Create classes `MusicTrack` and `VideoClip` that satisfy it. Write a function `play_all(playables: list[Playable])` and test it.

### Challenge Problem

Design a composable validation system. Define an `abstractmethod` base class `Validator` with `validate(value) -> bool` and `error_message(value) -> str`. Create concrete validators: `NonEmpty`, `MinLength(n)`, `MaxLength(n)`, `MatchesRegex(pattern)`. Then create a `CompositeValidator` that takes multiple validators and passes only if all pass. Use mixins or protocols to allow validators to be combined with `&` operator.
