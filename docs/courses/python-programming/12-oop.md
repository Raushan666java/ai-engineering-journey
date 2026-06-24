# Chapter 12: Object-Oriented Programming


> **Previous:** [Modules and Packages](./11-modules.md) | **Next:** [Inheritance and Polymorphism](./13-inheritance.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Define classes with instance and class attributes
- Implement constructors and methods
- Use `@classmethod`, `@staticmethod`, and `@property`
- Optimise memory with `__slots__`
- Write data classes with `@dataclass`
- Understand name mangling for attribute protection

![Python OOP](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/12-oop.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|12.1 Classes and Instances||A class is a blueprint; `__init__` initialises instance state.|
|12.2 Instance Methods vs Class Attributes||`@classmethod` receives `cls` for alternative constructors; `@staticmethod` receives nothing.|
|12.3 @classmethod and @staticmethod||`@property` controls attribute access with getter/setter/deleter — validation without breaking the API.|
|12.4 @property Decorator||`__slots__` saves memory by replacing `__dict__` with a fixed array.|
|12.5 __slots__||`@dataclass` auto-generates `__init__`, `__repr__`, `__eq__`, and more.|
|12.6 Name Mangling||undefined|
|12.7 @dataclass||undefined|
|12.8 Method Types Summary||undefined|
|12.9 Class as a Callable||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Classes and Instances]
    S1[Instance Methods vs Class Attributes]
    S2[@classmethod and @staticmethod]
    S3[@property Decorator]
    S4[__slots__]
    S5[Name Mangling]
    S6[@dataclass]
    S7[Method Types Summary]
    S8[Class as a Callable]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
```
## 12.1 Classes and Instances

> **One-Sentence Takeaway:** A class is a blueprint; `__init__` initialises instance state.


A class is a blueprint for creating objects:

```python
class Dog:
    """A simple Dog class."""
    species = "Canis familiaris"  # class attribute
    
    def __init__(self, name: str, age: int):
        """Constructor â€” initialises instance attributes."""
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

> **One-Sentence Takeaway:** `@classmethod` receives `cls` for alternative constructors; `@staticmethod` receives nothing.


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

Attribute lookup order: instance â†’ class â†’ parent classes.

## 12.3 @classmethod and @staticmethod

> **One-Sentence Takeaway:** `@property` controls attribute access with getter/setter/deleter — validation without breaking the API.


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
        """Alternative constructor â€” parses 'YYYY-MM-DD'."""
        year, month, day = map(int, date_str.split("-"))
        return cls(year, month, day)
    
    @classmethod
    def today(cls) -> "Date":
        """Alternative constructor â€” returns today's date."""
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

> **One-Sentence Takeaway:** `__slots__` saves memory by replacing `__dict__` with a fixed array.


Properties control attribute access with getter, setter, and deleter methods:

```python
class Circle:
    def __init__(self, radius: float):
        self._radius = radius
    
    @property
    def radius(self) -> float:
        """Getter â€” called when accessing circle.radius."""
        return self._radius
    
    @radius.setter
    def radius(self, value: float):
        """Setter â€” called when assigning to circle.radius."""
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

> **One-Sentence Takeaway:** `@dataclass` auto-generates `__init__`, `__repr__`, `__eq__`, and more.


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

> **One-Sentence Takeaway:** undefined
> **Remember:** Name mangling (`__attr`) prevents subclass collisions — it is not true privacy. Single underscore `_attr` signals "internal use."




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

Single underscore (`_secret`) is a convention meaning "internal use" â€” no language enforcement.

## 12.7 @dataclass

> **One-Sentence Takeaway:** undefined


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

> **One-Sentence Takeaway:** undefined


| Type | Decorator | First Parameter | Can Access Instance | Can Access Class |
|------|-----------|----------------|---------------------|------------------|
| Instance method | none | `self` | Yes | Yes |
| Class method | `@classmethod` | `cls` | No | Yes |
| Static method | `@staticmethod` | none | No | No (unless passed explicitly) |
| Property | `@property` | `self` (on getter) | Yes | Yes |

## 12.9 Class as a Callable

> **One-Sentence Takeaway:** undefined


A class is callable â€” calling it creates a new instance:

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


## Concept Comparison Table

| Method Type | Decorator | First Param |
|---|---|---|
| Instance | none | self |
| Class | @classmethod | cls |
| Static | @staticmethod | none |
| Property | @property | self (getter) |


## Quick Reference

```python
class Dog:
    species = "Canis"
    def __init__(self, name):
        self.name = name
    def bark(self):
        return f"{self.name} says Woof!"

buddy = Dog("Buddy")
print(buddy.bark())
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Web Dev|Models in Django/Flask|12.1|
|Data Science|Custom data containers with dataclass|12.7|
|DevOps|Configuration objects with validation|12.4|
|Automation|Singleton pattern with class decorators|12.1|


## Chapter Quiz

**Q1.** What is the first parameter of an instance method?
- cls
- self **<-- Correct**
- instance
- this

**Q2.** What does @classmethod receive as first argument?
- self
- cls **<-- Correct**
- instance
- class

**Q3.** What does @property allow you to do?
- define class methods
- control attribute access with getter/setter **<-- Correct**
- create static methods
- auto-generate __init__

**Q4.** What is __slots__ primarily used for?
- memory optimisation **<-- Correct**
- name mangling
- property definition
- class inheritance

**Q5.** What does @dataclass auto-generate?
- __init__ only
- __init__, __repr__, __eq__ **<-- Correct**
- @property
- __slots__


## TypeScript Parallel

TypeScript supports classes with a similar but distinct syntax. TypeScript adds visibility modifiers (`public`, `private`, `protected`) and parameter properties:

```typescript
class BankAccount {
  // TypeScript: visibility modifiers and type annotations
  private _balance: number;
  static interestRate: number = 0.05;
  readonly accountNumber: string;

  // Constructor with parameter property (shorthand)
  constructor(
    public owner: string,
    initialBalance: number = 0,
    public readonly bankName: string = "Default Bank"
  ) {
    this._balance = initialBalance;
    this.accountNumber = `ACC-${Date.now()}`;
  }

  // Getter (like @property)
  get balance(): number {
    return this._balance;
  }

  // Setter
  set balance(amount: number) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this._balance = amount;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this._balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this._balance) return false;
    this._balance -= amount;
    return true;
  }

  // Static method (like @classmethod but no cls context)
  static createDefault(owner: string): BankAccount {
    return new BankAccount(owner, 100);
  }
}

// Usage
const acc = new BankAccount("Alice", 500);
acc.deposit(200);
console.log(acc.balance);  // 700 (uses getter)
console.log(BankAccount.interestRate);  // 0.05

// TypeScript property decorator (Python @property equivalent)
// Built-in get/set in TypeScript classes as shown above

// Data class equivalent (like @dataclass)
interface Book {
  title: string;
  author: string;
  readonly isbn: string;
}

// Or use a class with constructor shorthand
class BookClass {
  constructor(
    public title: string,
    public author: string,
    public readonly isbn: string,
    public year: number
  ) {}
}
```

### Python vs TypeScript OOP

| Concept | Python | TypeScript |
|---------|--------|------------|
| Constructor | `__init__` | `constructor()` |
| Instance reference | `self` (explicit) | `this` (implicit) |
| Visibility | Convention `_`, `__` | `private`, `protected`, `public` |
| Properties | `@property` decorator | `get`/`set` keywords |
| Static | `@staticmethod` / `@classmethod` | `static` keyword |
| Data class | `@dataclass` | `interface` or constructor shorthand |
| Abstract | `ABC` + `@abstractmethod` | `abstract class` + `abstract` methods |

### OOP Design Best Practices

```python
# 1. Favor composition over inheritance
# Instead of: class Car(Engine, Wheels, Body)
class Engine:
    def start(self): ...
    def stop(self): ...

class Car:
    def __init__(self):
        self.engine = Engine()  # composition
        self._speed = 0

    def start(self):
        self.engine.start()
        self._speed = 0

# 2. Single Responsibility Principle
# A class should have one reason to change
class Invoice:
    """Handles invoice data only."""

class InvoicePrinter:
    """Handles invoice formatting and printing."""

class InvoiceRepository:
    """Handles invoice persistence."""

# 3. Encapsulate what varies
class PaymentProcessor:
    def process(self, amount: float, method: str):
        if method == "credit_card":
            self._process_credit(amount)
        elif method == "paypal":
            self._process_paypal(amount)
        elif method == "crypto":
            self._process_crypto(amount)

    def _process_credit(self, amount): ...
    def _process_paypal(self, amount): ...
    def _process_crypto(self, amount): ...

# 4. Use @dataclass for data containers
from dataclasses import dataclass, field

@dataclass
class Address:
    street: str
    city: str
    zip_code: str
    country: str = "US"  # default

@dataclass
class Customer:
    name: str
    email: str
    address: Address
    orders: list = field(default_factory=list)
    active: bool = True

# 5. Define clear interfaces with abstract base classes
from abc import ABC, abstractmethod

class Repository(ABC):
    @abstractmethod
    def save(self, entity): ...
    @abstractmethod
    def find_by_id(self, id): ...
    @abstractmethod
    def delete(self, id): ...
```

## Summary

- Classes define blueprints; `__init__` initialises instances.
- `self` refers to the instance; `cls` refers to the class.
- `@classmethod`: alternative constructors. `@staticmethod`: utility functions.
- `@property`: computed attributes with getter/setter/deleter.
- `__slots__`: memory optimisation; disallows dynamic attributes.
- Name mangling (`__attr__`): prevents subclass attribute collisions.
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
