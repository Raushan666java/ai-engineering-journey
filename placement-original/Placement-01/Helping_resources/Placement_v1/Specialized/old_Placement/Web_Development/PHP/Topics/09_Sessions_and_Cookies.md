# 9. Sessions and Cookies

## HTTP Statelessness

HTTP is a stateless protocol, meaning each request is independent and doesn't know about previous requests. Sessions and cookies provide ways to maintain state across multiple requests.

## Sessions

### Session Basics
```php
// Start a session (must be called before any output)
session_start();

// Store data in session
$_SESSION['username'] = 'john_doe';
$_SESSION['user_id'] = 123;
$_SESSION['is_admin'] = true;

// Retrieve data from session
if (isset($_SESSION['username'])) {
    echo 'Hello, ' . $_SESSION['username'];
}

// Remove single session variable
unset($_SESSION['is_admin']);

// Clear all session data
$_SESSION = [];

// Destroy the session
session_destroy();
```

### Session Configuration
```php
// Set session parameters before session_start()
ini_set('session.cookie_lifetime', 3600); // 1 hour
ini_set('session.gc_maxlifetime', 3600); // 1 hour

// Or use session_set_cookie_params
session_set_cookie_params([
    'lifetime' => 3600,
    'path' => '/',
    'domain' => '.example.com',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Lax'
]);

session_start();
```

### Session Security
```php
// Start session with security options
session_start([
    'cookie_secure' => true, // Only transmit over HTTPS
    'cookie_httponly' => true, // Not accessible via JavaScript
    'use_strict_mode' => true, // Reject uninitialized session IDs
    'cookie_samesite' => 'Lax' // Control cross-site request behavior
]);

// Regenerate session ID to prevent session fixation
session_regenerate_id(true);

// Check for session hijacking (IP address change)
if (!isset($_SESSION['ip'])) {
    $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
} elseif ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR']) {
    // Potential session hijacking
    session_unset();
    session_destroy();
    session_start();
    // Redirect to login page
}
```

### Session Storage
```php
// Default storage is files
ini_set('session.save_handler', 'files');
ini_set('session.save_path', '/path/to/session/storage');

// Using database for session storage requires custom handlers
// Using Redis/Memcached requires appropriate extensions
```

## Cookies

### Setting Cookies
```php
// Basic cookie
setcookie('user', 'john', time() + 3600); // Expires in 1 hour

// Advanced cookie options
setcookie('user', 'john', [
    'expires' => time() + 86400, // 1 day
    'path' => '/',
    'domain' => '.example.com',
    'secure' => true, // HTTPS only
    'httponly' => true, // Not accessible via JavaScript
    'samesite' => 'Strict' // Strict same-site policy
]);
```

### Reading Cookies
```php
// Check if cookie exists
if (isset($_COOKIE['user'])) {
    echo 'Hello, ' . $_COOKIE['user'];
}
```

### Deleting Cookies
```php
// Set expiration time in the past
setcookie('user', '', time() - 3600);

// Or with options array (PHP 7.3+)
setcookie('user', '', [
    'expires' => time() - 3600,
    'path' => '/',
    'domain' => '.example.com'
]);
```

### Cookie vs Session

| Feature | Cookies | Sessions |
|---------|---------|----------|
| Storage | Client-side (browser) | Server-side |
| Security | Less secure | More secure |
| Size limit | ~4KB | Limited by server |
| Expiration | Can set long expiration | Usually expires when browser closes |
| Accessibility | Can be accessed by JavaScript (unless HttpOnly) | Not directly accessible by JavaScript |

## Session-Based Authentication

### Login System
```php
session_start();

// Login process
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Validate credentials (example only - use proper validation)
    if ($username === 'admin' && $password === 'password') {
        // Regenerate session ID for security
        session_regenerate_id(true);
        
        // Set session variables
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['login_time'] = time();
        
        // Redirect to dashboard
        header('Location: dashboard.php');
        exit;
    } else {
        $error = 'Invalid username or password';
    }
}
```

### Authentication Check
```php
session_start();

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// Protect page
if (!isLoggedIn()) {
    header('Location: login.php');
    exit;
}

// Check for session timeout (30 minutes)
if (isset($_SESSION['login_time']) && time() - $_SESSION['login_time'] > 1800) {
    // Session expired
    session_unset();
    session_destroy();
    header('Location: login.php?expired=1');
    exit;
}

// Update last activity time
$_SESSION['login_time'] = time();
```

### Logout
```php
session_start();

// Clear all session variables
$_SESSION = [];

// Delete the session cookie
if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params['path'], $params['domain'],
        $params['secure'], $params['httponly']
    );
}

// Destroy the session
session_destroy();

// Redirect to login page
header('Location: login.php');
exit;
```

## Remember Me Functionality

### Setting Remember Me Cookie
```php
// During login process
if (isset($_POST['remember_me']) && $_POST['remember_me'] === 'on') {
    // Generate secure token
    $token = bin2hex(random_bytes(32));
    
    // Store token in database with user ID and expiration
    // storeRememberToken($userId, $token, time() + 30 * 24 * 60 * 60);
    
    // Set remember me cookie (30 days)
    setcookie('remember_token', $token, [
        'expires' => time() + 30 * 24 * 60 * 60,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]);
}
```

### Auto-Login with Remember Me
```php
session_start();

// Check if user is not logged in but has remember token
if (!isset($_SESSION['logged_in']) && isset($_COOKIE['remember_token'])) {
    $token = $_COOKIE['remember_token'];
    
    // Verify token from database
    // $user = getUserByRememberToken($token);
    
    if ($user) {
        // Log user in
        session_regenerate_id(true);
        $_SESSION['logged_in'] = true;
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['login_time'] = time();
    }
}
```

## Session and Cookie Best Practices

### Security Best Practices
- Always use HTTPS for transmitting cookies
- Set HttpOnly flag to prevent JavaScript access
- Set Secure flag to ensure cookies are sent only over HTTPS
- Use SameSite attribute to prevent CSRF attacks
- Regenerate session IDs after login to prevent session fixation
- Set appropriate session timeouts
- Validate session data
- Use CSRF tokens for forms

### Performance Considerations
- Store minimal data in sessions
- Consider using database or Redis for session storage in high-traffic applications
- Clean up expired sessions regularly
- Use session_write_close() when session data is no longer needed

## Best Learning Methods
- Build a complete authentication system with login, logout, and remember me
- Implement session timeout and security measures
- Create a shopping cart using sessions
- Practice secure cookie handling
- Experiment with different session storage mechanisms
- Reference: https://www.php.net/manual/en/book.session.php
