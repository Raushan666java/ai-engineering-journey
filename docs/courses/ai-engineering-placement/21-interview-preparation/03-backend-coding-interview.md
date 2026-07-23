<!-- Clear Language: Keep sentences under 50 words -->
# Backend Coding Interview

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Design and implement RESTful API endpoints with proper status codes and error handling |
| LO2 | Build middleware chains for authentication, logging, rate limiting, and error handling |
| LO3 | Handle concurrency patterns: threading, asyncio, multiprocessing, and synchronization primitives |
| LO4 | Implement caching strategies with Redis and in-memory caches |
| LO5 | Write unit, integration, and end-to-end tests for backend code |
| LO6 | Design scalable backend architectures including microservices, message queues, and event-driven patterns |

## Introduction

Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding backend coding interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how backend coding interview works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | API Design | RESTful principles, status codes, versioning, HATEOAS |
| 3.2 | Middleware | Authentication, logging, rate limiting, error handling |
| 3.3 | Concurrency | Threading, asyncio, multiprocessing, GIL, synchronization |
| 3.4 | Caching | Redis, in-memory cache, cache invalidation strategies |
| 3.5 | Testing | Unit, integration, E2E, mocking, test doubles |
| 3.6 | Message Queues | RabbitMQ, Kafka, Celery, event-driven patterns |
| 3.7 | Microservices | Service decomposition, API gateway, service discovery |
| 3.8 | Security | Authentication, authorization, input validation, rate limiting |

## Chapter Roadmap

```mermaid
flowchart LR
    A[API Design] --> B[Middleware]
    B --> C[Concurrency]
    C --> D[Caching]
    D --> E[Testing]
    E --> F[Message Queues]
    F --> G[Microservices]
    G --> H[Security]
```text

## 3.1 API Design

A well-designed REST API follows consistent conventions and uses HTTP semantics correctly.

**URL conventions**: Use nouns for resources (`/users`, `/orders`), plural names, lowercase with hyphens. Nest resources hierarchically (`/users/{id}/orders`). Query parameters for filtering, sorting, and pagination.

**HTTP methods**: GET for retrieval (safe, idempotent), POST for creation (not idempotent), PUT for full replacement (idempotent), PATCH for partial update, DELETE for removal (idempotent).

**Status codes**: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error.

```python
from fastapi import FastAPI, HTTPException, Query, status
from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum

app = FastAPI()

class OrderStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"

class OrderCreate(BaseModel):
    user_id: int = Field(..., gt=0)
    items: list[int] = Field(..., min_length=1)
    shipping_address: str = Field(..., min_length=10, max_length=500)

class OrderResponse(BaseModel):
    id: int
    user_id: int
    status: OrderStatus
    total: float
    created_at: str

orders_db: dict[int, dict] = {}

@app.post("/orders", status_code=status.HTTP_201_CREATED, response_model=OrderResponse)
def create_order(order: OrderCreate):
    new_id = len(orders_db) + 1
    orders_db[new_id] = {
        "id": new_id,
        "user_id": order.user_id,
        "status": OrderStatus.PENDING,
        "total": 0.0,
        "created_at": "2024-01-15T10:30:00Z"
    }
    return orders_db[new_id]

@app.get("/orders", response_model=list[OrderResponse])
def list_orders(
    status: Optional[OrderStatus] = Query(None),
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100)
):
    result = list(orders_db.values())
    if status:
        result = [o for o in result if o["status"] == status]
    start = (page - 1) * size
    return result[start:start + size]

@app.get("/orders/{order_id}", response_model=OrderResponse)
def get_order(order_id: int):
    if order_id not in orders_db:
        raise HTTPException(status_code=404, detail="Order not found")
    return orders_db[order_id]

@app.patch("/orders/{order_id}/cancel", response_model=OrderResponse)
def cancel_order(order_id: int):
    if order_id not in orders_db:
        raise HTTPException(status_code=404, detail="Order not found")
    order = orders_db[order_id]
    if order["status"] not in (OrderStatus.PENDING, OrderStatus.CONFIRMED):
        raise HTTPException(status_code=409, detail="Order cannot be cancelled")
    order["status"] = OrderStatus.CANCELLED
    return order
```text

**API versioning**: Use URL-based versioning (`/v1/orders`) or header-based versioning (`Accept: application/vnd.api.v1+json`). URL-based is simpler for initial versions.

---

## 3.2 Middleware

Middleware sits between the request and the handler, processing every request/response. Common middleware includes authentication, logging, rate limiting, request validation, and CORS.

```python
import time
import logging
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from collections import defaultdict

logger = logging.getLogger(__name__)

## Request timing middleware
class TimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start = time.perf_counter()
        response = await call_next(request)
        elapsed = time.perf_counter() - start
        response.headers["X-Processing-Time"] = str(elapsed)
        logger.info(f"{request.method} {request.url.path} - {elapsed:.3f}s")
        return response

## Rate limiting middleware (in-memory, per IP)
class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_requests: int = 100, window_seconds: int = 60):
        super().__init__(app)
        self.max_requests = max_requests
        self.window = window_seconds
        self.requests: dict[str, list[float]] = defaultdict(list)

    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host if request.client else "unknown"
        now = time.time()
        self.requests[client_ip] = [
            t for t in self.requests[client_ip] if now - t < self.window
        ]
        if len(self.requests[client_ip]) >= self.max_requests:
            return Response(status_code=429, content="Too many requests")
        self.requests[client_ip].append(now)
        return await call_next(request)

## JWT authentication middleware
class JWTAuthMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, excluded_paths: set[str] = None):
        super().__init__(app)
        self.excluded_paths = excluded_paths or {"/health", "/docs", "/openapi.json"}

    async def dispatch(self, request: Request, call_next):
        if request.url.path in self.excluded_paths:
            return await call_next(request)
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            return Response(status_code=401, content="Missing or invalid token")
        token = auth_header[7:]
        try:
            # Decode JWT and attach user info to request
            payload = self.decode_jwt(token)
            request.state.user = payload
        except Exception:
            return Response(status_code=401, content="Invalid token")
        return await call_next(request)

    def decode_jwt(self, token: str) -> dict:
        import jwt
        return jwt.decode(token, "secret-key", algorithms=["HS256"])

## Register middleware
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
app.add_middleware(TimingMiddleware)
app.add_middleware(RateLimitMiddleware, max_requests=60, window_seconds=60)
```text

**Middleware order matters**: Middleware is executed in the order it's added. Put broad middleware (CORS, timing) first, then authentication, then rate limiting.

---

## 3.3 Concurrency

Python offers three concurrency models. Understanding when to use each is critical for backend interviews.

**Threading**: Best for I/O-bound tasks (network requests, file I/O). Limited by the GIL (Global Interpreter Lock) for CPU-bound work.

**Asyncio**: Single-threaded cooperative multitasking. Best for high-concurrency I/O bound workloads (web servers, API gateways). Uses async/await syntax.

**Multiprocessing**: Bypasses the GIL with separate processes. Best for CPU-bound tasks (image processing, ML inference).

```python
import asyncio
import threading
import concurrent.futures
import time
from typing import Any

## Threading example — downloading multiple URLs
def fetch_url(url: str) -> str:
    import requests
    response = requests.get(url, timeout=10)
    return f"{url}: {len(response.content)} bytes"

def threaded_fetch(urls: list[str]) -> list[str]:
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        results = list(executor.map(fetch_url, urls))
    return results

## Asyncio example — non-blocking I/O
async def async_fetch(session, url: str) -> str:
    async with session.get(url) as response:
        data = await response.read()
        return f"{url}: {len(data)} bytes"

async def async_fetch_all(urls: list[str]) -> list[str]:
    import aiohttp
    async with aiohttp.ClientSession() as session:
        tasks = [async_fetch(session, url) for url in urls]
        return await asyncio.gather(*tasks)

## Multiprocessing example — CPU-bound computation
def compute_heavy(n: int) -> int:
    return sum(i * i for i in range(n))

def parallel_compute(values: list[int]) -> list[int]:
    with concurrent.futures.ProcessPoolExecutor(max_workers=4) as executor:
        results = list(executor.map(compute_heavy, values))
    return results

## Synchronization primitives — thread-safe counter
class ThreadSafeCounter:
    def __init__(self):
        self._value = 0
        self._lock = threading.Lock()

    def increment(self) -> int:
        with self._lock:
            self._value += 1
            return self._value

    @property
    def value(self) -> int:
        with self._lock:
            return self._value

## Async producer-consumer pattern
async def producer(queue: asyncio.Queue, n: int):
    for i in range(n):
        await queue.put(f"item-{i}")
        await asyncio.sleep(0.01)
    await queue.put(None)  # sentinel

async def consumer(queue: asyncio.Queue, name: str):
    while True:
        item = await queue.get()
        if item is None:
            queue.task_done()
            break
        print(f"{name} processed {item}")
        queue.task_done()

async def run_pipeline():
    queue = asyncio.Queue(maxsize=10)
    producers = [asyncio.create_task(producer(queue, 20))]
    consumers = [asyncio.create_task(consumer(queue, f"worker-{i}")) for i in range(3)]
    await asyncio.gather(*producers)
    await queue.join()
    for c in consumers:
        c.cancel()
```text

**GIL implications**: For CPU-bound Python code, threading doesn't provide parallelism. Use multiprocessing, C extensions (NumPy), or alternative runtimes (Jython, IronPython). For I/O-bound code, asyncio is the most efficient model.

---

## 3.4 Caching

Caching reduces latency and database load. Master these patterns for backend interviews.

**In-memory cache**: Fastest but limited by available RAM. Use `functools.lru_cache` for function results or a custom TTL-based cache.

**Redis**: Distributed cache with built-in eviction policies (LRU, LFU, TTL). Supports data structures (strings, hashes, lists, sets, sorted sets).

**Cache invalidation**: The hardest problem in computer science. Strategies include TTL-based expiration, write-through (update cache on write), write-behind (async update), and cache-aside (application manages cache).

```python
import time
import json
from functools import lru_cache
from typing import Any, Optional
import redis

## In-memory cache with TTL
class TTLCache:
    def __init__(self, ttl_seconds: int = 300):
        self._cache: dict[str, tuple[float, Any]] = {}
        self.ttl = ttl_seconds

    def get(self, key: str) -> Optional[Any]:
        if key not in self._cache:
            return None
        expires_at, value = self._cache[key]
        if time.time() > expires_at:
            del self._cache[key]
            return None
        return value

    def set(self, key: str, value: Any) -> None:
        self._cache[key] = (time.time() + self.ttl, value)

    def invalidate(self, key: str) -> None:
        self._cache.pop(key, None)

## Cache-aside pattern with Redis
class RedisCache:
    def __init__(self, host: str = "localhost", port: int = 6379, db: int = 0, default_ttl: int = 300):
        self.client = redis.Redis(host=host, port=port, db=db, decode_responses=True)
        self.default_ttl = default_ttl

    def get(self, key: str) -> Optional[str]:
        return self.client.get(key)

    def set(self, key: str, value: str, ttl: Optional[int] = None) -> None:
        self.client.setex(key, ttl or self.default_ttl, value)

    def delete(self, *keys: str) -> None:
        self.client.delete(*keys)

    def remember(self, key: str, fetch_func, ttl: Optional[int] = None) -> str:
        cached = self.get(key)
        if cached is not None:
            return cached
        value = fetch_func()
        self.set(key, str(value), ttl)
        return str(value)

## Using lru_cache for expensive function calls
@lru_cache(maxsize=128)
def get_user_permissions(user_id: int) -> list[str]:
    # Expensive database query
    return ["read", "write", "admin"]

## Cache invalidation example
class UserService:
    def __init__(self, cache: RedisCache):
        self.cache = cache

    def get_user(self, user_id: int) -> dict:
        cache_key = f"user:{user_id}"
        result = self.cache.get(cache_key)
        if result:
            return json.loads(result)
        user = self._fetch_from_db(user_id)
        self.cache.set(cache_key, json.dumps(user), ttl=3600)
        return user

    def update_user(self, user_id: int, data: dict) -> dict:
        user = self._update_in_db(user_id, data)
        # Invalidate cache on write (write-invalidate pattern)
        self.cache.delete(f"user:{user_id}")
        return user

    def _fetch_from_db(self, user_id: int) -> dict:
        return {"id": user_id, "name": "Alice"}

    def _update_in_db(self, user_id: int, data: dict) -> dict:
        return {"id": user_id, **data}
```text

**Common cache strategies**: Cache-aside is the most common — application checks cache first, loads from DB on miss, stores in cache. Read-through cache sits between app and DB transparently. Write-through updates cache synchronously on writes.

---

## 3.5 Testing

Backend testing spans multiple levels. Be prepared to discuss and write tests in interviews.

**Unit tests**: Test individual functions/classes in isolation. Mock external dependencies. Fast execution.

**Integration tests**: Test components together with real or test databases. Verify API contracts.

**End-to-end tests**: Test the full system from external API to database. Slow but catch systemic issues.

```python
import pytest
from fastapi.testclient import TestClient
from unittest.mock import Mock, patch
from datetime import datetime

## Unit test — testing business logic in isolation
def calculate_discount(order_total: float, loyalty_years: int) -> float:
    if loyalty_years >= 5:
        return order_total * 0.15
    if loyalty_years >= 2:
        return order_total * 0.10
    if order_total > 1000:
        return order_total * 0.05
    return 0.0

class TestCalculateDiscount:
    def test_loyalty_discount_5_years(self):
        assert calculate_discount(1000, 5) == 150.0

    def test_loyalty_discount_2_years(self):
        assert calculate_discount(1000, 2) == 100.0

    def test_high_value_discount(self):
        assert calculate_discount(1500, 0) == 75.0

    def test_no_discount(self):
        assert calculate_discount(500, 0) == 0.0

## API integration test with FastAPI TestClient
from main import app

client = TestClient(app)

class TestOrderAPI:
    def test_create_order(self):
        response = client.post("/orders", json={
            "user_id": 1,
            "items": [101, 102],
            "shipping_address": "123 Main St, City, Country"
        })
        assert response.status_code == 201
        data = response.json()
        assert data["user_id"] == 1
        assert data["status"] == "pending"

    def test_get_order_not_found(self):
        response = client.get("/orders/999")
        assert response.status_code == 404
        assert "not found" in response.json()["detail"].lower()

    def test_list_orders_with_filter(self):
        response = client.get("/orders?status=pending&page=1&size=10")
        assert response.status_code == 200
        assert isinstance(response.json(), list)

## Mocking external dependencies
class EmailService:
    def send_welcome_email(self, user_email: str) -> bool:
        # Calls external SMTP server
        raise NotImplementedError

class UserRegistration:
    def __init__(self, email_service: EmailService, db):
        self.email_service = email_service
        self.db = db

    def register(self, email: str, name: str) -> dict:
        if self.db.find_user_by_email(email):
            raise ValueError("User already exists")
        user = self.db.create_user(email, name)
        self.email_service.send_welcome_email(email)
        return user

class TestUserRegistration:
    def test_registration_sends_email(self):
        mock_email = Mock(spec=EmailService)
        mock_db = Mock()
        mock_db.find_user_by_email.return_value = None
        mock_db.create_user.return_value = {"id": 1, "email": "test@test.com", "name": "Test"}

        service = UserRegistration(mock_email, mock_db)
        result = service.register("test@test.com", "Test")

        assert result["id"] == 1
        mock_email.send_welcome_email.assert_called_once_with("test@test.com")

    def test_duplicate_email_raises_error(self):
        mock_email = Mock(spec=EmailService)
        mock_db = Mock()
        mock_db.find_user_by_email.return_value = {"id": 1}

        service = UserRegistration(mock_email, mock_db)
        with pytest.raises(ValueError, match="User already exists"):
            service.register("existing@test.com", "Test")
        mock_email.send_welcome_email.assert_not_called()
```text

**Testing best practices**: Write tests first (TDD) for bug fixes. Use fixture factories for test data. Aim for 80%+ code coverage but focus on critical paths. Use dependency injection to make code testable.

---

## 3.6 Message Queues

Message queues decouple services and enable asynchronous processing. Common patterns include task queues, event broadcasting, and stream processing.

**RabbitMQ**: AMQP-based message broker. Supports exchanges (direct, topic, fanout, headers) and queues with bindings. Good for task distribution and RPC.

**Apache Kafka**: Distributed event streaming platform. Log-based, persists messages. Good for event sourcing, stream processing, and data pipelines.

**Celery**: Python task queue that uses RabbitMQ or Redis as a broker. Handles periodic tasks, retries, and result storage.

```python

## Celery task queue example
from celery import Celery

app_celery = Celery(
    "tasks",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/0"
)

@app_celery.task(bind=True, max_retries=3, default_retry_delay=30)
def process_order(self, order_id: int) -> dict:
    try:
        # Simulate order processing
        result = {"order_id": order_id, "status": "processed"}
        return result
    except Exception as exc:
        raise self.retry(exc=exc)

## Sending tasks asynchronously
def create_and_process_order(user_id: int, items: list[int]):
    order_id = save_order_to_db(user_id, items)
    process_order.delay(order_id)  # Non-blocking
    return {"order_id": order_id, "status": "pending"}

## In-memory queue implementation (for interview coding)
from dataclasses import dataclass
from collections import deque
import threading

@dataclass
class Message:
    topic: str
    payload: dict
    key: Optional[str] = None

class SimpleMessageQueue:
    def __init__(self):
        self.queues: dict[str, deque] = {}
        self.subscribers: dict[str, list] = {}
        self.lock = threading.Lock()

    def create_topic(self, topic: str) -> None:
        with self.lock:
            if topic not in self.queues:
                self.queues[topic] = deque()

    def publish(self, topic: str, message: Message) -> None:
        with self.lock:
            if topic not in self.queues:
                raise ValueError(f"Topic {topic} does not exist")
            self.queues[topic].append(message)

    def subscribe(self, topic: str, callback) -> str:
        subscriber_id = f"sub-{id(callback)}"
        with self.lock:
            if topic not in self.subscribers:
                self.subscribers[topic] = []
            self.subscribers[topic].append((subscriber_id, callback))
        return subscriber_id

    def consume(self, topic: str) -> Optional[Message]:
        with self.lock:
            if self.queues.get(topic):
                return self.queues[topic].popleft()
            return None

    def start_consumer(self, topic: str, poll_interval: float = 0.1):
        def poll():
            while True:
                msg = self.consume(topic)
                if msg and topic in self.subscribers:
                    for _, callback in self.subscribers[topic]:
                        callback(msg)
                time.sleep(poll_interval)
        thread = threading.Thread(target=poll, daemon=True)
        thread.start()
```text

---

## 3.7 Microservices

Microservices decompose a backend into independently deployable services. Be ready to discuss tradeoffs and patterns.

**Service decomposition**: Split by business capability (orders service, payments service, inventory service). Each service owns its data store.

**API Gateway**: Single entry point that handles authentication, rate limiting, routing, and aggregation. Implement with Nginx, Kong, or Envoy.

**Service discovery**: Services find each other via DNS (Kubernetes), a registry (Consul, Eureka), or client-side discovery.

**Inter-service communication**: Synchronous (HTTP/REST, gRPC) or asynchronous (message queues, events). Choose async for loose coupling.

```python

## Service example — inventory service
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

inventory_app = FastAPI(title="Inventory Service")

class InventoryItem(BaseModel):
    product_id: int
    quantity: int
    warehouse: str

inventory_db: dict[int, dict] = {
    101: {"product_id": 101, "quantity": 50, "warehouse": "WH-1"},
    102: {"product_id": 102, "quantity": 0, "warehouse": "WH-1"},
}

@inventory_app.get("/inventory/{product_id}")
def check_inventory(product_id: int):
    item = inventory_db.get(product_id)
    if not item:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"product_id": product_id, "in_stock": item["quantity"] > 0, "quantity": item["quantity"]}

@inventory_app.post("/inventory/reserve")
def reserve_inventory(product_id: int, quantity: int):
    item = inventory_db.get(product_id)
    if not item or item["quantity"] < quantity:
        raise HTTPException(status_code=409, detail="Insufficient inventory")
    item["quantity"] -= quantity
    return {"product_id": product_id, "remaining": item["quantity"]}

## API Gateway pattern (simplified)
from fastapi import FastAPI, Request
import httpx

gateway = FastAPI(title="API Gateway")

SERVICE_MAP = {
    "/users": "http://user-service:8001",
    "/orders": "http://order-service:8002",
    "/inventory": "http://inventory-service:8003",
    "/payments": "http://payment-service:8004",
}

@gateway.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy(request: Request, path: str):
    prefix = "/" + path.split("/")[0]
    if prefix not in SERVICE_MAP:
        raise HTTPException(status_code=404, detail="Service not found")

    target = SERVICE_MAP[prefix]
    body = await request.body()
    headers = dict(request.headers)
    headers.pop("host", None)

    async with httpx.AsyncClient() as client:
        response = await client.request(
            method=request.method,
            url=f"{target}/{path}",
            headers=headers,
            content=body,
            params=dict(request.query_params),
        )
    return response.json()
```text

**Microservices challenges**: Distributed transactions (use saga pattern), data consistency (eventual consistency), observability (distributed tracing), network latency, and operational complexity.

---

## 3.8 Security

Backend security covers authentication, authorization, input validation, and protection against common attacks.

**Authentication**: Verify identity. Methods include JWT (stateless, no server-side session), session-based (stateful, server stores session), OAuth2 (delegated auth), and API keys (simple, for machine-to-machine).

**Authorization**: Control access to resources. Use RBAC (role-based), ABAC (attribute-based), or ACL (access control lists). Always enforce at the API layer, not just the UI.

**Input validation**: Validate and sanitize all user input. Use Pydantic schemas, parameterized queries (no SQL injection), and content-type verification.

```python
import hashlib
import hmac
import bcrypt
from datetime import datetime, timedelta
from typing import Optional
import jwt

## Password hashing with bcrypt
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

## JWT token creation and verification
class JWTHandler:
    def __init__(self, secret: str, algorithm: str = "HS256"):
        self.secret = secret
        self.algorithm = algorithm

    def create_access_token(self, user_id: int, role: str, expires_delta: timedelta = timedelta(hours=1)):
        payload = {
            "sub": str(user_id),
            "role": role,
            "iat": datetime.utcnow(),
            "exp": datetime.utcnow() + expires_delta,
        }
        return jwt.encode(payload, self.secret, algorithm=self.algorithm)

    def verify_token(self, token: str) -> dict:
        try:
            payload = jwt.decode(token, self.secret, algorithms=[self.algorithm])
            return payload
        except jwt.ExpiredSignatureError:
            raise ValueError("Token expired")
        except jwt.InvalidTokenError:
            raise ValueError("Invalid token")

## Role-based access control decorator
from functools import wraps

def require_role(required_role: str):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            request = kwargs.get("request")
            user = getattr(request.state, "user", None)
            if not user or user.get("role") != required_role:
                raise HTTPException(status_code=403, detail="Insufficient permissions")
            return func(*args, **kwargs)
        return wrapper
    return decorator

## Input validation with Pydantic
from pydantic import BaseModel, EmailStr, constr

class UserRegistration(BaseModel):
    email: EmailStr
    password: constr(min_length=8, max_length=128)
    name: constr(min_length=2, max_length=100)

    # Additional validation
    def check_password_strength(self):
        if not any(c.isupper() for c in self.password):
            raise ValueError("Password must contain uppercase letter")
        if not any(c.isdigit() for c in self.password):
            raise ValueError("Password must contain digit")

## Rate limiting with token bucket algorithm
class TokenBucket:
    def __init__(self, rate: float, capacity: int):
        self.rate = rate  # tokens per second
        self.capacity = capacity
        self.tokens = capacity
        self.last_refill = time.time()

    def consume(self, tokens: int = 1) -> bool:
        now = time.time()
        elapsed = now - self.last_refill
        self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)
        self.last_refill = now
        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False
```text

**Common vulnerabilities**: SQL injection (use parameterized queries), XSS (sanitize HTML output), CSRF (use anti-CSRF tokens), SSRF (restrict outbound requests), insecure deserialization (validate input), and dependency vulnerabilities (keep dependencies updated).

---

## Summary

- REST APIs use nouns for resources, HTTP methods for actions, and consistent status codes
- Middleware enables cross-cutting concerns (auth, logging, rate limiting) without code duplication
- Choose threading for I/O-bound, asyncio for high-concurrency I/O, multiprocessing for CPU-bound work
- Cache-aside with Redis is the standard caching pattern; invalidate on writes, not just reads
- Test at multiple levels: unit (fast, isolated), integration (real dependencies), E2E (full system)
- Message queues decouple services; choose RabbitMQ for task distribution, Kafka for event streaming
- Microservices decompose by business capability but introduce distributed systems challenges
- Security: authenticate (who), authorize (what they can do), validate (all input), rate-limit (prevent abuse)

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| API endpoint | Proper HTTP method + status code | POST for everything, 200 for all responses |
| Slow database queries | Add caching layer | N+1 queries in loops |
| High I/O concurrency | asyncio with connection pooling | Thread per request (memory overhead) |
| CPU-bound task | Multiprocessing or task queue | Threading (blocked by GIL) |
| Password storage | bcrypt with salt | MD5, SHA-256 (unsalted), plain text |
| Cache consistency | Write-invalidate or write-through | Long TTL with no invalidation |
| Microservices | Event-driven with sagas | Synchronous chains of HTTP calls |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s03-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Explain the difference between REST and GraphQL.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>REST</strong>: Resources are accessed via URL paths with fixed response structures. Uses HTTP methods and status codes. Caching is built-in via HTTP semantics. Best for simple CRUD applications and when response shapes don't vary much.</p>
    <p><strong>GraphQL</strong>: Single endpoint where clients specify exactly which fields they need. Client-driven queries can cause performance issues (N+1). Requires a resolver layer and careful deprecation management.</p>
    <p><strong>When to choose each</strong>:</p>
    <ul>
      <li>REST: Public APIs, simple CRUD, when HTTP caching matters, high maturity</li>
      <li>GraphQL: Complex nested data, multiple client types (web, mobile), rapidly evolving frontends</li>
      <li>Many teams use both — REST for simple endpoints and GraphQL for complex data needs</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does the Python GIL work and how do you work around it?
  </summary>
  <div class="tp-qa-answer">
    <p>The Global Interpreter Lock (GIL) is a mutex in CPython that prevents multiple native threads from executing Python bytecode simultaneously. It exists because Python's memory management is not thread-safe.</p>
    <p><strong>Impact</strong>:</p>
    <ul>
      <li>CPU-bound tasks: Threading provides <strong>no parallelism</strong> — threads take turns</li>
      <li>I/O-bound tasks: Threading works fine because threads release the GIL during I/O waits</li>
    </ul>
    <p><strong>Workarounds</strong>:</p>
    <ul>
      <li><strong>Multiprocessing</strong>: Spawn separate processes, each with its own GIL</li>
      <li><strong>asyncio</strong>: Single-threaded cooperative concurrency for I/O</li>
      <li><strong>C extensions</strong>: NumPy, Cython release the GIL in computation-heavy sections</li>
      <li><strong>Jython/IronPython</strong>: Don't have a GIL (but lag behind CPython features)</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Design a rate limiter that handles 1M requests per minute.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Sliding window counter (Redis sorted sets)</strong> — efficient and accurate:</p>
    <pre><code>import time
import redis

class SlidingWindowRateLimiter:
    def __init__(self, redis_client, window_ms: int = 60000, max_requests: int = 1000):
        self.redis = redis_client
        self.window = window_ms
        self.max_reqs = max_requests

    def is_allowed(self, key: str) -> bool:
        now = int(time.time() * 1000)
        window_start = now - self.window

        pipe = self.redis.pipeline()
        pipe.zremrangebyscore(key, 0, window_start)  # remove old entries
        pipe.zcard(key)                                # count remaining
        pipe.zadd(key, {str(now): now})                # add current request
        pipe.expire(key, self.window // 1000 + 1)      # auto-cleanup
        _, count, _, _ = pipe.execute()

        return count < self.max_reqs</code></pre>
    <p><strong>Alternative — Token Bucket</strong>: Simple, memory-efficient, allows bursts up to capacity.</p>
    <p><strong>For 1M req/min across 1000 users</strong>: Each user gets ~1000 req/min. Use Redis Cluster for horizontal scaling. Shard by user ID. Use local counters (in-memory + periodic sync) to reduce Redis load.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you handle database transactions across multiple services?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Saga pattern</strong> manages distributed transactions across microservices:</p>
    <ul>
      <li><strong>Choreography</strong>: Each service publishes events after completing its local transaction. Other services listen and react. Simple but hard to track overall flow.</li>
      <li><strong>Orchestration</strong>: A central coordinator (saga orchestrator) tells services what to do and handles rollbacks by invoking compensating transactions.</li>
    </ul>
    <pre><code>class OrderSagaOrchestrator:
    def __init__(self, order_svc, payment_svc, inventory_svc, shipping_svc):
        self.services = {
            "order": order_svc,
            "payment": payment_svc,
            "inventory": inventory_svc,
            "shipping": shipping_svc,
        }
        self.compensations = []

    async def place_order(self, order_data: dict) -> bool:
        try:
            order = await self.services["order"].create(order_data)
            self.compensations.append(lambda: self.services["order"].cancel(order["id"]))

            payment = await self.services["payment"].charge(order["id"], order["total"])
            self.compensations.append(lambda: self.services["payment"].refund(payment["id"]))

            inventory = await self.services["inventory"].reserve(order["items"])
            self.compensations.append(lambda: self.services["inventory"].release(order["items"]))

            shipping = await self.services["shipping"].schedule(order["id"])
            return True
        except Exception:
            for compensate in reversed(self.compensations):
                try:
                    await compensate()
                except Exception:
                    pass  # Log compensation failure for manual recovery
            return False</code></pre>
    <p>Use <strong>outbox pattern</strong> for reliable event publishing: write events to the same DB as the transaction, then a separate process publishes them.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: Implement a thread-safe singleton in Python.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Approach 1 — Metaclass (most common)</strong>:</p>
    <pre><code>import threading

class SingletonMeta(type):
    _instances = {}
    _lock = threading.Lock()

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            with cls._lock:
                if cls not in cls._instances:
                    cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class DatabaseConnection(metaclass=SingletonMeta):
    def __init__(self):
        self.connected = False

    def connect(self):
        self.connected = True
        return self</code></pre>
    <p><strong>Approach 2 — Module-level variable</strong>:</p>
    <pre><code># db.py
class _DatabaseConnection:
    def __init__(self):
        self.connected = False

    def connect(self):
        self.connected = True

db_connection = _DatabaseConnection()  # imported once, shared globally</code></pre>
    <p>Python modules are singletons (imported once and cached). For most use cases, module-level instantiation is sufficient and simpler than metaclasses.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is idempotency and how do you implement it in an API?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Idempotency</strong> means making the same request multiple times produces the same result as making it once. GET, PUT, DELETE are idempotent by HTTP spec. POST is not.</p>
    <p><strong>Why it matters</strong>: Network failures can cause clients to retry. Without idempotency, a payment might be charged twice.</p>
    <p><strong>Implementation — Idempotency key pattern</strong>:</p>
    <pre><code>import uuid
from datetime import datetime, timedelta

class IdempotencyMiddleware:
    def __init__(self, cache, ttl_hours: int = 24):
        self.cache = cache
        self.ttl = timedelta(hours=ttl_hours)

    async def process(self, request, call_next):
        idempotency_key = request.headers.get("Idempotency-Key")
        if not idempotency_key:
            return await call_next(request)

        # Check if we've already processed this key
        existing = self.cache.get(f"idempotent:{idempotency_key}")
        if existing:
            return existing

        response = await call_next(request)

        # Store the response for this key
        if response.status_code < 500:  # Don't cache server errors
            self.cache.set(f"idempotent:{idempotency_key}", response, ttl=self.ttl)

        return response</code></pre>
    <p>The client generates a unique key (UUID) and sends it with the request. The server stores the response keyed by this UUID, returning the cached response for retries.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: Design a URL shortener service.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Core components</strong>:</p>
    <ul>
      <li><strong>API</strong>: POST /shorten (takes URL, returns short code), GET /{short_code} (redirects)</li>
      <li><strong>Short code generation</strong>: Base62 encode auto-increment ID (deterministic, no collision) or random string (6-7 chars, check uniqueness)</li>
      <li><strong>Storage</strong>: PostgreSQL for metadata, Redis cache for hot URLs</li>
    </ul>
    <pre><code>import string
import random

class URLShortener:
    ALPHABET = string.ascii_letters + string.digits  # 62 chars

    def __init__(self, db, cache):
        self.db = db
        self.cache = cache

    def encode(self, num: int) -> str:
        if num == 0:
            return self.ALPHABET[0]
        result = []
        while num > 0:
            num, rem = divmod(num, 62)
            result.append(self.ALPHABET[rem])
        return "".join(reversed(result))

    def decode(self, code: str) -> int:
        num = 0
        for c in code:
            num = num * 62 + self.ALPHABET.index(c)
        return num

    def shorten(self, original_url: str) -> str:
        url_id = self.db.insert_url(original_url)
        short_code = self.encode(url_id)
        self.db.update_short_code(url_id, short_code)
        self.cache.set(f"url:{short_code}", original_url, ttl=86400)
        return short_code

    def resolve(self, short_code: str) -> str:
        cached = self.cache.get(f"url:{short_code}")
        if cached:
            return cached
        url_id = self.decode(short_code)
        original = self.db.get_url(url_id)
        self.cache.set(f"url:{short_code}", original, ttl=3600)
        return original</code></pre>
    <p><strong>Scale considerations</strong>: 100M URLs → use distributed ID generation (Snowflake). Cache hit ratio > 95% with Redis. Use CDN for geographic distribution.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: Explain the CAP theorem and how it affects database choices.
  </summary>
  <div class="tp-qa-answer">
    <p>The CAP theorem states that a distributed data store can only provide two of three guarantees:</p>
    <ul>
      <li><strong>Consistency</strong>: Every read receives the most recent write or an error</li>
      <li><strong>Availability</strong>: Every request receives a response (not necessarily the latest data)</li>
      <li><strong>Partition tolerance</strong>: The system continues operating despite network partitions</li>
    </ul>
    <p><strong>Practical tradeoffs</strong>:</p>
    <ul>
      <li><strong>CP systems</strong> (Consistency + Partition tolerance): Traditional databases (PostgreSQL, MySQL with sync replication). During a partition, they may refuse writes to maintain consistency.</li>
      <li><strong>AP systems</strong> (Availability + Partition tolerance): DynamoDB, Cassandra, CouchDB. They accept writes even during partitions, leading to eventual consistency.</li>
      <li><strong>CA systems</strong> (Consistency + Availability): Single-node databases. They don't handle partitions because they're not distributed.</li>
    </ul>
    <p><strong>Real-world choices</strong>: Use CP for financial transactions (consistency critical). Use AP for user sessions, logs, and social feeds (availability critical).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How would you design a webhook system?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Webhook flow</strong>: External service registers a callback URL → when an event occurs, we POST event data to that URL.</p>
    <pre><code>import httpx
import asyncio
from dataclasses import dataclass, field

@dataclass
class WebhookSubscription:
    url: str
    events: set[str]
    secret: str
    retry_count: int = 3

class WebhookDispatcher:
    def __init__(self, db, cache):
        self.db = db
        self.cache = cache

    def register_hook(self, url: str, events: list[str], secret: str) -> int:
        hook_id = self.db.save_subscription(WebhookSubscription(url, set(events), secret))
        return hook_id

    async def dispatch(self, event_type: str, payload: dict) -> None:
        subscribers = self.db.get_subscribers_for_event(event_type)
        tasks = [self._send_with_retry(sub, event_type, payload) for sub in subscribers]
        await asyncio.gather(*tasks, return_exceptions=True)

    async def _send_with_retry(self, sub: WebhookSubscription, event_type: str, payload: dict) -> None:
        headers = {
            "Content-Type": "application/json",
            "X-Webhook-Event": event_type,
            "X-Webhook-Signature": self._sign(payload, sub.secret),
        }
        for attempt in range(sub.retry_count):
            try:
                async with httpx.AsyncClient() as client:
                    response = await client.post(sub.url, json=payload, headers=headers, timeout=10)
                    if response.status_code in (200, 201):
                        return
            except httpx.RequestError:
                pass
            await asyncio.sleep(2 ** attempt)  # exponential backoff
        await self._send_to_dead_letter(sub, event_type, payload)

    def _sign(self, payload: dict, secret: str) -> str:
        import hmac, hashlib, json
        return hmac.new(secret.encode(), json.dumps(payload, sort_keys=True).encode(), hashlib.sha256).hexdigest()

    async def _send_to_dead_letter(self, sub, event_type, payload):
        self.db.save_failed_event(sub.url, event_type, payload)</code></pre>
    <p><strong>Key considerations</strong>: Retry with exponential backoff, dead letter queue for persistent failures, HMAC signature verification by the receiver to ensure authenticity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What is the CQRS pattern and when should you use it?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>CQRS</strong> (Command Query Responsibility Segregation) separates read and write operations into different models. Commands (writes) use one model and data store, while queries (reads) use a potentially different model and store.</p>
    <p><strong>Benefits</strong>:</p>
    <ul>
      <li>Independent scaling of read and write workloads</li>
      <li>Optimized read models (denormalized, cached) vs write models (normalized, validated)</li>
      <li>Security can be applied differently to reads vs writes</li>
    </ul>
    <p><strong>When to use</strong>: Complex domains where reads and writes have different shapes, high read-to-write ratio, event sourcing systems.</p>
    <p><strong>When NOT to use</strong>: Simple CRUD applications, teams new to the pattern (adds complexity).</p>
    <pre><code># Command side
class CreateOrderCommand:
    def __init__(self, user_id: int, items: list[dict], shipping_address: str):
        self.user_id = user_id
        self.items = items
        self.shipping_address = shipping_address

class OrderCommandHandler:
    def __init__(self, write_db, event_bus):
        self.db = write_db
        self.bus = event_bus

    def handle(self, command: CreateOrderCommand) -> int:
        order_id = self.db.insert({"user_id": command.user_id, "status": "pending"})
        for item in command.items:
            self.db.insert_item(order_id, item)
        self.bus.publish("order.created", {"order_id": order_id})
        return order_id

## Query side (uses separate read-optimized store)
class OrderQueryService:
    def __init__(self, read_db, cache):
        self.read_db = read_db
        self.cache = cache

    def get_order_summary(self, user_id: int) -> list[dict]:
        cache_key = f"orders:summary:{user_id}"
        cached = self.cache.get(cache_key)
        if cached:
            return cached
        orders = self.read_db.get_orders_with_items(user_id)
        self.cache.set(cache_key, orders, ttl=60)
        return orders</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: How do you handle graceful shutdown in a Python web service?
  </summary>
  <div class="tp-qa-answer">
    <p>Graceful shutdown ensures in-flight requests complete, resources are cleaned up, and no data is lost.</p>
    <pre><code>import asyncio
import signal
from contextlib import asynccontextmanager

class GracefulShutdown:
    def __init__(self, app, timeout_seconds: int = 30):
        self.app = app
        self.timeout = timeout_seconds
        self._shutdown_event = asyncio.Event()

    async def wait_for_shutdown(self):
        loop = asyncio.get_running_loop()
        for sig in (signal.SIGTERM, signal.SIGINT):
            loop.add_signal_handler(sig, self._trigger_shutdown)
        await self._shutdown_event.wait()

    def _trigger_shutdown(self):
        self._shutdown_event.set()

    async def shutdown(self):
        self._trigger_shutdown()
        tasks = [t for t in asyncio.all_tasks() if t is not asyncio.current_task()]
        for task in tasks:
            task.cancel()
        await asyncio.wait(tasks, timeout=self.timeout)

@asynccontextmanager
async def lifespan(app):
    shutdown = GracefulShutdown(app)
    # Startup
    db_pool = await create_db_pool()
    app.state.db = db_pool
    yield
    # Shutdown
    print("Shutting down...")
    await db_pool.close()
    print("Connections closed")</code></pre>
    <p><strong>Key elements</strong>: Register signal handlers (SIGTERM, SIGINT), stop accepting new requests, wait for active requests to complete (within timeout), close database connections, cancel background tasks. Kubernetes sends SIGTERM and waits for terminationGracePeriodSeconds before SIGKILL.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: Explain the Outbox Pattern for reliable message publishing.
  </summary>
  <div class="tp-qa-answer">
    <p>The Outbox Pattern ensures that database changes and message publishing happen atomically. Instead of publishing a message directly, you write it to an "outbox" table in the same database transaction. A separate process reads the outbox and publishes messages.</p>
    <pre><code># Step 1: Write to outbox in the same transaction
async def create_order(order_data: dict):
    async with db.transaction():
        order_id = await db.execute("INSERT INTO orders ...", order_data)
        await db.execute(
            "INSERT INTO outbox (event_type, payload, created_at) VALUES ($1, $2, $3)",
            "order.created",
            json.dumps({"order_id": order_id}),
            datetime.utcnow()
        )

## Step 2: Background process publishes from outbox
async def outbox_publisher():
    while True:
        messages = await db.fetch(
            "SELECT * FROM outbox WHERE published = FALSE ORDER BY id LIMIT 100 FOR UPDATE SKIP LOCKED"
        )
        for msg in messages:
            try:
                await message_bus.publish(msg.event_type, json.loads(msg.payload))
                await db.execute("UPDATE outbox SET published = TRUE WHERE id = $1", msg.id)
            except Exception:
                log.error(f"Failed to publish message {msg.id}")
        await asyncio.sleep(1)</code></pre>
    <p>This pattern prevents the dual-write problem (DB transaction succeeds but message publish fails). It also enables exactly-once processing: the publisher is idempotent, and consumers handle duplicates.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: How do you handle database migrations in production?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Migration principles</strong>: Backward-compatible changes only. Add before remove. Every migration must be reversible (up/down).</p>
    <p><strong>Safe migration strategies</strong>:</p>
    <ol>
      <li><strong>Add column without NOT NULL</strong>: Add the column as nullable first, backfill data, then add NOT NULL.</li>
      <li><strong>Rename column</strong>: Don't rename directly. Add new column, dual-write to both, backfill, switch reads, remove old column.</li>
      <li><strong>Split a table</strong>: Create new table, dual-write, backfill, redirect reads, drop old table.</li>
      <li><strong>Add index</strong>: Use CONCURRENTLY (PostgreSQL) to avoid locking.</li>
    </ol>
    <pre><code>-- Safe migration: add a column
BEGIN;
ALTER TABLE users ADD COLUMN full_name VARCHAR(200);
COMMIT;

-- Backfill in batches
-- (application code, not SQL)
def backfill_full_name(db, batch_size: int = 1000):
    last_id = 0
    while True:
        users = db.fetch(
            "SELECT id, first_name, last_name FROM users WHERE id > $1 ORDER BY id LIMIT $2",
            last_id, batch_size
        )
        if not users:
            break
        for user in users:
            db.execute(
                "UPDATE users SET full_name = $1 WHERE id = $2",
                f"{user['first_name']} {user['last_name']}",
                user['id']
            )
        last_id = users[-1]['id']

-- Finally add NOT NULL
ALTER TABLE users ALTER COLUMN full_name SET NOT NULL;</code></pre>
    <p>Use tools like Alembic (Python) or Flyway (JVM) for versioned, repeatable migrations. Always test migrations on a staging copy of production data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: What is the Service Mesh pattern and when would you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>A service mesh is a dedicated infrastructure layer for service-to-service communication. It offloads networking concerns from application code to a proxy sidecar (Envoy, Linkerd) attached to each service.</p>
    <p><strong>Capabilities</strong>:</p>
    <ul>
      <li>Traffic management: canary releases, blue-green, circuit breaking, retries</li>
      <li>Observability: metrics, distributed tracing, access logs</li>
      <li>Security: mTLS between all services, policy enforcement</li>
      <li>Resilience: timeouts, retries, circuit breakers, rate limiting</li>
    </ul>
    <p><strong>When to use</strong>: Large microservice deployments (20+ services), when security/mTLS is required between all services, when you need sophisticated traffic management, when you want to decouple networking from application code.</p>
    <p><strong>When NOT to use</strong>: Small deployments (the overhead isn't worth it), when simplicity is more important than advanced routing, for performance-critical paths (proxy adds ~5ms latency).</p>
    <p><strong>Popular implementations</strong>: Istio (most features, complex), Linkerd (simpler, lower resource usage), Consul Connect (tight HashiCorp integration).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s03-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: Design an event-driven order processing system.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>System architecture</strong>:</p>
    <pre><code># Events
@dataclass
class OrderCreated:
    order_id: str
    user_id: str
    items: list[dict]
    total: float

@dataclass
class PaymentProcessed:
    order_id: str
    transaction_id: str
    status: str

@dataclass
class InventoryReserved:
    order_id: str
    items: list[dict]

@dataclass
class OrderShipped:
    order_id: str
    tracking_number: str

## Event bus (in-memory for illustration)
class EventBus:
    def __init__(self):
        self.handlers: dict[str, list] = {}

    def subscribe(self, event_type: str, handler):
        self.handlers.setdefault(event_type, []).append(handler)

    def publish(self, event_type: str, event):
        for handler in self.handlers.get(event_type, []):
            handler(event)

## Order service
class OrderService:
    def __init__(self, event_bus: EventBus):
        self.bus = event_bus

    def create_order(self, user_id: str, items: list[dict]) -> str:
        order_id = str(uuid.uuid4())
        total = sum(item["price"] * item["quantity"] for item in items)
        self.bus.publish("order.created", OrderCreated(order_id, user_id, items, total))
        return order_id

## Saga coordinator subscribes to events and triggers next steps
class OrderSaga:
    def __init__(self, bus, payment_svc, inventory_svc, shipping_svc):
        bus.subscribe("order.created", self.on_order_created)
        bus.subscribe("payment.processed", self.on_payment_processed)
        bus.subscribe("inventory.reserved", self.on_inventory_reserved)

    def on_order_created(self, event: OrderCreated):
        payment_svc.process_payment(event.order_id, event.total)

    def on_payment_processed(self, event: PaymentProcessed):
        if event.status == "success":
            inventory_svc.reserve_items(event.order_id)
        else:
            order_svc.mark_failed(event.order_id)

    def on_inventory_reserved(self, event: InventoryReserved):
        shipping_svc.schedule_shipment(event.order_id)</code></pre>
    <p>This event-driven design provides loose coupling, independence, and resilience. Each service operates asynchronously and can fail independently.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which HTTP method is NOT idempotent?

a) GET
b) PUT
c) DELETE
d) POST

<details class="tp-qa-card" data-qid="ip-s03-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) POST</strong></p><p>POST is not idempotent — multiple identical POST requests will create multiple resources. GET, PUT, and DELETE are idempotent per HTTP spec.</p></div></details>

**Q2**: What does the Python GIL prevent?

a) Multiple threads from running simultaneously
b) Multiple processes from running simultaneously
c) Garbage collection
d) I/O operations in threads

<details class="tp-qa-card" data-qid="ip-s03-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Multiple threads from running simultaneously</strong></p><p>The GIL prevents multiple native threads from executing Python bytecode simultaneously, limiting CPU-bound threading but not I/O-bound threading.</p></div></details>

**Q3**: Which pattern solves distributed transactions across microservices?

a) Singleton
b) Saga
c) Proxy
d) Factory

<details class="tp-qa-card" data-qid="ip-s03-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Saga</strong></p><p>The Saga pattern manages distributed transactions by executing local transactions in each service and invoking compensating transactions on failure.</p></div></details>

**Q4**: What does CAP theorem's "P" stand for?

a) Performance
b) Partition tolerance
c) Persistence
d) Parallelism

<details class="tp-qa-card" data-qid="ip-s03-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Partition tolerance</strong></p><p>Partition tolerance means the system continues operating despite network partitions. The CAP theorem states you can only guarantee two of Consistency, Availability, and Partition tolerance.</p></div></details>

**Q5**: Which HTTP status code indicates rate limiting?

a) 400
b) 403
c) 429
d) 503

<details class="tp-qa-card" data-qid="ip-s03-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 429</strong></p><p>429 Too Many Requests specifically indicates the client has exceeded a rate limit. Include a Retry-After header to indicate when to retry.</p></div></details>

## Exercises

**Easy** — Implement a simple rate limiter using the token bucket algorithm. Support configurable rate (tokens/second) and burst capacity. Write unit tests.

**Easy** — Create a FastAPI health check endpoint that reports the status of a database connection and a Redis cache. Return 200 if all healthy, 503 otherwise.

**Medium** — Implement a circuit breaker pattern in Python. Track failure count, open the circuit after N failures, test after a cooldown period (half-open), and close on success.

**Medium** — Build a simple task queue with Redis (or in-memory) that supports: enqueue, dequeue, retry with backoff, and dead-letter queue. Write a consumer that processes tasks.

**Hard** — Design and implement a minimal e-commerce backend with user service, order service, and inventory service. Use event-driven communication between services. Implement the Saga pattern for order placement with compensating transactions for failures.

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
1. Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?
2. Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?
2. How would you explain 21-interview-preparation to a non-technical stakeholder?

#### Microsoft Style
1. How does 21-interview-preparation integrate with enterprise systems and cloud architectures?
2. What are the security implications of 21-interview-preparation?

#### NVIDIA Style
1. How would you optimize 21-interview-preparation for GPU-accelerated computing?
2. What parallel processing patterns apply to 21-interview-preparation?

#### AI Startup Style
1. How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 21-interview-preparation?

### Resume Tips
- **Technical Skills**: List 21-interview-preparation under relevant technical skills
- **Project Description**: "Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 21-interview-preparation in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 21-interview-preparation
- [ ] Practice 3-5 problems related to 21-interview-preparation
- [ ] Prepare 2 real-world examples of using 21-interview-preparation
- [ ] Know the time/space complexity of common 21-interview-preparation operations
- [ ] Have questions ready about how the company uses 21-interview-preparation> **Next**: [04 — ML Foundations Interview →](04-ml-foundations-interview.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Interview Preparation fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master backend coding interview?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of backend coding interview helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding backend coding interview at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of backend coding interview like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply backend coding interview concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of backend coding interview?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply backend coding interview in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Interview Preparation, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
