<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Cms;

// Check if vision-cards content already exists
$existing = Cms::where('type', 'vision-cards')->first();

if (!$existing) {
    Cms::create([
        'title' => 'Vision Cards Configuration',
        'description' => '[{"icon":"fas fa-tools","title":"Skill Development","description":"Equip young people with vocational skills and technical training that enhance their employability and entrepreneurial potential."},{"icon":"fas fa-user-graduate","title":"Leadership Programs","description":"Foster leadership qualities through workshops, mentorship, and community engagement, empowering youth to become future leaders and change-makers."},{"icon":"fas fa-briefcase","title":"Job Placement Assistance","description":"Provide job placement services and career counseling to help youth transition smoothly into the workforce, ensuring a stable livelihood."},{"icon":"fas fa-users","title":"Youth Advocacy","description":"Encourage youth participation in civic activities and policy-making processes, giving them a voice in shaping a better and more inclusive future."}]',
        'type' => 'vision-cards',
        'status' => 'active',
        'meta_title' => 'Vision Cards',
        'meta_description' => 'Configure the vision cards displayed on the homepage',
        'slug' => 'vision-cards-configuration'
    ]);

    echo "Vision cards content created successfully!\n";
} else {
    echo "Vision cards content already exists.\n";
}

echo "Script completed.\n";
