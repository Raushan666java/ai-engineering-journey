@extends('layouts.app')

@section('title', 'Goals - Developer Life Platform')
@section('description', 'Set, track, and achieve your career and learning goals with personalized planning.')

@section('content')
<div class="container py-4">
    <!-- Header Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h1 class="display-4 fw-bold text-dark mb-3">
                    <i class="fas fa-bullseye text-warning me-3"></i>
                    Goal Tracking
                </h1>
                <p class="lead text-muted mb-4">
                    Set ambitious goals, track your progress, and celebrate your achievements
                </p>
            </div>
        </div>
    </div>

    <!-- Goal Statistics -->
    <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-calendar-day fa-3x text-primary"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $goalStats['daily_progress'] }}%</h3>
                    <p class="text-muted mb-0">Daily Progress</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-calendar-week fa-3x text-success"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $goalStats['weekly_progress'] }}%</h3>
                    <p class="text-muted mb-0">Weekly Progress</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-calendar-alt fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $goalStats['monthly_progress'] }}%</h3>
                    <p class="text-muted mb-0">Monthly Progress</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-calendar fa-3x text-info"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $goalStats['yearly_progress'] }}%</h3>
                    <p class="text-muted mb-0">Yearly Progress</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <h5 class="fw-bold mb-4">
                        <i class="fas fa-bolt text-warning me-2"></i>
                        Quick Actions
                    </h5>
                    <div class="row g-3">
                        <div class="col-md-3">
                            <a href="#" class="btn btn-primary w-100 py-3" data-bs-toggle="modal" data-bs-target="#newGoalModal">
                                <i class="fas fa-plus mb-2 d-block"></i>
                                New Goal
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-success w-100 py-3">
                                <i class="fas fa-chart-line mb-2 d-block"></i>
                                Progress Report
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-info w-100 py-3">
                                <i class="fas fa-trophy mb-2 d-block"></i>
                                Achievements
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-warning w-100 py-3">
                                <i class="fas fa-calendar-check mb-2 d-block"></i>
                                Goal Calendar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Active Goals -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0">
                            <i class="fas fa-target text-primary me-2"></i>
                            Active Goals
                        </h5>
                        <a href="#" class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newGoalModal">
                            <i class="fas fa-plus me-1"></i>
                            New Goal
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-4">
                        <!-- Daily Goals -->
                        <div class="col-lg-4">
                            <div class="card border border-primary h-100">
                                <div class="card-header bg-primary text-white">
                                    <h6 class="mb-0">
                                        <i class="fas fa-sun me-2"></i>
                                        Daily Goals
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Code for 2 hours</span>
                                            <span class="badge bg-success">Done</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-success" style="width: 100%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Solve 3 problems</span>
                                            <span class="badge bg-warning text-dark">2/3</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-warning" style="width: 67%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Read documentation</span>
                                            <span class="badge bg-danger">Pending</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-danger" style="width: 0%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Weekly Goals -->
                        <div class="col-lg-4">
                            <div class="card border border-success h-100">
                                <div class="card-header bg-success text-white">
                                    <h6 class="mb-0">
                                        <i class="fas fa-calendar-week me-2"></i>
                                        Weekly Goals
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Complete React course</span>
                                            <span class="badge bg-primary">60%</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-primary" style="width: 60%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Build portfolio project</span>
                                            <span class="badge bg-warning text-dark">30%</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-warning" style="width: 30%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Network with developers</span>
                                            <span class="badge bg-info">5/10</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-info" style="width: 50%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Monthly Goals -->
                        <div class="col-lg-4">
                            <div class="card border border-warning h-100">
                                <div class="card-header bg-warning text-dark">
                                    <h6 class="mb-0">
                                        <i class="fas fa-calendar-alt me-2"></i>
                                        Monthly Goals
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Master JavaScript</span>
                                            <span class="badge bg-primary">45%</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-primary" style="width: 45%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Apply to 10 companies</span>
                                            <span class="badge bg-success">3/10</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-success" style="width: 30%"></div>
                                        </div>
                                    </div>
                                    <div class="goal-item mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="fw-medium">Contribute to open source</span>
                                            <span class="badge bg-info">1/5</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-info" style="width: 20%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Goal Categories -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-tags text-primary me-2"></i>
                        Goal Categories
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-code fa-2x text-primary"></i>
                                </div>
                                <h6 class="fw-bold">Coding Skills</h6>
                                <p class="text-muted mb-0">5 active goals</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-briefcase fa-2x text-success"></i>
                                </div>
                                <h6 class="fw-bold">Career</h6>
                                <p class="text-muted mb-0">3 active goals</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-graduation-cap fa-2x text-warning"></i>
                                </div>
                                <h6 class="fw-bold">Learning</h6>
                                <p class="text-muted mb-0">4 active goals</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-users fa-2x text-info"></i>
                                </div>
                                <h6 class="fw-bold">Networking</h6>
                                <p class="text-muted mb-0">2 active goals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Achievements -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-trophy text-warning me-2"></i>
                        Recent Achievements
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 bg-success bg-opacity-10 rounded">
                                <div class="me-3">
                                    <i class="fas fa-trophy fa-2x text-success"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Completed React Fundamentals</h6>
                                    <small class="text-muted">Achieved yesterday</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 bg-primary bg-opacity-10 rounded">
                                <div class="me-3">
                                    <i class="fas fa-fire fa-2x text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">7-Day Coding Streak</h6>
                                    <small class="text-muted">Achieved 2 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 bg-warning bg-opacity-10 rounded">
                                <div class="me-3">
                                    <i class="fas fa-star fa-2x text-warning"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">First Open Source Contribution</h6>
                                    <small class="text-muted">Achieved 5 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 bg-info bg-opacity-10 rounded">
                                <div class="me-3">
                                    <i class="fas fa-code fa-2x text-info"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Solved 50 Coding Problems</h6>
                                    <small class="text-muted">Achieved 1 week ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="row">
        <div class="col-12">
            <div class="card bg-gradient text-white text-center" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                <div class="card-body py-5">
                    <h3 class="fw-bold mb-3">Stay Motivated, Achieve More!</h3>
                    <p class="lead mb-4">Set clear goals, track your progress, and celebrate every milestone on your journey.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="#" class="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#newGoalModal">
                            <i class="fas fa-plus me-2"></i>
                            Set New Goal
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

<!-- New Goal Modal -->
<div class="modal fade" id="newGoalModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create New Goal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Goal Title</label>
                        <input type="text" class="form-control" placeholder="e.g., Learn React Hooks">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Category</label>
                        <select class="form-select">
                            <option>Coding Skills</option>
                            <option>Career</option>
                            <option>Learning</option>
                            <option>Networking</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Timeline</label>
                        <select class="form-select">
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" rows="3" placeholder="Describe your goal and how you'll achieve it"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Create Goal</button>
            </div>
        </div>
    </div>
</div>

<style>
.hover-lift {
    transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
    transform: translateY(-2px);
}

.goal-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;
}

.goal-item:last-child {
    border-bottom: none;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
@endsection
