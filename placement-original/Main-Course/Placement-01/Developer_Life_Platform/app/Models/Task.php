<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'project_id',
        'assigned_to',
        'created_by',
        'name',
        'description',
        'status',
        'priority',
        'estimated_hours',
        'actual_hours',
        'billable',
        'hourly_rate',
        'start_date',
        'due_date',
        'completed_at',
        'tags',
        'attachments',
        'progress_percentage',
        'is_recurring',
        'recurring_pattern',
        'parent_task_id',
        'order_column',
        'metadata',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'due_date' => 'datetime',
        'completed_at' => 'datetime',
        'estimated_hours' => 'float',
        'actual_hours' => 'float',
        'hourly_rate' => 'decimal:2',
        'billable' => 'boolean',
        'is_recurring' => 'boolean',
        'tags' => 'array',
        'attachments' => 'array',
        'recurring_pattern' => 'array',
        'metadata' => 'array',
    ];

    // Relationships
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function assignedTo(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function parentTask(): BelongsTo
    {
        return $this->belongsTo(Task::class, 'parent_task_id');
    }

    public function subTasks(): HasMany
    {
        return $this->hasMany(Task::class, 'parent_task_id');
    }

    public function timeSessions(): HasMany
    {
        return $this->hasMany(TimeSession::class);
    }

    // Scopes
    public function scopeOpen($query)
    {
        return $query->whereIn('status', ['pending', 'in_progress']);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeOverdue($query)
    {
        return $query->where('due_date', '<', now())
            ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeDueToday($query)
    {
        return $query->whereDate('due_date', today())
            ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeDueThisWeek($query)
    {
        return $query->whereBetween('due_date', [now()->startOfWeek(), now()->endOfWeek()])
            ->whereNotIn('status', ['completed', 'cancelled']);
    }

    public function scopeHighPriority($query)
    {
        return $query->where('priority', 'high');
    }

    public function scopeBillable($query)
    {
        return $query->where('billable', true);
    }

    public function scopeAssignedTo($query, $userId)
    {
        return $query->where('assigned_to', $userId);
    }

    public function scopeCreatedBy($query, $userId)
    {
        return $query->where('created_by', $userId);
    }

    // Methods
    public function isCompleted(): bool
    {
        return $this->status === 'completed';
    }

    public function isOverdue(): bool
    {
        return $this->due_date && 
               $this->due_date < now() && 
               !$this->isCompleted();
    }

    public function isDueToday(): bool
    {
        return $this->due_date && 
               $this->due_date->isToday() && 
               !$this->isCompleted();
    }

    public function isDueThisWeek(): bool
    {
        return $this->due_date && 
               $this->due_date->between(now()->startOfWeek(), now()->endOfWeek()) && 
               !$this->isCompleted();
    }

    public function getDaysUntilDue(): int
    {
        if (!$this->due_date) {
            return 0;
        }

        return max(0, now()->diffInDays($this->due_date, false));
    }

    public function getTimeSpent(): float
    {
        return $this->timeSessions()->sum('duration') / 3600;
    }

    public function getTimeRemaining(): float
    {
        if (!$this->estimated_hours) {
            return 0;
        }

        return max(0, $this->estimated_hours - $this->getTimeSpent());
    }

    public function getProgressPercentage(): float
    {
        if ($this->progress_percentage !== null) {
            return $this->progress_percentage;
        }

        if (!$this->estimated_hours) {
            return $this->isCompleted() ? 100 : 0;
        }

        $timeSpent = $this->getTimeSpent();
        return min(100, round(($timeSpent / $this->estimated_hours) * 100, 2));
    }

    public function updateProgress(): self
    {
        $this->progress_percentage = $this->getProgressPercentage();
        $this->actual_hours = round($this->getTimeSpent(), 2);
        $this->save();

        return $this;
    }

    public function markAsCompleted(User $user = null): self
    {
        $this->status = 'completed';
        $this->completed_at = now();
        $this->progress_percentage = 100;
        $this->actual_hours = round($this->getTimeSpent(), 2);
        
        if ($user) {
            $this->metadata = array_merge($this->metadata ?: [], [
                'completed_by' => $user->id,
                'completed_by_name' => $user->name,
            ]);
        }

        $this->save();

        return $this;
    }

    public function markAsInProgress(): self
    {
        $this->status = 'in_progress';
        $this->save();

        return $this;
    }

    public function markAsPending(): self
    {
        $this->status = 'pending';
        $this->save();

        return $this;
    }

    public function markAsCancelled(): self
    {
        $this->status = 'cancelled';
        $this->save();

        return $this;
    }

    public function assignTo(User $user): self
    {
        $this->assigned_to = $user->id;
        $this->save();

        return $this;
    }

    public function unassign(): self
    {
        $this->assigned_to = null;
        $this->save();

        return $this;
    }

    public function addTag(string $tag): self
    {
        $tags = $this->tags ?: [];
        
        if (!in_array($tag, $tags)) {
            $tags[] = $tag;
            $this->tags = $tags;
            $this->save();
        }

        return $this;
    }

    public function removeTag(string $tag): self
    {
        $tags = $this->tags ?: [];
        $tags = array_filter($tags, fn($t) => $t !== $tag);
        $this->tags = array_values($tags);
        $this->save();

        return $this;
    }

    public function hasTag(string $tag): bool
    {
        return in_array($tag, $this->tags ?: []);
    }

    public function addAttachment(string $path, string $originalName = null): self
    {
        $attachments = $this->attachments ?: [];
        
        $attachments[] = [
            'path' => $path,
            'original_name' => $originalName ?: basename($path),
            'uploaded_at' => now()->toISOString(),
        ];

        $this->attachments = $attachments;
        $this->save();

        return $this;
    }

    public function removeAttachment(string $path): self
    {
        $attachments = $this->attachments ?: [];
        $attachments = array_filter($attachments, fn($a) => $a['path'] !== $path);
        $this->attachments = array_values($attachments);
        $this->save();

        return $this;
    }

    public function getEarnings(): float
    {
        if (!$this->billable || !$this->hourly_rate) {
            return 0;
        }

        return round($this->getTimeSpent() * $this->hourly_rate, 2);
    }

    public function getStatusColor(): string
    {
        return match($this->status) {
            'pending' => 'gray',
            'in_progress' => 'blue',
            'completed' => 'green',
            'cancelled' => 'red',
            'on_hold' => 'yellow',
            default => 'gray'
        };
    }

    public function getStatusIcon(): string
    {
        return match($this->status) {
            'pending' => 'clock',
            'in_progress' => 'play',
            'completed' => 'check',
            'cancelled' => 'x',
            'on_hold' => 'pause',
            default => 'clock'
        };
    }

    public function getPriorityColor(): string
    {
        return match($this->priority) {
            'low' => 'green',
            'medium' => 'yellow',
            'high' => 'orange',
            'urgent' => 'red',
            default => 'gray'
        };
    }

    public function getPriorityIcon(): string
    {
        return match($this->priority) {
            'low' => 'arrow-down',
            'medium' => 'minus',
            'high' => 'arrow-up',
            'urgent' => 'alert-triangle',
            default => 'minus'
        };
    }

    public function canBeEdited(User $user): bool
    {
        return $this->assigned_to === $user->id || 
               $this->created_by === $user->id || 
               $this->project->canUserAccess($user);
    }

    public function canBeDeleted(User $user): bool
    {
        return $this->created_by === $user->id || 
               $this->project->isManager($user) || 
               $this->company->isOwner($user);
    }

    public function createRecurringInstance(): ?self
    {
        if (!$this->is_recurring || !$this->recurring_pattern) {
            return null;
        }

        $pattern = $this->recurring_pattern;
        $frequency = $pattern['frequency'] ?? 'weekly';
        $interval = $pattern['interval'] ?? 1;

        $nextDueDate = match($frequency) {
            'daily' => $this->due_date->copy()->addDays($interval),
            'weekly' => $this->due_date->copy()->addWeeks($interval),
            'monthly' => $this->due_date->copy()->addMonths($interval),
            'yearly' => $this->due_date->copy()->addYears($interval),
            default => null
        };

        if (!$nextDueDate) {
            return null;
        }

        return static::create([
            'company_id' => $this->company_id,
            'project_id' => $this->project_id,
            'assigned_to' => $this->assigned_to,
            'created_by' => $this->created_by,
            'name' => $this->name,
            'description' => $this->description,
            'priority' => $this->priority,
            'estimated_hours' => $this->estimated_hours,
            'billable' => $this->billable,
            'hourly_rate' => $this->hourly_rate,
            'due_date' => $nextDueDate,
            'tags' => $this->tags,
            'is_recurring' => $this->is_recurring,
            'recurring_pattern' => $this->recurring_pattern,
            'parent_task_id' => $this->parent_task_id,
        ]);
    }

    public function getSubTasksProgress(): array
    {
        $subTasks = $this->subTasks;
        $total = $subTasks->count();
        
        if ($total === 0) {
            return [
                'total' => 0,
                'completed' => 0,
                'percentage' => 0,
            ];
        }

        $completed = $subTasks->where('status', 'completed')->count();
        
        return [
            'total' => $total,
            'completed' => $completed,
            'percentage' => round(($completed / $total) * 100, 2),
        ];
    }

    public function getSummary(): array
    {
        return [
            'basic' => [
                'id' => $this->id,
                'name' => $this->name,
                'status' => $this->status,
                'priority' => $this->priority,
                'progress' => $this->getProgressPercentage(),
            ],
            'timing' => [
                'estimated_hours' => $this->estimated_hours,
                'actual_hours' => $this->getTimeSpent(),
                'remaining_hours' => $this->getTimeRemaining(),
                'due_date' => $this->due_date,
                'is_overdue' => $this->isOverdue(),
                'days_until_due' => $this->getDaysUntilDue(),
            ],
            'billing' => [
                'is_billable' => $this->billable,
                'hourly_rate' => $this->hourly_rate,
                'earnings' => $this->getEarnings(),
            ],
            'relations' => [
                'project_name' => $this->project->name,
                'assigned_to_name' => $this->assignedTo?->name,
                'created_by_name' => $this->createdBy?->name,
                'subtasks' => $this->getSubTasksProgress(),
            ],
            'metadata' => [
                'tags' => $this->tags,
                'attachments_count' => count($this->attachments ?: []),
                'time_sessions_count' => $this->timeSessions()->count(),
            ],
        ];
    }
}
