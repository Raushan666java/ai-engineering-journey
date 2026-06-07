# 7. Laravel as an API Backend

## API Routes and Controllers

### API Routes
```php
// routes/api.php
use App\Http\Controllers\API\ProductController;

// All routes in this file are prefixed with 'api'
Route::apiResource('products', ProductController::class);

// API versioning with prefixes
Route::prefix('v1')->group(function () {
    Route::apiResource('users', UserControllerV1::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('users', UserControllerV2::class);
});
```

### API Controllers
```php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductCollection;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return new ProductCollection(Product::paginate());
    }
    
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());
        return new ProductResource($product);
    }
    
    public function show(Product $product)
    {
        return new ProductResource($product);
    }
    
    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return new ProductResource($product);
    }
    
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
```

## API Resources

### Resource Classes
```php
// Generate resource: php artisan make:resource ProductResource
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'category' => new CategoryResource($this->whenLoaded('category')),
        ];
    }
}
```

### Resource Collections
```php
// Generate collection: php artisan make:resource ProductCollection
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => route('products.index'),
            ],
            'meta' => [
                'total_count' => $this->collection->count(),
            ],
        ];
    }
}
```

### Conditional Attributes
```php
return [
    'id' => $this->id,
    'name' => $this->name,
    $this->mergeWhen($request->user()->isAdmin(), [
        'secret' => $this->secret,
        'admin_note' => $this->admin_note,
    ]),
    'created_at' => $this->created_at,
];
```

## API Authentication with Sanctum

### Installation and Setup
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### Configuration
```php
// app/Http/Kernel.php
protected $middlewareGroups = [
    // ...
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];
```

### Token Authentication
```php
// routes/api.php
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = $request->user();
    $token = $user->createToken('api-token');

    return response()->json(['token' => $token->plainTextToken]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::apiResource('products', ProductController::class);
});
```

### SPA Authentication
```php
// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
    env('APP_URL') ? ','.parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),
```

### Token Abilities (Scopes)
```php
// Creating token with abilities
$token = $user->createToken('api-token', ['products:read', 'products:write']);

// Checking abilities in routes
Route::middleware(['auth:sanctum', 'ability:products:read'])->get('/products', function () {
    // User can read products
});
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
Route::middleware(['throttle:api'])->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
});

// app/Providers/RouteServiceProvider.php
protected function configureRateLimiting()
{
    RateLimiter::for('api', function (Request $request) {
        return $request->user()
            ? Limit::perMinute(100)->by($request->user()->id)
            : Limit::perMinute(10)->by($request->ip());
    });
}
```

## API Responses

### Response Formats
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

## API Versioning

### URI Versioning
```php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductControllerV1::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('products', ProductControllerV2::class);
});
```

### Header Versioning
```php
// routes/api.php
Route::middleware('api.version:1')->group(function () {
    Route::apiResource('products', ProductControllerV1::class);
});

Route::middleware('api.version:2')->group(function () {
    Route::apiResource('products', ProductControllerV2::class);
});

// app/Http/Middleware/ApiVersion.php
class ApiVersion
{
    public function handle($request, Closure $next, $version)
    {
        if ($request->header('Accept-Version') !== $version) {
            return response()->json(['error' => 'API version not supported'], 400);
        }
        
        return $next($request);
    }
}
```

## CORS Configuration

### Basic Setup
```php
// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000', 'https://example.com'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
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

## Testing APIs

### Feature Tests
```php
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
            ['products:write']
        );
        
        $productData = [
            'name' => 'New Product',
            'price' => 99.99,
            'description' => 'Test product'
        ];
        
        $response = $this->postJson('/api/products', $productData);
        
        $response->assertStatus(201)
                 ->assertJson([
                     'data' => [
                         'name' => 'New Product',
                         'price' => 99.99
                     ]
                 ]);
                 
        $this->assertDatabaseHas('products', $productData);
    }
}
```

## Best Learning Methods
- Build a complete RESTful API with resource controllers
- Implement token authentication with Sanctum
- Create API resources for data transformation
- Add rate limiting to protect your API
- Set up proper API versioning
- Configure CORS for frontend integration
- Document your API with OpenAPI/Swagger
- Write comprehensive API tests
- Test endpoints with Postman or Insomnia
- Reference: https://laravel.com/docs/12.x/sanctum
