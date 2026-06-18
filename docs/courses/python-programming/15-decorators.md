# Chapter 15: Decorators

## Learning Objectives

By the end of this chapter, students will be able to:
- Write function decorators that wrap and modify behaviour
- Use `functools.wraps` to preserve metadata
- Implement common decorator patterns: timer, debug, cache, retry
- Create class decorators
- Build parameterised decorators (decorator factories)
- Stack multiple decorators

![Decorator Pattern](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/15-decorators.png)

## 15.1 Function Decorators

A decorator is a function that takes another function and extends its behaviour without modifying it:

```python
def simple_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@simple_decorator
def say_hello():
    print("Hello!")

say_hello()
# Before function call
# Hello!
# After function call
```

The `@decorator` syntax is equivalent to:

```python
def say_hello():
    print("Hello!")

say_hello = simple_decorator(say_hello)
```

## 15.2 Decorators with Arguments

When the wrapped function takes arguments, the wrapper must accept and forward them:

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@logger
def add(a: int, b: int) -> int:
    return a + b

@logger
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

print(add(3, 4))
# Calling add with args=(3, 4), kwargs={}
# add returned 7
# 7

print(greet("Alice", greeting="Hi"))
# Calling greet with args=('Alice',), kwargs={'greeting': 'Hi'}
# greet returned 'Hi, Alice!'
# Hi, Alice!
```

## 15.3 functools.wraps

`@wraps` preserves the original function's metadata (`__name__`, `__doc__`, `__module__`, etc.):

```python
from functools import wraps

def logger(func):
    @wraps(func)  # copies func.__name__, __doc__, etc. to wrapper
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

print(add.__name__)  # 'add' (without @wraps, this would be 'wrapper')
print(add.__doc__)   # 'Add two numbers.' (would be None without @wraps)
```

Always use `@wraps` when writing decorators.

## 15.4 Common Decorator Patterns

### 15.4.1 Timer

```python
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.5)
    return "Done"

slow_function()  # slow_function took 0.5012s
```

### 15.4.2 Debug

```python
def debug(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"DEBUG: {func.__name__}({signature})")
        result = func(*args, **kwargs)
        print(f"DEBUG: {func.__name__} = {result!r}")
        return result
    return wrapper

@debug
def multiply(a: int, b: int) -> int:
    return a * b

multiply(3, 4)
# DEBUG: multiply(3, 4)
# DEBUG: multiply = 12
```

### 15.4.3 Cache (Memoization)

```python
def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

@cache
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Without cache: exponential time. With cache: O(n).
print(fibonacci(100))  # 354224848179261915075
```

Python 3.9+ includes `functools.cache`:

```python
from functools import cache

@cache
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

### 15.4.4 Retry

```python
import time
from functools import wraps

def retry(max_attempts: int = 3, delay: float = 1.0):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts:
                        raise
                    print(f"Attempt {attempt} failed: {e}. Retrying in {delay}s...")
                    time.sleep(delay)
            return None  # unreachable
        return wrapper
    return decorator

@retry(max_attempts=3, delay=0.5)
def unstable_network_call(url: str) -> str:
    import random
    if random.random() < 0.7:
        raise ConnectionError("Timeout")
    return f"Response from {url}"

print(unstable_network_call("http://example.com"))
```

## 15.5 Decorator Factories

A decorator factory takes arguments and returns a decorator:

```python
def repeat(n: int):
    """Decorator factory: repeat the function n times."""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(n):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def get_time() -> str:
    import time
    return time.strftime("%H:%M:%S")

print(get_time())  # ['14:30:01', '14:30:01', '14:30:01']
```

The syntax `@repeat(3)` breaks down as:

```python
get_time = repeat(3)(get_time)
# first:  repeat(3) returns the decorator
# second: decorator(get_time) returns the wrapper
```

## 15.6 Multiple Decorators

Decorators stack bottom-up (the one closest to the function applies first):

```python
@timer
@debug
def compute(x: int) -> int:
    return x ** 2

compute(5)
# Equivalent to: compute = timer(debug(compute))
```

Trace:

1. `debug(compute)` creates a wrapper
2. `timer(wrapper)` wraps the debug wrapper
3. Calling `compute(5)` first enters the timer, which calls the debug wrapper, which calls the original function

Order matters:

```python
@debug
@timer
def compute(x: int) -> int:
    return x ** 2
```

This differs because `timer` wraps first, then `debug` wraps the timed version.

## 15.7 Class Decorators

Decorators can also modify classes:

```python
def add_repr(cls):
    """Add a __repr__ method to a class."""
    def __repr__(self) -> str:
        items = ", ".join(f"{k}={v!r}" for k, v in self.__dict__.items())
        return f"{cls.__name__}({items})"
    cls.__repr__ = __repr__
    return cls

@add_repr
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

p = Person("Alice", 30)
print(p)  # Person(name='Alice', age=30)
```

### 15.7.1 Singleton Decorator

```python
def singleton(cls):
    instances = {}
    @wraps(cls)
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Database:
    def __init__(self):
        print("Database instance created")

db1 = Database()  # Database instance created
db2 = Database()  # no output â€” reuses instance
print(db1 is db2)  # True
```

## 15.8 Decorators with Optional Arguments

Support both `@decorator` and `@decorator(args)` syntax:

```python
from functools import wraps

def log(func=None, *, prefix: str = "LOG"):
    if func is None:
        # Called as @log(prefix="...")
        return lambda f: log(f, prefix=prefix)
    
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"{prefix}: {func.__name__} called")
        return func(*args, **kwargs)
    return wrapper

@log
def simple(): pass

@log(prefix="INFO")
def detailed(): pass
```

## Summary

- Decorators wrap functions to extend behaviour.
- Always use `@functools.wraps` to preserve metadata.
- Patterns: timer, debug, cache, retry.
- Decorator factories take arguments and return decorators.
- Multiple decorators stack bottom-up (closest to function first).
- Class decorators modify or replace classes.
- Use `None`-default pattern for optional decorator arguments.

## Exercises

### Review Questions

1. What does `@wraps` do and why is it important?
2. How do multiple decorators compose? Which is applied first?
3. What is the difference between a decorator and a decorator factory?
4. How does a singleton class decorator work?
5. When would you use a class decorator vs inheritance?

### Application Problems

1. Write a `@memoize` decorator with a configurable `max_size` parameter that limits the cache size using an LRU eviction strategy.
2. Implement a `@validate_args` decorator that checks type annotations at runtime and raises `TypeError` if arguments don't match.
3. Write a `@deprecated(since="1.0", removal="2.0")` decorator that prints a warning (with `warnings.warn`) when the decorated function is called.

### Challenge Problem

Build a `@rate_limit(calls, period)` decorator that limits a function to `calls` invocations per `period` seconds. Use a lock or queue to handle concurrency in a thread-safe way. If the limit is exceeded, the caller should wait until a slot becomes available. Provide a test that verifies rate limiting behaviour with multiple concurrent callers.
