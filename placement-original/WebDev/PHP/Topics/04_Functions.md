# 04. Functions

## Declaring functions

```php
<?php
function add(int $a, int $b): int {
    return $a + $b;
}

echo add(2, 3); // 5
?>
```

## Default and named parameters

```php
<?php
function greet(string $name = 'Guest') {
    echo "Hello, $name";
}

greet(); // Hello, Guest

greet(name: 'Alice'); // named arg (PHP 8+)
?>
```

## Variadic functions

```php
<?php
function sum(int ...$numbers): int {
    return array_sum($numbers);
}

echo sum(1,2,3,4); // 10
?>
```

## Anonymous functions & closures

```php
<?php
$filter = function(array $arr) {
    return array_filter($arr, fn($v) => $v > 2);
};

print_r($filter([1,2,3,4]));
?>
```

## Recursion

```php
<?php
function factorial(int $n): int {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}

echo factorial(5); // 120
?>
```

## Generators (yield)

```php
<?php
function numbers() {
    for ($i = 0; $i < 3; $i++) {
        yield $i;
    }
}

foreach (numbers() as $n) {
    echo $n; // 0 1 2
}
?>
```

---

**Practice:** Convert a loop that builds a large array into a generator to save memory.
