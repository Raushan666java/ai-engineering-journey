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
        Schema::create('monitask_activity_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('project_id')->constrained('monitask_projects')->onDelete('cascade');
            $table->foreignId('time_entry_id')->nullable()->constrained('monitask_time_entries')->onDelete('set null');
            $table->string('application_name')->nullable();
            $table->text('window_title')->nullable();
            $table->text('url')->nullable();
            $table->enum('category', ['productive', 'neutral', 'unproductive', 'unknown'])->default('unknown');
            $table->enum('productivity_level', ['productive', 'neutral', 'unproductive'])->default('neutral');
            $table->integer('duration_seconds')->default(0);
            $table->integer('keystroke_count')->default(0);
            $table->integer('mouse_click_count')->default(0);
            $table->integer('scroll_count')->default(0);
            $table->timestamp('recorded_at');
            $table->timestamps();

            $table->index(['user_id', 'recorded_at']);
            $table->index(['project_id', 'recorded_at']);
            $table->index(['productivity_level', 'recorded_at']);
            $table->index(['application_name', 'recorded_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_activity_logs');
    }
};
