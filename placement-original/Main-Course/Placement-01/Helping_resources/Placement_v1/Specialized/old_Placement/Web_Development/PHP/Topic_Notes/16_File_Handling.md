# PHP File Handling

File handling is an essential aspect of PHP programming, allowing you to read from and write to files on the server.

## Basic File Operations

### Reading Files

```php
<?php
// Read entire file into a string
$content = file_get_contents('example.txt');
echo $content;

// Read file line by line
$lines = file('example.txt');
foreach ($lines as $lineNumber => $line) {
    echo "Line #" . ($lineNumber + 1) . ": " . $line;
}

// Read file using fopen
$handle = fopen('example.txt', 'r');
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        echo $line;
    }
    fclose($handle);
}

// Reading a specific number of bytes
$handle = fopen('example.txt', 'r');
$content = fread($handle, 1024); // Read 1024 bytes
fclose($handle);

// Reading one character at a time
$handle = fopen('example.txt', 'r');
while (($char = fgetc($handle)) !== false) {
    echo $char;
}
fclose($handle);

// Reading CSV files
$handle = fopen('data.csv', 'r');
while (($data = fgetcsv($handle)) !== false) {
    print_r($data); // Each row as an array
}
fclose($handle);
?>
```

### Writing Files

```php
<?php
// Write string to file (overwrites existing content)
file_put_contents('output.txt', 'Hello, World!');

// Append to file
file_put_contents('output.txt', 'More content', FILE_APPEND);

// Write with fopen
$handle = fopen('output.txt', 'w'); // 'w' for write, overwrites existing content
if ($handle) {
    fwrite($handle, 'Hello, World!');
    fclose($handle);
}

// Append with fopen
$handle = fopen('output.txt', 'a'); // 'a' for append
if ($handle) {
    fwrite($handle, 'More content');
    fclose($handle);
}

// Writing CSV files
$data = [
    ['Name', 'Email', 'Phone'],
    ['John Doe', 'john@example.com', '123-456-7890'],
    ['Jane Smith', 'jane@example.com', '098-765-4321']
];

$handle = fopen('data.csv', 'w');
foreach ($data as $row) {
    fputcsv($handle, $row);
}
fclose($handle);
?>
```

### File Modes

When using `fopen()`, you need to specify a mode:

| Mode | Description |
|------|-------------|
| 'r'  | Read only. Starts at beginning of file |
| 'r+' | Read/write. Starts at beginning of file |
| 'w'  | Write only. Opens and truncates file; creates if doesn't exist |
| 'w+' | Read/write. Opens and truncates file; creates if doesn't exist |
| 'a'  | Write only. Opens and writes to end of file; creates if doesn't exist |
| 'a+' | Read/write. Preserves file content by writing to end of file |
| 'x'  | Write only. Creates a new file; returns FALSE if file exists |
| 'x+' | Read/write. Creates a new file; returns FALSE if file exists |
| 'c'  | Write only. Creates if doesn't exist; doesn't truncate |
| 'c+' | Read/write. Creates if doesn't exist; doesn't truncate |

```php
<?php
// Example with different modes
$handle = fopen('test.txt', 'r+'); // Open for reading and writing
fwrite($handle, 'Overwrite beginning');
fclose($handle);

$handle = fopen('test.txt', 'a+'); // Open for reading and appending
fwrite($handle, 'Add to end');
rewind($handle); // Move pointer to beginning for reading
$content = fread($handle, filesize('test.txt'));
fclose($handle);
?>
```

## File Information

### File Existence and Properties

```php
<?php
// Check if file exists
if (file_exists('example.txt')) {
    echo 'File exists';
}

// Check if path is a file
if (is_file('example.txt')) {
    echo 'Path is a file';
}

// Check if file is readable
if (is_readable('example.txt')) {
    echo 'File is readable';
}

// Check if file is writable
if (is_writable('example.txt')) {
    echo 'File is writable';
}

// Check if file is executable
if (is_executable('script.php')) {
    echo 'File is executable';
}

// Get file size
$size = filesize('example.txt'); // Size in bytes
echo "File size: $size bytes";

// Get file type
$type = filetype('example.txt'); // Returns 'file' or 'dir'
echo "Type: $type";

// Get file modification time
$modTime = filemtime('example.txt'); // Unix timestamp
echo "Last modified: " . date('Y-m-d H:i:s', $modTime);

// Get file access time
$accessTime = fileatime('example.txt');
echo "Last accessed: " . date('Y-m-d H:i:s', $accessTime);

// Get file information
$info = stat('example.txt');
print_r($info); // Array with detailed file information
?>
```

### File Paths

```php
<?php
// Get absolute path
$absolutePath = realpath('example.txt');
echo $absolutePath;

// Get directory name from path
$dir = dirname('/path/to/file.txt');
echo $dir; // '/path/to'

// Get filename from path
$filename = basename('/path/to/file.txt');
echo $filename; // 'file.txt'

// Get filename without extension
$filenameWithoutExt = basename('/path/to/file.txt', '.txt');
echo $filenameWithoutExt; // 'file'

// Get file extension
$info = pathinfo('/path/to/file.txt');
echo $info['extension']; // 'txt'

// Alternative way to get extension
$extension = pathinfo('/path/to/file.txt', PATHINFO_EXTENSION);
echo $extension; // 'txt'

// Check if path is absolute
function isAbsolutePath($path) {
    if (PHP_OS === 'WINNT') {
        return preg_match('/^[A-Za-z]:/', $path) || preg_match('/^\/\//', $path);
    }
    return $path[0] === '/';
}

// Join path components
$path = implode(DIRECTORY_SEPARATOR, ['path', 'to', 'file.txt']);
echo $path; // 'path/to/file.txt' (on Unix-like systems)
?>
```

## Directory Operations

### Reading Directories

```php
<?php
// Open directory
$dir = '/path/to/directory';
if (is_dir($dir)) {
    if ($handle = opendir($dir)) {
        // Read directory entries
        while (($entry = readdir($handle)) !== false) {
            if ($entry != "." && $entry != "..") {
                echo "Entry: $entry<br>";
            }
        }
        closedir($handle);
    }
}

// Using scandir()
$entries = scandir($dir);
foreach ($entries as $entry) {
    if ($entry != "." && $entry != "..") {
        echo "Entry: $entry<br>";
    }
}

// Using glob() to filter files
$textFiles = glob("$dir/*.txt");
foreach ($textFiles as $file) {
    echo "Text file: $file<br>";
}

// Using DirectoryIterator (OOP approach)
$iterator = new DirectoryIterator($dir);
foreach ($iterator as $fileinfo) {
    if (!$fileinfo->isDot()) {
        echo $fileinfo->getFilename() . "<br>";
    }
}

// Using RecursiveDirectoryIterator to traverse subdirectories
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS)
);
foreach ($iterator as $fileinfo) {
    echo $fileinfo->getPathname() . "<br>";
}
?>
```

### Creating and Removing Directories

```php
<?php
// Create directory
$dir = 'new_directory';
if (!file_exists($dir)) {
    if (mkdir($dir)) {
        echo "Directory created successfully";
    } else {
        echo "Failed to create directory";
    }
}

// Create nested directories
$nestedDir = 'parent/child/grandchild';
if (!file_exists($nestedDir)) {
    if (mkdir($nestedDir, 0755, true)) { // recursive parameter set to true
        echo "Nested directories created successfully";
    } else {
        echo "Failed to create nested directories";
    }
}

// Remove empty directory
if (is_dir($dir)) {
    if (rmdir($dir)) {
        echo "Directory removed successfully";
    } else {
        echo "Failed to remove directory";
    }
}

// Remove directory with contents (recursive)
function removeDirectory($dir) {
    if (!file_exists($dir)) {
        return true;
    }

    if (!is_dir($dir)) {
        return unlink($dir);
    }

    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }

        if (!removeDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }
    }

    return rmdir($dir);
}

// Usage
if (removeDirectory('directory_to_remove')) {
    echo "Directory and its contents removed successfully";
}
?>
```

## File Manipulation

### Copying and Moving Files

```php
<?php
// Copy file
if (copy('source.txt', 'destination.txt')) {
    echo "File copied successfully";
} else {
    echo "Failed to copy file";
}

// Move/rename file
if (rename('old_name.txt', 'new_name.txt')) {
    echo "File renamed successfully";
} else {
    echo "Failed to rename file";
}

// Move file to different directory
if (rename('file.txt', 'new_directory/file.txt')) {
    echo "File moved successfully";
} else {
    echo "Failed to move file";
}

// Delete file
if (unlink('file_to_delete.txt')) {
    echo "File deleted successfully";
} else {
    echo "Failed to delete file";
}
?>
```

### File Permissions

```php
<?php
// Get file permissions
$perms = fileperms('example.txt');
echo substr(sprintf('%o', $perms), -4); // e.g., '0644'

// Change file permissions
if (chmod('example.txt', 0644)) { // 0644 = -rw-r--r--
    echo "Permissions changed successfully";
} else {
    echo "Failed to change permissions";
}

// Change file owner (requires appropriate privileges)
if (function_exists('chown')) {
    if (chown('example.txt', 'newowner')) {
        echo "Owner changed successfully";
    }
}

// Change file group (requires appropriate privileges)
if (function_exists('chgrp')) {
    if (chgrp('example.txt', 'newgroup')) {
        echo "Group changed successfully";
    }
}

// Human-readable permissions
function getFilePermissions($file) {
    $perms = fileperms($file);
    
    switch ($perms & 0xF000) {
        case 0xC000: // Socket
            $info = 's';
            break;
        case 0xA000: // Symbolic Link
            $info = 'l';
            break;
        case 0x8000: // Regular
            $info = '-';
            break;
        case 0x6000: // Block special
            $info = 'b';
            break;
        case 0x4000: // Directory
            $info = 'd';
            break;
        case 0x2000: // Character special
            $info = 'c';
            break;
        case 0x1000: // FIFO pipe
            $info = 'p';
            break;
        default: // Unknown
            $info = 'u';
    }
    
    // Owner
    $info .= (($perms & 0x0100) ? 'r' : '-');
    $info .= (($perms & 0x0080) ? 'w' : '-');
    $info .= (($perms & 0x0040) ?
                (($perms & 0x0800) ? 's' : 'x' ) :
                (($perms & 0x0800) ? 'S' : '-'));
    
    // Group
    $info .= (($perms & 0x0020) ? 'r' : '-');
    $info .= (($perms & 0x0010) ? 'w' : '-');
    $info .= (($perms & 0x0008) ?
                (($perms & 0x0400) ? 's' : 'x' ) :
                (($perms & 0x0400) ? 'S' : '-'));
    
    // World
    $info .= (($perms & 0x0004) ? 'r' : '-');
    $info .= (($perms & 0x0002) ? 'w' : '-');
    $info .= (($perms & 0x0001) ?
                (($perms & 0x0200) ? 't' : 'x' ) :
                (($perms & 0x0200) ? 'T' : '-'));
    
    return $info;
}

echo getFilePermissions('example.txt'); // e.g., '-rw-r--r--'
?>
```

## CSV File Handling

```php
<?php
// Reading CSV
$handle = fopen('data.csv', 'r');
if ($handle) {
    $header = fgetcsv($handle); // Get header row
    $data = [];
    
    while (($row = fgetcsv($handle)) !== false) {
        // Create associative array using header as keys
        $data[] = array_combine($header, $row);
    }
    
    fclose($handle);
    print_r($data);
}

// Writing CSV
$data = [
    ['Name', 'Email', 'Phone'],
    ['John Doe', 'john@example.com', '123-456-7890'],
    ['Jane Smith', 'jane@example.com', '098-765-4321']
];

$handle = fopen('data.csv', 'w');
if ($handle) {
    foreach ($data as $row) {
        fputcsv($handle, $row);
    }
    fclose($handle);
    echo "CSV file written successfully";
}

// Custom CSV handling
function parseCSV($file, $delimiter = ',', $hasHeader = true) {
    $handle = fopen($file, 'r');
    if (!$handle) return false;
    
    $header = $hasHeader ? fgetcsv($handle, 0, $delimiter) : null;
    $data = [];
    
    while (($row = fgetcsv($handle, 0, $delimiter)) !== false) {
        if ($hasHeader) {
            $data[] = array_combine($header, $row);
        } else {
            $data[] = $row;
        }
    }
    
    fclose($handle);
    return $data;
}

$csvData = parseCSV('data.csv');
print_r($csvData);
?>
```

## JSON File Handling

```php
<?php
// Reading JSON from file
$jsonString = file_get_contents('data.json');
$data = json_decode($jsonString, true); // true to get associative array
print_r($data);

// Writing JSON to file
$data = [
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'skills' => ['PHP', 'MySQL', 'JavaScript']
];

$jsonString = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('output.json', $jsonString);

// Check for JSON errors
function saveJSON($data, $file) {
    $jsonString = json_encode($data, JSON_PRETTY_PRINT);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return "JSON encoding error: " . json_last_error_msg();
    }
    
    if (file_put_contents($file, $jsonString) === false) {
        return "Failed to write to file";
    }
    
    return true;
}

$result = saveJSON($data, 'output.json');
if ($result === true) {
    echo "JSON saved successfully";
} else {
    echo $result; // Error message
}
?>
```

## File Uploads

### Basic File Upload

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
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
        $fileNewName = uniqid('', true) . '_' . $fileName;
        
        // Destination path
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        
        $destination = $uploadDir . $fileNewName;
        
        // Move uploaded file
        if (move_uploaded_file($fileTmpName, $destination)) {
            echo "File uploaded successfully to $destination";
        } else {
            echo "Error moving uploaded file";
        }
    } else {
        // Handle upload errors
        $errorMessages = [
            UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
            UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive in the HTML form',
            UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
            UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload'
        ];
        
        echo "Upload error: " . ($errorMessages[$fileError] ?? 'Unknown error');
    }
}
?>

<!-- HTML Form -->
<form action="" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>
```

### Secure File Upload

```php
<?php
function secureUpload($file, $allowedTypes = [], $maxSize = 2097152) {
    // Check if file was uploaded without errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $errorMessages = [
            UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
            UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive in the HTML form',
            UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
            UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload'
        ];
        
        return ['success' => false, 'error' => $errorMessages[$file['error']] ?? 'Unknown error'];
    }
    
    // Check file size
    if ($file['size'] > $maxSize) {
        return ['success' => false, 'error' => 'File size exceeds the maximum allowed size'];
    }
    
    // Check file type using finfo (more reliable than $_FILES['type'])
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $fileType = $finfo->file($file['tmp_name']);
    
    if (!empty($allowedTypes) && !in_array($fileType, $allowedTypes)) {
        return ['success' => false, 'error' => 'File type not allowed'];
    }
    
    // Generate safe filename
    $pathInfo = pathinfo($file['name']);
    $extension = $pathInfo['extension'] ?? '';
    $safeFilename = uniqid('', true) . ($extension ? '.' . $extension : '');
    
    // Destination directory
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
        if (!mkdir($uploadDir, 0755, true)) {
            return ['success' => false, 'error' => 'Failed to create upload directory'];
        }
    }
    
    $destination = $uploadDir . $safeFilename;
    
    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        return ['success' => false, 'error' => 'Failed to move uploaded file'];
    }
    
    return [
        'success' => true,
        'filename' => $safeFilename,
        'path' => $destination,
        'type' => $fileType,
        'size' => $file['size']
    ];
}

// Usage
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    $maxSize = 5 * 1024 * 1024; // 5MB
    
    $result = secureUpload($_FILES['file'], $allowedTypes, $maxSize);
    
    if ($result['success']) {
        echo "File uploaded successfully:<br>";
        echo "Path: " . $result['path'] . "<br>";
        echo "Type: " . $result['type'] . "<br>";
        echo "Size: " . $result['size'] . " bytes";
    } else {
        echo "Error: " . $result['error'];
    }
}
?>

<!-- HTML Form -->
<form action="" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>
```

## Best Practices

1. **Always check for errors**: File operations can fail for many reasons.
2. **Use appropriate file permissions**: Don't make files more accessible than necessary.
3. **Validate file uploads**: Check file type, size, and content.
4. **Close file handles**: Always close file handles after use.
5. **Use absolute paths**: When possible, use absolute paths to avoid path-related issues.
6. **Handle large files properly**: For large files, process them in chunks.
7. **Secure file operations**: Be careful with user-supplied filenames and paths.
8. **Use appropriate functions**: Choose the right function for the task (e.g., `file_get_contents()` vs. `fopen()`).
9. **Check disk space**: Ensure there's enough disk space before writing large files.
10. **Use proper error handling**: Implement try-catch blocks for file operations in production code.