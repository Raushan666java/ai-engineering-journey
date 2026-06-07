<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Http\Request;
use App\Http\Controllers\Frontend\DesignationApplicationController;
use App\Models\Designation;
use App\Models\Country;
use App\Models\State;
use App\Models\District;
use Illuminate\Support\Facades\Auth;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

// Create a mock user for testing
$user = \App\Models\User::first(); // Get first user from database
if (!$user) {
    // Create a test user if none exists
    $user = \App\Models\User::create([
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => bcrypt('password'),
        'is_active' => true,
    ]);
}

// Mock authentication
Auth::login($user);

echo "Testing Designation Application Form with Level-Based Fields\n";
echo "==========================================================\n\n";

// Test 1: National Level
echo "Test 1: National Level Application\n";
echo "----------------------------------\n";

$request = new Request();
$request->merge([
    'designation_id' => 1, // National secretary
    'application_reason' => 'I want to serve at the national level',
    'ope_field' => 'OPE123456',
    'country_id' => 1, // India
    'state_id' => 1,
    'district_id' => 1,
    'application_data' => json_encode([
        'level' => 'national',
        'ope_field' => 'OPE123456',
        'country_id' => 1,
        'state_id' => 1,
        'district_id' => 1
    ])
]);

$controller = new DesignationApplicationController();
try {
    $response = $controller->store($request);
    echo "✓ National level validation passed\n";
} catch (Exception $e) {
    echo "✗ National level validation failed: " . $e->getMessage() . "\n";
}

// Test 2: State Level
echo "\nTest 2: State Level Application\n";
echo "--------------------------------\n";

$request = new Request();
$request->merge([
    'designation_id' => 5, // State secretery
    'application_reason' => 'I want to serve at the state level',
    'state_id' => 1,
    'district_id' => 1,
    'application_data' => json_encode([
        'level' => 'state',
        'state_id' => 1,
        'district_id' => 1
    ])
]);

try {
    $response = $controller->store($request);
    echo "✓ State level validation passed\n";
} catch (Exception $e) {
    echo "✗ State level validation failed: " . $e->getMessage() . "\n";
}

// Test 3: District Level
echo "\nTest 3: District Level Application\n";
echo "-----------------------------------\n";

$request = new Request();
$request->merge([
    'designation_id' => 6, // District secretary
    'application_reason' => 'I want to serve at the district level',
    'block' => 'Test Block',
    'panchayat' => 'Test Panchayat',
    'application_data' => json_encode([
        'level' => 'district',
        'block' => 'Test Block',
        'panchayat' => 'Test Panchayat'
    ])
]);

try {
    $response = $controller->store($request);
    echo "✓ District level validation passed\n";
} catch (Exception $e) {
    echo "✗ District level validation failed: " . $e->getMessage() . "\n";
}

// Test 4: API Endpoints
echo "\nTest 4: API Endpoints\n";
echo "---------------------\n";

// Test states API
try {
    $statesResponse = $controller->getStates(new Request());
    echo "✓ States API working\n";
} catch (Exception $e) {
    echo "✗ States API failed: " . $e->getMessage() . "\n";
}

// Test districts API
try {
    $districtsResponse = $controller->getDistricts(new Request(['state_id' => 1]));
    echo "✓ Districts API working\n";
} catch (Exception $e) {
    echo "✗ Districts API failed: " . $e->getMessage() . "\n";
}

echo "\nTesting completed!\n";