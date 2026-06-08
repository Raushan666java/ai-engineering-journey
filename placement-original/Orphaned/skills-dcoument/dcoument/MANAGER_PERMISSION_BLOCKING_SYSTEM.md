# Manager Permission System - Default Allow with Blocking

## 🎯 Overview
The permission system has been redesigned with a **"Default Allow with Blocking"** model for the Manager role:

- **Manager Role**: Has ALL permissions by default (96 permissions)
- **Admin**: Can ONLY BLOCK specific permissions from managers
- **Blocking Model**: Managers can do everything except what's explicitly blocked

## 📊 Current Statistics
- **Total Permissions**: 96
- **Manager Allowed**: 54 (by default, with 42 blocked)
- **Manager Blocked**: 42 (explicitly blocked by admin)
- **Admin Permissions**: 96 (all active)

## 🔑 Key Features

### 1. Default Permission Model
```
Manager Permission Logic:
- Has ALL permissions by default
- Specific permissions can be BLOCKED
- Unblocked = Allowed
- No explicit "grant" needed
```

### 2. Manager Permissions Management Page
**URL**: http://localhost/AITO/admin/permissions/manager

**Features**:
- ✅ Visual interface showing all 96 permissions grouped by module
- ✅ Checkbox-based blocking (checked = blocked, unchecked = allowed)
- ✅ Real-time counters (Allowed vs Blocked)
- ✅ Quick action buttons:
  - Block All
  - Allow All
  - Block All Delete Operations
  - Block System Settings
- ✅ Search functionality across permissions
- ✅ Accordion layout grouped by module
- ✅ Color-coded badges showing status

### 3. Permission Index Page Enhancement
**URL**: http://localhost/AITO/admin/permissions

**New Features**:
- Prominent "Manage Manager Permissions" button
- "Manager Status" column showing Allowed/Blocked badges
- Quick visual indicator for each permission's manager status

## 🚫 Blocked Permissions for Manager (42 Total)

### Manager Management (Admin Only)
- ❌ managers.view
- ❌ managers.create
- ❌ managers.edit
- ❌ managers.delete

### Permission Management (Admin Only)
- ❌ permissions.view
- ❌ permissions.create
- ❌ permissions.edit
- ❌ permissions.delete
- ❌ permissions.assign

### Critical System Settings
- ❌ system.settings

### Bank & Financial (Admin Only)
- ❌ bank.view
- ❌ bank.edit

### User Management Restrictions
- ❌ users.delete
- ❌ users.create

### Location Management
- ❌ locations.create
- ❌ locations.edit
- ❌ locations.delete

### Organizational Structure
- ❌ wings.create
- ❌ wings.delete
- ❌ designations.create
- ❌ designations.delete

### Financial Operations
- ❌ donations.delete

### Content Deletions
- ❌ blogs.delete
- ❌ notices.delete
- ❌ news_events.delete

### Academic Program Management
- ❌ scholarships.create
- ❌ scholarships.edit
- ❌ scholarships.delete
- ❌ admit_cards.create
- ❌ admit_cards.edit
- ❌ admit_cards.delete
- ❌ exam_centers.create
- ❌ exam_centers.edit
- ❌ exam_centers.delete

### Media Management Restrictions
- ❌ gallery.delete
- ❌ videos.delete
- ❌ activities.delete

### Awards Management
- ❌ awards.create
- ❌ awards.edit
- ❌ awards.delete

### Website Configuration
- ❌ website_settings.edit
- ❌ footer.edit

## ✅ Manager Allowed Permissions (54 Total)

Managers can:
- ✅ View and edit users (but not create/delete)
- ✅ View all location data
- ✅ Edit wings and designations
- ✅ View and approve designation applications
- ✅ Full access to reports and analytics
- ✅ Create, edit, and confirm donations
- ✅ Create and edit all content (blogs, notices, news)
- ✅ Publish blogs
- ✅ View and approve scholarship applications
- ✅ View admit cards and exam centers
- ✅ Create and edit gallery, videos, activities
- ✅ View and approve award applications
- ✅ View website and footer settings
- ✅ View system logs
- ✅ Access dashboard

## 🔧 Technical Implementation

### User Model Updates
**File**: `app/Models/User.php`

```php
public function hasPermission($permissionName)
{
    // Admin has all permissions
    if ($this->isAdmin()) {
        return true;
    }

    // Manager has all permissions by default, except blocked ones
    if ($this->role === 'manager') {
        $isBlocked = DB::table('role_permissions')
            ->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')
            ->where('role_permissions.role_name', 'manager')
            ->where('role_permissions.status', 'blocked')
            ->where('permissions.name', $permissionName)
            ->exists();
        
        return !$isBlocked; // Has permission if NOT blocked
    }

    // For other roles, check if explicitly granted
    return DB::table('role_permissions')
        ->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')
        ->where('role_permissions.role_name', $this->role)
        ->where('role_permissions.status', 'active')
        ->where('permissions.name', $permissionName)
        ->exists();
}
```

### Permission Model Updates
**File**: `app/Models/Permission.php`

```php
public function blockForRole($roleName)
{
    // Insert or update to blocked status
}

public function unblockForRole($roleName)
{
    // For manager, delete the blocked record (default is allow)
    if ($roleName === 'manager') {
        DB::table('role_permissions')
            ->where('role_name', $roleName)
            ->where('permission_id', $this->id)
            ->delete();
    }
}

public function isBlockedForRole($roleName)
{
    // Check if permission is blocked
}
```

### Controller Methods
**File**: `app/Http/Controllers/Admin/PermissionController.php`

```php
// New Methods Added:
public function managerPermissions()
{
    // Show manager permission management page
}

public function updateManagerPermissions(Request $request)
{
    // Update blocked permissions for manager role
}
```

### Routes Added
**File**: `routes/admin.php`

```php
Route::get('permissions/manager/manage', [PermissionController::class, 'managerPermissions'])
    ->name('permissions.manager');
    
Route::post('permissions/manager/update', [PermissionController::class, 'updateManagerPermissions'])
    ->name('permissions.manager.update');
```

## 📱 How to Use

### For Admins: Managing Manager Permissions

1. **Access Manager Permissions Page**
   - Navigate to: http://localhost/AITO/admin/permissions
   - Click "Manage Manager Permissions" button
   - Or directly: http://localhost/AITO/admin/permissions/manager

2. **Block/Allow Permissions**
   - **Unchecked** = Manager has this permission ✅
   - **Checked** = Manager blocked from this permission ❌
   - Use quick action buttons for bulk operations
   - Search for specific permissions

3. **Save Changes**
   - Click "Update Manager Permissions"
   - Confirm the changes
   - System shows: "Blocked: X, Allowed: Y"

### For Managers: Understanding Your Access

As a manager, you have access to **all features by default**, except:
- Cannot manage other managers or permissions
- Cannot modify critical system settings
- Cannot create/delete users
- Cannot create/delete organizational structures
- Cannot delete financial records or content
- Cannot modify website configuration

## 🔄 Reseeding Permissions

To reset all permissions to default state:

```bash
php artisan db:seed --class=RolePermissionSeeder
```

This will:
1. Delete all existing permissions and role assignments
2. Create 96 permissions
3. Block 42 permissions for manager role
4. Grant all 96 permissions to admin role

## 🧪 Testing

### Test Manager Permissions
```bash
# Check if manager has a specific permission
php artisan tinker --execute="
    \$user = \App\Models\User::where('role', 'manager')->first();
    echo \$user->hasPermission('users.view') ? 'YES' : 'NO';
"

# List all blocked permissions for manager
php artisan tinker --execute="
    \$blocked = \App\Models\Permission::join('role_permissions', 'permissions.id', '=', 'role_permissions.permission_id')
        ->where('role_permissions.role_name', 'manager')
        ->where('role_permissions.status', 'blocked')
        ->pluck('permissions.name');
    \$blocked->each(fn(\$p) => echo \$p . PHP_EOL);
"
```

### Verify Counts
```bash
php artisan tinker --execute="
    echo 'Total: ' . \App\Models\Permission::count() . PHP_EOL;
    echo 'Blocked: ' . DB::table('role_permissions')->where('role_name', 'manager')->where('status', 'blocked')->count() . PHP_EOL;
    echo 'Allowed: ' . (\App\Models\Permission::count() - DB::table('role_permissions')->where('role_name', 'manager')->where('status', 'blocked')->count()) . PHP_EOL;
"
```

## 📋 Database Structure

### role_permissions Table
```
id | role_name | permission_id | status   | created_at | updated_at
---|-----------|---------------|----------|------------|------------
1  | manager   | 10           | blocked  | ...        | ...
2  | manager   | 15           | blocked  | ...        | ...
3  | admin     | 1            | active   | ...        | ...
4  | admin     | 2            | active   | ...        | ...
```

**Manager Logic**:
- If permission_id NOT IN blocked list → Allowed
- If permission_id IN blocked list → Blocked

**Admin Logic**:
- All permissions with status = 'active'

## 🎨 UI Screenshots Description

### Manager Permissions Page
- Top alert box explaining the blocking model
- Real-time counters: Allowed (green) and Blocked (red)
- Quick action buttons for common operations
- Search box for filtering permissions
- Accordion layout grouped by module (dashboard, users, content, etc.)
- Each permission shows:
  - Display name
  - Technical name (code format)
  - Description
  - Checkbox (checked = blocked)
- Submit button at bottom

### Permissions Index Page
- "Manage Manager Permissions" button (yellow/warning color)
- Table columns:
  - Name (code format)
  - Display Name
  - Module (badge)
  - Description
  - Manager Status (Allowed ✅ / Blocked ❌)
  - Actions (View/Edit/Delete)

## 🔐 Security Considerations

1. **Admin Only**: Only admins can access permission management
2. **Manager Restrictions**: Managers cannot modify their own permissions
3. **System Protection**: Critical system settings blocked by default
4. **Audit Trail**: All permission changes logged with timestamps
5. **Default Safe**: Manager permissions are restricted for critical operations

## 📝 Best Practices

1. **Review Regularly**: Audit manager blocked permissions quarterly
2. **Document Changes**: Note why specific permissions are blocked
3. **Test After Changes**: Verify manager access after permission updates
4. **Backup First**: Export permission list before major changes
5. **Least Privilege**: Block permissions managers don't need

## 🚀 Quick Links

- **Manage Manager Permissions**: http://localhost/AITO/admin/permissions/manager
- **All Permissions**: http://localhost/AITO/admin/permissions
- **Create Permission**: http://localhost/AITO/admin/permissions/create
- **Admin Dashboard**: http://localhost/AITO/admin/dashboard

## 📞 Support

If you need to:
- Add new permission module
- Modify blocking rules
- Change default permissions
- Troubleshoot access issues

Refer to:
- `database/seeders/RolePermissionSeeder.php` - Default blocking rules
- `app/Models/User.php` - Permission checking logic
- `app/Http/Controllers/Admin/PermissionController.php` - Management logic

---

**Last Updated**: January 9, 2026  
**System Version**: Manager Default Allow with Blocking Model v1.0  
**Status**: ✅ Fully Operational
