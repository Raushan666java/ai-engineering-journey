<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Http\Request;
use App\Http\Controllers\Frontend\DesignationApplicationController;
use Illuminate\Support\Facades\Auth;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

// Create a mock user for testing
$user = \App\Models\User::first();
if (!$user) {
    $user = \App\Models\User::create([
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => bcrypt('password'),
        'is_active' => true,
    ]);
}

// Mock authentication
Auth::login($user);

echo "Testing authenticated API access...\n";

// Test states API
$controller = new DesignationApplicationController();
$request = new Request(['country_id' => 1]);

try {
    $response = $controller->getStates($request);
    $data = json_decode($response->getContent(), true);
    echo "✓ States API works! Found " . count($data) . " states\n";
} catch (Exception $e) {
    echo "✗ States API failed: " . $e->getMessage() . "\n";
}

// Test districts API
$request = new Request(['state_id' => 1]);

try {
    $response = $controller->getDistricts($request);
    $data = json_decode($response->getContent(), true);
    echo "✓ Districts API works! Found " . count($data) . " districts\n";
} catch (Exception $e) {
    echo "✗ Districts API failed: " . $e->getMessage() . "\n";
}

echo "API testing completed!\n";