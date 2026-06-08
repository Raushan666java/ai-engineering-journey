<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssessmentSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'assessment_id',
        'user_id',
        'answers',
        'score',
        'time_taken',
        'feedback',
        'weak_areas',
        'strong_areas',
        'next_recommendations',
        'submitted_at',
        'attempt_number',
        'is_passed'
    ];

    protected $casts = [
        'answers' => 'array',
        'weak_areas' => 'array',
        'strong_areas' => 'array',
        'next_recommendations' => 'array',
        'submitted_at' => 'datetime',
        'score' => 'decimal:2',
        'time_taken' => 'integer',
        'attempt_number' => 'integer',
        'is_passed' => 'boolean'
    ];

    // Relationships
    public function assessment(): BelongsTo
    {
        return $this->belongsTo(AIAssessment::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Accessors
    public function getScoreBadgeAttribute(): string
    {
        $score = $this->score ?? 0;
        
        if ($score >= 90) return 'success';
        if ($score >= 80) return 'info';
        if ($score >= 70) return 'warning';
        return 'danger';
    }

    public function getGradeAttribute(): string
    {
        $score = $this->score ?? 0;
        
        if ($score >= 95) return 'A+';
        if ($score >= 90) return 'A';
        if ($score >= 85) return 'B+';
        if ($score >= 80) return 'B';
        if ($score >= 75) return 'C+';
        if ($score >= 70) return 'C';
        if ($score >= 65) return 'D+';
        if ($score >= 60) return 'D';
        return 'F';
    }

    public function getTimeFormattedAttribute(): string
    {
        $minutes = $this->time_taken ?? 0;
        
        if ($minutes < 60) {
            return $minutes . ' min';
        } else {
            $hours = floor($minutes / 60);
            $remainingMinutes = $minutes % 60;
            return $hours . 'h ' . $remainingMinutes . 'm';
        }
    }

    // Business Methods
    public function updateProgress(): void
    {
        // Update learning progress
        LearningProgress::updateOrCreate(
            [
                'user_id' => $this->user_id,
                'step_id' => $this->assessment->step_id
            ],
            [
                'status' => $this->is_passed ? 'completed' : 'in_progress',
                'score' => $this->score,
                'attempts' => $this->attempt_number,
                'completion_date' => $this->is_passed ? $this->submitted_at : null,
                'last_accessed_at' => $this->submitted_at
            ]
        );

        // Mark step as completed if passed
        if ($this->is_passed) {
            $this->assessment->step->markAsCompleted($this->user);
        }
    }
}
