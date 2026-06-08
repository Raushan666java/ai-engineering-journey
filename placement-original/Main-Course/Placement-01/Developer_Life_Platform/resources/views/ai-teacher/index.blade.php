@extends('layouts.app')

@section('content')
<div class="container-fluid" style="min-height: 100vh;">
    <div class="row">
        <div class="col-md-2">
            @include('layouts.partials.sidebar')
        </div>
        <div class="col-md-10">
            <div class="card shadow-lg mt-4 animate-fade-in">
                <div class="card-body text-center">
                    <div class="mb-3" style="font-size: 2.5em;">🤖</div>
                    <h1 class="display-5 fw-bold">AI Teacher</h1>
                    <p class="lead text-muted">Your intelligent learning companion!</p>
                </div>
                <div class="row text-center mb-4">
                    <div class="col-md-3">
                        <div class="stat-card p-3">
                            <div class="icon mb-2">📚</div>
                            <h6>Total Courses</h6>
                            <div class="fs-4 fw-bold">{{ $learningStats['total_courses'] ?? 0 }}</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card p-3">
                            <div class="icon mb-2">✅</div>
                            <h6>Completed Courses</h6>
                            <div class="fs-4 fw-bold">{{ $learningStats['completed_courses'] ?? 0 }}</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card p-3">
                            <div class="icon mb-2">🔥</div>
                            <h6>Current Streak</h6>
                            <div class="fs-4 fw-bold">{{ $learningStats['current_streak'] ?? 0 }} days</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card p-3">
                            <div class="icon mb-2">⏰</div>
                            <h6>Total Study Hours</h6>
                            <div class="fs-4 fw-bold">{{ $learningStats['total_study_hours'] ?? 0 }}</div>
                        </div>
                    </div>
                </div>
                <div class="row feature-grid mb-4">
                    <div class="col-md-4">
                        <div class="feature-card p-4 shadow-sm">
                            <div class="icon mb-2">💬</div>
                            <h5>Ask Questions</h5>
                            <p>Get instant answers to your coding questions.</p>
                            <a href="{{ route('ai-teacher.tutor') }}" class="btn btn-primary">Start Chat</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-card p-4 shadow-sm">
                            <div class="icon mb-2">📝</div>
                            <h5>Code Review</h5>
                            <p>Get your code reviewed and optimized by AI.</p>
                            <a href="#" class="btn btn-primary">Upload Code</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-card p-4 shadow-sm">
                            <div class="icon mb-2">🎯</div>
                            <h5>Practice Problems</h5>
                            <p>AI-generated problems based on your skill level.</p>
                            <a href="#" class="btn btn-primary">Get Problems</a>
                        </div>
                    </div>
                </div>
                <div class="card mt-4 animate-fade-in">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">🎓 Recent AI Sessions</h5>
                    </div>
                    <div class="card-body">
                        @if(isset($learningStats['performance_analytics']['recent_sessions']))
                            @foreach($learningStats['performance_analytics']['recent_sessions'] as $session)
                                <div class="activity-item d-flex align-items-center mb-3">
                                    <div class="activity-icon me-3" style="font-size: 1.5em;">{{ $session['icon'] }}</div>
                                    <div>
                                        <h6 class="mb-1">{{ $session['title'] }}</h6>
                                        <small class="text-muted">{{ $session['time'] }}</small>
                                    </div>
                                </div>
                            @endforeach
                        @else
                            <div class="activity-item d-flex align-items-center mb-3">
                                <div class="activity-icon me-3" style="font-size: 1.5em;">🤖</div>
                                <div>
                                    <h6 class="mb-1">Discussed <strong>Binary Trees</strong></h6>
                                    <small class="text-muted">2 hours ago</small>
                                </div>
                            </div>
                            <div class="activity-item d-flex align-items-center mb-3">
                                <div class="activity-icon me-3" style="font-size: 1.5em;">📝</div>
                                <div>
                                    <h6 class="mb-1">Code review for <strong>Sorting Algorithm</strong></h6>
                                    <small class="text-muted">1 day ago</small>
                                </div>
                            </div>
                            <div class="activity-item d-flex align-items-center mb-3">
                                <div class="activity-icon me-3" style="font-size: 1.5em;">🎯</div>
                                <div>
                                    <h6 class="mb-1">Solved <strong>Dynamic Programming</strong> problems</h6>
                                    <small class="text-muted">2 days ago</small>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="card shadow-sm">
                            <div class="card-header bg-light">
                                <h6 class="mb-0">🔍 Weak Areas</h6>
                            </div>
                            <div class="card-body">
                                @forelse($learningStats['weak_areas'] ?? [] as $area)
                                    <div class="mb-2">
                                        <strong>{{ $area['area'] }}</strong> (Score: {{ $area['score'] }})<br>
                                        <small class="text-muted">{{ $area['improvement_suggestion'] }}</small>
                                    </div>
                                @empty
                                    <div class="text-muted">No weak areas detected. Keep up the good work!</div>
                                @endforelse
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card shadow-sm">
                            <div class="card-header bg-light">
                                <h6 class="mb-0">🌟 Recommended Courses</h6>
                            </div>
                            <div class="card-body">
                                @forelse($learningStats['recommended_courses'] ?? [] as $rec)
                                    <div class="mb-2">
                                        <strong>{{ $rec['course']->title ?? 'Course' }}</strong>
                                        <span class="badge bg-success ms-2">{{ $rec['relevance_score'] }}%</span><br>
                                        <small class="text-muted">{{ $rec['reason'] }}</small>
                                    </div>
                                @empty
                                    <div class="text-muted">No recommendations available.</div>
                                @endforelse
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-4 shadow-sm">
                    <div class="card-header bg-light">
                        <h6 class="mb-0">🗺️ Learning Path</h6>
                    </div>
                    <div class="card-body">
                        @forelse($learningStats['learning_path'] ?? [] as $phase)
                            <div class="mb-3">
                                <strong>{{ $phase['phase'] }}</strong> <span class="text-muted">({{ $phase['duration'] }})</span>
                                <ul>
                                    <li>Skills: {{ implode(', ', $phase['skills']) }}</li>
                                    <li>Projects: {{ implode(', ', $phase['projects']) }}</li>
                                </ul>
                            </div>
                        @empty
                            <div class="text-muted">No learning path available.</div>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection