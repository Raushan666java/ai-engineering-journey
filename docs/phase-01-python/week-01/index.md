# Week 1 — Python Syntax & Basics

**Dates:** June 8–14, 2026
**Daily:** 5 hours
**Goal:** PHP developer → Python comfortable

---

## Day 1 — Setup + Variables + Functions

### Setup

```bash
# Install check
python3 --version

# Virtual environment
python3 -m venv venv
source venv/bin/activate

# First file
touch day01.py
```

### Variables — PHP se compare karo

```python
# PHP mein tha:
# $name = "Raushan";
# $age = 24;
# $is_developer = true;

# Python mein:
name = "Raushan"
age = 24
is_developer = True        # Capital T/F — important!
salary = 50000.0
nothing = None             # PHP ka null

# Type check
print(type(name))          # <class 'str'>
print(type(age))           # <class 'int'>
print(type(is_developer))  # <class 'bool'>

# f-strings (PHP ka sprintf/"{$var}")
city = "Patna"
print(f"Main {name} hoon, {city} se")
# Output: Main Raushan hoon, Patna se

# Multiple assignment
x = y = z = 0
a, b, c = 1, 2, 3
```

### Functions

```python
# PHP mein tha:
# function greet($name, $greeting = "Hello") {
#     return "$greeting, $name!";
# }

# Python mein:
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Raushan"))           # Hello, Raushan!
print(greet("Raushan", "Namaste")) # Namaste, Raushan!

# Type hints (recommended always)
def add(a: int, b: int) -> int:
    return a + b

# *args (variable arguments)
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs (keyword arguments)
def user_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

user_info(name="Raushan", city="Patna", role="Developer")
```

### Loops

```python
# For loop
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):       # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control
for i in range(10):
    if i == 3:
        continue    # skip
    if i == 7:
        break       # stop
    print(i)
```

### Day 1 Exercise

```python
# Banao: FizzBuzz
# 1 to 50 print karo
# 3 ka multiple → "Fizz"
# 5 ka multiple → "Buzz"
# dono → "FizzBuzz"
# otherwise → number

for i in range(1, 51):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

---

## Day 2 — Lists, Dicts, Tuples, Sets

### Lists (PHP ka indexed array)

```python
# PHP: $skills = ["PHP", "Laravel", "Vue"];
skills = ["PHP", "Laravel", "Vue", "Python"]

# Access
print(skills[0])        # PHP
print(skills[-1])       # Python (last element)
print(skills[1:3])      # ['Laravel', 'Vue'] (slice)

# Methods
skills.append("FastAPI")           # end mein add
skills.insert(0, "HTML")           # index pe add
skills.remove("HTML")              # value se remove
popped = skills.pop()              # last remove + return
skills.sort()                      # alphabetical sort

# Length
print(len(skills))

# Check existence
if "Laravel" in skills:
    print("Laravel hai list mein")

# Loop
for skill in skills:
    print(skill)

# Enumerate (index bhi chahiye)
for index, skill in enumerate(skills):
    print(f"{index}: {skill}")

# List comprehension (powerful!)
# PHP: array_map, array_filter
upper_skills = [s.upper() for s in skills]
python_skills = [s for s in skills if "a" in s.lower()]
```

### Dictionaries (PHP ka associative array)

```python
# PHP: $user = ['name' => 'Raushan', 'age' => 24];
user = {
    "name": "Raushan",
    "age": 24,
    "city": "Patna",
    "skills": ["Laravel", "Python"]
}

# Access
print(user["name"])                    # Raushan
print(user.get("email", "N/A"))        # N/A (safe access)

# Add/Update
user["email"] = "raushan@example.com"
user["age"] = 25

# Delete
del user["city"]

# Loop
for key, value in user.items():
    print(f"{key}: {value}")

# Keys and values
print(user.keys())
print(user.values())

# Dict comprehension
squared = {n: n**2 for n in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### Tuples (immutable list)

```python
# Immutable — change nahi ho sakta
coordinates = (28.6139, 77.2090)  # Delhi lat/lng
lat, lng = coordinates             # unpacking

# Use case: function se multiple values return
def get_user():
    return "Raushan", 24, "Patna"

name, age, city = get_user()
```

### Sets (unique values)

```python
tags = {"python", "ai", "python", "ml", "ai"}
print(tags)  # {'python', 'ai', 'ml'} — duplicates remove

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # union: {1, 2, 3, 4, 5, 6}
print(a & b)   # intersection: {3, 4}
print(a - b)   # difference: {1, 2}
```

### Day 2 Exercise

```python
# Banao: Student grade calculator
students = [
    {"name": "Amit", "marks": [85, 90, 78, 92, 88]},
    {"name": "Priya", "marks": [70, 65, 80, 75, 72]},
    {"name": "Raj", "marks": [95, 98, 92, 96, 99]},
]

for student in students:
    avg = sum(student["marks"]) / len(student["marks"])
    grade = "A" if avg >= 90 else "B" if avg >= 75 else "C"
    print(f"{student['name']}: {avg:.1f} — Grade {grade}")
```

---

## Day 3 — OOP (Classes)

### Basic Class

```python
class User:
    user_count = 0

    def __init__(self, name: str, age: int, city: str):
        self.name = name
        self.age = age
        self.city = city
        User.user_count += 1

    def greet(self) -> str:
        return f"Hello, {self.name} from {self.city}!"

    def __str__(self) -> str:
        return f"User({self.name}, {self.age})"

raushan = User("Raushan", 24, "Patna")
print(raushan.greet())       # Hello, Raushan from Patna!
print(User.user_count)       # 1
```

### Inheritance

```python
class Developer(User):
    def __init__(self, name: str, age: int, city: str, stack: str):
        super().__init__(name, age, city)
        self.stack = stack

    def introduce(self) -> str:
        return f"{self.greet()} I work with {self.stack}."

    def greet(self) -> str:
        return f"Hey! I'm {self.name}, a developer!"

raushan = Developer("Raushan", 24, "Patna", "Laravel + Python")
print(raushan.introduce())
```

### Properties & Static Methods

```python
class Invoice:
    def __init__(self, amount: float, tax_rate: float = 0.18):
        self._amount = amount
        self.tax_rate = tax_rate

    @property
    def amount(self) -> float:
        return self._amount

    @amount.setter
    def amount(self, value: float):
        if value < 0:
            raise ValueError("Amount cannot be negative")
        self._amount = value

    @property
    def total(self) -> float:
        return self._amount * (1 + self.tax_rate)

    @staticmethod
    def generate_id() -> str:
        import uuid
        return f"INV-{str(uuid.uuid4())[:8].upper()}"

inv = Invoice(10000)
print(inv.total)              # 11800.0
print(Invoice.generate_id())  # INV-A1B2C3D4
```

---

## Day 4 — Async Python

```python
import asyncio

# Normal function
def get_user(user_id: int):
    import time
    time.sleep(2)
    return {"id": user_id, "name": "Raushan"}

# Async function
async def get_user_async(user_id: int):
    await asyncio.sleep(2)
    return {"id": user_id, "name": "Raushan"}

# Sequential (slow)
async def sequential():
    user1 = await get_user_async(1)
    user2 = await get_user_async(2)
    # Total: 4 seconds

# Parallel (fast)
async def parallel():
    user1, user2 = await asyncio.gather(
        get_user_async(1),
        get_user_async(2),
    )
    # Total: 2 seconds

asyncio.run(parallel())
```

---

## Day 5 — Error Handling + File I/O

### Error Handling

```python
def divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Zero se divide nahi kar sakte")
        return 0
    except TypeError as e:
        print(f"Type error: {e}")
        return 0
    except Exception as e:
        print(f"Unknown error: {e}")
        raise
    else:
        print("Success!")
        return result
    finally:
        print("Har baar chalega")
```

### File I/O

```python
# Write file
with open("data.txt", "w") as f:
    f.write("Hello, Raushan!\n")

# Read file
with open("data.txt", "r") as f:
    content = f.read()

# JSON
import json
data = {"name": "Raushan", "skills": ["Python", "Laravel"]}

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json", "r") as f:
    loaded = json.load(f)
```

---

## Day 6 — Virtual Env + pip + dotenv

```bash
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn python-dotenv requests
pip freeze > requirements.txt
pip install -r requirements.txt
```

```python
from dotenv import load_dotenv
import os

load_dotenv()
database_url = os.getenv("DATABASE_URL")
api_key = os.getenv("OPENAI_API_KEY")
```

---

## Day 7 — Week 1 Project: CLI Task Manager

```python
# task_manager.py
import json, os
from datetime import datetime

TASKS_FILE = "tasks.json"

def load_tasks() -> list:
    if not os.path.exists(TASKS_FILE):
        return []
    with open(TASKS_FILE, "r") as f:
        return json.load(f)

def save_tasks(tasks: list) -> None:
    with open(TASKS_FILE, "w") as f:
        json.dump(tasks, f, indent=2)

def add_task(title: str, priority: str = "medium") -> dict:
    tasks = load_tasks()
    task = {
        "id": len(tasks) + 1,
        "title": title,
        "priority": priority,
        "done": False,
        "created_at": datetime.now().isoformat()
    }
    tasks.append(task)
    save_tasks(tasks)
    print(f"✅ Task added: {title}")
    return task

def list_tasks(filter_done: bool = False) -> None:
    tasks = load_tasks()
    if filter_done:
        tasks = [t for t in tasks if not t["done"]]
    if not tasks:
        print("Koi task nahi hai!")
        return
    for task in tasks:
        status = "✅" if task["done"] else "⏳"
        icons = {"high": "🔴", "medium": "🟡", "low": "🟢"}
        print(f"{status} [{task['id']}] {icons.get(task['priority'], '⚪')} {task['title']}")

def complete_task(task_id: int) -> None:
    tasks = load_tasks()
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = True
            save_tasks(tasks)
            print(f"✅ Task {task_id} completed!")
            return
    print(f"Task {task_id} nahi mila")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python task_manager.py [add|list|done|delete]")
        sys.exit(1)
    cmd = sys.argv[1]
    if cmd == "add":
        add_task(" ".join(sys.argv[2:]) or "Untitled")
    elif cmd == "list":
        list_tasks(filter_done="--pending" in sys.argv)
    elif cmd == "done":
        complete_task(int(sys.argv[2]))
    elif cmd == "delete":
        tasks = load_tasks()
        tasks = [t for t in tasks if t["id"] != int(sys.argv[2])]
        save_tasks(tasks)
        print(f"Deleted task {sys.argv[2]}")
```

```bash
# Usage
python task_manager.py add "Python week 1 complete karo"
python task_manager.py list
python task_manager.py done 1
```

---

## Week 1 Checklist

- [ ] Python install + VS Code setup
- [ ] Variables, loops, functions comfortable
- [ ] List, Dict, Tuple, Set pata hai
- [ ] Classes + inheritance likh sakta hoon
- [ ] Async/await concept samajh aaya
- [ ] Error handling likh sakta hoon
- [ ] File I/O (JSON, CSV) kar sakta hoon
- [ ] Virtual environment use kar raha hoon
- [ ] **CLI Task Manager working hai**
- [ ] GitHub pe push kiya
