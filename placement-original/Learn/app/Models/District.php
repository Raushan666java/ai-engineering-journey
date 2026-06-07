<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class District extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'state_id',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the state this district belongs to
     */
    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    /**
     * Get the country through state
     */
    public function country()
    {
        return $this->state->country();
    }

    /**
     * Get all blocks for this district
     */
    public function blocks(): HasMany
    {
        return $this->hasMany(Block::class);
    }

    /**
     * Get only active blocks
     */
    public function activeBlocks(): HasMany
    {
        return $this->blocks()->where('status', true);
    }

    /**
     * Scope: Active districts
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Get district by code
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('code', $code);
    }

    /**
     * Filter by state
     */
    public function scopeByState($query, int $stateId)
    {
        return $query->where('state_id', $stateId);
    }

    /**
     * Get full location path
     */
    public function getFullLocationAttribute(): string
    {
        return "{$this->name}, {$this->state->name}, {$this->state->country->name}";
    }
}
