<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LearningStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'learning_path_id',
        'title',
        'description',
        'content_type',
        'content_data',
        'order',
        'estimated_time',
        'prerequisites',
        'learning_objectives',
        'ai_generated',
        'is_completed',
        'completion_date',
        'difficulty',
        'points_reward'
    ];

    protected $casts = [
        'content_data' => 'array',
        'prerequisites' => 'array',
        'learning_objectives' => 'array',
        'ai_generated' => 'boolean',
        'is_completed' => 'boolean',
        'completion_date' => 'datetime',
        'estimated_time' => 'integer',
        'order' => 'integer',
        'points_reward' => 'integer'
    ];

    // Relationships
    public function learningPath(): BelongsTo
    {
        return $this->belongsTo(LearningPath::class);
    }

    public function assessments(): HasMany
    {
        return $this->hasMany(AIAssessment::class, 'step_id');
    }

    public function progress(): HasMany
    {
        return $this->hasMany(LearningProgress::class, 'step_id');
    }

    // Scopes
    public function scopeCompleted($query)
    {
        return $query->where('is_completed', true);
    }

    public function scopePending($query)
    {
        return $query->where('is_completed', false);
    }

    public function scopeByContentType($query, $type)
    {
        return $query->where('content_type', $type);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }

    // Accessors
    public function getContentTypeIconAttribute(): string
    {
        return match($this->content_type) {
            'lesson' => 'fas fa-book',
            'video' => 'fas fa-play-circle',
            'practice' => 'fas fa-code',
            'assessment' => 'fas fa-clipboard-check',
            'reading' => 'fas fa-file-text',
            'project' => 'fas fa-project-diagram',
            default => 'fas fa-circle'
        };
    }

    public function getContentTypeColorAttribute(): string
    {
        return match($this->content_type) {
            'lesson' => 'primary',
            'video' => 'info',
            'practice' => 'success',
            'assessment' => 'warning',
            'reading' => 'secondary',
            'project' => 'danger',
            default => 'light'
        };
    }

    public function getDifficultyBadgeAttribute(): string
    {
        return match($this->difficulty) {
            'easy' => 'success',
            'medium' => 'warning',
            'hard' => 'danger',
            default => 'secondary'
        };
    }

    public function getEstimatedTimeFormattedAttribute(): string
    {
        $minutes = $this->estimated_time;
        
        if ($minutes < 60) {
            return $minutes . ' min';
        } else {
            $hours = floor($minutes / 60);
            $remainingMinutes = $minutes % 60;
            return $hours . 'h' . ($remainingMinutes > 0 ? ' ' . $remainingMinutes . 'm' : '');
        }
    }

    // Business Methods
    public function markAsCompleted(User $user): bool
    {
        if ($this->is_completed) return false;

        $this->update([
            'is_completed' => true,
            'completion_date' => now()
        ]);

        // Update user progress
        $this->progress()->updateOrCreate(
            ['user_id' => $user->id],
            [
                'status' => 'completed',
                'completion_date' => now(),
                'score' => 100
            ]
        );

        // Award points to user
        if ($this->points_reward > 0) {
            $profile = $user->getOrCreateProfile();
            $profile->increment('total_points', $this->points_reward);
        }

        // Update learning path progress
        $this->learningPath->updateProgress();

        return true;
    }

    public function canBeAccessed(User $user): bool
    {
        // Check if prerequisites are met
        if (empty($this->prerequisites)) return true;

        foreach ($this->prerequisites as $prerequisiteId) {
            $prerequisite = self::find($prerequisiteId);
            if (!$prerequisite || !$prerequisite->is_completed) {
                return false;
            }
        }

        return true;
    }

    public function getProgressForUser(User $user): ?LearningProgress
    {
        return $this->progress()
            ->where('user_id', $user->id)
            ->first();
    }

    public function generateContent(): array
    {
        $baseContent = [
            'type' => $this->content_type,
            'title' => $this->title,
            'objectives' => $this->learning_objectives,
            'estimated_time' => $this->estimated_time,
            'generated_at' => now()->toISOString()
        ];

        switch ($this->content_type) {
            case 'lesson':
                return array_merge($baseContent, [
                    'sections' => $this->generateLessonSections(),
                    'key_concepts' => $this->generateKeyConcepts(),
                    'examples' => $this->generateExamples()
                ]);

            case 'practice':
                return array_merge($baseContent, [
                    'exercises' => $this->generatePracticeExercises(),
                    'hints' => $this->generateHints(),
                    'solutions' => $this->generateSolutions()
                ]);

            case 'assessment':
                return array_merge($baseContent, [
                    'questions' => $this->generateAssessmentQuestions(),
                    'time_limit' => $this->estimated_time,
                    'passing_score' => 70
                ]);

            default:
                return $baseContent;
        }
    }

    private function generateLessonSections(): array
    {
        return [
            [
                'title' => 'Introduction',
                'content' => "Welcome to {$this->title}. In this lesson, you will learn about the key concepts and practical applications.",
                'order' => 1
            ],
            [
                'title' => 'Core Concepts',
                'content' => 'Detailed explanation of the main concepts covered in this lesson.',
                'order' => 2
            ],
            [
                'title' => 'Practical Examples',
                'content' => 'Real-world examples and use cases to reinforce your understanding.',
                'order' => 3
            ],
            [
                'title' => 'Summary',
                'content' => 'Key takeaways and next steps for your learning journey.',
                'order' => 4
            ]
        ];
    }

    private function generateKeyConcepts(): array
    {
        return [
            'Fundamental principles and definitions',
            'Important terminology and vocabulary',
            'Core mechanisms and processes',
            'Best practices and common patterns'
        ];
    }

    private function generateExamples(): array
    {
        return [
            [
                'title' => 'Basic Example',
                'description' => 'Simple demonstration of the concept',
                'code' => '// Example code would be generated here',
                'explanation' => 'Step-by-step explanation of the example'
            ]
        ];
    }

    private function generatePracticeExercises(): array
    {
        return [
            [
                'title' => 'Exercise 1',
                'description' => 'Practice problem to reinforce learning',
                'difficulty' => 'easy',
                'instructions' => 'Follow these steps to complete the exercise',
                'starter_code' => '// Your code here',
                'expected_output' => 'Expected result description'
            ]
        ];
    }

    private function generateHints(): array
    {
        return [
            'Consider the problem step by step',
            'Think about the data structures involved',
            'Remember the key concepts from the lesson'
        ];
    }

    private function generateSolutions(): array
    {
        return [
            [
                'exercise_id' => 1,
                'solution_code' => '// Solution code would be here',
                'explanation' => 'Explanation of the solution approach'
            ]
        ];
    }

    private function generateAssessmentQuestions(): array
    {
        return [
            [
                'id' => 1,
                'type' => 'multiple_choice',
                'question' => 'Sample question about the topic',
                'options' => ['Option A', 'Option B', 'Option C', 'Option D'],
                'correct_answer' => 'A',
                'explanation' => 'Explanation of why this is correct'
            ]
        ];
    }

    // Static Methods
    public static function createForPath(LearningPath $path, array $stepData): self
    {
        $step = self::create(array_merge($stepData, [
            'learning_path_id' => $path->id,
            'ai_generated' => true,
            'points_reward' => self::calculatePointsReward($stepData)
        ]));

        $step->update([
            'content_data' => $step->generateContent()
        ]);

        return $step;
    }

    private static function calculatePointsReward(array $stepData): int
    {
        $basePoints = match($stepData['content_type']) {
            'lesson' => 10,
            'practice' => 15,
            'assessment' => 20,
            'project' => 25,
            default => 5
        };

        $difficultyMultiplier = match($stepData['difficulty'] ?? 'medium') {
            'easy' => 1,
            'medium' => 1.5,
            'hard' => 2,
            default => 1
        };

        return round($basePoints * $difficultyMultiplier);
    }
}
