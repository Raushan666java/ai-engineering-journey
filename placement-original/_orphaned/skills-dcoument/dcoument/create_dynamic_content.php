<?php

require_once 'vendor/autoload.php';

use App\Models\Cms;
use Illuminate\Support\Facades\DB;

// Sample content data for different sections
$sampleData = [
    // About section content types
    [
        'title' => 'About AITO',
        'description' => 'All Institution Takniki Organization (AITO) is a premier organization dedicated to technical education and skill development across institutions.',
        'type' => 'about',
        'status' => 'active',
        'slug' => 'about-aito'
    ],
    [
        'title' => 'Our Mission & Vision',
        'description' => 'To create a unified platform for technical education and foster innovation in skill development programs.',
        'type' => 'mission',
        'status' => 'active',
        'slug' => 'mission-vision'
    ],
    [
        'title' => 'Educational Programs',
        'description' => 'Comprehensive educational programs designed to enhance technical skills and knowledge across various disciplines.',
        'type' => 'educational-programs',
        'status' => 'active',
        'slug' => 'educational-programs'
    ],
    [
        'title' => 'Community Support',
        'description' => 'Extensive community support initiatives including infrastructure development and social welfare programs.',
        'type' => 'community-support',
        'status' => 'active',
        'slug' => 'community-support'
    ],

    // Services section content types
    [
        'title' => 'Technical Training',
        'description' => 'Professional technical training programs for students and professionals in various technical fields.',
        'type' => 'educational-services',
        'status' => 'active',
        'slug' => 'technical-training'
    ],
    [
        'title' => 'Consultation Services',
        'description' => 'Expert consultation services for institutions looking to improve their technical education framework.',
        'type' => 'consultation-services',
        'status' => 'active',
        'slug' => 'consultation-services'
    ],
    [
        'title' => 'Training Programs',
        'description' => 'Specialized training programs designed to meet industry requirements and standards.',
        'type' => 'training-programs',
        'status' => 'active',
        'slug' => 'training-programs'
    ],

    // Contact section content types
    [
        'title' => 'Contact Information',
        'description' => 'Get in touch with us for any inquiries, partnerships, or support requirements.',
        'type' => 'contact',
        'status' => 'active',
        'slug' => 'contact-info'
    ],
    [
        'title' => 'Office Locations',
        'description' => 'Multiple office locations across the country to serve our members better.',
        'type' => 'office-locations',
        'status' => 'active',
        'slug' => 'office-locations'
    ],

    // Donation section content types
    [
        'title' => 'Donation Information',
        'description' => 'Your generous donations help us continue our mission of technical education and community development.',
        'type' => 'donation-info',
        'status' => 'active',
        'slug' => 'donation-information'
    ],
    [
        'title' => 'Donation Methods',
        'description' => 'Multiple secure donation methods including online transfers, checks, and direct bank deposits.',
        'type' => 'donation-methods',
        'status' => 'active',
        'slug' => 'donation-methods'
    ],

    // Gallery section content types
    [
        'title' => 'Photo Gallery',
        'description' => 'Explore our collection of memorable moments and achievements through our photo gallery.',
        'type' => 'gallery',
        'status' => 'active',
        'slug' => 'photo-gallery'
    ],

    // Members section content types
    [
        'title' => 'Our Members',
        'description' => 'Meet our dedicated team of professionals working towards technical excellence.',
        'type' => 'members',
        'status' => 'active',
        'slug' => 'our-members'
    ],

    // Notices section content types
    [
        'title' => 'Latest Notices',
        'description' => 'Stay updated with the latest announcements, events, and important notices from AITO.',
        'type' => 'notices',
        'status' => 'active',
        'slug' => 'latest-notices'
    ],

    // Events section content types
    [
        'title' => 'Upcoming Events',
        'description' => 'Join us for exciting upcoming events, seminars, and technical workshops.',
        'type' => 'upcoming-events',
        'status' => 'active',
        'slug' => 'upcoming-events'
    ],
    [
        'title' => 'Past Events',
        'description' => 'Relive the success of our past events and achievements.',
        'type' => 'past-events',
        'status' => 'active',
        'slug' => 'past-events'
    ],

    // Projects section content types
    [
        'title' => 'Ongoing Projects',
        'description' => 'Discover our current projects focused on technical innovation and community development.',
        'type' => 'ongoing-projects',
        'status' => 'active',
        'slug' => 'ongoing-projects'
    ],
    [
        'title' => 'Completed Projects',
        'description' => 'Explore our successfully completed projects and their impact on the community.',
        'type' => 'completed-projects',
        'status' => 'active',
        'slug' => 'completed-projects'
    ],

    // Resources section content types
    [
        'title' => 'Study Materials',
        'description' => 'Access comprehensive study materials and resources for technical education.',
        'type' => 'study-materials',
        'status' => 'active',
        'slug' => 'study-materials'
    ],
    [
        'title' => 'Research Papers',
        'description' => 'Collection of research papers and technical publications from our experts.',
        'type' => 'research-papers',
        'status' => 'active',
        'slug' => 'research-papers'
    ],

    // News section content types
    [
        'title' => 'Latest News',
        'description' => 'Stay informed with the latest news and developments in technical education.',
        'type' => 'latest-news',
        'status' => 'active',
        'slug' => 'latest-news'
    ],
    [
        'title' => 'Press Releases',
        'description' => 'Official press releases and media communications from AITO.',
        'type' => 'press-releases',
        'status' => 'active',
        'slug' => 'press-releases'
    ],

    // Global section content types
    [
        'title' => 'Site Settings',
        'description' => 'General website settings and configurations.',
        'type' => 'site-settings',
        'status' => 'active',
        'slug' => 'site-settings'
    ],
    [
        'title' => 'Footer Content',
        'description' => 'Content displayed in the website footer section.',
        'type' => 'footer-content',
        'status' => 'active',
        'slug' => 'footer-content'
    ]
];

try {
    echo "Starting to populate CMS content...\n";

    foreach ($sampleData as $data) {
        // Check if content already exists
        $existing = Cms::where('type', $data['type'])->where('slug', $data['slug'])->first();

        if (!$existing) {
            Cms::create($data);
            echo "Created: {$data['title']} ({$data['type']})\n";
        } else {
            echo "Skipped (already exists): {$data['title']} ({$data['type']})\n";
        }
    }

    echo "\nCMS content population completed successfully!\n";
    echo "Total sections available: " . count($sampleData) . "\n";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
