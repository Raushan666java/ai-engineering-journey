<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('avatar_url')->nullable();
            $table->text('bio')->nullable();
            $table->string('github_username', 100)->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('resume_url')->nullable();
            $table->string('location', 100)->nullable();
            $table->string('timezone', 50)->default('UTC');
            $table->enum('experience_level', ['beginner', 'intermediate', 'advanced', 'expert'])->default('beginner');
            $table->string('primary_role', 100)->nullable();
            $table->text('career_goals')->nullable();
            $table->json('learning_preferences')->nullable();
            $table->json('skills')->nullable();
            $table->integer('coding_streak')->default(0);
            $table->date('last_activity_date')->nullable();
            $table->decimal('total_points', 10, 2)->default(0);
            $table->timestamps();
            
            $table->index('user_id');
            $table->index('experience_level');
            $table->index('last_activity_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
