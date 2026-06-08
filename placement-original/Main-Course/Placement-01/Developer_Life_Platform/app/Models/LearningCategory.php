<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LearningCategory extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
        'color',
        'parent_id',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function courses(): HasMany
    {
        return $this->hasMany(LearningCourse::class, 'category_id');
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(LearningCategory::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(LearningCategory::class, 'parent_id');
    }

    public function getFullNameAttribute(): string
    {
        if ($this->parent) {
            return $this->parent->name . ' > ' . $this->name;
        }
        return $this->name;
    }

    public function getCourseCountAttribute(): int
    {
        return $this->courses()->count();
    }

    public function isParent(): bool
    {
        return $this->children()->count() > 0;
    }

    public function isChild(): bool
    {
        return !is_null($this->parent_id);
    }
}
