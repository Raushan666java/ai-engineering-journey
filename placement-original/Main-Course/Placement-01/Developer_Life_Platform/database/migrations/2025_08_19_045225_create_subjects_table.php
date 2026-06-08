<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('icon')->nullable();
            $table->string('color', 7)->default('#3B82F6');
            $table->enum('category', [
                'programming', 'mathematics', 'science', 'business', 
                'language', 'arts', 'engineering', 'medicine', 'other'
            ])->default('other');
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced', 'expert'])->default('beginner');
            $table->integer('estimated_hours')->default(0);
            $table->json('learning_outcomes')->nullable();
            $table->json('prerequisites')->nullable();
            $table->json('tags')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('course_count')->default(0);
            $table->integer('enrollment_count')->default(0);
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('rating_count')->default(0);
            $table->timestamps();
            
            $table->index(['category', 'is_active']);
            $table->index(['is_featured', 'is_active']);
            $table->index('difficulty_level');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subjects');
    }
};
