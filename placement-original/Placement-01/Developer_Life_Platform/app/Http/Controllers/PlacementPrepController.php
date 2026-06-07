<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PlacementPrepController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the placement preparation dashboard
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        
        // Get user's placement preparation progress
        $progress = $this->getUserPlacementProgress($user->id);
        
        // Get upcoming interviews
        $upcomingInterviews = DB::table('user_interviews')
            ->where('user_id', $user->id)
            ->where('interview_date', '>=', now())
            ->where('status', '!=', 'cancelled')
            ->orderBy('interview_date')
            ->limit(5)
            ->get();

        // Get recent practice sessions
        $recentPractice = DB::table('coding_practice_sessions')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        // Get performance analytics
        $analytics = $this->getPerformanceAnalytics($user->id);

        // Get recommended next steps
        $recommendations = $this->getPersonalizedRecommendations($user->id);

        return view('placement-prep.dashboard', compact(
            'progress', 
            'upcomingInterviews', 
            'recentPractice', 
            'analytics',
            'recommendations'
        ));
    }

    /**
     * Display coding practice section
     */
    public function codingPractice(Request $request)
    {
        $user = Auth::user();
        
        // Get filter parameters
        $difficulty = $request->get('difficulty');
        $category = $request->get('category');
        $company = $request->get('company');

        // Build query for coding problems
        $query = DB::table('coding_problems')
            ->where('is_active', true);

        if ($difficulty) {
            $query->where('difficulty', $difficulty);
        }

        if ($category) {
            $query->where('category', $category);
        }

        if ($company) {
            $query->whereExists(function($subquery) use ($company) {
                $subquery->select(DB::raw(1))
                    ->from('problem_companies')
                    ->whereColumn('problem_companies.problem_id', 'coding_problems.id')
                    ->where('problem_companies.company_name', $company);
            });
        }

        $problems = $query->orderBy('difficulty_order')
            ->orderBy('acceptance_rate', 'desc')
            ->paginate(20);

        // Get user's submission history for these problems
        $solvedProblems = DB::table('coding_submissions')
            ->where('user_id', $user->id)
            ->where('status', 'accepted')
            ->pluck('problem_id')
            ->toArray();

        // Get practice statistics
        $stats = [
            'total_solved' => count($solvedProblems),
            'easy_solved' => DB::table('coding_submissions')
                ->join('coding_problems', 'coding_submissions.problem_id', '=', 'coding_problems.id')
                ->where('coding_submissions.user_id', $user->id)
                ->where('coding_submissions.status', 'accepted')
                ->where('coding_problems.difficulty', 'easy')
                ->count(),
            'medium_solved' => DB::table('coding_submissions')
                ->join('coding_problems', 'coding_submissions.problem_id', '=', 'coding_problems.id')
                ->where('coding_submissions.user_id', $user->id)
                ->where('coding_submissions.status', 'accepted')
                ->where('coding_problems.difficulty', 'medium')
                ->count(),
            'hard_solved' => DB::table('coding_submissions')
                ->join('coding_problems', 'coding_submissions.problem_id', '=', 'coding_problems.id')
                ->where('coding_submissions.user_id', $user->id)
                ->where('coding_submissions.status', 'accepted')
                ->where('coding_problems.difficulty', 'hard')
                ->count(),
        ];

        // Get available filters
        $filters = [
            'difficulties' => ['easy', 'medium', 'hard'],
            'categories' => DB::table('coding_problems')
                ->select('category')
                ->distinct()
                ->orderBy('category')
                ->pluck('category'),
            'companies' => DB::table('problem_companies')
                ->select('company_name')
                ->distinct()
                ->orderBy('company_name')
                ->pluck('company_name')
        ];

        return view('placement-prep.coding-practice', compact(
            'problems', 
            'solvedProblems', 
            'stats', 
            'filters'
        ));
    }

    /**
     * Display specific coding problem
     */
    public function showProblem($id)
    {
        $user = Auth::user();
        
        $problem = DB::table('coding_problems')
            ->where('id', $id)
            ->where('is_active', true)
            ->first();

        if (!$problem) {
            abort(404, 'Problem not found');
        }

        // Get problem examples and constraints
        $examples = DB::table('problem_examples')
            ->where('problem_id', $id)
            ->orderBy('example_number')
            ->get();

        // Get user's previous submissions
        $submissions = DB::table('coding_submissions')
            ->where('user_id', $user->id)
            ->where('problem_id', $id)
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        // Get related problems
        $relatedProblems = DB::table('coding_problems')
            ->where('category', $problem->category)
            ->where('id', '!=', $id)
            ->where('is_active', true)
            ->limit(5)
            ->get();

        // Check if user has solved this problem
        $isSolved = DB::table('coding_submissions')
            ->where('user_id', $user->id)
            ->where('problem_id', $id)
            ->where('status', 'accepted')
            ->exists();

        return view('placement-prep.problem', compact(
            'problem', 
            'examples', 
            'submissions', 
            'relatedProblems', 
            'isSolved'
        ));
    }

    /**
     * Submit solution for coding problem
     */
    public function submitSolution(Request $request, $problemId)
    {
        $request->validate([
            'code' => 'required|string',
            'language' => 'required|string|in:python,java,cpp,javascript,c'
        ]);

        $user = Auth::user();

        // Verify problem exists
        $problem = DB::table('coding_problems')
            ->where('id', $problemId)
            ->where('is_active', true)
            ->first();

        if (!$problem) {
            return response()->json(['error' => 'Problem not found'], 404);
        }

        try {
            // Create submission record
            $submissionId = DB::table('coding_submissions')->insertGetId([
                'user_id' => $user->id,
                'problem_id' => $problemId,
                'code' => $request->code,
                'language' => $request->language,
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now()
            ]);

            // Simulate code execution (in real implementation, this would use a code execution service)
            $result = $this->executeCode($request->code, $request->language, $problem);

            // Update submission with result
            DB::table('coding_submissions')
                ->where('id', $submissionId)
                ->update([
                    'status' => $result['status'],
                    'execution_time' => $result['execution_time'],
                    'memory_used' => $result['memory_used'],
                    'test_cases_passed' => $result['test_cases_passed'],
                    'total_test_cases' => $result['total_test_cases'],
                    'error_message' => $result['error_message'] ?? null,
                    'updated_at' => now()
                ]);

            // Update user statistics if accepted
            if ($result['status'] === 'accepted') {
                $this->updateUserStats($user->id, $problemId, $problem->difficulty);
            }

            return response()->json([
                'success' => true,
                'submission_id' => $submissionId,
                'result' => $result
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Submission failed. Please try again.',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display interview preparation section
     */
    public function interviewPrep(Request $request)
    {
        $user = Auth::user();
        
        // Get interview topics
        $topics = DB::table('interview_topics')
            ->where('is_active', true)
            ->orderBy('category')
            ->orderBy('importance', 'desc')
            ->get();

        // Get user's topic progress
        $topicProgress = DB::table('user_topic_progress')
            ->where('user_id', $user->id)
            ->pluck('progress', 'topic_id');

        // Get recent mock interviews
        $mockInterviews = DB::table('mock_interviews')
            ->where('user_id', $user->id)
            ->orderBy('conducted_at', 'desc')
            ->limit(5)
            ->get();

        // Get preparation statistics
        $stats = [
            'topics_completed' => $topicProgress->filter(function($progress) {
                return $progress >= 100;
            })->count(),
            'total_topics' => $topics->count(),
            'mock_interviews_taken' => $mockInterviews->count(),
            'avg_interview_score' => $mockInterviews->avg('overall_score') ?? 0
        ];

        return view('placement-prep.interview-prep', compact(
            'topics', 
            'topicProgress', 
            'mockInterviews', 
            'stats'
        ));
    }

    /**
     * Start mock interview
     */
    public function startMockInterview(Request $request)
    {
        $request->validate([
            'type' => 'required|in:technical,behavioral,system_design,hr',
            'difficulty' => 'required|in:beginner,intermediate,advanced',
            'duration' => 'required|integer|min:15|max:120'
        ]);

        $user = Auth::user();

        // Create mock interview session
        $interviewId = DB::table('mock_interviews')->insertGetId([
            'user_id' => $user->id,
            'type' => $request->type,
            'difficulty' => $request->difficulty,
            'duration_minutes' => $request->duration,
            'status' => 'in_progress',
            'started_at' => now(),
            'created_at' => now(),
            'updated_at' => now()
        ]);

        // Get interview questions based on type and difficulty
        $questions = $this->generateInterviewQuestions($request->type, $request->difficulty);

        // Store questions for this interview
        foreach ($questions as $index => $question) {
            DB::table('mock_interview_questions')->insert([
                'mock_interview_id' => $interviewId,
                'question' => $question['question'],
                'expected_answer' => $question['expected_answer'],
                'category' => $question['category'],
                'question_order' => $index + 1,
                'created_at' => now()
            ]);
        }

        return response()->json([
            'interview_id' => $interviewId,
            'questions' => $questions
        ]);
    }

    /**
     * Submit mock interview answers
     */
    public function submitMockInterview(Request $request, $interviewId)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*.question_id' => 'required|integer',
            'answers.*.answer' => 'required|string'
        ]);

        $user = Auth::user();

        // Verify interview ownership
        $interview = DB::table('mock_interviews')
            ->where('id', $interviewId)
            ->where('user_id', $user->id)
            ->first();

        if (!$interview) {
            return response()->json(['error' => 'Interview not found'], 404);
        }

        try {
            DB::beginTransaction();

            $totalScore = 0;
            $questionCount = count($request->answers);

            // Process each answer
            foreach ($request->answers as $answerData) {
                $score = $this->evaluateAnswer($answerData['answer'], $answerData['question_id']);
                
                DB::table('mock_interview_answers')->insert([
                    'mock_interview_id' => $interviewId,
                    'question_id' => $answerData['question_id'],
                    'user_answer' => $answerData['answer'],
                    'score' => $score,
                    'created_at' => now()
                ]);

                $totalScore += $score;
            }

            $overallScore = $questionCount > 0 ? round($totalScore / $questionCount, 2) : 0;

            // Update interview with results
            DB::table('mock_interviews')
                ->where('id', $interviewId)
                ->update([
                    'status' => 'completed',
                    'overall_score' => $overallScore,
                    'completed_at' => now(),
                    'updated_at' => now()
                ]);

            DB::commit();

            // Generate feedback
            $feedback = $this->generateInterviewFeedback($interviewId, $overallScore);

            return response()->json([
                'overall_score' => $overallScore,
                'feedback' => $feedback
            ]);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => 'Failed to submit interview'], 500);
        }
    }

    /**
     * Get company-specific preparation
     */
    public function companyPrep(Request $request, $company = null)
    {
        $user = Auth::user();
        
        // Get all companies if no specific company
        if (!$company) {
            $companies = DB::table('companies')
                ->where('is_hiring', true)
                ->orderBy('name')
                ->get();

            return view('placement-prep.companies', compact('companies'));
        }

        // Get specific company information
        $companyInfo = DB::table('companies')
            ->where('slug', $company)
            ->first();

        if (!$companyInfo) {
            abort(404, 'Company not found');
        }

        // Get company-specific questions
        $questions = DB::table('company_questions')
            ->where('company_id', $companyInfo->id)
            ->orderBy('frequency', 'desc')
            ->get();

        // Get company interview process
        $interviewProcess = DB::table('company_interview_process')
            ->where('company_id', $companyInfo->id)
            ->orderBy('round_number')
            ->get();

        // Get user's preparation progress for this company
        $progress = DB::table('user_company_prep')
            ->where('user_id', $user->id)
            ->where('company_id', $companyInfo->id)
            ->first();

        return view('placement-prep.company-specific', compact(
            'companyInfo', 
            'questions', 
            'interviewProcess', 
            'progress'
        ));
    }

    /**
     * Get placement statistics and analytics
     */
    public function analytics(Request $request)
    {
        $user = Auth::user();
        
        // Get time period
        $days = $request->get('days', 30);
        $startDate = Carbon::now()->subDays($days);

        // Coding practice analytics
        $codingStats = DB::table('coding_submissions')
            ->where('user_id', $user->id)
            ->where('created_at', '>=', $startDate)
            ->selectRaw('
                COUNT(*) as total_submissions,
                SUM(CASE WHEN status = "accepted" THEN 1 ELSE 0 END) as accepted_submissions,
                AVG(execution_time) as avg_execution_time
            ')
            ->first();

        // Problem difficulty breakdown
        $difficultyStats = DB::table('coding_submissions')
            ->join('coding_problems', 'coding_submissions.problem_id', '=', 'coding_problems.id')
            ->where('coding_submissions.user_id', $user->id)
            ->where('coding_submissions.status', 'accepted')
            ->where('coding_submissions.created_at', '>=', $startDate)
            ->groupBy('coding_problems.difficulty')
            ->selectRaw('coding_problems.difficulty, COUNT(*) as count')
            ->get();

        // Interview preparation progress
        $interviewStats = DB::table('mock_interviews')
            ->where('user_id', $user->id)
            ->where('created_at', '>=', $startDate)
            ->selectRaw('
                COUNT(*) as total_interviews,
                AVG(overall_score) as avg_score
            ')
            ->first();

        // Progress over time
        $progressData = DB::table('user_daily_progress')
            ->where('user_id', $user->id)
            ->where('date', '>=', $startDate)
            ->orderBy('date')
            ->get();

        return response()->json([
            'coding_stats' => $codingStats,
            'difficulty_stats' => $difficultyStats,
            'interview_stats' => $interviewStats,
            'progress_data' => $progressData
        ]);
    }

    /**
     * Private helper methods
     */
    private function getUserPlacementProgress($userId)
    {
        return [
            'coding_problems_solved' => DB::table('coding_submissions')
                ->where('user_id', $userId)
                ->where('status', 'accepted')
                ->distinct('problem_id')
                ->count(),
            'interview_topics_completed' => DB::table('user_topic_progress')
                ->where('user_id', $userId)
                ->where('progress', '>=', 100)
                ->count(),
            'mock_interviews_taken' => DB::table('mock_interviews')
                ->where('user_id', $userId)
                ->where('status', 'completed')
                ->count(),
            'companies_prepared' => DB::table('user_company_prep')
                ->where('user_id', $userId)
                ->where('preparation_score', '>=', 70)
                ->count()
        ];
    }

    private function getPerformanceAnalytics($userId)
    {
        $last30Days = Carbon::now()->subDays(30);
        
        return [
            'problem_solving_trend' => DB::table('coding_submissions')
                ->where('user_id', $userId)
                ->where('created_at', '>=', $last30Days)
                ->where('status', 'accepted')
                ->selectRaw('DATE(created_at) as date, COUNT(*) as problems_solved')
                ->groupBy('date')
                ->orderBy('date')
                ->get(),
            'accuracy_rate' => DB::table('coding_submissions')
                ->where('user_id', $userId)
                ->where('created_at', '>=', $last30Days)
                ->selectRaw('
                    COUNT(*) as total_submissions,
                    SUM(CASE WHEN status = "accepted" THEN 1 ELSE 0 END) as accepted_submissions
                ')
                ->first(),
            'interview_performance' => DB::table('mock_interviews')
                ->where('user_id', $userId)
                ->where('created_at', '>=', $last30Days)
                ->avg('overall_score') ?? 0
        ];
    }

    private function getPersonalizedRecommendations($userId)
    {
        // This would use AI/ML algorithms in production
        return [
            [
                'type' => 'coding_practice',
                'title' => 'Focus on Dynamic Programming',
                'description' => 'You have a low success rate in DP problems. Practice more!',
                'priority' => 'high'
            ],
            [
                'type' => 'interview_prep',
                'title' => 'Practice System Design',
                'description' => 'Take mock system design interviews to improve',
                'priority' => 'medium'
            ],
            [
                'type' => 'company_prep',
                'title' => 'Google Interview Preparation',
                'description' => 'Focus on Google-specific questions and culture',
                'priority' => 'high'
            ]
        ];
    }

    private function executeCode($code, $language, $problem)
    {
        // Simulate code execution - in production, use Docker containers
        return [
            'status' => 'accepted',
            'execution_time' => rand(50, 200),
            'memory_used' => rand(10, 50),
            'test_cases_passed' => 10,
            'total_test_cases' => 10
        ];
    }

    private function updateUserStats($userId, $problemId, $difficulty)
    {
        // Update daily progress
        DB::table('user_daily_progress')->updateOrInsert(
            [
                'user_id' => $userId,
                'date' => Carbon::now()->toDateString()
            ],
            [
                'problems_solved' => DB::raw('problems_solved + 1'),
                'updated_at' => now()
            ]
        );

        // Update overall statistics
        DB::table('user_placement_stats')->updateOrInsert(
            ['user_id' => $userId],
            [
                'total_problems_solved' => DB::raw('total_problems_solved + 1'),
                $difficulty . '_problems_solved' => DB::raw($difficulty . '_problems_solved + 1'),
                'updated_at' => now()
            ]
        );
    }

    private function generateInterviewQuestions($type, $difficulty)
    {
        // Sample questions - in production, fetch from database
        return [
            [
                'question' => 'Tell me about yourself',
                'expected_answer' => 'Professional background and relevant experience',
                'category' => 'behavioral'
            ],
            [
                'question' => 'What are your strengths and weaknesses?',
                'expected_answer' => 'Honest self-assessment with examples',
                'category' => 'behavioral'
            ],
            [
                'question' => 'Why do you want to work here?',
                'expected_answer' => 'Company research and genuine interest',
                'category' => 'behavioral'
            ]
        ];
    }

    private function evaluateAnswer($answer, $questionId)
    {
        // Simple scoring - in production, use NLP/AI for evaluation
        $wordCount = str_word_count($answer);
        
        if ($wordCount < 20) return rand(40, 60);
        if ($wordCount < 50) return rand(60, 80);
        return rand(80, 95);
    }

    private function generateInterviewFeedback($interviewId, $score)
    {
        if ($score >= 80) {
            return 'Excellent performance! You demonstrated strong communication skills and provided detailed answers.';
        } elseif ($score >= 60) {
            return 'Good job! Consider providing more specific examples and details in your answers.';
        } else {
            return 'Need improvement. Focus on structuring your answers better and providing concrete examples.';
        }
    }
}
