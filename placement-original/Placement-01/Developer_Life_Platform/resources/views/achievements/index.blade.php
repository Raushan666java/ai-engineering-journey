@extends('layouts.app')

@section('title', 'Achievements - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="text-center mb-5">
                <h1 class="display-4">🏆 Achievements</h1>
                <p class="lead text-muted">Track your progress and unlock new milestones</p>
            </div>
        </div>
    </div>

    <!-- Progress Overview -->
    <div class="row mb-5">
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <i class="fas fa-trophy fa-3x text-warning mb-3"></i>
                    <h4>{{ Auth::user()->achievements_count ?? 12 }}</h4>
                    <p class="text-muted mb-0">Achievements Unlocked</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <i class="fas fa-star fa-3x text-primary mb-3"></i>
                    <h4>{{ Auth::user()->total_points ?? 1456 }}</h4>
                    <p class="text-muted mb-0">Total Points</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <i class="fas fa-fire fa-3x text-danger mb-3"></i>
                    <h4>{{ Auth::user()->study_streak ?? 7 }}</h4>
                    <p class="text-muted mb-0">Day Streak</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <i class="fas fa-percentage fa-3x text-success mb-3"></i>
                    <h4>{{ Auth::user()->completion_rate ?? 73 }}%</h4>
                    <p class="text-muted mb-0">Completion Rate</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Achievement Categories -->
    <div class="row mb-4">
        <div class="col-12">
            <ul class="nav nav-pills justify-content-center" id="achievementTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="all-tab" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab">
                        <i class="fas fa-list me-1"></i> All Achievements
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="dsa-achievements-tab" data-bs-toggle="pill" data-bs-target="#dsa-achievements" type="button" role="tab">
                        <i class="fas fa-code me-1"></i> DSA Practice
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="learning-achievements-tab" data-bs-toggle="pill" data-bs-target="#learning-achievements" type="button" role="tab">
                        <i class="fas fa-graduation-cap me-1"></i> Learning
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="project-achievements-tab" data-bs-toggle="pill" data-bs-target="#project-achievements" type="button" role="tab">
                        <i class="fas fa-project-diagram me-1"></i> Projects
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="community-achievements-tab" data-bs-toggle="pill" data-bs-target="#community-achievements" type="button" role="tab">
                        <i class="fas fa-users me-1"></i> Community
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div class="tab-content" id="achievementTabsContent">
        <!-- All Achievements -->
        <div class="tab-pane fade show active" id="all" role="tabpanel">
            <div class="row">
                <!-- Unlocked Achievements -->
                <div class="col-md-8">
                    <h4 class="mb-4">🎉 Unlocked Achievements</h4>
                    <div class="row">
                        <!-- Achievement Card 1 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-code fa-2x text-primary"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title">First Steps</h5>
                                            <p class="card-text text-muted">Solve your first DSA problem</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Unlocked</span>
                                                <span class="text-muted small">+50 XP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Achievement Card 2 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-fire fa-2x text-danger"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title">Week Warrior</h5>
                                            <p class="card-text text-muted">Maintain a 7-day study streak</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Unlocked</span>
                                                <span class="text-muted small">+100 XP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Achievement Card 3 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-graduation-cap fa-2x text-warning"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title">Quick Learner</h5>
                                            <p class="card-text text-muted">Complete your first course</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Unlocked</span>
                                                <span class="text-muted small">+200 XP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Achievement Card 4 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-rocket fa-2x text-info"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title">Speed Runner</h5>
                                            <p class="card-text text-muted">Solve 10 problems in 1 hour</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-success">Unlocked</span>
                                                <span class="text-muted small">+150 XP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 class="mb-4 mt-5">🔒 Locked Achievements</h4>
                    <div class="row">
                        <!-- Locked Achievement 1 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-crown fa-2x text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title text-muted">Problem Master</h5>
                                            <p class="card-text text-muted">Solve 100 DSA problems</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-secondary">67/100</span>
                                                <span class="text-muted small">+500 XP</span>
                                            </div>
                                            <div class="progress mt-2" style="height: 5px;">
                                                <div class="progress-bar" role="progressbar" style="width: 67%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Locked Achievement 2 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-medal fa-2x text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title text-muted">Monthly Champion</h5>
                                            <p class="card-text text-muted">Maintain a 30-day streak</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-secondary">7/30</span>
                                                <span class="text-muted small">+1000 XP</span>
                                            </div>
                                            <div class="progress mt-2" style="height: 5px;">
                                                <div class="progress-bar" role="progressbar" style="width: 23%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Locked Achievement 3 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-users fa-2x text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title text-muted">Community Hero</h5>
                                            <p class="card-text text-muted">Help 10 community members</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-secondary">3/10</span>
                                                <span class="text-muted small">+300 XP</span>
                                            </div>
                                            <div class="progress mt-2" style="height: 5px;">
                                                <div class="progress-bar" role="progressbar" style="width: 30%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Locked Achievement 4 -->
                        <div class="col-md-6 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-project-diagram fa-2x text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="card-title text-muted">Project Guru</h5>
                                            <p class="card-text text-muted">Complete 5 projects</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="badge bg-secondary">2/5</span>
                                                <span class="text-muted small">+400 XP</span>
                                            </div>
                                            <div class="progress mt-2" style="height: 5px;">
                                                <div class="progress-bar" role="progressbar" style="width: 40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Achievement Progress Sidebar -->
                <div class="col-md-4">
                    <!-- Recent Achievements -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h6 class="mb-0">🎯 Recent Achievements</h6>
                        </div>
                        <div class="card-body">
                            <div class="achievement-item d-flex align-items-center mb-3">
                                <i class="fas fa-fire text-danger me-3"></i>
                                <div>
                                    <h6 class="mb-0">Week Warrior</h6>
                                    <small class="text-muted">2 days ago</small>
                                </div>
                            </div>
                            <div class="achievement-item d-flex align-items-center mb-3">
                                <i class="fas fa-rocket text-info me-3"></i>
                                <div>
                                    <h6 class="mb-0">Speed Runner</h6>
                                    <small class="text-muted">5 days ago</small>
                                </div>
                            </div>
                            <div class="achievement-item d-flex align-items-center">
                                <i class="fas fa-graduation-cap text-warning me-3"></i>
                                <div>
                                    <h6 class="mb-0">Quick Learner</h6>
                                    <small class="text-muted">1 week ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Next Achievement -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h6 class="mb-0">🎯 Next Achievement</h6>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <i class="fas fa-crown fa-3x text-warning mb-3"></i>
                                <h5>Problem Master</h5>
                                <p class="text-muted">Solve 100 DSA problems</p>
                                <div class="progress mb-3">
                                    <div class="progress-bar" role="progressbar" style="width: 67%">67%</div>
                                </div>
                                <p class="small text-muted">33 more problems to unlock!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Achievement Categories -->
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">📊 Category Progress</h6>
                        </div>
                        <div class="card-body">
                            <div class="category-progress mb-3">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <span class="small">DSA Practice</span>
                                    <span class="small">4/8</span>
                                </div>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-primary" style="width: 50%"></div>
                                </div>
                            </div>
                            <div class="category-progress mb-3">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <span class="small">Learning</span>
                                    <span class="small">3/6</span>
                                </div>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-success" style="width: 50%"></div>
                                </div>
                            </div>
                            <div class="category-progress mb-3">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <span class="small">Projects</span>
                                    <span class="small">2/5</span>
                                </div>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" style="width: 40%"></div>
                                </div>
                            </div>
                            <div class="category-progress">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <span class="small">Community</span>
                                    <span class="small">3/7</span>
                                </div>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-info" style="width: 43%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- DSA Achievements Tab -->
        <div class="tab-pane fade" id="dsa-achievements" role="tabpanel">
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4">🔢 DSA Practice Achievements</h4>
                    <div class="row">
                        <!-- DSA specific achievements would go here -->
                        <div class="col-md-4 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body text-center">
                                    <i class="fas fa-code fa-3x text-primary mb-3"></i>
                                    <h5>First Steps</h5>
                                    <p class="text-muted">Solve your first problem</p>
                                    <span class="badge bg-success">Unlocked</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body text-center">
                                    <i class="fas fa-crown fa-3x text-muted mb-3"></i>
                                    <h5 class="text-muted">Problem Master</h5>
                                    <p class="text-muted">Solve 100 problems</p>
                                    <span class="badge bg-secondary">67/100</span>
                                </div>
                            </div>
                        </div>
                        <!-- More DSA achievements... -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Learning Achievements Tab -->
        <div class="tab-pane fade" id="learning-achievements" role="tabpanel">
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4">📚 Learning Achievements</h4>
                    <div class="row">
                        <!-- Learning specific achievements would go here -->
                        <div class="col-md-4 mb-4">
                            <div class="card achievement-card unlocked">
                                <div class="card-body text-center">
                                    <i class="fas fa-graduation-cap fa-3x text-warning mb-3"></i>
                                    <h5>Quick Learner</h5>
                                    <p class="text-muted">Complete first course</p>
                                    <span class="badge bg-success">Unlocked</span>
                                </div>
                            </div>
                        </div>
                        <!-- More learning achievements... -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Achievements Tab -->
        <div class="tab-pane fade" id="project-achievements" role="tabpanel">
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4">🚀 Project Achievements</h4>
                    <div class="row">
                        <!-- Project specific achievements would go here -->
                        <div class="col-md-4 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body text-center">
                                    <i class="fas fa-project-diagram fa-3x text-muted mb-3"></i>
                                    <h5 class="text-muted">Project Guru</h5>
                                    <p class="text-muted">Complete 5 projects</p>
                                    <span class="badge bg-secondary">2/5</span>
                                </div>
                            </div>
                        </div>
                        <!-- More project achievements... -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Community Achievements Tab -->
        <div class="tab-pane fade" id="community-achievements" role="tabpanel">
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4">👥 Community Achievements</h4>
                    <div class="row">
                        <!-- Community specific achievements would go here -->
                        <div class="col-md-4 mb-4">
                            <div class="card achievement-card locked">
                                <div class="card-body text-center">
                                    <i class="fas fa-users fa-3x text-muted mb-3"></i>
                                    <h5 class="text-muted">Community Hero</h5>
                                    <p class="text-muted">Help 10 members</p>
                                    <span class="badge bg-secondary">3/10</span>
                                </div>
                            </div>
                        </div>
                        <!-- More community achievements... -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.achievement-card.unlocked {
    border-left: 4px solid #28a745;
}

.achievement-card.locked {
    border-left: 4px solid #6c757d;
    opacity: 0.7;
}

.achievement-icon {
    min-width: 50px;
}

.category-progress .progress {
    border-radius: 3px;
}
</style>
@endsection
