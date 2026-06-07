<?php

namespace App\Services;

use App\Models\User;
use App\Models\LearningCourse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class AITeacherService
{
    private const CACHE_TTL = 3600;
    private const MAX_RECOMMENDATIONS = 5;
    
    public function getRecommendationsForUser(User $user): array
    {
        $cacheKey = "ai_recommendations_{$user->id}";
        
        return Cache::remember($cacheKey, self::CACHE_TTL, function () use ($user) {
            try {
                $profile = $this->buildLearningProfile($user);
                $courses = $this->getAvailableCourses();
                
                return $this->generateRecommendations($user, $profile, $courses);
            } catch (\Exception $e) {
                Log::error('AI recommendations failed', ['user_id' => $user->id, 'error' => $e->getMessage()]);
                return [];
            }
        });
    }
    
    private function buildLearningProfile(User $user): array
    {
        return [
            'level' => $user->experience_level ?? 'beginner',
            'completed_courses' => $user->enrolledCourses()->wherePivot('completed_at', '!=', null)->count(),
            'learning_style' => 'visual',
            'preferences' => []
        ];
    }
    
    private function getAvailableCourses()
    {
        return LearningCourse::where('status', '=', 'published')
            ->with(['category'])
            ->limit(20)
            ->get();
    }
    
    private function generateRecommendations(User $user, array $profile, $courses): array
    {
        $recommendations = [];
        
        foreach ($courses as $course) {
            $score = $this->calculateRelevanceScore($course, $profile);
            if ($score > 0.6) {
                $recommendations[] = [
                    'course' => $course,
                    'relevance_score' => $score,
                    'reason' => "Matches your {$profile['level']} level"
                ];
            }
        }
        
        usort($recommendations, fn($a, $b) => $b['relevance_score'] <=> $a['relevance_score']);
        
        return array_slice($recommendations, 0, self::MAX_RECOMMENDATIONS);
    }
    
    private function calculateRelevanceScore($course, array $profile): float
    {
        $score = 0.5;
        
        if ($course->level === $profile['level']) {
            $score += 0.3;
        }
        
        $score += (rand(0, 20) / 100);
        
        return min($score, 1.0);
    }
}