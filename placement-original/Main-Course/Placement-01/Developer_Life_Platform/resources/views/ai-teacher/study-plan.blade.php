{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\study-plan.blade.php --}}
@extends('layouts.app')

@section('title', 'AI Study Plan')

@section('content')
<div class="container-fluid py-4">
    <div class="row mb-4">
        <div class="col">
            <h1 class="h3 text-primary">
                <i class="fas fa-calendar-alt me-2"></i>AI-Generated Study Plan
            </h1>
            <p class="text-muted">Personalized study schedule based on your learning profile</p>
        </div>
    </div>

    <!-- Study Schedule Overview -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <h4>{{ $studySchedule['daily_sessions'] ?? 2 }}</h4>
                    <p class="mb-0">Daily Sessions</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <h4>{{ $studySchedule['session_duration'] ?? 45 }}min</h4>
                    <p class="mb-0">Session Duration</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <h4>{{ count($studySchedule['break_intervals'] ?? [15, 30]) }}</h4>
                    <p class="mb-0">Break Intervals</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <h4>7</h4>
                    <p class="mb-0">Days/Week</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Weekly Pattern -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Weekly Study Pattern</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        @foreach(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as $day)
                            <div class="col-lg-1 col-md-3 mb-3">
                                <div class="card text-center {{ in_array($day, ['Saturday', 'Sunday']) ? 'bg-light' : '' }}">
                                    <div class="card-body p-2">
                                        <h6 class="card-title">{{ $day }}</h6>
                                        <small class="text-muted">
                                            {{ in_array($day, ['Saturday', 'Sunday']) ? '1 session' : '2 sessions' }}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Detailed Study Plan -->
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Today's Study Plan</h5>
                </div>
                <div class="card-body">
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker bg-primary"></div>
                            <div class="timeline-content">
                                <h6>09:00 - 09:45</h6>
                                <p class="text-muted mb-1">Morning Session - Data Structures</p>
                                <small class="text-muted">Arrays and Linked Lists practice</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-success"></div>
                            <div class="timeline-content">
                                <h6>09:45 - 10:00</h6>
                                <p class="text-muted mb-1">Break</p>
                                <small class="text-muted">Rest and review notes</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-primary"></div>
                            <div class="timeline-content">
                                <h6>14:00 - 14:45</h6>
                                <p class="text-muted mb-1">Afternoon Session - Algorithms</p>
                                <small class="text-muted">Sorting algorithms implementation</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-warning"></div>
                            <div class="timeline-content">
                                <h6>19:00 - 19:30</h6>
                                <p class="text-muted mb-1">Review Session</p>
                                <small class="text-muted">Quick review of today's concepts</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Learning Profile</h5>
                </div>
                <div class="card-body">
                    <h6>Learning Style</h6>
                    <p class="text-muted">{{ $learningProfile['learning_style']['primary_style'] ?? 'Visual' }}</p>
                    
                    <h6>Optimal Study Times</h6>
                    <ul class="list-unstyled">
                        @foreach($learningProfile['optimal_study_patterns'] ?? ['morning', 'afternoon'] as $time)
                            <li><i class="fas fa-clock text-primary me-2"></i>{{ ucfirst($time) }}</li>
                        @endforeach
                    </ul>
                    
                    <h6>Attention Span</h6>
                    <p class="text-muted">{{ $learningProfile['attention_span'] ?? 45 }} minutes</p>
                    
                    <h6>Learning Pace</h6>
                    <p class="text-muted">{{ ucfirst($learningProfile['learning_pace'] ?? 'moderate') }}</p>
                </div>
            </div>
            
            <div class="card mt-3">
                <div class="card-header">
                    <h5 class="card-title mb-0">Study Tips</h5>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li><i class="fas fa-lightbulb text-warning me-2"></i>Use visual diagrams for complex concepts</li>
                        <li><i class="fas fa-lightbulb text-warning me-2"></i>Take breaks every 45 minutes</li>
                        <li><i class="fas fa-lightbulb text-warning me-2"></i>Practice coding immediately after learning</li>
                        <li><i class="fas fa-lightbulb text-warning me-2"></i>Review previous day's work before starting</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.timeline {
    position: relative;
    padding-left: 30px;
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
}

.timeline-item:before {
    content: '';
    position: absolute;
    left: -23px;
    top: 0;
    bottom: -30px;
    width: 2px;
    background: #dee2e6;
}

.timeline-item:last-child:before {
    display: none;
}

.timeline-marker {
    position: absolute;
    left: -30px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.timeline-content {
    margin-left: 20px;
}
</style>
@endsection