<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'slug',
        'description',
        'color',
        'budget',
        'hourly_rate',
        'currency',
        'status',
        'priority',
        'client_id',
        'manager_id',
        'start_date',
        'end_date',
        'estimated_hours',
        'billable',
        'track_time',
        'require_approval',
        'auto_start_timer',
        'screenshot_frequency',
        'screenshot_enabled',
        'activity_monitoring',
        'idle_timeout',
        'productivity_monitoring',
        'settings',
        'is_archived',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'budget' => 'decimal:2',
        'hourly_rate' => 'decimal:2',
        'estimated_hours' => 'decimal:2',
        'billable' => 'boolean',
        'track_time' => 'boolean',
        'require_approval' => 'boolean',
        'auto_start_timer' => 'boolean',
        'screenshot_enabled' => 'boolean',
        'activity_monitoring' => 'boolean',
        'productivity_monitoring' => 'boolean',
        'settings' => 'array',
        'is_archived' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($project) {
            if (empty($project->slug)) {
                $project->slug = Str::slug($project->name) . '-' . Str::random(6);
            }
        });
    }

    // Relationships
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'project_members')
            ->withPivot(['role', 'hourly_rate', 'joined_at'])
            ->withTimestamps();
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function timeSessions(): HasMany
    {
        return $this->hasMany(TimeSession::class);
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(Screenshot::class);
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class);
    }

    public function expenses(): HasMany
    {
        return $this->hasMany(Expense::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeInProgress($query)
    {
        return $query->where('status', 'in_progress');
    }

    public function scopeBillable($query)
    {
        return $query->where('billable', true);
    }

    public function scopeArchived($query)
    {
        return $query->where('is_archived', true);
    }

    public function scopeNotArchived($query)
    {
        return $query->where('is_archived', false);
    }

    // Methods
    public function getSetting($key, $default = null)
    {
        return data_get($this->settings, $key, $default);
    }

    public function setSetting($key, $value)
    {
        $settings = $this->settings ?: [];
        data_set($settings, $key, $value);
        $this->settings = $settings;
        return $this;
    }

    public function isManager(User $user): bool
    {
        return $this->manager_id === $user->id;
    }

    public function hasMember(User $user): bool
    {
        return $this->members()->where('user_id', $user->id)->exists();
    }

    public function canUserAccess(User $user): bool
    {
        return $this->isManager($user) || 
               $this->hasMember($user) || 
               $this->company->canUserAccess($user);
    }

    public function getBudgetUsed(): float
    {
        if (!$this->budget) {
            return 0;
        }

        $totalCost = $this->timeSessions()
            ->where('is_billable', true)
            ->get()
            ->sum(function ($session) {
                return ($session->duration / 3600) * ($session->hourly_rate ?: $this->hourly_rate ?: 0);
            });

        return round($totalCost, 2);
    }

    public function getBudgetRemaining(): float
    {
        if (!$this->budget) {
            return 0;
        }

        return max(0, $this->budget - $this->getBudgetUsed());
    }

    public function getBudgetUsagePercentage(): float
    {
        if (!$this->budget) {
            return 0;
        }

        return min(100, round(($this->getBudgetUsed() / $this->budget) * 100, 2));
    }

    public function getTotalHoursWorked(): float
    {
        return $this->timeSessions()->sum('duration') / 3600;
    }

    public function getHoursRemaining(): float
    {
        if (!$this->estimated_hours) {
            return 0;
        }

        return max(0, $this->estimated_hours - $this->getTotalHoursWorked());
    }

    public function getProgressPercentage(): float
    {
        if (!$this->estimated_hours) {
            return 0;
        }

        return min(100, round(($this->getTotalHoursWorked() / $this->estimated_hours) * 100, 2));
    }

    public function getCompletedTasksCount(): int
    {
        return $this->tasks()->where('status', 'completed')->count();
    }

    public function getTotalTasksCount(): int
    {
        return $this->tasks()->count();
    }

    public function getTaskCompletionPercentage(): float
    {
        $total = $this->getTotalTasksCount();
        
        if ($total === 0) {
            return 0;
        }

        return round(($this->getCompletedTasksCount() / $total) * 100, 2);
    }

    public function getActiveMembers(): int
    {
        return $this->timeSessions()
            ->where('started_at', '>=', now()->subDays(7))
            ->distinct('user_id')
            ->count();
    }

    public function getProductivityScore(): float
    {
        $sessions = $this->timeSessions()
            ->where('started_at', '>=', now()->subDays(30))
            ->whereNotNull('productivity_score')
            ->get();

        if ($sessions->isEmpty()) {
            return 0;
        }

        return round($sessions->avg('productivity_score'), 2);
    }

    public function isOverBudget(): bool
    {
        return $this->budget && $this->getBudgetUsed() > $this->budget;
    }

    public function isOverSchedule(): bool
    {
        return $this->end_date && $this->end_date < now() && $this->status !== 'completed';
    }

    public function getDaysUntilDeadline(): int
    {
        if (!$this->end_date) {
            return 0;
        }

        return max(0, now()->diffInDays($this->end_date, false));
    }

    public function getRecentActivity($days = 7): array
    {
        $sessions = $this->timeSessions()
            ->where('started_at', '>=', now()->subDays($days))
            ->with('user')
            ->orderBy('started_at', 'desc')
            ->get();

        return [
            'total_sessions' => $sessions->count(),
            'total_hours' => round($sessions->sum('duration') / 3600, 2),
            'unique_members' => $sessions->unique('user_id')->count(),
            'sessions' => $sessions->take(10)->toArray(),
        ];
    }

    public function getTimeAnalytics(?string $period = 'week'): array
    {
        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $sessions = $this->timeSessions()
            ->where('started_at', '>=', now()->subDays($days))
            ->get();

        $totalHours = $sessions->sum('duration') / 3600;
        $billableHours = $sessions->where('is_billable', true)->sum('duration') / 3600;
        
        return [
            'total_hours' => round($totalHours, 2),
            'billable_hours' => round($billableHours, 2),
            'non_billable_hours' => round($totalHours - $billableHours, 2),
            'billable_percentage' => $totalHours > 0 ? round(($billableHours / $totalHours) * 100, 2) : 0,
            'average_session_duration' => $sessions->isNotEmpty() ? round($sessions->avg('duration') / 3600, 2) : 0,
            'sessions_count' => $sessions->count(),
        ];
    }
}
