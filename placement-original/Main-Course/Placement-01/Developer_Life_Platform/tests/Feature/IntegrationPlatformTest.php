<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\DsaProblem;
use App\Models\LearningCourse;
use App\Models\MonitaskProject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class IntegrationPlatformTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
    }

    /**
     * Test Case: INT-001
     * Feature: Unified authentication across platforms
     * Priority: Critical
     */
    public function test_user_can_access_all_platforms_with_single_login()
    {
        $user = User::factory()->create();

        // Test DSA platform access
        $response = $this->actingAs($user)
                         ->get(route('dsa.problems.index'));
        $response->assertStatus(200);

        // Test Learning platform access
        $response = $this->actingAs($user)
                         ->get(route('learning.courses.index'));
        $response->assertStatus(200);

        // Test MONITASK platform access
        $response = $this->actingAs($user)
                         ->get(route('monitask.dashboard'));
        $response->assertStatus(200);
    }

    /**
     * Test Case: INT-002
     * Feature: Unified navigation between platforms
     * Priority: High
     */
    public function test_platform_navigation_is_consistent()
    {
        $user = User::factory()->create();

        // Check main dashboard has links to all platforms
        $response = $this->actingAs($user)
                         ->get(route('dashboard'));

        $response->assertStatus(200);
        $response->assertSee('DSA Practice');
        $response->assertSee('Learning Courses');
        $response->assertSee('MONITASK');
    }

    /**
     * Test Case: INT-003
     * Feature: Cross-platform user profile consistency
     * Priority: High
     */
    public function test_user_profile_consistent_across_platforms()
    {
        $user = User::factory()->create([
            'name' => 'John Developer',
            'email' => 'john@example.com'
        ]);

        // Check profile appears consistently
        $dsaResponse = $this->actingAs($user)
                           ->get(route('dsa.profile'));
        $dsaResponse->assertSee('John Developer');

        $learningResponse = $this->actingAs($user)
                                ->get(route('learning.profile'));
        $learningResponse->assertSee('John Developer');

        $monitaskResponse = $this->actingAs($user)
                                ->get(route('monitask.profile'));
        $monitaskResponse->assertSee('John Developer');
    }

    /**
     * Test Case: INT-004
     * Feature: Cross-platform progress tracking
     * Priority: Medium
     */
    public function test_unified_progress_dashboard()
    {
        $user = User::factory()->create();
        
        // Create data across platforms
        DsaProblem::factory()->create();
        LearningCourse::factory()->create();
        MonitaskProject::factory()->create(['owner_id' => $user->id]);

        $response = $this->actingAs($user)
                         ->get(route('dashboard'));

        $response->assertStatus(200);
        $response->assertViewHas(['dsaStats', 'learningStats', 'monitaskStats']);
    }

    /**
     * Test Case: INT-005
     * Feature: Unified search across platforms
     * Priority: Medium
     */
    public function test_global_search_works_across_platforms()
    {
        $user = User::factory()->create();
        
        // Create searchable content
        DsaProblem::factory()->create(['title' => 'Binary Search Algorithm']);
        LearningCourse::factory()->create(['title' => 'Advanced JavaScript']);
        MonitaskProject::factory()->create([
            'name' => 'E-commerce Development',
            'owner_id' => $user->id
        ]);

        $response = $this->actingAs($user)
                         ->get(route('global.search', ['q' => 'algorithm']));

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'dsa_problems',
            'learning_courses',
            'monitask_projects'
        ]);
    }

    /**
     * Test Case: INT-006
     * Feature: Unified notification system
     * Priority: Medium
     */
    public function test_notifications_work_across_platforms()
    {
        $user = User::factory()->create();

        // Test that user can receive notifications from all platforms
        $response = $this->actingAs($user)
                         ->get(route('notifications.index'));

        $response->assertStatus(200);
        $response->assertViewHas('notifications');
    }

    /**
     * Test Case: INT-007
     * Feature: Platform switching maintains session
     * Priority: High
     */
    public function test_session_maintained_when_switching_platforms()
    {
        $user = User::factory()->create();

        // Start session on DSA platform
        $this->actingAs($user)
             ->get(route('dsa.problems.index'))
             ->assertStatus(200);

        // Switch to Learning platform - should maintain session
        $response = $this->get(route('learning.courses.index'));
        $response->assertStatus(200);

        // Switch to MONITASK platform - should maintain session
        $response = $this->get(route('monitask.dashboard'));
        $response->assertStatus(200);
    }

    /**
     * Test Case: INT-008
     * Feature: Unified role-based access control
     * Priority: Critical
     */
    public function test_role_based_access_consistent_across_platforms()
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $instructor = User::factory()->create(['role' => 'instructor']);
        $student = User::factory()->create(['role' => 'student']);

        // Admin access
        $response = $this->actingAs($admin)
                         ->get(route('admin.dashboard'));
        $response->assertStatus(200);

        // Instructor access to course management
        $response = $this->actingAs($instructor)
                         ->get(route('learning.courses.create'));
        $response->assertStatus(200);

        // Student should not access admin areas
        $response = $this->actingAs($student)
                         ->get(route('admin.dashboard'));
        $response->assertStatus(403);
    }

    /**
     * Test Case: INT-009
     * Feature: Unified file storage and access
     * Priority: Medium
     */
    public function test_file_storage_consistent_across_platforms()
    {
        $user = User::factory()->create();

        // Test file access from different platforms uses same storage
        $response = $this->actingAs($user)
                         ->get(route('storage.files.index'));

        $response->assertStatus(200);
        $response->assertViewHas('files');
    }

    /**
     * Test Case: INT-010
     * Feature: Platform analytics integration
     * Priority: Low
     */
    public function test_analytics_tracked_across_platforms()
    {
        $user = User::factory()->create();

        // Visit different platforms
        $this->actingAs($user)
             ->get(route('dsa.problems.index'));
        
        $this->actingAs($user)
             ->get(route('learning.courses.index'));
        
        $this->actingAs($user)
             ->get(route('monitask.dashboard'));

        // Check analytics dashboard shows cross-platform usage
        $response = $this->actingAs($user)
                         ->get(route('analytics.dashboard'));

        $response->assertStatus(200);
        $response->assertViewHas('platformUsage');
    }
}
