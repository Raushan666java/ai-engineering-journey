@extends('layouts.app')

@section('title', 'Leaderboard - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="text-center mb-5">
                <h1 class="display-4">🏆 Leaderboard</h1>
                <p class="lead text-muted">See how you rank among fellow developers</p>
            </div>
        </div>
    </div>

    <!-- Filter Tabs -->
    <div class="row mb-4">
        <div class="col-12">
            <ul class="nav nav-pills justify-content-center" id="leaderboardTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="overall-tab" data-bs-toggle="pill" data-bs-target="#overall" type="button" role="tab">
                        <i class="fas fa-trophy me-1"></i> Overall
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="dsa-tab" data-bs-toggle="pill" data-bs-target="#dsa" type="button" role="tab">
                        <i class="fas fa-code me-1"></i> DSA Practice
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="learning-tab" data-bs-toggle="pill" data-bs-target="#learning" type="button" role="tab">
                        <i class="fas fa-graduation-cap me-1"></i> Learning
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="projects-tab" data-bs-toggle="pill" data-bs-target="#projects" type="button" role="tab">
                        <i class="fas fa-project-diagram me-1"></i> Projects
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div class="tab-content" id="leaderboardTabsContent">
        <!-- Overall Leaderboard -->
        <div class="tab-pane fade show active" id="overall" role="tabpanel">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Overall Rankings</h5>
                            <div class="dropdown">
                                <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    This Month
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">This Week</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">All Time</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Rank</th>
                                            <th>User</th>
                                            <th>Points</th>
                                            <th>Problems</th>
                                            <th>Courses</th>
                                            <th>Streak</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-warning">
                                            <td>
                                                <span class="badge bg-warning text-dark">1</span>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">AS</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">Alice Smith</h6>
                                                        <small class="text-muted">@alice_codes</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><strong>2,847</strong></td>
                                            <td>156</td>
                                            <td>12</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>25
                                                </span>
                                            </td>
                                        </tr>
                                        <tr class="table-light">
                                            <td>
                                                <span class="badge bg-secondary">2</span>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">JD</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">John Doe</h6>
                                                        <small class="text-muted">@johndoe_dev</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><strong>2,634</strong></td>
                                            <td>142</td>
                                            <td>10</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>18
                                                </span>
                                            </td>
                                        </tr>
                                        <tr class="table-light">
                                            <td>
                                                <span class="badge bg-warning text-dark">3</span>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-success rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">MT</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">Mike Tech</h6>
                                                        <small class="text-muted">@miketech</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><strong>2,456</strong></td>
                                            <td>138</td>
                                            <td>9</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>15
                                                </span>
                                            </td>
                                        </tr>
                                        @if(Auth::check())
                                        <tr class="table-info">
                                            <td>
                                                <span class="badge bg-info">12</span>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">{{ strtoupper(substr(Auth::user()->name, 0, 2)) }}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">{{ Auth::user()->name }}</h6>
                                                        <small class="text-muted">You</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><strong>{{ Auth::user()->points ?? 1456 }}</strong></td>
                                            <td>{{ Auth::user()->problems_solved ?? 67 }}</td>
                                            <td>{{ Auth::user()->courses_enrolled ?? 4 }}</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>{{ Auth::user()->study_streak ?? 7 }}
                                                </span>
                                            </td>
                                        </tr>
                                        @endif
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-info rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">SR</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">Sarah Rodriguez</h6>
                                                        <small class="text-muted">@sarah_dev</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2,234</td>
                                            <td>125</td>
                                            <td>8</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>12
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar me-3">
                                                        <div class="bg-danger rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                                            <span class="text-white small">DJ</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">David Johnson</h6>
                                                        <small class="text-muted">@davidj</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2,156</td>
                                            <td>119</td>
                                            <td>7</td>
                                            <td>
                                                <span class="badge bg-danger">
                                                    <i class="fas fa-fire me-1"></i>9
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <!-- User Position -->
                    @auth
                    <div class="card mb-4">
                        <div class="card-header">
                            <h6 class="mb-0">Your Position</h6>
                        </div>
                        <div class="card-body text-center">
                            <div class="position-badge mb-3">
                                <span class="badge bg-info" style="font-size: 2rem;">#12</span>
                            </div>
                            <h5>{{ Auth::user()->name }}</h5>
                            <p class="text-muted mb-3">{{ Auth::user()->points ?? 1456 }} Points</p>
                            <div class="row text-center">
                                <div class="col-4">
                                    <div class="stat">
                                        <h6>{{ Auth::user()->problems_solved ?? 67 }}</h6>
                                        <small class="text-muted">Problems</small>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat">
                                        <h6>{{ Auth::user()->courses_enrolled ?? 4 }}</h6>
                                        <small class="text-muted">Courses</small>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat">
                                        <h6>{{ Auth::user()->study_streak ?? 7 }}</h6>
                                        <small class="text-muted">Streak</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endauth

                    <!-- Top Performers -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h6 class="mb-0">🔥 Top Performers</h6>
                        </div>
                        <div class="card-body">
                            <div class="top-performer mb-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-crown text-warning me-2"></i>
                                    <strong>Most Problems Solved</strong>
                                </div>
                                <small class="text-muted">Alice Smith - 156 problems</small>
                            </div>
                            <div class="top-performer mb-3">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-fire text-danger me-2"></i>
                                    <strong>Longest Streak</strong>
                                </div>
                                <small class="text-muted">Alice Smith - 25 days</small>
                            </div>
                            <div class="top-performer">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-graduation-cap text-success me-2"></i>
                                    <strong>Most Courses Completed</strong>
                                </div>
                                <small class="text-muted">Alice Smith - 12 courses</small>
                            </div>
                        </div>
                    </div>

                    <!-- Achievement Spotlight -->
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Recent Achievements</h6>
                        </div>
                        <div class="card-body">
                            <div class="achievement-item d-flex align-items-center mb-3">
                                <i class="fas fa-medal text-warning fa-2x me-3"></i>
                                <div>
                                    <h6 class="mb-0">Problem Master</h6>
                                    <small class="text-muted">Solved 100+ problems</small>
                                </div>
                            </div>
                            <div class="achievement-item d-flex align-items-center mb-3">
                                <i class="fas fa-rocket text-primary fa-2x me-3"></i>
                                <div>
                                    <h6 class="mb-0">Speed Runner</h6>
                                    <small class="text-muted">Solved 10 problems in 1 hour</small>
                                </div>
                            </div>
                            <div class="achievement-item d-flex align-items-center">
                                <i class="fas fa-users text-success fa-2x me-3"></i>
                                <div>
                                    <h6 class="mb-0">Team Player</h6>
                                    <small class="text-muted">Helped 5+ community members</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- DSA Practice Tab -->
        <div class="tab-pane fade" id="dsa" role="tabpanel">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">DSA Practice Rankings</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Rank</th>
                                    <th>User</th>
                                    <th>Problems Solved</th>
                                    <th>Difficulty Breakdown</th>
                                    <th>Accuracy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="badge bg-warning text-dark">1</span></td>
                                    <td>Alice Smith</td>
                                    <td><strong>156</strong></td>
                                    <td>
                                        <span class="badge bg-success me-1">E: 45</span>
                                        <span class="badge bg-warning me-1">M: 89</span>
                                        <span class="badge bg-danger">H: 22</span>
                                    </td>
                                    <td>94.2%</td>
                                </tr>
                                <!-- More rows would be added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Learning Tab -->
        <div class="tab-pane fade" id="learning" role="tabpanel">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Learning Progress Rankings</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Rank</th>
                                    <th>User</th>
                                    <th>Courses Completed</th>
                                    <th>Hours Studied</th>
                                    <th>Certificates</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="badge bg-warning text-dark">1</span></td>
                                    <td>Alice Smith</td>
                                    <td><strong>12</strong></td>
                                    <td>245 hrs</td>
                                    <td>8</td>
                                </tr>
                                <!-- More rows would be added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects Tab -->
        <div class="tab-pane fade" id="projects" role="tabpanel">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Project Contribution Rankings</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Rank</th>
                                    <th>User</th>
                                    <th>Projects Created</th>
                                    <th>Contributions</th>
                                    <th>Hours Tracked</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="badge bg-warning text-dark">1</span></td>
                                    <td>Mike Tech</td>
                                    <td><strong>8</strong></td>
                                    <td>142</td>
                                    <td>324 hrs</td>
                                </tr>
                                <!-- More rows would be added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
