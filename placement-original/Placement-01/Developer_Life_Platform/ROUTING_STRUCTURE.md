# Complete Route Structure Documentation

## Overview
This document outlines the complete routing structure for the Developer Life Platform Laravel application, organized by functional areas.

## Public Routes

### Root Route
```php
Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    } else {
        return redirect()->route('login');
    }
});
```

## Dashboard Routes (Guest + Auth)

### Main Dashboard Controller Routes
```php
Route::controller(DashboardController::class)->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
    Route::get('/learning', 'learning')->name('dashboard.learning');
    Route::get('/coding', 'coding')->name('dashboard.coding');
    Route::get('/projects', 'projects')->name('projects.index');
    Route::get('/goals', 'goals')->name('dashboard.goals');
    Route::get('/placement', 'placement')->name('dashboard.placement');
    Route::get('/ai-teacher', 'aiTeacher')->name('ai-teacher.index');
    Route::get('/reports', 'reports')->name('reports.index');
    Route::get('/monitask', 'monitask')->name('monitask.dashboard');
    Route::get('/settings', 'settings')->name('settings.index');
});
```

### Additional Settings Route
```php
Route::get('dashboard/settings', function(){ 
    return "hello"; 
})->name('dashboard.settings');
```

## Authenticated Routes (`auth` middleware)

### DSA Learning Platform
```php
Route::prefix('dsa')->name('dsa.')->group(function () {
    Route::get('/dashboard', function () { return view('dsa.dashboard'); })->name('dashboard');
    
    // Problems
    Route::resource('problems', DsaProblemController::class, ['as' => 'dsa']);
    Route::post('/problems/{dsaProblem}/submit', [DsaProblemController::class, 'submit'])->name('problems.submit');
    Route::get('/problems/{dsaProblem}/leaderboard', [DsaProblemController::class, 'leaderboard'])->name('problems.leaderboard');
    
    // Contests
    Route::resource('contests', DsaContestController::class, ['as' => 'dsa']);
    Route::post('/contests/{dsaContest}/register', [DsaContestController::class, 'register'])->name('contests.register');
    Route::delete('/contests/{dsaContest}/unregister', [DsaContestController::class, 'unregister'])->name('contests.unregister');
    Route::get('/contests/{dsaContest}/leaderboard', [DsaContestController::class, 'leaderboard'])->name('contests.leaderboard');
    Route::get('/contests/{dsaContest}/problems', [DsaContestController::class, 'problems'])->name('contests.problems');
    
    Route::get('/practice', function () { return view('dsa.practice'); })->name('practice');
});
```

### Universal Learning Platform
```php
Route::prefix('learning')->name('learning.')->group(function () {
    Route::get('/dashboard', function () { return view('learning.dashboard'); })->name('dashboard');
    
    // Courses
    Route::resource('courses', LearningCourseController::class);
    Route::post('/courses/{learningCourse}/enroll', [LearningCourseController::class, 'enroll'])->name('courses.enroll');
    Route::get('/my-learning', [LearningCourseController::class, 'myLearning'])->name('my-learning');
    Route::get('/featured', [LearningCourseController::class, 'featured'])->name('featured');
});
```

### Additional Learning Routes
```php
Route::get('/subjects', function () { return view('subjects.index'); })->name('subjects.index');
Route::get('/progress', function () { return view('progress.index'); })->name('progress.index');
Route::resource('courses', LearningCourseController::class);
```

### Monitask Platform
```php
Route::prefix('monitask')->name('monitask.')->group(function () {
    // Main Routes
    Route::get('/', [MonitaskController::class, 'landing'])->name('landing');
    Route::get('/dashboard', [MonitaskController::class, 'dashboard'])->name('dashboard');
    Route::get('/time-tracking', [MonitaskController::class, 'timeTracking'])->name('time-tracking');
    Route::get('/projects', [MonitaskController::class, 'projects'])->name('projects');
    Route::get('/tasks', [MonitaskController::class, 'tasks'])->name('tasks');
    Route::get('/screenshots', [MonitaskController::class, 'screenshots'])->name('screenshots');
    Route::get('/activity-logs', [MonitaskController::class, 'activityLogs'])->name('activity-logs');
    Route::get('/team-dashboard', [MonitaskController::class, 'teamDashboard'])->name('team-dashboard');
    Route::get('/productivity-analytics', [MonitaskController::class, 'productivityAnalytics'])->name('productivity-analytics');
    Route::get('/reports', [MonitaskController::class, 'reports'])->name('reports');
    Route::get('/agents', [MonitaskController::class, 'agents'])->name('agents');
    Route::get('/settings', [MonitaskController::class, 'settings'])->name('settings');
    Route::get('/team', [MonitaskController::class, 'team'])->name('team');
    Route::get('/timer', [MonitaskController::class, 'timer'])->name('timer');
    Route::get('/tasks/create', [MonitaskController::class, 'createTask'])->name('tasks.create');
    
    // Timer Routes
    Route::post('/timer/start', [MonitaskController::class, 'startTimer'])->name('timer.start');
    Route::post('/timer/stop', [MonitaskController::class, 'stopTimer'])->name('timer.stop');
    Route::post('/manual-entry', [MonitaskController::class, 'addManualEntry'])->name('manual-entry');
    
    // Report Generation
    Route::post('/reports/generate', [MonitaskController::class, 'generateReport'])->name('reports.generate');
    Route::get('/reports/{report}/download', [MonitaskController::class, 'downloadReport'])->name('reports.download');
    
    // Project Management Routes
    Route::prefix('projects')->name('projects.')->group(function () {
        Route::get('/', [MonitaskProjectController::class, 'index'])->name('index');
        Route::get('/create', [MonitaskProjectController::class, 'create'])->name('create');
        Route::post('/', [MonitaskProjectController::class, 'store'])->name('store');
        Route::get('/{project}', [MonitaskProjectController::class, 'show'])->name('show');
        Route::get('/{project}/edit', [MonitaskProjectController::class, 'edit'])->name('edit');
        Route::put('/{project}', [MonitaskProjectController::class, 'update'])->name('update');
        Route::delete('/{project}', [MonitaskProjectController::class, 'destroy'])->name('destroy');
    });
    
    // Agent Management Routes
    Route::prefix('agents')->name('agents.')->group(function () {
        Route::get('/status', [MonitaskAgentController::class, 'getAgentStatus'])->name('status');
        Route::post('/register', [MonitaskAgentController::class, 'registerAgent'])->name('register');
        Route::post('/heartbeat', [MonitaskAgentController::class, 'heartbeat'])->name('heartbeat');
        Route::post('/settings', [MonitaskAgentController::class, 'updateSettings'])->name('settings');
        Route::post('/start', [MonitaskAgentController::class, 'startMonitoring'])->name('start');
        Route::post('/stop', [MonitaskAgentController::class, 'stopMonitoring'])->name('stop');
        Route::get('/config', [MonitaskAgentController::class, 'getAgentConfig'])->name('config');
        
        // Data Collection Routes
        Route::post('/keystroke-data', [MonitaskAgentController::class, 'submitKeystrokeData'])->name('keystroke-data');
        Route::post('/screenshot', [MonitaskAgentController::class, 'submitScreenshot'])->name('screenshot');
        Route::post('/location', [MonitaskAgentController::class, 'submitLocationData'])->name('location');
        Route::post('/activity-log', [MonitaskAgentController::class, 'submitActivityLog'])->name('activity-log');
    });
});
```

### Community & Profile Routes
```php
Route::get('/community', function () { return view('community.index'); })->name('community');
Route::get('/leaderboard', function () { return view('leaderboard.index'); })->name('leaderboard');
Route::get('/achievements', function () { return view('achievements.index'); })->name('achievements');
Route::get('/profile', function () { return view('profile.show'); })->name('profile.show');
Route::get('/settings', function () { return view('settings.index'); })->name('settings');
Route::get('/help', function () { return view('help.index'); })->name('help');
```

## Authentication Routes

### Laravel Breeze Auth Routes
```php
require __DIR__.'/auth.php';
```

### Social Authentication Routes
```php
Route::prefix('auth')->name('social.')->group(function () {
    Route::get('/{provider}', [SocialAuthController::class, 'redirectToProvider'])->name('redirect');
    Route::get('/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback'])->name('callback');
    
    // For linking/unlinking social accounts (authenticated users only)
    Route::middleware(['auth'])->group(function () {
        Route::get('/link/{provider}', [SocialAuthController::class, 'linkProvider'])->name('link');
        Route::get('/link/{provider}/callback', [SocialAuthController::class, 'handleLinkCallback'])->name('link.callback');
        Route::delete('/unlink/{provider}', [SocialAuthController::class, 'unlinkProvider'])->name('unlink');
        Route::get('/connected', [SocialAuthController::class, 'getConnectedAccounts'])->name('connected');
    });
});
```

### Alternative Social Login Routes
```php
Route::prefix('login')->group(function () {
    Route::get('/{provider}', [SocialAuthController::class, 'redirectToProvider'])->name('social.redirect');
    Route::get('/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback'])->name('social.callback');
});
```

## Contractor Authentication System

### Guest Contractor Routes
```php
Route::prefix('contractor')->name('contractor.')->group(function () {
    Route::middleware('guest:contractor')->group(function () {
        Route::get('/login', [App\Http\Controllers\ContractorAuthController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [App\Http\Controllers\ContractorAuthController::class, 'login']);
        Route::get('/register', [App\Http\Controllers\ContractorAuthController::class, 'showRegistrationForm'])->name('register');
        Route::post('/register', [App\Http\Controllers\ContractorAuthController::class, 'register']);
    });
    
    // Authenticated contractor routes
    Route::middleware('auth:contractor')->group(function () {
        Route::get('/dashboard', [App\Http\Controllers\ContractorAuthController::class, 'dashboard'])->name('dashboard');
        Route::get('/profile', [App\Http\Controllers\ContractorAuthController::class, 'profile'])->name('profile');
        Route::put('/profile', [App\Http\Controllers\ContractorAuthController::class, 'updateProfile'])->name('profile.update');
        Route::post('/logout', [App\Http\Controllers\ContractorAuthController::class, 'logout'])->name('logout');
    });
});
```

### Additional Routes
```php
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
```

## Navigation Structure

### Sidebar Navigation
The sidebar navigation has been organized into logical sections:

1. **Dashboard Section**
   - Main Dashboard
   - Learning Dashboard
   - Coding Dashboard
   - Goals
   - Placement

2. **Learning Platform Section**
   - Learning Dashboard
   - All Courses
   - My Learning
   - Featured Courses
   - Subjects

3. **DSA Platform Section**
   - DSA Dashboard
   - Problems
   - Contests
   - Practice

4. **Apps Section**
   - Projects
   - Monitask (with full sub-menu)
   - AI & Tools

5. **User Section**
   - Profile Management
   - Progress Tracking
   - Achievements
   - Settings

6. **Community Section**
   - Community Hub
   - Leaderboard
   - Help Center

### Top Navigation (Navbar)
- Logo and branding
- Global search functionality
- Theme toggle (light/dark)
- Notifications dropdown
- User profile dropdown with:
  - Profile access
  - Dashboard link
  - Settings
  - Help Center
  - Progress tracking
  - Logout functionality

## Controllers Required

1. **DashboardController** - Main dashboard functionality
2. **DsaProblemController** - DSA problem management
3. **DsaContestController** - Contest management
4. **LearningCourseController** - Course management
5. **MonitaskController** - Time tracking and monitoring
6. **MonitaskProjectController** - Project management
7. **MonitaskAgentController** - Agent management
8. **SocialAuthController** - Social authentication
9. **ContractorAuthController** - Contractor authentication
10. **HomeController** - Home page functionality

## Security & Middleware

- **auth** middleware for authenticated routes
- **guest** middleware for login/register routes
- **guest:contractor** for contractor-specific guest routes
- **auth:contractor** for authenticated contractor routes

## Features Supported

✅ Multi-dashboard system (Main, Learning, DSA, Monitask)
✅ Social authentication (Google, GitHub, etc.)
✅ Contractor authentication system
✅ Learning management system
✅ DSA problem and contest platform
✅ Time tracking and monitoring
✅ Project management
✅ Community features
✅ Progress tracking
✅ AI teacher integration
✅ Report generation
✅ Team collaboration
✅ Agent-based monitoring

This comprehensive routing structure supports a full-featured developer education and productivity platform with multiple user types and extensive functionality.
