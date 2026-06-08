<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MonitaskAgent extends Model
{
    protected $fillable = [
        'user_id',
        'device_name',
        'device_type',
        'os_version',
        'agent_version',
        'mac_address',
        'ip_address',
        'status',
        'last_heartbeat',
        'stealth_mode',
        'auto_start',
        'screenshot_interval',
        'settings'
    ];

    protected $casts = [
        'last_heartbeat' => 'datetime',
        'stealth_mode' => 'boolean',
        'auto_start' => 'boolean',
        'screenshot_interval' => 'integer',
        'settings' => 'array'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function keystrokes()
    {
        return $this->hasMany(MonitaskKeystroke::class, 'agent_id');
    }

    public function locations()
    {
        return $this->hasMany(MonitaskLocation::class, 'agent_id');
    }

    public function activityLogs()
    {
        return $this->hasMany(MonitaskActivityLog::class, 'agent_id');
    }

    public function screenshots()
    {
        return $this->hasMany(MonitaskScreenshot::class, 'agent_id');
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'online' => 'success',
            'idle' => 'warning',
            'offline' => 'danger',
            default => 'secondary'
        };
    }

    public function getLastHeartbeatFormattedAttribute(): string
    {
        if (!$this->last_heartbeat) return 'Never';
        
        $diff = now()->diffInMinutes($this->last_heartbeat);
        
        if ($diff < 1) return 'Just now';
        if ($diff < 60) return $diff . ' minutes ago';
        if ($diff < 1440) return floor($diff / 60) . ' hours ago';
        
        return $this->last_heartbeat->format('M j, Y g:i A');
    }

    public function updateHeartbeat(): void
    {
        $this->update([
            'last_heartbeat' => now(),
            'status' => 'online'
        ]);
    }

    public function goOffline(): void
    {
        $this->update([
            'status' => 'offline'
        ]);
    }
}
