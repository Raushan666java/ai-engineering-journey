# 🌐 STAGE 1B — API Design & Clean Architecture

> **Level:** Intermediate → Advanced  
> **Duration:** 1–2 Weeks  
> **Prerequisites:** Basic Laravel, HTTP fundamentals

---

## 📋 Table of Contents

1. [REST API Fundamentals](#1-rest-api-fundamentals)
2. [API Resource Design](#2-api-resource-design)
3. [Authentication — Sanctum & JWT](#3-authentication--sanctum--jwt)
4. [API Versioning](#4-api-versioning)
5. [Request Validation](#5-request-validation)
6. [API Resources & Transformers](#6-api-resources--transformers)
7. [Error Handling](#7-error-handling)
8. [Rate Limiting](#8-rate-limiting)
9. [Clean Architecture / Domain-Driven Design](#9-clean-architecture)
10. [API Documentation — Swagger/OpenAPI](#10-api-documentation)

---

## 1. REST API Fundamentals

### HTTP Methods & Their Meaning

| Method | Purpose | Idempotent | Body |
|--------|---------|------------|------|
| `GET` | Read/Retrieve | ✅ Yes | No |
| `POST` | Create | ❌ No | Yes |
| `PUT` | Full Update | ✅ Yes | Yes |
| `PATCH` | Partial Update | ✅ Yes | Yes |
| `DELETE` | Remove | ✅ Yes | No |

### Status Codes Every Developer Must Know

```
200 OK           — Successful GET/PUT/PATCH
201 Created      — Successful POST (resource created)
204 No Content   — Successful DELETE
400 Bad Request  — Invalid data sent
401 Unauthorized — Not authenticated
403 Forbidden    — Authenticated but no permission
404 Not Found    — Resource doesn't exist
409 Conflict     — Duplicate or state conflict
422 Unprocessable — Validation failed
429 Too Many     — Rate limited
500 Server Error — Something broke on our end
```

### URL Naming Conventions

```
✅ GOOD (Nouns, plural, lowercase, kebab-case)
GET    /api/v1/users
GET    /api/v1/users/123
POST   /api/v1/users
PUT    /api/v1/users/123
DELETE /api/v1/users/123
GET    /api/v1/users/123/orders
GET    /api/v1/order-items

❌ BAD
GET    /api/getUsers
POST   /api/createUser
GET    /api/user_list
DELETE /api/removeUser/123
```

### Query Parameters For Filtering, Sorting, Pagination
```
GET /api/v1/products?category=electronics&sort=-price&page=2&per_page=20
GET /api/v1/users?search=john&role=admin&include=posts,comments
```

---

## 2. API Resource Design

### Route Structure in Laravel
```php
// routes/api.php
Route::prefix('v1')->group(function () {
    // Public routes
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    // Protected routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        // Resource routes
        Route::apiResource('users', UserController::class);
        Route::apiResource('products', ProductController::class);

        // Nested resources
        Route::apiResource('users.orders', UserOrderController::class)
            ->shallow(); // /users/1/orders and /orders/1

        // Custom actions
        Route::post('/users/{user}/activate', [UserController::class, 'activate']);
        Route::get('/products/export', [ProductController::class, 'export']);
    });
});
```

---

## 3. Authentication — Sanctum & JWT

### Laravel Sanctum (Recommended)

**Installation:**
```bash
php artisan install:api
```

**Register:**
```php
public function register(RegisterRequest $request): JsonResponse
{
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'user' => new UserResource($user),
        'token' => $token,
        'token_type' => 'Bearer',
    ], 201);
}
```

**Login:**
```php
public function login(LoginRequest $request): JsonResponse
{
    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'user' => new UserResource($user),
        'token' => $token,
        'token_type' => 'Bearer',
    ]);
}
```

**Protecting Routes:**
```php
Route::middleware('auth:sanctum')->group(function () {
    // Only authenticated users can access these routes
});
```

**Making Requests:**
```
Authorization: Bearer <your-token-here>
```

### Token Abilities (Permissions)
```php
// Create token with specific abilities
$token = $user->createToken('api-token', ['read', 'write'])->plainTextToken;

// Check abilities in middleware
Route::get('/orders', [OrderController::class, 'index'])
    ->middleware('ability:read');

// Check in controller
if ($request->user()->tokenCan('write')) {
    // Can write
}
```

---

## 4. API Versioning

### URL-Based Versioning (Most Common)
```php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('users', V1\UserController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('users', V2\UserController::class);
});
```

### Directory Structure
```
app/Http/Controllers/
├── Api/
│   ├── V1/
│   │   ├── UserController.php
│   │   └── ProductController.php
│   └── V2/
│       ├── UserController.php
│       └── ProductController.php
```

---

## 5. Request Validation

### Form Request Classes
```php
<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', Product::class);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:0.01', 'max:999999.99'],
            'category_id' => ['required', 'exists:categories,id'],
            'sku' => ['required', 'string', 'unique:products,sku'],
            'tags' => ['sometimes', 'array'],
            'tags.*' => ['string', 'max:50'],
            'images' => ['sometimes', 'array', 'max:5'],
            'images.*' => ['image', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'price.min' => 'Price must be at least $0.01',
            'sku.unique' => 'This SKU is already taken',
        ];
    }

    // Override to return JSON validation errors
    protected function failedValidation(Validator $validator): void
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422)
        );
    }
}
```

---

## 6. API Resources & Transformers

### 🧠 Why API Resources?

Never return raw Eloquent models. API Resources control exactly what data clients receive.

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'price' => [
                'amount' => $this->price,
                'currency' => 'INR',
                'formatted' => '₹' . number_format($this->price, 2),
            ],
            'category' => new CategoryResource($this->whenLoaded('category')),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'images' => $this->images->map(fn ($img) => asset("storage/{$img->path}")),
            'is_available' => $this->stock > 0,
            'rating' => round($this->reviews_avg_rating, 1),
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
```

### Collection Resource
```php
class ProductCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'meta' => [
                'total' => $this->total(),
                'per_page' => $this->perPage(),
                'current_page' => $this->currentPage(),
            ],
        ];
    }
}
```

### Usage in Controller
```php
public function index(Request $request): ProductCollection
{
    $products = Product::with(['category', 'tags'])
        ->withAvg('reviews', 'rating')
        ->filter($request->only(['category', 'search', 'min_price', 'max_price']))
        ->sort($request->get('sort', '-created_at'))
        ->paginate($request->integer('per_page', 15));

    return new ProductCollection($products);
}

public function show(Product $product): ProductResource
{
    $product->load(['category', 'tags', 'reviews.user']);
    return new ProductResource($product);
}
```

---

## 7. Error Handling

### Global API Exception Handler
```php
// app/Exceptions/Handler.php
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

public function render($request, Throwable $e)
{
    if ($request->expectsJson()) {
        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                'message' => 'Resource not found',
                'error' => 'not_found',
            ], 404);
        }

        if ($e instanceof AuthenticationException) {
            return response()->json([
                'message' => 'Unauthenticated',
                'error' => 'unauthenticated',
            ], 401);
        }

        // Fallback for unhandled errors
        return response()->json([
            'message' => 'Internal server error',
            'error' => config('app.debug') ? $e->getMessage() : 'server_error',
        ], 500);
    }

    return parent::render($request, $e);
}
```

### Custom API Exceptions
```php
class InsufficientBalanceException extends \Exception
{
    public function render($request)
    {
        return response()->json([
            'message' => 'Insufficient balance for this transaction',
            'error' => 'insufficient_balance',
            'required' => $this->getMessage(),
        ], 402);
    }
}
```

---

## 8. Rate Limiting

```php
// app/Providers/RouteServiceProvider.php
RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});

// Different limits for different plans
RateLimiter::for('api', function (Request $request) {
    $user = $request->user();

    return match ($user?->plan) {
        'enterprise' => Limit::perMinute(1000)->by($user->id),
        'pro' => Limit::perMinute(200)->by($user->id),
        default => Limit::perMinute(60)->by($user?->id ?: $request->ip()),
    };
});
```

---

## 9. Clean Architecture

### Directory Structure
```
app/
├── Domain/           # Core business logic (no framework dependency)
│   ├── User/
│   │   ├── Models/
│   │   ├── Actions/
│   │   ├── DTOs/
│   │   └── Events/
│   └── Product/
├── Infrastructure/   # External services, database
│   ├── Repositories/
│   ├── Services/
│   └── Providers/
├── Http/             # Controllers, Requests, Resources
│   ├── Controllers/
│   ├── Requests/
│   └── Resources/
```

### Data Transfer Objects (DTOs)
```php
class CreateProductDTO
{
    public function __construct(
        public readonly string $name,
        public readonly string $description,
        public readonly float $price,
        public readonly int $categoryId,
        public readonly string $sku,
        public readonly array $tags = [],
    ) {}

    public static function fromRequest(StoreProductRequest $request): self
    {
        return new self(
            name: $request->validated('name'),
            description: $request->validated('description'),
            price: $request->validated('price'),
            categoryId: $request->validated('category_id'),
            sku: $request->validated('sku'),
            tags: $request->validated('tags', []),
        );
    }
}
```

---

## 10. API Documentation — Swagger/OpenAPI

```bash
composer require darkaonline/l5-swagger
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

```php
/**
 * @OA\Get(
 *     path="/api/v1/products",
 *     summary="List products",
 *     tags={"Products"},
 *     security={{"bearerAuth":{}}},
 *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
 *     @OA\Parameter(name="per_page", in="query", @OA\Schema(type="integer")),
 *     @OA\Response(response=200, description="Successful",
 *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Product"))
 *     ),
 *     @OA\Response(response=401, description="Unauthenticated")
 * )
 */
public function index(Request $request): ProductCollection
{
    // ...
}
```

---

## 📚 Resources

- [RESTful API Design Guide](https://restfulapi.net/)
- [JSON:API Specification](https://jsonapi.org/)
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)

---

*Next: [Database Scaling & Redis →](./03_DATABASE_SCALING_REDIS.md)*
