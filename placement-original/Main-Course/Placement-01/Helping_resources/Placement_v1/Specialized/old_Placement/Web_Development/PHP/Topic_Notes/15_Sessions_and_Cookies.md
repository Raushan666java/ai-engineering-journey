# Sessions and Cookies in PHP

HTTP is a stateless protocol, meaning each request to the server is independent and doesn't inherently retain information from previous requests. Sessions and cookies provide mechanisms to maintain state across multiple HTTP requests, enabling features like user authentication, shopping carts, and personalized experiences.

## HTTP Statelessness

In a stateless protocol:
- Each request is independent and isolated
- The server doesn't retain information between requests
- The client must provide all necessary information with each request

To overcome this limitation and create stateful web applications, PHP provides two main mechanisms:
1. **Cookies**: Small pieces of data stored on the client's browser
2. **Sessions**: Server-side storage that uses a unique identifier to associate data with a specific user

## Sessions

### Session Basics

Sessions allow you to store user data on the server across multiple page requests.

```php
<?php
// Start a session (must be called before any output)
session_start();

// Store data in the session
$_SESSION['username'] = 'john_doe';
$_SESSION['user_id'] = 123;
$_SESSION['is_admin'] = true;

// Retrieve data from the session
echo "Welcome, " . $_SESSION['username'];

// Check if a session variable exists
if (isset($_SESSION['user_id'])) {
    echo "User ID: " . $_SESSION['user_id'];
}

// Remove a specific session variable
unset($_SESSION['is_admin']);

// Clear all session data
$_SESSION = array();

// Destroy the session completely
session_destroy();
?>
```

### Session Configuration

```php
<?php
// Configure session before starting it
ini_set('session.cookie_lifetime', 3600); // Session cookie lifetime in seconds
ini_set('session.gc_maxlifetime', 3600);  // Session garbage collection lifetime

// Or use session_set_cookie_params()
session_set_cookie_params([
    'lifetime' => 3600,
    'path' => '/',
    'domain' => '.example.com',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Lax' // PHP 7.3+
]);

// Start session with options (PHP 7.0+)
session_start([
    'cookie_lifetime' => 3600,
    'read_and_close' => true, // Read session data and close immediately
]);

// Get current session ID
$sessionId = session_id();

// Generate a new session ID (but keep the current session data)
session_regenerate_id();

// Generate a new session ID and delete the old session file
session_regenerate_id(true);

// Get session name (default is "PHPSESSID")
$sessionName = session_name();

// Change session name
session_name('MY_SESSION');

// Get session status
$status = session_status();
// PHP_SESSION_DISABLED (0) - sessions are disabled
// PHP_SESSION_NONE (1) - sessions are enabled but none exists
// PHP_SESSION_ACTIVE (2) - sessions are enabled and one exists
?>
```

### Session Security

```php
<?php
// Start session with secure settings
session_start([
    'cookie_secure' => true,     // Only send cookie over HTTPS
    'cookie_httponly' => true,   // Prevent JavaScript access to session cookie
    'cookie_samesite' => 'Lax',  // Control cross-origin cookie sending (PHP 7.3+)
    'use_strict_mode' => true    // Reject uninitialized session IDs
]);

// Regenerate session ID after login to prevent session fixation
function login($username, $password) {
    // Verify credentials
    if (verifyCredentials($username, $password)) {
        // Regenerate session ID
        session_regenerate_id(true);
        
        // Set session variables
        $_SESSION['user_id'] = getUserId($username);
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true;
        
        // Store additional security information
        $_SESSION['ip_address'] = $_SERVER['REMOTE_ADDR'];
        $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
        
        return true;
    }
    return false;
}

// Check session integrity
function checkSessionIntegrity() {
    if (!isset($_SESSION['ip_address']) || !isset($_SESSION['user_agent'])) {
        return false;
    }
    
    if ($_SESSION['ip_address'] !== $_SERVER['REMOTE_ADDR']) {
        return false;
    }
    
    if ($_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
        return false;
    }
    
    return true;
}

// Usage
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
    if (checkSessionIntegrity()) {
        // User is logged in and session is valid
        echo "Welcome, " . $_SESSION['username'];
    } else {
        // Session hijacking attempt detected
        session_unset();
        session_destroy();
        header("Location: login.php?error=security");
        exit;
    }
} else {
    // User is not logged in
    header("Location: login.php");
    exit;
}
?>
```

### Session Storage

By default, PHP stores session data in temporary files on the server, but you can customize the storage mechanism.

```php
<?php
// Check current session save path
$savePath = session_save_path();
echo "Sessions are saved in: $savePath";

// Change session save path
session_save_path('/path/to/custom/directory');

// Custom session handlers
class DatabaseSessionHandler implements SessionHandlerInterface
{
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    public function open($savePath, $sessionName) {
        return true;
    }
    
    public function close() {
        return true;
    }
    
    public function read($id) {
        $stmt = $this->db->prepare("SELECT data FROM sessions WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row ? $row['data'] : '';
    }
    
    public function write($id, $data) {
        $stmt = $this->db->prepare("REPLACE INTO sessions (id, data, last_accessed) VALUES (?, ?, NOW())");
        return $stmt->execute([$id, $data]);
    }
    
    public function destroy($id) {
        $stmt = $this->db->prepare("DELETE FROM sessions WHERE id = ?");
        return $stmt->execute([$id]);
    }
    
    public function gc($maxlifetime) {
        $stmt = $this->db->prepare("DELETE FROM sessions WHERE last_accessed < DATE_SUB(NOW(), INTERVAL ? SECOND)");
        return $stmt->execute([$maxlifetime]);
    }
}

// Usage of custom session handler
$db = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
$handler = new DatabaseSessionHandler($db);
session_set_save_handler($handler, true);
session_start();
?>
```

## Cookies

### Setting Cookies

```php
<?php
// Basic cookie setting
setcookie('username', 'john_doe');

// Cookie with expiration time (1 hour from now)
setcookie('user_id', '123', time() + 3600);

// Full cookie options
setcookie(
    'preferences',         // name
    json_encode(['theme' => 'dark', 'lang' => 'en']), // value
    [                      // options array (PHP 7.3+)
        'expires' => time() + 86400 * 30, // 30 days
        'path' => '/',
        'domain' => '.example.com', // accessible on all subdomains
        'secure' => true,           // only sent over HTTPS
        'httponly' => true,         // not accessible via JavaScript
        'samesite' => 'Lax'         // controls cross-origin cookie sending
    ]
);

// For older PHP versions
setcookie(
    'preferences',
    json_encode(['theme' => 'dark', 'lang' => 'en']),
    time() + 86400 * 30, // expires
    '/',                 // path
    '.example.com',      // domain
    true,                // secure
    true                 // httponly
);
?>
```

### Reading Cookies

```php
<?php
// Check if a cookie exists
if (isset($_COOKIE['username'])) {
    echo "Welcome back, " . $_COOKIE['username'];
}

// Reading a JSON cookie
if (isset($_COOKIE['preferences'])) {
    $preferences = json_decode($_COOKIE['preferences'], true);
    $theme = $preferences['theme'] ?? 'light';
    $lang = $preferences['lang'] ?? 'en';
    
    echo "Theme: $theme, Language: $lang";
}

// Accessing all cookies
foreach ($_COOKIE as $name => $value) {
    echo "$name: $value<br>";
}
?>
```

### Deleting Cookies

```php
<?php
// Delete a cookie by setting its expiration time in the past
setcookie('username', '', time() - 3600);

// For complete deletion, also set path and domain if they were specified when creating
setcookie('preferences', '', time() - 3600, '/', '.example.com');

// Using the options array (PHP 7.3+)
setcookie('preferences', '', [
    'expires' => time() - 3600,
    'path' => '/',
    'domain' => '.example.com'
]);
?>
```

## Session-based Authentication

A common use case for sessions is user authentication.

```php
<?php
session_start();

// Login function
function login($email, $password) {
    // In a real application, you would validate against a database
    $validEmail = 'user@example.com';
    $validPasswordHash = '$2y$10$abcdefghijklmnopqrstuv'; // bcrypt hash
    
    if ($email === $validEmail && password_verify($password, $validPasswordHash)) {
        // Regenerate session ID to prevent session fixation
        session_regenerate_id(true);
        
        // Set session variables
        $_SESSION['user_id'] = 1;
        $_SESSION['email'] = $email;
        $_SESSION['logged_in'] = true;
        $_SESSION['login_time'] = time();
        
        return true;
    }
    
    return false;
}

// Logout function
function logout() {
    // Unset all session variables
    $_SESSION = array();
    
    // Delete the session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params["path"],
            $params["domain"],
            $params["secure"],
            $params["httponly"]
        );
    }
    
    // Destroy the session
    session_destroy();
}

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// Process login form
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if (login($email, $password)) {
        header('Location: dashboard.php');
        exit;
    } else {
        $error = "Invalid email or password";
    }
}

// Process logout
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    logout();
    header('Location: login.php');
    exit;
}

// Protect a page
if (!isLoggedIn()) {
    header('Location: login.php');
    exit;
}
?>

<!-- Login form -->
<form method="POST" action="login.php">
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit" name="login">Login</button>
</form>
```

## Remember Me Functionality

Implementing "Remember Me" functionality using cookies and sessions.

```php
<?php
session_start();

// Database connection (simplified)
$db = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');

// Login with remember me
function login($email, $password, $remember = false) {
    global $db;
    
    // Verify credentials
    $stmt = $db->prepare("SELECT id, password_hash FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user && password_verify($password, $user['password_hash'])) {
        // Regenerate session ID
        session_regenerate_id(true);
        
        // Set session variables
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['logged_in'] = true;
        
        // Handle "remember me"
        if ($remember) {
            // Generate a secure token
            $selector = bin2hex(random_bytes(16));
            $validator = bin2hex(random_bytes(32));
            
            // Hash the validator for storage
            $hashedValidator = password_hash($validator, PASSWORD_DEFAULT);
            
            // Set expiry date (30 days)
            $expires = date('Y-m-d H:i:s', time() + 86400 * 30);
            
            // Store token in database
            $stmt = $db->prepare("INSERT INTO auth_tokens (user_id, selector, hashed_validator, expires) VALUES (?, ?, ?, ?)");
            $stmt->execute([$user['id'], $selector, $hashedValidator, $expires]);
            
            // Set cookie with selector:validator
            $cookieValue = $selector . ':' . $validator;
            setcookie(
                'remember_me',
                $cookieValue,
                time() + 86400 * 30, // 30 days
                '/',
                '',
                true,    // secure
                true     // httponly
            );
        }
        
        return true;
    }
    
    return false;
}

// Check remember me cookie
function checkRememberMe() {
    global $db;
    
    if (isset($_COOKIE['remember_me'])) {
        list($selector, $validator) = explode(':', $_COOKIE['remember_me']);
        
        $stmt = $db->prepare("SELECT user_id, hashed_validator FROM auth_tokens WHERE selector = ? AND expires > NOW()");
        $stmt->execute([$selector]);
        $token = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($token && password_verify($validator, $token['hashed_validator'])) {
            // Token is valid, log the user in
            session_regenerate_id(true);
            $_SESSION['user_id'] = $token['user_id'];
            $_SESSION['logged_in'] = true;
            
            // Optionally, refresh the remember me token
            // ...
            
            return true;
        }
        
        // Invalid token, delete it
        $stmt = $db->prepare("DELETE FROM auth_tokens WHERE selector = ?");
        $stmt->execute([$selector]);
        
        // Delete the cookie
        setcookie('remember_me', '', time() - 3600, '/');
    }
    
    return false;
}

// Logout function with remember me cleanup
function logout() {
    global $db;
    
    // Delete remember me token if it exists
    if (isset($_COOKIE['remember_me'])) {
        list($selector, $validator) = explode(':', $_COOKIE['remember_me']);
        
        $stmt = $db->prepare("DELETE FROM auth_tokens WHERE selector = ?");
        $stmt->execute([$selector]);
        
        setcookie('remember_me', '', time() - 3600, '/');
    }
    
    // Clear session
    $_SESSION = array();
    
    // Delete session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params["path"],
            $params["domain"],
            $params["secure"],
            $params["httponly"]
        );
    }
    
    session_destroy();
}

// Check if user is logged in, first via session, then via remember me cookie
if (!isset($_SESSION['logged_in'])) {
    checkRememberMe();
}
?>

<!-- Login form with remember me -->
<form method="POST" action="login.php">
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <label>
        <input type="checkbox" name="remember_me" value="1"> Remember me
    </label>
    <button type="submit" name="login">Login</button>
</form>
```

## Best Practices for Sessions and Cookies

### Session Best Practices

1. **Start sessions at the beginning of your script**: Before any output is sent to the browser.
2. **Use HTTPS**: Protect session data in transit.
3. **Set secure session cookies**: Use `session.cookie_secure=1` to only send cookies over HTTPS.
4. **Set HttpOnly flag**: Use `session.cookie_httponly=1` to prevent JavaScript access to session cookies.
5. **Set SameSite attribute**: Use `session.cookie_samesite='Lax'` to control cross-origin cookie sending.
6. **Regenerate session IDs**: Use `session_regenerate_id(true)` after authentication or privilege changes.
7. **Implement session timeouts**: Both absolute and idle timeouts.
8. **Validate session data**: Check IP address, user agent, or other identifiers.
9. **Clean up expired sessions**: Configure session garbage collection properly.
10. **Store minimal data in sessions**: Don't store large objects or sensitive data.

```php
<?php
// Example of session timeout implementation
session_start();

// Set timeout periods (in seconds)
$idleTimeout = 1800; // 30 minutes
$absoluteTimeout = 86400; // 24 hours

// Check if session has expired
function checkSessionExpiration() {
    global $idleTimeout, $absoluteTimeout;
    
    $currentTime = time();
    
    // Check for idle timeout
    if (isset($_SESSION['last_activity']) && ($currentTime - $_SESSION['last_activity'] > $idleTimeout)) {
        return false;
    }
    
    // Check for absolute timeout
    if (isset($_SESSION['created']) && ($currentTime - $_SESSION['created'] > $absoluteTimeout)) {
        return false;
    }
    
    // Update last activity time
    $_SESSION['last_activity'] = $currentTime;
    
    return true;
}

// Initialize session timestamps
if (!isset($_SESSION['created'])) {
    $_SESSION['created'] = time();
    $_SESSION['last_activity'] = time();
}

// Check session expiration
if (!checkSessionExpiration()) {
    // Session expired, destroy it
    session_unset();
    session_destroy();
    header('Location: login.php?expired=1');
    exit;
}
?>
```

### Cookie Best Practices

1. **Set appropriate expiration times**: Use short-lived cookies when possible.
2. **Use the Secure flag**: Only send cookies over HTTPS.
3. **Use the HttpOnly flag**: Prevent JavaScript access to cookies.
4. **Use the SameSite attribute**: Control cross-origin cookie sending.
5. **Set proper domain and path**: Limit cookie scope to where it's needed.
6. **Don't store sensitive data**: Encrypt any sensitive data that must be stored.
7. **Keep cookie size small**: Browsers limit cookie size (typically 4KB).
8. **Use meaningful names**: Make cookie names descriptive but not revealing.
9. **Validate cookie data**: Don't trust cookie values without validation.
10. **Provide cookie notice**: Inform users about cookie usage (legal requirement in many jurisdictions).

```php
<?php
// Example of secure cookie setting
function setSecureCookie($name, $value, $expires = 0, $path = '/', $domain = '') {
    $secure = true; // Only send over HTTPS
    $httponly = true; // Prevent JavaScript access
    
    if (PHP_VERSION_ID >= 70300) {
        // PHP 7.3+ supports options array and SameSite attribute
        setcookie($name, $value, [
            'expires' => $expires,
            'path' => $path,
            'domain' => $domain,
            'secure' => $secure,
            'httponly' => $httponly,
            'samesite' => 'Lax' // Or 'Strict' for more security
        ]);
    } else {
        // Older PHP versions
        setcookie($name, $value, $expires, $path, $domain, $secure, $httponly);
    }
}

// Usage
setSecureCookie('user_preference', json_encode(['theme' => 'dark']), time() + 86400 * 30);
?>
```

## Common Issues and Solutions

### Headers Already Sent Error

```php
<?php
// Problem: Output before session_start()
echo "Hello"; // This sends headers
session_start(); // Error: Cannot start session when headers already sent

// Solution 1: Start session before any output
session_start();
echo "Hello"; // Now it works

// Solution 2: Use output buffering
ob_start();
echo "Hello";
session_start(); // Works because output is buffered
ob_end_flush(); // Now sends the output
?>
```

### Session Data Not Persisting

```php
<?php
// Problem: Session data disappears between requests

// Possible causes and solutions:

// 1. Session cookie not being set or accepted
// Check browser cookie settings and ensure proper domain/path

// 2. Session ID changing unexpectedly
// Avoid calling session_regenerate_id() unnecessarily

// 3. Session garbage collection too aggressive
ini_set('session.gc_maxlifetime', 3600); // Increase lifetime to 1 hour

// 4. Session save path issues
$savePath = session_save_path();
if (!is_writable($savePath)) {
    // Directory not writable, use a different path
    session_save_path('/tmp');
}

// 5. PHP running as different users for different requests
// Configure proper permissions on session directory
?>
```

### Cross-Domain Cookie Issues

```php
<?php
// Problem: Cookies not working across subdomains

// Solution: Set proper domain
setcookie(
    'shared_cookie',
    'value',
    time() + 3600,
    '/',
    '.example.com' // Note the leading dot for all subdomains
);

// Problem: Cookies not sent in AJAX requests to different domains

// Solution: Use SameSite=None with Secure flag (requires HTTPS)
setcookie(
    'api_token',
    'value',
    [
        'expires' => time() + 3600,
        'path' => '/',
        'domain' => '.example.com',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'None' // Allows cross-site requests
    ]
);
?>
```