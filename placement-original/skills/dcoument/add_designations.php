<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;
use App\Models\Designation;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

echo "Adding missing designations...\n";

// District Level
Designation::create([
    'name' => 'District Secretary',
    'level' => 'district',
    'description' => 'Administrative head for district operations',
    'is_active' => true,
]);

// Block Level
Designation::create([
    'name' => 'Block Secretary',
    'level' => 'block',
    'description' => 'Administrative head for block operations',
    'is_active' => true,
]);

// Panchayat Level
Designation::create([
    'name' => 'Panchayat Secretary',
    'level' => 'panchayat',
    'description' => 'Administrative head for panchayat operations',
    'is_active' => true,
]);

echo "Designations added successfully!\n";