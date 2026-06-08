@extends('layouts.app')

@section('title', 'Goals & Tracking - Developer Life Platform')

@section('content')
<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 sidebar">
            <div class="position-sticky pt-3">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Goals & Tracking</span>
                </h6>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ route('goals.index') }}">
                            <i class="fas fa-bullseye"></i> Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('goals.create') }}">
                            <i class="fas fa-plus"></i> Create Goal
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterGoals('active')">
                            <i class="fas fa-play"></i> Active Goals
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterGoals('completed')">
                            <i class="fas fa-check"></i> Completed
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showAnalytics()">
                            <i class="fas fa-chart-bar"></i> Analytics
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">
                    <i class="fas fa-bullseye text-primary"></i> Goals & Tracking
                </h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="refreshGoals()">
                            <i class="fas fa-sync-alt"></i> Refresh
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="exportGoals()">
                            <i class="fas fa-download"></i> Export
                        </button>
                    </div>
                    <a href="{{ route('goals.create') }}" class="btn btn-sm btn-primary">
                        <i class="fas fa-plus"></i> Create New Goal
                    </a>
                </div>
            </div>

            <!-- Goals Overview Cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Goals
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $stats['total_goals'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-bullseye fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Completed Goals
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $stats['completed_goals'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-check-circle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Active Goals
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $stats['active_goals'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-play-circle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Weekly Progress
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format($stats['this_week_progress'] ?? 0, 1) }}%</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-chart-line fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Goals List and Progress -->
            <div class="row mb-4">
                <div class="col-lg-8">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Your Goals</h6>
                            <div class="dropdown">
                                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="goalsFilter" data-bs-toggle="dropdown">
                                    Filter Goals
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" onclick="filterGoals('all')">All Goals</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="filterGoals('active')">Active</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="filterGoals('completed')">Completed</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="filterGoals('paused')">Paused</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="goalsList">
                                @if(isset($goals) && count($goals) > 0)
                                    @foreach($goals as $goal)
                                    <div class="goal-card mb-3 p-3 border rounded" data-status="{{ $goal->status }}">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <h6 class="mb-1 fw-bold">{{ $goal->title }}</h6>
                                                <p class="mb-2 text-muted small">{{ Str::limit($goal->description, 100) }}</p>
                                                <div class="d-flex align-items-center gap-3">
                                                    <span class="badge bg-{{ $goal->priority === 'high' ? 'danger' : ($goal->priority === 'medium' ? 'warning' : 'success') }}">
                                                        {{ ucfirst($goal->priority) }}
                                                    </span>
                                                    <small class="text-muted">
                                                        <i class="fas fa-calendar"></i> Due: {{ \Carbon\Carbon::parse($goal->target_date)->format('M d, Y') }}
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="progress mb-2" style="height: 20px;">
                                                    <div class="progress-bar bg-{{ $goal->progress >= 75 ? 'success' : ($goal->progress >= 50 ? 'warning' : 'info') }}" 
                                                         role="progressbar" 
                                                         style="width: {{ $goal->progress }}%"
                                                         aria-valuenow="{{ $goal->progress }}" 
                                                         aria-valuemin="0" 
                                                         aria-valuemax="100">
                                                        {{ $goal->progress }}%
                                                    </div>
                                                </div>
                                                <small class="text-muted">
                                                    {{ $goal->completed_tasks ?? 0 }}/{{ $goal->total_tasks ?? 0 }} tasks
                                                </small>
                                            </div>
                                            <div class="col-md-2 text-end">
                                                <div class="btn-group-vertical">
                                                    <a href="{{ route('goals.show', $goal->id) }}" class="btn btn-sm btn-outline-primary mb-1">
                                                        <i class="fas fa-eye"></i>
                                                    </a>
                                                    <a href="{{ route('goals.edit', $goal->id) }}" class="btn btn-sm btn-outline-secondary">
                                                        <i class="fas fa-edit"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                @else
                                    <div class="text-center py-5">
                                        <i class="fas fa-bullseye fa-3x text-muted mb-3"></i>
                                        <h5>No Goals Found</h5>
                                        <p class="text-muted">Create your first goal to start tracking your progress!</p>
                                        <a href="{{ route('goals.create') }}" class="btn btn-primary">
                                            <i class="fas fa-plus"></i> Create Goal
                                        </a>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Recent Achievements</h6>
                        </div>
                        <div class="card-body">
                            @if(isset($achievements) && count($achievements) > 0)
                                @foreach($achievements as $achievement)
                                <div class="achievement-item mb-3 p-2 bg-light rounded">
                                    <div class="d-flex align-items-center">
                                        <div class="achievement-icon me-3">
                                            <i class="fas fa-trophy text-warning"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1 small fw-bold">{{ $achievement->title }}</h6>
                                            <small class="text-muted">{{ \Carbon\Carbon::parse($achievement->earned_at)->diffForHumans() }}</small>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @else
                                <p class="text-muted text-center">No achievements yet. Keep working on your goals!</p>
                            @endif
                        </div>
                    </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Progress This Week</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="weeklyProgressChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Goal Analytics -->
            <div class="row mb-4">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Goal Completion Rate</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="completionRateChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Goals by Category</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="categoryChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Upcoming Deadlines -->
            <div class="row">
                <div class="col-12">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Upcoming Deadlines</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Goal</th>
                                            <th>Progress</th>
                                            <th>Deadline</th>
                                            <th>Priority</th>
                                            <th>Days Left</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if(isset($goals) && count($goals) > 0)
                                            @foreach($goals->where('status', 'active')->sortBy('target_date') as $goal)
                                            @php
                                                $daysLeft = \Carbon\Carbon::parse($goal->target_date)->diffInDays(now(), false);
                                                $isOverdue = $daysLeft < 0;
                                            @endphp
                                            <tr class="{{ $isOverdue ? 'table-danger' : ($daysLeft <= 7 ? 'table-warning' : '') }}">
                                                <td>{{ $goal->title }}</td>
                                                <td>
                                                    <div class="progress" style="height: 20px;">
                                                        <div class="progress-bar bg-{{ $goal->progress >= 75 ? 'success' : ($goal->progress >= 50 ? 'warning' : 'info') }}" 
                                                             role="progressbar" 
                                                             style="width: {{ $goal->progress }}%">
                                                            {{ $goal->progress }}%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{{ \Carbon\Carbon::parse($goal->target_date)->format('M d, Y') }}</td>
                                                <td>
                                                    <span class="badge bg-{{ $goal->priority === 'high' ? 'danger' : ($goal->priority === 'medium' ? 'warning' : 'success') }}">
                                                        {{ ucfirst($goal->priority) }}
                                                    </span>
                                                </td>
                                                <td>
                                                    @if($isOverdue)
                                                        <span class="text-danger fw-bold">{{ abs($daysLeft) }} days overdue</span>
                                                    @else
                                                        {{ $daysLeft }} days
                                                    @endif
                                                </td>
                                                <td>
                                                    <a href="{{ route('goals.show', $goal->id) }}" class="btn btn-sm btn-primary">View</a>
                                                </td>
                                            </tr>
                                            @endforeach
                                        @else
                                            <tr>
                                                <td colspan="6" class="text-center text-muted">No active goals with deadlines</td>
                                            </tr>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
$(document).ready(function() {
    initializeCharts();
});

function initializeCharts() {
    // Weekly Progress Chart
    const ctx1 = document.getElementById('weeklyProgressChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Progress %',
                data: [10, 25, 35, 50, 65, 75, 80],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Completion Rate Chart
    const ctx2 = document.getElementById('completionRateChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Not Started'],
            datasets: [{
                data: [{{ $stats['completed_goals'] ?? 0 }}, {{ $stats['active_goals'] ?? 0 }}, {{ ($stats['total_goals'] ?? 0) - ($stats['completed_goals'] ?? 0) - ($stats['active_goals'] ?? 0) }}],
                backgroundColor: [
                    '#1cc88a',
                    '#f6c23e',
                    '#e74a3b'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Category Chart
    const ctx3 = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Learning', 'Skill', 'Project', 'Career'],
            datasets: [{
                label: 'Goals',
                data: [5, 3, 2, 4],
                backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#36b9cc',
                    '#f6c23e'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function filterGoals(status) {
    const goalCards = document.querySelectorAll('.goal-card');
    
    goalCards.forEach(card => {
        if (status === 'all' || card.dataset.status === status) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function refreshGoals() {
    location.reload();
}

function exportGoals() {
    // Export goals data
    window.open('{{ route("goals.export") ?? "#" }}', '_blank');
}

function showAnalytics() {
    // Show detailed analytics modal or redirect
    console.log('Showing analytics');
}
</script>
@endsection

@section('styles')
<style>
.sidebar {
    background-color: #f8f9fc;
    border-right: 1px solid #e3e6f0;
    min-height: 100vh;
}

.sidebar .nav-link {
    color: #5a5c69;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
}

.sidebar .nav-link:hover {
    color: #5a5c69;
    background-color: #eaecf4;
}

.sidebar .nav-link.active {
    color: #3a3b45;
    background-color: #e2e6ea;
}

.sidebar .nav-link i {
    margin-right: 0.5rem;
}

.goal-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
    border: 1px solid #e3e6f0;
    transition: all 0.3s ease;
}

.goal-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.achievement-item {
    transition: all 0.3s ease;
}

.achievement-item:hover {
    background-color: #e2e6ea !important;
}

.achievement-icon {
    font-size: 1.5rem;
}

.border-left-primary {
    border-left: 0.25rem solid #4e73df !important;
}

.border-left-success {
    border-left: 0.25rem solid #1cc88a !important;
}

.border-left-info {
    border-left: 0.25rem solid #36b9cc !important;
}

.border-left-warning {
    border-left: 0.25rem solid #f6c23e !important;
}

.text-gray-800 {
    color: #5a5c69 !important;
}

.text-gray-300 {
    color: #dddfeb !important;
}

#weeklyProgressChart, #completionRateChart, #categoryChart {
    height: 250px !important;
}

.table-warning {
    background-color: rgba(255, 193, 7, 0.1);
}

.table-danger {
    background-color: rgba(220, 53, 69, 0.1);
}
</style>
@endsection
