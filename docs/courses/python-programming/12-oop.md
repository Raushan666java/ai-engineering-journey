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
        """Constructor → initialises instance attributes."""
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

Attribute lookup order: instance → class → parent classes.

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
        """Alternative constructor → parses 'YYYY-MM-DD'."""
        year, month, day = map(int, date_str.split("-"))
        return cls(year, month, day)
    
    @classmethod
    def today(cls) -> "Date":
        """Alternative constructor → returns today's date."""
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
        """Getter → called when accessing circle.radius."""
        return self._radius
    
    @radius.setter
    def radius(self, value: float):
        """Setter → called when assigning to circle.radius."""
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

Single underscore (`_secret`) is a convention meaning "internal use" → no language enforcement.

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

<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-handwritten.svg" alt="Handwritten: 12.7.1 dataclass Parameters" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-diagram.svg" alt="Diagram: 12.7.1 dataclass Parameters" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-1-dataclass-parameters-sticky.svg" alt="Sticky Note: 12.7.1 dataclass Parameters" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-handwritten.svg" alt="Handwritten: 12.7.2 Inheritance with dataclass" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-diagram.svg" alt="Diagram: 12.7.2 Inheritance with dataclass" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/12-7-2-inheritance-with-dataclass-sticky.svg" alt="Sticky Note: 12.7.2 Inheritance with dataclass" width="30%">
</a>


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


A class is callable → calling it creates a new instance:

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

<a href="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-handwritten.svg" alt="Handwritten: Python vs TypeScript OOP" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-diagram.svg" alt="Diagram: Python vs TypeScript OOP" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/python-vs-typescript-oop-sticky.svg" alt="Sticky Note: Python vs TypeScript OOP" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-handwritten.svg" alt="Handwritten: OOP Design Best Practices" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-diagram.svg" alt="Diagram: OOP Design Best Practices" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/oop-design-best-practices-sticky.svg" alt="Sticky Note: OOP Design Best Practices" width="30%">
</a>


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
```typescript
// Chapter 12: TypeScript Class Equivalents
// Python: class with __init__ → TypeScript: class with constructor
class BankAccount {
  private _balance: number;
  static interestRate: number = 0.05;

  constructor(public owner: string, initialBalance: number = 0) {
    this._balance = initialBalance;
  }

  // Python: @property → TypeScript: getter
  get balance(): number {
    return this._balance;
  }

  // Python: @property.setter → TypeScript: setter
  set balance(amount: number) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this._balance = amount;
  }

  // Python: classmethod → TypeScript: static method
  static setInterestRate(rate: number): void {
    BankAccount.interestRate = rate;
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
}

// Usage
const acc = new BankAccount("Alice", 1000);
acc.deposit(500);
console.log(acc.balance);  // 1500

// Python: @dataclass → TypeScript: class with constructor shorthand
class Address {
  constructor(
    public street: string,
    public city: string,
    public zip: string,
    public country: string = "US"
  ) {}
}

// Python: @staticmethod → TypeScript: static method
class MathUtils {
  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}
console.log(MathUtils.clamp(150, 0, 100));  // 100
```

### More TypeScript OOP Patterns

<a href="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-handwritten.svg" alt="Handwritten: More TypeScript OOP Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-diagram.svg" alt="Diagram: More TypeScript OOP Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/12-oop/more-typescript-oop-patterns-sticky.svg" alt="Sticky Note: More TypeScript OOP Patterns" width="30%">
</a>


```typescript
// Python: @property for computed attributes → TypeScript: getter
class Circle {
  constructor(public radius: number) {}
  get area(): number { return Math.PI * this.radius ** 2; }
  get circumference(): number { return 2 * Math.PI * this.radius; }
}
const c = new Circle(5);
console.log(c.area);  // 78.54 (computed, not stored)

// Python: @staticmethod → TypeScript: static method
class StringUtils {
  static isEmpty(s: string | null | undefined): boolean {
    return s == null || s.trim().length === 0;
  }
}
console.log(StringUtils.isEmpty(""));   // true
console.log(StringUtils.isEmpty("a"));  // false

// Python: @classmethod → TypeScript: static factory method
class Temperature {
  private constructor(public kelvin: number) {}
  static fromCelsius(c: number): Temperature {
    return new Temperature(c + 273.15);
  }
  static fromFahrenheit(f: number): Temperature {
    return new Temperature(((f - 32) * 5) / 9 + 273.15);
  }
  get celsius(): number { return this.kelvin - 273.15; }
}
const boiling = Temperature.fromCelsius(100);
console.log(boiling.celsius);  // 100

// Python: __slots__ → TypeScript: class with known properties
class Point {
  constructor(
    public x: number,
    public y: number
  ) {}
  // TypeScript enforces property names at compile time
  // (Point has only x, y — no dynamic properties possible)
}

// Python: dataclass frozen=True → TypeScript: readonly
class ImmutablePoint {
  constructor(
    readonly x: number,
    readonly y: number
  ) {}
}
```

### TypeScript Utilities

```typescript
// === Class Diagram Generator (text-based) ===
interface ClassInfo {
  name: string;
  properties: { name: string; type: string; access: "public" | "private" | "protected" }[];
  methods: { name: string; params: string; returnType: string; access: "public" | "private" | "protected" }[];
  extends?: string;
  implements?: string[];
}
function generateClassDiagram(cls: ClassInfo): string {
  const lines = [`class ${cls.name}${cls.extends ? ` extends ${cls.extends}` : ""}${cls.implements ? ` implements ${cls.implements.join(", ")}` : ""} {`];
  for (const p of cls.properties) {
    lines.push(`  ${p.access === "private" ? "-" : p.access === "protected" ? "#" : "+"} ${p.name}: ${p.type}`);
  }
  lines.push("  " + "---".repeat(8));
  for (const m of cls.methods) {
    lines.push(`  ${m.access === "private" ? "-" : p.access === "protected" ? "#" : "+"} ${m.name}(${m.params}): ${m.returnType}`);
  }
  lines.push("}");
  return lines.join("\n");
}
const userClass: ClassInfo = {
  name: "User",
  properties: [{ name: "id", type: "number", access: "private" }, { name: "name", type: "string", access: "public" }],
  methods: [{ name: "getId", params: "", returnType: "number", access: "public" }, { name: "setName", params: "name: string", returnType: "void", access: "public" }],
};
console.log(generateClassDiagram(userClass));

// === Method Chain Validator ===
function isChainable(cls: object): boolean {
  const proto = Object.getPrototypeOf(cls);
  const methods = Object.getOwnPropertyNames(proto).filter((n) => n !== "constructor" && typeof proto[n] === "function");
  return methods.every((m) => proto[m]() === undefined || proto[m]() !== undefined);
}
class ChainBuilder {
  private value = 0;
  add(n: number): this { this.value += n; return this; }
  multiply(n: number): this { this.value *= n; return this; }
  result(): number { return this.value; }
}
console.log(isChainable(new ChainBuilder())); // true

// === Access Modifier Checker ===
class VisibilityChecker {
  static check(obj: object): { public: string[]; private: string[]; protected: string[] } {
    const all = Object.getOwnPropertyNames(obj);
    return {
      public: all.filter((k) => !k.startsWith("_")),
      private: all.filter((k) => k.startsWith("_") && !k.startsWith("__")),
      protected: all.filter((k) => k.startsWith("__")),
    };
  }
}
class Demo {
  public x = 1; private y = 2; protected z = 3;
}
console.log(VisibilityChecker.check(new Demo()));

// === Static Factory Pattern ===
class ConfigBuilder {
  private constructor(private config: Record<string, unknown>) {}
  static fromEnv(): ConfigBuilder { return new ConfigBuilder({ NODE_ENV: process.env.NODE_ENV ?? "development" }); }
  static defaults(): ConfigBuilder { return new ConfigBuilder({ host: "localhost", port: 3000 }); }
  build(): Record<string, unknown> { return { ...this.config }; }
}
console.log(ConfigBuilder.defaults().build());
```

### TypeScript OOP Patterns

```typescript
// === Class with access modifiers (Python: public, _protected, __private) ===
class Person {
  constructor(
    public name: string,      // Python: self.name = name
    private age: number,       // Python: self.__age = age
    protected id: string       // Python: self._id = id
  ) {}
  greet(): string { return `Hi, I'm ${this.name}, ${this.age}`; }
  getAge(): number { return this.age; }
}
const p = new Person("Alice", 30, "A001");
console.log(p.greet());       // Hi, I'm Alice, 30
// p.age  // Error: Property 'age' is private

// === Python @property in TypeScript ===
class Temperature {
  constructor(private _celsius: number) {}
  get celsius(): number { return this._celsius; }
  set celsius(v: number) {
    if (v < -273.15) throw new Error("Below absolute zero");
    this._celsius = v;
  }
  get fahrenheit(): number { return this._celsius * 9 / 5 + 32; }
  set fahrenheit(v: number) { this._celsius = (v - 32) * 5 / 9; }
}
const t = new Temperature(0);
console.log(t.fahrenheit);    // 32
t.celsius = 100;
console.log(t.fahrenheit);    // 212

// === Static members (Python: @staticmethod, @classmethod) ===
class MathUtils {
  static PI = 3.14159;
  static add(a: number, b: number): number { return a + b; }
  static createDefault(): MathUtils { return new MathUtils(); }
}
console.log(MathUtils.PI);
console.log(MathUtils.add(3, 4));

// === Abstract class (Python: ABC) ===
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
  describe(): string { return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`; }
}
class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
  perimeter(): number { return 2 * Math.PI * this.radius; }
}
class Rectangle extends Shape {
  constructor(private w: number, private h: number) { super(); }
  area(): number { return this.w * this.h; }
  perimeter(): number { return 2 * (this.w + this.h); }
}
const shapes: Shape[] = [new Circle(5), new Rectangle(3, 4)];
shapes.forEach(s => console.log(s.describe()));

// === Interface (Python: Protocol) ===
interface Flyable { fly(): string; }
interface Swimmable { swim(): string; }
class Duck implements Flyable, Swimmable {
  fly(): string { return "Duck flying"; }
  swim(): string { return "Duck swimming"; }
}

// === Method Overloading (Python: @singledispatch) ===
class Display {
  render(value: string): string;
  render(value: number): string;
  render(value: boolean): string;
  render(value: string | number | boolean): string {
    if (typeof value === "string") return `String: ${value}`;
    if (typeof value === "number") return `Number: ${value}`;
    return `Boolean: ${value}`;
  }
}

// === Builder Pattern ===
class UserBuilder {
  private user: { name: string; age?: number; email?: string } = { name: "" };
  setName(name: string): this { this.user.name = name; return this; }
  setAge(age: number): this { this.user.age = age; return this; }
  setEmail(email: string): this { this.user.email = email; return this; }
  build(): { name: string; age?: number; email?: string } { return { ...this.user }; }
}
const user = new UserBuilder().setName("Bob").setAge(25).setEmail("bob@x.com").build();
```

### TypeScript OOP Design Patterns

```typescript
// === Abstract Factory ===
interface Button { click(): string; }
interface Checkbox { toggle(): string; }
class WinButton implements Button { click(): string { return "Windows button clicked"; } }
class MacButton implements Button { click(): string { return "Mac button clicked"; } }
class WinCheckbox implements Checkbox { toggle(): string { return "Windows checkbox toggled"; } }
class MacCheckbox implements Checkbox { toggle(): string { return "Mac checkbox toggled"; } }
interface GUIFactory2 { createButton(): Button; createCheckbox(): Checkbox; }
class WinFactory2 implements GUIFactory2 {
  createButton(): Button { return new WinButton(); }
  createCheckbox(): Checkbox { return new WinCheckbox(); }
}
class MacFactory2 implements GUIFactory2 {
  createButton(): Button { return new MacButton(); }
  createCheckbox(): Checkbox { return new MacCheckbox(); }
}

// === Observer Pattern ===
interface Observer<T> { update(data: T): void; }
class Observable<T> {
  private observers: Observer<T>[] = [];
  subscribe(obs: Observer<T>): void { this.observers.push(obs); }
  unsubscribe(obs: Observer<T>): void { this.observers = this.observers.filter(o => o !== obs); }
  notify(data: T): void { for (const obs of this.observers) obs.update(data); }
}
class ConsoleObserver implements Observer<string> { update(data: string): void { console.log(`Received: ${data}`); } }

// === Strategy Pattern ===
interface SortStrategy { sort<T>(items: T[]): T[]; }
class BubbleSort implements SortStrategy { sort<T>(items: T[]): T[] { const arr = [...items]; for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length - i - 1; j++) if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; return arr; } }
class QuickSort implements SortStrategy { sort<T>(items: T[]): T[] { if (items.length <= 1) return items; const pivot = items[0]; const left = items.slice(1).filter(x => x < pivot); const right = items.slice(1).filter(x => x >= pivot); return [...this.sort(left), pivot, ...this.sort(right)]; } }
class Sorter { constructor(private strategy: SortStrategy) {} setStrategy(s: SortStrategy): void { this.strategy = s; } sort<T>(items: T[]): T[] { return this.strategy.sort(items); } }

// === Singleton ===
class Singleton {
  private static instance: Singleton;
  private constructor(public readonly id: string) {}
  static getInstance(): Singleton { if (!Singleton.instance) Singleton.instance = new Singleton("unique"); return Singleton.instance; }
}

// === Composite ===
interface Component { operation(): string; }
class Leaf implements Component { constructor(private name: string) {} operation(): string { return this.name; } }
class Composite implements Component {
  private children: Component[] = [];
  add(c: Component): void { this.children.push(c); }
  operation(): string { return this.children.map(c => c.operation()).join(" + "); }
}

// === Proxy (Lazy Initialization) ===
class ExpensiveResource {
  constructor() { console.log("Loading expensive resource..."); }
  getData(): string { return "expensive data"; }
}
class LazyProxy implements ExpensiveResource {
  private real: ExpensiveResource | null = null;
  getData(): string {
    if (!this.real) this.real = new ExpensiveResource();
    return this.real.getData();
  }
}

const factory = new WinFactory2();
const btn = factory.createButton();
console.log(btn.click()); // "Windows button clicked"

const observable = new Observable<string>();
const obs = new ConsoleObserver();
observable.subscribe(obs);
observable.notify("Hello observers!"); // "Received: Hello observers!"

const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
sorter.setStrategy(new QuickSort());
console.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
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
