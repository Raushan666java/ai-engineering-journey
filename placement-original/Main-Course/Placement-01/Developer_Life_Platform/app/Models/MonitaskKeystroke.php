<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MonitaskKeystroke extends Model
{
    protected $fillable = [
        'agent_id',
        'user_id',
        'project_id',
        'time_entry_id',
        'application_name',
        'window_title',
        'keystroke_count',
        'mouse_clicks',
        'mouse_movements',
        'scroll_events',
        'idle_time_seconds',
        'active_time_seconds',
        'mouse_jiggler_detected',
        'raw_data'
    ];

    protected $casts = [
        'keystroke_count' => 'integer',
        'mouse_clicks' => 'integer',
        'mouse_movements' => 'integer',
        'scroll_events' => 'integer',
        'idle_time_seconds' => 'integer',
        'active_time_seconds' => 'integer',
        'mouse_jiggler_detected' => 'boolean',
        'raw_data' => 'array'
    ];

    public function agent(): BelongsTo
    {
        return $this->belongsTo(MonitaskAgent::class, 'agent_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(MonitaskProject::class, 'project_id');
    }

    public function timeEntry(): BelongsTo
    {
        return $this->belongsTo(MonitaskTimeEntry::class, 'time_entry_id');
    }

    public function getProductivityScoreAttribute(): int
    {
        $totalTime = $this->active_time_seconds + $this->idle_time_seconds;
        if ($totalTime === 0) return 0;
        
        $activityRatio = $this->active_time_seconds / $totalTime;
        $keystrokeWeight = min($this->keystroke_count / 100, 1) * 0.4;
        $mouseWeight = min($this->mouse_clicks / 50, 1) * 0.3;
        $movementWeight = min($this->mouse_movements / 200, 1) * 0.3;
        
        $score = ($activityRatio * 0.4) + $keystrokeWeight + $mouseWeight + $movementWeight;
        
        return (int) ($score * 100);
    }

    public function getActivityLevelTextAttribute(): string
    {
        $score = $this->productivity_score;
        
        if ($score >= 80) return 'Very High';
        if ($score >= 60) return 'High';
        if ($score >= 40) return 'Medium';
        if ($score >= 20) return 'Low';
        return 'Very Low';
    }

    public function getActivityColorAttribute(): string
    {
        $score = $this->productivity_score;
        
        if ($score >= 80) return 'success';
        if ($score >= 60) return 'primary';
        if ($score >= 40) return 'warning';
        if ($score >= 20) return 'info';
        return 'danger';
    }

    public function detectMouseJiggler(): bool
    {
        // Detect artificial mouse movements (mouse jigglers)
        // Look for repetitive patterns in mouse movements
        if ($this->mouse_movements > 0 && $this->mouse_clicks === 0 && $this->keystroke_count === 0) {
            // High mouse movements with no other activity might indicate jiggler
            $suspiciousRatio = $this->mouse_movements / max($this->active_time_seconds, 1);
            return $suspiciousRatio > 2; // More than 2 movements per second is suspicious
        }
        
        return false;
    }
}
