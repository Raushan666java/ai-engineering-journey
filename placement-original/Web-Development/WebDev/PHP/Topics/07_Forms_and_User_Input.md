# 07. Forms and User Input

## Superglobals: $\_GET, $\_POST, $\_REQUEST

```php
<?php
// Example: form handler
$name = $_POST['name'] ?? null;
$age = intval($_POST['age'] ?? 0);
?>
```

## Validation & Sanitization

```php
<?php
$name = filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);

if (!$email) {
    // handle invalid email
}
?>
```

## CSRF protection

- Use CSRF tokens in forms (Laravel provides this automatically via `@csrf`).

## File uploads

```php
<?php
if (isset($_FILES['avatar'])) {
    $file = $_FILES['avatar'];
    if ($file['error'] === UPLOAD_ERR_OK) {
        $tmp = $file['tmp_name'];
        $name = basename($file['name']);
        move_uploaded_file($tmp, __DIR__ . '/uploads/' . $name);
    }
}
?>
```

## Laravel Request helpers

```php
<?php
use Illuminate\Http\Request;

public function store(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'avatar' => 'nullable|image|max:2048',
    ]);

    $path = $request->file('avatar')?->store('avatars');
}
?>
```

---

**Practice:** Build a form that uploads an image, validates file type and size, and stores it with a unique filename.
