<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class GoalController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the goals dashboard
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        
        // Get user's goals with progress
        $goals = DB::table('learning_goals')
            ->where('user_id', $user->id)
            ->select('*')
            ->orderBy('created_at', 'desc')
            ->get();

        // Calculate progress for each goal
        foreach ($goals as $goal) {
            $totalTasks = DB::table('goal_tasks')
                ->where('goal_id', $goal->id)
                ->count();
            
            $completedTasks = DB::table('goal_tasks')
                ->where('goal_id', $goal->id)
                ->where('status', 'completed')
                ->count();

            $goal->progress = $totalTasks > 0 ? round(($completedTasks / $totalTasks) * 100, 2) : 0;
            $goal->total_tasks = $totalTasks;
            $goal->completed_tasks = $completedTasks;
        }

        // Get recent achievements
        $achievements = DB::table('user_achievements')
            ->where('user_id', $user->id)
            ->orderBy('earned_at', 'desc')
            ->limit(5)
            ->get();

        // Get learning statistics
        $stats = [
            'total_goals' => $goals->count(),
            'active_goals' => $goals->where('status', 'active')->count(),
            'completed_goals' => $goals->where('status', 'completed')->count(),
            'this_week_progress' => $this->getWeeklyProgress($user->id)
        ];

        return view('goals.dashboard', compact('goals', 'achievements', 'stats'));
    }

    /**
     * Show the form for creating a new goal
     */
    public function create()
    {
        // Get available goal templates
        $templates = DB::table('goal_templates')
            ->where('is_active', true)
            ->orderBy('category')
            ->get();

        // Get learning categories for goal categorization
        $categories = DB::table('learning_categories')
            ->where('is_active', true)
            ->orderBy('name')
            ->get();

        return view('goals.create', compact('templates', 'categories'));
    }

    /**
     * Store a newly created goal
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'category_id' => 'required|integer|exists:learning_categories,id',
            'target_date' => 'required|date|after:today',
            'priority' => 'required|in:low,medium,high,critical',
            'type' => 'required|in:learning,skill,project,career,certification',
            'milestones' => 'array',
            'milestones.*.title' => 'required|string|max:255',
            'milestones.*.description' => 'nullable|string|max:500',
            'milestones.*.target_date' => 'required|date',
        ]);

        $user = Auth::user();

        try {
            DB::beginTransaction();

            // Create the main goal
            $goalId = DB::table('learning_goals')->insertGetId([
                'user_id' => $user->id,
                'title' => $request->title,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'target_date' => $request->target_date,
                'priority' => $request->priority,
                'type' => $request->type,
                'status' => 'active',
                'progress' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ]);

            // Create milestones/tasks
            if ($request->has('milestones')) {
                foreach ($request->milestones as $milestone) {
                    DB::table('goal_tasks')->insert([
                        'goal_id' => $goalId,
                        'title' => $milestone['title'],
                        'description' => $milestone['description'] ?? '',
                        'target_date' => $milestone['target_date'],
                        'status' => 'pending',
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);
                }
            }

            DB::commit();

            return redirect()->route('goals.show', $goalId)
                ->with('success', 'Goal created successfully!');

        } catch (\Exception $e) {
            DB::rollback();
            return back()->withInput()
                ->with('error', 'Failed to create goal. Please try again.');
        }
    }

    /**
     * Display the specified goal
     */
    public function show($id)
    {
        $user = Auth::user();
        
        $goal = DB::table('learning_goals')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if (!$goal) {
            abort(404, 'Goal not found');
        }

        // Get goal tasks/milestones
        $tasks = DB::table('goal_tasks')
            ->where('goal_id', $id)
            ->orderBy('target_date')
            ->get();

        // Get progress history
        $progressHistory = DB::table('goal_progress_history')
            ->where('goal_id', $id)
            ->orderBy('recorded_at')
            ->get();

        // Calculate current progress
        $totalTasks = $tasks->count();
        $completedTasks = $tasks->where('status', 'completed')->count();
        $progress = $totalTasks > 0 ? round(($completedTasks / $totalTasks) * 100, 2) : 0;

        // Get related learning resources
        $resources = DB::table('learning_courses')
            ->where('category_id', $goal->category_id)
            ->where('is_active', true)
            ->limit(5)
            ->get();

        return view('goals.show', compact('goal', 'tasks', 'progressHistory', 'progress', 'resources'));
    }

    /**
     * Show the form for editing the specified goal
     */
    public function edit($id)
    {
        $user = Auth::user();
        
        $goal = DB::table('learning_goals')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if (!$goal) {
            abort(404, 'Goal not found');
        }

        // Get learning categories
        $categories = DB::table('learning_categories')
            ->where('is_active', true)
            ->orderBy('name')
            ->get();

        // Get goal tasks
        $tasks = DB::table('goal_tasks')
            ->where('goal_id', $id)
            ->orderBy('target_date')
            ->get();

        return view('goals.edit', compact('goal', 'categories', 'tasks'));
    }

    /**
     * Update the specified goal
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'category_id' => 'required|integer|exists:learning_categories,id',
            'target_date' => 'required|date',
            'priority' => 'required|in:low,medium,high,critical',
            'status' => 'required|in:active,completed,paused,cancelled'
        ]);

        $user = Auth::user();

        $updated = DB::table('learning_goals')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->update([
                'title' => $request->title,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'target_date' => $request->target_date,
                'priority' => $request->priority,
                'status' => $request->status,
                'updated_at' => now()
            ]);

        if (!$updated) {
            abort(404, 'Goal not found');
        }

        return redirect()->route('goals.show', $id)
            ->with('success', 'Goal updated successfully!');
    }

    /**
     * Remove the specified goal
     */
    public function destroy($id)
    {
        $user = Auth::user();

        try {
            DB::beginTransaction();

            // Delete related tasks
            DB::table('goal_tasks')->where('goal_id', $id)->delete();
            
            // Delete progress history
            DB::table('goal_progress_history')->where('goal_id', $id)->delete();
            
            // Delete the goal
            $deleted = DB::table('learning_goals')
                ->where('id', $id)
                ->where('user_id', $user->id)
                ->delete();

            if (!$deleted) {
                throw new \Exception('Goal not found');
            }

            DB::commit();

            return redirect()->route('goals.index')
                ->with('success', 'Goal deleted successfully!');

        } catch (\Exception $e) {
            DB::rollback();
            return back()->with('error', 'Failed to delete goal. Please try again.');
        }
    }

    /**
     * Update task status
     */
    public function updateTask(Request $request, $goalId, $taskId)
    {
        $request->validate([
            'status' => 'required|in:pending,in_progress,completed,cancelled'
        ]);

        $user = Auth::user();

        // Verify goal ownership
        $goal = DB::table('learning_goals')
            ->where('id', $goalId)
            ->where('user_id', $user->id)
            ->first();

        if (!$goal) {
            abort(404, 'Goal not found');
        }

        // Update task status
        DB::table('goal_tasks')
            ->where('id', $taskId)
            ->where('goal_id', $goalId)
            ->update([
                'status' => $request->status,
                'completed_at' => $request->status === 'completed' ? now() : null,
                'updated_at' => now()
            ]);

        // Recalculate goal progress
        $this->updateGoalProgress($goalId);

        return response()->json([
            'success' => true,
            'message' => 'Task status updated successfully!'
        ]);
    }

    /**
     * Get AI recommendations for goals
     */
    public function getRecommendations(Request $request)
    {
        $user = Auth::user();
        
        // Get user's learning history and preferences
        $userProfile = $this->getUserLearningProfile($user->id);
        
        // Generate AI recommendations
        $recommendations = $this->generateGoalRecommendations($userProfile);

        return response()->json([
            'recommendations' => $recommendations
        ]);
    }

    /**
     * Get goal analytics
     */
    public function analytics(Request $request)
    {
        $user = Auth::user();
        
        // Get time period from request (default: last 30 days)
        $days = $request->get('days', 30);
        $startDate = Carbon::now()->subDays($days);

        // Goal completion rates
        $goalStats = DB::table('learning_goals')
            ->where('user_id', $user->id)
            ->where('created_at', '>=', $startDate)
            ->selectRaw('
                COUNT(*) as total_goals,
                SUM(CASE WHEN status = "completed" THEN 1 ELSE 0 END) as completed_goals,
                SUM(CASE WHEN status = "active" THEN 1 ELSE 0 END) as active_goals,
                AVG(progress) as avg_progress
            ')
            ->first();

        // Progress over time
        $progressData = DB::table('goal_progress_history')
            ->join('learning_goals', 'goal_progress_history.goal_id', '=', 'learning_goals.id')
            ->where('learning_goals.user_id', $user->id)
            ->where('goal_progress_history.recorded_at', '>=', $startDate)
            ->selectRaw('DATE(recorded_at) as date, AVG(progress_value) as avg_progress')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Category performance
        $categoryStats = DB::table('learning_goals')
            ->join('learning_categories', 'learning_goals.category_id', '=', 'learning_categories.id')
            ->where('learning_goals.user_id', $user->id)
            ->where('learning_goals.created_at', '>=', $startDate)
            ->selectRaw('
                learning_categories.name as category,
                COUNT(*) as total_goals,
                AVG(progress) as avg_progress,
                SUM(CASE WHEN status = "completed" THEN 1 ELSE 0 END) as completed_goals
            ')
            ->groupBy('learning_categories.id', 'learning_categories.name')
            ->get();

        return response()->json([
            'goal_stats' => $goalStats,
            'progress_data' => $progressData,
            'category_stats' => $categoryStats
        ]);
    }

    /**
     * Private helper methods
     */
    private function getWeeklyProgress($userId)
    {
        $weekStart = Carbon::now()->startOfWeek();
        
        return DB::table('goal_progress_history')
            ->join('learning_goals', 'goal_progress_history.goal_id', '=', 'learning_goals.id')
            ->where('learning_goals.user_id', $userId)
            ->where('goal_progress_history.recorded_at', '>=', $weekStart)
            ->avg('progress_value') ?? 0;
    }

    private function updateGoalProgress($goalId)
    {
        $totalTasks = DB::table('goal_tasks')->where('goal_id', $goalId)->count();
        $completedTasks = DB::table('goal_tasks')
            ->where('goal_id', $goalId)
            ->where('status', 'completed')
            ->count();

        $progress = $totalTasks > 0 ? round(($completedTasks / $totalTasks) * 100, 2) : 0;

        // Update goal progress
        DB::table('learning_goals')
            ->where('id', $goalId)
            ->update([
                'progress' => $progress,
                'updated_at' => now()
            ]);

        // Record progress history
        DB::table('goal_progress_history')->insert([
            'goal_id' => $goalId,
            'progress_value' => $progress,
            'recorded_at' => now()
        ]);

        // Check if goal is completed
        if ($progress >= 100) {
            DB::table('learning_goals')
                ->where('id', $goalId)
                ->update([
                    'status' => 'completed',
                    'completed_at' => now()
                ]);
        }
    }

    private function getUserLearningProfile($userId)
    {
        return [
            'completed_courses' => DB::table('user_course_progress')
                ->where('user_id', $userId)
                ->where('status', 'completed')
                ->count(),
            'preferred_categories' => DB::table('learning_goals')
                ->join('learning_categories', 'learning_goals.category_id', '=', 'learning_categories.id')
                ->where('learning_goals.user_id', $userId)
                ->groupBy('learning_categories.id', 'learning_categories.name')
                ->selectRaw('learning_categories.name, COUNT(*) as goal_count')
                ->orderBy('goal_count', 'desc')
                ->limit(3)
                ->get(),
            'avg_completion_time' => DB::table('learning_goals')
                ->where('user_id', $userId)
                ->where('status', 'completed')
                ->whereNotNull('completed_at')
                ->selectRaw('AVG(DATEDIFF(completed_at, created_at)) as avg_days')
                ->value('avg_days')
        ];
    }

    private function generateGoalRecommendations($userProfile)
    {
        // This would typically use AI/ML algorithms
        // For now, return basic recommendations based on user profile
        return [
            [
                'title' => 'Master Advanced Data Structures',
                'description' => 'Based on your progress in algorithms, advance to complex data structures',
                'category' => 'DSA',
                'priority' => 'high',
                'estimated_duration' => '6 weeks'
            ],
            [
                'title' => 'Complete Full-Stack Project',
                'description' => 'Apply your web development skills in a comprehensive project',
                'category' => 'Web Development',
                'priority' => 'medium',
                'estimated_duration' => '8 weeks'
            ],
            [
                'title' => 'Prepare for Technical Interviews',
                'description' => 'Focus on coding interview preparation',
                'category' => 'Interview Prep',
                'priority' => 'high',
                'estimated_duration' => '4 weeks'
            ]
        ];
    }
}
