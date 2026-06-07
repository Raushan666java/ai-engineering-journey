<?php

require_once 'vendor/autoload.php';

use Illuminate\Foundation\Application;
use Illuminate\Contracts\Console\Kernel;

$app = require_once 'bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

echo "Checking location data:\n";
echo "Countries: " . \App\Models\Country::count() . "\n";
echo "States: " . \App\Models\State::count() . "\n";
echo "Districts: " . \App\Models\District::count() . "\n";

$country = \App\Models\Country::first();
if ($country) {
    echo "Country: {$country->name} (ID: {$country->id})\n";
}

$state = \App\Models\State::first();
if ($state) {
    echo "State: {$state->name} (ID: {$state->id}, Country ID: {$state->country_id})\n";
}

$district = \App\Models\District::first();
if ($district) {
    echo "District: {$district->name} (ID: {$district->id}, State ID: {$district->state_id})\n";
}