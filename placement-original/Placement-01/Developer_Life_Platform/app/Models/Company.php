<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'logo',
        'website',
        'description',
        'timezone',
        'currency',
        'date_format',
        'time_format',
        'owner_id',
        'subscription_plan',
        'subscription_status',
        'trial_ends_at',
        'settings',
        'is_active',
    ];

    protected $casts = [
        'trial_ends_at' => 'datetime',
        'settings' => 'array',
        'is_active' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($company) {
            if (empty($company->slug)) {
                $company->slug = Str::slug($company->name) . '-' . Str::random(6);
            }
        });
    }

    // Relationships
    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'team_members')
            ->withPivot(['role', 'permissions', 'hourly_rate', 'is_active', 'joined_at'])
            ->withTimestamps();
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }

    public function timeSessions(): HasMany
    {
        return $this->hasMany(TimeSession::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class);
    }

    public function expenses(): HasMany
    {
        return $this->hasMany(Expense::class);
    }

    public function productivityRules(): HasMany
    {
        return $this->hasMany(ProductivityRule::class);
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class);
    }

    public function integrations(): HasMany
    {
        return $this->hasMany(Integration::class);
    }

    public function webhooks(): HasMany
    {
        return $this->hasMany(Webhook::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOnTrial($query)
    {
        return $query->where('subscription_status', 'trial')
            ->where('trial_ends_at', '>', now());
    }

    public function scopeSubscribed($query)
    {
        return $query->where('subscription_status', 'active');
    }

    // Methods
    public function getSetting($key, $default = null)
    {
        return data_get($this->settings, $key, $default);
    }

    public function setSetting($key, $value)
    {
        $settings = $this->settings ?: [];
        data_set($settings, $key, $value);
        $this->settings = $settings;
        return $this;
    }

    public function isOwner(User $user): bool
    {
        return $this->owner_id === $user->id;
    }

    public function hasMember(User $user): bool
    {
        return $this->members()->where('user_id', $user->id)->exists();
    }

    public function getMemberRole(User $user): ?string
    {
        $member = $this->members()->where('user_id', $user->id)->first();
        return $member?->pivot->role;
    }

    public function canUserAccess(User $user): bool
    {
        return $this->isOwner($user) || $this->hasMember($user);
    }

    public function isOnTrial(): bool
    {
        return $this->subscription_status === 'trial' && 
               $this->trial_ends_at && 
               $this->trial_ends_at->isFuture();
    }

    public function isSubscribed(): bool
    {
        return in_array($this->subscription_status, ['active', 'trialing']);
    }

    public function getTimezone(): string
    {
        return $this->timezone ?: config('app.timezone');
    }

    public function getCurrency(): string
    {
        return $this->currency ?: 'USD';
    }

    public function getDateFormat(): string
    {
        return $this->date_format ?: 'Y-m-d';
    }

    public function getTimeFormat(): string
    {
        return $this->time_format ?: 'H:i:s';
    }

    // Analytics methods
    public function getTotalHoursWorked(?string $period = null): float
    {
        $query = $this->timeSessions();
        
        if ($period) {
            $query->where('started_at', '>=', now()->subDays($period));
        }
        
        return $query->sum('duration') / 3600; // Convert seconds to hours
    }

    public function getActiveProjects(): int
    {
        return $this->projects()->where('status', 'active')->count();
    }

    public function getTeamProductivity(?string $period = 'week'): array
    {
        $days = match($period) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            'quarter' => 90,
            default => 7
        };

        $sessions = $this->timeSessions()
            ->where('started_at', '>=', now()->subDays($days))
            ->with('user', 'project')
            ->get();

        $totalHours = $sessions->sum('duration') / 3600;
        $productiveHours = $sessions->where('productivity_score', '>=', 70)->sum('duration') / 3600;
        
        return [
            'total_hours' => round($totalHours, 2),
            'productive_hours' => round($productiveHours, 2),
            'productivity_rate' => $totalHours > 0 ? round(($productiveHours / $totalHours) * 100, 2) : 0,
            'members_count' => $sessions->unique('user_id')->count(),
            'projects_count' => $sessions->unique('project_id')->count(),
        ];
    }
}
