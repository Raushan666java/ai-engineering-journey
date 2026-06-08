<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Block extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'state_id',
        'district_id',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the district this block belongs to
     */
    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }

    /**
     * Get the state this block belongs to
     * Note: state_id is stored as string in your schema
     */
    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    /**
     * Get all panchayats for this block
     */
    public function panchayats(): HasMany
    {
        return $this->hasMany(Panchayat::class);
    }

    /**
     * Get only active panchayats
     */
    public function activePanchayats(): HasMany
    {
        return $this->panchayats()->where('status', true);
    }

    /**
     * Scope: Active blocks
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Get block by code
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('code', $code);
    }

    /**
     * Filter by district
     */
    public function scopeByDistrict($query, int $districtId)
    {
        return $query->where('district_id', $districtId);
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
        return "{$this->name}, {$this->district->name}, {$this->district->state->name}";
    }
}
