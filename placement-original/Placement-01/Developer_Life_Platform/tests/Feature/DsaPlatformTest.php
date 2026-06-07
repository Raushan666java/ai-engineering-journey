<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\DsaProblem;
use App\Models\DsaSubmission;
use App\Models\DsaContest;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DsaPlatformTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
    }

    /**
     * Test Case: DSA-001
     * Feature: Create new coding problem
     * Priority: High
     */
    public function test_authenticated_user_can_create_problem()
    {
        $user = User::factory()->create();
        
        $problemData = [
            'title' => 'Two Sum Problem',
            'description' => 'Find two numbers that add up to target sum',
            'difficulty' => 'Easy',
            'tags' => ['Array', 'Hash Table'],
            'companies' => ['Google', 'Facebook'],
            'time_limit' => 1000,
            'memory_limit' => 128,
            'test_cases' => [
                ['input' => '[2,7,11,15], 9', 'output' => '[0,1]'],
                ['input' => '[3,2,4], 6', 'output' => '[1,2]']
            ],
            'acceptance_rate' => 45.5
        ];

        $response = $this->actingAs($user)
                         ->post(route('dsa.problems.store'), $problemData);

        $response->assertRedirect();
        $this->assertDatabaseHas('dsa_problems', [
            'title' => 'Two Sum Problem',
            'difficulty' => 'Easy'
        ]);
    }

    /**
     * Test Case: DSA-002
     * Feature: Problem validation
     * Priority: High
     */
    public function test_problem_creation_requires_valid_data()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)
                         ->post(route('dsa.problems.store'), []);

        $response->assertSessionHasErrors([
            'title', 'description', 'difficulty', 'test_cases'
        ]);
    }

    /**
     * Test Case: DSA-003
     * Feature: Problem listing with filters
     * Priority: Medium
     */
    public function test_user_can_filter_problems_by_difficulty()
    {
        $easyProblem = DsaProblem::factory()->create(['difficulty' => 'Easy']);
        $hardProblem = DsaProblem::factory()->create(['difficulty' => 'Hard']);

        $response = $this->get(route('dsa.problems.index', ['difficulty' => 'Easy']));

        $response->assertStatus(200);
        $response->assertViewHas('problems');
    }

    /**
     * Test Case: DSA-004
     * Feature: Problem search functionality
     * Priority: Medium
     */
    public function test_user_can_search_problems_by_title()
    {
        DsaProblem::factory()->create(['title' => 'Binary Search Problem']);
        DsaProblem::factory()->create(['title' => 'Linear Search Problem']);

        $response = $this->get(route('dsa.problems.index', ['search' => 'Binary']));

        $response->assertStatus(200);
        $response->assertViewHas('problems');
    }

    /**
     * Test Case: DSA-005
     * Feature: Code submission
     * Priority: Critical
     */
    public function test_user_can_submit_code_solution()
    {
        $user = User::factory()->create();
        $problem = DsaProblem::factory()->create();
        
        $submissionData = [
            'code' => 'def two_sum(nums, target):\n    return [0, 1]',
            'language' => 'python'
        ];

        $response = $this->actingAs($user)
                         ->post(route('dsa.problems.submit', $problem), $submissionData);

        $response->assertRedirect();
        $this->assertDatabaseHas('dsa_submissions', [
            'user_id' => $user->id,
            'problem_id' => $problem->id,
            'language' => 'python'
        ]);
    }

    /**
     * Test Case: DSA-006
     * Feature: Submission validation
     * Priority: High
     */
    public function test_submission_requires_code_and_language()
    {
        $user = User::factory()->create();
        $problem = DsaProblem::factory()->create();

        $response = $this->actingAs($user)
                         ->post(route('dsa.problems.submit', $problem), []);

        $response->assertSessionHasErrors(['code', 'language']);
    }

    /**
     * Test Case: DSA-007
     * Feature: Contest creation
     * Priority: High
     */
    public function test_user_can_create_contest()
    {
        $user = User::factory()->create();
        $problems = DsaProblem::factory()->count(3)->create();
        
        $contestData = [
            'title' => 'Weekly Contest 1',
            'description' => 'Test your algorithmic skills',
            'start_time' => now()->addHour()->format('Y-m-d H:i:s'),
            'duration_minutes' => 120,
            'type' => 'public',
            'difficulty' => 'intermediate',
            'registration_deadline' => now()->addMinutes(30)->format('Y-m-d H:i:s'),
            'problems' => $problems->pluck('id')->toArray(),
            'rules' => ['No external help allowed'],
            'prizes' => ['1st place: $100']
        ];

        $response = $this->actingAs($user)
                         ->post(route('dsa.contests.store'), $contestData);

        $response->assertRedirect();
        $this->assertDatabaseHas('dsa_contests', [
            'title' => 'Weekly Contest 1'
        ]);
    }

    /**
     * Test Case: DSA-008
     * Feature: Contest registration
     * Priority: High
     */
    public function test_user_can_register_for_contest()
    {
        $user = User::factory()->create();
        $contest = DsaContest::factory()->create([
            'start_time' => now()->addHour(),
            'registration_deadline' => now()->addMinutes(30)
        ]);

        $response = $this->actingAs($user)
                         ->post(route('dsa.contests.register', $contest));

        $response->assertRedirect();
        $this->assertTrue($contest->participants()->where('user_id', $user->id)->exists());
    }

    /**
     * Test Case: DSA-009
     * Feature: Contest unregistration
     * Priority: Medium
     */
    public function test_user_can_unregister_from_contest()
    {
        $user = User::factory()->create();
        $contest = DsaContest::factory()->create([
            'start_time' => now()->addHour(),
            'registration_deadline' => now()->addMinutes(30)
        ]);
        
        // First register
        $contest->participants()->attach($user->id);

        $response = $this->actingAs($user)
                         ->delete(route('dsa.contests.unregister', $contest));

        $response->assertRedirect();
        $this->assertFalse($contest->participants()->where('user_id', $user->id)->exists());
    }

    /**
     * Test Case: DSA-010
     * Feature: Problem view authorization
     * Priority: Medium
     */
    public function test_guest_can_view_problems_but_cannot_submit()
    {
        $problem = DsaProblem::factory()->create();

        // Guest can view problem
        $response = $this->get(route('dsa.problems.show', $problem));
        $response->assertStatus(200);

        // But cannot submit solution
        $response = $this->post(route('dsa.problems.submit', $problem), [
            'code' => 'test code',
            'language' => 'python'
        ]);
        $response->assertRedirect(route('login'));
    }

    /**
     * Test Case: DSA-011
     * Feature: Problem difficulty badge display
     * Priority: Low
     */
    public function test_problem_difficulty_has_correct_color_coding()
    {
        $easyProblem = DsaProblem::factory()->create(['difficulty' => 'Easy']);
        $mediumProblem = DsaProblem::factory()->create(['difficulty' => 'Medium']);
        $hardProblem = DsaProblem::factory()->create(['difficulty' => 'Hard']);

        $this->assertEquals('success', $easyProblem->difficulty_color);
        $this->assertEquals('warning', $mediumProblem->difficulty_color);
        $this->assertEquals('danger', $hardProblem->difficulty_color);
    }

    /**
     * Test Case: DSA-012
     * Feature: Submission status tracking
     * Priority: High
     */
    public function test_submission_status_updates_correctly()
    {
        $user = User::factory()->create();
        $problem = DsaProblem::factory()->create();
        
        $submission = DsaSubmission::factory()->create([
            'user_id' => $user->id,
            'problem_id' => $problem->id,
            'status' => 'pending'
        ]);

        // Simulate code execution result
        $submission->update([
            'status' => 'accepted',
            'execution_time' => 250,
            'memory_used' => 15.5,
            'score' => 100
        ]);

        $this->assertEquals('accepted', $submission->status);
        $this->assertTrue($submission->isAccepted());
    }

    /**
     * Test Case: DSA-013
     * Feature: Contest time validation
     * Priority: High
     */
    public function test_contest_time_status_methods()
    {
        // Upcoming contest
        $upcomingContest = DsaContest::factory()->create([
            'start_time' => now()->addHour(),
            'end_time' => now()->addHours(3)
        ]);

        // Active contest
        $activeContest = DsaContest::factory()->create([
            'start_time' => now()->subHour(),
            'end_time' => now()->addHour(),
            'is_active' => true
        ]);

        // Finished contest
        $finishedContest = DsaContest::factory()->create([
            'start_time' => now()->subHours(3),
            'end_time' => now()->subHour()
        ]);

        $this->assertTrue($upcomingContest->isUpcoming());
        $this->assertTrue($activeContest->isActive());
        $this->assertTrue($finishedContest->isFinished());
    }

    /**
     * Test Case: DSA-014
     * Feature: Problem leaderboard
     * Priority: Medium
     */
    public function test_problem_leaderboard_shows_best_submissions()
    {
        $problem = DsaProblem::factory()->create();
        $users = User::factory()->count(3)->create();
        
        // Create submissions with different execution times
        DsaSubmission::factory()->create([
            'user_id' => $users[0]->id,
            'problem_id' => $problem->id,
            'status' => 'accepted',
            'execution_time' => 100
        ]);
        
        DsaSubmission::factory()->create([
            'user_id' => $users[1]->id,
            'problem_id' => $problem->id,
            'status' => 'accepted',
            'execution_time' => 200
        ]);

        $response = $this->get(route('dsa.problems.leaderboard', $problem));
        
        $response->assertStatus(200);
        $response->assertViewHas('submissions');
    }

    /**
     * Test Case: DSA-015
     * Feature: Multi-language support
     * Priority: Medium
     */
    public function test_submission_supports_multiple_languages()
    {
        $user = User::factory()->create();
        $problem = DsaProblem::factory()->create();
        
        $languages = ['python', 'java', 'cpp', 'javascript', 'c'];
        
        foreach ($languages as $language) {
            $response = $this->actingAs($user)
                             ->post(route('dsa.problems.submit', $problem), [
                                 'code' => "// Code in {$language}",
                                 'language' => $language
                             ]);
            
            $response->assertRedirect();
        }
        
        $this->assertEquals(5, $problem->submissions()->count());
    }
}
