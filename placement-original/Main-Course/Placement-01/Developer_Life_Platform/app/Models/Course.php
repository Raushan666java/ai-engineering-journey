<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'short_description',
        'subject_id',
        'instructor_id',
        'thumbnail',
        'level',
        'status',
        'price',
        'is_free',
        'duration_hours',
        'total_lessons',
        'enrolled_count',
        'rating',
        'rating_count',
        'learning_outcomes',
        'prerequisites',
        'tags',
        'published_at',
    ];

    protected $casts = [
        'learning_outcomes' => 'array',
        'prerequisites' => 'array',
        'tags' => 'array',
        'is_free' => 'boolean',
        'price' => 'decimal:2',
        'rating' => 'decimal:2',
        'published_at' => 'datetime',
    ];

    // Relationships
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }

    // Scopes
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published');
    }

    public function scopeFree(Builder $query): Builder
    {
        return $query->where('is_free', true);
    }

    public function scopePaid(Builder $query): Builder
    {
        return $query->where('is_free', false);
    }

    public function scopeByLevel(Builder $query, string $level): Builder
    {
        return $query->where('level', $level);
    }

    public function scopePopular(Builder $query): Builder
    {
        return $query->orderBy('enrolled_count', 'desc');
    }

    public function scopeHighRated(Builder $query): Builder
    {
        return $query->where('rating', '>=', 4.0)->orderBy('rating', 'desc');
    }

    // Accessors
    public function getLevelBadgeAttribute(): string
    {
        return match($this->level) {
            'beginner' => '🟢',
            'intermediate' => '🟡',
            'advanced' => '🟠',
            'expert' => '🔴',
            default => '🟢'
        };
    }

    public function getStatusBadgeAttribute(): string
    {
        return match($this->status) {
            'draft' => '📝',
            'published' => '✅',
            'archived' => '📦',
            default => '📝'
        };
    }

    public function getFormattedPriceAttribute(): string
    {
        return $this->is_free ? 'Free' : '$' . number_format((float)$this->price, 2);
    }

    public function getDurationFormattedAttribute(): string
    {
        $hours = $this->duration_hours;
        
        if ($hours < 1) {
            return intval($hours * 60) . ' minutes';
        } elseif ($hours < 24) {
            return $hours . ' hour' . ($hours > 1 ? 's' : '');
        } else {
            $days = intval($hours / 24);
            $remainingHours = $hours % 24;
            
            $result = $days . ' day' . ($days > 1 ? 's' : '');
            if ($remainingHours > 0) {
                $result .= ' ' . $remainingHours . ' hour' . ($remainingHours > 1 ? 's' : '');
            }
            
            return $result;
        }
    }

    // Mutators
    public function setTitleAttribute(string $value): void
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    // Helper methods
    public function updateEnrollmentCount(): void
    {
        // TODO: Calculate from enrollments table when implemented
        $this->save();
    }

    public function updateRating(): void
    {
        // TODO: Calculate from course reviews when implemented
        $this->save();
    }

    public function isEnrolledBy(User $user): bool
    {
        // TODO: Check if user is enrolled when enrollments table is implemented
        return false;
    }

    public function canBeAccessedBy(?User $user): bool
    {
        if ($this->status !== 'published') {
            return false;
        }

        if ($this->is_free) {
            return true;
        }

        if (!$user) {
            return false;
        }

        return $this->isEnrolledBy($user);
    }

    public function getCompletionPercentage(User $user): int
    {
        // TODO: Calculate completion percentage when user progress is implemented
        return 0;
    }
}
