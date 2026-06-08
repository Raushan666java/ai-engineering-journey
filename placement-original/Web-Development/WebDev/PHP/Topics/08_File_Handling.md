# 08. File Handling

## Reading and writing files

```php
<?php
// Read whole file
$data = file_get_contents('notes.txt');

// Write (overwrite)
file_put_contents('log.txt', "New line\n", FILE_APPEND);

// Open and stream
$fh = fopen('bigfile.csv', 'r');
while (($line = fgets($fh)) !== false) {
    // process line
}
fclose($fh);
?>
```

## Binary safe operations and locking

```php
<?php
$fp = fopen('data.bin', 'rb');
flock($fp, LOCK_SH); // shared lock
$data = fread($fp, 8192);
flock($fp, LOCK_UN);
fclose($fp);
?>
```

## Upload handling security (validate mime and extension)

```php
<?php
$f = $_FILES['doc'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $f['tmp_name']);
if (!in_array($mime, ['application/pdf', 'image/png'])) {
    throw new Exception('Invalid file type');
}
?>
```

## Directories

```php
<?php
if (!is_dir('uploads')) mkdir('uploads', 0755, true);
$files = scandir('uploads');
?>
```

---

**Practice:** Write a safe file-saver function that stores uploads with unique names and validates mime types.
