<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Process;

class RunAllTestsCommand extends Command
{
    protected $signature = 'test:run-all {--filter= : Filter specific tests}';
    protected $description = 'Run all test scenarios with proper database setup';

    public function handle()
    {
        $this->info('🚀 Running All Test Scenarios...');
        $this->newLine();

        // Test categories with their specific classes
        $testCategories = [
            'DSA Platform Tests' => [
                'Tests\Feature\DsaPlatformTest',
                'Tests\Feature\DsaProblemTest'
            ],
            'Learning Platform Tests' => [
                'Tests\Feature\LearningPlatformTest'
            ],
            'Monitask Platform Tests' => [
                'Tests\Feature\MonitaskPlatformTest'
            ],
            'Integration Tests' => [
                'Tests\Feature\IntegrationPlatformTest'
            ],
            'Performance Tests' => [
                'Tests\Feature\PerformancePlatformTest'
            ],
            'Unit Tests' => [
                'Tests\Unit\ModelUnitTest'
            ]
        ];

        $totalResults = [
            'total' => 0,
            'passed' => 0,
            'failed' => 0,
            'categories' => []
        ];

        foreach ($testCategories as $categoryName => $testClasses) {
            $this->info("📋 {$categoryName}");
            $this->line(str_repeat('─', 50));

            $categoryResults = [
                'total' => 0,
                'passed' => 0,
                'failed' => 0,
                'details' => []
            ];

            foreach ($testClasses as $testClass) {
                $result = $this->runSingleTestClass($testClass);
                
                $categoryResults['total'] += $result['total'];
                $categoryResults['passed'] += $result['passed'];
                $categoryResults['failed'] += $result['failed'];
                $categoryResults['details'][$testClass] = $result;

                $status = $result['failed'] === 0 ? '✅' : '❌';
                $this->line("  {$status} {$testClass}: {$result['passed']}/{$result['total']} passed");
            }

            $totalResults['total'] += $categoryResults['total'];
            $totalResults['passed'] += $categoryResults['passed'];
            $totalResults['failed'] += $categoryResults['failed'];
            $totalResults['categories'][$categoryName] = $categoryResults;

            $this->newLine();
        }

        // Display final summary
        $this->displaySummary($totalResults);

        return $totalResults['failed'] === 0 ? 0 : 1;
    }

    private function runSingleTestClass(string $testClass): array
    {
        try {
            // Use artisan test command with filter
            $command = [
                'C:\xampp\php\php.exe',
                'artisan',
                'test',
                '--filter=' . $testClass
            ];

            $result = Process::path(base_path())->run(implode(' ', $command));
            
            // Parse the output to extract test results
            $output = $result->output();
            
            // Simple parsing logic - you might need to adjust this based on PHPUnit output format
            if (preg_match('/Tests:\s+(\d+)\s+passed/', $output, $matches)) {
                $passed = (int) $matches[1];
                $failed = 0;
                $total = $passed;
            } elseif (preg_match('/Tests:\s+(\d+)\s+failed,\s+(\d+)\s+passed/', $output, $matches)) {
                $failed = (int) $matches[1];
                $passed = (int) $matches[2];
                $total = $failed + $passed;
            } else {
                // Fallback: assume test class exists but might have issues
                $total = 1;
                $passed = $result->successful() ? 1 : 0;
                $failed = $result->successful() ? 0 : 1;
            }

            return [
                'total' => $total,
                'passed' => $passed,
                'failed' => $failed,
                'output' => $output
            ];

        } catch (\Exception $e) {
            return [
                'total' => 1,
                'passed' => 0,
                'failed' => 1,
                'output' => 'Error: ' . $e->getMessage()
            ];
        }
    }

    private function displaySummary(array $results): void
    {
        $this->newLine();
        $this->info('📊 COMPREHENSIVE TEST SUMMARY');
        $this->line(str_repeat('═', 60));

        foreach ($results['categories'] as $categoryName => $categoryResult) {
            $passRate = $categoryResult['total'] > 0 
                ? round(($categoryResult['passed'] / $categoryResult['total']) * 100, 1) 
                : 0;
            
            $status = $categoryResult['failed'] === 0 ? '✅' : '❌';
            
            $this->line(sprintf(
                '%s %-25s: %3d/%3d (%6.1f%%)',
                $status,
                $categoryName,
                $categoryResult['passed'],
                $categoryResult['total'],
                $passRate
            ));
        }

        $this->line(str_repeat('═', 60));
        
        $overallPassRate = $results['total'] > 0 
            ? round(($results['passed'] / $results['total']) * 100, 1) 
            : 0;
        
        $overallStatus = $results['failed'] === 0 ? '🎉' : '⚠️';
        
        $this->line(sprintf(
            '%s %-25s: %3d/%3d (%6.1f%%)',
            $overallStatus,
            'OVERALL RESULT',
            $results['passed'],
            $results['total'],
            $overallPassRate
        ));

        $this->newLine();

        if ($results['failed'] === 0) {
            $this->info('🚀 ALL TESTS PASSED! The platform is working correctly.');
        } else {
            $this->warn("⚠️  {$results['failed']} tests failed. Please review the issues.");
        }

        // Display test coverage areas
        $this->newLine();
        $this->info('📋 Test Coverage Areas:');
        $this->line('• DSA Platform: Problem creation, submissions, contests, leaderboards');
        $this->line('• Learning Platform: Course management, enrollment, categories');
        $this->line('• Monitask Platform: Project management, time tracking, team collaboration');
        $this->line('• Integration: Cross-platform authentication and navigation');
        $this->line('• Performance: Load times, query optimization, scalability');
        $this->line('• Unit Tests: Model validation and business logic');

        $this->newLine();
        $this->info('🔧 Next Steps:');
        if ($results['failed'] > 0) {
            $this->line('• Review failed tests and fix underlying issues');
            $this->line('• Run individual test classes for detailed error information');
            $this->line('• Check database migrations and model relationships');
        } else {
            $this->line('• All tests passing - platform ready for deployment');
            $this->line('• Consider adding more edge case tests');
            $this->line('• Monitor performance in production environment');
        }
    }
}
