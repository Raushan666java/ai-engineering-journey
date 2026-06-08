<?php

require_once 'vendor/autoload.php';

use Illuminate\Support\Facades\DB;
use App\Models\Permission;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo "Assigning All Permissions to Admin Role\n";
echo "======================================\n\n";

// Get all permissions
$permissions = Permission::all();

echo "Found " . $permissions->count() . " permissions\n";

$assigned = 0;
foreach ($permissions as $permission) {
    // Skip the test permission "Raushan"
    if ($permission->name === 'Raushan') {
        continue;
    }

    $exists = DB::table('role_permissions')
        ->where('role_name', 'admin')
        ->where('permission_id', $permission->id)
        ->exists();

    if (!$exists) {
        DB::table('role_permissions')->insert([
            'role_name' => 'admin',
            'permission_id' => $permission->id,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        $assigned++;
        echo "Assigned: {$permission->name}\n";
    }
}

echo "\nAssigned {$assigned} permissions to admin role.\n";

// Verify
$adminCount = DB::table('role_permissions')->where('role_name', 'admin')->count();
echo "Admin now has {$adminCount} permissions in database.\n";

echo "\nAdmin permission assignment completed!\n";