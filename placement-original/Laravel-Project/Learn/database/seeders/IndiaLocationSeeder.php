<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndiaLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Country (India)
        $indiaId = DB::table('countries')->insertGetId([
            'name' => 'India',
            'code' => '+91',
            'phone_code' => '+91',
            'currency' => 'INR',
            'currency_symbol' => '₹',
            'status' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        echo "✓ Country seeded: India (ID: {$indiaId})\n";

        // You can import the full SQL data using:
        // php artisan db:seed --class=IndiaLocationSeeder
        // Or run: mysql -u username -p database_name < india_locations.sql
        
        echo "\n";
        echo "To import complete data, run:\n";
        echo "mysql -u your_username -p your_database < path/to/india_locations.sql\n";
        echo "\nOr use Laravel's DB::unprepared() to run SQL file content.\n";

        // Auto-import sanitized SQL if present
        $sqlPath = database_path('sql/india_locations_inserts.sql');

        if (file_exists($sqlPath)) {
            // Use File facade and DB to import safely
            // Replace INSERT INTO with INSERT IGNORE INTO to avoid duplicate primary key errors
            $sql = \Illuminate\Support\Facades\File::get($sqlPath);
            $sql = str_ireplace('INSERT INTO', 'INSERT IGNORE INTO', $sql);

            try {
                DB::statement('SET FOREIGN_KEY_CHECKS=0');
                DB::unprepared($sql);
                DB::statement('SET FOREIGN_KEY_CHECKS=1');
                echo "✓ SQL import completed from: {$sqlPath}\n";
            } catch (\Throwable $e) {
                DB::statement('SET FOREIGN_KEY_CHECKS=1');
                echo "⚠️ SQL import failed: " . $e->getMessage() . "\n";
            }
        } else {
            echo "No SQL file found at {$sqlPath}. Place 'india_locations_inserts.sql' there to auto-import.\n";
        }
    }
}
