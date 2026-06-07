<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LearningProgress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'learning_path_id',
        'step_id',
        'status',
        'score',
        'time_spent',
        'attempts',
        'mastery_level',
        'feedback',
        'ai_insights',
        'completion_date',
        'last_accessed_at'
    ];

    protected $casts = [
        'score' => 'decimal:2',
        'time_spent' => 'integer',
        'attempts' => 'integer',
        'ai_insights' => 'array',
        'completion_date' => 'datetime',
        'last_accessed_at' => 'datetime'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function learningPath(): BelongsTo
    {
        return $this->belongsTo(LearningPath::class);
    }

    public function step(): BelongsTo
    {
        return $this->belongsTo(LearningStep::class, 'step_id');
    }

    // Scopes
    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeInProgress($query)
    {
        return $query->where('status', 'in_progress');
    }

    public function scopeByMasteryLevel($query, $level)
    {
        return $query->where('mastery_level', $level);
    }

    // Accessors
    public function getStatusBadgeAttribute(): string
    {
        return match($this->status) {
            'not_started' => 'secondary',
            'in_progress' => 'primary',
            'completed' => 'success',
            'mastered' => 'warning',
            default => 'light'
        };
    }

    public function getMasteryBadgeAttribute(): string
    {
        return match($this->mastery_level) {
            'novice' => 'danger',
            'beginner' => 'warning',
            'intermediate' => 'info',
            'advanced' => 'primary',
            'expert' => 'success',
            default => 'secondary'
        };
    }

    public function getProgressPercentageAttribute(): float
    {
        return match($this->status) {
            'not_started' => 0,
            'in_progress' => 50,
            'completed' => 100,
            'mastered' => 100,
            default => 0
        };
    }

    // Business Methods
    public function updateProgress(array $data): void
    {
        $this->update(array_merge($data, [
            'last_accessed_at' => now(),
            'attempts' => $this->attempts + 1
        ]));

        // Update mastery level based on score
        if (isset($data['score'])) {
            $this->updateMasteryLevel($data['score']);
        }
    }

    public function markAsCompleted(float $score = null): void
    {
        $this->update([
            'status' => 'completed',
            'completion_date' => now(),
            'score' => $score ?? $this->score,
            'last_accessed_at' => now()
        ]);

        if ($score) {
            $this->updateMasteryLevel($score);
        }
    }

    private function updateMasteryLevel(float $score): void
    {
        $masteryLevel = match(true) {
            $score >= 95 => 'expert',
            $score >= 85 => 'advanced',
            $score >= 75 => 'intermediate',
            $score >= 60 => 'beginner',
            default => 'novice'
        };

        $this->update(['mastery_level' => $masteryLevel]);
    }

    public function generateAIInsights(): array
    {
        $insights = [];

        // Performance analysis
        if ($this->score) {
            if ($this->score < 60) {
                $insights[] = [
                    'type' => 'improvement_needed',
                    'message' => 'Consider reviewing the material and practicing more before moving forward.',
                    'recommendation' => 'Spend additional time on fundamental concepts'
                ];
            } elseif ($this->score >= 90) {
                $insights[] = [
                    'type' => 'excellent_performance',
                    'message' => 'Outstanding work! You have mastered this concept.',
                    'recommendation' => 'Ready to move to more advanced topics'
                ];
            }
        }

        // Attempt analysis
        if ($this->attempts > 3) {
            $insights[] = [
                'type' => 'multiple_attempts',
                'message' => 'Multiple attempts indicate this topic needs more attention.',
                'recommendation' => 'Consider seeking additional resources or help'
            ];
        }

        // Time analysis
        if ($this->step && $this->time_spent > ($this->step->estimated_time * 1.5)) {
            $insights[] = [
                'type' => 'time_management',
                'message' => 'This step took longer than expected.',
                'recommendation' => 'Focus on time management strategies'
            ];
        }

        return $insights;
    }

    // Static Methods
    public static function getOverallStats(User $user): array
    {
        $progress = self::where('user_id', $user->id)->get();

        return [
            'total_steps' => $progress->count(),
            'completed_steps' => $progress->where('status', 'completed')->count(),
            'mastered_steps' => $progress->where('status', 'mastered')->count(),
            'average_score' => $progress->where('score', '>', 0)->avg('score') ?? 0,
            'total_time_spent' => $progress->sum('time_spent'),
            'mastery_distribution' => $progress->groupBy('mastery_level')->map->count()
        ];
    }

    public static function getSubjectProgress(User $user, AITeacherSubject $subject): array
    {
        $subjectPaths = $user->learningPaths()->where('subject_id', $subject->id)->get();
        $stepIds = $subjectPaths->flatMap->steps->pluck('id');
        
        $progress = self::where('user_id', $user->id)
            ->whereIn('step_id', $stepIds)
            ->get();

        return [
            'total_steps' => $progress->count(),
            'completed_steps' => $progress->where('status', 'completed')->count(),
            'completion_percentage' => $progress->count() > 0 
                ? ($progress->where('status', 'completed')->count() / $progress->count()) * 100 
                : 0,
            'average_score' => $progress->where('score', '>', 0)->avg('score') ?? 0,
            'weak_areas' => self::identifyWeakAreas($progress),
            'strong_areas' => self::identifyStrongAreas($progress)
        ];
    }

    private static function identifyWeakAreas($progress): array
    {
        return $progress
            ->where('score', '<', 70)
            ->groupBy('step.title')
            ->keys()
            ->take(3)
            ->toArray();
    }

    private static function identifyStrongAreas($progress): array
    {
        return $progress
            ->where('score', '>=', 90)
            ->groupBy('step.title')
            ->keys()
            ->take(3)
            ->toArray();
    }
}
