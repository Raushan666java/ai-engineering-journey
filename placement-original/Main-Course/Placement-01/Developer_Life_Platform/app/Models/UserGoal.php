<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Carbon\Carbon;

class UserGoal extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ai_teacher_subject_id',
        'learning_path_id',
        'title',
        'description',
        'goal_type',
        'category',
        'target_value',
        'target_unit',
        'current_value',
        'progress_percentage',
        'priority',
        'start_date',
        'target_date',
        'completed_date',
        'status',
        'is_recurring',
        'recurrence_pattern',
        'milestones',
        'rewards',
        'tracking_metrics',
        'streak_count',
        'best_streak',
        'last_progress_update',
        'progress_history',
        'motivation_note',
        'completion_reflection',
        'ai_insights',
        'recommendations',
        'is_public',
        'metadata'
    ];

    protected $casts = [
        'start_date' => 'date',
        'target_date' => 'date',
        'completed_date' => 'date',
        'last_progress_update' => 'datetime',
        'milestones' => 'array',
        'rewards' => 'array',
        'tracking_metrics' => 'array',
        'progress_history' => 'array',
        'ai_insights' => 'array',
        'recommendations' => 'array',
        'metadata' => 'array',
        'is_recurring' => 'boolean',
        'is_public' => 'boolean',
        'target_value' => 'integer',
        'current_value' => 'integer',
        'progress_percentage' => 'decimal:2',
        'streak_count' => 'integer',
        'best_streak' => 'integer'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function aiTeacherSubject(): BelongsTo
    {
        return $this->belongsTo(AITeacherSubject::class);
    }

    public function learningPath(): BelongsTo
    {
        return $this->belongsTo(LearningPath::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['not_started', 'in_progress']);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeByPriority($query, $priority)
    {
        return $query->where('priority', $priority);
    }

    public function scopeByType($query, $type)
    {
        return $query->where('goal_type', $type);
    }

    public function scopeDueToday($query)
    {
        return $query->where('target_date', '<=', now()->toDateString());
    }

    public function scopeOverdue($query)
    {
        return $query->where('target_date', '<', now()->toDateString())
                     ->whereIn('status', ['not_started', 'in_progress']);
    }

    public function scopeRecurring($query)
    {
        return $query->where('is_recurring', true);
    }

    // Accessors
    public function getDaysRemainingAttribute()
    {
        return $this->target_date ? now()->diffInDays($this->target_date, false) : null;
    }

    public function getDaysElapsedAttribute()
    {
        return $this->start_date ? $this->start_date->diffInDays(now()) : 0;
    }

    public function getIsOverdueAttribute()
    {
        return $this->target_date && $this->target_date->isPast() && $this->status !== 'completed';
    }

    public function getProgressBarColorAttribute()
    {
        if ($this->progress_percentage >= 100) return 'success';
        if ($this->progress_percentage >= 75) return 'info';
        if ($this->progress_percentage >= 50) return 'warning';
        return 'danger';
    }

    public function getStatusBadgeColorAttribute()
    {
        return match($this->status) {
            'completed' => 'success',
            'in_progress' => 'primary',
            'paused' => 'warning',
            'failed' => 'danger',
            default => 'secondary'
        };
    }

    // Business Logic Methods
    public function updateProgress($newValue = null)
    {
        if ($newValue !== null) {
            $this->current_value = $newValue;
        }

        if ($this->target_value > 0) {
            $this->progress_percentage = min(100, ($this->current_value / $this->target_value) * 100);
        }

        // Record progress history
        $this->recordProgressHistory();

        // Check if goal is completed
        if ($this->progress_percentage >= 100 && $this->status !== 'completed') {
            $this->markAsCompleted();
        }

        $this->last_progress_update = now();
        $this->save();

        return $this;
    }

    public function incrementProgress($amount = 1)
    {
        $this->current_value += $amount;
        return $this->updateProgress();
    }

    public function markAsCompleted()
    {
        $this->status = 'completed';
        $this->completed_date = now()->toDateString();
        $this->progress_percentage = 100;

        // Update streak for recurring goals
        if ($this->is_recurring) {
            $this->streak_count++;
            $this->best_streak = max($this->best_streak, $this->streak_count);
            $this->createNextRecurringGoal();
        }

        $this->save();
        $this->generateCompletionInsights();

        return $this;
    }

    public function pause()
    {
        $this->status = 'paused';
        $this->save();
        return $this;
    }

    public function resume()
    {
        $this->status = 'in_progress';
        $this->save();
        return $this;
    }

    public function markAsFailed()
    {
        $this->status = 'failed';
        
        // Reset streak for recurring goals
        if ($this->is_recurring) {
            $this->streak_count = 0;
        }

        $this->save();
        $this->generateFailureInsights();

        return $this;
    }

    protected function recordProgressHistory()
    {
        $history = $this->progress_history ?? [];
        $today = now()->toDateString();
        
        $history[$today] = [
            'value' => $this->current_value,
            'percentage' => $this->progress_percentage,
            'timestamp' => now()->toISOString()
        ];

        // Keep only last 30 days for performance
        if (count($history) > 30) {
            $history = array_slice($history, -30, 30, true);
        }

        $this->progress_history = $history;
    }

    protected function createNextRecurringGoal()
    {
        if (!$this->is_recurring || !$this->recurrence_pattern) {
            return;
        }

        $nextStartDate = $this->calculateNextStartDate();
        $nextTargetDate = $this->calculateNextTargetDate($nextStartDate);

        self::create([
            'user_id' => $this->user_id,
            'ai_teacher_subject_id' => $this->ai_teacher_subject_id,
            'learning_path_id' => $this->learning_path_id,
            'title' => $this->title,
            'description' => $this->description,
            'goal_type' => $this->goal_type,
            'category' => $this->category,
            'target_value' => $this->target_value,
            'target_unit' => $this->target_unit,
            'priority' => $this->priority,
            'start_date' => $nextStartDate,
            'target_date' => $nextTargetDate,
            'is_recurring' => true,
            'recurrence_pattern' => $this->recurrence_pattern,
            'milestones' => $this->milestones,
            'rewards' => $this->rewards,
            'tracking_metrics' => $this->tracking_metrics,
            'motivation_note' => $this->motivation_note
        ]);
    }

    protected function calculateNextStartDate()
    {
        return match($this->recurrence_pattern) {
            'daily' => now()->addDay()->toDateString(),
            'weekly' => now()->addWeek()->toDateString(),
            'monthly' => now()->addMonth()->toDateString(),
            default => now()->addDay()->toDateString()
        };
    }

    protected function calculateNextTargetDate($startDate)
    {
        $start = Carbon::parse($startDate);
        
        return match($this->recurrence_pattern) {
            'daily' => $start->addDay()->toDateString(),
            'weekly' => $start->addWeek()->toDateString(),
            'monthly' => $start->addMonth()->toDateString(),
            default => $start->addDay()->toDateString()
        };
    }

    public function generateCompletionInsights()
    {
        $insights = [
            'completion_date' => $this->completed_date,
            'days_taken' => $this->days_elapsed,
            'efficiency' => $this->days_elapsed > 0 ? ($this->target_value / $this->days_elapsed) : 0,
            'streak_achievement' => $this->is_recurring ? $this->streak_count : null
        ];

        $this->ai_insights = array_merge($this->ai_insights ?? [], ['completion' => $insights]);
        $this->save();

        return $insights;
    }

    public function generateFailureInsights()
    {
        $insights = [
            'failure_date' => now()->toDateString(),
            'progress_at_failure' => $this->progress_percentage,
            'days_attempted' => $this->days_elapsed,
            'potential_causes' => $this->analyzePotentialCauses()
        ];

        $this->ai_insights = array_merge($this->ai_insights ?? [], ['failure' => $insights]);
        $this->save();

        return $insights;
    }

    protected function analyzePotentialCauses()
    {
        $causes = [];
        
        if ($this->progress_percentage < 25) {
            $causes[] = 'Low engagement - goal may be too ambitious';
        }
        
        if ($this->days_elapsed > ($this->target_date->diffInDays($this->start_date) * 1.5)) {
            $causes[] = 'Timeline exceeded - poor time management';
        }
        
        return $causes;
    }

    // Static Methods
    public static function createDailyGoal($userId, $title, $targetValue, $unit = 'count')
    {
        return self::create([
            'user_id' => $userId,
            'title' => $title,
            'goal_type' => 'daily',
            'target_value' => $targetValue,
            'target_unit' => $unit,
            'start_date' => now()->toDateString(),
            'target_date' => now()->toDateString(),
            'is_recurring' => true,
            'recurrence_pattern' => 'daily',
            'status' => 'in_progress'
        ]);
    }

    public static function getUserGoalStats($userId)
    {
        $goals = self::where('user_id', $userId);
        
        return [
            'total' => $goals->count(),
            'completed' => $goals->completed()->count(),
            'active' => $goals->active()->count(),
            'overdue' => $goals->overdue()->count(),
            'completion_rate' => $goals->count() > 0 ? 
                ($goals->completed()->count() / $goals->count()) * 100 : 0
        ];
    }
}