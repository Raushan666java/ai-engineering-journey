<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Http\Request;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

// Simulate authenticated user
$user = \App\Models\User::first();
if (!$user) {
    echo "No user found. Please create a user first.\n";
    exit;
}

echo "Testing designation application create page with user: {$user->name} (ID: {$user->id})\n\n";

// Test create page
echo "Testing create page:\n";
$request = Request::create('/user/designation-applications/create', 'GET');
$request->setUserResolver(function () use ($user) {
    return $user;
});

try {
    $response = app()->handle($request);
    $content = $response->getContent();
    echo "Status: {$response->getStatusCode()}\n";
    if ($response->getStatusCode() == 200) {
        echo "Page loaded successfully\n";
        // Check if the page contains expected elements
        if (strpos($content, 'designationApplicationForm') !== false) {
            echo "Form found in response\n";
        } else {
            echo "Form not found in response\n";
        }
    } else {
        echo "Response: " . substr($content, 0, 500) . "...\n";
    }
} catch (Exception $e) {
    echo "Error: {$e->getMessage()}\n\n";
}