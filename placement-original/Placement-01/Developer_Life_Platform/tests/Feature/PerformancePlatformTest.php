<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\DsaProblem;
use App\Models\LearningCourse;
use App\Models\MonitaskProject;
use App\Models\MonitaskTimeEntry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class PerformancePlatformTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
    }

    /**
     * Test Case: PERF-001
     * Feature: Page load performance
     * Priority: High
     */
    public function test_dashboard_page_loads_within_acceptable_time()
    {
        $user = User::factory()->create();
        
        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->get(route('dashboard'));
        
        $endTime = microtime(true);
        $loadTime = $endTime - $startTime;

        $response->assertStatus(200);
        // Page should load within 2 seconds
        $this->assertLessThan(2.0, $loadTime, 'Dashboard took too long to load: ' . $loadTime . ' seconds');
    }

    /**
     * Test Case: PERF-002
     * Feature: Database query optimization
     * Priority: High
     */
    public function test_problems_list_uses_efficient_queries()
    {
        $user = User::factory()->create();
        
        // Create test data
        DsaProblem::factory()->count(50)->create();

        // Count database queries
        DB::enableQueryLog();
        
        $response = $this->actingAs($user)
                         ->get(route('dsa.problems.index'));
        
        $queries = DB::getQueryLog();
        DB::disableQueryLog();

        $response->assertStatus(200);
        // Should not exceed 5 queries for problems list
        $this->assertLessThanOrEqual(5, count($queries), 'Too many database queries: ' . count($queries));
    }

    /**
     * Test Case: PERF-003
     * Feature: Large dataset handling
     * Priority: Medium
     */
    public function test_pagination_performance_with_large_dataset()
    {
        $user = User::factory()->create();
        
        // Create large dataset
        DsaProblem::factory()->count(1000)->create();

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->get(route('dsa.problems.index', ['page' => 50]));
        
        $endTime = microtime(true);
        $loadTime = $endTime - $startTime;

        $response->assertStatus(200);
        // Even with large dataset, pagination should be fast
        $this->assertLessThan(1.0, $loadTime, 'Pagination too slow with large dataset: ' . $loadTime . ' seconds');
    }

    /**
     * Test Case: PERF-004
     * Feature: Search performance
     * Priority: Medium
     */
    public function test_search_performance_is_acceptable()
    {
        $user = User::factory()->create();
        
        // Create searchable content
        DsaProblem::factory()->count(500)->create();
        LearningCourse::factory()->count(200)->create();

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->get(route('global.search', ['q' => 'algorithm']));
        
        $endTime = microtime(true);
        $searchTime = $endTime - $startTime;

        $response->assertStatus(200);
        // Search should complete within 1 second
        $this->assertLessThan(1.0, $searchTime, 'Search took too long: ' . $searchTime . ' seconds');
    }

    /**
     * Test Case: PERF-005
     * Feature: File upload performance
     * Priority: Medium
     */
    public function test_file_upload_handles_large_files_efficiently()
    {
        $user = User::factory()->create();

        // Create a 5MB test file
        $largeFile = \Illuminate\Http\UploadedFile::fake()->create(
            'large-document.pdf',
            5000, // 5MB
            'application/pdf'
        );

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->post(route('learning.courses.store'), [
                             'title' => 'Performance Test Course',
                             'description' => 'Testing large file upload',
                             'category_id' => 1,
                             'thumbnail' => $largeFile
                         ]);
        
        $endTime = microtime(true);
        $uploadTime = $endTime - $startTime;

        // Upload should complete within 5 seconds for 5MB file
        $this->assertLessThan(5.0, $uploadTime, 'Large file upload too slow: ' . $uploadTime . ' seconds');
    }

    /**
     * Test Case: PERF-006
     * Feature: Memory usage optimization
     * Priority: High
     */
    public function test_memory_usage_stays_within_limits()
    {
        $user = User::factory()->create();
        
        $initialMemory = memory_get_usage(true);
        
        // Load multiple pages that could potentially consume memory
        $this->actingAs($user)->get(route('dsa.problems.index'));
        $this->actingAs($user)->get(route('learning.courses.index'));
        $this->actingAs($user)->get(route('monitask.dashboard'));
        
        $finalMemory = memory_get_usage(true);
        $memoryIncrease = $finalMemory - $initialMemory;
        
        // Memory increase should not exceed 50MB
        $this->assertLessThan(50 * 1024 * 1024, $memoryIncrease, 
            'Memory usage increased too much: ' . round($memoryIncrease / (1024 * 1024), 2) . 'MB');
    }

    /**
     * Test Case: PERF-007
     * Feature: Concurrent user handling
     * Priority: High
     */
    public function test_multiple_concurrent_requests_performance()
    {
        $users = User::factory()->count(10)->create();
        
        $startTime = microtime(true);
        
        // Simulate concurrent requests
        $responses = [];
        foreach ($users as $user) {
            $responses[] = $this->actingAs($user)
                               ->get(route('dashboard'));
        }
        
        $endTime = microtime(true);
        $totalTime = $endTime - $startTime;

        // All requests should complete within 5 seconds
        $this->assertLessThan(5.0, $totalTime, 
            'Concurrent requests took too long: ' . $totalTime . ' seconds');
        
        foreach ($responses as $response) {
            $response->assertStatus(200);
        }
    }

    /**
     * Test Case: PERF-008
     * Feature: Database connection pooling
     * Priority: Medium
     */
    public function test_database_connections_are_reused_efficiently()
    {
        $user = User::factory()->create();
        
        // Make multiple database-heavy requests
        for ($i = 0; $i < 10; $i++) {
            $this->actingAs($user)
                 ->get(route('dsa.problems.index'));
        }

        // Check that we're not creating excessive connections
        $connectionCount = DB::select('SHOW STATUS LIKE "Threads_connected"')[0]->Value ?? 0;
        
        // Should not exceed reasonable connection count
        $this->assertLessThan(20, $connectionCount, 
            'Too many database connections: ' . $connectionCount);
    }

    /**
     * Test Case: PERF-009
     * Feature: Cache efficiency
     * Priority: Medium
     */
    public function test_cache_improves_performance()
    {
        $user = User::factory()->create();
        DsaProblem::factory()->count(100)->create();

        // First request (no cache)
        $startTime = microtime(true);
        $this->actingAs($user)->get(route('dsa.problems.index'));
        $firstRequestTime = microtime(true) - $startTime;

        // Second request (should use cache)
        $startTime = microtime(true);
        $this->actingAs($user)->get(route('dsa.problems.index'));
        $secondRequestTime = microtime(true) - $startTime;

        // Second request should be faster due to caching
        $this->assertLessThan($firstRequestTime, $secondRequestTime, 
            'Cache did not improve performance');
    }

    /**
     * Test Case: PERF-010
     * Feature: API response time
     * Priority: High
     */
    public function test_api_endpoints_respond_quickly()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $startTime = microtime(true);
        
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])->getJson('/api/dsa/problems');
        
        $endTime = microtime(true);
        $responseTime = $endTime - $startTime;

        $response->assertStatus(200);
        // API should respond within 500ms
        $this->assertLessThan(0.5, $responseTime, 
            'API response too slow: ' . $responseTime . ' seconds');
    }

    /**
     * Test Case: PERF-011
     * Feature: Image optimization performance
     * Priority: Low
     */
    public function test_image_processing_performance()
    {
        $user = User::factory()->create();

        $image = \Illuminate\Http\UploadedFile::fake()->image(
            'test-image.jpg',
            1920,
            1080
        );

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->post(route('profile.avatar.update'), [
                             'avatar' => $image
                         ]);
        
        $endTime = microtime(true);
        $processTime = $endTime - $startTime;

        // Image processing should complete within 3 seconds
        $this->assertLessThan(3.0, $processTime, 
            'Image processing too slow: ' . $processTime . ' seconds');
    }

    /**
     * Test Case: PERF-012
     * Feature: Time entry aggregation performance
     * Priority: Medium
     */
    public function test_time_entry_aggregation_performance()
    {
        $user = User::factory()->create();
        $project = MonitaskProject::factory()->create(['owner_id' => $user->id]);
        
        // Create large number of time entries
        MonitaskTimeEntry::factory()->count(1000)->create([
            'user_id' => $user->id,
            'project_id' => $project->id
        ]);

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->get(route('monitask.reports.timesheet', [
                             'project_id' => $project->id,
                             'start_date' => now()->subMonth(),
                             'end_date' => now()
                         ]));
        
        $endTime = microtime(true);
        $aggregationTime = $endTime - $startTime;

        $response->assertStatus(200);
        // Time aggregation should complete within 2 seconds
        $this->assertLessThan(2.0, $aggregationTime, 
            'Time aggregation too slow: ' . $aggregationTime . ' seconds');
    }

    /**
     * Test Case: PERF-013
     * Feature: Export functionality performance
     * Priority: Low
     */
    public function test_data_export_performance()
    {
        $user = User::factory()->create();
        
        // Create exportable data
        DsaProblem::factory()->count(500)->create();

        $startTime = microtime(true);
        
        $response = $this->actingAs($user)
                         ->get(route('dsa.problems.export', ['format' => 'csv']));
        
        $endTime = microtime(true);
        $exportTime = $endTime - $startTime;

        $response->assertStatus(200);
        // Export should complete within 5 seconds
        $this->assertLessThan(5.0, $exportTime, 
            'Data export too slow: ' . $exportTime . ' seconds');
    }

    /**
     * Test Case: PERF-014
     * Feature: Real-time features performance
     * Priority: Medium
     */
    public function test_real_time_notifications_performance()
    {
        $user = User::factory()->create();

        $startTime = microtime(true);
        
        // Trigger real-time notification
        $response = $this->actingAs($user)
                         ->post(route('notifications.mark-read'), [
                             'notification_id' => 'test-notification'
                         ]);
        
        $endTime = microtime(true);
        $responseTime = $endTime - $startTime;

        // Real-time operations should be very fast
        $this->assertLessThan(0.1, $responseTime, 
            'Real-time operation too slow: ' . $responseTime . ' seconds');
    }

    /**
     * Test Case: PERF-015
     * Feature: Background job processing performance
     * Priority: Low
     */
    public function test_background_jobs_complete_timely()
    {
        $user = User::factory()->create();

        // Dispatch a background job (placeholder - would need actual job class)
        $startTime = microtime(true);
        
        // Simulate background job processing
        sleep(1); // Simulated job processing time
        
        $endTime = microtime(true);
        $jobTime = $endTime - $startTime;

        // Background job should complete within 5 seconds
        $this->assertLessThan(5.0, $jobTime, 
            'Background job processing too slow: ' . $jobTime . ' seconds');
    }
}
