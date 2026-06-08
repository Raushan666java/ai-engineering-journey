<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class MonitaskTimeEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_id',
        'task_id',
        'description',
        'start_time',
        'end_time',
        'duration_minutes',
        'hourly_rate',
        'is_billable',
        'is_manual',
        'is_approved',
        'approved_by',
        'approved_at',
        'invoice_id',
        'screenshot_path',
        'activity_level',
        'mouse_clicks',
        'keyboard_strokes',
        'tags',
        'notes',
        'location',
        'device_info'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'approved_at' => 'datetime',
        'hourly_rate' => 'decimal:2',
        'is_billable' => 'boolean',
        'is_manual' => 'boolean',
        'is_approved' => 'boolean',
        'tags' => 'array',
        'device_info' => 'array',
        'activity_level' => 'integer',
        'mouse_clicks' => 'integer',
        'keyboard_strokes' => 'integer',
        'duration_minutes' => 'integer'
    ];

    protected $appends = [
        'duration_hours',
        'earnings',
        'duration_formatted',
        'date_formatted',
        'time_range',
        'productivity_score'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(MonitaskProject::class, 'project_id');
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(MonitaskTask::class, 'task_id');
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    // Scopes for filtering
    public function scopeBillable(Builder $query): Builder
    {
        return $query->where('is_billable', true);
    }

    public function scopeApproved(Builder $query): Builder
    {
        return $query->where('is_approved', true);
    }

    public function scopePendingApproval(Builder $query): Builder
    {
        return $query->where('is_billable', true)
            ->where('is_approved', false)
            ->whereNotNull('end_time');
    }

    public function scopeByUser(Builder $query, int $userId): Builder
    {
        return $query->where('user_id', $userId);
    }

    public function scopeByProject(Builder $query, int $projectId): Builder
    {
        return $query->where('project_id', $projectId);
    }

    public function scopeByTask(Builder $query, int $taskId): Builder
    {
        return $query->where('task_id', $taskId);
    }

    public function scopeRunning(Builder $query): Builder
    {
        return $query->whereNotNull('start_time')->whereNull('end_time');
    }

    public function scopeCompleted(Builder $query): Builder
    {
        return $query->whereNotNull('start_time')->whereNotNull('end_time');
    }

    public function scopeManual(Builder $query): Builder
    {
        return $query->where('is_manual', true);
    }

    public function scopeAutomatic(Builder $query): Builder
    {
        return $query->where('is_manual', false);
    }

    public function scopeForDate(Builder $query, Carbon $date): Builder
    {
        return $query->whereDate('start_time', $date);
    }

    public function scopeForDateRange(Builder $query, Carbon $startDate, Carbon $endDate): Builder
    {
        return $query->whereBetween('start_time', [$startDate, $endDate]);
    }

    public function scopeForWeek(Builder $query, Carbon $date = null): Builder
    {
        $date = $date ?? now();
        $startOfWeek = $date->copy()->startOfWeek();
        $endOfWeek = $date->copy()->endOfWeek();
        
        return $query->whereBetween('start_time', [$startOfWeek, $endOfWeek]);
    }

    public function scopeForMonth(Builder $query, Carbon $date = null): Builder
    {
        $date = $date ?? now();
        return $query->whereYear('start_time', $date->year)
                    ->whereMonth('start_time', $date->month);
    }

    public function scopeWithHighActivity(Builder $query, int $threshold = 70): Builder
    {
        return $query->where('activity_level', '>=', $threshold);
    }

    // Accessors
    public function getDurationHoursAttribute(): float
    {
        return round($this->duration_minutes / 60, 2);
    }

    public function getEarningsAttribute(): float
    {
        if (!$this->is_billable || !$this->hourly_rate) return 0;
        
        return round(($this->duration_minutes / 60) * $this->hourly_rate, 2);
    }

    public function getDurationFormattedAttribute(): string
    {
        if (!$this->duration_minutes) return '0m';
        
        $hours = floor($this->duration_minutes / 60);
        $minutes = $this->duration_minutes % 60;
        
        if ($hours > 0 && $minutes > 0) {
            return "{$hours}h {$minutes}m";
        } elseif ($hours > 0) {
            return "{$hours}h";
        } else {
            return "{$minutes}m";
        }
    }

    public function getDateFormattedAttribute(): string
    {
        return $this->start_time ? $this->start_time->format('M j, Y') : '';
    }

    public function getTimeRangeAttribute(): string
    {
        if (!$this->start_time) return 'Not started';
        
        if ($this->isRunning()) {
            return $this->start_time->format('H:i') . ' - Running';
        }
        
        if (!$this->end_time) return $this->start_time->format('H:i') . ' - ?';
        
        return $this->start_time->format('H:i') . ' - ' . $this->end_time->format('H:i');
    }

    public function getProductivityScoreAttribute(): int
    {
        if (!$this->activity_level) return 0;
        
        // Calculate productivity score based on activity level, clicks, and keystrokes
        $activityScore = $this->activity_level;
        $interactionScore = 0;
        
        if ($this->duration_minutes > 0) {
            $clicksPerMinute = ($this->mouse_clicks ?? 0) / $this->duration_minutes;
            $keystrokesPerMinute = ($this->keyboard_strokes ?? 0) / $this->duration_minutes;
            
            // Optimal range: 1-5 clicks per minute, 10-50 keystrokes per minute
            $clickScore = min(100, ($clicksPerMinute / 5) * 100);
            $keystrokeScore = min(100, ($keystrokesPerMinute / 50) * 100);
            
            $interactionScore = ($clickScore + $keystrokeScore) / 2;
        }
        
        return round(($activityScore * 0.7 + $interactionScore * 0.3));
    }

    // Business Logic Methods
    public function isRunning(): bool
    {
        return !is_null($this->start_time) && is_null($this->end_time);
    }

    public function isCompleted(): bool
    {
        return !is_null($this->start_time) && !is_null($this->end_time);
    }

    public function canBeApproved(): bool
    {
        return $this->is_billable && !$this->is_approved && $this->isCompleted();
    }

    public function canBeEdited(): bool
    {
        // Can't edit if already approved and invoiced
        if ($this->is_approved && $this->invoice_id) return false;
        
        // Can't edit if running
        if ($this->isRunning()) return false;
        
        // Can edit if within 24 hours of creation or if manual entry
        return $this->is_manual || $this->created_at->diffInHours(now()) <= 24;
    }

    public function start(): bool
    {
        if ($this->start_time) return false;
        
        // Stop any other running entries for this user
        static::where('user_id', $this->user_id)
            ->whereNull('end_time')
            ->whereNotNull('start_time')
            ->update(['end_time' => now()]);
        
        $this->update([
            'start_time' => now(),
            'end_time' => null,
            'duration_minutes' => 0
        ]);
        
        return true;
    }

    public function stop(): bool
    {
        if (!$this->isRunning()) return false;
        
        $endTime = now();
        $duration = $this->start_time->diffInMinutes($endTime);
        
        $this->update([
            'end_time' => $endTime,
            'duration_minutes' => $duration
        ]);
        
        // Update task progress
        if ($this->task) {
            $this->task->updateProgress();
        }
        
        return true;
    }

    public function approve(int $approvedBy): bool
    {
        if (!$this->canBeApproved()) return false;
        
        $this->update([
            'is_approved' => true,
            'approved_by' => $approvedBy,
            'approved_at' => now()
        ]);
        
        return true;
    }

    public function calculateDuration(): int
    {
        if (!$this->start_time || !$this->end_time) return 0;
        
        return $this->start_time->diffInMinutes($this->end_time);
    }

    public function updateDuration(): bool
    {
        $newDuration = $this->calculateDuration();
        
        if ($newDuration !== $this->duration_minutes) {
            $this->update(['duration_minutes' => $newDuration]);
            return true;
        }
        
        return false;
    }

    public function splitEntry(Carbon $splitTime): ?MonitaskTimeEntry
    {
        if (!$this->isCompleted() || $splitTime <= $this->start_time || $splitTime >= $this->end_time) {
            return null;
        }
        
        // Create second entry
        $secondEntry = static::create([
            'user_id' => $this->user_id,
            'project_id' => $this->project_id,
            'task_id' => $this->task_id,
            'description' => $this->description,
            'start_time' => $splitTime,
            'end_time' => $this->end_time,
            'duration_minutes' => $splitTime->diffInMinutes($this->end_time),
            'hourly_rate' => $this->hourly_rate,
            'is_billable' => $this->is_billable,
            'is_manual' => true,
            'tags' => $this->tags
        ]);
        
        // Update first entry
        $this->update([
            'end_time' => $splitTime,
            'duration_minutes' => $this->start_time->diffInMinutes($splitTime)
        ]);
        
        return $secondEntry;
    }

    public function mergeWith(MonitaskTimeEntry $otherEntry): bool
    {
        // Can only merge consecutive entries for same user/project/task
        if ($this->user_id !== $otherEntry->user_id ||
            $this->project_id !== $otherEntry->project_id ||
            $this->task_id !== $otherEntry->task_id) {
            return false;
        }
        
        // Determine chronological order
        $first = $this->start_time < $otherEntry->start_time ? $this : $otherEntry;
        $second = $this->start_time < $otherEntry->start_time ? $otherEntry : $this;
        
        // Update the first entry to span both periods
        $first->update([
            'end_time' => $second->end_time,
            'duration_minutes' => $first->start_time->diffInMinutes($second->end_time),
            'description' => $first->description . ($second->description ? '; ' . $second->description : ''),
            'mouse_clicks' => ($first->mouse_clicks ?? 0) + ($second->mouse_clicks ?? 0),
            'keyboard_strokes' => ($first->keyboard_strokes ?? 0) + ($second->keyboard_strokes ?? 0)
        ]);
        
        // Delete the second entry
        $second->delete();
        
        return true;
    }

    // Static Methods
    public static function getTimeStats(int $userId = null, Carbon $startDate = null, Carbon $endDate = null): array
    {
        $query = static::query();
        
        if ($userId) {
            $query->where('user_id', $userId);
        }
        
        if ($startDate && $endDate) {
            $query->whereBetween('start_time', [$startDate, $endDate]);
        }
        
        $entries = $query->completed()->get();
        
        return [
            'total_entries' => $entries->count(),
            'total_minutes' => $entries->sum('duration_minutes'),
            'total_hours' => round($entries->sum('duration_minutes') / 60, 2),
            'billable_hours' => round($entries->where('is_billable', true)->sum('duration_minutes') / 60, 2),
            'non_billable_hours' => round($entries->where('is_billable', false)->sum('duration_minutes') / 60, 2),
            'total_earnings' => $entries->where('is_billable', true)->sum(function ($entry) {
                return $entry->earnings;
            }),
            'average_session_length' => $entries->count() > 0 ? round($entries->avg('duration_minutes'), 2) : 0,
            'productivity_average' => $entries->count() > 0 ? round($entries->avg('activity_level'), 2) : 0
        ];
    }

    public static function getUserRunningEntry(int $userId): ?MonitaskTimeEntry
    {
        return static::where('user_id', $userId)->running()->first();
    }

    public static function getDailyBreakdown(int $userId, Carbon $date): array
    {
        $entries = static::where('user_id', $userId)
            ->forDate($date)
            ->completed()
            ->orderBy('start_time')
            ->get();
        
        $breakdown = [];
        $totalMinutes = 0;
        
        foreach ($entries as $entry) {
            $hour = $entry->start_time->format('H:00');
            
            if (!isset($breakdown[$hour])) {
                $breakdown[$hour] = [
                    'minutes' => 0,
                    'entries' => 0,
                    'projects' => []
                ];
            }
            
            $breakdown[$hour]['minutes'] += $entry->duration_minutes;
            $breakdown[$hour]['entries']++;
            $breakdown[$hour]['projects'][$entry->project->name] = 
                ($breakdown[$hour]['projects'][$entry->project->name] ?? 0) + $entry->duration_minutes;
            
            $totalMinutes += $entry->duration_minutes;
        }
        
        return [
            'breakdown' => $breakdown,
            'total_minutes' => $totalMinutes,
            'total_hours' => round($totalMinutes / 60, 2)
        ];
    }
}
