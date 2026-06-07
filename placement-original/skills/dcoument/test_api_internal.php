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

echo "Testing APIs with user: {$user->name} (ID: {$user->id})\n\n";

// Test states API
echo "Testing /user/designation-applications/states/1:\n";
$request = Request::create('/user/designation-applications/states/1', 'GET');
$request->setUserResolver(function () use ($user) {
    return $user;
});

try {
    $response = app()->handle($request);
    $content = $response->getContent();
    echo "Status: {$response->getStatusCode()}\n";
    echo "Response: $content\n\n";
} catch (Exception $e) {
    echo "Error: {$e->getMessage()}\n\n";
}

// Test districts API
echo "Testing /user/designation-applications/districts/1:\n";
$request = Request::create('/user/designation-applications/districts/1', 'GET');
$request->setUserResolver(function () use ($user) {
    return $user;
});

try {
    $response = app()->handle($request);
    $content = $response->getContent();
    echo "Status: {$response->getStatusCode()}\n";
    echo "Response: $content\n\n";
} catch (Exception $e) {
    echo "Error: {$e->getMessage()}\n\n";
}