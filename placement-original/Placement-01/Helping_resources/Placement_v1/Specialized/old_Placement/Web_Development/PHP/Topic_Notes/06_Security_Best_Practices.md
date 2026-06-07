# PHP Security Best Practices

Security is a critical aspect of web development. PHP applications are often targets for attacks due to their widespread use. This guide covers essential security practices to protect your PHP applications from common vulnerabilities.

## Input Validation and Sanitization

### Validate All Input

Always validate user input before processing it. Input can come from various sources:
- Form submissions (`$_POST`)
- URL parameters (`$_GET`)
- Cookies (`$_COOKIE`)
- HTTP headers
- File uploads (`$_FILES`)
- Environment variables
- Database results
- API responses

```php
<?php
// Basic validation
if (empty($_POST['email'])) {
    $errors[] = 'Email is required';
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (strlen($_POST['password']) < 8) {
    $errors[] = 'Password must be at least 8 characters';
}

// Using filter_input for validation
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if (!$email) {
    $errors[] = 'Invalid email format';
}

$age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 18, 'max_range' => 120]
]);
if ($age === false) {
    $errors[] = 'Age must be between 18 and 120';
}
?>
```

### Sanitize Output

Always sanitize data before displaying it to prevent Cross-Site Scripting (XSS) attacks.

```php
<?php
// Sanitize output for HTML context
$username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
echo "Welcome, $username";

// For different contexts, use appropriate sanitization
// For HTML attributes
$value = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo "<input value=\"$value\">";

// For JavaScript
$value = json_encode($input);
echo "<script>var data = $value;</script>";

// For URLs
$url = filter_var($input, FILTER_SANITIZE_URL);
echo "<a href=\"$url\">Link</a>";
?>
```

## SQL Injection Prevention

SQL injection is one of the most common attack vectors. Always use prepared statements to prevent it.

### Using MySQLi

```php
<?php
// UNSAFE - vulnerable to SQL injection
$username = $_POST['username'];
$query = "SELECT * FROM users WHERE username = '$username'";
$result = $mysqli->query($query); // NEVER DO THIS

// SAFE - using prepared statements
$stmt = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $_POST['username']);
$stmt->execute();
$result = $stmt->get_result();
?>
```

### Using PDO

```php
<?php
// UNSAFE - vulnerable to SQL injection
$username = $_POST['username'];
$query = "SELECT * FROM users WHERE username = '$username'";
$stmt = $pdo->query($query); // NEVER DO THIS

// SAFE - using prepared statements with named parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $_POST['username']]);

// SAFE - using prepared statements with positional parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$_POST['username']]);
?>
```

## Cross-Site Scripting (XSS) Prevention

XSS attacks occur when an attacker injects malicious scripts into web pages viewed by other users.

### Output Encoding

```php
<?php
// Basic output encoding
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// Context-specific encoding
// For HTML content
$safeContent = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// For JavaScript
$safeJs = json_encode($userInput);

// For CSS
$safeCss = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
?>
```

### Content Security Policy (CSP)

Content Security Policy is an added layer of security that helps detect and mitigate certain types of attacks, including XSS.

```php
<?php
// Set CSP header
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' https://trusted-cdn.com; img-src 'self' data:;");
?>
```

## Cross-Site Request Forgery (CSRF) Protection

CSRF attacks trick users into submitting unwanted requests.

```php
<?php
// Start session
session_start();

// Generate CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// In HTML form
echo '<form method="post">';
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
echo '<!-- Other form fields -->';
echo '</form>';

// Validate token on form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }
    
    // Process form submission
}
?>
```

## Session Security

Sessions can be vulnerable to hijacking and fixation attacks.

```php
<?php
// Configure secure session settings
ini_set('session.cookie_httponly', 1); // Prevent JavaScript access to session cookie
ini_set('session.use_only_cookies', 1); // Force use of cookies for session
ini_set('session.cookie_secure', 1);    // Only transmit session cookies over HTTPS

// Start session with secure options
session_start([
    'cookie_httponly' => true,
    'cookie_secure' => true,
    'cookie_samesite' => 'Lax', // Helps prevent CSRF
]);

// Regenerate session ID after login to prevent session fixation
function login($user) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_name'] = $user['name'];
    
    // Regenerate session ID
    session_regenerate_id(true);
    
    // Store IP and user agent to detect session hijacking
    $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
    $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
}

// Check for session hijacking
function checkSession() {
    if ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR'] || 
        $_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
        // Potential session hijacking
        session_unset();
        session_destroy();
        header('Location: login.php');
        exit;
    }
}
?>
```

## Password Hashing

Never store plain-text passwords. Always use secure hashing algorithms.

```php
<?php
// Hash a password
$password = 'user_password';
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Store $hashedPassword in database

// Verify password
if (password_verify($password, $hashedPassword)) {
    // Password is correct
    
    // Check if rehash is needed (if PHP's default algorithm has changed)
    if (password_needs_rehash($hashedPassword, PASSWORD_DEFAULT)) {
        $newHash = password_hash($password, PASSWORD_DEFAULT);
        // Update stored hash in database
    }
} else {
    // Password is incorrect
}
?>
```

## File Upload Security

File uploads can be a significant security risk if not handled properly.

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // Check for upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        die('Upload failed with error code ' . $file['error']);
    }
    
    // Validate file size (e.g., max 2MB)
    $maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if ($file['size'] > $maxSize) {
        die('File too large (max ' . $maxSize / 1024 / 1024 . 'MB)');
    }
    
    // Validate file type
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    
    // Get MIME type using finfo (more reliable than $_FILES['type'])
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $fileType = $finfo->file($file['tmp_name']);
    
    if (!in_array($fileType, $allowedTypes)) {
        die('Invalid file type. Allowed types: ' . implode(', ', $allowedTypes));
    }
    
    // Generate safe filename
    $filename = bin2hex(random_bytes(16)) . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    
    // Specify upload directory (outside web root if possible)
    $uploadDir = '/path/to/secure/uploads/';
    
    // Ensure directory exists and is writable
    if (!is_dir($uploadDir) || !is_writable($uploadDir)) {
        die('Upload directory does not exist or is not writable');
    }
    
    // Move uploaded file
    $destination = $uploadDir . $filename;
    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        die('Failed to move uploaded file');
    }
    
    // For images, consider resizing or reprocessing to remove any embedded malicious code
    if (strpos($fileType, 'image/') === 0) {
        // Process image with GD or Imagick
    }
    
    echo 'File uploaded successfully';
}
?>
```

## Directory Traversal Prevention

Directory traversal attacks attempt to access files outside the intended directory.

```php
<?php
// UNSAFE - vulnerable to directory traversal
$file = $_GET['file'];
include($file); // NEVER DO THIS

// SAFE - validate against a whitelist
$allowedFiles = ['config.php', 'functions.php', 'header.php', 'footer.php'];
$file = $_GET['file'];

if (in_array($file, $allowedFiles)) {
    include($file);
} else {
    die('Invalid file requested');
}

// SAFE - sanitize file path
$file = $_GET['file'];
$file = basename($file); // Remove directory components
include('includes/' . $file);

// SAFE - validate file is within intended directory
$file = $_GET['file'];
$realPath = realpath($file);
$baseDir = realpath('/var/www/includes/');

if ($realPath === false || strpos($realPath, $baseDir) !== 0) {
    die('Invalid file path');
}

include($realPath);
?>
```

## Remote File Inclusion Prevention

Remote file inclusion (RFI) allows attackers to include files from remote servers.

```php
<?php
// Disable allow_url_include in php.ini
// allow_url_include = Off

// UNSAFE - vulnerable to RFI
$file = $_GET['file'];
include($file); // NEVER DO THIS

// SAFE - validate file is local and within intended directory
$file = $_GET['file'];

// Ensure it's a local file
if (preg_match('#^https?://#i', $file)) {
    die('Remote file inclusion not allowed');
}

// Validate path as shown in directory traversal prevention
$realPath = realpath($file);
$baseDir = realpath('/var/www/includes/');

if ($realPath === false || strpos($realPath, $baseDir) !== 0) {
    die('Invalid file path');
}

include($realPath);
?>
```

## HTTP Security Headers

Adding security headers can enhance your application's security posture.

```php
<?php
// X-Content-Type-Options prevents MIME type sniffing
header('X-Content-Type-Options: nosniff');

// X-Frame-Options prevents clickjacking
header('X-Frame-Options: DENY');

// X-XSS-Protection enables browser's XSS filter
header('X-XSS-Protection: 1; mode=block');

// Strict-Transport-Security enforces HTTPS
header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');

// Content-Security-Policy restricts resource loading
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com;");

// Referrer-Policy controls referrer information
header('Referrer-Policy: strict-origin-when-cross-origin');

// Permissions-Policy (formerly Feature-Policy) restricts browser features
header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
?>
```

## Error Handling and Information Disclosure

Proper error handling prevents leaking sensitive information.

```php
<?php
// In development
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// In production
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');

// Custom error handler
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    // Log the error
    error_log("Error [$errno]: $errstr in $errfile on line $errline");
    
    // Display user-friendly message
    if (in_array($errno, [E_ERROR, E_USER_ERROR])) {
        header('HTTP/1.1 500 Internal Server Error');
        echo '<h1>Sorry, something went wrong</h1>';
        echo '<p>Our team has been notified and will fix this issue soon.</p>';
        exit(1);
    }
    
    // Let PHP handle other errors
    return false;
}

// Set custom error handler
set_error_handler('customErrorHandler');

// Custom exception handler
function customExceptionHandler($exception) {
    // Log the exception
    error_log("Exception: " . $exception->getMessage() . 
              " in " . $exception->getFile() . 
              " on line " . $exception->getLine());
    
    // Display user-friendly message
    header('HTTP/1.1 500 Internal Server Error');
    echo '<h1>Sorry, something went wrong</h1>';
    echo '<p>Our team has been notified and will fix this issue soon.</p>';
    exit(1);
}

// Set custom exception handler
set_exception_handler('customExceptionHandler');
?>
```

## Secure Configuration

### PHP Configuration

Secure your `php.ini` settings:

```ini
; Disable dangerous functions
disable_functions = exec,passthru,shell_exec,system,proc_open,popen,curl_exec,curl_multi_exec,parse_ini_file,show_source

; Disable remote file inclusion
allow_url_fopen = Off
allow_url_include = Off

; Limit file uploads
file_uploads = On
upload_max_filesize = 2M
max_file_uploads = 5

; Cookie security
session.cookie_httponly = 1
session.cookie_secure = 1
session.use_only_cookies = 1
session.cookie_samesite = "Lax"

; Error handling
display_errors = Off
log_errors = On
error_log = /path/to/error.log

; Limit POST size
post_max_size = 8M

; Set open_basedir restriction
open_basedir = /var/www/:/tmp/
```

### Web Server Configuration

For Apache, use `.htaccess` to enhance security:

```apache
# Prevent directory listing
Options -Indexes

# Prevent access to .htaccess
<Files .htaccess>
    Order allow,deny
    Deny from all
</Files>

# Prevent access to sensitive files
<FilesMatch "^(\.env|composer\.json|composer\.lock)$">
    Order allow,deny
    Deny from all
</FilesMatch>

# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Add security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "DENY"
    Header set X-XSS-Protection "1; mode=block"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header set Content-Security-Policy "default-src 'self';"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## Authentication and Authorization

### Secure Authentication

```php
<?php
// Secure login process
function login($email, $password) {
    global $pdo;
    
    // Find user by email
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Verify password if user exists
    if ($user && password_verify($password, $user['password'])) {
        // Start secure session
        session_start([
            'cookie_httponly' => true,
            'cookie_secure' => true,
            'cookie_samesite' => 'Lax',
        ]);
        
        // Regenerate session ID to prevent session fixation
        session_regenerate_id(true);
        
        // Store minimal user data in session
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_role'] = $user['role'];
        $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
        $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
        
        // Update last login timestamp
        $stmt = $pdo->prepare("UPDATE users SET last_login = NOW() WHERE id = :id");
        $stmt->execute(['id' => $user['id']]);
        
        return true;
    }
    
    // Implement brute force protection
    // Record failed login attempt
    logFailedLogin($email, $_SERVER['REMOTE_ADDR']);
    
    return false;
}

// Authorization check
function checkPermission($permission) {
    // Ensure user is logged in
    if (!isset($_SESSION['user_id'])) {
        return false;
    }
    
    // Check session integrity
    if ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR'] || 
        $_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
        // Potential session hijacking
        session_unset();
        session_destroy();
        return false;
    }
    
    // Get user permissions from database or session
    $userPermissions = getUserPermissions($_SESSION['user_id']);
    
    // Check if user has required permission
    return in_array($permission, $userPermissions);
}
?>
```

## Secure Coding Practices

### Avoid Dangerous Functions

```php
<?php
// UNSAFE - vulnerable to command injection
$username = $_GET['username'];
system("grep $username /var/log/users.log"); // NEVER DO THIS

// SAFE - use safer alternatives
$username = escapeshellarg($_GET['username']);
system("grep $username /var/log/users.log");

// Even better - avoid shell commands entirely when possible
$log = file_get_contents('/var/log/users.log');
$lines = explode("\n", $log);
$matches = [];

foreach ($lines as $line) {
    if (strpos($line, $_GET['username']) !== false) {
        $matches[] = $line;
    }
}
?>
```

### Use Safe Functions

```php
<?php
// UNSAFE - vulnerable to type confusion
if ($_GET['id'] == 123) { // NEVER DO THIS
    // Access granted
}

// SAFE - use strict comparison
if ($_GET['id'] === 123) {
    // Access granted
}

// UNSAFE - vulnerable to timing attacks
if (hash('sha256', $userInput) === $storedHash) { // NEVER DO THIS
    // Password is correct
}

// SAFE - use constant-time comparison
if (hash_equals($storedHash, hash('sha256', $userInput))) {
    // Password is correct
}
?>
```

## Security Auditing Tools

Regular security audits help identify vulnerabilities before attackers do.

### Static Analysis Tools

- **PHP_CodeSniffer**: Detects violations of coding standards
- **PHPStan**: Finds bugs in your code without running it
- **Psalm**: Static analysis tool focusing on type safety
- **PHPMD**: PHP Mess Detector, finds potential problems
- **RIPS**: Detects security vulnerabilities

### Dynamic Analysis Tools

- **OWASP ZAP**: Web application security scanner
- **Burp Suite**: Web vulnerability scanner
- **Acunetix**: Automated web vulnerability scanner
- **Nessus**: Vulnerability scanner

### Dependency Checking

- **Composer audit**: Check for vulnerabilities in dependencies
- **Snyk**: Monitors and fixes vulnerabilities in dependencies

## Best Practices Summary

1. **Validate all input** and sanitize all output
2. **Use prepared statements** for database queries
3. **Hash passwords** using modern algorithms
4. **Implement CSRF protection** for forms
5. **Set secure HTTP headers**
6. **Configure secure sessions**
7. **Validate file uploads** thoroughly
8. **Implement proper error handling**
9. **Use HTTPS** for all traffic
10. **Keep software updated** (PHP, frameworks, libraries)
11. **Follow the principle of least privilege**
12. **Implement rate limiting** for sensitive operations
13. **Use Content Security Policy**
14. **Conduct regular security audits**
15. **Have an incident response plan**

## References

- [OWASP PHP Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Security_Cheat_Sheet.html)
- [PHP Security Manual](https://www.php.net/manual/en/security.php)
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [PHP Security Best Practices](https://phpsecurity.readthedocs.io/en/latest/)