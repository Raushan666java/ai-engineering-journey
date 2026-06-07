@extends('layouts.app')

@section('title', 'Dashboard - Developer Life Platform')
@section('description', 'Your personalized learning dashboard with progress tracking, goals, and recommendations.')

@section('content')
<div class="container py-4">
    <!-- Welcome Section -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card bg-gradient text-white" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <div class="card-body py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h1 class="display-5 fw-bold mb-3">
                                Welcome back, {{ auth()->check() ? auth()->user()->name : 'Developer' }}! 👋
                            </h1>
                            <p class="lead mb-4">
                                Ready to continue your learning journey? You're making great progress!
                            </p>
                            @if(auth()->check() && $userStats)
                                <div class="row g-3">
                                    <div class="col-md-3">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <i class="fas fa-fire fa-2x text-warning"></i>
                                            </div>
                                            <div>
                                                <div class="h4 mb-0">{{ $userStats['coding_streak'] }}</div>
                                                <small class="opacity-75">Day Streak</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <i class="fas fa-star fa-2x text-warning"></i>
                                            </div>
                                            <div>
                                                <div class="h4 mb-0">{{ number_format($userStats['total_points']) }}</div>
                                                <small class="opacity-75">Points</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <i class="fas fa-trophy fa-2x text-warning"></i>
                                            </div>
                                            <div>
                                                <div class="h4 mb-0">{{ $userStats['courses_completed'] }}</div>
                                                <small class="opacity-75">Courses</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <i class="fas fa-code fa-2x text-warning"></i>
                                            </div>
                                            <div>
                                                <div class="h4 mb-0">{{ $userStats['problems_solved'] }}</div>
                                                <small class="opacity-75">Problems</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        </div>
                        <div class="col-lg-4 text-center">
                            <div class="mt-4 mt-lg-0">
                                <i class="fas fa-rocket fa-5x opacity-25"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="row mb-5">
        <div class="col-12">
            <h2 class="h4 mb-3">Quick Actions</h2>
            <div class="row g-3">
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="{{ route('dashboard.learning') }}" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-graduation-cap fa-2x text-primary mb-2"></i>
                            <h6 class="card-title mb-0">Start Learning</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="{{ route('dashboard.coding') }}" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-code fa-2x text-success mb-2"></i>
                            <h6 class="card-title mb-0">Practice Coding</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="{{ route('dashboard.projects') }}" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-project-diagram fa-2x text-info mb-2"></i>
                            <h6 class="card-title mb-0">Build Projects</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="{{ route('dashboard.goals') }}" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-target fa-2x text-warning mb-2"></i>
                            <h6 class="card-title mb-0">Set Goals</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="{{ route('dashboard.placement') }}" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-briefcase fa-2x text-danger mb-2"></i>
                            <h6 class="card-title mb-0">Job Prep</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="#" class="card text-decoration-none h-100">
                        <div class="card-body text-center p-3">
                            <i class="fas fa-users fa-2x text-secondary mb-2"></i>
                            <h6 class="card-title mb-0">Community</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Left Column -->
        <div class="col-lg-8">
            <!-- Featured Subjects -->
            <div class="card mb-4">
                <div class="card-header bg-white border-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Featured Learning Paths</h5>
                        <a href="{{ route('dashboard.learning') }}" class="btn btn-sm btn-outline-primary">View All</a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        @forelse($featuredSubjects as $subject)
                            <div class="col-md-6">
                                <div class="card border-0 bg-light h-100">
                                    <div class="card-body">
                                        <div class="d-flex align-items-start">
                                            <div class="me-3">
                                                <div class="rounded-circle d-flex align-items-center justify-content-center" 
                                                     style="width: 48px; height: 48px; background-color: {{ $subject->color }}20;">
                                                    <i class="{{ $subject->icon }} fa-lg" style="color: {{ $subject->color }};"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="card-title mb-1">{{ $subject->name }}</h6>
                                                <p class="card-text text-muted small mb-2">
                                                    {{ Str::limit($subject->description, 80) }}
                                                </p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <small class="text-muted">
                                                        <i class="fas fa-book me-1"></i>
                                                        {{ $subject->course_count }} courses
                                                    </small>
                                                    <span class="badge bg-light text-dark">{{ ucfirst($subject->difficulty_level) }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div class="col-12 text-center py-4">
                                <i class="fas fa-book fa-3x text-muted mb-3"></i>
                                <h6 class="text-muted">No subjects available yet</h6>
                                <p class="text-muted">Check back soon for exciting learning content!</p>
                            </div>
                        @endforelse
                    </div>
                </div>
            </div>

            <!-- Popular Courses -->
            <div class="card">
                <div class="card-header bg-white border-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Popular Courses</h5>
                        <a href="{{ route('dashboard.learning') }}" class="btn btn-sm btn-outline-primary">Browse All</a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        @forelse($popularCourses as $course)
                            <div class="col-lg-6">
                                <div class="card border-0 bg-light h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-start mb-2">
                                            <h6 class="card-title mb-0">{{ $course->title }}</h6>
                                            <span class="badge bg-{{ $course->level === 'beginner' ? 'success' : ($course->level === 'intermediate' ? 'warning' : 'danger') }}">
                                                {{ ucfirst($course->level) }}
                                            </span>
                                        </div>
                                        <p class="card-text text-muted small mb-2">
                                            {{ Str::limit($course->short_description, 100) }}
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-muted">
                                                <i class="fas fa-users me-1"></i>
                                                {{ number_format($course->enrolled_count) }} enrolled
                                            </small>
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa-star text-warning me-1"></i>
                                                <small class="text-muted">{{ $course->rating }}/5</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div class="col-12 text-center py-4">
                                <i class="fas fa-graduation-cap fa-3x text-muted mb-3"></i>
                                <h6 class="text-muted">No courses available yet</h6>
                                <p class="text-muted">Exciting courses are coming soon!</p>
                            </div>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column -->
        <div class="col-lg-4">
            <!-- Today's Goals -->
            <div class="card mb-4">
                <div class="card-header bg-white border-0 pb-0">
                    <h6 class="mb-0">Today's Progress</h6>
                </div>
                <div class="card-body" x-data="{ 
                    goals: [
                        { id: 1, text: 'Complete 2 coding problems', progress: 50, completed: false },
                        { id: 2, text: 'Study for 1 hour', progress: 75, completed: false },
                        { id: 3, text: 'Update project documentation', progress: 100, completed: true }
                    ]
                }">
                    <template x-for="goal in goals" :key="goal.id">
                        <div class="d-flex align-items-center mb-3">
                            <input type="checkbox" 
                                   class="form-check-input me-2" 
                                   :checked="goal.completed"
                                   @change="goal.completed = !goal.completed">
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <small class="fw-medium" :class="{ 'text-decoration-line-through text-muted': goal.completed }" x-text="goal.text"></small>
                                    <small class="text-muted" x-text="goal.progress + '%'"></small>
                                </div>
                                <div class="progress" style="height: 4px;">
                                    <div class="progress-bar" :style="`width: ${goal.progress}%`"></div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="text-center mt-3">
                        <a href="{{ route('dashboard.goals') }}" class="btn btn-sm btn-outline-primary">Manage Goals</a>
                    </div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="card mb-4">
                <div class="card-header bg-white border-0 pb-0">
                    <h6 class="mb-0">This Week's Highlights</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3 text-center">
                        <div class="col-6">
                            <div class="border rounded p-3">
                                <div class="h5 text-primary mb-1">15</div>
                                <small class="text-muted">Problems Solved</small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="border rounded p-3">
                                <div class="h5 text-success mb-1">8h</div>
                                <small class="text-muted">Learning Time</small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="border rounded p-3">
                                <div class="h5 text-info mb-1">3</div>
                                <small class="text-muted">Projects</small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="border rounded p-3">
                                <div class="h5 text-warning mb-1">7</div>
                                <small class="text-muted">Day Streak</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Learning Recommendation -->
            <div class="card">
                <div class="card-header bg-white border-0 pb-0">
                    <h6 class="mb-0">Recommended for You</h6>
                </div>
                <div class="card-body">
                    <div class="text-center py-3">
                        <div class="mb-3">
                            <i class="fas fa-brain fa-3x text-primary"></i>
                        </div>
                        <h6 class="mb-2">Data Structures & Algorithms</h6>
                        <p class="text-muted small mb-3">
                            Based on your progress, we recommend diving deeper into DSA concepts.
                        </p>
                        <a href="#" class="btn btn-primary btn-sm">Start Learning</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    // Dashboard interactions
    document.addEventListener('DOMContentLoaded', function() {
        // Animate progress bars on load
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 100);
        });

        // Auto-update time
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElements = document.querySelectorAll('.current-time');
            timeElements.forEach(el => el.textContent = timeString);
        }
        
        setInterval(updateTime, 1000);
        updateTime();
    });
</script>
@endpush
