<!-- Clear Language: Keep sentences under 50 words -->
# Error Handling and Logging — Robust API Design

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Implement structured error handling with custom exception classes |
| LO2 | Create global exception handlers for consistent error responses |
| LO3 | Apply structured logging with context, levels, and correlation IDs |
| LO4 | Configure log aggregation and monitoring with modern tools |
| LO5 | Handle validation errors, HTTP exceptions, and unexpected errors |
| LO6 | Design error recovery strategies with retries and circuit breakers |

## Introduction

FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding error handling and logging is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how error handling and logging works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 9.1 | Error Handling Strategy | Exception hierarchy, error response format |
| 9.2 | Custom Exceptions | Domain-specific exceptions, error codes |
| 9.3 | Global Exception Handlers | Catch and format all exceptions |
| 9.4 | Validation Error Handling | Pydantic errors, request validation |
| 9.5 | Structured Logging | JSON logging, levels, context |
| 9.6 | Log Aggregation | ELK, Loki, Datadog integration |
| 9.7 | Monitoring and Alerting | Metrics, health checks, uptime |
| 9.8 | Error Recovery | Retries, circuit breakers, graceful degradation |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Error Strategy] --> B[Custom Exceptions]
    B --> C[Global Handlers]
    C --> D[Validation Errors]
    D --> E[Structured Logging]
    E --> F[Log Aggregation]
    F --> G[Monitoring]
    G --> H[Error Recovery]
```text

## 9.1 Error Handling Strategy

A robust error handling strategy ensures consistent, actionable error responses.

```python
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()

## Consistent error response format

## {

##   "error": {

##     "code": "VALIDATION_ERROR",

##     "message": "The request contains invalid fields",

##     "details": [

##       {"field": "email", "message": "Invalid email format", "code": "invalid_format"}

##     ],

##     "request_id": "req_abc123",

##     "timestamp": "2025-01-15T10:30:00Z"

##   }

## }

## Error codes enum
from enum import Enum

class ErrorCode(str, Enum):
    VALIDATION_ERROR = "VALIDATION_ERROR"
    NOT_FOUND = "NOT_FOUND"
    UNAUTHORIZED = "UNAUTHORIZED"
    FORBIDDEN = "FORBIDDEN"
    CONFLICT = "CONFLICT"
    RATE_LIMITED = "RATE_LIMITED"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
    DEPENDENCY_FAILURE = "DEPENDENCY_FAILURE"
```text

**Error handling principles**:
- Never expose stack traces to clients
- Use appropriate HTTP status codes
- Include machine-readable error codes
- Provide actionable error messages
- Log all errors with context
- Correlate errors with request IDs

## 9.2 Custom Exceptions

Define domain-specific exceptions for different error scenarios.

```python
from fastapi import HTTPException, status

class AppException(Exception):
    def __init__(self, code: str, message: str, status_code: int = 500, details: list = None):
        self.code = code
        self.message = message
        self.status_code = status_code
        self.details = details or []

class NotFoundException(AppException):
    def __init__(self, resource: str, resource_id: any):
        super().__init__(
            code="NOT_FOUND",
            message=f"{resource} with id '{resource_id}' not found",
            status_code=status.HTTP_404_NOT_FOUND,
        )

class ConflictException(AppException):
    def __init__(self, resource: str, field: str, value: any):
        super().__init__(
            code="CONFLICT",
            message=f"{resource} with {field} '{value}' already exists",
            status_code=status.HTTP_409_CONFLICT,
        )

class UnauthorizedException(AppException):
    def __init__(self, message: str = "Authentication required"):
        super().__init__(
            code="UNAUTHORIZED",
            message=message,
            status_code=status.HTTP_401_UNAUTHORIZED,
        )

class ForbiddenException(AppException):
    def __init__(self, message: str = "Insufficient permissions"):
        super().__init__(
            code="FORBIDDEN",
            message=message,
            status_code=status.HTTP_403_FORBIDDEN,
        )

class ValidationException(AppException):
    def __init__(self, message: str, details: list = None):
        super().__init__(
            code="VALIDATION_ERROR",
            message=message,
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            details=details,
        )

class RateLimitedException(AppException):
    def __init__(self, retry_after: int = 60):
        super().__init__(
            code="RATE_LIMITED",
            message=f"Too many requests. Try again in {retry_after} seconds",
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        )

## Usage in endpoints
@app.get("/users/{user_id}")
async def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise NotFoundException("User", user_id)
    return user

@app.post("/users")
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise ConflictException("User", "email", user.email)
    return create_user_in_db(db, user)
```text

## 9.3 Global Exception Handlers

Handle all exceptions in one place for consistent responses.

```python
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.exception_handlers import http_exception_handler
import uuid
import logging

app = FastAPI()

## Request ID middleware
@app.middleware("http")
async def add_request_id(request: Request, call_next):
    request_id = str(uuid.uuid4())
    request.state.request_id = request_id
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response

## Handle custom AppException
@app.exception_handler(AppException)
async def app_exception_handler(request: Request, exc: AppException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": {
                "code": exc.code,
                "message": exc.message,
                "details": exc.details,
                "request_id": getattr(request.state, "request_id", None),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        },
        headers={"X-Error-Code": exc.code},
    )

## Handle FastAPI HTTPException
@app.exception_handler(HTTPException)
async def custom_http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": {
                "code": "HTTP_ERROR",
                "message": exc.detail,
                "request_id": getattr(request.state, "request_id", None),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        },
        headers=exc.headers,
    )

## Handle unhandled exceptions (500)
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    # Log the full error for debugging
    logger.error(
        "Unhandled exception",
        exc_info=exc,
        extra={
            "request_id": getattr(request.state, "request_id", None),
            "path": request.url.path,
            "method": request.method,
        }
    )

    return JSONResponse(
        status_code=500,
        content={
            "error": {
                "code": "INTERNAL_ERROR",
                "message": "An unexpected error occurred",
                "request_id": getattr(request.state, "request_id", None),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        },
    )

## Handle Pydantic validation errors
from fastapi.exceptions import RequestValidationError

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    details = []
    for error in exc.errors():
        details.append({
            "field": ".".join(str(loc) for loc in error["loc"]),
            "message": error["msg"],
            "code": error["type"],
        })

    return JSONResponse(
        status_code=422,
        content={
            "error": {
                "code": "VALIDATION_ERROR",
                "message": "Request validation failed",
                "details": details,
                "request_id": getattr(request.state, "request_id", None),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        },
    )
```text

## 9.4 Validation Error Handling

Detailed validation error formatting improves client developer experience.

```python
from pydantic import BaseModel, field_validator, ValidationError
from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

## Custom validation error formatter
def format_validation_errors(errors: list) -> list:
    formatted = []
    for error in errors:
        formatted.append({
            "field": ".".join(str(loc) for loc in error["loc"]),
            "message": error["msg"],
            "code": error["type"],
            "input": error.get("input"),
            "context": {k: v for k, v in error.get("ctx", {}).items() if k != "error"},
        })
    return formatted

@app.exception_handler(RequestValidationError)
async def validation_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={
            "error": {
                "code": "VALIDATION_ERROR",
                "message": "Request validation failed. Check the details for field-level errors.",
                "details": format_validation_errors(exc.errors()),
                "request_id": getattr(request.state, "request_id", None),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        },
        headers={
            "X-Validation-Error": "true",
            "X-Error-Count": str(len(exc.errors())),
        },
    )

## Example model with validation
class CreateItemRequest(BaseModel):
    name: str
    price: float
    quantity: int

    @field_validator("name")
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Name cannot be empty")
        return v.strip()

    @field_validator("price")
    @classmethod
    def price_positive(cls, v: float) -> float:
        if v <= 0:
            raise ValueError("Price must be positive")
        return round(v, 2)

## Detailed validation error response

## HTTP 422

## {

##   "error": {

##     "code": "VALIDATION_ERROR",

##     "message": "Request validation failed",

##     "details": [

##       {

##         "field": "body.price",

##         "message": "Price must be positive",

##         "code": "value_error",

##         "input": -10.0

##       }

##     ]

##   }

## }
```text

## 9.5 Structured Logging

JSON-formatted logs are machine-readable and searchable.

```python
import json
import logging
from datetime import datetime, timezone
from typing import Optional
from pythonjsonlogger import jsonlogger

## JSON log formatter
class CustomJsonFormatter(jsonlogger.JsonFormatter):
    def add_fields(self, log_record, record, message_dict):
        super().add_fields(log_record, record, message_dict)
        log_record["timestamp"] = datetime.now(timezone.utc).isoformat()
        log_record["level"] = record.levelname
        log_record["logger"] = record.name

        if hasattr(record, "request_id"):
            log_record["request_id"] = record.request_id

## Configure logging
logger = logging.getLogger("myapp")
logger.setLevel(logging.INFO)

handler = logging.StreamHandler()
handler.setFormatter(CustomJsonFormatter(
    fmt="%(timestamp)s %(level)s %(name)s %(message)s"
))
logger.addHandler(handler)

## Structured logging utility
class StructuredLogger:
    def __init__(self, name: str):
        self.logger = logging.getLogger(name)

    def _log(self, level: str, message: str, **kwargs):
        extra = {}
        if "request_id" in kwargs:
            extra["request_id"] = kwargs.pop("request_id")
        if "user_id" in kwargs:
            extra["user_id"] = kwargs.pop("user_id")
        if "duration_ms" in kwargs:
            extra["duration_ms"] = kwargs.pop("duration_ms")

        getattr(self.logger, level)(message, extra=extra, **kwargs)

    def info(self, message: str, **kwargs):
        self._log("info", message, **kwargs)

    def error(self, message: str, **kwargs):
        self._log("error", message, **kwargs)

    def warning(self, message: str, **kwargs):
        self._log("warning", message, **kwargs)

    def debug(self, message: str, **kwargs):
        self._log("debug", message, **kwargs)

log = StructuredLogger("myapp")

## Usage in middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = (time.time() - start) * 1000

    log.info(
        "request_completed",
        method=request.method,
        path=request.url.path,
        status_code=response.status_code,
        duration_ms=round(duration, 2),
        request_id=getattr(request.state, "request_id", None),
    )
    return response

## Usage in endpoints
@app.get("/users/{user_id}")
async def get_user(user_id: int, db: Session = Depends(get_db)):
    log.info("fetching_user", user_id=user_id, request_id=get_request_id())
    try:
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            log.warning("user_not_found", user_id=user_id)
            raise NotFoundException("User", user_id)
        log.info("user_found", user_id=user_id, username=user.username)
        return user
    except Exception as e:
        log.error("failed_to_fetch_user", user_id=user_id, error=str(e))
        raise
```text

## 9.6 Log Aggregation

Centralize logs for search, analysis, and alerting.

```python

## File logging for production
import logging.handlers

## Rotating file handler
file_handler = logging.handlers.RotatingFileHandler(
    "logs/app.log",
    maxBytes=10_000_000,  # 10MB
    backupCount=5,
)
file_handler.setFormatter(CustomJsonFormatter())
logger.addHandler(file_handler)

## ELK Stack integration (Filebeat ships logs to Logstash/Elasticsearch)

## filebeat.yml:

## filebeat.inputs:

##   - type: log

##     paths:

##       - /var/log/app/*.log

## output.elasticsearch:

##   hosts: ["localhost:9200"]

## Loki integration (promtail ships logs)

## promtail.yml:

## scrape_configs:

##   - job_name: myapp

##     static_configs:

##       - targets: [localhost]

##         labels:

##           job: myapp

##           __path__: /var/log/app/*.log

## Log levels for different environments
import os

LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO").upper()
logger.setLevel(getattr(logging, LOG_LEVEL, logging.INFO))

## Development: DEBUG, detailed, human-readable

## Staging: INFO, structured JSON

## Production: WARNING, structured JSON, log only warnings and errors
```text

**Log aggregation best practices**:
- Always include correlation ID (request_id) in logs
- Use consistent JSON format across all services
- Never log sensitive data (passwords, tokens, PII)
- Set appropriate log levels per environment
- Implement log retention and rotation policies
- Use structured logging for searchable logs

## 9.7 Monitoring and Alerting

```python
from fastapi import FastAPI, Request
from prometheus_client import Counter, Histogram, generate_latest
from fastapi.responses import PlainTextResponse
import time

app = FastAPI()

## Prometheus metrics
REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total HTTP requests",
    ["method", "endpoint", "status_code"],
)

REQUEST_DURATION = Histogram(
    "http_request_duration_seconds",
    "HTTP request duration in seconds",
    ["method", "endpoint"],
    buckets=[0.01, 0.05, 0.1, 0.5, 1.0, 2.0, 5.0],
)

ERROR_COUNT = Counter(
    "http_errors_total",
    "Total HTTP errors by code",
    ["error_code", "endpoint"],
)

@app.middleware("http")
async def metrics_middleware(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start

    REQUEST_COUNT.labels(
        method=request.method,
        endpoint=request.url.path,
        status_code=response.status_code,
    ).inc()

    REQUEST_DURATION.labels(
        method=request.method,
        endpoint=request.url.path,
    ).observe(duration)

    if response.status_code >= 400:
        ERROR_COUNT.labels(
            error_code=str(response.status_code),
            endpoint=request.url.path,
        ).inc()

    return response

@app.get("/metrics")
async def metrics():
    return PlainTextResponse(generate_latest())

## Health check endpoint
@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "version": "1.0.0",
        "checks": {
            "database": await check_database(),
            "redis": await check_redis(),
            "disk_space": check_disk(),
        }
    }

## Readiness probe
@app.get("/ready")
async def ready():
    db_ok = await check_database()
    if not db_ok:
        raise HTTPException(status_code=503, detail="Database not ready")
    return {"status": "ready"}
```text

## 9.8 Error Recovery

Implement resilience patterns for distributed systems.

```python
import asyncio
from functools import wraps
from typing import Type, Tuple

## Retry decorator with exponential backoff
def retry(
    max_retries: int = 3,
    base_delay: float = 1.0,
    max_delay: float = 30.0,
    exceptions: Tuple[Type[Exception], ...] = (Exception,),
):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            last_exception = None
            for attempt in range(max_retries + 1):
                try:
                    return await func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt < max_retries:
                        delay = min(base_delay * (2 ** attempt), max_delay)
                        log.warning(f"Retry {attempt + 1}/{max_retries} after {delay}s")
                        await asyncio.sleep(delay)
            raise last_exception
        return wrapper
    return decorator

## Usage
@retry(max_retries=3, exceptions=(httpx.TimeoutException, ConnectionError))
async def fetch_external_data(url: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(url, timeout=5.0)
        response.raise_for_status()
        return response.json()

## Circuit breaker pattern
class CircuitBreaker:
    def __init__(self, failure_threshold: int = 5, recovery_timeout: float = 30.0):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failures = 0
        self.last_failure_time = 0
        self.state = "closed"  # closed, open, half-open

    async def call(self, func, *args, **kwargs):
        if self.state == "open":
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = "half-open"
            else:
                raise CircuitBreakerOpen("Circuit breaker is open")

        try:
            result = await func(*args, **kwargs)
            if self.state == "half-open":
                self.state = "closed"
                self.failures = 0
            return result
        except Exception as e:
            self.failures += 1
            self.last_failure_time = time.time()
            if self.failures >= self.failure_threshold:
                self.state = "open"
                log.warning(f"Circuit breaker opened after {self.failures} failures")
            raise

class CircuitBreakerOpen(Exception):
    pass

circuit_breaker = CircuitBreaker(failure_threshold=3, recovery_timeout=30)

@app.get("/external-data")
async def get_external_data():
    try:
        data = await circuit_breaker.call(fetch_external_data, "https://api.example.com/data")
        return data
    except CircuitBreakerOpen:
        # Serve cached data
        return await get_cached_data()
    except Exception as e:
        log.error("External API call failed", error=str(e))
        raise ServiceUnavailableException("External service unavailable")
```text

---

## TypeScript Parallel

```typescript
import winston from "winston";

// Structured JSON logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "my-api" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Custom error class
class NotFoundError extends Error {
  public code = "NOT_FOUND";
  public statusCode = 404;
  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`);
  }
}

// Express error handler middleware
function errorHandler(err: any, req: any, res: any, next: any) {
  logger.error("Request failed", {
    error: err.message,
    path: req.path,
    method: req.method,
    requestId: req.requestId,
  });

  res.status(err.statusCode || 500).json({
    error: {
      code: err.code || "INTERNAL_ERROR",
      message: err.message || "Unexpected error",
      requestId: req.requestId,
    },
  });
}
```text

---

## Summary

- Custom exception classes with error codes provide clear, domain-specific error handling
- Global exception handlers catch all errors and format consistent responses
- Validation errors should include field-level details for actionable feedback
- Structured JSON logging enables machine-readable, searchable logs
- Log aggregation (ELK, Loki) centralizes logs for analysis and alerting
- Prometheus metrics track request counts, durations, and error rates
- Health checks expose system status for orchestration and monitoring
- Retry patterns with exponential backoff handle transient failures
- Circuit breaker pattern prevents cascading failures in distributed systems
- Never expose sensitive data or stack traces in error responses

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| API errors | Consistent JSON error format | Different formats per endpoint |
| Unknown errors | Catch-all handler + log details | Exposing stack traces |
| Validation | Field-level error details | Generic "invalid input" |
| Logging | Structured JSON format | print() statements |
| Monitoring | Prometheus metrics + health checks | No observability |
| External failures | Retry + circuit breaker | No error recovery |
| Secrets in logs | Filter sensitive fields | Logging passwords/tokens |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s09-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: How do you structure error responses in a REST API?</summary>
  <div class="tp-qa-answer"><p>Use consistent JSON format with: error code (machine-readable), message (human-readable), details (field-level errors), request_id (correlation), and timestamp. Use standard HTTP status codes. Never expose stack traces. Include actionable information for client developers.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is the difference between logging and monitoring?</summary>
  <div class="tp-qa-answer"><p>Logging records discrete events with context (structured JSON). Monitoring collects metrics over time (request rates, error rates, latency) for dashboards and alerts. Logging answers "what happened?"; monitoring answers "is the system healthy?" Both are essential for production observability.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How do you handle Pydantic validation errors globally?</summary>
  <div class="tp-qa-answer"><p>Register an exception handler for RequestValidationError. Extract error details from exc.errors() including field location, error message, and error type. Format as a structured JSON response with 422 status code. Include all validation errors, not just the first one.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What information should you include in structured logs?</summary>
  <div class="tp-qa-answer"><p>Timestamp, log level, message, service name, request_id, user_id, endpoint, method, status code, duration, and any business-relevant context. Use JSON format for machine readability. Include enough context to debug issues without excessive verbosity. Never log sensitive data (passwords, tokens, PII).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is the circuit breaker pattern?</summary>
  <div class="tp-qa-answer"><p>Circuit breaker monitors failures to a downstream service. When failures exceed a threshold, the circuit "opens" and subsequent calls fail immediately (fast fail) instead of waiting for timeout. After a recovery timeout, it transitions to "half-open" to test if the service has recovered. Prevents cascading failures.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you implement health checks in FastAPI?</summary>
  <div class="tp-qa-answer"><p>Create /health endpoint that checks: database connectivity, cache availability, disk space, and critical dependency status. Create /ready endpoint for readiness probes (is app ready to serve requests?). Create /metrics endpoint for Prometheus scraping. Return 200 OK if healthy, 503 if degraded.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: How do you implement retry with exponential backoff?</summary>
  <div class="tp-qa-answer"><p>Use a decorator that catches specified exceptions, waits base_delay * 2^attempt, then retries. Wait times: 1s, 2s, 4s, 8s, etc. Cap at max_delay (30s). Add jitter (random delay) to avoid thundering herd. Only retry transient failures (timeouts, connection errors), not permanent failures (400, 404).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you prevent sensitive data leakage in error responses?</summary>
  <div class="tp-qa-answer"><p>Use global exception handlers that format all errors consistently. Never include exc_info or traceback in responses. Log full error details internally. Filter sensitive fields in structured logging. Use SecretStr from Pydantic for sensitive fields. Configure different error detail levels for dev vs production.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What metrics should every API track?</summary>
  <div class="tp-qa-answer"><p>Request rate (RPS by endpoint/method/status), error rate (4xx vs 5xx), latency (p50/p95/p99), request duration histogram, active connections, and dependency health. Use Prometheus Counter for counts and Histogram for latencies. Track business metrics: signups, orders, revenue.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s09-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you handle database connection errors gracefully?</summary>
  <div class="tp-qa-answer"><p>Implement retry with exponential backoff for transient DB errors. Use connection pooling with health checks (pool_pre_ping). Implement circuit breaker to stop hammering a failing database. Serve cached data when DB is down. Return 503 Service Unavailable with clear message. Log full error context for debugging.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What status code should validation errors return?

a) 400
b) 422
c) 500
d) 409

<details class="tp-qa-card" data-qid="fastapi-s09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 422 Unprocessable Entity</strong></p></div></details>

**Q2**: What should you NEVER include in error responses?

a) Error code
b) Stack trace
c) Request ID
d) Detail message

<details class="tp-qa-card" data-qid="fastapi-s09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Stack trace</strong></p></div></details>

**Q3**: What log format is recommended for production?

a) Plain text
b) JSON
c) XML
d) CSV

<details class="tp-qa-card" data-qid="fastapi-s09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) JSON</strong></p></div></details>

**Q4**: What pattern prevents cascading failures from retries?

a) Retry
b) Circuit breaker
c) Timeout
d) Load balancing

<details class="tp-qa-card" data-qid="fastapi-s09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Circuit breaker</strong></p></div></details>

**Q5**: What port does Prometheus typically scrape metrics from?

a) 8000
b) 9090
c) 8080
d) 3000

<details class="tp-qa-card" data-qid="fastapi-s09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 9090</strong></p></div></details>

## Exercises

**Easy** — Create custom exception classes for a blog API: PostNotFound, InvalidPostData, UnauthorizedEdit. Implement a global exception handler that returns consistent JSON error responses.

**Medium** — Implement structured JSON logging with request_id, endpoint, method, duration, and status_code for every request. Add a log rotation policy (10MB per file, 5 backups).

**Medium** — Add Prometheus metrics to a FastAPI app: request count by endpoint/status, request duration histogram, and error count. Add /metrics and /health endpoints.

**Hard** — Build a circuit breaker for an external API client with: configurable failure threshold, recovery timeout, half-open testing, and automatic fallback to cached data. Add logging at each state transition.

**Hard** — Implement a comprehensive error handling and monitoring system: custom exceptions with codes, global handlers, structured logging to file + stdout, Prometheus metrics, health checks (DB, Redis, disk), and alert rules for high error rates.

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
1. Explain the time and space trade-offs of 05-fastapi-backend. When would you choose one approach over another?
2. Design a system that efficiently handles 05-fastapi-backend at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 05-fastapi-backend. What was your approach and what was the result?
2. How would you explain 05-fastapi-backend to a non-technical stakeholder?

#### Microsoft Style
1. How does 05-fastapi-backend integrate with enterprise systems and cloud architectures?
2. What are the security implications of 05-fastapi-backend?

#### NVIDIA Style
1. How would you optimize 05-fastapi-backend for GPU-accelerated computing?
2. What parallel processing patterns apply to 05-fastapi-backend?

#### AI Startup Style
1. How would you implement 05-fastapi-backend in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 05-fastapi-backend?

### Resume Tips
- **Technical Skills**: List 05-fastapi-backend under relevant technical skills
- **Project Description**: "Implemented 05-fastapi-backend to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 05-fastapi-backend in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 05-fastapi-backend
- [ ] Practice 3-5 problems related to 05-fastapi-backend
- [ ] Prepare 2 real-world examples of using 05-fastapi-backend
- [ ] Know the time/space complexity of common 05-fastapi-backend operations
- [ ] Have questions ready about how the company uses 05-fastapi-backend> **Next**: [API Deployment](10-api-deployment.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
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

- How this connects to FastAPI Backend fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master error handling and logging?
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

Understanding the evolution of error handling and logging helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding error handling and logging at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of error handling and logging like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply error handling and logging concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of error handling and logging?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply error handling and logging in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

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

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of FastAPI Backend?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

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

After mastering FastAPI Backend, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Inference Workflow

1. **Input Validation**: Sanitize and validate incoming requests
2. **Preprocessing**: Transform input to model-ready format
3. **Model Execution**: Run inference with optimized runtime
4. **Postprocessing**: Format model output for consumption
5. **Response**: Return results with metadata and timing
6. **Monitoring**: Log requests, responses, and latency

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
