<?php

require_once 'vendor/autoload.php';

use Illuminate\Support\Facades\DB;
use App\Models\Permission;

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo "Demonstrating Permission Blocking for Manager Role\n";
echo "=================================================\n\n";

// Example: Block 'applications.approve' permission for manager role
$permissionName = 'applications.approve';
$roleName = 'manager';

echo "First, assigning permission to manager role...\n";
$permission = Permission::where('name', $permissionName)->first();

if ($permission) {
    // First assign it
    $permission->assignToRole($roleName);
    echo "✅ Permission '{$permissionName}' assigned to {$roleName} role\n";

    // Then block it
    $permission->blockForRole($roleName);
    echo "✅ Permission '{$permissionName}' has been BLOCKED for {$roleName} role\n\n";

    // Show current status
    echo "Current permission status for all roles:\n";
    $rolesWithStatus = $permission->getRolesWithStatus();

    foreach (['admin', 'manager', 'user', 'student'] as $role) {
        $status = $rolesWithStatus[$role] ?? 'not_assigned';
        $icon = match($status) {
            'active' => '✅',
            'blocked' => '❌',
            'not_assigned' => '➖'
        };
        echo "  {$icon} {$role}: {$status}\n";
    }

    echo "\nNow managers CANNOT approve applications, but admins still can!\n";
    echo "You can unblock it anytime using: \$permission->unblockForRole('manager');\n";

} else {
    echo "❌ Permission '{$permissionName}' not found!\n";
}

echo "\nDemonstration completed! 🎯\n";