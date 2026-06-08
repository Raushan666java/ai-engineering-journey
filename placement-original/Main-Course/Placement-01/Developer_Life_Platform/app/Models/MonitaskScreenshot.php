<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class MonitaskScreenshot extends Model
{
    protected $table = 'monitask_screenshots';
    protected $fillable = [
        'agent_id',
        'user_id',
        'project_id',
        'time_entry_id',
        'file_path',
        'thumbnail_path',
        'file_name',
        'file_size',
        'mime_type',
        'width',
        'height',
        'activity_score',
        'is_blur_enabled',
        'is_deleted',
        'metadata'
    ];

    protected $casts = [
        'file_size' => 'integer',
        'width' => 'integer',
        'height' => 'integer',
        'activity_score' => 'integer',
        'is_blur_enabled' => 'boolean',
        'is_deleted' => 'boolean',
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

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function getScreenshotUrlAttribute(): string
    {
        return $this->file_path ? Storage::url($this->file_path) : '';
    }

    public function getThumbnailUrlAttribute(): string
    {
        return $this->thumbnail_path ? Storage::url($this->thumbnail_path) : $this->screenshot_url;
    }

    public function getActivityLevelAttribute(): string
    {
        if ($this->activity_score >= 80) return 'High';
        if ($this->activity_score >= 50) return 'Medium';
        if ($this->activity_score >= 20) return 'Low';
        return 'Inactive';
    }

    public function getActivityColorAttribute(): string
    {
        if ($this->activity_score >= 80) return 'success';
        if ($this->activity_score >= 50) return 'warning';
        if ($this->activity_score >= 20) return 'info';
        return 'danger';
    }
}
