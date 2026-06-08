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
        Schema::create('learning_courses', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->unique();
            $table->text('description');
            $table->text('short_description');
            $table->string('thumbnail', 500)->nullable();
            $table->string('trailer_video', 500)->nullable();
            $table->foreignId('instructor_id')->constrained('users')->onDelete('cascade');
            $table->string('category_id')->nullable();
            $table->enum('level', ['beginner', 'intermediate', 'advanced'])->index();
            $table->enum('status', ['draft', 'published', 'archived', 'under_review'])->default('draft')->index();
            $table->decimal('price', 10, 2)->default(0.00);
            $table->decimal('discounted_price', 10, 2)->nullable();
            $table->string('currency', 3)->default('USD');
            $table->json('tags')->nullable();
            $table->json('learning_outcomes')->nullable(); // What students will learn
            $table->json('requirements')->nullable(); // Prerequisites
            $table->integer('duration_hours')->default(0);
            $table->integer('total_lectures')->default(0);
            $table->integer('total_quizzes')->default(0);
            $table->integer('total_assignments')->default(0);
            $table->integer('total_resources')->default(0);
            $table->integer('enrolled_count')->default(0);
            $table->decimal('rating', 3, 2)->default(0.00);
            $table->integer('rating_count')->default(0);
            $table->integer('completion_count')->default(0);
            $table->boolean('has_certificate')->default(false)->index();
            $table->integer('certificate_threshold')->default(80); // % completion required
            $table->json('languages')->nullable();
            $table->datetime('last_updated_at')->nullable()->index();
            $table->boolean('is_featured')->default(false)->index();
            $table->boolean('is_free')->default(false)->index();
            $table->boolean('allow_refund')->default(true);
            $table->integer('refund_period_days')->default(30);
            $table->datetime('published_at')->nullable()->index();
            $table->datetime('archived_at')->nullable();
            $table->json('seo_meta')->nullable(); // SEO metadata
            $table->decimal('average_completion_rate', 5, 2)->default(0.00);
            $table->integer('estimated_study_time_hours')->nullable();
            $table->string('is_active')->default(true);
            $table->timestamps();
            
            // Optimized indexes for common queries
            $table->index(['instructor_id', 'status', 'is_featured']);
            $table->index(['category_id', 'level', 'status']);
            $table->index(['status', 'is_featured', 'published_at']);
            $table->index(['price', 'is_free', 'status']);
            $table->index(['rating', 'enrolled_count', 'status']);
            $table->index(['created_at', 'status']);
            $table->fullText(['title', 'description', 'short_description']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learning_courses');
    }
};
