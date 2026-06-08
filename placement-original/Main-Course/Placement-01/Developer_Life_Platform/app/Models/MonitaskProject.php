<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class MonitaskProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'client_id',
        'owner_id',
        'status',
        'priority',
        'start_date',
        'end_date',
        'deadline',
        'budget',
        'hourly_rate',
        'currency',
        'estimated_hours',
        'progress_percentage',
        'color',
        'is_billable',
        'is_active',
        'completion_date',
        'archived_at'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'deadline' => 'date',
        'completion_date' => 'date',
        'archived_at' => 'datetime',
        'budget' => 'decimal:2',
        'hourly_rate' => 'decimal:2',
        'progress_percentage' => 'integer',
        'is_billable' => 'boolean',
        'is_active' => 'boolean'
    ];

    protected $attributes = [
        'status' => 'planning',
        'priority' => 'medium',
        'progress_percentage' => 0,
        'is_billable' => true,
        'is_active' => true,
        'currency' => 'USD'
    ];

    // Relationships
    public function client(): BelongsTo
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(MonitaskTask::class, 'project_id');
    }

    public function timeEntries(): HasMany
    {
        return $this->hasMany(MonitaskTimeEntry::class, 'project_id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'project_members', 'project_id', 'user_id')
                    ->withPivot([
                        'role', 
                        'hourly_rate', 
                        'can_view_reports', 
                        'can_manage_tasks', 
                        'screenshot_required', 
                        'activity_monitoring',
                        'joined_at'
                    ])
                    ->withTimestamps();
    }

    // Scopes
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeByStatus(Builder $query, string $status): Builder
    {
        return $query->where('status', $status);
    }

    public function scopeByPriority(Builder $query, string $priority): Builder
    {
        return $query->where('priority', $priority);
    }

    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('deadline', '<', now())
                    ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeForUser(Builder $query, User $user): Builder
    {
        return $query->where(function($q) use ($user) {
            $q->where('owner_id', $user->id)
              ->orWhere('client_id', $user->id)
              ->orWhereHas('members', function($memberQuery) use ($user) {
                  $memberQuery->where('user_id', $user->id);
              });
        });
    }

    // Accessors & Computed Properties
    public function getTotalHoursAttribute(): float
    {
        return round($this->timeEntries()->sum('duration_minutes') / 60, 2);
    }

    public function getTotalEarningsAttribute(): float
    {
        return $this->timeEntries()
                    ->where('is_billable', true)
                    ->sum(DB::raw('duration_minutes * (hourly_rate / 60)'));
    }

    public function getBillableHoursAttribute(): float
    {
        return round($this->timeEntries()
                         ->where('is_billable', true)
                         ->sum('duration_minutes') / 60, 2);
    }

    public function getNonBillableHoursAttribute(): float
    {
        return round($this->timeEntries()
                         ->where('is_billable', false)
                         ->sum('duration_minutes') / 60, 2);
    }

    public function getCompletedTasksCountAttribute(): int
    {
        return $this->tasks()->where('status', 'completed')->count();
    }

    public function getTotalTasksCountAttribute(): int
    {
        return $this->tasks()->count();
    }

    public function getTaskCompletionRateAttribute(): float
    {
        $total = $this->total_tasks_count;
        if ($total === 0) return 0;
        
        return round(($this->completed_tasks_count / $total) * 100, 1);
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'active' => 'success',
            'on_hold' => 'warning',
            'completed' => 'primary',
            'cancelled' => 'danger',
            'planning' => 'info',
            'archived' => 'secondary',
            default => 'secondary'
        };
    }

    public function getPriorityColorAttribute(): string
    {
        return match($this->priority) {
            'urgent' => 'danger',
            'high' => 'warning',
            'medium' => 'primary',
            'low' => 'success',
            default => 'secondary'
        };
    }

    public function getProgressBarColorAttribute(): string
    {
        return match(true) {
            $this->progress_percentage >= 90 => 'success',
            $this->progress_percentage >= 70 => 'primary',
            $this->progress_percentage >= 50 => 'info',
            $this->progress_percentage >= 25 => 'warning',
            default => 'danger'
        };
    }

    public function getBudgetUtilizationAttribute(): float
    {
        if (!$this->budget || $this->budget <= 0) return 0;
        
        return round(($this->total_earnings / $this->budget) * 100, 1);
    }

    public function getDaysRemainingAttribute(): ?int
    {
        if (!$this->deadline) return null;
        
        return max(0, now()->diffInDays($this->deadline, false));
    }

    public function getEstimatedCompletionDateAttribute(): ?Carbon
    {
        if ($this->progress_percentage >= 100) return $this->completion_date;
        
        if ($this->progress_percentage > 0 && $this->start_date) {
            $daysElapsed = $this->start_date->diffInDays(now());
            $estimatedTotalDays = ($daysElapsed / $this->progress_percentage) * 100;
            
            return $this->start_date->addDays($estimatedTotalDays);
        }
        
        return null;
    }

    // Business Logic Methods
    public function isOverdue(): bool
    {
        return $this->deadline && 
               $this->deadline->isPast() && 
               !in_array($this->status, ['completed', 'cancelled']);
    }

    public function isOnTrack(): bool
    {
        if (!$this->deadline || !$this->start_date) return true;
        
        $totalDays = $this->start_date->diffInDays($this->deadline);
        $elapsedDays = $this->start_date->diffInDays(now());
        
        if ($totalDays <= 0) return true;
        
        $expectedProgress = ($elapsedDays / $totalDays) * 100;
        
        return $this->progress_percentage >= ($expectedProgress - 10); // 10% tolerance
    }

    public function canUserAccess(User $user): bool
    {
        return $this->owner_id === $user->id ||
               $this->client_id === $user->id ||
               $this->members()->where('user_id', $user->id)->exists();
    }

    public function updateProgress(): void
    {
        $totalTasks = $this->tasks()->count();
        
        if ($totalTasks === 0) {
            $this->progress_percentage = 0;
        } else {
            $completedTasks = $this->tasks()->where('status', 'completed')->count();
            $this->progress_percentage = round(($completedTasks / $totalTasks) * 100);
        }
        
        // Auto-complete project if all tasks are done
        if ($this->progress_percentage >= 100 && $this->status !== 'completed') {
            $this->status = 'completed';
            $this->completion_date = now();
        }
        
        $this->save();
    }

    public function addMember(User $user, array $permissions = []): void
    {
        $defaultPermissions = [
            'role' => 'member',
            'can_view_reports' => false,
            'can_manage_tasks' => false,
            'screenshot_required' => true,
            'activity_monitoring' => true,
            'joined_at' => now()
        ];

        $this->members()->attach($user->id, array_merge($defaultPermissions, $permissions));
    }

    public function removeMember(User $user): void
    {
        $this->members()->detach($user->id);
    }

    public function archive(): void
    {
        $this->update([
            'is_active' => false,
            'archived_at' => now()
        ]);
    }

    public function restore(): void
    {
        $this->update([
            'is_active' => true,
            'archived_at' => null
        ]);
    }

    public function getTotalBudgetSpent(): float
    {
        return $this->total_earnings;
    }

    public function getRemainingBudget(): float
    {
        if (!$this->budget) return 0;
        
        return max(0, $this->budget - $this->total_earnings);
    }

    public function isOverBudget(): bool
    {
        if (!$this->budget) return false;
        
        return $this->total_earnings > $this->budget;
    }
}
