<?php

require_once 'vendor/autoload.php';

use Illuminate\Support\Facades\DB;
use App\Models\Permission;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo "Testing Role Assignment\n";
echo "======================\n\n";

// Get manager role permissions
$managerPermissions = DB::table('role_permissions')->where('role_name', 'manager')->get();
echo "Current manager permissions in database: " . $managerPermissions->count() . "\n";

if ($managerPermissions->count() > 0) {
    foreach ($managerPermissions as $perm) {
        $permission = Permission::find($perm->permission_id);
        echo "- " . ($permission ? $permission->name : 'Unknown') . "\n";
    }
} else {
    echo "No permissions assigned to manager role.\n";
}

echo "\n";

// Test assigning permissions to manager
echo "Assigning permissions to manager role...\n";

$permissionsToAssign = [
    'users.view',
    'donations.view',
    'applications.view',
    'reports.view',
    'content.view'
];

foreach ($permissionsToAssign as $permName) {
    $permission = Permission::where('name', $permName)->first();
    if ($permission) {
        DB::table('role_permissions')->updateOrInsert(
            ['role_name' => 'manager', 'permission_id' => $permission->id],
            ['created_at' => now(), 'updated_at' => now()]
        );
        echo "Assigned: {$permName}\n";
    } else {
        echo "Permission not found: {$permName}\n";
    }
}

echo "\n";

// Check again
$managerPermissions = DB::table('role_permissions')->where('role_name', 'manager')->get();
echo "Manager permissions after assignment: " . $managerPermissions->count() . "\n";

foreach ($managerPermissions as $perm) {
    $permission = Permission::find($perm->permission_id);
    echo "- " . ($permission ? $permission->name : 'Unknown') . "\n";
}

echo "\nTest completed!\n";