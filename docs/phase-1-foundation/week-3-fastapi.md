# Week 3: FastAPI

**Duration:** June 22-28, 2026 | **Hours:** 35

**Goal:** Build production-ready REST APIs with FastAPI

---

## Day 1 (Jun 22): First API

```python
from fastapi import FastAPI

app = FastAPI(title="My First API")

@app.get("/")
def root():
    return {"message": "Hello, World!"}

@app.get("/health")
def health():
    return {"status": "ok", "version": "1.0.0"}
```

```bash
uvicorn main:app --reload
# Visit http://localhost:8000/docs
```

## Day 2 (Jun 23): Parameters & Pydantic

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    in_stock: bool = True
    tags: list[str] = []

@app.post("/items")
def create_item(item: Item):
    return {"id": 1, **item.model_dump()}

@app.get("/items/{item_id}")
def get_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
```

## Day 3 (Jun 24): Database CRUD

```python
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.orm import declarative_base, Session

engine = create_engine("sqlite:///./app.db")
Base = declarative_base()

class ItemDB(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    price = Column(Integer)
    in_stock = Column(Boolean, default=True)

Base.metadata.create_all(bind=engine)
```

## Day 4 (Jun 25): JWT Auth

```python
from datetime import timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"])
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
```

## Day 5 (Jun 26): Middleware & Background Tasks

```python
from fastapi import BackgroundTasks

def write_log(message: str):
    with open("log.txt", "a") as f:
        f.write(f"{datetime.now()}: {message}\n")

@app.post("/items")
def create_item(item: Item, bg: BackgroundTasks):
    bg.add_task(write_log, f"Created item: {item.name}")
    return {"message": "Item created"}
```

## Day 6 (Jun 27): Project — Notes API

Build a complete Notes API with:
- CRUD operations
- JWT authentication
- SQLite database
- User-specific notes
- Background logging

## Day 7 (Jun 28): REST — Review

- Review all FastAPI concepts
- Add tests with pytest
- Add Dockerfile
- Push to GitHub
