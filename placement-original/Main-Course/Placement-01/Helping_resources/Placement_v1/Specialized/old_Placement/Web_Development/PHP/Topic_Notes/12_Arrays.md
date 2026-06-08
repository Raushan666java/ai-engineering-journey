# PHP Arrays

Arrays in PHP are ordered maps that associate values to keys. They are extremely versatile and can be used to represent various data structures like lists, dictionaries, hash tables, stacks, queues, and more.

## Array Types

### Indexed Arrays

Arrays with numeric keys, starting from 0 by default.

```php
<?php
// Creating indexed arrays
$fruits = ["apple", "banana", "orange"];

// Accessing elements
echo $fruits[0]; // apple
echo $fruits[1]; // banana
echo $fruits[2]; // orange

// Adding elements
$fruits[] = "grape"; // Adds to the end of the array

// Alternative syntax
$colors = array("red", "green", "blue");
?>
```

### Associative Arrays

Arrays with custom keys, typically strings.

```php
<?php
// Creating associative arrays
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// Accessing elements
echo $person["name"]; // John
echo $person["age"];  // 30
echo $person["city"]; // New York

// Adding or modifying elements
$person["email"] = "john@example.com";
$person["age"] = 31; // Modifying existing value

// Alternative syntax
$car = array(
    "make" => "Toyota",
    "model" => "Corolla",
    "year" => 2020
);
?>
```

### Multidimensional Arrays

Arrays containing other arrays as elements.

```php
<?php
// Two-dimensional indexed array
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements
echo $matrix[0][0]; // 1
echo $matrix[1][2]; // 6

// Two-dimensional associative array
$users = [
    "john" => [
        "name" => "John Doe",
        "email" => "john@example.com",
        "roles" => ["admin", "editor"]
    ],
    "jane" => [
        "name" => "Jane Smith",
        "email" => "jane@example.com",
        "roles" => ["editor"]
    ]
];

// Accessing elements
echo $users["john"]["name"];      // John Doe
echo $users["jane"]["roles"][0];  // editor

// Three-dimensional array
$buildings = [
    "Building A" => [
        "Floor 1" => ["Room 101", "Room 102", "Room 103"],
        "Floor 2" => ["Room 201", "Room 202", "Room 203"]
    ],
    "Building B" => [
        "Floor 1" => ["Room 101", "Room 102"],
        "Floor 2" => ["Room 201"]
    ]
];

echo $buildings["Building A"]["Floor 1"][0]; // Room 101
?>
```

## Array Creation and Syntax

```php
<?php
// Short array syntax (PHP 5.4+)
$numbers = [1, 2, 3, 4, 5];
$person = ["name" => "John", "age" => 30];

// Traditional array syntax
$numbers = array(1, 2, 3, 4, 5);
$person = array("name" => "John", "age" => 30);

// Mixed keys
$data = [
    "name" => "Product",
    0 => 100,
    "features" => ["feature1", "feature2"]
];

// Creating an empty array
$empty = [];
$empty = array();

// Creating an array with range()
$numbers = range(1, 5);        // [1, 2, 3, 4, 5]
$letters = range('a', 'e');    // ['a', 'b', 'c', 'd', 'e']
$even = range(0, 10, 2);       // [0, 2, 4, 6, 8, 10]

// Creating an array with array_fill()
$zeros = array_fill(0, 5, 0);  // [0, 0, 0, 0, 0]
$names = array_fill(0, 3, "John"); // ["John", "John", "John"]

// Creating an array with array_fill_keys()
$keys = ["name", "email", "phone"];
$defaults = array_fill_keys($keys, ""); // ["name" => "", "email" => "", "phone" => ""]

// Creating an array from variables with compact()
$name = "John";
$age = 30;
$city = "New York";
$person = compact("name", "age", "city"); // ["name" => "John", "age" => 30, "city" => "New York"]
?>
```

## Accessing Array Elements

```php
<?php
$fruits = ["apple", "banana", "orange"];
$person = ["name" => "John", "age" => 30];

// Direct access with square brackets
echo $fruits[0];       // apple
echo $person["name"];  // John

// Checking if a key exists
if (isset($fruits[3])) {
    echo $fruits[3];
} else {
    echo "Index not found";
}

if (array_key_exists("email", $person)) {
    echo $person["email"];
} else {
    echo "Key not found";
}

// Difference between isset() and array_key_exists()
$data = ["name" => "John", "value" => null];
var_dump(isset($data["value"]));         // false (isset returns false for null values)
var_dump(array_key_exists("value", $data)); // true (key exists even if value is null)

// Accessing with variable keys
$key = "name";
echo $person[$key];    // John

// Accessing nested arrays
$users = [
    "john" => ["name" => "John Doe", "age" => 30],
    "jane" => ["name" => "Jane Smith", "age" => 25]
];

echo $users["john"]["name"]; // John Doe

// Using null coalescing operator (PHP 7+)
echo $person["email"] ?? "Email not set"; // Email not set

// Using array_column() to extract a single column from an array of arrays
$people = [
    ["id" => 1, "name" => "John", "age" => 30],
    ["id" => 2, "name" => "Jane", "age" => 25],
    ["id" => 3, "name" => "Bob", "age" => 40]
];

$names = array_column($people, "name");        // ["John", "Jane", "Bob"]
$ages = array_column($people, "age", "id");    // [1 => 30, 2 => 25, 3 => 40]
?>
```

## Array Operations

### Adding Elements

```php
<?php
// Adding to indexed arrays
$fruits = ["apple", "banana"];
$fruits[] = "orange";                // Append to the end
array_push($fruits, "grape", "kiwi"); // Append multiple values
array_unshift($fruits, "lemon");      // Prepend to the beginning

// Adding to associative arrays
$person = ["name" => "John"];
$person["age"] = 30;                 // Add new key-value pair
$person += ["city" => "New York", "email" => "john@example.com"]; // Merge arrays

// Adding at specific position
$numbers = [1, 2, 3, 5];
array_splice($numbers, 3, 0, 4);     // Insert 4 at index 3
// $numbers is now [1, 2, 3, 4, 5]
?>
```

### Removing Elements

```php
<?php
// Removing from the end
$fruits = ["apple", "banana", "orange"];
$last = array_pop($fruits);          // $last = "orange", $fruits = ["apple", "banana"]

// Removing from the beginning
$first = array_shift($fruits);       // $first = "apple", $fruits = ["banana"]

// Removing by key
$person = ["name" => "John", "age" => 30, "city" => "New York"];
unset($person["age"]);               // Removes the "age" key-value pair

// Removing by value
$colors = ["red", "green", "blue", "red"];
$colors = array_diff($colors, ["red"]); // $colors = ["green", "blue"]

// Removing by index
$numbers = [10, 20, 30, 40, 50];
array_splice($numbers, 2, 1);        // Removes element at index 2
// $numbers is now [10, 20, 40, 50]

// Removing multiple elements
array_splice($numbers, 1, 2);        // Removes 2 elements starting at index 1
// $numbers is now [10, 50]

// Filtering elements
$numbers = [1, 2, 3, 4, 5, 6];
$evens = array_filter($numbers, function($n) {
    return $n % 2 === 0;
});
// $evens = [2, 4, 6] (with original keys preserved)
?>
```

### Merging Arrays

```php
<?php
// Basic array merging
$array1 = ["apple", "banana"];
$array2 = ["orange", "grape"];
$merged = array_merge($array1, $array2);
// $merged = ["apple", "banana", "orange", "grape"]

// Merging associative arrays
$person1 = ["name" => "John", "age" => 30];
$person2 = ["city" => "New York", "age" => 31];
$merged = array_merge($person1, $person2);
// $merged = ["name" => "John", "age" => 31, "city" => "New York"]
// Note: Duplicate keys from the second array overwrite the first

// Merging with the + operator
$merged = $person1 + $person2;
// $merged = ["name" => "John", "age" => 30, "city" => "New York"]
// Note: + keeps the first occurrence of duplicate keys

// Recursive merging
$array1 = ["fruits" => ["apple", "banana"], "numbers" => [1, 2]];
$array2 = ["fruits" => ["orange"], "numbers" => [3]];

$merged = array_merge_recursive($array1, $array2);
// $merged = [
//     "fruits" => ["apple", "banana", "orange"],
//     "numbers" => [1, 2, 3]
// ]

// Combining arrays (keys from one, values from another)
$keys = ["name", "age", "city"];
$values = ["John", 30, "New York"];
$combined = array_combine($keys, $values);
// $combined = ["name" => "John", "age" => 30, "city" => "New York"]
?>
```

### Slicing and Splicing

```php
<?php
// array_slice() - Extract a portion of an array
$fruits = ["apple", "banana", "orange", "grape", "kiwi"];
$slice = array_slice($fruits, 1, 3);     // Start at index 1, get 3 elements
// $slice = ["banana", "orange", "grape"]

$slice = array_slice($fruits, -2);       // Get last 2 elements
// $slice = ["grape", "kiwi"]

$slice = array_slice($fruits, 1, -1);    // Start at index 1, exclude last element
// $slice = ["banana", "orange", "grape"]

// array_splice() - Remove and replace elements
$numbers = [1, 2, 3, 4, 5];
$removed = array_splice($numbers, 1, 2); // Remove 2 elements starting at index 1
// $numbers = [1, 4, 5], $removed = [2, 3]

$numbers = [1, 2, 3, 4, 5];
array_splice($numbers, 1, 2, [6, 7, 8]); // Replace elements
// $numbers = [1, 6, 7, 8, 4, 5]

$numbers = [1, 2, 3, 4, 5];
array_splice($numbers, 1, 0, [6, 7]);    // Insert without removing
// $numbers = [1, 6, 7, 2, 3, 4, 5]
?>
```

## Array Functions

### Iteration Functions

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// array_map() - Apply a function to each element
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);
// $doubled = [2, 4, 6, 8, 10]

// Using arrow functions (PHP 7.4+)
$doubled = array_map(fn($n) => $n * 2, $numbers);

// array_filter() - Filter elements based on a condition
$evens = array_filter($numbers, function($n) {
    return $n % 2 === 0;
});
// $evens = [1 => 2, 3 => 4] (original keys preserved)

// array_reduce() - Reduce array to a single value
$sum = array_reduce($numbers, function($carry, $n) {
    return $carry + $n;
}, 0);
// $sum = 15

// array_walk() - Apply a function to each key-value pair
$fruits = ["a" => "apple", "b" => "banana"];
array_walk($fruits, function(&$value, $key) {
    $value = strtoupper($value);
});
// $fruits = ["a" => "APPLE", "b" => "BANANA"]

// array_map() with multiple arrays
$numbers1 = [1, 2, 3];
$numbers2 = [4, 5, 6];
$sums = array_map(function($a, $b) {
    return $a + $b;
}, $numbers1, $numbers2);
// $sums = [5, 7, 9]

// array_walk_recursive() - Apply a function recursively
$data = [
    "fruits" => ["apple", "banana"],
    "colors" => ["red", "blue"]
];
array_walk_recursive($data, function(&$value) {
    $value = strtoupper($value);
});
// $data = [
//     "fruits" => ["APPLE", "BANANA"],
//     "colors" => ["RED", "BLUE"]
// ]
?>
```

### Sorting Functions

```php
<?php
// Basic sorting
$fruits = ["orange", "apple", "banana"];
sort($fruits);                     // Sort values in ascending order
// $fruits = ["apple", "banana", "orange"]

$numbers = [5, 3, 1, 4, 2];
rsort($numbers);                   // Sort values in descending order
// $numbers = [5, 4, 3, 2, 1]

// Associative array sorting
$person = ["name" => "John", "age" => 30, "city" => "New York"];
asort($person);                    // Sort values, maintain key association
// $person = ["age" => 30, "city" => "New York", "name" => "John"]

arsort($person);                   // Sort values in descending order, maintain key association
// $person = ["name" => "John", "city" => "New York", "age" => 30]

ksort($person);                    // Sort by keys
// $person = ["age" => 30, "city" => "New York", "name" => "John"]

krsort($person);                   // Sort by keys in descending order
// $person = ["name" => "John", "city" => "New York", "age" => 30]

// Natural order sorting
$files = ["file1.txt", "file10.txt", "file2.txt"];
sort($files);                      // Standard sort
// $files = ["file1.txt", "file10.txt", "file2.txt"]

natsort($files);                   // Natural order sort
// $files = ["file1.txt", "file2.txt", "file10.txt"]

// Custom sorting
$people = [
    ["name" => "John", "age" => 30],
    ["name" => "Jane", "age" => 25],
    ["name" => "Bob", "age" => 40]
];

// Sort by age
usort($people, function($a, $b) {
    return $a["age"] <=> $b["age"]; // Using spaceship operator (PHP 7+)
});
// $people sorted by age ascending

// Sort by multiple fields
usort($people, function($a, $b) {
    // First compare by age
    $ageComparison = $a["age"] <=> $b["age"];
    
    // If ages are equal, compare by name
    if ($ageComparison === 0) {
        return $a["name"] <=> $b["name"];
    }
    
    return $ageComparison;
});

// Maintaining stability with array_multisort()
$names = array_column($people, "name");
$ages = array_column($people, "age");
array_multisort($ages, SORT_ASC, $names, SORT_ASC, $people);
// $people sorted by age, then by name
?>
```

### Search Functions

```php
<?php
$fruits = ["apple", "banana", "orange", "apple"];
$person = ["name" => "John", "age" => 30, "city" => "New York"];

// in_array() - Check if a value exists
$hasApple = in_array("apple", $fruits);        // true
$hasGrape = in_array("grape", $fruits);        // false
$hasAppleStrict = in_array("apple", $fruits, true); // true (strict comparison)

// array_search() - Find the key of a value
$key = array_search("banana", $fruits);        // 1
$key = array_search("grape", $fruits);         // false
$key = array_search("John", $person);          // "name"

// array_key_exists() - Check if a key exists
$hasName = array_key_exists("name", $person);  // true
$hasEmail = array_key_exists("email", $person); // false

// isset() vs array_key_exists()
$data = ["value" => null];
var_dump(isset($data["value"]));              // false
var_dump(array_key_exists("value", $data));    // true

// array_keys() - Get all keys
$keys = array_keys($fruits);                   // [0, 1, 2, 3]
$keys = array_keys($person);                   // ["name", "age", "city"]
$keys = array_keys($fruits, "apple");          // [0, 3] (keys where value is "apple")

// array_values() - Get all values
$values = array_values($fruits);               // ["apple", "banana", "orange", "apple"]
$values = array_values($person);               // ["John", 30, "New York"]

// array_count_values() - Count occurrences of values
$counts = array_count_values($fruits);         // ["apple" => 2, "banana" => 1, "orange" => 1]

// array_intersect() - Find values that exist in both arrays
$array1 = ["apple", "banana", "orange"];
$array2 = ["banana", "kiwi", "apple"];
$intersection = array_intersect($array1, $array2); // ["apple", "banana"]

// array_diff() - Find values that exist in the first array but not in the others
$diff = array_diff($array1, $array2);          // ["orange"]

// array_intersect_key() - Find entries with matching keys
$array1 = ["name" => "John", "age" => 30];
$array2 = ["name" => "Jane", "city" => "New York"];
$intersection = array_intersect_key($array1, $array2); // ["name" => "John"]

// array_diff_key() - Find entries with keys that don't exist in other arrays
$diff = array_diff_key($array1, $array2);      // ["age" => 30]
?>
```

### Information Functions

```php
<?php
$fruits = ["apple", "banana", "orange"];
$person = ["name" => "John", "age" => 30, "city" => "New York"];
$nested = ["a" => ["b" => ["c" => 1]]];

// count() - Count elements
$count = count($fruits);                       // 3
$count = count($person);                       // 3
$count = count($nested);                       // 1
$count = count($nested, COUNT_RECURSIVE);      // 5 (counts all nested elements)

// sizeof() - Alias of count()
$count = sizeof($fruits);                      // 3

// empty() - Check if array is empty
$isEmpty = empty($fruits);                     // false
$isEmpty = empty([]);                          // true

// is_array() - Check if variable is an array
$isArray = is_array($fruits);                  // true
$isArray = is_array("string");                 // false

// array_sum() - Sum of all values
$sum = array_sum([1, 2, 3, 4, 5]);            // 15

// array_product() - Product of all values
$product = array_product([1, 2, 3, 4, 5]);    // 120

// min() and max() - Find minimum and maximum values
$min = min([5, 3, 8, 2, 9]);                  // 2
$max = max([5, 3, 8, 2, 9]);                  // 9

// array_rand() - Get random key(s)
$key = array_rand($fruits);                    // Random index (0, 1, or 2)
$keys = array_rand($fruits, 2);                // Array of 2 random indices

// array_unique() - Remove duplicate values
$unique = array_unique(["apple", "banana", "apple", "orange"]); // ["apple", "banana", "orange"]

// array_flip() - Exchange keys with values
$flipped = array_flip(["a" => 1, "b" => 2]);  // [1 => "a", 2 => "b"]

// array_reverse() - Reverse the order
$reversed = array_reverse($fruits);            // ["orange", "banana", "apple"]
$reversed = array_reverse($fruits, true);      // [2 => "orange", 1 => "banana", 0 => "apple"]

// array_chunk() - Split array into chunks
$chunks = array_chunk($fruits, 2);             // [["apple", "banana"], ["orange"]]
$chunks = array_chunk($person, 2, true);       // [["name" => "John", "age" => 30], ["city" => "New York"]]
?>
```

## Array Destructuring (PHP 7.1+)

```php
<?php
// Basic list destructuring
$array = [1, 2, 3];
[$a, $b, $c] = $array;
// $a = 1, $b = 2, $c = 3

// Skipping elements
[, $b, ] = $array;
// $b = 2

// Partial destructuring
[$a, $b] = $array;
// $a = 1, $b = 2

// Nested arrays
$array = [1, 2, [3, 4]];
[$a, $b, [$c, $d]] = $array;
// $a = 1, $b = 2, $c = 3, $d = 4

// Destructuring with keys
$person = ["name" => "John", "age" => 30];
["name" => $name, "age" => $age] = $person;
// $name = "John", $age = 30

// Default values (PHP 7.1+)
$array = [1];
[$a, $b = 2] = $array;
// $a = 1, $b = 2

// Swapping variables
$a = 1;
$b = 2;
[$a, $b] = [$b, $a];
// $a = 2, $b = 1

// Returning multiple values from a function
function getCoordinates() {
    return [10, 20];
}

[$x, $y] = getCoordinates();
// $x = 10, $y = 20

// Destructuring in foreach loops
$people = [
    ["name" => "John", "age" => 30],
    ["name" => "Jane", "age" => 25]
];

foreach ($people as ["name" => $name, "age" => $age]) {
    echo "$name is $age years old.\n";
}
?>
```

## Array Spread Operator (PHP 7.4+)

```php
<?php
// Unpacking arrays
$array1 = [1, 2, 3];
$array2 = [...$array1, 4, 5];
// $array2 = [1, 2, 3, 4, 5]

// Combining arrays
$array1 = [1, 2, 3];
$array2 = [4, 5, 6];
$combined = [...$array1, ...$array2];
// $combined = [1, 2, 3, 4, 5, 6]

// Unpacking in function calls
function add($a, $b, $c) {
    return $a + $b + $c;
}

$numbers = [1, 2, 3];
$sum = add(...$numbers);
// $sum = 6

// Creating a copy of an array
$original = [1, 2, 3];
$copy = [...$original];
// Changes to $copy won't affect $original

// Unpacking associative arrays
$defaults = ["color" => "red", "size" => "medium"];
$custom = ["size" => "large", "material" => "cotton"];
$merged = [...$defaults, ...$custom];
// $merged = ["color" => "red", "size" => "large", "material" => "cotton"]
// Note: Later keys overwrite earlier ones

// Unpacking in array destructuring
$array1 = [1, 2];
$array2 = [3, 4];
[$a, $b, ...$rest] = [...$array1, ...$array2];
// $a = 1, $b = 2, $rest = [3, 4]
?>
```

## Best Practices

1. **Use descriptive array keys**: Choose meaningful names for associative array keys.
2. **Prefer array functions over loops**: Use built-in functions like `array_map()`, `array_filter()`, etc.
3. **Use type hints**: Specify array type hints in function parameters and return types.
4. **Be careful with references**: When passing arrays by reference, be aware of unintended side effects.
5. **Check for key existence**: Use `array_key_exists()` or `isset()` before accessing array elements.
6. **Use array destructuring**: For cleaner code when working with known array structures.
7. **Consider using objects**: For complex data structures, classes might be more appropriate than nested arrays.
8. **Be mindful of memory usage**: Large arrays can consume significant memory.
9. **Use array spread operator**: For cleaner array merging and copying (PHP 7.4+).
10. **Preserve array keys when needed**: Be aware of which functions preserve keys and which don't.