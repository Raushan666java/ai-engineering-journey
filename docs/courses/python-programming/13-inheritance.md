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

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/python-programming/13-inheritance/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/hero.svg" alt="Chapter Banner: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/handwritten-notes.svg" alt="Handwritten Notes: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/sticky-notes.svg" alt="Sticky Notes: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/visual-explanation.svg" alt="Visual Explanation: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/architecture.svg" alt="Architecture: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/workflow.svg" alt="Workflow: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/mindmap.svg" alt="Mind Map: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/comparison.svg" alt="Comparison: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/cheatsheet.svg" alt="Cheat Sheet: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/interview-quiz.svg" alt="Quiz Card: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/python-programming/13-inheritance/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/python-programming/13-inheritance/social-card.svg" alt="Social Card: Chapter 13: Inheritance and Protocols" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


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

The MRO for `D(B, C)` is computed as: D → B → C → A → object. Python uses `mro()` to inspect:

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

# shape = Shape()  # TypeError → can't instantiate abstract class
circle = Circle(5)
print(circle.description())  # Circle (area=78.54)
```

### 13.6.1 Abstract Properties

<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-handwritten.svg" alt="Handwritten: 13.6.1 Abstract Properties" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-diagram.svg" alt="Diagram: 13.6.1 Abstract Properties" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-1-abstract-properties-sticky.svg" alt="Sticky Note: 13.6.1 Abstract Properties" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-handwritten.svg" alt="Handwritten: 13.6.2 Virtual Subclasses" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-diagram.svg" alt="Diagram: 13.6.2 Virtual Subclasses" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/13-6-2-virtual-subclasses-sticky.svg" alt="Sticky Note: 13.6.2 Virtual Subclasses" width="30%">
</a>


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

Protocols enable duck typing with static safety → objects satisfy a protocol if they have the right methods, regardless of inheritance.

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


## TypeScript Parallel

TypeScript supports inheritance with `extends` and interfaces for contract enforcement:

```typescript
// Base class
abstract class Shape3D {
  constructor(protected name: string) {}

  abstract volume(): number;       // like @abstractmethod
  abstract surfaceArea(): number;  // like @abstractmethod

  describe(): string {
    return `${this.name}: volume=${this.volume()}, area=${this.surfaceArea()}`;
  }
}

// Single inheritance with extends
class Sphere extends Shape3D {
  constructor(name: string, public radius: number) {
    super(name);
  }

  volume(): number {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }

  surfaceArea(): number {
    return 4 * Math.PI * this.radius ** 2;
  }
}

// Mixin pattern in TypeScript (using interfaces)
interface TimestampMixin {
  createdAt: Date;
  updatedAt: Date;
}

// Apply mixin via class expression
function applyTimestamp<TBase extends new (...args: any[]) => object>(
  Base: TBase
) {
  return class extends Base implements TimestampMixin {
    createdAt = new Date();
    updatedAt = new Date();

    touch(): void {
      this.updatedAt = new Date();
    }
  };
}

class Note {
  constructor(public content: string) {}
}

const TimestampedNote = applyTimestamp(Note);
const note = new TimestampedNote("Hello");
console.log(note.createdAt);  // Date object

// Interface-based contract (like Protocol)
interface Playable {
  play(): void;
  duration: number;
}

class MusicTrack implements Playable {
  duration: number;
  constructor(public title: string, duration: number) {
    this.duration = duration;
  }
  play(): void {
    console.log(`Playing ${this.title}`);
  }
}

function playAll(items: Playable[]): void {
  items.forEach(item => item.play());
  // TypeScript guarantees type safety at compile time
  // Python Protocol checks at runtime with isinstance()
}
```

### Python vs TypeScript Inheritance

<a href="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-handwritten.svg" alt="Handwritten: Python vs TypeScript Inheritance" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-diagram.svg" alt="Diagram: Python vs TypeScript Inheritance" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/13-inheritance/python-vs-typescript-inheritance-sticky.svg" alt="Sticky Note: Python vs TypeScript Inheritance" width="30%">
</a>


| Concept | Python | TypeScript |
|---------|--------|------------|
| Base class call | `super().__init__()` | `super()` or omit |
| Abstract method | `ABC` + `@abstractmethod` | `abstract` keyword + `abstract class` |
| Multiple inheritance | Supported directly | Use mixins or interfaces |
| Interface | `Protocol` / `ABC` | `interface` or `abstract class` |
| Method override | Automatic | Automatic (explicit `override` keyword optional) |
| super() in MRO | C3 linearization | Single chain (no multiple inheritance) |

### TypeScript Advanced Inheritance & Composition Patterns

```typescript
// Python: diamond problem (MRO) → TypeScript: no multiple inheritance
// but mixins via interface merging
interface Loggable {
  log(message: string): void;
}

interface Timestamped {
  readonly createdAt: Date;
}

// TypeScript: implements multiple interfaces (not multiple classes)
class Entity implements Loggable, Timestamped {
  readonly createdAt: Date = new Date();
  log(message: string): void {
    console.log(`[${this.createdAt.toISOString()}] ${message}`);
  }
}

// Python: super().__init__() → TypeScript: super()
class Animal {
  constructor(public name: string) {}
  speak(): void { console.log("..."); }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);  // Equivalent: super().__init__(name)
  }
  override speak(): void {
    console.log(`${this.name} barks!`);
  }
}

// Python: abstractmethod → TypeScript: abstract class
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
  description(): string {
    return `${this.constructor.name} with area ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
  perimeter(): number { return 2 * Math.PI * this.radius; }
}

// Python: Protocol → TypeScript: interface
interface Flyable {
  fly(): void;
}
class Bird implements Flyable {
  fly(): void { console.log("Flapping wings"); }
}
class Airplane implements Flyable {
  fly(): void { console.log("Jet engines"); }
}
// Both satisfy Flyable without extending a common base

// Python: composition over inheritance
class Engine {
  start(): void { console.log("Engine started"); }
}
class Car {
  private engine = new Engine();  // composition
  start(): void { this.engine.start(); }
}
```

### TypeScript Generic Constraints & Mixin Patterns

```typescript
// Python: generic types → TypeScript: generics with constraints
interface HasId {
  id: number;
}
class Repository<T extends HasId> {
  private items: Map<number, T> = new Map();
  save(item: T): void { this.items.set(item.id, item); }
  findById(id: number): T | undefined { return this.items.get(id); }
  delete(id: number): boolean { return this.items.delete(id); }
  findAll(): T[] { return [...this.items.values()]; }
}

// Python: Mixin pattern → TypeScript: mixin function
type GConstructor<T = {}> = new (...args: any[]) => T;
function Timestamped<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    readonly createdAt = new Date();
    get age(): number {
      return Date.now() - this.createdAt.getTime();
    }
  };
}
class BasicEntity {
  constructor(public id: number) {}
}
const TimestampedEntity = Timestamped(BasicEntity);
const entity = new TimestampedEntity(1);
console.log(entity.createdAt);  // current date/time

// Python: Protocol → TypeScript: structural typing
interface Drawable {
  draw(): void;
}
class Canvas {
  render(...shapes: Drawable[]): void {
    shapes.forEach((s) => s.draw());  // any Drawable works
  }
}

// Python: isinstance check with ABC → TypeScript: instanceof
function handle(shape: unknown): void {
  if (shape instanceof Circle) {
    console.log(`Circle with radius ${shape.radius}`);
  } else if (shape instanceof Rectangle) {
    console.log(`Rectangle ${shape.width}x${shape.height}`);
  }
}

// Python: MRO (C3 linearization) → TypeScript: chain of super() calls
// TypeScript: single inheritance chain — no MRO complexities
```

### TypeScript Utilities

```typescript
// === Diamond Problem Detector ===
interface InheritanceNode {
  name: string;
  parents: string[];
}
function detectDiamond(graph: InheritanceNode[]): string[][] {
  const diamonds: string[][] = [];
  const nameMap = new Map(graph.map((n) => [n.name, n]));
  for (const node of graph) {
    if (node.parents.length < 2) continue;
    for (let i = 0; i < node.parents.length; i++) {
      for (let j = i + 1; j < node.parents.length; j++) {
        const ancestorsI = allAncestors(node.parents[i], nameMap);
        const ancestorsJ = allAncestors(node.parents[j], nameMap);
        const shared = ancestorsI.filter((a) => ancestorsJ.includes(a));
        for (const s of shared) diamonds.push([node.name, node.parents[i], node.parents[j], s]);
      }
    }
  }
  return diamonds;
}
function allAncestors(name: string, map: Map<string, InheritanceNode>): string[] {
  const result: string[] = [];
  const queue = [name];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current !== name) result.push(current);
    const node = map.get(current);
    if (node) queue.push(...node.parents);
  }
  return result;
}
console.log(detectDiamond([
  { name: "D", parents: ["B", "C"] },
  { name: "B", parents: ["A"] },
  { name: "C", parents: ["A"] },
]));

// === Abstract Class Implementer ===
abstract class AbstractTemplate {
  abstract step1(): void;
  abstract step2(): void;
  execute(): void { this.step1(); this.step2(); }
}
class ConcreteImpl extends AbstractTemplate {
  step1(): void { console.log("Step 1 done"); }
  step2(): void { console.log("Step 2 done"); }
}
new ConcreteImpl().execute();

// === Mixin Combiner ===
type Ctor<T = {}> = new (...args: any[]) => T;
function Timestamped2<TBase extends Ctor>(Base: TBase) {
  return class extends Base { createdAt = new Date(); updatedAt = new Date(); };
}
function Named2<TBase extends Ctor>(Base: TBase) {
  return class extends Base { name = "Unnamed"; setName(n: string): void { this.name = n; } };
}
class Empty {}
const TimestampedNamed = Timestamped2(Named2(Empty));
const obj = new TimestampedNamed();
console.log(obj.createdAt, obj.name);

// === Instanceof Pattern (Python isinstance equivalent) ===
class Animal {}
class Dog extends Animal { bark(): string { return "Woof!"; } }
class Cat extends Animal { meow(): string { return "Meow!"; } }
function handleAnimal(a: Animal): string {
  if (a instanceof Dog) return a.bark();
  if (a instanceof Cat) return a.meow();
  return "Unknown animal";
}
console.log(handleAnimal(new Dog()));   // Woof!
console.log(handleAnimal(new Cat()));   // Meow!

// === Property Override Check ===
class Shape { readonly kind = "shape"; }
class Circle2 extends Shape { readonly kind = "circle"; }
console.log(new Circle2().kind); // "circle"
```

### TypeScript Inheritance & Composition Patterns

```typescript
// === Class Inheritance (Python: class Child(Parent)) ===
class Animal {
  constructor(public name: string) {}
  speak(): string { return `${this.name} makes a sound`; }
}
class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Python: super().__init__(name)
  }
  speak(): string { return `${this.name} barks`; }  // Override
  fetch(): string { return `${this.name} fetches`; }
}
const dog = new Dog("Rex", "Labrador");
console.log(dog.speak());   // Rex barks
console.log(dog.fetch());   // Rex fetches

// === Method Override with super ===
class BaseLogger {
  log(level: string, msg: string): void { console.log(`[${level}] ${msg}`); }
}
class DetailedLogger extends BaseLogger {
  log(level: string, msg: string): void {
    super.log(level, msg); // Python: super().log(level, msg)
    console.log(`Timestamp: ${new Date().toISOString()}`);
  }
}

// === Protected Members ===
class Vehicle {
  constructor(protected speed: number) {}
  accelerate(amount: number): void { this.speed += amount; }
}
class Car extends Vehicle {
  constructor(speed: number, private fuel: number) { super(speed); }
  boost(): void {
    super.accelerate(50); // Access parent method
    this.fuel -= 10;      // Access own member
  }
  getSpeed(): number { return this.speed; } // Access protected member
}

// === Composition over Inheritance ===
interface Engine { start(): string; stop(): string; }
class ElectricEngine implements Engine {
  start(): string { return "Electric motor whirring"; }
  stop(): string { return "Motor silent"; }
}
class CombustionEngine implements Engine {
  start(): string { return "Engine roaring"; }
  stop(): string { return "Engine sputtering"; }
}
class Car2 {
  constructor(private engine: Engine, private model: string) {}
  start(): string { return `${this.model}: ${this.engine.start()}`; }
  stop(): string { return `${this.model}: ${this.engine.stop()}`; }
}
const ev = new Car2(new ElectricEngine(), "Tesla");
console.log(ev.start());

// === Mixins (Python: multiple inheritance) ===
type Constructor<T = {}> = new (...args: any[]) => T;
function Timestamped<T extends Constructor>(Base: T) {
  return class extends Base {
    timestamp = new Date();
    getAge(): number { return Date.now() - this.timestamp.getTime(); }
  };
}
function Loggable<T extends Constructor>(Base: T) {
  return class extends Base {
    log(msg: string): void { console.log(`[${new Date().toISOString()}] ${msg}`); }
  };
}
class SimpleService { constructor(public name: string) {} }
const EnhancedService = Timestamped(Loggable(SimpleService));
const service = new EnhancedService("MyApp");
service.log("Service started");

// === Interface Extension ===
interface Basic { name: string; }
interface Detailed extends Basic { age: number; email?: string; }
const user: Detailed = { name: "Alice", age: 30 };
```

### TypeScript Advanced Type Relationships

```typescript
// === F-bounded Polymorphism (Python: Self) ===
interface Comparable<T> { compareTo(other: T): number; }
class NumericValue implements Comparable<NumericValue> {
  constructor(public value: number) {}
  compareTo(other: NumericValue): number { return this.value - other.value; }
}

// === Visitor Pattern (Python: singledispatch alternative) ===
interface Visitable { accept(visitor: Visitor): string; }
interface Visitor {
  visitCircle(c: Circle2): string;
  visitSquare(s: Square2): string;
}
class Circle2 implements Visitable {
  constructor(public radius: number) {}
  accept(visitor: Visitor): string { return visitor.visitCircle(this); }
}
class Square2 implements Visitable {
  constructor(public side: number) {}
  accept(visitor: Visitor): string { return visitor.visitSquare(this); }
}
class AreaVisitor implements Visitor {
  visitCircle(c: Circle2): string { return `Circle area: ${Math.PI * c.radius ** 2}`; }
  visitSquare(s: Square2): string { return `Square area: ${s.side ** 2}`; }
}

// === Phantom Type (Python: type hints without runtime effect) ===
class Phantom<Tag extends string> {
  constructor(public value: string) {}
  static create<T extends string>(val: string): Phantom<T> { return new Phantom<T>(val); }
}
type Meters = Phantom<"meters">;
type Feet = Phantom<"feet">;
function convertToFeet(m: Meters): Feet { const val = parseFloat(m.value) * 3.281; return Phantom.create<"feet">(val.toFixed(2)); }

// === Type-safe Builder with Inheritance ===
abstract class Builder<T> {
  protected config: Partial<T> = {};
  abstract build(): T;
}
class CarBuilder extends Builder<{ engine: string; wheels: number; color: string }> {
  setEngine(engine: string): this { this.config.engine = engine; return this; }
  setWheels(n: number): this { this.config.wheels = n; return this; }
  setColor(color: string): this { this.config.color = color; return this; }
  build(): { engine: string; wheels: number; color: string } {
    if (!this.config.engine || !this.config.wheels || !this.config.color) throw new Error("Missing config");
    return this.config as any;
  }
}

// === Dependent Types via Declaration Merging ===
interface User { name: string; age?: number; }
declare module "./user" {
  interface User { email?: string; }
}

// === Template Method Pattern ===
abstract class DataProcessor {
  process(): string[] {
    const data = this.loadData();
    const cleaned = this.cleanData(data);
    const transformed = this.transformData(cleaned);
    return this.outputData(transformed);
  }
  protected abstract loadData(): string[];
  protected cleanData(data: string[]): string[] { return data.filter(x => x.trim().length > 0); }
  protected abstract transformData(data: string[]): string[];
  protected outputData(data: string[]): string[] { return data.map(x => x.toUpperCase()); }
}
class CSVProcessor extends DataProcessor {
  protected loadData(): string[] { return ["a", "b", "c"]; }
  protected transformData(data: string[]): string[] { return data.map(x => `${x}_processed`); }
}

// === Polymorphic Serialization ===
interface Serializable { serialize(): string; }
abstract class Entity implements Serializable {
  constructor(public id: number) {}
  abstract serialize(): string;
  static deserialize<T extends Entity>(this: new (...args: any[]) => T, data: string): T {
    return JSON.parse(data);
  }
}

const shapes: Visitable[] = [new Circle2(5), new Square2(4)];
const visitor = new AreaVisitor();
shapes.forEach(s => console.log(s.accept(visitor)));

const car = new CarBuilder().setEngine("V8").setWheels(4).setColor("red").build();
console.log(car); // { engine: "V8", wheels: 4, color: "red" }

const csvProc = new CSVProcessor();
console.log(csvProc.process()); // ["A_PROCESSED", "B_PROCESSED", "C_PROCESSED"]
```

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

1. Create a class hierarchy for geometric solids: `Shape3D` (abstract) → `Sphere`, `Cuboid`, `Cylinder`. Each must implement `volume()` and `surface_area()`. Use `super().__init__()` for common attributes.
2. Implement mixins `TimestampMixin` (adds `created_at` and `updated_at` timestamps) and `SerializableMixin` (adds `to_dict`/`from_dict`). Use them with a `Note` class.
3. Define a `Playable` Protocol with a `play()` method. Create classes `MusicTrack` and `VideoClip` that satisfy it. Write a function `play_all(playables: list[Playable])` and test it.

### Challenge Problem

Design a composable validation system. Define an `abstractmethod` base class `Validator` with `validate(value) -> bool` and `error_message(value) -> str`. Create concrete validators: `NonEmpty`, `MinLength(n)`, `MaxLength(n)`, `MatchesRegex(pattern)`. Then create a `CompositeValidator` that takes multiple validators and passes only if all pass. Use mixins or protocols to allow validators to be combined with `&` operator.
