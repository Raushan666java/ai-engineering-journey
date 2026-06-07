<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'provider',
        'provider_id',
        'provider_token',
        'provider_refresh_token',
        'avatar',
        'phone',
        'date_of_birth',
        'gender',
        'location',
        'timezone',
        'job_title',
        'company',
        'website',
        'github_username',
        'linkedin_url',
        'twitter_handle',
        'experience_level',
        'skills',
        'interests',
        'goals',
        'role',
        'is_active',
        'email_notifications',
        'push_notifications',
        'notification_preferences',
        'profile_public',
        'show_email',
        'show_progress',
        'last_active_at',
        'last_login_at',
        'last_login_ip',
        'last_login_device',
        'two_factor_enabled',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'subscription_type',
        'subscription_expires_at',
        'billing_address',
        'total_login_count',
        'problems_solved',
        'courses_completed',
        'projects_completed',
        'total_study_hours',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'date_of_birth' => 'date',
            'skills' => 'array',
            'interests' => 'array',
            'goals' => 'array',
            'notification_preferences' => 'array',
            'two_factor_recovery_codes' => 'array',
            'billing_address' => 'array',
            'is_active' => 'boolean',
            'email_notifications' => 'boolean',
            'push_notifications' => 'boolean',
            'profile_public' => 'boolean',
            'show_email' => 'boolean',
            'show_progress' => 'boolean',
            'two_factor_enabled' => 'boolean',
            'last_active_at' => 'datetime',
            'last_login_at' => 'datetime',
            'subscription_expires_at' => 'datetime',
            'total_study_hours' => 'decimal:2',
        ];
    }

    // Relationships
    public function profile(): HasOne
    {
        return $this->hasOne(UserProfile::class);
    }

    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'team_members')
            ->withPivot(['role', 'permissions', 'hourly_rate', 'is_active', 'joined_at'])
            ->withTimestamps();
    }

    public function ownedCompanies(): HasMany
    {
        return $this->hasMany(Company::class, 'owner_id');
    }

    public function timeSessions(): HasMany
    {
        return $this->hasMany(TimeSession::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class, 'assigned_to');
    }

    public function createdTasks(): HasMany
    {
        return $this->hasMany(Task::class, 'created_by');
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(Screenshot::class);
    }

    public function activityLogs(): HasMany
    {
        return $this->hasMany(ActivityLog::class);
    }

    public function enrolledCourses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'course_enrollments')
            ->withPivot(['enrolled_at', 'completed_at', 'progress_percentage', 'certificate_issued'])
            ->withTimestamps();
    }

    public function dsaSubmissions(): HasMany
    {
        return $this->hasMany(DsaSubmission::class);
    }

    public function monitaskProjects(): HasMany
    {
        return $this->hasMany(MonitaskProject::class, 'owner_id');
    }

    public function clientProjects(): HasMany
    {
        return $this->hasMany(MonitaskProject::class, 'client_id');
    }

    public function assignedTasks(): HasMany
    {
        return $this->hasMany(MonitaskTask::class, 'assigned_to');
    }

    public function timeEntries(): HasMany
    {
        return $this->hasMany(MonitaskTimeEntry::class, 'user_id');
    }

    public function monitaskAgents(): HasMany
    {
        return $this->hasMany(MonitaskAgent::class);
    }

    public function monitaskKeystrokes(): HasMany
    {
        return $this->hasMany(MonitaskKeystroke::class);
    }

    public function monitaskLocations(): HasMany
    {
        return $this->hasMany(MonitaskLocation::class);
    }

    public function monitaskActivityLogs(): HasMany
    {
        return $this->hasMany(MonitaskActivityLog::class);
    }

    public function monitaskScreenshots(): HasMany
    {
        return $this->hasMany(MonitaskScreenshot::class);
    }

    public function monitaskReports(): HasMany
    {
        return $this->hasMany(MonitaskReport::class);
    }

    // AI Teacher & Learning Platform Relationships
    public function learningPaths(): HasMany
    {
        return $this->hasMany(LearningPath::class);
    }

    public function studySessions(): HasMany
    {
        return $this->hasMany(StudySession::class);
    }

    public function learningProgress(): HasMany
    {
        return $this->hasMany(LearningProgress::class);
    }

    public function assessmentSubmissions(): HasMany
    {
        return $this->hasMany(AssessmentSubmission::class);
    }

    public function learningSessions(): \Illuminate\Database\Eloquent\Relations\HasMany
{
    return $this->hasMany(LearningSession::class);
}

    public function submissions(): HasMany
    {
        return $this->hasMany(Submission::class);
    }

    public function placementPreps(): HasMany
    {
        return $this->hasMany(PlacementPrep::class);
    }

    public function practiceSessions(): HasMany
    {
        return $this->hasMany(PracticeSession::class);
    }

    public function aiInteractions(): HasMany
    {
        return $this->hasMany(AIInteraction::class);
    }

    public function userGoals(): HasMany
    {
        return $this->hasMany(UserGoal::class);
    }

    public function studyScreenshots(): HasMany
    {
        return $this->hasMany(StudyScreenshot::class);
    }

    public function createdSubjects(): HasMany
    {
        return $this->hasMany(AITeacherSubject::class, 'creator_id');
    }

    public function instructorCourses(): HasMany
    {
        return $this->hasMany(LearningCourse::class, 'instructor_id');
    }

    // Helper methods
    public function getAvatarUrlAttribute(): string
    {
        return $this->profile?->avatar_url ?? 
               'https://ui-avatars.com/api/?name=' . urlencode($this->name) . '&background=6366f1&color=ffffff';
    }

    public function getExperienceLevelAttribute(): string
    {
        return $this->profile?->experience_level ?? 'beginner';
    }

    public function getCodingStreakAttribute(): int
    {
        return $this->profile?->coding_streak ?? 0;
    }

    public function getTotalPointsAttribute(): float
    {
        return $this->profile?->total_points ?? 0;
    }

    // Create or get profile
    public function getOrCreateProfile(): UserProfile
    {
        return $this->profile ?? $this->profile()->create([
            'experience_level' => 'beginner',
            'coding_streak' => 0,
            'total_points' => 0,
        ]);
    }

    // Monitask methods
    public function getCurrentCompany(): ?Company
    {
        return $this->companies()->first() ?? $this->ownedCompanies()->first();
    }

    public function hasRole(string $role): bool
    {
        return $this->companies()
            ->wherePivot('role', $role)
            ->exists() || $this->ownedCompanies()->exists();
    }

    public function isOwnerOf(Company $company): bool
    {
        return $this->ownedCompanies()->where('id', $company->id)->exists();
    }

    public function isMemberOf(Company $company): bool
    {
        return $this->companies()->where('company_id', $company->id)->exists();
    }

    // AI Teacher & Learning Helper Methods
    public function getTodayStudyHours(): float
    {
        return $this->studySessions()
            ->whereDate('start_time', today())
            ->sum('duration_minutes') / 60;
    }

    public function updateLearningStreak(): void
    {
        $yesterday = $this->studySessions()
            ->whereDate('start_time', yesterday())
            ->exists();
        
        $today = $this->studySessions()
            ->whereDate('start_time', today())
            ->exists();

        $profile = $this->getOrCreateProfile();
        
        if ($today) {
            if ($yesterday) {
                $profile->increment('learning_streak');
            } else {
                $profile->learning_streak = 1;
            }
        } elseif (!$yesterday) {
            $profile->learning_streak = 0;
        }
        
        $profile->save();
    }

    public function getProductivityScore(): float
    {
        $recentSessions = $this->studySessions()
            ->where('start_time', '>=', now()->subDays(7))
            ->get();
        
        if ($recentSessions->isEmpty()) return 0;
        
        return $recentSessions->avg('productivity_score') ?? 0;
    }

    public function getWeakAreas(): array
    {
        return $this->assessmentSubmissions()
            ->whereNotNull('weak_areas')
            ->get()
            ->pluck('weak_areas')
            ->flatten()
            ->countBy()
            ->sortDesc()
            ->take(5)
            ->keys()
            ->toArray();
    }

    public function getStrongAreas(): array
    {
        return $this->assessmentSubmissions()
            ->whereNotNull('strong_areas')
            ->get()
            ->pluck('strong_areas')
            ->flatten()
            ->countBy()
            ->sortDesc()
            ->take(5)
            ->keys()
            ->toArray();
    }

    public function getOverallProgress(): array
    {
        $totalPaths = $this->learningPaths()->count();
        $completedPaths = $this->learningPaths()
            ->where('completion_percentage', 100)
            ->count();
        
        $avgProgress = $this->learningPaths()
            ->avg('completion_percentage') ?? 0;
        
        return [
            'total_paths' => $totalPaths,
            'completed_paths' => $completedPaths,
            'average_progress' => round($avgProgress, 2),
            'completion_rate' => $totalPaths > 0 ? round(($completedPaths / $totalPaths) * 100, 2) : 0
        ];
    }

    public function getAIRecommendations(): array
    {
        $recommendations = [];
        
        // Study time recommendation
        $todayStudy = $this->getTodayStudyHours();
        if ($todayStudy < 2) {
            $recommendations[] = [
                'type' => 'Study Time',
                'message' => 'You\'ve only studied ' . number_format($todayStudy, 1) . ' hours today. Consider studying for 30 more minutes.',
                'priority' => 'medium',
                'action' => 'startStudySession()'
            ];
        }
        
        // Weak areas focus
        $weakAreas = $this->getWeakAreas();
        if (!empty($weakAreas)) {
            $recommendations[] = [
                'type' => 'Weak Areas',
                'message' => 'Focus on improving: ' . implode(', ', array_slice($weakAreas, 0, 3)),
                'priority' => 'high',
                'action' => 'practiceWeakAreas()'
            ];
        }
        
        // Learning streak
        $profile = $this->getOrCreateProfile();
        if (($profile->learning_streak ?? 0) > 7) {
            $recommendations[] = [
                'type' => 'Streak Bonus',
                'message' => 'Amazing! You\'re on a ' . $profile->learning_streak . '-day streak. Keep it up!',
                'priority' => 'info'
            ];
        }
        
        return $recommendations;
    }

    public function startStudySession(array $options = []): ?StudySession
    {
        // End any active session first
        $activeSession = $this->studySessions()
            ->whereNull('end_time')
            ->first();
        
        if ($activeSession) {
            $activeSession->update([
                'end_time' => now(),
                'duration_minutes' => $activeSession->start_time->diffInMinutes(now())
            ]);
        }
        
        // Start new session
        return $this->studySessions()->create([
            'learning_path_id' => $options['learning_path_id'] ?? null,
            'start_time' => now(),
            'goals_set' => $options['goals'] ?? [],
            'session_type' => $options['type'] ?? 'spontaneous'
        ]);
    }

    public function endCurrentStudySession(): ?StudySession
    {
        $session = $this->studySessions()
            ->whereNull('end_time')
            ->first();
        
        if ($session) {
            $session->update([
                'end_time' => now(),
                'duration_minutes' => $session->start_time->diffInMinutes(now()),
                'focus_score' => $this->calculateSessionFocusScore($session),
                'productivity_score' => $this->calculateSessionProductivityScore($session)
            ]);
            
            $this->updateLearningStreak();
            return $session;
        }
        
        return null;
    }

    private function calculateSessionFocusScore($session): float
    {
        // Basic calculation - can be enhanced with actual activity data
        $duration = $session->start_time->diffInMinutes(now());
        if ($duration < 30) return 60; // Short sessions get moderate score
        if ($duration > 180) return 75; // Very long sessions might have distractions
        return 85; // Optimal session length
    }

    private function calculateSessionProductivityScore($session): float
    {
        // Basic calculation based on goals and time
        $baseScore = 70;
        $goalsSet = count($session->goals_set ?? []);
        return min(100, $baseScore + ($goalsSet * 10));
    }
}
