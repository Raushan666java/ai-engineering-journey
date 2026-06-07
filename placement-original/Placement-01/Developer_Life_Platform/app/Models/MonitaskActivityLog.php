<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MonitaskActivityLog extends Model
{
    protected $fillable = [
        'agent_id',
        'user_id',
        'project_id',
        'time_entry_id',
        'application_name',
        'window_title',
        'url',
        'category',
        'duration_seconds',
        'keystroke_count',
        'mouse_click_count',
        'scroll_count',
        'productivity_score',
        'metadata'
    ];

    protected $casts = [
        'duration_seconds' => 'integer',
        'keystroke_count' => 'integer',
        'mouse_click_count' => 'integer',
        'scroll_count' => 'integer',
        'productivity_score' => 'integer',
        'metadata' => 'array'
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

    public function getProductivityColorAttribute(): string
    {
        return match($this->productivity_level) {
            'productive' => 'success',
            'neutral' => 'warning',
            'unproductive' => 'danger',
            default => 'secondary'
        };
    }

    public function getActivityScoreAttribute(): int
    {
        // Calculate activity score based on inputs
        $keystrokeScore = min($this->keystroke_count / 10, 40);
        $mouseScore = min($this->mouse_click_count / 5, 30);
        $scrollScore = min($this->scroll_count / 3, 30);
        
        return (int) ($keystrokeScore + $mouseScore + $scrollScore);
    }

    public function getDurationFormattedAttribute(): string
    {
        $hours = floor($this->duration_seconds / 3600);
        $minutes = floor(($this->duration_seconds % 3600) / 60);
        $seconds = $this->duration_seconds % 60;

        if ($hours > 0) {
            return sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);
        }
        return sprintf('%02d:%02d', $minutes, $seconds);
    }

    public static function getProductivityBreakdown($userId, $projectId = null, $period = 'week')
    {
        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query = self::where('user_id', $userId)
            ->where('recorded_at', '>=', now()->subDays($days));

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $activities = $query->get();
        $totalDuration = $activities->sum('duration_seconds');

        $productive = $activities->where('productivity_level', 'productive')->sum('duration_seconds');
        $neutral = $activities->where('productivity_level', 'neutral')->sum('duration_seconds');
        $unproductive = $activities->where('productivity_level', 'unproductive')->sum('duration_seconds');

        return [
            'productive' => [
                'duration' => $productive,
                'percentage' => $totalDuration > 0 ? round(($productive / $totalDuration) * 100, 1) : 0,
                'duration_formatted' => self::formatDuration($productive)
            ],
            'neutral' => [
                'duration' => $neutral,
                'percentage' => $totalDuration > 0 ? round(($neutral / $totalDuration) * 100, 1) : 0,
                'duration_formatted' => self::formatDuration($neutral)
            ],
            'unproductive' => [
                'duration' => $unproductive,
                'percentage' => $totalDuration > 0 ? round(($unproductive / $totalDuration) * 100, 1) : 0,
                'duration_formatted' => self::formatDuration($unproductive)
            ]
        ];
    }

    public static function formatDuration($seconds): string
    {
        $hours = floor($seconds / 3600);
        $minutes = floor(($seconds % 3600) / 60);

        if ($hours > 0) {
            return "{$hours}h {$minutes}m";
        }
        return "{$minutes}m";
    }
}
