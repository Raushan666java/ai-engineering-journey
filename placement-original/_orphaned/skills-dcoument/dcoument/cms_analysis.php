<?php

require_once __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

echo "=== COMPREHENSIVE CMS CONTENT MANAGEMENT ANALYSIS ===\n\n";

// Get all existing CMS content
$existingContent = App\Models\Cms::all()->pluck('type')->toArray();
echo "Existing CMS Content Types: " . count(array_unique($existingContent)) . "\n";

// Define all required content types for each page
$requiredContentTypes = [
    // Homepage content types
    'banner', 'hero', 'about', 'services', 'contact', 'donation', 'gallery', 'members',
    'notice', 'quick-links', 'vision', 'vision-cards', 'cta', 'video', 'service-cards',

    // About page content types
    'about-stats', 'mission', 'educational-programs', 'community-support', 'social-welfare',

    // Contact page content types
    'contact-info', 'form-config',

    // Donation page content types
    'donation-info',

    // Global content types
    'breadcrumb-bg', 'footer-content', 'header-content', 'navigation-menu',
    'social-links', 'seo-settings', 'copyright', 'favicon-settings'
];

$missingContentTypes = array_diff($requiredContentTypes, $existingContent);
echo "Missing Content Types: " . count($missingContentTypes) . "\n";

if (!empty($missingContentTypes)) {
    echo "Creating missing content types...\n";
    foreach ($missingContentTypes as $type) {
        $content = App\Models\Cms::create([
            'title' => ucwords(str_replace(['-', '_'], ' ', $type)),
            'description' => 'Default content for ' . $type,
            'type' => $type,
            'status' => 'active',
            'slug' => Illuminate\Support\Str::slug($type)
        ]);
        echo "✓ Created: " . $type . "\n";
    }
}

// Check content for each page
$pages = [
    'homepage' => ['banner', 'hero', 'about', 'services', 'contact', 'donation', 'gallery', 'members', 'notice', 'quick-links', 'vision', 'vision-cards', 'cta', 'video', 'service-cards'],
    'about' => ['about', 'about-stats', 'mission', 'educational-programs', 'community-support', 'social-welfare'],
    'services' => ['services', 'service-cards'],
    'contact' => ['contact', 'contact-info', 'form-config'],
    'donation' => ['donation', 'donation-info'],
    'gallery' => ['gallery'],
    'members' => ['members'],
    'notices' => ['notices'],
    'global' => ['breadcrumb-bg', 'footer-content', 'header-content', 'navigation-menu', 'social-links', 'seo-settings', 'copyright', 'favicon-settings']
];

echo "\n=== PAGE CONTENT STATUS ===\n";
foreach ($pages as $page => $contentTypes) {
    $pageContent = App\Models\Cms::whereIn('type', $contentTypes)->where('status', 'active')->count();
    $totalNeeded = count($contentTypes);
    $percentage = $totalNeeded > 0 ? round(($pageContent / $totalNeeded) * 100, 1) : 0;

    echo ucfirst($page) . " Page: " . $pageContent . "/" . $totalNeeded . " (" . $percentage . "%)\n";
}

echo "\n=== CMS SYSTEM SUMMARY ===\n";
$totalContent = App\Models\Cms::count();
$activeContent = App\Models\Cms::where('status', 'active')->count();
echo "Total CMS Content: " . $totalContent . "\n";
echo "Active Content: " . $activeContent . "\n";
echo "Inactive Content: " . ($totalContent - $activeContent) . "\n";

echo "\n✅ CMS Content Management Analysis Complete!\n";
