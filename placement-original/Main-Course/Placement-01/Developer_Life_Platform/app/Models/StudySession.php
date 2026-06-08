<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StudySession extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'learning_path_id',
        'step_id',
        'start_time',
        'end_time',
        'duration_minutes',
        'focus_score',
        'productivity_score',
        'distractions',
        'apps_used',
        'websites_visited',
        'screenshots_count',
        'goals_set',
        'goals_achieved',
        'session_type',
        'mood_before',
        'mood_after',
        'environment',
        'notes'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'duration_minutes' => 'integer',
        'focus_score' => 'decimal:2',
        'productivity_score' => 'decimal:2',
        'screenshots_count' => 'integer',
        'distractions' => 'array',
        'apps_used' => 'array',
        'websites_visited' => 'array',
        'goals_set' => 'array',
        'goals_achieved' => 'array',
        'environment' => 'array'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function learningPath(): BelongsTo
    {
        return $this->belongsTo(LearningPath::class);
    }

    public function step(): BelongsTo
    {
        return $this->belongsTo(LearningStep::class, 'step_id');
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(StudyScreenshot::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->whereNull('end_time');
    }

    public function scopeCompleted($query)
    {
        return $query->whereNotNull('end_time');
    }

    public function scopeToday($query)
    {
        return $query->whereDate('start_time', today());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('start_time', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    public function scopeHighFocus($query, $threshold = 80)
    {
        return $query->where('focus_score', '>=', $threshold);
    }

    public function scopeByType($query, $type)
    {
        return $query->where('session_type', $type);
    }

    // Accessors
    public function getStatusAttribute(): string
    {
        return $this->end_time ? 'completed' : 'active';
    }

    public function getDurationFormattedAttribute(): string
    {
        if (!$this->duration_minutes) return '0 min';
        
        $hours = floor($this->duration_minutes / 60);
        $minutes = $this->duration_minutes % 60;
        
        if ($hours > 0) {
            return $hours . 'h ' . $minutes . 'm';
        }
        
        return $minutes . 'm';
    }

    public function getFocusScoreColorAttribute(): string
    {
        $score = $this->focus_score ?? 0;
        
        if ($score >= 80) return 'success';
        if ($score >= 60) return 'warning';
        return 'danger';
    }

    public function getProductivityLevelAttribute(): string
    {
        $score = $this->productivity_score ?? 0;
        
        if ($score >= 90) return 'Excellent';
        if ($score >= 80) return 'Very Good';
        if ($score >= 70) return 'Good';
        if ($score >= 60) return 'Average';
        return 'Needs Improvement';
    }

    public function getGoalAchievementRateAttribute(): float
    {
        $goalsSet = count($this->goals_set ?? []);
        $goalsAchieved = count($this->goals_achieved ?? []);
        
        return $goalsSet > 0 ? ($goalsAchieved / $goalsSet) * 100 : 0;
    }

    // Business Methods
    public function calculateFocusScore(): float
    {
        $score = 85; // Base score
        
        // Deduct for distractions
        $distractionCount = count($this->distractions ?? []);
        $score -= ($distractionCount * 5);
        
        // Deduct for non-productive apps
        $nonProductiveApps = collect($this->apps_used ?? [])
            ->filter(function ($app) {
                return in_array(strtolower($app), [
                    'facebook', 'instagram', 'youtube', 'twitter', 'tiktok',
                    'netflix', 'games', 'gaming'
                ]);
            })->count();
        
        $score -= ($nonProductiveApps * 10);
        
        // Bonus for consistent focus (fewer app switches)
        $appSwitches = count($this->apps_used ?? []);
        if ($appSwitches <= 3) {
            $score += 10;
        }
        
        return max(0, min(100, $score));
    }

    public function calculateProductivityScore(): float
    {
        $score = 70; // Base score
        
        // Bonus for achieving goals
        $goalRate = $this->goal_achievement_rate;
        $score += ($goalRate * 0.3);
        
        // Bonus for session length (optimal is 45-90 minutes)
        $duration = $this->duration_minutes ?? 0;
        if ($duration >= 45 && $duration <= 90) {
            $score += 15;
        } elseif ($duration >= 30 && $duration < 120) {
            $score += 10;
        }
        
        // Bonus for focus score
        $focusBonus = ($this->focus_score ?? 0) * 0.2;
        $score += $focusBonus;
        
        return max(0, min(100, $score));
    }

    public function endSession(): bool
    {
        if ($this->end_time) return false;
        
        $this->update([
            'end_time' => now(),
            'duration_minutes' => $this->start_time->diffInMinutes(now()),
            'focus_score' => $this->calculateFocusScore(),
            'productivity_score' => $this->calculateProductivityScore()
        ]);
        
        // Update user's learning streak
        $this->user->updateLearningStreak();
        
        return true;
    }

    public function addDistraction(array $distraction): void
    {
        $distractions = $this->distractions ?? [];
        $distractions[] = array_merge($distraction, [
            'timestamp' => now()->toISOString()
        ]);
        
        $this->update(['distractions' => $distractions]);
    }

    public function recordAppUsage(string $appName, int $timeSpent): void
    {
        $apps = $this->apps_used ?? [];
        $apps[$appName] = ($apps[$appName] ?? 0) + $timeSpent;
        
        $this->update(['apps_used' => $apps]);
    }

    public function recordWebsiteVisit(string $url, int $timeSpent): void
    {
        $websites = $this->websites_visited ?? [];
        $domain = parse_url($url, PHP_URL_HOST);
        $websites[$domain] = ($websites[$domain] ?? 0) + $timeSpent;
        
        $this->update(['websites_visited' => $websites]);
    }

    public function addGoalAchievement(string $goal): void
    {
        $achieved = $this->goals_achieved ?? [];
        if (!in_array($goal, $achieved)) {
            $achieved[] = $goal;
            $this->update(['goals_achieved' => $achieved]);
        }
    }

    public function generateSummary(): array
    {
        return [
            'session_id' => $this->id,
            'duration' => $this->duration_formatted,
            'focus_score' => $this->focus_score,
            'productivity_score' => $this->productivity_score,
            'productivity_level' => $this->productivity_level,
            'goal_achievement_rate' => $this->goal_achievement_rate,
            'distractions_count' => count($this->distractions ?? []),
            'apps_used_count' => count($this->apps_used ?? []),
            'screenshots_taken' => $this->screenshots_count,
            'recommendations' => $this->generateRecommendations()
        ];
    }

    public function generateRecommendations(): array
    {
        $recommendations = [];
        
        // Focus recommendations
        if ($this->focus_score < 70) {
            $recommendations[] = [
                'type' => 'Focus Improvement',
                'message' => 'Try using focus techniques like the Pomodoro method to improve concentration.',
                'priority' => 'high'
            ];
        }
        
        // Session length recommendations
        $duration = $this->duration_minutes ?? 0;
        if ($duration < 30) {
            $recommendations[] = [
                'type' => 'Session Length',
                'message' => 'Consider longer study sessions (45-90 minutes) for better learning retention.',
                'priority' => 'medium'
            ];
        } elseif ($duration > 120) {
            $recommendations[] = [
                'type' => 'Break Time',
                'message' => 'Take regular breaks to maintain focus during long study sessions.',
                'priority' => 'medium'
            ];
        }
        
        // Distraction recommendations
        $distractionCount = count($this->distractions ?? []);
        if ($distractionCount > 5) {
            $recommendations[] = [
                'type' => 'Distraction Management',
                'message' => 'Too many distractions detected. Consider using website blockers or studying in a quieter environment.',
                'priority' => 'high'
            ];
        }
        
        return $recommendations;
    }

    // Static Methods
    public static function startNew(User $user, array $options = []): self
    {
        // End any active session first
        self::where('user_id', $user->id)
            ->whereNull('end_time')
            ->update(['end_time' => now()]);
        
        return self::create([
            'user_id' => $user->id,
            'learning_path_id' => $options['learning_path_id'] ?? null,
            'step_id' => $options['step_id'] ?? null,
            'start_time' => now(),
            'session_type' => $options['type'] ?? 'spontaneous',
            'goals_set' => $options['goals'] ?? [],
            'mood_before' => $options['mood'] ?? null,
            'environment' => $options['environment'] ?? []
        ]);
    }

    public static function getTodayStats(User $user): array
    {
        $sessions = self::where('user_id', $user->id)
            ->today()
            ->completed()
            ->get();
        
        return [
            'total_sessions' => $sessions->count(),
            'total_time' => $sessions->sum('duration_minutes'),
            'average_focus' => $sessions->avg('focus_score') ?? 0,
            'average_productivity' => $sessions->avg('productivity_score') ?? 0,
            'goals_achievement_rate' => $sessions->avg('goal_achievement_rate') ?? 0
        ];
    }

    public static function getWeeklyStats(User $user): array
    {
        $sessions = self::where('user_id', $user->id)
            ->thisWeek()
            ->completed()
            ->get();
        
        $dailyStats = $sessions->groupBy(function ($session) {
            return $session->start_time->format('Y-m-d');
        })->map(function ($daySessions) {
            return [
                'sessions_count' => $daySessions->count(),
                'total_time' => $daySessions->sum('duration_minutes'),
                'average_focus' => $daySessions->avg('focus_score')
            ];
        });
        
        return [
            'daily_breakdown' => $dailyStats,
            'total_sessions' => $sessions->count(),
            'total_time' => $sessions->sum('duration_minutes'),
            'average_focus' => $sessions->avg('focus_score') ?? 0,
            'most_productive_day' => $dailyStats->sortByDesc('total_time')->keys()->first()
        ];
    }
}
