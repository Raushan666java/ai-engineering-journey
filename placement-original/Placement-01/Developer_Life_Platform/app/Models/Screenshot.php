<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Screenshot extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'time_session_id',
        'user_id',
        'project_id',
        'file_path',
        'file_name',
        'file_size',
        'width',
        'height',
        'quality',
        'captured_at',
        'activity_level',
        'mouse_clicks',
        'keystrokes',
        'active_window_title',
        'active_application',
        'is_flagged',
        'flag_reason',
        'is_blurred',
        'blur_level',
        'metadata',
        'thumbnail_path',
    ];

    protected $casts = [
        'captured_at' => 'datetime',
        'is_flagged' => 'boolean',
        'is_blurred' => 'boolean',
        'metadata' => 'array',
    ];

    // Relationships
    public function timeSession(): BelongsTo
    {
        return $this->belongsTo(TimeSession::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    // Scopes
    public function scopeFlagged($query)
    {
        return $query->where('is_flagged', true);
    }

    public function scopeNotFlagged($query)
    {
        return $query->where('is_flagged', false);
    }

    public function scopeBlurred($query)
    {
        return $query->where('is_blurred', true);
    }

    public function scopeHighActivity($query)
    {
        return $query->where('activity_level', '>=', 70);
    }

    public function scopeLowActivity($query)
    {
        return $query->where('activity_level', '<', 30);
    }

    public function scopeToday($query)
    {
        return $query->whereDate('captured_at', today());
    }

    // Methods
    public function getUrl(): string
    {
        return asset('storage/' . $this->file_path);
    }

    public function getThumbnailUrl(): ?string
    {
        return $this->thumbnail_path ? asset('storage/' . $this->thumbnail_path) : null;
    }

    public function getFileSizeFormatted(): string
    {
        $bytes = $this->file_size;
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, 2) . ' ' . $units[$i];
    }

    public function getDimensions(): string
    {
        return $this->width . 'x' . $this->height;
    }

    public function getAspectRatio(): float
    {
        return $this->height > 0 ? round($this->width / $this->height, 2) : 0;
    }

    public function getActivityLevelText(): string
    {
        return match (true) {
            $this->activity_level >= 80 => 'Very High',
            $this->activity_level >= 60 => 'High',
            $this->activity_level >= 40 => 'Medium',
            $this->activity_level >= 20 => 'Low',
            default => 'Very Low'
        };
    }

    public function getActivityLevelColor(): string
    {
        return match (true) {
            $this->activity_level >= 80 => 'green',
            $this->activity_level >= 60 => 'blue',
            $this->activity_level >= 40 => 'yellow',
            $this->activity_level >= 20 => 'orange',
            default => 'red'
        };
    }

    public function flag(string $reason = null): self
    {
        $this->is_flagged = true;
        $this->flag_reason = $reason;
        $this->save();

        return $this;
    }

    public function unflag(): self
    {
        $this->is_flagged = false;
        $this->flag_reason = null;
        $this->save();

        return $this;
    }

    public function blur(int $level = 10): self
    {
        $this->is_blurred = true;
        $this->blur_level = $level;
        $this->save();

        return $this;
    }

    public function unblur(): self
    {
        $this->is_blurred = false;
        $this->blur_level = null;
        $this->save();

        return $this;
    }

    public function isHighActivity(): bool
    {
        return $this->activity_level >= 70;
    }

    public function isLowActivity(): bool
    {
        return $this->activity_level < 30;
    }

    public function hasMouseActivity(): bool
    {
        return $this->mouse_clicks > 0;
    }

    public function hasKeyboardActivity(): bool
    {
        return $this->keystrokes > 0;
    }

    public function getTotalActivity(): int
    {
        return $this->mouse_clicks + $this->keystrokes;
    }

    public function getMetadata($key = null, $default = null)
    {
        if ($key === null) {
            return $this->metadata;
        }

        return data_get($this->metadata, $key, $default);
    }

    public function setMetadata($key, $value): self
    {
        $metadata = $this->metadata ?: [];
        data_set($metadata, $key, $value);
        $this->metadata = $metadata;
        $this->save();

        return $this;
    }

    public function generateThumbnail(): bool
    {
        if (!$this->file_path || !file_exists(storage_path('app/public/' . $this->file_path))) {
            return false;
        }

        try {
            $sourcePath = storage_path('app/public/' . $this->file_path);
            $thumbnailDir = dirname($this->file_path) . '/thumbnails';
            $thumbnailPath = $thumbnailDir . '/' . pathinfo($this->file_name, PATHINFO_FILENAME) . '_thumb.jpg';
            $fullThumbnailPath = storage_path('app/public/' . $thumbnailPath);

            // Create thumbnail directory if it doesn't exist
            if (!file_exists(storage_path('app/public/' . $thumbnailDir))) {
                mkdir(storage_path('app/public/' . $thumbnailDir), 0755, true);
            }

            // Create thumbnail using GD
            $source = imagecreatefromstring(file_get_contents($sourcePath));
            if (!$source) {
                return false;
            }

            $sourceWidth = imagesx($source);
            $sourceHeight = imagesy($source);
            
            // Calculate thumbnail dimensions (max 300px)
            $maxSize = 300;
            $ratio = min($maxSize / $sourceWidth, $maxSize / $sourceHeight);
            $thumbWidth = intval($sourceWidth * $ratio);
            $thumbHeight = intval($sourceHeight * $ratio);

            $thumbnail = imagecreatetruecolor($thumbWidth, $thumbHeight);
            imagecopyresampled($thumbnail, $source, 0, 0, 0, 0, $thumbWidth, $thumbHeight, $sourceWidth, $sourceHeight);

            $result = imagejpeg($thumbnail, $fullThumbnailPath, 80);

            imagedestroy($source);
            imagedestroy($thumbnail);

            if ($result) {
                $this->thumbnail_path = $thumbnailPath;
                $this->save();
                return true;
            }

            return false;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Failed to generate thumbnail for screenshot ' . $this->id . ': ' . $e->getMessage());
            return false;
        }
    }

    public function delete(): ?bool
    {
        // Delete the actual file
        if ($this->file_path && file_exists(storage_path('app/public/' . $this->file_path))) {
            unlink(storage_path('app/public/' . $this->file_path));
        }

        // Delete thumbnail
        if ($this->thumbnail_path && file_exists(storage_path('app/public/' . $this->thumbnail_path))) {
            unlink(storage_path('app/public/' . $this->thumbnail_path));
        }

        return parent::delete();
    }

    public function getSummary(): array
    {
        return [
            'basic' => [
                'id' => $this->id,
                'file_name' => $this->file_name,
                'captured_at' => $this->captured_at,
                'file_size' => $this->getFileSizeFormatted(),
                'dimensions' => $this->getDimensions(),
            ],
            'activity' => [
                'level' => $this->activity_level,
                'level_text' => $this->getActivityLevelText(),
                'mouse_clicks' => $this->mouse_clicks,
                'keystrokes' => $this->keystrokes,
                'total_activity' => $this->getTotalActivity(),
            ],
            'context' => [
                'active_window' => $this->active_window_title,
                'active_application' => $this->active_application,
                'project_name' => $this->project->name,
                'user_name' => $this->user->name,
            ],
            'flags' => [
                'is_flagged' => $this->is_flagged,
                'flag_reason' => $this->flag_reason,
                'is_blurred' => $this->is_blurred,
                'blur_level' => $this->blur_level,
            ],
            'urls' => [
                'image' => $this->getUrl(),
                'thumbnail' => $this->getThumbnailUrl(),
            ],
        ];
    }
}
