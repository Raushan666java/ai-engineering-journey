<?php

namespace Tests\Unit;

use App\Models\User;
use App\Models\DsaProblem;
use App\Models\DsaSubmission;
use App\Models\LearningCourse;
use App\Models\MonitaskProject;
use App\Models\MonitaskTask;
use App\Models\MonitaskTimeEntry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ModelUnitTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test Case: UNIT-001
     * Feature: User model relationships
     * Priority: High
     */
    public function test_user_has_correct_relationships()
    {
        $user = User::factory()->create();
        
        // Test DSA relationships
        $dsaProblem = DsaProblem::factory()->create(['created_by' => $user->id]);
        $dsaSubmission = DsaSubmission::factory()->create(['user_id' => $user->id]);
        
        $this->assertTrue($user->dsaProblems()->exists());
        $this->assertTrue($user->dsaSubmissions()->exists());
        $this->assertEquals(1, $user->dsaProblems->count());
        $this->assertEquals(1, $user->dsaSubmissions->count());
        
        // Test Learning relationships
        $course = LearningCourse::factory()->create();
        $user->enrolledCourses()->attach($course->id);
        
        $this->assertTrue($user->enrolledCourses()->exists());
        $this->assertEquals(1, $user->enrolledCourses->count());
        
        // Test MONITASK relationships
        $project = MonitaskProject::factory()->create(['owner_id' => $user->id]);
        $timeEntry = MonitaskTimeEntry::factory()->create(['user_id' => $user->id]);
        
        $this->assertTrue($user->monitaskProjects()->exists());
        $this->assertTrue($user->timeEntries()->exists());
        $this->assertEquals(1, $user->monitaskProjects->count());
        $this->assertEquals(1, $user->timeEntries->count());
    }

    /**
     * Test Case: UNIT-002
     * Feature: DSA Problem model methods
     * Priority: High
     */
    public function test_dsa_problem_model_methods()
    {
        $problem = DsaProblem::factory()->create([
            'difficulty' => 'medium',
            'category' => 'arrays'
        ]);

        // Test difficulty color method
        $this->assertEquals('warning', $problem->getDifficultyColorAttribute());
        
        // Test category badge method
        $this->assertEquals('primary', $problem->getCategoryBadgeAttribute());
        
        // Test slug generation
        $this->assertNotNull($problem->slug);
        $this->assertStringContainsString($problem->title, $problem->slug);
    }

    /**
     * Test Case: UNIT-003
     * Feature: DSA Submission model calculations
     * Priority: High
     */
    public function test_dsa_submission_model_calculations()
    {
        $submission = DsaSubmission::factory()->create([
            'status' => 'accepted',
            'runtime' => 150, // ms
            'memory_usage' => 2048 // KB
        ]);

        $this->assertTrue($submission->isAccepted());
        $this->assertEquals('success', $submission->getStatusColorAttribute());
        $this->assertEquals('150 ms', $submission->getFormattedRuntimeAttribute());
        $this->assertEquals('2.0 MB', $submission->getFormattedMemoryAttribute());
    }

    /**
     * Test Case: UNIT-004
     * Feature: Learning Course model methods
     * Priority: High
     */
    public function test_learning_course_model_methods()
    {
        $course = LearningCourse::factory()->create([
            'price' => 99.99,
            'duration_hours' => 40
        ]);

        // Test price formatting
        $this->assertEquals('$99.99', $course->getFormattedPriceAttribute());
        
        // Test duration formatting
        $this->assertEquals('40 hours', $course->getFormattedDurationAttribute());
        
        // Test enrollment methods
        $user = User::factory()->create();
        $course->students()->attach($user->id);
        
        $this->assertTrue($course->hasStudent($user));
        $this->assertEquals(1, $course->getStudentCountAttribute());
    }

    /**
     * Test Case: UNIT-005
     * Feature: MONITASK Project model calculations
     * Priority: High
     */
    public function test_monitask_project_model_calculations()
    {
        $project = MonitaskProject::factory()->create([
            'estimated_hours' => 100,
            'budget' => 5000.00
        ]);

        // Create tasks
        MonitaskTask::factory()->create([
            'project_id' => $project->id,
            'status' => 'completed'
        ]);
        MonitaskTask::factory()->create([
            'project_id' => $project->id,
            'status' => 'in_progress'
        ]);

        // Create time entries
        MonitaskTimeEntry::factory()->create([
            'project_id' => $project->id,
            'duration_minutes' => 120,
            'hourly_rate' => 50.00,
            'is_billable' => true
        ]);

        $this->assertEquals(2, $project->getTotalTasksCountAttribute());
        $this->assertEquals(1, $project->getCompletedTasksCountAttribute());
        $this->assertEquals(50, $project->getProgressPercentageAttribute());
        $this->assertEquals(2.0, $project->getTotalHoursAttribute());
        $this->assertEquals(100.00, $project->getTotalEarningsAttribute());
    }

    /**
     * Test Case: UNIT-006
     * Feature: MONITASK Task model methods
     * Priority: Medium
     */
    public function test_monitask_task_model_methods()
    {
        $task = MonitaskTask::factory()->create([
            'status' => 'in_progress',
            'priority' => 'high',
            'due_date' => now()->addDays(2)
        ]);

        $this->assertEquals(50, $task->getProgressPercentageAttribute());
        $this->assertEquals('danger', $task->getPriorityColorAttribute());
        $this->assertFalse($task->isOverdue());
        $this->assertFalse($task->isDueSoon());
        
        // Test overdue task
        $overdueTask = MonitaskTask::factory()->create([
            'due_date' => now()->subDay()
        ]);
        $this->assertTrue($overdueTask->isOverdue());
    }

    /**
     * Test Case: UNIT-007
     * Feature: Time Entry model calculations
     * Priority: High
     */
    public function test_time_entry_model_calculations()
    {
        $timeEntry = MonitaskTimeEntry::factory()->create([
            'start_time' => now()->subHours(2)->subMinutes(30),
            'end_time' => now(),
            'hourly_rate' => 75.00,
            'is_billable' => true
        ]);

        $this->assertEquals(150, $timeEntry->duration_minutes);
        $this->assertEquals(2.5, $timeEntry->getDurationHoursAttribute());
        $this->assertEquals('2h 30m', $timeEntry->getDurationFormattedAttribute());
        $this->assertEquals(187.50, $timeEntry->getEarningsAttribute());
        $this->assertFalse($timeEntry->isRunning());
    }

    /**
     * Test Case: UNIT-008
     * Feature: User authentication attributes
     * Priority: Medium
     */
    public function test_user_authentication_attributes()
    {
        $user = User::factory()->create([
            'email_verified_at' => now(),
            'two_factor_enabled' => true,
            'role' => 'instructor'
        ]);

        $this->assertTrue($user->hasVerifiedEmail());
        $this->assertTrue($user->hasTwoFactorEnabled());
        $this->assertEquals('instructor', $user->role);
        $this->assertTrue($user->hasRole('instructor'));
        $this->assertFalse($user->hasRole('admin'));
    }

    /**
     * Test Case: UNIT-009
     * Feature: Model validation rules
     * Priority: High
     */
    public function test_model_validation_rules()
    {
        // Test DSA Problem validation
        $this->expectException(\Illuminate\Database\QueryException::class);
        DsaProblem::create([]); // Should fail without required fields
    }

    /**
     * Test Case: UNIT-010
     * Feature: Model factory states
     * Priority: Medium
     */
    public function test_model_factory_states()
    {
        // Test different problem difficulties
        $easyProblem = DsaProblem::factory()->easy()->create();
        $hardProblem = DsaProblem::factory()->hard()->create();
        
        $this->assertEquals('easy', $easyProblem->difficulty);
        $this->assertEquals('hard', $hardProblem->difficulty);
        
        // Test different submission statuses
        $acceptedSubmission = DsaSubmission::factory()->accepted()->create();
        $rejectedSubmission = DsaSubmission::factory()->rejected()->create();
        
        $this->assertEquals('accepted', $acceptedSubmission->status);
        $this->assertEquals('wrong_answer', $rejectedSubmission->status);
    }

    /**
     * Test Case: UNIT-011
     * Feature: Model scopes
     * Priority: Medium
     */
    public function test_model_scopes()
    {
        // Create test data
        DsaProblem::factory()->create(['difficulty' => 'easy']);
        DsaProblem::factory()->create(['difficulty' => 'medium']);
        DsaProblem::factory()->create(['difficulty' => 'hard']);

        $this->assertEquals(1, DsaProblem::easy()->count());
        $this->assertEquals(1, DsaProblem::medium()->count());
        $this->assertEquals(1, DsaProblem::hard()->count());
        
        // Test course scopes
        LearningCourse::factory()->create(['is_published' => true]);
        LearningCourse::factory()->create(['is_published' => false]);
        
        $this->assertEquals(1, LearningCourse::published()->count());
        $this->assertEquals(2, LearningCourse::count());
    }

    /**
     * Test Case: UNIT-012
     * Feature: Model mutators and accessors
     * Priority: Medium
     */
    public function test_model_mutators_and_accessors()
    {
        $user = User::factory()->create([
            'name' => 'john doe'
        ]);

        // Test name capitalization accessor
        $this->assertEquals('John Doe', $user->name);
        
        $course = LearningCourse::factory()->create([
            'title' => 'advanced javascript course'
        ]);

        // Test title case accessor
        $this->assertEquals('Advanced Javascript Course', $course->title);
    }

    /**
     * Test Case: UNIT-013
     * Feature: Model casting
     * Priority: Low
     */
    public function test_model_attribute_casting()
    {
        $problem = DsaProblem::factory()->create([
            'tags' => ['array', 'sorting', 'binary-search'],
            'constraints' => ['time_limit' => 2000, 'memory_limit' => 256],
            'is_premium' => true
        ]);

        $this->assertIsArray($problem->tags);
        $this->assertIsArray($problem->constraints);
        $this->assertIsBool($problem->is_premium);
        
        $timeEntry = MonitaskTimeEntry::factory()->create([
            'start_time' => '2024-01-15 09:00:00'
        ]);

        $this->assertInstanceOf(\Carbon\Carbon::class, $timeEntry->start_time);
    }

    /**
     * Test Case: UNIT-014
     * Feature: Model events and observers
     * Priority: Medium
     */
    public function test_model_events()
    {
        // Test that creating a submission updates problem statistics
        $problem = DsaProblem::factory()->create();
        
        DsaSubmission::factory()->create([
            'problem_id' => $problem->id,
            'status' => 'accepted'
        ]);

        $problem->refresh();
        $this->assertEquals(1, $problem->total_submissions);
        $this->assertEquals(1, $problem->successful_submissions);
    }

    /**
     * Test Case: UNIT-015
     * Feature: Model serialization
     * Priority: Low
     */
    public function test_model_serialization()
    {
        $problem = DsaProblem::factory()->create();
        
        $json = $problem->toJson();
        $array = $problem->toArray();
        
        $this->assertJson($json);
        $this->assertIsArray($array);
        $this->assertArrayHasKey('title', $array);
        $this->assertArrayHasKey('difficulty', $array);
        
        // Test hidden attributes are not exposed
        $user = User::factory()->create();
        $userArray = $user->toArray();
        
        $this->assertArrayNotHasKey('password', $userArray);
        $this->assertArrayNotHasKey('remember_token', $userArray);
    }
}
