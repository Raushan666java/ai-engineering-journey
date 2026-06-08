# Quick Permission Creation Guide

## Access the Permission Creation Page
Navigate to: **http://localhost/AITO/admin/permissions/create**

## Pre-configured Permission Modules

When creating new permissions, use these standardized module names:

### Available Modules
1. **dashboard** - Dashboard and home features
2. **users** - User management
3. **managers** - Manager management
4. **permissions** - Permission and role management
5. **locations** - Countries, states, districts, blocks, panchayats
6. **wings** - Organizational wings
7. **designations** - Posts and designations
8. **applications** - All types of applications (scholarships, awards, designations)
9. **reports** - Reports and analytics
10. **donations** - Donation management
11. **bank** - Bank details
12. **content** - Blogs, notices, news, gallery, videos, activities
13. **system** - System settings and logs

## Standard Permission Naming Convention

Use this format: `module.action`

### Common Actions
- `view` - Can view the module
- `create` - Can create new records
- `edit` - Can edit existing records
- `delete` - Can delete records
- `approve` - Can approve applications/requests
- `publish` - Can publish content
- `confirm` - Can confirm actions (like donations)
- `export` - Can export data
- `assign` - Can assign items to others

### Examples
- `users.view` - View users list
- `users.create` - Create new users
- `blogs.publish` - Publish blog posts
- `donations.confirm` - Confirm donations
- `reports.export` - Export reports

## Creating a New Permission via UI

1. **Navigate to Permission Creation**
   - URL: http://localhost/AITO/admin/permissions/create
   - Or: Admin Panel → Permissions → Create New Permission

2. **Fill in the Form**
   ```
   Name: [module.action]
   Example: blogs.create
   
   Display Name: [Human-readable name]
   Example: Create Blogs
   
   Module: [Select from dropdown or type]
   Example: content
   
   Description: [Brief explanation]
   Example: Can create new blog posts
   ```

3. **Submit the Form**
   - Click "Create Permission"
   - Permission will be saved to database

4. **Assign to Roles** (Optional)
   - After creation, edit the permission
   - Check which roles should have this permission
   - Save to assign

## Example: Creating a New Feature Permission

Let's say you're adding a new "Complaints" module. Create these permissions:

```
1. complaints.view
   Display Name: View Complaints
   Module: complaints
   Description: Can view complaint list and details

2. complaints.create
   Display Name: Create Complaints
   Module: complaints
   Description: Can submit new complaints

3. complaints.edit
   Display Name: Edit Complaints
   Module: complaints
   Description: Can edit complaint details

4. complaints.delete
   Display Name: Delete Complaints
   Module: complaints
   Description: Can delete complaints

5. complaints.resolve
   Display Name: Resolve Complaints
   Module: complaints
   Description: Can mark complaints as resolved
```

## Assigning Permissions to Manager Role

### Method 1: Via Seeder (Recommended for bulk)
1. Open `database/seeders/RolePermissionSeeder.php`
2. Add permission name to `$managerPermissions` array
3. Run: `php artisan db:seed --class=RolePermissionSeeder`

### Method 2: Via UI
1. Navigate to: http://localhost/AITO/admin/permissions
2. Find the permission you want to assign
3. Click "Edit"
4. Check "Manager" role checkbox
5. Click "Update Permission"

## Common Permission Sets

### For Content Creators (Managers)
```
- content.view ✅
- content.manage ✅
- blogs.view ✅
- blogs.create ✅
- blogs.edit ✅
- blogs.publish ✅
- notices.view ✅
- notices.create ✅
- notices.edit ✅
```

### For Data Managers
```
- users.view ✅
- users.edit ✅
- reports.view ✅
- reports.export ✅
- donations.view ✅
- donations.confirm ✅
```

### For Application Reviewers
```
- applications.view ✅
- applications.approve ✅
- scholarships.view ✅
- scholarships.approve ✅
- awards.view ✅
- awards.approve ✅
```

## Checking if Permission Exists

### Via Database Query
```bash
php artisan tinker --execute="echo \App\Models\Permission::where('name', 'users.view')->exists() ? 'EXISTS' : 'NOT FOUND';"
```

### Via Admin Panel
1. Go to: http://localhost/AITO/admin/permissions
2. Use search or filter by module
3. Look for the permission name

## Current Permission Count
- **Total Permissions:** 96
- **Manager Assigned:** 54
- **Admin Assigned:** 96 (all)

## Testing Permissions

### Test as Manager
1. Login with manager credentials
2. Try accessing different sections
3. Verify you can/cannot perform actions based on permissions

### Test Permission Checks
```php
// In controller
if (!auth()->user()->hasPermission('users.edit')) {
    abort(403, 'Unauthorized action.');
}

// In blade
@if(auth()->user()->hasPermission('users.create'))
    <button>Create User</button>
@endif
```

## Troubleshooting

### Permission Not Working?
1. Check if permission exists: Admin → Permissions
2. Check if role is assigned: Edit permission → Check role
3. Verify user's role: Check users table
4. Clear cache: `php artisan cache:clear`
5. Check middleware is applied to route

### Creating Permission Fails?
1. Check for duplicate names (names must be unique)
2. Verify all required fields are filled
3. Check database connection
4. Review error message for specifics

## Quick Commands

```bash
# View all permissions
php artisan tinker --execute="\App\Models\Permission::all(['name', 'display_name', 'module'])->each(fn(\$p) => echo \$p->name . ' - ' . \$p->display_name . PHP_EOL);"

# Count permissions per module
php artisan tinker --execute="\App\Models\Permission::selectRaw('module, count(*) as count')->groupBy('module')->get()->each(fn(\$m) => echo \$m->module . ': ' . \$m->count . PHP_EOL);"

# List manager permissions
php artisan tinker --execute="DB::table('role_permissions')->where('role_name', 'manager')->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')->get(['permissions.name'])->each(fn(\$p) => echo \$p->name . PHP_EOL);"

# Reseed all permissions
php artisan db:seed --class=RolePermissionSeeder
```

## Best Practices

1. **Be Consistent** - Follow the `module.action` naming convention
2. **Be Descriptive** - Use clear display names and descriptions
3. **Group Logically** - Use appropriate module names
4. **Test Thoroughly** - Verify permissions work as expected
5. **Document Changes** - Keep track of new permissions added
6. **Use Granular Permissions** - Separate view, create, edit, delete
7. **Review Regularly** - Audit permissions periodically

---

**Quick Access:** http://localhost/AITO/admin/permissions/create  
**Documentation:** See ROLE_PERMISSION_SYSTEM.md for complete details
