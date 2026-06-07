<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user();
        
        // Get user statistics
        $stats = $this->getUserStats($user->id);
        
        // Get recent activities
        $recentActivities = $this->getRecentActivities($user->id);
        
        // Get upcoming goals
        $upcomingGoals = $this->getUpcomingGoals($user->id);
        
        // Get quick stats for dashboard cards
        $quickStats = [
            [
                'title' => 'Courses Completed',
                'value' => $stats['completed_courses'],
                'icon' => 'graduation-cap',
                'color' => 'primary',
                'trend' => '+12%'
            ],
            [
                'title' => 'Goals Achieved',
                'value' => $stats['completed_goals'],
                'icon' => 'bullseye',
                'color' => 'success',
                'trend' => '+8%'
            ],
            [
                'title' => 'Problems Solved',
                'value' => $stats['problems_solved'],
                'icon' => 'code',
                'color' => 'info',
                'trend' => '+15%'
            ],
            [
                'title' => 'Study Streak',
                'value' => $stats['study_streak'] . ' days',
                'icon' => 'fire',
                'color' => 'warning',
                'trend' => 'current'
            ]
        ];
        
        // Get learning progress data
        $learningProgress = $this->getLearningProgress($user->id);
        
        // Get DSA statistics
        $dsaStats = $this->getDSAStats($user->id);
        
        // Get project statistics
        $projectStats = $this->getProjectStats($user->id);
        
        // Get community statistics
        $communityStats = $this->getCommunityStats($user->id);
        
        // Get achievements
        $achievements = $this->getRecentAchievements($user->id);
        
        // Get platform overview
        $platformOverview = $this->getPlatformOverview($user->id);

        return view('dashboard', compact(
            'stats',
            'recentActivities', 
            'upcomingGoals',
            'quickStats',
            'learningProgress',
            'dsaStats',
            'projectStats',
            'communityStats',
            'achievements',
            'platformOverview'
        ));
    }

    /**
     * Get user statistics
     */
    private function getUserStats($userId)
    {
        return [
            'completed_courses' => DB::table('user_course_progress')
                ->where('user_id', $userId)
                ->where('status', 'completed')
                ->count(),
            'completed_goals' => DB::table('learning_goals')
                ->where('user_id', $userId)
                ->where('status', 'completed')
                ->count(),
            'problems_solved' => DB::table('coding_submissions')
                ->where('user_id', $userId)
                ->where('status', 'accepted')
                ->distinct('problem_id')
                ->count(),
            'study_streak' => $this->calculateStudyStreak($userId)
        ];
    }

    /**
     * Get recent activities
     */
    private function getRecentActivities($userId)
    {
        return collect([
            (object)[
                'title' => 'Completed DSA Course Module',
                'description' => 'Finished Arrays and Strings chapter',
                'icon' => 'fa-graduation-cap',
                'color' => 'success',
                'created_at' => Carbon::now()->subHours(2)
            ],
            (object)[
                'title' => 'Solved 5 Coding Problems',
                'description' => 'Array manipulation problems',
                'icon' => 'fa-code',
                'color' => 'primary',
                'created_at' => Carbon::now()->subHours(6)
            ],
            (object)[
                'title' => 'Started AI/ML Course',
                'description' => 'Introduction to Machine Learning',
                'icon' => 'fa-robot',
                'color' => 'info',
                'created_at' => Carbon::now()->subDay()
            ],
            (object)[
                'title' => 'Achieved Goal',
                'description' => 'Completed Web Development Basics',
                'icon' => 'fa-trophy',
                'color' => 'warning',
                'created_at' => Carbon::now()->subDays(2)
            ]
        ]);
    }

    /**
     * Get upcoming goals
     */
    private function getUpcomingGoals($userId)
    {
        return DB::table('learning_goals')
            ->where('user_id', $userId)
            ->where('status', 'active')
            ->where('target_date', '>=', now())
            ->orderBy('target_date')
            ->limit(5)
            ->get()
            ->map(function($goal) {
                // Calculate progress
                $totalTasks = DB::table('goal_tasks')->where('goal_id', $goal->id)->count();
                $completedTasks = DB::table('goal_tasks')
                    ->where('goal_id', $goal->id)
                    ->where('status', 'completed')
                    ->count();
                
                $goal->progress = $totalTasks > 0 ? round(($completedTasks / $totalTasks) * 100, 2) : 0;
                return $goal;
            });
    }

    /**
     * Get learning progress data
     */
    private function getLearningProgress($userId)
    {
        return [
            'weekly_hours' => [12, 15, 18, 20, 16, 22, 19],
            'completion_rate' => 85,
            'active_courses' => 3,
            'certificates_earned' => 5
        ];
    }

    /**
     * Get DSA statistics
     */
    private function getDSAStats($userId)
    {
        return [
            'problems_solved' => 45,
            'contests_participated' => 8,
            'rank' => 1250,
            'accuracy' => 78.5
        ];
    }

    /**
     * Get project statistics
     */
    private function getProjectStats($userId)
    {
        return [
            'active_projects' => 2,
            'completed_projects' => 5,
            'github_commits' => 142,
            'code_reviews' => 18
        ];
    }

    /**
     * Get community statistics
     */
    private function getCommunityStats($userId)
    {
        return [
            'forum_posts' => 23,
            'answers_given' => 15,
            'reputation' => 485,
            'badges_earned' => 12
        ];
    }

    /**
     * Get recent achievements
     */
    private function getRecentAchievements($userId)
    {
        return collect([
            (object)[
                'title' => 'Problem Solver',
                'description' => 'Solved 50+ coding problems',
                'earned_at' => Carbon::now()->subDays(3)
            ],
            (object)[
                'title' => 'Consistent Learner',
                'description' => '7-day study streak',
                'earned_at' => Carbon::now()->subWeek()
            ],
            (object)[
                'title' => 'Course Completer',
                'description' => 'Completed 5 courses',
                'earned_at' => Carbon::now()->subWeeks(2)
            ]
        ]);
    }

    /**
     * Get platform overview
     */
    private function getPlatformOverview($userId)
    {
        return [
            'total_users' => 1250,
            'active_courses' => 25,
            'problems_available' => 500,
            'success_rate' => 92.5
        ];
    }

    /**
     * Calculate study streak
     */
    private function calculateStudyStreak($userId)
    {
        // Simple implementation - in production, track daily activity
        return 7; // Default 7-day streak
    }
}
