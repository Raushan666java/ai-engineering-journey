<?php

require_once __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

echo "=== POPULATING SAMPLE CMS CONTENT FOR ALL PAGES ===\n\n";

// Sample content data for each page
$sampleContent = [
    // Homepage content
    [
        'type' => 'hero',
        'title' => 'Welcome to AITO',
        'description' => 'All India Takniki Organization - Empowering communities through education, technology, and social welfare initiatives.',
        'meta_description' => 'Join AITO in our mission to transform lives through comprehensive educational programs, community development, and technological innovation.'
    ],
    [
        'type' => 'quick-links',
        'title' => 'Quick Access Services',
        'description' => 'Essential Services at Your Fingertips',
        'meta_description' => 'Access ID cards, appointment letters, certificates, and donation services instantly through our quick links.'
    ],
    [
        'type' => 'vision',
        'title' => 'Our Vision & Mission',
        'description' => 'Empowering Youth for a Brighter Tomorrow',
        'meta_description' => 'We envision a world where every individual has access to quality education, skill development, and opportunities for growth.'
    ],
    [
        'type' => 'vision-cards',
        'title' => 'Vision Cards Configuration',
        'description' => '[{"icon":"fas fa-tools","title":"Skill Development","description":"Equip young people with vocational skills and technical training that enhance their employability and entrepreneurial potential."},{"icon":"fas fa-user-graduate","title":"Leadership Programs","description":"Foster leadership qualities through workshops, mentorship, and community engagement, empowering youth to become future leaders and change-makers."},{"icon":"fas fa-briefcase","title":"Job Placement Assistance","description":"Provide job placement services and career counseling to help youth transition smoothly into the workforce, ensuring a stable livelihood."},{"icon":"fas fa-users","title":"Youth Advocacy","description":"Encourage youth participation in civic activities and policy-making processes, giving them a voice in shaping a better and more inclusive future."}]'
    ],
    [
        'type' => 'cta',
        'title' => 'Join Our Movement',
        'description' => 'Your Support Can Spark a Movement – Let\'s Do It Together!',
        'meta_description' => 'Be part of the change. Join thousands of members working towards community development and educational excellence.'
    ],
    [
        'type' => 'video',
        'title' => 'Our Expanding Impact',
        'description' => 'Become part of a thriving community dedicated to making a difference! Experience the benefits of collective growth, sustainable opportunities, and a supportive environment that empowers you to reach new heights.',
        'meta_description' => 'Together, we are building a brighter future for all through education, community service, and technological innovation.'
    ],

    // About page content
    [
        'type' => 'about-stats',
        'title' => 'AITO Statistics',
        'description' => '[{"number":"2.75","suffix":"Lakh+","text":"Total Members"},{"number":"3.5","suffix":"Lakh+","text":"Active Person"},{"number":"8","suffix":"+","text":"Years of Trust"}]',
        'meta_description' => 'Comprehensive statistics showcasing AITO\'s growth and impact in the community.'
    ],
    [
        'type' => 'mission',
        'title' => 'Our Mission & Vision',
        'description' => 'AITO is committed to promoting education, culture, and community development through comprehensive programs that uplift underprivileged communities and create opportunities for growth.',
        'meta_description' => 'Our mission encompasses educational excellence, cultural preservation, and community welfare initiatives.'
    ],
    [
        'type' => 'educational-programs',
        'title' => 'Educational Programs',
        'description' => 'We promote literacy and lifelong learning by organizing adult education classes, literacy drives, lectures, essay competitions, exhibitions, seminars, and cultural events.',
        'meta_description' => 'Comprehensive educational initiatives designed to inspire knowledge, critical thinking, and cultural appreciation among all age groups.'
    ],
    [
        'type' => 'community-support',
        'title' => 'Community Support & Infrastructure',
        'description' => 'Our organization works to establish and maintain libraries, community centers, rehabilitation centers, and hostels, providing essential services for students and the broader community.',
        'meta_description' => 'Building sustainable community infrastructure to support education, healthcare, and social welfare programs.'
    ],
    [
        'type' => 'social-welfare',
        'title' => 'Social Welfare & Relief Work',
        'description' => 'We actively engage in social service activities, offering support to the poor, disabled, and victims of natural calamities, while nurturing youth leadership.',
        'meta_description' => 'Comprehensive social welfare programs addressing poverty, disability support, disaster relief, and youth development.'
    ],

    // Contact page content
    [
        'type' => 'contact-info',
        'title' => 'Contact Information',
        'description' => 'D-224-A, G/F, KH No.-172, Gali No.-3 D-Block Pratap Nagar, Saboli Delhi - 110093',
        'meta_title' => 'Call',
        'meta_description' => '<a href="tel:+918409973354">+91 84099 73354</a><br><a href="tel:+918755508597">+91 87555 08597</a>',
        'image' => 'info@aito.in'
    ],
    [
        'type' => 'form-config',
        'title' => 'Contact Form Configuration',
        'description' => 'We\'d love to hear from you! Whether you have a question, need support, or just want to say hello, feel free to reach out to us.',
        'meta_description' => '{"name_placeholder":"Your Name","email_placeholder":"Email Address","phone_placeholder":"Phone Number","message_placeholder":"Type Your Message","button_text":"Send a Message"}'
    ],

    // Donation page content
    [
        'type' => 'donation-info',
        'title' => 'Donation Guidelines',
        'description' => 'Please mention your name and phone number as reference when making online transfers. Your generous contributions help us continue our mission of community development and educational excellence.',
        'meta_description' => 'Guidelines for making donations and the impact of your generous contributions to AITO\'s community development programs.'
    ],

    // Global content
    [
        'type' => 'breadcrumb-bg',
        'title' => 'Breadcrumb Background',
        'meta_title' => 'Home',
        'description' => 'Navigation background image for all pages'
    ],
    [
        'type' => 'footer-content',
        'title' => 'Footer Information',
        'description' => 'All India Takniki Organization - Empowering communities through education and social welfare since 2016.',
        'meta_description' => 'Complete footer information including contact details, quick links, and organizational information.'
    ],
    [
        'type' => 'header-content',
        'title' => 'Header Information',
        'description' => 'AITO Header - All India Takniki Organization',
        'meta_description' => 'Header configuration including logo, navigation menu, and contact information.'
    ],
    [
        'type' => 'social-links',
        'title' => 'Social Media Links',
        'description' => '[{"platform":"Facebook","url":"https://facebook.com/aito","icon":"fab fa-facebook"},{"platform":"Twitter","url":"https://twitter.com/aito","icon":"fab fa-twitter"},{"platform":"LinkedIn","url":"https://linkedin.com/company/aito","icon":"fab fa-linkedin"},{"platform":"Instagram","url":"https://instagram.com/aito","icon":"fab fa-instagram"}]',
        'meta_description' => 'Social media links for Facebook, Twitter, LinkedIn, and Instagram to connect with AITO community.'
    ],
    [
        'type' => 'seo-settings',
        'title' => 'SEO Settings',
        'description' => 'Default meta description for AITO website pages',
        'meta_title' => 'All India Takniki Organization - Empowering Communities',
        'meta_description' => 'AITO is committed to promoting education, culture, and community development through comprehensive programs that uplift communities.',
        'meta_keywords' => 'AITO, education, community development, social welfare, technical education, NGO'
    ]
];

$updated = 0;
$created = 0;

foreach ($sampleContent as $contentData) {
    $existing = App\Models\Cms::where('type', $contentData['type'])->first();

    if ($existing) {
        $existing->update($contentData);
        echo "✓ Updated: " . $contentData['type'] . "\n";
        $updated++;
    } else {
        App\Models\Cms::create($contentData);
        echo "✓ Created: " . $contentData['type'] . "\n";
        $created++;
    }
}

echo "\n=== SAMPLE CONTENT POPULATION COMPLETE ===\n";
echo "Created: $created content items\n";
echo "Updated: $updated content items\n";
echo "Total: " . ($created + $updated) . " content items processed\n";

echo "\n=== FINAL CMS SYSTEM STATUS ===\n";
$totalContent = App\Models\Cms::count();
$activeContent = App\Models\Cms::where('status', 'active')->count();
echo "Total CMS Content: $totalContent\n";
echo "Active Content: $activeContent\n";
echo "Coverage: " . round(($activeContent / $totalContent) * 100, 1) . "%\n";

echo "\n✅ All frontend pages now have complete CMS content management!\n";
