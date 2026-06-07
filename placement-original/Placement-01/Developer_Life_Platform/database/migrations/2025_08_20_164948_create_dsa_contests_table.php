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
        Schema::create('dsa_contests', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->enum('type', ['weekly', 'biweekly', 'monthly', 'special']);
            $table->datetime('start_time');
            $table->datetime('end_time');
            $table->integer('duration_minutes');
            $table->json('problem_ids'); // Array of problem IDs
            $table->json('rules')->nullable();
            $table->integer('max_participants')->nullable();
            $table->decimal('entry_fee', 8, 2)->default(0);
            $table->json('prizes')->nullable(); // Prize distribution
            $table->enum('status', ['upcoming', 'running', 'completed', 'cancelled'])->default('upcoming');
            $table->boolean('is_rated')->default(true);
            $table->integer('rating_threshold')->nullable(); // Min rating to participate
            $table->timestamps();
            
            $table->index(['status', 'start_time']);
            $table->index(['type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dsa_contests');
    }
};
