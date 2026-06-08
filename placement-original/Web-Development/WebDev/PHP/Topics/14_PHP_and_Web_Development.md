# 14. PHP and Web Development

## HTTP basics

- Request methods: GET, POST, PUT, DELETE
- Status codes: 200, 201, 204, 400, 401, 403, 404, 500
- Headers: Content-Type, Authorization

## JSON APIs

```php
<?php
header('Content-Type: application/json');
echo json_encode(['status' => 'ok']);
?>
```

## Routing

- In Laravel: `routes/web.php` and `routes/api.php`

```php
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
```

## Middleware

- Used for auth, logging, throttling

```php
public function handle($request, Closure $next) {
    if (!auth()->check()) return redirect('/login');
    return $next($request);
}
```

## CORS

- Configure CORS for API access (Laravel has `fruitcake/laravel-cors` or built-in features)

---

**Practice:** Create a simple RESTful API with endpoints for CRUD actions and test with Postman or curl.
