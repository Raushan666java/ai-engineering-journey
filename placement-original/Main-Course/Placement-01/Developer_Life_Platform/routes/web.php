<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MonitaskController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DsaContestController;
use App\Http\Controllers\DsaProblemController;
use App\Http\Controllers\MonitaskAgentController;
use App\Http\Controllers\LearningCourseController;
use App\Http\Controllers\Auth\SocialAuthController;
use App\Http\Controllers\MonitaskProjectController;
use App\Http\Controllers\ContractorAuthController;
use App\Http\Controllers\AITeacherController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\PlacementPrepController;

/*
|--------------------------------------------------------------------------
| Web RoutesAITeacherController
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// =============================================================================
// PUBLIC ROUTES
// =============================================================================

// Root route with authentication check
Route::get('/', function () {
    return Auth::check() 
        ? redirect()->route('dashboard') 
        : redirect()->route('login');
})->name('home');

// Landing page route
Route::get('/home', [HomeController::class, 'index'])->name('welcome');

// =============================================================================
// DASHBOARD ROUTES (PUBLIC ACCESS)
// =============================================================================
Route::resource('problems', DsaProblemController::class, ['as' => 'dsa']);
Route::controller(DashboardController::class)->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/learning', 'learning')->name('learning');
    Route::get('/coding', 'coding')->name('coding');
    Route::get('/goals', 'goals')->name('goals');
    Route::get('/placement', 'placement')->name('placement');
    Route::get('/settings', 'settings')->name('settings');
});

// Individual dashboard routes
Route::controller(DashboardController::class)->group(function () {
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::get('/projects', 'projects')->name('projects.index');
    Route::get('/ai-teacher', 'aiTeacher')->name('ai-teacher.index');
    Route::get('/reports', 'reports')->name('reports.index');
    Route::get('/monitask', 'monitask')->name('monitask.dashboard');
    Route::get('/settings', 'settings')->name('settings.index');
});

// =============================================================================
// AUTHENTICATION ROUTES
// =============================================================================

// Laravel Breeze Authentication Routes
require __DIR__.'/auth.php';

// Laravel UI Authentication Routes
Auth::routes();

// =============================================================================
// SOCIAL AUTHENTICATION ROUTES
// =============================================================================

Route::prefix('auth')->name('social.')->group(function () {
    // Social login routes
    Route::get('/{provider}', [SocialAuthController::class, 'redirectToProvider'])->name('redirect');
    Route::get('/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback'])->name('callback');
    
    // Account linking routes (authenticated users only)
    Route::middleware('auth')->group(function () {
        Route::get('/link/{provider}', [SocialAuthController::class, 'linkProvider'])->name('link');
        Route::get('/link/{provider}/callback', [SocialAuthController::class, 'handleLinkCallback'])->name('link.callback');
        Route::delete('/unlink/{provider}', [SocialAuthController::class, 'unlinkProvider'])->name('unlink');
        Route::get('/connected', [SocialAuthController::class, 'getConnectedAccounts'])->name('connected');
    });
});

// Alternative social login routes
Route::prefix('login')->name('social.')->group(function () {
    Route::get('/{provider}', [SocialAuthController::class, 'redirectToProvider'])->name('redirect.alt');
    Route::get('/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback'])->name('callback.alt');
});

// =============================================================================
// CONTRACTOR AUTHENTICATION ROUTES
// =============================================================================

Route::prefix('contractor')->name('contractor.')->group(function () {
    // Guest contractor routes
    Route::middleware('guest:contractor')->group(function () {
        Route::get('/login', [ContractorAuthController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [ContractorAuthController::class, 'login']);
        Route::get('/register', [ContractorAuthController::class, 'showRegistrationForm'])->name('register');
        Route::post('/register', [ContractorAuthController::class, 'register']);
    });
    
    // Authenticated contractor routes
    Route::middleware('auth:contractor')->group(function () {
        Route::get('/dashboard', [ContractorAuthController::class, 'dashboard'])->name('dashboard');
        Route::get('/profile', [ContractorAuthController::class, 'profile'])->name('profile');
        Route::put('/profile', [ContractorAuthController::class, 'updateProfile'])->name('profile.update');
        Route::post('/logout', [ContractorAuthController::class, 'logout'])->name('logout');
    });
});

// =============================================================================
// AUTHENTICATED USER ROUTES
// =============================================================================

Route::middleware('auth')->group(function () {
    
    // =========================================================================
    // DSA LEARNING PLATFORM ROUTES
    // =========================================================================
    
    Route::prefix('dsa')->name('dsa.')->group(function () {
        // DSA Dashboard
        Route::get('/dashboard', function () { 
            return view('dsa.dashboard'); 
        })->name('dashboard');
        
        // DSA Problems
        Route::resource('problems', DsaProblemController::class, ['as' => 'dsa']);
        Route::post('/problems/{dsaProblem}/submit', [DsaProblemController::class, 'submit'])->name('problems.submit');
        Route::get('/problems/{dsaProblem}/leaderboard', [DsaProblemController::class, 'leaderboard'])->name('problems.leaderboard');
        
        // DSA Contests
        Route::resource('contests', DsaContestController::class, ['as' => 'dsa']);
        Route::post('/contests/{dsaContest}/register', [DsaContestController::class, 'register'])->name('contests.register');
        Route::delete('/contests/{dsaContest}/unregister', [DsaContestController::class, 'unregister'])->name('contests.unregister');
        Route::get('/contests/{dsaContest}/leaderboard', [DsaContestController::class, 'leaderboard'])->name('contests.leaderboard');
        Route::get('/contests/{dsaContest}/problems', [DsaContestController::class, 'problems'])->name('contests.problems');
        
        // DSA Practice
        Route::get('/practice', function () { 
            return view('dsa.practice'); 
        })->name('practice');
    });

    // =========================================================================
    // UNIVERSAL LEARNING PLATFORM ROUTES
    // =========================================================================
    
    Route::prefix('learning')->name('learning.')->group(function () {
        // Learning Dashboard
        Route::get('/dashboard', function () { 
            return view('learning.dashboard'); 
        })->name('dashboard');
        
        // Learning Courses (within learning namespace)
        Route::resource('courses', LearningCourseController::class);
        Route::post('/courses/{learningCourse}/enroll', [LearningCourseController::class, 'enroll'])->name('courses.enroll');
        Route::get('/my-learning', [LearningCourseController::class, 'myLearning'])->name('my-learning');
        Route::get('/featured', [LearningCourseController::class, 'featured'])->name('featured');
    });
    
    // Global Learning Routes
    Route::resource('courses', LearningCourseController::class);
    Route::get('/subjects', function () { 
        return view('subjects.index'); 
    })->name('subjects.index');
    
    // =========================================================================
    // MONITASK PLATFORM ROUTES
    // =========================================================================
    
    Route::prefix('monitask')->name('monitask.')->group(function () {
        // Main Monitask Routes
        Route::get('/', [MonitaskController::class, 'landing'])->name('landing');
        Route::get('/dashboard', [MonitaskController::class, 'dashboard'])->name('dashboard');
        Route::get('/time-tracking', [MonitaskController::class, 'timeTracking'])->name('time-tracking');
        Route::get('/projects', [MonitaskController::class, 'projects'])->name('projects');
        Route::get('/tasks', [MonitaskController::class, 'tasks'])->name('tasks');
        Route::get('/tasks/create', [MonitaskController::class, 'createTask'])->name('tasks.create');
        Route::get('/screenshots', [MonitaskController::class, 'screenshots'])->name('screenshots');
        Route::get('/activity-logs', [MonitaskController::class, 'activityLogs'])->name('activity-logs');
        Route::get('/team-dashboard', [MonitaskController::class, 'teamDashboard'])->name('team-dashboard');
        Route::get('/productivity-analytics', [MonitaskController::class, 'productivityAnalytics'])->name('productivity-analytics');
        Route::get('/reports', [MonitaskController::class, 'reports'])->name('reports');
        Route::get('/agents', [MonitaskController::class, 'agents'])->name('agents');
        Route::get('/settings', [MonitaskController::class, 'settings'])->name('settings');
        Route::get('/team', [MonitaskController::class, 'team'])->name('team');
        Route::get('/timer', [MonitaskController::class, 'timer'])->name('timer');
        
        // Timer Management Routes
        Route::post('/timer/start', [MonitaskController::class, 'startTimer'])->name('timer.start');
        Route::post('/timer/stop', [MonitaskController::class, 'stopTimer'])->name('timer.stop');
        Route::post('/manual-entry', [MonitaskController::class, 'addManualEntry'])->name('manual-entry');
        
        // Report Generation Routes
        Route::post('/reports/generate', [MonitaskController::class, 'generateReport'])->name('reports.generate');
        Route::get('/reports/{report}/download', [MonitaskController::class, 'downloadReport'])->name('reports.download');
        
        // Project Management Routes
        Route::prefix('projects')->name('projects.')->controller(MonitaskProjectController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/create', 'create')->name('create');
            Route::post('/', 'store')->name('store');
            Route::get('/{project}', 'show')->name('show');
            Route::get('/{project}/edit', 'edit')->name('edit');
            Route::put('/{project}', 'update')->name('update');
            Route::delete('/{project}', 'destroy')->name('destroy');
        });
        
        // Agent Management Routes
        Route::prefix('agents')->name('agents.')->controller(MonitaskAgentController::class)->group(function () {
            // Agent Status & Configuration
            Route::get('/status', 'getAgentStatus')->name('status');
            Route::get('/config', 'getAgentConfig')->name('config');
            
            // Agent Registration & Settings
            Route::post('/register', 'registerAgent')->name('register');
            Route::post('/settings', 'updateSettings')->name('settings');
            Route::post('/heartbeat', 'heartbeat')->name('heartbeat');
            
            // Agent Control
            Route::post('/start', 'startMonitoring')->name('start');
            Route::post('/stop', 'stopMonitoring')->name('stop');
            
            // Data Collection Routes
            Route::post('/keystroke-data', 'submitKeystrokeData')->name('keystroke-data');
            Route::post('/screenshot', 'submitScreenshot')->name('screenshot');
            Route::post('/location', 'submitLocationData')->name('location');
            Route::post('/activity-log', 'submitActivityLog')->name('activity-log');
        });
    });

    // =========================================================================
    // AI TEACHER PLATFORM ROUTES
    // =========================================================================
    
    Route::prefix('ai-teacher')->name('ai-teacher.')->controller(AITeacherController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/recommendations', 'recommendations')->name('recommendations');
        Route::get('/learning-path', 'learningPath')->name('learning-path');
        Route::get('/assessment', 'assessment')->name('assessment');
        Route::post('/assessment', 'submitAssessment')->name('assessment.submit');
        Route::get('/study-plan', 'studyPlan')->name('study-plan');
        Route::get('/analytics', 'analytics')->name('analytics');
        Route::get('/tutor', 'tutor')->name('tutor');
        Route::post('/chat', 'chat')->name('chat');
    });

    // =========================================================================
    // GOAL MANAGEMENT ROUTES
    // =========================================================================
    
    Route::prefix('goals')->name('goals.')->controller(GoalController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{goal}', 'show')->name('show');
        Route::get('/{goal}/edit', 'edit')->name('edit');
        Route::put('/{goal}', 'update')->name('update');
        Route::delete('/{goal}', 'destroy')->name('destroy');
        Route::post('/{goal}/toggle', 'toggle')->name('toggle');
        Route::post('/{goal}/progress', 'updateProgress')->name('progress');
    });

    // =========================================================================
    // PLACEMENT PREPARATION ROUTES
    // =========================================================================
    
    Route::prefix('placement-prep')->name('placement-prep.')->controller(PlacementPrepController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/companies', 'companies')->name('companies');
        Route::get('/companies/{company}', 'showCompany')->name('companies.show');
        Route::get('/interviews', 'interviews')->name('interviews');
        Route::get('/resume-builder', 'resumeBuilder')->name('resume-builder');
        Route::post('/resume', 'saveResume')->name('resume.save');
        Route::get('/mock-interviews', 'mockInterviews')->name('mock-interviews');
        Route::post('/mock-interviews/start', 'startMockInterview')->name('mock-interviews.start');
        Route::get('/job-tracker', 'jobTracker')->name('job-tracker');
        Route::post('/applications', 'trackApplication')->name('applications.store');
    });

    // =========================================================================
    // USER PROFILE & COMMUNITY ROUTES
    // =========================================================================
    
    // User Profile & Progress
    Route::get('/profile', function () { 
        return view('profile.show'); 
    })->name('profile.show');
    
    Route::get('/progress', function () { 
        return view('progress.index'); 
    })->name('progress.index');
    
    Route::get('/achievements', function () { 
        return view('achievements.index'); 
    })->name('achievements');
    
    // Community Features
    Route::get('/community', function () { 
        return view('community.index'); 
    })->name('community');
    
    Route::get('/leaderboard', function () { 
        return view('leaderboard.index'); 
    })->name('leaderboard');
    
    // Help & Support
    Route::get('/help', function () { 
        return view('help.index'); 
    })->name('help');
    
    // Settings (duplicate route - keeping for compatibility)
    Route::get('/settings', function () { 
        return view('settings.index'); 
    })->name('settings');
});
