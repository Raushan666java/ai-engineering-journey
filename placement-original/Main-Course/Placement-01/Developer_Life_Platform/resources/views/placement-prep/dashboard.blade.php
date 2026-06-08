@extends('layouts.app')

@section('title', 'Placement Preparation - Developer Life Platform')

@section('content')
<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 sidebar">
            <div class="position-sticky pt-3">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Placement Prep</span>
                </h6>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ route('placement-prep.index') }}">
                            <i class="fas fa-tachometer-alt"></i> Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('placement-prep.coding-practice') }}">
                            <i class="fas fa-code"></i> Coding Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('placement-prep.interview-prep') }}">
                            <i class="fas fa-user-tie"></i> Interview Prep
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('placement-prep.company-prep') }}">
                            <i class="fas fa-building"></i> Company Prep
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showAnalytics()">
                            <i class="fas fa-chart-line"></i> Analytics
                        </a>
                    </li>
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Practice Categories</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterByCategory('arrays')">
                            <i class="fas fa-list"></i> Arrays
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterByCategory('strings')">
                            <i class="fas fa-font"></i> Strings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterByCategory('trees')">
                            <i class="fas fa-tree"></i> Trees
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="filterByCategory('graphs')">
                            <i class="fas fa-project-diagram"></i> Graphs
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">
                    <i class="fas fa-briefcase text-primary"></i> Placement Preparation Dashboard
                </h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="refreshDashboard()">
                            <i class="fas fa-sync-alt"></i> Refresh
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="exportProgress()">
                            <i class="fas fa-download"></i> Export
                        </button>
                    </div>
                    <button type="button" class="btn btn-sm btn-primary" onclick="startPractice()">
                        <i class="fas fa-play"></i> Start Practice
                    </button>
                </div>
            </div>

            <!-- Progress Overview Cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Problems Solved
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $progress['coding_problems_solved'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-code fa-2x text-gray-300"></i>
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
                                        Mock Interviews
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $progress['mock_interviews_taken'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-user-tie fa-2x text-gray-300"></i>
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
                                        Companies Prepared
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $progress['companies_prepared'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-building fa-2x text-gray-300"></i>
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
                                        Topics Completed
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $progress['interview_topics_completed'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-check-circle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions and Progress -->
            <div class="row mb-4">
                <div class="col-lg-8">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Quick Actions</h6>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="quick-action-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="action-icon me-3">
                                                <i class="fas fa-code fa-2x text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Coding Practice</h6>
                                                <p class="mb-2 text-muted small">Solve algorithmic problems</p>
                                                <a href="{{ route('placement-prep.coding-practice') }}" class="btn btn-sm btn-primary">Start</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <div class="quick-action-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="action-icon me-3">
                                                <i class="fas fa-microphone fa-2x text-success"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Mock Interview</h6>
                                                <p class="mb-2 text-muted small">Practice interview skills</p>
                                                <button class="btn btn-sm btn-success" onclick="startMockInterview()">Start</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <div class="quick-action-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="action-icon me-3">
                                                <i class="fas fa-building fa-2x text-info"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Company Research</h6>
                                                <p class="mb-2 text-muted small">Prepare for specific companies</p>
                                                <a href="{{ route('placement-prep.company-prep') }}" class="btn btn-sm btn-info">Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <div class="quick-action-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="action-icon me-3">
                                                <i class="fas fa-book fa-2x text-warning"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Study Topics</h6>
                                                <p class="mb-2 text-muted small">Review important concepts</p>
                                                <a href="{{ route('placement-prep.interview-prep') }}" class="btn btn-sm btn-warning">Study</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Overall Progress</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="overallProgressChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Practice and Upcoming Interviews -->
            <div class="row mb-4">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Recent Practice Sessions</h6>
                            <a href="{{ route('placement-prep.coding-practice') }}" class="btn btn-sm btn-primary">View All</a>
                        </div>
                        <div class="card-body">
                            @if(isset($recentPractice) && count($recentPractice) > 0)
                                @foreach($recentPractice->take(5) as $session)
                                <div class="practice-session mb-3 p-2 border rounded">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1 small fw-bold">{{ $session->problem_title ?? 'Practice Session' }}</h6>
                                            <small class="text-muted">
                                                <i class="fas fa-clock"></i> {{ \Carbon\Carbon::parse($session->created_at)->diffForHumans() }}
                                            </small>
                                        </div>
                                        <div>
                                            <span class="badge bg-{{ $session->status === 'accepted' ? 'success' : ($session->status === 'wrong_answer' ? 'danger' : 'warning') }}">
                                                {{ ucfirst(str_replace('_', ' ', $session->status ?? 'pending')) }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @else
                                <p class="text-muted text-center">No recent practice sessions. Start solving problems!</p>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Upcoming Interviews</h6>
                            <button class="btn btn-sm btn-success" onclick="scheduleInterview()">Schedule</button>
                        </div>
                        <div class="card-body">
                            @if(isset($upcomingInterviews) && count($upcomingInterviews) > 0)
                                @foreach($upcomingInterviews as $interview)
                                <div class="interview-item mb-3 p-3 bg-light rounded">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1 fw-bold">{{ $interview->company_name }}</h6>
                                            <small class="text-muted">
                                                <i class="fas fa-calendar"></i> {{ \Carbon\Carbon::parse($interview->interview_date)->format('M d, Y H:i') }}
                                            </small>
                                        </div>
                                        <div>
                                            <span class="badge bg-primary">{{ ucfirst($interview->type) }}</span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @else
                                <p class="text-muted text-center">No upcoming interviews scheduled.</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <!-- Performance Analytics -->
            <div class="row mb-4">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Problem Solving Trend</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="problemSolvingChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Difficulty Breakdown</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="difficultyChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Personalized Recommendations -->
            <div class="row">
                <div class="col-12">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Personalized Recommendations</h6>
                        </div>
                        <div class="card-body">
                            <div id="recommendationsContainer">
                                @if(isset($recommendations) && count($recommendations) > 0)
                                    <div class="row">
                                        @foreach($recommendations as $rec)
                                        <div class="col-md-4 mb-3">
                                            <div class="recommendation-card p-3 border rounded">
                                                <div class="d-flex align-items-start">
                                                    <div class="rec-icon me-3">
                                                        <i class="fas fa-{{ $rec['type'] === 'coding_practice' ? 'code' : ($rec['type'] === 'interview_prep' ? 'microphone' : 'building') }} fa-2x text-primary"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="fw-bold mb-2">{{ $rec['title'] }}</h6>
                                                        <p class="mb-2 text-muted small">{{ $rec['description'] }}</p>
                                                        <span class="badge bg-{{ $rec['priority'] === 'high' ? 'danger' : ($rec['priority'] === 'medium' ? 'warning' : 'success') }}">
                                                            {{ ucfirst($rec['priority']) }} Priority
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                @else
                                    <p class="text-muted text-center">No recommendations available. Keep practicing to get personalized suggestions!</p>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<!-- Mock Interview Modal -->
<div class="modal fade" id="mockInterviewModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Start Mock Interview</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form id="mockInterviewForm">
                    <div class="mb-3">
                        <label for="interviewType" class="form-label">Interview Type</label>
                        <select class="form-select" id="interviewType" required>
                            <option value="">Select type...</option>
                            <option value="technical">Technical</option>
                            <option value="behavioral">Behavioral</option>
                            <option value="system_design">System Design</option>
                            <option value="hr">HR Round</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="difficulty" class="form-label">Difficulty Level</label>
                        <select class="form-select" id="difficulty" required>
                            <option value="">Select difficulty...</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="duration" class="form-label">Duration (minutes)</label>
                        <select class="form-select" id="duration" required>
                            <option value="">Select duration...</option>
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">60 minutes</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="startInterview()">Start Interview</button>
            </div>
        </div>
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
    // Overall Progress Chart
    const ctx1 = document.getElementById('overallProgressChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Not Started'],
            datasets: [{
                data: [65, 25, 10],
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

    // Problem Solving Trend Chart
    const ctx2 = document.getElementById('problemSolvingChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Problems Solved',
                data: [5, 8, 12, 15],
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
                    beginAtZero: true
                }
            }
        }
    });

    // Difficulty Breakdown Chart
    const ctx3 = document.getElementById('difficultyChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Easy', 'Medium', 'Hard'],
            datasets: [{
                label: 'Problems Solved',
                data: [20, 15, 5],
                backgroundColor: [
                    '#1cc88a',
                    '#f6c23e',
                    '#e74a3b'
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

function startPractice() {
    window.location.href = '{{ route("placement-prep.coding-practice") }}';
}

function startMockInterview() {
    const modal = new bootstrap.Modal(document.getElementById('mockInterviewModal'));
    modal.show();
}

function startInterview() {
    const form = document.getElementById('mockInterviewForm');
    const formData = new FormData(form);
    
    const interviewData = {
        type: document.getElementById('interviewType').value,
        difficulty: document.getElementById('difficulty').value,
        duration: document.getElementById('duration').value
    };

    if (!interviewData.type || !interviewData.difficulty || !interviewData.duration) {
        alert('Please fill in all fields');
        return;
    }

    // Send request to start mock interview
    fetch('{{ route("placement-prep.start-mock-interview") }}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify(interviewData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.interview_id) {
            // Redirect to interview interface
            window.location.href = `/placement-prep/mock-interview/${data.interview_id}`;
        } else {
            alert('Failed to start interview. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error starting interview:', error);
        alert('Failed to start interview. Please try again.');
    });

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('mockInterviewModal'));
    modal.hide();
}

function scheduleInterview() {
    // Open interview scheduling interface
    alert('Interview scheduling feature coming soon!');
}

function filterByCategory(category) {
    // Filter practice problems by category
    window.location.href = `{{ route("placement-prep.coding-practice") }}?category=${category}`;
}

function showAnalytics() {
    // Show detailed analytics
    window.location.href = '{{ route("placement-prep.analytics") ?? "#" }}';
}

function refreshDashboard() {
    location.reload();
}

function exportProgress() {
    // Export progress data
    window.open('{{ route("placement-prep.export") ?? "#" }}', '_blank');
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

.quick-action-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
    border: 1px solid #e3e6f0;
    transition: all 0.3s ease;
}

.quick-action-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.practice-session {
    background: linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%);
    transition: all 0.3s ease;
}

.practice-session:hover {
    background-color: #e2e6ea;
}

.interview-item {
    transition: all 0.3s ease;
}

.interview-item:hover {
    background-color: #e2e6ea !important;
}

.recommendation-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
    border: 1px solid #e3e6f0;
    transition: all 0.3s ease;
}

.recommendation-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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

#overallProgressChart, #problemSolvingChart, #difficultyChart {
    height: 250px !important;
}

.action-icon, .rec-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
@endsection
