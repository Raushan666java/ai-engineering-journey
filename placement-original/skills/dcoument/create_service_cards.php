<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Cms;

// Check if service-cards content already exists
$existing = Cms::where('type', 'service-cards')->first();

if (!$existing) {
    Cms::create([
        'title' => 'Homepage Service Cards Configuration',
        'description' => '[{"icon":"fas fa-graduation-cap","title":"Educational Programs","description":"We promote literacy and lifelong learning by organizing adult education classes, literacy drives, lectures, essay competitions, exhibitions, seminars, and cultural events. Our initiatives aim to inspire knowledge, critical thinking, and cultural appreciation among all age groups.","link":"about","button_text":"Learn More"},{"icon":"fas fa-hands-helping","title":"Community Support and Infrastructure","description":"Our organization works to establish and maintain libraries, community centers, rehabilitation centers, and hostels. We provide essential services such as medical aid, free books, stationery, playgrounds, and reading rooms to create a supportive environment for students and the broader community.","link":"about","button_text":"Learn More"},{"icon":"fas fa-heart","title":"Social Welfare and Relief Work","description":"We actively engage in social service activities, offering support to the poor, disabled, and victims of natural calamities. Our efforts also extend to animal welfare and nurturing youth leadership, helping to build a compassionate and resilient society.","link":"about","button_text":"Learn More"}]',
        'type' => 'service-cards',
        'status' => 'active',
        'meta_title' => 'Service Cards',
        'meta_description' => 'Configure the service cards displayed on the homepage',
        'slug' => 'homepage-service-cards-configuration'
    ]);

    echo "Service cards content created successfully!\n";
} else {
    echo "Service cards content already exists.\n";
}

echo "Script completed.\n";
