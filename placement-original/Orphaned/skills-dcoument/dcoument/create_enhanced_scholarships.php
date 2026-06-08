<?php

// Create enhanced scholarships with fee information
require_once 'bootstrap/app.php';

use App\Models\Scholarship;
use App\Models\Student;
use App\Models\ScholarshipApplication;
use Illuminate\Support\Facades\DB;

try {
    DB::beginTransaction();

    // Create/Update scholarships with fee information
    $scholarships = [
        [
            'scholarship_code' => 'AITO-MERIT-2025',
            'title' => 'AITO Merit Scholarship 2025',
            'description' => 'A prestigious scholarship for academically excellent students who have demonstrated outstanding performance in their studies.',
            'category' => 'merit',
            'amount' => 50000.00,
            'application_fee' => 500.00,
            'fee_required' => true,
            'fee_payment_method' => 'both',
            'fee_instructions' => 'Application fee can be paid online or through bank transfer. Fee is non-refundable.',
            'fee_discount_percentage' => 0,
            'fee_exemption_criteria' => [
                ['category' => 'SC/ST'],
                ['income_below' => 200000]
            ],
            'frequency' => 'yearly',
            'application_start_date' => '2025-09-01',
            'application_end_date' => '2025-12-31',
            'eligibility_criteria' => [
                'Minimum 85% marks in previous academic year',
                'Currently enrolled in recognized educational institution',
                'Age between 16-25 years',
                'Indian citizenship required'
            ],
            'total_beneficiaries' => 100,
            'available_beneficiaries' => 85,
            'status' => 'active',
            'documents_required' => [
                'Mark sheets of previous academic year',
                'Income certificate',
                'Aadhaar card copy',
                'Bank account details',
                'Passport size photograph'
            ],
            'terms_conditions' => 'Scholarship amount will be disbursed in two installments. Recipient must maintain 80% attendance.',
            'provider' => 'All India Teachers Organisation',
            'contact_email' => 'merit@aito.org',
            'contact_phone' => '+91-9876543210',
            'created_by' => 1
        ],
        [
            'scholarship_code' => 'AITO-NEED-2025',
            'title' => 'AITO Need-Based Scholarship 2025',
            'description' => 'Financial assistance for economically disadvantaged students to support their education.',
            'category' => 'need-based',
            'amount' => 30000.00,
            'application_fee' => 200.00,
            'fee_required' => true,
            'fee_payment_method' => 'online',
            'fee_instructions' => 'Application fee must be paid online. Fee exemption available for BPL families.',
            'fee_discount_percentage' => 50,
            'fee_exemption_criteria' => [
                ['category' => 'BPL'],
                ['income_below' => 100000]
            ],
            'frequency' => 'yearly',
            'application_start_date' => '2025-09-01',
            'application_end_date' => '2025-11-30',
            'eligibility_criteria' => [
                'Family income below ₹3,00,000 per annum',
                'Minimum 70% marks in previous academic year',
                'Currently enrolled in recognized educational institution',
                'No other scholarship received'
            ],
            'total_beneficiaries' => 200,
            'available_beneficiaries' => 180,
            'status' => 'active',
            'documents_required' => [
                'Income certificate from competent authority',
                'Mark sheets of previous academic year',
                'BPL card (if applicable)',
                'Aadhaar card copy',
                'Bank account details'
            ],
            'terms_conditions' => 'Scholarship is renewable based on academic performance and financial need assessment.',
            'provider' => 'All India Teachers Organisation',
            'contact_email' => 'needbased@aito.org',
            'contact_phone' => '+91-9876543211',
            'created_by' => 1
        ],
        [
            'scholarship_code' => 'AITO-SPORTS-2025',
            'title' => 'AITO Sports Excellence Scholarship 2025',
            'description' => 'Recognizing and supporting talented athletes in their educational and sports journey.',
            'category' => 'sports',
            'amount' => 40000.00,
            'application_fee' => 0.00,
            'fee_required' => false,
            'fee_payment_method' => 'online',
            'fee_instructions' => null,
            'fee_discount_percentage' => 0,
            'fee_exemption_criteria' => [],
            'frequency' => 'yearly',
            'application_start_date' => '2025-08-15',
            'application_end_date' => '2025-10-31',
            'eligibility_criteria' => [
                'Represented state/national level in sports',
                'Minimum 60% marks in previous academic year',
                'Currently enrolled in sports-friendly institution',
                'Medical fitness certificate required'
            ],
            'total_beneficiaries' => 50,
            'available_beneficiaries' => 45,
            'status' => 'active',
            'documents_required' => [
                'Sports achievement certificates',
                'Medical fitness certificate',
                'Mark sheets of previous academic year',
                'Recommendation from sports coach',
                'Aadhaar card copy'
            ],
            'terms_conditions' => 'Recipients must participate in institutional sports activities and maintain academic standards.',
            'provider' => 'All India Teachers Organisation',
            'contact_email' => 'sports@aito.org',
            'contact_phone' => '+91-9876543212',
            'created_by' => 1
        ],
        [
            'scholarship_code' => 'AITO-WOMEN-2025',
            'title' => 'AITO Women Empowerment Scholarship 2025',
            'description' => 'Empowering women through education with special focus on technical and professional courses.',
            'category' => 'women empowerment',
            'amount' => 35000.00,
            'application_fee' => 300.00,
            'fee_required' => true,
            'fee_payment_method' => 'both',
            'fee_instructions' => 'Special discount for single mothers and women from rural areas.',
            'fee_discount_percentage' => 25,
            'fee_exemption_criteria' => [
                ['category' => 'single_mother'],
                ['location' => 'rural']
            ],
            'frequency' => 'yearly',
            'application_start_date' => '2025-09-10',
            'application_end_date' => '2025-12-15',
            'eligibility_criteria' => [
                'Female candidates only',
                'Enrolled in technical/professional courses',
                'Minimum 75% marks in previous academic year',
                'Age between 18-30 years'
            ],
            'total_beneficiaries' => 75,
            'available_beneficiaries' => 70,
            'status' => 'active',
            'documents_required' => [
                'Gender certificate',
                'Course enrollment certificate',
                'Mark sheets of previous academic year',
                'Income certificate',
                'Aadhaar card copy'
            ],
            'terms_conditions' => 'Scholarship aims to increase women participation in technical education and professional development.',
            'provider' => 'All India Teachers Organisation',
            'contact_email' => 'women@aito.org',
            'contact_phone' => '+91-9876543213',
            'created_by' => 1
        ],
        [
            'scholarship_code' => 'AITO-RESEARCH-2025',
            'title' => 'AITO Research Scholar Grant 2025',
            'description' => 'Supporting innovative research projects by students in various fields of study.',
            'category' => 'research',
            'amount' => 75000.00,
            'application_fee' => 1000.00,
            'fee_required' => true,
            'fee_payment_method' => 'online',
            'fee_instructions' => 'Application fee includes research proposal evaluation charges.',
            'fee_discount_percentage' => 0,
            'fee_exemption_criteria' => [],
            'frequency' => 'one_time',
            'application_start_date' => '2025-08-01',
            'application_end_date' => '2025-10-15',
            'eligibility_criteria' => [
                'Enrolled in post-graduate or research program',
                'Minimum 80% marks in previous academic year',
                'Approved research proposal required',
                'Supervisor recommendation mandatory'
            ],
            'total_beneficiaries' => 25,
            'available_beneficiaries' => 22,
            'status' => 'active',
            'documents_required' => [
                'Research proposal (detailed)',
                'Supervisor recommendation letter',
                'Academic transcripts',
                'Project timeline and budget',
                'Ethics committee approval (if applicable)'
            ],
            'terms_conditions' => 'Grant amount will be released based on research milestones. Final report submission mandatory.',
            'provider' => 'All India Teachers Organisation',
            'contact_email' => 'research@aito.org',
            'contact_phone' => '+91-9876543214',
            'created_by' => 1
        ]
    ];

    echo "Creating enhanced scholarships with fee information...\n";

    foreach ($scholarships as $scholarshipData) {
        $scholarship = Scholarship::updateOrCreate(
            ['scholarship_code' => $scholarshipData['scholarship_code']],
            $scholarshipData
        );
        echo "✓ Created/Updated scholarship: {$scholarship->title}\n";
        echo "  - Amount: ₹" . number_format((float)$scholarship->amount, 0) . "\n";
        echo "  - Application Fee: " . ($scholarship->fee_required ? "₹" . number_format((float)$scholarship->application_fee, 0) : "Free") . "\n";
        echo "  - Payment Method: " . ucfirst(str_replace('_', ' ', $scholarship->fee_payment_method)) . "\n";
        echo "  - Available Slots: {$scholarship->available_beneficiaries}\n\n";
    }

    DB::commit();
    echo "\n🎉 Successfully created/updated " . count($scholarships) . " scholarships with enhanced fee functionality!\n\n";

    // Display summary
    echo "📊 Scholarship Summary:\n";
    echo "Total Scholarships: " . Scholarship::count() . "\n";
    echo "Active Scholarships: " . Scholarship::where('status', 'active')->count() . "\n";
    echo "Free Applications: " . Scholarship::where('fee_required', false)->count() . "\n";
    echo "Paid Applications: " . Scholarship::where('fee_required', true)->count() . "\n";
    echo "Online Payment: " . Scholarship::where('fee_payment_method', 'online')->count() . "\n";
    echo "Offline Payment: " . Scholarship::where('fee_payment_method', 'offline')->count() . "\n";
    echo "Both Payment Methods: " . Scholarship::where('fee_payment_method', 'both')->count() . "\n";

} catch (Exception $e) {
    DB::rollBack();
    echo "❌ Error creating scholarships: " . $e->getMessage() . "\n";
    echo "Stack trace: " . $e->getTraceAsString() . "\n";
}