<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_teacher_subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('category'); // DSA, OS, CN, etc.
            $table->json('topics'); // Array of topics covered
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced']);
            $table->json('ai_persona')->nullable(); // AI teacher personality settings
            $table->text('learning_objectives')->nullable();
            $table->json('prerequisites')->nullable(); // Array of prerequisite subjects
            $table->integer('estimated_hours')->default(0);
            $table->json('resources')->nullable(); // Additional learning resources
            $table->json('teaching_style')->nullable(); // AI teaching methodology
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->json('metadata')->nullable(); // Additional configuration
            $table->timestamps();
            
            // Indexes for better performance
            $table->index(['category', 'difficulty_level']);
            $table->index(['is_active', 'sort_order']);
            $table->index('slug');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_teacher_subjects');
    }
};
