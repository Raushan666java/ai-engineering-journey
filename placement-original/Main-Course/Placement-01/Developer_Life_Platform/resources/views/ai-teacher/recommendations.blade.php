{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\recommendations.blade.php --}}

@extends('layouts.app')

@section('title', 'AI Course Recommendations')

@section('content')
<div class="container-fluid py-4">
<div class="container-fluid px-4">
    <!-- Header Section -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="h3 mb-0 text-gray-800">
                        <i class="fas fa-robot text-primary me-2"></i>
                        AI Course Recommendations
                    </h1>
                    <p class="text-muted mt-1">Personalized learning paths powered by artificial intelligence</p>
                </div>
                <div>
                    <button class="btn btn-outline-primary me-2" onclick="refreshRecommendations()">
                        <i class="fas fa-sync-alt me-1"></i>
                        Refresh
                    </button>
                    <a href="{{ route('ai-teacher.assessment') }}" class="btn btn-primary">
                        <i class="fas fa-clipboard-check me-1"></i>
                        Take Assessment
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Learning Profile Overview -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-gradient-primary text-white">
                    <h5 class="mb-0">
                        <i class="fas fa-user-graduate me-2"></i>
                        Your Learning Profile
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="profile-metric">
                                    <h4 class="text-primary mb-1">
                                        {{ ucfirst($learningProfile['learning_style']['primary_style'] ?? 'Visual') }}
                                    </div>
                                    <small class="text-muted">Primary Learning Style</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="profile-metric">
                                    <h4 class="text-info mb-1">
                                        {{ ucfirst($learningProfile['learning_pace'] ?? 'Moderate') }}
                                    </div>
                                    <small class="text-muted">Learning Pace</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="profile-metric">
                                    <h4 class="text-success mb-1">
                                        {{ $learningProfile['attention_span'] ?? 45 }} min
                                    </div>
                                    <small class="text-muted">Attention Span</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="profile-metric">
                                    <h4 class="text-warning mb-1">
                                        {{ ucfirst($learningProfile['cognitive_profile'] ?? 'Analytical') }}
                                    </div>
                                    <small class="text-muted">Cognitive Type</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- AI Recommendations -->
    <div class="row">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-light border-bottom">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">
                            <i class="fas fa-brain text-primary me-2"></i>
                            AI-Powered Course Recommendations
                        </h5>
                        <span class="badge bg-primary">{{ count($recommendations) }} Courses Found</span>
                    </div>
                </div>
                <div class="card-body p-0">
                    @if(empty($recommendations))
                        <!-- Empty State -->
                        <div class="text-center py-5">
                            <div class="mb-4">
                                <i class="fas fa-robot fa-4x text-muted"></i>
                            </div>
                            <h4 class="text-muted">No Recommendations Available</h4>
                            <p class="text-muted mb-4">
                                Take our AI assessment to get personalized course recommendations tailored to your learning style.
                            </p>
                            <a href="{{ route('ai-teacher.assessment') }}" class="btn btn-primary">
                                <i class="fas fa-clipboard-check me-2"></i>
                                Take Assessment Now
                            </a>
                        </div>
                    @else
                        <!-- Recommendations List -->
                        <div class="recommendations-container">
                            @foreach($recommendations as $index => $recommendation)
                                <div class="recommendation-item border-bottom {{ $index === 0 ? 'border-top-0' : '' }}">
                                    <div class="p-4">
                                        <div class="row align-items-center">
                                            <!-- Course Info -->
                                            <div class="col-md-8">
                                                <div class="d-flex align-items-start">
                                                    <!-- Relevance Score Badge -->
                                                    <div class="me-3">
                                                        <div class="relevance-badge">
                                                            <div class="circular-progress" data-percentage="{{ round($recommendation['relevance_score'] * 100) }}">
                                                                <span class="percentage">{{ round($recommendation['relevance_score'] * 100) }}%</span>
                                                            </div>
                                                            <small class="text-muted d-block text-center mt-1">Match</small>
                                                        </div>
                                                    </div>

                                                    <!-- Course Details -->
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <h5 class="mb-0 me-2">{{ $recommendation['course']->title }}</h5>
                                                            <span class="badge bg-{{ $recommendation['difficulty_match'] > 0.8 ? 'success' : ($recommendation['difficulty_match'] > 0.6 ? 'warning' : 'secondary') }}">
                                                                {{ ucfirst($recommendation['course']->level ?? 'Beginner') }}
                                                            </span>
                                                        </div>

                                                        <p class="text-muted mb-2">{{ Str::limit($recommendation['course']->description ?? 'Comprehensive course designed to enhance your programming skills.', 150) }}</p>

                                                        <!-- Course Metadata -->
                                                        <div class="d-flex align-items-center text-sm text-muted mb-3">
                                                            <span class="me-3">
                                                                <i class="fas fa-clock me-1"></i>
                                                                {{ $recommendation['estimated_completion_time'] }}
                                                            </span>
                                                            <span class="me-3">
                                                                <i class="fas fa-user me-1"></i>
                                                                {{ $recommendation['course']->instructor->name ?? 'Expert Instructor' }}
                                                            </span>
                                                            <span class="me-3">
                                                                <i class="fas fa-tag me-1"></i>
                                                                {{ $recommendation['course']->category->name ?? 'Programming' }}
                                                            </span>
                                                        </div>

                                                        <!-- AI Reasoning -->
                                                        <div class="ai-reasoning bg-light rounded p-3 mb-3">
                                                            <h6 class="text-primary mb-2">
                                                                <i class="fas fa-lightbulb me-1"></i>
                                                                Why This Course?
                                                            </h6>
                                                            <p class="mb-0 small">{{ $recommendation['ai_reasoning'] }}</p>
                                                        </div>

                                                        <!-- Learning Benefits -->
                                                        @if(!empty($recommendation['learning_benefits']['skill_development']))
                                                            <div class="mb-3">
                                                                <h6 class="text-secondary mb-2">Skills You'll Develop:</h6>
                                                                <div class="d-flex flex-wrap gap-1">
                                                                    @foreach($recommendation['learning_benefits']['skill_development'] as $skill)
                                                                        <span class="badge bg-light text-dark">{{ ucfirst(str_replace('_', ' ', $skill)) }}</span>
                                                                    @endforeach
                                                                </div>
                                                            </div>
                                                        @endif

                                                        <!-- Personalized Methodology -->
                                                        <div class="methodology-preview">
                                                            <h6 class="text-info mb-2">
                                                                <i class="fas fa-cogs me-1"></i>
                                                                Personalized Approach:
                                                            </h6>
                                                            <div class="row text-sm">
                                                                <div class="col-6">
                                                                    <strong>Primary:</strong> {{ ucfirst(str_replace('_', ' ', $recommendation['personalized_methodology']['primary_approach'])) }}
                                                                </div>
                                                                <div class="col-6">
                                                                    <strong>Pace:</strong> {{ ucfirst($recommendation['personalized_methodology']['recommended_pace']) }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Action Buttons -->
                                            <div class="col-md-4">
                                                <div class="text-end">
                                                    <div class="btn-group-vertical w-100" role="group">
                                                        <button type="button" 
                                                                class="btn btn-primary mb-2"
                                                                onclick="enrollInCourse({{ $recommendation['course']->id }})">
                                                            <i class="fas fa-plus me-1"></i>
                                                            Enroll Now
                                                        </button>
                                                        
                                                        <button type="button" 
                                                                class="btn btn-outline-secondary mb-2"
                                                                onclick="viewCourseDetails({{ $recommendation['course']->id }})">
                                                            <i class="fas fa-eye me-1"></i>
                                                            View Details
                                                        </button>
                                                        
                                                        <button type="button" 
                                                                class="btn btn-outline-info"
                                                                onclick="showLearningPath({{ $recommendation['course']->id }})">
                                                            <i class="fas fa-route me-1"></i>
                                                            Learning Path
                                                        </button>
                                                    </div>

                                                    <!-- Prerequisite Status -->
                                                    @if($recommendation['prerequisite_assessment']['met'])
                                                        <div class="mt-3 text-center">
                                                            <span class="badge bg-success">
                                                                <i class="fas fa-check me-1"></i>
                                                                Prerequisites Met
                                                            </span>
                                                        </div>
                                                    @else
                                                        <div class="mt-3 text-center">
                                                            <span class="badge bg-warning">
                                                                <i class="fas fa-exclamation-triangle me-1"></i>
                                                                Missing Prerequisites
                                                            </span>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="row mt-4">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-light">
                    <h5 class="mb-0">
                        <i class="fas fa-rocket text-primary me-2"></i>
                        Quick Actions
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <a href="{{ route('ai-teacher.chat') }}" class="btn btn-outline-primary w-100 mb-3">
                                <i class="fas fa-comments mb-2 d-block"></i>
                                Ask AI Tutor
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="{{ route('ai-teacher.study-plan') }}" class="btn btn-outline-success w-100 mb-3">
                                <i class="fas fa-calendar-alt mb-2 d-block"></i>
                                Study Schedule
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="{{ route('ai-teacher.analytics') }}" class="btn btn-outline-info w-100 mb-3">
                                <i class="fas fa-chart-line mb-2 d-block"></i>
                                Performance Analytics
                            </a>
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-outline-warning w-100 mb-3" onclick="updateLearningProfile()">
                                <i class="fas fa-user-cog mb-2 d-block"></i>
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Learning Path Modal -->
<div class="modal fade" id="learningPathModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-route me-2"></i>
                    Personalized Learning Path
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body" id="learningPathContent">
                <!-- Content will be loaded dynamically -->
            </div>
        </div>
    </div>
</div>

<!-- Course Details Modal -->
<div class="modal fade" id="courseDetailsModal" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-book me-2"></i>
                    Course Details
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body" id="courseDetailsContent">
                <!-- Content will be loaded dynamically -->
            </div>
        </div>
    </div>
</div>
</div>
@endsection

@push('styles')
<style>
/* Custom Styles for AI Recommendations */
.profile-metric h4 {
    font-weight: 600;
}

.recommendation-item {
    transition: all 0.3s ease;
}

.recommendation-item:hover {
    background-color: #f8f9fa;
}

.relevance-badge {
    min-width: 80px;
}

.circular-progress {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: conic-gradient(
        #28a745 0deg,
        #28a745 calc(var(--percentage) * 3.6deg),
        #e9ecef calc(var(--percentage) * 3.6deg),
        #e9ecef 360deg
    );
    display: flex;
    align-items: center;
    justify-content: center;
}

.circular-progress::before {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: white;
}

.circular-progress .percentage {
    position: relative;
    font-size: 11px;
    font-weight: bold;
    z-index: 1;
}

.ai-reasoning {
    border-left: 4px solid #007bff;
}

.methodology-preview {
    font-size: 0.9rem;
}

.btn-group-vertical .btn {
    border-radius: 0.375rem !important;
}

.text-sm {
    font-size: 0.875rem;
}

.gap-1 > * {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
}

/* Progress Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.recommendation-item {
    animation: fadeInUp 0.5s ease forwards;
}

.recommendation-item:nth-child(1) { animation-delay: 0.1s; }
.recommendation-item:nth-child(2) { animation-delay: 0.2s; }
.recommendation-item:nth-child(3) { animation-delay: 0.3s; }
.recommendation-item:nth-child(4) { animation-delay: 0.4s; }
.recommendation-item:nth-child(5) { animation-delay: 0.5s; }

/* Loading States */
.loading {
    opacity: 0.6;
    pointer-events: none;
}

.spinner-border-sm {
    width: 1rem;
    height: 1rem;
}
</style>
@endpush


{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\recommendations.blade.php --}}

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize circular progress bars
    document.querySelectorAll('.circular-progress').forEach(function(element) {
        const percentage = element.getAttribute('data-percentage');
        element.style.setProperty('--percentage', percentage);
    });

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// Refresh recommendations
function refreshRecommendations() {
    const btn = document.querySelector('button[onclick="refreshRecommendations()"]');
    const originalHtml = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Refreshing...';
    btn.disabled = true;
    
    fetch('{{ route("ai-teacher.recommendations.refresh") }}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            showAlert('error', 'Failed to refresh recommendations');
        }
    })
    .catch(error => {
        showAlert('error', 'An error occurred while refreshing recommendations');
    })
    .finally(() => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
    });
}

// Enroll in course
function enrollInCourse(courseId) {
    const btn = document.querySelector(`button[onclick="enrollInCourse(${courseId})"]`);
    const originalHtml = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Enrolling...';
    btn.disabled = true;
    
    const formData = new FormData();
    formData.append('course_id', courseId);
    formData.append('_token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
    
    fetch('{{ route("ai-teacher.assign-course") }}', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showAlert('success', data.message);
            // Update UI to show enrolled state
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-success');
            btn.innerHTML = '<i class="fas fa-check me-1"></i> Enrolled';
            btn.disabled = true;
        } else {
            showAlert('error', data.message || 'Failed to enroll in course');
        }
    })
    .catch(error => {
        showAlert('error', 'An error occurred while enrolling');
    })
    .finally(() => {
        if (!btn.classList.contains('btn-success')) {
            btn.innerHTML = originalHtml;
            btn.disabled = false;
        }
    });
}

// View course details
function viewCourseDetails(courseId) {
    const content = document.getElementById('courseDetailsContent');
    content.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2 text-muted">Loading course details...</p>
        </div>
    `;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('courseDetailsModal'));
    modal.show();
    
    fetch(`/api/courses/${courseId}/details`)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            content.innerHTML = buildCourseDetailsHtml(data.course);
        } else {
            content.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    Failed to load course details
                </div>
            `;
        }
    })
    .catch(error => {
        content.innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-triangle me-2"></i>
                An error occurred while loading course details
            </div>
        `;
    });
}

// Show learning path
function showLearningPath(courseId) {
    const content = document.getElementById('learningPathContent');
    content.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2 text-muted">Generating personalized learning path...</p>
        </div>
    `;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('learningPathModal'));
    modal.show();
    
    fetch(`/api/ai-teacher/learning-path/${courseId}`)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            content.innerHTML = buildLearningPathHtml(data.path);
        } else {
            content.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    Failed to generate learning path
                </div>
            `;
        }
    })
    .catch(error => {
        content.innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-triangle me-2"></i>
                An error occurred while generating learning path
            </div>
        `;
    });
}

// Update learning profile
function updateLearningProfile() {
    window.location.href = '{{ route("ai-teacher.assessment") }}';
}

// Build course details HTML
function buildCourseDetailsHtml(course) {
    const modulesHtml = course.modules ? 
        course.modules.map(module => `
            <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${module.title}</h6>
                    <small>${module.duration || '45 min'}</small>
                </div>
                <p class="mb-1">${module.description}</p>
            </div>
        `).join('') : 
        '<p class="text-muted">Module details not available</p>';

    return `
        <div class="row">
            <div class="col-md-8">
                <h3>${course.title}</h3>
                <p class="text-muted">${course.description}</p>
                
                <h5 class="mt-4">Course Curriculum</h5>
                <div class="list-group">
                    ${modulesHtml}
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">Course Info</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li><strong>Level:</strong> ${course.level || 'Beginner'}</li>
                            <li><strong>Duration:</strong> ${course.duration || '40'} hours</li>
                            <li><strong>Category:</strong> ${course.category}</li>
                            <li><strong>Instructor:</strong> ${course.instructor}</li>
                        </ul>
                        
                        <hr>
                        
                        <button class="btn btn-primary w-100" onclick="enrollInCourse(${course.id})">
                            <i class="fas fa-plus me-1"></i>
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Build learning path HTML
function buildLearningPathHtml(path) {
    const milestonesHtml = path.milestones ? 
        path.milestones.map((milestone, index) => `
            <div class="timeline-item">
                <div class="timeline-marker">
                    <div class="timeline-marker-icon">
                        <i class="fas fa-${milestone.icon || 'book'}"></i>
                    </div>
                </div>
                <div class="timeline-content">
                    <h6 class="timeline-title">${milestone.title}</h6>
                    <p class="timeline-description">${milestone.description}</p>
                    <small class="text-muted">
                        <i class="fas fa-clock me-1"></i>
                        ${milestone.estimated_time || '1 week'}
                    </small>
                </div>
            </div>
        `).join('') : `
            <div class="timeline-item">
                <div class="timeline-marker">
                    <div class="timeline-marker-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="timeline-content">
                    <h6 class="timeline-title">Start Learning</h6>
                    <p class="timeline-description">Begin with fundamental concepts and build your knowledge step by step.</p>
                    <small class="text-muted">
                        <i class="fas fa-clock me-1"></i>
                        Week 1-2
                    </small>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-marker">
                    <div class="timeline-marker-icon">
                        <i class="fas fa-code"></i>
                    </div>
                </div>
                <div class="timeline-content">
                    <h6 class="timeline-title">Practice & Apply</h6>
                    <p class="timeline-description">Reinforce your learning through hands-on coding exercises and projects.</p>
                    <small class="text-muted">
                        <i class="fas fa-clock me-1"></i>
                        Week 3-4
                    </small>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-marker">
                    <div class="timeline-marker-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                </div>
                <div class="timeline-content">
                    <h6 class="timeline-title">Master & Advance</h6>
                    <p class="timeline-description">Complete advanced challenges and earn your certification.</p>
                    <small class="text-muted">
                        <i class="fas fa-clock me-1"></i>
                        Week 5-6
                    </small>
                </div>
            </div>
        `;

    return `
        <div class="learning-path-timeline">
            <h5 class="mb-4">Your Personalized Learning Journey</h5>
            
            <div class="timeline">
                ${milestonesHtml}
            </div>
            
            <div class="mt-4 text-center">
                <button class="btn btn-primary" onclick="bootstrap.Modal.getInstance(document.getElementById('learningPathModal')).hide(); enrollInCourse(${path.course_id || 1});">
                    <i class="fas fa-rocket me-1"></i>
                    Start This Journey
                </button>
            </div>
        </div>
        
        <style>
        .timeline {
            position: relative;
            padding-left: 30px;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #e9ecef;
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 30px;
        }
        
        .timeline-marker {
            position: absolute;
            left: -22px;
            top: 0;
        }
        
        .timeline-marker-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #007bff;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        
        .timeline-content {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            margin-left: 15px;
        }
        
        .timeline-title {
            margin-bottom: 8px;
            color: #333;
        }
        
        .timeline-description {
            margin-bottom: 8px;
            color: #666;
        }
        </style>
    `;
}

// Show alert function
function showAlert(type, message) {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert ${alertClass} alert-dismissible fade show position-fixed`;
    alertElement.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertElement.innerHTML = `
        <i class="fas ${icon} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alertElement.parentNode) {
            alertElement.remove();
        }
    }, 5000);
    
    // Initialize Bootstrap alert
    if (typeof bootstrap !== 'undefined') {
        new bootstrap.Alert(alertElement);
    }
}
</script>
@endpush