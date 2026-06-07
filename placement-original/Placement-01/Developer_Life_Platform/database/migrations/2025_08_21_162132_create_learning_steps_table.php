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
        Schema::create('learning_steps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('learning_path_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('content'); // Main learning content
            $table->enum('type', ['theory', 'practice', 'assessment', 'project', 'discussion']);
            $table->integer('order_index');
            $table->integer('estimated_duration_minutes')->default(0);
            $table->json('learning_objectives'); // Specific objectives for this step
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced']);
            $table->json('prerequisites')->nullable(); // Prerequisites for this step
            $table->text('instructions')->nullable(); // How to complete this step
            $table->json('resources')->nullable(); // Additional resources
            $table->json('ai_generated_content')->nullable(); // Dynamic AI content
            $table->json('practice_exercises')->nullable(); // Exercises for practice steps
            $table->json('assessment_criteria')->nullable(); // For assessment steps
            $table->boolean('is_mandatory')->default(true);
            $table->boolean('is_completed')->default(false);
            $table->timestamp('completed_at')->nullable();
            $table->decimal('completion_score', 5, 2)->nullable();
            $table->text('completion_notes')->nullable();
            $table->integer('attempts_count')->default(0);
            $table->timestamp('last_attempt_at')->nullable();
            $table->json('user_interactions')->nullable(); // Track user interactions
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['learning_path_id', 'order_index']);
            $table->index(['type', 'difficulty_level']);
            $table->index('is_completed');
            $table->index('completion_score');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learning_steps');
    }
};
