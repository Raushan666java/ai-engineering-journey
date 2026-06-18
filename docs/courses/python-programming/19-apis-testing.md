# Chapter 19: APIs and Testing

## Learning Objectives

By the end of this chapter, students will be able to:
- Make HTTP requests with requests and httpx
- Build REST APIs with FastAPI
- Validate data with Pydantic models
- Write unit tests with unittest and pytest
- Use fixtures, parametrize, and mocking in pytest
- Write doctests embedded in documentation
- Measure and improve test coverage

![APIs and Testing](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/19-apis-testing.png)

## 19.1 HTTP Requests

### 19.1.1 The requests Library

```python
import requests

# GET request
response = requests.get("https://api.github.com")
print(response.status_code)     # 200
print(response.ok)               # True
print(response.headers["Content-Type"])

# JSON response
data = response.json()
print(data["current_user_url"])

# Query parameters
params = {"q": "python", "sort": "stars"}
response = requests.get("https://api.github.com/search/repositories", params=params)
print(f"Found {response.json()['total_count']} repositories")

# POST request
payload = {"title": "New Issue", "body": "This is a test"}
headers = {"Authorization": "token YOUR_TOKEN"}
response = requests.post(
    "https://api.github.com/repos/owner/repo/issues",
    json=payload,
    headers=headers,
)
print(response.status_code)

# Error handling
response = requests.get("https://api.github.com/nonexistent")
if response.status_code == 404:
    print("Not found")
else:
    response.raise_for_status()  # raises HTTPError for 4xx/5xx

# Timeouts
try:
    response = requests.get("https://example.com", timeout=5)
except requests.Timeout:
    print("Request timed out")
```

### 19.1.2 Sessions

```python
# Sessions reuse TCP connections and persist cookies
with requests.Session() as session:
    session.headers.update({"Authorization": "token TOKEN"})
    for repo in ["repo1", "repo2", "repo3"]:
        response = session.get(f"https://api.github.com/repos/owner/{repo}")
        print(response.json()["description"])
```

### 19.1.3 httpx â€” Async HTTP

```python
import httpx
import asyncio

# Synchronous
with httpx.Client() as client:
    response = client.get("https://api.github.com")
    print(response.json())

# Asynchronous
async def fetch_all():
    async with httpx.AsyncClient() as client:
        tasks = [
            client.get("https://api.github.com"),
            client.get("https://api.github.com/repos/python/cpython"),
        ]
        responses = await asyncio.gather(*tasks)
        for resp in responses:
            print(resp.status_code, resp.url)

asyncio.run(fetch_all())
```

## 19.2 Building APIs with FastAPI

```python
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Task Manager API", version="1.0.0")

# In-memory database
tasks_db: dict[int, dict] = {}
next_id = 1

# Pydantic models (covered in next section)
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool = False

class Task(TaskCreate):
    id: int

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None

# Routes
@app.get("/")
def root():
    return {"message": "Task Manager API"}

@app.get("/tasks", response_model=list[Task])
def list_tasks(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
):
    return list(tasks_db.values())[skip : skip + limit]

@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task: TaskCreate):
    global next_id
    task_id = next_id
    next_id += 1
    tasks_db[task_id] = {"id": task_id, **task.model_dump()}
    return tasks_db[task_id]

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    if task_id not in tasks_db:
        raise HTTPException(status_code=404, detail="Task not found")
    return tasks_db[task_id]

@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task: TaskUpdate):
    if task_id not in tasks_db:
        raise HTTPException(status_code=404, detail="Task not found")
    current = tasks_db[task_id]
    updates = task.model_dump(exclude_unset=True)
    current.update(updates)
    return current

@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    if task_id not in tasks_db:
        raise HTTPException(status_code=404, detail="Task not found")
    del tasks_db[task_id]
```

Save as `main.py` and run with `uvicorn main:app --reload`. Visit `http://localhost:8000/docs` for interactive documentation.

## 19.3 Pydantic Validation

Pydantic enforces type constraints on data models at runtime:

```python
from pydantic import BaseModel, Field, EmailStr, field_validator
from datetime import datetime

class User(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    age: int = Field(..., ge=0, le=150)
    created_at: datetime = Field(default_factory=datetime.now)
    tags: list[str] = []

    @field_validator("name")
    @classmethod
    def name_must_be_meaningful(cls, v: str) -> str:
        if v.strip() == "":
            raise ValueError("Name cannot be blank")
        return v.strip()

class Order(BaseModel):
    user_id: int
    items: list[str] = Field(..., min_length=1)
    total: float = Field(..., gt=0)

# Valid data
user = User(name="Alice", email="alice@example.com", age=30)
print(user.model_dump())

# Invalid data
try:
    User(name="", email="not-an-email", age=200)
except Exception as e:
    print(e)
    # 3 validation errors: name (blank), email (invalid), age (too large)
```

Pydantic integrates seamlessly with FastAPI â€” route parameters are automatically validated and documented in OpenAPI/Swagger.

## 19.4 Testing with unittest

```python
import unittest

def factorial(n: int) -> int:
    if n < 0:
        raise ValueError("Negative input")
    if n == 0:
        return 1
    return n * factorial(n - 1)

class TestFactorial(unittest.TestCase):
    def test_zero(self):
        self.assertEqual(factorial(0), 1)
    
    def test_positive(self):
        self.assertEqual(factorial(5), 120)
    
    def test_negative(self):
        with self.assertRaises(ValueError):
            factorial(-1)
    
    def test_large(self):
        self.assertEqual(factorial(10), 3628800)

# setUp and tearDown
class TestDatabase(unittest.TestCase):
    def setUp(self):
        self.data = [1, 2, 3]
    
    def tearDown(self):
        self.data.clear()
    
    def test_length(self):
        self.assertEqual(len(self.data), 3)
    
    def test_contains(self):
        self.assertIn(2, self.data)

if __name__ == "__main__":
    unittest.main()
```

## 19.5 Testing with pytest

pytest is the modern standard for Python testing:

```python
# test_math.py
import pytest

def add(a: int, b: int) -> int:
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

### 19.5.1 Assertions

pytest uses plain `assert` â€” no need for `self.assertEqual`:

```python
def test_strings():
    assert "hello".upper() == "HELLO"
    assert "hello".startswith("he")
    assert "hello" in "hello world"

def test_lists():
    result = [1, 2, 3]
    assert result == [1, 2, 3]
    assert 2 in result
    assert len(result) == 3
```

### 19.5.2 Fixtures

Fixtures provide reusable test setup:

```python
import pytest

@pytest.fixture
def sample_data():
    return {"name": "Alice", "scores": [85, 92, 78]}

@pytest.fixture
def db_connection():
    conn = {"connected": True}
    yield conn  # setup
    conn["connected"] = False  # teardown

def test_average(sample_data):
    scores = sample_data["scores"]
    assert sum(scores) / len(scores) == 85.0

def test_connection_active(db_connection):
    assert db_connection["connected"] is True
```

### 19.5.3 Fixture Scope

```python
@pytest.fixture(scope="module")
def expensive_resource():
    # Created once per module
    return {"data": [i ** 2 for i in range(1000)]}

@pytest.fixture(scope="session")
def global_config():
    # Created once per test session
    return {"base_url": "https://api.example.com"}
```

### 19.5.4 Parametrization

```python
@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
    (100, 200, 300),
])
def test_add(a, b, expected):
    assert add(a, b) == expected

@pytest.mark.parametrize("n,expected", [
    (0, 1),
    (1, 1),
    (5, 120),
    (10, 3628800),
])
def test_factorial(n, expected):
    assert factorial(n) == expected
```

### 19.5.5 Mocking

```python
from unittest.mock import Mock, patch
import pytest
import requests

def get_user_name(user_id: int) -> str:
    response = requests.get(f"https://api.example.com/users/{user_id}")
    return response.json()["name"]

@patch("requests.get")
def test_get_user_name(mock_get):
    # Configure the mock
    mock_response = Mock()
    mock_response.json.return_value = {"name": "Alice"}
    mock_get.return_value = mock_response
    
    result = get_user_name(1)
    assert result == "Alice"
    mock_get.assert_called_once_with("https://api.example.com/users/1")

# Using pytest-mock fixture
def test_external_call(mocker):
    mock_response = mocker.Mock()
    mock_response.json.return_value = {"status": "ok"}
    mocker.patch("requests.post", return_value=mock_response)
    
    # Test code here
```

### 19.5.6 Testing Exceptions

```python
def test_negative_input():
    with pytest.raises(ValueError, match="Negative"):
        factorial(-1)

def test_multiple_exceptions():
    with pytest.raises((ValueError, TypeError)):
        factorial("abc")
```

### 19.5.7 Conftest

Shared fixtures go in `conftest.py` at the test directory root:

```python
# conftest.py
import pytest
from typing import Generator

@pytest.fixture
def api_client() -> Generator:
    from fastapi.testclient import TestClient
    from main import app
    client = TestClient(app)
    yield client

# test_api.py
def test_create_task(api_client):
    response = api_client.post("/tasks", json={
        "title": "Write tests",
        "description": "Write pytest tests",
    })
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == "Write tests"
    assert data["id"] == 1

def test_list_tasks(api_client):
    response = api_client.get("/tasks")
    assert response.status_code == 200
    assert len(response.json()) > 0
```

## 19.6 Doctests

Doctests embed executable examples in docstrings:

```python
def fibonacci(n: int) -> int:
    """Return the nth Fibonacci number.
    
    Examples:
        >>> fibonacci(0)
        0
        >>> fibonacci(1)
        1
        >>> fibonacci(10)
        55
        >>> fibonacci(20)
        6765
    
    Args:
        n: Non-negative index
    
    Returns:
        The nth Fibonacci number
    
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b

# Run doctests
if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
```

Run with `python -m doctest module.py` or `pytest --doctest-modules`.

## Summary

- `requests` and `httpx` make HTTP requests; `httpx` supports async.
- FastAPI builds type-validated APIs with automatic OpenAPI docs.
- Pydantic validates data at runtime with Python type annotations.
- `unittest` is the built-in testing framework; pytest is more powerful.
- pytest fixtures provide reusable setup; parametrization tests multiple cases.
- Mocking isolates code from external dependencies.
- Doctests verify code examples in docstrings.

## Exercises

### Review Questions

1. What is the advantage of using `requests.Session` over individual requests?
2. How does FastAPI generate interactive API documentation automatically?
3. What is the difference between `scope="function"` and `scope="session"` in pytest fixtures?
4. When would you use `mocker.patch` over `unittest.mock.patch`?
5. What is the main limitation of doctests compared to pytest tests?

### Application Problems

1. Write a FastAPI application that manages a library of books. Each book has a title, author, ISBN, publication year, and status (available/checked out). Implement CRUD endpoints with proper error handling. Add a search endpoint that filters by title or author. Use Pydantic for validation.
2. Write pytest tests for the library API using TestClient. Include tests for creating books, retrieving by ID, handling 404 errors, searching, and checking out a book. Use parametrization to test multiple book creation scenarios. Mock the database layer.
3. Create a command-line weather tool using `argparse` and `requests` that fetches data from OpenWeatherMap or a similar free API. Include flags for city name, units (metric/imperial), and output format (text/json). Handle network errors and invalid city names gracefully.

### Challenge Problem

Build a comprehensive testing suite for the Task Manager API from this chapter. Include:
- Unit tests for all CRUD operations
- Parametrized tests for edge cases (empty title, negative IDs, etc.)
- Tests that verify the API's pagination with `skip` and `limit`
- Mock tests that simulate database failures
- A conftest.py with reusable fixtures
- Doctests for any utility functions
- Run coverage (`pytest --cov --cov-report=html`) and achieve at least 90% coverage
