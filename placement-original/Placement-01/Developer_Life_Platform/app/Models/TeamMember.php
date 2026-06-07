<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TeamMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'company_id',
        'role',
        'hourly_rate',
        'can_view_reports',
        'can_view_team_reports',
        'can_manage_tasks',
        'can_manage_team',
        'can_export_data',
        'screenshot_required',
        'activity_monitoring',
        'can_edit_time',
        'can_delete_time',
        'working_hours',
        'permissions',
        'joined_at',
        'last_active_at',
        'is_active',
    ];

    protected $casts = [
        'can_view_reports' => 'boolean',
        'can_view_team_reports' => 'boolean',
        'can_manage_tasks' => 'boolean',
        'can_manage_team' => 'boolean',
        'can_export_data' => 'boolean',
        'screenshot_required' => 'boolean',
        'activity_monitoring' => 'boolean',
        'can_edit_time' => 'boolean',
        'can_delete_time' => 'boolean',
        'working_hours' => 'array',
        'permissions' => 'array',
        'joined_at' => 'datetime',
        'last_active_at' => 'datetime',
        'is_active' => 'boolean',
        'hourly_rate' => 'decimal:2',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByRole($query, $role)
    {
        return $query->where('role', $role);
    }

    public function scopeByCompany($query, $companyId)
    {
        return $query->where('company_id', $companyId);
    }

    // Helper methods
    public function hasPermission(string $permission): bool
    {
        $permissions = $this->permissions ?? [];
        return in_array($permission, $permissions) || $this->isOwnerOrAdmin();
    }

    public function isOwnerOrAdmin(): bool
    {
        return in_array($this->role, ['owner', 'admin']);
    }

    public function canManageTeam(): bool
    {
        return $this->can_manage_team || $this->isOwnerOrAdmin();
    }

    public function canViewReports(): bool
    {
        return $this->can_view_reports || $this->isOwnerOrAdmin();
    }
}
