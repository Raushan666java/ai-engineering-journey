<?php

require_once 'vendor/autoload.php';

use Illuminate\Support\Facades\DB;
use App\Models\Permission;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo "Assigning Default Permissions to Roles\n";
echo "=====================================\n\n";

// Define default permissions for each role
$rolePermissions = [
    'manager' => [
        'users.view',
        'users.edit',
        'users.block',
        'users.approve',
        'donations.view',
        'donations.confirm',
        'applications.view',
        'applications.approve',
        'reports.view',
        'reports.export',
        'content.view',
        'content.manage',
        'system.view_logs'
    ],
    'user' => [
        'users.view' // basic user permissions
    ],
    'student' => [
        'users.view' // basic student permissions
    ]
    // admin gets all permissions automatically
];

foreach ($rolePermissions as $roleName => $permissions) {
    echo "Assigning permissions to {$roleName} role:\n";

    foreach ($permissions as $permName) {
        $permission = Permission::where('name', $permName)->first();

        if ($permission) {
            // Check if already assigned
            $exists = DB::table('role_permissions')
                ->where('role_name', $roleName)
                ->where('permission_id', $permission->id)
                ->exists();

            if (!$exists) {
                DB::table('role_permissions')->insert([
                    'role_name' => $roleName,
                    'permission_id' => $permission->id,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
                echo "  ✓ Assigned: {$permName}\n";
            } else {
                echo "  - Already assigned: {$permName}\n";
            }
        } else {
            echo "  ✗ Permission not found: {$permName}\n";
        }
    }
    echo "\n";
}

// Verify assignments
echo "Verification:\n";
echo "============\n";

$roles = ['admin', 'manager', 'user', 'student'];
foreach ($roles as $role) {
    $count = DB::table('role_permissions')->where('role_name', $role)->count();
    echo "{$role}: {$count} permissions\n";
}

echo "\nPermission assignment completed!\n";