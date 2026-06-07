<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;
use App\Models\Designation;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

echo "Available Designations:\n";
echo "======================\n";

$designations = Designation::select('id', 'name', 'level')->get();

foreach ($designations as $designation) {
    echo "ID: {$designation->id}, Name: {$designation->name}, Level: {$designation->level}\n";
}

echo "\nGrouped by level:\n";
echo "=================\n";

$byLevel = $designations->groupBy('level');
foreach ($byLevel as $level => $desigs) {
    echo "Level: $level\n";
    foreach ($desigs as $desig) {
        echo "  - ID: {$desig->id}, Name: {$desig->name}\n";
    }
    echo "\n";
}