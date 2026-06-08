<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductivityRule extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'type',
        'pattern',
        'classification',
        'priority',
        'is_active',
        'conditions',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'conditions' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function matches(string $input): bool
    {
        return match ($this->type) {
            'application' => str_contains(strtolower($input), strtolower($this->pattern)),
            'website' => str_contains(strtolower($input), strtolower($this->pattern)),
            'keyword' => str_contains(strtolower($input), strtolower($this->pattern)),
            default => false
        };
    }
}

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'generated_by',
        'company_id',
        'name',
        'slug',
        'type',
        'filters',
        'columns',
        'date_from',
        'date_to',
        'data',
        'summary',
        'format',
        'file_path',
        'is_scheduled',
        'schedule_frequency',
        'recipients',
        'last_generated_at',
    ];

    protected $casts = [
        'date_from' => 'date',
        'date_to' => 'date',
        'filters' => 'array',
        'columns' => 'array',
        'data' => 'array',
        'summary' => 'array',
        'is_scheduled' => 'boolean',
        'recipients' => 'array',
        'last_generated_at' => 'datetime',
    ];

    public function generatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'generated_by');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}

class Integration extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'type',
        'config',
        'is_active',
        'last_sync_at',
        'sync_status',
    ];

    protected $casts = [
        'config' => 'array',
        'is_active' => 'boolean',
        'last_sync_at' => 'datetime',
        'sync_status' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}

class Webhook extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'url',
        'events',
        'secret',
        'is_active',
        'retry_count',
        'last_triggered_at',
        'last_response',
    ];

    protected $casts = [
        'events' => 'array',
        'is_active' => 'boolean',
        'last_triggered_at' => 'datetime',
        'last_response' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
