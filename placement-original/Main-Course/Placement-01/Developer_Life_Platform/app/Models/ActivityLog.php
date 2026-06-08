<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivityLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_id',
        'time_session_id',
        'activity_type',
        'application_name',
        'window_title',
        'website_url',
        'website_title',
        'duration',
        'keystrokes',
        'mouse_clicks',
        'scroll_events',
        'metadata',
        'is_productive',
        'recorded_at',
    ];

    protected $casts = [
        'recorded_at' => 'datetime',
        'metadata' => 'array',
        'is_productive' => 'boolean',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function timeSession(): BelongsTo
    {
        return $this->belongsTo(TimeSession::class);
    }

    // Scopes
    public function scopeProductive($query)
    {
        return $query->where('is_productive', true);
    }

    public function scopeUnproductive($query)
    {
        return $query->where('is_productive', false);
    }

    public function scopeApplicationUsage($query)
    {
        return $query->where('activity_type', 'app_usage');
    }

    public function scopeWebsiteVisit($query)
    {
        return $query->where('activity_type', 'website_visit');
    }

    public function scopeToday($query)
    {
        return $query->whereDate('recorded_at', today());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('recorded_at', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('recorded_at', now()->month)
            ->whereYear('recorded_at', now()->year);
    }

    // Methods
    public function getDurationInMinutes(): float
    {
        return round($this->duration / 60, 2);
    }

    public function getDurationFormatted(): string
    {
        $minutes = floor($this->duration / 60);
        $seconds = $this->duration % 60;

        if ($minutes > 0) {
            return sprintf('%dm %ds', $minutes, $seconds);
        }

        return sprintf('%ds', $seconds);
    }

    public function isApplicationActivity(): bool
    {
        return $this->activity_type === 'app_usage';
    }

    public function isWebsiteActivity(): bool
    {
        return $this->activity_type === 'website_visit';
    }

    public function hasInteraction(): bool
    {
        return $this->keystrokes > 0 || $this->mouse_clicks > 0 || $this->scroll_events > 0;
    }

    public function getTotalInteractions(): int
    {
        return $this->keystrokes + $this->mouse_clicks + $this->scroll_events;
    }

    public function getActivityLevel(): string
    {
        $interactions = $this->getTotalInteractions();
        $duration = $this->duration;

        if ($duration === 0) {
            return 'No Activity';
        }

        $interactionRate = $interactions / ($duration / 60); // interactions per minute

        return match (true) {
            $interactionRate >= 50 => 'Very High',
            $interactionRate >= 30 => 'High',
            $interactionRate >= 15 => 'Medium',
            $interactionRate >= 5 => 'Low',
            default => 'Very Low'
        };
    }

    public function getProductivityStatus(): string
    {
        return match ($this->is_productive) {
            true => 'Productive',
            false => 'Unproductive',
            null => 'Neutral'
        };
    }

    public function getDisplayTitle(): string
    {
        return match ($this->activity_type) {
            'app_usage' => $this->application_name ?: 'Unknown Application',
            'website_visit' => $this->website_title ?: $this->website_url ?: 'Unknown Website',
            default => 'Unknown Activity'
        };
    }

    public function getDisplaySubtitle(): string
    {
        return match ($this->activity_type) {
            'app_usage' => $this->window_title ?: '',
            'website_visit' => $this->website_url ?: '',
            default => ''
        };
    }

    public function getIcon(): string
    {
        return match ($this->activity_type) {
            'app_usage' => 'desktop-computer',
            'website_visit' => 'globe',
            'keystroke' => 'keyboard',
            'mouse_click' => 'cursor-click',
            default => 'chart-bar'
        };
    }

    public function getColor(): string
    {
        return match ($this->is_productive) {
            true => 'green',
            false => 'red',
            null => 'gray'
        };
    }

    public static function getTopApplications($userId = null, $projectId = null, $period = 'week', $limit = 10): array
    {
        $query = static::query()
            ->where('activity_type', 'app_usage')
            ->whereNotNull('application_name');

        if ($userId) {
            $query->where('user_id', $userId);
        }

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query->where('recorded_at', '>=', now()->subDays($days));

        return $query->selectRaw('application_name, SUM(duration) as total_duration, COUNT(*) as session_count')
            ->groupBy('application_name')
            ->orderBy('total_duration', 'desc')
            ->limit($limit)
            ->get()
            ->map(function ($item) {
                return [
                    'name' => $item->application_name,
                    'duration' => $item->total_duration,
                    'duration_formatted' => static::formatDuration($item->total_duration),
                    'session_count' => $item->session_count,
                ];
            })
            ->toArray();
    }

    public static function getTopWebsites($userId = null, $projectId = null, $period = 'week', $limit = 10): array
    {
        $query = static::query()
            ->where('activity_type', 'website_visit')
            ->whereNotNull('website_url');

        if ($userId) {
            $query->where('user_id', $userId);
        }

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query->where('recorded_at', '>=', now()->subDays($days));

        return $query->selectRaw('website_url, website_title, SUM(duration) as total_duration, COUNT(*) as visit_count')
            ->groupBy('website_url', 'website_title')
            ->orderBy('total_duration', 'desc')
            ->limit($limit)
            ->get()
            ->map(function ($item) {
                return [
                    'url' => $item->website_url,
                    'title' => $item->website_title ?: $item->website_url,
                    'duration' => $item->total_duration,
                    'duration_formatted' => static::formatDuration($item->total_duration),
                    'visit_count' => $item->visit_count,
                ];
            })
            ->toArray();
    }

    public static function getProductivityBreakdown($userId = null, $projectId = null, $period = 'week'): array
    {
        $query = static::query();

        if ($userId) {
            $query->where('user_id', $userId);
        }

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $query->where('recorded_at', '>=', now()->subDays($days));

        $results = $query->selectRaw('
            is_productive,
            SUM(duration) as total_duration,
            COUNT(*) as activity_count
        ')
        ->groupBy('is_productive')
        ->get();

        $productive = $results->where('is_productive', true)->first();
        $unproductive = $results->where('is_productive', false)->first();
        $neutral = $results->where('is_productive', null)->first();

        $productiveDuration = $productive ? $productive->total_duration : 0;
        $unproductiveDuration = $unproductive ? $unproductive->total_duration : 0;
        $neutralDuration = $neutral ? $neutral->total_duration : 0;

        $totalDuration = $productiveDuration + $unproductiveDuration + $neutralDuration;

        return [
            'productive' => [
                'duration' => $productiveDuration,
                'duration_formatted' => static::formatDuration($productiveDuration),
                'percentage' => $totalDuration > 0 ? round(($productiveDuration / $totalDuration) * 100, 2) : 0,
                'count' => $productive ? $productive->activity_count : 0,
            ],
            'unproductive' => [
                'duration' => $unproductiveDuration,
                'duration_formatted' => static::formatDuration($unproductiveDuration),
                'percentage' => $totalDuration > 0 ? round(($unproductiveDuration / $totalDuration) * 100, 2) : 0,
                'count' => $unproductive ? $unproductive->activity_count : 0,
            ],
            'neutral' => [
                'duration' => $neutralDuration,
                'duration_formatted' => static::formatDuration($neutralDuration),
                'percentage' => $totalDuration > 0 ? round(($neutralDuration / $totalDuration) * 100, 2) : 0,
                'count' => $neutral ? $neutral->activity_count : 0,
            ],
            'total' => [
                'duration' => $totalDuration,
                'duration_formatted' => static::formatDuration($totalDuration),
            ],
        ];
    }

    public static function formatDuration(int $seconds): string
    {
        $hours = floor($seconds / 3600);
        $minutes = floor(($seconds % 3600) / 60);
        $remainingSeconds = $seconds % 60;

        if ($hours > 0) {
            return sprintf('%dh %dm', $hours, $minutes);
        } elseif ($minutes > 0) {
            return sprintf('%dm %ds', $minutes, $remainingSeconds);
        } else {
            return sprintf('%ds', $remainingSeconds);
        }
    }

    public function getSummary(): array
    {
        return [
            'basic' => [
                'id' => $this->id,
                'type' => $this->activity_type,
                'title' => $this->getDisplayTitle(),
                'subtitle' => $this->getDisplaySubtitle(),
                'recorded_at' => $this->recorded_at,
            ],
            'timing' => [
                'duration' => $this->duration,
                'duration_formatted' => $this->getDurationFormatted(),
                'duration_minutes' => $this->getDurationInMinutes(),
            ],
            'activity' => [
                'keystrokes' => $this->keystrokes,
                'mouse_clicks' => $this->mouse_clicks,
                'scroll_events' => $this->scroll_events,
                'total_interactions' => $this->getTotalInteractions(),
                'activity_level' => $this->getActivityLevel(),
            ],
            'productivity' => [
                'is_productive' => $this->is_productive,
                'status' => $this->getProductivityStatus(),
                'color' => $this->getColor(),
            ],
            'context' => [
                'user_name' => $this->user?->name,
                'project_name' => $this->project?->name,
                'time_session_id' => $this->time_session_id,
            ],
        ];
    }
}
