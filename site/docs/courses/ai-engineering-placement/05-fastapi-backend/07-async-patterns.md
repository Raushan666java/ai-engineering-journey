---
id: 07-async-patterns
slug: /ai-engineering-placement/05-fastapi-backend/07-async-patterns
title: "Async Patterns — Concurrency, Background Tasks, and Event-Driven Design"
sidebar_label: "Async Patterns — Concurrency, Background Tasks, and Event-Driven Design"
sidebar_position: 69
---
<!-- Clear Language: Keep sentences under 50 words -->
# Async Patterns — Concurrency, Background Tasks, and Event-Driven Design

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand Python async/await, event loop, and coroutine execution |
| LO2 | Implement async route handlers and non-blocking I/O in FastAPI |
| LO3 | Use BackgroundTasks for post-response processing |
| LO4 | Integrate Celery for distributed task queues |
| LO5 | Implement WebSocket connections for real-time communication |
| LO6 | Design event-driven architectures with message brokers |

## Introduction

FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding async patterns is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how async patterns works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Async Fundamentals | Event loop, coroutines, tasks, awaitables |
| 7.2 | Async Route Handlers | Non-blocking endpoints, async database calls |
| 7.3 | BackgroundTasks | Post-response processing, email, notifications |
| 7.4 | Celery Task Queue | Distributed task processing, scheduling |
| 7.5 | WebSocket Support | Real-time bidirectional communication |
| 7.6 | Event-Driven Design | Event bus, pub/sub patterns |
| 7.7 | Async Best Practices | Blocking code, thread pools, error handling |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Async Concepts] --> B[Async Routes]
    B --> C[BackgroundTasks]
    C --> D[Celery Queue]
    D --> E[WebSockets]
    E --> F[Event-Driven]
    F --> G[Best Practices]
```

## 7.1 Async Fundamentals

Python's async/await enables concurrent execution of I/O-bound operations.

```python
import asyncio
import time

## Coroutine — defined with async def
async def fetch_data(url: str) -> dict:
    print(f"Fetching {url}...")
    await asyncio.sleep(1)  # Simulating I/O
    return {"url": url, "data": "response"}

## Sequential execution
async def sequential():
    result1 = await fetch_data("https://api.example.com/1")
    result2 = await fetch_data("https://api.example.com/2")
    return [result1, result2]  # Takes ~2 seconds

## Concurrent execution with gather
async def concurrent():
    results = await asyncio.gather(
        fetch_data("https://api.example.com/1"),
        fetch_data("https://api.example.com/2"),
        fetch_data("https://api.example.com/3"),
    )
    return results  # Takes ~1 second

## Task creation for fire-and-forget
async def fire_and_forget():
    task = asyncio.create_task(fetch_data("https://api.example.com/background"))
    # Task runs in background while we continue
    await asyncio.sleep(0.1)
    await task  # Wait for completion if needed

## Running async code

## asyncio.run(main())  # Entry point
```

**Async terminology**:

| Term | Description |
|------|-------------|
| Coroutine | Async function defined with `async def` |
| Awaitable | Object that can be awaited (coroutine, task, future) |
| Event Loop | Core of async — schedules and runs tasks |
| Task | Wraps a coroutine for concurrent execution |
| Future | Represents eventual result of async operation |

## 7.2 Async Route Handlers

FastAPI supports both sync and async route handlers.

```python
from fastapi import FastAPI
import httpx

app = FastAPI()

## Async route — non-blocking
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    # Non-blocking HTTP call
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://jsonplaceholder.typicode.com/users/{user_id}")
        return response.json()

## Multiple concurrent external calls
@app.get("/dashboard")
async def get_dashboard(user_id: int):
    async with httpx.AsyncClient() as client:
        # Concurrent API calls
        user_task = client.get(f"https://api.example.com/users/{user_id}")
        orders_task = client.get(f"https://api.example.com/users/{user_id}/orders")
        notifications_task = client.get(f"https://api.example.com/users/{user_id}/notifications")

        user_resp, orders_resp, notif_resp = await asyncio.gather(
            user_task, orders_task, notifications_task
        )

    return {
        "user": user_resp.json(),
        "orders": orders_resp.json(),
        "notifications": notif_resp.json(),
    }

## Sync route — runs in thread pool (doesn't block other requests)
@app.get("/compute")
def compute_heavy():
    # CPU-bound work runs in a thread pool
    # Other async routes can still process requests
    result = heavy_computation()
    return {"result": result}

## Mix sync and async
@app.get("/mixed")
async def mixed():
    # Async I/O
    data = await fetch_from_db()

    # CPU-bound in thread pool
    processed = await asyncio.to_thread(cpu_intensive_function, data)

    return {"processed": processed}
```

**When to use async vs sync routes**:
- **Async**: I/O operations (database, HTTP calls, file reads, WebSocket)
- **Sync**: CPU-bound operations (data processing, image resizing, complex calculations)

## 7.3 BackgroundTasks

FastAPI's BackgroundTasks handle post-response processing.

```python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel, EmailStr

app = FastAPI()

## Define background task functions
def send_welcome_email(email: str, username: str):
    # Runs after response is sent — does not block user
    import time
    time.sleep(2)  # Simulate email sending
    print(f"Welcome email sent to {email} for user {username}")

def log_user_action(user_id: int, action: str):
    with open("user_actions.log", "a") as f:
        f.write(f"User {user_id}: {action}\n")

@app.post("/users", status_code=201)
async def create_user(user: UserCreate, background_tasks: BackgroundTasks):
    # Create user in database
    db_user = await create_user_in_db(user)

    # Schedule background tasks
    background_tasks.add_task(send_welcome_email, user.email, user.name)
    background_tasks.add_task(log_user_action, db_user.id, "user_created")
    background_tasks.add_task(notify_admins, "new_user", db_user.id)

    # Response is sent immediately
    return {"id": db_user.id, "message": "User created"}

## Async background tasks
async def generate_report_async(user_id: int):
    await asyncio.sleep(3)
    print(f"Report generated for user {user_id}")

@app.post("/reports")
async def create_report(user_id: int, background_tasks: BackgroundTasks):
    background_tasks.add_task(generate_report_async, user_id)
    return {"message": "Report generation started"}

## Background task with dependencies
def process_upload(file_path: str, db_session: Session):
    # Heavy file processing
    data = parse_file(file_path)
    for record in data:
        db_session.execute("INSERT INTO processed_data VALUES (...)", record)

@app.post("/upload")
async def upload_file(file: UploadFile, background_tasks: BackgroundTasks):
    content = await file.read()
    file_path = f"/tmp/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(content)

    background_tasks.add_task(process_upload, file_path)
    return {"filename": file.filename, "size": len(content)}
```

**BackgroundTasks limitations**:
- Run in the same process — heavy tasks block the server
- No retry mechanism — if task fails, error is lost
- No monitoring — no visibility into task status
- For production: use Celery or Redis Queue

## 7.4 Celery Task Queue

Celery distributes tasks to worker processes for reliable background processing.

```python

## celery_app.py
from celery import Celery

celery_app = Celery(
    "tasks",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/1",
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    task_acks_late=True,  # Re-deliver on failure
    worker_prefetch_multiplier=1,
)

@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def process_image(self, image_path: str, output_format: str = "webp"):
    try:
        # Heavy image processing
        result = convert_image(image_path, output_format)
        return {"status": "success", "output": result}
    except Exception as exc:
        # Retry with exponential backoff
        raise self.retry(exc=exc, countdown=60 * 2 ** self.request.retries)

@celery_app.task
def send_email_async(to: str, subject: str, body: str):
    send_email(to, subject, body)
    return {"to": to, "status": "sent"}

## FastAPI integration
from fastapi import FastAPI, BackgroundTasks
from celery.result import AsyncResult

app = FastAPI()

@app.post("/process-image")
async def process_image_endpoint(image_path: str):
    task = process_image.delay(image_path, "webp")
    return {"task_id": task.id, "status": "processing"}

@app.get("/tasks/{task_id}")
async def get_task_status(task_id: str):
    result = AsyncResult(task_id, app=celery_app)
    return {
        "task_id": task_id,
        "status": result.status,
        "result": result.result if result.ready() else None,
    }

## Periodic tasks (Celery Beat)

## celery -A tasks beat
from celery.schedules import crontab

celery_app.conf.beat_schedule = {
    "daily-report": {
        "task": "tasks.generate_daily_report",
        "schedule": crontab(hour=0, minute=0),  # Midnight
    },
    "health-check": {
        "task": "tasks.health_check",
        "schedule": 300.0,  # Every 5 minutes
    },
}
```

## 7.5 WebSocket Support

FastAPI supports WebSocket connections for real-time communication.

```python
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import Set
import json

app = FastAPI()

## Simple echo WebSocket
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Echo: {data}")
    except WebSocketDisconnect:
        print("Client disconnected")

## Chat room with connection manager
class ConnectionManager:
    def __init__(self):
        self.active_connections: dict[str, Set[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room: str):
        await websocket.accept()
        if room not in self.active_connections:
            self.active_connections[room] = set()
        self.active_connections[room].add(websocket)

    def disconnect(self, websocket: WebSocket, room: str):
        if room in self.active_connections:
            self.active_connections[room].discard(websocket)

    async def broadcast(self, room: str, message: dict):
        if room not in self.active_connections:
            return
        disconnected = set()
        for connection in self.active_connections[room]:
            try:
                await connection.send_json(message)
            except WebSocketDisconnect:
                disconnected.add(connection)

        self.active_connections[room] -= disconnected

manager = ConnectionManager()

@app.websocket("/ws/chat/{room}")
async def chat_websocket(websocket: WebSocket, room: str, username: str = "Anonymous"):
    await manager.connect(websocket, room)
    await manager.broadcast(room, {
        "type": "system",
        "message": f"{username} joined the chat"
    })

    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            await manager.broadcast(room, {
                "type": "message",
                "username": username,
                "content": message.get("content", ""),
                "timestamp": message.get("timestamp"),
            })
    except WebSocketDisconnect:
        manager.disconnect(websocket, room)
        await manager.broadcast(room, {
            "type": "system",
            "message": f"{username} left the chat"
        })

## Dependencies in WebSocket
from fastapi import Depends, WebSocket, status

async def get_token_from_websocket(websocket: WebSocket) -> str:
    token = websocket.query_params.get("token")
    if not token:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        return None
    return token

@app.websocket("/ws/protected")
async def protected_ws(websocket: WebSocket, token: str = Depends(get_token_from_websocket)):
    await websocket.accept()
    user = verify_token(token)
    await websocket.send_json({"message": f"Welcome {user.name}"})

    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Hello, {user.name}! You said: {data}")
    except WebSocketDisconnect:
        print("Client disconnected")
```

## 7.6 Event-Driven Design

Event-driven architecture decouples components through events.

```python
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from datetime import datetime
import asyncio
from typing import Callable, Awaitable

## Simple event bus implementation
class EventBus:
    def __init__(self):
        self.subscribers: dict[str, list[Callable]] = {}

    def subscribe(self, event_type: str, handler: Callable):
        if event_type not in self.subscribers:
            self.subscribers[event_type] = []
        self.subscribers[event_type].append(handler)

    def unsubscribe(self, event_type: str, handler: Callable):
        if event_type in self.subscribers:
            self.subscribers[event_type].remove(handler)

    async def publish(self, event_type: str, data: dict):
        if event_type not in self.subscribers:
            return
        for handler in self.subscribers[event_type]:
            try:
                if asyncio.iscoroutinefunction(handler):
                    await handler(event_type, data)
                else:
                    handler(event_type, data)
            except Exception as e:
                print(f"Handler failed for {event_type}: {e}")

event_bus = EventBus()
app = FastAPI()

## Event handlers
async def on_user_registered(event_type: str, data: dict):
    print(f"Sending welcome email to {data['email']}")

async def on_user_registered_notification(event_type: str, data: dict):
    print(f"Sending push notification to user {data['user_id']}")

def on_user_registered_analytics(event_type: str, data: dict):
    print(f"Logging analytics: user {data['user_id']} registered")

## Register handlers
event_bus.subscribe("user.registered", on_user_registered)
event_bus.subscribe("user.registered", on_user_registered_notification)
event_bus.subscribe("user.registered", on_user_registered_analytics)

class UserRegistered(BaseModel):
    user_id: int
    email: str
    name: str
    timestamp: datetime

@app.post("/auth/register", status_code=201)
async def register(user_data: UserCreate):
    user = await create_user(user_data)

    # Publish event — all handlers execute asynchronously
    await event_bus.publish("user.registered", UserRegistered(
        user_id=user.id,
        email=user.email,
        name=user.name,
        timestamp=datetime.now()
    ).model_dump())

    return {"id": user.id, "message": "User registered"}

## Message broker integration (Redis pub/sub)
import redis.asyncio as redis

class RedisEventBus:
    def __init__(self):
        self.redis = None

    async def connect(self):
        self.redis = await redis.from_url("redis://localhost:6379")

    async def publish(self, channel: str, message: dict):
        await self.redis.publish(channel, json.dumps(message))

    async def subscribe(self, channel: str, handler: Callable):
        pubsub = self.redis.pubsub()
        await pubsub.subscribe(channel)
        async for message in pubsub.listen():
            if message["type"] == "message":
                data = json.loads(message["data"])
                await handler(data)
```

## 7.7 Async Best Practices

```python
from fastapi import FastAPI
import asyncio
import concurrent.futures
from typing import Any
import time

app = FastAPI()

## Avoid blocking the event loop

## BAD — blocks entire server
@app.get("/bad")
async def bad_endpoint():
    time.sleep(5)  # Blocks the event loop — all requests hang
    return {"status": "done"}

## GOOD — async sleep
@app.get("/good")
async def good_endpoint():
    await asyncio.sleep(5)  # Non-blocking — other requests processed
    return {"status": "done"}

## Run CPU-bound work in thread pool
executor = concurrent.futures.ThreadPoolExecutor(max_workers=4)

def cpu_intensive(data: dict) -> dict:
    time.sleep(2)  # Simulating CPU work
    return {"processed": data}

@app.get("/process")
async def process_data():
    loop = asyncio.get_running_loop()
    result = await loop.run_in_executor(executor, cpu_intensive, {"input": "data"})
    return result

## Async context managers for resource management
from contextlib import asynccontextmanager

class AsyncResource:
    async def __aenter__(self):
        await self.connect()
        return self

    async def __aexit__(self, *args):
        await self.disconnect()

    async def connect(self):
        await asyncio.sleep(1)

    async def disconnect(self):
        await asyncio.sleep(0.5)

async def use_resource():
    async with AsyncResource() as res:
        print("Using resource")

## Timeout for async operations
from asyncio import timeout

@app.get("/external")
async def call_external():
    try:
        async with timeout(5.0):  # 5 second timeout
            async with httpx.AsyncClient() as client:
                response = await client.get("https://api.example.com/data")
                return response.json()
    except asyncio.TimeoutError:
        raise HTTPException(status_code=504, detail="External API timeout")

## Rate limiting with asyncio
from asyncio import Semaphore

semaphore = Semaphore(10)  # Max 10 concurrent external calls

async def rate_limited_request(url: str) -> dict:
    async with semaphore:
        async with httpx.AsyncClient() as client:
            return await client.get(url)

@app.get("/batch-fetch")
async def batch_fetch():
    urls = [f"https://api.example.com/items/{i}" for i in range(100)]
    tasks = [rate_limited_request(url) for url in urls]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    return {"results": [r for r in results if not isinstance(r, Exception)]}
```

---

## TypeScript Parallel

```typescript
import { Worker } from "bullmq";

// Background job processing
const worker = new Worker("email-queue", async (job) => {
  const { to, subject, body } = job.data;
  await sendEmail(to, subject, body);
});

// Async patterns in Express
app.post("/users", async (req, res) => {
  const user = await db.createUser(req.body);
  // Fire and forget — non-blocking
  Promise.all([
    sendWelcomeEmail(user.email),
    logAnalytics("user_created", user.id),
    notifyAdmins("new_user", user.id),
  ]).catch(console.error);
  res.status(201).json(user);
});

// WebSocket in Node.js
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => client.send(data));
  });
});
```

---

## Summary

- Async/await enables non-blocking I/O operations using coroutines and an event loop
- FastAPI supports both async (preferred for I/O) and sync (for CPU-bound) route handlers
- BackgroundTasks run after response is sent — simple but limited to same process
- Celery provides distributed task queues with retries, scheduling, and monitoring
- WebSockets enable real-time bidirectional communication between client and server
- Event-driven architecture decouples components through publish/subscribe patterns
- Always use async libraries (httpx.AsyncClient, asyncpg, aiofiles) with FastAPI
- Use run_in_executor for CPU-bound work to avoid blocking the event loop
- Set timeouts on all external calls to prevent cascading failures
- Use Semaphore for rate limiting concurrent async operations

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| I/O operations | async/await with non-blocking libs | time.sleep() in async routes |
| Background work | Celery for production | BackgroundTasks for heavy work |
| Real-time | WebSocket with connection manager | Polling (resource waste) |
| CPU-intensive | run_in_executor with thread pool | Direct execution in async route |
| External APIs | asyncio.gather for parallel calls | Sequential await chains |
| Error handling | try/except in coroutines | Unhandled exceptions |
| Rate limiting | asyncio.Semaphore | Unlimited concurrent requests |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s07-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: How does Python async/await work?</summary>
  <div class="tp-qa-answer"><p>Async functions are coroutines. When a coroutine hits await, it suspends execution and yields control back to the event loop. The event loop runs other tasks until the awaited operation completes. This allows concurrent I/O without threads. The event loop schedules and switches between coroutines cooperatively.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What's the difference between BackgroundTasks and Celery?</summary>
  <div class="tp-qa-answer"><p>BackgroundTasks run in the same process after the response — simple but limited. Celery runs in separate worker processes, supports retries, task monitoring, scheduling (Celery Beat), and horizontal scaling. Use BackgroundTasks for lightweight tasks (logging, notifications). Use Celery for production-grade background processing.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How do you handle WebSocket disconnections?</summary>
  <div class="tp-qa-answer"><p>Catch WebSocketDisconnect exception in the receive loop. Remove the connection from active connections. Notify other clients about the disconnection. Implement reconnection logic on the client side. Use heartbeat/ping-pong to detect silent disconnections.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: How do you run CPU-bound code in async FastAPI?</summary>
  <div class="tp-qa-answer"><p>Use loop.run_in_executor() with a ThreadPoolExecutor or ProcessPoolExecutor. This offloads CPU work to a thread/process pool, preventing event loop blocking. For pure CPU work, use ProcessPoolExecutor to avoid GIL limitations. Example: result = await loop.run_in_executor(None, cpu_function, arg).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is the event loop in Python asyncio?</summary>
  <div class="tp-qa-answer"><p>The event loop is the core of asyncio — it runs tasks and callbacks, performs network I/O operations, and schedules coroutines. It uses cooperative multitasking: coroutines voluntarily yield control at await points. FastAPI's ASGI server (uvicorn) runs the event loop and handles incoming HTTP requests as tasks.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you implement Pub/Sub in FastAPI?</summary>
  <div class="tp-qa-answer"><p>Use an event bus (in-process for simple cases) or Redis pub/sub for distributed events. The event bus maintains subscriber lists. When an event is published, all subscribers are notified. For distributed systems, use Redis pub/sub or RabbitMQ to broadcast events across multiple application instances.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is the GIL and how does it affect async Python?</summary>
  <div class="tp-qa-answer"><p>The Global Interpreter Lock (GIL) prevents multiple threads from executing Python bytecode simultaneously. CPU-bound threads cannot run in parallel. Async I/O works around the GIL because I/O operations release the GIL. For CPU-bound work in async apps, use ProcessPoolExecutor to bypass the GIL with separate processes.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you set timeouts on async operations?</summary>
  <div class="tp-qa-answer"><p>Use asyncio.timeout() (Python 3.11+) or asyncio.wait_for(). Example: async with asyncio.timeout(5): result = await slow_operation(). If the operation exceeds the timeout, asyncio.TimeoutError is raised. Always set timeouts on external API calls, database queries, and any operation that could hang indefinitely.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What are the limitations of BackgroundTasks?</summary>
  <div class="tp-qa-answer"><p>BackgroundTasks run in the same process — heavy tasks block the server. No retry mechanism (failures are lost silently). No monitoring or status tracking. Cannot scale independently. For production background processing, use Celery with proper retry logic, monitoring, and worker scaling.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s07-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you design async error handling?</summary>
  <div class="tp-qa-answer"><p>Wrap async operations in try/except blocks. Use return_exceptions=True in asyncio.gather to handle individual task failures. Create async exception handlers with @app.exception_handler. Set up logging in async handlers. Use structured logging with correlation IDs for tracing across async boundaries.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What keyword allows coroutines to yield control to the event loop?

a) async
b) yield
c) await
d) return

<details class="tp-qa-card" data-qid="fastapi-s07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) await</strong></p></div></details>

**Q2**: Which tool is best for production background task processing?

a) BackgroundTasks
b) Celery
c) Threading
d) Subprocess

<details class="tp-qa-card" data-qid="fastapi-s07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Celery</strong></p></div></details>

**Q3**: What exception indicates WebSocket disconnection?

a) ConnectionError
b) WebSocketDisconnect
c) DisconnectError
d) SocketError

<details class="tp-qa-card" data-qid="fastapi-s07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) WebSocketDisconnect</strong></p></div></details>

**Q4**: Which function runs CPU-bound code without blocking the event loop?

a) asyncio.run()
b) loop.call_soon()
c) loop.run_in_executor()
d) asyncio.create_task()

<details class="tp-qa-card" data-qid="fastapi-s07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) loop.run_in_executor()</strong></p></div></details>

**Q5**: What is used for rate-limiting concurrent async operations?

a) Lock
b) Event
c) Semaphore
d) Condition

<details class="tp-qa-card" data-qid="fastapi-s07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Semaphore</strong></p></div></details>

## Exercises

**Easy** — Create a FastAPI endpoint that makes 3 concurrent HTTP requests using asyncio.gather. Compare performance with sequential requests.

**Medium** — Implement a WebSocket chat room with: user join/leave notifications, message broadcasting, and connection tracking. Handle disconnections gracefully.

**Medium** — Build a Celery task system for image processing: resize, format conversion, and thumbnail generation. Create FastAPI endpoints to submit tasks and check status.

**Hard** — Design an event-driven notification system: User registers -> publish "user.registered" event -> send welcome email, push notification, and analytics (all async handlers). Use Redis pub/sub for cross-process communication.

**Hard** — Build a real-time dashboard with WebSocket streaming: server pushes metrics every second, multiple clients can connect and receive live updates. Include reconnection handling and message rate limiting.

---

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Async Patterns — Concurrency, Background Tasks, and Event-Driven Design. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Async Patterns — Concurrency, Background Tasks, and Event-Driven Design from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Async Patterns — Concurrency, Background Tasks, and Event-Driven Design with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Async Patterns — Concurrency, Background Tasks, and Event-Driven Design behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Async Patterns — Concurrency, Background Tasks, and Event-Driven Design explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Async Patterns — Concurrency, Background Tasks, and Event-Driven Design").
- Add a bullet describing a project that applies Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to real data, with numbers.
- Mention the tools and libraries you used alongside Async Patterns — Concurrency, Background Tasks, and Event-Driven Design (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design and one real-world analogy.
- Prepare one STAR story about debugging a Async Patterns — Concurrency, Background Tasks, and Event-Driven Design-related production issue.
- Review complexity and edge cases for the classic Async Patterns — Concurrency, Background Tasks, and Event-Driven Design interview problem.
- Have questions ready: how does the team apply Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Async Patterns — Concurrency, Background Tasks, and Event-Driven Design builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Async Patterns — Concurrency, Background Tasks, and Event-Driven Design chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Async Patterns — Concurrency, Background Tasks, and Event-Driven Design issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Async Patterns — Concurrency, Background Tasks, and Event-Driven Design that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Async Patterns — Concurrency, Background Tasks, and Event-Driven Design when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Async Patterns — Concurrency, Background Tasks, and Event-Driven Design twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Async Patterns — Concurrency, Background Tasks, and Event-Driven Design snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design listed in the Chapter at a Glance table.
- **Story**: link Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design
- The classic textbook chapter on Async Patterns — Concurrency, Background Tasks, and Event-Driven Design (check the Research References below)
- Two blog posts from engineers who debugged real Async Patterns — Concurrency, Background Tasks, and Event-Driven Design problems in production
- The repository of the open-source project that implements Async Patterns — Concurrency, Background Tasks, and Event-Driven Design

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design
- The next chapter (see Next Topic below) — builds on Async Patterns — Concurrency, Background Tasks, and Event-Driven Design
- The system design chapters in Module 07 — how Async Patterns — Concurrency, Background Tasks, and Event-Driven Design fits into production architectures
- The interview preparation module — how Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is asked in screening rounds
- The capstone project — where Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is applied end-to-end

## FAQs

1. **Do I need to memorize all of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Async Patterns — Concurrency, Background Tasks, and Event-Driven Design asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Async Patterns — Concurrency, Background Tasks, and Event-Driven Design emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Async Patterns — Concurrency, Background Tasks, and Event-Driven Design — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Async Patterns — Concurrency, Background Tasks, and Event-Driven Design changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Async Patterns — Concurrency, Background Tasks, and Event-Driven Design appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Async Patterns — Concurrency, Background Tasks, and Event-Driven Design helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Async Patterns — Concurrency, Background Tasks, and Event-Driven Design concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Async Patterns — Concurrency, Background Tasks, and Event-Driven Design skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Async Patterns — Concurrency, Background Tasks, and Event-Driven Design skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="05fastapibackend-07asyncpatterns-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What keyword allows coroutines to yield control to the event loop?
  </summary>
  <div class="tp-qa-answer">
    <p>c) await</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-07asyncpatterns-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which tool is best for production background task processing?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Celery</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-07asyncpatterns-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What exception indicates WebSocket disconnection?
  </summary>
  <div class="tp-qa-answer">
    <p>b) WebSocketDisconnect</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-07asyncpatterns-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which function runs CPU-bound code without blocking the event loop?
  </summary>
  <div class="tp-qa-answer">
    <p>c) loop.run_in_executor()</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-07asyncpatterns-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is used for rate-limiting concurrent async operations?
  </summary>
  <div class="tp-qa-answer">
    <p>c) Semaphore</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design (linked in Further Reading)
- The classic paper or textbook chapter introducing Async Patterns — Concurrency, Background Tasks, and Event-Driven Design (see References below)
- The standard library reference for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design-related functions
- Engineering blog posts from companies running Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Async Patterns — Concurrency, Background Tasks, and Event-Driven Design

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Async Patterns — Concurrency, Background Tasks, and Event-Driven Design code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Async Patterns — Concurrency, Background Tasks, and Event-Driven Design example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Async Patterns — Concurrency, Background Tasks, and Event-Driven Design in 60 seconds.
- Write a minimal working example of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Async Patterns — Concurrency, Background Tasks, and Event-Driven Design problem in a project.
- How would you design a system where Async Patterns — Concurrency, Background Tasks, and Event-Driven Design is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Async Patterns — Concurrency, Background Tasks, and Event-Driven Design.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Async Patterns — Concurrency, Background Tasks, and Event-Driven Design logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Async Patterns — Concurrency, Background Tasks, and Event-Driven Design without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Async Patterns — Concurrency, Background Tasks, and Event-Driven Design daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Async Patterns — Concurrency, Background Tasks, and Event-Driven Design patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Async Patterns — Concurrency, Background Tasks, and Event-Driven Design principles apply to transaction validation and fraud detection flows.
- **ML platform**: Async Patterns — Concurrency, Background Tasks, and Event-Driven Design shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Async Patterns — Concurrency, Background Tasks, and Event-Driven Design to the business outcome, not just the code.

## Next Topic

[Testing FastAPI — Unit Tests, Integration Tests, and TDD](08-testing-fastapi.md)

## Limitations

- Async Patterns — Concurrency, Background Tasks, and Event-Driven Design, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Async Patterns — Concurrency, Background Tasks, and Event-Driven Design depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
