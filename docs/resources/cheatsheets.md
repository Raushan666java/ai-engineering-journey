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
from itertools import chain, groupby, product, permutations

# collections
from collections import defaultdict, Counter, deque

# functools
from functools import lru_cache, partial, reduce

# typing
from typing import Optional, List, Dict, Any, Callable


# ── Path / File ──
from pathlib import Path
p = Path("data/file.txt")
p.read_text()
p.write_text("hello")
p.parent, p.stem, p.suffix
list(Path(".").glob("**/*.py"))


# ── JSON ──
import json
data = json.loads(json_string)
json_string = json.dumps(data, indent=2)


# ── HTTP ──
import httpx
resp = httpx.get("https://api.example.com")
resp.json(), resp.status_code
# httpx.AsyncClient() for async


# ── Datetime ──
from datetime import datetime, timezone
now = datetime.now(timezone.utc)
now.isoformat()
```

---

## FastAPI

```python
# ── Route Decorators ──
from fastapi import FastAPI, Query, Path, Body, Depends, HTTPException

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

@app.delete("/items/{item_id}", status_code=204)
async def delete_item(item_id: int):
    return None


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


# ── Pydantic Models ──
from pydantic import BaseModel, Field, EmailStr

class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr
    age: int = Field(ge=0, le=120)
    tags: List[str] = []

    class Config:
        from_attributes = True


# ── CORS ──
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## SQLAlchemy

```python
# ── Model Definition ──
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime, timezone

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


# ── Relationships ──
class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    content = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

    author = relationship("User", back_populates="posts")


User.posts = relationship("Post", back_populates="author")


# ── Common Queries ──
# Create
user = User(name="Raushan", email="raushan@example.com")
db.add(user)
db.commit()
db.refresh(user)

# Read
users = db.query(User).filter(User.is_active == True).all()
user = db.query(User).filter(User.id == 1).first()

# Update
user.name = "Raushan Kumar"
db.commit()

# Delete
db.delete(user)
db.commit()


# ── Async Sessions ──
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

engine = create_async_engine("postgresql+asyncpg://user:pass@localhost/db")
session = AsyncSession(engine)

async with session.begin():
    result = await session.execute(select(User).where(User.id == 1))
    user = result.scalar_one()
```

---

## Docker

```bash
# ── Images ──
docker build -t myapp:latest .
docker build -t myapp:v1.0 --no-cache .
docker images
docker rmi myapp:v1.0

# ── Containers ──
docker run -d --name myapp -p 8000:8000 myapp:latest
docker ps          # running containers
docker ps -a       # all containers
docker stop myapp
docker start myapp
docker rm myapp
docker logs -f myapp

# ── Exec ──
docker exec -it myapp bash

# ── Compose ──
docker compose up -d
docker compose down
docker compose logs -f
docker compose ps
docker compose build
docker compose restart api

# ── Volumes ──
docker volume ls
docker volume prune

# ── Cleanup ──
docker system prune -a   # remove everything unused
docker container prune   # remove stopped containers

# ── Multi-stage build ──
# Stage 1: build
FROM python:3.12-slim AS builder
# ... build deps

# Stage 2: runtime
FROM python:3.12-slim
COPY --from=builder /install /usr/local
```

---

## Git

```bash
# ── Everyday ──
git status
git add .
git commit -m "message"
git push origin main
git pull origin main

# ── Branching ──
git branch feature/new-feature
git checkout feature/new-feature
git checkout -b feature/new-feature   # create + switch
git branch -d feature/new-feature     # delete local
git push origin --delete feature/new-feature  # delete remote

# ── Rebase vs Merge ──
git merge main              # merge main into current
git rebase main             # rebase current on main
# Rebase = cleaner history, merge = preserve context
# For personal branches: rebase. For shared branches: merge

# ── Stash ──
git stash                 # save work in progress
git stash pop             # restore latest stash
git stash list            # list all stashes

# ── Undo ──
git restore file.py       # undo changes (unstaged)
git reset HEAD file.py    # unstage
git reset --soft HEAD~1   # undo last commit, keep changes
git reset --hard HEAD~1   # undo last commit, discard changes

# ── Log ──
git log --oneline -10
git log --graph --oneline --all

# ── Diff ──
git diff                  # unstaged changes
git diff --staged         # staged changes
git diff main..feature    # branch diff
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
)

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)


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


# ── Document Loaders ──
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    UnstructuredMarkdownLoader,
    CSVLoader,
)

loader = PyPDFLoader("document.pdf")
docs = loader.load()


# ── Text Splitters ──
from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    MarkdownHeaderTextSplitter,
)

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ".", " ", ""]
)
chunks = splitter.split_documents(docs)
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

// ── Common Nodes ──
// HTTP Request: GET/POST to any API
// Webhook: Trigger workflow from external system
// OpenAI Node: Chat, embed, complete
// Code Node: JavaScript custom logic
// Function Node: Transform data
// IF Node: Conditional branching
// Wait Node: Delay execution
// Schedule Trigger: Cron-based scheduling

// ── Common Workflow Patterns ──
// 1. Webhook -> OpenAI -> Response
//    Trigger from chat, get LLM response

// 2. Schedule -> HTTP Request -> Transform -> Store
//    Daily data sync

// 3. Webhook -> Code -> IF -> [Slack | Email]
//    Conditional notification

// 4. OpenAI -> Wait -> Code -> Loop
//    Multi-step agent workflow
```

---

## Linux

```bash
# ── File Operations ──
ls -la                    # list all files with details
find . -name "*.py"      # find files
grep -r "pattern" .      # search in files
wc -l file.txt           # count lines
du -sh *                 # directory sizes
df -h                    # disk space
ln -s target link        # symlink

# ── Process Management ──
ps aux                   # all processes
top / htop               # resource monitor
kill -9 PID              # force kill
systemctl status nginx   # service status
journalctl -u nginx -f   # service logs

# ── Networking ──
curl -I https://example.com   # HTTP headers
curl -X POST -d '{"key":"val"}' -H "Content-Type: application/json" URL
nc -zv host port              # port check
ss -tlnp                      # listening ports
ufw status                    # firewall status

# ── systemd ──
systemctl enable myservice
systemctl start myservice
systemctl status myservice
systemctl restart myservice

# ── Permissions ──
chmod +x script.sh        # make executable
chown user:group file     # change owner
chmod -R 755 directory    # recursive
```

---

## Bash

```bash
# ── String Manipulation ──
name="Raushan"
echo ${#name}                    # length
echo ${name:0:3}                 # substring
echo ${name/aus/oh}              # replace
echo ${name^^}                   # uppercase
echo ${name,,}                   # lowercase

# ── Loops ──
for file in *.py; do
    echo "Processing $file"
done

while IFS= read -r line; do
    echo "$line"
done < file.txt

# ── Redirects ──
cmd > output.txt          # stdout to file
cmd 2> error.txt          # stderr to file
cmd >> output.txt         # append
cmd 2>&1 | tee log.txt    # stdout + stderr to file and terminal
cmd < input.txt           # input from file

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

# Disk usage by directory
du -sh */

# All IPs connecting to port 80
ss -tn state established '( dport = :80 )'

# Watch command every 2 seconds
watch -n 2 "docker ps"
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

# Date (ISO)
r"\d{4}-\d{2}-\d{2}"

# IP Address
r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"

# Only letters
r"^[a-zA-Z]+$"

# Alphanumeric with underscore
r"^\w+$"


# ── Python re module ──

# Match (at beginning)
match = re.search(pattern, text)
if match:
    print(match.group())

# Find all
emails = re.findall(r"[\w\.-]+@[\w\.-]+\.\w+", text)

# Replace
cleaned = re.sub(r"\s+", " ", text)

# Split
parts = re.split(r"[,;]\s*", text)

# Flags
re.IGNORECASE
re.MULTILINE
re.DOTALL  # dot matches newlines too
```
