@extends('layouts.app')

@section('title', 'Coding Practice - Developer Life Platform')
@section('description', 'Practice coding problems, improve your algorithms skills, and prepare for technical interviews.')

@section('content')
<div class="container py-4">
    <!-- Header Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h1 class="display-4 fw-bold text-dark mb-3">
                    <i class="fas fa-code text-success me-3"></i>
                    Coding Practice
                </h1>
                <p class="lead text-muted mb-4">
                    Sharpen your programming skills with challenging problems and real-world scenarios
                </p>
            </div>
        </div>
    </div>

    <!-- Coding Statistics -->
    <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-puzzle-piece fa-3x text-primary"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $codingStats['total_problems'] }}</h3>
                    <p class="text-muted mb-0">Total Problems</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $codingStats['problems_solved'] }}</h3>
                    <p class="text-muted mb-0">Problems Solved</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-fire fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $codingStats['current_streak'] }}</h3>
                    <p class="text-muted mb-0">Current Streak</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-trophy fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $codingStats['rank'] }}</h3>
                    <p class="text-muted mb-0">Current Rank</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Progress Overview -->
    @if(auth()->check())
        <div class="row mb-5">
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-body">
                        <h5 class="fw-bold mb-4">
                            <i class="fas fa-chart-line text-primary me-2"></i>
                            Your Progress
                        </h5>
                        <div class="row g-4">
                            <div class="col-md-4">
                                <div class="mb-2 d-flex justify-content-between">
                                    <span>Easy Problems</span>
                                    <span class="fw-medium">15/100</span>
                                </div>
                                <div class="progress mb-3" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: 15%"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-2 d-flex justify-content-between">
                                    <span>Medium Problems</span>
                                    <span class="fw-medium">25/200</span>
                                </div>
                                <div class="progress mb-3" style="height: 8px;">
                                    <div class="progress-bar bg-warning" style="width: 12.5%"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-2 d-flex justify-content-between">
                                    <span>Hard Problems</span>
                                    <span class="fw-medium">5/150</span>
                                </div>
                                <div class="progress mb-3" style="height: 8px;">
                                    <div class="progress-bar bg-danger" style="width: 3.3%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <!-- Problem Categories -->
    <div class="row g-4 mb-5">
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-list fa-3x text-primary"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Data Structures</h5>
                    <p class="text-muted mb-4">
                        Master arrays, linked lists, stacks, queues, trees, and graphs
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">350+ Problems</small>
                    </div>
                    <a href="#" class="btn btn-outline-primary">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-cogs fa-3x text-success"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Algorithms</h5>
                    <p class="text-muted mb-4">
                        Learn sorting, searching, dynamic programming, and greedy algorithms
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">280+ Problems</small>
                    </div>
                    <a href="#" class="btn btn-outline-success">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-brain fa-3x text-warning"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Problem Solving</h5>
                    <p class="text-muted mb-4">
                        Develop logical thinking and pattern recognition skills
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">200+ Problems</small>
                    </div>
                    <a href="#" class="btn btn-outline-warning">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-users fa-3x text-info"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Interview Prep</h5>
                    <p class="text-muted mb-4">
                        Practice with real interview questions from top companies
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">150+ Problems</small>
                    </div>
                    <a href="#" class="btn btn-outline-info">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-stopwatch fa-3x text-danger"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Timed Challenges</h5>
                    <p class="text-muted mb-4">
                        Test your speed and accuracy under time pressure
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">100+ Challenges</small>
                    </div>
                    <a href="#" class="btn btn-outline-danger">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-code-branch fa-3x text-secondary"></i>
                    </div>
                    <h5 class="fw-bold mb-3">System Design</h5>
                    <p class="text-muted mb-4">
                        Learn to design scalable and efficient systems
                    </p>
                    <div class="mb-3">
                        <small class="text-muted">50+ Problems</small>
                    </div>
                    <a href="#" class="btn btn-outline-secondary">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Problems -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-clock text-primary me-2"></i>
                        Recent Problems
                    </h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <thead>
                                <tr class="text-muted">
                                    <th>Problem</th>
                                    <th>Difficulty</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="fw-medium">Two Sum</div>
                                        <small class="text-muted">Find two numbers that add up to target</small>
                                    </td>
                                    <td><span class="badge bg-success">Easy</span></td>
                                    <td><small class="text-muted">Array</small></td>
                                    <td><i class="fas fa-check-circle text-success"></i> Solved</td>
                                    <td><a href="#" class="btn btn-sm btn-outline-primary">Review</a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="fw-medium">Valid Parentheses</div>
                                        <small class="text-muted">Check if parentheses are balanced</small>
                                    </td>
                                    <td><span class="badge bg-success">Easy</span></td>
                                    <td><small class="text-muted">Stack</small></td>
                                    <td><i class="fas fa-times-circle text-danger"></i> Attempted</td>
                                    <td><a href="#" class="btn btn-sm btn-outline-primary">Retry</a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="fw-medium">Merge Two Sorted Lists</div>
                                        <small class="text-muted">Merge two sorted linked lists</small>
                                    </td>
                                    <td><span class="badge bg-warning text-dark">Medium</span></td>
                                    <td><small class="text-muted">Linked List</small></td>
                                    <td><i class="fas fa-circle text-muted"></i> Not Started</td>
                                    <td><a href="#" class="btn btn-sm btn-primary">Solve</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="row">
        <div class="col-12">
            <div class="card bg-gradient text-white text-center" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                <div class="card-body py-5">
                    <h3 class="fw-bold mb-3">Start Your Daily Coding Challenge!</h3>
                    <p class="lead mb-4">Maintain your coding streak and improve your problem-solving skills every day.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="#" class="btn btn-light btn-lg">
                            <i class="fas fa-play me-2"></i>
                            Daily Challenge
                        </a>
                        <a href="{{ route('dashboard') }}" class="btn btn-outline-light btn-lg">
                            <i class="fas fa-home me-2"></i>
                            Back to Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.hover-lift {
    transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
    transform: translateY(-5px);
}
</style>
@endsection
