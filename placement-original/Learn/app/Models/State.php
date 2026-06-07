<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class State extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'country_id',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the country this state belongs to
     */
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get all districts for this state
     */
    public function districts(): HasMany
    {
        return $this->hasMany(District::class);
    }

    /**
     * Get only active districts
     */
    public function activeDistricts(): HasMany
    {
        return $this->districts()->where('status', true);
    }

    /**
     * Get all blocks through districts
     */
    public function blocks(): HasMany
    {
        return $this->hasMany(Block::class, 'state_id', 'id');
    }

    /**
     * Scope: Active states
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Get state by code
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('code', $code);
    }

    /**
     * Get districts count
     */
    public function getDistrictsCountAttribute(): int
    {
        return $this->districts()->count();
    }
}
