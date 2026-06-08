@extends('layouts.app')

@section('title', 'DSA Contests - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 class="h2">🏆 DSA Contests</h1>
                    <p class="text-muted">Compete with developers worldwide</p>
                </div>
                <div>
                    <a href="{{ route('dsa.practice') }}" class="btn btn-outline-secondary me-2">
                        <i class="fas fa-code me-1"></i> Practice
                    </a>
                    <button class="btn btn-primary">
                        <i class="fas fa-plus me-1"></i> Create Contest
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Contest Tabs -->
    <div class="row mb-4">
        <div class="col-12">
            <ul class="nav nav-pills" id="contestTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="upcoming-tab" data-bs-toggle="pill" data-bs-target="#upcoming" type="button" role="tab">
                        <i class="fas fa-clock me-1"></i> Upcoming Contests
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="live-tab" data-bs-toggle="pill" data-bs-target="#live" type="button" role="tab">
                        <i class="fas fa-broadcast-tower me-1"></i> Live Contests
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="past-tab" data-bs-toggle="pill" data-bs-target="#past" type="button" role="tab">
                        <i class="fas fa-history me-1"></i> Past Contests
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="my-contests-tab" data-bs-toggle="pill" data-bs-target="#my-contests" type="button" role="tab">
                        <i class="fas fa-user me-1"></i> My Contests
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div class="tab-content" id="contestTabsContent">
        <!-- Upcoming Contests -->
        <div class="tab-pane fade show active" id="upcoming" role="tabpanel">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Weekly Challenge #47</h5>
                            <span class="badge bg-warning">Upcoming</span>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Test your skills with medium-level algorithm problems.</p>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Start Time</small>
                                    <p class="mb-0"><strong>Aug 22, 2025 10:00 AM</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Duration</small>
                                    <p class="mb-0"><strong>2 hours</strong></p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Participants</small>
                                    <p class="mb-0"><strong>1,234 registered</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Problems</small>
                                    <p class="mb-0"><strong>4 problems</strong></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-trophy text-warning me-1"></i>
                                    <small>Prize: $500</small>
                                </div>
                                <button class="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Algorithm Masters Cup</h5>
                            <span class="badge bg-warning">Upcoming</span>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Advanced algorithmic contest for experienced developers.</p>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Start Time</small>
                                    <p class="mb-0"><strong>Aug 25, 2025 2:00 PM</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Duration</small>
                                    <p class="mb-0"><strong>3 hours</strong></p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Participants</small>
                                    <p class="mb-0"><strong>567 registered</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Problems</small>
                                    <p class="mb-0"><strong>6 problems</strong></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-trophy text-warning me-1"></i>
                                    <small>Prize: $2000</small>
                                </div>
                                <button class="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Beginner's Contest #12</h5>
                            <span class="badge bg-success">Open for All</span>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Perfect for beginners to get started with competitive programming.</p>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Start Time</small>
                                    <p class="mb-0"><strong>Aug 23, 2025 6:00 PM</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Duration</small>
                                    <p class="mb-0"><strong>1.5 hours</strong></p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Participants</small>
                                    <p class="mb-0"><strong>2,156 registered</strong></p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Problems</small>
                                    <p class="mb-0"><strong>3 problems</strong></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-certificate text-success me-1"></i>
                                    <small>Certificate</small>
                                </div>
                                <button class="btn btn-success">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Live Contests -->
        <div class="tab-pane fade" id="live" role="tabpanel">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header bg-danger text-white">
                            <h5 class="mb-0">
                                <i class="fas fa-broadcast-tower me-2"></i>
                                Live Contest: Dynamic Programming Challenge
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <div class="text-center">
                                        <h4 class="text-danger mb-0">01:23:45</h4>
                                        <small class="text-muted">Time Remaining</small>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="text-center">
                                        <h4 class="mb-0">856</h4>
                                        <small class="text-muted">Participants</small>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="text-center">
                                        <h4 class="mb-0">5</h4>
                                        <small class="text-muted">Problems</small>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="text-center">
                                        <h4 class="mb-0">#127</h4>
                                        <small class="text-muted">Your Rank</small>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid">
                                <a href="#" class="btn btn-danger btn-lg">Join Contest</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Live Leaderboard</h6>
                        </div>
                        <div class="card-body">
                            <div class="leaderboard-item d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <strong>1. alice_codes</strong>
                                    <small class="text-muted d-block">5/5 solved</small>
                                </div>
                                <span class="badge bg-warning">2340 pts</span>
                            </div>
                            <div class="leaderboard-item d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <strong>2. john_dev</strong>
                                    <small class="text-muted d-block">4/5 solved</small>
                                </div>
                                <span class="badge bg-secondary">1980 pts</span>
                            </div>
                            <div class="leaderboard-item d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <strong>3. code_master</strong>
                                    <small class="text-muted d-block">4/5 solved</small>
                                </div>
                                <span class="badge bg-secondary">1856 pts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Past Contests -->
        <div class="tab-pane fade" id="past" role="tabpanel">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Contest History</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Contest Name</th>
                                    <th>Date</th>
                                    <th>Participants</th>
                                    <th>Winner</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Weekly Challenge #46</td>
                                    <td>Aug 15, 2025</td>
                                    <td>1,456</td>
                                    <td>alice_codes</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">View Results</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tree Algorithms Contest</td>
                                    <td>Aug 12, 2025</td>
                                    <td>892</td>
                                    <td>tree_master</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">View Results</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>String Manipulation Cup</td>
                                    <td>Aug 8, 2025</td>
                                    <td>1,234</td>
                                    <td>string_ninja</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">View Results</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- My Contests -->
        <div class="tab-pane fade" id="my-contests" role="tabpanel">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">My Contest Performance</h6>
                        </div>
                        <div class="card-body">
                            <div class="row text-center">
                                <div class="col-4">
                                    <h4>{{ Auth::user()->contests_participated ?? 23 }}</h4>
                                    <small class="text-muted">Participated</small>
                                </div>
                                <div class="col-4">
                                    <h4>{{ Auth::user()->contests_won ?? 3 }}</h4>
                                    <small class="text-muted">Won</small>
                                </div>
                                <div class="col-4">
                                    <h4>{{ Auth::user()->contest_rating ?? 1456 }}</h4>
                                    <small class="text-muted">Rating</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Recent Participations</h6>
                        </div>
                        <div class="card-body">
                            <div class="participation-item d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <strong>Weekly Challenge #46</strong>
                                    <small class="text-muted d-block">Rank: #23</small>
                                </div>
                                <span class="badge bg-success">+45 rating</span>
                            </div>
                            <div class="participation-item d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <strong>Tree Algorithms Contest</strong>
                                    <small class="text-muted d-block">Rank: #67</small>
                                </div>
                                <span class="badge bg-warning">-12 rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
