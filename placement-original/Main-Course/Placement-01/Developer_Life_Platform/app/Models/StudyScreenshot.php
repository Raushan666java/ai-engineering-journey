<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudyScreenshot extends Model
{
    use HasFactory;

    protected $fillable = [
        'study_session_id',
        'file_path',
        'file_name',
        'file_size',
        'captured_at',
        'screenshot_type',
        'analysis_data',
        'privacy_level',
        'is_analyzed',
        'focus_score',
        'productivity_indicators',
        'detected_apps',
        'detected_websites',
        'text_content',
        'metadata'
    ];

    protected $casts = [
        'captured_at' => 'datetime',
        'analysis_data' => 'array',
        'productivity_indicators' => 'array',
        'detected_apps' => 'array',
        'detected_websites' => 'array',
        'metadata' => 'array',
        'is_analyzed' => 'boolean',
        'file_size' => 'integer',
        'focus_score' => 'integer'
    ];

    // Relationships
    public function studySession(): BelongsTo
    {
        return $this->belongsTo(StudySession::class);
    }

    // Scopes
    public function scopeAnalyzed($query)
    {
        return $query->where('is_analyzed', true);
    }

    public function scopeByPrivacyLevel($query, $level)
    {
        return $query->where('privacy_level', $level);
    }

    public function scopeByType($query, $type)
    {
        return $query->where('screenshot_type', $type);
    }

    public function scopeHighFocus($query)
    {
        return $query->where('focus_score', '>=', 80);
    }

    // Accessors
    public function getFileSizeHumanAttribute()
    {
        $size = $this->file_size;
        if ($size < 1024) return $size . ' B';
        if ($size < 1048576) return round($size / 1024, 2) . ' KB';
        if ($size < 1073741824) return round($size / 1048576, 2) . ' MB';
        return round($size / 1073741824, 2) . ' GB';
    }

    public function getFullPathAttribute()
    {
        return storage_path('app/' . $this->file_path);
    }

    // Business Logic Methods
    public function analyzeScreenshot()
    {
        // Placeholder for AI analysis logic
        $this->update([
            'is_analyzed' => true,
            'analysis_data' => [
                'analyzed_at' => now(),
                'analysis_version' => '1.0'
            ]
        ]);
    }

    public function calculateFocusScore()
    {
        // AI logic to calculate focus score based on screenshot content
        $score = 85; // Placeholder
        $this->update(['focus_score' => $score]);
        return $score;
    }

    public function extractProductivityMetrics()
    {
        return [
            'focus_score' => $this->focus_score,
            'apps_count' => count($this->detected_apps ?? []),
            'websites_count' => count($this->detected_websites ?? []),
            'is_productive' => $this->focus_score >= 70
        ];
    }

    public function deleteFile()
    {
        if (file_exists($this->full_path)) {
            unlink($this->full_path);
        }
    }

    // Static Methods
    public static function createFromCapture($studySessionId, $filePath, $metadata = [])
    {
        return self::create([
            'study_session_id' => $studySessionId,
            'file_path' => $filePath,
            'file_name' => basename($filePath),
            'file_size' => file_exists(storage_path('app/' . $filePath)) ? filesize(storage_path('app/' . $filePath)) : 0,
            'captured_at' => now(),
            'screenshot_type' => 'automatic',
            'privacy_level' => 'private',
            'metadata' => $metadata
        ]);
    }
}
