<?php

require 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

echo 'Countries count: ' . App\Models\Country::count() . PHP_EOL;

$countries = App\Models\Country::all();
foreach($countries as $country) {
    echo $country->name . ' (' . $country->code . ')' . PHP_EOL;
}
