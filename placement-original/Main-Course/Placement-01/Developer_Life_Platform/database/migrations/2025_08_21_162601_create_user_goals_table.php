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
        Schema::create('user_goals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_teacher_subject_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('goal_type', ['daily', 'weekly', 'monthly', 'custom', 'milestone']);
            $table->enum('category', ['study_time', 'problems_solved', 'assessments', 'mastery', 'consistency', 'other']);
            $table->integer('target_value')->nullable(); // Numeric target
            $table->string('target_unit')->nullable(); // hours, problems, percentage, etc.
            $table->integer('current_value')->default(0);
            $table->decimal('progress_percentage', 5, 2)->default(0.00);
            $table->enum('priority', ['low', 'medium', 'high', 'critical'])->default('medium');
            $table->date('start_date');
            $table->date('target_date');
            $table->date('completed_date')->nullable();
            $table->enum('status', ['not_started', 'in_progress', 'completed', 'paused', 'failed'])->default('not_started');
            $table->boolean('is_recurring')->default(false);
            $table->string('recurrence_pattern')->nullable(); // daily, weekly, monthly
            $table->json('milestones')->nullable(); // Sub-goals or checkpoints
            $table->json('rewards')->nullable(); // Rewards for achieving goal
            $table->json('tracking_metrics')->nullable(); // How to measure progress
            $table->integer('streak_count')->default(0); // For recurring goals
            $table->integer('best_streak')->default(0);
            $table->timestamp('last_progress_update')->nullable();
            $table->json('progress_history')->nullable(); // Daily/weekly progress
            $table->text('motivation_note')->nullable(); // Why this goal matters
            $table->text('completion_reflection')->nullable(); // Reflection after completion
            $table->json('ai_insights')->nullable(); // AI analysis of goal progress
            $table->json('recommendations')->nullable(); // AI recommendations
            $table->boolean('is_public')->default(false); // Share with community
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'status']);
            $table->index(['goal_type', 'category']);
            $table->index('target_date');
            $table->index('priority');
            $table->index('is_recurring');
            $table->index('progress_percentage');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_goals');
    }
};
