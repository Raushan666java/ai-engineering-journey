# 5. Arrays

## Array Types

### Indexed Arrays
```php
// Long syntax
$colors = array('red', 'green', 'blue');

// Short syntax (PHP 5.4+)
$colors = ['red', 'green', 'blue'];

// Accessing elements
echo $colors[0]; // red
echo $colors[1]; // green
```

### Associative Arrays
```php
// Long syntax
$user = array('name' => 'John', 'age' => 30, 'email' => 'john@example.com');

// Short syntax (PHP 5.4+)
$user = ['name' => 'John', 'age' => 30, 'email' => 'john@example.com'];

// Accessing elements
echo $user['name']; // John
```

### Multidimensional Arrays
```php
$users = [
    ['name' => 'John', 'age' => 30],
    ['name' => 'Jane', 'age' => 25],
    ['name' => 'Bob', 'age' => 40]
];

// Accessing elements
echo $users[1]['name']; // Jane

// Nested arrays
$data = [
    'users' => [
        'admin' => ['name' => 'Admin', 'permissions' => ['create', 'read', 'update', 'delete']],
        'editor' => ['name' => 'Editor', 'permissions' => ['read', 'update']]
    ]
];

echo $data['users']['admin']['permissions'][0]; // create
```

## Array Creation and Modification

### Creating Arrays
```php
// Empty array
$empty = [];

// Range of numbers
$numbers = range(1, 5); // [1, 2, 3, 4, 5]
$even = range(2, 10, 2); // [2, 4, 6, 8, 10]

// Array from variables
$a = 'apple';
$b = 'banana';
$c = 'cherry';
$fruits = compact('a', 'b', 'c'); // ['apple', 'banana', 'cherry']
```

### Adding Elements
```php
// To indexed array
$colors = ['red', 'green'];
$colors[] = 'blue'; // Append to end
array_push($colors, 'yellow', 'purple'); // Add multiple values
array_unshift($colors, 'black'); // Add to beginning

// To associative array
$user = ['name' => 'John'];
$user['age'] = 30; // Add new key-value pair
```

### Removing Elements
```php
$colors = ['red', 'green', 'blue', 'yellow'];

$last = array_pop($colors); // Remove and return last element
$first = array_shift($colors); // Remove and return first element
unset($colors[1]); // Remove specific element (doesn't reindex)

// Remove and reindex
$colors = array_values(array_filter($colors, function($key) {
    return $key !== 1;
}, ARRAY_FILTER_USE_KEY));
```

## Array Operations

### Merging Arrays
```php
$array1 = ['a', 'b'];
$array2 = ['c', 'd'];

// Simple merge
$merged = array_merge($array1, $array2); // ['a', 'b', 'c', 'd']

// Merge with + operator (right side doesn't override)
$a = ['name' => 'John', 'age' => 30];
$b = ['name' => 'Jane', 'email' => 'jane@example.com'];
$c = $a + $b; // ['name' => 'John', 'age' => 30, 'email' => 'jane@example.com']

// Recursive merge
$array1 = ['user' => ['name' => 'John']];
$array2 = ['user' => ['age' => 30]];
$merged = array_merge_recursive($array1, $array2);
// ['user' => ['name' => 'John', 'age' => 30]]
```

### Array Slicing and Splicing
```php
$colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Extract portion
$slice = array_slice($colors, 1, 2); // ['green', 'blue']

// Remove and replace portion
$removed = array_splice($colors, 1, 2, ['orange', 'pink']);
// $colors = ['red', 'orange', 'pink', 'yellow', 'purple']
// $removed = ['green', 'blue']
```

## Array Functions

### Iteration Functions
```php
$numbers = [1, 2, 3, 4, 5];

// Apply function to each element
$doubled = array_map(function($n) { return $n * 2; }, $numbers);
// [2, 4, 6, 8, 10]

// Filter elements
$even = array_filter($numbers, function($n) { return $n % 2 === 0; });
// [2, 4]

// Reduce to single value
$sum = array_reduce($numbers, function($carry, $n) { return $carry + $n; }, 0);
// 15
```

### Sorting Functions
```php
$numbers = [3, 1, 4, 1, 5];
$fruits = ['orange', 'apple', 'banana'];

// Basic sorting
sort($numbers); // [1, 1, 3, 4, 5]
sort($fruits); // ['apple', 'banana', 'orange']

// Reverse sorting
rsort($numbers); // [5, 4, 3, 1, 1]

// Associative array sorting
$users = [
    ['name' => 'John', 'age' => 30],
    ['name' => 'Jane', 'age' => 25],
    ['name' => 'Bob', 'age' => 40]
];

// Sort by age
usort($users, function($a, $b) {
    return $a['age'] <=> $b['age']; // Spaceship operator (PHP 7+)
});

// Preserve keys
$data = ['b' => 2, 'a' => 1, 'c' => 3];
asort($data); // Sort by value
ksort($data); // Sort by key
```

### Search Functions
```php
$colors = ['red', 'green', 'blue', 'yellow'];
$user = ['name' => 'John', 'age' => 30, 'email' => 'john@example.com'];

// Check if value exists
$hasGreen = in_array('green', $colors); // true

// Find key for value
$key = array_search('blue', $colors); // 2

// Check if key exists
$hasAge = array_key_exists('age', $user); // true

// Get keys and values
$keys = array_keys($user); // ['name', 'age', 'email']
$values = array_values($user); // ['John', 30, 'john@example.com']
```

### Array Information
```php
$mixed = [1, 'two', 3, 'four'];

// Count elements
$count = count($mixed); // 4

// Get unique values
$numbers = [1, 2, 2, 3, 3, 3];
$unique = array_unique($numbers); // [1, 2, 3]

// Get difference between arrays
$array1 = [1, 2, 3, 4, 5];
$array2 = [3, 4, 5, 6, 7];
$diff = array_diff($array1, $array2); // [1, 2]

// Get intersection
$intersection = array_intersect($array1, $array2); // [3, 4, 5]
```

## Array Destructuring (PHP 7.1+)
```php
$user = ['John', 'Doe', 'john@example.com'];

// List syntax
list($firstName, $lastName, $email) = $user;

// Short syntax
[$firstName, $lastName, $email] = $user;

// Skip elements
[, $lastName, ] = $user; // Only get lastName

// Destructure with keys
$person = ['name' => 'John', 'age' => 30];
['name' => $name, 'age' => $age] = $person;
```

## Array Spread Operator (PHP 7.4+)
```php
$parts = ['apple', 'banana'];
$fruits = ['orange', ...$parts, 'mango'];
// ['orange', 'apple', 'banana', 'mango']

// Spread in function calls
$numbers = [1, 2, 3];
echo max(...$numbers); // 3
```

## Best Learning Methods
- Create and manipulate different types of arrays
- Practice array transformations using map, filter, and reduce
- Experiment with sorting and searching functions
- Build data structures using associative arrays
- Process data from external sources (JSON, CSV) into arrays
- Reference: https://www.php.net/manual/en/language.types.array.php
