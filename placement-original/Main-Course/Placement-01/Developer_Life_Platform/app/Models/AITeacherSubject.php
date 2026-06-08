<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class AITeacherSubject extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'description',
        'category',
        'difficulty_level',
        'prerequisites',
        'learning_objectives',
        'estimated_duration',
        'ai_persona',
        'teaching_style',
        'icon',
        'color',
        'is_active',
        'sort_order',
        'creator_id'
    ];

    protected $casts = [
        'prerequisites' => 'array',
        'learning_objectives' => 'array',
        'ai_persona' => 'array',
        'is_active' => 'boolean',
        'estimated_duration' => 'integer',
        'sort_order' => 'integer'
    ];

    // Relationships
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function learningPaths(): HasMany
    {
        return $this->hasMany(LearningPath::class, 'subject_id');
    }

    public function practiceSessions(): HasMany
    {
        return $this->hasMany(PracticeSession::class, 'subject_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
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

    public function getProgressForUser(User $user): float
    {
        $totalPaths = $this->learningPaths()->count();
        if ($totalPaths === 0) return 0;

        $userProgress = $user->learningPaths()
            ->where('subject_id', $this->id)
            ->avg('completion_percentage');

        return round($userProgress ?? 0, 2);
    }

    public function getEstimatedDurationFormatted(): string
    {
        $hours = $this->estimated_duration;
        
        if ($hours < 1) {
            return ($hours * 60) . ' minutes';
        } elseif ($hours < 24) {
            return $hours . ' hours';
        } else {
            $days = floor($hours / 24);
            $remainingHours = $hours % 24;
            return $days . ' days' . ($remainingHours > 0 ? ', ' . $remainingHours . ' hours' : '');
        }
    }

    // Static methods
    public static function getPopularSubjects(int $limit = 5): \Illuminate\Database\Eloquent\Collection
    {
        return static::withCount('learningPaths')
            ->orderBy('learning_paths_count', 'desc')
            ->active()
            ->take($limit)
            ->get();
    }

    public static function getCategoryStats(): array
    {
        return static::selectRaw('category, COUNT(*) as count')
            ->active()
            ->groupBy('category')
            ->pluck('count', 'category')
            ->toArray();
    }
}
