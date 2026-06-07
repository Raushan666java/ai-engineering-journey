# 11. PHP and MySQL

## PDO (recommended)

```php
<?php
$dsn = 'mysql:host=127.0.0.1;dbname=testdb;charset=utf8mb4';
$pdo = new PDO($dsn, 'user', 'pass', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
]);

// Prepared statements
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
$stmt->execute(['alice@example.com']);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
```

## Transactions

```php
<?php
$pdo->beginTransaction();
try {
    $pdo->exec("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
    $pdo->exec("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    throw $e;
}
?>
```

## Using ORM (Eloquent)

```php
$users = User::where('active', 1)->get();
$user = User::find(1);
$user->orders()->create(['total' => 100]);
```

## Security: prevent SQL injection

- Use prepared statements / parameter binding
- Never interpolate user input directly into queries

---

**Practice:** Build a small CRUD script using PDO and then migrate it to Eloquent with models and migrations.
