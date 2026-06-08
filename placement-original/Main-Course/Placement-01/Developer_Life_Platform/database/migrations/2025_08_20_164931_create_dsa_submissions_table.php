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
        Schema::create('dsa_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('problem_id')->constrained('dsa_problems')->onDelete('cascade');
            $table->text('code');
            $table->string('language'); // 'python', 'java', 'cpp', 'javascript'
            $table->enum('status', ['pending', 'running', 'accepted', 'wrong_answer', 'time_limit_exceeded', 'memory_limit_exceeded', 'runtime_error', 'compilation_error']);
            $table->text('error_message')->nullable();
            $table->integer('execution_time')->nullable(); // milliseconds
            $table->integer('memory_used')->nullable(); // KB
            $table->json('test_results')->nullable(); // Results for each test case
            $table->integer('score')->default(0); // 0-100
            $table->timestamps();
            
            $table->index(['user_id', 'problem_id']);
            $table->index(['status']);
            $table->index(['created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dsa_submissions');
    }
};
