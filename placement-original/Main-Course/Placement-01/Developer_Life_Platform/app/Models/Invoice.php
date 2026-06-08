<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Invoice extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'invoice_number',
        'company_id',
        'client_id',
        'project_id',
        'created_by',
        'issue_date',
        'due_date',
        'sent_date',
        'paid_date',
        'subtotal',
        'tax_rate',
        'tax_amount',
        'discount_rate',
        'discount_amount',
        'total',
        'paid_amount',
        'currency',
        'status',
        'notes',
        'terms',
        'payment_details',
        'pdf_path',
    ];

    protected $casts = [
        'issue_date' => 'datetime',
        'due_date' => 'datetime',
        'sent_date' => 'datetime',
        'paid_date' => 'datetime',
        'subtotal' => 'float',
        'tax_rate' => 'float',
        'tax_amount' => 'float',
        'discount_rate' => 'float',
        'discount_amount' => 'float',
        'total' => 'float',
        'paid_amount' => 'float',
        'payment_details' => 'array',
    ];

    // Relationships
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function items(): HasMany
    {
        return $this->hasMany(InvoiceItem::class);
    }

    // Scopes
    public function scopePaid($query)
    {
        return $query->where('status', 'paid');
    }

    public function scopeOverdue($query)
    {
        return $query->where('status', 'sent')
            ->where('due_date', '<', now());
    }

    // Methods
    public function isPaid(): bool
    {
        return $this->status === 'paid';
    }

    public function isOverdue(): bool
    {
        return $this->status === 'sent' && $this->due_date && $this->due_date->isPast();
    }

    public function getBalanceAmount(): float
    {
        return $this->total - $this->paid_amount;
    }

    public function markAsPaid(): self
    {
        $this->status = 'paid';
        $this->paid_date = now();
        $this->paid_amount = $this->total;
        $this->save();

        return $this;
    }

    public function calculateTotals(): self
    {
        $this->tax_amount = ($this->subtotal * $this->tax_rate) / 100;
        $this->discount_amount = ($this->subtotal * $this->discount_rate) / 100;
        $this->total = $this->subtotal + $this->tax_amount - $this->discount_amount;
        $this->save();

        return $this;
    }
}

class InvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id',
        'time_session_id',
        'task_id',
        'description',
        'quantity',
        'rate',
        'amount',
        'date',
    ];

    protected $casts = [
        'quantity' => 'decimal:2',
        'rate' => 'decimal:2',
        'amount' => 'decimal:2',
        'date' => 'date',
    ];

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    public function timeSession(): BelongsTo
    {
        return $this->belongsTo(TimeSession::class);
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }
}
