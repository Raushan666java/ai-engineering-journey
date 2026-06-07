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
        Schema::create('monitask_agents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('device_name');
            $table->enum('device_type', ['desktop', 'mobile', 'tablet']);
            $table->string('os_version');
            $table->string('agent_version');
            $table->string('ip_address')->nullable();
            $table->string('mac_address')->nullable();
            $table->timestamp('last_seen')->nullable();
            $table->boolean('is_online')->default(false);
            $table->boolean('stealth_mode')->default(false);
            $table->boolean('monitoring_enabled')->default(false);
            $table->integer('screenshot_frequency')->default(300); // seconds
            $table->integer('activity_threshold')->default(60); // seconds
            $table->json('settings')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'device_type']);
            $table->index(['is_online', 'last_seen']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitask_agents');
    }
};
