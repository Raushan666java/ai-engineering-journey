# Chapter 2: Architecture, Routing, Middleware & Controllers

---

## Learning Objectives

- Trace the complete HTTP request lifecycle from `public/index.php` to the Response
- Understand the service container's role in automatic dependency resolution
- Define routes with parameters, constraints, names, and groups
- Create and register middleware for request filtering
- Build resource controllers, single-action controllers, and controllers with dependency injection
- Implement route model binding for automatic Eloquent model resolution
- Protect routes with CSRF and handle various response types

---

## Theory

### 2.1 Request Lifecycle

Every HTTP request follows a precise path through the framework.

**Step 1 — `public/index.php`**: This single entry point (configured in Nginx or Apache) records the start time, loads Composer's autoloader, bootstraps the application via `bootstrap/app.php`, and handles the request:

```php
$app = require_once __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle($request = Request::capture())->send();
$kernel->terminate($request, $response);
```

**Step 2 — `bootstrap/app.php`**: Creates the `Illuminate\Foundation\Application` instance (the service container) and registers three core contracts as singletons: the HTTP kernel, console kernel, and exception handler.

**Step 3 — Kernel**: `App\Http\Kernel` defines global middleware (runs on all requests), middleware groups (`web` for session/CSRF routes, `api` for stateless routes), and named route middleware:

```php
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
    'api' => [
        \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];
```

**Step 4 — Service Providers**: The kernel boots the application, registering and booting all providers in `config/app.php`. Each provider has `register()` (called first) and `boot()` (called after all providers register). This deferral ensures that when one provider's `boot()` depends on another's bindings, those bindings exist.

**Step 5 — Router**: `RouteServiceProvider` loads route files. Laravel matches the incoming URI and HTTP method against registered routes — first match wins.

**Step 6 — Middleware Pipeline**: The request passes through the middleware stack like an onion. Each middleware can inspect, modify, or reject the request before it reaches the controller, and can modify the response on the way back out.

**Step 7 — Controller**: The controller method returns a Response, which travels back through the middleware in reverse order, gets sent to the browser, and the kernel runs terminable middleware.

### 2.2 Service Container

The service container is Laravel's dependency injection engine:

```php
// Auto-resolution (zero config)
$calculator = app()->make(CalculatorService::class);

// Interface binding
app()->bind(PaymentGateway::class, StripeGateway::class);

// Singleton — same instance per request
app()->singleton(CartService::class, fn() => new CartService(session()->getId()));

// Primitive binding
app()->when(ReportController::class)->needs('$resultsPerPage')->give(50);
```

**Automatic injection**: When a type-hinted dependency appears in a constructor or controller method, the container resolves it recursively:

```php
class InvoiceController extends Controller
{
    public function __construct(
        protected InvoiceService $invoices,
    ) {}

    public function index()
    {
        return $this->invoices->all();
    }
}
```

No binding needed. The container reflects on `InvoiceService`, resolves its own dependencies, and returns a fully constructed object. Any class that does not depend on interface bindings or unresolved primitives can be auto-resolved.

### 2.3 Routing

**Basic routes**:

```php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::patch('/users/{id}', [UserController::class, 'patch']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::options('/users', fn() => response()->json(['methods' => 'GET, POST, PUT, DELETE']));
Route::match(['GET', 'POST'], '/users/batch', [UserController::class, 'batch']);
Route::any('/users/fallback', [UserController::class, 'fallback']);
```

**Route parameters**:

```php
// Required
Route::get('/users/{id}', fn(string $id) => "User {$id}");

// Optional (with default)
Route::get('/users/{category?}', fn(?string $category = null) => $category ?? 'All');

// Regex constraint
Route::get('/users/{id}', fn(string $id) => "...")->where('id', '[0-9]+');
Route::get('/posts/{slug}/{locale}', fn(...) => "...")
    ->where(['slug' => '[a-z-]+', 'locale' => '[a-z]{2}']);

// Global pattern (in AppServiceProvider)
public function boot(): void
{
    Route::pattern('id', '[0-9]+');
}
```

**Named routes**:

```php
Route::get('/users/profile', [ProfileController::class, 'show'])->name('profile.show');

$url = route('profile.show');
$url = route('profile.show', ['page' => 2]);
return redirect()->route('profile.show');

if (request()->route()->named('profile.*')) {
    // Matches profile.show, profile.edit, etc.
}
```

**Route groups**:

```php
// Prefix
Route::prefix('admin')->group(function () {
    Route::get('/users', [UserController::class, 'index']);       // /admin/users
    Route::get('/settings', [SettingsController::class, 'index']); // /admin/settings
});

// Middleware
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

// Name prefix
Route::name('admin.')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    // Generated name: 'admin.users.index'
});

// Subdomain
Route::domain('{account}.example.com')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
    // Matches acme.example.com/users
});

// Nested
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);   // /admin/users
        Route::get('/{user}', [UserController::class, 'show']); // /admin/users/5
    });
});
```

### 2.4 Middleware

Middleware filters HTTP requests entering and responses leaving your application.

**Creating middleware**:

```bash
php artisan make:middleware LogRequests
```

```php
class LogRequests
{
    public function handle(Request $request, Closure $next): Response
    {
        Log::info('Incoming request', [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
        ]);
        return $next($request);
    }
}
```

**Registering**: Add to global middleware, a group, or named middleware in the Kernel:

```php
// Named
protected $routeMiddleware = [
    'log.requests' => \App\Http\Middleware\LogRequests::class,
];

// Or attach directly
Route::get('/admin', fn() => "...")->middleware('auth');
Route::get('/admin', fn() => "...")->middleware(['auth', 'verified']);
Route::middleware('throttle:10,1')->group(function () {
    Route::get('/api/users', [UserController::class, 'index']);
});
```

**Middleware with parameters**:

```php
class EnsureRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (! $request->user()?->hasRole($role)) {
            abort(403);
        }
        return $next($request);
    }
}
```

```php
// Register: 'role' => \App\Http\Middleware\EnsureRole::class
Route::get('/admin', fn() => "...")->middleware('role:admin');
```

**Terminable middleware**: Runs after the response is sent — ideal for logging, analytics, and webhooks that the user should not wait for:

```php
class TerminateAfterResponse
{
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    public function terminate(Request $request, Response $response): void
    {
        // Response already sent — safe to do slow work here
    }
}
```

### 2.5 Controllers

Controllers group related route handling into organized classes.

**Creating controllers**:

```bash
php artisan make:controller UserController
php artisan make:controller UserController --resource        # 7 RESTful actions
php artisan make:controller UserController --api             # Excludes create/edit
php artisan make:controller ShowProfile --invokable          # Single action
```

**Resource controller**:

```php
class UserController extends Controller
{
    public function index()     { /* GET /users */ }
    public function create()    { /* GET /users/create */ }
    public function store(Request $request) { /* POST /users */ }
    public function show(User $user) { /* GET /users/{id} */ }
    public function edit(User $user) { /* GET /users/{id}/edit */ }
    public function update(Request $request, User $user) { /* PUT/PATCH /users/{id} */ }
    public function destroy(User $user) { /* DELETE /users/{id} */ }
}
```

```php
Route::resource('users', UserController::class);
Route::resource('users', UserController::class)->only(['index', 'show']);
Route::resource('users', UserController::class)->except(['create', 'edit']);
Route::apiResource('users', UserController::class);
```

**Single-action controller**:

```php
class ShowDashboard extends Controller
{
    public function __invoke()
    {
        return view('dashboard', [
            'stats' => ['users' => User::count(), 'orders' => Order::today()->count()],
        ]);
    }
}
```

```php
Route::get('/dashboard', ShowDashboard::class);
```

**Dependency injection in controllers**:

```php
class UserController extends Controller
{
    public function __construct(
        protected UserRepository $users,
        protected MetricsService $metrics,
    ) {}

    public function index(Request $request)
    {
        $this->metrics->increment('users.visited');
        return view('users.index', [
            'users' => $this->users->paginate($request->integer('per_page', 15)),
        ]);
    }
}
```

### 2.6 Route Model Binding

Route model binding automatically fetches Eloquent models from route parameters.

**Implicit binding**: Type-hint the model and the `id` is resolved automatically:

```php
Route::get('/users/{user}', [UserController::class, 'show']);

public function show(User $user)
{
    return view('users.show', compact('user'));
}
```

`/users/42` executes `User::findOrFail(42)` automatically.

**Custom column**: Override `getRouteKeyName()` on the model:

```php
class User extends Model
{
    public function getRouteKeyName(): string
    {
        return 'username';
    }
}
```

Now `/users/john` binds to `User::where('username', 'john')->firstOrFail()`.

**Explicit binding**: Register custom logic in `RouteServiceProvider`:

```php
Route::bind('user', function (string $value) {
    return User::where('username', $value)
        ->orWhere('email', $value)
        ->firstOrFail();
});
```

**Soft deleted models**: Include trashed records using `withTrashed()`:

```php
Route::get('/users/{user}', [UserController::class, 'show'])->withTrashed();
```

### 2.7 Request and Response

**The Request object**:

```php
public function store(Request $request)
{
    $all = $request->all();                              // All input
    $name = $request->input('name', 'Guest');            // Single value
    $data = $request->only(['name', 'email']);           // Specific keys
    $data = $request->except(['_token']);                // Exclude keys
    $notify = $request->boolean('notify');                // Checkbox/boolean
    $request->has('email');                              // Key exists?
    $request->filled('email');                           // Key exists and not empty?
    $request->hasFile('avatar');                         // File upload?

    $request->flash();                                   // Flash input to session
    // or return redirect()->back()->withInput();
}
```

**Response types**:

```php
// String (auto-wrapped)
Route::get('/hello', fn() => 'Hello World');

// View
Route::get('/dashboard', fn() => view('dashboard', ['user' => $user]));

// JSON
Route::get('/api/users', fn() => response()->json([
    'data' => User::all(), 'meta' => ['total' => User::count()],
]));

// Redirect
Route::get('/old-page', fn() => redirect('/new-page'));
Route::get('/old-page', fn() => redirect()->route('home'));
Route::get('/old-page', fn() => redirect()->back()->with('status', 'Saved!'));

// File download
Route::get('/download/report', fn() => response()->download(storage_path('app/report.pdf')));

// Stream (for large data)
Route::get('/stream/users', function () {
    return response()->stream(function () {
        echo json_encode(['users' => User::all()]);
    }, 200, ['Content-Type' => 'application/json']);
});

// Custom status and headers
Route::get('/custom', fn() => response('Not Found', 404)
    ->header('X-Custom', 'value'));
```

**Macroable requests/responses**: Add methods at runtime in a service provider:

```php
Request::macro('isAdminPath', function () {
    return str_starts_with($this->path(), 'admin');
});

Response::macro('apiError', function (string $message, int $status = 400) {
    return response()->json(['error' => true, 'message' => $message], $status);
});
```

### 2.8 CSRF Protection

Laravel automatically protects state-changing requests (POST, PUT, PATCH, DELETE) against cross-site request forgery. Every form must include the CSRF token:

```blade
<form method="POST" action="/users">
    @csrf
    <input type="text" name="name">
    <button type="submit">Create</button>
</form>
```

For JavaScript SPA applications, include the token in a meta tag and configure Axios:

```blade
<meta name="csrf-token" content="{{ csrf_token() }}">
```

```javascript
axios.defaults.headers.common['X-CSRF-TOKEN'] =
    document.querySelector('meta[name="csrf-token"]').content;
```

**Excluding URIs**: Third-party webhooks (Stripe, GitHub) cannot send CSRF tokens. Exclude them in the Kernel:

```php
protected $except = [
    '/webhooks/stripe',
    '/api/*',
];
```

### 2.9 Full CRUD Example

```php
class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        return view('posts.index', [
            'posts' => Post::with('author')->latest()->paginate(12),
        ]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(StorePostRequest $request)
    {
        $post = $request->user()->posts()->create($request->validated());
        return redirect()->route('posts.show', $post)
            ->with('success', 'Post created.');
    }

    public function show(Post $post)
    {
        return view('posts.show', ['post' => $post->load('comments.author')]);
    }

    public function edit(Post $post)
    {
        $this->authorize('update', $post);
        return view('posts.edit', compact('post'));
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $this->authorize('update', $post);
        $post->update($request->validated());
        return redirect()->route('posts.show', $post)
            ->with('success', 'Post updated.');
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();
        return redirect()->route('posts.index')
            ->with('success', 'Post deleted.');
    }
}
```

```php
Route::resource('posts', PostController::class);
```

---

## Summary

- The HTTP request lifecycle follows `index.php` → `bootstrap/app.php` → Kernel → Service Providers → Router → Middleware → Controller → Response
- The service container provides automatic dependency injection with zero configuration for most classes
- Routes support all HTTP verbs, required and optional parameters, regex constraints, and naming
- Route groups share prefixes, middleware, names, and domains across multiple routes
- Middleware can be global, grouped, or assigned to individual routes with parameters
- Resource controllers map to seven RESTful actions with a single `Route::resource()` call
- Route model binding automatically resolves Eloquent models from route parameters
- The Request object provides methods for all input retrieval scenarios
- Responses support views, JSON, redirects, file downloads, streaming, and macros
- CSRF protection is automatic for web routes and can be excluded for APIs and webhooks

---

## Exercises

### Review Questions

1. Trace an HTTP request to `/users/42` from `public/index.php` through to the controller. Name every middleware that executes for a `web` route.

2. How does the service container resolve `InvoiceController` when its constructor type-hints `InvoiceService`? What happens if `InvoiceService` itself has dependencies?

3. What is the difference between implicit and explicit route model binding? When would you use explicit binding over `getRouteKeyName()`?

4. Explain the difference between global middleware, middleware groups, and route-specific middleware. In what order do they execute?

5. Why does CSRF protection not apply to GET requests? Why must every HTML form include `@csrf`?

### Application Problems

1. **Route Group Architecture**: Design routes for a multi-tenant SaaS with public routes, authenticated user routes (dashboard, profile, billing), admin routes under `/admin`, and API routes under `/api/v1`. Implement nested groups with middleware, name prefixes, and one subdomain route for custom domains.

2. **Custom Middleware with Parameters**: Create a `CheckPermission` middleware that accepts a permission string and verifies the authenticated user has it via a `can()` method. Return 401 JSON for API routes or redirect for web routes. Register and demonstrate on three routes.

3. **Advanced Request Handling**: Write an `OrderController@store` that handles file upload (proof of payment), JSON order items, conditional billing/shipping address, and returns an appropriate response using the Request methods from this chapter.

### Challenge Problem

**Task Manager REST API**: Build a complete API for a Task Manager. Create `EnsureTokenIsValid` middleware checking an `X-API-Key` header against the `api_tokens` table. Apply rate limiting (60 req/min authenticated, 10 req/min unauthenticated) using named limiters. Create `TaskController` and `ProjectController` as API resource controllers. Tasks are scoped under projects and bound by ULID (`projects/{project:ulid}/tasks/{task:ulid}`). Include soft-delete support with `withTrashed()` for 30 days. Create form request classes for validation. Define `apiSuccess($data)` and `apiError($message)` response macros in a service provider. Show all files.
