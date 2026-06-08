<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('learning_courses')->onDelete('cascade');
            $table->string('title');
            $table->string('slug');
            $table->text('description')->nullable();
            $table->longText('content')->nullable();
            $table->string('video_url')->nullable();
            $table->string('resource_url')->nullable();
            $table->enum('type', ['video', 'text', 'quiz', 'exercise', 'project'])->default('video');
            $table->integer('duration_minutes')->default(0);
            $table->integer('order_index')->default(0);
            $table->boolean('is_free')->default(false);
            $table->boolean('is_published')->default(true);
            $table->json('learning_objectives')->nullable();
            $table->json('resources')->nullable();
            $table->timestamps();
            
            $table->index(['course_id', 'order_index']);
            $table->index(['course_id', 'is_published']);
            $table->index('type');
            $table->unique(['course_id', 'slug']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
