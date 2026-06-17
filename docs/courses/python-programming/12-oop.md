# Chapter 12: Object-Oriented Programming

## Learning Objectives

By the end of this chapter, students will be able to:
- Define classes with instance and class attributes
- Implement constructors and methods
- Use `@classmethod`, `@staticmethod`, and `@property`
- Optimise memory with `__slots__`
- Write data classes with `@dataclass`
- Understand name mangling for attribute protection

![Python OOP](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/12-oop.png)

## 12.1 Classes and Instances

A class is a blueprint for creating objects:

```python
class Dog:
    """A simple Dog class."""
    species = "Canis familiaris"  # class attribute
    
    def __init__(self, name: str, age: int):
        """Constructor — initialises instance attributes."""
        self.name = name
        self.age = age
    
    def bark(self) -> str:
        """Instance method."""
        return f"{self.name} says Woof!"

# Creating instances
buddy = Dog("Buddy", 3)
max_dog = Dog("Max", 5)

print(buddy.name)      # Buddy
print(buddy.species)   # Canis familiaris (class attribute)
print(buddy.bark())    # Buddy says Woof!
print(max_dog.bark())  # Max says Woof!
```

`self` is a convention (not a keyword) referring to the instance. Every instance method receives `self` as the first argument.

## 12.2 Instance Methods vs Class Attributes

Instance attributes belong to each object; class attributes are shared:

```python
class Counter:
    count = 0  # class attribute
    
    def __init__(self):
        self.value = 0  # instance attribute
        Counter.count += 1

c1 = Counter()
c2 = Counter()
print(Counter.count)   # 2
print(c1.value)        # 0

# Modify class attribute via class
Counter.count = 10
print(c2.count)       # 10
```

Attribute lookup order: instance → class → parent classes.

## 12.3 @classmethod and @staticmethod

- **Instance method**: receives `self`, can access instance and class.
- **Class method** (`@classmethod`): receives `cls`, can access class but not instance.
- **Static method** (`@staticmethod`): receives nothing special, like a regular function inside the class.

```python
class Date:
    def __init__(self, year: int, month: int, day: int):
        self.year = year
        self.month = month
        self.day = day
    
    @classmethod
    def from_string(cls, date_str: str) -> "Date":
        """Alternative constructor — parses 'YYYY-MM-DD'."""
        year, month, day = map(int, date_str.split("-"))
        return cls(year, month, day)
    
    @classmethod
    def today(cls) -> "Date":
        """Alternative constructor — returns today's date."""
        from datetime import date
        d = date.today()
        return cls(d.year, d.month, d.day)
    
    @staticmethod
    def is_valid(date_str: str) -> bool:
        """Validate a date string without creating an instance."""
        try:
            year, month, day = map(int, date_str.split("-"))
            return 1 <= month <= 12 and 1 <= day <= 31
        except (ValueError, AttributeError):
            return False
    
    def __repr__(self) -> str:
        return f"Date({self.year}, {self.month}, {self.day})"

d = Date.from_string("2025-03-15")
print(d)                      # Date(2025, 3, 15)
print(Date.is_valid("invalid"))  # False
```

## 12.4 @property Decorator

Properties control attribute access with getter, setter, and deleter methods:

```python
class Circle:
    def __init__(self, radius: float):
        self._radius = radius
    
    @property
    def radius(self) -> float:
        """Getter — called when accessing circle.radius."""
        return self._radius
    
    @radius.setter
    def radius(self, value: float):
        """Setter — called when assigning to circle.radius."""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self) -> float:
        """Read-only computed property."""
        import math
        return math.pi * self._radius ** 2
    
    @property
    def diameter(self) -> float:
        return self._radius * 2

c = Circle(5)
print(c.radius)    # 5 (uses getter)
c.radius = 7       # uses setter
print(c.area)      # 153.938...
# c.radius = -1    # ValueError
```

Properties allow you to add validation or computed values without changing the public interface.

## 12.5 __slots__

`__slots__` restricts the attributes a class can have, saving memory:

```python
class Point:
    __slots__ = ("x", "y")  # only 'x' and 'y' are allowed
    
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

p = Point(3, 4)
print(p.x, p.y)     # 3 4
# p.z = 5            # AttributeError: 'Point' object has no attribute 'z'
```

Without `__slots__`, each instance has a `__dict__` attribute dictionary (significant memory overhead). With `__slots__`, attributes are stored in a fixed array:

```python
# Memory comparison
import sys

class WithoutSlots:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ("x", "y")
    def __init__(self, x, y):
        self.x = x
        self.y = y

wos = WithoutSlots(1, 2)
ws = WithSlots(1, 2)

print(sys.getsizeof(wos))   # larger (has __dict__)
print(sys.getsizeof(ws))    # smaller (no __dict__)
```

Use `__slots__` for classes with many instances (millions). For most cases, the convenience of dynamic attributes outweighs the memory savings.

## 12.6 Name Mangling

Names starting with double underscore (but not ending with double underscore) are mangled to `_ClassName__name`:

```python
class MyClass:
    def __init__(self):
        self.__secret = 42
    
    def get_secret(self):
        return self.__secret

obj = MyClass()
print(obj.get_secret())  # 42
# print(obj.__secret)     # AttributeError
print(obj._MyClass__secret)  # 42 (name mangling is visible)
```

Name mangling is designed to avoid attribute collisions in subclasses, not to enforce privacy:

```python
class SubClass(MyClass):
    def __init__(self):
        super().__init__()
        self.__secret = 99  # this is _SubClass__secret

obj2 = SubClass()
print(obj2.get_secret())        # 42 (from parent)
print(obj2._SubClass__secret)   # 99
```

Single underscore (`_secret`) is a convention meaning "internal use" — no language enforcement.

## 12.7 @dataclass

The `@dataclass` decorator (Python 3.7+) auto-generates `__init__`, `__repr__`, `__eq__`, and more:

```python
from dataclasses import dataclass, field

@dataclass
class Person:
    name: str
    age: int
    email: str = ""                     # default value
    tags: list[str] = field(default_factory=list)  # mutable default
    
    @property
    def is_adult(self) -> bool:
        return self.age >= 18

p1 = Person("Alice", 30, "alice@example.com")
p2 = Person("Alice", 30, "alice@example.com")
print(p1)                # Person(name='Alice', age=30, email='alice@example.com', tags=[])
print(p1 == p2)          # True
print(p1.is_adult)       # True
```

### 12.7.1 dataclass Parameters

```python
@dataclass(order=True, frozen=True, slots=True)
class Point:
    x: float
    y: float

p = Point(3, 4)
# p.x = 5   # AttributeError if frozen=True
```

- `order=True`: generates `__lt__`, `__le__`, `__gt__`, `__ge__`.
- `frozen=True`: instances are immutable (`__setattr__` raises).
- `slots=True` (3.10+): generates `__slots__`.

### 12.7.2 Inheritance with dataclass

```python
@dataclass
class Employee(Person):
    employee_id: str
    department: str = "Engineering"

e = Employee("Bob", 25, "bob@example.com", "E1234")
print(e)  # Employee(name='Bob', age=25, email='bob@example.com', tags=[], employee_id='E1234', department='Engineering')
```

Fields from the parent come first, then child fields.

## 12.8 Method Types Summary

| Type | Decorator | First Parameter | Can Access Instance | Can Access Class |
|------|-----------|----------------|---------------------|------------------|
| Instance method | none | `self` | Yes | Yes |
| Class method | `@classmethod` | `cls` | No | Yes |
| Static method | `@staticmethod` | none | No | No (unless passed explicitly) |
| Property | `@property` | `self` (on getter) | Yes | Yes |

## 12.9 Class as a Callable

A class is callable — calling it creates a new instance:

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __call__(self, scale: float = 1.0) -> tuple:
        """Make instances callable."""
        return (self.x * scale, self.y * scale)

v = Vector(3, 4)
print(v())       # (3, 4)
print(v(2))      # (6, 8)
```

## Summary

- Classes define blueprints; `__init__` initialises instances.
- `self` refers to the instance; `cls` refers to the class.
- `@classmethod`: alternative constructors. `@staticmethod`: utility functions.
- `@property`: computed attributes with getter/setter/deleter.
- `__slots__`: memory optimisation; disallows dynamic attributes.
- Name mangling (`__attr`): prevents subclass attribute collisions.
- `@dataclass`: auto-generates boilerplate for data-oriented classes.

## Exercises

### Review Questions

1. What is the difference between a class attribute and an instance attribute?
2. When would you use `@classmethod` instead of `@staticmethod`?
3. What is the purpose of `__slots__` and what trade-off does it introduce?
4. How does name mangling work and what problem does it solve?
5. What boilerplate does `@dataclass` automatically generate?

### Application Problems

1. Design a `BankAccount` class with balance tracking, deposit, withdraw, and `@property` for balance (read-only). Include a class attribute `interest_rate` and a class method to change it. Prevent overdraft.
2. Create a `Temperature` class that stores a value in Kelvin internally but provides `@property` getters/setters for Celsius, Fahrenheit, and Kelvin. Validate that absolute zero cannot be crossed.
3. Write a `@dataclass` for a `Book` with `title`, `author`, `isbn`, `year`. Add a `@property` for `age` (current year minus year). Make the class sortable by year.

### Challenge Problem

Build a simple ORM-style class using `__slots__` and descriptors. Create a `Field` descriptor that validates types and constraints. Then create a `Model` base class that uses `__init_subclass__` to detect `Field` descriptors and auto-generate table definition strings. Implement `save()` and `load()` methods that serialize/deserialize to a JSON file. Demonstrate with a `User` model subclass.
