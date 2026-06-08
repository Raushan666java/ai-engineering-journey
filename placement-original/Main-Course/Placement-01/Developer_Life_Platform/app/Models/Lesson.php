<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'content',
        'course_id',
        'order_index',
        'type',
        'duration_minutes',
        'video_url',
        'resources',
        'is_preview',
        'is_published',
        'published_at',
    ];

    protected $casts = [
        'resources' => 'array',
        'is_preview' => 'boolean',
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    // Relationships
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    // Scopes
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public function scopePreview(Builder $query): Builder
    {
        return $query->where('is_preview', true);
    }

    public function scopeByType(Builder $query, string $type): Builder
    {
        return $query->where('type', $type);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('order_index');
    }

    // Accessors
    public function getTypeBadgeAttribute(): string
    {
        return match($this->type) {
            'video' => '🎥',
            'text' => '📄',
            'quiz' => '❓',
            'assignment' => '📝',
            'code' => '💻',
            default => '📚'
        };
    }

    public function getDurationFormattedAttribute(): string
    {
        $minutes = $this->duration_minutes;
        
        if ($minutes < 60) {
            return $minutes . ' min';
        } else {
            $hours = intval($minutes / 60);
            $remainingMinutes = $minutes % 60;
            
            if ($remainingMinutes > 0) {
                return $hours . 'h ' . $remainingMinutes . 'm';
            } else {
                return $hours . 'h';
            }
        }
    }

    // Mutators
    public function setTitleAttribute(string $value): void
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    // Helper methods
    public function canBeAccessedBy(?User $user): bool
    {
        if (!$this->is_published) {
            return false;
        }

        if ($this->is_preview) {
            return true;
        }

        if (!$user) {
            return false;
        }

        return $this->course->canBeAccessedBy($user);
    }

    public function isCompletedBy(User $user): bool
    {
        // TODO: Check if user has completed this lesson when progress tracking is implemented
        return false;
    }

    public function getNextLesson(): ?Lesson
    {
        return $this->course->lessons()
            ->where('order_index', '>', $this->order_index)
            ->orderBy('order_index')
            ->first();
    }

    public function getPreviousLesson(): ?Lesson
    {
        return $this->course->lessons()
            ->where('order_index', '<', $this->order_index)
            ->orderBy('order_index', 'desc')
            ->first();
    }
}
