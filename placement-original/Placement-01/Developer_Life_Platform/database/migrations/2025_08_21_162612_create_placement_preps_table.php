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
        Schema::create('placement_preps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('company_name');
            $table->string('position_title');
            $table->text('job_description')->nullable();
            $table->json('required_skills'); // Array of required skills
            $table->json('preferred_skills')->nullable(); // Array of preferred skills
            $table->enum('preparation_stage', ['research', 'skill_building', 'practice', 'interview_prep', 'applied', 'completed']);
            $table->date('target_application_date')->nullable();
            $table->date('application_date')->nullable();
            $table->date('interview_date')->nullable();
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->decimal('preparation_progress', 5, 2)->default(0.00); // Percentage
            $table->json('skill_gaps')->nullable(); // Skills that need improvement
            $table->json('completed_skills')->nullable(); // Skills already mastered
            $table->json('study_plan')->nullable(); // Customized study plan
            $table->integer('estimated_prep_hours')->nullable();
            $table->integer('actual_prep_hours')->default(0);
            $table->json('resources_used')->nullable(); // Learning resources
            $table->json('practice_sessions')->nullable(); // Practice session IDs
            $table->json('assessments_taken')->nullable(); // Assessment IDs
            $table->json('mock_interviews')->nullable(); // Mock interview data
            $table->decimal('readiness_score', 5, 2)->default(0.00); // AI-calculated readiness
            $table->json('ai_recommendations')->nullable(); // AI suggestions
            $table->json('interview_feedback')->nullable(); // Post-interview feedback
            $table->enum('application_status', ['planning', 'applied', 'interview_scheduled', 'interviewed', 'offer_received', 'rejected', 'withdrawn']);
            $table->text('notes')->nullable();
            $table->json('timeline_milestones')->nullable(); // Key dates and milestones
            $table->boolean('is_active')->default(true);
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            // Indexes
            $table->index(['user_id', 'preparation_stage']);
            $table->index('company_name');
            $table->index('application_status');
            $table->index('priority');
            $table->index('target_application_date');
            $table->index('readiness_score');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('placement_preps');
    }
};
