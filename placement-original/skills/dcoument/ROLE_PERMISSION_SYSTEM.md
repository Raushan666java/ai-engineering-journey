# Role & Permission System Documentation

## Overview
Complete role and permission system for AITO Admin Panel with comprehensive access control for Manager and Admin roles.

## Seeder Information
**File:** `database/seeders/RolePermissionSeeder.php`
**Run Command:** `php artisan db:seed --class=RolePermissionSeeder`

## Statistics
- **Total Permissions:** 96
- **Manager Role Permissions:** 54
- **Admin Role Permissions:** 96 (All permissions)

## Permission Modules

### 1. Dashboard Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `dashboard.view` | View Dashboard | ✅ | ✅ |

### 2. User Management Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `users.view` | View Users | ✅ | ✅ |
| `users.create` | Create Users | ❌ | ✅ |
| `users.edit` | Edit Users | ✅ | ✅ |
| `users.delete` | Delete Users | ❌ | ✅ |
| `users.block` | Block/Unblock Users | ✅ | ✅ |
| `users.approve` | Approve Users | ✅ | ✅ |

### 3. Manager Management Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `managers.view` | View Managers | ❌ | ✅ |
| `managers.create` | Create Managers | ❌ | ✅ |
| `managers.edit` | Edit Managers | ❌ | ✅ |
| `managers.delete` | Delete Managers | ❌ | ✅ |

### 4. Permission Management Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `permissions.view` | View Permissions | ❌ | ✅ |
| `permissions.create` | Create Permissions | ❌ | ✅ |
| `permissions.edit` | Edit Permissions | ❌ | ✅ |
| `permissions.delete` | Delete Permissions | ❌ | ✅ |
| `permissions.assign` | Assign Permissions | ❌ | ✅ |

### 5. Location Management Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `locations.view` | View Locations | ✅ | ✅ |
| `locations.create` | Create Locations | ❌ | ✅ |
| `locations.edit` | Edit Locations | ❌ | ✅ |
| `locations.delete` | Delete Locations | ❌ | ✅ |

### 6. Wings Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `wings.view` | View Wings | ✅ | ✅ |
| `wings.create` | Create Wings | ❌ | ✅ |
| `wings.edit` | Edit Wings | ✅ | ✅ |
| `wings.delete` | Delete Wings | ❌ | ✅ |

### 7. Designations Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `designations.view` | View Designations | ✅ | ✅ |
| `designations.create` | Create Designations | ❌ | ✅ |
| `designations.edit` | Edit Designations | ✅ | ✅ |
| `designations.delete` | Delete Designations | ❌ | ✅ |

### 8. Designation Applications Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `designation_applications.view` | View Designation Applications | ✅ | ✅ |
| `designation_applications.approve` | Approve Designation Applications | ✅ | ✅ |

### 9. Reports & Analytics Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `reports.view` | View Reports | ✅ | ✅ |
| `reports.users` | View Users Report | ✅ | ✅ |
| `reports.donations` | View Donations Report | ✅ | ✅ |
| `reports.id_cards` | View ID Cards Report | ✅ | ✅ |
| `reports.designations` | View Designations Report | ✅ | ✅ |
| `reports.export` | Export Reports | ✅ | ✅ |

### 10. Donations Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `donations.view` | View Donations | ✅ | ✅ |
| `donations.create` | Create Donations | ✅ | ✅ |
| `donations.edit` | Edit Donations | ✅ | ✅ |
| `donations.delete` | Delete Donations | ❌ | ✅ |
| `donations.confirm` | Confirm Donations | ✅ | ✅ |

### 11. Bank Details Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `bank.view` | View Bank Details | ❌ | ✅ |
| `bank.edit` | Edit Bank Details | ❌ | ✅ |

### 12. Blog Management Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `blogs.view` | View Blogs | ✅ | ✅ |
| `blogs.create` | Create Blogs | ✅ | ✅ |
| `blogs.edit` | Edit Blogs | ✅ | ✅ |
| `blogs.delete` | Delete Blogs | ❌ | ✅ |
| `blogs.publish` | Publish Blogs | ✅ | ✅ |

### 13. Notices Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `notices.view` | View Notices | ✅ | ✅ |
| `notices.create` | Create Notices | ✅ | ✅ |
| `notices.edit` | Edit Notices | ✅ | ✅ |
| `notices.delete` | Delete Notices | ❌ | ✅ |

### 14. News & Events Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `news_events.view` | View News & Events | ✅ | ✅ |
| `news_events.create` | Create News & Events | ✅ | ✅ |
| `news_events.edit` | Edit News & Events | ✅ | ✅ |
| `news_events.delete` | Delete News & Events | ❌ | ✅ |

### 15. Scholarship Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `scholarships.view` | View Scholarships | ✅ | ✅ |
| `scholarships.create` | Create Scholarships | ❌ | ✅ |
| `scholarships.edit` | Edit Scholarships | ❌ | ✅ |
| `scholarships.delete` | Delete Scholarships | ❌ | ✅ |
| `scholarships.approve` | Approve Scholarship Applications | ✅ | ✅ |

### 16. Admit Cards Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `admit_cards.view` | View Admit Cards | ✅ | ✅ |
| `admit_cards.create` | Create Admit Cards | ❌ | ✅ |
| `admit_cards.edit` | Edit Admit Cards | ❌ | ✅ |
| `admit_cards.delete` | Delete Admit Cards | ❌ | ✅ |

### 17. Exam Centers Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `exam_centers.view` | View Exam Centers | ✅ | ✅ |
| `exam_centers.create` | Create Exam Centers | ❌ | ✅ |
| `exam_centers.edit` | Edit Exam Centers | ❌ | ✅ |
| `exam_centers.delete` | Delete Exam Centers | ❌ | ✅ |

### 18. Gallery Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `gallery.view` | View Gallery | ✅ | ✅ |
| `gallery.create` | Create Gallery | ✅ | ✅ |
| `gallery.edit` | Edit Gallery | ✅ | ✅ |
| `gallery.delete` | Delete Gallery | ❌ | ✅ |

### 19. Video Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `videos.view` | View Videos | ✅ | ✅ |
| `videos.create` | Create Videos | ✅ | ✅ |
| `videos.edit` | Edit Videos | ✅ | ✅ |
| `videos.delete` | Delete Videos | ❌ | ✅ |

### 20. Activity Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `activities.view` | View Activities | ✅ | ✅ |
| `activities.create` | Create Activities | ✅ | ✅ |
| `activities.edit` | Edit Activities | ✅ | ✅ |
| `activities.delete` | Delete Activities | ❌ | ✅ |

### 21. Awards Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `awards.view` | View Awards | ✅ | ✅ |
| `awards.create` | Create Awards | ❌ | ✅ |
| `awards.edit` | Edit Awards | ❌ | ✅ |
| `awards.delete` | Delete Awards | ❌ | ✅ |
| `awards.approve` | Approve Award Applications | ✅ | ✅ |

### 22. Website Settings Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `website_settings.view` | View Website Settings | ✅ | ✅ |
| `website_settings.edit` | Edit Website Settings | ❌ | ✅ |

### 23. Footer Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `footer.view` | View Footer Settings | ✅ | ✅ |
| `footer.edit` | Edit Footer Settings | ❌ | ✅ |

### 24. System Module
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `system.view_logs` | View System Logs | ✅ | ✅ |
| `system.settings` | System Settings | ❌ | ✅ |

### 25. General Permissions
| Permission | Display Name | Manager | Admin |
|------------|-------------|---------|-------|
| `content.view` | View Content | ✅ | ✅ |
| `content.manage` | Manage Content | ✅ | ✅ |
| `applications.view` | View Applications | ✅ | ✅ |
| `applications.approve` | Approve Applications | ✅ | ✅ |

## Manager Role Summary

### ✅ Full Access (Create, Read, Update, Delete)
- Dashboard
- Donations Management
- Reports & Analytics (with export)
- Content Management (Blogs, Notices, News & Events)
- Media Management (Gallery, Videos, Activities)

### ✅ Moderate Access (Read, Update, Approve)
- User Management (view, edit, block, approve - no create/delete)
- Designation Applications (view, approve)
- Organizational Structure (view, edit wings and designations)
- Scholarship Applications (view, approve)
- Award Applications (view, approve)

### ✅ View Only Access
- Location Management (Countries, States, Districts, Blocks, Panchayats)
- Admit Cards
- Exam Centers
- Website Settings
- Footer Settings
- System Logs

### ❌ No Access
- Manager Management (admin only)
- Permission Management (admin only)
- Bank Details (admin only)
- Creating new organizational structures
- Deleting critical content
- System Settings

## Admin Role Summary
**Full access to all 96 permissions** - Complete control over the entire system.

## Usage in Controllers

### Checking Permissions in Routes
```php
Route::middleware(['auth', 'permission:users.view'])->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
});
```

### Checking Permissions in Blade Templates
```blade
@if(auth()->user()->hasPermission('users.create'))
    <a href="{{ route('admin.users.create') }}" class="btn btn-primary">Create User</a>
@endif
```

### Checking Multiple Permissions
```blade
@if(auth()->user()->hasPermission('users.edit') || auth()->user()->hasPermission('users.delete'))
    <!-- Show action buttons -->
@endif
```

### Checking Role
```blade
@if(auth()->user()->role === 'admin')
    <!-- Admin only content -->
@endif
```

## Sidebar Menu Access Control

The admin sidebar uses these permission checks:
- User Management: `auth()->user()->role === 'admin'`
- Managers: `auth()->user()->role === 'admin'`
- Permissions: `auth()->user()->role === 'admin'`
- Location Management: `auth()->user()->hasPermission('system.settings')`
- Organizational Structure: `auth()->user()->hasPermission('system.settings')`
- Reports & Analytics: `auth()->user()->hasPermission('reports.view')`
- Donations: `auth()->user()->hasPermission('donations.view')`
- Bank Details: `auth()->user()->role === 'admin'`
- Publications & Media: `auth()->user()->hasPermission('content.view')`
- Academic Management: `auth()->user()->hasPermission('applications.view')`
- Media Gallery: `auth()->user()->hasPermission('content.view')`
- Awards Management: `auth()->user()->hasPermission('applications.view')`
- Website Settings: `auth()->user()->hasPermission('content.view')`

## Database Structure

### permissions table
- `id` - Primary key
- `name` - Permission name (e.g., 'users.view')
- `display_name` - Human readable name
- `module` - Module grouping (e.g., 'users', 'content')
- `description` - Permission description
- `created_at`, `updated_at` - Timestamps

### role_permissions table
- `id` - Primary key
- `role_name` - Role name (admin, manager, user, student)
- `permission_id` - Foreign key to permissions
- `status` - Status (active/inactive)
- `created_at`, `updated_at` - Timestamps

## Re-seeding Permissions

To reset and reseed all permissions:
```bash
php artisan db:seed --class=RolePermissionSeeder
```

⚠️ **Warning:** This will delete all existing permissions and role assignments, then create fresh ones.

## Adding New Permissions

1. Add new permission to `RolePermissionSeeder.php` in the `$permissions` array
2. Add permission name to `$managerPermissions` array if managers should have access
3. Run the seeder: `php artisan db:seed --class=RolePermissionSeeder`

## Next Steps for Implementation

1. ✅ **Completed:** All permissions created and assigned
2. 🔄 **Recommended:** Update all controllers to check specific permissions instead of just role
3. 🔄 **Recommended:** Update all Blade templates to use permission checks
4. 🔄 **Recommended:** Create a permission management UI for admins to modify permissions
5. 🔄 **Recommended:** Add audit logging for permission changes

## Test Access

### Login as Manager
Navigate to http://localhost/AITO/admin and login with a manager account. You should be able to:
- ✅ View dashboard
- ✅ View and edit users (but not delete)
- ✅ View and manage donations
- ✅ View all reports and export them
- ✅ Create and manage content (blogs, notices, news)
- ✅ View and approve applications
- ✅ Upload and manage gallery/videos
- ❌ Cannot access permission management
- ❌ Cannot access bank details
- ❌ Cannot delete users or critical data

### Login as Admin
Admin has unrestricted access to all features.

---

**Created:** January 9, 2026  
**Last Updated:** January 9, 2026  
**Version:** 1.0
