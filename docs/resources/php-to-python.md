# PHP to Python Migration Guide

> Laravel developer (Raushan) ke liye Python seekhne ka shortcut.
> Har PHP/Laravel pattern ka Python equivalent side-by-side.

---

## Arrays vs Lists, Dicts

```php
// PHP — ek hi type hai: array
$skills = ["PHP", "Laravel", "Vue"];
$user = ["name" => "Raushan", "age" => 24];
$mixed = ["PHP", "name" => "Raushan"];  // possible but weird
```

```python
# Python — teen alag types
skills = ["PHP", "Laravel", "Vue"]               # list
user = {"name": "Raushan", "age": 24}             # dict
coordinates = (28.61, 77.20)                       # tuple (immutable)

# List operations
skills.append("Python")
skills[0]        # "PHP"
skills[-1]       # "Python" (last element)
skills[1:3]      # ["Laravel", "Vue"] (slice)

# Dict operations
user.get("email", "N/A")                           # safe access
user.keys()
user.values()
for k, v in user.items():
    print(f"{k}: {v}")
```

---

## Functions vs Methods

```php
// PHP function
function greet(string $name, string $greeting = "Hello"): string {
    return "$greeting, $name!";
}
echo greet("Raushan");

// PHP closures
$multiply = function($a, $b) {
    return $a * $b;
};
```

```python
# Python function
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

print(greet("Raushan"))

# Python lambda
multiply = lambda a, b: a * b
```

---

## Namespaces vs Modules

```php
// PHP namespace
namespace App\Services;
use App\Models\User;
```

```python
# Python module/package
from app.services import email_service
from app.models.user import User

# Package = directory with __init__.py
# Module = .py file
```

---

## Composer vs pip/uv

```bash
# PHP
composer require laravel/sanctum
composer install
composer update
```

```bash
# Python
pip install fastapi uvicorn
pip install -r requirements.txt
pip freeze > requirements.txt

# Faster alternative: uv
uv pip install fastapi
uv pip sync requirements.txt
```

---

## Laravel ORM (Eloquent) vs SQLAlchemy

```php
// Eloquent
$user = User::find(1);
$user = User::where('email', $email)->first();
$user = User::where('active', true)
            ->orderBy('name')
            ->take(10)
            ->get();

$post = new Post(['title' => 'Hello']);
$post->user()->associate($user);
$post->save();
```

```python
# SQLAlchemy
user = db.query(User).filter(User.id == 1).first()
user = db.query(User).filter(User.email == email).first()
users = db.query(User).filter(User.is_active == True)\
                      .order_by(User.name)\
                      .limit(10)\
                      .all()

post = Post(title="Hello", user=user)
db.add(post)
db.commit()
```

---

## Blade + Vue vs FastAPI + Jinja2/HTMX

```php
<!-- Blade template -->
@extends('layouts.app')
@section('content')
    <h1>{{ $title }}</h1>
    @foreach($users as $user)
        <p>{{ $user->name }}</p>
    @endforeach
@endsection
```

```python
# Jinja2 template
{% extends "base.html" %}
{% block content %}
    <h1>{{ title }}</h1>
    {% for user in users %}
        <p>{{ user.name }}</p>
    {% endfor %}
{% endblock %}
```

```python
# FastAPI + Jinja2
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")

@app.get("/users", response_class=HTMLResponse)
async def list_users(request: Request):
    users = get_users()
    return templates.TemplateResponse(
        "users.html",
        {"request": request, "users": users}
    )
```

```python
# HTMX approach (modern alternative to Vue for simple UIs)
@app.get("/users/table")
async def users_table(request: Request):
    users = get_users()
    return templates.TemplateResponse(
        "_users_table.html",
        {"request": request, "users": users}
    )
# <div hx-get="/users/table" hx-trigger="load">
```

---

## Middleware Patterns

```php
// Laravel middleware
class LogRequests {
    public function handle($request, Closure $next) {
        Log::info($request->url());
        return $next($request);
    }
}
```

```python
# FastAPI middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"{request.method} {request.url}")
    response = await call_next(request)
    return response

# Or with ASGI middleware
from starlette.middleware.base import BaseHTTPMiddleware

class LogMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        logger.info(f"{request.method} {request.url}")
        response = await call_next(request)
        return response

app.add_middleware(LogMiddleware)
```

---

## Service Container vs Python DI

```php
// Laravel service container
$this->app->bind(PaymentGateway::class, StripeGateway::class);
$gateway = app(PaymentGateway::class);
```

```python
# Python — simple dependency injection
# Option 1: Constructor injection
class PaymentService:
    def __init__(self, gateway: PaymentGateway):
        self.gateway = gateway

# Option 2: FastAPI Depends
async def get_payment_service():
    return PaymentService(StripeGateway())

@app.post("/pay")
async def pay(service: PaymentService = Depends(get_payment_service)):
    return service.process()

# Option 3: Simple dict-based container
container = {
    "payment": StripeGateway(),
    "email": SendGridService(),
}
```

---

## Facades vs Python Patterns

```php
// Laravel facades
Cache::remember('key', 3600, fn() => 'value');
Log::info('message');
Queue::push(new Job());
```

```python
# Python — no facades, use direct imports
# Option 1: Module-level functions
from app.cache import cache
data = cache.get_or_set("key", lambda: "value", ttl=3600)

# Option 2: Configured instances
class Log:
    @staticmethod
    def info(msg):
        print(f"[INFO] {msg}")

# Option 3: FastAPI dependency pattern
from app.services import cache_service

@app.get("/data")
async def get_data(cache = Depends(cache_service)):
    return cache.get_or_set("key", fetch_from_db)
```

---

## Artisan vs Click/Typer CLI

```bash
# Laravel Artisan
php artisan make:controller UserController
php artisan migrate
php artisan queue:work
```

```python
# Python Click
# pip install click

import click

@click.command()
@click.option("--name", prompt="Your name")
@click.option("--count", default=1)
def hello(name, count):
    for _ in range(count):
        click.echo(f"Hello {name}!")

if __name__ == "__main__":
    hello()

# Python Typer (modern, simpler)
# pip install typer
import typer

app = typer.Typer()

@app.command()
def hello(name: str, count: int = 1):
    for _ in range(count):
        print(f"Hello {name}!")

@app.command()
def process(file: str):
    print(f"Processing {file}")

if __name__ == "__main__":
    app()
```

---

## Eloquent vs SQLAlchemy ORM Patterns

```php
// Eloquent
$users = User::with('posts.comments')
             ->where('active', true)
             ->paginate(20);

$user = User::firstOrCreate(
    ['email' => 'test@test.com'],
    ['name' => 'Test']
);
```

```python
# SQLAlchemy
from sqlalchemy.orm import joinedload, selectinload

# Eager loading
users = db.query(User)\
    .options(selectinload(User.posts).selectinload(Post.comments))\
    .filter(User.is_active == True)\
    .limit(20)\
    .offset(0)\
    .all()

# first_or_create equivalent
user = db.query(User).filter(User.email == "test@test.com").first()
if not user:
    user = User(email="test@test.com", name="Test")
    db.add(user)
    db.commit()

# Or with a reusable helper
def get_or_create(model, defaults=None, **kwargs):
    instance = db.query(model).filter_by(**kwargs).first()
    if instance:
        return instance, False
    instance = model(**{**kwargs, **(defaults or {})})
    db.add(instance)
    db.commit()
    return instance, True
```

---

## PHP Traits vs Python Mixins

```php
// PHP trait
trait Loggable {
    public function log($message) {
        Log::info($message);
    }
}

class UserService {
    use Loggable;
}
```

```python
# Python mixin (just multiple inheritance)
class LoggableMixin:
    def log(self, message: str):
        logger.info(message)

class UserService(LoggableMixin):
    pass

# Or composition (preferred in Python)
class Logger:
    def info(self, message):
        logger.info(message)

class UserService:
    def __init__(self):
        self.logger = Logger()
```

---

## Error Handling

```php
// PHP try/catch
try {
    $result = riskyOperation();
} catch (ValidationException $e) {
    Log::warning($e->getMessage());
    throw $e;
} catch (\Exception $e) {
    Log::error($e->getMessage());
    return null;
} finally {
    cleanup();
}
```

```python
# Python try/except/finally
try:
    result = risky_operation()
except ValidationError as e:
    logger.warning(str(e))
    raise
except Exception as e:
    logger.error(str(e))
    return None
finally:
    cleanup()
```

---

## Type System Comparison

```php
// PHP 8+ — dynamic but has types
function process(int $id, string $name): array
{
    return [$id, $name];
}

// Union types
function process(int|string $input): void {}
```

```python
# Python 3.12 — dynamic but has type hints
def process(id: int, name: str) -> list:
    return [id, name]

# Union types (Python 3.10+)
def process(input: int | str) -> None:
    pass

# Older Python (3.9)
from typing import Union
def process(input: Union[int, str]) -> None:
    pass

# Type checking: mypy, pyright, pyre
```

---

## Testing: PHPUnit vs pytest

```php
// PHPUnit
class UserTest extends TestCase
{
    public function test_user_creation(): void
    {
        $user = User::factory()->create([
            'name' => 'Raushan',
            'email' => 'raushan@test.com',
        ]);

        $this->assertNotNull($user);
        $this->assertEquals('Raushan', $user->name);
        $this->assertDatabaseHas('users', ['email' => 'raushan@test.com']);
    }

    /** @test */
    public function it_validates_email()
    {
        $response = $this->post('/users', ['email' => 'invalid']);
        $response->assertSessionHasErrors('email');
    }
}
```

```python
# pytest — simpler, no class needed
# pip install pytest httpx

def test_user_creation(db_session):
    user = User(name="Raushan", email="raushan@test.com")
    db_session.add(user)
    db_session.commit()

    assert user.id is not None
    assert user.name == "Raushan"
    assert user.email == "raushan@test.com"


def test_email_validation(client):
    response = client.post("/users", json={"email": "invalid"})
    assert response.status_code == 422
    assert "email" in response.json()["detail"]


# Fixtures — pytest ka special power
import pytest

@pytest.fixture
def db_session():
    db = SessionLocal()
    yield db
    db.rollback()
    db.close()

@pytest.fixture
def sample_user(db_session):
    user = User(name="Raushan", email="raushan@test.com")
    db_session.add(user)
    db_session.commit()
    return user


# Parametrized tests — ek test, multiple inputs
@pytest.mark.parametrize("email,expected", [
    ("test@test.com", True),
    ("invalid", False),
    ("", False),
])
def test_email_validation(email, expected):
    assert is_valid_email(email) == expected


# Async tests
@pytest.mark.asyncio
async def test_async_endpoint(client):
    response = await client.get("/async-data")
    assert response.status_code == 200


# Mocking
from unittest.mock import Mock, patch

def test_external_api_call(mocker):
    mocker.patch("app.services.requests.get")
    # or with unittest
    with patch("app.services.external_api") as mock_api:
        mock_api.return_value = {"status": "ok"}
        result = process_data()
        assert result["status"] == "ok"


# PHPUnit            -> pytest
# setUp()            -> @pytest.fixture(autouse=True)
# $this->assert*()   -> assert statements
# @test              -> test_ prefix
# Mockery            -> unittest.mock / pytest-mock
# @dataProvider      -> @pytest.mark.parametrize
# assertDatabaseHas  -> query DB directly
# factory()          -> fixture functions
```

---

## Queues: Laravel Queues vs Celery / Redis RQ

```php
// Laravel Queue — Job class
class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Podcast $podcast,
    ) {}

    public function handle(): void
    {
        // process podcast
    }
}

// Dispatch
ProcessPodcast::dispatch($podcast);
```

```python
# Celery — Python ka most popular task queue
# celery.py
from celery import Celery

app = Celery("tasks", broker="redis://localhost:6379/0")

@app.task
def process_podcast(podcast_id: int):
    # process podcast
    podcast = db.query(Podcast).get(podcast_id)
    podcast.process()

# Dispatch
process_podcast.delay(podcast_id)


# Redis RQ — simpler alternative to Celery
# pip install rq
from rq import Queue
from redis import Redis

redis_conn = Redis()
queue = Queue(connection=redis_conn)

def send_email(user_id: int):
    user = get_user(user_id)
    # send email

job = queue.enqueue(send_email, user.id)
# Check status: job.is_failed, job.result


# RQ worker (terminal mein):
# rq worker


# Async with asyncio + aio-pika (RabbitMQ)
import asyncio
import aio_pika

async def process_message(message: aio_pika.IncomingMessage):
    async with message.process():
        data = json.loads(message.body)
        await process(data)

async def main():
    connection = await aio_pika.connect_robust("amqp://guest:guest@localhost/")
    channel = await connection.channel()
    queue = await channel.declare_queue("tasks")
    await queue.consume(process_message)
    await asyncio.Future()  # run forever

# ── Laravel Queue Feature  ->  Python Equivalent ──
# ShouldQueue              ->  @app.task decorator
# $job->delay(now())       ->  .apply_async(args=[], countdown=60)
# Queue::bulk()            ->  group/chord in Celery
# Failed jobs table        ->  Celery result backend
# Horizon dashboard        ->  Flower (pip install flower)
# queue:work               ->  celery -A tasks worker --loglevel=info
# queue:retry              ->  celery -A tasks retry
```

---

## Events: Laravel Events vs Python Pub/Sub

```php
// Laravel Event + Listener
class OrderShipped implements ShouldQueue
{
    public function __construct(public Order $order) {}
}

class SendShipmentNotification
{
    public function handle(OrderShipped $event): void
    {
        Mail::to($event->order->user)->send(...);
    }
}

// EventServiceProvider
protected $listen = [
    OrderShipped::class => [SendShipmentNotification::class],
];
```

```python
# Python — multiple approaches

# 1. Simple signal/slot (built-in)
class EventBus:
    def __init__(self):
        self._handlers = {}

    def on(self, event: str, handler):
        if event not in self._handlers:
            self._handlers[event] = []
        self._handlers[event].append(handler)

    def emit(self, event: str, *args, **kwargs):
        for handler in self._handlers.get(event, []):
            handler(*args, **kwargs)

bus = EventBus()
bus.on("order.shipped", send_email)
bus.on("order.shipped", update_inventory)
bus.emit("order.shipped", order=order)


# 2. Blinker (pip install blinker) — production-grade
from blinker import signal

order_shipped = signal("order-shipped")

@order_shipped.connect
def send_notification(sender, **kwargs):
    order = kwargs["order"]
    print(f"Order {order.id} shipped!")

# Fire
order_shipped.send(current_app, order=order)


# 3. FastAPI + BackgroundTasks (for same-process events)
from fastapi import BackgroundTasks

def on_user_registered(user_id: int):
    send_welcome_email(user_id)
    create_default_projects(user_id)

@app.post("/register")
async def register(user: UserCreate, tasks: BackgroundTasks):
    user = create_user(user)
    tasks.add_task(on_user_registered, user.id)
    return user


# 4. Message queue (cross-service events)
# Emit to RabbitMQ/Redis pub/sub
import redis

r = redis.Redis()
r.publish("user.registered", json.dumps({"user_id": 123}))

# Subscriber (separate process)
pubsub = r.pubsub()
pubsub.subscribe("user.registered")
for message in pubsub.listen():
    if message["type"] == "message":
        data = json.loads(message["data"])
        handle_registration(data["user_id"])
```

---

## Caching: Laravel Cache vs Python

```php
// Laravel Cache
Cache::remember('users.active', 3600, fn() => User::where('active', true)->get());
Cache::put('key', 'value', 600);
Cache::forget('key');
Cache::has('key');
Cache::increment('visits');
```

```python
# Python — multiple backends

# 1. cachetools (in-memory, simplest)
from cachetools import cached, TTLCache

cache = TTLCache(maxsize=100, ttl=3600)

@cached(cache)
def get_active_users():
    return db.query(User).filter(User.is_active == True).all()

# Direct use
cache["key"] = "value"
"key" in cache
del cache["key"]


# 2. Redis (production — same as Laravel uses)
# pip install redis
import redis

r = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)

# String
r.set("user:1:name", "Raushan", ex=3600)  # ex = TTL seconds
name = r.get("user:1:name")
r.delete("user:1:name")
r.exists("user:1:name")  # bool

# Hash (like Laravel's Redis hash)
r.hset("user:1", mapping={"name": "Raushan", "age": "24"})
r.hget("user:1", "name")
r.hgetall("user:1")
r.hincrby("user:1", "visits", 1)

# List
r.rpush("queue:tasks", "task1", "task2")
r.lpop("queue:tasks")
r.llen("queue:tasks")

# Check TTL
r.ttl("user:1:name")
r.expire("user:1:name", 3600)  # set TTL on existing key


# 3. Decorator-based caching with Redis
import functools

def redis_cache(ttl: int = 3600):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            key = f"{func.__name__}:{args}:{kwargs}"
            cached = r.get(key)
            if cached:
                return json.loads(cached)
            result = func(*args, **kwargs)
            r.setex(key, ttl, json.dumps(result))
            return result
        return wrapper
    return decorator

@redis_cache(ttl=300)
def get_active_users():
    return db.query(User).filter(User.is_active == True).all()


# ── Laravel Cache   ->  Python Equivalent ──
# Cache::remember()    ->  @cached decorator or redis_cache
# Cache::put()         ->  r.setex()
# Cache::get()         ->  r.get()
# Cache::forget()      ->  r.delete()
# Cache::has()         ->  r.exists()
# Cache::increment()   ->  r.incr()
# Cache::tags()        ->  r.keys("prefix:*") or r.scan()
# Cache::flush()       ->  r.flushdb()
```

---

## Validation: Laravel Validation vs Pydantic

```php
// Laravel Form Request
class StoreUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:2|max:50',
            'email' => 'required|email|unique:users',
            'age' => 'required|integer|min:18|max:120',
            'password' => 'required|string|min:8|confirmed',
            'tags' => 'array',
            'tags.*' => 'string|max:20',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Naam toh daal bhai',
            'email.unique' => 'Ye email already hai',
        ];
    }
}
```

```python
# Pydantic — validation + serialization, ek hi jagah
from pydantic import BaseModel, Field, EmailStr, validator, field_validator
from typing import List, Optional
import re

class CreateUserRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr
    age: int = Field(..., ge=18, le=120)
    password: str = Field(..., min_length=8)
    password_confirmation: str = Field(...)
    tags: List[str] = Field(default=[])
    phone: Optional[str] = None

    # Custom validation (like Laravel's after hook)
    @field_validator("password_confirmation")
    @classmethod
    def passwords_match(cls, v, info):
        if "password" in info.data and v != info.data["password"]:
            raise ValueError("Passwords do not match")
        return v

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, v):
        if v and not re.match(r"^\+91\d{10}$", v):
            raise ValueError("Invalid Indian phone number")
        return v

    @field_validator("tags")
    @classmethod
    def validate_tags(cls, v):
        for tag in v:
            if len(tag) > 20:
                raise ValueError(f"Tag too long: {tag}")
        return v

# Usage
try:
    user = CreateUserRequest(
        name="Raushan",
        email="raushan@test.com",
        age=24,
        password="secret123",
        password_confirmation="secret123",
    )
except ValueError as e:
    print(e.errors())  # list of validation errors

# In FastAPI route
@app.post("/users")
async def create_user(data: CreateUserRequest, db=Depends(get_db)):
    # data is already validated here
    user = User(**data.model_dump(exclude={"password_confirmation"}))
    db.add(user)
    db.commit()
    return user


# Field types Pydantic supports
# EmailStr, UrlStr, UUID4, IPv4Address, IPv6Address
# Decimal, PositiveInt, NegativeInt, conint, confloat, constr
# PastDate, FutureDate, AwareDatetime, NaiveDatetime
# Json, AnyUrl, FilePath, DirectoryPath

# ── Laravel Validation  ->  Pydantic Equivalent ──
# required               ->  Field(...)
# string                 ->  str
# min:2, max:50          ->  Field(min_length=2, max_length=50)
# integer                ->  int
# email                  ->  EmailStr
# unique:users           ->  manual DB check (Pydantic doesn't do DB queries)
# confirmed              ->  custom field_validator
# array                  ->  List[type]
# in:foo,bar             ->  Field(pattern=r"^(foo|bar)$")
# regex:/pattern/        ->  Field(pattern=r"...")
# nullable               ->  Optional[type] = None
# numeric                ->  float | int
# boolean                ->  bool
# date                   ->  date
# image                  ->  UploadFile + content_type check
# custom messages        ->  not needed — Python error messages are clear
```

---

## Authentication: Laravel Sanctum/JWT vs FastAPI

```php
// Laravel Sanctum
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn() => request()->user());
});
```

```python
# FastAPI + JWT (python-jose + passlib)
# pip install python-jose[cryptography] passlib[bcrypt] python-multipart

from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer

SECRET_KEY = "your-secret-key-here"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE = 30  # minutes

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Password hashing
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


# JWT token creation
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# Get current user from token
async def get_current_user(token: str = Depends(oauth2_scheme), db=Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.id == int(user_id)).first()
    if user is None:
        raise HTTPException(status_code=401, detail="User not found")
    return user


# Routes
@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(data={"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}


@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user


# ── Laravel Auth            ->  Python Equivalent ──
# Sanctum tokens              ->  JWT access tokens
# auth:sanctum middleware     ->  Depends(get_current_user)
# Hash::make()                ->  pwd_context.hash()
# Auth::user()                ->  Depends(get_current_user)
# auth()->id()                ->  current_user.id
# $request->user()            ->  current_user
# password_hash/password_verify  ->  passlib with bcrypt
# Laravel gates/policies      ->  custom permission check functions
```

---

## Scheduling: Laravel Scheduler vs Python

```php
// Laravel Scheduler (app/Console/Kernel.php)
protected function schedule(Schedule $schedule)
{
    $schedule->command('reports:generate')->dailyAt('02:00');
    $schedule->job(new ProcessPodcast())->hourly();
    $schedule->call(function () {
        DB::table('sessions')->where('last_activity', '<', now()->subDay())->delete();
    })->everyMinute();
}
```

```python
# Option 1: schedule (simple, in-process)
# pip install schedule
import schedule
import time

def generate_reports():
    print("Generating reports...")

def cleanup_sessions():
    print("Cleaning old sessions...")

schedule.every().day.at("02:00").do(generate_reports)
schedule.every().hour.do(process_podcast)
schedule.every().minute.do(cleanup_sessions)

while True:
    schedule.run_pending()
    time.sleep(1)


# Option 2: APScheduler (production-grade)
# pip install apscheduler
from apscheduler.schedulers.background import BackgroundScheduler

def tick():
    print("Tick! The time is: %s" % datetime.now())

scheduler = BackgroundScheduler()
scheduler.add_job(tick, "interval", seconds=3)
scheduler.add_job(generate_reports, "cron", hour=2, minute=0)
scheduler.add_job(cleanup_sessions, "interval", hours=1)
scheduler.start()


# Option 3: Celery Beat (for Celery users)
# celery -A tasks beat
from celery import Celery
from celery.schedules import crontab

app = Celery("tasks", broker="redis://localhost:6379/0")

app.conf.beat_schedule = {
    "generate-reports": {
        "task": "tasks.generate_reports",
        "schedule": crontab(hour=2, minute=0),
    },
    "hourly-podcast": {
        "task": "tasks.process_podcast",
        "schedule": crontab(minute=0),  # every hour
    },
}


# ── Laravel Scheduler   ->  Python Equivalent ──
# $schedule->command()    ->  scheduler.add_job(func, ...)
# dailyAt()               ->  crontab(hour=2, minute=0)
# hourly()                ->  crontab(minute=0)
# everyMinute()           ->  "interval", seconds=60
# weekly()                ->  crontab(day_of_week=0, hour=0)
# ->withoutOverlapping()  ->  use @scheduler.cron("...", max_instances=1)
# scheduler:run            ->  while True: schedule.run_pending()
```

---

## File Storage: Laravel Storage vs Python

```php
// Laravel Storage
use Illuminate\Support\Facades\Storage;

Storage::disk('s3')->put('avatars/1.jpg', $contents);
$url = Storage::disk('s3')->url('avatars/1.jpg');
Storage::disk('local')->exists('file.txt');
Storage::disk('public')->delete('old_file.pdf');
Storage::disk('s3')->files('avatars');
```

```python
# Python — file handling with pathlib + boto3 for S3

# Local files
from pathlib import Path

BASE_DIR = Path("storage")

def store_file(path: str, contents: bytes | str) -> Path:
    full_path = BASE_DIR / path
    full_path.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(contents, str):
        full_path.write_text(contents)
    else:
        full_path.write_bytes(contents)
    return full_path

def get_url(path: str) -> str:
    return f"/storage/{path}"

# Check existence
(BASE_DIR / "file.txt").exists()

# Delete
(BASE_DIR / "old_file.pdf").unlink(missing_ok=True)

# List files
list((BASE_DIR / "avatars").iterdir())
list(BASE_DIR.rglob("*.txt"))


# S3 / Cloud Storage (boto3)
# pip install boto3
import boto3
from botocore.exceptions import ClientError

s3 = boto3.client("s3",
    aws_access_key_id="YOUR_KEY",
    aws_secret_access_key="YOUR_SECRET",
    region_name="ap-south-1",
)

BUCKET = "myapp-uploads"

def upload_file(local_path: str, s3_key: str) -> bool:
    try:
        s3.upload_file(local_path, BUCKET, s3_key, ExtraArgs={"ACL": "public-read"})
        return True
    except ClientError as e:
        logger.error(f"Upload failed: {e}")
        return False

def get_s3_url(s3_key: str) -> str:
    return f"https://{BUCKET}.s3.ap-south-1.amazonaws.com/{s3_key}"

def list_files(prefix: str = "") -> list:
    response = s3.list_objects_v2(Bucket=BUCKET, Prefix=prefix)
    return [obj["Key"] for obj in response.get("Contents", [])]

def delete_file(s3_key: str):
    s3.delete_object(Bucket=BUCKET, Key=s3_key)


# ── Laravel Storage  ->  Python Equivalent ──
# Storage::disk('s3') ->  boto3.client('s3')
# ->put()              ->  s3.upload_file()
# ->url()              ->  construct URL manually
# ->exists()           ->  try s3.head_object()
# ->delete()           ->  s3.delete_object()
# ->files()            ->  s3.list_objects_v2()
# Storage::disk('local') -> pathlib.Path
```

---

## Notifications: Laravel Notifications vs Python

```php
// Laravel Notification
class WelcomeNotification extends Notification
{
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Welcome!')
            ->line('Welcome to our platform!')
            ->action('Get Started', url('/dashboard'));
    }
}

$user->notify(new WelcomeNotification());
```

```python
# Python — notification via services

# Email (smtplib)
import smtplib
from email.mime.text import MIMEText

def send_email(to: str, subject: str, body: str):
    msg = MIMEText(body, "html")
    msg["Subject"] = subject
    msg["To"] = to

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login("user@gmail.com", "password")
        server.send_message(msg)

# Or use SendGrid (transactional email API)
# pip install sendgrid
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_welcome_email(user_email: str):
    message = Mail(
        from_email="noreply@example.com",
        to_emails=user_email,
        subject="Welcome!",
        html_content="<strong>Welcome to our platform!</strong>",
    )
    sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
    sg.send(message)


# Slack notification
import httpx

def notify_slack(message: str, webhook_url: str):
    httpx.post(webhook_url, json={"text": message})

# SMS (Twilio)
# pip install twilio
from twilio.rest import Client

def send_sms(to: str, body: str):
    client = Client(account_sid, auth_token)
    client.messages.create(body=body, from_="+1234567890", to=to)


# Database notification (stored in DB)
class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String)
    data = Column(JSON)
    read_at = Column(DateTime, nullable=True)

# Store notification
def notify_user(user_id: int, type: str, data: dict):
    notif = Notification(user_id=user_id, type=type, data=data)
    db.add(notif)
    db.commit()

# Fetch unread
unread_notifications = db.query(Notification)\
    .filter(Notification.user_id == user.id, Notification.read_at == None)\
    .all()


# ── Laravel Notification  ->  Python Equivalent ──
# ->notify()                ->  call send function directly
# via('mail')               ->  choose email function
# via('database')           ->  store in DB
# via('slack')              ->  httpx.post to webhook
# toMail()                  ->  build email content
# toArray()                 ->  dict for DB storage
```

---

## More ORM Query Comparisons

```php
// Eloquent — more patterns
// Soft deletes
$users = User::withTrashed()->get();
$user = User::onlyTrashed()->first();
$user->restore();

// Scopes
$users = User::active()->vip()->get();

// Accessors / Mutators
public function getFullNameAttribute(): string
{
    return "{$this->first_name} {$this->last_name}";
}
public function setPasswordAttribute($value)
{
    $this->attributes['password'] = bcrypt($value);
}

// Aggregates
$count = User::where('active', true)->count();
$avg = User::avg('score');
$total = Order::where('status', 'paid')->sum('amount');

// Chunking
User::chunk(100, function ($users) {
    foreach ($users as $user) { /* ... */ }
});

// Where Has
$users = User::whereHas('posts', function ($q) {
    $q->where('published', true);
})->get();

// Lazy loading vs eager
$user->load('posts.comments');
```

```python
# SQLAlchemy equivalents

# Soft deletes (manual implementation)
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    deleted_at = Column(DateTime, nullable=True)

    @classmethod
    def active(cls):
        return db.query(cls).filter(cls.deleted_at == None)

    @classmethod
    def with_trashed(cls):
        return db.query(cls)

    @classmethod
    def only_trashed(cls):
        return db.query(cls).filter(cls.deleted_at != None)

# Scope pattern (class methods)
class UserQuery:
    @staticmethod
    def active(query):
        return query.filter(User.is_active == True)

    @staticmethod
    def vip(query):
        return query.filter(User.is_vip == True)

# Usage
users = UserQuery.active(db.query(User)).all()


# Accessors (computed properties in Python)
class User(Base):
    __tablename__ = "users"
    first_name = Column(String)
    last_name = Column(String)

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"

user = db.query(User).first()
print(user.full_name)  # computed property, not a column


# Mutators (via @property setter)
class User(Base):
    __tablename__ = "users"
    _password = Column("password", String)

    @property
    def password(self):
        raise AttributeError("Password is write-only")

    @password.setter
    def password(self, value):
        self._password = hash_password(value)


# Aggregates
from sqlalchemy import func

count = db.query(func.count(User.id)).filter(User.is_active == True).scalar()
avg_score = db.query(func.avg(User.score)).scalar()
total_amount = db.query(func.sum(Order.amount)).filter(Order.status == "paid").scalar()

# Group by
results = db.query(User.is_active, func.count(User.id)).group_by(User.is_active).all()


# Chunking / Batch processing
def chunk_query(model, chunk_size=100):
    page = 0
    while True:
        results = db.query(model).offset(page * chunk_size).limit(chunk_size).all()
        if not results:
            break
        yield results
        page += 1

for batch in chunk_query(User, 100):
    for user in batch:
        process(user)


# Where Has (filter by relationship existence)
users = db.query(User).filter(User.posts.any(Post.is_published == True)).all()


# Lazy loading (default — triggers query on access)
user = db.query(User).first()
print(user.posts)  # lazy loads here (triggers SQL)

# Eager loading
from sqlalchemy.orm import joinedload
user = db.query(User).options(joinedload(User.posts)).first()


# ── Eloquent              ->  SQLAlchemy ──
# withTrashed()             ->  custom query
# scopeActive()             ->  classmethod + query filter
# $appends / getAttr()      ->  @property decorator
# setXxxAttribute()         ->  @property.setter
# User::count()             ->  func.count()
# User::chunk()             ->  offset/limit loop
# whereHas('posts')         ->  .any() in relationship
# ->load('posts')           ->  .options(joinedload())
# paginate()                ->  .offset().limit() + total count query
# firstOrCreate()           ->  get_or_create() helper
# updateOrCreate()          ->  merge logic
```

---

## Policies / Authorization

```php
// Laravel Policy
class PostPolicy
{
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }
}

// In controller
$this->authorize('update', $post);

// Blade
@can('update', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit</a>
@endcan
```

```python
# Python — permission check functions
def can_update_post(user: User, post: Post) -> bool:
    """Only the author can update their post."""
    return user.id == post.user_id


# Decorator pattern
from functools import wraps

def require_permission(check_func):
    def decorator(route_func):
        @wraps(route_func)
        async def wrapper(*args, **kwargs):
            current_user = kwargs.get("current_user")
            post = kwargs.get("post")
            if not check_func(current_user, post):
                raise HTTPException(status_code=403, detail="Not authorized")
            return await route_func(*args, **kwargs)
        return wrapper
    return decorator

@app.put("/posts/{post_id}")
@require_permission(can_update_post)
async def update_post(post: PostUpdate, current_user: User = Depends(get_current_user)):
    # safe — permission already checked
    pass


# Permission dependency (FastAPI style)
class PermissionChecker:
    def __init__(self, permission_func):
        self.permission_func = permission_func

    async def __call__(self, post_id: int, current_user: User = Depends(get_current_user), db=Depends(get_db)):
        post = db.query(Post).filter(Post.id == post_id).first()
        if not post:
            raise HTTPException(status_code=404)
        if not self.permission_func(current_user, post):
            raise HTTPException(status_code=403, detail="Not authorized")
        return post

can_update = PermissionChecker(can_update_post)

@app.put("/posts/{post_id}")
async def update_post(
    post_update: PostUpdate,
    post: Post = Depends(can_update),
    current_user: User = Depends(get_current_user),
):
    # post already loaded and permission checked
    for key, value in post_update.model_dump(exclude_unset=True).items():
        setattr(post, key, value)
    db.commit()
    return post
```

---

## Pagination

```php
// Laravel
$users = User::paginate(20);
$users = User::simplePaginate(20);  // only prev/next (no page numbers)

// In Blade
{{ $users->links() }}
```

```python
# FastAPI + SQLAlchemy

@app.get("/users")
async def list_users(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db = Depends(get_db)
):
    # Get total count
    total = db.query(func.count(User.id)).scalar()

    # Get page
    users = db.query(User)\
        .offset((page - 1) * per_page)\
        .limit(per_page)\
        .all()

    return {
        "data": users,
        "page": page,
        "per_page": per_page,
        "total": total,
        "total_pages": (total + per_page - 1) // per_page,
        "has_next": page * per_page < total,
        "has_prev": page > 1,
    }


# Reusable pagination dependency
from math import ceil

class Paginator:
    def __init__(self, default_per_page: int = 20):
        self.default_per_page = default_per_page

    async def __call__(
        self,
        page: int = Query(1, ge=1),
        per_page: int = Query(default_per_page, ge=1, le=100),
    ):
        return {"page": page, "per_page": per_page}

def paginate(query, page: int, per_page: int):
    total = query.count()
    items = query.offset((page - 1) * per_page).limit(per_page).all()
    return {
        "data": items,
        "page": page,
        "per_page": per_page,
        "total": total,
        "total_pages": ceil(total / per_page),
    }

# Usage
pagination = Paginator()

@app.get("/users")
async def list_users(pagination = Depends(pagination), db = Depends(get_db)):
    query = db.query(User).filter(User.is_active == True)
    return paginate(query, **pagination)
```

---

## Mailing

```php
// Laravel Mail
Mail::to($user)->send(new OrderConfirmation($order));
Mail::to($user)->queue(new OrderConfirmation($order));  // queue

// Markdown mail
new OrderConfirmation()->markdown('emails.orders.confirmed');
```

```python
# Python — smtplib (built-in)
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_mail(to: str, subject: str, html: str):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = "noreply@example.com"
    msg["To"] = to
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
        server.send_message(msg)


# Jinja2 templates for email HTML
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("templates/emails"))

def render_email(template: str, **data) -> str:
    return env.get_template(template).render(**data)

def send_order_confirmation(order):
    html = render_email("order_confirmed.html", order=order)
    send_mail(order.user.email, "Order Confirmed!", html)


# Async email sending (non-blocking)
import asyncio
import aiosmtplib

async def send_mail_async(to: str, subject: str, html: str):
    msg = MIMEText(html, "html")
    msg["Subject"] = subject
    msg["From"] = "noreply@example.com"
    msg["To"] = to
    await aiosmtplib.send(
        msg,
        hostname="smtp.gmail.com",
        port=587,
        username=os.getenv("SMTP_USER"),
        password=os.getenv("SMTP_PASS"),
        use_tls=True,
    )
```

---

## Quick Reference Table

| PHP/Laravel | Python/FastAPI |
|-------------|----------------|
| `$variable` | `variable` |
| `array()` | `list` / `dict` |
| `function foo()` | `def foo():` |
| `__construct()` | `__init__()` |
| `$this->prop` | `self.prop` |
| `try/catch` | `try/except` |
| `throw` | `raise` |
| `echo` | `print()` |
| `null` | `None` |
| `true` / `false` | `True` / `False` |
| `&&` / `\|\|` | `and` / `or` |
| `==` / `===` | `==` / `is` |
| `isset($var)` | `hasattr(obj, "attr")` |
| `empty($var)` | `not var` |
| `count($arr)` | `len(arr)` |
| `implode()` | `" ".join(list)` |
| `explode()` | `str.split(" ")` |
| `isset($arr['key'])` | `"key" in dict` |
| `array_key_exists()` | `"key" in dict` |
| Class: `::` | `cls.method()` |
| Instance: `->` | `.` |
| `new Class()` | `Class()` |
| `clone` | `copy.deepcopy()` |
| `composer install` | `pip install` |
| `.env` (Laravel) | `.env` (python-dotenv) |
| `php artisan` | `python manage.py` / `typer` |
| Blade | Jinja2 / HTMX |
| Eloquent | SQLAlchemy |
| Facades | Direct imports |
| Service Container | FastAPI Depends |
| Middleware | FastAPI middleware |
| Collection pipeline | Generator expressions |
| PHPUnit | pytest |
| Queue (Redis/DB) | Celery / RQ |
| Events | Blinker / Redis pub/sub |
| Cache (Redis/File) | cachetools / redis-py |
| Validation (FormRequest) | Pydantic |
| Sanctum / JWT Auth | python-jose + passlib |
| Scheduler (Cron) | schedule / APScheduler |
| Storage (Local/S3) | pathlib / boto3 |
| Notifications | Direct API calls |
| Pagination | offset/limit helper |
| Policies / Gates | Permission functions |
| Mail | smtplib / aiosmtplib |

---

## Mindset Shift

```
PHP/Laravel:
  - Everything is a request → response cycle
  - Framework opinionated
  - Static properties, facades
  - Mostly synchronous

Python/AI:
  - Scripts, notebooks, APIs — sab ho sakta hai
  - Minimal framework, more explicit
  - Functions are first class
  - Async is natural (asyncio)
  - Composition > inheritance
  - "Explicit is better than implicit" (Zen of Python)

Rule of thumb:
  - Laravel mein jo facade se karte ho, Python mein import karo
  - Laravel mein jo service container se karte ho,
    Python mein function parameters + type hints se karo
  - Laravel mein jo Eloquent magic se karte ho,
    Python mein explicit queries se karo
  - Laravel mein jo artisan command se karte ho,
    Python mein Typer/Click se karo
  - Laravel mein jo queue mein dalte ho,
    Python mein Celery ya RQ se karo
  - Laravel mein jo FormRequest validation hai,
    Python mein Pydantic se karo

Yes, Python mein zyada likhna padta hai.
But it's more readable, testable, and debuggable.

AI engineering mein:
  - API banane ke liye: FastAPI
  - Data manipulation: pandas
  - ML models: scikit-learn, PyTorch
  - LLMs: LangChain, llamaindex
  - Vector search: Chroma, Qdrant, Pinecone
  - Task queues: Celery, RQ
  - Notebook experimentation: Jupyter
  - Deployment: Docker + Docker Compose
```

---

## Laravel artisan → Python CLI equivalents

```bash
# Laravel                      Python
php artisan serve              uvicorn main:app --reload
php artisan make:controller    # manually create file
php artisan make:model         # manually create file
php artisan migrate            alembic upgrade head
php artisan make:migration     alembic revision --autogenerate
php artisan tinker             python -i (or ipython)
php artisan route:list         # FastAPI auto docs at /docs
php artisan cache:clear        redis-cli FLUSHDB
php artisan config:clear       # no config caching needed
php artisan queue:work         celery -A tasks worker
php artisan queue:failed       celery -A tasks inspect reserved
php artisan storage:link       # symlink manually
php artisan key:generate       # openssl rand -hex 32
php artisan db:seed            python seed.py
php artisan schedule:run       python scheduler.py
php artisan test               pytest
```

---

## Common Laravel Packages → Python Libraries

```
Laravel Package         Python Library
───────────────         ──────────────
Laravel Sanctum         python-jose (JWT)
Laravel Horizon         Flower (for Celery)
Laravel Telescope       None needed (logging + FastAPI /docs)
Laravel Debugbar        None needed (FastAPI auto docs)
Laravel Socialite       authlib / social-auth-app-django
Laravel Excel           openpyxl / pandas
Laravel Backup          boto3 / duplicity
Laravel Scout           whoosh / elasticsearch-py / qdrant-client
Laravel Websockets      fastapi.WebSocket / socket.io
Laravel Dusk            playwright-python / selenium
Laravel Passport        python-jose + OAuth2
Laravel Echo            socket.io client
Laravel Cashier         stripe (direct Stripe API)
Laravel Horizon         celery + flower
barryvdh/laravel-ide-helper  pylance / pyright (built-in ide support)
spatie/laravel-permission    custom permission functions
intervention/image       Pillow (PIL)
maatwebsite/LaravelExcel pandas + openpyxl
```
