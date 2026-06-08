# 7. Forms and User Input

## HTML Forms Basics

### Form Structure
```html
<form action="process.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

### Form Methods
- **GET**: Data sent in URL parameters
  - Visible in browser address bar
  - Limited data size (2048 characters)
  - Bookmarkable
  - Not secure for sensitive data
  - Used for search forms, filtering

- **POST**: Data sent in HTTP request body
  - Not visible in URL
  - No size limitation
  - Not bookmarkable
  - More secure for sensitive data
  - Used for login forms, data submission

## Accessing Form Data

### GET Data
```php
// URL: process.php?name=John&email=john@example.com

$name = $_GET['name'] ?? ''; // John
$email = $_GET['email'] ?? ''; // john@example.com

// Check if parameter exists
if (isset($_GET['name'])) {
    // Process name
}
```

### POST Data
```php
// Form submitted with POST method

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form
}
```

### REQUEST Data
```php
// Contains combined GET, POST, and COOKIE data
// Not recommended for security reasons

$name = $_REQUEST['name'] ?? '';
```

### Form Arrays
```html
<form method="post">
    <input type="checkbox" name="interests[]" value="sports"> Sports
    <input type="checkbox" name="interests[]" value="music"> Music
    <input type="checkbox" name="interests[]" value="reading"> Reading
    <input type="submit" value="Submit">
</form>
```

```php
// Processing checkbox array
if (isset($_POST['interests'])) {
    $interests = $_POST['interests'];
    foreach ($interests as $interest) {
        echo "You like $interest<br>";
    }
}
```

## Input Validation and Sanitization

### Basic Validation
```php
$errors = [];

// Required field
if (empty($_POST['name'])) {
    $errors[] = 'Name is required';
}

// Email validation
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// Numeric validation
if (!is_numeric($_POST['age'])) {
    $errors[] = 'Age must be a number';
}

// Length validation
if (strlen($_POST['password']) < 8) {
    $errors[] = 'Password must be at least 8 characters';
}

// Display errors
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo $error . '<br>';
    }
} else {
    // Process valid form
}
```

### Filter Functions
```php
// Validate data
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if ($email === false || $email === null) {
    echo 'Invalid email';
}

// Sanitize data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
// Note: FILTER_SANITIZE_STRING is deprecated in PHP 8.1+

// Alternative sanitization for PHP 8.1+
$name = htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8');
```

### Filter Types
- **Validation filters**:
  - `FILTER_VALIDATE_EMAIL`
  - `FILTER_VALIDATE_INT`
  - `FILTER_VALIDATE_URL`
  - `FILTER_VALIDATE_IP`
  - `FILTER_VALIDATE_BOOLEAN`

- **Sanitization filters**:
  - `FILTER_SANITIZE_EMAIL`
  - `FILTER_SANITIZE_NUMBER_INT`
  - `FILTER_SANITIZE_URL`
  - `FILTER_SANITIZE_SPECIAL_CHARS`

### Custom Validation
```php
function validateUsername($username) {
    // Only allow alphanumeric characters and underscores
    return preg_match('/^[a-zA-Z0-9_]+$/', $username);
}

if (!validateUsername($_POST['username'])) {
    $errors[] = 'Username can only contain letters, numbers, and underscores';
}
```

## Security Considerations

### Cross-Site Scripting (XSS) Prevention
```php
// Always escape output
$name = htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8');
echo "Hello, $name!";
```

### Cross-Site Request Forgery (CSRF) Protection
```php
// Start session
session_start();

// Generate CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// In form
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';

// Validate token on submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }
    // Process form
}
```

## File Uploads

### HTML Form
```html
<form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="file">Select file:</label>
    <input type="file" name="file" id="file">
    <input type="submit" value="Upload">
</form>
```

### Processing Uploads
```php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // File information
    $name = $file['name'];
    $type = $file['type'];
    $tmp_name = $file['tmp_name'];
    $error = $file['error'];
    $size = $file['size'];
    
    // Validate file
    if ($error === UPLOAD_ERR_OK) {
        // Check file size (e.g., max 2MB)
        if ($size > 2 * 1024 * 1024) {
            echo 'File too large';
        } else {
            // Check file type
            $allowed = ['image/jpeg', 'image/png', 'image/gif'];
            if (in_array($type, $allowed)) {
                // Generate safe filename
                $new_name = uniqid() . '-' . $name;
                
                // Move file to permanent location
                $upload_dir = 'uploads/';
                if (move_uploaded_file($tmp_name, $upload_dir . $new_name)) {
                    echo 'File uploaded successfully';
                } else {
                    echo 'Error moving uploaded file';
                }
            } else {
                echo 'Invalid file type';
            }
        }
    } else {
        // Handle upload errors
        switch ($error) {
            case UPLOAD_ERR_INI_SIZE:
                echo 'File exceeds upload_max_filesize directive';
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo 'File exceeds MAX_FILE_SIZE directive';
                break;
            case UPLOAD_ERR_PARTIAL:
                echo 'File was only partially uploaded';
                break;
            case UPLOAD_ERR_NO_FILE:
                echo 'No file was uploaded';
                break;
            default:
                echo 'Unknown upload error';
        }
    }
}
```

## Handling Multiple Form Pages

### Session-Based Forms
```php
// Start session
session_start();

// Page 1: Personal information
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['page1'])) {
    // Store page 1 data in session
    $_SESSION['form_data']['name'] = $_POST['name'];
    $_SESSION['form_data']['email'] = $_POST['email'];
    
    // Redirect to page 2
    header('Location: form_page2.php');
    exit;
}

// Page 2: Additional information
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['page2'])) {
    // Store page 2 data in session
    $_SESSION['form_data']['age'] = $_POST['age'];
    $_SESSION['form_data']['interests'] = $_POST['interests'];
    
    // Process complete form data
    $formData = $_SESSION['form_data'];
    
    // Clear form data from session
    unset($_SESSION['form_data']);
    
    // Process data or redirect to confirmation
    header('Location: form_confirmation.php');
    exit;
}
```

## AJAX Form Handling

### HTML and JavaScript
```html
<form id="ajaxForm">
    <input type="text" name="name" id="name">
    <input type="email" name="email" id="email">
    <button type="submit">Submit</button>
</form>

<div id="result"></div>

<script>
document.getElementById('ajaxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    })
    .catch(error => console.error('Error:', error));
});
</script>
```

### PHP Processing
```php
// process.php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    
    $errors = [];
    
    if (empty($name)) {
        $errors[] = 'Name is required';
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email format';
    }
    
    if (!empty($errors)) {
        echo json_encode(['success' => false, 'message' => implode('<br>', $errors)]);
    } else {
        // Process form data
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
```

## Best Learning Methods
- Build forms with different input types (text, select, checkbox, radio)
- Implement client-side and server-side validation
- Create multi-step forms with session management
- Practice secure file upload handling
- Implement AJAX form submission for better user experience
- Build a complete contact form with validation and email sending
- Reference: https://www.php.net/manual/en/tutorial.forms.php
