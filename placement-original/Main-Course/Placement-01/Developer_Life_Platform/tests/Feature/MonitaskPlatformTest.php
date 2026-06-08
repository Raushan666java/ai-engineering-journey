<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\MonitaskProject;
use App\Models\MonitaskTask;
use App\Models\MonitaskTimeEntry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MonitaskPlatformTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
    }

    /**
     * Test Case: TASK-001
     * Feature: Project creation
     * Priority: High
     */
    public function test_user_can_create_project()
    {
        $user = User::factory()->create();
        $client = User::factory()->create();
        
        $projectData = [
            'name' => 'E-commerce Website Development',
            'description' => 'Build a complete online store',
            'client_id' => $client->id,
            'status' => 'planning',
            'priority' => 'high',
            'start_date' => now()->addDay()->format('Y-m-d'),
            'deadline' => now()->addMonth()->format('Y-m-d'),
            'budget' => 5000.00,
            'hourly_rate' => 50.00,
            'currency' => 'USD',
            'estimated_hours' => 100,
            'is_billable' => true
        ];

        $response = $this->actingAs($user)
                         ->post(route('monitask.projects.store'), $projectData);

        $response->assertRedirect();
        $this->assertDatabaseHas('monitask_projects', [
            'name' => 'E-commerce Website Development',
            'owner_id' => $user->id,
            'client_id' => $client->id
        ]);
    }

    /**
     * Test Case: TASK-002
     * Feature: Project validation
     * Priority: High
     */
    public function test_project_creation_requires_valid_data()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)
                         ->post(route('monitask.projects.store'), []);

        $response->assertSessionHasErrors([
            'name', 'status', 'priority', 'currency'
        ]);
    }

    /**
     * Test Case: TASK-003
     * Feature: Project team management
     * Priority: High
     */
    public function test_project_owner_can_add_team_members()
    {
        $owner = User::factory()->create();
        $member = User::factory()->create(['name' => 'John Developer']);
        $project = MonitaskProject::factory()->create(['owner_id' => $owner->id]);

        $response = $this->actingAs($owner)
                         ->post(route('monitask.projects.add-member', $project), [
                             'user_id' => $member->id,
                             'role' => 'Frontend Developer',
                             'hourly_rate' => 40.00
                         ]);

        $response->assertRedirect();
        $this->assertTrue($project->members()->where('user_id', $member->id)->exists());
    }

    /**
     * Test Case: TASK-004
     * Feature: Project team member removal
     * Priority: Medium
     */
    public function test_project_owner_can_remove_team_members()
    {
        $owner = User::factory()->create();
        $member = User::factory()->create();
        $project = MonitaskProject::factory()->create(['owner_id' => $owner->id]);
        
        // Add member first
        $project->members()->attach($member->id, ['role' => 'Developer']);

        $response = $this->actingAs($owner)
                         ->delete(route('monitask.projects.remove-member', [$project, $member]));

        $response->assertRedirect();
        $this->assertFalse($project->members()->where('user_id', $member->id)->exists());
    }

    /**
     * Test Case: TASK-005
     * Feature: Task creation and assignment
     * Priority: High
     */
    public function test_user_can_create_and_assign_task()
    {
        $creator = User::factory()->create();
        $assignee = User::factory()->create();
        $project = MonitaskProject::factory()->create();
        
        $taskData = [
            'project_id' => $project->id,
            'assigned_to' => $assignee->id,
            'title' => 'Implement user authentication system',
            'description' => 'Create login, registration, and password reset',
            'status' => 'todo',
            'priority' => 'high',
            'due_date' => now()->addWeek()->format('Y-m-d H:i:s'),
            'estimated_hours' => 8,
            'tags' => ['backend', 'security', 'authentication'],
            'is_billable' => true
        ];

        $response = $this->actingAs($creator)
                         ->post(route('monitask.tasks.store'), $taskData);

        $response->assertRedirect();
        $this->assertDatabaseHas('monitask_tasks', [
            'title' => 'Implement user authentication system',
            'assigned_to' => $assignee->id,
            'created_by' => $creator->id
        ]);
    }

    /**
     * Test Case: TASK-006
     * Feature: Manual time entry
     * Priority: Critical
     */
    public function test_user_can_create_manual_time_entry()
    {
        $user = User::factory()->create();
        $project = MonitaskProject::factory()->create();
        $task = MonitaskTask::factory()->create(['project_id' => $project->id]);
        
        $timeData = [
            'project_id' => $project->id,
            'task_id' => $task->id,
            'description' => 'Working on user interface components',
            'start_time' => now()->subHours(2)->format('Y-m-d H:i:s'),
            'end_time' => now()->format('Y-m-d H:i:s'),
            'is_billable' => true,
            'hourly_rate' => 50.00,
            'tags' => ['frontend', 'ui']
        ];

        $response = $this->actingAs($user)
                         ->post(route('monitask.manual-entry'), $timeData);

        $response->assertRedirect();
        $this->assertDatabaseHas('monitask_time_entries', [
            'user_id' => $user->id,
            'project_id' => $project->id,
            'task_id' => $task->id,
            'duration_minutes' => 120
        ]);
    }

    /**
     * Test Case: TASK-007
     * Feature: Time tracking calculations
     * Priority: High
     */
    public function test_time_entry_calculations_are_correct()
    {
        $timeEntry = MonitaskTimeEntry::factory()->create([
            'duration_minutes' => 150,
            'hourly_rate' => 60.00,
            'is_billable' => true
        ]);

        $this->assertEquals(2.5, $timeEntry->getDurationHoursAttribute());
        $this->assertEquals(150.00, $timeEntry->getEarningsAttribute());
        $this->assertEquals('2h 30m', $timeEntry->getDurationFormattedAttribute());
    }

    /**
     * Test Case: TASK-008
     * Feature: Project progress tracking
     * Priority: Medium
     */
    public function test_project_progress_calculations()
    {
        $project = MonitaskProject::factory()->create();
        
        // Create tasks with different statuses
        MonitaskTask::factory()->create(['project_id' => $project->id, 'status' => 'completed']);
        MonitaskTask::factory()->create(['project_id' => $project->id, 'status' => 'completed']);
        MonitaskTask::factory()->create(['project_id' => $project->id, 'status' => 'in_progress']);
        MonitaskTask::factory()->create(['project_id' => $project->id, 'status' => 'todo']);

        $this->assertEquals(2, $project->getCompletedTasksCountAttribute());
        $this->assertEquals(4, $project->getTotalTasksCountAttribute());
    }

    /**
     * Test Case: TASK-009
     * Feature: Project earnings calculation
     * Priority: High
     */
    public function test_project_earnings_calculation()
    {
        $project = MonitaskProject::factory()->create();
        
        // Create billable time entries
        MonitaskTimeEntry::factory()->create([
            'project_id' => $project->id,
            'duration_minutes' => 120,
            'hourly_rate' => 50.00,
            'is_billable' => true
        ]);
        
        MonitaskTimeEntry::factory()->create([
            'project_id' => $project->id,
            'duration_minutes' => 60,
            'hourly_rate' => 50.00,
            'is_billable' => false
        ]);

        $this->assertEquals(3.0, $project->getTotalHoursAttribute());
        // Only billable hours should count for earnings (2 hours * $50)
        $this->assertEquals(100.00, $project->getTotalEarningsAttribute());
    }

    /**
     * Test Case: TASK-010
     * Feature: Task status progression
     * Priority: Medium
     */
    public function test_task_status_progression_and_progress()
    {
        $todoTask = MonitaskTask::factory()->create(['status' => 'todo']);
        $inProgressTask = MonitaskTask::factory()->create(['status' => 'in_progress']);
        $reviewTask = MonitaskTask::factory()->create(['status' => 'review']);
        $completedTask = MonitaskTask::factory()->create(['status' => 'completed']);

        $this->assertEquals(0, $todoTask->getProgressPercentageAttribute());
        $this->assertEquals(50, $inProgressTask->getProgressPercentageAttribute());
        $this->assertEquals(80, $reviewTask->getProgressPercentageAttribute());
        $this->assertEquals(100, $completedTask->getProgressPercentageAttribute());
    }

    /**
     * Test Case: TASK-011
     * Feature: Task due date tracking
     * Priority: High
     */
    public function test_task_due_date_status_methods()
    {
        $overdueTask = MonitaskTask::factory()->create([
            'due_date' => now()->subDay(),
            'status' => 'in_progress'
        ]);
        
        $dueSoonTask = MonitaskTask::factory()->create([
            'due_date' => now()->addHours(12),
            'status' => 'todo'
        ]);
        
        $onTimeTask = MonitaskTask::factory()->create([
            'due_date' => now()->addWeek(),
            'status' => 'todo'
        ]);

        $this->assertTrue($overdueTask->isOverdue());
        $this->assertTrue($dueSoonTask->isDueSoon());
        $this->assertFalse($onTimeTask->isOverdue());
        $this->assertFalse($onTimeTask->isDueSoon());
    }

    /**
     * Test Case: TASK-012
     * Feature: Project status color coding
     * Priority: Low
     */
    public function test_project_status_color_coding()
    {
        $activeProject = MonitaskProject::factory()->create(['status' => 'active']);
        $onHoldProject = MonitaskProject::factory()->create(['status' => 'on_hold']);
        $completedProject = MonitaskProject::factory()->create(['status' => 'completed']);
        $cancelledProject = MonitaskProject::factory()->create(['status' => 'cancelled']);

        $this->assertEquals('success', $activeProject->getStatusColorAttribute());
        $this->assertEquals('warning', $onHoldProject->getStatusColorAttribute());
        $this->assertEquals('primary', $completedProject->getStatusColorAttribute());
        $this->assertEquals('danger', $cancelledProject->getStatusColorAttribute());
    }

    /**
     * Test Case: TASK-013
     * Feature: Project filtering by status
     * Priority: Medium
     */
    public function test_user_can_filter_projects_by_status()
    {
        $user = User::factory()->create();
        
        $activeProject = MonitaskProject::factory()->create([
            'owner_id' => $user->id,
            'status' => 'active'
        ]);
        $completedProject = MonitaskProject::factory()->create([
            'owner_id' => $user->id,
            'status' => 'completed'
        ]);

        $response = $this->actingAs($user)
                         ->get(route('monitask.projects.index', ['status' => 'active']));

        $response->assertStatus(200);
        $response->assertViewHas('projects');
    }

    /**
     * Test Case: TASK-014
     * Feature: Time entry running status
     * Priority: High
     */
    public function test_time_entry_running_status()
    {
        $runningEntry = MonitaskTimeEntry::factory()->create([
            'start_time' => now()->subHour(),
            'end_time' => null
        ]);
        
        $completedEntry = MonitaskTimeEntry::factory()->create([
            'start_time' => now()->subHours(2),
            'end_time' => now()->subHour()
        ]);

        $this->assertTrue($runningEntry->isRunning());
        $this->assertFalse($completedEntry->isRunning());
    }

    /**
     * Test Case: TASK-015
     * Feature: Project access control
     * Priority: Critical
     */
    public function test_user_can_only_access_projects_they_are_involved_in()
    {
        $owner = User::factory()->create();
        $client = User::factory()->create();
        $outsider = User::factory()->create();
        
        $project = MonitaskProject::factory()->create([
            'owner_id' => $owner->id,
            'client_id' => $client->id
        ]);

        // Owner can access
        $response = $this->actingAs($owner)
                         ->get(route('monitask.projects.show', $project));
        $response->assertStatus(200);

        // Client can access
        $response = $this->actingAs($client)
                         ->get(route('monitask.projects.show', $project));
        $response->assertStatus(200);

        // Outsider cannot access
        $response = $this->actingAs($outsider)
                         ->get(route('monitask.projects.show', $project));
        $response->assertStatus(403);
    }

    /**
     * Test Case: TASK-016
     * Feature: Project dashboard statistics
     * Priority: Medium
     */
    public function test_project_dashboard_shows_relevant_statistics()
    {
        $user = User::factory()->create();
        
        // Create projects and related data
        $project = MonitaskProject::factory()->create(['owner_id' => $user->id]);
        MonitaskTask::factory()->create([
            'assigned_to' => $user->id,
            'due_date' => now()->subDay(),
            'status' => 'in_progress'
        ]);
        MonitaskTimeEntry::factory()->create([
            'user_id' => $user->id,
            'start_time' => now()->startOfDay()
        ]);

        $response = $this->actingAs($user)
                         ->get(route('monitask.dashboard'));

        $response->assertStatus(200);
        $response->assertViewHas(['activeProjects', 'overdueTasks', 'todayTimeEntries']);
    }

    /**
     * Test Case: TASK-017
     * Feature: Time entry date filtering
     * Priority: Medium
     */
    public function test_time_entries_can_be_filtered_by_date()
    {
        $user = User::factory()->create();
        $project = MonitaskProject::factory()->create();
        
        $todayEntry = MonitaskTimeEntry::factory()->create([
            'user_id' => $user->id,
            'project_id' => $project->id,
            'start_time' => now()
        ]);
        
        $yesterdayEntry = MonitaskTimeEntry::factory()->create([
            'user_id' => $user->id,
            'project_id' => $project->id,
            'start_time' => now()->subDay()
        ]);

        $todayEntries = MonitaskTimeEntry::forDate(now())->get();
        $this->assertTrue($todayEntries->contains($todayEntry));
        $this->assertFalse($todayEntries->contains($yesterdayEntry));
    }
}
