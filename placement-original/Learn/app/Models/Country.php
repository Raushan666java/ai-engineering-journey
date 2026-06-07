<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'phone_code',
        'currency',
        'currency_symbol',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get all states for this country
     */
    public function states(): HasMany
    {
        return $this->hasMany(State::class);
    }

    /**
     * Get only active states
     */
    public function activeStates(): HasMany
    {
        return $this->states()->where('status', true);
    }

    /**
     * Scope: Active countries
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Get country by code
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('code', $code);
    }
}
