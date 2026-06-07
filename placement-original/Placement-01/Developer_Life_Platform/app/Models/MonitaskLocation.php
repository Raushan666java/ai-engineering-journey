<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MonitaskLocation extends Model
{
    protected $fillable = [
        'agent_id',
        'user_id',
        'project_id',
        'time_entry_id',
        'latitude',
        'longitude',
        'accuracy',
        'altitude',
        'speed',
        'heading',
        'distance_from_previous'
    ];

    protected $casts = [
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'accuracy' => 'float',
        'altitude' => 'float',
        'speed' => 'float',
        'heading' => 'float',
        'distance_from_previous' => 'decimal:2'
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

    public function getFormattedAddressAttribute(): string
    {
        if ($this->address) {
            return $this->address;
        }
        
        $parts = array_filter([$this->city, $this->state, $this->country]);
        return implode(', ', $parts) ?: 'Unknown Location';
    }

    public function getCoordinatesAttribute(): string
    {
        return $this->latitude . ', ' . $this->longitude;
    }

    public function getGoogleMapsUrlAttribute(): string
    {
        return "https://maps.google.com/maps?q={$this->latitude},{$this->longitude}";
    }

    public function distanceFrom(float $lat, float $lng): float
    {
        $earthRadius = 6371; // Earth's radius in kilometers
        
        $latFrom = deg2rad((float) $this->latitude);
        $lonFrom = deg2rad((float) $this->longitude);
        $latTo = deg2rad($lat);
        $lonTo = deg2rad($lng);
        
        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;
        
        $a = sin($latDelta / 2) * sin($latDelta / 2) +
             cos($latFrom) * cos($latTo) *
             sin($lonDelta / 2) * sin($lonDelta / 2);
        
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        
        return $earthRadius * $c;
    }

    public function isWithinRadius(float $centerLat, float $centerLng, float $radiusKm): bool
    {
        return $this->distanceFrom($centerLat, $centerLng) <= $radiusKm;
    }
}
