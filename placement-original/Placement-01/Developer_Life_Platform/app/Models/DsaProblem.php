<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class DsaProblem extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'difficulty',
        'category',
        'tags',
        'companies',
        'constraints',
        'examples',
        'hints',
        'time_limit',
        'memory_limit',
        'test_cases',
        'sample_solutions',
        'editorial',
        'created_by',
        'acceptance_rate',
        'total_submissions',
        'accepted_submissions',
        'is_premium',
        'is_active',
        'likes',
        'dislikes'
    ];

    protected $casts = [
        'tags' => 'array',
        'companies' => 'array',
        'examples' => 'array',
        'test_cases' => 'array',
        'sample_solutions' => 'array',
        'acceptance_rate' => 'decimal:2',
        'is_premium' => 'boolean',
        'is_active' => 'boolean',
    ];

    protected $attributes = [
        'difficulty' => 'easy',
        'is_premium' => false,
        'is_active' => true,
        'total_submissions' => 0,
        'accepted_submissions' => 0,
        'acceptance_rate' => 0.00,
        'likes' => 0,
        'dislikes' => 0
    ];

    // Relationships
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function submissions(): HasMany
    {
        return $this->hasMany(DsaSubmission::class, 'problem_id');
    }

    public function contests(): BelongsToMany
    {
        return $this->belongsToMany(DsaContest::class, 'contest_problems')
            ->withPivot(['points', 'order'])
            ->withTimestamps();
    }

    public function userSubmissions($userId): HasMany
    {
        return $this->submissions()->where('user_id', $userId);
    }

    // Accessors
    public function getDifficultyColorAttribute(): string
    {
        return match($this->difficulty) {
            'easy' => 'success',
            'medium' => 'warning',
            'hard' => 'danger',
            default => 'secondary'
        };
    }

    public function getCategoryBadgeAttribute(): string
    {
        return match($this->category) {
            'arrays' => 'primary',
            'strings' => 'info',
            'dynamic-programming' => 'warning',
            'tree' => 'success',
            'graph' => 'danger',
            'math' => 'info',
            'greedy' => 'secondary',
            default => 'secondary'
        };
    }

    public function getFormattedAcceptanceRateAttribute(): string
    {
        return number_format($this->acceptance_rate, 1) . '%';
    }

    public function getEstimatedTimeAttribute(): string
    {
        return match($this->difficulty) {
            'easy' => '15-30 min',
            'medium' => '30-60 min',
            'hard' => '60+ min',
            default => 'Unknown'
        };
    }

    public function getDifficultyPointsAttribute(): int
    {
        return match($this->difficulty) {
            'easy' => 1,
            'medium' => 2,
            'hard' => 3,
            default => 1
        };
    }

    // Mutators
    public function setTitleAttribute($value): void
    {
        $this->attributes['title'] = $value;
        if (empty($this->attributes['slug'])) {
            $this->attributes['slug'] = Str::slug($value) . '-' . time();
        }
    }

    // Scopes
    public function scopeByDifficulty(Builder $query, string $difficulty): Builder
    {
        return $query->where('difficulty', $difficulty);
    }

    public function scopeByCategory(Builder $query, string $category): Builder
    {
        return $query->where('category', $category);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeFree(Builder $query): Builder
    {
        return $query->where('is_premium', false);
    }

    public function scopeWithTag(Builder $query, string $tag): Builder
    {
        return $query->whereJsonContains('tags', $tag);
    }

    public function scopeByCompany(Builder $query, string $company): Builder
    {
        return $query->whereJsonContains('companies', $company);
    }

    public function scopePopular(Builder $query): Builder
    {
        return $query->where('total_submissions', '>', 1000);
    }

    public function scopeHighAcceptance(Builder $query): Builder
    {
        return $query->where('acceptance_rate', '>', 70);
    }

    // Business Logic Methods
    public function updateAcceptanceRate(): void
    {
        if ($this->total_submissions > 0) {
            $this->acceptance_rate = ($this->accepted_submissions / $this->total_submissions) * 100;
            $this->save();
        }
    }

    public function incrementSubmissions(bool $accepted = false): void
    {
        $this->increment('total_submissions');
        
        if ($accepted) {
            $this->increment('accepted_submissions');
        }
        
        $this->updateAcceptanceRate();
    }

    public function canUserAccess(User $user): bool
    {
        if (!$this->is_premium) {
            return true;
        }
        
        return $user->hasPremiumSubscription();
    }

    public function isPopular(): bool
    {
        return $this->total_submissions > 1000;
    }

    public function hasHighAcceptanceRate(): bool
    {
        return $this->acceptance_rate > 70;
    }

    public function hasUserSolved(User $user): bool
    {
        return $this->submissions()
            ->where('user_id', $user->id)
            ->where('status', 'accepted')
            ->exists();
    }

    public function getUserBestSubmission(User $user): ?DsaSubmission
    {
        return $this->submissions()
            ->where('user_id', $user->id)
            ->where('status', 'accepted')
            ->orderBy('runtime')
            ->first();
    }
}
