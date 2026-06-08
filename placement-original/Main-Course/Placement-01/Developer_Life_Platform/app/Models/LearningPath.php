<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class LearningPath extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'subject_id',
        'title',
        'description',
        'difficulty_level',
        'estimated_duration',
        'current_step',
        'completion_percentage',
        'ai_generated',
        'is_active',
        'target_completion_date',
        'started_at',
        'completed_at',
        'goals',
        'preferences'
    ];

    protected $casts = [
        'ai_generated' => 'boolean',
        'is_active' => 'boolean',
        'completion_percentage' => 'decimal:2',
        'estimated_duration' => 'integer',
        'current_step' => 'integer',
        'target_completion_date' => 'date',
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
        'goals' => 'array',
        'preferences' => 'array'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function subject(): BelongsTo
    {
        return $this->belongsTo(AITeacherSubject::class, 'subject_id');
    }

    public function steps(): HasMany
    {
        return $this->hasMany(LearningStep::class)->orderBy('order');
    }

    public function progress(): HasMany
    {
        return $this->hasMany(LearningProgress::class);
    }

    public function studySessions(): HasMany
    {
        return $this->hasMany(StudySession::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeCompleted($query)
    {
        return $query->where('completion_percentage', 100);
    }

    public function scopeInProgress($query)
    {
        return $query->where('completion_percentage', '>', 0)
                    ->where('completion_percentage', '<', 100);
    }

    public function scopeByDifficulty($query, $difficulty)
    {
        return $query->where('difficulty_level', $difficulty);
    }

    // Accessors
    public function getDifficultyBadgeAttribute(): string
    {
        return match($this->difficulty_level) {
            'beginner' => 'success',
            'intermediate' => 'warning',
            'advanced' => 'danger',
            default => 'secondary'
        };
    }

    public function getStatusAttribute(): string
    {
        if ($this->completion_percentage == 0) return 'not_started';
        if ($this->completion_percentage == 100) return 'completed';
        return 'in_progress';
    }

    public function getProgressBarColorAttribute(): string
    {
        $percentage = $this->completion_percentage;
        
        if ($percentage < 25) return 'danger';
        if ($percentage < 50) return 'warning';
        if ($percentage < 75) return 'info';
        return 'success';
    }

    public function getEstimatedTimeRemainingAttribute(): int
    {
        $completedSteps = $this->steps()->where('is_completed', true)->count();
        $totalSteps = $this->steps()->count();
        
        if ($totalSteps === 0 || $completedSteps === $totalSteps) return 0;
        
        $avgTimePerStep = $this->estimated_duration / $totalSteps;
        $remainingSteps = $totalSteps - $completedSteps;
        
        return round($avgTimePerStep * $remainingSteps);
    }

    // Business Methods
    public function updateProgress(): void
    {
        $totalSteps = $this->steps()->count();
        if ($totalSteps === 0) {
            $this->completion_percentage = 0;
            $this->save();
            return;
        }

        $completedSteps = $this->steps()->where('is_completed', true)->count();
        $percentage = ($completedSteps / $totalSteps) * 100;
        
        $this->update([
            'completion_percentage' => round($percentage, 2),
            'current_step' => $completedSteps + 1,
            'completed_at' => $percentage === 100 ? now() : null
        ]);
    }

    public function markAsStarted(): void
    {
        if (!$this->started_at) {
            $this->update(['started_at' => now()]);
        }
    }

    public function getNextStep(): ?LearningStep
    {
        return $this->steps()
            ->where('is_completed', false)
            ->orderBy('order')
            ->first();
    }

    public function getCurrentStep(): ?LearningStep
    {
        return $this->steps()
            ->where('order', $this->current_step)
            ->first();
    }

    public function canBeCompleted(): bool
    {
        return $this->steps()->where('is_completed', false)->count() === 0;
    }

    public function getTotalStudyTime(): int
    {
        return $this->studySessions()->sum('duration_minutes');
    }

    public function getAverageSessionTime(): float
    {
        $sessions = $this->studySessions()->whereNotNull('end_time');
        return $sessions->count() > 0 ? $sessions->avg('duration_minutes') : 0;
    }

    public function generatePersonalizedSteps(): void
    {
        $baseSteps = [
            [
                'title' => 'Foundation Assessment',
                'description' => 'Evaluate your current knowledge level',
                'content_type' => 'assessment',
                'order' => 1,
                'estimated_time' => 30
            ],
            [
                'title' => 'Core Concepts',
                'description' => 'Learn fundamental concepts',
                'content_type' => 'lesson',
                'order' => 2,
                'estimated_time' => 120
            ],
            [
                'title' => 'Practical Application',
                'description' => 'Apply concepts through exercises',
                'content_type' => 'practice',
                'order' => 3,
                'estimated_time' => 180
            ],
            [
                'title' => 'Advanced Topics',
                'description' => 'Explore advanced concepts',
                'content_type' => 'lesson',
                'order' => 4,
                'estimated_time' => 240
            ],
            [
                'title' => 'Final Assessment',
                'description' => 'Test your mastery',
                'content_type' => 'assessment',
                'order' => 5,
                'estimated_time' => 60
            ]
        ];

        foreach ($baseSteps as $stepData) {
            $this->steps()->create([
                'title' => $stepData['title'],
                'description' => $stepData['description'],
                'content_type' => $stepData['content_type'],
                'order' => $stepData['order'],
                'estimated_time' => $stepData['estimated_time'],
                'content_data' => $this->generateStepContent($stepData),
                'learning_objectives' => $this->generateLearningObjectives($stepData),
                'ai_generated' => true
            ]);
        }
    }

    private function generateStepContent(array $stepData): array
    {
        return [
            'type' => $stepData['content_type'],
            'subject' => $this->subject->name,
            'difficulty' => $this->difficulty_level,
            'generated_at' => now()->toISOString()
        ];
    }

    private function generateLearningObjectives(array $stepData): array
    {
        $baseObjectives = [
            'assessment' => ['Evaluate current knowledge', 'Identify learning gaps'],
            'lesson' => ['Understand core concepts', 'Apply theoretical knowledge'],
            'practice' => ['Solve practical problems', 'Build hands-on experience']
        ];

        return $baseObjectives[$stepData['content_type']] ?? ['Complete the learning step'];
    }

    // Static Methods
    public static function createPersonalizedPath(User $user, AITeacherSubject $subject, array $options): self
    {
        $path = self::create([
            'user_id' => $user->id,
            'subject_id' => $subject->id,
            'title' => "Personalized {$subject->name} Journey",
            'description' => "AI-generated learning path tailored to your goals and preferences",
            'difficulty_level' => $options['difficulty_level'] ?? 'beginner',
            'estimated_duration' => $options['timeline'] ?? $subject->estimated_duration,
            'target_completion_date' => now()->addDays($options['timeline'] ?? 30),
            'goals' => $options['goals'] ?? [],
            'preferences' => $options['preferences'] ?? [],
            'ai_generated' => true,
            'is_active' => true
        ]);

        $path->generatePersonalizedSteps();
        return $path;
    }
}
