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
        // Learning Categories
        Schema::create('learning_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('icon')->nullable();
            $table->string('color', 7)->default('#007bff');
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // Learning Courses
        // Schema::create('learning_courses', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('title');
        //     $table->text('description');
        //     $table->text('content')->nullable();
        //     $table->foreignId('category_id')->constrained('learning_categories')->onDelete('cascade');
        //     $table->enum('difficulty', ['beginner', 'intermediate', 'advanced']);
        //     $table->integer('duration_hours')->nullable();
        //     $table->string('instructor')->nullable();
        //     $table->decimal('price', 8, 2)->default(0);
        //     $table->boolean('is_free')->default(true);
        //     $table->boolean('is_active')->default(true);
        //     $table->json('tags')->nullable();
        //     $table->timestamps();
        // });

        // User Course Progress
        Schema::create('user_course_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('course_id')->constrained('learning_courses')->onDelete('cascade');
            $table->enum('status', ['not_started', 'in_progress', 'completed', 'paused']);
            $table->integer('progress_percentage')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
            
            $table->unique(['user_id', 'course_id']);
        });

        // Learning Goals
        Schema::create('learning_goals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->foreignId('category_id')->constrained('learning_categories')->onDelete('cascade');
            $table->date('target_date');
            $table->enum('priority', ['low', 'medium', 'high', 'critical']);
            $table->enum('type', ['learning', 'skill', 'project', 'career', 'certification']);
            $table->enum('status', ['active', 'completed', 'paused', 'cancelled']);
            $table->integer('progress')->default(0);
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });

        // Goal Tasks
        Schema::create('goal_tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('goal_id')->constrained('learning_goals')->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('target_date');
            $table->enum('status', ['pending', 'in_progress', 'completed', 'cancelled']);
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });

        // Goal Progress History
        Schema::create('goal_progress_history', function (Blueprint $table) {
            $table->id();
            $table->foreignId('goal_id')->constrained('learning_goals')->onDelete('cascade');
            $table->integer('progress_value');
            $table->timestamp('recorded_at');
            $table->timestamps();
        });

        // User Achievements
        Schema::create('user_achievements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('type')->default('general');
            $table->string('icon')->nullable();
            $table->timestamp('earned_at');
            $table->timestamps();
        });

        // Coding Problems
        Schema::create('coding_problems', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('input_format')->nullable();
            $table->text('output_format')->nullable();
            $table->text('constraints')->nullable();
            $table->enum('difficulty', ['easy', 'medium', 'hard']);
            $table->integer('difficulty_order')->default(1);
            $table->string('category');
            $table->json('tags')->nullable();
            $table->integer('time_limit')->default(1000); // milliseconds
            $table->integer('memory_limit')->default(256); // MB
            $table->decimal('acceptance_rate', 5, 2)->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Problem Examples
        Schema::create('problem_examples', function (Blueprint $table) {
            $table->id();
            $table->foreignId('problem_id')->constrained('coding_problems')->onDelete('cascade');
            $table->integer('example_number');
            $table->text('input');
            $table->text('output');
            $table->text('explanation')->nullable();
            $table->timestamps();
        });

        // Coding Submissions
        Schema::create('coding_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('problem_id')->constrained('coding_problems')->onDelete('cascade');
            $table->text('code');
            $table->string('language');
            $table->enum('status', ['pending', 'accepted', 'wrong_answer', 'time_limit_exceeded', 'memory_limit_exceeded', 'runtime_error', 'compilation_error']);
            $table->integer('execution_time')->nullable(); // milliseconds
            $table->integer('memory_used')->nullable(); // KB
            $table->integer('test_cases_passed')->default(0);
            $table->integer('total_test_cases')->default(0);
            $table->text('error_message')->nullable();
            $table->timestamps();
        });

        // Interview Topics
        Schema::create('interview_topics', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('category');
            $table->enum('importance', ['low', 'medium', 'high', 'critical']);
            $table->json('resources')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // User Topic Progress
        Schema::create('user_topic_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('topic_id')->constrained('interview_topics')->onDelete('cascade');
            $table->integer('progress')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
            
            $table->unique(['user_id', 'topic_id']);
        });

        // Mock Interviews
        Schema::create('mock_interviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['technical', 'behavioral', 'system_design', 'hr']);
            $table->enum('difficulty', ['beginner', 'intermediate', 'advanced']);
            $table->integer('duration_minutes');
            $table->enum('status', ['scheduled', 'in_progress', 'completed', 'cancelled']);
            $table->decimal('overall_score', 5, 2)->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });

        // Mock Interview Questions
        Schema::create('mock_interview_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mock_interview_id')->constrained('mock_interviews')->onDelete('cascade');
            $table->text('question');
            $table->text('expected_answer')->nullable();
            $table->string('category');
            $table->integer('question_order');
            $table->timestamps();
        });

        // Mock Interview Answers
        Schema::create('mock_interview_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mock_interview_id')->constrained('mock_interviews')->onDelete('cascade');
            $table->foreignId('question_id')->constrained('mock_interview_questions')->onDelete('cascade');
            $table->text('user_answer');
            $table->decimal('score', 5, 2)->nullable();
            $table->text('feedback')->nullable();
            $table->timestamps();
        });

        // Companies
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('website')->nullable();
            $table->string('logo')->nullable();
            $table->json('locations')->nullable();
            $table->boolean('is_hiring')->default(false);
            $table->timestamps();
        });

        // Company Questions
        Schema::create('company_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->text('question');
            $table->string('type'); // technical, behavioral, etc.
            $table->string('category');
            $table->integer('frequency')->default(1);
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        // Company Interview Process
        Schema::create('company_interview_process', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->integer('round_number');
            $table->string('round_name');
            $table->text('description');
            $table->integer('duration_minutes')->nullable();
            $table->string('format'); // online, onsite, phone
            $table->timestamps();
        });

        // User Company Preparation
        Schema::create('user_company_prep', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->integer('preparation_score')->default(0);
            $table->json('completed_topics')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamps();
            
            $table->unique(['user_id', 'company_id']);
        });

        // User Interviews
        Schema::create('user_interviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('company_name');
            $table->string('position');
            $table->enum('type', ['technical', 'behavioral', 'system_design', 'hr', 'final']);
            $table->datetime('interview_date');
            $table->enum('status', ['scheduled', 'completed', 'cancelled', 'rescheduled']);
            $table->text('notes')->nullable();
            $table->text('feedback')->nullable();
            $table->timestamps();
        });

        // User Daily Progress
        Schema::create('user_daily_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->date('date');
            $table->integer('problems_solved')->default(0);
            $table->integer('study_minutes')->default(0);
            $table->integer('goals_updated')->default(0);
            $table->timestamps();
            
            $table->unique(['user_id', 'date']);
        });

        // User Placement Statistics
        Schema::create('user_placement_stats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('total_problems_solved')->default(0);
            $table->integer('easy_problems_solved')->default(0);
            $table->integer('medium_problems_solved')->default(0);
            $table->integer('hard_problems_solved')->default(0);
            $table->integer('mock_interviews_taken')->default(0);
            $table->decimal('average_interview_score', 5, 2)->default(0);
            $table->timestamps();
            
            $table->unique(['user_id']);
        });

        // AI Teacher Interactions
        Schema::create('ai_teacher_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->text('user_message');
            $table->text('ai_response');
            $table->string('interaction_type')->default('chat');
            $table->json('context')->nullable();
            $table->timestamps();
        });

        // Coding Practice Sessions
        Schema::create('coding_practice_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('problem_id')->nullable()->constrained('coding_problems')->onDelete('set null');
            $table->string('session_type')->default('practice');
            $table->integer('duration_minutes')->nullable();
            $table->enum('status', ['started', 'completed', 'abandoned']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coding_practice_sessions');
        Schema::dropIfExists('ai_teacher_interactions');
        Schema::dropIfExists('user_placement_stats');
        Schema::dropIfExists('user_daily_progress');
        Schema::dropIfExists('user_interviews');
        Schema::dropIfExists('user_company_prep');
        Schema::dropIfExists('company_interview_process');
        Schema::dropIfExists('company_questions');
        Schema::dropIfExists('companies');
        Schema::dropIfExists('mock_interview_answers');
        Schema::dropIfExists('mock_interview_questions');
        Schema::dropIfExists('mock_interviews');
        Schema::dropIfExists('user_topic_progress');
        Schema::dropIfExists('interview_topics');
        Schema::dropIfExists('coding_submissions');
        Schema::dropIfExists('problem_examples');
        Schema::dropIfExists('coding_problems');
        Schema::dropIfExists('user_achievements');
        Schema::dropIfExists('goal_progress_history');
        Schema::dropIfExists('goal_tasks');
        Schema::dropIfExists('learning_goals');
        Schema::dropIfExists('user_course_progress');
        Schema::dropIfExists('learning_courses');
        Schema::dropIfExists('learning_categories');
    }
};
