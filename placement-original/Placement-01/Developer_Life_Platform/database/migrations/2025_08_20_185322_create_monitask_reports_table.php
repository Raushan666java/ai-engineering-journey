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
        Schema::create('monitask_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('project_id')->nullable()->constrained('monitask_projects')->onDelete('cascade');
            $table->string('title');
            $table->enum('type', ['time_tracking', 'productivity', 'project_summary', 'team_performance', 'detailed_activity', 'invoice']);
            $table->enum('period', ['today', 'week', 'month', 'quarter', 'year', 'custom']);
            $table->date('start_date');
            $table->date('end_date');
            $table->json('data')->nullable();
            $table->json('filters')->nullable();
            $table->timestamp('generated_at')->nullable();
            $table->string('file_path')->nullable();
            $table->enum('status', ['generating', 'completed', 'failed'])->default('generating');
            $table->timestamps();

            $table->index(['user_id', 'created_at']);
            $table->index(['type', 'created_at']);
            $table->index(['status', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_reports');
    }
};
