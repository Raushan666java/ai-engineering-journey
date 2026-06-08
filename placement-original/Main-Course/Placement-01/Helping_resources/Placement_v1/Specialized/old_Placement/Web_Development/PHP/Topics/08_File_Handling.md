# 8. File Handling in PHP

## Basic File Operations

### Reading Files
```php
// Read entire file into string
$content = file_get_contents('data.txt');

// Read file line by line
$lines = file('data.txt'); // Returns array of lines

// Read file with fopen/fread
$handle = fopen('data.txt', 'r');
if ($handle) {
    $content = fread($handle, filesize('data.txt'));
    fclose($handle);
}

// Read file line by line with fgets
$handle = fopen('data.txt', 'r');
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        echo $line;
    }
    fclose($handle);
}
```

### Writing Files
```php
// Write string to file (overwrites existing content)
$success = file_put_contents('output.txt', 'Hello World');

// Append to file
$success = file_put_contents('output.txt', 'New content', FILE_APPEND);

// Write with fopen/fwrite
$handle = fopen('output.txt', 'w'); // 'w' overwrites, 'a' appends
if ($handle) {
    fwrite($handle, 'Hello World');
    fclose($handle);
}
```

### File Modes
- `'r'` - Read only, starts at beginning
- `'r+'` - Read/write, starts at beginning
- `'w'` - Write only, truncates file to zero length
- `'w+'` - Read/write, truncates file to zero length
- `'a'` - Write only, starts at end of file
- `'a+'` - Read/write, starts at end of file
- `'x'` - Write only, creates new file, fails if file exists
- `'x+'` - Read/write, creates new file, fails if file exists
- `'c'` - Write only, creates if doesn't exist, doesn't truncate
- `'c+'` - Read/write, creates if doesn't exist, doesn't truncate

## File Information

### File Existence and Properties
```php
// Check if file exists
if (file_exists('data.txt')) {
    echo 'File exists';
}

// Get file size
$size = filesize('data.txt'); // in bytes

// Check if is file or directory
if (is_file('data.txt')) {
    echo 'Is a file';
}
if (is_dir('folder')) {
    echo 'Is a directory';
}

// Get file modification time
$modTime = filemtime('data.txt'); // Unix timestamp
echo 'Last modified: ' . date('Y-m-d H:i:s', $modTime);

// Check if file is readable/writable
if (is_readable('data.txt')) {
    echo 'File is readable';
}
if (is_writable('data.txt')) {
    echo 'File is writable';
}
```

### File Paths
```php
// Get absolute path
$path = realpath('data.txt');

// Get directory name from path
$dir = dirname('/path/to/file.txt'); // Returns '/path/to'

// Get filename from path
$filename = basename('/path/to/file.txt'); // Returns 'file.txt'
$filenameWithoutExt = basename('/path/to/file.txt', '.txt'); // Returns 'file'

// Get file extension
$ext = pathinfo('/path/to/file.txt', PATHINFO_EXTENSION); // Returns 'txt'
```

## Directory Operations

### Reading Directories
```php
// List files in directory
$files = scandir('folder');

// Filter out . and ..
$files = array_diff(scandir('folder'), ['.', '..']);

// Using directory functions
$dir = opendir('folder');
while (($file = readdir($dir)) !== false) {
    if ($file != '.' && $file != '..') {
        echo $file . '<br>';
    }
}
closedir($dir);

// Recursive directory listing
function listFiles($dir) {
    $files = [];
    $items = scandir($dir);
    
    foreach ($items as $item) {
        if ($item == '.' || $item == '..') continue;
        
        $path = $dir . '/' . $item;
        if (is_dir($path)) {
            $files[$item] = listFiles($path);
        } else {
            $files[] = $item;
        }
    }
    
    return $files;
}

$structure = listFiles('folder');
```

### Creating and Removing Directories
```php
// Create directory
if (!file_exists('new_folder')) {
    mkdir('new_folder');
}

// Create nested directories
mkdir('path/to/nested/folder', 0755, true);

// Remove directory
rmdir('empty_folder'); // Only works if directory is empty

// Remove directory with contents
function removeDirectory($dir) {
    if (!file_exists($dir)) return true;
    if (!is_dir($dir)) return unlink($dir);
    
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') continue;
        if (!removeDirectory($dir . DIRECTORY_SEPARATOR . $item)) return false;
    }
    
    return rmdir($dir);
}

removeDirectory('folder_to_delete');
```

## File Manipulation

### Copying and Moving Files
```php
// Copy file
copy('source.txt', 'destination.txt');

// Move/rename file
rename('old_name.txt', 'new_name.txt');

// Delete file
unlink('file_to_delete.txt');
```

### File Permissions
```php
// Change file permissions
chmod('file.txt', 0644); // Owner: read/write, Group: read, Others: read

// Get file permissions
$perms = fileperms('file.txt');
$perms = substr(sprintf('%o', $perms), -4); // Convert to octal
```

## CSV File Handling

### Reading CSV
```php
$handle = fopen('data.csv', 'r');
if ($handle) {
    while (($data = fgetcsv($handle, 1000, ',')) !== false) {
        // $data is an array containing the fields in the row
        echo $data[0] . ' - ' . $data[1] . '<br>';
    }
    fclose($handle);
}
```

### Writing CSV
```php
$handle = fopen('output.csv', 'w');

// Write header row
fputcsv($handle, ['Name', 'Email', 'Phone']);

// Write data rows
fputcsv($handle, ['John Doe', 'john@example.com', '555-1234']);
fputcsv($handle, ['Jane Smith', 'jane@example.com', '555-5678']);

fclose($handle);
```

## JSON File Handling

### Reading JSON
```php
$jsonString = file_get_contents('data.json');
$data = json_decode($jsonString, true); // true for associative array

// Access data
echo $data['name'];
foreach ($data['items'] as $item) {
    echo $item['title'];
}
```

### Writing JSON
```php
$data = [
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'items' => [
        ['id' => 1, 'title' => 'Item 1'],
        ['id' => 2, 'title' => 'Item 2']
    ]
];

$jsonString = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('output.json', $jsonString);
```

## File Uploads

### Basic File Upload
```php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // Check for errors
    if ($file['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($file['name']);
        
        // Move uploaded file
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            echo 'File uploaded successfully';
        } else {
            echo 'Error uploading file';
        }
    } else {
        echo 'Upload error: ' . $file['error'];
    }
}
```

### Secure File Upload
```php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // Validate file
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    $maxSize = 2 * 1024 * 1024; // 2MB
    
    if ($file['error'] === UPLOAD_ERR_OK) {
        // Check file type
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $fileType = $finfo->file($file['tmp_name']);
        
        if (!in_array($fileType, $allowedTypes)) {
            die('Invalid file type');
        }
        
        // Check file size
        if ($file['size'] > $maxSize) {
            die('File too large');
        }
        
        // Generate unique filename
        $uploadDir = 'uploads/';
        $filename = uniqid() . '-' . basename($file['name']);
        $uploadFile = $uploadDir . $filename;
        
        // Move uploaded file
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            echo 'File uploaded successfully';
        } else {
            echo 'Error uploading file';
        }
    }
}
```

## Best Learning Methods
- Practice reading and writing different file formats (text, CSV, JSON)
- Build a file manager application with upload, download, and delete features
- Create a log file system for tracking application events
- Implement a CSV import/export feature for a database application
- Work with file metadata and permissions
- Reference: https://www.php.net/manual/en/book.filesystem.php
