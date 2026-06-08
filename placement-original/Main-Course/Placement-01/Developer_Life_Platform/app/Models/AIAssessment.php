<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AIAssessment extends Model
{
    use HasFactory;

    // If your table name is not 'ai_assessments', uncomment below:
    // protected $table = 'ai_assessments';

    protected $fillable = [
        'step_id',
        'user_id',
        'title',
        'description',
        'assessment_type',
        'questions',
        'correct_answers',
        'time_limit',
        'difficulty',
        'ai_generated',
        'adaptive_settings',
        'max_attempts',
        'passing_score'
    ];

    protected $casts = [
        'questions' => 'array',
        'correct_answers' => 'array',
        'adaptive_settings' => 'array',
        'ai_generated' => 'boolean',
        'time_limit' => 'integer',
        'max_attempts' => 'integer',
        'passing_score' => 'decimal:2'
    ];

    // Relationships
    public function step(): BelongsTo
    {
        return $this->belongsTo(LearningStep::class, 'step_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function submissions(): HasMany
    {
        return $this->hasMany(AssessmentSubmission::class);
    }

    // Accessors
    public function getDifficultyBadgeAttribute(): string
    {
        return match($this->difficulty) {
            'easy' => 'success',
            'medium' => 'warning',
            'hard' => 'danger',
            default => 'secondary'
        };
    }

    public function getTypeBadgeAttribute(): string
    {
        return match($this->assessment_type) {
            'mcq' => 'primary',
            'coding' => 'success',
            'practical' => 'info',
            'essay' => 'warning',
            'mixed' => 'secondary',
            default => 'light'
        };
    }

    // Business Methods
    public function generateAdaptiveQuestions(User $user): array
    {
        $userLevel = $this->getUserLevel($user);
        $weakAreas = method_exists($user, 'getWeakAreas') ? $user->getWeakAreas() : [];
        return $this->createQuestionsBasedOnProfile($userLevel, $weakAreas);
    }

    private function getUserLevel(User $user): string
    {
        $progress = method_exists($user, 'learningProgress')
            ? $user->learningProgress()->where('step_id', $this->step_id)->first()
            : null;
        return $progress ? $progress->mastery_level : 'beginner';
    }

    private function createQuestionsBasedOnProfile(string $level, array $weakAreas): array
    {
        $baseQuestions = $this->questions ?? [];
        $filteredQuestions = collect($baseQuestions)->filter(function ($question) use ($level) {
            $questionLevel = $question['difficulty'] ?? 'medium';
            return $this->isQuestionAppropriate($questionLevel, $level);
        });

        foreach ($weakAreas as $area) {
            $areaQuestions = $this->getQuestionsForArea($area);
            $filteredQuestions = $filteredQuestions->merge($areaQuestions);
        }

        return $filteredQuestions->shuffle()->take(10)->values()->toArray();
    }

    private function isQuestionAppropriate(string $questionLevel, string $userLevel): bool
    {
        $levels = ['beginner' => 1, 'intermediate' => 2, 'advanced' => 3, 'expert' => 4];
        $userLevelNum = $levels[$userLevel] ?? 1;
        $questionLevelNum = $levels[$questionLevel] ?? 2;
        return abs($userLevelNum - $questionLevelNum) <= 1;
    }

    private function getQuestionsForArea(string $area): array
    {
        return [
            [
                'id' => uniqid(),
                'type' => 'multiple_choice',
                'question' => "Question about {$area}",
                'options' => ['Option A', 'Option B', 'Option C', 'Option D'],
                'correct_answer' => 'A',
                'area' => $area,
                'difficulty' => 'medium'
            ]
        ];
    }

    public function evaluateSubmission(array $answers): array
    {
        $questions = $this->questions ?? [];
        $correctAnswers = $this->correct_answers ?? [];
        $totalQuestions = count($questions);
        $correctCount = 0;
        $detailedResults = [];

        foreach ($questions as $index => $question) {
            $userAnswer = $answers[$index] ?? null;
            $correctAnswer = $correctAnswers[$index] ?? null;
            $isCorrect = $this->isAnswerCorrect($userAnswer, $correctAnswer, $question);

            if ($isCorrect) {
                $correctCount++;
            }

            $detailedResults[] = [
                'question_id' => $question['id'] ?? $index,
                'user_answer' => $userAnswer,
                'correct_answer' => $correctAnswer,
                'is_correct' => $isCorrect,
                'explanation' => $question['explanation'] ?? null
            ];
        }

        $score = $totalQuestions > 0 ? ($correctCount / $totalQuestions) * 100 : 0;

        return [
            'score' => round($score, 2),
            'correct_count' => $correctCount,
            'total_questions' => $totalQuestions,
            'detailed_results' => $detailedResults,
            'passed' => $score >= $this->passing_score,
            'feedback' => $this->generateFeedback($score, $detailedResults),
            'weak_areas' => $this->identifyWeakAreas($detailedResults),
            'strong_areas' => $this->identifyStrongAreas($detailedResults),
            'recommendations' => $this->generateRecommendations($score, $detailedResults)
        ];
    }

    private function isAnswerCorrect($userAnswer, $correctAnswer, array $question): bool
    {
        if ($question['type'] === 'multiple_choice') {
            return $userAnswer === $correctAnswer;
        } elseif ($question['type'] === 'multiple_select') {
            return is_array($userAnswer) &&
                   is_array($correctAnswer) &&
                   array_diff($userAnswer, $correctAnswer) === [] &&
                   array_diff($correctAnswer, $userAnswer) === [];
        } elseif ($question['type'] === 'coding') {
            return $this->evaluateCodingAnswer($userAnswer, $question);
        }
        return false;
    }

    private function evaluateCodingAnswer($code, array $question): bool
    {
        $testCases = $question['test_cases'] ?? [];
        return !empty($code) && strlen(trim($code)) > 10;
    }

    private function generateFeedback(float $score, array $results): string
    {
        if ($score >= 90) {
            return "Excellent work! You have a strong understanding of the concepts.";
        } elseif ($score >= 80) {
            return "Very good performance! Minor areas for improvement.";
        } elseif ($score >= 70) {
            return "Good job! Review the incorrect answers to strengthen your understanding.";
        } elseif ($score >= 60) {
            return "You're making progress. Focus on the weak areas identified.";
        } else {
            return "Additional study is recommended. Consider reviewing the material before retaking.";
        }
    }

    private function identifyWeakAreas(array $results): array
    {
        return collect($results)
            ->where('is_correct', false)
            ->pluck('question_id')
            ->take(3)
            ->toArray();
    }

    private function identifyStrongAreas(array $results): array
    {
        return collect($results)
            ->where('is_correct', true)
            ->pluck('question_id')
            ->take(3)
            ->toArray();
    }

    private function generateRecommendations(float $score, array $results): array
    {
        $recommendations = [];

        if ($score < 70) {
            $recommendations[] = [
                'type' => 'review',
                'message' => 'Review the lesson material before proceeding.',
                'action' => 'review_lesson'
            ];
        }

        if ($score >= 80) {
            $recommendations[] = [
                'type' => 'advance',
                'message' => 'Ready to move to the next topic!',
                'action' => 'next_step'
            ];
        }

        $incorrectCount = collect($results)->where('is_correct', false)->count();
        if ($incorrectCount > 3) {
            $recommendations[] = [
                'type' => 'practice',
                'message' => 'Additional practice exercises would be beneficial.',
                'action' => 'practice_more'
            ];
        }

        return $recommendations;
    }
}