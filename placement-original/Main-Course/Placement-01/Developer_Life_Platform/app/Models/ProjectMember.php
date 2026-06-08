<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'user_id',
        'role',
        'hourly_rate',
        'can_view_reports',
        'can_manage_tasks',
        'screenshot_required',
        'activity_monitoring',
    ];

    protected $casts = [
        'can_view_reports' => 'boolean',
        'can_manage_tasks' => 'boolean',
        'screenshot_required' => 'boolean',
        'activity_monitoring' => 'boolean',
        'hourly_rate' => 'decimal:2',
    ];

    // Relationships
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Scopes
    public function scopeByProject($query, $projectId)
    {
        return $query->where('project_id', $projectId);
    }

    public function scopeByRole($query, $role)
    {
        return $query->where('role', $role);
    }

    public function scopeManagers($query)
    {
        return $query->where('role', 'manager');
    }

    public function scopeDevelopers($query)
    {
        return $query->whereIn('role', ['developer', 'designer']);
    }

    // Helper methods
    public function isManager(): bool
    {
        return $this->role === 'manager';
    }

    public function canViewProjectReports(): bool
    {
        return $this->can_view_reports || $this->isManager();
    }

    public function canManageProjectTasks(): bool
    {
        return $this->can_manage_tasks || $this->isManager();
    }

    public function requiresScreenshots(): bool
    {
        return $this->screenshot_required && !in_array($this->role, ['client', 'viewer']);
    }

    public function hasActivityMonitoring(): bool
    {
        return $this->activity_monitoring && !in_array($this->role, ['client', 'viewer']);
    }
}
