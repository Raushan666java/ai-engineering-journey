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
        Schema::create('ai_assessments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ai_teacher_subject_id')->constrained()->onDelete('cascade');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('learning_step_id')->nullable()->constrained()->onDelete('set null');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('type', ['quiz', 'coding', 'practical', 'theory', 'mixed']);
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced']);
            $table->json('topics_covered'); // Array of topics this assessment covers
            $table->json('questions'); // Assessment questions and answers
            $table->integer('total_questions')->default(0);
            $table->integer('time_limit_minutes')->nullable();
            $table->integer('passing_score')->default(70); // Minimum score to pass
            $table->integer('max_attempts')->default(3);
            $table->boolean('randomize_questions')->default(true);
            $table->boolean('show_results_immediately')->default(true);
            $table->boolean('allow_review')->default(true);
            $table->json('grading_criteria')->nullable(); // How questions are graded
            $table->json('feedback_rules')->nullable(); // Rules for providing feedback
            $table->enum('status', ['draft', 'active', 'archived'])->default('active');
            $table->json('prerequisite_assessments')->nullable(); // Required prior assessments
            $table->decimal('average_score', 5, 2)->default(0.00);
            $table->integer('attempts_count')->default(0);
            $table->integer('passed_count')->default(0);
            $table->decimal('pass_rate', 5, 2)->default(0.00);
            $table->json('analytics')->nullable(); // Assessment performance analytics
            $table->json('ai_generation_params')->nullable(); // Parameters used for AI generation
            $table->boolean('is_adaptive')->default(false); // Adaptive difficulty
            $table->json('adaptive_rules')->nullable(); // Rules for adaptive assessments
            $table->json('tags')->nullable(); // Assessment tags for categorization
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['ai_teacher_subject_id', 'type']);
            $table->index(['difficulty_level', 'status']);
            $table->index('passing_score');
            $table->index('average_score');
            $table->index('pass_rate');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_assessments');
    }
};
