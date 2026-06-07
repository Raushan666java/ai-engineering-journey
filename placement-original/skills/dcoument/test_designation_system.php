<?php

require_once __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

try {
    // Get first user and designation
    $user = App\Models\User::first();
    $designation = App\Models\Designation::first();

    if (!$user || !$designation) {
        echo "No users or designations found in database.\n";
        exit(1);
    }

    echo "Found user: {$user->name} (ID: {$user->id})\n";
    echo "Found designation: {$designation->name} (ID: {$designation->id})\n";

    // Create a test designation application
    $application = App\Models\DesignationApplication::create([
        'user_id' => $user->id,
        'designation_id' => $designation->id,
        'application_reason' => 'Test application for designation system verification',
        'experience' => '5 years in organizational management',
        'qualifications' => 'Bachelor degree in Business Administration',
        'additional_info' => 'Previous experience in community leadership',
        'submitted_at' => now(),
    ]);

    echo "✓ Designation application created successfully!\n";
    echo "Application ID: {$application->id}\n";
    echo "Status: {$application->status}\n";
    echo "Submitted at: {$application->submitted_at}\n";

    // Test relationships
    echo "\nTesting relationships:\n";
    echo "User's applications count: " . $user->designationApplications()->count() . "\n";
    echo "Designation's applications count: " . $designation->applications()->count() . "\n";

    // Test approval
    $application->approve($user->id, 'Test approval');
    echo "\n✓ Application approved successfully!\n";
    echo "New status: {$application->status}\n";
    echo "Reviewed by: " . ($application->reviewer ? $application->reviewer->name : 'N/A') . "\n";
    echo "Review notes: {$application->review_notes}\n";

    echo "\n🎉 Designation Application System Test PASSED!\n";

} catch (Exception $e) {
    echo "❌ Test FAILED: " . $e->getMessage() . "\n";
    exit(1);
}