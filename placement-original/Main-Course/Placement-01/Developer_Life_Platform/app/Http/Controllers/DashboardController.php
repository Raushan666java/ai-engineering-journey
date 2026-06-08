<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Models\Subject;
use App\Models\LearningCategory;
use App\Models\UserProfile;

class DashboardController extends Controller
{
    public function index(): View
    {
        $user = auth()->user();

        // Always pass all dashboard variables as arrays to prevent undefined errors
        $dashboardData = [
            'user' => $user,
            'recentActivity' => $this->getRecentActivity(),
            'quickStats' => $this->getQuickStats(),
            'upcomingTasks' => $this->getUpcomingTasks(),
            'learningProgress' => [],
            'dsaStats' => [],
            'projectStats' => [],
            'communityStats' => [],
            'recentActivities' => [],
            'achievements' => [],
            'platformOverview' => [],
        ];

        return view('dashboard', $dashboardData);
    }

    public function learning(): View
    {
        $categories = LearningCategory::where('is_active', true)
            ->withCount('courses')
            ->orderBy('name')
            ->get();

        return view('dashboard.learning', compact('categories'));
    }

    public function coding(): View
    {
        // Coding practice statistics and recent problems
        $codingStats = [
            'total_problems' => 1500,
            'problems_solved' => auth()->check() ? 45 : 0,
            'current_streak' => auth()->check() ? 7 : 0,
            'rank' => auth()->check() ? 'Gold' : 'Unranked',
        ];

        return view('dashboard.coding', compact('codingStats'));
    }

    public function projects(): View
    {
        // Project management dashboard
        $projectStats = [
            'active_projects' => 3,
            'completed_projects' => 8,
            'total_commits' => 156,
            'lines_of_code' => 12450,
        ];

        return view('dashboard.projects', compact('projectStats'));
    }

        public function settings(): View
        {
            // You can pass user settings data here if needed
            return view('settings.index');
        }

    public function aiTeacher(): View
    {
        // AI Teacher dashboard
        return view('ai-teacher.index');
    }

    public function reports(): View
    {
        // Reports dashboard
        return view('reports.index');
    }

    public function monitask(): View
    {
        // Monitask dashboard
        return view('monitask.dashboard');
    }

    public function goals(): View
    {
        // Goal tracking dashboard
        $goalStats = [
            'daily_progress' => 75,
            'weekly_progress' => 60,
            'monthly_progress' => 45,
            'yearly_progress' => 30,
        ];

        return view('dashboard.goals', compact('goalStats'));
    }

    public function placement(): View
    {
        // Placement preparation dashboard
        $placementStats = [
            'interviews_attended' => 5,
            'offers_received' => 2,
            'companies_applied' => 15,
            'preparation_score' => 85,
        ];

        return view('dashboard.placement', compact('placementStats'));
    }

    private function getUserStats(): array
    {
        $user = auth()->user();
        $profile = $user->profile ?? new UserProfile();

        return [
            'coding_streak' => $profile->coding_streak ?? 0,
            'total_points' => $profile->total_points ?? 0,
            'experience_level' => $profile->experience_level ?? 'beginner',
            'courses_completed' => 5, // TODO: Calculate from enrollments
            'problems_solved' => 23, // TODO: Calculate from submissions
            'projects_completed' => 3, // TODO: Calculate from projects
            'goals_achieved' => 12, // TODO: Calculate from goals
        ];
    }

    /**
     * Get recent user activity
     */
    private function getRecentActivity()
    {
        // This would typically come from an activities table
        // For now, returning sample data
        return [
            [
                'type' => 'problem_solved',
                'description' => 'Solved "Two Sum" Problem',
                'time' => '2 hours ago',
                'icon' => 'fas fa-code',
                'color' => 'primary'
            ],
            [
                'type' => 'course_completed',
                'description' => 'Completed "Arrays & Strings" Module',
                'time' => '1 day ago',
                'icon' => 'fas fa-book',
                'color' => 'success'
            ],
            [
                'type' => 'achievement_earned',
                'description' => 'Earned "Problem Solver" Badge',
                'time' => '3 days ago',
                'icon' => 'fas fa-trophy',
                'color' => 'warning'
            ],
        ];
    }

    /**
     * Get quick stats for the user
     */
    private function getQuickStats()
    {
        $user = auth()->user();
        
        return [
            'problems_solved' => $user->problems_solved ?? 0,
            'courses_enrolled' => $user->courses_enrolled ?? 0,
            'study_streak' => $user->study_streak ?? 0,
            'points' => $user->points ?? 0,
        ];
    }

    /**
     * Get upcoming tasks/deadlines
     */
    private function getUpcomingTasks()
    {
        // This would typically come from a tasks table
        // For now, returning sample data
        return [
            [
                'title' => 'Complete JavaScript Fundamentals',
                'due_date' => '2024-01-15',
                'priority' => 'high',
                'type' => 'course'
            ],
            [
                'title' => 'Binary Tree Practice Session',
                'due_date' => '2024-01-16',
                'priority' => 'medium',
                'type' => 'practice'
            ],
        ];
    }
}
