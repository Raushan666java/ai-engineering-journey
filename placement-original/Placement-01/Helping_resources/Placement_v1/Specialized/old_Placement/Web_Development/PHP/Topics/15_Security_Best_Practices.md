# 15. Security Best Practices

- Validate and sanitize all input.
- Prevent XSS: use `htmlspecialchars()`.
- Prevent CSRF: use tokens.
- Password hashing: `password_hash()`, `password_verify()`.
- Secure file uploads: check file type/size, randomize names.

## Example
```php
$password = 'secret';
$hash = password_hash($password, PASSWORD_DEFAULT);
if (password_verify('secret', $hash)) {
    echo 'Valid!';
}
```

## Best Learning Methods
- Study common vulnerabilities and their prevention.
- Reference: https://www.php.net/manual/en/security.php
