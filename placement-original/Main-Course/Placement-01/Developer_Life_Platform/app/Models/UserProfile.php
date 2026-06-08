<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'avatar_url',
        'bio',
        'github_username',
        'linkedin_url',
        'resume_url',
        'location',
        'timezone',
        'experience_level',
        'primary_role',
        'career_goals',
        'learning_preferences',
        'skills',
        'coding_streak',
        'last_activity_date',
        'total_points',
    ];

    protected $casts = [
        'learning_preferences' => 'array',
        'skills' => 'array',
        'last_activity_date' => 'datetime',
        'total_points' => 'decimal:2',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Accessor for full GitHub URL
    public function getGithubUrlAttribute(): ?string
    {
        return $this->github_username ? "https://github.com/{$this->github_username}" : null;
    }

    // Mutator for experience level badge
    public function getExperienceBadgeAttribute(): string
    {
        return match($this->experience_level) {
            'beginner' => '🌱',
            'intermediate' => '🌿',
            'advanced' => '🌳',
            'expert' => '🏆',
            default => '🌱'
        };
    }

    // Update coding streak
    public function updateCodingStreak(): void
    {
        $today = now()->format('Y-m-d');
        $lastActivity = $this->last_activity_date?->format('Y-m-d');

        if ($lastActivity === $today) {
            return; // Already updated today
        }

        if ($lastActivity === now()->subDay()->format('Y-m-d')) {
            // Consecutive day - increment streak
            $this->increment('coding_streak');
        } else {
            // Streak broken - reset to 1
            $this->coding_streak = 1;
        }

        $this->last_activity_date = now();
        $this->save();
    }

    // Add points for achievements
    public function addPoints(float $points): void
    {
        $this->increment('total_points', $points);
    }
}
