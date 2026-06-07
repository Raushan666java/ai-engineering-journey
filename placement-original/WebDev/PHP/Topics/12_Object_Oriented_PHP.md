# 12. Object Oriented PHP — Complete Guide

## Part 1: OOP Fundamentals

### Classes and Objects

```php
<?php
// Basic class
class User {
    // Properties
    public string $name;
    public int $age;
    private string $email;

    // Constructor
    public function __construct(string $name, int $age, string $email) {
        $this->name = $name;
        $this->age = $age;
        $this->email = $email;
    }

    // Method
    public function greet(): string {
        return "Hello, I'm {$this->name}";
    }

    // Getter
    public function getEmail(): string {
        return $this->email;
    }
}

// Create object
$user = new User("Alice", 25, "alice@example.com");
echo $user->greet();  // Hello, I'm Alice
echo $user->name;     // Alice
// echo $user->email;  // Error: Cannot access private property
echo $user->getEmail();  // alice@example.com
?>
```

### Constructor Property Promotion (PHP 8.0+)

```php
<?php
// Before PHP 8.0
class UserOld {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

// PHP 8.0+ (shorter syntax)
class User {
    public function __construct(
        public string $name,
        public int $age,
        private string $email
    ) {}
}

$user = new User("Bob", 30, "bob@example.com");
?>
```

---

## Part 2: OOP Features in Laravel

### 1. Classes and Traits: Eloquent Model

```php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\SoftDeletes;
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;

// "extends" for inheritance
class Post extends Model
{
    // "use" for traits
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content', 'user_id'];
    protected $dates = ['deleted_at'];

    // Relationship
    public function user() {
        return $this->belongsTo(User::class);
    }

    // Scope
    public function scopePublished($query) {
        return $query->where('status', 'published');
    }
}

// Usage
$posts = Post::published()->get();
?>
```

**Key Concepts:**

- `extends Model`: Inherits all Eloquent functionality
- `use HasFactory`: Adds factory methods for testing
- `use SoftDeletes`: Adds soft delete capability (trait adds methods and properties)

---

### 2. Aliases and Multi-Level "extends"

```php
<?php
namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

// Multi-level inheritance:
// User -> Authenticatable -> Model -> ...
class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['password', 'remember_token'];
    protected $casts = ['email_verified_at' => 'datetime'];

    // Custom methods
    public function isAdmin(): bool {
        return $this->role === 'admin';
    }
}

// Inheritance chain:
// User extends Authenticatable
// Authenticatable extends Model
// Model extends (multiple base classes)
?>
```

**Alias Example:**

```php
<?php
// Import with alias
use App\\Models\\User as UserModel;
use App\\Services\\User as UserService;

$user = new UserModel();
$service = new UserService();
?>
```

---

### 3. "implements" vs "extends": Interfaces

```php
<?php
namespace App\\Models;

use Filament\\Models\\Contracts\\FilamentUser;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;

// "implements" for interfaces
// "extends" for classes
class User extends Authenticatable implements FilamentUser
{
    // Must implement interface methods
    public function canAccessFilament(): bool {
        return $this->isAdmin();
    }

    private function isAdmin(): bool {
        return $this->role === 'admin';
    }
}

// Multiple interfaces
interface Auditable {}
interface Exportable {}

class Post extends Model implements Auditable, Exportable
{
    // Implement all interface methods
}
?>
```

**Key Differences:**

- `extends`: Inherit from ONE parent class (single inheritance)
- `implements`: Implement MULTIPLE interfaces (multiple inheritance of contracts)

---

### 4. Interface with Trait: Spatie Media

```php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Spatie\\MediaLibrary\\HasMedia;  // Interface
use Spatie\\MediaLibrary\\InteractsWithMedia;  // Trait

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;  // Provides implementation for HasMedia

    // Register media collections
    public function registerMediaCollections(): void {
        $this->addMediaCollection('images')
            ->singleFile();

        $this->addMediaCollection('documents')
            ->acceptsMimeTypes(['application/pdf']);
    }
}

// Usage
$product = Product::find(1);
$product->addMedia($request->file('image'))
    ->toMediaCollection('images');

$images = $product->getMedia('images');
?>
```

**Pattern:**

- `HasMedia`: Interface (contract)
- `InteractsWithMedia`: Trait (implementation)
- This allows flexibility: you can implement the interface differently if needed

---

### 5. Override/Extend Functions of Laravel Packages

```php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    // Override parent method
    public function save(array $options = []) {
        // Custom logic before save
        $this->slug = \\Str::slug($this->name);

        // Call parent method
        return parent::save($options);
    }

    // Extend boot method
    protected static function boot() {
        parent::boot();

        // Add custom event listener
        static::creating(function ($user) {
            $user->uuid = \\Str::uuid();
        });
    }
}

// Extend package class
namespace App\\Services;

use Spatie\\Permission\\Models\\Role as SpatieRole;

class Role extends SpatieRole
{
    // Add custom methods
    public function isSystemRole(): bool {
        return in_array($this->name, ['admin', 'super-admin']);
    }

    // Override method
    public function delete() {
        if ($this->isSystemRole()) {
            throw new \\Exception('Cannot delete system roles');
        }

        return parent::delete();
    }
}
?>
```

---

### 6. Controller Response Methods: Traits vs General Controller

```php
<?php
namespace App\\Http\\Controllers;

use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Response;

// Option 1: Base Controller with response methods
class Controller
{
    protected function successResponse($data, $message = 'Success', $code = 200): JsonResponse {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function errorResponse($message, $code = 400): JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $code);
    }
}

// Option 2: Use trait for response methods
trait ApiResponses
{
    protected function successResponse($data, $message = 'Success', $code = 200): JsonResponse {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function errorResponse($message, $code = 400): JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $code);
    }
}

// Usage with trait
class UserController extends Controller
{
    use ApiResponses;

    public function index() {
        $users = User::all();
        return $this->successResponse($users, 'Users retrieved');
    }

    public function show($id) {
        $user = User::find($id);

        if (!$user) {
            return $this->errorResponse('User not found', 404);
        }

        return $this->successResponse($user);
    }
}
?>
```

**When to use Traits:**

- Reusable across multiple unrelated classes
- You need multiple inheritance of behavior
- Example: ApiResponses, Auditable, HasUuid

---

### 7. Visibility: public/private/protected

`php\n<?php\nclass BankAccount {\n    // Public: accessible everywhere\n    public string $accountNumber;\n    \n    // Protected: accessible in this class and child classes\n    protected float $balance = 0;\n    \n    // Private: accessible only in this class\n    private string $pin;\n    \n    public function __construct(string $accountNumber, string $pin) {\n        $this->accountNumber = $accountNumber;\n        $this->pin = $pin;\n    }\n    \n    public function deposit(float $amount): void {\n        $this->validateAmount($amount);  // Private method\n        $this->balance += $amount;\n    }\n    \n    public function getBalance(): float {\n        return $this->balance;\n    }\n    \n    protected function validateAmount(float $amount): void {\n        if ($amount <= 0) {\n            throw new \\Exception('Amount must be positive');\n        }\n    }\n    \n    private function verifyPin(string $pin): bool {\n        return $this->pin === $pin;\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    public function addInterest(float $rate): void {\n        // Can access protected property\n        $interest = $this->balance * $rate;\n        $this->balance += $interest;\n        \n        // Can call protected method\n        $this->validateAmount($interest);\n        \n        // Cannot access private property $pin\n        // $this->pin;  // Error\n    }\n}\n\n$account = new BankAccount('ACC123', '1234');\necho $account->accountNumber;  // OK: public\necho $account->getBalance();   // OK: public method\n// echo $account->balance;      // Error: protected\n// echo $account->pin;          // Error: private\n?>\n`\n\n**Best Practices:**\n- Use `private` by default\n- Use `protected` if child classes might need access\n- Use `public` only for the API you want to expose\n\n---\n\n### 8. Static, New Object, and Laravel Auto-Resolving\n\n#### Static Methods and Properties\n\n`php\n<?php\nclass MathHelper {\n    public static int $count = 0;\n    \n    public static function add(int $a, int $b): int {\n        self::$count++;  // Access static property with self::\n        return $a + $b;\n    }\n    \n    public static function getCount(): int {\n        return self::$count;\n    }\n}\n\n// Call without creating object\necho MathHelper::add(5, 3);     // 8\necho MathHelper::add(10, 20);   // 30\necho MathHelper::getCount();    // 2\n?>\n`\n\n#### Static in Laravel\n\n`php\n<?php\n// Eloquent uses static methods extensively\n$users = User::all();           // Static method\n$user = User::find(1);          // Static method\n$user = User::where('active', 1)->first();  // Static query builder\n\n// Facades are static proxies\nuse Illuminate\\Support\\Facades\\Cache;\n\nCache::put('key', 'value', 60);\n$value = Cache::get('key');\n?>\n`\n\n#### Creating Objects: new vs Auto-Resolving\n\n`php\n<?php\nnamespace App\\Services;\n\nclass UserService {\n    public function __construct(\n        private UserRepository $repository\n    ) {}\n    \n    public function createUser(array $data) {\n        return $this->repository->create($data);\n    }\n}\n\n// Option 1: Manual instantiation\n$repository = new UserRepository();\n$service = new UserService($repository);\n\n// Option 2: Laravel auto-resolving (Dependency Injection)\nclass UserController extends Controller {\n    // Laravel automatically creates and injects UserService\n    public function store(Request $request, UserService $service) {\n        $user = $service->createUser($request->all());\n        return response()->json($user);\n    }\n}\n\n// Option 3: Using app() helper\n$service = app(UserService::class);\n\n// Option 4: resolve() helper\n$service = resolve(UserService::class);\n?>\n`\n\n#### Service Container Binding\n\n`php\n<?php\n// In AppServiceProvider\npublic function register() {\n    // Singleton: same instance every time\n    $this->app->singleton(UserService::class, function ($app) {\n        return new UserService(\n            $app->make(UserRepository::class)\n        );\n    });\n    \n    // Bind interface to implementation\n    $this->app->bind(\n        PaymentGatewayInterface::class,\n        StripePaymentGateway::class\n    );\n}\n\n// Now Laravel knows which implementation to use\nclass PaymentController extends Controller {\n    public function __construct(\n        private PaymentGatewayInterface $gateway  // Gets StripePaymentGateway\n    ) {}\n}\n?>\n`\n\n---\n\n## Advanced OOP Concepts\n\n### Abstract Classes\n\n`php\n<?php\nabstract class Animal {\n    protected string $name;\n    \n    public function __construct(string $name) {\n        $this->name = $name;\n    }\n    \n    // Abstract method: must be implemented by child classes\n    abstract public function makeSound(): string;\n    \n    // Concrete method: inherited as-is\n    public function getName(): string {\n        return $this->name;\n    }\n}\n\nclass Dog extends Animal {\n    public function makeSound(): string {\n        return \"Woof!\";\n    }\n}\n\nclass Cat extends Animal {\n    public function makeSound(): string {\n        return \"Meow!\";\n    }\n}\n\n$dog = new Dog(\"Buddy\");\necho $dog->makeSound();  // Woof!\n?>\n`\n\n### Interfaces\n\n`php\n<?php\ninterface Payable {\n    public function pay(float $amount): bool;\n    public function refund(float $amount): bool;\n}\n\ninterface Taxable {\n    public function calculateTax(): float;\n}\n\nclass Invoice implements Payable, Taxable {\n    public function pay(float $amount): bool {\n        // Implementation\n        return true;\n    }\n    \n    public function refund(float $amount): bool {\n        // Implementation\n        return true;\n    }\n    \n    public function calculateTax(): float {\n        // Implementation\n        return 0.0;\n    }\n}\n?>\n`\n\n### Traits\n\n`php\n<?php\ntrait Timestampable {\n    protected function updateTimestamps(): void {\n        $this->updated_at = now();\n    }\n}\n\ntrait HasUuid {\n    protected static function bootHasUuid(): void {\n        static::creating(function ($model) {\n            $model->uuid = \\Str::uuid();\n        });\n    }\n}\n\nclass Post extends Model {\n    use Timestampable, HasUuid;\n}\n\n// Trait conflicts\ntrait A {\n    public function test() { echo \"A\"; }\n}\n\ntrait B {\n    public function test() { echo \"B\"; }\n}\n\nclass MyClass {\n    use A, B {\n        A::test insteadof B;  // Use A's version\n        B::test as testB;     // Alias B's version\n    }\n}\n?>\n`\n\n---\n\n## Magic Methods\n\n`php\n<?php\nclass User {\n    private array $data = [];\n    \n    // Constructor\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    \n    // Get inaccessible property\n    public function __get(string $name) {\n        return $this->data[$name] ?? null;\n    }\n    \n    // Set inaccessible property\n    public function __set(string $name, $value): void {\n        $this->data[$name] = $value;\n    }\n    \n    // Check if property isset()\n    public function __isset(string $name): bool {\n        return isset($this->data[$name]);\n    }\n    \n    // Unset property\n    public function __unset(string $name): void {\n        unset($this->data[$name]);\n    }\n    \n    // Call inaccessible method\n    public function __call(string $name, array $args) {\n        echo \"Called $name with args: \" . implode(', ', $args);\n    }\n    \n    // Static call\n    public static function __callStatic(string $name, array $args) {\n        echo \"Static call to $name\";\n    }\n    \n    // Convert to string\n    public function __toString(): string {\n        return json_encode($this->data);\n    }\n    \n    // Serialize\n    public function __serialize(): array {\n        return $this->data;\n    }\n    \n    // Clone\n    public function __clone() {\n        // Deep copy logic\n    }\n}\n?>\n`\n\n---\n\n## Practice Exercises\n\n1. Create a User model extending Laravel's Authenticatable\n2. Implement a trait for UUID generation\n3. Create an interface for exportable models (toCSV, toExcel)\n4. Override Eloquent's save() method to add logging\n5. Build a service class with dependency injection\n\n---\n\n**Next:** [13. Advanced PHP](13_Advanced_PHP.md)\n", "oldString": ""}
