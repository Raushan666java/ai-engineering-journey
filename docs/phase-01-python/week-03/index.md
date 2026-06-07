# Week 3 — FastAPI

**Dates:** June 22–28, 2026
**Daily:** 5 hours
**Goal:** Production-ready FastAPI API banao

---

## Day 1 — FastAPI Setup & First Routes

### What is FastAPI?

FastAPI = PHP ka Laravel ya Slim Framework. Modern Python web framework jo:
- Automatic docs generate karta hai (Swagger UI)
- Type hints use karta hai validation aur serialization ke liye
- Async support built-in
- Performance mein Node.js aur Go jaisa fast

### Setup

```bash
pip install fastapi uvicorn pydantic
```

### First API — Hello World

```python
# main.py
from fastapi import FastAPI

app = FastAPI(
    title="AI Engineering Journey",
    version="1.0.0",
    description="Raushan ka FastAPI learning project"
)

@app.get("/")
def root():
    return {"message": "Hello, Raushan! AI Engineer ban raha hoon 🚀"}

@app.get("/health")
def health():
    return {"status": "ok", "version": "1.0.0"}
```

```bash
# Run karo
uvicorn main:app --reload

# Open browser:
# http://127.0.0.1:8000          → JSON response
# http://127.0.0.1:8000/docs     → Swagger UI (auto-generated!)
# http://127.0.0.1:8000/redoc    → ReDoc UI
```

### Path Parameters

```python
@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id, "name": f"User {user_id}"}

@app.get("/users/{user_id}/posts/{post_id}")
def get_user_post(user_id: int, post_id: int):
    return {"user_id": user_id, "post_id": post_id}
```

PHP mein `Route::get('/users/{id}', ...)` jaisa hi hai.

### Query Parameters

```python
from typing import Optional

@app.get("/search")
def search_items(
    q: str,                           # Required query parameter
    page: int = 1,                    # Optional with default
    limit: int = 10,                  # Optional with default
    sort_by: Optional[str] = None,    # Fully optional
):
    return {
        "query": q,
        "page": page,
        "limit": limit,
        "sort_by": sort_by,
        "results": []
    }

# URL: /search?q=python&page=2&limit=20&sort_by=name
```

### Request Body with Pydantic

PHP mein `Illuminate\Http\Request` + validation rules. FastAPI mein Pydantic models.

```python
from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: str
    age: int
    city: str = "Patna"               # Default value

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    age: int
    city: str
    created_at: datetime

@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate):
    # Pydantic automatically validates `user`
    # Agar `age` string diya to 422 error dega
    return {
        "id": 1,
        "name": user.name,
        "email": user.email,
        "age": user.age,
        "city": user.city,
        "created_at": datetime.now()
    }
```

### Day 1 Exercise

```python
# Banao: Calculator API
# GET /add?a=5&b=3 → {"result": 8}
# GET /subtract?a=10&b=4 → {"result": 6}
# POST /multiply → body: {"a": 5, "b": 3}
# POST /divide → body: {"a": 10, "b": 2} (zero se divide bhi handle karo)
```

---

## Day 2 — CRUD API with In-Memory List

### Basic CRUD Operations

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# In-memory "database"
tasks_db = []
task_id_counter = 1

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    priority: str = "medium"

class Task(TaskCreate):
    id: int
    done: bool = False

    model_config = {"from_attributes": True}

@app.get("/tasks", response_model=List[Task])
def list_tasks(done: Optional[bool] = None):
    if done is None:
        return tasks_db
    return [t for t in tasks_db if t["done"] == done]

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in tasks_db:
        if task["id"] == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task nahi mila")

@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task: TaskCreate):
    global task_id_counter
    new_task = task.model_dump()
    new_task["id"] = task_id_counter
    new_task["done"] = False
    tasks_db.append(new_task)
    task_id_counter += 1
    return new_task

@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task: TaskCreate):
    for i, t in enumerate(tasks_db):
        if t["id"] == task_id:
            updated = task.model_dump()
            updated["id"] = task_id
            updated["done"] = t["done"]
            tasks_db[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Task nahi mila")

@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    for i, t in enumerate(tasks_db):
        if t["id"] == task_id:
            tasks_db.pop(i)
            return
    raise HTTPException(status_code=404, detail="Task nahi mila")

@app.patch("/tasks/{task_id}/done", response_model=Task)
def mark_done(task_id: int):
    for t in tasks_db:
        if t["id"] == task_id:
            t["done"] = True
            return t
    raise HTTPException(status_code=404, detail="Task nahi mila")
```

### Testing with httpx

```bash
pip install httpx pytest
```

```python
# test_main.py
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_task():
    response = client.post("/tasks", json={
        "title": "Learn FastAPI",
        "priority": "high"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == "Learn FastAPI"
    assert data["id"] == 1
    assert data["done"] is False

def test_list_tasks():
    response = client.get("/tasks")
    assert response.status_code == 200
    assert len(response.json()) >= 1

def test_get_nonexistent():
    response = client.get("/tasks/999")
    assert response.status_code == 404
    assert "nahi mila" in response.json()["detail"]
```

### Day 2 Exercise

```python
# CRUD API banao for Books:
# GET /books → list all
# GET /books/{id} → single book
# POST /books → create book (title, author, year, isbn)
# PUT /books/{id} → update book
# DELETE /books/{id} → delete book
# Phir har endpoint ke test likho
```

---

## Day 3 — Pydantic V2 Deep Dive

### Pydantic V2 Features

Pydantic V2 = PHP ka Laravel Form Request validation ka power, lekin zyada flexible. Rust mein likha hai, isliye super fast.

```python
from pydantic import BaseModel, Field, field_validator, model_validator, EmailStr
from typing import Optional
from datetime import datetime
import re

# Install: pip install pydantic[email]

class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    email: str = Field(pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$")
    age: int = Field(ge=0, le=150, description="User ki age")
    phone: Optional[str] = Field(default=None, pattern=r"^\+?91\d{10}$")

    # Field level validator
    @field_validator("name")
    @classmethod
    def name_must_be_proper(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Name khali nahi ho sakta")
        return v.strip().title()

    # Model level validator (multiple fields)
    @model_validator(mode="after")
    def check_user(self):
        if self.age < 18 and self.phone is None:
            raise ValueError("Under 18 users ka phone hona chahiye")
        return self

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    age: int
    created_at: datetime = Field(default_factory=datetime.now)

    model_config = {"from_attributes": True}
```

### Field Configuration

```python
from pydantic import BaseModel, Field
from typing import List, Optional

class Config(BaseModel):
    app_name: str = Field(
        default="AI Journey",
        alias="APP_NAME",           # Environment variable alias
        description="Application name",
    )

    debug: bool = Field(default=False)
    allowed_hosts: List[str] = Field(default_factory=list)
    database_url: Optional[str] = Field(default=None, exclude=True)  # Hide from serialization

    model_config = {
        "env_prefix": "MYAPP_",         # Auto read from env
        "extra": "forbid",              # Extra fields allow nahi
    }
```

### Validation Advanced

```python
from pydantic import BaseModel, field_validator
from typing import List
import json

class TaskCreate(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    tags: List[str] = Field(default_factory=list, max_length=5)

    @field_validator("tags")
    @classmethod
    def tags_must_be_unique(cls, v: List[str]) -> List[str]:
        if len(v) != len(set(v)):
            raise ValueError("Tags duplicate nahi hone chahiye")
        return [tag.lower().strip() for tag in v]

    @field_validator("title")
    @classmethod
    def title_no_html(cls, v: str) -> str:
        if "<" in v or ">" in v:
            raise ValueError("HTML tags not allowed")
        return v
```

### Config Management with Pydantic

```python
# config.py
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    app_name: str = "Task Manager API"
    debug: bool = False
    database_url: str = "sqlite:///./tasks.db"
    secret_key: str = "change-me-in-production"
    cors_origins: list[str] = ["http://localhost:3000"]
    log_level: str = "INFO"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}

settings = Settings()
```

### Day 3 Exercise

```python
# Banao: Product model with validators
# name: 2-100 chars, no special chars except hyphen/space
# price: positive, max 999999.99
# stock: non-negative integer
# sku: pattern like "PROD-001", auto-increment
# category: must be in ["electronics", "books", "clothing", "food"]
# tags: 1-5 tags, each 2-20 chars
```

---

## Day 4 — SQLAlchemy + SQLite

### Setup

```bash
pip install sqlalchemy
```

### SQLAlchemy Models

PHP mein Eloquent models banate the. SQLAlchemy ka ORM same kaam karta hai.

```python
# models.py
from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime, Float, ForeignKey
from sqlalchemy.orm import DeclarativeBase, relationship, Session
from datetime import datetime, timezone

DATABASE_URL = "sqlite:///./app.db"
engine = create_engine(DATABASE_URL, echo=True)

class Base(DeclarativeBase):
    pass

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(String(1000), nullable=True)
    priority = Column(String(10), default="medium")
    done = Column(Boolean, default=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(200), unique=True, nullable=False)
    age = Column(Integer, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    # One-to-many relationship
    tasks = relationship("Task", back_populates="owner")

# Create tables
Base.metadata.create_all(bind=engine)
```

### Session Management

```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./app.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### FastAPI + SQLAlchemy CRUD

```python
# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timezone

from .database import get_db
from .models import Task as TaskModel
from .schemas import TaskCreate, TaskResponse

app = FastAPI()

@app.get("/tasks", response_model=List[TaskResponse])
def list_tasks(done: Optional[bool] = None, db: Session = Depends(get_db)):
    query = db.query(TaskModel)
    if done is not None:
        query = query.filter(TaskModel.done == done)
    return query.all()

@app.get("/tasks/{task_id}", response_model=TaskResponse)
def get_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    return task

@app.post("/tasks", response_model=TaskResponse, status_code=201)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = TaskModel(**task.model_dump())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

@app.put("/tasks/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db)):
    db_task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    for key, value in task.model_dump().items():
        setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task

@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    db.delete(db_task)
    db.commit()
    return None
```

### Pydantic Schemas (Separate File)

```python
# schemas.py
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class TaskCreate(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    description: Optional[str] = None
    priority: str = Field(default="medium", pattern="^(high|medium|low)$")

class TaskResponse(TaskCreate):
    id: int
    done: bool
    created_at: datetime

    model_config = {"from_attributes": True}
```

### Day 4 Exercise

```python
# User CRUD banao with SQLAlchemy:
# GET /users → list
# GET /users/{id} → single user with tasks
# POST /users → create
# PUT /users/{id} → update
# DELETE /users/{id} → delete (cascade tasks)
# Response mein user ke tasks bhi dikho
```

---

## Day 5 — Error Handling & Async Routes

### HTTPException & Custom Handlers

```python
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.exception_handlers import http_exception_handler as _http_exception_handler

app = FastAPI()

# Route-level exception
@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id == 0:
        raise HTTPException(
            status_code=400,
            detail="Item ID 0 nahi ho sakta",
            headers={"X-Error": "Invalid ID"},
        )
    if item_id < 0:
        raise HTTPException(status_code=404, detail="Item nahi mila")
    return {"item_id": item_id}

# Custom validation error handler
@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError):
    return JSONResponse(
        status_code=422,
        content={
            "error": "Validation Error",
            "detail": str(exc),
            "path": request.url.path
        }
    )

# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "detail": "Kuch gadbad hui. Team ko batao.",
            "path": request.url.path
        }
    )
```

### Custom Exception Classes

```python
class NotFoundError(HTTPException):
    def __init__(self, entity: str, entity_id: int):
        super().__init__(
            status_code=404,
            detail=f"{entity} with id {entity_id} nahi mila"
        )

class BusinessError(HTTPException):
    def __init__(self, message: str):
        super().__init__(status_code=422, detail=message)

# Usage
@app.get("/tasks/{task_id}")
def get_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not task:
        raise NotFoundError("Task", task_id)
    return task
```

### Async Routes

```python
import asyncio
import httpx

@app.get("/async-example")
async def async_endpoint():
    # I/O operation async mein handle karo
    await asyncio.sleep(1)
    return {"message": "2 second baad aaya"}

# Multiple external API calls simultaneously
@app.get("/fetch-users")
async def fetch_users():
    async with httpx.AsyncClient() as client:
        # Dono calls parallel mein chalege
        github, jsonplaceholder = await asyncio.gather(
            client.get("https://api.github.com/users/raushan"),
            client.get("https://jsonplaceholder.typicode.com/users/1"),
        )
        return {
            "github": github.json(),
            "jsonplaceholder": jsonplaceholder.json(),
        }

# Background tasks
from fastapi import BackgroundTasks

def send_welcome_email(email: str):
    print(f"Welcome email bhej rahe hain {email} ko...")
    import time
    time.sleep(2)
    print("Email bhej di!")

@app.post("/users", status_code=201)
async def create_user(user: UserCreate, background_tasks: BackgroundTasks):
    # Response turant bhej do, email background mein chale ga
    background_tasks.add_task(send_welcome_email, user.email)
    return {"message": "User created! Email bhijwadiya.", "user": user}

# Background task with exception handling
from fastapi import BackgroundTasks

def log_new_user(user_id: int):
    try:
        print(f"New user registered: {user_id}")
    except Exception as e:
        print(f"Logging failed: {e}")

@app.post("/users")
async def create_user(user: UserCreate, background_tasks: BackgroundTasks):
    db_user = create_user_in_db(user)
    background_tasks.add_task(log_new_user, db_user.id)
    return db_user
```

### Day 5 Exercise

```python
# Banao: User registration API with:
# - Custom exceptions: EmailAlreadyExists, WeakPassword
# - Background task: send welcome email (simulate)
# - Async fetch: new user ko random dog image assign karo (dog.ceo API)
# - Proper error handlers for all cases
```

---

## Day 6 — Middleware & CORS

### CORS Middleware

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-frontend.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],      # Sab HTTP methods
    allow_headers=["*"],      # Sab headers
)
```

### Custom Middleware

```python
import time
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware

class RequestLogMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start = time.time()

        # Request aane pe
        print(f"→ {request.method} {request.url.path}")

        # Response jane pe
        response = await call_next(request)
        duration = time.time() - start

        print(f"← {request.method} {request.url.path} → {response.status_code} ({duration:.2f}s)")
        response.headers["X-Response-Time"] = str(duration)
        return response

app.add_middleware(RequestLogMiddleware)
```

### Rate Limiting Middleware

```python
import time
from collections import defaultdict
from fastapi import Request, HTTPException

class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_requests: int = 10, window: int = 60):
        super().__init__(app)
        self.max_requests = max_requests
        self.window = window
        self.requests: dict = defaultdict(list)

    async def dispatch(self, request: Request, call_next):
        # Skip for docs
        if request.url.path in ["/docs", "/redoc", "/openapi.json"]:
            return await call_next(request)

        client_ip = request.client.host if request.client else "unknown"
        now = time.time()

        # Purane requests hatao
        self.requests[client_ip] = [
            t for t in self.requests[client_ip]
            if now - t < self.window
        ]

        if len(self.requests[client_ip]) >= self.max_requests:
            raise HTTPException(
                status_code=429,
                detail=f"Too many requests. {self.window} second mein ruko."
            )

        self.requests[client_ip].append(now)
        return await call_next(request)

app.add_middleware(RateLimitMiddleware, max_requests=5, window=10)
```

### Dependency Injection as Middleware

```python
from fastapi import Depends, FastAPI, Request, Header
from typing import Optional

# Verify API key
async def verify_api_key(x_api_key: Optional[str] = Header(None)):
    if x_api_key != settings.secret_key:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return x_api_key

@app.get("/protected")
async def protected_route(api_key: str = Depends(verify_api_key)):
    return {"message": "You have access!", "key": api_key}

# Dependency with DB
def get_current_user(
    db: Session = Depends(get_db),
    authorization: Optional[str] = Header(None)
):
    if not authorization:
        raise HTTPException(status_code=401, detail="No token provided")
    # Parse token, find user...
    user = db.query(User).filter(User.email == "raushan@example.com").first()
    if not user:
        raise HTTPException(status_code=404, detail="User nahi mila")
    return user

@app.get("/me")
def get_me(user: User = Depends(get_current_user)):
    return {"user": user}
```

### Day 6 Exercise

```python
# Banao middleware jo:
# 1. Query performance track kare (slow queries > 1s log kare)
# 2. Request ID har request mein add kare
# 3. User-Agent header log kare
# 4. Block certain user agents (curl, python-requests)
```

---

## Day 7 — Week 3 Project: Task Manager API

### Project Structure

```
task_manager_api/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app
│   ├── config.py            # Settings
│   ├── database.py          # Engine, session
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── crud.py              # Business logic
│   ├── dependencies.py      # Dependency injection
│   ├── middleware.py        # Custom middleware
│   └── routers/
│       ├── __init__.py
│       ├── tasks.py
│       └── users.py
├── tests/
│   ├── conftest.py
│   ├── test_tasks.py
│   └── test_users.py
├── requirements.txt
├── .env
└── README.md
```

### config.py

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Task Manager API"
    debug: bool = True
    database_url: str = "sqlite:///./tasks.db"
    secret_key: str = "dev-secret-key-change-in-prod"
    cors_origins: list[str] = ["*"]

    model_config = {"env_file": ".env"}

settings = Settings()
```

### database.py

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

from app.config import settings

engine = create_engine(
    settings.database_url,
    connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Base(DeclarativeBase):
    pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### models.py

```python
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(String(1000), nullable=True)
    priority = Column(String(10), default="medium")
    done = Column(Boolean, default=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=True)

    owner = relationship("User", back_populates="tasks")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(200), unique=True, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    tasks = relationship("Task", back_populates="owner")
```

### routers/tasks.py

```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional

from app.database import get_db
from app.models import Task as TaskModel
from app.schemas import TaskCreate, TaskResponse, TaskUpdate

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("", response_model=List[TaskResponse])
def list_tasks(
    done: Optional[bool] = None,
    priority: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(TaskModel)
    if done is not None:
        query = query.filter(TaskModel.done == done)
    if priority:
        query = query.filter(TaskModel.priority == priority)
    return query.order_by(TaskModel.created_at.desc()).all()

@router.get("/{task_id}", response_model=TaskResponse)
def get_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    return task

@router.post("", response_model=TaskResponse, status_code=201)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = TaskModel(**task.model_dump())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

@router.put("/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task: TaskUpdate, db: Session = Depends(get_db)):
    db_task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    for key, value in task.model_dump(exclude_unset=True).items():
        setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task

@router.delete("/{task_id}", status_code=204)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(TaskModel).filter(TaskModel.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task nahi mila")
    db.delete(db_task)
    db.commit()
    return None
```

### main.py

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import engine, Base
from app.routers import tasks, users
from app.middleware import RequestLogMiddleware

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.app_name, version="1.0.0")

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(RequestLogMiddleware)

# Routers
app.include_router(tasks.router)
app.include_router(users.router)

@app.get("/")
def root():
    return {"message": "Task Manager API", "version": "1.0.0"}
```

### tests/conftest.py

```python
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.main import app
from app.database import Base, get_db

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    yield TestClient(app)
    Base.metadata.drop_all(bind=engine)
```

### Run

```bash
# Install
pip install -r requirements.txt

# Run
uvicorn app.main:app --reload

# Test
pytest tests/ -v --cov=app

# API Docs
# http://localhost:8000/docs
```

---

## Week 3 Checklist

- [ ] FastAPI project setup kar liya
- [ ] Path & query parameters samajh aaye
- [ ] Pydantic models se validation kar li
- [ ] CRUD API bana li (in-memory)
- [ ] SQLAlchemy models create kar liye
- [ ] Database se CRUD complete hai
- [ ] Pydantic V2 validators use kar liye
- [ ] Error handling (HTTPException, custom handlers) ho gayi
- [ ] Async routes (async def, httpx) use kar liye
- [ ] CORS + custom middleware lag gaya
- [ ] Background tasks ka use pata hai
- [ ] Test cases sab endpoints ke likh diye
- [ ] Project structured (routers, schemas, models alag)
- [ ] GitHub pe push kiya
