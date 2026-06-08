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
        Schema::create('monitask_projects', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('slug', 255)->unique();
            $table->text('description')->nullable();
            $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('client_id')->nullable()->constrained('users')->onDelete('set null');
            $table->enum('status', ['planning', 'active', 'on_hold', 'completed', 'cancelled', 'archived'])->default('planning')->index();
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium')->index();
            $table->decimal('budget', 12, 2)->nullable();
            $table->decimal('hourly_rate', 8, 2)->nullable();
            $table->string('currency', 3)->default('USD');
            $table->date('start_date')->nullable()->index();
            $table->date('end_date')->nullable();
            $table->date('deadline')->nullable()->index();
            $table->timestamp('completion_date')->nullable();
            $table->timestamp('archived_at')->nullable();
            $table->decimal('estimated_hours', 8, 2)->nullable();
            $table->integer('progress_percentage')->default(0);
            $table->string('color', 7)->default('#007bff'); // Hex color code
            $table->json('tags')->nullable();
            $table->boolean('is_billable')->default(true)->index();
            $table->boolean('is_active')->default(true)->index();
            $table->boolean('track_time')->default(true);
            $table->boolean('require_task_time_tracking')->default(false);
            $table->json('settings')->nullable(); // Project-specific settings
            $table->decimal('total_hours_logged', 8, 2)->default(0.00);
            $table->decimal('total_amount_earned', 12, 2)->default(0.00);
            $table->timestamps();
            
            // Optimized indexes for common queries
            $table->index(['owner_id', 'status', 'is_active']);
            $table->index(['client_id', 'status']);
            $table->index(['status', 'priority', 'deadline']);
            $table->index(['is_billable', 'status']);
            $table->index(['created_at', 'status']);
            $table->fullText(['name', 'description']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_projects');
    }
};
