# 15. Security Best Practices

## Input Validation & Sanitization

- Validate data types and ranges
- Use `filter_var` and validation libraries

## SQL Injection

- Use prepared statements (PDO) or ORM parameter binding

## XSS

- Escape output using `htmlspecialchars()` or templating engines (Blade auto-escapes)

## CSRF

- Use CSRF tokens for state-changing requests (Laravel adds `@csrf` and middleware)

## Passwords

- Use `password_hash()` and `password_verify()` or Laravel's `Hash` facade

```php
$passwordHash = password_hash($password, PASSWORD_DEFAULT);
if (password_verify($given, $passwordHash)) {
    // success
}
```

## Secure File Uploads

- Validate mime type and extension
- Store outside the web root or use randomized filenames

## HTTPS & Secure Headers

- Force HTTPS and HSTS
- Use Content Security Policy (CSP) and X-Frame-Options

## Session Security

- Regenerate session ID on login
- Use secure and httponly cookie flags

## Dependency & Supply Chain

- Keep Composer packages up to date
- Run `composer audit` and use static analyzers (PHPStan, Psalm)

---

**Practice:** Harden a demo app by enabling HTTPS, adding CSP header, and protecting forms with CSRF.
