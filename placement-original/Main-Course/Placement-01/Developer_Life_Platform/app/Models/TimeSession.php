<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TimeSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_id',
        'task_id',
        'company_id',
        'description',
        'started_at',
        'ended_at',
        'duration',
        'is_billable',
        'hourly_rate',
        'manual_entry',
        'is_approved',
        'approved_by',
        'approved_at',
        'rejection_reason',
        'screenshot_enabled',
        'screenshot_frequency',
        'activity_enabled',
        'idle_time',
        'productive_time',
        'neutral_time',
        'unproductive_time',
        'productivity_score',
        'mouse_clicks',
        'keystrokes',
        'applications_used',
        'websites_visited',
        'metadata',
        'is_locked',
        'locked_at',
        'locked_by',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
        'approved_at' => 'datetime',
        'locked_at' => 'datetime',
        'hourly_rate' => 'decimal:2',
        'is_billable' => 'boolean',
        'manual_entry' => 'boolean',
        'is_approved' => 'boolean',
        'screenshot_enabled' => 'boolean',
        'activity_enabled' => 'boolean',
        'applications_used' => 'array',
        'websites_visited' => 'array',
        'metadata' => 'array',
        'is_locked' => 'boolean',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function lockedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'locked_by');
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(Screenshot::class);
    }

    public function activityLogs(): HasMany
    {
        return $this->hasMany(ActivityLog::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->whereNull('ended_at');
    }

    public function scopeCompleted($query)
    {
        return $query->whereNotNull('ended_at');
    }

    public function scopeBillable($query)
    {
        return $query->where('is_billable', true);
    }

    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function scopePending($query)
    {
        return $query->whereNull('is_approved');
    }

    public function scopeToday($query)
    {
        return $query->whereDate('started_at', today());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('started_at', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('started_at', now()->month)
            ->whereYear('started_at', now()->year);
    }

    // Methods
    public function isActive(): bool
    {
        return is_null($this->ended_at);
    }

    public function isCompleted(): bool
    {
        return !is_null($this->ended_at);
    }

    public function isPending(): bool
    {
        return is_null($this->is_approved);
    }

    public function isApproved(): bool
    {
        return $this->is_approved === true;
    }

    public function isRejected(): bool
    {
        return $this->is_approved === false;
    }

    public function canBeEdited(): bool
    {
        return !$this->is_locked && ($this->isPending() || !$this->isApproved());
    }

    public function canBeDeleted(): bool
    {
        return !$this->is_locked && $this->isPending();
    }

    public function stop(): self
    {
        if ($this->isActive()) {
            $this->ended_at = now();
            $this->duration = $this->ended_at->diffInSeconds($this->started_at);
            $this->save();
        }

        return $this;
    }

    public function pause(): self
    {
        if ($this->isActive()) {
            $this->ended_at = now();
            $this->duration = $this->ended_at->diffInSeconds($this->started_at);
            $this->save();
        }

        return $this;
    }

    public function resume(): self
    {
        if ($this->isCompleted()) {
            // Create a new session that continues from this one
            return static::create([
                'user_id' => $this->user_id,
                'project_id' => $this->project_id,
                'task_id' => $this->task_id,
                'company_id' => $this->company_id,
                'description' => $this->description,
                'started_at' => now(),
                'is_billable' => $this->is_billable,
                'hourly_rate' => $this->hourly_rate,
                'screenshot_enabled' => $this->screenshot_enabled,
                'screenshot_frequency' => $this->screenshot_frequency,
                'activity_enabled' => $this->activity_enabled,
            ]);
        }

        return $this;
    }

    public function approve(User $approver): self
    {
        $this->is_approved = true;
        $this->approved_by = $approver->id;
        $this->approved_at = now();
        $this->save();

        return $this;
    }

    public function reject(User $rejector, string $reason = null): self
    {
        $this->is_approved = false;
        $this->approved_by = $rejector->id;
        $this->approved_at = now();
        $this->rejection_reason = $reason;
        $this->save();

        return $this;
    }

    public function lock(User $locker): self
    {
        $this->is_locked = true;
        $this->locked_by = $locker->id;
        $this->locked_at = now();
        $this->save();

        return $this;
    }

    public function unlock(): self
    {
        $this->is_locked = false;
        $this->locked_by = null;
        $this->locked_at = null;
        $this->save();

        return $this;
    }

    public function getDurationInHours(): float
    {
        return round($this->duration / 3600, 2);
    }

    public function getDurationFormatted(): string
    {
        $hours = floor($this->duration / 3600);
        $minutes = floor(($this->duration % 3600) / 60);
        $seconds = $this->duration % 60;

        return sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);
    }

    public function getEarnings(): float
    {
        if (!$this->is_billable || !$this->hourly_rate) {
            return 0;
        }

        return round($this->getDurationInHours() * $this->hourly_rate, 2);
    }

    public function getProductivityPercentage(): float
    {
        if (!$this->duration) {
            return 0;
        }

        $productiveTime = $this->productive_time ?: 0;
        return round(($productiveTime / $this->duration) * 100, 2);
    }

    public function getIdlePercentage(): float
    {
        if (!$this->duration) {
            return 0;
        }

        $idleTime = $this->idle_time ?: 0;
        return round(($idleTime / $this->duration) * 100, 2);
    }

    public function getActivityLevel(): string
    {
        $productivity = $this->getProductivityPercentage();

        return match (true) {
            $productivity >= 80 => 'Very Active',
            $productivity >= 60 => 'Active',
            $productivity >= 40 => 'Moderate',
            $productivity >= 20 => 'Low',
            default => 'Very Low'
        };
    }

    public function hasScreenshots(): bool
    {
        return $this->screenshots()->exists();
    }

    public function getScreenshotsCount(): int
    {
        return $this->screenshots()->count();
    }

    public function getExpectedScreenshots(): int
    {
        if (!$this->screenshot_enabled || !$this->screenshot_frequency) {
            return 0;
        }

        return ceil($this->duration / ($this->screenshot_frequency * 60));
    }

    public function getScreenshotCompliancePercentage(): float
    {
        $expected = $this->getExpectedScreenshots();
        
        if ($expected === 0) {
            return 100;
        }

        $actual = $this->getScreenshotsCount();
        return round(($actual / $expected) * 100, 2);
    }

    public function getTopApplications(int $limit = 5): array
    {
        return $this->activityLogs()
            ->where('activity_type', 'app_usage')
            ->selectRaw('application_name, SUM(duration) as total_duration')
            ->groupBy('application_name')
            ->orderBy('total_duration', 'desc')
            ->limit($limit)
            ->get()
            ->toArray();
    }

    public function getTopWebsites(int $limit = 5): array
    {
        return $this->activityLogs()
            ->where('activity_type', 'website_visit')
            ->selectRaw('website_url, website_title, SUM(duration) as total_duration')
            ->groupBy('website_url', 'website_title')
            ->orderBy('total_duration', 'desc')
            ->limit($limit)
            ->get()
            ->toArray();
    }

    public function updateProductivityScore(): self
    {
        $totalDuration = $this->duration;
        
        if (!$totalDuration) {
            $this->productivity_score = 0;
            return $this;
        }

        $productiveTime = $this->productive_time ?: 0;
        $neutralTime = $this->neutral_time ?: 0;
        $unproductiveTime = $this->unproductive_time ?: 0;

        // Calculate weighted score
        $score = (
            ($productiveTime * 100) +
            ($neutralTime * 50) +
            ($unproductiveTime * 0)
        ) / $totalDuration;

        $this->productivity_score = round($score, 2);
        $this->save();

        return $this;
    }

    public function generateSummary(): array
    {
        return [
            'duration' => [
                'seconds' => $this->duration,
                'formatted' => $this->getDurationFormatted(),
                'hours' => $this->getDurationInHours(),
            ],
            'productivity' => [
                'score' => $this->productivity_score,
                'percentage' => $this->getProductivityPercentage(),
                'level' => $this->getActivityLevel(),
                'productive_time' => $this->productive_time,
                'idle_time' => $this->idle_time,
                'idle_percentage' => $this->getIdlePercentage(),
            ],
            'activity' => [
                'mouse_clicks' => $this->mouse_clicks,
                'keystrokes' => $this->keystrokes,
                'applications_count' => count($this->applications_used ?: []),
                'websites_count' => count($this->websites_visited ?: []),
            ],
            'screenshots' => [
                'enabled' => $this->screenshot_enabled,
                'frequency' => $this->screenshot_frequency,
                'count' => $this->getScreenshotsCount(),
                'expected' => $this->getExpectedScreenshots(),
                'compliance' => $this->getScreenshotCompliancePercentage(),
            ],
            'billing' => [
                'is_billable' => $this->is_billable,
                'hourly_rate' => $this->hourly_rate,
                'earnings' => $this->getEarnings(),
            ],
            'status' => [
                'is_active' => $this->isActive(),
                'is_approved' => $this->isApproved(),
                'is_locked' => $this->is_locked,
                'approval_status' => $this->isPending() ? 'pending' : ($this->isApproved() ? 'approved' : 'rejected'),
            ],
        ];
    }
}
