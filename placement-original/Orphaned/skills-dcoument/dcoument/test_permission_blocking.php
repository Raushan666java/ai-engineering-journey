<?php

require_once 'vendor/autoload.php';

use Illuminate\Support\Facades\DB;
use App\Models\Permission;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo "Testing Permission Blocking/Unblocking\n";
echo "=====================================\n\n";

// Get a test permission
$permission = Permission::where('name', 'users.view')->first();

if (!$permission) {
    echo "Permission 'users.view' not found!\n";
    exit(1);
}

echo "Testing with permission: {$permission->name}\n\n";

// Test blocking for manager role
echo "1. Blocking permission for manager role...\n";
$permission->blockForRole('manager');
echo "   ✓ Blocked\n\n";

// Check status
echo "2. Checking status for all roles:\n";
$rolesWithStatus = $permission->getRolesWithStatus();
foreach (['admin', 'manager', 'user', 'student'] as $role) {
    $status = $rolesWithStatus[$role] ?? 'not_assigned';
    echo "   {$role}: {$status}\n";
}
echo "\n";

// Test unblocking for manager role
echo "3. Unblocking permission for manager role...\n";
$permission->unblockForRole('manager');
echo "   ✓ Unblocked\n\n";

// Check status again
echo "4. Checking status after unblocking:\n";
$rolesWithStatus = $permission->getRolesWithStatus();
foreach (['admin', 'manager', 'user', 'student'] as $role) {
    $status = $rolesWithStatus[$role] ?? 'not_assigned';
    echo "   {$role}: {$status}\n";
}
echo "\n";

// Test hasRole method
echo "5. Testing hasRole method:\n";
foreach (['admin', 'manager', 'user', 'student'] as $role) {
    $hasRole = $permission->hasRole($role);
    echo "   {$role} has permission: " . ($hasRole ? 'YES' : 'NO') . "\n";
}
echo "\n";

// Test isBlockedForRole method
echo "6. Testing isBlockedForRole method:\n";
foreach (['admin', 'manager', 'user', 'student'] as $role) {
    $isBlocked = $permission->isBlockedForRole($role);
    echo "   {$role} is blocked: " . ($isBlocked ? 'YES' : 'NO') . "\n";
}
echo "\n";

echo "Permission blocking/unblocking test completed! ✅\n";