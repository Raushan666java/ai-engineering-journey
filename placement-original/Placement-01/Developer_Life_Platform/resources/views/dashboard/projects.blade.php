@extends('layouts.app')

@section('title', 'Projects - Developer Life Platform')
@section('description', 'Manage your development projects, track progress, and showcase your portfolio.')

@section('content')
<div class="container py-4">
    <!-- Header Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h1 class="display-4 fw-bold text-dark mb-3">
                    <i class="fas fa-folder-open text-info me-3"></i>
                    Project Management
                </h1>
                <p class="lead text-muted mb-4">
                    Track your development projects, collaborate with teams, and build an impressive portfolio
                </p>
            </div>
        </div>
    </div>

    <!-- Project Statistics -->
    <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-play-circle fa-3x text-primary"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $projectStats['active_projects'] }}</h3>
                    <p class="text-muted mb-0">Active Projects</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $projectStats['completed_projects'] }}</h3>
                    <p class="text-muted mb-0">Completed Projects</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-code-branch fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ number_format($projectStats['total_commits']) }}</h3>
                    <p class="text-muted mb-0">Total Commits</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-file-code fa-3x text-info"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ number_format($projectStats['lines_of_code']) }}</h3>
                    <p class="text-muted mb-0">Lines of Code</p>
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
                            <a href="#" class="btn btn-primary w-100 py-3">
                                <i class="fas fa-plus mb-2 d-block"></i>
                                New Project
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-success w-100 py-3">
                                <i class="fas fa-upload mb-2 d-block"></i>
                                Import from Git
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-info w-100 py-3">
                                <i class="fas fa-users mb-2 d-block"></i>
                                Team Projects
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-warning w-100 py-3">
                                <i class="fas fa-eye mb-2 d-block"></i>
                                Portfolio View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Active Projects -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0">
                            <i class="fas fa-play-circle text-primary me-2"></i>
                            Active Projects
                        </h5>
                        <a href="#" class="btn btn-sm btn-outline-primary">
                            <i class="fas fa-plus me-1"></i>
                            New Project
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-4">
                        <!-- Project 1 -->
                        <div class="col-lg-6">
                            <div class="card border border-primary h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h6 class="fw-bold mb-1">E-Commerce Platform</h6>
                                            <small class="text-muted">
                                                <i class="fas fa-calendar me-1"></i>
                                                Started 2 weeks ago
                                            </small>
                                        </div>
                                        <span class="badge bg-primary">In Progress</span>
                                    </div>
                                    <p class="text-muted mb-3">
                                        Full-stack e-commerce application with React frontend and Node.js backend
                                    </p>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between mb-1">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-muted">65%</small>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-primary" style="width: 65%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex gap-2">
                                            <span class="badge bg-light text-dark">React</span>
                                            <span class="badge bg-light text-dark">Node.js</span>
                                        </div>
                                        <div class="btn-group btn-group-sm">
                                            <a href="#" class="btn btn-outline-primary">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                            <a href="#" class="btn btn-outline-primary">
                                                <i class="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Project 2 -->
                        <div class="col-lg-6">
                            <div class="card border border-success h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h6 class="fw-bold mb-1">Task Management App</h6>
                                            <small class="text-muted">
                                                <i class="fas fa-calendar me-1"></i>
                                                Started 1 month ago
                                            </small>
                                        </div>
                                        <span class="badge bg-success">Testing</span>
                                    </div>
                                    <p class="text-muted mb-3">
                                        Productivity app with real-time collaboration and team management features
                                    </p>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between mb-1">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-muted">90%</small>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-success" style="width: 90%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex gap-2">
                                            <span class="badge bg-light text-dark">Vue.js</span>
                                            <span class="badge bg-light text-dark">Laravel</span>
                                        </div>
                                        <div class="btn-group btn-group-sm">
                                            <a href="#" class="btn btn-outline-success">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                            <a href="#" class="btn btn-outline-success">
                                                <i class="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Project 3 -->
                        <div class="col-lg-6">
                            <div class="card border border-warning h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h6 class="fw-bold mb-1">Machine Learning Model</h6>
                                            <small class="text-muted">
                                                <i class="fas fa-calendar me-1"></i>
                                                Started 3 days ago
                                            </small>
                                        </div>
                                        <span class="badge bg-warning text-dark">Planning</span>
                                    </div>
                                    <p class="text-muted mb-3">
                                        Predictive model for customer behavior analysis using Python and TensorFlow
                                    </p>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between mb-1">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-muted">15%</small>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar bg-warning" style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex gap-2">
                                            <span class="badge bg-light text-dark">Python</span>
                                            <span class="badge bg-light text-dark">TensorFlow</span>
                                        </div>
                                        <div class="btn-group btn-group-sm">
                                            <a href="#" class="btn btn-outline-warning">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                            <a href="#" class="btn btn-outline-warning">
                                                <i class="fab fa-github"></i>
                                            </a>
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

    <!-- Recent Activity -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-history text-primary me-2"></i>
                        Recent Activity
                    </h5>
                </div>
                <div class="card-body">
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker bg-success"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">Deployed Task Management App</h6>
                                <p class="text-muted mb-1">Successfully deployed v2.1 to production server</p>
                                <small class="text-muted">2 hours ago</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-primary"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">Updated E-Commerce Platform</h6>
                                <p class="text-muted mb-1">Added payment gateway integration and user authentication</p>
                                <small class="text-muted">1 day ago</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-warning"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">Started ML Model Project</h6>
                                <p class="text-muted mb-1">Created new repository and initial project structure</p>
                                <small class="text-muted">3 days ago</small>
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
            <div class="card bg-gradient text-white text-center" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                <div class="card-body py-5">
                    <h3 class="fw-bold mb-3">Build Something Amazing!</h3>
                    <p class="lead mb-4">Start a new project and showcase your skills to potential employers.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="#" class="btn btn-light btn-lg">
                            <i class="fas fa-plus me-2"></i>
                            Create New Project
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
.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-color);
}

.timeline-item {
    position: relative;
    padding-bottom: 2rem;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-marker {
    position: absolute;
    left: -2.25rem;
    top: 0.25rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 0 2px var(--border-color);
}

.timeline-content {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 3px solid var(--primary-color);
}
</style>
@endsection
