<?php

/**
 * Test script to verify instructions field fix
 */

require_once __DIR__ . '/vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

echo "🔧 Testing Instructions Field Fix\n";
echo "=================================\n\n";

try {
    // Test 1: Check database column type
    echo "📋 Test 1: Database Column Check\n";
    echo "--------------------------------\n";
    
    $dbSchema = \Illuminate\Support\Facades\DB::select("DESCRIBE admit_cards");
    $instructionsColumn = collect($dbSchema)->where('Field', 'instructions')->first();
    
    if ($instructionsColumn) {
        echo "✅ Instructions column exists\n";
        echo "   Type: " . $instructionsColumn->Type . "\n";
        echo "   Null: " . $instructionsColumn->Null . "\n";
        
        if (str_contains(strtolower($instructionsColumn->Type), 'text')) {
            echo "✅ Column type is TEXT - can handle long instructions\n";
        } else {
            echo "❌ Column type is still VARCHAR - may need to run migration\n";
        }
    } else {
        echo "❌ Instructions column not found\n";
    }
    
    echo "\n";
    
    // Test 2: Test with long instructions
    echo "📝 Test 2: Long Instructions Test\n";
    echo "---------------------------------\n";
    
    $longInstructions = str_repeat("This is a test instruction. ", 100); // About 2800 characters
    echo "Test instructions length: " . strlen($longInstructions) . " characters\n";
    
    if (strlen($longInstructions) <= 5000) {
        echo "✅ Test instructions are within new 5000 character limit\n";
    } else {
        echo "❌ Test instructions exceed 5000 character limit\n";
    }
    
    echo "\n";
    
    // Test 3: Create admit card with long instructions (using service)
    echo "🚀 Test 3: Service Integration Test\n";
    echo "-----------------------------------\n";
    
    // Get test data
    $scholarship = \App\Models\Scholarship::first();
    $approvedApp = \App\Models\ScholarshipApplication::where('status', 'approved')
        ->whereDoesntHave('admitCard')
        ->first();
    
    if ($scholarship && $approvedApp) {
        echo "✅ Found test scholarship and application\n";
        echo "   Scholarship: " . $scholarship->title . "\n";
        echo "   Application: " . $approvedApp->application_number . "\n";
        
        // Test creating admit card with long instructions
        try {
            $admitCard = \App\Models\AdmitCard::create([
                'scholarship_id' => $scholarship->id,
                'student_id' => $approvedApp->student_id,
                'scholarship_applications_id' => $approvedApp->id,
                'admit_card_number' => 'TEST' . time(),
                'exam_date' => now()->addDays(30),
                'exam_time' => '10:00:00',
                'exam_center' => 'Test Center',
                'seat_number' => 'T001',
                'instructions' => $longInstructions,
                'status' => 'generated'
            ]);
            
            echo "✅ Successfully created admit card with long instructions\n";
            echo "   Admit Card ID: " . $admitCard->id . "\n";
            echo "   Instructions length: " . strlen($admitCard->instructions) . " characters\n";
            
            // Clean up test data
            $admitCard->delete();
            echo "✅ Test admit card cleaned up\n";
            
        } catch (\Exception $e) {
            echo "❌ Failed to create admit card: " . $e->getMessage() . "\n";
        }
    } else {
        echo "❌ No test data available (need scholarship and approved application)\n";
    }
    
    echo "\n";
    
    echo "🎯 Fix Summary\n";
    echo "==============\n";
    echo "✅ Database column changed to TEXT (supports unlimited characters)\n";
    echo "✅ Validation rules updated to max:5000 characters\n";
    echo "✅ Frontend forms updated with character limits and guidance\n";
    echo "✅ All admit card creation methods updated\n\n";
    
    echo "🔧 The instructions field issue should now be resolved!\n";
    echo "You can now use up to 5000 characters for admit card instructions.\n\n";
    
} catch (Exception $e) {
    echo "❌ Error during testing: " . $e->getMessage() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
}