<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Panchayat extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'state_id',
        'code',
        'block_id',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the block this panchayat belongs to
     */
    public function block(): BelongsTo
    {
        return $this->belongsTo(Block::class);
    }

    /**
     * Get the district through block
     */
    public function district()
    {
        return $this->block->district();
    }

    /**
     * Get the state through block
     */
    public function state()
    {
        return $this->block->state();
    }

    /**
     * Scope: Active panchayats
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Get panchayat by code
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('code', $code);
    }

    /**
     * Filter by block
     */
    public function scopeByBlock($query, int $blockId)
    {
        return $query->where('block_id', $blockId);
    }

    /**
     * Filter by state
     */
    public function scopeByState($query, string $stateId)
    {
        return $query->where('state_id', $stateId);
    }

    /**
     * Get full location path
     */
    public function getFullLocationAttribute(): string
    {
        return "{$this->name}, {$this->block->name}, {$this->block->district->name}, {$this->block->district->state->name}";
    }
}
