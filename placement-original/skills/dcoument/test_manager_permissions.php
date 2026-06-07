<?php
// filepath: c:\xampp\htdocs\AITO\test_manager_permissions.php

require_once 'vendor/autoload.php';

use App\Models\User;
use App\Models\Permission;
use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Kernel::class);
$kernel->bootstrap();

echo "Testing Manager Permission System\n";
echo "=================================\n\n";

// Test 1: Check if permissions table exists and has data
echo "Test 1: Checking permissions table...\n";
$permissions = Permission::all();
echo "Found " . $permissions->count() . " permissions in database:\n";
foreach ($permissions as $perm) {
    echo "- {$perm->name}: {$perm->display_name}\n";
}
echo "\n";

// Test 2: Check if role_permissions table has manager permissions
echo "Test 2: Checking manager permissions...\n";
$managerPermissions = Permission::join('role_permissions', 'permissions.id', '=', 'role_permissions.permission_id')
    ->where('role_permissions.role_name', 'manager')
    ->select('permissions.name', 'permissions.display_name')
    ->get();

echo "Manager role has " . $managerPermissions->count() . " permissions:\n";
foreach ($managerPermissions as $perm) {
    echo "- {$perm->name}: {$perm->display_name}\n";
}
echo "\n";

// Test 3: Create a test manager and check permissions
echo "Test 3: Testing permission methods on manager user...\n";

// Find or create a test manager
$testManager = User::where('role', 'manager')->first();

if (!$testManager) {
    echo "No manager found in database. Creating a test manager...\n";
    $testManager = User::create([
        'name' => 'Test Manager',
        'email' => 'test.manager@example.com',
        'password' => bcrypt('password123'),
        'role' => 'manager',
        'membership_status' => 'approved',
        'membership_id' => 'TEST' . rand(1000, 9999),
    ]);
    echo "Created test manager: {$testManager->name} ({$testManager->email})\n";
} else {
    echo "Using existing manager: {$testManager->name} ({$testManager->email})\n";
}

// Test permission checking methods
echo "\nTesting permission methods:\n";

// Test hasPermission
$testPermissions = ['users.view', 'users.edit', 'reports.view'];
foreach ($testPermissions as $perm) {
    $hasPerm = $testManager->hasPermission($perm);
    echo "- hasPermission('{$perm}'): " . ($hasPerm ? 'YES' : 'NO') . "\n";
}

// Test hasAnyPermission
$hasAny = $testManager->hasAnyPermission(['users.view', 'nonexistent_perm']);
echo "- hasAnyPermission(['users.view', 'nonexistent_perm']): " . ($hasAny ? 'YES' : 'NO') . "\n";

// Test getPermissions
$userPermissions = $testManager->getPermissions();
echo "- getPermissions() count: " . $userPermissions->count() . "\n";
echo "Permissions: " . $userPermissions->pluck('name')->join(', ') . "\n";

// Test 4: Check admin permissions
echo "\nTest 4: Testing admin permissions...\n";
$admin = User::where('role', 'admin')->first();

if ($admin) {
    echo "Admin user: {$admin->name}\n";
    echo "- hasPermission('any_permission'): " . ($admin->hasPermission('any_permission') ? 'YES' : 'NO') . "\n";
    echo "- getPermissions() count: " . $admin->getPermissions()->count() . "\n";
} else {
    echo "No admin user found in database.\n";
}

echo "\nPermission system test completed!\n";