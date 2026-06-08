<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class MonitaskTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'parent_task_id',
        'assigned_to',
        'created_by',
        'title',
        'description',
        'status',
        'priority',
        'due_date',
        'start_date',
        'completion_date',
        'estimated_hours',
        'actual_hours',
        'progress_percentage',
        'tags',
        'is_billable',
        'hourly_rate',
        'is_milestone',
        'dependencies',
        'custom_fields',
        'notes',
        'approval_required',
        'approved_by',
        'approved_at'
    ];

    protected $casts = [
        'due_date' => 'datetime',
        'start_date' => 'datetime',
        'completion_date' => 'datetime',
        'approved_at' => 'datetime',
        'tags' => 'array',
        'dependencies' => 'array',
        'custom_fields' => 'array',
        'is_billable' => 'boolean',
        'is_milestone' => 'boolean',
        'approval_required' => 'boolean',
        'estimated_hours' => 'float',
        'actual_hours' => 'float',
        'hourly_rate' => 'float',
        'progress_percentage' => 'integer'
    ];

    protected $appends = [
        'status_color',
        'priority_color',
        'total_time',
        'duration_estimate',
        'completion_rate',
        'earnings_amount'
    ];

    // Relationships
    public function project(): BelongsTo
    {
        return $this->belongsTo(MonitaskProject::class, 'project_id');
    }

    public function parentTask(): BelongsTo
    {
        return $this->belongsTo(MonitaskTask::class, 'parent_task_id');
    }

    public function subtasks(): HasMany
    {
        return $this->hasMany(MonitaskTask::class, 'parent_task_id');
    }

    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function timeEntries(): HasMany
    {
        return $this->hasMany(MonitaskTimeEntry::class, 'task_id');
    }

    // Scopes for filtering
    public function scopeByProject(Builder $query, int $projectId): Builder
    {
        return $query->where('project_id', $projectId);
    }

    public function scopeByStatus(Builder $query, string $status): Builder
    {
        return $query->where('status', $status);
    }

    public function scopeByPriority(Builder $query, string $priority): Builder
    {
        return $query->where('priority', $priority);
    }

    public function scopeAssignedTo(Builder $query, int $userId): Builder
    {
        return $query->where('assigned_to', $userId);
    }

    public function scopeCreatedBy(Builder $query, int $userId): Builder
    {
        return $query->where('created_by', $userId);
    }

    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('due_date', '<', now())
            ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeDueSoon(Builder $query, int $hours = 24): Builder
    {
        return $query->whereBetween('due_date', [now(), now()->addHours($hours)])
            ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeCompleted(Builder $query): Builder
    {
        return $query->where('status', 'completed');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeBillable(Builder $query): Builder
    {
        return $query->where('is_billable', true);
    }

    public function scopeMilestones(Builder $query): Builder
    {
        return $query->where('is_milestone', true);
    }

    public function scopeParentTasks(Builder $query): Builder
    {
        return $query->whereNull('parent_task_id');
    }

    public function scopeSubtasks(Builder $query): Builder
    {
        return $query->whereNotNull('parent_task_id');
    }

    public function scopePendingApproval(Builder $query): Builder
    {
        return $query->where('approval_required', true)
            ->whereNull('approved_at')
            ->where('status', 'review');
    }

    // Accessors
    public function getTotalTimeAttribute(): float
    {
        return $this->timeEntries()->sum('duration_minutes') / 60;
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'todo' => 'secondary',
            'in_progress' => 'primary',
            'review' => 'warning',
            'completed' => 'success',
            'cancelled' => 'danger',
            'on_hold' => 'info',
            default => 'secondary'
        };
    }

    public function getPriorityColorAttribute(): string
    {
        return match($this->priority) {
            'urgent' => 'danger',
            'high' => 'warning',
            'medium' => 'info',
            'low' => 'success',
            default => 'secondary'
        };
    }

    public function getCompletionRateAttribute(): float
    {
        if (!$this->estimated_hours || $this->estimated_hours == 0) {
            return $this->status === 'completed' ? 100 : 0;
        }

        return min(100, round(($this->actual_hours / $this->estimated_hours) * 100, 2));
    }

    public function getEarningsAmountAttribute(): float
    {
        if (!$this->is_billable) return 0;
        
        $rate = $this->hourly_rate ?? $this->project->hourly_rate ?? 0;
        return $this->total_time * $rate;
    }

    public function getDurationEstimateAttribute(): string
    {
        if (!$this->estimated_hours) return 'Not estimated';
        
        $hours = floor($this->estimated_hours);
        $minutes = round(($this->estimated_hours - $hours) * 60);
        
        if ($hours > 0 && $minutes > 0) {
            return "{$hours}h {$minutes}m";
        } elseif ($hours > 0) {
            return "{$hours}h";
        } else {
            return "{$minutes}m";
        }
    }

    // Business Logic Methods
    public function isOverdue(): bool
    {
        return $this->due_date && 
               $this->due_date->isPast() && 
               !in_array($this->status, ['completed', 'cancelled']);
    }

    public function isDueSoon(int $hours = 24): bool
    {
        if (!$this->due_date || $this->isOverdue()) return false;
        
        return $this->due_date->diffInHours(now()) <= $hours;
    }

    public function canBeStarted(): bool
    {
        if (!$this->dependencies || empty($this->dependencies)) return true;
        
        foreach ($this->dependencies as $dependencyId) {
            $dependency = static::find($dependencyId);
            if (!$dependency || $dependency->status !== 'completed') {
                return false;
            }
        }
        
        return true;
    }

    public function canBeCompleted(): bool
    {
        // Check if all subtasks are completed
        if ($this->subtasks()->whereNotIn('status', ['completed', 'cancelled'])->count() > 0) {
            return false;
        }
        
        return in_array($this->status, ['in_progress', 'review']);
    }

    public function markAsCompleted(int $completedBy = null): bool
    {
        if (!$this->canBeCompleted()) return false;
        
        $this->update([
            'status' => 'completed',
            'completion_date' => now(),
            'progress_percentage' => 100,
            'actual_hours' => $this->total_time
        ]);
        
        // Update project progress
        $this->project->updateProgress();
        
        return true;
    }

    public function startTask(): bool
    {
        if (!$this->canBeStarted()) return false;
        
        $this->update([
            'status' => 'in_progress',
            'start_date' => $this->start_date ?? now()
        ]);
        
        return true;
    }

    public function pauseTask(): bool
    {
        if ($this->status !== 'in_progress') return false;
        
        $this->update(['status' => 'on_hold']);
        return true;
    }

    public function calculateProgress(): int
    {
        if ($this->status === 'completed') return 100;
        if ($this->status === 'cancelled') return 0;
        
        // Calculate based on subtasks if any
        $subtasksCount = $this->subtasks()->count();
        if ($subtasksCount > 0) {
            $completedSubtasks = $this->subtasks()->where('status', 'completed')->count();
            return round(($completedSubtasks / $subtasksCount) * 100);
        }
        
        // Calculate based on time logged vs estimated
        if ($this->estimated_hours > 0) {
            return min(90, round(($this->total_time / $this->estimated_hours) * 100));
        }
        
        // Default status-based progress
        return match($this->status) {
            'todo' => 0,
            'in_progress' => 30,
            'review' => 80,
            'on_hold' => 25,
            default => 0
        };
    }

    public function updateProgress(): void
    {
        $progress = $this->calculateProgress();
        $this->update(['progress_percentage' => $progress]);
    }

    public function getDependentTasks(): \Illuminate\Database\Eloquent\Collection
    {
        return static::whereJsonContains('dependencies', $this->id)->get();
    }

    public function assignTo(int $userId, string $note = null): bool
    {
        $this->update([
            'assigned_to' => $userId,
            'notes' => $note ? ($this->notes . "\n" . $note) : $this->notes
        ]);
        
        return true;
    }

    public function requiresApproval(): bool
    {
        return $this->approval_required && !$this->approved_at;
    }

    public function approve(int $approvedBy): bool
    {
        if (!$this->approval_required) return false;
        
        $this->update([
            'approved_by' => $approvedBy,
            'approved_at' => now(),
            'status' => 'completed'
        ]);
        
        return true;
    }

    public function getTimeSpent(): array
    {
        $entries = $this->timeEntries;
        
        return [
            'total_minutes' => $entries->sum('duration_minutes'),
            'total_hours' => round($entries->sum('duration_minutes') / 60, 2),
            'billable_hours' => round($entries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
            'entries_count' => $entries->count(),
            'last_entry' => $entries->sortByDesc('created_at')->first()?->created_at
        ];
    }

    // Static Methods
    public static function getTaskStats(int $projectId = null): array
    {
        $query = $projectId ? static::where('project_id', $projectId) : static::query();
        
        return [
            'total' => $query->count(),
            'todo' => $query->where('status', 'todo')->count(),
            'in_progress' => $query->where('status', 'in_progress')->count(),
            'review' => $query->where('status', 'review')->count(),
            'completed' => $query->where('status', 'completed')->count(),
            'cancelled' => $query->where('status', 'cancelled')->count(),
            'overdue' => $query->overdue()->count(),
            'due_soon' => $query->dueSoon()->count()
        ];
    }

    public static function getUserTaskLoad(int $userId): array
    {
        $tasks = static::where('assigned_to', $userId)
            ->whereNotIn('status', ['completed', 'cancelled'])
            ->get();
        
        return [
            'total_active_tasks' => $tasks->count(),
            'high_priority' => $tasks->where('priority', 'high')->count(),
            'urgent_priority' => $tasks->where('priority', 'urgent')->count(),
            'estimated_hours' => $tasks->sum('estimated_hours'),
            'overdue_tasks' => $tasks->filter->isOverdue()->count(),
            'due_soon_tasks' => $tasks->filter->isDueSoon()->count()
        ];
    }
}
