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
        Schema::create('monitask_time_entries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('project_id')->constrained('monitask_projects')->onDelete('cascade');
            $table->foreignId('task_id')->nullable()->constrained('monitask_tasks')->onDelete('set null');
            $table->text('description')->nullable();
            $table->datetime('start_time');
            $table->datetime('end_time')->nullable();
            $table->integer('duration_minutes')->default(0); // Changed from duration_seconds
            $table->boolean('is_billable')->default(true);
            $table->decimal('hourly_rate', 8, 2)->nullable();
            $table->decimal('amount', 10, 2)->default(0); // Calculated: duration * rate
            $table->json('tags')->nullable();
            $table->enum('status', ['running', 'stopped', 'approved', 'rejected'])->default('stopped');
            $table->text('rejection_reason')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('set null');
            $table->datetime('approved_at')->nullable();
            $table->boolean('is_manual')->default(false); // Manual entry vs timer
            $table->json('activity_data')->nullable(); // Mouse/keyboard activity
            $table->integer('productivity_score')->nullable(); // 0-100
            $table->timestamps();
            
            $table->index(['user_id', 'project_id']);
            $table->index(['start_time', 'end_time']);
            $table->index(['status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_time_entries');
    }
};
