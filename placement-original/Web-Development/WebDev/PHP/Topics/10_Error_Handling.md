# 10. Error Handling

## Error reporting and display (dev vs prod)

```php
<?php
// Development
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Production
ini_set('display_errors', '0');
error_log('An error occurred');
?>
```

## Exceptions & try-catch

```php
<?php
try {
    $user = findUser($id); // may throw
} catch (NotFoundException $e) {
    // handle not found
} catch (Exception $e) {
    // generic handler
} finally {
    // cleanup
}
?>
```

## Custom error handlers

```php
<?php
set_error_handler(function($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

set_exception_handler(function($e) {
    // render or log
});
?>
```

## Logging (Monolog in Laravel)

```php
use Illuminate\Support\Facades\Log;

Log::info('User signed in', ['id' => $user->id]);
Log::error('Payment failed', ['error' => $ex->getMessage()]);
```

---

**Practice:** Add a custom exception type for a domain error and ensure it is reported to logs and translated to user-friendly JSON.
