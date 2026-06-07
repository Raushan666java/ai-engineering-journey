<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LearningSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'start_time',
        'end_time',
        'duration_seconds',
        'content_type', // e.g. 'lesson', 'exercise', etc.
        'notes',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
