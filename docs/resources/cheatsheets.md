# Cheatsheets

> Quick reference for everyday tools. Laravel developer ke liye Python aur AI engineering ke common commands ek saath.

---

## Python

```python
# ── Comprehensions ──

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# Dict comprehension
square_map = {x: x**2 for x in range(5)}

# Set comprehension
unique_lengths = {len(word) for word in words}

# Generator expression
total = sum(x**2 for x in range(1000000))


# ── Common stdlib functions ──

# itertools
from itertools import chain, groupby, product, permutations, combinations, cycle, count, zip_longest

# collections
from collections import defaultdict, Counter, deque, OrderedDict, namedtuple

# functools
from functools import lru_cache, partial, reduce, wraps, cache

# typing
from typing import Optional, List, Dict, Any, Callable, Union, Tuple, TypeVar, Generic

# heapq
import heapq
heapq.heappush(heap, item)
heapq.heappop(heap)
heapq.nlargest(3, iterable)
heapq.nsmallest(3, iterable)

# bisect
import bisect
bisect.bisect_left(sorted_list, item)
bisect.insort(sorted_list, item)


# ── Path / File ──
from pathlib import Path
p = Path("data/file.txt")
p.read_text()
p.write_text("hello")
p.parent, p.stem, p.suffix
list(Path(".").glob("**/*.py"))
Path("new_dir").mkdir(parents=True, exist_ok=True)

# Temporary files
import tempfile
with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
    f.write(b"data")
with tempfile.TemporaryDirectory() as tmpdir:
    print(tmpdir)


# ── JSON ──
import json
data = json.loads(json_string)
json_string = json.dumps(data, indent=2, ensure_ascii=False)

# Custom serialization
from datetime import datetime
class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

json.dumps(data, cls=DateTimeEncoder)


# ── HTTP ──
import httpx
resp = httpx.get("https://api.example.com")
resp.json(), resp.status_code, resp.headers

# httpx.AsyncClient() for async
async with httpx.AsyncClient() as client:
    resp = await client.get("https://api.example.com")

# httpx with retries
from httpx import Client, Transport
transport = Transport(retries=3)
client = Client(transport=transport)

# requests (fallback if httpx unavailable)
import requests
resp = requests.get("https://api.example.com", timeout=10)


# ── Datetime ──
from datetime import datetime, timezone, timedelta, date
now = datetime.now(timezone.utc)
now.isoformat()

# Formatting
now.strftime("%Y-%m-%d %H:%M:%S")
datetime.strptime("2024-01-15", "%Y-%m-%d")

# Timezone aware
from zoneinfo import ZoneInfo  # Python 3.9+
ist = datetime.now(ZoneInfo("Asia/Kolkata"))

# Timedelta
yesterday = now - timedelta(days=1)
next_week = now + timedelta(weeks=1)

# Date-only
today = date.today()
birthday = date(1999, 1, 1)
(today - birthday).days


# ── Logging ──
import logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger(__name__)
logger.info("Hello")
logger.warning("Careful!")
logger.error("Something broke")
logger.exception("With traceback")  # includes stack trace


# ── Environment Variables ──
import os
from dotenv import load_dotenv
load_dotenv()
db_url = os.getenv("DATABASE_URL", "sqlite:///default.db")
secret = os.environ["API_KEY"]  # raises KeyError if missing


# ── Error Handling ──
try:
    result = risky_operation()
except ValueError as e:
    logger.warning(f"Invalid input: {e}")
except Exception as e:
    logger.exception("Unexpected error")
    raise
else:
    print("No error occurred")
finally:
    cleanup()

# Custom exceptions
class ApiError(Exception):
    def __init__(self, message: str, status_code: int = 500):
        super().__init__(message)
        self.status_code = status_code


# ── Dataclasses ──
from dataclasses import dataclass, field, asdict

@dataclass
class User:
    name: str
    email: str
    age: int = 0
    tags: List[str] = field(default_factory=list)
    is_active: bool = True

user = User(name="Raushan", email="r@example.com")
print(asdict(user))  # {'name': 'Raushan', ...}


# ── Enums ──
from enum import Enum, auto

class Status(Enum):
    PENDING = auto()
    ACTIVE = auto()
    BLOCKED = "blocked"

if user.status == Status.ACTIVE:
    print("Active!")


# ── Async/Await Basics ──
import asyncio

async def fetch_data(url: str) -> dict:
    async with httpx.AsyncClient() as client:
        resp = await client.get(url)
        return resp.json()

async def main():
    urls = ["https://api.example.com/1", "https://api.example.com/2"]
    results = await asyncio.gather(*[fetch_data(u) for u in urls])
    print(results)

asyncio.run(main())


# ── Concurrent Futures ──
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

with ThreadPoolExecutor(max_workers=4) as executor:
    futures = [executor.submit(process_item, item) for item in items]
    for future in futures:
        result = future.result()


# ── Argparse ──
import argparse

parser = argparse.ArgumentParser(description="Process some data")
parser.add_argument("input", help="Input file path")
parser.add_argument("--output", "-o", default="output.json", help="Output file")
parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")
parser.add_argument("--limit", type=int, default=100, help="Max results")
args = parser.parse_args()

if args.verbose:
    print(f"Processing {args.input}...")
```

---

## FastAPI

```python
# ── Route Decorators ──
from fastapi import FastAPI, Query, Path, Body, Depends, HTTPException, status

app = FastAPI(title="My API")

@app.get("/items/{item_id}")
async def get_item(
    item_id: int = Path(..., ge=1),
    q: Optional[str] = Query(None, max_length=50)
):
    return {"item_id": item_id, "q": q}

@app.post("/items")
async def create_item(item: ItemCreate):  # Pydantic model
    return item

@app.put("/items/{item_id}")
async def update_item(item_id: int, item: ItemUpdate):
    return {"item_id": item_id, **item.dict()}

@app.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(item_id: int):
    return None

@app.patch("/items/{item_id}")
async def partial_update(item_id: int, item: ItemPatch):
    return {"item_id": item_id, **item.dict(exclude_unset=True)}


# ── Dependency Injection ──
from fastapi import Depends

async def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/{user_id}")
async def get_user(user_id: int, db = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Dependency with parameters (factory pattern)
def pagination(skip: int = Query(0, ge=0), limit: int = Query(10, ge=1, le=100)):
    return {"skip": skip, "limit": limit}

@app.get("/items")
async def list_items(pagination = Depends(pagination)):
    return db.query(Item).offset(pagination["skip"]).limit(pagination["limit"]).all()


# ── Pydantic Models ──
from pydantic import BaseModel, Field, EmailStr, ConfigDict

class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr
    age: int = Field(ge=0, le=120)
    tags: List[str] = []
    model_config = ConfigDict(from_attributes=True)

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    is_active: bool
    model_config = ConfigDict(from_attributes=True)

# Nested models
class Comment(BaseModel):
    id: int
    text: str

class PostWithComments(BaseModel):
    id: int
    title: str
    comments: List[Comment]


# ── Exception Handling ──
from fastapi import Request
from fastapi.responses import JSONResponse

class AppException(Exception):
    def __init__(self, message: str, code: int = 400):
        self.message = message
        self.code = code

@app.exception_handler(AppException)
async def app_exception_handler(request: Request, exc: AppException):
    return JSONResponse(
        status_code=exc.code,
        content={"detail": exc.message, "code": exc.code}
    )


# ── Background Tasks ──
from fastapi import BackgroundTasks

def send_email(email: str, body: str):
    # simulate email send
    pass

@app.post("/notify")
async def notify(email: str, tasks: BackgroundTasks):
    tasks.add_task(send_email, email, "Welcome!")
    return {"message": "Email will be sent"}


# ── File Upload ──
from fastapi import UploadFile, File

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    with open(f"uploads/{file.filename}", "wb") as f:
        f.write(content)
    return {"filename": file.filename, "size": len(content)}

# Multiple files
@app.post("/upload-multiple/")
async def upload_multiple(files: List[UploadFile] = File(...)):
    return [{"filename": f.filename} for f in files]


# ── WebSocket ──
from fastapi import WebSocket, WebSocketDisconnect

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Echo: {data}")
    except WebSocketDisconnect:
        print("Client disconnected")


# ── CORS ──
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Testing ──
from fastapi.testclient import TestClient

client = TestClient(app)

def test_create_item():
    response = client.post("/items", json={"name": "Test", "price": 10.0})
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test"


# ── Lifespan Events ──
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await init_db()
    yield
    # Shutdown
    await close_db()

app = FastAPI(lifespan=lifespan)
```

---

## SQLAlchemy

```python
# ── Model Definition ──
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text, Float, Enum
from sqlalchemy.orm import declarative_base, relationship, validates
from datetime import datetime, timezone
import enum

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    name = Column(String(100), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, onupdate=lambda: datetime.now(timezone.utc))
    score = Column(Float, default=0.0)


# ── Relationships ──
class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")

User.posts = relationship("Post", back_populates="author")

class Comment(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True)
    text = Column(Text, nullable=False)
    post_id = Column(Integer, ForeignKey("posts.id"))
    post = relationship("Post", back_populates="comments")


# ── Common Queries ──

# Create
user = User(name="Raushan", email="raushan@example.com")
db.add(user)
db.commit()
db.refresh(user)

# Batch create
db.add_all([User(name="A"), User(name="B")])
db.commit()

# Read — all
users = db.query(User).filter(User.is_active == True).all()
user = db.query(User).filter(User.id == 1).first()

# Read — with conditions
active_users = db.query(User).filter(
    User.is_active == True,
    User.name.like("R%")
).all()

# Read — ordering
users = db.query(User).order_by(User.created_at.desc()).limit(10).all()

# Read — count
count = db.query(User).filter(User.is_active == True).count()

# Read — exists
exists = db.query(User.id).filter(User.email == email).first() is not None

# Update
user.name = "Raushan Kumar"
db.commit()

# Delete
db.delete(user)
db.commit()

# Bulk update
db.query(User).filter(User.is_active == False).update({"is_active": True})
db.commit()

# Bulk delete
db.query(User).filter(User.is_active == False).delete()
db.commit()


# ── Eager Loading ──
from sqlalchemy.orm import joinedload, subqueryload, selectinload

# joinedload — single JOIN (best for to-one)
users = db.query(User).options(joinedload(User.posts)).all()

# selectinload — second query (best for to-many)
users = db.query(User).options(selectinload(User.posts).selectinload(Post.comments)).all()

# subqueryload — subquery (fallback)


# ── Aggregates ──
from sqlalchemy import func

avg_score = db.query(func.avg(User.score)).scalar()
user_count = db.query(func.count(User.id)).scalar()
by_status = db.query(User.is_active, func.count(User.id)).group_by(User.is_active).all()


# ── Raw SQL ──
result = db.execute("SELECT * FROM users WHERE is_active = :active", {"active": True})
users = result.fetchall()


# ── Async Sessions ──
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy import select

engine = create_async_engine("postgresql+asyncpg://user:pass@localhost/db")

async with AsyncSession(engine) as session:
    result = await session.execute(select(User).where(User.id == 1))
    user = result.scalar_one()


# ── Migrations (Alembic) ──
# terminal:
#   alembic init alembic
#   alembic revision --autogenerate -m "create users"
#   alembic upgrade head
```

---

## Docker

```bash
# ── Images ──
docker build -t myapp:latest .
docker build -t myapp:v1.0 --no-cache .
docker build -t myapp:latest --target builder .  # multi-stage target
docker images
docker rmi myapp:v1.0
docker image prune          # remove dangling images
docker tag myapp:latest myrepo/myapp:v1.0

# ── Containers ──
docker run -d --name myapp -p 8000:8000 myapp:latest
docker run -d --name myapp -p 8000:8000 -v $(pwd):/app myapp  # mount
docker run --rm -it myapp bash                                  # interactive + cleanup
docker run -d --restart unless-stopped --name myapp myapp:latest
docker ps          # running containers
docker ps -a       # all containers
docker stop myapp
docker start myapp
docker restart myapp
docker rm myapp
docker rm -f myapp         # force remove running
docker logs -f myapp
docker logs --tail 100 myapp
docker stats                # live resource usage

# ── Exec ──
docker exec -it myapp bash
docker exec myapp ls /app

# ── Networks ──
docker network ls
docker network create my-network
docker run --network my-network --name api myapp:latest
docker network connect my-network myapp
docker network disconnect my-network myapp

# ── Compose ──
docker compose up -d
docker compose up -d --build       # rebuild before start
docker compose down
docker compose down -v             # down + remove volumes
docker compose logs -f
docker compose ps
docker compose build
docker compose restart api
docker compose exec api bash

# ── Volumes ──
docker volume ls
docker volume create my-volume
docker volume inspect my-volume
docker volume prune
docker run -v my-volume:/data myapp

# ── Cleanup ──
docker system prune -a   # remove everything unused
docker container prune   # remove stopped containers
docker image prune -a    # remove all unused images
docker builder prune     # clean build cache

# ── Multi-stage build ──
# Stage 1: build
FROM python:3.12-slim AS builder
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Stage 2: runtime
FROM python:3.12-slim
COPY --from=builder /root/.local /root/.local
COPY . /app
WORKDIR /app
CMD ["python", "app.py"]

# ── Dockerfile Best Practices ──
# 1. Use specific tags (not :latest)
# 2. Keep layers small — combine apt-get install && apt-get clean
# 3. Copy requirements first, install, then copy code (cache layer)
# 4. Use .dockerignore for node_modules, __pycache__, .git
# 5. Don't run as root: USER appuser
# 6. Use HEALTHCHECK
```

---

## Git

```bash
# ── Everyday ──
git status
git add .
git add -p                # interactive add (review hunks)
git commit -m "message"
git commit -am "message"  # add + commit for tracked files
git push origin main
git pull origin main
git fetch origin          # fetch without merge

# ── Branching ──
git branch                # list local branches
git branch -r             # list remote branches
git branch -a             # list all branches
git branch feature/new-feature
git checkout feature/new-feature
git checkout -b feature/new-feature   # create + switch
git switch -c feature/new-feature     # modern syntax
git branch -d feature/new-feature     # delete local (safe)
git branch -D feature/new-feature     # force delete local
git push origin --delete feature/new-feature  # delete remote

# ── Rebase vs Merge ──
git merge main              # merge main into current
git rebase main             # rebase current on main
# Rebase = cleaner history, merge = preserve context
# For personal branches: rebase. For shared branches: merge

# Interactive rebase
git rebase -i HEAD~5        # squash, reword, reorder last 5 commits
git rebase -i main          # rebase onto main interactively

# ── Cherry-pick ──
git cherry-pick abc123      # apply specific commit
git cherry-pick abc123..def456  # range of commits

# ── Stash ──
git stash                 # save work in progress
git stash push -m "wip message"  # named stash
git stash pop             # restore latest stash
git stash list            # list all stashes
git stash apply stash@{2} # apply specific stash
git stash drop stash@{1}  # delete specific stash

# ── Undo ──
git restore file.py       # undo changes (unstaged)
git restore --staged file.py  # unstage
git reset --soft HEAD~1   # undo last commit, keep changes staged
git reset --mixed HEAD~1  # undo last commit, keep changes unstaged
git reset --hard HEAD~1   # undo last commit, discard changes
git revert HEAD           # create new commit that undoes HEAD (safe for shared)

# ── Reflog ──
git reflog                # show all HEAD movements
git reset --hard HEAD@{2} # restore to reflog entry (rescue lost commits)

# ── Log ──
git log --oneline -10
git log --graph --oneline --all
git log --since="2 weeks ago"
git log --author="Raushan"
git log --grep="fix:"         # search commit messages
git log -p file.py            # show commits + diffs for file

# ── Diff ──
git diff                  # unstaged changes
git diff --staged         # staged changes
git diff main..feature    # branch diff
git diff HEAD~2..HEAD     # last 2 commits diff
git diff --stat           # summary of changed files

# ── Tags ──
git tag                   # list tags
git tag v1.0.0            # create lightweight tag
git tag -a v1.0.0 -m "Release v1.0.0"  # annotated tag
git push origin v1.0.0   # push specific tag
git push origin --tags   # push all tags
git tag -d v1.0.0        # delete local tag
git push origin --delete v1.0.0  # delete remote tag

# ── Submodules ──
git submodule add https://github.com/user/repo.git path/to/submodule
git submodule update --init --recursive
git submodule foreach git pull origin main

# ── Workflow: Feature Branch ──
# git checkout -b feat/rag-pipeline
# ... work, commit ...
# git rebase main
# git checkout main && git merge feat/rag-pipeline
# git branch -d feat/rag-pipeline
```

---

## VS Code Shortcuts

```bash
# ── General ──
Ctrl+P                 # Quick Open (search files)
Ctrl+Shift+P           # Command Palette
Ctrl+,                 # Settings
Ctrl+`                 # Toggle terminal
Ctrl+B                 # Toggle sidebar
Ctrl+Shift+E           # Explorer
Ctrl+Shift+G           # Source Control (Git)

# ── Editing ──
Ctrl+D                 # Select next occurrence of word
Ctrl+Shift+L           # Select all occurrences
Alt+Up/Down            # Move line up/down
Ctrl+/                 # Toggle line comment
Shift+Alt+Down         # Copy line down
Ctrl+Shift+K           # Delete line
Ctrl+Enter             # Insert line below
Ctrl+Shift+Enter       # Insert line above
F2                     # Rename symbol
Ctrl+.                 # Quick fix

# ── Multi-cursor ──
Alt+Click              # Add cursor
Ctrl+Alt+Up/Down       # Add cursor above/below
Ctrl+U                 # Undo last cursor operation

# ── Navigation ──
F12                    # Go to definition
Ctrl+Click             # Go to definition
Ctrl+Shift+O           # Go to symbol in file
Ctrl+T                 # Go to symbol in workspace
Ctrl+G                 # Go to line
Ctrl+Tab               # Switch between files
Alt+Left/Right         # Navigate back/forward

# ── Search & Replace ──
Ctrl+F                 # Search in file
Ctrl+H                 # Search and replace in file
Ctrl+Shift+F           # Search in workspace
Ctrl+Shift+H           # Search and replace in workspace

# ── Debugging ──
F5                     # Start debugging
F9                     # Toggle breakpoint
F10                    # Step over
F11                    # Step into
Shift+F11              # Step out
Ctrl+Shift+F5          # Restart

# ── Python-specific ──
Ctrl+Enter             # Run cell in Python interactive
Shift+Enter            # Run selection in Python terminal

# ── Settings to tweak ──
# "editor.formatOnSave": true
# "editor.minimap.enabled": false
# "editor.wordWrap": "on"
# "workbench.colorTheme": "Default Dark Modern"
# "python.terminal.activateEnvironment": true
# "[python]": { "editor.defaultFormatter": "charliermarsh.ruff" }

# ── Essential Extensions ──
# Python (ms-python.python)
# Pylance (ms-python.vscode-pylance)
# Ruff (charliermarsh.ruff) — fast Python linter
# GitHub Copilot
# GitLens (git history)
# Docker
# YAML
# Markdown Preview Enhanced
# Thunder Client — API testing inside VS Code
```

---

## tmux / screen

```bash
# ── tmux (recommended) ──
tmux new -s mysession          # create session
tmux ls                        # list sessions
tmux a -t mysession            # attach to session
tmux kill-session -t mysession # kill session

# Inside tmux (prefix = Ctrl+b):
# Ctrl+b c      — new window
# Ctrl+b n/p    — next/prev window
# Ctrl+b 0-9    — switch to window by number
# Ctrl+b %      — split vertical
# Ctrl+b "      — split horizontal
# Ctrl+b arrow  — navigate panes
# Ctrl+b d      — detach
# Ctrl+b ,      — rename window
# Ctrl+b [      — scroll mode (q to exit)

# ── screen (fallback) ──
screen -S mysession            # start session
screen -ls                     # list sessions
screen -r mysession            # reattach

# Inside screen (prefix = Ctrl+a):
# Ctrl+a c      — new window
# Ctrl+a n/p    — next/prev window
# Ctrl+a "      — list windows
# Ctrl+a d      — detach
# Ctrl+a k      — kill window
```

---

## n8n

```json
// ── Expression Syntax ──
{{ $json.fieldName }}
{{ $node["PreviousNode"].data["fieldName"] }}
{{ new Date().toISOString() }}
{{ Math.random() }}
{{ $json.fieldName?.toLowerCase() }}
{{ $json.price * $json.quantity }}
{{ JSON.parse($json.rawData) }}
{{ $items().length }}           // count items

// ── Common Nodes ──
// HTTP Request: GET/POST to any API
// Webhook: Trigger workflow from external system
// OpenAI Node: Chat, embed, complete
// Code Node: JavaScript custom logic
// Function Node: Transform data
// IF Node: Conditional branching
// Wait Node: Delay execution
// Switch Node: Multi-route conditional
// Schedule Trigger: Cron-based scheduling
// Merge Node: Combine multiple branches
// SplitInBatches: Process items in batches
// Spreadsheet File: Read/write Excel/CSV
// Send Email: SMTP node

// ── Common Workflow Patterns ──
// 1. Webhook -> OpenAI -> Response
//    Trigger from chat, get LLM response

// 2. Schedule -> HTTP Request -> Transform -> Store
//    Daily data sync

// 3. Webhook -> Code -> IF -> [Slack | Email]
//    Conditional notification

// 4. OpenAI -> Wait -> Code -> Loop
//    Multi-step agent workflow

// 5. Webhook -> Switch(by type) -> [Slack | Email | Database]
//    Route different message types to different handlers

// 6. Schedule -> HTTP Request -> Loop Over Items -> OpenAI -> Database
//    Batch process records with AI enrichment

// 7. Telegram Trigger -> OpenAI -> Telegram Send
//    AI chatbot on Telegram

// ── Error Handling ──
// Enable 'Continue on Fail' on nodes
// Add 'Error Trigger' webhook for monitoring
// Use IF node to check for error output
// Set retry on error (up to 5 times, exponential backoff)

// ── Credentials ──
// Store in n8n credential store (encrypted)
// Reference via {{ $credentials.myService.apiKey }}
// Never hardcode API keys in expressions

// ── Performance Tips ──
// Use SplitInBatches for large datasets (batch size 50-100)
// Avoid nested loops — flatten data first
// Use Code node for complex transforms (faster than multiple Function nodes)
// Enable 'Wait for Webhook' for long-running workflows
```

---

## LangChain

```python
# ── LCEL Patterns ──
from langchain_core.runnables import RunnablePassthrough, RunnableParallel
from langchain_core.output_parsers import StrOutputParser

# Simple chain
chain = prompt | model | StrOutputParser()

# Parallel execution
chain = RunnableParallel(
    {"context": retriever, "question": RunnablePassthrough()}
) | prompt | model | StrOutputParser()

# Branching
chain = (
    RunnableBranch(
        (lambda x: len(x["text"]) > 100, long_handler),
        (lambda x: len(x["text"]) > 10, medium_handler),
        short_handler
    )
)

# ── RAG Chain (Full Example) ──
from langchain_core.runnables import RunnablePassthrough, RunnableParallel

def format_docs(docs):
    return "\n\n".join(d.page_content for d in docs)

rag_chain = (
    RunnableParallel(
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
    )
    | rag_prompt
    | llm
    | StrOutputParser()
)

result = rag_chain.invoke({"question": "What is RAG?"})


# ── Streaming ──
chain = prompt | model | StrOutputParser()

for chunk in chain.stream({"question": "Tell me a story"}):
    print(chunk, end="", flush=True)


# ── Conversation Chain ──
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()
conversation = ConversationChain(llm=llm, memory=memory, verbose=True)

response = conversation.predict(input="Hi, I'm Raushan")
response = conversation.predict(input="What's my name?")  # remembers


# ── Tool Creation ──
from langchain.tools import tool

@tool
def search_documents(query: str) -> str:
    """Search business documents for relevant info"""
    results = vector_store.similarity_search(query, k=3)
    return "\n\n".join(doc.page_content for doc in results)


# ── Memory Types ──
from langchain.memory import (
    ConversationBufferMemory,
    ConversationSummaryMemory,
    VectorStoreRetrieverMemory,
    ConversationBufferWindowMemory,
)

# Buffer — stores all messages (basic)
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# Window — keeps only last N exchanges
window_memory = ConversationBufferWindowMemory(k=5, return_messages=True)

# Summary — summarizes when context gets long
summary_memory = ConversationSummaryMemory(llm=llm, return_messages=True)


# ── Agent Creation ──
from langchain.agents import create_react_agent, AgentExecutor

agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    verbose=True,
    handle_parsing_errors=True,
    max_iterations=5
)

# Stream agent steps
for step in agent_executor.stream({"input": "What's the weather in Delhi?"}):
    if "intermediate_step" in step:
        print(f"Tool called: {step['intermediate_step']}")


# ── Document Loaders ──
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    UnstructuredMarkdownLoader,
    CSVLoader,
    JSONLoader,
    WebBaseLoader,
    YoutubeLoader,
)

loader = PyPDFLoader("document.pdf")
docs = loader.load()

# Web loader
web_loader = WebBaseLoader("https://example.com")
web_docs = web_loader.load()


# ── Text Splitters ──
from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    MarkdownHeaderTextSplitter,
    CharacterTextSplitter,
)

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ".", " ", ""]
)
chunks = splitter.split_documents(docs)

# Split text directly
texts = splitter.split_text("Some long text...")


# ── Callbacks ──
from langchain.callbacks.base import BaseCallbackHandler

class LogCallback(BaseCallbackHandler):
    def on_llm_start(self, serialized, prompts, **kwargs):
        print(f"LLM started with prompts: {prompts[:1]}")

    def on_llm_end(self, response, **kwargs):
        print(f"LLM finished: {response.generations[0][0].text[:50]}...")

    def on_tool_start(self, serialized, input_str, **kwargs):
        print(f"Tool: {serialized['name']}, input: {input_str[:100]}")

chain = prompt | model | StrOutputParser()
result = chain.invoke({"question": "Hello"}, config={"callbacks": [LogCallback()]})


# ── Chat Models ──
from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI
from langchain_google_genai import ChatGoogleGenerativeAI

claude = ChatAnthropic(model="claude-sonnet-4-20250514", temperature=0)
gpt = ChatOpenAI(model="gpt-4o", temperature=0)
gemini = ChatGoogleGenerativeAI(model="gemini-2.5-pro", temperature=0)


# ── Embeddings ──
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma.from_documents(docs, embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
```

---

## Linux

```bash
# ── File Operations ──
ls -la                    # list all files with details
ls -lh                    # human readable sizes
find . -name "*.py"      # find files
find . -type f -size +1M  # files larger than 1MB
grep -r "pattern" .      # search in files
grep -rn "pattern" .     # with line numbers
grep -ril "pattern" .    # list matching files only
wc -l file.txt           # count lines
wc -w file.txt           # count words
du -sh *                 # directory sizes
du -sh .                 # total size of current dir
df -h                    # disk space
ln -s target link        # symlink
tree -L 2                # directory tree (depth 2)
rsync -avz src/ dest/    # sync directories

# ── Process Management ──
ps aux                   # all processes
ps aux | grep python     # find python processes
top / htop               # resource monitor
kill -9 PID              # force kill
kill -15 PID             # graceful kill (SIGTERM)
pkill -f "python app"    # kill by name
systemctl status nginx   # service status
journalctl -u nginx -f   # service logs
nohup python app.py &    # run in background (persist after logout)

# ── Networking ──
curl -I https://example.com   # HTTP headers
curl -X POST -d '{"key":"val"}' -H "Content-Type: application/json" URL
curl -v https://example.com    # verbose (full request/response)
nc -zv host port              # port check
ss -tlnp                      # listening ports (modern netstat)
ss -tn state established      # established connections
ufw status                    # firewall status
ufw allow 8000                # open port
ping -c 4 google.com          # test connectivity
traceroute google.com         # trace network path
nslookup example.com          # DNS lookup
dig example.com               # detailed DNS lookup

# ── systemd ──
systemctl enable myservice
systemctl start myservice
systemctl status myservice
systemctl restart myservice
systemctl stop myservice
systemctl daemon-reload       # reload after unit file change
systemctl list-units --type=service  # list all services

# ── Permissions ──
chmod +x script.sh        # make executable
chown user:group file     # change owner
chmod -R 755 directory    # recursive
chmod 644 file.txt        # rw-r--r--
umask 022                 # set default permissions

# ── Text Processing ──
head -n 10 file.txt       # first 10 lines
tail -n 10 file.txt       # last 10 lines
tail -f app.log           # follow log
less file.txt             # scrollable viewer (q to quit)
sort file.txt             # sort lines
sort -n file.txt          # numeric sort
uniq -c file.txt          # count duplicates
cut -d',' -f1,3 file.csv  # extract columns
paste file1 file2         # merge lines side by side
diff file1 file2          # compare files
tr ',' '\t' < file.txt    # replace characters
awk '{print $1}' file.txt # print first column
awk '{sum += $1} END {print sum}' file.txt  # sum column
sed 's/foo/bar/g' file.txt   # replace all
sed -n '5,10p' file.txt      # print lines 5-10

# ── Compression ──
tar -czf archive.tar.gz directory/
tar -xzf archive.tar.gz
tar -cjf archive.tar.bz2 directory/
tar -xzf archive.tar.gz -C /target/dir
zip -r archive.zip directory/
unzip archive.zip
gzip file.txt
gunzip file.txt.gz

# ── Monitoring ──
htop                    # interactive process viewer
free -h                  # memory usage
uptime                  # how long system running
iostat -x 1             # I/O stats every sec
vmstat 1                # virtual memory stats
lsof -i :8000           # process using port 8000
lsof file.txt           # who has file open
watch -n 1 "docker ps"  # run command periodically

# ── Screen/Tmux ──
screen -S session_name  # start named session
screen -ls              # list sessions
screen -r session_name  # reattach
# Ctrl+A D = detach

# ── Environment ──
echo $PATH
export MY_VAR="value"
source .venv/bin/activate
which python            # find python path
python -m venv .venv    # create virtual environment
```

---

## Bash

```bash
# ── Variables ──
name="Raushan"
echo $name
readonly name           # make read-only
local var="value"       # function-scoped variable
export DB_URL="postgresql://localhost/db"

# ── String Manipulation ──
name="Raushan"
echo ${#name}                    # length: 7
echo ${name:0:3}                 # substring: "Rau"
echo ${name/aus/oh}              # replace: "Rohhan"
echo ${name^^}                   # uppercase: "RAUSHAN"
echo ${name,,}                   # lowercase: "raushan"
echo ${name: -2}                 # last 2: "an"

# ── Arrays ──
files=("a.py" "b.py" "c.py")
echo ${files[0]}                 # "a.py"
echo ${files[@]}                 # all elements
echo ${#files[@]}                # length: 3
files+=("d.py")                  # append
for f in "${files[@]}"; do
    echo $f
done

# ── Conditionals ──
if [ -f "file.txt" ]; then
    echo "File exists"
fi

if [ -d "dir" ]; then
    echo "Directory exists"
fi

if [ -z "$var" ]; then
    echo "Variable is empty"
fi

if [ "$name" == "Raushan" ]; then
    echo "Match!"
elif [ "$name" == "Kumar" ]; then
    echo "Match 2"
else
    echo "No match"
fi

# Logical operators
if [ -f "file" ] && [ -r "file" ]; then
    echo "File exists and readable"
fi

if [ -f "file" ] || [ -f "backup" ]; then
    echo "At least one exists"
fi

# ── Loops ──
for file in *.py; do
    echo "Processing $file"
done

for i in {1..5}; do
    echo "Number $i"
done

while IFS= read -r line; do
    echo "$line"
done < file.txt

counter=0
while [ $counter -lt 5 ]; do
    echo $counter
    ((counter++))
done

# ── Functions ──
function greet {
    local name=$1
    echo "Hello, $name!"
}

greet "Raushan"

# With return value
function add {
    echo $(($1 + $2))
}
result=$(add 5 3)
echo $result  # 8

# ── Redirects ──
cmd > output.txt          # stdout to file
cmd 2> error.txt          # stderr to file
cmd >> output.txt         # append
cmd 2>&1 | tee log.txt    # stdout + stderr to file and terminal
cmd < input.txt           # input from file
cmd &> all.txt            # both stdout and stderr
cmd > /dev/null           # discard output

# ── Common One-liners ──
# Kill process by name
pkill -f "python app.py"

# Count files by extension
find . -name "*.py" | wc -l

# Monitor logs
tail -f app.log

# Compress directory
tar -czf archive.tar.gz directory/

# Extract
tar -xzf archive.tar.gz

# Extract to specific dir
tar -xzf archive.tar.gz -C /target

# Disk usage by directory
du -sh */

# Largest files
find . -type f -exec du -h {} + | sort -rh | head -10

# All IPs connecting to port 80
ss -tn state established '( dport = :80 )'

# Watch command every 2 seconds
watch -n 2 "docker ps"

# Find and replace in all files
find . -type f -name "*.py" -exec sed -i 's/old/new/g' {} +

# Directory size (current)
du -sh .

# Random password
openssl rand -base64 32

# Extract IPs from log
grep -oE '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' access.log | sort -u

# Check if process is running
pgrep -x python && echo "Running" || echo "Not running"

# Time a command
time python train.py

# Disk usage by file type
find . -type f -name "*.jpg" -exec du -ch {} + | tail -1
```

---

## Regex

```python
import re

# ── Common Patterns ──
# Email
r"[\w\.-]+@[\w\.-]+\.\w+"

# URL
r"https?://[\w\.-]+(?:/[\w\./-]*)*"

# Phone (Indian)
r"\+91[-\s]?\d{5}[-\s]?\d{5}"

# Phone (US)
r"\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}"

# Date (ISO)
r"\d{4}-\d{2}-\d{2}"

# Date (DD/MM/YYYY)
r"\d{2}/\d{2}/\d{4}"

# Time (HH:MM:SS)
r"\d{2}:\d{2}:\d{2}"

# IP Address
r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"

# IPv6
r"([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}"

# MAC Address
r"([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})"

# Only letters
r"^[a-zA-Z]+$"

# Alphanumeric with underscore
r"^\w+$"

# Password (min 8, at least 1 letter + 1 number)
r"^(?=.*[A-Za-z])(?=.*\d).{8,}$"

# Strong password (min 8, upper + lower + digit + special)
r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"

# UUID
r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"

# Slug
r"^[a-z0-9]+(?:-[a-z0-9]+)*$"

# HTML tag
r"<[^>]+>"

# Hashtag
r"#\w+"

# Markdown heading
r"^#{1,6}\s.+"

# Non-ASCII characters
r"[^\x00-\x7F]+"

# Whitespace (any)
r"\s+"

# Numbers with commas (thousands)
r"\d{1,3}(?:,\d{3})*"


# ── Advance Pattern: Lookahead / Lookbehind ──
# Positive lookahead: X(?=Y) — match X only if followed by Y
r"\d+(?=px)"             # match "20" in "20px"

# Negative lookahead: X(?!Y) — match X only if NOT followed by Y
r"\d+(?!px)"             # match "20" in "20em"

# Positive lookbehind: (?<=Y)X — match X only if preceded by Y
r"(?<=\$)\d+"            # match "50" in "$50"

# Negative lookbehind: (?<!Y)X — match X only if NOT preceded by Y
r"(?<!\$)\d+"            # match "50" in "50" but not in "$50"

# Word boundary
r"\bword\b"              # match exactly "word" not "password"


# ── Python re module ──

# Match (at beginning)
match = re.search(pattern, text)
if match:
    print(match.group())
    print(match.start(), match.end())

# Find all
emails = re.findall(r"[\w\.-]+@[\w\.-]+\.\w+", text)

# Find all with positions
for match in re.finditer(r"\d+", text):
    print(match.group(), match.start())

# Replace
cleaned = re.sub(r"\s+", " ", text)
# Replace with count
cleaned = re.sub(r"\d+", "[NUM]", text, count=5)

# Replace with function
def capitalize(match):
    return match.group(0).upper()
result = re.sub(r"\b\w+\b", capitalize, text)

# Split
parts = re.split(r"[,;]\s*", text)

# Compile (for reuse)
email_pattern = re.compile(r"[\w\.-]+@[\w\.-]+\.\w+")
matches = email_pattern.findall(text)

# Flags
re.IGNORECASE      # case insensitive
re.MULTILINE       # ^ and $ match start/end of each line
re.DOTALL          # dot matches newlines too
re.VERBOSE         # allow whitespace and comments in pattern

# Verbose example
phone_pattern = re.compile(r"""
    \+?          # optional +
    1?           # country code
    [-.\s]?
    \(?\d{3}\)?  # area code
    [-.\s]?
    \d{3}        # prefix
    [-.\s]?
    \d{4}        # line number
""", re.VERBOSE)


# ── Common Regex Tasks ──

# Extract all URLs from text
urls = re.findall(r"https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+", text)

# Validate email
def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w{2,}$"
    return bool(re.match(pattern, email))

# Remove HTML tags
clean_text = re.sub(r"<[^>]+>", "", html_text)

# Normalize whitespace
normalized = re.sub(r"\s+", " ", text).strip()

# Split camelCase
words = re.findall(r"[A-Z]?[a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\b)", "helloWorldAI")
# ['hello', 'World', 'AI']

# Remove duplicate words
dedup = re.sub(r"\b(\w+)\s+\1\b", r"\1", text)
```

---

## HTTP Status Codes

```bash
# ── 1xx Informational ──
100 Continue           # server received headers, continue sending body
101 Switching Protocols # switching to WebSocket

# ── 2xx Success ──
200 OK                 # everything worked
201 Created            # resource created (POST)
202 Accepted           # request accepted, processing async
204 No Content         # success but no body (DELETE)
206 Partial Content    # range request (partial download)

# ── 3xx Redirection ──
301 Moved Permanently  # resource moved, update links
302 Found              # temporary redirect
304 Not Modified       # use cached version
307 Temporary Redirect # same method, temp redirect
308 Permanent Redirect # same method, permanent

# ── 4xx Client Errors ──
400 Bad Request        # malformed request
401 Unauthorized       # authentication required
403 Forbidden          # authenticated but not allowed
404 Not Found          # resource doesn't exist
405 Method Not Allowed # wrong HTTP method
408 Request Timeout    # client took too long
409 Conflict           # state conflict (duplicate)
422 Unprocessable      # validation error
429 Too Many Requests  # rate limited

# ── 5xx Server Errors ──
500 Internal Server    # generic server error
501 Not Implemented    # method not supported
502 Bad Gateway        # upstream invalid response
503 Service Unavailable # overloaded or down
504 Gateway Timeout    # upstream timed out

# ── AI/API app mein common ──
# 200 OK — most GET responses
# 201 Created — POST /items success
# 204 No Content — DELETE success
# 400 Bad Request — invalid input
# 401 Unauthorized — missing/wrong API key
# 403 Forbidden — valid key but no access
# 404 Not Found — wrong endpoint
# 422 Unprocessable — Pydantic validation error
# 429 Too Many Requests — rate limit hit
# 500 Internal Server — LLM/DB failure
# 503 Service Unavailable — LLM API down
```

---

## Python Virtual Environments & Package Management

```bash
# ── venv (built-in) ──
python -m venv .venv
.venv\Scripts\activate     # Windows
source .venv/bin/activate  # Linux/Mac
deactivate

# ── pip ──
pip install package_name
pip install package==1.2.3       # specific version
pip install "package>=1.0,<2.0"  # version range
pip install -r requirements.txt
pip list                          # installed packages
pip freeze > requirements.txt
pip show package_name             # details
pip uninstall package_name
pip cache purge                   # clear cache

# ── uv (faster pip alternative) ──
uv pip install -r requirements.txt
uv pip sync requirements.txt
uv pip list
uv pip freeze

# ── Poetry (dependency management) ──
poetry new myproject
poetry add fastapi
poetry add --dev pytest
poetry install
poetry shell
poetry build
poetry publish

# ── Requirements patterns ──
# requirements.txt
# fastapi>=0.100,<0.110
# uvicorn[standard]
# httpx
# pytest==7.4.0
# -e .                          # install current package in dev mode

# requirements-prod.txt
# -r requirements.txt           # include base
# gunicorn                      # prod-only
```

---

## Jupyter / Notebook

```python
# ── Magic Commands ──
%run script.py          # run Python file
%timeit func()          # benchmark
%time func()            # time single run
%who                    # list variables
%whos                   # list with types
%pdb                    # debug on exception
%matplotlib inline      # show plots inline
%config Completer.use_jedi = True  # better autocomplete
!pip install pandas      # shell command

# ── IPython Display ──
from IPython.display import display, HTML, Image, Markdown

display(HTML("<h1>Hello</h1>"))
display(Image("chart.png"))
display(Markdown("## Heading"))

# ── Notebook Shortcuts ──
# Esc: command mode
# Enter: edit mode
# Shift+Enter: run cell + select below
# Ctrl+Enter: run cell
# Option+Enter: run cell + insert below
# B: insert cell below
# A: insert cell above
# DD: delete cell
# M: change to markdown
# Y: change to code
# Esc+L: toggle line numbers
```

---

## Docker Compose Reference

```yaml
# docker-compose.yml — typical AI app stack
version: "3.9"

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql+asyncpg://user:pass@db:5432/myapp
      - REDIS_URL=redis://redis:6379/0
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    volumes:
      - .:/app        # for development (hot reload)
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      retries: 3

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d myapp"]
      interval: 10s
      retries: 5

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
    restart: unless-stopped

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

volumes:
  postgres_data:
  redis_data:
  qdrant_data:
```
