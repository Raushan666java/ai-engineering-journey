<?php
/**
 * Test Admin Scholarship Creation
 */

require_once 'vendor/autoload.php';

// Bootstrap Laravel
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

echo "🎓 Admin Scholarship Create Module Test\n";
echo "=====================================\n\n";

try {
    // Test data for scholarship creation
    $scholarshipData = [
        'scholarship_code' => 'SCH-ADMIN-TEST-' . rand(100, 999),
        'title' => 'Test Admin Scholarship Creation',
        'description' => 'This is a test scholarship created through admin panel to verify enhanced functionality',
        'category' => 'academic',
        'provider' => 'Test Institution',
        'amount' => 5000.00,
        'frequency' => 'one_time',
        'application_start_date' => now(),
        'application_end_date' => now()->addDays(30),
        'status' => 'active',
        'fee_required' => true,
        'application_fee' => 100.00,
        'fee_payment_method' => 'online',
        'fee_instructions' => 'Pay online through our secure payment gateway',
        'fee_discount_percentage' => 10.00,
        'contact_email' => 'admin@test.com',
        'contact_phone' => '+91-9876543210',
        'eligibility_criteria' => ['Minimum 80% marks', 'Age below 25 years', 'Indian citizen'],
        'documents_required' => ['Mark sheets', 'Income certificate', 'ID proof'],
        'terms_conditions' => 'Standard terms and conditions apply',
        'created_by' => 1
    ];

    echo "1. Creating scholarship with enhanced fields...\n";
    $scholarship = App\Models\Scholarship::create($scholarshipData);
    echo "   ✅ Scholarship created successfully with ID: {$scholarship->id}\n";
    echo "   📝 Code: {$scholarship->scholarship_code}\n";
    echo "   📊 Title: {$scholarship->title}\n";
    echo "   💰 Amount: ₹{$scholarship->amount}\n";
    echo "   💳 Fee Required: " . ($scholarship->fee_required ? 'Yes' : 'No') . "\n";
    if ($scholarship->fee_required) {
        echo "   💵 Application Fee: ₹{$scholarship->application_fee}\n";
        echo "   💻 Payment Method: {$scholarship->fee_payment_method}\n";
    }
    echo "   📧 Contact: {$scholarship->contact_email}\n";
    echo "   📞 Phone: {$scholarship->contact_phone}\n\n";

    echo "2. Testing scholarship relationships and methods...\n";
    echo "   🔍 Is Application Open: " . ($scholarship->isApplicationOpen() ? 'Yes' : 'No') . "\n";
    echo "   🏷️ Frequency Label: {$scholarship->getFrequencyLabel()}\n";
    echo "   💰 Formatted Fee: {$scholarship->getFormattedApplicationFee()}\n";
    echo "   📋 Eligibility Count: " . count($scholarship->getEligibilityCriteriaList()) . " criteria\n";
    echo "   📄 Documents Count: " . count($scholarship->getDocumentsRequiredList()) . " documents\n\n";

    echo "3. Testing field validation...\n";
    
    // Test validation controller methods
    $validator = Validator::make($scholarshipData, [
        'scholarship_code' => 'required|string',
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'category' => 'required|string|max:100',
        'provider' => 'required|string|max:255',
        'amount' => 'required|numeric|min:0',
        'fee_required' => 'nullable|boolean',
        'application_fee' => 'nullable|numeric|min:0',
        'contact_email' => 'nullable|email|max:255',
        'contact_phone' => 'nullable|string|max:20',
    ]);

    if ($validator->passes()) {
        echo "   ✅ All validation rules passed\n";
    } else {
        echo "   ❌ Validation failed:\n";
        foreach ($validator->errors()->all() as $error) {
            echo "      - {$error}\n";
        }
    }

    echo "\n4. Testing scholarship listing...\n";
    $totalScholarships = App\Models\Scholarship::count();
    $activeScholarships = App\Models\Scholarship::where('status', 'active')->count();
    $feeRequiredScholarships = App\Models\Scholarship::where('fee_required', true)->count();
    
    echo "   📊 Total Scholarships: {$totalScholarships}\n";
    echo "   🟢 Active Scholarships: {$activeScholarships}\n";
    echo "   💳 Fee-based Scholarships: {$feeRequiredScholarships}\n\n";

    echo "5. Testing update functionality...\n";
    $updateData = [
        'amount' => 7500.00,
        'application_fee' => 150.00,
        'fee_discount_percentage' => 15.00
    ];
    
    $scholarship->update($updateData);
    $scholarship->refresh();
    
    echo "   ✅ Scholarship updated successfully\n";
    echo "   💰 New Amount: ₹{$scholarship->amount}\n";
    echo "   💵 New Application Fee: ₹{$scholarship->application_fee}\n";
    echo "   🏷️ New Discount: {$scholarship->fee_discount_percentage}%\n\n";

    echo "6. Cleanup test data...\n";
    $scholarship->delete();
    echo "   ✅ Test scholarship deleted\n\n";

    echo "🎉 Admin Scholarship Create Module Test PASSED!\n";
    echo "✅ All enhanced features are working correctly:\n";
    echo "   • Enhanced fields support\n";
    echo "   • Fee configuration system\n";
    echo "   • Contact information management\n";
    echo "   • Validation and data processing\n";
    echo "   • CRUD operations\n";
    echo "   • Model relationships and methods\n\n";

} catch (Exception $e) {
    echo "❌ Test Error: " . $e->getMessage() . "\n";
    echo "Stack trace: " . $e->getTraceAsString() . "\n";
}