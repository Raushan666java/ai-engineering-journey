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
        Schema::create('study_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('learning_step_id')->nullable()->constrained()->onDelete('set null');
            $table->string('session_name')->nullable();
            $table->text('description')->nullable();
            $table->timestamp('started_at');
            $table->timestamp('ended_at')->nullable();
            $table->integer('duration_minutes')->default(0);
            $table->integer('planned_duration_minutes')->nullable();
            $table->enum('status', ['active', 'paused', 'completed', 'abandoned'])->default('active');
            $table->json('goals')->nullable(); // Session goals
            $table->integer('focus_score')->default(0); // 0-100 focus score
            $table->integer('productivity_score')->default(0); // 0-100 productivity score
            $table->integer('distraction_count')->default(0);
            $table->json('activities')->nullable(); // Track what user did
            $table->json('breaks_taken')->nullable(); // Break intervals
            $table->enum('mood_before', ['very_low', 'low', 'neutral', 'high', 'very_high'])->nullable();
            $table->enum('mood_after', ['very_low', 'low', 'neutral', 'high', 'very_high'])->nullable();
            $table->enum('energy_level', ['very_low', 'low', 'neutral', 'high', 'very_high'])->nullable();
            $table->text('session_notes')->nullable();
            $table->json('achievements')->nullable(); // What was accomplished
            $table->json('challenges_faced')->nullable(); // Difficulties encountered
            $table->boolean('goal_achieved')->default(false);
            $table->decimal('goal_completion_percentage', 5, 2)->default(0.00);
            $table->json('ai_feedback')->nullable(); // AI-generated session feedback
            $table->json('recommendations')->nullable(); // AI recommendations for improvement
            $table->integer('screenshots_count')->default(0);
            $table->json('app_usage')->nullable(); // Track application usage
            $table->json('website_visits')->nullable(); // Track website usage
            $table->json('keyboard_mouse_activity')->nullable(); // Activity metrics
            $table->json('session_metrics')->nullable(); // Additional metrics
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'status']);
            $table->index(['learning_path_id', 'started_at']);
            $table->index('started_at');
            $table->index(['focus_score', 'productivity_score']);
            $table->index('goal_achieved');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('study_sessions');
    }
};
