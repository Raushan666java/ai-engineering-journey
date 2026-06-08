# 10. IF-Else: Ternary and Null Safe Operators (3 min)

## Overview

Modern PHP provides several operators to write cleaner conditional logic: **ternary**, **null coalescing** (`??`), and **nullsafe** (`?->`) operators. These are heavily used in Laravel for concise, readable code.

---

## Key Concepts

### 1. Ternary Operator (`? :`)

- Shorthand for if-else
- Returns value based on condition

### 2. Elvis Operator (`?:`)

- Short ternary without middle expression
- Returns left side if truthy, otherwise right side

### 3. Null Coalescing (`??`)

- Returns first non-null value
- Doesn't trigger undefined variable warnings

### 4. Null Coalescing Assignment (`??=`)

- Assign if variable is null or undefined

### 5. Nullsafe Operator (`?->`)

- Call methods/access properties on potentially null objects
- Returns null if object is null (no error)

---

## Ternary Operator

### Basic Syntax

```php
<?php
// Traditional if-else
$age = 20;
if ($age >= 18) {
    $status = 'adult';
} else {
    $status = 'minor';
}

// Ternary (one line)
$status = ($age >= 18) ? 'adult' : 'minor';
```

### Nested Ternary (Use Sparingly)

```php
<?php
$age = 15;

// Nested (readable with proper formatting)
$category = ($age < 13) ? 'child'
          : (($age < 18) ? 'teen' : 'adult');

// Better: use match (PHP 8+)
$category = match(true) {
    $age < 13 => 'child',
    $age < 18 => 'teen',
    default => 'adult',
};
```

### Laravel Examples

```php
<?php
// View rendering
return view($request->ajax() ? 'partials.content' : 'pages.full');

// Response format
return $request->wantsJson()
    ? response()->json($data)
    : redirect()->back()->with('data', $data);

// Permission check
$canEdit = auth()->user()->isAdmin() ? true : $post->user_id === auth()->id();
```

---

## Elvis Operator (Short Ternary)

### Syntax

```php
<?php
// Traditional
$name = $user->name ? $user->name : 'Guest';

// Elvis operator (?:)
$name = $user->name ?: 'Guest';

// If $user->name is truthy, use it; otherwise 'Guest'
```

### Falsy Values

```php
<?php
// These are falsy and will trigger the right side:
// false, 0, 0.0, '0', '', null, []

$value = 0 ?: 'default';      // 'default' (0 is falsy)
$value = '' ?: 'default';     // 'default' (empty string)
$value = [] ?: 'default';     // 'default' (empty array)
$value = 'text' ?: 'default'; // 'text'
```

### Laravel Examples

```php
<?php
// User name with fallback
$displayName = $user->nickname ?: $user->name ?: 'Anonymous';

// Config with default
$timeout = config('app.timeout') ?: 30;

// Old input with fallback
$email = old('email') ?: $user->email;
```

---

## Null Coalescing Operator (`??`)

### Basic Usage

```php
<?php
// Traditional: isset check
$username = isset($_GET['user']) ? $_GET['user'] : 'guest';

// Null coalescing (PHP 7.0+)
$username = $_GET['user'] ?? 'guest';

// Only checks for null/undefined, not falsy values
$value = 0 ?? 'default';      // 0 (not falsy, just checks null)
$value = '' ?? 'default';     // '' (not null)
$value = null ?? 'default';   // 'default'
```

### Chaining Multiple Values

```php
<?php
// First non-null value wins
$value = $config['override'] ?? $config['default'] ?? $hardcoded ?? 'fallback';

// Real example
$name = $request->input('name')
     ?? auth()->user()->name
     ?? session('guest_name')
     ?? 'Guest';
```

### `??` vs `?:`

```php
<?php
$value = 0;

// Elvis: 0 is falsy, returns 'default'
$result = $value ?: 'default';  // 'default'

// Null coalescing: 0 is not null, returns 0
$result = $value ?? 'default';  // 0

// Use ?? when you want to preserve falsy values except null
// Use ?: when you want any falsy value to trigger fallback
```

### Laravel Examples

```php
<?php
// Request input with default
$perPage = $request->input('per_page') ?? 15;

// Config value
$apiKey = config('services.stripe.key') ?? env('STRIPE_KEY');

// Session data
$cart = session('cart') ?? [];

// Eloquent relationship
$authorName = $post->author->name ?? 'Unknown';
```

---

## Null Coalescing Assignment (`??=`)

### PHP 7.4+ Syntax

```php
<?php
// Traditional
if (!isset($config['timeout'])) {
    $config['timeout'] = 30;
}

// PHP 7.4+: Assign only if null/undefined
$config['timeout'] ??= 30;

// More examples
$data['status'] ??= 'pending';
$session['visits'] ??= 0;
$cache['key'] ??= fetchExpensiveData();
```

### Laravel Examples

```php
<?php
// Ensure array key exists
$options['debug'] ??= false;
$options['cache'] ??= true;

// Default session values
session(['theme' => session('theme') ?? 'light']);
// Better with ??=
$_SESSION['theme'] ??= 'light';

// Initialize on first access
public function getSettings(): array {
    $this->settings ??= json_decode($this->settings_json, true);
    return $this->settings;
}
```

---

## Nullsafe Operator (`?->`) — PHP 8.0+

### The Problem

```php
<?php
// Before PHP 8: verbose null checks
$city = null;
if ($user !== null && $user->address !== null) {
    $city = $user->address->city;
}

// Or with ternary
$city = ($user && $user->address) ? $user->address->city : null;
```

### Nullsafe Solution

```php
<?php
// PHP 8.0+: nullsafe operator
$city = $user?->address?->city;

// If $user is null, returns null (no error)
// If $user->address is null, returns null (no error)
// Otherwise, returns $user->address->city
```

### Chaining Methods

```php
<?php
class User {
    public ?Profile $profile = null;
}

class Profile {
    public ?string $bio = null;

    public function getBio(): ?string {
        return $this->bio;
    }
}

$user = new User();

// All return null safely
$bio = $user?->profile?->bio;
$bio = $user?->profile?->getBio();
$length = $user?->profile?->getBio()?->length;  // Method chaining
```

### Laravel Examples

```php
<?php
// Eloquent relationships
$authorName = $post?->author?->name;
$categoryName = $product?->category?->name;

// Nested relationships
$managerEmail = $employee?->department?->manager?->email;

// Method calls
$config = $service?->getConnection()?->getConfig();

// With null coalescing
$name = $post?->author?->name ?? 'Anonymous';

// Array access (note: ?-> doesn't work with arrays, use ?? instead)
// WRONG: $value = $array?->['key'];
// RIGHT: $value = $array['key'] ?? null;
```

---

## Combining Operators

### Powerful Combinations

```php
<?php
// Nullsafe + null coalescing
$city = $user?->address?->city ?? 'Not specified';

// Multiple levels
$value = $obj?->method()?->property?->anotherMethod() ?? 'default';

// Laravel: User settings with fallback
$theme = auth()->user()?->settings?->theme ?? config('app.default_theme') ?? 'light';

// Blade template
{{ $post?->author?->name ?? 'Unknown Author' }}
```

### Real-World Example

```php
<?php
namespace App\Http\Controllers;

class OrderController extends Controller
{
    public function show(int $id)
    {
        $order = Order::find($id);

        // Safe navigation with fallbacks
        return [
            'customer_name' => $order?->customer?->name ?? 'Guest',
            'customer_email' => $order?->customer?->email ?? 'N/A',
            'shipping_address' => $order?->shippingAddress?->full_address ?? 'Not provided',
            'discount' => $order?->coupon?->discount_amount ?? 0,
        ];
    }
}
```

---

## Comparison Table

| Operator  | Checks              | Use Case            | Example             |
| --------- | ------------------- | ------------------- | ------------------- |
| **`? :`** | Boolean condition   | if-else replacement | `$x ? 'yes' : 'no'` |
| **`?:`**  | Truthiness          | Falsy fallback      | `$name ?: 'Guest'`  |
| **`??`**  | Null/undefined only | Null fallback       | `$val ?? 'default'` |
| **`??=`** | Null/undefined only | Conditional assign  | `$x ??= 10`         |
| **`?->`** | Null object         | Safe navigation     | `$user?->name`      |

---

## Best Practices

1. **Use `??` for null checks** (not `?:`) to preserve falsy values like 0 and ''
2. **Use `?->` for safe navigation** instead of long `if` chains
3. **Avoid deep ternary nesting** — use `match` or early returns
4. **Combine operators** for concise Laravel code (e.g., `$user?->name ?? 'Guest'`)
5. **Type-hint return types** even when using nullsafe to document intent

---

## Practice Exercises

### Exercise 1: Refactor to Modern Operators

```php
// Refactor this:
if (isset($request->user)) {
    $name = $request->user;
} else {
    $name = 'Guest';
}

if ($user && $user->profile && $user->profile->bio) {
    $bio = $user->profile->bio;
} else {
    $bio = 'No bio';
}
```

### Exercise 2: Safe Navigation

```php
// Refactor:
$managerName = null;
if ($employee !== null) {
    if ($employee->department !== null) {
        if ($employee->department->manager !== null) {
            $managerName = $employee->department->manager->name;
        }
    }
}
```

### Exercise 3: Laravel Route

```php
// Simplify using modern operators:
Route::get('/profile', function() {
    $user = auth()->user();
    if ($user) {
        if ($user->profile) {
            $bio = $user->profile->bio;
        } else {
            $bio = 'No bio available';
        }
    } else {
        return redirect('/login');
    }

    return view('profile', ['bio' => $bio]);
});
```

---

## Key Takeaways

- **Ternary** (`? :`) replaces simple if-else
- **Elvis** (`?:`) checks for falsy values
- **Null coalescing** (`??`) checks only for null/undefined
- **Nullsafe** (`?->`) safely accesses properties/methods on potentially null objects
- **Combine operators** for concise, readable Laravel code

---

**Next:** [11. Variable Types and Return Types](11_Variable_and_Return_Types.md)
