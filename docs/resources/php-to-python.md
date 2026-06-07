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
from sqlalchemy.orm import joinedload

users = db.query(User)\
    .options(joinedload(User.posts).joinedload(Post.comments))\
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

# Or with a helper
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

# Or composition (preferred)
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

## Quick Reference Table

| PHP/Laravel | Python/FastAPI |
|-------------|----------------|
| `$variable` | `variable` |
| `array()` | `list` / `dict` |
| `function foo()` | `def foo():` |
| `__construct()` | `__init__()` |
| `$this->prop` | `self.prop` / `self["prop"]` |
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

Yes, Python mein zyada likhna padta hai.
But it's more readable, testable, and debuggable.
```
