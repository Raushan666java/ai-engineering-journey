# File Storage in Laravel

Laravel provides a powerful filesystem abstraction thanks to the Flysystem PHP package. This abstraction allows you to easily work with local filesystems, Amazon S3, and other storage systems using the same API.

## Configuration

File storage configuration is stored in `config/filesystems.php`:

```php
<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    */
    'default' => env('FILESYSTEM_DISK', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    */
    'disks' => [
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
            'throw' => false,
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
            'throw' => false,
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
            'throw' => false,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    */
    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],
];
```

## Obtaining Disk Instances

You can interact with your configured disks using the `Storage` facade:

```php
use Illuminate\Support\Facades\Storage;

// Use the default disk
$disk = Storage::disk();

// Use a specific disk
$disk = Storage::disk('s3');
```

## Basic File Operations

### Retrieving Files

```php
// Get the contents of a file
$contents = Storage::get('file.jpg');

// Check if a file exists
if (Storage::exists('file.jpg')) {
    // ...
}

// Check if a file is missing
if (Storage::missing('file.jpg')) {
    // ...
}

// Get a file's URL (for public disks)
$url = Storage::url('file.jpg');

// Get a file's temporary URL (for S3)
$url = Storage::temporaryUrl(
    'file.jpg', now()->addMinutes(5)
);

// Get a file's path
$path = Storage::path('file.jpg');

// Get a file's size
$size = Storage::size('file.jpg');

// Get a file's last modification time
$time = Storage::lastModified('file.jpg');

// Get all files in a directory
$files = Storage::files('directory');

// Get all files in a directory and subdirectories
$files = Storage::allFiles('directory');
```

### Storing Files

```php
// Store a file
Storage::put('file.jpg', $contents);

// Store a file with public visibility
Storage::put('file.jpg', $contents, 'public');

// Store a file using a stream
Storage::put('file.jpg', $stream);

// Store a file from another location
Storage::putFile('photos', new File('/path/to/photo.jpg'));

// Store a file with a specific name
Storage::putFileAs('photos', new File('/path/to/photo.jpg'), 'custom-name.jpg');

// Store a file from an uploaded file
Storage::putFile('photos', $request->file('photo'));

// Store a file from an uploaded file with a specific name
Storage::putFileAs('photos', $request->file('photo'), 'custom-name.jpg');

// Append to a file
Storage::append('file.log', 'Append this to the end of the file');

// Prepend to a file
Storage::prepend('file.log', 'Prepend this to the beginning of the file');
```

### Downloading Files

```php
return Storage::download('file.jpg');

return Storage::download('file.jpg', 'custom-name.jpg');

return Storage::download('file.jpg', 'custom-name.jpg', [
    'Content-Type' => 'application/octet-stream',
]);
```

### File URLs

```php
// Get a file's URL
$url = Storage::url('file.jpg');

// Get a temporary URL (for S3)
$url = Storage::temporaryUrl(
    'file.jpg', now()->addMinutes(5)
);

// Get a temporary URL with custom options (for S3)
$url = Storage::temporaryUrl(
    'file.jpg',
    now()->addMinutes(5),
    [
        'ResponseContentType' => 'application/octet-stream',
        'ResponseContentDisposition' => 'attachment; filename=file.jpg',
    ]
);
```

### File Metadata

```php
// Get a file's size
$size = Storage::size('file.jpg');

// Get a file's last modification time
$time = Storage::lastModified('file.jpg');

// Get a file's MIME type
$mime = Storage::mimeType('file.jpg');
```

### Deleting Files

```php
// Delete a file
Storage::delete('file.jpg');

// Delete multiple files
Storage::delete(['file1.jpg', 'file2.jpg']);
```

### Copying & Moving Files

```php
// Copy a file
Storage::copy('old/file.jpg', 'new/file.jpg');

// Move a file
Storage::move('old/file.jpg', 'new/file.jpg');
```

## Directory Operations

```php
// Get all files in a directory
$files = Storage::files('directory');

// Get all files in a directory and subdirectories
$files = Storage::allFiles('directory');

// Get all directories in a directory
$directories = Storage::directories('directory');

// Get all directories in a directory and subdirectories
$directories = Storage::allDirectories('directory');

// Create a directory
Storage::makeDirectory('directory');

// Delete a directory
Storage::deleteDirectory('directory');
```

## File Visibility

File visibility determines whether files are publicly accessible or private:

```php
// Store a file with public visibility
Storage::put('file.jpg', $contents, 'public');

// Store a file with private visibility
Storage::put('file.jpg', $contents, 'private');

// Get a file's visibility
$visibility = Storage::getVisibility('file.jpg');

// Set a file's visibility
Storage::setVisibility('file.jpg', 'public');
```

## Custom Filesystems

You can create custom filesystem disks at runtime:

```php
use Illuminate\Support\Facades\Storage;

// Create a custom disk
Storage::extend('dropbox', function ($app, $config) {
    $client = new DropboxClient(
        $config['authorization_token']
    );

    return new Filesystem(new DropboxAdapter($client));
});
```

Or in a service provider:

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;
use Spatie\Dropbox\Client as DropboxClient;
use Spatie\FlysystemDropbox\DropboxAdapter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Storage::extend('dropbox', function ($app, $config) {
            $client = new DropboxClient(
                $config['authorization_token']
            );

            return new Filesystem(new DropboxAdapter($client));
        });
    }
}
```

Then configure the disk in `config/filesystems.php`:

```php
'disks' => [
    // ...
    
    'dropbox' => [
        'driver' => 'dropbox',
        'authorization_token' => env('DROPBOX_AUTH_TOKEN'),
    ],
],
```

## File Uploads

### Basic File Upload

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->store('photos');

    return $path;
}
```

### File Upload with Custom Name

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->storeAs(
        'photos', $request->user()->id . '.jpg'
    );

    return $path;
}
```

### File Upload to Specific Disk

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->store(
        'photos', 's3'
    );

    return $path;
}
```

### File Upload with Custom Name to Specific Disk

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->storeAs(
        'photos', $request->user()->id . '.jpg', 's3'
    );

    return $path;
}
```

### File Upload with Public Visibility

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->storePublicly('photos');

    return $path;
}
```

### File Upload with Public Visibility and Custom Name

```php
public function store(Request $request)
{
    $request->validate([
        'photo' => 'required|image|max:2048',
    ]);

    $path = $request->file('photo')->storePubliclyAs(
        'photos', $request->user()->id . '.jpg'
    );

    return $path;
}
```

## Public Storage

To make files stored in the `public` disk accessible from the web, you need to create a symbolic link from `public/storage` to `storage/app/public`:

```bash
php artisan storage:link
```

This will create a symbolic link as configured in the `links` array in `config/filesystems.php`.

## Cloud Storage

Laravel supports several cloud storage providers through Flysystem:

### Amazon S3

```php
'disks' => [
    // ...
    
    's3' => [
        'driver' => 's3',
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION'),
        'bucket' => env('AWS_BUCKET'),
        'url' => env('AWS_URL'),
        'endpoint' => env('AWS_ENDPOINT'),
        'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
        'throw' => false,
    ],
],
```

### FTP

```php
'disks' => [
    // ...
    
    'ftp' => [
        'driver' => 'ftp',
        'host' => env('FTP_HOST'),
        'username' => env('FTP_USERNAME'),
        'password' => env('FTP_PASSWORD'),
        'port' => env('FTP_PORT', 21),
        'root' => env('FTP_ROOT'),
        'passive' => true,
        'ssl' => true,
        'timeout' => 30,
    ],
],
```

### SFTP

```php
'disks' => [
    // ...
    
    'sftp' => [
        'driver' => 'sftp',
        'host' => env('SFTP_HOST'),
        'username' => env('SFTP_USERNAME'),
        'password' => env('SFTP_PASSWORD'),
        'port' => env('SFTP_PORT', 22),
        'root' => env('SFTP_ROOT'),
        'privateKey' => env('SFTP_PRIVATE_KEY'),
        'passphrase' => env('SFTP_PASSPHRASE'),
        'timeout' => 30,
    ],
],
```

## Testing File Storage

Laravel provides several helpers for testing file storage:

```php
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

public function test_photos_can_be_uploaded()
{
    Storage::fake('photos');

    $file = UploadedFile::fake()->image('photo.jpg');

    $response = $this->post('/photos', [
        'photo' => $file,
    ]);

    Storage::disk('photos')->assertExists($file->hashName());
    
    // Assert a file does not exist...
    Storage::disk('photos')->assertMissing('missing.jpg');
}
```

### Creating Fake Files

```php
// Create a fake image
$file = UploadedFile::fake()->image('photo.jpg', 100, 100);

// Create a fake file with a specific size
$file = UploadedFile::fake()->create('document.pdf', 1024);

// Create a fake image with a specific size and format
$file = UploadedFile::fake()->image('photo.jpg', 1000, 1000)->size(2000);
```

## Best Practices

1. **Use environment variables for configuration**: Store sensitive credentials in `.env`
2. **Use the Storage facade**: Instead of direct filesystem functions
3. **Validate file uploads**: Always validate file uploads for security
4. **Use public disk for public files**: Store publicly accessible files in the `public` disk
5. **Use private disk for sensitive files**: Store sensitive files in a private disk
6. **Generate unique filenames**: Avoid filename collisions
7. **Clean up temporary files**: Delete temporary files after processing
8. **Set appropriate file permissions**: Ensure files have the correct permissions
9. **Use cloud storage for scalability**: Consider using cloud storage for production
10. **Test file uploads**: Write tests for file upload functionality

## Common File Storage Patterns

### Profile Picture Upload

```php
public function update(Request $request)
{
    $request->validate([
        'avatar' => 'nullable|image|max:1024',
    ]);

    if ($request->hasFile('avatar')) {
        // Delete old avatar
        if ($request->user()->avatar) {
            Storage::disk('public')->delete($request->user()->avatar);
        }

        // Store new avatar
        $path = $request->file('avatar')->store('avatars', 'public');

        // Update user record
        $request->user()->update([
            'avatar' => $path,
        ]);
    }

    return redirect()->back()->with('status', 'Profile updated!');
}
```

### File Manager

```php
public function index()
{
    $files = Storage::disk('public')->files('uploads');
    
    return view('files.index', [
        'files' => $files,
    ]);
}

public function store(Request $request)
{
    $request->validate([
        'file' => 'required|file|max:10240',
    ]);

    $path = $request->file('file')->store('uploads', 'public');

    return redirect()->route('files.index');
}

public function destroy($filename)
{
    Storage::disk('public')->delete('uploads/' . $filename);

    return redirect()->route('files.index');
}
```

### Temporary URLs for Private Files

```php
public function download($fileId)
{
    $file = File::findOrFail($fileId);
    
    // Check if user has permission to download
    $this->authorize('download', $file);
    
    // Generate a temporary URL
    $url = Storage::temporaryUrl(
        $file->path, now()->addMinutes(5)
    );
    
    return redirect()->to($url);
}
```

## References

- [Laravel File Storage Documentation](https://laravel.com/docs/12.x/filesystem)
- [Flysystem Documentation](https://flysystem.thephpleague.com/docs/)
- [Laravel File Upload Documentation](https://laravel.com/docs/12.x/requests#files)