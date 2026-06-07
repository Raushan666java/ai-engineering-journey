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
        Schema::create('contractors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->string('company_name')->nullable();
            $table->text('bio')->nullable();
            $table->json('skills')->nullable(); // Array of skills
            $table->enum('experience_level', ['junior', 'mid', 'senior', 'expert'])->default('junior');
            $table->decimal('hourly_rate', 8, 2)->nullable();
            $table->string('timezone')->nullable();
            $table->json('availability')->nullable(); // Available hours/days
            $table->string('profile_image')->nullable();
            $table->string('portfolio_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('github_url')->nullable();
            $table->enum('status', ['active', 'inactive', 'pending_approval', 'suspended'])->default('pending_approval');
            $table->decimal('rating', 3, 2)->default(0.00); // 0-5 star rating
            $table->integer('completed_projects')->default(0);
            $table->decimal('total_earnings', 10, 2)->default(0.00);
            $table->timestamp('last_login_at')->nullable();
            $table->json('certifications')->nullable(); // Professional certifications
            $table->json('languages')->nullable(); // Spoken languages
            $table->text('work_preference')->nullable(); // Remote, onsite, hybrid
            $table->boolean('is_available')->default(true);
            $table->date('joined_at')->nullable();

            // 🔹 Provider / OAuth fields
            $table->string('provider')->nullable();
            $table->string('provider_id')->nullable();
            $table->text('provider_token')->nullable();
            $table->text('provider_refresh_token')->nullable();

            // 🔹 Extra profile fields
            $table->string('website')->nullable();
            $table->string('github_username')->nullable();
            $table->string('job_title')->nullable();
            $table->string('location')->nullable();
            $table->string('company')->nullable();

            // 🔹 Login tracking fields
            $table->string('last_login_ip')->nullable();
            $table->text('last_login_device')->nullable();
            $table->integer('total_login_count')->default(0);

            $table->rememberToken();
            $table->timestamps();

            // Indexes
            $table->index('email');
            $table->index('status');
            $table->index(['experience_level', 'hourly_rate']);
            $table->index('rating');
            $table->index('is_available');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contractors');
    }
};
