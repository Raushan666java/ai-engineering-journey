<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Contractor extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'company_name',
        'bio',
        'skills',
        'experience_level',
        'hourly_rate',
        'status',
        'is_available',
        'provider',
        'provider_id',
        'provider_token',
        'provider_refresh_token',
        'profile_picture',
        'website',
        'github_username',
        'linkedin_url',
        'job_title',
        'location',
        'company',
        'last_login_at',
        'last_login_ip',
        'last_login_device',
        'total_login_count'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'skills' => 'array',
        'hourly_rate' => 'decimal:2',
        'is_available' => 'boolean',
        'last_login_at' => 'datetime',
        'total_login_count' => 'integer'
    ];

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true)->where('status', 'active');
    }
}
