<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class DsaSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'problem_id',
        'contest_id',
        'code',
        'language',
        'status',
        'error_message',
        'execution_time',
        'memory_used',
        'test_results',
        'score',
        'points_earned',
        'submission_number',
        'is_final_submission',
        'runtime_ms',
        'memory_kb',
        'compiler_version',
        'submitted_at'
    ];

    protected $casts = [
        'test_results' => 'array',
        'execution_time' => 'float',
        'memory_used' => 'float',
        'score' => 'integer',
        'points_earned' => 'integer',
        'submission_number' => 'integer',
        'is_final_submission' => 'boolean',
        'runtime_ms' => 'integer',
        'memory_kb' => 'integer',
        'submitted_at' => 'datetime'
    ];

    protected $appends = [
        'status_color',
        'formatted_execution_time',
        'formatted_memory',
        'success_rate'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function problem(): BelongsTo
    {
        return $this->belongsTo(DsaProblem::class, 'problem_id');
    }

    public function contest(): BelongsTo
    {
        return $this->belongsTo(DsaContest::class, 'contest_id');
    }

    // Scopes for filtering
    public function scopeAccepted(Builder $query): Builder
    {
        return $query->where('status', 'accepted');
    }

    public function scopeByUser(Builder $query, int $userId): Builder
    {
        return $query->where('user_id', $userId);
    }

    public function scopeByProblem(Builder $query, int $problemId): Builder
    {
        return $query->where('problem_id', $problemId);
    }

    public function scopeByLanguage(Builder $query, string $language): Builder
    {
        return $query->where('language', $language);
    }

    public function scopeByStatus(Builder $query, string $status): Builder
    {
        return $query->where('status', $status);
    }

    public function scopeInContest(Builder $query, int $contestId): Builder
    {
        return $query->where('contest_id', $contestId);
    }

    public function scopeRecent(Builder $query, int $days = 7): Builder
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }

    public function scopeFinalSubmissions(Builder $query): Builder
    {
        return $query->where('is_final_submission', true);
    }

    public function scopeWithScore(Builder $query, int $minScore = 0): Builder
    {
        return $query->where('score', '>=', $minScore);
    }

    // Accessors
    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'accepted' => 'success',
            'wrong_answer' => 'danger',
            'time_limit_exceeded' => 'warning',
            'memory_limit_exceeded' => 'warning',
            'runtime_error' => 'danger',
            'compilation_error' => 'danger',
            'pending' => 'info',
            'running' => 'primary',
            'partial_correct' => 'warning',
            default => 'secondary'
        };
    }

    public function getFormattedExecutionTimeAttribute(): string
    {
        if (!$this->execution_time) return 'N/A';
        
        if ($this->execution_time < 1) {
            return round($this->execution_time * 1000, 2) . ' ms';
        }
        
        return round($this->execution_time, 3) . ' s';
    }

    public function getFormattedMemoryAttribute(): string
    {
        if (!$this->memory_used) return 'N/A';
        
        if ($this->memory_used < 1024) {
            return round($this->memory_used, 2) . ' KB';
        }
        
        return round($this->memory_used / 1024, 2) . ' MB';
    }

    public function getSuccessRateAttribute(): float
    {
        if (!$this->test_results || !is_array($this->test_results)) {
            return 0.0;
        }

        $total = count($this->test_results);
        if ($total === 0) return 0.0;

        $passed = collect($this->test_results)->where('status', 'passed')->count();
        return round(($passed / $total) * 100, 2);
    }

    // Business Logic Methods
    public function isAccepted(): bool
    {
        return $this->status === 'accepted';
    }

    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    public function isRunning(): bool
    {
        return $this->status === 'running';
    }

    public function hasError(): bool
    {
        return in_array($this->status, [
            'compilation_error',
            'runtime_error',
            'wrong_answer',
            'time_limit_exceeded',
            'memory_limit_exceeded'
        ]);
    }

    public function getErrorType(): ?string
    {
        if (!$this->hasError()) return null;
        
        return match($this->status) {
            'compilation_error' => 'Compilation Error',
            'runtime_error' => 'Runtime Error',
            'wrong_answer' => 'Wrong Answer',
            'time_limit_exceeded' => 'Time Limit Exceeded',
            'memory_limit_exceeded' => 'Memory Limit Exceeded',
            default => 'Unknown Error'
        };
    }

    public function calculatePoints(): int
    {
        if (!$this->isAccepted()) return 0;
        
        $basePoints = $this->problem->difficulty === 'easy' ? 100 : 
                     ($this->problem->difficulty === 'medium' ? 200 : 300);
        
        // Bonus for faster submissions
        $timeBonus = $this->execution_time < 1 ? 50 : 0;
        
        // Bonus for memory efficiency
        $memoryBonus = $this->memory_used < 1024 ? 25 : 0;
        
        return $basePoints + $timeBonus + $memoryBonus;
    }

    public function updateFinalSubmissionStatus(): void
    {
        // Mark all previous submissions as non-final
        static::where('user_id', $this->user_id)
            ->where('problem_id', $this->problem_id)
            ->where('id', '!=', $this->id)
            ->update(['is_final_submission' => false]);
        
        // Mark this as final submission
        $this->update(['is_final_submission' => true]);
    }

    public function getSubmissionRank(): int
    {
        return static::where('problem_id', $this->problem_id)
            ->where('status', 'accepted')
            ->where('created_at', '<', $this->created_at)
            ->count() + 1;
    }

    public function canBeResubmitted(): bool
    {
        // Allow resubmission if not in contest or if contest allows multiple submissions
        if (!$this->contest_id) return true;
        
        return $this->contest && $this->contest->allow_multiple_submissions;
    }

    public function getLanguageIcon(): string
    {
        return match($this->language) {
            'python' => 'fab fa-python',
            'java' => 'fab fa-java',
            'javascript' => 'fab fa-js-square',
            'cpp', 'c++' => 'fas fa-code',
            'c' => 'fas fa-copyright',
            'go' => 'fab fa-google',
            'rust' => 'fas fa-cog',
            'kotlin' => 'fas fa-mobile-alt',
            'swift' => 'fab fa-swift',
            default => 'fas fa-code'
        };
    }

    // Static Methods
    public static function getSubmissionStats(int $userId, int $problemId = null): array
    {
        $query = static::where('user_id', $userId);
        
        if ($problemId) {
            $query->where('problem_id', $problemId);
        }
        
        $submissions = $query->get();
        
        return [
            'total' => $submissions->count(),
            'accepted' => $submissions->where('status', 'accepted')->count(),
            'wrong_answer' => $submissions->where('status', 'wrong_answer')->count(),
            'time_limit_exceeded' => $submissions->where('status', 'time_limit_exceeded')->count(),
            'memory_limit_exceeded' => $submissions->where('status', 'memory_limit_exceeded')->count(),
            'runtime_error' => $submissions->where('status', 'runtime_error')->count(),
            'compilation_error' => $submissions->where('status', 'compilation_error')->count(),
            'acceptance_rate' => $submissions->count() > 0 ? 
                round(($submissions->where('status', 'accepted')->count() / $submissions->count()) * 100, 2) : 0
        ];
    }

    public static function getUserLanguageStats(int $userId): array
    {
        return static::where('user_id', $userId)
            ->selectRaw('language, COUNT(*) as total, SUM(CASE WHEN status = "accepted" THEN 1 ELSE 0 END) as accepted')
            ->groupBy('language')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->language => [
                    'total' => $item->total,
                    'accepted' => $item->accepted,
                    'acceptance_rate' => $item->total > 0 ? round(($item->accepted / $item->total) * 100, 2) : 0
                ]];
            })
            ->toArray();
    }
}
