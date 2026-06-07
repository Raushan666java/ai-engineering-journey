# Query Builder in Laravel

Laravel's database query builder provides a convenient, fluent interface to creating and running database queries. It can be used to perform most database operations in your application and works on all supported database systems.

## Introduction to Query Builder

The query builder uses PDO parameter binding to protect your application against SQL injection attacks. There's no need to clean or sanitize strings passed as bindings.

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')->get();

foreach ($users as $user) {
    echo $user->name;
}
```

## Retrieving Results

### Retrieving All Rows

```php
$users = DB::table('users')->get();
```

### Retrieving a Single Row

```php
// First row
$user = DB::table('users')->first();

// First row with specific columns
$user = DB::table('users')->select('name', 'email')->first();

// Find by ID
$user = DB::table('users')->find(3);
```

### Retrieving a Single Value

```php
// Get a single value from a record
$email = DB::table('users')->where('id', 1)->value('email');

// Get a single column's values as an array
$titles = DB::table('roles')->pluck('title');

// Get a single column's values as an array with a specific key
$roles = DB::table('roles')->pluck('title', 'id');
```

## Chunking Results

For working with large datasets, you can chunk the results:

```php
// Process records in chunks
DB::table('users')->orderBy('id')->chunk(100, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});

// Stop chunking if the callback returns false
DB::table('users')->orderBy('id')->chunk(100, function ($users) {
    // Process users
    return false; // Stop chunking
});

// Using lazy() for memory-efficient iteration
foreach (DB::table('users')->orderBy('id')->lazy() as $user) {
    // Process user
}

// Using lazyById() for more efficient chunking by ID
foreach (DB::table('users')->lazyById() as $user) {
    // Process user
}

// Using lazyById() with custom column and chunk size
foreach (DB::table('users')->lazyById(100, 'user_id') as $user) {
    // Process user
}
```

## Aggregates

```php
// Count
$count = DB::table('users')->count();

// Max
$max = DB::table('orders')->max('price');

// Min
$min = DB::table('orders')->min('price');

// Average
$avg = DB::table('orders')->avg('price');

// Sum
$sum = DB::table('orders')->sum('price');

// Determine if records exist
if (DB::table('orders')->where('finalized', 1)->exists()) {
    // Orders exist
}

if (DB::table('orders')->where('finalized', 1)->doesntExist()) {
    // No orders exist
}
```

## Select Statements

### Specifying Select Clause

```php
// Select specific columns
$users = DB::table('users')->select('name', 'email')->get();

// Select distinct
$users = DB::table('users')->distinct()->select('role_id')->get();

// Add a column to an existing select
$query = DB::table('users')->select('name');
$users = $query->addSelect('age')->get();
```

### Raw Expressions

```php
// Raw select expression
$users = DB::table('users')
            ->select(DB::raw('count(*) as user_count, status'))
            ->groupBy('status')
            ->get();

// Raw methods
$users = DB::table('users')
            ->selectRaw('price * ? as price_with_tax', [1.0825])
            ->get();

$users = DB::table('users')
            ->whereRaw('price > IF(state = "TX", ?, 100)', [200])
            ->get();

$users = DB::table('users')
            ->orderByRaw('updated_at - created_at DESC')
            ->get();

$users = DB::table('users')
            ->groupByRaw('city, state')
            ->get();

$users = DB::table('users')
            ->havingRaw('SUM(price) > ?', [2500])
            ->get();
```

## Joins

```php
// Inner join
$users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->select('users.*', 'contacts.phone')
            ->get();

// Left join
$users = DB::table('users')
            ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
            ->get();

// Right join
$users = DB::table('users')
            ->rightJoin('posts', 'users.id', '=', 'posts.user_id')
            ->get();

// Cross join
$users = DB::table('sizes')
            ->crossJoin('colors')
            ->get();

// Advanced join with conditions
$users = DB::table('users')
            ->join('contacts', function ($join) {
                $join->on('users.id', '=', 'contacts.user_id')
                     ->where('contacts.active', '=', 1);
            })
            ->get();

// Subquery joins
$latestPosts = DB::table('posts')
                ->select('user_id', DB::raw('MAX(created_at) as last_post_created_at'))
                ->groupBy('user_id');

$users = DB::table('users')
            ->joinSub($latestPosts, 'latest_posts', function ($join) {
                $join->on('users.id', '=', 'latest_posts.user_id');
            })
            ->get();
```

## Unions

```php
// Basic union
$first = DB::table('users')->whereNull('first_name');
$users = DB::table('users')
            ->whereNull('last_name')
            ->union($first)
            ->get();

// Union all (keeps duplicates)
$first = DB::table('users')->whereNull('first_name');
$users = DB::table('users')
            ->whereNull('last_name')
            ->unionAll($first)
            ->get();
```

## Where Clauses

### Basic Where Clauses

```php
// Basic where
$users = DB::table('users')
            ->where('votes', '=', 100)
            ->get();

// Shorthand equals
$users = DB::table('users')
            ->where('votes', 100)
            ->get();

// Other operators
$users = DB::table('users')
            ->where('votes', '>=', 100)
            ->get();

$users = DB::table('users')
            ->where('name', 'like', 'T%')
            ->get();

// Multiple conditions
$users = DB::table('users')
            ->where('votes', '>=', 100)
            ->where('name', 'like', 'T%')
            ->get();

// OR conditions
$users = DB::table('users')
            ->where('votes', '>=', 100)
            ->orWhere('name', 'John')
            ->get();

// Where with array of conditions
$users = DB::table('users')
            ->where([
                ['status', '=', '1'],
                ['subscribed', '<>', '1'],
            ])
            ->get();
```

### Advanced Where Clauses

```php
// Where between
$users = DB::table('users')
            ->whereBetween('votes', [1, 100])
            ->get();

$users = DB::table('users')
            ->whereNotBetween('votes', [1, 100])
            ->get();

// Where in
$users = DB::table('users')
            ->whereIn('id', [1, 2, 3])
            ->get();

$users = DB::table('users')
            ->whereNotIn('id', [1, 2, 3])
            ->get();

// Where null
$users = DB::table('users')
            ->whereNull('updated_at')
            ->get();

$users = DB::table('users')
            ->whereNotNull('updated_at')
            ->get();

// Where date
$users = DB::table('users')
            ->whereDate('created_at', '2016-12-31')
            ->get();

$users = DB::table('users')
            ->whereMonth('created_at', '12')
            ->get();

$users = DB::table('users')
            ->whereDay('created_at', '31')
            ->get();

$users = DB::table('users')
            ->whereYear('created_at', '2016')
            ->get();

$users = DB::table('users')
            ->whereTime('created_at', '=', '11:20:45')
            ->get();

// Where column
$users = DB::table('users')
            ->whereColumn('first_name', 'last_name')
            ->get();

$users = DB::table('users')
            ->whereColumn('updated_at', '>', 'created_at')
            ->get();

// Where exists
$users = DB::table('users')
            ->whereExists(function ($query) {
                $query->select(DB::raw(1))
                      ->from('orders')
                      ->whereColumn('orders.user_id', 'users.id');
            })
            ->get();

// JSON where clauses (MySQL and PostgreSQL)
$users = DB::table('users')
            ->whereJsonContains('options->languages', 'en')
            ->get();

$users = DB::table('users')
            ->whereJsonLength('options->languages', '>', 1)
            ->get();
```

### Parameter Grouping

```php
// Grouping where clauses
$users = DB::table('users')
            ->where('name', '=', 'John')
            ->where(function ($query) {
                $query->where('votes', '>', 100)
                      ->orWhere('title', '=', 'Admin');
            })
            ->get();
```

### Where Exists

```php
$users = DB::table('users')
            ->whereExists(function ($query) {
                $query->select(DB::raw(1))
                      ->from('orders')
                      ->whereColumn('orders.user_id', 'users.id');
            })
            ->get();
```

### Subquery Where Clauses

```php
$users = DB::table('users')
            ->where('votes', '>', function ($query) {
                $query->selectRaw('avg(votes)')
                      ->from('users');
            })
            ->get();
```

## Ordering, Grouping, Limit & Offset

```php
// Order by
$users = DB::table('users')
            ->orderBy('name', 'desc')
            ->get();

// Latest / oldest
$users = DB::table('users')
            ->latest()
            ->get();

$users = DB::table('users')
            ->oldest()
            ->get();

// Random order
$randomUser = DB::table('users')
                ->inRandomOrder()
                ->first();

// Group by
$users = DB::table('users')
            ->groupBy('account_id')
            ->get();

$users = DB::table('users')
            ->groupBy('account_id', 'status')
            ->get();

// Having
$users = DB::table('users')
            ->groupBy('account_id')
            ->having('account_id', '>', 100)
            ->get();

// Skip / take
$users = DB::table('users')
            ->skip(10)
            ->take(5)
            ->get();

// Limit / offset
$users = DB::table('users')
            ->offset(10)
            ->limit(5)
            ->get();
```

## Conditional Clauses

```php
// When
$role = $request->input('role');

$users = DB::table('users')
            ->when($role, function ($query, $role) {
                return $query->where('role_id', $role);
            })
            ->get();

// When with default
$sortBy = $request->input('sort_by');

$users = DB::table('users')
            ->when($sortBy, function ($query, $sortBy) {
                return $query->orderBy($sortBy);
            }, function ($query) {
                return $query->orderBy('name');
            })
            ->get();

// Unless
$users = DB::table('users')
            ->unless($role, function ($query) {
                return $query->where('role_id', 1);
            })
            ->get();
```

## Insert Statements

```php
// Single insert
DB::table('users')->insert([
    'email' => 'john@example.com',
    'votes' => 0
]);

// Multiple inserts
DB::table('users')->insert([
    ['email' => 'taylor@example.com', 'votes' => 0],
    ['email' => 'dayle@example.com', 'votes' => 0]
]);

// Auto-incrementing IDs
$id = DB::table('users')->insertGetId(
    ['email' => 'john@example.com', 'votes' => 0]
);

// Upsert
DB::table('flights')->upsert([
    ['departure' => 'Oakland', 'destination' => 'San Diego', 'price' => 99],
    ['departure' => 'Chicago', 'destination' => 'New York', 'price' => 150]
], ['departure', 'destination'], ['price']);
```

## Update Statements

```php
// Basic update
$affected = DB::table('users')
              ->where('id', 1)
              ->update(['votes' => 1]);

// Update or insert
DB::table('users')
    ->updateOrInsert(
        ['email' => 'john@example.com'],
        ['name' => 'John', 'votes' => 1]
    );

// Increment / decrement
DB::table('users')->increment('votes');
DB::table('users')->increment('votes', 5);
DB::table('users')->decrement('votes');
DB::table('users')->decrement('votes', 5);

// Increment / decrement with additional columns
DB::table('users')
    ->where('id', 1)
    ->increment('votes', 1, ['name' => 'John']);
```

## Delete Statements

```php
// Delete with where clause
DB::table('users')
    ->where('votes', '>', 100)
    ->delete();

// Delete all records
DB::table('users')->delete();

// Truncate table
DB::table('users')->truncate();
```

## Debugging

```php
// Dump the query and continue execution
DB::table('users')->where('votes', '>', 100)->dump();

// Dump the query and stop execution
DB::table('users')->where('votes', '>', 100)->dd();
```

## Pessimistic Locking

```php
// Shared lock (prevents data from being modified until transaction completes)
DB::table('users')
    ->where('votes', '>', 100)
    ->sharedLock()
    ->get();

// Update lock (prevents data from being read or modified until transaction completes)
DB::table('users')
    ->where('votes', '>', 100)
    ->lockForUpdate()
    ->get();
```

## Transactions

```php
// Basic transaction
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);
    DB::table('posts')->delete();
});

// Manual transaction control
try {
    DB::beginTransaction();
    
    DB::table('users')->update(['votes' => 1]);
    DB::table('posts')->delete();
    
    DB::commit();
} catch (\Exception $e) {
    DB::rollBack();
    
    throw $e;
}

// Transaction with deadlock retries
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);
    DB::table('posts')->delete();
}, 5); // Retry 5 times
```

## Multiple Database Connections

```php
// Specify connection
$users = DB::connection('mysql')->table('users')->get();

// Access the underlying PDO instance
$pdo = DB::connection()->getPdo();
```

## Best Practices

1. **Use parameter binding**: Never concatenate user input directly into queries
2. **Keep queries simple**: Break complex queries into smaller, more manageable parts
3. **Use transactions**: Wrap related operations in transactions
4. **Add proper indexes**: Ensure your database tables are properly indexed
5. **Use chunking for large datasets**: Process large result sets in chunks
6. **Cache frequently used queries**: Use Laravel's query caching for frequently accessed data
7. **Use query builders over raw SQL**: Query builders are more maintainable and secure
8. **Test your queries**: Write tests to ensure your queries return expected results
9. **Monitor query performance**: Use Laravel Telescope or other tools to monitor slow queries
10. **Use eager loading**: Avoid N+1 query problems by using eager loading with relationships

## Common Query Patterns

### Pagination

```php
// Manual pagination
$users = DB::table('users')
            ->offset(($page - 1) * $perPage)
            ->limit($perPage)
            ->get();

// Using Laravel's paginator
$users = DB::table('users')->paginate(15);
$users = DB::table('users')->simplePaginate(15);

// Custom pagination
$users = DB::table('users')
            ->orderBy('name')
            ->paginate(15, ['*'], 'users_page', 2);
```

### Search

```php
$search = $request->input('search');

$users = DB::table('users')
            ->where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%")
            ->get();
```

### Filtering

```php
$query = DB::table('users');

if ($request->has('role')) {
    $query->where('role', $request->input('role'));
}

if ($request->has('active')) {
    $query->where('active', $request->input('active'));
}

$users = $query->get();
```

### Sorting

```php
$column = $request->input('sort', 'created_at');
$direction = $request->input('direction', 'desc');

$allowedColumns = ['name', 'email', 'created_at'];

if (!in_array($column, $allowedColumns)) {
    $column = 'created_at';
}

$users = DB::table('users')
            ->orderBy($column, $direction)
            ->get();
```

## References

- [Laravel Query Builder Documentation](https://laravel.com/docs/12.x/queries)
- [Laravel Database Documentation](https://laravel.com/docs/12.x/database)
- [Laravel Pagination Documentation](https://laravel.com/docs/12.x/pagination)