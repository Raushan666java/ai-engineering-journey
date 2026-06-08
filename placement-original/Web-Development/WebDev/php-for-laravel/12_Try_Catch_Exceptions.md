# 12. Try-Catching Exceptions and PHP Errors (3 min)

## Overview

Laravel uses **exceptions** extensively for error handling. Understanding `try-catch`, custom exceptions, and Laravel's exception handler is essential for building robust applications.

---

## Key Concepts

### 1. Try-Catch-Finally

- Catch and handle exceptions gracefully
- Finally block always executes

### 2. Custom Exceptions

- Create domain-specific exceptions
- Implement `report()` and `render()` methods

### 3. Laravel Exception Handler

- Global exception handling
- Custom error responses

---

## Basic Try-Catch

```php
<?php
try {
    $result = 10 / 0;  // DivisionByZeroError
} catch (DivisionByZeroError $e) {
    echo "Cannot divide by zero: " . $e->getMessage();
} catch (Exception $e) {
    echo "Generic error: " . $e->getMessage();
} finally {
    echo "This always runs";
}
```

### Multiple Catch Blocks

```php
<?php
use Illuminate\Database\Eloquent\ModelNotFoundException;

try {
    $user = User::findOrFail($id);
    $payment = $user->processPayment();
} catch (ModelNotFoundException $e) {
    return response()->json(['error' => 'User not found'], 404);
} catch (PaymentException $e) {
    return response()->json(['error' => $e->getMessage()], 402);
} catch (Exception $e) {
    Log::error('Payment failed', ['exception' => $e]);
    return response()->json(['error' => 'Server error'], 500);
}
```

---

## Laravel Custom Exceptions

### Creating Custom Exception

```php
<?php
namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentException extends Exception
{
    public function __construct(
        string $message = "Payment processing failed",
        int $code = 0,
        ?Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }

    // Log exception
    public function report(): void
    {
        Log::error('Payment failed', [
            'message' => $this->getMessage(),
            'trace' => $this->getTraceAsString()
        ]);
    }

    // Custom response
    public function render(Request $request): JsonResponse
    {
        return response()->json([
            'error' => $this->getMessage(),
            'code' => 'PAYMENT_FAILED'
        ], 402);
    }
}
```

### Using Custom Exception

```php
<?php
class PaymentService
{
    public function charge(float $amount): bool
    {
        if ($amount <= 0) {
            throw new PaymentException('Amount must be positive');
        }

        $result = Gateway::charge($amount);

        if (!$result->success) {
            throw new PaymentException($result->error);
        }

        return true;
    }
}
```

---

## Laravel Exception Handler

### Handler: `app/Exceptions/Handler.php`

```php
<?php
namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    // Don't report these exceptions
    protected $dontReport = [
        ValidationException::class,
    ];

    // Register exception handling
    public function register(): void
    {
        // Custom handler for PaymentException
        $this->renderable(function (PaymentException $e, $request) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error' => $e->getMessage()
                ], 402);
            }

            return redirect()->back()->withErrors($e->getMessage());
        });

        // Handle ModelNotFoundException globally
        $this->renderable(function (ModelNotFoundException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json(['error' => 'Resource not found'], 404);
            }

            abort(404);
        });
    }
}
```

---

## Real-World Laravel Examples

### Example 1: Controller with Error Handling

```php
<?php
namespace App\Http\Controllers;

use App\Exceptions\InsufficientFundsException;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    public function __construct(
        private OrderService $orderService
    ) {}

    public function store(Request $request): JsonResponse
    {
        try {
            $order = $this->orderService->createOrder(
                auth()->user(),
                $request->validated()
            );

            return response()->json($order, 201);

        } catch (InsufficientFundsException $e) {
            return response()->json([
                'error' => 'Insufficient funds',
                'required' => $e->getRequiredAmount()
            ], 402);

        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->errors()
            ], 422);

        } catch (Exception $e) {
            Log::error('Order creation failed', [
                'user' => auth()->id(),
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'error' => 'Failed to create order'
            ], 500);
        }
    }
}
```

### Example 2: Database Transaction

```php
<?php
use Illuminate\Support\Facades\DB;

class TransferService
{
    public function transfer(User $from, User $to, float $amount): void
    {
        DB::beginTransaction();

        try {
            // Debit from sender
            $from->balance -= $amount;
            $from->save();

            // Credit to receiver
            $to->balance += $amount;
            $to->save();

            // Log transaction
            Transaction::create([
                'from' => $from->id,
                'to' => $to->id,
                'amount' => $amount
            ]);

            DB::commit();

        } catch (Exception $e) {
            DB::rollBack();
            throw new TransferException("Transfer failed: {$e->getMessage()}");
        }
    }
}
```

---

## Best Practices

1. **Use specific exceptions** — catch most specific first
2. **Create custom exceptions** for domain errors
3. **Log errors appropriately** — use Log facade
4. **Return proper HTTP codes** — 4xx client errors, 5xx server errors
5. **Use DB transactions** with try-catch for data integrity
6. **Don't catch everything** — let Laravel handle unexpected errors

---

## Practice Exercises

### Exercise 1: Custom Exception

```php
// Create InventoryException with custom properties:
// - productId
// - requestedQuantity
// - availableQuantity
// Implement report() and render()
```

### Exercise 2: Service with Error Handling

```php
// Create ProductService->purchaseProduct()
// Handle: InsufficientStockException, PaymentException
// Use DB transaction
```

---

## Key Takeaways

- **Try-catch** handles exceptions gracefully
- **Custom exceptions** provide domain-specific error handling
- **Laravel's Handler** centralized exception logic
- **Use transactions** with try-catch for data consistency

---

**Next:** [13. Composer: All You Need To Know](13_Composer_Complete.md)
