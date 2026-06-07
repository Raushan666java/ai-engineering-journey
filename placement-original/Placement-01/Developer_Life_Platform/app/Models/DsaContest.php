<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Carbon\Carbon;

class DsaContest extends Model
{
    protected $fillable = [
        'title',
        'description',
        'start_time',
        'end_time',
        'duration_minutes',
        'type',
        'difficulty',
        'max_participants',
        'registration_deadline',
        'rules',
        'prizes',
        'is_active'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'registration_deadline' => 'datetime',
        'rules' => 'array',
        'prizes' => 'array',
        'is_active' => 'boolean'
    ];

    public function problems(): BelongsToMany
    {
        return $this->belongsToMany(DsaProblem::class, 'contest_problems')
                    ->withPivot('order', 'points')
                    ->orderBy('pivot_order');
    }

    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'contest_participants')
                    ->withPivot('registration_time', 'rank', 'score')
                    ->withTimestamps();
    }

    public function submissions(): HasMany
    {
        return $this->hasMany(DsaSubmission::class, 'contest_id');
    }

    public function isActive(): bool
    {
        return $this->is_active && $this->start_time <= now() && $this->end_time >= now();
    }

    public function isUpcoming(): bool
    {
        return $this->start_time > now();
    }

    public function isFinished(): bool
    {
        return $this->end_time < now();
    }

    public function canRegister(): bool
    {
        return $this->registration_deadline > now() && !$this->isFinished();
    }

    public function getStatusAttribute(): string
    {
        if ($this->isFinished()) return 'finished';
        if ($this->isActive()) return 'active';
        if ($this->isUpcoming()) return 'upcoming';
        return 'inactive';
    }

    public function getRemainingTimeAttribute(): string
    {
        if ($this->isFinished()) return 'Finished';
        
        $target = $this->isActive() ? $this->end_time : $this->start_time;
        $diff = now()->diff($target);
        
        if ($diff->d > 0) return $diff->d . ' days';
        if ($diff->h > 0) return $diff->h . ' hours';
        return $diff->i . ' minutes';
    }
}
