<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Models\LearningCourse;
use App\Models\LearningCategory;
use App\Models\LearningProgress;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\RedirectResponse;

class AITeacherController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // AI Teacher Dashboard
    public function index(): View
    {
        $user = auth()->user();

        $learningStats = [
            'total_courses' => $user->enrolledCourses()->count(),
            'completed_courses' => $user->enrolledCourses()->wherePivot('progress_percentage', 100)->count(),
            'current_streak' => $user->study_streak ?? 0,
            'total_study_hours' => $user->total_study_hours ?? 0,
            'weak_areas' => $this->identifyWeakAreas($user),
            'recommended_courses' => $this->getAIRecommendations($user),
            'learning_path' => $this->generateLearningPath($user),
            'performance_analytics' => $this->getPerformanceAnalytics($user)
        ];

        return view('ai-teacher.index', compact('learningStats'));
    }

    // AI-powered course recommendations
    public function recommendations(): View
    {
        $user = auth()->user();
        $recommendations = $this->getAIRecommendations($user);

        return view('ai-teacher.recommendations', compact('recommendations'));
    }

    // Personalized learning path
    public function learningPath(): View
    {
        $user = auth()->user();
        $learningPath = $this->generateLearningPath($user);

        return view('ai-teacher.learning-path', compact('learningPath'));
    }

    // AI Assessment system
    public function assessment(): View
    {
        $user = auth()->user();
        $assessments = [
            'skill_assessment' => $this->generateSkillAssessment($user),
            'progress_assessment' => $this->getProgressAssessment($user),
            'knowledge_gaps' => $this->identifyWeakAreas($user)
        ];

        return view('ai-teacher.assessment', compact('assessments'));
    }

    // Submit assessment answers
    public function submitAssessment(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'assessment_id' => 'required|integer',
            'answers' => 'required|array',
            'time_taken' => 'required|integer'
        ]);

        $result = $this->processAssessmentResults($validated);

        return redirect()->route('ai-teacher.assessment-result', $result['id'])
            ->with('success', 'Assessment completed successfully!');
    }

    // AI-powered study plan
    public function studyPlan(): View
    {
        $user = auth()->user();
        $studyPlan = $this->generateStudyPlan($user);

        return view('ai-teacher.study-plan', compact('studyPlan'));
    }

    // Progress analytics with AI insights
    public function analytics(): View
    {
        $user = auth()->user();
        $analytics = $this->getDetailedAnalytics($user);

        return view('ai-teacher.analytics', compact('analytics'));
    }

    // AI Tutor Chat Interface
    public function tutor(): View
    {
        $user = auth()->user();
        $chatHistory = $this->getChatHistory($user);

        return view('ai-teacher.tutor', compact('chatHistory'));
    }

    // Handle AI Tutor Chat
    public function chat(Request $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:1000',
            'context' => 'nullable|array'
        ]);

        $userMessage = [
            'role' => 'user',
            'message' => $validated['message'],
            'timestamp' => now()->toDateTimeString()
        ];

        $responseText = $this->processAIChat($validated['message'], $validated['context'] ?? []);
        $aiMessage = [
            'role' => 'ai',
            'message' => $responseText,
            'timestamp' => now()->toDateTimeString()
        ];

        // Get previous chat history and append new messages
        $chatHistory = session('chatHistory', []);
        $chatHistory[] = $userMessage;
        $chatHistory[] = $aiMessage;
        session(['chatHistory' => $chatHistory]);

        return response()->json([
            'response' => $responseText,
            'timestamp' => now()->toISOString()
        ]);
    }

    // Generate AI-powered course recommendations
    private function getAIRecommendations(User $user): array
    {
        $userSkills = $user->skills ?? [];
        $userGoals = $user->goals ?? [];
        $completedCourses = $user->enrolledCourses()->wherePivot('progress_percentage', 100)->pluck('courses.id')->toArray();

        $recommendations = LearningCourse::whereNotIn('id', $completedCourses)
            ->where('status', 'published')
            ->with(['category', 'instructor'])
            ->limit(6)
            ->get()
            ->map(function ($course) use ($userSkills, $userGoals, $user) {
                return [
                    'course' => $course,
                    'relevance_score' => $this->calculateRelevanceScore($course, $userSkills, $userGoals, $user),
                    'reason' => $this->getRecommendationReason($course, $userSkills, $userGoals, $user)
                ];
            })
            ->sortByDesc('relevance_score')
            ->values()
            ->toArray();

        return $recommendations;
    }

    // Generate personalized learning path
    private function generateLearningPath(User $user): array
    {
        $userLevel = $user->experience_level ?? 'beginner';
        $userGoals = $user->career_goals ?? 'full-stack-developer';

        $learningPath = [
            [
                'phase' => 'Foundation',
                'duration' => '2-3 months',
                'courses' => $this->getFoundationCourses($userLevel),
                'skills' => ['HTML', 'CSS', 'JavaScript Basics', 'Git'],
                'projects' => ['Personal Portfolio', 'Static Website']
            ],
            [
                'phase' => 'Frontend Development',
                'duration' => '3-4 months',
                'courses' => $this->getFrontendCourses($userLevel),
                'skills' => ['React/Vue', 'State Management', 'API Integration'],
                'projects' => ['Todo App', 'Weather App', 'E-commerce Frontend']
            ],
            [
                'phase' => 'Backend Development',
                'duration' => '3-4 months',
                'courses' => $this->getBackendCourses($userLevel),
                'skills' => ['Node.js/Laravel', 'Database Design', 'API Development'],
                'projects' => ['REST API', 'Authentication System', 'CRUD Application']
            ],
            [
                'phase' => 'Full-Stack Integration',
                'duration' => '2-3 months',
                'courses' => $this->getFullStackCourses($userLevel),
                'skills' => ['System Design', 'Testing', 'Deployment'],
                'projects' => ['Full-Stack App', 'Social Media Clone', 'Portfolio Projects']
            ]
        ];

        return $learningPath;
    }

    // Identify user's weak areas using AI analysis
    private function identifyWeakAreas(User $user): array
    {
        $weakAreas = [];

        $assessmentScores = $user->assessmentSubmissions()->with('assessment')->get();

        foreach ($assessmentScores as $submission) {
            if ($submission->score < 70) {
                $weakAreas[] = [
                    'area' => $submission->assessment->subject ?? 'General',
                    'score' => $submission->score,
                    'improvement_suggestion' => $this->getImprovementSuggestion($submission->assessment->subject, $submission->score)
                ];
            }
        }

        $codingPerformance = $user->submissions()->selectRaw('problem_category, AVG(score) as avg_score')
            ->groupBy('problem_category')
            ->having('avg_score', '<', 70)
            ->get();

        foreach ($codingPerformance as $performance) {
            $weakAreas[] = [
                'area' => $performance->problem_category,
                'score' => $performance->avg_score,
                'improvement_suggestion' => $this->getImprovementSuggestion($performance->problem_category, $performance->avg_score)
            ];
        }

        return $weakAreas;
    }

    // Get detailed performance analytics
    private function getPerformanceAnalytics(User $user): array
    {
        return [
            'learning_velocity' => $this->calculateLearningVelocity($user),
            'skill_progression' => $this->getSkillProgression($user),
            'study_patterns' => $this->analyzeStudyPatterns($user),
            'predicted_completion' => $this->predictCourseCompletion($user),
            'strengths' => $this->identifyStrengths($user),
            'recommendations' => $this->getPerformanceRecommendations($user)
        ];
    }

    // Calculate learning velocity (pages/hour, problems/hour, etc.)
    private function calculateLearningVelocity(User $user): array
    {
        $recentSessions = $user->learningSessions()->where('created_at', '>=', now()->subDays(30))->get();

        $lessonAvgDuration = $recentSessions->where('content_type', 'lesson')->avg('duration_seconds');
        $lessonsPerHour = $lessonAvgDuration ? ($lessonAvgDuration / 3600) : 0;

        $totalDuration = $recentSessions->sum('duration_seconds');
        $problemsCount = $recentSessions->where('content_type', 'exercise')->count();
        $problemsPerHour = ($totalDuration > 0) ? ($problemsCount / ($totalDuration / 3600)) : 0;

        return [
            'lessons_per_hour' => $lessonsPerHour,
            'problems_per_hour' => $problemsPerHour,
            'retention_rate' => $this->calculateRetentionRate($user),
            'efficiency_score' => $this->calculateEfficiencyScore($user)
        ];
    }

    // Generate AI-powered study plan
    private function generateStudyPlan(User $user): array
    {
        $availableHours = $user->preferred_study_hours ?? 2;
        $learningGoals = $user->goals()->where('category', 'learning')->where('status', 'in_progress')->get();

        $studyPlan = [
            'daily_schedule' => $this->generateDailySchedule($user, $availableHours),
            'weekly_goals' => $this->generateWeeklyGoals($learningGoals),
            'monthly_milestones' => $this->generateMonthlyMilestones($user),
            'adaptive_adjustments' => $this->getAdaptiveAdjustments($user)
        ];

        return $studyPlan;
    }

    // Helper methods for AI calculations
    private function calculateRelevanceScore($course, $userSkills, $userGoals, $user): float
    {
        $score = 50;
        if (in_array($course->category->name, $userGoals)) {
            $score += 30;
        }
        if ($course->level === $user->experience_level) {
            $score += 20;
        }
        return min(100, $score);
    }

    private function getRecommendationReason($course, $userSkills, $userGoals, $user): string
    {
        $reasons = [];
        if (in_array($course->category->name, $userGoals)) {
            $reasons[] = "Aligns with your career goals";
        }
        if ($course->level === $user->experience_level) {
            $reasons[] = "Matches your current skill level";
        }
        if ($course->rating >= 4.5) {
            $reasons[] = "Highly rated by learners";
        }
        return implode(', ', $reasons) ?: "Recommended based on your learning pattern";
    }

    private function getImprovementSuggestion($subject, $score): string
    {
        if ($score < 50) {
            return "Focus on fundamentals. Consider reviewing basic concepts and practicing more exercises.";
        } elseif ($score < 70) {
            return "Good foundation but needs improvement. Practice intermediate problems and review weak topics.";
        } else {
            return "Minor improvements needed. Focus on advanced concepts and edge cases.";
        }
    }

    // Stubs for additional helper methods
    private function getFoundationCourses($level): array
    {
        return [];
    }
    private function getFrontendCourses($level): array
    {
        return [];
    }
    private function getBackendCourses($level): array
    {
        return [];
    }
    private function getFullStackCourses($level): array
    {
        return [];
    }
    private function getSkillProgression($user): array
    {
        return [];
    }
    private function analyzeStudyPatterns($user): array
    {
        return [];
    }
    private function predictCourseCompletion($user): array
    {
        return [];
    }
    private function identifyStrengths($user): array
    {
        return [];
    }
    private function getPerformanceRecommendations($user): array
    {
        return [];
    }
    private function calculateRetentionRate($user): float
    {
        return 85.0;
    }
    private function calculateEfficiencyScore($user): float
    {
        return 78.5;
    }
    private function generateDailySchedule($user, $hours): array
    {
        return [];
    }
    private function generateWeeklyGoals($goals): array
    {
        return [];
    }
    private function generateMonthlyMilestones($user): array
    {
        return [];
    }
    private function getAdaptiveAdjustments($user): array
    {
        return [];
    }
    private function getDetailedAnalytics($user): array
    {
        return [];
    }
    private function getChatHistory($user): array
    {
        return [];
    }




    private function processAIChat($message, $context = [])
    {
        $apiToken = env('HUGGING_FACE_API_KEY');
        $model = 'openchat/openchat-3.5-0106'; // Public model

        $response = Http::withHeaders([
            'Authorization' => "Bearer $apiToken",
            'Accept' => 'application/json',
        ])->post("https://api-inference.huggingface.co/models/$model", [
            'inputs' => $message,
            'parameters' => [
                'max_new_tokens' => 128,
                'temperature' => 0.7
            ]
        ]);

        if ($response->successful()) {
            $result = $response->json();
            return $result[0]['generated_text'] ?? 'No response from AI.';
        } else {
            \Log::error('Hugging Face API error', [
                'status' => $response->status(),
                'body' => $response->body()
            ]);
            return 'AI model is not available. Status: ' . $response->status();
        }
    }
    // private function processAIChat($message, $context): string { return "AI response to: " . $message; }
    private function generateSkillAssessment($user): array
    {
        return [];
    }
    private function getProgressAssessment($user): array
    {
        return [];
    }
    private function processAssessmentResults($data): array
    {
        return ['id' => 1];
    }
}
