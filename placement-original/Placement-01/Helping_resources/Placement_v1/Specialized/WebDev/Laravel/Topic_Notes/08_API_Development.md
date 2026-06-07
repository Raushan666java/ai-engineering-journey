# API Development in Laravel

Laravel provides a robust set of tools for building APIs, making it easy to create RESTful services with proper authentication, validation, and response formatting.

## API Routes

### Basic Setup

API routes are defined in the `routes/api.php` file and are automatically prefixed with `/api`:

```php
// routes/api.php
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
```

### API Resource Routes

Laravel provides a convenient way to define resource routes for RESTful APIs:

```php
// Define a resource route
Route::apiResource('products', ProductController::class);

// Define multiple resource routes
Route::apiResources([
    'products' => ProductController::class,
    'categories' => CategoryController::class,
]);

// Specify only certain actions
Route::apiResource('products', ProductController::class)->only([
    'index', 'show'
]);

// Exclude certain actions
Route::apiResource('products', ProductController::class)->except([
    'create', 'edit'
]);
```

### API Versioning

```php
// Version 1 routes
Route::prefix('v1')->group(function () {
    Route::apiResource('products', API\V1\ProductController::class);
});

// Version 2 routes
Route::prefix('v2')->group(function () {
    Route::apiResource('products', API\V2\ProductController::class);
});
```

## API Controllers

### Resource Controller

```php
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductCollection;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(15);
        return new ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->validated());
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(null, 204);
    }
}
```

## API Resources

API Resources provide a transformation layer that sits between your Eloquent models and the JSON responses that are returned to your application's users.

### Single Resource

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'url' => route('products.show', $this->id),
        ];
    }
    
    /**
     * Get additional data that should be returned with the resource array.
     */
    public function with(Request $request): array
    {
        return [
            'meta' => [
                'version' => '1.0.0',
            ],
        ];
    }
}
```

### Resource Collection

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => route('products.index'),
            ],
        ];
    }
    
    /**
     * Get additional data that should be returned with the resource array.
     */
    public function with(Request $request): array
    {
        return [
            'meta' => [
                'total_count' => $this->collection->count(),
                'version' => '1.0.0',
            ],
        ];
    }
}
```

### Conditional Attributes

```php
/**
 * Transform the resource into an array.
 */
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        // Only include if user is admin
        $this->mergeWhen($request->user()->isAdmin(), [
            'secret' => $this->secret,
            'phone' => $this->phone,
        ]),
        // Only include if relationship is loaded
        'posts' => PostResource::collection($this->whenLoaded('posts')),
        // Only include if value exists
        'last_login' => $this->when($this->last_login, $this->last_login),
    ];
}
```

## API Authentication

### Laravel Sanctum

Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs.

#### Installation

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

#### Setup

```php
// app/Models/User.php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    // ...
}

// app/Http/Kernel.php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

#### Token Authentication

```php
// routes/api.php
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return ['token' => $user->createToken($request->device_name)->plainTextToken];
});

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::apiResource('products', ProductController::class);
});
```

#### Token Abilities (Scopes)

```php
// Creating token with abilities
$token = $user->createToken('admin-token', ['products:create', 'products:update']);

// Check abilities in routes
Route::middleware(['auth:sanctum', 'ability:products:create'])->post('/products', function () {
    // User can create products
});
```

#### SPA Authentication

```php
// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
    env('APP_URL') ? ','.parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),
```

## API Validation

### Request Validation

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
        ];
        
        // Add rules for update
        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            $rules['name'] = 'sometimes|required|string|max:255';
            $rules['price'] = 'sometimes|required|numeric|min:0';
            $rules['category_id'] = 'sometimes|required|exists:categories,id';
        }
        
        return $rules;
    }
}
```

### Validation in Controller

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'price' => 'required|numeric|min:0',
        'category_id' => 'required|exists:categories,id',
    ]);
    
    $product = Product::create($validated);
    
    return new ProductResource($product);
}
```

## API Responses

### Standard Response Format

```php
// Success response
return response()->json([
    'data' => $data,
    'message' => 'Resource created successfully',
], 201);

// Error response
return response()->json([
    'message' => 'Resource not found',
    'errors' => ['id' => ['The requested resource does not exist']],
], 404);
```

### Response Macros

```php
// app/Providers/AppServiceProvider.php
public function boot()
{
    Response::macro('success', function ($data = null, $message = 'Success', $status = 200) {
        return Response::json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $status);
    });

    Response::macro('error', function ($message = 'Error', $errors = [], $status = 400) {
        return Response::json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $status);
    });
}

// Usage
return response()->success($product, 'Product created', 201);
return response()->error('Validation failed', $validator->errors(), 422);
```

## API Rate Limiting

### Basic Rate Limiting

```php
// routes/api.php
Route::middleware(['throttle:60,1'])->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
});
```

### Dynamic Rate Limiting

```php
// app/Providers/RouteServiceProvider.php
protected function configureRateLimiting()
{
    RateLimiter::for('api', function (Request $request) {
        return $request->user()
            ? Limit::perMinute(60)->by($request->user()->id)
            : Limit::perMinute(10)->by($request->ip());
    });
}

// routes/api.php
Route::middleware(['throttle:api'])->group(function () {
    // API routes
});
```

## API Documentation

### OpenAPI/Swagger with L5-Swagger

```bash
composer require darkaonline/l5-swagger
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

```php
/**
 * @OA\Info(
 *     title="Laravel API",
 *     version="1.0.0",
 *     description="API Documentation"
 * )
 */
class Controller extends BaseController
{
    // ...
}

/**
 * @OA\Get(
 *     path="/api/products",
 *     summary="Get list of products",
 *     tags={"Products"},
 *     @OA\Response(
 *         response=200,
 *         description="Successful operation",
 *         @OA\JsonContent(ref="#/components/schemas/ProductCollection")
 *     )
 * )
 */
public function index()
{
    return new ProductCollection(Product::paginate());
}
```

## API Testing

### Feature Tests

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Product;
use Laravel\Sanctum\Sanctum;

class ProductApiTest extends TestCase
{
    public function test_can_get_products()
    {
        $products = Product::factory()->count(3)->create();
        
        $response = $this->getJson('/api/products');
        
        $response->assertStatus(200)
                 ->assertJsonCount(3, 'data')
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'name', 'price']
                     ]
                 ]);
    }
    
    public function test_can_create_product()
    {
        Sanctum::actingAs(
            User::factory()->create(),
            ['products:create']
        );
        
        $productData = [
            'name' => 'New Product',
            'price' => 99.99,
            'description' => 'Test product',
            'category_id' => 1,
        ];
        
        $response = $this->postJson('/api/products', $productData);
        
        $response->assertStatus(201)
                 ->assertJson([
                     'data' => [
                         'name' => 'New Product',
                         'price' => 99.99,
                     ]
                 ]);
                 
        $this->assertDatabaseHas('products', [
            'name' => 'New Product',
            'price' => 99.99,
        ]);
    }
    
    public function test_can_update_product()
    {
        Sanctum::actingAs(
            User::factory()->create(),
            ['products:update']
        );
        
        $product = Product::factory()->create();
        
        $response = $this->putJson("/api/products/{$product->id}", [
            'name' => 'Updated Product',
            'price' => 199.99,
        ]);
        
        $response->assertStatus(200)
                 ->assertJson([
                     'data' => [
                         'name' => 'Updated Product',
                         'price' => 199.99,
                     ]
                 ]);
    }
    
    public function test_can_delete_product()
    {
        Sanctum::actingAs(
            User::factory()->create(),
            ['products:delete']
        );
        
        $product = Product::factory()->create();
        
        $response = $this->deleteJson("/api/products/{$product->id}");
        
        $response->assertStatus(204);
        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }
}
```

## CORS (Cross-Origin Resource Sharing)

Laravel includes a CORS middleware that can be configured in `config/cors.php`:

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

## API Pagination

### Basic Pagination

```php
public function index()
{
    $products = Product::paginate(15);
    return ProductResource::collection($products);
}
```

### Custom Pagination

```php
public function index(Request $request)
{
    $perPage = $request->input('per_page', 15);
    $products = Product::paginate($perPage);
    return ProductResource::collection($products);
}
```

### Cursor Pagination

```php
public function index()
{
    $products = Product::cursorPaginate(15);
    return ProductResource::collection($products);
}
```

## API Filtering and Sorting

### Basic Filtering

```php
public function index(Request $request)
{
    $query = Product::query();
    
    if ($request->has('category_id')) {
        $query->where('category_id', $request->category_id);
    }
    
    if ($request->has('min_price')) {
        $query->where('price', '>=', $request->min_price);
    }
    
    if ($request->has('max_price')) {
        $query->where('price', '<=', $request->max_price);
    }
    
    if ($request->has('search')) {
        $query->where('name', 'like', '%' . $request->search . '%');
    }
    
    $products = $query->paginate(15);
    return ProductResource::collection($products);
}
```

### Sorting

```php
public function index(Request $request)
{
    $query = Product::query();
    
    // Filtering logic...
    
    // Sorting
    $sortField = $request->input('sort_by', 'created_at');
    $sortDirection = $request->input('sort_direction', 'desc');
    
    // Validate sort field to prevent SQL injection
    $allowedSortFields = ['name', 'price', 'created_at'];
    if (in_array($sortField, $allowedSortFields)) {
        $query->orderBy($sortField, $sortDirection === 'asc' ? 'asc' : 'desc');
    }
    
    $products = $query->paginate(15);
    return ProductResource::collection($products);
}
```

## API Caching

### Basic Response Caching

```php
public function index()
{
    $products = Cache::remember('products', 3600, function () {
        return Product::all();
    });
    
    return ProductResource::collection($products);
}
```

### Conditional Caching

```php
public function index(Request $request)
{
    $page = $request->input('page', 1);
    $perPage = $request->input('per_page', 15);
    
    $cacheKey = "products_page_{$page}_per_page_{$perPage}";
    
    $products = Cache::remember($cacheKey, 3600, function () use ($perPage) {
        return Product::paginate($perPage);
    });
    
    return ProductResource::collection($products);
}
```

### Cache Invalidation

```php
public function store(ProductRequest $request)
{
    $product = Product::create($request->validated());
    
    // Invalidate cache
    Cache::forget('products');
    
    return new ProductResource($product);
}
```

## Best Practices

1. **Use API Resources** for consistent response formatting
2. **Implement proper authentication** with Sanctum or Passport
3. **Validate all input** using Form Requests or validation in controllers
4. **Use meaningful HTTP status codes**
5. **Version your API** to maintain backward compatibility
6. **Implement rate limiting** to prevent abuse
7. **Document your API** with OpenAPI/Swagger
8. **Use proper HTTP methods** (GET, POST, PUT, DELETE)
9. **Include pagination** for large collections
10. **Write comprehensive tests** for your API endpoints

## Common API Patterns

### API Versioning

```php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('products', API\V1\ProductController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('products', API\V2\ProductController::class);
});
```

### API Response Transformation

```php
// app/Transformers/ProductTransformer.php
class ProductTransformer extends TransformerAbstract
{
    protected $availableIncludes = ['category', 'tags'];
    
    public function transform(Product $product)
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'formatted_price' => '$' . number_format($product->price, 2),
            'description' => $product->description,
            'created_at' => $product->created_at->toIso8601String(),
            'updated_at' => $product->updated_at->toIso8601String(),
        ];
    }
    
    public function includeCategory(Product $product)
    {
        if ($product->category) {
            return $this->item($product->category, new CategoryTransformer);
        }
    }
    
    public function includeTags(Product $product)
    {
        return $this->collection($product->tags, new TagTransformer);
    }
}
```

### API Error Handling

```php
// app/Exceptions/Handler.php
public function render($request, Throwable $exception)
{
    if ($request->expectsJson()) {
        if ($exception instanceof ValidationException) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $exception->errors(),
            ], 422);
        }
        
        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'message' => 'Resource not found.',
            ], 404);
        }
        
        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'message' => 'Unauthenticated.',
            ], 401);
        }
        
        if ($exception instanceof AuthorizationException) {
            return response()->json([
                'message' => 'Forbidden.',
            ], 403);
        }
    }
    
    return parent::render($request, $exception);
}
```

## References

- [Laravel API Documentation](https://laravel.com/docs/12.x/eloquent-resources)
- [Laravel Sanctum Documentation](https://laravel.com/docs/12.x/sanctum)
- [Laravel API Testing](https://laravel.com/docs/12.x/http-tests)
- [Laravel CORS Documentation](https://laravel.com/docs/12.x/routing#cors)