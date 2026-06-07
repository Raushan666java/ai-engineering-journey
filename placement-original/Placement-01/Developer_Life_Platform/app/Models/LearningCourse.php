<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class LearningCourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'short_description',
        'thumbnail',
        'trailer_video',
        'instructor_id',
        'category_id',
        'level',
        'status',
        'price',
        'discounted_price',
        'tags',
        'learning_outcomes',
        'requirements',
        'duration_hours',
        'total_lectures',
        'total_quizzes',
        'total_assignments',
        'enrolled_count',
        'rating',
        'rating_count',
        'has_certificate',
        'certificate_threshold',
        'languages',
        'last_updated_at',
        'is_featured',
        'is_active',
        'publish_date',
        'completion_rate'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'discounted_price' => 'decimal:2',
        'rating' => 'decimal:2',
        'completion_rate' => 'decimal:2',
        'tags' => 'array',
        'learning_outcomes' => 'array',
        'requirements' => 'array',
        'languages' => 'array',
        'is_featured' => 'boolean',
        'has_certificate' => 'boolean',
        'is_active' => 'boolean',
        'last_updated_at' => 'datetime',
        'publish_date' => 'datetime'
    ];

    protected $attributes = [
        'level' => 'beginner',
        'status' => 'draft',
        'price' => 0.00,
        'enrolled_count' => 0,
        'rating' => 0.00,
        'rating_count' => 0,
        'duration_hours' => 0,
        'total_lectures' => 0,
        'total_quizzes' => 0,
        'total_assignments' => 0,
        'is_featured' => false,
        'is_active' => true,
        'has_certificate' => false,
        'certificate_threshold' => 80,
        'completion_rate' => 0.00
    ];

    public function reviews()
{
    return $this->hasMany(Review::class, 'learning_course_id');
}

    // Relationships
    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(LearningCategory::class, 'category_id');
    }

    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class, 'course_id');
    }

    public function enrollments(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'course_enrollments', 'course_id', 'user_id')
                    ->withPivot([
                        'enrolled_at', 
                        'completed_at', 
                        'progress_percentage',
                        'current_lesson_id',
                        'last_accessed_at',
                        'certificate_issued',
                        'completion_time_hours'
                    ])
                    ->withTimestamps();
    }

    public function students(): BelongsToMany
    {
        return $this->enrollments();
    }

    // Scopes
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published')
                    ->where('is_active', true);
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }

    public function scopeByLevel(Builder $query, string $level): Builder
    {
        return $query->where('level', $level);
    }

    public function scopeByCategory(Builder $query, int $categoryId): Builder
    {
        return $query->where('category_id', $categoryId);
    }

    public function scopeFree(Builder $query): Builder
    {
        return $query->where('price', 0);
    }

    public function scopePaid(Builder $query): Builder
    {
        return $query->where('price', '>', 0);
    }

    public function scopePopular(Builder $query): Builder
    {
        return $query->where('enrolled_count', '>', 100)
                    ->orderBy('enrolled_count', 'desc');
    }

    public function scopeHighRated(Builder $query): Builder
    {
        return $query->where('rating', '>=', 4.0)
                    ->where('rating_count', '>', 5);
    }

    // Accessors
    public function getEffectivePriceAttribute(): float
    {
        return $this->discounted_price ?? $this->price;
    }

    public function getDiscountPercentageAttribute(): ?int
    {
        if (!$this->discounted_price || $this->price <= 0) return null;
        
        return round((($this->price - $this->discounted_price) / $this->price) * 100);
    }

    public function getLevelColorAttribute(): string
    {
        return match($this->level) {
            'beginner' => 'success',
            'intermediate' => 'warning',
            'advanced' => 'danger',
            'expert' => 'dark',
            default => 'primary'
        };
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'published' => 'success',
            'draft' => 'warning',
            'archived' => 'secondary',
            'under_review' => 'info',
            default => 'secondary'
        };
    }

    public function getRatingStarsAttribute(): string
    {
        $fullStars = floor($this->rating);
        $halfStar = ($this->rating - $fullStars) >= 0.5;
        $emptyStars = 5 - $fullStars - ($halfStar ? 1 : 0);

        return str_repeat('★', $fullStars) . 
               ($halfStar ? '☆' : '') . 
               str_repeat('☆', $emptyStars);
    }

    public function getFormattedDurationAttribute(): string
    {
        if ($this->duration_hours < 1) {
            return round($this->duration_hours * 60) . ' minutes';
        }
        
        return $this->duration_hours . ' hours';
    }

    public function getFormattedPriceAttribute(): string
    {
        if ($this->isFree()) {
            return 'Free';
        }

        $price = $this->effective_price;
        return '$' . number_format($price, 2);
    }

    public function getAverageCompletionTimeAttribute(): string
    {
        $avgHours = $this->enrollments()
                         ->whereNotNull('completion_time_hours')
                         ->avg('completion_time_hours');

        if (!$avgHours) return 'No data';

        if ($avgHours < 1) {
            return round($avgHours * 60) . ' minutes';
        }

        return round($avgHours, 1) . ' hours';
    }

    // Mutators
    public function setTitleAttribute($value): void
    {
        $this->attributes['title'] = $value;
        if (empty($this->attributes['slug'])) {
            $this->attributes['slug'] = Str::slug($value);
        }
    }

    // Business Logic Methods
    public function isFree(): bool
    {
        return $this->effective_price == 0;
    }

    public function isDiscounted(): bool
    {
        return !is_null($this->discounted_price) && $this->discounted_price < $this->price;
    }

    public function canUserEnroll(User $user): bool
    {
        return !$this->isUserEnrolled($user) && 
               $this->status === 'published' && 
               $this->is_active;
    }

    public function isUserEnrolled(User $user): bool
    {
        return $this->enrollments()->where('user_id', $user->id)->exists();
    }

    public function enrollUser(User $user): void
    {
        if (!$this->canUserEnroll($user)) {
            throw new \Exception('User cannot be enrolled in this course');
        }

        $this->enrollments()->attach($user->id, [
            'enrolled_at' => now(),
            'progress_percentage' => 0
        ]);

        $this->increment('enrolled_count');
    }

    public function getUserProgress(User $user): array
    {
        $enrollment = $this->enrollments()
                          ->where('user_id', $user->id)
                          ->first();

        if (!$enrollment) {
            return [
                'enrolled' => false,
                'progress' => 0,
                'completed' => false
            ];
        }

        return [
            'enrolled' => true,
            'progress' => $enrollment->pivot->progress_percentage ?? 0,
            'completed' => !is_null($enrollment->pivot->completed_at),
            'enrolled_at' => $enrollment->pivot->enrolled_at,
            'last_accessed' => $enrollment->pivot->last_accessed_at
        ];
    }

    public function updateRating(float $newRating): void
    {
        $currentTotal = $this->rating * $this->rating_count;
        $newTotal = $currentTotal + $newRating;
        $newCount = $this->rating_count + 1;

        $this->update([
            'rating' => round($newTotal / $newCount, 2),
            'rating_count' => $newCount
        ]);
    }

    public function publish(): void
    {
        $this->update([
            'status' => 'published',
            'publish_date' => now(),
            'last_updated_at' => now()
        ]);
    }

    public function unpublish(): void
    {
        $this->update([
            'status' => 'draft'
        ]);
    }

    public function archive(): void
    {
        $this->update([
            'status' => 'archived',
            'is_active' => false
        ]);
    }

    public function getTotalContentAttribute(): int
    {
        return $this->total_lectures + $this->total_quizzes + $this->total_assignments;
    }

    public function isPopular(): bool
    {
        return $this->enrolled_count > 100;
    }

    public function isHighRated(): bool
    {
        return $this->rating >= 4.0 && $this->rating_count > 5;
    }

    public function canUserReceiveCertificate(User $user): bool
    {
        if (!$this->has_certificate) return false;

        $progress = $this->getUserProgress($user);
        return $progress['progress'] >= $this->certificate_threshold;
    }
}
