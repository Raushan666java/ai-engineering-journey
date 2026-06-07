# Week 2 — OOP & Modules

**Dates:** June 15–21, 2026
**Daily:** 5 hours
**Goal:** Python class ka king bano + testing aajaye

---

## Day 1 — Advanced OOP: Magic Methods

### Magic Methods (Dunder Methods)

PHP mein `__toString()`, `__get()`, `__set()` ka use karte the. Python mein inhe *magic methods* ya *dunder methods* bolte hain (double underscore). Ye Python objects ko special behavior dete hain.

```python
class Book:
    def __init__(self, title: str, author: str, pages: int):
        self.title = title
        self.author = author
        self.pages = pages

    # PHP ka __toString()
    def __repr__(self) -> str:
        return f"Book('{self.title}', '{self.author}')"

    # Human-readable string
    def __str__(self) -> str:
        return f"'{self.title}' by {self.author}"

    # Equality — == ka behavior
    def __eq__(self, other) -> bool:
        if not isinstance(other, Book):
            return False
        return self.title == other.title and self.author == other.author

    # Less than — sorting ke liye
    def __lt__(self, other) -> bool:
        return self.pages < other.pages

    # Length — len() support
    def __len__(self) -> int:
        return self.pages

    # Boolean — bool() support
    def __bool__(self) -> bool:
        return self.pages > 0

b1 = Book("Python 101", "Raushan", 300)
b2 = Book("Python 101", "Raushan", 300)
b3 = Book("AI Engineering", "Raushan", 500)

print(repr(b1))           # Book('Python 101', 'Raushan')
print(str(b1))            # 'Python 101' by Raushan
print(b1 == b2)           # True (__eq__)
print(b1 == b3)           # False
print(b1 < b3)            # True (__lt__ — 300 < 500)
print(len(b1))            # 300 (__len__)

# Sorting
books = [b3, b1, b2]
sorted_books = sorted(books)  # __lt__ use karta hai
print(sorted_books)
```

### Common Magic Methods

| Method | PHP Equivalent | Use |
|--------|---------------|-----|
| `__init__` | `__construct` | Constructor |
| `__repr__` | `__toString` | Developer representation |
| `__str__` | `__toString` | User representation |
| `__eq__` | `==` operator overload | Equality check |
| `__lt__` | `<` operator overload | Sorting |
| `__len__` | `count()` | Length |
| `__getitem__` | Array access `[]` | Indexing |
| `__setitem__` | `[]` assignment | Index assignment |
| `__call__` | `__invoke` | Callable object |
| `__enter__/__exit__` | — | Context manager |

### Abstract Base Classes (ABC)

Interface banane ka tareeka. PHP mein `abstract class` / `interface` ke jaise.

```python
from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def fetch(self) -> list:
        ...

    @abstractmethod
    def save(self, data: list) -> None:
        ...

    def health_check(self) -> bool:
        # Concrete method — abstract class mein bhi likh sakte
        return True

class DatabaseSource(DataSource):
    def fetch(self) -> list:
        print("Database se data le raha hoon...")
        return [{"name": "Raushan"}, {"name": "Priya"}]

    def save(self, data: list) -> None:
        print(f"Data save kiya: {len(data)} records")

# Error: Can't instantiate abstract class
# source = DataSource()

source = DatabaseSource()
data = source.fetch()
source.save(data)
print(source.health_check())
```

### Dataclasses

PHP 8+ ka `#[Attribute]` ya Saumil ka constructor auto-setup. Python ka `@dataclass` automatically `__init__`, `__repr__`, `__eq__` generate kar deta hai.

```python
from dataclasses import dataclass, field
from typing import List
from datetime import datetime

@dataclass
class User:
    name: str
    age: int
    city: str = "Patna"                          # Default value
    skills: List[str] = field(default_factory=list)  # Empty list safely
    created_at: datetime = field(default_factory=datetime.now)

    def greet(self) -> str:
        return f"Namaste! Main {self.name} hoon, {self.age} saal ka"

u1 = User("Raushan", 24, "Delhi", ["Laravel", "FastAPI"])
u2 = User("Priya", 22)  # Default city = Patna, skills = []

print(u1)         # Auto __repr__ → User(name='Raushan', age=24, ...)
print(u1 == u2)   # False — auto __eq__ compares all fields
```

### Dataclass Features

```python
from dataclasses import dataclass, field, asdict, astuple

@dataclass(order=True)  # __lt__, __le__, __gt__, __ge__ auto
class Task:
    priority: int = field(compare=True)
    title: str = field(compare=False)
    done: bool = False

    def __post_init__(self):
        # Init ke baad chalega — validation ke liye
        if self.priority < 1 or self.priority > 5:
            raise ValueError("Priority 1–5 hona chahiye")

    def mark_done(self):
        self.done = True

t1 = Task(1, "Important kaam")
t2 = Task(3, "Normal kaam")
print(t1 < t2)         # True — priority compare hui

# Dict mein convert
print(asdict(t1))
# {'priority': 1, 'title': 'Important kaam', 'done': False}
```

### Day 1 Exercise

```python
# @dataclass banao: Student
# Fields: name, roll_number, marks: List[float]
# Property: percentage (avg of marks)
# Method: grade() → "A" (>90), "B" (>75), "C" (>=60), "F"
# __lt__ compare kare percentage se
# 3 students banao, sort karo descending

@dataclass
class Student:
    name: str
    roll_number: int
    marks: List[float]

    @property
    def percentage(self) -> float:
        return sum(self.marks) / len(self.marks)

    def grade(self) -> str:
        p = self.percentage
        if p >= 90: return "A"
        if p >= 75: return "B"
        if p >= 60: return "C"
        return "F"

    def __lt__(self, other) -> bool:
        return self.percentage < other.percentage
```

---

## Day 2 — Modules & Packages + `if __name__`

### Modules (Ek file = ek module)

```python
# helpers.py — rakh lo
def greet(name: str) -> str:
    return f"Hello, {name}!"

PI = 3.14159

class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

# main.py — import kar lo
import helpers

print(helpers.greet("Raushan"))         # Hello, Raushan!
print(helpers.PI)                       # 3.14159
calc = helpers.Calculator()
print(calc.add(2, 3))                   # 5
```

### Import Variations

```python
# Specific import
from helpers import greet, PI
print(greet("Raushan"))

# Alias
import helpers as hp
print(hp.PI)

# Sab kuch (careful — namespace pollute hota hai)
from helpers import *
```

### Packages (Folder with `__init__.py`)

```
project/
├── main.py
└── utils/
    ├── __init__.py        # Empty or code
    ├── file_ops.py
    └── string_ops.py
```

```python
# utils/file_ops.py
def read_file(path: str) -> str:
    with open(path, "r") as f:
        return f.read()

# utils/string_ops.py
def reverse(text: str) -> str:
    return text[::-1]

# utils/__init__.py
from .file_ops import read_file
from .string_ops import reverse

# main.py
from utils import read_file, reverse
```

### `if __name__ == "__main__"`

Python ka guard pattern. Jab file directly run ho tab code chale, import karein to nahi.

```python
# calculator.py
def add(a, b): return a + b
def sub(a, b): return a - b

# Yeh sir tab chalega jab yeh file direct run ho
if __name__ == "__main__":
    print("Testing calculator...")
    print(add(5, 3))
    print(sub(10, 4))

# Koi aur file import karega to yeh block nahi chalega
# from calculator import add
```

PHP analogy: `if (realpath($0) === __FILE__)` wali pattern.

### Relative Imports

```python
# Inside package
from . import module           # Same package se
from .subpackage import thing  # Subpackage se
from .. import parent_module   # Parent package se

# Absolute import (recommended)
from project.utils.helpers import format_date
```

### Day 2 Exercise

```
Banao package structure:
task_cli/
├── __init__.py
├── cli.py       # argparse based CLI
├── storage.py   # JSON file operations
└── models.py    # Task dataclass
main.py          # Entry point
```

---

## Day 3 — Standard Library Deep Dive

### `datetime`

```python
from datetime import datetime, date, timedelta

now = datetime.now()
print(now.year, now.month, now.day, now.hour)

# Formatting (PHP ka date())
print(now.strftime("%Y-%m-%d %H:%M:%S"))     # 2026-06-15 14:30:00
print(now.strftime("%A, %d %B %Y"))           # Monday, 15 June 2026

# Parsing (PHP ka strtotime)
date_str = "2026-06-15 14:30:00"
parsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")

# Date arithmetic
tomorrow = date.today() + timedelta(days=1)
last_week = datetime.now() - timedelta(weeks=1)

# Difference
diff = datetime(2026, 7, 7) - datetime.now()
print(f"Phase 1 khatam hone mein {diff.days} din bache")

# ISO format (JSON-friendly)
print(now.isoformat())  # 2026-06-15T14:30:00.000000
```

### `collections`

```python
from collections import Counter, defaultdict, deque

# Counter — items count karo
skills = ["Python", "Laravel", "Python", "FastAPI", "Python", "React"]
count = Counter(skills)
print(count)                     # Counter({'Python': 3, 'Laravel': 1, ...})
print(count.most_common(2))      # [('Python', 3), ('Laravel', 1)]

# defaultdict — missing key pe exception nahi, default value milegi
user_skills = defaultdict(list)
user_skills["Raushan"].append("Laravel")
user_skills["Raushan"].append("FastAPI")
user_skills["Priya"].append("React")
print(dict(user_skills))
# {'Raushan': ['Laravel', 'FastAPI'], 'Priya': ['React']}

# PHP mein aisa:
# $user_skills = [];
# $user_skills['Raushan'][] = 'Laravel';  // works
# $user_skills['NewUser'][] = 'Skill';    // Warning!
# defaultdict automatically empty list create karta hai

# deque — fast append/pop dono ends se
from collections import deque
queue = deque(["Raushan", "Priya", "Raj"])
queue.append("Amit")      # right
queue.appendleft("Neha")  # left
print(queue.popleft())    # Neha (fast!)
```

### `itertools` — Loop ka Power Tool

```python
import itertools

# count — infinite counter
for i in itertools.count(1):
    if i > 5: break
    print(i)  # 1, 2, 3, 4, 5

# cycle — infinite loop over sequence
colors = itertools.cycle(["Red", "Green", "Blue"])
for _ in range(6):
    print(next(colors))  # Red, Green, Blue, Red, Green, Blue

# chain — multiple iterables merge
combined = itertools.chain([1, 2, 3], ["a", "b"])
print(list(combined))  # [1, 2, 3, 'a', 'b']

# product — Cartesian product (nested loops)
for combo in itertools.product([1, 2], ["a", "b"]):
    print(combo)  # (1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')

# combinations — unique pairs
for combo in itertools.combinations(["a", "b", "c"], 2):
    print(combo)  # ('a', 'b'), ('a', 'c'), ('b', 'c')

# groupby — PHP ka array_group_by
data = [{"city": "Patna", "name": "Raushan"},
        {"city": "Delhi", "name": "Priya"},
        {"city": "Patna", "name": "Raj"}]
data.sort(key=lambda x: x["city"])
for city, group in itertools.groupby(data, key=lambda x: x["city"]):
    print(f"{city}: {list(group)}")
```

### `functools` — Function Tools

```python
from functools import lru_cache, partial, reduce

# lru_cache — memoization (cache results)
@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# First call slow, subsequent calls instant
print(fibonacci(30))

# partial — PHP ka partial function application
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)
print(square(5))  # 25
print(cube(3))    # 27

# reduce — PHP ka array_reduce
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120
```

### Day 3 Exercise

```python
# Banao: Log Analyzer using collections + datetime
# Example log:
logs = [
    "2026-06-15 10:30:00 | ERROR | Database connection failed",
    "2026-06-15 10:31:00 | INFO | User logged in",
    "2026-06-15 10:32:00 | WARN | High memory usage",
    "2026-06-15 10:33:00 | ERROR | Disk space low",
    "2026-06-15 10:34:00 | ERROR | Database connection failed",
]

# 1. Count log levels (Counter)
# 2. Group by date (defaultdict of list)
# 3. Find top 3 ERROR messages
# 4. Parse timestamps to datetime objects
```

---

## Day 4 — Advanced Type Hints

### Basic Types

```python
from typing import Optional, Union, List, Dict, Tuple, Set, Any

# PHP ka ?string = Optional[str]
def find_user(user_id: int) -> Optional[dict]:
    users = {1: {"name": "Raushan"}}
    return users.get(user_id)  # None bhi return ho sakta hai

# Union — multiple types allowed
def parse_input(value: Union[str, int, float]) -> float:
    if isinstance(value, str):
        return float(value)
    return float(value)

# Collections
def process_users(users: List[dict]) -> Dict[str, int]:
    return {u["name"]: u.get("age", 0) for u in users}

# Nested types
def update_config(config: Dict[str, Union[str, int, bool]]) -> None:
    ...

# Tuple with specific types
def get_location() -> Tuple[float, float, str]:
    return (28.6139, 77.2090, "Delhi")
```

### TypeVar & Generics

```python
from typing import TypeVar, Generic, Protocol

T = TypeVar("T")        # Generic type placeholder

# Generic function
def first(items: list[T]) -> T:
    return items[0]

print(first([1, 2, 3]))           # int
print(first(["a", "b"]))          # str
print(first([{"name": "Raushan"}])) # dict

# Generic class — PHP ka generics
class Stack(Generic[T]):
    def __init__(self):
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

    def is_empty(self) -> bool:
        return len(self._items) == 0

num_stack = Stack[int]()
num_stack.push(1)
num_stack.push(2)
num = num_stack.pop()  # type is int
```

### Protocol — Structural Subtyping (Duck Typing Type Hints)

```python
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> str: ...

class Circle:
    def draw(self) -> str:
        return "⚪ Drawing circle"

class Square:
    def draw(self) -> str:
        return "⬜ Drawing square"

def render(shape: Drawable) -> None:
    print(shape.draw())

# Ye dono kaam karega bina inheritance ke
render(Circle())  # ⚪ Drawing circle
render(Square())  # ⬜ Drawing square
```

### Type Aliases

```python
from typing import List, Dict

UserDict = Dict[str, Union[str, int, List[str]]]
UserList = List[UserDict]

def save_users(users: UserList) -> None:
    ...

users: UserList = [
    {"name": "Raushan", "age": 24, "skills": ["Python", "Laravel"]}
]
```

### Day 4 Exercise

```python
# Banao: Generic Repository pattern
T = TypeVar("T")

class Repository(Generic[T]):
    def get(self, pk: int) -> Optional[T]: ...
    def list(self) -> List[T]: ...
    def create(self, item: T) -> T: ...
    def update(self, pk: int, item: T) -> T: ...
    def delete(self, pk: int) -> bool: ...

# Phir UserRepository(Repository[User]), TaskRepository(Repository[Task])
```

---

## Day 5 — Testing with pytest

### Setup

```bash
pip install pytest pytest-cov
```

### Basic Tests

```python
# test_calc.py
from calc import add, divide

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_divide():
    assert divide(10, 2) == 5.0
    assert divide(0, 5) == 0

def test_divide_by_zero():
    assert divide(5, 0) == float("inf")
```

```bash
# Chalane ka tarika
pytest                           # All tests
pytest test_calc.py              # Specific file
pytest -v                        # Verbose
pytest -k "divide"               # Filter by name
pytest --cov=.                   # Coverage report
```

### Fixtures

PHP/Laravel mein `setUp()` method tests ke liye common setup karte the. Pytest ka fixture wahi kaam karta hai, lekin zyada flexible.

```python
import pytest

@pytest.fixture
def sample_user():
    """Har test ke liye ek fresh user banao"""
    return {"name": "Raushan", "age": 24, "city": "Patna"}

@pytest.fixture
def user_list(sample_user):
    return [sample_user, {"name": "Priya", "age": 22, "city": "Delhi"}]

def test_user_name(sample_user):
    assert sample_user["name"] == "Raushan"

def test_user_count(user_list):
    assert len(user_list) == 2

# Fixture scope: function (default), class, module, session
@pytest.fixture(scope="module")
def db_connection():
    # Setup — ek baar pure module ke liye
    conn = create_connection()
    yield conn
    # Teardown — module khatam hone pe
    conn.close()
```

### Parametrize — Multiple Test Cases

```python
import pytest

@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0),
    (100, 200, 300),
])
def test_add(a, b, expected):
    from calc import add
    assert add(a, b) == expected
```

### Testing Exceptions & Edge Cases

```python
import pytest

def test_invalid_age():
    with pytest.raises(ValueError, match="Age cannot be negative"):
        create_user("Raushan", -1)

def test_empty_list():
    assert process_users([]) == []

def test_none_input():
    with pytest.raises(TypeError):
        process_users(None)
```

### Mocking

```python
from unittest.mock import Mock, patch

def test_fetch_users():
    with patch("requests.get") as mock_get:
        mock_get.return_value.json.return_value = [
            {"id": 1, "name": "Raushan"}
        ]
        result = get_users()
        assert result[0]["name"] == "Raushan"
```

### Conftest — Shared Fixtures

```python
# conftest.py (root test directory mein)
# Yeh fixtures automatically sab test files mein available hote hain
import pytest

@pytest.fixture
def api_client():
    return TestClient(app)

@pytest.fixture
def db_session():
    engine = create_engine("sqlite:///:memory:")
    Base.metadata.create_all(engine)
    session = Session(engine)
    yield session
    session.close()
```

### Day 5 Exercise

```python
# Test cases likho for week 1's Task Manager
# 1. test_add_task
# 2. test_list_tasks
# 3. test_complete_task
# 4. test_delete_task
# 5. test_persistence (file save/load)
```

---

## Day 6 — pytest Project: Task Manager Tests

### Test Structure

```
task_cli/
├── task_manager.py
└── tests/
    ├── conftest.py
    ├── test_tasks.py
    └── test_storage.py
```

### conftest.py

```python
import pytest
import json
import tempfile
import os

@pytest.fixture
def temp_db():
    """Temporary JSON file for testing"""
    with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
        f.write("[]")
        path = f.name
    yield path
    os.unlink(path)

@pytest.fixture
def sample_tasks():
    return [
        {"id": 1, "title": "Task 1", "priority": "high", "done": False},
        {"id": 2, "title": "Task 2", "priority": "low", "done": True},
    ]

@pytest.fixture
def manager(temp_db):
    from task_cli.task_manager import TaskManager
    return TaskManager(temp_db)
```

### test_tasks.py

```python
import pytest
from task_cli.task_manager import TaskManager

class TestTaskManager:
    def test_add_task(self, manager):
        task = manager.add("Learn pytest", "high")
        assert task["title"] == "Learn pytest"
        assert task["priority"] == "high"
        assert task["done"] is False
        assert task["id"] == 1

    def test_list_all(self, manager):
        manager.add("Task 1")
        manager.add("Task 2")
        tasks = manager.list()
        assert len(tasks) == 2

    def test_list_pending(self, manager):
        t1 = manager.add("Task 1")
        manager.add("Task 2")
        manager.done(t1["id"])
        pending = manager.list(pending_only=True)
        assert len(pending) == 1
        assert pending[0]["title"] == "Task 2"

    def test_complete_task(self, manager):
        task = manager.add("Complete this")
        result = manager.done(task["id"])
        assert result["done"] is True

    def test_complete_nonexistent(self, manager):
        with pytest.raises(ValueError, match="Task not found"):
            manager.done(999)

    def test_delete_task(self, manager):
        task = manager.add("Delete me")
        assert manager.delete(task["id"]) is True
        assert len(manager.list()) == 0

    @pytest.mark.parametrize("priority", ["high", "medium", "low"])
    def test_task_priority(self, manager, priority):
        task = manager.add(f"Task with {priority}", priority)
        assert task["priority"] == priority

    def test_persistence(self, temp_db):
        """Data JSON file mein save hona chahiye"""
        mgr1 = TaskManager(temp_db)
        mgr1.add("Persistent task")

        mgr2 = TaskManager(temp_db)
        tasks = mgr2.list()
        assert len(tasks) == 1
        assert tasks[0]["title"] == "Persistent task"
```

### Running Tests

```bash
pytest tests/ -v
pytest tests/ --cov=task_cli --cov-report=html

# Output:
# test_tasks.py::TestTaskManager::test_add_task PASSED
# test_tasks.py::TestTaskManager::test_list_all PASSED
# test_tasks.py::TestTaskManager::test_complete_task PASSED
# ...
# coverage report → htmlcov/ folder mein
```

### Day 6 Exercise

```python
# Additional test cases likho:
# 1. test_invalid_priority (jo allowed nahi hai)
# 2. test_empty_title
# 3. test_mark_already_done_task
# 4. test_list_with_filter_combinations
# 5. test_corrupted_json (malformed file handle kare)
```

---

## Day 7 — Week 2 Project: Refactored Task Manager with Tests

### Project Structure

```
task_manager_pro/
├── pyproject.toml
├── README.md
├── src/
│   └── task_cli/
│       ├── __init__.py
│       ├── __main__.py          # python -m task_cli
│       ├── models.py            # Task dataclass
│       ├── storage.py           # JSON storage
│       ├── cli.py               # argparse CLI
│       └── app.py               # Main app logic
└── tests/
    ├── conftest.py
    ├── test_models.py
    ├── test_storage.py
    └── test_cli.py
```

### models.py

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional

@dataclass
class Task:
    title: str
    priority: str = "medium"
    done: bool = False
    created_at: str = field(default_factory=lambda: datetime.now().isoformat())
    id: Optional[int] = None
```

### storage.py

```python
import json
import os
from typing import List
from .models import Task

class Storage:
    def __init__(self, path: str = "tasks.json"):
        self.path = path

    def load(self) -> List[Task]:
        if not os.path.exists(self.path):
            return []
        with open(self.path, "r") as f:
            data = json.load(f)
        return [Task(**t) for t in data]

    def save(self, tasks: List[Task]) -> None:
        data = [{"id": t.id, "title": t.title, "priority": t.priority,
                 "done": t.done, "created_at": t.created_at} for t in tasks]
        with open(self.path, "w") as f:
            json.dump(data, f, indent=2)
```

### app.py

```python
from typing import List, Optional
from .models import Task
from .storage import Storage

class TaskManager:
    def __init__(self, storage: Optional[Storage] = None):
        self.storage = storage or Storage()

    def add(self, title: str, priority: str = "medium") -> Task:
        if priority not in ("high", "medium", "low"):
            raise ValueError("Priority must be high, medium, or low")
        tasks = self.storage.load()
        task = Task(
            id=(tasks[-1].id + 1 if tasks else 1),
            title=title,
            priority=priority,
        )
        tasks.append(task)
        self.storage.save(tasks)
        return task

    def list(self, pending_only: bool = False) -> List[Task]:
        tasks = self.storage.load()
        if pending_only:
            tasks = [t for t in tasks if not t.done]
        return tasks

    def done(self, task_id: int) -> Task:
        tasks = self.storage.load()
        for task in tasks:
            if task.id == task_id:
                task.done = True
                self.storage.save(tasks)
                return task
        raise ValueError(f"Task {task_id} not found")

    def delete(self, task_id: int) -> bool:
        tasks = self.storage.load()
        filtered = [t for t in tasks if t.id != task_id]
        if len(filtered) == len(tasks):
            return False
        self.storage.save(filtered)
        return True
```

### CLI (__main__.py)

```python
import argparse
from .app import TaskManager

def main():
    parser = argparse.ArgumentParser(description="Task Manager CLI")
    sub = parser.add_subparsers(dest="command")

    add = sub.add_parser("add")
    add.add_argument("title")
    add.add_argument("--priority", default="medium", choices=["high", "medium", "low"])

    list_ = sub.add_parser("list")
    list_.add_argument("--pending", action="store_true")

    done = sub.add_parser("done")
    done.add_argument("id", type=int)

    delete = sub.add_parser("delete")
    delete.add_argument("id", type=int)

    args = parser.parse_args()
    mgr = TaskManager()

    if args.command == "add":
        task = mgr.add(args.title, args.priority)
        print(f"✅ Task added: {task.title} [{task.priority}]")
    elif args.command == "list":
        tasks = mgr.list(pending_only=args.pending)
        for t in tasks:
            status = "✅" if t.done else "⏳"
            print(f"{status} [{t.id}] {t.title} ({t.priority})")
    elif args.command == "done":
        mgr.done(args.id)
        print(f"✅ Task {args.id} completed!")
    elif args.command == "delete":
        mgr.delete(args.id)
        print(f"🗑️ Task {args.id} deleted")

if __name__ == "__main__":
    main()
```

### pyproject.toml

```toml
[build-system]
requires = ["setuptools>=64", "wheel"]
build-backend = "setuptools.backends._legacy:_Backend"

[project]
name = "task-cli"
version = "1.0.0"
description = "A CLI task manager for learning Python"
requires-python = ">=3.11"
dependencies = []

[project.scripts]
task = "task_cli.__main__:main"

[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py"]
```

```bash
# Install locally
pip install -e .

# Use as CLI command
task add "Learn Python OOP"
task list
task done 1

# Run tests
pytest tests/ -v --cov=src
```

---

## Week 2 Checklist

- [ ] Magic methods (`__repr__`, `__eq__`, `__lt__`) samajh aaye
- [ ] ABC and abstract methods use kar liye
- [ ] `@dataclass` se classes bana li
- [ ] Modules and packages ka structure samajh aaya
- [ ] `if __name__ == "__main__"` ka use pata hai
- [ ] `datetime`, `collections`, `itertools`, `functools` use kar liye
- [ ] Advanced type hints likh sakta hoon (Optional, Union, TypeVar, Protocol)
- [ ] pytest fixtures and parametrize use kar liye
- [ ] Mocking ka concept samajh aaya
- [ ] Task Manager tests likh diye
- [ ] `pyproject.toml` banaya, `pip install -e .` kiya
- [ ] GitHub pe push kiya
