# 15. Popular Array Functions: Open-Source Examples (5 min)

## Overview

PHP's **array functions** are essential for data manipulation. Laravel's **Collections** build on these functions with a fluent API. Understanding both is crucial for efficient Laravel development.

---

## Core Array Functions

### 1. array_map — Transform

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Square each number
$squared = array_map(fn($n) => $n * $n, $numbers);
// [1, 4, 9, 16, 25]

// Laravel Collection equivalent
$squared = collect($numbers)->map(fn($n) => $n * $n);

// Real example: Extract IDs
$userIds = array_map(fn($user) => $user->id, $users);
$userIds = collect($users)->pluck('id');  // Laravel way
```

### 2. array_filter — Select

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Keep only even numbers
$even = array_filter($numbers, fn($n) => $n % 2 === 0);
// [2, 4]

// Laravel Collection
$even = collect($numbers)->filter(fn($n) => $n % 2 === 0);

// Real example: Active users
$active = array_filter($users, fn($u) => $u->is_active);
$active = collect($users)->filter(fn($u) => $u->is_active);
```

### 3. array_reduce — Aggregate

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Sum
$sum = array_reduce($numbers, fn($carry, $n) => $carry + $n, 0);
// 15

// Laravel Collection
$sum = collect($numbers)->reduce(fn($carry, $n) => $carry + $n, 0);
$sum = collect($numbers)->sum();  // Shorthand

// Real example: Total price
$total = array_reduce($items, fn($carry, $item) => $carry + $item->price, 0);
$total = collect($items)->sum('price');
```

### 4. array_merge — Combine

```php
<?php
$arr1 = ['a' => 1, 'b' => 2];
$arr2 = ['c' => 3, 'd' => 4];

$merged = array_merge($arr1, $arr2);
// ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4]

// Laravel Collection
$merged = collect($arr1)->merge($arr2);

// Spread operator (PHP 7.4+)
$merged = [...$arr1, ...$arr2];
```

### 5. array_keys / array_values

```php
<?php
$data = ['name' => 'Alice', 'age' => 25, 'city' => 'NY'];

$keys = array_keys($data);      // ['name', 'age', 'city']
$values = array_values($data);  // ['Alice', 25, 'NY']

// Laravel Collection
$keys = collect($data)->keys();
$values = collect($data)->values();
```

### 6. array_column — Extract Column

```php
<?php
$users = [
    ['id' => 1, 'name' => 'Alice'],
    ['id' => 2, 'name' => 'Bob'],
];

$names = array_column($users, 'name');
// ['Alice', 'Bob']

$indexed = array_column($users, 'name', 'id');
// [1 => 'Alice', 2 => 'Bob']

// Laravel Collection
$names = collect($users)->pluck('name');
$indexed = collect($users)->pluck('name', 'id');
```

### 7. array_unique — Remove Duplicates

```php
<?php
$numbers = [1, 2, 2, 3, 3, 3];

$unique = array_unique($numbers);
// [1, 2, 3]

// Laravel Collection
$unique = collect($numbers)->unique();
```

### 8. array_search / in_array

```php
<?php
$fruits = ['apple', 'banana', 'cherry'];

// Find index
$index = array_search('banana', $fruits);  // 1

// Check existence
$exists = in_array('banana', $fruits);  // true

// Laravel Collection
$exists = collect($fruits)->contains('banana');
$first = collect($fruits)->first(fn($f) => $f === 'banana');
```

### 9. array_slice / array_splice

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Extract portion
$slice = array_slice($numbers, 1, 3);  // [2, 3, 4]

// Laravel Collection
$slice = collect($numbers)->slice(1, 3);
$slice = collect($numbers)->skip(1)->take(3);
```

### 10. array_chunk — Split

```php
<?php
$numbers = [1, 2, 3, 4, 5, 6];

$chunks = array_chunk($numbers, 2);
// [[1, 2], [3, 4], [5, 6]]

// Laravel Collection
$chunks = collect($numbers)->chunk(2);
```

---

## Laravel Collection Advanced

### groupBy

```php
<?php
$users = User::all();

$byRole = $users->groupBy('role');
// ['admin' => [...], 'user' => [...]]

$byRoleAndActive = $users->groupBy(fn($u) => $u->role . '-' . $u->is_active);
```

### partition

```php
<?php
[$admins, $users] = User::all()->partition(fn($u) => $u->role === 'admin');
```

### flatMap

```php
<?php
$orders = Order::with('items')->get();

$allItems = $orders->flatMap(fn($order) => $order->items);
```

### pluck with Dot Notation

```php
<?php
$users = User::with('profile')->get();

$bios = $users->pluck('profile.bio');
```

### pipe

```php
<?php
$result = collect($data)
    ->filter(fn($item) => $item->active)
    ->map(fn($item) => $item->price)
    ->pipe(fn($prices) => $prices->sum() * 1.1);  // Add tax
```

---

## Real-World Examples

### Example 1: Transform User Data for API

```php
<?php
$users = User::with('profile')->get();

// Native PHP
$response = array_map(function($user) {
    return [
        'id' => $user->id,
        'name' => $user->name,
        'bio' => $user->profile->bio ?? 'No bio',
    ];
}, $users->toArray());

// Laravel Collection (cleaner)
$response = $users->map(fn($user) => [
    'id' => $user->id,
    'name' => $user->name,
    'bio' => $user->profile->bio ?? 'No bio',
]);
```

### Example 2: Calculate Order Statistics

```php
<?php
$orders = Order::with('items')->get();

// Total revenue
$revenue = $orders->sum('total');

// Average order value
$avgOrder = $orders->avg('total');

// Group by status
$byStatus = $orders->groupBy('status')->map(fn($group) => $group->count());

// Most popular product
$popularProduct = $orders
    ->flatMap(fn($order) => $order->items)
    ->groupBy('product_id')
    ->map(fn($items) => $items->sum('quantity'))
    ->sortDesc()
    ->keys()
    ->first();
```

### Example 3: Filter and Paginate

```php
<?php
$products = Product::all();

$filtered = $products
    ->filter(fn($p) => $p->price > 100)
    ->filter(fn($p) => $p->in_stock)
    ->sortBy('price')
    ->take(20);
```

---

## Performance Tips

```php
<?php
// Bad: Multiple iterations
$result = collect($data)
    ->map(fn($item) => $item * 2)
    ->filter(fn($item) => $item > 10)
    ->map(fn($item) => ['value' => $item]);

// Better: Single iteration
$result = collect($data)
    ->map(function($item) {
        $doubled = $item * 2;
        if ($doubled > 10) {
            return ['value' => $doubled];
        }
        return null;
    })
    ->filter();
```

---

## Common Patterns

| Task      | Native PHP     | Laravel Collection          |
| --------- | -------------- | --------------------------- |
| Transform | `array_map`    | `map()`                     |
| Filter    | `array_filter` | `filter()`                  |
| Aggregate | `array_reduce` | `reduce()` or `sum()/avg()` |
| Extract   | `array_column` | `pluck()`                   |
| Group     | Manual loop    | `groupBy()`                 |
| Chunk     | `array_chunk`  | `chunk()`                   |
| Unique    | `array_unique` | `unique()`                  |

---

## Best Practices

1. **Use Collections** in Laravel for cleaner, chainable syntax
2. **Leverage lazy collections** for large datasets
3. **Combine operations** to minimize iterations
4. **Use appropriate methods** (sum/avg vs reduce)
5. **Type-hint return types** when using array functions

---

## Practice Exercises

### Exercise 1: Transform Orders

```php
// Given orders with items, calculate:
// 1. Total revenue
// 2. Average items per order
// 3. Most expensive order
$orders = Order::with('items')->get();
```

### Exercise 2: Group and Count

```php
// Group users by role and count each group
$users = User::all();
```

### Exercise 3: Filter Chain

```php
// From products, get only:
// - In stock
// - Price between $50-$200
// - Category 'electronics'
// - Sort by popularity
$products = Product::all();
```

---

## Key Takeaways

- **Array functions** are core PHP skills
- **Laravel Collections** provide fluent, chainable API
- **map/filter/reduce** are the most common operations
- **pluck()** is powerful for extracting nested data
- **groupBy()** simplifies aggregations

---

**Next:** [16. Popular String Functions](16_String_Functions.md)
