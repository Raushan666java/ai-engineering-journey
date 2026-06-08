<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
        'color',
        'category',
        'difficulty_level',
        'estimated_hours',
        'learning_outcomes',
        'prerequisites',
        'tags',
        'is_featured',
        'is_active',
        'course_count',
        'enrollment_count',
        'rating',
        'rating_count',
    ];

    protected $casts = [
        'learning_outcomes' => 'array',
        'prerequisites' => 'array',
        'tags' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'rating' => 'decimal:2',
    ];

    // Relationships
    // Note: Subjects are standalone and don't directly relate to LearningCourses
    // LearningCourses use LearningCategory instead
    
    // If you need to relate subjects to courses, you'll need to:
    // 1. Add subject_id to learning_courses table, or
    // 2. Create a pivot table for many-to-many relationship

    // Scopes
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory(Builder $query, string $category): Builder
    {
        return $query->where('category', $category);
    }

    public function scopeByDifficulty(Builder $query, string $difficulty): Builder
    {
        return $query->where('difficulty_level', $difficulty);
    }

    // Accessors
    public function getCategoryBadgeAttribute(): string
    {
        return match($this->category) {
            'programming' => '💻',
            'mathematics' => '🔢',
            'science' => '🔬',
            'business' => '💼',
            'language' => '🗣️',
            'arts' => '🎨',
            'engineering' => '⚙️',
            'medicine' => '⚕️',
            default => '📚'
        };
    }

    public function getDifficultyBadgeAttribute(): string
    {
        return match($this->difficulty_level) {
            'beginner' => '🟢',
            'intermediate' => '🟡',
            'advanced' => '🟠',
            'expert' => '🔴',
            default => '🟢'
        };
    }

    // Update course count - Not applicable since subjects don't relate to courses
    // public function updateCourseCount(): void
    // {
    //     // This method is not applicable since subjects don't relate to courses
    // }

    // Calculate average rating - Keep this for subject-specific ratings
    public function updateRating(): void
    {
        // This could be used for subject-specific ratings if needed
        // For now, keeping basic implementation
        $this->save();
    }
}
