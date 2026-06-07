# 09. Sessions and Cookies

## Sessions (native PHP)

```php
<?php
session_start();
$_SESSION['user_id'] = 123;

// Regenerate on login to prevent fixation
session_regenerate_id(true);

// Read
$userId = $_SESSION['user_id'] ?? null;

// Destroy
session_unset();
session_destroy();
?>
```

## Cookies

```php
<?php
setcookie('theme', 'dark', time() + 3600, '/', '', true, true); // secure + httponly
$value = $_COOKIE['theme'] ?? 'light';
?>
```

## Laravel sessions

- Configured in `config/session.php` (driver: file, cookie, redis)

```php
// Store
auth()->login($user);
session(['last_page' => url()->current()]);

// Flash
return redirect()->back()->with('message', 'Saved');
```

---

**Practice:** Implement session-based flash messages and secure session configuration for production.
