@extends('layouts.app')

@section('title', 'Learning Dashboard - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 class="h2">📚 Learning Dashboard</h1>
                    <p class="text-muted">Continue your learning journey</p>
                </div>
                <div>
                    <a href="{{ route('learning.courses.index') }}" class="btn btn-primary">
                        <i class="fas fa-search me-1"></i> Browse Courses
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Learning Progress Overview -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card bg-primary text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-graduation-cap fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->courses_enrolled ?? 4 }}</h4>
                            <p class="mb-0">Courses Enrolled</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-success text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-certificate fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->certificates_earned ?? 2 }}</h4>
                            <p class="mb-0">Certificates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-warning text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-clock fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->study_hours ?? 156 }}h</h4>
                            <p class="mb-0">Study Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-info text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-fire fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->study_streak ?? 7 }}</h4>
                            <p class="mb-0">Day Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Continue Learning -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Continue Learning</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card border-primary">
                                <div class="card-body">
                                    <h6 class="card-title">JavaScript Fundamentals</h6>
                                    <p class="card-text small text-muted">Learn the basics of JavaScript programming</p>
                                    <div class="progress mb-2">
                                        <div class="progress-bar" style="width: 75%">75%</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">Lesson 6 of 8</small>
                                        <a href="#" class="btn btn-sm btn-primary">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card border-success">
                                <div class="card-body">
                                    <h6 class="card-title">React Development</h6>
                                    <p class="card-text small text-muted">Build modern web applications with React</p>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-success" style="width: 45%">45%</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">Lesson 3 of 10</small>
                                        <a href="#" class="btn btn-sm btn-success">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card border-warning">
                                <div class="card-body">
                                    <h6 class="card-title">Python for Data Science</h6>
                                    <p class="card-text small text-muted">Analyze data using Python libraries</p>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-warning" style="width: 20%">20%</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">Lesson 1 of 12</small>
                                        <a href="#" class="btn btn-sm btn-warning">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Learning Path & Recommended Courses -->
    <div class="row">
        <div class="col-md-8">
            <!-- Learning Path -->
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Your Learning Path: Full Stack Developer</h5>
                </div>
                <div class="card-body">
                    <div class="learning-path">
                        <div class="path-item d-flex align-items-center mb-3">
                            <div class="path-icon me-3">
                                <i class="fas fa-check-circle text-success fa-2x"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1">HTML & CSS Basics</h6>
                                <p class="mb-0 text-muted small">Completed • 8 hours</p>
                            </div>
                        </div>
                        <div class="path-item d-flex align-items-center mb-3">
                            <div class="path-icon me-3">
                                <i class="fas fa-play-circle text-primary fa-2x"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1">JavaScript Fundamentals</h6>
                                <p class="mb-0 text-muted small">In Progress • 75% complete</p>
                                <div class="progress mt-1" style="height: 4px;">
                                    <div class="progress-bar" style="width: 75%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="path-item d-flex align-items-center mb-3">
                            <div class="path-icon me-3">
                                <i class="fas fa-lock text-muted fa-2x"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1 text-muted">React Framework</h6>
                                <p class="mb-0 text-muted small">Locked • Complete JavaScript first</p>
                            </div>
                        </div>
                        <div class="path-item d-flex align-items-center mb-3">
                            <div class="path-icon me-3">
                                <i class="fas fa-lock text-muted fa-2x"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1 text-muted">Node.js Backend</h6>
                                <p class="mb-0 text-muted small">Locked • Complete React first</p>
                            </div>
                        </div>
                        <div class="path-item d-flex align-items-center">
                            <div class="path-icon me-3">
                                <i class="fas fa-lock text-muted fa-2x"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1 text-muted">Database Design</h6>
                                <p class="mb-0 text-muted small">Locked • Complete Node.js first</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Achievements -->
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Recent Learning Achievements</h5>
                </div>
                <div class="card-body">
                    <div class="achievement d-flex align-items-center mb-3">
                        <i class="fas fa-medal text-warning fa-2x me-3"></i>
                        <div>
                            <h6 class="mb-0">Quick Learner</h6>
                            <small class="text-muted">Completed JavaScript Fundamentals course</small>
                        </div>
                        <span class="badge bg-warning ms-auto">+200 XP</span>
                    </div>
                    <div class="achievement d-flex align-items-center mb-3">
                        <i class="fas fa-fire text-danger fa-2x me-3"></i>
                        <div>
                            <h6 class="mb-0">Study Streak</h6>
                            <small class="text-muted">7 consecutive days of learning</small>
                        </div>
                        <span class="badge bg-danger ms-auto">+100 XP</span>
                    </div>
                    <div class="achievement d-flex align-items-center">
                        <i class="fas fa-star text-primary fa-2x me-3"></i>
                        <div>
                            <h6 class="mb-0">First Certificate</h6>
                            <small class="text-muted">Earned your first course certificate</small>
                        </div>
                        <span class="badge bg-primary ms-auto">+300 XP</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <!-- Recommended Courses -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Recommended for You</h6>
                </div>
                <div class="card-body">
                    <div class="course-recommendation mb-3">
                        <h6 class="course-title">Advanced JavaScript</h6>
                        <p class="small text-muted mb-2">Deep dive into ES6+ features and async programming</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-light text-dark">8 hours</span>
                            <a href="#" class="btn btn-sm btn-outline-primary">Enroll</a>
                        </div>
                    </div>
                    <div class="course-recommendation mb-3">
                        <h6 class="course-title">TypeScript Basics</h6>
                        <p class="small text-muted mb-2">Add type safety to your JavaScript projects</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-light text-dark">6 hours</span>
                            <a href="#" class="btn btn-sm btn-outline-primary">Enroll</a>
                        </div>
                    </div>
                    <div class="course-recommendation">
                        <h6 class="course-title">Git & Version Control</h6>
                        <p class="small text-muted mb-2">Master version control for collaborative development</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-light text-dark">4 hours</span>
                            <a href="#" class="btn btn-sm btn-outline-primary">Enroll</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Study Schedule -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Study Schedule</h6>
                </div>
                <div class="card-body">
                    <div class="schedule-item d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <strong>Today</strong>
                            <small class="text-muted d-block">JavaScript Functions</small>
                        </div>
                        <span class="badge bg-primary">1 hour</span>
                    </div>
                    <div class="schedule-item d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <strong>Tomorrow</strong>
                            <small class="text-muted d-block">DOM Manipulation</small>
                        </div>
                        <span class="badge bg-outline-secondary">1.5 hours</span>
                    </div>
                    <div class="schedule-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Friday</strong>
                            <small class="text-muted d-block">React Components</small>
                        </div>
                        <span class="badge bg-outline-secondary">2 hours</span>
                    </div>
                </div>
            </div>

            <!-- Weekly Goal -->
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Weekly Goal</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <div class="circular-progress mb-3">
                            <h4>5/7</h4>
                            <small class="text-muted">Days studied this week</small>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" style="width: 71%">71%</div>
                        </div>
                        <p class="small text-muted mt-2">2 more days to reach your goal!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
