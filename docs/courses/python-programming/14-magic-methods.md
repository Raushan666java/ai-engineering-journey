# Chapter 14: Magic Methods


> **Previous:** [Inheritance and Polymorphism](./13-inheritance.md) | **Next:** [Decorators](./15-decorators.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Implement common magic methods for string representation, equality, hashing, and ordering
- Make objects subscriptable with `__getitem__` and `__setitem__`
- Create callable objects with `__call__`
- Write context managers using `__enter__` and `__exit__`
- Build iterable objects with `__iter__` and `__next__`
- Use `__len__` and other container methods

![Magic Methods](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/14-magic-methods.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|14.1 Introduction||Magic methods (dunder methods) hook objects into Python language behaviours.|
|14.2 __str__ and __repr__||`__repr__` is for developers (unambiguous); `__str__` is for users (readable via print()).|
|14.3 __eq__ and __hash__||Override `__eq__` and `__hash__` together — if `__eq__` changes, `__hash__` must change too.|
|14.4 __lt__, __le__, __gt__, __ge__||`__enter__`/`__exit__` implement context managers; `@contextmanager` offers a generator-based alternative.|
|14.5 __getitem__, __setitem__, __delitem__||`__call__` makes objects callable; `__getitem__`/`__setitem__` make them subscriptable.|
|14.6 __call__||undefined|
|14.7 __enter__ and __exit__ (Context Managers)||undefined|
|14.8 __iter__ and __next__||undefined|
|14.9 __len__ and __bool__||undefined|
|14.10 __add__, __sub__, __mul__, and Arithmetic||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Introduction]
    S1[__str__ and __repr__]
    S2[__eq__ and __hash__]
    S3[__lt__, __le__, __gt__, __ge__]
    S4[__getitem__, __setitem__, __delitem__]
    S5[__call__]
    S6[__enter__ and __exit__ (Context Managers)]
    S7[__iter__ and __next__]
    S8[__len__ and __bool__]
    S9[__add__, __sub__, __mul__, and Arithmetic]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
    S8 --> S9
```
## 14.1 Introduction

> **One-Sentence Takeaway:** Magic methods (dunder methods) hook objects into Python language behaviours.


Magic methods (dunder methods) are special methods with double underscores that allow objects to define Python language behaviours. They are not meant to be called directly → Python calls them implicitly.

```python
class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
    
    def __repr__(self) -> str:
        return f"Point({self.x}, {self.y})"
    
    def __str__(self) -> str:
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(repr(p))   # Point(3, 4)  → calls __repr__
print(str(p))    # (3, 4)       → calls __str__
print(p)         # (3, 4)       → calls __str__
```

## 14.2 __str__ and __repr__

> **One-Sentence Takeaway:** `__repr__` is for developers (unambiguous); `__str__` is for users (readable via print()).


`__repr__` is for developers (unambiguous, used in debugging). `__str__` is for users (readable, used by `print()`):

```python
class Fraction:
    def __init__(self, num: int, den: int):
        self.num = num
        self.den = den
    
    def __repr__(self) -> str:
        return f"Fraction({self.num}, {self.den})"
    
    def __str__(self) -> str:
        return f"{self.num}/{self.den}"

f = Fraction(3, 4)
print([f, Fraction(1, 2)])  # [Fraction(3, 4), Fraction(1, 2)]  (uses __repr__)
print(f)                     # 3/4  (uses __str__)
```

If `__str__` is not defined, Python falls back to `__repr__`.

## 14.3 __eq__ and __hash__

> **One-Sentence Takeaway:** Override `__eq__` and `__hash__` together — if `__eq__` changes, `__hash__` must change too.


`__eq__` defines equality. `__hash__` makes an object usable as a dict key or set member:

```python
class Person:
    def __init__(self, name: str, ssn: str):
        self.name = name
        self.ssn = ssn
    
    def __repr__(self) -> str:
        return f"Person({self.name}, ...)"
    
    def __eq__(self, other) -> bool:
        if not isinstance(other, Person):
            return NotImplemented
        return self.ssn == other.ssn
    
    def __hash__(self) -> int:
        return hash(self.ssn)

p1 = Person("Alice", "123-45-6789")
p2 = Person("Alice", "123-45-6789")
p3 = Person("Bob", "987-65-4321")

print(p1 == p2)       # True (same SSN)
print(p1 is p2)       # False (different objects)
print(p1 == p3)       # False

# Can be used in sets and dicts
people = {p1, p2, p3}
print(len(people))    # 2 (p1 and p2 are equal)

registry = {p1: "active"}
print(registry[p2])   # "active" (same hash, same equality)
```

**Rule**: if you define `__eq__`, define `__hash__`. If `__eq__` is defined but `__hash__` is not, the object becomes unhashable (can't be used in sets or as dict keys). If a class defines `__eq__` but not `__hash__`, `__hash__` is set to `None`.

## 14.4 __lt__, __le__, __gt__, __ge__

> **One-Sentence Takeaway:** `__enter__`/`__exit__` implement context managers; `@contextmanager` offers a generator-based alternative.


Define ordering for sorting and comparison:

```python
class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price
    
    def __repr__(self) -> str:
        return f"Product({self.name}, ${self.price:.2f})"
    
    def __lt__(self, other) -> bool:
        if not isinstance(other, Product):
            return NotImplemented
        return self.price < other.price
    
    def __le__(self, other) -> bool:
        if not isinstance(other, Product):
            return NotImplemented
        return self.price <= other.price

products = [
    Product("Chair", 150),
    Product("Desk", 500),
    Product("Lamp", 80),
]
products.sort()
print(products)
# [Product(Lamp, $80.00), Product(Chair, $150.00), Product(Desk, $500.00)]
```

Using `@total_ordering` from `functools` reduces boilerplate → define `__eq__` and one comparison method, and the rest are generated:

```python
from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, name: str, grade: float):
        self.name = name
        self.grade = grade
    
    def __eq__(self, other) -> bool:
        return self.grade == other.grade
    
    def __lt__(self, other) -> bool:
        return self.grade < other.grade
    
    def __repr__(self) -> str:
        return f"Student({self.name}, {self.grade})"

s1, s2, s3 = Student("Alice", 85), Student("Bob", 92), Student("Charlie", 78)
print(s1 > s3)   # True (generated from __lt__)
print(s2 >= s1)  # True
```

## 14.5 __getitem__, __setitem__, __delitem__

> **One-Sentence Takeaway:** `__call__` makes objects callable; `__getitem__`/`__setitem__` make them subscriptable.


Make objects subscriptable:

```python
class SimpleDict:
    def __init__(self):
        self._data = {}
    
    def __getitem__(self, key):
        return self._data[key]
    
    def __setitem__(self, key, value):
        self._data[key] = value
    
    def __delitem__(self, key):
        del self._data[key]
    
    def __contains__(self, key):
        return key in self._data
    
    def __len__(self):
        return len(self._data)

d = SimpleDict()
d["name"] = "Alice"    # __setitem__
print(d["name"])       # __getitem__  → Alice
print("name" in d)     # __contains__ → True
print(len(d))           # __len__     → 1
del d["name"]           # __delitem__
```

## 14.6 __call__

> **One-Sentence Takeaway:** undefined


Make objects callable like functions:

```python
class Adder:
    def __init__(self, n: int):
        self.n = n
    
    def __call__(self, x: int) -> int:
        return self.n + x

add5 = Adder(5)
print(add5(10))    # 15
print(add5(3))     # 8

# Practical: decorator factory
class CountCalls:
    def __init__(self):
        self.count = 0
    
    def __call__(self):
        self.count += 1
        return self.count

counter = CountCalls()
print(counter())   # 1
print(counter())   # 2
print(counter())   # 3
```

## 14.7 __enter__ and __exit__ (Context Managers)

> **One-Sentence Takeaway:** undefined


Context managers handle setup and teardown automatically with the `with` statement:

```python
class ManagedFile:
    def __init__(self, filename: str, mode: str = "r"):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file  # bound to 'as' variable
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        # Return False to propagate exceptions, True to suppress
        return False

# Usage
with ManagedFile("test.txt", "w") as f:
    f.write("Hello, world!")

# The file is closed automatically after the block
```

Using `contextlib.contextmanager` for simpler cases:

```python
from contextlib import contextmanager

@contextmanager
def managed_file(filename: str, mode: str = "r"):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()

with managed_file("test.txt") as f:
    print(f.read())
```

## 14.8 __iter__ and __next__

> **One-Sentence Takeaway:** undefined


Make objects iterable:

```python
class Range:
    def __init__(self, start: int, end: int, step: int = 1):
        self.start = start
        self.end = end
        self.step = step
    
    def __iter__(self):
        self.current = self.start
        return self
    
    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        value = self.current
        self.current += self.step
        return value

for i in Range(0, 5):
    print(i, end=" ")  # 0 1 2 3 4

print()

# Two-iterator protocol (iterable but not its own iterator)
class Squares:
    def __init__(self, n: int):
        self.n = n
    
    def __iter__(self):
        return (i ** 2 for i in range(self.n))

s = Squares(5)
print(list(s))   # [0, 1, 4, 9, 16]
print(list(s))   # [0, 1, 4, 9, 16]  (fresh iterator each time)
```

## 14.9 __len__ and __bool__

> **One-Sentence Takeaway:** undefined


```python
class Team:
    def __init__(self, members: list[str]):
        self.members = members
    
    def __len__(self) -> int:
        return len(self.members)
    
    def __bool__(self) -> bool:
        return len(self.members) > 0

team = Team(["Alice", "Bob", "Charlie"])
print(len(team))        # 3
if team:
    print("Team exists")

empty = Team([])
print(bool(empty))      # False
```

If `__bool__` is not defined, Python falls back to `__len__` (truthy if length > 0).

## 14.10 __add__, __sub__, __mul__, and Arithmetic

> **One-Sentence Takeaway:** undefined


```python
class Vector:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
    
    def __repr__(self) -> str:
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other: "Vector") -> "Vector":
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other: "Vector") -> "Vector":
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar: float) -> "Vector":
        return Vector(self.x * scalar, self.y * scalar)
    
    def __rmul__(self, scalar: float) -> "Vector":
        return self * scalar  # commutativity
    
    def __abs__(self) -> float:
        import math
        return math.sqrt(self.x ** 2 + self.y ** 2)

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)    # Vector(4, 6)
print(v1 - v2)    # Vector(2, 2)
print(v1 * 2)     # Vector(6, 8)
print(2 * v1)     # Vector(6, 8)  (reverse multiplication)
print(abs(v1))    # 5.0
```

**Reflected operators** (`__radd__`, `__rsub__`, etc.) are called when the left operand does not support the operation.


## Concept Comparison Table

| Method | Purpose | Trigger |
|---|---|---|
| __init__ | Constructor | ClassName() |
| __str__ | User-friendly string | print(), str() |
| __repr__ | Developer-friendly string | repr(), debug |
| __call__ | Callable objects | obj() |
| __enter__/__exit__ | Context manager | with statement |


## Quick Reference

```python
class Point:
    def __init__(self, x, y): self.x=x; self.y=y
    def __repr__(self): return f"Point({self.x},{self.y})"
    def __add__(self, o): return Point(self.x+o.x, self.y+o.y)
    def __eq__(self, o): return self.x==o.x and self.y==o.y
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Web Dev|Context managers for DB connections|14.7|
|Data Science|Callable models with __call__|14.6|
|DevOps|Custom iterable configuration parsers|14.8|
|Automation|Comparable version objects with __lt__|14.4|


## Chapter Quiz

**Q1.** What is the difference between __str__ and __repr__?
- no difference
- __str__ for users, __repr__ for devs **<-- Correct**
- __str__ for devs, __repr__ for users
- both are for debugging

**Q2.** What must you do when overriding __eq__?
- also override __hash__ **<-- Correct**
- also override __str__
- call super().__eq__
- nothing

**Q3.** What does __enter__ return?
- None
- the context manager itself
- any object bound to "as" **<-- Correct**
- True/False

**Q4.** What does __call__ do?
- creates instances
- makes instances callable **<-- Correct**
- deletes attributes
- iterates over items

**Q5.** What @total_ordering generates?
- all comparison methods **<-- Correct**
- __init__ and __repr__
- __hash__ only
- getter/setter


### More TypeScript Magic Method Equivalents

<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-handwritten.svg" alt="Handwritten: More TypeScript Magic Method Equivalents" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-diagram.svg" alt="Diagram: More TypeScript Magic Method Equivalents" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/more-typescript-magic-method-equivalents-sticky.svg" alt="Sticky Note: More TypeScript Magic Method Equivalents" width="30%">
</a>


```typescript
// Python: __add__ → TypeScript: custom add method
class Vector2D {
  constructor(public x: number, public y: number) {}
  add(other: Vector2D): Vector2D {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }
  // Python: __repr__
  toString(): string {
    return `Vector2D(${this.x}, ${this.y})`;
  }
}
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
console.log(v1.add(v2).toString());  // Vector2D(4, 6)

// Python: __getitem__ / __setitem__ → TypeScript: Proxy
const handler: ProxyHandler<Record<string, unknown>> = {
  get(target, prop: string) {
    if (prop in target) return target[prop];
    return `Key "${prop}" not found`;
  },
  set(target, prop: string, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
};
const dict = new Proxy({}, handler);
dict.name = "Alice";  // logs: Setting name to Alice
console.log(dict.missing);  // Key "missing" not found

// Python: __len__ → TypeScript: length property
class Collection<T> {
  private items: T[] = [];
  get length(): number { return this.items.length; }
  add(item: T): void { this.items.push(item); }
}

// Python: __call__ → TypeScript: class with apply
class Adder {
  constructor(private n: number) {}
  apply(value: number): number {
    return value + this.n;
  }
}
const add5 = new Adder(5);
console.log(add5.apply(10));  // 15
// Note: TypeScript doesn't support making instances directly callable

// Python: __eq__ / __hash__ → TypeScript: custom equals
class Money {
  constructor(public amount: number, public currency: string) {}
  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
  hashCode(): string {
    return `${this.amount}:${this.currency}`;
  }
}
```

### TypeScript Utilities

```typescript
// === Proxy-Based Observable (Python __getattr__/__setattr__ pattern) ===
function createObservable<T extends Record<string, unknown>>(target: T, onChange: (key: string, value: unknown) => void): T {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop === "__isProxy") return true;
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      const old = obj[prop as string];
      const result = Reflect.set(obj, prop, value);
      if (old !== value) onChange(String(prop), value);
      return result;
    },
  });
}
const observed = createObservable({ x: 10, y: 20 }, (key, val) => console.log(`Changed: ${key} = ${val}`));
observed.x = 15; // "Changed: x = 15"
observed.y = 25; // "Changed: y = 25"

// === Symbol.iterator Helper (Python __iter__ pattern) ===
class RangeIterator {
  constructor(private start: number, private end: number, private step = 1) {}
  *[Symbol.iterator](): Generator<number> {
    for (let i = this.start; i < this.end; i += this.step) yield i;
  }
}
const r = new RangeIterator(1, 6, 2);
console.log([...r]); // [1, 3, 5]

// === toString Override Generator ===
function autoToString<T extends Record<string, unknown>>(obj: T): string {
  const entries = Object.entries(obj).map(([k, v]) => `${k}=${v}`).join(", ");
  return `${obj.constructor.name}(${entries})`;
}
class User2 {
  constructor(public name: string, public age: number) {}
  toString(): string { return autoToString(this); }
}
console.log(new User2("Alice", 30).toString()); // User2(name=Alice, age=30)

// === ValueOf Equivalent ===
class Money {
  constructor(private amount: number, private currency: string) {}
  valueOf(): number { return this.amount; }
  toString(): string { return `${this.amount} ${this.currency}`; }
}
const m1 = new Money(10, "USD");
const m2 = new Money(5, "USD");
console.log(m1.valueOf() + m2.valueOf()); // 15

// === Python __getitem__ / __setitem__ via Proxy ===
function createDictList<T>(items: T[] = []): { items: T[]; get(idx: number): T; set(idx: number, val: T): void; push(val: T): void } {
  return {
    items: [...items],
    get(idx: number): T { return this.items[idx]; },
    set(idx: number, val: T): void { if (idx < this.items.length) this.items[idx] = val; },
    push(val: T): void { this.items.push(val); },
  };
}
const dl = createDictList<number>([1, 2, 3]);
console.log(dl.get(1)); // 2
dl.set(1, 99);
console.log(dl.items);  // [1, 99, 3]
```

### TypeScript Metaprogramming with Proxy

```typescript
// === Property Access Logger (Python: __getattr__) ===
function loggedObject<T extends object>(target: T): T {
  return new Proxy(target, {
    get(obj, prop) {
      console.log(`Accessing ${String(prop)}`);
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      console.log(`Setting ${String(prop)} = ${value}`);
      return Reflect.set(obj, prop, value);
    },
  });
}

// === Negative Array Indexing (Python: arr[-1]) ===
function negativeIndexArray<T>(arr: T[]): T[] {
  return new Proxy(arr, {
    get(target, prop) {
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const idx = Number(prop);
        return idx < 0 ? target[target.length + idx] : target[idx];
      }
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const idx = Number(prop);
        if (idx < 0) target[target.length + idx] = value as T;
        else target[idx] = value as T;
        return true;
      }
      return Reflect.set(target, prop, value);
    },
  });
}
const arr = negativeIndexArray([10, 20, 30, 40, 50]);
console.log(arr[-1]); // 50
console.log(arr[-2]); // 40

// === Method Missing Handler (Python: __getattr__ for methods) ===
function dynamicMethods<T extends object>(target: T): T {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop in obj) return Reflect.get(obj, prop);
      return (...args: unknown[]) => console.log(`Called dynamic method ${String(prop)}(${args.map(a => JSON.stringify(a)).join(", ")})`);
    },
  });
}
const dyn = dynamicMethods({ name: "test" });
console.log(dyn.name); // "test"
(dyn as any).unknownMethod(1, 2, 3); // "Called dynamic method unknownMethod(1, 2, 3)"

// === Memoized Property (Python: @cached_property) ===
function cachedProperty<T, K extends keyof T>(target: T, key: K, getter: () => T[K]): void {
  let value: T[K] | undefined;
  let initialized = false;
  Object.defineProperty(target, key, {
    get() {
      if (!initialized) { value = getter(); initialized = true; }
      return value;
    },
    configurable: true,
    enumerable: true,
  });
}

// === Auto-stringification (Python: __str__) ===
function autoString<T extends object>(target: T): T {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop === "toString" || prop === Symbol.toPrimitive) {
        return () => JSON.stringify(obj);
      }
      return Reflect.get(obj, prop);
    },
  });
}

// === Validation Proxy (Python: __setattr__ validation) ===
function validatedObject<T extends object>(target: T, schema: Partial<Record<keyof T, (v: unknown) => boolean>>): T {
  return new Proxy(target, {
    set(obj, prop, value) {
      const validator = schema[prop as keyof T];
      if (validator && !validator(value)) throw new Error(`Invalid value for ${String(prop)}`);
      return Reflect.set(obj, prop, value);
    },
  });
}

// === Default Values (Python: defaultdict pattern via __missing__) ===
function withDefault<T extends object>(target: T, defaultFn: (key: string) => unknown): T {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop in obj) return Reflect.get(obj, prop);
      const val = defaultFn(String(prop));
      Reflect.set(obj, prop, val as any);
      return val;
    },
  });
}

// === Read-only Wrapper ===
function readonly<T extends object>(target: T): T {
  return new Proxy(target, {
    set: () => { throw new Error("Object is read-only"); },
    deleteProperty: () => { throw new Error("Object is read-only"); },
    defineProperty: () => { throw new Error("Object is read-only"); },
  });
}

interface UserSchema { name: string; age: number; }
const user = validatedObject<UserSchema>({ name: "Alice", age: 30 }, {
  age: (v) => typeof v === "number" && v >= 0 && v < 150,
  name: (v) => typeof v === "string" && v.length > 0,
});
user.age = 25; // OK
// user.age = -5; // Throws Error

const defaults = withDefault({}, key => `default_${key}`);
console.log((defaults as any).foo); // "default_foo"
```

### TypeScript Proxy-based Magic Patterns

```typescript
// === Operator Overloading via Proxy ===
function createOverloaded<T extends object>(target: T): T {
  const handler: ProxyHandler<T> = {
    get(target, prop, receiver) {
      const val = Reflect.get(target, prop, receiver);
      if (typeof val === "function") {
        return function(...args: unknown[]) {
          console.log(`[magic] ${String(prop)}(${args.map(a => JSON.stringify(a)).join(", ")})`);
          return val.apply(this, args);
        };
      }
      return val;
    },
    set(target, prop, value) {
      console.log(`[magic] set ${String(prop)} = ${JSON.stringify(value)}`);
      return Reflect.set(target, prop, value);
    },
    has(target, prop) {
      console.log(`[magic] contains ${String(prop)}`);
      return prop in target;
    },
    deleteProperty(target, prop) {
      console.log(`[magic] delete ${String(prop)}`);
      return delete target[prop];
    },
    ownKeys(target) {
      console.log("[magic] dir()");
      return Reflect.ownKeys(target);
    },
  };
  return new Proxy(target, handler);
}
const obj = createOverloaded({ x: 10, y: 20 });
"x" in obj;           // logs: contains x
obj.z = 30;           // logs: set z = 30
delete obj.y;         // logs: delete y

// === Python-style __str__ / __repr__ via toString ===
class ReprMixin {
  toString(): string { return `${this.constructor.name}(${JSON.stringify(this)})`; }
  toJSON(): unknown { return { ...this, _type: this.constructor.name }; }
}

// === Python-style __len__, __getitem__ via Proxy ===
function arrayLike<T>(items: T[]): T[] {
  return new Proxy(items, {
    get(target, prop) {
      if (prop === "__len__") return target.length;
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const idx = Number(prop);
        return idx < 0 ? target[target.length + idx] : target[idx];
      }
      return Reflect.get(target, prop);
    },
  });
}
const seq = arrayLike([10, 20, 30, 40, 50]);
console.log((seq as any)["-1"]);  // 50 (Python-style negative index)

// === Python-style __call__ via Proxy ===
function makeCallable<T extends object>(obj: T, fn: (...args: unknown[]) => unknown): T {
  const handler: ProxyHandler<T> = {
    apply(target, thisArg, args) { return fn.apply(thisArg, args); },
    get(target, prop) { return Reflect.get(target, prop); },
  };
  return new Proxy(obj, handler);
}

// === Python-style property descriptor via Object.defineProperty ===
function defineProperty<T>(obj: T, key: keyof T, getter: () => unknown, setter?: (v: unknown) => void): void {
  Object.defineProperty(obj, key, { get: getter, set: setter, enumerable: true, configurable: true });
}

// === Python-style __iter__ / __next__ ===
class Iterable<T> implements Iterable<T> {
  constructor(private items: T[]) {}
  [Symbol.iterator](): Iterator<T> {
    let idx = 0;
    const items = this.items;
    return { next: () => ({ value: items[idx], done: idx++ >= items.length }) };
  }
}
for (const item of new Iterable([1, 2, 3])) console.log(item);
```

## Summary

Magic methods hook into Python's built-in behaviours:

| Category | Methods |
|----------|---------|
| Representation | `__repr__`, `__str__`, `__format__` |
| Comparison | `__eq__`, `__hash__`, `__lt__`, `__le__`, `__gt__`, `__ge__` |
| Container | `__getitem__`, `__setitem__`, `__delitem__`, `__contains__`, `__len__`, `__bool__` |
| Callable | `__call__` |
| Context manager | `__enter__`, `__exit__` |
| Iterator | `__iter__`, `__next__` |
| Arithmetic | `__add__`, `__sub__`, `__mul__`, etc. |

## TypeScript Parallel

TypeScript doesn't have magic methods in the same sense, but has equivalents for several protocols:

```typescript
// toString / toJSON (equivalent to __str__ / __repr__)
class Point {
  constructor(public x: number, public y: number) {}

  toString(): string {
    return `Point(${this.x}, ${this.y})`;
  }

  toJSON(): object {
    return { x: this.x, y: this.y, type: "Point" };
  }
}

// ValueOf for primitive coercion
class Money {
  constructor(public amount: number, public currency: string) {}

  valueOf(): number {
    return this.amount;
  }
}
const price = new Money(29.99, "USD");
console.log(price + 10);  // 39.99 (uses valueOf)

// Symbol.iterator for iteration (like __iter__)
class Range implements Iterable<number> {
  constructor(private start: number, private end: number) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    return {
      next: (): IteratorResult<number> => {
        if (current > this.end) return { done: true, value: undefined as any };
        return { done: false, value: current++ };
      }
    };
  }
}
for (const n of new Range(1, 5)) console.log(n);  // 1, 2, 3, 4, 5

// Custom getter/setter (like __getitem__ / __setitem__)
class FixedArray<T> {
  private data: T[] = [];

  constructor(private capacity: number) {}

  get(index: number): T | undefined {
    if (index < 0 || index >= this.capacity) throw new Error("Index out of bounds");
    return this.data[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.capacity) throw new Error("Index out of bounds");
    this.data[index] = value;
  }

  get length(): number {
    return this.capacity;
  }
}

// Symbol.toPrimitive (like __int__ / __float__)
class Vector2D {
  constructor(public x: number, public y: number) {}

  [Symbol.toPrimitive](hint: string): number | string {
    if (hint === "number") return Math.sqrt(this.x ** 2 + this.y ** 2);
    return `(${this.x}, ${this.y})`;
  }
}
```

### Python Magic Methods vs TypeScript Equivalents

<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-handwritten.svg" alt="Handwritten: Python Magic Methods vs TypeScript Equivalents" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-diagram.svg" alt="Diagram: Python Magic Methods vs TypeScript Equivalents" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/14-magic-methods/python-magic-methods-vs-typescript-equivalents-sticky.svg" alt="Sticky Note: Python Magic Methods vs TypeScript Equivalents" width="30%">
</a>


| Python | TypeScript | Purpose |
|--------|------------|---------|
| `__str__` / `__repr__` | `toString()` | String representation |
| `__iter__` / `__next__` | `[Symbol.iterator]()` | Iteration protocol |
| `__getitem__` / `__setitem__` | `get()` / `set()` methods | Indexed access |
| `__len__` | `get length()` property | Size query |
| `__enter__` / `__exit__` | `using` (TS 5.2+) / try-finally | Context management |
| `__call__` | `() =>` function type | Callable objects |
| `__eq__` | `equals()` method or `===` | Equality comparison |
| `__add__` | method like `add()` or `+` overload | Arithmetic |

## Exercises

### Review Questions

1. Why should `__hash__` be defined when `__eq__` is overridden?
2. What is the difference between `__str__` and `__repr__`?
3. How does `__enter__` communicate its return value to the `as` variable?
4. What must `__exit__` return to suppress an exception?
5. What is `@total_ordering` and what does it generate?

### Application Problems

1. Implement a `Matrix2D` class with `__add__`, `__sub__`, `__mul__` (scalar and matrix multiplication), `__repr__`, and `__eq__`. Support `__getitem__` with tuple keys: `m[(row, col)]`.
2. Create a `Timer` context manager using `__enter__` and `__exit__` that measures elapsed time. Print the duration when the block exits. Then reimplement it with `@contextmanager`.
3. Implement a `FixedArray` class with `__len__`, `__getitem__`, `__setitem__`, and `__iter__`. It should have a fixed capacity set at construction time. Raise `IndexError` for out-of-bounds access.

### Challenge Problem

Build a simple SQL query builder using magic methods. Create a `Query` class that supports `__and__` (WHERE clause conjunction), `__or__`, `__eq__` (field comparison), and `__call__` (execution). Define a `Field` descriptor class with `__eq__`, `__lt__`, `__gt__` that produces `Comparison` objects. Chain them: `Query().select("name", "age").where((Field("age") >= 18) & (Field("name").contains("Al")))`. Generate a SQL string.
