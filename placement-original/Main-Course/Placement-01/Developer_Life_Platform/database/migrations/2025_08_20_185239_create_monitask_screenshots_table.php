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
        Schema::create('monitask_screenshots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('project_id')->constrained('monitask_projects')->onDelete('cascade');
            $table->foreignId('time_entry_id')->nullable()->constrained('monitask_time_entries')->onDelete('set null');
            $table->string('file_path');
            $table->string('thumbnail_path')->nullable();
            $table->timestamp('captured_at');
            $table->integer('blur_level')->default(0);
            $table->integer('activity_score')->default(0);
            $table->boolean('is_approved')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('set null');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'captured_at']);
            $table->index(['project_id', 'captured_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_screenshots');
    }
};
