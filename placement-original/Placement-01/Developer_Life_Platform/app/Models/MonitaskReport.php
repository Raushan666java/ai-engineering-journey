<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MonitaskReport extends Model
{
    protected $fillable = [
        'user_id',
        'project_id',
        'report_date',
        'total_time_seconds',
        'active_time_seconds',
        'idle_time_seconds',
        'productivity_percentage',
        'keystroke_count',
        'mouse_click_count',
        'screenshot_count',
        'application_breakdown',
        'productivity_breakdown',
        'hourly_breakdown'
    ];

    protected $casts = [
        'report_date' => 'date',
        'total_time_seconds' => 'integer',
        'active_time_seconds' => 'integer',
        'idle_time_seconds' => 'integer',
        'productivity_percentage' => 'decimal:2',
        'keystroke_count' => 'integer',
        'mouse_click_count' => 'integer',
        'screenshot_count' => 'integer',
        'application_breakdown' => 'array',
        'productivity_breakdown' => 'array',
        'hourly_breakdown' => 'array'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(MonitaskProject::class, 'project_id');
    }

    public function getTypeDisplayAttribute(): string
    {
        return match($this->type) {
            'time_tracking' => 'Time Tracking Report',
            'productivity' => 'Productivity Report',
            'project_summary' => 'Project Summary',
            'team_performance' => 'Team Performance',
            'detailed_activity' => 'Detailed Activity Report',
            'invoice' => 'Invoice Report',
            default => ucwords(str_replace('_', ' ', $this->type))
        };
    }

    public function getPeriodDisplayAttribute(): string
    {
        return match($this->period) {
            'today' => 'Today',
            'week' => 'This Week',
            'month' => 'This Month',
            'quarter' => 'This Quarter',
            'year' => 'This Year',
            'custom' => 'Custom Period',
            default => ucwords($this->period)
        };
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'generating' => 'warning',
            'completed' => 'success',
            'failed' => 'danger',
            default => 'secondary'
        };
    }
}
