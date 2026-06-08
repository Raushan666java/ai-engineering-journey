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
        Schema::create('practice_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_teacher_subject_id')->constrained()->onDelete('cascade');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('learning_step_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('session_type', ['practice', 'drill', 'challenge', 'timed'])->default('practice');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced']);
            $table->integer('total_problems')->default(0);
            $table->integer('solved_problems')->default(0);
            $table->integer('correct_solutions')->default(0);
            $table->timestamp('started_at');
            $table->timestamp('ended_at')->nullable();
            $table->integer('duration_minutes')->default(0);
            $table->decimal('average_time_per_problem', 8, 2)->default(0.00);
            $table->decimal('success_rate', 5, 2)->default(0.00); // Percentage
            $table->integer('hints_used')->default(0);
            $table->integer('attempts_made')->default(0);
            $table->json('concepts_practiced')->nullable(); // Array of concepts
            $table->json('weak_areas_identified')->nullable();
            $table->json('strong_areas_identified')->nullable();
            $table->json('ai_feedback')->nullable();
            $table->json('improvement_suggestions')->nullable();
            $table->json('next_recommendations')->nullable();
            $table->json('session_goals')->nullable();
            $table->json('goals_achieved')->nullable();
            $table->enum('completion_status', ['not_started', 'in_progress', 'completed', 'abandoned'])->default('not_started');
            $table->integer('mood_rating')->nullable(); // 1-10 scale
            $table->integer('difficulty_rating')->nullable(); // 1-10 scale
            $table->integer('satisfaction_rating')->nullable(); // 1-10 scale
            $table->text('notes')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'completion_status']);
            $table->index(['ai_teacher_subject_id', 'session_type']);
            $table->index('success_rate');
            $table->index('started_at');
            $table->index('difficulty_level');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('practice_sessions');
    }
};
