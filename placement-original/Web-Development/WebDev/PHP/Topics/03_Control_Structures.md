# 03. Control Structures

## if / else / elseif

```php
<?php
$score = 75;

if ($score >= 90) {
    echo "A";
} elseif ($score >= 75) {
    echo "B";
} else {
    echo "C";
}
?>
```

## switch / case

```php
<?php
$status = 'approved';

switch ($status) {
    case 'pending':
        echo 'Pending approval';
        break;
    case 'approved':
        echo 'Approved';
        break;
    case 'rejected':
        echo 'Rejected';
        break;
    default:
        echo 'Unknown';
}
?>
```

## Loops (for, while, foreach)

```php
<?php
// for
for ($i = 0; $i < 5; $i++) {
    echo $i . PHP_EOL;
}

// while
$j = 0;
while ($j < 3) {
    echo $j++ . PHP_EOL;
}

// foreach
$array = ['a' => 1, 'b' => 2];
foreach ($array as $key => $value) {
    echo "$key => $value" . PHP_EOL;
}
?>
```

## break / continue / return

```php
<?php
for ($i = 0; $i < 10; $i++) {
    if ($i === 5) break;     // exit loop
    if ($i % 2 === 0) continue; // skip even
    echo $i . PHP_EOL;
}
?>
```

## Alternative syntax (useful in templates)

```php
<?php if ($user): ?>
    <p>Hello, <?= htmlspecialchars($user->name) ?></p>
<?php endif; ?>
```

---

**Practice:** Convert a nested if/else to a switch or `match` (PHP 8+) and write small tests for edge cases.
