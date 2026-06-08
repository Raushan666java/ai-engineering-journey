# 09. Callback Functions and Closures (4 min)

## Overview

**Closures** (anonymous functions) and **callbacks** are fundamental in Laravel — used in routes, collections, query scopes, middleware, and event listeners. Understanding closures is essential for writing idiomatic Laravel code.

---

## Key Concepts

### 1. Anonymous Functions (Closures)

- Functions without a name, assigned to variables
- Can be passed as arguments
- Can capture variables from outer scope

### 2. Arrow Functions (PHP 7.4+)

- Shorthand syntax for simple closures
- Automatically captures variables
- Single expression only

### 3. First-Class Callables (PHP 8.1+)

- Create callable references with `...` syntax
- More explicit than string/array callables

---

## Basic Closures

### Assigning to Variable

```php
<?php
// Anonymous function
$greet = function(string $name): string {
    return "Hello, $name!";
};

echo $greet('Alice');  // Hello, Alice!

// Pass as argument
$names = ['Alice', 'Bob', 'Charlie'];
$greetings = array_map($greet, $names);
print_r($greetings);
// ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']
```

### Inline Callbacks

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Filter even numbers
$even = array_filter($numbers, function($n) {
    return $n % 2 === 0;
});

// Double each number
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);

// Sum all numbers
$sum = array_reduce($numbers, function($carry, $n) {
    return $carry + $n;
}, 0);

echo $sum;  // 15
```

---

## Closures with `use` (Variable Binding)

### Capturing Variables

```php
<?php
$multiplier = 10;
$prefix = 'Result: ';

// Capture by value
$calculate = function($number) use ($multiplier, $prefix) {
    return $prefix . ($number * $multiplier);
};

echo $calculate(5);  // Result: 50

// Capture by reference
$counter = 0;
$increment = function() use (&$counter) {
    $counter++;
};

$increment();
$increment();
$increment();
echo $counter;  // 3
```

### Real-World: Filtering with Context

```php
<?php
$minPrice = 100;
$maxPrice = 500;
$category = 'electronics';

$products = collect($allProducts)->filter(function($product) use ($minPrice, $maxPrice, $category) {
    return $product->price >= $minPrice
        && $product->price <= $maxPrice
        && $product->category === $category;
});
```

---

## Arrow Functions (PHP 7.4+)

### Syntax Comparison

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Traditional closure
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);

// Arrow function (shorter)
$doubled = array_map(fn($n) => $n * 2, $numbers);

// With captured variable
$multiplier = 10;

// Traditional: must use 'use'
$result = array_map(function($n) use ($multiplier) {
    return $n * $multiplier;
}, $numbers);

// Arrow function: auto-captures
$result = array_map(fn($n) => $n * $multiplier, $numbers);
```

### Limitations

```php
<?php
// Arrow functions: single expression only
$valid = fn($x) => $x * 2;

// Multi-statement requires traditional closure
$complex = function($x) {
    $temp = $x * 2;
    $result = $temp + 10;
    return $result;
};
```

---

## First-Class Callables (PHP 8.1+)

```php
<?php
class MathHelper {
    public static function add(int $a, int $b): int {
        return $a + $b;
    }
}

// Before PHP 8.1
$callable = [MathHelper::class, 'add'];
$callable = 'strlen';

// PHP 8.1+: explicit callable syntax
$add = MathHelper::add(...);
$strlen = strlen(...);
$strtoupper = strtoupper(...);

echo $add(5, 3);           // 8
echo $strlen("hello");     // 5
echo $strtoupper("test");  // TEST
```

---

## Closures in Laravel

### 1. Routes

```php
<?php
use Illuminate\Support\Facades\Route;

// Route closure
Route::get('/users', function () {
    return User::all();
});

// With parameters
Route::get('/users/{id}', function (string $id) {
    return User::findOrFail($id);
});

// With dependency injection
Route::post('/users', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email',
    ]);

    return User::create($validated);
});
```

### 2. Collections

```php
<?php
$users = User::all();

// Filter
$active = $users->filter(fn($user) => $user->is_active);

// Map
$names = $users->map(fn($user) => $user->name);

// Reduce
$totalAge = $users->reduce(fn($carry, $user) => $carry + $user->age, 0);

// Each (side effects)
$users->each(function($user) {
    Log::info("User: {$user->name}");
});

// Partition
[$admins, $users] = User::all()->partition(fn($u) => $u->role === 'admin');

// GroupBy
$byRole = User::all()->groupBy(fn($u) => $u->role);
```

### 3. Query Builder Closures

```php
<?php
// Where closure for complex conditions
$users = User::where(function($query) {
    $query->where('role', 'admin')
          ->orWhere('role', 'moderator');
})->where('active', 1)->get();

// Having closure
$stats = DB::table('orders')
    ->groupBy('user_id')
    ->having('total', '>', 1000)
    ->orHaving(function($query) {
        $query->where('count', '>', 10)
              ->where('status', 'completed');
    })
    ->get();
```

### 4. Middleware

```php
<?php
// Inline middleware closure
Route::middleware(function (Request $request, Closure $next) {
    if (!auth()->check()) {
        return redirect('/login');
    }

    return $next($request);
})->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});
```

### 5. Cache with Closure

```php
<?php
use Illuminate\Support\Facades\Cache;

// Cache::remember executes closure only if key doesn't exist
$posts = Cache::remember('featured_posts', 3600, function () {
    return Post::where('featured', true)
        ->with('author')
        ->get();
});

// Cache::rememberForever
$settings = Cache::rememberForever('app_settings', function () {
    return Setting::pluck('value', 'key')->toArray();
});
```

### 6. Validation

```php
<?php
use Illuminate\Validation\Rule;

$request->validate([
    'email' => [
        'required',
        'email',
        // Custom validation with closure
        function ($attribute, $value, $fail) {
            if (User::where('email', $value)->exists()) {
                $fail('The email is already taken.');
            }
        },
    ],
    // Conditional rules with closure
    'company' => Rule::when($request->user_type === 'business', ['required', 'string']),
]);
```

### 7. Events & Listeners

```php
<?php
// Event listener closure
Event::listen('user.registered', function ($user) {
    Mail::to($user)->send(new WelcomeEmail($user));
});

// Queue closure
dispatch(function () use ($user) {
    // Background job logic
    ProcessUserData::dispatch($user);
});
```

---

## Advanced Patterns

### Pattern 1: Higher-Order Functions

```php
<?php
// Function that returns a closure
function multiplyBy(int $factor): Closure {
    return fn($number) => $number * $factor;
}

$double = multiplyBy(2);
$triple = multiplyBy(3);

echo $double(5);  // 10
echo $triple(5);  // 15

// Laravel Collection example
$users = User::all();
$names = $users->map->name;  // Higher-order message
// Equivalent to: $users->map(fn($u) => $u->name)
```

### Pattern 2: Dependency Injection in Closures

```php
<?php
Route::get('/report', function (ReportService $service, Request $request) {
    $from = $request->query('from');
    $to = $request->query('to');

    return $service->generateReport($from, $to);
});
```

### Pattern 3: Closure as Strategy Pattern

```php
<?php
class PaymentProcessor {
    private Closure $strategy;

    public function setStrategy(Closure $strategy): void {
        $this->strategy = $strategy;
    }

    public function process(float $amount): bool {
        return ($this->strategy)($amount);
    }
}

$processor = new PaymentProcessor();

// Stripe strategy
$processor->setStrategy(function($amount) {
    return StripeGateway::charge($amount);
});

// PayPal strategy
$processor->setStrategy(function($amount) {
    return PayPalGateway::charge($amount);
});
```

---

## Real-World Examples

### Example 1: Dynamic Filtering

```php
<?php
class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // Apply filters conditionally with closures
        $query->when($request->filled('category'), function($q) use ($request) {
            return $q->where('category_id', $request->category);
        });

        $query->when($request->filled('min_price'), function($q) use ($request) {
            return $q->where('price', '>=', $request->min_price);
        });

        $query->when($request->filled('search'), function($q) use ($request) {
            return $q->where('name', 'like', "%{$request->search}%");
        });

        return $query->paginate(20);
    }
}
```

### Example 2: Transaction with Closure

```php
<?php
use Illuminate\Support\Facades\DB;

DB::transaction(function () use ($order, $items) {
    // Create order
    $order->save();

    // Create order items
    foreach ($items as $item) {
        $order->items()->create($item);
    }

    // Update inventory
    collect($items)->each(function($item) {
        Product::find($item['product_id'])
            ->decrement('stock', $item['quantity']);
    });
});
```

### Example 3: Pipeline Pattern

```php
<?php
use Illuminate\Pipeline\Pipeline;

$result = app(Pipeline::class)
    ->send($data)
    ->through([
        function ($data, $next) {
            // Validate
            $validated = validator($data, [...])->validate();
            return $next($validated);
        },
        function ($data, $next) {
            // Transform
            $data['processed_at'] = now();
            return $next($data);
        },
        function ($data, $next) {
            // Save
            return Model::create($data);
        },
    ])
    ->thenReturn();
```

---

## Common Patterns

| Pattern    | Use Case              | Example                                           |
| ---------- | --------------------- | ------------------------------------------------- |
| **Filter** | Conditional selection | `$users->filter(fn($u) => $u->active)`            |
| **Map**    | Transformation        | `$users->map(fn($u) => $u->name)`                 |
| **Reduce** | Aggregation           | `$users->reduce(fn($c, $u) => $c + $u->age, 0)`   |
| **Each**   | Side effects          | `$users->each(fn($u) => Log::info($u->name))`     |
| **When**   | Conditional query     | `$query->when($search, fn($q) => $q->where(...))` |
| **Cache**  | Lazy loading          | `Cache::remember($key, $ttl, fn() => ...)`        |

---

## Best Practices

1. **Use arrow functions** for simple, one-line operations
2. **Use traditional closures** for multi-statement logic
3. **Type-hint parameters** even in closures for clarity
4. **Keep closures short** — extract to methods if complex
5. **Avoid deep nesting** — use early returns or extract functions
6. **Be careful with variable capture** — use references (`&`) only when needed

---

## Practice Exercises

### Exercise 1: Collection Transformation

```php
// Given array of users, transform to:
// ['admin' => [user1, user2], 'user' => [user3, user4]]
$users = User::all();

// TODO: Use groupBy with closure
```

### Exercise 2: Dynamic Query

```php
// Build query that applies filters only if provided
// Filters: status, min_age, search (name)
// Use when() with closures
```

### Exercise 3: Custom Validator

```php
// Create custom validation rule using closure
// Rule: email domain must be from allowed list
$allowedDomains = ['example.com', 'test.com'];
```

---

## Key Takeaways

- **Closures** are anonymous functions that can capture variables
- **Arrow functions** (`fn`) are shorter syntax for simple operations
- **Laravel uses closures everywhere** — routes, collections, queries, cache
- **`use` keyword** captures variables from outer scope
- **Type-hint closure parameters** for better IDE support and clarity

---

**Next:** [10. IF-Else: Ternary and Null Safe Operators](10_Ternary_and_NullSafe.md)
