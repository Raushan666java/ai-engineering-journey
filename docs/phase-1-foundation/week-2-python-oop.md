# Week 2: Python OOP & Async

**Duration:** June 15-21, 2026 | **Hours:** 35

---

## Day 1 (Jun 15): Classes

### Basic Class

```python
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.created_at = datetime.now()
    
    def greet(self) -> str:
        return f"Hi, I'm {self.name}"

# Usage
user = User("Raushan", 23)
print(user.greet())
```

### PHP vs Python Class Comparison

| PHP | Python |
|-----|--------|
| `$this->name` | `self.name` |
| `__construct()` | `__init__()` |
| `public function` | `def` |
| `->` method call | `.` method call |
| `new User()` | `User()` |

---

## Day 2 (Jun 16): Inheritance

```python
class Animal:
    def __init__(self, name: str):
        self.name = name
    
    def speak(self) -> str:
        return "..."

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"

# Polymorphism
animals = [Dog("Buddy"), Cat("Kitty")]
for a in animals:
    print(a.speak())
```

---

## Day 3 (Jun 17): Modules & Packages

```python
# mypackage/__init__.py
# mypackage/module.py

from mypackage.module import MyClass
```

---

## Day 4 (Jun 18): Standard Library

```python
import os
import sys
import json
from datetime import datetime, timedelta
from pathlib import Path
```

---

## Day 5 (Jun 19): Async Python

```python
import asyncio

async def fetch_data(url: str) -> str:
    print(f"Fetching {url}...")
    await asyncio.sleep(1)  # Simulate network
    return f"Data from {url}"

async def main():
    tasks = [
        fetch_data("https://api.example.com/1"),
        fetch_data("https://api.example.com/2"),
    ]
    results = await asyncio.gather(*tasks)
    return results

results = asyncio.run(main())
```

---

## Day 6 (Jun 20): Mini Project — CLI Task Manager

```python
import json
from pathlib import Path
from datetime import datetime
from typing import List, Dict

class TaskManager:
    def __init__(self, filepath: str = "tasks.json"):
        self.filepath = filepath
        self.tasks = self._load()
    
    def add(self, title: str, priority: str = "medium") -> Dict:
        task = {
            "id": len(self.tasks) + 1,
            "title": title,
            "priority": priority,
            "done": False,
            "created_at": datetime.now().isoformat()
        }
        self.tasks.append(task)
        self._save()
        return task
    
    def list(self, show_done: bool = False) -> List[Dict]:
        if show_done:
            return self.tasks
        return [t for t in self.tasks if not t["done"]]
    
    def complete(self, task_id: int) -> bool:
        for task in self.tasks:
            if task["id"] == task_id:
                task["done"] = True
                self._save()
                return True
        return False
    
    def _load(self) -> List[Dict]:
        path = Path(self.filepath)
        if path.exists():
            return json.loads(path.read_text())
        return []
    
    def _save(self) -> None:
        Path(self.filepath).write_text(
            json.dumps(self.tasks, indent=2)
        )
```

---

## Day 7 (Jun 21): REST — Review

Complete any remaining exercises, review the week's concepts.
