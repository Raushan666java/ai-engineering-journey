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
        Schema::create('learning_paths', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_teacher_subject_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced']);
            $table->json('learning_objectives'); // Array of objectives
            $table->integer('estimated_duration_hours')->default(0);
            $table->integer('total_steps')->default(0);
            $table->integer('completed_steps')->default(0);
            $table->decimal('progress_percentage', 5, 2)->default(0.00);
            $table->enum('status', ['not_started', 'in_progress', 'completed', 'paused'])->default('not_started');
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamp('last_accessed_at')->nullable();
            $table->json('ai_recommendations')->nullable(); // AI-generated recommendations
            $table->json('prerequisites_met')->nullable(); // Track prerequisite completion
            $table->decimal('mastery_score', 5, 2)->default(0.00);
            $table->json('learning_style_adaptations')->nullable(); // Personalized adaptations
            $table->text('notes')->nullable(); // User notes
            $table->boolean('is_personalized')->default(true);
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'status']);
            $table->index(['ai_teacher_subject_id', 'difficulty_level']);
            $table->index('progress_percentage');
            $table->index('last_accessed_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learning_paths');
    }
};
