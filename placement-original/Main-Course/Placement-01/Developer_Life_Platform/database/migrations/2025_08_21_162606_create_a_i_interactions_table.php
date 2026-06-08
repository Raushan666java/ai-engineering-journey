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
        Schema::create('ai_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('ai_teacher_subject_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('learning_path_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('study_session_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('interaction_type', ['question', 'explanation', 'feedback', 'assessment', 'guidance', 'encouragement']);
            $table->text('user_message'); // What user asked/said
            $table->text('ai_response'); // AI teacher's response
            $table->string('context_topic')->nullable(); // What topic was being discussed
            $table->enum('difficulty_level', ['beginner', 'intermediate', 'advanced'])->nullable();
            $table->json('conversation_context')->nullable(); // Previous conversation context
            $table->integer('response_time_ms')->nullable(); // AI response time
            $table->enum('user_satisfaction', ['very_poor', 'poor', 'neutral', 'good', 'excellent'])->nullable();
            $table->boolean('was_helpful')->nullable(); // User feedback
            $table->text('user_feedback')->nullable(); // Additional user feedback
            $table->enum('ai_confidence', ['low', 'medium', 'high'])->default('medium');
            $table->json('ai_metadata')->nullable(); // AI model info, tokens used, etc.
            $table->json('intent_analysis')->nullable(); // What AI understood user wanted
            $table->json('learning_insights')->nullable(); // What AI learned about user
            $table->boolean('requires_followup')->default(false);
            $table->text('followup_suggestions')->nullable();
            $table->enum('conversation_stage', ['opening', 'learning', 'practice', 'assessment', 'closing'])->nullable();
            $table->json('personalization_data')->nullable(); // How response was personalized
            $table->integer('thumbs_up')->default(0); // Community feedback
            $table->integer('thumbs_down')->default(0);
            $table->boolean('is_flagged')->default(false); // For moderation
            $table->text('flag_reason')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'interaction_type']);
            $table->index(['ai_teacher_subject_id', 'context_topic']);
            $table->index('user_satisfaction');
            $table->index('was_helpful');
            $table->index('requires_followup');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_interactions');
    }
};
