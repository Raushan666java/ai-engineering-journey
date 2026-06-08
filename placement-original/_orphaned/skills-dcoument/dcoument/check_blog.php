<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$blog = \App\Models\Blog::first();
if ($blog) {
    echo 'Title: ' . $blog->title . PHP_EOL;
    echo 'Status: ' . $blog->status . PHP_EOL;
    echo 'Published At: ' . ($blog->published_at ? $blog->published_at : 'NULL') . PHP_EOL;
    echo 'Current time: ' . now() . PHP_EOL;
    echo 'Is past: ' . ($blog->published_at && $blog->published_at->isPast() ? 'Yes' : 'No') . PHP_EOL;
    echo 'Is Published: ' . ($blog->isPublished() ? 'Yes' : 'No') . PHP_EOL;
    echo 'Published count: ' . \App\Models\Blog::published()->count() . PHP_EOL;

    // Test the scope manually
    $manualCount = \App\Models\Blog::where('status', 'published')
                                   ->where('published_at', '<=', now())
                                   ->count();
    echo 'Manual published count: ' . $manualCount . PHP_EOL;
} else {
    echo 'No blog found' . PHP_EOL;
}