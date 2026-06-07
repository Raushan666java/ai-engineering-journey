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
        Schema::create('learning_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_teacher_subject_id')->constrained()->onDelete('cascade');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->string('topic'); // Specific topic within subject
            $table->enum('mastery_level', ['novice', 'beginner', 'intermediate', 'advanced', 'expert'])->default('novice');
            $table->decimal('progress_percentage', 5, 2)->default(0.00);
            $table->decimal('understanding_score', 5, 2)->default(0.00); // 0-100 comprehension score
            $table->decimal('practice_score', 5, 2)->default(0.00); // 0-100 practice performance
            $table->decimal('retention_score', 5, 2)->default(0.00); // 0-100 knowledge retention
            $table->integer('total_time_spent_minutes')->default(0);
            $table->integer('study_sessions_count')->default(0);
            $table->integer('assessments_taken')->default(0);
            $table->integer('assessments_passed')->default(0);
            $table->decimal('average_assessment_score', 5, 2)->default(0.00);
            $table->integer('problems_attempted')->default(0);
            $table->integer('problems_solved')->default(0);
            $table->decimal('problem_solving_accuracy', 5, 2)->default(0.00);
            $table->json('learning_patterns')->nullable(); // AI-analyzed learning patterns
            $table->json('strengths')->nullable(); // Identified strengths
            $table->json('weaknesses')->nullable(); // Areas needing improvement
            $table->json('ai_insights')->nullable(); // AI-generated insights
            $table->json('recommendations')->nullable(); // Personalized recommendations
            $table->json('skill_gaps')->nullable(); // Identified knowledge gaps
            $table->timestamp('first_studied_at')->nullable();
            $table->timestamp('last_studied_at')->nullable();
            $table->timestamp('mastery_achieved_at')->nullable();
            $table->integer('consecutive_study_days')->default(0);
            $table->integer('total_study_days')->default(0);
            $table->decimal('consistency_score', 5, 2)->default(0.00); // Study consistency
            $table->json('milestone_achievements')->nullable(); // Track milestones
            $table->json('learning_velocity')->nullable(); // Learning speed metrics
            $table->json('difficulty_progression')->nullable(); // Difficulty level progression
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'ai_teacher_subject_id']);
            $table->index(['mastery_level', 'progress_percentage']);
            $table->index('understanding_score');
            $table->index('last_studied_at');
            $table->index('topic');
            
            // Unique constraint to prevent duplicate progress entries
            $table->unique(['user_id', 'ai_teacher_subject_id', 'topic']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learning_progress');
    }
};
