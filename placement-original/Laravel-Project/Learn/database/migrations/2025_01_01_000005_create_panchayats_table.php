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
        Schema::create('panchayats', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('state_id', 50)->nullable(); // Note: Using string as per your schema
            $table->string('code');
            $table->foreignId('block_id')->constrained('blocks')->onDelete('cascade');
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('code');
            $table->index('state_id');
            $table->index('block_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('panchayats');
    }
};
