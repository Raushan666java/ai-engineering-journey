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
        Schema::create('assessment_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_assessment_id')->constrained()->onDelete('cascade');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->integer('attempt_number')->default(1);
            $table->json('submitted_answers'); // User's submitted answers
            $table->json('correct_answers'); // Correct answers for comparison
            $table->json('question_scores'); // Score for each question
            $table->decimal('total_score', 5, 2)->default(0.00);
            $table->decimal('percentage_score', 5, 2)->default(0.00);
            $table->boolean('is_passed')->default(false);
            $table->enum('status', ['in_progress', 'submitted', 'graded', 'reviewed'])->default('in_progress');
            $table->timestamp('started_at');
            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('graded_at')->nullable();
            $table->integer('time_taken_minutes')->default(0);
            $table->integer('time_limit_minutes')->nullable();
            $table->boolean('time_exceeded')->default(false);
            $table->json('detailed_feedback'); // Detailed feedback for each question
            $table->text('overall_feedback')->nullable(); // General feedback
            $table->json('ai_analysis')->nullable(); // AI analysis of performance
            $table->json('strengths_identified')->nullable(); // Areas of strength
            $table->json('weaknesses_identified')->nullable(); // Areas for improvement
            $table->json('recommendations')->nullable(); // Specific recommendations
            $table->json('learning_gaps')->nullable(); // Identified knowledge gaps
            $table->decimal('improvement_score', 5, 2)->nullable(); // Improvement from previous attempts
            $table->json('question_analytics')->nullable(); // Per-question analytics
            $table->json('time_per_question')->nullable(); // Time spent on each question
            $table->json('answer_changes')->nullable(); // Track answer modifications
            $table->integer('hints_used')->default(0);
            $table->json('hint_usage')->nullable(); // Which hints were used
            $table->boolean('auto_submitted')->default(false); // If submitted due to time limit
            $table->text('submission_notes')->nullable(); // User notes about submission
            $table->json('browser_data')->nullable(); // Browser/environment data
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'ai_assessment_id']);
            $table->index(['attempt_number', 'submitted_at']);
            $table->index('percentage_score');
            $table->index('is_passed');
            $table->index('status');
            $table->index('started_at');
            
            // Unique constraint for attempt tracking
            $table->unique(['user_id', 'ai_assessment_id', 'attempt_number'], 'assessment_submissions_unique_attempt');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessment_submissions');
    }
};
