# 05. Arrays

## Indexed and associative arrays

```php
<?php
$indexed = [1, 2, 3];
$assoc = ['name' => 'Alice', 'age' => 25];
?>
```

## Multidimensional arrays

```php
<?php
$matrix = [[1,2],[3,4]];
echo $matrix[1][0]; // 3
?>
```

## Useful functions: map, filter, reduce

```php
<?php
$nums = [1,2,3,4];
$double = array_map(fn($n) => $n*2, $nums); // [2,4,6,8]
$even = array_filter($nums, fn($n) => $n%2 === 0); // [2,4]
$sum = array_reduce($nums, fn($carry, $n) => $carry + $n, 0); // 10
?>
```

## Keys and values

```php
<?php
$keys = array_keys($assoc); // ['name','age']
$values = array_values($assoc); // ['Alice',25]
?>
```

## Slicing, splicing, merging

```php
<?php
$part = array_slice($nums, 1, 2); // [2,3]
array_splice($nums, 1, 2, [9,9]); // in-place
$merged = array_merge([1,2], [3,4]); // [1,2,3,4]
?>
```

## Searching

```php
<?php
$index = array_search(3, $nums); // index of value 3
$exists = in_array(4, $nums); // true
?>
```

---

**Practice:** Build an associative summary: count occurrences of words in a text using arrays.
