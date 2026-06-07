# Forms and User Input in PHP

Forms are a fundamental part of web applications, allowing users to submit data to the server. PHP provides several ways to handle form data and user input securely.

## HTML Forms Basics

### Form Structure

A basic HTML form consists of the `<form>` element containing various input elements:

```html
<form action="process.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <input type="submit" value="Submit">
</form>
```

### Form Attributes

- **action**: The URL where the form data will be sent
- **method**: The HTTP method to use (GET or POST)
- **enctype**: The encoding type (important for file uploads)

```html
<!-- Regular form -->
<form action="process.php" method="POST">
    <!-- form fields -->
</form>

<!-- Form with file uploads -->
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <!-- form fields including file inputs -->
</form>

<!-- Form that submits to the same page -->
<form method="POST">
    <!-- form fields -->
</form>
```

### Form Methods (GET vs POST)

#### GET Method

```html
<form action="search.php" method="GET">
    <input type="text" name="query">
    <input type="submit" value="Search">
</form>
```

- Data is appended to the URL as query parameters
- Limited to about 2000 characters
- Visible in the browser's address bar
- Can be bookmarked
- Should be used for non-sensitive data and idempotent operations (e.g., searches)

#### POST Method

```html
<form action="register.php" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="Register">
</form>
```

- Data is sent in the HTTP request body
- No size limitations (in theory)
- Not visible in the URL
- Cannot be bookmarked
- Should be used for sensitive data and operations that change server state

## Accessing Form Data

### $_GET, $_POST, $_REQUEST

PHP provides superglobal arrays to access form data:

```php
<?php
// Accessing GET data
// URL: search.php?query=php&category=tutorials
$searchQuery = $_GET['query'];     // "php"
$category = $_GET['category'];     // "tutorials"

// Checking if GET parameter exists
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1; // Default value
}

// Accessing POST data
// From a form submitted with method="POST"
$username = $_POST['username'];
$password = $_POST['password'];

// $_REQUEST contains data from $_GET, $_POST, and $_COOKIE
$value = $_REQUEST['field'];

// Safer way to access form data with default values
$page = $_GET['page'] ?? 1;
$sortBy = $_POST['sort'] ?? 'date';
?>
```

### Form Arrays

You can group related form fields using array notation in the field names:

```html
<form method="POST">
    <!-- Simple array -->
    <input type="checkbox" name="interests[]" value="sports"> Sports
    <input type="checkbox" name="interests[]" value="music"> Music
    <input type="checkbox" name="interests[]" value="reading"> Reading
    
    <!-- Associative array -->
    <input type="text" name="address[street]" placeholder="Street">
    <input type="text" name="address[city]" placeholder="City">
    <input type="text" name="address[zip]" placeholder="ZIP">
    
    <!-- Multidimensional array -->
    <input type="text" name="contacts[0][name]" placeholder="Contact 1 Name">
    <input type="text" name="contacts[0][phone]" placeholder="Contact 1 Phone">
    <input type="text" name="contacts[1][name]" placeholder="Contact 2 Name">
    <input type="text" name="contacts[1][phone]" placeholder="Contact 2 Phone">
    
    <input type="submit" value="Submit">
</form>
```

Accessing these arrays in PHP:

```php
<?php
// Simple array
$interests = $_POST['interests']; // Array of selected interests

// Associative array
$street = $_POST['address']['street'];
$city = $_POST['address']['city'];
$zip = $_POST['address']['zip'];

// Multidimensional array
$contact1Name = $_POST['contacts'][0]['name'];
$contact1Phone = $_POST['contacts'][0]['phone'];
$contact2Name = $_POST['contacts'][1]['name'];
$contact2Phone = $_POST['contacts'][1]['phone'];

// Loop through all contacts
foreach ($_POST['contacts'] as $contact) {
    echo "Name: " . $contact['name'] . ", Phone: " . $contact['phone'] . "<br>";
}
?>
```

## Input Validation and Sanitization

### Basic Validation

```php
<?php
// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];
    
    // Required field validation
    if (empty($_POST['name'])) {
        $errors[] = "Name is required";
    }
    
    // Email validation
    if (empty($_POST['email'])) {
        $errors[] = "Email is required";
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    // Password validation
    if (strlen($_POST['password']) < 8) {
        $errors[] = "Password must be at least 8 characters";
    }
    
    // Display errors or process form
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    } else {
        // Process form data
        echo "Form submitted successfully!";
    }
}
?>
```

### Filter Functions

PHP provides built-in filter functions for validating and sanitizing data:

```php
<?php
// Validate email
$email = "user@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email";
} else {
    echo "Invalid email";
}

// Validate integer
$age = "25";
if (filter_var($age, FILTER_VALIDATE_INT)) {
    echo "Valid integer";
} else {
    echo "Invalid integer";
}

// Validate integer with options
$age = "25";
$options = [
    "options" => [
        "min_range" => 18,
        "max_range" => 120
    ]
];
if (filter_var($age, FILTER_VALIDATE_INT, $options)) {
    echo "Valid age between 18 and 120";
} else {
    echo "Invalid age";
}

// Validate URL
$url = "https://www.example.com";
if (filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Valid URL";
} else {
    echo "Invalid URL";
}

// Sanitize email
$email = "user@example.com<script>";
$sanitizedEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
echo $sanitizedEmail; // user@example.com

// Sanitize string
$string = "<script>alert('XSS')</script>";
$sanitizedString = filter_var($string, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
echo $sanitizedString; // &lt;script&gt;alert(&#039;XSS&#039;)&lt;/script&gt;

// Using filter_input for form data
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if ($email) {
    echo "Valid email: $email";
} else {
    echo "Invalid email";
}

// Sanitize and validate in one step
$age = filter_input(
    INPUT_POST,
    'age',
    FILTER_VALIDATE_INT,
    [
        "options" => ["min_range" => 18, "max_range" => 120],
        "flags" => FILTER_NULL_ON_FAILURE
    ]
);
?>
```

### Custom Validation

```php
<?php
function validateUsername($username) {
    // Check length
    if (strlen($username) < 3 || strlen($username) > 20) {
        return false;
    }
    
    // Check if contains only allowed characters
    if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
        return false;
    }
    
    return true;
}

function validatePassword($password) {
    // At least 8 characters
    if (strlen($password) < 8) {
        return false;
    }
    
    // Contains at least one uppercase letter
    if (!preg_match('/[A-Z]/', $password)) {
        return false;
    }
    
    // Contains at least one lowercase letter
    if (!preg_match('/[a-z]/', $password)) {
        return false;
    }
    
    // Contains at least one number
    if (!preg_match('/[0-9]/', $password)) {
        return false;
    }
    
    return true;
}

// Usage
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$errors = [];

if (!validateUsername($username)) {
    $errors[] = "Username must be 3-20 characters and contain only letters, numbers, and underscores";
}

if (!validatePassword($password)) {
    $errors[] = "Password must be at least 8 characters and contain uppercase, lowercase, and numbers";
}

if (empty($errors)) {
    // Process form
} else {
    // Display errors
    foreach ($errors as $error) {
        echo $error . "<br>";
    }
}
?>
```

## Security Considerations

### Cross-Site Scripting (XSS) Prevention

XSS attacks occur when malicious scripts are injected into web pages viewed by other users.

```php
<?php
// UNSAFE - vulnerable to XSS
$name = $_POST['name'];
echo "Hello, $name"; // If $name contains <script>alert('XSS')</script>, it will execute

// SAFE - escape output
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
echo "Hello, $name"; // Script tags are converted to &lt;script&gt;

// Alternative functions
$name = htmlentities($_POST['name'], ENT_QUOTES, 'UTF-8');
$name = strip_tags($_POST['name']); // Removes all HTML and PHP tags

// Context-specific escaping
// For HTML attributes
$value = htmlspecialchars($_POST['value'], ENT_QUOTES, 'UTF-8');
echo "<input value=\"$value\">";

// For JavaScript
$data = json_encode($_POST['data']);
echo "<script>var data = $data;</script>";

// For URLs
$url = filter_var($_POST['url'], FILTER_SANITIZE_URL);
echo "<a href=\"$url\">Link</a>";
?>
```

### Cross-Site Request Forgery (CSRF) Protection

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
function csrf_field() {
    return '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
}

// Validate token on form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }
    
    // Process form submission
}
?>

<!-- In HTML form -->
<form method="POST">
    <?php echo csrf_field(); ?>
    <!-- Other form fields -->
    <input type="submit" value="Submit">
</form>
```

## File Uploads

### HTML Form Setup

```html
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <label for="file">Select file:</label>
    <input type="file" id="file" name="file">
    
    <!-- Multiple file upload -->
    <label for="files">Select multiple files:</label>
    <input type="file" id="files" name="files[]" multiple>
    
    <input type="submit" value="Upload">
</form>
```

### Processing Uploads

```php
<?php
// Single file upload
if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // File properties
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];
    
    // Check for errors
    if ($fileError === UPLOAD_ERR_OK) {
        // Generate unique filename
        $fileNewName = uniqid('', true) . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
        
        // Destination path
        $fileDestination = 'uploads/' . $fileNewName;
        
        // Move uploaded file
        if (move_uploaded_file($fileTmpName, $fileDestination)) {
            echo "File uploaded successfully";
        } else {
            echo "Error moving uploaded file";
        }
    } else {
        // Handle upload errors
        switch ($fileError) {
            case UPLOAD_ERR_INI_SIZE:
                echo "The uploaded file exceeds the upload_max_filesize directive in php.ini";
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo "The uploaded file exceeds the MAX_FILE_SIZE directive in the HTML form";
                break;
            case UPLOAD_ERR_PARTIAL:
                echo "The uploaded file was only partially uploaded";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "No file was uploaded";
                break;
            case UPLOAD_ERR_NO_TMP_DIR:
                echo "Missing a temporary folder";
                break;
            case UPLOAD_ERR_CANT_WRITE:
                echo "Failed to write file to disk";
                break;
            case UPLOAD_ERR_EXTENSION:
                echo "A PHP extension stopped the file upload";
                break;
            default:
                echo "Unknown upload error";
                break;
        }
    }
}

// Multiple file upload
if (isset($_FILES['files'])) {
    $files = $_FILES['files'];
    $fileCount = count($files['name']);
    
    for ($i = 0; $i < $fileCount; $i++) {
        $fileName = $files['name'][$i];
        $fileTmpName = $files['tmp_name'][$i];
        $fileSize = $files['size'][$i];
        $fileError = $files['error'][$i];
        $fileType = $files['type'][$i];
        
        // Process each file (similar to single file upload)
        if ($fileError === UPLOAD_ERR_OK) {
            $fileNewName = uniqid('', true) . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
            $fileDestination = 'uploads/' . $fileNewName;
            
            if (move_uploaded_file($fileTmpName, $fileDestination)) {
                echo "File $fileName uploaded successfully<br>";
            } else {
                echo "Error moving uploaded file $fileName<br>";
            }
        }
    }
}
?>
```

### Security Considerations

```php
<?php
function isValidFile($file) {
    // Check file size (e.g., max 2MB)
    $maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if ($file['size'] > $maxSize) {
        return false;
    }
    
    // Check file type
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    
    // Get MIME type using finfo (more reliable than $_FILES['type'])
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $fileType = $finfo->file($file['tmp_name']);
    
    if (!in_array($fileType, $allowedTypes)) {
        return false;
    }
    
    // Additional checks (e.g., image dimensions for images)
    if (strpos($fileType, 'image/') === 0) {
        $imageInfo = getimagesize($file['tmp_name']);
        if ($imageInfo === false) {
            return false; // Not a valid image
        }
        
        // Check dimensions if needed
        list($width, $height) = $imageInfo;
        if ($width > 2000 || $height > 2000) {
            return false; // Image too large
        }
    }
    
    return true;
}

// Usage
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    if (isValidFile($_FILES['file'])) {
        // Safe to process the file
        $fileDestination = 'uploads/' . uniqid('', true) . '.' . pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
        move_uploaded_file($_FILES['file']['tmp_name'], $fileDestination);
        echo "File uploaded successfully";
    } else {
        echo "Invalid file";
    }
}
?>
```

## Handling Multiple Form Pages

### Using Sessions

```php
<?php
session_start();

// Step 1: Personal Information
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['step1'])) {
    // Validate and store in session
    $_SESSION['form_data']['name'] = $_POST['name'];
    $_SESSION['form_data']['email'] = $_POST['email'];
    
    // Redirect to step 2
    header('Location: form_step2.php');
    exit;
}

// Step 2: Address Information
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['step2'])) {
    // Validate and store in session
    $_SESSION['form_data']['address'] = $_POST['address'];
    $_SESSION['form_data']['city'] = $_POST['city'];
    $_SESSION['form_data']['zip'] = $_POST['zip'];
    
    // Redirect to step 3
    header('Location: form_step3.php');
    exit;
}

// Step 3: Confirmation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['step3'])) {
    // Process complete form data
    $formData = $_SESSION['form_data'];
    
    // Save to database, send email, etc.
    
    // Clear form data from session
    unset($_SESSION['form_data']);
    
    // Redirect to thank you page
    header('Location: thank_you.php');
    exit;
}
?>

<!-- Step 1 Form -->
<form method="POST">
    <h2>Step 1: Personal Information</h2>
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="submit" name="step1" value="Next">
</form>
```

### Using Hidden Fields

```php
<?php
// Step 2 Form
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['step1'])) {
    // Validate step 1 data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
?>
    <form method="POST" action="form_step3.php">
        <h2>Step 2: Address Information</h2>
        <input type="text" name="address" placeholder="Address" required>
        <input type="text" name="city" placeholder="City" required>
        <input type="text" name="zip" placeholder="ZIP" required>
        
        <!-- Hidden fields to carry over step 1 data -->
        <input type="hidden" name="name" value="<?php echo $name; ?>">
        <input type="hidden" name="email" value="<?php echo $email; ?>">
        
        <input type="submit" name="step2" value="Next">
    </form>
<?php
}
?>
```

## AJAX Form Handling

### Basic AJAX Form

```html
<!DOCTYPE html>
<html>
<head>
    <title>AJAX Form</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <form id="ajaxForm">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="submit" value="Submit">
    </form>
    
    <div id="response"></div>
    
    <script>
        $(document).ready(function() {
            $('#ajaxForm').on('submit', function(e) {
                e.preventDefault();
                
                $.ajax({
                    type: 'POST',
                    url: 'process.php',
                    data: $(this).serialize(),
                    dataType: 'json',
                    success: function(response) {
                        if (response.success) {
                            $('#response').html('<div class="success">' + response.message + '</div>');
                            $('#ajaxForm')[0].reset();
                        } else {
                            $('#response').html('<div class="error">' + response.message + '</div>');
                        }
                    },
                    error: function() {
                        $('#response').html('<div class="error">An error occurred</div>');
                    }
                });
            });
        });
    </script>
</body>
</html>
```

### PHP Handler for AJAX Form

```php
<?php
// process.php
header('Content-Type: application/json');

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate form data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (!$email) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($errors)) {
        // Process form data
        // ...
        
        $response['success'] = true;
        $response['message'] = "Form submitted successfully!";
    } else {
        $response['message'] = implode("<br>", $errors);
    }
} else {
    $response['message'] = "Invalid request method";
}

echo json_encode($response);
?>
```

### Using Fetch API (Modern JavaScript)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Fetch API Form</title>
</head>
<body>
    <form id="fetchForm">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="submit" value="Submit">
    </form>
    
    <div id="response"></div>
    
    <script>
        document.getElementById('fetchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            fetch('process.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const responseDiv = document.getElementById('response');
                
                if (data.success) {
                    responseDiv.innerHTML = `<div class="success">${data.message}</div>`;
                    document.getElementById('fetchForm').reset();
                } else {
                    responseDiv.innerHTML = `<div class="error">${data.message}</div>`;
                }
            })
            .catch(error => {
                document.getElementById('response').innerHTML = '<div class="error">An error occurred</div>';
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>
```

## Best Practices

1. **Always validate and sanitize user input**: Never trust user-provided data.
2. **Use appropriate HTTP methods**: GET for retrieving data, POST for submitting data.
3. **Implement CSRF protection**: For all forms that change server state.
4. **Set proper enctype for file uploads**: Use `enctype="multipart/form-data"`.
5. **Validate file uploads thoroughly**: Check file type, size, and content.
6. **Use prepared statements for database operations**: To prevent SQL injection.
7. **Provide clear error messages**: Help users understand what went wrong.
8. **Preserve form data on validation errors**: Don't make users re-enter everything.
9. **Use HTTPS for forms with sensitive data**: Protect data in transit.
10. **Implement rate limiting**: Prevent form spam and brute force attacks.
11. **Consider accessibility**: Ensure forms are usable by everyone.
12. **Test forms thoroughly**: Check all validation rules and edge cases.