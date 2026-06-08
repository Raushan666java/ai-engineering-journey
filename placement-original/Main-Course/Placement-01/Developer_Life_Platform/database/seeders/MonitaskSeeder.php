<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Company;
use App\Models\Project;
use App\Models\Task;
use App\Models\TimeSession;
use App\Models\TeamMember;
use App\Models\ProjectMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MonitaskSeeder extends Seeder
{
    public function run(): void
    {
        // Create sample users
        $owner = User::firstOrCreate([
            'email' => 'john@monitask.com'
        ], [
            'name' => 'John Doe',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        $developer = User::firstOrCreate([
            'email' => 'jane@monitask.com'
        ], [
            'name' => 'Jane Smith',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        $client = User::firstOrCreate([
            'email' => 'mike@client.com'
        ], [
            'name' => 'Mike Johnson',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create sample company
        $company = Company::create([
            'owner_id' => $owner->id,
            'name' => 'TechCorp Solutions',
            'slug' => 'techcorp-solutions',
            'description' => 'A leading software development company',
            'email' => 'info@techcorp.com',
            'phone' => '+1 (555) 123-4567',
            'website' => 'https://techcorp.com',
            'subscription_plan' => 'pro',
            'subscription_expires_at' => now()->addYear(),
            'address' => json_encode([
                'street' => '123 Tech Street',
                'city' => 'San Francisco',
                'state' => 'CA',
                'country' => 'USA',
                'zip' => '94102'
            ]),
            'settings' => json_encode([
                'timezone' => 'America/Los_Angeles',
                'currency' => 'USD',
                'date_format' => 'Y-m-d',
                'time_format' => 'H:i:s'
            ]),
            'is_active' => true,
        ]);

        // Create team members
        TeamMember::create([
            'user_id' => $owner->id,
            'company_id' => $company->id,
            'role' => 'owner',
            'hourly_rate' => 150.00,
            'can_view_reports' => true,
            'can_view_team_reports' => true,
            'can_manage_tasks' => true,
            'can_manage_team' => true,
            'can_export_data' => true,
            'can_edit_time' => true,
            'can_delete_time' => true,
        ]);

        TeamMember::create([
            'user_id' => $developer->id,
            'company_id' => $company->id,
            'role' => 'developer',
            'hourly_rate' => 85.00,
            'can_view_reports' => true,
            'can_manage_tasks' => true,
            'can_edit_time' => true,
        ]);

        TeamMember::create([
            'user_id' => $client->id,
            'company_id' => $company->id,
            'role' => 'client',
            'hourly_rate' => 0.00,
            'can_view_reports' => true,
            'screenshot_required' => false,
            'activity_monitoring' => false,
        ]);

        // Create sample projects
        $projects = [
            [
                'name' => 'E-commerce Platform',
                'slug' => 'ecommerce-platform',
                'description' => 'Building a modern e-commerce platform with React and Laravel',
                'color' => '#3B82F6',
                'status' => 'active',
                'budget' => 50000.00,
                'hourly_rate' => 100.00,
                'start_date' => now()->subMonths(2),
                'end_date' => now()->addMonths(4),
            ],
            [
                'name' => 'Mobile App Development',
                'slug' => 'mobile-app-development',
                'description' => 'iOS and Android app for the e-commerce platform',
                'color' => '#10B981',
                'status' => 'planning',
                'budget' => 35000.00,
                'hourly_rate' => 95.00,
                'start_date' => now()->addMonth(),
                'end_date' => now()->addMonths(6),
            ],
            [
                'name' => 'Website Redesign',
                'slug' => 'website-redesign',
                'description' => 'Complete redesign of company website',
                'color' => '#F59E0B',
                'status' => 'completed',
                'budget' => 15000.00,
                'hourly_rate' => 80.00,
                'start_date' => now()->subMonths(4),
                'end_date' => now()->subMonth(),
            ]
        ];

        foreach ($projects as $projectData) {
            $project = Project::create([
                'company_id' => $company->id,
                'client_id' => $client->id,
                'manager_id' => $owner->id,
                ...$projectData
            ]);

            // Add project members
            ProjectMember::create([
                'project_id' => $project->id,
                'user_id' => $owner->id,
                'role' => 'manager',
                'hourly_rate' => 150.00,
                'can_view_reports' => true,
                'can_manage_tasks' => true,
            ]);

            ProjectMember::create([
                'project_id' => $project->id,
                'user_id' => $developer->id,
                'role' => 'developer',
                'hourly_rate' => 85.00,
                'can_view_reports' => true,
            ]);

            ProjectMember::create([
                'project_id' => $project->id,
                'user_id' => $client->id,
                'role' => 'client',
                'can_view_reports' => true,
            ]);

            // Create sample tasks for each project
            $tasks = [
                [
                    'title' => 'Setup Development Environment',
                    'description' => 'Configure development environment and tools',
                    'priority' => 'high',
                    'status' => 'completed',
                    'estimated_hours' => 8.0,
                    'actual_hours' => 6.5,
                ],
                [
                    'title' => 'Database Design',
                    'description' => 'Design and implement database schema',
                    'priority' => 'high',
                    'status' => 'completed',
                    'estimated_hours' => 16.0,
                    'actual_hours' => 18.0,
                ],
                [
                    'title' => 'User Authentication',
                    'description' => 'Implement user registration and login functionality',
                    'priority' => 'medium',
                    'status' => 'in_progress',
                    'estimated_hours' => 12.0,
                    'actual_hours' => 8.5,
                ],
                [
                    'title' => 'API Development',
                    'description' => 'Create RESTful API endpoints',
                    'priority' => 'medium',
                    'status' => 'todo',
                    'estimated_hours' => 20.0,
                    'actual_hours' => 0.0,
                ]
            ];

            foreach ($tasks as $taskData) {
                Task::create([
                    'company_id' => $company->id,
                    'project_id' => $project->id,
                    'assigned_to' => $developer->id,
                    'created_by' => $owner->id,
                    ...$taskData
                ]);
            }
        }

        // Create sample time sessions
        $project = Project::first();
        $task = Task::first();

        $timeSessions = [
            [
                'user_id' => $developer->id,
                'started_at' => now()->subHours(8),
                'ended_at' => now()->subHours(4),
                'duration' => 14400, // 4 hours
                'active_duration' => 13680, // 3.8 hours
                'idle_duration' => 720, // 12 minutes
                'activity_level' => 85,
                'keyboard_strokes' => 2500,
                'mouse_clicks' => 1200,
                'description' => 'Working on user authentication module',
                'status' => 'completed',
                'hourly_rate' => 85.00,
            ],
            [
                'user_id' => $developer->id,
                'started_at' => now()->subHours(3),
                'ended_at' => now()->subHour(),
                'duration' => 7200, // 2 hours
                'active_duration' => 6840, // 1.9 hours
                'idle_duration' => 360, // 6 minutes
                'activity_level' => 92,
                'keyboard_strokes' => 1800,
                'mouse_clicks' => 850,
                'description' => 'Database optimization and testing',
                'status' => 'completed',
                'hourly_rate' => 85.00,
            ],
            [
                'user_id' => $owner->id,
                'started_at' => now()->subHours(2),
                'ended_at' => null,
                'duration' => 7200, // 2 hours so far
                'active_duration' => 6480, // 1.8 hours
                'idle_duration' => 720, // 12 minutes
                'activity_level' => 78,
                'keyboard_strokes' => 1200,
                'mouse_clicks' => 600,
                'description' => 'Project planning and code review',
                'status' => 'active',
                'hourly_rate' => 150.00,
            ]
        ];

        foreach ($timeSessions as $sessionData) {
            TimeSession::create([
                'company_id' => $company->id,
                'project_id' => $project->id,
                'task_id' => $task->id,
                ...$sessionData
            ]);
        }

        $this->command->info('Monitask sample data has been seeded successfully!');
        $this->command->info('Login credentials:');
        $this->command->info('Owner: john@monitask.com / password');
        $this->command->info('Developer: jane@monitask.com / password');
        $this->command->info('Client: mike@client.com / password');
    }
}
