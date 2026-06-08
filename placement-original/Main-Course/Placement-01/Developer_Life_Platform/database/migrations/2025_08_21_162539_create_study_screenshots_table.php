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
        Schema::create('study_screenshots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('study_session_id')->constrained()->onDelete('cascade');
            $table->string('file_path');
            $table->string('file_name');
            $table->bigInteger('file_size')->default(0);
            $table->timestamp('captured_at');
            $table->enum('screenshot_type', ['automatic', 'manual', 'trigger'])->default('automatic');
            $table->json('analysis_data')->nullable(); // AI analysis results
            $table->enum('privacy_level', ['public', 'private', 'secure'])->default('private');
            $table->boolean('is_analyzed')->default(false);
            $table->integer('focus_score')->nullable(); // 0-100 focus score
            $table->json('productivity_indicators')->nullable(); // Productivity metrics
            $table->json('detected_apps')->nullable(); // Apps detected in screenshot
            $table->json('detected_websites')->nullable(); // Websites detected
            $table->text('text_content')->nullable(); // OCR extracted text
            $table->json('metadata')->nullable(); // Additional metadata
            $table->timestamps();
            
            // Indexes
            $table->index(['study_session_id', 'captured_at']);
            $table->index('is_analyzed');
            $table->index('focus_score');
            $table->index('screenshot_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('study_screenshots');
    }
};
