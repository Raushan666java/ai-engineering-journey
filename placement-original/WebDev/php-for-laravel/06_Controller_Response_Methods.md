# 06. Controller Response Methods: "General" Controller or Traits

**Time:** 4 minutes | **Difficulty:** Beginner

---

## 🎯 What You'll Learn

- Reusable response methods in controllers
- Base Controller vs Traits approach
- API response patterns
- When to use each approach

---

## 📖 Two Approaches

### 1. Base Controller (Inheritance)

All controllers extend a base with common methods

### 2. Traits (Composition)

Controllers use traits for specific functionality

---

## 💻 Option 1: Base Controller

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class Controller
{
    protected function successResponse($data, string $message = 'Success', int $code = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function errorResponse(string $message, int $code = 400): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $code);
    }
}
```

### Usage

```php
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $this->successResponse($users, 'Users retrieved');
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return $this->errorResponse('User not found', 404);
        }

        return $this->successResponse($user);
    }
}
```

---

## 💻 Option 2: Trait Approach

```php
<?php

namespace App\Traits;

trait ApiResponses
{
    protected function successResponse($data, string $message = 'Success', int $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function errorResponse(string $message, int $code = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $code);
    }
}
```

### Usage

```php
use App\Traits\ApiResponses;

class ProductController extends Controller
{
    use ApiResponses;

    public function store(Request $request)
    {
        $product = Product::create($request->validated());
        return $this->successResponse($product, 'Product created', 201);
    }
}
```

---

## 🏋️ Practice Exercises

Create:

1. Base controller with response methods
2. Trait for API responses
3. Use both in different controllers

---

**Next:** [07. Visibility](07_Visibility.md)
