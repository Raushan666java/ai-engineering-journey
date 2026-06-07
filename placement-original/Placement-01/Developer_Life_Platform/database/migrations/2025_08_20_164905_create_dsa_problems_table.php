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
        Schema::create('dsa_problems', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->unique();
            $table->text('description');
            $table->string('category', 50)->index(); // arrays, strings, dynamic-programming, etc.
            $table->enum('difficulty', ['easy', 'medium', 'hard'])->index();
            $table->json('tags'); // ['array', 'sorting', 'binary-search']
            $table->json('companies')->nullable(); // ['google', 'microsoft', 'amazon']
            $table->text('constraints')->nullable();
            $table->json('examples'); // Multiple examples with input/output
            $table->text('hints')->nullable();
            $table->text('editorial')->nullable(); // Detailed solution explanation
            $table->integer('time_limit')->default(1000); // milliseconds
            $table->integer('memory_limit')->default(256); // MB
            $table->json('test_cases'); // Hidden test cases for validation
            $table->json('sample_solutions')->nullable(); // Solutions in different languages
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
            $table->decimal('acceptance_rate', 5, 2)->default(0.00); // percentage with 2 decimals
            $table->integer('total_submissions')->default(0)->index();
            $table->integer('accepted_submissions')->default(0);
            $table->boolean('is_premium')->default(false)->index();
            $table->boolean('is_active')->default(true)->index();
            $table->integer('likes')->default(0);
            $table->integer('dislikes')->default(0);
            $table->timestamps();
            
            // Optimized indexes for common queries
            $table->index(['difficulty', 'is_active', 'category']);
            $table->index(['is_premium', 'is_active']);
            $table->index(['created_by', 'is_active']);
            $table->index(['total_submissions', 'difficulty']);
            $table->fullText(['title', 'description']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dsa_problems');
    }
};
