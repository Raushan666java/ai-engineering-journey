<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseEnrollment extends Model
{
    protected $fillable = [
        'user_id',
        'learning_course_id',
        'progress_percentage',
        'enrolled_at',
        'completed_at',
        'status',
    ];
}
