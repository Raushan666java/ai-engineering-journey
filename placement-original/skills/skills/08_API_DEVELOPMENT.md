# API Development Mastery 🌐

## Complete Guide to Building Production-Ready APIs

---

## Table of Contents

1. [API Fundamentals](#api-fundamentals)
2. [RESTful API Design](#restful-api-design)
3. [Laravel API Development](#laravel-api-development)
4. [Authentication & Authorization](#authentication-authorization)
5. [API Versioning](#api-versioning)
6. [Request Validation](#request-validation)
7. [Response Formatting](#response-formatting)
8. [Error Handling](#error-handling)
9. [Rate Limiting & Throttling](#rate-limiting-throttling)
10. [API Documentation](#api-documentation)
11. [Testing APIs](#testing-apis)
12. [API Security](#api-security)
13. [Performance Optimization](#performance-optimization)
14. [GraphQL APIs](#graphql-apis)

---

## API Fundamentals

### What is an API?

**API (Application Programming Interface)** - A set of rules that allows different software applications to communicate.

### Types of APIs

```
1. REST (Representational State Transfer)
   - Most common
   - Uses HTTP methods
   - Stateless
   - JSON/XML responses

2. GraphQL
   - Query language
   - Request exactly what you need
   - Single endpoint

3. SOAP (Simple Object Access Protocol)
   - XML-based
   - Enterprise systems
   - Strict standards

4. gRPC
   - Google's RPC framework
   - Protocol Buffers
   - High performance
```

### HTTP Methods

```bash
GET     - Retrieve resource(s)
POST    - Create new resource
PUT     - Update/Replace entire resource
PATCH   - Partial update of resource
DELETE  - Delete resource
OPTIONS - Get allowed methods
HEAD    - Get headers only
```

### HTTP Status Codes

```
2xx - Success
200 OK                  - Request succeeded
201 Created            - Resource created
204 No Content         - Success but no content

3xx - Redirection
301 Moved Permanently  - Resource moved
304 Not Modified       - Use cached version

4xx - Client Errors
400 Bad Request        - Invalid request
401 Unauthorized       - Authentication required
403 Forbidden          - No permission
404 Not Found          - Resource doesn't exist
422 Unprocessable      - Validation failed
429 Too Many Requests  - Rate limit exceeded

5xx - Server Errors
500 Internal Error     - Server error
502 Bad Gateway        - Invalid response from upstream
503 Service Unavailable - Server overloaded
```

---

## RESTful API Design

### Resource Naming Conventions

```bash
# Good - Use nouns, not verbs
GET    /api/users           # Get all users
GET    /api/users/123       # Get specific user
POST   /api/users           # Create user
PUT    /api/users/123       # Update user
DELETE /api/users/123       # Delete user

# Good - Nested resources
GET    /api/users/123/orders        # Get user's orders
POST   /api/users/123/orders        # Create order for user
GET    /api/users/123/orders/456    # Get specific order

# Bad - Using verbs
GET    /api/getUsers
POST   /api/createUser
GET    /api/deleteUser/123
```

### RESTful Best Practices

```bash
# 1. Use plural nouns
GET /api/users       # ✅ Good
GET /api/user        # ❌ Bad

# 2. Use hyphens, not underscores
GET /api/user-profiles     # ✅ Good
GET /api/user_profiles     # ❌ Bad

# 3. Use query parameters for filtering
GET /api/users?role=admin&status=active
GET /api/products?category=electronics&price_min=100&price_max=500

# 4. Use pagination
GET /api/users?page=2&per_page=20

# 5. Support sorting
GET /api/users?sort=created_at&order=desc

# 6. Use proper HTTP methods
POST   /api/users           # Create
GET    /api/users           # Read all
GET    /api/users/123       # Read one
PUT    /api/users/123       # Update (full)
PATCH  /api/users/123       # Update (partial)
DELETE /api/users/123       # Delete
```

---

## Laravel API Development

### Setting Up API Routes

```php
// routes/api.php
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\OrderController;

Route::prefix('v1')->group(function () {
    // Public routes
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    // Protected routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [AuthController::class, 'user']);
        Route::post('/logout', [AuthController::class, 'logout']);

        // Users resource
        Route::apiResource('users', UserController::class);

        // Orders
        Route::apiResource('orders', OrderController::class);
        Route::get('users/{user}/orders', [UserController::class, 'orders']);
    });
});
```

### API Controller

```php
// app/Http/Controllers/Api/UserController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    /**
     * Display a listing of users.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $users = User::query()
            ->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%");
            })
            ->when(request('role'), function ($query, $role) {
                $query->where('role', $role);
            })
            ->when(request('sort'), function ($query, $sort) {
                $order = request('order', 'asc');
                $query->orderBy($sort, $order);
            }, function ($query) {
                $query->latest();
            })
            ->paginate(request('per_page', 15));

        return UserResource::collection($users);
    }

    /**
     * Store a newly created user.
     *
     * @param StoreUserRequest $request
     * @return UserResource
     */
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        return new UserResource($user);
    }

    /**
     * Display the specified user.
     *
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return new UserResource($user->load('orders', 'profile'));
    }

    /**
     * Update the specified user.
     *
     * @param UpdateUserRequest $request
     * @param User $user
     * @return UserResource
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());

        return new UserResource($user);
    }

    /**
     * Remove the specified user.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ], 204);
    }
}
```

### API Resources (Response Formatting)

```php
// app/Http/Resources/UserResource.php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->role,
            'avatar' => $this->avatar_url,
            'created_at' => $this->created_at->toISOString(),
            'updated_at' => $this->updated_at->toISOString(),

            // Conditional attributes
            'email_verified_at' => $this->when(
                $request->user()?->isAdmin(),
                $this->email_verified_at
            ),

            // Relationships
            'orders' => OrderResource::collection($this->whenLoaded('orders')),
            'profile' => new ProfileResource($this->whenLoaded('profile')),

            // Computed attributes
            'total_orders' => $this->when(
                $this->relationLoaded('orders'),
                $this->orders->count()
            ),
        ];
    }

    /**
     * Get additional data for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function with($request): array
    {
        return [
            'meta' => [
                'version' => '1.0.0',
                'timestamp' => now()->toISOString(),
            ]
        ];
    }
}
```

### API Resource Collection

```php
// app/Http/Resources/UserCollection.php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'data' => $this->collection,
            'meta' => [
                'total' => $this->total(),
                'current_page' => $this->currentPage(),
                'last_page' => $this->lastPage(),
                'per_page' => $this->perPage(),
            ],
            'links' => [
                'first' => $this->url(1),
                'last' => $this->url($this->lastPage()),
                'prev' => $this->previousPageUrl(),
                'next' => $this->nextPageUrl(),
            ],
        ];
    }
}
```

---

## Authentication & Authorization

### Laravel Sanctum (Token-Based Auth)

```php
// Install Sanctum
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate

// app/Http/Controllers/Api/AuthController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Register new user
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201);
    }

    /**
     * Login user
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Revoke all previous tokens
        $user->tokens()->delete();

        // Create new token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * Logout user
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
```

### API Token Usage

```javascript
// Frontend: Store token
localStorage.setItem("token", response.access_token);

// Frontend: Use token in requests
fetch("http://api.example.com/api/users", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
```

### Role-Based Authorization

```php
// app/Policies/UserPolicy.php
namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isModerator();
    }

    public function view(User $user, User $model): bool
    {
        return $user->isAdmin() || $user->id === $model->id;
    }

    public function update(User $user, User $model): bool
    {
        return $user->isAdmin() || $user->id === $model->id;
    }

    public function delete(User $user, User $model): bool
    {
        return $user->isAdmin() && $user->id !== $model->id;
    }
}

// Controller
public function update(UpdateUserRequest $request, User $user)
{
    $this->authorize('update', $user);

    $user->update($request->validated());

    return new UserResource($user);
}
```

---

## API Versioning

### URL Versioning (Recommended)

```php
// routes/api.php

// Version 1
Route::prefix('v1')->group(function () {
    Route::apiResource('users', Api\V1\UserController::class);
    Route::apiResource('orders', Api\V1\OrderController::class);
});

// Version 2 (with breaking changes)
Route::prefix('v2')->group(function () {
    Route::apiResource('users', Api\V2\UserController::class);
    Route::apiResource('orders', Api\V2\OrderController::class);
});

// Usage:
// GET /api/v1/users
// GET /api/v2/users
```

### Header Versioning

```php
// Middleware
namespace App\Http\Middleware;

class ApiVersion
{
    public function handle($request, Closure $next)
    {
        $version = $request->header('API-Version', 'v1');

        config(['api.version' => $version]);

        return $next($request);
    }
}

// Usage:
// GET /api/users
// Header: API-Version: v2
```

### Versioning Strategy

```php
// app/Http/Controllers/Api/V1/UserController.php
namespace App\Http\Controllers\Api\V1;

class UserController extends Controller
{
    public function index()
    {
        return User::all(); // Simple response
    }
}

// app/Http/Controllers/Api/V2/UserController.php
namespace App\Http\Controllers\Api\V2;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(
            User::with('profile', 'orders')->paginate()
        ); // Enhanced response with relationships
    }
}
```

---

## Request Validation

### Form Request Validation

```php
// app/Http/Requests/StoreUserRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules.
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:user,admin,moderator',
            'phone' => 'nullable|regex:/^[0-9]{10}$/',
            'date_of_birth' => 'nullable|date|before:today',
            'address' => 'nullable|array',
            'address.street' => 'required_with:address|string',
            'address.city' => 'required_with:address|string',
            'address.country' => 'required_with:address|string|size:2',
        ];
    }

    /**
     * Get custom error messages.
     */
    public function messages(): array
    {
        return [
            'email.unique' => 'This email is already registered.',
            'password.min' => 'Password must be at least 8 characters.',
            'role.in' => 'Invalid role selected.',
        ];
    }

    /**
     * Get custom attribute names.
     */
    public function attributes(): array
    {
        return [
            'date_of_birth' => 'date of birth',
        ];
    }

    /**
     * Handle a failed validation attempt.
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'errors' => $validator->errors()
        ], 422));
    }
}
```

### Custom Validation Rules

```php
// app/Rules/ValidCouponCode.php
namespace App\Rules;

use App\Models\Coupon;
use Illuminate\Contracts\Validation\Rule;

class ValidCouponCode implements Rule
{
    public function passes($attribute, $value): bool
    {
        return Coupon::where('code', $value)
            ->where('is_active', true)
            ->where('expires_at', '>', now())
            ->exists();
    }

    public function message(): string
    {
        return 'The coupon code is invalid or expired.';
    }
}

// Usage in Request
public function rules(): array
{
    return [
        'coupon_code' => ['nullable', 'string', new ValidCouponCode],
    ];
}
```

---

## Response Formatting

### Consistent JSON Response Structure

```php
// app/Traits/ApiResponse.php
namespace App\Traits;

trait ApiResponse
{
    /**
     * Success response
     */
    protected function successResponse($data, string $message = null, int $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Error response
     */
    protected function errorResponse(string $message, int $code = 400, $errors = null)
    {
        $response = [
            'success' => false,
            'message' => $message,
        ];

        if ($errors) {
            $response['errors'] = $errors;
        }

        return response()->json($response, $code);
    }

    /**
     * Paginated response
     */
    protected function paginatedResponse($collection, string $message = null)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $collection->items(),
            'meta' => [
                'current_page' => $collection->currentPage(),
                'last_page' => $collection->lastPage(),
                'per_page' => $collection->perPage(),
                'total' => $collection->total(),
            ],
            'links' => [
                'first' => $collection->url(1),
                'last' => $collection->url($collection->lastPage()),
                'prev' => $collection->previousPageUrl(),
                'next' => $collection->nextPageUrl(),
            ],
        ]);
    }
}

// Usage in Controller
use App\Traits\ApiResponse;

class UserController extends Controller
{
    use ApiResponse;

    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        return $this->successResponse(
            new UserResource($user),
            'User created successfully',
            201
        );
    }

    public function index()
    {
        $users = User::paginate(15);

        return $this->paginatedResponse(
            $users,
            'Users retrieved successfully'
        );
    }
}
```

---

## Error Handling

### Global Exception Handler

```php
// app/Exceptions/Handler.php
namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $e)
    {
        if ($request->is('api/*')) {
            return $this->handleApiException($request, $e);
        }

        return parent::render($request, $e);
    }

    private function handleApiException($request, Throwable $e)
    {
        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found',
            ], 404);
        }

        if ($e instanceof NotFoundHttpException) {
            return response()->json([
                'success' => false,
                'message' => 'Endpoint not found',
            ], 404);
        }

        if ($e instanceof MethodNotAllowedHttpException) {
            return response()->json([
                'success' => false,
                'message' => 'Method not allowed',
            ], 405);
        }

        if ($e instanceof ValidationException) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }

        // Generic error
        $statusCode = method_exists($e, 'getStatusCode')
            ? $e->getStatusCode()
            : 500;

        return response()->json([
            'success' => false,
            'message' => config('app.debug')
                ? $e->getMessage()
                : 'Server error',
            'trace' => config('app.debug') ? $e->getTrace() : null,
        ], $statusCode);
    }
}
```

---

## Rate Limiting & Throttling

```php
// app/Http/Kernel.php
protected $middlewareGroups = [
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];

// config/app.php - RouteServiceProvider
Route::middleware('api')
    ->prefix('api')
    ->group(function () {
        Route::middleware('throttle:60,1')->group(function () {
            // 60 requests per minute
        });

        Route::middleware('throttle:100,1')->group(function () {
            // 100 requests per minute for premium users
        });
    });

// Custom rate limiter
// app/Providers/RouteServiceProvider.php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

protected function configureRateLimiting()
{
    RateLimiter::for('api', function (Request $request) {
        return $request->user()?->isPremium()
            ? Limit::perMinute(100)
            : Limit::perMinute(60);
    });
}
```

---

**This is your complete guide to building production-ready APIs! 🚀**

Continue to Part 2 for API Documentation, Testing, Security, and GraphQL...
